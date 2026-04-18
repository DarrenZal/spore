---
doc_id: spore.connection.canon-framing-collective-agency
doc_kind: research
status: draft
research_subkind: canon_framing
disposition: clarify existing term
depends_on: []
relates_to:
  - spore.connection.institutions-and-extitutions
  - spore.connection.polycentric-governance
  - spore.connection.4e-cognition-and-participatory-sense-making
concepts:
  - collective-agency
  - polycentric-governance
  - boundary-commoning
---

# Canon framing: collective-agency across Spore and IC

Shared framing for `spore:ADR-0008-collective-agency-at-field` (edit) and `ic:ADR-0006-collective-agency-declination` (reject). PM is not part of this fan-out (discovery 2026-04-18 shows zero PM R-claim targets at `collective-agency`).

## §1 Why this is cross-project (but asymmetric)

Discovery grep (plan step 10) shows `collective-agency` with R-claim targets in 2 projects: Spore (3 canon targets: `spore.term.field`, `spore.relational-agency-and-holons`, `spore.mycelial-holarchy-architecture`; combined 20 supports across the three clusters) and IC (1 canon target: `ic.intelligence-primitives`, 3 supports at the edit-gate threshold from a single R-claim). The concept is added to the shared roster per plan step 10. No prior ADR carries `collective-agency` in its `concepts:` list — this is the slot's first ADR set.

Asymmetric evidence distribution drives asymmetric fan-out per ADR-0005 precedent:
- **Spore (edit)**: rich, multi-source, multi-target evidence supporting a lexicon-level extension at `spore.term.field`.
- **IC (reject)**: evidence just at the Constraint 5(a) threshold (3S/0O), single R-claim, conceptually marginal to IC's primitive architecture. Honest declination avoids manufactured canon.

## §2 Shared framing

Collective agency is the concept naming how multiple sovereign participants coordinate as a single bounded-autonomy unit without collapsing to either (a) aggregation of individual preferences or (b) imposition of a unitary will. The concept carries three complementary theoretical substrates from the wiki lineage:

1. **Bourdieusian institutional reading** (Gare; `Institutions` wiki page). Field is the macro-dynamic extension of institutional analysis; fields are sites of symbolic/social/cultural/economic/political capital contest. Collective agency is what agents *do* within and across fields.
2. **Extitutional theory** (`Extitution` / `Extitutional Theory` wiki pages). "Field ontology" names the shifting, contingency-adequate attention-allocation pattern of extitutional space, with explicit flagging of the technical sense of field (interrelation, intersubjectivity, codeterminacy). Collective agency is the mode of coordination natural to extitutional fields.
3. **Assemblage-theory substrate** (DeLanda; `Assemblage`). Components are identifiable but inseparable-in-function; collective agency emerges from the assemblage, not from any component in isolation.

All three substrates name the same empirical phenomenon: coordination without individualism and without unitary will. Spore canon imports all three at the lexicon entry for `field`. IC canon does not adopt the concept as an intelligence primitive — IC's primitive architecture distributes agency through memory-layers (organisational closure, informational openness per ic:ADR-0002) rather than through a collective-agency primitive.

## §3 Why Spore and not IC

Spore's grammar is about *how humans, agents, and communities coordinate* — collective agency is a first-class grammar concept. IC's grammar is about *how intelligence primitives compose* — agents are consumers of IC's memory-governance, not a primitive IC governs. The R-claim targeting `ic.intelligence-primitives` (4e-cognition-and-participatory-sense-making:R2) makes a composition claim (collective agency composes with memory-layers at the enactive-cognition boundary) rather than a primitive-identification claim. Spore adopts; IC notes composition but declines primitive promotion.

## §4 Polycentric framing

Per R2 at `spore.term.field:collective-agency` (polycentric-governance bridge note), Spore's collective-agency claim is a *polycentric* collective-agency claim — multiple decision centres coordinating under shared rules, not a flat decentralised collective. This composes cleanly with `spore:ADR-0006-polycentric-governance-at-holarchy` (primitive-level polycentric governance at mycelial-holarchy-architecture): the lexicon entry for `field` carries the polycentric-vs-decentralised distinction at the grammar layer; the architecture carries it at the coordination-logic layer.

## §5 Related ADRs

- `spore:ADR-0008-collective-agency-at-field` — Spore canon edit at `docs/foundations/lexicon/field.md`.
- `intelligence-commons:ADR-0006-collective-agency-declination` — IC declination with rationale.
- `spore:ADR-0006-polycentric-governance-at-holarchy` — polycentric framing composition.
- `spore:ADR-0002-reproduction-primacy` — field as reproductive apparatus composes with collective-agency triple-substrate reading.
- `spore:ADR-0003-boundary-theory-unifier` — boundary-commoning at field cross-composes with collective-agency framing.

## §6 Attribution

Wiki-lineage sources: `Institutions` (Bourdieu/Gare), `Extitution` + `Extitutional Theory`, `Assemblage` (DeLanda), `Polycentric Governance` (Aligica-Tarko / McGinnis / Baldwin). Carried by bridge notes `spore.connection.institutions-and-extitutions`, `spore.connection.polycentric-governance`, `spore.connection.4e-cognition-and-participatory-sense-making`. All CC BY-SA 4.0 where wiki-derived; canon edits inherit repo default license.
