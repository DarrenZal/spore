---
doc_id: fg.store-and-forward-relay
doc_kind: spec
status: draft
depends_on:
  - fg.mycorrhizal-federation-protocol
---

# Store-and-Forward Relay

An operational protocol for relaying federated messages between sovereign nodes that cannot reach each other directly. Part of the mycorrhizal federation protocol; extracted here because the relay pattern is reusable wherever NAT traversal, asynchronous connectivity, or intermittent uptime prevents direct peering.

## Purpose

Not all nodes in a federation can maintain direct connections. Common reasons:

- **NAT / firewall**: A node behind carrier-grade NAT has no stable inbound address.
- **Intermittent uptime**: A laptop or mobile device is not always online.
- **Asymmetric availability**: Two nodes whose online windows do not overlap need an intermediary to hold messages in transit.

The store-and-forward relay solves this by introducing a third node — a relay — that receives, queues, and forwards messages on behalf of the origin and destination. The relay is a sovereign holon participating in federation, not a dumb pipe. It has its own graph, its own identity, and its own membrane — it chooses to relay.

## Relay Topology

Three roles:

| Role | Description |
|------|-------------|
| **Origin** | The node that produces a message (domain event, vault sync payload, etc.) |
| **Relay** | A sovereign node that receives, queues, and forwards messages between origin and destination |
| **Destination** | The node that ultimately receives and processes the message |

A relay is always a full federation peer. It maintains bilateral edges with both origin and destination. It does not operate as a transparent proxy — both sides know the relay exists and have explicitly consented to its participation.

A single node may serve as relay for multiple origin-destination pairs. A destination may have multiple relays (redundancy). The relay role is not exclusive — a relay node may also be an origin or destination for other traffic.

## Message Forwarding State Machine

```
received → queued → forwarding → delivered | expired
```

| State | Meaning |
|-------|---------|
| `received` | Relay has accepted the message from the origin and validated its signature |
| `queued` | Message is stored locally, awaiting the destination's next poll or push window |
| `forwarding` | Relay is actively transmitting to the destination |
| `delivered` | Destination has acknowledged receipt |
| `expired` | TTL elapsed before delivery; message purged |

Transitions are unidirectional except for `forwarding → queued` (retry on transient failure). A message that reaches `delivered` or `expired` is terminal.

## TTL and Retention

- **Default TTL: 168 hours (7 days).** Discovered empirically during Phase 11a as a reasonable window for intermittently-connected peers.
- TTL is configurable per edge. A relay and its peers may negotiate shorter or longer windows depending on use case.
- Messages that expire are purged. No post-delivery retention — once a message reaches `delivered`, the relay discards its copy.
- The relay does not archive. It is a transit node, not a backup service.

## End-to-End Encryption

Federation messages are encrypted using X25519 key agreement with ChaCha20-Poly1305 authenticated encryption.

Two levels of relay encryption are relevant:

**Current implementation:** The relay decrypts the inbound message (encrypted to the relay's public key by the origin), holds plaintext transiently in memory during the forwarding operation, and re-encrypts to the destination's public key before delivery. Plaintext is never persisted to disk — it exists only for the duration of the re-encryption step.

**Desired invariant:** The origin encrypts directly to the destination's public key. The relay handles only ciphertext it cannot decrypt. This eliminates the transient plaintext window entirely. The relay becomes a pure transport node with no ability to read message content, even momentarily.

The gap between current implementation and desired invariant is the `translate` membrane operation applied to cryptographic boundary crossing. Today the relay performs active translation (decrypt-reencrypt); the target is passive forwarding (opaque ciphertext relay). Both satisfy the sovereignty invariant that sharing is opt-in and the relay cannot retain content, but the desired invariant provides a stronger guarantee: the relay *cannot* read, not merely *does not* read.

## Edge Authorization

Relay participation requires bilateral consent on both edges:

- **Origin ↔ Relay**: The origin must approve the relay as a forwarding peer. The relay must accept the forwarding responsibility.
- **Relay ↔ Destination**: The relay must approve the destination as a delivery target. The destination must accept the relay as a message source.

Either party on either edge can revoke at any time. Revocation is immediate — queued messages for a revoked edge are purged, not delivered.

Authorization scope includes:
- Which event types the relay will forward (e.g., `vault_sync` only, or all domain event types)
- Which shared folders or namespaces are in scope (for vault sync)
- Rate and size limits (relay's resource boundary)

## Membrane Operations

The relay protocol exercises four of the seven membrane operations defined in the coordination grammar:

| Operation | How the relay uses it |
|-----------|-----------------------|
| **expose** | Origin makes selected content (e.g., Shared/ folder) visible to the relay for forwarding |
| **translate** | Relay re-encrypts content across the cryptographic boundary (current implementation; see E2EE section) |
| **authorize** | Bilateral edge approval grants polling and forwarding rights |
| **revoke** | Either peer can drop an edge; queued messages for that edge are purged |

The remaining three (`attest`, `contest`, `fork`) are not exercised in the relay protocol itself, though they may be exercised by higher-level patterns operating over relayed messages.

## Conformance Notes

**MUST:**
- Relay maintains sovereignty invariants: it owns its graph, sharing is opt-in, identity is self-sovereign
- Messages are encrypted in transit (at minimum, origin-to-relay and relay-to-destination)
- TTL is enforced; expired messages are purged
- No plaintext is persisted to disk at any point in the relay pipeline
- Revocation is immediate and terminal for queued messages on the revoked edge

**MAY:**
- Relay logs metadata (message ID, timestamps, sizes) for operational monitoring
- Destination sends delivery receipts to relay (enabling `delivered` state confirmation)
- Multiple relays for redundancy on a single origin-destination path
- Relay nodes forward across more than one hop (multi-hop relay), though this is not yet validated

## Validation Evidence

**Phase 11a Pilot: Dobby as Store-and-Forward Relay**

Three holons: Darren's MacBook (origin), Dobby NUC (relay), Shawn's node (destination).

| Acceptance Criterion | Result |
|---------------------|--------|
| AC1: Shawn registered as federation peer | PASS |
| AC2: Shared folder scope configured | PASS |
| AC3: Relay forwards vault sync events | PASS |
| AC4: E2EE active on both edges | PASS |
| AC5: TTL and retention enforced | PASS |

**Validated:** Dobby-side relay mechanics — message reception, queuing, forwarding logic, and E2EE re-encryption all function correctly. The relay node successfully receives from the origin and queues for the destination.

**Pending:** End-to-end relay receipt from Shawn's node. The destination-side confirmation (Shawn's node polling, receiving, and processing relayed messages) has not yet been fully validated. The relay protocol is proven on the relay and origin sides; full bidirectional validation awaits Shawn-side testing.

## Related

- **Mycorrhizal federation protocol** (`fg.mycorrhizal-federation-protocol`) — the parent protocol governing all federation mechanics; the relay is one operational mode within it.
- **Federated knowledge exchange** (`fg.federated-knowledge-exchange`) — the pattern describing what flows between nodes; the relay is one transport mechanism for those flows.
