---
doc_id: spore.canon-decision.view-template-catalog-pattern
doc_kind: decision-record
status: draft
adr_number: "0070"
date: 2026-04-24
opened-on: 2026-04-24
decision: admit
depends_on:
  - spore.canon-decision.phase-2c-graph-projections-dual-axis-bundle
  - spore.canon-decision.pattern-library-infrastructure-spec
  - spore.governance-artifacts
  - spore.project-vision
r_claim_source:
  - spore.canon-decision.phase-2c-graph-projections-dual-axis-bundle:graph-projections-realignment
  - spore.governance-artifacts:graph-projections
  - spore.project-vision:dual-representation
r_claim_statement: |
  ADR-0058 demoted five previously-flat graph projections — Roadmap DAG, Intent
  hypergraph, Event, Routing/flow, and Discourse — from foundation-level status to
  view-template status, parking a future pattern-library admission cycle once
  pattern infrastructure existed. ADR-0065 later introduced the M4 catalog-pattern
  sub-class and explicitly treated view-template as its motivating exemplar at N=5.

  Step 0.5 audit for ADR-0070 found that the candidate clears the catalog-pattern
  earning-test under the strict rubric. (α-cat) passes: all five view-templates are
  legitimate and independently motivated. (β-cat) also passes on all three arms:
  the host structure is canon-body articulated beyond ADR-0058 parking in
  `governance-artifacts-and-graph-projections.md`, `project-vision.md`, and
  `coordination-grammar.md`; per-sub-entity demonstration is present for each view
  via canonical articulation and, in several cases, stronger operational evidence;
  and the composition rule is explicit — each view is a specialization of, or
  join-derivable from, the three-primary graph-projection substrate rather than
  requiring separate foundational status or inter-view algebra.
supported_by:
  - spore:ADR-0058-phase-2c-graph-projections-dual-axis-bundle
  - spore:ADR-0065-pattern-library-infrastructure-spec
  - spore:ADR-0068-federation-encounter-composition-pattern
  - spore:ADR-0069-four-enabling-conditions-design-criteria-pattern
  - /Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md
  - /Users/darrenzal/projects/spore/tmp/adr-0070-audit-manifest-2026-04-24.md
  - /Users/darrenzal/projects/spore/tmp/adr-0070-decision-brief-2026-04-24.md
authorized_by: "operator directive 2026-04-24 ADR-0070 Step-2 decision-gate: A1 ADMIT; B1 verbatim ADR-0058 five-view list; C1 N>=3 floor with actual N=5; D1 docs/patterns/view-template.md; E1 minimum resolvable edges only; F2 yaml v13->v14 with single slug `view-template`; G1 standalone ADR; Constraint-10 `M CLAUDE.md` tripwire pre-ratified as parent-session housekeeping."
queue_reference: "ADR-0058 view-template parking + ADR-0065 Wave-2 M4 catalog-pattern admission queue; third and final Wave-2 pattern-library admission completing the M4 trifecta validation with ADR-0068 admit and ADR-0069 decline."
affects_canon:
  - docs/research/canon-decisions/0070-view-template-catalog-pattern.md
  - docs/patterns/view-template.md
  - docs/research/concepts-p2p-wiki.yaml
  - docs/patterns/README.md
related_adrs:
  - spore:ADR-0058-phase-2c-graph-projections-dual-axis-bundle
  - spore:ADR-0065-pattern-library-infrastructure-spec
  - spore:ADR-0068-federation-encounter-composition-pattern
  - spore:ADR-0069-four-enabling-conditions-design-criteria-pattern
concepts:
  - view-template
---

# ADR-0070 — View-Template Catalog-Pattern Admission (Third and Final Wave-2 Pattern-Library Admission)

## Status

draft (opened 2026-04-24 under `adr-0070-view-template-catalog-pattern` decision-gated plan; operator ratified `A1/B1/C1/D1/E1/F2/G1` on 2026-04-24 with Constraint-10 `M CLAUDE.md` pre-ratified as parent-session housekeeping).

