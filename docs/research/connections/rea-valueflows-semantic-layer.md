---
doc_id: pm.connection.rea-valueflows-semantic-layer
doc_kind: research
status: draft
research_subkind: bridge_note
disposition: candidate pattern
depends_on: []
relates_to:
  - pm.connection.commitment-pooling-and-mutual-credit
  - pm.protocol
  - pm.grammar
  - spore.connection.p2p-wiki-post-intake-synthesis
concepts:
  - rea-ontology
  - commitment-pooling
  - coordination-substrate
  - mutual-credit
  - interoperability-as-institutional
  - market-dependence
  - value-capture
  - curation-valuation-limitation-exchange
sources:
  - url: https://wiki.p2pfoundation.net/Value_Flows
    title: Value Flows
    rid: orn:p2p-wiki.page:Value_Flows
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Value_Flows_Vocabulary
    title: Value Flows Vocabulary
    rid: orn:p2p-wiki.page:Value_Flows_Vocabulary
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Lynn_Foster
    title: Lynn Foster
    rid: orn:p2p-wiki.page:Lynn_Foster
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Resource-Event-Agent_Model
    title: Resource-Event-Agent Model
    rid: orn:p2p-wiki.page:Resource-Event-Agent_Model
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Holo-REA
    title: Holo-REA
    rid: orn:p2p-wiki.page:Holo-REA
    type: primary
    license: CC BY-SA 4.0
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-synthesis-2026-04-17.md
    title: Phase A synthesis (§3c P-PM-1, §4c DH-PM-1)
    type: seed
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-agent-d-foundations-rea-law.md
    title: Phase A Agent D dossier (B9 REA/ValueFlows primary)
    type: seed
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-agent-a-care-indigenous-solidarity.md
    title: Phase A Agent A dossier (Nelson non-market-socialism critique)
    type: seed
---

# REA / ValueFlows as PM's Semantic Layer

This bridge note is Wave 1 Supporting Note 9 of the P2P Foundation wiki Pass 2 intake. It grounds Poietic Match's commitment-pooling and coordination-substrate canon in the Resource-Event-Agent (REA, McCarthy 1982) accounting ontology and its open-source evolution through Lynn Foster and Bob Haugen (NRP → ValueFlows → Holo-REA). It closes the open follow-on flagged in Pass 1 at `pm.connection.commitment-pooling-and-mutual-credit` by identifying ValueFlows as the semantic governance layer for PM's CVLE and commitment-pooling operations, while carrying forward — unresolved — the Nelson non-market-socialism critique that accounting itself may encode exchange-value logic (Phase A DH-PM-1).

**Decentralization-myth-bundle inheritance.** This note's claims inherit the decentralization-myth-bundle critique (Seeds 1+2+3: administrator-capture, decentralization-theater, digital-labor trap). See the Pass 2 opposition notes `decentralization-theater-opposition`, `digital-labor-peer-production-opposition`, and (Wave 2) `peer-governance-wikipedia-opposition` for the standing counter-evidence. Claims in this note do not implicitly endorse "decentralized" or "peer-to-peer" as a sufficient governance property for PM routing/matching; ValueFlows' own framing as "internetworking for peer production networks" requires specification of how power-decentralization mechanisms operate alongside the protocol — a requirement the vocabulary itself does not supply.

## 1. REA as a domain-neutral accounting ontology

The Resource-Event-Agent model was introduced by William E. McCarthy in 1982 as a re-engineering of accounting for the computer age: instead of derived categories like assets, liabilities, debits, and credits, REA models three real-world primitives — Resources (goods, services, money, including natural resources), Events (business transactions or agreements affecting resources), and Agents (people or other human agencies) — with a "duality" relation linking paired events (e.g., a sale linked to a cash receipt). The wiki's primary `Resource-Event-Agent_Model` page records that double-entry bookkeeping disappears in REA, that REA treats the accounting system as a virtual representation of real-world business, and that in computer-science terms "REA is an ontology." ISO adopted REA as its economic-and-accounting ontology in 2002, and REA is now taught in accounting information systems classes internationally.

Bob Haugen's framing, preserved verbatim on the wiki, characterizes REA as "a simple economic and accounting ontology that can handle all economic resources, not just monetary ones; can handle full economic cycles including production, distribution, and exchange; and can handle externalities (waste and degradation of resources) as well as generative resource flows." REA supports "resource flow or process flow models at any level of granularity and aggregation, so that micro-models may be interconnected with macro-models and vice versa." This aggregation property is why REA generalizes beyond single-enterprise accounting into supply chains, value networks, and whole-economy coordination.

