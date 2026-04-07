# Instrumentation Evidence Design Batch 1

## 1. Scope And Rule

This memo designs instrumentation and evidence-collection approaches for the 3 priority validation targets identified in the production-evidence mapping:

1. Commitment lifecycle with type and consequence annotation
2. Discourse revision depth tracking
3. Context-change coordination comparison in BKC pools

This is not an implementation run. No code is written, no schemas are deployed, no operational processes are changed. The purpose is to specify what must be observed, recorded, and compared so that later implementation or operational practice can follow the design without ambiguity.

Canon-safe claims remain the upper bound of what is currently confirmed. Each promoted entry's enacted language was approved through human review with explicit qualification. The boundary between confirmed mechanism, design contribution, and design hypothesis is binding. This memo does not retroactively strengthen any claim. It specifies the conditions under which operational evidence could be gathered — not the evidence itself.

Johar remainder (design contribution, design hypothesis, Johar-distinctive integration) remains hypothesis unless observed evidence later strengthens it through the same decomposition and review process that produced the canon entries.

## 2. Existing Observation Surfaces

### 2.1 Commitment Pooling Records (BKC)

**What is already observable:**
- 2 pools (Victoria + Cascadia) with 23+ commitments tracked
- Commitment lifecycle states: PROPOSED → VERIFIED → ACTIVE → EVIDENCE_LINKED → REDEEMED (+ DISPUTED → RESOLVED branch)
- Pool federation routing with scoring criteria (bioregional alignment, capacity overlap, timeframe compatibility, governance fit)
- 33,400 VCV on Celo mainnet (parallel token settlement)
- Commitment-pooling pattern is documented and active (`docs/patterns/commitment-pooling.md`)

**What is missing:**
- No commitment-type metadata (delivery / discovery / stewardship / risk)
- No consequence-bearer annotation on any commitment
- No standing-condition tracking (security, capability, membership)
- No structured record of who bore consequences for which governance decisions
- No renegotiation event log

**Reliability:** The lifecycle state machine is well-defined and the BKC pools are operational. The surface is solid for adding metadata. The gap is annotation, not infrastructure.

### 2.2 Governance and Review Traces

**What is already observable:**
- Promotion review outcomes with structured dispositions (batch 1, 2, 3)
- Qualification text preserving confirmed-mechanism / design-contribution / design-hypothesis boundaries
- Phase 11b decision memo with explicit criteria and reasoning
- Corroboration review checkpoints tracking evidence sufficiency per family
- Enactment memos documenting canon changes with boundary preservation
- Spec-DAG frontmatter tracking doc lifecycle (draft / active / deprecated) with dependency validation

**What is missing:**
- No structured record of who participated in governance decisions and who bore their consequences
- No revision-depth annotation distinguishing administrative updates from substantive re-examination
- No contestability invocation log (no record of when contestability was exercised vs available but unused)
- Decision records capture outcomes and reasoning but not the discourse that produced them

**Reliability:** The governance traces are rich for a project of this maturity. The Johar corpus program itself generated substantial structured review artifacts. But the traces are research-governance artifacts, not operational-coordination governance artifacts. BKC decision logs are referenced in pattern docs but not present in this repo.

### 2.3 Discourse and Revision Traces

**What is already observable:**
- Discourse-as-governance pattern documented with grammar derivation (proposal = claim, argument = attestation, evidence = evidence, decision = artifact, question = signal)
- Claims-evidence-attestation protocol with lifecycle states (proposed → supported → challenged → superseded → reinstated)
- Attestation strength factors defined (count, diversity, recency, contest status)
- Attestation decay modes defined (contradiction, elapsed time, revocation)
- Graduated formality levels documented (personal / project / federation)

**What is missing:**
- No operational discourse graph instance in this repo — the pattern is documented but not exercised as a running system
- No revision-depth measure distinguishing genuine reopening from administrative versioning
- No record of settled terms being challenged or revised through discourse mechanisms
- No attestation-decay event has ever been triggered or logged
- The Johar corpus program exercised structured revision (staged promotion, boundary enforcement), but using research-process artifacts as evidence of discourse-graph effectiveness creates a circularity risk

**Reliability:** The design layer is well-articulated. The operational layer is almost entirely absent. Discourse-as-governance is a pattern description, not a running system. The strongest near-term evidence surface is the research governance workflow itself, used cautiously.

