---
doc_id: spore.connection.flow-funding
doc_kind: research
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.commitment-pooling
sources:
  - url: https://github.com/BioregionalKnowledgeCommons/BioregionalKnowledgeCommoning/blob/main/docs/foundations/flow-funding-foundations.md
    title: "Flow Funding Foundations"
    author: Darren Zal
    type: primary
  - url: https://github.com/BioregionalKnowledgeCommons/BioregionalKnowledgeCommoning/blob/main/docs/foundations/commitment-pooling-foundations.md
    title: "Commitment Pooling Foundations"
    author: Darren Zal
    type: primary
  - url: https://github.com/BioregionalKnowledgeCommons/BioregionalKnowledgeCommoning/blob/main/docs/foundations/commitment-economy-vision.md
    title: "Commitment Economy Vision"
    author: Darren Zal
    type: primary
  - url: https://www.bioregionalearth.org/blog/flow-funding
    title: "Flow Funding"
    author: Kinship Earth / Bioregional Earth
    type: secondary
  - url: https://regeneratecascadia.org/biofi/bioregional-funding/
    title: "Bioregional Funding"
    author: Regenerate Cascadia
    type: secondary
  - url: https://github.com/LinuxIsCool/tbff-protocol
    title: "TBFF Protocol"
    author: MycoFi / Mycopunks
    type: secondary
disposition: clarify existing term
research_subkind: bridge_note
concepts:
  - flow-funding
  - commitment-pooling
  - redistribution
  - transitional-membrane
  - metabolic-functions
---

# Flow Funding: Comparative Intake

This bridge note investigates flow funding as a family of capital allocation mechanisms and its relationship to Spore's commitment pooling pattern. The comparison draws primarily on the Bioregional Knowledge Commons (BKC), where both mechanisms are implemented and explicitly positioned as distinct metabolic functions within a commitment economy.

## 1. What Flow Funding Is

Flow funding is a governed capital allocation mechanism that moves resources from abundance to need through trust relationships and ecological context. The core principle: allocation decisions should be made by people closest to the work, not institutional gatekeepers.

Flow funding was developed independently from commitment pooling. It addresses a different structural problem: not "what can we offer?" but "how should capital move?" Both participate in economic coordination, but they govern different things.

## 2. Flow Funding as Protocol Family

Flow funding is not a single mechanism. It is a family of related protocols that share the principle of governed, trust-based allocation but differ along multiple design axes.

### Two known dispositions

**Bioregional Flow Funding (Hub Cultivator / Regenerate Cascadia)** — A funder provides capital to a trusted Hub Cultivator who distributes smaller grants to ground-level projects. The steward's relational knowledge *is* the allocation mechanism. Governance is trust-based and human-mediated. Financial infrastructure runs through DAFs (Donor-Advised Funds). Accountability is narrative: four reflective questions — *What inspired you? What surprised you? What challenged you? What moved you?*

**Threshold-Based Flow Funding (TBFF) (MycoFi / Mycopunks)** — Each participant declares a maximum threshold ("lake level"). Overflow above threshold redistributes algorithmically according to weighted allocation preferences. The formula iterates until convergence (typically 1–4 rounds). Financial infrastructure uses Superfluid CFA streaming on Base. Accountability is mathematical: on-chain settlement events with full balance snapshots.

### Parameter axes

Rather than treating these as "two versions," the comparison is clearer when flow funding is analyzed as a protocol family parameterized along:

| Axis | Hub Cultivator | TBFF |
|------|---------------|------|
| **Execution model** | Human steward judgment | Algorithmic threshold redistribution |
| **Timing** | Continuous relational process | Periodic settlement (convergent iterations) |
| **Typical entry point** | Pre-commitment (capital often enters before specific commitments form) | Post-threshold (redistribution typically triggered by overflow) |
| **Source of funds** | Legacy grants, DAFs, external philanthropy | Pool surplus, participant overflow, potentially demurrage-recycled value |
| **Writeback / provenance** | Narrative evidence via `/ingest` → Evidence entities | Settlement snapshots → Evidence entities via dedicated endpoint |

Additional dispositions are plausible: retroactive funding (capital flows after evidence of fulfillment), demurrage-recycled surplus (decayed capacity redirected through threshold logic), and hybrid models where steward-mediated and algorithmic tracks interact. The parameter axes accommodate these without requiring a new framework.

