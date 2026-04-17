---
doc_id: spore.connection.stigmergy-as-coordination-substrate
doc_kind: research
status: draft
research_subkind: bridge_note
disposition: clarify existing term
depends_on: []
relates_to:
  - pm.connection.commitment-pooling-and-mutual-credit
  - pm.protocol
  - pm.grammar
  - pm.connection.rea-valueflows-semantic-layer
  - ic.connection.reputation-gaming-opposition
  - spore.connection.p2p-wiki-post-intake-synthesis
concepts:
  - stigmergy
  - coordination-substrate
  - commitment-pooling
  - reputation-market
  - gift-obligation
  - power-capture
project: pm
source_type: wiki_cluster
reviewed_at: 2026-04-17
sources:
  - url: https://wiki.p2pfoundation.net/Stigmergy_as_a_Universal_Coordination_Mechanism
    title: Stigmergy as a Universal Coordination Mechanism
    rid: orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism
    type: primary
    license: CC BY-SA 4.0
    note: "Summarizes Heylighen, F. (2015). Stigmergy as a Universal Coordination Mechanism: components, varieties and applications. In T. Lewis & L. Marsh (Eds.), *Human Stigmergy: Theoretical Developments and New Applications*, Studies in Applied Philosophy, Epistemology and Rational Ethics. Springer. URL http://pespmc1.vub.ac.be/papers/stigmergy-varieties.pdf"
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-synthesis-2026-04-17.md
    title: Phase A synthesis (§3b P-IC-8, §5 PM routing vocab correction, §7a stigmergy v2 concept)
    type: seed
  - path: /Users/darrenzal/projects/spore/tmp/phase-a-agent-b-autopoiesis-cosmolocal-platformcoop.md
    title: Phase A Agent B dossier (stigmergy formalization)
    type: seed
  - path: /Users/darrenzal/projects/spore/docs/research/connections/reputation-gaming-opposition.md
    title: Citation Cartels / Reputation Gaming — Opposition (Wave 2)
    type: cross-reference
---

# Stigmergy as Coordination Substrate

This is a supporting bridge note for Pass 2 Phase B Wave 3 targeting Poietic Match. It grounds the Phase A proto-claim P-IC-8 ("stigmergy as coordination primitive") and the PM vocabulary correction that reframes PM's `routing` as stigmergic-routing (Phase A §5). The P2P Foundation wiki page `Stigmergy as a Universal Coordination Mechanism` summarizes Francis Heylighen's 2015 formalization extending Pierre-Paul Grassé's 1959 coinage (originally describing termite mound-building via pheromone-modulated environmental traces) into a general-purpose coordination theory covering ant foraging, market price signals, Wikipedia editing, open-source commits, and agent-based software. The concept is frozen in v2 `concepts-p2p-wiki.yaml` with primary_project IC, but its most load-bearing Phase B target is PM: stigmergic coordination is the mechanism by which PM matching can scale without central state, without synchronous negotiation, and without presupposing that every agent pair has met before.

The disposition is `clarify existing term` because PM already uses "coordination substrate" as a frozen concept, and PM's commitment-pooling + mutual-credit protocol design presupposes environmental-trace dynamics (reputation signals, commitment history, co-presence in matching contexts) without naming them as stigmergic. Adopting stigmergy as the external cousin concept for PM's substrate vocabulary gives PM a published-prior-art framing that carries both (a) the generative claim — stigmergic coordination is demonstrably scalable and decentralizable — and (b) the constraint surface — stigmergic signals can be gamed, the cartel critique from `ic.connection.reputation-gaming-opposition` is a signal-gaming failure mode that any stigmergy-based PM canon must explicitly address. This note registers both, and cross-references the opposition note rather than duplicating its argument.

## 1. What stigmergy names

Grassé introduced stigmergy in 1959 to describe a coordination mechanism observed in social insects: termites and ants build complex structures not via centralized plan, hierarchical command, or pairwise negotiation, but via environmental traces — pheromone trails, construction marks, partially-built structures — that shape the subsequent behavior of agents encountering them. The trace is the coordination: each agent's action leaves a mark, and each subsequent agent's action is modulated by the marks already present. Heylighen's 2015 formalization (the paper the wiki page summarizes) extends this across domains — "ever-widening range of domains, from social insects, to robotics, web-based collaboration, and cognition" per the wiki abstract — and decomposes stigmergy into components (agent, action, trace, medium), varieties (sematectonic vs marker-based; quantitative vs qualitative; persistent vs transient), and applications (self-organization, division of labor, coordination without communication).

