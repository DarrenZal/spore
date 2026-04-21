# Cross-repo consultation - reframing-learning-field-host-elevation

- Proposal slug: reframing-learning-field-host-elevation
- Covered findings: F-029
- Date opened: 2026-04-20
- Date last updated: 2026-04-21
- Consulted repos: Spore, Intelligence Commons, Poietic Match
- Single-operator caveat: author and approver are the same person in this phase; this artifact is an externalized self-review surface per FR-17, not proof of independent consensus.

## Stance blocks

### Spore
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T06:08:30Z
- Stance: support
- Rationale: Spore's current meta-corpus would benefit from this elevation because Spore already treats the learning-field structure as part of the shared intake/canon control surface, yet the authoritative definition still lives in an IC-local pattern doc rather than beside the other meta-corpus protocols (`docs/research/planning/corpus-foundational-review-methodology.md:105-114`; `docs/research/planning/learning-field-intake-protocol.md:16-21`; `tmp/meta-corpus-inventory.tsv:8`; `corpus-foundational-review-findings.md:946-980`). The proposal makes host placement follow governance scope instead of historical location (`docs/research/planning/reframing/reframing-learning-field-host-elevation.md:24-42`).
- Execution conditions: Support conditional on `reframing-repo-topology-trunk` reaching at least `authorized-ADR` first, with the eventual ADR bundle choosing the authoritative host from the scenario table before any doc move begins (`docs/research/planning/reframing/reframing-learning-field-host-elevation.md:26-35,112-133`).

### Intelligence Commons
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T06:08:30Z
- Stance: can-live-with
- Rationale: Intelligence Commons can live with this change because `project-learning-membrane.md` currently carries cross-project authority from an IC-local pattern surface, which exceeds its local-host role and makes IC responsible for a governance boundary the repo does not actually own (`/Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:41-103`; `corpus-foundational-review-findings.md:946-980`). The tradeoff is that IC would give up sole authority for the learning-field structure and would need to narrow the pattern into a local instantiation/reference artifact rather than the cross-project source of truth (`docs/research/planning/reframing/reframing-learning-field-host-elevation.md:30-40,122-130`).
- Execution conditions: Acceptable conditional on retaining an IC-local pattern or reference note for IC-specific practice and on not demoting the current host before the replacement authoritative protocol exists (`docs/research/planning/reframing/reframing-learning-field-host-elevation.md:32,38-41,128-132`).

### Poietic Match
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T06:08:30Z
- Stance: support
- Rationale: Poietic Match's current governance surface would benefit from a single authoritative host for the learning-field structure because PM is already downstream of the shared intake/canon pair but currently has to rely on an IC-local pattern as the operative cross-project reference (`docs/research/planning/learning-field-intake-protocol.md:16-21`; `docs/research/planning/reframing/reframing-learning-field-host-elevation.md:18-27,106-110`). A formal host would reduce that ambiguity without requiring PM to host the structure itself.
- Execution conditions: Support conditional on the trunk proposal fixing the topology first and on any PM-side execution staying at the level of adoption/reference notes unless a scenario-specific ADR explicitly requires more (`docs/research/planning/reframing/reframing-learning-field-host-elevation.md:26-35,118-132`).

## Open objections

None at open.

## Frame-change sufficiency verdict (FR-11)

- frame-change-required: yes
- Rationale: Yes. F-029 re-layers a governance artifact across both repo and layer boundaries by moving the authoritative learning-field host out of an IC-local pattern surface into a formal cross-project meta-corpus host, and the proposal is explicitly topology-dependent on F-037 (`corpus-foundational-review-findings.md:946-980`; `docs/research/planning/reframing/reframing-learning-field-host-elevation.md:49-56,112-133`). A repo-local canon-review ADR drafted before the topology decision would silently pre-commit the new host, so this cannot be routed back to canon-review-v2.

## Sign-off

- ADR drafting may begin: yes
- Signed-off-by: Darren Zal
- Timestamp: 2026-04-21T06:08:30Z
