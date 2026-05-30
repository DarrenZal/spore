# ADR-0067 Decision Brief — validator-schema archived-enum addition

**Date**: 2026-04-24
**Step**: 1 (decision-brief)
**Auditor**: child executor
**Input**: `tmp/adr-0067-audit-manifest-2026-04-24.md`
**Decision-gate**: Step 2 (operator ratification required before Step 3 execution)

---

## 1. Question before the operator

**What shape should ADR-0067 take** — the validator-schema-archived-enum-addition ADR parked by ADR-0065 (entry-gate investigation 2026-04-24; ruddick-2026 file drift)?

Four axes to ratify: A (enum semantics), B (/end skill validator-check), C (registration scope), D (retroactive scope).

---

## 2. One-screen summary

| Dimension | Finding |
|---|---|
| Validator enum | `DECISION_RECORD_STATUSES = {"draft", "active", "deprecated", "superseded"}` at `scripts/validate_spec_dag.py:110` — 4 values, no `archived` |
| Proposal enum (separate) | `PROPOSAL_STATUSES = {"draft", "cooling-off", "eligible", "authorized-ADR", "executed", "closed"}` at line 111 |
| Protocol documentation | `canon-review-protocol.md:141-145` §Status lifecycle — 4 values, matches validator, no `archived` |
| Ruddick file state | `status: deprecated` (1c7ec64; "least-wrong pending validator schema ADR"); preserves `archived: 2026-04-23` separate metadata field |
| Corpus status inventory | 139 draft / 100 active / 18 raw-research-input (no doc_id → warning-only) / 8 executed (proposal) / 1 superseded / 1 deprecated (ruddick) / 1 template-inline-comment. No other mis-classified files. |
| Architectural scope | Spec-DAG status enum = research status enum (unified via `allowed_statuses_for_doc_kind` default-return). Adding `archived` enlarges enum for ALL governed doc_kinds. |

Full audit at `tmp/adr-0067-audit-manifest-2026-04-24.md`.

---

## 3. Axis A — Enum addition semantics

### A1 — `archived` as distinct enum value (RECOMMENDED)

- **Move**: Add `"archived"` to `DECISION_RECORD_STATUSES` set. Distinct semantic from `superseded` ("replaced-by-successor") and `deprecated` ("retired-from-live-use").
- **Proposed definition** (for canon-review-protocol §Status lifecycle): *"`archived` — doc preserved as historical record, intentionally out of rotation; no successor, no retirement-from-live required (e.g. external research papers brought into corpus as reference material; no one-for-one replacement expected)."*
- **Canonical use case**: external research papers (ruddick), bridge notes retired without replacement, historical planning docs preserved for audit-trail.
- **Fit with evidence**: STRONG. Matches ruddick commit-message-authorized intent ("pending validator schema ADR to add 'archived' as first-class status"). Preserves canon-review-protocol lifecycle-vocabulary-discipline (each value has distinct, non-overlapping semantics).
- **Scope impact**: +1 enum value; +1 protocol-doc bullet; minimal.
- **Method-precedent**: inherits vocabulary-admission pattern from protocol v3 status-unification (2026-04-20; "unified decision-record status language on draft / active / deprecated / superseded"). ADR-0067 is additive-extension, smaller-scope than v3's unification.

### A2 — `archived` as alias-to-`superseded`

- **Move**: Add `archived` to enum but treat as alias; validator rules apply as if `superseded` (requires `superseded_by:` field).
- **Semantic analysis**: BROKEN. Aliasing to `superseded` recreates the original error — ruddick has no `superseded_by` target because there is no one-for-one successor. A2 = status-quo + semantic-confusion.
- **Recommendation**: REJECT. No coherent use case.

### A3 — Full lifecycle vocabulary review

- **Move**: Evaluate full lifecycle (add `archived`; consider `retracted`, `experimental`, `grandfathered`, etc.; audit existing semantic coverage).
- **Scope**: significantly larger than A1 — would require canon-review-protocol.md foundational-reframing per line 315 meta-constitutional rule ("revising lifecycle semantics requires foundational-reframing proposal").
- **Recommendation**: NEUTRAL / DEFER. Full review is legitimate work but out-of-scope for closing the ruddick incident + ADR-0065 parking item. Could be parked as ADR-0068+ if operator wants a fuller lifecycle review; ADR-0067 stays minimal.

### A sub-option: per-doc_kind enum refinement

