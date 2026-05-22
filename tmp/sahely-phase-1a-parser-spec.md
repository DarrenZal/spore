# Phase 1a Gmail Parser Specification — v1.1 (post-execution)

## Version history

- **v1.0** (2026-05-21 pre-dispatch): initial spec based on 3-email canary.
- **v1.1** (2026-05-21 post-dispatch): updated after Phase 1a sub-agent execution on all 104 emails. Drift findings absorbed; defensive AI-tool pattern list extended; 3 misclassified `ai_co_authored: false` files patched.

## v1.1 additions (absorb into parser if re-running)

1. **Asset format variants** — Sahely's subscription emails ship with TWO asset-block format variants; parser must handle both:
   - Nested-paren (newer, May 2026): `Download Full Document (PDF ( <url> ))`
   - Flat-paren (older + some mid-era): `[Download Full Document (PDF) ( <url> )]`
   - Detection: if regex with nested form fails, fall back to flat-paren regex. Sub-agent's parser at `tmp/sahely-parser.py` implements both.

2. **AI-credit separator drift** — title format `<title> | <AI tools>` is the canonical Shape C suffix, but **3 Feb 2026 posts** drop the ` | ` separator:
   - `2026-02-10-the-self-as-a-viability-stack-...`: ends `... Identity |ChatGPT5.2 & NotebookLM` (no space before `|`)
   - `2026-02-12-the-unifying-grammar-of-viability-...`: ends `... Futures ChatGPT5.2 & NotebookLM` (no separator at all)
   - `2026-02-13-immunity-as-a-multi-scale-...`: ends `... Dynamics ChatGPT5.2 & NorebookLM` (no separator + typo)
   - Heuristic upgrade: scan trailing 30 tokens of title for AI-tool keyword cluster (ChatGPT* / Gemini* / NotebookLM* / Claude* / Pictory / Midjourney / Suno / Runway / DALL-E / Sora). If found ≥1 keyword in trailing token cluster, extract credits. **Already patched manually in the 3 files post-execution; future re-runs should apply this heuristic.**

3. **AI-tool name canonicalization** — when extracting credits, canonicalize known typos and formatting variants to standard spelling:
   - `NorebookLM`, `NoteBookLM`, `NotebookLM-Augmented` → `NotebookLM`
   - `ChatGPT-Thinking 5.5`, `ChatGPT-5. 5 Thinking`, `ChatGPT_5.5 Thinking` → `ChatGPT-5.5 Thinking`
   - `ChatGPT5.2`, `ChatGPT 5.2`, `ChatGPT-5.2` → `ChatGPT5.2` (preserve version; choose one canonical separator)
   - Keep `title_full` verbatim (with typo); use canonical form only in `ai_tool_credits` list.

4. **Defensive AI-tool pattern list** (extend from v1.0):
   - `ChatGPT`, `ChatGPT-N.M`, `ChatGPT N.M`, `ChatGPTN.M`, `ChatGPT_N.M`, `ChatGPT Thinking`, `Gemini`, `Gemini Pro`, `Gemini (figures)`, `NotebookLM`, `Claude`, `GPT-N`
   - **NEW**: `Pictory`, `Midjourney`, `Suno`, `Runway`, `DALL-E`, `Sora` (image/video/audio generators)

5. **Bare PNG URLs in body** — short NotebookLM-only posts sometimes have raw `https://bsahely.com/.../*.png` lines in body without preceding "Click on infographic" label. Treat as body content; do not strip; do not promote to asset_urls.

6. **Asset label fallback** — when asset-block has no leading label (bare `(PDF ( url ))`), default `type: pdf-primary` (consistent with "Download Full Document" being the canonical primary).

## Actuals vs v1.0 estimates (Phase 1a execution 2026-05-21)

| Estimate | v1.0 estimate | v1.1 actual |
|---|---|---|
| Shape A (admin) | 2-5 | 1 |
| Shape B (`[New post]` prefix) | 30-50 | 3 |
| Shape C (recent format) | 50-70 | 100 |
| Reposts | 10-20 | 3 |
| Has primary PDF | 80-95 | 81 |
| No primary PDF | (implied 5-25) | 22 |
| Parse failures | (target 0) | 0 |
| Injection signals | (unknown) | 0 |

