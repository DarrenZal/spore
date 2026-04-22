# CLAUDE.md

This repo already has broad project documentation in `README.md` and `docs/`, but the active workstream right now is the Johar corpus program. If resuming that work, start here instead of reconstructing session history.

## Active Workstream: Johar Corpus Program

Primary repo-side index:
- [docs/research/planning/johar-program-index.md](/Users/darrenzal/projects/spore/docs/research/planning/johar-program-index.md)

Master intake plan outside repo:
- `/Users/darrenzal/.claude/plans/johar-corpus-intake-v1.md`

## Current Status

**Date:** 2026-04-22
**Status:** Canon-rebuild Phase 3 complete — Core Thesis rewritten to surface actual CFR-v1-blessed 7-primitive roster (3 structural: field/holon/membrane + 4 verbs: intent/commitment/evidence/signal). ADR-0044 landed on main. Phase 3b (capstone §3 gap-closure for Care/Norms/Power/Reproduction/Identity) deferred per Path-2-split. Jeff call tomorrow Thu Apr 23 12pm–1pm PDT — call-brief needs §1 refresh for Phase-3 change. Next focus: Jeff call prep + Phase 3b planning.
Method protocols (canon-review, foundational-reframing, corpus-foundational-review, and related review machinery) currently live at `docs/research/planning/` in Spore; future v2+ revisions migrate to `flowcoding/docs/methods/` per Flow Coding FC-ADR-0002's attrition-based convention.

