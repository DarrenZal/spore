# Spore Substrate Stack Assessment

## 1. Scope

This memo is a repo-specific architecture pressure test, not a canon or foundation edit. It asks:

- which parts of the recent external review have real architectural weight
- what Ink & Switch and adjacent tools can actually help with
- what substrate split Spore should prefer
- which current docs should tighten their wording so the project reads as bounded architecture rather than substrate overclaim

This memo treats the review concerns as architecture-boundary tests, not as proof of incoherence.

## 2. Review Feedback: Weight And Meaning

| Concern | Weight | Why It Matters | What It Means For Spore |
|--------|--------|----------------|-------------------------|
| Metadata/privacy paradox | Real | Encrypted payloads do not hide relationship structure, traffic patterns, or communication timing. | Spore should claim sovereignty-first disclosure control, not strong metadata privacy, unless it later builds topology-hiding mechanisms explicitly. |
| CRDTs vs semantic integrity | Very real | Merge/convergence does not decide whether concurrent semantic edits are logically compatible. | Spore should not model canonical semantic knowledge as a casually editable shared graph. Canonical state should be governed through claims, attestations, resolutions, and typed state transitions. |
| Distributed graph query performance | Real | Arbitrary live graph queries across intermittently available peers are expensive and fragile. | Spore should treat federation as event exchange plus selective materialization and local query, not as one global live query fabric. |
| Schema rigidity | Real, but a design tension rather than a contradiction | Too-loose schemas kill automation; too-rigid global ontologies kill adoption. | Spore should keep its current interoperability posture: shared identifiers, envelopes, provenance, profiles, and translation mappings rather than one universal schema. |

## 3. Current Spore Posture: Better Than The Review Assumes

Spore already leans toward explicit architecture boundaries rather than substrate maximalism:

- [project-vision.md](../../project-vision.md) already frames interoperability as shared identifiers, event formats, provenance rules, profiles, and translation mappings rather than one unified ontology.
- [constitutional-artifacts-and-graph-projections.md](../../foundations/constitutional-artifacts-and-graph-projections.md) already treats text and graph as complementary views rather than a graph-only system.
- [project-vision.md](../../project-vision.md) already uses explicit edge permissions plus consent/visibility semantics.
- [store-and-forward-relay.md](../../protocols/store-and-forward-relay.md) already describes asynchronous delivery and intermittent peers instead of assuming a permanently online mesh.

So the critique is not "Spore is incoherent." The critique is: **if Spore overclaims substrate guarantees, these are the places it will break first.**

## 4. What Ink & Switch Can Materially Help With

| Project / Tradition | What It Helps With | What It Does Not Solve | Recommendation |
|---------------------|--------------------|-------------------------|----------------|
| Local-first / Automerge | Offline-first editing, sync, versioned local state, collaborative drafting | Semantic graph integrity, ontology conflict, metadata privacy, distributed graph query | Borrow for artifacts and drafting surfaces, not as the arbiter of canonical graph truth. |
| Peritext | Domain-specific replicated semantics for rich text | Knowledge-graph semantics, ontology governance | Useful as proof that replicated data types should be domain-shaped. Not a graph-semantic solution. |
| Cambria | Schema evolution, compatibility, translation/lensing between versions or document shapes | Governance of meaning, semantic truth, ontology reconciliation by itself | Highly relevant. This is the strongest Ink & Switch contribution to Spore's "Goldilocks schema" problem. |
| Keyhive / Beelay direction | Capabilities, encrypted sync, access control for local-first systems | Relationship-hiding, traffic-analysis resistance, full metadata privacy | Useful for disclosure control and edge authorization. Do not market it as topology privacy. |

## 5. Adjacent Tools: What They Actually Solve

| Tool / Class | What It Solves | What It Does Not Solve | Spore Fit |
|--------------|----------------|-------------------------|-----------|
| `bft-json-crdt` | Byzantine/tamper resistance for replicated JSON ops | Semantic integrity, ontology conflict, query performance, topology privacy | Research-only for now. Not a primary Spore direction. |
| Automerge / Yjs class systems | Local convergence, collaborative editing, offline sync | Semantic correctness of concurrent graph edits | Good for draft artifacts, notes, frontmatter-scale state, not canonical semantic graph resolution. |
| TerminusDB-like typed graph/document stores | Branching, history, schema constraints, typed relations, reviewable versioned state | Offline-first peer editing, metadata privacy, live decentralized graph query across unreliable peers | Relevant to the canonical/reviewable semantic layer, or as a model for that layer, even if Spore does not adopt TerminusDB directly. |

