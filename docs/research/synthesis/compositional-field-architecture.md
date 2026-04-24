---
doc_id: spore.synthesis.compositional-field-architecture
doc_kind: research
research_subkind: synthesis_note
status: draft
depends_on:
  - spore.commitment-pooling
  - spore.project-vision
  - spore.research.external.ruddick-2026-commitment-pool
  - ic.connection.johar-metacognition-stack
relates_to:
  - regen-ai.essays.beyond-claims-engine
  - regen-ai.essays.funding-at-the-frontier
  - indigenomics.methodology.ruddick-commitment-pool-bridge
  - sos.workshop-shape-proposal
disposition: name the shared architecture across sibling projects
promotion_status: defer
concepts:
  - compositional-field-architecture
  - commitment-pooling
  - dream-to-fulfillment-spectrum
  - reflexive-contribution-tagging
  - compositional-witness
  - flow-first-accounting
  - commons-of-care
  - wise-legibility
  - untracked-allocation
  - cosmo-localism
  - dark-matter-legibility
  - immanent-steward
  - six-modules-commons-of-commons
  - morphology-topology-distinction
governance_clusters:
  - indigenomics-ai:commitment-pooling
  - salishoakseeds:living-atlas
  - regen-ai:layer-stack
  - spore:coordination-grammar
---

# Compositional Field Architecture

**Status:** draft v0.1 — 2026-04-23. The skeleton was seeded as a tactical handoff; this version is substantive. It is the Spore-side articulation of an architecture that several adjacent essays and projects have been converging on from their own angles — the same shape, viewed through a coordination-grammar lens rather than an economic or application lens. Companion reading (this doc leans on all of them): *Beyond the Claims Engine: Toward the Stewardship of Commitments* and *Funding at the Frontier* (Regen AI essays, 2026-04-23); *Commitment-pool route graphs for finance and mutual aid* (Ruddick 2026); *Relational Agency and Holons* (Spore foundations); the IndigenomicsAI Ruddick bridge (X3); the SalishOakSeeds workshop-shape proposal (2026-04-13); Indy Johar's metacognition-stack corpus and related writing on dark matter, cultivation, and recursive stewardship.

## Purpose

Several related projects — **Indigenomics AI**, the **SalishOakSeeds Living Atlas**, **Salish Sea Dreaming**, **Regen AI + KOI**, **Spore** itself, **Intelligence Commons**, **Poietic Match**, and the **BKC / Herring Pool** bioregional work — have all been building the same underlying architecture with different content, different lenses, and different application domains. This doc names that architecture explicitly so that each project can (a) recognize its own primitives as instances of shared primitives, (b) coordinate on substrate choices that affect more than one project, and (c) stop re-inventing the same infrastructure in parallel.

The headline: **a compositional field architecture is infrastructure for the stewardship of witnessed commitments, across past evidence, present capacity, and future pledge, held together by cultivation rather than command.** What each project contributes and what each refrains from becomes legible once the shared architecture is named.

This is not a specification. It is a *recognition* of a pattern that already exists in distributed implementation. The specification work falls out of it — see §9.

---

## 1. The shared architecture

Regen AI's articulation (*regen-ai-vision.md*) names a five-layer stack that, once noticed, shows up in every sibling project:

1. **Evidence** — what is known (assertions, measurements, records, oral testimony, semantic search over a knowledge graph).
2. **Commitment** — what is promised or certified (intents, offers, needs, promises, attestations of past action).
3. **Gap** — what is missing (where evidence does not yet cover commitment; where commitments do not yet cover need).
4. **Consequence** — what follows when evidence meets commitment (settlement, issuance, governance actions, retro recognition).
5. **Learning** — how pattern accumulates across cycles so subsequent care is wiser than earlier care.

The same five-layer stack renders in each sibling project:

