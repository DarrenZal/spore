---
doc_id: spore.canon-decision.intent-evidence-subtype-clarification
doc_kind: decision-record
status: active
adr_number: "0013"
opened-on: 2026-04-20
closed-on: 2026-04-20
covers:
  - F-021
  - F-022
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-rea-valueflows:R1
  - spec:spore.corpus-review.research-capstone-review:R1
r_claim_statement: |
  Spore and IC use `intent` as the broad pre-commitment coordination signal and `evidence` as the broad epistemic relation bearing on claims. PM's `pm:Intent` and fulfillment-facing evidence family are protocol-layer specializations of those broader canon surfaces, not replacements for them, so the drift should be resolved by subtype / namespace clarification rather than corpus-wide rename.
supported_by:
  - /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-cross-repo-concept-splits.md
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
  - docs/protocols/claims-evidence-attestation.md
  - docs/research/corpus-review/research-rea-valueflows.md:40-40
  - docs/research/corpus-review/research-capstone-review.md:99-99
authorized-by: ""
queue_reference: "Phase 7 round-cross-repo-concept-splits (F-021, F-022)"
affects_canon:
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
  - docs/protocols/claims-evidence-attestation.md
related_adrs:
  - intelligence-commons:ADR-0009-intent-evidence-subtype-clarification
  - poietic-match:ADR-0008-intent-evidence-pm-subtype-scope
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-cross-repo-concept-splits.md
concepts:
  - intent
  - evidence
---

# ADR-0013 — Intent and Evidence Subtype Clarification

## Status

active (drafted and activated 2026-04-20)

## Context

F-021 and F-022 are a coordinated cross-repo drift problem. Spore uses `intent` for the broad pre-commitment coordination surface and `evidence` for the broad epistemic relation around claims, provenance, and attestation. IC inherits those same broad surfaces in `intelligence-primitives.md`. PM, however, has developed namespaced protocol terms with materially narrower jobs: `pm:Intent` is a durable published matching record, and PM's evidence family names the fulfillment / trust-update branch of the wider evidence surface.

The drift is real, but the source review does not justify a corpus-wide rename. The existing PM namespace already gives the narrower protocol semantics a place to live. The correction needed in Spore is therefore to say the umbrella / subtype relationship explicitly, so future cross-repo reading does not mistake PM's protocol objects for replacements of the broader Spore canon terms.

## Decision

Edit two Spore canon surfaces to make the subtype relationship explicit.

1. In `docs/foundations/constitutional-artifacts-and-graph-projections.md`, clarify that Spore's `intent` remains the broad pre-commitment coordination surface and that PM's `pm:Intent` is a durable protocol specialization of it.
2. In the same file, clarify that Spore's `evidence` remains the broad epistemic relation and that fulfillment evidence is one subtype within it rather than the corpus-wide definition.
3. In `docs/protocols/claims-evidence-attestation.md`, clarify that PM's `pm:Evidence` / `pm:EvidenceRef` / `pm:FulfillmentEvidence` family sits inside the wider evidence umbrella as the execution / fulfillment subtype that feeds trust updates.

No rename, no new frozen-vocab slug, and no attempt to collapse PM's protocol semantics back into the unqualified Spore terms.

## Rationale

The findings are about ontological drift, not about one repo being wrong and another being right. Spore's broad surfaces are still doing useful work: intent names coordination-before-commitment, and evidence names the broad relation by which observations, attestations, fulfillment records, and provenance bear on claims. PM also needs its narrower protocol objects, because matching, consent, discoverability, lifecycle, and trust updates are real protocol concerns.

The clean repair is to name the relationship between those two levels. PM's terms already carry a namespace, so they can remain protocol-specific without forcing a rename on Spore or IC. That preserves the broader canon while preventing readers from treating PM's subtype semantics as if they settled the shared terms corpus-wide.

## Consequences

- Spore now explicitly states that its unqualified `intent` and `evidence` terms remain the umbrella surfaces in the shared canon.
- PM's narrower protocol semantics are acknowledged as specializations rather than left to drift silently.
- The round closes F-021 and F-022 without triggering a foundational-reframing rename.
- Future cross-repo ADRs can reuse this subtype / namespace pattern instead of re-litigating the same drift.

## Evidence

- F-021 evidence gate: pass
  - `docs/foundations/constitutional-artifacts-and-graph-projections.md` defines intent as a declared or inferred directional signal
  - `docs/foundations/intelligence-primitives.md` in IC uses intent at the routing-signal layer
  - `poietic-match/docs/grammar.md` and `poietic-match/docs/protocol.md` define `pm:Intent` as a durable published protocol record
  - `docs/research/corpus-review/research-rea-valueflows.md:40-40` anchors intent as one half of a commitment, not a durable bilateral commitment artifact
- F-022 evidence gate: pass
  - `docs/protocols/claims-evidence-attestation.md` treats evidence as the broad epistemic relation around claims
  - `intelligence-commons/docs/foundations/intelligence-primitives.md` treats evidence as provenance-bearing support / challenge structure
  - `poietic-match/docs/grammar.md` and `poietic-match/docs/protocol.md` treat PM evidence as fulfillment and trust-update material
  - `docs/research/corpus-review/research-capstone-review.md:99-99` rejects collapsing `evidence` to `attestation-of-execution`
- Subtype / rename judgment: subtype clarification suffices; no corpus-wide rename required after source review

## Diff summary

- `docs/foundations/constitutional-artifacts-and-graph-projections.md`: clarifies the umbrella sense of `intent` and `evidence`
- `docs/protocols/claims-evidence-attestation.md`: clarifies that PM's evidence family is a fulfillment-facing subtype of the broader evidence surface

