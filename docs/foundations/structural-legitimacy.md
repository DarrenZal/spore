---
doc_id: spore.structural-legitimacy
doc_kind: foundation
status: active
depends_on:
  - spore.project-vision
---

# Structural Legitimacy

Coordination infrastructure becomes viable when **authority and consequence are structurally coupled** — when those who shape decisions are bound into the outcomes those decisions produce.

## The Core Claim

Legitimacy is not a property of governance topology. It is a property of whether decision-makers are *coupled* to the consequences of their decisions. A clean hierarchical topology with decoupled authority (decision-makers insulated from outcomes) is illegitimate regardless of how orderly the chain-of-command looks. A cyclic or polycentric topology with tight authority-consequence coupling (decision-makers bearing the results of their choices) is legitimate regardless of how complex the graph looks.

This coupling must be **polycentric**: no single legitimacy source suffices alone. Multiple overlapping dimensions are structurally necessary — no single authority-consequence circuit covers all the ways that decisions propagate into consequences, so several overlapping circuits are required.

When authority separates from consequence, institutions enter **self-reinforcing degradation**: consequence-bearing participants who could provide corrective feedback lose voice or exit, insulating decision-makers from the effects of their decisions. This degradation accelerates — fewer corrective signals produce worse decisions, which produce more exit, which produces fewer corrective signals.

## Why This Replaces DAG-of-Authority

Earlier canon versions framed governance as necessarily acyclic: *"authority cycles create paradox (A governs B governs A is incoherent), so governance structures are acyclic by necessity."* This framing does not survive contact with actual governance systems:

- Worker-owned cooperatives have workers → managers → workers authority circuits.
- Polycentric governance (Ostrom) is explicitly defined by cyclic mutual-adjustment between multiple centers.
- Constitutional democracies contain People → Legislature → Laws → People cycles, with constitutional amendment as a further cycle.
- Recursive democratic structures (liquid democracy, holacracy, sociocracy) intentionally include authority cycles.

What protects these systems from paradox is **coupling**, not acyclicity. A cycle where each participant bears the consequences of their decisions is stable and legitimate. An acyclic tree where decision-makers are insulated from outcomes (e.g., a hierarchy with consequence-bearers at the bottom and insulated decision-makers at the top) is illegitimate regardless of being acyclic.

Acyclicity remains useful in a narrow domain: **artifact derivation and document provenance**. Spec DAGs, dependency graphs, and governance-memory tooling rely on acyclicity for source-of-truth disambiguation. That is a document-discipline property, not a governance-legitimacy claim.

## Implementation Surfaces in Spore

Structural Legitimacy is operationalized in Spore through several mechanisms, each maintaining authority-consequence coupling in a specific dimension:

- **Commitment protocols** — commitments specify who is bound to what outcomes, making authority-consequence coupling explicit and recorded. A commitment without a specified consequence-bearer is structurally illegitimate.
- **Contestability mechanisms** — when consequences deviate from expectations, the grammar provides explicit surfaces for contestation (bridge notes, held-tension ADRs, foundational-reframing proposals). Coupling maintained through the *ability* to signal decoupling.
- **Governance-from-artifacts** — governance decisions are recorded in text artifacts (ADRs, constitutional commitments, roadmaps) with visible authorship and audit trail. Decision-makers are identifiable; consequence-bearers can trace decisions back to their authors.
- **Polycentric cross-oversight** — multiple overlapping governance surfaces (canon-review, foundational-reframing, corpus-foundational-review) each carry partial authority; no single surface adjudicates in isolation.
- **Forkability** — when coupling breaks faster than it can be repaired, exit is preserved as a last-resort corrective signal. Forkability is not a failure mode but a structural feature of legitimate coordination.

## Open Questions

Structural Legitimacy is a foundational claim but not a solved problem. Questions left open for future foundation-layer work:

- **Measurement**: how is coupling-intensity measured in practice? What makes one authority-consequence circuit "tight" vs "loose"?
- **Scale**: does the coupling principle transfer from small-group polycentric governance (Ostrom commons) to bioregional or cross-federation scale, or does scaling introduce degradation modes not visible in smaller systems?
- **Adversarial cases**: what does coupling look like when some participants actively work to decouple authority from consequence (regulatory capture, rent-seeking, administrative capture)? The canon's openwashing discipline and power-capture ADRs address fragments of this, but a unified failure-mode taxonomy for coupling-breakdown is future work.
- **Temporal dynamics**: coupling can degrade over time even without adversarial intent, as institutional memory fades and consequence-bearers change. What maintenance disciplines preserve coupling across generations of participants?

These open questions are flagged here as foundation-layer concerns. Operational mechanisms for coupling-maintenance are pattern-layer and protocol-layer work.

## Related

- `docs/project-vision.md` — "Structural Legitimacy" section where the core claim is first introduced
- `docs/research/canon-decisions/0042-dag-delete-structural-legitimacy-promote.md` — the ADR that promoted this claim to foundation-level status and deleted the DAG-of-authority claim
- `docs/foundations/mycorrhizal-federation-protocol.md` — where sovereignty-invariants implement one surface of authority-consequence coupling
- `docs/patterns/governance-memory.md` — where governance-from-artifacts implements the decision-visibility surface
