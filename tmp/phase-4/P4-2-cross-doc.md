# Phase 4 Pass P4.2 — Cross-doc concept-definition comparison

**Pass:** P4.2
**Agent:** Codex
**Date:** 2026-04-19
**Scope:** Cross-doc comparison of concepts in `tmp/concept-roster.tsv` with `usage-count >= 2`, recording only inconsistencies, drifts, contradictions, and silent overloads.
**Inventory anchors:** `tmp/concept-roster.tsv`, `tmp/corpus-inventory.tsv`, `tmp/adr-rationale-index.tsv`, `docs/research/corpus-review/research-capstone.md`, `docs/research/corpus-review/research-capstone-review.md`

## Findings

```yaml
- finding-id: P4-2-001
  type: naming-wrong
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/project-vision.md
    concept: knowledge-graph
    line_range: 101-105
  claim: |
    Spore still carries one graph projection under two names. `project-vision.md` names the projection `knowledge graph`, while `constitutional-artifacts-and-graph-projections.md` redefines the same surface as `epistemic graph` and explicitly says the vision/public docs are using the older label. The result is not two differentiated concepts but one projection with split naming across canon surfaces, which keeps the old colloquial label alive after the more precise term has already been adopted elsewhere.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/project-vision.md:101-105
      excerpt: "\"Knowledge graph\" — entities, claims, evidence, provenance, sensor outputs (the epistemic substrate...)"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/foundations/constitutional-artifacts-and-graph-projections.md:58-58
      excerpt: "\"Epistemic graph\" (called \"knowledge graph\" in the vision and public-facing docs)"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md:179-181
      excerpt: "Vision calls it \"knowledge graph.\" ... \"Epistemic graph\" is more precise"
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/concept-roster.tsv row 132: "epistemic-graph"; row 206: "knowledge-graph"
      excerpt: "\"epistemic-graph ... 7\" / \"knowledge-graph ... 20\""
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Possible overlap with P4.1a if the Spore per-doc pass also records the local naming drift in `project-vision.md`.

- finding-id: P4-2-002
  type: should-be-split
  severity: S2
  priority: blocking
  corpus-location: content
  target:
    repo: N/A
    doc: N/A
    concept: intent
    line_range: N/A
  claim: |
    `intent` drifts across repos from a lightweight coordination signal into a protocol object with materially different semantics. In Spore and IC, intent is a pre-commitment directional signal, including inferred intent and routing intent; in PM, `pm:Intent` is a durable published record with consent policy, lifecycle, embedded subject model, and attached evidence. That is a layer shift from primitive verb/signal to schema-bearing protocol artifact without a namespace distinction, so the corpus currently uses one slug for two different ontological jobs.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/foundations/constitutional-artifacts-and-graph-projections.md:36-39
      excerpt: "An intent is a declared or inferred directional signal"
    - kind: source-doc
      ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:81-81
      excerpt: "A query's taxonomy ... is an Intent signal"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/grammar.md:23-33
      excerpt: "The atomic unit of the matching field ... evidence ... consent ... lifecycle"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:48-52
      excerpt: "Intent data is stored on the publishing node only ... announced ... to peers"
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-rea-valueflows.md:40-40
      excerpt: "\"Intent ... usually with only one agent associated\" ... \"one half of a commitment\""
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: Possible overlap with P4.1b/P4.1c; PM and IC per-doc passes may record the local halves of the same split separately.

- finding-id: P4-2-003
  type: should-be-split
  severity: S2
  priority: blocking
  corpus-location: content
  target:
    repo: N/A
    doc: N/A
    concept: evidence
    line_range: N/A
  claim: |
    `evidence` is being used for two different families of work without an explicit sub-type boundary. Spore and IC use evidence as the broad epistemic relation that bears on claims through provenance, support, challenge, and attestation. PM uses the same term primarily for fulfillment history and post-commitment trust updates. Those are related, but not interchangeable: one is general claim warrant, the other is execution trace feeding trust accumulation. The corpus currently collapses them under one slug while the capstone review explicitly warns against narrowing `evidence` to execution-attestation alone.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:39-43
      excerpt: "\"Structured provenance linking claims to observations\" ... `supports`/`challenges`"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/protocols/claims-evidence-attestation.md:15-17
      excerpt: "Evidence accumulates for and against them"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/grammar.md:124-141
      excerpt: "\"evidence-grounded\" ... \"Accumulated from fulfilled commitments, not declared\""
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:234-259
      excerpt: "Fulfillment generates evidence that updates the trust field"
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone-review.md:99-99
      excerpt: "\"attestation-of-execution\" is too narrow a rename for `evidence`"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: Cross-pass dedupe candidate with P4.3 because the capstone/review pair independently flags the same narrowing pressure in the meta-corpus.

- finding-id: P4-2-004
  type: overlapping/redundant
  severity: S2
  priority: blocking
  corpus-location: content
  target:
    repo: N/A
    doc: N/A
    concept: field / holon
    line_range: N/A
  claim: |
    `field` and `holon` remain under-differentiated across current canon. `holon` names the recursive whole/part agent structure; `field` names the recursive distributed substrate or arrangement; but the canon repeatedly uses both to describe the same self-similar, multi-scale coordination structure. The capstone flags the ambiguity directly, and the current canon still does not specify whether a field is the next-scale view of a holon, the exterior relational medium around a holon, or a genuinely distinct primitive. That makes representation choices unstable at exactly the primitive-class layer where downstream modeling work needs a crisp distinction.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/foundations/relational-agency-and-holons.md:15-18
      excerpt: "A holon is simultaneously ... a whole ... a part nested within a larger whole"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/foundations/constitutional-artifacts-and-graph-projections.md:67-69
      excerpt: "The same structure at different scales ... deep implication of the holon concept"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/foundations/lexicon/field.md:35-39
      excerpt: "the same underlying structure instantiated at different scales and for different purposes"
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:185-185
      excerpt: "A holon at scale N is a field at scale N+1"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone-review.md:165-165
      excerpt: "The holon-vs-field confusion flagged in §5 is a real and useful problem statement"
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  notes: Cross-pass dedupe candidate with P4.5 because this is a primitive-class relation question, not only a local wording drift.

- finding-id: P4-2-005
  type: naming-wrong
  severity: S4
  priority: deferred
  corpus-location: content
  target:
    repo: spore
    doc: docs/foundations/mycorrhizal-federation-protocol.md
    concept: decentralization-theater
    line_range: 60-60
  claim: |
    The corpus now carries both `decentralization-theater` and `decentralisation-theater` as if they were distinct concepts. The frozen vocabulary, ADR naming, and concept roster canonicalize the US-spelled slug, while the live Spore canon prose introduces the UK-spelled variant. Nothing in the ADR rationale suggests these are intentionally separate; this is duplicate-surface drift created by spelling, not by meaning.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/foundations/mycorrhizal-federation-protocol.md:60-60
      excerpt: "\"Decentralisation theater\""
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/0005-decentralization-myth-bundle.md:25-25
      excerpt: "- decentralization-theater"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/concepts-p2p-wiki.yaml:242-245
      excerpt: "slug: decentralization-theater"
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/concept-roster.tsv row 102: "decentralisation-theater"; row 103: "decentralization-theater"
      excerpt: "\"decentralisation-theater ... 2\" / \"decentralization-theater ... 21\""
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Likely dedupe with P4.1a if the Spore per-doc pass records the same spelling split locally.
```

## Pass summary

Five findings cleared the evidence bar: three primitive-class cross-repo drifts (`intent`, `evidence`, `field / holon`), one Spore-local projection naming split (`knowledge-graph` / `epistemic-graph`), and one editorial duplicate surface caused by spelling (`decentralization-theater` / `decentralisation-theater`). The main pattern is not contradiction-by-assertion but silent layer drift: primitive names get reused for schema types, execution traces, or adjacent recursive structures without an explicit split marker.

## Pass-level caveats

- I used `tmp/concept-roster.tsv` as the exhaustive starting surface, then triaged candidate concepts by cross-repo spread, primitive-class status, usage count, and label collisions; findings were recorded only where line-cited evidence showed real drift.
- Common-English primitives such as `field`, `agent`, and `evidence` required manual disambiguation because some occurrences are ordinary prose rather than concept use.
- I treated existing ADR rationale as admissible anti-finding evidence per the methodology rule; several apparent duplicates were dropped because ADR text explicitly preserved the distinction.
- No per-concept audit is included for concepts that appeared stable after cross-doc comparison.
