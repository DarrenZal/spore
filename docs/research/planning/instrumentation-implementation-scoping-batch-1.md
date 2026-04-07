# Instrumentation Implementation Scoping Batch 1

## 1. Scope And Rule

This memo scopes implementation for the minimum viable evidence stack identified in the instrumentation evidence design memo (`instrumentation-evidence-design-batch-1.md`). It defines exact field names, enum values, artifact shapes, workflow touchpoints, and a phased rollout plan for the 4 stack components:

1. Commitment metadata extension
2. Renegotiation / revision event convention
3. Coordination outcome snapshot template
4. Consequence-bearing decision trace

This is not an implementation run. No files are created beyond this memo. No schemas are deployed, no templates are instantiated, no operational processes are changed.

The goal is low-friction operational evidence capture, not exhaustive telemetry. The evidence stack should be small enough that a single practitioner can adopt it without tooling support, and precise enough that later implementation requires no further design decisions.

Canon-safe claims remain the upper bound of what is currently confirmed. Evidence fields are deliberately neutral — they create the conditions for observation, not the interpretation. The 4-type commitment taxonomy (delivery / discovery / stewardship / risk) appears as one possible value set, not as the only permitted vocabulary. Standing conditions appear as observable annotations, not as confirmed grammar primitives.

## 2. Current Repo Fit

| Surface | What Exists | Can It Carry Evidence Now? | What Is Missing | Natural Next Step |
|---------|------------|--------------------------|----------------|-------------------|
| **Commitment pooling pattern** (`docs/patterns/commitment-pooling.md`) | Lifecycle state machine (PROPOSED → REDEEMED), pool federation, settlement modes, BKC adopter reference (23+ commitments, 2 pools) | Partially — the pattern defines lifecycle states but no individual commitment records exist in this repo. Actual commitment data lives in BKC's own systems. | No commitment-type metadata, no consequence annotations, no individual commitment records in this repo | Define a commitment evidence record specification that can live in this repo as lightweight annotation files referencing BKC pool commitments |
| **Synthesis note template** (`docs/research/synthesis/.template.md`) | Rich frontmatter (doc_id, doc_kind, research_subkind, status, depends_on, disposition, promotion_status, concepts, governance_clusters), standard sections including Production Evidence | Yes — the Production Evidence section is already a designed home for evidence observations. Frontmatter is extensible. | No fields for revision_type, revision_trigger, or closure_signal_detected | Add revision-depth fields to governance artifacts that already carry frontmatter |
| **Planning trail** (`docs/research/planning/`) | 25+ structured planning/review/outcome/enactment memos, named by workflow phase, functioning as append-only work log | Yes — already functions as the primary decision log for the Johar corpus program. Memos include structured tables, dispositions, and explicit next-step tracking. | No revision-depth annotation on these memos. No consequence-bearer tracking. No coordination quality observations. | Use this directory as natural home for evidence artifacts (revision event logs, coordination snapshots, decision traces) |
| **Governance memory / spec-DAG** (`docs/patterns/governance-memory.md`) | Frontmatter DAG with doc_id, doc_kind, status, depends_on. Validated acyclicity. Tiered adoption (0–2). | Partially — tracks document lifecycle but not decision lifecycle. Knows what depends on what, not who bore consequences for what. | No decision-level metadata. No revision-depth field. No contestability log. | Extend frontmatter convention with optional evidence fields on governance artifacts |
| **Claims-evidence-attestation protocol** (`docs/protocols/claims-evidence-attestation.md`) | Claim lifecycle (proposed → supported → challenged → superseded → reinstated), evidence types, attestation strength/decay, membrane operations | Designed but not exercised — no claim has been tracked through this lifecycle in a running system. The Johar corpus program used promotion_status but not the full claim lifecycle. | No operational claim records. No transition logs. No attestation-decay events. | Use the claim lifecycle as the reference model for revision event typing, without requiring full operational instantiation |
| **Project metadata** (`docs/_meta/project.json`) | Project registration (id, name, uri, docs_root, repos, tier) | Not directly — this is project-level, not evidence-level metadata | No evidence-collection metadata | Leave as-is; evidence artifacts use their own frontmatter |
| **BKC references** (scattered across pattern docs, decision memo, evidence mapping) | BKC described as operational instance with 2 pools, 23+ commitments, steward reviews. No BKC-specific directory or data in this repo. | No — BKC data is external. This repo contains pattern descriptions and references, not operational data. | No mechanism to import or mirror BKC operational data | Design commitment evidence records as Spore-side annotations that reference BKC commitments by identifier without duplicating BKC's own records |

## 3. Evidence Stack Scoping Table

