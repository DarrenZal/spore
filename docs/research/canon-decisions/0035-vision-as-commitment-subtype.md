---
doc_id: spore.canon-decision.vision-as-commitment-subtype
doc_kind: decision-record
status: active
adr_number: "0035"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-06
r_claim_statement: |
  The canon states visions are constitutional commitments (L74 — accurate) but then treats "Vision commitments" as a distinct ecology element alongside Roadmap, Intent, Commitment, Evidence, Learning (L80). This creates ambiguity about whether vision is a primitive or a subtype of commitment. The cleaner reading (supported by constitutional-artifacts-and-graph-projections.md:L26-L27) is: commitment is the primitive; vision is commitment at the orientation scope with slow-change + broad-consent properties.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-a.md
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-06 (vision-as-primitive drift)"
affects_canon:
  - docs/project-vision.md
related_adrs:
  - spore:ADR-0031-ecology-cycle-scope-conditioning
concepts:
  - commitment-pooling
  - collective-agency
  - coordination-substrate
---

# ADR-0035 — Vision as Commitment Subtype

## Status

active (authored + activated 2026-04-22 under canon-review Round 4)

## Context

The project-vision ecology passage makes two statements about vision that are together ambiguous:
- L74: "Visions are constitutional commitments."
- L80: "**Vision commitments** orient (direction, values, constraints)"

L74 is accurate: vision is a kind of commitment. L80 treats "Vision commitments" as a distinct ecology element alongside Roadmap, Intent, Commitment, Evidence, Learning — which implies vision is a primitive distinct from commitment. The constitutional-artifacts-and-graph-projections.md foundation (L26-L27) already establishes the correct relationship: "All constitutional artifacts are commitments at different levels of specificity. A vision is a constitutional commitment." Vision is commitment-at-orientation-scope, not a separate primitive.

Lens A (Primitive-Claims Auditor, S2, CC-06) flagged this as primitive-claim drift in the adversarial critique.

## Decision

**Edit.** Clarify the ecology listing so that vision is clearly presented as commitment-at-orientation-scope rather than as a separate primitive. Minimal intervention: rename the ecology-element label from "Vision commitments" to "Orientation commitments (visions)" at the listing point (L80), and preserve L74's opening statement unchanged ("Visions are constitutional commitments"). Downstream lists of the ecology elements keep their existing structure — the relabeling propagates semantic clarity without restructuring the cycle.

Rationale for `edit` disposition (canon-review-protocol v3 §4 with adversarial-critique adaptation):
- **(a) Lens concurrence ≥ 1** ✓ (Lens A)
- **(b) No opposition**: constitutional-artifacts foundation already establishes the subtype relationship; no lens defended primitive status
- **(c) Held-tension check**: ADR-0001 does not block — subtyping clarification is orthogonal to pluriversal-incommensurability concept

## Consequences

- The ecology is more coherent: commitment is the primitive, with vision / roadmap / pool-entry as subtypes at different specificity scopes.
- L74's correct statement and L80's now-clarified label agree. No hidden primitive inflation.
- Downstream ADRs that build on the ecology framing (0030 adoption, 0031 ecology conditioning, 0032 core thesis) remain consistent.

## Evidence

- cluster_key: `docs/project-vision.md:vision-as-primitive-drift`
- supports: 1 lens (Lens A primitive-claims)
- opposes: 0
- source: adversarial-critique consolidated findings, CC-06
- Supporting canon: docs/foundations/constitutional-artifacts-and-graph-projections.md:L26-L27 (subtype relationship)
- Held-tension overlap: None blocks 2026-04-22. ADR-0001 pluriversal-incommensurability is orthogonal.
- Adaptation note: per canon-review Round 4 adversarial-critique protocol adaptation, continuing from R1/R2/R3.

## Diff summary

`docs/project-vision.md:L80`:
- Old: `- **Vision commitments** orient (direction, values, constraints)`
- New: `- **Orientation commitments (visions)** orient (direction, values, constraints)`

Single-line label clarification. Preserves ecology listing structure and L74's opening framing.
