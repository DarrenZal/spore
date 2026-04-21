---
doc_id: spore.connection.canon-framing-pm-canon-scope
doc_kind: research
research_subkind: canon_framing
status: active
relates_to:
  - pm.grammar
  - pm.project-vision
  - pm.protocol
  - pm.downstream-products
concepts:
  - commitment-bundles
  - canon-scope
  - governance-boundary
---

# Canon framing — PM canon scope ratification

Shared framing for Phase 7 `reframing-pm-canon-scope`, covering findings F-018 and F-019. This note accompanies PM ADR-0010 `canon-scope-ratification` and records the cross-project boundary rule Spore must inherit in its derivative review artifacts.

## §1 Why this is a reframing and not a PM-local tidy-up

The drift is not only a stale PM doc list. PM's current review surfaces let two non-canon artifacts keep acting as canon authorities in different ways:

- `docs/downstream-products.md` is a governance registry but is still enumerated as PM canon.
- `docs/phase-0-spec.md` is explicitly excluded from PM canon but still acts as the introducing surface for `commitment-bundles` in Spore's derivative concept roster.

That means the disputed rule is the canon boundary itself, not only a local sentence inside one PM file. The PM ADR can implement the settled rule, but the boundary had to be authorized first so Spore's cross-project review host does not keep reproducing the old exception.

## §2 Ratified PM canon boundary

PM canon is ratified as normative self-description only:

- `docs/project-vision.md`
- `docs/grammar.md`
- `docs/protocol.md`
- `docs/research/canon-decisions/*.md`

Two adjacent PM docs remain important but sit outside that canon layer:

- `docs/downstream-products.md` is a governance registry for downstream notification and compatibility awareness.
- `docs/phase-0-spec.md` is an implementation plan and sequencing surface.

This framing keeps PM's canon boundary aligned with the shared canon-review rule instead of preserving a PM-only exception.

## §3 Commitment-bundles origin rule

`commitment-bundles` should be canonically introduced by `docs/grammar.md` section 1.4, where PM gives the formal `pm:CommitmentBundle` type definition and lifecycle.

`docs/project-vision.md` remains the narrative explanation surface for readers entering through vision first. `docs/phase-0-spec.md` may still mention later-phase implementation of the primitive, but it is not an origin authority because implementation sequencing is outside PM canon.

## §4 Cross-project implication

Spore-hosted derivative review outputs should inherit the ratified PM boundary directly:

- `tmp/corpus-inventory.tsv` should stop treating `docs/downstream-products.md` and `docs/phase-0-spec.md` as PM canon-layer rows.
- `tmp/concept-roster.tsv` should stop crediting `docs/phase-0-spec.md` as the introducing doc for `commitment-bundles`.

This note exists so future cross-project review work can point to one shared statement of the PM boundary rather than rediscovering the exception case from inventory drift.
