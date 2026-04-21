---
phase: 9c
sweep_date: 2026-04-21
reviewer: codex
---

# Phase 9c - AC sweep results (final pre-merge gate)

## Summary

21 acceptance criteria were rechecked against the current Phase 9 state after the accepted 9b remediations and the 9c vision/synthesis audit. Result: 17 PASS, 1 WAIVED-WITH-RATIONALE, 1 PENDING-9D, and 2 PENDING-9E.

No surprise FAILs were found. The expected 9b blockers are closed: AC3 now passes on reconciled current-state evidence, AC10 passes with the harvested protocol doc, AC12 passes with the executed-phase manifest plus pushed boundary tags and tarballs, and AC16 passes with the committed fair-use audit memo.

## Matrix

| AC | Status | Evidence | Remediation needed |
|----|--------|----------|---------------------|
| AC1 | PASS | Required-heading check -> `required=11 missing=0` | - |
| AC2 | PASS | `test -s` loop -> `corpus-inventory 8085B`, `concept-roster 66167B`, `meta-corpus 884B`, `bridge-note 10180B`, `adr-rationale 6014B`, `repo-topology-snapshot 4809B` | - |
| AC3 | PASS | Literal weighted verifier -> `full=114 half=0 limited=0 weighted=114.0 floor=100`; executed research baseline reconciles to `17 traditions + capstone + capstone-review = 19 syntheses` in CFR-5 of the harvested protocol | - |
| AC4 | PASS | Findings schema -> `| finding-id | ... | status |`; `rows=39`; `blank_status=0` | - |
| AC5 | PASS | Assignment-surface join -> `rows=39 bad=0` across canon-review rounds, reframing proposal `covers:` mappings, and the editorial close memo | - |
| AC6 | WAIVED-WITH-RATIONALE | 8 executed proposals -> every file shows `sources>=6`, `public>=5`, `consult=1`; cooling-off override memo exists; harvested protocol now records the solo-operator exception discipline in CFR-14 | Future v2 should make the solo-operator exception first-class rather than deviation-memo-only |
| AC7 | PASS | Validator rerun -> `FAILED: 9 error(s), 30 warning(s)` (baseline unchanged); cross-repo ADR uniqueness -> `total_adr_files=55`, `dup_adr_number_within_repo=0`, `dup_doc_id_global=0`, `dup_filename_within_repo=0`; session-atomic deltas remain `19s, 16s, 8s, 18s, 2m11s, 6s` | - |
| AC8 | PASS | Findings status sweep -> `rows=39 resolved_or_deferred=39` | - |
| AC9 | PENDING-9E | Post-merge `doc-check` / fallback close-out sweep is not executable pre-merge | Run post-merge dangling-reference check during Phase 9e |
| AC10 | PASS | `docs/research/planning/corpus-foundational-review-protocol.md` exists; harvested rule count -> `rules=20` | - |
| AC11 | PENDING-9E | Moratorium-lift / CLAUDE cleanup remains a post-merge close condition | Perform the moratorium lift and CLAUDE pointer cleanup during Phase 9e |
| AC12 | PASS | `tmp/executed-phases.yaml` exists with phases `0-8`; local boundary tags exist in Spore/IC/PM for every executed phase; `ls-remote origin` returns `1` for every repo/phase tag; tarballs `corpus-review-phase-0..8.tar.gz` exist | - |
| AC13 | PASS | Exact attribution check -> `darren-workflow head=49da198a74fa msg=0 diff_count=0`; `flowcoding baseline=head`; `regenai/koi-processor head=19d0f6820539 msg=0 diff_count=0` | - |
| AC14 | PASS | Approval memo exists; approved blob `e278ae232d852a9623733752bb7cfb51cab83186`; `blob_rows=39 current_rows=39 index_track_changed=0`; track counts unchanged at `25 canon-review-v2 / 13 foundational-reframing / 1 editorial` | - |
| AC15 | PASS | `tmp/moratorium-exceptions.md` absent; `commits_on_main=0` for Spore/IC/PM; `Exception-Id:` trailers none | - |
| AC16 | PASS | Personal-snapshot registry absent, `tmp/personal-snapshots.md` not tracked, `tmp/fair-use-spot-check.md` exists, and the committed fair-use memo records `0` eligible tagged research R-claims | - |
| AC17 | PASS | `commits_on_main=0` for Spore/IC/PM through the Phase 8 window; no exception trailers found | - |
| AC18 | PASS | `tmp/repo-topology-decision.md` contains `adopted: ratify-3-repo-with-scale-guardrail` | - |
| AC19 | PENDING-9D | Methodology Phase 9 row remains `PENDING`; no merge SHAs recorded yet | Record all three merge SHAs during merge execution |
| AC20 | PASS | `tmp/wider-scope-carveout-log.md` exists with `carveout_rows=3` | - |
| AC21 | PASS | Retroactive Phase 1 gate at `edf0caa` -> `missing_required=0`; `claude_status=1`; `plan_snapshot_commits=1` | - |

