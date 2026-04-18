---
doc_id: spore.connection.canon-framing-three-layer-coordination-stack
doc_kind: research
research_subkind: canon_framing
status: active
relates_to:
  - spore.connection.commons-law-and-charter-lineage
  - spore.connection.cosmo-local-production
  - spore.connection.platform-cooperativism-constructive
  - spore.connection.bioregional-scope-legal-constraint
  - spore.connection.reproductive-commoning
  - spore.connection.solidarity-economy-and-mutual-aid
  - spore.connection.gift-economy-and-ongoing-obligation
  - ic.connection.memory-governance
  - ic.connection.inclusive-and-generative-value
  - ic.connection.hess-ostrom-knowledge-commons-framework
  - pm.connection.commitment-pooling-and-mutual-credit
  - pm.connection.bioregional-coordination
  - pm.connection.platform-cooperativism-constructive
  - spore.connection.p2p-wiki-pass-2-capstone-synthesis
concepts:
  - polycentric-governance
  - memory-governance
  - curation-valuation-limitation-exchange
  - platform-cooperativism
  - cosmo-local-production
  - reproductive-commoning
  - commitment-pooling
  - knowledge-commons
  - bioregional-scope
  - commons-law
  - solidarity-substrate
---

# Canon framing — Three-layer coordination stack (reproduction / production / governance)

Shared framing for a coordinated 3-repo canon edit on Tier B insight #3 of the P2P Foundation wiki Pass 2 capstone synthesis (§2.3: "complete commons-coordination infrastructure requires three layers — reproduction, production, governance — and every P2P protocol implicitly operates at one layer; most projects need to specify where they sit"). This note accompanies three per-repo ADRs — `spore:ADR-0004-three-layer-coordination-stack`, `intelligence-commons:ADR-0004-three-layer-coordination-stack`, `poietic-match:ADR-0004-three-layer-coordination-stack` — that land additive canon edits in each project's vision doc.

## §1 What the capstone says

From `spore.connection.p2p-wiki-pass-2-capstone-synthesis` §2.3:

> Complete commons-coordination infrastructure requires three layers: **reproduction** (care, provisioning, territorial stewardship), **production** (associational / platform / cooperative), and **governance** (Ostrom design principles, commons law, bioregional scope). Absence of any layer invites a specific failure mode. Pass 1 operated largely at the governance layer; Pass 2 names the other two layers and shows they are structurally load-bearing. Every P2P protocol implicitly operates at one layer; most projects — including Spore/IC/PM — need to specify where they sit.

The capstone's evidence for each layer (Pass 2 bridge notes):

- **Reproduction layer.** `spore.connection.reproductive-commoning` (Federici/Bhattacharya/Bresnihan/Dyer-Witheford), `spore.connection.solidarity-economy-and-mutual-aid` (tontines/ollas/CSAs/BAMA as operational instances), `spore.connection.gift-economy-and-ongoing-obligation` (gift-obligation as reproductive-flow substrate). Frozen-concepts v2 slugs: `reproductive-commoning`, `solidarity-substrate`, `gift-obligation`, `commons-as-verb`.
- **Production layer.** `spore.connection.platform-cooperativism-constructive` (Scholz/Bauwens/Conaty-Bollier), `spore.connection.cosmo-local-production` (Ramos/Bauwens/Kostakis; Fab Labs; DGML), `spore.connection.rea-valueflows-semantic-layer` (Foster/Haugen; REA ontology as bidirectional-flow semantics). Frozen-concepts v2 slugs: `platform-cooperativism`, `open-cooperativism`, `cosmo-local-production`, `open-hardware-commons`, `rea-ontology`, `curation-valuation-limitation-exchange`.
- **Governance layer.** `spore.connection.commons-law-and-charter-lineage` (Charter of the Forest 1217 / Magna Carta 1215 / modern trusts), `spore.connection.bioregional-scope-legal-constraint` (four-level ladder; bioregional outer boundary), `ic.connection.hess-ostrom-knowledge-commons-framework` (DPs as empirical patterns, not blueprint), `ic.connection.memory-governance` (memory-governance as cross-cutting primitive). Frozen-concepts v2 slugs: `commons-law`, `bioregional-scope`, `polycentric-governance`, `inclusive-governance`, `memory-governance`.

