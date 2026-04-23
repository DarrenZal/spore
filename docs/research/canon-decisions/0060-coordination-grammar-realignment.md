---
doc_id: spore.canon-decision.coordination-grammar-realignment
doc_kind: decision-record
status: draft
adr_number: "0060"
opened-on: 2026-04-23
closed-on: 2026-04-23
decision: edit
supported_by:
  - /Users/darrenzal/projects/spore/tmp/adr-0060-audit-manifest-2026-04-23.md
  - /Users/darrenzal/projects/spore/tmp/adr-0060-decision-brief-2026-04-23.md
  - /Users/darrenzal/projects/spore/tmp/adr-0060-disposition-log.md
  - /Users/darrenzal/projects/spore/tmp/adr-0060-preflight-manifest.txt
  - /Users/darrenzal/.claude/plans/adr-0060-coordination-grammar-realignment.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0048-power-expressive-constructed-modes.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0049-reproduction-continuity-primitive-admission.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0050-sociality-side-b-plus-primitive.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0051-relational-identity-holon-property.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0053-glossary-refinements-bundled.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0056-phase-2c-semantic-refactoring-bundle.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0059-downstream-bounded-parkings-cleanup.md
authorized-by: "operator directive 2026-04-23 ADR-0060 Step-2 decision-gate: Option R.partial (targeted Edit-tool per-section rewrite) + default section-dispositions (REWRITE §Primitives table + §Graph Projections + §Ground-Truth Traces; PRESERVE other sections; DELETE Self-similarity paragraph) + EXCLUDE cascade-miss (5 ADR-0059 flagged files deferred to ADR-0059a) + default status-line wording + all optional enrichments declined"
queue_reference: "CLAUDE.md post-downstream-propagation-audit queue item: coordination-grammar.md realignment (Category B semantic-weight work from ADR-0059 stratification)"
affects_canon:
  - docs/synthesis/coordination-grammar.md
related_adrs:
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0049-reproduction-continuity-primitive-admission
  - spore:ADR-0050-sociality-side-b-plus-primitive
  - spore:ADR-0051-relational-identity-holon-property
  - spore:ADR-0053-glossary-refinements-bundled
  - spore:ADR-0056-phase-2c-semantic-refactoring-bundle
  - spore:ADR-0058-phase-2c-graph-projections-dual-axis-bundle
  - spore:ADR-0059-downstream-bounded-parkings-cleanup
concepts:
  - joint-commitment
  - reproduction-continuity
  - relational-identity
---

# ADR-0060 — Coordination-Grammar Realignment (9-Primitive Canon + ADR-0058 Graph-Projections + Ground-Truth Trace Honest-Reassessment)

## Status

draft (authored 2026-04-23 under canon-rebuild post-downstream-propagation-audit; awaiting active-commit flip)

## Context

`docs/synthesis/coordination-grammar.md` is the repo's synthesis-layer articulation of Spore's coordination grammar — the doc that sits between canon-layer foundations (`docs/project-vision.md`, `docs/foundations/governance-artifacts-and-graph-projections.md`) and the research-layer connection/bridge notes. As of 2026-04-23 pre-execution, the file's status line read *"Active — updated Phase 12 (review synthesis); 2026-03-28"* — pre-dating the entire 15-ADR canon-rebuild arc (ADRs 0044–0058) + ADR-0059.

The downstream-propagation-audit stratification authored 2026-04-23 (ADR-0059 commit manifest at `tmp/downstream-propagation-audit-manifest-2026-04-23.md`) identified two drift categories:

- **Category A (mechanical)** — bounded parked-item cleanup landed in ADR-0059 (11 substitutions / 5 files / 12-second session-atomic window at commits `0336fa8` / `a92af17`).
- **Category B (semantic)** — coordination-grammar.md realignment requiring comprehensive audit, decision-gate, and section-level rewrite. ADR-0060 executes Category B.

### Drift identified by Step 0.5 audit

