---
doc_id: spore.canon-decision.phase-4-closure-declaration
doc_kind: decision-record
status: draft
adr_number: "0082"
opened-on: 2026-04-27
closed-on: 2026-04-27
decision: edit
r_claim_source:
  - spore.connection.canon-rebuild-arc-method-retrospective:13.7
  - spore.review.phase-4-foundation-docs-scoping-plan-2026-04-25:5
  - spore.review.adr-tier-c-readiness-audit-2026-04-25:6
r_claim_statement: |
  Phase 4 of the canon-rebuild arc, defined in 2026-04-22 canon-first-principles-audit-v2 §6.4 as "7–9 new foundation docs, priority-ordered" and ratified at 2026-04-25 morning Phase 4 scoping under Option D3 TIERED admission sequencing, closed across 2 days (2026-04-25 + 2026-04-26 evening) with all 9 deficits dispositioned: 8 admit (F1 sensor-oracle-governance ADR-0073 / F4 representation-authority ADR-0074 / F6 failure-modes ADR-0075 / F5 actuator-logic ADR-0076 / F3 actor-governance ADR-0077 / F7 minimum-viable-spore-instance ADR-0078 / F9 maintenance-economics ADR-0079 / F8 external-validation-loop ADR-0081) plus 1 decline-with-triggers (F2 translation-mapping-governance ADR-0080). Foundation-doc count expanded 7 → 14 across the arc; concepts yaml advanced v14 → v20 with 8 new derived glossary slugs admitted; canon-rebuild arc extended from 26 to 33 canon-decisions. Retrospective §11 + §12 (2026-04-25 inline-extension) + §13 + §14 (2026-04-26 inline-extension) canonized 11 cumulative method-precedents from Tier C alone plus 7 prior precedents from Tier A + Tier B. Validator 9/30 baseline held EXACT across all 9 admission commits + housekeeping commits. Sibling repos (IC + PM + koi-processor + darren-workflow) zero-change verified at every dispatch. 11 Agent-tool orchestrations across 2 days; zero rollbacks. This decision-record formalizes Phase 4 closure as a Spore-canon decision-record per operator directive 2026-04-27 and names "phase-closure-declaration as ADR-shape" as a new canon-method precedent reusable for future Phase closures.
supported_by:
  - docs/research/connections/canon-rebuild-arc-method-retrospective.md
  - tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md
  - tmp/adr-tier-c-readiness-audit-2026-04-25.md
  - docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md
  - docs/research/canon-decisions/0074-representation-authority-foundation-doc-promotion.md
  - docs/research/canon-decisions/0075-failure-modes-foundation-doc-promotion.md
  - docs/research/canon-decisions/0076-actuator-logic-foundation-doc-promotion.md
  - docs/research/canon-decisions/0077-actor-governance-foundation-doc-promotion.md
  - docs/research/canon-decisions/0078-min-viable-spore-instance-foundation-promotion.md
  - docs/research/canon-decisions/0079-maintenance-economics-foundation-doc-admission.md
  - docs/research/canon-decisions/0080-translation-mapping-governance-defer-with-triggers.md
  - docs/research/canon-decisions/0081-external-validation-loop-foundation-doc-admission.md
authorized-by: "Phase 4 closure-declaration operator directive 2026-04-27 (light capstone ADR; formalizes 9-of-9 deficit disposition; references retrospective §13.7 as primary canon-citable account; new method-precedent 'phase-closure-declaration as ADR-shape' for future Phase 5+ closures)"
queue_reference: "Phase 4 9-of-9 deficit closure across 2 days; first complete Phase closure in canon-rebuild arc per retrospective §13.7; closure-declaration recorded at canon-decision layer (ADR) parallel to retrospective layer (connection)"
affects_canon:
  - docs/research/canon-decisions/0082-phase-4-closure-declaration.md
related_adrs:
  - spore:ADR-0042-dag-delete-structural-legitimacy-promote
  - spore:ADR-0073-sensor-oracle-governance-foundation-doc-promotion
  - spore:ADR-0074-representation-authority-foundation-doc-promotion
  - spore:ADR-0075-failure-modes-foundation-doc-promotion
  - spore:ADR-0076-actuator-logic-foundation-doc-promotion
  - spore:ADR-0077-actor-governance-foundation-doc-promotion
  - spore:ADR-0078-min-viable-spore-instance-foundation-promotion
  - spore:ADR-0079-maintenance-economics-foundation-doc-admission
  - spore:ADR-0080-translation-mapping-governance-defer-with-triggers
  - spore:ADR-0081-external-validation-loop-foundation-doc-admission
concepts:
  - governance-memory
---

# ADR-0082 — Phase 4 Closure Declaration

## Status

active (authored + activated 2026-04-27 under operator directive; light capstone ADR formalizing Phase 4 9-of-9 deficit closure across 2026-04-25 + 2026-04-26).

