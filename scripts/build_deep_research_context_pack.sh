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

CORE_FILES=(
  "/Users/darrenzal/projects/spore/README.md"
  "/Users/darrenzal/projects/spore/docs/project-vision.md"
  "/Users/darrenzal/projects/spore/docs/roadmap.md"
  "/Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md"
  "/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md"
  "/Users/darrenzal/projects/intelligence-commons/docs/project-vision.md"
  "/Users/darrenzal/projects/BioregionKnwoledgeCommons/BioregionalKnowledgeCommoning/docs/project-vision.md"
  "/Users/darrenzal/projects/BioregionKnwoledgeCommons/BioregionalKnowledgeCommoning/docs/coordination-stack.md"
  "/Users/darrenzal/projects/darren-workflow/docs/skill-ecosystem-overview.md"
  "/Users/darrenzal/projects/dobby/README.md"
  "/Users/darrenzal/projects/personal-koi-mcp/README.md"
  "/Users/darrenzal/projects/RegenAI/docs/positioning-memo.md"
  "/Users/darrenzal/projects/SalishOakSeeds/docs/rc-proposal-v2.md"
)

EXTENDED_ONLY_FILES=(
  "/Users/darrenzal/projects/spore/docs/governance/adoption-guide.md"
  "/Users/darrenzal/projects/spore/docs/foundations/spore-instance-model.md"
  "/Users/darrenzal/projects/spore/docs/research/connections/open-civics.md"
  "/Users/darrenzal/projects/spore/docs/research/connections/johar-word-not-thing.md"
  "/Users/darrenzal/projects/spore/docs/research/connections/bennett-every-timeline.md"
  "/Users/darrenzal/projects/darren-workflow/docs/plan-review-workflow.md"
  "/Users/darrenzal/projects/dobby/docs/ARCHITECTURE.md"
)

FILES=("${CORE_FILES[@]}")
if [[ "$MODE" == "extended" ]]; then
  FILES+=("${EXTENDED_ONLY_FILES[@]}")
fi

if [[ -z "$OUTPUT_PATH" ]]; then
  OUTPUT_PATH="$REPO_ROOT/tmp/deep-research-context-pack-2026-04-$MODE.md"
fi

MISSING_FILES=()
for file in "${FILES[@]}"; do
  if [[ ! -f "$file" ]]; then
    MISSING_FILES+=("$file")
  fi
done

if [[ ${#MISSING_FILES[@]} -gt 0 ]]; then
  echo "Missing required files:" >&2
  printf '  - %s\n' "${MISSING_FILES[@]}" >&2
  exit 1
fi

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
