# Sahely Intake — Orchestrator Coordination Memo (2026-05-21 post-checkpoint)

**Purpose**: capture operator amendments after the Phase 1a/1c checkpoint commit (`430f48b`). The parent orchestrator session (where the user is currently typing) and the child execution session (started with the resume prompt) coordinate via this memo + the plan file at `~/.claude/plans/so-i-found-this-modular-metcalfe.md`.

**Status check by child session**: read this memo at the start of every Phase 1b/1e wave dispatch + after every commit. Operator can amend mid-execution; pre-flight checks here.

---

## Operator-ratified decisions (2026-05-21 22:30 PDT)

### Decision 1 — KG ingestion depth: **(B) Moderate**

Per Wave-0 canary the orchestrator established 10-fact hand-curated `add_knowledge` per post. Operator ratifies a hybrid for the broader corpus:

- **Anchor posts (the 8-12 Phase 2 candidates)**: hand-curated ~10-15 facts each via `add_knowledge`, matching Wave-0 quality. These get the most careful predicate-shape attention (`AUTHORED` / `CITES_AUTHOR` / `ENGAGES_CONCEPT` / `BUILDS_FRAMEWORK_ON` / `DEFINED_AS` / `IS_RELATIONAL_GROUND_OF` etc.).
- **Broader cluster (the other ~80 Gmail-known posts + flagged sitemap-only candidates)**: dual-pass.
  1. Run `mcp__personal-koi__extract_claims` with `auto_create=false` against the email summary + PDF extraction record. Surfaces candidate triples with confidence scores.
  2. Sub-agent reviews each batch; persists best 10-15 via `add_knowledge` (NOT raw passthrough of all extract_claims output — that risks AI-extraction noise per R12).
- **Skip threshold**: if `extract_claims` returns <3 high-confidence candidates AND the post has no PDF body, fall back to ingesting just the metadata facts: `(Sahely, AUTHORED, post)` + `(post, TAGGED, <each tag>)` + `(post, CLASSIFIED_AS, <topical-classification>)`.

**Cost estimate**: ~1500-3000 facts + ~300-600 entities across the corpus. Embedding model `text-embedding-3-large` at $0.13/1M tokens → ~$0.50 total. Negligible.

**Repost discipline preserved**: per parser-spec v1.1, the 3 reposts (Goerner / Buckton / Wilber) use `(Sahely, REPOSTED, piece)` + `(<original_author>, AUTHORED, piece)` predicate shape — NOT `(Sahely, AUTHORED, ...)`.

### Decision 2 — Cross-stream scope: **5 eligible canon-bearing repos**

Bridge notes may land in any of these per per-post operator authorization:

| Repo | Type | Sahely-fit | Expected bridge-note count |
|---|---|---|---|
| **Spore** | Primary canon | Direct (viability grammar, autopoiesis, coordination, sheaf, life-coherence) | 8-12 anchors + 20-30 broader |
| **Intelligence Commons (IC)** | Downstream-aligned sibling | Strong (knowledge-commoning, sheaf-coherence for knowledge governance, languaging-as-recursive-coordination, civil commons + knowledge integrity) | 2-5 |
| **bioregional-coordination (bregion)** | Peer instance-family | Strong (life-ground, planetary-scale viability, peace-civilization, civil commons) | 2-5 |
| **BKC (BioregionKnowledgeCommons)** | Peer instance-family | Medium (civil commons, bioregional knowledge-stewardship, foundation-era McMurtry overlap) | 1-3 |
| **Poietic Match (PM)** | Downstream-aligned sibling | Limited but real (legitimacy-of-the-other ↔ PM sovereignty-preserving composition; joint-commitment framing) | 0-1 (operator-elective) |

**Skipped (per operator decision)**: Flow Coding / canon-review / Hyphae / darren-workflow.