The Step 0.5 comprehensive audit (`tmp/adr-0060-audit-manifest-2026-04-23.md`) classified every section of the 303-line doc as PRESERVE / REWRITE / DELETE against current canon (9 primitives + 3 doctrines + 2 modes + 2 properties + 6 derived slugs + ADR-0058 graph-projections treatment). Verdict: **6 PRESERVE / 3 REWRITE** (with targeted Self-similarity paragraph DELETE inside §Primitives).

**§Primitives table** had the most critical drift. The header claimed *"Eleven coordination primitives"* against current canon's 9-primitive roster. The table listed Claim, Attestation, Artifact, and Event as standalone primitives — none of which are members of the current 9-primitive roster per ADR-0044's Core-Thesis alignment. Joint-commitment (ADR-0050, admitted 2026-04-22 as 9th primitive / 6th coordination verb) and Reproduction (ADR-0049, admitted 2026-04-22 as 8th primitive / 5th coordination verb) were both absent. A *"Self-similarity"* paragraph (*"A holon at one scale is a coherent point; at another, it is a graph of these same primitives"*) at line 70 contradicted ADR-0044's Self-similarity-section-deletion and ADR-0056's zoom-invariance-deletion. Holon-irreducibility (ADR-0050 Move 2) and relational-identity (ADR-0051) were not surfaced. Modes-across-primitives (ADR-0048 expressive + constructed power) were absent.

**§Graph Projections** was structurally misaligned with ADR-0058's Phase 2c fragment-and-redistribute verdict. The doc listed 8 flat projections at equal status (Constitutional / Roadmap DAG / Epistemic / Intent hypergraph / Commitment / Event / Flow / Discourse) with no tier distinction. ADR-0058 established 3 *primary projections* at foundation-level (Constitutional / Commitment / Epistemic — each earning primary status under the (a) schema / (b) materialization / (c) query / (d) non-join use case test, mapped 1:1 to spec-DAG tooling / BKC+PM commitment-pools / KOI unified-search) + 5 *view-templates* composable over primaries (Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse). A stale note claimed the Discourse graph had been *"promoted into the current vision as the 8th core projection"* — under ADR-0058 it is a view-template, not a primary.

**§Ground-Truth Traces** carried stale *"All 10 primitives"* instantiation claims in Trace 1 (Dobby relay pilot) and Trace 2 (BKC commitment pooling), and *"fractal applicability"* framing in Trace 3 (personal workflow). Under current 9-primitive canon the honest instantiation counts are 7/9 (Dobby — joint-commitment absent as not-Gilbertian, Reproduction absent as cross-episode), 8/9 (BKC — joint-commitment present as the paradigm Gilbertian case ADR-0050 cites, Reproduction implicit in pool maintenance but not traced), and 6/9 (personal workflow — joint-commitment and Reproduction expected absent for single-operator). *"Fractal applicability"* is stale per ADR-0044's Self-similarity deletion and ADR-0056's zoom-invariance deletion.

### Sections preserved intact

Seven sections contain unique synthesis content that is still correct under current canon and is not duplicated in canon-layer foundation docs:

- **§Grammar Thesis** — three-layer architecture (Grammar / Pattern language / Protocols) + worldview-grammar framing.
- **§Coordination Loop** — 9-phase loop (Sense → Interpret → Claim → Attest → Intend → Commit → Coordinate → Act → Revise) + loop-comparison table (OODA / PDSA / Haeckel / Ruddick / Spore) + Act-note + Ruddick-care-note. The loop is a legitimate synthesis-layer decomposition that operates at different granularity than the 6-verb primitive roster; plan §Risks honors this explicitly.
- **§Relations** — 13 relation types connecting primitives. Uses *Attestation* and *Artifact* as noun-types / relation-actors (not primitive designations), which is valid synthesis-layer usage.
- **§Membrane Operations** — 7 operations (expose/translate/authorize/attest/contest/revoke/fork). All still valid under current canon.
- **§Lifecycle Transitions** — lifecycles for Claims / Commitments / Attestations / Artifacts / Intents / Events. All remain valid descriptions of state-evolution; Events-as-state-records and Artifacts-as-durable-outputs are legitimate non-primitive concepts with governed transitions.
- **§Worldview Grammar** — 5-layer worldview table (Ontological / Epistemological / Axiological / Praxical / Ethical) + 3 test cases (IndigenomicsAI / BKC / Personal workflow).
- **§Distillation Stack** — 6-layer distillation (Headline → Functional). Functional layer's loop-phase verbs are loop-phases, not primitive names.