### Authority and contestability

The two dispositions handle allocative authority differently:

**Hub Cultivator**: Authority rests with the steward. The steward exercises allocative judgment over capital-like resources — not just moving liquid funds, but deciding where relational investment should flow. This authority is earned through trust and community standing. Accountability is narrative (the annual reflective questions), but this is a reporting mechanism, not a dispute primitive. Override is social — if the community loses trust in the steward, the governance relationship breaks down.

**TBFF**: Authority is distributed through the allocation preferences matrix — each participant sets their own thresholds and weights. No single actor decides allocation. Contestability is structural: participants can change their preferences at any time, and settlement events are fully auditable on-chain. Override is individual — change your weights, change your threshold, or exit.

**Gap**: Neither disposition has a formal dispute resolution mechanism for contested allocations. BKC's commitment pooling adds the `disputes` predicate with a DISPUTED → RESOLVED state transition, but this governs commitment lifecycle, not allocation decisions. Whether flow funding needs its own contestability primitive is an open question.

## 3. What Commitment Pooling Already Does

Spore's commitment pooling pattern already includes significant movement and circulation mechanics. The comparison must not assume a static/dynamic split.

Commitment pooling governs:

- **Promises and obligations**: Typed offers with capacity limits, seasonal constraints, and governance scope
- **Pool composition**: Which commitments belong in which pools, curated through three orthogonal operations (create, pledge, verify)
- **Circulation**: Commitments route through pools via federation, settle through in-kind fulfillment or token exchange, and decay through configurable demurrage
- **Settlement**: Resolution of composed vectors — direct delivery, voucher exchange, or hybrid
- **Evidence closure**: Fulfillment evidence links back to commitments, advancing them through the lifecycle (ACTIVE → EVIDENCE_LINKED → REDEEMED)
- **Federation**: Local pools route to broader pools without merging sovereignty

The lifecycle (PROPOSED → VERIFIED → ACTIVE → EVIDENCE_LINKED → REDEEMED) tracks maturation of individual commitments. Pool-level dynamics — routing, scoring, field alignment — operate across the pool as a whole.

## 4. Relationship to Commitment Pooling

### The metabolic distinction

BKC's commitment-economy-vision.md explicitly positions commitment pooling and flow funding as distinct metabolic functions within a four-function model:

1. **Provisioning** (commitment pooling) — making capacity legible and routable. Communities issue vouchers backed by productive capacity. Pools curate and aggregate these, making them collectively liquid.
2. **Redistribution** (flow funding) — ensuring sufficiency. Each participant declares thresholds. Overflow routes from abundance to need. External capital enters through governed channels.
3. **Activation** (network growth) — how new participants join. Primarily through community practices that make commitments legible (mapping workshops, potlucks, assemblies).
4. **Repair** (protection) — limits, insurance, disputes, forkability, consent boundaries.

This framing comes from BKC's own conceptual framework, grounded in Will Ruddick's metabolic model. It is not a projection from Spore.

### What each primarily governs

| | Commitment pooling (provisioning) | Flow funding (redistribution) |
|---|---|---|
| **Primary object** | Promises, obligations, capacity | Capital / allocative resources |
| **Primary question** | What can we offer? | How should capital move? |
| **Control surface** | Pool composition, commitment lifecycle, routing scores | Allocation policy, thresholds, steward judgment or algorithmic weights |
| **Movement mechanism** | Circulation through pool network, multi-hop routing, settlement | Steward-directed grants or threshold overflow redistribution |
| **Evidence role** | Proves commitment fulfillment | Logs allocation decisions as Evidence entities |

### How they compose

The composition is direct in BKC's architecture:

- Hub Cultivator participants' pledges become commitment pool entries (`pledges_commitment` predicate)
- TBFF settlements prove commitment fulfillment (`proves_commitment` predicate)
- Pool activation can be triggered by either steward verification or cumulative settlement evidence exceeding a threshold
- Both write Evidence entities with CAT receipt chains to the shared knowledge graph

Flow funding does not replace commitment pooling's movement mechanics. Rather, they operate on different sides of the same capital cycle: commitment pooling makes capacity legible so that governed allocation (flow funding) has something to allocate *toward*, and flow funding adds an explicit allocative governance layer — a redistribution policy — that commitment pools do not themselves define, even though pools can generate internal circulation and movement on their own.

