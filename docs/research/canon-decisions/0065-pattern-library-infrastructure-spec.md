---
doc_id: spore.canon-decision.pattern-library-infrastructure-spec
doc_kind: decision-record
status: draft
adr_number: "0065"
opened-on: 2026-04-24
closed-on: 2026-04-24
decision: spec
r_claim_statement: |
  ADR-0055 §Residues R-Enc-4 (line 208, 2026-04-22) flagged "pattern-library
  infrastructure under-specified" as canon-level concern. Three pattern-library
  admission candidates accumulated across Phase 3b + post-Phase-3b arc parked
  for want of infrastructure: (1) federation-encounter per ADR-0055 triggers
  E-1..E-5 (E-5 fired via ADR-0064); (2) four-enabling-conditions per ADR-0048
  parking (space / mission / resources / knowledge for constructed-power);
  (3) view-template pattern-library doc per ADR-0058 parking (5 demoted graph
  projections: Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse).

  Step 0.5 audit (`tmp/adr-0065-audit-manifest-2026-04-24.md`) surfaced material
  deltas from Phase 1 reconnaissance reshaping the decision-space: (a) 6 pattern
  docs exist, not 5 — `docs/governance/project-briefing-pattern.md` carries
  `doc_kind: pattern` but sits outside `docs/patterns/` with isolated citation
  state (0 inbound `depends_on`) and non-standard body shape (Problem → Forces →
  Solution vs Context → Problem → Forces → Pattern), surfacing as audit-outlier;
  (b) taxonomy tension is 4-framing, not 3-framing — 4th semantic sense
  surfaced at `docs/project-vision.md:10, :299` (product-"pattern language"
  vocabulary) alongside doc_kind-canonical (`governance-memory.md:36`),
  canon-object-class (`project-vision.md:111`), and canon-review-protocol-exclusion
  (`canon-review-protocol.md:34, :58`); (c) three downstream candidates have three
  structurally-different shapes — composition-over-primitives (federation-encounter),
  design-criteria-cluster (four-enabling-conditions), catalog-of-sub-entities
  (view-template) — a unified earning-test over-abstracts (M1) or over-narrows (M3).

  Per plan-revision gate (operator directive 2026-04-24 "ratify with one
  adjustment"), ADR-0065 adopts the M4 synthesis: three pattern sub-classes
  with sub-class-typed earning-tests + unified Axis C schema (tiered) + unified
  Axis E workflow (dedicated-ADR per candidate). Four-category canon-object-class
  inventory preserved — sub-classes are variations-of-pattern-family, not separate
  canon-object-classes. Audit-outlier disposition deferred to ADR-0066 per K4
  (honest-rigor cluster-counting discipline per ADR-0064: declining to invent a
  4th sub-class on single-doc evidence).

  Eleven axes ratified at Step 2 decision-gate fast-path: A-test-shape
  (sub-class-typed hybrid) / A-sub-class (3 sub-classes per M4) / B (B4
  patterns-as-composition-class-with-sub-shapes) / C (C3 tiered minimum +
  optional) / D (D4 keep + `docs/patterns/README.md`) / E (E1 dedicated-ADR
  per candidate) / F (F1 none) / G (G1 no enforcement) / H (H1 required-
  for-admission-going-forward) / I (I4 scope-conditioning with 4-framing at
  canon-review-protocol.md §1) / J (J1 none; existing 5 grandfathered) /
  K (defer-to-ADR-0066). Canon-body edits land in 5 files per allowlist.
supported_by:
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0055-encounter-as-composition-framing-note
  - spore:ADR-0058-phase-2c-graph-projections-dual-axis-bundle
  - spore:ADR-0061-asymmetric-joint-commitment-slug-disposition
  - spore:ADR-0062-membrane-as-self-produced-disposition
  - spore:ADR-0063-participatory-sense-making-disposition
  - spore:ADR-0064-co-presence-field-condition-disposition
authorized-by: "operator directive 2026-04-24 ADR-0065 Step-2 decision-gate fast-path: A-test-shape=sub-class-typed-hybrid A-sub-class=3-sub-classes B=B4 C=C3 D=D4 E=E1 F=F1 G=G1 H=H1 I=I4-with-4-framing J=J1 K=defer-ADR-0066"
queue_reference: "ADR-0055 §Residues R-Enc-4 (pattern-library-infrastructure-under-specified) + ADR-0048 four-enabling-conditions parking + ADR-0055 federation-encounter triggers E-1..E-5 + ADR-0058 view-template parking; plan-revision gate 2026-04-24 ratified M4 synthesis + K4 defer-to-ADR-0066 + Bundle-Balanced across 11 axes"
affects_canon:
  - docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md
  - docs/project-vision.md
  - docs/foundations/governance-artifacts-and-graph-projections.md
  - docs/research/planning/canon-review-protocol.md
  - docs/patterns/README.md
related_adrs:
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0055-encounter-as-composition-framing-note
  - spore:ADR-0058-phase-2c-graph-projections-dual-axis-bundle
  - spore:ADR-0061-asymmetric-joint-commitment-slug-disposition
  - spore:ADR-0062-membrane-as-self-produced-disposition
  - spore:ADR-0063-participatory-sense-making-disposition
  - spore:ADR-0064-co-presence-field-condition-disposition
concepts:
  - pattern-library-infrastructure
---

# ADR-0065 — Pattern-Library Infrastructure Spec (M4 Sub-class Framework + K4 Outlier Deferral, Bundle-Balanced 11-axis)

## Status

draft (authored 2026-04-24 under `adr-0065-pattern-library-infrastructure` decision-gated plan; Bundle-Balanced fast-path per operator Step-2 decision-gate ratifying plan-revision gate 2026-04-24 upstream)

## Context

### Parking-source: pattern-library infrastructure under-specified

ADR-0055 (encounter-as-composition-framing-note, post-Phase-3b, 2026-04-22) §Residues R-Enc-4 (line 208) flagged *"pattern-library infrastructure under-specified"* as a canon-level concern:

> *"Deferring federation-encounter admission on pattern-library-spec grounds (Trigger E-1) is honest; the spec-gap is itself a canon-level concern that future work may address. Canon-record preserves the awareness without forcing premature pattern-library-spec authoring."*

Three pattern-library admission candidates accumulated across the Phase 3b + post-Phase-3b arc, each parked for want of infrastructure to admit them against:

1. **federation-encounter** (ADR-0055 §Maturation triggers for federation-encounter pattern-library admission, Triggers E-1..E-5): E-1 "pattern-library-spec declared" is partial (directory exists; spec does not); E-5 "Field-sub-stratification separate-plan advances" fired via ADR-0064 co-presence-Field-condition scope-conditioning; E-2, E-3, E-4 pending evidence accumulation.
2. **four-enabling-conditions** (ADR-0048 §Four enabling conditions (pattern-library candidate), lines 150-152): *"Johar's four enabling conditions (space, mission, resources, knowledge) are distributed properties the system must provide for constructed-power to be possible... Pattern-library fit is plausible... Parked as pattern-library candidate pending design-pass work."*
3. **view-template pattern-library doc** (ADR-0058 §Consequences, line 124): *"Pattern-library doc parked as parking-lot entry for future work. The five view-templates [Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse] are named in canon with tier framing but not specified at pattern-level; when the pattern-library doc is authored, it inherits them as starting content."*

ADR-0065 closes R-Enc-4 by specifying the pattern-library infrastructure (earning-test per sub-class / schema / placement / admission workflow / review cadence / cross-reference convention / yaml registration / canon-review-protocol scope / backfill policy) so the three downstream admissions become tractable under stable rules.

### Canon state baseline at authoring

- 9 primitives (3 structural: field / holon-irreducible-with-relational-identity-property / membrane + 6 verbs: intent / commitment / joint-commitment / evidence / signal / reproduction)
- 3 cross-cutting doctrines (reproductive-commoning, boundary-commoning, care-commoning)
- 2 modes-across-primitives (expressive-power, constructed-power — allocational decomposed across primitives per ADR-0047)
- 2 properties-on-primitives (holon-irreducibility, relational-identity — both on Holon per ADR-0050/0051)
- 6 derived glossary slugs (reciprocity, trust, attestation-of-execution, permeability, double-boundary, encounter)
- Concepts yaml v12 (unchanged by ADR-0065 per Axis H1 required-going-forward)
- Validator 9/30 (stable baseline pre-ADR-0065 at HEAD `1c7ec64`)
- PREEXEC_SHA: `1c7ec64` (post-ruddick-status-fix `archived` → `deprecated`; canon-scope files untouched 84ea597..1c7ec64 per AC22(b))

### Audit-delta findings (paraphrased from Step 0.5 audit manifest)

Phase 1 reconnaissance treated as scaffolding. Step 0.5 child-audit (re-verified at HEAD `1c7ec64` per plan §Audit validity) extended with material deltas:

- **6 pattern docs exist, not 5**: audit discovered `docs/governance/project-briefing-pattern.md` carries `doc_kind: pattern` but sits outside `docs/patterns/`. This is the audit-outlier — deferred to ADR-0066 per K4 (see §Consequences below).
- **Taxonomy tension is 4-framing, not 3-framing**: the canon holds four semantic senses of "pattern" simultaneously —
  - (i) *doc_kind-canonical* per `docs/patterns/governance-memory.md:36` (enumerated in 9 canonical doc_kinds; self-host authority);
  - (ii) *canon-object-class* per `docs/project-vision.md:111` (fourth category alongside primitives / doctrines / modes / properties);
  - (iii) *canon-review-protocol-scope-exclusion* per `docs/research/planning/canon-review-protocol.md:34, :58` (patterns are NOT-canon for this protocol's purposes);
  - (iv) *product-vocabulary* per `docs/project-vision.md:10, :299` ("pattern language, protocol family, and governance-memory pattern" — Agent Commons as published pattern-language).
- **Three downstream candidates have three structurally-distinct shapes**: federation-encounter = composition-over-primitives (5-primitive composition per ADR-0055 framing-note); four-enabling-conditions = design-criteria-cluster (4 criteria per Johar); view-template = catalog-of-sub-entities (5 demoted projections per ADR-0058). A unified earning-test over-abstracts (M1: forces 2/3 candidates through abstraction that loses discriminative power) or over-narrows (M3: would route 2/3 candidates out of pattern-class to new 5th canon-object-class or infrastructure-tooling-ADR).
- **Patterns heavily inbound-cited via `depends_on`** from bridge-notes (commitment-pooling: 7 inbound; discourse-as-governance: 5 inbound) — asymmetric cross-ref graph (inbound typed-structured, outbound body-prose-only).
- **3 unregistered in-scope slugs** (of 5 in-scope patterns): discourse-as-governance / federated-knowledge-exchange / intent-publication-and-activation lack yaml entries. Under H1 required-going-forward, existing 5 grandfather; new admissions MUST carry slug at admission-ADR.
- **Recurrence-evidence gradient**: 4 of 5 in-scope patterns at ≥3 independent instance-families; 1 (intent-publication-and-activation) at 1 family — pattern itself flags as "emerging... precursor implementation, not a direct adoption." Gradient is real; Axis J1 grandfathers without retroactive earning-test enforcement.

Full audit at `tmp/adr-0065-audit-manifest-2026-04-24.md`.

### Three downstream candidates diagnostic for M4

The heterogeneity of the three candidates' shapes is load-bearing for the M4 choice:

| Candidate | Shape | Primary-tradition-breadth | M1 unified-test fit | M3 one-canonical fit | M4 sub-class fit |
|-----------|-------|--------------------------|---------------------|----------------------|------------------|
| federation-encounter | composition-over-primitives | 2 full clusters (common-knowledge-philosophy + micro-sociology) + Johar | CLEAN (α composition + β recurrence) | CLEAN (stays as composition-pattern canonical) | CLEAN as composition-pattern |
| four-enabling-conditions | design-criteria-cluster (4 named) | 1 primary (Johar; ADR-0064 honest-rigor excludes primary-inspiration cluster-escalation) | FORCED COMPROMISE on β (design-criteria-cluster-completeness as family-equivalent is stretch) | FORCED REROUTE (promote to 5th canon-object-class OR doctrine-extension) | CLEAN as design-criteria-pattern |
| view-template | catalog-of-5-sub-entities | Mixed ADR-0036 lineage + Opus-4-7 earning-test grounding | FORCED COMPROMISE on β (catalog-integrity-as-recurrence-analog is stretch) | FORCED REROUTE (infrastructure-tooling-ADR) | CLEAN as catalog-pattern |

M4 admits all three cleanly under sub-class-typed tests with unified schema/workflow — preserving four-category canon-object-class inventory while honoring honest-rigor on shape-heterogeneity.

## Decision

**Bundle-Balanced fast-path ratified per operator directive 2026-04-24 Step-2 decision-gate**: eleven axes + K4 embedded.

### Per-axis decisions

- **A-test-shape = sub-class-typed hybrid** — earning-test shape is sub-class-typed (distinct test per sub-class), hybrid across composition+recurrence (composition-pattern), design-criteria+tradition-breadth (design-criteria-pattern), catalog-integrity+host-structure (catalog-pattern). Rejects A-ts-2 unified-composition+recurrence (forces M1 over-abstraction on 2/3 candidates) and A-ts-3 recurrence-only (insufficient for design-criteria-pattern).
- **A-sub-class = 3 sub-classes per M4** — composition-pattern / design-criteria-pattern / catalog-pattern. Required pair with A-test-shape sub-class-typed. Rejects A-sc-2 unified-class (forces M1) and A-sc-3 single-canonical (forces M3 reroute). Rejects A-sc-4 sub-class-typed-with-4th-provisional (would preemptively invent infrastructure-pattern 4th sub-class on single-doc evidence — declined on honest-rigor grounds per K4 rationale below).
- **B = B4 patterns-as-composition-class-with-sub-shapes** — MANDATORY under A-sc-1 M4 framework. Patterns demarcated from primitives / doctrines / modes / properties by being a composition-class with three sub-shapes (variations-of-pattern-family, not separate canon-object-classes). Rejects B1 formal decision-tree (subsumed by B4 at sub-class level), B2 minimal pointer (insufficient under M4), B3 tiered formality (weakens integrity).
- **C = C3 tiered (minimum-required + optional-extended)** — required: `doc_id / doc_kind / status / depends_on` (matches existing uniformity across 5 in-scope patterns). Optional: `concepts: [] / r_claim_source: [] / relates_to: [] / instance_families: []`. New admissions SHOULD fill optional; existing patterns MAY leave optional empty (compatible with Axis J1 grandfather). Rejects C1 minimal-unchanged (limits downstream infrastructure without extensibility), C2 enriched-required (mandates J3 deep retrofit — incompatible with J1 + 45-min window), C4 lifecycle-gated (would promote discourse-as-governance before field-fill).
- **D = D4 keep + `docs/patterns/README.md`** — placement convention preserves current `docs/patterns/` directory unchanged (5 in-scope patterns in place; project-briefing-pattern remains at `docs/governance/` per K4 exclusion); new `docs/patterns/README.md` catalog documents the 3 sub-classes + schema + admission-workflow + currently-admitted patterns + parked candidates + audit-outlier cross-reference to ADR-0066. Rejects D2 consolidate (REMOVED — would move project-briefing-pattern, K4 rollback trigger), D3 split-by-sub-class (adds file-moves for 5 in-scope patterns; premature before sub-class classification validated per-candidate).
- **E = E1 dedicated-ADR per candidate** — each pattern admission = 1 dedicated ADR applying sub-class-appropriate earning-test at admission-ADR Step 0.5 per decision-gated plan structure. Inherits proven machinery from ADRs 0049-0064. Rejects E2 recurrence-trigger auto-admit (insufficient for design-criteria-pattern), E3 hybrid trigger-fast-track (over-engineered given E1 handles all 3 cleanly), E4 lightweight plan (loses canon-record-richness), E5 batch-review (requires F3/F4 cadence).
- **F = F1 none** — review on candidate surfacing only (E1 workflow covers). Rejects F2 canon-review-protocol-v3 paragraph (couples to I2/I4 scope-expansion), F3 periodic-sweep, F4 event-triggered (both require tracking infrastructure).
- **G = G1 no enforcement** — pattern-to-primitive cross-references remain body-prose; C3 optional fields enable future typed-edge emergence without enforcement. Rejects G2 concepts-required (reserved for Bundle-Enriched), G3 bi-directional (primitive-bullet edits out of §Non-goals), G4 relates_to-required.
- **H = H1 required-for-admission-going-forward** — new patterns MUST carry yaml slug at admission-ADR (concepts-p2p-wiki.yaml version-bump per admission). Existing 5 grandfathered; 3 unregistered in-scope slugs do NOT backfill under Axis J1. Yaml holds at v12 post-ADR-0065. Rejects H2 deferred-to-next-freeze (no forward-looking commitment), H3 optional-lag-OK (no admission-gate rigor), H4 backfill-3-in-scope (reserved for Bundle-Enriched), H5 category-field-schema-extension (retroactive scope question).
- **I = I4 scope-conditioning with explicit 4-framing acknowledgment** — edit `canon-review-protocol.md` lines 34 + 58 to acknowledge that "patterns" operate under 4 framings simultaneously (doc_kind-canonical + canon-object-class + this-protocol's-exclusion + product-vocabulary) and that individual pattern admissions operate outside canon-review-protocol under ADR-0065-spec infrastructure. Inherits ADR-0062/0063/0064 primitive-bullet scope-conditioning canon-method applied to a protocol-file for the first time. Rejects I1 keep-NOT-canon (doesn't address 4-framing tension), I2 formally-bring-INTO (requires F2/F3 pattern-review cadence machinery inside canon-review-protocol), I3 split-schema-canon-patterns-not (meta-instance distinction has merit but structurally overlaps I4), I5 defer-to-separate-ADR (scope-reconciliation is tractable now).
- **J = J1 none (grandfather existing 5)** — infrastructure applies to new admissions only; existing 5 in-scope patterns grandfathered. Axis J1 compatible with A-ts-1 sub-class-typed hybrid (existing patterns are tentatively composition-pattern per body-shape uniformity; classification is informational not enforcing). Rejects J2 light-frontmatter-only (reserved for Bundle-Enriched with H4 backfill), J3 deep (incompatible with 45-min window), J4 schema_version-marker (adds legacy-flag field for low value), J5 body-shape-fix-for-project-briefing-pattern (REMOVED — K4 exclusion + out-of-bounds per §Non-goals).
- **K (embedded) = defer to ADR-0066** — `docs/governance/project-briefing-pattern.md` audit-outlier disposition is deferred to ADR-0066 follow-on per operator K4 directive (plan-revision gate 2026-04-24 "ratify with one adjustment"). See §Consequences below for rationale + forward-reference-mechanism.

### K4 deferral rationale (operator directive)

Operator selected K4 defer over child's original K1 recommendation on the basis of a 50-50 judgment call. Audit-outlier surfaces on three dimensions simultaneously (placement in `docs/governance/` not `docs/patterns/`; body-shape Problem → Forces → Solution variant; 0 inbound `depends_on` / isolated from spec-DAG). Two disposition-shapes are honestly arguable:

1. **Infrastructure-pattern-sub-class exemplar** (would warrant K1-provisional 4th sub-class under M4 with "pending ≥1 additional infrastructure-pattern candidate" trigger) — treats the audit-outlier as a valid pattern whose non-standard shape signals a new sub-class category.
2. **Mis-classified as pattern** (would warrant K3 reclassification to `doc_kind: governance` OR `doc_kind: protocol`) — treats the non-standard shape + isolation as evidence that `doc_kind: pattern` was an authoring misjudgment.

**Honest-rigor cluster-counting discipline** (inherited from ADR-0064) argues against inventing a 4th sub-class on single-doc evidence. Just as ADR-0064 declined to count Johar-native as full third cluster despite its primary-inspiration status, ADR-0065 declines to admit a 4th pattern sub-class on a single-outlier instance. ADR-0066 evaluates the outlier freshly against the ratified M4 sub-classes once canon — if NO clean fit across 3 sub-classes, then K1-provisional or K3 reconsidered at that time.

## M4 Sub-class Framework

This section defines the three pattern sub-classes ratified at Axis A-sub-class decision + operator plan-revision gate 2026-04-24. Inherits earning-test criteria from ADR-0044 two-condition primitive earning-test (adapted for pattern-class) + ADR-0048 parsimony-as-earning-test-outcome discipline (applied per-sub-class) + ADR-0064 honest-rigor cluster-counting discipline (applied to tradition-breadth evaluations).

### composition-pattern

**(α-comp) Composition-articulability**: pattern is articulable as named composition over primitives / doctrines / modes / properties. The composition structure (which canon-objects combine + how they combine) is a first-class load-bearing property of the pattern.

**(β-comp) Recurrence across ≥3 independent instance-families**: inherited from ADR-0064 honest-rigor cluster-counting discipline. An *independent instance-family* is a distinct operational coordination context (BKC / Octo / Dobby / PM / DW / federation) where the pattern has been implemented or traced, NOT derived-from another counted family (e.g. Octo-Cascadia extension of BKC-Victoria does NOT count as 2 independent families). Evidence required: ≥1 of {bridge-note citation in `docs/research/connections/`; operational trace in evidence doc; coded implementation with commit-anchor; canon-body reference}. Adjudicator: admission-ADR author at Step 0.5; operator ratifies at admission-ADR Step 2.

**Exemplar**: `governance-memory` pattern (composition over `doc_id` / `doc_kind` / `status` / `depends_on` frontmatter-convention + spec-DAG ingestion tooling, with 3 instance-families: Spore self-host + BKC canonical doc DAG + personal/creative Tier 0-1 adopters).

**Downstream candidate cleanest-fit**: **federation-encounter** (ADR-0055) — (α-comp) composition-over-5-primitives (Signal invitation + Joint-commitment attendance-pledge + Intent pre-event-surfacing + Evidence in-event-attestation + bounded Field-conditions); (β-comp) ≥4 instance-families per ADR-0055 (BKC/Octo quarterly / PM match-events / DW stand-ups+design-reviews / cross-federation compose-events / protocol-version-adoption moments).

### design-criteria-pattern

**(α-des) ≥N articulated design-criteria**: pattern articulates a named design-criteria-cluster with ≥N criteria operating on field-conditions or coordination-substrate. Floor N≥3 (Johar's four-enabling-conditions at N=4 is motivating exemplar; N<3 is too thin to constitute a cluster). Per-admission-ADR's Step 0.5 audit proposes N with rationale; operator ratifies at admission-ADR Step 2. Rationale for per-admission-ADR N-deferral: admission-ADR's sub-class-specific evidence reshapes what N "should be" in context; pre-baking a global N risks either excluding legitimate small cases or admitting weak oversized ones.

**(β-des) ≥1 full-cluster primary-tradition + criteria-operationality evidence**: *full-cluster primary-tradition* (inherited from ADR-0064) = tradition with ≥3 cited authors/works + own theoretical-genealogical locus, primary not derivative of another counted tradition; example per ADR-0064 Cluster A (common-knowledge-philosophy: Lewis 1969 / Schiffer 1972 / Chwe 2001). *Criteria-operationality evidence* = ≥1 instance-family where design-criteria are demonstrably applied (not merely named), evidenced by operational trace referencing criteria by name OR canon-body cross-reference showing criteria-in-use. Rationale: prevents admission of design-criteria-clusters that are theoretically-named but have no operational ground.

**Exemplar**: four-enabling-conditions (Johar, *Power Cannot Be Allocated*, 2026) — space / mission / resources / knowledge at N=4; Johar-native primary-tradition; criteria-operationality TBD at admission-ADR.

**Downstream candidate cleanest-fit**: **four-enabling-conditions** (ADR-0048) — (α-des) N=4 criteria named (space / mission / resources / knowledge), satisfies N≥3 floor; (β-des) Johar-native primary-tradition (multiple works cited; bridge-notes corpus per ADR-0048 §Evidence); criteria-operationality evidence deferred to admission-ADR Step 0.5.

### catalog-pattern

**(α-cat) ≥N legitimate sub-entities each independently-motivated**: pattern hosts ≥N sub-entities where each sub-entity is itself independently-motivated (stands on its own merit, not merely as filler for the catalog). Floor N≥3 (view-template's 5 views at N=5 is motivating exemplar; "a pair is not a catalog"). Per-admission-ADR proposes N with rationale; operator ratifies. Same deferral-rationale as (α-des).

**(β-cat) Host-structure-earning-test**: admission-ADR must articulate (a) named host-structure property that binds sub-entities together (why-these-members-together); (b) per-sub-entity demonstration of the property; (c) composition-or-aggregation rule by which the host-structure binds sub-entities into a single catalog. Example host-structure (view-template): "composable over primary graph projections" per ADR-0058.

**Exemplar**: view-template pattern-library doc (5 demoted graph projections per ADR-0058: Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse) — N=5; host-structure: composable-over-primaries (schema-specialization or join-derivable from 3 primaries).

**Downstream candidate cleanest-fit**: **view-template pattern-library doc** (ADR-0058) — (α-cat) 5 legitimate sub-entities (Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse), each with its own graph-structure + specialization-rationale; N=5 satisfies N≥3 floor; (β-cat) host-structure "composable over primary graph projections" per ADR-0058 (earning-test rationale grounded in Opus-4-7 §3.5 + Codex v2 §2.5 concurrence); per-sub-entity composition-specialization rule documented.

### N-threshold deferral rule (summary)

ADR-0065 does NOT bake hard numeric thresholds for α-criterion-counts across sub-classes. Exemplar precedents (Johar-4 for design-criteria; view-template-5 for catalog) serve as reference anchors. Per-admission-ADR's Step 0.5 audit proposes N with rationale; operator ratifies at admission-ADR Step 2. Floor applied uniformly: N≥3 ("a pair is not a catalog"; a cluster of fewer than 3 criteria is too thin to earn design-criteria-pattern status).

### Sub-class admission workflow (Axis E1)

All three sub-classes follow a uniform workflow:

1. Candidate surfaces (bridge-note citation / parking-ADR parking-statement / trigger firing / operator directive).
2. Dedicated admission-ADR authored per decision-gated plan structure (Steps 0 / 0.5 / 1 / 2 OUTSIDE session-atomic window; Steps 3+ INSIDE window).
3. Step 0.5 audit applies the sub-class-appropriate earning-test (composition-pattern / design-criteria-pattern / catalog-pattern).
4. Operator ratifies sub-class assignment + earning-test outcome at admission-ADR Step 2.
5. New pattern file authored under `docs/patterns/<slug>.md` with required frontmatter (`doc_id / doc_kind: pattern / status / depends_on`) + recommended optional fields per Axis C3.
6. yaml slug registration required at admission-ADR per Axis H1 (concepts-p2p-wiki.yaml version-bump in admission-ADR's commit set).

## Consequences

### Positive

- **ADR-0055 R-Enc-4 "pattern-library infrastructure under-specified" residue CLOSED.** The canon-level concern flagged 2026-04-22 is now canon-legibly addressed. Three blocked admission candidates (federation-encounter / four-enabling-conditions / view-template) become tractable under stable rules.
- **M4 sub-class framework preserves 4-category canon-object-class inventory.** Patterns remain one category; sub-classes are variations-of-pattern-family. Parsimony-as-earning-test-outcome discipline (ADR-0048) inherited: sub-class admission requires passing sub-class-specific earning-test; no sub-class inflation on weak evidence.
- **Three structurally-different downstream candidates admit cleanly under M4.** Unified-test alternatives (M1) would force compromise on 2/3; reroute alternatives (M3) would require canon-object-class inflation or infrastructure-tooling-ADR split. M4 honors shape-heterogeneity with discriminative tests while keeping schema + workflow unified.
- **Honest-rigor cluster-counting discipline extended** (ADR-0064 inheritance) — ADR-0065 declines to invent a 4th sub-class on single-doc evidence (project-briefing-pattern audit-outlier). Discipline operates beyond primary-inspiration-source escalation avoidance (ADR-0064 application) to single-outlier-sub-class-invention avoidance (ADR-0065 application).
- **Primitive-bullet scope-conditioning canon-method extended to protocol-files** (Axis I4). ADR-0062/0063/0064 applied scope-conditioning to primitive-bullets in canon-body files. ADR-0065 Axis I4 applies the same canon-method shape to a governance-protocol file (`canon-review-protocol.md` lines 34 + 58) — new target class for the pattern. Four-framing acknowledgment made explicit: doc_kind-canonical + canon-object-class + canon-review-protocol-exclusion + product-vocabulary.
- **Four-categories parallel asymmetry resolved**: `governance-artifacts-and-graph-projections.md` now carries parallel §Four Categories of Canon Objects section mirroring `project-vision.md:111`. Phase 1 asymmetry-finding closed axis-independently (not tied to any specific axis choice).
- **`docs/patterns/README.md` catalog created**: documents 3 sub-classes + tiered schema + admission-workflow + currently-admitted-patterns + parked-candidates + audit-outlier cross-reference. Reduces future-reconnaissance reliance on ad-hoc directory-scans.
- **Bundled-stance-with-exceptions canon-method exercised**: first full application of bundle-level operator ratification (Bundle-Balanced fast-path) across 11 axes + K-embedded. Decision-brief explicitly enumerates per-axis choices; operator accepted bundle wholesale via fast-path acceptance text.

### Negative / Cost

- **11-axis surface-area** at Step 2 decision-gate is large; bundled-stance-with-exceptions pattern mitigates but does not eliminate. Future multi-axis infrastructure-spec ADRs should inherit the decision-brief fast-path pattern.
- **project-briefing-pattern audit-outlier remains unresolved** until ADR-0066 lands. Carries no immediate canon-coherence cost (outlier is isolated from spec-DAG; zero inbound `depends_on`) but creates queue-debt with MEDIUM priority per K4 discipline ("timely resolution after ADR-0065 lands; not indefinite carry").
- **Axis G no-enforcement preserves asymmetric cross-ref graph**: patterns remain heavily inbound-cited (typed `depends_on`) but outbound-untyped (body-prose Related Patterns). Future Bundle-Enriched-equivalent work (G2 + C5 concepts-required) could close this asymmetry; ADR-0065 keeps it for scope reasons.
- **Axis H1 does not backfill 3 unregistered in-scope slugs** (discourse-as-governance / federated-knowledge-exchange / intent-publication-and-activation). Future admission-ADRs evaluating these slugs (e.g. for cross-project concepts-propagation) may surface friction. Bundle-Enriched's H4 backfill-3-in-scope is available if operator revisits.
- **Five canon-body files edited in single ADR** (allowlist): ADR-0065 + project-vision.md + governance-artifacts-and-graph-projections.md + canon-review-protocol.md + docs/patterns/README.md (new). Larger canon-body surface than most single-ADR work; justified by spec-ADR shape (infrastructure requires multi-file coordinated update).

### Neutral / Deferred

- **K4 deferral to ADR-0066**: `docs/governance/project-briefing-pattern.md` audit-outlier disposition deferred. ADR-0066 scope (parked MEDIUM priority): evaluate outlier against 3 ratified M4 sub-classes (composition / design-criteria / catalog); if NO clean fit, reconsider K1-provisional 4th sub-class (infrastructure-pattern) with "pending ≥1 additional infrastructure-pattern candidate" trigger OR K3 reclassification (`doc_kind: governance` or `doc_kind: protocol`). Forward-reference to ADR-0066 lives in this body prose only — NOT in `related_adrs:` frontmatter field (per validator-safety rule: ADR-0066 does not yet exist; frontmatter forward-ref would create dangling-reference).
- **Yaml v12 unchanged** post-ADR-0065 (Axis H1 future-only; no slugs added in this ADR).
- **Validator 9/30 baseline held** — no new doc_id admissions that would fail canon-scope-parsing; new pattern-library-infrastructure concept declared in ADR-0065 `concepts: []` frontmatter does not require yaml slug per Axis H1 (spec-ADR establishes concept but defers slug-registration to next version-bump if operator chooses).
- **IC + PM coordinated grammar alignment for pattern-library infrastructure**: deferred to post-ADR-0065 coordinated-alignment phase. IC and PM do not currently maintain pattern-library directories; if future coordinated work surfaces cross-project pattern-library candidates, alignment would inherit ADR-0065's M4 framework.
- **Federation-encounter pattern-library admission**: first downstream admission candidate now tractable as composition-pattern under ADR-0065 workflow. ADR-0055 Trigger E-1 "pattern-library-spec declared" closes via ADR-0065 existence.
- **Four-enabling-conditions pattern-library admission**: second downstream candidate tractable as design-criteria-pattern under ADR-0065 workflow. ADR-0048 parking condition (pending design-pass work) remains; admission-ADR Step 0.5 will need criteria-operationality evidence.
- **View-template pattern-library doc admission**: third downstream candidate tractable as catalog-pattern under ADR-0065 workflow. ADR-0058 pre-demoted 5 view-templates ready as starting content.

### K4 deferral — audit-outlier forward-reference to ADR-0066

**`docs/governance/project-briefing-pattern.md`** is an audit-outlier identified in Step 0.5. It carries `doc_kind: pattern` but sits outside `docs/patterns/` with 0 inbound `depends_on` edges (isolated from spec-DAG) and uses non-standard body shape (Problem → Forces → Solution → Structure → Resolution → Degradation → Interface) vs the 5 in-scope patterns' uniform shape (Context → Problem → Forces → Pattern → Adopters → Related Patterns). Operator K4 directive (plan-revision gate 2026-04-24 "ratify with one adjustment") defers disposition to **ADR-0066** (TBD, queued MEDIUM priority per K4 discipline — "timely resolution after ADR-0065 lands; not indefinite carry").

**ADR-0066 scope (parked for future authoring)**:
- Evaluate project-briefing-pattern against the 3 ratified M4 sub-classes (composition-pattern / design-criteria-pattern / catalog-pattern). Does it fit cleanly?
- If NO clean fit: reconsider K1-provisional 4th sub-class (infrastructure-pattern) with explicit "pending ≥1 additional infrastructure-pattern candidate emerging" trigger, OR K3 reclassification to `doc_kind: governance` / `doc_kind: protocol`.
- If clean fit to existing 3: admit under appropriate sub-class with retroactive placement decision (migrate to `docs/patterns/` vs keep at `docs/governance/` with cross-reference).

**ADR-0065 scope exclusion mechanisms** (multi-layer safety):
- §Non-goals: ADR-0065 does NOT disposition project-briefing-pattern.
- Axis D: D2 consolidate REMOVED as option (would move outlier out of `docs/governance/`).
- Axis J: J5 body-shape-fix REMOVED as option (would edit outlier body).
- §Rollback: accidental modification of `docs/governance/project-briefing-pattern.md` is rollback trigger.
- AC27 verifier: `git diff --name-status $PREEXEC_SHA..$ACTIVE_SHA -- docs/governance/project-briefing-pattern.md` must return empty.
- §related_adrs frontmatter: does NOT include `spore:ADR-0066-*` (validator-safety — ADR-0066 does not yet exist; forward-ref would create dangling-reference).
- §Consequences body-prose: forward-reference to ADR-0066 lives here (prose-only).

## Alternatives Considered

### Multi-sub-shape alternatives (M1 / M2 / M3 rejected)

- **M1 Unified earning-test**: single abstraction-layer test "(α) articulable-as-compositional-or-constitutive-structure-over-existing-canon-objects AND (β) evidence of recurrence OR design-criteria-cluster OR catalog-integrity across instance-families-OR-tradition-lineages." Rejected: abstraction-layer-that-covers-all-three reduces to "articulable and evidenced" — weak as gate; forces compromise on four-enabling-conditions (β-design-criteria-cluster-completeness as family-equivalent is stretch) and view-template (β-catalog-integrity-as-recurrence-analog is stretch). Loses discriminative power.
- **M2 Three distinct sub-class-specific tests + 3 distinct sub-categories**: each candidate-shape gets own admission criteria + own sub-category under broader pattern umbrella. M2 shares honest-rigor with M4 but adds canon-object-class complexity (3 sub-classes as category-level-distinct). M4 synthesis keeps sub-classes as *variations-of-pattern-family* (one category, three sub-shapes) — preserves 4-category canon-object-class inventory without inflation. M4 chosen as strictly-less-inflation synthesis of M2's honest-shape-typing.
- **M3 Admit one canonical shape; route others elsewhere**: composition-pattern canonical for `docs/patterns/`; design-criteria-cluster promoted to 5th canon-object-class OR doctrine-extension; view-template routed to infrastructure-tooling (not pattern-class). Rejected: preserves pattern-layer parsimony at cost of canon-object-class inflation (from 4 to 5) OR over-extending doctrine-layer (ADR-0045 care-commoning precedent shape-mismatch); "route others elsewhere" means ADR-0065 is NOT admission-infrastructure for 2/3 blocked candidates, requiring 2+ additional ADRs. Structurally expensive; does not solve R-Enc-4 blocker.

### Audit-outlier alternatives (K1 / K1-provisional / K2 / K3 rejected at plan-revision-gate)

- **K1 grandfather in place** (child's original recommendation): outlier stays in `docs/governance/` with §Consequences acknowledgment; no migration or reclassification. Rejected at plan-revision-gate: operator judged 50-50 disposition call + honest-rigor cluster-counting discipline argues against retroactive sub-class-typing without evidence.
- **K1-provisional middle-ground**: §Consequences states "provisional infrastructure-pattern sub-class pending ≥1 additional infrastructure-pattern candidate emerging; if none within reasonable time, downgrade via follow-on ADR." Rejected at plan-revision-gate: still invents 4th sub-class on single-doc evidence; honest-rigor discipline argues against.
- **K2 migrate to `docs/patterns/`**: git mv + body-shape normalization. Rejected: body-content editing violates Axis J AC10 frontmatter-only discipline; pushes ADR-0065 into deeper body-edit scope; session-atomic window at risk; presupposes outlier fits composition-pattern sub-class which is untested.
- **K3 decline pattern status**: reclassify `doc_kind: pattern` → `doc_kind: governance` OR `doc_kind: protocol`; move to appropriate directory. Rejected: requires operator judgment that outlier is genuinely not a pattern; audit-evidence is suggestive (isolation + non-standard body-shape + infrastructure-y content) but not conclusive. K4 defer preserves both judgment and scope-focus.

### Per-axis alternatives (rejected at Step 2 fast-path)

Full per-axis alternatives enumerated in decision-brief at `tmp/canon-adr-0065-pattern-library-infrastructure-decision-brief-2026-04-24.md` §3 Axes A-test-shape through J. Summary of rejections:

- A-test-shape alternatives (A-ts-2 / A-ts-3 / A-ts-4 / A-ts-5): A-ts-2 forces M1; A-ts-3 insufficient for design-criteria-pattern; A-ts-4 loses discriminative power; A-ts-5 partially folded into J1 grandfather.
- A-sub-class alternatives (A-sc-2 / A-sc-3 / A-sc-4): A-sc-2 forces M1; A-sc-3 forces M3; A-sc-4 preemptively invents 4th sub-class.
- B alternatives (B1 / B2 / B3): subsumed by B4 / insufficient / weakens integrity.
- C alternatives (C1 / C2 / C4 / C5): too minimal / too heavy / lifecycle-gated promotion issue / viable Enriched fallback.
- D alternatives (D1 / D3 / D5): acceptable but D4 adds catalog-documentation value; D2 REMOVED per K4.
- E alternatives (E2 / E3 / E4 / E5): insufficient / over-engineered / loses richness / requires cadence.
- F alternatives (F2 / F3 / F4): coupled to I2/I4 / requires tracking infrastructure.
- G alternatives (G2 / G3 / G4): reserved Enriched / out-of-scope / low-value.
- H alternatives (H2 / H3 / H4 / H5): no forward-commitment / no admission rigor / reserved Enriched / schema question.
- I alternatives (I1 / I2 / I3 / I5): doesn't address 4-framing / over-expand / overlap with I4 / defer unnecessary.
- J alternatives (J2 / J3 / J4): reserved Enriched / incompatible with window / low-value; J5 REMOVED per K4.

## Evidence

- **Primary R-claim source** (body-only; no frontmatter `r_claim_source:` per plan convention): ADR-0055 §Residues R-Enc-4 line 208 — "pattern-library infrastructure under-specified" residue.
- **Parking sources**: ADR-0048 lines 150-152 (four-enabling-conditions pattern-library parking + four-categories origin); ADR-0055 lines 157-183 (federation-encounter triggers E-1..E-5 + pattern-library candidate shape); ADR-0058 line 124 (view-template pattern-library doc parking with 5 demoted projections).
- **Method-precedent sources**: ADR-0044 (Core Thesis canon-object baseline + earning-test two-condition shape); ADR-0048 (parsimony-as-earning-test-outcome discipline); ADR-0062/0063/0064 (primitive-bullet scope-conditioning pattern — inherited for Axis I4 applied to protocol-file); ADR-0061 (decline-inline-prose-only precedent — inherited for K4 body-only forward-reference pattern); ADR-0064 (honest-rigor cluster-counting discipline — inherited for K4 audit-outlier disposition reasoning).
- **Canonical evidence sources** (body-references per plan §supported_by canonical non-tmp sources rule; ≥5 of 10 cited):
  - `docs/project-vision.md:10` (product-vocabulary framing 4 — "pattern language, protocol family, and governance-memory pattern")
  - `docs/project-vision.md:111` (canon-object-class framing 2 — Four categories of canon objects, updated by ADR-0065 for M4 sub-classes)
  - `docs/project-vision.md:299` (product-vocabulary framing 4 — "Protocol family: Agent Commons — the pattern language, protocols, and governance-memory pattern")
  - `docs/research/planning/canon-review-protocol.md:34, :58` (canon-review-exclusion framing 3 — scope-conditioned by ADR-0065 Axis I4 with explicit 4-framing acknowledgment)
  - `docs/foundations/governance-artifacts-and-graph-projections.md` (parallel Four Categories of Canon Objects section added by ADR-0065 resolving Phase 1 asymmetry)
  - `docs/patterns/governance-memory.md:36` (doc_kind-canonical framing 1 — enumerated `pattern` in 9 canonical doc_kinds)
  - `docs/patterns/commitment-pooling.md` + `discourse-as-governance.md` + `federated-knowledge-exchange.md` + `intent-publication-and-activation.md` (5 in-scope patterns — body-shape uniformity + tentative composition-pattern classification)
  - `docs/governance/project-briefing-pattern.md` (audit-outlier — NOT touched per K4 exclusion; body-only reference in §Consequences)
  - `docs/research/concepts-p2p-wiki.yaml` (slug registry v12 — unchanged per Axis H1 required-going-forward)
- **Step 0.5 audit manifest**: `tmp/adr-0065-audit-manifest-2026-04-24.md` (working-evidence log; not in frontmatter `supported_by` per tmp/-exclusion rule).
- **Plan-revision proposal**: `tmp/adr-0065-plan-revision-proposal-2026-04-24.md` (operator-ratified 2026-04-24 "ratify with one adjustment"; not in frontmatter).
- **Decision-brief with operator directive**: `tmp/canon-adr-0065-pattern-library-infrastructure-decision-brief-2026-04-24.md` §Decision (captures verbatim operator fast-path acceptance text; not in frontmatter).
- **Validator 9/30 baseline**: held across ADR-0065 authoring; pre-validator output `tmp/adr-0065-validator-pre.txt`.
- **Cross-ADR consistency**: ADRs 0044 / 0048 / 0055 / 0058 / 0061 / 0062 / 0063 / 0064 preserved unchanged structurally. ADR-0066 (TBD) forward-referenced in §Consequences body only, NOT in `related_adrs:` frontmatter.

## Diff summary

- **New file**: `docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md` (this file).
- **New file**: `docs/patterns/README.md` (Axis D4 catalog + Axis C3 tiered schema documentation).
- **Canon edits** (applied in active-commit):
  - `docs/project-vision.md` §111 "Four categories of canon objects" bullet (iv): updated to name 3 pattern sub-classes under M4 framework (composition-patterns / design-criteria-patterns / catalog-patterns) with earning-test pointer to this ADR's §M4 Sub-class Framework.
  - `docs/foundations/governance-artifacts-and-graph-projections.md`: new §Four Categories of Canon Objects section inserted between §Dual Representation and §Graph Projections, mirroring `project-vision.md:111` with M4 sub-class detail. Resolves Phase 1 asymmetry-finding (parallel four-categories list absent in this file).
  - `docs/research/planning/canon-review-protocol.md`: scope-conditioning paragraph added after line 34 acknowledging 4-framing tension (doc_kind-canonical + canon-object-class + this-protocol's-exclusion + product-vocabulary); scope-conditioning note appended to line 58 "Explicitly out of scope" clause clarifying `patterns/` out-of-scope means out-of-this-protocol's-admission-workflow, NOT out-of-canon-object-class. Inherits ADR-0062/0063/0064 primitive-bullet scope-conditioning canon-method applied to protocol-file (first application to non-primitive-bullet canon target).
- **Unchanged on disk**: ADR-0044, ADR-0048, ADR-0055, ADR-0058, ADR-0061, ADR-0062, ADR-0063, ADR-0064. All relationships narrated in ADR-0065 body prose per decision-gated-spec-ADR convention.
- **NOT touched** (per K4 + §Non-goals + §Rollback): `docs/governance/project-briefing-pattern.md` (audit-outlier deferred to ADR-0066).
- **Yaml**: `docs/research/concepts-p2p-wiki.yaml` unchanged at v12 (Axis H1 required-going-forward; existing 5 patterns grandfathered under Axis J1).

## Parking lot

- **ADR-0066 audit-outlier disposition for `docs/governance/project-briefing-pattern.md`** (MEDIUM priority per K4 discipline — timely resolution after ADR-0065 lands; not indefinite carry). First queued follow-on.
- **Federation-encounter pattern-library admission** as composition-pattern sub-class under ADR-0065 workflow (ADR-0055 triggers E-1..E-5; E-5 fired via ADR-0064; E-1 closes via ADR-0065 existence).
- **Four-enabling-conditions pattern-library admission** as design-criteria-pattern sub-class (ADR-0048 parking).
- **View-template pattern-library doc** as catalog-pattern sub-class (ADR-0058 parking; 5 demoted view-templates ready as starting content).
- **Bundle-Enriched future elevation** (H4 backfill-3-in-scope-missing-slugs + C5/G2 concepts-required + J2 light-frontmatter-backfill): reserved for future scope-expansion if asymmetric cross-ref graph becomes operationally painful.
- **Validator schema ADR for `archived` status enum addition** (flagged during entry-gate investigation 2026-04-24; ruddick-2026 file drift).
- **Workflow-discipline validator-check in `/end` skill** (flagged during entry-gate investigation; detect untracked-working-tree drift that changes validator baseline between preflight and execution).
- **IC + PM coordinated grammar alignment for pattern-library infrastructure** (deferred; IC and PM do not currently maintain pattern-library directories; if cross-project candidates surface, alignment inherits ADR-0065 M4 framework).

## References

- [docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md](./0044-core-thesis-primitive-roster-alignment.md) — Core Thesis canon-object baseline + earning-test two-condition source
- [docs/research/canon-decisions/0048-power-expressive-constructed-modes.md](./0048-power-expressive-constructed-modes.md) — parsimony-as-earning-test-outcome discipline + four-categories origin + four-enabling-conditions parking
- [docs/research/canon-decisions/0055-encounter-as-composition-framing-note.md](./0055-encounter-as-composition-framing-note.md) — R-Enc-4 "pattern-library infrastructure under-specified" source + federation-encounter triggers E-1..E-5
- [docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md](./0058-phase-2c-graph-projections-dual-axis-bundle.md) — view-template pattern-library parking + 5 demoted graph projections
- [docs/research/canon-decisions/0061-asymmetric-joint-commitment-slug-disposition.md](./0061-asymmetric-joint-commitment-slug-disposition.md) — decline-inline-prose-only precedent (inherited for K4 body-only forward-ref pattern)
- [docs/research/canon-decisions/0062-membrane-as-self-produced-disposition.md](./0062-membrane-as-self-produced-disposition.md) — primitive-bullet scope-conditioning pattern first application (inherited for Axis I4)
- [docs/research/canon-decisions/0063-participatory-sense-making-disposition.md](./0063-participatory-sense-making-disposition.md) — scope-conditioning second application
- [docs/research/canon-decisions/0064-co-presence-field-condition-disposition.md](./0064-co-presence-field-condition-disposition.md) — scope-conditioning third application + honest-rigor cluster-counting discipline (inherited for K4 audit-outlier reasoning)
- [docs/project-vision.md](../../project-vision.md) — §111 Four categories of canon objects (updated); §10 + §299 product-vocabulary framing 4
- [docs/foundations/governance-artifacts-and-graph-projections.md](../../foundations/governance-artifacts-and-graph-projections.md) — new §Four Categories of Canon Objects parallel section (asymmetry resolved)
- [docs/research/planning/canon-review-protocol.md](../planning/canon-review-protocol.md) — §1 scope-conditioning with 4-framing acknowledgment (Axis I4 edits at lines 34 + 58)
- [docs/patterns/README.md](../../patterns/README.md) — pattern-library catalog + M4 sub-class documentation + tiered schema (Axis D4 + C3)
- [docs/patterns/commitment-pooling.md](../../patterns/commitment-pooling.md), [discourse-as-governance.md](../../patterns/discourse-as-governance.md), [federated-knowledge-exchange.md](../../patterns/federated-knowledge-exchange.md), [governance-memory.md](../../patterns/governance-memory.md), [intent-publication-and-activation.md](../../patterns/intent-publication-and-activation.md) — 5 in-scope existing patterns (tentative composition-pattern classification; grandfathered under Axis J1)
- [docs/governance/project-briefing-pattern.md](../../governance/project-briefing-pattern.md) — audit-outlier deferred to ADR-0066 per operator K4 directive; NOT touched by ADR-0065
- [docs/research/concepts-p2p-wiki.yaml](../concepts-p2p-wiki.yaml) — slug registry v12 (unchanged by ADR-0065; Axis H1 required-going-forward)
