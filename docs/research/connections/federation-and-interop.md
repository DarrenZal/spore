---
doc_id: spore.connection.federation-and-interop
doc_kind: research
status: draft
research_subkind: bridge_note
disposition: clarify existing term
depends_on: []
relates_to:
  - spore.connection.p2p-wiki-field-scan
  - spore.connection.boundary-commoning
  - spore.connection.protocol-society
concepts:
  - interoperability-as-institutional
  - coordination-substrate
  - boundary-commoning
  - boundary-spanner
  - polycentric-governance
  - knowledge-commons
  - protocol-society
sources:
  - url: https://wiki.p2pfoundation.net/Cross-Platform_Federation_of_Internet_Infrastructures
    title: Cross-Platform Federation of Internet Infrastructures
    rid: orn:p2p-wiki.page:Cross-Platform_Federation_of_Internet_Infrastructures
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Social_and_Institutional_Interoperability
    title: Social and Institutional Interoperability
    rid: orn:p2p-wiki.page:Social_and_Institutional_Interoperability
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Policies_to_Promote_Public_Knowledge_Goods_and_Knowledge_Commons
    title: Policies to Promote Public Knowledge Goods and Knowledge Commons
    rid: orn:p2p-wiki.page:Policies_to_Promote_Public_Knowledge_Goods_and_Knowledge_Commons
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Fediverse
    title: Fediverse
    rid: orn:p2p-wiki.page:Fediverse
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Federated_Scaling
    title: Federated Scaling
    rid: orn:p2p-wiki.page:Federated_Scaling
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Interoperability_of_Knowledge
    title: Interoperability of Knowledge
    rid: orn:p2p-wiki.page:Interoperability_of_Knowledge
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Interoperability_for_Shared_Data_Models
    title: Interoperability for Shared Data Models
    rid: orn:p2p-wiki.page:Interoperability_for_Shared_Data_Models
    type: corroborating
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Interoperability
    title: Interoperability
    rid: orn:p2p-wiki.page:Interoperability
    type: corroborating
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Interoperable_Civilizations
    title: Interoperable Civilizations
    rid: orn:p2p-wiki.page:Interoperable_Civilizations
    type: corroborating
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Protocol_Commons
    title: Protocol Commons
    rid: orn:p2p-wiki.page:Protocol_Commons
    type: corroborating
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Federated_Social_Web
    title: Federated Social Web
    rid: orn:p2p-wiki.page:Federated_Social_Web
    type: corroborating
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Category:P2P_Infrastructure
    title: "Category:P2P Infrastructure"
    rid: orn:p2p-wiki.page:Category:P2P_Infrastructure
    type: category
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Cross-Platform_Federation_of_Internet_Infrastructures
    title: Cross-Platform Federation of Internet Infrastructures (resolved from Federation stub)
    rid: orn:p2p-wiki.page:Cross-Platform_Federation_of_Internet_Infrastructures
    type: corroborating
    license: CC BY-SA 4.0
    redirect_chain: [Federation, Cross-Platform_Federation_of_Internet_Infrastructures]
    note: "Resolved 2026-04-16 via migration 083. Federation.mediawiki is a stub (wiki page_id 36456, 6 words); canonical target is anchored above as the primary source for this cluster."
  - path: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-field-scan.md
    title: P2P Foundation Wiki — Field Scan (spore.connection.p2p-wiki-field-scan)
    type: seed
  - path: /Users/darrenzal/projects/spore/docs/research/connections/boundary-commoning.md
    title: Boundary Commoning (spore.connection.boundary-commoning)
    type: seed
  - path: /Users/darrenzal/projects/spore/docs/research/connections/protocol-society.md
    title: Protocol Society (spore.connection.protocol-society)
    type: seed
---

# Federation and Interoperability

This Tier 2 cluster note synthesizes the P2P Foundation wiki's federation-and-interoperability corpus — how distributed commons systems compose across boundaries, and how technical and institutional interoperability are entangled rather than separable — against Spore's `mycorrhizal-federation-protocol` and `instance-model` canon and the cross-project Intelligence Commons (governed knowledge commons) and Poietic Match (coordination substrate) surfaces. It is broader than the Tier 1b anchor notes (`boundary-commoning`, `protocol-society`), grouping 11 fully-read wiki pages plus the `Category:P2P_Infrastructure` category anchor into a single cluster.