### What the distinction is not

- **Not static vs dynamic**: Commitment pooling includes circulation, routing, settlement, and demurrage. Both mechanisms involve movement.
- **Not internal vs external**: Commitment pooling can accept fiat or legacy capital. Flow funding can operate entirely within a committed network.
- **Not simple vs complex**: Hub Cultivator flow funding is deliberately low-paperwork and trust-based. Some commitment pool designs are algorithmically sophisticated.
- **Not sequential**: They are concurrent metabolic functions, not pipeline stages. Provisioning and redistribution interact continuously with feedback loops, not as handoffs.

## 5. Flow Funding as Transitional Membrane

Both mechanisms can serve as bridges from legacy capital structures, but through different architectural surfaces.

**Flow funding as bridge**: Hub Cultivator flow funding is explicitly designed to receive legacy grants and philanthropic capital and redistribute it through trust-based, subsidiarity-respecting channels. DAFs provide the financial infrastructure. The steward role translates between funder expectations and community needs. This is a direct transitional membrane — legacy capital enters through familiar legal structures (donor-advised funds, grant agreements) and flows through governed channels that are legible to both the legacy system and the emerging coordination substrate.

**Commitment pooling as bridge**: Fiat or legacy capital can enter through pools. Victoria Commitment Vouchers (VCV) on Celo mainnet demonstrate token-based settlement. But the primary bridge function is different — commitment pooling makes *existing community capacity* legible to coordination infrastructure, reducing dependence on external capital over time rather than channeling it.

**The composed bridge**: The more interesting question is whether these two bridge functions compose. Flow funding brings external capital in through governed channels; commitment pooling makes internal capacity legible and exchangeable. Together, they could provide a transitional path where external capital decreases as internal circulation increases — the "dependency quality" metric from BKC's commitment-economy-vision, where progress means reducing unhealthy dependency (donor cycle, chokepoint, metabolic) while increasing healthy interdependence (reciprocal, visible, chosen).

Regenerate Cascadia's progressive deepening model (§7 of commitment-economy-vision.md) describes this path concretely: Phase 0 is trust-based flow funding → Phase 1 is formal commitment expression → Phase 2 is pool aggregation → Phase 3 is routing as decision-support → Phase 4 is TBFF supplementing steward decisions → Phase 5 is from extractive dependency to regenerative interdependence. The path is not from "simple" to "complex" but from relational trust infrastructure to relational trust infrastructure augmented with legibility tools.

## 6. Continuous Flow as Design Parameter

Continuity is a design parameter, not the essence of flow funding.

TBFF's Superfluid CFA implementation uses continuous token streaming, but the redistribution logic itself is periodic — settle, redistribute, converge, repeat. Hub Cultivator allocation is continuous in the relational sense (ongoing steward judgment) but discrete in the financial sense (grant disbursements).

The question "does commitment pooling need a continuous collective-conviction signal?" — raised in the [hyperstition positioning article](../positioning/hyperstition-as-coordination.md) — is better understood as: does Spore need a mechanism for *ongoing governed redistribution* alongside its mechanisms for *capacity legibility and commitment lifecycle*? The answer from BKC is yes, but the redistribution mechanism need not be continuous in the temporal sense. It needs to be *governed* and *responsive* — operating through trust relationships and threshold logic, not through continuous price signals.

## 7. What BKC Clarifies for Spore

### Confirmed

1. **Commitment pooling and flow funding are composable but distinct.** BKC's metabolic framing (provisioning vs redistribution) provides the clearest available distinction. Spore's commitment pooling pattern already includes movement, but it does not include governed redistribution from abundance to need. Flow funding adds this without replacing what commitment pooling does.

2. **The control-surface distinction holds.** Commitment pooling governs promises, obligations, and pool composition. Flow funding governs allocation of capital / allocative resources through governed channels. Both involve movement, but they operate on different primary objects.

3. **Legacy bridge is a first-class lens.** Flow funding's role as transitional membrane from legacy grantmaking is not incidental — it is architecturally central. The Hub Cultivator model is explicitly designed for this bridge function.

### Maturity asymmetry

The comparison must note different maturity levels:

- **Commitment pooling via Grassroots Economics / Sarafu / CLC**: Production-scale. 26,367 users, 188 active pools, 745 active vouchers, $320K+ swap volume. Deployed on Celo mainnet since July 2023. 1,200 acres restored, 84% positive income impact.
- **BKC commitment pooling**: Pilot-scale. 2 pools activated (Victoria Landscape Hub, Cascadia Bioregion Stewardship), 23+ commitments, VCV on Celo mainnet.
- **Hub Cultivator flow funding**: Pilot-scale. 6 bioregions, ~13 landscape groups, $30K total flow funding across 10 pilot groups. September 2024 launch.
- **TBFF**: Experimental. 5 Mycopunks members, $32K test scenario, deployed on Base Sepolia testnet.

Spore should treat commitment pooling as a pattern grounded in production-scale evidence (via Grassroots Economics heritage) and flow funding as a pattern grounded in pilot-scale evidence (via Kinship Earth / Regenerate Cascadia) with experimental algorithmic extension (TBFF). Claims about composition should be appropriately hedged.

## 8. Open Questions

1. **Does Spore need to name a composed capital field?** BKC's four metabolic functions (provisioning, redistribution, activation, repair) interact non-linearly with feedback loops. Does Spore need to explicitly name this composed field, or is it sufficient to name the individual patterns and let composition emerge through implementation? The evidence is suggestive but not conclusive — BKC names the field in one document but has not yet validated it at scale.

2. **Does flow funding need its own contestability primitive?** Commitment pooling has the `disputes` predicate. Neither Hub Cultivator nor TBFF flow funding has a formal mechanism for contesting allocation decisions (as opposed to contesting commitment fulfillment). Is this a gap or a feature?

3. **Is "redistribution" the right Spore-side name?** BKC uses "redistribution" within its metabolic framing. Spore might prefer a term that emphasizes governed movement without the connotations of wealth redistribution — perhaps "governed allocation" or "resource routing." This is a naming question, not a structural one.

4. **How does the activation function relate to Spore?** BKC's third metabolic function (activation — network growth through community practices) maps loosely to Spore's adoption surfaces and transitional membranes, but the connection is not yet precise enough to claim.

5. **What happens when steward-mediated and algorithmic tracks interact?** BKC envisions convergence (C1+) but has not yet implemented it. The interaction model — where pool activation is triggered by both human verification and cumulative algorithmic settlement evidence — is a design hypothesis, not a validated pattern.

## Claim Register

**C1** [confidence: high] [anchor: §3 Metabolic distinction + §4 Relationship to Commitment Pooling]
Flow funding and commitment pooling are composable but distinct metabolic functions — provisioning (commitment pooling: what can we offer?) vs redistribution (flow funding: how should capital move?). Both involve movement but operate on different primary objects.

**C2** [confidence: high] [anchor: §3 What Commitment Pooling Already Does]
Commitment pooling already includes significant movement mechanics (circulation, routing, settlement, demurrage) — the difference is not static vs dynamic but which primary object each mechanism governs.

**C3** [confidence: high] [anchor: §5 Flow Funding as Transitional Membrane]
The Hub Cultivator model is architecturally designed as transitional membrane from legacy capital (DAFs, grants) into trust-based allocation — legacy capital enters through familiar legal structures and flows through governed channels legible to both systems.

**C4** [confidence: medium] [anchor: §4 Authority and contestability — Gap]
Neither flow funding disposition has a formal dispute resolution mechanism for contested allocations — BKC's `disputes` predicate governs commitment lifecycle, not allocation decisions. Whether flow funding needs its own contestability primitive is open.

## 9. Disposition

**Disposition: clarify existing term**

The evidence supports a small clarification to Spore's commitment pooling pattern. Commitment pooling and flow funding are composable but distinct — provisioning and redistribution in BKC's metabolic framing. Spore's commitment-pooling.md already acknowledges flow funding in its "Constitutional relationship" section, but the distinction between what each mechanism primarily governs could be sharpened.

This does not warrant a new pattern doc. Flow funding is not yet mature enough in its evidence base, and the relationship is well-captured as a clarification within the existing pattern. If flow funding's pilot evidence strengthens, a future session could promote it to a candidate sub-pattern or candidate protocol.

**Deferred**: The composed capital field question (open question #1) should be revisited after BKC has more implementation experience with the four-function model. Premature naming risks reifying a structure that may not survive contact with scale.
