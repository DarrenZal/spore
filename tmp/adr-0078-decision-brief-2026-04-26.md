# ADR-0078 Decision Brief — F7 min-viable-spore-instance foundation-doc promotion

**Date:** 2026-04-26
**Status:** Step 1 decision-brief; pre-pinned axes ratified by orchestrator handoff; Step 0.5 audit findings appended
**Disposition:** Option B promote-and-extend

## 1. Context

F7 is the first Tier C admission of Phase 4. Phase 4 scoping (`tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md` §5 Option D3 TIERED) deferred Tier C pending operational-demand triggers. F7 fires now per Tier C readiness audit (`tmp/adr-tier-c-readiness-audit-2026-04-25.md` §2):

- Substrate exists: `docs/foundations/spore-instance-model.md` already covers Canon/Node/Agent/Site decomposition + composition table at L49-55, with implicit minimum-viable language at L21 ("Not every Spore instance needs to materialize all four aspects") and L95 ("a canon-only instance ... is valid; a node-only instance is valid; a personal node without a site is valid").
- Doc_kind hygiene gap: `spore-instance-model.md` is currently `doc_kind: architecture`; canon-review-protocol §1 + docs/README.md treat it as foundation-layer. F7 admission is a natural moment to fix the doc_kind classification (audit §8 Pattern 3 hygiene-bundling).
- Forward-references implicit: F6.4 (failure-modes.md L109-121) names cross-scale failures; F7 should articulate the threshold below which coordination breaks. F3 §"Open Questions" L199 explicitly defers cross-federation actor-portability to F7.

## 2. Operator pre-pinned axes (ratified at handoff)

- **A:** Option B promote-and-extend (NOT Option A in-place edit; NOT Option C new sibling)
- **doc_kind hygiene fix bundled** per audit §8 Pattern 3
- **New subsection §"Minimum Viable Composition"** with 4 articulations: (a) min-viable shape under Canon/Node/Agent/Site decomposition; (b) Spore vs Spore-adjacent vs out-of-grammar test (Dobby L54 as test case); (c) F6.4 scale-transition relationship (threshold-below-which-patterns-break); (d) F3 cross-federation portability discharge
- **D1:** no new slugs default
- **F-axis allowlist:** 5-file atomic-bundle (ADR + foundation doc + canon-review-protocol §1 + docs/README.md + concepts yaml v18 untouched per D1)
- **status: draft** initially; flip at activation commit (F5 anomaly avoidance discipline)
- **Push at Step 6** within execution

## 3. Step 0 baseline verification

- Spore HEAD: `70c8421e53cc43cfde4bfee0976d77b002c3245f` (origin/main)
- IC HEAD: `cef35fedb23f6b7efc5827cf72715cc188b5879d` (intelligence-commons; origin/main; ic:ADR-0020)
- PM HEAD: `349e3ace05c76022c0a9429b7a4d45325ebed525` (poietic-match; origin/main; pm:ADR-0017)
- koi-processor HEAD: `22463cf4673fb6c4aceba3148f34d4415f5c5976` (origin/regen-prod)
- darren-workflow HEAD: `3cc190f45b66c3bae3596ea5e195fc8561b93265` (origin/main)
- Spore worktree: clean (no tracked modifications); only untracked tmp/ artifacts + AGENTS.md + image files
- Validator: 9 errors / 30 warnings (baseline held)
- `docs/foundations/spore-instance-model.md` frontmatter: `doc_kind: architecture` (L3 confirmed)

## 4. Step 0.5 audit findings

### 4.1 Substrate coverage in `spore-instance-model.md`

Existing structure (115 lines; 8 sections):

