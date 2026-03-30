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
disposition: null
koi_uri: orn:personal-koi.entity:concept-hyperstition-markets-70c05c7e9db0
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
