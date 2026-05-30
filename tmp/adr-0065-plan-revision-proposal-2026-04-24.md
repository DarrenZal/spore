# ADR-0065 Plan Revision Proposal

**Generated**: 2026-04-24 (child agent, post-audit delta-analysis)
**Source plan**: `~/.claude/plans/adr-0065-pattern-library-infrastructure.md`
**Source audit**: `tmp/adr-0065-audit-manifest-2026-04-24.md`
**Source decision-brief**: `tmp/canon-adr-0065-pattern-library-infrastructure-decision-brief-2026-04-24.md`
**Purpose**: operator-gate artifact proposing revisions to the 10-axis structure before Step 2 ratification.

This proposal is NOT the revised decision-brief; it is the operator-facing delta-analysis. The decision-brief is revised only after operator ratifies these revisions.

---

## §1 Axis deltas

Per-axis classification (KEEP / SPLIT / MERGE / SCOPE-EXPAND / RETIRE). Rationale cites specific audit finding.

### Axis A (earning-test shape) — **SPLIT** → A-test-shape + A-sub-class

**Rationale**: Audit found three downstream candidates (federation-encounter / four-enabling-conditions / view-template) have three structurally-distinct shapes (composition-over-primitives / design-criteria-cluster / catalog-of-sub-entities). A single unified earning-test either over-abstracts (loses discriminative power) or over-narrows (excludes legitimate candidates). The heterogeneity-finding makes the axis hide two separable decisions:

- **A-test-shape**: what the earning-test consists of (composition / recurrence / hybrid / operator-gated / none)
- **A-sub-class**: whether patterns are a single class or admit sub-classes (unified / sub-class-typed / single-canonical-shape-only)

These are empirically independent. A sub-class-typed pattern-family can still run a unified test-shape (each sub-class tests differently within the shape). A unified-class can run sub-class-aware tests. The dependence is conditional, not structural.

**Recommend**: SPLIT.

### Axis B (category demarcation) — **KEEP** (but tighten coupling to A-sub-class)

**Rationale**: B1-B4 are genuinely distinct options on how strictly to articulate canon-object-category distinctions. Audit did not find additional categories. B4 (patterns-as-composition-class-with-sub-shapes) becomes conditional on post-SPLIT A-sub-class option; document this dependency explicitly but keep B as its own axis.

**Recommend**: KEEP.

### Axis C (frontmatter schema) — **KEEP**

**Rationale**: C1-C5 map cleanly onto a single spectrum (minimal → enriched). Audit confirmed frontmatter uniformity across all 6 patterns; no new fields surfaced as load-bearing. Keep as-is.

**Recommend**: KEEP.

### Axis D (placement convention) — **SCOPE-EXPAND**

**Rationale**: Audit found de-facto split (5 in `docs/patterns/` + 1 in `docs/governance/project-briefing-pattern.md`) that Phase 1 missed. Original D1-D5 options already capture the range, so no SPLIT is needed — but operator should be flagged that **Axis D now carries Axis-audit-outlier treatment implicitly** (D2 consolidate = fix the outlier; D1 keep = grandfather). Alternatively, the audit-outlier disposition (see §3) can be made a separate axis. Proposal: SCOPE-EXPAND Axis D by adding explicit cross-ref to §3 treatment.

**Recommend**: SCOPE-EXPAND (add audit-outlier cross-ref; do not split).

### Axis E (admission workflow) — **KEEP**

**Rationale**: E1-E5 span a legitimate range from dedicated-ADR-per-candidate to recurrence-auto-admit. Audit did not surface new workflow shapes. Tight coupling with F + I exists (flagged in interaction matrix), but merging would lose discriminative power. Each axis carries its own decision even when correlated.

**Recommend**: KEEP.

### Axis F (review cadence) — **KEEP**

**Rationale**: F1-F4 span none → event-triggered. Axis is small but discrete. Merge candidate with E/I (see below) rejected because F answers "when does review happen" — orthogonal to E "how does admission work" and I "is review in canon-review-protocol scope."

**Recommend**: KEEP.

### Axis G (cross-reference convention) — **KEEP**

**Rationale**: Audit found asymmetric cross-ref graph (inbound typed, outbound prose-only), but this surfaces as evidence supporting existing G1-G4 options, not as a new axis need. G2 naturally closes the asymmetry if Axis C adds a `concepts: []` field.