### 2.4 Graph and Projection Artifacts

**What is already observable:**
- 8 graph projections formally defined in `constitutional-artifacts-and-graph-projections.md`
- Spec-DAG operational in this repo (frontmatter dependency graph, validated)
- Epistemic graph partially instantiated through koi-processor (entity resolution, claims, evidence linking)
- Commitment graph design exists in the commitment-pooling pattern
- Project metadata schema (`_meta/project.json`)

**What is missing:**
- No discourse graph projection has been instantiated
- No multi-projection comparison exists (no case where the same decision was visible across multiple graph types)
- Constitutional graph exists as prose, not as queryable structure
- Intent hypergraph is design only
- Routing/flow graph is design only

**Reliability:** The spec-DAG is the most mature projection — it is operational and validated. The epistemic graph is partially instantiated through koi-processor. All other projections are design artifacts.

### 2.5 Constitutional Artifacts

**What is already observable:**
- Vision document with constitutional commitments (provenance, forkability, pluralism, autonomy, authorized boundary crossing, explicit authority, contestability)
- Coordination ecology defined (Vision → Roadmap → Intent → Commitment → Evidence → Learning)
- Instance model (canon / node / agent / site) with composition rules
- Agent Commons meta-protocol with conformance tiers (0–2)

**What is missing:**
- No record of a constitutional commitment being contested, revised, or revoked
- No evidence of the coordination ecology loop completing a full cycle (learning → revised vision)
- No forkability exercise has been documented

**Reliability:** Constitutional artifacts are well-documented as design intent. No constitutional artifact has yet been stress-tested by operational disagreement or pressure.

### 2.6 Coordination Notes and Logs

**What is already observable:**
- BKC referenced as operational instance with 2 pools, steward reviews, mapping workshops
- CLC / Grassroots Economics referenced as parallel implementation
- Johar corpus program planning trail (program index, prep memos, review packets, outcome memos, enactment memos, wording refinements)

**What is missing:**
- BKC operational coordination records (decision logs, steward review records, workshop outputs) are not in this repo — they exist in BKC's own governance memory
- No cross-pool comparison data exists in this repo
- No longitudinal coordination quality measurements

**Reliability:** The Spore repo references BKC operational surfaces but does not contain them. Any instrumentation that depends on BKC operational data requires either importing that data or instrumenting at the BKC layer.

## 3. Priority Target Table

| Target | What It Would Validate | Existing Hook | Needs Discipline Or Instrumentation | Difficulty | Main Risk |
|--------|----------------------|---------------|-------------------------------------|------------|-----------|
| **1. Commitment lifecycle with type and consequence annotation** | Whether commitment-type differentiation correlates with coordination quality; whether consequence-bearing participants have effective voice (human-economy-and-commitment, legitimacy-and-shared-consequence) | BKC commitment pools (23+ commitments, lifecycle states tracked); commitment-pooling pattern with defined state machine | Metadata extension: commitment-type tag, consequence-bearer field, standing-condition annotation, renegotiation event log | Medium | Annotation overhead discourages adoption; type taxonomy imposed rather than discovered; evidence mistaken for validation of 4-type taxonomy when it only tests differentiation |
| **2. Discourse revision depth tracking** | Whether the grammar's mechanisms actually resist linguistic closure; whether revision genuinely reopens inquiry vs administrative versioning (linguistic-closure, legitimacy-and-shared-consequence, holding-complexity-beyond-control) | Claims-evidence-attestation lifecycle; discourse-as-governance pattern; Johar corpus governance trail as candidate observation case | Discipline: revision-depth annotation on governance decisions and claim transitions; instrumentation: revision-type tag on claim lifecycle transitions | Medium-high | Circularity if Johar corpus program is primary evidence source; revision-depth judgment is inherently subjective; low volume of governance decisions limits statistical confidence |
| **3. Context-change coordination comparison in BKC pools** | Whether context variables predict coordination quality more strongly than composition variables (relational-topology-and-context-design, human-economy-and-commitment) | BKC pool federation with overlapping participants and different governance arrangements; multiple pools as natural comparison surface | New instrumentation: define "coordination quality" measurably; create context-change and composition-change event log; structured coordination outcome snapshots | High | "Coordination quality" is hard to operationalize; context and composition changes co-occur; sample size limited by pool count and activity level |

## 4. Per-Target Design