## Context

Phase 4 of the canon-rebuild arc was defined in the 2026-04-22 canon-first-principles-audit-v2 (`tmp/canon-first-principles-audit-v2-2026-04-22.md` §6.4) as "7–9 new foundation docs, priority-ordered." The 2026-04-25 morning Phase 4 scoping session ratified the deficit count at 9 and adopted Option D3 TIERED admission sequencing: Tier A (F1 + F4) must-land-first; Tier B (F6 + F5 + F3) mid-priority; Tier C (F7 + F8 + F2 + F9) deferred-pending operational-demand triggers.

Phase 4 executed across 2 days. Tier A landed 2026-04-25 morning (F1 sensor-oracle-governance + F4 representation-authority both same-day; introduced foundation-doc admission template + fact-vs-specification text-type distinction). Tier B landed 2026-04-25 afternoon (F6 failure-modes + F5 actuator-logic + F3 actor-governance same-day; cognitive-load-optimized inverted ordering; introduced B5 SELECTIVE novel B-axis + H3 multi-way relational shape + multi-forward-ref cluster-discharge). Tier C landed 2026-04-26 (F7 promote-and-extend + F9 substrate-rich synthesis + F2 decline-with-triggers in morning; F8 cluster-counting-cleared admit in evening). 11 Agent-tool orchestrations across 2 days; zero rollbacks; sibling repos zero-change throughout.

Retrospective §11 + §12 canonized the 2026-04-25 arc method-contributions inline (113 lines). Retrospective §13 + §14 canonized the 2026-04-26 Tier C closure inline (additional ~120 lines, bringing retrospective to 848 lines total). Both retrospective extensions are collaborator-citable and document the arc-method discipline at synthesis layer.

**Why a separate closure-declaration ADR**: the retrospective is a `doc_kind: connection` artifact at the synthesis-layer; ADRs are `doc_kind: decision-record` artifacts at the canon-decision-layer. A future operator searching the ADR chain for "where is Phase 4 closure documented?" lands at this ADR; a future collaborator citing the arc's method-contributions lands at the retrospective. The two are complementary canon-pointers for the same arc, not competing.

This ADR is **light by design**: 1-file allowlist (the ADR itself); no canon-body change; no new slug admission; no foundation-doc edit; references retrospective §13.7 as primary canon-citable account of the closure.

## Decision

**Edit — single-file decision-record formalizing Phase 4 closure**:

1. **Author this ADR** (`docs/research/canon-decisions/0082-phase-4-closure-declaration.md`) declaring Phase 4 of the canon-rebuild arc closed at 9-of-9 deficit disposition (8 admit + 1 decline-with-triggers).

2. **Reference all 9 admission ADRs** in `related_adrs:` frontmatter (ADR-0073 through ADR-0081) plus ADR-0042 as the foundation-doc-promote precedent that established the admission template inherited by Tier A.

3. **Cite retrospective §13.7** as the primary canon-citable account of Phase 4 closure. This ADR is structural-pointer; retrospective is method-narrative.

4. **Name "phase-closure-declaration as ADR-shape" as new canon-method precedent** in §Consequences. First canon use; reusable for future Phase 5+ / Wave-N+ closures.

**Rationale for `edit` disposition** (no closure-specific decision-type exists in DECISION_RECORD_STATUSES; `edit` is the canonical-shape match for an ADR that authors a single new doc without modifying other canon):
- **(a) Lens concurrence**: the closure verdict (9-of-9 dispositioned) is empirically given by the 9 admission ADRs themselves; no judgment call required at closure-declaration time. Retrospective §13.7 documents the verdict; this ADR formalizes it as decision-record.
- **(b) No opposition**: closure declaration ratifies state, does not change state. There is nothing to oppose.
- **(c) Operator-discretion**: the closure-declaration ADR is operator-elective, not arc-mandatory. Operator chose to write rather than skip per 2026-04-27 directive (alternative was "skip — retrospective already does the work"; operator chose write to provide an ADR-chain pointer parallel to the retrospective synthesis).
- **(d) Phase precedent**: Phases 1 / 2 / 3 of the canon-rebuild arc had no capstone-declaration ADRs. ADR-0082 establishes the precedent for future Phase closures; subsequent Phase closures may follow this shape or skip per operator discretion.

## Consequences

### Canon state (unchanged by this ADR)

- **Foundation docs**: 14 (unchanged — closure-declaration ADR does not add foundation docs).
- **Concepts yaml**: v20 (unchanged — closure-declaration ADR does not admit slugs).
- **Derived glossary slugs**: 18 (unchanged).
- **Primitives / doctrines / modes / properties / patterns / canon-object-class**: PRESERVED at 9 / 3 / 2 / 2 / 7 / 4-categories.
- **Canon-rebuild arc**: extends to 34 canon-decisions (0044–0058, 0061–0082, 0059a). The arc continues; this ADR formalizes Phase 4 closure within it but does not close the arc itself.
- **Phase 4 progress**: 9/9 deficits dispositioned. Phase 4 FULLY CLOSED.

