# ADR-0070 Decision Brief

Date: 2026-04-24
Scope: Step 1 only. This brief surfaces options and child recommendations. It does not authorize Step 3+ execution.

## Executive read

- `(α)` passes cleanly: all five view-templates remain independently motivated.
- `(β)` host-structure naming and composition-rule arms pass cleanly.
- `(β)` per-sub-entity demonstration passes unevenly: `Roadmap DAG` and `Routing/flow` are strongest, `Event` and `Discourse` are partial, `Intent hypergraph` is weakest because the best local meta-audit still calls it design-only.

Child recommendation:

- Prefer `A1 ADMIT`, but do so with an explicit mixed-maturity statement in ADR consequences rather than pretending all five sub-entities are equally operational.

Reason:

- The explicit rubric is satisfied: the host-structure is canon-body articulated, the aggregation rule is stated, and every sub-entity has at least canon-level demonstration.
- The real tension is not whether a catalog exists; it is how strongly to claim operational maturity across all five members.

## Axis A — Admission Verdict

Options surfaced:

- `A1 ADMIT` if operator accepts the ADR-0065 / session-brief rule that canonical articulation in the foundation docs is sufficient for per-sub-entity demonstration.
- `A2 SCOPE-CONDITION` if operator wants the ADR to encode mixed maturity more strongly, e.g. admit the catalog while explicitly noting that only part of the five-member set has direct documented running-view evidence.
- `A3 DECLINE-with-triggers` if operator treats named running-view materialization as required and judges the weak/partial members not yet sufficient.
- `A4 DECLINE-inline-prose-only` if operator judges ADR-0058 + governance-artifacts already do all the work and a separate pattern doc adds no canon value.
- `A5 DEFER re-eval` if operator wants stronger operational maturation before any admission move.

Child recommendation: `A1 ADMIT`

Why:

- The audit did not surface a failure on the two structurally load-bearing β arms: host-structure property and aggregation rule.
- No view is demonstration-absent. The weakest case is `Intent hypergraph`, but it is still canonically articulated and protocol-adjacent.
- ADR-0065 already positions this candidate as the clean exemplar for the catalog-pattern sub-class; the audit did not discover a disqualifying contrary fact.

Ambiguity flag:

- If the operator wants a stricter reading of "per-sub-entity demonstration" that privileges running view-materialization over foundation-level articulation, `A2` is the honest conservative alternative.

## Axis B — Sub-Entity Enumeration

Options surfaced:

- `B1` verbatim ADR-0058 five-view list
- `B2` refined list that drops under-motivated members
- `B3` extended list that adds newly surfaced members

Child recommendation: `B1 verbatim ADR-0058 list`

Why:

- The audit found all five members independently motivated.
- The real weakness is evidence unevenness, not shape-legitimacy.
- No sixth candidate surfaced with comparable standing.

Ambiguity flag:

- If the operator chooses `A2`, `B2` becomes the natural fallback only if they want to drop `Intent hypergraph` specifically. The audit does not recommend doing that by default.

## Axis C — Sub-Entity Floor

Options surfaced:

- `C1` keep ADR-0065 default floor `N>=3`, noting actual `N=5`
- `C2` raise the floor to `N>=4`
- `C3` use a different floor, e.g. "all 5 or fail"

Child recommendation: `C1`

Why:

- ADR-0068 preserved the default floor rather than rewriting the sub-class around a single candidate's exact count.
- No audit evidence justifies changing the floor for catalog-patterns at the infrastructure layer.

Ambiguity flag:

- If the operator wants to make fidelity to ADR-0058's exact five-member parking list load-bearing, `C3` is defensible. The child recommendation is still `C1`.

## Axis D — Pattern-Doc Location + Shape

Options surfaced:

- `D1` `docs/patterns/view-template.md`
- `D2` alternate filename such as `graph-view-templates.md`
- `D3` separate files per view

Child recommendation: `D1`

Why:

- Singular umbrella naming matches the catalog-pattern logic.
- It keeps the file simple, parallel to `federation-encounter.md`, and aligned with the parked-candidate language already in `docs/patterns/README.md`.
- `D3` defeats the whole point of admitting a catalog-pattern rather than five new parallel artifacts.

Ambiguity flag:

- `D2` is viable if the operator wants stronger graph-language in the filename, but the shorter `view-template.md` is cleaner and closer to ADR-0058 / ADR-0065 wording.

## Axis E — Graph Edges

Options surfaced:

- `E1` minimum: encode ADR-0058 + governance-artifacts dependence clearly, use only edges that resolve against existing docs/slugs, and keep the three primaries in body prose if standalone doc_ids/slugs are not ratified
- `E2` add sibling-pattern typed edges where clearly justified
- `E3` add ADR-0041 text-authoritative representation linkage

Child recommendation: `E1`

Why:

- It preserves graph discipline without inventing nonexistent projection doc_ids or extra slugs.
- ADR linkage can live cleanly in ADR frontmatter/body; pattern-doc dependence can stay anchored to `spore.governance-artifacts`.
- The three primaries are unquestionably load-bearing, but today they are canon sections, not standalone pattern docs.

Ambiguity flag:

- If the operator ratifies `F4` selective slugification, `E2` becomes easier because individual view names become first-class citation targets.
- `E3` is reasonable, but the text-authoritative point already sits upstream in `governance-artifacts` and ADR-0058; it is not necessary for a minimal honest admission.

## Axis F — Frozen Concepts YAML Treatment

Options surfaced:

- `F1` no yaml change
- `F2` bump `v13 -> v14` with slug `view-template`
- `F3` bump with catalog slug plus all five sub-entity slugs
- `F4` selective slugification

Child recommendation: `F2`

Why:

- ADR-0065 Axis H1 makes yaml registration the going-forward rule for admissions.
- A single catalog slug is the minimum move that keeps the vocab disciplined.
- `F3` would add six slugs at once, including highly overloaded names like `event` and `discourse`.

Ambiguity flag:

- If the operator wants specific sub-entities citable outside the catalog doc, `F4` is the more defensible expansion path than `F3`.

## Axis G — Cross-ADR Ratification Shape

Options surfaced:

- `G1` standalone ADR-0070
- `G2` bundled with ADR-0058 parking update
- `G3` hybrid body-only cross-reference

Child recommendation: `G1`

Why:

- Matches ADR-0068 / ADR-0069 precedent.
- Preserves ADR-0058 as historical record rather than back-editing it.
- Keeps the write set minimal and the scope crisp.

Ambiguity flag:

- `G2` is only warranted if the operator explicitly wants ADR-0058's parking prose updated in place despite the historical-record caution.

## Recommended ratification bundle

Primary bundle:

- `A1`
- `B1`
- `C1`
- `D1`
- `E1`
- `F2`
- `G1`

Conservative fallback bundle:

- `A2`
- `B1`
- `C1`
- `D1`
- `E1`
- `F2`
- `G1`

## Session-atomic projection if Step 3+ is approved

- `A1` path: approximately `350-500s`
- `A2` path: approximately `400-550s`
- `A3` path: approximately `200-300s`
- `A4` path: approximately `150-250s`

The heaviest variable is whether Step 3+ must author both ADR + pattern doc + README + yaml, or only a decline ADR.
