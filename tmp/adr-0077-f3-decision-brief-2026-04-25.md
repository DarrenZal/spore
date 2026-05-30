# ADR-0077 F3 Actor-Governance — Decision Brief

**Date**: 2026-04-25 (post-F5 same session)
**Target**: `docs/foundations/actor-governance.md` (F3, FINAL Tier B admission of Phase 4)
**Audit manifest**: `tmp/adr-0077-f3-audit-manifest-2026-04-25.md`
**Preflight manifest**: `tmp/adr-0077-preflight-manifest.txt`

---

## §1. Audit findings (summary)

Substrate density unique to F3 in the Phase 4 sequence. Eight prior ADRs (0042/0046/0047/0050/0068) + three already-landed Tier-A/B foundation docs (F1, F4, F6) + F5 forward-ref provide rich substrate. **Key findings**:

1. **ADR-0042 §Consequences L82 explicitly anticipates F3** as canonical handoff target. H-axis recommendation: H3 HYBRID (substrate-child to ADR-0042 + operational-pair sibling to F5 + F6).
2. **F6.7 actor-capture has 4 sub-shapes with rule-level decomposition** ready for F3-side governance-response discharge.
3. **F5 §4.2 R2-contest forward-references F3** for actor-capture-specific governance-response.
4. **Synthesis-depth heterogeneity** is structural, not coincidental: 3 categories are net-new substrate (HEAVY); 5 are SELECTIVE (cite + actor-operationalization). Forcing B1-unified would invent fake symmetry; forcing B2 per-category would re-author canon-prior substrate.
5. **All 8 candidate categories pass honest-rigor cluster-counting** at ≥2 (most at ≥3); no decline-with-triggers warranted.

---

## §2. Child-proposed actor-governance taxonomy (8 categories)

| # | Category | Substrate | Synthesis-depth |
|---|----------|-----------|-----------------|
| §4.1 | **Actor admission + role assignment** | Ostrom boundary-rule; Governance-Process Debian §4/§5/§6; Care relational-autonomy | HEAVY (Q2 standing-grant doctrine net-new) |
| §4.2 | **Authority delegation across rule-stack** | ADR-0046 + ADR-0047 Layer-1 | SELECTIVE (cite-and-operationalize at actor layer) |
| §4.3 | **Power-asymmetry governance (Layer 2 + Layer 3)** | ADR-0047 Layer-2 + Layer-3 | SELECTIVE (cite ADR-0047; author standing-to-balance-asymmetry) |
| §4.4 | **Joint-actor coordination** | ADR-0050 joint-commitment primitive | SELECTIVE (cite primitive; author federation-scale joint-actor governance) |
| §4.5 | **Federation-actor encounter governance** | ADR-0068 federation-encounter pattern | SELECTIVE (cite pattern; author actor-governance-at-encounter doctrine) |
| §4.6 | **Actor-capture prevention + remediation (F6.7 discharge)** | F6.7 4 sub-shapes; ADR-0005 bundle | HEAVY (F3 explicitly discharges F6.7 forward-ref) |
| §4.7 | **Governance-body composition + member legitimacy** | substrate gap; Aligica-Tarko + Pateman + Bollier-Helfrich | HEAVY (new substrate) |
| §4.8 | **Authorization boundaries + revocation** | ADR-0046 + ADR-0047 Layer-3 + F4 §5.3 | SELECTIVE (G2 cite F4 appeal-protocol; author revocation-doctrine) |

3 HEAVY + 5 SELECTIVE = **B5 SELECTIVE per-category** (novel B-axis disposition).

---

## §3. 10-Axis decision-brief with child-recommendations

