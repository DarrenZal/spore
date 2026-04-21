---
doc_id: spore.connection.bioregional-scope-legal-constraint
doc_kind: research
status: draft
research_subkind: bridge_note
disposition: clarify existing term
depends_on: []
relates_to:
  - spore.connection.p2p-wiki-post-intake-synthesis
  - spore.connection.commons-law-and-charter-lineage
  - spore.connection.boundary-commoning
  - spore.mycorrhizal-federation-protocol
  - spore.mycelial-holarchy-architecture
concepts:
  - bioregional-scope
  - polycentric-governance
  - commons-law
  - boundary-commoning
  - power-capture
sources:
  - url: https://wiki.p2pfoundation.net/Bioregionalism
    title: Bioregionalism
    rid: orn:p2p-wiki.page:Bioregionalism
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Bioregional_Governance
    title: Bioregional Governance
    rid: orn:p2p-wiki.page:Bioregional_Governance
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Bioregion
    title: "Bioregion (Thackara; Haenke; Silva et al.)"
    rid: orn:p2p-wiki.page:Bioregion
    type: primary
    license: CC BY-SA 4.0
  - url: https://wiki.p2pfoundation.net/Bioregional_Coordination_Framework
    title: Bioregional Coordination Framework (Benjamin Life)
    rid: orn:p2p-wiki.page:Bioregional_Coordination_Framework
    type: corroborating
    license: CC BY-SA 4.0
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-synthesis-2026-04-17.md
    title: Phase A Synthesis (2026-04-17) — §8c three-layer stack, §3a P-Spore-4, §5 vocab
    type: seed
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-agent-d-foundations-rea-law.md
    title: Agent D — Foundations / REA / Commons Law dossier (P-Spore-4, P-PM-3)
    type: seed
  - path: /Users/darrenzal/projects/spore/docs/research/connections/commons-law-and-charter-lineage.md
    title: "Wave 2 pairing: Commons Law and Charter Lineage (spore.connection.commons-law-and-charter-lineage)"
    type: seed
  - path: /Users/darrenzal/projects/poietic-match/docs/research/connections/bioregional-coordination.md
    title: "Corroborating bridge note: Bioregional Coordination (pm.connection.bioregional-coordination)"
    type: seed
---

# Bioregional Scope as Legal-Institutional Constraint

This bridge note grounds Spore's `bioregional-scope` primitive — frozen as a v2 concept in `concepts-p2p-wiki.yaml` on 2026-04-17 — as a **constraint-primitive**, not an aesthetic or romantic aspiration. The wiki's Bioregionalism corpus treats bioregional boundaries (watersheds, biogeographic regions, life-places) as materially-enforced legal and political facts that shape what coordination is operationally possible. This note is a Wave 3 supporting note for the Phase B intake; it is a companion to `spore.connection.commons-law-and-charter-lineage` (Wave 2), which supplies the commons-law layer of the Phase A §8c three-layer coordination stack. Bioregional scope is the **outer boundary** that layer's legal-institutional scaffolding attaches to: commons-law specifies what charter/trust backs the commons-scope authority; bioregional-scope specifies where that authority legitimately extends. Pass 1 treated bioregional coordination primarily as a PM-side governance-pattern concern; Phase A clarifies that the scope question is load-bearing for Spore's federation-protocol and mycelial-holarchy canon as well, and that it must be framed as constraint (what the ecology and the law will actually permit) rather than as preference (what the designers find attractive).

## 1. Bioregional-scope as constraint, not vibe

The P2P wiki's `Bioregionalism` page opens with a spatial/material framing: a bioregion is "a region defined by shared natural characteristics such as watersheds, ecosystems, and landforms" (`orn:p2p-wiki.page:Bioregionalism`, §Description). Thackara's parallel definition on `Bioregion` fixes the metabolic-accounting ground: a bioregion is a "life-place" defined by watersheds, foodsheds, fibersheds, and soil series, in which "growth … is redefined as improvements to the health and carrying capacity of the land, and the resilience of communities" (`orn:p2p-wiki.page:Bioregion`, §Bioregional food – and health). These are not stylistic framings. Watersheds and biogeographic regions exist independently of how any federation labels them; they are the physical boundary conditions any coordination surface targeting place-based activity must satisfy or fail.

