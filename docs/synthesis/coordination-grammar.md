# Spore Coordination Grammar

**Status:** Active — updated Phase 12 (review synthesis)
**Date:** 2026-03-28

## The Grammar Thesis

Spore is a common grammar for plural, sovereign coordination across scales. It helps people, agents, and collectives coordinate coherently without flattening difference.

The grammar is not a neutral data model. It encodes commitments across the full worldview stack — ontological (what exists), epistemological (what counts as knowing), axiological (what matters), praxical (how we act), and ethical (how we inhabit participation). This makes it a worldview grammar for plural coordination, not merely a coordination ontology.

The three-layer architecture:

- **Grammar** = primitives, relations, membranes, transitions (the alphabet and syntax)
- **Pattern language** = named recurring arrangements of primitives that metabolize tension across scales (the idioms)
- **Protocols** = explicit operational contracts for parts of patterns that must interoperate between nodes (the scripts)

The grammar is the deep structure. The pattern language makes it legible. The protocols make it reliable.

---

## The Coordination Loop

```
Sense --> Interpret --> Claim --> Attest --> Intend --> Commit --> Coordinate --> Act --> Revise
```

Every transition in this loop can happen **within a single holon** (internal coordination) or **across a membrane between holons** (federated coordination). The membrane is what makes each transition a coordination event, not just a cognitive one.

The loop is not a pipeline. It is a cycle — revision feeds sensing, and multiple iterations run concurrently at different scales and speeds.

**On Act:** Act does not have a dedicated primitive. It is represented through events (something happened), state transitions (a commitment became fulfilled, an artifact was amended), and emitted evidence (outputs that bear on claims). Action is the transition that connects coordination back to the world and produces the feedback that drives revision.

### Relation to Other Coordination Loops

The Spore loop shares a common deep structure with other well-known coordination cycles: **Perceive → Understand → Choose → Do → Reflect.**

| Loop | Phases | Emphasis |
|------|--------|----------|
| OODA (Boyd) | Observe → Orient → Decide → Act | Speed — competitive decision cycle |
| PDSA (Deming) | Plan → Do → Study → Act | Learning — predict, compare, improve |
| Sense-Respond (Haeckel) | Sense → Interpret → Decide → Act | Adaptation — dynamic response to environment |
| Ruddick | Sense → Mean → Care → Commit → Coordinate → Learn | Relational commitment — caring as explicit phase |
| Spore | Sense → Interpret → Claim → Attest → Intend → Commit → Coordinate → Act → Revise | Multi-scale, cross-membrane coordination |

Spore's loop is distinctive in that it separates the **epistemic layer** (Claim/Attest — what do we know, and who witnesses it?) from the **axiological layer** (Intend/Commit — what matters enough to act on?), and makes **membrane operations** explicit at each transition. This matters because Spore operates across boundaries where shared meaning-making cannot be assumed.

Will Ruddick's loop foregrounds **caring** as an explicit phase before commitment. In Spore, this is carried by Intent — declaring an intent is an act of caring about something enough to make it visible.

---

## Primitives

Ten coordination primitives. Each is a first-class object in the grammar.

| Primitive | Definition | Worldview Layer |
|-----------|-----------|-----------------|
| **Holon** | Bounded center of coherence that can participate. Simultaneously a whole (with internal structure) and a part (presenting a coherent interface to its containing graph). Can be a person, AI agent, team, organization, federation, or mixed collective. | Ontological |
| **Membrane** | Boundary conditions: visibility, consent, jurisdiction, access. Not just a wall — a transformation interface where crossing, translation, and authorization happen. | Ontological / Praxical |
| **Signal** | Directional cue: needs, offers, alerts, sensor outputs. The raw material of sensing. | Epistemological |
| **Claim** | Proposition about world, system, or relationship. The unit of epistemic coordination. | Epistemological |
| **Evidence** | What bears on a claim. Observations, measurements, deliverables, fulfillment records. | Epistemological |
| **Attestation** | Situated witnessing, endorsement, or dispute of a claim, event, evidence, or fulfillment. Attestation is itself a claim at a higher level — this recursion gives trust without centralization. | Epistemological / Ethical |
| **Intent** | A declared directional signal rooted in care, need, offer, concern, or possibility — the pre-commitment primitive. Where plurality enters the system. | Axiological |
| **Commitment** | A promise accepted into a coordination scope with scope-bound accountability. Something matters enough to hold yourself — or be held — accountable for. | Axiological |
| **Artifact** | Durable memory surface: vision, spec, agreement, note, pool configuration, proposal, token. Constitutional artifacts are commitments at different levels of specificity. | Ontological / Praxical |
| **Event** | Something that happened in time. State changes, domain events, settlement events. The temporal primitive. | Ontological |