**Recommend**: KEEP.

### Axis H (yaml registration) — **KEEP** (but update option counts)

**Rationale**: Audit found 4 unregistered slugs (Phase 1 said 3; audit correction adds `project-briefing-pattern`) and cross-project-slug overlap on `commitment-pooling` (yaml has `primary_project: pm`; Spore pattern has `doc_id: spore.commitment-pooling`). H4 option updated from "backfill-3" to "backfill-4." H5 (`category: pattern` field) still viable.

**Recommend**: KEEP (update H4 numerics).

### Axis I (canon-review-protocol scope) — **SCOPE-EXPAND**

**Rationale**: Audit found three-framing tension is actually 4-framing (doc_kind + canon-object-class + canon-review-exclusion + **product-"pattern language" vocabulary** at project-vision.md:10/:299). Options I1-I5 address 3-framing tension adequately but do not speak to 4th framing (product-vocabulary sense). I4 scope-conditioning covers 3-framing cleanly but would need explicit 4th-framing mention. Alternative: add I6 for 4-framing-explicit handling.

**Recommend**: SCOPE-EXPAND — keep I1-I5 but explicitly acknowledge 4-framing in all options; consider adding I6 "acknowledge product-pattern-language framing as separate scope (Agent Commons as published artifact; individual patterns as internal canon-objects)." Uncertainty: whether operator wants I distinctions among product-vocabulary and canon-internal-vocabulary to be normative or just descriptive.

### Axis J (backfill of existing patterns) — **KEEP** (denominator update: 6 not 5)

**Rationale**: Options J1-J5 span none → deep + include J5 (body-shape fix for project-briefing-pattern). Denominator update: "existing 5" → "existing 6." Audit-outlier implications (§3) may move J5 out of Axis J into a separate outlier-disposition option; see §3 recommendation. If J5 stays in Axis J, the backfill-scope calculation needs denominator update.

**Recommend**: KEEP (with denominator + J5 cross-ref clarification).

### Proposed new axis: **Axis K — Audit-outlier treatment (project-briefing-pattern)**

**Rationale**: Audit found project-briefing-pattern is an outlier on 3 dimensions simultaneously: (1) placement (`docs/governance/` not `docs/patterns/`); (2) body-shape (Problem → Forces → Solution vs Context → Problem → Forces → Pattern); (3) inbound-citation (0 depends_on; isolated). Distinct-enough-from-other-patterns that treating it as "same-as-other-5" on Axes D/J loses information. Making it an explicit axis forces operator decision rather than hiding the decision across D + J.

**Options per §3 below**: grandfather-in-place / migrate-to-patterns / decline-pattern-status / defer-to-follow-on-ADR.

**Recommend**: ADD as new axis K (alternatively, keep inside Axes D+J as cross-references; see revised-bundle §4 which tries both framings).

### Merge candidates considered but NOT recommended

**E + F + I merge into "governance-of-pattern-admission" (mega-axis)**. Considered because interaction matrix shows tight coupling. Rejected because: (a) each axis answers a structurally different question ("how" / "when" / "in-which-protocol-scope"); (b) merging into one mega-axis would give operator 4-5 giant compound options instead of granular per-axis choices — lower discriminative power; (c) the ADR-0062/0063/0064 precedent of scope-conditioning at primitive-bullet level suggests keeping distinct axes distinct is the canon-method norm.

**J merge into C (schema + retrofit = one decision)**. Considered because J depends entirely on C choice. Rejected because: (a) operator may want C-tiered (optional) with J-none (zero retrofit) — a legitimate bundled stance that merged-axis would obscure; (b) J5 (body-shape fix) is orthogonal to C schema field count.

### New axis count

Original: **10 axes (A-J)**
Revised proposal: **11 axes (A-test-shape / A-sub-class / B / C / D / E / F / G / H / I / J) + new Axis K (audit-outlier)**
Total: **12 axes** if K is added as its own axis
Alternatively: **11 axes** if K stays inside D+J cross-references

**Recommend: 11 axes** — split Axis A (A-test-shape + A-sub-class); keep K's decision embedded in D + J cross-references rather than as its own axis, because K is a one-off (single-outlier) not a class decision.

---

## §2 Multi-sub-shape vs unified earning-test

