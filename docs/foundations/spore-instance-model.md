---
doc_id: spore.instance-model
doc_kind: foundation
status: active
depends_on:
  - spore.project-vision
  - spore.relational-agency-and-holons
  - spore.federation-protocol
  - spore.failure-modes
  - spore.actor-governance
---

# Spore Instance Model

How the coordination grammar materializes in running systems — without prescribing a single implementation path.

This document is about the **ontology of Spore embodiments**: how canon, nodes, agents, and sites compose into working instances. It does not redefine federation; the [federation protocol](./federation-protocol.md) governs how sovereign nodes exchange. It does not redefine agency; [relational agency and holons](./relational-agency-and-holons.md) establishes what counts as an agent. This document explains how those existing grammar terms compose into systems that embody the grammar.

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

## Minimum Viable Composition

The composition table above is illustrative; this section articulates what makes any given holon a Spore-instance, what makes one *adjacent* without crossing the threshold, and what falls *outside the grammar* entirely. The section operationalizes ADR-0042 coupling-to-consequence at instance-composition layer and discharges two prior forward-references (F6.4 scale-transition and F3 cross-federation portability — see §"Forward-Reference Discharges" below).

### Principled rule (B1 unified across the four aspects)

A coordinative holon is a **Spore-instance** when, at minimum, *all three* of the following hold:

1. **Grammar use** — the holon performs at least one Spore coordination-grammar operation (intent, commitment, joint-commitment, evidence, signal, reproduction; or governance-artifact authoring under spec-DAG discipline) in a canon-legible way through one or more of Canon, Node, Agent, or Site.
2. **Canon-legible accountability** — the holon is canon-legibly accountable to Spore canon through some grammar-channel: it either (a) extends or contributes back to spore-canon directly, or (b) declares fidelity to the canon (using its concepts, conforming to its protocols, citing its commitments) at a level that allows other Spore-instances to evaluate the conformance.
3. **Coupling-to-consequence** (per `structural-legitimacy.md`) — the holon's authority-bearing roles inside the instance are coupled to the consequences of decisions made through those roles. An instance whose decision-makers are systematically decoupled from outcomes operates as F6.7 actor-capture risk at instance scale (see `failure-modes.md` §4.7).

A holon that satisfies (1) but fails (2) or (3) is **Spore-adjacent**: it uses the grammar but is not yet canon-legibly accountable to it (Dobby is the canonical case at the composition table — agent-level grammar use without Canon contribution and without yet being canon-coupled at agent-rotation discipline). A holon that fails (1) entirely is **out-of-grammar**: it may be coordinative, even sophisticated, but it is not legible as a Spore-instance regardless of substrate similarity.

This rule does **not** require all four aspects. A canon-only instance (this repo) is viable; a node-only instance is viable; a personal node without a site is viable. Required is that whichever aspects the holon does materialize, they are grammar-conformant *and* the instance as a whole carries canon-legible accountability and coupling.

### Aspect-coverage threshold

Coverage of the four aspects is not the threshold; *grammar-fidelity within whatever coverage exists* is the threshold. A one-aspect Spore-instance (e.g., canon-only) can be fully Spore. A four-aspect holon that uses Spore-shaped artifacts without grammar-conformant operations is not Spore — it has the look of an instance without the structure of one.

The four-aspects framing is descriptive of *what materializations are available*; the principled rule is what governs *whether any given materialization is in-grammar*.

### Boundary cases — Spore vs Spore-adjacent vs out-of-grammar

The composition table's "Spore-adjacent, partially aligned" row (Dobby) is canon-legible under this rule:

- Dobby uses Spore grammar at Agent layer (intent → commitment → evidence → signal cycles in Telegram interactions, reproduction-continuity-shaped routines).
- Dobby does NOT yet contribute Canon back to spore-canon.
- Dobby does NOT yet have canon-legible coupling-to-consequence at agent-rotation or maintainer-replacement layer (Darren is the de-facto sole maintainer; recall pathway is informal).

Dobby is therefore Spore-adjacent: condition (1) holds; conditions (2) and (3) hold partially-or-not. The path from Spore-adjacent to full Spore-instance is: declare canon-fidelity (close (2)) and establish canon-legible recall and coupling-to-consequence at agent layer (close (3) per `actor-governance.md` §4.1 + §4.6 sub-shape 1).

