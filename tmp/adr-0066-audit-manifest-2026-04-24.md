# ADR-0066 Step 0.5 Audit Manifest — project-briefing-pattern disposition

**Date**: 2026-04-24
**Audit target**: `docs/governance/project-briefing-pattern.md`
**K4 source**: ADR-0065 §Consequences + §K4 deferral rationale (operator directive 2026-04-24 "ratify with one adjustment")
**Auditor role**: Child executor applying sub-class-typed earning-tests from ADR-0065 §M4 Sub-class Framework

---

## 1. Target file structural profile

### 1.1 Frontmatter (lines 1-7)

```yaml
doc_id: spore.project-briefing-pattern
doc_kind: pattern
status: active
depends_on:
  - spore.agent-commons-meta-protocol
```

Outbound dependencies: **1** (`spore.agent-commons-meta-protocol`, which is `doc_kind: architecture`).

### 1.2 Body section structure

10 sections (line numbers from `docs/governance/project-briefing-pattern.md`):

| # | Section | Lines | Present in 5 in-scope patterns? |
|---|---------|-------|-----|
| 1 | Problem | 13-15 | YES |
| 2 | Forces | 17-23 | YES |
| 3 | Solution | 25-27 | **NO** (5 in-scope use "Pattern") |
| 4 | Solution → Structure (API endpoint) | 29-47 | **NO** |
| 5 | Solution → Resolution Strategy | 49-56 | **NO** |
| 6 | Solution → Spec Hierarchy Assembly | 58-62 | **NO** |
| 7 | Solution → Graceful Degradation (table) | 64-71 | **NO** |
| 8 | Solution → Interface Layer (table) | 73-81 | **NO** |
| 9 | Known Uses | 83-87 | YES (called "Current Adopters / Related Implementations" in most) |
| 10 | Resulting Context | 89-95 | **NO** |
| 11 | Related Patterns | 97-101 | YES |

**Missing vs 5 in-scope patterns**: `Context` section (opens every in-scope pattern between frontmatter and Problem).
**Divergent**: Uses `Solution` container with 5 technical subsections (API shape, resolution, assembly, degradation, interface); in-scope patterns use `Pattern` with concept-level subsections (e.g. `Pool as field` / `Lifecycle` / `Settlement`).

### 1.3 Content character

Body content is operational-infrastructure-level:

- **Line 32-33**: HTTP endpoint signature `GET /project/briefing?project=<name-or-id>`
- **Lines 35-47**: JSON response shape specification
- **Lines 49-56**: Three-tier resolution strategy (URI match → metadata match → normalized-name match)
- **Lines 64-71**: Graceful-degradation behavior table (4 error conditions)
- **Lines 73-81**: Interface-layer mapping table (3 consumer surfaces: Claude Code `/project-context` skill / Dobby `project_briefing` MCP tool / Direct API `curl`)

### 1.4 Explicit self-characterization

Line 11: *"A reusable pattern for assembling project context from a knowledge graph, extracted from the working Agent Commons governance layer."*

Line 27: *"A single API endpoint that assembles project context by querying the knowledge graph..."*

Self-positioning is dual: both "reusable pattern" (Alexandrian vocabulary) and "API endpoint spec" (operational vocabulary). The body leans heavily toward the latter.

---

## 2. Cross-reference audit

### 2.1 Inbound citations (grep `project-briefing` across docs/)

| File | Line | Shape of reference |
|------|------|-------|
| `docs/README.md` | 59 | Listed in §Governance section: *"project-briefing-pattern.md — context assembly for agents"* |
| `docs/governance/agent-commons-meta-protocol.md` | 23 | **Cited as the CANONICAL EXAMPLE of `doc_kind: pattern`** in the Artifact Taxonomy table |
| `docs/governance/agent-commons-meta-protocol.md` | 55 | Tier 0 description: *"`GET /project/briefing` returns vision doc info + tasks + sessions"* (refers to the endpoint this doc specifies) |
| `docs/research/canon-decisions/0059a-downstream-cascade-miss-cleanup.md` | — | Mentions in audit-trail context |
| `docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md` | 118, 253, 259-267, 313, 330, 359 | Audit-outlier identification + K4 deferral + exclusion mechanisms |
| `docs/patterns/README.md` | 75 | Audit-outlier section: defers to ADR-0066 |

