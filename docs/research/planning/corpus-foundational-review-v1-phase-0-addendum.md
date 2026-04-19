# Phase 0 execution addendum — clean-tree handling

Read this alongside `/Users/darrenzal/.claude/plans/corpus-foundational-review-v1.md`. The main plan governs execution; this addendum overrides only Phase 0 step 1 (clean-tree gate) to account for operator-approved pre-existing uncommitted state.

## Context

At the time of Phase 0 launch, the Spore working tree has uncommitted state from prior sessions that is explicitly out-of-scope for this review. The plan's strict clean-tree gate would require resolving all of it first. The operator has chosen instead to proceed with **explicit-add discipline**: Phase 0 commits only known-scoped paths, leaving pre-existing untracked files in place but outside the branch history.

IC and PM repos should be independently checked and resolved using the plan's strict clean-tree gate (they had no in-flight work at session start, so this is expected to be a no-op).

## Pre-existing Spore paths — DO NOT add to corpus-review/v1

These existed before this session and are not part of the review. Leave untracked; never include in a `git add`:

- `AGENTS.md`
- `.gitignore` (working-copy modification — leave as-is for now)
- `docs/research/Sheaves/sheaf-theory-synthesis.md`
- `docs/research/connections/hansen-ghrist-discourse-graphs.md`
- `docs/research/connections/hermes-agent-adversarial-self-trust.md`
- `docs/research/planning/learning-field-intake-protocol.md`
- `spore-*.png` (all of them — marketing images from prior session)
- `tools/`
- Any `tmp/*` file whose name does not start with `capstone-` (prior session artifacts)

## Scoped paths — DO add to corpus-review/v1

These were produced during the corpus-foundational-review-v1 execution and belong on the branch:

- `docs/research/corpus-review/` — the whole directory (17 syntheses + capstone + review + INDEX.md + `originals/` subdir)
- `docs/research/planning/corpus-foundational-review-v1-plan.md` — the plan snapshot (copied from `~/.claude/plans/corpus-foundational-review-v1.md` during Phase 0 step 3 per the main plan)
- `docs/research/planning/corpus-foundational-review-v1-phase-0-addendum.md` — copy of this addendum, same session-atomic commit
- `tmp/capstone-v2-backlog.md` — deferred findings from external review

Optionally (operator choice): also commit intermediate synthesis artifacts for reproducibility:
- `tmp/capstone-sections-1-2.md`
- `tmp/capstone-sections-3-4-5.md`
- `tmp/capstone-section-6.md`

If committing these, note in the commit message that they are ephemeral intermediate outputs from the multi-agent synthesis, not canonical review material.

## Required add discipline

- **Never `git add .`** or `git add -A` or `git add <directory-that-contains-untracked-pre-existing-files>` from repo root.
- **Always `git add <exact-path>`** with paths drawn from the Scoped list above.
- Run `git status --porcelain | grep -v '^??'` after staging and before committing to confirm the staged set is exactly what was intended. Any staged file outside the Scoped list must be `git restore --staged`'d before the commit.

## Phase 0 execution flow (modified)

1. **Repo access (all three)**: verify path, branch `main`, `git status` succeeds. Record `git rev-parse HEAD` per repo in `tmp/phase-0-repo-snapshot.md`. **Do not** require clean tree on Spore — expect pre-existing untracked files listed above. **Do** require clean tree on IC + PM.

2. **Branch creation**: `git checkout -b corpus-review/v1` on all three repos. Pre-existing Spore untracked files ride along the branch switch untouched (untracked files survive branch switches). Push branches: `git push -u origin corpus-review/v1`.

3. **Plan snapshot**: copy `/Users/darrenzal/.claude/plans/corpus-foundational-review-v1.md` to `/Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md`. Copy this addendum to `/Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-phase-0-addendum.md`.

4. **Commit Spore's review artifacts** with explicit add discipline:
   ```
   git add docs/research/corpus-review
   git add docs/research/planning/corpus-foundational-review-v1-plan.md
   git add docs/research/planning/corpus-foundational-review-v1-phase-0-addendum.md
   git add tmp/capstone-v2-backlog.md
   # optionally: git add tmp/capstone-sections-1-2.md tmp/capstone-sections-3-4-5.md tmp/capstone-section-6.md
   git status --porcelain | grep '^[AM]'   # verify staged set
   git commit -m "corpus-review: Phase 0 snapshot — research inputs + plan + capstone + external review"
   ```
   Record the commit SHA — this is the immutable "plan at commit X" reference for Phases 1–9.

5. **IC + PM**: no Phase 0 commit unless the plan's own Phase 0 steps require it. Confirm branches pushed; move on.

6. **Proceed with remaining Phase 0 steps** per the main plan: tooling verification (`validate_spec_dag.py`, `project_bridge_notes.py`, `doc-check`, psql), branch-protection probes, any remaining `tmp/phase-0-*.md` snapshot files.

## Report back

After Phase 0 completes, report:

- Commit SHAs on all three repos for the `corpus-review/v1` branch head.
- Path to Spore's plan snapshot + addendum copy.
- Result of each tooling verification step.
- Any branch-protection findings that affect Phase 9 merge flow.
- Any deviation from this addendum.
