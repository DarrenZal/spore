# ADR-0066 Decision Brief — project-briefing-pattern audit-outlier disposition

**Date**: 2026-04-24
**Step**: 1 (decision-brief)
**Auditor**: child executor (applying M4 sub-class earning-tests + Reading A/B/C framing from audit manifest)
**Input**: `tmp/adr-0066-audit-manifest-2026-04-24.md`
**Decision-gate**: Step 2 (operator ratification required before Step 3 execution)

---

## 1. Question before the operator

**What is the disposition of `docs/governance/project-briefing-pattern.md`** — the ADR-0065 audit-outlier that carries `doc_kind: pattern` but sits outside `docs/patterns/`, has non-standard body-shape, and (per Step 0.5 audit) fails all 3 ratified M4 sub-class earning-tests?

The K4 deferral in ADR-0065 made this the first queued follow-on (MEDIUM priority). ADR-0066 exists to close it cleanly.

---

## 2. One-screen summary

| Dimension | Finding |
|-----------|---------|
| Target | `docs/governance/project-briefing-pattern.md` (101 lines) |
| Frontmatter | `doc_id: spore.project-briefing-pattern`, `doc_kind: pattern`, status: active, depends_on: [spore.agent-commons-meta-protocol] |
| Inbound `depends_on` | **0** (isolated from spec-DAG) |
| Inbound citations | 3 significant: docs/README.md:59 (governance listing), agent-commons-meta-protocol.md:23 (CANONICAL pattern example), agent-commons-meta-protocol.md:55 (Tier 0 endpoint ref) |
| Body shape | 10 sections (Problem→Forces→Solution→5 API subsections→Known Uses→Resulting Context→Related Patterns); DIVERGES from 6-section uniform shape of 5 in-scope patterns |
| Content character | API/endpoint spec (HTTP signature + JSON response + resolution tiers + degradation table + interface mapping) |
| Self-description | "Reusable pattern... extracted from the working Agent Commons governance layer" (Line 11) |
| Structural sibling | `docs/governance/project-bootstrap-spec.md` (doc_kind: spec, same location, same depends_on, same operational-infrastructure character) |
| Composition-pattern fit | **FAILS (α-comp)** — does not compose Spore primitives/doctrines/modes/properties; composes over governance-memory-infrastructure entities |
| Design-criteria-pattern fit | **HARD FAIL** — forces target API-behavior not coordination-substrate; zero tradition-grounding |
| Catalog-pattern fit | **HARD FAIL** — no independently-motivated sub-entity set; host-structure would be implementation-backend not canon-level |
| Cleanest honest reading | **Reading A (mis-classified as pattern; is actually `doc_kind: spec`)** |

Full evidence at `tmp/adr-0066-audit-manifest-2026-04-24.md`.

---

## 3. Option space

Seven options. Each evaluated on: fit-with-audit-evidence / scope (files touched) / canon-method-precedent / parsimony-discipline / method-tax.

### Option K1 — Grandfather in place (ADR-0065 child's original rec, rejected at plan-revision gate)

- **Move**: Keep `doc_kind: pattern`, keep in `docs/governance/`, add §Consequences acknowledgment that audit-outlier is accepted.
- **Files touched**: ADR-0066 body + possibly `docs/patterns/README.md` audit-outlier section rewrite (from "deferred to ADR-0066" to "grandfathered per ADR-0066").
- **Fit with evidence**: WEAK. Preserves the contradiction — meta-protocol names it as canonical pattern exemplar, but Step 0.5 audit shows it fails all 3 M4 sub-class tests. Leaves future readers and admission-workflow authors to re-discover the same mismatch.
- **Canon-method-precedent**: Does not inherit cleanly from any prior canon-method; closest is "accept-and-document" but no precedent for accepting a doc that fails the relevant earning-test.
- **Parsimony**: Violates parsimony-as-earning-test-outcome (ADR-0048) — grandfathering a failing doc tells future authors "earning-tests are advisory, not gates."
- **Recommendation**: REJECT. Operator already declined this at ADR-0065 plan-revision gate on 50-50 judgment grounds; Step 0.5 audit has now resolved the judgment toward "mis-classified."

### Option K1-provisional — Admit 4th sub-class (infrastructure-pattern) provisionally with trigger