The grammar does *not* mark Dobby as deficient — being adjacent is a legitimate composition. The mark is only that Dobby is not yet a *Spore-instance* in the strong sense; it is a holon-using-Spore-grammar without yet being a holon-governed-as-Spore.

A holon that uses, for example, KOI or a similar substrate but does not enact the coordination-grammar verbs (intent / commitment / evidence / signal / reproduction / joint-commitment) in canon-legible ways is **out-of-grammar**: it may be infrastructure-compatible without being grammar-compatible.

### Rule-level decomposition (C1 inheriting ADR-0046 Ostrom 3-level rule-stack)

Instance-composition decisions stratify across the rule-stack:

- **Constitutional rule layer** — *which compositions count as Spore-instances at all*. The principled rule above operates here. Federation-level constitutional decisions (e.g., admitting a federation-instance into broader cross-federation alignment) operate at this layer.
- **Collective-choice rule layer** — *protocols for declaring fidelity, contributing Canon, establishing coupling-to-consequence shapes*. Instance maintainers operate here when extending Canon, configuring Node membranes, or admitting new agent-roles.
- **Operational rule layer** — day-to-day grammar operations (running intent → commitment cycles, exposing curated knowledge through Site, federating with peer Nodes). Routine instance-life lives here.

Disputes about whether a given holon is a Spore-instance, a Spore-adjacent holon, or out-of-grammar route through `representation-authority.md` §5.3 Appeal-Protocol wholesale (cite-don't-redefine inheritance from F4 / F5 / F3 precedent), with `actor-governance.md` §4.6 governance-response if instance-level standing is contested.

### Relationship to F6.4 scale-transition (forward-ref discharge)

F6 §4.4 (failure-modes.md L109-121) names scale-transition failures: *"patterns that work at one scale break when composed into or scaled down from another scale."* That doctrine names the cross-scale failure mode categorically; this section names the corresponding minimum-viable threshold below which a holon is not yet at a scale Spore-grammar can hold.

The relationship is structural: F6.4 governs *failures that manifest at scale-boundaries*; F7 (this section) governs *the existence threshold below which patterns cannot compose at all*. A holon below the threshold articulated here is not "failing scale-transition" in the F6.4 sense — it is not yet at a scale where Spore grammar applies. Conversely, a holon above the threshold may still encounter F6.4 scale-transition failures when composing across scales, and those failures route to F6 governance-response (which routes to F5 actuator-logic and F3 actor-governance per Tier B canon).

This articulates the F6.4 ↔ F7 boundary: F6.4 is failure-categorization at boundary-crossings between scales where the grammar already applies; F7 is the existence-threshold of grammar-applicability itself.

### Cross-federation portability (F3 forward-ref discharge)

`actor-governance.md` §"Open Questions" L199 deferred cross-federation actor-portability to F7. This section discharges the deferral as follows:

- **Actor-portability is not automatic across federations** (F3 §"Open Questions" preserves this constraint).
- **Portability-shape is grounded in instance-composition compatibility**: an actor's standing in source-federation can be admitted in target-federation when the source and target are both Spore-instances under this section's principled rule AND their canon-legible accountability shapes are mutually-readable (each can evaluate the other's coupling-to-consequence record).
- **Spore-adjacent holons cannot ground actor-portability** by themselves — an actor with standing only in a Spore-adjacent holon must establish standing in the target federation through that federation's own §4.1 admission pathways (per `actor-governance.md`).
- **Cross-federation portability protocols** (specific admission shortcuts, mutual-recognition conventions) are pattern-layer (per ADR-0068 federation-encounter pattern composition); foundation doctrine commits to the *grounding* of portability in instance-compatibility without specifying mechanisms.

This discharges the F3 §"Open Questions" L199 forward-reference at foundation-doctrine layer, leaving operational portability protocols to pattern-layer development.

### Forward-Reference Discharges

This section closes two previously-open forward-references:

- **F6.4 scale-transition** (`docs/foundations/failure-modes.md` §4.4): F6.4 names scale-transition failures categorically; F7 (this section) names the minimum-viable existence threshold below which the grammar does not yet apply. Boundary articulated.
- **F3 cross-federation actor-portability** (`docs/foundations/actor-governance.md` §"Open Questions" L199): portability is grounded in instance-composition compatibility per the principled rule above; specific protocols remain pattern-layer.

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