## Context

### Parking source and admission frame

ADR-0058 (`docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md`, 2026-04-23) realigned the graph-projection tiering and demoted five previously-flat projections from foundation-level status to view-template status:

- **Roadmap DAG**
- **Intent hypergraph**
- **Event**
- **Routing/flow**
- **Discourse**

ADR-0058 parked these five views for later pattern-library treatment rather than deleting them from canon. The load-bearing claim was that each remained a legitimate analytical view, but each was more honestly understood as composable over the three primary graph projections than as independently primary at foundation-level.

ADR-0065 (`docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md`, 2026-04-24) then introduced the M4 catalog-pattern sub-class and explicitly treated `view-template` as the reference exemplar for that sub-class: a catalog of five legitimate sub-entities whose coherence depends on a named host substrate rather than on instance-family recurrence or tradition-cluster grounding.

### Step 0.5 audit findings

The Step 0.5 audit established the following facts:

1. **(α-cat) passes cleanly.** All five views remain independently motivated rather than filler-members. Roadmap DAG answers temporal-ordering questions; Intent hypergraph captures pre-binding multi-party offers/needs/conditions; Event captures temporal state-change records; Routing/flow surfaces circulation paths through commitment pools; Discourse captures governance-revision and argumentation structure.
2. **Host-structure articulation is canon-body resident, not only ADR-parking prose.** `docs/foundations/governance-artifacts-and-graph-projections.md`, `docs/project-vision.md`, and `docs/synthesis/coordination-grammar.md` all articulate the three primary projections plus the five composable view-templates.
3. **The composition / aggregation rule is explicit.** The five views bind into one catalog because each is a specialization of, or join-derivable from, the same three-primary substrate: Constitutional / Commitment / Epistemic. No inter-view algebra is needed for catalog integrity.
4. **Per-sub-entity demonstration is uneven in quality but present for all five.** Audit ratings were: Roadmap DAG `STRONG`, Intent hypergraph `WEAK`, Event `PARTIAL`, Routing/flow `STRONG`, Discourse `PARTIAL`. Under ADR-0065's OR-clause, `WEAK` still clears the arm when canonical articulation is present even if operational demonstration remains thinner.
5. **No redundancy blocker surfaced against ADR-0068 federation-encounter.** Event and Discourse views can appear within federation-encounter contexts, but that does not collapse the catalog. ADR-0068 is a coordination recipe; ADR-0070 is an analytical projection catalog.

### Canon baseline preserved by this ADR

- Canon object-class inventory remains at four categories.
- Pattern inventory will increase from six to seven in-scope patterns once activated.
- `docs/research/concepts-p2p-wiki.yaml` will move from v13 to v14 with a single new slug `view-template`.
- ADR-0058 remains unchanged as the historical parking source.

## Decision

**Admit `view-template` as a catalog-pattern under ADR-0065's M4 sub-class framework.**

Seven-axis ratification per operator Step-2 approval:

- **Axis A = A1 ADMIT.** All three β arms pass at threshold and α passes cleanly. Scope-conditioning would misread constituent-quality spread as threshold failure.
- **Axis B = B1 verbatim ADR-0058 five-view list.** The admitted members are `Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse` without refinement or extension.
- **Axis C = C1 N>=3 floor.** Actual N=5 comfortably exceeds the catalog floor while preserving ADR-0065's no-hard-threshold discipline.
- **Axis D = D1 new pattern doc.** The catalog is authored at `docs/patterns/view-template.md` using the existing C3-tiered pattern schema.
- **Axis E = E1 minimum resolvable edges.** `depends_on:` is limited to canon surfaces with real `doc_id`s, and `concepts:` carries only the admitted `view-template` slug. The five sub-entities and the three primary projections are carried in body prose rather than fabricated frontmatter references because no standalone canon slugs or doc_ids exist for them today.
- **Axis F = F2 yaml bump.** `docs/research/concepts-p2p-wiki.yaml` moves `v13 -> v14` and admits only the catalog slug `view-template`. No individual sub-entity slugs are minted.
- **Axis G = G1 standalone ADR.** ADR-0058 is preserved as-fired; admission status is recorded by cross-reference in ADR-0070 rather than bundled parking-source edits.

