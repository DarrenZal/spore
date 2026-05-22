# Phase 1e MCP Schema Preflight — Verified 2026-05-21

Per plan §Phase 1e Step 0b. Schemas loaded via ToolSearch at execution-start.

## Verified tools + parameter shapes

### `mcp__personal-koi__add_knowledge`
Required: `name` (episode title) + `facts[]` (array of fact objects).
Each fact: `subject`, `predicate` (UPPER_CASE), `fact_text` (natural-language sentence). Optional per-fact: `object`, `object_literal`, `object_type`, `subject_type`, `valid_from`, `valid_to`.
Optional top-level: `content` (full text), `create_entities` (default true), `group_id` (default "personal"), `source_description`, `source_document`.

**Delta from plan**: NO arbitrary `metadata` field. The plan's intended `ai_co_authored: true` flag must be folded into either (a) `source_description` text (e.g., `"web blog post, AI-co-authored by ChatGPT-5.5 + NotebookLM"`), or (b) the fact subject_type (won't fit), or (c) an explicit `MARKED_AS` predicate fact. **Disposition**: fold into `source_description` string.

### `mcp__personal-koi__extract_claims`
Required: `document_text` (min 50 chars), `source_document` (RID or path).
Optional: `auto_create` (default false), `confidence_threshold` (default 0.7).
Returns: claims with confidence scores. Auto_create=true persists immediately.

**Notes**: This is for AI-extracted *impact claims* (ecological/social/financial/governance) not arbitrary facts. Sahely's philosophical assertions ("love is the relational ground of humanness") don't cleanly fit impact-claim shape. **Disposition**: use `add_knowledge` with facts for general assertions; reserve `extract_claims` for posts that surface measurable-impact claims (e.g., Sahely's policy/governance posts on Middle East peace, syndemic + climate).

### `mcp__personal-koi__resolve_entity`
Required: `label` (entity name).
Optional: `type_hint` (Person, Organization, Project, Concept, Location, Meeting — per docstring; full type set per `list_entity_types` is 28).
Returns: best match with type, URI, confidence. Tier 1-3 cascade per backend tiers.

**Notes**: Auto-Tier-1-through-3 cascade in single call per `list_entity_types` resolution_tiers={tier1_exact, tier1x_fuzzy, tier15_contextual, tier2_semantic, tier3_create}. No separate fallback chain needed.

### `mcp__personal-koi__create_claim`
Required: `claimant_uri` (entity URI; must exist), `statement`.
Optional: `about_uri`, `claim_type` (ecological|social|financial|governance; default ecological), `metadata` (extensible: quantity, unit, dates, sdg_tags, methodology), `source_document`, `ai_confidence`, `supersedes_rid` (versioning).

**Notes**: Impact-claim shape only. Most Sahely facts don't fit. **Disposition**: not used by default; reserve for the small subset of Sahely posts with measurable governance/social claims.

### `mcp__personal-koi__link_evidence`
Required: `claim_rid`, `evidence_uri`.
Optional: `actor`.

**Notes**: For attaching evidence entities to existing claims. Not used in Phase 1e default flow (we're not creating claims).

### `mcp__personal-koi__anchor_claim`
Required: `claim_rid`.

**Notes**: Blockchain anchoring (Regen Ledger testnet). NOT used in Phase 1e — out of scope per plan.

### `mcp__personal-koi__list_entity_types`
No params. Returns 28 entity types with folder mappings + phonetic-matching flags + similarity thresholds.

**Verified output** (28 types):
Question, Practice, Claim, Concept, Protocol, Meeting, Playbook, Project, Evidence, Task, CaseStudy, Organization, Bioregion, Location, Pattern, Person, Commitment, CommitmentPool, CommitmentAction, Outcome, Initiative, WorkItem, Milestone, Decision, Risk, Metric, Intent, SpecDoc.

All plan-needed types confirmed present: **Person** (Sahely + cited authors), **Project** (TOWARDS LIFE-KNOWLEDGE), **Concept** (Sahely's vocabulary).

### `mcp__personal-koi__get_stats`
Optional: `detailed` (default false).

## Backend health snapshot (2026-05-21)

```
status: healthy
mode: personal
database: connected
embedding_available: true
embedding_model: text-embedding-3-large
embedding_dimension: 3072
semantic_matching: true
schema_version: 71cafb4d
null_embed_fact_count_db: 4
null_embed_fact_counter_process: 0
```

**Delta from plan**: plan §Phase 1e operational-notes said embeddings use `text-embedding-ada-002`. Actual model is `text-embedding-3-large` (3072-dim, larger). Cost-per-token is higher than ada-002 (~$0.13/1M tokens vs $0.10/1M tokens for ada-002) but still negligible for 105 posts × ~8KB total ≈ $0.06 total. Not a blocker.

## Task router

```
total_open: 1523
total_done: 186
in-progress: 2
overdue: 130
due_today: 11
due_this_week: 46
```

Mounted and operational. Phase 1d weekly sweep task can be added.

## Adjustments to Phase 1e procedure

1. **`ai_co_authored` flag**: fold into `source_description` text rather than top-level metadata. Example: `source_description: "bsahely.com blog post (AI-co-authored: ChatGPT-5.5 + NotebookLM)"`. Manifest carries the boolean flag separately.
2. **Predicates**: per plan (`AUTHORED`, `ENGAGES_CONCEPT`, `CITES_AUTHOR`, `MAKES_CLAIM`, `MENTIONED_IN`) all fit `add_knowledge.facts[].predicate` (UPPER_CASE). No schema change.
3. **`create_claim` reserved**: not used in default Phase 1e flow; reserved for posts surfacing measurable impact claims.
4. **Embedding model**: `text-embedding-3-large` (3072-dim) confirmed; not a blocker; cost negligible.

## Phase 1e dispatch — GO