**Failure modes by missing layer** (Phase A §8c, reinforced by opposition notes):

- Governance without reproduction → workforce burnout and extractive-by-default culture.
- Governance without production → rules without flows; vocabulary without substance.
- Production without governance → platform capture (Uber/Airbnb as historical evidence).
- Semantics without governance → openwashing.
- Law without governance → enclosure via regulation.
- Reproduction without production → commoning without scale (COVID-19 mutual-aid groups fragile at scale).

Each failure mode is documented in the Pass 2 capstone §2.3 and grounded in specific opposition bridge notes.

## §2 Why this is one coordinated decision and not three

Per Constraint 1 and Constraint 3 of the canon-review protocol v1: when an insight reaches multiple repos and each repo must declare where it sits on a shared architectural stack, the decision is one architectural self-description, landed as a coordinated triple. Evidence is symmetric across repos in the sense that each repo carries its own primary R-claim on its own canon target — matching the symmetric-multi-primary pattern established by `ADR-0003-boundary-theory-unifier`.

The canon edit is deliberately lightweight: one additive paragraph per project-vision.md naming the stack and the project's specific layer occupancy. The stack frame is descriptive-structural, not prescriptive — it does not claim every primitive must touch all three layers; it claims primitives whose absence at a given layer has historically invited a specific failure mode must specify what replaces that layer's work if not itself present.

## §3 Per-repo layer occupancy

Per capstone §2.3 ("what it changes"):

### Spore

**Operates across all three layers**, with `mycorrhizal-federation-protocol` as the stack-aware primitive:
- Governance-layer clauses (Ostrom DPs, commons-law scaffolding, polycentric-governance) land in federation agreements.
- Production-layer clauses (platform-cooperativism / open-cooperativism structure, REA-compatible semantics, cosmo-local subsidiarity / DGML) live in the federated instances.
- Reproduction-layer clauses (visible reproductive labour, no invisibilisation, commons-as-verb) attach to instance operations per `spore:ADR-0002-reproduction-primacy`.

Primary R-claim: `spore.connection.commons-law-and-charter-lineage:R2` (target: `spore.mycorrhizal-federation-protocol`, concept: `polycentric-governance`; cluster `spore.mycorrhizal-federation-protocol:polycentric-governance` = 8S/0O, psql personal_koi 2026-04-18).

Aggregate evidence (per-layer, all pass Constraint 5 ≥3S and S>O):
- Governance: `spore.mycorrhizal-federation-protocol:polycentric-governance` = 8S/0O; `spore.mycorrhizal-federation-protocol:bioregional-scope` = 5S/0O.
- Production: `spore.foundations.spore-instance-model:cosmo-local-production` = 5S/0O.
- Reproduction: `spore.term.field:reproductive-commoning` = 5S/0O (carried by `spore:ADR-0002`).

### IC

**Operates primarily at the governance layer via memory-governance**, with knowledge-commons as reproduction-of-shared-understanding (capstone §2.3):
- Governance: memory-governance as cross-cutting primitive (attribution, provenance, preservation, access) across the intelligence primitives.
- Reproduction (of shared understanding): knowledge-commons framing — memory as care work, not access work, per `ic.connection.hess-ostrom-knowledge-commons-framework`.
- Production layer is *not IC-native*: IC's memory-layers carry production-layer semantics (REA/ValueFlows) only when federated through Spore or PM — production-layer evidence lives in the sibling repos, not in IC canon.

Primary R-claim: `ic.connection.memory-governance:R1` (target: `ic.intelligence-primitives`, concept: `memory-governance`; cluster `ic.intelligence-primitives:memory-governance` = 22S/0O, psql personal_koi 2026-04-18).

Aggregate evidence:
- Governance: `ic.intelligence-primitives:memory-governance` = 22S/0O; `ic.intelligence-primitives:inclusive-governance` = 9S/0O.
- Reproduction-of-shared-understanding: `ic.intelligence-primitives:knowledge-commons` = 6S/0O.
- Production: declared *implicit via federation*, not gated on an IC-native cluster — the three-layer ADR frames this explicitly rather than forcing IC to carry a production-layer cluster it does not have.

### PM