### What this ADR does

- Authors new ADR file `docs/research/canon-decisions/0070-view-template-catalog-pattern.md` (this file).
- Authors new pattern doc `docs/patterns/view-template.md`.
- Bumps `docs/research/concepts-p2p-wiki.yaml` from `v13` to `v14` and registers the single slug `view-template`.
- Updates `docs/patterns/README.md` so `view-template` moves from parked candidate to currently-admitted pattern and the parked-candidate count reduces from two to one.
- Completes the third and final Wave-2 pattern-library admission cycle under ADR-0065's M4 framework.

## Consequences

### Method precedent

- **Wave-2 M4 trifecta is complete.** ADR-0068 admitted a composition-pattern, ADR-0069 declined a design-criteria-pattern with triggers, and ADR-0070 admits a catalog-pattern. All three M4 sub-classes have now been exercised in one sweep.
- **M4 demonstrates filtering power rather than rubber-stamping.** The Wave-2 outcome is `2 admits + 1 decline`, which is stronger evidence of framework quality than three admissions would have been.
- **Canon-body-articulated host-structure becomes a high-quality β evidence tier.** ADR-0070 is the clearest Wave-2 case where host structure is not merely parked in ADR prose but restated across canon body.
- **Constituent-quality spread is distinguished from threshold failure.** `STRONG / PARTIAL / WEAK` variation across catalog members remains a real quality concern, but it does not itself invalidate admission when ADR-0065's OR-clause is still satisfied for each member.

### Canon-state consequences

- **Seven admitted patterns now exist in scope.** `view-template` joins the existing six pattern docs as the first admitted catalog-pattern.
- **The five demoted views gain a stable umbrella without being re-promoted.** The catalog names them together while preserving ADR-0058's primary / view-template tier honesty.
- **No new object-class or sub-entity slug inflation occurs.** The canon gains one catalog slug rather than six new glossary entries.

### Cross-cutting consequences

- **Body prose carries non-resolvable structure.** Because the five view members and the three primary projections do not yet have standalone slugs or doc_ids, the catalog's internal structure lives in prose rather than frontmatter graph edges.
- **Future strengthening remains open without blocking admission.** Intent hypergraph, Event, and Discourse can accumulate stronger operational demonstrations later without forcing a scope-conditioned admission today.
- **Primary re-evaluation remains possible in principle.** If a future view-template member earns independent schema, materialization, query pattern, and non-join use case, it can exit the catalog and be re-evaluated for foundation-level status without invalidating ADR-0070's present admission.

## ACs

1. ADR-0070 is authored as a standalone ADR at `docs/research/canon-decisions/0070-view-template-catalog-pattern.md`.
2. ADR-0070 records `A1/B1/C1/D1/E1/F2/G1` explicitly in body prose.
3. ADR-0070 states the five admitted sub-entities verbatim as `Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse`.
4. ADR-0070 states that the host substrate is the three primary graph projections `Constitutional / Commitment / Epistemic`.
5. ADR-0070 records the composition rule as specialization-of or join-derivable-from the three-primary substrate.
6. ADR-0070 distinguishes constituent-quality spread from threshold failure under ADR-0065's OR-clause.
7. `docs/patterns/view-template.md` is authored with C3-tiered pattern frontmatter.
8. `docs/patterns/view-template.md` names all five sub-entities and the host-substrate rule.
9. `docs/research/concepts-p2p-wiki.yaml` moves from `v13` to `v14`.
10. `docs/research/concepts-p2p-wiki.yaml` adds only the slug `view-template`.
11. No individual sub-entity slugs are added for the five view members.
12. `docs/patterns/README.md` moves `view-template` from parked candidate prose into the currently-admitted patterns table.
13. `docs/patterns/README.md` updates the parked candidate count from two to one.
14. ADR-0058 remains unchanged on disk.
15. Validator output after authoring remains `FAILED: 9 error(s), 30 warning(s)`.
16. IC and PM HEAD-end SHAs equal their Step-0 baselines exactly.
17. Explicit-path staging only; no `git add -A` and no `git add .`.

