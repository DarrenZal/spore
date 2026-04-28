---
doc_id: spore.canon-decision.graduate-meta-vision-memo-to-positioning
doc_kind: decision-record
status: active
adr_number: "0083"
opened-on: 2026-04-28
closed-on: 2026-04-28
decision: edit
r_claim_source:
  - spore.review.meta-vision-memo-2026-04-27:graduation-gate
r_claim_statement: |
  The 2026-04-27 meta-vision memo (`tmp/spore-meta-vision-2026-04-27.md`)
  reached v3 stable through three review-passes plus one spike-driven update plus
  two light state-tracking updates without frame change. The integrating insight —
  "canons as artifacts AI agents navigate, extend, and coordinate around" — is
  load-bearing for current Spore canon work (Phase 4 closure + Wave-N+1 alignment
  + BKC reciprocal-citation closure + bioregional-coordination peer-instance-
  family registration all instantiate it operationally). The memo at tmp/ has been
  reviewed enough; graduation to canonical positioning layer is the next-light
  ceremony move.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/spore-meta-vision-2026-04-27.md
  - /Users/darrenzal/projects/spore/tmp/sub-b-koi-graph-projection-spike-2026-04-27.md
  - /Users/darrenzal/projects/spore/tmp/bkc-spore-coherence-audit-2026-04-27.md
  - docs/positioning/agentic-bioregionalism.md
  - docs/research/connections/bkc-as-instance-family.md
  - docs/research/connections/bioregional-coordination-as-peer-instance-family.md
authorized-by: "operator directive 2026-04-28 (Step 3 of orchestrator plan you-are-new-orchestrator-steady-kernighan.md)"
queue_reference: "Spore meta-vision memo graduation gate (per memo §QX.2 + §10 closing note)"
affects_canon:
  - docs/positioning/agents-and-canons.md
  - docs/README.md
related_adrs:
  - spore:ADR-0035-vision-as-commitment-subtype
  - spore:ADR-0067-validator-schema-archived-enum
  - spore:ADR-0081-external-validation-loop-foundation-doc-admission
  - spore:ADR-0082-phase-4-closure-declaration
concepts:
  - canon-citizenship-layers
  - graph-substrate-of-canon
---

# ADR-0083 — Graduate Meta-Vision Memo to Positioning Doc

## Status

active (authored + activated 2026-04-28 under operator-ratified Step 3 of orchestrator plan)

## Context

The 2026-04-27 meta-vision memo at `tmp/spore-meta-vision-2026-04-27.md` (v3 draft, 563 lines) articulates the integrating frame for Spore canon work post-Phase-4: **"canons as artifacts AI agents navigate, extend, and coordinate around."** Three reviews + one spike-driven update + two light state-tracking updates iterated the memo without changing the substantive frame. The frame is operationally load-bearing — Phase 4 closure, Wave-N+1 alignment, BKC reciprocal-citation closure, bioregional-coordination peer-instance-family registration all instantiate it.

The memo §9 Disposition explicitly names two graduation paths:
- Could graduate to `docs/positioning/agents-and-canons.md` via lightweight ADR analogous to ADR-0035
- Or stay at tmp/ permanently or archive to `docs/research/synthesis/`

Memo §10 closing note frames the choice: graduate when the operator wants the integrating insight to be Spore-canon-citable. Memo §QX.2 makes this an explicit open question.

Operator ratified graduation 2026-04-28 (Step 3 of orchestrator plan `you-are-new-orchestrator-steady-kernighan.md`). The substrate is clean: today's session landed Step 1 (G1 reconcile closure), Step 2a (agentic-bioregionalism positioning doc), Step 2b (bioregional-coordination repo skeleton), Step 2c (peer-instance-family bridge note) + a citation-verification fix on the new repo's project-vision (Step A.1.5). Memo's content is propagation-residue-clean.

## Decision

**Edit.** Graduate the memo's substantive content to a new positioning doc at `docs/positioning/agents-and-canons.md` (light ceremony; canon-citable form; ~150 lines). Memo at `tmp/` retained as historical artifact (untracked per Spore tmp/ discipline; not deleted; not duplicated).

Mirror the ADR-0035 precedent shape: light-ceremony ADR, single canonical-state change, diff summary at end, light Consequences.

What graduates from the memo:
- §1 Frame (the integrating insight)
- §2 Where we are now (substrate map)
- §3 The three threads (Thread 1 sub-initiatives + Thread 2 + Thread 3)
- §4 Cross-thread structural relationships
- §6 What we have / what's latent (clean reference map)
- §7 Forward-shape per thread (sequencing options)
- §10 Closing note
- Future-ADR-shape candidates: AI-summary authority/evaluation, graph-substrate-of-canon, canon-citizenship-layers (preserved as flagged-not-committed)

What does NOT graduate (operator-internal artifacts):
- §5 Open Questions registry (operator-internal planning artifact; not canon-load-bearing)
- §8 Naming exploration for Thread 2 (Thread 2 frame already canonized via `spore.positioning.agentic-bioregionalism` 2026-04-28)
- §9 Disposition meta (memo-internal meta about the memo itself)
- v2 / v2.1 / v2.3 / v3 amendment logs (operator-internal traces)