### Target 1: Commitment Lifecycle With Type And Consequence Annotation

#### A. Validation Question

Does differentiating commitments by epistemic character (what kind of uncertainty they face) and annotating who bears consequences for their outcomes produce observable evidence about how commitment-based coordination functions? Specifically: do commitments with different epistemic characters require different governance treatment, and do consequence-bearing participants have effective voice in governance decisions affecting their commitments? This does not confirm the 4-type taxonomy by default — it creates the conditions under which the taxonomy's usefulness could be observed or disconfirmed.

#### B. Minimum Observable Unit

A single commitment record in a BKC pool that carries: (a) a commitment-type tag describing the epistemic character of the work, (b) a consequence-bearer annotation identifying who is affected by the commitment's outcome, and (c) a standing-condition note indicating whether the participant had the security, capability, and membership conditions to participate effectively. One annotated commitment is the minimum unit. A meaningful evidence window requires at least 10–15 annotated commitments with at least 2 distinct types represented.

#### C. Required Fields

- `commitment_id` — stable identifier linking to the existing pool record
- `commitment_type` — one of: delivery, discovery, stewardship, risk, or unclassified (unclassified is legitimate — forcing classification where it does not fit would be worse than admitting ambiguity)
- `type_rationale` — one sentence explaining why this type was assigned (prevents post-hoc rationalization)
- `consequence_bearers` — list of agents or holons who bear material consequences if this commitment succeeds or fails
- `standing_present` — boolean or short note: did the committing agent have security, capability, and membership conditions met?
- `governance_decision_refs` — list of decision IDs or memo references that governed this commitment's lifecycle transitions
- `renegotiation_events` — timestamped log of scope changes, with reason and who initiated
- `outcome_quality_note` — brief annotation at EVIDENCE_LINKED or REDEEMED stage: did the commitment's governance treatment match its epistemic character?

#### D. Key Events Or State Changes

- Commitment enters pool (PROPOSED) with type and consequence annotation
- Governance verifies commitment (VERIFIED) — record whether verification criteria varied by type
- Renegotiation event occurs — record what changed, why, who initiated, whether governed or informal
- Evidence linked (EVIDENCE_LINKED) — record whether verification threshold matched type expectations
- Commitment redeemed or disputed — record outcome and whether consequence-bearers had voice in the resolution
- Standing conditions change for a participant — record whether participation quality visibly changed

#### E. Measures / Indicators

- **Support indicator:** Commitments with different types receive observably different governance treatment (verification criteria, renegotiation frequency, evidence thresholds) — and participants report this as appropriate
- **Support indicator:** Consequence-bearing participants who had standing conditions met show higher participation quality (voice in decisions, satisfaction with outcomes) than those without
- **Partial support:** Type differentiation exists but governance treatment is uniform regardless — suggesting the taxonomy adds description but not operational value
- **Warning indicator:** Commitments classified as "discovery" are governed identically to "delivery" — the taxonomy does not influence practice
- **Warning indicator:** Consequence-bearer annotations are present but consequence-bearers report no effective voice — coupling is formal, not real

#### F. Observation Window

Minimum: one full commitment cycle (PROPOSED through REDEEMED or DISPUTED) for at least 3 commitments of different types — likely 3–6 months given BKC's current operational cadence. Meaningful comparison: 2 full cycles covering at least 10 annotated commitments, likely 6–12 months. The observation window must be long enough that renegotiation events can occur naturally, not be manufactured.

#### G. Existing Hook Vs New Instrumentation

The commitment lifecycle state machine is already operational in BKC pools. The PROPOSED → VERIFIED → ACTIVE → EVIDENCE_LINKED → REDEEMED pipeline exists. Adding type, consequence-bearer, and standing annotations is a metadata extension on existing records, not new infrastructure. The main new instrumentation is the renegotiation event log and the outcome quality note at lifecycle completion — these do not currently exist in any form. The governance-decision-refs field connects to existing BKC decision logs. Overall, this target rides primarily on existing surfaces with modest metadata extension.

#### H. Minimal Implementation Shape

**Light metadata extension.**

The commitment pooling surface is operational. What is needed is: (a) 5–8 new metadata fields on commitment records, (b) a lightweight renegotiation event log, and (c) an outcome annotation convention at lifecycle completion. No new systems, no new protocols. The extension can be adopted incrementally — annotating new commitments as they enter pools, with no requirement to back-annotate the existing 23+.