**Key insight**: Sahely transitioned to no-`[New post]`-subject-prefix format around late-2023 / early-2024, and his post-LLM-era output (2024-2026) is overwhelmingly Shape C. The corpus is more recent-heavy than initially mapped.

## Topical classification spread (Phase 1a 103 posts)

| Classification | Count | % |
|---|---|---|
| viability-grammar | 43 | 41.7% |
| autopoiesis-medicine | 23 | 22.3% |
| political-economy | 17 | 16.5% |
| systems-science | 6 | 5.8% |
| other | 6 | 5.8% |
| peace-civilization | 5 | 4.9% |
| repost-curated | 3 | 2.9% |
| sheaf-geometry | 1 | 1.0% |

**Phase 2 anchor implications**: viability-grammar dominates (43/103 = 42%); plenty of substrate for the May 21 Maturana paper to be a true canon anchor + parallel posts. Sheaf-geometry is scarce (1 of 103) — the Apr 2 paper is uniquely positioned; no second sheaf post for cross-check.

## Reusable assets

- Parser script: `tmp/sahely-parser.py` (re-runnable; handles both asset-paren variants + extended AI-tool patterns)
- Admin skip log: `tmp/sahely-admin-emails-skipped.md` (1 entry; format `- <message_id> | <date> | <subject>`)
- v1.0 parser-spec content follows below (preserved for traceability)

---

# Phase 1a Gmail Parser Specification — v1.0 (pre-dispatch canary findings 2026-05-21)

Per plan §Phase 1a. Built from canary work on 4 emails spanning the inbox date range.

## Sample emails examined

| Gmail Message ID | Date | Type | Notes |
|---|---|---|---|
| `185665bef6996ec5` | 2022-12-31 | subscription-confirmation | Admin email; filter out |
| `186ee1a2a9a310f6` | 2023-03-17 | post (repost of others' work) | Subject prefix `[New post]`; Sally Goerner interview reproduced from Circular Conversations; no PDFs |
| `19ad453808572253` | 2025-11-30 | post (Sahely-original) | No subject prefix; ChatGPT5.1 + NotebookLM AI-credited; audio + video only (no PDF); HTML entities (`&#038;`) in URL/title |
| `19e4c2a8ff52b601` | 2026-05-21 | post (Sahely-original) | Recent format; ChatGPT-5.5 Thinking + NotebookLM; 3 PDFs + 3 MP3s + 2 videos + infographic; canonical canary |

## Three email shapes detected

### Shape A — Admin/subscription emails (filter out)

**Detection cue**: subject starts with `"Confirm your subscription"` OR `"Welcome to"` OR similar. Body lacks `Post :` line and `URL :` line.

**Parser action**: write a single-line entry in `tmp/sahely-admin-emails-skipped.md` recording the message ID + date + subject; do NOT create a per-email markdown file. Manifest gets no row for these.

**Estimated count**: 2-5 emails out of 105 (subscription confirmations, occasional WordPress admin notifications).

### Shape B — Older post emails (2017-2024 era; `[New post]` subject prefix)

**Detection cue**: subject starts with `"[New post] "`; body has `Post :` line + `URL :` line + `Author : LIFE`.

**Parser action**: standard post-notification parsing; strip `[New post] ` prefix from subject to get `gmail_subject_stripped`. **Important**: many of these are **reposts of others' work** (curator role), not Sahely-original. Detect via:
- Body contains `"Reproduced from:"` line → set `is_repost: true`
- Capture the source URL + source title/author from the "Reproduced from:" line
- Manifest column: `is_repost: bool` + `repost_source_url` + `repost_source_title`

**Why this matters for Phase 1e KG ingestion**: reposts represent Sahely curating + amplifying others' work. The C-claims belong to the original author (Goerner, etc.), not Sahely. Fact predicates should be `(Sahely, REPOSTED, <other-author's-piece>)` + `(<other-author>, AUTHORED, <piece>)` — NOT `(Sahely, AUTHORED, ...)`. Preserves attribution integrity.

### Shape C — Recent post emails (2024-2026 era; no subject prefix)

**Detection cue**: subject lacks `[New post] ` prefix; body has `Post :` line + `URL :` line + `Author : LIFE`.

**Parser action**: standard post-notification parsing; subject = title directly.

**HTML entity decoding required**: WordPress encodes `&` → `&#038;` in `Post :` line and URL line for emails of certain vintages (e.g., `19ad453808572253` Nov 2025 has `St Kitts &#038; Nevis`). Decode common entities: `&#038; → &`, `&amp; → &`, `&#8217; → '`, `&#8211; → –`, `&quot; → "`. Use Python `html.unescape()` equivalent.