The cluster's central thesis: federation in the P2P wiki tradition is not a synonym for "decentralization" — it is a layered claim that includes technical protocol composition (Fediverse / ActivityPub), institutional interoperability (Wilbanks/Rossini, Chan/Benkler), and federated-scaling-as-political-project (Krancj et al.). Spore's federation protocol canon, if it is to carry the cousin-concept vocabulary honestly, needs to name all three layers and their distinct failure modes.

## 1. Three layers of federation-and-interoperability in the wiki corpus

The wiki corpus consistently distinguishes three layers, each load-bearing:

- **Technical protocol interoperability**: the ability of heterogeneous systems to exchange messages via shared protocols (ActivityPub, OStatus, XMPP, Zot). The Fediverse page documents this in concrete terms: ~30 platforms, five communication protocols, ~4K instances, an OpenWeb Governance Body with three balanced stakeholder classes. Cross-Platform Federation of Internet Infrastructures (Barabas, Narula, Zuckerman / MIT DCI) names the architectural trade-off: federated systems bear "the additional burden of coordinating across different clients, which makes it tough for them to remain agile and adaptable over time" — Signal chose non-federated for exactly this reason.
- **Institutional/rights interoperability**: Wilbanks and Rossini's Berkman paper argues interoperability as a *design principle* that must span technology, intellectual property, semantic understanding, and institutional arrangements simultaneously. "Legal implications can reach through software to touch technology, content, knowledge products, and more." Chan (Symposium on the Wealth of Networks) extends this: technical, institutional, and social/organizational interoperability are distinct surfaces, each requiring its own governance attention.
- **Federated scaling as political project**: Krancj et al. reframe "scaling" itself — scaling-up (monoculture replication) and scaling-out (best-practice export) are both contrasted with federated scaling, "a process of integrating heterogeneous forms of collective action into a framework that allows them to collaborate while acknowledging their interrelations and differences, and to formally account for them through shared expressions of value and structures of mutual stake-holding." This is not a technical property; it is a political-economic stance.

Spore's mycorrhizal-federation-protocol canon currently emphasizes the technical-and-coordination layer. The wiki prior art warrants explicit acknowledgment of the institutional and political-project layers as companion disciplines.

## 2. The Signal / Moxie trade-off Spore must carry

The Cross-Platform Federation page records a concrete engineering argument that Spore's federation canon cannot ignore: "once you federate your protocol, it becomes very difficult to make changes. And right now, at the application level, things that stand still don't fare very well in a world where the ecosystem is moving." Signal opted out of federation for this reason. The Fediverse page shows the other side: thirty platforms interoperating via ActivityPub, proving cross-codebase federation is feasible at scale — but achieved through a W3C standardization process over years, not overnight.

The trade-off is real and structural: federation slows protocol evolution in exchange for cross-implementation agency. Spore canon adopting federation vocabulary should name this trade-off explicitly rather than treating federation as uniformly better than non-federated alternatives. This is a discipline analogous to the Jessop typology discipline imported in the `protocol-society` note — per-modality failure signatures are first-order concerns.

## 3. The institutional-interoperability principle (Wilbanks/Rossini/Chan)

Wilbanks and Rossini's "interoperability principle" is the central governance claim in the wiki's knowledge-interoperability lineage: interoperability must not be confined to technology. It must inform decisions across policy, intellectual property, institutional arrangements, and infrastructure design. "Interoperability as a design principle represents 'good taste' in knowledge governance, as it both empowers those with the current capacity to participate in innovation and those who have not yet acquired that capacity."

The cautionary example they give is HapMap: a license designed to enforce patent openness that "blocked database integration as a side-effect," violating separation-of-concerns and producing "a non-interoperable governance reality in data." This is the class of failure mode Spore and IC must watch for: governance moves in one layer (rights, IP, access rules) producing unintended non-interoperability at a different layer (data, discovery, composition).

