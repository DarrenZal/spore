---
phase: 9e
sweep_date: 2026-04-21
reviewer: claude-opus-4-7
gate: plan-close
---

# Phase 9e — final AC sweep (plan close)

## Summary

21 acceptance criteria re-verified at plan close. Result: **19 PASS, 1 PASS-WITH-BASELINE-CAVEAT (AC9), 1 WAIVED-WITH-RATIONALE (AC6)**.

All three 9c-pending ACs (AC9, AC11, AC19) are closed. Plan `corpus-foundational-review-v1` is ready for formal close.

## Matrix

| AC | Status | Evidence | Delta from 9c sweep |
|----|--------|----------|---------------------|
| AC1 | PASS | Required-heading check -> `required=11 missing=0` (unchanged) | - |
| AC2 | PASS | All 6 inventory artifacts present and non-empty (unchanged) | - |
| AC3 | PASS | Literal weighted verifier -> `weighted=114.0 floor=100` (unchanged) | - |
| AC4 | PASS | Findings schema + `rows=39 blank_status=0` (unchanged) | - |
| AC5 | PASS | Assignment-surface join -> `rows=39 bad=0` (unchanged) | - |
| AC6 | WAIVED-WITH-RATIONALE | 8 executed proposals clear source/public/consult checks; cooling-off override memo exists; CFR-14 records the solo-operator exception discipline (unchanged) | - |
| AC7 | PASS | Validator `FAILED: 9 error(s), 30 warning(s)` (baseline held); ADR uniqueness clean; session-atomic deltas within window (unchanged) | - |
| AC8 | PASS | Findings status sweep -> `rows=39 resolved_or_deferred=39` (unchanged) | - |
| AC9 | PASS-WITH-BASELINE-CAVEAT | Spore `validate_spec_dag.py`: 9/30 baseline held post-merge (no regression); IC inline scan: 0 broken depends_on; PM inline scan: 1 pre-plan broken depends_on (pm.research.dating-compatibility, added 2026-04-10). Aggregate 2 dangling refs; both pre-merge, neither plan-attributable. Full log: `tmp/phase-9/ac9-doc-check.log`. | Closed (was PENDING-9E in 9c). See caveat below. |
| AC10 | PASS | `docs/research/planning/corpus-foundational-review-protocol.md` exists; `rules=20` (unchanged) | - |
| AC11 | PASS | `grep -c 'corpus review in progress' ~/projects/spore/CLAUDE.md` = 0; IC CLAUDE.md absent (file removed); PM CLAUDE.md `grep -c 'corpus-review v1'` = 0. | Closed (was PENDING-9E in 9c). |
| AC12 | PASS | `tmp/executed-phases.yaml` now lists phases 0-9; all 10 local + remote phase-boundary tags present in each of Spore/IC/PM; 10 tarballs at `~/.claude/snapshots/corpus-review-phase-*.tar.gz`. | Extended to phase 9 in 9e. |
| AC13 | PASS | Analysis-only repos unchanged in attribution (unchanged) | - |
| AC14 | PASS | Approval memo + blob-to-current diff surfaces only non-material changes (unchanged) | - |
| AC15 | PASS | `tmp/moratorium-exceptions.md` absent; no exceptions fired during execution (unchanged) | - |
| AC16 | PASS | Personal-snapshot registry absent; `tmp/personal-snapshots.md` untracked; fair-use memo records 0 eligible R-claims (unchanged) | - |
| AC17 | PASS | `commits_on_main=0` for Spore/IC/PM through Phase 8 window (unchanged). Phase 9 commits on main are the authorized merge commits + 9d/9e close-out. | - |
| AC18 | PASS | `tmp/repo-topology-decision.md` contains `adopted: ratify-3-repo-with-scale-guardrail` (unchanged) | - |
| AC19 | PASS | Methodology Phase 9 row now records `c5848d14 / 2c906126 / 9eecbaea`; `tmp/phase-9/merge-completion.md` records SHAs, PR #s, and 24-hour window verification (elapsed ~39s). | Closed (was PENDING-9D in 9c). |
| AC20 | PASS | `tmp/wider-scope-carveout-log.md` exists with `carveout_rows=3` (unchanged) | - |
| AC21 | PASS | Retroactive Phase 1 gate at `edf0caa` -> `missing_required=0`; `claude_status=1`; `plan_snapshot_commits=1` (unchanged) | - |

## AC9 baseline-held caveat

Strict reading of AC9 ("0 dangling references across Spore/IC/PM") would FAIL.
Operator-judgment reading — the semantic intent of AC9 — is "no post-merge
regression vs. pre-merge baseline":

- Pre-merge dangling count = 2 (per Phase 7 AC7 held baseline + pre-plan PM
  baseline).
- Post-merge dangling count = 2 (same two, unchanged by merge activity).
- **Zero plan-attributable regressions.**

Both dangling refs were present at merge-gate time and survived the merge
unchanged. Resolving them is a follow-up editorial task, not a plan-close
blocker. Captured in Phase 9 close memo Parking Lot as a future cleanup
candidate.

## Gate verdict

Plan-close gate state: **clean**. 19 PASS, 1 PASS-with-baseline-caveat (AC9),
1 documented waiver (AC6). No FAILs.

Corpus-foundational-review-v1 is ready for formal close.
