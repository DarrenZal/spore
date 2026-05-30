# ADR-0072 Step 0.5 Audit Manifest

Date: 2026-04-25
ADR: spore:ADR-0072 `/end` skill validator-check integration
Parking source: spore:ADR-0067 Axis B5 deferral (`/end` skill validator-check integration)
Parent parking source: spore:ADR-0065 §Parking lot line 341

## A. Current `/end` skill behavior

**File**: `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md`
**Size**: 131 lines
**Branch**: `main` @ `021153e`

**Steps (as-is)**:

| # | Step | Nature |
|---|------|--------|
| 1 | Find Project CLAUDE.md | File lookup |
| 2 | Get Current Session ID | Shell sed/ls |
| 3 | Summarize the Session | Agent reasoning |
| 4 | Read Existing CLAUDE.md | File read |
| 5 | Update CLAUDE.md | File edit (3 sub-blocks A/B/C) |
| 6 | Rename Session (optional) | JSON edit |
| 7 | Confirm | Report to user |

**Current pre-conditions**: None (no validation step before updating CLAUDE.md).
**Current post-conditions**: None (no validation step after CLAUDE.md update).

**Natural integration points**:
- **Pre-update (after Step 2, before Step 3)**: validate canon state BEFORE summarizing so any drift is surfaced in the summary itself.
- **Pre-update (after Step 4, before Step 5)**: validate RIGHT before CLAUDE.md edit so operator can choose to halt.
- **Post-update (after Step 5, before Step 7)**: validate after CLAUDE.md edit so Step 5 itself doesn't introduce drift.

**Recommendation shape**: insert NEW step — natural placement is as "Step 0 / Step 3.5" (pre-summary) or a "Step 4.5" (pre-update). Additive, not replacement.

## B. Validator invocation interface

**Script**: `/Users/darrenzal/projects/spore/scripts/validate_spec_dag.py`
**Size**: 323 lines
**Dependencies**: Python 3 stdlib only (no PyYAML); reads `docs/_meta/project.json` for project_id + docs_root.

**CLI**:
```
python3 scripts/validate_spec_dag.py [--docs-root PATH] [--project-id ID] [--strict] [repo_root]
```

**Return contract**:
- **Exit code 0**: PASSED (0 errors; 0 or N warnings absent `--strict`)
- **Exit code 1**: FAILED (≥1 error, OR ≥1 warning with `--strict`)

**Output format** (stdout):
```
  info: <N lines>
  warn: <N lines>
  ERROR: <N lines>

FAILED: <X> error(s), <Y> warning(s)
  | PASSED with <Y> warning(s)
  | PASSED: clean
```

**Final summary line is parseable** via regex `^(FAILED|PASSED)` with counts. Suitable for diff-against-baseline.

**Repo-aware**: runs from given repo_root; defaults to current directory. Config auto-loads from `docs/_meta/project.json` if present.

## C. Cross-repo validator survey

| Repo | Validator present? | Note |
|------|-------------------|------|
| Spore | YES (`scripts/validate_spec_dag.py`) | Canonical; 323 lines; maintained |
| IC | NO | Confirmed per ic:ADR-0019 audit; KOI-first graph stance |
| PM | NO | Confirmed per pm:ADR-0015 audit; no canon-DAG |
| koi-processor | NOT AUDITED | Out of ADR-0072 scope |
| darren-workflow | N/A | Not canon-bearing |
| flowcoding | UNKNOWN | Out of ADR-0072 scope |

**Implication for Axis H**: validator-check can detect-and-run-if-present. Multi-repo blanket mandate inappropriate. Conditional invocation (skip silently if no validator) is lightest.

## D. Precedent: skills invoking external scripts

**`doc-check` skill** (`/Users/darrenzal/projects/darren-workflow/skills/doc-check/SKILL.md:193 lines`):
- Invokes `python scripts/build_semantic_roadmap.py --check --docs --json` via Bash
- Reports output on exit 0 or known validation errors
- Falls back to inline checks if script unavailable
- Warns (not blocks) on stale artifacts

**Template-fit**: doc-check precedent validates "script-invocation with graceful fallback" pattern for Bash-invoked python scripts in this project.

## E. Baseline-mechanism options (Axis B)

| Option | Mechanism | Refresh | Complexity | Drift detection |
|--------|-----------|---------|------------|-----------------|
| B1 | `tmp/.validator-baseline.txt` file-persisted | Per-session-start | LOW | Full (file-durable across invocations) |
| B2 | No baseline; always full-pass | N/A | MINIMAL | Absolute state only (no diff) |
| B3 | git-index-based (compare HEAD vs working-tree) | Implicit | MEDIUM | File-change driven; misses untracked drift |
| B4 | In-memory only (session-scratchpad) | Per-session | LOW | Session-scoped; lost on restart |

**Ruddick incident analysis**: drift was from UNTRACKED untracked-working-tree state → validator baseline changed between preflight and execution. B3 (git-index) misses untracked; B1 persistent baseline would have caught it; B2 full-pass without baseline would also have caught it (as absolute 10 errors vs prior 9).

**Recommendation lean**: B2 absolute-state surfaces drift without baseline-management overhead. Simplest correct answer for ruddick-class incidents.

