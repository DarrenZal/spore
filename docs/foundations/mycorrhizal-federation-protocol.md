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

1. **Each node owns its graph.** No external agent can write to a node's knowledge graph without explicit consent. Data arrives as proposals, not commands.
2. **Sharing is opt-in.** A node chooses what to share, with whom, and under what conditions. There is no global read access.
3. **Identity is self-sovereign.** Each node has its own identity boundary. In the current implementation, software peers use cryptographic identity (currently X25519 keypair). Identity is not delegated by a central authority.
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
- Events may be **encrypted**: E2EE (X25519 + ChaCha20-Poly1305) when both peers support it, plaintext fallback otherwise

## Trust Model

Trust is established progressively between sovereign parties.

### Bilateral Trust (Current)

1. **Discovery**: Out-of-band introduction (Signal message, shared meeting)
2. **Handshake**: KOI-net edge proposal with `defer_approval` for manual verification
3. **Verification**: SAS (Short Authentication String) confirmed over a trusted channel
4. **Activation**: Both peers approve edges; federation begins
5. **Ongoing**: Events flow according to subscribed types; either peer can revoke at any time

### Multilateral Trust (Future)

- **Invite tokens**: Admin-generated tokens carrying connection config (relay, IP) + HMAC integrity
- **Transitive trust**: If A trusts B and B trusts C, A can discover C through B's shared entities (but must still establish its own bilateral trust)
- **Organizational endorsement**: An organization's coordinator vouches for its members' nodes
- **Reputation**: Event history builds a track record (consistent, timely, accurate contributions)

## Federation Mechanics

### Transport: KOI-net

The current federation backbone is KOI-net (BlockScience design), implementing:

- **Edge management**: Propose, approve, revoke bilateral connections
- **Event queuing**: Outbox pattern — events are written to a local queue in the same database transaction as the domain change, then delivered asynchronously
- **Polling**: Peers poll each other on configurable intervals for pending events
- **Relay**: Optional relay nodes for peers behind NAT (not yet implemented)

### Replication Model

The current implementation uses **event-driven eventual consistency**, not full state replication:

- Each peer maintains its own materialized view of shared knowledge
- Events describe changes, not full state — peers apply events to their local graph
- Conflicts are resolved by the receiving node (last-writer-wins for metadata, append-only for claims/attestations)
- Vault sync uses a stronger model: content-addressed files with sequence numbers for ordering

### Failure Modes

| Failure | Behavior |
|---------|----------|
| Peer unreachable | Events queue locally; delivered on reconnection |
| Event rejected | Logged with reason; no retry (manual investigation) |
| Schema mismatch | Events with unknown types are stored but not processed |
| Key compromise | Peer revokes edges; re-establishes with new identity |

## Relationship to Mycelial Holarchy

Federation is primarily **mycelial** — it creates lateral connections between sovereign nodes. But it respects the **holarchic** structure:

- Federation edges do not bypass governance boundaries (a spec DAG in Project A has no authority over Project B)
- Shared entities flow through federation but governance relationships do not
- Cross-project references are informational, not authoritative
