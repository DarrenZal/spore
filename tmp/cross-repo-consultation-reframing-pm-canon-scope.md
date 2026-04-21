# Cross-repo consultation - reframing-pm-canon-scope

- Proposal slug: reframing-pm-canon-scope
- Covered findings: F-018, F-019
- Date opened: 2026-04-20
- Date last updated: 2026-04-21
- Consulted repos: Spore, Intelligence Commons, Poietic Match
- Single-operator caveat: Author and approver are currently the same person; this artifact is an externalized self-review surface, not proof of independent consensus.

## Stance blocks

### Spore
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: support
- Rationale: Spore's current meta-corpus would benefit from this change because the shared canon-review rule already defines canon as normative self-description and explicitly puts governance and implementation-plan surfaces out of scope, yet Spore's derivative inventory outputs still reproduce the PM exception (`docs/research/planning/canon-review-protocol.md:25-50`; `tmp/corpus-inventory.tsv:22-24`; `tmp/concept-roster.tsv:56`; `corpus-foundational-review-findings.md:583-647`). The proposal removes that inconsistency without widening canon-review scope, which matches Spore's role as cross-project review host (`docs/research/planning/reframing/reframing-pm-canon-scope.md:23-43`).
- Execution conditions: Support conditional on keeping execution limited to the PM ADR bundle plus derivative Spore artifact regeneration; any direct rewrite of shared protocol text needs a separate meta-corpus authorization path (`docs/research/planning/reframing/reframing-pm-canon-scope.md:163-171`).

### Intelligence Commons
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: not-applicable
- Rationale: No Intelligence Commons canon, meta-corpus, or topology surface is revised directly by this proposal; IC is consulted only because the shared governance stack should not retain a PM-only canon exception (`docs/research/planning/reframing/reframing-pm-canon-scope.md:135-141`).
- Execution conditions: None.

### Poietic Match
- Consulted: Darren Zal (solo-operator self-review per FR-17) @ 2026-04-21T00:29:05Z
- Stance: support
- Rationale: Poietic Match's current canon would benefit from this reframing because PM already treats `docs/phase-0-spec.md` as implementation-only while `docs/downstream-products.md` declares itself `doc_kind: governance`, and the strongest in-canon definition of `CommitmentBundle` already lives in `docs/grammar.md` with `docs/project-vision.md` as explanatory surface (`/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/README.md:13-20`; `/Users/darrenzal/projects/poietic-match/docs/downstream-products.md:1-15`; `/Users/darrenzal/projects/poietic-match/docs/grammar.md:79-105`; `/Users/darrenzal/projects/poietic-match/docs/project-vision.md:28-40`). The proposal ratifies that existing boundary instead of letting governance registry and implementation sequencing keep acting as canon authorities (`docs/research/planning/reframing/reframing-pm-canon-scope.md:23-38`).
- Execution conditions: Support conditional on naming `docs/grammar.md` section 1.4 as the canonical introducing surface for `commitment-bundles`, with `docs/project-vision.md` retained as companion explanation rather than origin authority (`docs/research/planning/reframing/reframing-pm-canon-scope.md:165-171`).

## Open objections

None at open.

## Frame-change sufficiency verdict (FR-11)

- frame-change-required: yes
- Rationale: Yes. F-018 and F-019 change PM canon scope itself by re-layering `docs/downstream-products.md` out of canon and by disallowing an explicitly excluded implementation plan from functioning as concept-origin authority (`corpus-foundational-review-findings.md:583-647`; `docs/research/planning/reframing/reframing-pm-canon-scope.md:39-47`). A PM-local ADR could implement the settled boundary only after a proposal decides what counts as PM canon; it cannot use the disputed boundary as its own authority.

## Sign-off

- ADR drafting may begin: yes
- Signed-off-by: Darren Zal <zaldarren@gmail.com>
- Timestamp: 2026-04-21T00:29:05Z