Chan's reading of Benkler adds a third surface: *social/organizational* interoperability beyond technical and institutional. OA and OER movements were technically and institutionally compatible but socially separate because of institutional separation (teaching vs. research rewards), slowing convergence for years. The class of risk: stacks that are technically federated and institutionally licensed but socially siloed still fail to interoperate in practice.

## 4. Federated scaling vs. scaling-up / scaling-out

Krancj et al. position federated scaling against two mainstream scaling models: "scaling up one central approach" (UN-mandated global initiative) and "scaling out one 'best practice' approach" (coalition-of-nation-states, tech-company cultural export). Federated scaling is neither — it integrates heterogeneous collective action "through shared expressions of value and structures of mutual stake-holding" while acknowledging interrelations and differences. Crucially, the authors frame this as "counter-hegemonic prefigurative politics," not merely as an architectural pattern.

This reframes the "federation" claim upward: federation is not only how systems compose technically, it is also a stance on how change happens politically. Spore's federation canon, which sits close to this stance, should state it explicitly rather than letting audiences read in the dominant scaling-up or scaling-out framings under shared "federation" language.

Deborah Frieze's adjacent framing ("scaling across"), from the corroborating `Scaling Up vs. Scaling Across` page, supplies a complementary discipline: "Scaling across happens when people create something locally and inspire others who carry the idea home and develop it in their own unique way." This is explicitly contrasted with scaling-up as monoculture. Together with Krancj et al., the wiki supplies Spore with a vocabulary for the political stance its federation protocol embodies.

## 5. Boundary spanners as a protocol role (category anchor)

The `Category:P2P_Infrastructure` anchor page functions as the corpus-level index for this cluster, gathering federation, mesh-networking, P2P social web, P2P storage, and distributed internet projects under a single frame. Its introductory citations (Benkler, Lovink, Bauwens) establish the corpus-level stance: infrastructure is itself a site of power contestation, and the federation-and-interoperability projects it catalogs are political responses to "reconcentrated power" in the Internet substrate. Specific projects catalogued (Plexus: "a protocol for the social web, 'plumbing' that allows all social web components to communicate"; Ceptr/Holochain; NextGraph) are instances of the boundary-spanner role Spore canon already carries — agents whose function is to mediate between otherwise-separate systems, translating across boundary conditions.

Treating boundary-spanner as a protocol role (not only an agent role) is a canon-level clarification the cluster supports: Plexus and ActivityPub operate as protocol-level boundary spanners, not as agent-level ones. Spore's mycelial-holarchy architecture can import this without contradiction — a role can be held by a protocol, a contract, an agent, or a composition of these.

## 6. "Interoperable Civilizations" and subsidiarity caution

Polis Labs's contextual framing — "The future belongs to Interoperable Civilizations, i.e., to federations of communities that are sovereign in character but unified in principle. Subsidiarity offers not just a method of governance but a philosophy of freedom, responsibility, and dignity" — is the maximalist form of the federation claim in the wiki corpus. It extends federation from platforms and institutions to civilizations.

This framing is structurally aspirational, and Spore canon should carry it with care: "sovereign in character but unified in principle" is an elegant compression but elides the operational discipline (monitoring, sanctioning, conflict-resolution, adaptive rules) that Ostrom-style commons governance requires per `boundary-commoning.md` C3–C4. Treating subsidiarity as sufficient for federation risks the same soft-governance failure mode that the boundary-commoning note warns against.

## 7. Tensions (cautions for any Spore / IC / PM canon edit)

1. **Technical-only framing risk**: treating federation as a purely technical property (ActivityPub-shaped) understates the institutional- and political-project layers the wiki tradition carries. Spore canon imported as "federation protocol" without the Wilbanks/Rossini institutional-interoperability layer and the Krancj et al. political-project layer will read as thin against the prior art.
2. **Rigidity trade-off risk**: federation slows protocol evolution (Signal / Moxie). Spore federation canon must name this trade-off explicitly rather than treating federation as uniformly dominant.
3. **Layered-failure risk (HapMap pattern)**: governance moves at one interoperability layer can produce non-interoperability at a different layer. Spore, IC, and PM all need explicit separation-of-concerns discipline across the three layers.
4. **Social/organizational siloing under technical federation**: OA/OER-style stacks can be technically federated and institutionally licensed but still socially siloed. IC's memory-layers and PM's coordination-substrate surfaces need explicit attention to social/organizational interoperability, not only technical and institutional.
5. **Aspirational subsidiarity risk**: maximalist "Interoperable Civilizations" framings elide operational governance. Spore canon should state the operational surface explicitly (cf. boundary-commoning R2).