| Component | Implementation Shape | Natural Home | Required Changes | Can Start With Process Discipline? | Main Risk |
|-----------|---------------------|-------------|-----------------|-----------------------------------|-----------|
| **1. Commitment metadata extension** | frontmatter / metadata extension | `docs/research/evidence/commitments/` (new directory) | Define commitment evidence record schema; create one file per annotated commitment; no changes to existing files | Yes — first annotated commitment can be written as a markdown file with YAML frontmatter using the schema below | BKC commitment identifiers may not be stable or accessible; annotation overhead if fields are too numerous |
| **2. Renegotiation / revision event convention** | mixed (discipline + metadata) | Inline `## Revision Log` section in existing governance artifacts, OR standalone entries in `docs/research/evidence/revisions/` | Define revision_type enum; adopt annotation discipline on new governance artifacts; optionally create standalone revision event files for events that don't belong to a specific artifact | Yes — next governance decision or claim transition gets annotated with revision_type and trigger | Discipline fades over time; retrospective annotation is unreliable; burden of maintaining a separate log may exceed benefit |
| **3. Coordination outcome snapshot** | new structured artifact | `docs/research/evidence/snapshots/` (new directory) | Define snapshot template with frontmatter; take first snapshot of a BKC pool; establish periodic or event-triggered cadence | Partially — template can be designed now; first snapshot requires deliberate observation of a BKC pool | "Coordination quality" dimensions are hard to score consistently; snapshot burden may be too high for quarterly cadence |
| **4. Consequence-bearing decision trace** | frontmatter / metadata extension | Inline `## Consequence Trace` section in existing decision memos and review outcome docs | Define consequence-trace fields; adopt annotation discipline on new governance decisions; no changes to existing decision memos | Yes — next governance decision gets a consequence trace section | Consequence-bearing is often diffuse and hard to attribute; binary "had voice / did not" oversimplifies |

## 4. Exact Schema Proposals

### 4.1 Commitment Metadata Extension

#### A. Purpose

Create lightweight evidence records that annotate BKC pool commitments with epistemic-mode, consequence, and standing metadata. Each record is a standalone markdown file in the Spore repo referencing a specific BKC commitment, carrying the evidence fields that BKC's own records do not currently include. These are observation records, not replacements for BKC's operational data.

#### B. Exact Fields / Enum Values

- `evidence_type: commitment_annotation` — fixed value identifying this artifact type
- `commitment_ref` — string identifier linking to the BKC pool commitment (e.g., `bkc.victoria.C-047`). Format: `<pool_namespace>.<pool_slug>.C-<number>`. If BKC identifiers are not yet stable, use a descriptive slug (e.g., `bkc.victoria.seed-library-delivery-2026q2`)
- `pool_ref` — pool identifier (e.g., `bkc.victoria`, `bkc.cascadia`)
- `epistemic_mode` — one of: `delivery`, `discovery`, `stewardship`, `risk`, `mixed`, `unclassified`. "Unclassified" is a legitimate value — it does not mean the annotator failed, it means the commitment does not fit cleanly. "Mixed" means the commitment spans multiple modes. This field is deliberately not named `commitment_type` to avoid implying that the 4-type taxonomy is the only valid decomposition.
- `mode_rationale` — one sentence (max ~80 words) explaining why this mode was assigned. Required when epistemic_mode is not `unclassified`.
- `consequence_bearers` — YAML list of agents or groups who bear material consequences if this commitment succeeds, fails, or changes scope. Use names or role descriptors, not formal identifiers.
- `standing_context` — free-text note (1–3 sentences) describing whether the committing agent had security, capability, and membership conditions sufficient for effective participation. Not a boolean — conditions are often partial.
- `state` — one of: `proposed`, `verified`, `active`, `evidence_linked`, `redeemed`, `disputed`, `resolved`. Mirrors the commitment-pooling lifecycle. Updated when the BKC commitment transitions.
- `revision_count` — integer count of renegotiation or scope-change events. Starts at 0. Incremented when a revision event is logged (see Component 2).
- `coordination_context` — free-text note (1–3 sentences) describing the governance arrangement under which this commitment operates. Connects to Target 3.
- `outcome_note` — free-text annotation at `evidence_linked` or `redeemed` stage: what happened, whether governance treatment matched epistemic character. Left blank until lifecycle completion.
- `snapshot_date` — ISO date of last annotation update

#### C. Artifact Shape

Standalone structured note in `docs/research/evidence/commitments/`. One file per annotated commitment. Filename convention: `<pool_slug>-<commitment_slug>.md` (e.g., `victoria-seed-library-delivery.md`). File uses YAML frontmatter for all structured fields, with an optional body section for free-text observations.

This is a new directory. It does not exist yet.

#### D. Capture Moment

- **Initial creation:** when a commitment is first annotated (can happen at any lifecycle stage — does not require catching commitments at PROPOSED)
- **State update:** when the BKC commitment transitions to a new lifecycle state
- **Outcome note:** when the commitment reaches EVIDENCE_LINKED or REDEEMED
- **Revision count increment:** when a renegotiation event is logged against this commitment

The annotator does not need to monitor BKC in real time. A periodic review cadence (e.g., monthly) is sufficient to capture state transitions.

#### E. Minimal Example

