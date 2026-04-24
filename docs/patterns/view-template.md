---
doc_id: spore.view-template
doc_kind: pattern
status: draft
depends_on:
  - spore.canon-decision.phase-2c-graph-projections-dual-axis-bundle
  - spore.governance-artifacts
  - spore.project-vision
concepts:
  - view-template
---

# View Template

A catalog-pattern for the five recurrent graph views that are composed over Spore's three primary graph projections rather than earning foundation-level status themselves.

## Context

Spore's graph substrate is tiered. Three primary projections operate at foundation-level because they each have an independent schema, a materialization path in a running system, a query pattern, and a non-join use case: **Constitutional**, **Commitment**, and **Epistemic**. ADR-0058 then clarified that five other graph views remain legitimate and useful, but are more honestly treated as **view-templates** composed over those primaries: **Roadmap DAG**, **Intent hypergraph**, **Event graph**, **Routing/flow graph**, and **Discourse graph**.

Without a pattern-layer umbrella, these five views remain named in canon but awkwardly housed: too real to drop, too derivable to treat as independent primaries, and too tightly related to split immediately into five standalone pattern docs.

## Problem

How do we name and preserve the recurring graph views that operators repeatedly need, while keeping the canon honest about which projections are primary and which are derivative?

## Forces

- **Usefulness without primary status**: each view answers a real coordination question, but usefulness alone is not enough to earn foundation-level status.
- **Heterogeneous structures**: the five members are not all DAGs or the same graph type. The catalog must hold different mathematical shapes without pretending they are one schema.
- **Derived, not free-floating**: each member exists because it specializes or projects from Constitutional, Commitment, and/or Epistemic state. None should be presented as substrate-independent.
- **Parsimony pressure**: minting five standalone slugs or pattern docs now would over-fit the present citation need and erase the point of the catalog-pattern sub-class.
- **Text-authoritative discipline**: graph projections remain derived from canonical text and operational state, not the other way around. View-templates must stay accountable to that direction of derivation.

## Pattern

### Host substrate

The host substrate for this catalog is the **three-primary graph-projection layer**:

- **Constitutional graph**
- **Commitment graph**
- **Epistemic graph**

Each view-template is either:

- a **specialization** of one primary projection, or
- a **join-derivable projection** over more than one primary projection

That host-substrate rule is what binds the catalog together.

### Catalog members

- **Roadmap DAG** — Constitutional specialization ordering initiatives, milestones, and dependencies by sequence.
- **Intent hypergraph** — Commitment pre-stage expressing multi-party offers, needs, and conditions as hyperedges before binding or retirement.
- **Event graph** — temporal projection over Commitment + Epistemic event streams and provenance chains.
- **Routing/flow graph** — Commitment pool-flow projection surfacing how resources, obligations, and information circulate.
- **Discourse graph** — Constitutional + Epistemic governance-revision layer surfacing questions, proposals, arguments, objections, and decisions.

### Composition / aggregation rule

This catalog is not held together by sequential workflow or by a shared internal algebra among the five members. It is held together by a single rule:

**each member is a specialization of, or join-derivable from, the three-primary substrate.**

That means the catalog stays coherent even though the members differ structurally. What makes them siblings is not that they all look the same, but that they all derive from the same primary graph ecology.

If a future member develops its own independent schema, materialization path, query pattern, and non-join use case, it stops being only a view-template candidate and becomes a primary-projection re-evaluation candidate instead.

### What this pattern does not name

- It does **not** claim that every node must materialize all five views.
- It does **not** create a fourth primary substrate.
- It does **not** require five separate pattern docs today.
- It does **not** override ADR-0058's tiering decision.

## Current Adopters / Related Implementations

Operational grounding is uneven across the five members, but each member is canonically articulated and at least partially evidenced in current docs or running surfaces:

- **Roadmap DAG** — strongest current constituent. Canon-body defines it as Constitutional specialization, and roadmap/dependency sequencing is already derivable from constitutional surfaces and spec-DAG structure.
- **Intent hypergraph** — weakest current constituent. Canon-body clearly names its distinct use-case at the pre-binding stage of Commitment, but dedicated materialization remains thin.
- **Event graph** — partial operational grounding. `coordination-grammar.md` treats events as immutable transition records and the graph-projection sections treat Event as a temporal projection over Commitment + Epistemic streams rather than a separate primary schema.
- **Routing/flow graph** — strongest current constituent alongside Roadmap DAG. Commitment-pool implementations in BKC/Octo and Poietic Match already surface the routing / circulation questions this view answers.
- **Discourse graph** — partial operational grounding. Canon-body names it as the governance-revision layer over Constitutional + Epistemic, and the coordination grammar explicitly leaves future primary re-evaluation open if fuller implementation matures.

## Related Patterns

- **Governance memory** — the Constitutional substrate that Roadmap DAG specializes is most visible where governance-memory has already made dependencies queryable.
- **Commitment pooling** — Intent hypergraph and Routing/flow both expose different analytical faces of Commitment-pool coordination.
- **Discourse as governance** — the discourse view is an analytical projection over governance-revision activity, while discourse-as-governance names a recurring coordination recipe within that activity.
