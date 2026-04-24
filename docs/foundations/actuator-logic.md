---
doc_id: spore.actuator-logic
doc_kind: foundation
status: active
depends_on:
  - spore.project-vision
  - spore.governance-artifacts
  - spore.structural-legitimacy
  - spore.sensor-oracle-governance
  - spore.representation-authority
  - spore.failure-modes
---

# Actuator Logic

Spore canon names sensors (F1), representation-authority (F4), and failure-modes (F6). Actuator-logic is the doctrine that names *what canon or an instance does next* — the response-selection layer that fires once an **observable epistemic gap** is recognized or a failure-category is named.

## Core Claim

Actuator-logic is Spore canon's **response-doctrine**. A grammar that can recognize gaps and categorize failures but cannot specify how to respond to them is operationally incomplete. When sensor-evidence disagrees with declared intent or commitment-authored-state (per F1 §4.7 and ADR-0056 reframe of the former `intent-pressure` concept), when inter-layer precedence resolves who-is-authoritative in a contested case (per F4 §5.3), or when a failure-mode category has been recognized (per F6 §4) — the next question is the same: *what response fires, under whose standing, via which protocol, at which rule-level?*

The doctrine commits to **principled-rule response-selection**. Canon does not prescribe response-selection algorithms (voting thresholds, timeout rules, consensus heuristics) — those are pattern or protocol layer. Canon commits to (a) the response-category taxonomy, (b) the principled-rule governing which category fires when, and (c) the rule-stack routing through which selection is legitimated.

## Scope

An **epistemic gap** is an observable divergence between declared intent or commitment-authored-state (what canon or an instance specifies) and sensor-reported or attested reality (what F1 governs at input). The term replaces the pre-ADR-0056 `intent-pressure` concept at the Phase 4 foundation layer — `intent-pressure` remains accessible as a research-connection (`docs/research/connections/intent-pressure.md`) but is no longer load-bearing in canon body. "Observable epistemic gap" appears verbatim at `docs/foundations/governance-artifacts-and-graph-projections.md:140` as the reframed canonical phrasing.

A **response-doctrine** is the canonical selection-protocol for operational response to a recognized failure (per F6) or observable epistemic gap (per F1 + F4).

**In scope** for this doctrine: response-category taxonomy; principled-rule for response-selection; rule-stack routing for selection-adjudication; cross-doctrine coupling with F1 (gap-recognition at sensor layer) + F4 (precedence-resolved authority) + F6 (failure-category recognition).

**Out of scope** for this doctrine:

- **Intra-modality governance** — who selects a sensor, who maintains it, how disagreements within a modality are resolved. That is F1 sensor-oracle-governance scope.
- **Inter-layer precedence** — which representation layer wins when representations across text / graph / sensor / attestation / agent-summary disagree. That is F4 representation-authority scope. F5 inherits F4 §5.3 appeal-protocol wholesale (per cite-don't-redefine discipline, ADR-0076 method-precedent 2); F5 does NOT re-author an appeal-protocol.
- **Failure-category recognition** — the 8-category taxonomy of coordination-breakdown shapes (representation / protocol / sensor-attestation-evidence-integrity / scale-transition / membrane-boundary / commitment-break / actor-capture / meta-pattern-composition). That is F6 failure-modes scope.
- **Actor-capture response doctrine** — who has standing to contest a captured actor, who adjudicates, what the recall / replacement / intervention protocols are. That is F3 actor-governance scope (forthcoming). F5 §4.2 forward-references F3 for actor-capture-specific response per F6.7 pairing; F5 does not wait for F3 to land.
- **Selection algorithms** — specific voting thresholds, timeout rules, consensus mechanisms for selecting a response in a contested case. Those belong to pattern or protocol layer.
- **Reversibility taxonomy** — canon currently has no axis distinguishing reversible-vs-irreversible actuation. R5 withhold / R6 rollback below are reversibility-sensitive by nature but F5 declines to admit a reversibility axis in this scope; future ADR may do so if cross-tradition convergence fires.

The 5-category response taxonomy is held as **recognized response-category inventory**, not as an exhaustive enumeration. New categories may be admitted via future ADRs under the same honest-rigor cluster-counting discipline (≥2 independent traditions converging on the category) that ADR-0075 applied to F6.

## Structural Doctrine — Rule-Level Stratification

Actuator-logic operates across the three Ostrom rule-levels inherited from ADR-0046 (Field rule-level stratification). This is the structural scaffold for response-selection. F1, F4, and F6 established the inheritance pattern; F5 is the fourth application.

- **Constitutional rule layer** — who has standing to invoke which response-category; federation-level response-authority (e.g., who may authorize an amend-declared-state operation on federation-scope specification-text; who may invoke hold-as-tension across federation members). Constitutional-rule decisions establish *who may play the response-selection game* at all.
- **Collective-choice rule layer** — the protocol by which response-selection is made within the constitutional frame; criteria for escalation from one response-category to another; the protocol for declaring a gap-to-response mapping default at the instance or federation level. Collective-choice decisions establish *the rules of response-play*.
- **Operational rule layer** — routine response-selection in cases falling within already-declared mappings. An operator amending a text-authored pool balance to match a sensor reading; an attester issuing a retraction via contest-routed-through-F1; an individual noting a gap via acknowledge-and-record. Operational decisions are *moves within the response-game*.

A single response-event frequently invokes all three levels: routine amendment is operational; disputes about whether amendment is the appropriate response escalate to collective-choice; challenges to the response-doctrine itself (should this class of gap admit R4 escalate, or is R7 hold-as-tension the honest response?) escalate to constitutional. The three levels form a stack, not a partition.

Routing through the rule-stack is how contested response-selection cases resolve without doctrine-specified algorithms (see §5 below).

## Doctrine — Principled-Rule for Response-Selection

The 5 admitted response-categories share a common principled-rule: **response-selection is governed by (a) the gap-shape, (b) the canonical text-type per F4, and (c) the rule-level per ADR-0046, routing through the rule-stack where cases are contested.**

This B1 unified principled-rule structure diverges from F6's B2 per-category structure because response-modes are NOT structurally heterogeneous like F6's 8 failure-categories. Where F6 categorizes *what component of canon is failing* (representation / protocol / sensor / scale / membrane / commitment / actor / meta-pattern — each category has distinct internal structure), F5 categorizes *operational-response shape given a gap* — and response-shapes share a common principled-rule at the selection layer. Template-adaptability is substrate-driven (see ADR-0076 method-precedent 1).

### §4.1 R1 — Acknowledge-and-Record

**Principle**: default minimal response. The observable epistemic gap is logged as canon-legible — added to the held-epistemic-tension register, the bridge-note record, the governance-memory pattern entry, or the failure-log — without further intervention. "No change" is a case of R1 when the gap is deemed unresolvable-but-recorded; "alert" is a case of R1 when the recording itself triggers notification.

**Rule-level decomposition**:

- Constitutional-rule: who has standing to author a canon-legible record of a gap (instance members; federation delegates; designated stewards).
- Collective-choice-rule: the recording protocol — where gaps are recorded, what metadata is mandatory, how recordings are reviewed, how expired recordings are archived.
- Operational-rule: routine recording events.

**When R1 fires**: when the gap is genuinely minor, when a higher-authority response requires further evidence not yet gathered, when ADR-0001 pluriversal-incommensurability is the probable shape and deferral-to-R7 is premature, or when the gap is so novel that its category is itself contested.

**Cross-tradition anchoring**: Ostrom rules-in-use documentation discipline (Principle 8 nested governance-memory); canon-review governance-memory pattern (documents as machine-readable constitutional memory); linguistic-closure.md claim lifecycle + attestation decay as structural-response to closure risk.

### §4.2 R2 — Contest

**Principle**: protocol-based challenge to the authority of a sensor, attestation, agent-summary, graph projection, or text claim. R2 is the response-category that actively invokes appeal-routing machinery. For sensor-layer contests, R2 routes through F1 §4.4 proxy-contestation. For inter-layer precedence contests, R2 routes through F4 §5.3 appeal-protocol wholesale (per cite-don't-redefine discipline; see ADR-0076 method-precedent 2). F5 does NOT author a parallel response-specific appeal-protocol — R2's adjudication mechanics are fully inherited from F1 + F4.

**Actor-capture forward-reference (F3 forthcoming)**: when R2 fires against a captured actor (F6.7 category), actor-capture-specific governance-response — standing to contest a captured actor, adjudication pathway, recall / replacement / intervention protocols — is the scope of F3 actor-governance (forthcoming). F5 §4.2 routes actor-capture contests to F3; at the sensor / representation / commitment layers (F6.1–F6.6 + F6.8), F5's contest-discipline (routing via F1 §4.4 or F4 §5.3) applies directly.

**Rule-level decomposition**:

- Constitutional-rule: who has standing to contest at all.
- Collective-choice-rule: the contestation-routing protocol (inherited from F1/F4; see above).
- Operational-rule: the specific contestation event and its adjudication.

**When R2 fires**: when the gap is attributable to a specific authority-source (a captured sensor, a stale text, a fraudulent attestation, an over-ridden precedence declaration) AND the contesting party bears consequence if the challenge fails. Structural-legitimacy coupling (per `docs/foundations/structural-legitimacy.md`) is load-bearing: a contest from a party insulated from outcome is structurally illegitimate.

**Cross-tradition anchoring**: Ostrom Principle 6 conflict-resolution mechanisms; polycentric-governance mutual-adjustment literature; structural-legitimacy.md:39 contestability mechanisms — *"when consequences deviate from expectations, the grammar provides explicit surfaces for contestation (bridge notes, held-tension ADRs, foundational-reframing proposals). Coupling maintained through the ability to signal decoupling."*

### §4.3 R3 — Amend-Declared-State

**Principle**: canon-review authoring updates commitment-authored-state or specification-text to reflect observed reality. R3 is the text-authoritative path per F4 §5.1 default: when the gap reveals that specification-text is out-of-date relative to sensor-reported or attested reality, and the specification is the side that should update, R3 fires. Conversely, when specification-text is what-should-be and sensor-reported reality is what-should-change-to-match-specification, R3 does NOT fire — other operational machinery (not F5 scope) handles the instance-level compliance work.

R3 is the canonical response for **fact-reporting text-type** gaps per F4 §5.1 (pool balance records, attestation entries, sensor readouts, meeting-occurrence logs) — text records the fact-reporting-layer's authority, and R3 updates the record when sensor or attestation reveals divergence.

R3 is also the canonical response for **specification-text** updates triggered by evidence per F4 §5.1 — when the specification itself is found to be inconsistent with observed reality in a way that warrants amendment (not merely compliance-work), R3 invokes the canon-review machinery (ADR-0041 text-authoritative; ADR-0046 `propose-amendment = Intent` operation; canon-review-protocol §12 governance-amendment guard where applicable).

**Rule-level decomposition**:

- Constitutional-rule: who has standing to author amendments to specification-text at different levels (individual-scope text; federation-scope text; constitutional-scope text).
- Collective-choice-rule: the amendment protocol — proposal, deliberation, ratification, merge.
- Operational-rule: individual amendment events; pull requests; draft → active transitions.

**When R3 fires**: when the gap is text-vs-reality and text is the side that should update; when canon-review machinery can carry the amendment; when the amendment scope is within the authoring party's standing.

**Cross-tradition anchoring**: constitutional-amendment literature (List/Pettit; legal scholarship on amendment-threshold); ADR-0041 text-authoritative canon-review; Debian §4/§5/§6 + PEP 13 Steering Council enumerated-powers-by-role amendment-threshold patterns; Gilbert/Pettit joint-commitment revision discipline (ADR-0050 shape — amendments to jointly-held commitments require concurrence not unilateral revision).

### §4.4 R4 — Escalate

**Principle**: route the gap-response decision to the next Ostrom rule-level per ADR-0046. Operational-rule gaps that cannot be resolved at operational-rule escalate to collective-choice-rule. Collective-choice-rule gaps that cannot be resolved there escalate to constitutional-rule. R4 is the structural-response to rule-stack-mismatch: the gap reveals that the response-protocol at the current rule-level is insufficient, and the honest next move is to invoke the adjacent-higher level's machinery.

**Rule-level decomposition** (R4 is intrinsically rule-level-axis-aligned):

- Constitutional-rule: who has standing to invoke escalation at each boundary (operational → collective-choice; collective-choice → constitutional).
- Collective-choice-rule: the escalation-invocation protocol — when escalation is warranted, how it is initiated, what the escalation-record contains.
- Operational-rule: routine escalation events within established protocols.

**When R4 fires**: when the gap reveals that the response-protocol at the current rule-level is itself the constraint — routing to the adjacent-higher rule-level is the structurally-honest next move. R4 is distinct from R2 (contest) in that R2 challenges a specific authority-source; R4 invokes higher-level machinery without necessarily challenging the lower-level authority-source as illegitimate. Shape-parallel to F1 §4.7 absent-evidence escalation and F4 §5.3 appeal-protocol rule-stack routing.

**Cross-tradition anchoring**: Ostrom 3-level polycentric-governance (V. Ostrom 1972; Aligica-Tarko 2012; Kiser-Ostrom 1982); VSM S4/S5 viability-and-environmental-model escalation (Beer); recursive-democracy subsidiarity principle (authority exercised at the lowest-competent level; escalation when that level proves insufficient).

### §4.5 R7 — Hold-as-Tension

**Principle**: when R1–R4 all fail at all rule-levels — when the gap cannot be honestly recorded as minor (R1), contested without escalating further (R2), resolved by amendment (R3), or adjudicated by rule-stack routing (R4) — the gap is canonically held rather than force-resolved. This inherits ADR-0001 pluriversal-incommensurability held-tension pattern and extends F1 §4.5 multi-sensor-disagreement + F4 §5.4 held-epistemic-tension disciplines.

Three properties of held-as-tension at the response-doctrine level:

1. **The gap is canon-legible** — it is recorded in canon as a held-response-tension, not silently collapsed into one response winning by fiat.
2. **Holding is provisional** — held-as-tension invites further work (additional evidence; revised context-override per F4 §5.2; canon-review amendment; new response-category admission). It is not permanent closure.
3. **Downstream coordination continues** — holding a response-tension does not block downstream coordination that depends on what IS agreed; it scopes the non-agreement narrowly.

**Rule-level decomposition**:

- Constitutional-rule: who has standing to declare a response-tension as held (analogous to pluriversal-incommensurability declaration per ADR-0001).
- Collective-choice-rule: the held-tension recording and review protocol.
- Operational-rule: individual held-tension declarations; held-tension-register maintenance.

**When R7 fires**: when the gap exhibits genuine incommensurability (often at the intersection of pluriversal interpretation per ADR-0001); when the response-category itself is under dispute across rule-levels; when the honest canon-legible position is *"we recognize the gap; we cannot currently resolve the response-selection; we hold the tension rather than force-resolve."*

**Cross-tradition anchoring**: ADR-0001 pluriversal-incommensurability (primary canon anchor); dialectical-tension tradition (Arendt, Mouffe agonistic-pluralism); F1 §4.5 + F4 §5.4 held-epistemic-tension precedent.

### §4.6 Operationally-Valid, Not Canonically Classified

Two response-shapes exist operationally but do NOT jointly pass earning-test at heavier-admission threshold per ADR-0062/0063/0064 scope-conditioning precedent. Canon names them as recognizable operational patterns without canonically classifying them:

- **R5 withhold / pause** — halt actuation pending resolution. Applies especially to irreversible-action cases (executed commitments; on-chain transactions; external-party notifications). Operational shape: freeze the in-progress response; maintain the pre-response state; await further evidence or authority-resolution. Honest-rigor earning-test: Q-α PARTIAL (operationally specifiable; no protocol-surface in canon); Q-β WEAK (single-tradition engineering-ops support — database transaction isolation, aviation safety-stop protocols; no cross-canon anchor). Fails at heavier-admission threshold.
- **R6 rollback / restore** — revert to prior-legitimate state. Applies especially to executed-but-unratified changes (a pool settlement that executed before ratification was confirmed; a canon-edit that merged before its ADR was active; a federation broadcast that proceeded without joint-commitment per ADR-0050). Same earning-test profile as R5.

R5 and R6 are reversibility-sensitive by nature. Canon currently has no reversibility axis. Admitting one is out-of-scope for F5 (parking-lot item); absent a reversibility axis, slug-admission for R5/R6 would over-engineer. Honest-rigor disposition: name in body-prose as operationally-valid; do not admit as response-categories; do not admit slugs; defer to future ADR if cross-tradition convergence fires.

This is the fourth operational-use of the scope-conditioning-over-admission discipline after ADR-0062 Membrane production-mode / ADR-0063 Signal sense-making-mode / ADR-0064 Field co-presence-mode. The discipline is now canon-method convention for concepts that pass Q-α PARTIAL + Q-β WEAK but demonstrate operational validity.

## Selection Rule — Default, Context-Overrides, Appeal-Inheritance

The doctrine's central move: given a recognized gap, which response-category fires? The selection-rule commits to three components — a default selection based on gap-shape and text-type, context-overrides that carry domain-specific selection, and appeal-inheritance that routes contested selections through F4 §5.3 wholesale.

### §5.1 Default Selection

The default response-category depends on **gap-shape** + **canonical text-type per F4**:

- **Specification-text gap, minor** (specification clarification needed; no coordination-consequence pending): **R1 acknowledge-and-record** as default; amendment may follow if the recording accumulates.
- **Specification-text gap, load-bearing** (specification found inconsistent with observed reality in a way that warrants amendment, not compliance-work): **R3 amend-declared-state** as default; canon-review machinery carries the amendment; F4 §5.1 text-authoritative default governs.
- **Fact-reporting-text gap** (pool balance; attestation record; sensor readout; meeting-occurrence log): **R3 amend-declared-state** as default (text updates to match fact-reporting-layer authority per F4 §5.1).
- **Authority-source gap** (sensor reading attributable to sensor decay or maintainer capture; representation attributable to stale graph or corrupt attestation; actor decision attributable to captured actor): **R2 contest** as default; routing via F1 §4.4 (sensor) or F4 §5.3 (inter-layer) or F3 (actor, forthcoming).
- **Rule-stack gap** (the gap reveals the response-protocol at the current rule-level is the constraint): **R4 escalate** as default; routing to adjacent-higher rule-level per ADR-0046.
- **Incommensurable gap** (pluriversal-context per ADR-0001; or the response-category itself is under dispute across rule-levels): **R7 hold-as-tension** as default; canon-legible held-response-tension recording.

The default is canon-legible prose-guidance, not algorithmic selection. Individual gaps may fall across multiple defaults, may warrant context-override, or may be contested. The default captures the honest first-pass response for the common case.

### §5.2 Context-Overrides

Instance-level or federation-level decisions can declare specific domains where a non-default response-selection applies. Context-overrides are collective-choice-rule decisions (per §3) that stabilize a domain-specific response-selection in advance of contested cases.

Examples of context-overrides that commonly apply in Spore instances:

- **Reproductive-continuity Evidence** (per ADR-0049 + F1 §5): persistent absence of longitudinal-attestation is governance-decay-flag, fires R4 escalate by default rather than R1 acknowledge-and-record.
- **Irreversible-action domains**: when the gap concerns an action whose execution cannot be cleanly undone (external broadcast, financial settlement, cryptographic commitment), instance may declare R5 withhold / pause as operational first-response pending resolution — even though R5 is prose-only not canonically-classified.
- **Pluriversal-context**: ADR-0001 held-tension declaration fires R7 hold-as-tension automatically, bypassing R1–R4 default progression.
- **Canon-review-in-progress**: during active canon-review, adjacent-to-contested specification-text is treated as held (F4 §5.2 precedent); default R3 amend-declared-state is suspended for review scope.
- **Federation-scale sensor-sovereignty**: federated response-selection may diverge from instance-level defaults when the gap concerns a sensor consumed by multiple federations with different rule-stacks (flagged in §6 as open concern).

Context-overrides are canon-legible: an instance or federation publishes its declared overrides; undeclared context-overrides are not authoritative.

### §5.3 Appeal-Inheritance (F4 §5.3 Wholesale)

When default plus declared context-overrides still produce ambiguity — or when a context-override itself is contested — the doctrine **inherits F4 §5.3 appeal-protocol wholesale** per the cite-don't-redefine discipline (ADR-0076 method-precedent 2). F4 §5.3 already generalizes Ostrom 3-level rule-stack routing across multi-layer representation-authority cases; F5's response-selection cases route through the same appeal machinery without authoring a parallel structure.

Specifically:

- **Operational-rule routing** — routine response-selection by those with operational standing (a pool-operator selecting R3 amend-declared-state to reconcile a pool-balance discrepancy; an attester selecting R1 acknowledge-and-record for a minor observation).
- **Collective-choice escalation** — disputes about which response-category fires in a specific case, or whether the default is being correctly invoked, route to those with collective-choice standing (canon-review participants; context-override authors).
- **Constitutional-rule escalation** — disputes about the response-doctrine itself (should this class of gap admit R4, or is R7 the honest response? does a specific domain warrant a context-override?) route to those with constitutional standing (federation members; canon-review at full ceremony).

Routing through the rule-stack is the foundation-layer commitment. The specific algorithm at each level (voting threshold, consensus rule, ombuds review, held-tension declaration) is pattern or protocol-layer work, not foundation-layer.

**No response-specific appeal-protocol is authored.** F5 inherits F4 §5.3 wholesale. Single-source-of-truth discipline preserved.

### §5.4 Unresolved Selection as Held-Response-Tension

When default, context-override, and appeal-routing all fail to produce unambiguous response-selection, the selection-failure is itself canonically held rather than force-resolved. This inherits ADR-0001 pluriversal-incommensurability + F1 §4.5 + F4 §5.4 held-tension patterns and applies them at the response-selection layer.

Held-response-tension is distinct from R7 hold-as-tension: R7 holds the **gap**; held-response-tension holds the **response-selection disagreement**. Both are canon-legible; both invite further work; both scope the non-agreement narrowly.

## Relationship to Structural-Legitimacy (H3 Hybrid)

F5 operates in H3 hybrid relationship with existing canon:

- **Substrate-child to ADR-0042 structural-legitimacy**: authority-consequence coupling (ADR-0042) grounds response-legitimacy. A response-category selection that preserves coupling (decision-makers bear the consequences of their response-choices) is legitimate; a selection that severs coupling-from-consequence (response-authority exercised by parties insulated from outcome) is illegitimate regardless of which response-category was technically-correct. Response-doctrine is what canon does to *maintain* authority-consequence coupling when gaps are recognized.
- **Operational-pair sibling to F6 failure-modes**: F6 recognizes the gap-shape (taxonomy of coordination-breakdown); F5 selects the response (operational-response after recognition). The two are operationally coupled but doctrinally distinct. F6 asks *"what category of failure is this?"*; F5 asks *"given that category, what response fires?"* Neither doc is primary; each discharges its scope independently and composes cleanly with the other.

This H3 hybrid is novel (ADR-0076 method-precedent 3): foundation docs can carry both vertical (substrate-child) and horizontal (sibling-pair) relationships simultaneously when operationally-coupled to another doctrine and grounded in a shared canon-substrate. Neither pure-vertical (extension) nor pure-horizontal (sibling) captures the dual-relationship.

## Open Questions

Actuator-logic is a foundational commitment but not a solved problem. Several concerns are flagged here as foundation-layer residue; operational treatment is deferred to pattern / protocol layer or to downstream foundation docs.

- **Reversibility axis for R5/R6**: canon has no reversibility axis. R5 withhold / R6 rollback are reversibility-sensitive by nature. Should F5 admit a reversibility property-on-response, a new response-category pair, or continue with prose-only treatment? Deferred: future-ADR trigger when cross-tradition convergence fires or operational pressure surfaces. Current discipline: prose-only per scope-conditioning precedent.
- **Response-category admission criteria**: F5 admits 5 categories under honest-rigor ≥2-cluster threshold. What admission-threshold applies to a proposed 6th category (e.g., `delegate-response` for actor-delegation cases; `quarantine` for contested-multi-party cases)? Audit-then-propose discipline (`feedback_audit_then_propose.md`) applies; specific threshold-doctrine is deferred — parallels F6 §Open Questions category-admission concern.
- **F3 forward-ref maintenance**: F5 §4.2 forward-references F3 actor-governance for actor-capture-specific response. When F3 lands, F5 does NOT require modification — F3 will extend F5 by adding per-actor-capture governance-response discipline without modifying F5 itself. This is the same forward-ref discipline F6 established for its own F3 forward-ref at §4.7.
- **Cross-instance response-selection across overlapping federations**: when a gap is recognized by multiple federations with different rule-stacks and different declared context-overrides, response-selection-at-the-federation-scale becomes contested. Parked for F7 minimum-viable-spore-instance (membership-and-boundary foundation) and ADR-0068 federation-encounter pattern (federation-scale coordination-recipe) to operationalize jointly.
- **Response-selection-as-signal feedback**: R1 acknowledge-and-record recordings accumulate into patterns that may themselves become evidence of systemic gap-shapes. Should F5 admit a feedback-loop where R1 accumulation fires R4 escalate automatically? Current disposition: NO — that is pattern-layer work (escalation-heuristics). F5 commits to the shape of response-selection, not to meta-heuristics that might further-automate it.
- **Phase 5 section-level status labels**: this foundation doc is deliberately tag-agnostic. The Phase 5 sweep (canon-rebuild-arc follow-on, not yet scheduled) will tag sections across all canon docs in one pass with status labels. Sections here are structured to be tag-ready but are not pre-tagged.

These open questions are foundation-layer concerns. Operational mechanisms for resolving them are pattern, protocol, or deployment-layer work.

## Related

- `docs/project-vision.md` — the 9-primitive roster (Evidence verb grounds coordination via what F1 senses; Commitment verb is what canon amends via R3; Signal verb carries contest-routing per F4 §5.3; Intent verb hosts amendment-proposal per ADR-0046 enact-rule/invoke-rule/propose-amendment mapping)
- `docs/foundations/governance-artifacts-and-graph-projections.md` — §Grounding Through Sensors names "observable epistemic gap" as canonical phrasing (line 140; ADR-0059c-shape palate-cleanser); F5 inherits at slug-level as `epistemic-gap`
- `docs/foundations/sensor-oracle-governance.md` (F1) — intra-modality governance; F5 forward-ref at F1:38 discharged by F5 doctrine; F1 §4.4 proxy-contestation inherited at F5 §4.2 R2 contest routing
- `docs/foundations/representation-authority.md` (F4) — inter-layer precedence; F5 forward-ref at F4:41 discharged by F5 doctrine; F4 §5.3 appeal-protocol inherited wholesale at F5 §5.3 per cite-don't-redefine discipline
- `docs/foundations/failure-modes.md` (F6) — 8-category failure-taxonomy; F5 forward-ref at F6:45 + :219 discharged by F5 doctrine; F6 recognize → F5 respond operational-pairing per H3 hybrid
- `docs/foundations/structural-legitimacy.md` — authority-consequence coupling grounds response-legitimacy; F5 H3 hybrid substrate-child relationship
- `docs/research/connections/intent-pressure.md` — the demoted research-connection that audit-v2 §6.4 item 5 framed F5 against; F5 reframes with `epistemic-gap` at Phase 4 foundation layer without re-importing `intent-pressure`
- `docs/research/canon-decisions/0001-pluriversal-incommensurability-held-tension.md` — held-tension pattern inherited at F5 §4.5 R7 hold-as-tension and §5.4 held-response-tension
- `docs/research/canon-decisions/0041-text-authoritative-representation.md` — text-authoritative canon-review machinery inherited at F5 §4.3 R3 amend-declared-state
- `docs/research/canon-decisions/0042-dag-delete-structural-legitimacy-promote.md` — foundation-doc-promotion precedent template; substrate-grounds for F5 H3 hybrid substrate-child relationship
- `docs/research/canon-decisions/0046-field-rule-level-stratification.md` — Ostrom 3-level rule-stack inherited at §3 Structural Doctrine (fourth application after F1/F4/F6)
- `docs/research/canon-decisions/0056-phase-2c-semantic-refactoring-bundle.md` — intent-pressure demotion precedent; F5's `epistemic-gap` slug admission structurally closes the Phase 4 foundation-layer residue
- `docs/research/canon-decisions/0062-membrane-as-self-produced-disposition.md` — scope-conditioning-over-admission precedent; F5 §4.6 R5/R6 prose-only disposition inherits this discipline
- `docs/research/canon-decisions/0063-participatory-sense-making-disposition.md` — second scope-conditioning application; same pattern inherited at F5 §4.6
- `docs/research/canon-decisions/0064-co-presence-field-condition-disposition.md` — third scope-conditioning application; F5 §4.6 is the fourth operational-use
- `docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md` — F1 ADR; B1 unified template inherited
- `docs/research/canon-decisions/0074-representation-authority-foundation-doc-promotion.md` — F4 ADR; D4 HYBRID appeal-protocol inherited wholesale at F5 §5.3
- `docs/research/canon-decisions/0075-failure-modes-foundation-doc-promotion.md` — F6 ADR; B2 per-category divergence precedent; F5's B1 re-convergence validates substrate-driven template-adaptability (ADR-0076 method-precedent 1)
- `docs/research/canon-decisions/0076-actuator-logic-foundation-doc-promotion.md` — the ADR that promoted this doc to foundation status
