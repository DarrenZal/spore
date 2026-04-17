---
doc_id: spore.connection.cosmo-local-production
doc_kind: research
status: draft
research_subkind: bridge_note
disposition: clarify existing term
depends_on: []
relates_to:
  - spore.connection.p2p-wiki-post-intake-synthesis
  - spore.connection.federation-and-interop
  - spore.connection.decentralization-theater-opposition
  - spore.connection.digital-labor-peer-production-opposition
  - spore.connection.peer-governance-wikipedia-opposition
  - spore.foundations.spore-instance-model
  - spore.foundations.mycorrhizal-federation-protocol
concepts:
  - cosmo-local-production
  - open-hardware-commons
  - boundary-commoning
  - polycentric-governance
  - knowledge-commons
  - value-capture
  - interoperability-as-institutional
sources:
  - url: https://wiki.p2pfoundation.net/Cosmo-Local_Production
    title: Cosmo-Local Production
    rid: orn:p2p-wiki.page:Cosmo-Local_Production
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Cosmo-Localism
    title: Cosmo-Localism
    rid: orn:p2p-wiki.page:Cosmo-Localism
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Fab_Labs
    title: Fab Labs
    rid: orn:p2p-wiki.page:Fab_Labs
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Open_Hardware
    title: Open Hardware
    rid: orn:p2p-wiki.page:Open_Hardware
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Design_Global,_Manufacture_Local
    title: Design Global, Manufacture Local
    rid: orn:p2p-wiki.page:Design_Global,_Manufacture_Local
    type: primary
    license: CC BY-SA 4.0
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-synthesis-2026-04-17.md
    title: Phase A Synthesis (§3a P-Spore-5/6, §4a DH-Spore-2/3)
    type: seed
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-agent-b-autopoiesis-cosmolocal-platformcoop.md
    title: Phase A Agent B dossier — autopoiesis / cosmo-local / platform-coop
    type: seed
  - path: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md
    title: P2P Wiki Post-Intake Synthesis (Pass 1)
    type: seed
---

# Cosmo-Local Production