**Self-similarity:** A holon at one scale is a coherent point; at another, it is a graph of these same primitives. A team is a single node in a federation, and a graph of roles, commitments, intents, and evidence internally. This recursion is why the same grammar works from personal workflow to planetary federation.

---

## Relations

Relations connect primitives into graphs.

| Relation | Connects | Meaning |
|----------|----------|---------|
| `supports` | Claim/Evidence/Attestation --> Claim | Provides positive epistemic weight |
| `challenges` | Claim/Evidence/Attestation --> Claim | Provides negative epistemic weight |
| `attests` | Attestation --> Claim/Event/Evidence | Situated witnessing across boundary |
| `authorizes` | Holon --> Holon/Operation | Grants crossing rights or operational authority |
| `commits_to` | Holon --> Commitment | Binding participation |
| `fulfills` | Evidence/Event --> Commitment | Demonstrates delivery |
| `disputes` | Attestation --> Claim/Commitment | Challenges validity or fulfillment |
| `revises` | Artifact/Claim --> Artifact/Claim | Governed update with scope and cost |
| `forks` | Artifact/Holon --> Artifact/Holon | Creates autonomous branch |
| `depends_on` | Artifact/Commitment --> Artifact/Commitment | Constraint ordering |
| `shares_with` | Holon --> Holon (via membrane) | Selective exposure through consented boundary |
| `contains` | Holon --> Holon | Holarchic nesting |
| `routes_through` | Intent/Commitment --> Pool/Membrane | Flow path for coordination |

---

## Membrane Operations

Membranes are not passive boundaries. They are active transformation interfaces where the grammar's praxical layer lives.

| Operation | What it does | Grammar effect |
|-----------|-------------|----------------|
| **expose** | Make something visible across a membrane | Creates a `shares_with` edge; signal crosses boundary |
| **translate** | Re-encode for a different context | Preserves source ontology while enabling cross-membrane legibility (cf. BKC ontology-commoning: bridge, not flatten) |
| **authorize** | Grant crossing rights | Creates an `authorizes` edge; enables federation |
| **attest** | Witness or endorse across boundary | Creates cross-membrane `attests` relation; builds distributed trust |
| **contest** | Challenge across boundary | Creates cross-membrane `disputes` relation; enables accountability without hierarchy |
| **revoke** | Withdraw authorization | Removes `authorizes` edge; sovereignty preserved |
| **fork** | Create a new autonomous branch | New holon with its own membrane; original preserved |

**Key design commitment:** Every membrane operation is governed. Authorization has scope. Revocation is always possible. Consent is structural, not decorative. This is the ethical layer of the grammar — how we inhabit participation.

---

## Lifecycle Transitions

Every primitive has governed state changes over time. Revision is not just "change" — it is a governed transition with scope and cost.

### Claims
```
proposed --> supported --> challenged --> superseded
                              |
                          reinstated (if challenge fails)
```

### Commitments
```
proposed --> verified --> active --> evidence_linked --> redeemed
                            |                              |
                        breached --> renegotiated       disputed --> resolved
                            |
                        expired
```
(Source: BKC commitment pooling lifecycle, validated at `commitment-pooling.md`)

### Attestations
Attestations do not follow a simple linear lifecycle. They **strengthen** through corroboration (multiple independent attesters) or **decay** through contradiction, elapsed time, or revocation.