## 2. Lynn Foster's genealogy: NRP → ValueFlows → Holo-REA

Lynn Foster's `Lynn_Foster` bio records the operational lineage that matters for PM. Foster spent three decades in software consulting across manufacturing, railroads, gas utilities, food, healthcare, and accounting before retiring to work with Bob Haugen at Mikorizal Software on next-economy P2P infrastructure. In 2012, Sensorica (an open-hardware manufacturer) adopted REA and coined the term "Open Value Network"; Foster and Haugen built the Network Resource Planning (NRP) software with them — "the first iteration of the software on which many subsequent forks have been based." From 2014–2018, Foster, Elf Pavlik, Mikey Williams, and Jon Richter extracted the vocabulary work from NRP into the ValueFlows project, "a common vocabulary for apps in economic networks." Foster subsequently contributed to migrating NRP to Holochain as Holo-REA (with pospi), yielding "A ValueFlows / REA economic network coordination system implemented on Holochain & GraphQL."

This thirty-year genealogy is operational prior art, not speculative design. It is the throughline from McCarthy's 1982 accounting-reform paper through Foster and Haugen's 1995–2011 supply-chain work, through Sensorica's 2012 Open Value Network, through the 2014–2018 ValueFlows vocabulary, into Holo-REA's Holochain implementation. PM inherits a mature ontology, a tested vocabulary, and an in-progress implementation testbed — rather than starting from scratch.

## 3. The six ValueFlows principles

The primary `Value_Flows` page states the purpose directly: "to enable internetworking among many different software projects for resource planning and accounting within fractal networks of people and groups." Six principles follow, which this note reproduces in the wiki's own wording and maps to PM operations:

1. **Internetworking.** "The vocabulary must support coordinating work between different people in different organizations using different software on different platforms using different human and programming languages." This is `interoperability-as-institutional` in PM's frozen vocabulary — semantic sovereignty across organizational boundaries, not API bridges between silos.
2. **Bidirectional tracking.** "The vocabulary must track the flows of resources (value) forwards and backwards." Flows are visible from both producer and consumer sides, not from a single agent's viewpoint — which is what lets REA escape double-entry bookkeeping's "one-agent perspective" (Haugen 2018 on the wiki: traditional accounting artifacts "are interpretations of those events from the viewpoint of one and only one agent").
3. **Reward distribution.** "The vocabulary must distribute income (rewards) according to peoples' contributions, regardless of where and when in the network those contributions occurred." This is the attribution-to-reward pipeline — directly relevant to PM's commitment-pooling, where allocation rules must handle time-shifted and location-shifted contributions.
4. **Fractality.** "The vocabulary must be fractal: it must support high-level views of networks as well zooming in to lower and lower levels of detail." Scale-invariant structure: the same vocabulary covers an individual task, a project, a cooperative, a supply chain, a bioregional network — compatible with PM's bioregional-coordination scope.
5. **Recipe / planning / accounting.** "The vocabulary must work at the recipe, planning, and accounting levels." This is the commitment → event → resource lifecycle: a recipe specifies the process template; planning creates commitments; accounting records events against those commitments. ValueFlows explicitly names "commitment" as a primitive at the planning level — which is the direct fit for PM's `commitment-pooling`.
6. **Shape-agnostic.** "The vocabulary must work for alternative and traditional organizing shapes and economic relationships." ValueFlows does not assume capitalist firms, cooperatives, commons, or gift economies as the canonical organizing shape; the vocabulary is designed to cover all of them.

## 4. ValueFlows as PM's semantic layer

The wiki evidence warrants treating ValueFlows as the semantic governance layer for PM's commitment-pooling and CVLE operations, for three reasons. First, the vocabulary already names "commitment" as a planning-layer primitive — PM's `commitment-pooling` is a specialization of ValueFlows' commitment + accounting operations, not a competing model. Second, ValueFlows' shape-agnostic principle is precisely what PM's CVLE (curation / valuation / limitation / exchange) substrate needs: CVLE is designed to cover multiple organizing shapes (solidarity economy, mutual aid, commitment-pooling, mutual credit, commercial credit circuits), and ValueFlows already abstracts across those shapes. Third, Holo-REA provides a potential tech-stack alignment point — an implementation testbed for REA/ValueFlows on Holochain with a GraphQL interface — so PM is not inventing an implementation pattern from scratch.

