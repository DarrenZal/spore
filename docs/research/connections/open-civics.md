---
doc_id: spore.connection.open-civics
doc_kind: research
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.federation-protocol
  - spore.commitment-pooling
  - spore.governance-artifacts
  - spore.intent-publication
  - spore.connection.bennett-every-timeline
sources:
  - title: "Towards an Open Civics: Civic Infrastructures as Enabling Conditions for a Vital, Resilient, and Participatory Civilization"
    author: Patricia Parkinson et al.
    type: primary
disposition: clarify existing term
research_subkind: bridge_note
concepts:
  - polycentricity
  - stigmergy
  - non-enclosability
  - civic-infrastructure
  - health-indicators
---

# Towards an Open Civics

A bridge note on the Open Civics thesis and its structural relationship to Spore's coordination grammar. Open Civics operates at the normative-diagnostic layer — it describes what civic infrastructure should do and why, framed through meta-crisis analysis, three-attractor strategy, and design principles for distributed civic innovation. Spore operates at the coordination layer, giving these aspirations social and technical form through primitives, patterns, and protocols.

## What Open Civics Is

"Towards an Open Civics" (47pp, Nov 2024) is a collectively authored thesis making the case for civilizational transformation through distributed civic innovation. Published under copyleft as a "living blueprint," it combines:

1. **Meta-crisis diagnosis** — interconnected systemic crises (ecological collapse, wealth inequality, regulatory capture, multi-polar traps) driven by rivalrous, extractive, zero-sum models
2. **Three-attractor strategic framing** (via Schmachtenberger) — chaos, authoritarian control, or distributed coordination ("Third Attractor")
3. **Three conditions for the Third Attractor** — self-correcting feedback loops, aligned incentives, civic culture
4. **System composition model** — five components (institutions, infrastructure, incentives, interactions, culture) that must transform together
5. **Design principles** — modular, composable, inclusive, interoperable
6. **Health indicators** — resilience, choice, vitality
7. **Coordination mechanisms** — stigmergy, polycentricity, blockchain/P2P
8. **Federation model** — OpenCivics Network as decentralized solidarity network
9. **Pattern language** — Open Civic Innovation Framework (OCIF) as meta-pattern for composing civic utilities

The thesis draws on Ostrom, Alexander, Schmachtenberger, Bateson, Bauwens, Tang, and the Sunflower/g0v, Rojava, Buen Vivir, and Sarvodaya movements. It is explicitly protopian (incremental, continuously improving) rather than utopian (fixed perfect state).

**Artifact profile:** doc-rich, implementation-thin. The thesis is a normative and analytical document, not a protocol specification or running system. Patricia Parkinson's 3 agents and the OpenCivics Network are the closest to implementation evidence.

## Structural Mapping to Spore

Open Civics and Spore operate at different registers. OC is a normative thesis; Spore is a coordination grammar. The mapping is a translation across registers, not an identity claim.

| # | OC Concept | Spore Equivalent | Strength | Disposition |
|---|-----------|-----------------|----------|-------------|
| 1 | Meta-crisis analysis | Intent pressure + constitutional commitments | Moderate | no change |
| 2 | Three Attractors | Viable continuation sets (Bennett) | Moderate | clarify existing term |
| 3 | Three Conditions (feedback) | Coordination loop (Sense→...→Revise) | Strong | clarify existing term |
| 4 | Three Conditions (incentives) | Commitment pooling | Strong | clarify existing term |
| 5 | Three Conditions (culture) | Worldview grammar (ethical layer pervasive) | Moderate | unresolved tension |
| 6 | System Composition | Holonic architecture + patterns/protocols + worldview grammar | Moderate | no change |
| 7 | Extitutions | Holons + membranes + forkability | Strong | clarify existing term |
| 8 | Open Protocols | Agent Commons pattern language + protocols + forkability | Strong | candidate pattern |
| 9 | Design Principles (4) | Constitutional commitments (7, superset) | Strong | no change |
| 10 | Health Indicators (R/C/V) | Candidate viability signals (Bennett bridge note) | Moderate | candidate pattern |
| 11 | Stigmergy | Event graph + signal primitive + inferred intents | Moderate | no change |
| 12 | Polycentricity | Semilattice + holonic network architecture | Strong | no change |
| 13 | OpenCivics Network | Mycorrhizal federation protocol + bilateral trust | Moderate | no change |
| 14 | OCIF meta-pattern | Coordination grammar (three-layer) | Strong | candidate pattern |
| 15 | Non-enclosability | Forkability + contestability | Strong | clarify existing term |
| 16 | Civic culture as component | Worldview grammar (ethical layer as pervasive) | Moderate | unresolved tension |

