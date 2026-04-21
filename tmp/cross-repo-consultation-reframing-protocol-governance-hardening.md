# Cross-repo consultation - reframing-protocol-governance-hardening

- Proposal slug: reframing-protocol-governance-hardening
- Covered findings: F-025, F-026, F-031
- Date opened: 2026-04-20
- Date last updated: 2026-04-21
- Consulted repos: Spore, Intelligence Commons, Poietic Match
- Single-operator caveat: Darren Zal is currently both proposal author and approver; this artifact is an externalized self-review surface per FR-17, not proof of independent consensus.

## Stance blocks

### Spore
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: support
- Rationale: Spore's current meta-corpus would benefit from this hardening because the canon-review protocol currently self-harvests, publishes an ADR template with `status: proposed`, and defines pre-adoption dispositions without a post-adoption challenge path, which is exactly the governance gap captured in F-025, F-026, and F-031 (`docs/research/planning/canon-review-protocol.md:10-21,83-89,170-175`; `corpus-foundational-review-findings.md:828-1042`). The proposal strengthens the protocol surface Spore actually hosts instead of leaving protocol authority dependent on operator memory and inline translation comments (`docs/research/planning/reframing/reframing-protocol-governance-hardening.md:17-42`).
- Execution conditions: Support conditional on routing all protocol and validator changes through the authorized ADR bundle, and on making the status-vocabulary unification explicit by `doc_kind` or equivalent so proposal lifecycle states do not collapse back into ADR status drift (`docs/research/planning/reframing/reframing-protocol-governance-hardening.md:29-35,129-136,154-158`).

### Intelligence Commons
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: support
- Rationale: Intelligence Commons' current governance surface would benefit from this change because IC consumes the shared canon-review stack for cross-repo canon work, so a constitutional amendment guard, named appeal path, and unified status semantics reduce downstream ambiguity rather than adding a repo-local exception (`docs/research/planning/reframing/reframing-protocol-governance-hardening.md:17-25,114-136`). The proposal does add procedural weight through double-cooling and tighter lineage, but that cost is proportionate to the protocol's cross-repo authority.
- Execution conditions: Support conditional on surfacing any IC-local override or validation behavior before execution; the proposal assumes IC remains a consumer of the shared Spore-hosted protocol rather than a silent fork (`docs/research/planning/reframing/reframing-protocol-governance-hardening.md:131-136`).

### Poietic Match
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: support
- Rationale: Poietic Match's current governance surface would benefit from this change for the same reason: PM depends on the shared canon-review protocol when cross-repo canon work is coordinated, and the current self-amendment loop plus status drift leaves that dependency under-governed (`docs/research/planning/reframing/reframing-protocol-governance-hardening.md:17-25,114-136`; `corpus-foundational-review-findings.md:828-1042`). A clearer constitutional guard and appeal path would make PM's downstream use of the stack more durable.
- Execution conditions: Support conditional on surfacing any PM-local override or validation behavior before execution; the proposal assumes PM remains a consumer of the shared Spore-hosted protocol rather than a silent fork (`docs/research/planning/reframing/reframing-protocol-governance-hardening.md:131-136`).

## Open objections

None at open.

## Frame-change sufficiency verdict (FR-11)

- frame-change-required: yes
- Rationale: Yes. The proposal revises the canon-review protocol itself by adding a constitutional amendment rule, a post-adoption appeal path, and a unified status vocabulary across protocol text, validator tooling, and live ADR practice (`corpus-foundational-review-findings.md:828-1042`; `docs/research/planning/reframing/reframing-protocol-governance-hardening.md:37-42`). A canon-review ADR cannot responsibly solve that from inside the self-amendment loop F-025 identifies; the frame change has to be authorized above ordinary ADR scope first.

## Sign-off

- ADR drafting may begin: yes
- Signed-off-by: Darren Zal <zaldarren@gmail.com>
- Timestamp: 2026-04-21T00:29:05Z
