---
doc_id: spore.canon-decision.validator-schema-archived-enum
doc_kind: decision-record
status: draft
adr_number: "0067"
opened-on: 2026-04-24
closed-on: 2026-04-24
decision: extend-enum
r_claim_statement: |
  ADR-0065 (pattern-library-infrastructure-spec, 2026-04-24) §Parking-lot lines 340-341
  flagged two follow-on items from the 2026-04-24 entry-gate validator-drift incident:
  (1) "Validator schema ADR for `archived` status enum addition (flagged during entry-gate
  investigation; ruddick-2026 file drift)"; (2) "Workflow-discipline validator-check in
  `/end` skill (flagged during entry-gate investigation; detect untracked-working-tree
  drift that changes validator baseline between preflight and execution)". ADR-0067
  closes item (1); item (2) deferred to ADR-0068 per operator directive 2026-04-24
  Step-2 decision-gate Axis B5 (cross-repo edit to `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md`
  needs own baseline-mechanism design decision — location / refresh cadence /
  blocking-vs-warning enforcement).

  Step 0.5 audit (`tmp/adr-0067-audit-manifest-2026-04-24.md`) established:
  (a) validator state: `scripts/validate_spec_dag.py:110` defines `DECISION_RECORD_STATUSES
  = {"draft", "active", "deprecated", "superseded"}` — 4 values; separate
  `PROPOSAL_STATUSES` (6 values) at line 111 governs only `doc_kind: proposal`. Default
  fall-through at line 115-119 means ONE enum covers ALL non-proposal doc_kinds (research /
  decision-record / pattern / spec / foundation / architecture / vision / protocol /
  operations / positioning / roadmap / connection / planning — 13 doc_kinds share the
  enum). (b) protocol state: `docs/research/planning/canon-review-protocol.md:141-145`
  §Status lifecycle enumerates the same 4 values with distinct per-value semantics;
  authoritative. (c) corpus inventory: exactly 1 governed file (`docs/research/external/ruddick-2026-commitment-pool-route-graphs.md`)
  currently carries a status value mismatched to its semantic intent (status: deprecated
  but file is an archived external research paper with preserved `archived: 2026-04-23`
  metadata field + body archivist note); all 18 `status: raw-research-input` files lack
  `doc_id` and are warning-only (not enum-governed). (d) ruddick evidence chain:
  pre-f24b0d8 `status: archived` (original intent) → f24b0d8 `status: superseded`
  (surfaced missing `superseded_by` error per validator rule at line 188-191) → 1c7ec64
  `status: deprecated` (least-wrong-landing; commit message explicitly names "pending
  validator schema ADR to add 'archived' as first-class status" — THIS ADR).

  Per operator directive 2026-04-24 ADR-0067 Step-2 decision-gate fast-path:
  **A1 universal-enum + B5 defer + C2 validator+protocol + D3 ruddick retcon**.
  Meta-constitutional analysis: ADDITIVE enum extension (not semantic-redefinition of
  existing values; no values removed); per `canon-review-protocol.md:315` meta-constitutional
  rule which flags "revising lifecycle semantics" as requiring foundational-reframing,
  operator ratified ADDITIVE-not-load-bearing reading — no foundational-reframing proposal
  authored; no protocol-v4; ordinary-ADR machinery suffices. Matches protocol v3
  status-unification precedent shape (2026-04-20; smaller-scope than v3's unification —
  v3 unified 4 values; ADR-0067 adds 1 value within the v3 framework).

  Canon-body edits land in 4 files per allowlist: (i) `scripts/validate_spec_dag.py:110`
  (add `"archived"` to `DECISION_RECORD_STATUSES` set); (ii) `docs/research/planning/canon-review-protocol.md`
  §Status lifecycle (insert 5th bullet after `superseded` with distinct-semantics
  definition); (iii) `docs/research/external/ruddick-2026-commitment-pool-route-graphs.md`
  frontmatter (`status: deprecated` → `status: archived`; `archived: 2026-04-23` metadata
  preserved; body UNCHANGED); (iv) new ADR-0067 file (this file).

  Atomic-bundle discipline: all 4 edits land in ONE draft-commit to eliminate transient
  invalid-enum state (D3 without A1 would create a 9→10 error at commit-boundary
  granularity; intra-working-tree mid-edit transience is inherent but not rollback-triggering
  absent manual validator invocation).
supported_by:
  - spore:ADR-0065-pattern-library-infrastructure-spec
  - spore:ADR-0066-project-briefing-pattern-audit-outlier-disposition
authorized-by: "operator directive 2026-04-24 ADR-0067 Step-2 decision-gate: A1 universal-enum + B5 defer skill-infra + C2 validator+protocol + D3 ruddick retcon; meta-constitutional confirmed ADDITIVE-not-load-bearing; no foundational-reframing"
queue_reference: "ADR-0065 §Parking lot lines 340-341 (validator schema ADR + /end skill validator-check); /end skill validator-check DEFERRED to ADR-0068 per B5"
affects_canon:
  - scripts/validate_spec_dag.py
  - docs/research/planning/canon-review-protocol.md
  - docs/research/external/ruddick-2026-commitment-pool-route-graphs.md
  - docs/research/canon-decisions/0067-validator-schema-archived-enum.md
related_adrs:
  - spore:ADR-0065-pattern-library-infrastructure-spec
  - spore:ADR-0066-project-briefing-pattern-audit-outlier-disposition
concepts: []
---

# ADR-0067 — Validator-Schema `archived` Enum Addition (A1 Universal + B5 Defer + C2 Validator+Protocol + D3 Ruddick Retcon)

## Status

draft (authored 2026-04-24 under `adr-0067-validator-schema-archived-enum` decision-gated plan; Step-2 fast-path per operator directive ratifying A1+B5+C2+D3 combination; additive-enum-vocabulary-admission canon-method)

## Context

### Parking-source: ADR-0065 entry-gate validator-drift incident

ADR-0065 (pattern-library-infrastructure-spec, 2026-04-24) §Parking lot lines 340-341:

> *"Validator schema ADR for `archived` status enum addition (flagged during entry-gate investigation 2026-04-24; ruddick-2026 file drift)."*
>
> *"Workflow-discipline validator-check in `/end` skill (flagged during entry-gate investigation; detect untracked-working-tree drift that changes validator baseline between preflight and execution)."*

The drift-incident origin: the IndigenomicsAI session (parallel to ADR-0065 plan authoring) touched `docs/research/external/ruddick-2026-commitment-pool-route-graphs.md` and set `status: archived` — an enum-invalid value that halted validator mid-execution of ADR-0065 preflight. Resolution required two intervening commits (f24b0d8 + 1c7ec64) flipping the field to `deprecated` as "least-wrong enum value pending validator schema ADR" — the ADR now at hand.

ADR-0067 closes the first parking item (archived-enum-addition). The second item (/end skill validator-check) is deferred to ADR-0068 per operator Axis B5: the skill-infra concern involves a cross-repo edit to `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` and requires its own baseline-mechanism design decision (location / refresh cadence / blocking-vs-warning enforcement) — decoupling keeps ADR-0067 scope tight and gives skill-infra its own decision-gate.

### Canon state baseline at authoring

- 9 primitives / 3 cross-cutting doctrines / 2 modes-across-primitives / 2 properties-on-primitives (PRESERVED by ADR-0067; no canon-object-class changes)
- 6 derived glossary slugs (PRESERVED)
- 5 in-scope patterns under M4 sub-class framework (PRESERVED)
- 3 pattern-library admission candidates parked (PRESERVED; federation-encounter / four-enabling-conditions / view-template)
- Concepts yaml v12 (PRESERVED; Axis H1 future-only for slug admissions; `archived` is not a concept-slug)
- Validator 9/30 baseline pre-ADR-0067 at HEAD `0e43937` (post-ADR-0066 activation)
- PREEXEC_SHA: `0e43937`

### Step 0.5 audit findings

Full audit at `tmp/adr-0067-audit-manifest-2026-04-24.md`. Key findings:

**Validator mechanics** (`scripts/validate_spec_dag.py`):
- Line 110: `DECISION_RECORD_STATUSES = {"draft", "active", "deprecated", "superseded"}` — 4 values
- Line 111: `PROPOSAL_STATUSES = {"draft", "cooling-off", "eligible", "authorized-ADR", "executed", "closed"}` — separate track for `doc_kind: proposal`
- Line 115-119: `allowed_statuses_for_doc_kind` selector — proposal → PROPOSAL_STATUSES; everything else → DECISION_RECORD_STATUSES. **Architectural fact**: ONE enum governs ALL non-proposal doc_kinds (13 kinds: research / decision-record / pattern / spec / foundation / architecture / vision / protocol / operations / positioning / roadmap / connection / planning).
- Line 181-185: invalid-status check — emits error if `status not in allowed_statuses`
- Line 188-196: `status: superseded` requires `superseded_by:` field (enforced); repo-relative path discipline for `superseded_by:` value
- Line 152: `doc_id`-absent files skip all Tier-0 validation (warning-only)

**Protocol documentation** (`canon-review-protocol.md:141-145`):
> *Status lifecycle: `draft` — ADR drafted ... `active` — AC-* pass ... `deprecated` — no longer preferred live reference, no one-for-one successor ... `superseded` — later ADR replaces; `superseded_by:` field required.*

4 values documented; matches validator; no `archived`.

**Protocol v3 precedent** (`canon-review-protocol.md:363-366`, 2026-04-20):
Authorized by `reframing-protocol-governance-hardening`. Unified decision-record status to `draft / active / deprecated / superseded`; retired `proposed / accepted` split; validator updated to discriminate by `doc_kind`. ADR-0067 is additive-extension within this v3 framework.

**Corpus status inventory**: 139 draft / 100 active / 18 raw-research-input (no `doc_id` → warning-only) / 8 executed (proposal-only) / 1 superseded (valid, has `superseded_by`) / 1 deprecated (the ruddick case under disposition) / 1 template-inline-comment in protocol file (legitimate). **Only 1 governed file with semantic-mismatch: ruddick.**

**Spec-DAG vs research-status enum**: SAME enum (unified via default fall-through). Adding `archived` enlarges valid set for ALL 13 non-proposal doc_kinds, not research-only.

**Ruddick evidence chain**: pre-f24b0d8 `archived` (original intent, validator-halt) → f24b0d8 `superseded` (surfaced missing `superseded_by`) → 1c7ec64 `deprecated` (least-wrong; commit message names THIS ADR). File retains `archived: 2026-04-23` metadata field + body archivist note + `research_subkind: external_paper` — all three signal the creator's "archived external research" intent independent of the `status:` enum value.

### Architectural scope of ADR-0067

Per universal-enum posture (A1 sub-option): `archived` is valid for all non-proposal doc_kinds. No per-doc_kind refinement attempted (deferred as potential future work if drift surfaces). ADRs CAN use `archived` status semantically — though for ADR lifecycle, the existing `draft / active / deprecated / superseded` chain typically covers the use cases; `archived` is primarily research-oriented and historical-records-oriented.

## Decision

**A1 universal-enum + B5 defer + C2 validator+protocol + D3 ruddick retcon** per operator directive 2026-04-24 Step-2 decision-gate fast-path.

### Per-axis decisions

- **Axis A = A1 universal-enum addition** — add `"archived"` to `DECISION_RECORD_STATUSES` set at `scripts/validate_spec_dag.py:110`. Single-enum addition; `archived` valid for ALL 13 non-proposal doc_kinds (architectural consistency with existing unified enum). Rejects A2 alias-to-superseded (broken — recreates missing-`superseded_by` error on ruddick-class files); rejects A3 full-lifecycle-review (scope-expansion deferred; could be ADR-0068+ if future drift surfaces); rejects per-doc_kind-refinement sub-option (adds complexity without current justification; deferred to future work if research-vs-ADR `archived` semantics diverge operationally).
- **Axis B = B5 defer to ADR-0068** — `/end` skill validator-check integration deferred. Cross-repo edit to `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` needs its own baseline-mechanism design decision. Rejects B1 blocking-scoped (would bundle skill-infra with schema concern — two distinct domains); rejects B2 warning-only (weak enforcement); rejects B3 scoped-diff (marginal over B4); rejects B4 full-pass blocking (bundles scope — cleaner separation via B5).
- **Axis C = C2 validator + canon-review-protocol** — edit both. validator script (implementation) + protocol document (text-authoritative). Required-pair: C1-alone would create protocol↔validator drift (exactly the failure mode motivating the parking item). Rejects C1 validator-only (creates drift); rejects C3 docs/README.md addition (no natural hook; docs/README.md has no status-vocabulary surface).
- **Axis D = D3 ruddick retcon** — single-file frontmatter edit: `status: deprecated` → `status: archived`. Authorized by 1c7ec64 commit message ("pending validator schema ADR to add 'archived' as first-class status"). 0 cross-refs affected (no inbound `depends_on` per Step 0.5 audit). `archived: 2026-04-23` metadata field preserved; body UNCHANGED. Rejects D1 forward-only (leaves semantic debt on 1c7ec64-landing); rejects D2 scan+manifest (single candidate makes manifest overhead-only).

### Meta-constitutional analysis

`canon-review-protocol.md:315` meta-constitutional rule:
> *"Revising its authority model, lifecycle semantics, scope, validation rules, or other load-bearing governance mechanics requires a foundational-reframing proposal under `foundational-reframing-protocol-v1.md`, including the double-cooling rule for meta-corpus amendments."*

Operator reading (Step 2 ratification): ADR-0067 is ADDITIVE (adds new value; no existing value redefined; no semantic shift to `draft / active / deprecated / superseded`). Not "revising lifecycle semantics" in the load-bearing sense. Analogous to vocabulary-admission (concepts yaml slug-admission via ordinary-ADR), not to vocabulary-redefinition (which would require foundational-reframing). Protocol v3 unification (2026-04-20; `reframing-protocol-governance-hardening`-authorized) set the precedent for vocabulary-level change requiring reframing; ADR-0067's additive-extension operates within v3's framework, not at v3's meta-level.

**No foundational-reframing proposal authored. No protocol-v4.** Ordinary-ADR machinery suffices.

If future-reader disagrees: the ADDITIVE vs SEMANTIC-REDEFINITION distinction is a judgment call; operator ratified this interpretation at Step 2 decision-gate 2026-04-24. Disagreement route: author a follow-on ADR challenging the interpretation.

## Consequences

### Positive

- **ADR-0065 §Parking lot item (1) CLOSED.** First of two parked items resolved; timely closure per ADR-0065 parking discipline.
- **Semantic debt on ruddick file closed** per 1c7ec64 commit-message authorization. Ruddick now aligned: `status: archived` + `archived: 2026-04-23` metadata + `research_subkind: external_paper` + body archivist note all signal consistent "archived external research paper" semantics.
- **Protocol↔validator coherence preserved.** C2 ensures `canon-review-protocol.md` §Status lifecycle lists all 5 values the validator accepts. No drift introduced.
- **New canon-method precedent: additive-enum-vocabulary-admission** — pattern for adding a single enum value with distinct-from-existing semantics + same-commit protocol-doc update. Inherits protocol v3 unification-pattern shape but at additive scope. Reusable for future enum extensions (if operational pressure surfaces new lifecycle states).
- **New canon-method precedent: retcon-within-commit-message-authorization** — the 1c7ec64 commit message explicitly named "pending validator schema ADR" as its deferred-fix trigger. D3 retcon fulfills signaled-intent, not a history-rewrite. Reusable pattern: when a prior commit lands with explicit "pending-ADR" language, a future ADR authorized to close that pending item MAY retcon the prior commit's state without violating canon-record-integrity.
- **Universal-enum posture preserves architectural consistency.** Existing `DECISION_RECORD_STATUSES` is a unified enum serving 13 non-proposal doc_kinds; adding `archived` universally (not research-only) matches this design. Per-doc_kind refinement deferred as future work pending evidence it's needed.
- **Meta-constitutional threshold clarified.** Operator Step-2 ratification of ADDITIVE-not-load-bearing reading establishes interpretive precedent: single-enum-value additions with distinct-from-existing semantics operate as ordinary-ADR, not foundational-reframing. Future enum-additions inherit this posture.
- **Step 0.5 audit surfaced clean corpus state**: exactly 1 file needed retcon (ruddick); 0 other governed files carry semantic-mismatched status values. No hidden retcon-candidates surfaced.

### Negative / Cost

- **/end skill validator-check integration not landed** — ADR-0065 §Parking lot item (2) remains open, deferred to ADR-0068. The workflow-discipline gap that allowed the 2026-04-24 ruddick drift persists until ADR-0068 lands.
- **Universal-enum means ADRs can use `archived`** — semantically unusual for ADRs (which typically flow through `draft → active → deprecated / superseded`). If a future author applies `archived` to an ADR where `deprecated` would be more appropriate, there's no validator-level guard. Parking item for future per-doc_kind refinement if this surfaces operationally.
- **Ruddick `status` value history now shows 3 edits** (archived → superseded → deprecated → archived). This is inherent to the pending-ADR-closure pattern; `git log` preserves the chain.
- **18 `raw-research-input` files remain warning-only** (lack `doc_id`). Out-of-scope for ADR-0067 (`raw-research-input` is a legitimate pre-governance category per research corpus convention); noted as potential future scope.

### Neutral / Deferred

- **concepts-p2p-wiki.yaml unchanged at v12** (no slug admission for `archived`; status values are not tracked in concepts yaml).
- **Validator 9/30 baseline held** (AC6 verification at Step 7; atomic-bundle discipline prevents transient invalid-enum state).
- **IC + PM repos unaffected** (ADR-0067 is Spore-scope-only; IC and PM have their own validator configurations independent of Spore's status enum).
- **4 semantically-distinct lifecycle states** now available for non-proposal governed artifacts:
  - `draft` (authored, not yet verified)
  - `active` (verified, live landed record)
  - `deprecated` (retired from live canon use, no successor)
  - `superseded` (replaced one-for-one via `superseded_by:` field)
  - `archived` (preserved as historical record, intentionally out of rotation; external research / historical planning / moved-on bridge notes)

## Alternatives Considered

### Axis A rejections

- **A2 alias-to-superseded**: add `archived` as alias that validator treats as `superseded`. BROKEN — aliasing to `superseded` means validator would require `superseded_by:` field on archived-class files (like ruddick), recreating the original error chain f24b0d8 → 1c7ec64. No coherent use case.
- **A3 full lifecycle vocabulary review**: evaluate full lifecycle (add `archived`; consider `retracted`, `experimental`, `grandfathered`, etc.). Rejected: significantly larger scope than closing the ruddick incident + ADR-0065 parking item. Would require canon-review-protocol foundational-reframing per `canon-review-protocol.md:315`. Deferred as potential ADR-0068+ if future drift surfaces additional lifecycle-vocabulary needs.
- **Per-doc_kind enum refinement sub-option**: extend `allowed_statuses_for_doc_kind` to route specific doc_kinds (e.g. research) to distinct enum sets. Rejected: adds architectural complexity without current operational justification. Universal-enum (A1) is simpler and has no evident downside. Future ADR can refactor per-doc_kind if research-vs-ADR `archived` semantics diverge operationally — noted in §Parking lot.

### Axis B rejections

- **B1 blocking-scoped / B3 scoped-diff**: `/end` skill runs validator only on session-touched files. Rejected: current validator doesn't support file-list input; would require validator modification. Marginal gain over B4 full-pass given validator is already fast.
- **B2 warning-only**: `/end` surfaces drift in report but doesn't block. Rejected: weak enforcement; relies on author-discipline to notice + fix.
- **B4 full-pass blocking**: always run full validator at /end; block if regression vs pre-session baseline. Rejected at Step-2 in favor of B5 defer — B4 would bundle skill-infra (darren-workflow repo concern) with validator-schema (Spore canon concern); cleaner to separate.
- **B5 selected (defer to ADR-0068)**: decouples concerns; skill-infra gets its own decision-gate including baseline-mechanism design (where does baseline live — `tmp/.validator-baseline.txt` or session-scratchpad or git-note? refresh cadence? blocking or warning?). Parked at MEDIUM priority.

### Axis C rejections

- **C1 validator-only**: edit script only, leave protocol doc listing 4 values. Rejected: creates exact protocol↔validator drift that motivated the parking item; violates "source-of-truth coherence" discipline.
- **C3 C2 + docs/README.md**: extend to add first-time status-vocabulary section to README. Rejected: docs/README.md has no status-vocabulary surface (audit grep found no existing status-vocab documentation); adding one = net-new content unrelated to ADR-0067 scope. Readers seeking status semantics land at `canon-review-protocol.md` naturally.

### Axis D rejections

- **D1 forward-only**: ruddick stays at `status: deprecated`; new archivals use `archived`. Rejected: leaves semantic debt that 1c7ec64 commit-message explicitly flagged as temporary. Future readers see `deprecated` and may infer "was active canon then retired" (incorrect; file was never active canon).
- **D2 scan + manifest**: audit inventory; no retcon. Rejected: Step 0.5 audit already produced the manifest; exactly 1 candidate (ruddick); D2 = D1 + redundant documentation without closure.

## Evidence

- **Primary parking-source** (body-only per plan convention; no frontmatter `r_claim_source`): ADR-0065 §Parking lot lines 340-341 — validator schema archived-enum + /end skill validator-check items.
- **Method-precedent sources**:
  - ADR-0062 (membrane-as-self-produced-disposition) + ADR-0063 (participatory-sense-making-disposition) + ADR-0064 (co-presence-field-condition-disposition) — decision-gated plan structure with Step 0/0.5/1/2 outside session-atomic window; 2-round `/review-plan` cap with known-ceiling acceptance discipline
  - ADR-0065 (pattern-library-infrastructure-spec) — parking source + schema-ADR precedent (`decision: spec` as novel frontmatter value accepted by validator; ADR-0067's `decision: extend-enum` follows same pattern)
  - ADR-0066 (project-briefing-pattern-audit-outlier-disposition) — preceding ADR; validator-parity discipline + atomic-bundle-in-single-draft-commit precedent + structural-sibling-pairing audit-technique (not directly reused here but sets audit-discipline baseline)
  - canon-review-protocol.md:363-366 protocol v3 status-unification (2026-04-20; `reframing-protocol-governance-hardening`-authorized) — vocabulary-change precedent at larger scope; ADR-0067 is smaller additive-scope within v3 framework
- **Canonical evidence sources** (body-references; ≥5 of 10 cited per plan convention):
  - `scripts/validate_spec_dag.py:110-111, :115-119, :152, :181-185, :188-196` — validator mechanics
  - `docs/research/planning/canon-review-protocol.md:141-145` — §Status lifecycle (edited by ADR-0067 to add 5th bullet)
  - `docs/research/planning/canon-review-protocol.md:315` — meta-constitutional load-bearing-lifecycle-semantics rule (analyzed; ADDITIVE-not-load-bearing reading ratified at Step 2)
  - `docs/research/planning/canon-review-protocol.md:363-366` — protocol v3 precedent
  - `docs/research/external/ruddick-2026-commitment-pool-route-graphs.md` — retcon target (status: deprecated → archived; archived: 2026-04-23 metadata + body archivist note preserved)
  - Git commit chain: f24b0d8 (archived → superseded) + 1c7ec64 (superseded → deprecated; explicitly names "pending validator schema ADR") — retcon-within-commit-message-authorization evidence
- **Step 0.5 audit manifest**: `tmp/adr-0067-audit-manifest-2026-04-24.md` (working-evidence log; not in frontmatter).
- **Decision-brief with operator directive**: `tmp/adr-0067-decision-brief-2026-04-24.md` (4-axis evaluation + operator fast-path acceptance "A1 + B5 + C2 + D3 with universal-enum sub-option; ADDITIVE-not-load-bearing; no foundational-reframing"; not in frontmatter).
- **Preflight manifest**: `tmp/adr-0067-preflight-manifest.txt` (PREEXEC_SHA + slot verification + validator baseline).
- **Validator baselines**: `tmp/adr-0067-validator-pre.txt` (pre-exec 9 errors / 30 warnings) + `tmp/adr-0067-validator-post.txt` (post-exec — expected identical parity).
- **IC + PM HEAD-start captures**: `tmp/adr-0067-ic-head-start.txt` (f15f96f...) + `tmp/adr-0067-pm-head-start.txt` (6d4935c...) (read-only-discipline verification anchors).
- **SKILL.md md5 anchor** (B5-defer verification): `tmp/adr-0067-skill-md5-start.txt` — md5 hash of `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` at Step 4; AC12 verifies no change at Step 7.5.
- **Cross-ADR consistency**: ADRs 0062, 0063, 0064, 0065, 0066 preserved unchanged. ADR-0067 is additive (enum-extension), not superseding any existing ADR.

## Diff summary

- **Modified**: `scripts/validate_spec_dag.py:110` — `DECISION_RECORD_STATUSES` set extended with `"archived"`. Single-line set-literal edit. `PROPOSAL_STATUSES` UNCHANGED.
- **Modified**: `docs/research/planning/canon-review-protocol.md` §Status lifecycle — 5th bullet inserted after the `superseded` bullet, defining `archived` semantics distinct from `deprecated` and `superseded`, with canonical use cases + universal-enum scope note.
- **Modified**: `docs/research/external/ruddick-2026-commitment-pool-route-graphs.md` — frontmatter `status: deprecated` → `status: archived`. No other frontmatter fields changed; `archived: 2026-04-23` metadata preserved; `research_subkind: external_paper` preserved; body content + archivist note UNCHANGED.
- **New file** (this ADR): `docs/research/canon-decisions/0067-validator-schema-archived-enum.md`.
- **Unchanged on disk**: ADR-0062, ADR-0063, ADR-0064, ADR-0065, ADR-0066 (all additive, not superseding). All 5 in-scope patterns in `docs/patterns/` — untouched. `docs/project-vision.md` — untouched. `docs/foundations/governance-artifacts-and-graph-projections.md` — untouched. `docs/governance/agent-commons-meta-protocol.md` — untouched (C2 scope excludes meta-protocol; it has no status-vocabulary surface to update). `docs/README.md` — untouched (C3 rejected). `docs/research/concepts-p2p-wiki.yaml` — unchanged at v12.
- **NOT touched** (per B5 defer + read-only-discipline): `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` (B5 defer to ADR-0068; AC12 md5 verification); IC + PM repositories.

## Parking lot

- **ADR-0068 /end skill validator-check integration** — B5 deferral; cross-repo edit to `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md`. Scope sub-decisions at ADR-0068 Step 2: (a) baseline-capture mechanism — where does pre-session baseline live (`tmp/.validator-baseline.txt` / session-scratchpad / git-note / other)? (b) refresh cadence — per session-start / per /end invocation / on-demand? (c) enforcement shape — blocking (halt /end on regression) / warning-only (surface drift without block) / scoped-diff (only session-touched files). Parking source: ADR-0065 §Parking lot line 341.
- **Per-doc_kind enum refinement** — if research-vs-ADR `archived` semantics diverge operationally, future ADR could refactor `allowed_statuses_for_doc_kind` to route specific doc_kinds to distinct enum sets (e.g. `RESEARCH_STATUSES = DECISION_RECORD_STATUSES ∪ {"raw-research-input"}` with `raw-research-input` becoming enum-valid for `doc_kind: research` only). Deferred pending operational evidence.
- **Full lifecycle vocabulary review** (A3 deferral) — if operational pressure surfaces additional lifecycle states (e.g. `retracted`, `experimental`, `grandfathered`), a future ADR with foundational-reframing scope could revisit. Deferred; no current signal.
- **18 `raw-research-input` files** — currently warning-only (lack `doc_id`). If future governance intent promotes them to `doc_id`-carrying governed status, their current enum-value would error. Out-of-scope for ADR-0067; noted for future research-corpus-governance work.
- **ADR-0059b commons-law in-file consistency** (LOW priority) — 3 remaining `constitutional-artifacts` refs in `commons-law-and-charter-lineage.md:53,63,117`. Preserved from ADR-0066 §Parking lot.
- **Three pattern-library admission candidates** — federation-encounter / four-enabling-conditions / view-template pattern-library doc (preserved from ADR-0065/0066 §Parking lot; tractable under ADR-0065 M4 framework).
- **IC + PM coordinated grammar alignment for ADR-0067**: NOT triggered (IC and PM maintain their own validator configurations; no parallel archival-semantic concern surfaced).

## References

- [docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md](./0065-pattern-library-infrastructure-spec.md) — parking source + `decision: spec` novel-frontmatter-value precedent
- [docs/research/canon-decisions/0066-project-briefing-pattern-audit-outlier-disposition.md](./0066-project-briefing-pattern-audit-outlier-disposition.md) — preceding ADR; validator-parity discipline + atomic-bundle-in-single-draft-commit + `decision: reclassify` precedent
- [docs/research/planning/canon-review-protocol.md](../planning/canon-review-protocol.md) — §Status lifecycle (edited by ADR-0067 Axis C2); §meta-constitutional (line 315, analyzed); §protocol v3 (line 363-366, method-precedent for vocabulary-change)
- [scripts/validate_spec_dag.py](../../../scripts/validate_spec_dag.py) — validator script (edited by ADR-0067 Axis A1)
- [docs/research/external/ruddick-2026-commitment-pool-route-graphs.md](../external/ruddick-2026-commitment-pool-route-graphs.md) — retcon target (Axis D3; `status: deprecated` → `status: archived`)
- [docs/governance/agent-commons-meta-protocol.md](../../governance/agent-commons-meta-protocol.md) — artifact-taxonomy authoritative (untouched by ADR-0067; referenced for `status` as Tier-0 required field context)
