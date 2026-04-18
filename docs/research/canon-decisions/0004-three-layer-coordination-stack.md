---
doc_id: spore.canon-decision.three-layer-coordination-stack
doc_kind: decision-record
adr_number: "0004"
status: draft
decision: edit
r_claim_source:
  - spore.connection.commons-law-and-charter-lineage:R2
  - spore.connection.bioregional-scope-legal-constraint:R1
  - spore.connection.cosmo-local-production:R2
  - spore.connection.platform-cooperativism-constructive:R1
  - spore.connection.reproductive-commoning:R4
r_claim_statement: "The `mycorrhizal-federation-protocol` should explicitly name a three-layer structure — protocol (technical), governance-pattern (Ostrom DPs + polycentric-governance + boundary commoning), and commons-law (legal-institutional) — rather than treating federation as a protocol-plus-governance concern alone. The commons-law layer should specify: (a) which charter/trust instrument backs the federation's commons-scope authority, (b) anti-reclassification clauses (not only anti-extraction), following Charter-of-the-Forest template C8, (c) participatory boundary-verification operations as legitimate commons-law practice, (d) the specific failure mode the layer defends against — enclosure via regulation — distinct from power-capture (governance-without-semantics) and platform-capture (semantics-without-governance). The layer must preserve methodological humility from C9: commons-law is context-fit, not copy-pasted; federation canon should specify adaptation operations rather than claim 1:1 inheritance from 13th-century subsistence-rights logic."
queue_reference: "Pass 2 capstone §2.3 Tier B insight #3 (three-layer coordination stack)"
affects_canon:
  - docs/project-vision.md
  - docs/research/connections/canon-framing-three-layer-coordination-stack.md
  - docs/research/canon-decisions/0004-three-layer-coordination-stack.md
related_adrs:
  - intelligence-commons:ADR-0004-three-layer-coordination-stack
  - poietic-match:ADR-0004-three-layer-coordination-stack
  - spore:ADR-0002-reproduction-primacy
  - intelligence-commons:ADR-0002-reproduction-primacy
  - poietic-match:ADR-0002-reproduction-primacy
  - spore:ADR-0003-boundary-theory-unifier
  - intelligence-commons:ADR-0003-boundary-theory-unifier
  - poietic-match:ADR-0003-boundary-theory-unifier
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-three-layer-coordination-stack.md
concepts:
  - polycentric-governance
  - bioregional-scope
  - commons-law
  - cosmo-local-production
  - platform-cooperativism
  - reproductive-commoning
  - commitment-pooling
---

## Context

Pass 2 capstone §2.3 (`spore.connection.p2p-wiki-pass-2-capstone-synthesis`) names the three-layer coordination stack — reproduction / production / governance — as a structural insight that reframes canon motivation across all three projects. The capstone's Spore statement: "Spore's federation protocol sits at the governance layer but implicates the production and reproduction layers through the instances it federates. `mycorrhizal-federation-protocol` must specify: federation-agreements carry governance-layer clauses (Ostrom DPs, commons-law scaffolding); federated instances carry production-layer clauses (platform-cooperativism / open-cooperativism structure, REA-compatible semantics); instance operations carry reproduction-layer clauses (visible reproductive labor, no invisibilisation)."

This ADR is the Spore leg of a coordinated 3-repo edit landing per the canon-review protocol's Constraint 3 (cross-project coordination rule) and Constraint 6 (session-atomic authoring). The shared framing note at `docs/research/connections/canon-framing-three-layer-coordination-stack.md` carries the cross-project narrative; sibling ADRs are `intelligence-commons:ADR-0004-three-layer-coordination-stack` and `poietic-match:ADR-0004-three-layer-coordination-stack`.

The primary R-claim `spore.connection.commons-law-and-charter-lineage:R2` targets `spore.mycorrhizal-federation-protocol` with the concept `polycentric-governance` and explicitly asks the federation protocol to name a layered structure. That R-claim's internal "three-layer" framing (protocol / governance-pattern / commons-law) is a different axis than the capstone §2.3 stack (reproduction / production / governance) — the R-claim is about how the governance layer decomposes; the capstone is about where federation protocol sits in the stack. Both are compatible: this ADR adopts the capstone §2.3 reproduction/production/governance frame at project-vision level and leaves the governance-internal protocol/pattern/law decomposition to a future primitive-level edit on `mycorrhizal-federation-protocol` (not in scope here).

Secondary R-claims per aggregate cover each layer:
- Governance: `spore.connection.bioregional-scope-legal-constraint:R1` (federation-protocol as bioregional outer-boundary apparatus), `spore.connection.commons-law-and-charter-lineage:R2` (polycentric governance at federation protocol).
- Production: `spore.connection.cosmo-local-production:R2` (polycentric governance at federation through cosmo-local subsidiarity) and `spore.connection.platform-cooperativism-constructive:R1` (federated instances carry platform-cooperativism semantics). The platform-cooperativism cluster at federation-protocol is only 2S/0O — below Constraint 5(a) threshold at that specific cluster, but the production-layer gate passes at a different cluster: `spore.foundations.spore-instance-model:cosmo-local-production` = 5S/0O (recorded in Evidence below).
- Reproduction: `spore.connection.reproductive-commoning:R4` (mycorrhizal-federation-protocol + commons-as-verb) — already carried by `spore:ADR-0002-reproduction-primacy`; cited here as the reproduction-layer anchor for the stack statement, with `spore:ADR-0002` as the substantive-detail reference.

## Decision

