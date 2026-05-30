# Plan — ADR-0073 F1 sensor-oracle-governance foundation-doc admission

**Status**: DRAFT — awaiting operator Step 2 ratification
**Date**: 2026-04-25
**Type**: Decision-gated canon-edit (foundation-doc promotion via ADR)
**Target repo**: spore (IC + PM + koi-processor + darren-workflow read-only)
**Sandbox note**: intended `~/.claude/plans/adr-0073-f1-sensor-oracle-governance.md` but sandbox denied write; consolidated to tmp/ per today's established fallback precedent (same as Phase 4 scoping plan).

---

## 1. Context

F1 is the FIRST Tier A admission of Phase 4 (9 foundation docs). Operator ratified Phase 4 scoping plan defaults: A1 confirmed-9 / B2 revised priority / C4 mixed-deps / D3 tiered / E1 ADR-per-doc / F2 ratify-defer-exec; plus Q5 FULL scope (machine + human + AI-summary) and Q6 tag-agnostic.

Audit-v2 §6.4 puts F1 at priority 1 (all-reviewer convergence). 3 prior ADRs (0043, 0044, 0049) + 1 permissive (0046) forward-reference F1 with specific expectations. Canon currently names sensors (governance-artifacts-and-graph-projections.md:134-143) but has NO doctrine for selection, calibration, maintainer roles, contestation, disagreement, interpretation-authority, or absent-evidence handling.

ADR-0042 dag-delete + structural-legitimacy-promote is the template: one ADR + one new foundation doc + canon-review-protocol §1 registration + docs/README.md registration.

This plan authors ADR-0073 + new `docs/foundations/sensor-oracle-governance.md` as the first-Tier-A pattern-setting deliverable for Phase 4. Template-reusability is load-bearing (8 more foundation docs will inherit F1's shape).

## 2. Decision-Brief

See separate decision-brief document:
`/Users/darrenzal/projects/spore/tmp/adr-0073-f1-decision-brief-2026-04-25.md`

10-axis A-J with child recommendations + proposed foundation-doc outline + proposed ADR §Context/§Decision/§Consequences. Awaiting operator ratification on all 10 axes.

## 3. Allowlist (Step 3+ execution; ratified per decision-brief defaults)

- `docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md` (NEW)
- `docs/foundations/sensor-oracle-governance.md` (NEW)
- `docs/research/planning/canon-review-protocol.md` (§1 line-insert)
- `docs/README.md` (Foundations list line-insert)
- `docs/research/concepts-p2p-wiki.yaml` (CONDITIONAL — only if axis D chooses D2)

OUT-OF-SCOPE (Constraint-10 tripwire):
- `governance-artifacts-and-graph-projections.md:134-143` §Grounding Through Sensors — NO edits in F1; cross-referenced from F1 body only. Later ADR may tighten that paragraph's residual intent-pressure language if needed.
- Any sibling-repo touch — IC + PM + koi-processor + darren-workflow read-only throughout.
- CLAUDE.md parent-session-tracked files at repo root / docs/ / docs/foundations/ — deferred to /end wrap.

## 4. Method discipline (inherited from arc)

- Decision-gated plan structure: decision-brief produced in this session; operator ratifies; Step 3+ executes post-approval.
- Strict-scope preflight (Constraint 10): any tracked mod outside allowlist → PAUSE.
- Atomic-bundle draft commit: all 4 (or 5 if D2) files in one draft commit (ADR-0068 precedent).
- Draft-then-active commit pair (ADR-0042 precedent).
- Cross-repo read-only: verify HEAD-end matches HEAD-start at Step 7.5.
- 2-round /review-plan cap (known-ceiling accept).
- Audit-then-propose: decision-brief surfaces options with child recommendation; operator judges.
- Honest-rigor: if operator selects options that compound into larger session-atomic, surface projection-change at Step 2 response.

## 5. Acceptance Criteria (for Step 3+; operator re-ratifies at Step 2)

- AC1: ADR-0073 authored per ADR-0042 frontmatter + body structure
- AC2: Foundation doc authored per structural-legitimacy.md shape (Core Claim → Structural Doctrine → 7-concern sections → Open Questions → Related); may exceed 60-line precedent
- AC3: ADR-0044 Evidence-primitive reinforcement expectation satisfied (explicit Evidence-verb cross-reference in foundation doc)
- AC4: ADR-0049 three-way distinction preserved (reproductive-commoning ≠ care-commoning ≠ reproduction-continuity; longitudinal-attestation named as Evidence subspecies)
- AC5: ADR-0046 rule-stack inheritance handled per axis C (INHERIT / PARTIAL / NO)
- AC6: F4 scope preserved (F1 is intra-modality governance; inter-layer precedence is F4's scope; no F4 preemption)
- AC7: Three modalities (machine sensor / human attestation / AI-summary) covered via principled-rule abstraction (not per-modality tables)
- AC8: Phase 5 tag-agnostic — no pre-tagging of sections
- AC9: canon-review-protocol.md §1 Spore canon-in-scope list updated with F1 foundation doc
- AC10: docs/README.md Foundations list updated with F1 foundation doc
- AC11: (CONDITIONAL per axis D) concepts yaml v14→v15 with narrow slug admission OR D3 defer-to-future
- AC12: Validator 9/30 held exact
- AC13: Draft + active commit pair on Spore; no sibling-repo touches
- AC14: Cross-repo HEADs verified unchanged at Step 7.5
- AC15: Session-atomic projection honored (draft→active inside reserved window)

## 6. Session-atomic projection

Per axis selection:
- A1 + C1 (full-doctrine + full rule-stack): 200-280 line foundation doc + ~120 line ADR → 15-22 min in-window
- A1 + C3 (full-doctrine + partial rule-stack): 170-230 line foundation doc + ~110 line ADR → 12-18 min in-window
- A2 (sketch + later-expand): 80-120 line foundation doc + ~90 line ADR → 8-12 min in-window
- A3 (principles-only): 100-150 line foundation doc + ~100 line ADR → 10-15 min in-window

Budget: 30 min. All options fit.

## 7. Post-approval execution steps (Step 3+)

- Step 3: Author ADR-0073 body + frontmatter
- Step 4: Author foundation doc body + frontmatter
- Step 5: Registration edits (canon-review-protocol §1 + docs/README.md + optional yaml)
- Step 5a: Draft commit (atomic-bundle 4 or 5 files)
- Step 6: /review-plan round 1 (lint + adversarial)
- Step 7: Fix + round 2 (known-ceiling accept)
- Step 7.5: Cross-repo HEADs verification + validator run (expect 9/30 exact)
- Step 7.6: Active commit (status flip)
- Step 8: Close-out manifest at tmp/adr-0073-close-out-manifest.txt

## 8. Handback statement

STEP 2 HANDBACK. Awaiting ratification on A/B/C/D/E/F/G/H/I/J. No Step 3+ execution without explicit approval via SendMessage.
