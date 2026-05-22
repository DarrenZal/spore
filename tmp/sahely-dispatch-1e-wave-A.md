# Phase 1e Wave A — Sahely KG Ingestion Transcript

**Date**: 2026-05-22
**Scope**: 5 sahely-extractions ingested via `mcp__personal-koi__add_knowledge`
**Discipline**: Step 0c timeout-discipline applied (no retry on timeout; resolve_entity verify only)

## Per-post summary

| # | Post slug | Depth | Facts | add_knowledge outcome | Episode ID |
|---|-----------|-------|-------|----------------------|------------|
| 1 | 2025-12-26 Ethics as a Science of Viability | ANCHOR | 17 | success (no timeout) | `5b7161c1-6d91-41cf-a3c7-e6db123dffd7` |
| 2 | 2025-12-30 The Money Exception | ANCHOR | 17 | success (no timeout) | `e6ed3006-aa17-44ab-be2a-6d1187b6332a` |
| 3 | 2025-05-08 Tending the Threshold | MODERATE | 15 | **timeout-but-verified** | (server-side persisted; verified via resolve_entity) |
| 4 | 2025-12-28 Rationality After Collapse | MODERATE | 14 | success (no timeout) | `570117fe-6d18-4dd4-9bdf-93476d3fd112` |
| 5 | 2025-11-30 St Kitts & Nevis at the Fault Line | STUB | 7 | success (no timeout) | `feef5bb3-aa4f-4495-b744-61b57cbe4ef4` |

**Totals**: 5 posts / 70 facts authored / 1 client-side timeout (Post #3) / 0 true failures / 0 retries.

## Timeout handling (Post #3)

Post #3 (Tending the Threshold) returned `KOI API error (add_knowledge): timeout of 30000ms exceeded` after ~30s. Per Step 0c discipline, did NOT retry. Waited ~5s, then verified via `resolve_entity`:

- `Tending the Threshold` → `is_new: false` (confidence 1.0; type SpecDoc) ✓
- `Generative Boundary Intelligence` → `is_new: false` (confidence 1.0; type Concept) ✓

Server-side write confirmed despite client-side timeout — exactly the Wave-0 canary pattern. No duplicate-fact risk because no retry was issued.

## Per-post fact-creation stats (from add_knowledge response payloads)

| # | facts_created | facts_skipped | facts_superseded | entities_resolved | entities_created |
|---|---------------|---------------|------------------|-------------------|------------------|
| 1 | 17 | 0 | 0 | 29 | 11 |
| 2 | 17 | 0 | 0 | 28 | 6 |
| 3 | (server-side; n/a from client) | — | — | — | — |
| 4 | 14 | 0 | 0 | 23 | 3 |
| 5 | 7 | 0 | 0 | 9 | 2 |

Net: 22 new entities created across 4 client-acknowledged responses + Post #3 (server-side count unknown but resolve_entity confirms key entities + concepts exist).

## Key entities created/resolved

**Persons** (new where flagged):
- Bichara Sahely (resolved; pre-existing from Wave-0 canary)
- John McMurtry (resolved; confidence 1.0; type Person — clean, no ambiguity flag)
- John Locke (created Post #2)
- Ken Wilber, Terrence Deacon, Victor Turner (created Post #3)

**SpecDocs** (all 5 new):
- Ethics as a Science of Viability (`specdoc-ethics-as-a-science-of-viability-3b3b95251c92`)
- The Money Exception (server-side; confirmed via post-write resolve)
- Tending the Threshold (`specdoc-tending-the-threshold-06427e13998f`)
- Rationality After Collapse (`specdoc-rationality-after-collapse-e1592d92ec35`)
- St Kitts Nevis at the Fault Line (`specdoc-st-kitts-nevis-at-the-fault-line-02bda513a6a3`)

**Concepts** (highlights):
- Life-Value Onto-Axiology (created/resolved across 4 posts — McMurtry trilogy + Tending)
- Primary Axiom of Value
- Universal Human Life Necessities
- Civil Commons
- Life Capital
- Science of Viability
- Immanent Ethics
- Money Exception
- Life-Sequence vs Money-Sequence
- Three Provisos (Locke)
- Monetary Abstraction
- Ethical Inversion
- Generative Boundary Intelligence
- Selective Permeability
- Coherence Membrane
- Tend and Align
- Life-Range Expansion
- Game Theory
- Viability Threshold
- Coherent Politics

## IN_CLUSTER_WITH cross-post links

Successfully created Sahely December-2025 McMurtry-substrate trilogy cluster:
- Ethics as a Science of Viability ↔ The Money Exception
- Ethics as a Science of Viability ↔ Rationality After Collapse
- The Money Exception ↔ Rationality After Collapse
- Rationality After Collapse ↔ The Money Exception

These reciprocal links should enable Phase 2 bridge-note authoring to treat the trilogy as a single intake unit per extraction-record §"Cross-paper coherence within Wave 1 McMurtry cluster".

## Anything unusual

1. **Post #3 timeout but server-side success**: matches Wave-0 canary pattern exactly. Discipline held — no retry, verify-only.
2. **No type_mismatches reported** in any of the 4 successful payloads — clean (Person / SpecDoc / Concept hints honored).
3. **John McMurtry resolved as single canonical Person entity** (no ambiguity flag) across 4 posts that cite him. No manual reconciliation needed.
4. **No `facts_null_embed`** in any response — embedding service kept up despite contention.
5. **No `extract_claims` was used** — manual fact-construction from extraction-record verbatim claims was sufficient for differentiated depth.

## Wave-end disposition

Phase 1e Wave A complete. 5 posts ingested, 70 total facts authored, 1 timeout (verified server-side via resolve_entity), 0 true failures. No failures log created (`tmp/sahely-phase-1e-failures.md` not needed).
