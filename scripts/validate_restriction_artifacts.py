#!/usr/bin/env python3
"""Validate restriction_map and comparison_record YAML artifacts.

Usage:
  python3 scripts/validate_restriction_artifacts.py
  python3 scripts/validate_restriction_artifacts.py docs/protocols/examples
  python3 scripts/validate_restriction_artifacts.py path/to/file.yaml
  python3 scripts/validate_restriction_artifacts.py --strict
"""

import argparse
import sys
from pathlib import Path

import yaml


ARTIFACT_TYPES = {"restriction_map", "comparison_record"}
MAP_STATUSES = {
    "draft",
    "proposed",
    "provisional",
    "active",
    "contested",
    "superseded",
    "revoked",
    "expired",
}
VOCAB_STATUSES = {"draft", "provisional", "active", "superseded", "revoked", "expired"}
AUTHORITY_MODES = {"bilateral", "unilateral", "delegated"}
GROUNDING_STATUSES = {"grounded", "ambiguous", "unresolved"}
DIMENSION_STATUSES = {"comparable", "not_in_scope", "underdetermined"}
RECORD_AUTHORITIES = {"exploratory", "ratified"}
RELATION_LABELS = {
    "agreement",
    "refinement",
    "complementarity",
    "translation_mismatch",
    "intrinsic_obstruction",
    "intentional_non_gluing",
}


def load_yaml(path: Path):
    with open(path, "r", encoding="utf-8") as handle:
        data = yaml.safe_load(handle)
    return data


def is_non_empty_string(value):
    return isinstance(value, str) and value.strip() != ""


def expect_dict(obj, key, errors, path):
    value = obj.get(key)
    if not isinstance(value, dict):
        errors.append(f"{path}: '{key}' must be a mapping")
        return {}
    return value


def expect_list(obj, key, errors, path):
    value = obj.get(key)
    if not isinstance(value, list):
        errors.append(f"{path}: '{key}' must be a list")
        return []
    return value


def validate_dimension_vocab(block, errors, path):
    if not isinstance(block, dict):
        errors.append(f"{path}: 'dimension_vocabulary' must be a mapping")
        return
    if not is_non_empty_string(block.get("vocab_id")):
        errors.append(f"{path}: 'dimension_vocabulary.vocab_id' must be a non-empty string")
    if "version" not in block:
        errors.append(f"{path}: 'dimension_vocabulary.version' is required")
    status = block.get("status")
    if status is not None and status not in VOCAB_STATUSES:
        errors.append(
            f"{path}: invalid 'dimension_vocabulary.status' {status!r} — allowed: {sorted(VOCAB_STATUSES)}"
        )


def validate_map_dimension(dimension, errors, path):
    if not isinstance(dimension, dict):
        errors.append(f"{path}: dimension entry must be a mapping")
        return
    required = [
        "dimension_id",
        "value_kind",
        "source_question",
        "target_question",
        "projection_rule",
        "comparison_rule",
    ]
    for field in required:
        if not is_non_empty_string(dimension.get(field)):
            errors.append(f"{path}: missing or empty '{field}'")


def validate_record_dimension(dimension, authority, grounding_status, errors, warnings, path):
    if not isinstance(dimension, dict):
        errors.append(f"{path}: dimension entry must be a mapping")
        return

    if not is_non_empty_string(dimension.get("dimension_id")):
        errors.append(f"{path}: missing or empty 'dimension_id'")

    status = dimension.get("status")
    if status not in DIMENSION_STATUSES:
        errors.append(f"{path}: invalid dimension status {status!r} — allowed: {sorted(DIMENSION_STATUSES)}")
        return

    relation = dimension.get("relation")
    if grounding_status != "grounded" and relation is not None:
        errors.append(f"{path}: relation labels are not allowed when grounding status is {grounding_status!r}")

    if status == "comparable":
        if relation not in RELATION_LABELS:
            errors.append(f"{path}: comparable dimensions require a valid 'relation'")
        if relation == "refinement" and not is_non_empty_string(dimension.get("relation_detail")):
            errors.append(f"{path}: refinement relations require non-empty 'relation_detail'")
        if relation == "intentional_non_gluing":
            map_status = authority.get("map_status_at_comparison")
            if map_status != "active" and not is_non_empty_string(dimension.get("review_basis")):
                warnings.append(
                    f"{path}: intentional_non_gluing should be backed by an active map or explicit review_basis"
                )
    else:
        if relation is not None:
            errors.append(f"{path}: dimensions with status {status!r} must not include 'relation'")


