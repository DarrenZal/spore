---
doc_id: spore.planning.agentic-memory-vocabulary-v2-review
doc_kind: planning
status: active
decision_state: decided
decided_on: 2026-04-14
decided_by: spore.steward
depends_on:
  - spore.agentic-memory-dimension-vocabulary
  - spore.restriction-maps-and-comparison-records
concepts:
  - agentic-memory
  - dimension-vocabulary
  - learning-field
  - comparative-intake
---

# Vocabulary Review: `dv.agentic-memory.v1` → Candidates for v2

## Status

**Decided (2026-04-14).** Originally routed from the IC agentic-memory
comparison pilot (2026-04-13, IC commit `bc3c381`) as an open review request.
Steward review has now landed the decisions captured inline per candidate.

Note on frontmatter: `status: active` (spec DAG enum does not include
`decided`; active here means the decision record is now canonical).
`decision_state: decided` captures the decision state explicitly.

## Overall decision

**Mint `dv.agentic-memory.v2` with Candidates 1 and 2 only. Leave Candidates
3 and 4 deferred.**

Rationale:

- `dv.agentic-memory.v1` is explicitly provisional but already has real pilot
  records behind it. Per the v1 doc's own revision discipline
  (`docs/protocols/agentic-memory-dimension-vocabulary.md` revision discipline
  + "field-level aggregation must bucket by vocabulary version"), revised
  vocabularies should mint a successor version rather than mutate in place.
- Candidate 2 (procedural_memory) is the clearest yes and unblocks IC's
  procedural-memory review.
- Candidate 1 (refine `hybrid`) is ready; minimal fix — refine in place,
  don't widen scope by introducing a whole orthogonal fusion taxonomy.
- Candidates 3 and 4 have real signal but insufficient evidence for a stable
  new axis. One pilot record each is not enough. Revisit if future pilots
  repeat the translation_mismatch.

Abstract options explicitly rejected for this v2:
- Candidate 1 Option B (`fusion_model` as orthogonal dimension) — one level
  more general than evidence justifies.
- Candidate 2 Option B (`content_type_stratification`) — one level more
  general than evidence justifies.

## Pilot artifacts (evidence)

- `intelligence-commons/docs/learning-field/synthesis/agentic-memory-pilot-v1.md`
- `intelligence-commons/docs/learning-field/comparison-records/` (10 typed records)
- `intelligence-commons/docs/learning-field/restriction-maps/` (3 maps)

## Decision surface (original, for provenance)

Spore steward was asked to decide, for each of the four candidates:

1. **Include in v2 / refine in v1 / defer / reject.**
2. If include: scope, value set, and relation to existing dimensions.
3. Whether the four together warrant minting `dv.agentic-memory.v2` or an
   incremental patch of v1.

See **Overall decision** above and per-candidate decisions below.

## Candidate 1: Refine `retrieval_model: hybrid` into sub-types

**Problem:** the current `hybrid` value collapses three architecturally distinct
hybrids observed in the pilot:

- **vector-primary + graph overlay** (Mem0g) — graph supplements cosine recall
- **graph-primary + vector secondary** (Graphiti) — graph is primary, vector secondary
- **fusion-neutral** (our-stack, Hindsight) — RRF over multiple retrieval modes, no primacy

Comparison records forced to project all three to `hybrid` landed
`translation_mismatch` on `retrieval_model` because the projection rules are
inadequate. See
`intelligence-commons/docs/learning-field/comparison-records/layer4-graph-relations.yaml`.

**Options:**

- **A. Split `hybrid` into sub-values:** `hybrid_vector_primary`,
  `hybrid_graph_primary`, `hybrid_fusion_neutral`. Smallest change; keeps one
  dimension.
- **B. Add a separate `fusion_model` dimension** distinct from
  `retrieval_model`, with values like `none`, `reranking`, `rrf`, `weighted`.
  Lets `retrieval_model` stay one-per-system (primary mode) while capturing
  fusion as orthogonal.
- **C. Defer.** The translation_mismatch is informative on its own; revising
  the vocabulary is premature until more pilots confirm the gap.

Pilot recommends (A) or (B); does not prescribe.

**Evidence strength:** 1 comparison record (layer4-graph-relations) lands
translation_mismatch on this axis; the pilot participant set covers all three
hybrid variants.

