# Evidence Stack Phase 1 Implementation

## 1. Scope And Rule

This run implements Phase 1 of the evidence stack as specified in the instrumentation implementation scoping memo (`instrumentation-implementation-scoping-batch-1.md`, Section 6, Phase 1).

This is a minimal evidence-surface implementation, not full instrumentation rollout. It creates the directory structure, schema instantiation, and first seed artifacts needed to start collecting real evidence. It does not implement Targets 3 or 4 (coordination outcome snapshots, consequence-bearing decision traces), which are deferred to later phases.

The repo currently lacks detailed operational commitment records. BKC pool data — individual commitments, their identifiers, their lifecycle transitions, their participants — lives in BKC's own systems. This repo contains pattern descriptions and pool-level references ("23+ commitments, 2 pools, 33,400 VCV") but no per-commitment operational records. Seed/stub honesty is therefore the governing constraint for commitment evidence artifacts: what the repo says is the ceiling for what can be claimed.

Canon-safe claims remain the upper bound of what is currently confirmed. The 5 promoted entries (legitimacy-and-shared-consequence, linguistic-closure, relational-topology-and-context-design, human-economy-and-commitment, holding-complexity-beyond-control diagnostic) were enacted through human review with explicit qualification. This implementation creates observation infrastructure; it does not generate evidence for or against any promoted entry.

## 2. Repo Reality Check

**`docs/research/evidence/` existed before this run:** No. The directory was created in this run.

**Actual per-commitment records exist in the repo:** No. The commitment-pooling pattern doc (`docs/patterns/commitment-pooling.md`) defines the lifecycle state machine and describes BKC as an adopter with "23+ commitments" and "2 pools." The claims-evidence-attestation protocol doc (`docs/protocols/claims-evidence-attestation.md`) uses illustrative examples ("Commitment #47 redeemed: seed library delivered to Saanich group") that reference specific commitments, but these are examples of evidence types, not operational records. No file in this repo tracks an individual commitment through its lifecycle.

**Actual decision-log / revision artifacts exist in the repo:** Partially. The planning trail (`docs/research/planning/`) contains 25+ structured memos that function as a governance decision log for the Johar corpus program — promotion review packets, outcome memos, wording refinement memos, enactment memos. These are rich governance traces but do not carry revision-depth annotations (revision_type, trigger, closure_signal). BKC decision logs are referenced ("decision logs in pilots") but are not present in this repo.

**What this meant for implementation choices:**
- Commitment evidence artifacts are seed/stub records grounded in repo-documented pool-level facts, not direct operational observations.
- The first revision-log example uses a real governance event from the Johar corpus program (the human-economy wording refinement) because this is the strongest source of structured revision events available in the repo.
- Unknown fields remain unknown rather than being inferred from context.

## 3. Files And Directories Created

| Path | Type | Purpose | Why This Shape |
|------|------|---------|---------------|
| `docs/research/evidence/` | directory | Root evidence collection area | Matches scoping memo Section 6 Phase 1 |
| `docs/research/evidence/README.md` | index | Documents directory structure, evidence posture convention, relationship to canon | Provides orientation for future evidence contributors without overbuilding |
| `docs/research/evidence/commitments/` | directory | Home for commitment evidence records | Matches scoping memo Section 4.1 artifact shape |
| `docs/research/evidence/revisions/` | directory | Home for standalone revision event files | Matches scoping memo Section 4.2 Option B |
| `docs/research/evidence/commitments/victoria-pool-aggregate-2026q1.md` | seed record | Pool-level aggregate for Victoria BKC commitments | Repo documents pool facts, not individual commitments; aggregate is the honest unit |
| `docs/research/evidence/commitments/victoria-seed-library-delivery.md` | source-incomplete stub | Individual commitment record from protocol doc example | Tests per-commitment schema shape against the only individually described commitment in the repo |
| `docs/research/evidence/commitments/victoria-mapping-workshop-commitments.md` | seed record | Batch-level record for workshop-sourced commitments | Repo describes the workshop-to-pool pipeline but not individual workshop commitments |
| `docs/research/evidence/revisions/REV-2026-04-06-01.md` | real record | First revision event: human-economy wording refinement | Real governance event with full provenance in the planning trail |
| `docs/research/planning/evidence-stack-phase-1-implementation.md` | memo | This file — records what was done, what remains, what comes next | Required output of this run |

## 4. Schema Choices Adopted

### Commitment Metadata Fields (from scoping memo Section 4.1)

All fields adopted as specified:

| Field | Type | Notes |
|-------|------|-------|
| `evidence_type` | fixed: `commitment_annotation` | Identifies artifact type |
| `evidence_posture` | enum: `real_record`, `seed_record`, `source_incomplete_stub` | **New field not in scoping memo** — added because the scoping memo did not anticipate the need to distinguish seed artifacts from real operational records. Required for this Phase 1 pass where no real operational data exists. |
| `commitment_ref` | string | Descriptive slugs used (`bkc.victoria.pool-aggregate-2026q1`, etc.) because BKC does not expose stable commitment identifiers to this repo |
| `pool_ref` | string | `bkc.victoria` |
| `epistemic_mode` | enum: `delivery`, `discovery`, `stewardship`, `risk`, `mixed`, `unclassified` | `unclassified` used for the pool aggregate; `delivery` for seed-library stub (based on illustrative example); `mixed` for mapping-workshop batch |
| `mode_rationale` | free text | Required when mode is not `unclassified` |
| `consequence_bearers` | YAML list | Populated where inferable from context; noted as unknown where not |
| `standing_context` | free text | Consistently noted as unknown or unverified in all seed artifacts |
| `state` | enum: `proposed`, `verified`, `active`, `evidence_linked`, `redeemed`, `disputed`, `resolved` | Mirrors commitment-pooling lifecycle |
| `revision_count` | integer | 0 in all seed artifacts |
| `coordination_context` | free text | Pool-level governance description where available |
| `outcome_note` | free text | Populated only for seed-library stub (based on example text) |
| `snapshot_date` | ISO date | Date of annotation creation |

### Revision Event Fields (from scoping memo Section 4.2)

All fields adopted as specified:

| Field | Type | Notes |
|-------|------|-------|
| `event_id` | string: `REV-YYYY-MM-DD-seq` | `REV-2026-04-06-01` for first event |
| `artifact_ref` | doc_id | References the promotion review packet |
| `revision_type` | enum: `administrative_update`, `scope_refinement`, `genuine_reopening`, `authority_override` | `scope_refinement` for this event |
| `trigger` | free text | What prompted the revision |
| `prior_summary` | free text | What the artifact said before |
| `outcome_summary` | free text | What changed |
| `discourse_trace` | enum: `structured`, `informal`, `unilateral`, `not_applicable` | `structured` for this event |
| `closure_signal` | boolean | `false` for this event |
| `evidence_posture` | enum | **Same new field** — `real_record` for this event |

### Neutral Fallback Values

| Field | Neutral fallback | Used when |
|-------|-----------------|-----------|
| `epistemic_mode` | `unclassified` | Commitment does not fit cleanly into any mode, or insufficient information |
| `standing_context` | Free-text noting "unknown" or "unverified" | Source data does not describe participant standing conditions |
| `outcome_note` | Empty string `""` | Commitment has not reached completion, or outcome details unavailable |

### Seed/Stub Status Marker

The `evidence_posture` field was introduced because the scoping memo's schema assumes the first records will be created from direct operational observation. In practice, Phase 1 operates entirely from repo-documented facts, not from BKC operational data. The three-value enum (`real_record`, `seed_record`, `source_incomplete_stub`) makes the evidentiary status of each artifact explicit at the frontmatter level, preventing future readers from treating seed artifacts as observed evidence.

## 5. Seed Artifacts Created

### 1. Victoria Pool Aggregate (seed record)

- **What it is:** Pool-level evidence record for the Victoria BKC commitment pool as a whole
- **Evidence posture:** `seed_record` — grounded in repo-documented facts but not from direct operational observation
- **Repo source:** `docs/patterns/commitment-pooling.md` (lifecycle, adopter reference), `docs/roadmap.md` (23+ commitments, 33,400 VCV), `docs/protocols/claims-evidence-attestation.md` (BKC attestation example)
- **What is still unknown:** Individual commitment identifiers, per-commitment epistemic mode breakdown, per-commitment consequence bearers, standing conditions of participants, renegotiation history, outcome quality at commitment completion

### 2. Seed Library Delivery (source-incomplete stub)

- **What it is:** Individual commitment record for a seed library delivery commitment
- **Evidence posture:** `source_incomplete_stub` — grounded in an illustrative example from the protocol doc, not a structured operational record
- **Repo source:** `docs/protocols/claims-evidence-attestation.md`, line 51 ("Commitment #47 redeemed: seed library delivered to Saanich group")
- **What is still unknown:** Stable commitment identifier, lifecycle timestamps, committing agent identity, standing conditions, renegotiation history, governance arrangement details, deliverable quality assessment

### 3. Mapping Workshop Commitments (seed record)

- **What it is:** Batch-level record for commitments originating from BKC mapping workshops
- **Evidence posture:** `seed_record` — grounded in repo descriptions of the workshop-to-pool pipeline, not from individual workshop records
- **Repo source:** `docs/protocols/claims-evidence-attestation.md` (23 commitments documented), `docs/patterns/commitment-pooling.md` (mapping workshops as upstream source), `docs/synthesis/coordination-grammar.md` (BKC coordination loop)
- **What is still unknown:** Individual commitment details, workshop count, per-commitment lifecycle progression, renegotiation history, per-commitment consequence bearers, participant standing conditions

