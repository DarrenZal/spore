#!/usr/bin/env python3
"""Validate governed spec DAG: frontmatter conformance, namespace, dependencies, acyclicity.

Usage:
  python3 scripts/validate_spec_dag.py
  python3 scripts/validate_spec_dag.py --docs-root docs/ --project-id spore
  python3 scripts/validate_spec_dag.py --strict  # exit non-zero on warnings too
"""
import argparse
import json
import os
import re
import sys
from pathlib import Path


# ---------------------------------------------------------------------------
# Minimal frontmatter parser (no PyYAML dependency)
# ---------------------------------------------------------------------------

def parse_frontmatter(text: str):
    """Extract YAML frontmatter from markdown text. Returns (dict, has_frontmatter)."""
    if not text.startswith("---"):
        return {}, False
    try:
        end = text.index("\n---\n", 3)
    except ValueError:
        # Try end-of-file case
        if text.rstrip().endswith("\n---") or text.rstrip() == "---":
            end = text.rindex("\n---")
        else:
            return {}, False

    raw = text[3:end].strip()
    if not raw:
        return {}, True

    result = {}
    current_key = None
    current_list = None

    for line in raw.split("\n"):
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue

        # List item under current key
        if stripped.startswith("- ") and current_key and current_list is not None:
            item = stripped[2:].strip().strip("'\"")
            # Skip YAML comment items (e.g., "- # placeholder")
            if not item or item.startswith("#"):
                continue
            current_list.append(item)
            continue

        # Inline list: key: [a, b, c]
        m = re.match(r'^([a-zA-Z_][a-zA-Z0-9_-]*)\s*:\s*\[(.*)]\s*$', stripped)
        if m:
            if current_key and current_list is not None:
                result[current_key] = current_list
            current_key = m.group(1)
            items = [x.strip().strip("'\"") for x in m.group(2).split(",") if x.strip()]
            result[current_key] = items
            current_key = None
            current_list = None
            continue

        # Key: value
        m = re.match(r'^([a-zA-Z_][a-zA-Z0-9_-]*)\s*:\s*(.*?)\s*$', stripped)
        if m:
            if current_key and current_list is not None:
                result[current_key] = current_list
            key = m.group(1)
            val = m.group(2).strip("'\"")
            if val == "" or val == "[]":
                # Empty value — might be start of a list block
                current_key = key
                current_list = []
            else:
                result[key] = val
                current_key = None
                current_list = None
            continue

    # Flush last list
    if current_key and current_list is not None:
        result[current_key] = current_list

    return result, True


# ---------------------------------------------------------------------------
# Config loading
# ---------------------------------------------------------------------------

def load_project_config(repo_root: Path):
    """Load project_id and docs_root from docs/_meta/project.json if it exists."""
    config_path = repo_root / "docs" / "_meta" / "project.json"
    if config_path.exists():
        with open(config_path) as f:
            data = json.load(f)
        return data.get("project_id"), data.get("docs_root", "docs/")
    return None, "docs/"


# ---------------------------------------------------------------------------
# Validation
# ---------------------------------------------------------------------------

ALLOWED_STATUSES = {"draft", "active", "deprecated", "superseded"}
TIER0_REQUIRED = {"doc_id", "doc_kind", "status", "depends_on"}