## 8. Disposition

**Disposition: clarify existing term.** The wiki evidence warrants clarifying Spore's mycorrhizal-federation-protocol canon as a three-layer claim (technical / institutional / political-project), with named failure modes per layer and explicit stance on the Signal/Moxie trade-off. It warrants IC importing the Wilbanks/Rossini/Chan institutional-interoperability principle as a first-class memory-layers concern. It warrants PM acknowledging federated-scaling-as-political-project as the cousin framing closest to its coordination-substrate stance. None of these require new canon primitives, consistent with the Move 0 moratorium and with the boundary-commoning / protocol-society Tier 1b dispositions.

## 9. Claim Register

**C1** [confidence: high] [anchor: §Discussion · orn:p2p-wiki.page:Cross-Platform_Federation_of_Internet_Infrastructures]
Cross-platform federation enables individuals to communicate across services "without subscribing to the same service or relying on the same codebase (and thus, the same developers)" — it is a coordination claim about user agency and codebase independence, not only a technical protocol claim, and names switching-cost reduction as the first-order user benefit.

**C2** [confidence: high] [anchor: §Discussion · orn:p2p-wiki.page:Cross-Platform_Federation_of_Internet_Infrastructures]
Federation carries a structural engineering trade-off named explicitly by Signal's Moxie Marlinspike: "once you federate your protocol, it becomes very difficult to make changes" — federation slows protocol evolution in exchange for cross-implementation agency, and this trade-off is a first-order canon concern rather than an implementation edge case.

**C3** [confidence: high] [anchor: §Discussion · orn:p2p-wiki.page:Social_and_Institutional_Interoperability]
Interoperability is a multi-layered concern spanning technical, institutional, and social/organizational surfaces (Chan reading Benkler) — "the institutional framework we use to manage the stock of existing information and knowledge around the world can have significant impact on human development" — and any claim of "interoperable" systems must specify which layers are in scope.

**C4** [confidence: high] [anchor: §Discussion · orn:p2p-wiki.page:Social_and_Institutional_Interoperability]
Social/organizational interoperability is distinct from technical and institutional interoperability and can fail independently: the OA and OER movements were technically compatible and institutionally licensed but remained socially siloed for years because of institutional separation (teaching vs. research rewards), producing duplicated effort and knowledge held in inaccessible silos.

**C5** [confidence: high] [anchor: §Excerpts · orn:p2p-wiki.page:Policies_to_Promote_Public_Knowledge_Goods_and_Knowledge_Commons]
Wilbanks and Rossini frame interoperability as a *design principle* that must extend beyond technology to policy, intellectual property, and institutional arrangements: "interoperability as a design principle represents 'good taste' in knowledge governance, as it both empowers those with the current capacity to participate in innovation and those who have not yet acquired that capacity."

**C6** [confidence: high] [anchor: §Conclusion · orn:p2p-wiki.page:Policies_to_Promote_Public_Knowledge_Goods_and_Knowledge_Commons]
Governance moves at one interoperability layer can produce non-interoperability at another: the HapMap license attempted to enforce patent openness but "blocked database integration as a side-effect," resulting in "a non-interoperable governance reality in data" — establishing that separation-of-concerns discipline across interoperability layers is a first-order governance concern, not an architectural nicety.

**C7** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Federated_Scaling]
Krancj et al. position federated scaling in explicit contrast to scaling-up (UN-style global central approach) and scaling-out (coalition-of-nation-states best-practice export), defining it as "a process of integrating heterogeneous forms of collective action into a framework that allows them to collaborate while acknowledging their interrelations and differences, and to formally account for them through shared expressions of value and structures of mutual stake-holding."

**C8** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Federated_Scaling]
Federated scaling is framed as a political-economic project — "counter-hegemonic prefigurative politics" — not only an architectural pattern, making federation a stance on political change mechanisms alongside its role as a coordination pattern; the framing supplies Spore with vocabulary for the political commitments its federation protocol embodies but does not explicitly name.

