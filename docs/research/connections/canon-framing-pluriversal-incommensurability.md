---
doc_id: spore.connection.canon-framing-pluriversal-incommensurability
doc_kind: research
research_subkind: canon_framing
status: draft
decision_slug: pluriversal-incommensurability
affected_repos:
  - intelligence-commons
  - spore
related_adrs:
  - intelligence-commons:ADR-0001-pluriversal-incommensurability
  - spore:ADR-0001-pluriversal-incommensurability
source_bridge_note: spore.connection.pluriversal-commoning
concepts:
  - pluriversal-commoning
  - memory-governance
---

# Canon Framing — Pluriversal Incommensurability (DH-IC-1)

Shared framing for the coordinated canon-review decision on DH-IC-1 (pluriversal incommensurability), authored under the `canon-review-v1` plan (Tier A, second tension). This note precedes and coordinates two per-repo ADRs: `intelligence-commons:0001-pluriversal-incommensurability` (primary; touches `ic.intelligence-primitives` and `ic.memory-layers`) and `spore:0001-pluriversal-incommensurability` (touches `spore.mycorrhizal-federation-protocol`). PM is not in `affects_canon` — the source bridge note's R-claims do not target PM canon, and the fan-out rule (Constraint 1, protocol §5b) triggers on `affects_canon`, not `r_claim_source`.

## 1. The tension in one paragraph

Cross-surface translation in IC (interoperability-as-institutional) and cross-field federation in Spore (mycorrhizal-federation-protocol) both assume a meta-ontology sufficient to carry the composition without absorbing one participant into another. The P2P Foundation wiki's Escobar / Gudynas / Mignolo / Bresnihan pluriversal lineage refuses that assumption: when composed surfaces are ontologically distinct (different assumptions about what knowledge *is*, what counts as a subject of rights, what counts as value), a coordination layer framed as a neutral technical substrate performs a colonial operation by default. The Zapatista dictum — *un mundo donde quepan muchos mundos* (a world where many worlds fit) — is explicitly incompatible with one-world-with-a-translation-interface; translation itself must be political negotiation, not a technical coordination primitive. Capstone §6.2 designates DH-IC-1 as a tension that must be held open in the current canon-review window.

## 2. Why this is a coordinated decision

Two surfaces, two repos, one tension:
- **IC side** (primary): R1 targets `ic.intelligence-primitives` — re-framing translation-across-ontologies as political, not technical. R3 targets `ic.memory-layers` — importing the decolonial-vs-de-Westernisation discipline as a memory-governance constraint. Both land in IC canon.
- **Spore side**: R2 targets `spore.mycorrhizal-federation-protocol` — specifying federation posture toward cross-ontology composition (decline market-ontology defaults OR decline to federate across absorbing-composition boundaries).

Per protocol §5a, cross-project decisions require a single shared framing note that the per-repo ADRs reference. This note is that framing. Without it, a one-sided Spore or IC canon edit would leave the other project's canon out of sync on the same category argument — exactly the drift Constraint 3 was written to prevent.

## 3. Evidence summary

Cluster counts from `psql personal_koi` queried 2026-04-18 (join pattern: `entity_relationships.object_uri LIKE 'orn:personal-koi.entity:claim-' || c.claim_rid || '%'`):

