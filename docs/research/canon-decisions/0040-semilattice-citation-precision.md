---
doc_id: spore.canon-decision.semilattice-citation-precision
doc_kind: decision-record
status: draft
adr_number: "0040"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-13
r_claim_statement: |
  Spore's canon carefully cites borrowings elsewhere (Federici for reproductive-commoning, Grassé for stigmergy, Ostrom/Aligica-Tarko for polycentric governance, Alexander for semilattice in project-vision.md L60). The relational-agency-and-holons.md usage of "semilattice" (L89-L91) lacks the same citation precision. Does Spore adopt Alexander's semilattice as a primitive structural property, or borrow the metaphor for descriptive purposes? The precision exists in canon; it just isn't applied consistently.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-a.md
  - docs/project-vision.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-13 (semilattice borrowing citation precision)"
affects_canon:
  - docs/foundations/relational-agency-and-holons.md
related_adrs: []
concepts:
  - coordination-substrate
  - collective-agency
---

# ADR-0040 — Semilattice Citation Precision

## Status

draft (authored 2026-04-22 under canon-review Round 4)

## Context

`docs/foundations/relational-agency-and-holons.md` at ~L91 uses "semilattice" as a structural descriptor for holons participating in multiple overlapping wholes, without citing Christopher Alexander's origin for the term. `docs/project-vision.md` (earlier section) already cites Alexander directly: "holons participate in multiple overlapping wholes simultaneously, because living systems cannot be captured by a single clean hierarchy (Alexander, 'A City is Not a Tree')." The citation precision applied in project-vision should be applied consistently in relational-agency.

Lens A (Primitive-Claims Auditor, S2, CC-13) flagged this as citation-precision asymmetry. Not a structural flaw — a small consistency fix.

## Decision

**Edit.** Add an inline Alexander citation in `relational-agency-and-holons.md` to the paragraph introducing semilattice. Match the citation form in project-vision.md (Alexander, "A City is Not a Tree"). Optionally add a one-clause note that Spore borrows Alexander's semilattice framing for descriptive purposes (capturing the structural property of overlapping membership) rather than adopting his full theory of living-systems topology.

Rationale for `edit`:
- **(a) Lens concurrence ≥ 1** ✓ (Lens A)
- **(b) No opposition**: project-vision already cites Alexander correctly; this restores consistency
- **(c) Held-tension check**: no overlap

## Consequences

- Consistent citation practice across foundations/ — every borrowed term traces to its source.
- Future readers understand semilattice as a borrowed-metaphor, not an independently-derived Spore primitive.
- Unresolved: none.

## Evidence

- cluster_key: `docs/foundations/relational-agency-and-holons.md:semilattice-citation`
- supports: 1 lens (Lens A)
- opposes: 0
- source: adversarial-critique consolidated findings, CC-13
- Supporting canon: docs/project-vision.md (Alexander citation in earlier section)
- Held-tension overlap: None blocks 2026-04-22.
- Adaptation note: per canon-review Round 4 adversarial-critique protocol adaptation.

## Diff summary

`docs/foundations/relational-agency-and-holons.md` semilattice paragraph: add Alexander citation matching project-vision.md's form. ~1-2 lines added.
