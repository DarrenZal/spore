---
doc_id: spore.connection.hansen-ghrist-discourse-graphs
doc_kind: research
status: draft
depends_on:
  - spore.connection.sheaf-theory-formalization
relates_to:
  - spore.connection.bosca-ghrist-local-to-global
  - spore.connection.obstruction-aware-sheafification
  - spore.claims-evidence-attestation
  - spore.discourse-as-governance
sources:
  - title: "Hansen & Ghrist (2021), Opinion Dynamics on Discourse Sheaves"
    type: primary
    url: https://arxiv.org/abs/2005.12798
    venue: "SIAM Journal on Applied Mathematics"
    authors: "Jakob Hansen, Robert Ghrist"
  - title: "Bosca & Ghrist (2026), Selective Adaptation of Beliefs and Communication on Cellular Sheaves"
    type: primary
    url: https://arxiv.org/abs/2601.22431
    authors: "Vicente Bosca, Robert Ghrist"
  - title: "Chan (2023), Discourse Graphs for Augmented Knowledge Synthesis: What and Why"
    type: primary
    url: https://joelchan.me/assets/pdf/Discourse_Graphs_for_Augmented_Knowledge_Synthesis_What_and_Why.pdf
    authors: "Joel Chan"
  - title: "Chan, discourse-graph working notes (Obsidian Publish)"
    type: secondary
    url: https://publish.obsidian.md/joelchan-notes/discourse-graph/patterns/PTN+-+discourse+graph
  - title: "Hansen (2020), A Gentle Introduction to Sheaves on Graphs"
    type: secondary
    url: https://www.jakobhansen.org/publications/gentleintroduction.pdf
  - title: "Literature gap confirmed via web search 2026-04-18"
    type: internal-derived
    note: "Argumentation-mining + GNN literature (Multi-view Hierarchical GNN; bipolar gradual semantics; argument-mining graph representation learning) stays on flat graphs. Sheaf-theoretic work (Hansen-Ghrist, Bosca-Ghrist, Sheaf4Rec, Cooperative SNNs, Barbero connection Laplacians) stays on agent/social graphs. No prior construction fuses cellular sheaves with QCEA discourse graphs."
disposition: novel synthesis
research_subkind: bridge_note
concepts:
  - discourse-graphs
  - cellular-sheaves
  - two-layer-sheaf
  - restriction-map-attestation
  - cohomological-polarization
  - harmonic-peer-review
  - interpretive-drift
---

# Bridge Note: Cellular Sheaves × QCEA Discourse Graphs — A Two-Layer Construction for Decentralized Scientific Discourse

**Sources:** Hansen & Ghrist (2021, arXiv:2005.12798); Bosca & Ghrist (2026, arXiv:2601.22431); Chan (2023, *Discourse Graphs for Augmented Knowledge Synthesis*).

## 1. What the Naming Collision Hides

The term "discourse" names different objects in two traditions:

- **Hansen–Ghrist "discourse sheaves"** — a cellular sheaf on a *social interaction graph*. Agents on nodes, opinion vector spaces as stalks, communication-channel projections as restriction maps. Develops polarization (H¹ ≠ 0) and propaganda (deceptive restriction maps) as algebraic phenomena.

- **Chan-style "discourse graphs" (QCEA)** — a structured argument graph. Questions, Claims, Evidence, Arguments as nodes; `supports`, `opposes`, `is-answered-by` as edge types. Used to structure collective sense-making; has no native vector-space or sheaf treatment.

