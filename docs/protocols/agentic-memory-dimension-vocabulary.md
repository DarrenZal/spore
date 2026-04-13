---
doc_id: spore.agentic-memory-dimension-vocabulary
doc_kind: spec
status: draft
depends_on:
  - spore.restriction-maps-and-comparison-records
  - spore.term.field
---

# Agentic Memory Dimension Vocabulary

The first governed dimension vocabulary for comparing external agentic-memory frameworks inside Spore's learning field.

## Purpose

This vocabulary names the smallest useful set of dimensions for bridge-note drafting, adoption review, and integration review across agentic-memory frameworks. It is not a timeless foundation. It is a governed comparison surface that is expected to change as the learning field matures.

Machine-facing identity:

```yaml
vocab_id: dv.agentic-memory.v1
version: 1
vocabulary_status: provisional
authority_mode: delegated
scope: exploratory_internal_research
```

This vocabulary is suitable for:

- comparing external memory frameworks to Spore's learning field
- drafting bridge notes on agentic memory systems
- distinguishing convergence, complementarity, and obstruction at a bounded analytical surface

This vocabulary is not sufficient for:

- benchmark evaluation
- production vendor selection
- security or privacy review
- cost or performance comparison

Those need separate vocabularies.

## Governance Status

`dv.agentic-memory.v1` is **provisional**. It is the first ratified internal comparison surface, not a permanent canon.

- **Authority mode:** delegated
- **Draft author:** stewarding research agent
- **Ratifier:** Spore steward
- **Scope:** exploratory internal research and bridge-note drafting
- **Revisit triggers:** repeated `translation_mismatch`, recurring `not_in_scope` on important questions, or emergence of a clearly missing dimension

Comparison records using this vocabulary must carry:

- `dimension_vocabulary.vocab_id`
- `dimension_vocabulary.version`
- the authority state at comparison time

Field-level aggregation must bucket by vocabulary version.

## Initial Dimensions

| Dimension | Question | Value kind | Why it matters |
|-----------|----------|------------|----------------|
| `memory_unit` | What durable unit does the framework persist? | `categorical` | Distinguishes whether the system stores profiles, sessions, entities, claims, artifacts, events, or something else |
| `retrieval_model` | How is durable context recovered? | `categorical` | Distinguishes vector, graph, hybrid, rule-based, or other retrieval approaches |
| `temporal_model` | How does the framework represent time or sequence? | `categorical` | Distinguishes session-bounded, episodic, event-stream, versioned, or absent temporal structure |
| `entity_model` | What kind of identity structure exists in memory? | `categorical` | Distinguishes flat memory stores from typed entities, relations, and cross-document grounding |
| `governance_surface` | Where do authority, consent, or revision boundaries appear? | `categorical` | Distinguishes systems with no explicit governance surface from those with explicit boundary or artifact governance |
| `integration_surface` | What external interface is available for composition? | `set` | Distinguishes API, graph, event stream, artifact export, embedded runtime, or manual-only integration surfaces |

## Dimension Definitions

### `memory_unit`

**Source question:** What durable unit does the framework persist?

**Recommended projection targets:**

- `profile`
- `session`
- `event`
- `claim`
- `entity`
- `artifact`
- `none`

Use this dimension to prevent false equivalence between systems that both "store memory" but persist fundamentally different units.

### `retrieval_model`

**Source question:** How is durable context recovered?

**Recommended projection targets:**

- `vector`
- `graph`
- `hybrid`
- `rule_based`
- `other`
- `none`

This dimension often distinguishes agreement from complementarity. Two systems may both support recovery while remaining complementary because one is graph-native and the other vector-native.

### `temporal_model`

**Source question:** How does the framework represent time or sequence?

**Recommended projection targets:**

- `session_bounded`
- `episodic`
- `event_stream`
- `versioned_artifact`
- `none`

Use this dimension to name whether memory is treated as accumulated state, ordered history, bounded interaction, or revisable artifact lineage.

### `entity_model`

**Source question:** What kind of identity structure exists in memory?

**Recommended projection targets:**

- `flat_store`
- `document_scoped_entities`
- `typed_entities`
- `relational_graph`
- `cross_document_grounding`
- `none`

This dimension matters because Spore's learning field depends on entity resolution as a precondition for comparison. A system with no meaningful identity structure may still be complementary, but it is not comparable on the same grounding surface.

### `governance_surface`

**Source question:** Where do authority, consent, or revision boundaries appear?

**Recommended projection targets:**

- `none`
- `application_policy`
- `user_settings`
- `artifact_governance`
- `explicit_boundary_protocol`
- `other`

Use this dimension carefully. It is not a proxy for trustworthiness or politics in general. It exists to name whether the memory boundary is governable and where revision authority appears.

### `integration_surface`

**Source question:** What external interface is available for composition?

**Recommended projection targets:**

- `api`
- `graph`
- `event_stream`
- `artifact_export`
- `embedded_runtime`
- `manual_only`
- `none`

This dimension is often load-bearing for integration review even when the systems disagree on architecture elsewhere.

## Omitted From v1

The following questions are intentionally out of scope for `dv.agentic-memory.v1`:

- benchmark performance
- latency and scale
- pricing or license comparison
- security posture
- privacy guarantees
- vendor durability

If these become important, define `v2` or a sibling vocabulary rather than stretching `v1` beyond recognition.

## Revision Discipline

Revise this vocabulary when one of these occurs:

- repeated comparison records hit `translation_mismatch` on the same missing distinction
- an important review question repeatedly lands in `not_in_scope`
- two dimensions prove inseparable in practice
- a dimension is so broad that relation labels become noisy or unhelpful

When revised:

- mint a new `vocab_id` version or explicitly mark a successor version
- document migration notes
- do not blend records from different versions without review

## Related

- [restriction-maps-and-comparison-records.md](./restriction-maps-and-comparison-records.md) — protocol that consumes this vocabulary
- [examples/agentic-memory-provisional-map.yaml](./examples/agentic-memory-provisional-map.yaml) — provisional map using `dv.agentic-memory.v1`
- [examples/grounding-ambiguous-comparison-record.yaml](./examples/grounding-ambiguous-comparison-record.yaml) — ambiguous grounding example using `dv.agentic-memory.v1`