**Operates primarily at the production layer via commitment-pooling and CVLE**, with reproduction-layer genealogy (tontines, ollas) and bioregional-outer governance:
- Production: CVLE (curation-valuation-limitation-exchange) as first-order metabolic-operations substrate; commitment-pooling as protocol-level flow semantics.
- Reproduction: the commitment-pool structure itself encodes the tontines / ollas communes lineage per `pm:ADR-0002-reproduction-primacy` (genealogy paragraph already landed in PM project-vision).
- Governance: bioregional-scope as the outermost boundary; commons-law ladder at cross-bioregion federation per `pm:ADR-0003-boundary-theory-unifier`.

Primary R-claim: `pm.connection.commitment-pooling-and-mutual-credit:R1` (target: `pm.grammar`, concept: `curation-valuation-limitation-exchange`; cluster `pm.grammar:curation-valuation-limitation-exchange` = 20S/0O, psql personal_koi 2026-04-18).

Aggregate evidence:
- Production: `pm.grammar:curation-valuation-limitation-exchange` = 20S/0O; `pm.connection.commitment-pooling-and-mutual-credit:commitment-pooling` = 13S/0O (connection-note target, evidence context).
- Reproduction: carried by `pm:ADR-0002-reproduction-primacy` (tontines/ollas genealogy already in canon).
- Governance: `pm.project-vision:bioregional-coordination` = 4S/0O (carried by `pm:ADR-0003-boundary-theory-unifier`); `pm.grammar:solidarity-substrate` = 3S/0O (Conaty/Lewis social-solidarity-economy framing).

## §4 Relationship to prior ADRs

The three-layer stack is the **architectural frame**; reproduction-primacy (`ADR-0002` across all three repos) is the **reproduction-layer content**; boundary-theory-unifier (`ADR-0003` across all three repos) is a **cross-cutting boundary-making discipline** that applies at each of the three layers. Canon should cite these together without subsuming any into the others:

- `ADR-0004` (this one) names the stack and each project's layer occupancy.
- `ADR-0002` re-motivates canon so reproduction-layer visibility is first-order; this ADR points to `ADR-0002` for substantive reproduction-layer content rather than duplicating.
- `ADR-0003` names boundary-making as the apparatus each layer uses; the three-layer stack is orthogonal to the boundary-theory decomposition (reproduction / production / governance are layers of coordination; filtering-membrane / autopoietic-closure / pluriversal-difference / subsidiarity are variants of boundary-making). Both apply simultaneously.

Reciprocal `related_adrs:` in this ADR point at all six prior ADR siblings (spore:0002 / ic:0002 / pm:0002 + spore:0003 / ic:0003 / pm:0003) plus the two cross-repo sibling ADR-0004 entries.

## §5 Orthogonal to existing holds

Held-tension overlap check (per Constraint 5c): the active `hold-as-tension` ADRs are `pm:ADR-0001-accounting-dependence-tension` (concepts: market-dependence), `ic:ADR-0001-pluriversal-incommensurability` and `spore:ADR-0001-pluriversal-incommensurability` (concepts: pluriversal-commoning, memory-governance).

- The three-layer-stack ADR concept set across the three per-repo ADRs is [polycentric-governance, memory-governance, curation-valuation-limitation-exchange, platform-cooperativism, cosmo-local-production, commitment-pooling, knowledge-commons, bioregional-scope, commons-law, reproductive-commoning, solidarity-substrate].
- **memory-governance overlaps `ic:ADR-0001`** (and the Spore companion hold). Resolution: orthogonal-concerns per Constraint 5c option (i) — the pluriversal hold is about whether cross-ontology translation at the memory-governance ACCESS function is political-not-technical (an epistemic-sovereignty discipline); the three-layer-stack is about memory-governance's architectural OCCUPANCY of IC's governance layer (an architectural self-description). Both apply to the same primitive simultaneously without conflict — the same resolution pattern used by `ic:ADR-0002-reproduction-primacy` and `ic:ADR-0003-boundary-theory-unifier`.
- All other concepts are disjoint from prior-tier holds. No blocks.

## §6 Per-repo ADR manifest

- `spore/docs/research/canon-decisions/0004-three-layer-coordination-stack.md`
- `intelligence-commons/docs/research/canon-decisions/0004-three-layer-coordination-stack.md`
- `poietic-match/docs/research/canon-decisions/0004-three-layer-coordination-stack.md`

Each per-repo ADR references this framing note via `shared_framing:` frontmatter (absolute path).
