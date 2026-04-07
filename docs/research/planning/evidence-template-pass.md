# Evidence Template Pass

## 1. Scope And Rule

This run performs a cleanup/template pass over the evidence stack only. It is not an evidence-expansion run, not a promotion-status change, and not a canon edit.

The main goal is source-quality honesty: ensuring that every evidence artifact makes its evidentiary status unmistakable at both the frontmatter level (`evidence_posture`) and the body level (`## Source Basis` bolded lead-in). Current commitment artifacts remain non-real unless and until a truly real operational commitment is captured from the BKC backend or from direct operational knowledge.

No new evidence records were created. No existing artifact was relabeled. No `promotion_status` was changed.

## 2. Current Consistency Check

| Area | Current State | Main Inconsistency Or Risk | Needed Change |
|------|--------------|---------------------------|---------------|
| Evidence root README | Documents directory structure and `evidence_posture` enum. References scoping memo for schemas. | Missing `bearer_voice_detail` (added in Phase 2). No mention of templates. Provenance language could be more forceful about demo/hackathon data. | Added Phase 2 field notes, templates reference, strengthened provenance warning. |
| Commitment artifacts (3 files) | All carry correct `evidence_posture` in frontmatter. Body `## Source Basis` sections explain provenance. | Pool-aggregate body text was less explicit than the other two about not being real evidence. No consistent bolded lead-in across the three files. | Added bolded "not operational evidence" lead-in to all three `## Source Basis` sections for visual consistency. |
| Revision artifact (1 file) | `real_record` with full provenance. Clean. | None found. | No change needed. |
| Decision traces (3 files) | All `real_record` with full provenance. Consistent schema. | All use `bearer_voice_detail` and `snapshot_date` which were not documented in `decisions/README.md`. | Updated `decisions/README.md` to add both fields. |
| Template availability | No templates existed. New contributors would need to read the scoping memo (~200 lines) or reverse-engineer from existing artifacts. | High friction for creating new evidence artifacts. | Created `templates/` directory with README + 3 templates. |

## 3. Provenance Decision

**No new provenance field needed.**

The current `evidence_posture` enum (`real_record`, `seed_record`, `source_incomplete_stub`) captures the evidentiary status of each artifact at the frontmatter level. The `## Source Basis` body section explains the provenance details: what the record is grounded in, what is known, and what is unknown.

The user's prompt asked whether a second field (e.g., `source_type` with values like `repo_documented`, `live_local_demo`, `live_local_operational`, `external_operational_reference`) is needed. It is not, for three reasons:

1. **The body already carries this distinction.** Every artifact's `## Source Basis` section explains whether the data comes from repo documentation, illustrative examples, or operational observation. Duplicating this into a frontmatter field creates redundancy without adding machine-readable value at this scale.

2. **The current artifacts are too few to justify a second axis.** There are 7 evidence artifacts. Adding a second provenance field to 7 files creates schema complexity without providing filtering or comparison benefit. If the stack grows to 20+ artifacts with mixed source types, the question should be revisited.

3. **The risk of demo/hackathon blurring is already managed.** The `evidence_posture` enum plus the bolded body lead-in ("This is a seed record, not operational evidence") make it hard to misread a seed as a real record. The specific risk identified in the prompt — BKC backend containing hackathon/demo data — is handled by the existing convention: the annotator must explain what the record is grounded in, and `real_record` requires observed operational data, not system data of unknown provenance.

If a future run creates artifacts from the BKC backend where the underlying data might be demo vs operational, a one-line note in the `## Source Basis` section is the right place to flag that — not a new frontmatter field.

## 4. Files Created Or Updated