## Detailed notes

### AC3

The literal weighted verifier now passes cleanly once the research corpus is checked against the format the current files actually carry:

- `full=114 half=0 limited=0 weighted=114.0 floor=100`

The remaining ambiguity from 9a was the plan prose saying `17 + 1 capstone = 18 files` while the executed corpus carries `research-capstone-review.md` as a real Phase 3 artifact. Current corpus state resolves that ambiguity in favor of the 19-file set:

- `docs/research/planning/corpus-foundational-review-protocol.md` CFR-5 now records the v1 baseline as `17 traditions plus a capstone and a capstone-review pass, producing 19 research syntheses`
- Phase 4 and Phase 7 artifacts cite `research-capstone-review.md` as a claim-bearing source, not as accidental drift

AC3 is therefore treated as PASS on reconciled current-state evidence rather than as a still-open file-count failure.

### AC6

The waiver remains real, but it is now less ad hoc than it was in 9a.

- All 8 reframing proposals remain `status=executed`
- Every proposal still clears the source-count, public-verifiability, and consultation checks
- `tmp/phase-6/solo-operator-cooling-off-override.md` remains the operative waiver memo
- The harvested protocol now records the solo-operator cooling-off exception discipline as CFR-14, which is the expected carry-forward path for v2 hardening

### AC12

AC12 now passes on both required surfaces:

- the machine-readable manifest exists at `tmp/executed-phases.yaml`
- all three repos now have local boundary tags for phases `0-8`
- every boundary tag is also pushed to `origin`
- phase tarballs exist for every executed phase at `~/.claude/snapshots/corpus-review-phase-0..8.tar.gz`

No repo-specific bundle fallback was needed because the remote-tag condition is now satisfied directly.

### AC13

The plan's analysis-only repo path `regenai/koi-processor` resolves locally at `/Users/darrenzal/projects/RegenAI/koi-processor`. The attribution check still passes:

- `darren-workflow` has post-baseline commits, but none match the plan-attribution regex and none touch plan-cited paths
- `flowcoding` is unchanged from baseline
- `koi-processor` has post-baseline commits, but none match the plan-attribution regex and none touch plan-cited paths

### AC14

`tmp/findings-doc-changelog.md` is still absent, so AC14 remains a blob-to-current manual check.

Current state is unchanged in the ways that matter from the 9a audit:

- no new findings
- no severity increase
- no change to the approved index-track assignments
- current deltas from the approved blob remain revision metadata, the added `status` column / values, YAML synchronization, and the post-Phase-8 editorial wording cleanup for F-024

### AC16

The missing audit artifact from 9a is now present and sufficient.

- `tmp/fair-use-spot-check.md` is committed
- the memo records a zero-sample outcome because the research corpus contains `0` eligible tagged R-claims
- `tmp/personal-snapshots.md` remains untracked
- the external registry hash-search loop is skipped because `~/Documents/spore-corpus-review-snapshots/.registry` is absent

## Gate verdict

Pre-merge gate state is clean: 17 PASS, 3 expected pending items (`AC9`, `AC11`, `AC19`), and 1 documented waiver (`AC6`). No surprise FAILs remain.