This is why the disposition of this note is `candidate pattern` (projection slug: `propose-pattern`): REA/ValueFlows is genuinely new semantic vocabulary for PM's canon surface (protocol, grammar, commitment-pooling connection), not a clarification of an existing term. The proposed pattern places REA's Resource / Event / Agent trio as the ontological backbone of `pm.grammar`, ValueFlows' six principles as direct inputs to `pm.protocol`, and ValueFlows' commitment + planning + accounting layer as the operational semantics at `pm.connection.commitment-pooling-and-mutual-credit`.

## 5. Beyond the enterprise: REA at bioregional scale

Haugen's "Beyond The Enterprise" material (excerpted on the wiki) extends REA past single-firm accounting into ad-hoc networks of external economic entities: "REA economic exchanges can extend across companies, industries, nations, regions and the earth as a whole. REA economic resource and agent types can aggregate data at higher and higher levels." The Nova Scotia "Regional Sustainable Seafood Distribution Network" example on the wiki is a bioregional use case — fishing vessels, small-scale processors, local distribution hubs, farmers markets, community-supported fisheries, and a regional food hub in Halifax — modelled in REA's chained conversion-and-exchange processes linked by output-input stock flows. This matches PM's bioregional-coordination scope: a seafood network operated as an REA value-system rather than as a platform-mediated marketplace.

Haugen further draws an analogy (following Jason Moore) between REA input-output chains and metabolic pathways, where enzymes catalyze otherwise-non-spontaneous reactions — the unity of work and energy as metabolic flow. This is metaphor with teeth: it names the substrate property PM's coordination layer is trying to provide — catalytic coordination across agents that would not otherwise transact, organized as persistent flows rather than point-in-time market transactions.

## 6. Tensions

Three tensions must be carried forward into any canon adoption.

1. **DH-PM-1 — accounting-dependence may be deeper than market-dependence.** The Phase A synthesis records Anitra Nelson's non-market-socialism critique (via interview): any monetary framing, including PM's mutual-credit and time-banking, encodes a capitalist logic — "money is not a neutral tool" but "the basis of practices that developed and maintain class and private property." ValueFlows claims to be shape-agnostic and refuses price-based valuation in principle, but **bidirectional tracking + reward distribution + recipe/planning/accounting are themselves accounting operations**. The tension is whether non-monetary accounting (Resource types, Event logs, reward-distribution rules) can avoid leaking exchange-value logic, or whether accounting-as-such is the problem. The wiki's own framing leans toward accounting-can-be-reformed (Bauwens introducing REA as "post-capitalist accounting, though market-friendly integrative accounting"; Haugen's Wired-article excerpt framing REA as the "operating system" for economic networks "not yet escaped from capital, but nothing in the version of REA that we use assumes or requires capitalist relationships"). Nelson's position is the stronger critique: if accounting itself encodes exchange-value, PM's semantic substrate must be genuinely post-accounting — concrete needs, no universal unit — which is far more radical, and per Phase A analysis may be operationally infeasible at bioregional scale. **This tension is not resolved in this note.** Canon stewards decide whether PM adopts ValueFlows as semantic substrate (accepting the Nelson risk), adopts a narrower subset (e.g., Resource + Agent without Event-accounting), or refuses the accounting frame entirely. R4 below holds this tension.

2. **Implementation maturity gap.** ValueFlows is a vocabulary standard — a specification. Holo-REA is an in-progress Holochain implementation described on the wiki as "A suite of functionally independent building blocks for creating distributed social, economic & resource coordination applications of any kind, implemented as Holochain 'DNA modules' (fully decentralised app microservices)." The `Holo-REA` page dates the "seemingly still accurate" framing description to an earlier point, and does not claim production-grade status. PM adopting ValueFlows inherits specification maturity, not production-ready infrastructure; adopting Holo-REA inherits an in-progress implementation with Holochain-specific stack assumptions. Any PM canon claim that leans on Holo-REA as "proven infrastructure" overstates the wiki evidence.

