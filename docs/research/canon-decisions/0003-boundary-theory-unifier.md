---
doc_id: spore.canon-decision.boundary-theory-unifier
doc_kind: decision-record
adr_number: "0003"
status: active
decision: edit
r_claim_source:
  - spore.connection.boundary-commoning:R1
  - spore.connection.openwashing-opposition:R1
  - spore.connection.bioregional-scope-legal-constraint:R4
  - spore.connection.decentralization-theater-opposition:R5
  - ic.connection.interoperability-as-institutional:R5
  - pm.connection.bioregional-coordination:R4
r_claim_statement: "Spore's field/membrane lexicon should formally acknowledge \"boundary commoning\" as the external cousin-concept for cross-field composition — adding an aliased lexicon entry that cites the De Angelis / Birkinbine source tradition and states the scope distinction explicitly: field/membrane rules govern coordination operations WITHIN a single field; boundary commoning names coordination operations BETWEEN fields without merger. The lexicon entry should preserve Spore's existing authorization-operation vocabulary (who speaks for the field, cross-field claim validation) because boundary commoning under-specifies those operations in the source tradition."
queue_reference: "Pass 2 capstone §2.2 Tier B insight #2 (boundary theory as unifier)"
affects_canon:
  - docs/foundations/lexicon/field.md
  - docs/foundations/mycorrhizal-federation-protocol.md
  - docs/research/connections/canon-framing-boundary-theory-unifier.md
  - docs/research/canon-decisions/0003-boundary-theory-unifier.md
related_adrs:
  - intelligence-commons:ADR-0003-boundary-theory-unifier
  - poietic-match:ADR-0003-boundary-theory-unifier
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-boundary-theory-unifier.md
concepts:
  - boundary-commoning
  - filtering-membrane
  - interoperability-as-institutional
---

## Context

Pass 2 capstone §2.2 identifies boundary-commoning as the single concept appearing — directly or via a direct cognate — in every bridge note across both intake passes. Spore's mycorrhizal-federation, IC's memory-governance, and PM's CVLE are all boundary-making operations at different scales. The capstone flags that no single boundary-theory variant is sufficient: four traditions (De Angelis filtering-membrane, Maturana-Varela autopoietic closure, Escobar pluriversal ontological difference, cosmo-local / Charter-of-Forest subsidiarity) each carry an operational surface that would be lost if washed into one "boundary" frame.

This ADR is the Spore leg of a coordinated 3-repo edit landing per the canon-review protocol's Constraint 3 (cross-project coordination rule) and Constraint 6 (session-atomic authoring). The shared framing note at `docs/research/connections/canon-framing-boundary-theory-unifier.md` carries the cross-project narrative; sibling ADRs are `intelligence-commons:ADR-0003-boundary-theory-unifier` and `poietic-match:ADR-0003-boundary-theory-unifier`.

The Spore R-claim evidence is two-pronged: `spore.connection.boundary-commoning:R1` (primary) asks `spore.term.field` to acknowledge boundary-commoning as the external cousin-concept for cross-field composition with an explicit WITHIN vs BETWEEN scope distinction, preserving Spore's authorisation-operation vocabulary which boundary-commoning under-specifies. `spore.connection.openwashing-opposition:R1` (secondary) imposes a discipline rule on `spore.mycorrhizal-federation-protocol`: any "open" language (open federation, open protocol, federated openness) must be paired with explicit specification across four scope surfaces (wire-protocol, reference-implementation, contribution-acceptance, spec-governance) to avoid the Eucalyptus / open-core openwashing pattern.

## Decision

**edit.** Land two motivating-language additions: (a) an aliased-term section in `spore.term.field` that anchors boundary-commoning as the external cousin-concept for BETWEEN-field coordination, citing De Angelis / Birkinbine lineage and naming the four distinct boundary-theory variants the canon keeps separate, and (b) a "boundary-making apparatus" paragraph in `spore.mycorrhizal-federation-protocol` that names the protocol as a boundary-making operation, imposes the openwashing-scope discipline from R1 of the opposition bridge note, and requires that any specific federation mechanic identify which boundary-theory variant is load-bearing for that mechanic.

