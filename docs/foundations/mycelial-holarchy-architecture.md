---
doc_id: fg.mycelial-holarchy-architecture
doc_kind: architecture
status: active
depends_on:
  - fg.project-vision
---

# Mycelial Holarchy Architecture

The structural model underlying Forest Garden: two coexisting axes that together describe how sovereign agents, knowledge, and governance compose at every scale.

## Dual-Axis Topology

Neither trees nor meshes alone capture the system. Forest Garden requires both:

### Holarchic Axis (Trees)

Clean nesting for governance, sovereignty boundaries, and spec hierarchies.

- Each level is a **holon** — simultaneously a whole (with its own integrity) and a part (nested in a larger whole)
- Governance flows top-down through spec DAGs: vision constrains architecture, architecture constrains specs
- Sovereignty boundaries are explicit: what's inside a node stays sovereign until shared through protocol
- Consent and visibility are scoped to the nesting level

**Graph structure**: Directed acyclic graphs (DAGs). Nodes are holons, edges are `depends_on` or `governs` relationships. Strictly acyclic — no circular authority.

### Mycelial Axis (Mycelia)

Overlapping mesh for knowledge flow, lateral federation, and cross-cutting membership.

- Agents belong to multiple overlapping projects and organizations simultaneously
- Knowledge crosses boundaries: a claim can belong to a bioregion, a knowledge tradition, a research discourse, and a ledger at the same time
- Federation edges connect laterally, not just hierarchically
- Discovery happens through shared entities, not just shared structure

**Graph structure**: Hypergraph. Nodes are entities (agents, concepts, claims, projects). Hyperedges connect arbitrary subsets — an entity participates in many contexts simultaneously. No strict hierarchy.

## How the Axes Compose

The holarchic spine provides **direction** (what constrains what, who has authority). The mycelial mesh provides **coherence** (how knowledge flows across boundaries, how agents find each other).

In practice:
- A **spec DAG** is holarchic: vision → architecture → specs → code
- An **entity graph** is mycelial: "Salish Sea Herring" connects fisheries science, indigenous knowledge, ecological monitoring, and policy documents
- A **project** has both: holarchic governance (its spec DAG) and mycelial connections (its entities link to other projects' entities)

## Fractal Scale Levels

The same dual-axis pattern repeats at every scale:

| Scale | Holarchic Expression | Mycelial Expression |
|-------|---------------------|---------------------|
| **Personal** | Sovereign agent + spec DAG | Personal knowledge graph, entity mentions across docs |
| **P2P** | Federated pair with shared specs | Vault sync, shared entities, cross-agent knowledge |
| **Organizational** | Shared spec governance (BKC, Regen) | Organizational knowledge graph, member agents overlap |
| **Network-of-networks** | Federated organizations (Regen Commons) | Cross-org entity resolution, shared claims + commitments |
| **Global** | Gaia as holon — nested scale governance | Bioregional knowledge flows across all boundaries |

At every level: sovereign perspective + shared space + governing specs + federated knowledge.

## Graph Structure Hierarchy

The mathematical structures nest:

1. **Nodes**: Individual entities (agents, docs, concepts, projects)
2. **Edges**: Binary relationships (depends_on, governs, mentions)
3. **Hyperedges**: N-ary relationships (a claim attested by multiple agents about multiple subjects)
4. **Sheaves**: Coherent local views that glue together globally (each agent's perspective is a section; federation ensures global consistency where perspectives overlap)

The holarchic axis primarily uses structures 1-2 (DAGs). The mycelial axis uses structures 1-4 (hypergraph with sheaf-like consistency).

## Implications for System Design

- **Every API must work from any perspective**: A personal agent and an organizational coordinator should both be able to query the same project briefing, seeing data appropriate to their sovereignty level
- **Entity resolution crosses axes**: The same entity appears in both holarchic (spec DAG governance) and mycelial (knowledge graph mentions) contexts
- **Federation is mycelial**: KOI-net edges connect laterally between sovereign nodes, not through a central hierarchy
- **Governance is holarchic**: Spec DAGs provide clear authority chains within a project's scope
