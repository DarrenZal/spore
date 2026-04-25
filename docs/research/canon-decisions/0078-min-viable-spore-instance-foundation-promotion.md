---
doc_id: spore.canon-decision.min-viable-spore-instance-foundation-promotion
doc_kind: decision-record
status: draft
adr_number: "0078"
opened-on: 2026-04-26
closed-on: 2026-04-26
decision: edit
r_claim_source:
  - spore.review.canon-first-principles-audit-v2-2026-04-22:6.4-item-7
r_claim_statement: |
  Audit-v2 §6.4 item 7 (F7 minimum-viable-spore-instance) ratified by Phase 4
  scoping (`tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md` Tier C) and
  Tier C readiness audit (`tmp/adr-tier-c-readiness-audit-2026-04-25.md` §2):
  canon already carries `docs/foundations/spore-instance-model.md` covering
  Canon/Node/Agent/Site decomposition with implicit minimum-viable language
  (L21 + L95) but the doc is currently `doc_kind: architecture` (hygiene gap),
  carries no principled minimum-viable threshold rule, no Spore-adjacent vs
  out-of-grammar test, no F6.4 scale-transition relationship, and no F3
  cross-federation portability discharge. Two forward-references converge on
  F7: F6 §4.4 scale-transition (failure-modes.md L109-121) names cross-scale
  failures categorically and implies a minimum-viable existence threshold
  below the scale-transition layer; F3 §"Open Questions" L199 explicitly
  defers cross-federation actor-portability to F7. Decision: promote-and-extend
  per Option B — flip `docs/foundations/spore-instance-model.md` frontmatter
  `doc_kind: architecture → foundation` (closing the hygiene gap) AND extend
  the doc with a new §"Minimum Viable Composition" subsection authoring the
  principled minimum-viable rule under B1 unified-across-four-aspects, the
  Spore vs Spore-adjacent vs out-of-grammar test (with Dobby as canon-legible
  boundary case), the F6.4 scale-transition relationship (existence-threshold
  vs failure-categorization boundary), and the F3 cross-federation portability
  discharge (portability grounded in instance-composition compatibility).
  Inherits ADR-0046 Ostrom 3-level rule-stack (5th Phase-4 application + 1st
  Tier C application — now convention). Cites `representation-authority.md`
  §5.3 + `actor-governance.md` §4.6 wholesale per cite-don't-redefine
  cross-foundation-doc discipline (G2 inherited from ADR-0076 + ADR-0077).
  No new derived glossary slugs (D1 default; substrate already canon-legible
  through existing aspect-vocabulary). Five-file atomic-bundle preserved
  (ADR + foundation-doc edit + 2 verify-only cross-ref + yaml-no-touch).
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-tier-c-readiness-audit-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0078-decision-brief-2026-04-26.md
  - docs/foundations/spore-instance-model.md
  - docs/foundations/failure-modes.md
  - docs/foundations/actor-governance.md
  - docs/foundations/structural-legitimacy.md
  - docs/foundations/representation-authority.md
  - docs/research/canon-decisions/0042-dag-delete-structural-legitimacy-promote.md
  - docs/research/canon-decisions/0046-field-rule-level-stratification.md
  - docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md
  - docs/research/canon-decisions/0074-representation-authority-foundation-doc-promotion.md
  - docs/research/canon-decisions/0075-failure-modes-foundation-doc-promotion.md
  - docs/research/canon-decisions/0076-actuator-logic-foundation-doc-promotion.md
  - docs/research/canon-decisions/0077-actor-governance-foundation-doc-promotion.md
