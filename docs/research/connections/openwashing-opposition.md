---
doc_id: spore.connection.openwashing-opposition
doc_kind: research
status: draft
research_subkind: bridge_note
disposition: no change
# stance-intent: opposes; script encodes via disposition=no-change per project_bridge_notes.py line 591
depends_on: []
relates_to:
  - spore.connection.p2p-wiki-post-intake-synthesis
  - spore.connection.decentralization-theater-opposition
  - spore.connection.what-the-commons-is-missing-opposition
  - spore.mycorrhizal-federation-protocol
  - spore.connection.protocol-society
concepts:
  - value-capture
  - power-capture
  - boundary-commoning
  - knowledge-commons
  - interoperability-as-institutional
  - protocol-society
sources:
  - url: https://wiki.p2pfoundation.net/Openwashing
    title: Openwashing
    rid: orn:p2p-wiki.page:Openwashing
    type: primary
    license: CC BY-SA 4.0
  - path: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md
    title: P2P Foundation Wiki — Pass 1 Post-Intake Synthesis
    type: seed
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-synthesis-2026-04-17.md
    title: P2P Foundation Wiki — Phase A Pass 2 Synthesis (2026-04-17)
    type: seed
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-agent-c-opposition.md
    title: Phase A Agent C — Opposition Dossier
    type: seed
---

# Openwashing — Opposition

This Pass 2 Phase B Wave 2 Seed 4 opposition note registers a mechanism-level declination against Spore, Intelligence Commons (IC), and Poietic Match (PM) canon uses of "open," "transparent," "federated," and "open protocol" vocabulary. The P2P Foundation wiki's `Openwashing` page — drawing on Michelle Thorne's coinage (2009), Jeffrey Pomerantz and Robin Peek's *First Monday* essay, and Klint Finley's *ReadWriteWeb* taxonomy — names the failure mode: "to spin a product or company as open, although it is not." The critique is operational, not rhetorical: across license-layer, API-layer, governance-layer, and open-core patterns, the wiki records specific cases (Sun Microsystems, Eucalyptus Systems, the Guardian, OpenCorporates, Netscape) where "open" branding was deployed without carrying the governance, contribution-acceptance, data-reusability, or project-direction surface the vocabulary implies. The disposition on Spore, IC, and PM canon is *no change*: no new primitive is proposed. What is proposed is an active opposition edge against any Spore/IC/PM canon absorption of open/transparent/federated vocabulary that does not concurrently specify the *scope of openness* being claimed — interface, design, implementation, or governance — per the 4-degrees framework inherited from the open-hardware-commons lineage.

The cluster's central thesis: "open" without specified scope is openwashing by default. Spore's federation-openness claims, IC's knowledge-commons "open access" framing, PM's "open matching / open protocol" language each carry a surface that can be satisfied at the license layer or interface layer while retaining admin-only commit rights, closed governance, closed decision-making, and platform-lock-in. This note is the fourth in the *decentralization-myth bundle* (siblings: `spore.connection.decentralization-theater-opposition`, `ic.connection.digital-labor-peer-production-opposition`, `spore.connection.faircoin-filtering-membrane-opposition`): openwashing and decentralization theater are the *vocabulary-capture* and *topology-capture* faces of the same pattern — nominal openness / nominal decentralization replacing the operational surface the terms imply.

## 1. Thorne's coinage and the greenwashing analogy

Michelle Thorne (2009) coined "openwashing" as a direct derivation from "greenwashing": "'Openwashing' is a term derived from 'greenwashing' to refer to dubious vendor claims about openness" (`orn:p2p-wiki.page:Openwashing` §Definition, citing ReadWriteWeb). The analogy is load-bearing. Greenwashing is not merely environmentally-weak practice; it is *active substitution* of ecological branding for ecological operations. Openwashing operates the same way: the performative gesture (open-source license, open-data API, open-community branding, "open protocol" framing) actively substitutes for — and in some cases actively impedes — operational openness of governance, contribution-acceptance, reuse-rights, and project-direction.

Thorne's further diagnostic note is cited by the wiki: "openwashing is a side effect of customers' growing desire to have transparency and access in their services, and that the more companies engage in it, the greater the weight they're indirectly giving these issues" (§Description). This framing positions openwashing not as marginal abuse but as a *signal* that openness has market value — and therefore that unqualified "open" claims will drift toward vocabulary-only usage unless canon language specifies which scope of openness is being asserted.

## 2. Pomerantz and Peek: the four-pattern taxonomy

