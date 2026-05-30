# ADR-0076 F5 actuator-logic — Step 0.5 Audit Manifest

**Date**: 2026-04-25
**Preflight SHA**: `2427d5f`
**Validator baseline**: 9 errors / 30 warnings (exact match)
**Audit scope**: `docs/foundations/` + `docs/research/canon-decisions/` + `docs/project-vision.md` + F5-adjacent research connections

---

## A. Existing response-language inventory

Searched patterns: `actuate|actuator|actuation`, `respond|response`, `amend|contest|withhold|rollback|escalate|pause|halt|revert|restore`.

### A.1 `actuator|actuate|actuation`

**Every hit is F5-forward-ref context.** Zero existing canon-body use of "actuator" as anything other than the forthcoming-foundation-doc name. Summary:

- `docs/foundations/sensor-oracle-governance.md:38` — F5 forward-ref ("response-to-mismatch doctrine")
- `docs/foundations/representation-authority.md:41` — F5 forward-ref ("response-to-mismatch after inter-layer precedence")
- `docs/foundations/failure-modes.md:45, 161, 216, 218, 219, 221` — F5 forward-refs + F6-F5 shape-parallel discussion
- `docs/research/canon-decisions/0073-*`, `0074-*`, `0075-*` — Tier A/B context references

**Implication**: F5 inherits a clean naming slot. No conflicts; three prior foundation docs converge on the same forward-ref text ("what canon or an instance *does* operationally when a failure is recognized / when sensor-evidence disagrees with declared intent / when inter-layer precedence resolves who-is-authoritative"). The canonical response-enumeration converged across F1/F4/F6 is **5 types**: *alert / proposal / routing / human review / no change*.

### A.2 `respond|response` (substantive usages)

- `docs/project-vision.md:67, 161, 197` — three Johar-cited "response" usages (structural response to autopoiesis critique; "adaptive coordination ... iterative sensing and response"; learning as "how the primitive loop adapts in response to evidence-commitment mismatch").
- `docs/foundations/governance-artifacts-and-graph-projections.md:67, 73, 81` — "constructed power" articulated as "agency emerging in response"; "feel → narrate → respond → learn → re-feel" Johar loop-fluency.
- `docs/foundations/lexicon/stigmergy.md:32, 38, 39` — "respond to gradients", "respond to price signals" — stigmergic trace response mechanism.
- `docs/foundations/lexicon/linguistic-closure.md:41` — "These are design responses to the confirmed mechanism."
- `docs/foundations/representation-authority.md:83` — "graph-query responses" (incidental).

**Implication**: The vocabulary "response" is already actively load-bearing in three distinct canon senses: (1) adaptive coordination under complexity (project-vision.md:161 — *"iterative sensing and response rather than enforcing predefined outcomes"*); (2) constructed-power mode (govern-artifacts.md:67 + :73 — Johar "agency emerging situationally in response"); (3) the verb-loop's "respond" phase (Johar's feel → narrate → respond → learn → re-feel). F5 must be careful: **"response" is already canon-plural** — F5 names the *operational-doctrine layer* of response (what canon or an instance does), distinct from but compatible with the adaptive-coordination, constructed-power, and loop-phase readings.

### A.3 Response-category adjacent vocabulary already canonical

- **`amend`**: project-vision.md:91 ("set/amend/enforce rules"); ADR-0046 "propose-amendment = Intent"; F4 §5.2 context-override shape; F1 §4.4 "burden of proof; remedy enumeration".
- **`contest` / `contestation`**: project-vision.md:157 Constitutional Commitment Contestability; F1 §4.4 Proxy Contestation; F4 §5.3 appeal-protocol; structural-legitimacy.md:39 *"contestability mechanisms — when consequences deviate from expectations, the grammar provides explicit surfaces for contestation (bridge notes, held-tension ADRs, foundational-reframing proposals)"*.
- **`escalate`**: F1 §4.7 absent-evidence escalation; F4 §5.3 appeal-protocol (operational → collective-choice → constitutional routing); F1 §4.5 multi-sensor-disagreement escalation.
- **`repair`**: project-vision.md:157 ("mistakes repaired"); governance-memory pattern tooling.
- **`revise` / `revision`**: project-vision.md:157 ("decisions reviewed"); F4 §Open Questions "revision-triggers".
- **`hold` / `held-tension`**: ADR-0001; F1 §4.5 "held-epistemic-tension"; F4 §5.4.
- **`routing`**: F1 §4.6 + F4 §5.3 — explicit "routing through the rule-stack" as contestation/appeal discipline.
- **`no change`**: F6:45 + F4:41 forward-ref enumerations already include "no change" as one of the 5 response types.