def validate_restriction_map(data, errors, warnings, path):
    required_strings = ["map_id"]
    for field in required_strings:
        if not is_non_empty_string(data.get(field)):
            errors.append(f"{path}: missing or empty '{field}'")

    if "version" not in data:
        errors.append(f"{path}: missing 'version'")

    status = data.get("status")
    if status not in MAP_STATUSES:
        errors.append(f"{path}: invalid status {status!r} — allowed: {sorted(MAP_STATUSES)}")

    direction = expect_dict(data, "direction", errors, path)
    for field in ("source", "target"):
        if not is_non_empty_string(direction.get(field)):
            errors.append(f"{path}: missing or empty 'direction.{field}'")

    validate_dimension_vocab(data.get("dimension_vocabulary"), errors, path)

    authority_mode = data.get("authority_mode")
    if authority_mode not in AUTHORITY_MODES:
        errors.append(f"{path}: invalid authority_mode {authority_mode!r} — allowed: {sorted(AUTHORITY_MODES)}")

    authored_by = expect_list(data, "authored_by", errors, path)
    if not authored_by:
        errors.append(f"{path}: 'authored_by' must not be empty")
    else:
        for index, entry in enumerate(authored_by):
            if not isinstance(entry, dict) or not is_non_empty_string(entry.get("holon")):
                errors.append(f"{path}: authored_by[{index}] must be a mapping with non-empty 'holon'")

    ratified_by = data.get("ratified_by")
    if status != "draft":
        ratified = expect_list(data, "ratified_by", errors, path)
        if not ratified:
            errors.append(f"{path}: non-draft restriction maps must include non-empty 'ratified_by'")
    elif ratified_by is not None and not isinstance(ratified_by, list):
        errors.append(f"{path}: 'ratified_by' must be a list when present")

    purpose = expect_list(data, "purpose", errors, path)
    if not purpose:
        errors.append(f"{path}: 'purpose' must not be empty")

    if "allowed_operations" not in data:
        errors.append(f"{path}: missing 'allowed_operations'")
    elif not isinstance(data.get("allowed_operations"), list):
        errors.append(f"{path}: 'allowed_operations' must be a list")

    if "disallowed_operations" not in data:
        errors.append(f"{path}: missing 'disallowed_operations'")
    elif not isinstance(data.get("disallowed_operations"), list):
        errors.append(f"{path}: 'disallowed_operations' must be a list")

    grounding = expect_dict(data, "grounding_requirements", errors, path)
    if grounding.get("entity_resolution") != "required":
        warnings.append(f"{path}: 'grounding_requirements.entity_resolution' should usually be 'required'")

    compatibility = expect_dict(data, "compatibility_surface", errors, path)
    dimensions = expect_list(compatibility, "dimensions", errors, f"{path}:compatibility_surface")
    if not dimensions:
        errors.append(f"{path}: compatibility_surface.dimensions must not be empty")
    for index, dimension in enumerate(dimensions):
        validate_map_dimension(dimension, errors, f"{path}:compatibility_surface.dimensions[{index}]")

    if "omissions" not in data:
        errors.append(f"{path}: missing 'omissions'")
    elif not isinstance(data.get("omissions"), list):
        errors.append(f"{path}: 'omissions' must be a list")

    provenance = data.get("provenance")
    if not isinstance(provenance, dict):
        errors.append(f"{path}: missing or invalid 'provenance'")


