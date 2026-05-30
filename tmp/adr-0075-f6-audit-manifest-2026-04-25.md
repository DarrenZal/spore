# ADR-0075 F6 failure-modes — Step 0.5 audit manifest

**Authored**: 2026-04-25 (pre-decision-brief)
**Audit discipline**: `feedback_audit_then_propose.md` — operator-seeded taxonomy is a seed, not a prescription

---

## A. Existing failure-language inventory (canon-wide grep)

### A.1 Foundation-layer explicit forward-references to F6 (load-bearing)

Three foundation docs have **explicit `failure-modes` forward-references** already canonized:

1. **F1 sensor-oracle-governance.md:39** — "**Failure-mode taxonomy** — systematic enumeration of how sensor-governance can break (maintainer capture, sensor decay, adversarial mis-calibration). That is the scope of `failure-modes` (foundation doc forthcoming); this doctrine names failure-shapes in context but does not enumerate them taxonomically."

2. **F4 representation-authority.md:42** — "**Failure-mode taxonomy** — systematic enumeration of how representation-authority can break (maintainer capture, stale text, corrupt graph, adversarial attestation). That is F6 failure-modes scope (forthcoming); this doctrine names failure-shapes in context but does not enumerate taxonomically."

3. **structural-legitimacy.md:50** — "**Adversarial cases**: what does coupling look like when some participants actively work to decouple authority from consequence (regulatory capture, rent-seeking, administrative capture)? The canon's openwashing discipline and power-capture ADRs address fragments of this, but a **unified failure-mode taxonomy for coupling-breakdown is future work**."

**Read**: F6 is canonically requested by three foundation docs. The audit-question is not whether F6 fills a gap — it's what **shape** of taxonomy discharges three already-canonized forward-references + audit-v2 §6.4 item 6 + §3.3 item 7.

### A.2 Canon-legible failure-modes named in current canon (inventory)

Seven canon-legible failure-shapes are **already named in canon body** across ADRs + foundation docs + project-vision:

| # | Canon-legible failure mode | Named at | Category signal |
|---|----------------------------|----------|-----------------|
| 1 | **Substitution trap** (ADR-0048) | project-vision.md:97, governance-artifacts.md:75, concepts yaml v6 slug | Meta-pattern / composition failure — authority assigned without comprehension |
| 2 | **Decentralization-theater** (ADR-0005) | federation-protocol.md:62, concepts yaml v2 slug | Protocol/representation — topology-without-governance |
| 3 | **Digital-labor-as-free-gift** (ADR-0005) | federation-protocol.md:64 | Actor/reproduction — silent delegation to invisibility |
| 4 | **Admin-capture / gatekeeper-role accrual** (ADR-0005, ADR-0047 Layer 3) | federation-protocol.md:30, project-vision.md:43 | Actor/membrane — asymmetric authorization accumulation |
| 5 | **Power-capture (compound)** (ADR-0005 bundle) | federation-protocol.md:60, concepts yaml v-original slug | Meta-pattern / power-bundle |
| 6 | **Filtering-membrane** (frozen-vocab opposition primitive, v2) | concepts yaml:482, governance-artifacts.md:59 (distinct-from note) | Membrane — over-filtering as failure-shape |
| 7 | **Linguistic-closure** (lexicon doc, Johar-named) | lexicon/linguistic-closure.md:33-41 | Meta-pattern / representation — abstraction-as-stopping-rule |

**Plus federation-protocol-internal "Failure Modes" table (4 entries)** at federation-protocol.md:166-173: (a) Peer unreachable / (b) Event rejected / (c) Schema mismatch / (d) Key compromise. **These are protocol-level operational failures, not foundation-layer taxonomy shapes.** Shape-precedent for table-format naming; not members of the F6 doctrine layer.

### A.3 Additional failure-adjacent language scattered across canon

- project-vision.md:72 "**replication-crisis as reproductive-failure mode** (Structured Disagreement) operationalize reproduction at institutional scale" — reproductive failure already named by ADR-0049 precursor.
- project-vision.md:211 "**Absence of any layer invites a specific failure mode**" (three-layer coordination stack per ADR-0004) — layer-absence as failure.
- holonic-network-architecture.md:71 "**Ambiguous interfaces are a governance failure mode, not a design feature.**"
- holonic-network-architecture.md:115 "decentralization-theatre failure mode" (ADR-0005 citation).
- lexicon/stigmergy.md:73-75 three stigmergy-specific failure modes: medium-integrity, trace-format, trace-interpretation.

