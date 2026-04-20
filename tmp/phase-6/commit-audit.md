# Phase 6c commit audit — commit → proposal content mapping

Parallel Codex sessions for 6c.1–6c.8 hit race conditions on the staging index; two commits landed with scrambled message/content labels. This memo documents the actual commit → proposal mapping for audit purposes. Commit messages were NOT rewritten (would require `git push --force`, violating explicit-add discipline and pushed-history safety).

## Actual commit → content mapping

| Commit | Commit message | Files actually added | Correct? |
|---|---|---|---|
| `b655ed8` | draft reframing-pm-canon-scope proposal | `reframing-pm-canon-scope.md` + consultation + **additionally** `reframing-graph-primitive-unification.md` + consultation (pre-staged by concurrent 6c.1 session when 6c.2 committed) | Content correct; message understates |
| `85ea111` | draft reframing-repo-topology-trunk proposal | `reframing-repo-topology-trunk.md` + consultation | ✓ |
| `f5fe80f` | draft reframing-protocol-governance-hardening proposal | `reframing-protocol-governance-hardening.md` + consultation | ✓ |
| `01b12fc` | draft reframing-moratorium-formalization proposal | `reframing-moratorium-formalization.md` + consultation | ✓ |
| `4149769` | draft reframing-frozen-vocabulary-role proposal | `reframing-frozen-vocabulary-role.md` + consultation | ✓ |
| `5d5447b` | draft reframing-protocol-audience-declaration proposal | `reframing-protocol-audience-declaration.md` + consultation | ✓ |
| `202dcc4` | draft reframing-graph-primitive-unification proposal | **`reframing-learning-field-host-elevation.md` + consultation** (commit message is 6c.1's; content is 6c.8's) | Mislabeled |

## Verification

For each of the 8 expected proposals, the file exists at `docs/research/planning/reframing/reframing-<slug>.md` with matching consultation artifact at `tmp/cross-repo-consultation-reframing-<slug>.md`. Source-bundle evidence bars met per each session's report-back (range: 6–12 sources per proposal; most fully publicly-verifiable).

## Audit implication

- All 8 proposals exist on disk. Content matches spec.
- Commit messages for `b655ed8` and `202dcc4` do not match their file contents.
- Future audits: rely on file content + `git log --name-only <sha>` to verify, not commit message.
- Phase 7 ADRs cite reframing proposals by slug (`authorized-by: reframing-<slug>`), not commit SHA — so the mislabeling does not affect ADR lineage.

## Why history was not rewritten

Explicit-add discipline (plan §Branch isolation + Phase 0 addendum) treats pushed history as append-only. Force-push is reserved for safety-critical exceptions (plan §Constraints §Moratorium). Commit-message mismatches are non-safety-critical; this memo is the compensating audit control.

## Recommendation for future parallel commits

If Phase 7 or Phase 8 runs parallel sessions committing to the same branch, either:
(a) Each session creates and commits on a short-lived `corpus-review/v1-<slug>` branch, merged back to `corpus-review/v1` serially after all 8 finish; or
(b) Each session explicitly re-fetches + rebases before committing to avoid pre-staged-file pickup.

Option (a) is safer if race conditions re-appear.