---

### Target 2: Discourse Revision Depth Tracking

#### A. Validation Question

Does the grammar's structured revision mechanism (claim lifecycle, discourse graph, governance memory) produce genuine reopening of inquiry — cases where a settled category, decision, or claim was substantively re-examined and revised — or does revision in practice reduce to administrative versioning where the form of revision is present but the substance of inquiry is not reopened? This tests the core claim of the linguistic-closure entry: that the corrective to closure is institutional revisability. If the grammar's own governance artifacts show only superficial revision, that is a warning signal. If they show genuine revision depth, that is direct (though limited) evidence.

#### B. Minimum Observable Unit

A single claim lifecycle transition or governance decision revision that carries a revision-depth annotation: was this transition (a) administrative update (formatting, reference fix, metadata correction), (b) scope refinement (narrowing or widening without re-examining the underlying claim), (c) genuine reopening (the settled position was re-examined in light of new evidence, changed conditions, or detected closure), or (d) authority override (revision imposed without structured discourse). One annotated revision event is the minimum unit. A meaningful evidence window requires at least 5–8 annotated revision events, including at least 1 case of genuine reopening or 1 case where reopening was considered but rejected.

#### C. Required Fields

- `revision_id` — unique identifier for the revision event
- `artifact_ref` — doc_id or claim_id of the artifact being revised
- `revision_type` — one of: administrative_update, scope_refinement, genuine_reopening, authority_override
- `revision_trigger` — what prompted the revision (new evidence, participant challenge, scheduled review, external input, detected tension)
- `prior_state_summary` — brief note on what the artifact said before revision
- `revision_outcome` — what changed and why
- `discourse_trace` — was the revision produced through structured discourse (proposal, argument, evidence, decision) or through informal/unilateral action?
- `closure_signal_detected` — boolean: was this revision prompted by detection of a settled term losing contact with reality?

#### D. Key Events Or State Changes

- Claim transitions from one lifecycle state to another (especially proposed → supported, supported → challenged, supported → superseded)
- Governance decision is revisited — record whether the revisitation was scheduled, triggered by new evidence, or prompted by a participant challenge
- A settled term or category in the grammar is used in a new context — record whether the term was re-examined for fit or applied without question
- Attestation decays or is revoked — record whether the decay triggered any re-evaluation of claims that depended on it
- A decision from governance memory is referenced in a new decision — record whether the prior decision was treated as settled precedent or as revisable input

#### E. Measures / Indicators

- **Support indicator:** At least 1 case of genuine reopening where a settled claim or decision was substantively re-examined through structured discourse, and the revision changed the artifact's content or governance implications
- **Support indicator:** Revision events show a mix of types, with genuine reopening occurring at a rate above zero — the grammar is not used only for administrative updates
- **Partial support:** Revision events occur regularly but are exclusively administrative or scope-refinement — the machinery runs but does not produce genuine inquiry
- **Warning indicator:** No genuine reopening events in the observation window — all revisions are administrative, suggesting the discourse mechanisms do not resist closure in practice
- **Warning indicator:** Authority override is the most common revision type — the grammar's discourse mechanisms exist but are bypassed

#### F. Observation Window

Minimum: 3 months of active governance or research workflow, capturing at least 5 claim lifecycle transitions and 3 governance decision points. Meaningful comparison: 6–9 months, long enough for settled terms to encounter new conditions and for the revision-depth distribution to stabilize. The Johar corpus program's own governance trail (spanning roughly 2 months of active review, promotion, and enactment) is a candidate observation case if used cautiously — it generated substantial structured revision, but its use as evidence must be flagged as self-referential.

#### G. Existing Hook Vs New Instrumentation

The claims-evidence-attestation protocol already defines lifecycle states and transition triggers. The governance-memory pattern already defines document lifecycle (draft / active / deprecated) and dependency tracking. The Johar corpus governance trail already contains structured review artifacts with dispositions, qualifications, and boundary-preservation requirements. What is missing is the revision-depth annotation itself — a lightweight tag on each transition or revision event classifying its depth. The discourse-trace field is new instrumentation (recording whether the revision went through structured discourse). The closure-signal-detected field is new instrumentation (recording whether the trigger was a detected closure risk). Overall, this target requires modest new annotation on existing surfaces plus disciplined attention to classifying revision depth at the time of revision, not retrospectively.