- **Move**: Extend M4 framework with provisional 4th sub-class `infrastructure-pattern` (patterns about how governance-layer infrastructure is exposed/queried). Trigger: "downgrade if no ≥1 additional infrastructure-pattern candidate surfaces within reasonable time."
- **Files touched**: ADR-0066 + `docs/project-vision.md:111` (four-categories bullet updated to name 4 sub-classes) + `docs/foundations/governance-artifacts-and-graph-projections.md` parallel + `docs/patterns/README.md` (4th sub-class + earning-test + project-briefing-pattern admission under new sub-class) + ADR-0065 §M4 Sub-class Framework extension note OR standalone ADR-0066 §4th sub-class section.
- **Fit with evidence**: MODERATE. Treats the audit-outlier as legitimate-with-novel-shape rather than mis-classified. Forces a new earning-test definition on single-doc evidence.
- **Canon-method-precedent**: INHERITANCE VIOLATION of ADR-0064 honest-rigor cluster-counting discipline + ADR-0065 K4 rationale (the latter explicitly declined this move: *"honest-rigor cluster-counting discipline argues against inventing a 4th sub-class on single-doc evidence"*). Revisiting it at ADR-0066 with no new evidence would contradict ADR-0065's operator-ratified K4 rationale.
- **Parsimony**: Violates canon-object-class-inventory parsimony. Would turn the preserved 4-category inventory into 4-categories-with-a-sub-class-count-bump.
- **Recommendation**: REJECT. No new evidence has surfaced between ADR-0065 (2026-04-24 earlier today) and now. Rejecting again preserves ADR-0064 + ADR-0065 discipline chain.

### Option K2 — Migrate to `docs/patterns/` (git mv + body-shape normalization)

- **Move**: `git mv docs/governance/project-briefing-pattern.md docs/patterns/project-briefing-pattern.md`. Body-shape normalize: rewrite Problem→Forces→Solution→5 API subsections into Context→Problem→Forces→Pattern→Current Adopters→Related Patterns. Update `docs/README.md:59` (remove from governance listing; add to patterns listing implicitly via directory). Update `agent-commons-meta-protocol.md:23` to retain as pattern exemplar but point to new path.
- **Files touched**: git mv (1 rename) + body rewrite (substantial) + docs/README.md:59 + possibly meta-protocol:23 path update + docs/patterns/README.md Currently-admitted patterns table + audit-outlier section removal.
- **Fit with evidence**: POOR. The body-shape-fix is cosmetic; the underlying content still fails all 3 M4 sub-class earning-tests. A pattern file at `docs/patterns/` that doesn't earn any sub-class leaves the pattern-library with an unclassified member (contradicts ADR-0065 §5.3 table's requirement that all patterns earn a sub-class). Body rewrite risks losing operational detail (HTTP signature / JSON shape / resolution tiers).
- **Canon-method-precedent**: Would be first pattern admission bypassing M4 sub-class earning-test — direct contradiction of ADR-0065's admission workflow.
- **Parsimony**: Anti-parsimonious. Forces pattern status on a failing doc via cosmetic moves.
- **Recommendation**: REJECT. Structural fit is absent; normalizing shape without substantive fit is the canon-method anti-pattern.

### Option K3a — Reclassify to `doc_kind: spec` (recommended in audit)

- **Move**: Change frontmatter `doc_kind: pattern` → `doc_kind: spec`. Rename file: `project-briefing-pattern.md` → `project-briefing-spec.md` (parallel to `project-bootstrap-spec.md`). Update doc_id: `spore.project-briefing-pattern` → `spore.project-briefing-spec`. Update `agent-commons-meta-protocol.md:23` to point to a genuine pattern exemplar (recommend `spore.governance-memory`). Update `docs/README.md:59` description (remove "pattern" labeling). Update `docs/patterns/README.md` to remove audit-outlier section (now closed).
- **Files touched**:
  1. `docs/governance/project-briefing-pattern.md` — frontmatter edit + rename (git mv)
  2. `docs/governance/agent-commons-meta-protocol.md:23` — swap canonical pattern example to `spore.governance-memory`
  3. `docs/README.md:59` — update description ("context assembly endpoint spec for agents")
  4. `docs/patterns/README.md:73-75` — remove audit-outlier section (ADR-0066 closes the deferral) + possibly remove from patterns/README reference list (pattern file no longer exists — this is actually just section removal)
  5. ADR-0066 (new)
  6. Possibly `docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md` — NO EDIT (per ADR-0065 §Consequences the K4 deferral lives in body prose; ADR-0066 closes via superseding-via-prose pattern)