This bridge note grounds Spore's `instance-model` and `mycorrhizal-federation-protocol` in the Cosmo-Local Production (CLP) tradition — Ramos/Bauwens/Kostakis, extended by Gershenfeld's Fab-Lab lineage and the Design Global, Manufacture Local (DGML) peer-reviewed line. Spore's "local realization of a global pattern" language is a direct cousin of CLP's design-global / manufacture-local formula; this note makes that lineage explicit, imports three operating primitives Spore currently carries implicitly (subsidiarity, the Fab Charter's right-to-join/leave template, and the 4-degrees-of-openness framework), and carries two disconfirming hypotheses (DH-Spore-2, DH-Spore-3) into the §6 tensions register. This is a Pass 2 Phase B Wave 2 Supporting Note.

> **Decentralization-myth-bundle header.** This note's claims inherit the decentralization-myth-bundle critique (Pass 2 opposition notes: `decentralization-theater-opposition`, `digital-labor-peer-production-opposition`, and `peer-governance-wikipedia-opposition`). See those notes for standing counter-evidence. Claims here do not implicitly endorse "peer-to-peer" or "decentralized" as sufficient governance properties for Spore's federation protocol; CLP's own framing of "design-global, manufacture-local" requires explicit specification of how power-decentralization mechanisms operate alongside subsidiarity — otherwise federation risks decentralization-theater, administrator-capture, or free-labor dynamics.

## 1. What cosmo-local production names

Cosmo-Local Production (CLP) is a methodology for creating value, products, and services that marries the planetary globalization of knowledge with the "smart" localization of production. The wiki definition specifies three basic rules: (1) subsidiarity of material production — localizing production where sensible, bringing it closer to places of need, supporting local economies, and reducing the human footprint; (2) global knowledge collaboration through open and global design communities that bring innovation to bear on all participating distributed places of production; (3) the choice of "generative" models of enterprise in terms of property and governance mechanisms, giving all producers and stakeholder communities a voice.

Ramos's framing in the adjacent `Cosmo-Localism` page makes the inversion explicit: traditional manufacturing housed intellectual property in a single company, manufactured in a centralized place, and exported globally; the Global Factory variant distributed assembly across countries but kept IP centralized. CLP inverts this — intellectual property is available globally (as commons or under peer production licenses), and distributed production centers use new fabrication technologies to produce locally for local markets. The theoretical grounding (Bauwens 2006, forward) is that immaterial resources can be shared at near-zero cost while material resources need true costings; current intellectual-property regimes invert this by treating knowledge as scarce and material resources as abundant.

## 2. What Spore's instance-model already does

Spore's `instance-model` carries "local realization of global pattern" vocabulary — the claim that a single canon/grammar materializes as distinct running instances (site, chat, lexicon, agents, nodes) without any one instance being the whole. This is structurally the same move CLP makes: global design commons + local manufacture = pattern realized at place. What Spore's current canon does not carry explicitly is (a) the citation lineage that names this move as CLP/DGML, (b) subsidiarity as the governance principle for deciding what is realized at which scale, and (c) the Fab-Charter-style federation template that specifies what each local instance owes the network and what the network owes each local instance.

This note's proposal is not to replace Spore's vocabulary but to ground it: add CLP/DGML as the external named lineage, import subsidiarity as federation law, and cite the Fab Charter as the operating template for federation-agreements (right-to-join/leave, transparency, shared tool/design commons, peer learning). The R-claims below specify these as clarifications to existing language, consistent with the Move 0 moratorium's spirit (lifted 2026-04-16, but this note still treats R-claims as clarifications, not new primitives).

## 3. Subsidiarity as federation law

The CLP definition lists subsidiarity as its first rule — not as an aspirational value but as the operative coordination principle that decides what is done where. Ramos's fuller treatment in `Cosmo-Localism` frames this as critique-and-extension of relocalization theory: pure relocalization that decouples from a global knowledge/design commons produces at best "life boat" relocalization and at worst does not achieve basic sufficiency; the systems that allow for healthy subsidiarity (devolution of power to the local) are mediated at state and transnational scales; so the very goals of localized sustainability require political and social action at national and transnational scales. Subsidiarity in CLP is therefore two-directional: it decentralizes material production *and* protects the transnational commons that production draws on.

Spore's `mycorrhizal-federation-protocol` currently uses federation-agreement language without specifying the subsidiarity rule for what should be decided at which scale. Importing subsidiarity as the federation-protocol's governing principle closes this gap — and it is the specific primitive that distinguishes CLP's federation from generic "decentralization," which the decentralization-theater opposition note flags as structurally insufficient.

## 4. The Fab Charter as federation-protocol template

Gershenfeld's Fab Lab network (CBA/MIT, 2001-forward, ~1100 labs by 2017) anchors its coordination to the Fab Charter. The International Fab Lab Association's criteria make the Charter load-bearing: to use the Fab Lab label, a lab must be free and open to the public (at least part of the time each week, in-kind service/barter acceptable); must subscribe to the Fab Charter and display its text on site and online; must share the common set of core tools and processes; and must participate in the global network (video conferences, annual meetings, cross-lab collaboration). The Charter itself specifies that designs and processes developed in fab labs must remain available for individual use, allows intellectual-property protection "however you choose" for commercial activity, incubates commercial activity with the constraint that it must not conflict with open access and should grow beyond the lab, and requires successful businesses to give back to the inventors, labs, and networks that contributed.

This is a concrete federation-protocol template with five properties Spore's mycorrhizal-federation-protocol currently lacks as explicit clauses: (a) a right-to-join conditioned on a small set of minimum commitments (openness, shared tools, network participation); (b) a right-to-leave implied by the voluntary-subscription logic (a lab that stops meeting Charter conditions stops being a Fab Lab, without penalty beyond loss of label); (c) a transparency clause (Charter text displayed publicly); (d) a peer-learning / shared-tool clause (common core toolset, Fab Academy cross-lab education); (e) a give-back clause (commercial success must not enclose the commons it drew from). An AAAA rating system surfaces compliance publicly. Spore should import this five-clause skeleton as the template for federation-agreements between Spore instances.

## 5. Four degrees of openness — Spore's "permeable federation" audit

The `Open Hardware` wiki page preserves Patrick McNamara's four-categories framework (Open Hardware Foundation / OSBR) for describing what "open" actually means in a hardware/infrastructure context. The ladder, least-to-most open:

- **Closed.** Creator will not release information on how to use the hardware in a way that information may be freely shared (signing an NDA is a sure sign).
- **Open Interface.** All documentation on how to make the hardware perform its function is freely available — enough to write fully functional drivers. This is the minimum level that makes hardware useful to the open-software community.
- **Open Design.** Enough detailed documentation is provided that a functionally compatible device could be created by a third party (block diagrams, memory maps, instruction encodings). You can see what was implemented and what it should do, but finer implementation details remain closed.
- **Open Implementation.** The complete bill of materials (schematics, HDL source, everything) to reproduce an exact copy is available. This is the hardware parallel to open-source software; in the Free Software Foundation sense, only Open Implementation is "free."

This ladder is the audit tool Spore needs. Spore's federation vocabulary talks about "permeable federation" and "open federation" as properties of the protocol, but does not specify which degree of openness federation-agreements must encode. If Spore federation agreements only require Open Interface (the RID convention, the federation-protocol API, the event-bridge schema), then instances remain opaque at the design and implementation levels — which is what decentralization-theater looks like at the infrastructure layer. If federation-agreements require Open Design (enough that a functionally compatible instance could be independently built), the federation begins to meet commons-lineage standards. Only at Open Implementation does the federation become "free" in the strong sense (any participant can fork and reproduce without gatekeeper permission). Spore should specify a minimum-openness-degree clause in the federation-protocol — and the argument from the digital-labor and decentralization-theater opposition notes is that Open Interface alone is insufficient.

## 6. Tensions

1. **DH-Spore-2 (cosmo-local decentralization theater / free design, unfree maintenance).** CLP's dependency on "global knowledge and design commons" presupposes a set of infrastructures (GitHub, commons governance, licensing regimes, standards bodies) that federated instances do not replicate — instances consume the commons but rarely co-steward it. Ramos's own obstacles section names "platform oligopolies" as the first obstacle to CLP, with Bauwens's "netarchical capitalism" framing platforms that "get wealthy at the expense of contributors." The structural trap is free-design-upstream / unfree-maintenance-downstream: the design commons is shared openly but the infrastructure hosting it is centralized (GitHub), the maintenance labor is unpaid (digital-labor-peer-production-opposition), and local instances inherit the centralization-risk without getting governance-voice. Any Spore canon adoption of CLP must carry an explicit federation-level commons-governance mitigation — subsidiarity alone does not rescue the commons from upstream capture.
2. **DH-Spore-3 (interface-only openness risk).** The four-degrees-of-openness framework reveals that "open federation" and "permeable membrane" can both be satisfied at Open Interface level while keeping design and implementation closed. This is the specific shape decentralization-theater takes at the infrastructure layer: nominal interop with retained power concentration at the design and governance layers. Spore's federation doctrine must encode a minimum openness degree (this note's R-claim argues for Open Design as the minimum, with Open Implementation as the target) — otherwise "open federation" is compatible with exactly the capture dynamic the decentralization-theater opposition note warns against.
3. **Infrastructure dependency on centralized commons hosts.** The CLP tradition's global-design-commons substrate is, in practice, hosted largely on GitHub (Microsoft), accompanied by a handful of centralized standards bodies and licensing stewards. Federated instances consuming this substrate inherit centralization risk regardless of the federation protocol's local properties — a subtle form of decentralization-theater-proximity at the infrastructure layer. Spore should name this dependency explicitly rather than assuming federation topology suffices.
4. **Business-model/incumbent resistance ambiguity.** Ramos (and Sterlin, `Polis Labs`) both surface institutional resistance, platform-oligopoly capture, and coordination failures (Moloch traps) as the operative threats to CLP in practice. These are not mitigations Spore's current federation-protocol addresses, and the "continued growth: cosmo-localism co-opted" scenario (Google Make™ / Facebook Fabricate™) is a specific, named capture mode.