def validate_repo(repo_root: Path, project_id: str, docs_root: str):
    """Walk docs, validate governed artifacts, return (errors, warnings, info)."""
    errors = []
    warnings = []
    info = []

    docs_path = repo_root / docs_root
    if not docs_path.exists():
        errors.append(f"docs_root not found: {docs_path}")
        return errors, warnings, info

    # Collect all governed docs
    governed = {}  # doc_id -> {path, frontmatter}
    external_refs = set()

    for md_file in sorted(docs_path.rglob("*.md")):
        rel_path = md_file.relative_to(repo_root)
        try:
            text = md_file.read_text(encoding="utf-8")
        except (UnicodeDecodeError, PermissionError):
            warnings.append(f"{rel_path}: could not read file")
            continue

        fm, has_fm = parse_frontmatter(text)

        if not has_fm:
            # No frontmatter at all — ungoverned, ignored
            continue

        doc_id = fm.get("doc_id")
        if not doc_id:
            # Has frontmatter but missing doc_id — warning
            warnings.append(f"{rel_path}: has frontmatter but missing doc_id — intended for governance?")
            continue

        # --- Governed doc: full Tier-0 validation ---

        # Check Tier-0 required fields
        for field in TIER0_REQUIRED:
            if field not in fm:
                if field == "depends_on":
                    # depends_on may be absent — treat as empty
                    fm["depends_on"] = []
                else:
                    errors.append(f"{rel_path} ({doc_id}): missing required Tier-0 field '{field}'")

        # Namespace prefix check
        if project_id:
            expected_prefix = f"{project_id}."
            if not doc_id.startswith(expected_prefix):
                errors.append(
                    f"{rel_path} ({doc_id}): doc_id must start with '{expected_prefix}' "
                    f"(project_id from project.json)"
                )

        # Status check
        status = fm.get("status", "")
        if status and status not in ALLOWED_STATUSES:
            errors.append(f"{rel_path} ({doc_id}): invalid status '{status}' — allowed: {sorted(ALLOWED_STATUSES)}")

        # Superseded requires superseded_by
        if status == "superseded":
            superseded_by = fm.get("superseded_by", "")
            if not superseded_by:
                errors.append(f"{rel_path} ({doc_id}): status is 'superseded' but missing 'superseded_by' field")
            elif superseded_by.startswith("~") or superseded_by.startswith("/Users/"):
                errors.append(
                    f"{rel_path} ({doc_id}): superseded_by contains machine-local path '{superseded_by}' "
                    f"— use repo-relative path, cross-repo doc_id, or URI"
                )

        # Duplicate doc_id check
        if doc_id in governed:
            errors.append(
                f"{rel_path} ({doc_id}): duplicate doc_id — also at {governed[doc_id]['path']}"
            )
        else:
            governed[doc_id] = {"path": str(rel_path), "frontmatter": fm}

    # --- Dependency validation ---

    for doc_id, entry in governed.items():
        fm = entry["frontmatter"]
        deps = fm.get("depends_on", [])
        if isinstance(deps, str):
            deps = [deps]

        for dep in deps:
            if not dep:
                continue
            # Determine if local or external
            if project_id and dep.startswith(f"{project_id}."):
                # Local ref — must resolve
                if dep not in governed:
                    errors.append(
                        f"{entry['path']} ({doc_id}): broken local depends_on '{dep}' — no such doc_id in repo"
                    )
            else:
                # External ref — info only
                external_refs.add(dep)

    # --- Cycle detection ---
    # Build adjacency list and run DFS
    adj = {did: [] for did in governed}
    for doc_id, entry in governed.items():
        deps = entry["frontmatter"].get("depends_on", [])
        if isinstance(deps, str):
            deps = [deps]
        for dep in deps:
            if dep in governed:
                adj[doc_id].append(dep)

    visited = set()
    in_stack = set()
    cycles = []

    def dfs(node, path):
        if node in in_stack:
            cycle_start = path.index(node)
            cycles.append(path[cycle_start:] + [node])
            return
        if node in visited:
            return
        visited.add(node)
        in_stack.add(node)
        for neighbor in adj.get(node, []):
            dfs(neighbor, path + [node])
        in_stack.discard(node)

    for node in adj:
        if node not in visited:
            dfs(node, [])

    for cycle in cycles:
        errors.append(f"Cycle detected: {' → '.join(cycle)}")

    # --- Summary info ---
    info.append(f"Governed docs: {len(governed)}")
    info.append(f"External depends_on refs: {len(external_refs)}")
    if external_refs:
        for ref in sorted(external_refs):
            info.append(f"  external: {ref}")

    return errors, warnings, info


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Validate governed spec DAG")
    parser.add_argument("--docs-root", help="Override docs root directory (relative to repo root)")
    parser.add_argument("--project-id", help="Override project ID for namespace validation")
    parser.add_argument("--strict", action="store_true", help="Exit non-zero on warnings too")
    parser.add_argument("repo_root", nargs="?", default=".", help="Repository root (default: current directory)")
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()

    # Load config
    config_project_id, config_docs_root = load_project_config(repo_root)
    project_id = args.project_id or config_project_id
    docs_root = args.docs_root or config_docs_root

    if not project_id:
        print("Warning: no project_id found (no docs/_meta/project.json and no --project-id). "
              "Namespace validation disabled.", file=sys.stderr)

    # Run validation
    errors, warnings, info = validate_repo(repo_root, project_id, docs_root)

    # Output
    for line in info:
        print(f"  info: {line}")
    for line in warnings:
        print(f"  warn: {line}")
    for line in errors:
        print(f"  ERROR: {line}")

    print()
    if errors:
        print(f"FAILED: {len(errors)} error(s), {len(warnings)} warning(s)")
        sys.exit(1)
    elif warnings and args.strict:
        print(f"STRICT FAIL: 0 errors, {len(warnings)} warning(s)")
        sys.exit(1)
    elif warnings:
        print(f"PASSED with {len(warnings)} warning(s)")
        sys.exit(0)
    else:
        print("PASSED: clean")
        sys.exit(0)


if __name__ == "__main__":
    main()