Option S (supersede-and-stub) was considered and declined at the Step 2 operator decision-gate: superseding the doc would destroy these six sections' unique synthesis value, and the synthesis function is NOT fully absorbed by project-vision.md's Core Thesis (which focuses on canon-layer primitive definitions, not the loop-comparison table, worldview-layer test cases, relations table, or operational traces).

## Decision

Execute **Option R.partial** per operator directive 2026-04-23 (Step-2 decision-gate):

1. **Rewrite §Primitives** to reflect the 9-primitive roster (3 structural + 6 verbs). Separate tables for structural primitives (Field / Holon / Membrane) and coordination verbs (Intent / Commitment / Joint-commitment / Evidence / Signal / Reproduction), each with inline ADR-references for the precedents that land the current form. Add a new callout *"On Claims, Attestations, Artifacts, and Events as non-primitives"* preserving these concepts as legitimate synthesis-layer elements without re-promoting them to primitive status. Reference cross-cutting doctrines (3), modes-across-primitives (2), and properties on primitives (2) as orientation. Parsimony-at-9 framed as earning-test outcome, not axiom (ADR-0048).

2. **Delete Self-similarity paragraph** (former line 70). Mandatory per ADR-0044 Self-similarity-section-deletion precedent in project-vision.md and ADR-0056 zoom-invariance-deletion precedent in governance-artifacts-and-graph-projections.md.

3. **Rewrite §Graph Projections** to the ADR-0058 2-tier structure: 3 primary projections (Constitutional / Commitment / Epistemic) in a materialization-annotated table, followed by 5 view-templates (Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse) in a composes-over-annotated table. Remove the stale *"discourse graph promoted as 8th core projection"* note. Rewrite the DAG-and-coordination-substrate paragraph to reflect primary-projection structure variety (no longer a flat *"six other projections"* count). Add a brief earning-test rationale paragraph noting ADR-0058 supersedes-via-prose ADR-0036's earlier primary-set on materialization grounds.

4. **Rewrite §Ground-Truth Traces assessments** with honest 9-primitive-canon instantiation counts:
   - Trace 1 (Dobby relay pilot): "7 of 9 primitives clearly instantiated" — Field + Holon + Membrane + Intent + Commitment + Evidence + Signal. Joint-commitment absent (bilateral edge registration, not Gilbertian irreducibly-joint binding). Reproduction absent (cross-episode, not present in single-pilot trace).
   - Trace 2 (BKC commitment pooling): "8 of 9 primitives clearly instantiated" — including explicit naming of Joint-commitment *as the paradigm Gilbertian case ADR-0050 cites* (pool-formation, multi-party governance rules, NOAM clearing, federation protocol-version adoption as multi-party-simultaneous-by-construction). Reproduction implicit in ongoing pool maintenance but cross-episode and not explicitly traced.
   - Trace 3 (Personal workflow): "6 of 9 primitives clearly instantiated" — Field + Holon + Membrane + Intent + Commitment + Signal (Evidence implicit). Joint-commitment and Reproduction are not single-operator concepts; their absence is expected. Replace *"fractal applicability"* with *"smallest scale Spore has reached"* framing matching current canon language (per ADR-0031/0032 scope-conditioning discipline).

5. **Update Status line** to `**Status:** Active — updated 2026-04-23 (9-primitive canon alignment per ADR-0060)` + `**Date:** 2026-04-23`.

6. **PRESERVE seven sections verbatim**: §Grammar Thesis, §Coordination Loop, §Relations, §Membrane Operations, §Lifecycle Transitions, §Worldview Grammar, §Distillation Stack. All contain still-valid unique synthesis not duplicated in canon-layer foundation docs.

