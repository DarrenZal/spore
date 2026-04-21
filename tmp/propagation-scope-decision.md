# Propagation Scope Decision

- Decision date: 2026-04-21
- Decision: no dependent-repo propagation in Phase 9
- Authority: plan Non-goals, plan Phase 9.5, `tmp/phase-0-repo-snapshot.md`, and `docs/research/canon-decisions/0020-repo-topology-ratification.md`

## Repos Considered

- `darren-workflow`
- `flowcoding`
- `koi-processor`

## Decision

No edits, PRs, merge manifests, tags, or branch-discipline actions are required for the analysis-only repos during `corpus-foundational-review-v1` Phase 9 propagation.

## Reasoning

- The plan's Non-goals explicitly keep downstream propagation beyond `Spore`, `Intelligence Commons`, and `Poietic Match` out of scope for this review.
- Phase 9.5 requires a decision memo, not speculative propagation work, for `flowcoding`, `darren-workflow`, and any other dependent analysis surfaces.
- `ADR-0020 repo-topology-ratification` formally freezes the canon-bearing set at the current trio and keeps `darren-workflow`, `flowcoding`, and `koi-processor` analysis-only until a successor topology proposal authorizes expansion.
- The Phase 0 baseline already treated these repos as observational inputs for topology and tooling context rather than writable canon-bearing targets.

## Downstream Deferral

- `darren-workflow`: may consume corpus-review-v1 outputs later through a separate downstream planning or intake effort if workflow docs need to reflect the ratified canon.
- `flowcoding`: may consume corpus-review-v1 outputs later through a separate downstream planning effort if shared terminology or repo-topology guidance becomes operationally relevant there.
- `koi-processor`: may consume corpus-review-v1 outputs later through a separate downstream planning effort if canon or protocol changes need to be reflected in tooling documentation or processing assumptions.

## Operational Consequence

Phase 9 merge execution remains a three-repo operation only: `Spore -> Intelligence Commons -> Poietic Match`. Any later uptake by analysis-only repos is opt-in successor work, not part of this merge set.
