# Foundations — Routing Aid

Spore's foundation docs commit invariant doctrine — the first principles that define what kind of system Spore is. This file is a routing aid: which doc to read first based on the shape of your question. **Routing only — not content summary.** Read the actual prose for load-bearing claims.

For full one-line descriptions, see [`docs/README.md`](../README.md) §Foundations.

## Read this one first if your question is...

| Question shape | Read first | Then probably |
|---|---|---|
| **What is Spore's grammar?** (primitives, verbs, structural shape) | [`../project-vision.md`](../project-vision.md) | `relational-agency-and-holons.md` |
| **How do scales/scopes nest?** (containment, overlap, holonic structure) | [`relational-agency-and-holons.md`](./relational-agency-and-holons.md) | `holonic-network-architecture.md` |
| **How do federations exchange and stay sovereign?** | [`federation-protocol.md`](./federation-protocol.md) | `holonic-network-architecture.md` |
| **What gives governance authority its weight?** (legitimacy, consequence-coupling) | [`structural-legitimacy.md`](./structural-legitimacy.md) | `governance-artifacts-and-graph-projections.md` |
| **How are visions / commitments / decisions represented?** (text-and-graph dual representation) | [`governance-artifacts-and-graph-projections.md`](./governance-artifacts-and-graph-projections.md) | `representation-authority.md` |
| **Which representation layer wins when they disagree?** (text / graph / sensor / attestation / agent-summary precedence) | [`representation-authority.md`](./representation-authority.md) | `actuator-logic.md` |
| **Who runs the sensor / attests / generates summaries?** (governance discipline across modalities) | [`sensor-oracle-governance.md`](./sensor-oracle-governance.md) | `representation-authority.md` |
| **What broke?** (failure-mode taxonomy across 8 categories) | [`failure-modes.md`](./failure-modes.md) | `actuator-logic.md` |
| **What happens next when something is wrong?** (response-doctrine for observable epistemic gaps) | [`actuator-logic.md`](./actuator-logic.md) | `actor-governance.md` |
| **Who has standing? Who can be admitted, contested, captured?** (actor-class governance) | [`actor-governance.md`](./actor-governance.md) | `failure-modes.md` (F6.7 actor-capture) |
| **How is reproductive / maintenance / care labour sustained?** (economics of long-running coordination) | [`maintenance-economics.md`](./maintenance-economics.md) | `actor-governance.md` |
| **How does Spore materialize in running systems?** (canon / node / agent / site decomposition) | [`spore-instance-model.md`](./spore-instance-model.md) | `federation-protocol.md` |
| **How does external feedback enter and reshape canon?** (witness inheritance, revision-trigger discipline) | [`external-validation-loop.md`](./external-validation-loop.md) | `representation-authority.md` |

## Reading discipline

- **Cite by path:line, not paraphrase.** Foundation docs commit doctrine; their prose is load-bearing.
- **AI-summary at this layer is lower-priority than the doc itself** — see [`representation-authority.md`](./representation-authority.md) §4.5 for the discipline. If you produce a summary of a foundation doc, that summary inherits authority-weight from the source, not the other way around.
- **The numbering encodes history.** ADR provenance for each foundation doc lives in [`../research/canon-decisions/`](../research/canon-decisions/) — admission ADRs are 0073 (sensor-oracle-governance), 0074 (representation-authority), 0075 (failure-modes), 0076 (actuator-logic), 0077 (actor-governance), 0078 (spore-instance-model), 0079 (maintenance-economics), 0080 (translation-mapping-governance defer-with-triggers — no foundation doc), 0081 (external-validation-loop). Earlier foundation docs (relational-agency-and-holons, holonic-network-architecture, federation-protocol, governance-artifacts-and-graph-projections, structural-legitimacy) predate the Phase 4 admission program.

## Lexicon

For canonical definitions of terms that lack their own primary foundation doc, see [`./lexicon/`](./lexicon/) — currently `field`, `linguistic-closure`, `stigmergy`.
