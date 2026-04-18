---
doc_id: spore.canon-decision.polycentric-governance-at-holarchy
doc_kind: decision-record
adr_number: "0006"
# Spore validator enum is [active, deprecated, draft, superseded] — no "proposed".
# Mapping protocol §3 lifecycle state "proposed" → validator-compatible "draft";
# transitions to "active" at accept. Precedent: ADR-0001/0002/0003/0004/0005.
status: draft
decision: edit
r_claim_source:
  - spore.connection.polycentric-governance:R1
  - spore.connection.bioregional-scope-legal-constraint:R2
  - spore.connection.boundary-commoning:R2
  - spore.connection.platform-cooperativism-constructive:R4
r_claim_statement: |
  The mycelial-holarchy architecture should formally adopt polycentric governance as the scale-up logic for holon coordination, importing the three operational frameworks from the contemporary empirical literature — Aligica & Tarko (attributes), McGinnis (structure/process/outcomes), Baldwin et al. (context/operations/outcomes/feedback) — as first-class architectural discipline. The architectural text should specify: (a) each holon as a decision center with limited autonomy; (b) the overarching rule system spanning holons; (c) mutual-adjustment processes (competition + cooperation + formal/informal relationships); (d) emergent order as an architectural outcome, not a side effect; (e) the explicit distinction between decentralization (which the architecture does exhibit) and polycentricity (which the architecture should exhibit — the stronger claim). The architecture should also carry the empirically-identified drawbacks (transaction costs, democratic accountability, exploitation risks, exclusion of marginalized groups, veto points, complexity, externalities) as first-class architectural concerns, not downstream operational issues.
queue_reference: "Pass 2 capstone §3.1 Spore queue #1 (polycentric-governance at mycelial-holarchy-architecture, 12S/0O → DB recount 20S/0O)"
affects_canon:
  - docs/foundations/holonic-network-architecture.md
  - docs/research/canon-decisions/0006-polycentric-governance-at-holarchy.md
related_adrs:
  - spore:ADR-0004-three-layer-coordination-stack
  - spore:ADR-0003-boundary-theory-unifier
  - spore:ADR-0002-reproduction-primacy
shared_framing: ""
concepts:
  - polycentric-governance
  - boundary-commoning
  - bioregional-scope
  - platform-cooperativism
---

## Context

Capstone §3.1 Spore queue #1 identifies `spore.mycelial-holarchy-architecture:polycentric-governance` as the highest-support Tier-1 Spore canon-review item: 12S/0O per capstone; 20S/0O on DB recount 2026-04-18 (favourable drift; projections landed after capstone authoring). The queue asks the mycelial-holarchy architecture to import the three operational polycentric-governance frameworks from the contemporary empirical literature — Aligica & Tarko (attributes), McGinnis (structure/process/outcomes), Baldwin et al. (context/operations/outcomes/feedback) — alongside the documented drawbacks (transaction costs, democratic accountability, exploitation risks, exclusion, veto points, complexity, externalities).

ADR-0004 (`three-layer-coordination-stack`) already coordinated polycentric-governance at project-vision level across all 3 repos (Spore/IC/PM project-vision.md). That ADR's Scope section (line 45) explicitly deferred primitive-level edits on `mycorrhizal-federation-protocol` to a future ADR. This ADR takes the companion move: primitive-level edit on `mycelial-holarchy-architecture` (the architectural substrate for holon coordination), carrying polycentric-governance from project-vision framing into architectural discipline.

Scope decision (single-repo vs coordinated fan-out). Per Constraint 1's `affects_canon`-drives-fan-out rule: the decision edits ONE canon doc in ONE repo (`spore/docs/foundations/holonic-network-architecture.md`). No IC or PM primitive is affected — PM has 1 R-claim at `pm.protocol:polycentric-governance` (`pm.connection.bioregional-coordination:R2`) but cluster evidence is insufficient for a PM primitive-level edit, and PM canon's polycentric-governance exposure already sits in pm.project-vision per ADR-0004. Single-repo Spore ADR; cross-project coherence carried via `related_adrs: [spore:ADR-0004-three-layer-coordination-stack]` and Context narrative, not via a new shared framing note.

Shared-concept discovery note. Running the step-10 discovery grep 2026-04-18 shows `polycentric-governance` has R-claim targets in 2 projects (Spore 5 targets; PM 1 target at pm.protocol). Per step-10 rule, the concept is added to the shared-concept roster (to be formalised in protocol v2 harvest). The shared-concept rule then fires: prior Tier-A/B ADR exists on the concept (spore:ADR-0004 has `concept: polycentric-governance`); D3 handoff applies. Extended-D3 (concept × target) shows ADR-0004 covered polycentric-governance at `project-vision`, NOT at `mycelial-holarchy-architecture` — distinct canon target. Extended-D3 = proceed. Constraint-3 cross-project-coordination requirement was satisfied by ADR-0004; this ADR is the primitive-level Spore follow-up that ADR-0004 deferred. No new shared framing needed.

## Decision

