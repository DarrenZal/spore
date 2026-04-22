---
doc_id: spore.canon-decision.interop-principles-mechanisms-split
doc_kind: decision-record
status: draft
adr_number: "0034"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-03
r_claim_statement: |
  The section lists six interop items in declarative form without qualifying language. The phrasing "Interoperability does not mean identical schemas. It means: [list]" reads as a definition of what interoperability *is* rather than a description of how Spore's implementation achieves interoperability. Some items (consent semantics, forkability) are load-bearing principles; others (shared RIDs, envelope formats, translation mappings) are Spore's specific mechanism choices. By listing these six as THE definition, the canon elevates what is a specific implementation choice into a universal requirement. Different coordination ecologies might choose different mechanisms (e.g., a small federation might use human translation instead of machine-readable mappings; a high-trust dyadic exchange might not need formal consent semantics). Collapsing principles and mechanisms into one list reads prescriptively to integrators.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-b.md
  - docs/research/canon-decisions/0003-boundary-theory-unifier.md
  - docs/research/connections/autopoiesis-and-structural-coupling.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-03 (interop principles/mechanisms conflation)"
affects_canon:
  - docs/project-vision.md
related_adrs:
  - spore:ADR-0003-boundary-theory-unifier
  - spore:ADR-0031-ecology-cycle-scope-conditioning
  - spore:ADR-0032-core-thesis-primitives-scope-conditioning
concepts:
  - interoperability-as-institutional
  - coordination-substrate
  - cosmo-local-production
---

# ADR-0034 — Interop Principles/Mechanisms Split

## Status

draft (authored 2026-04-22 under canon-review Round 3 — single-finding direct execution)

## Context

The "Common Core, Local Variation" section of `docs/project-vision.md` (L148-L159) presents a six-item list as the definition of interoperability ("Interoperability does not mean identical schemas. It means: [list]"). The adversarial canon critique (2026-04-22) flagged this as CC-03 via Lens B (rhetorical-overreach and specificity-creep), citing the same finding under both sub-lenses (CC-LensB-5 and CC-LensB-6 in the per-lens output, consolidated as CC-03).

The structural problem: the list collapses two distinct kinds of things.

- **Principles** of interoperability — consent, transparency, provenance, forkability, local sovereignty. These are load-bearing constraints that any interoperable federation must satisfy in some form.
- **Mechanisms Spore uses** — RIDs, shared envelope/event formats, explicit translation mappings, declared profiles, specific provenance rules. These are Spore's implementation choices for realising the principles in its current federation contexts.

By listing both kinds as "what interoperability means", the canon reads prescriptively: integrators infer that they must implement all six mechanisms to interoperate with Spore. Different coordination ecologies — small federations, high-trust dyads, maintenance-mode operations — might realise the same principles through different mechanisms (human translation, implicit consent, simpler provenance).

`docs/research/canon-decisions/0003-boundary-theory-unifier.md` (ADR-0003) already establishes that boundary-making takes multiple valid forms; `docs/research/connections/autopoiesis-and-structural-coupling.md` emphasises interop as institutional (governance and semantics matter, not just technical specs); `docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md` emphasises context-fit over universal mechanism specifications. The supporting corpus corroborates the principles-vs-mechanisms distinction; canon's current phrasing does not reflect it.

This ADR is follow-on to Round 2 (ADR-0031/0032/0033 universality-language cleanup). R2 conditioned universal scope claims; R3 addresses the specific instance where implementation choices were elevated to principles.

## Decision

**Edit.** Restructure the "Common Core, Local Variation" section to make the principles/mechanisms distinction explicit:

- Split the current conflated list into two parts: (a) principles (consent, provenance, forkability, local sovereignty) stated first; (b) mechanisms Spore currently uses, stated second with conditioning language ("in Spore federations… smaller or higher-trust contexts may realise these principles through different mechanisms").
- Preserve the existing cosmo-localism framing and the "disciplined exchange under explicit permissions" statement — those are principle-level claims and stand unchanged.
- Preserve the existing six-item enumeration as the mechanism list; do not drop any item, but scope it as Spore's current choices rather than as the definition of interop.

Rationale for `edit` disposition (canon-review-protocol v3 §4 with adversarial-critique adaptation):

- **(a) Lens concurrence ≥ 1**: Lens B flagged ✓ (CC-LensB-5 + CC-LensB-6 consolidated as CC-03).
- **(b) No opposition**: ADR-0003 (boundary-theory unifier) already establishes multiple valid forms; no lens defended the conflated-list phrasing.
- **(c) Held-tension check**: ADR-0001 (pluriversal-incommensurability) does not block — making the principles/mechanisms distinction explicit is affirmatively consistent with pluriversal critique of universal-mechanism prescriptions.

## Consequences

- Readers no longer infer that interoperating with Spore requires implementing all six mechanisms. Smaller federations, dyadic exchanges, and maintenance-mode operations can realise the principles through different mechanism choices without perceiving deviation from canon.
- The cosmo-localism framing is strengthened — local sovereignty + shared principles + context-fit mechanisms is the actual cosmo-local proposition, not "shared principles + shared mechanisms".
- The `interoperability-as-institutional` framing from bridge notes is now reflected in canon: governance and semantic choices matter, not just technical mechanism uniformity.
- Downstream: Round 4 (residual tightening, 6 findings) can proceed without the interop section as a contradicting reference for e.g. the "five primitives at every scale" conditioning (ADR-0032) and the adoption-section (ADR-0030). All scope-conditioned passages now read consistently.
- Unresolved: specific mechanism-choice patterns for non-Spore federations (what do high-trust dyads actually use? what do smaller federations substitute for RIDs?) are not normative. Future research territory.

## Evidence

- cluster_key: `docs/project-vision.md:interop:principles-mechanisms-conflation`
- supports: 1 lens (Lens B rhetorical-overreach / specificity-creep)
- opposes: 0
- source: adversarial-critique consolidated findings (tmp/canon-adversarial-critique-2026-04-21.md), CC-03
- Supporting bridge notes: `docs/research/connections/autopoiesis-and-structural-coupling.md` (interop-as-institutional); `docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md` (context-fit emphasis)
- Opposing bridge notes: none
- Cross-project echoes: none (IC/PM not reviewed in this round)
- Held-tension overlap: None blocks 2026-04-22. Only held ADR is 0001-pluriversal-incommensurability (concepts: pluriversal-commoning, memory-governance — orthogonal); making principles/mechanisms distinction explicit is affirmatively consistent with pluriversal critique.
- Adaptation note: R-claim source cites internal-review CC-ID; `supports` is lens-concurrence count. Per operator-authorized canon-review Round 3 protocol adaptation continuing from R1 and R2.

## Diff summary

`docs/project-vision.md:L148-L159` — "Common Core, Local Variation" section replaced. New structure:

- Opening sentence retained in modified form: "Interoperability does not mean identical schemas."
- New "at the level of principles" paragraph stating consent / provenance / forkability / local sovereignty as universal-across-federations.
- New "at the level of mechanisms" paragraph introducing the six-item list as Spore's current choices.
- Six-item list preserved verbatim.
- Closing paragraph (cosmo-localism, disciplined exchange, selective materialization) retained in modified form acknowledging the principle-vs-mechanism distinction.

Single-section edit; ~4 lines added. Zero primitive semantics changed, zero canon scope expansion.
