# Spore Coordination Grammar

**Status:** Active — updated 2026-04-23 (9-primitive canon alignment per ADR-0060)
**Date:** 2026-04-23

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

Will Ruddick's loop foregrounds **caring** as an explicit phase before commitment. In Spore, care remains prior to and larger than the intent/commitment pair: care is the primary coordinating practice that reproduces the field, while intent is one way care becomes legible enough to route, witness, and compose. Intent makes care actionable; it does not replace care.

---

## Primitives

Nine coordination primitives in two classes. **Structural primitives** describe the substrate of coordination; **coordination verbs** describe the operations through which agents coordinate across that substrate. The number is an earning-test outcome, not an axiom: a primitive enters the grammar by (a) being specifiable as a protocol surface with defined inputs, outputs, and governance, AND (b) having operational implementations across Spore's instance families at identifiably different scales (project-vision.md §Core Thesis). Full definitions and lineage live in `docs/project-vision.md` §Core Thesis and `docs/foundations/governance-artifacts-and-graph-projections.md` §Coordination Ecology; this section gives the synthesis-layer view.

**Structural primitives** (3):

| Primitive | Definition | Worldview Layer |
|-----------|-----------|-----------------|
| **Field** | Shared coordination space; what is between holons; the ecological, economic, or epistemic substrate in which commitments travel. Field is agent-aware but not itself an agent. Internally stratified into rule-levels (ADR-0046). | Ontological |
| **Holon** | Part-whole recursive unit; every holon is both a part of a larger whole and a whole containing parts. The whole is not reducible to aggregation of parts (ADR-0050). Carries `relational-identity` as a whole-emergent property (ADR-0051). Can be a person, AI agent, team, organization, federation, or mixed collective. | Ontological |
| **Membrane** | Semi-permeable interface between holon and field, and between holons. Filters, translates, authorizes, and attests. Carries `permeability` (selective passage) and `double-boundary` (social-inclusion / ecological-resource) as derived axes (ADR-0053); `asymmetric-membrane` when authorize-capacity is distributed asymmetrically (ADR-0047 Layer 3). | Ontological / Praxical |

**Coordination verbs** (6):

| Primitive | Definition | Worldview Layer |
|-----------|-----------|-----------------|
| **Intent** | Pre-commitment coordination signal. Declared or inferred directional stance ("I want," "I offer," "I need," "I will if three others commit"). Where plurality enters the grammar. Primary surface for **expressive power** (ADR-0048) — articulation of meaning, desire, perception, and dissent. | Axiological |
| **Commitment** | Accepted, governed, tracked binding of parties to terms. Commitments stabilize one or more intents into a durable relation with specified attestation and fulfillment conditions. Commitment-qua-primitive is the *operational* sense; orientation (visions) and constitutional (foundational value-choices) senses are artifact-types over operational commitments, not separate primitives. Individual-scale binding; irreducibly-joint binding is Joint-commitment (below). Carries `asymmetric-commitment` when one party binds disproportionately (ADR-0047 Layer 2). | Axiological |
| **Joint-commitment** | Irreducibly-joint binding of two or more parties that is *not* a sum of personal commitments (Gilbert, *Joint Commitment*, OUP 2013). Formed by open expression of readiness under common knowledge; rescindable only by concurrence; produces directed obligations and demand-rights "of a different kind" from moral ones. Operations: form / rescind-by-concurrence / hold-accountable-via-demand-right / extend. Federation protocol-version-adoption is the paradigm case (multi-party-simultaneous by construction). Admitted 2026-04-22 per ADR-0050. | Axiological |
| **Evidence** | Attested record of observed state, execution, or fulfillment. Grounds the coordination loop in observable reality; tracks whether commitments were fulfilled and in what state. Spore evidence is **attestation-of-execution** (ADR-0053), not epistemological evidence in general. | Epistemological |
| **Signal** | Live coordination transmission; stigmergic trace; pre-evidence flow. Distinct from evidence: evidence attests state; signal transmits perturbation. Includes algedonic signals (bypassing hierarchy to surface urgency — VSM), intent-publication signals, federation-level coordination messages. Carries pre-reaction — capacity to act on incomplete information — as substrate for **constructed power** (ADR-0048). | Epistemological |
| **Reproduction** | Coordination labor sustaining the verb-loop across time, actor turnover, and generational succession: enact-succession, transmit-knowledge, replicate-commitment-pattern, regenerate-field-capacity. Operates at cross-episode time-scale (the other verbs coordinate within an episode; reproduction coordinates across episodes by making the next instantiation possible). Canon slug `reproduction-continuity`. Admitted 2026-04-22 per ADR-0049. | Axiological / Praxical |

