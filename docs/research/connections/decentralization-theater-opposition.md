---
doc_id: spore.connection.decentralization-theater-opposition
doc_kind: research
status: draft
research_subkind: bridge_note
disposition: no change
# stance-intent: opposes; script encodes via disposition=no-change per project_bridge_notes.py line 591
depends_on: []
relates_to:
  - spore.connection.p2p-wiki-post-intake-synthesis
  - spore.connection.what-the-commons-is-missing-opposition
  - spore.mycorrhizal-federation-protocol
concepts:
  - decentralization-theater
  - power-capture
  - boundary-commoning
  - protocol-society
  - value-capture
  - interoperability-as-institutional
sources:
  - url: https://wiki.p2pfoundation.net/Decentralization_Theater
    title: Decentralization Theater
    rid: orn:p2p-wiki.page:Decentralization_Theater
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Limitations_of_Blockchain_and_DAOs_for_Complex_Economic_Processes
    title: Limitations of Blockchain and DAOs for Complex Economic Processes
    rid: orn:p2p-wiki.page:Limitations_of_Blockchain_and_DAOs_for_Complex_Economic_Processes
    type: primary
    license: CC BY-SA 4.0
  - path: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md
    title: P2P Foundation Wiki — Pass 1 Post-Intake Synthesis
    type: seed
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-synthesis-2026-04-17.md
    title: P2P Foundation Wiki — Phase A Pass 2 Synthesis (2026-04-17)
    type: seed
---

# Decentralization Theater — Opposition

This Pass 2 Phase B Tier 1 opposition note registers a cross-three-project declination against Spore, Intelligence Commons (IC), and Poietic Match (PM) canon use of "peer-to-peer," "decentralized," and "federation" vocabulary. Curtis Yarvin's *Decentralization Theater* (Urbit blog, cited in the P2P Foundation wiki) names the failure mode: "any system that produces not decentralization, but the appearance of decentralization." Tiberius Brastaviceanu's 2025 Sensorica essay (*Beyond the Ledger: Why Blockchain and DAOs Fall Short for Complex Economic Organizations*) extends the critique operationally — blockchain-based coordination systems and DAOs, as actually built, lack the agency, adaptivity, production-grammar, and context-sensitivity needed to decentralize real economic coordination, regardless of their stated topology. The disposition is *no change* on all three target canons: no new primitive is proposed. What is proposed is an active opposition edge against any absorption of commons- or P2P-adjacent vocabulary into Spore/IC/PM canon that does not concurrently specify the mechanism by which power (not just topology) is decentralized — admin-key policy, protocol-governance structure, operational-infrastructure dependency, and the question Schmitt names: who decides the exception.

The cluster's central thesis: decentralized network topology MUST NOT be claimed as decentralized governance without concurrent specification of how exceptional (sovereign) authority is limited, distributed, or surfaced. Absent that specification, the canon drifts into what Yarvin names theater — vocabulary that produces the appearance of decentralization while retaining centralized control points (admin keys, protocol-governance capture, operational dependencies on centralized infrastructure such as cloud providers, registries, and bridge services). This note is the second of three in the *decentralization-myth bundle* (Seed 2 of Pass 2 Phase B): together with `spore.connection.wikipedia-administrator-capture-opposition` (Seed 1, Wave 2) and `spore.connection.digital-labor-peer-production-opposition` (Seed 3, Wave 1), it forms a cross-cutting opposition discipline that supporting bridge notes in Wave 2/3 should reference by header when invoking P2P or decentralization language.

## 1. Yarvin's "decentralization theater" framing

Yarvin's post-*The DAO*-hack essay (Urbit blog, 2016, mirrored on the P2P Foundation wiki's `Decentralization Theater` page) defines the term directly: *"Decentralization theater means any system that produces not decentralization, but the appearance of decentralization. Security theater is the enemy of real security; decentralization theater is the enemy of real decentralization."* The analogy with Bruce Schneier's *security theater* is load-bearing. Security theater is not merely incompetent security; it is *active substitution* of performative gestures (airport liquid screening, shoe removal) for operationally grounded protection. Decentralization theater operates the same way: the performative gesture (miners, nodes, peer-to-peer topology, blockchain branding) actively substitutes for — and in some cases actively impedes — operational decentralization of power.

Yarvin's three structural claims (from §Every network is a state, §Decentralization and legitimacy, §Sovereignty is conserved) are load-bearing for Spore/IC/PM:

- *Every network is a state with a government.* A blockchain is a parliament (Yarvin citing Steve Randy Waldman): the majority of miners in a PoW chain, or stakeholders under PoS, "have the mathematical power to govern the network absolutely." This is not a theoretical possibility; it is the system's operational ground.
- *Sovereignty is conserved.* Schmitt's definition — "the sovereign is who decides the exception" — means that every system has some point at which exception-handling power is located. Eliminating that point is impossible; the best a system can do is tame it. A system that *denies* having a sovereign has one anyway, typically concealed.
- *Decentralization is a political problem, not just a technical one.* "True decentralization isn't just a technical problem. It's also a political problem, and not an easy one. Believing you've solved it, before actually solving it, is not a way to solve it."

For the Spore/IC/PM canons, the operational question Yarvin forces is: where in your architecture is the *exception-deciding* point, and what limits its discretion? If the answer is "there is no such point, we are decentralized," the system is in theater — the exception-deciding power exists but has been concealed, typically accruing to admin-key holders, core developers, foundation trustees, or infrastructure operators.

## 2. Brastaviceanu's operational extension (Sensorica 2025)

The Sensorica essay on the P2P Foundation wiki (`Limitations of Blockchain and DAOs for Complex Economic Processes`, Brastaviceanu 2025) extends Yarvin's political critique to an operational-mechanism critique. Brastaviceanu's argument has three layers:

**Smart contracts are finite state machines.** "While they enable conditional logic and self-enforcing agreements, they suffer from key constraints: Lack of agency... Smart contracts cannot initiate actions; they passively await external transactions. No adaptivity... They cannot learn or evolve in response to new contexts. Low expressiveness... They model narrow rule-based interactions but cannot handle rich workflows, commitments, or evolving plans. High operational cost... Every interaction incurs gas fees, limiting granularity and frequency of updates." Coordination grammars that claim decentralized-execution-via-smart-contracts inherit these four limits: the grammar cannot drive coordination; it can only be invoked by external actors; those invocation points are themselves centralizable.

**DAOs lack production grammar.** "DAOs were designed to manage funds and collective decisions. While conceptually intriguing, most DAOs reduce governance to token-weighted voting and budget allocation... DAOs lack: A production grammar... Contextual roles and coordination: All agents are flattened to token holders; there is no representation of task-specific expertise or social embeddedness. Traceability of contributions: There is no natively supported way to account for who contributed what, how, and with what impact. In essence, DAOs are governance shells with limited economic depth. They serve as digital cooperatives but do not embody operational infrastructures for economic activity." Any claim that a PM-style coordination grammar, an IC knowledge-commons attribution system, or a Spore federation protocol operates as a DAO-analog inherits this critique: the surface that *governs token/role/vote allocation* is not the surface that *produces, coordinates, or attributes* economic or knowledge activity.

**Global-state consensus is inappropriate for context-sensitive coordination.** "Blockchain relies on a globally shared ledger, secured by consensus. This introduces: Scalability issues... Privacy limits... Poor fit for diverse local contexts: Global rules enforced via consensus do not adapt well to context-sensitive collaboration... blockchain-based architectures are grounded in a low-level computational model (deterministic, transactional, state-machine driven) that is ill-suited for expressing complex, adaptive, multi-agent economic systems." For PM bioregional coordination and Spore federation, the global-state assumption directly contradicts the subsidiarity/local-context principle both projects invoke: a system cannot simultaneously claim bioregional-scale subsidiarity AND global-state consensus enforcement as its coordination substrate without inheriting Brastaviceanu's mismatch.

## 3. Failure mechanisms the opposition names specifically

Combining Yarvin and Brastaviceanu, the opposition register names five specific mechanisms by which "decentralized" claims can be nominal/performative while retaining centralized control:

1. **Admin-key retention.** Multi-sig, upgradeable contracts, emergency pause functions, governance tokens held by a founding team, or off-chain admin keys held by foundation/registry operators concentrate exception-deciding power in a small set of addresses that the protocol's decentralization language does not surface.
2. **Protocol-governance capture.** "Foundations," "core teams," and "working groups" accrue disproportionate influence over protocol upgrades and rollbacks because the formal voting mechanism (proof-of-work/stake) is not tied to any deliberative institution (Yarvin §Constitutional structure: "misalignment between a fundamental power, like the miners, and a group purporting to represent them, like the foundations, is inherently dangerous").
3. **Operational-infrastructure dependency.** Nominally-decentralized protocols depend on centralized cloud providers (AWS, GCP, Cloudflare), RPC gateways (Infura, Alchemy), domain name registries (ICANN/DNS), package registries (npm, PyPI), and certificate authorities. A federation protocol that routes through any of these inherits their centralized control as a power-capture surface.
4. **Exception-handling as precedent.** Ethereum's DAO rollback (Yarvin §Illegitimacy and belligerency, §Ethereum's dilemma) shows that once exception-handling power has been exercised once, it becomes available as precedent: "if a rollback happens once, we can expect it to happen again... This is the path to a 'digital banana republic,' where the tattered illusion of law barely conceals the real law of nature." Federation protocols that retain *any* exception-handling power inherit this precedent risk.
5. **Production-grammar substitution.** Brastaviceanu's DAO critique: governance vocabulary ("tokens," "votes," "proposals") substitutes for production vocabulary ("roles," "commitments," "workflows," "attribution"). Coordination grammars that carry the former without the latter claim to coordinate production while actually only coordinating governance over a treasury.

## 4. Position against Spore, IC, and PM canon

The opposition cluster names four target-canon declinations:

- **Spore**: `spore.mycorrhizal-federation-protocol` invokes federation/P2P/mycorrhizal-network vocabulary. Without an explicit statement of (a) how exception-deciding sovereignty is limited or distributed across federation nodes, (b) what the federation's exposure is to centralized-infrastructure dependencies (cloud, registry, DNS, bridge services), and (c) whether the federation protocol holds any admin-key equivalent (multi-sig membership, protocol-upgrade authority), Spore canon is exposed to the theater-failure mode. Opposition edge remains active until the protocol doc independently carries this operational surface.
- **Spore**: `spore.protocol-society` frames governance as protocol design. Protocol-level claims are governance-level claims when the protocol retains exception-deciding power; the canon MUST NOT treat the protocol/governance distinction as relieving the project of the Yarvin-Schmitt question ("who decides the exception"). Opposition edge remains active until the canon explicitly names where exception-deciding power sits in a protocol society and how its discretion is limited.
- **IC**: `ic.intelligence-primitives` (and adjacent memory-layers / attribution / memory-governance surfaces) invokes "peer-to-peer" memory and attribution language. Brastaviceanu's DAO critique applies: attribution primitives without specified contextual roles, contribution traceability semantics, and a production/workflow grammar inherit the "governance shell, no production grammar" failure mode at the knowledge-commons layer rather than the financial layer. Opposition edge remains active until IC primitives independently carry a production/contribution-traceability surface distinct from the attribution-ledger surface.
- **PM**: `pm.protocol` (and adjacent matching/routing/pooling surfaces) invokes "decentralized" matching vocabulary. A decentralized matching substrate that depends on (a) a single registry/directory, (b) a single embedding-provider or semantic-matching service, (c) a single settlement/clearing infrastructure, or (d) a central bootstrap/relay is *nominally* decentralized at the match-semantics layer while *operationally* centralized at the infrastructure layer. Opposition edge remains active until PM protocol docs independently state the decentralization mechanism at infrastructure layer, not only match-semantics layer.
- **PM (optional)**: `pm.connection.bioregional-coordination` invokes bioregional scope against political-administrative scope. Bioregional decentralization of governance is distinct from nominal-topology decentralization; the canon must state which form it claims and by what operational mechanism.

## 5. Phase B discipline

This bridge note is part of the cross-cutting decentralization-myth bundle (Seeds 1, 2, 3 of Pass 2 Phase B). The Phase B discipline this note enforces on all subsequent supporting bridge notes in Pass 2 and beyond:

**Any Spore/IC/PM canon statement using "decentralized," "peer-to-peer," "federation," "mycorrhizal," or "distributed" MUST either (a) explicitly decline the theater trap by naming the specific power-distribution mechanism (admin-key policy, protocol-governance structure, infrastructure-dependency posture, exception-handling limits, production-grammar carriage), or (b) accept that the opposition edge from this note remains active against the canon surface that makes the claim.**

Supporting bridge notes in Wave 2/3 that invoke decentralization/P2P language without carrying this surface MUST reference this note by header (`see spore.connection.decentralization-theater-opposition`) and name which R-claim remains active against the target canon surface. This is the same pattern the `what-the-commons-is-missing-opposition` note established for the Dietz/Wood/Brenner/Conaty-Lewis critiques; the decentralization-myth bundle extends the pattern to cover the P2P and federation vocabulary surface.

