---
doc_id: spore.failure-modes
doc_kind: foundation
status: draft
depends_on:
  - spore.project-vision
  - spore.governance-artifacts
  - spore.structural-legitimacy
  - spore.sensor-oracle-governance
  - spore.representation-authority
---

# Failure Modes

Spore canon names what coordination looks like when it works. Failure-modes is the doctrine that names what coordination looks like when it *breaks* — taxonomically, across the full canon operational surface, so that failures are canon-legible rather than invisible.

## Core Claim

A grammar that can only speak about success is structurally incomplete. When a federation node is captured, when evidence is fraudulent, when commitment is broken, when nodes disagree on provenance, when canon-review is itself captured, when metaphor rots — each of these failure-shapes must be *recognizable* within the grammar, not only diagnosable by stepping outside it.

Failure-modes is Field-layer taxonomy: a canon-legible enumeration of how coordination-grammar breaks across eight categories, with each category decomposable across the three Ostrom rule-levels (constitutional / collective-choice / operational) inherited from ADR-0046. It is the counterpart to `structural-legitimacy` (ADR-0042) — where that doctrine names what makes coordination legitimate, this one names what breakdown looks like in category-shape.

The doctrine commits to **category-level recognizability**: canon must be able to name which category of failure is in play. It does not commit to adjudication algorithms (how to decide, in a specific case, whether substitution-trap vs actor-capture is the operative failure) — that is pattern or protocol layer. Canon commits to the shape of the taxonomy; deployments handle the diagnostic.

## Scope

A **failure mode** is a structural pattern of coordination-breakdown — not a one-off error or operational incident, but a recognizable shape that recurs across instances. Eight categories are in scope, each passing honest-rigor ≥2-cluster independent-tradition support:

- **F6.1 Representation failures** — text / graph / sensor / attestation / agent-summary misalignment across representation layers.
- **F6.2 Protocol failures** — schema-mismatch, event-rejection, peer-unreachability, key-compromise, protocol-capture.
- **F6.3 Sensor / attestation / evidence-integrity failures** — wrong-target sensing, calibration decay, captured maintainer, fraudulent attestation, oracle capture.
- **F6.4 Scale-transition failures** — patterns working at scale N break at scale M; polycentric layer-mismatch; VSM S4/S5 viability gap.
- **F6.5 Membrane-boundary failures** — over-filter / under-filter / boundary-collapse / social-vs-resource mismatch / asymmetric-capture of boundary authority.
- **F6.6 Commitment-break failures** — individual breach, joint-commitment breach, reproduction-continuity break, asymmetric abandonment.
- **F6.7 Actor-capture failures** — maintainer capture, admin-class accumulation, regulatory capture, digital-labor-as-free-gift.
- **F6.8 Meta-pattern / composition failures** — the canon-machinery itself becomes the failure vector (substitution-trap, linguistic-closure, capture-via-composition).

**In scope**: category-level taxonomy; rule-level decomposition per category; recognition-shape (what makes a failure an instance of its category); in-canon anchors for each category.

**Out of scope**:

- **Intra-modality governance** — how a sensor, attester, or agent-summary process is selected, calibrated, contested, or adjudicated within its own modality. That is F1 sensor-oracle-governance scope. F6 cites F1 for governance; F6 names the category at taxonomy layer.
- **Inter-layer precedence** — what wins when representations disagree across text / graph / sensor / attestation / agent-summary layers. That is F4 representation-authority scope.
- **Actor-governance doctrine** — who has standing to contest actor-capture failures, who adjudicates, what the recall / replacement / intervention protocols are. That is F3 actor-governance scope (forthcoming); F6 names the category via forward-reference.
- **Response-and-recovery doctrine** — what canon or an instance does *operationally* after a failure is recognized (alert, proposal, routing, human review, no change). That is F5 actuator-logic scope (forthcoming).
- **Aggregation algorithms** — specific thresholds, voting rules, or consensus mechanisms for recognizing a failure or adjudicating its category. Those belong to pattern or protocol layer.
- **One-off operational errors** — a dropped packet, a typo in a commit message, a temporarily-slow sensor. F6 catalogs structural failure-shapes, not operational incidents.

