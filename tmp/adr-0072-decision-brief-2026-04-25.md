# ADR-0072 Decision-Brief — `/end` Skill Validator-Check Integration

Date: 2026-04-25
Session: spore:ADR-0072 Step 1 decision-brief (Step 2 HANDBACK authoritative)
Parking source: spore:ADR-0067 Axis B5 deferral + spore:ADR-0065 §Parking lot line 341

> **Note on plan file**: Write access to `/Users/darrenzal/.claude/plans/` was denied by the
> sandbox for this session. Plan content is consolidated into this decision-brief. The
> orchestrator can either relay operator choices directly, or the plan file can be authored
> by the next invocation after permission adjustment.

---

## Plan Structure (embedded)

- Step 0 (DONE): preflight manifest at `tmp/adr-0072-preflight-manifest.txt` — all 4 HEADs verified
- Step 0.5 (DONE): audit manifest at `tmp/adr-0072-audit-manifest-2026-04-25.md` — SKILL.md + validator interface + cross-repo survey + axis interactions
- Step 1 (DONE — THIS DOCUMENT): 9-axis decision-brief with child recommendations
- Step 2 (HANDBACK): return to orchestrator; await per-axis ratification
- Step 3 (post-ratification): plan confirmation + pre-exec state capture
- Step 4: re-verify baselines
- Step 5a: Spore draft ADR commit (explicit-path staging)
- Step 5b (IF F1 BUNDLED): darren-workflow SKILL.md commit
- Step 5c (IF F3 SEQUENTIAL): SKILL.md edit deferred to follow-on session
- Step 6: validator parity verification
- Step 7: Spore active commit
- Step 7.5: cross-repo read-only discipline check
- Step 8: close-out manifest

---

## 9-Axis Decision-Brief

### Axis A — ADR shape

| Option | Description | Fit |
|--------|-------------|-----|
| **A1 DECISION-RECORD** | Standard shape; `decision:` frontmatter field with integration verb | STRONG — ADR-0067/0071 precedent; skill-infra shape parallel |
| A2 SPEC | If ADR specifies a validator-check schema beyond narrative | WEAK — no schema artifact needed |
| A3 HYBRID | Mix — decision-record body with spec subsection | WEAK — overcomplicated |

**Child lean**: **A1** (low ambiguity). Standard decision-record shape fits naturally; workflow-hygiene integration is a decision, not a schema.

