---
doc_id: spore.connection.neighbourhoods-grammars-deterministic-runtime
doc_kind: connection
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.connection.canon-framing-three-layer-coordination-stack
  - spore.connection.bioregional-coordination-as-peer-instance-family
  - spore.connection.bkc-as-instance-family
  - spore.federation-protocol
  - spore.mycelial-holarchy-architecture
  - spore.external-validation-loop
  - spore.representation-authority
  - spore.maintenance-economics
concepts:
  - coordination-substrate
  - reputation-market
disposition: unresolved tension
sources:
  - url: https://happeningscommunity.substack.com/p/neighbourhoods-grammars-that-travel
    title: "Neighbourhoods: Grammars that Travel (Sam Turner, Happenings Community)"
    version: "article dated 2026-05-01; accessed 2026-06-16"
    note: >-
      Secondary/journalistic source describing an unreleased system. The public
      neighbour-hoods GitHub org shows no substantive commits since mid-2024
      (recent push dates are Dependabot bumps and stars); treat the described
      language/compiler/runtime as aspirational-current, not verified code.
---

# Neighbourhoods grammars — a deterministic coordination-runtime, beside the governance grammar

## What it is

Neighbourhoods Network (project lead Sid Sthalekar; tech lead Jill Burrows) describes a
multi-paradigm **Grammar Definition Language**, a compiler, and a transport-agnostic
runtime that turn a community's coordination *practice* into a deterministic, local-first,
peer-to-peer **application**. A grammar names who can act, what actions exist, what must be
true before a transition fires, and how state is tracked; the compiler emits a working app
(CRDT data, UI, and a portable validation module). Identity is a DID-mapped wallet
signature; provenance is a Merkle-forest; the runtime runs over websocket today, with
Bluetooth/WiFi mesh described as future transducers.

This is a **boundary / positioning** note, not a convergence note. Neighbourhoods calls its
artifacts "grammars," as Spore calls itself a "coordination grammar" — but the two words sit
at different altitudes, and naming the difference is the point.

## Mapping to primitives

- **attest / external-validation-loop (Strong).** The compiler-emitted validation module —
  verification logic that travels with signed data and is checkable by foreign systems — is
  a concrete implementation of the `attest` membrane operation.
- **federation-protocol + representation-authority (Strong).** DID-signed, origin-stamped
  actions over a Merkle-forest are governed exchange between sovereign peers — the same
  problem KOI (BlockScience's federation protocol, which BKC builds on) solves with RIDs and
  FUN events, at a different altitude.
- **reputation-market (Moderate).** "Reputation recognised across Neighbourhoods" is the
  `reputation-market` slug in operational form.
- **maintenance-economics (Moderate).** "Grammars pay the domain experts who steward them,
  not the platform" restates the maintenance-economics ethos and rhymes with the
  gifting/reciprocity → bioregional-economics thread.

## What Spore confirms

Spore's grammar can already *express* everything in Neighbourhoods' provenance machinery —
membrane operations, federation exchange, attestation, representation authority. Nothing
here reveals a concept the grammar cannot say. Neighbourhoods is best read as one possible
**implementation** of the provenance and federation layer Spore specifies abstractly.

## What is thinner / where the tension lives

Two gaps, and they are the reason this note exists:

1. **Executable-runtime gap.** Spore *governs* and KOI *remembers*; neither *runs* a
   community's procedural workflow as a deterministic, offline-capable app. Neighbourhoods
   occupies exactly that empty layer. This is a different axis from the
   reproduction/production/governance stack in
   `canon-framing-three-layer-coordination-stack` — that note cuts the *substance* of
   coordination; this gap is about *execution altitude* (govern → know → run).

2. **Determinism vs contestability (the unresolved tension).** Neighbourhoods compiles rules
   into mechanically enforced preconditions — "a transition can't fire if its preconditions
   haven't been met." Spore is deliberately *post-cathedral*: coordination under unresolved
   truth claims, rules kept contestable and revisable through the learning membrane. These
   are near-opposite postures. The reconciliation is altitude, not contradiction: **Spore is
   the constitution and the deliberation; a Neighbourhoods grammar would be the executable
   bylaws** — you compile only the *settled, procedural* slice of a governed practice, while
   the contestable slice stays in governance-memory. Where that line sits, and who is
   authorised to move it, is the open design question.

## Relationship to KOI (does not replace it)

KOI answers "what is known and how does it connect" (semantic graph, entity resolution,
RAG); Neighbourhoods answers "what is the current state of this workflow and who may act
next" (deterministic CRDT state machine). They converge only on provenance + portable
identity + federation. The clean integration seam is **signed Neighbourhoods action → KOI
Claim (with native provenance) → Regen anchor** — bridge at the claims boundary; do not
merge the data models.

## Open questions

- Where does the settled/contestable boundary sit for a real practice, and is the "compile
  the settled slice" move actually safe — or does freezing a slice into a compiler
  re-introduce the cathedral Spore is trying to leave?
- Is the offline-mesh property (genuinely valuable for low-connectivity bioregional field
  work) real or aspirational? (Websocket-only today.)
- Maturity/vendor risk: single-maintainer, code not visibly published, Holochain path
  scoped-not-built. What is the smallest experiment that tests the integration seam without
  betting on the platform?

## Disposition

**Unresolved tension.** Authored as a boundary/positioning note: Spore is *not* a
deterministic executable runtime, and the absence of one is a real gap a peer instance
family (BKC, bioregional-coordination) would feel. Peer-side notes accompany this one at
`bkc.connection.neighbourhoods-runtime-layer` and
`bioregional-coordination.connection.neighbourhoods-runtime-layer`.
