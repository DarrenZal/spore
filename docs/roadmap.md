---
doc_id: spore.roadmap
doc_kind: roadmap
status: active
depends_on:
  - spore.project-vision
---

# Spore Roadmap

## Purpose

This roadmap tracks the development of Agent Commons patterns, protocols, and governance -- the pattern language and protocol family for multi-agent coordination that Spore publishes. The telos is collective agency: building the infrastructures of interdependence that enable agents at every scale to sense, decide, and act meaningfully within the systems that sustain them.

## Current State: What's Validated

Working implementations exist at each layer, though not yet at scale:

- **Governance memory** (spec DAG): Multiple projects using frontmatter-based doc governance with cross-project dependency validation (Agent Commons, BKC, personal workflow and creative/bioregional projects)
- **Federation**: BKC operates 4 bioregional nodes (Salish Sea, Greater Victoria, Cowichan Valley, Front Range) with bidirectional KOI-net federation
- **Commitment pooling**: 2 pools activated on Celo mainnet (Victoria Landscape Hub, Cascadia Bioregion Stewardship), 23+ commitments, 33,400 VCV minted, routing visualization live
- **AI coordination**: Personal workflow implementations and dobby demonstrate agent memory, context injection, skill routing, meeting-to-entity pipelines
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

**What's needed**: Clearer minimal-viable-adoption path. Starter templates. Potentially: a hosted or SaaS knowledge graph option. Instance model documentation so adopters understand the composable architecture (canon/node/agent/site) and choose what to implement. Legacy bridge patterns and reversible adoption surfaces — Spore should support coexistence with inherited coordination systems, not require total rupture. Transitional membranes that allow partial adoption, translation between legacy and emerging substrates, and reversible movement.

**Success signal**: Someone runs `ingest_spec_dag.py` on their own project, or builds a sensor node for their knowledge garden, without hand-holding.

## Track 2: Decision-Governance Layer

**Question**: Can we move from structural governance of artifacts to participatory governance of actors?

- **Phase A**: Proposal lifecycle + decision records. New doc_kind candidates: `proposal`, `decision`. Proposals reference the specs they would modify and have a status lifecycle (draft -> open -> accepted/rejected). Decisions record outcomes, consent, objections, and resolution.
- **Phase B**: Authority and domain declarations. Which agents hold authority over which parts of the spec DAG. Domain boundaries and delegation rules.
- **Phase C**: Audit trail + multi-agent authority. How decisions propagate into artifacts. Conflict resolution. The audit trail stored and queried through the knowledge graph.

AI-as-governance-participant belongs here. Strong AI context and memory exist today (personal workflow implementations, dobby), but real multi-agent decision governance does not yet. This track builds the primitives for it.

## Track 3: Pattern Language Maturation

Writing, testing, and refining patterns through real adoption. This includes:

- Testing existing patterns against external adopters (Track 1 feedback)
- Writing new patterns as coordination needs emerge
- Vision-graph implementation (representing normative artifacts as queryable graphs grounded to sensor state)
- Active inference formalization (making the gap-closing frame precise enough to compute over). Evaluate Bennett's Stack Theory (2026) as one candidate formalism — derives the same directional result from persistence ordering alone, without assuming organisms or free energy. Design question: can we move toward computable viability signals (does this action expand or contract the viable continuation set?) rather than gap-closing alone?
- Deeper exploration of field coherence: how topology (holons, nesting, graph-of-graphs), vector fields (needs, offers, intents), and routing dynamics (pools, circulation, settlement) form complementary mathematical lenses for coordination

## Track 4: Comparative Intake and Schema Translation

**Question**: Can Spore learn systematically from the wider coordination ecosystem?

### Comparative intake

A repeatable loop for external frameworks, papers, repos, and protocols:

1. **Ingest** source material → extract key concepts, primitives, lifecycle states
2. **Bridge** → write bridge notes in `docs/research/connections/` linking external concepts to Spore grammar
3. **Claim** → create bilateral claims with evidence from both the external source and relevant Spore docs
4. **Disposition** → record what the comparison suggests: no change, clarify existing term, candidate pattern/protocol/primitive, or unresolved tension
5. **Promote** (deliberate, separate session) → if disposition warrants, update core docs

### Ontology and schema mapping (future)

Structural correspondences between systems' primitives, lifecycles, graph types, and protocol roles. Inspired by Cambria's translation-layer approach, with LLM-proposed candidates and governance review. Eventually: formalized, testable, executable translation specs / lenses.

### Staged autonomy

| Stage | Who acts | What happens |
|-------|----------|-------------|
| **Now** | Human + Claude Code | Manual comparative intake sessions |
| **Next** | Claude drafts | Claude proposes bridge notes and dispositions for review |
| **Later** | Agent opens PRs | Autonomous bridge-note PRs on Spore repo |
| **Future** | Continuous gardener | Curator instance for coordination grammar |

## Track 5: Reference Public Membrane

**Question**: Can Spore embody its own grammar in a public-facing instance?

**Reference public membrane**: Design a reference public Spore instance — a public node serving curated Spore canon, a coordination-domain agent, and a Quartz-based site with graph navigation and chat widget. This validates the instance model and tests the public membrane pattern. BKC/Octo serves as existence proof that the architecture works.

**Key design questions**:
- What subset of canon to expose on the public node
- Agent identity, values, and domain knowledge for a coordination-domain agent
- Graph navigation and search on the Quartz site
- How the chat widget connects to the agent
- Federation topology: how the public Spore node relates to personal nodes and other instances

**Status**: Design phase. See [GitHub issue #1](https://github.com/DarrenZal/spore/issues/1) for tracking.

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

- **koi-processor / RegenAI** -- node substrate (knowledge graph, entity resolution, federation, sensors)
- **BKC / Octo** -- operational instance family (BKC canon + 4 federated nodes + Octo agent + Quartz sites)
- **Regen Commons / Open Civics / Network Nations** -- potential civic adoption surfaces

## Non-Goals

- Full Sociocracy 3.0 implementation (borrow concepts, don't adopt wholesale)
- Building a general-purpose runtime platform — Spore provides patterns, not software. However, reference implementations that embody the grammar are in scope: a public node, agent, and site may serve as validation and learning surfaces, but Spore does not aim to become a general-purpose coordination platform.
- Token/incentive system design (commitment pooling is about promises, not speculation)
- Forced ontology unification (translate, don't unify)
- Repo splitting (one repo until usage pressure justifies separation)