| Project | Evidence | Commitment | Gap | Consequence | Learning |
|---|---|---|---|---|---|
| **Indigenomics AI** | books, 25 themes, IPEA baseline, 350 legal cases, survey | RAPs, survey intents, offer/need tags | bottom-up vs. top-down viz | Sept 26 activation, policy-readable artifacts | Phase 5 → Phase 6 corpus growth |
| **SalishOakSeeds Living Atlas** | mapping workshops, PGS surveys, steward observations | pledged commitments from closing circles | relational gaps surfaced during mapping | flow-funding pilot settlement | TIBC atlas slice travels |
| **Salish Sea Dreaming** | dream contributions, participant narratives | poietic commitments (*dreams the bioregion dreams us*) | unvisited regions of the dream-field | curator shows, dome immersion | seasonal composition memory |
| **Regen AI + KOI** | KOI graph, sensor streams, evidence linking | claims engine lifecycle + commitment pools | what's missing surfacing | retro impact certs, ledger anchoring | federated convergence across orgs |
| **Spore + IC** | source claims, bridge notes | review claims, canon proposals | preserved tensions (H¹) | ADR bundles, corpus decisions | learning field convergence board |

The column-by-column alignment is not decorative. Each project is a functioning instance of the same five-layer architecture at different scale, content, and governance. What Spore's coordination grammar does for cross-project learning is the same architectural move Ruddick's commitment-pool formalism does for economic flow and Waka's compositional witness taxonomy does for perceptual provenance. The pattern is one thing. The instantiations are many.

---

## 1b. Governing design principles

Before any primitive, a set of design principles shapes every primitive choice. These come from multiple traditions — some from Ruddick, some from Bauwens, some from Johar, some from the P2P wiki commoning lineage, some from Kelly / Carse. They are stated without priority ordering; each is co-equal, and each is a live constraint on every primitive below.

**P1. Wise legibility (Ruddick).** *"What communities need is not perfect visibility, but wise legibility. Enough visibility for stewardship. Enough privacy for dignity. Enough accountability for repair. Enough local judgment for the record to remain human."* (Journal of a Grassroots Economist.) The guiding question at every primitive: *what must remain contestable, partial, or locally held for the graph to stay human?*

**P2. Untracked allocation.** Every commitment pool reserves an explicitly non-graph-legible portion (~15–25%) for stewardship work that does not compress into assertions: slow relational repair, ceremonial knowledge, care that cannot be rendered. The fraction is visible; the contents are opaque. *Some part of stewardship must remain allocable without graph proof, or the graph will eventually colonize the field it claims to serve.* (Beyond the Claims Engine, §6.)

**P3. Cosmo-localism (Bauwens).** *"What is heavy should be local, and what is light should be global."* Applied to the architecture: **heavy physical flows** (restoration labor, seed stock, material, hosting, custody) **= local pools**. **Light flows** (witnessing methods, primitive vocabulary, cross-project learning, ontology versions) **= global substrate**. The architecture is not federated-by-default; it is federated *where cosmo-local routing makes it strong* and sovereign-by-default *where cosmo-local routing makes it fragile*.

**P4. Dark matter legibility (Johar).** The substrate of obligation and coupling through which value actually flows is largely invisible in standard accounting (Johar calls it *dark matter*). Governance at bioregional and longer scale requires rendering some of this dark matter legible — supply chains, reciprocity flows, infrastructural interdependencies — so it becomes governable. This principle composes with *P1* and *P2*: some dark matter must be rendered legible (Johar); some must be held wise (Ruddick); some must remain unrendered altogether (untracked allocation). The architecture must do all three at once, without collapsing them.

**P5. Commoning as verb (Linebaugh, via P2P wiki).** Commons are not static resources; they are what is produced by commoning — the activity of reproducing the relations that hold them. *"I want a verb for the commons. I want to portray it as an activity, not just an idea or material resource."* The architecture does not describe a field; it is itself an instrument participants use to commons something into being. Substrate neutrality ends where the substrate pretends the field is already there.

**P6. Infinite game over finite game (Carse, via Ethereum Foundation).** *"A finite game is played for the purpose of winning. An infinite game for the purpose of continuing the play."* The Ethereum Foundation's *Infinite Garden* framing — *"nurture and grow, but do not control"* — is the operative stance. Primitive choices that optimize for a single outcome at the expense of the capacity to keep coordinating fail the infinite-game test even when they succeed at their named goal.

**P7. Immanent steward (Kelly, P2P wiki).** *"The steward is immanent to the system — convening, listening for weak signals, adjusting feedback loops."* Stewards are inside the field, not outside it. This rules out two common drift patterns: (a) the benevolent-operator stance that treats stewardship as a lever external to the system, and (b) the no-governance stance that confuses absence-of-command with presence-of-care.