| Axis | Options | Child-recommendation | Rationale |
|------|---------|---------------------|-----------|
| **A scope** | A1 admit-all-8 / A2 reduce-to-N / A3 expand-to-N+1 | **A1** | All 8 categories pass honest-rigor cluster-counting; matches F1/F4/F5/F6 A1 precedent |
| **B structure** | B1 unified / B2 per-category / B3 parameterized / B5 selective | **B5 SELECTIVE per-category** (novel) | F3 substrate is structurally heterogeneous (3 HEAVY + 5 SELECTIVE); B5 is honest-rigor; preserves substrate single-source-of-truth via SELECTIVE inheritance + closes net-new gaps via HEAVY authoring |
| **C rule-stack** | C1 inherit / C2 author-independent | **C1 inherit ADR-0046** | 5th Phase-4 application; now convention; rule-stack maps cleanly to actor layer (operational = role-perform; collective-choice = role-amend; constitutional = role-admit/recall) |
| **D slug admissions** | D1 zero / D2 N≥1 / D3 prose-only | **D2 admit 2 slugs**: `actor-standing` (Q2 anchor; net-new vocabulary) + `governance-response` (paralllels F5 `response-doctrine`; names F3 discharge counterpart) | Foundation-doc slug-piggyback per ADR-0073 method-precedent 4; yaml v17 → v18 |
| **E forward-ref discharge** | E1 full / E2 partial-defer / E3 acknowledge-only | **E1 full** | Discharge F6.7 (4 sub-shapes) + F5 §4.2 forward-ref + close ADR-0042 §82 anticipation |
| **F registration** | F1 full 5-file / F2 minimal-3-file | **F1 full 5-file atomic-bundle** | Matches F1/F4/F5/F6 precedent; D2 requires yaml bump |
| **G contestation/appeal mechanism** | G1 author-parallel / G2 cite-don't-redefine F4 §5.3 / G3 hybrid | **G2 cite-don't-redefine** | F5 §4.2 cite-don't-redefine precedent; F3 routes actor-disputes through F4 §5.3 with actor-specific standing layered atop; preserves single-source-of-truth |
| **H structural-legitimacy relationship** | H1 extend / H2 sibling-doctrine / H3 hybrid | **H3 HYBRID** | F3's relationship topology is dual: substrate-child to ADR-0042 (coupling-to-consequence is the legitimacy ground F3 inherits) + operational-pair sibling to F5 + F6 (F6.7 recognize → F3 govern → F5 respond). Matches F5 H3 precedent. |
| **I cross-repo** | I1 narrow Spore-only / I2 wide alignment | **I1 narrow Spore-only** | Matches all 4 prior Phase 4 admissions; DH-PM-1 still held; IC + PM cross-repo alignment ADRs land post-F3 in Wave-N queue |
| **J scope-narrowness** | J1 narrow / J2 wide-tactical | **J1 narrow** | Out-of-scope: ADR-0059c-shape governance-artifacts:134-143 cascade-miss; L117 mycorrhizal-federation-protocol cascade-miss; Phase 5 section-level status labels; algorithm-layer protocols (pattern-layer); cross-repo IC + PM alignment ADRs |

---

## §4. Risks + open questions

**R1 — Q4 (human-vs-AI actor governance)**: Routed to §6 Open Questions per audit recommendation; NOT a 9th category. Justification: same shape as F1 §6 AI-summary asymmetry-acknowledgment + F4 §6 AI-summary-authority-decay open question. Future ADR may revisit if AI-agent-specific governance becomes operationally pressing.

**R2 — synthesis-vs-re-engagement depth contention**: B5 SELECTIVE is novel; child-rationale is honest-rigor based on substrate heterogeneity, not convergence-to-template. Operator may prefer B1-unified or B2-per-category for shape-symmetry with F1/F5 or F6. Recommendation: B5 honest-rigor matches the substrate; alternatives invent symmetry.

**R3 — F6.7 sub-shape granularity**: F3 §4.6 must address all 4 sub-shapes (maintainer / admin-class / regulatory / digital-labor) at doctrinal-not-algorithmic depth. Risk of over-specifying algorithms; mitigation = inherit ADR-0073 / 0074 / 0075 / 0076 discipline ("doctrine names; pattern-layer specifies").

**R4 — joint-actor governance scope**: ADR-0050 admits joint-commitment as primitive; F3 §4.4 must extend to joint-actor governance at federation scale without re-engaging the primitive admission itself. Discipline: cite-don't-redefine the primitive; author the federation-scale governance.

**R5 — algorithm vs. doctrine line**: F3 must NOT specify recall-thresholds, eligibility-criteria-quanta, voting algorithms — those are pattern/protocol-layer per all prior Phase 4 precedent. Mitigation: stick to "doctrine names principle; deployments specify quanta."

**R6 — cascade-miss parking discipline**: ADR-0059c-shape cascade-miss at governance-artifacts:134-143 (post-F1 + F4 + F6 + F5) is now compounded; F3 should not silently expand scope to include it. J1 narrow ratification keeps this parked as separate 2-line follow-on.

**Open questions deferred to F3 §6**:
- Q4 — human-vs-AI actor differentiation
- pluriversal actor governance interpretation
- cross-federation actor-portability
- actor-governance temporal dynamics (institutional memory transfer; actor-rotation cadence)
- standing-decay (actor-coupling weakens over time absent renewal-discipline)

