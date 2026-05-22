# Phase 1b PDF Tooling Preflight — Verified 2026-05-21

Per plan §Phase 1b Step 0. Sample PDF download + Read-tool extraction validation.

## Sample tested

**URL**: `https://bsahely.com/wp-content/uploads/securepdfs/2026/05/Toward-a-Maturana-Informed-Viability-Grammar_Dr-Bichara-Sahely-210526.pdf`
**Local path** (validation only; cleanup post-Phase-1): `tmp/sahely-step-0/sample.pdf`
**Size**: 1,182,467 bytes (1.13 MB)
**Pages**: **172** (via `pdfinfo` from poppler-utils at `/opt/homebrew/bin/pdfinfo`)
**Title metadata**: "Toward a Maturana-Informed Viability Grammar" (well-formed)

## HTTP HEAD probe (per C2 polite-crawl)

```
HTTP/2 200
server: nginx
content-type: application/pdf
content-length: 1182467
last-modified: Thu, 21 May 2026 19:47:19 GMT
etag: "6a0f6147-120b03"
cache-control: max-age=31536000
access-control-allow-origin: *
accept-ranges: bytes
```

CDN-cached (Automattic CDN via WordPress.com hosting). Range requests supported. Cache-friendly.

## Read tool extraction validation

`Read` tool with `pages: "1-5"`: ✅ PASS

- Tool returns rendered page images (visual) + extractable text.
- Page 1 (cover): title + subtitle + diagram of 8 diagnostic primitives (Conservation / Constraint / Margin / Disturbance / Regulation / Present Structure / Relevance / Possible Doings) around "LOVE — The Relational Ground of Humanness" + author credits ("Dr. Bichara Sahely, BSc (Biology), MBBS, DM (Internal Medicine), 21 MAY 2026").
- Page 2: clean title page (text).
- Page 3: Abstract — fully extractable; verifies the central claim ("viability cannot be reduced to survival, adaptation, stability, resilience, or functional persistence") + Maturana grounding + life-coherence definition.
- Page 4: Executive Summary — fully extractable; introduces 8 diagnostic primitives + conservation-through-change axiom.
- Page 5: Executive summary continuation + Acknowledgements. Explicit credit: "ChatGPT, GPT-5.5 Thinking, an AI language model developed by OpenAI, which served as a dialogical drafting and reasoning assistant". Confirms `ai_co_authored: true` flag for this post.

## Tooling stack verified

| Tool | Version / Source | Use |
|---|---|---|
| `curl` | system | C2 polite-crawl + friendly UA + 1-sec sleep |
| `pdfinfo` | poppler-utils via Homebrew (`/opt/homebrew/bin/pdfinfo`) | Page count + metadata probe |
| `mdls` (Spotlight) | macOS native | Fallback for page count (requires `mdimport` first) |
| `Read` (Claude Code) | built-in | PDF text + visual extraction; `pages:` parameter required for >10 page PDFs (max 20 pages per call) |

## Adjustments to Phase 1b procedure

1. **PDF size estimate revised**: sample is **172 pages**, not the 30-100 the plan assumed. At 9 Read calls per PDF (20 pages × 9 ≈ 180 pages, covers 172) for full coverage OR ~3-5 calls for selective extraction (TOC + Abstract + Exec Summary + section headers + key claims pages). Effort estimate stays in the 6-12h range for 80-105 PDFs given selective-extraction default.
2. **Extraction discipline**: NOT verbatim full-document reproduction. Per plan §Phase 1b extraction record shape: section structure (TOC if present) + ~10-30 verbatim key claims + primitives/framework tables + Acknowledgements (for AI-co-author flag confirmation). 3-5 Read calls per PDF average.
3. **Embed images selectively**: cover-page visualization (e.g., the 8-primitive diagram) is high-value evidence; record image-anchor reference in extraction record (e.g., `[pdf-p1-figure: 8-primitive-diagram-around-love-central-node]`).
4. **pdfinfo + mdimport workflow**: for each PDF, run `pdfinfo` (cheap, no Spotlight wait) to get page count + title metadata + author metadata before Read calls. Fall back to `mdimport` + `mdls` if pdfinfo unavailable.

## Pass criterion (per plan)

> ≥3 distinct page-ranges return readable text matching the expected white-paper structure (TOC / executive summary / body sections).

✅ PASS. Pages 1, 3, 4 all return readable text matching expected structure. No OCR escalation required for this sample.

## Phase 1b dispatch — GO
