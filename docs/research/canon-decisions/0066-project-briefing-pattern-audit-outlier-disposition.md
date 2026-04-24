---
doc_id: spore.canon-decision.project-briefing-pattern-audit-outlier-disposition
doc_kind: decision-record
status: draft
adr_number: "0066"
opened-on: 2026-04-24
closed-on: 2026-04-24
decision: reclassify
r_claim_statement: |
  ADR-0065 (pattern-library-infrastructure-spec, 2026-04-24) K4 deferred disposition of
  `docs/governance/project-briefing-pattern.md` to a follow-on ADR on honest-rigor
  cluster-counting discipline grounds ("declining to invent a 4th sub-class on single-doc
  evidence"). ADR-0066 Step 0.5 audit (`tmp/adr-0066-audit-manifest-2026-04-24.md`)
  evaluated the outlier against the 3 ratified M4 sub-class earning-tests per ADR-0065
  §M4 Sub-class Framework and returned: composition-pattern FAILS (α-comp — composes
  governance-memory-infrastructure entities, not Spore canon-objects) + MARGINAL β-comp;
  design-criteria-pattern HARD FAILS (α-des wrong target — API-behavior not coordination-
  substrate; β-des no tradition-grounding; extracted-from-working-systems is spec-lineage);
  catalog-pattern HARD FAILS (α-cat no independently-motivated sub-entity set; β-cat
  host-structure would be implementation-backend).

  Step 0.5 audit also surfaced material structural evidence for reclassification:
  (a) content IS endpoint-spec (HTTP signature + JSON response shape + 3 resolution tiers
  + 4-row graceful-degradation table + 3-consumer interface-layer mapping); (b) structural
  sibling `docs/governance/project-bootstrap-spec.md` validates the spec shape (same
  location, same depends_on, same operational-infrastructure character, canonical
  `doc_kind: spec` exemplar at meta-protocol row 22 paired with the outlier's canonical
  `doc_kind: pattern` exemplar at row 23); (c) Forces target API-behavior (multiple
  interfaces / freshness / graceful degradation / directory independence), not
  coordination-substrate; (d) zero tradition-grounding; (e) zero inbound `depends_on`
  edges (isolated from spec-DAG, consistent with endpoint-spec whose implementation
  lives in koi-processor reference implementation).

  Per operator directive 2026-04-24 ADR-0066 Step-2 decision-gate fast-path: K3a
  reclassify to `doc_kind: spec` + 3 sub-options ratified (meta-protocol row 23
  replacement = `spore.governance-memory`; filename = `project-briefing-spec.md`; H1
  title = "Project Briefing Spec"). Decision-brief at
  `tmp/adr-0066-decision-brief-2026-04-24.md` evaluated 7 options; K3a selected on
  evidence-fit strength + parsimony-discipline inheritance + bounded scope + new
  canon-method-precedent contributions.

  Canon-body edits land in 5 files per allowlist: (i) `docs/governance/project-briefing-pattern.md`
  → `project-briefing-spec.md` (git mv + frontmatter `doc_kind: pattern` → `spec` +
  `doc_id: spore.project-briefing-pattern` → `spore.project-briefing-spec` + H1 +
  opening-paragraph self-label fix); (ii) `docs/governance/agent-commons-meta-protocol.md:23`
  (canonical pattern exemplar swap to `spore.governance-memory`); (iii) `docs/README.md:59`
  (filename link + description update); (iv) `docs/patterns/README.md:73-75` (audit-outlier
  section removal — deferral closed); (v) new ADR-0066 file (this file).

  4-category canon-object-class inventory PRESERVED. 3-sub-class-under-patterns framework
  PRESERVED. yaml v12 unchanged. ADR-0065 frontmatter unchanged (superseding-via-prose
  pattern; K4 closure narrated in ADR-0066 body).
supported_by:
  - spore:ADR-0043-federation-protocol-rename
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0057-governance-artifacts-file-rename
  - spore:ADR-0064-co-presence-field-condition-disposition
  - spore:ADR-0065-pattern-library-infrastructure-spec
authorized-by: "operator directive 2026-04-24 ADR-0066 Step-2 decision-gate: K3a reclassify to doc_kind: spec + sub-options (row-23-replacement=spore.governance-memory, filename=project-briefing-spec.md, H1=Project Briefing Spec)"
queue_reference: "ADR-0065 §K4 deferral (line 160 + line 243 + lines 251-267) + §Parking-lot first queued follow-on MEDIUM priority ('timely resolution after ADR-0065 lands; not indefinite carry')"
affects_canon:
  - docs/governance/project-briefing-spec.md
  - docs/governance/agent-commons-meta-protocol.md
  - docs/README.md
  - docs/patterns/README.md
  - docs/research/canon-decisions/0066-project-briefing-pattern-audit-outlier-disposition.md
related_adrs:
  - spore:ADR-0043-federation-protocol-rename
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0057-governance-artifacts-file-rename
  - spore:ADR-0064-co-presence-field-condition-disposition
  - spore:ADR-0065-pattern-library-infrastructure-spec
concepts: []
---

# ADR-0066 — project-briefing-pattern Audit-Outlier Disposition (K3a Reclassify to `doc_kind: spec`)

## Status

draft (authored 2026-04-24 under `adr-0066-project-briefing-pattern-audit-outlier-disposition` decision-gated plan; K3a fast-path per operator Step-2 decision-gate 2026-04-24 ratifying child audit-derived recommendation)

## Context

### Parking-source: ADR-0065 K4 deferral

ADR-0065 (pattern-library-infrastructure-spec, 2026-04-24) ratified the M4 sub-class framework (composition-pattern / design-criteria-pattern / catalog-pattern per §M4 Sub-class Framework lines 171-217) while deferring disposition of `docs/governance/project-briefing-pattern.md` audit-outlier to a follow-on ADR (§Consequences lines 243, 251-267 + §K4 deferral rationale lines 162-169):

> *"Operator selected K4 defer over child's original K1 recommendation on the basis of a 50-50 judgment call. Audit-outlier surfaces on three dimensions simultaneously (placement in `docs/governance/` not `docs/patterns/`; body-shape Problem → Forces → Solution variant; 0 inbound `depends_on` / isolated from spec-DAG). ... Honest-rigor cluster-counting discipline (inherited from ADR-0064) argues against inventing a 4th sub-class on single-doc evidence. ... ADR-0066 evaluates the outlier freshly against the ratified M4 sub-classes once canon — if NO clean fit across 3 sub-classes, then K1-provisional or K3 reconsidered at that time."*

ADR-0066 closes the K4 deferral. Parking-queue status: MEDIUM priority first queued follow-on per ADR-0065 §Parking-lot (line 335).

### Canon state baseline at authoring

- 9 primitives (3 structural: field / holon-irreducible-with-relational-identity-property / membrane + 6 verbs: intent / commitment / joint-commitment / evidence / signal / reproduction)
- 3 cross-cutting doctrines (reproductive-commoning, boundary-commoning, care-commoning)
- 2 modes-across-primitives (expressive-power, constructed-power)
- 2 properties-on-primitives (holon-irreducibility, relational-identity)
- 6 derived glossary slugs (reciprocity, trust, attestation-of-execution, permeability, double-boundary, encounter)
- Patterns: 5 in-scope patterns (docs/patterns/) + 1 audit-outlier → **(this ADR's reclassification reduces audit-outlier count from 1 to 0; 5 in-scope patterns unchanged)**
- 3 pattern sub-classes under M4 (composition / design-criteria / catalog) — UNCHANGED by ADR-0066
- Concepts yaml v12 (unchanged by ADR-0066)
- Validator 9/30 baseline pre-ADR-0066 at HEAD `5b4fa86` (descendant of `151cc72` — ADR-0059a activation + ADR-0065 /end)
- PREEXEC_SHA: `5b4fa86`

### Step 0.5 audit findings

Full audit at `tmp/adr-0066-audit-manifest-2026-04-24.md`. Summary:

**Target profile**: 101-line doc; frontmatter `doc_id: spore.project-briefing-pattern`, `doc_kind: pattern`, status: active, depends_on: [spore.agent-commons-meta-protocol]. Body: 10 sections (Problem → Forces → Solution with 5 API subsections → Known Uses → Resulting Context → Related Patterns) — DIVERGES from 6-section uniform shape of 5 in-scope patterns (Context → Problem → Forces → Pattern → Current Adopters → Related Patterns). Content: API endpoint (`GET /project/briefing?project=<name-or-id>`) + JSON response shape + 3-tier resolution strategy + 4-condition graceful-degradation table + 3-consumer interface-layer mapping. Self-description: *"reusable pattern for assembling project context from a knowledge graph, extracted from the working Agent Commons governance layer"* (line 11) — dual self-positioning (Alexandrian "pattern" vocabulary + operational "API endpoint" vocabulary, body leans heavily operational).

**Cross-reference audit**:
- 0 inbound `depends_on` edges (isolated from spec-DAG)
- 3 significant inbound citations: `docs/README.md:59` (governance-section listing); `docs/governance/agent-commons-meta-protocol.md:23` (**canonical pattern exemplar** in Artifact Taxonomy table); `docs/governance/agent-commons-meta-protocol.md:55` (Tier 0 functional endpoint reference: *"`GET /project/briefing` returns vision doc info + tasks + sessions"*)
- Meta-protocol row 23 citation is load-bearing — any reclassification MUST accompany row 23 update to preserve coherence

**Structural-sibling finding**: `docs/governance/project-bootstrap-spec.md` is direct structural sibling — same location (`docs/governance/`), same `depends_on: [spore.agent-commons-meta-protocol]`, same operational-infrastructure character (Tier definitions / required files / YAML frontmatter templates / JSON config fields), canonical `doc_kind: spec` exemplar at meta-protocol row 22. Meta-protocol authored rows 22 + 23 as paired sibling governance-layer example anchors — one each for `spec` and `pattern`. project-bootstrap-spec's spec-classification is uncontroversial; project-briefing's content is near-identical in character but labeled `pattern`.

## Decision

**K3a reclassify to `doc_kind: spec`** per operator directive 2026-04-24 Step-2 decision-gate fast-path. 3 ratified sub-options:

1. **Meta-protocol row 23 replacement = `spore.governance-memory`** — most canon-central pattern; self-host authority (per `governance-memory.md:36` enumerating the 9 canonical doc_kinds); active status; 3-instance-family recurrence; pairs cleanly with row 22's `spore.project-bootstrap-spec` (two aligned foundational anchors — one each for spec and pattern).
2. **Filename = `project-briefing-spec.md`** — straight-parallel to `project-bootstrap-spec.md`; eliminates filename↔frontmatter-drift (the same failure mode that produced the audit-outlier at authoring time).
3. **H1 title = "Project Briefing Spec"** — parallel to "Project Bootstrap Spec"; aligned with reclassification.

### M4 sub-class earning-test results

| Sub-class | (α) criterion | (α) verdict | (β) criterion | (β) verdict | Overall |
|-----------|---------------|-------------|---------------|-------------|---------|
| composition-pattern | Composition over Spore primitives/doctrines/modes/properties | FAILS (composes governance-memory-infrastructure entities: SpecDoc / `governs` / `depends_on` edges / task registry / session log — NOT Spore canon-objects) | ≥3 independent instance-families | MARGINAL (3 named but all consume one koi-processor endpoint-implementation; shallow independence) | FAILS |
| design-criteria-pattern | ≥N articulated design-criteria operating on field-conditions or coordination-substrate | FAILS (N=5 criteria present but target is API-behavior: multiple interfaces / varying detail / freshness / graceful degradation / directory independence — NOT coordination-substrate) | ≥1 full-cluster primary-tradition + criteria-operationality | FAILS (zero tradition-grounding; extracted-from-working-systems is spec-lineage) | HARD FAIL |
| catalog-pattern | ≥N legitimate sub-entities each independently-motivated | FAILS (3 consumer-interfaces are implementation-surfaces-for-one-endpoint, not independently-motivated; 3 resolution-tiers are process-steps; 4 degradation-conditions are error-rows — none qualify) | Host-structure-earning-test | FAILS (host-structure would be "single API endpoint" — implementation-backend, not canon-level host-structure) | HARD FAIL |

**None of the 3 M4 sub-classes fit cleanly** — exactly what ADR-0065 K4 rationale predicted. Honest-rigor cluster-counting discipline (inherited from ADR-0064) argues against inventing a 4th sub-class on single-doc evidence. The cleanest honest-reading is Reading A from audit: *mis-classified as pattern; is actually `doc_kind: spec`*.

## Consequences

### Positive

- **ADR-0065 K4 deferral CLOSED**. MEDIUM-priority first-queued follow-on resolved timely (same-day-as-ADR-0065-landing or next-session per K4 discipline). Audit-outlier count reduced from 1 to 0.
- **Canon-object-class inventory preserved** at 4 categories (primitives / doctrines / modes / properties) + pattern-sub-class framework preserved at 3 sub-classes. No inflation, no sub-class-count bump on single-doc evidence.
- **Honest-rigor cluster-counting discipline extended**. ADR-0064 declined Johar-native as full third cluster on single-tradition grounds. ADR-0065 declined 4th sub-class on single-doc evidence. ADR-0066 completes the discipline: single-outlier that fails all existing sub-class earning-tests is evidence of *mis-classification*, not of a missing sub-class category.
- **New canon-method precedent: decline-pattern-status-via-reclassification**. Fourth decline-shape joining the three existing decline-shapes (ADR-0054 decline-with-evidence-triggers; ADR-0055 decompose-and-park-as-framing-note; ADR-0061 decline-inline-prose-only). The four shapes now map cleanly: (i) decline-with-triggers for concepts that may admit later (ADR-0054); (ii) decompose-as-framing-note for articulable compositions (ADR-0055); (iii) decline-inline-prose-only when already-articulated in canon body (ADR-0061); (iv) **decline-via-reclassification when the concept is correct-kind-of-thing but mis-labeled as wrong doc_kind (ADR-0066)**.
- **New canon-method precedent: structural-sibling-pairing as audit-technique**. When evaluating a doc's doc_kind classification, identify a structural-sibling with authoritative doc_kind label and compare on 4 dimensions (location / depends_on / content-character / meta-protocol taxonomy-example-parity). Validated here via project-bootstrap-spec.md ↔ project-briefing-pattern.md parallel — both in `docs/governance/`, both depend on meta-protocol, both canonical-exemplars in meta-protocol taxonomy rows 22 + 23, near-identical operational-infrastructure character. Sibling's spec-classification was uncontroversial; the mis-classified doc earned spec reclassification by structural parity.
- **Meta-protocol canonical-example-coherence restored**. Meta-protocol row 22 (`spore.project-bootstrap-spec` as canonical `spec`) + updated row 23 (`spore.governance-memory` as canonical `pattern`) now presents two strong uncontradicted anchors. Row 23's new exemplar is self-referentially-appropriate: `governance-memory` is the pattern that formalizes the exact spec-DAG artifact-system the meta-protocol governs.
- **Filename↔frontmatter-drift prevented going-forward**. The original audit-outlier arose from filename containing "pattern" while content was spec-shape. Reclassification + rename closes the drift-debt and makes the filename a strong check on doc_kind-correctness. Surfaces a new anti-drift discipline: meta-protocol canonical-example cross-references should be kept coherent with their target doc's doc_kind in same-ADR coordinated-edits.
- **Superseding-via-prose pattern inherited** (ADR-0041 / ADR-0058 precedent). ADR-0065 frontmatter unchanged; K4 closure narrated in this ADR's body prose only. ADR-0065 file preserved on-disk as canon-record-integrity (the K4 deferral decision was operator-ratified at its time; ADR-0066 closes the deferral, does not erase the prior decision).

### Negative / Cost

- **Meta-protocol row 23 edit changes the canonical pattern exemplar**. Readers of the meta-protocol who memorized `spore.project-briefing-pattern` as the canonical pattern-example will find a different exemplar on next read. Documented in this ADR for audit trail.
- **Filename rename requires `git log --follow` for history traversal** (per ADR-0043 / ADR-0057 rename precedents). Minor tooling-friction.
- **doc_id slug change**: `spore.project-briefing-pattern` → `spore.project-briefing-spec`. Audit confirmed 0 inbound `depends_on` edges so no references break — but any future external tooling or external repo that cited the old doc_id would need updating. No known external consumers.
- **ADR-0065 body-prose forward-reference to ADR-0066** (line 243 + lines 251-267) was drafted before ADR-0066 existed. With ADR-0066 now landed, ADR-0065's body references are historically-accurate (they describe the K4-deferral state at ADR-0065 authoring time) but no longer current-state. This is standard ADR temporal-layering; ADR-0065 is preserved as historical record.

### Neutral / Deferred

- **project-briefing functionality UNCHANGED**. The endpoint `GET /project/briefing?project=<name-or-id>` continues to work identically; the koi-processor reference implementation is unaffected; the Claude Code `/project-context` skill and Dobby `project_briefing` MCP tool continue to consume the endpoint. Only the spec-doc's doc_kind classification + filename + doc_id changed; no behavioral implications.
- **docs/patterns/README.md audit-outlier section removed**. ADR-0066 closes the deferral; no replacement section needed (the outlier is no longer an outlier — it has been reclassified).
- **IC + PM coordinated grammar alignment for ADR-0066**: NOT TRIGGERED. IC and PM do not maintain `docs/governance/` directories; neither has a parallel project-briefing artifact to reclassify; ADR-0066 is Spore-scope-only.
- **Three pattern-library admission candidates tractability UNAFFECTED**. federation-encounter (composition-pattern) / four-enabling-conditions (design-criteria-pattern) / view-template pattern-library doc (catalog-pattern) remain tractable under ADR-0065 M4 framework. ADR-0066 does not shift admission-workflow prioritization.

## Alternatives Considered

Full decision-brief evaluating 7 options at `tmp/adr-0066-decision-brief-2026-04-24.md`. Six rejected; K3a (this ADR's decision) selected.

### K1 — Grandfather in place (child's original recommendation at ADR-0065, rejected at plan-revision gate)

Move: keep `doc_kind: pattern`, keep in `docs/governance/`, add §Consequences acknowledgment. **Rejected**: preserves the contradiction (meta-protocol canonical pattern exemplar fails all 3 M4 sub-class tests). Violates parsimony-as-earning-test-outcome (ADR-0048) — grandfathering a failing doc tells future authors "earning-tests are advisory, not gates." Operator already declined K1 at ADR-0065 plan-revision gate on 50-50 judgment grounds; Step 0.5 audit resolved judgment toward mis-classified.

### K1-provisional — Admit 4th sub-class (infrastructure-pattern) provisionally with trigger

Move: extend M4 with provisional 4th sub-class `infrastructure-pattern` + trigger to downgrade if no ≥1 additional infrastructure-pattern candidate surfaces. **Rejected**: direct contradiction of ADR-0065 K4 rationale (*"honest-rigor cluster-counting discipline argues against inventing a 4th sub-class on single-doc evidence"*). No new evidence has surfaced between ADR-0065 (2026-04-24 same-day) and ADR-0066. Revisiting the rejected option with no new evidence would undo ADR-0064 + ADR-0065 discipline-chain.

### K2 — Migrate to `docs/patterns/` (git mv + body-shape normalization)

Move: `git mv` to `docs/patterns/` + body-shape normalize (Problem → Forces → Solution → 5 API subsections rewritten as Context → Problem → Forces → Pattern → Current Adopters → Related Patterns). **Rejected**: body-shape-fix is cosmetic; underlying content still fails all 3 M4 sub-class earning-tests. A pattern file at `docs/patterns/` that doesn't earn any sub-class leaves the pattern-library with an unclassified member (contradicts ADR-0065 §5.3 sub-class assignment requirement). Axis-J5-shaped move (body-shape-fix) which ADR-0065 explicitly REMOVED as out-of-bounds per §Non-goals.

### K3b — Reclassify to `doc_kind: architecture` (alternative reclassification)

Move: same structure as K3a but change to `doc_kind: architecture`. **Rejected**: weaker evidence-fit than K3a. Architecture per meta-protocol row 20: *"Structural decisions — how the system is shaped"* (exemplar: `spore.mycelial-holarchy-architecture` broad structural). project-briefing is endpoint-level (narrow HTTP API), not system-shape-level. project-bootstrap-spec (sibling) is `doc_kind: spec` ("Operational definitions — what must be true"); project-briefing is operationally-identical.

### K5 — Rewrite in place to pattern shape (substantive body rewrite)

Move: keep `doc_kind: pattern` + location; heavily rewrite body to force-fit one of the 3 M4 sub-classes. **Rejected**: underlying content (HTTP endpoint for querying governance-memory) doesn't naturally compose over Spore primitives regardless of phrasing. Rewriting to force fit is cosmetic-with-extra-steps. No canon-method precedent for rewrite-to-pass-earning-test as canon-method.

### K6 — Retire / deprecate (status: active → deprecated)

Move: change frontmatter `status: active` → `status: deprecated`. **Rejected**: mis-diagnoses the question. The endpoint is actively used (per meta-protocol Tier 0 bootstrap experience + Claude Code `/project-context` skill + Dobby MCP tool + koi-processor reference implementation). The question is doc_kind classification, not status.

## Evidence

- **Primary parking-source** (body-only per plan-convention; no frontmatter `r_claim_source`): ADR-0065 §Consequences (lines 243, 251-267) + §K4 deferral rationale (lines 162-169) — K4 deferral decision + forward-reference to ADR-0066 scope.
- **Method-precedent sources**:
  - ADR-0043 (federation-protocol-rename) + ADR-0057 (governance-artifacts-file-rename) — rename-precedent with git mv + doc_id migration + H1 retitle + cross-ref cascade.
  - ADR-0048 (power-expressive-constructed-modes) — parsimony-as-earning-test-outcome discipline.
  - ADR-0064 (co-presence-field-condition-disposition) — honest-rigor cluster-counting discipline + decline-to-invent-sub-class-on-primary-inspiration-single-tradition precedent (structurally analogous to ADR-0066's decline-to-invent-sub-class-on-single-doc).
  - ADR-0065 (pattern-library-infrastructure-spec) — M4 sub-class framework + K4 deferral source + parsimony-applied-at-sub-class-admission precedent (structurally analogous to ADR-0066's parsimony-applied-at-single-doc-evaluation).
- **Canonical evidence sources** (body-references per plan §Evidence canonical non-tmp sources rule):
  - `docs/governance/project-briefing-spec.md` (post-rename target — the reclassified doc)
  - `docs/governance/project-bootstrap-spec.md` (structural-sibling validator — same location + depends_on + operational-infrastructure character + canonical-exemplar-parity)
  - `docs/governance/agent-commons-meta-protocol.md:22, :23` (Artifact Taxonomy table rows; row 22 = canonical `spec`; row 23 updated from `spore.project-briefing-pattern` to `spore.governance-memory`)
  - `docs/governance/agent-commons-meta-protocol.md:55` (Tier 0 functional endpoint reference — UNCHANGED; endpoint path `GET /project/briefing` unaffected by reclassification)
  - `docs/patterns/governance-memory.md` (meta-protocol row-23 replacement exemplar — self-host authority per `governance-memory.md:36` enumerating 9 canonical doc_kinds)
  - `docs/README.md:59` (governance-section listing — updated for filename + description)
  - `docs/patterns/README.md:73-75` (audit-outlier section removed — deferral closed)
- **Step 0.5 audit manifest**: `tmp/adr-0066-audit-manifest-2026-04-24.md` (working-evidence log; not in frontmatter).
- **Decision-brief with operator directive**: `tmp/adr-0066-decision-brief-2026-04-24.md` (7-option evaluation + K3a recommendation + operator fast-path acceptance "K3a with all three child sub-option recommendations"; not in frontmatter).
- **Preflight manifest**: `tmp/adr-0066-preflight-manifest.txt` (PREEXEC_SHA + slot verification + validator baseline).
- **Validator baselines**: `tmp/adr-0066-validator-pre.txt` (pre-exec 9 errors / 30 warnings) + `tmp/adr-0066-validator-post.txt` (post-exec — expected identical parity).
- **IC + PM HEAD-start captures**: `tmp/adr-0066-ic-head-start.txt` + `tmp/adr-0066-pm-head-start.txt` (read-only-discipline verification anchors).
- **Cross-ADR consistency**: ADRs 0043, 0048, 0057, 0064, 0065 preserved unchanged structurally. ADR-0065 frontmatter unchanged (superseding-via-prose pattern — K4 closure narrated in this ADR's body prose).

## Diff summary

- **Renamed file** (via git mv; history preserved via `--follow`): `docs/governance/project-briefing-pattern.md` → `docs/governance/project-briefing-spec.md`. Frontmatter edits: `doc_id: spore.project-briefing-pattern` → `spore.project-briefing-spec`; `doc_kind: pattern` → `spec`. H1: "Project Briefing Pattern" → "Project Briefing Spec". Opening-paragraph wording: "reusable pattern for assembling" → "operational definition for assembling ... via a single API endpoint". Body subsections (Problem / Forces / Solution with 5 API subsections / Known Uses / Resulting Context / Related Patterns) UNCHANGED in content.
- **`docs/governance/agent-commons-meta-protocol.md:23`**: row 23 canonical pattern exemplar `spore.project-briefing-pattern` → `spore.governance-memory`. Single-cell edit in markdown taxonomy table.
- **`docs/README.md:59`**: governance-section listing updated — filename link `./governance/project-briefing-pattern.md` → `./governance/project-briefing-spec.md`; description "context assembly for agents" → "context assembly endpoint spec for agents".
- **`docs/patterns/README.md:73-76`**: `## Audit-outlier (deferred to ADR-0066)` section (header + body paragraph) REMOVED. Surrounding sections (§Parked admission candidates above; §Cross-references below) preserved.
- **New file** (this ADR): `docs/research/canon-decisions/0066-project-briefing-pattern-audit-outlier-disposition.md`.
- **Unchanged on disk**: ADR-0043, ADR-0048, ADR-0057, ADR-0064, ADR-0065 (superseding-via-prose pattern). All 5 in-scope patterns in `docs/patterns/` — untouched. `docs/project-vision.md` — untouched. `docs/foundations/governance-artifacts-and-graph-projections.md` — untouched. `docs/research/concepts-p2p-wiki.yaml` — unchanged at v12.
- **NOT touched** (per §Non-goals + read-only-discipline): IC + PM repositories.

## Parking lot

- **Federation-encounter pattern-library admission** as composition-pattern sub-class under ADR-0065 workflow (ADR-0055 triggers E-1..E-5; E-5 fired via ADR-0064; E-1 closed via ADR-0065 existence). Queued MEDIUM priority.
- **Four-enabling-conditions pattern-library admission** as design-criteria-pattern sub-class (ADR-0048 parking; Johar's 4 criteria + primary-tradition; criteria-operationality evidence deferred to admission-ADR Step 0.5).
- **View-template pattern-library doc admission** as catalog-pattern sub-class (ADR-0058 parking; 5 demoted graph projections ready as starting content).
- **Validator schema ADR** — add `archived` as first-class research-status enum value (parked from ADR-0065 entry-gate investigation; ruddick-2026 file drift incident).
- **`/end` skill validator-check workflow integration** (parked from ADR-0065 entry-gate investigation).
- **ADR-0059b commons-law in-file consistency** (LOW priority) — 3 remaining `constitutional-artifacts` refs in `commons-law-and-charter-lineage.md:53,63,117` not in ADR-0059a scope.
- **IC + PM coordinated grammar alignment for doc_kind taxonomy refinements**: NOT triggered by ADR-0066 (no parallel governance-directory artifacts in IC/PM); if cross-project spec/pattern reclassification candidates surface in future, alignment inherits ADR-0066 precedent.

## References

- [docs/research/canon-decisions/0043-federation-protocol-rename.md](./0043-federation-protocol-rename.md) — rename-precedent (git mv + doc_id migration + H1 retitle + cross-ref cascade)
- [docs/research/canon-decisions/0048-power-expressive-constructed-modes.md](./0048-power-expressive-constructed-modes.md) — parsimony-as-earning-test-outcome discipline
- [docs/research/canon-decisions/0057-governance-artifacts-file-rename.md](./0057-governance-artifacts-file-rename.md) — rename-precedent with 126-cross-ref cascade
- [docs/research/canon-decisions/0064-co-presence-field-condition-disposition.md](./0064-co-presence-field-condition-disposition.md) — honest-rigor cluster-counting discipline (decline-to-invent-sub-class-on-single-tradition precedent)
- [docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md](./0065-pattern-library-infrastructure-spec.md) — M4 sub-class framework + K4 deferral source
- [docs/governance/project-briefing-spec.md](../../governance/project-briefing-spec.md) — reclassified target (this ADR's primary canon edit)
- [docs/governance/project-bootstrap-spec.md](../../governance/project-bootstrap-spec.md) — structural-sibling validator (canonical `doc_kind: spec` exemplar at meta-protocol row 22)
- [docs/governance/agent-commons-meta-protocol.md](../../governance/agent-commons-meta-protocol.md) — row 22 + row 23 Artifact Taxonomy anchors; row 23 updated by ADR-0066
- [docs/patterns/governance-memory.md](../../patterns/governance-memory.md) — meta-protocol row-23 replacement canonical pattern exemplar
- [docs/README.md](../../README.md) — governance-section listing updated by ADR-0066
- [docs/patterns/README.md](../../patterns/README.md) — audit-outlier section removed by ADR-0066