**C9** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Fediverse]
The Fediverse demonstrates that cross-codebase federation is operationally feasible at scale via shared open-standard protocols (ActivityPub, DFRN, Diaspora Network, OStatus, Zot) — ~30 interoperating platforms, ~4K instances, ~2.4M identities (2018 data) — but the convergence was achieved through a multi-year W3C standardization process (ActivityPub standardized January 2016), not emergent coordination, naming standards-body time-scales as a component of federation-feasibility claims.

**C10** [confidence: medium] [anchor: §Discussion · orn:p2p-wiki.page:Interoperability_of_Knowledge]
Wilbanks and Rossini's "interoperability of knowledge" claim scales interoperability from technology to knowledge itself: "it is not only computer networks that must interoperate, but intellectual property rights and semantic understanding, so that distributed peer production of knowledge can make the leap from an encyclopedia into the sciences and other research disciplines" — establishing IP rights and semantic understanding as co-equal interoperability surfaces with technical protocols.

**C11** [confidence: medium] [anchor: §Contextual Quote · orn:p2p-wiki.page:Interoperable_Civilizations]
Polis Labs (Suzanne) frames interoperable civilizations as "federations of communities that are sovereign in character but unified in principle," with subsidiarity as "a philosophy of freedom, responsibility, and dignity" — the maximalist form of the federation claim in the wiki corpus, aspirational in cast and load-bearing on subsidiarity as a sufficient governance discipline, which Ostrom-commons literature (per boundary-commoning.md C3–C4) treats as insufficient without explicit monitoring/sanctioning/conflict-resolution.

**C12** [confidence: medium] [anchor: §Discussion · orn:p2p-wiki.page:Protocol_Commons]
Jose Ramos's protocol-commons framing uses the bee-and-flower metaphor to capture asymmetric-but-reciprocal federation: "they do not fundamentally know how each other think, but there is a form of signaling that allows each to find a synergy with the other and reciprocate the value" — supplying a biological analogy for federation across ontologically-heterogeneous commons that is complementary to the technical-protocol framing and closer to Spore's mycorrhizal-federation-protocol stance than to the OSI-layered framing dominant in the broader P2P Infrastructure corpus.

**C13** [confidence: medium] [anchor: §Introductory Citations · orn:p2p-wiki.page:Category:P2P_Infrastructure]
The Category:P2P_Infrastructure corpus-level framing treats infrastructure as a site of political contestation (Benkler, Lovink, Bauwens) rather than as neutral technical substrate — "we must continuously diagnose control points as they emerge and devise mechanisms of recreating diversity of constraint and degrees of freedom in the network to work around these forms of reconcentrated power" — establishing that federation-and-interoperability projects in the corpus are cataloged as political responses, not only as engineering patterns.

**C14** [confidence: medium] [anchor: §Bridging Protocols · orn:p2p-wiki.page:Federated_Social_Web]
The polyglot approach to federation — recognizing "xmpp, all the layers of the OStatus stack, but also email, and web linking as protocols ('languages') that can at one point or another help one application understand the information that another application (on another server) is exposing" (Michel De Jong) — names a multi-protocol federation discipline distinct from single-protocol standardization, relevant to instance-model designs where heterogeneous instances may need to federate without forcing a single protocol choice.

## 10. Review Claims

**R1** [review claim] [target: spore.mycorrhizal-federation-protocol] [concept: interoperability-as-institutional]
The mycorrhizal-federation-protocol canon should explicitly adopt the three-layer interoperability model from the wiki tradition: (a) technical protocol interoperability (Fediverse/ActivityPub pattern), (b) institutional/rights interoperability (Wilbanks/Rossini design-principle pattern), and (c) federated-scaling-as-political-project (Krancj et al. counter-hegemonic-prefigurative pattern). Each layer has its own failure modes: technical-only framing understates the surface area; rights-layer moves can produce data-layer non-interoperability (HapMap); political-stance ambiguity lets audiences read in scaling-up or scaling-out framings under shared "federation" language. The canon should also explicitly name the Signal/Moxie trade-off — federation slows protocol evolution in exchange for cross-implementation agency — rather than treating federation as uniformly dominant.
*R1 is supported by C1, C2, C3, C5, C6, C7, C8.*

