---
evidence_type: decision_trace
decision_ref: # doc_id of the governing decision artifact
decision_locus: # spore_research | bkc_pool | bkc_federation | spore_canon | other
decision_date: # YYYY-MM-DD
decision_summary: >
  # One sentence describing what was decided.
authority_holders:
  - # Name and role of each authority holder
consequence_bearers:
  - # Agent, group, or role who bears material consequences
bearer_voice: # direct | consulted | represented | absent | not_applicable
bearer_voice_detail: >
  # Per-group voice breakdown when consequence bearers have
  # different levels of voice. Supplements the single-value
  # bearer_voice enum.
reversibility: # reversible | costly_to_reverse | irreversible | contestable
review_path: >
  # How can this decision be challenged, reviewed, or reversed?
observed_downstream: >
  # What enacted outcomes have been observed? Leave as
  # "No operational downstream effects observed yet" until
  # effects are actually observed. Do not infer.
evidence_posture: # real_record | seed_record | source_incomplete_stub
snapshot_date: # YYYY-MM-DD
---

## Source Basis

**State the evidence posture clearly here.** Example: "This decision
trace documents a real governance decision" or "This is a seed trace
based on repo-documented governance patterns."

**Source cited:**
- [list the specific decision memos, review outcomes, or governance
  records that ground this trace]

## What Is Explicit vs Unknown

**Explicit:**
- [list what is documented in the source artifacts]

**Partial or role-level:**
- [list where detail is at the role/group level rather than individual]

**Unknown:**
- [list what cannot be claimed from the available source]