### Axis B — Baseline-mechanism location

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| B1 | `tmp/.validator-baseline.txt` file-persisted | Durable; simple to read/write | One more state file to manage |
| **B2 no-baseline, absolute** | Always run full-pass; surface current state | No state management; catches absolute drift (incl. ruddick-class) | No "since-when" info |
| B3 | git-index-based (HEAD vs. working-tree) | Leverages existing git state | Misses untracked-file drift (ruddick WAS untracked-edit to tracked file — would catch it; but other untracked-new-file drift wouldn't be) |
| B4 | In-memory / session-scratchpad | No persistent artifact | Lost on restart; no cross-session continuity |

**Child lean**: **B2** (MEDIUM ambiguity; depends on Axis D choice). For first-implementation, absolute-state surfacing is the parsimony-correct answer — catches the ruddick-class incident without baseline-management overhead. IF operator wants tiered drift-against-prior-baseline, B1 is the natural next-step.

**Axis interaction**: B2 + D2 blocking is NOT viable — Spore validator already exits 1 (9 errors baseline), so D2 blocking would halt every `/end` invocation. B2 must pair with D1 (warn) or D3 (configurable).

### Axis C — Refresh cadence

| Option | Description | Applies when |
|--------|-------------|--------------|
| C1 per-session-start | Baseline captured at session start | B1/B4 |
| C2 per-commit | Baseline refreshed on each commit | B1 (expensive) |
| C3 manual | Operator runs baseline-refresh command | B1 |
| **C4 never (implied by B2)** | No baseline concept | B2 |

**Child lean**: **C4 (implied by B2 lean)**. If operator selects B1 or B4, C1 per-session-start is the natural pair.

### Axis D — Blocking-vs-warning

| Option | Description | Enforcement |
|--------|-------------|-------------|
| **D1 WARNING only** | Surface output; continue /end | Author-discipline |
| D2 BLOCKING | Halt /end on validator failure | Strong (but strand-risk; incompatible with B2) |
| D3 CONFIGURABLE | Flag-based (e.g., `--strict` / `--skip-validator`) | Caller-choice |
| D4 TIERED | new-errors-since-baseline=block; warnings=surface; match=silent | Medium (requires baseline; B1/B4) |

**Child lean**: **D1** (MEDIUM ambiguity — operator may prefer stronger enforcement). D1 + B2 is the minimum viable parsimony-preferred answer. D4 + B1 is the enforcement-preferred answer.

### Axis E — Scoped-diff vs full-pass

| Option | Description | Implementation cost |
|--------|-------------|---------------------|
| **E1 FULL-PASS** | Always invoke full validator | Zero — matches current CLI |
| E2 SCOPED | Only check session-touched files | Requires validator enhancement (doesn't support file-list input today) |
| E3 HYBRID | Full-pass but diff against baseline | Depends on B axis |

**Child lean**: **E1** (low ambiguity). Validator is fast (<1s on 248 docs); scoped adds complexity without demonstrated need. ADR-0067 Axis B rejected scoped-diff on same grounds.

### Axis F — Cross-repo scope boundary

| Option | Description | Timing | Constraint-10 |
|--------|-------------|--------|---------------|
| F1 BUNDLED | Spore ADR + SKILL.md edit in one session | 20-30 min | Requires pre-ratification of `memory/MEMORY.md` drift |
| F2 SPORE-ADR-ONLY | SKILL.md edit permanently deferred (needs re-opening trigger) | 10-15 min | Not triggered |
| **F3 SEQUENTIAL** | Spore ADR this session; SKILL.md next-session follow-on | 10-15 min Spore-side | Not triggered |

**Child lean**: **F3** (MEDIUM ambiguity — F1 is equally coherent if operator wants single-sweep completion). F3 mirrors ADR-0071's three-tier-deferred-remediation shape — Spore ADR carries decision; SKILL.md edit is mechanical follow-on. Keeps Spore session-atomic tight. Constraint-10 memory/MEMORY.md drift stays out of ADR-0072's Spore-scoped execution.

**F1 counter-argument**: SKILL.md edit is small (~20-30 lines inserted); bundling eliminates the follow-on session + keeps the decision+execution coupled. If operator pre-ratifies `memory/MEMORY.md` drift, F1 is clean. Estimated 20-25 min total.

### Axis G — Global-coherence

| Option | Description |
|--------|-------------|
| **G1 NARROW** | Only `/end` skill touched |
| G2 WIDE | If other darren-workflow skills also need validator-check hooks, include |

**Child lean**: **G1** (low ambiguity). No evidence any other skill needs validator-check. G2 would need evidence-based audit.

### Axis H — Per-repo applicability

| Option | Description | Complexity |
|--------|-------------|------------|
| H1 SPORE-ONLY | Hardcoded `cd ~/projects/spore && validator` | LOW — but future-fragile |
| H2 MULTI-REPO | Iterate known canon-bearing repos | HIGH — IC/PM have no validator |
| **H3 CONFIGURABLE** | Detect `scripts/validate_spec_dag.py` in current repo; run if present | LOW + future-proof |

**Child lean**: **H3** (low ambiguity). Minimal logic: "if `scripts/validate_spec_dag.py` exists at repo-root, run it". Naturally no-ops in IC/PM/darren-workflow.

### Axis I — Error-handling on missing validator

| Option | Description |
|--------|-------------|
| I1 SILENT | Skip with no output |
| **I2 NOTE** | One-line info ("No canon validator found; skipping check") |
| I3 WARN | Warn if absent in canon-bearing repo (requires repo-classification) |

**Child lean**: **I2** (low ambiguity). Cheap; informative without classifier logic.

---

## Recommended Bundles

### Bundle α — PARSIMONY-PREFERRED (minimum viable; easiest to adopt + later-revise)

**A1 + B2 + C4 + D1 + E1 + F3 + G1 + H3 + I2**

- Spore-side ADR this session (10-15 min); SKILL.md edit next-session (3-5 min)
- `/end` step runs validator full-pass; surfaces output; continues regardless
- Detect-and-run; silent on missing validator except for one-line note
- No baseline management
- Catches ruddick-class incidents (absolute 10 errors vs prior 9 surfaces in next /end output)
- Constraint-10 `memory/MEMORY.md` drift stays with parent /end

### Bundle β — ENFORCEMENT-PREFERRED (stronger workflow discipline)

**A1 + B1 + C1 + D4 + E1 + F3 + G1 + H3 + I2**

- File-persisted baseline at `tmp/.validator-baseline.txt`
- Refreshed per session-start
- Tiered: new-errors-since-baseline = block; warnings = surface; match = silent
- Same other axes as Bundle α
- Adds session-state-file management overhead; stronger drift-detection semantics

### Bundle γ — BUNDLED EXECUTION (single session sweep)

**A1 + B2 + C4 + D1 + E1 + F1 + G1 + H3 + I2**

- Same semantics as Bundle α but F1 BUNDLED: Spore ADR + SKILL.md edit same session
- Requires Constraint-10 pre-ratification of darren-workflow `memory/MEMORY.md`
- Estimated 20-30 min
- Cleaner for operator-tracking (one session closes entire item)

---

## Session-atomic projections

| Scope | Projection | Notes |
|-------|-----------|-------|
| F1 BUNDLED (γ) | 20-30 min | Cross-repo commit coordination; Constraint-10 pre-ratification |
| F2 SPORE-ADR-ONLY | 10-15 min | Item stays unclosed until re-open trigger |
| F3 SEQUENTIAL (α/β) | 10-15 min Spore-side + 3-5 min follow-on | Mirrors ADR-0071 pattern |

---

## Constraint-10 Tripwire Disposition

**FIRED**: `/Users/darrenzal/projects/darren-workflow/memory/MEMORY.md` — 36-line additive modification (parent-session housekeeping from today's Wave 1/2/3 sweep).

Operator choices:
- **(a)** Pre-ratify (matches ADR-0067 parent-session-tracked-drift-ratification precedent); required if F1 BUNDLED adopted
- **(b)** Acknowledge + leave to parent /end (natural if F3 SEQUENTIAL adopted)

**Child lean**: **(b)** under F3. Parent-session drift is orthogonal to ADR-0072 scope.

---

## Ambiguity Summary

| Axis | Lean | Ambiguity | If operator prefers other |
|------|------|-----------|---------------------------|
| A | A1 | LOW | — |
| B | B2 | MEDIUM | B1 pairs with D4 tiered |
| C | C4 (implied) | MEDIUM (tied to B) | C1 if B1/B4 |
| D | D1 | MEDIUM | D4 if operator wants tiered-drift-enforcement |
| E | E1 | LOW | — |
| F | F3 | MEDIUM | F1 for single-sweep completion |
| G | G1 | LOW | — |
| H | H3 | LOW | — |
| I | I2 | LOW | — |

**Highest-consequence cluster**: B + C + D (baseline semantics). The B2+D1 choice is the parsimony-correct answer; B1+C1+D4 is the enforcement-preferred alternative. Operator should choose the cluster as a unit.

**Second-highest**: F (cross-repo timing). F3 vs F1 is an operator-preference call on session-tracking vs parsimony.
