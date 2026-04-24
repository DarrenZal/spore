---
doc_id: spore.actor-governance
doc_kind: foundation
status: draft
depends_on:
  - spore.project-vision
  - spore.governance-artifacts
  - spore.structural-legitimacy
  - spore.failure-modes
  - spore.actuator-logic
  - spore.representation-authority
---

# Actor Governance

Spore canon governs artifacts at depth — vision, ADRs, doctrine, commitments-as-authored, sensor-oracle-governance, representation-authority, failure-modes, actuator-logic. Yet the actors who *author and uphold* those artifacts have, until now, been governed only implicitly via Power-decomposition (ADR-0047), joint-commitment (ADR-0050), federation-encounter (ADR-0068), and structural-legitimacy (ADR-0042). Actor-governance is the doctrine that operationalizes those substrates: *how actors are admitted, how authority is delegated and contested across rule-levels, how power-asymmetry is governed, how joint-actors and federation-actors coordinate, how actor-capture is remediated, how governance-bodies compose, and how authorization boundaries hold and revoke.*

## Core Claim

An **actor** is any individual, role, or joint-composition that bears standing to perform coordination operations within Spore canon (intent, commitment, joint-commitment, evidence, signal, reproduction, attestation, appeal, contestation). Actors are not artifacts. They participate in artifact-governance — authoring, ratifying, contesting, replacing — but they themselves are governed by the doctrine in this document.

The legitimacy of every actor-role rests on the **structural-legitimacy** ground (`docs/foundations/structural-legitimacy.md`): authority is legitimate when coupled to consequence; an actor-role is legitimate when those who hold it bear the consequences of the decisions they make in that role. Actor-governance specifies how that coupling is established (admission), maintained (delegation, encounter, joint-action), restored when broken (capture remediation), and revoked when warranted (authorization-boundary discipline).

The doctrine commits to **standing-and-coupling discipline**: every authority-bearing role must have *both* explicit standing-grant grounds AND coupling-to-consequence evidence. Standing without coupling is decoupled authority (illegitimate by ADR-0042). Coupling without standing is informal influence (canon-illegible). Both together make an actor-role canon-legible at Field layer.

The doctrine applies uniformly across **individual actors**, **role-occupants**, and **joint-actors** (Gilbertian commitments-of-two-or-more-people per ADR-0050). Where modality heterogeneity is load-bearing — most importantly the human-vs-AI-actor distinction — it is named explicitly; otherwise the principled-rule applies.

## Scope

**In scope** for this doctrine:

- Actor admission and role assignment — how standing-to-act is established
- Authority delegation across the Ostrom 3-level rule-stack — operational / collective-choice / constitutional
- Power-asymmetry governance — operationalizing ADR-0047 Layers 2 and 3 at the actor layer
- Joint-actor coordination — federation-scale and organization-scale governance of Gilbertian joint-commitments
- Federation-actor encounter governance — actor-side discipline within ADR-0068 federation-encounter pattern
- Actor-capture prevention and remediation — discharge of F6.7 forward-reference per the four sub-shapes named there
- Governance-body composition and member legitimacy — how canon-legible governance bodies (canon-review participants, federation councils, stewardship circles) are constituted
- Authorization boundaries and revocation — how an actor's standing is bounded, narrowed, and ultimately withdrawn

**Out of scope** for this doctrine:

- **Algorithm-layer protocols** — specific recall thresholds, eligibility-score formulas, voting algorithms, demographic-rotation schedules. Those belong to pattern, protocol, or deployment layer. This doctrine commits to the *shape* of governance moves; deployments specify quanta.
- **Inter-layer representation precedence** — what wins when text disagrees with sensor or attestation. That is `representation-authority` (F4) scope. This doctrine assumes F4 has resolved which-layer-is-authoritative for a given disagreement.
- **Operational response selection** — what canon does once a failure or epistemic gap is recognized. That is `actuator-logic` (F5) scope. Actor-governance is *what F5's R2 contest routes through*; F5 selects the response, this doctrine governs who has standing to make and adjudicate the response.
- **Failure-mode recognition** — categorical taxonomy of how coordination breaks. That is `failure-modes` (F6) scope. Actor-governance discharges the F6.7 actor-capture category specifically; F6.1–F6.6 + F6.8 remain in F6 scope.
- **Cross-repo IC + PM actor-governance alignment** — those repos may adopt analogous actor-governance in their own canon-decisions; this doctrine is Spore-only at admission.

