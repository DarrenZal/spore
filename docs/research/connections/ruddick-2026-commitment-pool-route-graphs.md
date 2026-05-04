---
doc_id: spore.connection.ruddick-2026-commitment-pool-route-graphs
doc_kind: research
research_subkind: bridge_note
status: draft
disposition: unresolved tension
date: 2026-05-04
author: darren-zal
depends_on:
  - spore.research.external.ruddick-2026-commitment-pool
  - spore.project-vision
  - spore.governance-artifacts
  - spore.structural-legitimacy
  - spore.actuator-logic
  - spore.failure-modes
  - spore.actor-governance
  - spore.representation-authority
  - spore.instance-model
  - spore.maintenance-economics
relates_to:
  - spore.term.intent-pressure
  - spore.connection.johar-commitment-economy
  - spore.connection.promise-foundation-commitment-protocol
  - spore.connection.rtime-cyclos-spore-commitment-weaving
  - spore.canon-decision.federation-encounter-composition-pattern
  - spore.canon-decision.field-rule-level-stratification
  - spore.canon-decision.reproduction-continuity-primitive-admission
  - spore.canon-decision.sociality-side-b-plus-primitive
concepts:
  - commitment-pooling
  - curation-valuation-limitation-exchange
  - attestation-of-execution
  - response-doctrine
  - failure-mode-class
  - actor-standing
  - federation-encounter
  - rule-in-use
sources:
  - type: primary
    rid: orn:source:ruddick-2026-cpp
    title: "Commitment-pool route graphs for finance and mutual aid"
    note: "William O. Ruddick, Grassroots Economics Foundation, April 2026; SSRN abstract_id=6606438; archived at spore.research.external.ruddick-2026-commitment-pool 2026-04-23. PDF original at ~/Downloads/ssrn-6606438.pdf consulted for formal-element verification per Phase 1 PDF cross-check discipline."
---

# Ruddick (2026) Commitment-Pool Route Graphs ↔ Spore Substrate-Grammar Map

**Caveat (read first):** This is the Spore-side substrate-grammar map for Will Ruddick's April 2026 SSRN working paper. IC, BKC, and PM all carry existing draft bridge artifacts citing this paper; this note closes the upstream-substrate gap they build atop. It is **canon-intake-track**, not outreach-track — held v3 peer review and Q7 outreach draft (`project_will_ruddick_cpp_review_held.md`) are separate work and remain held. Cross-repo delta (§7) is descriptive comparison only — it makes no recommendation for action at IC/BKC/PM/bregion per stream-scope discipline.

---

## 1. Artifact profile

- **Type:** working paper (formal model + theorem + worked constructions); 44 pages; SSRN 6606438; April 2026.
- **Reliability:** doc-rich (cited references list clean; conflict-of-interest declared honestly — author affiliated with Grassroots Economics, but theorem does not depend on those artifacts per stated scope).
- **Study slice:** §1 framing → §3 formal framework → §4 realization theorem → §5–§6 worked constructions (finance + mutual aid) → §7 limits + repair-modes + boundary case → §8 software-verification conditions → §9 operationalization test → Appendix A test checklist → Appendix B fully-enumerated memory-based ROLA witness. Out-of-scope-for-intake: detailed reading of all 24 referenced works.
- **Markdown vs PDF discrepancy:** the archived markdown at `docs/research/external/ruddick-2026-commitment-pool-route-graphs.md` was converted via `pdftotext -layout` and the archivist note (lines 28–32) explicitly warns that formal definitions may carry symbol garbling. Phase 1 cross-check found ONE pdftotext quirk: `↦` (LaTeX `\mapsto`) renders as `7→` in the markdown body (visible in Def 6 prose). All other formal elements render cleanly in both forms.

### Formal-element verification log

Every formal element used as C-claim anchor below has been cross-checked against `~/Downloads/ssrn-6606438.pdf` per Phase 1 discipline:

| Formal element | Markdown rendering | PDF location | Verified |
|---|---|---|---|
| Def 1: `I = (S, A, T, Π, Σ)`; `T ⊆ S × A × Γ × S` | clean | pdf-p7-8 | ✓ |
| Def 2: trajectory `τ_H(σ)` | clean | pdf-p8 | ✓ |
| Def 3: commitment `C = (i, j, K, b, q, χ, t, e, r, m)`; `χ ∈ {future, past}` | clean | pdf-p8 | ✓ |
| Def 4: pool `P = (R, V, L, F, H, G)` | clean | pdf-p9 | ✓ |
| Def 5: route graph `G_P = (𝒫, E)`; `e=(P_u, P_v)` | clean | pdf-p9 | ✓ |
| Def 6: `Φ : I ↦ G_P` (4 conditions: `α_Φ`, `ω_Φ`, ψ-translation, observable preservation) | `↦` shows as `7→` (pdftotext quirk; cited as `↦` below) | pdf-p10 | ✓ |
| Def 7: `U = {issue, transfer, collateralize, guarantee-invoke, settle, default/remedy}`; `ψ(u) = (∆R, ∆V, ∆L, ∆F, ∆H, ∆G, ρ)` | clean | pdf-p10 | ✓ |
| Table 1: 6-row primitive translation templates (target interfaces + required guards/outputs) | clean (whitespace-preserved layout, not markdown table) | pdf-p11 | ✓ |
| Def 8: `≡_H` stutter-insensitive observational equivalence; `Obs*(τ_H^X(σ)) = Obs*(τ_H^Y(σ))` | clean | pdf-p12 | ✓ |
| Def 9: Primitive completeness | clean | pdf-p13 | ✓ |
| Def 10: `U^r` (12 ops) | clean | pdf-p13 | ✓ |
| Def 11: realization classes (direct / repair-extended / externally-anchored) | clean | pdf-p14 | ✓ |
| Theorem 1: constructive realization | structural prose clean (full PDF read deferred — Lemmas 1–3 + proof shape verified in markdown body sufficient for C13's structural claim) | pdf-p18-19 | ✓ structural |

C-claim anchors below carry pdf-p<page> per RID + anchor convention.

---

## 2. Subsystem inventory

Twelve subsystems extracted from Ruddick's formal apparatus. Each row carries a PDF-verified flag from §1 above.

| Subsystem | Formal name | Definition | Verified |
|---|---|---|---|
| Source institution | Institution-as-state-machine | `I = (S, A, T, Π, Σ)` per Def 1; finite states, action set, guarded transitions, priority ordering, settlement operator | ✓ |
| Settlement operator | `Σ` institution-relative | maps executable obligations + inventories → realized settlement outputs; institution-relative (retail wallet redemption / CCP novation+waterfall / grain bank inventory release) | ✓ |
| Commitment | 10-element tuple | `C = (i, j, K, b, q, χ, t, e, r, m)`; issuer/recipient/scope-set/body/quantity-formula/temporal-orientation/time/evidence/remedy/metadata | ✓ |
| Temporal orientation | `χ ∈ {future, past}` | future ⇒ promissory; past ⇒ certification-attestation; both pool-admissible | ✓ |
| Commitment pool | 6-interface tuple | `P = (R, V, L, F, H, G)`; Registry/Value-Index/Limiter/Fee-Policy/Vault-Settlement/Governance | ✓ |
| Route graph | `G_P = (𝒫, E)` | pools as nodes; directed edges admissible if overlap + guard constraints satisfied | ✓ |
| Realization mapping | `Φ : I ↦ G_P` | state embedding + observation projection + primitive translation schema + observable preservation at macro-step boundaries | ✓ |
| Primitive basis | `U` (6 primitives) | `{issue, transfer, collateralize, guarantee-invoke, settle, default/remedy}`; ψ(u) updates only stable interfaces (R,V,L,F,H,G) | ✓ |
| Observational equivalence | `≡_H` | stutter-insensitive over horizon H; preserves macro-step settlements + residual obligations + priority/loss outcomes; hides internal microstructure | ✓ |
| Repair basis | `U^r` (12 ops) | `{reroute, defer, renegotiate, revalue, relimit, recurate, guarantor-invoke, insurance-invoke, support-request, adjudicate, override, re-enter}` | ✓ |
| Realization classes | direct / repair-extended / externally-anchored | per Def 11 | ✓ |
| Operational falsification criterion | per §3.5 | a mechanism falsifies direct-realization if any source transition cannot factorize through U, or required state cannot fit (R,V,L,F,H,G), or Σ cannot operationalize, or priority-loss observables differ post-projection, or decisive governance/repair depends on non-representable discretion | ✓ |

---

## 3. Mapping table — Ruddick subsystems → Spore canon

Mapping uses the canonical comparative-intake shape: **Component | Maps To | Layer | Strength**. Forced mappings skipped honestly.

| Ruddick element | Spore mapping | Layer | Strength |
|---|---|---|---|
| Commitment tuple `C` (10 fields) | Spore Commitment primitive (project-vision.md core thesis); body/evidence/remedy/quantity slots align with `b/e/r/q` tuple fields | primitive-bullet | STRONG |
| Past-oriented certification (χ=past) | Spore Evidence primitive + `attestation-of-execution` derived slug; certifications are pool-admissible commitments AS evidence-shaped attestations | primitive-cross | STRONG |
| Future-oriented promise (χ=future) | Spore Commitment primitive (default reading); aligned with promise-foundation lineage | primitive-bullet | STRONG |
| CVLE four-functions (curation/valuation/limitation/exchange) | `curation-valuation-limitation-exchange` glossary slug already in v20; CVLE is canonical decomposition of pool operations on commitments | glossary-slug (existing) | STRONG |
| RVLFHG six-interfaces | implementation-layer pattern below Spore canon (PM-layer / koi-processor-layer); not primitive-shaped | infrastructure | WEAK |
| Source-model `(S, A, T, Π, Σ)` (Def 1) | Field rule-stratification (ADR-0046) operational substrate — guarded transitions T over states S with priority Π = formal substrate for Ostrom rule-in-use | foundation (Field) | MEDIUM |
| Route graph `G_P` (Def 5) | Federation-encounter pattern (ADR-0068) composition substrate at finance/mutual-aid layer — pools as bounded Field-conditions, edges as encounter-events | pattern-composition | MEDIUM |
| Settlement operator Σ | `settlement-operator` derived glossary slug ADMITTED via ADR-0084 (yaml v20→v21, 2026-05-04); ≥2-cluster operational threshold (Mehrling layered-claims + CPMI-IOSCO settlement-finality + Lamport TLA+ partial + Ruddick primary) | vocab/glossary (ADMITTED) | STRONG |
| Realization mapping Φ + observation projection ω_Φ | F4 representation-authority text-authoritative-vs-graph-derived discipline (ADR-0041 + ADR-0074) | doctrine | MEDIUM |
| Stutter-insensitive equivalence `≡_H` | F4 §"observable institutional state at chosen level" — formal substrate for F4's representation-precedence doctrine | foundation (F4) | STRONG |
| Primitive basis `U` + ψ schema (Def 7, Table 1) | composes ADR-0050 joint-commitment + ADR-0049 reproduction-continuity verbs at operational-rule layer; not new Spore primitives — Ruddick `U` is finance-domain primitive set, Spore primitives are coordination-domain | infrastructure → primitive (composition; cross-domain) | MEDIUM |
| Repair basis `U^r` (12 ops) | F5 actuator-logic five admitted response-categories — direct alignment: reroute/defer/relimit/recurate/revalue/guarantor-invoke/insurance-invoke/support-request → F5 R1+R3+R4; adjudicate/override/re-enter → F5 R2+governance | foundation (F5) | STRONG |
| Stewarded pool / governance G + parameter changes | F3 actor-governance (governance bodies receive feedback per F3 §4.5/§6) + governance-memory pattern + ADR-0046 collective-choice rules | foundation (F3) | STRONG |
| Realization classes (direct / repair-extended / externally-anchored) | F6 failure-modes 8-category taxonomy + F8 external-validation-loop boundary | foundation (F6+F8) | STRONG |
| Operational falsification criterion | F8 external-validation-loop §6 falsifiability category; aligns with paper-internal canon-method | foundation (F8) | MEDIUM |
| Memory-based ROLA witness (Appendix B) | ADR-0078 min-viable-spore-instance §"Minimum Viable Composition" — no ledger required; recognized group memory + steward attestation suffice | foundation (instance-model) | STRONG |
| Promise-theoretic framing of commitment (§2.3 Burgess/Bergstra) | aligns with `spore.connection.promise-foundation-commitment-protocol` lineage; not new substrate | connection-layer | MEDIUM |

---

## 4. Claim Register — C-claims (paper findings)

Anchors carry RID `orn:source:ruddick-2026-cpp` and pdf-p<page> per intake protocol.

- **C1** [confidence: high] [anchor: §1 · orn:source:ruddick-2026-cpp · pdf-p2-3] CPP defines four core protocol functions — curation, valuation, limitation, exchange — implemented through six interfaces (Registry, Value Index, Limiter, Fee Policy, Vault/Settlement, Governance). Governance is treated as stewardship environment, not a fifth protocol function.

- **C2** [confidence: high] [anchor: §3.1 Def 1 · orn:source:ruddick-2026-cpp · pdf-p7-8] Source institution modeled as `I = (S, A, T, Π, Σ)`: state space, action set, guarded transition relation `T ⊆ S × A × Γ × S`, priority ordering, settlement operator. Σ is institution-relative (retail wallet redemption / CCP novation+waterfall / grain bank inventory release).

- **C3** [confidence: high] [anchor: §3.2 Def 3 · orn:source:ruddick-2026-cpp · pdf-p8] Commitment formalized as 10-element tuple `C = (i, j, K, b, q, χ, t, e, r, m)`: autonomous issuer, recipient/holder/awardee, scope-set, promise body, quantity-formula, temporal-orientation `χ ∈ {future, past}`, time conditions, evidence requirements, remedy/fallback/revocation rule, metadata.

- **C4** [confidence: high] [anchor: §3.2 Def 3 temporal-orientation note · orn:source:ruddick-2026-cpp · pdf-p8-9] Past-oriented certifications (χ=past) need not be redeemable against issuer in the way future-oriented vouchers are; they may still be tokenized, held, transferred, pooled, and accepted by pools in exchange for other commitments, subject to pool curation/valuation/limitation/evidence/governance rules. Both future-oriented promises and past-oriented certifications are pool-admissible commitments; their settlement semantics differ.

- **C5** [confidence: high] [anchor: §3.2 Def 4 · orn:source:ruddick-2026-cpp · pdf-p9] Pool implementation `P = (R, V, L, F, H, G)`: Registry implements curation, Value Index valuation, Limiter limitation, Fee Policy + Vault/Settlement exchange. Governance G authorizes parameter changes and is part of stewardship environment, not a fifth protocol function.

- **C6** [confidence: high] [anchor: §3.2 Def 5 · orn:source:ruddick-2026-cpp · pdf-p9] Route graph `G_P = (𝒫, E)`: pools as nodes, directed edges admissible only if overlap + guard constraints satisfied. Discovery registries and routing services are auxiliary coordination functions, not separate claim primitives.

- **C7** [confidence: high] [anchor: §3.3 Def 6 · orn:source:ruddick-2026-cpp · pdf-p10] Realization mapping `Φ : I ↦ G_P` realizes institution if there exist (1) state embedding `α_Φ : S → S_P`, (2) observation projection `ω_Φ : S_P → O`, (3) primitive translation schema ψ such that each enabled source transition factors into U and is implemented by one local pool transition or a finite admissible route, and (4) preservation of source settlement and priority observables at macro-step boundaries.

- **C8** [confidence: high] [anchor: §3.3 Def 7 + Table 1 · orn:source:ruddick-2026-cpp · pdf-p10-11] Primitive basis `U = {issue, transfer, collateralize, guarantee-invoke, settle, default/remedy}`; `ψ(u) = (∆R, ∆V, ∆L, ∆F, ∆H, ∆G, ρ)` where ρ is empty or a finite admissible route. Four-function interface restriction: every target transition updates only fixed implementation interfaces (R,V,L,F,H,G) through ψ-templates; no institution-specific primitive may be added after observing the source mechanism.

- **C9** [confidence: high] [anchor: §3.3 Def 8 · orn:source:ruddick-2026-cpp · pdf-p12] Stutter-insensitive observational equivalence `X ≡_H Y` records externally visible settlements, residual obligations, and realized priority/loss outcomes at macro-step boundaries — `Obs*(τ_H^X(σ)) = Obs*(τ_H^Y(σ))`. External observables exclude internal governance deliberation unless deliberation changes executable permissions, and exclude cultural meaning unless it changes observable actions/guards/settlement outputs.

- **C10** [confidence: high] [anchor: §3.5 Def 10 · orn:source:ruddick-2026-cpp · pdf-p13-14] Repair transition class `U^r = {reroute, defer, renegotiate, revalue, relimit, recurate, guarantor-invoke, insurance-invoke, support-request, adjudicate, override, re-enter}` (12 operations). Repair acts on the same four functions as ordinary execution: re-curation in R, re-valuation in V, relimiting in L, exchange repair via fee or support reallocation in F + custody/reserve/guarantor/insurance movements in H, steward-authorized override in G.

- **C11** [confidence: high] [anchor: §3.5 Def 11 · orn:source:ruddick-2026-cpp · pdf-p14] Repair-aware realization classes: directly realizable / repair-extended (routine direct + repair via U^r with explicit triggers/permissions/state-effects/re-entry) / externally anchored (decisive repair authority lies with courts, sovereigns, regulators, or political institutions outside the formal pool-route system).

- **C12** [confidence: high] [anchor: §3.5 falsification criterion · orn:source:ruddick-2026-cpp · pdf-p17] Operational falsification criterion: a proposed in-scope mechanism falsifies direct-realization if any enabled source transition cannot be factorized into U, or required state variable cannot be represented through (R,V,L,F,H,G), or Σ cannot be operationalized through custody/payout/route/receipt logic, or priority/loss observables differ after projection, or decisive governance/repair step depends on discretion that cannot be represented as explicit state transition.

- **C13** [confidence: high] [anchor: §4 Theorem 1 · orn:source:ruddick-2026-cpp · pdf-p18-19] Constructive realization theorem (Theorem 1): under Assumptions 1–5 + primitive completeness with respect to U, any institution `I = (S, A, T, Π, Σ)` whose mechanics are fully expressed by those components admits a finite commitment-pool route realization `Φ(I)` such that for any bounded horizon H, observables are preserved: `Φ(I) ≡_H I`. Existence-by-construction; not uniqueness, efficiency, incentive-compatibility, or welfare superiority.

- **C14** [confidence: medium] [anchor: §6.1 + Appendix B · orn:source:ruddick-2026-cpp · pdf-p23-24, 35-40] Memory-based ROLA witness: state representation need not be a written or digital ledger; recognized group memory, witness testimony, beneficiary acknowledgment, and steward attestation may constitute relevant state and evidence variables, provided membership/contribution/obligation/dispute/remedy effects are observable at the chosen abstraction level. Routine labor rotation directly realizable; contested-memory + steward-mediated exception paths are repair-extended.

- **C15** [confidence: high] [anchor: §7.2 + Figure 2 · orn:source:ruddick-2026-cpp · pdf-p26-27] Repair is not external to protocol architecture; repair acts through the same interfaces as ordinary execution (curation, valuation, limitation, fee or support allocation, custody, governance). Routing serves both ordinary inter-pool interoperation AND under-stress safeguard against misuse, enclosure, or local capture (rerouting around degraded pools, tightening acceptance conditions, shifting toward pools with stronger published standing).

- **C16** [confidence: high] [anchor: §8.1 minimal invariant suite · orn:source:ruddick-2026-cpp · pdf-p28] Six software-verification invariants generated by the operationalization theorem: (1) curation soundness, (2) valuation soundness, (3) limitation soundness, (4) exchange conservation (balances + commitments + reserves + collateral + inventories + fee accounts conserved + non-negative unless Σ explicitly permits signed/expiry/cancel/burn), (5) priority + settlement conformance, (6) repair auditability — necessary but not sufficient for full economic/legal/security/welfare validation.

- **C17** [confidence: high] [anchor: §1 + §2.3 · orn:source:ruddick-2026-cpp · pdf-p3-5] Commitments treated in promise-theoretic sense (Burgess + Fagernes 2006; Bergstra + Burgess 2008/2014): an issuer makes a declared promise or attestation whose operational consequences depend on how pools curate, value, limit, hold, route, and govern it. Commitments are NOT assumed to be legally coercive obligations; the paper uses Promise Theory's agent-centered interpretation without relying on its full formal apparatus.

- **C18** [confidence: medium] [anchor: §7.3 negative case · orn:source:ruddick-2026-cpp · pdf-p27] Court-supervised restructuring (open-ended judicial discretion: stay scope, class formation, cramdown, equitable subordination, contested valuation) directly violates Assumption 2 (observable policy + repair interfaces) and may violate Assumption 4 (governance formalization). Such cases are externally-anchored repair candidates unless the adjudicative + support + repair transitions are themselves formalized within the model.

---

## 5. Claim Register — R-claims (review claims targeting Spore canon)

R-claim format per `learning-field-intake-protocol.md`: `[target: <spore-doc-id>] [concept: <slug>]` where target grep-resolves in live frontmatter and concept resolves in concepts-p2p-wiki.yaml v20. Per the plan's concept-slug parking convention, candidate slugs not in v20 (`route-graph`, `settlement-operator`, `cost-function-composition`) appear in body prose only — never inside R-claim `[concept:]` tags.

- **R1** [target: spore.project-vision] [concept: commitment-pooling] Spore's `commitment-pooling` slug (admitted in v2, 2026-04-17) gains formal-substrate weight from Ruddick's CVLE + RVLFHG decomposition and 10-element commitment tuple — the slug names the same operational territory the paper formalizes via Defs 3 + 4. The Spore Commitment primitive bullet at `project-vision.md` Core Thesis should be readable as adequate to express Ruddick's tuple body fields (`b/q/e/r/m`) as primitive parameters; if any field cannot be expressed at primitive-bullet level, the operational gap is candidate canon-pressure (parsed in §8). **supported_by:** C1, C3, C5.

- **R2** [target: spore.project-vision] [concept: attestation-of-execution] The Commitment primitive's `χ`-temporal-orientation distinction (future / past) is partially covered by Spore's `attestation-of-execution` derived slug for past-oriented certifications, but `project-vision.md` does NOT make `χ`-orientation a *structural* property of the Commitment primitive bullet at the bullet-level — Spore canon currently treats commitment as default-future-leaning, with past-oriented attestations routed via Evidence primitive + `attestation-of-execution`. Ruddick formalism raises the substantive question: should the Commitment bullet acquire a temporal-orientation scope-conditioning sub-bullet (parallel ADR-0062/0063/0064 triad shape) to make χ a structural primitive property? Honest cluster-counting: ≥2 traditions support naming temporal-orientation as primitive structural property (Promise Theory; speech-act theory); ≥1 tradition opposes (REA/ValueFlows commitment-vs-event distinction). **supported_by:** C3, C4, C17.

- **R3** [target: spore.actuator-logic] [concept: response-doctrine] Ruddick's repair-class `U^r` (12 operations) maps directly to F5 actuator-logic's five admitted response-categories under honest-rigor reading: `reroute` / `defer` / `relimit` / `recurate` / `revalue` map to F5 R3 (amend-declared-state) and R1 (acknowledge-and-record); `guarantor-invoke` / `insurance-invoke` / `support-request` map to F5 R4 (escalate); `adjudicate` / `override` / `re-enter` map to F5 R2 (contest) + governance state per ADR-0076 §"governance-mediated override" framing. F5's rule that "repair acts through the same four functions as ordinary execution" (ADR-0076 §4) is the *exact same canon-discipline* as Ruddick's §7.2 framing that "repair is not external to protocol architecture." **supported_by:** C10, C11, C15.

- **R4** [target: spore.failure-modes] [concept: failure-mode-class] Ruddick's three realization classes (direct / repair-extended / externally-anchored) map cleanly to F6 failure-modes at category-shape level: "outside-scope" mechanisms map to F6.4 scale-transition or F6.7 actor-capture (when finite-state abstraction cannot be specified at the chosen level); externally-anchored mechanisms align with F6.6 commitment-break sub-shapes when Σ depends on extra-procedural authority (court-supervised restructuring §7.3 = canonical externally-anchored case); repair-extended is the F5/F6 operational pair where ordinary execution fires F6.x and U^r fires F5 response-doctrine. **supported_by:** C11, C15, C18.

- **R5** [target: spore.actor-governance] [concept: actor-standing] Ruddick's stewarded-pool concept + governance G (Def 4) + steward role for ROLA witness (Appendix B `gsteward(e, s) : e ∈ E ∧ e has authority under G`) align with F3 actor-governance §4.1 admission/role-assignment and §4.7 governance-body-composition. Ruddick's "steward" maps to F3's governance-body-member with explicitly authorized authority under G. The 12-op U^r + 6 verification invariants (curation/valuation/limitation soundness + exchange conservation + priority/settlement conformance + repair auditability) are F3-shape governance conformance obligations. **supported_by:** C5, C14, C16.

- **R6** [target: spore.representation-authority] [concept: rule-in-use] Ruddick's stutter-insensitive observational equivalence `≡_H` (Def 8) is a precise formalization of F4 representation-authority's load-bearing discipline: "observable institutional state at chosen level," fact-vs-specification text-type distinction (ADR-0074), and macro-vs-micro layered authority. F4's doctrinal framing and `≡_H`'s formal apparatus are mutually-reinforcing — `≡_H` gives F4 a citable formal substrate. F4's appeal-protocol §5.3 maps to Ruddick's "external observables exclude internal governance deliberation unless deliberation changes executable permissions" boundary clause. ADR-0046's `rule-in-use` slug is F4-adjacent at this layer (rule-in-use is the operational state Ruddick's Π+T+Σ specify). **supported_by:** C7, C9, C13.

