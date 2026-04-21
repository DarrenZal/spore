---
doc_id: spore.instance-model
doc_kind: architecture
status: draft
depends_on:
  - spore.project-vision
  - spore.relational-agency-and-holons
  - spore.mycorrhizal-federation-protocol
---

# Spore Instance Model

How the coordination grammar materializes in running systems — without prescribing a single implementation path.

This document is about the **ontology of Spore embodiments**: how canon, nodes, agents, and sites compose into working instances. It does not redefine federation; the [mycorrhizal federation protocol](./mycorrhizal-federation-protocol.md) governs how sovereign nodes exchange. It does not redefine agency; [relational agency and holons](./relational-agency-and-holons.md) establishes what counts as an agent. This document explains how those existing grammar terms compose into systems that embody the grammar.

In the federation protocol, "node" means any sovereign holon participating in federation. The "Node" aspect below is the infrastructure substrate a holon uses to participate — not the holon itself.

## Four Aspects of a Spore Instance

A Spore instance is any holon that implements some composition of the grammar's aspects. These four aspects are analytically distinct — not all are required, and they may be combined differently depending on context.

### Canon

A governed repository of coordination artifacts organized as a spec DAG. The reference canon is this repository (Spore). A canon is itself a holon with governance memory: it has boundaries, dependencies, lifecycle states, and constitutional commitments. Other projects may extend or fork the canon while maintaining their own governance.

### Node

In the instance model, a Node is the infrastructure substrate a holon deploys to participate in federation. It provides epistemic graph storage/query surfaces, entity resolution, federation transport, and event processing. Nodes can be personal (a private workbench for intake, synthesis, and drafting) or public (serving curated, reviewed knowledge across a membrane into visibility). Query surfaces are local to the node and any views it has selectively materialized under explicit permissions; the model does not assume arbitrary live query across the whole federation.

The grammar does not mandate a specific substrate. Any system providing stable identifiers, federation capability, entity resolution, and graph storage qualifies as a node. The current implementations use KOI (epistemic graph + federation + sensors), but this is one materialization, not the definition.

### Agent

A holon that perceives, decides, and acts through a node. Spore defines agents broadly: "any entity with enough coherence to perceive, decide, and act" (project-vision). This includes persons, AIs, teams, organizations, federations, and mixed collectives.

In some implementations, agent identity takes the form of explicit workspace files (identity, values, knowledge, tools); in others it may be configured differently — through environment variables, conversation context, organizational charters, or other mechanisms. Workspace files are one common materialization pattern, not the definition of agenthood.

### Site

A public membrane: a web surface (Quartz or equivalent) with graph navigation and optional interaction surfaces like a chat widget. A site is one realization of the membrane's `expose` operation — it makes curated knowledge visible and navigable beyond the node's sovereignty boundary.

Not every instance needs a site. Personal nodes may have no public membrane at all. A site without a backing node and canon is just a website; a site with them is a coordination surface.

## How They Compose

These examples are illustrative, not an exhaustive registry of all current or future Spore-related instances.

| Instance | Canon | Node | Agent | Site |
|----------|-------|------|-------|------|
| Spore canon (this repo) | Reference canon | No dedicated public node yet | Human/Claude stewardship sessions | No public site yet |
| Darren's personal Spore workbench | Uses Spore canon | Personal KOI (localhost) | Claude Code + local workflows | Private/local only |
| BKC / Octo | Extends Spore canon + own BKC canon | 4 federated KOI nodes | OpenClaw agent (Octo) | Quartz site + chat widget |
| Dobby | Spore-adjacent, partially aligned | Personal KOI (NUC) | Dobby agent (Telegram) | No |
| Future Spore public instance | Follows Spore canon | Public Spore node (dedicated) | Coordination-domain agent | Public Spore site |

## Personal Node vs Public Node

The distinction is one of sovereignty and membrane configuration, not infrastructure. A personal node and a public node may run the same substrate software with different membrane settings.

