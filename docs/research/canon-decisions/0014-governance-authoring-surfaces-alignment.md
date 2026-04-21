---
doc_id: spore.canon-decision.governance-authoring-surfaces-alignment
doc_kind: decision-record
status: draft
adr_number: "0014"
opened-on: 2026-04-20
covers:
  - F-001
  - F-002
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-governance-process:R2
  - spec:spore.corpus-review.research-capstone:R8
r_claim_statement: |
  Governed authoring surfaces should publish the same lifecycle and artifact taxonomy that the repo's active governance machinery actually enforces. Once the operative status or document-kind vocabulary is settled, README, quickstart, and template-adjacent surfaces should stop teaching superseded enums or readers will learn a stale process from the very documents meant to orient them.
supported_by:
  - docs/research/corpus-review/research-governance-process.md:40-44
  - docs/research/corpus-review/research-capstone.md:207-207
  - docs/research/corpus-review/research-capstone.md:323-323
  - docs/research/planning/canon-review-protocol.md:83-89
  - docs/research/canon-decisions/0012-adr-status-vocabulary-unification.md
  - docs/governance/agent-commons-meta-protocol.md
  - docs/governance/adoption-guide.md
authorized-by: ""
queue_reference: "Phase 7 round-governance-authoring-surfaces (F-001, F-002)"
affects_canon:
  - docs/research/canon-decisions/README.md
  - docs/governance/quickstart.md
related_adrs:
  - spore:ADR-0012-adr-status-vocabulary-unification
shared_framing: ""
concepts:
  - memory-governance
---

# ADR-0014 — Governance Authoring Surfaces Alignment

## Status

draft (authored 2026-04-20; activation pending round close)

## Context

F-001 and F-002 are both downstream authoring-surface drifts. The first sits in the ADR README, which still teaches the pre-ADR-0012 lifecycle language (`proposed`, `accepted`, `partial-drift`) even though Spore's active decision records and validator now author directly in `draft`, `active`, `deprecated`, and `superseded`. The second sits in the governed-doc quickstart, which still publishes a stale `doc_kind` list (`foundations`, `protocol`, `guidance`) that diverges from the governance taxonomy new authors are told to consult.

The authority line is not ambiguous once the documents are read together. `docs/governance/quickstart.md` explicitly says the full governance model, including artifact taxonomy, lives in `docs/governance/agent-commons-meta-protocol.md`. The adoption guide mirrors that taxonomy as a downstream onboarding surface. The README lifecycle question is likewise no longer open: ADR-0012 made the validator-native decision-record enum authoritative for Spore ADRs.

This round therefore does not create new governance semantics. It propagates already-resolved semantics into the repo's first-look authoring surfaces.

## Decision

Edit the two downstream authoring surfaces so they teach the now-authoritative vocabulary.

1. In `docs/research/canon-decisions/README.md`, replace the stale ADR lifecycle with the ADR-0012 decision-record enum: `draft` -> `active` -> `deprecated` or `superseded`.
2. Treat `docs/governance/agent-commons-meta-protocol.md` as the authoritative base `doc_kind` taxonomy for the quickstart because the quickstart itself delegates there for the full governance model.
3. Update `docs/governance/quickstart.md` so its `doc_kind` guidance matches that base taxonomy (`vision`, `foundation`, `architecture`, `spec`, `operations`, `research`, `positioning`, `pattern`, `roadmap`) instead of the stale `foundations` / `protocol` / `guidance` list.
4. In the same quickstart, explicitly name `decision-record` as the governed `doc_kind` used by canon-review ADRs in this repo, so the onboarding surface no longer implies that live ADRs fall outside the documented taxonomy.
5. Reclassify `docs/governance/quickstart.md` itself from `doc_kind: guidance` to `doc_kind: operations`, since its actual role is a procedural onboarding document and `guidance` is not part of the authoritative base taxonomy it points readers to.

## Rationale

The repair is propagation, not reinterpretation.

- ADR-0012 already settled the status vocabulary for decision records. Leaving the README on the superseded lifecycle would force Phase 7 authors to relearn the status model from validator behavior or adjacent ADRs.
- The quickstart already defers to the meta-protocol for artifact taxonomy, so the cleanest authority call is to treat the meta-protocol as primary and the adoption guide as a secondary alignment check.
- `decision-record` is already a live governed artifact kind in this repo's canon-review protocol and ADR corpus. Naming it explicitly in quickstart is more accurate than pretending the base DAG taxonomy exhausts every governed surface Spore uses.
- Reclassifying the quickstart itself avoids a fresh contradiction where the corrected table would exclude the quickstart's own frontmatter.

## Consequences

- README authors now see the same ADR status lifecycle that the validator and live Spore ADR corpus enforce.
- Quickstart readers now get the same base `doc_kind` taxonomy the meta-protocol publishes, plus an explicit note that canon-review ADRs use `decision-record`.
- The quickstart no longer models a `guidance` kind that nothing else in the repo uses.
- F-001 and F-002 close without broadening validator scope or changing the underlying governance taxonomy again.

## Evidence

- F-001 evidence gate: pass
  - `docs/research/canon-decisions/README.md` still teaches `proposed` / `accepted` / `partial-drift`
  - `docs/research/planning/canon-review-protocol.md:83-89` defines the ADR-lite template with `status: draft`
  - `docs/research/canon-decisions/0002-reproduction-primacy.md:5-7` shows the historical mapping workaround
  - `docs/governance/agent-commons-meta-protocol.md` publishes the validator-native lifecycle
  - `docs/research/canon-decisions/0012-adr-status-vocabulary-unification.md` makes that lifecycle authoritative for decision records
- F-002 evidence gate: pass
  - `docs/governance/quickstart.md` still publishes `foundations`, `protocol`, and `guidance`
  - `docs/governance/agent-commons-meta-protocol.md` is the quickstart's declared source for the full governance model
  - `docs/governance/adoption-guide.md` mirrors the meta-protocol taxonomy rather than the stale quickstart list
  - `docs/research/canon-decisions/0006-polycentric-governance-at-holarchy.md:1-3` confirms `decision-record` is already a live governed kind in the ADR corpus

## Diff summary

- `docs/research/canon-decisions/README.md`: replaces stale ADR lifecycle language with the ADR-0012 decision-record enum
- `docs/governance/quickstart.md`: aligns the `doc_kind` guidance to the authoritative taxonomy, names the ADR exception explicitly, and reclassifies the quickstart itself as `operations`