**AI-credit detection**: title format is `<post title> | <AI tools comma-separated>` where the `|` appears once at the end. AI-tool patterns: `ChatGPT`, `ChatGPT-N.M`, `ChatGPT N.M`, `ChatGPTN.M`, `Gemini`, `Gemini Pro`, `NotebookLM`, `Claude`, `GPT-N`. Set `ai_co_authored: true` if any matched. Examples seen:
- `ChatGPT5.1 & NotebookLM` (Nov 30 2025)
- `ChatGPT-5.5 Thinking and NotebookLM` (May 21 2026)
- `ChatGPT5.3, Gemini and NotebookLM` (Apr 2 2026)
- `ChatGPT5.5 Thinking and NotebookLM` (May 20 2026)
- `Gemini` alone (Mar 4 2026 — Life Value Manifesto)

### All shapes — body structure (post-notification only)

```
Post       : <title; may contain | <AI credits> suffix; may contain HTML entities>
URL        : <canonical URL>
Posted     : <date + time> (local time; format varies)
Author     : LIFE
Tags       : <comma-separated list>
Categories : <comma-separated list>

<optional asset list — formatted as "<Label> (PDF (<url>))" or "<Label> (PPT (<url>))" etc.>
<optional audio links — formatted as "Listen to the audio - <filename>.mp3 ( <url> )">
<optional video thumbnails — bare URLs to wordpress.com videos>
<optional infographic — bare URL or "Please click on infographic to enlarge \n\n<URL>">

<body content — varies: Executive Summary heading + body, OR full essay text, OR "Reproduced from: ..." + content>

Add a comment to this post: <URL>#respond

-- 

Manage Subscriptions
<URL>

Unsubscribe:
<URL>
```

## Frontmatter schema (per-email markdown file)

Required:
```yaml
canonical_url: https://bsahely.com/yyyy/mm/dd/slug/
title: "<HTML-decoded title with AI credits stripped from suffix>"
title_full: "<HTML-decoded title verbatim>"
ai_tool_credits: ["<credit1>", "<credit2>"]  # empty list if none
ai_co_authored: <bool>
published_iso: "<ISO-8601 UTC from email Date header>"
post_date_local: "<verbatim from body Posted: line>"
author: LIFE
gmail_message_id: "<hex string>"
gmail_thread_id: "<hex string>"
gmail_internal_date_unix: <int>  # Gmail API internalDate / 1000
gmail_subject: "<verbatim>"
gmail_subject_stripped: "<subject with [New post] prefix removed>"
gmail_from: "<from-header verbatim>"
gmail_message_rfc_id: "<message-id header verbatim>"
categories: [<list>]
tags: [<list>]
asset_urls: [<list of {type, url, label?, pdf_status?, note?}>]
topical_classification: <enum: viability-grammar | autopoiesis-medicine | political-economy | sheaf-geometry | peace-civilization | systems-science | foundation-2017-2018 | repost-curated | other>
post_rid: "orn:source:bsahely-<yyyy-mm-dd>-<slug40>"
intake_status: gmail-harvested
intake_phase: 1a
parse_status: <enum: clean | manual-review | partial>
is_repost: <bool>
repost_source_url: <URL or null>
repost_source_title: <str or null>
last_seen_iso: <ISO-8601>
```

Body: verbatim body content from email between asset-block-end and `Add a comment to this post:` footer.

## Topical classification heuristics

Detect via title-substring + tag-substring matching. First match wins; multi-tag possible via post_classifications array (manifest column).

| Classification | Title/tag keywords |
|---|---|
| viability-grammar | "viability grammar", "viability", "diagnostic distinctions" |
| autopoiesis-medicine | "autopoiesis", "Maturana" + ("medicine" OR "immunology" OR "biology of living" OR "structural coupling") |
| political-economy | "economics" OR "money" OR "debt" OR "oligarchy" OR "neoliberal" (and not in repost context) |
| sheaf-geometry | "geometry", "sheaf", "Fano", "octonions", "E8", "Freudenthal" |
| peace-civilization | "peace" OR "Galtung" OR "civilization" OR "structural violence" |
| systems-science | "systems", "ENS", "energy network", "regenerative", "Goerner" (often repost) |
| foundation-2017-2018 | published_iso < 2019-01-01 |
| repost-curated | is_repost: true |
| other | none of the above |

