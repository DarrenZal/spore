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

Four coordination verbs — intent, commitment, evidence, signal — form a recurring loop across three structural primitives — field, holon, membrane. The loop is an ecology, not a pipeline — it circulates: evidence can generate new intents, commitments can reveal intents that weren't visible before, signals transmit live perturbation alongside attested evidence, and any verb can feed any other.

- **Intents** signal — they are pre-commitment coordination artifacts. An intent is a declared or inferred directional stance: "I want," "I offer," "I need," "I will if three others commit." Intents are where plurality enters. Not all intents become commitments; governance is partly about how intents are surfaced, negotiated, combined, deferred, or refused. The broad Spore sense of `intent` is the umbrella surface across the shared canon; PM's `pm:Intent` is a downstream protocol artifact that records one specialized, durable form of intent for matching.

- **Commitments** bind — accepted, governed, tracked. Commitments stabilize one or more intents into a durable relation with specified terms, parties, attestation, and fulfillment conditions. Three senses of "commitment" recur in the canon and must not be conflated: *operational commitments* (terms/parties/attestation/fulfillment — the coordination primitive itself), *orientation commitments* (visions and directional declarations — artifact-types that a coordination context may author), and *constitutional commitments* (foundational value-choices the project publishes — the seven items at `project-vision.md` §"Constitutional Commitments"). The primitive is the operational sense; the others are artifact-types or meta-commitments. REA tradition has a 40-year unresolved split on whether commitment is irreducibly primitive (Gilbert/Geerts-McCarthy lineage) or derives from scheduled-event sub-states (Ševčík 2016 reading); Spore's stance is primitive-with-illocutionary-force, rejecting the scheduled-event-shadow reading.

- **Evidence** validates — attested observations, fulfillment records, provenance-tracked claims. Evidence grounds the ecology in observed reality. Spore evidence is *attestation-of-execution*, not epistemological evidence: it tracks whether commitments were fulfilled and in what state, not what counts as knowledge in general. Fulfillment records are one subtype inside this larger family, not the whole of it: PM's fulfillment-facing evidence family is a protocol-layer specialization, while Spore keeps `evidence` as the broader epistemic relation.

- **Signals** transmit — live coordination perturbations, stigmergic traces, algedonic urgency (bypassing hierarchy when conditions demand). Distinct from Evidence: evidence attests state; signal transmits flow. Spore preserves signal-as-primitive even against Autopoiesis's reduction of Shannon-signal to structural coupling — a principled commitment to sender-receiver ontology at the coordination-grammar layer, not a denial of the Autopoiesis objection. See ADR-0007.

**Structural primitives host the verbs.** Field (substrate), holon (part-whole recursive unit), membrane (interface) define the space the verb-loop operates in; they are not themselves in the loop. Field/holon/membrane are distinct primitives (ADR-0016): a holon-at-scale-N is NOT the same as a field-at-scale-N+1; the field is the space between holons while a holon is a bounded recursive unit.

**Field is internally stratified into rule-levels** (ADR-0046; Ostrom 2005; Kiser & Ostrom 1982). Three levels of action-situation rules operate within a field: *operational* rules govern day-to-day coordination (how verb-loop operations are surfaced, entered, recorded); *collective-choice* rules govern how operational rules are made, modified, and enforced; *constitutional* rules govern who is eligible to participate at the collective-choice level. The levels are recursive — action at each level is itself an action situation. Seven rule-type axes decompose any rule configuration inside a level (boundary / position / choice / aggregation / information / payoff / scope); these are available analytic machinery for protocol design, not a required enumeration. The rule-in-use / rule-in-form distinction extends ADR-0041's text-authoritative discipline to the rule layer: working rules are canonical, formal rules project that practice, and divergence is surfaced as operational discrepancy requiring explicit reconciliation. Rule-operation intuitions are already covered by the coordination verbs — enact-rule is a Commitment, invoke-rule is a Signal, propose-amendment is an Intent — so the stratification supplies the *level* at which a rule operates rather than a new primitive for rule-operation itself. Commoning-school refusal of the stratification (Bollier-Helfrich OntoShift) and Pluriversal customary-ritual framings (held under ADR-0001) are acknowledged at frame-level; the stratification is a scoped-grammar commitment, not a universal-ontological claim.

**Power across primitives** (ADR-0047). Power/Authority is not a distinct primitive in Spore's grammar; it is decomposed across three asymmetry axes on existing primitives. Field carries `authority-over-rule-levels` — the capacity to set, amend, and enforce rules at each level of the 3-level stack (Debian §4/§5/§6 enumerated powers; PEP 13 Steering Council; V. Ostrom polycentric governance; VSM S5/S3 stratification). Commitment carries `asymmetric-commitment` — party-structure asymmetry where one party binds disproportionately (Baier/Jackson/Folbre/Kittay asymmetric-vulnerability; caregiver/dependent; state/subject; sacred-commitment with ancestor/land). Membrane carries `asymmetric-membrane` — authorize-capacity distributed asymmetrically (platform-gatekeeping; admission authority; ritual/elder-consensus authorization). The three axes together express the four structural modes identified in the 17-tradition corpus (enumerated-powers, asymmetric-vulnerability, power-capture-as-compound-failure, relational-spiritual authority) where no single-primitive admission could cover all four without breaking parsimony or collapsing structurally distinct modes. ADR-0005's decentralization-myth-bundle names the compound power-capture failure mode at critique-frame level; ADR-0047's three axes supply the primitive-level substrate the critique-frame operates on. Care-commoning (ADR-0045) is the doctrine-lens over Commitment's asymmetric-care-relations instances; `asymmetric-commitment` is the underlying structural-party-asymmetry axis — lens and machinery coexist without conflict.