The eight-category inventory is held as **recognized failure-class taxonomy**, not as an exhaustive enumeration of all possible coordination breakdowns. New categories may be admitted via future ADRs under the same honest-rigor cluster-counting discipline (≥2 independent traditions converging on the category).

## Structural Doctrine — Rule-Level Stratification

Failure-modes operates across the three Ostrom rule-levels inherited from ADR-0046 (Field rule-level stratification). This is the structural scaffold for all eight categories below. F1 and F4 established the inheritance pattern; F6 is the third application.

- **Constitutional rule layer** — failures that corrupt *who has standing* at all: membership boundaries gamed, federation-participation denied systematically, sovereignty-constituting rules themselves captured. Constitutional-rule failures break the game of coordination before any move within it is possible.
- **Collective-choice rule layer** — failures in *the rules of play*: deliberation protocols captured, contestation pathways blocked, selection / revocation / review protocols corrupted. Collective-choice-rule failures let the game continue but with rigged rules.
- **Operational rule layer** — failures in *moves within the game*: day-to-day sensor decay, individual attestation drift, routine commitment breach, one-off schema mismatch escalating. Operational-rule failures are symptoms whose root cause may live at operational layer or may cascade upward.

A failure frequently manifests across multiple rule-levels: an operational-rule sensor-decay event, if unrecognized and uncorrected, can escalate to collective-choice-rule contestation-protocol capture, and if further unrecognized, to constitutional-rule sovereignty-of-sensing erosion. The three levels form a stack along which failures propagate, not a partition isolating failure to one level.

Recognition at the right rule-level is load-bearing. Treating a constitutional-rule capture as an operational-rule incident (patch the instance; ignore the structure) reproduces the decentralization-theater failure-shape at the diagnostic layer.

## Doctrine Per Category

Each category is presented with a principle statement, rule-level decomposition, recognition-shape (what makes a candidate an instance of this category), and in-canon anchors. Category sub-shapes are named where intra-category heterogeneity is load-bearing.

### §4.1 Representation Failures

**Principle**: a representation failure occurs when canon-relevant content across representation layers (text / graph / sensor / attestation / agent-summary) fails to maintain the layer-precedence F4 representation-authority establishes. Not every cross-layer disagreement is a failure — F4 commits the canon to recognizing and adjudicating disagreement; representation failure is the class of cases where adjudication itself breaks, is bypassed, or is silently collapsed.

**Rule-level decomposition**:

- Constitutional-rule: failures corrupting *who has standing* to establish or revise layer-precedence (e.g., fiat override of ADR-0041 text-authoritative default by an unelected maintainer).
- Collective-choice-rule: failures in *the protocol for resolving* cross-layer conflicts (e.g., the F4 appeal protocol is blocked, bypassed, or silently narrowed).
- Operational-rule: failures in *routine adjudication* (e.g., stale text continues to govern after sensor-reading has invalidated it; graph regeneration lags text authorship).

**Recognition-shape**: evidence of cross-layer disagreement where the F4 precedence rule was not applied, applied inconsistently, or applied but the result was ignored.

**In-canon anchors**: F4 representation-authority forward-refs this category at line 42 ("maintainer capture, stale text, corrupt graph, adversarial attestation"). ADR-0041 §Consequences implicitly names graph-drift-from-text as the recognizable failure. linguistic-closure.md:33-41 names semantic drift at text-layer (terms become "stopping rules") as a representation-failure sub-shape internal to text itself.

### §4.2 Protocol Failures

**Principle**: a protocol failure is a breakdown in the coordinating-protocol layer — the machinery that carries events, routing, schemas, and keys across federation. Protocol failures are distinct from representation failures (which are about *what is true*) — they are about *whether messages move*.

**Rule-level decomposition**:

- Constitutional-rule: failures corrupting *who may participate* in the protocol (membership-key compromise, federation-scope gaming, protocol-upgrade authority captured).
- Collective-choice-rule: failures in *protocol evolution* (schema-amendment capture, protocol-versioning without Gilbertian joint-commitment per ADR-0050, upgrade-without-concurrence).
- Operational-rule: failures in *day-to-day protocol operation* (peer unreachable, events rejected, schema-mismatch, key compromise — the exact four-entry table already enumerated in federation-protocol.md:166-173).