def validate_comparison_record(data, errors, warnings, path):
    for field in ("comparison_id", "restriction_map_id", "source", "target"):
        if not is_non_empty_string(data.get(field)):
            errors.append(f"{path}: missing or empty '{field}'")

    authority = expect_dict(data, "authority", errors, path)
    map_status = authority.get("map_status_at_comparison")
    if map_status not in MAP_STATUSES:
        errors.append(
            f"{path}: invalid authority.map_status_at_comparison {map_status!r} — allowed: {sorted(MAP_STATUSES)}"
        )
    vocab_status = authority.get("vocabulary_status_at_comparison")
    if vocab_status not in VOCAB_STATUSES:
        errors.append(
            f"{path}: invalid authority.vocabulary_status_at_comparison {vocab_status!r} — allowed: {sorted(VOCAB_STATUSES)}"
        )
    record_authority = authority.get("record_authority")
    if record_authority not in RECORD_AUTHORITIES:
        errors.append(
            f"{path}: invalid authority.record_authority {record_authority!r} — allowed: {sorted(RECORD_AUTHORITIES)}"
        )
    elif record_authority == "ratified":
        if map_status != "active" or vocab_status != "active":
            errors.append(
                f"{path}: ratified records require active map and active vocabulary status at comparison time"
            )
    elif map_status == "active" and vocab_status == "active":
        warnings.append(
            f"{path}: record_authority is exploratory even though map and vocabulary are active"
        )

    comparison_context = expect_dict(data, "comparison_context", errors, path)
    for field in ("purpose", "decision_question", "standpoint"):
        if not is_non_empty_string(comparison_context.get(field)):
            errors.append(f"{path}: missing or empty 'comparison_context.{field}'")

    validate_dimension_vocab(data.get("dimension_vocabulary"), errors, path)

    grounding = expect_dict(data, "grounding", errors, path)
    grounding_status = grounding.get("status")
    if grounding_status not in GROUNDING_STATUSES:
        errors.append(
            f"{path}: invalid grounding.status {grounding_status!r} — allowed: {sorted(GROUNDING_STATUSES)}"
        )
    elif grounding_status != "grounded" and not is_non_empty_string(grounding.get("stop_reason")):
        warnings.append(f"{path}: non-grounded records should usually include grounding.stop_reason")

    dimensions = expect_list(data, "dimensions", errors, path)
    if not dimensions:
        errors.append(f"{path}: 'dimensions' must not be empty")
    for index, dimension in enumerate(dimensions):
        validate_record_dimension(
            dimension,
            authority,
            grounding_status,
            errors,
            warnings,
            f"{path}:dimensions[{index}]",
        )

    overall = expect_dict(data, "overall", errors, path)
    if not is_non_empty_string(overall.get("summary")):
        errors.append(f"{path}: missing or empty 'overall.summary'")

    provenance = data.get("provenance")
    if not isinstance(provenance, dict):
        errors.append(f"{path}: missing or invalid 'provenance'")


def validate_path(path: Path):
    errors = []
    warnings = []
    try:
        data = load_yaml(path)
    except yaml.YAMLError as exc:
        errors.append(f"{path}: YAML parse error: {exc}")
        return errors, warnings
    except OSError as exc:
        errors.append(f"{path}: read error: {exc}")
        return errors, warnings

    if not isinstance(data, dict):
        errors.append(f"{path}: top-level YAML value must be a mapping")
        return errors, warnings

    artifact_type = data.get("artifact_type")
    if artifact_type not in ARTIFACT_TYPES:
        errors.append(f"{path}: invalid artifact_type {artifact_type!r} — allowed: {sorted(ARTIFACT_TYPES)}")
        return errors, warnings

    if artifact_type == "restriction_map":
        validate_restriction_map(data, errors, warnings, str(path))
    else:
        validate_comparison_record(data, errors, warnings, str(path))

    return errors, warnings


def collect_yaml_paths(inputs):
    paths = []
    for raw in inputs:
        path = Path(raw)
        if path.is_dir():
            paths.extend(sorted(path.rglob("*.yaml")))
            paths.extend(sorted(path.rglob("*.yml")))
        elif path.is_file():
            paths.append(path)
    # Preserve order while removing duplicates.
    unique = []
    seen = set()
    for path in paths:
        resolved = path.resolve()
        if resolved not in seen:
            seen.add(resolved)
            unique.append(resolved)
    return unique


def main():
    parser = argparse.ArgumentParser(description="Validate restriction-map and comparison-record YAML artifacts")
    parser.add_argument(
        "paths",
        nargs="*",
        default=["docs/protocols/examples"],
        help="YAML files or directories to validate (default: docs/protocols/examples)",
    )
    parser.add_argument("--strict", action="store_true", help="Exit non-zero on warnings too")
    args = parser.parse_args()

    yaml_paths = collect_yaml_paths(args.paths)
    if not yaml_paths:
        print("  ERROR: no YAML artifacts found for validation")
        sys.exit(1)

    errors = []
    warnings = []
    for path in yaml_paths:
        path_errors, path_warnings = validate_path(path)
        errors.extend(path_errors)
        warnings.extend(path_warnings)

    print(f"  info: checked {len(yaml_paths)} YAML artifact(s)")
    for line in warnings:
        print(f"  warn: {line}")
    for line in errors:
        print(f"  ERROR: {line}")

    print()
    if errors:
        print(f"FAILED: {len(errors)} error(s), {len(warnings)} warning(s)")
        sys.exit(1)
    if warnings and args.strict:
        print(f"STRICT FAIL: 0 errors, {len(warnings)} warning(s)")
        sys.exit(1)

    if warnings:
        print(f"PASSED with {len(warnings)} warning(s)")
    else:
        print("PASSED: clean")


if __name__ == "__main__":
    main()