## 6. Revision Convention Implementation

**What revision-log shape was implemented:** Standalone revision event file (scoping memo Section 4.2, Option B).

**Where it lives:** `docs/research/evidence/revisions/REV-2026-04-06-01.md`

**What the first example records:** The human-economy wording refinement pass — a real governance event where the batch-2 promotion review packet was revised to narrow the confirmed layer from four mechanisms to three and replace prescriptive language with diagnostic-only phrasing. The event is classified as `scope_refinement` (not `genuine_reopening`) because the underlying claim was not re-examined; only the boundary of what counts as confirmed was enforced more precisely.

**Why standalone (Option B) rather than inline (Option A):** The wording refinement is documented in its own memo (`human-economy-wording-refinement.md`), but that memo is a planning-trail artifact with its own established structure. Appending a `## Revision Log` section to it would mix evidence metadata into the planning trail. A standalone revision event file keeps the evidence layer separate from the governance workflow trail, which is cleaner for this first example. Future inline revision logs (Option A) on new governance artifacts are expected as the discipline develops.

**Why this is enough to start learning:** The revision event file demonstrates that the `revision_type` enum discriminates between revision depths — this event is classifiably `scope_refinement` rather than `administrative_update` or `genuine_reopening`, and the body explains why. The file also demonstrates the `closure_signal` field in action (false, with reasoning). One real revision event with full provenance and classification is sufficient to validate the schema and start the annotation discipline. The next governance revision that occurs can follow the same pattern.

## 7. What This Makes Observable Now

**What can now be recorded that could not be recorded before:**
- Commitment-level evidence records with epistemic mode, consequence bearers, and standing context annotations. Before this run, the repo described commitment pooling as a pattern but had no place to record per-commitment observations.
- Revision events with structured depth classification. Before this run, revisions to governance artifacts were documented in planning-trail memos but not classified by revision depth (administrative vs scope refinement vs genuine reopening vs authority override).
- The distinction between observed evidence and seed artifacts. The `evidence_posture` field makes it explicit whether a record is grounded in operational observation or in repo-documented facts.

**Which promoted entries this Phase-1 work starts to serve:**
- **human-economy-and-commitment** — the commitment metadata schema creates the observation surface for tracking whether epistemic mode differentiation correlates with coordination treatment.
- **legitimacy-and-shared-consequence** — the consequence_bearers field creates the observation surface for tracking authority-consequence coupling in commitment governance.
- **linguistic-closure** — the revision-type enum and closure_signal field create the observation surface for tracking whether governance revisions genuinely reopen inquiry or reduce to administrative versioning.

**What still remains unobservable without later phases:**
- Consequence-bearing decision traces (Phase 2) — who bore consequences for specific governance decisions and whether they had voice.
- Coordination outcome snapshots (Phase 3) — periodic observations of coordination quality in BKC pools, enabling context-change vs composition-change comparison.
- Attestation decay events — no operational claim lifecycle exists; decay has never been triggered.
- Cross-pool comparison data — no structured observation of coordination quality across different governance arrangements.

## 8. Remaining Gaps

1. **Missing per-commitment operational source detail.** The repo does not contain individual BKC commitment records. All three seed artifacts are grounded in pool-level facts or illustrative examples. Real commitment evidence records require either (a) importing operational data from BKC's systems, or (b) annotating live commitments as they enter or transition in BKC pools. Neither has happened yet.

2. **Annotation burden risk.** The scoping memo identifies annotation overhead as the primary adoption risk. The commitment metadata schema has 12 fields. Even with partial annotation permitted, the discipline of creating a record for each commitment that transitions is a real workflow addition. Sustainability depends on whether the annotations produce enough learning value to justify the effort.

3. **Absent coordination-outcome snapshots.** Phase 3 of the rollout plan creates the observation surface for Target 3 (context-change coordination comparison). Without snapshots, the relational-topology canon entry has no production evidence surface. The first snapshot requires deliberate observation of a BKC pool — not just repo documentation.

4. **Absent consequence-bearing decision traces.** Phase 2 creates the consequence-trace convention for governance decisions. Without it, the legitimacy canon entry's authority-consequence coupling claim has no structured trace beyond the consequence_bearers field on commitment records.

5. **No operational discourse graph.** The discourse-as-governance pattern is documented but not exercised as a running system. Revision-depth tracking can capture governance revisions, but there is no claim lifecycle operating outside the research process. This limits how much the linguistic-closure entry can be tested through this evidence stack.

