# Protocols

Protocols are **explicit interaction and state contracts** — wire formats, handshake sequences, envelope schemas, and lifecycle state machines.

Where a **pattern** describes a recurring coordination solution (the what and why), a **protocol** specifies the exact interaction contract (the how, precisely enough to implement interoperably).

## Current State

This directory contains live protocol specifications:

- `store-and-forward-relay.md` — pair-level relay and forwarded exchange
- `claims-evidence-attestation.md` — epistemic anchoring and grounding
- `agentic-memory-dimension-vocabulary.md` — v1 (predecessor); remains valid for v1-bucketed records
- `agentic-memory-dimension-vocabulary-v2.md` — **current default** dimension vocabulary (refined `retrieval_model` + new `procedural_memory` dimension; steward-decided 2026-04-14)
- `restriction-maps-and-comparison-records.md` — governed boundary artifacts and per-dimension agent comparison outputs

Example artifacts for protocol usage live under `examples/`.

Related architectural descriptions live in `foundations/`:

- `mycorrhizal-federation-protocol.md` describes the federation principles (sovereignty invariants, domain events, trust model)
- `agent-commons-meta-protocol.md` describes the artifact governance rules (doc_kind taxonomy, authority flow, conformance tiers)

## Future Protocol Candidates

- **Proposal lifecycle** — state machine for how proposals are created, reviewed, consented to, and recorded
- **Attestation exchange** — how evidence and attestations are shared between nodes with provenance
- **Federation handshake** — the exact sequence for establishing edges between nodes (capability declaration, trust negotiation, data channel setup)
- **Intent publication** — wire format for publishing and discovering intents across nodes
- **Profile manifest** — how a node declares which patterns and protocols it implements, at what version

## Relationship to the Repo Taxonomy

See `docs/README.md` for the full taxonomy. In brief:

- **Foundations** = invariants, ontology, first principles
- **Patterns** = recurring coordination solutions
- **Protocols** = explicit interaction/state contracts (this directory)
- **Governance** = current reference profile and operating layer
