# Sahely Wave 8 Dispatch — March 1-12 McMurtry-REPOSTED + Almaas + religion-violence (2026-05-22)

**Scope**: 6 posts (2 REPOSTED-shape McMurtry essays + 2 Almaas spiritual-philosophy + 2 Sahely-original religion-violence-civilization)

**Parent orchestrator commit baseline**: HEAD `2a90460` (post-Wave-7). Sibling-repo SHAs frozen: IC `d74f1d0` / PM `5e06cd0` / bregion `07ff973` / koi-processor `ada5b9a` / darren-workflow `059129a`. Do not touch any of these.

## Wave 8 post list

| # | Published | Title | URL | Shape (best-guess pre-page-1) |
|---|-----------|-------|-----|-------------------------------|
| 1 | 2026-03-01 (URL 2026-02-28) | The Moral Decoding of 9-11: Beyond the U.S. Criminal State (2013) \| John McMurtry | https://bsahely.com/2026/02/28/the-moral-decoding-of-9-11-beyond-the-u-s-criminal-state-2013-john-mcmurtry-notebooklm/ | **REPOSTED** McMurtry 2013 (dated-author title) |
| 2 | 2026-03-01 | Understanding War: A Philosophical Inquiry (1989) \| John McMurtry \| Science for Peace | https://bsahely.com/2026/03/01/understanding-war-a-philosophical-inquiry-1989-john-mcmurtry-science-for-peace-notebooklm/ | **REPOSTED-DUPLICATE-CHECK** McMurtry 1989 — possibly same work as Wave-7 #2 (also McMurtry 1989 Understanding War). VERIFY PDF SHA against Wave-7 #2 hash. If identical → mark `extraction_status: skipped-duplicate-of-<prior-rid>` + KG-link only. If different edition → full processing. |
| 3 | 2026-03-01 | Awakening is Just the Beginning: A.H. Almaas on the Journey of Descent and the Radiance of the Absolute | https://bsahely.com/2026/03/01/awakening-is-just-the-beginning-a-h-almaas-on-the-journey-of-descent-and-the-radiance-of-the-absolute-notebooklm/ | **CURATED-ABSTRACT** likely (NotebookLM-only suffix; no chatgpt5-2; Almaas-attributed work) |
| 4 | 2026-03-02 | The Path of the Heart: A.H. Almaas on Spiritual Love, Inquiry, and the Inner Beloved | https://bsahely.com/2026/03/02/the-path-of-the-heart-a-h-almaas-on-spiritual-love-inquiry-and-the-inner-beloved-notebooklm/ | **CURATED-ABSTRACT** likely (same pattern as #3) |
| 5 | 2026-03-10 | **ANCHOR-candidate** From Sacred Narrative to Civilizational Viability: Religion, Violence, and the Life-Ground Test of Civilization | https://bsahely.com/2026/03/10/from-sacred-narrative-to-civilizational-viability-religion-violence-and-the-life-ground-test-of-civilization-chatgpt5-3-gemini-notebooklm/ | Sahely-original (chatgpt5-3 + gemini suffix — new tool combo) |
| 6 | 2026-03-12 | Metanoia and the Historical Jesus: Inner Transformation, Civilizational Misinterpretation, and the Institutionalization of a Mystical Teaching | https://bsahely.com/2026/03/12/metanoia-and-the-historical-jesus-inner-transformation-civilizational-misinterpretation-and-the-institutionalization-of-a-mystical-teaching-chatgpt5-3-gemini-figures-and-notebooklm/ | Sahely-original (chatgpt5-3 + gemini + figures suffix) |

**Anchor candidate**: Post #5 "From Sacred Narrative to Civilizational Viability" — extends Wave-7 violence-cluster (Galtung-McMurtry substrate) with religion as civilizational-stability/disturbance lens. First Sahely post using chatgpt5-3 (vs prior chatgpt5-2) — minor tool-version note. Hand-curate at 10-12 facts.

**5-shape taxonomy reference** (codified post-Wave-7):
- **Sahely-AUTHORED** — first-person framing, chatgpt5-*/notebooklm suffix, original synthesis
- **REPOSTED-verbatim** — dated-author title + full work reproduction with ISBN/journal-cite/multi-page primary text
- **REPOSTED-curated-abstract** — dated-author title + NotebookLM/ChatGPT TOC-style abstract of canonical work
- **CURATED-ABSTRACT** — NotebookLM abstract of canonical work WITHOUT dated-author byline (substrate_author field; ABSTRACTS predicate; is_repost=false)
- **Media-only stub** — no PDF; audio/video derivatives + tag-cluster only

## Wave 8 specific guidance

