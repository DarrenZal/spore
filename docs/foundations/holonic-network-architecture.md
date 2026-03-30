---
doc_id: spore.mycelial-holarchy-architecture
doc_kind: architecture
status: active
depends_on:
  - spore.project-vision
  - spore.relational-agency-and-holons
---

# Holonic Network Architecture

The structural model underlying Agent Commons: two coexisting axes — containment and overlap — that together describe how sovereign agents, knowledge, and governance compose at every scale and scope. The result is a semilattice structure (Alexander, "A City is Not a Tree"): holons participate in multiple overlapping wholes simultaneously, because living systems cannot be captured by a single clean hierarchy.

## Dual-Axis Topology

Neither trees nor meshes alone capture the system. Agent Commons requires both:

### Holonic Axis (Containment)

Clean nesting for sovereignty, collective agency, governance, and scoped responsibility.

- Each level is a **holon** — simultaneously a whole (with its own integrity) and a part (nested in a larger whole)
- A person, team, organization, or federation can act as a node relative to other nodes
- Governance flows through these nested holons: intent and constraints can be held at different scales
- Sovereignty boundaries are explicit: what's inside a node stays sovereign until shared through protocol
- Consent and visibility are scoped to the nesting level

**Graph structure**: The holonic axis can be represented in multiple ways. In the current governance layer, the clearest expression is a directed acyclic graph (DAG) of documents and constraints. More broadly, the nodes are holons and the edges represent containment, delegation, or constraint.

### Network Axis (Overlap)

Overlapping mesh for knowledge flow, lateral federation, and cross-cutting membership — like mycelial networks that connect organisms underground regardless of species boundaries.

- Agents belong to multiple overlapping projects and organizations simultaneously
- Knowledge crosses boundaries: a claim can belong to a bioregion, a knowledge tradition, a research discourse, and a ledger at the same time
- Federation edges connect laterally, not just hierarchically
- Discovery happens through shared entities, not just shared structure

**Graph structure**: The network axis requires n-ary relationships (a commitment involving five parties, a claim attested across multiple contexts). Hypergraphs model this directly; bipartite graphs can represent the same structure. Spore does not prescribe a specific graph formalism — it requires that n-ary relationships are expressible.

## Holonic Manifestations

The holonic axis shows up in several forms:

- an individual agent with its own memory, commitments, and tools
- a working pair or team acting as one node in relation to other teams
- an organization acting as a sovereign participant inside a federation
- a project using a spec DAG as a governance-memory artifact

Spec DAGs matter because they make one layer of holonic structure legible, but they are not the whole of it.

## How the Axes Compose

The holonic axis provides **containment** (what nests inside what, who constrains whom, nested integrity — producing scale). The network axis provides **overlap** (how knowledge flows across boundaries, how agents participate in multiple wholes, lateral reach — producing scope). Properties like direction, coherence, structure, and flow emerge from their interplay — as in tensegrity, where bounded compression elements and continuous tension elements together create structural integrity.

The holonic axis alone would create Alexander's "artificial city" — legible on paper, dead in use. The network axis alone would be noise without structure. Together they form a semilattice: containment plus overlap, not containment instead of overlap.

Trees and DAGs are useful for a fundamental reason beyond metaphor: hierarchical decomposition compresses complexity (you interact with a holon's interface without seeing its internals), Merkle trees compress verification, topological sorting enables dependency resolution. But they are projections of a richer structure, not the structure itself.

In practice:
- A **spec DAG** is holonic: vision → architecture → specs → code
- An **entity graph** is network: "Salish Sea Herring" connects fisheries science, indigenous knowledge, ecological monitoring, and policy documents
- A **project holon** has both: holonic governance (its spec DAG) and network connections (its entities link to other projects' entities)

## Fractal Scale Levels

The same dual-axis pattern repeats at every scale:

| Scale | Holonic Expression (Containment) | Network Expression (Overlap) |
|-------|---------------------|---------------------|
| **Personal** | A sovereign person or local agent with its own memory, tools, and constraints | Personal knowledge graph, private and shared entities |
| **P2P** | A pair or small working relationship acting as a bounded collaborative holon | Shared files, shared entities, cross-agent memory |
| **Organizational** | A team or organization with internal roles, protocols, and explicit governance artifacts | Organizational knowledge graph, member overlap, lateral discovery |
| **Network-of-networks** | Federations of organizations or communities coordinating as larger holons | Cross-org entity resolution, shared claims, shared commitments |
| **Global / bioregional** | Nested governance across many scales without collapsing local autonomy | Knowledge flows across bioregions, movements, and institutions |

At every level: sovereign perspective + shared space + some form of governance memory + federated knowledge.

## Graph Structure Hierarchy

The mathematical structures nest:

1. **Nodes**: Individual entities (agents, docs, concepts, projects)
2. **Edges**: Binary relationships (depends_on, governs, mentions)
3. **Hyperedges**: N-ary relationships (a claim attested by multiple agents about multiple subjects)
4. **Sheaves**: Coherent local views that glue together globally (each agent's perspective is a section; federation ensures global consistency where perspectives overlap)

The holonic axis primarily uses structures 1-2 when rendered as governance artifacts. The network axis uses structures 1-4 (n-ary relationships with sheaf-like consistency).

## Implications for System Design

- **Every API must work from any perspective**: A personal agent and an organizational coordinator should both be able to query the same project briefing, seeing data appropriate to their sovereignty level
- **Entity resolution crosses axes**: The same entity appears in both holonic (governance, role, or project contexts) and network (knowledge graph mentions) contexts
- **Federation is network**: Federation edges connect laterally between sovereign nodes, not through a central hierarchy
- **Governance is holonic**: Spec DAGs provide one clear authority chain within a project's scope, but other holons may hold governance differently