authorized-by: "canon-rebuild-phase-4-tier-c operator directive 2026-04-26 (FIRST Tier C admission; Option B promote-and-extend pre-pinned at handoff; doc_kind hygiene fix bundled per audit §8 Pattern 3; 10-axis decision-brief defaults ratified A=Option-B/B1/C1/D1/E1/F1/G2/H3-flat/I1/J1; three method-precedents named explicitly in §Consequences per orchestrator directive)"
queue_reference: "Tier C readiness audit 2026-04-25 §2 (F7 WEAK-FIRED; substrate-readiness HIGH; doc_kind hygiene gap surfaced as bundling opportunity)"
affects_canon:
  - docs/foundations/spore-instance-model.md
  - docs/research/planning/canon-review-protocol.md
  - docs/README.md
related_adrs:
  - spore:ADR-0042-dag-delete-structural-legitimacy-promote
  - spore:ADR-0046-field-rule-level-stratification
  - spore:ADR-0066-project-briefing-pattern-audit-outlier-disposition
  - spore:ADR-0073-sensor-oracle-governance-foundation-doc-promotion
  - spore:ADR-0074-representation-authority-foundation-doc-promotion
  - spore:ADR-0075-failure-modes-foundation-doc-promotion
  - spore:ADR-0076-actuator-logic-foundation-doc-promotion
  - spore:ADR-0077-actor-governance-foundation-doc-promotion
concepts:
  - operational-rule
  - collective-choice-rule
  - constitutional-rule
  - rule-in-use
  - actor-standing
  - governance-response
  - coupling-breakdown
  - substitution-trap
---

# ADR-0078 — Minimum Viable Spore-Instance Foundation Doc Promotion

## Status

draft (authored 2026-04-26 under canon-rebuild Phase 4 Tier C first admission; promote-and-extend shape; status flips to `active` at the activation commit per F5/F3 ceremony-anomaly-avoidance discipline)

## Context

Phase 4 of the canon-rebuild arc was defined in the 2026-04-22 canon-first-principles-audit-v2 (`tmp/canon-first-principles-audit-v2-2026-04-22.md` §6.4) as "7–9 new foundation docs, priority-ordered." The 2026-04-25 Phase 4 scoping session ratified three-tier admission sequencing: Tier A (F1 + F4, landed 2026-04-25 as ADR-0073 and ADR-0074), Tier B (F6 + F5 + F3, landed 2026-04-25 as ADR-0075 / ADR-0076 / ADR-0077), and Tier C (F7 minimum-viable-spore-instance + F8 external-validation-loop + F2 translation-mapping-governance + F9 maintenance-economics). Tier C admissions per Option D3 TIERED ratification fire when operational-demand triggers fire.

### Why F7 fires now

The 2026-04-25 evening Tier C readiness audit (`tmp/adr-tier-c-readiness-audit-2026-04-25.md` §2) verdicts F7 as **substrate-readiness HIGH** and **trigger-state WEAK-FIRED** with three converging operational-demand signals:

1. **Substrate-doc already exists**: `docs/foundations/spore-instance-model.md` (115 lines, 8 sections) covers Canon/Node/Agent/Site decomposition with implicit minimum-viable language at L21 ("Not every Spore instance needs to materialize all four aspects") and L95 ("a canon-only instance is valid; a node-only instance is valid; a personal node without a site is valid"). The substrate articulates aspect-decomposition without articulating the principled minimum-viable threshold, the Spore-adjacent vs out-of-grammar test, or relationships to F6.4 scale-transition + F3 cross-federation portability.

2. **Doc_kind hygiene gap**: `spore-instance-model.md` is currently `doc_kind: architecture` while canon-review-protocol.md §1 + docs/README.md treat it as a foundation-layer doc. Per audit §8 Pattern 3 hygiene-bundling discipline: when promoting a misclassified doc, bundle the doc_kind flip with the substantive admission rather than separate hygiene PR.

3. **Two implicit forward-references**: F6 §4.4 (failure-modes.md L109-121) names cross-scale failures categorically and implies (without explicit forward-ref text) a minimum-viable existence-threshold below the scale-transition layer; F3 §"Open Questions" L199 (`actor-governance.md`) explicitly defers cross-federation actor-portability to F7 minimum-viable-spore-instance + ADR-0068 federation-encounter pattern composition work.