## Structural Doctrine — Rule-Level Stratification

Actor-governance operates across the three Ostrom rule-levels inherited from ADR-0046 (Field rule-level stratification). This is the structural scaffold for all eight categories below.

- **Constitutional rule layer** — *who may serve as actor at all*. Membership-to-role criteria; eligibility protocols; the boundary of who is a candidate-actor at Field, federation, or organization scale. Constitutional decisions establish actor-existence.
- **Collective-choice rule layer** — *the rules that govern actor-selection, delegation, recall, replacement, and authorization-boundary protocols*. Collective-choice decisions establish how actor-roles are admitted, amended, and revoked, within the constitutional frame.
- **Operational rule layer** — day-to-day actor operations: actors performing assigned roles, exercising delegated authority, participating in encounters, making and fulfilling commitments. Operational decisions are moves-within-the-game.

Rule-level separation is structural clarity, not three separate doctrines. A single actor-governance act often invokes all three: a routine commitment-attestation is operational, but a contested standing-claim escalates to collective-choice, and a challenge to actor-eligibility itself escalates to constitutional. The three levels form a stack, not a partition.

Routing through the rule-stack is how actor-disputes resolve without doctrine-specified algorithms. Where contestation routes through inter-layer precedence machinery (text-vs-sensor disagreement etc.), this doctrine **cites F4 §5.3 Appeal-Protocol wholesale** rather than authoring a parallel mechanism. F4 §5.3 already routes through the same Ostrom 3-level rule-stack; actor-governance layers actor-specific standing-doctrine over F4's inter-layer routing rather than duplicating it.

## Doctrine Per Category

The eight categories are presented under **selective per-category synthesis-depth**: where prior canon supplies rich substrate, the category cites and operationalizes; where the substrate is net-new, the category authors at depth. This is honest-rigor inheritance — the doctrine adapts depth to substrate maturity, not to template-symmetry.

### §4.1 Actor Admission and Role Assignment

**Principle** (HEAVY — net-new substrate). Standing-to-act is granted through canon-legible admission protocols. Three admission pathways are recognized at foundation layer:

- **Inheritance** — an actor inherits standing from a prior governance act (succession, delegation-from-prior-actor, role-assignment within an existing organization). Inheritance is the most-common admission pathway and the lowest-ceremony.
- **Election or selection** — an actor is admitted by the standing-bearing collective through a collective-choice protocol (canon-review consent, federation council vote, stewardship circle ratification). Election protocols are pattern-layer; foundation doctrine commits only to *that an election-or-selection protocol exists* and *that it operates under collective-choice rule per §3*.
- **Self-declaration with ratification** — an actor declares standing (e.g., "I will steward this sensor"; "I will author this ADR section") and the standing is ratified by silence-as-consent or explicit acknowledgment from those with collective-choice standing. This is the lightest pathway; it shifts ratification labor to those who would contest. Canon-legible only when the declaration itself is canon-legible (recorded in the artifact governing the role).

**Standing-grant grounds**: every admitted role MUST have an explicit *grant-source* recorded — whether an inherited prior governance act, an election outcome, or a ratified self-declaration. Roles without a grant-source are canon-illegible standing claims; they may persist informally but they do not bind canon and they do not generate the consequence-coupling required for legitimacy.

**Coupling-to-consequence requirement**: per ADR-0042, every authority-bearing role must couple decision-authority to consequence-bearing. At admission, the coupling shape must be made explicit: what consequences will the role-holder bear? Coupling can be reputational (canon-recorded record of decisions), operational (the role-holder bears outcomes the role decides), economic (the role-holder bears resource costs the role allocates), or relational (the role-holder bears the relationships the role shapes). Roles without explicit coupling-shape are decoupled; admission MUST include coupling-shape declaration.

**Role-eligibility versus role-suitability**: foundation doctrine distinguishes these at constitutional layer. Eligibility is the canon-legible boundary of *who may stand for the role at all* (membership requirements, prior-relationship requirements, capability minimums). Suitability is the collective-choice judgment about *who among the eligible should hold the role*. Eligibility is constitutional; suitability is collective-choice; performance is operational.

**Rule-level decomposition**:

- Constitutional: role definition, eligibility criteria, admission-pathway availability per role.
- Collective-choice: which eligible candidate(s) are admitted; selection-protocol design; suitability adjudication.
- Operational: routine application of admitted authority within the role's scope.

