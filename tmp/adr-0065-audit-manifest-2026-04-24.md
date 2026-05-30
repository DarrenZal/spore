# ADR-0065 Step 0.5 Audit Manifest

**Generated**: 2026-04-24 (executor: child agent, Steps 0+0.5+1 OUTSIDE session-atomic window)
**Baseline HEAD**: `84ea597` Spore; `f15f96f` IC; `6d4935c` PM
**Validator pre**: 9 errors / 30 warnings (stable-field baseline)
**Concepts yaml**: v12 frozen 2026-04-22 (60 slug entries by grep count)

This audit re-verifies Phase 1 reconnaissance + extends with concrete evidence. **Phase 1 scaffolding findings are NOT conclusions.** Where my audit finds different data, I report the delta honestly.

---

## Frontmatter-inventory

### Major correction to Phase 1: there are SIX patterns, not five

Phase 1 enumerated 5 pattern docs in `docs/patterns/`. Audit finds a **sixth** at a different path:

| # | Path | doc_id | status | depends_on | Size |
|---|------|--------|--------|------------|------|
| 1 | `docs/patterns/commitment-pooling.md` | `spore.commitment-pooling` | active | `spore.governance-artifacts` | 91 lines |
| 2 | `docs/patterns/discourse-as-governance.md` | `spore.discourse-as-governance` | **draft** | `spore.governance-artifacts` | 74 lines |
| 3 | `docs/patterns/federated-knowledge-exchange.md` | `spore.federated-knowledge-exchange` | active | `spore.federation-protocol` | 83 lines |
| 4 | `docs/patterns/governance-memory.md` | `spore.governance-memory` | active | `spore.agent-commons-meta-protocol`, `spore.governance-artifacts` | 67 lines |
| 5 | `docs/patterns/intent-publication-and-activation.md` | `spore.intent-publication` | active | `spore.governance-artifacts` | 86 lines |
| 6 | `docs/governance/project-briefing-pattern.md` | `spore.project-briefing-pattern` | active | `spore.agent-commons-meta-protocol` | 101 lines |

**Finding**: Phase 1 reconnaissance MISSED `docs/governance/project-briefing-pattern.md`. It carries `doc_kind: pattern` but lives in `docs/governance/`, not `docs/patterns/`. This is directly relevant to **Axis D placement convention** — the placement convention is NOT currently "one directory" but is split de facto.

### Per-pattern 5-column audit

| Pattern | (a) Frontmatter fields | (b) Primitive/doctrine/mode/property refs in body | (c) Earning-test / criteria in body | (d) Cross-ref convention | (e) Recurrence-evidence count |
|---------|--------------|-------------------|-----------------|---------------|---------------------|
| commitment-pooling | doc_id / doc_kind / status / depends_on | intent (body prose), commitment (body prose), governance, constitutional-artifacts | None — body prose only | "Related Patterns" section, bridge-note file-link to flow-funding | **3 instance families**: BKC pools, VCV on Celo, Grassroots Economics CLC |
| discourse-as-governance | doc_id / doc_kind / status / depends_on | Claim, Attestation, Evidence, Artifact, Signal (grammar-derivation table) | None — but contains "Grammar Derivation" table showing composition from primitives | "Related Patterns" + ADR/foundation ref by `spore.*` doc_id | **3 instance families**: Spore self-hosting, BKC decision logs, personal-project plan review |
| federated-knowledge-exchange | doc_id / doc_kind / status / depends_on | membrane (§Membrane governance), signal (§Event-driven eventual consistency) | None — body prose only | "Related Patterns" (Related by name, not doc_id) | **3 instance families**: BKC 4-node federation, KOI-net protocol, BKC meta-protocol |
| governance-memory | doc_id / doc_kind / status / depends_on | depends_on, doc_id, doc_kind (meta-list enumerates 9 doc_kinds — **canonical `doc_kind: pattern` source**) | "Tiered adoption" table (Tier 0/1/2) — adoption gate, not earning-test | "Related Patterns" by name | **3 instance families**: Spore self-hosting, BKC canonical doc DAG, personal + creative/bioregional Tier 0-1 |
| intent-publication-and-activation | doc_id / doc_kind / status / depends_on | intent, commitment, governance, vision, roadmap; hypergraph | None — but contains "Note: This pattern is emerging. Vector framing and activation gate are design targets informed by existing practice but not yet implemented" | "Related Patterns" by name | **1 instance family**: BKC commitment extraction pipeline (explicitly flagged as "precursor implementation, not a direct adoption of this pattern") |
| project-briefing-pattern | doc_id / doc_kind / status / depends_on | None (infrastructure-pattern, not grammar-pattern) | Contains API shape + graceful-degradation table (design-criteria, not earning-test) | "Related Patterns" section (present; need line-grep to enumerate) | **1 instance family** (implied): Agent Commons governance layer |

### Phase 1 finding: uniform frontmatter (re-verified)

All 6 patterns carry ONLY the minimal set `doc_id / doc_kind / status / depends_on`. **NONE carry** `r_claim_source`, `concepts[]`, `relates_to`, `authorized-by`, `supported_by`, `affects_canon`, `phase:`, `tradition_citations:`, `recurrence_evidence:`, `instance_families:`, or `opened-on`. Phase 1's claim on this is CONFIRMED.

### Phase 1 finding: uniform body shape (PARTIALLY refuted)

Phase 1 said "Context → Problem → Forces → Pattern → Adopters → Related Patterns." Audit finds:

- **5 of 6** patterns follow Context → Problem → Forces → Pattern → Adopters → Related Patterns.
- **project-briefing-pattern** follows Problem → Forces → **Solution** → Structure → Resolution Strategy → Graceful Degradation → Interface Layer → Related Patterns. NO "Pattern" section heading; uses "Solution" instead. NO "Context" section. Partial-asymmetry finding.

### Recurrence-evidence gradient: honest re-count

Phase 1 said "3 patterns = 1 family, 2 patterns = 3-4 families." Audit (stricter count of INDEPENDENT instance families, not just adopter-list bullet count):

- **1 instance family**: intent-publication-and-activation (BKC commitment-extraction, explicitly "precursor not direct adoption"); project-briefing-pattern (Agent Commons governance layer)
- **3 instance families**: commitment-pooling (BKC pools + VCV + Grassroots CLC); discourse-as-governance (Spore + BKC + personal-project); federated-knowledge-exchange (BKC 4-node + KOI-net + BKC meta-protocol); governance-memory (Spore + BKC + personal/creative)

**Honest count**: 4 patterns at 3 families / 2 patterns at 1 family. Phase 1 count was approximately right in direction (gradient exists) but wrong in split (was 3/2; actually 4/2 with the +1 from project-briefing-pattern). The gradient is real.

---

## Taxonomy-three-framing

### Phase 1 finding: three unreconciled framings

CONFIRMED with exact line numbers. The tension is real and currently unresolved.

**Framing 1 — `doc_kind: pattern` is canonical doc_kind.**
- Source: `docs/patterns/governance-memory.md:36` (self-referential — the pattern that canonizes doc_kind names `pattern` in its own 9-doc_kind enumeration).
- Quote: *"doc_kind: The document's role -- vision, foundation, architecture, spec, operations, research, positioning, **pattern**, roadmap."*
- Status: canonical via self-hosting discipline.

