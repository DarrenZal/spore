---
doc_id: spore.canon-decision.end-skill-validator-check-integration
doc_kind: decision-record
status: active
adr_number: "0072"
date: 2026-04-25
opened-on: 2026-04-25
closed-on: 2026-04-25
decision: integrate-workflow-check
r_claim_source:
  - spore:ADR-0067-validator-schema-archived-enum
r_claim_statement: |
  spore:ADR-0067 (validator-schema-archived-enum-addition, 2026-04-24) Axis B5 deferred
  the workflow-discipline concern from ADR-0065 §Parking lot line 341: "Workflow-discipline
  validator-check in `/end` skill (flagged during entry-gate investigation; detect
  untracked-working-tree drift that changes validator baseline between preflight and
  execution)." ADR-0067 closed the enum-schema half of that parking-item cluster
  (adding `archived` as 5th DECISION_RECORD_STATUSES value) but explicitly deferred
  the skill-infra half — cross-repo edit to
  `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` with its own
  baseline-mechanism design decision (location / refresh cadence / blocking-vs-warning
  enforcement). ADR-0072 closes the deferred workflow-discipline item.

  The originating incident: 2026-04-24 ADR-0065 preflight caught the ruddick-2026
  external research file carrying `status: archived` — enum-invalid at the time.
  The drift had landed ~18h earlier via a parallel IndigenomicsAI session and was
  invisible to the authoring operator until the next canon-ADR preflight invoked
  the validator. The workflow gap: validator drift only surfaces at canon-ADR
  preflight, not at session-wrap. Sessions between canon-ADRs accumulate undetected
  drift.

  Step 0.5 audit (`tmp/adr-0072-audit-manifest-2026-04-25.md`) established:
  (a) SKILL.md state: 131 lines / 7 steps (find-CLAUDE.md → session-ID → summarize →
  read-CLAUDE.md → update-CLAUDE.md → rename-session → confirm); no existing validator
  hook; natural insertion points are pre-summary (after Step 2) or pre-update (after
  Step 4). (b) Validator CLI: `python3 scripts/validate_spec_dag.py`; exit 0=PASS,
  1=FAIL; parseable `FAILED: X error(s), Y warning(s)` summary line; fast (<1s on 248
  docs); auto-configures from `docs/_meta/project.json`. (c) Cross-repo validator
  survey: Spore YES; IC NO (per ic:ADR-0019 audit); PM NO (per pm:ADR-0015 audit);
  koi-processor not audited — blanket multi-repo mandate inappropriate, configurable
  detect-and-run is the honest-rigor shape. (d) Precedent: darren-workflow `doc-check`
  skill invokes `scripts/build_semantic_roadmap.py` via Bash with graceful fallback;
  template-fit for Bash-invoked validator hook pattern.

  Per operator directive 2026-04-25 ADR-0072 Step-2 decision-gate fast-path:
  **Bundle α — A1 decision-record + B2 no-baseline absolute + C4 never + D1 warn +
  E1 full-pass + F3 sequential + G1 narrow + H3 configurable + I2 note**. Parsimony-
  first shape: surface absolute validator state at each /end; no baseline-management
  overhead; detect-and-run per repo; warning-only enforcement (B2+D2 would strand
  every /end given Spore's 9-error baseline). Upgrade-paths (B1 file-baseline,
  D4 tiered blocking) remain available if warning-surfacing proves insufficient
  in practice.

  F3 SEQUENTIAL disposition: Spore-side ADR-0072 lands this session documenting
  the decision; the darren-workflow `skills/end/SKILL.md` edit is deferred to a
  dedicated follow-on session in darren-workflow (matches spore:ADR-0071 A3 sequential
  three-tier-deferred-remediation precedent). The follow-on session will also handle
  the independent parent-session housekeeping on `darren-workflow/memory/MEMORY.md`
  (Constraint-10 tripwire disposition at ADR-0072 Step 2: option (b) LEAVE-TO-PARENT;
  not in ADR-0072 execution scope).
supported_by:
  - spore:ADR-0065-pattern-library-infrastructure-spec
  - spore:ADR-0067-validator-schema-archived-enum
  - spore:ADR-0071-cross-repo-projection-script-pm-registration-alignment
