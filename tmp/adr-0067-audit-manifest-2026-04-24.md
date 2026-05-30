# ADR-0067 Step 0.5 Audit Manifest — validator-schema archived-enum addition

**Date**: 2026-04-24
**Audit scope**: validator status-enum mechanics + canon-review-protocol vocabulary + ruddick evidence chain + corpus inventory + architectural questions
**Parking source**: ADR-0065 §Parking lot lines 340-341

---

## 1. Validator status-enum mechanics

### 1.1 Exact enum definitions (`scripts/validate_spec_dag.py`)

```python
# Line 110
DECISION_RECORD_STATUSES = {"draft", "active", "deprecated", "superseded"}
# Line 111
PROPOSAL_STATUSES = {"draft", "cooling-off", "eligible", "authorized-ADR", "executed", "closed"}
```

### 1.2 Enum-selector logic (line 115-119)

```python
def allowed_statuses_for_doc_kind(doc_kind: str):
    """Return the allowed status set for a governed artifact kind."""
    if doc_kind == "proposal":
        return PROPOSAL_STATUSES
    return DECISION_RECORD_STATUSES
```

**Architectural fact**: ONE enum (`DECISION_RECORD_STATUSES`) covers ALL non-proposal `doc_kind` values (research / decision-record / spec / foundation / pattern / architecture / vision / protocol / operations / positioning / roadmap / connection / planning). Naming is misleading — the enum governs more than just decision-records.

### 1.3 Enforcement sites

- **Line 181-185**: invalid-status check — emits error if `status not in allowed_statuses`
- **Line 188-191**: superseded-requires-companion rule — `status: superseded` MUST have `superseded_by:` field, else error
- **Line 192-196**: superseded_by path-validation rule (rejects machine-local paths)
- **Line 152**: doc_id gate — files without `doc_id` skip all Tier-0 validation (warning only)

### 1.4 Implication for ADR-0067 Axis A

Adding `archived` to `DECISION_RECORD_STATUSES` enlarges the accepted-status set for ALL governed artifact types (not just research). This affects ~280 governed files.

---

## 2. canon-review-protocol.md §Status lifecycle (lines 141-145)

Authoritative documentation of status vocabulary:

```
**Status lifecycle**:
- `draft` — ADR drafted; AC-* checks not yet complete. Every ADR is authored in this state.
- `active` — AC-8/8b/8c/8d (evidence, concepts, affects_canon validity, r_claim verbatim) all pass and the decision is the live landed record.
- `deprecated` — ADR remains in the corpus for traceability but is no longer the preferred live reference for new work. Use when a decision is retired without a one-for-one superseding ADR.
- `superseded` — a later ADR replaces this one. Superseding ADR lists this ADR in `related_adrs:`; this ADR gains `superseded_by:` field for reverse traceability.
```

No `archived` in the documented canon. `deprecated` per definition is "retired without one-for-one successor" — subtly different from "intentionally archived historical record" but there is semantic overlap the status-quo leverages (per 1c7ec64 commit message).

**Key finding**: protocol-file is ADR-scoped language ("every ADR is authored..." — line 142). The `§Status lifecycle` section does not explicitly name non-ADR artifact types (research papers, external documents, bridge notes). Extending the enum for non-ADR contexts may require protocol-text scope-conditioning (Axis I4 pattern from ADRs 0062-0065).

**Protocol v3 history** (line 363-366):
> *v3 (2026-04-20): Governance-hardening and status-vocabulary unification authorized by reframing-protocol-governance-hardening. Unified decision-record status language on draft, active, deprecated, superseded and retired the proposed / accepted split from active protocol text. Updated validate_spec_dag.py to discriminate status vocabularies by doc_kind, so proposals use their own lifecycle without breaking existing Spore ADRs.*

This establishes that status-vocabulary changes have v3 precedent (reframing-protocol-governance-hardening-authorized). ADR-0067 is a smaller-scope follow-on: single-enum-value addition, not vocabulary-unification.