| Path | Change Type | Purpose | Why |
|------|------------|---------|-----|
| `docs/research/evidence/README.md` | Updated | Added Phase 2 field notes, templates reference, strengthened provenance warning | Schema docs lagged behind actual implementation; demo/hackathon warning was implicit |
| `docs/research/evidence/decisions/README.md` | Updated | Added `bearer_voice_detail` and `snapshot_date` fields | Both used in all 3 decision traces but not documented |
| `docs/research/evidence/commitments/victoria-pool-aggregate-2026q1.md` | Updated | Bolded provenance lead-in in Source Basis | Weaker than the other two commitment files |
| `docs/research/evidence/commitments/victoria-seed-library-delivery.md` | Updated | Bolded provenance lead-in in Source Basis | Consistency with other commitment files |
| `docs/research/evidence/commitments/victoria-mapping-workshop-commitments.md` | Updated | Bolded provenance lead-in in Source Basis | Consistency with other commitment files |
| `docs/research/evidence/templates/README.md` | Created | Template index with rules | No templates existed; entry point for new contributors |
| `docs/research/evidence/templates/commitment-evidence-template.md` | Created | Reusable commitment evidence template | Reduces friction for creating commitment records |
| `docs/research/evidence/templates/decision-trace-template.md` | Created | Reusable decision trace template | Reduces friction for creating decision traces |
| `docs/research/evidence/templates/revision-event-template.md` | Created | Reusable revision event template | Reduces friction for creating revision events |
| `docs/research/planning/evidence-template-pass.md` | Created | This memo | Required output of this run |

## 5. Template Set

### commitment-evidence-template.md

- **What it is for:** Annotating a BKC pool commitment (individual or batch-level) with epistemic-mode, consequence, and standing metadata.
- **What it standardizes:** All 12 commitment fields with allowed values, the `## Source Basis` section structure (bolded posture lead-in, source list, known/unknown sections).
- **What it intentionally leaves open:** `epistemic_mode` defaults to `unclassified` — the template does not presume the four-type taxonomy is the right decomposition. `standing_context` is free text, not a checklist.

### decision-trace-template.md

- **What it is for:** Recording a governance decision with authority-consequence coupling metadata.
- **What it standardizes:** All 14 decision trace fields (including `bearer_voice_detail` and `snapshot_date`), the `## Source Basis` and `## What Is Explicit vs Unknown` section structure.
- **What it intentionally leaves open:** `decision_locus` is a 5-value enum that can be extended. `observed_downstream` defaults to "no operational downstream effects observed yet" — the template does not encourage filling this with inferences.

### revision-event-template.md

- **What it is for:** Recording a revision to a governance artifact with depth classification.
- **What it standardizes:** All 9 revision event fields, the `## Context`, `## Why This Revision Type Was Chosen`, and `## Why closure_signal Is True/False` section structure.
- **What it intentionally leaves open:** The body sections ask for reasoning, not just values. The template does not pre-fill any field except the structural prompts.

No coordination-outcome-snapshot template was created because Phase 3 (snapshots) has not been implemented and there are no snapshot artifacts to validate a template against. Creating a snapshot template now would be speculative. When Phase 3 is implemented, a template should be created from the first real snapshot.

## 6. Existing Artifact Cleanup

**Demo/hackathon provenance clarity:** All three commitment artifacts now have bolded lead-in text in their `## Source Basis` sections stating explicitly that they are not operational evidence. Before this pass, the pool-aggregate file's body text was noticeably softer than the other two.

**Seed/stub wording:** Normalized. All three commitment files now follow the same pattern: bold provenance statement, source list, known/unknown sections. The seed-library-delivery stub's existing "Why this is a stub, not a real record" subsection was preserved — it provides useful additional explanation specific to that artifact.

**Schema normalization:** `decisions/README.md` now documents all fields used in decision trace artifacts, including `bearer_voice_detail` and `snapshot_date` which were added during Phase 2 implementation but not reflected in the README.

**Field or section ordering normalization:** No changes. The existing ordering across artifacts is consistent within each artifact type. Commitment artifacts follow: frontmatter → Source Basis → source list → known/unknown. Decision traces follow: frontmatter → Source Basis → Why real_record → structural notes → What Is Explicit vs Unknown. Revision events follow: frontmatter → Context → classification reasoning → closure reasoning. These orderings are now codified in the templates.

## 7. Usability Check

**Is the evidence stack easier to extend safely?** Yes. A new contributor can now: (1) read the root README for orientation, (2) pick a template, (3) copy it, fill in the fields, and place the result in the right directory. Before this pass, the only option was to read the scoping memo or copy-paste from an existing artifact and modify.

**Can a future real local commitment record be added without ambiguity?** Yes. The template includes `evidence_posture` with the three allowed values and a bolded body lead-in prompting the author to state the posture clearly. The existing seed artifacts set a visible contrast — a real record will look different from a seed in both frontmatter and body text.

