# Cross-repo consultation - reframing-frozen-vocabulary-role

- Proposal slug: reframing-frozen-vocabulary-role
- Covered findings: F-028
- Date opened: 2026-04-20
- Date last updated: 2026-04-20
- Consulted repos: Spore, Intelligence Commons, Poietic Match
- Single-operator note: Darren Zal is currently both proposal author and approver; this artifact is an externalized self-review surface per FR-17, not proof of independent consensus.

## Stance blocks

### Spore
- Consulted: [PENDING]
- Stance: support
- Rationale: Spore's current meta-corpus would benefit from this role clarification because `concepts-p2p-wiki.yaml` still declares itself intake-specific even though the canon-review protocol already uses it as the legality gate for ADRs, canon edits, and shared framing across the governed corpus (`docs/research/concepts-p2p-wiki.yaml:1-10`; `docs/research/planning/canon-review-protocol.md:244-250`; `corpus-foundational-review-findings.md:915-945`). The proposal matches the artifact's actual load-bearing role without reopening slug content or file-path questions (`docs/research/planning/reframing/reframing-frozen-vocabulary-role.md:25-38`).
- Execution conditions: Support conditional on keeping slug set and file path unchanged in this proposal, and on coordinating the vocabulary-governance wrapper with `reframing-protocol-governance-hardening` if those rules land in canon-review-protocol v3 (`docs/research/planning/reframing/reframing-frozen-vocabulary-role.md:27-33,105-114,129-133`).

### Intelligence Commons
- Consulted: [PENDING]
- Stance: support
- Rationale: Intelligence Commons' current canon can support this change because IC already depends on the frozen vocabulary for shared canon work, and making that governance role explicit reduces the risk that IC will treat a cross-project legality gate as disposable intake scaffolding (`docs/research/planning/canon-review-protocol.md:246-250`; `docs/research/planning/reframing/reframing-frozen-vocabulary-role.md:27-32,92-114`). The proposal is intentionally conservative: it clarifies authority without renaming slugs or forcing repo-local concept rewrites.
- Execution conditions: Support conditional on no IC-local slug or path changes being smuggled into execution; any downstream reference updates should stay strictly referential unless a separate ADR says otherwise (`docs/research/planning/reframing/reframing-frozen-vocabulary-role.md:29-33,107-114`).

### Poietic Match
- Consulted: [PENDING]
- Stance: support
- Rationale: Poietic Match's current canon can support this change for the same reason: PM also depends on the frozen vocabulary gate during shared canon work, and the proposal makes that cross-project governance role explicit without disturbing PM's existing concept usage (`docs/research/planning/canon-review-protocol.md:246-250`; `docs/research/planning/reframing/reframing-frozen-vocabulary-role.md:27-32,92-114`). Clarifying the role is more durable than leaving a legality gate described as if it were only intake scaffolding.
- Execution conditions: Support conditional on no PM-local slug or path changes being smuggled into execution; any downstream reference updates should stay strictly referential unless a separate ADR says otherwise (`docs/research/planning/reframing/reframing-frozen-vocabulary-role.md:29-33,107-114`).

## Open objections

None at open.

## Frame-change sufficiency verdict (FR-11)

- frame-change-required: yes
- Rationale: Yes. The defect here is not a header typo but a governance-role mismatch: an intake-scoped artifact is already functioning as cross-project meta-corpus infrastructure, and the proposal adds the missing governance wrapper for admission, aliasing, deprecation, and versioning (`corpus-foundational-review-findings.md:915-945`; `docs/research/planning/reframing/reframing-frozen-vocabulary-role.md:34-38`). A canon-review ADR could edit the purpose line, but that would not settle the artifact's role in the governance stack or the cooling-off discipline attached to it.

## Sign-off

- ADR drafting may begin: [PENDING - yes | no]
- Signed-off-by: [PENDING]
- Timestamp: [PENDING]
