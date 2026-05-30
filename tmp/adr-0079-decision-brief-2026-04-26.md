# ADR-0079 Decision Brief — F9 Maintenance-Economics Foundation-Doc Admission

**Date**: 2026-04-26
**Phase**: Phase 4 Tier C second admission (after F7 ADR-0078 promote-and-extend)
**Inheritance**: F1/F4/F5/F6/F3 Tier-A/B template; F3 ADR-0077 closest analog (synthesis-heavy + B5 SELECTIVE + multi-forward-ref discharge)
**Pre-pinned axes by operator**: scope=BROADER (federation-protocol.md:28 framing); compensation-protocols stay PATTERN-layer; B5 SELECTIVE expected; H multi-way; E full discharge of F1 §4.3 + F3 §4.6; status:draft initial; push at Step 6

## Step 0 — Baseline verified

- Spore HEAD: `9861cab` ✓ (origin/main; ADR-0078 F7 just landed)
- IC HEAD: `cef35fe` ✓ (origin/main; intelligence-commons repo)
- PM HEAD: `349e3ac` ✓ (origin/main)
- koi-processor HEAD: `22463cf4` ✓ (origin/regen-prod)
- darren-workflow HEAD: `3cc190f` ✓ (origin/main)
- Validator: 9 errors / 30 warnings — baseline EXACT
- Concepts yaml: v18 (70 slugs)
- Foundation docs: 12 (post-F7)

## Step 0.5 — Substrate audit findings

### Substrate map (canon-state-now)

| Source | Content | Sub-area mapping |
|---|---|---|
| `federation-protocol.md:28` | 5-citation cluster (Federici/Mies/Bresnihan/Bhattacharya/Gibson-Graham); names "care / provisioning / maintenance / translation labour" as first-order coordination content | **Anchor cluster** — already-canon at primary tradition citation level |
| `sensor-oracle-governance.md` §4.3 (L88-100) | Rule-stratified maintainer-assignment; cross-modality; structural-legitimacy coupling load-bearing | Maintainer-economics substrate |
| `actor-governance.md` §4.6 sub-shape 4 (L147) | Digital-labor-as-free-gift governance-response; "Specific compensation-protocols are pattern-layer" | Labor-recognition substrate; pattern-vs-foundation boundary |
| ADR-0042 structural-legitimacy | Coupling-to-consequence; forkability §42 | Substrate-parent (coupling-to-consequence applies to maintainer-economics) |
| ADR-0002 reproductive-commoning | Reproduction-as-cross-cutting-doctrine | Substrate-parent (sibling doctrine to F9) |
| ADR-0049 reproduction-continuity | Primitive verb (8th); cross-episode reproduction | Substrate-parent (primitive layer for F9 doctrine layer) |
| ADR-0048 substitution-trap | Allocational ≠ generative | Substitution-trap-economics substrate |
| ADR-0034 interop-principles-mechanisms-split | "translation mappings" as mechanism | Translation-labor substrate |
| `project-vision.md:283` | "Explicit translation mappings between local ontologies" | Translation-labor canonical anchor |

### Per-category B5 SELECTIVE depth (substrate-driven)

| Category | Substrate maturity | Recommended depth |
|---|---|---|
| §4.1 Reproductive-labor visibility | HIGH (federation-protocol:28 5-cluster + ADR-0002 + ADR-0049) | **HEAVY** (re-engage; central doctrine) |
| §4.2 Maintainer-economics | HIGH (F1 §4.3 + ADR-0042) | **SELECTIVE** (cite F1 §4.3 wholesale; layer economic-substrate) |
| §4.3 Compensation-protocol pattern-layer boundary | F3 §4.6 explicit | **HEAVY** (foundation-doctrine declares the boundary; load-bearing) |
| §4.4 Translation-labor | THIN (federation-protocol:28 + project-vision:283) | **SELECTIVE** (cite anchors; minimal new) |
| §4.5 Infrastructure-economics | THIN (no canonical anchor) | **SELECTIVE** (light prose; honest-rigor-acknowledge thinness) |
| §4.6 Substitution-trap-economics | HIGH (ADR-0048 mode) | **SELECTIVE** (cite ADR-0048; layer economic-application) |
| §4.7 Labor-class standing-to-contest | HIGH (F3 §4.6 sub-shape 4) | **SELECTIVE** (cite F3 §4.6; layer F9-side complement) |
| §4.8 Cross-federation portability | THIN (F3 §6 forward-ref) | **SELECTIVE** (acknowledge F3 §6 deferral; portability via instance-composition) |

**Distribution**: 2 HEAVY + 6 SELECTIVE — comparable to F3 ADR-0077's 3+5 mix; B5 SELECTIVE is the substrate-honest call.

