---
doc_id: spore.constitutional-artifacts
doc_kind: foundation
status: active
depends_on:
  - spore.project-vision
  - spore.relational-agency-and-holons
---

# Constitutional Artifacts and Graph Projections

This document bridges the holonic/mycelial architecture and the pattern language. It defines how normative artifacts (visions, agreements, commitments) relate to each other, how they project into graphs, and how they connect to real-world state through sensors.

## Constitutional Artifacts

A constitutional artifact is any normative artifact that says "this is what we intend":

- **Visions** — long-horizon orientation (values, direction, constraints)
- **Agreements** — reciprocal commitments between parties
- **Declarations** — public signaling commitments
- **Roadmaps** — sequenced commitments translating vision into structured needs
- **Policies** — standing rules that govern behavior within a domain
- **Roles** — named positions with scope, authority, and accountability
- **Domain definitions** — bounded areas of responsibility and decision-making

All constitutional artifacts are commitments at different levels of specificity. A vision is a constitutional commitment ("we commit to this direction"). A roadmap is a sequenced commitment. A pool entry is an economic commitment. These form a commitment ecology — not a hierarchy where one replaces the other, but an ecology where different kinds serve different roles.

## The Coordination Ecology

**Vision → Roadmap → Intent → Commitment → Evidence → Learning**

This is not a pipeline where each step is "the same thing becoming more concrete." It is a coordination ecology where distinct artifact types interact:

- **Vision commitments** orient — they set direction, values, and constraint horizons. They change slowly and require broad consent.
- **Roadmaps** translate — they decompose vision into structured needs, sequences, and milestones.
- **Intents** signal — they are pre-commitment coordination primitives. An intent is a declared or inferred directional signal: "I want," "I offer," "I need," "I will if three others commit." Intents are where plurality enters and the system breathes. Not all intents become commitments; governance is partly about how intents are surfaced, negotiated, combined, deferred, or refused. This broad Spore sense of `intent` is the umbrella surface across the shared canon; PM's `pm:Intent` is a downstream protocol artifact that records one specialized, durable form of intent for matching.
- **Commitments** bind — accepted, governed, tracked. Commitments stabilize one or more vectors (intents) into a durable relation.
- **Evidence** validates — observations, attestations, fulfillment records, sensor outputs. Evidence grounds the ecology in reality. Fulfillment records are one subtype inside this larger family, not the whole of it: PM's fulfillment-facing evidence family is a protocol-layer specialization, while Spore keeps `evidence` as the broader epistemic relation.
- **Learning** revises — update the roadmap, refine patterns, adapt the vision itself. The ecology is a loop, not a line: learning revises visions, evidence generates new intents, commitments reveal visions that weren't visible before.

## Dual Representation

Every constitutional artifact has two representations:

- **Narrative form** for humans — text as constitutional statement, readable and debatable
- **Graph projection** for machines — queryable, composable, diffable, groundable to world state within a node or through selectively materialized views

The text is not derived from the graph. The graph is not a degraded form of the text. They are complementary views of the same normative structure.

## Graph Projections

Different aspects of the coordination ecology are best captured by different graph structures. We have identified eight projections so far — this is not a closed set. These are not separate databases — they are projections of one living system, each revealing different structure. They should be read as conceptual projections over a coordination ecology, not as one always-available distributed query substrate.

1. **Constitutional graph** — values, goals, principles, constraints, domains, and the relations between them (supports, constrains, conflicts_with, governs)
2. **Roadmap DAG** — initiatives, milestones, dependencies, sequence. Directed acyclic: work flows from vision toward evidence.
3. **Intent hypergraph** — multi-party offers, needs, and conditions. One intent may connect several actors, resources, timeframes, and conditions simultaneously. Binary edges are too small — hypergraphs capture the true structure.
4. **Commitment graph** — actors, pools, offers, needs, attestations, fulfillment state, routing paths
5. **Epistemic graph** (called "knowledge graph" in the vision and public-facing docs) — entities, claims, evidence, attestations, provenance, sensor outputs. Tracks not just what is known, but what counts as knowing — the epistemological substrate.
6. **Event graph** — what changed, when, due to what, from which node. Temporal dynamics.
7. **Routing/flow graph** — how resources, obligations, and information circulate through pools and networks. Where abundance meets need. Where capacity flows.
8. **Discourse graph** — questions, proposals, arguments, objections, decisions. The self-reflective layer: how the coordination ecology reasons about and governs its own evolution. Without it, revision is ad-hoc.

## Node as Graph (Zoom Invariance)

A node is often a coherent interface over an internal graph. From outside, a team is a point — one participant in a network. From inside, it is a graph of roles, commitments, intents, and evidence.

When you zoom into a node, you find the same artifact ecology: visions, intents, commitments, evidence. This self-similarity is why federation works across scales — the internal structure is compatible with the external protocol because they are the same structure at different scales.

This is the deep implication of the holon concept: a holon is both a whole (with its own internal graph) and a part (presenting a coherent interface to its containing graph). The coordination patterns apply recursively: a person's workflow, a team's governance, an organization's roadmap, and a federation's constitutional commitments all share the same structural logic.

That zoom invariance does not make `holon` and `field` synonymous. The node is holonic when what matters is bounded recursive agency: a whole that is also a part. The graph-like coordination surface inside or around that node is field-like when what matters is distributed relational medium: the substrate through which intents, commitments, evidence, and learning circulate. At the next scale up, the coordination surface produced by lower-scale holons may appear as a field for higher-scale holons. That is the scale relation between the primitives, not a reason to collapse them.

## Grounding Through Sensors

Constitutional artifacts describe desired states. Sensors describe actual states. The gap between them is what drives action.

- **Sensor nodes** ingest external state (wikis, repositories, web content, IoT data) into the knowledge graph
- **Ecological sensors** — water quality, species counts, land use
- **Economic sensors** — commitment pool state, token flows, settlement events
- **Social sensors** — meeting transcripts, governance decisions, community signals

When normative graphs (what we intend) and epistemic graphs (what we observe) are both machine-readable, the gap between them becomes computable. This connects to active inference: mismatch between vision graph and sensor graph creates latent intent-pressure — the directional force that, when made legible, becomes an inferred intent.

## Structure and Flow in the Graph Model

The graph types relate to the dual-axis architecture:

- **DAGs** provide acyclic dependency resolution and clear authority flow (the holonic axis) — authority cycles create paradox (A governs B governs A is incoherent), so governance structures are acyclic by necessity. But value relations *can* be cyclic: justice ↔ equality is a reinforcing loop, not a paradox. DAGs apply to derivation and authority, not to all relations.
- **Hypergraphs** represent multi-party relational entanglement (the network axis) — cyclic graphs here create resilience through mutual commitment and feedback. Stability does not require acyclicity: triangles are stable in engineering, feedback loops create homeostasis in biology. DAGs compress dependency; cycles create resilience. Both are needed.
- **Event graphs** represent temporal flow
- **Epistemic graphs** represent semantic structure, provenance, and what counts as knowing
- **Routing/flow graphs** represent circulation of resources and information

Structure without flow is a dead archive. Flow without structure is noise. The coordination ecology needs both: the DAG that orders governance and dependency (where circularity creates paradox), and the hypergraph/flow that routes what's alive (where circularity creates resilience).
