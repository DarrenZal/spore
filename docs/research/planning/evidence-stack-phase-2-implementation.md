# Evidence Stack Phase 2 Implementation

## 1. Scope And Rule

This run implements Phase 2 of the evidence stack as specified in the instrumentation implementation scoping memo (`instrumentation-implementation-scoping-batch-1.md`, Section 4.4, Section 6 Phase 2).

This is the first consequence-bearing decision trace layer. It creates the directory structure, schema instantiation, and first real decision-trace artifacts for the evidence stack's Component 4 (consequence-bearing decision trace).

Repo-native Johar governance decisions are the honest starting surface. The Johar corpus program generated three batches of structured promotion review, wording refinement, and canon enactment decisions — all documented in the planning trail with explicit authority, qualification terms, and enacted outcomes. These are real governance decisions with durable consequences for the Spore canon. They are the strongest available source for decision traces in this repo.

Missing operational decision detail remains a real limit. BKC pool governance decisions are referenced in pattern docs but not present in this repo. The consequence-bearer granularity in the Johar program is role-level (BKC stewards, future grammar users), not individual-level. Downstream operational effects of canon promotions have not yet been observed.

Canon-safe claims remain the upper bound. This implementation creates observation infrastructure for authority-consequence coupling. It does not generate evidence for or against any promoted entry.

## 2. Repo Reality Check

**`docs/research/evidence/decisions/` existed before this run:** No. The directory was created in this run. The evidence README previously listed it as "not yet created — deferred to later phases."

**Real BKC decision-log artifacts exist in this repo:** No. BKC decision logs are referenced descriptively ("decision logs in pilots," "steward review processes") in pattern docs and the decision memo, but no BKC decision records — structured or unstructured — are present in this repo. BKC operational data lives in BKC's own systems.

**Real governance decision artifacts that do exist in this repo:** Yes, extensively. The Johar corpus program's planning trail contains:

| Artifact Type | Count | Example |
|---------------|-------|---------|
| Promotion review outcome memos | 3 | `promotion-review-outcome-batch-1.md` |
| Canon entry enactment memos | 3 | `canon-entry-enactment-batch-1.md` |
| Wording refinement memos | 2 | `human-economy-wording-refinement.md` |
| Diagnostic split assessment | 1 | `holding-complexity-diagnostic-split-assessment.md` |
| Review packets | 3 | `promotion-review-packet-batch-1.md` |
| Phase 11b decision memo | 1 | `docs/synthesis/decision-memo.md` |

These artifacts document structured governance decisions with explicit authority holders (Darren as human reviewer), qualification terms, boundary checks, and enacted outcomes. They are real governance traces — not design descriptions or hypothetical examples.

**What this meant for implementation choices:**
- Decision-trace artifacts use standalone files (Option B from the scoping memo) in the new `decisions/` directory, rather than inline sections appended to existing governance memos. Reason: the governance memos have their own established structure and purpose; appending consequence-trace metadata to them would mix evidence annotation with governance workflow. Standalone files keep the evidence layer separate and reusable.
- All three traces are `real_record` because the decisions happened, are documented, and have enacted outcomes. Unknown fields (downstream operational effects, individual consequence-bearer identities) are marked as unknown, not inferred.
- Consequence bearers are described at role level (BKC stewards, future grammar users) because the source artifacts do not name individual affected parties beyond Darren as reviewer.

## 3. Files And Directories Created