**Rule-in-use vs rule-in-form**: per ADR-0046 + F4 doctrine, the working-admission is canonical. A role admitted through canon-illegible processes that nonetheless functions in practice is canon-illegible *as a role* — it operates as informal influence until either the working-admission is made canon-legible (post-hoc ratification recording grant-source and coupling-shape) or it is recognized as F6.7 actor-capture and remediated under §4.6 below.

**AI-actor admission asymmetry**: AI-agent actors carry a structural admission concern. Unlike human actors, AI agents lack persistent identity across model versions and instance restarts; their coupling-to-consequence is mediated by their operators or model-providers (per F1 §6 + F4 §6 open questions). Foundation doctrine acknowledges this asymmetry: AI-actor admission MUST include explicit operator-of-record and model-provenance declaration. Operational protocols for AI-actor admission are pattern-layer; this doctrine names the asymmetry as load-bearing at admission time.

### §4.2 Authority Delegation Across Rule-Stack

**Principle** (SELECTIVE — cite ADR-0046 + ADR-0047 Layer-1; operationalize at actor layer). Authority over rule-levels is itself an actor-property. Citing ADR-0047 Layer-1: *"capacity-to-set, capacity-to-amend, and capacity-to-enforce rules at each level is distributed across participants, roles, and positions."* Actor-governance operationalizes this by specifying *how authority is delegated, narrowed, and chained* across the rule-stack.

**Three delegation moves**:

- **Vertical delegation** — an actor with constitutional-rule standing delegates collective-choice-rule authority within a defined scope to one or more sub-actors. Example: a federation council (constitutional standing) delegates protocol-amendment authority (collective-choice) to a working group; the working group cannot escalate beyond the delegated scope without re-routing back to the council.
- **Horizontal delegation** — an actor at a given rule-level delegates a subset of operational authority to peers without changing rule-level. Example: a maintainer with operational stewardship over sensor-A delegates routine calibration to a co-maintainer; both remain at operational level, with shared scope.
- **Conditional delegation** — authority is delegated subject to specific conditions (sunset clauses, scope conditions, performance conditions). Conditional delegation makes the coupling-to-consequence shape explicit at delegation time.

**Delegation chain integrity**: per ADR-0042 coupling discipline, an authority-chain is legitimate iff coupling-to-consequence holds at every link. A chain where each delegator is coupled but a downstream delegate is decoupled produces aggregate-decoupling — the chain transmits authority without transmitting consequence. Foundation doctrine commits to: every delegation MUST preserve coupling-to-consequence at the receiving link; uncoupled delegation is canon-illegible and operates as F6.7 actor-capture risk.

**Authority cycles** — per ADR-0042 doctrine, authority cycles are valid when each actor in the cycle bears the consequences of the cycle's decisions (workers → managers → workers in worker-coops; constituency → legislature → law → constituency in democracies). Foundation doctrine confirms: actor-governance does NOT prohibit authority cycles; it requires that every link in the cycle preserve coupling. ADR-0042's canonical rejection of DAG-of-authority is the foundation; this doctrine inherits it at actor-layer without re-arguing.

**Rule-level decomposition**: delegation operations themselves stratify across the rule-stack. Constitutional-rule delegation creates new collective-choice-standing actors; collective-choice-rule delegation creates new operational-standing actors; operational-rule delegation distributes performance-scope without creating new rule-level standing.

### §4.3 Power-Asymmetry Governance

**Principle** (SELECTIVE — cite ADR-0047 Layers 2 + 3; author standing-to-balance-asymmetry doctrine). Power across primitives (per ADR-0047) operates at three layers. Layer-1 (authority-over-rule-levels) is governed by §4.2 above. Layers 2 and 3 require actor-layer governance distinct from delegation:

- **Layer-2 — asymmetric-commitment**: when an actor enters into a commitment with another actor under structurally-asymmetric binding (caregiver-dependent, employer-employee, ruler-ruled, ancestor-descendant in pluriversal sacred-commitment framings), foundation doctrine commits to *standing-to-balance-asymmetry*: the more-bound party MUST have canon-legible standing to surface the asymmetry, contest specific terms, and exit if remediation fails. Care-commoning (ADR-0045) operates as the doctrine-lens making asymmetric-care-relations visible; asymmetric-commitment as Layer-2 names the structural binding-axis. Both compose at actor-layer: care-commoning lenses surface relations that asymmetric-commitment names as binding-asymmetric.
- **Layer-3 — asymmetric-membrane**: actors holding gatekeeping authority (admit/exclude/translate at canon-legible membranes) carry foundation-layer responsibilities: gate-decisions MUST be canon-legible in shape (recorded grants and refusals); standing-to-contest a gate-decision MUST be available to those affected; gate-decisions MUST inherit collective-choice-rule oversight per §3 rule-stack. Asymmetric-membrane authority without contest-standing is gatekeeping-capture, surfaced as F6.7 actor-capture sub-shape (admin-class accumulation).

