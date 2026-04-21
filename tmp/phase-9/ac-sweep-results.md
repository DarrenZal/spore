---
phase: 9a
sweep_date: 2026-04-21
reviewer: codex
---

# Phase 9a - AC sweep results

## Summary

21 acceptance criteria were checked against the plan's Phase 9a verification rules, with ad hoc checks used where the scripted verifiers were stale against current artifact shapes. Result: 13 PASS, 3 FAIL, 1 PENDING-9B, 1 PENDING-9D, 2 PENDING-9E, and 1 WAIVED-WITH-RATIONALE.

The real pre-merge blockers beyond the expected pending items are AC3, AC12, and AC16. Phase 9b must also produce the harvest doc for AC10 before merge execution can begin.

## Matrix

| AC | Status | Evidence | Remediation needed |
|----|--------|----------|---------------------|
| AC1 | PASS | Literal 11-section grep loop -> `AC1 PASS: all 11 required sections present` | - |
| AC2 | PASS | Literal `test -s` loop -> `corpus-inventory 8085B`, `concept-roster 66167B`, `meta-corpus 884B`, `bridge-note 10180B`, `adr-rationale 6014B`, `repo-topology-snapshot 4809B` | - |
| AC3 | FAIL | Literal Python verifier -> `full=0 half=0 limited=0 weighted=0.0 floor=100` (exit 1); `research-*.md` count check -> `count=19` | Reconcile AC3 with the current Phase 3 corpus: either backfill countable R-claim serialization and restore the declared 18-file set, or explicitly amend/waive the verifier with rationale before merge |
| AC4 | PASS | Header/schema check -> `| finding-id | ... | status |`; `rows=39`; `blank_status=none` | - |
| AC5 | PASS | Plan join script is stale against `F-###` IDs and dependency mentions; corrected assignment-surface check -> `rows=39`, `bad=0` | - |
| AC6 | WAIVED-WITH-RATIONALE | 8-proposal audit -> every proposal has `sources>=6`, `public>=5`, `consult=True`, and `cooling_days=0`; protocol frontmatter records Phase 6b two-round bakeoff; documented override memo exists | Harvest the solo-operator cooling-off exception into Phase 9b/v2 protocol work so the waiver is no longer ad hoc |
| AC7 | PASS | Literal validator grep `^ERROR` -> `0` (stale verifier); actual error count `grep 'ERROR:'` -> `9`; Phase 7 close says `9/30 held throughout`; slug uniqueness -> `55 ADR doc_ids ... no duplicate adr_number, filename, or doc_id`; manual session-atomic deltas -> `19s, 16s, 8s, 18s, 2m11s, 6s` | - |
| AC8 | PASS | Literal AC8 parser -> `AC8 PASS: 39 findings rows have resolved/deferred statuses` | - |
| AC9 | PENDING-9E | Post-merge `doc-check` / fallback is a close-out check; not executable at 9a | Run post-merge doc-check after Phase 9 propagation and record zero dangling refs |
| AC10 | PENDING-9B | `docs/research/planning/corpus-foundational-review-protocol.md` is missing | Author the harvest doc with the required rule inventory before merge execution |
| AC11 | PENDING-9E | Moratorium-lift / CLAUDE cleanup is a close-out condition, not a 9a state check | Perform the moratorium lift and CLAUDE pointer cleanup during Phase 9e |
| AC12 | FAIL | `tmp/executed-phases.yaml` missing; local tags exist only for phases `5-8` in all 3 repos; remote tags exist only for phases `5-8`; `~/.claude/snapshots/` has tarballs only for phases `5`, `7`, `8`; no phase bundles found | Backfill machine-readable executed-phase manifest plus missing phase-boundary evidence for phases `0-4` and tarball evidence for phases `0-4` and `6`; push tags or create bundle backups where tags cannot be recreated remotely |
| AC13 | PASS | Phase 0 snapshot baselines found for `darren-workflow`, `flowcoding`, `koi-processor`; current heads checked; no attributable commit messages or cited-path diffs found | - |
| AC14 | PASS | `tmp/triage-approval-2026-04-20.md` exists; approval basis is findings-doc blob `e278ae2`; blob-to-current diff shows revision-5 status-column/status-value overlay plus non-material detail cleanup, with no new finding, severity-up, or index-track change | - |
| AC15 | PASS | `tmp/moratorium-exceptions.md` absent; `git log main --since 2026-04-19 --until 2026-04-21` -> `commits_on_main=0` for Spore/IC/PM; `Exception-Id:` trailers none | - |
| AC16 | FAIL | Scripted check state: registry missing, `tmp/personal-snapshots.md` not tracked, `tmp/fair-use-spot-check.md` missing, `snapshot_tagged_files=0` | Add `tmp/fair-use-spot-check.md` documenting the zero-sample outcome or the required 1% manual sample, then rerun AC16 |
| AC17 | PASS | `git log main --since 2026-04-19 --until 2026-04-21` -> `commits_on_main=0` for Spore, IC, and PM; no exception trailers found | - |
| AC18 | PASS | `tmp/repo-topology-decision.md` exists and contains `adopted: ratify-3-repo-with-scale-guardrail` | - |
| AC19 | PENDING-9D | Methodology Phase 9 row remains `PENDING`; no merge SHAs recorded yet | Record all three Phase 9 merge SHAs in the methodology doc during merge execution |
| AC20 | PASS | `tmp/wider-scope-carveout-log.md` exists with `carveout_rows=3`; rows match the three documented wider-scope rounds | - |
| AC21 | PASS | Retroactive Phase 1 check at `edf0caa`: methodology has all 11 required sections; `CLAUDE.md` shows `Status: corpus review v1 in progress`; plan snapshot commit exists (`6390b26`) | - |