**Implication**: Canon has rich pre-existing vocabulary for response-shapes. F5's job is **taxonomize and govern** these existing modes, not invent new verbs. This points toward a **B1 unified principled-rule** structure (F1-shape) rather than B2 per-category (F6-shape) — because the response-modes share a common principled-rule: *response-doctrine routes through the rule-stack per ADR-0046; the choice-of-response is governed by the gap-shape and the canonical text-type per F4*.

## B. Audit-v2 §6.4 item 5 verbatim

```
5. Actuator logic (Codex) — if canon senses mismatch or intent-pressure, it needs
   doctrine of response. What happens when a gap is detected? Alert? Proposal?
   Routing? Human review? No change? Currently missing.
```

**Pre-ADR-0056 framing noted**: audit-v2 uses `intent-pressure` as a trigger for F5. Per ADR-0056, `intent-pressure` is demoted to research-connection status; F5 must reframe without re-importing the demoted term. Phase 4 scoping plan Q2 gives the explicit reframe:

> *"Re-word F5 scope before authoring: 'response-doctrine when sensor-evidence disagrees with declared intent or commitment-authored-state.'"*

F1 and F4 both use this reframed wording verbatim in their F5 forward-refs. The canonical post-ADR-0056 scope is already stable across F1/F4/F6.

## C. Post-ADR-0056 reframe options

The demoted-term residue means F5 must name its trigger-surface without `intent-pressure`. Canon post-ADR-0056 offers three clean reframes (ranked honest-rigor):

1. **"Observable epistemic gap"** — phrase used in governance-artifacts-and-graph-projections.md:140 (post-ADR-0059c palate-cleanser wording); describes the gap between vision-graph and sensor-graph as *"observable"* and *"legible"* without dynamical-metaphor. **Strongest candidate** — already canon-body vocabulary.
2. **"Disagreement between sensor-evidence and declared intent or commitment-authored-state"** — the F1/F4/F6 forward-ref phrasing verbatim. Explicitly-factual, zero-metaphor, load-bearing across three already-landed foundation docs.
3. **"Evidence-commitment mismatch"** — project-vision.md:197 wording for what the coordination loop adapts to. Canon-load-bearing via the Learning clarification.

**Recommendation**: use (1) as scope-anchoring phrase + (2) as forward-ref-inherit; (3) as incidental. All three are post-ADR-0056 safe.

## D. F6 alignment check

F6's 5-type response enumeration (alert / proposal / routing / human review / no change) appears verbatim at F6.md:45 + F6.md:219 + F4.md:41. This is the canonically-pre-declared response taxonomy F5 must discharge.

### D.1 Mapping F6's 8 failure-categories to response-category candidates

