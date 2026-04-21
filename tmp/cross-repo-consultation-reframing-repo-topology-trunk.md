# Cross-repo consultation — reframing-repo-topology-trunk

- Proposal slug: reframing-repo-topology-trunk
- Covered findings: F-037, F-038, F-039
- Date opened: 2026-04-20
- Date last updated: 2026-04-21
- Consulted repos: Spore, Intelligence Commons, Poietic Match
- FR-17 single-operator caveat: author and approver are currently the same person; this artifact is an externalized self-review surface, not proof of independent consensus.

## Stance blocks

### Spore
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: can-live-with
- Rationale: Spore's current canon can live with this topology because the plan and capstone already treat Spore/IC/PM as the operative canon-bearing trio, so ratifying the split with an inclusion rubric and merge-manifest contract would formalize the topology Spore already coordinates (`docs/research/planning/corpus-foundational-review-v1-plan.md:16-31,353-364`; `tmp/repo-topology-snapshot.md:7-29`; `corpus-foundational-review-findings.md:1239-1345`). The tradeoff is real: Spore would keep carrying shared-framing coordination and three repo-local copies of shared concepts rather than collapsing them now (`docs/research/planning/reframing/reframing-repo-topology-trunk.md:29-57,84-117`).
- Execution conditions: Acceptable conditional on the no-expansion guardrail, the committed merge-manifest rule, and explicit carrier docs for cross-repo framing so the three-repo burden stays auditable rather than folkloric (`docs/research/planning/reframing/reframing-repo-topology-trunk.md:48-57,98-117,202-210`).

### Intelligence Commons
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: can-live-with
- Rationale: Intelligence Commons can live with this proposal because the current evidence supports keeping the governance-domain split while admitting that the trio already behaves as one canon-bearing topology, and the proposal would bind IC to an explicit merge contract instead of leaving its role implicit (`tmp/repo-topology-snapshot.md:15-21`; `corpus-foundational-review-findings.md:1239-1345`; `docs/research/planning/reframing/reframing-repo-topology-trunk.md:19-27,31-57`). The cost is that IC would keep a repo-local copy of shared concepts and the same coordinated ADR burden rather than extracting a thinner shared source of truth now (`docs/research/planning/reframing/reframing-repo-topology-trunk.md:84-117`).
- Execution conditions: Acceptable conditional on the same trio-wide merge-manifest contract applying to IC, with protection-state uncertainty recorded explicitly and no silent topology expansion beyond the current three repos (`docs/research/planning/reframing/reframing-repo-topology-trunk.md:98-117,202-210`).

### Poietic Match
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: can-live-with
- Rationale: Poietic Match can live with this proposal because the current record already treats PM as part of the canon-bearing trio, and making that role explicit with a shared inclusion rule and merge contract is preferable to leaving PM in topology-by-practice (`docs/research/planning/corpus-foundational-review-v1-plan.md:21-31,353-364`; `tmp/repo-topology-snapshot.md:23-29`; `corpus-foundational-review-findings.md:1239-1345`). The tradeoff is that PM would keep the same cross-repo synchronization burden and duplicated shared-concept layer until a successor topology proposal authorizes something thinner or more centralized (`docs/research/planning/reframing/reframing-repo-topology-trunk.md:39-57,84-117`).
- Execution conditions: Acceptable conditional on PM being covered by the same committed merge manifest, explicit merge order, and defer-or-revert recovery rule as Spore and IC (`docs/research/planning/reframing/reframing-repo-topology-trunk.md:98-117,202-210`).

## Open objections

None at open.

## Frame-change sufficiency verdict (FR-11)

- frame-change-required: yes
- Rationale: Yes. This proposal changes the canon-bearing repo set, the rubric for admitting or excluding repos, and the merge-governance contract that governs Phase 9 across Spore, IC, and PM (`corpus-foundational-review-findings.md:1239-1345`; `docs/research/planning/reframing/reframing-repo-topology-trunk.md:59-71`). No ordinary canon-review ADR can bind all three repos on a topology choice from inside one repo's authority surface, so routing back to canon-review-v2 would leave the constitutional question unresolved.

## Sign-off

- ADR drafting may begin: yes
- Signed-off-by: Darren Zal <zaldarren@gmail.com>
- Timestamp: 2026-04-21T00:29:05Z