Non-self, non-ADR-0065/patterns-README inbound references:
- `docs/README.md:59` — descriptive listing in governance section
- `docs/governance/agent-commons-meta-protocol.md:23` — **canonical pattern exemplar**
- `docs/governance/agent-commons-meta-protocol.md:55` — endpoint functional reference

### 2.2 Inbound `depends_on` edges

**Zero.** No other doc in the repo declares `depends_on: [spore.project-briefing-pattern]`.

Verified via: `grep -r "spore.project-briefing-pattern" docs/ --include="*.md" -l` returns only 2 files: the target itself and `agent-commons-meta-protocol.md` (as taxonomy-table example, not as `depends_on` edge).

### 2.3 Significance of canonical-exemplar citation

`agent-commons-meta-protocol.md:23` is not a passing reference — it uses `spore.project-briefing-pattern` as the **definitional example of what `doc_kind: pattern` looks like** in the artifact taxonomy. This is load-bearing in a specific sense: the meta-protocol's authoritative row for `pattern` kind points to this doc.

Any reclassification of project-briefing-pattern's doc_kind MUST accompany an update to `agent-commons-meta-protocol.md:23`, or the meta-protocol's canonical example becomes stale/contradictory.

---

## 3. Structural comparison with 5 in-scope canonical patterns

### 3.1 Uniform shape of 5 in-scope patterns (body-section sequence)

All 5 in-scope patterns in `docs/patterns/` share this 6-section uniform shape:

1. **Context** — who has what problem in what coordination situation
2. **Problem** — question-form framing of the coordination challenge
3. **Forces** — tensions/constraints (3-5 bulleted items)
4. **Pattern** — the resolution with concept-level subsections
5. **Current Adopters / Related Implementations** — 2-4 concrete instance families
6. **Related Patterns** — typed cross-refs to peers

### 3.2 Forces — comparison of "what the forces operate on"

| Pattern | Forces domain |
|---------|---------------|
| commitment-pooling | coordination-substrate (decentralized coordination, composability, accountability, federation, circulation) |
| discourse-as-governance | coordination-substrate + epistemic (provenance, machine-readability, contestability, scale) |
| federated-knowledge-exchange | coordination-substrate + trust (sovereignty, selective sharing, consistency, stable refs, trust differentiation) |
| governance-memory | coordination-substrate + ergonomic (human/machine readable, composability, validateability, incremental adoption) |
| intent-publication | coordination-substrate + lifecycle (lightweight, structured, contradiction-tolerant, declared/inferred) |
| **project-briefing-pattern** | **API-behavior / system-infrastructure** (multiple interfaces, varying detail, freshness, graceful degradation, directory independence) |

The 5 in-scope patterns' forces operate on coordination-substrate (how agents coordinate). project-briefing-pattern's forces operate on API-behavior constraints (how a specific system serves context).

### 3.3 Pattern vs Solution subsection character

5 in-scope patterns' `Pattern` subsections are concept-level resolutions:
- commitment-pooling: *Pool as field / Lifecycle / Pool federation / Settlement / Constitutional relationship* (5 subsections, each a concept-level move)
- federated-knowledge-exchange: *Consent-based sharing / Event-driven eventual consistency / RID-based references / Trust tiers / Membrane governance / Two data channels* (6 concept-level moves)

project-briefing-pattern's `Solution` subsections are API-implementation detail:
- *Structure (HTTP signature + JSON shape) / Resolution Strategy (3 lookup tiers) / Spec Hierarchy Assembly (BFS algorithm) / Graceful Degradation (error table) / Interface Layer (consumer mapping table)*