The wiki preserves the operative claim from the Bioregional Coordination Framework (Benjamin Life): "the bioregion exists as a shared ecological context that shapes and sustains all life within its boundaries … No 501(c)(3) organization can legitimately claim to represent or control a bioregion" (`orn:p2p-wiki.page:Bioregional_Coordination_Framework`, §The Commons Logic of Bioregional Identity). This is a legal-institutional constraint, not an aesthetic stance: the claim is that the material fact of the bioregion — a living ecological system that precedes and extends beyond any human organizational form — places a structural limit on which entity forms can legitimately hold commons-scope authority at bioregional scale. A federation protocol that architects itself as a single-owner platform at bioregional scope fails the constraint regardless of its internal governance culture.

For Spore, the implication is that `bioregional-scope` is a **constraint-primitive** in the same sense that Spore's `power-capture` doctrine is: it names a structural condition the grammar must satisfy, not a preference the grammar can optionally express. Any Spore primitive targeting bioregional scope (federation topology, holon composition, instance deployment) inherits the constraint whether or not the canon text declares it.

## 2. The four-level governance ladder as scope-not-style

The `Bioregional Governance` page reproduces Resilience.Earth's four-level governance ladder — centralized, decentralized, polycentric, bioregional — positioning bioregional governance as a **distinct fourth level** above polycentric governance, not as its synonym (`orn:p2p-wiki.page:Bioregional_Governance`, §Characteristics). The distinction matters for Spore's `polycentric-governance` vocabulary: polycentric governance specifies multiple decision centers with limited autonomy and formal interaction (scope-neutral); bioregional governance adds the stricter scope constraint that political-administrative boundaries should match ecological-and-cultural wholes, and that no organization higher than necessary should be invoked.

Phase A recorded this as the sharper ordering that Pass 1 conflated. The frozen `polycentric-governance` slug in `concepts-p2p-wiki.yaml v2` now carries the 4-level ladder explicitly in its definition, and the new `bioregional-scope` slug names the fourth-level scope constraint. This is Spore-canonical vocabulary: bioregional-scope is polycentric governance scoped to ecological-cultural wholes, plus the legal-institutional constraint that no organization higher than necessary be invoked, plus the material-accounting constraint that watersheds / foodsheds / fibersheds are the ground of "within-scope."

## 3. Three-layer stack: where bioregional-scope sits

The Phase A §8c three-layer coordination stack decomposes commons infrastructure into three co-constitutive layers:

1. **Governance-pattern layer** (Ostrom DPs, polycentric-governance, boundary commoning): how decision centers interact.
2. **Semantic-economic layer** (REA / ValueFlows): how resource flows are named.
3. **Legal-institutional layer** (commons-law, charter/trust instruments): what legal standing backs the commons-scope authority.

Bioregional-scope is **the outer boundary condition of the legal-institutional layer**. Commons-law specifies the charter-logic (enumerated commons-access rights, anti-reclassification clauses, participatory boundary-verification — see `spore.connection.commons-law-and-charter-lineage` §3) that protects the commons from re-enclosure; bioregional-scope specifies the **territorial extent** over which that protection legitimately extends. The two primitives are paired: commons-law without bioregional-scope allows a charter to be written at the wrong scale (or without a scale at all); bioregional-scope without commons-law produces a well-delimited territory with no legal scaffold to defend it. Phase A §8c names the third failure mode explicitly: absence of the legal layer invites **enclosure via regulation** — the historical mechanism, per `spore.connection.commons-law-and-charter-lineage` C4, by which Acts of Parliament systematically circumvented the Charter of the Forest's protections after the 17th century. Bioregional-scope is not romantic territory-talk; it is the primitive that makes that failure mode nameable at the correct scale.

## 4. Bioregional scope as outer boundary in the federation topology

Spore's `mycorrhizal-federation-protocol` currently treats federation scope as a protocol-and-governance concern: who speaks for the federation, how cross-federation claims are validated, what fails the authorization check. Phase A shows that the federation protocol must carry **scope-of-scope** as an explicit primitive: at what territorial extent does a given federation legitimately claim commons-scope authority, and what material conditions (watershed boundaries, biogeographic region extent, bio-cultural identity) determine that extent?

The Bioregionalism page's four-level ladder supplies the answer as constraint: bioregional scope is polycentric-governance-plus, where "plus" is the legal-institutional constraint that no organization higher than necessary be invoked. For a federation targeting a watershed, the bioregional-scope constraint says: (a) the federation's claim extent cannot exceed the watershed's material boundary without breaching the constraint; (b) the federation's governance structure cannot be a single-owner platform without breaching the "no 501(c)(3) can legitimately represent a bioregion" clause; (c) the federation's membrane institutions (per `spore.connection.boundary-commoning` §3, within-commons scope) must be disciplined by institutional-self-negation (see `pm.connection.bioregional-coordination` C5, via the `Bioregional_Commoning` page) if they are to hold any bioregional-scope coordination role at all.

