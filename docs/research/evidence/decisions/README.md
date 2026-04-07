# Decision Traces

This directory holds consequence-bearing decision trace artifacts. Each file records a governance decision with structured metadata about who decided, who bore consequences, whether consequence-bearers had voice, and what review or reversal path exists.

## Purpose

Decision traces connect the legitimacy-and-shared-consequence canon entry to actual governance practice. They record the structural relationship between authority and consequence for specific decisions. They do not evaluate whether a decision was good — they document the coupling (or decoupling) between authority and consequence for that decision.

## Schema

Each artifact uses YAML frontmatter with the following fields (from `instrumentation-implementation-scoping-batch-1.md`, Section 4.4):

- `evidence_type: decision_trace` — fixed value
- `decision_ref` — identifier for the decision (doc_id + anchor if needed)
- `decision_locus` — one of: `spore_research`, `bkc_pool`, `bkc_federation`, `spore_canon`, `other`
- `decision_date` — ISO date
- `decision_summary` — one sentence
- `authority_holders` — YAML list
- `consequence_bearers` — YAML list
- `bearer_voice` — one of: `direct`, `consulted`, `represented`, `absent`, `not_applicable`
- `bearer_voice_detail` — free text supplementing `bearer_voice` with per-group voice breakdown when consequence bearers have different levels of voice
- `reversibility` — one of: `reversible`, `costly_to_reverse`, `irreversible`, `contestable`
- `review_path` — free text
- `observed_downstream` — free text (blank until effect observed)
- `evidence_posture` — one of: `real_record`, `seed_record`, `source_incomplete_stub`
- `snapshot_date` — ISO date of trace creation or last update

## Naming Convention

`DEC-<YYYY-MM-DD>-<slug>.md`

## Relationship to Canon

Decision traces do not change `promotion_status` on any synthesis note or canon entry. They create a structured observation layer for authority-consequence coupling. The boundary between evidence collection and canon revision is maintained by the governance workflow.