- **Move**: extend `allowed_statuses_for_doc_kind` to route `research` (or specific doc_kind values) to a separate enum like `RESEARCH_STATUSES = {"draft", "active", "deprecated", "superseded", "archived", "raw-research-input"}`.
- **Rationale**: `archived` may fit research more naturally than ADRs; per-doc_kind refinement would let research have archival semantics without exposing it to ADR context.
- **Scope impact**: additional code path in validator (modest); architectural decision about enum-scope granularity.
- **Recommendation**: NEUTRAL. Adds expressive precision but also adds complexity. Single-enum approach (A1 default) is simpler and has no architectural downside evident. If operator wants finer-grain, this sub-option is tractable.

### Recommendation: **A1 single-enum addition**

Simplest honest fix. Closes ruddick semantic debt. Vocabulary-addition matches protocol v3 precedent shape (additive, not redefinition). Does not foreclose per-doc_kind refinement if ever needed (future ADR can refactor `DECISION_RECORD_STATUSES` → per-kind enums without touching `archived` semantics).

---

## 4. Axis B — /end skill validator-check integration

### B1 — Blocking check (any validator-regression halts /end)

- **Move**: /end skill runs `python3 scripts/validate_spec_dag.py`; if error-count increases vs pre-session baseline, halt /end and surface drift.
- **Fit with incident**: strong — the IndigenomicsAI session drift would have been caught at that session's /end, preventing the ADR-0065 pre-flight surprise.
- **Trade-offs**: enforces canon-hygiene; adds per-session validator runtime (sub-second for Spore per audit of 323-line validator); false-positives if validator has false-drift (rare per current baseline stability).
- **Coverage**: strong for self-inflicted session-drift; less helpful for cross-session drift.

### B2 — Warning-only

- **Move**: surface drift in /end report; don't block.
- **Fit**: weak enforcement. Relies on author-discipline to notice + fix.
- **Recommendation**: REJECT — if we're going to implement a check, blocking enforcement is cheaper-per-incident than recurring awareness-cost.

### B3 — Scoped-diff (only re-validate session-touched files)