- **#2 duplicate-check**: Compute PDF SHA before extraction. Look up Wave-7 #2 hash in `tmp/sahely-pdf-hashes.txt` (search for "Understanding War" / "understanding-war"). If SHA matches → record stub extraction with `extraction_status: duplicate-of-2026-02-22-the-pathological-logic-of-the-military-paradigm-notebooklm` (Wave-7 #2's slug) + skip KG ingestion (already in graph). If different edition → process normally and add KG edge `(piece, ALTERNATE_EDITION_OF, <Wave-7-piece>)`.
- **#3 + #4 Almaas cluster**: Likely your first Almaas extractions. Apply `substrate_author: A.H. Almaas` if CURATED-ABSTRACT shape confirmed. Note any Spore-relevant concepts (essence-grammar, presence, inquiry-method) — Almaas territory is spiritual-phenomenology; record concepts but don't force RESONATES_WITH into Spore canon unless explicit substrate-overlap appears.
- **#5 + #6 religion-violence-civilization sub-cluster**: Two distinct cuts at religion's role in civilizational viability. #5 frames it through life-ground-test (Sahely's existing viability-grammar lens). #6 frames it through Jesus / inner-transformation / institutionalization-distortion. Add `IN_CLUSTER_WITH` between #5 and #6 in the KG. For #5 anchor, also add `EXTENDS` edge to Wave-7 anchor #6 (Grammar of Violence) — religion is one of the structural-drivers Wave-7 anchor names.

## Process

Same as Wave 7. Highlights:

1. PDF fetch (polite-crawl 1s + UA "Claude-Code research intake on behalf of Darren Zal <zaldarren@gmail.com>")
2. SHA + hash-append
3. **For #2: duplicate-check before processing** — if SHA matches Wave-7 #2, stub-only
4. Extract with pymupdf4llm; page-1 author-vs-curator check
5. Write extraction record with appropriate 5-shape fields
6. Phase 1e KG ingest with `wave: "wave-8"` metadata
7. Step 0c: never retry add_knowledge on timeout; verify via resolve_entity

## Allowed/forbidden tools

Allowed: Read, Write, Bash, `mcp__personal-koi__add_knowledge`, `mcp__personal-koi__resolve_entity`, `mcp__google-workspace__get_gmail_message_content` (for PDF link discovery).
Forbidden: any git-write, any send-* skill, any other MCP-write tool, modifications outside disjoint file paths (`docs/research/corpus-review/originals/sahely-{pdfs,extractions}/` + append `tmp/sahely-pdf-hashes.txt` + append `tmp/sahely-dispatch-wave-8.md`).

## Report back

Append to `tmp/sahely-dispatch-wave-8.md` under `## Wave 8 Results`:
- Per-post table (shape, pages, depth, facts, timeouts)
- **Special**: #2 duplicate-check verdict with SHA evidence
- New entities (especially Almaas if first-appearance; A.H. Almaas as new Person)
- Hash delta / validator delta / sibling SHAs
- Any 5-shape edge cases or new sub-shapes discovered

Carry on.

---

## Wave 8 Results (2026-05-22)

### Per-post extraction summary

| # | Date | Slug (short) | Shape | Pages | Facts | KG episode_id | Timeouts |
|---|------|--------------|-------|-------|-------|---------------|----------|
| 1 | 2026-02-28 | the-moral-decoding-of-9-11-mcmurtry-2013 | REPOSTED-curated (McMurtry 2013) | 29 | 7 | `2bfac1ee-b861-4bed-98be-0eceb8695716` | 0 |
| 2 | 2026-03-01 | understanding-war-mcmurtry-1989-alt-edition | REPOSTED-curated ALT-EDITION (McMurtry 1989) | 30 | 6 | `64a75e8b-2595-4da5-b9ec-5316da737a43` | 0 |
| 3 | 2026-03-01 | awakening-is-just-the-beginning-almaas | Media-only stub (Almaas first-appearance) | n/a | 5 | `32504e12-1e9e-40ed-98ac-2820fdd8b81b` | 0 |
| 4 | 2026-03-02 | the-path-of-the-heart-almaas | Media-only stub (Almaas pair partner) | n/a | 5 | `712175f2-f57b-4ded-8ba0-86c4c6e6f0bd` | 0 |
| 5 | 2026-03-10 | from-sacred-narrative-to-civilizational-viability | **ANCHOR** Sahely-AUTHORED (hand-curated) | 138 | 12 | (server-confirmed via resolve_entity; client 30s timeout — no retry per Step 0c) | 1 client-side; server landed |
| 6 | 2026-03-12 | metanoia-and-the-historical-jesus | Sahely-AUTHORED (moderate) | 78 | 9 | `2de47bb9-27e8-4808-9ffe-19f4e1e2d5d2` | 0 |