### Artifacts
```
draft --> active --> amended --> deprecated --> forked
```
(Source: governance-memory pattern, `doc_kind` + `status` frontmatter fields)

### Intents
```
declared --> matched --> activated (becomes commitment) | expired | withdrawn
```
Inferred intents follow the same path but enter at `declared` through sensing rather than explicit publication.

### Legibility progression: intent → promise → commitment

The transition from intent to commitment is not a single gate but a legibility progression. Each stage makes intention more visible, accountable, and operative:

- **Intent** (declared/inferred) = directional signal
- **Promise** = intent made legible enough to witness — accountable form, but not yet accepted into scope
- **Commitment** (proposed → verified → active) = promise accepted into a coordination scope

The mechanism is scope. In a personal scope, declaration and acceptance collapse. In a shared scope, acceptance requires the field. The `proposed` state of the commitment lifecycle IS the promise — an intent that has taken accountable form and awaits acceptance.

"Binding" means scope-bound accountability, not coercion.

### Events
Events are immutable. They do not have lifecycle transitions — they are the record of transitions in other primitives.

---

## Graph Projections

Multiple views over one coordination ecology. These are not separate databases — they are projections of the same living system, each revealing different structure.

| # | Projection | What it captures | Mathematical structure | Coordination loop phases |
|---|-----------|-----------------|----------------------|-------------------------|
| 1 | **Constitutional graph** | Visions, values, principles, constraints, domains, policies | DAG (constraint hierarchy) | Interpret, Commit |
| 2 | **Roadmap DAG** | Initiatives, milestones, dependencies, sequencing | DAG (temporal ordering) | Intend, Commit, Coordinate |
| 3 | **Epistemic graph** | Entities, claims, evidence, attestations, provenance | Directed graph with weighted edges | Sense, Interpret, Claim, Attest |
| 4 | **Intent hypergraph** | Needs, offers, intents, conditions, thresholds | Hypergraph (multi-party, multi-condition) | Intend |
| 5 | **Commitment graph** | Promises, pools, agreements, roles, obligations, fulfillment | Directed graph with lifecycle states | Commit, Coordinate, Act |
| 6 | **Event graph** | State changes through time, provenance chains | Append-only temporal graph | Act, Revise |
| 7 | **Flow graph** | Capital, information, attention, obligations moving through system | Weighted directed graph | Coordinate, Act |
| 8 | **Discourse graph** | Questions, proposals, arguments, objections, decisions | Directed graph (argumentation structure) | Interpret, Claim, Attest, Revise |

**On the discourse graph:** The existing Spore vision (`project-vision.md`) lists 7 graph types (constitutional, roadmap, intent, commitment, knowledge, event, routing/flow). The discourse graph is the self-reflective layer — the coordination ecology reasoning about itself. Whether it should be promoted to an 8th core type is addressed in the decision memo.

**On the epistemic graph:** This is the "knowledge graph" from the vision doc, renamed to emphasize its epistemological function — it does not just store knowledge, it tracks what counts as knowing (claims, evidence, attestation, provenance).

### On DAGs and the coordination substrate

Only the constitutional and roadmap graphs are necessarily DAGs. The other six projections are directed graphs, hypergraphs, or temporal graphs. A vision may describe a desired future state that includes or references any graph type — the DAG structure specifically captures irreversible orderings (governance dependency, temporal sequence), not the full topology of what a vision can express.

**Governance is acyclic in structure at a given moment, but cyclical in operation through time.** A DAG captures the governance snapshot — who constrains whom right now. The coordination loop captures the governance process — how evidence revises vision, how revision creates new constraints. The DAG is not the whole graph; it is a constrained projection that requires irreversibility.

---

## Worldview Grammar

The primitives are not a neutral data model. They encode commitments across five worldview layers:

| Layer | What it addresses | How the grammar encodes it |
|-------|------------------|---------------------------|
| **Ontological** | What kinds of things exist | Holons, membranes, events — the structural primitives |
| **Epistemological** | What counts as knowing | Claims, evidence, attestation — what bears, what witnesses, what provenance chain establishes trust |
| **Axiological** | What matters | Intents — what you care about enough to declare. Commitments — what matters enough to accept scope-bound accountability for. The progression from intent through promise to commitment is a legibility progression, not a type change. |
| **Praxical** | How we act | Membrane operations, protocols, coordination patterns — the operational layer |
| **Ethical / Ethos** | How we inhabit participation | Consent, contestability, forkability, revision scope — the constitutional commitments |

**Why this matters:** Standard coordination frameworks (workflow engines, project management tools, smart contract systems) operate at one or two of these layers, usually ontological + praxical. They treat epistemology, axiology, and ethics as external concerns. Spore's grammar makes all five explicit because coordination across plural worldviews requires it.

**IndigenomicsAI test case:** Indigenous knowledge systems (OCAP principles, seventh-generation thinking, relational wealth) do not separate these layers. OCAP is simultaneously ontological (what counts as data), epistemological (whose knowledge matters), axiological (community jurisdiction over value), praxical (consent-based development protocols), and ethical (caretaker, not owner). A grammar that separates these layers would be unable to represent OCAP coherently. Spore's grammar, by encoding all five, can represent OCAP as a membrane configuration: a holon's membrane operations (authorize, attest, revoke) governed by all five layers simultaneously.

**BKC test case:** BKC's ontology-commoning framework (`ontology-commoning-framework.md`) operates explicitly across epistemological (mapping lifecycle with provenance), axiological (sensitive/Indigenous knowledge requires consent), and praxical (human-in-the-loop approval) layers. The meta-protocol's three invariants (what is shared, who attests, who can use how) map directly to the grammar: artifacts (what), attestations (who witnesses), membranes (who can cross and how).

**Personal workflow test case:** A personal workflow node operates primarily at the praxical layer (skill routing, meeting pipeline, entity linking) with epistemological grounding (backend entity resolution as source of truth, 3-tier matching). It demonstrates that the grammar works even when a node engages only 2-3 worldview layers explicitly — the others are present but latent.

---

## Ground-Truth Traces

### Trace 1: Phase 11a Relay Pilot (Dobby as Store-and-Forward Relay)

**Context:** Dobby (NUC) mediates vault sync between Darren's MacBook and Shawn's node. Shawn registered as peer, Dobby-side relay verified, Shawn-side validation pending.

| Loop Phase | Implementation | Primitives Used |
|-----------|---------------|-----------------|
| **Sense** | Need identified: Shawn needs shared files from Darren's vault | Signal (need) |
| **Interpret** | Design decision: Dobby as relay, not direct peer | Claim ("relay topology works") |
| **Claim** | "Dobby can forward vault files to Shawn's node" | Claim |
| **Attest** | AC1-AC5 all PASS; relay-test file delivered | Attestation, Evidence |
| **Intend** | Shawn registered as peer, shared folder scope defined | Intent (offer of shared content) |
| **Commit** | Edge created (Dobby-->Shawn), vault sync peer configured | Commitment (infrastructure binding) |
| **Coordinate** | `_forward_to_peers()` routes through consented membrane | Membrane (expose, authorize, translate) |
| **Act** | vault_sync domain events emitted, file created in Shawn's queue | Event, Artifact |
| **Revise** | TTL = 168h discovered; Shawn-side validation still pending | Evidence bearing on claim viability |

**Membrane operations present:**
- `expose`: Shared/ folder contents made visible across membrane
- `translate`: Re-encryption per peer (E2EE with X25519 + ChaCha20-Poly1305)
- `authorize`: Edge approval grants polling/fetching rights
- `revoke`: Available — either peer can drop the edge

**Holons:** Darren's MacBook, Dobby (NUC), Shawn's node — three bounded centers of coherence, each sovereign, each with its own graph.

**Assessment:** All 10 primitives are instantiated. 4 of 7 membrane operations exercised. The grammar maps cleanly to the relay implementation. The relay is a protocol (store-and-forward) operating within the federated-knowledge-exchange pattern.

### Trace 2: BKC Commitment Pooling