| Cluster | Supports | Opposes | Role |
|---|---|---|---|
| `ic.intelligence-primitives:pluriversal-commoning` | 4 | 0 | Primary for IC ADR (R1's cluster) |
| `spore.mycorrhizal-federation-protocol:pluriversal-commoning` | 4 | 0 | Primary for Spore ADR (R2's cluster) |
| `ic.memory-layers:memory-governance` | 22 | 7 | Secondary for IC ADR (R3's cluster; broad) |

All three clusters pass the edit-gate arithmetic (supports ≥ 3, supports > opposes). The disposition is nonetheless `hold-as-tension`, mirroring the DH-PM-1 precedent (PM ADR-0001): arithmetic passes but substance is a category argument the wiki corpus does not resolve. Nelson's critique for DH-PM-1 and Mignolo's de-coloniality-vs-de-Westernisation cut for DH-IC-1 are structurally the same kind of argument — the evidence supports naming the tension, not picking a side within it.

## 4. Why hold, not edit

Capstone §6.2 states this explicitly: "IC's memory-layers can decline default flattening (don't assume all retrieved content translates to all surfaces); can decline meta-ontology claims (don't claim the embedding-space is ontology-neutral); can decline universal translation (treat cross-ontology queries as political negotiations routed through human stewards, not technical operations). What IC cannot do with current architecture is carry ontologies whose rules of inference differ fundamentally from Western propositional logic. The canon commitment should be: IC declines the colonial-default operations but does not claim to *be* pluriversal."

This "declination discipline without full pluriversal architecture" is a stable holding position, but it is not yet operationalized as per-layer policy (which layers decline which operations; which cross-layer operations route through human stewards). The trigger to resolve (per capstone): a specific per-layer policy specification that names the declination surface. The trigger to confront operationally (per capstone): deploying IC memory-layers across a bioregion that includes indigenous knowledge systems whose epistemic sovereignty is asserted explicitly (e.g., Coast Salish TEK via the Salish Sea coordination substrate the operator is working within).

Editing canon now would either (a) pick a position the wiki evidence does not adjudicate (against Constraint 2: held tensions are first-class) or (b) invent operational machinery the corpus does not supply (against the strict-vocab and strict-evidence discipline of the intake protocol). The arithmetic-passes-but-held pattern established by DH-PM-1 applies.

## 5. What lands in canon

Two HTML-comment held-tension markers in IC, one in Spore. No substantive prose change. Each marker points to the per-repo ADR:

- `intelligence-commons/docs/foundations/intelligence-primitives.md` → `<!-- held-tension: 0001-pluriversal-incommensurability -->`
- `intelligence-commons/docs/foundations/memory-layer-model.md` → `<!-- held-tension: 0001-pluriversal-incommensurability -->`
- `spore/docs/foundations/mycorrhizal-federation-protocol.md` → `<!-- held-tension: 0001-pluriversal-incommensurability -->`

Future canon readers following the marker land in the per-repo ADR, which cites this framing note and the source bridge note (`spore.connection.pluriversal-commoning`).

## 6. Concepts touched

From the frozen v2 concepts vocabulary (`spore/docs/research/concepts-p2p-wiki.yaml`):
- `pluriversal-commoning` — R1, R2 (the tension's core slug)
- `memory-governance` — R3 (the IC memory-layer-model surface R3 targets)

No new concept slugs introduced; strict v2 membership per protocol §7.

## 7. Relationship to DH-PM-1 (prior Tier A)

DH-PM-1 (PM ADR-0001, committed 2026-04-17) established the arithmetic-passes-but-held pattern: evidence clears the Constraint 5 edit-gate, but substance is a category argument the corpus does not resolve. DH-IC-1 applies the same pattern to a different category argument (decolonial-vs-de-Westernisation instead of accounting-as-market-logic). The two held tensions are disjoint in concepts (`market-dependence` vs `pluriversal-commoning` + `memory-governance`) — no held-tension overlap check fires.

Both tensions share the same trigger-to-resolve structure: either an operational source on the wiki supplies the missing mechanism (Nelson-operational for DH-PM-1; per-layer policy specification for DH-IC-1), or a deployment surfaces empirical data that forces a resolution (Victoria LHC May–June 2026 for DH-PM-1; bioregional deployment touching indigenous epistemic sovereignty for DH-IC-1).

## 8. Relationship to Tier B insights

`boundary-commoning` (Tier B insight §2.2) is not the load-bearing concept here — this ADR holds a different question: *which* boundary-theory variant canon should canonize at each surface. Pluriversal framing is one of several variants (alongside autopoietic closure, filtering-membrane, subsidiarity, bioregional boundary). Tier B work on boundary-commoning will read this held-tension marker and must decide whether to canonize pluriversal-difference-as-boundary as one variant among several, or leave it as held tension. Either choice is consistent with this ADR; the ADR does not foreclose Tier B.

## 9. Links

- Source bridge note: [`spore.connection.pluriversal-commoning`](/Users/darrenzal/projects/spore/docs/research/connections/pluriversal-commoning.md)
- Prior Tier A tension (DH-PM-1): [`pm:ADR-0001-accounting-dependence-tension`](/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0001-accounting-dependence-tension.md)
- Per-repo ADRs (authored in the same session as this framing note):
  - [`intelligence-commons:ADR-0001-pluriversal-incommensurability`](/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0001-pluriversal-incommensurability.md)
  - [`spore:ADR-0001-pluriversal-incommensurability`](/Users/darrenzal/projects/spore/docs/research/canon-decisions/0001-pluriversal-incommensurability.md)
- Capstone synthesis (§6.2 designation): [`p2p-wiki-pass-2-capstone-synthesis`](/Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md)
- Canon-review protocol: [`canon-review-protocol`](/Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md)