- **Fit with evidence**: STRONG.
  - Content IS endpoint-spec (HTTP signature + JSON shape + resolution tiers + graceful-degradation table + interface mapping)
  - Structural sibling `project-bootstrap-spec.md` validates the shape (both in `docs/governance/`, both depend on meta-protocol, both canonical-exemplars in meta-protocol taxonomy)
  - Forces target API-behavior — spec-lineage
  - Zero tradition-grounding + extracted-from-working-systems — spec-lineage
  - Zero inbound `depends_on` — consistent with endpoint-spec implemented in external repo (koi-processor)
- **Canon-method-precedent**: 
  - **decline-pattern-status-via-reclassification** becomes a new canon-method outcome-shape for audit-outliers (complements the 3 decline-shapes inherited from ADR-0054/0055/0061).
  - **Structural-sibling-pairing validation**: uses `project-bootstrap-spec.md` as positive structural-parallel evidence, a reusable audit-technique.
- **Parsimony**: Strong alignment with parsimony-as-earning-test-outcome (ADR-0048) + honest-rigor cluster-counting discipline (ADR-0064) + K4 rationale (ADR-0065). Preserves 4-category canon-object-class inventory and 3-sub-class-under-patterns framework without inflation.
- **Method-tax considerations**:
  - Meta-protocol row 23 needs a replacement canonical `pattern` example. Recommendation: `spore.governance-memory` (the most canon-central pattern, cited in multiple places, stable, self-contained).
  - File rename: git mv preserves history with `--follow` (per ADR-0043 + ADR-0057 rename precedents).
  - doc_id slug change: `spore.project-briefing-pattern` → `spore.project-briefing-spec`. Only 1 depends_on edge affected (none — zero inbound).
- **Session-atomic estimate**: ~30-60s based on ADR-0057 precedent (file rename + 126 cross-refs took 17s). This one has ≤10 cross-refs.
- **Recommendation**: PRIMARY. Evidence is clean, scope is bounded, canon-method is additive without category inflation, parsimony discipline is upheld.

### Option K3b — Reclassify to `doc_kind: architecture`

- **Move**: Same structure as K3a but change to `doc_kind: architecture` instead of `spec`.
- **Fit with evidence**: WEAKER than K3a. Architecture per meta-protocol row 20: *"Structural decisions — how the system is shaped"*. Exemplar: `spore.mycelial-holarchy-architecture` (broad structural).
  - project-briefing-pattern is endpoint-level (narrow HTTP API), not system-shape-level
  - Contrast project-bootstrap-spec (doc_kind: spec, operational-definitions-level) which is a clean structural parallel
- **Recommendation**: REJECT. K3a is strictly better evidence-fit.

### Option K5 — Rewrite in place to pattern shape (substantive body rewrite while keeping location)

- **Move**: Keep `doc_kind: pattern` + location `docs/governance/`. Rewrite body to normalize: add Context section, replace Solution subsections with concept-level Pattern subsections, add Current Adopters, etc. Attempt to re-articulate so the doc earns one of the 3 sub-classes.
- **Fit with evidence**: WEAK. The underlying content (HTTP endpoint for querying governance-memory) doesn't naturally compose over Spore primitives/doctrines/modes/properties regardless of phrasing. Rewriting to force fit is cosmetic-with-extra-steps.
- **Canon-method-precedent**: No precedent for rewrite-to-pass-earning-test as canon-method.
- **Recommendation**: REJECT.

### Option K6 — Retire / deprecate (status: active → deprecated)

- **Move**: Change frontmatter `status: active` → `status: deprecated` with superseded-by note.
- **Fit with evidence**: INAPPROPRIATE. The endpoint is actively used in koi-processor + Claude Code /project-context skill + Dobby MCP tool + (per meta-protocol Tier 0) part of the Tier 0 bootstrap experience. It is NOT deprecated functionally; the question is `doc_kind` classification, not status.
- **Recommendation**: REJECT. Misdiagnoses the question.

