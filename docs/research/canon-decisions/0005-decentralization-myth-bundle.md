---
doc_id: spore.canon-decision.decentralization-myth-bundle
doc_kind: decision-record
adr_number: "0005"
status: draft
decision: edit
r_claim_source:
  - spore.connection.decentralization-theater-opposition:R1
  - spore.connection.peer-governance-wikipedia-opposition:R4
  - spore.connection.digital-labor-peer-production-opposition:R4
r_claim_statement: "Spore canon MUST NOT allow mycorrhizal-federation-protocol language to assert federation, P2P, or decentralized-network framing without concurrent specification of (a) where exception-deciding sovereignty sits in the federation and what limits its discretion (per the Yarvin-Schmitt \"who decides the exception\" test), (b) the federation's posture toward centralized-infrastructure dependencies (cloud providers, registries, DNS, bridge services, relay servers), and (c) whether the federation protocol retains any admin-key-equivalent (multi-sig membership control, protocol-upgrade authority, emergency-pause capability). Silent invocation of federation/mycorrhizal/P2P vocabulary without this surface reproduces the decentralization-theater failure mode per C1–C4. Spore MUST NOT absorb commons- or P2P-adjacent language into mycorrhizal-federation-protocol under these conditions; the opposition edge remains active against spore.mycorrhizal-federation-protocol until the protocol doc independently carries the power-distribution-mechanism surface."
queue_reference: "Pass 2 capstone §2.4 Tier B insight #4 (decentralization-myth bundle)"
affects_canon:
  - docs/foundations/mycorrhizal-federation-protocol.md
  - docs/research/connections/canon-framing-decentralization-myth-bundle.md
  - docs/research/canon-decisions/0005-decentralization-myth-bundle.md
related_adrs:
  - intelligence-commons:ADR-0005-decentralization-myth-bundle
  - poietic-match:ADR-0005-decentralization-myth-bundle
  - spore:ADR-0002-reproduction-primacy
  - spore:ADR-0003-boundary-theory-unifier
  - spore:ADR-0004-three-layer-coordination-stack
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-decentralization-myth-bundle.md
concepts:
  - decentralization-theater
  - power-capture
  - boundary-commoning
---

## Context

Pass 2 capstone §2.4 (`spore.connection.p2p-wiki-pass-2-capstone-synthesis`) identifies the **decentralization-myth bundle** as Tier B structural insight #4: three failure modes — decentralization theater, digital-labor-as-free-gift, administrator-capture-in-peer-governance — compose on every P2P / decentralized / peer-production surface. Every bridge note that touches P2P vocabulary inherits all three critiques by proximity unless canon explicitly declines each.

This ADR is the **Spore leg** of an **asymmetric 3-repo coordinated edit** landing per canon-review protocol Constraint 3 (cross-project coordination) and Constraint 6 (session-atomic authoring). The shared framing at `docs/research/connections/canon-framing-decentralization-myth-bundle.md` carries the cross-project narrative and establishes the asymmetric fan-out precedent. Sibling ADRs: `intelligence-commons:ADR-0005-decentralization-myth-bundle` (disposition: edit, lighter scope — `memory-layer-model.md` only); `poietic-match:ADR-0005-decentralization-myth-bundle` (disposition: reject — PM canon does not use decentralization vocabulary).

**Asymmetric fan-out precedent**: this is the first asymmetric coordinated ADR in the canon-review plan. Tiers A–B prior ADRs were either symmetric-multi-primary (`ADR-0003-boundary-theory-unifier`, `ADR-0004-three-layer-coordination-stack` — each repo carries its own primary R-claim on its own canon target) or single-repo holds (`pm:ADR-0001`, `spore:ADR-0001` + `ic:ADR-0001`). The decentralization-myth bundle's R-claim canon-reach is genuinely asymmetric: Spore's `mycorrhizal-federation-protocol` is the most direct vocabulary hit (two opposition R-claims target it with concept `decentralization-theater`); IC's `memory-layer-model` acquires admin-class-accumulation and digital-labor critiques (peer-gov R1 + dl R2); PM's canon has zero decentralization/peer/P2P vocabulary in canon docs (verified by grep 2026-04-18) and the R-claim antecedents do not fire.

