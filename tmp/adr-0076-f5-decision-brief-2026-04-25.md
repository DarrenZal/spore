# ADR-0076 F5 actuator-logic — Decision Brief

**Date**: 2026-04-25
**Sandbox-plan-file contingency**: `~/.claude/plans/` write denied per spore:ADR-0072 precedent; plan content consolidated here + audit manifest companion.
**Audit manifest**: `tmp/adr-0076-f5-audit-manifest-2026-04-25.md`
**Preflight manifest**: `tmp/adr-0076-preflight-manifest.txt`

---

## §1. Step 0.5 Audit Findings Summary

1. **`actuator` is a clean naming slot.** Zero canon-body use outside F1/F4/F6 forward-refs. Three prior foundation docs converge on the same reframed post-ADR-0056 scope phrase ("response-to-mismatch when sensor-evidence disagrees with declared intent or commitment-authored-state"); the canonical 5-type response taxonomy (alert / proposal / routing / human review / no change) is pre-declared verbatim across F1/F4/F6 forward-refs.

2. **Intent-pressure residue cleanly handled.** The ADR-0059c-shape governance-artifacts palate-cleanser (`2427d5f`) already replaced the residual intent-pressure phrasing at governance-artifacts.md:140 with *"observable epistemic gap"*. F5 can inherit this phrasing as the canonical gap-surface noun; three alternate reframes available (§C in audit). Zero risk of re-importing the demoted term if F5 is authored with the reframed vocabulary from the start.

3. **Response-category taxonomy admits 5 clean categories + 2 operationally-valid-but-no-slug.** Under honest-rigor ≥2-cluster independent-tradition support:
   - **ADMIT** (α+β PASS): R1 acknowledge-and-record, R2 contest, R3 amend-declared-state, R4 escalate, R7 hold-as-tension.
   - **PROSE-ONLY NO SLUG** (α PARTIAL, β WEAK): R5 withhold, R6 rollback — operationally valid but single-tradition engineering-ops support; no canon anchor. Same discipline as ADR-0062/0063/0064 scope-conditioning precedent.

4. **Response-modes share a common principled-rule.** Canon's pre-existing vocabulary for response-shapes (amend / contest / escalate / repair / revise / hold / routing) maps cleanly to a small response-set that recurs across F6's 8 failure-categories — response-modes are NOT 1:1 with F6 categories. This strongly favors **B1 unified principled-rule** shape (F1 template) over **B2 per-category** shape (F6 template). Key principled-rule: *response-selection is governed by gap-shape + canonical text-type per F4 + rule-level per ADR-0046; the choice-of-response routes through existing canon machinery rather than introducing new response-protocols*.

5. **F4 appeal-protocol cleanly inheritable.** F4 §5 (default + context-overrides + appeal-protocol) already generalized contestation-routing from F1 to multi-layer. F5 inherits G2 wholesale — no novel contestation protocol needed.

6. **Structural-legitimacy relationship is H3 hybrid.** F5 pairs more tightly with F6 operationally (F6 recognize → F5 respond) than with ADR-0042 directly. F5 cites structural-legitimacy as substrate (coupling is what F5 maintains) AND cites F6 as operational-pair (recognition→response). Matches F6's shape-parallel but with explicit operational-pairing (distinct from F6's H2 pure sibling-doctrine).