Pomerantz and Peek (*First Monday*, 2016, cited fully on the wiki page) catalog four openwashing patterns each applicable to Spore/IC/PM canon:

- **License-layer openwashing without project-direction openness**: Ulander (2012) on Sun Microsystems — "open sourcing a technology, but maintaining complete ownership of the project direction and copyrights" (§Description). The source code is visible; the roadmap is not. License-layer release alone does not carry the governance surface the term "open" implies to most readers.
- **Contribution-layer openwashing (gatekeeper pattern)**: Finley (2011) on Eucalyptus Systems, extended in the Discussion section — "NASA engineers tried to contribute some new code to Eucalyptus to make it more scalable, but Eucalyptus rejected the contributions because they conflicted with code available in a closed source version it sold" (§Discussion). The license was open; the project served as gatekeeper for external contribution. Gil Yehuda (Yahoo open-source director, cited in the same section) notes: "a lot of companies are willing to release code but are reluctant to take contributions. That's not really what open source is all about, but it does accomplish something."
- **Data-layer openwashing (no-reuse pattern)**: Winer (2009) on the Guardian — "making data available via an API, but not allowing its reuse." The access was open; the downstream rights were not. Pomerantz and Peek note a parallel Villum (2014) critique of OpenCorporates, where data "open" status was bounded by whether release "strengthens their opportunity to offer consultancy services" — openness as a consultancy-funnel rather than as a commons.
- **Open-core openwashing**: Finley's taxonomy explicitly calls this pattern out ("Beware 'Open Core' Software," §Discussion list item 3). The open component exists; the commercial-essential component does not, and the governance of the boundary between them is not open. This is the pattern most directly applicable to federated-protocol claims: the wire protocol can be open while the reference implementation, the admin keys, the bridge services, or the governance body are not.

Pomerantz and Peek also note the structural result: "In addition to the bile being vented in the blogosphere, many open communities have responded to openwashing with more rigorous definitions of what 'open' means" — the Open Source Initiative's Open Standards Requirement for Software, PLOS's "HowOpenIsIt?" Open Access Spectrum, the Directory of Open Access Journals' stricter criteria (2014), the Apereo Foundation's Openness Index, and the Open Knowledge Foundation's Open Definition. The operational consequence: canon that invokes "open" without anchoring to a scope-specifying framework inherits the vocabulary-capture pattern; canon that anchors to a scope-specifying framework (license / contribution / data-reuse / project-direction / governance) does not.

## 3. Finley's spot-check procedure

Klint Finley's *ReadWriteWeb* piece "How to Spot Openwashing" is cited verbatim in the wiki §Discussion with a four-step procedure: (1) Check the License, (2) Evaluate the Community and Governance, (3) Beware "Open Core" Software, (4) Read the Terms of Service for "Open" APIs. Simon Phipps (Open Source Initiative, cited in the same section) is quoted proposing an "Open Source Scorecard" and the framing that "openness can perhaps be best thought of as a scale rather than a binary state." Michael Coté (Red Monk, same section) notes "in some cases openwashing is mere ignorance — a company's decision makers don't realize what really goes into making something truly open." These framings make openness a *graded scope claim*, not a boolean attribute — which is load-bearing for Spore/IC/PM canon.

The operational implication: any canon sentence invoking "open" is implicitly making a multi-axis claim (license openness, contribution-acceptance openness, data-reuse openness, project-direction openness, API-reuse openness, governance-layer openness). Readers resolve the claim on the most charitable axis; governance failures occur on the least-charitable axis. Silence on which axes are being claimed defaults to the most-charitable reading by the author and the least-charitable operational reality.

## 4. Cross-reference: the sibling pattern of decentralization theater

Openwashing and decentralization theater (`spore.connection.decentralization-theater-opposition`) are sibling patterns. Both operate by substituting a performative gesture for an operational surface:

- *Decentralization theater*: nominal P2P topology, blockchain branding, or federation structure substitutes for operational decentralization of sovereign authority (admin keys, protocol-governance structure, operational-infrastructure dependency).
- *Openwashing*: nominal open-source license, open-data API, open-community branding, or "open protocol" framing substitutes for operational openness of governance, contribution-acceptance, reuse-rights, and project-direction.