## F. Blocking-vs-warning (Axis D)

- **D1 WARNING only**: lowest friction; least enforcement; relies on operator-discipline
- **D2 BLOCKING**: maximum enforcement; risks stranding operator mid-/end
- **D3 CONFIGURABLE**: flag-based override (e.g., `--skip-validator` or `--strict-validator`)
- **D4 TIERED**: new-errors-since-baseline = block; warnings = surface; baseline-match = silent

**Interaction with Axis B**:
- B2 (no baseline) + D4 is impossible (no "since-baseline" to tier against)
- B2 + D1 is coherent: always surface current state; let operator read
- B2 + D2 is coherent: block if validator fails absolute (existing 9/30 always "fails" → would strand all /end invocations in Spore; NOT viable)
- B1/B4 + D4 viable

**Recommendation lean**: B2 + D1 (surface absolute state, warn-only) OR B1 + D4 (baseline drift detection, tiered). The former is parsimony-preferred for first-implementation.

## G. Scope options (Axis F cross-repo)

- **F1 BUNDLED** (Spore ADR + SKILL.md same session): 20-30 min; cross-repo commit coordination; Constraint-10 pre-ratification for `memory/MEMORY.md` parent-session drift required
- **F2 SPORE-ADR-ONLY** (SKILL.md deferred to own session): 10-15 min; clean scope but skill work carried forward
- **F3 SEQUENTIAL** (Spore ADR this session; SKILL.md next-session): 10-15 min; parallel to ADR-0071 pattern ("three-tier deferred-remediation shape")

**F3 precedent**: ADR-0071 landed as Spore-only with two downstream prose-fix follow-ons deferred. Shape is proven.

**Recommendation lean**: F3 matches ADR-0071's three-tier shape — Spore ADR carries the decision; darren-workflow SKILL.md edit is the straightforward downstream execution in a brief follow-on session. Keeps Spore session-atomic clean. Constraint-10 on darren-workflow `memory/MEMORY.md` becomes non-blocking (deferred to next session).

## H. Per-repo applicability (Axis H)

- **H1 SPORE-ONLY**: hardcoded `cd ~/projects/spore && python3 scripts/validate_spec_dag.py`
- **H2 MULTI-REPO**: skill iterates known canon-bearing repos; but IC + PM have no validator (per audit)
- **H3 CONFIGURABLE**: skill detects `scripts/validate_spec_dag.py` or similar in current repo; runs if found

**Recommendation lean**: H3 CONFIGURABLE. Minimal logic: "if `scripts/validate_spec_dag.py` or `scripts/validate*.py` exists at repo root, invoke it". Graceful no-op otherwise. Future-proof without hardcoding repo list.

## I. Error-handling on missing validator (Axis I)

- **I1 SILENT**: skip; no output
- **I2 NOTE**: one-line info (e.g., "No validator found; skipping check")
- **I3 WARN**: warn if absent in canon-bearing repo (requires repo-classification logic)

**Recommendation lean**: I2 NOTE. Operator knows the check was considered. Cheap to implement. No classification needed.

## J. Constraint-10 Tripwire Summary

**TRIPWIRE FIRED**: `/Users/darrenzal/projects/darren-workflow/memory/MEMORY.md` — 36 lines inserted (additive content; parent-session housekeeping from today's Wave 1/2/3 sweep).

**Disposition options**:
- (a) Operator pre-ratifies (matches ADR-0067 / ADR-0068 Constraint-10 pre-approval precedent); bundle with SKILL.md commit if F1 adopted
- (b) If F2 or F3 adopted: parent-session drift is outside ADR-0072 scope; disposition is "acknowledge + leave to parent /end"

**Recommendation**: (b) under F3 (favored) — parent-session drift stays out of ADR-0072's Spore-scoped execution. ADR-0072's Spore-side can land cleanly with zero cross-repo writes.

## K. Key decision points for Step 1 decision-brief

Three most-consequential axes:
1. **Axis F (cross-repo bundling)** — F3 recommended (mirrors ADR-0071 pattern)
2. **Axis B (baseline-mechanism)** — B2 (no baseline, absolute-state) recommended for parsimony; B1/B4 viable if tiered drift detection valued
3. **Axis D (blocking/warning)** — D1 warning-only recommended, paired with B2; D4 tiered viable with B1/B4

Secondary axes (lower consequence; defaults propose cleanly):
- A: A1 DECISION-RECORD (standard shape; light scope fits)
- C: C1 Per-session-start baseline if B1 (moot if B2)
- E: E1 FULL-PASS (validator is fast; scoped-diff adds complexity without demonstrated need)
- G: G1 NARROW (only /end skill)
- H: H3 CONFIGURABLE (detect-and-run)
- I: I2 NOTE on missing validator

## L. Session-atomic projections

- **F1 BUNDLED**: 20-30 min (Spore ADR + SKILL.md edit + cross-repo commit coordination + Constraint-10 pre-ratification overhead)
- **F2 SPORE-ADR-ONLY**: 10-15 min (ADR authoring + no cross-repo writes)
- **F3 SEQUENTIAL**: 10-15 min Spore-side; SKILL.md edit is 3-5 min in a follow-on session