**Meta-constitutional rule** (line 315):
> *`canon-review-protocol.md` is a meta-corpus governance surface. Revising its authority model, lifecycle semantics, scope, validation rules, or other load-bearing governance mechanics requires a foundational-reframing proposal under `foundational-reframing-protocol-v1.md`*

Important: *lifecycle semantics* are explicitly flagged as requiring foundational-reframing for "load-bearing" changes. Whether adding one enum value to the lifecycle rises to "load-bearing revision" is a judgment call. Arguments:
- Adding a value (not removing or redefining existing) is ADDITIVE, analogous to vocabulary-admission per canon-review-protocol's own amendment rules
- But §Status lifecycle is nonetheless part of the meta-corpus governance surface

If operator judges addition as load-bearing, ADR-0067 scope expands to include foundational-reframing proposal. If not, ordinary-ADR machinery suffices.

---

## 3. Status inventory (corpus-wide)

Full status-value counts across all `docs/**/*.md` files:

| Status value | File count | Notes |
|---|---|---|
| `draft` | 139 | Majority are ADRs (authored state) + proposal workflow docs |
| `active` | 100 | Landed canon + active research |
| `raw-research-input` | 18 | **All missing `doc_id`** (warning-only, not enum-governed) |
| `executed` | 8 | Proposal-only enum value |
| `superseded` | 1 | Has required `superseded_by` companion |
| `draft   # lifecycle below` | 1 | Template example in canon-review-protocol.md:100 (legitimate inline comment) |
| `deprecated` | 1 | **Ruddick file — the semantic-mismatch case** |

**Architectural observation**: only 1 file (ruddick) currently carries `deprecated`, and it's the case under investigation. No other governed file is mis-classified. The retroactive-scope question (Axis D) is therefore 1-file-bounded.

**`raw-research-input` anomaly**: 18 files carry a status value NOT in either enum. They escape validation because they lack `doc_id`. If those files ever gain `doc_id` (becoming governed), they would error. This is out of ADR-0067 scope but flagged as a future-concern parking item.

---

## 4. Ruddick evidence chain

### 4.1 File identification

`docs/research/external/ruddick-2026-commitment-pool-route-graphs.md`

Frontmatter (current state, post-1c7ec64):
```yaml
doc_id: spore.research.external.ruddick-2026-commitment-pool
doc_kind: research
research_subkind: external_paper
status: deprecated
source_pdf: ~/Downloads/ssrn-6606438.pdf
source_ssrn: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6606438
author: William O. Ruddick
affiliation: Grassroots Economics Foundation, Kilifi, Kenya
date: 2026-04
pages: 44
archived: 2026-04-23          # ← separate metadata field preserving creator-intent
```

### 4.2 Commit chain

1. **f24b0d8** "canon: fix ruddick research frontmatter (status: archived → superseded per file's own archivist note citing IndigenomicsAI + X3 successor)" — attempted surfacing-correction
2. **1c7ec64** "canon: ruddick research status superseded → deprecated (superseded requires superseded_by companion; deprecated is least-wrong enum value pending validator schema ADR to add 'archived' as first-class status)" — least-wrong-landing after (1) surfaced `superseded` companion-field requirement

Commit message (1c7ec64) explicitly names THIS ADR: "pending validator schema ADR to add 'archived' as first-class status". ADR-0067 is that ADR.

### 4.3 Semantic analysis