| F6 category | Natural response-shape | Notes |
|-------------|------------------------|-------|
| F6.1 Representation failures | acknowledge-and-record / amend-declared-state / contest (F4 appeal) | F4 §5.3 appeal-protocol already handles contest |
| F6.2 Protocol failures | acknowledge / routing / escalate / no change (deferral) | federation-protocol.md:166-173 already enumerates at operational-rule |
| F6.3 Sensor / attestation / evidence-integrity | acknowledge / contest (F1 §4.4) / amend / escalate | F1 §4.4 proxy contestation already handles contest |
| F6.4 Scale-transition | escalate / amend-declared-state / held-tension | ADR-0046 rule-stack escalation natively fits |
| F6.5 Membrane-boundary | contest / amend / no change / withhold | F5 may admit `withhold` as new response verb |
| F6.6 Commitment-break | acknowledge / amend-declared-state / escalate / held-tension | three sub-shape handling per ADR-0044/0050/0049 |
| F6.7 Actor-capture | escalate-to-F3 / contest / acknowledge-and-record | F3 actor-governance is the governance-response home |
| F6.8 Meta-pattern / composition | acknowledge-as-canon-legible / contest-via-canon-review / held-tension | addressed at canon-review machinery layer |

**Finding**: F6 categories map cleanly to a **small set of response-shapes** that recurs across categories. The shapes are not 1:1 with F6 categories. This strengthens the **B1 unified principled-rule** case over B2 per-category.

### D.2 F5 response-category candidates (child-proposed)

Seeded by operator's candidate list + F6 alignment + canon-already-canonical vocabulary:

| # | Response | Operator-seed? | Canon anchor | Relationship to existing |
|---|----------|----------------|--------------|--------------------------|
| R1 | **acknowledge-and-record** | yes | gap is canon-legible per F1 §4.7, F4 §5.4 | default minimal; no-action-beyond-recording |
| R2 | **contest** | yes | F1 §4.4 proxy contest; F4 §5.3 appeal; structural-legitimacy.md:39 contestability | routes through F1 or F4 appeal machinery |
| R3 | **amend-declared-state** | yes | canon-review machinery; ADR-0046 `propose-amendment = Intent` | text-authoritative path per F4 §5.1 default |
| R4 | **escalate** | yes | F1 §4.7, F4 §5.3, ADR-0046 rule-stack | routes to next rule-level |
| R5 | **withhold / pause** | yes | novel; no direct canon anchor | applies to reversible-vs-irreversible asymmetry |
| R6 | **rollback / restore** | yes | no direct canon anchor; related to `repaired` | applies to executed-but-unratified changes |
| R7 | **hold-as-tension** | derived | ADR-0001; F1 §4.5; F4 §5.4 | when resolution fails at all rule-levels |

**Audit finding**: R5 (withhold) and R6 (rollback) are the only operator-seeded categories without existing canon anchors. Under honest-rigor, these may face earning-test pressure. Recommendation: admit R1–R4 as canon-continuous (re-naming + governing existing vocabulary), admit R7 (hold-as-tension) as ADR-0001 extension, treat R5 + R6 as operationally-valid but NOT slug-admitted (prose-only per ADR-0062/0063/0064 precedent) unless cross-tradition convergence fires later.

### D.3 Honest-rigor earning-test per response-category

Each R must pass (α) operationally-specifiable AND (β) N≥2-independent canon-anchor or cross-tradition support.

| R | α | β | Verdict |
|---|---|---|---------|
| R1 acknowledge | PASS (no-op = record in canon) | PASS (F1 §4.7 absent-evidence, F4 §5.4 held-tension recording) | ADMIT |
| R2 contest | PASS (protocol routed) | PASS (F1 §4.4 + F4 §5.3 + structural-legitimacy.md:39) | ADMIT |
| R3 amend | PASS (canon-review op) | PASS (ADR-0041 text-authoritative authoring; ADR-0046 propose-amendment = Intent; canon-review machinery) | ADMIT |
| R4 escalate | PASS (rule-stack routing) | PASS (ADR-0046 3-level; F1 §4.7; F4 §5.3) | ADMIT |
| R5 withhold | PARTIAL (intuitively specifiable; no protocol-surface in canon) | WEAK (no direct canon anchor; single-tradition engineering-ops) | PROSE-ONLY, NO SLUG |
| R6 rollback | PARTIAL (intuitively specifiable; no protocol-surface in canon) | WEAK (no direct canon anchor; adjacent to `repaired`) | PROSE-ONLY, NO SLUG |
| R7 hold-as-tension | PASS (ADR-0001 shape) | STRONG (ADR-0001 + F1 §4.5 + F4 §5.4) | ADMIT |

