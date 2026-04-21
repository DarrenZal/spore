# Merge Manifest - corpus-foundational-review-v1

- Manifest status: Phase 9b skeleton
- Authorizing review: `corpus-foundational-review-v1`
- Authorizing findings / approvals: `docs/research/planning/corpus-foundational-review-findings.md`, `tmp/triage-approval-2026-04-20.md`, `tmp/phase-7/phase-7-close.md`, `tmp/editorial-pass-close.md`
- Repo set in scope: `Spore`, `Intelligence Commons`, `Poietic Match`
- Branch set: `corpus-review/v1 -> main` in each repo
- Merge window rule: complete all three merges within 24 hours per plan Phase 9.1
- Intended merge order: `Spore -> Intelligence Commons -> Poietic Match`

## PR / Readiness Carrier

| Repo | Source branch | Target branch | PR URL | Pre-merge head SHA | Readiness checks | Protection state | Final merge SHA | Merged at |
|---|---|---|---|---|---|---|---|---|
| Spore | `corpus-review/v1` | `main` | `[PENDING 9d]` | `[PENDING 9d]` | `[PENDING 9d]` | `[PENDING 9d]` | `[PENDING 9d]` | `[PENDING 9d]` |
| Intelligence Commons | `corpus-review/v1` | `main` | `[PENDING 9d]` | `[PENDING 9d]` | `[PENDING 9d]` | `PR-gated / protection-unverified` until verified | `[PENDING 9d]` | `[PENDING 9d]` |
| Poietic Match | `corpus-review/v1` | `main` | `[PENDING 9d]` | `[PENDING 9d]` | `[PENDING 9d]` | `PR-gated / protection-unverified` until verified | `[PENDING 9d]` | `[PENDING 9d]` |

## Failure Handling

- Default recovery: if `Spore` merges and either downstream repo fails because of conflict, CI, or branch-protection rejection, revert the `Spore` merge through normal PR flow.
- Partial state is never silent: any decision to keep `Spore` merged while deferring `IC` or `PM` requires a committed `tmp/partial-merge-deferral-<ISO>.md` memo naming the failure, rationale, and re-attempt timeline.
- No downstream repo is considered complete until its merge SHA and merge timestamp are recorded in this manifest.

## Authorizing ADR / Protocol / Proposal Set

### Spore ADRs

- `docs/research/canon-decisions/0009-coordination-grammar-refresh.md`
- `docs/research/canon-decisions/0010-decision-memo-post-v1-framing.md`
- `docs/research/canon-decisions/0011-canon-review-protocol-v3-governance-hardening.md`
- `docs/research/canon-decisions/0012-adr-status-vocabulary-unification.md`
- `docs/research/canon-decisions/0013-intent-evidence-subtype-clarification.md`
- `docs/research/canon-decisions/0014-governance-authoring-surfaces-alignment.md`
- `docs/research/canon-decisions/0016-field-holon-primitive-distinction.md`
- `docs/research/canon-decisions/0019-graph-primitive-unification.md`
- `docs/research/canon-decisions/0020-repo-topology-ratification.md`
- `docs/research/canon-decisions/0021-moratorium-protocol-formalization.md`
- `docs/research/canon-decisions/0022-frozen-vocabulary-role-redefinition.md`
- `docs/research/canon-decisions/0023-protocol-audience-declaration-standard.md`
- `docs/research/canon-decisions/0024-learning-field-protocol-elevation.md`
- `docs/research/canon-decisions/0025-primitive-roster-boundary-cleanup.md`
- `docs/research/canon-decisions/0026-bridge-note-inventory-scope-cleanup.md`
- `docs/research/canon-decisions/0027-project-vision-audience-declaration.md`
- `docs/research/canon-decisions/0028-bridge-note-format-and-vocabulary-normalization.md`

### Intelligence Commons ADRs

- `docs/research/canon-decisions/0011-memory-layer-model-constitutional-operational-split.md`
- `docs/research/canon-decisions/0012-boundary-theory-unifier-retraction.md`
- `docs/research/canon-decisions/0013-three-layer-coordination-stack-trace-repair.md`
- `docs/research/canon-decisions/0014-collective-agency-declination-rationale-repair.md`
- `docs/research/canon-decisions/0015-learning-membrane-pattern-demotion.md`
- `docs/research/canon-decisions/0016-project-vision-neighbors-map-reconciliation.md`
- `docs/research/canon-decisions/0017-bridge-note-format-and-vocabulary-normalization.md`

### Poietic Match ADRs

- `docs/research/canon-decisions/0010-canon-scope-ratification.md`
- `docs/research/canon-decisions/0011-vision-vocabulary-alignment.md`
- `docs/research/canon-decisions/0012-protocol-vocabulary-surfaces.md`
- `docs/research/canon-decisions/0013-bridge-note-format-normalization.md`

### Standalone Protocols

- `docs/research/planning/moratorium-protocol-v1.md`
- `docs/research/planning/learning-field-protocol-v1.md`

### Foundational-Reframing Proposals

- `docs/research/planning/reframing/reframing-protocol-governance-hardening.md`
- `docs/research/planning/reframing/reframing-graph-primitive-unification.md`
- `docs/research/planning/reframing/reframing-pm-canon-scope.md`
- `docs/research/planning/reframing/reframing-repo-topology-trunk.md`
- `docs/research/planning/reframing/reframing-moratorium-formalization.md`
- `docs/research/planning/reframing/reframing-frozen-vocabulary-role.md`
- `docs/research/planning/reframing/reframing-protocol-audience-declaration.md`
- `docs/research/planning/reframing/reframing-learning-field-host-elevation.md`

## Post-Merge Verification

- AC9: run `doc-check` or the documented fallback across `Spore`, `Intelligence Commons`, and `Poietic Match`; record zero dangling references.
- AC11: lift the moratorium by restoring `Spore` `CLAUDE.md` and removing the `corpus-review v1` pointer from `IC` and `PM`.
- AC19: backfill the final merge SHAs and timestamps in this manifest and in the methodology Phase 9 row.