| Path | Type | Purpose | Why This Shape |
|------|------|---------|---------------|
| `docs/research/evidence/decisions/` | directory | Home for consequence-bearing decision trace artifacts | Matches scoping memo Section 4.4, Option B |
| `docs/research/evidence/decisions/README.md` | index | Documents decision-trace schema, naming convention, and purpose | Provides orientation for future decision-trace contributors without overbuilding |
| `docs/research/evidence/decisions/DEC-2026-04-06-batch1-promotion.md` | real record | Decision trace for batch-1 Johar promotion (3 families) | First and broadest promotion decision; establishes evidentiary standard for all subsequent batches |
| `docs/research/evidence/decisions/DEC-2026-04-06-batch2-human-economy-promotion.md` | real record | Decision trace for batch-2 human-economy promotion | Distinctive because of CLC-as-design-lineage exclusion and wording-drift monitoring requirement |
| `docs/research/evidence/decisions/DEC-2026-04-06-batch3-holding-complexity-diagnostic.md` | real record | Decision trace for batch-3 holding-complexity diagnostic promotion | Distinctive because of the diagnostic-split pattern and explicit architecture exclusion list |
| `docs/research/evidence/README.md` | update | Updated to reflect that decisions/ now exists | Moves decisions/ from "not yet created" to active |
| `docs/research/planning/evidence-stack-phase-2-implementation.md` | memo | This file — records what was done, what remains, what comes next | Required output of this run |

## 4. Schema Choices Adopted

All fields adopted from the scoping memo Section 4.4, with one addition from Phase 1:

| Field | Type | Notes |
|-------|------|-------|
| `evidence_type` | fixed: `decision_trace` | Identifies artifact type |
| `decision_ref` | string | Uses the `doc_id` of the governing review outcome memo |
| `decision_locus` | enum: `spore_research`, `bkc_pool`, `bkc_federation`, `spore_canon`, `other` | All three Phase-2 artifacts use `spore_research` |
| `decision_date` | ISO date | 2026-04-06 for all three batches (verified from file modification timestamps) |
| `decision_summary` | free text, one sentence | Describes what was decided |
| `authority_holders` | YAML list | Darren (human reviewer) + Claude (research process operator) in all three |
| `consequence_bearers` | YAML list | Role-level descriptions; varies per decision |
| `bearer_voice` | enum: `direct`, `consulted`, `represented`, `absent`, `not_applicable` | `direct` for all three (Darren as reviewer is the primary consequence bearer who had voice) |
| `bearer_voice_detail` | free text | **Added field** — supplements the single-value `bearer_voice` enum with a nuanced description of voice distribution across multiple consequence-bearer groups. Required because the `bearer_voice` enum forces a single value but real decisions have consequence bearers with different levels of voice. |
| `reversibility` | enum: `reversible`, `costly_to_reverse`, `irreversible`, `contestable` | `contestable` for all three (canon entries can be challenged via claim lifecycle) |
| `review_path` | free text | Describes available contestation and review mechanisms |
| `observed_downstream` | free text | Documents enacted outcomes; notes where operational effects are not yet observed |
| `evidence_posture` | enum: `real_record`, `seed_record`, `source_incomplete_stub` | **Carried from Phase 1** — `real_record` for all three artifacts |
| `snapshot_date` | ISO date | Date of trace creation (2026-04-07) |

### Schema Addition: `bearer_voice_detail`

The scoping memo's `bearer_voice` enum (`direct`, `consulted`, `represented`, `absent`, `not_applicable`) was designed for decisions with a single consequence-bearer group. In practice, the Johar promotion decisions have multiple consequence-bearer groups with different voice levels: Darren had `direct` voice; BKC stewards were `absent`; future grammar users were structurally `absent`. The `bearer_voice` field captures the primary classification; `bearer_voice_detail` provides the per-group breakdown. This addition is backward-compatible — the enum field remains the primary structured value.

### Neutral Fallback Values

| Field | Neutral fallback | Used when |
|-------|-----------------|-----------|
| `observed_downstream` | Free-text noting "no operational downstream effects observed yet" | Operational consequences have not yet manifested |
| `bearer_voice_detail` | Free-text noting which bearers were absent and why | When bearer voice is not uniform across consequence-bearer groups |

## 5. Decision Artifacts Created

### 1. Batch-1 Promotion Decision (real record)

