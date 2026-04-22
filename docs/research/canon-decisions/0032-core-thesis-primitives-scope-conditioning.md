---
doc_id: spore.canon-decision.core-thesis-primitives-scope-conditioning
doc_kind: decision-record
status: draft
adr_number: "0032"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-08
r_claim_statement: |
  The claim that "the same primitives" are required "at every scale and scope" is stated as universal fact, but is actually a contestable design claim. The evidence supporting this comes from Spore's implementation and from the Koestler-Alexander lineage (which privileges self-similar structures). However, there are coordination contexts where not all five primitives are load-bearing: a long-term maintenance team operating under stable governance may not need "federation rules" or robust "commitment protocols" (their commitments may be implicit and stable). A small dyad may not need "governance patterns" in the formal sense. By claiming these primitives are required "at every scale," the canon prescribes a universal architecture when the evidence supports a conditional one: "these primitives enable fractal coordination when present" is different from "these primitives are required at every scale."
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-b.md
  - docs/research/canon-decisions/0009-coordination-grammar-refresh.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-08 (five-primitives Core-Thesis universality)"
affects_canon:
  - docs/project-vision.md
related_adrs:
  - spore:ADR-0031-ecology-cycle-scope-conditioning
  - spore:ADR-0009-coordination-grammar-refresh
concepts:
  - coordination-substrate
  - collective-agency
  - polycentric-governance
---

# ADR-0032 — Core-Thesis Primitives Scope Conditioning

## Status

draft (authored 2026-04-22 under `canon-review-r2-universality-language` plan)

## Context

The Core Thesis section of `docs/project-vision.md` (L21-L23) makes a universal-scope claim about coordination primitives: "Coordination at every scale and scope requires the same primitives — sovereign identity, shared memory, commitment protocols, governance patterns, and federation rules." The adversarial canon critique (2026-04-22) flagged this as CC-08 via Lens B — a rhetorical-overreach finding that elevates a contestable design choice (fractal/self-similar architecture) into structural necessity.

The critique surfaces concrete counter-examples from the supporting corpus:
- A long-term maintenance team with stable governance may not need explicit "federation rules"
- Small dyads may not need formal "governance patterns"
- Embedded relational work may not need explicit "commitment protocols" (commitments may be implicit and stable)

The Ostrom commons-governance lineage cited in Spore's Inspirations section is explicitly context-fit and does not claim universal design principles. `docs/research/canon-decisions/0009-coordination-grammar-refresh.md` (ADR-0009) discusses phase-dependent grammar engagement, implying that not all primitives are load-bearing in all phases.

The structural problem: "These primitives enable fractal coordination when present" is a defensible claim; "these primitives are required at every scale" is an overreach. The current phrasing narrows the design space unnecessarily and mis-cites the Ostrom lineage.

This ADR is sibling to ADR-0031 (CC-02 ecology-cycle scope conditioning) and ADR-0033 (CC-09 dual-axis recursion clarification) — all three address universality overreach across the canon. ADR-0031 conditions the ecology cycle; this ADR conditions the Core Thesis primitives claim; ADR-0033 clarifies the fractal-recursion claim in the architecture doc.

## Decision

**Edit.** Shift the Core Thesis phrasing from "requires the same primitives at every scale and scope" to a conditional formulation that preserves the fractal-composition claim while acknowledging context-dependent primitive necessity:

- Old: "Coordination at every scale and scope requires the same primitives — sovereign identity, shared memory, commitment protocols, governance patterns, and federation rules. These compose fractally..."
- New: "Coordination across scales and scopes is enabled by a common set of primitives — sovereign identity, shared memory, commitment protocols, governance patterns, and federation rules. When present, these primitives compose fractally... Not all contexts require all five; their presence is what enables composability across scales."

The repair preserves:
- The five-primitive enumeration
- The fractal-composition claim (qualified with "when present")
- The cross-scale example (personal workflow → bioregional coordination)
- The collective-agency goal statement

Rationale for `edit` disposition (canon-review-protocol v3 §4 with adversarial-critique adaptation):

- **(a) Lens concurrence ≥ 1**: Lens B flagged ✓.
- **(b) No opposition**: Ostrom lineage (cited in Inspirations) supports context-fit; ADR-0009 already establishes phase-dependence.
- **(c) Held-tension check**: ADR-0001 (pluriversal-incommensurability) does not block — narrowing the Core Thesis universality is affirmatively consistent with pluriversal critique of universal-scope architectures.

## Consequences

- The foundational thesis becomes more defensible: the primitives enable fractal coordination rather than requiring universal instantiation. Coordination contexts without explicit federation rules (small teams) or without formal governance patterns (dyads) are no longer positioned as structural exceptions but as legitimate partial compositions.
- The Ostrom lineage citation is no longer misrepresented — context-fit governance is consistent with "enable when present" rather than "required at every scale."
- Downstream: adoption section (ADR-0030 restructured) already treats adoption as additive-not-required; the Core Thesis conditioning aligns with that framing. ADR-0031's ecology-cycle conditioning covers a different universality claim; together the three ADRs produce a coherent scope-conditioned canon.
- Unresolved: specific context-primitive mappings (which primitives are load-bearing in which contexts) are not normative in this ADR. Future work can surface case-study evidence for primitive-presence patterns.

## Evidence

- cluster_key: `docs/project-vision.md:core-thesis:primitives-universality`
- supports: 1 lens (Lens B rhetorical-overreach)
- opposes: 0
- source: adversarial-critique consolidated findings (tmp/canon-adversarial-critique-2026-04-21.md), CC-08
- Supporting bridge notes: none directly; ADR-0009 provides in-canon corroboration of phase-dependence
- Opposing bridge notes: none
- Cross-project echoes: none
- Held-tension overlap: None blocks 2026-04-22. Affirmative alignment with ADR-0001 pluriversal-incommensurability hold (narrowing universal scope reduces pluriversal-contestation surface area).
- Adaptation note: R-claim source cites internal-review CC-ID; `supports` is lens-concurrence count. Per operator-authorized Round-2 protocol adaptation continuing from R1.

## Diff summary

`docs/project-vision.md:L23`:

- Old: `Coordination at every scale and scope requires the same primitives — sovereign identity, shared memory, commitment protocols, governance patterns, and federation rules. These compose fractally: the same patterns that let a person manage their workflow let a bioregional network coordinate ecological restoration. The goal is collective agency: ...`
- New: `Coordination across scales and scopes is enabled by a common set of primitives — sovereign identity, shared memory, commitment protocols, governance patterns, and federation rules. When present, these primitives compose fractally: the same patterns that let a person manage their workflow let a bioregional network coordinate ecological restoration. Not all contexts require all five; their presence is what enables composability across scales. The goal is collective agency: ...`

Single-paragraph conditioning edit. Net ~1 sentence added.
