---
doc_id: spore.connection.hyperstition-markets
doc_kind: research
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.commitment-pooling
  - spore.connection.hyperstition
sources:
  - url: https://gitcoin.co/research/hyperstitions-how-shared-beliefs-shape-onchain-realities
    title: "Hyperstitions: How Shared Beliefs Shape Onchain Realities"
    author: Kevin Owocki
    type: secondary
disposition: clarify existing term
research_subkind: bridge_note
concepts:
  - hyperstition-markets
  - commitment-pooling
  - conviction-signal
  - scope-bound-accountability
publication_target: website
---

> *This document is intended for publication on Spore's website. It lives here as a working draft.*

# Hyperstition Markets

A bridge note on hyperstition markets and their structural relationship to Spore's [commitment pooling](../../patterns/commitment-pooling.md) pattern.

## What Hyperstition Markets Are

A hyperstition market is a coordination mechanism where participants collectively lock resources toward a shared narrative or desired future. The term synthesizes the hyperstition concept (fictions that make themselves real) with market infrastructure (bonding curves, conviction voting, token mechanics) that encodes escalating collective conviction into executable coordination.

As described in the Gitcoin article, mechanisms like bonding curves and conviction voting are concrete instances: they translate the intensity of collective belief into resource allocation decisions, creating feedback loops where early commitment generates conditions for further commitment.

## Structural Relationship to Commitment Pooling

Spore's [commitment pooling](../../patterns/commitment-pooling.md) pattern is structurally analogous to a hyperstition market. Both coordinate collective resource-locking toward shared objectives. The structural parallels:

| Hyperstition Market | Commitment Pool |
|---|---|
| Participants lock capital via bonding curves | Agents lock labor, capacity, capital via commitment declarations |
| Conviction voting encodes escalating belief | The legibility progression (intent → promise → commitment) encodes escalating accountability |
| Price dynamics signal collective conviction | Scope-bound accountability signals collective commitment |
| Exit via selling | Exit via revocation (with governance implications) |

The key substitution: where hyperstition markets use **speculative price dynamics** as the conviction signal, commitment pooling uses **scope-bound accountability** and the [legibility progression](../../foundations/lexicon/intent-pressure.md). Both achieve the same structural function — coordinating collective resource-locking with escalating commitment — but through different mechanisms.

## What the Comparison Suggests

The comparison clarifies what commitment pooling *is* by showing what it is *not*: it is not a speculative market, but it solves a structurally similar coordination problem. This may sharpen how the pattern is communicated — "commitment pooling is to scope-bound accountability what bonding curves are to speculative price dynamics."

The comparison also surfaces a question: does commitment pooling need an analogue of the bonding curve's continuous price signal — some continuously-updated indicator of collective conviction within a pool? The current pattern tracks discrete commitment states (intent, promise, commitment) but not a continuous aggregated signal. This is an open question, not a recommendation.

## What This Does Not Claim

- Commitment pooling is not a market mechanism — it substitutes accountability for speculation
- The analogy is structural, not functional: the mechanisms differ even where the coordination problem aligns
- This bridge note is a governed Spore artifact; hyperstition markets remain an external lateral reference

## Claim Register

**C1** [confidence: medium] [anchor: §Structural Relationship to Commitment Pooling]
Commitment pooling is structurally analogous to a hyperstition market — both coordinate collective resource-locking toward shared objectives, both create feedback loops where early commitment generates conditions for further commitment.

**C2** [confidence: high] [anchor: §Structural Relationship — key substitution]
Where hyperstition markets use speculative price dynamics as the conviction signal, commitment pooling uses scope-bound accountability and the legibility progression (intent → promise → commitment) — different mechanisms for the same structural function.

**C3** [confidence: medium] [anchor: §What the Comparison Suggests]
Commitment pooling may lack a continuous aggregated conviction signal analogous to a bonding curve's price feed — discrete commitment states may not capture the intensity of collective belief within a pool.

## Open Questions

1. **Does commitment pooling need a continuous conviction signal?** The current pattern tracks discrete commitment states (intent, promise, commitment) but not a continuous indicator of collective investment intensity. Is the absence of this signal a gap or a feature (avoiding speculation)?

2. **Could demurrage serve as the conviction signal?** Demurrage creates circulation pressure over time. Could the aggregate demurrage pressure within a pool serve as a legible signal of collective commitment intensity without introducing speculation?

3. **What's the failure mode?** Hyperstition markets can produce bubbles — speculative conviction detached from realizability. What's the equivalent failure mode for commitment pooling, and does the scope-bound accountability model prevent it?