### Cross-repo state

- **IC**: HEAD `cef35fe` unchanged; foundation-doc-family acknowledgment from ic:ADR-0020 covers Phase 4 Tier B substrate; further cross-repo Wave-N+1 alignment for Tier C admissions remains parking (downstream-pressure-gated).
- **PM**: HEAD `349e3ac` unchanged; same parking status as IC.
- **koi-processor**: HEAD `22463cf4` unchanged.
- **darren-workflow**: HEAD `3cc190f` unchanged.
- **Validator**: 9/30 baseline held exact (no canon-body change in this ADR).

### Method-precedent (NEW)

**"Phase-closure-declaration as ADR-shape"** — when a multi-deficit phased admission program closes, operator may elect to author a light Spore-canon decision-record formalizing the closure at canon-decision-layer parallel to any synthesis-layer retrospective. Single-file allowlist (ADR-only); `decision: edit` shape; references all admission ADRs in `related_adrs:`; cites retrospective sections as primary canon-citable account.

This precedent is **operator-elective**, not arc-mandatory. Phase 1 / 2 / 3 had no capstone ADRs and that was canonically fine; Phase 4 has one and that is also canonically fine. The discipline is that closure-declaration ADRs:
1. **Add no canon-body change** (1-file allowlist; the ADR itself)
2. **Reference all admissions in `related_adrs:`** (creates ADR-chain pointer)
3. **Cite retrospective sections** as primary method-narrative (avoids duplicating synthesis-layer content)
4. **Honor preserved-status** across all canon dimensions (no slug admissions; no foundation-doc edits; no primitive/doctrine/mode/property/pattern changes)
5. **Are operator-elective** at the time of phase closure (write or skip; both are honest)

Reusable for future Phase 5 / Wave-N+1 / any multi-deficit closure where operator wants ADR-chain pointer to closure event.

### Maintenance posture

- This ADR is the canonical pointer for future operators or readers asking "where is Phase 4 closure documented at the ADR-chain layer?" — the answer is "ADR-0082, which references retrospective §13.7 + lists all 9 admission ADRs (0073-0081)."
- The 9 admission ADRs are the authoritative record of WHAT was decided per deficit. Retrospective §11 + §12 + §13 + §14 are the authoritative method-narrative. ADR-0082 is the authoritative closure-declaration.
- If Phase 4 ever needs re-opening (e.g., F8's decline-with-triggers fires), this ADR is preserved as historical record of the pre-trigger closure disposition.

### Forward references

- **Phase 5 corpus-wide section-level status labels** is the next major arc per retrospective §11.9 + §13.8 forward state. Phase 5 may produce its own closure-declaration ADR following this precedent if/when it closes.
- **Cross-repo IC + PM Wave-N+1 alignment** for Tier B + Tier C admissions remains parking; downstream-pressure-gated.
- **F8 re-opening triggers** per ADR-0080 (F2 decline) are the only Phase-4-internal re-opening pathway. Both remain valid post-closure.

## Evidence

- cluster_key: `Phase-4-closure-2026-04-27 + 9-admission-ADR-chain`
- supports: 9 admission ADRs (0073/0074/0075/0076/0077/0078/0079/0080/0081) + retrospective §11/§12/§13/§14 (canon-rebuild-arc-method-retrospective.md, 848 lines through 2026-04-26 evening) + Phase 4 scoping plan (Option D3 TIERED ratification 2026-04-25 morning) + Tier C readiness audit (`tmp/adr-tier-c-readiness-audit-2026-04-25.md`)
- opposes: 0 (closure declaration ratifies state; nothing to oppose)
- source: 2026-04-27 operator directive electing to write capstone ADR rather than skip
- Supporting canon: all 14 foundation docs (post-Phase-4) + concepts yaml v20 + 18 derived glossary slugs + 32-precedent method catalog in retrospective
- Cross-project echoes: ic:ADR-0020 (Wave-N alignment for Tier A + Tier B; downstream Wave-N+1 for Tier C remains parking) + pm:ADR-0017 (same shape; parking)
- Held-tension overlap: ADR-0001 pluriversal-incommensurability remains held; F8 admission cited cross-repo distinction-of-concerns to clear cluster-counting; Phase 4 closure does not affect ADR-0001 status. DH-PM-1 NOT-FIRED preserved through F9 + F8 admissions; closure does not affect DH-PM-1 status.

## Diff summary

**File 1**: `docs/research/canon-decisions/0082-phase-4-closure-declaration.md` (NEW; this ADR; ~140 lines).

Single-file allowlist. No other canon files modified. CLAUDE.md housekeeping update is a separate commit (not part of this ADR's atomic-bundle).