**What still remains awkward or unresolved:**

1. **No snapshot template.** Phase 3 (coordination outcome snapshots) is not yet implemented. When it is, a template should be created.
2. **Commitment naming convention is informal.** Filenames use descriptive slugs (`victoria-pool-aggregate-2026q1.md`) rather than structured IDs. This is fine at the current scale but may need a convention if the stack grows past ~10 commitment files.
3. **No cross-reference convention between evidence types.** A decision trace can reference a revision event via `artifact_ref`, but there is no standard way for a commitment record to reference a decision that affected it. This is not a problem yet but could become one if the evidence graph gets denser.

## 8. Recommendation

**Move next to deferred-family triage reassessment.**

Why: The evidence stack scaffold is now complete (Phases 1-2 implemented, templates in place, provenance conventions tightened). The first-real-commitment-record run correctly blocked on source data — no accessible source supports a real commitment record yet, and the Victoria workshop (the next natural source) is May-June 2026. Rather than waiting for source data to unblock, the highest-value next step is reassessing the 8 deferred Johar families in light of the 5 promoted entries and the evidence stack. This triage can determine which deferred families are subsumed, which gain clearer boundaries from the evidence infrastructure, and which should become specific evidence targets when operational data becomes available. The triage does not require any real evidence records — it is a research-planning activity informed by what evidence infrastructure exists and what it can observe.

## 9. Recommended Next 3 Runs

### Run 1: Deferred-Family Triage Reassessment

**Short name:** deferred-family-triage

**Objective:** Reassess the 8 deferred Johar families in light of 5 promoted entries, the evidence stack (Phases 1-2 + templates), and current evidence posture. Determine which are subsumed, which gain clearer boundaries, and which become specific evidence targets.

**Expected artifact:** `docs/research/planning/deferred-family-triage-checkpoint-2.md`

**Why it comes first:** The evidence stack is scaffolded and the template pass is complete. The first-real-commitment-record is blocked on source data (next window: May-June 2026 workshop). The triage uses what exists now to clarify what evidence work matters most when data becomes available. It is a planning activity, not an evidence-capture activity.

### Run 2: Corpus Comparative Note Design

**Short name:** corpus-comparative-note-design

**Objective:** Design the convention for comparative notes that connect Spore canon entries to external work (beyond the existing bridge-note format used for Johar intake). This covers how promoted canon entries relate to non-Johar literature, operational precedents, and sibling projects.

**Expected artifact:** `docs/research/planning/comparative-note-convention.md`

**Why it comes second:** With the triage complete, the comparative note design can be informed by which deferred families survived as independent research targets and which were subsumed. The convention connects the evidence stack (which observes practice) to the research corpus (which connects theory).

### Run 3: First Real Commitment Capture (When Source Available)

**Short name:** first-real-commitment-capture

**Objective:** Create the first `real_record` commitment evidence artifact when source data becomes available — either from the Victoria workshop (May-June 2026), from a BKC backend query, or from Darren providing operational details for one specific commitment.

**Expected artifact:** 1 commitment evidence record in `docs/research/evidence/commitments/` with `evidence_posture: real_record`.

**Why it comes third:** This run is blocked on source data, not on schema or convention design. The template and provenance conventions are now in place. When a real commitment is captured, it can be recorded cleanly using the commitment template with `real_record` posture. There is no design work remaining — only data.

## 10. Guardrails

- **Templates are not evidence.** A filled-in template with `seed_record` posture is a schema exercise, not proof of anything. Only `real_record` artifacts grounded in observed operational data or documented governance events constitute evidence.
- **Provenance clarity matters more than schema elegance.** The bolded `## Source Basis` lead-in is the most important defense against misreading. If a future contributor must choose between a neat frontmatter field and a clear body explanation, choose the body explanation.
- **Demo data must remain visibly demo data.** BKC backend data of unknown provenance (hackathon presets, test commitments, form templates) does not qualify as `real_record`. The source must be verified as an actual operational commitment.
- **One honest real record later is more valuable than many pseudo-records now.** The evidence stack exists to learn from practice, not to produce artifacts that look like evidence.
- **The evidence stack should stay small enough to actually be used.** 7 artifacts + 3 templates + 2 READMEs is the right scale for a system with no real commitment data yet. Do not grow the stack faster than the operational data justifies.
