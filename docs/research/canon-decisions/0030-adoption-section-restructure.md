---
doc_id: spore.canon-decision.adoption-section-restructure
doc_kind: decision-record
status: draft
adr_number: "0030"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-01
  - spore.review.adversarial-critique-2026-04-22:CC-05
r_claim_statement: |
  Three independent critiques of the "How Adoption Works" section (project-vision.md L131-141):
  (Lens A) "Governance-memory" is listed as an adoptable surface alongside sensor node, edge permissions, profile declarations — but it's not an adoptable primitive; it's a frontmatter convention applied to documents.
  (Lens B) The four surfaces are listed in sequence in a way that reads as a prescribed adoption path, despite the claim of incremental/reversible adoption. Sequential listing contradicts the "partial adoption is possible" claim.
  (Lens C) The reversibility claim is a design intention with no operational evidence — no adoption-timeline docs, no rollback case studies, no partial-adoption examples. BKC is cited but as a full composition, not a partial-adoption demonstrator.
  All three critiques point to the same structural issue: the section conflates (a) a design goal (incrementality), (b) a recommended path (one common adoption sequence), and (c) primitive surfaces (which ones are actually independently adoptable).
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-a.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-b.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-c.md
  - docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-01 (triple-lens concurrence) + §CC-05 secondary"
affects_canon:
  - docs/project-vision.md
related_adrs:
  - spore:ADR-0029-governance-memory-framing-cleanup
concepts:
  - adoption-surface
  - governance-memory
  - coordination-substrate
---

# ADR-0030 — Adoption-Section Restructure

## Status

draft (authored 2026-04-22 under `canon-review-r1-adoption-governance-memory` plan)

## Context

The `How Adoption Works` section of `docs/project-vision.md` (L131-L141) is the single highest-signal finding from the adversarial canon critique (2026-04-22). It received **triple-lens concurrence** — Lens A (primitive-claims), Lens B (rhetorical-overreach / specificity-creep), and Lens C (evidence-vs-assertion) all independently flagged the passage. Each lens surfaced a distinct structural issue:

- **Primitive-claim** (Lens A / CC-05): governance-memory is listed as an adoptable surface alongside genuinely adoptable primitives (sensor node, edge permissions, profile declarations). But governance-memory is a frontmatter+dependency convention, not an independently adoptable primitive — participating in it is a side-effect of adding frontmatter.
- **Specificity-creep / prescriptivity** (Lens B / CC-01): the four surfaces are listed in sequence in a way that reads as a prescribed adoption path, despite the text's claim that adoption is "incremental and reversible" and that a project can "use one pattern without adopting the full stack." The sequential listing contradicts the partial-adoption claim.
- **Evidence gap** (Lens C / CC-01): the reversibility claim has no operational evidence. BKC/Octo is cited as the canonical reference implementation but it is a full-stack composition, not a partial-adoption demonstrator. No adoption-timeline, rollback case study, or partial-adoption example exists in the corpus.

Together these three critiques reveal that the section **conflates three distinct things**:

1. a design goal (incrementality + reversibility)
2. a recommended adoption path (one common sequence)
3. a menu of primitive surfaces (which ones are actually independently adoptable)

The current passage collapses all three into a single imperative form that reads prescriptively. Different readers legitimately infer different things: some read a required adoption path, some read a menu, some read a design principle.