### Decision: Candidate 1 — **include in v2 (Option A)**

Split `retrieval_model: hybrid` into sub-values:
`hybrid_vector_primary`, `hybrid_graph_primary`, `hybrid_fusion_neutral`.

Rationale: real pilot mismatch; minimal fix is to refine `hybrid` in place
without introducing a whole orthogonal `fusion_model` taxonomy (Option B).
Option B is one level more general than the evidence currently justifies and
can be revisited if a later pilot surfaces fusion-specific translation
mismatches distinct from the primary-mode distinction.

Option C (defer) rejected: the evidence is sufficient and Candidate 1 is
small enough that bundling it into the v2 mint is low risk.

## Candidate 2: Add `procedural_memory` dimension

**Problem:** Tulving's episodic/semantic/procedural taxonomy is referenced
across the 2026 agentic-memory literature. All four external pilot
participants and our-stack persist procedural substrates (skill files,
tool-use facts, workflow edges, reflection-bank procedures). The current
vocabulary has no axis that can cleanly express this; procedural content
collapses into `memory_unit: claim` or `artifact`, same values used for
declarative content. See
`intelligence-commons/docs/learning-field/comparison-records/dimension-gap-procedural-memory.yaml`.

**Options:**

- **A. Add a new dimension `procedural_memory`** with values like
  `none`, `scoped_facts`, `skill_files`, `workflow_edges`, `reflection_bank`, `other`.
- **B. Add a new dimension `content_type_stratification`** capturing whether
  the framework treats procedural/declarative/prospective as distinct storage
  layers or as uniform content. More abstract, applies beyond procedural.
- **C. Extend `memory_unit` values** to include `skill` or `procedure` alongside
  existing values. Smallest change but conflates unit-kind with content-type.
- **D. Defer / keep as translation_mismatch.** Pilot's landed record is
  protocol-conformant; the gap may resolve if more pilots surface similar
  issues with the same shape.

Pilot recommends (A) or (B). This is the strongest-evidenced candidate.

**Evidence strength:** all four external participants plus A-Mem (referenced)
treat procedural as material; vocabulary cannot express the distinction.

### Decision: Candidate 2 — **include in v2 (Option A)**

Add `procedural_memory` as a first-class dimension with values:
`none`, `scoped_facts`, `skill_files`, `workflow_edges`, `reflection_bank`,
`other`.

Rationale: strongest-evidenced gap in the pilot (all participants treat
procedural as material; vocabulary has no axis to express it). Generic across
frameworks, not IC-specific. Needed before IC can resolve its own procedural-
memory review cleanly (per
`intelligence-commons/docs/research/memory-layers-procedural-review.md`
Option D sequencing).

Option B (`content_type_stratification`) rejected for v2: one level more
general than the evidence justifies; procedural is the specific axis the
pilot surfaced, not a generalized content-type-stratification concern.
Option C (extend `memory_unit` values) rejected: conflates unit-kind with
content-type, loses analytical precision.
Option D (defer) rejected: evidence is strongest for this candidate; IC's
downstream review is blocked on this decision.

## Candidate 3: Add `update_semantics` dimension

**Problem:** memory-update semantics vary materially across participants and
the current `temporal_model` dimension does not capture this. See
`intelligence-commons/docs/learning-field/comparison-records/crosscut-evolution-update.yaml`.

Observed variants:
- **append_only** — no mutation, no retirement (some minimal substrates)
- **in_place_update** — adaptive conflict resolution at write (Mem0)
- **supersede_and_retire** — append new, retire old with provenance (our-stack, Graphiti)
- **evolving_representation** — historical memories re-evaluated as network grows (A-Mem, referenced)

**Options:**

- **A. Add `update_semantics`** with the four values above.
- **B. Extend `temporal_model`** to carry update semantics as a sub-field.
- **C. Defer.** Only one record currently lands complementarity on this axis;
  low evidence volume.

Pilot recommends (A); acknowledges low evidence volume.

**Evidence strength:** 1 record (crosscut-evolution-update) explicitly flags
the gap; distinct from `temporal_model` because two systems can share a
temporal model (e.g., episodic) but differ materially on update.

### Decision: Candidate 3 — **defer**

