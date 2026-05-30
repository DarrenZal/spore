# ADR-0077 F3 Actor-Governance — Step 0.5 Audit Manifest

**Date**: 2026-04-25 (post-F5 same session)
**Target**: `docs/foundations/actor-governance.md` (F3, FINAL Tier B admission)
**Audit-then-propose discipline**: per `feedback_audit_then_propose.md` for synthesis-heavy ADRs, surface findings BEFORE proposing earning-test or category-demarcation.

---

## A. Existing actor-language inventory (canon survey)

Survey across `docs/foundations/`, `docs/project-vision.md`, recent ADRs:

- **`project-vision.md`** carries primitive-roster references to actors implicitly via Holon (3 structural primitive) + the joint-commitment verb (ADR-0050) + Power-across-primitives synthesizing paragraph + asymmetric-membrane Layer-3 (ADR-0047). NO explicit actor-doctrine subsection.
- **`holonic-network-architecture.md:81`** carries one role-mention in the Organizational instance-type table ("teams or organizations with internal roles, protocols, and explicit governance artifacts"); §108 Democratic accountability gaps clause acknowledges *"Overarching rule systems may not have direct democratic mandates for every affected holon"* — gestures at the gap F3 closes.
- **`structural-legitimacy.md`** is the load-bearing substrate: §11 *"those who shape decisions are bound into the outcomes those decisions produce"* — coupling-to-consequence frames actor-role legitimacy. §50 Open Question: *"some participants actively work to decouple authority from consequence (regulatory capture, rent-seeking, administrative capture) ... a unified failure-mode taxonomy for coupling-breakdown is future work."* — F6 partially-discharged this; F3 must complete the actor-side.
- **`failure-modes.md` §4.7**: full F3-forward-ref subsection. Names 4 actor-capture sub-shapes (maintainer-capture / admin-class-accumulation / regulatory-capture / digital-labor-as-free-gift) with rule-level decomposition (constitutional / collective-choice / operational). F3 inherits this taxonomy directly + completes the governance-response.
- **`representation-authority.md` §5.3 Appeal-Protocol** routes inter-layer disputes through Ostrom 3-level rule-stack — F3 must not duplicate this; F3 routes actor-disputes through the same appeal-protocol with actor-specific standing-doctrine layered atop.
- **`actuator-logic.md` (F5) §4.2 R2-contest** forward-references F3 for actor-capture-specific governance-response (per F6.7 pairing). F3 closes this forward-ref.

**No prior F3-shaped doctrine exists.** Actor-language is scattered across substrate-ADRs (0042/0046/0047/0050/0068) without unified foundation-layer treatment.

---

## B. audit-v2 §6.4 item 3 + §3.3 item 4 (F3 anchor)

**§3.3 item 4** (Codex + Opus-4-7 convergence): *"Actor governance vs artifact governance — canon governs artifacts; real multi-agent decision governance is unvalidated. Who decides under contest? How is standing granted? What authority cycles are valid? How do human and AI agents differ in rights/responsibilities?"*

**§6.4 item 3** (priority list): F3 priority-3 missing foundation in the original audit-v2 ordering; revised to priority-2 in Phase 4 scoping (post-arc substrate makes F3 tractable).

Four explicit Codex framing questions:
- **Q1** Who decides under contest?
- **Q2** How is standing granted?
- **Q3** What authority cycles are valid?
- **Q4** How do human and AI agents differ in rights/responsibilities?

---

## C. Substrate mapping — what each substrate ADR contributes + gaps F3 must fill

### ADR-0042 structural-legitimacy
- **Contributes**: coupling-to-consequence as the legitimacy ground; coupling can be cyclic (Q3 directly addressed: authority cycles VALID iff coupling holds).
- **F3 gap**: structural-legitimacy is silent on **how standing-to-act is granted** in the first place (Q2). Coupling protects against decoupling; doesn't grant entry.
- **F3 inherits**: legitimacy criterion (coupling) as ground for actor-admission.
- **Anticipates F3 directly**: ADR-0042 §Consequences L82: *"Phase 4's Actor Governance foundation doc (per v2 §6.4) builds on this coupling claim."*

### ADR-0046 field-rule-level-stratification (Ostrom 3-level)
- **Contributes**: rule-stack scaffold (operational / collective-choice / constitutional) directly applicable to actor-governance (operational = role-perform; collective-choice = role-amend; constitutional = role-admit/recall).
- **F3 inherits**: C1 rule-stack inheritance (4th application after F1/F4/F6).
- **No gap**: ADR-0046 §225 permissive offer explicitly invites actor-governance work.