---

## 4. Audit-outlier ≠ bug; it's a classification-error

Step 0.5 audit findings converge on a specific conclusion: project-briefing-pattern.md is well-written, actively-used, canonical to the Agent Commons Tier 0 experience — but it is **classified as the wrong doc_kind**. The Alexandrian-template-feel plus the word "pattern" in the title led to `doc_kind: pattern` at authoring time, but the body content is endpoint-spec throughout.

Reclassification (K3a) preserves everything valuable about the doc (content, location, active-use) while fixing the one thing that's wrong (the doc_kind label). It also closes the meta-protocol's canonical-pattern-example contradiction by repointing row 23 to a genuine pattern.

---

## 5. Recommendation

**Option K3a — Reclassify to `doc_kind: spec`**

### Rationale (6 points)

1. **Evidence-fit**: Strongest across all 7 options. Content IS endpoint-spec (HTTP + JSON + tiers + degradation + interfaces). Structural sibling `project-bootstrap-spec.md` validates shape. Forces target API-behavior. No tradition-grounding. Zero inbound `depends_on`. Every signal points spec-ward.
2. **Parsimony-discipline**: Honors parsimony-as-earning-test-outcome (ADR-0048) + honest-rigor cluster-counting (ADR-0064) + K4 deferral rationale (ADR-0065). Doesn't inflate canon-object-class inventory or sub-class count.
3. **Method-precedent contribution**: Establishes **decline-pattern-status-via-reclassification** as a new disposition-shape for audit-outliers — complements the 3 decline-shapes from ADR-0054/0055/0061. Also validates **structural-sibling-pairing** as a reusable audit-technique.
4. **Scope is bounded**: 5-6 files touched (target file rename + frontmatter edit + meta-protocol row 23 update + README.md:59 description update + patterns/README.md audit-outlier section removal + ADR-0066). Session-atomic estimated at 30-60s per ADR-0057 rename-precedent.
5. **Meta-protocol coherence**: Resolves the canonical-pattern-example contradiction. Meta-protocol row 22 (`spore.project-bootstrap-spec` as canonical `spec`) + new row 23 (`spore.governance-memory` as canonical `pattern`) presents two strong, uncontradicted anchors.
6. **Queue-progress**: Closes K4 deferral from ADR-0065 as MEDIUM-priority ("timely resolution after ADR-0065 lands; not indefinite carry") — ADR-0066 lands same day as ADR-0065 (or next-session), honoring timely-resolution discipline.

### Sub-option: which pattern replaces `spore.project-briefing-pattern` as meta-protocol canonical `pattern` example?

Three candidates, ranked:

1. **`spore.governance-memory`** (RECOMMENDED) — most canon-central pattern; self-host authority (per `governance-memory.md:36` enumerating the 9 canonical doc_kinds); active status; 3-instance-family recurrence; cited as pattern-exemplar in ADR-0065 §M4 composition-pattern section.
2. `spore.commitment-pooling` — strong pattern; active; yaml-registered (primary_project: pm); 7 inbound depends_on per ADR-0065 audit; but less canon-central to the meta-protocol's taxonomy (governance-memory describes the doc-DAG system itself that the meta-protocol governs).
3. `spore.federated-knowledge-exchange` — strong pattern; active; but heavy on federation-layer which is less typical of what new-adopter patterns might look like.

**Recommendation: spore.governance-memory** — pairs cleanly with row 22's `spore.project-bootstrap-spec`, and governance-memory is the pattern that formalizes the very artifact-system row 23 describes ("Reusable solutions — extracted from working systems. Informs future implementations").

---

## 6. Scope & allowlist under Option K3a

### 6.1 Allowlisted files (5 + 1 ADR)

