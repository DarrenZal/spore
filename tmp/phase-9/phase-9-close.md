---
phase: 9
close_date: 2026-04-21
plan: corpus-foundational-review-v1
---

# Phase 9 close — plan corpus-foundational-review-v1 complete

## Summary

Corpus-foundational-review-v1 plan closed 2026-04-21, 54 hours after Phase 0
opened at 2026-04-19T16:21:20 (plan Phase 0 boundary commit `6390b26` on
Spore). 39 findings surfaced across diagnostic Phases 2–4; all resolved
through a combination of canon-review-v2 rounds (Phase 7), foundational
reframing proposals (Phase 6), and one editorial pass (Phase 8). Phase 9
merged `corpus-review/v1` into `main` on all three repos within a 39-second
window (well inside the plan's 24-hour Phase 9.1 constraint).

Canon now lives on `main` in Spore, Intelligence Commons, and Poietic Match.
Moratorium lifted. Branches deleted. Protocol v1 harvested.

## Final state

- **Canon edits landed on main** (Phase 9 merge commits):
  - spore: `c5848d14a2261775cbfc3c568a2ba49b50303849` (PR #2)
  - intelligence-commons: `2c906126c8624d09f8ce1ffd7bb705606c5a84e0` (PR #1)
  - poietic-match: `9eecbaea3af59079f2f0dc6ddae0999c4f2082e2` (PR #1)
- **24-hour merge window**: satisfied (elapsed ~39 seconds)
- **Validator baseline preserved**: Spore held at 9 errors / 30 warnings
  throughout Phases 2–9 (established at Phase 7 close; previously 7 errors
  pre-plan, drift documented in Phase 7 close memo as acceptable within-plan
  baseline growth tied to new `ic.*` / `pm.*` / `spec:*` doc_id bridge-note
  authoring rules). No post-merge regression.
- **Moratorium lifted**:
  - Spore `CLAUDE.md` status line restored + corpus-review-v1 close entry
    added under `**What's Done:**` (commit `d94f2fc`).
  - IC `CLAUDE.md` removed (file had been pointer-only per Phase 1; removal
    restores pre-plan baseline; commit `a6c2c68` on IC main).
  - PM `CLAUDE.md` pointer line removed, substantive project content
    preserved (commit `a06ee98` on PM main).
- **corpus-review/v1 branches deleted** on all 3 repos (local + remote).
  Branch deletion is safe — all phase-boundary tags are independent of the
  branch and all remain resolvable.
- **Phase-boundary tags preserved**: 10 tags per repo (phases 0–9), all
  pushed to origin.
- **Tarballs preserved**: 10 tarballs at
  `~/.claude/snapshots/corpus-review-phase-{0..9}.tar.gz`.

## Phase 9e close-out commits on Spore main

| Commit | Subject |
|--------|---------|
| `d94f2fc` | Phase 9e — lift moratorium on Spore (CLAUDE.md status restored) |
| `a2da50f` | Phase 9e — executed-phases.yaml updated with phase 9 close |
| `7e73fe0` | Phase 9d — methodology boundaries table updated with merge SHAs (cherry-picked) |
| `51fe228` | Phase 9d — merge completion record (AC19 artifact) (cherry-picked) |
| `5ab8735` | Phase 9e — final AC sweep (plan close) |

IC and PM main received one Phase 9e commit each (moratorium pointer removal).

## Acceptance criteria final matrix

See `tmp/phase-9/ac-sweep-results-plan-close.md` for the full matrix. Summary:

- **19 PASS** — AC1, AC2, AC3, AC4, AC5, AC7, AC8, AC10, AC11, AC12, AC13, AC14, AC15, AC16, AC17, AC18, AC19, AC20, AC21
- **1 PASS-WITH-BASELINE-CAVEAT** — AC9 (post-merge dangling ref count = pre-merge baseline of 2; no regression; both refs flagged in Parking Lot)
- **1 WAIVED-WITH-RATIONALE** — AC6 (solo-operator cooling-off override; discipline captured as CFR-14 in harvested protocol)

## Harvest

Protocol v1 at `docs/research/planning/corpus-foundational-review-protocol.md`
— **20 CFR-N rules** distilled from plan execution, covering diagnostic
scoping, evidence-model adaptations (standard/meta-corpus/topology),
round-close integrity checks, cross-repo merge discipline, and the
solo-operator cooling-off exception. Intended as the governing document
for future corpus-review-v2/v3 rounds.

Method-lessons worth carrying forward:

- **Parallel-execution discipline**: Phase 7's 19-unit queue ran as a mix of
  canon-review-v2 rounds and reframing-authorized ADR bundles without partial
  drift. Session-atomicity stayed within 35-minute windows across 10+ rounds.
- **Validator-baseline-as-held-constant**: locking in the Phase 7 baseline
  (9 errors / 30 warnings) prevented Phase 8 editorial drift from leaking
  into regression-check territory.
- **Solo-operator cooling-off exception**: the original protocol demanded
  7-day cooling-off between reframing-proposal-commit and execution.
  Unreachable for a solo operator working in 2-day bursts. CFR-14 makes the
  exception first-class and declares which evidence reopens it.
- **AC sweep as ratchet**: re-running the 21-AC sweep at each phase boundary
  caught dangling-ref issues before merge rather than as post-hoc discovery.

## Parking lot for future rounds

1. **Resolve baseline dangling depends_on** (2 refs):
   - `spore.connection.johar-metacognition-stack` →
     `spore.connection.johar-sheaf-theory-formalization` (target never
     authored). Decision needed: drop the line or author the target doc.
   - `pm.research.dating-app-implementation` →
     `pm.research.dating-compatibility` (target never authored, pre-plan).
     Decision needed: drop the line or author the target doc.
   - Both qualify as editorial fixes, not corpus-review-v2-class findings.
     Route through a bridge-note-cleanup mini-pass when convenient.

2. **v3 frozen-vocab admission round** for 33 bridge-note slug-deferred claims
   (Phase 7.12 residual). Triggers the `ADR r_claim_source` extension debate
   — whether to promote `meta:*` / `topology:*` / `candidate:*` identifier
   families from plan-scoped extensions (see plan §Phase 7 extensions) into
   canon-review-protocol v3.

3. **Foundational-reframing-protocol v2**: harvest CFR-14 solo-operator
   cooling-off exception into first-class protocol language. Current
   override memo at `tmp/phase-6/solo-operator-cooling-off-override.md` is
   plan-scoped; v2 should codify the discipline.

4. **Canon-review-protocol v4**: incorporate §14 vocabulary governance
   lessons from Phase 7 rounds 12–15. Candidate rules include target-
   allowlist extensions (meta/topology/candidate families), wider-scope
   carve-out formal admission criteria, and the r_claim_source primary-
   position rule (currently plan-scoped).

5. **AC9 tooling**: author `scripts/doc-check-fallback.sh` so AC9 runs as a
   real scripted check rather than per-repo manual inline scans. Should wrap
   `validate_spec_dag.py` (Spore) + equivalent scripts for IC and PM.

## Plan: CLOSED

Corpus-foundational-review-v1 plan is formally closed. Future reviews proceed
under the corpus-foundational-review-protocol v1 harvested from this
execution (`docs/research/planning/corpus-foundational-review-protocol.md`).

Next review would be corpus-foundational-review-v2 triggered by any of:

- Accumulated canon drift beyond canon-review-v2 scope (as judged by
  operator reading of current canon vs. last corpus-review-v1 close state).
- Structural changes to the corpus layer model (vision / foundations / 
  grammar / protocols / ADRs) requiring re-layering.
- Repo-topology pressure (scale to 10x contributors, multiple bioregions,
  federation beyond the current 3-repo set).
- Protocol corpus growth warranting a meta-corpus re-audit.