## Bilateral Claims

**C1: Extitutions are holons with membrane operations.** OC's extitution concept (self-organizing frameworks with permeable boundaries replacing hierarchical bureaucracies) is structurally equivalent to Spore's holon+membrane composition. The membrane's seven operations (expose, translate, authorize, attest, contest, revoke, fork) provide the operational grammar that extitutions need but do not specify. The fork operation specifically enables the self-reorganization OC describes. The authorize/revoke pair governs the permeability OC requires.
- Evidence from OC: pp.17-19 (extitutions as self-organizing frameworks with fluid boundaries)
- Evidence from Spore: [relational-agency-and-holons.md](../../foundations/relational-agency-and-holons.md):15-29 (holons), [holonic-network-architecture.md](../../foundations/holonic-network-architecture.md):18-26 (membrane operations)
- Disposition: clarify existing term — "extitution" is useful civic-facing vocabulary; holon+membrane provides the operational specification

**C2: OCIF and Spore's coordination grammar are converging pattern languages at different maturity levels.** Both attempt to create composable pattern languages for distributed coordination. OC describes a meta-pattern inspired by Alexander's pattern language methodology; Spore has a named three-layer architecture (grammar + pattern language + protocols) with ten primitives, five published patterns, and two protocols. The question is whether OC's civic patterns can be expressed as compositions of Spore's ten primitives.
- Evidence from OC: pp.35-38 (OCIF as meta-pattern for composing civic utilities)
- Evidence from Spore: [project-vision.md](../../project-vision.md):10-12 (Agent Commons definition), `patterns/` directory (5 files)
- Disposition: candidate pattern — primary convergence point for Patricia's work

**C3: OC's three conditions map to Spore's coordination loop, commitment pooling, and worldview grammar.** Self-correcting feedback is operationalized by the coordination loop (Sense→Interpret→Claim→Attest→Intend→Commit→Coordinate→Act→Revise). Aligned incentives are operationalized by commitment pooling with scope-bound accountability. Civic culture is encoded structurally in the five-layer worldview grammar rather than treated as a separable component.
- Evidence from OC: pp.12-16 (three conditions for Third Attractor)
- Evidence from Spore: coordination-grammar.md (loop), [commitment-pooling.md](../../patterns/commitment-pooling.md), worldview grammar section
- Disposition: clarify existing term

**C4: OC's federation model is aspirationally aligned but operationally underspecified.** The OpenCivics Network is described as a "decentralized solidarity network" at the vision level. Spore's [mycorrhizal federation protocol](../../foundations/mycorrhizal-federation-protocol.md) specifies: 4 sovereignty invariants, 5-step bilateral trust establishment, 7 domain event types with payloads, transport requirements, replication model (event-driven eventual consistency), and 4 failure modes with explicit behaviors.
- Evidence from OC: pp.32-35 (OpenCivics Network)
- Evidence from Spore: [mycorrhizal-federation-protocol.md](../../foundations/mycorrhizal-federation-protocol.md):28-108
- Disposition: no change — documents an asymmetry useful for Patricia's team; Spore's protocol could complement OC's vision

**C5: OC's health indicators could serve as a legibility layer over Spore's viability signals.** OC proposes three health indicators: resilience (absorb shocks), choice (meaningful alternatives), vitality (generative capacity). These map naturally over Spore's more granular viability signals: resilience covers repair debt + ecological thresholds, choice covers forkability + membrane authorization, vitality covers intent pressure + unused capacity. The tripartite framing could produce a civic-facing health dashboard pattern.
- Evidence from OC: pp.22-26 (resilience/choice/vitality with sub-indicators)
- Evidence from Spore: [bennett-every-timeline.md](./bennett-every-timeline.md):72-80 (candidate viability signal surfaces)
- Disposition: candidate pattern

**C6: Culture as component vs. culture as pervasive.** OC treats culture as one of five system composition components alongside institutions, infrastructure, incentives, and interactions. Spore treats culture (the ethical/ethos layer of the worldview grammar) as pervasive across all primitives — not isolable from the ontological, epistemological, axiological, or praxical layers. OC's decomposition is analytically useful (you can study culture independently). Spore's integration is operationally necessary (you cannot build consent-based membranes without the ethical layer being structural). The tension is productive.
- Evidence from OC: pp.16-17 (system composition model)
- Evidence from Spore: coordination-grammar.md worldview grammar section
- Disposition: unresolved tension

