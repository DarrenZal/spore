---
doc_id: spore.canon-decision.dual-axis-pattern-recursion-clarification
doc_kind: decision-record
status: draft
adr_number: "0033"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-09
r_claim_statement: |
  The table claims the "same dual-axis pattern repeats at every scale," then provides five illustrative scale levels with paired descriptions. However, the descriptions are not identical transformations; they are context-specific implementations that change substantially at each scale. For example, "explicit governance artifacts" appears only at the organizational level, not at personal or P2P levels. The holonic/network dual-axis might be present at each scale, but the form it takes is scale-specific, not self-similar. By claiming the pattern "repeats" while showing divergent instantiations, the canon implies a deeper structural self-similarity than the evidence supports. What is actually happening is: the dual-axis structure is a useful frame at every scale, but its specific manifestations (governance artifacts, discovery mechanisms, memory systems) differ significantly.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-b.md
  - docs/foundations/holonic-network-architecture.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-09 (dual-axis recursion overclaim)"
affects_canon:
  - docs/foundations/holonic-network-architecture.md
related_adrs: []
concepts:
  - coordination-substrate
  - bioregional-scope
  - polycentric-governance
---

# ADR-0033 — Dual-Axis Pattern-Recursion Clarification

## Status

draft (authored 2026-04-22 under `canon-review-r2-universality-language` plan)

## Context

The "Fractal Scale Levels" section of `docs/foundations/holonic-network-architecture.md` (L73-L84) claims "The same dual-axis pattern repeats at every scale" followed by a five-row table showing containment and overlap expressions at Personal / P2P / Organizational / Network-of-networks / Global-bioregional scales. The adversarial canon critique (2026-04-22) flagged this as CC-09 via Lens B — a specificity-creep / oversimplification finding.

The structural problem: the table's own content shows divergent instantiations, not uniform recursion. "Explicit governance artifacts" appears only at the Organizational scale; "member overlap, lateral discovery" appears only at Organizational+; "Personal knowledge graph" is a Personal-scale construct that doesn't recur in identical form at other scales. The dual-axis *structure* is applicable at each scale; the *form* is scale-specific.

"Repeats" implies mathematical recursion or structural self-similarity. "Applies" with scale-specific instantiations is a weaker, more accurate claim. The distinction matters for practitioners: claiming self-similarity will lead them to expect deeper parallels than exist (e.g., trying to mirror organizational governance in personal workflow, or expecting bioregional governance to compose as nested team structures).

This ADR is sibling to ADR-0031 (CC-02 ecology-cycle scope conditioning) and ADR-0032 (CC-08 Core-Thesis primitives scope conditioning). All three address universality overreach, but CC-09 differs structurally: the first two are scope conditioning (when is the claim valid?); this is recursion clarification (what kind of sameness actually obtains?). Hence a separate ADR rather than a bundle — the repair vocabulary is distinct.

## Decision

**Edit.** Reframe the section header from claiming recursion to claiming applicability-with-scale-specific-form:

- Old: "The same dual-axis pattern repeats at every scale:"
- New: "The dual-axis structure applies at each scale; its specific instantiations differ by scale (not a strict recursion, but a recurring architectural motif with scale-appropriate forms):"

The repair preserves the table (all five scale rows intact — they are valid illustrations), the section title "Fractal Scale Levels" (kept because "fractal" here invokes self-similar-motifs rather than strict recursion; the opening sentence now does that distinction explicitly), and the subsequent summary "At every level: sovereign perspective + shared space + some form of governance memory + federated knowledge" (kept — that is the actual structural invariant).

Rationale for `edit` disposition (canon-review-protocol v3 §4 with adversarial-critique adaptation):

- **(a) Lens concurrence ≥ 1**: Lens B flagged ✓ (CC-LensB-8 in the per-lens output).
- **(b) No opposition**: the table itself provides the evidence (divergent instantiations already shown); no lens defended "repeats" phrasing.
- **(c) Held-tension check**: ADR-0001 (pluriversal-incommensurability) does not block — if anything, clarifying that the pattern applies-with-variation-rather-than-strict-recursion is more compatible with pluriversal framings than claiming self-similarity (which pluriversal critique would specifically contest).

## Consequences

- Readers no longer expect strict self-similarity between, e.g., personal workflow and organizational governance. The "same motif, scale-specific form" framing is more honest about what Spore actually provides: a design frame (dual-axis: containment + overlap) applicable across scales, not a recursive architecture where operations at one scale compose upward/downward transparently.
- The architecture document's credibility increases — the table is no longer in tension with its own preamble.
- Downstream: future scale-transition work (e.g., handoff patterns between Personal-scale holons and Organizational-scale holons) can proceed without force-fitting recursion expectations.
- Unresolved: specific scale-transition patterns (how does Organizational-scale governance inform Personal-scale choices, and vice versa?) are not normative in this ADR. That is fresh research territory.

## Evidence

- cluster_key: `docs/foundations/holonic-network-architecture.md:dual-axis:recursion-claim`
- supports: 1 lens (Lens B specificity-creep / oversimplification)
- opposes: 0
- source: adversarial-critique consolidated findings (tmp/canon-adversarial-critique-2026-04-21.md), CC-09
- Supporting bridge notes: none directly; the canon file itself (the divergent-instantiation table) is the evidence
- Opposing bridge notes: none
- Cross-project echoes: none
- Held-tension overlap: None blocks 2026-04-22. Affirmative alignment with ADR-0001 pluriversal-incommensurability hold — weaker self-similarity claim is more pluriversal-compatible.
- Adaptation note: R-claim source cites internal-review CC-ID; `supports` is lens-concurrence count. Per operator-authorized Round-2 protocol adaptation continuing from R1.

## Diff summary

`docs/foundations/holonic-network-architecture.md:L73`:

- Old: `The same dual-axis pattern repeats at every scale:`
- New: `The dual-axis structure applies at each scale; its specific instantiations differ by scale (not a strict recursion, but a recurring architectural motif with scale-appropriate forms):`

One-line edit. Table, summary, and section title unchanged.
