---
doc_id: spore.connection.bosca-ghrist-local-to-global
doc_kind: research
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.connection.sheaf-theory-formalization
  - spore.connection.obstruction-aware-sheafification
  - spore.mycorrhizal-federation-protocol
  - spore.mycelial-holarchy-architecture
sources:
  - title: "Bosca & Ghrist (2026), Neural Networks as Local-to-Global Computations"
    type: primary
    url: https://arxiv.org/abs/2603.14831
    version: v3 (2026-03-24)
    authors: Vicente Bosca, Robert Ghrist
    affiliation: University of Pennsylvania, Department of Mathematics
disposition: clarify existing term
research_subkind: bridge_note
concepts:
  - sheaves
  - sheaf-laplacian
  - learnable-restriction-maps
  - pinned-commitments
  - federation-diagnostics
  - fiedler-bottleneck
---

# Bridge Note: Bosca–Ghrist Local-to-Global Computations

**Source:** Bosca & Ghrist (2026), *Neural Networks as Local-to-Global Computations* (arXiv 2603.14831v3, March 24, 2026). Preprint from UPenn Department of Mathematics.

## 1. What the Paper Is

A theoretical construction embedding any feedforward ReLU neural network into a cellular sheaf. The central result: the forward pass output is the **unique harmonic extension** of the input boundary data on the constructed sheaf. The paper does *not* propose a new neural architecture — it embeds an existing one and develops consequences.

**Three constructions enabled by the reframing:**

1. **Pinned neurons.** Clamping a hidden neuron adds a penalty edge; sheaf diffusion propagates the constraint *bidirectionally* (upstream + downstream), producing a global equilibrium rather than a local override.
2. **Sheaf-based training.** Local discrepancy minimization — each weight update depends only on adjacent-vertex data. No backward pass required. Converges on all tested configurations but underperforms SGD on final loss.
3. **Structural diagnostics.** The Fiedler eigenvector of the sheaf Laplacian consistently concentrates on the output pre-activation stalk, identifying it as the **information-flow bottleneck**. Spectral gap stabilizes before training loss does.

The paper leverages Gould's CPWA convergence theory (UPenn PhD 2025) and Filippov sliding to handle ReLU's discontinuous switching. Formally extends the Hansen–Ghrist opinion-dynamics framework: stubborn agents ↔ pinned neurons.

## 2. Mapping to Spore Primitives

| Paper construction | Spore primitive | Strength | Evidence |
|:---|:---|:---|:---|
| Pinned neurons (bidirectional constraint propagation) | Commitment + Membrane (authorize/attest operations) — a pinned commitment on a coordination sheaf propagates constraints to upstream proposals and downstream implementations | Moderate | §5.1, Note 5.1 |
| Sheaf-based training (no backward pass, local discrepancy) | Federation-compatible learning of restriction maps — updates depend only on adjacent-vertex data, no central trainer required | Strong | §5.2.1–5.2.2 |
| Fiedler-eigenvector bottleneck | Spec DAG diagnostic — identifies chokepoint in information flow through the governance hierarchy | Moderate | §6.3 |
| Opinion-dynamics extension | Discourse sheaves in learning membrane (already present in `sheaf-theory-formalization.md`) | Moderate | §1, §2.3 |
| CPWA convergence under discrete switching | Governance state transitions (proposal → review → promoted → enforced) | Weak | §2.1 Remark 2.1, §4 |

## 3. What Spore Confirms

Two roadmap candidates in `sheaf-theory-formalization.md` §8 now have candidate diagnostic procedures or update templates grounded in a preprint:

- **"Sheaf Laplacian as federation health diagnostic"** was previously a roadmap candidate without a named procedure. Bosca–Ghrist §6.3 supplies a candidate diagnostic template: compute the Fiedler eigenvector to identify the information-flow bottleneck node. The spectral gap as an early-stabilization signal is additional evidence.

- **"SNN-based restriction map learning"** was previously pointed at Bodnar-style sheaf neural networks, which require a conventional backward pass. Bosca–Ghrist §5.2 supplies a **federation-compatible alternative**: local discrepancy minimization with no backward pass. Each update uses only adjacent-vertex data. This is structurally compatible with Spore's sovereignty invariants (§ Mycorrhizal Federation Protocol — no central write authority).

- **Additional prerequisite.** Spore does not yet define the spec-DAG sheaf these procedures would run on. Before any Fiedler diagnostic or local-discrepancy update is runnable, Spore needs an explicit sheaf specification: stalk contents, edge restriction maps, and the degree to which the spec DAG is a strict cellular sheaf versus a looser sheaf-like object.

The deferred "Sheaf experiment — consistency diagnostic on spec DAG" (current Spore status) now has a candidate algorithmic template, pending spec-DAG sheaf specification. Whether to unfreeze the experiment is a separate decision.

## 4. What Is Thinner

- **Pinned neurons is a neural-network construction, not a governance semantics.** The mapping to pinned commitments is structurally suggestive, not a derivation. Whether commitments on a coordination sheaf behave like pinned neurons on a neural sheaf is an empirical question about the sheaf structure, not a theorem Bosca–Ghrist prove.

- **Performance caveat.** Sheaf-based training converges but underperforms SGD on final loss. The argument for Spore adoption is not speed or accuracy — it is **locality, governance, and interpretability**. Federation-compatible algorithms don't have to be the fastest; they have to be structurally valid without central authority.

- **Paper scope is mathematical, not coordination-theoretic.** The paper treats networks as machines to be analyzed, not as social systems. Translation to Spore's coordination grammar requires additional framing work — the paper supplies algorithms, not coordination primitives.

## 5. Open Questions

1. **Does pinned-commitment bidirectional propagation yield useful equilibria in practice?** The theoretical guarantee applies to any sheaf; whether a Spore coordination sheaf admits interpretable pinned equilibria is an implementation question.

2. **Is Fiedler bottleneck analysis tractable at Spore's scale?** Computing the Fiedler eigenvector requires diagonalizing the sheaf Laplacian over the spec DAG subgraph. For small DAGs, trivial. For large federations, an approximation (Lanczos, Arnoldi) would be needed.

3. **Can restriction-map learning be tied to merge/reject evidence from entity resolution?** The Bosca–Ghrist update rule assumes a loss functional. Spore's entity-resolution merge/reject history needs translation into a discord-like quantity before the update rule applies.

## 6. Disposition

**clarify existing term.** The paper does not introduce a new Spore primitive or require new grammar. It provides preprint-backed diagnostic procedures and update templates for two already-named roadmap candidates in `sheaf-theory-formalization.md`, plus a theoretical model for pinned-commitment semantics. The sheaf Laplacian becomes a named object with a candidate procedure rather than a placeholder, contingent on defining the Spore sheaf it would act on.

No foundation changes required. The existing `sheaf-theory-formalization.md` and `obstruction-aware-sheafification.md` bridge notes remain authoritative for Spore's sheaf framing; this note adds implementation evidence for their roadmap candidates.
