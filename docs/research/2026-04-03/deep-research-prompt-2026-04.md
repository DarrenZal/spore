# Deep Research Prompt — Spore / Agent Commons (April 2026)

## Purpose

This prompt is designed for a multi-hour deep research session. The goal is not a literature survey — it is a **synthesis** that identifies which intellectual traditions, formal methods, adjacent projects, and scientific theories can deepen Spore's foundations, fill its known gaps, and position it relative to a rapidly evolving ecosystem of coordination technologies.

Every research direction should produce:
1. **Survey** — What does the external literature say?
2. **Bridge** — How does it map to specific Spore concepts?
3. **Gap analysis** — What does Spore already handle well? What does it miss?
4. **Synthesis** — A concrete next step: design direction, candidate concept, or tension with proposed resolution
5. **Candidate claims** — Stated with confidence level (high/medium/low) and disposition (no change / clarify existing term / candidate primitive or pattern / unresolved tension)

---

## What Spore Is

Spore is an infrastructure for collective agency — a common grammar for plural, sovereign coordination across scales and scopes. It develops and publishes **Agent Commons**: a pattern language, protocol family, and governance-memory layer.

**Core thesis:** Coordination at every scale requires the same primitives — sovereign identity, shared memory, commitment protocols, governance patterns, and federation rules. These compose fractally.

### The Grammar

**10 Primitives:** Holon (bounded center of coherence, simultaneously whole and part), Membrane (active boundary for visibility, consent, jurisdiction, access), Signal (directional cue), Claim (proposition about world/system/relationship), Evidence (what bears on a claim), Attestation (situated witnessing or endorsement, recursive — attestations are themselves claims), Intent (declared directional signal rooted in care/need/offer), Commitment (promise accepted into coordination scope with scope-bound accountability), Artifact (durable memory surface), Event (immutable temporal primitive).

**Coordination Loop** (cycle, not pipeline): Sense → Interpret → Claim → Attest → Intend → Commit → Coordinate → Act → Revise → (back to Sense). Every transition can happen within a holon (internal) or across a membrane (federated).

**8 Graph Projections** (different views of one ecology): Constitutional graph (DAG of visions/values/constraints), Roadmap DAG (temporal ordering of initiatives), Epistemic graph (entities/claims/evidence/provenance), Intent hypergraph (multi-party needs/offers/conditions), Commitment graph (promises/pools/agreements/fulfillment), Event graph (append-only temporal), Flow graph (capital/attention/obligations moving), Discourse graph (questions/proposals/arguments/decisions — the self-reflective layer).

**7 Membrane Operations:** expose, translate, authorize, attest, contest, revoke, fork.

**5 Worldview Layers:** Ontological (what exists), Epistemological (what counts as knowing), Axiological (what matters), Praxical (how we act), Ethical (how we inhabit participation).

**7 Constitutional Commitments:** Provenance, Forkability, Pluralism with interoperability, Meaningful local autonomy, Authorized boundary crossing, Explicit and reviewable authority, Contestability.

**Instance Model:** Canon (governed repository) + Node (infrastructure substrate) + Agent (perceives/decides/acts) + Site (public membrane). These compose at any scale.

**Key concept — Intent Pressure:** The structural force created when the normative frontier (what should be true) and the epistemic frontier (what is true) diverge. The engine of coordination. Formalized via Bennett's persistence ordering: persistence is what the timeline "values"; intent pressure is the coordination-legible form of this.

**Key concept — Legibility Progression:** Intent (directional signal) → Promise (intent made legible enough to witness) → Commitment (promise accepted into scope with accountability). "Binding" means scope-bound accountability, not coercion.

### What We've Built (Ecosystem Context)

The grammar is tested across a family of implementations at different scales:

- **Pattern authority** (this project): 47 docs in a governed spec DAG with cross-project dependency validation
- **Intelligence systems specialization**: A companion commons that maps the grammar to intelligence system primitives (retrieval, memory, evidence, grounding, evaluation, agentic control). Defines 7 primitives, 5 memory layers (working → session → episodic → semantic → governance), and a seasonal learning-gate process
- **Bioregional knowledge commons** (production proving ground): 4 federated bioregional nodes running the same knowledge graph backend with bilateral trust, event-driven eventual consistency, and signed envelopes. 560+ entities, 23+ commitment pool entries, $33.4K in community currency minted on Celo. Hybrid retrieval pipeline (BM25 + vector + RRF + FlashRank reranking)
- **Personal-scale coordination**: An AI agent plugin system with 19 auto-triggering skills, 12 external system bridges (MCP servers), and 3-layer persistent memory. An always-on home-server agent reachable via Telegram with federated knowledge graph access, proactive context injection, and skill routing
- **Knowledge graph substrate**: PostgreSQL + pgvector backend providing semantic search, 5-tier entity resolution (exact → fuzzy → contextual → semantic → create new), federation transport, claims engine with on-chain anchoring to Regen Ledger
- **B2B service layer**: Positioned as "trusted translation and coordination infrastructure" for impact organizations — data membrane (connect Salesforce/APIs/ledger), translation layer (map evidence to external frameworks like TNFD/SBTi), verified coordination (commitment tracking, attestation, reporting)
- **Bioregional pilot** (Victoria, BC): Landscape Hub mapping workshops producing a living, searchable knowledge base with flow funding allocation and outcome documentation, targeting cross-landscape convergence at the Turtle Island Bioregional Congress (Sept 2026)

### What's Validated vs. Frontier

**Validated:** Governance memory (spec DAG across multiple projects), federation (4 bioregional nodes with bidirectional sync), commitment pooling (on-chain with real community currency), AI-human coordination (personal workflow + always-on agent), knowledge operations (1000+ entities with hybrid retrieval), store-and-forward relay, claims/evidence/attestation anchoring.

**NOT validated:** Multi-agent decision-making (current system governs artifacts, not actors), true sovereign federation between independent teams (all current nodes maintained by same team), external adoption by non-original maintainers, holonic nesting beyond 2 levels, intent publication as a formal protocol, vision-as-graph grounding through sensors, temporal dynamics (decay, phase transitions), continuous conviction signals for commitment pools, full worldview-commoning (only ontology-layer commoning exists so far).

### Intellectual Foundations Already Integrated

- **Christopher Alexander** — Pattern languages, semilattice structure (A City is Not a Tree)
- **Arthur Koestler** — Holons (simultaneously whole and part)
- **Elinor Ostrom** — Commons governance, polycentric governance, 8 design principles
- **Will Ruddick / Grassroots Economics** — Commitment economies, voucher pools, geodesic trust topology
- **Indy Johar** — Relational agency ("invest not in independence but in infrastructures of interdependence"), linguistic closure as failure mode
- **Karl Friston** — Active inference, Free Energy Principle (gap between desired and actual drives action)
- **Michael Timothy Bennett** — Persistence ordering as source of normativity without external evaluator; formal grounding for intent pressure; autopoiesis derivable from persistence; "every timeline is an opinion"
- **Hyperstition theory** (CCRU/Owocki) — Constructive vs extractive self-fulfilling coordination; Spore as infrastructure for composing constructive hyperstitions
- **Donna Haraway** — Sympoiesis (collectively produced systems, not self-produced)
- **Sociocracy 3.0** — Consent-based governance, circles, domains (borrowed selectively, not adopted wholesale)

### Known Theoretical Gaps

Based on the project's own analysis:

1. **Formal composition theory** — The grammar claims fractal composability but never formalizes it
2. **Temporal dynamics** — Decay, renewal, phase transitions flagged as unresolved in hyperstition governance synthesis
3. **Multi-agent decision theory** — Artifact governance exists; actor governance does not
4. **Intent hypergraph formalization** — Named but never formalized (the only n-ary projection)
5. **Mechanism design for commitment pools** — No formal analysis of incentive compatibility
6. **Flow graph / routing / settlement** — Underspecified
7. **The activation problem** — How new participants join is the weakest area
8. **Material power asymmetries** — Formal rights vs practical accessibility is the deepest objection surfaced in the hyperstition governance synthesis
9. **Linguistic closure** — The risk that Spore's own categories become stopping rules (Johar)

---

## Research Clusters

### Cluster 1: Adjacent Protocols and the Emerging Agentic Web

**Why this matters to Spore:** Spore positions itself as a coordination grammar, not a platform. The ecosystem of coordination technologies, agentic protocols, and decentralized identity systems is evolving rapidly. Spore needs to know where it sits — shared territory, complementary territory, and contested territory — and identify specific interoperability surfaces.

**Research directions:**