**Primary R-claim**: `spore.connection.decentralization-theater-opposition:R1` targets `spore.mycorrhizal-federation-protocol` with concept `decentralization-theater`. Per D5 primary-selection rule, this is the most direct vocabulary hit among the three opposition notes — dt R1 explicitly names the federation-protocol doc and asserts the four-condition power-distribution-mechanism surface (exception-deciding sovereignty, centralized-infrastructure posture, admin-key-equivalent, reference-implementation discipline). `spore.connection.peer-governance-wikipedia-opposition:R4` composes on the same target with the same concept (bundle cross-composition — R4 text explicitly says "the federation protocol must decline *both* the topology-without-governance failure mode (Seed 2) *and* the administrator-capture failure mode (this note)"). `spore.connection.digital-labor-peer-production-opposition:R4` targets `spore.connection.boundary-commoning` (a connection note, not canon) with concept `power-capture` — carried in `r_claim_source` as evidence-context per Constraint 1's rule that `affects_canon` determines fan-out (not `r_claim_source`); this ADR's `affects_canon` does not include that connection note, so R4's dl evidence is context only.

**Discipline-rule R-claim pattern**: all three primary R-claims are of the **discipline-rule shape** (per v2-harvest candidate (vi) from `spore:ADR-0003-boundary-theory-unifier`) — "canon MUST NOT allow X language without concurrent specification of Y." They do not require positive supporting evidence on the `decentralization-theater` concept cluster to be load-bearing; they name boundaries canon must observe. The `decentralization-theater` concept has no DB cluster on `spore.mycorrhizal-federation-protocol` (v2 frozen the concept 2026-04-17, projection batch ran 2026-04-15 — projection filtered the concept). Per Constraint 5 aggregate rule, the gating primary cluster for this ADR is `spore.mycorrhizal-federation-protocol:power-capture` = 13S/12O (carried by `spore:ADR-0002-reproduction-primacy`; opposition density 48% acknowledged in canon prose). The bundle's three sub-critiques manifest as specific realizations of the power-capture concept, and the power-capture cluster's 13 supports draw partly from the opposition notes' own arguments about what power-capture looks like.

**Held-tension overlap check**: `spore:ADR-0001-pluriversal-incommensurability` (hold, concepts = [pluriversal-commoning, memory-governance]). This ADR concepts = [decentralization-theater, power-capture, boundary-commoning]. No slug-level overlap. No `affects_canon` overlap either (hold touches foundation docs with pluriversal-specific content; this ADR touches the `mycorrhizal-federation-protocol` with decentralization-myth-specific content). Clean.

## Decision

**edit.** Land an additive section in `docs/foundations/mycorrhizal-federation-protocol.md` — "Decentralisation-Myth Bundle Declination" — placed after the existing "Boundary-Making Apparatus And Openwashing Discipline" section. The section names the three sub-critiques explicitly and states, per sub-critique, **what the protocol declines** and **which existing protocol mechanic discharges the declination**. This is motivating-language addition only; no Sovereignty Invariants / Trust Model / Federation Mechanics change.

The section discharges the per-sub-critique declination as follows:

- **(a) Decentralization theater**: the protocol declines the Yarvin-Schmitt "theatrical decentralization" pattern by naming the four power-distribution-mechanism surfaces (exception-deciding sovereignty, centralized-infrastructure posture, admin-key-equivalent discipline, reference-implementation scope) at the canon layer. Existing mechanics that discharge: Sovereignty Invariants (exception-deciding locus), the four-scope openwashing discipline (reference-implementation scope), the four power-capture mechanisms (admin-key-equivalent mapped to mechanism 3 "gatekeeper-role accrual").
- **(b) Digital-labor-as-free-gift**: the protocol declines the Kleiner venture-communism critique by naming material-asset-ownership and livelihood-specification as federation-agreement content (not protocol-internal concerns but first-order federation-instance clauses). Existing mechanic that discharges: the three-layer coordination stack (`spore:ADR-0004`) already names production-layer clauses at the federated-instance level; this ADR adds the explicit Kleiner-declination text naming that federation-agreements MUST specify material-asset-ownership and livelihood-substrate for participants, not delegate to unspecified off-protocol arrangements.
- **(c) Administrator-capture-in-peer-governance**: the protocol declines the Kostakis admin-class-accumulation pattern by naming the two-layer capture framing (editor-layer vs infrastructure-holder-layer) and asserting that federation-infrastructure-holder accountability must be specified in federation agreements, with tenure limits and conflict-resolution procedures independent of administrator discretion. Existing mechanic that discharges: power-capture mechanism 3 ("gatekeeper-role accrual") is the direct mapping; this ADR tightens the declination text to name Kostakis's two-layer framing explicitly.

**3-sentence header convention decision** (recorded in framing §5): retain as bridge-note convention only; do not codify in canon. Rationale in framing §5; this ADR logs the decision and does not add a header to canon docs.

## Consequences