Three properties are load-bearing for any primitive that claims stigmergic lineage. First, **no central authority**: coordination emerges from trace-response, not from a coordinator issuing instructions. Second, **no planning**: agents do not need a shared model of the global goal; they only need the local rule for responding to traces. Third, **no temporal simultaneity**: agents need not be co-present; the trace persists in the medium and shapes behavior across time. These three together are what make stigmergy attractive as a substrate for large-scale decentralized coordination — they describe exactly the conditions under which matching, pooling, and allocation can scale without central state.

## 2. What PM's coordination-substrate vocabulary already does

PM's `coordination-substrate` concept (frozen v2: "the shared infrastructure — technical, linguistic, normative — that enables a set of actors to coordinate without bilateral negotiation for every act") names the same target that stigmergy names from the other direction. PM specifies the *what* (shared infrastructure, absence of bilateral negotiation); stigmergy specifies the *how* (environmental traces responded to by agents according to local rules). The two vocabularies are complementary: substrate is the surface, stigmergy is the mechanism that makes the surface work.

PM's commitment-pooling + mutual-credit + CVLE canon already presumes stigmergic dynamics without naming them. Commitment-pooling works because each pooled commitment is a trace that shapes the pool's subsequent allocation behavior; mutual-credit works because credit balances are traces that shape subsequent exchange proposals; CVLE's valuation phase works because prior valuations are traces that shape subsequent valuations. The matching algorithm PM is designing is, in its current form, stigmergic matching — agents publish offers/needs (traces), subsequent matching cycles respond to the accumulated trace field, and matches emerge without central negotiation. Naming this mechanism explicitly in PM grammar is a clarification of existing practice, not a new primitive.

## 3. The scope distinction PM should import

Heylighen's formalization separates two axes that PM canon has not yet distinguished, and adopting stigmergy as external cousin makes the distinction available:

- **Marker-based vs sematectonic stigmergy.** Marker-based stigmergy uses symbolic traces (pheromones, reputation tokens, ratings) that are separate from the work itself — the trace is *about* the work, not the work. Sematectonic stigmergy uses the work-state itself as trace — a half-built wall is its own coordination signal; a completed match is its own commitment signal. PM's reputation-market surface is marker-based; PM's commitment-pooling is closer to sematectonic. The two have different failure modes: marker-based is vulnerable to trace-gaming (see §5), sematectonic is vulnerable to trace-misreading (when the work-state underdetermines the next action).

- **Persistent vs transient traces.** Persistent traces (reputation scores, commitment history, accumulated mutual-credit balances) create long-horizon coordination; transient traces (active offers, current liquidity signals, in-flight matching attempts) create short-horizon coordination. PM matching combines both — a match depends on current offers (transient) filtered through reputation and history (persistent). The operational distinction matters because persistent traces accumulate gameable value (cartel target; see §5), while transient traces are harder to game at scale but less informative per coordination cycle.

These distinctions belong in PM grammar as a clarification of what PM's `coordination-substrate` actually enumerates — not as canon primitives, but as named axes along which PM primitives locate themselves.

## 4. Operational discipline: stigmergy is not self-sufficient

The wiki abstract summarizes Heylighen's claim that stigmergy is a "universal coordination mechanism" — the implication being that stigmergic coordination does not require extra scaffolding beyond agent + action + trace + medium. This framing can be read as anti-governance (coordination emerges spontaneously from local rules and shared medium, so no governance surface is needed) or as pro-governance (the medium, the trace-format, and the local rules are themselves governance decisions, just displaced from hierarchical control into infrastructure design). PM canon should adopt the second reading and state it explicitly.