The file IS archived (per file's own body archivist note + `archived: 2026-04-23` metadata + `research_subkind: external_paper`):
- External third-party research paper by William O. Ruddick
- Archived as external reference; NOT authored-by-Spore-then-retired
- NOT replaced by a successor internal to Spore (the file points to IndigenomicsAI + X3 as convergent-work, not as a supersession chain)
- NOT "live canonical" (it's external evidence, not Spore canon)

Therefore:
- `deprecated` (canon-review-protocol:144 — "ADR remains in the corpus for traceability but is no longer the preferred live reference for new work") is a semantic mismatch: the file was never a "live reference" to begin with; `deprecated` connotes retirement-from-active-use which doesn't apply.
- `superseded` is a strong mismatch: there's no one-for-one replacement ADR.
- `archived` (proposed semantics: "intentionally out of rotation; preserved as historical record") is the clean semantic fit.

---

## 5. Spec-DAG status vs research-status — architectural question

**Answer: SAME enum.** `DECISION_RECORD_STATUSES` governs both ADRs and research files (plus everything non-proposal).

Consequences for ADR-0067:
- Adding `archived` enlarges the valid set for ALL governed doc_kinds
- Ripple effect: ADRs could theoretically use `archived` status (semantically: "ADR preserved as historical record but never superseded"). Is this desirable?
- Counter-argument: ADRs already have `draft / active / deprecated / superseded` covering their lifecycle; `archived` may be redundant for ADR context but useful for research context
- Option: per-doc_kind enum selection (not currently supported beyond proposal carve-out). Would require `allowed_statuses_for_doc_kind` extension for e.g. `if doc_kind == "research": return RESEARCH_STATUSES`. Scope-expansion concern.

**Minimal-invasive approach (matches task framing)**: add `archived` to `DECISION_RECORD_STATUSES` directly. ADRs can use it when semantically appropriate; corpus enforcement is additive (no existing status value is invalidated).

---

## 6. Other out-of-enum governed files

**None found.** Full `grep -rh "^status:" docs/ --include="*.md"` scan returned only the 7 values listed in §3. The 18 `raw-research-input` files are all `doc_id`-absent (warning-only, not governed by enum). The ruddick file is the only case.

---

## 7. Scope for Axis B (/end skill validator-check integration)

### 7.1 Current /end skill state

Location: `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` (130 lines)

Not inspected in full (out of audit scope until Axis B operator decision gates it).

### 7.2 Incident framing

Original drift incident: the IndigenomicsAI session (parallel to ADR-0065 authoring) touched the ruddick file and set `status: archived` — an invalid enum value. Drift went untracked for ~18h. Surfaced only at ADR-0065 validator-pre snapshot, causing mid-execution halt.

### 7.3 Integration design-space

- **B1 blocking**: `/end` runs validator; any new errors halt session close. Strong hygiene; assumes validator is fast (<10s per audit of scripts/validate_spec_dag.py execution).
- **B2 warning-only**: surfaces drift in /end report but doesn't block. User-visibility; not enforcement.
- **B3 scoped-diff**: only re-validate files touched in session (via `git diff --name-only HEAD..HEAD`). Minimal noise; targeted catch.
- **B4 full-pass**: always re-validate all. Highest coverage; potentially noisy (picks up drift from unrelated sessions).
- **B5 out-of-scope**: defer to separate skill-edit ADR. Decouples validator-schema concern from skill-infra concern.

### 7.4 Recommendation leaning

Incident-analysis: drift originated IN the IndigenomicsAI session. B3 (scoped-diff) would have caught it at that session's /end. B1 (blocking) would enforce with minimum noise. B4 (full-pass) would also catch cross-session drift but costs per-session.

B3 + B1 composition: blocking check on session-touched files. Best noise/coverage ratio for the observed incident class.

B5 (defer) is tractable — skill-edits are governed by different conventions than canon edits; a separate ADR for skill-infra would cleanly demarcate. But bundling in ADR-0067 closes both parked items in one ADR, which is efficient if scope stays bounded.

---

## 8. Scope for Axis C (registration scope)

### 8.1 canon-review-protocol.md integration (C2)

Lines 141-145 (§Status lifecycle) explicitly enumerate the 4 values. Adding `archived` to validator without updating protocol creates protocol↔validator drift (exactly the failure mode we're trying to avoid).

C2 is effectively mandatory if A1 is chosen. Mechanical edit: add 5th bullet for `archived` with definition.

### 8.2 docs/README.md (C3)

Grep of `docs/README.md` shows no status-vocabulary documentation (no enumerations of draft/active/deprecated/superseded in status context). README documents artifact types + governance structure but delegates lifecycle-semantics to canon-review-protocol.md. C3 has no natural insertion point — skip unless operator wants to add a first-time status-vocabulary section.

### 8.3 Other candidate files

- `docs/governance/agent-commons-meta-protocol.md` — artifact taxonomy doc. Currently references `status` only as a Tier-0 required field (line 52) without enumerating valid values. Could optionally add pointer to canon-review-protocol.md §Status lifecycle. Low-value scope-expansion.
- `docs/governance/project-bootstrap-spec.md` — specifies required frontmatter for new projects. Currently references `status: active` (line 33) as example. Could optionally list valid values. Low-value.

**Clean scope**: C2 alone is sufficient. C3 has no natural hook. C1 without C2 leaves drift.

---

## 9. Scope for Axis D (retroactive scope)

### 9.1 Candidate set

Exactly 1 file: `docs/research/external/ruddick-2026-commitment-pool-route-graphs.md` currently at `status: deprecated` with semantic-mismatch.

No other file has semantic-mismatch with current enum.

### 9.2 D-option consequences

- **D1 forward-only**: ruddick stays `deprecated`. Semantic debt persists. Future authors encountering the file will see `deprecated` and may infer "this was active canon then retired" (incorrect).
- **D2 scan + manifest**: document inventory; no retcon. Closes less than D1 (adds awareness-artifact without closing semantic debt). Only useful if future-candidates are expected.
- **D3 proactive retcon**: flip ruddick `deprecated` → `archived`. 1-file edit. Commit-message-authorized (1c7ec64 explicitly frames current state as "pending validator schema ADR to add 'archived' as first-class status"). Closes semantic debt at point-of-origin.

### 9.3 Canon-record-integrity consideration

A retcon (D3) edits past decision. Counter-arguments:
- 1c7ec64 commit message explicitly signals temporary-state-pending-ADR-0067. Retcon fulfills the signaled intent, not a revisionist edit.
- Ruddick's frontmatter preserves `archived: 2026-04-23` metadata field independent of `status:` — creator-intent is already in the commit history.
- The retcon is within the commits-of-record series (not rewriting history); it's a forward-commit fixing a flagged-as-temporary state.

D3 is the cleanest closure.

### 9.4 Dependency on Axis A

D3 requires A1 (archived as distinct enum value) to be selected. D3 + A2 doesn't make sense (aliasing archived→superseded would leave ruddick as `superseded` without `superseded_by`, recreating the original error). D3 + A1 is coherent.

---

## 10. Summary of key findings for decision-brief

1. **Validator has 4-value enum** for all non-proposal governed docs; `archived` not in either enum
2. **canon-review-protocol.md documents the 4-value lifecycle** at lines 141-145; authoritative
3. **1 governed file (ruddick) is the mis-classified case**; no other file at risk
4. **Spec-DAG status enum = research status enum** (unified); adding `archived` is additive for all non-proposal doc_kinds
5. **C2 (canon-review-protocol update) is basically mandatory** if A1 chosen (to avoid protocol↔validator drift)
6. **C3 (docs/README.md) has no natural hook**; skip
7. **B3 scoped-diff + B1 blocking composition** is the cleanest incident-response; B5 defer is also tractable
8. **D3 1-file retcon** closes semantic debt at point-of-origin per commit-message-authorization; no other candidate files

---

## 11. Open architectural questions for operator

1. Does per-doc_kind-enum refinement (e.g. `RESEARCH_STATUSES` separate from `DECISION_RECORD_STATUSES`) belong in this ADR, or defer? (Non-minimal scope; could be ADR-0068 if pursued.)
2. Does adding one enum value rise to "load-bearing revision" requiring foundational-reframing per canon-review-protocol.md:315? (Judgment call; ADDITIVE vs SEMANTIC-REDEFINITION distinction.)
3. Does `archived` semantics for ADRs (not just research) have a legitimate use case, or is it research-specific? (Architectural; shapes future ADR status-choices.)
4. Should /end skill validator-check be a full bundle with ADR-0067, or spun off as ADR-0068 (parallel track)?

---

**Audit status**: COMPLETE. Proceed to Step 1 decision-brief.
