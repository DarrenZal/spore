# ADR-0075 F6 failure-modes — decision brief

**Authored**: 2026-04-25
**Step**: 1 (decision-gated; operator ratification at Step 2)
**Inherits**: ADR-0073 (F1) + ADR-0074 (F4) template pattern

---

## 1. Audit findings summary

- F6 is canonically requested by **3 foundation docs** (F1:39, F4:42, structural-legitimacy:50) + audit-v2 §6.4 item 6 + Opus-4-7 §3.3 item 7 six exemplars (federation-node captured / evidence fraudulent / commitment broken / nodes-disagree-provenance / canon-review-captured / metaphor rots).
- **7 canon-legible failure-shapes** already named in canon body (substitution-trap, decentralization-theater, digital-labor-as-free-gift, admin-capture, power-capture, filtering-membrane, linguistic-closure) + federation-protocol.md's 4-entry protocol-table + 3 layer-absence clauses. F6's job is to **categorize** existing failures + **taxonomize** new ones.
- Pattern-library carries zero failure-language. Foundation-layer failure-taxonomy is net-new.
- **F3 (actor-governance) NOT yet landed**; F6 per operator-inverted Tier B ordering must handle actor-capture via forward-ref, not full inheritance. Shape-parallel to F4→F5 actuator-logic forward-ref.
- **F1 overlap**: F1 names sensor-failure-shapes (wrong-target/decay/captured-maintainer/superseded) at §4.4-4.5 governance-layer. F6 must categorize at taxonomy-layer and defer governance-specifics to F1.
- **structural-legitimacy.md:50** explicitly defers "unified failure-mode taxonomy for coupling-breakdown" to future work — F6 is the explicit target of that deferral (sibling-doctrine precedent for ADR-0042 shape).

## 2. Child-proposed failure-mode taxonomy (8 categories)

Operator-seeded **7 categories** + audit-proposed **meta-pattern / composition failures** (8th category).

### Earning-test per category (α: operationally-specifiable? β: N-independent-traditions cluster-count?)

| # | Category | α (scope-specifiable) | β (cluster-count) | In-canon anchors |
|---|----------|-----------------------|-------------------|------------------|
| F6.1 | **Representation failures** | PASS (text/graph/sensor/attestation/agent-summary misalignment) | PASS: ADR-0041+F4 (Spore) / Ostrom (institutional) / philosophy-of-science (underdetermination) = 3 clusters | F4 forward-ref, linguistic-closure (semantic drift) |
| F6.2 | **Protocol failures** | PASS (schema-mismatch / event-rejected / peer-unreachable / key-compromise / protocol-capture) | PASS: distributed-systems (CAP/FLP) / federation-protocol-table / Kostakis peer-gov = 3 clusters | federation-protocol.md:166-173 table |
| F6.3 | **Sensor / attestation / evidence-integrity failures** | PASS (wrong-target / decay / captured-maintainer / fraudulent-attestation / oracle-capture) | PASS: F1 §4.4-4.5 / oracle-lit (Chainlink/Augur) / attestation-fraud literature = 3 clusters | F1 forward-ref; D-route-1 taxonomy-layer |
| F6.4 | **Scale-transition failures** | PASS (patterns-working-at-scale-N-break-at-scale-M; polycentric-layer-mismatch; VSM S4/S5 viability gap) | PASS: Ostrom polycentric / VSM / institutional-economics tragedy-of-scale = 3 clusters | project-vision.md:211 layer-absence; ADR-0046 rule-level-mismatch |
| F6.5 | **Membrane-boundary failures** | PASS (over-filter / under-filter / boundary-collapse / social-vs-resource mismatch / asymmetric-capture) | PASS: Ostrom Principle-1 / filtering-membrane frozen-vocab / double-boundary axis = 3 clusters | frozen-vocab `filtering-membrane`, ADR-0047 Layer 3 |
| F6.6 | **Commitment-break failures** | PASS (individual-breach / joint-commitment-breach / reproduction-continuity-break / asymmetric-abandonment) | PASS: Gilbert/Tuomela / contract-law / REA accounting = 3 clusters | ADR-0050 joint-commitment, ADR-0049 reproduction-break |
| F6.7 | **Actor-capture failures (F3 forward-ref)** | PASS (maintainer-capture / admin-class-accumulation / regulatory-capture / digital-labor-free-gift) | PASS: Federici / Kostakis / Stigler regulatory-capture = 3 clusters | ADR-0005 bundle, ADR-0047 Layer 3 |
| F6.8 | **Meta-pattern / composition failures (audit-proposed)** | PASS (substitution-trap / linguistic-closure / canon-review-capture / decentralization-bundle) | PASS: ADR-0048 substitution-trap / Johar linguistic-closure / ADR-0005 bundle / replication-crisis-as-self-sealing-categories = 4 clusters | ADR-0048, lexicon/linguistic-closure.md, ADR-0005 |