These subsections are endpoint-implementation specifications, not concept-level pattern moves.

---

## 4. Structural comparison with `docs/governance/project-bootstrap-spec.md`

### 4.1 Sibling analysis

Both files live in `docs/governance/`. Both depend on `spore.agent-commons-meta-protocol`. Both describe "how to do something with the Agent Commons governance layer."

| Dimension | project-bootstrap-spec.md | project-briefing-pattern.md |
|-----------|--------------------------|--------------------------|
| `doc_kind` | `spec` | `pattern` |
| `depends_on` | `[spore.agent-commons-meta-protocol]` | `[spore.agent-commons-meta-protocol]` |
| Location | `docs/governance/` | `docs/governance/` |
| Purpose | "Operational definitions for registering a project" | "Reusable pattern for assembling project context" |
| Content | Tier definitions / required files / YAML frontmatter templates / JSON config fields | HTTP endpoint / JSON response shape / resolution tiers / degradation table / interface layer |
| Character | Operational-infrastructure spec | Operational-infrastructure spec |
| Inbound `depends_on` | 0 | 0 |

Both are operational-infrastructure specifications extracted-from-working-systems. `project-bootstrap-spec.md` calls itself a spec; `project-briefing-pattern.md` calls itself a pattern. The content character is near-identical.

### 4.2 Meta-protocol's own `spec` example

`agent-commons-meta-protocol.md:22` uses `spore.project-bootstrap-spec` as the canonical `doc_kind: spec` example.
`agent-commons-meta-protocol.md:23` uses `spore.project-briefing-pattern` as the canonical `doc_kind: pattern` example.

So the meta-protocol pairs them as its two sibling governance-layer example anchors — one each for spec and pattern. This is intentional design-time pairing, not accident.

---

## 5. M4 sub-class earning-test evaluation

Per ADR-0065 §M4 Sub-class Framework, the audit-outlier is evaluated against each of the 3 ratified sub-classes using sub-class-specific earning-tests.

### 5.1 composition-pattern

**(α-comp) Composition-articulability over primitives / doctrines / modes / properties**

What does project-briefing-pattern compose?
- SpecDoc entities (knowledge-graph objects, not Spore primitives)
- `governs` relationships (edge-type in spec-DAG, not primitive-level)
- `depends_on` edges (frontmatter-convention, not primitive-level)
- Task registry (Tier 2 infrastructure, not primitive-level)
- Session log (infrastructure, not primitive-level)

None of these are Spore's 9 primitives, 3 doctrines, 2 modes, or 2 properties. The doc composes over *governance-memory-infrastructure entities* (which is itself a pattern via `docs/patterns/governance-memory.md`), not over canon-object-class entities.

It could be argued that it composes over `governance-memory` pattern (but this is pattern-on-pattern composition, not primitive-composition per (α-comp) wording).

**VERDICT (α-comp): FAILS** — does not compose Spore canon-objects (primitives/doctrines/modes/properties).

**(β-comp) Recurrence across ≥3 independent instance-families**

Known Uses section (lines 85-87):
- Bioregional Knowledge Commons (BKC)
- Agent Commons (self-host)
- Personal workflow projects

3 instance-families numerically, but:
- BKC + Agent Commons + "personal workflow projects consuming the governance layer" all use the SAME endpoint-implementation (koi-processor reference implementation per meta-protocol Tier 2)
- "Different projects registering against one endpoint" is not the same as "independent re-implementations of a pattern"
- Compare to governance-memory pattern: BKC has its own canonical doc DAG; Spore self-hosts; personal/creative adopters implement independently — these are genuinely different instance-families

**VERDICT (β-comp): MARGINAL** — numerically 3 families but depth-of-independence is thin (all consume one endpoint-implementation).

**Overall composition-pattern fit**: FAILS (α-comp). Does not earn composition-pattern status under M4.

### 5.2 design-criteria-pattern

**(α-des) ≥N articulated design-criteria operating on field-conditions or coordination-substrate**