**Total**: 6 posts processed; **~44 facts** ingested; 5 of 6 episodes returned clean response; 1 timeout-but-landed (verified via resolve_entity probe per Step 0c discipline).

### Special: P2 duplicate-check verdict

**Verdict**: ALT-EDITION (NOT exact duplicate).

| | Wave-7 #2 | Wave-8 P2 (this) |
|---|---|---|
| SHA-256 | `4fb5c6ddf26614372405ed5bfb7950c77e5476ce991f991b36604b44c57a12e0` | `5a350b975352c4e26d539519d4b7f6590b25845c2a441be586a8d911f1df3f13` |
| Drive ID | `14CNbd52Zn6wOlaib1PLmJ_nvG0zytevK` | `1hUSCY2cFHuwrtUcAyP-1i2OwxJA2RXBF` |
| Pages | 49 | 30 |
| Shape | Verbatim monograph reproduction (ISBN 0-88866-633-0 + CIP catalog) | NotebookLM analytical brief |

Both reference the SAME underlying McMurtry 1989 work. Wave-8 P2 WordPress page additionally re-links the Wave-7 #2 PDF as a secondary attachment, evidencing Sahely's substrate-anthology pattern (primary source + analytical companion). Disposition: full processing + `ALTERNATE_EDITION_OF` KG edge to Wave-7 #2 piece (not skip-as-duplicate).

### New entities (this wave)