**All 8 categories pass honest-rigor ≥2-cluster threshold.**

**Parsimony check** (per `feedback_parsimony_elegance_dual_discipline.md`): does 8 categories fit elegantly? Counter-question: does 7 leave residue? Yes — Opus-4-7 §3.3 item 7's "canon-review captured" and "metaphor rots" exemplars do not categorize cleanly into the 7 operator-seeded categories without stretching their scope. F6.8 (meta-pattern / composition) gives them a canon-legible home. Audit-proposed addition is earned-by-residue, not elegance-driven.

### Structural scaffold

Per Axis C recommendation (inherit ADR-0046): each of 8 categories decomposes across Ostrom 3-level rule-stack (constitutional / collective-choice / operational). Parallel to F1 §4.1-4.7 per-concern structure.

---

## 3. 10-axis decision-brief (child-recommended defaults)

| Axis | Options | Child recommendation |
|------|---------|---------------------|
| **A scope** | A1 all 8 categories (7 seeded + meta-pattern) / A2 7 categories (seed-exact) / A3 narrower subset / A4 principled-rule abstraction without enumerated categories | **A1 admit all 8** — meta-pattern category earned by residue against Opus-4-7 §3.3 item 7 unanswered exemplars; honest-rigor cluster-counting passes |
| **B structure** | B1 unified principled-rule abstraction / B2 per-category subsection (F1-pattern) / B3 parameterized table | **B2 per-category subsection** — F1 precedent is exact shape-match (F1 has 7 concerns; F6 has 8 categories); enables per-category rule-level decomposition |
| **C rule-stack** | C1 inherit ADR-0046 Ostrom 3-level (permissive offer) / C2 decline inheritance | **C1 inherit** — each failure-category decomposes naturally across rule-levels; Tier-inheritable template from F1+F4 |
| **D slug admissions** | D1 none / D2 1–2 slugs / D3 3+ slugs / D4 all category-names as slugs | **D2 admit 2 slugs** — `failure-mode-class` (meta-level concept naming F6's taxonomy unit) + `coupling-breakdown` (bridges to structural-legitimacy sibling-doctrine). Category-names stay prose-only per ADR-0053 precedent (avoid slug inflation; category-names are composites of existing frozen-vocab). `substitution-trap` already v6-admitted; not re-admitted. |
| **E F3-forward-ref (actor-capture)** | E1 name-but-defer with F3-governance-forward-ref / E2 partial-elaboration with F3-expansion-note / E3 omit | **E1 name-but-defer** — F6.7 subsection names the category with body-text "actor-capture-specific governance doctrine is F3 actor-governance scope (forthcoming); F6 names the failure-shape taxonomically." Shape-parallel to F4's deferral of actuator-logic to F5. |
| **F registration** | F1 full 5-file atomic-bundle (ADR + foundation + canon-review-protocol + docs/README + yaml) / F2 4-file (if D1) | **F1 full 5-file** — D2 admits 2 slugs, so yaml v15→v16 bump is needed |
| **G contestation handling** | G1 protocol-based (F1 precedent: contestation-of-sensor-fitness) / G2 pattern-library-referred / G3 foundation-only (declare; don't resolve) | **G1 protocol-based** — F6 declares that failure-recognition + escalation follows rule-stack routing (inherited from ADR-0046 + F1); specific algorithms (how to recognize substitution-trap vs other-failure) belong to pattern / protocol layer. F6 commits to the shape of recognition, not the algorithm. |
| **H structural-legitimacy relationship** | H1 extend ADR-0042 with failure-counterpart / H2 sibling-doctrine independent of ADR-0042 | **H2 sibling-doctrine** — structural-legitimacy (ADR-0042) is positive doctrine; F6 is counterpart taxonomy. F6 cites structural-legitimacy as load-bearing substrate for F6.7 (coupling-breakdown anchor for actor-capture) without subsuming or extending ADR-0042. Avoids over-narrowing F6 to coupling-breakdown-only (F6.8 linguistic-closure, F6.4 scale-transition don't fit coupling-breakdown shape). |
| **I cross-repo** | I1 narrow Spore-only / I2 note IC/PM applicability | **I1 narrow** — Spore-only at F6 authoring time; IC + PM alignment ADRs land post-F6 per Wave-N cross-repo queue; DH-PM-1 held-tension counsels caution on pre-alpha PM additive work |
| **J scope-narrowness** | J1 narrow — defer cascade-miss / J2 include adjacent cleanup | **J1 narrow** — out-of-scope: governance-artifacts.md:134-143 intent-pressure residual (ADR-0059c-shape; operator-discretion follow-on); commons-law-and-charter-lineage.md L117 mycorrhizal-federation-protocol ref; Phase 5 section-level status labels |

---

## 4. Risks + open questions

**R1 — Category elegance vs completeness tension**: 8 categories is more than F1's 7 concerns. Does F6 suffer from over-classification? **Audit position**: F1's 7 concerns are intra-sensor-governance; F6's 8 categories span the full canon operational surface (sensor + protocol + representation + commitment + membrane + scale + actor + meta-pattern). Scope-span justifies category-count. Parsimony check: each category is load-bearing (passes cluster-count); none is decorative.

**R2 — Meta-pattern category (F6.8) is audit-proposed, not operator-seeded**: Operator may reject. If rejected, substitution-trap + linguistic-closure + canon-review-capture must be distributed across F6.1 / F6.7 / F6.3 with scope-stretching; Opus-4-7 §3.3 item 7 exemplars (e) + (f) become half-covered. **Fallback**: A2 7-category option (seed-exact) is clean but leaves residue.

**R3 — F3 forward-ref handling depth**: E1 names actor-capture but does not operationalize. If operator prefers lighter E3 (omit entirely), F6.7 collapses and actor-capture failures are F3-scope. Downside: F1:39 + F4:42 + structural-legitimacy:50 forward-refs explicitly cite "maintainer capture" and "regulatory capture" — omitting F6.7 leaves those forward-refs under-discharged. **Audit recommendation retained**: E1.

**R4 — Depth of per-category doctrine**: F6 risks becoming a catalog rather than a doctrine if each category is just a name + 3 rule-levels. **Mitigation**: each category includes (1) principle statement, (2) rule-level decomposition, (3) in-canon anchors, (4) 2–3 exemplar failure-shapes. Shape-parallel to F1 §4.1-4.7.

**R5 — Phase 5 tag-agnostic discipline**: F6 authored without section-level status tags (per operator Q6 scoping ratification). Sections structured to be tag-ready but not pre-tagged. Standard F1+F4 inheritance.

**Open question 1**: Should F6 include **a "Meta-canon failures" sub-subsection** in F6.8 (canon-review captured, dispositions ignored, bridge-note-disposition silently collapsed per v2-audit §3.6)? **Audit recommendation**: YES at sub-subsection depth, not at category-depth. Meta-canon failure is an instance of meta-pattern failure, not a separate top-level category.

**Open question 2**: Federation-protocol.md:166-173 already has an internal "Failure Modes" table. Does F6 supersede or coexist? **Audit recommendation**: coexist. F6 is foundation-layer taxonomy; federation-protocol table is protocol-layer operational-response enumeration (peer-unreachable, event-rejected, schema-mismatch, key-compromise). F6 cites the table as exemplar of how protocol-layer operationalizes F6.2 protocol-failure category.

**Open question 3**: Should F6.6 commitment-break include all three commitment types (individual-Commitment per ADR-0002/0044; joint-commitment per ADR-0050; reproduction-continuity per ADR-0049) or call them out separately as 3 sub-failure-shapes? **Audit recommendation**: combined category with 3 sub-shapes per-paragraph. Avoids category-inflation while honoring canon's three-layer commitment structure.

---

## 5. Proposed 5-file atomic-bundle allowlist

Per F1 template (F1=5 files, F4=3 files because F4 D-axis declined slug admission):

1. **`docs/research/canon-decisions/0075-failure-modes-foundation-doc-promotion.md`** (NEW, ~160–180 lines)
   - Frontmatter matching F1/F4 shape. `doc_kind: decision-record`. Inherits F1 5-part coordinated-admission pattern.

2. **`docs/foundations/failure-modes.md`** (NEW, ~220–260 lines)
   - Frontmatter: `doc_id: spore.failure-modes` / `doc_kind: foundation` / `depends_on: [spore.project-vision, spore.governance-artifacts, spore.structural-legitimacy, spore.sensor-oracle-governance, spore.representation-authority]`
   - Body sections: §1 Core Claim (~15 lines) / §2 Scope + out-of-scope (~25 lines) / §3 Structural Doctrine — Rule-Level Stratification (~25 lines) / §4 Doctrine Per Category (F6.1–F6.8, ~140 lines; ~18 lines per category) / §5 Forward-References (F3 + F5; ~15 lines) / §6 Open Questions (~15 lines; Phase 5 tag-agnostic note) / §7 Related (~15 lines cross-ref listing)

3. **`docs/research/planning/canon-review-protocol.md`** §1 Spore canon-in-scope list — insert `- docs/foundations/failure-modes.md` alphabetically

4. **`docs/README.md`** Foundations listing — insert new line alphabetically

5. **`docs/research/concepts-p2p-wiki.yaml`** — v15 → v16 — header block update + 2 new slug entries (`failure-mode-class` + `coupling-breakdown`). Existing slugs (substitution-trap v6, filtering-membrane v2, decentralization-theater v2) unchanged.

**Commits**: 2 (draft atomic-bundle + active status-flip), matching F1+F4 shape. Session-atomic projection ~8–15 min (slower than F4's 8–10 min; F6 body prose is larger).

---

## 6. Projected execution time

- Step 3 author (foundation doc ~240 lines + ADR ~170 lines + 3 light edits): ~6–10 min
- Step 4 draft commit: ~1 min
- Step 5 status flip + active commit: ~1 min
- Step 6 push: ~1 min
- Step 7 verification + manifest: ~2 min
- Step 7.5 handback: ~1 min

**Total projection**: 11–16 min in-window. Under F1's 15-min window; slightly above F4's 10-min given larger body.

---

## 7. Method-precedent contributions (queued for §Consequences)

1. **First Tier B admission** per operator-inverted F6→F5→F3 ordering — establishes precedent that Tier B admissions can be ordered by cognitive-load (invention-heavy before synthesis-heavy) rather than strict dependency-topological order, when forward-ref discipline is load-bearing.

2. **Audit-proposed 8th category (meta-pattern failures) earned by residue**: honest-rigor cluster-counting + Opus-4-7 §3.3 item 7 exemplar-analysis produced new category that operator-seed did not contain. Validates `feedback_audit_then_propose.md` discipline at non-trivial scope (child surfaces structural addition; operator ratifies).

3. **Two-direction forward-ref (F1 AND F3)**: F6 is positioned between F1 (already-landed substrate) and F3 (not-yet-landed forward-ref). Establishes pattern for mid-tier admissions that inherit AND forward-ref — distinct from F1/F4 which only forward-ref.

4. **Sibling-doctrine shape to structural-legitimacy (H2)**: F6 is taxonomy-counterpart to ADR-0042's positive-doctrine; cites as substrate without extending. New canon-method shape distinct from G1-extend or foundation-promote patterns.

---

## 8. Sandbox-plan-file contingency note

Per spore:ADR-0072 precedent: if `~/.claude/plans/` is write-denied, all planning content consolidates into `tmp/` artifacts (this decision-brief + audit manifest). To be documented in ADR §Implementation Notes if triggered.