**Most structurally significant finding** from audit. Three downstream candidates surface 3 shapes:

| Candidate | Shape | Tradition-breadth | Trigger state |
|-----------|-------|-------------------|---------------|
| federation-encounter | Composition-over-primitives (5 primitives) | 2 full clusters + Johar | E-5 fired; E-1 partial |
| four-enabling-conditions | Design-criteria-cluster (4 conditions) | 1 primary (Johar) | Parked pending design-pass |
| view-template | Catalog-of-sub-entities (5 views) | Mixed ADR-0036 lineage | Parked; 5 pre-demoted ready |

### Option M1 — Single unified earning-test

Articulate test at abstraction layer where all three shapes reduce to one. E.g.: "(α) articulable-as-compositional-or-constitutive-structure-over-existing-canon-objects AND (β) evidence of recurrence OR design-criteria-cluster OR catalog-integrity across instance-families-OR-tradition-lineages."

**(a) Implications for A-test-shape / A-sub-class / B / E**:
- A-test-shape: hybrid-universal (one test)
- A-sub-class: unified (no sub-classes)
- B: B2 minimal pointer sufficient (no decision-tree sub-branches)
- E: E1 dedicated-ADR per candidate (test applied uniformly via ADR reasoning)

**(b) Clean admissions vs forced compromise**:
- federation-encounter: CLEAN — passes α (compositional-structure) + β (recurrence across 4-5 families)
- four-enabling-conditions: FORCED COMPROMISE — passes α (constitutive-structure with design-criteria as constitutive elements) + β (design-criteria-cluster-completeness as family-equivalent) — but the β-disjunction feels like over-stretching to accommodate
- view-template: FORCED COMPROMISE — passes α (constitutive-structure) + β (catalog-integrity-as-recurrence-analog) — but abstraction obscures that a catalog is structurally different from a recurrence

**(c) Recommendation**: M1 produces coherent rule but loses discriminative power. The abstraction-layer-that-covers-all-three reduces to "articulable and evidenced," which is weak as gate. **Low-medium confidence** for M1.

### Option M2 — Three sub-shape-specific earning-tests

Each candidate-shape gets own admission criteria + own sub-category:

- **Composition-pattern test**: (α) composition-over-primitives+doctrines+modes+properties AND (β) ≥3 independent instance-families
- **Design-criteria-pattern test**: (α) named design-criteria-cluster with ≥N articulated criteria (Johar's 4) AND (β) ≥1 full-cluster primary-tradition + instance-family evidence demonstrating criteria-operationality
- **Catalog-pattern test**: (α) ≥N legitimate sub-entities each independently-motivated AND (β) host-structure-earning-test (why-this-catalog-together)

**(a) Implications for A-test-shape / A-sub-class / B / E**:
- A-test-shape: sub-class-typed (three tests; each applied per sub-class)
- A-sub-class: sub-class-typed (three sub-classes: composition / design-criteria / catalog)
- B: B4 patterns-as-composition-class-with-sub-shapes — mandatory
- E: E3 hybrid (trigger-fast-track + ADR-for-novel) natural fit; per-sub-class triggers

**(b) Clean admissions vs forced compromise**:
- federation-encounter: CLEAN as composition-pattern
- four-enabling-conditions: CLEAN as design-criteria-pattern
- view-template: CLEAN as catalog-pattern

All three admit cleanly. Honest-rigor cluster-counting discipline (ADR-0064) applies per-sub-class: four-enabling-conditions' single-tradition-primary-inspiration (Johar) is honest for design-criteria-pattern category if we accept that design-criteria-patterns may have narrower tradition-breadth than composition-patterns.

**(c) Recommendation**: M2 is the honest-rigor outcome — each shape is genuinely structurally different; pretending otherwise under M1 forces compromise. But M2 adds canon-object-class complexity (3 sub-classes) and requires more ADR-0065 specification work. **Medium-high confidence** for M2 if operator accepts the complexity tradeoff.

### Option M3 — Admit one canonical shape; route others elsewhere

Composition-over-primitives is the "canonical" pattern form. Route:
- four-enabling-conditions → new canon-object-class "**design-criteria-set**" (5th category alongside primitives/doctrines/modes/properties); OR route to **doctrine-layer** as practice-disposition per ADR-0045 care-commoning precedent
- view-template → **infrastructure-level** (not canon-object-class; tooling / query-template)

**(a) Implications for A-test-shape / A-sub-class / B / E**:
- A-test-shape: single composition-AND-recurrence test (A1)
- A-sub-class: single (patterns = composition-patterns only)
- B: B1 formal decision-tree with NEW 5th category (design-criteria-set) OR doctrine-extension
- E: E1 dedicated-ADR (admission routes to different category for non-composition candidates)

**(b) Clean admissions vs forced compromise**:
- federation-encounter: CLEAN as pattern (composition)
- four-enabling-conditions: REQUIRES new 5th canon-object-class OR doctrine-extension — structural canon change beyond ADR-0065 scope
- view-template: REQUIRES infrastructure-level tooling spec — different infrastructure ADR

**(c) Recommendation**: M3 preserves parsimony within pattern-class but expands canon-object-class inventory (from 4 to 5) or over-extends doctrine-layer. The "route others elsewhere" move is structurally expensive — it means ADR-0065 is NOT the admission-infrastructure for all three blocked candidates; at least 2 other ADRs (or 1 doctrine-extension + 1 infrastructure-ADR) become necessary. **Low confidence** for M3 unless operator wants pattern-layer parsimony at cost of canon-object-class inflation.

### Option M4 — Synthesis (child's proposal)

Hybrid: **M2 sub-classes for admission + M1 unified-test-abstraction for schema/workflow**.

- Three sub-class-specific admission tests (M2): each downstream candidate admits via its own sub-class test. Transparent about shape-heterogeneity.
- Unified Axis C schema (one frontmatter schema covering all sub-classes, with optional sub-class-specific fields tiered per C3). Avoids schema-explosion.
- Unified Axis E workflow (E1 dedicated-ADR per candidate; applies M2 sub-class-appropriate test in Step 0.5 of each admission ADR). Avoids workflow-explosion.

Effect: M2's honest-rigor on admission + M1's operational-simplicity on schema/workflow. Captures the finding that sub-shapes are structurally different (so admit honestly) while acknowledging they're all still "pattern-family" for operational purposes (one schema, one workflow).

**(a) Implications for A-test-shape / A-sub-class / B / E**:
- A-test-shape: sub-class-typed (3 tests)
- A-sub-class: 3 sub-classes (composition / design-criteria / catalog)
- B: B4 mandatory
- E: E1 (unified workflow; sub-class test applied within ADR)

**(b) Clean admissions vs forced compromise**:
- federation-encounter: CLEAN as composition-pattern (M2 sub-class)
- four-enabling-conditions: CLEAN as design-criteria-pattern (M2 sub-class)
- view-template: CLEAN as catalog-pattern (M2 sub-class)
- All three admitted under single ADR-0065 infrastructure-spec

**(c) Recommendation (child)**: **M4 medium-high confidence**. Preserves honest-rigor from M2 while keeping operational infrastructure simple. The three sub-classes are canon-legible as variations-of-pattern-family rather than separate canon-object-classes (preserves 4-category inventory) or forced-into-one-shape (M1's loss of discriminative power).

**Honest uncertainty**: M4 is a synthesis the child is proposing; operator may prefer M2's cleaner separation (3 formal sub-classes with their own schemas) or M1's simplicity (one test, accept compromise). The audit supports M4 directly but does not compel it.

---

## §3 Audit-outlier (project-briefing-pattern.md) treatment

Three audit findings converge on project-briefing-pattern as outlier:
1. **Placement**: `docs/governance/` not `docs/patterns/` (de-facto split across 2 directories).
2. **Body shape**: Problem → Forces → **Solution** → Structure → Resolution → Degradation → Interface vs standard Context → Problem → Forces → Pattern.
3. **Citation state**: 0 inbound `depends_on` edges; isolated.

### Option K1 — Grandfather in place

- Stays in `docs/governance/`.
- Acknowledge audit-outlier in ADR-0065 §Consequences.
- No migration, no body-shape normalization.
- `doc_kind: pattern` preserved.

**Rationale**: respects ADR-0062/0063/0064 "extend without re-opening" precedent; zero-risk path. Body-shape variance arguably suggests "infrastructure-pattern" sub-class under M2/M4 — would rename from outlier to exemplar-of-new-sub-class.

**Cost**: de-facto split persists; future reconnaissance will need to search both directories. Body-shape heterogeneity becomes precedent for future admissions (acceptable under M4 sub-class model; ambiguous under M1/M3).

### Option K2 — Migrate to `docs/patterns/`

- `git mv docs/governance/project-briefing-pattern.md docs/patterns/project-briefing-pattern.md`
- Align body shape (Context → Problem → Forces → Pattern → Adopters → Related Patterns)
- `doc_id` unchanged (stable identifier)
- Axis J3-equivalent backfill (body-content edits)

**Rationale**: normalize placement convention; establish single-directory truth. Zero inbound `depends_on` = zero cascade risk (no external files reference via path).

**Cost**: body-content editing violates Axis J's AC10 "frontmatter-only backfill" discipline. Pushes ADR-0065 into deeper body-edit scope. Session-atomic window at risk.

### Option K3 — Decline pattern status

- Reclassify: `doc_kind: pattern` → `doc_kind: governance` OR `doc_kind: protocol`
- Move to appropriate directory per new doc_kind
- Frontmatter edit only

**Rationale**: project-briefing-pattern reads more like infrastructure/tooling documentation than coordination pattern. Zero inbound citations reinforces "not load-bearing as pattern." 6-patterns-becomes-5 (Phase 1 count turns out right after reclassification).

**Cost**: requires operator judgment that this doc is genuinely not a pattern. governance-memory-pattern at `docs/patterns/governance-memory.md:36` enumerates 9 doc_kinds including both `governance` and `pattern`; either would be valid. Decision is classificatory, not structural.

### Option K4 — Defer to follow-on ADR-0066

- ADR-0065 notes project-briefing-pattern as audit-outlier without disposition.
- ADR-0066 (or next-appropriate slot) handles outlier disposition as separate plan.

**Rationale**: preserves ADR-0065 scope tightness. Matches ADR-0055 parking pattern (federation-encounter parked for future separate plan). Allows outlier disposition to receive proper analysis (especially if it surfaces sub-class questions post-M4).

**Cost**: adds queue item; outlier persists in canon for longer.

### Child recommendation

**K1 grandfather in place** with explicit ADR-0065 §Consequences acknowledgment that project-briefing-pattern represents an "infrastructure-pattern" variance the sub-class framework (M4) can accommodate retroactively.

**Rationale for K1 over alternatives**:
- Under M4 sub-class model, body-shape variance is legible as sub-class-appropriate (infrastructure vs coordination patterns may reasonably have different body shapes).
- Zero-risk path; preserves existing state.
- Audit-finding becomes evidence supporting sub-class framework rather than cleanup cost.
- K2 violates J-discipline. K3 is classificatory judgment operator can make at decision-brief review. K4 adds queue churn for low-impact outlier.

**Honest uncertainty**: K3 (decline pattern status) is genuinely arguable if operator sees project-briefing-pattern as "this is tooling documentation, not a pattern in Alexander's sense." Audit data is suggestive (isolation + non-standard body-shape + infrastructure-y content) but not conclusive — it's 50-50 between "infrastructure-pattern-sub-class" and "mis-classified-as-pattern."

---

## §4 Revised bundle recommendation

### Revised axis set (11 axes)

**A-test-shape / A-sub-class / B / C / D / E / F / G / H / I / J** — K folded into D+J cross-references per §1 recommendation.

### Revised Bundle-Minimal

- **A-test-shape**: A4 (operator-gated-per-candidate)
- **A-sub-class**: unified (no sub-classes)
- **B**: B2 (minimal pointer)
- **C**: C1 (minimal unchanged)
- **D**: D1 (keep current split; grandfather outlier)
- **E**: E1 (dedicated-ADR per candidate)
- **F**: F1 (none)
- **G**: G1 (no enforcement)
- **H**: H3 (optional-lag-OK)
- **I**: I1 (keep patterns NOT-canon-for-canon-review)
- **J**: J1 (none)
- **K (embedded)**: grandfather in place (K1)

### Revised Bundle-Balanced (child recommendation)

- **A-test-shape**: **sub-class-typed hybrid** (composition-AND-recurrence for composition-patterns; design-criteria-cluster test for design-criteria-patterns; catalog-integrity test for catalog-patterns) — per M4
- **A-sub-class**: **3 sub-classes** (composition / design-criteria / catalog) — per M4
- **B**: **B4** (patterns-as-composition-class-with-sub-shapes) — mandatory under M4
- **C**: **C3** (tiered minimum-required + optional-extended)
- **D**: **D4** (keep placement + add `docs/patterns/README.md` catalog documenting sub-classes and audit-outlier)
- **E**: **E1** (dedicated-ADR per candidate; sub-class test applied in Step 0.5)
- **F**: **F1** (none)
- **G**: **G1** (no enforcement; patterns can optionally list `concepts: []` under C3)
- **H**: **H1** (required-for-admission-going-forward; v12 unchanged in ADR-0065)
- **I**: **I4** (scope-conditioning at canon-review-protocol lines 34+58; acknowledge 4-framing in I4 prose per §1 Axis-I SCOPE-EXPAND)
- **J**: **J1** (none; existing 6 grandfathered)
- **K (embedded)**: grandfather in place (K1)

### Revised Bundle-Enriched

- **A-test-shape**: sub-class-typed hybrid (M4)
- **A-sub-class**: 3 sub-classes (M4)
- **B**: B4 mandatory
- **C**: C5 (add single `concepts: []` field as REQUIRED)
- **D**: D2 (consolidate project-briefing-pattern into `docs/patterns/`)
- **E**: E3 (hybrid trigger-fast-track + ADR)
- **F**: F2 (paragraph in canon-review-protocol v3)
- **G**: G2 (patterns MUST list primitive-contributions in concepts)
- **H**: H1+H4 (required-going-forward + backfill-4-missing-slugs; v12→v13)
- **I**: I4 + acknowledge 4-framing explicitly (possibly also I6 product-vocabulary distinction)
- **J**: J2 (light frontmatter-only backfill: add `concepts: []` to 6 patterns)
- **K (embedded)**: K2 migrate-to-patterns (with light body normalization)

### Original Bundle-Balanced survival check

Original child-recommended bundle: **A5 + B1 + C3 + D4 + E1 + F1 + G1 + H1+H4 + I4 + J1**

Survival map against revised axis set:

| Original choice | Revised status | Rationale |
|-----------------|----------------|-----------|
| A5 (grandfather + A1 hybrid new) | **SUPERSEDED** — original A5 assumed single unified test (A1). Under M4, new admissions use sub-class-typed test, not unified A1. A5 grandfather principle survives as "existing 6 grandfathered"; the hybrid-new half is revised to M4 sub-class-typed. |
| B1 (formal decision-tree) | **SUPERSEDED by B4** (patterns-as-composition-class-with-sub-shapes). B4 is mandatory under M4; subsumes B1's decision-tree rigor at sub-class level. |
| C3 (tiered) | **SURVIVES** — tiered schema works across all sub-classes |
| D4 (keep + README) | **SURVIVES with expansion** — README now documents sub-classes AND audit-outlier |
| E1 (dedicated-ADR per candidate) | **SURVIVES** — sub-class test applied within ADR's Step 0.5 audit |
| F1 (none) | **SURVIVES** |
| G1 (no enforcement) | **SURVIVES** — C3 tiered optional field makes enforcement-free cross-ref emergence possible |
| H1+H4 (required-going-forward + backfill-4) | **PARTIALLY SUPERSEDED** — child's revised Bundle-Balanced recommends H1-only (no backfill) to preserve session-atomic. H4 stays viable but bumps scope. |
| I4 (scope-conditioning) | **SURVIVES with SCOPE-EXPAND** — must explicitly acknowledge 4-framing finding |
| J1 (none) | **SURVIVES** |

**Net**: 6 of 10 choices survive unchanged; 2 superseded by M4-sub-class consequences (A5 new-half → sub-class; B1 → B4); 1 partially superseded (H1+H4 → H1 in revised Balanced, H4 moves to Enriched); 1 survives with scope-expand (I4).

**Headline**: **original Bundle-Balanced is ~60% survived, 40% revised** — the revisions flow cleanly from the M4 multi-sub-shape adoption.

---

## §5 Plan-revision delta size

### Classification

**MEDIUM-LARGE** (borderline).

**Delta count**:
- 1 axis SPLIT (A → A-test-shape + A-sub-class)
- 2 axes SCOPE-EXPAND (D, I)
- 1 axis option-count update (H4 "backfill-3" → "backfill-4")
- 1 axis denominator update (J — "existing 5" → "existing 6")
- 0 axes MERGED
- 0 axes RETIRED
- Potentially 1 new axis (K) depending on whether operator wants outlier as own axis
- Structural restructuring: **Multi-sub-shape question (M4 recommended) changes A's shape fundamentally** — this alone pushes classification toward LARGE.

**Bundle shifts**: revised Bundle-Balanced shifts 4 of 10 original choices. 60% survives.

**Reason for MEDIUM-LARGE rather than pure LARGE**:
- Axis count changes modestly (10 → 11).
- Most axis deltas are SCOPE-EXPAND not wholesale restructure.
- The M4 multi-sub-shape proposal is the only structural change; it's contained to Axis A + B interaction.
- ADR-0065's spec-shape (frontmatter / placement / workflow) is largely unchanged under the revision.

**Reason it's not pure MEDIUM**:
- M4 sub-class framework is a genuine structural addition to canon (3 pattern sub-classes) — not just parameter tuning.
- Axis I SCOPE-EXPAND to 4-framing touches a live governance doc (canon-review-protocol.md).
- Six audit findings drive the revisions; only 2-3 delta classification would be pure MEDIUM.

### Operator-action recommendation

**Ratify revisions + run one quick `/review-plan` round before Step 2**.

**Rationale**:
- MEDIUM-LARGE classification sits on the boundary between MEDIUM-action (one quick review) and LARGE-action (full review cycle).
- The M4 multi-sub-shape proposal is structurally significant enough to warrant at least one adversarial review round — it establishes canon sub-class taxonomy that downstream admissions will inherit for the life of pattern-library infrastructure.
- But the delta flow cleanly from audit findings (not plan-author speculation); one round should be sufficient to validate the logic rather than re-derive it.
- Full review cycle (multi-round `/review-plan`) is arguably warranted but risks diminishing-returns given audit-grounded rigor already present.

**Honest uncertainty**: operator may reasonably choose full review cycle given M4's structural weight. The child's recommendation is based on audit-grounded evidence being already robust, not on time-efficiency grounds.

### Session-atomic window estimate

**Original**: 35 min.
**Revised estimate**: **40-45 min** (Bundle-Balanced); **50-60 min** (Bundle-Enriched).

**Rationale**:
- Bundle-Balanced adds: §Pattern-sub-classes section in ADR-0065 body (+5-10 min authoring); §Consequences outlier-acknowledgment (+2-3 min); Axis I 4-framing scope-conditioning prose (+3-5 min).
- Bundle-Enriched adds above + H4 yaml v12→v13 (4 slugs; +5 min) + J2 backfill on 6 files (frontmatter-only per AC10; +10-15 min) + D2 consolidation git-mv with body normalization (+5-10 min).
- Four-categories parallel edit to governance-artifacts.md (axis-independent; already in plan) remains ~5 min.

**Recommend**: **extend window to 45 min** (from 35) for Bundle-Balanced; **extend to 60 min** if operator ratifies Bundle-Enriched. The decision-gated plan structure already puts audit + decision-brief outside window, so in-window work is executional only; 45-60 min is conservative for the executional scope.

---

## Summary

| Dimension | Revised status |
|-----------|----------------|
| Axis count | 10 → 11 |
| Axes SPLIT | 1 (A) |
| Axes SCOPE-EXPAND | 2 (D, I) |
| Axes option-updated | 2 (H, J) |
| Axes new | 0 (K embedded, not added) |
| Axes KEPT | 6 |
| M-recommendation | M4 synthesis (sub-class tests + unified schema/workflow) |
| K-recommendation | K1 grandfather in place |
| Bundle-Balanced survival | ~60% (6 of 10 original choices) |
| Delta size | MEDIUM-LARGE |
| `/review-plan` intensity | 1 quick round recommended |
| Session-atomic estimate | 35 → 45 min (Balanced); 35 → 60 min (Enriched) |

**Ready-for-operator-gate**: YES.

**Next step on operator approval**: revise decision-brief to reflect 11-axis structure + M4 + K1; operator then ratifies per-axis at Step 2.

**Next step on operator decline-of-revisions**: proceed to Step 2 against original 10-axis decision-brief; M4 finding documented as explicit plan-feedback but not acted on.
