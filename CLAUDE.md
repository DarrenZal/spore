# CLAUDE.md

This repo already has broad project documentation in `README.md` and `docs/`, but the active workstream right now is the Johar corpus program. If resuming that work, start here instead of reconstructing session history.

## Active Workstream: Johar Corpus Program

Primary repo-side index:
- [docs/research/planning/johar-program-index.md](/Users/darrenzal/projects/spore/docs/research/planning/johar-program-index.md)

Master intake plan outside repo:
- `/Users/darrenzal/.claude/plans/johar-corpus-intake-v1.md`

## Current Status

**Date:** 2026-04-21
**Status:** Corpus-foundational-review-v1 closed 2026-04-21 — **39/39 findings resolved** (Phase 7 landed 38/39; Phase 8 editorial landed F-024 for 39/39); see `docs/research/planning/corpus-foundational-review-protocol.md` for method; MEMORY has `project_corpus_foundational_review_v1.md`. Canon review v1 closed 2026-04-18 (23 ADRs, protocol v2 harvested). PM Phase 0 DB + HNSW + e2e verified 2026-04-18. Jeff call Thu Apr 23 12pm–1pm PDT. Next-session focus is Jeff call prep + post-call cadence.

**What's Done:**
- **Corpus foundational review v1 closed** (2026-04-21): 9-phase plan closed after diagnostic (Phases 2–5) + Phase 7 canon-review-v2 rounds + Phase 8 editorial pass + Phase 9 merges. Canon edits landed on `main` in Spore (merge `c5848d1`), IC (`2c90612`), PM (`9eecbae`) within a sub-minute window. Zero partial-drift, zero rollback, validator baseline held at 9 errors / 30 warnings (documented pre-existing bridge-note dangling-refs). Harvest at `docs/research/planning/corpus-foundational-review-protocol.md` with 20 CFR-N rules. Plan: `~/.claude/plans/corpus-foundational-review-v1.md` (CLOSED). Moratorium lifted; `corpus-review/v1` branches deleted.
- **Corpus foundational review v1 close-state harvested** (2026-04-21): **39/39 findings resolved**, 30 ADRs landed across Spore/IC/PM, 2 new protocols created, three-repo topology ratified, and the harvest doc committed at `docs/research/planning/corpus-foundational-review-protocol.md`.
- **Jeff re-engagement + call scheduled** (2026-04-19): Jeff replied to Apr 13 compose letter — *"Yus to all that, let's get on a call"* — proposing regular collaboration cadence. Call booked Thu Apr 23, 2026 12pm–1pm PDT via schedule.jeffemmett.com. Call-brief at `~/Documents/Notes/Meetings/People/2026-04-23 Jeff Emmett.md`. Canon-review-v1 evolved grammar during Jeff's silence; Move 0 composition-test now runs against post-canon-review grammar, not Apr-13-compose-letter grammar (the bet from lifting the moratorium early on 2026-04-16).
- **Full-arc retrospective written** (2026-04-19): `docs/research/connections/wiki-intake-canon-review-retrospective.md` — programmatic full-arc view covering intake + canon-review as one whole (neither capstone alone covered this). Citable by collaborators (Jeff).
- **PM Phase 0 DB + HNSW + e2e verified** (2026-04-18): database initialized (was previously provisioned 2026-04-11, idempotent re-run), API healthy, `pm matches` e2e verified at semantic score 0.715 / overall 0.808, HNSW index created on embeddings (kicks in at scale — EXPLAIN correctly Seq-Scans the 3-row smoke-test set). Poly ILIKE fallback exercised during intermittent embed-service contention.
- **Canon review v1 from P2P wiki intake** (2026-04-18): 10 decisions across Tier A+B+C, 23 ADRs landed across Spore (8) + IC (8) + PM (7), 7 shared framing notes in `docs/research/connections/canon-framing-*.md`. Three held-open tensions (DH-PM-1 accounting-dependence, DH-IC-1 pluriversal-incommensurability, IC-0008 autopoiesis) processed without collapse. Four structural insights (reproduction-primacy, boundary-theory-unifier, three-layer-coordination-stack, decentralization-myth-bundle) landed as coordinated edits. Per-project Tier C queues processed top 3–5 items each. Protocol v2 harvested with 29 rules (11 semantic R-1..R-11 + 7 script fixes + 5 methodology + 4 workflow + 2 cross-ref) at `docs/research/planning/canon-review-protocol.md` (commit `1e0389d`). Zero partial-drift, zero rollback, zero slug reuse, Spore validator baseline held at 7 errors throughout. Moratorium permanently lifted. Plan: `~/.claude/plans/canon-review-v1.md` (closed). Memory: `~/.claude/projects/-Users-darrenzal-projects-spore/memory/project_canon_review_v1.md`.
- **P2P Foundation wiki intake — Pass 1 + Pass 2** (2026-04-15–17): 40 bridge notes across Spore/IC/PM, ~432 wiki-anchored source claims, ~200 pages cited (of 41K). Pass 1 (20 notes, 256 claims, 129 pages) covered commons governance, mutual credit, knowledge commons, federation. Pass 2 (20 notes, 176 claims, ~71 new pages) covered care/feminist economics, indigenous/pluriversal, autopoiesis/4E, cosmo-local, solidarity economy, REA/ValueFlows, commons law, platform cooperativism, plus 7 opposition notes (FairCoin, decentralization-theater, digital-labor, Wikipedia-governance, openwashing, cooperative-degeneration, citation-cartel). Four structural insights from Pass 2: reproduction primacy, boundary-theory unification, three-layer coordination stack, decentralization-myth bundle. Opposition density corrected from 11% (Pass 1) to 35% (Pass 2). Two capstone syntheses: `spore.connection.p2p-wiki-post-intake-synthesis` (commit `82c2ae7`) and `spore.connection.p2p-wiki-pass-2-capstone-synthesis` (commit `3c4d4e5`). Intake protocol v1 harvested at `docs/research/planning/learning-field-intake-protocol.md`. Frozen concepts yaml v2 (38 slugs). PM registered in projection script (koi-processor `7e11745c`). Plan: `~/.claude/plans/sequential-questing-sparrow.md` (closed).
- **spore.lexicon resolved** (2026-04-10): Removed from 15 files. Validator: 0 errors, 10 warnings (expected).
- **Evidence capture checklist** (2026-04-10): Two paths at `docs/research/evidence/templates/commitment-capture-checklist.md`.
- **Tier-0 Adoption Kit** (2026-04-10): `validate_spec_dag.py`, `quickstart.md`, CI workflow. 96 governed docs validated.
- **Poietic Match Phase 0 implementation** (2026-04-11): All 5 steps complete. Commit `a9d8ceb`.
- **Johar program** (complete, maintenance): All 6 themes closed, 5 enacted, evidence stack scaffolded.

