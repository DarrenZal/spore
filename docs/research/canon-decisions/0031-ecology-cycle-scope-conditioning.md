---
doc_id: spore.canon-decision.ecology-cycle-scope-conditioning
doc_kind: decision-record
status: active
adr_number: "0031"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-02
r_claim_statement: |
  The section claims "the same ecology operates at every scale" and that "a single person exercises agency through this cycle," but does not condition this claim to the coordination phases and epistemic contexts where the full cycle is actually operative. Evidence from ADRs and bridge notes shows the cycle is strongest for discovery and planning phases under manifest complexity (where Roadmap, Intent, and Evidence are load-bearing). For maintenance-mode coordination (where the vision, roadmap, and overall commitment frame are stable), the cycle still operates but Roadmap revision is rare and the Intent→Commitment→Evidence loop dominates. For established routine operations, the cycle is present but compressed — Evidence may feed Learning, but Learning does not regularly revise Vision. The claim "at every scale" is technically defensible (the structure can be instantiated at every scale) but the necessity and salience of the full cycle varies sharply by coordination phase and epistemic conditions. The canon reads the structure as universal and imperative when the supporting evidence is contingent and phase-dependent.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-b.md
  - docs/research/canon-decisions/0009-coordination-grammar-refresh.md
  - docs/research/canon-decisions/0013-intent-evidence-subtype-clarification.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-02 (ecology cycle universality — two-file canon overreach)"
affects_canon:
  - docs/project-vision.md
  - docs/foundations/governance-artifacts-and-graph-projections.md
related_adrs:
  - spore:ADR-0009-coordination-grammar-refresh
  - spore:ADR-0013-intent-evidence-subtype-clarification
  - spore:ADR-0030-adoption-section-restructure
concepts:
  - coordination-substrate
  - collective-agency
---

# ADR-0031 — Ecology-Cycle Scope Conditioning

## Status

active (authored + activated 2026-04-22 under `canon-review-r2-universality-language` plan)

## Context

The adversarial canon critique (2026-04-22) surfaced a universality overreach in how the coordination ecology cycle — `Vision → Roadmap → Intent → Commitment → Evidence → Learning` — is canonised. The cycle is asserted to "operate at every scale" without conditioning to coordination phase, epistemic context, or scale-specific variation. Lens B (Rhetorical-Overreach & Specificity Auditor) flagged this as finding CC-02, a two-file claim appearing in:

- `docs/project-vision.md:L76-L87` (section: "The Coordination Ecology")
- `docs/foundations/governance-artifacts-and-graph-projections.md:L28-L40` (section: "The Coordination Ecology")

The supporting corpus confirms phase-dependence: `docs/research/canon-decisions/0009-coordination-grammar-refresh.md` (ADR-0009) explicitly discusses phase-dependent grammar engagement; `docs/research/canon-decisions/0013-intent-evidence-subtype-clarification.md` (ADR-0013) narrows intent and evidence into their broader umbrella forms without claiming the sequence is universally necessary; bridge notes on collective intelligence emphasise context-fit over universal architectures.

The structural problem: the cycle *can* be instantiated at every scale (defensible), but its *necessity* and *salience* vary sharply by coordination phase. Full cycle is strongest in discovery/planning/complex-coordination; maintenance-mode contexts typically operate on a compressed Commitment→Evidence→Learning loop with Vision and Roadmap stable. Canonising the full six-element sequence as universal produces downstream process bloat (teams authoring Vision docs when the vision is stable and the actual coordination work is in Intent-Commitment-Evidence).

This ADR is sibling to ADR-0032 (CC-08 Core-Thesis five-primitives conditioning) and ADR-0033 (CC-09 dual-axis recursion clarification) — all three instantiate the same pattern (universality overreach without conditioning) from the adversarial critique's Pattern 1 observation.

## Decision

**Edit.** Add phase/context conditioning to the ecology-cycle passage in both canon files:

- Narrow "The same ecology operates at every scale" to "The structure can be instantiated at every scale; the necessity and salience of each element varies by coordination phase."
- Add a conditioning sentence naming the discovery/planning vs. maintenance/routine contrast: in maintenance phases the cycle typically compresses to Commitment→Evidence→Learning, with Vision and Roadmap stable.
- Preserve the "coordination ecology not pipeline" framing and the six-element list — those remain useful and correct; the repair is scope conditioning, not restructuring.

Rationale for `edit` disposition (per canon-review-protocol v3 §4 with adversarial-critique adaptation):

- **(a) Lens concurrence ≥ 1**: Lens B flagged ✓ (CC-02 appears three times in Lens B output — CC-LensB-1, -2, -4 — but consolidated as one finding in the critique doc).
- **(b) No opposition**: no lens defended the universality phrasing; ADR-0009 and ADR-0013 already establish phase-dependence.
- **(c) Held-tension check**: the only active held-as-tension ADR (0001 pluriversal-incommensurability, concepts: `pluriversal-commoning` + `memory-governance`) does not block — conceptually, *narrowing universality claims is consistent with and partially responsive to* the pluriversal tension, which rejects universal-scope canon framings. R2's conditioning edits make canon less rather than more universalist, reducing the surface area on which pluriversal incommensurability could conflict. This is affirmative rather than adversarial.

## Consequences

- Readers no longer infer that the full six-element cycle must be instantiated in every coordination context. Maintenance teams can legitimately operate on a Commitment→Evidence→Learning compression without perceiving deviation from canon.
- The "same ecology at every scale" framing is replaced with the accurate "structure can be instantiated at every scale; salience varies by phase" — defending the cross-scale applicability claim without overstating universal salience.
- Downstream: R3 (interop conditioning, CC-03) can proceed without this ecology-cycle claim as a contradicting prior. Adoption section (ADR-0030) remains coherent — its design-principle framing was already scope-neutral on universality.
- Unresolved: specific phase-dependence semantics (what exactly compresses in what contexts) are not normative in this ADR. Future canon work can surface case-study evidence for phase-specific patterns.

## Evidence

- cluster_key: `docs/project-vision.md:coordination-ecology:universality`
- supports: 1 lens (Lens B rhetorical-overreach / specificity auditor)
- opposes: 0
- source: adversarial-critique consolidated findings (tmp/canon-adversarial-critique-2026-04-21.md), CC-02
- Supporting bridge notes: none directly (adversarial critique is internal review); `docs/research/canon-decisions/0009-coordination-grammar-refresh.md` (ADR-0009) and `docs/research/canon-decisions/0013-intent-evidence-subtype-clarification.md` (ADR-0013) provide in-canon corroboration of phase-dependence.
- Opposing bridge notes: none
- Cross-project echoes: none (IC/PM not reviewed in this round)
- Held-tension overlap: None blocks 2026-04-22. Only held ADR (0001 pluriversal-incommensurability) is affirmatively consistent with narrowing universality — pluriversal critique of universal-scope claims supports rather than contests this conditioning.
- Adaptation note: R-claim source cites internal-review CC-ID rather than bridge-note R-claim; `supports` is lens-concurrence count. Per operator-authorized Round-2 protocol adaptation continuing from R1; see plan `canon-review-r2-universality-language.md` Context §"Protocol adaptation (same as R1)" and memory `feedback_foundation_repair_protocol_flexibility.md`.

## Diff summary

`docs/project-vision.md`:
- L87: `The same ecology operates at every scale. A single person exercises agency through this cycle.` → conditioning paragraph acknowledging phase-dependence.

`docs/foundations/governance-artifacts-and-graph-projections.md`:
- After L39 (end of six-element list): insert phase-conditioning paragraph matching project-vision.md's framing.

Two-file coordinated edit; ~2-3 lines added per file. Zero primitive semantics changed, zero canon scope expansion.