- **R7** [target: spore.canon-decision.field-rule-level-stratification] [concept: rule-in-use] Ruddick's source-model `(S, A, T, Π, Σ)` (Def 1) provides formal substrate for ADR-0046's Field rule-stratification at operational-rule layer — guarded transitions T over states S with priority Π are exactly the operational machinery for Ostrom's collective-choice rules and the `rule-in-use` slug ADR-0046 admitted (yaml v3→v4). T+Π formalizes "rule-in-form ↔ rule-in-use" coupling at machine-level, which is more granular than ADR-0046's prose statement. **supported_by:** C2.

- **R8** [target: spore.canon-decision.federation-encounter-composition-pattern] [concept: federation-encounter] Ruddick's route graph `G_P = (𝒫, E)` (Def 5) is structurally homologous to Spore's federation-encounter composition-pattern (ADR-0068): pools as bounded Field-conditions, route-edges as composition substrate where Signal/Joint-commitment/Intent/Evidence interactions cross pool boundaries under explicit guard constraints. Ruddick's worked constructions (§5–§6) — deposit-transfer-redemption / repo-style / CCP-clearing / ROLA / ROSCA / grain-bank / cross-pool reserve-shortfall — provide ≥4 independent instance-families at finance + mutual-aid layer that materially STRENGTHEN ADR-0068's β-evidence count (existing Sarafu+GE / cross-pool clearing / federation-protocol-version / mutual-credit networks). The Section 8.2 route-selection formalism `G_R = (N, E)` with feasibility predicate `F(e, s)` and cost `c(e, s)` is the algorithmic surface of federation-encounter composition. **supported_by:** C6, C15.