#### H. Minimal Implementation Shape

**Mixed — discipline plus light metadata extension.**

The primary need is operational discipline: when a claim transitions or a governance decision is revisited, annotate the revision depth at the time it happens. This requires no tooling — only the practice of including revision-type and revision-trigger in the commit message, memo, or frontmatter update. The secondary need is a small metadata extension: adding `revision_type`, `revision_trigger`, and `closure_signal_detected` fields to governance artifacts. The discourse-trace field requires the revision to be produced through a recognizable discourse process (proposal → argument → decision), which is discipline rather than tooling.

---

### Target 3: Context-Change Coordination Comparison In BKC Pools

#### A. Validation Question

Do changes in governance arrangements, protocols, or relational structures (context changes) produce measurable changes in coordination quality — independent of changes in who participates (composition changes)? This tests the relational-topology entry's core claim that context variables predict coordination quality more strongly than composition variables. The comparison design does not require perfect experimentation — it requires cases where context changed without composition changing, cases where composition changed without context changing, and cases where both changed, with enough structure to distinguish the effects.

#### B. Minimum Observable Unit

A single coordination outcome snapshot for a BKC pool at a specific point in time, capturing: (a) the pool's governance arrangement (what protocols, decision processes, and participation structures were in place), (b) the pool's composition (who was participating), and (c) a coordination quality assessment covering at least 3 dimensions. One snapshot is the minimum unit. A meaningful comparison requires at least 3 snapshots from the same pool at different times, or 2 snapshots from pools with overlapping participants but different governance arrangements. The minimum comparison pair: same participants, different governance arrangement, observable coordination quality difference.

#### C. Required Fields

- `snapshot_id` — unique identifier
- `pool_id` — which pool
- `snapshot_date` — when the snapshot was taken
- `governance_arrangement` — structured description of protocols, decision processes, routing rules, and participation structures in effect
- `composition` — list of active participants (anonymized if needed, but trackable for comparison)
- `context_change_since_last` — what governance arrangement changed since the previous snapshot (if any), with date and description
- `composition_change_since_last` — who joined or left since the previous snapshot (if any)
- `coordination_quality_dimensions` — at least 3 of: decision throughput (decisions per period), decision contestation rate, participant satisfaction (self-reported), commitment fulfillment rate, renegotiation frequency, time-to-decision, voice distribution (how evenly participation is distributed)
- `notable_events` — any significant coordination events in the snapshot period (disputes, successful collaborations, federation routing, etc.)

#### D. Key Events Or State Changes

- Pool governance arrangement changes (new protocol, new decision process, new routing rule, new participation structure)
- Pool composition changes (new participant joins, existing participant exits or becomes inactive)
- Significant governance decision occurs — record under which arrangement and with which participants
- Commitment lifecycle events cluster — record whether clusters correlate with arrangement changes or composition changes
- Cross-pool interaction occurs — record which governance arrangements were in play on each side
- A participant reports satisfaction or dissatisfaction with coordination quality — record alongside the current arrangement

#### E. Measures / Indicators

- **Support indicator:** Cases where context changed and composition held constant, and coordination quality changed in the predicted direction (improved with better relational design, degraded with worse)
- **Support indicator:** Cases where composition changed and context held constant, and coordination quality was less affected than in context-change cases — context outpredicts composition
- **Partial support:** Both context and composition changes produce coordination quality changes of similar magnitude — context matters but does not outpredict composition
- **Warning indicator:** Composition changes consistently produce larger coordination quality effects than context changes — the relational-topology claim is weakened
- **Warning indicator:** Coordination quality is stable regardless of context or composition changes — neither variable is a strong predictor, suggesting other factors dominate

#### F. Observation Window

Minimum: 6 months, capturing at least 1 governance arrangement change and 1 composition change in at least 1 BKC pool. Meaningful comparison: 12–18 months, capturing multiple arrangement changes across at least 2 pools with overlapping participants. The observation window must be long enough for coordination quality effects to manifest — a governance change may take 1–2 months to produce observable effects. Longitudinal tracking is essential; single-point comparisons are insufficient because arrangement effects may be delayed.

#### G. Existing Hook Vs New Instrumentation

