---
doc_id: spore.restriction-maps-and-comparison-records
doc_kind: spec
status: draft
depends_on:
  - spore.federation-protocol
  - spore.claims-evidence-attestation
---

# Restriction Maps and Comparison Records

A governed protocol for declaring how one local canon projects into another, and for recording agent-produced compatibility judgments on the declared overlap only.

## Purpose

Spore's learning field and learning membrane often need a stronger result than "these two things are similar." They need a governed answer to four questions:

- What surface of A is in scope for comparison with B?
- Who authored and ratified that surface, in what direction, and for what purpose?
- Which dimensions are comparable, and how should each side be projected onto the overlap?
- On each declared dimension, do the two sides agree, refine, complement, obstruct, or intentionally not glue?

This protocol defines two artifacts:

- **`restriction_map`**: a governed boundary artifact declaring the consent surface and compatibility surface for a directional comparison
- **`comparison_record`**: the machine-readable output an agent emits after grounding entities, extracting typed claims, and comparing them through an authorized restriction map

## Scope and Guardrails

- A restriction map is **not** inferred solely from embeddings or raw text. It is authored, reviewed, and versioned.
- A restriction map is **directional**. `A -> B` does not imply `B -> A`.
- A restriction map has two layers:
  - **Governance surface**: who authorizes the comparison, for what purpose, with what limits
  - **Compatibility surface**: which dimensions are comparable and how they project into an overlap
- Entity resolution is a **precondition**, not a peer label in the comparison taxonomy. If the overlap is not grounded, the sheaf-like comparison does not start.
- Restriction maps do not replace membrane governance. They make one boundary artifact inside the governance layer explicit.
- Omitted dimensions are **out of scope**. Agents must not compare or infer across an undeclared surface.
- A restriction map can encode asymmetry. What one party projects outward may differ from what the other projects inward.
- Agents may propose `intentional_non_gluing`, but it becomes authoritative only through an active map or explicit review outcome.
- Dimension vocabularies are governed and versioned. They are allowed to begin rough and provisional, but comparison records must carry the vocabulary version they used.

## Restriction Map Lifecycle

```
draft -> proposed -> provisional -> active -> superseded | revoked | expired
                                    |
                                contested
```

| State | Meaning | Transition trigger |
|-------|---------|-------------------|
| `draft` | Working artifact, not yet submitted for boundary use | Initial authoring |
| `proposed` | Submitted for review by the relevant steward or parties | Review request opened |
| `provisional` | Approved for bounded analytical use, but not yet fully ratified for all declared purposes | Limited-use approval by relevant steward or party |
| `active` | Approved for the declared scope and purpose | Required ratification completed |
| `contested` | Provisional or active map is under challenge or revision | Contest, changed relationship, or discovered mismatch |
| `superseded` | Replaced by a newer map version | `supersedes` link from successor |
| `revoked` | Withdrawn before natural expiry | Source authority or steward revokes |
| `expired` | Time-bounded map is no longer active | `effective_until` reached |

Transitions are governed, not automatic. A contested map may return to `provisional` or `active`, or move to `superseded` or `revoked`.

## Restriction Map Schema

The minimal artifact shape is:

```yaml
artifact_type: restriction_map
map_id: rm.agentic-memory.external-to-spore.v1
version: 1
status: active
direction:
  source: framework.mem0
  target: spore.learning-field.agentic-memory
dimension_vocabulary:
  vocab_id: dv.agentic-memory.v1
  version: 1
  status: provisional
authority_mode: delegated
authored_by:
  - holon: spore.steward.agent
    role: draft_author
ratified_by:
  - holon: spore.steward
    scope: internal_research_use
purpose:
  - bridge_note
  - research_comparison
allowed_operations:
  - compare
  - summarize
  - draft_bridge_note
disallowed_operations:
  - automated_merge
  - external_partner_representation
effective_from: 2026-04-12
effective_until: null
supersedes: null
grounding_requirements:
  entity_resolution: required
  minimum_confidence: medium
  evidence_policy: multi_source_preferred
governance_surface:
  notes: >
    Compare only published architecture claims. Do not infer legal commitments,
    privacy guarantees, or partnership intent.
compatibility_surface:
  dimensions:
    - dimension_id: memory_unit
      value_kind: categorical
      source_question: "What durable unit does the framework persist?"
      target_question: "What durable unit does Spore recognize on this boundary?"
      projection_rule: >
        Project framework-native units into claim, entity, event, artifact,
        profile, session, or none if no defensible projection exists.
      comparison_rule: "Compare only the projected overlap."
    - dimension_id: retrieval_model
      value_kind: categorical
      source_question: "How is durable context retrieved?"
      target_question: "How does Spore recover reusable context on this boundary?"
      projection_rule: "Project into vector, graph, hybrid, rule-based, or other."
      comparison_rule: "Allow refinement and complementarity."
omissions:
  - pricing
  - roadmap_promises
  - unstated_governance_commitments
provenance:
  sources:
    - docs/research/connections/...
  rationale: "Internal analytical projection for learning-field use."
```