1. **`docs/governance/project-briefing-pattern.md`** — git mv to `docs/governance/project-briefing-spec.md`; frontmatter `doc_kind: pattern` → `doc_kind: spec`; `doc_id: spore.project-briefing-pattern` → `doc_id: spore.project-briefing-spec`; H1 title updated.
2. **`docs/governance/agent-commons-meta-protocol.md:23`** — row 23 example: `spore.project-briefing-pattern` → `spore.governance-memory`.
3. **`docs/README.md:59`** — update listing ("project-briefing-pattern.md — context assembly for agents" → "project-briefing-spec.md — context assembly endpoint spec for agents"; update filename link).
4. **`docs/patterns/README.md:73-76`** — remove audit-outlier section (ADR-0066 closes the deferral; project-briefing-pattern is no longer a pattern).
5. **`docs/research/canon-decisions/0066-project-briefing-pattern-audit-outlier-disposition.md`** (new) — this ADR.

### 6.2 Files NOT touched (per §Non-goals)

- ADR-0065 file preserved on-disk (superseding-via-prose pattern — ADR-0066 closes the K4 deferral via body prose reference; ADR-0065 frontmatter remains unchanged).
- All 5 in-scope patterns in `docs/patterns/` untouched.
- `docs/project-vision.md:111` four-categories bullet untouched (category count preserved at 4; pattern sub-class count preserved at 3).
- `docs/foundations/governance-artifacts-and-graph-projections.md` untouched.
- `docs/research/concepts-p2p-wiki.yaml` untouched (v12 preserved).
- IC + PM repos untouched (read-only verify at Step 7.5).

### 6.3 Validator projection

Pre: 9 errors / 30 warnings (baseline).
Post: 9 errors / 30 warnings (expected stable).

Rationale:
- Frontmatter edit keeps `doc_kind` as valid enum value (`spec` is enumerated in the 9 canonical doc_kinds).
- doc_id change preserves `spore.` prefix (no project_id-mismatch error).
- No inbound `depends_on` edges exist (verified in audit), so doc_id change doesn't break references.
- No yaml registration (Axis H1 required-going-forward applies to pattern admissions; spec reclassification is not a pattern-admission).

---

## 7. Step 2 decision form

**Operator ratifies one option**:

- [ ] **K1 grandfather in place** — preserve active + pattern + docs/governance/; acknowledge as audit-outlier in §Consequences (no structural change). [child rec: REJECT]
- [ ] **K1-provisional 4th sub-class** — admit infrastructure-pattern provisionally with trigger-to-review. [child rec: REJECT — contradicts ADR-0065 K4 rationale]
- [ ] **K2 migrate** — git mv to docs/patterns/ + body-shape normalize. [child rec: REJECT — cosmetic without substantive fit]
- [x] **K3a reclassify to spec** (CHILD RECOMMENDATION) — frontmatter + file rename + meta-protocol row 23 swap to `spore.governance-memory` + 3 coordinated-edit allowlist.
- [ ] **K3b reclassify to architecture** — weaker evidence-fit than K3a. [child rec: REJECT]
- [ ] **K5 rewrite in place** — heavy body rewrite to force pattern-sub-class fit. [child rec: REJECT]
- [ ] **K6 deprecate** — status: active → deprecated. [child rec: REJECT — misdiagnoses question]

**If K3a**:

Sub-option — meta-protocol row 23 replacement example:
- [x] `spore.governance-memory` (child rec)
- [ ] `spore.commitment-pooling`
- [ ] `spore.federated-knowledge-exchange`
- [ ] Other

Sub-option — filename:
- [x] `project-briefing-spec.md` (parallel to `project-bootstrap-spec.md`; child rec)
- [ ] Keep `project-briefing-pattern.md` filename but change frontmatter only (filename-vs-doc_kind mismatch — creates new debt)
- [ ] Other

Sub-option — H1 title:
- [x] "Project Briefing Spec" (parallel to "Project Bootstrap Spec"; child rec)
- [ ] Keep "Project Briefing Pattern" (contradicts reclassification)
- [ ] Other

### Known-ceiling posture

Per `feedback_review_plan_code_ceiling.md` discipline, 2-round `/review-plan` cap on the plan file; accepting known-ceiling at round 2 if diminishing-returns on pickier clarifications. Plan file lands at `~/.claude/plans/adr-0066-project-briefing-pattern-audit-outlier-disposition.md` after Step 2 operator approval.

---

**Decision-brief status**: COMPLETE. PAUSE for operator Step 2 decision gate. Do NOT proceed to Step 3 execution without explicit approval on disposition option + sub-option confirmations.