**Aggregate**: 5 admitted (R1+R2+R3+R4+R7), 2 prose-only-no-slug (R5+R6). Clean honest-rigor filtering without over-admission.

## E. F4 inheritance check

F4 §5 defines a 3-component precedence-rule: default + context-overrides + appeal-protocol (D4 hybrid). F5's appeal-shape can either:

- **G2 inherit F4 appeal-protocol wholesale** — cleanest; F4's Ostrom-3-level appeal-routing already handles who-decides escalation. F5 names response-selection; F4's existing appeal-protocol handles which-actor-at-which-rule-level adjudicates the response.
- **G3 novel response-specific protocol** — unnecessary; would duplicate F4.

**Recommendation**: G2. F5 inherits F4 appeal-protocol wholesale (F4 already generalized from F1 to multi-layer) — explicit "contestation mechanism" inheritance note in F5's §structural doctrine.

## F. F1 inheritance check

F1 governs sensor-inputs. F5 consumes them. Overlap risk: F5's R2 (contest) must not re-implement F1 §4.4 proxy-contestation machinery. **Recommendation**: F5 forward-refs F1 §4.4 for contest-routing-at-sensor-layer; F5 names the response-selection layer distinctly.

## G. Structural-legitimacy relationship (H-axis)

Three shapes available:

- **H1 extend ADR-0042** — structural-legitimacy coupling names legitimacy; F5 names operational-response. Extension would require treating response-doctrine as legitimacy-maintenance machinery. Reasonable but slight scope-mismatch (structural-legitimacy is about *whether* authority-consequence couples; F5 is about *what happens next* after coupling signals a gap).
- **H2 sibling-doctrine** (F6 pattern) — F5 and F6 sibling-sibling to structural-legitimacy. F6 = taxonomy of breakdown; F5 = doctrine of response-after-recognition. Both operate over the gap between *what-coupling-commits-to* and *what-is-happening*.
- **H3 hybrid with F6 alignment** — F5 pairs more tightly with F6 (recognition→response pair) than with structural-legitimacy. Hybrid: F5 is sibling-doctrine to structural-legitimacy AND operationally-paired with F6 (F6 recognize, F5 respond).

**Recommendation**: H3 hybrid. F5 cites structural-legitimacy as substrate (coupling is *what* F5 maintains), cites F6 as operational-pair (F6 recognize → F5 respond), and inherits ADR-0042's foundation-doc-promotion template. This matches F6's shape-parallel but is distinct from F6's H2 (which named sibling-doctrine without explicit operational-pairing).

## H. Rule-stratification applicability (C-axis)

ADR-0046 Ostrom 3-level inheritance is cleanly applicable:

- Constitutional rule layer — who has standing to invoke which response-category (contestant-eligibility; amendment-authorship; rollback-authority).
- Collective-choice rule layer — the protocol by which response is selected in a given case; the criteria for escalation.
- Operational rule layer — routine application of response-selection (pool-operator patches a sensor-discrepancy via amend; individual-attester retracts a mis-attestation via amend).

**Recommendation**: C1 inherit ADR-0046 Ostrom 3-level. This is the fourth application (after F1, F4, F6); pattern is now convention.

## I. Cluster-counting for earning-test per response-category

Honest-rigor ≥2-cluster independent-tradition support per admitted response-category:

- **R1 acknowledge-and-record**: (a) Ostrom rules-in-use documentation discipline; (b) canon-review governance-memory pattern; (c) linguistic-closure.md (claim lifecycle, attestation decay). ≥2 clusters. PASS.
- **R2 contest**: (a) Ostrom conflict-resolution principle (Principle 6); (b) polycentric-governance mutual-adjustment literature; (c) structural-legitimacy contestability-as-coupling-maintenance; (d) Gilbert/Rescher procedural-justice. ≥2 clusters. PASS.
- **R3 amend-declared-state**: (a) constitutional-amendment literature (List/Pettit; legal scholarship); (b) ADR-0041 text-authoritative canon-review; (c) Debian §4/§5/§6 enumerated-powers-by-role amendment threshold; (d) Gilbert Pettit joint-commitment revision. ≥2 clusters. PASS.
- **R4 escalate**: (a) Ostrom 3-level polycentric; (b) VSM S4/S5 operational-mode layering; (c) recursive-democracy subsidiarity. ≥2 clusters. PASS.
- **R7 hold-as-tension**: (a) ADR-0001 pluriversal-incommensurability (the primary canon anchor); (b) dialectical-tension tradition (Arendt, Mouffe); (c) F1/F4 held-epistemic-tension precedent. ≥2 clusters. PASS.

All 5 admitted response-categories pass cluster-counting threshold. R5 + R6 (withhold + rollback) fail cluster-counting at heavier-admission threshold but are operationally-valid; prose-only-no-slug disposition matches ADR-0062/0063/0064 precedent.

## J. Open questions surfaced

1. **Intent-pressure reframe handling at slug-level**: should F5 admit a new slug for the "gap between sensor-evidence and declared intent/commitment-authored-state"? Candidate slug: `epistemic-gap` (already partially live in governance-artifacts.md:140 *"observable epistemic gap"*). Recommendation: admit `epistemic-gap` as derived glossary slug (v16→v17); names the gap-surface without dynamical-metaphor; closes the intent-pressure demotion residue structurally by giving the response-doctrine its trigger-surface noun.

2. **Response-category slug strategy**: do R1–R4+R7 need slugs, or are they prose-only? R7 `hold-as-tension` is already prose-live via ADR-0001; admitting as slug may over-engineer. R1 `acknowledge-and-record` is a compound phrase; slug would be awkward. R2 `contest` / R3 `amend-declared-state` / R4 `escalate` are already canon-live verbs.
   **Recommendation**: D2 admit 2 slugs — `epistemic-gap` (trigger-noun) + `response-doctrine` (meta-noun naming F5's subject). Category-names stay prose-only (ADR-0053 precedent).

3. **Reversibility axis for R5/R6 handling**: canon currently has no reversibility taxonomy. R5 (withhold) and R6 (rollback) are reversibility-sensitive by nature. Should F5 admit a reversibility property-on-response in anticipation of future ADR? Recommendation: NO — scope-creep; park as F5 open-question for future-ADR trigger.

4. **F3 forward-ref at actor-capture response**: F6.7 forward-references F3 for actor-capture governance-response. F5.2 (contest) routing to F3 for actor-capture cases — how does F5 name this without duplicating F6's forward-ref? Recommendation: mirror F6 discipline — F5 forward-refs F3 for actor-capture-specific-response at appropriate sub-section; does not wait for F3 to land.

5. **`actuator-logic` as slug candidate**: the doc-name itself. Candidate slug: `actuator-logic` or `response-doctrine`. Recommendation: `response-doctrine` is more concept-load-bearing; `actuator-logic` is the foundation-doc title. Admit `response-doctrine` as the canonical concept slug (covers the domain); the title stays `actuator-logic` matching audit-v2 + Phase 4 scoping wording.

## K. Proposed 5-file atomic-bundle allowlist

Conditional on D2 slug admission:

1. **NEW** `docs/research/canon-decisions/0076-actuator-logic-foundation-doc-promotion.md` (~150–180 lines)
2. **NEW** `docs/foundations/actuator-logic.md` (~220–260 lines)
3. **EDIT** `docs/research/planning/canon-review-protocol.md` §1 (alphabetical insertion)
4. **EDIT** `docs/README.md` Foundations listing (alphabetical insertion)
5. **EDIT** `docs/research/concepts-p2p-wiki.yaml` v16→v17 (+2 slug entries: `epistemic-gap`, `response-doctrine`)

If operator selects D1 (no slugs), drop file 5 and keep 4-file atomic-bundle.

---

## End audit manifest