7. **Four optional enrichments DECLINED at Step 2** (deferred to focused follow-on ADRs if operator finds them valuable later): joint-commitment lifecycle row in §Lifecycle Transitions; Reproduction lifecycle row in §Lifecycle Transitions; permeability / double-boundary notes in §Membrane Operations; modes-across-primitives paragraph after §Primitives table.

8. **EXCLUDE cascade-miss inheritance**: the 5 ADR-0059-flagged files outside its 13-file target set (commons-law-and-charter-lineage.md ×3 / human-economy-batch-2-prep.md:33 / instrumentation-evidence-design-batch-1.md:104 / johar-brain-self-rewriting-field.md:112 / intent-pressure.md:20) remain deferred to ADR-0059a or equivalent focused follow-on. ADR-0060 scope stays focused on coordination-grammar.md.

### Scope frozen at the Step 2 decision

Per plan §Constraints: no drift into Option R.full or Option S mid-execution. The 3 REWRITE sections + 1 DELETE paragraph + status-line update + doc_id preservation constitute the complete scope of ADR-0060.

## Consequences

### Immediate

- `docs/synthesis/coordination-grammar.md` now accurately reflects the 9-primitive roster + ADR-0058 graph-projections tier structure + honest trace primitive-instantiation counts. Stale *"Eleven"* / *"All 10 primitives"* / *"fractal applicability"* / Self-similarity framings removed. Joint-commitment (ADR-0050) and Reproduction (ADR-0049) surfaced as first-class coordination verbs. Holon-irreducibility (ADR-0050), relational-identity (ADR-0051), and derived slugs (attestation-of-execution, permeability, double-boundary — ADR-0053) referenced via inline ADR-pointers.

- Synthesis-layer doc now serves as a current-canon-accurate bridge between canon-layer foundations (project-vision.md / governance-artifacts-and-graph-projections.md) and research-layer bridge-notes. Inbound links remain valid (doc_id unchanged).

- Validator baseline held at 9/30 across the edit (verified post-edit).

### Preserved residues

- **Optional enrichments deferred**: four enrichment candidates (joint-commitment + Reproduction lifecycles; permeability + double-boundary membrane-operation notes; modes-across-primitives paragraph) are not prohibited — they remain authorizable via focused follow-on ADRs if operator finds them valuable. The current ADR-0060 scope choice reflects a discipline preference for scoped correction over comprehensive enrichment, consistent with R.partial's precision-over-comprehensiveness profile.

- **Cascade-miss parking**: 5 files from ADR-0059's broader audit scope remain parked. Whether they warrant ADR-0059a or can fold into a future bulk-housekeeping commit is a separate operator decision.

- **Attestation / Artifact / Event / Claim as non-primitives**: the rewritten §Primitives explicitly addresses these as *"first-class concepts in the synthesis"* while making clear they are not 9-primitive-roster members. §Relations and §Lifecycle Transitions continue to use these terms as noun-types / state-record concepts — this is valid synthesis-layer usage and does not re-admit them as primitives.

### Canon object-class inventory preserved

ADR-0060 is *canon-adjacent synthesis-layer alignment*, not canon-layer edit. It:

- Creates no new primitives, doctrines, modes, properties, or derived glossary slugs.
- Does not modify project-vision.md or foundations/ docs.
- Does not bump the concepts yaml (remains v12).
- Does not re-evaluate any primitive / doctrine / mode / property / derived-slug disposition.

The ADR operates at the synthesis layer to bring one synthesis doc into alignment with canon that was already established across the 15-ADR canon-rebuild arc (ADRs 0044–0058) + ADR-0059.

### Method-insights

1. **Audit-first discipline validated**. A 10-section drift classification against current canon (not against memory of what the doc said) surfaced that 6 of 10 sections survive intact — a finding that R.full execution would have blurred by touching all sections regardless. Preserving 7 sections verbatim is the correct precision move for synthesis-layer doc-drift of this mixed-density profile.