**P8. Regenerative desire (Johar).** *"If extractionism was driven by the engineering of artificial scarcity and desire for possession, a regenerative economy will be driven by the cultivation of living desire — desire oriented toward participation, belonging, and mutual thriving."* The upstream of the dream-to-fulfillment spectrum (§3) is regenerative desire, not scarcity-desire. Primitives that reproduce scarcity-desire at the architectural level will produce extractive dynamics regardless of how beautifully they are described.

These eight principles are what makes the rest of the architecture coherent. Tools that satisfy the primitives but violate the principles are tools we should refuse, not tools we should ship.

---

## 2. Unified primitive vocabulary

The P1–P6 primitives that the Indigenomics AI week plan uses are cross-project primitives in disguise. Here they are named for general use, with an explicit **morphology / topology** distinction drawn from Johar's metacognition stack.

Johar's stack names two layers that matter here. **Layer 8 (Morphological):** *a reasoning-shape primitive — not just the output but the form through which it moves (branching, convergent, recursive, fragmented).* **Layer 9 (Geometric / Topological):** *positional encoding for concepts, where assumptions generate topological boundaries.* The distinction is not cosmetic. Topology describes shape-of-space (connection, continuity, overlap). Morphology describes form-through-stages (developmental arc, transformation sequence). Sheaves implement both formally: the coboundary δ_F is a morphological instrument (shape of inconsistency between local sections); the stalks are geometric (positions in vector space). This is the mathematical register in which the compositional field's coherence can be measured without collapsing into any single authority's view.

With that distinction named:

- **P1 — Discourse graph (questions / assertions / evidence / hypotheses).** Topology: the shape of what is linked to what. Morphology: how assertions mature through witness. A question that has been asked becomes a node; novelty is detected by embedding similarity; claims emerge; evidence links auto-propagate. First live cross-project use of Spore's discourse-as-governance pattern outside Spore's own corpus.
- **P2 — Commitment pooling (the dream-to-fulfillment spectrum).** Morphology: stages of becoming from regenerative desire through witnessed fulfillment (§3). Topology: how commitment pools compose across kin-groups, Nations, and landscapes via route graphs (Ruddick). The formal backbone is CVLE × RVLFHG × the commitment tuple (see X3 bridge note).
- **P3 — Layered transparency + bottom-up gap visualization.** Topology: the relation between transparency tiers (a presheaf structure — tier-4 full detail projects down to tier-1 aggregate). Governed by *wise legibility* (P1) and *untracked allocation* (P2 above). The viz is the most demo-worthy Sept 26 artifact; the principle is that the gap itself is a first-class object, not a derived metric.
- **P4 — Stigmergic foraging + reflexive contribution tagging (reinforce / bridge / frontier).** Morphology: the developmental signature of a contribution (consolidation, connection, extension). Topology: the visited / unvisited regions of the field. Borrowed from SalishOakSeeds' workshop proposal (2026-04-13).
- **P5 — Temporal filter + amendment callback.** Morphology: how legal and commitment trajectories unfold through time. Topology: the χ axis (past certifications vs. future promissory commitments, Ruddick). The same UI is both precedent browser (χ=past) and fulfillment tracker (χ=future).
- **P6 — Visual grammar atlas.** Topology: consistent visual encoding across the field. A DRY schema manifest with three coloring modes (ontology / thematic / epistemological). The primitive-consistency backbone.

Each project uses these primitives with different content. The morphology/topology distinction lets us say precisely which aspect of a primitive is doing what work in each use.

---

## 3. Dream-to-fulfillment morphology

The deepest-reach primitive is the **morphological arc from regenerative desire to witnessed fulfillment**. It carries one lifecycle:

> **dream → vision → care → offer / need → promise → witnessed commitment → fulfilled-and-witnessed**

Read left-to-right, this is *poiesis* — bringing-into-being. Read right-to-left, this is *retroactive recognition* — the evidence at the end was a dream at the start, traceable backward. Three properties of the spectrum are architecturally load-bearing:

**(i) Gradient, not binary.** Anyone can place themselves anywhere on the spectrum. "Expression of care" is first-class; no one is required to commit. Workshops that ask for explicit commitment from everyone coerce by default; a spectrum UI invites participation at the intensity the person is ready for. The SalishOakSeeds workshop design makes this explicit; the Ruddick formalism admits it via pool admissibility rules that do not require the pledge to be strong.