**1.1 Holochain.** The most structurally adjacent project — agent-centric, local-first, commons-oriented.
- How does Holochain's validation-by-peers model compare to Spore's attestation-based trust? Where do the trust models converge and diverge?
- Holochain's DHT (Distributed Hash Table) vs Spore's event-driven eventual consistency for federation. What are the tradeoffs?
- Holochain's DNA/zome/membrane model vs Spore's canon/node/agent/site instance model. Structural equivalences?
- What is Holochain's current state of adoption and production maturity? Honest assessment.

**1.2 AT Protocol (Bluesky).** Federated social protocol with self-sovereign identity.
- AT Protocol's "speech vs reach" distinction (anyone can speak; reach is governed by algorithms/labelers). Does this map to Spore's expose/translate membrane operations?
- AT Protocol's lexicon system (typed records with semantic versioning) vs Spore's graph projections.
- Moderation as governance: AT Protocol's labeler ecosystem as a form of distributed attestation. What can Spore learn from how AT Protocol handles contestability at scale?

**1.3 Ceramic / ComposeDB.** Decentralized data at the edge.
- How would Spore's lifecycle state machines map onto Ceramic streams?
- Could Spore's graph projections be served through ComposeDB's GraphQL interface?

**1.4 Noosphere (Subconscious).** Gordon Brander's protocol for thought.
- Noosphere's content-addressed linking model vs Spore's epistemic graph. What is structurally similar? What's fundamentally different?
- The "Subtext" markup as minimal representation — contrast with Spore's dual representation (narrative + graph).

**1.5 Plurality / RadicalxChange.** Glen Weyl, Audrey Tang, et al.
- Plural technology: quadratic voting, quadratic funding, plural money, soulbound tokens. Which of these mechanisms complement Spore's commitment pooling?
- The "Plurality" book (Weyl and Tang): what does it propose about coordination across difference? How does Spore's "pluralism with interoperability" relate?
- **Polis** (Hsiao, Mou — Taiwanese civic tech): structured opinion mapping across large groups. Relevant to discourse-as-governance?

**1.6 The emerging agentic web.**
- Google's A2A (Agent-to-Agent) protocol: how does it handle trust, delegation, and boundary-crossing? Does it address sovereignty?
- Anthropic's MCP (Model Context Protocol): what are its limitations as a federation surface? MCP provides tool interoperability but lacks identity, trust, and consent primitives. What would need to change for it to support sovereign federation?
- The "agent swarm" pattern (AutoGen, CrewAI, LangGraph): does multi-agent orchestration converge with Spore's multi-holon coordination, or are these fundamentally different paradigms?
- Trust and delegation in multi-agent AI systems: who is working on formal trust protocols? What exists beyond API keys?
- The sovereignty question: who controls an AI agent? How does Spore's sovereignty model (self-sovereign identity, authorized boundary crossing, forkability) apply to non-human agents?

**1.7 Decentralized identity and verifiable credentials.**
- DIDs (W3C Decentralized Identifiers) vs Spore's approach to identity. Compatibility?
- Verifiable Credentials (VCs) as formalization of attestation. How does the VC data model map onto Spore's attestation primitive?
- Soulbound tokens (Weyl/Ohlhaver/Buterin) as non-transferable attestations. Relevant to commitment persistence and trust tiers?

**1.8 Open Civics and related civic infrastructure projects.** What civic infrastructure projects exist in this space?
- Digital Public Goods Alliance, GovStack, and other institutional efforts
- Network Nations (Primavera De Filippi et al.) — jurisdiction as coordination, not territory
- Protocol Labs / Filecoin Foundation's work on knowledge infrastructure

---

### Cluster 2: Formal Foundations for Composition

**Why this matters to Spore:** Spore's central claim is fractal composability — "the same patterns work from personal workflow to planetary federation." This claim is asserted throughout the documentation but never formalized. The grammar has 10 primitives, 13 relations, 7 membrane operations, 8 graph projections, and lifecycle state machines — but no formal theory of how they compose. Without formalization, composability is a design aspiration, not a provable property.

**Research directions:**

