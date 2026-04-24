---
doc_id: spore.sensor-oracle-governance
doc_kind: foundation
status: draft
depends_on:
  - spore.project-vision
  - spore.governance-artifacts
  - spore.structural-legitimacy
---

# Sensor and Oracle Governance

Spore canon names sensors as the ground through which **Evidence** reaches coordination. Sensor-and-oracle-governance is the doctrine that specifies *who selects sensors, who maintains them, how they are contested, how their readings are interpreted, and what happens when they fall silent.*

## Core Claim

The Evidence verb (one of the nine coordination primitives; see `docs/project-vision.md` and ADR-0044) binds coordination to what actually happened or is actually the case. That binding is only as good as the instruments that produce the inputs to Evidence. Without a governance doctrine for those instruments, the Evidence primitive is structurally incomplete at the Field layer: canon states that evidence grounds coordination, but does not state how the grounding-instruments themselves are governed.

Sensor-and-oracle-governance closes that gap. It is Evidence-primitive governance at Field layer — a doctrine that operationalizes who has standing to select a sensor, who bears consequence for its calibration, how contest and disagreement are resolved, and how the absence of a reading is itself canon-legible.

The doctrine applies uniformly across three sensor modalities — machine sensor, human attestation, and AI-agent-generated summary — via **principled-rule abstraction**, not via three separate sub-doctrines. Operational specifics per modality belong to pattern, protocol, or deployment layer; foundation layer commits only to the governance-shape.

## Scope

A **sensor** is any process that produces inputs into the Evidence verb. Three modalities are in scope:

- **Machine sensor** — an instrumented device or computed pipeline producing deterministic or statistically-characterized readings. Examples: water-quality probes, species-count cameras, commitment-pool balance queries, block-height observers, land-use satellite classifiers.
- **Human attestation** — a person or role producing sworn statements, witnessed signals, or community attestation about observed state. Examples: meeting minutes authored under a declared attester-role, field-observer reports, witness testimony, stewardship reports from a named steward.
- **AI-agent-generated summary** — a process that distills inputs (transcripts, records, sensor streams, document corpora) into structured Evidence. Examples: LLM summaries of governance meetings, agent-produced synthesis reports, signal-chain distillations.

An **oracle** is a sensor coupled with an interpretation rule: the oracle translates raw sensor-reading into canon-legible Evidence. The same physical instrument can participate in different oracles by being read under different interpretation rules.

**In scope** for this doctrine: intra-modality governance — how selection, calibration, maintenance, contestation, disagreement, interpretation, and absence operate within any single sensor modality.

**Out of scope** for this doctrine:

- **Inter-layer precedence** — what wins when sensor-reading conflicts with text-authoritative canon statement, graph projection, attestation layer, or agent-summary layer. That is the scope of `representation-authority` (foundation doc forthcoming), which extends ADR-0041 text-authoritative-representation across remaining layers.
- **Response-to-mismatch doctrine** — what canon or an instance does when sensor-evidence disagrees with declared intent or commitment-authored-state. That is the scope of `actuator-logic` (foundation doc forthcoming).
- **Failure-mode taxonomy** — systematic enumeration of how sensor-governance can break (maintainer capture, sensor decay, adversarial mis-calibration). That is the scope of `failure-modes` (foundation doc forthcoming); this doctrine names failure-shapes in context but does not enumerate them taxonomically.
- **Aggregation algorithms** — specific voting thresholds, weighted-sum rules, or consensus mechanisms for resolving multi-sensor disagreement. Those belong to pattern or protocol layer. This doctrine commits to the shape of resolution (protocol-based, routed through rule-stack) without prescribing the algorithm.

The three-modality abstraction is held via principled-rule throughout: wherever a modality-specific example is named, it appears as illustration, not as parameterization. The governance-shape is one doctrine; the deployments are many.

## Structural Doctrine — Rule-Level Stratification

Sensor-and-oracle-governance operates across the three Ostrom rule-levels inherited from ADR-0046 (Field rule-level stratification). This is the structural scaffold for all seven concerns below.

