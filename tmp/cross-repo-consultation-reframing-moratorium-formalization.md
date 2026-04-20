# Cross-repo consultation - reframing-moratorium-formalization

- Proposal slug: reframing-moratorium-formalization
- Covered findings: F-027
- Date opened: 2026-04-20
- Date last updated: 2026-04-20
- Consulted repos: Spore, Intelligence Commons, Poietic Match
- Single-operator caveat: Darren is currently both proposal author and approver; this artifact is an externalized self-review surface, not proof of independent consensus.

## Stance blocks

### Spore
- Consulted: [PENDING]
- Stance: support
- Rationale: Spore's current meta-corpus would benefit from this formalization because the moratorium rules already carry governance weight across phases and repos, but today they live only inside the review plan and the inventory still marks them as lacking a formal standalone document (`docs/research/planning/corpus-foundational-review-v1-plan.md:37-58`; `tmp/meta-corpus-inventory.tsv:1-8`; `corpus-foundational-review-findings.md:885-914`). Creating a standalone protocol would give Spore a stable amendment and citation target without changing the underlying moratorium substance (`docs/research/planning/reframing/reframing-moratorium-formalization.md:24-43`).
- Execution conditions: Support conditional on harvesting the existing rule set only; expanding exception categories, branch-isolation rules, or repo scope belongs in a separate authorization path (`docs/research/planning/reframing/reframing-moratorium-formalization.md:26-37,118-124,153-156`).

### Intelligence Commons
- Consulted: [PENDING]
- Stance: support
- Rationale: Intelligence Commons' current governance surface would benefit from this change because IC is already bound by the same main-branch moratorium in the plan, yet has no standalone protocol to cite when that cross-repo write constraint is invoked (`docs/research/planning/corpus-foundational-review-v1-plan.md:39-58`; `docs/research/planning/reframing/reframing-moratorium-formalization.md:102-130`). Formalization reduces ambiguity without inventing new IC-local obligations.
- Execution conditions: Support conditional on the standalone protocol preserving the existing cross-repo exception log and close-timestamp discipline rather than introducing repo-specific variants (`docs/research/planning/reframing/reframing-moratorium-formalization.md:26-33,128-130`).

### Poietic Match
- Consulted: [PENDING]
- Stance: support
- Rationale: Poietic Match's current governance surface would benefit from this change for the same reason: PM is already inside the moratorium's branch-discipline contract, but the operative rules currently live inside a Spore plan snapshot rather than a named protocol artifact (`docs/research/planning/corpus-foundational-review-v1-plan.md:39-58`; `docs/research/planning/reframing/reframing-moratorium-formalization.md:102-130`). A standalone protocol makes the existing cross-repo constraint more legible and auditable.
- Execution conditions: Support conditional on the standalone protocol preserving the existing cross-repo exception log and close-timestamp discipline rather than introducing repo-specific variants (`docs/research/planning/reframing/reframing-moratorium-formalization.md:26-33,128-130`).

## Open objections

None at open.

## Frame-change sufficiency verdict (FR-11)

- frame-change-required: yes
- Rationale: Yes. F-027 is not just asking for cleaner plan prose; it moves moratorium mechanics from a plan-embedded governance surface into a standalone meta-corpus protocol and authorizes a new protocol artifact to carry that load (`corpus-foundational-review-findings.md:885-914`; `docs/research/planning/reframing/reframing-moratorium-formalization.md:39-43`). That is a layer and artifact-identity change, so canon-review-v2 can only implement it after the reframing decision is made.

## Sign-off

- ADR drafting may begin: [PENDING - yes | no]
- Signed-off-by: [PENDING]
- Timestamp: [PENDING]
