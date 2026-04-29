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

## Future-ADR-shape candidates (parking)

Three concerns are flagged as **future Spore ADR-shape candidates** — when they fire operationally, they require canon-decision-record ceremony (not direct-edit infrastructure work). Surfaced here so navigators scanning canon-decisions hit them:

- **AI-summary authority + evaluation operationalization** — F4 §Open Questions lift. When evidence accumulates that AI-summaries are being routinely consulted-as-authority in canon-reading flow, F4 deferral should lift via dedicated ADR. Includes authority gates, evaluation framework, regeneration mechanics, retraction / supersession, relationship to F1's AI-summary-as-sensor-modality.
- **Graph-substrate-of-canon as canon-recognized object** — three projections (code graph + knowledge graph + discourse graph) compose to make canon-as-knowledge-graph. When this composition stabilizes operationally, Spore could admit "graph-substrate-of-canon" as foundation-layer doctrine via dedicated ADR.
- **Canon-citizenship-layers distinction** — F8 external-validation-loop and sibling-canon-coherence overlap conceptually but operate on different canon-citizenship layers (F8 = non-Spore-canon-citizen agents producing feedback; downstream-aligned siblings = Spore-canon-citizen-sibling repos tracking Spore canon; bioregional-coordination peer-instance-family is a third layer). When the distinction matures with both F8 + sibling-coherence machinery deployed, Spore could admit "canon-citizenship-layers" as a doctrinal object via dedicated ADR.

Origin: [`docs/positioning/agents-and-canons.md`](../../positioning/agents-and-canons.md) §Future-ADR-shape candidates (graduated 2026-04-28 via [ADR-0083](./0083-graduate-meta-vision-memo-to-positioning.md)). Marker-flagged here so navigators scanning canon-decisions hit them; canon-admission ceremony happens when each fires its own earning-test.
