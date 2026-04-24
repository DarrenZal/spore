---
doc_id: spore.canon-decision.actuator-logic-foundation-doc-promotion
doc_kind: decision-record
status: draft
adr_number: "0076"
opened-on: 2026-04-25
closed-on: 2026-04-25
decision: edit
r_claim_source:
  - spore.review.canon-first-principles-audit-v2-2026-04-22:6.4-item-5
  - spore.review.canon-first-principles-audit-v2-2026-04-22:3.3-item-5
r_claim_statement: |
  Audit-v2 §6.4 item 5 (Codex convergence on actuator-logic as priority-5 missing
  foundation) + §3.3 item 5 (Codex primary formulation: "if canon senses mismatch
  or intent-pressure, it needs doctrine of response. What happens when a gap is
  detected? Alert? Proposal? Routing? Human review? No change? Currently missing."):
  canon has rich pre-existing vocabulary for response-shapes (amend, contest,
  escalate, repair, revise, hold, routing) but no foundation-layer doctrine naming
  which response fires when and under whose authority. Three already-landed
  foundation docs carry explicit forward-references to F5 as Phase 4 canon-
  authoring target: F1 sensor-oracle-governance.md:38 ("what canon or an instance
  does when sensor-evidence disagrees with declared intent or commitment-authored-
  state — that is the scope of actuator-logic, foundation doc forthcoming"), F4
  representation-authority.md:41 ("what canon or an instance does operationally
  after inter-layer precedence resolves who-is-authoritative"), F6 failure-modes.md
  :45 + :219 ("what canon or an instance does *operationally* after a failure is
  recognized — alert, proposal, routing, human review, no change"). The audit-v2
  framing uses the pre-ADR-0056 demoted term `intent-pressure` as F5's trigger-
  surface; Phase 4 scoping plan Q2 mandates the reframe to "response-doctrine when
  sensor-evidence disagrees with declared intent or commitment-authored-state" per
  F1/F4/F6 forward-ref phrasing. Decision: admit new foundation doc at
  docs/foundations/actuator-logic.md carrying 5-category response-category
  taxonomy (R1 acknowledge-and-record / R2 contest / R3 amend-declared-state / R4
  escalate / R7 hold-as-tension) organized under B1 unified principled-rule
  structure (divergent from F6's B2 per-category but re-convergent with F1's B1
  per honest-rigor that response-modes share a common principled-rule: response-
  selection is governed by gap-shape + canonical text-type per F4 + rule-level per
  ADR-0046), inheriting ADR-0046 Ostrom 3-level rule-stratification as structural
  scaffold at doctrine layer, positioning as H3 hybrid — substrate-child to ADR-
  0042 structural-legitimacy AND operational-pair sibling to F6 failure-modes
  (F6 recognize → F5 respond), inheriting F4 §5.3 appeal-protocol wholesale per G2
  cite-don't-redefine discipline, admitting 2 slugs (`epistemic-gap` + `response-
  doctrine`) that structurally close the intent-pressure demotion residue at the
  Phase 4 foundation layer, naming R5 withhold + R6 rollback as operationally-
  valid prose-only response-shapes per ADR-0062/0063/0064 scope-conditioning
  precedent (single-tradition engineering-ops support; no canon anchor; honest-
  rigor earning-test fails at heavier-admission threshold).
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0076-preflight-manifest.txt
  - /Users/darrenzal/projects/spore/tmp/adr-0076-f5-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0076-f5-decision-brief-2026-04-25.md
  - docs/foundations/sensor-oracle-governance.md
  - docs/foundations/representation-authority.md
  - docs/foundations/failure-modes.md
  - docs/foundations/structural-legitimacy.md
  - docs/foundations/governance-artifacts-and-graph-projections.md
  - docs/research/canon-decisions/0041-text-authoritative-representation.md
  - docs/research/canon-decisions/0042-dag-delete-structural-legitimacy-promote.md
  - docs/research/canon-decisions/0046-field-rule-level-stratification.md
  - docs/research/canon-decisions/0056-phase-2c-semantic-refactoring-bundle.md
  - docs/research/canon-decisions/0062-membrane-as-self-produced-disposition.md
  - docs/research/canon-decisions/0063-participatory-sense-making-disposition.md
  - docs/research/canon-decisions/0064-co-presence-field-condition-disposition.md
  - docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md
  - docs/research/canon-decisions/0074-representation-authority-foundation-doc-promotion.md
  - docs/research/canon-decisions/0075-failure-modes-foundation-doc-promotion.md
authorized-by: "canon-rebuild-phase-4-tier-b operator directive 2026-04-25 (second Tier B admission after F6 failure-modes landed same session; 10-axis decision-brief child-defaults ratified A1/B1/C1/D2/E2/F1/G2/H3/I1/J1; three method-precedents named explicitly in §Consequences per operator directive: template-adaptability-validated-by-re-convergence + cite-don't-redefine-cross-foundation-doc-composition + hybrid-doctrine-pair-relational-shape-H3)"
queue_reference: "canon-first-principles-audit-v2-2026-04-22 §6.4 item 5 + §3.3 item 5 (actuator logic — Codex priority-5 missing foundation)"
affects_canon:
  - docs/foundations/actuator-logic.md
  - docs/research/planning/canon-review-protocol.md
  - docs/README.md
  - docs/research/concepts-p2p-wiki.yaml
related_adrs:
  - spore:ADR-0001-pluriversal-incommensurability
  - spore:ADR-0041-text-authoritative-representation
  - spore:ADR-0042-dag-delete-structural-legitimacy-promote
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0046-field-rule-level-stratification
  - spore:ADR-0049-reproduction-continuity-primitive-admission
  - spore:ADR-0050-sociality-side-b-plus-primitive
  - spore:ADR-0056-phase-2c-semantic-refactoring-bundle
  - spore:ADR-0062-membrane-as-self-produced-disposition
  - spore:ADR-0063-participatory-sense-making-disposition
  - spore:ADR-0064-co-presence-field-condition-disposition
  - spore:ADR-0073-sensor-oracle-governance-foundation-doc-promotion
  - spore:ADR-0074-representation-authority-foundation-doc-promotion
  - spore:ADR-0075-failure-modes-foundation-doc-promotion
concepts:
  - epistemic-gap
  - response-doctrine
  - operational-rule
  - collective-choice-rule
  - constitutional-rule
  - rule-in-use
  - joint-commitment
  - reproduction-continuity
---

# ADR-0076 — Actuator-Logic Foundation Doc Promotion

## Status

active (authored + activated 2026-04-25 under canon-rebuild Phase 4 Tier B second admission; follows F6 failure-modes ADR-0075 landed same session)

## Context

Phase 4 of the canon-rebuild arc was defined in the 2026-04-22 canon-first-principles-audit-v2 (`tmp/canon-first-principles-audit-v2-2026-04-22.md` §6.4, lines 352–362) as "7–9 new foundation docs, priority-ordered." The 2026-04-25 Phase 4 scoping session (plan: `tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md`) ratified three-tier admission sequencing: Tier A (F1 + F4, landed 2026-04-25 as ADR-0073 and ADR-0074), Tier B (F6 + F5 + F3 per operator-inverted ordering), Tier C (F7 + F8 + F2 + F9).

F5 actuator-logic is the priority-5 missing foundation per audit-v2 §6.4 item 5 (Codex convergence). Three already-landed foundation docs carry explicit forward-references to F5 as Phase 4 canon-authoring target:

1. **F1 sensor-oracle-governance.md:38**: *"**Response-to-mismatch doctrine** — what canon or an instance does when sensor-evidence disagrees with declared intent or commitment-authored-state. That is the scope of `actuator-logic` (foundation doc forthcoming)."*
2. **F4 representation-authority.md:41**: *"**Response-to-mismatch doctrine** — what canon or an instance does operationally after inter-layer precedence resolves who-is-authoritative (alert, proposal, routing, human review, no change). That is F5 actuator-logic scope (forthcoming)."*
3. **F6 failure-modes.md:45** + **:219**: *"**Response-and-recovery doctrine** — what canon or an instance does *operationally* after a failure is recognized (alert, proposal, routing, human review, no change). That is F5 actuator-logic scope (forthcoming)."*

Plus audit-v2 §3.3 item 5 (Codex primary formulation): *"Actuator logic — if canon senses mismatch or intent-pressure, it needs doctrine of response. What happens when a gap is detected? Alert? Proposal? Routing? Human review? No change? Currently missing."*

### Intent-pressure reframe (E2 disposition)

The audit-v2 §6.4 item 5 framing uses `intent-pressure` as F5's trigger-surface. Per ADR-0056 Phase 2c semantic refactoring bundle, `intent-pressure` was demoted from foundation-lexicon to research-connection status (moved from `docs/foundations/lexicon/intent-pressure.md` to `docs/research/connections/intent-pressure.md`; doc_id preserved for research-layer depends_on continuity). Phase 4 scoping plan Q2 mandated: *"Re-word F5 scope before authoring: 'response-doctrine when sensor-evidence disagrees with declared intent or commitment-authored-state.'"* F1, F4, and F6 forward-refs all adopt the reframed wording verbatim.

F5 is authored with the reframed vocabulary from the start. The canonical trigger-surface noun is **observable epistemic gap** — a phrase already canon-live at `docs/foundations/governance-artifacts-and-graph-projections.md:140` following the ADR-0059c-shape palate-cleanser at commit `2427d5f`. This phrase structurally replaces the demoted intent-pressure as Phase 4 foundation-level trigger-noun. The slug `epistemic-gap` (admitted at v17) closes the reframe at vocabulary-governance layer.

### Operator-inverted Tier B ordering consequence

Per ADR-0075 §5 method-precedent ("Tier B template inheritance with honest-rigor per-axis divergence — template shape adapts to substrate shape, not the reverse"), F5 is the second Tier B admission following F6's B2 per-category divergence from F1's B1 unified. F5's substrate (response-modes) shares a common principled-rule (response-selection is governed by gap-shape + canonical text-type per F4 + rule-level per ADR-0046) and re-converges on B1 unified structure. The B1→B2→B1 sequence validates template-adaptability as genuine substrate-driven discipline, not convergence-to-F1 shape nor F6-style divergence-as-default.

ADR-0042 (dag-delete + structural-legitimacy-promote, 2026-04-22) is the authoritative template for foundation-doc promotion via ADR, inherited by ADR-0073 (F1), ADR-0074 (F4), ADR-0075 (F6). ADR-0076 inherits the five-part coordinated-admission pattern directly.

## Decision

**Edit — five-part coordinated canon admission (atomic-bundle draft commit):**

1. **Author new foundation doc** at `docs/foundations/actuator-logic.md` carrying 5-category response-category taxonomy (R1–R4 + R7) with B1 unified principled-rule structure (re-convergent with F1 after F6's B2 divergence per honest-rigor substrate-driven template-adaptability).
2. **Register** in `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list.
3. **Register** in `docs/README.md` Foundations listing.
4. **Admit 2 slugs** to `docs/research/concepts-p2p-wiki.yaml` (v16 → v17): `epistemic-gap` (structural trigger-noun replacing demoted `intent-pressure` at Phase 4 foundation-level) + `response-doctrine` (meta-noun naming F5's canonical subject).
5. **Activate** via status-flip commit (draft → active on both ADR and foundation doc).

### 10-axis disposition (all operator-ratified 2026-04-25)

| Axis | Disposition | Rationale |
|------|-------------|-----------|
| **A scope** | A1 full response-doctrine across all sensor / attestation / agent-summary / representation-layer disagreement shapes | Matches F6 A1 all-8; F1/F4/F6 forward-refs all expect full scope; honest-rigor says admit the scope canon already committed to |
| **B structure** | B1 unified principled-rule (re-convergent with F1 after F6's B2 divergence) | Response-modes share a common principled-rule (gap-shape + text-type per F4 + rule-level per ADR-0046 govern choice); NOT structurally heterogeneous like F6's 8 failure-categories. Re-convergence validates template-adaptability as substrate-driven discipline per method-precedent 1 below |
| **C rule-stack** | C1 inherit ADR-0046 Ostrom 3-level | Fourth application after F1/F4/F6; now convention |
| **D slug admissions** | D2 admit 2 slugs (`epistemic-gap` + `response-doctrine`; yaml v16 → v17) | `epistemic-gap` structurally closes the intent-pressure demotion residue at Phase 4 foundation layer; `response-doctrine` names F5's canonical subject. Response-category names (R1–R4+R7) stay prose-only per ADR-0053 precedent |
| **E intent-pressure reframe** | E2 reframe with explicit ADR-0056 cite | §Context explicitly names the ADR-0056 demotion + inherits F1/F4/F6 reframed wording + cites governance-artifacts.md:140 "observable epistemic gap" as canonical trigger-surface |
| **F registration** | F1 full 5-file atomic-bundle | D2 admits 2 slugs; yaml v16→v17 bump required |
| **G contestation mechanism** | G2 inherit F4 §5.3 appeal-protocol wholesale (cite-don't-redefine) | F4 already generalized from F1 to multi-layer; F5's R2 (contest) routes through F4 §5.3 appeal-protocol without duplication. Reusable cite-don't-redefine discipline per method-precedent 2 below |
| **H structural-legitimacy relationship** | H3 hybrid — substrate-child to ADR-0042 AND operational-pair sibling to F6 | F5 cites structural-legitimacy as substrate (coupling is what F5 maintains) AND cites F6 as operational-pair (F6 recognize → F5 respond). Novel relational shape per method-precedent 3 below |
| **I cross-repo** | I1 narrow Spore-only | Matches F1/F4/F6 precedent; IC + PM alignment ADRs land post-F5 per Wave-N cross-repo queue; DH-PM-1 counsels caution on pre-alpha PM additive work |
| **J scope-narrowness** | J1 narrow | Out-of-scope: ADR-0056 R-IP-1 residual intent-pressure canon-body refs (stigmergy.md L30/L81/L88 + constitutional-artifacts.md:122 + 4 more parking items); L117 mycorrhizal-federation-protocol ref; Phase 5 section-level status labels |

### 5-category response-category taxonomy (authored at foundation-doc §4)

Under honest-rigor ≥2-cluster independent-tradition support threshold:

- **R1 acknowledge-and-record** — default minimal response: gap logged as canon-legible; no further intervention triggered. Cluster support: Ostrom rules-in-use; canon-review governance-memory pattern; linguistic-closure.md claim lifecycle.
- **R2 contest** — protocol-based challenge routed through F1 §4.4 (sensor-layer) or F4 §5.3 (inter-layer) appeal-protocol. Cluster support: Ostrom Principle 6 conflict-resolution; polycentric-governance mutual-adjustment; structural-legitimacy contestability mechanisms.
- **R3 amend-declared-state** — canon-review authoring updates commitment-authored-state or specification-text to reflect observed reality; text-authoritative path per F4 §5.1 default. Cluster support: constitutional-amendment literature; ADR-0041 text-authoritative; Debian/PEP enumerated-powers-by-role amendment-threshold.
- **R4 escalate** — route to next Ostrom rule-level per ADR-0046 (operational → collective-choice → constitutional). Cluster support: Ostrom 3-level polycentric; VSM S4/S5; recursive-democracy subsidiarity.
- **R7 hold-as-tension** — when all other responses fail at all rule-levels, record the gap as held-epistemic-tension (ADR-0001 shape; F1 §4.5 + F4 §5.4 precedent). Cluster support: ADR-0001 pluriversal-incommensurability; dialectical-tension tradition; F1/F4 held-epistemic-tension precedent.

### Operationally-valid, prose-only per ADR-0062/0063/0064 precedent

- **R5 withhold / pause** — halt actuation pending resolution; applies to irreversible-action cases.
- **R6 rollback / restore** — revert to prior-legitimate state; applies to executed-but-unratified changes.

R5 + R6 are named in F5's body-prose at §4.6 as "recognizable operational response patterns that canon acknowledges without canonically classifying." Honest-rigor earning-test: Q-α PARTIAL (operationally specifiable; no protocol-surface in canon), Q-β WEAK (single-tradition engineering-ops support; no canon anchor). Does NOT jointly pass at heavier-admission threshold. Same discipline as the ADR-0062 Membrane production-mode / ADR-0063 Signal sense-making-mode / ADR-0064 Field co-presence-mode scope-conditioning-over-admission decisions.

## Consequences

### Canon state delta

- **Foundation docs**: 10 → 11. `docs/foundations/actuator-logic.md` joins the set. Registration updates in canon-review-protocol §1 + docs/README.md.
- **Concepts yaml**: v16 → v17. Two new slugs admitted (`epistemic-gap` + `response-doctrine`).
- **Canon object-class inventory**: PRESERVED at 4 categories (primitives / doctrines / modes / properties). No new canon-object class; F5 admits a foundation-doc authoring a response-doctrine, not a new category type.
- **Primitives/doctrines/modes/properties/patterns**: PRESERVED. 9 primitives / 3 doctrines / 2 modes / 2 properties / 7 in-scope patterns.
- **Derived glossary slugs**: 10 → 12 (post-F6 was 10: substitution-trap, encounter, federation-encounter, view-template, longitudinal-attestation, replication-regime, failure-mode-class, coupling-breakdown, plus earlier attestation-of-execution, permeability, double-boundary — adjust count: post-F6 yaml v16 has specific slug list; v17 adds 2).
- **Canon-rebuild arc**: extends to 28 canon-decisions (0044–0058, 0061–0076, 0059a).
- **F1 sensor-oracle-governance.md:38 forward-ref**: DISCHARGED. F5 carries the response-to-mismatch doctrine; F1 retains intra-modality governance.
- **F4 representation-authority.md:41 forward-ref**: DISCHARGED. F5 carries response-to-mismatch after inter-layer precedence resolves authority; F4 retains inter-layer precedence doctrine.
- **F6 failure-modes.md:45 + :219 forward-ref**: DISCHARGED. F5 carries operational-response doctrine after failure-category recognition; F6 retains category-recognition taxonomy.
- **Intent-pressure reframe (ADR-0056 R-IP structural closure)**: PARTIAL. `epistemic-gap` slug admission structurally closes the demotion residue at Phase 4 foundation layer for the trigger-surface noun. Canon-body intent-pressure refs parked in ADR-0056 R-IP-1 (7 locations) remain the downstream-propagation-ADR scope; F5 does NOT discharge those.

### Forward-references remaining open

- **F3 actor-governance (forthcoming)**: F5 §4.2 (contest) forward-references F3 for actor-capture-specific response per F6.7 pairing. F3 will carry governance-doctrine (standing, adjudication, recall, replacement). F5 does not wait for F3 to land; response-selection-at-other-categories is independent of actor-capture-specific governance-response.

### Method-precedent contributions

Three method-precedents named explicitly per operator directive 2026-04-25:

1. **Template-adaptability validated by re-convergence** — The B-axis sequence B1 (F1 unified) → B2 (F6 per-category) → B1 (F5 unified) proves substrate-driven B-axis discipline is genuine canon-method, not convergence-to-F1 shape nor F6-style divergence-as-default. Each foundation doc picks B-axis based on its own substrate's structural heterogeneity, not on prior-foundation-doc precedent. F5's re-convergence on B1 is earned by its substrate: response-modes share a common principled-rule (gap-shape + text-type per F4 + rule-level per ADR-0046 govern choice), unlike F6's 8 structurally-heterogeneous failure-categories which did not admit principled-rule unification. Extends ADR-0075 §5 method-precedent ("Tier B template inheritance with honest-rigor per-axis divergence") by validating that the precedent is re-applicable in **both directions** — diverge AND re-converge legitimately. Reusable for Tier C admissions (F7 / F8 / F2 / F9) where B-axis choice should follow substrate shape not prior-neighbor convention. This is the most-tested template-adaptability claim so far in Phase 4: three consecutive foundation docs, two different B-shapes, each earned by substrate.

2. **Cite-don't-redefine cross-foundation-doc composition** — G2 wholesale-inherit of F4 §5.3 appeal-protocol without authoring a parallel F5-specific appeal-protocol. When a prior foundation doc carries a fully-earned doctrinal structure (F4's D4 HYBRID default + context-overrides + appeal-protocol), subsequent foundation docs that need that structure should inherit-by-reference rather than author-parallel. Preserves single-source-of-truth discipline across canon; avoids maintenance-drift between parallel doctrine statements. F5's R2 (contest) cites F4 §5.3 for routing-adjudication-mechanics; F5 names its own response-selection-layer without duplicating F4's appeal machinery. First-operational-use of cross-foundation-doc cite-don't-redefine at the Phase 4 admission layer. Reusable pattern for any foundation doc that composes with prior foundation substrate — F3 actor-governance will likely inherit F4 appeal-protocol at the actor-adjudication layer; F9 maintenance-economics may inherit F1 maintainer-assignment discipline at the economic-maintenance layer.

3. **Hybrid doctrine-pair relational shape (H3)** — foundation docs can carry BOTH vertical (substrate-child to ADR-0042 structural-legitimacy) AND horizontal (sibling-pair to F6 failure-modes) relationships simultaneously. Novel move beyond F6's H2 pure-sibling-doctrine to structural-legitimacy and beyond F4's H-extension of ADR-0041 via new foundation-doc. The H3 pattern: F5 cites structural-legitimacy as substrate (authority-consequence coupling is *what* response-doctrine maintains — a gap-response that preserves coupling is legitimate; one that severs coupling-from-consequence is a substitution-trap per ADR-0048 / capture-via-composition per F6.8.3) AND cites F6 as operational-pair (F6 recognizes the gap-shape; F5 selects the response; the two are operationally coupled but doctrinally distinct). When a doctrine is operationally-coupled to another doctrine AND grounded in a shared canon-substrate, H3 hybrid is the accurate relational shape — neither pure-vertical (extension) nor pure-horizontal (sibling) captures the dual-relationship. Reusable for future foundation-doc pairs where operational coupling exists: F3 actor-governance will likely carry H3 hybrid with F6 (F6.7 actor-capture recognition → F3 governance-response) AND with structural-legitimacy (authority-consequence coupling substrates who-has-standing for actor-contest); F9 maintenance-economics may carry H3 hybrid with F1 (F1 maintainer-assignment → F9 maintenance-economics) AND with structural-legitimacy (maintainer-insulation is coupling-breakdown).

### Parked / out-of-scope items (per J1 narrow)

- **ADR-0056 R-IP-1 canon-body intent-pressure refs** (7 locations: stigmergy.md L30/L81/L88, constitutional-artifacts.md:122 "latent intent-pressure", intent-publication-and-activation.md:44, civic-infrastructure-convergence.md:124, hyperstition-as-coordination.md body refs) — remain parked for separate downstream-propagation ADR. F5 admits `epistemic-gap` as the Phase-4-layer replacement-noun at slug-level; canon-body text propagation is a different scope.
- **L117 mycorrhizal-federation-protocol** reference in `docs/research/connections/commons-law-and-charter-lineage.md` (ADR-0043 cascade-miss; 1-line TYPE-2 fix).
- **Phase 5 section-level status labels** (separate layer; tag-agnostic per operator Q6 scoping ratification).
- **R5 withhold / R6 rollback slug admission** — deferred unless cross-tradition convergence fires. Currently prose-only per scope-conditioning precedent.
- **Reversibility taxonomy** — canon currently has no reversibility axis; R5/R6 are reversibility-sensitive but scope-creep if admitted now. Park as future-ADR trigger.
- **Cross-repo IC + PM alignment ADRs** (Wave-N queue; post-F5).

## Evidence

- **Audit-v2 §6.4 item 5** (`tmp/canon-first-principles-audit-v2-2026-04-22.md` line 358): *"Actuator logic (Codex)"* — priority-5 missing foundation.
- **Audit-v2 §3.3 item 5** (line 206): Codex primary formulation — *"if canon senses mismatch or intent-pressure, it needs doctrine of response. What happens when a gap is detected? Alert? Proposal? Routing? Human review? No change? Currently missing."*
- **Phase 4 scoping plan**: line 40 F5 scope; line 178 F5 dependency; line 180 Option D3 tiered ratification; line 250 Q2 intent-pressure reframe mandate.
- **Three explicit foundation-doc forward-references** to F5: F1 sensor-oracle-governance.md:38, F4 representation-authority.md:41, F6 failure-modes.md:45 + :219.
- **Canonical trigger-surface phrase inheritance**: `docs/foundations/governance-artifacts-and-graph-projections.md:140` (post-ADR-0059c palate-cleanser `2427d5f`) uses *"observable epistemic gap"* — F5 inherits at slug-level as `epistemic-gap`.
- **Per-category ≥2-cluster independent-tradition support** documented at audit manifest §I (`tmp/adr-0076-f5-audit-manifest-2026-04-25.md`): all 5 admitted response-categories (R1+R2+R3+R4+R7) pass honest-rigor threshold; R5+R6 fail at heavier threshold, prose-only per scope-conditioning precedent.
- **Template inheritance substrate**: ADR-0042 foundation-doc-promotion pattern; ADR-0073 F1 B1-unified template; ADR-0074 F4 template with D4 HYBRID appeal-protocol; ADR-0075 F6 B2 per-category divergence; ADR-0046 Ostrom 3-level inheritance.

## Diff summary

Five-file atomic-bundle (draft commit):

- **NEW** `docs/foundations/actuator-logic.md` (~230 lines) — foundation doc with 5-category response-doctrine taxonomy under B1 unified principled-rule structure
- **NEW** `docs/research/canon-decisions/0076-actuator-logic-foundation-doc-promotion.md` (this file) — ADR authorizing admission
- **EDIT** `docs/research/planning/canon-review-protocol.md` §1 — register new foundation doc in canon-in-scope list (1-line insertion alphabetical)
- **EDIT** `docs/README.md` Foundations listing — register new foundation doc (1-line insertion alphabetical)
- **EDIT** `docs/research/concepts-p2p-wiki.yaml` — v16 → v17; add 2 slug entries (`epistemic-gap`, `response-doctrine`)

Active commit (status-flip): draft → active on ADR + foundation doc.

## Implementation Notes

- **Sandbox-plan-file contingency**: plan content consolidated into `tmp/adr-0076-f5-decision-brief-2026-04-25.md` + `tmp/adr-0076-f5-audit-manifest-2026-04-25.md` per spore:ADR-0072 precedent. No `~/.claude/plans/` file authored for this ADR.
- **Validator baseline**: 9 errors / 30 warnings at Step 0 preflight; held exact through both commits.
- **Sibling repos**: IC + PM + koi-processor + darren-workflow READ-ONLY throughout; zero-change verified at Step 7.
- **Phase 4 Tier B progression**: after F6 (ADR-0075 landed same session) and this F5 admission, Tier B is ONE-AWAY from closure — F3 actor-governance remains as the final Tier B admission (synthesis-heavy per ADR-0075 operator-inverted ordering rationale).