These are not preferences Spore can adopt or decline; they are conditions the federation topology must satisfy if it claims bioregional scope. A federation that claims the label without satisfying the constraints is structurally indistinguishable, at the protocol layer, from the "decentralization theater" opposition primitive (per `filtering-membrane` and `decentralization-theater` slugs in `concepts-p2p-wiki.yaml v2`).

## 5. Bioregional-scope as outer boundary in the mycelial-holarchy

The `mycelial-holarchy-architecture` composes holons at multiple scales. Phase A §3a P-Spore-4 observed that Pass 1's architecture text names polycentric governance as the scale-up mechanism without naming the bioregional-scope constraint on that scale-up. The consequence is that the holarchy as written can scale indefinitely without hitting a boundary condition — but in the wiki's source tradition, it cannot: bioregional scope is the outer constraint, because above the bioregional level the commons-scope authority argument fails (no organization can legitimately represent supra-bioregional commons, per Austin Wade Smith's core-patterns material on `Bioregional Governance`).

Spore's mycelial-holarchy should therefore name the scale ceiling as part of its architecture: holons compose up to bioregional scope with legal-institutional scaffolding (commons-law); beyond that, composition is between-federation (`boundary-commoning` scope, see `spore.connection.boundary-commoning` §3) rather than within-federation. The cosmo-local primitive (`cosmo-local-production` slug) handles the supra-bioregional surface by federating local realizations of global design commons; cosmo-local is not a scale-up of bioregional, it is a different surface — the global-design-commons layer sits alongside the bioregional coordination layer, not above it.

## 6. Decentralization-myth-bundle

Phase A §8d records a cross-cutting opposition discipline: **decentralization theater** + **digital-labor free-labor trap** + **administrator capture** mutually reinforce, and any Spore primitive claiming "peer-to-peer" or "decentralized" inherits all three critiques by proximity unless the canon explicitly declines each. Bioregional-scope intersects this bundle specifically at the decentralization-theater axis.

A federation that claims bioregional scope but is architected as a single-owner platform, a 501(c)(3) administrative control surface, or a nominally-distributed topology with centralized admin keys or governance-layer concentrations is exhibiting decentralization theater at bioregional scale. The `Bioregional Coordination Framework` treats this as the primary failure mode the dual-structure (membrane-institution + autonomous-network) pattern is designed to resist. Spore's federation-protocol and holarchy-architecture canon, when they adopt bioregional-scope language, should also explicitly decline the three decentralization-myth-bundle critiques or they inherit them.

The three-layer stack makes the decline concrete: governance-pattern + semantic-economic + legal-institutional together are the minimum surface to resist decentralization theater at bioregional scope; any two of the three is insufficient. This is a constraint on canon completeness, not an aesthetic preference.

## 7. Tensions and cautions

1. **Scope-vs-style risk**: "Bioregional" is load-bearing vocabulary in regenerative-design and eco-philosophical communities, often used as value-statement rather than scope-constraint. Spore's adoption of `bioregional-scope` should be disciplined: the primitive names the four-level ladder's fourth level (polycentric-plus-ecological-cultural-constraint), not a generic endorsement of bioregionalism-as-worldview. Canon text should avoid language that conflates constraint with vibe; where the wiki sources use lyrical language ("life-place," "wholeness"), Spore canon should cite them with attribution and translate the operational content into constraint specification.

2. **Bio-cultural-regioning process-over-map caution**: Per `pm.connection.bioregional-coordination` R4 (citing Hubbard / Thackara / Carlisle on `Bioregioning`), bioregional identity is continuously co-created by those who live in the place, not fixed by cartography. Spore's adoption of `bioregional-scope` should not bake a fixed bioregional ontology into the federation-protocol schema; place-identity is a consensus the participants are making, and protocol-level defaults should carry configurable-by-participants affordances. The constraint is that bioregional scope exists as a material fact; the specification of which material facts count is itself a within-scope governance operation.

3. **Legal-layer attachment ambiguity**: Commons-law, per `spore.connection.commons-law-and-charter-lineage` §6, operates through state legal infrastructure. Bioregional scope may cross state-jurisdictional boundaries (e.g., the Salish Sea bioregion crosses U.S.-Canadian jurisdiction). Spore canon that claims bioregional scope must engage with the question of which legal surfaces the legal-institutional layer attaches to — federation governance alone cannot carry the legal-institutional layer, and bioregional scope may require multi-jurisdictional commons-law scaffolding (treaty-framework, federated trust) rather than single-jurisdiction charter. This tension is real and should be named in any Spore canon edit rather than resolved by implicit assumption.

4. **PM corroboration, not duplication**: The PM bridge note `pm.connection.bioregional-coordination` (Pass 1) already covers the Bioregionalism corpus extensively (15 C-claims across 12 pages, including the 4-level ladder, dual-structure pattern, flow funding, bioregional financing facilities, and the DAO/guild typology). This Spore-side note does not re-cover that material; it grounds the **Spore-facing** framing — bioregional-scope as constraint-primitive in the federation-and-holarchy canon, paired with commons-law in the three-layer stack — and cross-references PM's coverage for the operational PM-side detail. Spore canon edits should cite the PM note rather than re-deriving the operational content at bioregional scope.

## 8. Claim Register

**C1** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Bioregionalism]
A bioregion is defined in the source tradition as "a region defined by shared natural characteristics such as watersheds, ecosystems, and landforms" — a spatial and material boundary condition that exists independently of how any coordination framework labels it, not a stylistic or aesthetic framing, and not a category that a coordination protocol can redefine without breaching the boundary condition.