2. **Option S's synthesis-absorption assumption tested honestly**. The Option S candidate rested on "synthesis function absorbed by Core Thesis." Step 0.5 audit tested the assumption per-section and found it false: the loop-comparison table, worldview-layer test cases, relations table, and operational traces are not duplicated in canon-layer foundation docs. Declining Option S preserves real synthesis value.

3. **Honest primitive-instantiation counts over forced-parity**. Rather than force every Ground-Truth Trace to claim 9/9, the rewrite preserves honest per-trace counts (7/9, 8/9, 6/9). This matches ADR-0049's parsimony-as-earning-test-outcome discipline — a trace that doesn't exercise a primitive is a valid trace, not a grammar failure. The honest Trace-2 assessment *strengthens* the canon-trace alignment by identifying BKC pool-formation as the paradigm Gilbertian joint-commitment case ADR-0050 cites.

4. **Synthesis-layer is downstream of canon-layer in the propagation stratification**. ADR-0059 handled mechanical cleanup (Category A) in a 12-second window; ADR-0060 handles semantic-weight realignment (Category B) in a longer window because mixed-density drift requires audit-first decision-gated execution rather than mechanical substitution. The two-ADR split by drift-shape (operator-selected Option C stratification) was the correct topology.

5. **ADR-059a parking discipline**: deferring cascade-miss items keeps ADR-0060 scope tight. Bundling them in would have mixed two audit-trails (ADR-0059's per-file cleanup audit and ADR-0060's per-section drift classification) into a single ADR, obscuring both. Scope discipline at the Step 2 gate pays off in clean audit trail.

## Verification

- **Validator**: `scripts/validate_spec_dag.py` returns 9 errors / 30 warnings pre and post (verified via `tmp/adr-0060-validator-pre.txt` and `tmp/adr-0060-validator-post.txt`).
- **Stale-term greps** in `docs/synthesis/coordination-grammar.md`: `11 primitive` / `eleven primitive` / `Self-similarity` / `fractal applicability` / `zoom.invariance` all return 0.
- **Preserved-term greps** in `docs/synthesis/coordination-grammar.md`: `9 primitive` or `Nine primitive` returns ≥1; `joint.commitment` returns ≥1; `reproduction` (case-insensitive) returns ≥1.
- **Session-atomic window**: draft-commit → active-commit author-date delta ≤ 35 minutes (verified in close-out manifest).
- **Changed-file allowlist** (Step 7.5): `git diff --name-only $PREEXEC_SHA..$ACTIVE_SHA` returns exactly `{docs/synthesis/coordination-grammar.md, docs/research/canon-decisions/0060-coordination-grammar-realignment.md}`.
- **Active-commit diff minimal**: `git diff --name-only $DRAFT_SHA..$ACTIVE_SHA` returns 1 line (ADR-0060 file only, status flip draft→active).

## References

- Plan: `~/.claude/plans/adr-0060-coordination-grammar-realignment.md`
- Audit manifest: `tmp/adr-0060-audit-manifest-2026-04-23.md`
- Decision-brief: `tmp/adr-0060-decision-brief-2026-04-23.md`
- Disposition log: `tmp/adr-0060-disposition-log.md`
- Preflight manifest: `tmp/adr-0060-preflight-manifest.txt`
- Parent ADR for Category B stratification: ADR-0059 (`docs/research/canon-decisions/0059-downstream-bounded-parkings-cleanup.md`)
- Canon baselines: ADR-0044 (9-primitive-roster-predecessor 7-primitive), ADR-0048 (modes + parsimony-as-earning-test), ADR-0049 (Reproduction admission), ADR-0050 (Joint-commitment admission + Holon irreducibility), ADR-0051 (relational-identity property), ADR-0053 (glossary refinements: attestation-of-execution / permeability / double-boundary), ADR-0056 (zoom-invariance deletion + Self-similarity precedent), ADR-0058 (graph-projections 3-primary + 5-view-template tier structure)

---

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
