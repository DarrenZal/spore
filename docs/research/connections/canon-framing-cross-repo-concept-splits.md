---
doc_id: spore.connection.canon-framing-cross-repo-concept-splits
doc_kind: research
status: draft
research_subkind: canon_framing
disposition: clarify existing terms
depends_on: []
relates_to:
  - spore.governance-artifacts
  - spore.claims-evidence-attestation
  - ic.intelligence-primitives
  - pm.grammar
  - pm.protocol
concepts:
  - intent
  - evidence
---

# Canon framing: intent and evidence across Spore, IC, and PM

This note carries the cross-repo narrative for Phase 7 `round-cross-repo-concept-splits`, covering findings F-021 (`intent`) and F-022 (`evidence`). The resolution pattern is **subtype / namespace clarification, not corpus-wide rename**. Per-repo decision records: `spore:ADR-0013-intent-evidence-subtype-clarification`, `intelligence-commons:ADR-0009-intent-evidence-subtype-clarification`, and `poietic-match:ADR-0008-intent-evidence-pm-subtype-scope`.

## §1 Why this is cross-repo

The same two canon terms are doing different jobs across the three repos:

- **Spore** uses `intent` as a broad pre-commitment coordination signal and `evidence` as the broad epistemic relation bearing on claims.
- **IC** inherits those same broad surfaces when it talks about routing-intent and provenance-bearing evidence.
- **PM** uses namespaced protocol terms — `pm:Intent`, `pm:Evidence`, `pm:EvidenceRef`, `pm:FulfillmentEvidence` — for durable matching records and fulfillment traces that carry consent, lifecycle, and trust-update semantics.

The drift is real, but it is not yet a rename case. PM's namespaced terms are narrower protocol artifacts built on top of the broader cross-repo canon surfaces. The corrective move is therefore to say that relationship explicitly in canon rather than pretending all three repos mean the same thing by the unqualified slugs.

## §2 Intent family

Across Spore and IC, `intent` names the **pre-commitment directional surface**: a declared or inferred signal that can be routed, negotiated, combined, deferred, or refused before it stabilizes into commitment. This is the broad umbrella sense captured by Spore's coordination ecology and IC's capability-routing derivation.

PM narrows that surface. `pm:Intent` is not just "some intent in general"; it is a **durable published protocol record**. It carries:

- a structured subject
- explicit constraints
- consent and discoverability policy
- lifecycle state
- links to fulfillment-facing evidence history

The subtype judgment is therefore:

- `intent` = broad cross-repo coordination signal / pre-commitment surface
- `pm:Intent` = PM protocol-layer specialization of that surface

The broader term stays in place. The namespaced PM term names one durable realization of it.

## §3 Evidence family

Across Spore and IC, `evidence` names the **broad epistemic relation** by which claims, observations, measurements, attestations, provenance chains, prior decisions, and fulfillment records bear on one another. It includes support and challenge; it is not exhausted by execution proof.

PM again narrows that surface. Its evidence family is the **fulfillment / trust-update branch**:

- records of what happened in or after commitment fulfillment
- the artifacts and attestations attached to those records
- trust updates and field updates computed from them

The subtype judgment is therefore:

- `evidence` = broad cross-repo epistemic umbrella
- `pm:Evidence` / `pm:EvidenceRef` / `pm:FulfillmentEvidence` = PM protocol-layer specialization focused on fulfillment history and trust updates

This is why the capstone-review warning matters: `attestation-of-execution` is one admissible reading inside the evidence family, not a corpus-wide replacement for `evidence`.

## §4 Repo-local canon implications

- **Spore** should explicitly say that its unqualified `intent` and `evidence` terms remain the broad umbrella surfaces, while PM's namespaced terms are downstream specializations.
- **IC** should make the same clarification inside `intelligence-primitives.md`, because IC currently uses both words in the broad Spore sense while collaborating with PM's narrower protocol vocabulary.
- **PM** should explicitly say that `pm:Intent` and the PM evidence family are namespaced protocol-layer subtypes, not the only meaning of `intent` or `evidence` across the shared canon.

## §5 Naming discipline

This round does **not** mint new frozen-vocab entries and does **not** rename the broad terms corpus-wide.

- Keep the broad cross-repo canon surfaces as `intent` and `evidence`
- Keep PM's protocol-layer specialization under PM's existing namespace
- Do not create a new umbrella slug for PM's subtype family
- Do not backfill a corpus-wide rename unless a later foundational-reframing round explicitly authorizes it

If future canon work finds that PM's terms cannot be stably described as specializations of the broader surfaces, that is a reframing trigger, not something to smuggle through a canon-review-v2 round.

## §6 Related ADRs

- `spore:ADR-0013-intent-evidence-subtype-clarification`
- `intelligence-commons:ADR-0009-intent-evidence-subtype-clarification`
- `poietic-match:ADR-0008-intent-evidence-pm-subtype-scope`