3. **Peer-production framing inheritance.** ValueFlows is explicitly framed for "peer production networks" — the vocabulary's purpose statement is "internetworking among many different software projects... within fractal networks of people and groups." This inherits the decentralization-myth-bundle critiques by proximity: peer-production framing without specified power-decentralization mechanisms tends toward administrator-capture, decentralization-theater, and digital-labor dynamics (see Pass 2 opposition notes for the detailed arguments). The vocabulary itself does not encode governance — shape-agnostic is explicit — which means power-over questions (who curates the Resource taxonomy, who defines reward-distribution rules, who audits event logs) are downstream of the protocol. PM adopting ValueFlows does not inherit answers to these questions; it inherits the vocabulary and must specify the governance separately.

## 7. Disposition

**Disposition: candidate pattern.** REA/ValueFlows is proposed as a candidate semantic-substrate pattern for PM's canon surface. The pattern proposes: (a) extending `pm.grammar` to name the Resource / Event / Agent trio as ontological backbone with `commitment` as a planning-layer primitive; (b) extending `pm.protocol` to carry ValueFlows' six principles as first-order design inputs (with explicit governance-gap disclaimers per §6.3); (c) closing the Pass 1 open follow-on at `pm.connection.commitment-pooling-and-mutual-credit` by specifying ValueFlows as the semantic substrate for commitment-pooling operations. Adoption is not automatic — the DH-PM-1 tension (§6.1) requires canon-steward decision on whether the accounting frame is acceptable, and governance mechanisms per §6.3 must be specified alongside pattern adoption. (Projection slug: `propose-pattern` per `DISPOSITION_SLUG` mapping in `project_bridge_notes.py:66`; `extend` is not a recognized disposition value and would fall back to `unclassified`.)

## 8. Claim Register

**C1** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Resource-Event-Agent_Model]
REA (McCarthy 1982) is a domain-neutral accounting ontology of three real-world primitives — Resources (goods, services, money, natural resources), Events (transactions or agreements affecting resources), and Agents (people or other human agencies) — linked by "duality" relations between paired events; in computer-science terms, "REA is an ontology" that eliminates derived accounting categories (debits, credits, many general-ledger accounts) in favor of directly modeling real-world business objects.

**C2** [confidence: high] [anchor: §Applications · orn:p2p-wiki.page:Resource-Event-Agent_Model]
REA is domain-neutral across economic resource types: Haugen states directly that REA "can handle all economic resources, not just monetary ones; can handle full economic cycles including production, distribution, and exchange; and can handle externalities (waste and degradation of resources) as well as generative resource flows" — and "supports resource flow or process flow models at any level of granularity and aggregation."

**C3** [confidence: high] [anchor: §Timeline · orn:p2p-wiki.page:Resource-Event-Agent_Model]
REA has a 30-year standards lineage: McCarthy 1982 seminal paper → 1999 Ontological Foundation of REA Enterprise Information Systems (three layers: event, commitment/planning, type/policy) → 1999–2001 ebXML / UN-CEFACT / ISO engagement → 2002 ISO adoption as economic and accounting ontology → 2017 ISO work on REA-on-blockchains. This positions REA as tested operational prior art, not speculative design.

**C4** [confidence: high] [anchor: §Bio · orn:p2p-wiki.page:Lynn_Foster]
Lynn Foster's genealogy is operational: 30 years of software consulting (manufacturing, railroads, gas utilities, food, healthcare, accounting) → retirement to Mikorizal Software with Bob Haugen for P2P next-economy infrastructure → Network Resource Planning (NRP) in collaboration with Sensorica (2012, "the first iteration of the software on which many subsequent forks have been based") → ValueFlows project (2014–2018, common vocabulary for apps in economic networks) → Holo-REA (migration of NRP to Holochain, with pospi).

**C5** [confidence: high] [anchor: §Principles · orn:p2p-wiki.page:Value_Flows]
ValueFlows specifies six principles: (1) internetworking across different people, organizations, software, platforms, and human/programming languages; (2) bidirectional tracking of resource flows forwards and backwards; (3) reward distribution according to contributions regardless of where and when they occurred; (4) fractality supporting high-level network views and low-level detail; (5) operation at the recipe, planning, and accounting levels; (6) shape-agnosticism across "alternative and traditional organizing shapes and economic relationships." These six are explicitly the design requirements for the vocabulary.

**C6** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Value_Flows]
ValueFlows' stated purpose is "to enable internetworking among many different software projects for resource planning and accounting within fractal networks of people and groups" — the vocabulary is positioned as a semantic-interoperability standard for economic coordination, not as a platform or an implementation.