**What's Left:**
1. **Jeff call Thu Apr 23 12pm–1pm PDT** — call-brief at `~/Documents/Notes/Meetings/People/2026-04-23 Jeff Emmett.md`. Cadence agreement is primary ask; three held-open tensions + composition-test framing are secondary. Retrospective link is the right depth if Jeff wants technical context.
2. **Post-Jeff-call follow-up** — log outcomes, cadence decision, any new triggers in `project_canon_review_v1.md` memory + CLAUDE.md. If Move 0 composition-test starts, authors new plan (not canon-review v2 unless Pass 3 triggers also fire).
3. **Evidence program: first real commitment record** — Blocked until Victoria workshop (May–June 2026). Capture checklist ready at `docs/research/evidence/templates/commitment-capture-checklist.md`.
4. **Sheaf experiment** (time-boxed) — consistency diagnostic on spec DAG. Deferred.
5. **Canon review v2** (if Pass 3 fires or second round executes) — route through protocol v2 (not v1); triggers listed in protocol §Triggers for canon-review v3. Pass 3 cadence clock runs to 2026-10-17; weak triggers currently.

## Parking lot from canon-review-v1

- (Impact: M) (Effort: M) — v3 frozen-vocab admission round for 33 bridge-note slug-deferred TODOs
- (Impact: L) (Effort: M) — AC9 dangling-ref cleanup on main (Spore `johar-metacognition-stack`, PM `dating-app-implementation`)
- (Impact: M) (Effort: L) — foundational-reframing-protocol v2 draft (FR-13.1 solo-operator-exception rule)
- (Impact: M) (Effort: L) — canon-review-protocol v4 draft (consolidates §12-14 learnings)
- (Impact: M) (Effort: L) — corpus-foundational-review-protocol v2 draft (tightens AC3/AC12, codifies per-slug-branch pattern)
- (Impact: M) (Effort: S) — `scripts/validate-rclaim-source.py` (author the referenced-but-missing integrity checker)
- (Impact: M) (Effort: M) — `scripts/close-phase.sh` automation (tag + tarball + executed-phases.yaml triplet)

