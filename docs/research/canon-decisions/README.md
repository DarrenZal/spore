# Canon Decisions (Spore)

This directory holds Architecture Decision Records (ADR-lite) for Spore canon edits produced by canon-review rounds.

**Protocol**: [`/docs/research/planning/canon-review-protocol.md`](../planning/canon-review-protocol.md) defines the ADR format, triage rubric, evidence threshold, and cross-project coordination mechanism. Read the protocol before authoring an ADR.

## Naming

Each ADR is a single markdown file at `NNNN-<slug>.md`:
- `NNNN` — zero-padded 4-digit number, repo-local, monotonically increasing from `0001`
- `<slug>` — kebab-case identifier that matches the shared-framing slug for cross-project coordinated ADRs

## Cross-project coordinated decisions

When a decision affects canon in ≥2 repos, a shared framing note lives at:

```
/Users/darrenzal/projects/spore/docs/research/connections/canon-framing-<slug>.md
```

Per-repo ADRs reference the framing via `shared_framing:` frontmatter (absolute path). See protocol §5 for the full runbook.

## ADR lifecycle

`draft` → `active` (after AC-* checks pass + commit lands). `deprecated` marks an ADR retained for provenance but no longer recommended; `superseded` marks one replaced by a later ADR. `partial-drift` is no longer a live ADR `status`; treat it as execution-state context only. See protocol §3 and ADR-0012.

## Rollback

ADR SHAs are tracked in the canon-review plan's Execution log as `sha:spore:<short>` tokens. Rollback operates only on plan-manifest SHAs — never time- or message-based discovery. See the active plan (e.g., `/Users/darrenzal/.claude/plans/canon-review-v1.md`) for the authoritative manifest.