**(ii) Giving-oriented.** Commitments describe *what is offered* (future promissory) or *what was given and witnessed* (past certification). Ruddick's commitment tuple `C = (i, j, K, b, q, χ, t, e, r, m)` is issuer-centric — the issuer names what they offer or attest. Needs and wants are the complementary dual and deserve equal witnessing weight — mapping gaps is what makes *"the bottom-up would pass the top-down"* (K, Victoria demo) concrete, not merely rhetorical.

**(iii) Dyadic χ, triadic register.** Ruddick's χ is dyadic (past / future). Poietic Match adds a present register — *capacity* — which is a **field-state** rather than a commitment tuple. Present capacity can generate commitments but is not itself one. Treating present as a third χ value would flatten a real category boundary; treating it as a separate field-state layer keeps the formalism honest while still making present-tense coordination first-class. (This is the precision move from *Beyond the Claims Engine* §3, adopted here.)

The upstream end of the spectrum — *dream* — is Johar's **regenerative desire**: desire oriented toward participation, belonging, and mutual thriving, as distinct from scarcity-desire oriented toward possession. This is not metaphorical. An architecture whose upstream primitive is scarcity-desire will produce extractive dynamics at every downstream layer. An architecture whose upstream is regenerative desire can hold the rest.

The downstream end — *fulfilled-and-witnessed* — composes with Ruddick's Gift / Loan / Payment routing triad (Steiner-derived). A fulfillment can settle as gift (seeded without expected return), as loan (proof-of-coverage, later payback or renewal), or as payment (near-term settlement, demurrage if idle). These are not three pools; they are three routing modes through the same pool.

**Proof-of-scale.** Sarafu (Kenya, 26,000 users, ~$320K cumulative volume, years in production) demonstrates that the pledged → verified → active → fulfilled lifecycle runs at field scale under Ostrom-style commons governance with Ruddick's pool mechanics. The question for the compositional field architecture is whether the same pattern survives leadership transitions and generational turnover, not whether it works in the first place.

---

## 4. Reflexive contribution tagging

From the SalishOakSeeds Apr-13 workshop proposal, adopted here as a compositional-field primitive: every contribution self-tags as one of three types.

- **Reinforce** — deepening an existing thread.
- **Bridge** — connecting two previously-separate groups or themes.
- **Frontier** — opening new ground no one else has named.

This is first-person-reflexive foraging. The contributor sees, in real time, whether their voice is consolidating, linking, or exploring. Aggregated across a field, the tags produce three aligned signals:

- **Reinforce distribution** — where the field is maturing (a morphological signature of convergence).
- **Bridge distribution** — where the field is knitting across previously-isolated clusters (a topological signature of connectivity growth).
- **Frontier distribution** — where the field is expanding into unnamed territory (a morphological signature of emergence).

Combined with P4's stigmergic foraging overlay, this gives the field a live legibility surface that does not require analyst interpretation to be useful. Applied to the P3 gap-over-time viz: reinforce/bridge/frontier histograms per time-window show not just gap size but **how community effort is being allocated over time** — which is a different, richer story than the bottom-up-passing-top-down headline alone tells.

---

## 5. Compositional witness taxonomy

From Waka (documented in the Regen AI `regen-claims-vs-waka` essay): witness is not a single boolean. It is a typed, stackable record per assertion, composable at read-time. The v1 taxonomy:

| Witness type | Tier | Notes |
|---|---|---|
| **Self-attestation** | v1 | Every assertion carries at least self-attestation. |
| **Schema conformance** | v1 | Automated check against an agreed ontology / rule-set (CEL-style). |
| **AI classification** | v1 | Modal / confidence scoring by LLM classifier, logged with model version. |
| **Peer review** | v1.5 | Reviewer-signed attestation with rationale. |
| **PGS quorum** | v1.5 | Participatory Guarantee System group-level consensus. Culturally resonant for Indigenous contexts (group-level, not single-authority). |
| **ROLA / memory-based witness** | v2 | Ruddick Appendix B — oral institution attestation; admits culturally-appropriate witnessing that never becomes written. |

Multiple witnesses stack on one assertion. A claim with (a) self-attestation + (b) AI classification at 0.87 + (c) a PGS quorum + (d) a peer review from a named reviewer carries four independent witnesses, each with its own method, signer, and signature. Downstream consumers choose the granularity they want.