### Promote-and-extend disposition

Three options were considered at handoff and surfaced in the readiness audit §2:

- **Option A — in-place edit only**: extend `spore-instance-model.md` with §"Minimum Viable Composition" subsection without changing doc_kind. Lowest ceremony but leaves the architecture-vs-foundation hygiene gap unresolved.
- **Option B — promote-and-extend**: flip doc_kind `architecture → foundation` AND extend with new subsection. Closes the hygiene gap atomically with the substantive admission.
- **Option C — new sibling foundation doc**: author `docs/foundations/min-viable-spore-instance.md` separately. Highest ceremony; introduces scope-fragmentation between two foundation docs covering related instance-composition territory; rejected at scoping-plan time per §8 Q1 lean-(a).

Operator pre-pinned **Option B** at orchestrator handoff. Rationale per readiness audit §2: instance-model.md is currently `architecture` not `foundation` — that's a real gap; F7 admission is the natural moment to fix the doc_kind classification atomically. Plus the F6.4 + F3 forward-refs warrant foundation-layer treatment, not just architecture-layer description.

### Substrate density unique to F7 (lighter than F3)

F7 sits atop the lightest Phase-4 substrate density. Two forward-references discharge in this admission (F6.4 + F3 cross-federation portability), and the four-aspect substrate is structurally homogeneous (the four aspects are co-equal in the existing doc). This contrasts with:

- **F1 / F4** which authored full new foundation docs with substrate spread across multiple ADRs.
- **F6** which authored taxonomy-net-new across 8 categories (B2 per-category synthesis-depth).
- **F5** which inherited F1+F4+F6 substrate (B1 re-converged unified).
- **F3** which carried 5 substrate-parents with structurally-heterogeneous category substrates (B5 SELECTIVE).

F7 is **synthesis-light** with a homogeneous substrate (B1 unified principled-rule across the four aspects). Promote-and-extend ceremony reflects this: minimum viable canon admission for what the substrate already implies.

## Decision

**Edit — promote-and-extend (atomic-bundle draft commit):**

1. **Flip frontmatter** of `docs/foundations/spore-instance-model.md`: `doc_kind: architecture → foundation`; `status: draft → active`; `depends_on:` extended with `spore.failure-modes` + `spore.actor-governance`.

2. **Extend body** with new §"Minimum Viable Composition" subsection (~73 lines) inserted after §"How They Compose" composition table and before §"Personal Node vs Public Node". Subsection structure:
   - **Principled rule (B1 unified across the four aspects)** — three-clause minimum-viable test: grammar use + canon-legible accountability + coupling-to-consequence
   - **Aspect-coverage threshold** — coverage-of-aspects is not the threshold; grammar-fidelity-within-coverage is
   - **Boundary cases** — Spore vs Spore-adjacent vs out-of-grammar, with Dobby as canon-legible boundary-case test
   - **Rule-level decomposition (C1 inheriting ADR-0046)** — instance-composition decisions stratify across Ostrom 3-level rule-stack
   - **Relationship to F6.4 scale-transition (forward-ref discharge)** — F6.4 governs failure-categorization at scale-boundaries; F7 governs existence-threshold of grammar-applicability
   - **Cross-federation portability (F3 forward-ref discharge)** — portability grounded in instance-composition compatibility; specific protocols remain pattern-layer
   - **Forward-Reference Discharges** — explicit summary of two discharged forward-refs

3. **Verify cross-refs** in `docs/research/planning/canon-review-protocol.md` §1 (L48 entry exists; no edit) and `docs/README.md` Foundations listing (L34 entry exists; no edit). Both pre-existing per Step 0.5 audit.

4. **No yaml change**: `docs/research/concepts-p2p-wiki.yaml` v18 unchanged per D1 default (no new derived glossary slugs surfaced; existing aspect-vocabulary already canon-legible).

