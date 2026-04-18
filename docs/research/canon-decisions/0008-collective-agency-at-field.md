---
doc_id: spore.canon-decision.collective-agency-at-field
doc_kind: decision-record
adr_number: "0008"
# Spore validator enum [active, deprecated, draft, superseded]; map protocol §3 proposed→draft, accepted→active.
status: draft
decision: edit
r_claim_source:
  - spore.connection.institutions-and-extitutions:R1
  - spore.connection.polycentric-governance:R2
r_claim_statement: |
  Spore's `field` lexicon entry should formally carry three commons-tradition sources rather than one: (a) the Bourdieusian institutionalist reading (Gare on `Institutions`) where field is the macro-dynamic extension of institutional analysis and where fields are sites of symbolic/social/cultural/economic/political capital struggle; (b) the extitutional-theory reading (`Extitution` / `Extitutional Theory`) where "field ontology" explicitly names the shifting, contingency-adequate attention-allocation pattern of extitutional space and explicitly flags the technical sense of field (interrelation, intersubjectivity, codeterminacy); (c) the assemblage-theory substrate (DeLanda, `Assemblage`) where field components are identifiable but inseparable-in-function, producing genuinely novel emergent properties. The lexicon entry should state explicitly that Spore's collective-agency claim is analyzable through both the institutional and the extitutional lens and should not adopt anti-institutional valence by default. This is a direct extension of the Wave 1 polycentric-governance R2 on the polycentric-vs-decentralized distinction, adding the institution/extitution lens-complementarity axis to the same lexicon entry.
queue_reference: "Pass 2 capstone §3.1 Spore queue #5 (collective-agency at term.field, 11S/0O)"
affects_canon:
  - docs/foundations/lexicon/field.md
  - docs/research/connections/canon-framing-collective-agency.md
  - docs/research/canon-decisions/0008-collective-agency-at-field.md
related_adrs:
  - intelligence-commons:ADR-0006-collective-agency-declination
  - spore:ADR-0006-polycentric-governance-at-holarchy
  - spore:ADR-0002-reproduction-primacy
  - spore:ADR-0003-boundary-theory-unifier
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-collective-agency.md
concepts:
  - collective-agency
  - polycentric-governance
  - boundary-commoning
---

## Context

Capstone §3.1 Spore queue #5 (`spore.term.field:collective-agency`, 11S/0O per capstone; 11S/0O per DB recount 2026-04-18 — no drift) asks the lexicon entry to carry three commons-tradition substrates (Bourdieusian institutional, extitutional theory, assemblage theory) rather than one, and to canonise the polycentric-vs-decentralised distinction as a lexicon-level clarification of Spore's collective-agency claim. `collective-agency` discovered as cross-2-project (Spore + IC) via plan step 10 grep 2026-04-18; added to the shared-concept roster this session. No prior ADR carries the concept; escalation to coordinated fan-out with IC sibling authored as `intelligence-commons:ADR-0006-collective-agency-declination` (asymmetric — IC rejects per §3 of the shared framing, because IC's primitive architecture distributes agency through memory-layers rather than through a collective-agency primitive, and because IC cluster is at the 3S/0O gate with a single R-claim).

This ADR is authored as the fifth and final Tier C queue item in the 2026-04-18 Spore Tier C session.

## Decision

**edit**. Extend `docs/foundations/lexicon/field.md` with two paragraph additions:

1. A new subsection **"Three Tradition Substrates for Collective Agency"** (placed between "Three Existing Uses In Spore" and "Field As Reproductive Apparatus") naming the three commons-tradition substrates — (a) Bourdieusian institutionalist reading (Gare), (b) extitutional theory reading, (c) assemblage-theory substrate (DeLanda) — and stating explicitly that Spore's collective-agency claim is analyzable through both institutional and extitutional lenses without default anti-institutional valence.
2. A new subsection **"Polycentric vs Decentralized: The Field Clarification"** (placed immediately after subsection 1) naming the polycentric-vs-decentralised distinction as lexicon-level clarification, stating that Spore's collective-agency claim is a *polycentric* collective-agency claim (multiple decision centres + shared rules + mutual adjustment + emergent order), and citing the Aligica-Tarko non-monocentricity threshold test as the operational criterion. Cross-link to `spore:ADR-0006-polycentric-governance-at-holarchy` for the architecture-layer placement of polycentric governance.