Stigmergic coordination requires governance decisions at three surfaces that PM canon must carry: (a) **trace-format specification** — what counts as a trace, how traces are encoded, what structure traces carry; (b) **medium-integrity governance** — who maintains the shared medium, how medium-level capture is prevented, what happens when the medium degrades; (c) **trace-interpretation rules** — what local rule each agent follows in responding to traces, and how divergent interpretations are reconciled. Absent these three surfaces, stigmergic coordination degrades into either coordination-absent-coordination (each agent's local rule diverges, no coherent emergent behavior) or capture-by-infrastructure (whoever controls the medium controls the coordination — the power-capture failure mode §5 addresses).

This is the same operational discipline `boundary-commoning.md` imports from Ostrom's design principles: naming a coordination surface (commons-of-commons there; stigmergic substrate here) carries an obligation to specify the monitoring/sanctioning/conflict-resolution surface the tradition requires. Stigmergy-without-governance-surface is the decentralization-theater failure mode applied to coordination substrates.

## 5. Tension: stigmergic signals can be gamed

Wave 2's `ic.connection.reputation-gaming-opposition` (bridge note grounded in `Citation Cartels`) names the empirical failure mode for reputation-as-primary-signal coordination: coordinated cartels of agents can inflate trace signals (mutual citation, cross-reference, synthetic uptake) without corresponding underlying contribution, producing inflated reputation-traces that bias the coordination system toward cartel-favored allocations. This is the general form of Goodhart's law applied to stigmergic coordination — "when a measure becomes a target, it ceases to be a good measure" — with the additional precision that stigmergy's structural advantage (no central authority, no planning, no simultaneity required) also removes the audit points where central authority, planning, or synchronous review could catch trace-inflation.

For PM the tension is structural, not incidental. PM's reputation-market primitive is marker-based stigmergy; reputation-markets produce access/influence/rights convertibility; convertibility makes coordinated reputation-inflation economically rational; cartel formation is the rational equilibrium. PM's commitment-pooling primitive is sematectonic stigmergy (work-state is trace); it is less vulnerable to marker-gaming but still vulnerable to commitment-theater (parties publish commitments with no intent to fulfill, producing trace-inflation that biases pool allocation). The cartel critique applies to both stigmergic modes, with different attack surfaces.

This note does not attempt to resolve the tension — `reputation-gaming-opposition.md` is the authoritative opposition edge against PM's reputation-market primitive, and §2 of that note enumerates the three mitigation surfaces PM canon MUST specify before absorbing reputation-as-primary-signal (detection of coordinated inflation patterns, sanctions that decouple inflated reputation from allocation, attribution structures not reducible to citation-count proxies). This note instead *names the tension structurally* — PM's stigmergic coordination substrate inherits the cartel vulnerability along the marker-based axis identified in §3, and any PM canon that absorbs stigmergy framing inherits the opposition edge `reputation-gaming-opposition` projects against `pm.connection.reputation-markets` by proximity.

PM canon should state this explicitly. Stigmergic coordination is the mechanism; the mechanism is gameable; the gaming-mitigation surface is non-optional; `reputation-gaming-opposition.md` specifies what the mitigation surface must contain. Absent the cross-reference, PM grammar that invokes stigmergy implies self-sufficient coordination, which is the decentralization-myth bundle failure mode §6 of the Phase A synthesis warns against.

## 6. Decentralization-myth-bundle

Phase A §8d identified the decentralization-myth-bundle: "decentralization theater + digital-labor free-labor trap + administrator capture mutually reinforce. Any Spore/IC/PM primitive that claims 'peer-to-peer' or 'decentralized' inherits all three critiques by proximity unless explicitly declined." Stigmergy-as-coordination-substrate is precisely the kind of primitive that triggers this bundle. The structural claim ("no central authority, no planning, no simultaneity") reads as a decentralization claim; the failure modes (trace-gaming via cartels, medium-capture via infrastructure control, free-labor extraction via sematectonic stigmergy where work-as-trace is uncompensated) reproduce the bundle's three components.

Three explicit declines PM canon must carry if it adopts stigmergy framing:

1. **Decline decentralization-theater framing.** Stigmergic coordination requires governance decisions at the medium, trace-format, and interpretation layers (§4). Canon that frames stigmergy as governance-free coordination reproduces decentralization-theater: the appearance of decentralization while the governance is displaced into infrastructure control.

2. **Decline trace-inflation as self-certifying.** The cartel critique (`reputation-gaming-opposition.md`) applies to marker-based stigmergy directly. Canon that treats trace accumulation (reputation scores, citation counts, uptake metrics) as evidence of underlying merit without stating gaming-mitigation surfaces reproduces the administrator-capture failure mode at the infrastructure layer.

3. **Decline sematectonic-stigmergy-as-free-labor.** When work-state is trace (commitment history, contributed resources, provided services), uncompensated trace-generation is uncompensated labor. `spore.connection.digital-labor-peer-production-opposition` (Wave 1 Kleiner critique) names this failure mode; PM's sematectonic stigmergy inherits it wherever commitment-pooling or CVLE encodes contribution as trace without corresponding material-benefit flow.

These declines are not Phase B R-claims — they are the framing PM canon must carry alongside any stigmergy adoption. R1–R4 below encode the adoption with the appropriate constraints; they do not attempt to resolve the bundle, they state it explicitly.

## 7. Disposition

**Disposition: clarify existing term.** The wiki evidence (Heylighen's summarized 2015 formalization) warrants adopting stigmergy as external cousin for PM's `coordination-substrate` primitive, importing the marker-based / sematectonic and persistent / transient axes as PM grammar clarifications, and explicitly cross-referencing `ic.connection.reputation-gaming-opposition` as the signal-gaming constraint on stigmergic coordination. No new canon primitives are added; PM's existing `coordination-substrate`, `commitment-pooling`, and `routing` concepts remain the canonical vocabulary, with stigmergy serving as cousin-framing with published prior-art lineage. The R-claims below do not absorb stigmergy as canon primitive — they state the cousin relationship, the axis clarification, the cartel-tension cross-reference, and the decentralization-myth-bundle declines.

## 8. Claim Register

**C1** [confidence: high] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
Heylighen's 2015 formalization (as summarized on the wiki page) positions stigmergy as a general-purpose coordination mechanism applicable across "an ever-widening range of domains, from social insects, to robotics, web-based collaboration, and cognition" — establishing stigmergic coordination as a cross-domain primitive with published prior-art lineage from Grassé's 1959 termite-mound-building observation through to modern agent-based software coordination.

**C2** [confidence: high] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
The wiki page frames stigmergy's decomposition into components (agent, action, trace, medium), varieties, and applications — positioning stigmergic coordination as structurally specifiable rather than metaphorical: any coordination primitive claiming stigmergic lineage must name its agent-type, action-type, trace-format, and medium, rather than invoking stigmergy as evocative framing without operational content.

**C3** [confidence: high] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
Stigmergic coordination as formalized by Heylighen carries three structural properties — no central authority required, no planning or shared global model required, no temporal simultaneity required — that distinguish it from hierarchical coordination (which requires authority), negotiated coordination (which requires planning / shared model), and synchronous coordination (which requires simultaneity), making stigmergy the operative mechanism whenever decentralized coordination succeeds at scale without these three scaffolds.

**C4** [confidence: high] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
The wiki page's cross-domain scope — covering both biological coordination (termites, ants) and human-technical coordination (Wikipedia editing, open-source commits, market price signals are all stigmergic in Heylighen's framing) — establishes that stigmergy is not domain-bound: coordination primitives in PM matching, commitment-pooling, and reputation-markets inherit the same structural dynamics as these prior-art instances, both the generative properties (C3) and the failure modes (see C6–C8).

**C5** [confidence: medium] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
The "ever-widening range of domains" framing in Heylighen's abstract positions stigmergy as an empirical-generalization primitive rather than a design primitive: the claim is that observed decentralized coordination *is* stigmergic when decomposed, not that prescribing stigmergy produces coordination. This matters for PM grammar adoption — invoking stigmergy as cousin-concept is a clarification of observed dynamics in PM matching, not a design blueprint that guarantees coordination outcomes.

**C6** [confidence: high] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
The component decomposition (agent / action / trace / medium) implies that stigmergic coordination requires governance decisions at the medium, trace-format, and interpretation-rule surfaces — the medium is shared infrastructure requiring integrity governance, the trace format is a specification requiring consensus, and trace-interpretation rules are local agent behaviors requiring coordination. Coordination "without central authority" does not imply coordination "without governance surface"; the governance is displaced from hierarchical control into infrastructure design, not eliminated.

**C7** [confidence: medium] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
Heylighen's cross-domain examples include market price signals as a stigmergic coordination mechanism — positioning price-based coordination as a specific variety of marker-based stigmergy where the price is the trace, the market is the medium, and market participants are the agents. This inscribes PM's market-dependence critique (`pm.connection.market-dependence-theory-opposition`) within a broader stigmergic framing: critique of price-as-coordination-trace generalizes to critique of any marker-based trace that encodes allocation-relevant signals, which includes PM's reputation-market primitive.

**C8** [confidence: medium] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
The persistent-vs-transient axis implicit in the trace/medium decomposition — pheromone trails decay (transient), constructed mound-state persists (persistent), Wikipedia edit-history persists, market prices are more-transient-than-edit-history — distinguishes short-horizon from long-horizon coordination modes. PM matching combines both (active offers + persistent reputation + accumulated commitment history), and the persistent-trace component accumulates gameable value proportional to its allocation-relevance, which is the empirical cartel-formation condition documented in `ic.connection.reputation-gaming-opposition`.

**C9** [confidence: high] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
The "universal coordination mechanism" framing invites a decentralization-myth-bundle reading — stigmergy as self-sufficient decentralized coordination — that Heylighen's own decomposition (C6) does not support. Canon primitives invoking stigmergy inherit the Phase A §8d bundle (decentralization-theater + digital-labor-free-labor + administrator-capture) by proximity unless the decentralization claim is explicitly declined with reference to the governance surface the decomposition requires.

**C10** [confidence: medium] [anchor: §Abstract · orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism]
The wiki page's inclusion of "cognition" in the stigmergic scope — extending the framing from inter-agent coordination (insects, humans, software) to intra-agent coordination (cognitive traces shaping subsequent cognition) — is cross-referenced by IC's `autopoiesis-and-structural-coupling` bridge note's structural-coupling primitive: IC memory-layers as stigmergic traces in the agent's internal environment (Phase A P-IC-8). This establishes stigmergy as cross-cutting across PM (inter-agent substrate) and IC (intra-agent memory), with PM's primary-project claim in v2 frozen-concepts reflecting the more load-bearing application.

## 9. Review Claims

**R1** [review claim] [target: pm.protocol] [concept: coordination-substrate]
PM's `coordination-substrate` primitive should formally acknowledge stigmergy (Heylighen 2015, extending Grassé 1959) as the external cousin concept naming the mechanism by which PM's substrate enables coordination without bilateral negotiation. The acknowledgment should specify (a) the component decomposition — PM agents, PM actions (publish, commit, match, settle), PM traces (offers, reputation signals, commitment history, CVLE valuations), PM medium (the shared protocol state) — and (b) the scope distinction importing the marker-based vs sematectonic axis: PM reputation-market is marker-based stigmergy, PM commitment-pooling is sematectonic stigmergy, and the two have different gaming vulnerabilities per R2. PM canon should decline the "universal coordination mechanism" framing as self-sufficient (C9) — stigmergic coordination in PM requires governance surfaces at medium integrity, trace-format specification, and trace-interpretation rules, which are R3's scope.
*R1 is supported by C1, C2, C3, C5, C6.*

**R2** [review claim] [target: pm.connection.reputation-markets] [concept: reputation-market]
PM's reputation-market primitive, already carrying `disposition: unresolved tension`, MUST cross-reference `ic.connection.reputation-gaming-opposition` as the signal-gaming constraint on any reputation-as-stigmergic-trace framing adopted by PM canon. The cartel critique applies structurally to marker-based stigmergy: reputation signals are persistent traces (C8) whose accumulation-to-allocation-relevance mapping makes coordinated inflation economically rational, reproducing the cartel-formation equilibrium `reputation-gaming-opposition` documents. PM canon SHOULD NOT absorb stigmergy framing for reputation-markets without the three gaming-mitigation surfaces specified in `reputation-gaming-opposition.md` §R3 (detection of coordinated reputation-inflation patterns, sanctions that decouple inflated reputation from access-allocation outcomes, attribution structures not reducible to citation-count proxies). Sematectonic stigmergy in commitment-pooling is less vulnerable to marker-gaming but still vulnerable to commitment-theater; the mitigation surface extends there as well.
*R2 is supported by C7, C8; cross-reference to ic.connection.reputation-gaming-opposition.*

**R3** [review claim] [target: pm.grammar] [concept: coordination-substrate]
PM grammar should encode the three governance surfaces any stigmergic coordination primitive requires (per C6): (a) **medium-integrity governance** — who maintains the shared protocol state, how medium-level capture is prevented, what happens when the medium degrades; (b) **trace-format specification** — what counts as a trace in PM (offer, commitment, reputation signal, CVLE valuation), how traces are encoded, what structure traces carry; (c) **trace-interpretation rules** — what local rule each PM agent follows in responding to traces, and how divergent interpretations are reconciled. Absent these three surfaces in PM grammar, stigmergy invocation in PM canon reproduces the decentralization-myth-bundle failure mode (Phase A §8d) — appearance of decentralization while governance is displaced into infrastructure control. The decentralization-theater opposition edge (`spore.connection.decentralization-theater-opposition`, Wave 1) applies to PM by proximity unless these surfaces are named.
*R3 is supported by C6, C9.*

**R4** [review claim] [target: pm.connection.commitment-pooling-and-mutual-credit] [concept: commitment-pooling]
PM's commitment-pooling primitive should be named as sematectonic stigmergy — the pool state (aggregate commitments, allocation history, mutual-credit balances) is the trace, and pool-level rules are the trace-interpretation rules shaping subsequent commitment and allocation behavior. This naming clarifies (not expands) PM canon: commitment-pooling already functions stigmergically, and naming the mechanism imports two operational consequences. First, sematectonic-stigmergy-as-free-labor (Phase A §8d; Wave 1 `digital-labor-peer-production-opposition`): work-as-trace must be accompanied by material-benefit flow or it reproduces the free-labor extraction failure mode. Second, gift-obligation (v2 frozen concept) is the natural sematectonic trace in commitment-pooling — contribution creates ongoing obligation as persistent trace — but gift-obligation carries its own undecidability under bad-faith conditions (`reputation-gaming-opposition` §4): cartels are Mauss-Pinchot gift circles operating in bad faith, and commitment-pooling inherits this undecidability unless bad-faith-detection surfaces are specified.
*R4 is supported by C3, C4, C8, C10; cross-reference to spore.connection.digital-labor-peer-production-opposition and ic.connection.reputation-gaming-opposition.*

**R5** [review claim] [target: pm.protocol] [concept: stigmergy]
PM's routing layer vocabulary should adopt `stigmergic-routing` (per Phase A §5 vocabulary correction) to replace the generic `routing` framing — this names the mechanism by which PM matching succeeds at scale without central state, with explicit reference to Heylighen's formalization for cousin-concept legibility to commons / P2P / distributed-systems audiences. The adoption is purely nominal at the canon level (no new primitives); the operational consequences are carried by R1–R4 (medium governance, trace-format specification, gaming-mitigation, sematectonic-stigmergy free-labor risk). PM should keep the generic `coordination-substrate` as the v2 frozen concept (it is broader than stigmergy, covering linguistic and normative substrate not just stigmergic-trace substrate), and add stigmergy as cousin-concept alias in the substrate entry.
*R5 is supported by C1, C2, C3, C4.*

## 10. Attribution

The primary source cited in this note is from the P2P Foundation wiki (https://wiki.p2pfoundation.net), licensed CC BY-SA 4.0. The `Stigmergy as a Universal Coordination Mechanism` wiki page summarizes Francis Heylighen's 2015 chapter (in Lewis & Marsh eds., *Human Stigmergy: Theoretical Developments and New Applications*, Springer; preprint at http://pespmc1.vub.ac.be/papers/stigmergy-varieties.pdf), which itself extends Pierre-Paul Grassé's 1959 coinage. Citation anchors in this note reference the wiki page's Abstract section via the `orn:p2p-wiki.page:Stigmergy_as_a_Universal_Coordination_Mechanism` RID convention. 10/10 source claims anchor to the single wiki page (Abstract section); this is consistent with the wiki page being a short (~2KB) summary page whose anchor surface is the abstract itself. Derivative claims in this note inherit ShareAlike obligations for downstream use. See `docs/research/connections/LICENSE-WIKI-DERIVED.md` for the repo-level notice.

Primary anchor: `Stigmergy as a Universal Coordination Mechanism` (10 claims). Total: 1 distinct wiki page cited across 10 source claims. The wiki page is short and summarizes Heylighen's abstract; claim anchors reference the page's single section.

Cross-references (not source anchors):
- `ic.connection.reputation-gaming-opposition` (Wave 2, grounded in `Citation Cartels`) — signal-gaming constraint on stigmergic coordination; R2 and R4 explicitly cross-reference rather than duplicate.
- `spore.connection.digital-labor-peer-production-opposition` (Wave 1, Kleiner critique) — sematectonic-stigmergy-as-free-labor tension; R4 cross-references.
- `spore.connection.decentralization-theater-opposition` (Wave 1) — decentralization-myth-bundle decline; R3 cross-references.
- `pm.connection.rea-valueflows-semantic-layer` (Wave 1) — semantic-economic layer for PM's trace-format specification surface (R3).

No dead-anchor findings: the wiki page was verified present in the local mirror via `knowledge_search` on 2026-04-17 and its abstract fully read.
