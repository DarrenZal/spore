---
doc_id: spore.canon-decision.canon-review-protocol-v3-governance-hardening
doc_kind: decision-record
status: draft
adr_number: "0011"
decision: edit
opened-on: 2026-04-20
closed-on: 2026-04-20
covers:
  - F-025
  - F-026
r_claim_source:
  - spec:spore.corpus-review.research-governance-process:R1
  - spec:spore.corpus-review.research-structured-disagreement:R1
r_claim_statement: |
  The canon-review protocol has become a meta-corpus constitutional surface, but it still behaves like an ordinary operational doc: it self-harvests successor rules through the same round machinery it governs and offers no named post-adoption route for challenging a landed ADR. The protocol must therefore distinguish constitutional amendment from ordinary canon-review execution and must name a post-adoption appeal path rather than relying on ad hoc operator judgment.
supported_by:
  - docs/research/planning/reframing/reframing-protocol-governance-hardening.md
  - docs/research/planning/canon-review-protocol.md:10-21
  - docs/research/corpus-review/research-governance-process.md:24-26
  - docs/research/corpus-review/research-governance-process.md:40-42
  - docs/research/corpus-review/research-structured-disagreement.md:34-38
  - docs/research/corpus-review/research-capstone.md:319-321
authorized-by: reframing-protocol-governance-hardening
queue_reference: "Phase 7 reframing-protocol-governance-hardening (F-025, F-026)"
affects_canon:
  - docs/research/planning/canon-review-protocol.md
related_adrs: []
shared_framing: ""
concepts:
  - memory-governance
---

# ADR-0011 — Canon Review Protocol v3 Governance Hardening

## Status

draft (authorized by `reframing-protocol-governance-hardening`)

## Context

`docs/research/planning/canon-review-protocol.md` is no longer just a convenient operating note. It is the shared governance surface that later canon-review rounds and cross-repo ADRs treat as authoritative. The v1 -> v2 move was harvested from ordinary execution, but leaving that same self-amendment loop in place would keep the protocol-about-protocols open to ordinary operational drift.

The same document also stops at pre-adoption dispositions. It can say `edit`, `hold-as-tension`, or `reject`, but it does not say what happens after a landed ADR is later disputed. Governance-process research treats constitutional/operational separation as the defense against silent procedural drift, and structured-disagreement research treats rebuttal and appeal as load-bearing rather than optional. The capstone already named both gaps as unresolved meta-corpus defects.

## Decision

Edit `docs/research/planning/canon-review-protocol.md` to harden the protocol as a constitutional governance surface.

### Constitutional-amendment guard

Add a new §12 stating that revisions to `canon-review-protocol.md` that change authority, lifecycle semantics, scope, validation rules, or other governance mechanics must route through a foundational-reframing proposal under the double-cooling rule. Canon-review rounds may still harvest lessons, but they may not silently self-ratify a new protocol version by ordinary round close.

### Post-adoption appeal path

Add a new §13 naming the post-adoption challenge path:

1. Evidence disputes and repo-local execution disputes route to a successor ADR in the affected repo.
2. Procedural disputes about how a landed ADR was executed route to a successor ADR or explicit rollback note, preserving the audit trail.
3. Frame disputes about the protocol itself, `authorized-by:` lineage, or proposal mechanics route upward to a new foundational-reframing proposal, matching FR-26 of the foundational-reframing protocol.

### Supporting edits

Update the protocol intro and harvest language so they no longer imply that every canon-review round automatically rewrites this file in place.

## Rationale

F-025 and F-026 are one governance-hardening package because both failures live at the same layer. The protocol needs a boundary between ordinary canon editing and revision of the rule set that authorizes those edits. Without that guard, later rounds can normalize procedural drift simply by shipping a new harvest.

The appeal path is the other half of the same repair. Once ADRs are allowed to land on a shared cross-repo governance stack, post-adoption disagreement has to go somewhere named. Routing repo-local execution disputes through successor ADRs preserves the audit trail. Routing frame disputes through foundational reframing keeps ordinary ADR machinery from reopening the very surface that authorizes it.

## Consequences

- Future protocol revisions become slower and more explicit because they now require reframing authorization rather than ordinary self-harvest.
- Canon-review close memos still capture lessons, but those lessons become candidate amendments rather than automatic edits to the protocol text.
- Landed ADRs now have a named post-adoption challenge path instead of falling back to operator memory.
- This ADR does not settle status-vocabulary unification. That narrower protocol/tooling repair is handled separately in ADR-0012.

## Mapping Notes

- F-025 -> resolved by the constitutional-amendment guard and by removing self-harvest wording from the intro/harvest sections.
- F-026 -> resolved by the post-adoption appeal path that distinguishes evidence, procedural, and frame disputes.