BKC pools provide the natural comparison surface: multiple pools with overlapping participants and different governance arrangements. The commitment lifecycle already tracks commitment maturation. Pool federation routing already logs cross-pool interactions. What does not exist: (a) a structured governance-arrangement description for each pool at each point in time, (b) a coordination-quality measurement framework, (c) a systematic composition tracker, or (d) periodic outcome snapshots. This target requires the most new instrumentation of the three. The governance-arrangement description could ride on existing frontmatter conventions (extending the spec-DAG pattern to include pool governance descriptions). The coordination-quality dimensions must be defined and measured — this is the hardest part, because "coordination quality" is not a native concept in the repo's current vocabulary.

#### H. Minimal Implementation Shape

**New structured artifact.**

Unlike Targets 1 and 2, this target cannot ride primarily on existing surfaces. It requires: (a) a coordination outcome snapshot template, (b) a governance-arrangement description convention, (c) a coordination-quality dimension set, and (d) a periodic snapshot discipline. The snapshot is a new structured artifact type — a lightweight document or record taken at regular intervals (e.g., quarterly) or at governance-arrangement change points. The minimal shape is a markdown template with frontmatter, stored alongside pool governance records. The alternative — instrumenting this through tooling — would be premature; disciplined manual snapshots are the right starting point.

## 5. Shared Schema Opportunities

### 5.1 `consequence_bearer` Field

- **Which targets it serves:** Target 1 (who bears consequences for commitment outcomes), Target 2 (whether consequence-bearing participants had voice in revision decisions)
- **Why shared use is valuable:** Consequence-bearing is the structural link between human-economy-and-commitment (standing and participation) and legitimacy-and-shared-consequence (authority-consequence coupling). A single field convention avoids two separate tracking mechanisms for the same underlying relationship.
- **Natural home in repo:** Commitment pool records (Target 1) and governance decision memos (Target 2). The commitment-pooling pattern already tracks who committed; adding who bears consequences is a natural extension.

### 5.2 `revision_type` Enum

- **Which targets it serves:** Target 2 (classifying revision depth), Target 1 (tracking renegotiation events, which are a form of revision)
- **Why shared use is valuable:** Renegotiation of a commitment (Target 1) and revision of a governance decision or claim (Target 2) are structurally the same operation — reopening a settled state. Using the same revision-type vocabulary (administrative_update, scope_refinement, genuine_reopening, authority_override) across both targets ensures that evidence about revision depth is commensurable.
- **Natural home in repo:** The claims-evidence-attestation protocol already defines claim lifecycle transitions. Adding revision_type to the transition record is a natural extension. For commitment renegotiation, the renegotiation_events log in Target 1 would use the same enum.

### 5.3 `governance_arrangement` Description