**AT Protocol labelers** (atproto.com/specs/label) are a live precedent: externally-authored, stackable, portable metadata over shared records, signed and composable at the point of consumption. Anyone arguing that compositional witnessing is theoretical can be pointed at a running Bluesky instance.

The `backed_by` relation (introduced in *Beyond the Claims Engine* §Coda.2) is architectural-level: *attestation backed_by commitment*. An attestor who also pledges conditionally on the attestation holding is at exposure to the same reality the witness records. Credibility is enhanced without collapsing speech-act distinctness.

---

## 6. Gardens, commons, and the commons of care

The metaphor the architecture earns is **garden**, not engine — and *garden* composes with a specific lineage: Linebaugh's *commoning as verb*, Kelly-on-Carse's *infinite game*, the Ethereum Foundation's *Infinite Garden*, Johar's *cultivation of agentic capacity*, and Ruddick's *commons of care*. The lineage is not a stylistic choice. Each of these authors makes an architectural claim that the others also make: coordination at complex-systems scale is cultivation, not control.

Four anti-patterns sharpen the distinction:

- **Not a farm.** Farms are industrial, single-crop, yield-optimized, place-indifferent. A farm logic for the compositional field maximizes extractable signal per unit of witness — the GDP / IPEA drift.
- **Not a wilderness.** Wildernesses are un-stewarded. A wilderness logic lets anyone contribute anything without curation — gets captured by loudest voices, fails the wise-legibility test.
- **Not a museum.** Museums preserve fixed forms; no reproduction. A museum logic freezes corpora as canonical and doesn't let them evolve through use.
- **Not a product.** Products are owned, branded, controlled, and eventually sold. A product logic against a field that is supposed to be collective commons is a category error about what is being made.

A **garden** is cultivated, reproductive, diverse, place-specific, seasonal, tended. Gardens have garden-keeper roles (*seed-holder, soil-keeper, weaver, harvester, witness*), seasonal cycles with ceremonial transitions, anti-patterns they have to be defended against, and a default toward reproducing the conditions that let the garden continue. These are the operative verbs of the architecture at practitioner scale.

The garden's reproductive substance is what Ruddick names **commons of care** — *"the modal commons: the most foundational, highest-prevalence form of commoning, underwriting the viability of every other commons by enabling trust, coordination, and rule-maintenance."* This is the layer Spore's *relational-agency-and-holons* canon calls *care as primary coordinating practice* — *"coordination without reproduction is extraction."* It is also where Carol Anne's *"wellness is the new GDP"* lands with an economic-substantive counterpart: the wellness GDP of a commons of care is the reproductive labor that holds the field together, and an architecture that does not make it visible is an architecture that continues to naturalize it as background.

The **immanent steward** (Kelly) is the role-level primitive for this layer: *convening, listening for weak signals, adjusting feedback loops, inside the system rather than outside it.* This is not "moderator" or "admin." It is the operational form of Carol Anne's *"quiet witness"* — the same figure, different name.

---

## 7. REA + ValueFlows + MFA + Ruddick flow-stock substrate

Indigenous economies are historically **flow-first**: salmon runs, berry seasons, cedar groves, stewardship cycles. GDP / IPEA is a **stock-accumulation lens** — income earned, wealth held, balance-sheet totals. The two lenses measure different things. The compositional field architecture's economic substrate is flow-first by default, with stock readouts available as derived views.

Three existing vocabularies supply the formal substrate:

- **REA** (Resources · Events · Agents — Geerts & McCarthy 1982). Events increment or decrement resources and bind to agents. Ruddick's commitment tuple is a typed REA event with temporal orientation, scope, and governance guards.
- **ValueFlows** (valueflows.ai). The concrete, implementable REA vocabulary. Poietic Match adopts it as interop target. Between Ruddick pool settlement and retro-cert issuance (*Funding at the Frontier* §7), ValueFlows is the contribution-accounting layer: which resources were contributed, by which agents, against which processes, producing what outputs. This is the layer that lets retro certs recognize the compositional contribution (dream, evidence, capacity, commitment, witnessing, stewardship) rather than only the final actor.
- **MFA** (Material Flow Accounting). Physical flows (kg / year) through the economy — stocks are buildings and goods-in-use, flows are extraction, trade, waste. Not itself a substrate for the field, but the measurement tradition flow-first accounting is consistent with.

