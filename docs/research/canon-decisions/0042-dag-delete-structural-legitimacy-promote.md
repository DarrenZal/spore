---
doc_id: spore.canon-decision.dag-delete-structural-legitimacy-promote
doc_kind: decision-record
status: active
adr_number: "0042"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.coherence-audit-2026-04-22:C-13
  - spore.review.coherence-audit-2026-04-22:C-08
r_claim_statement: |
  C-13: The DAG-of-authority claim at governance-artifacts-and-graph-projections.md:90-92 ("authority cycles create paradox... so governance structures are acyclic by necessity") is contradicted by the canon's own polycentric-governance citations in holonic-network-architecture.md. Real governance systems (worker co-ops, polycentric governance, constitutional democracies, recursive democratic structures) contain authority cycles. Phase 1 disposition: delete. C-08: The Structural Legitimacy coupling claim at project-vision.md:54-56 ("Coordination infrastructure becomes viable when authority and consequence are structurally coupled") is the stronger foundation-level grounding and is already in-canon. Phase 1 disposition: promote to foundation-level status. Bundled because the delete + promote together constitute one coherent repair: the DAG claim goes, its proper substantive replacement takes foundation-level status.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-coherence-falsifiability-audit-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-audit-independent-second-opinion-codex-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-audit-independent-second-opinion-claude-opus-4-7-2026-04-22.md
  - docs/foundations/holonic-network-architecture.md
  - docs/project-vision.md
authorized-by: "canon-rebuild-phase-2a operator directive 2026-04-22 (Option E sequence post-coherence-audit)"
queue_reference: "coherence-audit-2026-04-22 C-13 (DAG-of-authority delete) + C-08 (Structural Legitimacy promote-to-foundation)"
affects_canon:
  - docs/foundations/governance-artifacts-and-graph-projections.md
  - docs/foundations/structural-legitimacy.md
  - docs/research/planning/canon-review-protocol.md
  - docs/README.md
related_adrs:
  - spore:ADR-0041-text-authoritative-representation
concepts:
  - polycentric-governance
  - coordination-substrate
  - structural-coupling
  - collective-agency
---

# ADR-0042 — DAG-of-Authority Delete + Structural Legitimacy Promote

## Status

active (authored + activated 2026-04-22 under canon-rebuild Phase 2a)

## Context

Phase 1 coherence-and-falsifiability audit (`tmp/canon-coherence-falsifiability-audit-2026-04-22.md`) produced two related dispositions on governance-legitimacy framing:

**C-13 — DAG-of-authority** (`governance-artifacts-and-graph-projections.md:90-92`): `delete`. The claim that *"authority cycles create paradox (A governs B governs A is incoherent), so governance structures are acyclic by necessity"* is contradicted by the canon's own polycentric-governance citations in `holonic-network-architecture.md:91-95` (Aligica/Tarko/McGinnis/Baldwin — polycentric governance is explicitly defined by cyclic mutual-adjustment). Real governance systems across multiple traditions contain authority cycles:
- Worker-owned cooperatives (workers → managers → workers)
- Polycentric governance (Ostrom; multiple centers in cyclic mutual-adjustment)
- Constitutional democracies (People → Legislature → Laws → People, with amendment as further cycle)
- Recursive democratic structures (liquid democracy, holacracy, sociocracy)

The DAG-of-authority claim is engineering-hygiene imported from software DAG tooling, dressed up as governance theorem. All four prior audits + Phase 1 converge on delete.

**C-08 — Structural Legitimacy coupling** (`project-vision.md:54-56`): `promote to foundation-level`. The claim that *"Coordination infrastructure becomes viable when authority and consequence are structurally coupled — when those who shape decisions are bound into the outcomes those decisions produce"* is substantively stronger than DAG-of-authority as a legitimacy foundation. It is already in-canon (project-vision.md:54-56); Phase 1 + Opus-4-7 second-opinion both identified it as the natural replacement.

These two dispositions are bundled because they constitute one coherent repair: the DAG-of-authority claim is removed and its proper substantive replacement (Structural Legitimacy coupling) takes foundation-level status via a new foundation document.

## Decision

**Edit — bundled four-part repair:**

1. **Delete the DAG-of-authority clause** at `governance-artifacts-and-graph-projections.md:90-92`. Replace with a narrower statement: DAGs apply to artifact derivation and document provenance (governance-memory discipline); acyclicity is a document-discipline property, not a governance-authority theorem. Add cross-reference to the new Structural Legitimacy foundation doc where legitimacy is addressed.

2. **Create new foundation doc** `docs/foundations/structural-legitimacy.md` elaborating the coupling claim. Preserves the paragraph in `project-vision.md:54-56` (does not move); adds depth with (a) core claim + polycentric framing, (b) why this replaces DAG-of-authority, (c) implementation surfaces in Spore (commitment protocols, contestability, governance-from-artifacts, polycentric cross-oversight, forkability), (d) open questions (measurement, scale, adversarial cases, temporal dynamics).

3. **Register the new foundation doc in canon-review-protocol §1** scope list — `docs/foundations/structural-legitimacy.md` added to the Spore canon-in-scope enumeration.