- **What it captures:** The approval and enactment of three Johar corpus families (legitimacy-and-shared-consequence, linguistic-closure, relational-topology-and-context-design) into Spore canon.
- **Evidence posture:** `real_record` — the decision happened, is fully documented in multiple repo artifacts, and has enacted outcomes.
- **Repo source:** `promotion-review-outcome-batch-1.md`, `canon-entry-enactment-batch-1.md`, plus review packet and drafting memo.
- **What consequence detail is explicit:** Authority (Darren as sole reviewer), what was decided (approve all 3 with qualification), qualification terms per family, enacted outcomes (3 canon entries + 3 status updates), review/reversal path (claim lifecycle, governance review).
- **What consequence detail is unknown:** Whether BKC operational governance has been influenced by promoted entries. Whether future grammar users will encounter qualification boundaries or only canon text. Individual identities of affected BKC stewards.

### 2. Batch-2 Human-Economy Promotion Decision (real record)

- **What it captures:** The approval and enactment of human-economy-and-commitment with binding qualification limiting the confirmed layer to diagnostic, standing, and broad replacement principle.
- **Evidence posture:** `real_record` — fully documented decision chain including wording refinement pass.
- **Repo source:** `promotion-review-outcome-batch-2-human-economy.md`, `human-economy-wording-refinement.md`, `canon-entry-enactment-batch-2-human-economy.md`.
- **What consequence detail is explicit:** The CLC-as-design-lineage exclusion and its methodological basis. The wording-drift monitoring requirement. The specific three-mechanism boundary.
- **What consequence detail is unknown:** Whether CLC is aware of or concerned about how Spore classifies their operational evidence. Whether BKC commitment pool governance has been influenced by the canon entry's assertion about epistemic variation. Whether the four-type taxonomy will accumulate production evidence.

### 3. Batch-3 Holding-Complexity Diagnostic Decision (real record)

- **What it captures:** The approval and enactment of the diagnostic-only slice of holding-complexity-beyond-control, with explicit exclusion of the five-capacity architecture and related design constructs.
- **Evidence posture:** `real_record` — fully documented decision chain including diagnostic split assessment and wording refinement.
- **Repo source:** `promotion-review-outcome-batch-3-holding-complexity-diagnostic.md`, `holding-complexity-diagnostic-split-assessment.md`, `holding-complexity-wording-refinement.md`, `canon-entry-enactment-batch-3-holding-complexity-diagnostic.md`.
- **What consequence detail is explicit:** The full exclusion list (five-capacity architecture, civilisational optionality, reflexive-constraint clause, integrated fork framing, energetic/material constraint, meta-goal stewardship, basin-competition framing). That deliberate institutional construction is design contribution, confirmed by reviewer. The diagnostic-split pattern as a reusable governance precedent.
- **What consequence detail is unknown:** Whether the diagnostic-only promotion will be misread as endorsement of the full architecture. Whether the five-capacity architecture will accumulate production evidence. Whether the energetic/material constraint exclusion will be revisited. Long-term effects of establishing the diagnostic-split pattern.

## 6. What This Makes Observable Now

**What can now be recorded that could not be recorded before:**
- Authority-consequence coupling for specific governance decisions. Before this run, the repo documented what was decided and why, but not who bore consequences and whether they had voice. The decision traces add the consequence dimension to governance decisions that previously only tracked authority and outcome.
- The structural gap between authority holders and consequence bearers. All three traces show that the primary consequence bearers beyond the reviewer (BKC stewards, future grammar users, CLC, the design-contribution layer) were absent from the decision process. This is a testable observation about the legitimacy canon entry's own governance: does the Johar corpus program practice the authority-consequence coupling it promotes?
- Bearer-voice distribution across multiple consequence-bearer groups. The `bearer_voice_detail` field makes it possible to record that voice is not uniform — one group may have direct voice while others are absent.

**Which promoted entries this Phase-2 work starts to serve:**
- **legitimacy-and-shared-consequence** — the decision traces directly operationalize authority-consequence coupling observation. They provide the first structured records of who bore consequences for governance decisions and whether they had voice.
- **linguistic-closure** — the traces document whether revision decisions went through structured discourse (all three did) and whether review mechanisms resist closure (the qualification terms and explicit exclusion lists are anti-closure devices).
- **holding-complexity-beyond-control** — the diagnostic-split decision is itself an example of adaptive coordination under complexity: rather than forcing a binary promote/reject on a complex family, the governance process found a third path (split the diagnostic from the architecture).