- **R9** [target: spore.instance-model] [concept: actor-standing] Memory-based ROLA witness (Appendix B; pdf-p35-40) directly validates ADR-0078 min-viable-spore-instance §"Minimum Viable Composition" — no ledger required; recognized group memory + witness testimony + steward attestation suffice as state and evidence variables. Ruddick's witness gives a fully-enumerated formal mechanism (`s = (M, E, Q, C, O, A, D, R, G)` source state + 12-action set + `Σ_ROLA` 5-outcome operator + primitive factorization into U + repair factorization into U^r) that operationalizes ADR-0078's claim that minimum viable spore instances do not require text-or-graph-authoritative ledgers when the relevant-evidence-variables are observable at chosen level. **supported_by:** C14.

- **R10** [target: spore.connection.promise-foundation-commitment-protocol] [concept: commitment-pooling] Ruddick's promise-theoretic framing (§2.3 Burgess/Bergstra+Burgess) of commitment-as-non-coercive-attestation aligns with Spore's existing `spore.connection.promise-foundation-commitment-protocol` lineage and the `attestation-of-execution` slug. Both treat commitment as agent-centered declared promise rather than as legally-coercive obligation; the Spore-side framing predates Ruddick's paper, and the paper provides external-witness validation per F8 external-validation-loop. **supported_by:** C17.