**C7** [confidence: high] [anchor: §Characteristics · orn:p2p-wiki.page:Value_Flows_Vocabulary]
ValueFlows Vocabulary re-asserts the internetworking principle as the primary characteristic — "coordinating work between different people in different organizations using different software on different platforms using different human and programming languages" — establishing semantic sovereignty (shared vocabulary, heterogeneous implementations) as the core interoperability claim.

**C8** [confidence: high] [anchor: §Definition · orn:p2p-wiki.page:Holo-REA]
Holo-REA is described as "A ValueFlows / REA economic network coordination system implemented on Holochain & GraphQL" — "a suite of functionally independent building blocks for creating distributed social, economic & resource coordination applications of any kind, implemented as Holochain 'DNA modules' (fully decentralised app microservices)" — scoped "like an ERP system for networks, but implemented as agent-centric P2P nodes using a suite of small apps that can all work together." This is an in-progress implementation, not production-grade infrastructure.

**C9** [confidence: high] [anchor: §Applications · orn:p2p-wiki.page:Resource-Event-Agent_Model]
REA scales beyond single enterprises to whole economic networks: "REA economic exchanges can extend across companies, industries, nations, regions and the earth as a whole. REA economic resource and agent types can aggregate data at higher and higher levels" — with explicit wiki example (Nova Scotia regional sustainable seafood distribution network) demonstrating bioregional-scale deployment as chained conversion-and-exchange processes linked by output-input stock flows.

**C10** [confidence: medium] [anchor: §Introduction · orn:p2p-wiki.page:Resource-Event-Agent_Model]
The wiki frames REA as "post-capitalist accounting, though market-friendly integrative accounting that is aware of its surroundings" (Bauwens) and as "not yet escaped from capital, but nothing in the version of REA that we use assumes or requires capitalist relationships" (Haugen) — positioning REA as shape-agnostic and reformable rather than as inherently anti-capitalist or inherently capitalist. This is the wiki's own framing of REA's relationship to exchange-value logic.

**C11** [confidence: medium] [anchor: §Discussion · orn:p2p-wiki.page:Resource-Event-Agent_Model]
The wiki records Haugen's explicit note that "blockchains are not necessary for that vision. Something like Holochain or even Scuttlebutt could work better," and preserves Gregg Cassel's analysis that REA/ValueFlows modeling requires peer-coordinated data security substrates (Scuttlebutt, Holochain) but does not itself specify them — the vocabulary layer and the trust/storage/transmission layer are distinct, and the vocabulary does not dictate the substrate.

## 9. Review Claims

**R1** [review claim] [target: pm.grammar] [concept: rea-ontology]
PM's grammar should adopt the REA Resource / Event / Agent trio as its ontological backbone, with "commitment" named as a ValueFlows planning-layer primitive that specializes into PM's `commitment-pooling`. This anchors PM's grammar in a 30-year tested accounting ontology (McCarthy 1982 → ISO 2002 → ValueFlows 2014–2018 → Holo-REA) rather than in ad-hoc coordination vocabulary, and makes PM's commitment-pooling explicitly a specialization of ValueFlows' planning-layer commitments rather than a competing model. The grammar must carry the shape-agnostic principle (PM operations cover cooperative, commons, gift-economy, mutual-credit, and commitment-pooling shapes without privileging any one).
*R1 is supported by C1, C2, C5 (principle 6, shape-agnostic), C6.*

**R2** [review claim] [target: pm.protocol] [concept: interoperability-as-institutional]
PM's protocol specification should treat ValueFlows' six principles — internetworking, bidirectional tracking, reward distribution, fractality, recipe/planning/accounting, shape-agnosticism — as first-order design inputs, not as downstream implementation guidance. In particular, internetworking (principle 1) instantiates `interoperability-as-institutional` as a protocol-level requirement: PM must be specifiable across different software, platforms, and languages; bidirectional tracking (principle 2) must be enforced at the event-log layer; reward-distribution (principle 3) must be handled as a first-class protocol operation rather than a post-hoc accounting derivation. Adoption carries explicit disclaimers per §6.3: the vocabulary does not encode governance of the taxonomy, the rules, or the audit surface, and PM must specify those governance mechanisms separately.
*R2 is supported by C5, C6, C7.*