**What's Done:**
- **Flow Coding methodology-host declarative** (2026-04-21): FC-ADR-0001 (identity + scope) + FC-ADR-0002 (methodology migration convention) ratified; flowcoding now has its own canon structure (`project-vision.md` extended with Methodology Host section; `CLAUDE.md`, `ROADMAP.md`, `docs/methods/`, `docs/research/canon-decisions/` created). 3 v-next protocol drafts (foundational-reframing v2, canon-review v4, corpus-foundational-review v2) relocated from darren-workflow ROADMAP to flowcoding ROADMAP. Plan: `~/.claude/plans/flowcoding-methodology-host-declarative.md` (CLOSED). All 8 ACs PASS, 7m execution.
- **Corpus-review-learnings-integration complete** (2026-04-21): 6 memory entries + Canon Review Patterns subsection in global CLAUDE.md + `/comparative-intake` warning-only guards + new `canon-review` plugin at `~/projects/canon-review/` (private GitHub repo, 3 skills: `/corpus-review-round`, `/foundational-reframing`, `/research-synthesis`). Plugin activated via `~/.claude/settings.json` + `installed_plugins.json` registration. Plan: `~/.claude/plans/corpus-review-learnings-integration.md` (CLOSED). 7 ACs PASS, ~30m total.
- **Corpus foundational review v1 closed** (2026-04-21): 9-phase plan, **39/39 findings resolved**, 30 ADRs across Spore/IC/PM, 2 new protocols (moratorium, learning-field), 3-repo topology ratified with scale guardrail. Canon merged on main in Spore (`c5848d1`), IC (`2c90612`), PM (`9eecbae`) within a sub-minute window. Zero rollback. Validator held 9/30 throughout. Harvest at `docs/research/planning/corpus-foundational-review-protocol.md` (20 CFR-N rules). Moratorium lifted.
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
1. **Canon-review Round 2 complete (2026-04-22)** — ADR-0031 (ecology-cycle scope conditioning, 2 files) + ADR-0032 (Core Thesis primitives scope conditioning) + ADR-0033 (dual-axis pattern-recursion clarification) landed on main. Universality-overreach cluster addressed across 3 canon files (project-vision.md L23+L87, constitutional-artifacts-and-graph-projections.md L40, holonic-network-architecture.md L73). Validator held at 9/30 baseline. Plan: `~/.claude/plans/canon-review-r2-universality-language.md` (CLOSED). Commits: `1d02cb2`/`f8ca0bd` (ADR-0031), `4269f0a`/`84f4422` (ADR-0032), `c4a02c7`/`322203a` (ADR-0033). Session-atomic window: 186s. Addresses CC-02 + CC-08 + CC-09 from adversarial critique.
2. **Canon-review Round 1 complete (2026-04-22)** — ADR-0029 (governance-memory framing cleanup) + ADR-0030 (adoption-section restructure). Concepts-p2p-wiki bumped v2→v3. Plan: `~/.claude/plans/canon-review-r1-adoption-governance-memory.md` (CLOSED). Addressed CC-01 + CC-04 + CC-05.
3. **Canon-review Round 3 complete (2026-04-22)** — ADR-0034 (interop principles/mechanisms split) landed on main. Restructured `project-vision.md:L148-L159` "Common Core, Local Variation" section to explicitly separate (a) principles (consent, provenance, forkability, local sovereignty) from (b) mechanisms Spore currently uses (RIDs, envelope formats, provenance rules, translation mappings, declared profiles, consent semantics). Added conditioning: smaller/higher-trust federations may realise the same principles through different mechanisms. Commits: `07cea6e`/`d5c1cf2`. Validator held at 9/30. Addresses CC-03.
4. **Canon-review Round 4 complete (2026-04-22)** — ADR-0035 (vision-as-commitment-subtype, CC-06) + ADR-0036 (graph-projections-tiering-and-structure, CC-07) + ADR-0037 (node-coherence-operationalisation, CC-10) + ADR-0038 (bioregion-as-holon-scope-reframe, CC-11) + ADR-0039 (inspirations-integration-depth-split, CC-12) + ADR-0040 (semilattice-citation-precision, CC-13) landed on main. Six residual findings addressed across 4 canon files (project-vision.md, constitutional-artifacts-and-graph-projections.md, mycorrhizal-federation-protocol.md, relational-agency-and-holons.md). Session-atomic window: 275s. Validator held 9/30.
5. **Adversarial critique post-mortem**: Of 14 findings, **13 closed** via ADRs 0029-0040 across Rounds 1-4. CC-14 (S3 instance-model table annotation) remains as a reject — cosmetic issue, not worth canon-review ceremony. Findings doc persists at `/Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md` as audit trail. Adversarial critique cycle complete.
6. **Canon rebuild Phase 1 + Phase 2a complete (2026-04-22)** — Phase 1 coherence-and-falsifiability audit (Claude Opus 4.7 fresh session) produced 31-claim disposition table at `tmp/canon-coherence-falsifiability-audit-2026-04-22.md`. Phase 2a executed 2 bundled ADRs + 1 new foundation doc: ADR-0041 (text-authoritative representation, C-09) + ADR-0042 (DAG-of-authority delete + Structural Legitimacy foundation-level promote, C-13 + C-08). New foundation doc: `docs/foundations/structural-legitimacy.md` (60 lines). Registration updates in canon-review-protocol §1 + docs/README.md. Session-atomic: 171s. Validator held 9/30. Commits: `0b98365`/`0a0353e` (ADR-0041), `4e1d3c4`/`1bbd478` (ADR-0042). Upstream: v2 audit at `tmp/canon-first-principles-audit-v2-2026-04-22.md`; Option E sequencing integrates Codex + Opus-4-7 second-opinions.
7. **Canon rebuild Phase 2b complete (2026-04-22)** — ADR-0043 federation-protocol-rename landed. `mycorrhizal-federation-protocol.md` → `federation-protocol.md` via git mv (history preserved); doc_id migrated `spore.mycorrhizal-federation-protocol` → `spore.federation-protocol`; H1 retitled; 5 canon-level cross-refs updated (project-vision, spore-instance-model, structural-legitimacy, README, canon-review-protocol §1); 21 downstream depends_on references migrated (metadata-only; body narrative preserved). Fungal aesthetic retained at project-identity layer via brief acknowledgment paragraph. Commits: `2d3b315`/`23a5dd3`. Validator held 9/30. Phase 1 C-20 closed.
8. **Canon rebuild Phase 3 complete (2026-04-22)** — ADR-0044 core-thesis-primitive-roster-alignment landed. Core Thesis rewritten to surface the actual CFR-v1-blessed 7-primitive roster (3 structural: field/holon/membrane + 4 verbs: intent/commitment/evidence/signal) in place of the out-of-sync "five primitives" framing. Coordination Ecology rewritten as 4-verb loop hosted by structural-primitive substrate; Self-Similarity section deleted; Coordination Scales opener softened. Parallel section in constitutional-artifacts-and-graph-projections.md rewritten with three-senses-of-commitment distinction + REA 40-year-split acknowledged inline. ADR-0032 superseded via prose; ADR-0035 companion-clarified. Commits: `4233ca3`/`624211e`. Session-atomic 178s. Validator held 9/30. Phase 1 C-01 + C-02 + C-03 + C-10 closed. **Key method-insight**: Phase 1 audit missed the CFR-v1 17-tradition capstone + 15 ADRs (0011-0028) that validate the actual roster; operator-prompted enumeration of `docs/research/corpus-review/` forced v2 rewrite (3-primitive → 7-primitive). Learning-membrane frame-lock memory re-confirmed.
9. **Canon rebuild Phase 3b + Phase 2c + Phase 4 pending** — Phase 3b: capstone §3 gap-closure (Care / Norms / Power / Reproduction / Identity; capstone §4 glossary-level refinements). Care is "most structurally important silence" per capstone; Norms is "most tradition-supported gap" (10/17); Power is "second-sharpest gap." Phase 2c: graph-projections realignment + zoom-invariance deletion + dual-axis scale-recurrence + dynamical-vocabulary audit + constitutional-artifacts→governance-artifacts rename. Phase 4: 9 new foundation docs (sensor/oracle, translation, actor governance, etc.). Phase 5: section-level status labels.
6. **Parking Lot from canon-review Rounds 1-4**:
   - Propagate "governance-memory layer" → "governance-memory pattern" rename to non-canon docs (README.md, docs/synthesis/decision-memo.md, docs/research/2026-04-03/*, docs/research/connections/johar-neuroplastic-field.md). Separate plan; not canon-review.
   - Formalise internal-review input type in canon-review-protocol v4 (CC-N as R-claim analog, lens-concurrence threshold, foundation-repair phase exception).
   - Case-study capture for partial-adoption reversibility (unresolved from ADR-0030).
   - Worked example showing a specific bioregion composing into a coherent federation-agent (unresolved from ADR-0038).
   - Potential Friston/Bennett operationalisation pathways if integration work matures (unresolved from ADR-0039).
2. **Jeff call Thu Apr 23 12pm–1pm PDT** — call-brief at `~/Documents/Notes/Meetings/People/2026-04-23 Jeff Emmett.md`. Cadence agreement is primary ask; three held-open tensions + composition-test framing are secondary. Retrospective link is the right depth if Jeff wants technical context.
3. **Post-Jeff-call follow-up** — log outcomes, cadence decision, any new triggers in `project_canon_review_v1.md` memory + CLAUDE.md. If Move 0 composition-test starts, authors new plan (not canon-review v2 unless Pass 3 triggers also fire).
4. **Evidence program: first real commitment record** — Blocked until Victoria workshop (May–June 2026). Capture checklist ready at `docs/research/evidence/templates/commitment-capture-checklist.md`.
5. **Sheaf experiment** (time-boxed) — consistency diagnostic on spec DAG. Deferred.
6. **Canon review v2** (if Pass 3 fires or second round executes) — route through protocol v2 (not v1); triggers listed in protocol §Triggers for canon-review v3. Pass 3 cadence clock runs to 2026-10-17; weak triggers currently.

## Parking lot from canon-review-v1

- (Impact: M) (Effort: M) — v3 frozen-vocab admission round for 33 bridge-note slug-deferred TODOs
- (Impact: L) (Effort: M) — AC9 dangling-ref cleanup on main (Spore `johar-metacognition-stack`, PM `dating-app-implementation`)
- (Impact: M) (Effort: S) — `scripts/validate-rclaim-source.py` (author the referenced-but-missing integrity checker)
- (Impact: M) (Effort: M) — `scripts/close-phase.sh` automation (tag + tarball + executed-phases.yaml triplet)

Method-protocol v-next drafts (foundational-reframing v2, canon-review v4, corpus-foundational-review v2) relocated to `~/projects/flowcoding/ROADMAP.md` per FC-ADR-0002 attrition-based migration convention. Resume there.

## Immediate Next Step

**Prep for Jeff call (Thu Apr 23 12pm–1pm PDT).** Call-brief at `~/Documents/Notes/Meetings/People/2026-04-23 Jeff Emmett.md` — **needs §1 refresh to include Phase 3 7-primitive-roster rewrite** (landed 2026-04-22, after brief was last written). Brief structure:
- §1 canon-since-Apr-13 summary (what Jeff needs to know has changed) — refresh for Phase 3
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