authorized_by: "operator directive 2026-04-25 ADR-0072 Step-2 decision-gate: Bundle α — A1 decision-record + B2 no-baseline absolute + C4 never + D1 warn + E1 full-pass + F3 sequential + G1 narrow + H3 configurable + I2 note; Constraint-10 disposition (b) LEAVE-TO-PARENT for darren-workflow/memory/MEMORY.md"
queue_reference: "spore:ADR-0067 Axis B5 deferral (/end skill validator-check integration); spore:ADR-0065 §Parking lot line 341 (second of two parking items; first closed by ADR-0067)"
affects_canon:
  - docs/research/canon-decisions/0072-end-skill-validator-check-integration.md
related_adrs:
  - spore:ADR-0065-pattern-library-infrastructure-spec
  - spore:ADR-0067-validator-schema-archived-enum
  - spore:ADR-0071-cross-repo-projection-script-pm-registration-alignment
concepts: []
---

# ADR-0072 — `/end` Skill Validator-Check Integration (Bundle α: A1 + B2 + C4 + D1 + E1 + F3 + G1 + H3 + I2)

## Status

active (activated 2026-04-25 under `adr-0072-end-skill-validator-check-integration` decision-gated plan; operator ratified Bundle α at Step-2 decision-gate 2026-04-25; Step 7 active commit after Step 6 validator parity verified at 9/30 hold; workflow-hygiene-integration-ADR canon-method).

## Context

### Parking source

spore:ADR-0065 §Parking lot line 341 (pattern-library-infrastructure-spec, 2026-04-24):

> *"Workflow-discipline validator-check in `/end` skill (flagged during entry-gate investigation 2026-04-24; detect untracked-working-tree drift that changes validator baseline between preflight and execution)."*

spore:ADR-0067 (validator-schema-archived-enum-addition, 2026-04-24) closed the first of ADR-0065's two clustered parking items (enum-schema: adding `archived` as 5th `DECISION_RECORD_STATUSES` value) under per-axis disposition A1 universal-enum + B5 defer + C2 validator+protocol + D3 ruddick retcon. Axis B5's exact deferral language (ADR-0067 §Decision):

> *"Axis B = B5 defer to ADR-0068 — `/end` skill validator-check integration deferred. Cross-repo edit to `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` needs its own baseline-mechanism design decision."*

(ADR-0067 named the target "ADR-0068" as a forward-reference; that slot was consumed by `federation-encounter composition-pattern` during Wave 2 sweep; the deferral re-anchors to ADR-0072.)

### Originating incident

2026-04-24 ADR-0065 entry-gate preflight invoked the canon validator and caught `docs/research/external/ruddick-2026-commitment-pool-route-graphs.md` carrying `status: archived` — an enum-invalid value at the time. The drift had landed ~18 hours earlier via a parallel IndigenomicsAI session. The authoring operator had no visibility into that drift until ADR-0065 preflight ran.

The workflow gap: **canon-state drift only surfaces at the next canon-ADR preflight**, not at the end of the session that introduced the drift. Sessions between canon-ADRs can accumulate undetected drift for hours or days.

### Canon state baseline at authoring

- Spore HEAD: `0800679`
- IC HEAD: `8ce665e` (read-only in this session)
- PM HEAD: `86f2d4b` (read-only in this session)
- darren-workflow HEAD: `021153e` (read-only in this session; `memory/MEMORY.md` has parent-session 36-line modification unrelated to ADR-0072 — Constraint-10 disposition (b) LEAVE-TO-PARENT)
- Spore validator baseline: 9 errors / 30 warnings
- Concepts yaml: v14 (unchanged; no yaml change in ADR-0072)
- Canon object-class inventory: 9 primitives / 3 doctrines / 2 modes / 2 properties / 6 derived glossary slugs / 7 in-scope patterns (all PRESERVED)
- Canon-rebuild arc: 23 prior canon-decisions (ADRs 0044–0058, 0061–0071, 0059a); ADR-0072 is the 24th