## 7. Disposition

**Disposition: clarify existing term.** The CLP/DGML/Fab-Labs/Open-Hardware wiki evidence warrants (a) adding CLP/DGML as the external named lineage for Spore's `instance-model`, (b) importing subsidiarity as a first-order governance principle in the `mycorrhizal-federation-protocol`, (c) naming the Fab Charter as the operating template for federation-agreements (right-to-join/leave, transparency, shared tools, peer learning, give-back), and (d) requiring federation-agreements to specify a minimum openness-degree using the four-degrees-of-openness framework — with Open Design as the argued minimum and Open Implementation as the target. None of these introduce new canon primitives; they ground existing language in a published lineage and import operating clauses the current canon lacks as explicit specification.

## 8. Claim Register

**C1** [confidence: high] [anchor: §Definition · orn:p2p-wiki.page:Cosmo-Local_Production]
Cosmo-Local Production (CLP) marries the planetary globalization of knowledge with the smart localization of production under three rules: (1) subsidiarity of material production (localizing where sensible, bringing production closer to need, diminishing the human footprint); (2) global knowledge collaboration via open and global design communities; (3) generative models of enterprise in property and governance that give all producers and stakeholder communities a voice.

**C2** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Cosmo-Localism]
CLP represents an inversion of industrial production's property logic: traditional manufacturing houses intellectual property in a single company (or corporate federation for Global Factory) and exports globally from centralized assembly; CLP makes intellectual property globally available (open licenses or peer-production licenses) while distributed production centers with new fabrication technologies produce locally for local markets.

