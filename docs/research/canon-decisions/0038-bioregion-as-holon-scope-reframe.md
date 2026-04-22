---
doc_id: spore.canon-decision.bioregion-as-holon-scope-reframe
doc_kind: decision-record
status: active
adr_number: "0038"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-11
r_claim_statement: |
  The claim that a bioregion is "a natural holon" with specific overlaps (hydrology, species movement, indigenous jurisdiction, institutions, care) is asserted without detailed grounding of how these four elements operationally compose into one holon's agency interface. The claim is supported by bioregional-scope-legal-constraint.md (watershed as material boundary via watershed definitions), but the operational composition claim — that overlapping hydrology + species movement + indigenous jurisdiction + institutions + care together constitute one recognizable holon for purposes of federation — lacks a worked example showing the actual interface through which a bioregional holon would perceive, decide, and act as a coherent entity in federation.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-c.md
  - docs/research/connections/bioregional-scope-legal-constraint.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-11 (bioregion-as-natural-holon scope)"
affects_canon:
  - docs/project-vision.md
related_adrs:
  - spore:ADR-0037-node-coherence-operationalisation
concepts:
  - bioregional-scope
  - boundary-commoning
  - polycentric-governance
---

# ADR-0038 — Bioregion-as-Holon Scope Reframe

## Status

active (authored + activated 2026-04-22 under canon-review Round 4)

## Context

`docs/project-vision.md` (currently around L205 after R2/R3 insertions) asserts: "A bioregion is a natural holon with semilattice relations — overlapping hydrology, species movement, indigenous jurisdiction, institutions, care. The grammar applies: containment gives nested governance, overlap gives lateral reach across boundaries that ecological and social reality has already dissolved."

Lens C (Evidence-vs-Assertion Auditor, S2, CC-11) flagged this as over-claiming naturalness. Material grounding (bioregion as watershed-defined boundary) is present in `docs/research/connections/bioregional-scope-legal-constraint.md`, but the operational-composition claim — that hydrology + species movement + indigenous jurisdiction + institutions + care together constitute one unified federation-agent — lacks a worked example. If those overlaps in practice yield conflicting agency boundaries rather than a coherent whole, the "naturalness" framing breaks.

## Decision

**Edit.** Reframe the claim from "a bioregion is a natural holon" to "a bioregion is an appropriate outer-boundary for nested governance," preserving the material grounding (watersheds, indigenous jurisdiction, etc.) but scoping the holon-composition claim. Specifically: acknowledge bioregions as holons-in-formation, whose operational composition into a unified federation agent is still work to be done rather than a pre-existing natural fact.

Rationale for `edit`:
- **(a) Lens concurrence ≥ 1** ✓ (Lens C)
- **(b) No opposition**: corpus grounds material boundary (yes), not operational holon-composition (the gap)
- **(c) Held-tension check**: no block; pluriversal-incommensurability hold is aligned — claims about "natural" composition often mask which tradition's frame defines "natural"

## Consequences

- The bioregion-as-holon claim becomes honest about its current status: material boundary strong, agency composition emerging. Future adoption work can target the composition gap rather than assume it is already solved.
- Aligns with ADR-0037's operational coherence criterion: a bioregional holon qualifies as a node when it can maintain a unified decision-making surface — which is exactly the composition work still needed.
- Unresolved: specific worked examples of functioning bioregional holons (Salish Sea, Cascadia, etc.) remain future case-study territory.

## Evidence

- cluster_key: `docs/project-vision.md:bioregion-as-natural-holon`
- supports: 1 lens (Lens C evidence-vs-assertion)
- opposes: 0
- source: adversarial-critique consolidated findings, CC-11
- Supporting bridge notes: `docs/research/connections/bioregional-scope-legal-constraint.md` (material boundary grounding)
- Held-tension overlap: None blocks 2026-04-22. Affirmative alignment with ADR-0001 (pluriversal-incommensurability).
- Adaptation note: per canon-review Round 4 adversarial-critique protocol adaptation.

## Diff summary

`docs/project-vision.md` (bioregion paragraph): reframe "natural holon" → "appropriate outer-boundary for nested governance; a holon-in-formation whose operational composition is emerging work." Preserve the overlap-list (hydrology, species movement, indigenous jurisdiction, institutions, care) and the grammar-applies observation. ~2 lines changed.