### ADR-0047 power-multi-layer-decomposition
- **Contributes**: Power decomposed across (1) authority-over-rule-levels (Field), (2) asymmetric-commitment (Commitment), (3) asymmetric-membrane (Membrane). All three are actor-relevant: Layer-1 = which-actors-have-authority-at-which-rule-level; Layer-2 = which-actor-pairs-bind-asymmetrically; Layer-3 = which-actors-can-gatekeep-membrane-authorization.
- **F3 inherits**: Power vocabulary at all three layers; doctrine for actor-asymmetry; substitution-trap discipline.
- **F3 gap**: ADR-0047 names Power as multi-layer decomposition; F3 must operationalize **how authority is delegated, contested, and revoked** at the actor layer. The 3 layers are descriptive substrate; F3 supplies the doctrine.

### ADR-0050 joint-commitment (9th primitive)
- **Contributes**: joint-actors as Gilbertian commitment-of-two-or-more-people, sui generis (not sum-of-individuals). Form-joint-commitment / rescind-by-concurrence / hold-accountable-via-demand-right / extend-joint-commitment operations.
- **F3 inherits**: joint-actor handling at primitive layer; sociality Side-B commitment as canon-prior.
- **F3 gap**: ADR-0050 names joint-commitment as verb-primitive; F3 must say **how a joint-actor is governed at federation/organization scale** (composition rules, internal accountability, recall conditions).

### ADR-0068 federation-encounter composition-pattern
- **Contributes**: encounter as Signal+Joint-commitment+Intent+Evidence-within-bounded-Field-conditions; first composition-pattern admission.
- **F3 inherits**: federation-encounter as the event-shape inside which federation-actor governance fires; encounter as venue-for-actor-coordination.
- **F3 gap**: ADR-0068 admits the pattern; F3 must say **how the actors at a federation-encounter are governed** (who has standing to convene, who has standing to ratify outcomes, who handles disputes within the encounter).

### F5 actuator-logic §4.2 (forward-ref)
- **Contributes**: explicit forward-reference: *"F5 §4.2 (contest) forward-references F3 for actor-capture-specific response per F6.7 pairing. F3 will carry governance-doctrine (standing, adjudication, recall, replacement)."*
- **F3 discharges**: this forward-ref becomes load-bearing when F3 lands.

### F6 failure-modes §4.7 actor-capture (forward-ref + sub-taxonomy)
- **Contributes**: F6.7 names 4 actor-capture sub-shapes (maintainer-capture / admin-class-accumulation / regulatory-capture / digital-labor-as-free-gift) + rule-level decomposition. F6.7 explicitly says: *"F3 will establish governance-response."*
- **F3 discharges**: governance-response per F6.7 sub-shape (recall protocols for maintainer; admin-class rotation; capture-resistance for regulatory-capture-style; recognition-and-compensation for digital-labor-as-free-gift).

### F4 representation-authority §5.3 (composition pattern)
- **Contributes**: appeal-protocol routes through Ostrom 3-level rule-stack.
- **F3 inherits**: G2 cite-don't-redefine — F3 routes actor-disputes through F4 §5.3 appeal-protocol with actor-specific standing-doctrine; do NOT author parallel appeal-protocol.

---

## D. F6.7 discharge requirements

F3 must close F6.7's category-recognition with governance-response across all 4 sub-shapes:

| Sub-shape | F6.7 names | F3 must say |
|-----------|-----------|-------------|
| Maintainer capture | recognized; F1:39 + F4:42 cite | who has standing to recall a captured maintainer; replacement protocol; constitutional-rule eligibility-restoration |
| Admin-class accumulation | Kostakis 2010 framing; ADR-0005 | rotation-discipline; demographic-diversity protocols at collective-choice level; distributing-admin-authority pattern |
| Regulatory capture | Stigler 1971; structural-legitimacy:50 | external-feedback channels; cross-federation oversight; capture-resistance design |
| Digital-labor-as-free-gift | Kleiner; ADR-0005(b) | reproductive-labor recognition (per ADR-0049 + ADR-0002); compensation-to-attestation chain; labor-class standing-to-contest |

**Discipline**: F3 closes by saying *the doctrine* that governs each shape, NOT the algorithm. Algorithms remain pattern/protocol-layer per all prior Phase 4 admissions.

---

## E. F5 R4 escalation-chain completion

F5 §4.4 R4-escalate routes to *"next Ostrom rule-level"* per ADR-0046. The escalation eventually terminates somewhere — F3 must say where: at constitutional-rule level, ultimate appeal is to **federation-membership-revocation or fork** per existing canon (federation-protocol forkability + structural-legitimacy:50 forkability-as-last-resort).