- **Constitutional rule layer** — who has standing to propose or challenge sensor assignments; what instance-membership requires to participate in sensor-governance; the boundary of sensor-sovereignty at federation scale. Constitutional-rule decisions establish *who may play the game* of sensor-governance at all.
- **Collective-choice rule layer** — how sensor selection, maintainer assignment, interpretation-authority grant, and disagreement-resolution protocol are decided by those with constitutional-rule standing. Collective-choice decisions establish *the rules of play* within the constitutional frame.
- **Operational rule layer** — day-to-day sensor calibration, routine data capture, proxy-contestation adjudication, absent-evidence escalation, and interpretation-authority exercise. Operational decisions are *moves within the game*.

Rule-level separation is structural clarity, not three separate doctrines operating independently. A single sensor-governance act often invokes all three levels: routine calibration is operational, but a calibration dispute that exceeds the protocol escalates to collective-choice, and a challenge to the entire calibration protocol escalates to constitutional. The three levels form a stack, not a partition.

Routing through the rule-stack is how contestation and disagreement resolve without requiring doctrine-specified algorithms (see §4.4 and §4.5 below).

## Doctrine Per Concern

The seven concerns are presented with a principle statement, rule-level decomposition, and cross-modality specialization where modality heterogeneity is load-bearing. Where no modality-specific note appears, the principle applies uniformly.

### §4.1 Sensor Selection

**Principle**: sensor choice is a collective-choice-rule decision bound by constitutional-rule standing requirements. An instance may not smuggle uncontestable sensors into its evidence stack; selection must be visible, attributable, and contestable.

**Rule-level decomposition**:

- Constitutional-rule: who has standing to propose or veto a sensor (instance members, federation delegates, designated stewards).
- Collective-choice-rule: the deliberation and decision protocol by which those with standing choose.
- Operational-rule: routine adoption, retirement, and substitution of already-authorized sensors within existing selection protocols.

**Cross-modality note**: selection of an instrumented device, selection of a human attester, and selection of an AI-summary process are the same governance-shape. What differs is the quality-criteria surfaced during deliberation (calibration-profile for instruments; track-record and cross-attestation for attesters; prompt and model disclosure for AI-summary). The shape of *choosing* is one doctrine.

### §4.2 Calibration

**Principle**: calibration is an operational-rule ongoing discipline that preserves coupling between sensor-reading and the sensed phenomenon. Calibration is not a one-time setup; it is a continuous maintenance obligation.

**Rule-level decomposition**:

- Constitutional-rule: who bears ultimate responsibility for calibration integrity across the instance.
- Collective-choice-rule: the calibration protocol — frequency, methodology, cross-verification practices.
- Operational-rule: actual recalibration events and calibration-log maintenance.

**Cross-modality specialization**:

- For machine sensors, calibration is instrument-drift correction against a reference (physical standard, co-located cross-sensor, or time-series baseline).
- For human attesters, calibration is reliability-track-record maintenance plus cross-attestation: the same event witnessed or attested by multiple independent attesters surfaces disagreements for resolution.
- For AI-agent-generated summaries, calibration is prompt- and model-disclosure (so that readers know what process produced the summary), plus summary-regeneration-auditability (the ability to re-run the summary process against the same inputs and compare outputs).

### §4.3 Maintainer Assignment

**Principle**: every sensor has a named maintainer — an individual, role, or federation — who is structurally coupled to the consequences of mis-maintenance (per `docs/foundations/structural-legitimacy.md`). Unassigned sensors are illegitimate: a reading with no one accountable for the instrument producing it cannot ground Evidence.

**Rule-level decomposition**:

- Constitutional-rule: who is eligible to serve as a maintainer; what membership or standing is required.
- Collective-choice-rule: the maintainer-assignment protocol — appointment, term, review, replacement.
- Operational-rule: the maintainer's day-to-day work.

**Cross-modality note**: for machine sensors, maintainer responsibility includes physical or computational upkeep. For human attesters, maintainer responsibility is typically self-borne (an attester is the maintainer of their own attestation-quality) but may be delegated to a role (stewards of a witnessing practice). For AI-summary, maintainer responsibility includes model-and-prompt lifecycle management plus regeneration-audit upkeep.