### Step 0.5 audit findings

Full audit at `tmp/adr-0072-audit-manifest-2026-04-25.md`. Key findings:

**SKILL.md state** (`/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md`, 131 lines at md5 `c2ca8b1ca69d484e8a8dd3dfe6bb67b9`):

- Step 1: Find Project CLAUDE.md (file lookup)
- Step 2: Get Current Session ID (shell sed/ls)
- Step 3: Summarize the Session (agent reasoning)
- Step 4: Read Existing CLAUDE.md (file read)
- Step 5: Update CLAUDE.md (file edit; 3 sub-blocks A/B/C)
- Step 6: Rename Session (optional; JSON edit)
- Step 7: Confirm (report to user)

No existing validator hook. Natural insertion point for an additive validator-check step: **after Step 2 (pre-summary)** — validate canon state BEFORE summarizing so any drift is surfaced in the session summary itself.

**Validator CLI** (`scripts/validate_spec_dag.py`):

- Invocation: `python3 scripts/validate_spec_dag.py [--strict] [repo_root]`
- Exit 0: PASSED clean OR PASSED with warnings (absent `--strict`)
- Exit 1: FAILED (≥1 error) OR STRICT FAIL (with `--strict`)
- Output: `info:` / `warn:` / `ERROR:` lines + final summary line `FAILED: X error(s), Y warning(s)` or `PASSED with Y warning(s)` or `PASSED: clean`
- Fast (<1s on 248 governed docs)
- Auto-configures from `docs/_meta/project.json` for project_id + docs_root
- Python 3 stdlib only (no PyYAML dep)

**Cross-repo validator survey**:

| Repo | Validator | Note |
|------|-----------|------|
| Spore | YES (`scripts/validate_spec_dag.py`) | Canonical; 323 lines; maintained |
| IC | NO | Confirmed per ic:ADR-0019 audit; KOI-first graph stance |
| PM | NO | Confirmed per pm:ADR-0015 audit; no canon-DAG |
| koi-processor | NOT AUDITED | Out of ADR-0072 scope |
| darren-workflow | N/A | Not canon-bearing |

Blanket multi-repo validator-run mandate inappropriate given IC/PM absence. H3 CONFIGURABLE detect-and-run is the honest-rigor shape.

**Precedent** (`/Users/darrenzal/projects/darren-workflow/skills/doc-check/SKILL.md`): invokes `scripts/build_semantic_roadmap.py` via Bash with graceful fallback — "Try the script first, fall back to inline checks." Template-fit for Bash-invoked validator hook pattern; demonstrates detect-and-run precedent.

## Decision

**Bundle α — A1 + B2 + C4 + D1 + E1 + F3 + G1 + H3 + I2** per operator directive 2026-04-25 Step-2 decision-gate fast-path.

### Per-axis decisions