```yaml
---
evidence_type: commitment_annotation
commitment_ref: bkc.victoria.seed-library-delivery-2026q2
pool_ref: bkc.victoria
epistemic_mode: delivery
mode_rationale: >
  Scope and deliverable are well-specified in advance (seed library
  assembled and transferred to Saanich group). Low uncertainty about
  what constitutes fulfillment.
consequence_bearers:
  - Saanich Native Plants group (receives or does not receive seeds)
  - Victoria LHC stewards (reputation and pool credibility)
standing_context: >
  Committing agent has membership in Victoria pool, ecological
  knowledge, and access to seed sources. Standing conditions appear met.
state: active
revision_count: 0
coordination_context: >
  Operating under Victoria pool's standard steward-review governance.
  Verification was consent-based among 3 stewards.
outcome_note: ""
snapshot_date: 2026-04-06
---

No additional observations yet. Will annotate at evidence-linked stage.
```

#### F. Adoption Notes

Annotation is performed by whoever is closest to the BKC pool's governance — likely Darren or a BKC steward. Burden is low per commitment (~5 minutes to fill out the frontmatter for a commitment whose context is already known). The critical adoption risk is not effort per record but remembering to create the record. A monthly review cadence ("which commitments transitioned since last check?") is more realistic than real-time annotation. No back-annotation of existing 23+ commitments is required — begin with the next commitment that transitions or enters a pool.

---

### 4.2 Renegotiation / Revision Event Convention

#### A. Purpose

Record revision events on commitments and governance artifacts with enough structure to distinguish genuine reopening of inquiry from administrative updates. This convention serves both Target 1 (commitment renegotiation) and Target 2 (discourse revision depth tracking). It uses a shared `revision_type` enum so evidence about revision depth is commensurable across commitment and governance domains.

#### B. Exact Fields / Enum Values

- `event_id` — unique identifier. Convention: `REV-<YYYY-MM-DD>-<seq>` (e.g., `REV-2026-04-15-01`). Sequential within date.
- `artifact_ref` — doc_id of the governance artifact being revised, OR commitment_ref of the commitment being renegotiated
- `revision_type` — one of:
  - `administrative_update` — formatting, reference fix, metadata correction, typo. No change to substance.
  - `scope_refinement` — narrowing or widening scope without re-examining the underlying claim or commitment. The direction changes but the ground is not questioned.
  - `genuine_reopening` — the settled position, claim, or commitment scope was substantively re-examined in light of new evidence, changed conditions, or detected closure. The ground itself was questioned.
  - `authority_override` — revision imposed without structured discourse. May be legitimate (emergency, clear authority) or a warning signal (bypassing contestability).