---

## 6. Disposition per R-claim

Per the canonical taxonomy in `learning-field-intake-protocol.md`: `no change` / `clarify existing term` / `candidate pattern` / `candidate protocol` / `candidate primitive` / `unresolved tension`.

| R-claim | Disposition | Rationale (per-claim earning-test) |
|---|---|---|
| R1 | clarify existing term | `commitment-pooling` slug already in v20; bridge note clarifies its formal substrate at Def 3+4 level. No new admission. |
| **R2** | **unresolved tension** | **χ-temporal-orientation primitive-bullet scope-conditioning question is genuine canon-pressure under cluster-counting (≥2 traditions support, ≥1 opposes). Parsed for follow-on per ADR-0048 parsimony — see DECISION-BRIEF for full earning-test.** |
| R3 | no change | F5 actuator-logic (ADR-0076) already adequate; Ruddick's U^r maps cleanly into F5's 5 admitted response-categories. No canon shift. |
| R4 | no change | F6 failure-modes (ADR-0075) 8-category taxonomy already adequate for Ruddick's 3 realization classes. No canon shift. |
| R5 | no change | F3 actor-governance (ADR-0077) already adequate for stewarded-pool + governance-G concept. No canon shift. |
| R6 | clarify existing term | F4 representation-authority gains a citable formal substrate via `≡_H`; F4 doctrine + `≡_H` formalism are mutually-reinforcing. No canon-body change required, but bridge note materially clarifies what F4's macro-step authority discipline means at the formal layer. |
| R7 | no change | ADR-0046 substrate adequate; T+Π formalism provides finer-grained operational machinery for `rule-in-use` slug already in v20 (yaml v4 admission). No canon shift. |
| R8 | no change | ADR-0068 federation-encounter already admits this composition-pattern; route-graph + Section 8.2 route-selection formalism strengthens β-evidence count without changing pattern shape. |
| R9 | no change | ADR-0078 instance-model validated by Appendix B fully-enumerated witness; bridge-note citation provides external validation per F8 framing. |
| R10 | no change | `spore.connection.promise-foundation-commitment-protocol` lineage frame-aligned with Ruddick §2.3; cross-citation enrichment. |