## Detailed notes

### AC2

The file-existence subcheck passes cleanly. The plan comment references `scripts/ac2-verify.sh`, but that script is absent in the current tree, so only the explicit `test -s` portion was rerun mechanically.

### AC3

This is a real mechanical failure, not just verifier drift.

- The AC3 Python check fails exactly as written once instrumented for output: `full=0 half=0 limited=0 weighted=0.0 floor=100`.
- The current corpus also contains 19 `research-*.md` files, not the declared `17 + 1 capstone = 18` set. The extra file is `research-capstone-review.md`.
- The current research corpus is narrative markdown, not serialized `R-claim` bullets matching the plan regex, so the weighted-count portion of the verifier has no matching inputs.

### AC5

The plan's literal script is stale in two ways:

- it expects `F\d+` rather than the current `F-###` IDs
- it raw-greps whole proposal files, which double-counts dependency mentions such as `F-029` inside the topology proposal

Using the actual assignment surfaces instead of raw mention-counting, the 1:1 join passes:

- canon-review findings join through the findings table's `round-assignment`
- foundational-reframing findings join through proposal frontmatter `covers: [...]`
- editorial finding `F-024` joins through [editorial-pass-close.md](/Users/darrenzal/projects/spore/tmp/editorial-pass-close.md:1)

Result: `rows=39`, `bad=0`.

### AC6

The underlying protocol/evidence checks pass, but the cooling-off rule fails for all 8 proposals and is covered only by the documented solo-operator override.

Supporting artifacts:

- [foundational-reframing-protocol-v1.md](/Users/darrenzal/projects/spore/docs/research/planning/foundational-reframing-protocol-v1.md:8) records the Phase 6b two-round adversarial bakeoff in frontmatter.
- [P6b-round-1-review.md](/Users/darrenzal/projects/spore/tmp/phase-6/P6b-round-1-review.md:1) and [P6b-round-2-review.md](/Users/darrenzal/projects/spore/tmp/phase-6/P6b-round-2-review.md:1) record the two rounds.
- [solo-operator-cooling-off-override.md](/Users/darrenzal/projects/spore/tmp/phase-6/solo-operator-cooling-off-override.md:1) explicitly waives FR-13 / FR-20.

Per-proposal audit results:

- `reframing-frozen-vocabulary-role`: `sources=6`, `public=6`, `cooling_days=0`, `consult=True`
- `reframing-graph-primitive-unification`: `sources=7`, `public=7`, `cooling_days=0`, `consult=True`
- `reframing-learning-field-host-elevation`: `sources=6`, `public=5`, `cooling_days=0`, `consult=True`
- `reframing-moratorium-formalization`: `sources=9`, `public=9`, `cooling_days=0`, `consult=True`
- `reframing-pm-canon-scope`: `sources=12`, `public=12`, `cooling_days=0`, `consult=True`
- `reframing-protocol-audience-declaration`: `sources=7`, `public=7`, `cooling_days=0`, `consult=True`
- `reframing-protocol-governance-hardening`: `sources=9`, `public=9`, `cooling_days=0`, `consult=True`
- `reframing-repo-topology-trunk`: `sources=10`, `public=8`, `cooling_days=0`, `consult=True`