**Recognition-shape**: the federation-protocol's own "Failure Modes" table (peer unreachable / event rejected / schema mismatch / key compromise) names the operational-rule-level protocol failures explicitly. F6.2 elevates these to taxonomy-layer and adds constitutional/collective-choice-rule sub-shapes (protocol capture, upgrade-without-concurrence).

**In-canon anchors**: federation-protocol.md:166-173 operational table; ADR-0005 decentralization-myth bundle names protocol-level capture patterns; Kostakis peer-governance-Wikipedia opposition names admin-layer protocol corruption.

### §4.3 Sensor / Attestation / Evidence-Integrity Failures

**Principle**: the inputs to the Evidence primitive (ADR-0044) can fail via sensor malfunction, attestation fraud, oracle capture, or agent-summary adversarial prompting. F1 sensor-oracle-governance established *governance* for these failure-shapes (selection, calibration, maintainer discipline, proxy contestation). F6.3 is the taxonomy-layer counterpart — it names the category without re-specifying F1's per-shape governance.

**Rule-level decomposition**:

- Constitutional-rule: failures in *who may serve* as sensor / attester / agent-summary maintainer (standing gamed; membership eligibility corrupted).
- Collective-choice-rule: failures in *the selection / revocation / review protocol* (F1 §4.1-4.4 protocols bypassed, captured, or silently narrowed).
- Operational-rule: routine sensor decay, individual-attestation drift, one-off adversarial prompt on agent-summary, routine calibration lapse.

**Recognition-shape**: F1 §4.4 proxy-contestation names four recognizable failure-shapes (wrong-target / decay / captured-maintainer / superseded-sensor). F6.3 elevates these to a single taxonomic category with F1 retaining per-shape governance discipline.

**In-canon anchors**: F1 sensor-oracle-governance.md:39 forward-refs this category; F1 §4.4-4.5 carries the governance-layer treatment; ADR-0049 replication-regime Evidence names fraudulent-longitudinal-attestation as a reproductive sub-shape of sensor-failure.

### §4.4 Scale-Transition Failures

**Principle**: patterns that work at one scale break when composed into or scaled down from another scale. A pool-governance protocol calibrated for a 12-member cooperative fails at 1200-member federation; a federation routing-protocol designed for bioregional scope fails at cross-continental compose. Scale-transition failure is the category of failures that manifest at scale-boundaries rather than within any single scale.

**Rule-level decomposition**:

- Constitutional-rule: federation-boundary failures where rule-stack at one scale does not compose with rule-stack at adjacent scale (cross-federation sovereignty conflict that neither federation's constitutional-rule alone can resolve).
- Collective-choice-rule: protocol-interop failures where same-named protocols carry different semantics at different scales (VSM S4/S5 viability gap — the operational-mode protocols of one organizational scale do not provide the environmental-model feedback the next scale up requires).
- Operational-rule: routine overhead costs scaling super-linearly (communication cost, audit cost, coordination cost); individual-scale mechanisms (one-at-a-time review) breaking at population scale.

**Recognition-shape**: a pattern that worked at scale-N now produces absurd results at scale-M; the failure is not a bug in the pattern but a category-error in applying it across scales.

**In-canon anchors**: project-vision.md:211 ("Absence of any layer invites a specific failure mode" in the three-layer coordination stack); ADR-0046 rule-level-mismatch between instance-scale operational and federation-scale collective-choice; Ostrom polycentric governance scale-mismatch literature.

### §4.5 Membrane-Boundary Failures

**Principle**: Membranes (ADR-0044 primitive; ADR-0053 permeability + double-boundary axes; ADR-0047 Layer 3 asymmetric-membrane; ADR-0062 production-mode scope-conditioning) can fail via over-filtering (legitimate intents blocked; excluded populations), under-filtering (illegitimate intents admitted; boundary effectively absent), boundary-collapse (social and resource boundaries conflated where they should differ per ADR-0053), or asymmetric-capture (authorize-function concentrated where it should be distributed).

**Rule-level decomposition**:

- Constitutional-rule: failures in *who sets the boundary* — membership-defining authority captured, boundary-establishment protocol subverted.
- Collective-choice-rule: failures in *the admission / revocation protocol* — boundary-adjustment mechanisms captured or blocked.
- Operational-rule: routine gate-keeping failures (individual false-rejections, individual false-admissions, per-event filter drift).

**Recognition-shape**: frozen-vocab `filtering-membrane` (v2 opposition primitive) names over-filtering as its canonical failure-shape. `double-boundary` (ADR-0053) distinguishes social-closure-with-resource-over-commitment from resource-closure-with-social-over-inclusion — two distinct sub-shapes within F6.5.

**In-canon anchors**: concepts yaml v2 `filtering-membrane`; ADR-0053 `double-boundary` axis with two named failure-shapes; ADR-0047 Layer 3 `asymmetric-membrane` names gatekeeping-asymmetry-as-failure when authorize-capacity accumulates; Ostrom Principle-1 boundary-clarity literature.

### §4.6 Commitment-Break Failures

**Principle**: Commitments (ADR-0044) and joint-commitments (ADR-0050) and reproduction-continuity (ADR-0049) each carry their own breach-shape. F6.6 covers all three sub-shapes under one category because the common-thread is *a binding operation failing its binding-force*, even though the three sub-shapes are structurally distinct.

**Rule-level decomposition**:

- Constitutional-rule: failures in *who may make commitments* (commitment-standing gamed; illegitimate parties entering binding-obligations).
- Collective-choice-rule: failures in *the binding / unbinding / rescinding protocols* (unilateral rescission where joint concurrence required; breach-adjudication captured).
- Operational-rule: individual commitment breach; routine failure-to-execute; drift from commitment over time.

**Sub-shapes** (three, per ADR-0050 three-way distinction discipline inherited in F1 §5):

- **Individual-Commitment breach** — ADR-0044 Commitment primitive: a party bound to an outcome fails to produce the outcome. Breach-of-contract / breach-of-promise shape.
- **Joint-commitment breach** — ADR-0050 primitive: a member of a joint-commitment acts as if the commitment were individually-rescindable when it is not (federation protocol-version adoption unilaterally reversed; BKC pool-membership abandoned without concurrence). "Naming individual commitment where joint-commitment operates is a canon-legible error" — ADR-0050 §Consequences.
- **Reproduction-continuity break** — ADR-0049 primitive: cross-episode binding fails. Stewardship not transferred at generational handoff; maintainer-succession skipped; institutional-memory lost at personnel transition. Federici-Folbre-Kittay asymmetric-vulnerability is the paradigm sub-shape where reproductive-labor-bearing party is left bearing breach-consequence alone.

**Recognition-shape**: evidence that a binding operation (ADR-0044 / ADR-0050 / ADR-0049) produced its binding at authoring-time but failed its binding-force at execution-time. The three sub-shapes differ in *what binding-shape* is in play, not in whether binding failed.

**In-canon anchors**: ADR-0002 reproduction-primacy (doctrine-lens on reproductive-labor invisibility as a breach-enabling condition); ADR-0050 §219 substitution-trap extension naming individual-vs-joint confusion as a canon-legible error; ADR-0049 §82 Federicist framing on reproductive-breach visibility.

### §4.7 Actor-Capture Failures (F3 forward-reference)

**Principle**: actors (individuals, roles, federations-as-agents) can be captured — their structural-legitimacy coupling (ADR-0042) broken such that the actor no longer bears the consequences of its decisions. Maintainer capture, admin-class accumulation, regulatory capture, and digital-labor-as-free-gift are four recognizable sub-shapes.

**Forward-reference to F3 actor-governance (forthcoming)**: F6 names the category taxonomically. **Actor-capture-specific governance doctrine — who has standing to contest a captured actor, who adjudicates, what the recall / replacement / intervention protocols are — is the scope of F3 actor-governance (forthcoming).** F6.7 establishes category-recognition; F3 will establish governance-response. This forward-ref discipline is shape-parallel to F4's deferral of actuator-logic to F5: F6 does not wait for F3 to land before canon can *recognize* actor-capture; F3 provides the governance-doctrine when it lands.

**Rule-level decomposition**:

- Constitutional-rule: failures corrupting *who may serve as actor at all* — membership-to-role gaming, standing-to-hold-role captured, actor-eligibility protocols subverted.
- Collective-choice-rule: failures in *actor-review and recall protocols* — review periods extended, recall-thresholds raised, contestation pathways narrowed, successor-selection captured.
- Operational-rule: routine actor-consequence insulation (the maintainer who no longer attends to the sensor they maintain; the delegate who no longer reports to constituents).

**Sub-shapes**:

- **Maintainer capture** — named in F1:39 and F4:42. A maintainer's structural-legitimacy coupling breaks; the sensor / representation / process they steward no longer bears consequence on them appropriately. F1 §4.4 "captured maintainer" is the concrete shape.
- **Admin-class accumulation** — Kostakis (2010) peer-governance-Wikipedia; the tyranny-of-structurelessness failure mode where administrative authority accretes around a demographically-homogeneous admin class. ADR-0005 Kostakis two-layer framing names this explicitly.
- **Regulatory capture** — Stigler (1971) literature on agencies captured by the industries they regulate. Structural-legitimacy.md:50 names "regulatory capture, rent-seeking, administrative capture" as the failure-family F6 should enumerate.
- **Digital-labor-as-free-gift** — Kleiner venture-communism critique; ADR-0005 (b). Silent delegation of reproductive-infrastructure cost to uncompensated labor is actor-capture of the laboring party by the platform-holding party.

**Recognition-shape**: evidence that structural-legitimacy coupling (ADR-0042) has broken for a specific actor in a specific role; the authority-consequence circuit that should bind them to decision-outcomes has been severed, gamed, or silently delegated.

**In-canon anchors**: ADR-0005 decentralization-myth bundle (three of four sub-shapes live here); ADR-0047 Layer 3 asymmetric-membrane for gatekeeper-role accrual; structural-legitimacy.md:50 explicit deferral of adversarial-cases to F6; F1:39 + F4:42 explicit forward-refs naming "maintainer capture" as F6.7 scope.

### §4.8 Meta-Pattern / Composition Failures

**Principle**: a meta-pattern failure occurs when the canon-machinery itself becomes the failure vector — when grammar-dynamics that canon relies on for coordination instead reproduce the failure-shapes canon was meant to prevent. F6.8 is distinct from F6.1–F6.7: those categories name failures *within* a canon component (representation, protocol, sensor, scale-boundary, membrane, commitment, actor); F6.8 names failures *across* components where the composition-pattern itself is the failure vector.

This category is not a residue-bucket. It has specific internal sub-taxonomy, each sub-mode with an operational shape, a distinguishing feature, and ≥1 canon-evidence cite.

**Rule-level decomposition**:

- Constitutional-rule: failures in *who may author or revise the grammar itself* — canon-review capture, foundational-reframing capture, ADR-ingestion machinery gamed.
- Collective-choice-rule: failures in *grammar-evolution protocols* — canon-review protocol captured, adversarial-critique pathways blocked, disposition vocabulary narrowed (see audit-v2 §3.6 schema-capture of `disposition: oppose`).
- Operational-rule: routine semantic drift, individual abstraction becoming a stopping-rule, one-off substitution of authority-assignment for comprehension-generation.

**Sub-shape §4.8.1 — substitution-trap** (per ADR-0048)

- **Operational shape**: a coordination move that assigns structural capacity (authority, responsibility, role) without generating the grammar-dynamic (comprehension, commitment, care) the capacity is meant to carry. The allocational move substitutes for, rather than supports, the expressive / constructed capacity it requires.
- **Distinguishing feature**: the failure is not that the assignment is wrong — it is that the assignment is *treated as* the generation, such that further work on comprehension / commitment / care is structurally foreclosed. *"One can assign authority without generating comprehension. One can define responsibility without producing commitment."* (Johar, *Power Cannot Be Allocated*, 2026.)
- **Canon evidence**: ADR-0048 §"Substitution-trap as canon-legible failure mode" (line 120) + concepts yaml v6 slug; project-vision.md:97 + governance-artifacts.md:75 canon-body integrations; ADR-0049 §82 (Federici reproductive-labor sub-instance); ADR-0050 §219 (individual-for-joint commitment sub-instance).

**Sub-shape §4.8.2 — linguistic-closure** (per Johar / opposition-notes)

- **Operational shape**: a coordination vocabulary compresses complex coordination into named primitives (holon, membrane, intent-pressure), and the culture of use treats the named term as *settled* — a stopping-rule that terminates inquiry — rather than as *threshold-opening* that invites the grammar-dynamic to continue. The term becomes semantically-sealed; categories self-reinforce; revisability is lost.
- **Distinguishing feature**: unlike substitution-trap (where a single allocational move substitutes for generation), linguistic-closure is *distributed and cumulative* — the failure is cultural, not single-event. It is visible only in aggregate: the replication-crisis (publication categories became self-sealing), or a canon-vocabulary drift where a term's reference gradually decouples from its original referent without any single edit marking the transition.
- **Canon evidence**: lexicon/linguistic-closure.md:33-41 names both the failure mode and the structural corrective (pre-registration, claim lifecycle, attestation decay). Johar's essay is the primary-inspiration. The replication-crisis is the canonical exemplar cited at lexicon/linguistic-closure.md:33.

**Sub-shape §4.8.3 — capture-via-composition** (novel naming; ADR-0005 bundle shape)

- **Operational shape**: canon-legitimate primitives compose into an illegitimate whole. Each primitive, taken in isolation, passes its earning-test and serves its canon-role; the failure emerges at the composition layer where primitives stack into a configuration whose aggregate effect is captured, even though no individual primitive is. The decentralization-myth bundle is the paradigm: federation + peer-to-peer + decentralized-network framings each have legitimate uses, but compose into a theatrical-decentralization configuration when four power-distribution surfaces (sovereignty-locus, centralized-infrastructure-posture, admin-key-equivalent, reference-implementation scope) are silently absent.
- **Distinguishing feature**: unlike substitution-trap (allocational-for-generative substitution at single-move level) and unlike linguistic-closure (distributed cultural sealing), capture-via-composition is *structural and aggregate* — the failure lives in the composition-pattern, not in any component primitive. Recognition requires canon-authors to evaluate *new* compositions against known-capture shapes, which is ADR-0005 §Consequences' "canon-writing discipline" rule.
- **Canon evidence**: ADR-0005 decentralization-myth bundle (three-sub-critique composition at canon-framing level); ADR-0048 §"Substitution-trap as canon-legible failure mode" explicitly names substitution-trap as "complementing ADR-0005's decentralization-myth bundle" at bundle level; federation-protocol.md:60-68 operationalizes the bundle at the federation doc (three sub-critiques are co-declining, not substitutable).

**Recognition-shape** (category-level, spanning the three sub-shapes): evidence that a coordination move, a vocabulary usage, or a canon-composition produces an effect that reproduces a failure-shape canon was meant to prevent — and that the effect emerges from grammar-dynamics themselves, not from external adversarial intent.

**In-canon anchors** (category-level): ADR-0048 substitution-trap canonicalization; lexicon/linguistic-closure.md linguistic-closure canonicalization; ADR-0005 decentralization-myth bundle canonicalization; concepts yaml slugs `substitution-trap` (v6), `decentralization-theater` (v2), `filtering-membrane` (v2).

## Forward-References

F6 is authored before F3 actor-governance and F5 actuator-logic. Two explicit forward-references:

- **F3 actor-governance (forthcoming)** — F6.7 names actor-capture as a failure category; F3 will carry the governance-doctrine for standing, adjudication, recall, and replacement when an actor-capture failure is recognized. F6 commits to *category recognition*; F3 will commit to *governance response*. Shape-parallel to F4's forward-ref of actuator-logic to F5.
- **F5 actuator-logic (forthcoming)** — F6 names the failure categories canon must be able to recognize. What canon or an instance *does* operationally when a failure is recognized (alert, proposal, routing, human review, no change) is F5 scope. F6 is taxonomy + recognition; F5 will be operational response.

These forward-refs are load-bearing: canon can recognize failures via F6 *before* F3 + F5 land. Category-recognition is independent of governance-response and operational-response. When F3 and F5 land, they will extend F6 by adding per-category governance and response doctrine without modifying F6 itself.

## Open Questions

Failure-modes is a foundational commitment but not a solved problem. Several concerns are flagged here as foundation-layer residue; operational treatment is deferred to pattern / protocol layer or to downstream foundation docs.

- **Category-admission criteria for future failure-modes**: F6 admits 8 categories under honest-rigor ≥2-cluster threshold at authoring time. What admission-threshold applies to a proposed 9th category (e.g., temporal-coordination-failure, cross-federation-conflict-failure)? Audit-then-propose discipline (`feedback_audit_then_propose.md`) applies; specific threshold-doctrine is deferred.
- **Meta-canon capture sub-subsection depth**: F6.8 notes that canon-review capture is an instance of meta-pattern failure (the grammar-evolution protocol itself being captured). Should this warrant its own sub-subsection F6.8.4? Deferred: meta-canon capture is currently covered adequately under §4.8 constitutional-rule decomposition. A distinct sub-subsection would be authored if a specific meta-canon-capture instance canon-review encounters during routine operation demands it.
- **Category-boundary ambiguity**: in specific cases, a failure may straddle multiple categories (a sensor fraudulently-attested by a captured maintainer is F6.3 sensor-integrity AND F6.7 actor-capture AND potentially F6.8 composition). F6 does not prescribe category-priority in straddle cases — recognition is allowed to be multi-category. Pattern-layer may develop priority heuristics; F6 remains category-agnostic about precedence.
- **Failure vs legitimate-contest distinction**: a federation protocol-version that fails by some federation members' judgment may be legitimate-contest by others (ADR-0001 pluriversal-incommensurability). F6 does not resolve this — failure-recognition is itself contestable, and the contestation operates under F1 proxy-contestation + F4 inter-layer precedence disciplines. Foundation-layer commitment: *disagreement about whether a failure-shape has fired is canon-legible*.
- **Phase 5 section-level status labels**: this foundation doc is deliberately tag-agnostic. The Phase 5 sweep (canon-rebuild-arc follow-on, not yet scheduled) will tag sections across all canon docs with status-labels in one pass. Sections here are structured to be tag-ready but are not pre-tagged.

These open questions are foundation-layer concerns. Operational mechanisms for resolving them are pattern, protocol, or deployment-layer work.

## Related

- `docs/project-vision.md` — §"Core Thesis" 9-primitive roster; §"Power across primitives" naming substitution-trap as canon-legible failure mode; §"Absence of any layer invites a specific failure mode" (three-layer stack scale-transition anchor)
- `docs/foundations/structural-legitimacy.md` — sibling-doctrine; structural-legitimacy is positive doctrine, F6 is counterpart taxonomy. Line 50 explicitly defers "unified failure-mode taxonomy for coupling-breakdown" to F6.
- `docs/foundations/sensor-oracle-governance.md` — F1; line 39 explicit forward-ref to F6; §4.4-4.5 carries per-shape governance for F6.3 sensor-category failures
- `docs/foundations/representation-authority.md` — F4; line 42 explicit forward-ref to F6; load-bearing substrate for F6.1 representation-category failures
- `docs/foundations/governance-artifacts-and-graph-projections.md` — §75 substitution-trap canonicalization; §59 filtering-membrane distinct-from note; §67 power-across-primitives failure-shapes
- `docs/foundations/federation-protocol.md` — §166-173 protocol-layer operational failure-mode table (F6.2 operational-rule exemplar); §60-68 decentralization-myth bundle declination (F6.8 capture-via-composition anchor); §30 gatekeeper-role accrual (F6.7 actor-capture anchor)
- `docs/foundations/lexicon/linguistic-closure.md` — F6.8 linguistic-closure sub-shape canonical home
- `docs/research/canon-decisions/0005-decentralization-myth-bundle.md` — F6.8 capture-via-composition anchor; F6.7 actor-capture three sub-shapes
- `docs/research/canon-decisions/0042-dag-delete-structural-legitimacy-promote.md` — foundation-doc promotion template inherited at ADR-0075
- `docs/research/canon-decisions/0046-field-rule-level-stratification.md` — Ostrom 3-level rule-stack inherited at §3 Structural Doctrine
- `docs/research/canon-decisions/0048-power-expressive-constructed-modes.md` — F6.8 substitution-trap canonical definition + canon-legibility framing
- `docs/research/canon-decisions/0049-reproduction-continuity-primitive-admission.md` — F6.6 reproduction-continuity break sub-shape; Federicist asymmetric-vulnerability framing
- `docs/research/canon-decisions/0050-sociality-side-b-plus-primitive.md` — F6.6 joint-commitment breach sub-shape; §219 canon-legibility of individual-for-joint error
- `docs/research/canon-decisions/0053-glossary-refinements-bundled.md` — F6.5 permeability + double-boundary axes on Membrane
- `docs/research/canon-decisions/0075-failure-modes-foundation-doc-promotion.md` — the ADR that promoted this doc to foundation status
