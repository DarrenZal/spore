---
doc_id: spore.canon-decision.graph-primitive-unification
doc_kind: decision-record
status: draft
adr_number: "0019"
opened-on: 2026-04-20
covers:
  - F-020
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-capstone:R1
  - spec:spore.corpus-review.research-capstone-review:R1
r_claim_statement: |
  Spore should treat `epistemic-graph` as the sole canonical primitive slug for the graph surface that tracks claims, evidence, provenance, attestations, and sensor outputs. `knowledge-graph` survives only as an explicit historical/public-facing gloss, not as a second primitive-class concept.
supported_by:
  - docs/research/planning/reframing/reframing-graph-primitive-unification.md
  - docs/project-vision.md
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
  - docs/foundations/spore-instance-model.md
  - docs/roadmap.md
  - tmp/concept-roster.tsv
authorized-by: reframing-graph-primitive-unification
queue_reference: "Phase 7 reframing-graph-primitive-unification (F-020)"
affects_canon:
  - docs/project-vision.md
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
  - docs/foundations/spore-instance-model.md
  - docs/roadmap.md
  - tmp/concept-roster.tsv
related_adrs: []
shared_framing: ""
concepts:
  - epistemic-graph
  - knowledge-graph
---

# ADR-0019 — Graph Primitive Unification

## Status

draft (authorized by `reframing-graph-primitive-unification`)

## Context

F-020 identifies one Spore graph surface being carried under two primitive-class names. `project-vision.md` still presents the surface as `knowledge graph`, while the foundations and synthesis layers already treat `epistemic graph` as the precision name for the same surface. The derivative review inventory compounds the ambiguity by keeping both `epistemic-graph` and `knowledge-graph` marked as `primitive-class=TRUE` in `tmp/concept-roster.tsv`.

This bundle is the first FR-19 rename-traceability test case in Phase 7. It needs an explicit predecessor-slug disposition, not only prose cleanup. The decision has to keep public-facing legibility while collapsing the duplicate primitive state.

It also has to respect the frozen-vocabulary boundary clarified in Phase 7: `docs/research/concepts-p2p-wiki.yaml` is the intake bridge-note vocabulary for the P2P Foundation wiki track, not a general registry of every Spore-native primitive. Neither `epistemic-graph` nor `knowledge-graph` is currently admitted there, and this reframing does not need to widen that intake-scoped vocabulary in order to settle Spore's native graph primitive.

## Decision

Canonicalize `epistemic-graph` as the sole live primitive slug for this surface. Retain `knowledge-graph` only as an explicit historical/public-facing gloss.

### FR-19 slug mapping table

| Predecessor | Successor | Disposition | Reference-cleanup plan |
|---|---|---|---|
| `knowledge-graph` | `epistemic-graph` | `historical-gloss` | Replace live canonical uses of the primitive with `epistemic graph`; retain `knowledge graph` only where it is explicitly marked as a public-facing or historical gloss; demote `knowledge-graph` to non-primitive in `tmp/concept-roster.tsv`; do not admit either slug into `docs/research/concepts-p2p-wiki.yaml` because that frozen vocabulary remains scoped to P2P-wiki bridge-note concepts rather than Spore-native primitive aliases. |

### Canon edits authorized by this ADR

1. Update `docs/project-vision.md` so the projection list names **Epistemic graph** as the canonical surface while preserving `knowledge graph` as an explicit public-facing gloss.
2. Update `docs/foundations/constitutional-artifacts-and-graph-projections.md`, `docs/foundations/spore-instance-model.md`, and `docs/roadmap.md` so live canonical references use `epistemic graph` consistently.
3. Update `tmp/concept-roster.tsv` so `knowledge-graph` is no longer a primitive-class entry.
4. Leave `docs/research/concepts-p2p-wiki.yaml` unchanged for this bundle.

## Rationale

`historical-gloss` is the strongest FR-19 disposition here.

- It is stronger than `alias-in-v3` because the frozen intake vocabulary is not the right registry for this traceability problem. Adding `knowledge-graph` as an alias there would widen an intake-scoped artifact for a Spore-native primitive that the file was never meant to govern.
- It is stronger than `hard-retired` because the phrase `knowledge graph` still does useful public-facing work: readers recognize it immediately, and `project-vision.md` is exactly the surface where that recognition matters. Keeping the term as an explicit gloss preserves legibility without preserving duplicate canon.
- It resolves the actual defect named in F-020: two live primitive-class names for one surface. The roster demotion removes the duplicate primitive state, while the prose cleanup makes `epistemic graph` the only canonical name inside active Spore framing.

The decision boundary is therefore precise: Spore canon speaks canonically about the **epistemic graph**; Spore may still mention **knowledge graph** when it is clearly labeled as a gloss, legacy phrase, or implementation-facing shorthand.

## Consequences

- `epistemic-graph` becomes the only live primitive slug for this surface in Spore canon.
- `knowledge-graph` remains readable in public-facing prose, but only as an explicit gloss rather than as a competing primitive.
- `tmp/concept-roster.tsv` no longer presents both slugs as primitive-class entries.
- No frozen-vocabulary v3 admission is needed for this bundle.

## Evidence

- F-020 evidence gate: pass
  - `docs/project-vision.md` used the predecessor term as the active projection name while already glossing it as epistemic substrate
  - `docs/foundations/constitutional-artifacts-and-graph-projections.md` already treated `epistemic graph` as the precision term for the same surface
  - `docs/synthesis/decision-memo.md` and `docs/synthesis/coordination-grammar.md` already described the rename as a clarification rather than a new primitive
  - `tmp/concept-roster.tsv` still exposed both slugs as `primitive-class=TRUE`
- Distinct evidence count: 8
- Publicly-verifiable evidence count: 8

## Diff summary

- `docs/project-vision.md`: renamed the live projection to `Epistemic graph` and preserved `knowledge graph` only as an explicit gloss
- `docs/foundations/constitutional-artifacts-and-graph-projections.md`: aligned sensor-grounding language with `epistemic graph`
- `docs/foundations/spore-instance-model.md`: aligned node-substrate language with `epistemic graph`
- `docs/roadmap.md`: aligned live roadmap references with `epistemic graph`
- `tmp/concept-roster.tsv`: demoted `knowledge-graph` from primitive-class status
