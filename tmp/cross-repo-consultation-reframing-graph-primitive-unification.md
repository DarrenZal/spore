# Cross-repo consultation — reframing-graph-primitive-unification

- Proposal slug: reframing-graph-primitive-unification
- Covered findings: F-020
- Date opened: 2026-04-20
- Date last updated: 2026-04-21
- Consulted repos: Spore, Intelligence Commons, Poietic Match
- Single-operator note: Darren Zal is currently both proposal author and approver. This artifact is an externalized self-review surface per FR-17, not proof of independent consensus.

## Stance blocks

### Spore
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: support
- Rationale: Spore's current canon would benefit from this merge because the active foundation and synthesis layers already treat `epistemic graph` as the precision name for the same surface that `project-vision.md` still calls `knowledge graph`, while the concept roster still exposes both slugs as live primitive-class entries (`docs/project-vision.md:101-105`; `docs/foundations/constitutional-artifacts-and-graph-projections.md:54-59`; `docs/synthesis/decision-memo.md:177-182`; `corpus-foundational-review-findings.md:648-694`). The proposal therefore aligns the vision layer with the rest of Spore canon instead of inventing a new primitive (`docs/research/planning/reframing/reframing-graph-primitive-unification.md:17-42`).
- Execution conditions: Support conditional on the ADR bundle handling the explicit `historical-gloss` disposition, live-reference cleanup, and concept-roster regeneration together so `knowledge-graph` survives only as labeled public-facing or historical gloss rather than as a second primitive (`docs/research/planning/reframing/reframing-graph-primitive-unification.md:102-125`).

### Intelligence Commons
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: not-applicable
- Rationale: No Intelligence Commons canon, meta-corpus, or topology surface is touched directly by this proposal; IC is consulted only because sibling repos may need to interpret Spore's legacy wording during cooling-off (`docs/research/planning/reframing/reframing-graph-primitive-unification.md:94-100`).
- Execution conditions: None.

### Poietic Match
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: not-applicable
- Rationale: No Poietic Match canon, meta-corpus, or topology surface is touched directly by this proposal; PM is consulted only because sibling repos may need to interpret Spore's legacy wording during cooling-off (`docs/research/planning/reframing/reframing-graph-primitive-unification.md:94-100`).
- Execution conditions: None.

## Open objections

None at open.

## Frame-change sufficiency verdict (FR-11)

- frame-change-required: yes
- Rationale: Yes. F-020 is not a doc-local wording repair: it dissolves `knowledge-graph` as a separate primitive-class concept, renames the surviving surface corpus-wide to `epistemic-graph`, and requires an explicit FR-19 disposition for the retired slug (`corpus-foundational-review-findings.md:648-694`; `docs/research/planning/reframing/reframing-graph-primitive-unification.md:35-42`). A canon-review ADR could implement the chosen state only after this higher-order slug-survival decision is settled; it cannot responsibly decide inside the frame it is changing.

## Sign-off

- ADR drafting may begin: yes
- Signed-off-by: Darren Zal <zaldarren@gmail.com>
- Timestamp: 2026-04-21T00:29:05Z