**2.1 Applied category theory for coordination grammars.**
- Can the 10 primitives be organized as objects in a category where the 13 relations are morphisms? What does this buy?
- Can membrane operations be formalized as functors between categories (the internal category of a holon and the shared/federated category)?
- Can the self-similarity property (a holon at one scale is a coherent point; at another it is a graph) be captured as a natural transformation or as a presheaf?
- Investigate: David Spivak's work on operads for modular systems. Brendan Fong and David Spivak's "Seven Sketches in Compositionality." The Applied Category Theory community's work on open systems.
- **Poly** (the polynomial functor framework) as a language for interfaces and lenses — is it applicable to membranes? Membranes have an "inside face" and an "outside face," which is precisely the structure Poly captures.

**2.2 Session types and process algebra for membrane operations.**
- The 7 membrane operations define a behavioral protocol. Can they be formalized as session types (Wadler, Honda/Vasconcelos/Kubo)?
- Session types would give formal guarantees about protocol completion: if two holons begin a membrane interaction, the type ensures they cannot get stuck.
- Process algebras (CSP, pi-calculus) as alternative formalization for inter-holon communication. Pi-calculus handles mobility (channel passing), which is relevant to fork (creating new processes/holons).

**2.3 Hypergraph formalization for the intent projection.**
- The intent hypergraph is the only projection that truly requires n-ary relationships (multi-party, multi-condition matching). What formal hypergraph theories apply?
- Directed hypergraphs for multi-party coordination. Sheaf theory on hypergraphs (Justin Curry).
- Is matching/composition in a commitment pool a cooperative game on a hypergraph? What does cooperative game theory say about allocation fairness in hypergraph settings?
- The "pool as field where vectors compose" metaphor. Is there a formal treatment of needs-as-pull-vectors and offers-as-push-vectors composing in a field? Topological data analysis / persistent homology for detecting structural features of the intent landscape?