- `trigger` — free-text, one sentence. What prompted this revision. Examples: "new evidence from field season," "participant raised concern in steward review," "scheduled quarterly review," "BKC pool capacity changed," "detected term drift in governance memo."
- `prior_summary` — one sentence describing what the artifact or commitment said before the revision
- `outcome_summary` — one sentence describing what changed
- `discourse_trace` — one of: `structured` (went through a recognizable proposal → argument → decision process), `informal` (discussed but not through structured discourse), `unilateral` (no discourse, single actor revised), `not_applicable` (administrative changes don't require discourse)
- `closure_signal` — boolean (`true` / `false`). Was this revision prompted by detection of a settled term, category, or commitment scope losing contact with operational reality? Default: `false`. Only mark `true` when the trigger is explicitly about a term or scope that had become a stopping rule.

#### C. Artifact Shape

Two options, chosen per event:

**Option A — Inline section.** For revisions to governance artifacts that already exist as files (e.g., planning memos, synthesis notes, decision memos): append a `## Revision Log` section at the bottom of the artifact. Each event is a markdown table row or bullet entry in this section. This keeps the revision trace co-located with the artifact.

**Option B — Standalone event file.** For events that cross multiple artifacts, or for commitment renegotiations (which reference BKC commitments, not Spore files): create a standalone file in `docs/research/evidence/revisions/`. Filename convention: `<event_id>.md` (e.g., `REV-2026-04-15-01.md`). File uses YAML frontmatter for all structured fields.

The default is Option A (inline) for governance artifacts and Option B (standalone) for commitment renegotiations. The annotator can choose based on what feels natural — the shared enum ensures commensurability regardless of format.

#### D. Capture Moment

At the time of revision. This is the hardest discipline to maintain: revision events must be annotated while the reasoning is fresh, not reconstructed weeks later. The practical trigger is: "I am about to edit a governance artifact or record a commitment scope change. Before I make the edit, I note what I am changing and why." For inline revision logs, this means adding the entry in the same commit as the revision. For standalone files, this means creating the file at the time of the renegotiation.

#### E. Minimal Example

**Option A — Inline (appended to a governance artifact):**

```markdown
## Revision Log

| event_id | date | revision_type | trigger | outcome_summary | discourse_trace | closure_signal |
|----------|------|--------------|---------|-----------------|-----------------|----------------|
| REV-2026-04-15-01 | 2026-04-15 | scope_refinement | Batch 2 review revealed wording drift risk | Tightened canon entry language to exclude replacement-mechanism claim from confirmed layer | structured | false |
```

**Option B — Standalone (for commitment renegotiation):**

```yaml
---
event_id: REV-2026-05-10-01
artifact_ref: bkc.victoria.watershed-monitoring-2026
revision_type: genuine_reopening
trigger: >
  Field season data showed monitoring scope was misaligned with
  actual species distribution — original commitment assumed herring
  presence in areas where spawning has shifted.
prior_summary: >
  Commitment scope covered 3 monitoring stations in inner harbour.
outcome_summary: >
  Scope expanded to 5 stations including Cowichan Bay based on
  revised spawning data. Timeline extended by 6 weeks.
discourse_trace: structured
closure_signal: true
---

The original scope reflected a category ("inner harbour herring habitat")
that had become a stopping rule — it matched historical patterns but not
current distribution. The revision was triggered by field evidence that
contradicted the settled category.
```

#### F. Adoption Notes

The inline option (Option A) has near-zero adoption cost for governance artifacts — it is a section appended to a file being edited anyway. The standalone option (Option B) adds a small file-creation step for commitment renegotiations. The main risk is not effort but memory: the annotator must remember to classify the revision type and trigger at the time of revision, not weeks later. A lightweight checklist ("before committing a governance edit: what type of revision is this?") is the most realistic adoption mechanism. No retroactive annotation of past revision events is required — begin with the next revision.

---

### 4.3 Coordination Outcome Snapshot Template

#### A. Purpose

Create periodic structured observations of coordination quality in BKC pools, capturing enough context to compare outcomes across governance-arrangement changes and composition changes. Each snapshot is a point-in-time observation, not a judgment. The comparison happens later, across multiple snapshots. The snapshot template must be neutral enough to carry evidence for or against the relational-topology claim without building the conclusion into the measurement.

#### B. Exact Fields / Enum Values

- `evidence_type: coordination_snapshot` — fixed value
- `snapshot_id` — unique identifier. Convention: `SNAP-<pool_slug>-<YYYY-MM-DD>` (e.g., `SNAP-victoria-2026-04-06`)
- `pool_ref` — pool identifier (e.g., `bkc.victoria`)
- `snapshot_date` — ISO date
- `snapshot_period` — what time range this snapshot covers (e.g., "2026-Q1" or "2026-01-15 to 2026-04-06")
- `governance_arrangement` — structured free-text (3–8 sentences) describing: decision process (consent, majority, steward review, etc.), routing rules, participation structures, and any notable protocols in effect during this period
- `composition` — YAML list of active participants (names or role descriptors). Mark new joins and departures since last snapshot with `(joined)` or `(departed)`.
- `context_changes` — YAML list of governance-arrangement changes since last snapshot. Each entry: date, description, who initiated. Empty list if no changes.
- `composition_changes` — YAML list of participant changes since last snapshot. Each entry: date, who, joined/departed/inactive. Empty list if no changes.
- `quality_indicators` — YAML mapping with the following keys (each scored on a 3-point scale: `low`, `moderate`, `high`, or left as `not_observed`):
  - `decision_throughput` — how many governance decisions were made in the period relative to need
  - `fulfillment_rate` — proportion of active commitments progressing through lifecycle on expected timeline
  - `voice_distribution` — how evenly participation and influence were distributed across active members
  - `renegotiation_health` — whether scope changes were governed and productive vs chaotic or avoided
  - `satisfaction` — self-reported or observed participant satisfaction with coordination (if available; `not_observed` is legitimate)
- `notable_events` — free-text (3–8 sentences) describing significant coordination events, disputes, successes, or federation interactions during the period
- `observer_note` — free-text (1–3 sentences) for the observer's overall impression. Not a quality score — a contextual note.

#### C. Artifact Shape

Standalone structured note in `docs/research/evidence/snapshots/`. One file per snapshot. Filename convention: `<snapshot_id>.md` (e.g., `SNAP-victoria-2026-04-06.md`). File uses YAML frontmatter for all structured fields. Body section for notable_events and observer_note (free text).

This is a new directory. It does not exist yet.

#### D. Capture Moment

Two triggers:

1. **Periodic:** quarterly (at minimum). Quarterly cadence aligns with BKC's operational rhythm and is light enough to sustain.
2. **Event-triggered:** when a significant governance-arrangement change occurs in a pool (new decision process adopted, new routing rule, structural participation change). Take a snapshot before and after if possible.

The snapshot does not need to be taken on the exact trigger date — a 1–2 week window is acceptable. The key is that context_changes and composition_changes are recorded while memory is fresh.

#### E. Minimal Example

```yaml
---
evidence_type: coordination_snapshot
snapshot_id: SNAP-victoria-2026-04-06
pool_ref: bkc.victoria
snapshot_date: 2026-04-06
snapshot_period: "2026-01-01 to 2026-04-06"
governance_arrangement: >
  Consent-based decision process among 4 stewards. New commitments
  require steward review before VERIFIED. Routing to Cascadia pool
  available but not exercised this period. Mapping workshop outputs
  feed commitment proposals.
composition:
  - Darren (steward)
  - Sarah (steward)
  - Marcus (steward)
  - Li (steward)
  - 8 commitment contributors (non-steward)
context_changes: []
composition_changes:
  - date: 2026-02-15
    who: Li
    change: joined as steward
quality_indicators:
  decision_throughput: moderate
  fulfillment_rate: moderate
  voice_distribution: moderate
  renegotiation_health: not_observed
  satisfaction: not_observed
notable_events: ""
observer_note: ""
---

First snapshot for this pool. No prior baseline for comparison.
Quality indicators are rough initial assessments. Renegotiation
health and satisfaction not yet observed through structured means.
```

#### F. Adoption Notes

The snapshot is a ~15-minute exercise taken quarterly or at governance-change events. The annotator needs familiarity with the pool's recent activity. The 3-point quality scale (low / moderate / high) is deliberately coarse — finer scales would require measurement precision that does not yet exist. `not_observed` is always acceptable. The first snapshot for any pool will have no comparison baseline — it establishes the baseline for future comparison. The hardest part is not the snapshot itself but remembering to take one before and after a governance-arrangement change, when the change is the thing occupying attention.

---

### 4.4 Consequence-Bearing Decision Trace

#### A. Purpose

Annotate governance decisions with structured metadata about who bore consequences, whether consequence-bearers had voice, and what review or reversal path existed. This connects the legitimacy-and-shared-consequence canon entry to actual governance traces. The trace does not evaluate whether the decision was good — it records the structural relationship between authority and consequence for that decision.

#### B. Exact Fields / Enum Values

- `decision_ref` — identifier for the decision. Convention: the `doc_id` of the memo or artifact containing the decision, plus a section anchor if the document contains multiple decisions (e.g., `spore.planning.promotion-review-outcome-batch-1#legitimacy`)
- `decision_locus` — where the decision was made. One of: `spore_research` (Johar corpus governance), `bkc_pool` (BKC pool governance), `bkc_federation` (cross-pool), `spore_canon` (canon-level change), `other` (with explanation)
- `decision_date` — ISO date
- `decision_summary` — one sentence describing what was decided
- `authority_holders` — YAML list of who made or approved the decision (names or roles)
- `consequence_bearers` — YAML list of who bears material consequences from this decision (may overlap with authority_holders, may not)
- `bearer_voice` — one of:
  - `direct` — consequence-bearers were among the decision-makers
  - `consulted` — consequence-bearers were consulted but did not make the decision
  - `represented` — consequence-bearers were represented by a proxy or delegate
  - `absent` — consequence-bearers had no voice in the decision
  - `not_applicable` — decision has no identifiable consequence-bearers beyond the decision-makers themselves
- `reversibility` — one of: `reversible` (can be undone at low cost), `costly_to_reverse` (can be undone but with significant effort), `irreversible` (cannot be undone), `contestable` (can be challenged through governance mechanisms)
- `review_path` — free-text, one sentence. What mechanism exists for reviewing or contesting this decision? (e.g., "contestability via claim challenge," "batch review at next triage checkpoint," "no formal review path")
- `observed_downstream` — free-text, one sentence. If any downstream effect has been observed, note it here. Left blank until an effect is observed. Not required.

#### C. Artifact Shape

Two options:

**Option A — Inline section.** For decisions that are already documented in governance memos (decision memos, review outcome memos, enactment memos): append a `## Consequence Trace` section to the memo. Each traced decision is a YAML block or structured bullet list in this section.

**Option B — Standalone file.** For decisions that are not captured in existing memos, or for BKC pool decisions: create a standalone file in `docs/research/evidence/decisions/`. Filename convention: `DEC-<YYYY-MM-DD>-<slug>.md` (e.g., `DEC-2026-04-06-batch1-legitimacy-promotion.md`).

The default is Option A for Spore research governance decisions (which already have memos) and Option B for BKC pool decisions (which do not have memos in this repo).

#### D. Capture Moment

At the time of the decision, or immediately after. Like revision events, the trace must be recorded while the context is fresh. The practical trigger: "I have just made or documented a governance decision. Before I move on, I note who bore consequences and whether they had voice." For inline traces, this means adding the section in the same commit as the decision memo. For standalone files, this means creating the file within a few days of the decision.

#### E. Minimal Example

**Option A — Inline (appended to a decision memo):**

```markdown
## Consequence Trace

### Legitimacy-and-shared-consequence promotion

- **decision_ref:** spore.planning.promotion-review-outcome-batch-1#legitimacy
- **decision_locus:** spore_research
- **decision_date:** 2026-04-06
- **decision_summary:** Approved legitimacy-and-shared-consequence for canon promotion with explicit qualification
- **authority_holders:**
  - Darren (human reviewer)
- **consequence_bearers:**
  - Spore canon integrity (future users of the grammar inherit this framing)
  - BKC stewards (operational decisions may be influenced by promoted canon)
- **bearer_voice:** direct (for Darren as reviewer); absent (for BKC stewards and future grammar users)
- **reversibility:** contestable
- **review_path:** Canon entry can be challenged via claim lifecycle; promotion_status can be revised through governance review
- **observed_downstream:** Canon entry enacted in project-vision.md; no operational downstream effects observed yet
```

**Option B — Standalone (for a BKC pool decision):**

```yaml
---
evidence_type: decision_trace
decision_ref: bkc.victoria.steward-review-2026q1-routing
decision_locus: bkc_pool
decision_date: 2026-03-20
decision_summary: >
  Victoria pool stewards decided not to route overflow commitments
  to Cascadia pool for Q1, retaining all commitments locally.
authority_holders:
  - Victoria pool stewards (3)
consequence_bearers:
  - Cascadia pool (missed potential contribution)
  - Victoria commitment contributors (higher local load)
bearer_voice: absent
reversibility: reversible
review_path: >
  Can be revisited at next quarterly steward review. No formal
  contestability mechanism invoked.
observed_downstream: ""
---

First consequence trace for a BKC pool decision. No prior
baseline for comparison.
```

#### F. Adoption Notes

For Spore research decisions, this is a section added to memos that are already being written — marginal effort. For BKC pool decisions, this requires creating a standalone file, which adds ~10 minutes per decision. The main adoption risk is that BKC pool decisions may not be formally documented anywhere, making the trace the first structured record of the decision rather than an annotation on an existing record. This is valuable but requires the annotator to be present at or aware of the decision. A realistic starting point: trace the next 2–3 Spore research governance decisions (which are well-documented) and the next BKC pool decision that the annotator is aware of.

## 5. Shared Enums And Reusable Fields

| Name | Used By | Why Shared | Risk If Misused |
|------|---------|-----------|-----------------|
| **`revision_type`** enum (`administrative_update`, `scope_refinement`, `genuine_reopening`, `authority_override`) | Component 2 (revision events on governance artifacts), Component 1 (renegotiation events on commitments — via revision_count increment and linked revision event) | Renegotiation of a commitment and revision of a governance claim are structurally the same operation: reopening a settled state. Shared vocabulary makes revision-depth evidence commensurable across domains. | If "genuine_reopening" is applied too loosely (any substantive edit counts), it loses discriminating power. The trigger and discourse_trace fields provide the check: genuine reopening should have a non-trivial trigger and usually structured discourse. |
| **`consequence_bearers`** field (YAML list of agents/groups) | Component 1 (who bears consequences for commitment outcomes), Component 4 (who bears consequences for governance decisions), Component 3 (implicit — composition and quality indicators reveal whose coordination is affected) | Consequence-bearing is the structural link between human-economy (standing/participation) and legitimacy (authority-consequence coupling). One field convention avoids parallel tracking. | If bearers are listed only at the decision-maker level (e.g., "the stewards"), it misses the structural point — the value is in identifying bearers who are NOT decision-makers. |
| **`state`** enum for commitments (`proposed`, `verified`, `active`, `evidence_linked`, `redeemed`, `disputed`, `resolved`) | Component 1 (commitment lifecycle tracking) | Mirrors the commitment-pooling pattern's lifecycle. No reason to invent a parallel vocabulary. | If state values diverge from BKC's actual lifecycle tracking, the annotation becomes misleading. Keep aligned with the commitment-pooling pattern document. |
| **`epistemic_mode`** enum (`delivery`, `discovery`, `stewardship`, `risk`, `mixed`, `unclassified`) | Component 1 (commitment annotation). Potentially usable by Component 3 (characterizing the epistemic mix of a pool's active commitments in snapshots) | Neutral name avoids implying the 4-type taxonomy is confirmed. "Mode" signals observable character, not theoretical category. "Mixed" and "unclassified" prevent forced classification. | If "unclassified" is used as a dump bucket to avoid thinking about epistemic character, the field loses value. The mode_rationale field provides the check. If most commitments are "unclassified," that is itself evidence (the taxonomy may not be useful in practice). |
| **`standing_context`** field (free-text) | Component 1 (commitment annotation), Component 4 (implicit — consequence-bearers' capacity to have voice depends on standing conditions) | Standing is referenced by 2 canon entries (human-economy, legitimacy) as a structural precondition for effective participation. Free-text avoids premature formalization of what "standing" means operationally. | If standing_context becomes a checkbox ("yes, standing met") it loses the nuance of partial standing. Keep as free-text until operational patterns emerge from multiple annotations. |
| **`discourse_trace`** enum (`structured`, `informal`, `unilateral`, `not_applicable`) | Component 2 (revision events), Component 4 (implicit — whether the decision process was structured affects legitimacy assessment) | Whether a revision or decision went through structured discourse is evidence for the discourse-as-governance pattern's effectiveness. Shared vocabulary across components. | "Structured" should not be claimed unless a recognizable proposal → argument → decision process occurred. If most entries are "informal," that is itself evidence. |
| **`bearer_voice`** enum (`direct`, `consulted`, `represented`, `absent`, `not_applicable`) | Component 4 (decision trace). Potentially referenced by Component 1 (whether consequence-bearers had voice in commitment governance decisions) | Authority-consequence coupling (legitimacy canon entry) is specifically about whether those who bear consequences have voice. This enum operationalizes that question without presupposing the answer. | If "consulted" is used to paper over tokenistic inclusion (asked but ignored), it inflates the appearance of voice. The review_path field provides context. |

## 6. Minimal Rollout Plan

### Phase 1: Commitment Evidence Records + Inline Revision Log (Weeks 1–4)

**What gets introduced:**
- Create `docs/research/evidence/commitments/` directory
- Write the first 2–3 commitment evidence records for BKC pool commitments that are currently active or recently transitioned, using the schema from Section 4.1
- Adopt the inline `## Revision Log` convention (Section 4.2, Option A) on the next governance artifact that gets revised in the Spore research workflow

**Implementation shape:** Frontmatter/metadata extension (commitment records) + discipline (revision log)

**What evidence it begins to make visible:**
- Whether epistemic_mode is a useful annotation (do commitments naturally cluster into modes, or are most "unclassified"?)
- Whether consequence-bearers are identifiable in practice (clear for most commitments, or diffuse and hard to specify?)
- Whether revision-depth annotation is sustainable as a workflow habit

**Why it belongs first:** Lowest friction. Creates the shared schema foundation (epistemic_mode, consequence_bearers, revision_type). Starts the observation window for Target 1. Validates adoption feasibility before investing in the more demanding components.

### Phase 2: Consequence Traces + Standalone Revision Events (Weeks 4–8)

**What gets introduced:**
- Adopt `## Consequence Trace` sections (Section 4.4, Option A) on the next 2–3 Spore research governance decisions
- Create `docs/research/evidence/revisions/` directory for standalone commitment-renegotiation events (Section 4.2, Option B)
- Create `docs/research/evidence/decisions/` directory for standalone BKC pool decision traces (Section 4.4, Option B)
- If a commitment renegotiation occurs, write the first standalone revision event file

**Implementation shape:** Metadata extension (inline traces) + new structured artifact (standalone files)

**What evidence it begins to make visible:**
- Whether authority and consequence are coupled in Spore's own research governance (legitimacy canon entry)
- Whether consequence-bearers who lack voice can be identified in practice
- Whether renegotiation events are observable and classifiable

**Why it belongs second:** Builds on Phase 1's shared enums (revision_type, consequence_bearers). Requires governance decisions to occur (which they will — the deferred-family triage and corpus comparative note design runs will generate decisions). Validates the consequence-trace format before applying it to BKC pool decisions.

### Phase 3: Coordination Outcome Snapshots (Weeks 8–16)

**What gets introduced:**
- Create `docs/research/evidence/snapshots/` directory
- Take the first coordination outcome snapshot for the Victoria BKC pool using the template from Section 4.3
- If a governance-arrangement change occurs in a BKC pool, take a before/after snapshot pair

**Implementation shape:** New structured artifact

**What evidence it begins to make visible:**
- A baseline for coordination quality indicators in at least one pool
- Whether the 3-point quality scale is useful or needs refinement
- Whether governance-arrangement and composition changes can be tracked at quarterly cadence

**Why it belongs third:** Highest friction. Requires the most judgment (scoring coordination quality). Benefits from vocabulary and habits built in Phases 1 and 2. The first snapshot is a baseline, not a comparison — comparison requires at least 2 snapshots separated by a context or composition change. Starting at week 8 puts the second snapshot at ~week 20 (quarterly), within the minimum observation window.

### Rollout Summary

| Phase | Timeline | Components Activated | Shape | Evidence Starts |
|-------|----------|---------------------|-------|-----------------|
| 1 | Weeks 1–4 | Commitment metadata, inline revision log | metadata + discipline | Target 1 (commitment lifecycle), Target 2 (revision depth) |
| 2 | Weeks 4–8 | Consequence traces, standalone revision/decision files | metadata + new artifact | Target 1 (consequence), Target 2 (discourse depth), legitimacy canon |
| 3 | Weeks 8–16 | Coordination outcome snapshots | new artifact | Target 3 (context vs composition comparison baseline) |

## 7. Open Implementation Questions

1. **Where should the canonical home for commitment metadata live — Spore repo or BKC repo?** This scoping assumes Spore-side annotation files referencing BKC commitments. But if BKC develops its own governance memory with frontmatter, the metadata could live closer to the operational data. Decision: start in Spore (the annotation is Spore's evidence concern), revisit if BKC formalizes its own records.

2. **Should revision events live inline or in a separate log?** This scoping proposes both (Option A inline for governance artifacts, Option B standalone for commitment renegotiations). This is pragmatic but creates two places to look. If the evidence volume grows, consolidation into a single log may be needed. Decision: start with the dual approach, revisit after 10+ events.

3. **How narrow should coordination-quality indicators be?** The 5 proposed indicators (decision_throughput, fulfillment_rate, voice_distribution, renegotiation_health, satisfaction) are deliberately coarse. Finer dimensions may be needed if early snapshots show that the 3-point scale does not discriminate. Decision: start coarse, refine after 2–3 snapshots if needed.

4. **How to avoid annotation burden overwhelming adoption?** The full stack across all 4 components is ~6 fields for a commitment record, ~7 fields for a revision event, ~12 fields for a coordination snapshot, and ~10 fields for a decision trace. This is manageable for occasional events but could become burdensome during high-activity periods. Decision: always permit partial annotation. A commitment record with only epistemic_mode and state is better than no record. A decision trace with only bearer_voice is better than no trace.

5. **How to handle BKC commitment identifiers?** BKC may not have stable, referenceable identifiers for individual commitments. If not, the Spore-side annotation must use descriptive slugs (e.g., `bkc.victoria.seed-library-delivery-2026q2`). Decision: use descriptive slugs unless BKC provides formal IDs. Note the identifier in the commitment_ref field and accept that linkage is manual.

6. **Should the evidence directory structure mirror the target structure or the component structure?** This scoping proposes `evidence/commitments/`, `evidence/revisions/`, `evidence/snapshots/`, `evidence/decisions/` — organized by component. An alternative is organizing by target or by pool. Decision: organize by component (simpler, avoids duplication, matches the 4-component stack).

## 8. Recommendation

**Move next to direct implementation pass.**

Why: The scoping in this memo is specific enough for direct implementation. Field names, enum values, artifact shapes, directory locations, and adoption steps are all defined. A separate template-design pass would add a layer of abstraction between the schema and the first real evidence record — an indirection that delays evidence capture without improving the design. The fastest way to learn whether this schema works is to create the first 2–3 commitment evidence records and the first inline revision log entry using the specifications above.

The deferred-family triage reassessment is the second priority — it should follow promptly but is not blocked by the implementation pass. The corpus comparative note design is third.

The direct implementation pass should create: (a) the `docs/research/evidence/` directory structure, (b) the first 2–3 commitment evidence records for active BKC commitments, (c) the first inline revision log entry on the next governance artifact revision, and (d) a brief implementation log noting any schema adjustments discovered during first use. This is Phase 1 of the rollout plan.

## 9. Recommended Next 3 Runs

### Run 1: Direct Implementation Pass (Phase 1)

**Short name:** evidence-stack-phase-1

**Objective:** Create the `docs/research/evidence/` directory structure, write the first 2–3 commitment evidence records for BKC pool commitments, and adopt the inline revision log convention on the next governance artifact revision. Test the schema against real data and note any adjustments needed.

**Expected artifact:** `docs/research/evidence/commitments/` directory with 2–3 files; inline `## Revision Log` section on at least one governance artifact; brief implementation note if schema adjustments are needed.

**Why it comes first:** The schema is scoped. The fastest way to validate it is to use it. Every week without commitment records is a missed evidence opportunity. BKC pools are active now.

### Run 2: Deferred-Family Triage Reassessment

**Short name:** deferred-family-triage

**Objective:** Reassess the 8 deferred families against the 5 promoted entries, the evidence stack design, and any early evidence from Phase 1. Determine which deferred families are subsumed, which gain clearer boundaries, and which remain dormant. Particularly assess: governance-under-volatility (overlap with holding-complexity), boundary-making (evidence sufficiency), spatial-service (subsumed by relational-topology?).

**Expected artifact:** `docs/research/planning/deferred-family-triage-checkpoint-2.md`

**Why it comes second:** The promoted canon is stable. The evidence stack is being deployed. Triage can now assess deferred families with awareness of both what has been confirmed and what evidence is being gathered. Some deferred families may become relevant as evidence accumulates.

### Run 3: Corpus Comparative Note Design

**Short name:** corpus-comparative-design

**Objective:** Design the structure for a corpus-level note assessing how the 5 promoted entries relate as a system. Use the shared schema from this memo (consequence_bearers, revision_type, epistemic_mode) as the skeleton of the inter-entry relationship map.

**Expected artifact:** `docs/research/planning/corpus-comparative-note-design.md`

**Why it comes third:** With evidence flowing (Run 1) and deferred families triaged (Run 2), the comparative note can assess the promoted canon as an integrated body with grounded awareness of both operational evidence and corpus boundaries.

## 10. Guardrails

- **Evidence schema is not evidence.** This memo defines fields and artifact shapes. Until those fields are filled with observations from real coordination, they are empty containers. Creating the schema does not move the evidence dial.

- **Neutral fields are preferable to theory-loaded fields at first.** `epistemic_mode` is better than `johar_commitment_type`. `standing_context` as free-text is better than `standing_met: boolean`. Premature formalization locks in interpretations before the evidence can speak. Fields should become more structured only after patterns emerge from use.

- **Annotation burden is a real design constraint.** If the evidence stack is too heavy to use, it will not be used. A commitment record with 3 filled fields is infinitely more valuable than a perfectly complete record that was never created. Partial annotation is always acceptable. If Phase 1 shows that the schema is too burdensome, trim it rather than abandoning it.

- **Production evidence should emerge from use, not reporting theater.** The coordination outcome snapshot is the highest-risk component for this: it would be easy to fill out quality indicators to satisfy a process requirement without those indicators reflecting actual observation. The 3-point scale and `not_observed` option are designed to resist this, but the real guard is cultural — the annotator must feel that honest uncertainty is more valuable than confident-looking numbers.

- **The first stack should be good enough to learn from, not perfect.** Schema adjustments after first use are expected, not failures. The purpose of Phase 1 is as much to test the schema as to generate evidence. If epistemic_mode turns out to be unusable, that is a valuable finding. If consequence_bearers is always diffuse and unidentifiable, that is evidence too. The schema serves the learning loop — not the other way around.