**C3** [confidence: high] [anchor: §Discussion·Sources · orn:p2p-wiki.page:Cosmo-Localism]
The systems and structures that allow healthy subsidiarity (devolution of power to the local) are mediated at state, national, and transnational scales — therefore the very goals of localized sustainability implicit in relocalization agendas require political and social action at national and transnational scales; subsidiarity in CLP is two-directional, decentralizing material production while protecting the transnational commons that production draws on.

**C4** [confidence: high] [anchor: §Discussion·Weight of history · orn:p2p-wiki.page:Cosmo-Localism]
Platform oligopoly is the first-named obstacle to CLP (Bauwens's "netarchical capitalism"): platforms like Google, Facebook, and sharing platforms like AirBnB and Uber derive value from users' relationality but do not share monetary value back to user communities — cosmo-localism based on extractive platforms would be stunted because the model requires localized re-investment mechanisms (platform cooperativism) that extractive platforms do not provide.

**C5** [confidence: high] [anchor: §Discussion·Scenarios·Continued growth · orn:p2p-wiki.page:Cosmo-Localism]
Ramos names "Continued growth: cosmo-localism co-opted" as a specific scenario where platform oligarchies (Google, Facebook, Apple, Maker Bot) capture and stunt CLP — fabrication spaces as franchise models (e.g. Google Make™, Facebook Fabricate™), design contributors earning subsistence income without financing robust self-generating enterprise, and the commons transformed into the "poverty of the commons" where capital preys on and reproduces itself through contributors' generosity.

**C6** [confidence: high] [anchor: §Definition · orn:p2p-wiki.page:Fab_Labs]
The International Fab Lab Association defines a Fab Lab as a workshop for digital fabrication that (a) is free and open to the public (direct expenses for materials may be charged); (b) subscribes to the Fab Charter and has its text on display on site and web site; (c) disposes of a common set of core tools and processes; (d) contributes to and/or cooperates with other Fab Labs and takes part in or leads network initiatives — with AAAA–CCCC ratings measuring compliance across these four characteristics.

**C7** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Fab_Labs]
The Fab Charter makes Fab Labs the ideal place to practice open design: it requires that designs and processes developed in fab labs must remain available for individual use; allows intellectual-property protection "however you choose" for commercial activity; explicitly states commercial activities can be incubated in fab labs but must not conflict with open access, should grow beyond rather than within the lab, and are expected to benefit the inventors, labs, and networks that contribute to their success.