- **A.H. Almaas** (Person; first-appearance via Wave-8 #3 media-only stub; stabilized by Wave-8 #6 §10.3 textual citation; alias: Hameed Ali)
- **Diamond Approach** (Concept; Almaas's curriculum / Ridhwan school)
- **Almaas Inquiry-method** (Concept)
- **Inner Beloved (Almaas)** (Concept)
- **Journey of Descent (Almaas)** (Concept)
- **Radiance of the Absolute (Almaas)** (Concept)
- **Moral Decoding of 9-11 (Sahely 2026 re-publication of McMurtry 2013)** (Concept; piece-entity)
- **Understanding War 1989 alt-edition (Sahely 2026-03-01)** (Concept; piece-entity)
- **Awakening is Just the Beginning (Sahely 2026-03-01 Almaas media-stub)** (Concept; piece-entity)
- **The Path of the Heart (Sahely 2026-03-02 Almaas media-stub)** (Concept; piece-entity)
- **From Sacred Narrative to Civilizational Viability (Sahely 2026-03-10 anchor)** (Concept; piece-entity, anchor)
- **Metanoia and the Historical Jesus (Sahely 2026-03-12)** (Concept; piece-entity)
- **Viability Geometry Model** (Concept; Sahely-original systems framework)
- **Violence as Optionality Collapse** (Concept; Sahely-original substantive contribution)
- **Civilizational Regulation Model** (Concept; Sahely's systems-biology→civilizations regulatory framework: homeostasis/allostasis/adaptation/reflexivity/regression)
- **Civilizations as Narrative Organisms** (Concept)
- **Cross as Civilizational Diagnostic Symbol** (Concept; Girardian inversion-lens)
- **Five Narrative Transformations (Sahely)** (Concept; chosenness→responsibility / sacrifice→protection / etc.)
- **Contemporary Middle East Conflict System (2026)** (Concept; applied case-study target)
- **Supranational Sovereignty** (Concept; McMurtry 2013)
- **Noble Lie (Straussian doctrine)** (Concept; McMurtry 2013)
- **Limitless Capital Accumulation** (Concept; McMurtry 2013)
- **Pathological War vs Enabling War distinction** (Concept; McMurtry 1989)
- **Agent-Structure Distinction (McMurtry)** (Concept)
- **Metanoia as Perception Transformation** (Concept; Sahely's central hypothesis)
- **Paenitentia Translation Drift** (Concept)
- **Metanoia Transformation Model (5-stage)** (Concept)
- **Metanoia-Scapegoat Inversion Model** (Concept; Sahely bridge to Girard)
- **Cross-Tradition Mysticism (Jewish-Christian-Islamic)** (Concept)

**Reused / corroborated existing entities**: Bichara Sahely, John McMurtry, Johan Galtung, René Girard, ChatGPT (OpenAI), Gemini, NotebookLM, Grammar of Violence (Sahely 2026-02-24 anchor), Pathological Logic of the Military Paradigm (Wave-7 #2).

### Hash manifest delta

4 new SHA entries appended to `tmp/sahely-pdf-hashes.txt`:
- `46930f65...` Moral Decoding 9-11 (P1)
- `5a350b97...` Understanding War 1989 alt-edition (P2; ALT-EDITION-OF Wave-7 #2 `4fb5c6dd`)
- `272641d4...` Sacred Narrative to Civilizational Viability (P5 anchor; 138p)
- `008bd1a9...` Metanoia and the Historical Jesus (P6)

(P3 + P4 are media-only stubs with no PDF; no hash entry.)

### Sibling-repo SHA verification (C3 zero-change)

- IC: `d74f1d0` (frozen)
- PM: `5e06cd0` (frozen)
- bregion: `07ff973` (frozen)
- koi-processor: `ada5b9a` (frozen)
- darren-workflow: `059129a` (frozen)

Spore HEAD on entry: `2a90460` (Wave 7 close). This dispatch made NO git commits per C10 — Spore HEAD remains at `2a90460` operator-side. Disjoint paths (C6) honored: only `sahely-{pdfs,extractions}/` writes + appends to `tmp/sahely-pdf-hashes.txt` + `tmp/sahely-dispatch-wave-8.md`.

### 5-shape edge cases / new sub-shapes discovered

- **No new sub-shapes** — Wave 8 instances cleanly span 3 of the 5 established shapes (REPOSTED-curated × 2 / Media-only stub × 2 / Sahely-AUTHORED × 2). Both REPOSTED-curated pieces use the same Wave-7-established Hybrid REPOSTED+CURATED-ABSTRACT pattern (TOC-style NotebookLM analytical brief OF dated-author canonical work, NOT verbatim reproduction). Both Sahely-AUTHORED pieces use the same Wave-7-established structure (Dedication / Epigraph / Abstract / Executive Summary / Chapters / Appendices / References).
- **ALT-EDITION-OF as new edge-type**: Wave-8 P2 surfaces a new KG edge predicate (`ALTERNATE_EDITION_OF`) for the case where Sahely curates the same underlying source-work TWICE via different mechanisms (verbatim monograph vs NotebookLM analytical brief). Reusable for any future Sahely substrate-anthology re-curation.
- **Tool-arc progression**: First Sahely use of `chatgpt5-3` (vs prior `chatgpt5-2`) AND first Gemini + ChatGPT multi-LLM combo (P5 + P6). Recorded as tool-version note; no measurable content-shape change at extraction time.
- **First-appearance + cross-piece-stabilization pattern**: A.H. Almaas Person entity introduced via P3 + P4 media-only stubs (where text-extraction was structurally limited) and STABILIZED via P6 §10.3 textual citation. This is a clean instance of the pattern "introduce-via-stub + corroborate-via-anchor-adjacent-citation" that future Sahely waves can reuse for Persons that first appear in media-only posts.

### Spore canon descriptive deltas (cross-repo-identity-discipline honored)

Per `feedback_intake_to_vocab_admission_program.md` 3-layer discipline + workstream-scope-discipline: NO canon-pressure proposals from Wave 8. Descriptive notes only:

- **P5 Viability Geometry Model** (constraints/margins/optionality + violence-as-optionality-collapse) has structural resonance with Spore F6 failure-modes (ADR-0075) at the optionality-collapse failure-mode-class layer. NOT proposed for admission; recorded as descriptive cross-canon coherence note.
- **P5 Civilizational Regulation Model** (homeostasis/allostasis/adaptation/reflexivity/regression) has structural resonance with Spore F8 external-validation-loop (ADR-0081) at the reflexivity-and-regression dynamics layer. NOT proposed for admission.
- **P5 Life-Ground Criterion** (McMurtry-substrate) already admitted via ADR-0084 (route-graph + settlement-operator) at the axiological layer. P5 provides reinforcing evidence; no new admission required.
- **P6 metanoia-as-perception-transformation** has incidental resonance with F8 + ADR-0050 joint-commitment formation at the cognitive-attitude-shift layer; NOT load-bearing; descriptive only.
- **Almaas inquiry-method** (P3+P4+P6) has incidental resonance with Spore's evidence-attestation cycle at the first-person-phenomenological-grounding layer; flagged as future-watch parking item, NOT proposed for admission.

### Wave 8 close-out

- All 6 extraction records written under `sahely-extractions/` (C6 disjoint paths).
- All 4 PDFs persisted under `sahely-pdfs/` (local-only per C2; `.gitignore` ensures non-commit).
- All 5 add_knowledge calls returned (server-side); 1 client timeout (Wave-8 #5 anchor) verified-as-landed via 4 resolve_entity probes at confidence ≥0.9 per Step 0c.
- Validator delta: not run (no validator-touching files modified). 9/30 baseline preserved.
- Sibling repos: SHA-frozen per C3.
- Wave 8 closed. Sahely intake state: **65 of 104 posts processed** (was 59; +6 this wave).