## 6. Why disposition is no change

Disposition `no change` here encodes active opposition, not deferral. Absorbing Yarvin/Brastaviceanu as positive canon primitives — "Spore now clarifies its power-distribution mechanism as..." — would collapse into the theater pattern this note names: adding vocabulary about decentralization without concurrently changing the operational surface. The critique demands the operational surface (who decides the exception, what the infrastructure dependencies are, what the admin-key policy is, whether the grammar carries production-not-just-governance), not another layer of decentralization vocabulary. The script encodes this stance: `disposition=no-change → opposes edge`, per `project_bridge_notes.py:591`.

## 7. Tensions (cautions for any reader)

1. **Theater-vs-development conflation risk.** Early-stage coordination systems often carry admin keys and centralized infrastructure as *development-phase* necessities, intending to hand them off. Yarvin anticipates this (§Ethereum's dilemma: "Having a central government isn't inconsistent with the ultimate objective of eliminating central government"). This opposition note does not require projects to eliminate centralized control points immediately; it requires them to *name* the control points and the hand-off mechanism, rather than speak as if the control points do not exist.
2. **Cross-three-projects coordination risk.** This note registers opposition edges to Spore, IC, and PM canons. A canon shift in any one project that clears its specific R-claim does not automatically retire the opposition in the other two — each project must independently carry the power-distribution-mechanism surface for its specific R-claim to be retired.
3. **Yarvin-source risk.** Curtis Yarvin's broader political writing is politically contentious. This note cites only the specific technical analysis in the cited essay (decentralization theater, sovereignty-is-conserved, blockchain-is-a-parliament). The technical claims hold independent of the broader political framing; the Sensorica 2025 source (Brastaviceanu) independently carries the operational-mechanism critique.
4. **Self-application risk.** This opposition note itself uses vocabulary (P2P, federation, decentralization) that it argues must be disciplined elsewhere. Readers should note: the note does not propose operational specifications for Spore/IC/PM; it names the missing surface that must be added by the canon stewards. No new canon vocabulary is generated by accepting these R-claims.

## 8. Disposition

**Disposition: no change.** The wiki evidence warrants explicit opposition edges against `spore.mycorrhizal-federation-protocol`, `spore.protocol-society`, `ic.intelligence-primitives`, and `pm.protocol` on the nominal-vs-operational-decentralization failure mode. No canon primitives, aliases, or clarifications are added. The script encodes the opposition stance via `disposition=no-change` per `project_bridge_notes.py:591`. The opposition may shift per-target-canon when and if each target independently carries the operational power-distribution surface (admin-key policy, protocol-governance structure, infrastructure-dependency posture, exception-handling limits, production-grammar carriage) in its own text.

## 9. Claim Register

**C1** [confidence: high] [anchor: §Decentralization theater considered harmful · orn:p2p-wiki.page:Decentralization_Theater]
Curtis Yarvin's primary definition — "Decentralization theater means any system that produces not decentralization, but the appearance of decentralization. Security theater is the enemy of real security; decentralization theater is the enemy of real decentralization" — establishes theater as an active-substitution pattern (not merely incompetent decentralization): the performative gesture impedes the operational change. This makes the distinction between nominal topological decentralization and operational power-decentralization load-bearing for any coordination grammar that invokes decentralization vocabulary.

**C2** [confidence: high] [anchor: §Sovereignty is conserved · orn:p2p-wiki.page:Decentralization_Theater]
Yarvin's Schmitt citation — "the sovereign is who decides the exception" — rephrased as "sovereignty is conserved," establishes that every coordination system has some point at which exception-handling (sovereign) authority sits; the point cannot be eliminated but can be tamed. Systems that deny having such a point have one anyway, typically concealed. For Spore/IC/PM, the operational question the claim forces is: where is the exception-deciding point in your architecture, and what limits its discretion? Silence is not neutral — it means the point is concealed, not absent.

**C3** [confidence: high] [anchor: §Every network is a state · orn:p2p-wiki.page:Decentralization_Theater]
Yarvin's blockchain-is-a-parliament claim (citing Steve Randy Waldman) — "a majority of miners in a proof-of-work blockchain, or stakeholders under proof of stake, have the mathematical power to govern the network absolutely" — rebuts the framing of decentralized consensus mechanisms as inherently governance-limiting. The mathematical power is always present; whether it is exercised depends on political-institutional limits external to the consensus mechanism. Coordination grammars that claim decentralization through consensus inherit this underspecification.

**C4** [confidence: high] [anchor: §Constitutional structure · orn:p2p-wiki.page:Decentralization_Theater]
Yarvin's deliberative-institution gap — "blockchain governance would be considerably improved if the miners actually had a formal way to delegate their power to a structured institution that represented them. Both Bitcoin and Ethereum have foundations and/or core teams, but authority in these institutions isn't tied in any way to actual mining power. Informal politics fills this void with personality cults and eloquent blogposts" — establishes that in the absence of formal delegation structures, *informal* power accrues to foundations, core teams, and articulate commentators. This is the canonical protocol-governance capture mechanism; decentralized-topology claims that do not specify formal delegation structures inherit it.

**C5** [confidence: high] [anchor: §Smart Contracts: Deterministic, Rigid, and Passive · orn:p2p-wiki.page:Limitations_of_Blockchain_and_DAOs_for_Complex_Economic_Processes]
Brastaviceanu (Sensorica 2025) names the operational failure of smart-contract-based coordination: "Smart contracts are finite state machines... Lack of agency: Smart contracts cannot initiate actions; they passively await external transactions. No adaptivity: They cannot learn or evolve in response to new contexts. Low expressiveness: They model narrow rule-based interactions but cannot handle rich workflows, commitments, or evolving plans." Coordination grammars claiming decentralized-execution-via-smart-contract inherit these four limits, and the external-invocation points themselves become centralization-vulnerable surfaces that the "decentralized" framing does not surface.

**C6** [confidence: high] [anchor: §DAOs Are Only a Good Model for Governance Without Production · orn:p2p-wiki.page:Limitations_of_Blockchain_and_DAOs_for_Complex_Economic_Processes]
Brastaviceanu's DAO-production-grammar critique — "DAOs were designed to manage funds and collective decisions... DAOs lack: A production grammar... Contextual roles and coordination: All agents are flattened to token holders; there is no representation of task-specific expertise or social embeddedness. Traceability of contributions: There is no natively supported way to account for who contributed what, how, and with what impact. In essence, DAOs are governance shells with limited economic depth" — establishes that DAO-analog coordination substrates (including knowledge-commons attribution ledgers and coordination-matching protocols) that import the DAO pattern without concurrently importing a production/contextual-role/traceability surface reproduce the governance-shell failure at a new layer.

**C7** [confidence: high] [anchor: §The Blockchain Architecture's Global State · orn:p2p-wiki.page:Limitations_of_Blockchain_and_DAOs_for_Complex_Economic_Processes]
Brastaviceanu's global-state-consensus critique — "Blockchain relies on a globally shared ledger, secured by consensus. This introduces: Scalability issues... Privacy limits... Poor fit for diverse local contexts: Global rules enforced via consensus do not adapt well to context-sensitive collaboration... blockchain-based architectures are grounded in a low-level computational model (deterministic, transactional, state-machine driven) that is ill-suited for expressing complex, adaptive, multi-agent economic systems" — directly contradicts the subsidiarity/local-context principle invoked by bioregional-coordination and mycorrhizal-federation framings. A coordination substrate cannot simultaneously claim subsidiarity AND global-state consensus enforcement without inheriting the mismatch; naming one mechanism obscures the other.

## 10. Review Claims

**R1** [review claim] [target: spore.mycorrhizal-federation-protocol] [concept: decentralization-theater]
Spore canon MUST NOT allow mycorrhizal-federation-protocol language to assert federation, P2P, or decentralized-network framing without concurrent specification of (a) where exception-deciding sovereignty sits in the federation and what limits its discretion (per the Yarvin-Schmitt "who decides the exception" test), (b) the federation's posture toward centralized-infrastructure dependencies (cloud providers, registries, DNS, bridge services, relay servers), and (c) whether the federation protocol retains any admin-key-equivalent (multi-sig membership control, protocol-upgrade authority, emergency-pause capability). Silent invocation of federation/mycorrhizal/P2P vocabulary without this surface reproduces the decentralization-theater failure mode per C1–C4. Spore MUST NOT absorb commons- or P2P-adjacent language into mycorrhizal-federation-protocol under these conditions; the opposition edge remains active against spore.mycorrhizal-federation-protocol until the protocol doc independently carries the power-distribution-mechanism surface.
*R1 is supported by C1, C2, C3, C4.*

**R2** [review claim] [target: spore.protocol-society] [concept: protocol-society]
Spore canon MUST MAINTAIN the distinction between protocol-level claims and governance-level claims, and MUST NOT allow protocol-society framing to treat the protocol/governance distinction as relieving Spore of the Yarvin-Schmitt exception-deciding question. Protocols that retain exception-deciding power (admin keys, upgrade authority, emergency rollback) are governance institutions regardless of how their formal specification frames them; a protocol-society canon that does not name where exception-deciding power sits and how its discretion is limited is in the theater pattern per C2 / C4. Opposition edge remains active against spore.protocol-society until the canon text independently names the exception-locus and its constraints.
*R2 is supported by C1, C2, C4.*

**R3** [review claim] [target: ic.intelligence-primitives] [concept: interoperability-as-institutional]
IC canon MUST NOT allow intelligence-primitives (and adjacent memory-layers / attribution / memory-governance surfaces) to invoke "peer-to-peer" memory or attribution language without concurrently carrying a production/contribution-traceability surface distinct from the attribution-ledger surface. The Brastaviceanu DAO critique (C6) extends naturally from financial-DAO primitives to knowledge-commons primitives: attribution ledgers that flatten contributors to token/address equivalents without contextual-role, task-specific-expertise, and contribution-traceability semantics reproduce the governance-shell-without-production-grammar failure at the knowledge-commons layer. IC opposition edge remains active until intelligence-primitives canon independently states the production-grammar surface distinct from the attribution-ledger surface.
*R3 is supported by C5, C6.*

**R4** [review claim] [target: pm.protocol] [concept: power-capture]
PM canon MUST NOT allow protocol, matching, routing, or coordination-substrate language to claim decentralization at the match-semantics layer while depending operationally on (a) a single registry/directory for participant/intent publication, (b) a single embedding-provider or semantic-matching service, (c) a single settlement/clearing infrastructure, or (d) a central bootstrap/relay for federation between PM instances. Nominal semantic-layer decentralization with operational-layer centralization reproduces the theater pattern at a new layer per C1 / C7. PM MUST NOT absorb decentralized-matching framing into pm.protocol without the canon doc independently stating the decentralization mechanism at the infrastructure layer, not only at the match-semantics layer; opposition edge remains active against pm.protocol until that statement is made.
*R4 is supported by C1, C3, C5, C7.*

**R5** [review claim] [target: pm.connection.bioregional-coordination] [concept: boundary-commoning]
PM canon MUST MAINTAIN the distinction between bioregional-scope decentralization (matching governance to ecological boundaries per the 4-level ladder: centralized → decentralized → polycentric → bioregional) and nominal-topology decentralization (peer-to-peer network structure). Invoking bioregional-coordination as a decentralization claim without specifying which form is intended and by what operational mechanism reproduces the Brastaviceanu global-state-vs-subsidiarity mismatch per C7: a bioregional-scoped coordination substrate cannot simultaneously claim subsidiarity AND global-state consensus enforcement without naming the mismatch. Opposition edge remains active against pm.connection.bioregional-coordination until the bridge note text independently distinguishes the two decentralization senses and names which operational mechanism carries the bioregional-scope claim.
*R5 is supported by C1, C3, C7.*

## 11. Attribution

Wiki sources cited in this note are from the P2P Foundation wiki (https://wiki.p2pfoundation.net), licensed CC BY-SA 4.0. 100% of this note's source claims (7/7) anchor to wiki pages via the `orn:p2p-wiki.page:*` RID convention; this note is derived-claims dominant and is published under CC BY-SA 4.0. Derivative claims in this note inherit ShareAlike obligations for downstream use. See `docs/research/connections/LICENSE-WIKI-DERIVED.md` for the repo-level notice.

Primary anchors: `Decentralization Theater` (4 claims — Yarvin/Waldman sovereignty-and-constitutional-structure framing) and `Limitations of Blockchain and DAOs for Complex Economic Processes` (3 claims — Brastaviceanu/Sensorica 2025 operational critique). Total: 2 distinct wiki pages cited across 7 source claims. Both pages verified present on the local mirror (2026-04-17) and fully read.

Cross-references within the decentralization-myth bundle: this note is Seed 2 of three (Seed 1: administrator-capture, Wave 2; Seed 3: digital-labor/peer-production, Wave 1). Supporting bridge notes in Pass 2 Wave 2/3 that invoke decentralization/P2P/federation vocabulary MUST reference this note by header and name which R-claim remains active against the target canon surface, per §5.
