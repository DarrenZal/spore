---
doc_id: spore.agentic-memory-dimension-vocabulary-v2
doc_kind: spec
status: active
depends_on:
  - spore.restriction-maps-and-comparison-records
  - spore.term.field
  - spore.agentic-memory-dimension-vocabulary
succeeds: spore.agentic-memory-dimension-vocabulary
---

# Agentic Memory Dimension Vocabulary v2

Successor version to `dv.agentic-memory.v1`. Carries forward v1's scope and
all six v1 dimensions (`memory_unit`, `temporal_model`, `entity_model`,
`governance_surface`, `integration_surface`, and the refined
`retrieval_model`), adds one new dimension (`procedural_memory`), and
refines one value set (`retrieval_model: hybrid` split into three sub-values).

Minted on steward decision 2026-04-14 per
[agentic-memory-vocabulary-v2-review.md](../research/planning/agentic-memory-vocabulary-v2-review.md).
First pilot under v2 has not yet run; `vocabulary_status` remains
`provisional`.

## Purpose

Same scope as v1: the smallest useful set of dimensions for bridge-note
drafting, adoption review, and integration review across agentic-memory
frameworks. This vocabulary is not a timeless foundation; it is a governed
comparison surface expected to change as the learning field matures.

Machine-facing identity:

```yaml
vocab_id: dv.agentic-memory.v2
version: 2
vocabulary_status: provisional
authority_mode: delegated
scope: exploratory_internal_research
supersedes: dv.agentic-memory.v1
```

Suitable for:

- comparing external memory frameworks to Spore's learning field
- drafting bridge notes on agentic memory systems
- distinguishing convergence, complementarity, and obstruction at a bounded
  analytical surface
- comparing frameworks that make procedural memory a first-class concern
  (Letta MemFS, Mem0 tool-use facts, Hindsight Reflect bank, etc.)

Not sufficient for:

- benchmark evaluation
- production vendor selection
- security or privacy review
- cost or performance comparison

Those need separate vocabularies.

## Relation to v1 (authoritative migration notes)

### Summary of changes

| Change | Type | Candidate (per v2 review) |
|--------|------|---------------------------|
| `retrieval_model: hybrid` split into `hybrid_vector_primary`, `hybrid_graph_primary`, `hybrid_fusion_neutral` | Value-set refinement | C1 Option A |
| New dimension `procedural_memory` added | New dimension | C2 Option A |
| Dimensions unchanged: `memory_unit`, `temporal_model`, `entity_model`, `governance_surface`, `integration_surface` | No change | — |
| Dimensions explicitly deferred: `update_semantics`, `evidence_belief_separation` | Not included | C3, C4 deferred |

### Migration rules for existing records

v1 records remain valid under the v1 bucket. They **must not** be re-labeled
with `dv.agentic-memory.v2` without an explicit re-authoring pass through the
v2 projection rules.

Per [restriction-maps-and-comparison-records.md](./restriction-maps-and-comparison-records.md):

> Field-level aggregation must bucket by vocabulary version.

Specifically:

1. **v1 `retrieval_model: hybrid` projections do not carry over.** A record
   previously projecting a framework to `hybrid` under v1 must be re-authored
   under v2 to pick one of the three sub-values based on the original
   evidence. Blind mechanical substitution (e.g., "all v1 hybrids become
   hybrid_fusion_neutral") is prohibited.
2. **v1 records have no `procedural_memory` dimension.** v2 records that
   elect to compare on this axis must include it. v2 records that do not
   address procedural memory must mark the dimension `not_in_scope` in the
   restriction map, not infer procedural values from other dimensions.
3. **Aggregation across v1 and v2 is prohibited without explicit review.**
   Learning-field signals (convergence, tension, boundary) must be computed
   within a version bucket. Cross-version aggregation requires a migration
   decision recorded as a governance artifact.

### What is not being done in v2

Two candidates surfaced by the IC agentic-memory comparison pilot
(2026-04-13) were **explicitly deferred**, not silently folded in:

- **`update_semantics` (C3)** — would capture append-only vs in-place-update
  vs supersede-and-retire vs evolving-representation. Real signal (one pilot
  record); insufficient evidence to stabilize a new axis. Not in v2.
- **`evidence_belief_separation` (C4)** — would capture none vs schema-level
  vs governed-artifact separation of raw evidence from synthesized belief.
  Weakest evidence; still ambiguous between "new dimension" and
  "governance_surface refinement". Not in v2.

Agents using v2 **must not** infer these as dimensions through other axes.
If a comparison needs them, route through a restriction map that declares
them as omissions (explicitly out of scope under v2) and escalate to a
future vocabulary review.

## Governance Status

`dv.agentic-memory.v2` is **provisional**. It is the second ratified internal
comparison surface. v1 remains valid for v1-bucketed records; v2 is the new
default for new records.

- **Authority mode:** delegated
- **Steward decision:** 2026-04-14 per
  [agentic-memory-vocabulary-v2-review.md](../research/planning/agentic-memory-vocabulary-v2-review.md)
- **Ratifier:** Spore steward
- **Scope:** exploratory internal research and bridge-note drafting
- **Revisit triggers:** repeated `translation_mismatch`, recurring
  `not_in_scope` on important questions, emergence of a clearly missing
  dimension (notably including whether C3 or C4 should be promoted after
  more pilot evidence accumulates)

Comparison records using this vocabulary must carry:

- `dimension_vocabulary.vocab_id: dv.agentic-memory.v2`
- `dimension_vocabulary.version: 2`
- the authority state at comparison time

Field-level aggregation must bucket by vocabulary version.

## Dimensions

| Dimension | Question | Value kind | Changed from v1? |
|-----------|----------|------------|------------------|
| `memory_unit` | What durable unit does the framework persist? | `categorical` | No |
| `retrieval_model` | How is durable context recovered? | `categorical` | **Yes — `hybrid` split into 3 sub-values** |
| `temporal_model` | How does the framework represent time or sequence? | `categorical` | No |
| `entity_model` | What kind of identity structure exists in memory? | `categorical` | No |
| `governance_surface` | Where do authority, consent, or revision boundaries appear? | `categorical` | No |
| `integration_surface` | What external interface is available for composition? | `set` | No |
| `procedural_memory` | What substrate does the framework use for procedural memory (know-how, skills, tool-use sequences, workflows)? | `categorical` | **Yes — new in v2** |

## Dimension Definitions

### `memory_unit` (unchanged from v1)

**Source question:** What durable unit does the framework persist?

**Recommended projection targets:**

- `profile`
- `session`
- `event`
- `claim`
- `entity`
- `artifact`
- `none`

Use this dimension to prevent false equivalence between systems that both
"store memory" but persist fundamentally different units.

### `retrieval_model` (REFINED in v2)

**Source question:** How is durable context recovered?

**Recommended projection targets (v2):**

- `vector`
- `graph`
- `hybrid_vector_primary` — vector is the primary retrieval mechanism; graph
  supplements but does not replace cosine recall (e.g., Mem0g)
- `hybrid_graph_primary` — graph is the primary retrieval mechanism; vector
  is secondary (e.g., Graphiti, Zep)
- `hybrid_fusion_neutral` — multiple retrieval modes fused with no primacy
  (e.g., Reciprocal Rank Fusion across dense + BM25 + entity-link + temporal,
  optionally with cross-encoder reranking)
- `rule_based`
- `other`
- `none`

**Rationale for the split:** in v1, three architecturally distinct hybrids
collapsed into one value, producing `translation_mismatch` in the IC pilot's
`layer4-graph-relations` record. v2 distinguishes the three so records can
carry the architectural commitment forward.

**Note on reranking:** cross-encoder reranking on top of `hybrid_fusion_neutral`
is an additional architectural commitment (observed in Hindsight). It is a
refinement within `hybrid_fusion_neutral`, not a separate primary value.
Records should note reranking in `relation_detail` or `rationale` rather than
forcing a new value.

**Migration from v1:** do not mechanically substitute. Each v1 `hybrid`
projection must be re-authored using the original evidence to pick one of
the three sub-values.

### `temporal_model` (unchanged from v1)

**Source question:** How does the framework represent time or sequence?

**Recommended projection targets:**

- `session_bounded`
- `episodic`
- `event_stream`
- `versioned_artifact`
- `none`

Bi-temporal (occurrence + ingestion time) projects to `versioned_artifact`
as a refinement, not a distinct primary value.

### `entity_model` (unchanged from v1)

**Source question:** What kind of identity structure exists in memory?

**Recommended projection targets:**

- `flat_store`
- `document_scoped_entities`
- `typed_entities`
- `relational_graph`
- `cross_document_grounding`
- `none`

### `governance_surface` (unchanged from v1)

**Source question:** Where do authority, consent, or revision boundaries
appear?

**Recommended projection targets:**

- `none`
- `application_policy`
- `user_settings`
- `artifact_governance`
- `explicit_boundary_protocol`
- `other`

### `integration_surface` (unchanged from v1)

**Source question:** What external interface is available for composition?

**Recommended projection targets:**

- `api`
- `graph`
- `event_stream`
- `artifact_export`
- `embedded_runtime`
- `manual_only`
- `none`

### `procedural_memory` (NEW in v2)

**Source question:** What substrate does the framework use for procedural
memory (know-how, skills, tool-use sequences, workflows)?

**Recommended projection targets:**

- `none` — framework has no procedural substrate distinct from semantic
  storage
- `scoped_facts` — procedural content is stored as scoped claims/facts
  alongside declarative content (e.g., Mem0 tool-use facts)
- `skill_files` — procedural content is stored as files/artifacts in a
  repository-like structure (e.g., Letta MemFS skill markdown, our-stack
  skill files)
- `workflow_edges` — procedural content is stored as typed edges/sequences
  in a graph (e.g., Graphiti workflow edges, when present)
- `reflection_bank` — procedural content is stored as synthesized insights
  in a distinct bank (e.g., Hindsight Reflect mental models)
- `other`

**Why this dimension matters:** Tulving's taxonomy (1972) distinguishes
episodic, semantic, and procedural memory. The 2026 agentic-memory
literature treats procedural as first-class. In v1, procedural content
collapsed into `memory_unit: claim` or `artifact` — the same values used
for declarative content, losing a material architectural commitment. See
`intelligence-commons/docs/learning-field/comparison-records/dimension-gap-procedural-memory.yaml`.

**Relation to `memory_unit`:** `procedural_memory` is orthogonal to
`memory_unit`. A framework can persist procedural content as claims (Mem0)
*and* as artifacts (Letta) with distinct `procedural_memory` values. Do not
conflate the two dimensions.

**Grounding requirement:** a framework's `procedural_memory` value must be
supported by documented procedural substrate (skill repository, tool-use
fact collection, workflow graph, reflection bank). Inferred procedural
capability from generic features (e.g., "you could put skills in this
vector store") does not support a non-`none` projection.

## Omitted from v2

The following questions are intentionally out of scope for
`dv.agentic-memory.v2`:

- benchmark performance (LOCOMO, LongMemEval, etc. may be cited as evidence
  for architectural claims but are not comparison dimensions)
- latency and scale
- pricing or license comparison
- security posture
- privacy guarantees
- vendor durability

The following dimensions were **reviewed and deferred** for v2. They are not
in scope but are known revisit candidates:

- **`update_semantics`** (C3): append-only vs in-place-update vs
  supersede-and-retire vs evolving-representation. Revisit when future pilots
  produce repeat evidence.
- **`evidence_belief_separation`** (C4): none vs schema-level vs
  governed-artifact separation. Revisit when ambiguity between new dimension
  and `governance_surface` refinement resolves.

If these become load-bearing before the next formal review, define `v3` or
a sibling vocabulary rather than stretching `v2` beyond recognition. Agents
**must not** silently fold C3 or C4 into existing v2 dimensions.

## Revision Discipline

Revise this vocabulary when one of these occurs:

- repeated comparison records hit `translation_mismatch` on the same missing
  distinction (as with v1's `hybrid`)
- an important review question repeatedly lands in `not_in_scope`
- two dimensions prove inseparable in practice
- a dimension is so broad that relation labels become noisy or unhelpful
- sufficient new evidence accumulates to reconsider a deferred candidate
  (currently: C3, C4)

When revised:

- mint a new `vocab_id` version (`v3`) or explicitly mark a successor version
- document migration notes (as this doc does for v1→v2)
- do not blend records from different versions without review

## Related

- [restriction-maps-and-comparison-records.md](./restriction-maps-and-comparison-records.md) — protocol that consumes this vocabulary
- [agentic-memory-dimension-vocabulary.md](./agentic-memory-dimension-vocabulary.md) — predecessor (v1); remains valid for v1-bucketed records
- [agentic-memory-vocabulary-v2-review.md](../research/planning/agentic-memory-vocabulary-v2-review.md) — steward decision authorizing v2
- IC pilot that surfaced v2 candidates: `intelligence-commons/docs/learning-field/synthesis/agentic-memory-pilot-v1.md`
- [examples/agentic-memory-provisional-map.yaml](./examples/agentic-memory-provisional-map.yaml) — example map using `dv.agentic-memory.v1` (unchanged; serves as v1 reference)
