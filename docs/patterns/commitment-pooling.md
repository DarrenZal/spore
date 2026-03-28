---
doc_id: fg.commitment-pooling
doc_kind: pattern
status: active
depends_on:
  - fg.constitutional-artifacts
---

# Commitment Pooling

Coordinating many commitments from many agents without centralizing control.

## Context

Multiple agents have activated intents -- offers and needs that have been matched and governance-approved. These are no longer hypothetical: someone has said "I will do X" and governance has confirmed the alignment. Now these commitments need to be coordinated, tracked, and fulfilled collectively. But there is no central coordinator, no single project manager, no hierarchy to impose sequencing.

## Problem

How do you coordinate many commitments from many agents without centralizing control?

## Forces

- **Decentralized coordination**: No single entity should be the bottleneck for commitment routing, tracking, or settlement.
- **Composability**: Individual commitments should compose into larger collective actions without requiring redesign.
- **Accountability without hierarchy**: Agents must be accountable for what they commit to, but accountability flows from the commitment structure, not from managerial authority.
- **Federation**: Local pools must connect to broader pools without losing local sovereignty.
- **Circulation**: Commitments that sit idle lose value. The system should encourage fulfillment and movement.

## Pattern

### Pool as field

A pool is a **shared field** where many vectors can be composed. Needs (pull vectors) and offers (push vectors) from multiple agents enter the pool. Routing and scoring compute **field-level alignment** rather than pairwise matching -- the question is not "does A match B?" but "how do all the forces in this pool compose into coherent flow?" Settlement is the resolution of composed vectors into fulfilled commitments.

### Lifecycle

Commitments follow a lifecycle that tracks maturation:

```
PROPOSED --> VERIFIED --> ACTIVE --> EVIDENCE_LINKED --> REDEEMED
                                          |
                                     DISPUTED --> RESOLVED
```

- **PROPOSED**: A commitment enters the pool.
- **VERIFIED**: Governance confirms the commitment aligns with vision/roadmap.
- **ACTIVE**: The commitment is live and being fulfilled.
- **EVIDENCE_LINKED**: Fulfillment evidence is attached (reports, deliverables, attestations).
- **REDEEMED**: The commitment cycle completes -- value has been delivered and acknowledged.
- **DISPUTED/RESOLVED**: A branch for contested fulfillment, resolved through governance process.

These states track the maturation of a commitment, not the pool dynamics themselves.

The PROPOSED state is effectively the promise stage — a declared commitment awaiting acceptance into the pool's governance scope. The transition from PROPOSED to VERIFIED is the acceptance gate where sovereignty meets commoning.

### Pool federation

Pools can **federate** -- a local pool (e.g., Victoria Landscape Hub) can route overflow to a broader pool (e.g., Cascadia Bioregion Stewardship). Routing scores consider:

- Bioregional alignment (geographic and ecological fit)
- Capacity overlap (does the broader pool have what the local pool lacks?)
- Timeframe compatibility (seasonal, project-phase, urgency)
- Governance fit (do the pools share compatible norms?)

Federation is not merging. Each pool retains sovereignty. Routing is advisory -- the receiving pool's governance decides whether to accept.

### Settlement

Settlement is the resolution of composed vectors. It can take multiple forms:

- **In-kind fulfillment**: Direct delivery of committed work, resources, or capacity.
- **Token settlement**: Commitment vouchers that represent fulfilled promises, redeemable within the pool network.
- **Hybrid**: Combinations of direct fulfillment and token-mediated exchange.

**Demurrage** (configurable decay) encourages circulation when seasonally appropriate -- vouchers lose value over time, discouraging hoarding and encouraging flow.

### Constitutional relationship

Pooled commitments **instantiate and mobilize** what visions orient. They are the economic/operational layer of the coordination ecology. The vision says what matters; the roadmap sequences what to build; intents express willingness; commitments make it real.

## Current Adopters / Related Implementations

- **BKC Victoria + Cascadia pools**: 2 pools activated, 23+ commitments tracked, routing visualization live.
- **VCV on Celo**: Victoria Commitment Vouchers on Celo mainnet (33,400 VCV minted). This is a parallel implementation of token-based settlement, not a direct adoption of this pattern.
- **Grassroots Economics / CLC protocol**: Community Inclusion Currencies and the commitment voucher framework developed by Will Ruddick. A key influence on the settlement and demurrage design.

## Related Patterns

- **Intent publication and activation** -- the upstream pattern that feeds commitments into pools.
- **Federated knowledge exchange** -- the information layer that enables cross-pool coordination.