The architectural payoff: **K's bottom-up-passing-top-down visualization (P3) is the flow-first counter-measurement under a stewardship lens.** Institutional sources (StatsCan, ISC, CIRNAC) are stock-first by methodology; bottom-up contributions from survey / interviews / commitment pools / community stewardship records are flow-first by substrate. The gap narrows over time not because institutional methodology improves, but because flow-first accounting accumulates a record the stock-first lens was never trying to see.

---

## 8. Sibling activations and six-modules nesting

The architecture lands at multiple scales simultaneously. The P2P wiki's **Six Modules of the Global Commons** gives the vertical scale vocabulary: **NEIGHBORHOOD → BOROUGH / TOWN → CITY / REGION → TERRITORY → SUBCONTINENT → PLANET**, with **networked subsidiarity** (functional over territorial — a river-commons crosses state boundaries). At each scale, the same architecture instantiates with different content, governance, and witness scope.

Near-term activation sequence:

- **April 30, 2026 — Indigenomics Economic Survey launches.** First-evidence event at CITY / REGION scale (initially survey respondents across First Nations, with Nations choosing their own participation mode). Establishes the Ruddick-shaped ingest tuple `(C, M, T, K, W)` and the commons-of-care consent posture in production.
- **May–July 2026 — Victoria Landscape Hub mapping + flow-funding pilot.** NEIGHBORHOOD / BOROUGH scale. SalishOakSeeds workshop; Living Atlas; reinforce/bridge/frontier tagging; commitment spectrum as Closing-Circle lens; first operational use of the pool + matching primitives at bioregional ground level.
- **September 14–19, 2026 — TIBC Vernonia.** SUBCONTINENT scale. First Bioregional Congress in 17 years. Victoria atlas slice travels; federation with other landscape groups; first cross-bioregional instance of the shared architecture.
- **September 26, 2026 — Indigenomics Now.** Indigenous economic sovereignty scale (cuts across the Six Modules as a *territorial of shared Indigenous economy*, not a geographic scale). 24-hour activation anchored to the full moon. Chat-to-graph feedback loop demonstrated.
- **Late 2026 – 2027 — Herring Pool deployment.** Multi-year bioregional case study per the *Funding at the Frontier* §8 design. The smallest-runnable pre-pilot precedes it; Herring Pool is the first full closed-loop evidence → commitment → execution → witness → retro-cert cycle at bioregional scale.

Networked subsidiarity means these scales are not a strict hierarchy. A river crosses political boundaries; a Nation's sovereignty is not exhausted by the landscape it inhabits; an online discourse field crosses all of them. The architecture supports functional-over-territorial composition, which is what allows the same primitive to hold at all scales without any scale claiming authority over the others.

---

## 9. What falls out

Because the shared architecture is named explicitly, a set of artifacts that would otherwise need separate authoring fall out of it structurally:

- **X1 Regen ↔ Indigenomics boundary memo.** The shared substrate is §1 and §1b of this doc. The separate parts (data sovereignty, funding, governance, consulting data, branding) are what the boundary memo specifies on top. The memo becomes a short sovereignty statement, not a full architectural treatment.
- **X3 Ruddick → Indigenomics-P2 bridge note.** Already drafted (see `indigenomics.methodology.ruddick-commitment-pool-bridge`) as the Indigenomics-specific instantiation of §3 and the Ruddick formalism.
- **Carol Anne-facing framing.** The most portable framings for external conversation are: *"infrastructure for the stewardship of commitments"*, *"commons of care"*, *"wellness GDP"*, *"the bottom-up passes the top-down"*. Avoid *"claims engine"*, *"data platform"*, *"AI chatbot"*.
- **Will Ruddick reply thread.** Once X3 and this doc stabilize, the reply names the Indigenomic instantiation of CPP, the oral-institutions / ROLA Appendix B mapping to potlatch and RAP commitments, the three-scale sibling activations (Victoria → TIBC → Indigenomics Now), and the commons-of-care + wise-legibility + untracked-allocation composition.
- **Clare + Brandon conversation for Victoria workshop alignment.** The shared substrate is already named in the SalishOakSeeds workshop proposal (dream-to-fulfillment, reinforce / bridge / frontier, Living Atlas as portfolio home). This doc gives a single reference point the Victoria team can cite without having to re-explain the pattern at each meeting.
- **Regen AI internal framing.** The essays already articulate this side. The contribution from this doc is the cross-project legibility: Regen AI's architecture is the same architecture as Indigenomics AI's, SalishOakSeeds', Spore's, and SSD's, which is a different strategic positioning than *"Regen AI's differentiated offering."*