- **Axis A = A1 decision-record** — standard ADR shape. No spec schema needed; workflow-hygiene integration is a decision, not a specification. Rejects A2 spec (no schema artifact) and A3 hybrid (overcomplicated).
- **Axis B = B2 no-baseline, absolute** — validator runs full-pass each invocation; surfaces current absolute state without comparing against a stored baseline. Rejects B1 file-persisted-baseline (adds state-management overhead without demonstrated need for first-implementation), B3 git-index (misses untracked-file drift which is exactly the ruddick-class incident), B4 in-memory (session-scoped only). **Parsimony-first rationale**: absolute-state surfacing catches ruddick-class incidents (absolute 10 errors vs prior 9 is visible in next /end output). Upgrade-path to B1 preserved.
- **Axis C = C4 never (implied by B2)** — no baseline to refresh. Moot under B2.
- **Axis D = D1 warn** — surface validator output in /end; do not halt. Rejects D2 blocking (Spore validator exits 1 on baseline 9 errors → D2 would strand every /end invocation in Spore; architecturally impossible under current baseline), D3 configurable (flag complexity without demonstrated need), D4 tiered (requires B1/B4 baseline). **B2 × D2 = impossible** surfaced during Step 0.5 as the decisive interaction.
- **Axis E = E1 full-pass** — validator is fast (<1s on 248 docs); scoped-diff adds complexity without demonstrated need. Matches current CLI shape. Rejects E2 scoped (validator doesn't support file-list input; would require enhancement), E3 hybrid.
- **Axis F = F3 sequential** — Spore-side ADR-0072 lands this session documenting the decision; the darren-workflow `skills/end/SKILL.md` edit is deferred to a dedicated follow-on session. Mirrors spore:ADR-0071 A3 sequential three-tier-deferred-remediation precedent. Rejects F1 bundled (would require Constraint-10 pre-ratification of unrelated `memory/MEMORY.md` parent-session drift and cross-repo commit coordination overhead), F2 Spore-only-permanent (leaves item unclosed without re-open trigger; weaker than F3 which has a named follow-on).
- **Axis G = G1 narrow** — only `/end` skill touched in ADR scope. No evidence other darren-workflow skills need validator-check hooks. Rejects G2 wide (would require evidence-based audit across skill-set).
- **Axis H = H3 configurable** — detect-and-run per repo: if `scripts/validate_spec_dag.py` exists at repo-root (or matches a narrow detection pattern), invoke; otherwise skip. Rejects H1 Spore-only (future-fragile; hardcodes repo list), H2 multi-repo (IC/PM have no validator per audit — would no-op without the detection).
- **Axis I = I2 note** — one-line info output when no validator is found ("No canon validator found; skipping check"). Rejects I1 silent (operator can't tell if check ran), I3 warn (would require repo-classification logic to distinguish "canon-bearing but validator missing" from "not canon-bearing").

### Constraint-10 disposition

`/Users/darrenzal/projects/darren-workflow/memory/MEMORY.md` carries a parent-session 36-line additive modification (pgvector HNSW memory-pointer + macOS case-variant note + "canon-review patterns (updated 2026-04-24)" section citing ADR-0066/0065/0071) unrelated to ADR-0072 work.

**Disposition (b) LEAVE-TO-PARENT**: not committed from this session. The follow-on darren-workflow session that lands the SKILL.md edit will decide disposition for `memory/MEMORY.md` independently.

### Implementation Notes

- **Plan file location anomaly**: the decision-gated plan was intended at `/Users/darrenzal/.claude/plans/adr-0072-end-skill-validator-check-integration.md` per standard discipline. Sandbox in this child session denied Write + Bash write-access to `~/.claude/plans/`; plan content was consolidated into the decision-brief at `tmp/adr-0072-decision-brief-2026-04-25.md` (with embedded Plan Structure section) and accepted as authoritative for this ADR per operator directive. No canon-record impact; future sessions may copy plan content to canonical plans location if desired.
- **Forward-reference staleness precedent noted**: ADR-0067's Axis B5 text named the deferral target as "ADR-0068". The 0068 slot was consumed by `federation-encounter composition-pattern` during Wave 2 sweep. ADR-0072 is the re-anchored destination. Future ADRs deferring to specific numeric slots should either use relative phrasing ("next available ADR") or accept re-anchoring as normal (not history-rewrite).

## Consequences

### Positive

- **ADR-0065 §Parking lot item (2) CLOSED.** Second of two clustered parking items resolved (first closed by ADR-0067). Workflow-discipline gap documented and remediation path ratified.
- **B5 deferral from ADR-0067 CLOSED** with principled disposition; Bundle α parsimony-first shape preserves upgrade-paths.
- **Drift visibility improvement path specified**: once the follow-on SKILL.md edit lands, canon-state drift will surface at session-wrap (warning output in /end) rather than deferring to next canon-ADR preflight. Closes the ruddick-class workflow-hygiene gap at the point it was originally surfaced (ADR-0065 entry-gate investigation).
- **New canon-method precedent: Spore-ADR-documenting-deferred-cross-repo-implementation pattern** (F3 sequential). Inherits from spore:ADR-0071 A3 sequential three-tier-deferred-remediation shape but applies to darren-workflow (non-canon-bearing third-repo) rather than koi-processor (canon-adjacent infrastructure). Tier-separation discipline: canon-decision (Spore ADR) vs infrastructure-edit (darren-workflow SKILL.md) as separate sessions. Reusable for future cross-repo workflow-integration concerns where the implementation target is a third-repo outside the canon-bearing sibling set.
- **New canon-method precedent: validator-check-as-parsimony-first-workflow-integration** (B2 + D1 minimum viable; upgrade-paths available). First-implementation of workflow-hygiene validator integration; B2 no-baseline absolute-state surfacing + D1 warning-only is the parsimony-correct shape under a failed-absolute-baseline (Spore 9/30). Upgrade to B1 file-baseline + D4 tiered blocking preserved as explicit future-work if operational evidence shows warning-surfacing alone insufficient. Inheritable pattern for future workflow-hygiene integrations: start with absolute-state warning, upgrade on evidence.
- **New canon-method precedent: implicit-citation discipline for deferred implementation** (F2 file-path + line-numbers; no commit-SHA pin). ADR cites target file by path + line numbers where the edit will land. No commit SHA in frontmatter since the implementing commit doesn't exist yet. Parallels spore:ADR-0071 F2 treatment (file paths + line numbers for live cited files without SHA pins on unsettled edits). Distinction: ADR-0071 cited live-state files at specific SHAs; ADR-0072 cites target-state files without SHAs because the target-state hasn't been committed. Honest citation discipline: pin what exists; name paths for what will exist.
- **B2 × D2 impossibility analysis surfaced at Step 0.5** as architectural-constraint finding: Spore validator exits 1 on 9-error baseline → any D2 blocking paired with B2 absolute-state would strand every /end. This is not a design-flaw but a consequence of Spore's documented canon state (9 errors are pre-existing from mis-namespaced connection docs; warnings are pre-governance research files). B1/B4 + D4 tiered is the enforcement-compatible alternative if operator wants blocking semantics. Documented here to save future ADRs the re-analysis.
- **Configurable detect-and-run (H3) future-proofs the skill** across any repo that gains a validator. No hardcoded repo list; no per-repo branching. Minimal behavioral footprint.

### Negative / Cost

- **SKILL.md edit not landed this session** — the actual workflow-hygiene gap remains open until the follow-on darren-workflow session runs. Estimated 3-5 minutes in that session; target: same-week cadence. Follow-on is named in §Parking lot.
- **B2 no-baseline does not distinguish** "drift introduced this session" from "drift inherited from prior session." Operator reading the /end output must know the prior absolute state to infer the delta. For Spore's stable 9/30 baseline this is trivial; for future repos with different canon-state dynamics, B1 upgrade path exists.
- **D1 warning-only relies on operator-discipline** to act on the surfaced output. No automated gate. Matches ADR-0067 Axis B5's explicit "warning-only... weak enforcement" concern; ratified as acceptable trade-off for first-implementation given B2×D2 impossibility.
- **H3 detection pattern is narrow** (expects `scripts/validate_spec_dag.py` at repo-root by name). If future repos adopt differently-named validators, detection-pattern evolution is a parking item.
- **Forward-reference staleness** from ADR-0067's "defer to ADR-0068" text: the 0068 slot was consumed by federation-encounter composition-pattern during the Wave 2 sweep. Re-anchoring to ADR-0072 is correct but creates a minor breadcrumb mismatch for readers following ADR-0067 linearly. Noted in §Implementation Notes; not a canon-record integrity concern.

### Neutral / Deferred

- **Concepts yaml unchanged at v14.** No slug admission; no concept-layer changes.
- **Validator 9/30 baseline held** (AC4 + AC6 verification; ADR-0072 is canon-decision-only, no validator state mutation).
- **IC + PM repos unaffected.** ADR-0072 is Spore-scope-only for the canon-decision side; the deferred implementation touches darren-workflow (non-canon-bearing) only.
- **darren-workflow/memory/MEMORY.md parent-session drift** — disposition (b) LEAVE-TO-PARENT; follow-on session handles independently.
- **Canon object-class inventory preserved**: 9 primitives / 3 doctrines / 2 modes / 2 properties / 6 derived glossary slugs / 7 in-scope patterns. ADR-0072 is workflow-infrastructure, not canon-object-class.

## Alternatives Considered

### Axis A rejections

- **A2 spec**: if ADR-0072 were specifying a validator-check schema (e.g., baseline-file format, tiered-enforcement state-machine), a `decision: spec` shape would fit per ADR-0065 precedent. Rejected: Bundle α's B2 no-baseline + D1 warn produces no schema artifact; ADR-0072 is narrative-decision, not specification.
- **A3 hybrid**: decision-record body with embedded spec subsection. Rejected: no subsection content warrants separate schema treatment under Bundle α.

### Axis B rejections

- **B1 file-persisted baseline** (`tmp/.validator-baseline.txt`): strongest drift-detection shape; pairs naturally with C1 session-start refresh + D4 tiered. Rejected for first-implementation: adds state-file management overhead without demonstrated need. Preserved as explicit upgrade-path.
- **B3 git-index-based** (HEAD vs working-tree): leverages existing git state; no new state file. Rejected: misses untracked-file drift. The ruddick incident was a tracked-file edit (would be caught by B3), but future untracked-new-governed-files introducing errors would escape B3.
- **B4 in-memory / session-scratchpad**: no persistent artifact. Rejected: session-scoped only; lost on restart; insufficient for cross-session continuity.

### Axis D rejections

- **D2 blocking**: strongest enforcement. **Architecturally impossible** under B2 + Spore's 9-error baseline — validator already exits 1, so D2+B2 halts every /end. Under B1+D4 tiered, blocking on new-errors-since-baseline is viable; preserved as upgrade-path.
- **D3 configurable**: flag-based (`--strict-validator` / `--skip-validator`). Rejected: flag complexity without demonstrated use case; D1 covers the parsimony-first shape.
- **D4 tiered**: new-errors=block; warnings=surface; match=silent. Requires B1/B4 baseline to compute tiers. Rejected under Bundle α; preserved as upgrade-path pair with B1.

### Axis E rejections

- **E2 scoped**: only validate session-touched files. Rejected: current validator doesn't support file-list input; would require enhancement. Validator is fast (<1s) so E1 full-pass has no performance concern.
- **E3 hybrid**: full-pass with diff against baseline. Depends on B axis; moot under B2.

### Axis F rejections

- **F1 bundled** (Spore ADR + SKILL.md edit same session): keeps decision+execution coupled in single window; cleaner for operator session-tracking. Rejected: requires Constraint-10 pre-ratification of unrelated `memory/MEMORY.md` parent-session drift; bundles Spore-canon and darren-workflow concerns in one commit cluster. Estimated 20-30 min session-atomic vs F3's 10-15 min. F3 matches spore:ADR-0071 precedent for three-tier-deferred-remediation.
- **F2 Spore-only permanent**: ADR-0072 lands; SKILL.md edit has no named follow-on. Rejected: leaves workflow-hygiene gap open without re-open trigger; weaker than F3.

### Axis G rejection

- **G2 wide** (other darren-workflow skills also gain validator-check hooks): rejected — no evidence-based audit of skill-set exists showing other skills need validator integration. G2 would require honest-rigor audit per ADR-0064 cluster-counting discipline before admission.

### Axis H rejections

- **H1 Spore-only** (hardcoded): future-fragile; hardcodes single-repo assumption. Rejected.
- **H2 multi-repo** (iterate known canon-bearing list): IC + PM have no validator per audit; would no-op. Rejected in favor of H3 detect-and-run.

### Axis I rejections

- **I1 silent** (skip with no output): operator cannot tell whether check ran or validator was absent. Rejected.
- **I3 warn** (warn if absent in canon-bearing repo): requires repo-classification logic. Rejected: classification adds complexity without demonstrated need.

## Evidence

- **Primary parking-source**: spore:ADR-0067 Axis B5 (`/Users/darrenzal/projects/spore/docs/research/canon-decisions/0067-validator-schema-archived-enum.md:144`) — "/end skill validator-check integration deferred... cross-repo edit to `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` needs its own baseline-mechanism design decision."
- **Parent parking-source**: spore:ADR-0065 §Parking lot line 341 (`/Users/darrenzal/projects/spore/docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md`) — "Workflow-discipline validator-check in `/end` skill (flagged during entry-gate investigation; detect untracked-working-tree drift that changes validator baseline between preflight and execution)."
- **Method-precedent sources**:
  - spore:ADR-0071 (cross-repo-projection-script-pm-registration-alignment, 2026-04-24) — A3 SEQUENTIAL three-tier-deferred-remediation precedent; F2 file-path + line-numbers citation shape (no commit-SHA pin); canon-prose-drift vs code-drift distinction method-precedent
  - spore:ADR-0067 (validator-schema-archived-enum-addition, 2026-04-24) — B5 deferral source; additive-enum-vocabulary-admission + atomic-bundle-discipline precedents
  - spore:ADR-0065 (pattern-library-infrastructure-spec, 2026-04-24) — parking-source; decision-gated spec-ADR precedent; audit-then-propose discipline
  - spore:ADR-0062/0063/0064 — decision-gated plan structure with Step 0/0.5/1/2 outside session-atomic window; 2-round `/review-plan` cap with known-ceiling acceptance
- **Canonical evidence sources**:
  - `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` (lines 1-131 at md5 `c2ca8b1ca69d484e8a8dd3dfe6bb67b9`) — target file for deferred SKILL.md edit; natural insertion point after Step 2 (current line ~42) for additive validator-check step
  - `/Users/darrenzal/projects/spore/scripts/validate_spec_dag.py:277-319` — CLI contract (exit 0/1; `FAILED: X error(s), Y warning(s)` summary line; optional `--strict` flag)
  - `/Users/darrenzal/projects/spore/scripts/validate_spec_dag.py:110-119` — `DECISION_RECORD_STATUSES` set + `allowed_statuses_for_doc_kind` selector (context: ruddick incident origin)
  - `/Users/darrenzal/projects/darren-workflow/skills/doc-check/SKILL.md` — precedent for Bash-invoked python script with graceful fallback ("Try the script first, fall back to inline checks")
  - `/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0019-canon-alignment-through-spore-adr-0070.md` — IC validator-absence confirmation
  - `/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0015-canon-alignment-through-spore-adr-0070.md` — PM validator-absence confirmation
- **Step 0 preflight manifest**: `tmp/adr-0072-preflight-manifest.txt` (all 4 HEADs verified; Constraint-10 tripwire on `darren-workflow/memory/MEMORY.md` logged)
- **Step 0.5 audit manifest**: `tmp/adr-0072-audit-manifest-2026-04-25.md` (SKILL.md state + validator interface + cross-repo survey + 9-axis option inventory + axis interactions)
- **Step 1 decision-brief**: `tmp/adr-0072-decision-brief-2026-04-25.md` (9-axis child recommendations + 3 lean bundles; plan content embedded due to sandbox plan-file restriction)
- **Cross-ADR consistency**: ADRs 0065, 0066, 0067, 0068, 0069, 0070, 0071 preserved unchanged. ADR-0072 is additive (workflow-hygiene ADR), not superseding any existing ADR.

## Diff summary

- **New file** (this ADR): `docs/research/canon-decisions/0072-end-skill-validator-check-integration.md`.
- **Unchanged on disk**:
  - `scripts/validate_spec_dag.py` — untouched (ADR-0072 is about skill-integration, not validator modification)
  - `docs/research/planning/canon-review-protocol.md` — untouched (no protocol-level change)
  - `docs/project-vision.md` — untouched (no canon-body change)
  - `docs/foundations/governance-artifacts-and-graph-projections.md` — untouched
  - `docs/research/concepts-p2p-wiki.yaml` — unchanged at v14
  - All existing patterns, canon-decisions, research/connections — untouched
- **NOT touched** (per F3 SEQUENTIAL + read-only discipline + Constraint-10 LEAVE-TO-PARENT):
  - `/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md` (F3 defer to follow-on session; AC9 md5 verification at Step 7.5)
  - `/Users/darrenzal/projects/darren-workflow/memory/MEMORY.md` (Constraint-10 disposition (b); parent-session-owned)
  - IC + PM repositories (read-only; HEAD parity at Step 7.5)
  - koi-processor repository (read-only; out of scope)

## Parking lot

- **Follow-on session: darren-workflow `skills/end/SKILL.md` edit** (per F3 SEQUENTIAL disposition). Scope: insert additive validator-check step in `/end` skill, typically after Step 2 (pre-summary) or as new Step 3 before existing summarize step. Behavior per ratified axes: (a) detect `scripts/validate_spec_dag.py` at current repo-root (or narrow-pattern match); (b) if found, invoke `python3 scripts/validate_spec_dag.py` via Bash; (c) surface full output + summary line in skill report; (d) continue regardless of exit code (D1 warn); (e) if not found, emit one-line note ("No canon validator found; skipping check") and proceed (I2 note). Estimated 3-5 minutes execution; single-file edit in darren-workflow repo. Target cadence: same-week. The follow-on session independently dispositions `memory/MEMORY.md` parent-session drift.
- **Upgrade-path B1 + C1 + D4** (file-persisted baseline + per-session-start refresh + tiered block/warn/silent): preserved as explicit future-work if operational evidence shows D1 warning-surfacing alone insufficient for drift-catchment. Trigger: operator observes repeated untracked-drift incidents despite warning-surfacing at /end.
- **H3 detection-pattern evolution**: if future repos adopt differently-named validators (not `scripts/validate_spec_dag.py`), detection-pattern expansion is a named parking item. Light-touch fix; no canon implication.
- **G2 wide-scope audit**: if operator surfaces evidence that other darren-workflow skills need validator-check hooks, G2 admission would require evidence-based audit per ADR-0064 cluster-counting discipline.
- **ADR-0059b commons-law L53/63/117** (LOW priority) — 3 remaining `constitutional-artifacts` refs in `commons-law-and-charter-lineage.md:53,63,117`. Preserved from ADR-0067/0066/0065 §Parking lot chain.
- **PM canon prose realignment** (ADR-0071 follow-on; LOW): update PM references to `project_bridge_notes.py` to reflect Epistemic-primary role + correct file location.
- **koi-processor infra prose realignment** (ADR-0071 follow-on; LOW): docstring + README + CLAUDE.md reflect Spore+IC+PM coverage.
- **Forward-reference precedent for ADR authorship**: future ADRs that defer to a specific numeric slot should use relative phrasing ("next available ADR") or explicitly accept re-anchoring as normal workflow (not history-rewrite). Parking item for future canon-review-protocol refinement if pattern recurs.

## References

- [docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md](./0065-pattern-library-infrastructure-spec.md) — parent parking source (§Parking lot line 341); decision-gated spec-ADR precedent
- [docs/research/canon-decisions/0067-validator-schema-archived-enum.md](./0067-validator-schema-archived-enum.md) — direct parking source (Axis B5 deferral); additive-enum precedent + atomic-bundle-discipline
- [docs/research/canon-decisions/0071-cross-repo-projection-script-pm-registration-alignment.md](./0071-cross-repo-projection-script-pm-registration-alignment.md) — A3 SEQUENTIAL three-tier-deferred-remediation precedent; F2 citation shape (paths + line numbers, no commit-SHA pin on unsettled edits)
- [scripts/validate_spec_dag.py](../../../scripts/validate_spec_dag.py) — canon validator; CLI contract lines 277-319; DECISION_RECORD_STATUSES set line 110
- [Target file (external): /Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md](/Users/darrenzal/projects/darren-workflow/skills/end/SKILL.md) — deferred edit target; lines 1-131 at md5 `c2ca8b1ca69d484e8a8dd3dfe6bb67b9`
- [Precedent (external): /Users/darrenzal/projects/darren-workflow/skills/doc-check/SKILL.md](/Users/darrenzal/projects/darren-workflow/skills/doc-check/SKILL.md) — Bash-invoked python script with graceful fallback precedent
- [docs/research/connections/canon-rebuild-arc-method-retrospective.md](../connections/canon-rebuild-arc-method-retrospective.md) — canon-rebuild arc method retrospective (companion to wiki-intake-canon-review-retrospective.md)