Yarvin's *Decentralization Theater* analogy (via Schneier's security theater) applies structurally to openwashing: greenwashing : ecology :: openwashing : governance-openness :: decentralization theater : sovereign-authority-decentralization. All three are cases of vocabulary-capture operating as brand markup — the vocabulary has positive market value, so adversarial-selection pressure drives loose usage, so unqualified invocation drifts toward theater unless the canon specifies the axis being claimed. Spore/IC/PM canon that invokes any of the three terms without concurrent axis-specification inherits the corresponding failure mode.

## 5. Applied to Spore / IC / PM canon

- **Spore federation openness (`spore.mycorrhizal-federation-protocol`)**: federation doctrine MUST declare scope of openness — wire-protocol openness, reference-implementation openness, contribution-acceptance openness, admin-key policy, governance openness — or risk the Eucalyptus / open-core pattern where the protocol is open but the project (admin keys, bridge services, spec governance) is not. The open-hardware-commons lineage's 4-degrees framework (closed → interface-open → design-open → implementation-open, per `concepts-p2p-wiki.yaml:open-hardware-commons`) gives a scaffolded scope ladder; federation canon should either anchor to that ladder or an analogous scope-specifying framework.
- **Spore protocol-society (`spore.connection.protocol-society`)**: protocol-society framing MUST distinguish *protocol-level openness* (who can write clients / run nodes / read spec) from *governance-level openness* (who sets protocol direction, controls spec revision, admits implementers). License or interface openness at the protocol layer does not imply governance openness at the meta-protocol layer; silent composition reproduces the Sun / Eucalyptus pattern at protocol scale.
- **IC knowledge-commons (`ic.connection.knowledge-commons-governance`)**: "open knowledge" framing MUST specify governance openness (who decides what enters, exits, or is attributed) alongside access openness (who can read, reuse, redistribute) — per Pomerantz and Peek's catalog and per the distinct historical patterns the Open Knowledge Foundation's Open Definition exists to prevent. Knowledge-commons language that inherits "open" as a positive brand without carrying the governance-openness surface is the Guardian-API or OpenCorporates pattern at knowledge-commons scale.
- **IC intelligence-primitives (`ic.intelligence-primitives`)**: "open intelligence" / "open memory" / "open-governance" framings MUST carry contribution-acceptance openness (who can submit), curation-governance openness (who decides what gets retained/attributed), and retirement-governance openness (who decides what gets forgotten), not only access-layer openness.
- **PM protocol (`pm.protocol`)**: "open matching / open routing" MUST specify *who governs the matching rules* (parameter-setting, embedding provider, scoring-function authorship, dispute resolution), not only *who can use the protocol*. A PM protocol that is open at the client-integration layer but closed at the matching-rule-authorship layer exhibits the open-core pattern: open API, closed policy.

Each of these targets is a candidate for an R-claim in §7; each is a distinct mechanism-site where openwashing would manifest absent explicit scope-specification in canon text.

## 6. Why disposition is no change

Disposition `no change` here is an active opposition directive, not default deferral. The Pomerantz/Peek/Finley/Thorne critique warrants stating the scope declinations in canon-facing language (per the R-claims below) while declining to add any new positive primitive. The alternative — absorbing the critique as a set of positive clarifications ("Spore federation is now open in the following scopes...") without concurrent operational commitment — would inherit exactly the failure mode Pomerantz and Peek catalog. The script encodes this stance: `disposition=no-change → opposes edge`, per `scripts/project_bridge_notes.py:591`. The disposition can shift on a per-target basis when and if the target canon doc independently specifies its scope-of-openness claim, anchored to a scope-specifying framework (OSI Open Standards Requirement, PLOS HowOpenIsIt?, the 4-degrees open-hardware ladder, or equivalent).

## 7. Tensions (cautions for any reader of this opposition note)

1. **Opposition-vs-deferral conflation risk**: A no-change disposition for opposition reasons reads identically in the database to a no-change disposition for insufficient-evidence reasons. The stance-intent HTML comment in frontmatter flags the intent for human readers; the projection script encodes the opposes edges per the line-591 rule. Downstream readers should not treat these edges as low-signal deferrals.
2. **Anti-openness misreading risk**: Declining to absorb "open" vocabulary into Spore/IC/PM canon could be misread as siding against openness. It does not. The opposition is specifically against *unscoped* invocation of "open" — not against open practice. If and when target canon carries scope-specification (license scope, contribution scope, governance scope, project-direction scope), the opposition shifts to support.
3. **Single-source risk**: This note anchors to a single wiki page (`Openwashing`) with nested citations to external sources (Pomerantz & Peek, Finley, Thorne, Ulander, Winer, Wiley, Villum). The primary evidence is dense but from one P2P Foundation wiki anchor. Per the single-page anchor convention for Pass 2 Seed 4, this is acceptable; an R-claim cannot be retired by adding source-counts alone — only by the target canon independently specifying scope.
4. **Sibling-pattern coordination risk**: Openwashing edges overlap with decentralization-theater edges on shared target canon docs (notably `spore.mycorrhizal-federation-protocol`). Each sibling note's R-claims address a distinct axis (openness-scope vs. sovereign-authority-scope); retiring one does not retire the other.