**R2** [review claim] [target: spore.instance-model] [concept: coordination-substrate]
The instance-model should import the polyglot-federation discipline from the Federated Social Web tradition and the boundary-spanner-as-protocol-role framing from the Category:P2P_Infrastructure corpus: instances may need to federate across heterogeneous protocols (not only ActivityPub-shaped), and the boundary-spanner role can be held by a protocol, contract, agent, or composition — not only by an agent. Concrete: (a) name "polyglot instance" as a supported topology where a single instance speaks multiple federation protocols; (b) state that boundary-spanner is a role-type that can be realized at protocol, contract, or agent layer; (c) adopt the Ramos bee-and-flower asymmetric-reciprocal framing as the cousin-concept for federation across ontologically-heterogeneous instances, complementing the OSI-layered framing that dominates the broader P2P Infrastructure corpus.
*R2 is supported by C12, C13, C14.*

**R3** [review claim] [target: ic.memory-layers] [concept: knowledge-commons]
IC's memory-layers framing should import the Wilbanks/Rossini/Chan interoperability-as-institutional principle as a first-class concern alongside retrieval primitives: (a) interoperability is a design principle spanning technical, institutional, and social/organizational layers, not a technical property; (b) separation-of-concerns across those layers is load-bearing (HapMap pattern shows rights-layer moves can produce data-layer non-interoperability); (c) technical federation + institutional licensing does not imply social/organizational interoperability (OA/OER pattern). Concrete: memory-layers canon should name each interoperability layer explicitly, specify which invariants apply per layer, and name the social/organizational-interoperability surface (governance of contributor communities, reward alignment across institutional boundaries) as an explicit safeguard rather than a cultural assumption.
*R3 is supported by C3, C4, C5, C6, C10.*

**R4** [review claim] [target: spore.term.stigmergy] [concept: boundary-spanner]
Spore's lexicon entry for stigmergy should acknowledge the federation-protocol-as-stigmergic-substrate reading suggested by the Fediverse and Ramos protocol-commons sources: federation protocols (ActivityPub, polyglot stacks) function stigmergically — actors coordinate by modifying a shared medium (the protocol-level message substrate) rather than through direct communication, and the bee-and-flower asymmetric-reciprocal framing supplies a biological analogy for this that is recognizable to commons-and-ecology audiences. The lexicon entry should state explicitly that stigmergy in Spore's coordination grammar operates across three distinct substrates (technical protocol, institutional rights/semantics, social/organizational practice) consistent with the three-layer interoperability model, so that stigmergic coordination is not read as a technical-only claim.
*R4 is supported by C9, C12, C14.*

## 11. Attribution

Wiki sources cited in this note are from the P2P Foundation wiki (https://wiki.p2pfoundation.net), licensed CC BY-SA 4.0. 100% of this note's source claims (14/14) anchor to wiki pages via the `orn:p2p-wiki.page:*` RID convention; this note is derived-claims dominant and is published under CC BY-SA 4.0. Derivative claims in this note inherit ShareAlike obligations for downstream use. See `docs/research/connections/LICENSE-WIKI-DERIVED.md` for the repo-level notice.

Primary anchors: Cross-Platform Federation of Internet Infrastructures (2 claims), Social and Institutional Interoperability (2 claims), Policies to Promote Public Knowledge Goods and Knowledge Commons (2 claims), Federated Scaling (2 claims), Fediverse (1 claim). Corroborating anchors: Interoperability of Knowledge (1 claim), Interoperable Civilizations (1 claim), Protocol Commons (1 claim), Federated Social Web (1 claim). Category anchor: Category:P2P_Infrastructure (1 claim, cluster corpus-level).

The `Federation` page on the local mirror (2026-04-15) is a single-line redirect to `Cross-Platform Federation of Internet Infrastructures` and carries no independent content; it is logged as a dead anchor in `sources:` above and no C-claim anchors to it. Corroborating content for the generic "Federation" term semantics is carried by the Cross-Platform Federation, Fediverse, and Federated Social Web anchors.