**Routing discipline per `feedback_workstream_scope_discipline.md`**:
- Each cross-stream bridge note requires explicit operator authorization at authoring time (NOT silent extension).
- Spore-side bridge notes carrying descriptive IC/bregion/BKC/PM cross-references at framing-note layer are operator-blanket-authorized (existing default).
- IC/bregion/BKC/PM-side bridge notes (writes to those repos directly) require fresh explicit operator OK per-note.
- Per `feedback_upstream_downstream_canon_propagation.md`: bridge-note-layer writes do NOT trigger Wave-N+1 alignment ADRs.
- Per `feedback_peer_instance_family_vs_downstream_aligned.md`: peer-instance-family repos (bregion, BKC) use bridge notes for cross-citation; downstream-aligned (IC, PM) ALSO use bridge notes for intake; alignment-ADR-shape only triggers when the substrate would otherwise leave the sibling silently-divergent on a load-bearing canon vocabulary item.

### Decision 3 — Phase 1b Wave-1 priority: **sheaf-geometry cluster**

The 7 sheaf-geometry posts surfaced by Phase 1c manifest (vs initial estimate of 1) form a meaningful sub-cluster worth understanding as a unit before broader Phase 1b waves. Wave-1 (first orchestrator-reviewed batch of 5-10) prioritizes:

1. `2026-04-02-from-entanglement-to-governance-the-geometry-of-coherence-across-scales` (the post the operator originally surfaced as the goldmine signal)
2. (6 other sheaf-geometry posts from Phase 1c manifest — enumerate via `awk -F, '$11=="sheaf-geometry"' sahely-corpus-manifest.csv`)

These bridge to operator's vault `~/Documents/Notes/Research/Sheaf Theory…` substrate + Spore `docs/research/Sheaves/sheaf-theory-synthesis.md` + the existing KG fact about Matthew Hale's "Asynchronous Nonlinear Sheaf Diffusion for Multi-Agent Coordination" paper.

Wave-2+ proceeds through the remaining viability-grammar + autopoiesis-medicine clusters.

### Decision 4 — Phase 1f corpus-mining pass