### Required Fields

| Field | Meaning |
|-------|---------|
| `map_id` | Stable identifier for the map version |
| `direction.source` / `direction.target` | Declares that the map is directional |
| `dimension_vocabulary` | The versioned dimension set this map uses |
| `authority_mode` | How the map carries governance authority |
| `authored_by` | Who drafted the artifact |
| `ratified_by` | Who approved it for use |
| `purpose` | Why this map exists |
| `allowed_operations` / `disallowed_operations` | Explicit consent and prohibition surface |
| `grounding_requirements` | Preconditions before comparison is allowed |
| `compatibility_surface.dimensions` | Declared overlap dimensions and projection rules |
| `omissions` | Named non-surface; what agents must not infer across |
| `provenance` | Source lineage and authoring rationale |

### Authority Modes

| Mode | Meaning |
|------|---------|
| `bilateral` | Both sides ratify the map for the declared purpose |
| `unilateral` | One side declares what it is willing to project outward; no reciprocal claim implied |
| `delegated` | A stewarding holon authors an internal analytical map for learning use only; no claim that the external party ratified it |

If a map is not bilateral, the artifact must say so explicitly. The default assumption is **not** mutual consent.

### Dimension Vocabularies

Dimensions are not timeless foundations. They are governed artifacts that evolve as the learning field matures.

- A rough dimension vocabulary may begin as a delegated or provisional artifact.
- Comparisons made under vocabulary `v1` are not directly interchangeable with comparisons made under vocabulary `v2` unless a migration or equivalence decision has been recorded.
- A restriction map may inline only the slice of the vocabulary it needs, but it must still name the `vocab_id` and `version` it is using.
- Field-level aggregation must bucket by vocabulary version.

### Dimension Entries

Each dimension entry defines one comparable surface:

| Field | Meaning |
|-------|---------|
| `dimension_id` | Stable name for the overlap dimension |
| `value_kind` | Expected value shape, such as `categorical`, `ordered`, `set`, `scalar`, `graph`, or `text` |
| `source_question` | What the source side is being asked on this dimension |
| `target_question` | What the target side is being asked on this dimension |
| `projection_rule` | How each side should be translated into the overlap |
| `comparison_rule` | What kinds of comparison are valid on this dimension |

The map must define dimensions narrowly enough that a human reviewer can say whether a comparison stayed inside scope.

## Comparison Workflow for Research Agents

An agent using this protocol follows this sequence:

1. Resolve entities and concepts into a grounded overlap candidate.
2. Load an authorized restriction map for the relevant direction and purpose. For exploratory internal work, `provisional` may be sufficient. For durable field-level judgments, require `active`.
3. Extract typed local claims for the declared dimensions only.
4. Project each side into the overlap using the dimension's `projection_rule`.
5. Emit a per-dimension `comparison_record`.
6. Aggregate the record into a bridge note, match explanation, or learning-field update.

The agent must stop early if grounding fails or if no authorized map exists for the comparison purpose.

## Comparison Record Schema

The minimal machine-readable output is:

```yaml
artifact_type: comparison_record
comparison_id: cmp.agentic-memory.mem0-spore.2026-04-12
restriction_map_id: rm.agentic-memory.external-to-spore.v1
source: framework.mem0
target: spore.learning-field.agentic-memory
authority:
  map_status_at_comparison: provisional
  vocabulary_status_at_comparison: provisional
  record_authority: exploratory
comparison_context:
  purpose: adoption_review
  decision_question: "Should Spore bridge this framework into the learning field?"
  standpoint: spore.learning-field.agentic-memory
  requested_by: spore.steward
dimension_vocabulary:
  vocab_id: dv.agentic-memory.v1
  version: 1
grounding:
  status: grounded
  evidence_refs:
    - doc: docs/research/connections/example-1.md
    - doc: docs/research/connections/example-2.md
dimensions:
  - dimension_id: memory_unit
    status: comparable
    source_projection: "profile + episodic summary"
    target_projection: "entity + claim + artifact"
    relation: refinement
    relation_detail: source_narrower_than_target
    confidence: medium
    rationale: >
      The framework's durable user profile is a narrower slice of the target's
      broader durable artifact space.
  - dimension_id: governance_model
    status: not_in_scope
    rationale: "This dimension is omitted by the active restriction map."
overall:
  summary: "Comparable on memory structure; governance intentionally omitted."
  suggested_response: draft_bridge_note
provenance:
  generated_by: spore.steward.agent
  generated_at: 2026-04-12T00:00:00Z
```

### Comparison Context

The same pair may yield different comparison records under different purposes.

- An `adoption_review` may treat obstruction and intentional non-gluing as load-bearing.
- An `integration_review` may treat complementarity and refinement as load-bearing.
- A `bridge_note` may treat agreement and refinement as the most important signals.

