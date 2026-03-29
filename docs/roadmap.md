---
doc_id: spore.roadmap
doc_kind: roadmap
status: active
depends_on:
  - spore.project-vision
---

# Spore Roadmap

## Purpose

This roadmap tracks the development of Agent Commons patterns, protocols, and governance -- the pattern language and protocol family for multi-agent coordination that Spore publishes.

## Current State: What's Validated

Working implementations exist at each layer, though not yet at scale:

- **Governance memory** (spec DAG): 4 projects using frontmatter-based doc governance with cross-project dependency validation (Agent Commons, darren-workflow, salish-sea-dreaming, BKC)
- **Federation**: BKC operates 4 bioregional nodes (Salish Sea, Greater Victoria, Cowichan Valley, Front Range) with bidirectional KOI-net federation
- **Commitment pooling**: 2 pools activated on Celo mainnet (Victoria Landscape Hub, Cascadia Bioregion Stewardship), 23+ commitments, 33,400 VCV minted, routing visualization live
- **AI coordination**: darren-workflow and dobby demonstrate agent memory, context injection, skill routing, meeting-to-entity pipelines
- **Knowledge operations**: 1,000+ entities across BKC nodes, hybrid retrieval (BM25+RRF+FlashRank), contextual enrichment

## What's Not Yet Validated

- Multi-agent decision-making (current system governs artifacts, not actors)
- True federation between sovereign nodes not maintained by the same team
- External adoption by a project/team not run by the original maintainer
- Holonic nesting at more than 2 levels
- Intent publication as a formal protocol (BKC has precursor pipeline)
- Vision-as-graph grounding through sensors

## Track 1: External Adoption

**Question**: Does the pattern language travel?

**Goal**: A second sovereign user/team adopts one or more Agent Commons patterns on their own infrastructure.

**What exists**: Public repo (PPL license), adoption guide, bootstrap spec, working examples across 4 projects.

**What's needed**: Clearer minimal-viable-adoption path. Starter templates. Potentially: a hosted or SaaS knowledge graph option.

**Success signal**: Someone runs `ingest_spec_dag.py` on their own project, or builds a sensor node for their knowledge garden, without hand-holding.

## Track 2: Decision-Governance Layer

**Question**: Can we move from structural governance of artifacts to participatory governance of actors?

- **Phase A**: Proposal lifecycle + decision records. New doc_kind candidates: `proposal`, `decision`. Proposals reference the specs they would modify and have a status lifecycle (draft -> open -> accepted/rejected). Decisions record outcomes, consent, objections, and resolution.
- **Phase B**: Authority and domain declarations. Which agents hold authority over which parts of the spec DAG. Domain boundaries and delegation rules.
- **Phase C**: Audit trail + multi-agent authority. How decisions propagate into artifacts. Conflict resolution. The audit trail stored and queried through the knowledge graph.

AI-as-governance-participant belongs here. Strong AI context and memory exist today (darren-workflow, dobby), but real multi-agent decision governance does not yet. This track builds the primitives for it.

## Track 3: Pattern Language Maturation

Writing, testing, and refining patterns through real adoption. This includes:

- Testing existing patterns against external adopters (Track 1 feedback)
- Writing new patterns as coordination needs emerge
- Vision-graph implementation (representing normative artifacts as queryable graphs grounded to sensor state)
- Active inference formalization (making the gap-closing frame precise enough to compute over)
- Deeper exploration of field coherence: how topology (holons, nesting, graph-of-graphs), vector fields (needs, offers, intents), and routing dynamics (pools, circulation, settlement) form complementary mathematical lenses for coordination

## Cross-cutting: Plurality and Interoperability

Not a separate track but a design constraint on all work:

- **Common core, local variation** -- thin shared protocol layer, thick local semantics
- **Schema translation** -- JSON-LD contexts, SKOS mappings, emergent bridges between local ontologies
- **Capability declarations** -- nodes declare what profiles they implement, what they expose, what trust levels they accept
- **Profile/version manifests** -- systems declare compatibility, not identity
- **No single ontology mandate** -- plurality is a feature; translation is negotiated, never centrally imposed
- **Reference**: BKC's thin meta-protocol (3 invariants on every artifact: what is shared, who attests, who can use how) as existence proof

## Ecosystem

Spore defines patterns. Others implement them.

- **koi-processor / RegenAI** -- runtime substrate for knowledge operations, federation, sensors
- **BKC** -- operational validation across 4 bioregional nodes
- **darren-workflow** -- personal workflow validation
- **salish-sea-dreaming** -- creative/bioregional adoption
- **Regen Commons / Open Civics / Network Nations** -- potential civic adoption surfaces

## Non-Goals

- Full Sociocracy 3.0 implementation (borrow concepts, don't adopt wholesale)
- Building a runtime platform (Spore provides patterns, not software)
- Token/incentive system design (commitment pooling is about promises, not speculation)
- Forced ontology unification (translate, don't unify)
- Repo splitting (one repo until usage pressure justifies separation)
