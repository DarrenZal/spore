---
doc_id: spore.canon-decision.decision-memo-post-v1-framing
doc_kind: decision-record
status: active
adr_number: "0010"
decision: edit
opened-on: 2026-04-20
closed-on: 2026-04-20
covers:
  - F-007
r_claim_source:
  - spore.connection.johar-conversational-sovereignty:R1
  - spore.connection.hansen-ghrist-discourse-graphs:R1
r_claim_statement: |
  Spore's project vision should name conversational sovereignty as a design concept: the grammar's coordination loop, discourse graph, and learning membrane together constitute a post-cathedral coherence infrastructure — a system that enables coordinated action under unresolved truth claims without requiring epistemic monopoly. The project vision should identify this as the governance context that makes Spore's design necessary: the cathedral has fractured, and the grammar is an instance of the conversational architecture that must replace its coordination function.
supported_by:
  - spore.connection.johar-conversational-sovereignty:C1
  - spore.connection.johar-conversational-sovereignty:C2
  - spore.connection.johar-conversational-sovereignty:C3
  - spore.connection.hansen-ghrist-discourse-graphs:C2
  - spore.connection.hansen-ghrist-discourse-graphs:C3
authorized-by: ""
queue_reference: "Phase 7 round-spore-synthesis-refresh (F-007)"
affects_canon:
  - docs/synthesis/decision-memo.md
related_adrs: []
shared_framing: ""
concepts:
  - memory-governance
---

# ADR-0010 — Decision Memo Post-v1 Framing

## Status

active (drafted and closed 2026-04-20)

## Context

`docs/synthesis/decision-memo.md` still carries a "Must Address in Next Session" block written on 2026-03-27. That block now misframes repo state. The three promoted-doc tasks landed in Phase 11d commit `f68a2a3` on 2026-03-27, and `project-vision.md` later gained the discourse graph as its 8th graph projection in commit `703acea` on 2026-04-18. The memo therefore reads like live action guidance even though the referenced surfaces already exist.

F-007 is not asking for the decision memo to be deleted. It is asking for the memo to stop speaking in future tense about work that has already landed. The correct move is to preserve the historical queue while reframing it as a dated status note.

## Decision

Replace the "Must Address in Next Session" subsection with a dated status section that records what landed and what remains partially open.

### Concrete Edit Text

#### Replace the subsection heading and four queue items

```markdown
### Status of the 2026-03-27 next-session queue
1. **`project-vision.md`**: Partially completed. The vision now names `Discourse graph` as the 8th graph projection (`703acea`, 2026-04-18). The knowledge-graph -> epistemic-graph rename and the opening move toward "worldview grammar" remain open follow-ons, so this item is no longer pending in the form originally written.
2. **Store-and-forward relay protocol**: Completed. `docs/protocols/store-and-forward-relay.md` landed in Phase 11d (`f68a2a3`, 2026-03-27) and now carries the reusable relay protocol surface the memo was pointing toward.
3. **Discourse-as-governance pattern**: Completed. `docs/patterns/discourse-as-governance.md` landed in Phase 11d (`f68a2a3`, 2026-03-27) and now carries the self-reflective governance pattern the memo identified.
4. **Claims/evidence/attestation anchoring protocol**: Completed. `docs/protocols/claims-evidence-attestation.md` landed in Phase 11d (`f68a2a3`, 2026-03-27) and now carries the epistemic anchoring protocol the memo identified.
```

## Rationale

F-007 is a stale-framing problem, not a substantive disagreement with the memo's underlying synthesis. The work named there largely happened. Leaving the section in future tense now directs readers toward already-completed actions and obscures the actual remaining follow-on work.

`spore.connection.johar-conversational-sovereignty:R1` is the primary claim-bearing anchor because the most visible stale item is the discourse-graph move in `project-vision.md`, which is now landed. `spore.connection.hansen-ghrist-discourse-graphs:R1` is secondary because the claims/evidence/attestation protocol is also live and the memo's old future-tense wording no longer matches that repo state. The relay and discourse-as-governance completions are verified directly in the landed docs and their commit history.

The project-vision item is deliberately marked **partially completed** rather than simply complete. `docs/project-vision.md` now lists the discourse graph as the 8th projection, but the knowledge-graph -> epistemic-graph rename and the broader worldview-grammar opening are still open. The memo should preserve that residual nuance instead of flattening everything to done/not-done.

## Consequences

- `decision-memo.md` now reads as a dated historical synthesis artifact instead of stale operational guidance.
- Readers can distinguish between landed work (`store-and-forward-relay`, `discourse-as-governance`, `claims-evidence-attestation`) and still-open refinement work (`project-vision` naming/framing cleanup).
- No promoted doc is archived or reversed; this ADR only updates the memo's framing to match current repo state.

## Mapping Notes

- F-007 -> resolved by converting the future-tense queue into a dated post-v1 status note.
- Evidence sources: `decision-memo.md`, `project-vision.md`, `store-and-forward-relay.md`, `claims-evidence-attestation.md`, plus landed commit history for `f68a2a3` (2026-03-27) and `703acea` (2026-04-18).
- Wider-scope-docs carve-out applied: `docs/synthesis/decision-memo.md` is edited under `tmp/wider-scope-carveout-log.md`, not by expanding canon-scope membership.