The record must therefore carry the purpose and standpoint from which the comparison was made.

### Record Authority

Comparison records inherit authority from the map and dimension vocabulary used at generation time.

| `record_authority` | Meaning |
|--------------------|---------|
| `exploratory` | Derived from a provisional map or provisional vocabulary; useful for learning, not yet durable field canon |
| `ratified` | Derived from an active map and non-provisional vocabulary; suitable for durable aggregation and downstream governance use |

### Grounding Status

Grounding is evaluated before relation labels are assigned:

| Status | Meaning | Software response |
|--------|---------|-------------------|
| `grounded` | Overlap entities are resolved well enough to compare | Proceed |
| `ambiguous` | Multiple plausible overlap targets remain | Stop and request disambiguation or human review |
| `unresolved` | No defensible overlap target exists | Stop and record grounding failure |

### Dimension Status

Each dimension receives one status before any relation label:

| Status | Meaning | Software response |
|--------|---------|-------------------|
| `comparable` | The dimension is in scope and sufficiently grounded | Assign a relation label |
| `not_in_scope` | The map omits this dimension | Stop on this dimension |
| `underdetermined` | In scope, but evidence is too thin for a stable relation | Preserve as unresolved |

### Relation Labels

A relation label is assigned only when `status: comparable`.

| Label | Meaning | Default response |
|-------|---------|------------------|
| `agreement` | Both sides project to the same claim on the overlap | Candidate convergence or canon support |
| `refinement` | One side is a narrower or more specific version of the other on this dimension; the record must say which direction the refinement runs | Preserve specialization relation |
| `complementarity` | The sides agree on the overlap and add distinct non-overlapping value | Keep both; note composability |
| `translation_mismatch` | The sides may be compatible, but the current projection rules are inadequate | Revise the restriction map |
| `intrinsic_obstruction` | The sides make genuinely incompatible claims on the overlap | Preserve tension or negotiate |
| `intentional_non_gluing` | The boundary is functioning correctly by refusing reconciliation on this dimension; this should be backed by the active map or review outcome | Record the boundary and stop |

## Field-Level Aggregation

Repeated comparison records can be aggregated into learning-field signals:

- Repeated `agreement` or `refinement` on the same dimension across sources strengthens convergence and canon-candidate status.
- Repeated `complementarity` identifies design spaces where multiple frameworks compose without collapse.
- Repeated `translation_mismatch` indicates that the problem is in map authorship, not in the compared frameworks themselves.
- Repeated `intrinsic_obstruction` indicates a durable theoretical or governance tension worth preserving explicitly.
- Repeated `intentional_non_gluing` identifies scope boundaries or sovereignty boundaries that should remain load-bearing.
- Aggregation must segment by `dimension_vocabulary.version` and `record_authority`. Provisional and ratified records should not be blended without an explicit review decision.

## Conformance Notes

**MUST:**

- Treat restriction maps as governed artifacts, not hidden comparison parameters
- Require explicit `authority_mode`
- Require provenance and versioning
- Require grounding before relation labeling
- Keep omitted dimensions out of scope
- Preserve asymmetry when the map is directional

**MUST NOT:**

- Infer bilateral consent from a unilateral or delegated map
- Treat restriction maps as privacy, identity, or authorization primitives in general
- Collapse `grounding` failure into obstruction
- Force a relation label when the dimension is `not_in_scope` or `underdetermined`

**MAY:**

- Use LLMs to draft candidate maps or comparison records
- Route low-confidence or contested records to human review
- Aggregate repeated comparison records into convergence, tension, and boundary indicators

## Validation Targets

This protocol is not yet validated in a live pilot. The first bounded pilots should be:

- **Learning field bridge notes**: comparing external frameworks to Spore on a small declared dimension set
- **Agentic memory framework review**: Mem0, Zep, Letta, MemGPT, Graphiti, and similar frameworks compared through one shared analytical map
- **Poietic Match second stage**: typed overlap checks after embedding-based recall, using explicit boundary dimensions rather than cosine alone

Example packs for these pilots should include:

- A partial-grounding failure where overlap remains ambiguous and the comparison stops before relation labeling
- A full `intentional_non_gluing` case showing the authority and review condition that made the boundary load-bearing

See [examples/README.md](./examples/README.md) for a small synthetic example pack.

Run `python3 scripts/validate_restriction_artifacts.py` to validate example or live YAML artifacts against the protocol's core shape rules.

## Related

- **Claims, evidence, and attestation anchoring** (`spore.claims-evidence-attestation`) — grounding and provenance preconditions for comparison
- **Mycorrhizal federation protocol** (`spore.mycorrhizal-federation-protocol`) — sovereignty and exchange invariants that sit beneath boundary artifacts
- **Obstruction-aware sheafification** (`spore.connection.obstruction-aware-sheafification`) — bridge note framing for presheaf, sheafification, and preserved obstruction