**C8** [confidence: high] [anchor: §ConditionsForFabLabLabel · orn:p2p-wiki.page:Fab_Labs]
Public access is the first criterion to use the Fab Lab label — a fab lab must be open to the public for free or in-kind service/barter at least part of the time each week, must subscribe to and publish the Fab Charter, must share a common set of tools and processes, and must participate in the larger global fab lab network (videoconference, annual meeting, cross-lab collaboration); the criteria operate as a right-to-join-with-conditions and an implicit right-to-leave (failing conditions forfeits the label without penalty beyond the label loss).

**C9** [confidence: high] [anchor: §Four Categories of Openness · orn:p2p-wiki.page:Open_Hardware]
Hardware openness distributes across a four-category ladder from least to most open: Closed (NDA-gated, no shareable documentation); Open Interface (documentation sufficient for fully functional drivers — the minimum that makes hardware useful to the open-software community); Open Design (enough detail that a functionally compatible device could be independently reproduced by a third party); Open Implementation (complete bill of materials / HDL / schematics — the hardware parallel to open-source software and the only category meeting the Free Software Foundation sense of "free").

**C10** [confidence: high] [anchor: §The Concept · orn:p2p-wiki.page:Design_Global,_Manufacture_Local]
Design Global, Manufacture Local (DGML) describes the emerging productive model in which design is developed, shared, and improved as a global digital commons while actual manufacturing takes place locally through shared infrastructures with local biophysical conditions in mind — building on the convergence of global digital commons (knowledge, software, design) with local manufacturing technologies, featuring on-demand production, shared physical and digital infrastructures, and production oriented toward common good rather than profit maximization.

**C11** [confidence: medium] [anchor: §The Articles · orn:p2p-wiki.page:Design_Global,_Manufacture_Local]
DGML is peer-reviewed in multiple journals (Kostakis/Niaros/Dafermos/Bauwens 2015 in *Futures*; Kostakis/Latoufis/Liarokapis/Bauwens 2016 in *Journal of Cleaner Production* and *Environmental Innovation and Societal Transitions*; Kostakis/Niaros/Giotitsas 2023 in *Sustainability Science*) — establishing CLP/DGML as an externally-validated lineage rather than a purely movement-internal framing, with empirical case studies (Tzoumakers, FabCity, farm hack, Wikispeed) anchoring the theoretical claims.

**C12** [confidence: medium] [anchor: §The Concept·Description · orn:p2p-wiki.page:Design_Global,_Manufacture_Local]
DGML's empirical literature carries two identified concerns that apply directly to Spore: (i) the existence of comprehensive shared documentation that renders a hardware product genuinely "open" (not merely labeled open); (ii) the level of autonomy the user has while developing and maintaining that product — concerns that map directly onto the four-degrees-of-openness audit and the "free design, unfree maintenance" structural trap.

## 9. Review Claims

**R1** [review claim] [target: spore.foundations.spore-instance-model] [concept: cosmo-local-production]
The spore-instance-model foundation document should formally name Cosmo-Local Production (CLP) and Design Global, Manufacture Local (DGML) as the external named lineage for its "local realization of global pattern" language, citing the Ramos/Bauwens/Kostakis tradition (via wiki sources `Cosmo-Local_Production`, `Cosmo-Localism`, `Design_Global,_Manufacture_Local`) and the peer-reviewed journal line (Kostakis et al. 2015 *Futures*, 2016 *Journal of Cleaner Production* and *EIST*, 2023 *Sustainability Science*). This grounding should explicitly carry CLP's property inversion (global immaterial commons, local material production under subsidiarity) as the structure Spore's instance-model shares — and should carry the DGML literature's two empirical concerns (shared-documentation sufficiency, user autonomy over development/maintenance) as applicability questions Spore must answer for its own instances.
*R1 is supported by C1, C2, C10, C11, C12.*