**C2** [confidence: high] [anchor: §Characteristics · orn:p2p-wiki.page:Bioregional_Governance]
The Resilience.Earth four-level governance ladder (centralized → decentralized → polycentric → bioregional) positions bioregional governance as a distinct fourth level — "a system that is capable of generating new proposals of high value from a wholeness approach" — above polycentric governance, not as its synonym; bioregional governance adds the stricter scope constraint that political-administrative boundaries should match ecological-and-cultural wholes and that no organization higher than necessary be invoked.

**C3** [confidence: high] [anchor: §The Commons Logic of Bioregional Identity · orn:p2p-wiki.page:Bioregional_Coordination_Framework]
The tradition's foundational claim — "No 501(c)(3) organization can legitimately claim to represent or control a bioregion. Any attempt to do so represents an ontological confusion that fundamentally misunderstands what a bioregion actually is — a living system that precedes and extends far beyond any human organizational form" — is a legal-institutional constraint, not an aesthetic stance: it establishes a structural limit on which entity forms can legitimately hold commons-scope authority at bioregional scale, and any coordination protocol that architects itself as a single-owner platform at bioregional scope fails the constraint regardless of its internal governance culture.

**C4** [confidence: high] [anchor: §Bioregional food – and health · orn:p2p-wiki.page:Bioregion]
Thackara's bioregion definition grounds bioregional scope in material metabolic-accounting — a bioregion is organized around measurable "sheds" (watersheds, foodsheds, fibersheds, soil series), with "growth … redefined as improvements to the health and carrying capacity of the land, and the resilience of communities" — fixing the material-flow ground that distinguishes bioregional-scope from generic place-based or community-of-practice scope, and supplying the "within-scope" verification surface any bioregional federation protocol must satisfy.

**C5** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Bioregionalism]
The Bioregionalism tradition specifies bioregional scope as a constraint on which level of governance is operationally legitimate, not as a preference: political-administrative boundaries should match ecological-and-cultural ones, no organization higher than necessary should be invoked, and power diffuses to the smallest competent scale — establishing bioregional scope as a constraint-primitive structurally parallel to Ostrom's design principles (empirical patterns, not optional cultural stance) rather than as an aesthetic or identitarian commitment.

**C6** [confidence: high] [anchor: §Characteristics · orn:p2p-wiki.page:Bioregional_Governance]
Bioregional governance operates through multi-stakeholder, polycentric, and deliberative processes by design — with the additional constraint over generic polycentric-governance that the scope of the decision centers is bounded by ecological-and-cultural wholes (watersheds, biogeographic regions, bio-cultural identities) rather than by convenience or protocol-team preference — establishing bioregional scope as polycentric governance with a load-bearing ecological-cultural scope constraint, not polycentric governance with a bioregional flavor.