**C7: Spore's membrane operations fill OC's boundary-crossing gap.** OC's design principles call for composable, interoperable civic utilities but do not specify how boundary crossing is authorized, how translation between organizational contexts works, or how disputes are resolved. Spore's seven membrane operations provide this specification, validated in three ground-truth traces (relay pilot, BKC commitment pooling, personal workflow).
- Evidence from OC: pp.21-22 (design principles)
- Evidence from Spore: [holonic-network-architecture.md](../../foundations/holonic-network-architecture.md):18-26, 3 ground-truth traces
- Disposition: no change

## What Spore Confirms

OC's concepts map cleanly to existing grammar in several areas:

1. **Polycentricity.** Both derive from Ostrom. Spore's dual-axis architecture (holonic containment + network overlap → semilattice) is the structural implementation of polycentric governance. Alexander's "A City is Not a Tree" is cited in both.

2. **Stigmergy.** Spore's signal primitive and event graph already support stigmergic coordination — individual actions modifying shared state that other holons sense and respond to. No new primitive needed.

3. **Non-enclosability.** Achieved in Spore through forkability (constitutional commitment), contestability (constitutional commitment), and PPL licensing. OC names the principle; Spore operationalizes it.

4. **Design principles.** OC's four (modular, composable, inclusive, interoperable) are a subset of Spore's seven constitutional commitments. Spore adds provenance, authorized boundary crossing, and explicit reviewable authority.

5. **Aligned incentives.** Commitment pooling (validated: 2 pools, 23+ commitments, 33,400 VCV on Celo mainnet) provides specific lifecycle states, routing, demurrage, and settlement — the mechanism OC describes as a requirement.

## What Is Thinner in Spore

Areas where OC reveals gaps or provides framing Spore could adopt:

1. **Civic framing vocabulary.** Meta-crisis, three attractors, extitutions — OC provides a political-diagnostic vocabulary that Spore does not currently articulate. For civic audiences, OC's framing is more immediately legible than Spore's grammar terminology. This is a positioning asset, not a grammar gap.

2. **Health indicators as legibility layer.** OC's resilience/choice/vitality triad is simpler and more communicable than Spore's candidate viability signals. The tripartite framing could serve as a civic-facing organizing layer. **Candidate pattern.**

3. **Non-enclosability as named property.** Spore achieves it (forkability + contestability) but does not name it as a distinct derived property. OC's naming is clearer for digital commons / knowledge commons audiences. Candidate for explicit mention in positioning or the project vision's constitutional commitments commentary.

4. **Stigmergy as named coordination mode.** Spore supports it through existing primitives but does not name it. Adding stigmergy as a recognized coordination mode (a named pattern of existing primitive use) could improve legibility for complex-systems audiences.

5. **Activation as metabolic function.** OC's emphasis on inclusive design and civic participation adds weight to a known gap. The [flow funding bridge note](./flow-funding.md) already identifies activation (how new participants join) as one of Spore's weakest areas.

## What Is Thinner in Open Civics

Where Spore's operational specification exceeds what OC describes:

1. **Federation specification.** Spore has sovereignty invariants, trust establishment, domain events, transport requirements, replication model, and failure modes. OC has vision-level federation only. This is the highest-value document for Patricia.

2. **Governance primitives.** Spore has 10 named primitives, 13 named relations, 7 membrane operations, and lifecycle transitions for claims, commitments, attestations, artifacts, and intents. OC has design principles and aspirational descriptions.

3. **Epistemic infrastructure.** Spore's [claims-evidence-attestation](../../protocols/claims-evidence-attestation.md) protocol provides a specific mechanism for making knowledge trustworthy across boundaries — who attests, what counts as evidence, how claims are challenged. OC discusses "self-correcting feedback" without specifying grounding.

4. **Economic coordination.** Spore's commitment pooling (validated with BKC: 2 pools, 23+ commitments, on Celo) provides lifecycle states, routing, demurrage, and settlement. OC has "aligned incentives" without mechanism.

5. **Worldview grammar depth.** Spore explicitly encodes five worldview layers and has passed pluralism tests against three worldview positions (Indigenous/OCAP, bioregional/ecological, personal/pragmatic). OC's five-component model is descriptive rather than generative.

6. **Implementation evidence.** Spore has ground-truth traces against BKC (4 federated nodes, 1000+ entities, commitment pooling on Celo), a validated relay pilot, and a personal workflow node. OC's implementation evidence is thinner (Patricia's 3 agents, the OpenCivics Network as aspiration).

## Evolution Notes

Patricia Parkinson (Open Civics co-founder) and Darren are in active conversation about federated knowledge commons infrastructure. Patricia approaches from "the agnostic open civic utility direction" and values realism, consent, and clear specs. She was surprised to learn Darren's work goes beyond Regen Network indexing. She references Nelson's Xanadu and Lanier's "Who Owns the Future" — the same cybernetic lineage that informs Spore's provenance and federation commitments.

