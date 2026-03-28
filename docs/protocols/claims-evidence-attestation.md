---
doc_id: fg.claims-evidence-attestation
doc_kind: spec
status: draft
depends_on:
  - fg.constitutional-artifacts
---

# Claims, Evidence, and Attestation Anchoring

The epistemic coordination layer: how coordination ecologies make claims about the world, link evidence to those claims, and anchor trust through attestation — without requiring a single source of truth.

## Purpose

Every coordination ecology makes epistemic claims: "this commitment was fulfilled," "this species was observed at this location," "this entity refers to this organization," "this proposal should be adopted." These claims need lifecycle management — they are proposed, supported, challenged, superseded, sometimes reinstated. Evidence accumulates for and against them. Attestations from situated witnesses give them weight.

This protocol defines the lifecycle states, evidence-linking relations, and attestation mechanics that make epistemic coordination tractable across sovereign nodes with different trust models.

## Claim Lifecycle State Machine

```
proposed → supported → challenged → superseded
                           |
                       reinstated (if challenge fails)
```

| State | Meaning | Transition trigger |
|-------|---------|-------------------|
| `proposed` | A claim has been asserted but has no supporting evidence or attestation beyond the claimant | Initial assertion by any holon |
| `supported` | At least one piece of independent evidence or attestation corroborates the claim | Evidence linked via `supports` relation, or attestation from a distinct attester |
| `challenged` | Counter-evidence or a contesting attestation has been registered | Evidence linked via `challenges` relation, or `contest` membrane operation |
| `superseded` | A newer claim replaces this one, with its own evidence basis | `revises` relation from the superseding claim |
| `reinstated` | A challenged claim whose challenge was itself found insufficient | Challenge evidence retracted or outweighed by subsequent corroboration |

Transitions are governed, not automatic. Moving from `supported` to `challenged` requires actual counter-evidence or a contesting attestation — not merely the passage of time. The protocol defines the *states and triggers*, not the decision procedure for evaluating evidence strength (which varies by domain and governance context).

## Evidence Linking

Evidence bears on claims through two directional relations:

- **`supports`**: Evidence that corroborates a claim (positive epistemic weight)
- **`challenges`**: Evidence that undermines a claim (negative epistemic weight)

### Evidence Types

| Type | Example | Typical source |
|------|---------|---------------|
| Observation | "Herring spawning observed at Cowichan Bay, March 2026" | Ecological sensor, field report |
| Measurement | "Water temperature 8.2°C at station 14" | IoT sensor, lab result |
| Deliverable | "Mapping workshop output: 23 commitments documented" | Project artifact |
| Fulfillment record | "Commitment #47 redeemed: seed library delivered to Saanich group" | Domain event |
| Sensor output | "Satellite imagery shows 12% canopy loss in watershed" | Remote sensing pipeline |
| Prior decision | "Phase 11b decision memo promoted discourse-as-governance" | Discourse artifact |

Every piece of evidence carries **provenance**: origin node, timestamp, method of collection or generation, and chain of custody. Evidence without provenance is still admissible (the protocol does not gatekeep) but carries less weight in attestation evaluation.

## Attestation: Strength and Decay

An attestation is situated witnessing — an attester (holon) bears witness to a claim, event, or piece of evidence. Attestation is the mechanism by which distributed trust is built without centralization.

### Strength Factors

Attestation strength is not a single score. It is a composite of:

- **Attester count**: More independent attesters increase confidence
- **Attester diversity**: Attestations from different organizational contexts, geographic locations, or knowledge domains carry more weight than multiple attestations from a single cluster
- **Recency**: Recent attestations bear more on current state than old ones
- **Contest status**: An uncontested attestation carries more weight than one with active disputes

### Decay

Attestations are not permanent. They decay through:

- **Contradiction**: New evidence directly contradicts the attested claim
- **Elapsed time**: Attestations about dynamic state (e.g., species presence, commitment status) lose relevance as the underlying state changes
- **Revocation**: An attester withdraws their attestation (changed understanding, corrected error)

The protocol defines that decay exists and names its causes. It does not prescribe a specific decay function — that is domain-specific. An ecological monitoring network may decay attestations faster than a governance archive.

### Recursive Trust

Attestation is itself a claim at a higher level: "I attest that X" is a claim about one's witnessing. This recursion is deliberate. It means attestations can themselves be attested, challenged, and evidenced — giving the system trust without requiring a trusted root. Trust emerges from the pattern of corroboration across independent attesters, not from any single authority.

## Anchoring Modes

Claims and their attestations need to be anchored — made durable and verifiable beyond the moment of assertion. The protocol accommodates two valid anchoring strategies. They are not competing; a single claim may use both.

### Ledger-Based Anchoring

Persistence and verifiability through on-chain records.

