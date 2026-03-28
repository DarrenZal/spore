# Spore — Documentation Map

Spore is a common grammar for plural, sovereign coordination across scales. It develops and publishes **Agent Commons**: a pattern language, protocol family, and governance-memory layer for multi-agent coordination.

## Repo Taxonomy

| Layer | Contains | Directory |
|-------|----------|-----------|
| **Foundations** | Invariants, ontology, first principles. What defines what kind of system this is. | `foundations/` |
| **Patterns** | Recurring coordination solutions. Context → Problem → Forces → Pattern → Related. | `patterns/` |
| **Protocols** | Explicit interaction and state contracts. Wire formats, handshakes, envelopes. | `protocols/` |
| **Governance** | Current reference profile and operating layer. The rules Agent Commons uses for itself. | `governance/` |

Patterns and protocols are docs first. They become graph entities via ingestion. They get stable identities through `doc_id` and `spec:<doc_id>`. Separate repos are only needed when an implementation requires its own runtime, maintainers, or release cadence.

## Start Here

- [project-vision.md](./project-vision.md) — what Spore is, why it exists, how it works

## Foundations

Theory and first principles that define what kind of system this is:

- [relational-agency-and-holons.md](./foundations/relational-agency-and-holons.md) — holonic agency: wholes and parts, coherence across scales
- [mycelial-holarchy-architecture.md](./foundations/mycelial-holarchy-architecture.md) — dual-axis structural model (holarchy + mycelial meshwork)
- [mycorrhizal-federation-protocol.md](./foundations/mycorrhizal-federation-protocol.md) — sovereign exchange rules, federation invariants
- [constitutional-artifacts-and-graph-projections.md](./foundations/constitutional-artifacts-and-graph-projections.md) — how visions, intents, and commitments form a coordination ecology with dual text/graph representation

## Patterns

Recurring coordination solutions extracted from working implementations:

- [governance-memory.md](./patterns/governance-memory.md) — documents as machine-readable constitutional memory (the spec-DAG pattern)
- [intent-publication-and-activation.md](./patterns/intent-publication-and-activation.md) — the bridge between vision and pooled commitments (needs, offers, intents as vectors)
- [commitment-pooling.md](./patterns/commitment-pooling.md) — pools as shared fields where commitment vectors compose
- [federated-knowledge-exchange.md](./patterns/federated-knowledge-exchange.md) — sovereign knowledge nodes exchanging without centralizing

## Protocols

Explicit interaction and state contracts (future formal specs):

- [protocols/README.md](./protocols/README.md) — what protocols are, current state, future candidates

## Governance

The rules Agent Commons uses for its own documentation and project governance:

- [agent-commons-meta-protocol.md](./governance/agent-commons-meta-protocol.md) — artifact taxonomy and DAG rules
- [project-bootstrap-spec.md](./governance/project-bootstrap-spec.md) — tier definitions and bootstrap procedure
- [project-briefing-pattern.md](./governance/project-briefing-pattern.md) — context assembly for agents
- [adoption-guide.md](./governance/adoption-guide.md) — step-by-step onboarding

## Roadmap

- [roadmap.md](./roadmap.md) — three tracks: external adoption, decision governance, pattern language maturation