**On Claims, Attestations, Artifacts, and Events as non-primitives.** Earlier drafts of this synthesis listed Claim, Attestation, Artifact, and Event as standalone primitives. Under current canon they are not members of the 9-primitive roster but remain first-class *concepts* in the synthesis:

- **Claims** are epistemic objects that evidence bears on (§Relations; §Lifecycle Transitions). Referenced by the loop's Claim / Attest phases; produced and witnessed through Evidence and Signal operations.
- **Attestations** are an operation/function performed within Evidence and Membrane operations, not a standalone primitive. `attestation-of-execution` is a derived glossary slug (ADR-0053) naming the Spore-specific attestation shape.
- **Artifacts** are durable memory surfaces — visions, specs, agreements, notes, pool configurations, tokens — output types that commitments, evidence, and signals produce. Not coordination operations or structural primitives (project-vision.md §"What is excluded from primitive status").
- **Events** are state-transition records (something that happened in time). Events are immutable records of transitions in other primitives (§Lifecycle Transitions); Event-graph survives as a view-template in §Graph Projections (ADR-0058).

**Three cross-cutting doctrines** (applied across primitives without adding new primitive categories): **reproductive-commoning** (ADR-0002, visibility-of-reproductive-labor axis), **boundary-commoning** (ADR-0003, membrane-as-practice axis), **care-commoning** (ADR-0045, asymmetric-relational axis).

**Two modes-across-primitives** (ADR-0048; Johar *Power Cannot Be Allocated*, 2026): **expressive power** (Intent / Signal / Evidence carry articulation, dissent, contested perception) and **constructed power** (agency emerging situationally through verb-loop dynamics under exceeding pre-allocated structure). Power operates in three modes — allocational (ADR-0047 decomposition), expressive, and constructed — all canon-necessary.

**Properties on primitives:** holon-irreducibility (ADR-0050), relational-identity (ADR-0051).

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
draft --> active --> deprecated
             \
              --> superseded
