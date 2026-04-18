---
doc_id: spore.canon-decision.pluriversal-incommensurability
doc_kind: decision-record
adr_number: 0001
# Spore validator enum is [active, deprecated, draft, superseded] — no "proposed".
# Mapping protocol §3 lifecycle state "proposed" to validator-compatible "draft";
# transitions to "active" at accept. IC/PM use protocol §3 names directly (no validator).
# Protocol v2 should formalize this Spore-specific mapping.
status: draft
decision: hold-as-tension
r_claim_source:
  - spore.connection.pluriversal-commoning:R2
  - spore.connection.pluriversal-commoning:R1
  - spore.connection.pluriversal-commoning:R3
  - spore.connection.pluriversal-commoning:R5
r_claim_statement: |
  Spore's `mycorrhizal-federation-protocol` canon should import Escobar's ontological-dimension reading of enclosure (C4) and explicitly specify the protocol's posture toward cross-ontology federation. The canon text should state (a) that federation between fields whose ontologies include both market-based and relational worlds cannot be framed as a neutral technical composition operation without performing an enclosure move on the relational worlds; (b) that the protocol must either decline market-ontology defaults at the protocol layer (e.g., composition primitives that do not presuppose individual-subject agency, exchange-value accounting, or property-based access) OR explicitly decline to federate across ontologies whose composition would require absorption; (c) that the Zapatista dictum "un mundo donde quepan muchos mundos" (C5) is the operational test for federation legitimacy under the pluriversal reading — a federation surface that cannot host many worlds *without* translating them into a shared substrate has already performed a One-World move.
queue_reference: Pass 2 capstone §6.2 DH-IC-1 (Pluriversal incommensurability); Pass 2 §3.1 Spore queue cross-hit on mycorrhizal-federation-protocol
affects_canon:
  - docs/foundations/mycorrhizal-federation-protocol.md
  - docs/research/connections/canon-framing-pluriversal-incommensurability.md
related_adrs:
  - intelligence-commons:ADR-0001-pluriversal-incommensurability
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-pluriversal-incommensurability.md
concepts:
  - pluriversal-commoning
  - memory-governance
---

## Context

This ADR is the Spore sibling of `intelligence-commons:ADR-0001-pluriversal-incommensurability`. Both per-repo ADRs resolve the same decision (DH-IC-1, capstone §6.2) via the shared framing note at `/Users/darrenzal/projects/spore/docs/research/connections/canon-framing-pluriversal-incommensurability.md`. Read the framing note first for the cross-project rationale.

On the Spore side, the primary R-claim is `spore.connection.pluriversal-commoning:R2` (target: `spore.mycorrhizal-federation-protocol`, concept: `pluriversal-commoning`). R2 asks the federation protocol canon to specify its posture toward cross-ontology federation: either decline market-ontology defaults at the protocol layer OR explicitly decline to federate across ontologies whose composition would require absorption. The operational test is the Zapatista dictum *un mundo donde quepan muchos mundos* (C5) — a federation surface that cannot host many worlds without translating them into a shared substrate has already performed a One-World move.

The secondary R-claims (R1, R3, R5) target IC surfaces; they are included in `r_claim_source:` because the decision aggregate covers both repos' canon edits coordinated through the shared framing note. Only R2 lands canon work in Spore; R1/R3 land canon work in IC (under the sibling ADR); R5 is corroborating context on a connection note.

Mignolo's de-coloniality-vs-de-Westernisation distinction (bridge-note C11) is the category argument Spore's federation protocol must carry forward without yet resolving: citing the pluriversal vocabulary at the protocol layer would perform de-Westernisation (recognition) without de-coloniality (restructuring) unless the protocol-layer composition primitives are themselves restructured to avoid market-ontology defaults. The wiki corpus does not supply a specification for what non-market-ontology federation primitives look like; Bauwens / Bollier / De Angelis / Ostrom are Occidental sources. The pluriversal lineage (Escobar / Gudynas / Mignolo / Bresnihan) names the failure mode but does not operationalize the alternative composition primitives.

The arithmetic-passes-but-held pattern applies here as it did to DH-PM-1 (`pm:ADR-0001-accounting-dependence-tension`) and to the sibling IC ADR. Cluster `spore.mycorrhizal-federation-protocol:pluriversal-commoning` = 4 supports / 0 opposes per `psql personal_koi` (queried 2026-04-18); the Constraint 5 edit-gate (a) cluster-size ≥3 and (b) supports > opposes both pass. The disposition is nonetheless `hold-as-tension` because the substance is a category argument the wiki corpus does not resolve.

## Decision

**Hold as tension.** Spore's `mycorrhizal-federation-protocol` canon does not adopt a pluriversal-commoning position in this round. A held-tension pointer (`<!-- held-tension: 0001-pluriversal-incommensurability -->`) lands in the `affects_canon` file in the same commit as this ADR (per protocol §4 first-class disposition rule and Constraint 1).