Expanded "Source" section points at `spore.connection.institutions-and-extitutions`, `spore.connection.polycentric-governance`, and `spore.connection.canon-framing-collective-agency` as anchors.

No structural element of the existing lexicon entry changes; no frontmatter change; no prose removed. The edit converts a single-substrate collective-agency framing into a three-substrate + polycentric-anchored framing.

## Consequences

- `spore.term.field` now carries the three commons-tradition substrates as first-class lexicon content, closing capstone §3.1 Spore queue item #5.
- Spore's collective-agency vocabulary is anchored against the Polanyi → Ostrom → Aligica/Tarko → McGinnis → Baldwin lineage rather than the more diffuse "decentralization" framing.
- Cross-composition with ADR-0006 (polycentric-governance-at-holarchy): ADR-0006 places polycentric governance at the mycelial-holarchy architecture; this ADR places the polycentric distinction at the `field` lexicon entry. Grammar + architecture layers now align on the polycentric framing.
- Cross-composition with ADR-0002 (reproduction-primacy): the field's reproductive-apparatus reading (already in canon) composes with the three-substrate reading — field-as-reproductive-apparatus is read through both the institutional and extitutional lenses, not through only one.
- Cross-composition with ADR-0003 (boundary-theory-unifier): boundary-commoning at field composes with collective-agency at field — field is a boundary-making operation and a collective-agency apparatus simultaneously.
- IC side: IC canon does not primitive-level promote `collective-agency` (see `ic:ADR-0006-collective-agency-declination`); the concept remains available as composition context for IC's memory-governance + enactive-cognition framing.

## Evidence

- Primary R-claim: `spore.connection.institutions-and-extitutions:R1` (target: spore.term.field; concept: collective-agency) — carries the three-substrate argument; supported by C2, C4, C5, C7, C17, C18 of the bridge note.
- Secondary R-claim: `spore.connection.polycentric-governance:R2` (target: spore.term.field; concept: collective-agency) — carries the polycentric-vs-decentralised distinction; supported by C1, C2, C8, C13, C15.
- Primary cluster counts (Constraint 5 gate):
  - supports: 11
  - opposes: 0
  - source: psql personal_koi (join pattern er.object_uri = c.entity_uri; queried 2026-04-18)
  - cluster_key: `spore.term.field:collective-agency`
  - Capstone-vs-DB: 11S/0O both — no drift. Gate passes strongly.
- Secondary clusters (evidence-context):
  - `spore.relational-agency-and-holons:collective-agency` = 6S/0O (not a target here; available for future work).
  - `spore.mycelial-holarchy-architecture:collective-agency` = 3S/0O (at threshold; not a target here).
  - `ic.intelligence-primitives:collective-agency` = 3S/0O (IC declination sibling primary).
- Cross-project echoes: IC sibling `ic:ADR-0006-collective-agency-declination` (decision: reject).
- Held-tension overlap: active holds = spore:ADR-0001 (pluriversal-commoning, memory-governance), ic:ADR-0001 same, pm:ADR-0001 (market-dependence). This ADR concepts = [collective-agency, polycentric-governance, boundary-commoning]. No slug-level overlap. Checked 2026-04-18.
- Spore validator non-regression: baseline 7 errors; post-edit run must equal or less.

## Diff summary

- `docs/foundations/lexicon/field.md`: ~20-30 lines added across two new subsections + expanded Source. No frontmatter change; no prose removed.
- `docs/research/connections/canon-framing-collective-agency.md`: new file (shared framing).