- **Move**: `git diff --name-only HEAD..HEAD` or session-log-based file-list; validate subset.
- **Fit**: minimal-noise; targets the incident-class (self-inflicted drift in session files).
- **Trade-offs**: requires validator to support file-list input (currently doesn't — validator walks full docs/ tree). Additional validator argument + implementation cost.
- **Recommendation**: NEUTRAL-NOT-RECOMMENDED. Current validator is already fast; full-pass (B4) at /end is cheap; scoped-diff adds complexity for marginal speed gain.

### B4 — Full-pass on every /end

- **Move**: always run full validator at /end; block if regression vs pre-session baseline.
- **Fit**: highest coverage; catches cross-session drift too.
- **Trade-offs**: runtime cost (sub-second per audit — negligible). Exit-code-based integration trivial.

### B5 — Out-of-scope (defer to separate ADR)

- **Move**: ADR-0067 closes ONLY the validator schema concern (archived enum). Skill-infra concern spun off as ADR-0068.
- **Trade-offs**: decouples concerns. Cleaner ADR surfaces. Delays incident-response machinery by one ADR cycle.
- **Recommendation**: NEUTRAL. If operator prefers minimal-scope ADRs, B5 is tractable. Spore convention (per recent ADRs 0059/0059a / 0065 / 0066) seems to favor bundling related parking items when scope is bounded.

### Recommendation: **B4 full-pass blocking** (mild preference) OR **B5 defer** (valid alternative)

B4 is simplest + highest-coverage. Implementation: 2-3 lines in SKILL.md adding a shell-hook to run validator + fail /end if exit-code non-zero or error-count increased. Requires baseline-capture mechanism (store pre-session baseline somewhere — simplest: `tmp/.validator-baseline.txt` refreshed per-session-start).

B5 defer is legitimate if operator wants tight ADR-0067 scope. The ruddick-incident can be documented as a parking item pending ADR-0068.

**Flag for operator**: B4 requires baseline-capture discipline (where does baseline live? refresh cadence?). B5 defers those details. Operator's preference signals scope-tolerance.

---

## 5. Axis C — Registration scope

### C1 — Validator script only

- **Move**: edit `scripts/validate_spec_dag.py:110` only; no doc updates.
- **Fit**: STRICT MINIMAL. Validator accepts `archived`; protocol-doc still lists 4 values. Protocol↔validator drift created.
- **Recommendation**: REJECT. Creates the exact drift the ruddick incident surfaced (documentation out of sync with validator state).

### C2 — Validator + canon-review-protocol (RECOMMENDED baseline)

- **Move**: edit validator + add `archived` bullet to canon-review-protocol.md:141-145 §Status lifecycle.
- **Fit**: closes drift at point-of-authority. canon-review-protocol.md is THE authoritative doc for status vocabulary.
- **Sub-consideration**: canon-review-protocol.md:315 meta-constitutional rule flags "lifecycle semantics" changes as potentially requiring foundational-reframing. For an ADDITIVE change (new value, no redefinition of existing values), judgment is operator's — audit recommends NO foundational-reframing (additive change; analogous to vocabulary-admission not requiring reframing).

### C3 — C2 + docs/README.md

- **Move**: add a first-time status-vocabulary section to docs/README.md.
- **Fit**: WEAK. docs/README.md currently has no status-vocabulary surface. Adding it = net-new content, not update. Low-value relative to cost.
- **Recommendation**: NEUTRAL-NOT-RECOMMENDED. Readers seeking status semantics naturally land at canon-review-protocol.md (linked from many places). README doesn't need duplication.

### Recommendation: **C2 validator + protocol**

Closes drift at source of truth. Mechanical edits bounded.

---

## 6. Axis D — Retroactive audit scope

### D1 — Forward-only

- **Move**: ruddick stays at `status: deprecated`. New archivals going forward use `archived`.
- **Trade-off**: leaves semantic debt on ruddick file. Future readers may misinterpret.
- **Recommendation**: NEUTRAL-NOT-RECOMMENDED. Closes ADR mechanically but not semantically.

### D2 — Scan + manifest

- **Move**: audit finds exactly 1 candidate (ruddick). Output = awareness-artifact without action. Essentially D1 + documentation.
- **Recommendation**: REJECT. Single-file candidate means a full scan-manifest is overhead with no benefit over straight D3.

### D3 — Proactive retcon (1 file)

- **Move**: flip ruddick `status: deprecated` → `status: archived` in same ADR-0067 active-commit.
- **Authorization**: 1c7ec64 commit-message explicitly signals "pending validator schema ADR to add 'archived' as first-class status". Retcon fulfills signaled-intent, not a history-rewrite.
- **Scope**: single-line frontmatter edit; 0 cross-refs (ruddick has 0 inbound `depends_on`; doc_id unchanged; only status value changes).
- **Fit**: STRONG. Closes semantic debt at point-of-origin. Ruddick's preserved `archived: 2026-04-23` metadata field becomes consistent with `status: archived`.
- **Recommendation**: RECOMMENDED.

### Dependency: D3 requires A1

- D3 + A1: coherent. Ruddick becomes `status: archived` with validator acceptance.
- D3 + A2: broken (archived aliased to superseded would recreate missing-`superseded_by` error).
- D3 + A3: defer (A3 deferral pushes D3 to same time window).

### Recommendation: **D3 1-file retcon**

Closes the ruddick semantic debt per commit-message authorization. Trivial scope.

---

## 7. Allowlist projection per recommended combination (A1 + B4 + C2 + D3)

| File | Operation | Rationale |
|---|---|---|
| `scripts/validate_spec_dag.py` | Edit line 110 — add `"archived"` to `DECISION_RECORD_STATUSES` | Axis A1 |
| `docs/research/planning/canon-review-protocol.md` | Add 5th bullet to §Status lifecycle (lines 141-145) defining `archived` semantics | Axis C2 |
| `docs/research/external/ruddick-2026-commitment-pool-route-graphs.md` | Edit frontmatter `status: deprecated` → `status: archived` | Axis D3 |
| `docs/research/canon-decisions/0067-validator-schema-archived-enum-addition.md` | NEW ADR file | always |
| `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` | Edit — add validator-check hook | Axis B4 (if chosen) |

**Allowlist cardinality (A1 + B4 + C2 + D3)**: 5 artifact-paths
**Allowlist cardinality (A1 + B5 + C2 + D3)**: 4 artifact-paths (no skill edit; B5 defers to ADR-0068)

---

## 8. Session-atomic projection

Per task framing (100-300s) + audit evidence:
- Validator edit: trivial 1-line set-update
- Protocol edit: 1 bullet insert
- Ruddick edit: 1-line frontmatter change
- ADR authoring: moderate (straightforward reclassification-adjacent ADR)
- /end skill edit (if B4): 2-3 lines SKILL.md + possibly new baseline-artifact file
- Draft + active commits: standard

Projection: **120-240s session-atomic window** for A1 + C2 + D3 + (B4 OR B5). Comfortably under 2700s budget.

---

## 9. Decision form (operator ratifies each axis)

### Axis A — Enum semantics
- [ ] **A1 — archived as distinct enum value** (CHILD RECOMMENDATION) — single-enum addition; simplest honest fix; matches 1c7ec64 commit intent
- [ ] A2 — alias-to-superseded (REJECT — broken semantics)
- [ ] A3 — full lifecycle review (NEUTRAL/DEFER — scope-expansion; could be separate ADR)
- [ ] Sub-option: per-doc_kind enum refinement (NEUTRAL — adds precision + complexity; tractable follow-on if ever needed)

### Axis B — /end skill validator-check
- [ ] **B4 — full-pass blocking** (CHILD MILD-RECOMMENDATION) — simple + high-coverage
- [ ] B1 — blocking (scoped-diff) (NEUTRAL — similar to B4 but adds validator arg complexity)
- [ ] B2 — warning-only (REJECT — weak enforcement)
- [ ] B3 — scoped-diff (NEUTRAL — marginal over B4)
- [ ] **B5 — defer to ADR-0068** (CHILD VALID-ALTERNATIVE) — tight ADR-0067 scope; spin-off skill-infra

### Axis C — Registration scope
- [ ] C1 — validator only (REJECT — creates protocol↔validator drift)
- [ ] **C2 — validator + canon-review-protocol** (CHILD RECOMMENDATION) — closes drift at source of truth
- [ ] C3 — C2 + docs/README.md (NEUTRAL-NOT-RECOMMENDED — no natural README hook)

### Axis D — Retroactive scope
- [ ] D1 — forward-only (NEUTRAL-NOT-RECOMMENDED — leaves semantic debt)
- [ ] D2 — scan + manifest (REJECT — single candidate makes manifest overhead-only)
- [ ] **D3 — 1-file retcon (ruddick)** (CHILD RECOMMENDATION) — closes semantic debt per 1c7ec64 authorization

### Cross-axis coherence check
- A1 + C2: **required pair** (C2 documents what A1 adds)
- A1 + D3: **coherent** (ruddick becomes `archived` with validator acceptance)
- B5: **independent of A/C/D** (purely scope-choice on bundling)

---

## 10. Flags for operator

1. **canon-review-protocol.md:315 meta-constitutional rule**: "revising lifecycle semantics requires foundational-reframing proposal." My read is that A1 is additive (not a revision of existing semantics), so does NOT trigger foundational-reframing. But this is a judgment call. If operator reads A1 as load-bearing revision, ADR-0067 needs foundational-reframing proposal authored first.

2. **Per-doc_kind enum refinement** (A sub-option): ADDING archived to the unified enum means ADRs can theoretically use `archived` status. Does this matter? Arguments both ways. Flagging as genuinely ambiguous — operator may want a stance (e.g. "archived is research-concept; ADRs should use draft/active/deprecated/superseded only" → would need validator per-kind enforcement OR protocol-doc guideline).

3. **B4 baseline-capture mechanism**: where does the pre-session baseline live? Simplest approach: `tmp/.validator-baseline.txt` written at session-start; compared at /end. Requires session-start hook discipline not currently specified. If B4 chosen, this operational detail needs a sub-decision (simple default: reuse validator-pre.txt from plan Steps 0-4 as baseline anchor; requires every session to run validator early).

4. **ADR-0068 parking items**: if B5 chosen, ADR-0068 inherits validator-check integration work + (optionally) per-doc_kind enum refinement from A sub-option + any full-lifecycle-review follow-ons from A3 deferral.

---

## 11. Step 2 handback

**Decision-brief status**: COMPLETE. PAUSE for operator decision gate.

Awaiting operator ratification on:
- Axis A (recommend A1)
- Axis B (recommend B4 mild or B5 defer — operator preference signals scope tolerance)
- Axis C (recommend C2)
- Axis D (recommend D3)
- Sub-option flags (per-doc_kind refinement; B4 baseline-capture mechanism)

Do NOT proceed to Step 3 plan-authoring-for-review / Step 4+ execution without explicit approval.