Trigger to resolve: an on-wiki or otherwise-accessible source supplies a specification for federation composition primitives that do not presuppose market-ontology defaults (individual-subject agency, exchange-value accounting, property-based access). Absent such a specification, the federation canon cannot adopt the R2 position without either inventing mechanism the corpus does not supply or performing the de-Westernisation-without-de-coloniality failure mode Mignolo names.

Trigger to confront operationally: federation across fields whose ontologies include both market-based and relational worlds becomes a live operational question (e.g., federation of Salish Sea coordination primitives with indigenous-authored knowledge-commons surfaces in the BKC bioregional program). When the composition is concretely attempted, the protocol-layer posture must be named; that deployment surfaces the resolution pressure.

## Consequences

- `docs/foundations/mycorrhizal-federation-protocol.md` carries an inline marker pointing to this ADR. Future readers following the marker land in this ADR and, transitively, in the shared framing note, the sibling IC ADR, and the source bridge note.
- The pointer is a metadata insertion, not a substantive position on the cross-2-project shared concept `pluriversal-commoning` (Spore + IC per protocol §8). Per protocol §4, hold-as-tension "canon does NOT change materially." The shared-concept coordination rule (Constraint 3) is satisfied by the coordinated 2-repo set + shared framing note.
- Spore's Tier B insight §2.2 (boundary-theory-unification) will read this held-tension marker when it reaches pluriversal-difference-as-boundary-variant. This ADR does not foreclose the Tier B work; it names pluriversal framing as one boundary-theory variant among several (alongside autopoietic closure per `autopoiesis-and-structural-coupling`, filtering-membrane per `faircoin-filtering-membrane-opposition`, subsidiarity per `cosmo-local-production`, bioregional per `bioregional-scope-legal-constraint`). Tier B will decide whether to canonize pluriversal-difference as a boundary-theory variant and, if so, at which surface — with the held-tension marker flagging that the variant is held open in canon until the trigger fires.
- Spore's Tier C Spore queue item #10 (federation power-capture, 3S/8O — the highest-opposition cluster in the entire Pass 2 intake) remains a separate decision. The R-claim cross-hit from `market-dependence-theory-opposition:R4` (Spore federation power-capture) surfaced in DH-PM-1; the pluriversal R2 here is a different cluster (pluriversal-commoning, 4S/0O). Tier C's federation-power-capture work can proceed independently; neither forecloses the other.
- DH-IC-1 stays open in the canon-review program on both sides until either trigger fires. The `related_adrs:` reciprocal linkage to `intelligence-commons:ADR-0001-pluriversal-incommensurability` means resolution on one side prompts review on the other, but does not bind them to resolve together.

## Evidence

- cluster_key: spore.mycorrhizal-federation-protocol:pluriversal-commoning
- supports: 4
- opposes: 0
- source: psql personal_koi (queried 2026-04-18; join pattern `entity_relationships.object_uri LIKE 'orn:personal-koi.entity:claim-' || c.claim_rid || '%'`)
- Supporting bridge notes: `spore.connection.pluriversal-commoning` (source-claims C4, C5, C9, C10)
- Opposing bridge notes: none in the primary cluster
- Secondary cluster: `ic.intelligence-primitives:pluriversal-commoning` (4S/0O) — handled by sibling IC ADR
- Secondary cluster: `ic.memory-layers:memory-governance` (22S/7O) — R3 concept, IC scope
- Cross-project echoes: ic:ic.intelligence-primitives:pluriversal-commoning (coordinated sibling ADR); spore:spore.mycorrhizal-federation-protocol:power-capture (3S/8O — separate Tier B/C decision, not resolved here); pm:pm.protocol:market-dependence (DH-PM-1 precedent, same arithmetic-passes-but-held pattern on a disjoint category argument)
- Held-tension overlap: None checked 2026-04-18: concepts=[pluriversal-commoning, memory-governance]. Prior hold-as-tension ADR is `pm:ADR-0001-accounting-dependence-tension` with concept `market-dependence` — no concept overlap.

## Diff summary

- New file: `docs/research/canon-decisions/0001-pluriversal-incommensurability.md` (this ADR).
- New file: `docs/research/connections/canon-framing-pluriversal-incommensurability.md` (shared framing note, cross-project; authored in the same commit per protocol §5a).
- `docs/foundations/mycorrhizal-federation-protocol.md`: insert HTML-comment held-tension pointer near the top of the doc (after the doc's opening paragraph, before "What Counts as a Node"). Single-line marker; no prose change.
- Net: one ADR + one shared framing note + one single-line pointer insertion. No substantive canon-position change on `pluriversal-commoning` or `memory-governance`. Spore validator non-regression: pre-plan baseline 7 errors; post-edit error count must not exceed baseline. mycorrhizal-federation-protocol.md frontmatter preserved (doc_id, doc_kind, status, depends_on unchanged).
