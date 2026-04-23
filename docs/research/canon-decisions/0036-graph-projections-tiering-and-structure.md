---
doc_id: spore.canon-decision.graph-projections-tiering-and-structure
doc_kind: decision-record
status: active
adr_number: "0036"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-07
r_claim_statement: |
  The canon presents eight projections as equivalent primitives, all called "graphs." However, the architecture document explicitly distinguishes DAGs (holonic axis, acyclic) from hypergraphs (network axis, cyclic). Projections 4-8 appear to be secondary projections derivable from combinations of Intent, Commitment, and Evidence. The canon needs to justify why these eight are the right division, or reorganise into primary/secondary tiers. The term "graph" obscures structural distinctions (DAG vs hypergraph) the canon itself establishes elsewhere.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-a.md
  - docs/foundations/holonic-network-architecture.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-07 (eight graph projections under-justified)"
affects_canon:
  - docs/foundations/governance-artifacts-and-graph-projections.md
related_adrs: []
concepts:
  - coordination-substrate
  - memory-governance
---

# ADR-0036 — Graph Projections: Tiering and Structural Clarity

## Status

active (authored + activated 2026-04-22 under canon-review Round 4)

## Context

The `Graph Projections` section of `docs/foundations/governance-artifacts-and-graph-projections.md` (L50-L62) presents eight projections as equivalent primitives under the single label "graph," without justification for their independence or structural distinction. Lens A (Primitive-Claims Auditor, S2, CC-07) flagged two related issues:

1. **Graph-language elides structural variety**: the canon already distinguishes DAGs (holonic axis, acyclic — Roadmap DAG) from hypergraphs (network axis — Intent hypergraph) elsewhere, but here labels all eight under "graph" uniformly.
2. **Projections 4-8 appear derivable from 1-3**: Commitment graph, Epistemic graph, Event graph, Routing graph, and Discourse graph can all be analysed as secondary views over Intent (what agents want), Commitment (what agents are bound to), and Evidence (what happened).

The current "we have identified eight projections so far — this is not a closed set" language is self-contradicting (both exhaustive-sounding and open-ended) and gives no derivation or independence proof.

## Decision

**Edit.** Add a brief tiering note to the Graph Projections section:

- Introduce a one-line framing distinguishing **primary projections** (directly mapped to ecology elements + architectural axes — Constitutional graph, Roadmap DAG, Intent hypergraph) from **secondary projections** (useful views composed over the primary structures — Commitment, Epistemic, Event, Routing, Discourse).
- Preserve the eight-item enumeration verbatim and the "projections of one living system" framing — those remain useful.
- Soften the "identified eight so far" language to explicitly acknowledge this is a working set, not a closed or irreducible one.

Rationale for `edit` disposition:
- **(a) Lens concurrence ≥ 1** ✓ (Lens A, CC-07 merging CC-LensA-4 and CC-LensA-5)
- **(b) No opposition**: the canon itself (`holonic-network-architecture.md:L88-L89`) already treats DAGs and hypergraphs as structurally distinct
- **(c) Held-tension check**: no overlap with ADR-0001

## Consequences

- Readers get an honest hierarchy: three primary projections anchored to ecology + axes, five useful secondary projections composed over them.
- Future canon work (e.g., protocol design) can reason about which projections a given operation must support and which can be derived on demand.
- The "graph" label retains umbrella utility while the primary-vs-secondary tiering exposes the structural variety (DAG, hypergraph, multigraph) the canon already recognises.
- Unresolved: full derivation proofs for secondary projections (how exactly Event graph composes over Intent + Commitment + Evidence, etc.) are future research, not normative here.

## Evidence

- cluster_key: `docs/foundations/governance-artifacts-and-graph-projections.md:eight-projections-tiering`
- supports: 1 lens (Lens A primitive-claims)
- opposes: 0
- source: adversarial-critique consolidated findings, CC-07
- Supporting canon: docs/foundations/holonic-network-architecture.md (DAG / hypergraph distinction)
- Held-tension overlap: None blocks 2026-04-22.
- Adaptation note: per canon-review Round 4 adversarial-critique protocol adaptation.

## Diff summary

`docs/foundations/governance-artifacts-and-graph-projections.md`: add a short tiering paragraph before or after the eight-item list establishing primary (1-3) vs secondary (4-8) projection tiers and softening the "closed set" framing. Approximately 2-3 lines added.