### Cluster-counting honest-rigor verdict

- §4.1 reproductive-labor visibility: 5-citation cluster (Federici/Mies/Bresnihan/Bhattacharya/Gibson-Graham) **already canon-anchored** at federation-protocol.md:28 — exceeds ≥2-cluster threshold
- §4.2 maintainer-economics: ADR-0042 + F1 §4.3 substrate clears threshold
- §4.6 substitution-trap-economics: ADR-0048 mode + Polanyi (commodification) substrate
- §4.4 translation-labor: ADR-0034 + project-vision:283 + Tsing/Star-Bowker boundary-objects literature
- All categories meet ≥2-cluster threshold; no decline-with-triggers warranted

### H-axis multi-way recommendation: **H3 4-way**

- **Vertical substrate-parents** (3): ADR-0042 (structural-legitimacy coupling) + ADR-0002 (reproductive-commoning) + ADR-0049 (reproduction-continuity primitive)
- **Horizontal operational-pair-siblings** (2): F1 (maintainer-economics intersection) + F3 (labor-recognition intersection)
- **F7 NOT included** — F9 has no economic-implication on F7's existence-threshold; F7 ADR-0078 §H3-flat substrate-parents are F6+F3 only; cross-coupling absent

This matches F3 ADR-0077 §231 prediction exactly.

### D-axis recommendation: **D2 2-slug**

- `reproductive-infrastructure` — canonical anchor for the 5-cluster tradition; the substrate of care/provisioning/maintenance/translation that reproduces associational practice; net-new vocabulary
- `compensation-pattern-layer` — canon-legible boundary-handle naming the foundation-vs-pattern split per F3 §4.6 + F9 §4.3

Alternative D1 no-slug defensible (parsimony); operator pre-pinning left open. D2 honest-rigor when substrate-richness warrants vocabulary anchoring.

**Concepts yaml**: v18 → v19 if D2 admitted.

### DH-PM-1 hard-pause check: **NOT FIRED**

F9 doctrine-layer commits to canon-legibility-of-reproductive-labor + foundation-vs-pattern boundary for compensation-protocols. F9 does NOT prescribe pricing/compensation operationally. PM accounting-dependence held-tension operates at OPERATIONAL-INSTANCE pricing layer, not at FOUNDATION-DOCTRINE labor-recognition layer. Recorded in §Context.

## Step 1 — 10-axis disposition

| Axis | Disposition | Rationale |
|------|-------------|-----------|
| **A scope** | A1 full-doctrine all-NEW foundation doc | Tier-A/B template; F7 was promote-and-extend (existing doc); F9 authors fresh `docs/foundations/maintenance-economics.md` |
| **B structure** | B5 SELECTIVE per-category synthesis-depth (2 HEAVY + 6 SELECTIVE) | Substrate-driven; F3 precedent. Distribution: §4.1 + §4.3 HEAVY (re-engagement); rest SELECTIVE (cite-and-layer). Validates B-axis progression as substrate-driven (B1→B1→B2→B1→B5→B1→**B5**) |
| **C rule-stack** | C1 inherit ADR-0046 Ostrom 3-level | 6th Phase-4 application + 2nd Tier C application; convention. Maintenance-economics stratifies: operational = compensation-event; collective-choice = compensation-protocol-amend; constitutional = labor-class-standing-establish |
| **D slug admissions** | D2 2 slugs (`reproductive-infrastructure` + `compensation-pattern-layer`); yaml v18→v19 | Honest-rigor: 5-cluster tradition warrants `reproductive-infrastructure` anchor; F3 §4.6 pattern-layer boundary warrants `compensation-pattern-layer` boundary-handle. Foundation-doc piggyback per ADR-0073 method-precedent 4 |
| **E forward-ref discharge** | E1 full discharge of F1 §4.3 + F3 §4.6 sub-shape 4 | Both forward-refs cited explicitly; F1 maintainer-economics + F3 digital-labor-recognition both close at F9 §4.2 + §4.7 respectively. Per ADR-0077 §233 anticipation |
| **F registration** | F1 5-file atomic-bundle | ADR + new foundation-doc + canon-review-protocol §1 + docs/README.md + concepts yaml v18→v19 |
| **G contestation/appeal mechanism** | G2 cite-don't-redefine | Cite F4 §5.3 appeal-protocol wholesale at §4.7 (labor-class contest) + §4.3 (pattern-layer-boundary disputes); cite F1 §4.3 wholesale at §4.2 (maintainer-economics); cite F3 §4.6 wholesale at §4.7 (labor-recognition); cite ADR-0042 + ADR-0002 + ADR-0049 by reference (substrate-parents) |
| **H structural-legitimacy relationship** | H3 4-way (substrate-parents ADR-0042 + ADR-0002 + ADR-0049; operational-pair-siblings F1 + F3) | Per F3 ADR-0077 §231 prediction. Extends ADR-0077 H3 3-way to 4-way (3 substrate-parents instead of 1) |
| **I cross-repo** | I1 narrow Spore-only | Matches all 6 prior Phase 4 admissions; DH-PM-1 still held; IC + PM cross-repo alignment ADRs land post-F9 in Wave-N queue if downstream pressure surfaces |
| **J scope-narrowness** | J1 narrow | Out-of-scope: ADR-0059c-shape governance-artifacts:134-143 cascade-miss residue (compounds across F1-F9; operator-discretion follow-on); F8 external-validation-loop + F2 translation-mapping-governance (Tier C remaining); Phase 5 section-level status labels; specific compensation-protocols (pattern-layer per F3 §4.6 + F9 §4.3); cross-repo IC + PM alignment ADRs (Wave-N) |

