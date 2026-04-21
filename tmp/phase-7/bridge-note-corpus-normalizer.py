#!/usr/bin/env python3
"""Phase 7.12 bridge-note corpus normalizer.

This script:
- walks the current Spore bridge-note inventory
- normalizes legacy inline review-claim blocks to the v2 bullet/support-line form
- appends ``TODO: slug-deferred`` to every review-claim concept outside frozen v2
- emits ``tmp/bridge-note-slug-violations.tsv`` as the claim-level authority file

It is intentionally idempotent so it can be re-run after patching edge cases.
"""

from __future__ import annotations

import csv
import os
import re
from dataclasses import dataclass
from pathlib import Path


ROOT = Path("/Users/darrenzal/projects")
SPORE = ROOT / "spore"
INVENTORY = SPORE / "tmp/bridge-note-inventory.tsv"
VOCAB = SPORE / "docs/research/concepts-p2p-wiki.yaml"
VIOLATIONS_TSV = SPORE / "tmp/bridge-note-slug-violations.tsv"

R_START_RE = re.compile(
    r"^\*\*R(?P<num>\d+)\*\* \[review claim\] "
    r"\[target: (?P<target>[^\]]+)\] "
    r"\[concept: (?P<concept>[^\]]+)\]\s*$"
)
R_BULLET_RE = re.compile(
    r"^- \*\*R(?P<num>\d+)\*\*: .* "
    r"\[target: (?P<target>[^\]]+)\] "
    r"\[concept: (?P<concept>[^\]]+)\]"
    r"(?P<deferred> TODO: slug-deferred)?\s*$"
)
NEXT_R_RE = re.compile(r"^\*\*R\d+\*\* \[review claim\] ")
SUPPORT_ITALIC_RE = re.compile(r"^\*(?P<body>.*)\*$")
INLINE_SUPPORT_RE = re.compile(r"^(?P<prefix>.*?)(?P<support>\*[^*]*supported by[^*]*\*)\s*$", re.IGNORECASE)
STD_SUPPORT_RE = re.compile(
    r"^R(?P<num>\d+) is supported by (?P<rest>.+)$", re.IGNORECASE
)
ALT_SUPPORT_RE = re.compile(
    r"^(?P<prefix>.+?)\s+Supported by (?P<rest>.+)$", re.IGNORECASE
)
SLUG_RE = re.compile(r"^\s*- slug:\s*(\S+)\s*$")


@dataclass
class InventoryRow:
    repo: str
    path: str
    review_claim_count: int

    @property
    def resolved_path(self) -> Path:
        candidate = ROOT / self.path
        if candidate.exists():
            return candidate

        basename = Path(self.path).name
        matches = [
            path
            for path in (ROOT / self.repo).rglob(basename)
            if f"/{self.repo}/" in str(path)
        ]
        if len(matches) != 1:
            raise FileNotFoundError(f"Could not uniquely resolve inventory path {self.path}: {matches}")
        return matches[0]


def load_inventory() -> list[InventoryRow]:
    rows = []
    with INVENTORY.open() as fh:
        for raw in csv.DictReader(fh, delimiter="\t"):
            rows.append(
                InventoryRow(
                    repo=raw["repo"],
                    path=raw["path"],
                    review_claim_count=int(raw["review-claim-count"]),
                )
            )
    return rows


def load_allowed_slugs() -> set[str]:
    allowed = set()
    with VOCAB.open() as fh:
        for line in fh:
            match = SLUG_RE.match(line)
            if match:
                allowed.add(match.group(1))
    return allowed


def split_legacy_blocks(lines: list[str]) -> list[tuple[int, int]]:
    ranges = []
    i = 0
    while i < len(lines):
        if R_START_RE.match(lines[i]):
            start = i
            i += 1
            while i < len(lines) and not NEXT_R_RE.match(lines[i]) and not lines[i].startswith("## "):
                i += 1
            ranges.append((start, i))
        else:
            i += 1
    return ranges


def collapse_claim_lines(claim_lines: list[str]) -> str:
    text = " ".join(line.strip() for line in claim_lines if line.strip())
    return re.sub(r"\s+", " ", text).strip()