### Convergence path

**Immediate (can happen now):**
- Share the mycorrhizal federation protocol — the highest-value document for Patricia. It provides the kind of operational specification she values.
- Share the [adoption guide](../../governance/adoption-guide.md) — Tier 0 (vision doc + project.json) takes 2 minutes. Low-barrier entry point.
- Share the comparative intake process itself — a "clear spec" meta-tool for how two projects can learn from each other without merging.

**Near-term (requires Patricia engagement):**
- Map OCIF patterns to Spore primitive compositions. If Patricia can provide the specific patterns in OCIF (not just the meta-level description), they could be expressed as compositions of Spore's ten primitives. This is the strongest convergence test.
- Pilot a bilateral bridge note hosted by both projects. Tests cross-project `depends_on` with a real external project.
- Health indicator prototype: map R/C/V onto Spore's viability signals and BKC's implementation evidence. Could produce a civic health dashboard pattern both projects publish.

**Longer-term (depends on maturity):**
- OC as first external Spore adoption surface. Track 1's success signal: "Someone runs `ingest_spec_dag.py` on their own project." If Patricia's team adopts governance memory (Tier 0/1), they become the first external adopter.
- Agent interoperability: Patricia's 3 agents exchanging Spore domain events (entity_created, claim_anchored, attestation_added, commitment_created) with BKC nodes. Tests true cross-project federation.
- Pattern language convergence question: are OCIF and Agent Commons the same pattern language at different maturity levels, or complementary languages needing a translation membrane?

## Claim Register

**C1** [confidence: high] [anchor: §Where Open Civics Confirms Spore — Polycentricity]
Open Civics confirms Spore's polycentricity and federation model — both derive from Ostrom, both conclude that A City is Not a Tree. Spore's dual-axis architecture (holonic containment + network overlap → semilattice) is the structural implementation of polycentric governance OC describes normatively.

**C2** [confidence: medium] [anchor: §What Is Thinner in Spore — Health indicators]
OC's resilience/choice/vitality triad could serve as civic-facing organizing layer for Spore's candidate viability signals — a simpler, more communicable frame for civic audiences than Spore's grammar terminology. Candidate pattern for positioning docs.

**C3** [confidence: medium] [anchor: §What Is Thinner in Spore — Stigmergy]
Stigmergy should be named as a recognized coordination mode in Spore (supported by existing primitives — signal, event graph — but not yet named). Naming it would improve legibility for complex-systems audiences.

**C4** [confidence: high] [anchor: §What Is Thinner in Open Civics — Federation specification]
Spore's operational federation specification (sovereignty invariants, trust establishment, domain events, transport requirements, failure modes) substantially exceeds OC's vision-level description — this is the highest-value Spore document for OC's Patricia Parkinson.

## Open Questions

1. **What are OCIF's specific patterns?** The thesis describes OCIF at the meta-level. Does OC have named, structured patterns (Context → Problem → Forces → Pattern → Related) that could be mapped to Spore primitive compositions? If so, the convergence test becomes concrete.

2. **How does OC handle epistemic grounding?** The thesis calls for "self-correcting feedback loops" but does not specify how feedback becomes epistemically grounded — who attests, what counts as evidence, how claims are challenged. Is this a gap OC recognizes, or an intentional deferral?

3. **Is non-enclosability a Spore commitment?** Spore achieves it through composition (forkability + contestability). Should it be named explicitly as a derived property in the project vision, or does naming it risk reifying a composite into a false primitive?

4. **What is Patricia's preferred adoption surface?** The convergence path has multiple entry points. The right one depends on whether Patricia wants to (a) adopt governance memory for OC's own documentation, (b) test federation between OC agents and BKC nodes, or (c) focus on pattern language convergence first.

5. **Culture: component or pervasive?** The unresolved tension (C6) may not need resolution — OC's analytical decomposition and Spore's structural integration could coexist. But if both projects collaborate on a shared health indicator framework, the culture question becomes practical: does vitality belong in a "culture" component or pervade all three indicators?

## Disposition

**Overall: clarify existing term.** Open Civics provides civic-facing vocabulary for coordination concepts Spore already operationalizes. Two subsystems warrant **candidate pattern** disposition: health indicators as legibility layer (R/C/V organizing Spore's viability signals) and OCIF as convergence point for mutual pattern-language enrichment. One **unresolved tension**: culture as separable component vs. pervasive layer.

No new primitives are indicated. The strongest convergence path is through OCIF-to-Spore pattern mapping and federation protocol sharing.