**Artifact-types some coordination contexts author.** Visions, roadmaps, agreements, policies, role definitions, domain definitions — organize intents and commitments at longer time-horizons. These are not primitives in Spore's grammar; they are how some contexts (typically large-collective, long-horizon) structure their intent+commitment loops. Their presence is a property of the coordination context, not a requirement of the grammar. Learning is a meta-property of a healthy loop, not a separable element in it.

**Phase-dependence.** In discovery and complex-coordination phases, the full primitive loop is load-bearing. In maintenance-mode and routine-operation contexts where commitment terms are stable, the loop can compress to commitment → evidence, with new intents surfaced only when evidence reveals divergence. The salience of each primitive varies by coordination phase; the primitive status does not.

## Dual Representation

Every constitutional artifact has two representations:

- **Narrative form** for humans — text as constitutional statement, readable and debatable
- **Graph projection** for machines — queryable, composable, diffable, groundable to world state within a node or through selectively materialized views

Text is authoritative; graph is a derived view. Constitutional artifacts are authored as text, and graph representations are generated from that text through tooling (frontmatter parsers, dependency extractors, entity resolvers — currently `koi-processor/scripts/ingest_spec_dag.py`). When text and graph disagree, text is canonical and the graph is regenerated to match. This direction of derivation is deliberate: text is the surface where humans debate and revise, and graph is the surface where machines query and compose. The two representations are complementary but not peers — one authors, one derives.

## Graph Projections

Different aspects of the coordination ecology are best captured by different graph structures. These are not separate databases — they are projections of one living system, each revealing different structure. They should be read as conceptual projections over a coordination ecology, not as one always-available distributed query substrate.

The projections divide into two tiers: **primary projections** (1-3 below: Constitutional, Roadmap DAG, Intent hypergraph) are directly mapped to the coordination ecology and the holonic/network architectural axes; **secondary projections** (4-8 below: Commitment, Epistemic, Event, Routing/flow, Discourse) are useful views composed over the primary structures, surfacing specific dimensions (binding state, epistemic provenance, temporal dynamics, resource circulation, governance revision). The "graph" label is a convenience: primary projections differ structurally (Roadmap is a DAG; Intent is a hypergraph; Constitutional is typically a labelled multigraph), and secondary projections inherit their structural character from the primaries they compose over. The eight projections named here are a working set, not a closed or irreducible one — additional useful views may emerge as the ecology matures.

1. **Constitutional graph** — values, goals, principles, constraints, domains, and the relations between them (supports, constrains, conflicts_with, governs)
2. **Roadmap DAG** — initiatives, milestones, dependencies, sequence. Directed acyclic: work flows from vision toward evidence.
3. **Intent hypergraph** — multi-party offers, needs, and conditions. One intent may connect several actors, resources, timeframes, and conditions simultaneously. Binary edges are too small — hypergraphs capture the true structure.
4. **Commitment graph** — actors, pools, offers, needs, attestations, fulfillment state, routing paths
5. **Epistemic graph** (public-facing gloss: "knowledge graph") — entities, claims, evidence, attestations, provenance, sensor outputs. Tracks not just what is known, but what counts as knowing — the epistemological substrate.
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

- **Sensor nodes** ingest external state (wikis, repositories, web content, IoT data) into the epistemic graph
- **Ecological sensors** — water quality, species counts, land use
- **Economic sensors** — commitment pool state, token flows, settlement events
- **Social sensors** — meeting transcripts, governance decisions, community signals

When normative graphs (what we intend) and epistemic graphs (what we observe) are both machine-readable, the gap between them becomes computable. This connects to active inference: mismatch between vision graph and sensor graph creates latent intent-pressure — the directional force that, when made legible, becomes an inferred intent.

## Structure and Flow in the Graph Model

The graph types relate to the dual-axis architecture:

- **DAGs** provide acyclic dependency resolution for artifact derivation and document provenance (the governance-memory discipline) — derivation cycles would create undefined source-of-truth, so spec-DAG structure is acyclic by necessity. This is a document-discipline property, not a claim about governance authority. Real governance structures may include authority cycles (mutual accountability, polycentric cross-oversight, recursive democratic revision); legitimacy depends on structural coupling of authority to consequence — see [Structural Legitimacy](./structural-legitimacy.md) — not on acyclicity of authority flow. Value relations can also be cyclic: justice ↔ equality is a reinforcing loop, not a paradox. DAGs apply to artifact derivation and dependency, not to all relations.
- **Hypergraphs** represent multi-party relational entanglement (the network axis) — cyclic graphs here create resilience through mutual commitment and feedback. Stability does not require acyclicity: triangles are stable in engineering, feedback loops create homeostasis in biology. DAGs compress dependency; cycles create resilience. Both are needed.
- **Event graphs** represent temporal flow
- **Epistemic graphs** represent semantic structure, provenance, and what counts as knowing
- **Routing/flow graphs** represent circulation of resources and information

Structure without flow is a dead archive. Flow without structure is noise. The coordination ecology needs both: the DAG that orders governance and dependency (where circularity creates paradox), and the hypergraph/flow that routes what's alive (where circularity creates resilience).