F3 doctrine closes the chain: operational → collective-choice → constitutional → forkability/membership-revocation. Forkability is canon-already (structural-legitimacy.md:42); F3 names that this is the actor-governance-side terminus.

---

## F. Synthesis-depth recommendation per category — LIGHT vs SELECTIVE vs HEAVY

**Q3 from Phase 4 scoping plan §8 is the decisive open question.**

Per-category audit:

| Category | LIGHT (cite) | HEAVY (re-author) | Recommendation |
|----------|--------------|-------------------|---------------|
| **Actor admission + role assignment** | substrate gap (no prior canon names admission); cite ADR-0042 coupling-criterion only | re-author: standing-grant-doctrine + role-eligibility-doctrine | **HEAVY** (new substrate) |
| **Authority delegation across rule-stack** | cite ADR-0046 + ADR-0047 Layer-1 verbatim | re-author: authority-over-rule-levels at actor layer | **SELECTIVE** (cite ADR-0046; re-engage ADR-0047 Layer-1 at actor-operationalization) |
| **Power asymmetry governance (Layer-2 + Layer-3)** | cite ADR-0047 verbatim | re-author per Layer-2/3 with actor-specific doctrine | **SELECTIVE** (cite ADR-0047 framework; author standing-to-balance-asymmetry doctrine) |
| **Joint-actor coordination** | cite ADR-0050 verbatim | re-author joint-actor governance at federation scale | **SELECTIVE** (cite ADR-0050 primitive; author federation-scale joint-actor governance) |
| **Federation-actor encounter governance** | cite ADR-0068 verbatim | re-author per F3 actor-lens | **SELECTIVE** (cite ADR-0068 pattern; author actor-governance-at-encounter doctrine) |
| **Actor-capture prevention + remediation** | cite F6.7 sub-shapes | re-author governance-response per sub-shape | **HEAVY** (F3 explicitly discharges F6.7 forward-ref; the discharge IS the doctrine) |
| **Governance-body composition + member legitimacy** | substrate gap | re-author from scratch | **HEAVY** (new substrate; not in any prior ADR) |
| **Authorization boundaries + revocation** | cite ADR-0046 + ADR-0047 Layer-3 + F4 §5.3 | re-author | **SELECTIVE** (cite ADR-0046 rule-stack + F4 appeal-protocol; author revocation-doctrine specifically) |

**Net synthesis-depth recommendation: SELECTIVE-leaning HEAVY for new substrate, SELECTIVE for inherited substrate.**