Surgical constraint: no primitive renaming, no schema changes. `spore.term.field` remains the primitive name; the boundary-commoning acknowledgement is additive vocabulary, not a replacement. The federation-protocol addition is motivating-language only — the Sovereignty Invariants, Trust Model, and Federation Mechanics sections remain as specified.

## Consequences

- `spore.term.field` now carries an explicit cross-reference to the four boundary-theory variants the canon distinguishes, which future contributors must consult when introducing new field semantics.
- `spore.mycorrhizal-federation-protocol` canon text now requires any "open" language to be accompanied by the four-scope openwashing discipline, with a boundary-variant identifier per mechanic.
- The pluriversal-commoning hold (`spore:ADR-0001-pluriversal-incommensurability`) is named in the field-lexicon entry as one of the four boundary-theory variants, tightening the cross-reference between the hold and the primitive it affects.
- Future intake bridge notes that touch boundary language should cite the framing note for the variant-identification discipline rather than re-importing boundary-commoning framing from scratch.

## Evidence

- **Primary cluster**: `spore.term.field:boundary-commoning`
  - supports: 8
  - opposes: 0
  - source: psql personal_koi
  - cluster_key: `spore.term.field:boundary-commoning`
  - query date: 2026-04-18
- **Secondary clusters**:
  - `spore.mycorrhizal-federation-protocol:boundary-commoning` = 0S/0O (DB, 2026-04-18) — the openwashing R1 targets this canon doc but is not indexed under this cluster key. Recorded as caveat per Constraint 5: secondary; does not block the edit. The discipline rule imposed by R1 is a canon-wide governance constraint, not a standalone cluster-gated primitive edit.
  - `ic.memory-layers:boundary-commoning` = 3S/0O — cross-repo context (carried by IC sibling ADR).
  - `pm.project-vision:boundary-commoning` = 3S/0O — cross-repo context (carried by PM sibling ADR).
- **Bridge notes (Spore direct)**: `spore.connection.boundary-commoning` (primary), `spore.connection.openwashing-opposition` (secondary), `spore.connection.bioregional-scope-legal-constraint` (evidence context, target is a connection note), `spore.connection.decentralization-theater-opposition` (evidence context, target is a connection note).
- **Bridge notes (cross-repo evidence)**: `ic.connection.interoperability-as-institutional` (IC memory-layers R5), `pm.connection.bioregional-coordination` (PM project-vision R4).
- **Held-tension overlap**: No hold-as-tension ADRs on overlapping concepts (checked 2026-04-18: concepts=[boundary-commoning, filtering-membrane, interoperability-as-institutional]). The pluriversal-incommensurability hold (spore:0001, ic:0001) is complementary — pluriversal-commoning is one of the four boundary-theory variants this ADR names as kept-distinct; the hold is about cross-ontology translation politics, not about whether boundaries exist.
- **Capstone vs DB drift**: Pass 2 capstone §2.2 narrative cites boundary-commoning as "cross-3-project convergence (3 clusters) [in Pass 1]" and "the architectural pattern all three projects instantiate [in Pass 2]" without explicit per-target S/O tallies for this round. DB recount on 2026-04-18 (method: `JOIN claims c ON er.object_uri = c.entity_uri` per reproduction-primacy precedent) is authoritative for the edit-gate.

## Diff summary

- `docs/foundations/lexicon/field.md`: new section "Boundary-commoning as external cousin-concept" near the end of the file, before the aliases block if present. Names the four boundary-theory variants (De Angelis filtering-membrane, Maturana-Varela autopoietic closure, Escobar pluriversal ontological difference, cosmo-local subsidiarity), states the WITHIN vs BETWEEN scope distinction, preserves Spore's authorisation-operation vocabulary. Points to the canon-framing note and the pluriversal-incommensurability hold.
- `docs/foundations/mycorrhizal-federation-protocol.md`: new subsection "Boundary-making apparatus and openwashing discipline" after the existing "Commoning Mechanism And Capture Mechanisms" section. Names the protocol as a boundary-making apparatus; imposes the four-scope openwashing discipline on any "open" language; requires boundary-variant identification per mechanic.
- `docs/research/connections/canon-framing-boundary-theory-unifier.md`: new shared framing note (authored in this commit set).
- `docs/research/canon-decisions/0003-boundary-theory-unifier.md`: this ADR.