6. **BKC identifier instability.** If BKC does not provide stable, referenceable commitment identifiers, the linkage between Spore-side evidence records and BKC operational data remains manual and fragile. Descriptive slugs work for now but will not scale.

7. **Self-referential evidence risk.** The first real revision event comes from the Johar corpus program — the same research process whose outputs are being validated. Using research-governance artifacts as evidence of governance-mechanism effectiveness creates a circularity risk. Independent operational evidence (from BKC pool governance) is needed to break the circularity.

## 9. Recommendation

**Move next to phase-2 implementation.**

Why: Phase 1 is now complete as a scaffold. The commitment metadata schema and revision event convention are instantiated with seed artifacts. The next learning step is to begin using these conventions on real governance events — specifically, the consequence-trace convention (Phase 2, Component 4) is the lowest-friction next addition because the Johar corpus program's own governance decisions are well-documented and can be retroactively traced. Phase 2 also creates `docs/research/evidence/decisions/` and `docs/research/evidence/revisions/` standalone files for BKC decisions, extending the evidence surface to operational governance.

A cleanup/template pass is not warranted yet because the current artifacts are intentionally sparse — there is not enough material to justify template refinement. Pausing to reassess deferred families is premature because the evidence stack needs at least one real operational record before the deferred-family triage can be informed by production evidence posture.

## 10. Recommended Next 3 Runs

### Run 1: Phase-2 Evidence Stack — Consequence Traces

**Short name:** evidence-stack-phase-2

**Objective:** Implement consequence-bearing decision traces on 2-3 Spore research governance decisions from the Johar corpus program, and create the `docs/research/evidence/decisions/` directory. Optionally, if a BKC pool governance decision is accessible, create the first standalone BKC decision trace.

**Expected artifact:** 2-3 consequence trace sections (inline on existing governance memos) or standalone decision trace files, plus an updated implementation memo.

**Why it comes first:** Directly extends Phase 1 using the shared `consequence_bearers` field. The Johar corpus governance trail already contains the decisions — this run adds the consequence-trace annotation. Creates the evidence surface for the legitimacy canon entry's authority-consequence coupling claim.

### Run 2: First Real Commitment Evidence Record

**Short name:** first-real-commitment-record

**Objective:** Create the first `real_record` commitment evidence artifact by annotating a live or recently transitioned BKC pool commitment with the full schema. This requires either accessing BKC operational data or annotating a commitment whose details are known to the annotator (Darren).

**Expected artifact:** 1 commitment evidence record with `evidence_posture: real_record`, replacing or supplementing one of the seed artifacts.

**Why it comes second:** The seed artifacts validate the schema shape but do not generate evidence. The first real record starts the observation window for Target 1 (commitment lifecycle with type and consequence annotation). This is the transition from schema to practice. It depends on having access to at least one commitment's operational details.

### Run 3: Deferred-Family Triage Reassessment

**Short name:** deferred-family-triage

**Objective:** Reassess the 8 deferred families in light of 5 promoted entries, the evidence stack implementation, and the current evidence posture. Determine which deferred families are subsumed, which gain clearer boundaries, and which may become relevant as operational evidence accumulates.

**Expected artifact:** `docs/research/planning/deferred-family-triage-checkpoint-2.md`

**Why it comes third:** With the evidence stack scaffolded (Phases 1-2) and the first real commitment record in place, the triage can be informed by both what has been confirmed and what evidence infrastructure exists. Some deferred families may become relevant as specific evidence targets; others may be clearly subsumed by promoted entries.

## 11. Guardrails

- **Seed artifacts are not proof.** They exist to validate the schema, start the annotation discipline, and make the observation surface concrete. They do not constitute evidence for or against any promoted canon entry.

- **Unknown values should remain unknown until observed.** Filling in "plausible" values for fields where the actual data is unavailable is worse than leaving them blank or noting "unknown." The evidence stack is designed to capture what is observed, not what is inferred.

- **Neutral metadata is preferable to theory-loaded metadata at this stage.** The `epistemic_mode` field uses `unclassified` and `mixed` as legitimate values precisely to avoid forcing Johar's four-type taxonomy onto commitments that have not been observed closely enough to classify. If most commitments end up `unclassified`, that is itself evidence about the taxonomy's operational utility.

- **Evidence capture should emerge from actual use, not reporting theater.** The point of the evidence stack is to learn something about how commitment-based coordination functions — not to produce records that look like evidence but contain no signal. If the annotation discipline is not producing learning value, it should be simplified or paused rather than continued as obligation.

- **Later phases should add observability only where there is a real learning loop.** Phase 3 (coordination outcome snapshots) should not be implemented until there is a realistic plan for using the snapshots in governance revision. Instrumentation without a feedback loop to governance is overhead, not evidence infrastructure.