This is **B5 SELECTIVE per-category** as the appropriate B-axis disposition (different from F1's B1 unified, F6's B2 per-category, F5's B1 re-converged).

**Rationale**: F3's substrate is **structurally heterogeneous** (some categories have rich substrate-ADRs to cite; others are net-new gaps) — UNlike F5 where all 5 response-modes shared a common principled-rule. Forcing B1-unified would invent fake symmetry; forcing pure B2 per-category would re-author already-canon substrate. SELECTIVE per-category is the honest-rigor shape.

**Estimated foundation-doc length**: ~280-330 lines (heavier than F5's ~230, comparable to F6's 320; reflects 8 category subsections with mixed depth).

---

## G. H-axis (structural-legitimacy relationship)

**ADR-0042 §Consequences L82 explicitly anticipates F3**: *"Phase 4's Actor Governance foundation doc (per v2 §6.4) builds on this coupling claim."* This is direct foundation-doc handoff.

**Three options**:
- **H1 EXTEND** — F3 extends structural-legitimacy doctrine at actor-layer.
- **H2 SIBLING-DOCTRINE** — F3 is sibling-doctrine (F6's pattern: positive-doctrine paired with breakdown-taxonomy).
- **H3 HYBRID** — F5's pattern: substrate-child to ADR-0042 + operational-pair sibling to F6.

**Recommendation: H3 HYBRID** (matches F5 precedent + reflects F3's actual relationship topology):
- **Substrate-child** to structural-legitimacy: coupling-to-consequence is the legitimacy ground F3 inherits and operationalizes at actor layer.
- **Operational-pair sibling** to F6 failure-modes: F6.7 recognizes actor-capture; F3 governs the response. F6 recognize → F3 govern. (Parallel to F6 recognize → F5 respond.)
- **Operational-pair sibling** to F5 actuator-logic: F5 R2-contest routes actor-disputes to F3 standing-doctrine.

H3 captures F3's **dual relationship topology**: vertical to ADR-0042, horizontal to F5 + F6.

---

## H. Rule-stratification applicability (C1 inherit ADR-0046)

**Recommendation: C1 inherit, 5th application** (after F1 + F4 + F6 + F5).

Rule-stack maps cleanly onto actor-governance:
- **Operational-rule** = actor performing assigned role within current rule-set
- **Collective-choice-rule** = amending who-may-perform-which-role + role-protocol
- **Constitutional-rule** = setting actor-eligibility + actor-admission criteria + ultimate recall-or-fork

Rule-stratification is now a **convention** at Phase 4 (5/5 inheritance); F3 inherits without re-earning the move per ADR-0073 method-precedent 3.

---

## I. Cluster-counting per category (honest-rigor per ADR-0064 / ADR-0069 discipline)

| Category | Tradition cluster support | Verdict |
|----------|--------------------------|---------|
| Actor admission + role assignment | Ostrom (boundary-rule); Governance-Process (Debian §4/§5/§6); Care-ethics (relational-autonomy admission) | **PASS** ≥3 clusters |
| Authority delegation | Ostrom 3-level; PEP 13 enumerated-powers; VSM S5/S3; polycentric-governance | **PASS** ≥4 clusters |
| Power asymmetry (Layer-2/3) | Baier asymmetric-vulnerability; Folbre patriarchy; Kostakis admin-class | **PASS** ≥3 clusters |
| Joint-actor coordination | Gilbert plural-subject; List/Pettit group-agent; Tuomela we-mode | **PASS** ≥3 clusters |
| Federation-actor encounter governance | Goffman interaction-order; Schiffer common-knowledge; ADR-0068 cross-tradition | **PASS** ≥3 clusters via inheritance |
| Actor-capture prevention | Stigler regulatory-capture; Kostakis admin-class; Federici reproductive-labor; Kleiner venture-communism | **PASS** ≥4 clusters |
| Governance-body composition | Aligica-Tarko polycentric; iterative-democracy (Pateman); commons-law (Bollier-Helfrich) | **PASS** ≥3 clusters |
| Authorization boundaries + revocation | Ostrom Cox-1A/1B; Apache PMC/Board; Debian recall protocols; Tuomela operative-membership | **PASS** ≥3 clusters |

**All 8 candidate categories pass honest-rigor ≥2-cluster threshold; most pass at ≥3.** No category requires decline-with-triggers (unlike ADR-0069 which failed cluster-count under Reading A).

**Q4 from §B (human-vs-AI actor differences)**: NOT a separate category — operates as scope-condition acknowledgment **within** each category (per F1 §6 + F4 §6 Open Questions precedent). AI-actor specific governance (model-provenance, prompt-disclosure, regeneration-audit) goes to §6 Open Questions, not as 9th category.

---

## J. Conclusions — proposed disposition

1. **A1 ADMIT** all 8 actor-governance categories.
2. **B5 SELECTIVE per-category** (novel B-axis; first use; honest-rigor per substrate-shape).
3. **C1 inherit ADR-0046 Ostrom 3-level** (5th Phase-4 application).
4. **D2 admit 2 slugs** — `actor-standing` (Q2 anchor; structurally novel canon vocabulary) + `governance-response` (parallels F5 `response-doctrine`; names F3's discharge-side counterpart). yaml v17 → v18.
5. **E1** discharge F6.7 forward-ref + F5 §4.2 forward-ref + close ADR-0042 §82 anticipation.
6. **F1 full 5-file atomic-bundle** (matches F1/F4/F5/F6 precedent).
7. **G2 cite-don't-redefine** F4 §5.3 appeal-protocol (inherits F5 §4.2 precedent for cross-foundation-doc composition).
8. **H3 HYBRID** — substrate-child to ADR-0042 + operational-pair sibling to F5 + F6.
9. **I1 narrow Spore-only** (matches all prior Phase 4 admissions; cross-repo deferred to Wave-N queue; DH-PM-1 still held).
10. **J1 narrow** — out-of-scope: ADR-0059c-shape cascade-miss (governance-artifacts:134-143); L117 mycorrhizal-federation-protocol cascade-miss; Phase 5 section-level status labels; algorithm-layer governance-protocols (pattern-layer work).

Audit-then-propose discipline applied: 8 categories surfaced from substrate analysis + audit-v2 §3.3 item 4 + F6.7 sub-taxonomy + ADR-0042 §82 anticipation; per-category cluster-counting + per-category synthesis-depth — child surfaces; operator decides at Step 2.

---

**End audit manifest. Decision-brief at tmp/adr-0077-f3-decision-brief-2026-04-25.md.**
