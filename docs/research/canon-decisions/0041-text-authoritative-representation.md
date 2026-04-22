---
doc_id: spore.canon-decision.text-authoritative-representation
doc_kind: decision-record
status: active
adr_number: "0041"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.coherence-audit-2026-04-22:C-09
r_claim_statement: |
  The Dual Representation section at docs/foundations/constitutional-artifacts-and-graph-projections.md:43-50 asserts "The text is not derived from the graph. The graph is not a degraded form of the text. They are complementary views of the same normative structure." This is operationally false and creates hidden authority conflicts whenever text and graph representations disagree. Spore's actual workflow is: humans author markdown with YAML frontmatter; ingestion tooling parses this into graph representations; the text is authored and the graph is derived. Without an explicit precedence rule, every sensor/mapping dispute becomes an ambiguous authority conflict. Phase 1 disposition: reframe-as-explicit-definition — commit to text-authoritative with graph-as-derived-projection.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-coherence-falsifiability-audit-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-audit-independent-second-opinion-codex-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-audit-independent-second-opinion-claude-opus-4-7-2026-04-22.md
  - /Users/darrenzal/projects/regenai/koi-processor/scripts/ingest_spec_dag.py
authorized-by: "canon-rebuild-phase-2a operator directive 2026-04-22 (Option E sequence post-coherence-audit)"
queue_reference: "coherence-audit-2026-04-22 C-09 (Dual Representation — operationally false; reframe-as-explicit-definition)"
affects_canon:
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
related_adrs:
  - spore:ADR-0042-dag-delete-structural-legitimacy-promote
concepts:
  - governance-memory
  - coordination-substrate
  - memory-governance
---

# ADR-0041 — Text-Authoritative Representation

## Status

active (authored + activated 2026-04-22 under canon-rebuild Phase 2a)

## Context

The Phase 1 coherence-and-falsifiability audit (`tmp/canon-coherence-falsifiability-audit-2026-04-22.md` C-09) disposed the Dual Representation section at `constitutional-artifacts-and-graph-projections.md:43-50` as `reframe-as-explicit-definition` with high confidence. All four prior audits (v1, v2, Codex second-opinion, Opus-4-7 second-opinion) converged that the current claim — *"The text is not derived from the graph. The graph is not a degraded form of the text. They are complementary views of the same normative structure."* — is philosophically attractive but operationally untenable. Every future sensor/mapping dispute becomes a hidden authority conflict without an explicit precedence rule.

Spore's actual practice is text-authoritative: humans author markdown with YAML frontmatter (doc_id, depends_on, concepts, etc.); ingestion tooling (currently `/Users/darrenzal/projects/regenai/koi-processor/scripts/ingest_spec_dag.py`) parses this into graph representations. Text is the authored surface; graph is the derived queryable view. When they disagree, regenerating the graph from text is the canonical resolution.

This ADR commits the canon to that operational reality.

## Decision

**Edit.** Rewrite the Dual Representation section to commit to text-authoritative representation with graph-as-derived-projection. Replace the "neither is derived from the other" claim with an explicit direction-of-derivation.

Rationale for `edit` disposition:
- **(a) Lens concurrence**: 4 prior audits + Phase 1 audit all converge. Highest-concurrence repair in the sequence.
- **(b) No opposition**: no lens defended the "neither is derived" phrasing. The canon's own operational workflow (human markdown authoring + ingest_spec_dag.py regeneration) directly corroborates text-authoritative.
- **(c) Held-tension check**: ADR-0001 (pluriversal-incommensurability) holds concepts `pluriversal-commoning` + `memory-governance`. The `memory-governance` overlap is orthogonal — ADR-0001's hold is about pluriversal-tension in memory-governance, not about text-vs-graph authority. Committing to text-authoritative does not touch the pluriversal hold.

## Consequences

- Readers gain a clear operational precedence rule: when text and graph disagree, text wins; graph regenerates from text. Eliminates the hidden authority conflict the prior phrasing created.
- The dual-audience framing (human-text + machine-graph) is preserved — the two representations still serve different readers — but the direction of derivation is now explicit.
- Downstream: Phase 4's representation-authority foundation doc (when authored) can build on this ADR as the text-vs-graph layer of a broader precedence hierarchy (text / graph / sensor / attestation).
- Preserves the existing section header ("Dual Representation") and the two-bullet human/machine framing; only the "neither is derived" claim + its surrounding sentence change.
- Does not touch Graph Projections (ADR-0036 tiering stands) or Structure and Flow (handled in sibling ADR-0042).

## Evidence

- cluster_key: `docs/foundations/constitutional-artifacts-and-graph-projections.md:dual-representation:text-authoritative`
- supports: 4 prior audits + 1 Phase 1 coherence audit (5-perspective concurrence)
- opposes: 0
- source: Phase 1 coherence-and-falsifiability audit C-09 (high confidence)
- Supporting corpus: v1, v2, Codex, Opus-4-7 all converge on text-authoritative commit; `ingest_spec_dag.py` is the operational tool that implements text→graph derivation
- Opposing bridge notes: none
- Cross-project echoes: none (Spore-only; IC/PM not audited in this round)
- Held-tension overlap: checked 2026-04-22. Only active hold is ADR-0001 pluriversal-incommensurability (concepts: `pluriversal-commoning`, `memory-governance`). `memory-governance` concept overlap is ORTHOGONAL — ADR-0001's hold is about pluriversal tension in memory-governance semantics, not about text-vs-graph precedence. No block.
- Adaptation note: R-claim source cites internal-review C-ID rather than bridge-note R-claim. Per canon-rebuild Phase 2a protocol adaptation continuing from R1-R4. Phase-1-coherence-audit is the authoritative R-claim analog for Phase 2-5 work.

## Diff summary

`docs/foundations/constitutional-artifacts-and-graph-projections.md:50` (final paragraph of Dual Representation section):
- Old: `The text is not derived from the graph. The graph is not a degraded form of the text. They are complementary views of the same normative structure.`
- New (authored markdown + frontmatter → graph projection derivation):

  > Text is authoritative; graph is a derived view. Constitutional artifacts are authored as text, and graph representations are generated from that text through tooling (frontmatter parsers, dependency extractors, entity resolvers — currently `koi-processor/scripts/ingest_spec_dag.py`). When text and graph disagree, text is canonical and the graph is regenerated to match. This direction of derivation is deliberate: text is the surface where humans debate and revise, and graph is the surface where machines query and compose. The two representations are complementary but not peers — one authors, one derives.

Single-paragraph replacement. Preserves section header + two-bullet human/machine framing.