### A.4 Pattern-library failure-language check

Grep `docs/patterns/` for "failure" returned **zero hits**. Pattern-library does not yet carry failure-language; F6 does not inherit any pattern-layer vocabulary.

---

## B. Audit-v2 §6.4 item 6 verbatim citation

**§6.4 priority-6** (line 359): "Failure-mode taxonomy (Opus-4-7)"

**§3.3 item 7** (line 208) — Opus-4-7's originating formulation:
> "**Failure-mode taxonomy** (Opus-4-7) — canon describes what happens when coordination works; essentially no language for failure. What happens when a federation node is captured, evidence is fraudulent, commitment is broken, nodes disagree on provenance, canon-review is itself captured, metaphor rots?"

**Six Opus-4-7 exemplars** unpacked from §3.3 item 7:

| # | Opus-4-7 exemplar | Maps onto |
|---|-------------------|-----------|
| a | Federation node captured | Actor-capture (F3-scope; forward-ref) |
| b | Evidence fraudulent | F1-substrate → F6 evidence-failure category |
| c | Commitment broken | Commitment-break failure (operator-seeded) |
| d | Nodes disagree on provenance | F4-substrate / representation-conflict failure |
| e | Canon-review itself captured | **Meta-canon failure** — NOT in operator-seeded list |
| f | Metaphor rots | **Linguistic-closure / semantic drift** — NOT in operator-seeded list directly (though substitution-trap adjacent) |

### Phase 4 scoping plan F6 scope assertion (p4-scoping line 41)

> "F6 | failure-modes | 6 | 5 | DEFICIT | → F1 (sensor-failure) + F3 (actor-capture)"

F1 substrate: LANDED. F3 substrate: NOT LANDED (Tier B head; operator-inverted ordering).

---

## C. F3 forward-ref handling options

**Constraint**: F3 actor-governance is NOT yet landed. F6 must name actor-capture failures *without* assuming the specific governance doctrine F3 will establish.

Three options:

- **C-opt-1**: Name actor-capture as a failure-mode **category** in F6, with body-text stating "actor-capture-specific governance doctrine (who has standing to contest, who adjudicates) is the scope of F3 actor-governance (forthcoming); F6 names the failure-shape taxonomically without prescribing the actor-governance resolution."
- **C-opt-2**: Omit actor-capture entirely; defer its categorization to F3 itself (F3 adds actor-capture section to F6 when F3 lands).
- **C-opt-3**: Partial — name actor-capture as a recognized failure-shape but do not build a doctrine-per-category subsection for it until F3 lands; F6 §Related cross-ref.

**Audit recommendation**: C-opt-1 (comprehensive taxonomy with forward-ref discipline). F6's job IS the taxonomy; silently omitting a load-bearing failure-category because its governance-doctrine isn't authored breaks the forward-refs at F1:39 / F4:42 / structural-legitimacy:50 which already cite actor-capture failure-shapes ("maintainer capture", "regulatory capture") as things F6 should enumerate.

C-opt-1 inherits the F4 pattern: F4 names sensor / attestation / agent-summary precedence *doctrinally* even though F5 actuator-logic (the operational-response doctrine) is not yet landed. Shape-parallel.

---

## D. Dependency check — F1 sensor-failure naming overlap

F1 names three sensor-failure-shapes at §4.4 Proxy Contestation (sensor-oracle-governance.md:106-110): wrong-target / decay / captured maintainer / superseded sensor. Plus §4.5 Multi-Sensor Disagreement.

**F6 must not re-enumerate these at equal depth; F6 must categorize them at taxonomy-layer.** Three routes:

- **D-route-1**: F6 names "sensor-input-integrity failures" as a taxonomy category, cites F1 §4.4 + §4.5 for the detailed governance-responses, and does not itemize the specific sub-shapes.
- **D-route-2**: F6 enumerates sensor-failure-shapes as examples under a broader category ("Evidence-integrity failures") and cross-refs F1 for governance treatment.
- **D-route-3**: F6 declines to include sensor-failures at all; F1 is the sensor-failure home.

**Audit recommendation**: D-route-1 preserves taxonomy-layer scope without duplicating F1's governance specifics. F1 carries the per-concern doctrine; F6 carries the cross-concern taxonomy. Same relationship F6 has with F3 (forthcoming): taxonomy names the failure-class; governance-doctrine adjudicates it.

---

## E. substitution-trap disposition

