---
doc_id: spore.research.active-inference-federation-prompt
doc_kind: research
research_subkind: deep_research_prompt
status: draft
depends_on:
  - spore.project-vision
  - spore.mycorrhizal-federation-protocol
  - spore.connection.sheaf-theory-formalization
---

# Deep Research Prompt: Active Inference and Federation Membrane Adaptation

**Purpose:** A structured prompt for exploring whether free-energy-like mismatch metrics can help sovereign nodes adapt their membranes and translations without central control. This is a research lane, not a canon claim. Active inference is positioned downstream of Spore's architecture — a potential diagnostic and adaptation tool, not foundational to what Spore is.

---

## Context Block

**What Spore is:** Infrastructure for governed sheafification and obstruction management across a federation of sovereign nodes. Each node holds a local canon; federation exchange is governed by sovereign rules about what crosses boundaries and how it is translated. "Translate, don't unify" is the operative posture. Governance — not mathematics — decides what is promoted.

**What the federation protocol does:** Specifies event types, provenance, consent conditions, and translation rules for cross-boundary exchange. The protocol handles transport and event semantics. It does not currently specify how a node adapts its translation rules over time in response to mismatch with peers.

**What the sheaf formalization covers:** The claim/translation/compatibility layer above the transport protocol. Restriction maps formalize how data transforms across boundaries (compatibility-checking only — not privacy, authorization, or promotion governance). Obstruction theory (H1 cohomology) localizes where views cannot merge. The Sheaf Laplacian provides a graduated compatibility signal (Dirichlet energy) rather than a binary verdict.

**The Markov blanket cut:** Spore's active membrane core explicitly does not use Markov blanket language as foundational. This research lane inherits that earlier decision and does not revisit it. Active inference formalisms that require Markov blankets as foundational infrastructure are out of scope. Formalisms that use free-energy-like metrics as an *optimization signal* for adaptation — without requiring the full predictive coding hierarchy — remain in scope.

---

## Primary Research Question

Can variational free energy (or a simplified mismatch metric) serve as an adaptation signal that drives a sovereign node to adjust its membrane — refining restriction-map-like translation rules and exposure thresholds — without requiring central coordination?

Concretely: When a node's translations of incoming claims consistently diverge from how those claims are received and applied by peers, can the node detect this mismatch locally and update its translation rules to reduce it? Does active inference formalism give this process sharper language or better computational substrate than alternative approaches?

---

## Sub-Questions

### 1. What does "federation mismatch" look like concretely?

- When a node proposes a section and its claim is rejected or systematically modified by governance review, is that rejection signal sufficient to define a mismatch metric?
- What is the structure of "prediction error" in a federation context — is it a claim-level difference, a concept-level divergence, or a governance-cluster-level pattern?
- Is Sheaf Laplacian energy (Dirichlet energy over the stalk assignments) a useful compatibility signal, a proxy for free energy, or just a lower-level component? Assess as an analogy — do not identify the two without justification.

### 2. Can nodes adapt their restriction maps by minimizing local disagreement with neighbors?

- Sheaf Neural Networks (Bodnar et al. 2022; Barbero et al. 2022) learn restriction maps by minimizing disagreement across edges in heterophilic graphs. Can this SNN/CSNN framework serve as a computational substrate for adaptive translation?
- What would "training signal" mean in a governed federation — is governance review outcome a valid signal, or does it have the wrong latency and granularity?
- Does directed information flow in Cooperative SNNs (ICLR 2026, OpenReview:AHpexliCTM) offer a more appropriate model for sovereignty-respecting adaptation than symmetric diffusion?

### 3. What role do "shared protentions" play in coordination?

- The Shared Protentions paper (PMC11049075) formalizes multi-agent active inference with a "consensus topos" for compatible anticipations. Can coordination between sovereign nodes be framed as gluing compatible anticipations (intents, roadmaps, commitments) rather than reconciling shared facts?
- **Anticipation sheaf sub-question:** If intents, roadmaps, and commitments are partial future models, can federation coordination be formalized as finding compatible anticipations — a forward-looking sheaf over possible joint futures rather than a backward-looking sheaf over shared history?
- What breaks in this picture when nodes have genuinely incommensurable values or timelines?

### 4. Does Categorical Belief Propagation add anything?