**R2** [review claim] [target: spore.foundations.mycorrhizal-federation-protocol] [concept: polycentric-governance]
The mycorrhizal-federation-protocol foundation document should import subsidiarity as a first-order federation-law primitive — the governing principle that decides what is realized at which scale — framed two-directionally as CLP specifies: decentralizing material/operational concerns to the lowest competent scale *and* protecting the transnational commons substrate that federated instances draw on. Federation agreements should specify, per subsidiarity, which functions must be local (production, governance of local resources, cultural adaptation) and which must be transnational (shared design commons stewardship, licensing regimes, standards, commons-governance mechanisms that defend against platform-oligopoly capture). Generic "decentralization" without the subsidiarity rule is what the decentralization-theater opposition note warns against.
*R2 is supported by C1, C3, C4.*

**R3** [review claim] [target: spore.foundations.mycorrhizal-federation-protocol] [concept: open-hardware-commons]
The mycorrhizal-federation-protocol should adopt the Fab Charter's five-clause skeleton as the operating template for federation-agreements between Spore instances: (a) a right-to-join conditioned on a small, explicit set of minimum commitments (public accessibility, shared tools/schemas, network participation); (b) a right-to-leave implicit in voluntary subscription — failing to meet the conditions forfeits the federation label without further penalty; (c) a transparency clause (federation-agreement text published publicly on each participating instance); (d) a peer-learning / shared-commons-tools clause (common federation protocol, cross-instance collaboration mechanisms); (e) a give-back clause preventing commercial capture — successful commercial activity built on the federated commons must give back to inventors, instances, and the network, not enclose the commons it drew from. A public compliance-rating system (AAAA-analog) should surface which instances meet which clauses.
*R3 is supported by C6, C7, C8.*

**R4** [review claim] [target: spore.foundations.mycorrhizal-federation-protocol] [concept: interoperability-as-institutional]
The mycorrhizal-federation-protocol must specify a minimum openness-degree that federation-agreements encode, using the four-degrees-of-openness framework (Closed / Open Interface / Open Design / Open Implementation): argued minimum is **Open Design** — federation-agreements must provide enough design-level documentation that a functionally compatible Spore instance could be independently built by a third party without gatekeeper permission; target is **Open Implementation** — complete reproducibility of any Spore instance from published specifications, schemas, and code. Federation-agreements that lock at Open Interface only (RID conventions and federation API but opaque design and governance) satisfy the letter of "open federation" while remaining compatible with decentralization-theater, administrator-capture, and the free-design/unfree-maintenance trap. This R-claim must carry the §6 tensions (DH-Spore-2, DH-Spore-3, infrastructure-dependency risk) as constraints on implementation.
*R4 is supported by C4, C5, C9, C12.*

**R5** [review claim] [target: spore.connection.federation-and-interop] [concept: interoperability-as-institutional]
The existing Pass 1 federation-and-interop bridge note should be cross-referenced with this note so the interoperability-as-institutional treatment there imports the CLP/DGML and four-degrees-of-openness framing developed here — specifically, that interoperability-as-institutional is insufficient on its own and must be paired with subsidiarity-as-federation-law and a minimum-openness-degree clause to meet commons-lineage standards. This is a reconciliation edge, not a restatement: the federation-and-interop note stands; this note provides the CLP grounding and openness-audit tooling it currently lacks.
*R5 is supported by C3, C4, C9.*

## 10. Attribution

Wiki sources cited in this note are from the P2P Foundation wiki (https://wiki.p2pfoundation.net), licensed CC BY-SA 4.0. All five primary sources (Cosmo-Local_Production, Cosmo-Localism, Fab_Labs, Open_Hardware, Design_Global,_Manufacture_Local) contribute source claims anchored via the `orn:p2p-wiki.page:*` RID convention. Quoted passages (definitions, Fab Charter criteria, four-degrees-of-openness ladder) are derivative-dominant; this note is published under CC BY-SA 4.0 and derivative claims inherit ShareAlike obligations for downstream use. See `docs/research/connections/LICENSE-WIKI-DERIVED.md` for the repo-level notice.