**Context:** Victoria Landscape Hub and Cascadia Bioregion Stewardship pools, 23+ commitments, 33,400 VCV minted on Celo, federated across 4 bioregional nodes.

| Loop Phase | Implementation | Primitives Used |
|-----------|---------------|-----------------|
| **Sense** | Mapping workshops surface needs/offers/gaps across landscape groups | Signal (needs, offers, alerts) |
| **Interpret** | Needs structured as typed intents (SWAP, WANT, OFFER, CONDITIONAL) | Claim (about capacity/need) |
| **Claim** | "Victoria has 23+ commitments worth 33,400 VCV" — verifiable on-chain | Claim, Evidence |
| **Attest** | On-chain anchoring (Celo EAS), steward approval gates | Attestation |
| **Intend** | Intent publication layer: standing offers, needs, conditional commitments | Intent (4 types) |
| **Commit** | Commitments enter pools, follow lifecycle (PROPOSED-->REDEEMED) | Commitment |
| **Coordinate** | NOAM clearing algorithm, multi-hop routing across pools | Membrane (expose, authorize), routing |
| **Act** | Voucher settlement, in-kind fulfillment, token flows | Event, Artifact (VCV tokens) |
| **Revise** | Fulfillment evidence feeds back; demurrage encourages circulation | Evidence, revision of pool state |

**Membrane operations present:**
- `expose`: Pool inventories visible to routing agents
- `translate`: Local ontology mapped to commons layer (ontology-commoning framework)
- `authorize`: Steward approval, consent tiers, visibility scoping (public/authorized/node_private)
- `attest`: Cross-pool attestation of fulfillment
- `contest`: Dispute resolution branch in commitment lifecycle
- `fork`: Forkability as design principle (sovereignty-preserving federation)

**Holons:** Each landscape group, each person/org within, each pool — nested holarchically. Victoria within Salish Sea within Cascadia. Pool federation mirrors bioregional nesting.

**Assessment:** All 10 primitives present. 6 of 7 membrane operations exercised (only `revoke` not explicitly documented, though implied by sovereignty invariants). The grammar maps to the full economic coordination layer. BKC's three-plane architecture (Knowledge, Capital, Coordination) corresponds to three clusters of graph projections: epistemic (knowledge), commitment + flow (capital), and all others (coordination).

### Trace 3: Personal Workflow Skill Routing (brief)

| Loop Phase | Implementation |
|-----------|---------------|
| **Sense** | Meeting transcript generated (MacWhisper/Otter) |
| **Interpret** | Skill router matches natural language to skill |
| **Claim** | Entity extraction: "this mention refers to entity X" |
| **Attest** | 3-tier entity resolution (exact/fuzzy/semantic) validates identity |
| **Intend** | User intent expressed through natural language |
| **Commit** | Skill execution = commitment to transform input |
| **Coordinate** | Skills chain: meeting-notes --> process-note --> meeting-tasks |
| **Act** | Vault files created, entities linked, tasks registered |
| **Revise** | mentionedIn arrays updated, entity corrections applied |

**Assessment:** Grammar maps cleanly to a personal workflow node. This trace demonstrates the grammar at the simplest scale (personal holon with tool membrane), confirming fractal applicability.

---

## Distillation Stack

For communication at different depths:

1. **Headline:** Spore is a common grammar for plural, sovereign coordination across scales.
2. **Second line:** It helps people, agents, and collectives coordinate coherently without flattening difference.
3. **Expanded:** It includes an evolving bridge ontology, but goes beyond ontology to articulate what matters (axiological), what counts as knowing (epistemological), how coordination should happen (praxical), and how these layers can evolve in common without flattening difference (ethical).
4. **Doctrinal:** Its pattern language names recurring ways living systems hold, channel, and transform tension across scales into viable forms of coordination.
5. **Layer summary:** The grammar is the deep structure. The pattern language makes it legible. The protocols make it reliable.
6. **Functional:** It enables holons to sense, interpret, claim, attest, intend, commit, coordinate, and revise across consented membranes through mutual legibility and accountable feedback, while preserving local autonomy and plurality.