## 6. Recommended Spore Substrate Split

Spore should not try to "pick one database" to solve every layer. The cleaner architecture is a stack with explicit responsibilities:

### Layer 1. Artifact Editing And Local Draft State

Use local-first/editor technology for:

- collaborative drafting
- working notes
- document-local structured state
- frontmatter-like coordination metadata where convergence is enough

Good fit:

- Automerge-class local-first editing
- Peritext-like domain-specific text semantics where rich text matters

Bad fit:

- authoritative semantic graph truth
- ontology resolution
- canonical governance state

### Layer 2. Access Control And Edge Authorization

Use capability-oriented and encrypted-sync ideas for:

- who may read, sync, forward, or administer a given edge or artifact
- disclosure control on a per-edge or per-surface basis
- local-first sharing with explicit authorization

Good fit:

- Keyhive/Beelay direction
- Spore's existing explicit consent and relay-edge model

Bad fit:

- pretending metadata privacy is solved
- pretending encrypted payloads hide topology

### Layer 3. Schema Evolution And Translation

Use Cambria-like thinking for:

- version compatibility
- translation between local profiles
- non-lockstep upgrades
- mapping between local ontologies and shared concepts

This is the strongest answer to the review's schema-rigidity concern. Spore should think in terms of:

- profile-level compatibility
- translation mappings
- typed envelopes
- evolvable schemas

not:

- one rigid universal ontology
- or unstructured markdown everywhere

### Layer 4. Canonical Semantic State

Canonical semantic state should be:

- typed
- versioned
- reviewable
- schema-constrained where appropriate
- governed through claims, attestations, decisions, and resolutions

The key move:

**Do not model canonical semantic knowledge as a shared mutable graph people casually edit. Model it as governed semantic state transitions.**

That means:

- graph edits are proposals or typed operations
- conflicting contributions remain distinct as claims/attestations until resolved
- canon-facing semantic updates are reviewed, not just merged

This is where a TerminusDB-like discipline is helpful conceptually, whether the implementation remains KOI-backed, custom, or hybrid.

### Layer 5. Federation And Query

Federation should be treated as:

- event exchange
- selective sync
- selective materialization
- local query over materialized views

not:

- arbitrary live SPARQL over a permanently available global federation

The right mental model is:

- local node = authoritative and queryable for what it stores
- federation = events and permissions that cause some remote state to be selectively mirrored or referenced
- cross-node querying = usually query local materializations, not the whole network live

## 7. The Most Important Design Rule

The strongest answer to the CRDT-vs-semantics critique is not a different merge algorithm. It is a different semantic model:

- not "two people edited the same graph edge, merge them"
- but "two parties made incompatible claims with provenance, now preserve both and route the disagreement through governance"

Spore already has the right primitives to move in that direction:

- claims
- evidence
- attestations
- discourse/decision structures
- reviewable authority
- contestability

That is stronger than asking transport or sync layers to invent semantic truth.

## 8. What To Borrow, What To Keep Out

### Borrow

- local-first editing and offline-first UX expectations
- schema translation / lensing ideas
- capability-based access control for synchronization
- strong version/history discipline for canonical semantic state

### Keep Heavily Qualified

- end-to-end encrypted sync as a disclosure-control mechanism
- domain-specific replicated structures beyond plain text
- typed graph/document stores as models for canonical reviewable state

### Keep Out Of The Core Story

- any implication that CRDT merge yields semantic integrity
- any implication that encrypted payloads imply metadata privacy
- any implication that Spore is building a live global query fabric by default
- prototype BFT-CRDT research as if it were production substrate

## 9. Repo-Specific Claim Tightening

These are the places where current docs are most likely to read as overpromising if left unqualified.