- **Personal node** — intake, synthesis, drafting. The learning membrane operates here: comparative intake, bridge notes, and claims happen in private before selective promotion. A personal node is a workbench, not a publication surface.
- **Public node** — curated knowledge crossing the membrane into visibility. A public node serves reviewed, governed content to the wider network. The `expose` operation is configured to share rather than contain.

This connects to the [learning membrane](../project-vision.md#learning-membrane): the personal node is where external frameworks enter and get metabolized; the public node is where the resulting insights become available to others.

## Profiles as Compositions

An instance's profile is a derived structural object: the composition of patterns, protocols, and substrate capabilities it implements. Profiles describe what a holon actually does, not what it ought to do.

Reference node profiles include:

- **Pattern authority** — defines and maintains reusable coordination abstractions (Spore canon)
- **Personal workflow node** — sovereign agent with local memory, tools, vault, and entity graph
- **Bioregional commons** — federated holon operating across bioregional boundaries with commitment pools and ecological sensing
- **Runtime substrate** — infrastructure holon providing graph operations, entity resolution, federation transport, and event processing

These profiles are descriptive, not prescriptive — they emerge from what a holon actually does. A single instance may exhibit multiple profiles simultaneously (e.g., BKC is both a bioregional commons and a governance-memory project).

## Relationship to Existing Grammar Terms

"Instance" is not a new primitive. It is a descriptive term for a holon that implements some composition of canon, node, agent, and site.

- **Canon** is a specific kind of governance-memory artifact ecology — the spec DAG pattern applied to a body of coordination knowledge.
- **Node** in the federation protocol means any sovereign holon participating in federation. In the instance model, "Node" names the infrastructure aspect — the substrate a holon deploys to participate as a federation node. These operate at different layers: the federation protocol defines who participates (holons); the instance model describes what infrastructure they use (substrates). Both definitions are needed; they are complementary, not competing.
- **Agent** is a holon (the existing primitive from relational agency theory) in its active, perceiving, deciding, acting role.
- **Site** is one realization of the membrane's `expose` operation — the boundary-crossing mechanism already defined in the federation protocol, here applied to public visibility.

No new primitives are introduced. The instance model describes how existing primitives compose.

## Non-Goals

This model does not:

- **Prescribe a runtime platform** — canon/node/agent/site is a descriptive decomposition, not a deployment specification. Spore provides patterns, not software.
- **Require all four aspects** — a canon-only instance (like this repo) is valid; a node-only instance is valid; a personal node without a site is valid.
- **Create substrate lock-in** — any system providing stable identifiers, federation capability, entity resolution, and graph storage can serve as a node. KOI is the current implementation; the grammar is substrate-agnostic.
- **Promise live network-wide query** — nodes query local state and selectively materialized views. Federation is compatible with asynchronous exchange and intermittent peers.
- **Serve as a canonical registry** — the composition table is illustrative. New instances need not be registered here.
- **Require public exposure** — not every instance needs a site or chat surface. Privacy and containment are first-class.
- **Guarantee topology or traffic privacy** — containment and controlled disclosure are first-class, but topology-hiding and traffic-analysis resistance are separate properties, not guarantees of the instance model.
- **Collapse Spore into one interface** — the decomposition exists precisely to prevent this. Different aspects can evolve independently.

## Reference Architecture: BKC / Octo

BKC / Octo serves as an existence proof that the four-aspect composition works in practice. It is described here as a concrete example, not a normative requirement.

BKC composes all four aspects:

- **Canon**: BKC's own governance-memory (extending Spore patterns + BKC-specific domain docs)
- **Node**: Four federated KOI nodes (Salish Sea, Greater Victoria, Cowichan Valley, Front Range) with full federation, entity resolution, and knowledge operations
- **Agent**: Octo, an OpenClaw agent with identity, values, knowledge, and tool configuration — one materialization of the agent aspect using workspace files
- **Site**: Quartz-based sites with graph navigation, search, and a chat widget connecting users to the Octo agent

This architecture validates the model: canon governs, nodes store and federate, an agent perceives and acts, and sites expose curated knowledge. Other compositions — with different substrates, agent patterns, or site technologies — are expected and welcome.
