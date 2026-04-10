#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage:
  bash scripts/build_deep_research_context_pack.sh [--extended] [output_path]

Options:
  --extended   Include secondary bridge notes and supporting ops docs.
  -h, --help   Show this help.

Examples:
  bash scripts/build_deep_research_context_pack.sh
  bash scripts/build_deep_research_context_pack.sh --extended
  bash scripts/build_deep_research_context_pack.sh tmp/my-pack.md
EOF
}

MODE="core"
OUTPUT_PATH=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --extended)
      MODE="extended"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      if [[ -n "$OUTPUT_PATH" ]]; then
        usage >&2
        exit 1
      fi
      OUTPUT_PATH="$1"
      shift
      ;;
  esac
done

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SIBLING_ROOT="${SIBLING_REPOS_ROOT:-$(dirname "$REPO_ROOT")}"

CORE_FILES=(
  "$REPO_ROOT/README.md"
  "$REPO_ROOT/docs/project-vision.md"
  "$REPO_ROOT/docs/roadmap.md"
  "$REPO_ROOT/docs/synthesis/coordination-grammar.md"
  "$REPO_ROOT/docs/synthesis/decision-memo.md"
  "$SIBLING_ROOT/intelligence-commons/docs/project-vision.md"
  "$SIBLING_ROOT/BioregionKnwoledgeCommons/BioregionalKnowledgeCommoning/docs/project-vision.md"
  "$SIBLING_ROOT/BioregionKnwoledgeCommons/BioregionalKnowledgeCommoning/docs/coordination-stack.md"
  "$SIBLING_ROOT/darren-workflow/docs/skill-ecosystem-overview.md"
  "$SIBLING_ROOT/dobby/README.md"
  "$SIBLING_ROOT/personal-koi-mcp/README.md"
  "$SIBLING_ROOT/RegenAI/docs/positioning-memo.md"
  "$SIBLING_ROOT/SalishOakSeeds/docs/rc-proposal-v2.md"
)

EXTENDED_ONLY_FILES=(
  "$REPO_ROOT/docs/governance/adoption-guide.md"
  "$REPO_ROOT/docs/foundations/spore-instance-model.md"
  "$REPO_ROOT/docs/research/connections/open-civics.md"
  "$REPO_ROOT/docs/research/connections/johar-word-not-thing.md"
  "$REPO_ROOT/docs/research/connections/bennett-every-timeline.md"
  "$SIBLING_ROOT/darren-workflow/docs/plan-review-workflow.md"
  "$SIBLING_ROOT/dobby/docs/ARCHITECTURE.md"
)

FILES=("${CORE_FILES[@]}")
if [[ "$MODE" == "extended" ]]; then
  FILES+=("${EXTENDED_ONLY_FILES[@]}")
fi

if [[ -z "$OUTPUT_PATH" ]]; then
  OUTPUT_PATH="$REPO_ROOT/tmp/deep-research-context-pack-2026-04-$MODE.md"
fi

MISSING_FILES=()
AVAILABLE_FILES=()
for file in "${FILES[@]}"; do
  if [[ ! -f "$file" ]]; then
    MISSING_FILES+=("$file")
  else
    AVAILABLE_FILES+=("$file")
  fi
done

if [[ ${#MISSING_FILES[@]} -gt 0 ]]; then
  echo "Warning: ${#MISSING_FILES[@]} file(s) not found (sibling repos may not be present):" >&2
  printf '  - %s\n' "${MISSING_FILES[@]}" >&2
  echo "Continuing with ${#AVAILABLE_FILES[@]} available files." >&2
fi

if [[ ${#AVAILABLE_FILES[@]} -eq 0 ]]; then
  echo "Error: No files available. Check SIBLING_REPOS_ROOT or repo layout." >&2
  exit 1
fi

FILES=("${AVAILABLE_FILES[@]}")

mkdir -p "$(dirname "$OUTPUT_PATH")"

{
  echo "# Spore Deep Research Context Pack (April 2026)"
  echo
  echo "- Generated: $(date '+%Y-%m-%d %H:%M:%S %Z')"
  echo "- Mode: $MODE"
  echo "- Source count: ${#FILES[@]}"
  echo
  echo "## Included Sources"
  for file in "${FILES[@]}"; do
    echo "- $file"
  done

  for file in "${FILES[@]}"; do
    echo
    echo "================================================================================"
    echo "SOURCE: $file"
    echo "================================================================================"
    echo
    cat "$file"
    echo
  done
} > "$OUTPUT_PATH"

echo "Wrote $OUTPUT_PATH"