**Asymmetric-joint-commitment** — when joint-commitments (ADR-0050) bind parties disproportionately (land-treaties between asymmetric powers; sacred-joint-commitment between ancestor-lineage and successor-lineage; federation-joint-commitment with size-asymmetry), the joint-actor governance protocols of §4.4 apply with explicit asymmetry-disclosure: the joint-commitment MUST record which parties bear which load-shares, and standing-to-contest disproportionate binding MUST be canon-legible. ADR-0061 declined `asymmetric-joint-commitment` as separate slug; the composition-pattern (ADR-0050 joint-commitment + ADR-0047 Layer-2 asymmetric-commitment) carries the load.

**Rule-level decomposition**: Layer-2 + Layer-3 power-asymmetry operates across the rule-stack. Constitutional-rule decisions establish which power-asymmetries are allowed at all; collective-choice rules establish the contest-and-remediation protocols; operational rules apply asymmetry-disclosure and contest-standing in routine practice.

### §4.4 Joint-Actor Coordination

**Principle** (SELECTIVE — cite ADR-0050 primitive; author federation-scale joint-actor governance). A joint-actor is the standing-bearer of a joint-commitment (Gilbertian, per ADR-0050: a commitment of two or more people, sui generis, not a sum of personal commitments). Foundation doctrine names three joint-actor governance concerns distinct from individual-actor governance:

- **Joint-actor composition** — who counts as a participant in the joint-actor at any given time? Foundation doctrine commits to: joint-actor membership is itself a collective-choice-rule decision (§3 rule-stack), governed by the same admission pathways as §4.1 with one additional discipline — joint-actor membership-changes MUST be ratified by concurrence per ADR-0050's rescind-by-concurrence operation. Unilateral departures or unilateral additions are canon-illegible at joint-actor scale; they reduce to individual-commitment shifts that may invalidate the joint-commitment under ADR-0050 mechanics.
- **Joint-actor accountability** — the demand-rights generated by ADR-0050 hold-accountable-via-demand-right operate against the joint-actor as a whole, not against individual participants alone. Foundation doctrine commits to: joint-actor accountability is canon-legible at the joint-actor level; decomposition to individual contributions is operational-scope, not foundation-scope. A federation that joint-commits to a protocol-version cannot dissolve accountability by pointing at individual federation-members; accountability rests with the joint-actor.
- **Joint-actor recall and dissolution** — when a joint-actor itself becomes a captured-actor (F6.7), recall operates by the same concurrence-rule that governed formation. Foundation doctrine declines to specify thresholds; algorithmic detail is pattern-layer. The doctrinal commitment is: joint-actor dissolution MUST route through ADR-0050 rescind-by-concurrence operations, not through individual-actor exit.

**Federation-scale joint-actors** are the highest-scale operational case. Federation-protocol-version-adoption is a joint-commitment by the entire federation (ADR-0068 federation-encounter R-Enc-3); the federation-as-joint-actor has standing to amend its own protocol-version, governed by collective-choice rule across federation members. Federation-scale joint-actor governance composes with §4.5 federation-encounter governance for actor-discipline within encounter events.

### §4.5 Federation-Actor Encounter Governance

**Principle** (SELECTIVE — cite ADR-0068 pattern; author actor-governance-at-encounter doctrine). The federation-encounter composition-pattern (ADR-0068: Signal + Joint-commitment + Intent + Evidence within bounded Field-conditions) is the canonical event-shape inside which federation-actor coordination fires. Foundation doctrine names three actor-governance concerns within federation-encounters:

- **Convening standing** — who has standing to convene a federation-encounter? Foundation doctrine commits to: convening standing inherits from prior federation-protocol or from joint-commitment of two-or-more federation-members. A convene-attempt without canon-legible convening standing is canon-illegible at federation layer; it may produce informal gatherings but does not generate federation-encounter Evidence. Convening standing operates at collective-choice rule per §3.
- **Ratification standing** — who has standing to ratify outcomes of a federation-encounter? Foundation doctrine commits to: ratification standing rests with the joint-actor *whose* Field the encounter operates within. The encounter produces draft-outcomes; the joint-actor (the federation, the sub-federation, the working-group) ratifies those outcomes per its own collective-choice rule. Encounters do not generate joint-commitments by themselves; the joint-actor's ratification act is the joint-commitment-generating event.
- **Within-encounter dispute standing** — when actors disagree within a federation-encounter, who has standing to escalate? Foundation doctrine commits to: dispute standing is held by any participating actor whose coupling-to-consequence (per ADR-0042) is affected by the disputed item. Disputes route through F4 §5.3 Appeal-Protocol with actor-specific standing-doctrine layered atop: F4 §5.3 routes the inter-layer adjudication; this doctrine adds *whose* standing routes the appeal.

**Co-presence-mode scope-conditioning** (per ADR-0064) applies: federation-encounters operate in co-presence-requiring or text-authoritative modes. Convening, ratification, and dispute standing are mode-agnostic at foundation level; specific protocols (synchronous-meeting quorum, asynchronous ratification windows) are pattern-layer.

### §4.6 Actor-Capture Prevention and Remediation (F6.7 Discharge)

**Principle** (HEAVY — F3 explicitly discharges F6.7 forward-ref). F6.7 (`docs/foundations/failure-modes.md` §4.7) names actor-capture as a failure category with four sub-shapes (maintainer-capture, admin-class accumulation, regulatory capture, digital-labor-as-free-gift) and rule-level decomposition. F6.7 commits to category-recognition; this section commits to **governance-response** for each sub-shape.

The unifying recognition-shape across all four sub-shapes (per F6.7): evidence that structural-legitimacy coupling (per ADR-0042) has broken for a specific actor in a specific role; the authority-consequence circuit that should bind decision-makers to outcomes has been severed, gamed, or silently delegated.

**Governance-response per sub-shape**:

- **Maintainer capture** (F6.7 sub-shape 1) — when a maintainer's structural-legitimacy coupling breaks (the maintainer no longer attends to or bears consequence for the sensor / representation / process they steward), governance-response operates at three rule-levels: operational replacement (a co-maintainer takes routine duties); collective-choice replacement protocol (canon-legible recall via the collective that admitted them); constitutional eligibility-restoration (re-establishing the role-eligibility frame if recall reveals a constitutional gap). Foundation doctrine commits to: every maintainer-role MUST have a canon-legible recall pathway at admission time; absence of a recall pathway is itself a canon-illegible role.
- **Admin-class accumulation** (F6.7 sub-shape 2 — Kostakis 2010, ADR-0005) — when administrative authority accretes around a demographically-homogeneous admin class, governance-response operates as **rotation-discipline at collective-choice rule** and **demographic-diversity protocols at constitutional rule**. Rotation-discipline names the requirement: admin-class roles MUST have rotation cadences canon-legibly recorded at admission; without cadence, the role drifts toward accumulation. Demographic-diversity protocols name the constitutional requirement: admin-class composition MUST be canon-legible against the standing-collective's own demographic shape; persistent divergence is constitutional-level capture-evidence. Specific cadences and diversity-thresholds are pattern-layer; foundation doctrine commits to that-they-must-exist.
- **Regulatory capture** (F6.7 sub-shape 3 — Stigler 1971; structural-legitimacy.md:50) — when an oversight-actor is captured by the actors it oversees, governance-response operates at constitutional rule via **external-feedback channels** and **cross-federation oversight**. Foundation doctrine commits to: oversight-actor roles MUST include canon-legible external-feedback protocols (channels through which non-overseen-parties can report capture-evidence) and SHOULD where structurally possible include cross-federation oversight-rotation (oversight-actors who simultaneously bear coupling to a different federation's outcomes). Capture-resistance is not algorithmically guaranteeable; foundation doctrine commits only to canon-legible structural conditions that improve resistance.
- **Digital-labor-as-free-gift** (F6.7 sub-shape 4 — Kleiner; ADR-0005(b)) — when reproductive-infrastructure cost is silently delegated to uncompensated labor, governance-response operates as **reproductive-labor recognition** and **labor-class standing-to-contest**. Reproductive-labor recognition inherits ADR-0049 reproduction-continuity primitive + ADR-0002 reproductive-commoning doctrine: foundation doctrine commits to making reproductive-labor canon-legible as Evidence (longitudinal-attestation per ADR-0073 §5). Labor-class standing-to-contest names the actor-side requirement: those bearing uncompensated reproductive-labor MUST have canon-legible standing to surface the asymmetry, route a §4.3 Layer-2 contest, and (if remediation fails) exit per §4.5 federation-encounter discipline. Specific compensation-protocols are pattern-layer.

**Cross-cutting prevention discipline**: foundation doctrine commits to **standing-grant + coupling-to-consequence audit** as a routine canon-review discipline. Every authority-bearing role admitted in canon SHOULD be auditable for: explicit grant-source (per §4.1), explicit coupling-shape (per §4.1 + ADR-0042), explicit recall pathway (per §4.6 sub-shape 1), and rotation cadence where applicable (per §4.6 sub-shape 2). Audit absence is not capture but is *capture-precondition*; canon-review may surface absence as a recommendation rather than as a failure.

**ADR-0048 substitution-trap interaction**: actor-capture failures often compose with substitution-trap (assigning structural capacity without generating the grammar-dynamic). When governance-response treats *recall-protocol authoring* as a substitute for *capture-remediation*, the foundation doctrine itself has been substitution-trapped. Per ADR-0048: *"One can assign authority without generating comprehension. One can define responsibility without producing commitment."* Authoring §4.6 recall protocols is allocational; restoring coupling is generative; the former does not substitute for the latter.

### §4.7 Governance-Body Composition and Member Legitimacy

**Principle** (HEAVY — net-new substrate). A governance-body is a collective-actor with canon-legible standing to make collective-choice or constitutional-rule decisions over a defined scope. Examples: canon-review participants (Spore canon-evolution governance); federation councils (federation-protocol governance); stewardship circles (commons-pool governance); pattern-library admission deciders (canon-pattern governance).

Foundation doctrine names three governance-body governance concerns:

- **Composition-legitimacy** — what makes a governance-body's composition canon-legible? Foundation doctrine commits to: every governance-body MUST have canon-legible **scope** (what decisions does it govern), **membership** (who currently holds standing in it), and **admission/recall protocols** (per §4.1 and §4.6). Bodies without canon-legible composition-legitimacy may persist as informal collectives but they do not generate canon-binding decisions; their outputs operate at the confidence-level of their composition's canon-legibility.
- **Member-legitimacy decay** — over time, governance-body members can drift from active participation while retaining nominal standing. Foundation doctrine commits to: governance-body member legitimacy SHOULD include canon-legible activity-coupling — a member whose participation has lapsed beyond a canon-legible threshold is operating at decayed legitimacy; the body's standing-to-decide is correspondingly weakened. Specific activity-thresholds are pattern-layer; foundation doctrine commits to that-decay-must-be-tracked.
- **Polycentric governance-body composition** — per ADR-0042 (polycentric coupling), no single governance-body suffices alone for legitimacy. Foundation doctrine commits to: high-stakes scope SHOULD be governed by overlapping governance-bodies whose composition is structurally diverse; single-body governance over high-stakes scope is a polycentric-monoculture risk (capture-precondition per §4.6 admin-class sub-shape).

**Governance-bodies as joint-actors** — every canon-legible governance-body operates as a joint-actor (per §4.4 and ADR-0050). The body's joint-commitments (ratifications, decisions, recalls) bind the body as a whole; individual members participate but the joint-actor is the canon-legible decision-maker. Body dissolution operates per §4.4 joint-actor recall and dissolution.

**Pluriversal governance-body framings** — per ADR-0001 held-tension, governance-bodies operating in pluriversal contexts may be constituted by relational-spiritual authority (Borrows' five-sources-of-law: sacred / natural / deliberative / customary / positivistic) rather than (or in composition with) deliberative authority. Foundation doctrine commits to: pluriversal governance-body composition is canon-legible at member-legitimacy layer through whichever authority-sources the relevant tradition recognizes; foundation doctrine does NOT collapse pluriversal sources to deliberative-only. Operationalization remains held under ADR-0001.

**Rule-level decomposition**: composition operates across the rule-stack. Constitutional-rule decisions establish *which governance-bodies exist at all* over which scope; collective-choice rules govern admission and recall to existing bodies; operational rules apply within active body operations.

### §4.8 Authorization Boundaries and Revocation

**Principle** (SELECTIVE — cite ADR-0046 rule-stack + ADR-0047 Layer-3 + F4 §5.3; author revocation-doctrine). Every actor's authorized scope is bounded; foundation doctrine commits to canon-legible boundary discipline:

- **Boundary canon-legibility** — every authority-bearing role MUST have canon-legible **scope** (what decisions can it make), **conditions** (under what circumstances), and **limits** (where the authority ends). Roles without canon-legible boundaries operate at unbounded-authority risk; collective-choice rule should narrow them or constitutional rule should re-admit them.
- **Boundary-narrowing without recall** — an actor's authorized scope can be narrowed via collective-choice rule without invoking the heavier recall protocol. Foundation doctrine commits to: scope-narrowing is the lighter governance-response when capture-precondition is detected but full capture has not occurred; it operates within F5 §4.4 R4 escalate without crossing into §4.6 recall protocols.
- **Authorization revocation** — full revocation operates as an actor's role being withdrawn (recall per §4.6) or terminated (role-dissolution at constitutional rule). Foundation doctrine commits to: revocation MUST follow the same protocol-discipline that governed admission, in inverse — admission via election requires election-shaped revocation; admission via inheritance requires inheritance-shaped revocation (succession). Revocation that bypasses admission-symmetry is canon-illegible and operates as F6.7 actor-capture risk against the revoked party (capture-by-revocation).

**Forkability as ultimate revocation** — per `structural-legitimacy.md` §42, forkability is the structural last-resort: when coupling breaks faster than it can be repaired, exit is preserved. Foundation doctrine commits to: forkability operates as the actor-governance terminus of F5 R4 escalate (operational → collective-choice → constitutional → fork). Forkability is NOT a failure mode; it is a canon-legible structural feature of legitimate coordination, applied at the ultimate-revocation layer.

**Inter-layer routing for authorization disputes** — when an authorization-boundary dispute crosses representation layers (e.g., text says X is authorized; sensor says X has not exercised; attestation says X has acted in capture), the dispute routes through **F4 §5.3 Appeal-Protocol** wholesale. Foundation doctrine cites F4 §5.3 rather than authoring a parallel routing mechanism. F4 §5.3 already operates through Ostrom 3-level rule-stack; this doctrine layers actor-specific standing-doctrine over that routing — the standing-grant per §4.1, the coupling-evidence per ADR-0042, the rule-level routing per §3, the appeal mechanics per F4 §5.3.

**Rule-level decomposition**: boundary discipline stratifies. Constitutional-rule decisions establish which boundary-shapes are allowed at all; collective-choice rules establish narrowing and revocation protocols; operational rules apply within current authorized boundaries.

## Forward-Reference Discharges

This foundation doc discharges three previously-open forward-references:

- **ADR-0042 §Consequences L82**: *"Phase 4's Actor Governance foundation doc (per v2 §6.4) builds on this coupling claim."* — DISCHARGED. Coupling-to-consequence is the legitimacy ground for every category in §4; the substrate-child relationship is canon-legible throughout.
- **F6 failure-modes §4.7 (`failure-modes.md:161`)**: *"Actor-capture-specific governance doctrine — who has standing to contest a captured actor, who adjudicates, what the recall / replacement / intervention protocols are — is the scope of F3 actor-governance (forthcoming)."* — DISCHARGED at §4.6 above for all four F6.7 sub-shapes.
- **F5 actuator-logic §4.2 R2-contest**: *"F5 §4.2 (contest) forward-references F3 for actor-capture-specific response per F6.7 pairing. F3 will carry governance-doctrine (standing, adjudication, recall, replacement)."* — DISCHARGED at §4.6 above; F5's R2-contest routes actor-capture-specific disputes through this doctrine's §4.6 governance-response.

These three discharges close a significant cluster of pending forward-refs from the Phase-4 Tier-A and Tier-B sequence; cross-foundation-doc connective tissue is now load-bearing.

## Open Questions

Actor-governance is a foundational commitment but not a solved problem. Several concerns are flagged here as foundation-layer residue; operational treatment is deferred to pattern, protocol, or deployment layer.

- **Human-vs-AI actor differentiation** (audit-v2 §3.3 item 4 Q4) — AI-actor admission asymmetry is named at §4.1; deeper differentiation (rights, responsibilities, constitutional-eligibility, recall-pathway design, joint-actor membership for AI agents) is foundation-layer residue. Per F1 §6 + F4 §6 open-question precedent, AI-actor governance evolves with model-provenance discipline and operator-of-record protocols at pattern layer; foundation doctrine names the asymmetry without forcing premature category-shape.
- **Pluriversal actor governance** — §4.7 acknowledges relational-spiritual authority as canon-legible composition source under ADR-0001 held-tension. Operationalization across federations operating with structurally different authority-source ontologies remains unresolved; foundation doctrine declines to pick a resolution-shape.
- **Cross-federation actor-portability** — when an actor holds standing in one federation and seeks standing in another, foundation doctrine commits to: portability is NOT automatic; each federation admits per its own §4.1 admission pathways. Whether canon-legible portability protocols across compatible federations should be developed is an open question, deferred to F7 minimum-viable-spore-instance + ADR-0068 federation-encounter pattern composition work.
- **Actor-governance temporal dynamics** — institutional memory transfer across actor-rotation; succession-discipline at long time horizons; how reproduction-continuity (ADR-0049) operates over actor-roles specifically. Some substrate exists at ADR-0049 + F1 §5; specific actor-rotation cadences and succession-protocols are pattern-layer; foundation doctrine names the concern as load-bearing without specifying mechanisms.
- **Standing-decay** — actor-coupling weakens over time absent renewal-discipline. §4.7 acknowledges member-legitimacy decay at governance-body layer; the broader question of *every actor-role's* legitimacy-decay-with-time and whether canon-legible renewal-discipline should be a constitutional-rule requirement is open.
- **Phase 5 section-level status labels** — this foundation doc is deliberately tag-agnostic. The Phase 5 sweep will tag sections across all canon docs in one pass.

These open questions are foundation-layer concerns. Operational mechanisms for resolving them are pattern, protocol, or deployment layer work.

## Related

- `docs/project-vision.md` — the 9-primitive roster including Holon (structural primitive), Commitment + Joint-commitment + Intent verbs; actor-governance operates over actors who exercise these primitives
- `docs/foundations/structural-legitimacy.md` — coupling-to-consequence as the legitimacy ground; substrate-parent of this doctrine per H3 hybrid relationship
- `docs/foundations/failure-modes.md` (F6) — §4.7 actor-capture category recognition; this doctrine's §4.6 discharges F6.7 forward-reference
- `docs/foundations/actuator-logic.md` (F5) — §4.2 R2-contest routes actor-capture disputes through this doctrine; operational-pair sibling per H3
- `docs/foundations/representation-authority.md` (F4) — §5.3 Appeal-Protocol cited wholesale at §4.5 + §4.8; cross-foundation-doc cite-don't-redefine discipline
- `docs/foundations/sensor-oracle-governance.md` (F1) — §4.3 maintainer-assignment + §6 AI-summary-asymmetry feed §4.1 + §4.6 sub-shape 1 of this doctrine
- `docs/foundations/governance-artifacts-and-graph-projections.md` — governance-from-artifacts machinery this doctrine extends to actors
- `docs/foundations/holonic-network-architecture.md` — actors-as-holons; §108 democratic accountability gaps clause now closed by this doctrine
- `docs/research/canon-decisions/0042-dag-delete-structural-legitimacy-promote.md` — substrate-parent ADR; §82 anticipation discharged
- `docs/research/canon-decisions/0046-field-rule-level-stratification.md` — Ostrom 3-level rule-stack inherited at §3
- `docs/research/canon-decisions/0047-power-multi-layer-decomposition.md` — Power Layers 1/2/3 cited at §4.2 + §4.3
- `docs/research/canon-decisions/0050-sociality-side-b-plus-primitive.md` — joint-commitment primitive; foundation for joint-actor governance at §4.4
- `docs/research/canon-decisions/0061-asymmetric-joint-commitment-slug-disposition.md` — declined slug; composition-pattern (ADR-0050 + ADR-0047 Layer-2) carries the load at §4.3
- `docs/research/canon-decisions/0068-federation-encounter-composition-pattern.md` — federation-encounter pattern; venue for §4.5
- `docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md` — F1 ADR; foundation-doc-promote template inherited
- `docs/research/canon-decisions/0074-representation-authority-foundation-doc-promotion.md` — F4 ADR; cite-don't-redefine appeal-protocol inheritance
- `docs/research/canon-decisions/0075-failure-modes-foundation-doc-promotion.md` — F6 ADR; F6.7 forward-reference discharged
- `docs/research/canon-decisions/0076-actuator-logic-foundation-doc-promotion.md` — F5 ADR; R2-contest forward-reference discharged
- `docs/research/canon-decisions/0077-actor-governance-foundation-doc-promotion.md` — the ADR that promoted this doc to foundation status
