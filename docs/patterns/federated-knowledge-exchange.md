---
doc_id: spore.federated-knowledge-exchange
doc_kind: pattern
status: active
depends_on:
  - spore.federation-protocol
---

# Federated Knowledge Exchange

Sovereign knowledge nodes exchanging selectively without centralizing.

## Context

Multiple sovereign organizations maintain their own knowledge gardens -- wikis, vaults, databases, knowledge graphs. Each has invested in local ontologies, local naming conventions, and local governance. They want to share selectively: some knowledge should flow freely, some should be restricted, and some should never leave the node. But existing approaches tend toward either full isolation (no sharing) or centralized aggregation (surrendering control to a shared platform).

## Problem

How do sovereign knowledge nodes exchange without surrendering control?

## Forces

- **Sovereignty**: Each node must retain full control over what it shares, with whom, and under what conditions.
- **Selective sharing**: Not everything is shareable. Sharing granularity must range from "public to all" to "visible only to authenticated peers with explicit consent."
- **Eventual consistency over strong consistency**: Nodes operate independently and asynchronously. The system must tolerate divergence and converge through signaling, not locking.
- **Stable references**: Shared artifacts must be identifiable across systems despite local naming differences. Without stable handles, federation devolves into broken links.
- **Trust differentiation**: Not all sources are equally reliable. The system must distinguish provenance and weight evidence accordingly.

## Pattern

### Consent-based sharing

All sharing is **opt-in**. Nodes propose edges ("I want to share X with you" or "I want to read Y from you"). The other node approves or denies. Once mutually approved, sharing proceeds within defined permissions. No node can read from or write to another without explicit bilateral consent.

### Event-driven eventual consistency

Nodes exchange **signals**, not commands. The signal vocabulary is minimal:

- **New**: A new artifact is available.
- **Update**: An existing artifact has changed.
- **Forget**: An artifact has been withdrawn.

Each node decides independently what to do with received signals. A node might ingest, ignore, queue for review, or partially incorporate. This is **informational, not imperative** -- like mycelial chemical signaling between trees, not hierarchical command from a central controller.

### RID-based references

Every shared artifact has a stable **Reference Identifier (RID)** that persists across systems. RIDs are opaque, globally unique, and independent of local file paths or database keys. They are the "stable handles" that make federation possible -- when Node A references an entity from Node B, it uses the RID, not Node B's internal path.

### Trust tiers

Evidence and claims carry different weight depending on provenance:

| Tier | Source | Trust Level |
|------|--------|-------------|
| 1 | Local authoritative | Highest -- locally curated and maintained |
| 2 | Local documents | High -- ingested but not manually curated |
| 3 | Trusted peer | Medium -- from a federated node with established relationship |
| 4 | Public peer | Lower -- from a known but unvetted node |
| 5 | Web | Lowest -- scraped or ingested from open internet |

Trust tiers inform ranking, conflict resolution, and display -- they do not block ingestion. A node can ingest low-trust data while clearly marking its provenance.

### Membrane governance

Each node controls its **boundary**. Sensors (automated ingestion agents) can read public data permissionlessly. Private data requires authenticated access with explicit consent. The membrane is not a firewall -- it is a governance surface where sharing decisions are made and enforced.

### Two data channels

Federation operates through two complementary channels:

- **Schema-based**: Request structured data matching a schema. The responding node maps its local data to the requested schema and returns matching records. This supports semantic interoperability without ontology unification.
- **Directory-based**: File-level sync within approved edges. Specific directories or document sets are synced between nodes, with the sending node controlling what is included.

## Current Adopters / Related Implementations

- **BKC 4-node federation**: Octo (Salish Sea), Greater Victoria, Cowichan Valley, and Front Range nodes running bidirectional federation on KOI-net. This is the primary operational validation -- 1,000+ entities federated across nodes with event-driven sync.
- **KOI-net protocol (BlockScience)**: The underlying protocol that implements the signal-based federation layer. Spore's pattern describes the coordination design; KOI-net provides the runtime.
- **BKC meta-protocol**: Three invariants on every shared artifact -- what is shared, who attests, who can use how. An existence proof for minimal viable federation governance.

## Related Patterns

- **Governance memory** -- the document layer that federation makes composable across nodes.
- **Commitment pooling** -- the economic coordination layer that depends on federated knowledge for cross-pool routing.