**Frontmatter scalar disposition resolution** (per the plan's disposition rule, highest-weight per-R-claim wins under `candidate primitive > candidate protocol > candidate pattern > unresolved tension > clarify existing term > no change`): R2 is the only `unresolved tension`; all others are `no change` or `clarify existing term`. Therefore frontmatter `disposition: unresolved tension`.

---

## 7. Cross-repo coherence delta (descriptive comparison only)

**Stream-scope discipline applies to recommendations, not just writes** (per `feedback_workstream_scope_discipline.md`): this section describes what each sibling artifact covers and where Spore's substrate read agrees / diverges / leaves gaps. It makes no recommendation for action at IC/BKC/PM/bregion. Cross-stream opt-in remains a separate operator-gated decision.

### Pre-write validation log

All five sibling artifact paths and doc_ids verified against live frontmatter at `2026-05-04`:

| Repo | Path | Live doc_id | Verified |
|---|---|---|---|
| IC | `IndigenomicsAI/docs/methodology/ruddick-commitment-pool-bridge.md` | `indigenomics.methodology.ruddick-commitment-pool-bridge` | ✓ |
| BKC | `bioregional-coordination/docs/research/connections/commitment-pool-route-graphs-review.md` | `bioregional-coordination.connection.commitment-pool-route-graphs-review` | ✓ |
| BKC | `bioregional-coordination/docs/research/connections/ruddick-commitment-pool-route-graphs-peer-review.md` | `bioregional-coordination.connection.ruddick-commitment-pool-route-graphs-peer-review` | ✓ |
| PM | `poietic-match/docs/research/connections/commitment-pooling-and-mutual-credit.md` | `pm.connection.commitment-pooling-and-mutual-credit` | ✓ |
| PM | `poietic-match/docs/research/connections/sarafu-and-ruddick-lineage.md` | `pm.connection.sarafu-and-ruddick-lineage` | ✓ |

(Foreign doc_ids cited in body prose per the plan's cross-repo reference convention; they do NOT appear in this note's frontmatter `relates_to:` array, which holds Spore-local doc_ids only.)

### What each sibling covers

- **`indigenomics.methodology.ruddick-commitment-pool-bridge`** (v0.2, 2026-04-24): IC corpus mapping. CVLE+RVLFHG+commitment-tuple coverage, with detailed mapping to four IC corpora (Apr 30 survey / 25-theme ontology / 350+ legal cases / RAPs). Theme 4 worked example shows R, V, L, F, H, G across all six interfaces. Temporal orientation `χ ∈ {future, past}` distinguishes promissory survey responses from certified RAP claims. **No formal C/R-claim register**; structured as bridge-note exposition.
- **`bioregional-coordination.connection.commitment-pool-route-graphs-review`** (2026-05-02): bioregional/sheaf bridge. Adds two layers Ruddick does not articulate: (a) privacy + anti-extraction requirements, (b) sheaf/hypergraph generalization of route graphs at bioregional governance scale.
- **`bioregional-coordination.connection.ruddick-commitment-pool-route-graphs-peer-review`** (2026-05-02): peer-review-shaped artifact (5 major comment areas + 6 open questions for Will). Outreach-track-adjacent; not a substrate-grammar map. Treats the paper from a friendly-revision-not-restructuring stance.
- **`pm.connection.commitment-pooling-and-mutual-credit`**: PM-side Tier-1b anchor for matching grammar. CVLE substrate + commitment-pooling-vs-mutual-credit distinction + market-dependence caution. 4 R-claims targeting PM grammar / PM protocol / PM project-vision / Spore intent-pressure term + 10 C-claims anchored to P2P Foundation wiki.
- **`pm.connection.sarafu-and-ruddick-lineage`**: PM-side sibling exploring Sarafu Network as operational pilot of commitment pooling.

### Where Spore's substrate-grammar read agrees with siblings

- **CVLE four-functions are the canonical decomposition**: IC (Theme 4), PM (matching grammar), and Spore (this note + `curation-valuation-limitation-exchange` slug in v20) all converge on CVLE as the right four-function abstraction.
- **RVLFHG is implementation-layer not canon-layer**: implicit agreement across all repos — none of the siblings promote RVLFHG to a primitive-shaped canon object.
- **Promise-theoretic framing of commitment**: PM's commitment-pooling-and-mutual-credit + Spore's `spore.connection.promise-foundation-commitment-protocol` + Ruddick §2.3 + IC's commitment-tuple framing all align on commitment-as-non-coercive-attestation reading.

### Where Spore's substrate-grammar read DIVERGES from siblings

- **R2 χ-temporal-orientation canon-pressure** is named here as `unresolved tension` for Spore. IC's bridge handles temporal orientation as a survey-response-vs-RAP-claim *corpus* distinction, not a *primitive-bullet* scope-conditioning question. BKC review treats `χ` as descriptive paper apparatus. PM bridges treat `χ` implicitly. Only Spore's substrate-grammar read surfaces the "should Commitment primitive bullet acquire χ-orientation as structural property" question — because only Spore has primitives at canon-doctrine layer to scope-condition. **Per `feedback_upstream_downstream_canon_propagation.md`, axis-divergence is per-repo-honest, not inconsistency.**
- **F5 / F6 / F3 / F4 / F8 alignment**: only Spore reads Ruddick's repair-class + realization-classes + governance + observational-equivalence + falsifiability against the post-Phase-4 foundation-doc taxonomy. Sibling repos do not have this canon layer and do not read for this alignment.
- **ADR-0078 instance-model validation via Appendix B** is unique to Spore's read because only Spore has ADR-0078.

### What is covered nowhere yet (gap items, descriptive only)

- **Settlement-operator Σ as named cross-repo concept**: Spore lacks a canonical name for institution-relative settlement at the canon layer; IC's CVLE coverage doesn't promote Σ; BKC review notes Σ as paper apparatus but does not promote; PM doesn't engage Σ at primitive level. Across the four-repo ecosystem, settlement-operator territory is descriptively under-specified at the cross-repo coordination-grammar layer.
- **Route-graph as multi-pool-federation cross-repo concept**: implicitly covered by ADR-0068 federation-encounter composition-pattern in Spore, but no canonical cross-repo vocabulary for "multi-pool route" exists today.
- **Cost-function-composition for repair (Ruddick §8.2)**: not engaged at canonical level by any sibling.

(Per the plan's stream-scope discipline, surfacing these as gap items is descriptive observation; whether any repo decides to close them is a separate operator-gated decision in a separate session.)

---

## 8. Open questions / parking items

### Earning-test against canon-pressure (Phase 5)

Per `feedback_audit_then_propose.md` + ADR-0048 parsimony-as-earning-test-outcome + ADR-0064 surface-vocab-vs-operational-concern + ADR-0080 sufficient-spec-prose-as-defer-rationale, the following candidates surface from this intake. Honest verdicts (executed in DECISION-BRIEF; nothing executed in this session):

1. **`route-graph` glossary slug** — **ADMITTED 2026-05-04 via ADR-0084** (yaml v20→v21). Cluster-counting: 3 full clusters (Mehrling layered-claims + Lamport state-machine networks + payment-rail/network-economics) + Ruddick primary. β-evidence per ADR-0068 + Ruddick §5–§6 worked constructions strengthens federation-encounter pattern's instance-family count without requiring ADR-0068 file edit (read-time citation). Bundle-symmetric admission with `settlement-operator` per ADR-0052 precedent.
2. **`settlement-operator` glossary slug** — **ADMITTED 2026-05-04 via ADR-0084** (yaml v20→v21). Cluster-counting: 2 full clusters (Mehrling layered-claims + CPMI-IOSCO settlement-finality) + 1 partial (Lamport TLA+ next-state) + Ruddick primary; ≥2-cluster operational threshold passed honestly. Provides formal-substrate anchor for F4 representation-authority `≡_H` discipline (per ADR-0074) and finance-domain anchor for F5 actuator-logic U^r repair-class taxonomy (per ADR-0076).
3. **`commitment-pool-protocol` / `cpp` glossary slug** (candidate slug; not yet in v20). Likely DEFER — single-tradition; ADR-0080 sufficient-spec-prose pattern applies (Ruddick paper itself is the spec; introducing a Spore-side `cpp` slug duplicates without adding cross-repo coordination-grammar value). Spore already has `commitment-pooling` (v2 admission); CPP-as-named-protocol is paper-internal language that Spore can cite without admitting.
4. **Commitment primitive bullet χ-temporal-orientation scope-conditioning** (R2 disposition: unresolved tension). The substantive Spore canon-pressure surfaced by this intake. Parallel ADR-0062/0063/0064 triad shape (primitive-bullet scope-conditioning) is the natural shape if pressure ratifies; but cluster-counting is genuinely marginal (≥2 supporting, ≥1 opposing). **DEFERRED** to follow-on; see DECISION-BRIEF.
5. **`cost-function-composition` for repair (Ruddick §8.2)** — extension of F5 actuator-logic OR new pattern. Likely DEFER — single-paper evidence; F5 §4 already covers repair-as-admit-amendment-escalate-contest at sufficient abstraction. Naming `cost-function-composition` Spore-side without ≥2 instance-family operational pressure would be admitting on weak β-evidence.
6. **Commitment-pool route-graph as composition-pattern (M4 framework, ADR-0065)** — likely DEFER — ADR-0068 federation-encounter already admits the composition-pattern; route-graph is a finance-domain instantiation, not a separate composition-pattern admission candidate.

### Other parking items

- **Held-review boundary preserved**: this intake did not touch v3 review state, did not clear v3 read-debt, did not author Q7 outreach. Held-review ledger remains exactly as the operator left it.
- **Section 8.2 route-selection formalism `G_R = (N, E)` with feasibility predicate F(e,s) and cost c(e,s)** — algorithmic surface of federation-encounter composition. Out-of-scope-for-bridge-note; future PM/koi-processor implementation could cite as algorithmic substrate.
- **§8.1 six software-verification invariants** are F3 governance conformance obligations from R5; could be promoted to a Spore canon "minimal verification invariant suite" under operational pressure. DEFERRED.
- **Theorem 1's Assumption 1–5** (finite-state adequacy / observable policy + repair interfaces / route composability / governance formalization / settlement compilability) constitute a falsifiability checklist for any Spore federation-encounter instance. Could be promoted as evaluation rubric under operational pressure. DEFERRED.

### Descriptive propagation classification (Phase 6)

Per `feedback_upstream_downstream_canon_propagation.md`: connection-layer (this bridge note alone) does NOT trigger sibling alignment ADRs. If R2 χ-temporal-orientation primitive-bullet scope-conditioning eventually fires in a future operator-gated Spore canon-decision session, that primitive-bullet-level shift WOULD constitute Wave-N+1 alignment substrate for IC + PM downstream — but executing those Wave-N+1 ADRs is a separate operator-gated decision in a separate session, requiring explicit cross-stream opt-in at that future session-time. This note does NOT recommend such opt-in; it only classifies what would be in scope if cross-stream were opened later.

---

## 9. Summary

Ruddick's April 2026 paper provides a formal apparatus that aligns cleanly with Spore's post-Phase-4 canon at multiple substrate layers: F3 actor-governance, F4 representation-authority, F5 actuator-logic, F6 failure-modes, F8 external-validation-loop, ADR-0046 Field rule-stratification, ADR-0068 federation-encounter, ADR-0078 instance-model. The CVLE four-function decomposition + 10-element commitment tuple are canonically already named in Spore (via `curation-valuation-limitation-exchange` and `commitment-pooling` slugs in v20), and the paper provides external-witness validation per F8. The repair-class `U^r` (12 ops) and observational-equivalence `≡_H` give F5 and F4 citable formal substrates without requiring canon shift.

The **single substantive canon-pressure** surfaced is R2: should the Commitment primitive bullet at `project-vision.md` Core Thesis acquire `χ`-temporal-orientation as a structural scope-conditioning sub-bullet (parallel ADR-0062/0063/0064 triad shape)? Honest cluster-counting is marginal — ≥2 supporting traditions, ≥1 opposing — so the disposition is `unresolved tension` parked for operator-gated follow-on session. Two derived-vocab admission candidates (`route-graph`, `settlement-operator`) are likely-ADMIT under cluster-counting and similarly parked.

Spore canon at post-Phase-4 plateau — validator 9/30 EXACT held; foundation docs 14; concepts yaml v20; canon-rebuild arc at 33 canon-decisions. This intake authors a single Spore-side bridge note + parks canon-pressure candidates for follow-on. No canon-touching execution this session.
