# Sahely Phase 1b Wave 4 Dispatch Transcript

**Wave**: 4 (8 Feb 2026 broader-cluster posts — viability-grammar substrate + Galtung-McMurtry violence cluster)
**Scope**: 8 Gmail-known posts per orchestrator dispatch
**Started**: 2026-05-22 (sub-agent dispatch, post-Wave-3)
**Forbidden tools** (C10): git, send-* skills, MCP add_knowledge/ingest_url/vault_write_note/create_claim/resolve_entity, MCP send_gmail_message, file writes outside 18-path allowlist. Phase 1e KG ingestion is orchestrator-driven separate dispatch.

## Post inventory (orchestrator-specified)

| # | Date | Slug | Role | Distinctive substrate |
|---|------|------|------|----------------------|
| 1 | 2026-02-05 | `from-separation-to-union-a-mythopoetic-and-integral-nondual-reading-of-the-four` | broader-cluster | mythopoetic + integral-nondual Four Gospels reading; weak Spore-substrate touch |
| 2 | 2026-02-07 | `learning-to-read-what-keeps-us-alive-a-white-paper-on-viability-coherence-and` | broader-cluster | **HIGH-density viability-grammar whitepaper**; coins viability-illiteracy + 3-question diagnostic |
| 3 | 2026-02-10 | `qualia-at-the-interface-the-intrinsic-grammar-of-viability-from-cell-membranes` | broader-cluster | **STUB** (no PDF in email); qualia-as-interface-variables substrate |
| 4 | 2026-02-10 | `the-self-as-a-viability-stack-from-mitochondrial-proto-subjectivity-to` | broader-cluster | viability-stack framework + Damasio + mitochondrial proto-self; companion to #3 |
| 5 | 2026-02-11 | `the-grammar-of-viability-mind-self-meaning-and-the-conditions-of-enduring-life` | broader-cluster | **cluster-canonical 7-claims statement**; cognitive scale |
| 6 | 2026-02-12 | `the-cost-of-staying-alive-how-living-systems-budget-survival-remember` | broader-cluster | viability-budget framework; trauma-as-forced-liquidation-of-optionality |
| 7 | 2026-02-24 | `the-grammar-of-violence-decoding-the-background-program-of-modern-power` | broader-cluster | **Galtung violence triangle + Ruling Value Code + Cancer Logic**; viability-as-redesign |
| 8 | 2026-02-24 | `the-invisible-architecture-of-violence-collective-trauma-identity-myth-and-the` | broader-cluster | **Galtung CMT (Chosenness-Myth-Trauma) + McMurtry Ruling Group-Mind**; trauma-projection-policy loop |

## Step A — PDF URL extraction from email frontmatter

| # | Source | URL / FILE_ID | Notes |
|---|--------|---------------|-------|
| 1 | Drive | `1B9IYhTqldxCvY-xHcN2n5pRKKPMcdKGs` | |
| 2 | Drive | `15d7fdtfMD8esSu4qAqBrA1o5Awc0qVgi` | high-fidelity cluster substrate |
| 3 | — | `pdf_status: no-pdf-attached` per email | **stub-only** (mp3+video-thumbnail in asset_urls; no PDF link in email body) |
| 4 | Drive | `12S73qO6eGOKULspww_Gg1go-DSgm9ixR` | same-day companion to #3 |
| 5 | Drive | `1yneUvURoft566XVtWMGiq-k0C4H_naN_` | cluster-canonical 7-claims paper |
| 6 | Drive | `1tCkrmgCE3sM1qHXR6-mMOc5cvZo-gF3Q` | |
| 7 | Drive | `1A_ZWWljzyeIlc6rUohYl_hiLl8UKAtXU` | Galtung+McMurtry violence anchor #1 |
| 8 | Drive | `1soCCVJ4MExrASkaRSoDk9YaEDexDbYWw` | Galtung+McMurtry violence anchor #2 |