### AC7

AC7 passes on the underlying criterion, but two verifier surfaces have drifted.

- The plan's literal validator check expects exactly 7 errors and greps `^ERROR`. Current validator output prefixes errors with spaces, so the literal grep returns `0`. Counting actual error lines gives `9`.
- [phase-7-close.md](/Users/darrenzal/projects/spore/tmp/phase-7/phase-7-close.md:7) records the rebased baseline explicitly: `Validator baseline held at 9 errors / 30 warnings throughout - zero regressions across any round.`
- `scripts/check-session-atomicity.sh` is absent, so session-atomicity was verified manually from [phase-7-close.md](/Users/darrenzal/projects/spore/tmp/phase-7/phase-7-close.md:61) and [prototype-lessons.md](/Users/darrenzal/projects/spore/tmp/phase-7/prototype-lessons.md:20). All recorded cross-repo windows are well inside the 35-minute tolerance.

### AC9

This remains a genuine post-merge check. No `doc-check` helper is present in the current `scripts/` tree, so the fallback path will need to be used unless a doc-check tool is restored before 9e.

### AC10

The harvest doc does not yet exist. This is expected to land in Phase 9b.

### AC11

This remains a Phase 9e close-out item even if parts of the cleanup appear to have happened early in Spore's current working tree. The acceptance criterion should not be treated as complete until the merge close-out explicitly records moratorium lift across the repo set.

### AC12

This is the most substantial audit failure in the sweep.

- [corpus-foundational-review-methodology.md](/Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:160) records executed phases `0-8`.
- `tmp/executed-phases.yaml` does not exist.
- Local tags in all 3 repos exist only for `corpus-review-phase-5-boundary` through `corpus-review-phase-8-boundary`.
- Remote `origin` also has only phase `5-8` tags in all 3 repos.
- `~/.claude/snapshots/` contains only `corpus-review-phase-5.tar.gz`, `corpus-review-phase-7.tar.gz`, and `corpus-review-phase-8.tar.gz`; no `phase-*-<repo>.bundle` files were found.

AC12 therefore fails both on machine-readable manifest absence and on missing boundary evidence for earlier phases.

### AC14

`tmp/findings-doc-changelog.md` is absent, so this was verified manually.

- [triage-approval-2026-04-20.md](/Users/darrenzal/projects/spore/tmp/triage-approval-2026-04-20.md:1) approves findings-doc blob `e278ae2`.
- Blob-to-current diff shows revision 5 added the `status` column and populated resolved values, plus non-material cleanups in the detailed YAML section.
- Under the plan's material-change rule, no post-approval change was found that adds a finding, raises severity, changes the approved index-track assignments, expands corpus-location scope, or adds a new prior-collision.

### AC16

The no-leak portions look clean, but the explicit manual audit log is missing.

- `~/Documents/spore-corpus-review-snapshots/.registry` is absent, so the hash-search subloop is skipped.
- `tmp/personal-snapshots.md` is not tracked.
- No `personal-snapshot`-tagged research files were found by the quick corpus scan (`snapshot_tagged_files=0`).
- The plan's scripted verifier still requires `tmp/fair-use-spot-check.md`, and that file is absent.

This should be easy to close in 9b by writing a zero-sample fair-use memo if zero eligible snapshot-tagged claims is the intended final state.

### AC19

This is correctly pending merge execution. The methodology Phase 9 boundary row still reads `PENDING`, so no merge SHAs can be verified yet.

## Recommendations for Phase 9b

1. Author `docs/research/planning/corpus-foundational-review-protocol.md` with the required harvest rules and commit it as the AC10 artifact.
2. Resolve AC3 explicitly. The clean options are:
   - backfill Phase 3 outputs into the countable R-claim format the plan verifier expects and trim the research set back to the declared 18 files
   - or amend / waive AC3 with a committed rationale that matches the current narrative research corpus shape
3. Backfill AC12 evidence:
   - create `tmp/executed-phases.yaml`
   - recreate or bundle phase-boundary evidence for phases `0-4`
   - add missing phase tarballs for phases `0-4` and `6`
4. Add `tmp/fair-use-spot-check.md` for AC16, even if the conclusion is "0 eligible personal-snapshot-tagged claims; no sample required."
5. Optional but recommended: backfill verifier-drift audit notes or helper scripts for AC2, AC5, AC7, and AC13 so later close-out does not rely on ad hoc interpretation again.