- **Mechanism**: Claims, attestations, or their hashes are written to a distributed ledger (e.g., Celo EAS, Regen Ledger)
- **Properties**: Immutability (cannot be retroactively altered), public verifiability (anyone can check), timestamped (ledger provides canonical ordering)
- **Trade-offs**: Requires on-chain transaction costs, ledger availability, and a decision about what to anchor (full claim vs. hash). Not all claims warrant on-chain permanence.

**Example (BKC):** Commitment pool attestations are anchored on Celo via EAS (Ethereum Attestation Service). Steward approval gates require on-chain attestation before commitments become active. Ecological claims about bioregional state are anchored on Regen Ledger. The ledger provides the verifiability substrate; the protocol provides the lifecycle semantics.

### Epistemic Grounding

Confidence through corroboration and provenance chains, without ledger dependency.

- **Mechanism**: Claims are grounded through entity resolution and provenance tracking. A 3-tier resolution process (exact match → fuzzy match via Jaro-Winkler → semantic match via embeddings) establishes entity identity. Provenance chains trace claims back through their evidence and attestation history.
- **Properties**: Confidence through convergence (multiple independent sources resolving to the same entity or supporting the same claim), auditability (provenance chain is inspectable), no ledger dependency.
- **Trade-offs**: No immutability guarantee — claims and resolutions can be revised. Confidence is probabilistic, not cryptographic. Depends on the quality and diversity of the resolution corpus.

**Example (darren-workflow):** Entity resolution across meeting transcripts, vault notes, and backend knowledge graph. When three independent sources (Otter transcript, vault note, backend entity) all resolve to the same person or organization, the claim "this mention refers to entity X" is grounded through corroboration — not through a ledger entry, but through convergent evidence from independent provenance chains.

### The Distinction

**Anchoring** is a persistence and verifiability strategy — how you make a claim durable and checkable. **Grounding** is an epistemic support strategy — how you establish that a claim is warranted. Ledger-based anchoring provides strong persistence with cryptographic verifiability. Epistemic grounding provides strong warrant through corroboration and provenance. A well-anchored claim may be poorly grounded (on-chain but unsupported by evidence). A well-grounded claim may be unanchored (strong evidence but no durable record). The protocol treats both as valid and complementary.

## Membrane Operations

Three membrane operations are central to the attestation layer:

| Operation | Role in attestation |
|-----------|---------------------|
| **attest** | Cross-membrane witnessing — an attester in one holon bears witness to a claim, event, or evidence in another. This is the primary mechanism for building distributed trust. |
| **contest** | Cross-membrane challenge — an attester disputes a claim or another attestation. Triggers the `challenged` lifecycle transition. |
| **expose** | Making claims visible across a membrane — a precondition for attestation. A claim that is not exposed cannot be attested or contested from outside its origin holon. |

## Conformance Notes

**MUST:**
- Claims follow the lifecycle state machine (proposed → supported → challenged → superseded, with reinstated branch)
- Evidence is linked to claims via `supports` or `challenges` relations
- Evidence carries provenance (origin, timestamp, method)
- Attestations identify the attester (holon identity)

**MAY:**
- On-chain anchoring of claims or attestation hashes
- Decay computation (domain-specific decay functions)
- Multi-hop attestation aggregation (attestations of attestations)
- Automated lifecycle transitions based on evidence thresholds

## Validation Evidence

### BKC: Ledger-Based Anchoring

- **On-chain attestation**: Celo EAS anchoring for commitment pool attestations. Steward approval gates require on-chain attestation before commitment activation.
- **Ecological claims**: Regen Ledger for bioregional ecological claims (species observations, land stewardship evidence).
- **Commitment lifecycle**: The commitment lifecycle (proposed → verified → active → evidence_linked → redeemed) exercises claim and evidence linking at the economic coordination layer.

*Note: BKC's 33,400 VCV and commitment lifecycle are primarily evidence for the commitment-pooling pattern. The attestation-relevant aspects are the steward approval gates and on-chain anchoring mechanics, not the commitment economics themselves.*

### darren-workflow: Epistemic Grounding

- **Entity resolution as grounding**: 3-tier resolution (exact → fuzzy via Jaro-Winkler → semantic via OpenAI embeddings) establishes entity identity claims through convergent evidence rather than ledger immutability.
- **Provenance chains**: `document_entity_links` table tracks which documents mention which entities, creating auditable provenance chains from mention to resolution to entity.
- **mentionedIn sync**: Bidirectional linking (`mentionedIn` frontmatter arrays) makes the grounding visible and inspectable.

## Related

- **Commitment pooling** (`fg.commitment-pooling`) — commitment lifecycle exercises claim and evidence linking at the economic layer. The boundary: this protocol handles epistemic state (claims, evidence, attestation); commitment pooling handles economic state (pools, fulfillment, settlement).
- **Federated knowledge exchange** (`fg.federated-knowledge-exchange`) — the transport mechanism by which claims, evidence, and attestations flow between nodes.
- **Discourse as governance** (`fg.discourse-as-governance`) — discourse depends on the epistemic infrastructure defined here. Proposals are claims; arguments are attestations; evidence bears on both.
