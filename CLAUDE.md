# CLAUDE.md

This repo already has broad project documentation in `README.md` and `docs/`, but the active workstream right now is the Johar corpus program. If resuming that work, start here instead of reconstructing session history.

## Active Workstream: Johar Corpus Program

Primary repo-side index:
- [docs/research/planning/johar-program-index.md](/Users/darrenzal/projects/spore/docs/research/planning/johar-program-index.md)

Master intake plan outside repo:
- `/Users/darrenzal/.claude/plans/johar-corpus-intake-v1.md`

## Current Status

**Date:** 2026-04-18
**Status:** corpus review v1 in progress. Canon edits on main are suspended during Phases 2–5 (diagnostic). Work happens on corpus-review/v1 branch.

**What's Done:**
- **Canon review v1 from P2P wiki intake** (2026-04-18): 10 decisions across Tier A+B+C, 23 ADRs landed across Spore (8) + IC (8) + PM (7), 7 shared framing notes in `docs/research/connections/canon-framing-*.md`. Three held-open tensions (DH-PM-1 accounting-dependence, DH-IC-1 pluriversal-incommensurability, IC-0008 autopoiesis) processed without collapse. Four structural insights (reproduction-primacy, boundary-theory-unifier, three-layer-coordination-stack, decentralization-myth-bundle) landed as coordinated edits. Per-project Tier C queues processed top 3–5 items each. Protocol v2 harvested with 29 rules (11 semantic R-1..R-11 + 7 script fixes + 5 methodology + 4 workflow + 2 cross-ref) at `docs/research/planning/canon-review-protocol.md` (commit `1e0389d`). Zero partial-drift, zero rollback, zero slug reuse, Spore validator baseline held at 7 errors throughout. Moratorium permanently lifted. Plan: `~/.claude/plans/canon-review-v1.md` (closed). Memory: `~/.claude/projects/-Users-darrenzal-projects-spore/memory/project_canon_review_v1.md`.
- **P2P Foundation wiki intake — Pass 1 + Pass 2** (2026-04-15–17): 40 bridge notes across Spore/IC/PM, ~432 wiki-anchored source claims, ~200 pages cited (of 41K). Pass 1 (20 notes, 256 claims, 129 pages) covered commons governance, mutual credit, knowledge commons, federation. Pass 2 (20 notes, 176 claims, ~71 new pages) covered care/feminist economics, indigenous/pluriversal, autopoiesis/4E, cosmo-local, solidarity economy, REA/ValueFlows, commons law, platform cooperativism, plus 7 opposition notes (FairCoin, decentralization-theater, digital-labor, Wikipedia-governance, openwashing, cooperative-degeneration, citation-cartel). Four structural insights from Pass 2: reproduction primacy, boundary-theory unification, three-layer coordination stack, decentralization-myth bundle. Opposition density corrected from 11% (Pass 1) to 35% (Pass 2). Two capstone syntheses: `spore.connection.p2p-wiki-post-intake-synthesis` (commit `82c2ae7`) and `spore.connection.p2p-wiki-pass-2-capstone-synthesis` (commit `3c4d4e5`). Intake protocol v1 harvested at `docs/research/planning/learning-field-intake-protocol.md`. Frozen concepts yaml v2 (38 slugs). PM registered in projection script (koi-processor `7e11745c`). Plan: `~/.claude/plans/sequential-questing-sparrow.md` (closed).
- **spore.lexicon resolved** (2026-04-10): Removed from 15 files. Validator: 0 errors, 10 warnings (expected).
- **Evidence capture checklist** (2026-04-10): Two paths at `docs/research/evidence/templates/commitment-capture-checklist.md`.
- **Tier-0 Adoption Kit** (2026-04-10): `validate_spec_dag.py`, `quickstart.md`, CI workflow. 96 governed docs validated.
- **Poietic Match Phase 0 implementation** (2026-04-11): All 5 steps complete. Commit `a9d8ceb`.
- **Johar program** (complete, maintenance): All 6 themes closed, 5 enacted, evidence stack scaffolded.

**What's Left:**
1. **PM Phase 0 — set up the database**: `createdb poietic_match && psql poietic_match -f migrations/001_initial.sql`. Then run the API: `uvicorn pm.api:app`. Full e2e test with `pm publish` + `pm matches`.
2. **PM Phase 0 — HNSW index** (after data loaded): `CREATE INDEX idx_pm_intents_embedding ON intents USING hnsw (embedding vector_cosine_ops);`
3. **Evidence program: first real commitment record** — Blocked until Victoria workshop (May-June 2026). Capture checklist ready.
4. **Sheaf experiment** (time-boxed) — consistency diagnostic on spec DAG. Deferred.
5. **Canon review v2 (if Pass 3 fires or second round executes)** — route through protocol v2 (not v1); triggers listed in protocol §Triggers for canon-review v3.

## Immediate Next Step

**PM Phase 0 database setup.** Canon review v1 closed; PM Phase 0 implementation landed at commit `a9d8ceb` but database has not been initialized.

```bash
cd /Users/darrenzal/projects/poietic-match
createdb poietic_match
psql poietic_match -f migrations/001_initial.sql
.venv/bin/uvicorn pm.api:app &
.venv/bin/pm publish --type offer --subject "20 hours of Garry Oak restoration, Saanich Peninsula" --agent-id "darren-001" --domain restoration
.venv/bin/pm publish --type need --subject "Restoration ecologist for Saanich Peninsula native habitat project" --agent-id "community-saanich-001" --domain restoration
.venv/bin/pm matches <offer-id> --agent-id "darren-001"
```

After data loads, add HNSW index: `CREATE INDEX idx_pm_intents_embedding ON intents USING hnsw (embedding vector_cosine_ops);`

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