**Framing 2 — Patterns are the 4th category of canon objects.**
- Source: `docs/project-vision.md:111` §"Four categories of canon objects" (bolded key phrase: *"(iv) patterns — recurring compositions mediating between containment and connection (governance-memory pattern; federation-encounter parked as pattern-library admission candidate under ADR-0055 triggers E-1 through E-5)."*
- Authored by ADR-0048 (mentioned in line 111 parenthetical). Currently enumerates only `governance-memory` by name as admitted pattern + federation-encounter as parked candidate.
- **Asymmetry**: `project-vision.md:116` §"Sovereign identity, shared memory, governance patterns, federation rules" also says these are "not primitive operations. Previous Core Thesis framings that listed these as 'five primitives' are superseded; they now live at the instance-model and pattern-library layer." This is a SECOND canon reference to "pattern-library" — reinforcing patterns as a canon-object-class.

**Framing 3 — Patterns are EXPLICITLY OUT OF canon-review-protocol scope.**
- Source 1: `docs/research/planning/canon-review-protocol.md:34` §"1. Scope: what 'canon' means per project" — *"Canon = foundation + vision + roadmap docs that define each project's normative self-description. Research notes, bridge notes, capstone syntheses, **patterns**, governance, positioning, protocols, and operational docs are NOT canon for the purposes of this protocol."*
- Source 2: `docs/research/planning/canon-review-protocol.md:58` §"Explicitly out of scope" — *"Explicitly out of scope: governance/, **patterns/**, positioning/, protocols/, synthesis/, phase-0-spec (PM), all code, research/ except for canon-decisions and canon-framing files created by this protocol."*

### Axis I tension articulation

Framings (1) + (2) make patterns first-class canon objects; framing (3) makes them out-of-scope for canon-review. These are logically compatible IF "canon-review scope" is narrower than "canon-object-class." The tension is a SCOPE-CONDITIONING opportunity analogous to ADR-0062/0063/0064: distinguish "canon-object" (broad, includes patterns) from "canon-review-protocol target" (narrower, excludes patterns).

**Additional framing found not in Phase 1**: `docs/project-vision.md:116` uses phrase **"pattern-library layer"** as distinct term. And `docs/project-vision.md:10` refers to Agent Commons as *"a pattern language, protocol family, and governance-memory pattern"* — so "pattern" is also product-layer vocabulary. Four semantic senses of "pattern" coexist in canon: (a) canon-object-class (project-vision.md:111); (b) doc_kind (governance-memory.md:36); (c) pattern-library-layer (project-vision.md:116); (d) product "pattern language" (project-vision.md:10). Axis I may need to reconcile these if operator wants full rigor.

### Asymmetry re-verification: four-categories parallel absence in governance-artifacts

CONFIRMED. Exact line numbers for comparison:

- `docs/project-vision.md:111` has the full 4-category list.
- `docs/foundations/governance-artifacts-and-graph-projections.md`: no such list exists.
  - Line 77 has §"Artifact-types some coordination contexts author" which is a parallel to project-vision.md §"Visions, roadmaps..." but does NOT list the 4 categories.
  - Potential insertion site: after line 28 (after "commitment ecology — not a hierarchy..." paragraph) OR after line 77 §"Artifact-types" paragraph. The §"Power across primitives" paragraph at line 67 is the natural anchor (it references ADR-0048, which is the same ADR that mints the 4-category list at project-vision.md:111).
  - Or: new section between §"The Coordination Ecology" (line 28) and §"Artifact-types" (line 77). AXIS-INDEPENDENT per plan §Step 3 instruction (resolves Phase 1 asymmetry).

---

## Yaml-schema

### Concepts yaml structure (verified)

Header: `# status: frozen` / `# version: v12` / `# frozen_at: 2026-04-22` / `# owner: Darren Zal`

Version-log comments progress v2 → v3 → v4 → v5 → v6 → v7 → v8 → v9 → v10 → v11 → v12 with operator-authorized extensions.

Schema per entry:
```yaml
- slug: <slug-name>
  canonical_label: <Title Case Label>
  aliases: [alias1, alias2, ...]
  one_line_definition: <brief prose>
  primary_project: <spore|ic|pm>
```

**Slug count**: 60 total entries by `grep -cE "^- slug:" docs/research/concepts-p2p-wiki.yaml`.

**NO `category:` field anywhere.** Confirmed. Only `primary_project:` scopes slugs by project.

### Pattern slug registration (of the 6 patterns)

Only 2 of 6 pattern-slugs are registered in yaml (Phase 1 said 2 of 5 — still true by count, but denominator is now 6 not 5):

| Pattern doc_id | Slug in yaml? | yaml line |
|----------------|---------------|-----------|
| `spore.governance-memory` | YES (`governance-memory`, aliases: [`governance-memory-pattern`]) | L160 |
| `spore.commitment-pooling` | YES (`commitment-pooling`, primary_project: **pm**) | L184 |
| `spore.discourse-as-governance` | NO | — |
| `spore.federated-knowledge-exchange` | NO | — |
| `spore.intent-publication` | NO | — |
| `spore.project-briefing-pattern` | NO | — |

**Note**: `commitment-pooling` is registered but with `primary_project: pm` — the slug originated as a PM concept, but the SPORE pattern doc_id is `spore.commitment-pooling`. There is cross-project overlap on this slug.

**Axis H corollary**: backfilling missing slugs means adding **4 slugs** (was 3 per Phase 1): `discourse-as-governance`, `federated-knowledge-exchange`, `intent-publication` (or alias `intent-publication-and-activation`), `project-briefing-pattern`.

---

## Bridge-note-mapping

### Inbound `depends_on` edges from bridge notes to patterns

Strong finding that Phase 1 did NOT report: **patterns ARE extensively cited by bridge notes through `depends_on`** — i.e., they play a real architectural role in the spec-DAG, not just prose references.

| Pattern | Bridge notes citing via `depends_on` |
|---------|--------------------------------------|
| `spore.commitment-pooling` | 7 citations: hyperstition.md, bennett-every-timeline.md, hyperstition-markets.md, open-civics.md, flow-funding.md, johar-presence-engineering.md, constructive-hyperstition.md, johar-neuroplastic-field.md |
| `spore.discourse-as-governance` | 5 citations: johar-machine-psychology.md, johar-presence-engineering.md, johar-recursive-intelligence.md, hansen-ghrist-discourse-graphs.md (also has body-prose R-claim), lexicon/linguistic-closure.md |
| `spore.federated-knowledge-exchange` | 1 citation: johar-entangled-intelligence.md |
| `spore.governance-memory` | 2 citations: johar-brain-self-rewriting-field.md, johar-neuroplastic-field.md |
| `spore.intent-publication` | 2 citations: open-civics.md, intent-pressure.md |
| `spore.project-briefing-pattern` | **ZERO citations** (isolated — not in any spec-DAG path) |

### Inbound `depends_on` edges from lexicon

`docs/foundations/lexicon/field.md:7` depends on `spore.commitment-pooling` (lexicon → pattern edge).
`docs/foundations/lexicon/linguistic-closure.md` depends on `spore.discourse-as-governance` (per search result earlier).

### Inbound R-claim / body-prose references

`hansen-ghrist-discourse-graphs.md` body contains `[target: spore.discourse-as-governance]` R-claim (explicit concept-slug-targeting). `hansen-ghrist-discourse-graphs.md` also has a body table where discourse-as-governance appears as reference target for harmonic-peer-review R-claims.

### ADR citations of patterns (by doc_id)

No ADR in `docs/research/canon-decisions/*.md` cites pattern doc_ids directly. Patterns are mentioned prose-only (e.g., `governance-memory pattern` at project-vision.md:111 + :116 + :299), not by doc_id references in ADR frontmatter.

**Axis G corollary**: Current cross-reference state is:
- canon-body prose → patterns: by name only (project-vision.md mentions "governance-memory pattern")
- bridge notes → patterns: by doc_id via `depends_on` (strong architectural link)
- lexicon → patterns: by doc_id via `depends_on`
- patterns → primitives: body prose only (no `concepts:` field, no `relates_to:` field)
- patterns → other patterns: body prose only ("Related Patterns" section)
- ADRs → patterns: body prose only (no frontmatter field)

The cross-ref graph is ASYMMETRIC: inbound to patterns is typed+structured (`depends_on` edges), outbound from patterns is prose-untyped.

---

## Three-downstream candidates analysis (DIAGNOSTIC for Axis A + E)

### Candidate 1: federation-encounter (ADR-0055 Triggers E-1..E-5)

**Composition shape** (per ADR-0055 framing-note): Signal (invitation/reframing) + Joint-commitment (attendance-pledge/shared-orientation) + Intent (pre-event surfacing) + Evidence (in-event attestation) + Field-conditions (temporal-spatial scope per ADR-0046 rule-in-use + ADR-0064 co-presence-requiring/non-requiring scope).

**Admission workflow needs**:
- Composition-over-primitives articulation with 5 named primitive contributions.
- Trigger-based admission (E-1 through E-5 already specified) → workflow must support trigger-predication.
- Two of 5 triggers already fired (E-1 partial with `docs/patterns/` existing; E-5 fired via ADR-0064). So the workflow must accept multi-trigger partial-firing states.

**Instance-family evidence**: BKC/Octo quarterly meetings, PM match-events, DW stand-ups/design-reviews, cross-federation compose-events, protocol-version-adoption moments. 4-5 families per ADR-0055. HIGH recurrence.

**Diagnostic signal for Axis A**: federation-encounter FAILS primitive earning-test (a) at verb-level (ADR-0055 Step 0.5) but PASSES composition + recurrence at pattern-level. Suggests **Axis A earning-test shape** needs to NOT reuse primitive earning-test; needs a pattern-specific shape that emphasizes (a-pattern) composition-articulability + (b-pattern) recurrence-across-instance-families.

### Candidate 2: four-enabling-conditions (ADR-0048 parking)

**Composition shape**: 4 distributed properties (space / mission / resources / knowledge) the system must provide for constructed-power to be possible. Johar (`Power Cannot Be Allocated`, 2026).

**ADR-0048 verdict at line 150-152**: *"They are not primitives (fail test-(a) — not separable operations), not doctrines (not lenses), and not modes (not properties of primitive operation — they are design criteria for field conditions). Pattern-library fit is plausible: `docs/patterns/enabling-conditions-for-constructed-power.md` could name the four conditions as design criteria for Spore's interface + federation-event design. Parked as pattern-library candidate pending design-pass work."*

**Admission workflow needs**:
- **Design-criteria** articulation (not composition-over-primitives). Four conditions are properties-of-Field-conditions, not primitive-compositions.
- Tradition-citation: single primary-inspiration (Johar). Cluster-count low on honest-rigor per ADR-0064 precedent.

**Diagnostic signal for Axis A**: four-enabling-conditions is a DIFFERENT shape from federation-encounter — it's a design-criteria pattern rather than a composition pattern. Suggests Axis A may need to admit **pattern-sub-shapes**: composition-pattern vs design-criteria-pattern vs view-template-pattern. Or the earning-test needs to be generic enough to cover both.

### Candidate 3: view-template (ADR-0058 parking)

**Shape**: 5 demoted graph projections (Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse) as "view-templates composable over primaries."

**ADR-0058 verdict at line 125**: *"Pattern-library doc parked as parking-lot entry for future work. The five view-templates are named in canon with tier framing but not specified at pattern-level; when the pattern-library doc is authored, it inherits them as starting content."*

**Admission workflow needs**:
- Pattern CONTAINER for 5 sub-items (one pattern-library doc housing 5 view-templates). OR 5 separate pattern-library docs. OR 1 pattern doc + 5 sub-sections.
- Earning-test: each view-template individually did NOT meet ADR-0058 earning-test (independent schema / materialization / query / non-join use case) at primary-projection level, but they ARE legitimate "views composable over primaries." So view-templates demote WITHOUT being rejected.

**Diagnostic signal for Axis A / D**: view-template is a THIRD shape — container-for-sub-entities. Raises **Axis D** question: what's the placement convention for patterns-with-sub-entities? One file? One directory? Flat-list with internal anchors?

### Cross-candidate diagnostic summary

Three candidates surface three pattern-shapes:
1. **federation-encounter** = composition-over-primitives pattern (5-primitive composition shape).
2. **four-enabling-conditions** = design-criteria pattern (4 field-condition properties).
3. **view-template** = catalog-of-sub-entities pattern (1 container, 5 demoted entities OR 5 separate entries).

**Implication for Axis A earning-test**: a ONE-SIZE-FITS-ALL earning-test may not work. Three options become salient:
- **Axis A option**: unified earning-test that's abstract enough to cover all three shapes (composition OR design-criteria OR catalog).
- **Axis A option**: pattern-sub-class earning-tests (one test per sub-shape).
- **Axis A option**: operator-gated-per-candidate (no formal earning-test; evaluate per candidate like ADR-0055 did for Encounter primitive-candidate).

**Implication for Axis E admission workflow**: if Axis A is per-sub-class, Axis E must handle 3 workflows. If Axis A is operator-gated, Axis E collapses to dedicated-ADR-per-candidate.

---

## Per-axis-options (grounded in audit findings)

### Axis A — earning-test shape for pattern-library admission

Audit-grounded options (3-5 per plan):

- **A1 — Composition-AND-recurrence-hybrid**. Two-condition test: (α) composition-articulability-over-existing-primitives-doctrines-modes-properties AND (β) recurrence across ≥3 instance-families. Inherits ADR-0044 two-condition shape at pattern-level. Rationale: federation-encounter passes both (5-primitive composition + 4-5 families); four-enabling-conditions fails α (not a composition) — would force decline unless α is broadened; view-template is a container (α marginal). **Source-precedent**: ADR-0044 primitive-earning-test. **Scope**: minimal canon-body change (rule-statement in ADR-0065 + pointer from project-vision.md:111 parenthetical). **Interacts with**: Axis E (composition-first or recurrence-first admission gate), Axis J (existing-6 retrofit test).

- **A2 — Design-criteria-OR-composition-OR-catalog (pattern-sub-class tests)**. Three sub-class tests: (i) composition-pattern = α composition + β recurrence; (ii) design-criteria-pattern = 1 full-cluster primary-tradition + ≥2 named design-criteria; (iii) catalog-pattern = ≥3 legitimate sub-entities each separately motivated. Rationale: all three downstream candidates pass at one of three sub-tests honestly. **Source-precedent**: ADR-0048 four-categories-of-canon-objects as typed-distinction; ADR-0055/0058 shape-distinctions. **Scope**: larger canon-body change — sub-class enumeration in ADR-0065 + pattern-sub-class admission declaration in canon. **Interacts with**: Axis E (3-gate workflow), Axis C (sub-class-specific frontmatter), Axis H (one slug per sub-class? shared?).

- **A3 — Recurrence-only (≥3 independent instance-families)**. Single condition. Rationale: simplest; all existing 6 patterns retrofit cleanly (4 at 3 families; 2 at 1 family — latter might need re-work or grandfather). All three candidates also pass (each has ≥3 distinct instance-contexts). **Source-precedent**: pattern-language convention (Alexander — patterns are recurring solutions). **Scope**: minimal. **Interacts with**: Axis J (2 existing patterns at 1-family fail — grandfather or reject?). **Caveat**: doesn't distinguish patterns from mere recurrent-artifacts; primitive candidates can pass recurrence too.

- **A4 — Operator-gated-per-candidate (no formal earning-test)**. Each admission requires dedicated ADR with earning-test rationale chosen per candidate. Rationale: mirrors primitive-admission practice (ADRs 0049/0050 admitted; 0054/0055/0061 declined — all via dedicated ADR). **Source-precedent**: ADRs 0049 through 0064 precedent. **Scope**: zero canon-body change; ADR-0065 only defines workflow. **Interacts with**: Axis E (dedicated-ADR-per-candidate), Axis F (canon-review-cadence minimal or absent).

- **A5 — Grandfather-existing-6 + hybrid-new-criterion**. Accept existing 6 patterns under current implicit-criteria (grandfather); apply A1 or A2 to future admissions. Rationale: avoids retroactive-validation ceremony on stable artifacts. **Source-precedent**: ADR-0062/0063 "extend without re-opening" + ADR-0064 "preserve ADR-0046 / ADR-0055 on-disk while adding new." **Scope**: grandfather declaration + new-criterion statement; zero retrofit work on existing 6. **Interacts with**: Axis J (backfill none/light at most; grandfather-compatible).

### Axis B — category demarcation vs adjacent canon-object categories

Audit-grounded options:

- **B1 — Formal-distinction-per-category with decision-tree**. Primitives = pass ADR-0044 two-condition earning-test; doctrines = lenses applied across primitives (ADR-0002/0003/0045); modes = qualities of primitive operation (ADR-0047/0048); properties-on-primitives = named whole-emergent-properties of a primitive (ADR-0050/0051); **patterns = recurring compositions OR design-criteria OR view-templates mediating containment/connection at scope broader than single primitive**. Decision-tree: start with "is it a separate coordination operation?" (if yes → primitive); else "is it a lens across primitives?" (if yes → doctrine); else "is it a quality of operation of primitives?" (if yes → mode); else "is it a whole-emergent-property of a primitive?" (if yes → property); else "is it a recurring composition / design-criteria / view-template?" (if yes → pattern); else "is it vocabulary for composition-articulation?" (if yes → derived glossary slug); else → decline. **Source-precedent**: ADR-0048 §"Modes are distinct from"; ADR-0051 §"relational-identity is a property-of-primitive, not a separate primitive." **Scope**: authoring effort in ADR-0065; modest canon-body pointer-edit.

- **B2 — Minimal category pointer (no formal decision-tree)**. ADR-0065 names the categories and points to existing ADR precedents (0044 for primitives, 0045 for doctrines, 0048 for modes, 0051 for properties). Patterns defined by absence (not-a-primitive, not-a-doctrine, not-a-mode, not-a-property). **Source-precedent**: canon-by-exclusion pattern. **Scope**: minimal.

- **B3 — Tiered formality (primitives formal / patterns informal)**. Primitives require formal earning-test; patterns are admitted by recurrence-convention without category demarcation. Rationale: pragmatic; patterns have lower stakes than primitives. **Scope**: minimal but may weaken category-class-integrity.

- **B4 — Patterns-are-composition-class / remaining is container-class**. Patterns = anything composable-over-primitives. Design-criteria and view-templates get promoted to pattern-sub-classes. Rationale: broadens pattern definition to absorb A2 sub-shapes. **Scope**: medium.

### Axis C — frontmatter schema

Audit-grounded options (baseline: all 6 existing patterns use minimal set; none use enriched fields):

- **C1 — Minimal (unchanged)**: `doc_id / doc_kind / status / depends_on` only. Rationale: existing 6 patterns comply without retrofit; minimum disruption. **Source-precedent**: governance-memory self-host. **Scope**: zero retrofit.

- **C2 — Enriched-required**: Add REQUIRED `concepts: []` + `r_claim_source: []` + `relates_to: []` + `tradition_citations: []` + `instance_families: []`. Rationale: matches bridge-note/ADR frontmatter richness; enables graph queries. **Source-precedent**: bridge-note format in `docs/research/connections/*.md`. **Scope**: LARGE retrofit on 6 patterns (Axis J deep); blocks future admission without all fields.

- **C3 — Tiered (minimum-required + optional-extended)**: Required: `doc_id / doc_kind / status / depends_on`. Optional: `concepts: []`, `r_claim_source: []`, `relates_to: []`, `instance_families: []`. New patterns SHOULD fill optional; existing patterns MAY leave optional empty. Rationale: schema extensibility without retrofit burden. **Source-precedent**: ADR-0058 optional tiering pattern. **Scope**: small.

- **C4 — Admission-required + lifecycle-required**: Minimal required for draft status; full enriched required for active status. Rationale: matches existing lifecycle gate patterns in ADR frontmatter. **Scope**: medium.

- **C5 — Add one field only (`concepts: []`)**: Add single `concepts: []` field to schema as REQUIRED for admission. Rationale: enables Axis H yaml-registration coherence without schema explosion. **Source-precedent**: ADRs carry `concepts: []`. **Scope**: small.

### Axis D — placement convention

Audit-grounded options (major audit finding: **split already exists de facto — `docs/patterns/` (5 files) + `docs/governance/project-briefing-pattern.md` (1 file)**):

- **D1 — Keep current (`docs/patterns/` + `docs/governance/project-briefing-pattern.md`)**. Acknowledge split de facto; do not formalize. **Scope**: zero. **Caveat**: contradicts Phase 1 assumption of single-directory convention.

- **D2 — Consolidate into `docs/patterns/`**. Git-mv `docs/governance/project-briefing-pattern.md` → `docs/patterns/project-briefing-pattern.md` (consolidation). Rationale: one pattern directory; reduces Phase-1-style reconnaissance misses. **Scope**: small (1 file move + cascade); no inbound `depends_on` citations to update since project-briefing-pattern is isolated.

- **D3 — Split by pattern-sub-class**. E.g., `docs/patterns/coordination/` (grammar patterns) + `docs/patterns/infrastructure/` (infra patterns like project-briefing-pattern + governance-memory). Rationale: explicit sub-class separation. **Scope**: medium (6 files reorganized + cascade).

- **D4 — `docs/patterns/` with top-level-index in new `docs/patterns/README.md`**. Keep files where they are; add README.md as catalog. **Scope**: small-medium.

- **D5 — Rename `docs/patterns/` → `docs/pattern-library/`** to match project-vision.md "pattern-library layer" vocabulary. **Scope**: medium (git-mv 5 files + cascade + update all inbound `depends_on` — but `depends_on` uses `doc_id` not path, so cascade is file-path-reference-only).

### Axis E — admission workflow

Audit-grounded options:

- **E1 — Decision-gated dedicated-ADR per candidate**. Each pattern admission = 1 ADR (matching primitive-admission pattern: ADRs 0049, 0050 admitted; 0054, 0055, 0061 declined). Rationale: inherits proven machinery. **Source-precedent**: ADRs 0049-0064. **Scope**: minimal new machinery. **Interacts with**: Axis A (earning-test shape feeds Step 0.5 audit in dedicated ADR).

- **E2 — Recurrence-trigger-based auto-admit**. If ≥3 independent instance-family reports on a candidate, auto-admit via lightweight admission commit (no ADR). Rationale: matches pattern-language culture (Alexander-style aggregation). **Source-precedent**: none in Spore canon. **Scope**: minimal ongoing, but requires trigger-tracking infrastructure.

- **E3 — Hybrid: trigger-fast-track-for-named-candidates + ADR-for-novel**. federation-encounter / four-enabling-conditions / view-template each have explicit triggers or parking-statements in existing ADRs — fast-track those when triggers fire. Novel candidates require dedicated ADR. **Source-precedent**: ADR-0055 E-1..E-5 triggers + ADR-0048 parking-statement. **Scope**: medium.

- **E4 — Operator-gated-per-candidate with lightweight plan**. Each admission authored as operator-gated plan (no full ADR ceremony). **Scope**: minimal.

- **E5 — Pattern-review-batch (every N months)**. Periodic sweep admits/declines/retires multiple candidates at once. **Source-precedent**: none in Spore; potential new pattern. **Scope**: medium (depends on Axis F cadence).

### Axis F — review cadence

Audit-grounded options:

- **F1 — None**. Patterns reviewed only when candidates surface. **Source-precedent**: current state. **Scope**: zero.

- **F2 — Paragraph in canon-review-protocol v3**. Add pattern-review paragraph to canon-review-protocol.md §7 or similar. Rationale: attaches to existing cadence without new machinery. **Interacts with**: Axis I (scope change). **Scope**: small.

- **F3 — Periodic sweep every 6 months**. Match canon-review-protocol `Pass 3 cadence clock` (currently 2026-10-17). **Source-precedent**: CLAUDE.md Pass-3 6-month cadence. **Scope**: medium.

- **F4 — Event-triggered (when ≥N new bridge-notes cite an unreigistered candidate)**. Rationale: matches ADR-0055 E-2 trigger shape. **Scope**: medium.

### Axis G — cross-reference convention

Audit-grounded options (audit showed ASYMMETRIC cross-ref state — inbound typed, outbound untyped):

- **G1 — No enforcement**. Status quo. **Scope**: zero.

- **G2 — Patterns MUST list primitive-contributions in `concepts: []`**. E.g., federation-encounter pattern frontmatter would carry `concepts: [signal, joint-commitment, intent, evidence, field]`. Rationale: closes asymmetry; makes pattern-composition graph-queryable. **Interacts with**: Axis C (adds concepts field). **Scope**: small (4-6 entries per pattern).

- **G3 — Bi-directional (patterns reference primitives AND primitives reference patterns)**. Would require primitive-bullet editing. **Source-precedent**: project-vision.md:111 mentions governance-memory pattern but not others. **Scope**: large (primitive-bullet edits).

- **G4 — `relates_to: []` for pattern-to-pattern edges**. Formalize "Related Patterns" section content. **Interacts with**: Axis C. **Scope**: small.

### Axis H — concepts-p2p-wiki.yaml registration

Audit-grounded options (denominator now 6 patterns, not 5):

- **H1 — Required-for-admission-going-forward**. New patterns MUST have yaml slug entry in same ADR. Existing 6 grandfather. **Scope**: zero now; required at next admission.

- **H2 — Deferred-to-next-vocab-freeze**. No yaml change in ADR-0065. Slugs added at v13 when natural vocab-freeze happens. **Scope**: zero.

- **H3 — Optional-lag-OK**. No rule; yaml registration is optional and lags. **Scope**: zero.

- **H4 — Backfill-4-missing-slugs** (Phase 1 said 3; audit found 4 with project-briefing-pattern): add `discourse-as-governance`, `federated-knowledge-exchange`, `intent-publication-and-activation` (or alias), `project-briefing-pattern`. Yaml v12→v13. **Scope**: small.

- **H5 — Add `category: pattern` field to yaml schema**. Enables filtering by canon-object-category. Applies to all 60 slugs retroactively? Or only new ones? **Scope**: small if only new; medium if retroactive.

### Axis I — canon-review-protocol scope reconciliation

Audit-grounded options (three-framing tension confirmed; line 34 + line 58 pin the exclusion):

- **I1 — Keep patterns as NOT-canon-for-canon-review-protocol-purposes**. Preserve lines 34 + 58 unchanged. Axis I = zero edits. Accept that "canon-object-class" and "canon-review-protocol-target" are different. Rationale: canon-review-protocol deals with ADR-backed foundation/vision/roadmap edits; patterns have a different workflow (per Axis E selection). **Scope**: zero.

- **I2 — Formally bring patterns INTO canon-review-protocol scope**. Edit lines 34 + 58 to remove "patterns" from exclusion list. Rationale: patterns are 4th canon-object-class per project-vision.md:111, so they belong in canon-review. **Scope**: medium edits; adds pattern-review-protocol-content.

- **I3 — Split: pattern-SCHEMA IS canon / individual patterns are NOT**. Pattern-infrastructure (schema, admission workflow) is canon-review-able; individual pattern docs are not. Rationale: structurally distinguishes meta-discipline from instance-discipline. **Scope**: small edits; adds §7 or similar to canon-review-protocol. **Source-precedent**: ADR-0065 IS meta (infrastructure); admitted patterns ARE instances — natural split.

- **I4 — Clarify three-framing tension with explicit scope-conditioning**. Edit lines 34 + 58 to add: *"Patterns are 4th canon-object-class (project-vision.md:111) but their admission-workflow operates outside this canon-review-protocol under ADR-0065's pattern-library-infrastructure-spec."* Rationale: honest description + cross-reference. **Source-precedent**: ADR-0062/0063/0064 scope-conditioning pattern applied to a protocol-file instead of a primitive-bullet. **Scope**: small.

- **I5 — Defer Axis I to separate ADR**. ADR-0065 explicitly DECLINES scope-reconciliation; files follow-on ADR. Rationale: Axis I may need more tension-articulation than ADR-0065 can carry; don't bundle canon-review-protocol-v3 edits with pattern-library-infrastructure. **Source-precedent**: ADR-0055 parking of federation-encounter to separate plan. **Scope**: zero in ADR-0065; adds follow-on.

### Axis J — backfill of existing 6 patterns

Audit-grounded options (denominator = 6, including project-briefing-pattern):

- **J1 — None**. Infrastructure applies to new admissions only. Existing 6 grandfathered. Rationale: preserves existing canon state. **Scope**: zero.

- **J2 — Light (schema-compliance only, frontmatter-only)**. Verify `doc_id / doc_kind / status / depends_on` present on all 6 (already true). If Axis C adds a required field (e.g., `concepts: []`), backfill that field only. Rationale: minimal retrofit. **Scope**: 0-6 files, frontmatter-only (AC10 discipline).

- **J3 — Deep (full compliance with Axis C schema)**. Retrofit all optional fields: `concepts: []`, `r_claim_source: []`, `relates_to: []`, `instance_families: []`. **Scope**: up to 6 files, frontmatter-heavy but still metadata-only.

- **J4 — Grandfather-with-deferred-compliance**. New schema applies to new patterns; existing 6 have deferred-compliance marker (e.g., `schema_version: 1` for legacy; `schema_version: 2` for new). **Scope**: 0-6 files (just one marker field).

- **J5 — Fix project-briefing-pattern + light on others**. Recognize audit finding that project-briefing-pattern has unusual body-shape (Problem → Forces → **Solution** instead of Context → Problem → Forces → Pattern). Either normalize body shape OR acknowledge as "infrastructure-pattern sub-class" per Axis B4. **Scope**: 1-2 files.

---

## Canon-method-inheritance check

Which canon-method patterns from yesterday's arc apply to ADR-0065 axis decisions?

- **Three decline-shapes (ADRs 0054/0055/0061)**: APPLIES to Axis A pattern-rejection shapes (future admission failures). Not directly to ADR-0065 since this is a spec ADR, not a disposition ADR.

- **Primitive-bullet scope-conditioning (ADRs 0062/0063/0064)**: APPLIES methodologically to Axis I (three-framing tension reconciliation). Axis I4 option explicitly inherits the scope-conditioning shape applied to a protocol-file instead of a primitive-bullet. Viable new pattern.

- **TYPE-1 vs TYPE-2 preservation (pm:ADR-0014)**: APPLIES to Axis J backfill. TYPE-1 = historical records of past admissions; TYPE-2 = rewritable structural descriptors. Pattern-body text is TYPE-1 (historical); frontmatter is TYPE-2 (schema-compliant). Axis J Light option inherits this.

- **Sheaf-theoretic global-coherence (ADR-0064 / IC / PM)**: **DOES NOT APPLY** — ADR-0065 is Spore-internal infrastructure; no cross-repo coherence claim. (Plan §Method insights correctly flagged this.)

- **Honest-rigor cluster-counting (ADR-0064)**: APPLIES to Axis A tradition-citation thresholds (if admission workflow uses tradition breadth). Also applies to honest recount of recurrence-evidence in audit (already applied above — recount showed 4 at 3-families / 2 at 1-family vs Phase 1's 3/2; also surfaced project-briefing-pattern as 6th pattern that Phase 1 missed).

- **Parsimony-as-earning-test-outcome (ADR-0048)**: APPLIES to Axis A — the earning-test shape (whatever chosen) should be an outcome-test, not an axiom. The number of admitted patterns should be earning-test-pass-count-determined, not prior-count-determined.

- **Reconnaissance-vs-audit separation (new per plan)**: APPLIED above — Phase 1 findings treated as starting inventory; audit extended with project-briefing-pattern discovery + stricter recurrence count + 4-missing-slugs correction + 4-semantic-senses-of-pattern finding. Pattern is real.

- **Plan-vs-evidence catch discipline (ADR-0055 from 3b.4)**: APPLIED — Phase 1 reconnaissance claim of "5 patterns" is superseded by audit finding of "6 patterns." Phase 1 missed project-briefing-pattern because its directory was `docs/governance/` not `docs/patterns/`. Catch is documented.

---

## Summary of audit-to-Phase-1 deltas

| Phase 1 claim | Audit finding | Delta |
|--------------|---------------|-------|
| 5 pattern docs in `docs/patterns/` | 5 in `docs/patterns/` + 1 in `docs/governance/` = 6 total | **MATERIAL** — Axis D placement is more complex |
| Uniform frontmatter, none carry r_claim_source/concepts/relates_to | CONFIRMED across all 6 | no delta |
| Uniform body shape Context → Problem → Forces → Pattern → Adopters → Related | 5/6 follow; project-briefing-pattern uses Problem → Forces → Solution (different shape) | minor — Axis J5 / Axis B4 reckoning |
| 3 patterns = 1 family, 2 patterns = 3-4 | 4 patterns ≥ 3 families, 2 patterns = 1 family (gradient real but denominator changed) | minor |
| 3 unregistered slugs | 4 unregistered slugs (adds project-briefing-pattern) | Axis H recalibrated |
| Three-framing tension real | Confirmed with exact lines; also surfaced 4th framing (product vocabulary "pattern language") | extended |
| governance-artifacts lacks four-categories parallel | Confirmed; also noted potential insertion sites | extended |
| Concepts yaml v12, no `category:` field, `primary_project:` only | CONFIRMED | no delta |
| R-Enc-4 source = ADR-0055 pattern-library-infrastructure-under-specified | CONFIRMED as body-prose residue, not frontmatter field (plan correctly notes this — `r_claim_source:` omit per plan) | no delta |

**Audit-new findings not in Phase 1**:
- Patterns ARE extensively cited by bridge notes via `depends_on` (commitment-pooling: 7; discourse-as-governance: 5). Asymmetric cross-ref graph: inbound typed+structured, outbound untyped body-prose.
- `project-briefing-pattern` is ISOLATED (no inbound `depends_on` edges at all) — suggests low-traction pattern or infrastructure-sub-class.
- Three downstream candidates have STRUCTURALLY DIFFERENT shapes (composition / design-criteria / catalog). Single earning-test may over-simplify.
- `commitment-pooling` yaml entry has `primary_project: pm`, but the SPORE pattern is `spore.commitment-pooling` — cross-project slug overlap to flag at Axis H if yaml-registration becomes normative.

---

## Audit conclusion for decision-brief authoring

The audit identifies three tension-axes that are particularly LOAD-BEARING for the decision-brief:

1. **Pattern-sub-shape heterogeneity** (federation-encounter = composition; four-enabling-conditions = design-criteria; view-template = catalog). Axis A option choice will be shaped by whether operator accepts a single unified earning-test or sub-class earning-tests.

2. **Placement convention de-facto split** (5 in /patterns/ + 1 in /governance/). Axis D deserves honest options including "keep split" and "consolidate" rather than presenting the situation as single-directory.

3. **Three-framing tension is really 4-framing** (doc_kind + canon-object-class + canon-review-scope-exclusion + product-"pattern language"-vocabulary). Axis I scope-reconciliation options should name all four.

These three findings were NOT visible at Phase 1. They are load-bearing for Step 1 decision-brief authoring.

**Ready for Step 1.**