| File | Current Direction | Risk | Suggested Tightening |
|------|-------------------|------|----------------------|
| [README.md](../../README.md) | "graph projection for machines" and ecosystem framing around node substrate | Can be read as one general-purpose distributed graph platform story | Keep the grammar emphasis, but clarify that graph projection means machine-legible local/queryable representations and federated exchange, not one always-live global graph. |
| [project-vision.md](../../project-vision.md) | "queryable, composable, diffable, groundable" and "sensor node ... becomes queryable by agents" | Can imply remote/global query without clarifying locality or selective materialization | Add language that queryability is local-first and federation-aware: queryable within a node, or through selectively materialized views under explicit permissions. |
| [project-vision.md](../../project-vision.md) | "clear consent and visibility semantics" | Strong, but can be mistaken for topology privacy | Tighten to controlled disclosure and visibility semantics. Do not imply relationship-hiding or traffic-analysis resistance unless implemented. |
| [mycorrhizal-federation-protocol.md](../../foundations/mycorrhizal-federation-protocol.md) | receiving node resolves conflicts; last-writer-wins for metadata | Fine for transport-level mechanics, but under-specified for semantic meaning | Add an explicit distinction between transport/state convergence and semantic/governance resolution. Claims and ontology-level contradictions should not be framed as solved by merge rules. |
| [constitutional-artifacts-and-graph-projections.md](../../foundations/constitutional-artifacts-and-graph-projections.md) | rich graph-projection story with eight projections | Strong conceptually, but can read as a single integrated technical engine | Clarify that these are conceptual projections over one coordination ecology, not a promise of one unified distributed query substrate. |
| [spore-instance-model.md](../../foundations/spore-instance-model.md) | node provides graph ops, entity resolution, federation transport, event processing | Correct, but can still read as substrate sufficiency | Add a non-goal or note: the grammar does not require live network-wide query, full topology privacy, or one canonical storage engine. |
| [store-and-forward-relay.md](../../protocols/store-and-forward-relay.md) | encrypted forwarding with relay metadata logging | Already fairly honest | Keep as-is structurally, but if public-facing docs cite it, do not summarize it as privacy-complete. It is encrypted transport with explicit metadata leakage and a relay plaintext gap in current implementation. |

## 10. Recommended Near-Term Wording Posture

The key framing change is small but important:

- say **sovereignty-first, controlled disclosure, local-first operation, selective federation**
- do not say or imply **privacy-complete decentralized graph**

Likewise:

- say **governed semantic state**
- do not imply **semantic truth emerges from merge**

And:

- say **local query plus selective materialization**
- do not imply **live global SPARQL across intermittently available peers**

## 11. Recommendation

The best next step is **not** a canon rewrite. The right next step is a bounded wording/architecture pass on a small set of docs:

1. [project-vision.md](../../project-vision.md)
2. [mycorrhizal-federation-protocol.md](../../foundations/mycorrhizal-federation-protocol.md)
3. [spore-instance-model.md](../../foundations/spore-instance-model.md)
4. optionally [README.md](../../README.md) for a one-line public-facing qualifier

That pass should:

- tighten privacy claims
- separate semantic governance from merge/sync
- frame federation as event exchange plus materialization
- preserve Spore's current architecture without overpromising substrate capabilities

## 12. Source Basis

Primary external sources used for this assessment:

- Ink & Switch, "Local-first software" — https://www.inkandswitch.com/local-first-software/
- Ink & Switch, "Project Cambria" — https://www.inkandswitch.com/cambria/
- Ink & Switch, "Peritext" — https://www.inkandswitch.com/project/peritext/
- Ink & Switch Dispatch 014, GAIOS / Keyhive update — https://www.inkandswitch.com/newsletter/dispatch-014/
- Automerge docs, document/conflict model — https://automerge.org/docs/reference/documents/
- TerminusDB docs — https://terminusdb.org/docs/
- `bft-json-crdt` repository — https://github.com/jackyzha0/bft-json-crdt

## 13. Guardrails

- Do not treat local-first sync as semantic governance.
- Do not treat encrypted payloads as topology privacy.
- Do not treat cross-node queryability as equivalent to live global query.
- Do not let schema flexibility collapse into schema vagueness.
- Do not rewrite canon/foundation docs until the wording pass is scoped narrowly enough to preserve current architecture.