Multi-tag — May 21 viability grammar post hits BOTH `viability-grammar` (primary) AND `autopoiesis-medicine` (secondary).

## Filename slug rule (refined from C7)

`<yyyy-mm-dd>-<slug_smart>` where:
- `slug_smart` = first 80 chars of post URL slug, truncated at LAST dash before char 80 to avoid mid-word break
- Lowercased ASCII (Python `unidecode` for non-ASCII)
- Trailing-hyphen stripped
- Collision-break: append `-<short-hash-8>` of full URL

**Example**: `2026-05-21-toward-a-maturana-informed-viability-grammar-deriving-diagnostic-distinctions` (77 chars; no mid-word break)

## RID slug rule (per C8)

`slug40` = first 40 chars of post URL slug, lowercased ASCII, trailing-hyphen-stripped, **trimmed at last dash** before char 40.

**Example**: `toward-a-maturana-informed-viability-grammar-d` → trim at last dash before 40 → `toward-a-maturana-informed-viability-grammar` (44 chars actually; need to trim) → first 40 = `toward-a-maturana-informed-viability-gra` → trim at last dash → `toward-a-maturana-informed-viability` (35 chars)

So actual RID: `orn:source:bsahely-2026-05-21-toward-a-maturana-informed-viability`

**Decision**: relax slug40 to "first ≤40 chars, dash-trimmed" rather than strict 40-char truncation. Collision-resistance still holds because the date prefix is canonical-URL-component.

## Phase 1a sub-agent dispatch updates

1. **Filter admin emails first**: pre-pass over all 105 Gmail messages with subject-keyword filter to identify admin emails; skip those, save list to `tmp/sahely-admin-emails-skipped.md`.
2. **Detect email shape per message**: Shape A → skip; Shape B → strip `[New post] ` prefix + check `Reproduced from:` for repost detection; Shape C → standard parse + HTML-decode + AI-credit parse.
3. **Run 3 parser samples first** before dispatching full batch: 1 oldest post-notification, 1 mid-range (2024), 1 recent (already done — May 21 canary). If parser samples produce `parse_status: clean` on all 3, dispatch full Phase 1a.
4. **Failure mode**: any message that fails to parse cleanly gets `parse_status: manual-review` with `parse_error: <message>` + frontmatter-only file (no body); operator-resolves per-case.
5. **Repost discipline**: posts with `is_repost: true` get topical_classification = `repost-curated`. Phase 1e KG ingestion for reposts uses different predicate shape: `(Sahely, REPOSTED, <piece>)` + `(<original_author>, AUTHORED, <piece>)`. Phase 2/3 bridge notes for reposts cite the original author as the source, not Sahely.
6. **Audio/video deferred per plan**: Shape C posts may carry only audio/video (no PDF). These get `pdf_status: no-pdf-attached`. Phase 1b skips PDF download for these; extraction record records only the executive summary from the email body (no PDF body to extract).

## Estimated email-shape breakdown across 105 emails (rough)

- **Shape A** (admin/subscription): 2-5 emails
- **Shape B** (older `[New post]` posts, including reposts): 30-50 emails (2023-mid-2024)
- **Shape C** (recent posts, including AI-co-authored white papers): 50-70 emails (late-2024 onward)
- **Has primary PDF**: ~80-95 emails (mostly Shape C; some Shape B don't carry PDFs)
- **Reposts**: ~10-20 emails (mostly mid-Shape-B era)

These are rough estimates; manifest population will give actual counts.

## Canary GO/NO-GO

- **Canary 1 (May 21 viability grammar)**: ✅ parser shape works; per-email markdown file written.
- **Canary 2 (Mar 2023 Goerner repost)**: parser shape works WITH addition of `is_repost` + `repost_source_*` fields + `[New post]` prefix strip.
- **Canary 3 (Nov 2025 St Kitts essay)**: parser shape works WITH HTML entity decoding + handling no-PDF case.
- **Canary 0 (Dec 2022 subscription)**: correctly filtered out.

**GO for Phase 1a sub-agent dispatch.** Parser spec is robust against the variation observed.