Structural-legitimacy coupling is the load-bearing principle: a maintainer insulated from the consequences of sensor failure is illegitimate regardless of how clean the appointment protocol looks.

### §4.4 Proxy Contestation

**Principle**: any party with constitutional-rule standing may contest a sensor's fitness-for-purpose via collective-choice-rule protocol. Contestation is not exceptional; it is a built-in governance move. Contestable dimensions include:

- **Wrong-target** — the sensor measures X when canon requires Y.
- **Decay** — calibration has drifted beyond acceptable bounds.
- **Captured maintainer** — structural-legitimacy coupling has broken; the maintainer no longer bears consequence appropriately.
- **Superseded sensor** — a better modality or instrument is available.

**Rule-level decomposition**:

- Constitutional-rule: who has standing to contest at all.
- Collective-choice-rule: the contestation-and-review protocol; burden of proof; remedy enumeration.
- Operational-rule: the specific contestation event and its adjudication.

Protocol-based contestation is the foundation-layer commitment. The *algorithm* used to adjudicate (voting threshold, consensus rule, ombuds review) is pattern or protocol-layer work, not foundation-layer.

### §4.5 Multi-Sensor Disagreement

**Principle**: when multiple sensors (same modality or across modalities) report divergent readings on the same phenomenon, resolution is protocol-bound, not arbitrary. Foundation doctrine commits to three properties:

1. **Disagreement is canon-legible** — it is recorded, not silently collapsed into one reading.
2. **Resolution is protocol-bound** — it follows a predetermined, contestable protocol.
3. **Unresolved disagreement is tracked as held-epistemic-tension** — analogous to ADR-0001 held-tension pattern for pluriversal-incommensurability; where disagreement cannot be resolved, it is held as an explicit tension at the epistemic layer rather than force-resolved.

**Rule-level decomposition**:

- Operational-rule: routine reconciliation within an existing protocol (e.g., two rain-gauges within tolerance; two attesters agreeing within a stated margin).
- Collective-choice-rule: escalation when operational-rule protocols fail or when the reconciliation protocol itself is in dispute.
- Constitutional-rule: escalation when the disagreement concerns what it even means to reconcile (when the phenomenon itself is under contested description).

Foundation doctrine does not prescribe aggregation algorithms. Averaging, voting, weighting by maintainer reputation, or treating one sensor as canonical and others as monitoring — all are pattern/protocol-layer choices. What foundation doctrine requires is that *some* protocol exists and is visible.

### §4.6 Interpretation Authority

**Principle**: the oracle function — translating sensor-reading into canon-legible Evidence — carries interpretation authority. Interpretation authority is coupled to maintainer-role, community-standing, and domain-expertise per the structural-legitimacy coupling principle (decision-makers bear the consequences of their interpretations).

**Rule-level decomposition**:

- Constitutional-rule: who is eligible to hold interpretation authority for a given sensor class.
- Collective-choice-rule: the protocol by which interpretation authority is granted, reviewed, revoked, or shared.
- Operational-rule: the actual act of translating a reading into Evidence.

**Sense-making-mode scope-conditioning (per ADR-0063)**: for a given sensor's interpretation, sense-making may operate in **sender-receiver-transmission mode** (the sensor emits a reading; the interpretation-authority reads and translates) or in **constitutively-interactive-emergence mode** (the interpretation emerges from iterative engagement between multiple parties — interpreter, sensor, phenomenon, attester community). Foundation doctrine accepts both modes. The mode is not a modality-parameter; it is situational and depends on the phenomenon and the sensor.

Interpretation-authority is **intra-modality** scope. When interpretation-authority exercised over a sensor-reading conflicts with an interpretation-authority decision in a different layer (text-authored canon statement; graph projection; different attestation), that is **inter-layer precedence** — the scope of the `representation-authority` foundation doc, not this one.

### §4.7 Absent-Evidence Handling

**Principle**: absent sensor-reading is canon-legible. The absence of an expected reading must be recorded, not ignored, and its handling depends on the nature of the sensed phenomenon. Two principled-rule categories distinguish treatment:

- **Continuity-constituted phenomena** — phenomena whose nature is ongoing state or sustained relationship (water quality through time; an ongoing commitment-pool balance; a relational membership; a stewardship role in effect). For these phenomena: **absent sensor-reading ≠ absent phenomenon**. Default treatment is state-persistence: the last valid reading continues to describe the state until refuted. Persistent absence itself becomes contestable evidence that the governance regime has decayed — a continuity-constituted phenomenon with chronic sensor-absence is flagged as governance-decay.
- **Event-constituted phenomena** — phenomena whose nature is a discrete event or bounded act (a pool-settlement transaction; a sworn-witness event at a specific place and time; a meeting-attendance record). For these phenomena: **absent sensor-reading = undecided**. Default treatment is epistemic-gap: no imputation of occurrence or non-occurrence. The governance regime sets an escalation protocol (retry, substitute sensor, defer the dependent decision) rather than silently defaulting.

**Rule-level decomposition**:

- Constitutional-rule: categorizing phenomena as continuity-constituted vs event-constituted at the instance or federation level.
- Collective-choice-rule: the escalation protocol for prolonged absence and the criteria for redrawing phenomenon-category boundaries.
- Operational-rule: the actual handling of a given absence event under existing protocols.

This principled-rule is load-bearing for §5 Reproductive Evidence and inherits ADR-0064's co-presence-mode scope-conditioning on the Field primitive: continuity-constituted phenomena frequently operate in canonical co-presence-not-required substrate; event-constituted phenomena frequently operate in co-presence-required substrate. The categorization is about *the phenomenon*, not about *the operational mode of sensing it*.

## Reproductive Evidence

Per ADR-0049 §179, sensor-and-oracle-governance explicitly names two Evidence subspecies operating in reproduction-continuity context:

- **Longitudinal attestation** — Evidence whose grounding is not a single-moment reading but a sustained track-record across reproduction cycles. A longitudinal attester (human, instrument, or AI-summary process) reports on phenomena whose reality is constituted by continuity across time (an ongoing stewardship relationship; sustained ecosystem health; a commitment-pool's metabolic cycle across many settlements). Single-moment readings can be diagnostic but are not the Evidence itself; the Evidence is the pattern across the cycle.
- **Replication-regime** — Evidence whose grounding is the sustained *capacity to re-enact* (repeated measurement, re-attestation, re-summarization) across generational change of participants. A replication-regime Evidence claim depends on the phenomenon remaining measurable, attestable, or summarizable when maintainers change, instruments are replaced, or AI models are updated. A phenomenon whose Evidence rests on a specific instrument that cannot be replicated has a brittle Evidence base.

Both subspecies are genuinely different from single-moment Evidence. Governance doctrine applies to them uniformly (selection / calibration / maintainer / contestation / disagreement / interpretation / absence) but with two specializations:

- **Continuity-constituted absent-evidence rule** (§4.7) is the default for longitudinal-attestation and replication-regime Evidence: absence is not non-occurrence; persistent absence is governance-decay.
- **Maintainer-succession** is load-bearing for replication-regime Evidence (§4.3): a replication-regime Evidence claim requires that maintainer-assignment protocols include explicit succession practice, not just current-appointment clarity.

**Three-way distinction preservation** (per ADR-0049 §115): this section operates at the **primitive-verb** layer (reproduction-continuity, ADR-0049). It is distinct from — and does not collapse into — the **visibility-doctrine** layer (`reproductive-commoning`, ADR-0002) or the **asymmetric-relational-doctrine** layer (`care-commoning`, ADR-0045). Reproductive Evidence is Evidence-of-reproduction-continuity at the Field governance layer; it is not a doctrine about the visibility of reproductive labor, nor a doctrine about the asymmetric-relational character of care work. The three are canonically adjacent but structurally distinct, and this section preserves that distinction by citing ADR-0049 specifically at every Evidence-subspecies claim.

## Open Questions

Sensor-and-oracle-governance is a foundational commitment but not a solved problem. Several concerns are flagged here as foundation-layer residue; operational treatment is deferred to pattern/protocol layer or to downstream foundation docs.

- **Pluriversal interpretation-authority**: when multiple traditions interpret the same sensor-reading through structurally different ontologies, is this a multi-sensor disagreement (§4.5), a multi-oracle disagreement (different interpretation rules on the same sensor), or an instance of ADR-0001 pluriversal-incommensurability? Foundation-layer signal: this is likely a held-tension in the shape of ADR-0001, not a resolvable disagreement. Operational-layer treatment — how instances and federations practically coordinate across pluriversal interpretations of shared sensors — is deferred to future pattern/protocol work.
- **Cross-modality oracle composition**: can a machine sensor, a human attester, and an AI-summary process compose into a single compound oracle (one interpretation rule over inputs from all three), or do they remain separate oracles whose outputs require inter-oracle governance? Foundation signal: both modes exist in practice; canonical choice depends on the phenomenon. Operational specifics — composition patterns, inter-oracle protocols, disclosure requirements — are deferred to pattern layer.
- **Federated sensor-sovereignty**: when a sensor's readings are consumed by multiple federations with different rule-stacks (a bioregional water-quality sensor used by two overlapping watershed federations), whose constitutional-rule applies to selection, maintenance, and contestation? Parked for F7 minimum-viable-spore-instance (membership-and-boundary foundation) and ADR-0068 federation-encounter pattern (federation-scale coordination-recipe) to operationalize jointly.
- **AI-summary authority-decay and model-lifecycle coupling**: AI-summary processes carry a specific maintainer-coupling challenge — the "maintainer" includes the model provider, who is often outside the instance's governance reach. Structural-legitimacy coupling is weaker here by construction. Foundation doctrine flags this as a known asymmetry; operational protocols (disclosure, regeneration-audit, fallback-to-human-attester) are pattern-layer work.
- **Phase 5 section-level status labels**: this foundation doc is deliberately tag-agnostic. The Phase 5 sweep (canon-rebuild-arc follow-on, not yet scheduled) will tag sections across all canon docs in one pass with status-labels (Design commitment / Operational pattern / Research hypothesis / Under exploration). Sections here are structured to be tag-ready but are not pre-tagged.

These open questions are foundation-layer concerns. Operational mechanisms for resolving them are pattern, protocol, or deployment-layer work.

## Related

- `docs/project-vision.md` — the **Evidence** verb in Spore's 9-primitive roster (per ADR-0044 core-thesis-primitive-roster-alignment)
- `docs/foundations/governance-artifacts-and-graph-projections.md` lines 134–143 §Grounding Through Sensors — where sensors are currently named in canon body without doctrine; this foundation doc provides the doctrine that paragraph pointed toward
- `docs/foundations/structural-legitimacy.md` — authority-consequence coupling grounds maintainer-discipline (§4.3) and the structural-legitimacy coupling principle that makes "unassigned sensors are illegitimate" a canon-legible claim
- `docs/research/canon-decisions/0042-dag-delete-structural-legitimacy-promote.md` — the precedent template for foundation-doc promotion via ADR, shape-inherited by this ADR
- `docs/research/canon-decisions/0043-federation-protocol-rename.md` — forward-references Phase 4 new foundation docs; sets federation-protocol naming context inherited here
- `docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md` — 9-primitive roster; Evidence verb definition; forward-references this foundation doc as reinforcing Evidence-primitive earning
- `docs/research/canon-decisions/0046-field-rule-level-stratification.md` — Ostrom 3-level rule-stack inherited at §3 Structural Doctrine
- `docs/research/canon-decisions/0049-reproduction-continuity-primitive-admission.md` — reproduction-continuity primitive; forward-references longitudinal-attestation + replication-regime as Evidence subspecies operationalized at §5 above
- `docs/research/canon-decisions/0062-membrane-as-self-produced-disposition.md` — primitive-bullet scope-conditioning precedent (production-mode); shape-analog used implicitly in §2 Scope three-modality principled-rule abstraction
- `docs/research/canon-decisions/0063-participatory-sense-making-disposition.md` — Signal sense-making-mode scope-conditioning inherited at §4.6 Interpretation Authority
- `docs/research/canon-decisions/0064-co-presence-field-condition-disposition.md` — Field co-presence-mode scope-conditioning inherited at §4.7 Absent-Evidence Handling continuity-vs-event distinction
- `docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md` — the ADR that promoted this doc to foundation status