Forces section has 5 items:
- Multiple interfaces (API-behavior)
- Varying detail needs (API-behavior)
- Freshness (API-behavior)
- Graceful degradation (API-behavior)
- Directory independence (API-behavior)

N=5 (above N≥3 floor), but the forces operate on **API-behavior constraints** (how a specific HTTP endpoint should behave), NOT on **field-conditions or coordination-substrate** (what (α-des) requires).

Compare design-criteria-pattern exemplar (four-enabling-conditions): space / mission / resources / knowledge operate on the coordination-substrate for constructed-power to emerge. These are substrate-level criteria. project-briefing-pattern's "freshness" and "graceful degradation" are endpoint-ergonomics criteria.

**VERDICT (α-des): FAILS** — criteria present at floor but wrong target (API-behavior, not coordination-substrate).

**(β-des) ≥1 full-cluster primary-tradition + criteria-operationality evidence**

No tradition cited anywhere in the body. The doc self-describes as *"extracted from the working Agent Commons governance layer"* — this is working-systems-extraction, not tradition-grounded.

Compare design-criteria-pattern exemplar: four-enabling-conditions is grounded in Johar's *Power Cannot Be Allocated* (2026) with bridge-notes corpus + multiple works cited. project-briefing-pattern has zero tradition-citation.

**VERDICT (β-des): FAILS** — no primary-tradition citation, none appropriate (working-systems-extraction is not tradition-breadth).

**Overall design-criteria-pattern fit**: FAILS (α-des) + FAILS (β-des) = HARD FAIL.

### 5.3 catalog-pattern

**(α-cat) ≥N legitimate sub-entities each independently-motivated**

Candidate sub-entity sets in the body:
- **Interface Layer table** (lines 77-81): 3 consumers (Claude Code / Dobby / Direct API) — could count
- **Resolution Strategy** (lines 51-54): 3 tiers (URI / metadata / normalized-name) — internal-process-steps, not independent sub-entities
- **Graceful Degradation** (lines 67-71): 4 error conditions — error-handling rows, not sub-entities

Best candidate: Interface Layer's 3 consumers. But these are *consumer-surface mappings for one endpoint*, not independently-motivated sub-entities (Claude Code skill and Dobby MCP tool exist to consume this endpoint; they don't have independent motivation as pattern-library members).

Compare catalog-pattern exemplar (view-template): 5 view-templates (Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse) each have independent graph-structure + specialization-rationale grounded in ADR-0058 earning-test. Each view-template stands on its own merit.

project-briefing-pattern's 3 consumer-interfaces do NOT stand on their own merit — they exist because the endpoint exists. They are implementation-surfaces, not catalog-members.

**VERDICT (α-cat): FAILS** — no independently-motivated sub-entity set of N≥3.

**(β-cat) Host-structure-earning-test**

Would need: (a) named host-structure property; (b) per-sub-entity demonstration; (c) composition-or-aggregation rule.

If we force-fit "single API endpoint serving project context" as host-structure, the consumer interfaces are aggregated by "this endpoint is their backend." But this is implementation-level aggregation, not canon-level host-structure.

**VERDICT (β-cat): FAILS** — host-structure is implementation-backend, not canon-level composition rule.

**Overall catalog-pattern fit**: FAILS (α-cat) + FAILS (β-cat) = HARD FAIL.

### 5.4 Sub-class evaluation summary

| Sub-class | (α) verdict | (β) verdict | Overall |
|-----------|------------|-------------|---------|
| composition-pattern | FAILS (not primitive-composition) | MARGINAL (shallow independence) | FAILS |
| design-criteria-pattern | FAILS (wrong target — API-behavior) | FAILS (no tradition) | HARD FAIL |
| catalog-pattern | FAILS (no independent sub-entities) | FAILS (no canon host-structure) | HARD FAIL |

**None of the 3 ratified M4 sub-classes fit cleanly.** This is the exact scenario ADR-0065 §K4 rationale predicted.