---

## 10. Open threads (deliberate gaps in v0.1)

Three threads this doc names but does not resolve. Marked open so subsequent revisions know where to expand.

**10.1 Jurisprudence-as-interface.** If 350 legal cases as past-oriented certifications sit in the commitment graph, and amendment events are temporal triggers on the same graph, then a user traversing *amendment → commitment formation → witnessed outcome* as one navigable civic flow becomes possible. For lawyers this is a research tool. For Nations this is a self-governance dashboard. For citizens this is civic literacy. Each reader gets a different lens on the same compositional field. Austin Wade Smith's *"every measure / metric is an agreement, and bioregions and locales must govern their own"* is the philosophical handle; the UX is unspecified. Worth pulling on in its own note.

**10.2 Listening Intelligence as UI stance.** The *immanent steward* is a role; the Listening Intelligence principle extends it into a UI posture: every surface starts receptive. Dreams are heard before interpreted. Offers are witnessed before valued. The whole architecture biased toward receptive witnessing, as distinct from *Living Intelligence*'s active metaphor. Carol Anne's *"quiet witness"* is the precedent. What this means for chat, for graph, for survey onboarding is under-specified.

**10.3 Commons-of-commons operational detail.** The Six Modules vocabulary gives scale; networked subsidiarity gives composition logic. What's not yet specified: how does a pool at one scale compose into a pool at a larger scale without the larger pool absorbing the smaller's governance? Ostrom's design principles point at subsidiarity; the architectural primitive for it is not yet named. Likely answer: sheaves again — restriction maps between scales preserve local autonomy while allowing aggregation of witnesses and commitments where gluing conditions hold. Worth a dedicated note once one sibling activation has actually composed upward.

---

## Closing

The architecture exists because the problems it addresses exist. Phase 4.5 of Indigenomics AI is blessed; the Victoria landscape-hub workshop is scheduled; TIBC and Indigenomics Now are months away; Sarafu runs now; Herring Pool is designed. What is new is the recognition that all of these are instances of a shared pattern, and that stating the pattern makes coordination between them possible without any one of them centralizing the others.

The stakes of getting this right are the stakes *Beyond the Claims Engine* names: what gets witnessed is what gets coordinated, what gets coordinated is what gets fulfilled, what gets fulfilled is what persists into the next generation. The primitive choices we make in 2026 are the primitive choices that shape what of this work survives leadership turnover, climate pressure, funding churn, and the long morphological arc from dream to witnessed fulfillment across many seasons.

The architecture's own test is stated in *Beyond the Claims Engine*'s Monday coda and bears restating here: **does this primitive still function if every current operator is gone, and only the records, the institutions, and the witnesses remain?** If the answer is no, the primitive fails the seven-generations criterion (Haudenosaunee-originated; applied here as an architectural acceptance criterion, not as cultural adoption). The architecture exists to meet that test.

This doc is a pattern recognition, not a specification. The specification work is what each sibling project is already doing in its own register. What the recognition unlocks is that they are not doing separate work — they are, increasingly, doing a shared work under different names.

---

*v0.1 — 2026-04-23. Draft; promotion status deferred. Written as the Spore-side articulation of architectures the Regen AI essays (Beyond the Claims Engine, Funding at the Frontier, both 2026-04-23), the IndigenomicsAI X3 bridge note, the SalishOakSeeds workshop-shape proposal, and Ruddick 2026 converge on from their own angles. Companion reading: `regen-ai/docs/essays/` (all three essays); `indigenomics-ai/docs/methodology/ruddick-commitment-pool-bridge.md`; `sos/docs/workshop-shape-proposal-2026-04-13.md`; `spore/docs/foundations/relational-agency-and-holons.md`; `ic/docs/research/connections/johar-metacognition-stack.md`. Errors of integration are mine; the substantive moves belong to the cited authors and projects.*