**R3** [review claim] [target: pm.connection.commitment-pooling-and-mutual-credit] [concept: commitment-pooling]
The Pass 1 commitment-pooling-and-mutual-credit connection note's open follow-on should be closed by specifying ValueFlows as the semantic substrate for PM's commitment-pooling operations. ValueFlows names `commitment` as a planning-layer primitive; the recipe/planning/accounting principle (principle 5) covers the commitment → event → resource lifecycle that PM's pooling operations need; the shape-agnostic principle (principle 6) covers the heterogeneity of pools PM must accommodate (mutual-credit pools, commercial credit circuits, reputation markets, gift-economy obligation networks). Holo-REA's Holochain + GraphQL implementation is flagged as a potential tech-stack alignment point but is explicitly named as in-progress, not production-grade. Adoption closes the Pass 1 follow-on but does not resolve DH-PM-1 (R4).
*R3 is supported by C4, C5, C6, C8.*

**R4** [review claim] [target: pm.protocol] [concept: market-dependence]
PM canon must carry, as an unresolved tension and not a settled position, the Nelson non-market-socialism critique that accounting itself may encode exchange-value logic. ValueFlows claims shape-agnosticism and refuses price-based valuation, but bidirectional tracking + reward distribution + recipe/planning/accounting are accounting operations — Nelson's argument is that any monetary framing, including non-monetary unit accounting, encodes a capitalist logic. This R-claim explicitly holds both positions without resolving: (a) ValueFlows' position that non-monetary accounting can operationalize commitment-pooling at scale and may be the only operationally feasible substrate for bioregional coordination, and (b) Nelson's position that accounting itself is the problem and post-accounting coordination (concrete needs, no universal unit) is the deeper requirement, which Phase A analysis flags as possibly operationally infeasible at bioregional scale. Canon stewards decide: adopt ValueFlows as semantic substrate accepting the Nelson risk; adopt a narrower subset (Resource + Agent without Event-accounting); or refuse the accounting frame entirely. Do not let PM silently assume ValueFlows bypasses market-dependence.
*R4 is supported by C10 (wiki's own "not yet escaped from capital" framing) and opposed by the Nelson non-market-socialism position carried in Phase A synthesis §3c P-PM-7 and §4c DH-PM-1. R4 holds the tension; it does not resolve it.*

**R5** [review claim] [target: pm.protocol] [concept: coordination-substrate]
PM's protocol should inherit REA's domain-neutrality and aggregation property (resource flow or process flow models at any level of granularity and aggregation, from micro- to macro-models) as structural features of the coordination substrate, supporting bioregional-scale deployments (the wiki's Nova Scotia seafood-network example is the concrete model). The protocol must separate the vocabulary layer (ValueFlows/REA) from the substrate layer (messaging, storage, trust) — per Cassel on the wiki, REA modeling and peer-coordinated data security are distinct layers, and the vocabulary does not dictate the substrate. PM should not assume Holochain, blockchain, or any specific substrate; ValueFlows works across substrates. Substrate choice is a separate protocol-level decision.
*R5 is supported by C2, C9, C11.*

**R6** [review claim] [target: pm.grammar] [concept: curation-valuation-limitation-exchange]
PM's CVLE (curation / valuation / limitation / exchange) grammar should be mapped explicitly onto ValueFlows' planning/accounting layers: curation maps to Resource-type and Agent-type taxonomies (who counts as a participant, what counts as a resource); valuation maps to reward-distribution rules (principle 3) without price-based valuation (per wiki explicit exclusion); limitation maps to resource-level constraints at the accounting layer (each economic resource may have limits, per Haugen on the wiki); exchange maps to the Event layer with its duality relations. This mapping does not claim PM's CVLE was derived from ValueFlows — it specifies how CVLE operations can be instantiated in ValueFlows vocabulary once PM adopts it. The mapping makes CVLE operationally auditable rather than a conceptual gloss.
*R6 is supported by C1, C2, C5 (principles 3 and 5).*

## 10. Attribution

Wiki sources cited in this note are from the P2P Foundation wiki (https://wiki.p2pfoundation.net), licensed CC BY-SA 4.0. 100% of this note's source claims (11/11) anchor to wiki pages via the `orn:p2p-wiki.page:*` RID convention; this note is derived-claims dominant and is published under CC BY-SA 4.0. Derivative claims in this note inherit ShareAlike obligations for downstream use. See `docs/research/connections/LICENSE-WIKI-DERIVED.md` for the repo-level notice.

Five wiki pages contribute source claims: `Value_Flows` (C5, C6), `Value_Flows_Vocabulary` (C7), `Lynn_Foster` (C4), `Resource-Event-Agent_Model` (C1, C2, C3, C9, C10, C11), `Holo-REA` (C8).
