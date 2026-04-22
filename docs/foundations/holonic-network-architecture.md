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

## Interface Design: Mediation Over Demarcation

Where containment meets overlap, interfaces arise — a holon's membrane, a federation edge, the learning membrane that metabolizes external work. The design principle governing these interfaces is **mediation over demarcation**: specify what the interface transmits, filters, translates, and regulates rather than its spatial properties. The design target is the **mediation structure** — the protocols, shared artifacts, and regulatory functions through which domains interact. Design the quality of coupling, not the completeness of separation.

The grammar already practices this. "Authorized boundary crossing" specifies what authorization is required for passage, not what the wall looks like. Federation exchange rules specify event types, provenance, and consent conditions — interface behavior, not containment geometry. Holon membranes have regulatory functions (what they expose, what stays sovereign) rather than spatial properties. The principle names what these mechanisms share: interfaces are mediation infrastructure with specified regulatory properties.

Clear operational rules are required at every interface. Rules can be graduated, conditional, and context-sensitive — but they must be specified, enforceable, and known. Ambiguous interfaces are a governance failure mode, not a design feature. Mediation is not vagueness; it is precise specification of regulatory function.

## Fractal Scale Levels

The dual-axis structure applies at each scale; its specific instantiations differ by scale (not a strict recursion, but a recurring architectural motif with scale-appropriate forms):

| Scale | Holonic Expression (Containment) | Network Expression (Overlap) |
|-------|---------------------|---------------------|
| **Personal** | A sovereign person or local agent with its own memory, tools, and constraints | Personal knowledge graph, private and shared entities |
| **P2P** | A pair or small working relationship acting as a bounded collaborative holon | Shared files, shared entities, cross-agent memory |
| **Organizational** | A team or organization with internal roles, protocols, and explicit governance artifacts | Organizational knowledge graph, member overlap, lateral discovery |
| **Network-of-networks** | Federations of organizations or communities coordinating as larger holons | Cross-org entity resolution, shared claims, shared commitments |
| **Global / bioregional** | Nested governance across many scales without collapsing local autonomy | Knowledge flows across bioregions, movements, and institutions |

At every level: sovereign perspective + shared space + some form of governance memory + federated knowledge.

## Polycentric Governance as Scale-Up Logic

The dual-axis topology already exhibits *decentralization* — many decision loci rather than one. Mycelial-holarchy canon makes the stronger claim: the architecture is *polycentric* — many decision centres that are also mutually-adjusting under an overarching rule system, such that emergent order is an architectural outcome rather than a side effect. The distinction is load-bearing: decentralization names where authority sits; polycentricity names how multiple authorities coordinate without collapsing into either fragmentation or hierarchy.

Three contemporary empirical frameworks are carried as first-class architectural discipline:

1. **Aligica & Tarko (attributes).** A polycentric system has (a) many decision centres with limited and autonomous prerogatives; (b) operating under an overarching rule system; (c) with mutual-adjustment processes producing spontaneous order. Each axis of the dual topology contributes: the holonic axis supplies the bounded decision centres (each holon is a centre with internal rule-making); the network axis supplies the mutual-adjustment processes (lateral flows across overlapping wholes); the semilattice composition supplies the overarching rule system (constraints that span holons without imposing single-root hierarchy).
2. **McGinnis (structure/process/outcomes).** Architecture must name structural preconditions (who counts as a decision centre, under what rule system), process mechanisms (how competition, cooperation, and formal/informal relationships adjust), and outcome properties (what order is produced). Spore architectural text must satisfy all three, not only the structural layer.
3. **Baldwin et al. (context/operations/outcomes/feedback).** Polycentric arrangements are context-fit, not generic; operations carry continuous feedback into rule-system evolution; outcomes are measured against context, not against ideal-type polycentricity. The architecture is accountable to its operating context (bioregional, civic, agent-commons), and its polycentric character is a property to verify operationally, not a property to assert.

Five operational requirements follow at the architectural layer:

- **(a) Each holon is a decision centre with limited autonomy.** Holonic containment is not only a sovereignty statement; it is a claim that the holon has rule-making capacity within its scope and adjusts to rules beyond its scope.
- **(b) An overarching rule system spans holons.** Federation is not only protocol-plus-governance; it is the rule-system layer that makes mutual adjustment possible without hierarchical imposition.
- **(c) Mutual-adjustment processes are explicit.** Competition, cooperation, and formal/informal relationships all count; the architecture must not assume cooperation is default nor competition is rare.
- **(d) Emergent order is an architectural outcome.** The dual-axis topology and semilattice composition produce emergent order when (a)–(c) operate; this is the architectural claim, not a hoped-for side effect.
- **(e) Polycentricity ≠ decentralization.** Canon must carry the distinction. A system can be decentralized (many loci) without being polycentric (many loci mutually-adjusting under a shared rule system). Mycelial-holarchy claims the stronger property and accepts its stronger discipline.