**2.4 Sheaf-theoretic consistency for federation.**
- The architecture doc already mentions sheaves: "coherent local views that glue together globally." This is precisely the sheaf condition.
- Michael Robinson's work on sheaves for information integration. Can federated knowledge systems be formalized sheaf-theoretically?
- Cellular sheaves on the federation graph: what does the cohomology tell you about where consistency fails?
- The sheaf condition as a formal statement of "federation without convergence" — local sections (each node's perspective) that are consistent on overlaps but do not require a global section.

---

### Cluster 3: Governance, Political Theory, and the Democratic Deficit

**Why this matters to Spore:** Internal governance synthesis surfaced what may be the deepest objection to the approach: "material power asymmetries make formal exit rights practically inaccessible." Forkability, contestability, and meaningful autonomy are constitutional commitments — but formal rights may be necessary and insufficient without addressing material conditions. The roadmap's decision-governance track moves from artifact governance to actor governance but has no theoretical framework for multi-agent decision-making.

**Research directions:**

**3.1 Deliberative democracy theory.**
- Habermas (communicative action, ideal speech situation): how does Spore's discourse graph relate to ideal speech conditions? Where does it fall short?
- Dryzek (discursive democracy): emphasis on plurality of discourses and "the deliberative system" across multiple sites. Directly relevant to federated discourse.
- **Iris Marion Young** (Inclusion and Democracy): critique that structured deliberation advantages those comfortable with dominant argumentative norms. Does structured discourse-as-governance reproduce this bias?
- Feminist critiques of deliberation (Sanders, Young): when is structured argumentation itself a form of power?
- **James Fishkin** (deliberative polling): how do structured processes for opinion formation work at scale? Can they inform discourse-as-governance?

**3.2 Exit, voice, and loyalty in digital commons.**
- Hirschman's framework is implicitly central (forkability = exit, contestability = voice, commitment = loyalty). Has this been formally applied to digital commons?
- How does "exit" work differently in digital vs physical contexts? Forking a codebase vs leaving a country.
- Tiebout sorting and its digital analogues. Does easy exit undermine voice?
- "Exit to where?" — Forkability is only meaningful if the forked system can achieve critical mass. What's the minimum viable fork?

**3.3 Amartya Sen's capability approach.**
- Spore's vision of "collective agency: the situated capacity to sense, decide, and act meaningfully" resonates strongly with Sen's capability approach (freedom as capability to achieve functionings).
- Can Spore's constitutional commitments be reframed as capability guarantees? (Forkability as capability to exit; contestability as capability to object; meaningful autonomy as capability to participate partially.)
- Martha Nussbaum's list of central capabilities: does the grammar implicitly protect certain capabilities? Should it?
- What does "digital capability" mean in a coordination system?

**3.4 Consent-based governance theory.**
- Sociocracy (Endenburg) vs Sociocracy 3.0 (Priest/Bockelbrink) vs Holacracy (Robertson): structural differences and tradeoffs. What are the strongest and weakest properties of consent-based governance for federated coordination?
- Consent vs consensus vs majority: formal properties (speed, inclusiveness, stability, reversibility).
- When does consent-based governance scale? When does it break down? Empirical evidence?

**3.5 Polycentric governance at scale.**
- Post-Ostrom Bloomington School: McGinnis and Ostrom on multi-level governance.
- Aligica and Tarko on polycentric governance and complexity.
- Real-world polycentric cases: EU governance, internet governance (ICANN, IETF, W3C), international climate regime. What works? What fails?
- Specifically: what happens to polycentric governance when information asymmetries are high and coordination costs are low (the AI-mediated future)?

**3.6 Indigenous governance frameworks.**
- What do indigenous governance traditions (Two Row Wampum, potlatch, clan systems, consensus practices) offer that Western democratic theory misses?
- How do these traditions handle the sovereignty-federation tension that Spore addresses?
- What are the ethical considerations in borrowing from these traditions? (Our bioregional pilot explicitly addresses indigenous knowledge sovereignty with default community-only visibility and consent protocols.)

---

### Cluster 4: Mechanism Design and Economic Coordination

**Why this matters to Spore:** Commitment pooling is the most production-validated economic mechanism ($33.4K in community currency on Celo), but it has no formal incentive analysis, no mechanism design treatment, and several open questions: continuous conviction signals, demurrage tuning, multi-pool routing optimality. Our B2B service positioning identifies the "action layer" (where verified claims trigger fund movement, governance decisions, reporting) as the defensible product — this requires economic formalization.

**Research directions:**

**4.1 Mechanism design for commitment pools.**
- Model the pool as a mechanism: agents have types (capacities, needs, time constraints), they report intents, the mechanism produces an allocation. Is truthful reporting a dominant strategy?
- How does demurrage interact with strategic behavior? Does it create perverse incentives or align them?
- Matching market theory (Roth/Shapley stable matchings): applicable when commitments are bilateral?
- Combinatorial auctions: applicable when intents are multi-dimensional (matching needs across multiple attributes simultaneously)?
- Mechanism design without money (Procaccia et al.): commitment pools use promises and vouchers, not fiat prices. What does the MDWM literature offer?

**4.2 Conviction dynamics and continuous signals.**
- Formal properties of conviction voting (BlockScience/1Hive). How does time-weighted signaling create different incentive structures than one-shot voting?
- Continuous signaling vs discrete commitment: incentive property differences?
- Can threshold-based flow funding (TBFF) be analyzed as a redistribution mechanism with formal properties (convergence, fairness, strategy-proofness)?
- Augmented bonding curves and continuous organizations: relevant to continuous conviction signals for pools?

**4.3 Commons mechanisms beyond Ostrom.**
- Charlotte Hess and Ostrom: "Understanding Knowledge as a Commons" — specific mechanisms for knowledge commons governance.
- Quadratic funding (Buterin/Hitzig/Weyl) as formal public goods mechanism. How would QF interact with commitment pooling?
- Retroactive public goods funding (Optimism) as post-hoc evaluation mechanism. Relevant to the evidence/attestation cycle?
- Commitment devices in behavioral economics (Laibson, O'Donoghue/Rabin). When pre-commitment improves coordination outcomes.
- Impact certificates and hypercerts (Protocol Labs). Formalized claims + transferable impact rights. Relationship to Spore's claims/evidence/attestation?

**4.4 The activation problem.**
- Network effects literature: how do coordination systems bootstrap?
- Information cascades (Bikhchandani/Hirshleifer/Welch). Tipping point dynamics in platform adoption.
- The specific problem: commons that are valuable at scale but require collective action to bootstrap.
- What does the empirical record say about successful commons bootstrapping? (Wikipedia, Linux kernel, cooperative platforms — what patterns recur?)
- The "last-mile" problem: even well-designed coordination infrastructure fails if onboarding is too expensive. What keeps adoption costs low?

---

### Cluster 5: Temporal Dynamics, Decay, and Phase Transitions

**Why this matters to Spore:** This is the most consistently flagged gap across the entire project. The hyperstition governance synthesis identifies temporal dynamics as the first active tension. The claims/evidence/attestation protocol names attestation decay but prescribes no decay function. Commitment pooling lists demurrage as configurable but provides no tuning theory. Bennett's formal grounding provides persistence ordering as a temporal primitive, but this has not been operationalized into decay functions, phase transition indicators, or temporal governance rules.

**Research directions:**

**5.1 Trust dynamics and decay models.**
- Bayesian trust models (Marsh, Josang's beta-reputation systems). What formal decay functions preserve the property "trust reflects how you coordinate now, not a single flawless period years ago"?
- Trust in repeated games (folk theorem, shadow of the future). How does the shadow of the future change in digital coordination systems where interaction records are persistent?
- Domain-specific decay rates as governance parameters (Spore's own observation: "dating commitments decay faster than supply chain SLAs"). How should these be parameterized? Is there a principled way to derive decay rates from domain properties?
- Reputation systems in decentralized networks (EigenTrust, PageRank-based trust). Do these converge with or diverge from Spore's attestation-based trust?

**5.2 Phase transitions in coordination systems.**
- When does constructive coordination become extractive? What are the early warning signals?
- Granovetter threshold models: cascade dynamics in adoption and abandonment. Applied to commitment pools: when does a pool tip from viable to collapsed?
- Resilience theory (Holling/Gunderson/Walker): panarchy, adaptive cycles (exploitation → conservation → release → reorganization). Does the coordination loop map to an adaptive cycle?
- Critical slowing down as early warning indicator (Scheffer et al.). Can Spore detect approaching phase transitions in coordination dynamics?
- Bennett's angle: phase transitions as contraction of viable continuation sets. Can this be made computable? What data would you need to estimate viable continuation set size?

**5.3 Temporal logics for governance.**
- Linear Temporal Logic (LTL), Computation Tree Logic (CTL) for reasoning about governance state over time.
- Branching time logics (relevant to Bennett's "branchable futures") for representing parallel roadmaps and fork scenarios.
- TLA+ (Lamport) for specifying temporal properties of distributed systems. Could Spore's lifecycle state machines (claim lifecycle, commitment lifecycle, attestation lifecycle) be specified and model-checked in TLA+?
- Event sourcing and temporal databases as engineering implementations of the event graph's append-only temporal model.

**5.4 Renewal and revalidation protocols.**
- Sunset clauses in legislation and governance. Automatic reauthorization requirements as decay countermeasure.
- The "constituting act" in political theory — periodic reaffirmation of constitutional commitments.
- Sabbatical/fallow periods in commons governance (rotational access, seasonal coordination). Relevant to seasonal learning-gate approaches where upgrades are batched to equinox/solstice decision points?
- Regenerative design patterns: how do living systems renew rather than merely persist?

---

### Cluster 6: Biological and Complex Systems Foundations

**Why this matters to Spore:** Spore's biological metaphors (mycorrhizal federation, membrane, spore dispersal, metabolism) are central to its identity and naming. But they remain largely metaphorical. The active inference connection is acknowledged but unformalized. The "living system" framing pervades the project but lacks rigorous grounding in actual living systems science. If these metaphors are load-bearing (guiding design decisions), they need to be checked against the science they invoke.

**Research directions:**

**6.1 Mycorrhizal network science — checking the metaphor.**
- Suzanne Simard's work on forest communication networks ("mother trees," carbon transfer). But also: Karst et al. (2023) meta-analysis questioning bidirectional resource sharing claims. What is the current scientific consensus?
- Common mycorrhizal networks (CMNs): what properties are well-established vs contested? Specifically: do CMNs transfer significant resources between trees, or is the "wood wide web" narrative overstated?
- What properties of mycorrhizal networks ARE structurally useful for federation design? (e.g., network topology, cost-sharing dynamics, response to perturbation, nutrient cycling as signal routing)
- Mycorrhizal networks as biological commons: how do they handle free-rider problems? (Some evidence for preferential resource allocation to cooperative partners.)

**6.2 Autopoiesis, enaction, and the Santiago school.**
- Maturana and Varela's autopoiesis: self-producing wholes with operational closure. Bennett derives autopoiesis from persistence ordering. How does this relate to Spore's holon concept?
- Varela was critical of hierarchy. Koestler's holarchy is not pure hierarchy (holons have both autonomy and integration tendencies). Where do Varela and Koestler converge?
- Enactivism (Varela, Thompson, Rosch): cognition as embodied action, not representation. Johar's concern about coordination grammars becoming "stopping rules" connects here — enactivism offers a framework for why representation always underdetermines action.
- Francisco Varela's later neurophenomenology: bridging first-person experience and third-person science. Relevant to human-machine complementarity?

**6.3 Active inference: from metaphor to formalism.**
- Karl Friston's Free Energy Principle: current state of formalization and critique. Is it falsifiable? (Andrews 2021 critique: potentially unfalsifiable.)
- Active inference applied to multi-agent systems (Ramstead et al. 2019 on multi-scale active inference, collective behavior). What work exists on active inference for coordination?
- Can Spore's coordination loop be formally modeled as an active inference loop? What is the generative model? What are the hidden states? What free energy is being minimized?
- Relationship between Bennett's persistence ordering and Friston's free energy: are they derivationally related, complementary, or in tension?
- Practical question: even if the formalization works, what does it buy operationally? Does it produce better design decisions than the current informal "intent pressure" concept?

**6.4 Stigmergy and swarm intelligence.**
- Theraulaz and Bonabeau on swarm intelligence. Deneubourg on self-organization in insect colonies.
- Heylighen's "Stigmergy as a Universal Coordination Mechanism" (2016): stigmergy as trace-based, indirect coordination through shared environment.
- Digital stigmergy: Wikipedia editing patterns, open-source contribution dynamics, on-chain activity traces. What formal models capture these?
- Can Spore's event graph + signal primitive formally model stigmergic coordination? If events are traces and signals are stimuli, what properties emerge (convergence, robustness, efficiency)?

**6.5 Sympoiesis and the boundary question.**
- Donna Haraway's sympoiesis: collectively produced systems that lack spatial or temporal boundaries of their own. A direct challenge to the holon concept (which has boundaries via membranes).
- Beth Dempster's original sympoiesis concept: autopoietic systems have self-defined boundaries; sympoietic systems do not.
- Is the membrane model a resolution? Membranes in Spore are active, permeable, translating — not walls. Do they satisfy Haraway's concern?
- Or does the holon/membrane model still presuppose a degree of bounded individuation that sympoiesis rejects?

**6.6 Network science and graph theory for federation topology.**
- What does network science say about optimal federation topologies? (Small-world networks, scale-free vs random, hierarchical modular networks.)
- Dunbar's number and its implications for coordination group size. How does it interact with holonic nesting?
- Resilience of different network topologies to node failure, edge removal, and adversarial attack. Which topologies best serve Spore's sovereignty requirements?

---

### Cluster 7: Epistemology, Knowledge Representation, and the Limits of Grammar

**Why this matters to Spore:** Indy Johar's work on relational agency identifies "linguistic closure" — the risk that a grammar's own categories become stopping rules — as a structural threat to any coordination infrastructure. This is not a bug report; it's a philosophical challenge to the entire project. The grammar explicitly encodes five worldview layers including epistemology, but has no theory of its own limits. The discourse graph is described as the "self-reflective layer" — but reflexivity is philosophically treacherous. These are the deepest questions.

**Research directions:**

**7.1 Pragmatist epistemology and fallibilism.**
- Spore's claim lifecycle (proposed → supported → challenged → superseded) embodies pragmatist epistemology. What does the tradition offer explicitly?
- Peirce (fallibilism, abduction, self-correcting inquiry). The claim lifecycle as Peircean inquiry?
- Dewey (inquiry as problem-solving, democracy as epistemic practice). Relevant to discourse-as-governance.
- Rorty (anti-foundationalism, solidarity over objectivity). Spore says "no view from nowhere" — does this align with Rorty's pragmatism? Where does it diverge?

**7.2 Social epistemology and epistemic justice.**
- Miranda Fricker (epistemic injustice: testimonial injustice, hermeneutical injustice). Does structured attestation mitigate or reproduce epistemic injustice?
- Feminist standpoint epistemology (Harding, Haraway): "situated knowledges" and the impossibility of a view from nowhere. Spore's perspectival design claims to support this — but does the grammar fully operationalize it, or does it flatten perspectives into a common data model?
- The tension: the grammar must be shared (otherwise no coordination) but must not flatten difference (otherwise no pluralism). How do you represent multiple incommensurable perspectives in a common grammar without reducing them to a common denominator?

**7.3 Knowledge representation and ontology engineering.**
- Spore's "translate, don't unify" stance rejects ontological imperialism. What does the ontology alignment community offer?
- Euzenat and Shvaiko on ontology matching. Automatic and semi-automatic methods for mapping between ontologies — useful for schema translation between federated nodes with different local semantics?
- SKOS (already on Spore's roadmap). How far can SKOS take the translation challenge?
- Upper ontologies (DOLCE, BFO, SUMO): does Spore need one? Or is "thin shared protocol, thick local semantics" an alternative to upper ontologies?
- The frame problem in AI: how does a system know what changes when it acts? Relevant to the event graph's model of state change.

**7.4 Tacit knowledge and the limits of representation.**
- Polanyi (tacit knowledge: "we know more than we can tell"). If coordination depends on tacit knowledge that the grammar cannot capture, what are the scope implications?
- The enacted-knowledge tradition (Varela, Thompson, Rosch): cognition as embodied action, not internal representation. What can't be represented?
- Wittgenstein (language games, forms of life, "the limits of my language mean the limits of my world"). The grammar IS a language game — what does this imply about its jurisdiction?
- Does a coordination grammar need a term for what can't be represented? Or is that a category error?

**7.5 Reflexivity and the grammar reasoning about itself.**
- The discourse graph is "the self-reflective layer by which the coordination ecology reasons about and governs its own evolution." But reflexivity is treacherous:
- Gödel's incompleteness: no formal system can prove its own consistency. What are the implications for a governance grammar that includes self-reflection?
- Luhmann's systems theory: autopoietic social systems that produce themselves through communication. The distinction between system and environment maps to holon/membrane. What else does Luhmann offer?
- Gregory Bateson (levels of learning, logical types). The discourse graph operates at a meta-level relative to other graphs. Is there a risk of type confusion or infinite regress?
- Brian Cantwell Smith (computational reflection): programs that reason about themselves. What are the formal requirements for reflective systems?

**7.6 The human-machine complementarity question.**
- Our internal convergence analysis identified "human-machine-complementarity" as a cross-cutting theme across the coordination grammar and intelligence systems work.
- What does the AI alignment literature say about human-AI complementarity (as opposed to replacement)?
- Centaur chess and human-AI teaming: empirical evidence on when complementarity works vs when it doesn't.
- The specific Spore question: if an AI agent can participate in governance operations (propose, attest, contest, ratify, revoke), what changes? What safeguards are needed? What becomes possible that wasn't before?
- Stuart Russell's cooperative AI framework. MIRI's alignment research. Do any of these speak to multi-agent coordination with mixed human-AI collectives?

---

## Suggested Research Sequence

1. **Cluster 1** (Adjacent Protocols) first — establishes the competitive/collaborative landscape
2. **Cluster 2** (Formal Foundations) — identifies which formalisms are most tractable
3. **Cluster 3** (Governance Theory) — grounds Track 2 (decision-governance layer)
4. **Cluster 4** (Mechanism Design) — formalizes commitment pooling
5. **Cluster 5** (Temporal Dynamics) — fills the biggest gap
6. **Cluster 6** (Biological Foundations) — grounds the metaphors
7. **Cluster 7** (Epistemology) — deepest philosophical questions, best addressed last when other findings provide context

## What Good Output Looks Like

For each research direction, the output should be:
- **Grounded** — reference specific thinkers, papers, frameworks, not vague gestures
- **Bridged** — map findings to specific Spore concepts described above (primitives, membrane operations, graph projections, constitutional commitments, coordination loop phases, instance model components)
- **Honest** — distinguish between "Spore already handles this well" and "Spore has a real gap here"
- **Synthetic** — don't just report what others have said; propose what Spore should do with it
- **Actionable** — each direction should end with a concrete recommendation: a design direction to explore, a concept to add to the lexicon, a tension to surface, or a "no change needed" with reasoning
- **Critical** — if a Spore concept is weaker than external alternatives, say so. If a biological metaphor doesn't hold up scientifically, say so. The goal is to strengthen the project, not to validate it.

The most valuable output is not comprehensiveness but depth on the directions that matter most. If a direction turns out to be a dead end (the external literature doesn't offer anything the grammar doesn't already have), say so and move on. Equally, if a direction reveals a fundamental problem with Spore's approach, don't soften it.