- §"Four Aspects of a Spore Instance" (L19-43): Canon / Node / Agent / Site
- §"How They Compose" (L45-55): 5-row composition table (Spore canon / Darren's personal workbench / BKC / Octo / Dobby / Future Spore public instance)
- §"Personal Node vs Public Node" (L57-64)
- §"Profiles as Compositions" (L66-77): 4 reference node profiles
- §"Relationship to Existing Grammar Terms" (L79-88)
- §"Non-Goals" (L90-101): 8 items including L95 "Require all four aspects" (negation = minimum-viable)
- §"Reference Architecture: BKC / Octo" (L103-114)

Implicit minimum-viable language already present:

- L21: "These four aspects are analytically distinct — not all are required, and they may be combined differently depending on context."
- L95: "Require all four aspects — a canon-only instance (like this repo) is valid; a node-only instance is valid; a personal node without a site is valid."
- L54 Dobby example: "Spore-adjacent, partially aligned" — encodes Spore-adjacent vs Spore-instance distinction informally.
- L84: "the federation protocol defines who participates (holons); the instance model describes what infrastructure they use (substrates)" — distinguishes the participation question from the substrate question.

**Gap**: the doc articulates four aspects + composition table, but does NOT articulate (a) a principled minimum-viable threshold rule, (b) the Spore-adjacent vs out-of-grammar test, (c) the F6.4 scale-transition relationship, or (d) the F3 cross-federation portability discharge.

→ New §"Minimum Viable Composition" subsection (50-100 lines) is the right shape; it adds the doctrine-grade content not yet articulated.

### 4.2 Forward-ref locations confirmed

- **F6.4 substrate** (`docs/foundations/failure-modes.md` L109-121): scale-transition framework names patterns-that-work-at-scale-N-break-at-scale-M; "the failure is not a bug in the pattern but a category-error in applying it across scales." F6 §Forward-References L214-222 forward-refs F3 + F5 only (NOT F7 explicitly). F7 discharges by-implication: F6.4 names cross-scale failures categorically; F7 names the minimum-viable threshold below which patterns can't compose at all. Relationship is "F6.4 categorizes the failure mode; F7 names the existence threshold."
- **F3 cross-federation portability** (`docs/foundations/actor-governance.md` L199): *"Whether canon-legible portability protocols across compatible federations should be developed is an open question, deferred to F7 minimum-viable-spore-instance + ADR-0068 federation-encounter pattern composition work."* — Explicit deferral to F7. F7 admission discharges by articulating: portability is grounded in federation-instance compatibility; an actor's portability-shape inherits from the structural-composition compatibility between source-federation and target-federation Spore-instances.
- **ADR-0077 §231 H3 anticipation**: *"F7 minimum-viable-spore-instance may carry H3 with substrate-parents F3 + F6 AND operational-pair sibling to spore-instance-model."* — anticipates H3 with operational-pair-sibling. Audit notes this shape doesn't quite fit Option B promote-and-extend (the foundation doc IS the extended doc; not a sibling). Resolution at H-axis below.

### 4.3 Cross-ref hygiene confirmed pre-existing

- `docs/README.md` L34: `- [spore-instance-model.md](./foundations/spore-instance-model.md) — how Spore materializes: canon, node, agent, site` — entry exists.
- `docs/research/planning/canon-review-protocol.md` L48: `- docs/foundations/spore-instance-model.md` — entry exists in canon-in-scope list.

→ No edit needed to either file. AC13 + AC14 satisfied at baseline; ADR ACs reduce to verification-only steps.

### 4.4 Substrate evidence for principled minimum-viable rule

The composition table provides concrete data points:

| Row | Canon | Node | Agent | Site | Status |
|-----|-------|------|-------|------|--------|
| 1 Spore canon | YES (reference) | NO (no public node yet) | YES (stewardship) | NO | full Spore-instance |
| 2 Darren's workbench | uses Spore canon | YES (personal KOI) | YES (Claude Code) | NO (private) | full Spore-instance |
| 3 BKC / Octo | extends Spore canon | YES (4 federated KOI) | YES (Octo) | YES (Quartz) | full Spore-instance (4-aspect) |
| 4 Dobby | NO (Spore-adjacent) | NO | YES (Dobby) | NO | "Spore-adjacent, partially aligned" |
| 5 Future Spore public | follows Spore canon | YES (dedicated) | YES (coord agent) | YES | full (anticipatory) |

Patterns visible:

- Canon-bearing AND grammar-using → full Spore-instance.
- Grammar-using-without-Canon-contribution → Spore-adjacent (Dobby case).
- Out-of-grammar entirely → not Spore at all (no rows; threshold case).

The principled rule: a Spore-instance must (a) use Spore's coordination grammar in at least one aspect (Canon, Node, Agent, or Site), AND (b) either contribute Canon back OR be canon-legibly accountable to Spore canon through some grammar-channel. Dobby's "partially aligned" is the boundary case: uses grammar (Agent operates via grammar-conformant operations), doesn't contribute Canon. That's "Spore-adjacent" — uses-grammar-without-canon-coupling.

### 4.5 B-axis decision (substrate-driven)

Substrate is structurally homogeneous: the four aspects are co-equal in the existing doc. Min-viable rule articulates a single principled-rule across the four aspects. Recommendation: **B1 unified principled-rule**.

Contrast: F6 used B2 per-category because failure categories are heterogeneous; F3 used B5 SELECTIVE because substrate maturity varied per category. F7 substrate is unified per the four-aspect framing already present in the doc; B1 is the right shape.

This continues the B-axis progression: B1 (F1) → B1 (F4) → B2 (F6) → B1 (F5) → B5 (F3) → B1 (F7). Validates **substrate-driven, not prior-shape-driven**.

### 4.6 H-axis decision

ADR-0077 §231 anticipated *"H3 with substrate-parents F3 + F6 AND operational-pair sibling to spore-instance-model"*. But under Option B promote-and-extend, the foundation doc IS spore-instance-model — there's no separate operational-pair sibling. Resolution: **H3-flat with substrate-parents F6 + F3**; no operational-pair sibling because the doc IS itself.

This is a novel relational shape introduced by the promote-and-extend pattern. Document as a new method-precedent: *H3-flat substrate-parents-only when the foundation doc IS the extended doc.*

### 4.7 Open audit questions resolved

All Step 0.5 audit findings align with operator pre-pinned axes. No material delta surfaced. Fast-path acceptance per known-ceiling discipline at Step 2.

## 5. Per-axis disposition (final)

| Axis | Value | Rationale |
|------|-------|-----------|
| **A** scope | Option B promote-and-extend | operator-pre-pinned |
| **B** structure | B1 unified principled-rule | substrate is structurally homogeneous (four-aspects co-equal) |
| **C** rule-stack | C1 inherit ADR-0046 Ostrom 3-level | template-inheritance from F1/F4/F5/F6/F3; rule-stack maps onto instance-composition (operational = aspect-running; collective-choice = aspect-amend; constitutional = aspect-admit-or-recall) |
| **D** slug admissions | D1 no new slugs | operator-pre-pinned default; no slug-need surfaced in audit |
| **E** forward-ref discharge | E1 full discharge | F6.4 scale-transition + F3 cross-federation-portability both discharged in new subsection prose |
| **F** registration | F1 5-file atomic-bundle (yaml v18 untouched per D1) | template-inheritance; cross-refs verified pre-existing (no edit needed to canon-review-protocol §1 or docs/README.md beyond verification) |
| **G** contestation/appeal | G2 cite-don't-redefine F4 §5.3 + F3 §4.6 | inherit F5/F3 cross-foundation-doc cite-discipline; routing for instance-classification disputes through F4 §5.3 with F7 standing-doctrine layered atop |
| **H** structural-legitimacy relationship | H3-flat (substrate-parents F6 + F3; no operational-pair sibling because the doc IS itself) | NOVEL relational shape introduced by promote-and-extend pattern |
| **I** cross-repo | I1 narrow Spore-only | template-inheritance |
| **J** scope-narrowness | J1 narrow | out-of-scope: ADR-0059c-shape governance-artifacts:134-143 cascade-miss residue (compounds across F1+F4+F6+F5+F3+F7 admissions); cross-repo IC + PM alignment ADRs (Wave-N queue); Phase 5 section-level status labels; specific instance-validation algorithms (pattern-layer) |

## 6. Allowlist (5-file atomic-bundle)

1. **NEW** `docs/research/canon-decisions/0078-min-viable-spore-instance-foundation-promotion.md` — ADR authoring admission
2. **EDIT** `docs/foundations/spore-instance-model.md` — frontmatter doc_kind flip + new §"Minimum Viable Composition" subsection (50-100 lines)
3. **VERIFY-ONLY** `docs/research/planning/canon-review-protocol.md` — confirm L48 entry exists; no edit
4. **VERIFY-ONLY** `docs/README.md` — confirm L34 entry exists; no edit
5. **VERIFY-ONLY (no touch)** `docs/research/concepts-p2p-wiki.yaml` — D1 no slugs; v18 unchanged

Net edits: 2 file modifications (1 NEW + 1 EDIT). 3 verify-only checks (2 cross-ref + 1 yaml-no-touch).

## 7. Method-precedents anticipated

1. **First Tier C admission via promote-and-extend (Option B)** — distinct shape from Tier A/B all-NEW foundation docs. Pattern: existing doc gets doc_kind hygiene flip + new subsection articulating the canon-decision-grade content. Minimum-viable canon ceremony when substrate exists pre-admission. Reusable for any future Tier C admission where substrate-doc already exists.
2. **doc_kind hygiene-bundling pattern** — when promoting an architecture-classed doc to foundation status, bundle the frontmatter flip with the substantive admission ADR rather than separate hygiene PR. Reusable for any future doc-classification cleanup.
3. **H3-flat substrate-parents-only when the doc IS the extended doc** — H3 multi-way (F5/F3 precedent) assumed substrate-parent + operational-pair-sibling shape. Promote-and-extend reveals that operational-pair shape only fits all-NEW docs. H3-flat is the corresponding promote-and-extend variant. Reusable for any future promote-and-extend admission.

## 8. Step 2 outcome

No material delta from operator pre-pinned axes. All open axes resolve via template-inheritance defaults. Fast-path acceptance per known-ceiling discipline. Proceeding to Step 3 draft commit.

## 9. Sandbox-plan-file contingency

Per spore:ADR-0072 + ADR-0076 + ADR-0077 precedent: this decision-brief at `tmp/adr-0078-decision-brief-2026-04-26.md` is the plan-substitute. No `~/.claude/plans/` file authored.

---

**End decision-brief.**