---

## §5. Proposed atomic-bundle allowlist

5 files (matches F1/F4/F5/F6 precedent):

1. **NEW** `docs/research/canon-decisions/0077-actor-governance-foundation-doc-promotion.md` (~160 lines; ADR body)
2. **NEW** `docs/foundations/actor-governance.md` (~280–330 lines; foundation doc)
   - Frontmatter: `doc_id: spore.actor-governance`, `doc_kind: foundation`, `status: draft → active`, `depends_on: [spore.project-vision, spore.governance-artifacts, spore.structural-legitimacy, spore.failure-modes, spore.actuator-logic, spore.representation-authority]`
   - Body: Core Claim / Scope / Structural Doctrine — Rule-Level Stratification / Doctrine Per Category (8 subsections) / Forward-Reference-Discharges / Open Questions / Related
3. **EDIT** `docs/research/planning/canon-review-protocol.md` §1 — register `actor-governance.md` in canon-in-scope list (alphabetical insertion before `actuator-logic.md`)
4. **EDIT** `docs/README.md` Foundations listing — register actor-governance entry (alphabetical insertion before actuator-logic)
5. **EDIT** `docs/research/concepts-p2p-wiki.yaml` v17 → v18 — admit 2 slugs (`actor-standing`, `governance-response`)

**NOT touched**: `project-vision.md`, `governance-artifacts.md`, `holonic-network-architecture.md`, ADR-0042 / 0046 / 0047 / 0050 / 0068 (all related-via-prose, not modified).

---

## §6. Method-precedent contributions (proposed)

Three new method-precedents to canonize at §Consequences:

1. **Selective per-category synthesis-depth (B5) for substrate-heterogeneous foundation docs** — when prior canon supplies rich substrate for some categories AND leaves net-new gaps for others, B5 SELECTIVE per-category preserves single-source-of-truth via cite-don't-redefine on substrate-rich categories AND closes net-new gaps via HEAVY authoring on substrate-gap categories. Distinct from F1 B1 unified (substrate uniformly thin), F6 B2 per-category (substrate uniformly heterogeneous + structurally-heterogeneous), F5 B1 re-converged (substrate re-converges on principled-rule). B5 is the FIFTH B-axis observed in Phase 4; validates template-adaptability claim at full extension.

2. **Triple H3 hybrid (substrate-child + operational-pair-sibling-to-N)** — F3 carries 3-way relationship topology: substrate-child to ADR-0042 + operational-pair sibling to F5 (F3 governance-doctrine ← F5 R2-contest routing) + operational-pair sibling to F6 (F6.7 recognize → F3 govern). F5's H3 was 2-way (ADR-0042 + F6); F3 extends to 3-way. Reusable when a foundation doc bridges multiple operational-pair partners.

3. **Forward-reference-discharge cluster-discipline at foundation-doc landing** — F3 discharges 3 distinct forward-refs in one ADR: ADR-0042 §82 anticipation + F6.7 sub-taxonomy governance-response + F5 §4.2 R2-contest routing. Establishes pattern: when a foundation doc bridges multiple operational-pair partners, all forward-refs discharge in one atomic admission (vs. distributing across multiple ADRs). Reusable for future synthesis-foundation-doc admissions where rich forward-ref convergence exists.

---

## §7. Operator decision gate

Default-acceptance form: ratify A1/B5/C1/D2/E1/F1/G2/H3/I1/J1 with no modifications.

Alternatives to surface:
- **Modify B5 → B1** (force unified principled-rule across 8 categories) — child argues against (synthesis-fake-symmetry risk)
- **Modify D2 → D1** (admit 0 slugs, prose-only) — viable if operator prefers parsimony; child weakly favors D2 (Q2 standing-doctrine deserves slug-level vocab anchor; F5 admitted 2 slugs same session, comparable)
- **Modify H3 → H1** (extend ADR-0042 directly via prose) — child argues against (H1 EXTEND doesn't capture F3's 3-way operational-pair relationship)
- **Modify G2 → G1** (author parallel appeal-protocol) — child argues against (single-source-of-truth violation; F5 G2 cite-don't-redefine precedent applies)
- **Modify I1 → I2** (cross-repo IC + PM alignment in same ADR) — child argues against (all 4 prior Phase 4 admissions used I1; cross-repo Wave-N queue is the established pattern; DH-PM-1 still held)

---

**End decision-brief. Awaiting operator Step 2 ratification.**