5. **Activate** via status-flip commit (draft → active on both ADR and foundation doc; foundation doc activation already happens in step 1's frontmatter edit).

### 10-axis disposition (operator pre-pinned + child-defaults ratified 2026-04-26)

| Axis | Disposition | Rationale |
|------|-------------|-----------|
| **A scope** | Option B promote-and-extend | Operator pre-pinned at orchestrator handoff. Closes doc_kind hygiene gap atomically with substantive admission. |
| **B structure** | B1 unified principled-rule across the four aspects | Substrate-driven (the four-aspect framing is structurally homogeneous in the existing doc). Continues B-axis progression B1→B1→B2→B1→B5→B1; validates substrate-driven discipline. |
| **C rule-stack** | C1 inherit ADR-0046 Ostrom 3-level | 6th Phase-4 application + 1st Tier C application; now convention. Rule-stack maps onto instance-composition (operational = aspect-running; collective-choice = aspect-amend; constitutional = aspect-admit-or-recall). |
| **D slug admissions** | D1 no new slugs | Operator pre-pinned default. No slug-need surfaced at Step 0.5 audit; existing aspect-vocabulary (Canon / Node / Agent / Site / Spore-instance / Spore-adjacent / out-of-grammar) is canon-legible without new admissions. |
| **E forward-ref discharge** | E1 full discharge | F6.4 scale-transition + F3 cross-federation portability both discharged in new subsection prose. |
| **F registration** | F1 5-file atomic-bundle | yaml-no-touch per D1 default; cross-refs pre-existing per audit (verify-only); ADR + foundation-doc edit are the substantive changes. |
| **G contestation/appeal mechanism** | G2 cite-don't-redefine | Routes instance-classification disputes through F4 §5.3 Appeal-Protocol wholesale; routes governance-response (if instance-level standing is contested) through F3 §4.6. Inherits F5/F3 cross-foundation-doc cite-discipline. |
| **H structural-legitimacy relationship** | H3-flat (substrate-parents F6 + F3; no operational-pair sibling because the foundation doc IS the extended doc) | NOVEL relational shape introduced by promote-and-extend pattern. ADR-0077 §231 anticipated H3 with operational-pair-sibling-to-spore-instance-model; under Option B that sibling slot is the doc itself. H3-flat is the corresponding promote-and-extend variant. |
| **I cross-repo** | I1 narrow Spore-only | Matches all 5 prior Phase 4 admissions; DH-PM-1 still held; IC + PM cross-repo alignment ADRs land post-F7 in Wave-N queue. |
| **J scope-narrowness** | J1 narrow | Out-of-scope: ADR-0059c-shape governance-artifacts:134-143 cascade-miss residue (compounds across F1+F4+F6+F5+F3+F7; remains operator-discretion follow-on); cross-repo IC + PM alignment ADRs (Wave-N); Phase 5 section-level status labels; specific instance-validation algorithms (pattern-layer); F8 external-validation-loop + F2 translation-mapping-governance + F9 maintenance-economics (Tier C remaining). |

## Consequences

### Canon state delta

- **Foundation docs**: 11 → 12. `docs/foundations/spore-instance-model.md` joins the foundation set via doc_kind flip. Registration in canon-review-protocol §1 + docs/README.md was already present at admission time (verified Step 0.5 audit).
- **Concepts yaml**: v18 unchanged (D1 no new slugs).
- **Canon object-class inventory**: PRESERVED at 4 categories (primitives / doctrines / modes / properties). No new canon-object class.
- **Primitives/doctrines/modes/properties/patterns**: PRESERVED. 9 primitives / 3 doctrines / 2 modes / 2 properties / 7 in-scope patterns.
- **Derived glossary slugs**: 14 unchanged (D1 no new slugs).
- **Canon-rebuild arc**: extends to 30 canon-decisions (0044–0058, 0061–0078, 0059a).
- **Phase 4 progress**: 6 of 9 deficits closed (Tier A: F1 + F4; Tier B: F6 + F5 + F3; Tier C first admission: F7). Tier C remaining: F8 external-validation-loop + F2 translation-mapping-governance + F9 maintenance-economics.

### Forward-references discharged

This ADR discharges two previously-open forward-references:

- **F6.4 scale-transition** (`docs/foundations/failure-modes.md` §4.4 L109-121): F6.4 names scale-transition failures categorically; F7's new subsection names the minimum-viable *existence-threshold* below which the grammar does not yet apply. Boundary articulated: F6.4 is failure-categorization at scale-boundaries within the grammar; F7 is the existence-threshold of grammar-applicability itself.
- **F3 cross-federation actor-portability** (`docs/foundations/actor-governance.md` §"Open Questions" L199): portability is grounded in instance-composition compatibility per F7's principled rule (Spore-instances mutually-readable when both satisfy the three-clause minimum-viable test); specific protocols remain pattern-layer per ADR-0068 federation-encounter pattern composition work.

### Forward-references remaining open

- **F8 external-validation-loop (forthcoming)**: F7 governs the existence threshold of grammar-applicability; F8 will govern external-witness validation-loops back into grammar-instances, layered atop F7's instance-composition foundation.
- **F9 maintenance-economics (forthcoming)**: F7's coupling-to-consequence clause names instance-level legitimacy; F9 will operationalize the economic-substrate side (compensation, reproductive-labor recognition) per F1 §4.3 + F3 §4.6 sub-shape 4 anticipation.

### Method-precedent contributions

Three method-precedents named explicitly per orchestrator directive:

1. **First Tier C admission via promote-and-extend (Option B)** — distinct shape from Tier A/B all-NEW foundation docs. Pattern: existing doc gets `doc_kind` hygiene flip + new subsection articulating the canon-decision-grade content. Minimum viable canon ceremony when substrate exists pre-admission. The Tier sequence demonstrates substrate-maturity-driven ceremony: Tier A authored full new foundation docs (highest ceremony); Tier B authored full new foundation docs with substrate inheritance (mid ceremony); Tier C first admission promote-and-extends an existing doc (lower ceremony where substrate exists). Reusable for future Tier admissions where substrate-doc already exists.

2. **Doc_kind hygiene-bundling pattern** — when promoting an architecture-classed doc to foundation status, bundle the frontmatter flip with the substantive admission ADR rather than separating hygiene-PR from substantive-ADR. Audit §8 Pattern 3 (Tier C readiness audit 2026-04-25) named this discipline; ADR-0078 is the first operational application. Reusable for any future doc-classification cleanup that surfaces during a substantive admission.

3. **H3-flat substrate-parents-only when the foundation doc IS the extended doc** — H3 multi-way (F5/F3 precedent) assumed substrate-parent + operational-pair-sibling shape. Promote-and-extend reveals that operational-pair shape only fits all-NEW docs; under Option B promote-and-extend the operational-pair-sibling slot is the doc itself. H3-flat (substrate-parents F6 + F3; no operational-pair sibling) is the corresponding promote-and-extend variant. ADR-0077 §231 anticipated H3 with operational-pair-sibling-to-spore-instance-model — that anticipation is now closed by H3-flat reading. Reusable for any future promote-and-extend admission where the existing-doc-being-extended would be the operational-pair-sibling under all-NEW shape.

### Parked / out-of-scope items (per J1 narrow)

- **ADR-0059c-shape cascade-miss** at `docs/foundations/governance-artifacts-and-graph-projections.md:134-143` residual intent-pressure language (compounded across F1 + F4 + F6 + F5 + F3 + F7 admissions; remains operator-discretion follow-on).
- **Cross-repo IC + PM minimum-viable-instance alignment** (Wave-N queue; post-Tier C closure).
- **Phase 5 section-level status labels** (separate layer; tag-agnostic per operator Q6 ratification).
- **Instance-validation algorithms** — specific compatibility-check protocols, mutual-recognition handshakes, federation-portability admission shortcuts. Those belong to pattern, protocol, or deployment layer.
- **F8 external-validation-loop, F2 translation-mapping-governance, F9 maintenance-economics** — Tier C remaining; admit when operational-demand fires per Option D3 TIERED ratification.
- **F7 §"Open Questions" deeper articulation** — temporal dynamics of instance-composition, instance-composition-decay-with-time, multi-federation-membership shapes. Foundation doctrine names instance-composition at admission; long-time-horizon dynamics deferred.

## Evidence

- **Audit-v2 §6.4 item 7** (`tmp/canon-first-principles-audit-v2-2026-04-22.md`): F7 minimum-viable-spore-instance flagged as Phase 4 missing-foundation-doc deficit.
- **Phase 4 scoping plan** (`tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md`): Tier C membership confirmed; operator Q1 lean-(a) preference for promote-and-extend over new-sibling-doc shape.
- **Tier C readiness audit** (`tmp/adr-tier-c-readiness-audit-2026-04-25.md` §2): substrate-readiness HIGH; trigger-state WEAK-FIRED; recommended Option B promote-and-extend; doc_kind hygiene gap identified as bundling opportunity (§8 Pattern 3); H3 anticipation from ADR-0077 §231 surfaced as open at H-axis (resolved at this ADR as H3-flat).
- **Two implicit forward-references**: F6 §4.4 (failure-modes.md L109-121) cross-scale failure framework; F3 §"Open Questions" L199 explicit cross-federation portability deferral.
- **Substrate completeness verified at Step 0.5 audit**: composition table at `spore-instance-model.md` L49-55 supplies 5 data points (1 reference instance + 1 personal workbench + 1 4-aspect federation + 1 Spore-adjacent + 1 anticipatory-public); minimum-viable rule has empirical grounding in canon-already.

## Diff summary

Five-file atomic-bundle (draft commit):

- **NEW** `docs/research/canon-decisions/0078-min-viable-spore-instance-foundation-promotion.md` (this file) — ADR authoring admission
- **EDIT** `docs/foundations/spore-instance-model.md` — frontmatter doc_kind flip (`architecture → foundation`) + status flip (`draft → active`) + `depends_on:` extension (+failure-modes, +actor-governance) + new §"Minimum Viable Composition" subsection (~73 lines) inserted after §"How They Compose"
- **VERIFY-ONLY** `docs/research/planning/canon-review-protocol.md` — confirm L48 entry exists; no edit needed
- **VERIFY-ONLY** `docs/README.md` — confirm L34 entry exists; no edit needed
- **NO TOUCH** `docs/research/concepts-p2p-wiki.yaml` — D1 default; v18 unchanged

Active commit (status-flip): `draft → active` on this ADR. Foundation doc `status: active` already applied in the draft commit's frontmatter edit (no separate flip needed at activation time).

## Implementation Notes

- **Sandbox-plan-file contingency**: plan content consolidated into `tmp/adr-0078-decision-brief-2026-04-26.md` per spore:ADR-0072 + ADR-0076 + ADR-0077 precedent. No `~/.claude/plans/` file authored for this ADR.
- **Validator baseline**: 9 errors / 30 warnings at Step 0 preflight; expected to hold exact through both commits.
- **Sibling repos**: IC + PM + koi-processor + darren-workflow READ-ONLY throughout; zero-change verified at Step 4 + Step 7. Baselines: IC `cef35fe`, PM `349e3ac`, koi-processor `22463cf4`, darren-workflow `3cc190f`.
- **Phase 4 Tier C status**: 1 of 4 deficits closed (F7); 3 remaining (F8 + F2 + F9).
- **Foundation doc edited in single pass**: doc_kind + status + depends_on + new subsection all applied at draft-commit time per F5/F3 ceremony-anomaly-avoidance discipline. The ADR itself authors with `status: draft` initial; flips to `active` at the second commit of the draft → active pair.
- **Push at Step 6** within execution per orchestrator directive.