## 8. Claim Register

**C1** [confidence: high] [anchor: §Definition · orn:p2p-wiki.page:Openwashing]
Michelle Thorne's coinage (2009) defines openwashing as the deployment of "open" branding where the underlying governance, contribution-acceptance, or reuse surface does not carry the substance the vocabulary implies — "dubious vendor claims about openness" derived directly from the "greenwashing" analogy. The framing positions openwashing as *active substitution* of open-branding for open-operations, structurally parallel to greenwashing's substitution of eco-branding for eco-operations, and not as marginal abuse but as a market-driven drift pattern.

**C2** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Openwashing]
Pomerantz and Peek (*First Monday*, 2016) catalog openwashing as a multi-layer phenomenon across license-layer (Sun Microsystems — "open sourcing a technology, but maintaining complete ownership of the project direction and copyrights"), contribution-layer (Eucalyptus Systems — rejecting external contributions to preserve a closed-source upsell), data-layer (the Guardian — API access without reuse rights), and scope-layer (OpenCorporates — data release bounded by consultancy-revenue logic), establishing that "open" is a multi-axis scope claim and that canon invoking "open" without axis-specification inherits the catalog's failure modes by omission.

**C3** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Openwashing]
Thorne's diagnostic — "openwashing is a side effect of customers' growing desire to have transparency and access in their services, and that the more companies engage in it, the greater the weight they're indirectly giving these issues" — establishes that openness has positive market value and that unqualified "open" claims drift toward vocabulary-only usage under adversarial selection pressure; therefore canon invoking "open" without scope-specification cannot remain stable under scale, because the vocabulary's market value will attract loose usage that the canon's absence of scope-specification cannot distinguish from accurate usage.

**C4** [confidence: high] [anchor: §Discussion · orn:p2p-wiki.page:Openwashing]
Finley's four-step spot-check procedure (via Simon Phipps of the OSI and Michael Coté of Red Monk) establishes that openness is "a scale rather than a binary state" requiring separate verification at license, community-and-governance, open-core, and API-ToS layers — and that the industry-standard response to openwashing is the construction of scope-specifying frameworks (OSI Open Standards Requirement for Software, PLOS HowOpenIsIt? spectrum, DOAJ strict criteria, Apereo Openness Index, OKFN Open Definition); canon that invokes "open" without anchoring to a scope-specifying framework is structurally equivalent under this test to the openwashing cases the frameworks exist to detect.

## 9. Review Claims

- **R1**: Spore mycorrhizal-federation-protocol canon MUST NOT use "open federation," "open protocol," or "federated openness" language without concurrent specification of (a) wire-protocol scope (who can implement clients), (b) reference-implementation scope (whether admin keys or bridge services are held by a bounded party), (c) contribution-acceptance scope (how external contributions are accepted into the reference implementation), and (d) spec-governance scope (who has authority over protocol revision). Per C2, single-layer openness claims (license only, interface only) without the multi-layer surface reproduce the Eucalyptus / open-core pattern where the protocol is nominally open and the project is operationally closed. Spore federation canon SHOULD decline "open" composition in federation-protocol text until the protocol doc independently anchors to a scope-specifying framework (e.g. the 4-degrees open-hardware ladder at `concepts-p2p-wiki.yaml:open-hardware-commons`, the OSI Open Standards Requirement, or an analogous structure); this opposition edge remains active against `spore.mycorrhizal-federation-protocol` until that anchoring is made. [target: spore.mycorrhizal-federation-protocol] [concept: boundary-commoning]
  supported_by: C1, C2, C4.
- **R2**: Spore protocol-society canon MUST distinguish protocol-layer openness (client implementation, node operation, spec readability) from meta-protocol governance openness (spec-direction setting, spec-revision authority, implementer admission), and MUST NOT allow protocol-society framing to treat the two scopes as equivalent. Per C3 / C4, "open protocol" language unanchored to scope-specification drifts under market-selection pressure toward the least-charitable operational reading; protocol-society canon inherits this drift unless the doc states which of the two scopes is being claimed and which is not. The opposition edge remains active against `spore.connection.protocol-society` until the protocol-society canon doc independently specifies the protocol-vs-meta-protocol scope distinction. [target: spore.connection.protocol-society] [concept: protocol-society]
  supported_by: C2, C3, C4.