## Step 2 — Operator gate

**Material delta from pre-pinning**: NONE. D-axis was pre-pinned-as-open; my Step 0.5 surfaces D2 as honest-rigor recommendation. H-axis pre-pinned 4-way+ predicted; my audit lands exact 4-way. All other axes match.

**Self-ratify per orchestrator handback discipline** (operator pre-pinned axes; no material delta requires escalation). Proceeding to Step 3.

## Step 3 — Allowlist (5-file atomic-bundle)

1. `docs/research/canon-decisions/0079-maintenance-economics-foundation-doc-admission.md` (NEW)
2. `docs/foundations/maintenance-economics.md` (NEW)
3. `docs/research/planning/canon-review-protocol.md` §1 (insert `docs/foundations/maintenance-economics.md` alphabetically into Spore canon-in-scope list)
4. `docs/README.md` (insert `maintenance-economics.md` alphabetically into Foundations listing)
5. `docs/research/concepts-p2p-wiki.yaml` (v18 → v19; add 2 slug entries)

## Step 4 — Mid-execution audit checklist

- [ ] Allowlist verified; no out-of-scope edits
- [ ] Constraint-10: CLAUDE.md (parent-session-tracked) NOT touched
- [ ] Validator: 9/30 baseline held exact post-draft
- [ ] IC HEAD `cef35fe` unchanged
- [ ] PM HEAD `349e3ac` unchanged
- [ ] koi-processor HEAD `22463cf4` unchanged
- [ ] darren-workflow HEAD `3cc190f` unchanged

## Step 5 — Activation commit

Flip ADR `status: draft → active`. Foundation doc activated in draft commit per F5/F7 ceremony-anomaly-avoidance discipline.

## Step 6 — Push

`git push origin main`. Explicit directive.

## Step 7 — Close-out

Write `tmp/adr-0079-close-out-manifest.txt` with ACs + commit SHAs + session-atomic span + canon state delta + sibling-repo zero-change + 3 named method-precedents.

## Predicted method-precedents (3 to name in §Consequences)

1. **First Tier C all-NEW foundation-doc admission** (after F7 promote-and-extend) — distinct shape from F7's promote-and-extend; validates Tier C admit-shape-flexibility (extension OR all-NEW per substrate-state). Reusable for F8 (likely all-NEW) and any future Tier admissions where substrate-doc absent.

2. **H3 4-way relational shape** — extends ADR-0077 H3 3-way (1 substrate-parent + 2 operational-pair-siblings) to H3 4-way (3 substrate-parents + 2 operational-pair-siblings). Foundation docs can carry MULTIPLE vertical substrate-couplings simultaneously when doctrine inherits from substrate-cluster (ADR-0042 + ADR-0002 + ADR-0049 jointly ground F9 doctrine). Reusable for connective-tissue foundation docs grounded in tradition-cluster substrate.

3. **Foundation-doctrine-vs-pattern-layer boundary as load-bearing canon-discipline** — F9 §4.3 establishes that compensation-protocols are pattern-layer (per F3 §4.6 deferral) AND that the foundation-doctrine commits to canon-legibility of the boundary itself. Pattern: when prior canon defers a sub-area to pattern-layer, a subsequent foundation doc can carry the boundary as foundation-doctrine even though it doesn't prescribe the deferred mechanisms. The boundary itself is canon-legible. Reusable for any future foundation doc whose substrate includes prior pattern-layer deferrals (e.g., F8 may inherit similar shape with validation-protocol pattern-layer deferrals).

## Acceptance criteria target

≥15 ACs (per orchestrator target); detailed AC list maintained in close-out manifest.