```
(Source: governance-memory pattern for `draft`, `active`, `deprecated`; agent-commons-meta-protocol adds `superseded` for replaced artifacts.)

Amendment and forking remain governed operations (`revises`, `forks`), not lifecycle statuses. An artifact can be revised while active or deprecated, and a fork creates a new lineage rather than advancing the source artifact through a status chain.

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

Multiple views over one coordination ecology. These are not separate databases — they are projections of the same living system, each revealing different structure. Per ADR-0058 (Phase 2c), projections are tiered: **three primary projections** each have an independent schema, a materialization path in a running system, a query pattern, and a non-join use case; **five view-templates** are composable over the primaries rather than primary at foundation-level.

### Primary projections (foundation-level)

| # | Projection | What it captures | Mathematical structure | Materialization |
|---|-----------|-----------------|----------------------|-----------------|
| 1 | **Constitutional graph** | Visions, values, principles, constraints, domains, policies; governance-memory structure | DAG (constraint hierarchy) | spec-DAG tooling (`koi-processor/scripts/ingest_spec_dag.py`) over text-authoritative canon (ADR-0041) |
| 2 | **Commitment graph** | Actors, pools, offers, needs, attestations, fulfillment state; both Commitment and Joint-commitment binding | Directed graph with lifecycle states | Running commitment-pool state in BKC/Octo federation and Poietic Match |
| 3 | **Epistemic graph** (public-facing gloss: "knowledge graph") | Entities, claims, evidence, attestations, provenance, sensor outputs | Directed graph with weighted edges | KOI substrate — `personal-koi` + `unified-search` — entity resolution, knowledge facts, bridge-note intake |

### View-templates (composable over primaries)

| View-template | Composes over | What it captures |
|---------------|--------------|------------------|
| **Roadmap DAG** | Constitutional (specialization) | Initiatives, milestones, dependencies, sequencing; derivable from Constitutional + sequence annotations |
| **Intent hypergraph** | Commitment (pre-stage) | Multi-party offers, needs, conditions as hyperedges before binding or retirement; binary edges too small for this stage |
| **Event graph** | Commitment + Epistemic (temporal projection) | State changes through time, provenance chains; surfaceable from commitment + attestation tables without a separate Event schema |
| **Routing/flow graph** | Commitment (pool-flow projection) | How resources, obligations, and information circulate through pools and networks; substantially covered by Commitment's pool + attestation structure |
| **Discourse graph** | Constitutional + Epistemic (governance-revision layer) | Questions, proposals, arguments, objections, decisions; argument-attestation as distinct class (claim-against-claim); whether Discourse earns primary status if a full implementation matures is a future question |

**On the epistemic graph:** This is the graph surface canonized as `epistemic graph`. `Knowledge graph` survives only as an explicit public-facing gloss per ADR-0019; the rename emphasizes that the surface tracks what counts as knowing (claims, evidence, attestation, provenance), not just stored knowledge.

**On tier earning-test:** ADR-0058 supersedes-via-prose ADR-0036's earlier primary-set (Constitutional / Roadmap DAG / Intent hypergraph) on earning-test grounds: Constitutional / Commitment / Epistemic each correspond 1:1 to a load-bearing running-system implementation (spec-DAG tooling / BKC+PM commitment-pools / KOI unified-search), while Roadmap DAG and Intent hypergraph are composable over primaries without independent materialization. ADR-0036's graph-structure-distinctness reading remains available as research-lens.

### On DAGs and the coordination substrate

Not all projections are DAGs. The Constitutional graph is a DAG (constraint hierarchy); Roadmap DAG (view-template specialization) is a DAG (temporal ordering); Commitment and Epistemic graphs are directed graphs with lifecycle states / weighted edges respectively; view-templates vary (hypergraphs, append-only temporal, weighted directed, argumentation structure). A vision may describe a desired future state that includes or references any graph type — the DAG structure specifically captures irreversible orderings (governance dependency, temporal sequence), not the full topology of what a vision can express.

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

**Assessment:** 7 of 9 primitives clearly instantiated (Field + Holon + Membrane + Intent + Commitment + Evidence + Signal). 4 of 7 membrane operations exercised. Joint-commitment is not present at Gilbertian form — bilateral edge registration, not irreducibly-joint multi-party binding. Reproduction is cross-episode and not instantiated in this single-relay-pilot trace (would appear in long-term vault maintenance across actor turnover). The grammar maps cleanly to the relay implementation. The relay is a protocol (store-and-forward) operating within the federated-knowledge-exchange pattern.

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

**Assessment:** 8 of 9 primitives clearly instantiated (Field + Holon + Membrane + Intent + Commitment + Joint-commitment + Evidence + Signal). 6 of 7 membrane operations exercised (only `revoke` not explicitly documented, though implied by sovereignty invariants). **Joint-commitment is present as the paradigm Gilbertian case ADR-0050 cites** — pool-formation, multi-party governance rules, NOAM clearing requiring multi-party simultaneous coordination, and federation protocol-version adoption across 4 bioregional nodes all exhibit irreducibly-joint binding (open expression of readiness under common knowledge; directed obligations and demand-rights of a different kind from moral ones). Reproduction is implicit in ongoing pool maintenance, demurrage-driven circulation, and cross-episode stewardship but is not explicitly traced as a standalone primitive here — long-term pool viability across actor turnover is where Reproduction's cross-episode time-scale would surface. The grammar maps to the full economic coordination layer. BKC's three-plane architecture (Knowledge, Capital, Coordination) corresponds to three clusters of graph projections: epistemic (knowledge), commitment + flow (capital), and all others (coordination).

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

**Assessment:** 6 of 9 primitives clearly instantiated (Field + Holon + Membrane + Intent + Commitment + Signal; Evidence implicit in entity-resolution validation and mentionedIn updates). Joint-commitment and Reproduction are not single-operator concepts and are expected absent in this single-workflow trace. The grammar maps cleanly to a personal workflow node — this trace demonstrates Spore's grammar at the smallest scale Spore has reached (personal holon with tool membrane).

---

## Distillation Stack

For communication at different depths:

1. **Headline:** Spore is a common grammar for plural, sovereign coordination across scales.
2. **Second line:** It helps people, agents, and collectives coordinate coherently without flattening difference.
3. **Expanded:** It includes an evolving bridge ontology, but goes beyond ontology to articulate what matters (axiological), what counts as knowing (epistemological), how coordination should happen (praxical), and how these layers can evolve in common without flattening difference (ethical).
4. **Doctrinal:** Its pattern language names recurring ways living systems hold, channel, and transform tension across scales into viable forms of coordination.
5. **Layer summary:** The grammar is the deep structure. The pattern language makes it legible. The protocols make it reliable.
6. **Functional:** It enables holons to sense, interpret, claim, attest, intend, commit, coordinate, and revise across consented membranes through mutual legibility and accountable feedback, while preserving local autonomy and plurality.