**edit**. Add a new section `## Polycentric Governance as Scale-Up Logic` to `docs/foundations/holonic-network-architecture.md`, placed between `## Fractal Scale Levels` and `## Associational Practice And The A–C–A' Circuit`. The section imports the three contemporary empirical frameworks (Aligica & Tarko / McGinnis / Baldwin) as architectural discipline, specifies the five operational requirements (decision centres, overarching rule system, mutual-adjustment processes, emergent order, decentralization-vs-polycentricity distinction), carries the seven empirically-identified drawbacks as first-class architectural concerns, and back-links to the source bridge note `spore.connection.polycentric-governance` and to ADR-0004's cross-project governance-layer framing.

The section is motivating + structural: it makes the already-exhibited decentralization of the dual-axis topology into the stronger polycentricity claim by specifying the operations that distinguish the two. No structural element of the dual-axis topology changes; no frontmatter change; no prose removed.

## Consequences

- The mycelial-holarchy architecture now carries the contemporary empirical literature's polycentric-governance operations as first-class architectural content, closing the capstone §3.1 Spore queue item #1.
- The seven drawbacks (transaction costs, democratic accountability, exploitation risks, exclusion of marginalized groups, veto points, complexity, externalities) become visible at the architectural layer rather than surfacing only in downstream pattern/protocol docs.
- Cross-project coherence with ADR-0004 (three-layer-coordination-stack): that ADR placed polycentric-governance in the governance layer of the three-layer stack at project-vision level; this ADR extends that placement into the architectural substrate. Together, the two ADRs put polycentric governance at the two spore canon levels where it load-bears (vision + architecture).
- Future primitive-level polycentric-governance work on `mycorrhizal-federation-protocol` (ADR-0004 line 45 deferral; federation-protocol:polycentric-governance 8S/0O per ADR-0004 Evidence) remains unaddressed by this ADR. Out of scope; open for a subsequent canon-review pass.
- PM-side polycentric-governance at `pm.protocol` (1S evidence) is not advanced by this ADR. If PM wishes to canonize polycentric-governance at protocol level, that is a separate decision; ADR-0004's project-vision-level PM edit carries the shared cross-project framing in the meantime.
- The wiki bridge note `spore.connection.polycentric-governance` remains the source-anchor for future editors.

## Evidence

- Supporting bridge notes (primary cluster `spore.mycelial-holarchy-architecture:polycentric-governance`): `spore.connection.polycentric-governance` (R1 — primary; anchored by C1–C6, C8, C9, C15), `spore.connection.bioregional-scope-legal-constraint` (R2), `spore.connection.boundary-commoning` (R2), `spore.connection.platform-cooperativism-constructive` (R4 — legacy target slug `spore.foundations.holonic-network-architecture`; live frontmatter shows `doc_id: spore.mycelial-holarchy-architecture` — same doc, allowlist-drift noted per D7).
- Opposing bridge notes: none at this cluster.
- Primary cluster counts (Constraint 5 gate):
  - supports: 20
  - opposes: 0
  - source: psql personal_koi (join pattern er.object_uri = c.entity_uri; queried 2026-04-18)
  - cluster_key: `spore.mycelial-holarchy-architecture:polycentric-governance`
  - Capstone-vs-DB drift: capstone §3.1 reports 12S/0O; DB recount 20S/0O — favourable additive drift (+8 supports, 0 opposes; projection batches landed after capstone authoring 2026-04-17). No disposition flip; gate passes both counts strongly.
- Secondary clusters (evidence-context, not gating): `spore.mycorrhizal-federation-protocol:polycentric-governance` = 8S/0O (already referenced by ADR-0004 Evidence); `spore.term.linguistic-closure:polycentric-governance` (1 R-claim at `spore.connection.collective-intelligence:R3`, below Constraint 5(a) threshold; not imported here).
- Cross-project echoes: `pm.protocol:polycentric-governance` = 1 R-claim (`pm.connection.bioregional-coordination:R2`) — below gate for a PM primitive-level edit, not pursued here. PM's polycentric-governance exposure sits at pm.project-vision via ADR-0004.
- Held-tension overlap (Constraint 5c): active holds are `spore:ADR-0001-pluriversal-incommensurability` (concepts: pluriversal-commoning, memory-governance), `pm:ADR-0001-accounting-dependence-tension` (concept: market-dependence). This ADR's concepts = [polycentric-governance, boundary-commoning, bioregional-scope, platform-cooperativism]. No slug-level overlap with any hold. No affects_canon overlap. Checked 2026-04-18.
- Allowlist drift (D7 note): intake Q6 allowlist lists `spore.mycelial-holarchy-architecture`; live frontmatter on `docs/foundations/holonic-network-architecture.md` shows `doc_id: spore.mycelial-holarchy-architecture` — allowlist and live agree (same precedent as ADR-0002).
- Spore validator non-regression: pre-edit baseline = 7 errors (2026-04-17 pre-flight); post-edit run must equal or be less.

## Diff summary

- `docs/foundations/holonic-network-architecture.md`: one new section `## Polycentric Governance as Scale-Up Logic` inserted between `## Fractal Scale Levels` and `## Associational Practice And The A–C–A' Circuit`. Approximately 25–35 lines of prose specifying the three operational frameworks, five architectural requirements, seven drawbacks, and back-links to source bridge note + ADR-0004. No frontmatter change. No prose removed from existing sections.
