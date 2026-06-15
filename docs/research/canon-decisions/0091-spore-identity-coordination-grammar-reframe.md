---
doc_id: spore.canon-decision.spore-identity-coordination-grammar-reframe
doc_kind: decision-record
status: active
adr_number: "0091"
decision: edit
opened-on: 2026-06-15
closed-on: 2026-06-15
covers: []
authorized-by: reframing-spore-identity
supported_by:
  - docs/research/planning/reframing/reframing-spore-identity.md
  - tmp/cross-repo-consultation-reframing-spore-identity.md
  - docs/research/synthesis/coherence-without-collapse-and-its-projections.md:88-91
  - README.md:7
  - README.md:13
  - docs/project-vision.md:10
  - docs/README.md:3
affects_canon:
  - README.md
  - docs/README.md
  - docs/project-vision.md
related_adrs:
  - spore:ADR-0031-ecology-cycle-scope-conditioning
  - spore:ADR-0032-core-thesis-primitives-scope-conditioning
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0035-vision-as-commitment-subtype
  - spore:ADR-0083-graduate-meta-vision-memo-to-positioning
shared_framing: ""
---

# ADR-0091: Reframe Spore's identity sentence to "coordination grammar"

## Status

Active. Reframed identity sentence ratified and applied to four surfaces (`README.md:7`, `README.md:13`, `docs/project-vision.md:10`, `docs/README.md:3`) on 2026-06-15. Authorized by foundational-reframing proposal `reframing-spore-identity`.

## Context

Spore's identity sentence appeared on its two canonical surfaces with an **agency-enablement lead** — *"An infrastructure for collective agency — a common grammar for plural, sovereign coordination across scales and scopes"* (`README.md:7`; `docs/project-vision.md:10`). The lead named what Spore *enables* and gestured at the grammar role only in a second clause.

The 2026-06-02 repo-constellation strategy work (`~/.claude/plans/so-i-had-this-proud-kahn.md` Track B; `docs/research/synthesis/coherence-without-collapse-and-its-projections.md`) established that Spore has turned out to be the **upstream coordination grammar** — Layer 1 in the four-layer integration architecture — that Intelligence Commons, bregion, BKC, bioregional-economics, Poietic Match, and the non-canon applications (CIE, the RC financing facility, the GPU node network) each instantiate or consume. The identity sentence under-named that role. This is not a contradiction (as `reframing-pm-canon-scope` was) but an **identity the work outgrew**.

The reframe is routed through the foundational-reframing ceremony per **FR-2** (a change that *"alters a layer's identity"* defaults here, not to a doc-local canon-review ADR), via proposal `reframing-spore-identity` (committed `652e021` 2026-06-02; `cooling-off → eligible` `de3904f` 2026-06-15). This is the *narrowest* canon-scope sub-case — the self-description wording, not a governed-surface boundary.

**Gate cleared (FR-12 / FR-13 / FR-14):** cooling-off elapsed (`eligible-on: 2026-06-09`; eligible-flip author-date 2026-06-15 ≥ eligible-on); the consultation artifact (`tmp/cross-repo-consultation-reframing-spore-identity.md`) records `frame-change-required: yes` and `ADR drafting may begin: on or after 2026-06-09`; no `depends-on:` parents. This ADR cites the proposal in `authorized-by:` per **FR-24** (single-line bare slug).

**Validator baseline at drafting: 8 errors / 267 warnings.** The long-standing 9/267 baseline improved to 8 via the 2026-06-12 commit `acfd761` (johar-metacognition-stack `depends_on` repoint, which fixed a dangling-reference error) — a legitimate committed improvement, not drift. This ADR holds **8/267 EXACT**.

## Decision

Ratify the reframed identity sentence — **math-quiet Option A**, lead noun *coordination grammar*, *collective agency* named as the grammar's purpose, coherence claim scoped to *"the scales it has reached"* — and apply it to **four Spore-local surfaces**:

**1. `README.md:7`** (standalone tagline)
- before: *An infrastructure for collective agency — a common grammar for plural, sovereign coordination across scales and scopes.*
- after: *Spore is a coordination grammar for collective agency across plural, sovereign systems — for local-to-global coherence at the scales it has reached.*

**2. `docs/project-vision.md:10`** (constitutional identity sentence; `"infrastructure for collective agency"` retained as a secondary clause; normative-commitments continuation preserved)
- before: *Spore is an infrastructure for collective agency — a common grammar for plural, sovereign coordination across scales and scopes. It operates across the normative commitments…*
- after: *Spore is a coordination grammar for collective agency across plural, sovereign systems — for local-to-global coherence at the scales it has reached. As shared infrastructure for that agency, it operates across the normative commitments…*

**3. `README.md:13`** (light echo-harmonization — keep *"remain interoperable"*, add *"and stay coherent across them"*)
- before: *…grow in different forms, and remain interoperable without requiring centralization.*
- after: *…grow in different forms, and remain interoperable and stay coherent across them without requiring centralization.*