**What still remains blocked without later phases:**
- Coordination outcome snapshots (Phase 3) — no structured observation of BKC pool coordination quality exists. The relational-topology canon entry has no production evidence surface.
- Real commitment-level evidence records — no individual BKC commitment has been observed with the full commitment metadata schema. All commitment artifacts remain seeds or stubs.
- Cross-pool comparison data — no structured comparison of coordination quality across different governance arrangements.
- Operational downstream effects of canon promotions — no mechanism to observe whether canon entries influence BKC pool governance.

## 7. Remaining Gaps

1. **Lack of external/live BKC decision artifacts in this repo.** All three decision traces are Johar corpus program governance decisions — research-process decisions, not operational-coordination decisions. BKC pool governance decisions (steward reviews, commitment routing, federation decisions) are referenced but not present. The decision-trace convention is ready for BKC decisions, but the data depends on either importing BKC decision records or having the annotator present at BKC governance events.

2. **Role-level rather than participant-level consequence traces.** Consequence bearers are described as "BKC stewards," "future grammar users," "CLC / Grassroots Economics" — not as named individuals. This is honest given what the source artifacts contain, but it limits the precision of authority-consequence coupling analysis. The field is free-text and can carry individual names when they are known.

3. **Absent coordination-outcome snapshots.** Phase 3 of the rollout plan creates the coordination outcome snapshot template. Without snapshots, the relational-topology canon entry has no production evidence surface. Decision traces alone do not provide longitudinal coordination quality data.

4. **Limited real commitment-by-commitment records.** All commitment evidence artifacts from Phase 1 remain seeds or stubs. No individual BKC commitment has been observed with the full metadata schema. The decision traces document governance decisions about the research process, not about individual commitments.

5. **Self-referential evidence risk.** All three decision traces come from the Johar corpus program — the same research process whose outputs are being validated. Using research-governance artifacts as evidence of governance-mechanism effectiveness creates a circularity risk. Independent operational evidence (from BKC pool governance) is needed to break the circularity. The traces are valuable for demonstrating the convention and for honest self-observation, but they should not be treated as independent validation of the legitimacy canon entry.

6. **Bearer voice is structurally `absent` for most consequence bearers.** In all three traces, the reviewer (Darren) had direct voice, but all other consequence-bearer groups were absent. This is not a deficiency in the tracing — it accurately reflects the single-reviewer governance model. But it means the first three decision traces show the same authority-consequence pattern. Variation in bearer_voice will only emerge when decision traces cover decisions with different governance structures (e.g., BKC steward decisions with multi-party voice).

7. **No observed operational downstream effects yet.** All three traces note that operational downstream effects have not been observed. The `observed_downstream` field is populated with enactment outcomes (canon text inserted, status updated) but not with operational consequences (BKC governance influenced, grammar users encountering qualification boundaries). These fields should be updated if and when operational effects are observed.

## 8. Recommendation

**Move next to first-real-commitment-record.** Status as of 2026-04-10: blocked on source data. No live BKC commitment pooling has been done by the project lead yet — all BKC pool data is test data. Two capture paths are now documented in `docs/research/evidence/templates/commitment-capture-checklist.md`:

1. **Path A — Victoria workshop (May-June 2026):** First-person capture of a live BKC commitment. This is the primary path.
2. **Path B — Grassroots Economics external observation:** Annotate a production-scale commitment from Ruddick/GE/Sarafu/CLC operations (26K+ users, 188 pools, Celo mainnet). This is externally-observed evidence with a different observer relationship but equally valid `real_record` posture since the commitments are verifiable on-chain.

Why the original recommendation still holds: Phases 1 and 2 are now complete as scaffolds. The commitment metadata schema, revision event convention, and decision-trace convention are all instantiated with artifacts. But the commitment artifacts remain seeds/stubs — no individual commitment has been observed with the full schema. The first real commitment record is the transition from schema validation to evidence generation. The capture checklist documents exactly what data is needed for both paths so the next opportunity can be seized without re-reading this memo.