**Carry-forward fix applied during graduation** (per cascade-miss L5 / L5b discipline): the memo's repeated "F4 §I2" reference is replaced with "F4 §4.5 + §Open Questions" in the graduated positioning doc. "I2" is the ADR-0074 admission-axis label (per ADR-0074 §Consequences L105: "I2 scope; deferred pending operational pressure"), NOT a section in the F4 foundation doc. The actual F4 deferral mechanism for AI-summary-authority lives in §Open Questions ("AI-summary-authority-decay and model-lifecycle coupling" bullet) with §4.5 admitting agent-summary as a representation layer. Memo at tmp/ stays as historical artifact (untracked); the broken citation does not propagate into canon.

Allowlist for this ADR (atomic-bundle):
- `docs/positioning/agents-and-canons.md` (NEW; the graduated positioning doc)
- `docs/research/canon-decisions/0083-graduate-meta-vision-memo-to-positioning.md` (THIS ADR)
- `docs/README.md` (1-line entry under §Positioning; housekeeping)

Rationale for `decision: edit` (canon-review-protocol §4):
- **(a) Lens concurrence ≥ 1**: operator-direct-ratification + memo's own §10 closing note framing graduation as next move once frame is load-bearing
- **(b) No opposition**: positioning doc admission is light ceremony; ADR-0035 establishes precedent; memo content is propagation-residue-clean
- **(c) Held-tension check**: ADR-0001 pluriversal-incommensurability does not block — the integrating frame is scope-conditioned to AI-navigable canon-coordination at the canon-citizenship layers Spore operates within, NOT a universal claim about coordination grammars

## Consequences

**Positive**:
- The integrating frame becomes Spore-canon-citable at positioning layer (collaborator-citable; survives session-narrative; can be cited by future ADRs as upstream framing)
- Three future-ADR-shape candidates remain visible (AI-summary authority / graph-substrate-of-canon / canon-citizenship-layers) as flagged-not-committed; future canon admission can cite this positioning doc as the articulation that named the candidates
- The carry-forward fix on F4 §I2 → F4 §4.5 + §Open Questions corrects citation drift before it propagates into canon (cascade-miss L5 discipline operating as designed)
- Memo at tmp/ retained as historical artifact preserves the v1 → v2 → v2.1 → v2.3 → v3 review-trace for future method-precedent inspection
- Honors light-ceremony graduation pattern (ADR-0035 analog) without inflating canon ceremony

**Negative / open**:
- The positioning doc commits to an articulation of the integrating frame; if Spore canon work shifts substantively (e.g., new threads emerge; Sub-A or Sub-C fires; canon-citizenship-layers candidate fires), the positioning doc may need light amendment via subsequent ADR
- Three future-ADR-shape candidates are now canonically-flagged; this raises the bar slightly for ad-hoc canon work in adjacent territory (e.g., AI-summary authority work post-graduation must consider whether it's the Sub-C ADR firing, not just infrastructure work)
- The graduated positioning doc cites F4 §4.5 + §Open Questions; if F4 itself is amended to clarify the deferral mechanism (e.g., new section for AI-summary-deferral), this positioning doc's citation may need light update

## Evidence

- cluster_key: `tmp/spore-meta-vision-2026-04-27.md:graduation-gate`
- supports: 1 review (operator-direct + memo §10 / §QX.2 self-naming)
- opposes: 0
- source: meta-vision memo v3 graduation gate; ratified 2026-04-28
- Supporting canon: ADR-0035 precedent; F4 representation-authority §4.5 + §Open Questions; F8 external-validation-loop; F1 sensor-oracle-governance; spore.instance-model
- Held-tension overlap: None blocks. ADR-0001 pluriversal-incommensurability is scope-orthogonal.

## Diff summary

`docs/positioning/agents-and-canons.md` (NEW; ~150 lines):
- Title + frontmatter (`doc_kind: positioning`, `status: draft`, 5 depends_on, 8 relates_to)
- §The integrating insight (memo §1 distilled + carry-forward fix on F4 §I2 → F4 §4.5 + §Open Questions)
- §Three threads decompose the work (memo §3.1 + §3.2 + §3.3 distilled)
- §Cross-thread structural relationships (memo §4 distilled)
- §What we have / what's latent (memo §6 distilled)
- §Forward-shape (memo §7 distilled)
- §Future-ADR-shape candidates (memo §1 + §3.1 + §3.3 future-ADR markers consolidated)
- §Closing note (memo §10 distilled)
- Citation-graduation marker at end pointing back to memo + ADR-0083 + ADR-0035 precedent

`docs/README.md` §Positioning:
- Add 1-line entry: `[agents-and-canons.md](./positioning/agents-and-canons.md) — integrating frame for canons-as-artifacts-AI-agents-navigate-extend-coordinate-around; flags three future-ADR-shape candidates`