`substitution-trap` (ADR-0048) is currently:
- a **concept slug** in concepts yaml v6 (canonical label "Substitution Trap")
- a **canon-legible failure mode** per project-vision.md:97 + governance-artifacts.md:75 + ADR-0048 §"Substitution-trap as canon-legible failure mode"
- **cross-cutting** — it manifests across Power modes (ADR-0048), Reproduction (ADR-0049 §82), Joint-commitment (ADR-0050 §219)

**F6 disposition options**:

- **E-opt-1**: Name substitution-trap as a **meta-pattern failure-class** in F6 (composition-failure where one mode substitutes for another), distinct from per-category failure-shapes. Honors its already-documented cross-cutting character.
- **E-opt-2**: Embed substitution-trap as an example within multiple per-category failure subsections (power / reproduction / joint-commitment), matching its current canon treatment.
- **E-opt-3**: Decline to re-name it in F6; ADR-0048 + project-vision.md already carry its canon home.

**Audit recommendation**: E-opt-1 — surface substitution-trap as the **exemplar of a meta-pattern failure-class** distinct from per-category failures. F6 gains a "composition failures" or "meta-pattern failures" category which substitution-trap anchors. Operator-seeded taxonomy doesn't have this category; audit proposes adding it.

---

## F. Structural-legitimacy sibling-doctrine question

Structural-legitimacy.md is the **positive doctrine** ("authority-consequence coupling grounds legitimacy"). F6 failure-modes would be its **counterpart** — what coupling-breakdown looks like taxonomically. Structural-legitimacy:50 explicitly defers "unified failure-mode taxonomy for coupling-breakdown" to future work.

**F6 disposition options**:

- **F-opt-1**: Position F6 as sibling-doctrine (counterpart-axis) to structural-legitimacy.md. Frame the taxonomy as "coupling-breakdown shapes" across the canon's operational surface.
- **F-opt-2**: Position F6 as independent taxonomy with structural-legitimacy cited as one substrate among several (alongside ADR-0046 rule-stratification, F1 sensor-governance, etc.).

**Audit recommendation**: F-opt-2 with explicit structural-legitimacy cross-ref as load-bearing substrate. Sibling-framing (F-opt-1) is too narrow — F6 must also cover failure-shapes that don't reduce to coupling-breakdown (e.g., linguistic-closure, schema-mismatch, absent-evidence handled wrong, actor-capture). Coupling-breakdown is one failure-family within F6's scope.

---

## G. Rule-stratification applicability check

F1 + F4 both inherit **ADR-0046 Ostrom 3-level rule-stack** as §"Structural Doctrine — Rule-Level Stratification" (§3 in both). ADR-0046 line 225 permissively offers this inheritance to subsequent foundation docs.

**F6 question**: does failure-mode governance operate across the same 3 rule-levels?

- **Constitutional-rule failures**: when standing-to-contest is systematically denied, when membership-boundaries themselves are corrupted (who-has-voice is broken).
- **Collective-choice-rule failures**: when the protocols-for-deciding themselves are captured or fail (ADR-0005 admin-capture; captured canon-review).
- **Operational-rule failures**: when day-to-day application drifts, accumulates exceptions, or is corrupted (sensor decay, attestation-lag, stale text).