Not included in `dv.agentic-memory.v2`. Real signal, but one pilot record is
not enough to stabilize a new axis. Revisit if future pilots surface the same
translation_mismatch on update semantics.

When revisiting, start from Option A (new `update_semantics` dimension) rather
than Option B (extending `temporal_model`) — the pilot's distinction is
structural (update events) not temporal (validity windows), and folding into
`temporal_model` would blur the two.

## Candidate 4: Add `evidence_belief_separation` dimension

**Problem:** Hindsight's Reflect pattern (raw episodic traces vs synthesized
mental models in a reflection bank) and our-stack's schema-level separation
(knowledge_episodes vs knowledge_facts) implement the same pattern at
different maturity levels. Mem0, Letta, Graphiti do not separate. The
vocabulary cannot currently express this axis. See
`intelligence-commons/docs/learning-field/comparison-records/layer3-episodic-retrieval.yaml`.

**Options:**

- **A. Add `evidence_belief_separation`** with values `none`, `schema_level`,
  `governed_artifact`. Captures three observed maturity levels.
- **B. Extend `governance_surface`** to note when separation is enforced at
  the governance layer. But this conflates the axis with governance.
- **C. Defer.** Lowest evidence volume of the four candidates.

Pilot recommends (A) or defer.

**Evidence strength:** 1 record (layer3-episodic-retrieval) flags the
pattern; distinguishes 3 maturity levels across 5 participants.

### Decision: Candidate 4 — **defer**

Not included in `dv.agentic-memory.v2`. Weakest evidence of the four
candidates. The axis may later belong as a broader reflection/evidence pattern
rather than a core memory dimension. Revisit when either a future pilot
confirms the axis, or when Hindsight/Reflect-style patterns appear in more
than one participant at the `governed_artifact` maturity level.

Still ambiguous between "new dimension" and "better expressed elsewhere"
(e.g., as a refinement of `governance_surface` when the separation is
enforced at governance). Resolution of that ambiguity is a precondition for
reconsideration.

## Recommended decision shape (original, for provenance)

The four candidates are not equal-strength. The steward review was offered a
tiered response:

- **Strong candidates for v2:** procedural_memory (Candidate 2), retrieval_model
  hybrid refinement (Candidate 1).
- **Medium candidates for v2:** update_semantics (Candidate 3).
- **Weak candidates, consider deferring:** evidence_belief_separation (Candidate
  4) — may resolve as governance_surface refinement.

Final decision (see **Overall decision** above): the two strong candidates
are included in v2; the medium and weak candidates are deferred. The steward
elected the narrower v2 scope rather than bundling all four.

## Downstream actions (unblocked by this decision)

1. **Mint `dv.agentic-memory.v2`** as a new governed artifact at
   `docs/protocols/agentic-memory-dimension-vocabulary-v2.md` (or successor
   version inline in the v1 doc, per Spore's preferred versioning convention),
   with the refined `retrieval_model` values and the new `procedural_memory`
   dimension. Migration notes must document the v1→v2 delta and how existing
   records aggregate.
2. **Unblock IC procedural-memory review**
   (`intelligence-commons/docs/research/memory-layers-procedural-review.md`) —
   Option D's precondition is now resolved. IC can choose between Options A
   (promote to layer), B (promote to axis), or C (document cross-cutting
   stance) now that the generic vocabulary has taken a position.
3. **Leave the protocol-extension review**
   (`restriction-map-protocol-extension-review.md`) in `status: draft`. It is
   not coupled to this decision and its evidence base has not strengthened.

## Companion review

This is one of two upstream items from the IC pilot. The other —
`restriction-map-protocol-extension-review.md` — addresses protocol-level gaps
distinct from vocabulary gaps (inherited maps, vocabulary-review record shape).
Those two reviews are independent.

## Non-goals for this review

- No decision on whether IC mints `ic.agentic-memory-dimension-vocabulary.v2`.
  That decision stays in IC, contingent on whether Spore's revision handles
  the four gaps.
- No implementation work on dependent systems (IC's `ic.memory-layers`,
  BKC's knowledge graph schema, any external project). Those are downstream
  of vocabulary decisions, not inputs to them.
- No benchmark-score-as-dimension; that was explicitly out of scope for v1 and
  remains out of scope.