**7 PDFs to download** (all Google Drive); 1 stub (#3 qualia-at-the-interface).

## Step B — Downloads + hashes + page counts

All 7 PDFs downloaded successfully (HTTP 200 each from Google Drive `uc?export=download` endpoint). Per-curl 1s sleep honored per C2 polite-crawl. No 429/5xx encountered. All 7 begin with `%PDF-` magic bytes (`25504446`) — clean PDF content (no Drive HTML wrapper, no quota interception).

| # | Date | Size (B) | Pages | SHA256 (first 16 chars) |
|---|------|----------|-------|--------------------------|
| 1 | 2026-02-05 (gospels) | 700,930 | 26 | `618071d140eb72f6` |
| 2 | 2026-02-07 (learning-to-read) | 940,032 | 97 | `d77972d5eeb76a69` |
| 3 | 2026-02-10 (qualia) | — | — | **STUB — no PDF** |
| 4 | 2026-02-10 (viability-stack) | 723,007 | 52 | `2fdbbc2d378dfd7f` |
| 5 | 2026-02-11 (grammar mind/self/meaning) | 724,899 | 53 | `df3541a913c5fdad` |
| 6 | 2026-02-12 (cost of staying alive) | 541,917 | 35 | `474afac9b601f671` |
| 7 | 2026-02-24 (grammar of violence) | 853,966 | 80 | `3450629ddb96f052` |
| 8 | 2026-02-24 (invisible architecture) | 643,729 | 51 | `c2858f185fbce556` |

**Total Wave-4 PDF corpus**: 5.13 MB / 394 pages across 7 PDFs. Smallest individual PDF: #6 cost-of-staying-alive (542 KB / 35 pp); largest: #2 learning-to-read whitepaper (940 KB / 97 pp). Stub: #3 qualia (mp3+video only in email).

**7 rows appended to `tmp/sahely-pdf-hashes.txt`** (was 30 → 37 total lines; Wave 4 delta = +7).

## Step C — Read + extract (selective; broader-cluster depth with HIGH-FIDELITY exceptions)

Per-post `read_call_log`:

| # | Pages read | Read-call count | Depth |
|---|------------|-----------------|-------|
| 1 (gospels) | 1-5 (cover+TOC+dedication/epigraph/note+abstract+keywords) + 18-23 (§4 Human Condition + §5 From Alienation to Communion) | 2 | selective |
| 2 (learning-to-read) | 1-5 (cover+TOC pp 2-5) + 7-12 (Dedication+Abstract+Keywords+Exec Summary+§0.1+§0.2+§1+§1.1-1.3) | 2 | selective-high-fidelity |
| 3 (qualia STUB) | email body Executive Summary only (no PDF) | 0 PDF / 1 email read | stub |
| 4 (viability-stack) | 1-5 (cover+TOC pp 2-4+Abstract+Keywords) + 6-11 (Exec Summary+§1+§2 Grammar of Viability as Hidden Unifier) | 2 | selective-high-fidelity |
| 5 (grammar mind/self/meaning) | 1-5 (cover+TOC+Abstract+Keywords+Exec Summary pp 3-4+Chapter 1 The Fractured Map p5) | 1 | selective-high-fidelity |
| 6 (cost of staying alive) | 1-5 (cover+TOC+Abstract+Keywords+Exec Summary pp 4-5) | 1 | selective |
| 7 (grammar of violence) | 1-5 (cover+TOC pp 2-5) + 6-11 (Abstract+Keywords+Exec Summary §1-7+Conclusion+§1.1-1.3 The Unthinkable Pattern) | 2 | selective-high-fidelity |
| 8 (invisible architecture) | 1-5 (cover+TOC pp 2-4+Preface p5) + 8-12 (Abstract+Keywords+Exec Summary+§I.1-1.3 Introduction From Blame to Diagnosis) | 2 | selective-high-fidelity |

**Injection signals**: 0/8 papers/email showed any prompt-injection patterns. All extraction-records carry `injection_signal_detected: false`. Sahely papers are uniformly clean academic prose.

## Step D — Extraction records written

8 files at `docs/research/corpus-review/originals/sahely-extractions/<slug>.md` matching canary frontmatter schema (with `extraction_phase: 1b-wave-4`):

| # | Lines | Verbatim claims | Anchor depth |
|---|-------|-----------------|--------------|
| 1 (gospels) | ~85 | 8 | selective |
| 2 (learning-to-read) | ~130 | 12 | selective-high-fidelity |
| 3 (qualia STUB) | ~85 | 6 (from email body) | stub |
| 4 (viability-stack) | ~130 | 12 | selective-high-fidelity |
| 5 (grammar mind/self/meaning) | ~140 | 14 | selective-high-fidelity |
| 6 (cost of staying alive) | ~115 | 10 | selective |
| 7 (grammar of violence) | ~165 | 16 | selective-high-fidelity |
| 8 (invisible architecture) | ~155 | 14 | selective-high-fidelity |

**Total Wave 4 verbatim claims**: ~92 (across 8 records).

## Provenance findings (per Wave 3 method-precedent)

**Result: 0/8 reposts. All 8 Wave-4 papers are Sahely-original.**

Provenance check per cover-page + author-line + collaboration-line review:
- #1 (gospels): Author = Dr. Bichara Sahely (Internal Medicine); Research & Drafting Collaboration = ChatGPT 5.2. Original.
- #2 (learning-to-read): Author = Dr. Bichara Sahely; Research & Writing Collaboration = ChatGPT GPT-5.2. Original.
- #3 (qualia STUB): email confirms Sahely-original; no PDF to inspect.
- #4 (viability-stack): "Bichara Sahely with ChatGPT 5.2 (AI Research Partner)". Original.
- #5 (grammar mind/self/meaning): "Dr. Bichara Sahely with AI Research Partner: ChatGPT". Original.
- #6 (cost of staying alive): "Dr. Bichara Sahely with AI Research Partner: ChatGPT". Original.
- #7 (grammar of violence): "Dr. Bichara Sahely BSc (Biology) MBBS DM Internal Medicine, In analytical collaboration with ChatGPT 5.2". Original.
- #8 (invisible architecture): "Dr. Bichara Sahely, With Research Assistance from ChatGPT (OpenAI)". Original.

Wave-4 carries no reposts; the Wave-3 #7 McMurtry-curated-essay-collection finding does NOT recur in Wave-4. Phase 1e will use standard Sahely-primary citation form for all 8.

## Cross-cluster signals (Wave 4 composition with prior waves)

**Strong internal cluster** — the 8 Wave-4 papers form 3 sub-clusters:

1. **Viability-grammar primary substrate** (#2, #4, #5, #6) — 4 papers spanning 5 days (2026-02-07 through 2026-02-12). Wave-4 #5's 7-claims statement is the cluster-canonical articulation; the other 3 elaborate one or more claims at general-audience (#2), biological/self-architecture (#4), or budgetary (#6) scale. The cluster-signature **3-question diagnostic protocol** (Wave-4 #2 C-5) appears verbatim across multiple papers.
2. **Qualia-companion pair** (#3 STUB + #4) — same-day 2026-02-10 papers; Wave-4 #4 *Self as Viability Stack* explicitly positions itself as Qualia-at-the-Interface's companion (§Exec Summary). Together they articulate qualia-as-felt-global-control-signals at biological substrate.
3. **Galtung-McMurtry violence anchor pair** (#7 + #8) — same-day 2026-02-24 papers. #7 applies Galtung's Direct/Structural/Cultural violence triangle + Dualistic Archetype + Ruling Value Code at power/institutional scale; #8 applies Galtung's CMT (Chosenness-Myth-Trauma) + McMurtry's Ruling Group-Mind at identity/collective-subconscious scale. **Cluster discipline canonized**: structural critique without conspiracy/demonology.

**Cross-wave composition signals**:
- **Wave-3 + Wave-4 cancer-stage McMurtry chain**: Wave-3 #2 (Metastasis to Meta-stasis) + Wave-3 anchor #10 (Money Growth to Life Coherence) + Wave-4 #7 §4 Cancer Logic. McMurtry cancer-stage framework now traverses 3 papers across both waves.
- **Wave-3 #4 (Unifying Grammar of Viability, 118pp) + Wave-4 #2 (Learning to Read, 97pp) + Wave-4 #5 (Grammar of Viability Mind/Self/Meaning, 53pp)** form a viability-grammar triple-anchor (biology / general-audience / cognitive scales). Recommend operator consider Wave-4 #2 and/or #5 for **Phase-2-anchor promotion** if Sahely viability-grammar canon-pressure rises.
- **Wave-4 #7 + #8 "structure ≠ conspiracy" + "diagnose not accuse"** parallels Wave-A *Money Exception* discipline of treating monetary abstraction as structural-not-moral-failure.
- **Visibility-as-precondition** motif recurs across Wave-4 #2 (literacy), #6 (accounting), #8 (medical diagnosis), #4 (interface injury named) — Sahely cluster-discipline: **naming-precedes-healing**.

**Spore canon-pressure (descriptive, not propose-to-canonize)**:
- Wave-4 #5's claim #4 (memory-without-single-address) opens future-canon-pressure on Field rule-in-use vs rule-in-form (ADR-0046/0041).
- Wave-4 #4+#5 (self-as-interface) opens canon-pressure on Spore Holon-irreducibility extension (ADR-0050) + Membrane-production-mode scope-conditioning (ADR-0062).
- Wave-4 #6 (budgetary framing) opens canon-pressure on F9 maintenance-economics (ADR-0079) at biological scale.
- Wave-4 #7 (Viability-as-First-Principle redesign) opens canon-pressure on Spore's external-validation-loop (ADR-0081 F8) — viability-as-non-negotiable-design-constraint converges with F8's structural-validation discipline.
- Wave-4 #7+#8 (CMT + ambient power-modes) opens canon-pressure on ADR-0048 modes-across-primitives (expressive / constructed / substitution-trap) — collective-subconscious + institutional-cognition as ambient power-registers.

None of these constitute admission-ready canon-pressure today; they are descriptive cross-repo signals for Phase 1e bridge-note authorship.

## File counts (final verification)

```
$ ls docs/research/corpus-review/originals/sahely-pdfs/ | grep -E "^2026-02-(05|07-learning|10-the-self|11-the-grammar|12-the-cost|24-the-grammar-of-violence|24-the-invisible)" | wc -l
7

$ ls docs/research/corpus-review/originals/sahely-extractions/ | grep -E "^2026-02-(05|07-learning|10-qualia|10-the-self|11-the-grammar|12-the-cost|24-the-grammar-of-violence|24-the-invisible)" | wc -l
8

$ wc -l tmp/sahely-pdf-hashes.txt
37  (was 30; +7 Wave-4 rows)
```

## Allowlist compliance (C6 disjoint-list — 18 paths)

7 PDFs at `docs/research/corpus-review/originals/sahely-pdfs/2026-02-*` + 8 extractions at `docs/research/corpus-review/originals/sahely-extractions/2026-02-*` + 1 hash append at `tmp/sahely-pdf-hashes.txt` + 1 dispatch transcript at `tmp/sahely-dispatch-wave-4.md` = 17 paths touched (one less than the 18 budgeted because #3 has extraction but no PDF — stub). No writes outside the allowlist.

## Forbidden-tools compliance (C10)

Zero invocations of: git / send-* skills / `mcp__personal-koi__add_knowledge` / `ingest_url` / `vault_write_note` / `create_claim` / `resolve_entity` / `send_gmail_message`. Phase 1e KG ingestion remains orchestrator-scoped.

## Wave 4 complete

**Wave 4 complete. 8 extractions, 7 PDFs downloaded, 1 stub (#3 qualia, no PDF in email). 0 reposts discovered.**
