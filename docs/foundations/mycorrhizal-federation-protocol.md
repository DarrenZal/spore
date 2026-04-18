---
doc_id: spore.mycorrhizal-federation-protocol
doc_kind: architecture
status: active
depends_on:
  - spore.project-vision
  - spore.relational-agency-and-holons
---

# Mycorrhizal Federation Protocol

How sovereign nodes connect through mutualistic exchange — the rules governing what flows between agents, holons, and collectives, how trust is established, and how federation maintains coherence without central authority.

<!-- held-tension: 0001-pluriversal-incommensurability -->

## Commoning Mechanism And Capture Mechanisms

Federation is a **commoning mechanism, not a substitute for associational organising.** The protocol is a substrate embedded in associational practice (following Nick Dyer-Witheford's A–C–A' circuit — see `spore.mycelial-holarchy-architecture` §"Associational Practice And The A–C–A' Circuit"): the commoning work — care, provisioning, maintenance, territorial stewardship — is the *primary* coordinating practice that the protocol serves, not the other way around. Protocol specifications that treat federation as a technical coordination primitive sitting above a naturalised reproductive substrate have performed the substrate move the wiki commons literature (Federici, Bresnihan, Bhattacharya, Dyer-Witheford) identifies as historically prior to every other enclosure.

"Works correctly" for this protocol is therefore evaluated against commoning criteria, not only against delivery semantics. The delivery semantics specified in later sections (idempotence, provenance, scoping, encryption) are necessary; they are not sufficient. A federation that moves events reliably while invisibilising the reproductive labour of the participants it federates has not worked correctly by the commoning reading — it has extracted.

### Power-capture mechanisms (named at equal standing)

The canon recognises four power-capture mechanisms as first-order concerns for federation protocol design, each of which can defeat the commoning purpose independently of the others:

1. **Reproductive-labour invisibilisation.** The historically prior capture mechanism (Federici, Mies, Bresnihan, Bhattacharya, Gibson-Graham): naturalising, de-valorising, or invisibilising the care / provisioning / maintenance work that reproduces the associational practice the protocol serves. When this mechanism is active, every subsequent capture mechanism appears ideologically neutral because the substrate move has already happened. Federation protocol specifications must account for the visibility of reproductive work (who maintains the nodes, who provisions the infrastructure, who carries the relational work that sustains bilateral trust, who does the translation labour across ontologies) as first-order coordination content. A protocol that cannot name this work is structurally vulnerable to the same capture pattern that destroyed the historical commons.
2. **Protocol lock-in.** Where protocol specifications accrue path-dependent commitments (data formats, authentication schemes, delivery topologies) that make exit costly, federation becomes a substitute for the associational organising it was meant to serve, and captures the participants into the protocol's specific technical lineage.
3. **Gatekeeper-role accrual.** Where admin, operator, or maintainer roles accrue disproportionate authority over trust edges, event routing, or schema evolution, federation re-centralises into an administrative layer — the peer-governance-Wikipedia failure mode documented in the wiki opposition literature (Kostakis 2010, Simonite 2013, Gallus).
4. **Data asymmetry.** Where event flows or observability rights are asymmetric between peers (one side sees the other's patterns without reciprocity), the federation becomes extractive regardless of whether any single event transfer is legitimate.

These four mechanisms are co-equal. No single one is "the" federation power-capture risk; the protocol must carry all four as first-order specification concerns, alongside the cosmo-local-production subsidiarity framing (from `spore.connection.cosmo-local-production`) and the decentralisation-myth bundle (from `spore.connection.decentralization-theater-opposition`, `spore.connection.digital-labor-peer-production-opposition`, `spore.connection.peer-governance-wikipedia-opposition`).

This section is a motivating-language addition. It does not change any specific protocol mechanism described below; the Sovereignty Invariants, Trust Model, and Federation Mechanics sections remain as specified. What changes is what a competent reader is meant to hold in mind when reading those sections: each mechanic is evaluated against all four capture mechanisms, and against the commoning-work criteria of reproductive-labour visibility.

**Opposition density acknowledgement.** The primary evidence cluster behind this framing (`spore.mycorrhizal-federation-protocol:power-capture`) is contested: 13 supporting vs 12 opposing source-claims (48% opposition density) in the current intake corpus as of 2026-04-18. The opposition is substantive — it identifies specific failure modes in "decentralised" / "peer-to-peer" / "federated" coordination attempts (FairCoin, digital-labour dynamics, peer-governance-Wikipedia, openwashing, cooperative-degeneration). The canon reading is that these opposition claims identify *what to decline* rather than disqualifying the entire federation framing; the four capture mechanisms named above are derived partly from the opposition evidence itself. A competent reader reads this section alongside the opposition bridge notes listed above, not around them.

See `spore.connection.reproductive-commoning` (primary source for mechanism 1 above and for the A–C–A' framing) and the shared canon-framing note `docs/research/connections/canon-framing-reproductive-commoning.md` for the full wiki-lineage citation and the coordinated IC + PM secondary framings.

## What Counts as a Node

In Agent Commons, a node is any sufficiently coherent sovereign party participating in federation, for example:

- a person with local tools and memory
- a team or working group
- an organization
- a federation or network-of-networks
- a software-hosted agent acting on behalf of one of the above

The current implementation most often represents nodes as software peers with cryptographic identity, but the protocol is intended to describe relations between broader kinds of holons as well.

## Sovereignty Invariants

These hold at every scale and are non-negotiable:

1. **Each node maintains sovereign authority over its own knowledge representation.** No external agent can write to a node's authoritative data without explicit consent. Data arrives as proposals, not commands.
2. **Sharing is opt-in.** A node chooses what to share, with whom, and under what conditions. There is no global read access.
3. **Identity is self-sovereign.** Each node generates and controls its own cryptographic identity (current implementation: X25519 keypair). Identity is not delegated by a central authority.
4. **Local-first operation.** Every node must function fully when disconnected. Federation enhances; it does not enable.

## What Flows Between Nodes

Federation exchanges **domain events** — structured notifications that a node has created, updated, or retracted a piece of knowledge.

### Domain Event Types

| Event Type | Payload | Direction |
|------------|---------|-----------|
| `entity_created` | Entity URI, type, metadata | Outbound from origin |
| `entity_updated` | Entity URI, changed fields | Outbound from origin |
| `task_created` | Task key, project, status | Outbound from origin |
| `claim_anchored` | Claim RID, tx_hash, chain_id | Outbound from origin |
| `attestation_added` | Claim RID, attester, confidence | Outbound from origin |
| `commitment_created` | Pool URI, commitment details | Outbound from origin |
| `vault_sync` | Encrypted file content, path | Bidirectional |

### Exchange Rules

- Events are **idempotent**: receiving the same event twice produces no change
- Events carry **provenance**: origin node, timestamp, signature
- Events are **scoped**: a node subscribes to specific event types from specific peers
- Events may be **encrypted**: E2EE via authenticated encryption (AEAD) when both peers support it, plaintext fallback otherwise. (Current implementation: X25519 key agreement + ChaCha20-Poly1305.)

Encryption here protects payload content in transit. It does not by itself conceal which peers are connected, when they exchange events, or what traffic patterns exist between them.

## Trust Model

Trust is established progressively between sovereign parties.

### Bilateral Trust (Current)

1. **Discovery**: Out-of-band introduction (Signal message, shared meeting)
2. **Handshake**: Edge proposal with deferred approval for manual verification. (Current implementation: KOI-net edge proposal with `defer_approval` flag.)
3. **Verification**: SAS (Short Authentication String) confirmed over a trusted channel
4. **Activation**: Both peers approve edges; federation begins
5. **Ongoing**: Events flow according to subscribed types; either peer can revoke at any time

### Multilateral Trust (Future)

- **Invite tokens**: Admin-generated tokens carrying connection config (relay, IP) + HMAC integrity
- **Transitive trust**: If A trusts B and B trusts C, A can discover C through B's shared entities (but must still establish its own bilateral trust)
- **Organizational endorsement**: An organization's coordinator vouches for its members' nodes
- **Reputation**: Event history builds a track record (consistent, timely, accurate contributions)

## Federation Mechanics

### Transport

Federation transport must provide:

- **Edge management**: Bilateral consent to propose, approve, and revoke connections
- **Event sequencing**: Events are ordered and delivered reliably
- **Delivery assurance**: Events are queued until delivered; no silent loss
- **Configurable delivery mechanism**: Polling, push, or hybrid — the protocol does not mandate a single transport topology

See [store-and-forward relay](../protocols/store-and-forward-relay.md) for the pair-level relay protocol.

**Current implementation: KOI-net** (BlockScience design) — outbox pattern (events written to a local queue in the same database transaction as the domain change, then delivered asynchronously), configurable polling intervals, optional relay nodes for peers behind NAT.

### Replication Model

The current implementation uses **event-driven eventual consistency**, not full state replication:

- Each peer maintains its own materialized view of shared knowledge
- Events describe changes, not full state — peers apply events to their local graph
- Conflicts are resolved by the receiving node (last-writer-wins for metadata, append-only for claims/attestations)
- Vault sync uses a stronger model: content-addressed files with sequence numbers for ordering

This convergence layer is transport-level, not semantic governance. Conflict handling keeps replicas usable; it does not determine whether two claims, ontological mappings, or interpretations are logically compatible. Contradictory meaning must remain reviewable through claims, evidence, attestation, and discourse rather than being treated as solved by merge behavior alone.

### Failure Modes

| Failure | Behavior |
|---------|----------|
| Peer unreachable | Events queue locally; delivered on reconnection |
| Event rejected | Logged with reason; no retry (manual investigation) |
| Schema mismatch | Events with unknown types are stored but not processed |
| Key compromise | Peer revokes edges; re-establishes with new identity |

## Relationship to the Holonic Network

Federation is primarily **network** — it creates lateral connections between sovereign nodes. But it respects the **holonic** structure:

- Federation edges do not bypass governance boundaries (a spec DAG in Project A has no authority over Project B)
- Shared entities flow through federation but governance relationships do not
- Cross-project references are informational, not authoritative