## Evidence

- **Parking source**: ADR-0058 `docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md`.
- **Catalog-pattern rubric**: ADR-0065 Exhibit 3 `docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md`.
- **Canon-body host-structure articulation**:
  - `docs/foundations/governance-artifacts-and-graph-projections.md` §Graph Projections
  - `docs/project-vision.md` §Dual Representation
  - `docs/synthesis/coordination-grammar.md` §Graph Projections
- **Step 0 preflight manifest**: `tmp/adr-0070-preflight-manifest.txt`.
- **Step 0.5 audit manifest**: `tmp/adr-0070-audit-manifest-2026-04-24.md`.
- **Step 1 decision brief**: `tmp/adr-0070-decision-brief-2026-04-24.md`.
- **Operator Step-2 ratification**: 2026-04-24 directive selecting `A1/B1/C1/D1/E1/F2/G1` and pre-ratifying Constraint-10 handling for `M CLAUDE.md`.

## Diff summary

- **New file**: `docs/research/canon-decisions/0070-view-template-catalog-pattern.md` (this file).
- **New file**: `docs/patterns/view-template.md`.
- **Canon edits**:
  - `docs/research/concepts-p2p-wiki.yaml`: `v13 -> v14`, add `view-template`.
  - `docs/patterns/README.md`: add `view-template` to admitted table; reduce parked-candidate count to one; refresh sub-class exemplars to reflect ADR-0068/0069/0070 state.
- **Unchanged on disk**: ADR-0058, governance-artifacts canon body, project-vision, coordination-grammar, validator, CLAUDE.md.

## Parking lot

- **Selective sub-entity slugification only if citation pressure emerges.** If Roadmap DAG, Intent hypergraph, Event, Routing/flow, or Discourse later need standalone canonical citation surfaces, a future ADR can evaluate F4-style selective slugification.
- **Primary-status re-evaluation remains open for Discourse or other members.** `coordination-grammar.md` already notes that Discourse could merit future primary review if full implementation matures.
- **Wave-3 optional backfill on typed pattern edges.** If catalog-pattern frontmatter needs richer resolvable edges later, a future infrastructure ADR can define them without retroactively inflating ADR-0070.

## References

- [docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md](./0058-phase-2c-graph-projections-dual-axis-bundle.md) — parking source and five-view demotion.
- [docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md](./0065-pattern-library-infrastructure-spec.md) — M4 framework and catalog-pattern earning-test.
- [docs/research/canon-decisions/0068-federation-encounter-composition-pattern.md](./0068-federation-encounter-composition-pattern.md) — sibling admit-shape precedent.
- [docs/research/canon-decisions/0069-four-enabling-conditions-design-criteria-pattern.md](./0069-four-enabling-conditions-design-criteria-pattern.md) — sibling decline-with-triggers precedent and honest-rigor comparison.
- [docs/foundations/governance-artifacts-and-graph-projections.md](../../foundations/governance-artifacts-and-graph-projections.md) — host-structure articulation in canon body.
- [docs/project-vision.md](../../project-vision.md) — parallel host-structure articulation.
- [docs/synthesis/coordination-grammar.md](../../synthesis/coordination-grammar.md) — view-template table and future-primary note for Discourse.
- [docs/patterns/view-template.md](../../patterns/view-template.md) — pattern doc authored by this ADR.
- [docs/patterns/README.md](../../patterns/README.md) — pattern catalog updated by this ADR.
- [docs/research/concepts-p2p-wiki.yaml](../concepts-p2p-wiki.yaml) — concept registry updated by this ADR.