The two graphs never coincide. Hansen–Ghrist's nodes are epistemic *agents*; QCEA's nodes are epistemic *objects*. The argumentation-mining literature (Multi-view Hierarchical GNN, bipolar gradual semantics, argument-mining with graph representation learning) operates on flat graphs without sheaf structure. The sheaf-neural-network literature (Sheaf4Rec, Cooperative SNNs, Barbero-connection Laplacians, Bodnar's neural sheaf diffusion) applies sheaves to generic graphs without engaging argumentation. As of April 2026, no published work puts a cellular sheaf on a QCEA discourse graph or formalizes the joint agent × discourse structure.

This note proposes that construction and maps it to Spore primitives.

## 2. The Two-Layer Construction

A decentralized discourse graph supporting scientific argumentation is naturally two-layered:

```
Agent layer      (who)       — Hansen–Ghrist sheaf lives here
   ↕  engagement edges (agent ↔ claim/evidence/question)
Discourse layer  (what)      — new cellular sheaf lives here
```

Equivalently: one cellular sheaf on the bipartite incidence graph with vertex set `agents ⊔ discourse-nodes`, with restriction maps on agent–agent edges, discourse–discourse edges, and cross-layer engagement edges.

### Discourse-layer stalks

A claim's stalk is a vector space encoding its epistemic content. Three candidate factorizations (none canonical):
- Evidential support profile — a vector in the space of evidence types weighted by relevance.
- Semantic position — an embedding in a topic space.
- Modal content — what the claim asserts, presupposes, and predicts.

Stalks on evidence nodes carry the evidence's content; stalks on question nodes carry the question's semantic frame.

### Discourse-layer restriction maps

For an `evidence → claim` edge, the restriction map projects the evidence's content into the claim's support space. It encodes *what this evidence means for this claim* — the object that is actually contested in scientific argumentation. For a `claim₁ → claim₂` support edge, the map projects the upstream claim's stalk into the downstream claim's support space.

### Agent-layer restriction maps

Hansen–Ghrist's original construction: what each agent shares with each other along a communication edge.

### Cross-layer engagement maps

An agent ↔ claim edge carries a linear map from the agent's opinion stalk into the claim's support space. This is the surface where individual interpretation meets shared argument structure — and where most governance failures localize.

## 3. What Becomes Computable

### H⁰: Algebraic factionalization

dim H⁰ counts algebraically consistent global readings of the discourse. H⁰ = 1 ⇒ the community converges on one interpretation; dim H⁰ > 1 ⇒ multiple self-consistent paradigms coexist. This is stronger than component counting: H⁰ measures compatibility *modulo the restriction maps*, not just connectivity.

### H¹: Irreducible disagreement

H¹ ≠ 0 means local agreements exist that cannot be glued into any global one. This is the mathematical signature of paradigm-level disagreement — the kind that further discourse, under the existing restriction maps, cannot resolve. Spore's learning field (`learning_field_convergence.sql`, 26 field families, 82 governance clusters as of 2026-04-03) already computes a shadow of this through field-family + governance-cluster detection; the bridge makes the shadow rigorous and interpretable.

### Propaganda theorem: motivated citation as an algebraic lever

Hansen–Ghrist (2021) prove: a node with deceptive restriction maps can drive the network to any target equilibrium. In the two-layer setting this reads as: **an adversary controlling edge restriction maps can steer consensus without ever stating a false claim.** Motivated citation, cherry-picked evidence, and bad-faith critique are instances of deceptive restriction maps on `evidence → claim` and `claim → claim` edges. The governance consequence is sharp: attestation must live on edges, not just nodes.

### Peer review as harmonic extension

Given pinned positions (reviewers' fixed judgments), the sheaf Laplacian's harmonic extension produces a unique globally consistent reading of the discourse — *if and only if* H¹ = 0 and the restriction maps are honest. The replication crisis admits a sheaf-theoretic description: unaudited edge restriction maps inflate H¹ faster than consensus (H⁰) can consolidate. Bosca–Ghrist (2026)'s bidirectional pinned-neuron result adds that a landmark claim reshapes both upstream (evidence reinterpretation) and downstream (license for further claims), matching how experimental landmarks actually move a field.

### Learnable restriction maps: interpretive drift diagnostic

Bosca–Ghrist (2026)'s selective-adaptation framework formalizes restriction maps that evolve under a discrepancy objective. Two discourse failure modes become measurable:
1. **Rhetorical accommodation masking unchanged beliefs** — restriction maps drift to minimize surface disagreement while opinion stalks stay fixed.
2. **Belief update outpacing interpretive frame** — opinion stalks move but restriction maps stay rigid, producing a paradigm lag.

Bosca–Ghrist give stagnation bounds; the two-layer construction specializes these to scientific discourse.

### Federation and forking: principled glue conditions

Two scientific sub-communities with high mutual H¹ cannot be forcibly merged without destroying structure. Čech refinement of the cover identifies which restriction maps would need to change to permit gluing. This is the mathematics of when bridging work between paradigms is productive versus futile.

## 4. Mapping to Spore Primitives

| Construction | Spore primitive | Strength | Evidence |
|:---|:---|:---|:---|
| Discourse-layer stalks on QCEA nodes | Claims-evidence-attestation schema — each claim/evidence already carries structured content; lifting to a stalk is a typing discipline, not a new datum | Strong | `spore.claims-evidence-attestation` |
| Discourse-layer restriction maps on `supports`/`opposes` edges | Attestation on discourse edges — currently not implemented; the missing primitive this bridge names | Strong (as requirement) | §3 propaganda theorem |
| Cross-layer engagement maps | Commitment + learning-membrane traversal — an agent's engagement with a claim is already tracked; lifting to a linear map is a typing step | Moderate | `spore.learning-membrane` |
| H¹ obstruction detection | Learning-field convergence + governance-cluster detection — already shadow-computed in koi-processor (`learning_field_convergence.sql`) | Strong | koi-processor 2026-04-03 projection |
| Propaganda-theorem response | Attestation + contestability layer — already architecturally named; bridge supplies the mathematical justification | Strong | `spore.discourse-as-governance`, §10b Spore-relevance in sheaf-explorer |
| Harmonic extension as peer review | Proposed: governance-cluster resolution via pinned peer judgments | Weak | Theoretical; no Spore mechanism implements this yet |
| Learnable restriction maps | Proposed: attestation decay + restriction-map evolution | Weak | Conceptually aligned with attestation decay; no implementation |
| Čech refinement for federation | Mycorrhizal federation protocol — glue conditions between federated discourse graphs | Weak | Conceptual; federation protocol does not yet specify sheaf-theoretic glue semantics |

## 5. What Is Thin

- **No existing paper formalizes the two-layer construction.** Web search (2026-04-18) confirms the gap. The synthesis has no empirical track record; it is a theoretical proposal awaiting instantiation.
- **Stalk choice is underdetermined.** Evidential support profile, semantic position, and modal content are candidates; the right choice depends on the discourse-graph instance and changes the H¹ invariants computed.
- **Restriction-map honesty is an empirical question.** The propaganda theorem assumes detectable deception. Mechanism design for attestable restriction maps (cryptographic signatures over projection matrices, third-party audit, reputation-weighted attestation) is open and not proved secure against adversarial construction.
- **Scale is unknown.** Fiedler-eigenvector localization and harmonic extension are tractable on small graphs. Production discourse graphs may require spectral approximations (Lanczos, Arnoldi) whose fidelity on sheaf Laplacians is only partially studied.
- **Stalks over evidence need evidence-type theory.** A stalk is a vector space, so evidence types must embed into a common ambient space for restriction maps to be definable. Spore does not yet specify this embedding.

## 6. Open Questions

1. **What stalk dimension is right for a Spore discourse graph?** Too small ⇒ restriction maps collapse meaningful distinctions. Too large ⇒ H¹ is noisy and every disagreement looks irreducible. Empirical question tied to Spore's claim schema.

2. **Can edge attestation be implemented with existing cryptographic primitives?** An edge restriction map is a linear map on stalks — a signed projection matrix. Whether signing schemes over matrices (rather than byte strings) yield useful provenance guarantees is open.

3. **Does the two-layer sheaf admit a Bosca–Ghrist-style no-backward-pass update rule?** Federation compatibility requires local updates without central orchestration. Bosca–Ghrist (2026) supply this for single-layer neural sheaves; extending to the bipartite agent × discourse structure is non-trivial.

4. **How does H¹ over a QCEA graph relate to governance cluster activity in the learning field?** The conjecture is that active-tension governance clusters correspond to H¹ classes. Verifying this requires constructing the sheaf on the existing 82-cluster learning field projection and comparing.

5. **Is the propaganda theorem empirically detectable in historical scientific discourse?** Known cases of motivated citation (e.g., specific pharmaceutical-trial replication failures, specific climate-denial citation chains) should correspond to identifiable deceptive restriction maps. Retrospective case study is possible.

## 7. Claim Register

**C1** [confidence: high] [anchor: §1, web search 2026-04-18]
The term "discourse" names two distinct mathematical objects in two research traditions — social-interaction sheaves (Hansen–Ghrist) and argument-structure graphs (Chan) — and no prior work fuses them into a joint construction. The gap is confirmed by literature review across sheaf-theoretic, sheaf-neural-network, argumentation-mining, and discourse-graph sources.

**C2** [confidence: high] [anchor: §2]
A decentralized discourse-graph system supporting scientific argumentation has a natural two-layer structure (agent × discourse-object) that can be formalized as a single cellular sheaf on the bipartite incidence graph with restriction maps on agent–agent, discourse–discourse, and cross-layer engagement edges. This typing is compatible with Spore's existing claims-evidence-attestation schema.

**C3** [confidence: high] [anchor: §3 propaganda theorem, Hansen–Ghrist 2021 Thm 4.12]
Under the two-layer construction, the Hansen–Ghrist propaganda theorem implies that an adversary controlling edge restriction maps can steer discourse consensus without ever stating a false claim. Governance consequence: attestation must live on edges (restriction maps), not only on nodes (claims/evidence).

**C4** [confidence: high] [anchor: §3 H¹]
H¹ of the discourse-layer sheaf is the algebraic signature of irreducible disagreement — disagreement that cannot be resolved within the current evidence base and existing restriction maps. This is distinct from factional clustering (which H⁰ captures) and supplies a computable test for when more discourse is futile versus productive.

**C5** [confidence: medium] [anchor: §3 harmonic extension, Bosca–Ghrist 2026 §5.1]
Peer review, under this construction, is harmonic extension from pinned reviewer judgments to the rest of the discourse. The extension produces a unique global reading iff H¹ = 0 and restriction maps are trustworthy. The replication crisis has a candidate sheaf-theoretic description: unaudited restriction maps inflate H¹ faster than H⁰ consolidates.

**C6** [confidence: medium] [anchor: §3 learnable restriction maps, Bosca–Ghrist 2026]
Bosca–Ghrist (2026)'s selective-adaptation framework specializes to scientific discourse as an interpretive-drift diagnostic. Two failure modes become measurable: rhetorical accommodation masking unchanged beliefs, and belief update outpacing interpretive frame. Both are currently rhetorical accusations without operational definitions.

**C7** [confidence: medium] [anchor: §3 federation glue]
Čech refinement of the cover gives a principled criterion for when two sub-communities with incompatible global sections (high mutual H¹) can be productively bridged versus when forking is structurally necessary. This grounds Spore's mycorrhizal-federation protocol in a sheaf-theoretic glue condition.

**C8** [confidence: medium] [anchor: §4 mapping table]
The learning-field convergence SQL (`learning_field_convergence.sql`) in koi-processor shadow-computes H⁰ (field families) and candidate H¹ classes (governance clusters with active tensions). Promoting this to an explicit sheaf computation would give the convergence detection a falsifiable mathematical target without replacing the existing pipeline.

- **R1**: The claims-evidence-attestation protocol should be extended with explicit edge-level attestation primitives. The current schema attests nodes (claims, evidence) but not edges (how one projects into the other). Under the two-layer sheaf construction, edge attestation is mathematically necessary to defend against the propaganda theorem. Implementation surfaces include signed projection matrices, third-party audit of restriction maps, and reputation-weighted attestation decay on edge maps. [target: spore.claims-evidence-attestation] [concept: restriction-map-attestation] TODO: slug-deferred
  supported_by: C2, C3.
- **R2**: The sheaf-theory-formalization bridge note should incorporate the two-layer (agent × discourse-object) construction as an extension of its existing single-layer framing. This is not a replacement; the existing bridge note's treatment of federation coherence remains authoritative. The two-layer extension specializes the formalism to decentralized scientific discourse and connects it to Spore's discourse-as-governance and claims-evidence-attestation primitives. [target: spore.connection.sheaf-theory-formalization] [concept: two-layer-sheaf] TODO: slug-deferred
  supported_by: C1, C2, C8.
- **R3**: Spore's discourse-as-governance pattern should carry a typed peer-review operation whose mathematical content is harmonic extension from pinned judgments. The current pattern names contestation and decision but does not specify the algebraic structure under which pinned positions determine the rest of the discourse. The sheaf construction supplies this structure, including a correctness condition (H¹ = 0 + honest restriction maps). [target: spore.discourse-as-governance] [concept: harmonic-peer-review] TODO: slug-deferred
  supported_by: C5.
## 8. Disposition

**novel synthesis.** This note introduces a cellular-sheaf construction that does not appear in the literature (two-layer sheaf over bipartite agent ⊔ QCEA-discourse-graph incidence), unifies two traditions that use "discourse" for different objects, and supplies a mathematical justification for edge-level attestation in Spore's claims-evidence-attestation protocol.

**Promotion status: defer.** The synthesis is internally consistent and grounded in published sources (Hansen–Ghrist 2021; Bosca–Ghrist 2026; Chan 2023), but carries three specific limitations before promotion:

1. **No implementation instance.** The construction has no empirical track record on a Spore discourse graph or any other QCEA instance. The learning-field convergence SQL is a shadow computation, not a verified instantiation.
2. **Stalk specification is open.** The right stalk for a Spore discourse graph is undetermined; different choices yield different H¹ invariants with different governance consequences.
3. **Edge-attestation mechanism is open.** C3 establishes the *requirement* for edge attestation; the mechanism (cryptographic, social, reputation-weighted) is not specified.

Promotion should wait for: (a) construction of an explicit sheaf on the existing learning-field projection with H¹ verified against active governance clusters (addresses Open Question 4); (b) a mechanism proposal for edge attestation with a security argument against the propaganda construction (addresses Open Question 2); or (c) an external source independently proposing the two-layer construction or an equivalent (addresses the single-synthesis concern).

Parallel integration in sheaf-explorer (pedagogical §10c demo) is appropriate before promotion — the interactive demo generates the empirical intuition the formal promotion currently lacks.