**C7** [confidence: medium] [anchor: §Description · orn:p2p-wiki.page:Bioregionalism]
The Bioregionalism corpus positions bioregional scope as compatible with but distinct from nation-state governance: bioregions often cross political-administrative boundaries (e.g., watershed-based regions crossing state / provincial / national jurisdictions), which requires that any bioregional-scope coordination protocol carry multi-jurisdictional commons-law scaffolding rather than single-jurisdiction charter logic, extending the legal-institutional layer specification of `spore.connection.commons-law-and-charter-lineage` to the supra-jurisdictional case.

**C8** [confidence: high] [anchor: §Description · orn:p2p-wiki.page:Bioregion]
The bioregion concept in the source tradition operates as "life-place" — a place defined by its material metabolism (watersheds, foodsheds, fibersheds) and by the human cultures that have grown within that metabolism — making bioregional scope inseparable from bio-cultural identity in the tradition: the scope is not a geographer's box drawn from above, it is a lived-in-place specification that participants are continuously making through reinhabitation, land-relation, and metabolic stewardship.

**C9** [confidence: medium] [anchor: §Characteristics · orn:p2p-wiki.page:Bioregional_Governance]
Bioregional governance is framed in the source tradition as "a system capable of generating new proposals of high value from a wholeness approach" — the wholeness framing is operational, not mystical: it names the requirement that bioregional-scope decisions integrate ecological, economic, cultural, and legal-institutional dimensions rather than decomposing them into separable silos, which directly maps onto the Phase A §8c three-layer coordination-stack insight that governance-pattern, semantic-economic, and legal-institutional layers must be carried together for the scope to hold.

**C10** [confidence: medium] [anchor: §Description · orn:p2p-wiki.page:Bioregionalism]
Bioregional-scope canon in the tradition explicitly declines the generic "decentralized" / "peer-to-peer" label as sufficient for bioregional coordination: the scope requires structural grounding in ecological-and-cultural wholes, legal-institutional scaffolding (per `spore.connection.commons-law-and-charter-lineage`), and material-accounting ground (watersheds, foodsheds), absent which a nominally-decentralized protocol at bioregional scope reproduces the decentralization-theater pattern (per `decentralization-theater` slug) at the scale ceiling of the mycelial-holarchy.

## 9. Review Claims

- **R1**: The `mycorrhizal-federation-protocol` should explicitly carry `bioregional-scope` as a **constraint-primitive** at the federation topology's outer boundary — structurally parallel to how `power-capture` is a constraint-primitive at the authorization surface — rather than treating bioregional scope as optional scope-talk. The constraint specification should name three conditions any federation claiming bioregional scope must satisfy: (a) the federation's claim extent cannot exceed the watershed / biogeographic region's material boundary without breaching the constraint; (b) the federation's governance structure cannot be architected as a single-owner platform, per the "no 501(c)(3) can legitimately represent a bioregion" clause; (c) the federation's membrane institutions must be disciplined by institutional-self-negation per the dual-structure pattern already specified on `Bioregional_Commoning` (covered by `pm.connection.bioregional-coordination` C5). The protocol text should also preserve the four-level governance ladder (centralized → decentralized → polycentric → bioregional) and name bioregional governance as polycentric-plus-ecological-cultural-scope rather than polycentric's synonym. [target: spore.mycorrhizal-federation-protocol] [concept: bioregional-scope]
  supported_by: C1, C2, C3, C5, C6.
- **R2**: The `mycelial-holarchy-architecture` should name **bioregional-scope as the outer boundary of the mycelial-holarchy's scale-up**, rather than leaving the holarchy's scale ceiling unspecified. Above the bioregional level, composition is between-federation (`boundary-commoning` scope per `spore.connection.boundary-commoning` §3) rather than within-federation, because the commons-scope authority argument fails above bioregional scope (no organization can legitimately represent supra-bioregional commons per C3). The architecture should distinguish bioregional-scope coordination (within-holarchy, legal-institutional scaffolding via commons-law) from supra-bioregional composition (between-holarchy, via boundary-commoning and cosmo-local-production primitives), and should import the Phase A §8c three-layer stack as an architectural concern: governance-pattern + semantic-economic + legal-institutional layers are the minimum surface to resist the decentralization-myth-bundle at bioregional scope, and any two of three is insufficient. [target: spore.mycelial-holarchy-architecture] [concept: polycentric-governance]
  supported_by: C2, C5, C6, C9.