---

## 6. Interpretation

Per honest-rigor cluster-counting discipline (inherited from ADR-0064 + exercised by ADR-0065 K4):

A single outlier that fails all 3 ratified sub-classes has two honest readings:

### Reading A: Mis-classified as pattern

The doc is actually an **API/endpoint specification** — `doc_kind: spec` — that was authored with `doc_kind: pattern` because:
- The word "pattern" appears in its title ("Project Briefing Pattern")
- It self-describes as "reusable pattern... extracted from working Agent Commons governance layer"
- The Alexandrian template (Problem → Forces → Solution) feels pattern-shaped

Supporting evidence:
- **Structural parallel to `project-bootstrap-spec.md`** (sibling in `docs/governance/`, same `depends_on`, same operational-infrastructure character, canonical `spec` example in meta-protocol row 22 — just as this doc is canonical `pattern` example in row 23)
- **Content is endpoint-spec**: HTTP method / response shape / resolution tiers / degradation table / interface mapping
- **Forces operate on API-behavior**, not coordination-substrate
- **No tradition-grounding**; extracted-from-working-systems is spec-lineage, not pattern-lineage
- **Zero inbound `depends_on`**: the spec-DAG doesn't cite it as load-bearing (consistent with it being an endpoint-spec whose implementation lives in koi-processor)

### Reading B: Valid 4th sub-class exemplar

The doc is a legitimate pattern but of a 4th sub-class (e.g. "infrastructure-pattern" — patterns about how governance-layer infrastructure is exposed/queried). Its non-standard shape signals a new sub-class category.

Supporting evidence:
- Meta-protocol canonically cites it as `pattern` example (load-bearing self-declaration)
- It IS extracted-from-working-systems (pattern-lineage rather than spec-lineage)
- Operational infrastructure patterns are legitimate pattern-category in software engineering (e.g. GoF patterns include infrastructure-level patterns like Proxy, Adapter)

Against:
- **Honest-rigor cluster-counting (ADR-0064 discipline)**: ADR-0065 K4 rationale explicitly declined inventing 4th sub-class on single-doc evidence. Reading B requires at least one additional infrastructure-pattern candidate to avoid single-doc-sub-class-invention.
- **Parsimony-as-earning-test-outcome (ADR-0048)**: if the content fits `doc_kind: spec` cleanly, promoting it to force a pattern-sub-class extension is anti-parsimonious.

### Reading C: Valid composition-pattern with retroactive normalization

The doc is a legitimate composition-pattern but its body-shape drift (Problem → Forces → Solution → Structure…) obscures the composition. A body-shape-fix + directory migration (docs/governance/ → docs/patterns/) would reveal it as composition-pattern.

Against:
- (α-comp) still FAILS honestly — it doesn't compose Spore primitives/doctrines/modes/properties regardless of body-shape
- Cosmetic normalization (body-shape edit + git mv) without substantive sub-class fit is Axis-J5-shaped (body-shape-fix) which ADR-0065 explicitly REMOVED as out-of-bounds
- Violates honest-rigor: forcing a fit to preserve `doc_kind: pattern` is anti-discipline

---

## 7. Disposition option space

Five options identified (full details in decision-brief at `tmp/adr-0066-decision-brief-2026-04-24.md`):