**edit.** Land one additive paragraph in `docs/project-vision.md` naming the three-layer coordination stack (reproduction / production / governance) and stating Spore's across-all-three-layers occupancy through the federation protocol. The paragraph cites the shared framing note, points to `spore:ADR-0002-reproduction-primacy` for reproduction-layer substantive content, and points to `spore:ADR-0003-boundary-theory-unifier` for the cross-cutting boundary-making discipline that applies at each layer.

Surgical constraint: no primitive renames, no schema changes, no changes to Constitutional Commitments / Coordination Under Complexity / Structural Legitimacy / Containment and Connection sections. The addition is motivating-language only — every existing primitive remains as specified.

## Consequences

- `spore.project-vision` now carries the three-layer stack as a first-class architectural frame, making explicit that Spore's federation protocol is layer-spanning (governance primary, production via federated instances, reproduction via instance operations).
- Future bridge notes and canon edits that touch Spore federation should specify which layer(s) they operate at, using the frame in this ADR's paragraph — making the layer-missing failure modes (governance without reproduction → workforce burnout; production without governance → platform capture; etc., per capstone §2.3) visible as explicit risks rather than latent gaps.
- The relationship between `spore:ADR-0002-reproduction-primacy` (reproduction-layer content), `spore:ADR-0003-boundary-theory-unifier` (cross-cutting boundary discipline), and this ADR (architectural frame) is named in canon prose so future readers do not have to reconstruct it from ADR archaeology.
- `mycorrhizal-federation-protocol.md` is NOT edited by this ADR. A follow-on canon-review item (Tier C) could re-motivate federation-protocol canon to adopt the three-layer stack at primitive level; the present ADR defers that edit and keeps the change at the vision-level architectural self-description, matching capstone §2.3's recommendation that the three-layer frame is canon-writing discipline, not canon-composition rule.

## Evidence

- **Primary cluster**: `spore.mycorrhizal-federation-protocol:polycentric-governance`
  - supports: 8
  - opposes: 0
  - source: psql personal_koi
  - cluster_key: `spore.mycorrhizal-federation-protocol:polycentric-governance`
  - query date: 2026-04-18
- **Per-layer cluster check** (Constraint 5 per-layer, all pass ≥3S and S>O):
  - Governance layer: `spore.mycorrhizal-federation-protocol:polycentric-governance` = 8S/0O (source: psql personal_koi, 2026-04-18); corroborated by `spore.mycorrhizal-federation-protocol:bioregional-scope` = 5S/0O (same source).
  - Production layer: `spore.foundations.spore-instance-model:cosmo-local-production` = 5S/0O (source: psql personal_koi, 2026-04-18). The more-specific `spore.foundations.mycorrhizal-federation-protocol:platform-cooperativism` cluster is only 2S/0O (below threshold); the production-layer gate is met at the instance-model cluster, which is the correct target for production-layer evidence (federated instances, not the federation protocol itself, carry production-layer semantics per capstone §2.3). No split-ADR required — recorded as per-layer primary.
  - Reproduction layer: `spore.term.field:reproductive-commoning` = 5S/0O (source: psql personal_koi, 2026-04-18, carried by `spore:ADR-0002-reproduction-primacy`).
- **Secondary clusters (cross-repo context carried by sibling ADRs)**: `ic.intelligence-primitives:memory-governance` = 22S/0O (IC primary); `pm.grammar:curation-valuation-limitation-exchange` = 20S/0O (PM primary).
- **Bridge notes (Spore direct)**: `spore.connection.commons-law-and-charter-lineage` (primary R2, governance), `spore.connection.bioregional-scope-legal-constraint` (governance outer), `spore.connection.cosmo-local-production` (production / subsidiarity), `spore.connection.platform-cooperativism-constructive` (production), `spore.connection.reproductive-commoning` (reproduction, reference only — substantive edits carried by `spore:ADR-0002`).
- **Held-tension overlap**: active holds are `spore:ADR-0001-pluriversal-incommensurability` (concepts: pluriversal-commoning, memory-governance). This ADR concepts = [polycentric-governance, bioregional-scope, commons-law, cosmo-local-production, platform-cooperativism, reproductive-commoning, commitment-pooling]. No slug-level overlap with the pluriversal hold. No `affects_canon` overlap either (hold touches foundations, this ADR touches project-vision.md). Checked 2026-04-18.
- **Capstone vs DB drift**: capstone §2.3 narrative describes Spore as operating "across all three layers" with federation-protocol "at the governance layer but implicating" the other two; no explicit per-target S/O tally for this structural claim (the insight is cross-cluster aggregation, not a single cluster). DB recount (2026-04-18, method: `JOIN claims c ON er.object_uri = c.entity_uri` per reproduction-primacy precedent) yields the per-layer numbers above. All layers pass Constraint 5 cleanly.

## Diff summary

- `docs/project-vision.md`: new section "Three-layer coordination stack (reproduction / production / governance)" placed after the existing "Coordination Ecology" section (before "Dual Representation"). Names the three-layer stack; states Spore's across-all-three-layers occupancy through federation protocol; points to `spore:ADR-0002-reproduction-primacy` for reproduction-layer substantive content and `spore:ADR-0003-boundary-theory-unifier` for cross-cutting boundary discipline; cross-references the shared canon-framing note.
- `docs/research/connections/canon-framing-three-layer-coordination-stack.md`: new shared framing note (authored in this commit set).
- `docs/research/canon-decisions/0004-three-layer-coordination-stack.md`: this ADR.