**4. `docs/README.md:3`** (the docs-landing identity sentence — the fourth same-repo surface carrying the old lead verbatim; refreshed for coherence so the docs index does not contradict the reframed project-vision. **Beyond the proposal's minimum 3-site set; operator-ratified 2026-06-15.**)
- before: *Spore is an infrastructure for collective agency — a common grammar for plural, sovereign coordination across scales and scopes. It develops and publishes **Agent Commons**:…*
- after: *Spore is a coordination grammar for collective agency across plural, sovereign systems — for local-to-global coherence at the scales it has reached. It develops and publishes **Agent Commons**:…*

**Compliance with the six binding constraints** (proposal §"Constraints on the final wording"):
1. **Math-quiet** — no sheaf / topology / cohomology / "engine" terms. ✓
2. **Preserve `"plural, sovereign"`; scope coherence to `"the scales it has reached"`.** ✓
3. **Spore / Agent-Commons distinction untouched** (`README.md:11`; `docs/project-vision.md:12`). ✓
4. **Distinct edit per site** (not a find-replace). ✓
5. **`"coordination grammar"` lead noun; `"collective agency"` named as purpose in the lead**; *"infrastructure for collective agency"* survives as a secondary clause in project-vision (*"As shared infrastructure for that agency…"*). ✓
6. **No achieved/universal coherence claim** — the line states purpose/orientation (*"for local-to-global coherence"*), scoped to *"the scales it has reached"*; it does not assert achieved or universal coherence. ✓

## Consequences

- **"across scales and scopes" → "at the scales it has reached" is a deliberate scope-discipline tightening, not an oversight.** The binding Constraint 2 (preserve `"plural, sovereign"`; scope coherence to *"the scales it has reached"*) and the anti-overclaim Constraint 6 govern the final glyph; the proposal's looser ADR-plan item-3 paraphrase mentioned preserving *"across scales and scopes"* verbatim, but that phrase is the universality-adjacent framing ADR-0031 / ADR-0032 / ADR-0044 disciplined. The reframe replaces it with *"across plural, sovereign systems … at the scales it has reached,"* which preserves the scale dimension while honoring the scope-discipline. Recorded here so the divergence from the item-3 paraphrase is auditable.
- **No wave-N+1 alignment fires.** Identity-phrasing is not a foundation/canon-doctrine change (per the upstream/downstream canon-propagation discipline). IC / PM / bregion reference *"upstream Spore"* generically; the consultation audit found no downstream surface quoting the old lead verbatim.
- **In-repo verbatim hits accounted for.** The old lead appears verbatim at four canon-ish surfaces (`README.md:7`, `docs/project-vision.md:10`, `docs/README.md:3`, plus the `README.md:13` echo) — all refreshed here. Three further hits are **historical/excerpt artifacts deliberately left untouched**: a source-excerpt in `corpus-foundational-review-findings.md:237`, and two dated 2026-04-03 research snapshots (`podcast-context-spore-agent-commons.md`, `deep-research-prompt-2026-04.md`).
- **Proposal lifecycle:** `reframing-spore-identity` transitions `cooling-off → eligible (de3904f) → authorized-ADR (this draft) → executed` across this ADR's commit set; affected SHAs recorded in the proposal's §Execution record at `executed`.

## Evidence

- **Proposal** — `docs/research/planning/reframing/reframing-spore-identity.md` (`status: eligible` 2026-06-15; six binding constraints; Codex x-high adversarial review applied 2026-06-02).
- **Consultation artifact** — `tmp/cross-repo-consultation-reframing-spore-identity.md` (`frame-change-required: yes`; `ADR drafting may begin: on or after 2026-06-09`).
- **Synthesis honest ledger** — `docs/research/synthesis/coherence-without-collapse-and-its-projections.md` §7: *"local-to-global coherence"* recorded as **earned (frontstage-ready)**; the math-forward identity claim recorded as **parked** (Option B excluded).
- **Current-line citations verified 2026-06-15** — `README.md:7`, `docs/project-vision.md:10`, `docs/README.md:3`, `README.md:13` (all four carried the old lead before this ADR).

## Diff summary

Four edit sites across three files (`README.md` ×2, `docs/project-vision.md` ×1, `docs/README.md` ×1). No new frozen-vocab slug — **FR-18 does not fire**; no `concepts-p2p-wiki.yaml` change. No layer move, rename, or topology change. Validator **8/267 EXACT** held.

## Open Questions

- Should `coherence-without-collapse-and-its-projections.md` graduate `research → positioning` now that the identity line and its backstage rationale could be co-located? **Out of scope here**; flagged for later disposition (proposal §Open questions).

## Rollback

Non-destructive (FR-27 / FR-28). Revert the ADR commit set newest-first to restore the prior identity sentence and README paragraph; the reframe is a few-line edit across three files (four sites). The only rollback risk is downstream drift — none introduced, since no downstream surface was refreshed (consultation audit found no verbatim downstream quote).

## Parking

- Optional light downstream refresh if any IC / PM / bregion-economics surface is later found to quote the old lead verbatim (consultation audit found none; not part of this ADR).