7. **New novel slug candidate surfaced**: `epistemic-gap` — already canon-live via governance-artifacts.md:140 post-ADR-0059c palate-cleanser. Admitting this slug structurally closes the intent-pressure demotion residue by giving response-doctrine its trigger-surface noun. Paired with `response-doctrine` (the meta-noun naming F5's subject), yaml v16→v17 bumps cleanly.

## §2. Child-Proposed Response-Category Taxonomy

The doctrine admits **5 response-categories at slug-ceremony level** (if D2 ratified) AND names **2 operationally-valid non-slug response-shapes** in prose-body:

### Admitted as canon-response-categories (α+β PASS)

- **R1 acknowledge-and-record** — Default minimal response: the gap is logged as canon-legible, no further action triggered. Operationally: add to canon-legible held-epistemic-tension list; no intervention. Cluster support: Ostrom rules-in-use; canon-review governance-memory pattern; linguistic-closure.md.
- **R2 contest** — Protocol-based challenge to sensor / attestation / agent-summary / text / graph layer via F4 appeal-protocol. Routes through F1 §4.4 proxy-contestation for sensor-layer contests; F4 §5.3 appeal-protocol for inter-layer contests. Cluster support: Ostrom Principle 6 conflict-resolution; polycentric-governance mutual-adjustment; structural-legitimacy contestability.
- **R3 amend-declared-state** — Canon-review authoring that updates commitment-authored-state or specification-text to reflect observed reality. Text-authoritative path per F4 §5.1 default. Cluster support: constitutional-amendment literature; ADR-0041 text-authoritative; Debian/PEP enumerated-powers-by-role amendment.
- **R4 escalate** — Route to next Ostrom rule-level per ADR-0046. Operational → collective-choice → constitutional. Shape-parallel to F1 §4.7 + F4 §5.3 discipline. Cluster support: Ostrom 3-level polycentric; VSM S4/S5; recursive-democracy.
- **R7 hold-as-tension** — When all other responses fail at all rule-levels, record the gap as held-epistemic-tension (ADR-0001 shape). Cluster support: ADR-0001; F1 §4.5; F4 §5.4; dialectical-tension tradition.

### Operationally-valid, NO slug admission (prose-only per ADR-0062/0063/0064 precedent)

- **R5 withhold / pause** — Halt actuation pending resolution (applies especially to irreversible-action cases). Operationally specifiable but single-tradition engineering-ops support; no existing canon anchor; doesn't jointly pass earning-test at heavier-admission threshold.
- **R6 rollback / restore** — Revert to prior-legitimate state (applies to executed-but-unratified changes). Same earning-test profile as R5.

R5 + R6 are named in F5's body-prose as "recognizable operational response patterns that canon acknowledges without canonically classifying" — preserves honesty about their existence, declines to over-engineer their canonization.

### NOT a new response-category

Note for §Consequences: the 5-type enumeration at F6:45 (alert / proposal / routing / human review / no change) was the pre-declared informal shape. F5's R1–R4+R7 taxonomy **refines** this enumeration:
- "alert" ≈ R1 acknowledge-and-record
- "proposal" ≈ R3 amend-declared-state
- "routing" ≈ R4 escalate
- "human review" ≈ R2 contest (with F1/F4 appeal-routing as mechanism)
- "no change" ≈ R1 degenerate case OR R7 hold-as-tension

F5's taxonomy discharges the F6:45 forward-ref by providing a finer-grained and cross-tradition-anchored response-taxonomy.

## §3. 10-Axis Decision-Brief (Child Recommendations)

| Axis | Options | Child recommendation | Rationale |
|------|---------|----------------------|-----------|
| **A scope** | A1 full response-doctrine across all sensor/attestation/agent-summary disagreement shapes / A2 narrower (sensor-only) / A3 principled-rule across categories | **A1** | Matches F6 A1 all-8; F4/F6 forward-refs both expect full response-doctrine scope; honest-rigor says admit the scope canon already committed to |
| **B structure** | B1 unified principled-rule (F1 B1 shape) / B2 per-category (F6 B2 shape) / B3 parameterized table | **B1 unified principled-rule** | §1.4 finding: response-modes share common principled-rule (gap-shape + text-type + rule-level govern choice); NOT structurally heterogeneous like F6's 8 failure-categories; Tier B template inheritance with honest-rigor per-axis divergence — F6 diverged from F1 B1 where structure demanded it; F5 re-converges on B1 where structure supports it |
| **C rule-stack** | C1 inherit ADR-0046 Ostrom 3-level / C2 decline | **C1** | Fourth application; now convention. Response-selection decomposes cleanly across rule-levels (who has standing to invoke / protocol for selection / routine application) |
| **D slug admissions** | D1 none / D2 1–2 slugs / D3 multiple | **D2 admit 2 slugs** | `epistemic-gap` (trigger-noun, closes intent-pressure residue structurally) + `response-doctrine` (meta-noun naming F5's subject). Response-category names stay prose-only (R1–R4+R7 are compound phrases or already-canon-live verbs). yaml v16→v17 |
| **E intent-pressure reframe** | E1 pure reframe / E2 reframe with explicit ADR-0056 cite-and-replace / E3 avoid by restricting scope | **E2** | Honest-rigor default; explicitly name in §Context that F5's scope-phrase is the post-ADR-0056 reframed wording inherited from F1/F4/F6 forward-refs; cite governance-artifacts.md:140 "observable epistemic gap" as the structurally-clean trigger-surface |
| **F registration** | F1 full 5-file atomic-bundle / F2 4-file (if D1) | **F1** | D2 requires yaml bump; matches F1/F6 pattern |
| **G contestation mechanism** | G1 protocol-based (F1/F6 precedent) / G2 inherit F4 appeal-protocol wholesale / G3 novel response-specific protocol | **G2 inherit F4 wholesale** | F4 already generalized from F1 to multi-layer; F5's R2 (contest) routes through F4 §5.3 appeal-protocol; no duplication needed |
| **H structural-legitimacy relationship** | H1 extend ADR-0042 / H2 sibling-doctrine (F6 precedent) / H3 hybrid with F6 alignment | **H3 hybrid** | F5 cites structural-legitimacy as substrate AND cites F6 as operational-pair (F6 recognize → F5 respond); distinct from F6's pure H2 (which was sibling-doctrine without explicit operational-pairing) |
| **I cross-repo** | I1 narrow Spore-only / I2 note IC/PM applicability | **I1** | Matches F1/F4/F6 precedent; IC + PM alignment ADRs land post-F5 per Wave-N cross-repo queue; DH-PM-1 counsels caution on pre-alpha PM additive work |
| **J scope-narrowness** | J1 narrow / J2 include parking cleanup | **J1 narrow** | Parking items (stigmergy.md:30/81/88 + constitutional-artifacts.md:122 intent-pressure residues; 4 more from ADR-0056 R-IP-1) stay deferred; F5 is doctrine-authoring, not parking-cleanup |

## §4. Risks + Open Questions

### R1 — Response-category earning-test under stress

**Risk**: operator may pressure-test R5+R6 (withhold+rollback) as admission candidates despite honest-rigor failing them at heavier threshold. This is the spore:ADR-0069 Reading A vs B tension-surfacing shape.

**Mitigation**: §2 explicitly names R5+R6 as operationally-valid prose-only; honest-rigor §I cluster-counting documented. Operator can flip to ADMIT if they judge differently, but child-recommendation + rationale is on record for audit-then-propose discipline.

### R2 — B1 unified vs B2 per-category tension

**Risk**: F6 just landed with B2 per-category divergence from F1's B1. Re-converging on B1 at F5 might read inconsistent.

**Mitigation**: This is exactly the ADR-0075 §5 method-precedent ("Tier B template inheritance with honest-rigor per-axis divergence — template shape adapts to substrate shape, not the reverse"). F5 re-convergence on B1 is the canon-aware application of that discipline. Document explicitly in §Consequences.

### R3 — Intent-pressure reframe discipline

**Risk**: F5 is the first ADR authored with intent-pressure as its historical trigger-surface (audit-v2 §6.4 item 5). Careless authoring could re-import the demoted term.

**Mitigation**: E2 disposition explicitly requires §Context to name the ADR-0056 demotion + reframe the trigger-surface. "observable epistemic gap" (governance-artifacts.md:140) + "disagreement between sensor-evidence and declared intent or commitment-authored-state" (F1/F4/F6 forward-ref phrase) are the approved replacement phrases. Audit-manifest §C pre-declares these.

### R4 — 5-type F6:45 enumeration vs 5-category F5 taxonomy

**Risk**: F6 line 45 informally enumerates "alert / proposal / routing / human review / no change" as the 5 response types. F5's taxonomy is R1–R4+R7 (5 categories). Mapping is approximate not 1:1.

**Mitigation**: §2 last note: F5 taxonomy **refines** rather than replicates F6:45; explicit mapping in §Consequences discharge-of-forward-ref discussion. F6:45 was advisory, not specified — F5 is the specification.

### R5 — `response-doctrine` slug vs `actuator-logic` title mismatch

**Risk**: the foundation-doc title is `actuator-logic` (inherited from audit-v2 + Phase 4 scoping) but the most concept-load-bearing slug is `response-doctrine`. Reader may find the naming-asymmetry confusing.

**Mitigation**: §1 Core Claim in the foundation-doc body opens with: *"Actuator-logic is Spore canon's response-doctrine..."* — binds the title to the concept explicitly. Canonical slug `response-doctrine`; title `actuator-logic` for audit/scoping-continuity.

### Q1 — Should F5 admit a reversibility axis for R5/R6?

Canon has no reversibility taxonomy. R5 (withhold) and R6 (rollback) are reversibility-sensitive by nature. Park as F5 open-question for future-ADR trigger. Not admitted in F5 scope.

### Q2 — F3 forward-ref at actor-capture response

F6.7 forward-references F3 for actor-capture governance-response. F5.R2 (contest) for actor-capture failures routes to F3. How does F5 name this without duplicating F6's forward-ref?

**Recommendation**: single sentence in F5 body-prose: *"Actor-capture failures per F6.7 route to F3 actor-governance (forthcoming) for governance-response; F5's contest-discipline applies at the sensor/representation/commitment layers F6.1–F6.6 and F6.8 name."*

### Q3 — Phase 5 section-level status labels

F5 is deliberately tag-agnostic. Phase 5 sweep (canon-rebuild-arc follow-on, not yet scheduled) handles this in one pass. Sections structured to be tag-ready but not pre-tagged. Standard per F1/F4/F6.

### Q4 — Should F5 include a `response-protocol-per-rule-level` table?

F1/F4/F6 all include rule-level decomposition. F5 can either author a per-response-category rule-level table (similar to F6's per-category tables) OR decompose at the §3 Structural Doctrine layer only (F1 shape). **Recommendation**: B1 unified → rule-level decomposition at §3 Structural Doctrine level, with per-category rule-level brief notes in §4 doctrine-per-category subsections. Matches F1 exactly.

## §5. Proposed 5-File Atomic-Bundle Allowlist

Conditional on D2 ratification:

1. **NEW** `docs/research/canon-decisions/0076-actuator-logic-foundation-doc-promotion.md` (~160 lines)
2. **NEW** `docs/foundations/actuator-logic.md` (~230 lines)
3. **EDIT** `docs/research/planning/canon-review-protocol.md` §1 (alphabetical insertion — 1 line)
4. **EDIT** `docs/README.md` Foundations listing (alphabetical insertion — 1 line)
5. **EDIT** `docs/research/concepts-p2p-wiki.yaml` v16→v17 with 2 new slugs:
   - `epistemic-gap` — observable divergence between declared intent or commitment-authored-state and sensor-reported or attested reality; the trigger-surface for F5 response-doctrine (structurally replaces the demoted intent-pressure as foundation-level trigger-noun per ADR-0056).
   - `response-doctrine` — the canonical selection-protocol for operational response to a recognized failure (per F6) or epistemic-gap; names the doctrine F5 actuator-logic specifies.

If operator flips to D1 (no slugs), drop file 5 → 4-file atomic-bundle.

---

## §6. Projected Execution Duration

- **Steps 3–4 (draft authoring)**: ~6–8 min (body authoring is the cost-driver; ~160-line ADR + ~230-line foundation doc)
- **Step 5 (validation)**: ~30s
- **Step 6 (active flip + push)**: ~30s
- **Step 7 (verification manifest)**: ~30s
- **Session-atomic total**: projected 8–12 min (comparable to F6 at 8m21s; F5 is mid-weight body; substrate-heavy context work already done in audit)

---

## §7. End of Decision-Brief

Return to orchestrator at Step 2 handback. Awaiting operator ratification of 10-axis dispositions before Steps 3–7 execution.
