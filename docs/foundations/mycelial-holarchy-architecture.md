---
doc_id: spore.mycelial-holarchy-architecture
doc_kind: architecture
status: active
depends_on:
  - spore.project-vision
  - spore.relational-agency-and-holons
---

# Mycelial Holarchy Architecture

The structural model underlying Agent Commons: two coexisting axes that together describe how sovereign agents, knowledge, and governance compose at every scale.

## Dual-Axis Topology

Neither trees nor meshes alone capture the system. Agent Commons requires both:

### Holarchic Axis (Trees)

Clean nesting for sovereignty, collective agency, governance, and scoped responsibility.

- Each level is a **holon** — simultaneously a whole (with its own integrity) and a part (nested in a larger whole)
- A person, team, organization, or federation can act as a node relative to other nodes
- Governance flows through these nested holons: intent and constraints can be held at different scales
- Sovereignty boundaries are explicit: what's inside a node stays sovereign until shared through protocol
- Consent and visibility are scoped to the nesting level

**Graph structure**: The holarchic axis can be represented in multiple ways. In the current governance layer, the clearest expression is a directed acyclic graph (DAG) of documents and constraints. More broadly, the nodes are holons and the edges represent containment, delegation, or constraint.

### Mycelial Axis (Mycelia)

Overlapping mesh for knowledge flow, lateral federation, and cross-cutting membership.

- Agents belong to multiple overlapping projects and organizations simultaneously
- Knowledge crosses boundaries: a claim can belong to a bioregion, a knowledge tradition, a research discourse, and a ledger at the same time
- Federation edges connect laterally, not just hierarchically
- Discovery happens through shared entities, not just shared structure

**Graph structure**: Hypergraph. Nodes are entities (agents, concepts, claims, projects). Hyperedges connect arbitrary subsets — an entity participates in many contexts simultaneously. No strict hierarchy.

## Holarchic Manifestations

Holarchy shows up in several forms:

- an individual agent with its own memory, commitments, and tools
- a working pair or team acting as one node in relation to other teams
- an organization acting as a sovereign participant inside a federation
- a project using a spec DAG as a governance-memory artifact

Spec DAGs matter because they make one layer of holarchy legible, but they are not the whole of holarchy.

## How the Axes Compose

The holarchic spine provides **containment** (what nests inside what, who constrains whom, governance depth). The mycelial mesh provides **connection** (how knowledge flows across boundaries, how agents find each other, lateral reach). Properties like direction, coherence, structure, and flow emerge from their interplay — as in tensegrity, where bounded compression elements and continuous tension elements together create structural integrity.

In practice:
- A **spec DAG** is holarchic: vision → architecture → specs → code
- An **entity graph** is mycelial: "Salish Sea Herring" connects fisheries science, indigenous knowledge, ecological monitoring, and policy documents
- A **project holon** has both: holarchic governance (its spec DAG) and mycelial connections (its entities link to other projects' entities)

## Fractal Scale Levels

The same dual-axis pattern repeats at every scale:

| Scale | Holarchic Expression | Mycelial Expression |
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

The holarchic axis primarily uses structures 1-2 when rendered as governance artifacts. The mycelial axis uses structures 1-4 (hypergraph with sheaf-like consistency).

## Implications for System Design

- **Every API must work from any perspective**: A personal agent and an organizational coordinator should both be able to query the same project briefing, seeing data appropriate to their sovereignty level
- **Entity resolution crosses axes**: The same entity appears in both holarchic (governance, role, or project contexts) and mycelial (knowledge graph mentions) contexts
- **Federation is mycelial**: Federation edges connect laterally between sovereign nodes, not through a central hierarchy
- **Governance is holarchic**: Spec DAGs provide one clear authority chain within a project's scope, but other holons may hold governance differently
