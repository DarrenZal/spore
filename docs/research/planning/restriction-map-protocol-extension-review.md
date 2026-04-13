---
doc_id: spore.planning.restriction-map-protocol-extension-review
doc_kind: planning
status: open
depends_on:
  - spore.restriction-maps-and-comparison-records
concepts:
  - restriction-maps
  - comparison-records
  - protocol-extension
  - learning-field
---

# Protocol Extension Review: Inherited Maps + Vocabulary-Review Records

## Status

**Open review request.** Triggered by the IC agentic-memory comparison pilot
(2026-04-13, IC commit `bc3c381`). The pilot surfaced two protocol-level gaps
in `spore.restriction-maps-and-comparison-records` itself — distinct from the
vocabulary gaps covered by the companion review
(`agentic-memory-vocabulary-v2-review.md`). This document routes both to Spore
steward review.

Both gaps surfaced through *use*, not theory. The pilot had to improvise
workarounds for each; the workarounds hold but point to real protocol
extensions worth considering.

## Gap 1: Inherited / extending restriction maps

### Observed need

The IC pilot authored three delegated restriction maps:

1. `rm.ic.agentic-memory.frameworks-to-ic.v0_1` — base map with six dimensions
2. `rm.ic.agentic-memory.composite-projection.v0_1` — methodological augmentation
   adding a `layer_anchor` dimension on top of the base
3. `rm.ic.agentic-memory.graphiti-retroactive.v0_1` — narrow specialization of
   the base for encoding a prior investigation as typed records

Maps (2) and (3) are natural specializations of map (1). The clean authoring
pattern would be:

```yaml
# map (3) pseudo-code
map_id: rm.ic.agentic-memory.graphiti-retroactive.v0_1
inherits_from: rm.ic.agentic-memory.frameworks-to-ic.v0_1
direction:
  source: framework.graphiti  # narrowed from the base's source
purpose:
  - retroactive_typed_encoding  # added
additional_constraints:
  - any relation label must cite the specific archive finding supporting it
```

The current schema does not sanction `inherits_from`, so the pilot inlined
all six dimensions by copy into map (3) — functional but not faithful. See
`intelligence-commons/docs/learning-field/restriction-maps/retroactive-graphiti-encoding.yaml`
for the current inlined workaround.

### Decision surface

Spore must decide whether to add an `inherits_from` field to the restriction_map
schema. If yes:

- **Override semantics:** which fields can a child override? Direction? Purpose?
  Dimension list? Grounding requirements?
- **Extend semantics:** how are additive constraints (extra dimensions, extra
  disallowed operations, stricter grounding) composed with the parent?
- **Ratification composition:** must the child be ratified by the same holon
  that ratified the parent, or can a lower-authority holon narrow a
  higher-authority parent? (Narrowing should usually be allowed; broadening
  should usually require re-ratification.)
- **Contest propagation:** if the parent moves to `contested` or `superseded`,
  what happens to children? Auto-contest, explicit revalidation, or independent
  lifecycle?

### Options

- **A. Add `inherits_from` with explicit override/extend rules.** Most work
  but closest to the natural authoring pattern.
- **B. Require full inlining (current behavior) and add a standard `derived_from`
  pointer field** for traceability only, with no inheritance semantics.
  Lightweight; preserves explicit-is-better-than-implicit discipline at the
  cost of duplication.
- **C. Defer.** Only two pilot maps would have used inheritance; may be
  premature.

### Evidence strength

**Medium.** Two of three pilot maps would have benefited; the inlining
workaround held; more pilots needed to confirm the pattern generalizes.

## Gap 2: Vocabulary-review / meta-comparison records

### Observed need

The IC pilot's dimension-gap-procedural-memory record wants to say something
the current `comparison_record` schema cannot say cleanly:

*"The vocabulary's dimensions cannot express this architectural distinction."*

The pilot eventually landed the observation as `translation_mismatch` on two
authorized dimensions (`memory_unit`, `retrieval_model`) — the protocol-
conformant path. This works: `translation_mismatch` is defined as "the sides
may be compatible, but the current projection rules are inadequate" (Spore
protocol schema, relation labels). So the vocabulary-gap case *does* route
through the existing grammar.

But the honest shape is subtly different: a vocabulary-gap record is not about
the *comparison* between two systems on a vocabulary-defined dimension — it is
about the *vocabulary's capacity to express* the comparison at all. The
current workaround requires choosing authorized dimensions and landing
translation_mismatch on each; this works but the artifact's *primary purpose*
(vocabulary review) is subordinated to a dimension-projection shape that
doesn't quite fit.

### Decision surface

Spore must decide whether vocabulary-gap findings deserve first-class shape.

### Options

- **A. New top-level artifact type `vocabulary_review_record`** with its own
  schema: vocabulary ID, observed gap, supporting comparison records, proposed
  resolution shape. Heaviest option; adds an artifact type.
- **B. New sub-kind of `comparison_record`: `record_purpose:
  dimension_vocabulary_review`** with validator rules that permit
  vocabulary-gap dimensions (still authorized, but treated differently).
  Middleweight; extends existing schema.
- **C. Lighter convention:** a standard tag + prose section on regular
  `comparison_record` artifacts (like the `promotion_candidate: true` +
  `upstream_flow_back` fields the pilot already uses). No schema change;
  pattern lives in documentation. Lightest.
- **D. Defer.** The pilot's workaround (translation_mismatch on authorized
  dimensions + rich rationale) is sufficient; formalizing may be premature.

The pilot does **not** prescribe a shape. The reviewer cautioned against
assuming a new top-level artifact type is necessary. This review is where
that shape should be decided.

### Evidence strength

**Low-to-medium.** Only one pilot record (dimension-gap-procedural-memory)
exercised this pattern. The question is whether vocabulary-gap observations
will be a recurring need across future pilots (high — every vocabulary
revision cycle should produce them) or an unusual shape (low — most pilots
stay within dimension projections).

## Recommended decision shape

The two gaps are independent:

- **Gap 1 (inherited maps)** affects map authoring. Likely recurs in any pilot
  with more than 2 maps. Evidence from this pilot is medium. Recommend
  investigating if one more pilot surfaces the same pattern.
- **Gap 2 (vocabulary-review shape)** affects how vocabulary gaps are
  recorded. Likely recurs once per vocabulary revision cycle. Evidence is
  low-to-medium. Recommend starting with lightweight convention (C) and
  escalating only if it proves insufficient.

## Companion review

This is one of two upstream items from the IC pilot. The other —
`agentic-memory-vocabulary-v2-review.md` — addresses four vocabulary dimension
candidates. Those two reviews are independent; vocabulary decisions do not
depend on protocol decisions and vice versa.

## Non-goals for this review

- No decision on vocabulary candidates (covered separately).
- No implementation changes to the validator
  (`scripts/validate_restriction_artifacts.py`) until decisions are made;
  the current validator is correctly strict about schema conformance.
- No commitment to accept either gap's proposed extension; deferral is a
  valid outcome for both.
