---
doc_id: spore.canon-decision.node-coherence-operationalisation
doc_kind: decision-record
status: active
adr_number: "0037"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-10
r_claim_statement: |
  The definition of "node" as "any sufficiently coherent sovereign party" is intentionally broad and agent-type-agnostic. However, the list of examples is weighted toward human-led structures (person, team, organization) with only one software agent example. "Sufficiently coherent" is undefined — there is no guidance on what coherence threshold qualifies a party as a "node." This vagueness could lead to disputes (is a mailing list coherent enough? a wiki community? a geographical region?). The section should either define "sufficient coherence" operationally, or shift to a principle statement and drop the vague criterion.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-b.md
  - docs/foundations/spore-instance-model.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-10 (node coherence criterion undefined)"
affects_canon:
  - docs/foundations/mycorrhizal-federation-protocol.md
related_adrs: []
concepts:
  - coordination-substrate
  - polycentric-governance
---

# ADR-0037 — Node Coherence Operationalisation

## Status

active (authored + activated 2026-04-22 under canon-review Round 4)

## Context

`docs/foundations/mycorrhizal-federation-protocol.md:L70-L81` defines a federation node as "any sufficiently coherent sovereign party participating in federation." Lens B (S2, CC-10) flagged two related issues:

1. **"Sufficient coherence" undefined**: no operational criterion for when a prospective party qualifies. Could a mailing list qualify? A geographical region? A transient working group?
2. **Example list implicit bias**: five examples, four human-led (person, team, organization, federation-of-organizations), one software agent. Despite agent-type-agnosticism as stated intent, the balance suggests human-primary / software-secondary framing.

## Decision

**Edit.** Add an operational criterion for coherence immediately after the definition line, and rebalance the example list by adding non-human-led examples. Specifically:

- Add a one-sentence operational definition: "In operational terms, a party is sufficiently coherent to be a node when it can maintain a unified decision-making surface — i.e., represent itself in federation agreements, accept commitments, carry attestations, and answer for fulfillment."
- Extend the example list with: a bioregional assemblage (e.g., a watershed stewardship body), an autonomous multi-agent system, a long-running knowledge garden community. Preserve the original five examples.

Rationale for `edit` disposition:
- **(a) Lens concurrence ≥ 1** ✓ (Lens B)
- **(b) No opposition**: the section's own agent-type-agnosticism intent supports the rebalance
- **(c) Held-tension check**: no overlap with ADR-0001

## Consequences

- Federation-participation criteria become more testable: "unified decision-making surface" is a practical filter (can this party actually enter commitments and answer for them?).
- The example list is less biased toward human-led forms. Non-human-led or mixed-agency examples are now first-class in the canon.
- Edge cases (mailing lists, transient groups, geographical regions) can be evaluated against the operational criterion rather than against ad-hoc intuition.
- Unresolved: specific admission / revocation mechanisms (who adjudicates "unified decision-making surface" claims? how is it verified at federation time?) remain operational work, not canon.

## Evidence

- cluster_key: `docs/foundations/mycorrhizal-federation-protocol.md:node-coherence`
- supports: 1 lens (Lens B specificity-creep)
- opposes: 0
- source: adversarial-critique consolidated findings, CC-10
- Supporting canon: docs/foundations/spore-instance-model.md (holon vs node distinction, though coherence not operationalised there either)
- Held-tension overlap: None blocks 2026-04-22.
- Adaptation note: per canon-review Round 4 adversarial-critique protocol adaptation.

## Diff summary

`docs/foundations/mycorrhizal-federation-protocol.md`:
- Add operational coherence criterion sentence after the "In Agent Commons, a node is..." definition.
- Extend the example list with 2-3 non-human-led examples.

Net ~4-5 lines added. Zero structural change.