- `mycorrhizal-federation-protocol.md` gains an explicit per-sub-critique declination section making the three bundle failure modes individually visible rather than only cited-by-name (current state is bundle citation only, from `spore:ADR-0002-reproduction-primacy`).
- No new canon primitives introduced; no Sovereignty Invariant / Trust Model / Federation Mechanic changes. Every existing protocol mechanic remains as specified.
- The declination section names which existing mechanics discharge each sub-critique — making the cross-ADR reasoning (how ADR-0002's capture-mechanism-3 discharges admin-capture; how ADR-0004's three-layer stack discharges digital-labor) legible in canon prose rather than leaving it to ADR archaeology.
- Future Spore canon edits that introduce new primitives or revise existing ones must evaluate the new primitive against each of the three sub-critiques and record which existing mechanic (or new declination) discharges each. This is a canon-writing discipline, not a canon-composition rule.
- IC ADR-0005 and PM ADR-0005 land in the same coordinated session. IC carries a lighter admin-class-accumulation declination on `memory-layer-model`; PM carries a reject disposition verifying PM canon does not use decentralization vocabulary.
- Tier B closes with this ADR. All four Tier B insights now have ADRs: ADR-0002 (reproduction primacy), ADR-0003 (boundary-theory unifier), ADR-0004 (three-layer stack), ADR-0005 (decentralization-myth bundle). Ready for Tier C (per-project priority queues, Spore first).

## Evidence

- **Primary cluster (gating anchor)**: `spore.mycorrhizal-federation-protocol:power-capture`
  - supports: 13
  - opposes: 12
  - source: psql personal_koi (queried 2026-04-18)
  - cluster_key: `spore.mycorrhizal-federation-protocol:power-capture`
  - Constraint 5 check: (a) 13≥3 PASS; (b) 13>12 PASS; (c) no blocking hold PASS.
  - Opposition-density caveat: 48% opposition density already acknowledged in canon (per `spore:ADR-0002-reproduction-primacy` edit). This ADR inherits the caveat.
  - Discipline-rule pattern: per v2-harvest (vi) from `spore:ADR-0003-boundary-theory-unifier`, the decentralization-theater R-claims are discipline-rule shape (antecedent-conditioned declinations, not cluster-gated edits); gating runs against the `power-capture` cluster which is the concept the three sub-critiques manifest as in projected evidence.
- **Per-sub-critique secondary evidence** (discipline-rule R-claims, no direct DB clusters):
  - (a) Decentralization theater: decentralization-theater-opposition:R1 + peer-governance-wikipedia-opposition:R4; manual count at target+concept = 0S/2O (opposition-only R-claims); discipline-rule — no independent cluster gate required.
  - (b) Digital-labor: digital-labor-peer-production-opposition:R4 targets `spore.connection.boundary-commoning` (connection note, not canon) with concept `power-capture`; evidence-context only — not folded into `affects_canon`.
  - (c) Administrator-capture: peer-governance-wikipedia-opposition:R4 carries admin-capture declination on `spore.mycorrhizal-federation-protocol` (bundle cross-composition with dt R1; see Context §primary R-claim).
- **Bridge notes (Spore direct)**: `spore.connection.decentralization-theater-opposition` (primary R1, secondary R-claims R2–R5 — R2 out of canon, R3–R5 cross-project context), `spore.connection.peer-governance-wikipedia-opposition` (R4 cross-composition with dt R1; R1–R3 are IC-targeting), `spore.connection.digital-labor-peer-production-opposition` (R4 connection-note context; R1–R6 mostly IC/PM-targeting).
- **Held-tension overlap**: active holds are `spore:ADR-0001-pluriversal-incommensurability` (concepts: pluriversal-commoning, memory-governance) and `pm:ADR-0001-accounting-dependence-tension` (concepts: market-dependence). This ADR concepts = [decentralization-theater, power-capture, boundary-commoning]. No slug overlap with either hold; no `affects_canon` overlap. Checked 2026-04-18.
- **Cross-project echoes**: `ic.memory-layers:memory-governance` = 22S/7O (IC primary cluster for ADR-0005); `ic.intelligence-primitives:interoperability-as-institutional` = 20S/2O (IC secondary for decentralization-theater sub-critique). PM has no gating cluster (reject disposition).
- **Capstone vs DB drift**: capstone §2.4 narrative describes the bundle as cross-3-project architectural concern; does not provide single-cluster S/O tally (the insight is cross-cluster aggregation). DB recount (2026-04-18) provides per-cluster counts above. No disposition flip; all gates pass.

## Diff summary

- `docs/foundations/mycorrhizal-federation-protocol.md`: new section "Decentralisation-Myth Bundle Declination" placed after "Boundary-Making Apparatus And Openwashing Discipline" section (before "What Counts as a Node"). Names the three sub-critiques, per-sub-critique declination statements, and which existing mechanics discharge each. Motivating-language only; no mechanic changes.
- `docs/research/connections/canon-framing-decentralization-myth-bundle.md`: new shared framing note (authored in this commit set).
- `docs/research/canon-decisions/0005-decentralization-myth-bundle.md`: this ADR.
