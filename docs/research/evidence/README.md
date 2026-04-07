# Evidence Collection Area

This directory holds structured evidence artifacts for the Spore evidence stack. It exists to make operational learning observable — not to prove canon entries, but to create the conditions under which claims can be tested against practice.

## Directory Structure

- `commitments/` — Commitment evidence records annotating BKC pool commitments with epistemic-mode, consequence, and standing metadata. One file per annotated commitment.
- `revisions/` — Standalone revision event files for commitment renegotiations or cross-artifact revision events. Inline revision logs on governance artifacts live in those artifacts, not here.
- `decisions/` — Consequence-bearing decision trace artifacts recording who decided, who bore consequences, whether consequence-bearers had voice, and what review path exists.

Future directories (not yet created — deferred to later phases):
- `snapshots/` — Coordination outcome snapshots (Phase 3)

## Schemas

All evidence artifacts use YAML frontmatter. Field names and enum values are defined in:
- [Instrumentation Implementation Scoping Batch 1](../planning/instrumentation-implementation-scoping-batch-1.md) — Section 4
- [Templates](templates/) — reusable artifact templates with all fields, allowed values, and usage notes

Fields added during implementation (not in the original scoping memo):
- `evidence_posture` — added in Phase 1 to distinguish real records from seeds/stubs
- `bearer_voice_detail` — added in Phase 2 to supplement the single-value `bearer_voice` enum with per-group voice breakdown on decision traces

## Evidence Posture

Every artifact in this area carries an explicit `evidence_posture` field:
- `real_record` — grounded in observed operational data or documented governance events
- `seed_record` — grounded in repo-documented facts but created to start the discipline, not from direct operational observation
- `source_incomplete_stub` — created to establish the artifact shape; source detail is missing or unavailable

**Seed records and stubs are not evidence.** They exist to validate the schema and start the observation discipline. Unknown values remain unknown. Demo, hackathon, or design-document data does not qualify as `real_record` regardless of how structured it is. Each artifact's `## Source Basis` section explains exactly what the record is grounded in and what remains unknown.

## Relationship to Canon

Evidence artifacts do not change `promotion_status` on any synthesis note or canon entry. They create the observation layer that future review passes may draw on. The boundary between evidence collection and canon revision is maintained by the governance workflow, not by this directory.