This ADR is sibling to ADR-0029 (governance-memory framing cleanup). ADR-0029 handles the L10 and L166 term rename (`governance-memory layer` → `governance-memory pattern`). ADR-0030 handles the substantive section rewrite including the CC-05 tertiary fix at L135 (governance-memory's position in the adoption surface list).

## Decision

**Edit.** Restructure the `How Adoption Works` section to explicitly separate the three conflated claims:

- **Design principle** stated up front, scope-conditioned — adoption is additive rather than restructuring.
- **Menu of available coordination surfaces** — each independently useful, no sequential dependency implied. Governance-memory is described as a side-effect of adding frontmatter, not as a separately adoptable surface.
- **Typical adoption path** explicitly labelled as recommendation, not definition — to retain the useful "here's one path we've seen work" content while removing the prescriptivity.
- **Reversibility scope-note** — acknowledges reversibility as a design intention with BKC/Octo validating full-stack composition; explicitly notes that partial-adoption reversibility is not yet case-study-validated.

Rationale for `edit` disposition (per canon-review-protocol v3 §4, with adversarial-critique adaptation):

- **(a) Lens concurrence = 3** (triple-lens A+B+C) — highest-concurrence finding in the adversarial critique.
- **(b) No opposition**: no lens defended the current phrasing; the passage's own internal contradiction (incremental-yet-sequential) is self-documenting.
- **(c) No blocking held-tension**: no existing `hold-as-tension` ADR on `adoption-surface`, `coordination-substrate`, or `governance-memory` concepts. The only current hold (ADR-0001 pluriversal-incommensurability) is on orthogonal concept `pluriversal-commoning`.

Related to ADR-0029 — applied on top of the L10/L166 term rename so the adoption section refers consistently to "governance-memory pattern" (not "layer").

## Consequences

- Readers of the vision get a clearer mental model: adoption is a menu of independent surfaces, one or more of which a project adds according to its coordination goals. The previously-implied sequential path becomes an explicit "typical adoption" recommendation rather than definition.
- Governance-memory stops being implied as a first-class adoptable primitive. Its correct status (a pattern participated in via frontmatter) is preserved but no longer conflated with genuinely-adoptable infrastructure (sensor node, edge permissions, profile declarations).
- The reversibility claim becomes honest about its evidentiary status — a design intention pending partial-adoption case-study evidence. Future adopters are not misled into expecting operational reversibility that hasn't been demonstrated.
- Parking-lot follow-up: capture a partial-adoption case study from a future integrator to upgrade the reversibility claim from "design intention" to "operationally validated."
- Round 2 (universality-language cleanup, CC-02/08/09) is unaffected by this edit — the adoption section's scope-neutral repair language does not pre-empt the universality-cleanup decisions.

## Evidence

- cluster_key: `docs/project-vision.md:adoption-surface`
- supports: 3 lenses (triple-lens concurrence — Lens A + B + C)
- opposes: 0
- source: adversarial-critique consolidated findings (tmp/canon-adversarial-critique-2026-04-21.md), CC-01 primary + CC-05 secondary
- Supporting bridge notes: none (adversarial critique is internal review); `docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md` corroborates the context-fit principle that argues against prescriptive adoption paths
- Opposing bridge notes: none
- Cross-project echoes: none (IC/PM not reviewed in this round)
- Held-tension overlap: None checked 2026-04-22; only held ADR is 0001-pluriversal-incommensurability (concept: pluriversal-commoning, orthogonal).
- Adaptation note: R-claim source cites internal-review CC-IDs rather than bridge-note R-claims; `supports` count is lens-concurrence (3 lenses flagged) rather than bridge-note support count. Per operator-authorized Round-1 protocol adaptation; see plan `canon-review-r1-adoption-governance-memory.md` Context §"Protocol adaptation for adversarial-critique input". Also see memory `feedback_foundation_repair_protocol_flexibility.md`.

## Diff summary

`docs/project-vision.md:L131-L141` replaced. Old text (4-item sequenced list with "incremental and reversible" disclaimer) replaced with restructured section containing:

1. Design-principle header
2. Menu of available coordination surfaces (frontmatter, sensor node, edge permissions, profile declarations) — each described independently; governance-memory described as side-effect of frontmatter, not as separate surface
3. Typical adoption path paragraph — labelled as recommendation-not-requirement
4. Reversibility scope-note acknowledging design-intention status and partial-adoption evidence gap

Net delta: ~5 lines longer, zero primitive semantics changed, zero canon scope expansion.