4. **Register the new foundation doc in `docs/README.md`** Foundations listing — line added describing it as "authority-consequence coupling as the basis of governance legitimacy (replaces the earlier DAG-of-authority framing)".

Rationale for `edit` disposition:
- **(a) Lens concurrence**: 4 prior audits + Phase 1 all converge. Lens L external-literature check surfaced that DAG-of-authority is contradicted by canon's own cited sources (internal-consistency failure) — strongest form of evidence.
- **(b) No opposition**: no audit defended the DAG-of-authority claim; several explicitly argued for Structural Legitimacy promotion. Phase 1 C-08 + C-13 both high-confidence.
- **(c) Held-tension check**: ADR-0001 (pluriversal-incommensurability) holds concepts `pluriversal-commoning` + `memory-governance`. Neither overlaps `polycentric-governance`, `coordination-substrate`, `structural-coupling`, or `collective-agency`. No block. Affirmative: narrowing-to-coupling (vs topology-acyclicity) is compatible with pluriversal critique — coupling is realizable in multiple traditions without forcing a single topology.

## Consequences

- The canon's governance-legitimacy foundation becomes coherent: coupling is the invariant, topology is variable. Polycentric governance, recursive democratic structures, and mutual accountability all become legitimate without needing to re-theorize their cycles.
- The artifact-derivation acyclicity property (governance-memory / spec-DAG discipline) is preserved with its proper scope: document source-of-truth management, not authority-flow constraint.
- The new foundation doc provides canon-level grounding for downstream mechanisms (commitment protocols, contestability, governance-from-artifacts, polycentric cross-oversight, forkability) that all implement authority-consequence coupling in specific dimensions.
- Registration updates (canon-review-protocol + README) prevent orphan-doc risk: the new foundation doc is visible to both the protocol's explicit scope list and to the README navigation.
- Downstream: Phase 3 (Core Thesis rewrite) can build on Structural Legitimacy as the legitimacy-grounding rather than having to re-justify governance authority. Phase 4's Actor Governance foundation doc (per v2 §6.4) builds on this coupling claim.
- Unresolved (documented in new foundation doc's Open Questions): coupling measurement, scale-dependent dynamics, adversarial cases, temporal maintenance.

## Evidence

- cluster_key: `docs/foundations/governance-artifacts-and-graph-projections.md:dag-of-authority-delete + docs/foundations/structural-legitimacy.md:foundation-promote`
- supports: 4 prior audits + 1 Phase 1 coherence audit (5-perspective concurrence); external literature (Lens L) found the DAG claim CONTRADICTED by the canon's own cited sources
- opposes: 0
- source: Phase 1 coherence-and-falsifiability audit C-13 (delete) + C-08 (promote), both high confidence
- Supporting canon: `docs/foundations/holonic-network-architecture.md:91-95` cites Aligica/Tarko/McGinnis/Baldwin on polycentric governance, which is definitionally cyclic — provides the internal-consistency evidence
- Opposing bridge notes: none
- Cross-project echoes: none (Spore-only)
- Held-tension overlap: checked 2026-04-22. ADR-0001 pluriversal-incommensurability concepts (`pluriversal-commoning`, `memory-governance`) do not overlap this ADR's concepts. Affirmative alignment: narrowing to coupling respects pluriversal critique of topology-universalism.
- Adaptation note: R-claim source cites Phase 1 coherence audit C-IDs. New foundation doc registration via canon-review-protocol §1 update + README listing is canon-scope extension authorized under foundation-repair-flexibility memory.

## Diff summary

**File 1**: `docs/foundations/governance-artifacts-and-graph-projections.md` (DAGs bullet in Structure and Flow section):
- Old bullet (deleted): `**DAGs** provide acyclic dependency resolution and clear authority flow (the holonic axis) — authority cycles create paradox (A governs B governs A is incoherent), so governance structures are acyclic by necessity. But value relations can be cyclic: justice ↔ equality is a reinforcing loop, not a paradox. DAGs apply to derivation and authority, not to all relations.`
- New bullet: scope acyclicity to artifact derivation + document provenance; explicitly state it is NOT a governance-authority theorem; cross-reference to Structural Legitimacy foundation doc; preserve value-cycles observation.

**File 2**: `docs/foundations/structural-legitimacy.md` (NEW, ~70 lines):
- Frontmatter: `doc_id: spore.structural-legitimacy`, `doc_kind: foundation`, `status: active`, `depends_on: [spore.project-vision]`
- Body: core claim + why this replaces DAG-of-authority + implementation surfaces in Spore + open questions

**File 3**: `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list:
- Add `- docs/foundations/structural-legitimacy.md` between spore-instance-model and lexicon entries

**File 4**: `docs/README.md` Foundations listing:
- Add `- [structural-legitimacy.md](./foundations/structural-legitimacy.md) — authority-consequence coupling as the basis of governance legitimacy (replaces the earlier DAG-of-authority framing)` between constitutional-artifacts and spore-instance-model

Four-file coordinated edit. Net ~70 lines added (new foundation doc) + 2 registration lines + 1 bullet rewrite.