- **R3**: IC knowledge-commons-governance canon MUST NOT use "open access," "open knowledge," or "open commons" language without concurrent specification of governance-layer openness (who decides what enters, is retained, is attributed, or is retired), not only access-layer openness (who can read, reuse, redistribute). Per C2's Guardian-API and OpenCorporates cases, access openness can coexist with tightly bounded governance in ways that reproduce the openwashing pattern at knowledge-commons scale; per C4, the OKFN Open Definition exists precisely to separate these axes. IC knowledge-commons canon SHOULD decline "open" composition on knowledge-commons surfaces until governance-layer openness is independently specified; the opposition edge remains active against `ic.connection.knowledge-commons-governance` until that specification is made. [target: ic.connection.knowledge-commons-governance] [concept: knowledge-commons]
  supported_by: C2, C3, C4.
- **R4**: IC intelligence-primitives canon MUST NOT use "open intelligence," "open memory," or "open-governance" language without concurrent specification of contribution-acceptance openness (who can submit), curation-governance openness (who decides retention and attribution), and retirement-governance openness (who decides forgetting); access-layer openness alone at the intelligence-primitives layer inherits the Sun / Eucalyptus / Guardian pattern at cognition-infrastructure scale, where open access to outputs coexists with closed governance of the primitive's direction and admission rules. The value-capture pattern Pomerantz and Peek catalog in commercial openwashing has a direct analog in intelligence-infrastructure: access-open primitives whose governance surface accrues authority to a bounded admission body reproduce the value-capture failure mode independent of the primitives' stated intent. IC intelligence-primitives canon SHOULD decline "open" composition at the primitive layer until these three governance-openness scopes are independently specified; the opposition edge remains active against `ic.intelligence-primitives` until that specification is made. [target: ic.intelligence-primitives] [concept: value-capture]
  supported_by: C1, C2, C4.
- **R5**: PM protocol canon MUST NOT use "open matching," "open routing," or "open protocol" language without concurrent specification of *who governs the matching rules* — parameter-setting, embedding-provider selection, scoring-function authorship, dispute resolution, and rule-revision authority — not only *who can use the protocol*. Per C2's open-core pattern and per C4's requirement that "open" resolve at multiple scope axes, a PM protocol that is client-integration-open but matching-rule-authorship-closed exhibits the open-core pattern at coordination-substrate scale: open API, closed policy. This pattern is a direct power-capture vector: matching-rule authorship is where coordination-layer power actually sits, and "open protocol" framing that leaves this layer unspecified defaults authority to the implementers by omission. PM protocol canon SHOULD decline "open" composition at the matching-rules layer until rule-authorship governance is independently specified; the opposition edge remains active against `pm.protocol` until that specification is made. [target: pm.protocol] [concept: power-capture]
  supported_by: C2, C3, C4.
## 10. Attribution

Wiki sources cited in this note are from the P2P Foundation wiki (https://wiki.p2pfoundation.net), licensed CC BY-SA 4.0. 100% of this note's source claims (4/4) anchor to the single wiki page `Openwashing` via the `orn:p2p-wiki.page:Openwashing` RID convention; this note is derived-claims dominant and is published under CC BY-SA 4.0. Derivative claims in this note inherit ShareAlike obligations for downstream use. See `docs/research/connections/LICENSE-WIKI-DERIVED.md` for the repo-level notice.

Primary anchor: `Openwashing` (4 claims — Thorne coinage; Pomerantz & Peek four-pattern taxonomy; market-drift diagnostic; Finley/Phipps/Coté scope-spectrum and industry-response frameworks). Total: 1 distinct wiki page cited across 4 source claims. Nested citations inside the wiki page (Pomerantz & Peek *First Monday* 2016; Finley *ReadWriteWeb*; Thorne 2009 blog; Ulander 2012; Winer 2009; Wiley 2011; Villum 2014; Free Software Foundation 2016) are treated as wiki-page-internal evidence per the single-source Seed 4 scoping.

No dead-anchor findings: the `Openwashing` wiki page verified present on the local mirror (`/Users/darrenzal/projects/p2pfoundation-wiki/wiki/Openwashing.mediawiki`, 2026-04-17) and fully read.