- **R3**: The `commons-law-and-charter-lineage` bridge note (Wave 2) should import `bioregional-scope` as the **outer boundary condition** that commons-law's legal-institutional scaffolding attaches to, closing a spec gap in the Wave 2 note: commons-law specifies what charter/trust backs the commons-scope authority, but does not specify the territorial extent over which that authority legitimately extends. Bioregional-scope supplies that extent — grounded in the material-accounting substrate of watersheds / foodsheds / fibersheds (C4, C8) and the legal-institutional constraint against single-owner-platform representation at bioregional scale (C3). The Wave 2 note's three-layer-stack R2 claim (targeting `spore.mycorrhizal-federation-protocol`) should be extended to name bioregional-scope explicitly as the outer boundary of the legal-institutional layer, alongside the commons-law layer's internal charter/trust specification. This also addresses the multi-jurisdictional case (C7): bioregional scope may require multi-jurisdictional commons-law scaffolding (treaty-framework, federated trust) rather than single-jurisdiction charter logic. [target: spore.connection.commons-law-and-charter-lineage] [concept: commons-law]
  supported_by: C3, C4, C7, C8.
- **R4**: The `boundary-commoning` bridge note should be extended to name **bioregional-scope as the material boundary condition at which within-commons / between-commons scope distinctions attach to ecological reality** rather than remaining abstract. Within-commons rules (Ostrom DPs) and between-commons rules (De Angelis boundary commoning) are both, at bioregional scope, grounded in watershed / biogeographic / bio-cultural boundaries that the coordination surface does not choose. The scope distinction the Wave-1 note establishes — field/membrane rules govern WITHIN a field; boundary commoning names coordination BETWEEN fields without merger — should be paired with the observation that at bioregional scope, "WITHIN" and "BETWEEN" are materially specified by watersheds and bio-cultural identity, not by protocol-team preference. This closes a scope-grounding gap in the Wave-1 note and aligns it with the `bioregional-scope` constraint-primitive introduced in this Wave-3 note. [target: spore.connection.boundary-commoning] [concept: boundary-commoning]
  supported_by: C1, C4, C8.
- **R5**: The `mycorrhizal-federation-protocol` should name **bioregional-scope + decentralization-theater interaction** as a first-order power-capture concern, inheriting the Phase A §8d decentralization-myth-bundle discipline. A federation claiming bioregional scope without carrying all three coordination-stack layers (governance-pattern + semantic-economic + legal-institutional) exhibits decentralization theater at bioregional scale: nominally-distributed topology, bioregional branding, but centralized admin keys / governance concentrations / single-owner-platform structure. The protocol should explicitly decline the "peer-to-peer at bioregional scope" label as sufficient, requiring instead the three-layer minimum surface, the dual-structure membrane-institution discipline (per `pm.connection.bioregional-coordination` C5), and bioregion-governed (not protocol-team-authored) specification of what counts as within-scope (per the bioregioning process-over-map caution, §7). [target: spore.mycorrhizal-federation-protocol] [concept: power-capture]
  supported_by: C3, C5, C10.
## 10. Attribution

Wiki sources cited in this note are from the P2P Foundation wiki (https://wiki.p2pfoundation.net), licensed CC BY-SA 4.0. Source claims in this note anchor to `orn:p2p-wiki.page:Bioregionalism`, `orn:p2p-wiki.page:Bioregional_Governance`, `orn:p2p-wiki.page:Bioregion`, and `orn:p2p-wiki.page:Bioregional_Coordination_Framework` via the wiki-RID-in-anchor convention. This note is derived-claims dominant and is published under CC BY-SA 4.0. Derivative claims in this note inherit ShareAlike obligations for downstream use. See `docs/research/connections/LICENSE-WIKI-DERIVED.md` for the repo-level notice.

This Spore-side note does not re-cover the extensive Bioregionalism corpus already anchored in `pm.connection.bioregional-coordination` (Pass 1, 15 C-claims across 12 primary pages including `Bioregional_Hub`, `Bioregional_Commoning`, `Bioregional_Knowledge_Commons`, `Bioregional_Flow_Funding`, `Bioregional_Financing_Facilities`, `Bioregional_DAOs_vs_Guild_DAOs`, `Bioregional_Cosmolocalism`, `Bioregioning`, and `Category:Bioregional`). Readers needing PM-side operational detail at bioregional scope should cite the PM note; this note focuses the Spore-facing constraint-primitive framing and the three-layer-stack pairing with `spore.connection.commons-law-and-charter-lineage`.
