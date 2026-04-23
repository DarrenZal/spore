---
doc_id: spore.discourse-as-governance
doc_kind: pattern
status: draft
depends_on:
  - spore.governance-artifacts
---

# Discourse as Governance

Structured reasoning as the self-reflective layer by which a coordination ecology governs its own evolution.

## Context

Coordination ecologies make decisions: which patterns to adopt, which commitments to honor, which artifacts to revise, which directions to pursue. These decisions happen whether or not there is a structured medium for reasoning about them. Without such a medium, revision is ad-hoc and invisible — decisions live in chat logs, meeting side-channels, or individual memory. Agents (human or otherwise) cannot reason about what was decided, why, or whether the reasoning still holds.

## Problem

How does a coordination ecology govern its own evolution through structured reasoning rather than ad-hoc conversation?

## Forces

- **Provenance matters.** Decisions without traceable reasoning are hard to contest, hard to learn from, and hard to revise responsibly. The reasoning behind a decision is as important as the decision itself.
- **Machine-readability enables agent participation.** If discourse is unstructured prose, only humans can navigate it. Structured discourse (proposals, arguments, evidence links, decisions) lets agents participate in governance — surfacing relevant prior decisions, flagging contradictions, tracking open questions.
- **Contestability requires structure.** Disagreement is productive only when it can engage specific claims with specific evidence. Unstructured disagreement degrades into repetition or power dynamics.
- **Scale demands graduated formality.** A personal note-to-self and a federation-wide governance proposal are both discourse, but they require different levels of structure. The pattern must accommodate a spectrum from lightweight to formal without forcing everything through the same process.

## Pattern

The discourse graph is the 8th graph projection in the coordination ecology — the self-reflective layer through which the ecology reasons about and governs its own evolution.

### Grammar Derivation

The discourse graph is composed entirely of existing coordination primitives:

| Discourse element | Grammar primitive | Relation to ecology |
|-------------------|-------------------|---------------------|
| **Proposal** | Claim | A claim about what should change — proposes a revision to the coordination ecology |
| **Argument** | Attestation | Situated endorsement or dispute of a proposal — an attester bearing witness for or against |
| **Evidence** | Evidence | What bears on the proposal — observations, measurements, prior outcomes, related decisions |
| **Decision** | Artifact | The durable record of resolution — a governance artifact at the constitutional level that governs future action |
| **Question** | Signal | A directional cue that something is unresolved — surfaces gaps in the ecology's self-understanding |

No new primitives are needed. The discourse graph is a projection — a specific view over the same underlying coordination ecology, highlighting the argumentative structure.

### The Revise-Phase Gap

The coordination loop (Sense → Interpret → Claim → Attest → Intend → Commit → Coordinate → Act → Revise) requires a structured medium at the Revise phase. The first seven graph projections cover Sense through Act. The discourse graph fills the Revise phase — it is where the ecology asks "what worked?", "what should change?", and "on what grounds?"

Without the discourse graph, the Revise phase collapses into informal conversation or is skipped entirely. With it, revision becomes a first-class coordination activity with provenance, contestability, and durable memory.

### Graduated Formality

Discourse operates at different scales with different levels of structure:

| Scale | Formality | Example |
|-------|-----------|---------|
| **Personal** | Lightweight — notes, annotations, open questions in a working document | A developer's `TODO: revisit this after we see adoption numbers` |
| **Project** | Moderate — structured decision records, review gates, question/must-fix tracking | A personal-project plan review workflow: questions gate + must-fix gate as adversarial discourse over plans |
| **Federation** | Formal — proposals with evidence, argument periods, explicit decision records | BKC's steward review process: structured evaluation of pilot proposals with decision logs |

The pattern does not prescribe a single decision procedure (consent, consensus, majority, etc.). It provides the *medium* through which any decision procedure operates — the structured representation of proposals, arguments, evidence, and decisions. The choice of decision procedure is a governance decision that itself occurs within the discourse graph.

## Current Adopters

- **Spore (this project):** The Phase 11b synthesis session is itself an instance of discourse-as-governance — structured reasoning about which patterns to promote, which to keep project-specific, and how the grammar should evolve. The coordination grammar, decision memo, and this document are discourse artifacts.
- **BKC:** Decision logs in bioregional pilots (e.g., `front-range-cascadia-2026/decision-log.md`), steward review processes for commitment pool governance. Proposals are structured, reviewed against evidence, and recorded as durable artifacts.
- **Personal-project implementations:** Adversarial discourse over implementation plans through structured review gates — a questions gate (are there unresolved unknowns?) and a must-fix gate (are there blockers?). Plans iterate through review rounds until both gates pass. This is discourse-as-governance at the personal-project scale.

## Related Patterns

- **Governance memory** (`spore.governance-memory`) — discourse produces artifacts (decision records, revised specs) that enter governance memory. The discourse graph generates; governance memory preserves.
- **Constitutional artifacts and graph projections** (`spore.governance-artifacts`) — the foundation that defines the eight graph types, including the discourse graph. Discourse-as-governance is how the ecology exercises the discourse graph projection.
- **Claims, evidence, and attestation anchoring** (`spore.claims-evidence-attestation`) — the epistemic infrastructure that discourse depends on. Proposals are claims; arguments are attestations; evidence bears on both. The anchoring protocol gives discourse its epistemic grounding.