## 9. Recommended Next 3 Runs

### Run 1: First Real Commitment Evidence Record

**Short name:** first-real-commitment-record

**Objective:** Create the first `real_record` commitment evidence artifact by annotating a live or recently transitioned BKC pool commitment with the full metadata schema. Requires Darren to provide operational details for one commitment (epistemic mode, consequence bearers, standing conditions, coordination context).

**Expected artifact:** 1 commitment evidence record in `docs/research/evidence/commitments/` with `evidence_posture: real_record`.

**Why it comes first:** The seed artifacts validate the schema shape but do not generate evidence. The first real record starts the observation window for Target 1 (commitment lifecycle with type and consequence annotation). It is the transition from schema to practice. It depends on Darren providing operational details for at least one commitment.

### Run 2: Evidence Artifact Template Pass

**Short name:** evidence-template-pass

**Objective:** Review the 7 evidence artifacts (3 commitments, 1 revision, 3 decisions) for schema consistency, identify any field naming divergences, and produce a brief template reference document. Not a full template system — just enough to ensure the next contributor can create a decision trace or commitment record without re-reading the scoping memo.

**Expected artifact:** `docs/research/evidence/templates.md` or equivalent minimal reference.

**Why it comes second:** With real records from Runs 1 and this run, there is now enough material to assess whether the schemas are consistent and whether a lightweight template would reduce adoption friction. This is a refinement pass, not a design pass.

### Run 3: Deferred-Family Triage Reassessment

**Short name:** deferred-family-triage

**Objective:** Reassess the 8 deferred families in light of 5 promoted entries, the evidence stack implementation (Phases 1-2), and the current evidence posture. Determine which deferred families are subsumed, which gain clearer boundaries, and which may become relevant as operational evidence accumulates.

**Expected artifact:** `docs/research/planning/deferred-family-triage-checkpoint-2.md`

**Why it comes third:** With the evidence stack scaffolded (Phases 1-2) and ideally the first real commitment record in place, the triage can be informed by both what has been confirmed and what evidence infrastructure exists. Some deferred families may become relevant as specific evidence targets; others may be clearly subsumed by promoted entries.

## 10. Guardrails

- **Decision traces are not full governance truth.** They record the structural relationship between authority and consequence for specific decisions. They do not capture the full deliberative context, all stakeholder perspectives, or the informal reasoning that preceded formal decisions. They are a structured observation layer, not a complete governance record.

- **Role-level consequence tracing is still useful if partiality is explicit.** Naming "BKC stewards" as consequence bearers rather than individual stewards is less precise than individual-level tracing but still captures the structural relationship. The partiality is explicitly documented in each trace's "What Is Explicit vs Unknown" section. When individual-level data becomes available, traces can be updated.

- **Unknown downstream effects should remain unknown.** The `observed_downstream` field should not be filled with plausible inferences about what might have happened. It should be updated only when an operational effect is actually observed. "No operational downstream effects observed yet" is a legitimate and informative value.

- **Evidence capture should stay grounded in actual artifacts.** Decision traces should cite specific repo documents as source basis. If a decision is not documented in the repo, the trace should either reference external documentation or note that the source is partial. Traces should not be created from memory or inference alone.

- **Later phases should deepen observability only where use justifies it.** Phase 3 (coordination outcome snapshots) should not be implemented until there is a realistic plan for using snapshots in governance revision. Decision traces are justified because they operationalize a specific canon entry claim (authority-consequence coupling). Snapshot templates should wait until there is a realistic observation cadence for BKC pools.

- **Self-referential evidence must be flagged.** All three Phase-2 decision traces document the Johar corpus program's own governance. Using these as evidence about governance effectiveness creates circularity. They are honest self-observation and convention validation, not independent evidence. The circularity should be noted whenever these traces are cited in governance quality assessment.
