---
doc_id: spore.matter-register
doc_kind: operations
status: draft
depends_on:
  - spore.project-vision
  - spore.roadmap
---

# Matter Register

A thin, queryable register of what Spore currently treats as load-bearing.

This artifact is derivative, not sovereign. It does not replace canon, roadmap, or planning notes. It indexes them in a compact form so agents and stewards can query what currently matters without re-reading the full corpus every time.

## Operating Rule

- The structured YAML block below is the authoritative form of this artifact.
- Human-readable views should be generated from the structured block, not treated as a second source of truth.
- The register updates at **method cadence** by default: monthly steward review.
- Operational signals and new evidence may propose changes, but they do not rewrite the register automatically.
- This is **v1** and intentionally incomplete. The goal is thin extraction over current reality, not canon restructuring.

## Register Data

```yaml
register_id: mr.spore.v1
register_status: draft
owner: spore.steward
authority_level: method_review
last_reviewed_at: 2026-04-13
review_cadence: monthly
update_rule: >
  Candidate additions or changes may be proposed at any time, but the register
  changes only during method-cadence review unless an explicit steward exception
  is recorded.
source_ref_policy:
  - use doc_id when available
  - use repo-relative path only when no governed doc_id exists
entry_types:
  - canonical_claim
  - active_workstream
  - bounded_pilot
  - preserved_tension
  - intentional_non_gluing
  - non_goal
entries:
  - matter_id: mr.spore.001
    kind: canonical_claim
    statement: >
      Spore exists to enable coordination and coherence without surrendering
      sovereignty.
    status: active
    confidence_band: high
    salience_band: high
    source_refs:
      - spore.project-vision
    related_dimensions:
      - sovereignty
      - coordination
      - federation
      - interoperability
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: null

  - matter_id: mr.spore.002
    kind: canonical_claim
    statement: >
      Adoption should remain incremental and reversible; Spore is designed for
      coexistence with legacy systems rather than total rupture.
    status: active
    confidence_band: high
    salience_band: medium
    source_refs:
      - spore.project-vision
    related_dimensions:
      - adoption
      - reversibility
      - legacy-bridge
      - membranes
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: null

  - matter_id: mr.spore.003
    kind: intentional_non_gluing
    statement: >
      Plurality is load-bearing: translation is negotiated and local semantics
      are preserved rather than centrally imposed into one ontology.
    status: stable_boundary
    confidence_band: high
    salience_band: high
    source_refs:
      - spore.roadmap
      - spore.project-vision
    related_dimensions:
      - plurality
      - ontology
      - translation
      - sovereignty
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: >
      This is a positive boundary condition, not only a prohibition.

  - matter_id: mr.spore.004
    kind: active_workstream
    statement: >
      Comparative Intake and Schema Translation is an active Track 4 workstream:
      Spore should learn systematically from external frameworks, papers, repos,
      and protocols through bridge notes, claims, dispositions, and promotion review.
    status: active
    confidence_band: high
    salience_band: high
    source_refs:
      - spore.roadmap
    related_dimensions:
      - track4
      - learning-field
      - bridge-notes
      - schema-translation
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: null

  - matter_id: mr.spore.005
    kind: active_workstream
    statement: >
      Governed Self-Revision Stage 1 is active: build the Matter Register,
      maintain the layered evidence split, and validate the comparison-record
      artifact family before opening downstream implementation-feedback lanes.
    status: active
    confidence_band: medium
    salience_band: high
    source_refs:
      - spore.roadmap
      - docs/research/planning/governed-self-revision.md
    related_dimensions:
      - meta-layer
      - self-revision
      - salience
      - method-learning
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: >
      This is a planning-stage workstream rather than settled canon.

  - matter_id: mr.spore.006
    kind: bounded_pilot
    statement: >
      The next bounded pilot is the agentic-memory comparison pilot using
      dv.agentic-memory.v1, delegated restriction maps, and comparison records
      to test whether typed distinctions outperform generic similarity review.
    status: planned
    confidence_band: high
    salience_band: high
    source_refs:
      - spore.roadmap
      - docs/research/planning/agentic-memory-comparison-pilot.md
    related_dimensions:
      - agentic-memory
      - bounded-pilot
      - restriction-maps
      - comparison-records
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: >
      This pilot is Stage 1 validation, not downstream implementation feedback.

  - matter_id: mr.spore.007
    kind: preserved_tension
    statement: >
      Hyperstition governance remains a productive tension: the first synthesis
      produced supports and oppositions, and promotion was deferred rather than resolved.
    status: preserved
    confidence_band: high
    salience_band: medium
    source_refs:
      - spore.roadmap
    related_dimensions:
      - hyperstition
      - synthesis
      - productive-tension
      - promotion
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: >
      New inputs that bear on hyperstition should be scored against this live tension
      rather than treated as if the issue were already settled.

  - matter_id: mr.spore.008
    kind: preserved_tension
    statement: >
      Downstream implementation-feedback infrastructure is desired, but remains
      intentionally deferred until a downstream implementation is actually ready
      to generate real signals.
    status: deferred
    confidence_band: high
    salience_band: high
    source_refs:
      - docs/research/planning/governed-self-revision.md
      - docs/research/planning/agentic-memory-comparison-pilot.md
    related_dimensions:
      - sequencing
      - implementation-feedback
      - signal-readiness
      - stage-gating
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: >
      This is a sequencing boundary, not a rejection of downstream learning.

  - matter_id: mr.spore.009
    kind: non_goal
    statement: >
      Spore does not aim to become a general-purpose runtime platform; it publishes
      patterns and protocols, while reference implementations remain in scope.
    status: out_of_scope
    confidence_band: high
    salience_band: medium
    source_refs:
      - spore.roadmap
    related_dimensions:
      - scope
      - non-goal
      - runtime
      - reference-implementation
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: null

  - matter_id: mr.spore.010
    kind: non_goal
    statement: >
      Forced ontology unification is out of scope; interoperability should come
      through translation and negotiated boundaries rather than uniformity.
    status: out_of_scope
    confidence_band: high
    salience_band: high
    source_refs:
      - spore.roadmap
      - spore.project-vision
    related_dimensions:
      - ontology
      - interoperability
      - translation
      - non-goal
    owner: spore.steward
    last_reviewed_at: 2026-04-13
    review_cadence: monthly
    supersedes: []
    notes: >
      This is the negative corollary of the pluralism boundary above.
```

## v1 Reading Notes

This first cut is intentionally small:

- 2 canonical claims
- 2 active workstreams
- 1 bounded pilot
- 2 preserved tensions
- 1 intentional boundary
- 2 non-goals

If this artifact cannot answer basic salience questions in this minimal form, the next move is not to add more entries. The next move is to fix the schema or the extraction discipline.