1. **K1 — grandfather in place** (ADR-0065 child's original rec, rejected at plan-revision gate)
2. **K1-provisional — 4th sub-class provisionally** (Reading B)
3. **K2 — migrate to `docs/patterns/`** (Reading C partial)
4. **K3a — reclassify to `doc_kind: spec`** (Reading A, primary)
5. **K3b — reclassify to `doc_kind: architecture`** (Reading A, alternative)
6. **K5 — rewrite in place to pattern shape** (Reading C fuller)
7. **K6 — retire / deprecate** (if serving no purpose)

**Audit recommendation (see decision-brief)**: Reading A (K3a reclassify to spec) earns cleanest fit under honest-rigor discipline. Supporting ADR-0066 would rename file to `project-briefing-spec.md`, update meta-protocol row 23 to point to a genuine pattern (e.g. `spore.governance-memory`), add cross-reference from spec file to governance-memory pattern. Total surface ≈ 4-5 files, bounded.

---

## 8. Frontmatter + validator impact projections per option

| Option | File renames / moves | doc_id changes | Meta-protocol row 23 update | Validator delta | Yaml bump | Canon-body edits |
|--------|---------------------|--------------|--------------------------|-----------------|-----------|------------------|
| K1 (grandfather) | 0 | 0 | none | 0 | no | 0 |
| K1-provisional | 0 | 0 | possibly add infrastructure-pattern | 0 | no | `docs/patterns/README.md` + `project-vision.md:111` + ADR-0065 reference (pattern-library infrastructure extended) |
| K2 (migrate) | 1 (git mv) | 0 | none | 0 | no | body-shape edits (Axis J5 shape) |
| **K3a (reclassify spec)** | optional rename file + slug | **1** (`spore.project-briefing-pattern` → `spore.project-briefing-spec`) | **1** (row 23 updated to different pattern) | 0 | no | frontmatter edit + optional file rename + meta-protocol edit |
| K3b (reclassify architecture) | optional rename file + slug | 1 | 1 | 0 | no | similar to K3a |
| K5 (rewrite in place) | 0 | 0 | none | 0 | no | heavy body rewrite (Axis J5 shape) |
| K6 (deprecate) | 0 | 0 | ? | 0 | no | status: active → deprecated |

K3a minimizes scope (frontmatter + filename + 1 meta-protocol edit + 1 docs/README.md edit + 1 docs/patterns/README.md audit-outlier section removal) while honestly following the evidence.

---

## 9. Cross-references (audit trail only; not in ADR-0066 frontmatter)

- `docs/governance/project-briefing-pattern.md` (target)
- `docs/governance/project-bootstrap-spec.md` (structural sibling)
- `docs/governance/agent-commons-meta-protocol.md:22-23` (taxonomy example rows)
- `docs/governance/agent-commons-meta-protocol.md:55` (Tier 0 endpoint reference)
- `docs/README.md:59` (governance-section listing)
- `docs/patterns/README.md:73-75` (audit-outlier pre-documentation from ADR-0065)
- `docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md` (K4 deferral source)
- `docs/patterns/*.md` (5 in-scope patterns — structural comparison set)

All cross-references verified at HEAD `5b4fa86`.

---

## 10. Audit conclusions

1. **project-briefing-pattern fails all 3 M4 sub-class earning-tests** under honest-rigor evaluation (composition-pattern fails α-comp; design-criteria fails both α-des and β-des; catalog fails both α-cat and β-cat).
2. **Structural character is spec-shaped**: API endpoint / response shape / resolution tiers / graceful-degradation / consumer-interface table parallels `project-bootstrap-spec.md` (doc_kind: spec sibling).
3. **Forces target is API-behavior** (multiple interfaces / freshness / graceful degradation / directory independence), not coordination-substrate.
4. **Zero tradition-grounding**; extracted-from-working-systems lineage is spec-lineage, not pattern-lineage.
5. **Zero inbound `depends_on`**; spec-DAG does not cite as load-bearing (consistent with endpoint-spec that is implemented in external repo).
6. **Meta-protocol canonical-exemplar citation** at row 23 is load-bearing — any reclassification requires meta-protocol row 23 update.
7. **Honest-rigor cluster-counting discipline** (inherited from ADR-0064 through ADR-0065 K4) argues against inventing 4th sub-class on single-doc evidence.
8. **Cleanest disposition**: K3a reclassify to `doc_kind: spec` with minor bounded coordinated-edits across 3-5 files. See decision-brief for full option evaluation and recommendation.

---

**Audit status**: COMPLETE. Next step: Step 1 decision-brief at `tmp/adr-0066-decision-brief-2026-04-24.md`.