Seven empirically-identified drawbacks are carried as first-class architectural concerns, not downstream operational issues:

1. **Transaction costs.** Mutual adjustment across many decision centres is expensive; architectures that elide this lose fidelity.
2. **Democratic accountability gaps.** Overarching rule systems may not have direct democratic mandates for every affected holon.
3. **Exploitation risks.** Asymmetries between decision centres can be used extractively under the cover of formal polycentricity.
4. **Exclusion of marginalized groups.** Participation in rule-system formation is uneven; polycentricity does not auto-correct for prior exclusion.
5. **Veto points proliferation.** Limited-autonomy centres can block cross-scale action through accumulated veto rights.
6. **Complexity costs.** Operating and auditing a polycentric system requires more capacity than centralised or fully-decentralised alternatives.
7. **Externalities across centres.** Each centre may optimise within its scope while imposing costs on others; the rule system must be designed to surface and absorb these.

The drawbacks are not reasons to abandon polycentricity; they are the terms under which polycentricity is operationally honest. Architectures that claim polycentric virtues without carrying the drawbacks are the decentralization-theatre failure mode the canon-review record (spore:ADR-0005 decentralization-myth-bundle) declines.

See `spore.connection.polycentric-governance` for the wiki-lineage source-anchor and the Aligica-Tarko / McGinnis / Baldwin citations; see spore:ADR-0004 (three-layer-coordination-stack) for the project-vision-level placement of polycentric-governance in the governance layer of the reproduction/production/governance stack; see spore:ADR-0006 (polycentric-governance-at-holarchy) for the canon-review decision record.

## Associational Practice And The A–C–A' Circuit

The dual-axis topology is structural — what the architecture is. The A–C–A' circuit names what it does, read through the commoning lineage: Associations (A) produce Commons (C), and Commons sustain further Associations (A'). This is Nick Dyer-Witheford's reading of commoning as a circuit of reproduction (orn:p2p-wiki.page:Circulation_of_the_Common), where productive and reproductive labour are integrated at the foundation: associations do not only produce outputs, they reproduce the conditions under which associating can continue.

Mycelial-holarchy, read through A–C–A', is a **commoning mechanism**, not a governance layer applied over pre-existing coordination surfaces. Holon coordination is associational practice reproducing commons — the field is held because participants enact it, the network axis carries lateral commons flows because agents overlap in multiple associations simultaneously, the containment axis preserves sovereignty because the integrity of each holon is itself a commons the nested level reproduces. Federation between holons is the mechanism by which Associations sustain, expand, and interconnect their Commons. This is not a metaphor overlay on the dual-axis topology; it is what the topology is *for*, restated from the commoning side.

Two consequences for reading the rest of the architecture:

1. Where earlier sections describe "what flows between nodes" (membranes, federation edges, mediation interfaces), the A–C–A' circuit names *why* those flows matter: they reproduce the conditions under which associations can continue to associate. A federation protocol that moves events efficiently but does not reproduce the associational practice of the commoning participants has performed the substrate move the reproductive-commoning bridge note (`spore.connection.reproductive-commoning` §R3) identifies as capture.
2. Where graph-structure sections describe hyperedges, sheaves, and n-ary relations, A–C–A' names the temporal shape those structures participate in: the commons is an ongoing reproduction, not a stable static state. Sheaf-theoretic obstruction is one way to see where the reproduction has stopped working — where local views no longer glue into a wider coherent commons — but the commons itself is the reproducing circuit, not the sheaf-consistent state.

This is a motivating-language addition. No structural element of the topology changes; the A–C–A' reading reframes the existing structure so that reproductive labour is visible as first-order architectural content.

See `spore.connection.reproductive-commoning` for the source-anchor and the full wiki-lineage citation.

## Graph Structure Hierarchy

The mathematical structures nest:

1. **Nodes**: Individual entities (agents, docs, concepts, projects)
2. **Edges**: Binary relationships (depends_on, governs, mentions)
3. **Hyperedges**: N-ary relationships (a claim attested by multiple agents about multiple subjects)
4. **Sheaves**: Local views related by restriction maps that glue across overlaps when compatible; obstruction theory shows where wider consistency fails

The holonic axis primarily uses structures 1-2 when rendered as governance artifacts. The network axis uses structures 1-4 (n-ary relationships with sheaf-like consistency).

## Implications for System Design

- **Every API must work from any perspective**: A personal agent and an organizational coordinator should both be able to query the same project briefing, seeing data appropriate to their sovereignty level
- **Entity resolution crosses axes**: The same entity appears in both holonic (governance, role, or project contexts) and network (knowledge graph mentions) contexts
- **Federation is network**: Federation edges connect laterally between sovereign nodes, not through a central hierarchy
- **Governance is holonic**: Spec DAGs provide one clear authority chain within a project's scope, but other holons may hold governance differently