- Categorical Belief Propagation (arXiv:2601.04456) frames inference as sheaf descent and uses holonomy to detect obstruction. Does this give a more principled basis for obstruction localization than cohomology alone?
- HOLOGRAPH (arXiv:2512.24478) uses sheaf gluing for causal coherence. Is there a useful connection between causal coherence and federation consistency?

### 5. What role does the Structured Active Inference framework play?

- Structured Active Inference (arXiv:2406.07577) uses categorical interfaces and dynamic wiring. Does this framework offer a clean way to represent a node's membrane as a typed interface that can be rewired in response to mismatch?

### 6. The Grounding Sheaf adjacency

- **Grounding sheaf sub-question:** Can BKC/Octo production evidence serve as a grounding sheaf — an ambient constraint surface that distinguishes internal conceptual disagreement from world-grounded failure? If a node's translation rules produce claims that pass governance review but fail in production, is that a grounding obstruction rather than a conceptual one? Does active inference have anything useful to say about the relationship between predictive error and grounding failure?

### 7. Where does this framework break?

This is a required section in any output. Address explicitly:
- What governance concerns (authorization, contestation, revocation, promotion thresholds) are NOT captured by free energy minimization?
- What happens when mismatch is intentional — when a node *wants* to maintain incompatibility with certain neighbors as a sovereignty choice?
- Can the framework distinguish principled divergence from miscalibration? If not, what signals would help?
- The missing `absorb` operator: Spore's membrane does not yet specify a formal mechanism for absorbing useful incoming material while maintaining local canon integrity. Is this primarily a membrane design question (likely) or does active inference offer useful language? If the research produces any language proposals for `absorb`, route them to Spore's membrane-operations documentation regardless of what the active-inference lane finds.

---

## Source Lanes

All five sources verified by the preceding review cycle:

| Paper | Relevance | Identifier |
|:---|:---|:---|
| Structured Active Inference | Categorical interfaces, dynamic wiring — clean compositional structure for membrane-as-typed-interface | arXiv:2406.07577 |
| Shared Protentions in Multi-Agent Active Inference | Consensus topos, anticipation alignment, formal multi-agent coordination | PMC11049075 |
| Categorical Belief Propagation | Inference as sheaf descent, holonomy detection for obstruction | arXiv:2601.04456 |
| HOLOGRAPH | Causal coherence via sheaf gluing | arXiv:2512.24478 |
| Cooperative SNNs | Directed information flow, selective cooperation, sovereignty-respecting adaptation substrate | ICLR 2026, OpenReview:AHpexliCTM |

---

## Guardrails for the Research

1. **Do not reintroduce Markov blankets as foundational.** The Markov blanket cut is an architectural decision, not a provisional stance. Active inference formalisms that treat Markov blankets as constitutive of what a node *is* conflict with Spore's boundary-mediation-first design.

2. **Distinguish transport from semantics.** Active inference lives in the claim/translation/compatibility layer, not in the federation transport protocol. Do not conflate adaptation of translation rules with changes to event routing or protocol mechanics.

3. **Sheaf Laplacian energy ≠ variational free energy.** Assess the relationship as an analogy, a proxy, or a lower-level component — only claim identity if the mathematics warrants it. The Sheaf Laplacian measures consistency of stalk assignments across graph edges; variational free energy measures divergence between a generative model and sensory data. These may be related without being the same.

4. **Active inference is a research lens, not an identity claim.** "Spore uses active inference" is not a conclusion this research should reach. The question is whether specific metrics or mechanisms from active inference formalism are useful for membrane adaptation. Applicability claims should be specific, bounded, and falsifiable.

5. **Flag claims that outrun evidence.** Where the mapping is loose, speculative, or untested, say so explicitly.

---

## Required Output Format

Any output from executing this prompt must include:

1. **Applicability assessment** — which active inference mechanisms transfer cleanly, which are loose analogies, which don't transfer
2. **Node adaptation loop proposal (if warranted)** — a concrete, bounded proposal for how a sovereign node could use a mismatch metric to adapt translation rules, with explicit inputs, outputs, and update frequency
3. **What this framework cannot handle** — the governance, sovereignty, and intentional-divergence concerns that free energy minimization does not address (this section is mandatory, not optional)
4. **Routing notes** — if the research produces language candidates for membrane operations (`absorb`, `translation rule update`), identify which docs they should route to in Spore's architecture