- **Which targets it serves:** Target 3 (describing the governance context for coordination quality comparison), Target 1 (recording which governance arrangement governed a commitment's lifecycle)
- **Why shared use is valuable:** Both targets need to describe what governance protocols, decision processes, and participation structures were in effect at a given time. A shared convention avoids incompatible descriptions.
- **Natural home in repo:** The governance-memory pattern's frontmatter convention is the natural host. A `governance_arrangement` block in pool-level documents would describe the protocols and structures in effect, versioned over time.

### 5.4 `coordination_quality_note` / Outcome Annotation

- **Which targets it serves:** Target 1 (outcome_quality_note at commitment completion), Target 3 (coordination_quality_dimensions in snapshots)
- **Why shared use is valuable:** Both targets assess coordination quality, but at different granularity — Target 1 at the individual commitment level, Target 3 at the pool level. Using compatible quality dimensions ensures that commitment-level observations aggregate meaningfully into pool-level assessments.
- **Natural home in repo:** No natural home currently exists. This would be a new convention, likely defined as a small set of standard dimensions (decision throughput, participant satisfaction, commitment fulfillment rate, voice distribution) applicable at both commitment and pool levels.

## 6. Minimal Evidence Stack

The minimum stack of artifacts needed to begin gathering usable evidence across all 3 targets:

### 6.1 Commitment Metadata Extension

A lightweight set of fields added to commitment pool records: `commitment_type`, `type_rationale`, `consequence_bearers`, `standing_present`. These ride on existing commitment records. No new artifact type. Adopted incrementally on new commitments.

### 6.2 Renegotiation / Revision Event Convention

A simple log format for recording renegotiation events (Target 1) and revision events (Target 2). Each event carries: timestamp, artifact_ref, revision_type (shared enum), trigger, outcome summary, discourse_trace (yes/no). Can be a section within existing memos or a standalone lightweight log. Uses the shared `revision_type` enum across both targets.

### 6.3 Coordination Outcome Snapshot Template

A new artifact type for Target 3: a structured markdown document taken periodically or at governance-arrangement change points. Carries: pool_id, snapshot_date, governance_arrangement, composition, context_change_since_last, composition_change_since_last, coordination_quality_dimensions, notable_events. Stored alongside pool governance records.

### 6.4 Consequence-Bearing Decision Trace

An annotation convention for governance decisions: who decided, who bore consequences, whether consequence-bearers had voice. Can be a section within existing decision memos or review outcome documents. Uses the shared `consequence_bearer` field. Adopted on new decisions without requiring back-annotation.

These 4 artifacts compose the minimum evidence stack. Together they cover all 3 targets. None requires new tooling. All can begin with operational discipline and lightweight markdown conventions.

## 7. Priority Implementation Order

### First: Target 1 — Commitment Lifecycle With Type And Consequence Annotation

**Why first:** Lowest implementation difficulty. Rides almost entirely on existing BKC commitment pool infrastructure. Requires only metadata extension on existing records, not new artifact types. Generates evidence for 2 canon entries (human-economy-and-commitment, legitimacy-and-shared-consequence). BKC pools are the most mature operational surface in the Spore ecosystem — the evidence will be grounded in real coordination, not research-process artifacts. Can start immediately with process discipline: annotate the next commitment that enters a pool.

**Dependency / leverage:** Establishes the `commitment_type`, `consequence_bearer`, and `revision_type` conventions that Target 2 and Target 3 will also use. Creates the shared schema foundation.

**Can start with discipline:** Yes. No tooling required. The first annotated commitment can be created by adding fields to the next commitment record in a BKC pool.

### Second: Target 2 — Discourse Revision Depth Tracking

**Why second:** Medium difficulty. Requires operational discipline more than tooling. Can ride on the revision_type enum established by Target 1. The Johar corpus governance trail provides a candidate observation case (with circularity caveat). Generates evidence for 3 canon entries (linguistic-closure, legitimacy-and-shared-consequence, holding-complexity-beyond-control). Higher value per unit of evidence than Target 3, but harder to observe because revision events are less frequent than commitment events.

**Dependency / leverage:** Uses the `revision_type` enum from Target 1. Produces revision-depth data that Target 3's governance-arrangement descriptions will reference (arrangement changes are revision events). Establishes the annotation discipline that makes future discourse-graph operationalization measurable.

**Can start with discipline:** Yes. The primary need is to annotate revision depth at the time revisions happen. The next claim lifecycle transition or governance decision revision is the starting point.

### Third: Target 3 — Context-Change Coordination Comparison

**Why third:** Highest difficulty. Requires defining "coordination quality" measurably — a concept not yet operationalized in the repo. Requires new artifact type (coordination outcome snapshot). Depends on sufficient pool activity and governance-arrangement variation. Generates evidence for 2 canon entries (relational-topology-and-context-design, human-economy-and-commitment). The observation window is longest (6–18 months). But it tests the most distinctive claim in the promoted canon (context outpredicts composition), making the eventual evidence highly valuable.

**Dependency / leverage:** Benefits from the governance-arrangement convention established by Targets 1 and 2. Benefits from coordination-quality vocabulary developed incrementally through Target 1's outcome_quality_note. The snapshot template is the capstone artifact that integrates conventions from all 3 targets.

**Can start with discipline:** Partially. The coordination outcome snapshot template can be designed immediately. Taking the first snapshot requires only observation and structured note-taking. But the comparison design requires at least 2 snapshots separated by a governance-arrangement change, which depends on BKC pool activity.

## 8. Recommendation

**Move next to implementation-scoping.**

Why: The instrumentation designs in this memo are concrete enough to scope implementation work — defining the exact fields, templates, and adoption steps for the minimum evidence stack. The deferred-family triage reassessment and corpus comparative note design are both valuable, but neither is blocked by the current state. Implementation scoping is the most time-sensitive next step because: (a) BKC pools are operationally active now, and every commitment that enters a pool without type/consequence annotation is a missed evidence opportunity; (b) the Johar corpus governance trail is recent enough that revision-depth annotations can still be applied while the reasoning is fresh; (c) the coordination quality vocabulary must be developed through practice, and practice starts with the first annotated commitment and the first coordination snapshot. Delaying implementation-scoping in favor of triage or comparative work would mean the evidence stack starts later and the observation windows shift further out.

The deferred-family triage and corpus comparative note design should follow promptly — they are not deprioritized, only sequenced after the implementation scope is defined.

## 9. Recommended Next 3 Runs

### Run 1: Instrumentation Implementation Scoping

**Short name:** implementation-scoping

**Objective:** Define the exact fields, templates, file conventions, and adoption steps for the 4 components of the minimum evidence stack (commitment metadata extension, renegotiation/revision event convention, coordination outcome snapshot template, consequence-bearing decision trace). Produce implementation-ready specifications that a practitioner could follow without further design work.

**Expected artifact:** `docs/research/planning/instrumentation-implementation-scope-batch-1.md`

**Why it comes first:** Converts this memo's designs into actionable specifications. Every day the evidence stack is not adopted, commitment events and revision events pass unrecorded. The sooner the specifications exist, the sooner operational practice can begin generating evidence.

### Run 2: Deferred-Family Triage Reassessment

**Short name:** deferred-family-triage

**Objective:** Reassess the 8 deferred families in light of the 5 promoted entries, the diagnostic slice, and the instrumentation design. Determine which deferred families are subsumed by promoted entries, which gain clearer boundaries, which become relevant as production evidence accumulates, and which remain dormant. Particularly assess: governance-under-volatility (overlap with holding-complexity diagnostic), boundary-making (evidence sufficiency), spatial-service (subsumed by relational-topology?).

**Expected artifact:** `docs/research/planning/deferred-family-triage-checkpoint-2.md`

**Why it comes second:** Requires knowing the full promoted-canon state (settled) and the evidence strategy (defined by this memo and Run 1). Some deferred families may become relevant if production evidence strengthens certain canon entries. The triage is not blocked — it can proceed once the evidence stack is specified, even before evidence is gathered.

### Run 3: Corpus Comparative Note Design

**Short name:** corpus-comparative-design

**Objective:** Design the structure for a corpus-level note assessing how the 5 promoted entries relate as a system — where they reinforce, where they create tension, and what structural gaps remain between them. Include how the evidence targets connect across entries (shared schema opportunities from Section 5 are the skeleton of the system view).

**Expected artifact:** `docs/research/planning/corpus-comparative-note-design.md`

**Why it comes third:** With instrumentation scoped (Run 1) and deferred families triaged (Run 2), the canon's coverage is stable and the evidence strategy is defined. The comparative note design can then assess the promoted canon as an integrated body with awareness of both what has been validated and what evidence is being sought. The shared schema opportunities in this memo (Section 5) provide the first structural links between entries; the comparative note design would develop these into a systematic account.

## 10. Guardrails

- **Evidence design is not evidence yet.** This memo specifies what would need to be observed. It does not claim that any observation has been made. The fields, events, and measures defined here are instrumentation — they create the conditions for evidence, not the evidence itself.

- **Absence of current instrumentation is not disconfirmation.** The promoted canon entries describe structural mechanisms that may function exactly as described. The fact that evidence has not been gathered does not mean the mechanisms have failed. It means the observation layer does not yet exist.

- **Design hypotheses should not be promoted by metrics theater.** If the instrumentation defined here is adopted, it will produce data. Data is not validation. The temptation to treat any quantitative output as confirmation — especially if it is the first measurement of a previously unmeasured phenomenon — must be resisted. Evidence is persuasive when it distinguishes between the claim being tested and plausible alternatives, not when it merely produces numbers.

- **Minimum viable observability is better than ambitious but unused instrumentation.** An evidence stack that practitioners actually use — even if it captures only 3 fields per commitment — is vastly more valuable than an elaborate schema that sits unadopted. The designs in this memo are deliberately minimal. If the minimum is too heavy for current practice, it should be trimmed further rather than abandoned.

- **The goal is to create real learning loops, not dashboards for their own sake.** The coordination ecology's learning loop (evidence → learning → revised vision) is the structural purpose of this evidence stack. If the evidence gathered does not flow back into governance revision, the instrumentation has failed regardless of how much data it produces. The evidence stack exists to make the grammar's own learning loop operational — not to produce reports.
