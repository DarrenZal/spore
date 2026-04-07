---
event_id: # REV-YYYY-MM-DD-NN (sequential within date)
artifact_ref: # doc_id of the artifact that was revised
revision_type: # administrative_update | scope_refinement | genuine_reopening | authority_override
trigger: >
  # What prompted this revision?
prior_summary: >
  # What did the artifact say before the revision?
outcome_summary: >
  # What changed?
discourse_trace: # structured | informal | unilateral | not_applicable
closure_signal: # true | false — was a settled term found to have lost
  # contact with operational reality?
evidence_posture: # real_record | seed_record | source_incomplete_stub
snapshot_date: # YYYY-MM-DD
---

## Context

**State the evidence posture clearly here.** Example: "This revision
event records a real governance action" or "This is a seed event based
on repo-documented revision patterns."

**Source cited:**
- [list the specific memos, diffs, or governance records that
  document this revision]

## Why This Revision Type Was Chosen

[Explain why this revision is classified as the chosen type rather
than a different one. E.g., why scope_refinement and not
genuine_reopening.]

## Why `closure_signal` Is True/False

[Explain whether this revision was triggered by a settled term losing
contact with operational reality (closure detected) or by something
else (boundary enforcement, error correction, etc.).]