**Audit recommendation**: G-opt-yes — F6 inherits ADR-0046 rule-stratification as the **structural scaffold for categorizing failures by which rule-level they manifest at**. Each failure-category is then decomposable across the 3 levels (parallel to F1's §4.1-4.7 decompositions). This is reusable-Tier-inheritable template from F1.

---

## H. Cluster-counting for earning-test per proposed category (honest-rigor per `feedback_audit_then_propose.md`)

Per-category independent-tradition cluster count (parallel to ADR-0064 discipline):

| Operator-seeded category | Clusters | Honest-rigor verdict |
|--------------------------|----------|----------------------|
| Representation failures | Ostrom (institutional), ADR-0041/F4 (Spore-native), philosophy-of-science (underdetermination) | ≥2 clusters; ADMIT |
| Protocol failures | Distributed-systems (CAP / Lamport / Lynch FLP), federation-protocol internal table, Kostakis/Gallus peer-gov opposition | ≥3 clusters; ADMIT |
| Sensor / attestation failures | F1 §4.4, oracle literature (Augur/Chainlink), attestation-fraud literature | ≥2 clusters; ADMIT |
| Scale-transition failures | Ostrom polycentric (scale-mismatch), VSM S4/S5 viability, institutional economics "tragedy of scale" | ≥2 clusters; ADMIT |
| Membrane-boundary failures | Ostrom Principle 1 (boundary-unclear), filtering-membrane frozen-vocab, double-boundary axis | ≥2 clusters; ADMIT |
| Commitment-break failures | Gilbert/Tuomela joint-commitment breach, contract-law breach-of-promise, REA accounting | ≥2 clusters; ADMIT |
| Actor-capture failures (F3 forward-ref) | Federici capture, Kostakis admin-capture, regulatory-capture literature (Stigler) | ≥3 clusters; ADMIT with F3 forward-ref |
| **Meta-pattern / composition failures** (audit-proposed) | ADR-0048 substitution-trap, ADR-0005 bundle, replication-crisis as "publication-categories became self-sealing" (linguistic-closure.md:33), structurelessness-tyranny (Kostakis) | ≥3 clusters; ADMIT |

All 8 categories pass honest-rigor ≥2-cluster threshold. **Parsimony question**: is 8 categories over-engineered? Counter-question: 7 operator-seeded + 1 audit-proposed (meta-pattern) covers the six Opus-4-7 exemplars from §3.3 item 7 without leaving any uncategorized. Meta-pattern category specifically captures (e) "canon-review captured" and (f) "metaphor rots" which do not fit cleanly into the other 7.

### Meta-pattern failures — the audit-proposed addition

Key observation: substitution-trap, linguistic-closure, decentralization-myth-bundle, replication-crisis-as-publication-category-closure — these are all **failures where the canon-machinery itself becomes the failure vector**. They are not intra-category (where sensor/protocol/membrane fails in its proper operation) but cross-category (where the grammar-dynamic substitutes for what it was meant to enable).

This category is distinct enough from the other 7 that omitting it leaves the Opus-4-7 formulation under-answered. Including it gives F6 the canon-legible home for substitution-trap + linguistic-closure + canon-review-capture + metaphor-rot.

---

## I. Cross-repo applicability check (IC + PM)

Per ic:ADR-0019 + pm:ADR-0015 precedent from spore:ADR-0070 cross-repo work: sibling repos may reference F6 once landed.

**IC applicability**: IC's 7 intelligence primitives carry distinct failure modes (memory-capture, stewardship-decay, epistemic-closure). IC foundation doc `intelligence-primitives.md` already touches failure-adjacent language in §3.3 item 6 v2-audit reference. IC could author ic:ADR alignment post-F6.

**PM applicability**: PM's 4 protocol objects have commitment-break failure as first-class concern. PM is Pre-alpha; DH-PM-1 held-tension governs caution on additive canon work pre-Victoria LHC.

**Audit recommendation**: I-narrow — F6 is Spore-only. IC + PM cross-repo alignment ADRs can land post-F6 (Wave N cross-repo queue). No I-wide scope-flip at F6 authoring time.

---

## Summary — audit findings

1. **F6 is canonically requested by 3 foundation docs** (F1:39, F4:42, structural-legitimacy:50) + audit-v2 §6.4 item 6 + Opus-4-7 §3.3 item 7 six exemplars.
2. **7 canon-legible failure-shapes** already named in canon; F6's job is to categorize + taxonomize them + handle new-ones not yet canonized.
3. **F3 forward-ref handling**: C-opt-1 (name actor-capture category with F3-defers-governance note) preserves taxonomy completeness.
4. **F1 overlap**: D-route-1 (F6 categorizes sensor-failures as a class; F1 carries per-shape governance) preserves layer-clean separation.
5. **substitution-trap**: E-opt-1 (name a "meta-pattern failures" category anchored by substitution-trap) surfaces it structurally.
6. **structural-legitimacy relationship**: F-opt-2 (independent taxonomy with structural-legitimacy as one substrate) avoids over-narrowing.
7. **ADR-0046 rule-stratification**: G-opt-yes (inherit as structural scaffold; each category decomposes across 3 rule-levels).
8. **Honest-rigor cluster-counting**: 8 categories (7 operator-seeded + 1 audit-proposed meta-pattern) all pass ≥2-cluster threshold.
9. **Cross-repo**: I-narrow (Spore-only; IC + PM post-F6).

The operator-seeded 7 categories are a **solid seed** but miss the meta-pattern failure-class exemplified by substitution-trap + linguistic-closure + ADR-0005 bundle + replication-crisis. Audit proposes adding this as an 8th category.
