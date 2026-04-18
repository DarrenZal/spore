---
doc_id: spore.connection.canon-framing-boundary-theory-unifier
doc_kind: research
research_subkind: canon_framing
status: active
relates_to:
  - spore.connection.boundary-commoning
  - spore.connection.openwashing-opposition
  - spore.connection.bioregional-scope-legal-constraint
  - spore.connection.decentralization-theater-opposition
  - ic.connection.interoperability-as-institutional
  - pm.connection.bioregional-coordination
  - spore.connection.p2p-wiki-pass-2-capstone-synthesis
concepts:
  - boundary-commoning
  - filtering-membrane
  - interoperability-as-institutional
  - bioregional-scope
---

# Canon framing — Boundary theory as unifier across Spore / IC / PM

Shared framing for a coordinated 3-repo canon edit on Tier B insight #2 of the P2P Foundation wiki Pass 2 capstone synthesis (§2.2: "every bridge note is working a boundary question, whether named as such or not"). This note accompanies three per-repo ADRs — `spore:ADR-0003-boundary-theory-unifier`, `intelligence-commons:ADR-0003-boundary-theory-unifier`, `poietic-match:ADR-0003-boundary-theory-unifier` — that land canon edits in each project's in-scope foundation set.

## §1 What the capstone says

From `spore.connection.p2p-wiki-pass-2-capstone-synthesis` §2.2:

> `boundary-commoning` is the single concept that appears — directly, or through a direct cognate — in every bridge note across both passes. Spore's mycorrhizal-federation, IC's memory-governance, and PM's CVLE are all boundary-making operations at different scales. Pass 1 flagged boundary-commoning as a cross-3-project convergence (3 clusters). Pass 2 makes the pattern general: every bridge note is working a boundary question, whether named as such or not.

The capstone also flags a specific structural unresolved: there is no single boundary-theory variant that suffices. Four distinct traditions show up in the intake corpus and cannot be merged without each losing its operational surface:

- **De Angelis filtering-membrane** — cell-biology-framed selective permeability. Wiki anchor: Category:Knowledge_Commons. Refuted empirically by the FairCoin case study (Dallyn & Frenzel 2021, *Antipode*) when boundaries are insufficiently specified.
- **Maturana-Varela autopoietic closure** — organisational closure with informational openness. Wiki anchor: autopoiesis / structural-coupling page lineage.
- **Escobar pluriversal ontological difference** — incommensurability across ontologies that a meta-ontology would flatten. Wiki anchor: the pluriversal / Buen Vivir / Ontological Dimension of Commoning pages. Carried as `ic:ADR-0001-pluriversal-incommensurability` (held-as-tension).
- **Cosmo-local / Charter-of-Forest subsidiarity** — legal and production-scope boundaries. Wiki anchor: Cosmo-localization, Commons Law pages.

Canon should name *which* boundary-theory variant is load-bearing for each in-scope primitive rather than washing them together into a single "boundary" frame.

## §2 Why this is one coordinated decision and not three

Per Constraint 1 and Constraint 3 of the canon-review protocol v1: when an R-claim's implication touches a shared concept used in ≥2 projects (boundary-commoning is cross-3-project per Tier C escalation list), the ADR is authored first with cross-project coherence review, and edits land as a coordinated triple commit set. The R-claim evidence spans all three repos:

- `spore.connection.boundary-commoning:R1` — target `spore.term.field`; primary cluster `spore.term.field:boundary-commoning` = 8S/0O (psql personal_koi, 2026-04-18).
- `spore.connection.openwashing-opposition:R1` — target `spore.mycorrhizal-federation-protocol`; no dedicated cluster in DB (0S/0O under `spore.mycorrhizal-federation-protocol:boundary-commoning`); R-claim carried as secondary source on Spore ADR because it imposes a governance discipline (multi-layer scope specification) that the field-as-boundary-site edit must honour.
- `ic.connection.interoperability-as-institutional:R5` — target `ic.memory-layers`; cluster `ic.memory-layers:boundary-commoning` = 3S/0O.
- `pm.connection.bioregional-coordination:R4` — target `pm.project-vision`; cluster `pm.project-vision:boundary-commoning` = 3S/0O.

Two further R-claims carry the concept at connection-note targets (not canon) and count as evidence context only: `spore.connection.bioregional-scope-legal-constraint:R4` (target `spore.connection.boundary-commoning`, 3S/0O) and `spore.connection.decentralization-theater-opposition:R5` (target `pm.connection.bioregional-coordination`, 0S/0O).

Scope is 3-repo because R-claim evidence targets canon doc_ids in all three repos. Single-repo scoping would force Tier C to revisit boundary-theory for the other two repos and violate Constraint 3 (single-repo edits to shared concepts forbidden).

## §3 What changes per repo

### Spore
- `spore.term.field` — acknowledge `boundary-commoning` as the external cousin-concept for cross-field composition (WITHIN-field coordination vs BETWEEN-field coordination scope distinction), per the De Angelis / Birkinbine source tradition, preserving Spore's existing authorisation-operation vocabulary (who speaks for the field, cross-field claim validation) which boundary-commoning under-specifies.
- `spore.mycorrhizal-federation-protocol` — motivational-language addition naming the federation protocol as a boundary-making apparatus, alongside a discipline rule (from openwashing-opposition R1) that "open federation" / "open protocol" / "federated openness" language must be paired with explicit scope specification across four surfaces (wire-protocol, reference-implementation, contribution-acceptance, spec-governance) and must identify which boundary-theory variant is load-bearing for the specific mechanic being documented.

### IC
- `ic.memory-layers` — reframe the between-layer surface (Working ↔ Session ↔ Procedural ↔ Semantic ↔ Governance) as a boundary-commoning surface where institutional-interoperability review applies; cross-layer operations (promotion, retention, attribution-flow, cross-layer linking) carry three-layer review discipline (technical feasibility, semantic coherence, rights/governance continuity) rather than being internal implementation details.

### PM
- `pm.project-vision` — carry the bioregioning / process-over-map framing as a first-class stance; adopt the boundary-commoning scope distinction (WITHIN-pool rules vs BETWEEN-pool rules as structurally distinct coordination surfaces); explicitly decline baking a fixed bioregional ontology into PM's schema (configurable-by-participants rather than PM-team-authored).

## §4 Orthogonal to existing holds

Held-tension overlap check (per Constraint 5c): the active `hold-as-tension` ADRs are `pm:ADR-0001-accounting-dependence` (concepts: market-dependence), `ic:ADR-0001-pluriversal-incommensurability` and `spore:ADR-0001-pluriversal-incommensurability` (concepts: pluriversal-commoning, memory-governance). The boundary-theory-unifier ADR concepts [boundary-commoning, filtering-membrane] do not overlap with any held concept. The pluriversal-commoning hold and the boundary-theory framing are complementary not competing: pluriversal-commoning is one of the four named boundary-theory variants the canon must distinguish, and the hold is about whether cross-ontology translation is political or technical — not about whether boundaries exist.

## §5 Per-repo ADR manifest

- `spore/docs/research/canon-decisions/0003-boundary-theory-unifier.md`
- `intelligence-commons/docs/research/canon-decisions/0003-boundary-theory-unifier.md`
- `poietic-match/docs/research/canon-decisions/0003-boundary-theory-unifier.md`

Each per-repo ADR references this framing note via `shared_framing:` frontmatter (absolute path).
