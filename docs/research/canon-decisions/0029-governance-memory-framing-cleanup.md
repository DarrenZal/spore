---
doc_id: spore.canon-decision.governance-memory-framing-cleanup
doc_kind: decision-record
status: active
adr_number: "0029"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-04
  - spore.review.adversarial-critique-2026-04-22:CC-05
r_claim_statement: |
  "Governance-memory layer" is presented as a foundational category alongside "pattern language" and "protocol family," suggesting it is a primitive or at least a first-class architectural layer. However, reading the canon shows that governance-memory is a pattern (the spec-DAG pattern described in docs/patterns/governance-memory.md) applied to constitutional artifacts (visions, roadmaps, declarations). It is not a layer in the architectural sense — it is a document-organization convention (YAML frontmatter + DAG dependency validation) that can be applied at multiple layers simultaneously. The three-layer coordination stack (reproduction/production/governance) is the actual architectural framing Spore has canonised (ADR-0004); governance-memory is orthogonal to this stack.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-a.md
  - docs/patterns/governance-memory.md
  - docs/research/canon-decisions/0009-coordination-grammar-refresh.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-04 + §CC-05 (governance-memory framing cluster)"
affects_canon:
  - docs/project-vision.md
related_adrs: []
concepts:
  - governance-memory
---

# ADR-0029 — Governance-Memory Framing Cleanup

## Status

active (authored + activated 2026-04-22 under `canon-review-r1-adoption-governance-memory` plan)

## Context

The adversarial canon critique (2026-04-22, plan closed, findings at `tmp/canon-adversarial-critique-2026-04-21.md`) surfaced two related findings about how `project-vision.md` frames "governance-memory":

- **CC-04** (Lens A, S2): at L10 and L166, "governance-memory layer" is listed alongside "pattern language" and "protocol family" as a first-class foundational category. This treats governance-memory as an architectural layer when it is not one.
- **CC-05** (Lens A, S2): at L135, governance-memory is implied to be an independently adoptable primitive when in fact participating in the governance-memory pattern means adding frontmatter and declaring dependencies — not adopting a separate primitive.

The canon itself names the actual architectural layering as the three-layer coordination stack (reproduction / production / governance — see `docs/project-vision.md:L91-L96`, also ADR-0009). Governance-memory is described in `docs/patterns/governance-memory.md` as a pattern/convention applied across constitutional artifacts — a document-organization convention, not a structural layer with boundaries and position.

The adversarial critique's Lens A (Primitive-Claims Auditor) flagged this as a **primitive-claims** drift: a pattern/convention being framed as if it were a first-class primitive or layer. Triple-lens concurrence on the larger `How Adoption Works` passage (CC-01) overlaps with CC-05; that passage's substantive restructure lands in sibling ADR-0030. This ADR handles only the term-level cleanup.

## Decision

**Edit.** Rename "governance-memory layer" → "governance-memory pattern" in `docs/project-vision.md` at L10 and L166. No change at L135 (already uses "governance-memory pattern" correctly — CC-05's direct fix lands in ADR-0030's section restructure).

Rationale for `edit` disposition (per canon-review-protocol v3 §4, with adversarial-critique adaptation):

- **(a) Lens concurrence ≥ 1**: Lens A flagged this ✓ (adaptation: lens-concurrence substitutes for bridge-note support-count per operator-authorized Round-1 protocol adaptation).
- **(b) No opposition**: no lens defended "layer" phrasing; the canon's own three-layer-stack framing (ADR-0009) is inconsistent with calling governance-memory a layer.
- **(c) No blocking held-tension**: only one current `hold-as-tension` ADR exists (0001 pluriversal-incommensurability, concept: `pluriversal-commoning` — orthogonal to governance-memory).

Scope contained to canon-in-scope files. "Governance-memory layer" phrasing also appears in non-canon files (`docs/README.md:3`, `docs/synthesis/decision-memo.md:73`, `docs/research/2026-04-03/*`, `docs/research/connections/johar-neuroplastic-field.md:126`) — those are logged to parking lot per plan Constraints §"Scope-contain" and are addressed by follow-up cleanup outside Round 1.

## Consequences

- The project-vision canonical description of Agent Commons becomes more honest: pattern language + protocol family + governance-memory **pattern** (not layer). Readers are no longer implied to expect a separate architectural layer and will more readily understand governance-memory as the frontmatter + spec-DAG discipline it actually is.
- The adoption-section restructure (ADR-0030) can build on this term cleanup without re-introducing the layer framing.
- No downstream schema or tooling impact — "governance-memory" is a pattern's name, not a code-level identifier.
- Unresolved: non-canon occurrences of "governance-memory layer" remain. Parking-lot cleanup task will propagate the rename to README, synthesis, and research notes in a separate (non-canon-review) pass.

## Evidence

- cluster_key: `docs/project-vision.md:governance-memory`
- supports: 1 lens (Lens A primitive-claims auditor)
- opposes: 0
- source: adversarial-critique consolidated findings (tmp/canon-adversarial-critique-2026-04-21.md), CC-04 + CC-05
- Supporting bridge notes: none (adversarial critique is internal review, not bridge-note intake)
- Opposing bridge notes: none
- Cross-project echoes: none (IC/PM not reviewed in this round)
- Held-tension overlap: None checked 2026-04-22; only held ADR is 0001-pluriversal-incommensurability (concept: pluriversal-commoning, orthogonal).
- Adaptation note: R-claim source cites internal-review CC-IDs rather than bridge-note R-claims. `supports` count is lens-concurrence (1 lens flagged) rather than bridge-note support count. Per operator-authorized Round-1 protocol adaptation; see plan `canon-review-r1-adoption-governance-memory.md` Context §"Protocol adaptation for adversarial-critique input". Also see memory `feedback_foundation_repair_protocol_flexibility.md`.

## Diff summary

`docs/project-vision.md`:
- L10: `...pattern language, protocol family, and governance-memory layer that enables...` → `...pattern language, protocol family, and governance-memory pattern that enables...`
- L166: `- **Protocol family**: Agent Commons — the pattern language, protocols, and governance-memory layer` → `- **Protocol family**: Agent Commons — the pattern language, protocols, and governance-memory pattern`

Two-line mechanical edit. No structural change.