def normalize_support(block_lines: list[str], r_number: str) -> tuple[list[str], int, str | None]:
    support_index = None
    support_text = None
    inline_prefix = None
    for index in range(len(block_lines) - 1, -1, -1):
        raw_line = block_lines[index].rstrip()
        line = raw_line.strip()
        italic = SUPPORT_ITALIC_RE.match(line)
        if italic and "supported by" in italic.group("body").lower():
            support_index = index
            support_text = italic.group("body").strip()
            break
        inline = INLINE_SUPPORT_RE.match(raw_line)
        if inline:
            support_index = index
            inline_prefix = inline.group("prefix").rstrip()
            support_text = inline.group("support").strip().strip("*")
            break

    if support_text is None:
        raise ValueError(f"Could not find legacy support line for R{r_number}")

    prefix_note = None
    match = STD_SUPPORT_RE.match(support_text)
    if match:
        rendered_support = match.group("rest").strip()
    else:
        match = ALT_SUPPORT_RE.match(support_text)
        if match:
            prefix_note = match.group("prefix").strip()
            rendered_support = match.group("rest").strip()
        else:
            rendered_support = support_text

    rendered = [f"  supported_by: {rendered_support}"]
    if prefix_note:
        rendered.append(f"  {prefix_note}")

    return rendered, support_index, inline_prefix


def normalize_file(path: Path, allowed_slugs: set[str]) -> bool:
    original = path.read_text()
    lines = original.splitlines()
    ranges = split_legacy_blocks(lines)
    if not ranges:
        return False

    changed = False
    offset = 0
    for start, end in ranges:
        start += offset
        end += offset
        block = lines[start:end]
        header = block[0]
        match = R_START_RE.match(header)
        if not match:
            continue

        number = match.group("num")
        target = match.group("target").strip()
        concept = match.group("concept").strip()
        support_lines, support_index, inline_prefix = normalize_support(block, number)

        claim_lines = block[1:support_index]
        if inline_prefix:
            claim_lines.append(inline_prefix)
        while claim_lines and not claim_lines[-1].strip():
            claim_lines.pop()
        claim_text = collapse_claim_lines(claim_lines)

        concept_suffix = ""
        if concept not in allowed_slugs:
            concept_suffix = " TODO: slug-deferred"

        new_block = [
            f"- **R{number}**: {claim_text} [target: {target}] [concept: {concept}]{concept_suffix}",
            *support_lines,
        ]

        if block != new_block:
            lines[start:end] = new_block
            offset += len(new_block) - (end - start)
            changed = True

    if changed:
        path.write_text("\n".join(lines) + "\n")

    return changed


def collect_violations(path: Path, allowed_slugs: set[str]) -> list[dict[str, str]]:
    rows: list[dict[str, str]] = []
    repo = path.parts[4]
    note_path = os.path.relpath(path, ROOT)
    for line in path.read_text().splitlines():
        match = R_START_RE.match(line)
        if not match:
            match = R_BULLET_RE.match(line)
        if not match:
            continue
        concept = match.group("concept").strip()
        if concept in allowed_slugs:
            continue
        rows.append(
            {
                "repo": repo,
                "note_path": note_path,
                "r_claim": f"R{match.group('num')}",
                "current_slug": concept,
                "proposed_v2_slug_or_todo": "TODO: defer",
            }
        )
    return rows


def write_violations(violations: list[dict[str, str]]) -> None:
    fieldnames = [
        "repo",
        "note_path",
        "r_claim",
        "current_slug",
        "proposed_v2_slug_or_todo",
    ]
    with VIOLATIONS_TSV.open("w", newline="") as fh:
        writer = csv.DictWriter(
            fh,
            fieldnames=fieldnames,
            delimiter="\t",
            lineterminator="\n",
        )
        writer.writeheader()
        writer.writerows(violations)


def main() -> None:
    allowed_slugs = load_allowed_slugs()
    rows = [row for row in load_inventory() if row.review_claim_count > 0]
    changed_files = 0

    for row in rows:
        if normalize_file(row.resolved_path, allowed_slugs):
            changed_files += 1

    violations: list[dict[str, str]] = []
    for row in rows:
        violations.extend(collect_violations(row.resolved_path, allowed_slugs))

    write_violations(violations)
    print(f"normalized_files\t{changed_files}")
    print(f"violation_rows\t{len(violations)}")


if __name__ == "__main__":
    main()