## Immediate Next Step

**Prep for Jeff call (Thu Apr 23 12pm–1pm PDT).** Call-brief already authored at `~/Documents/Notes/Meetings/People/2026-04-23 Jeff Emmett.md`:
- §1 canon-since-Apr-13 summary (what Jeff needs to know has changed)
- §2 three held-open tensions as conversation-ready questions for Jeff
- §3 questions to ask Jeff (cadence, test-target, held-tension positions)
- §4 what NOT to do on the call
- §5 operator-internal call outcomes targeted

Full technical depth for Jeff if he wants it: `docs/research/connections/wiki-intake-canon-review-retrospective.md`. That note is the complete full-arc view; the brief is the 1-page operating layer.

**After the call**: update `project_canon_review_v1.md` memory + CLAUDE.md "What's Done" with cadence outcome + any new triggers. Fill in the Notes / Summary / Key Points / Action Items / Decisions sections of the meeting note (the `/process-note --apply --propagate --create-entities --enrich` flow handles this automatically per global meeting-notes skill).

## Read Order For Resuming Johar Work

1. [docs/research/planning/johar-program-index.md](/Users/darrenzal/projects/spore/docs/research/planning/johar-program-index.md)
2. [docs/research/planning/program-index-triage.md](/Users/darrenzal/projects/spore/docs/research/planning/program-index-triage.md)
3. [docs/research/planning/first-real-commitment-record.md](/Users/darrenzal/projects/spore/docs/research/planning/first-real-commitment-record.md)
4. [docs/research/planning/bridge-note-cleanup.md](/Users/darrenzal/projects/spore/docs/research/planning/bridge-note-cleanup.md)
5. [docs/research/planning/comparative-note-convention.md](/Users/darrenzal/projects/spore/docs/research/planning/comparative-note-convention.md)

If deeper context is needed, continue through the planning trail listed in the Johar program index.

## Main Working Rules For This Program

- Johar cross-theme recurrence is not independent evidence.
- Keep canon/foundation language distinct from research provenance and planning scaffolding.
- Comparative notes carry multi-tradition support and do not use the disposition system.
- Bridge notes remain source-specific.
- Local Octo hackathon/demo commitments are not local production evidence.
- No active deferred-family work remains; boundary-making resolved into a narrowed foundation principle.
- Do not silently reintroduce discarded formal apparatus (especially Markov blankets / conditional-independence gradients) into active Spore language.

## Realistic Next Johar Moves

1. First real commitment capture when a true local operational source exists.
2. Comparative-note expansion if another canon/foundation target accumulates enough independent support.
3. Otherwise, leave the Johar program in maintenance state and work on a different stream.

## If The Task Is Not Johar

Start with:
- [README.md](/Users/darrenzal/projects/spore/README.md)
- [docs/project-vision.md](/Users/darrenzal/projects/spore/docs/project-vision.md)
- [docs/roadmap.md](/Users/darrenzal/projects/spore/docs/roadmap.md)

But for the current active work, prefer the Johar planning stack above.
