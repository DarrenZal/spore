---
doc_id: spore.patterns.readme
doc_kind: positioning
status: active
depends_on:
  - spore.project-vision
  - spore.governance-artifacts
---

# Spore Pattern Library

This directory holds Spore's pattern library — coordination-recipe patterns organized under the **M4 sub-class framework** ratified by [ADR-0065](../research/canon-decisions/0065-pattern-library-infrastructure-spec.md). Patterns are one of the four categories of canon objects (primitives / cross-cutting doctrines / modes-across-primitives / **patterns**) per `docs/project-vision.md:111` and `docs/foundations/governance-artifacts-and-graph-projections.md` §Four Categories of Canon Objects.

## Sub-classes (M4 framework)

Patterns form a composition-class with three sub-shapes. Sub-classes are variations-of-pattern-family, not separate canon-object-classes — the four-category canon-object inventory is preserved.

- **composition-patterns** — patterns composed over primitives / doctrines / modes / properties. Exemplars: `governance-memory.md`, `commitment-pooling.md`, `discourse-as-governance.md`, `federated-knowledge-exchange.md`, `intent-publication-and-activation.md`, `federation-encounter.md`. Earning-test per ADR-0065 §M4: composition-articulability over existing canon-objects AND ≥3 independent instance-families (inherited from ADR-0064 honest-rigor cluster-counting discipline — independent context, not derived-from another counted family, evidenced by bridge-note / operational trace / coded implementation / canon-body reference).
- **design-criteria-patterns** — patterns articulating named design-criteria-clusters for field-conditions or coordination-substrate. Reference candidate and decline precedent: four-enabling-conditions per ADR-0048 parking and ADR-0069 decline-with-triggers (space / mission / resources / knowledge for constructed-power; Johar's motivating case at N=4). Earning-test per ADR-0065 §M4: ≥N articulated criteria (N≥3 floor; Johar-4 exemplar) AND ≥1 full-cluster primary-tradition PLUS criteria-operationality evidence (≥1 instance-family where criteria are demonstrably applied, not merely named).
- **catalog-patterns** — patterns hosting ≥N legitimate sub-entities each independently-motivated with host-structure rationale. Exemplar and first admission: `view-template.md` via ADR-0070, inheriting ADR-0058's 5 demoted graph projections (Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse). Earning-test per ADR-0065 §M4: ≥N sub-entities (N≥3 floor; view-template-5 exemplar; "a pair is not a catalog") AND host-structure-earning-test (named host-structure property + per-sub-entity demonstration + composition-or-aggregation rule binding sub-entities into single catalog).

**N-threshold rule**: ADR-0065 does NOT bake hard numeric thresholds. Per-admission-ADR's Step 0.5 audit proposes N with rationale; operator ratifies at admission-ADR Step 2. Exemplar precedents (Johar-4 / view-template-5) serve as reference anchors.

## Frontmatter schema (Axis C3 tiered)

Patterns follow a tiered schema: required fields form the minimum compliance bar; optional fields are available for admissions-going-forward and existing patterns MAY leave optional fields empty (Axis J1 grandfather).

**Required fields** (all patterns):
- `doc_id` — stable globally-scoped identifier (e.g. `spore.governance-memory`).
- `doc_kind: pattern` — one of the 9 canonical doc_kinds per `governance-memory.md:36`.
- `status` — `draft | active | deprecated | superseded`.
- `depends_on` — list of `doc_id` references forming directed edges in the spec-DAG.

**Optional fields** (recommended for new admissions; existing patterns MAY fill retroactively):
- `concepts:` — list of concept slugs from `docs/research/concepts-p2p-wiki.yaml` (required at admission-ADR per Axis H1 going-forward).
- `r_claim_source:` — list of bridge-note R-claim identifiers substantiating the pattern.
- `relates_to:` — list of `doc_id` references for pattern-to-pattern typed edges (formalizes "Related Patterns" body-prose).
- `instance_families:` — list of named instance-family operational contexts evidencing the pattern.

## Admission workflow (Axis E1)

New pattern admissions follow the **dedicated-ADR per candidate** workflow (ADR-0065 Axis E1; inherits machinery from ADRs 0049-0064):

1. Candidate surfaces (bridge-note citation / parking-ADR parking-statement / trigger firing).
2. Dedicated admission-ADR authored per decision-gated plan structure (Steps 0/0.5/1/2 outside session-atomic window; Steps 3+ inside).
3. Step 0.5 audit applies the sub-class-appropriate earning-test (composition / design-criteria / catalog).
4. Operator ratifies sub-class assignment + earning-test outcome at admission-ADR Step 2.
5. New pattern file authored under `docs/patterns/<slug>.md` with required + recommended optional frontmatter.
6. yaml slug registration required at admission-ADR per Axis H1 (concepts-p2p-wiki.yaml version-bump).

**Review cadence** (Axis F1): review on candidate surfacing only. No periodic sweep. Canon-review-protocol scope-conditioning (Axis I4 / ADR-0065 + canon-review-protocol.md §1 update) clarifies that pattern admissions operate OUTSIDE canon-review-protocol under ADR-0065-spec infrastructure.

## Currently-admitted patterns

| File | doc_id | Status | Tentative sub-class (per ADR-0065 audit) | yaml slug |
|------|--------|--------|-----------------------------------------|-----------|
| `commitment-pooling.md` | `spore.commitment-pooling` | active | composition-pattern | YES (primary_project: pm) |
| `discourse-as-governance.md` | `spore.discourse-as-governance` | draft | composition-pattern | NO |
| `federated-knowledge-exchange.md` | `spore.federated-knowledge-exchange` | active | composition-pattern | NO |
| `federation-encounter.md` | `spore.federation-encounter` | active | composition-pattern | YES |
| `governance-memory.md` | `spore.governance-memory` | active | composition-pattern | YES |
| `intent-publication-and-activation.md` | `spore.intent-publication` | active | composition-pattern | NO |
| `view-template.md` | `spore.view-template` | active | catalog-pattern | YES |

Tentative sub-class classifications are informational, not retroactively enforced (Axis J1 grandfathers existing patterns). Re-verification at any admission-ADR evaluating these files is welcome. `federation-encounter.md` and `view-template.md` are the first and third Wave-2 admissions under ADR-0065's M4 framework (via ADR-0068 and ADR-0070 respectively); ADR-0069 supplies the intervening decline-with-triggers precedent for the design-criteria sub-class.

## Parked admission candidates

Post-ADR-0070, one trigger-gated pattern-library candidate remains parked under its mapped sub-class workflow:

- **four-enabling-conditions** (design-criteria-pattern) — ADR-0048 parking source; ADR-0069 records decline-with-triggers and preserves a re-evaluation path behind explicit maturation triggers.

## Cross-references

- [ADR-0065 pattern-library-infrastructure-spec](../research/canon-decisions/0065-pattern-library-infrastructure-spec.md) — this library's infrastructure spec (M4 sub-class framework + K4 outlier deferral).
- [ADR-0048 power-expressive-constructed-modes](../research/canon-decisions/0048-power-expressive-constructed-modes.md) — four-enabling-conditions parking source + parsimony-as-earning-test discipline + four-categories origin.
- [ADR-0055 encounter-as-composition-framing-note](../research/canon-decisions/0055-encounter-as-composition-framing-note.md) — R-Enc-4 "pattern-library infrastructure under-specified" residue (closed by ADR-0065) + federation-encounter parking + triggers E-1..E-5.
- [ADR-0058 phase-2c-graph-projections-dual-axis-bundle](../research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md) — view-template parking source (5 demoted graph projections).
- [ADR-0068 federation-encounter-composition-pattern](../research/canon-decisions/0068-federation-encounter-composition-pattern.md) — first Wave-2 admit; composition-pattern precedent.
- [ADR-0069 four-enabling-conditions-design-criteria-pattern](../research/canon-decisions/0069-four-enabling-conditions-design-criteria-pattern.md) — Wave-2 decline-with-triggers precedent.
- [ADR-0070 view-template-catalog-pattern](../research/canon-decisions/0070-view-template-catalog-pattern.md) — third and final Wave-2 admit; catalog-pattern precedent.
- [project-vision.md §111 Four categories of canon objects](../project-vision.md) — canon-object-class anchor.
- [governance-artifacts-and-graph-projections.md §Four Categories of Canon Objects](../foundations/governance-artifacts-and-graph-projections.md) — parallel section (authored alongside ADR-0065).
- [canon-review-protocol.md §1 scope-conditioning on patterns](../research/planning/canon-review-protocol.md) — Axis I4 scope reconciliation (4-framing acknowledgment).