**Goal**: surface relevance-flagged candidates from the 1265 sitemap-only posts WITHOUT full PDF ingestion. Targets:
- All **7 sheaf-geometry posts** (overlaps with Phase 1b Wave-1).
- The **306 foundation-era (2017-2018) posts** for cross-repo relevance (especially economic/civil-commons material that touches BKC + bregion).
- Any post whose slug-heuristic produced `other: 662` but might be misclassified (e.g., post slugs that don't match the cheap heuristic but are substantively viability-grammar).

**Procedure per sitemap-only candidate**:
1. WebFetch the post HTML (cheap; 1 request per post).
2. Extract title + visible text content (first ~1500 chars enough for relevance signal).
3. Apply richer keyword classification + cross-repo relevance signals (sheaf / autopoiesis / Maturana / McMurtry / civil-commons / commoning / bioregional / life-ground / etc.).
4. If post passes relevance threshold (≥2 cross-repo relevance signals OR fits an existing cluster gap), flag for "upgrade to full intake" → add to Phase 1b/1e candidate pool.
5. If not relevant, manifest row stays sparse (`kg_status: skipped-irrelevant`).

**Budget**: Phase 1f is operator-elective + low-priority vs Phase 1b/1e core work. Estimate: 2-4 hours sub-agent work to mine 306 foundation-era + 7 sheaf-geometry; the remaining ~952 sitemap-only stays unmined unless quarterly re-review demand surfaces.

**Output**: `tmp/sahely-phase-1f-mining-results.md` with relevance-flagged candidate list + classification updates to the manifest CSV.

### Decision 5 — Ingest all 82 PDFs (re-affirmed)

Phase 1b waves cover all 82 PDFs (81 pending + 1 canary done). Sub-agent dispatch per `feedback_solo_operator_ceremony.md` C6 disjoint-list discipline. Wave-1 = sheaf-geometry priority cluster (~7 PDFs); subsequent waves = 5-10 PDFs each through viability-grammar + autopoiesis-medicine + remaining.

### Decision 6 — Foundation-era (2017-2018, actually 2011-2022 per Phase 1c discovery) review

The 1265 sitemap-only posts include 306 foundation-era posts. Plan revision: **mine via Phase 1f** rather than blanket-ingest. Promote ~5-10 anchor posts to full Phase 1b/1e treatment per Phase 3 anchor list (the McMurtry-era foundation anchors already named in plan §Phase 3).

---

## Active commit on origin

- `5625f63..8df9446` (2026-05-21 22:30 PDT): Step 0 + Phase 1a + Wave-0 + plan-v2
- `8df9446..430f48b` (2026-05-21 22:55 PDT): Phase 1c full corpus manifest (1369 rows)

**Working tree state** (parent orchestrator at 23:25 PDT): hash manifest at `tmp/sahely-pdf-hashes.txt` updated with 4 additional PDFs (child session downloaded). Other pre-existing changes (AGENTS.md, CLAUDE.md, parallel-session research notes) remain untouched.

## Coordination protocol between parent + child session

- **Parent (this session, where user is typing)**: orchestrator role. Captures operator amendments in this memo + the plan file. Does NOT dispatch Phase 1b/1e/1f waves directly (would conflict with child session). Available for: cross-repo scope ratifications, canon-pressure DECISION-BRIEF reviews when Phase 2 anchor bridge notes surface them, operator-question routing.
- **Child (separate session, started with resume prompt)**: execution role. Reads plan + this memo at start of each wave. Dispatches sub-agent waves for Phase 1b/1e. Commits per-wave with audit trail. Pushes to origin/main when wave complete.
- **Sync points**: parent + child both read `tmp/sahely-orchestrator-coordination-2026-05-21.md` + plan file. Both write to `tmp/sahely-pdf-hashes.txt` (append-only; no conflict if both honor append). Both can read `docs/research/corpus-review/originals/sahely-*` files.
- **Conflict avoidance**: child writes per-wave to `sahely-pdfs/` + `sahely-extractions/`; parent does NOT write to those paths. Parent updates plan + this memo + manifest CSV (Phase 1c); child reads CSV but does NOT regenerate it via the build script unless explicit re-run authorized.

---

## Open items for child session to track

- [ ] Phase 1b Wave-1: sheaf-geometry cluster (7 PDFs prioritized)
- [ ] Phase 1b Waves 2+: viability-grammar + autopoiesis-medicine + remaining (75 PDFs across ~10 waves of 5-10 each)
- [ ] Phase 1e KG ingestion in parallel per post (with `extract_claims` surface-and-review for non-anchor posts; hand-curated for anchors)
- [ ] Repost discipline applied to 3 known reposts (Goerner / Buckton / Wilber)
- [ ] Phase 1d weekly Gmail sweep task scheduling (`mcp__personal-koi__task_add` with weekly recurrence)
- [ ] Phase 1f corpus-mining pass over 306 foundation-era + 6 remaining sheaf-geometry sitemap-only (optional-priority)
- [ ] Update manifest CSV `pdf_status` + `kg_status` per row as waves complete (via `tmp/sahely-build-manifest.py` re-run OR direct CSV edit)
- [ ] Validator 9-errors-EXACT held; warnings tracked per C1 amendment
- [ ] Cross-repo zero-change verified per wave commit

---

## Operator-elective extensions (parked; do NOT execute without ratification)

- **Citation-network extraction**: as KG accumulates `CITES_AUTHOR` facts, surface cross-author citation graph (Sahely cites Maturana; Maturana cites Varela; etc.). Operator may want this as a separate analysis pass after Phase 1e completes.
- **Cross-author bridges**: Sahely (Maturana) + Goerner (Energy Network Science) + McMurtry (Life-Value) — the KG will naturally surface these as facts accumulate. Operator may want capstone analysis.
- **Older-archive deep mining** (the ~952 pre-Gmail posts beyond the 306 foundation-era): defer to quarterly review. Most are likely below relevance threshold.
- **Audio/video transcription**: per plan §Out of scope; expensive; reconsider if Phase 2 anchor work specifically needs a NotebookLM Deep Dive transcript.
- **PM bridge note**: 0-1 expected; operator-elective per case at Phase 2 authoring time.
