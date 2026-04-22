---
doc_id: spore.canon-decision.reproduction-primacy
doc_kind: decision-record
adr_number: 0002
# Spore validator enum is [active, deprecated, draft, superseded] — no "proposed".
# Mapping protocol §3 lifecycle state "proposed" to validator-compatible "draft";
# transitions to "active" at accept. IC/PM use protocol §3 names directly (no validator).
# Validator-mapping precedent carried forward from DH-IC-1 (spore:ADR-0001).
status: active
decision: edit
r_claim_source:
  - spore.connection.reproductive-commoning:R5
  - spore.connection.reproductive-commoning:R1
  - spore.connection.reproductive-commoning:R2
  - spore.connection.reproductive-commoning:R3
  - spore.connection.reproductive-commoning:R4
  - spore.connection.reproductive-commoning:R6
r_claim_statement: |
  The `mycorrhizal-federation-protocol` canon should explicitly name reproductive-labor invisibilization as a first-order power-capture mechanism, with equal standing to protocol lock-in, gatekeeper role accrual, and data asymmetry. The wiki commons literature (Federici, Mies, Bresnihan, Bhattacharya, Gibson-Graham) positions the naturalizing / de-valorizing / invisibilizing of reproductive labor as historically the most fundamental capture mechanism — the substrate move that enables every other capture mechanism to appear ideologically neutral. A federation protocol that does not render reproductive labor visible as first-order coordination work is, by this literature, structurally vulnerable to the same capture pattern that destroyed the historical commons. The canon should add reproductive-labor-visibility to the power-capture doctrine as a first-order concern, require protocol specifications to account for the visibility of care/provisioning/maintenance work, and reference this bridge note as source-anchor. This resolves DH-Spore-1 (Phase A disconfirming hypothesis) affirmatively.
queue_reference: Pass 2 capstone §2.1 reproduction primacy (DH-Spore-1 resolution YES); §3.1 Spore queue #2 (power-capture at federation-protocol) + #3 (field reproductive-commoning) + #9 (relational-agency commons-as-verb); §5 promotion candidate "reproductive-commoning — recommend promote"
affects_canon:
  - docs/foundations/lexicon/field.md
  - docs/foundations/relational-agency-and-holons.md
  - docs/foundations/holonic-network-architecture.md
  - docs/foundations/mycorrhizal-federation-protocol.md
  - docs/research/connections/canon-framing-reproductive-commoning.md
related_adrs:
  - intelligence-commons:ADR-0002-reproduction-primacy
  - poietic-match:ADR-0002-reproduction-primacy
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-reproductive-commoning.md
concepts:
  - reproductive-commoning
  - commons-as-verb
  - power-capture
  - commitment-pooling
---

## Context

Capstone §2.1 states reproduction primacy: reproductive labour — care, provisioning, territorial stewardship — is a first-order power-capture concern, not a derivative cultural layer. Its invisibilisation is the historically prior capture mechanism; every existing P2P primitive that treats reproduction as naturalised substrate inherits the substrate move that enables every other capture mechanism to appear ideologically neutral. The Phase A disconfirming hypothesis DH-Spore-1 (reproductive-labour invisibilisation as first-order power-capture) was resolved **YES** at user decision and encoded as R5 of the source bridge note (`spore.connection.reproductive-commoning`).

This ADR is the third and final Tier A decision under the canon-review-v1 plan, closing the held-open-tensions queue. Unlike DH-PM-1 (`pm:ADR-0001`, hold-as-tension on `market-dependence`) and DH-IC-1 (`ic:ADR-0001` + `spore:ADR-0001`, hold-as-tension on `pluriversal-commoning` + `memory-governance`), this ADR carries `decision: edit`. The evidence both clears the Constraint 5 edit-gate and is adjudicated by the corpus: capstone §5.1 specifies the edit shape for `mycorrhizal-federation-protocol` as a unified motivational edit, capstone §5 recommends `reproductive-commoning` for promotion, capstone §6.3 preserves only the narrower reframing-vs-renaming question (which this ADR resolves in favour of reframing, matching bridge note §8 and capstone §5.4's explicit decline of candidate renames).

**Scope decision (3-repo coordinated, not Spore-only).** A strict reading of Constraint 1's fan-out rule (protocol §5b — fan-out triggers on `affects_canon`, not `r_claim_source`) would scope this as Spore-only: R1–R5 target Spore canon, R6 targets a PM connection note (not PM canon). That reading is rejected. Capstone §2.1 "What it changes" makes substantive re-motivational claims about IC canon ("memory-governance re-reads as preserving-care rather than knowledge-access; attribution encodes ongoing obligation, not just recognition") and PM canon ("commitment-pooling acknowledges the tontines/ollas communes genealogy as pre-monetary operational prior art"). These are canon-primitive re-motivations, not pointer-only cross-references, so they warrant per-repo ADRs with canon edits rather than being deferred to Tier B. A Spore-only scope would force Tier B to revisit reproduction-primacy for IC and PM, defeating the D3 Tier A→B handoff rule which says Tier B consumes Tier A outcomes as no-ops. Scoping now as 3-repo keeps Tier A self-contained per Constraint 1 and makes Tier B's reproduction-primacy slot a clean no-op.

Full scope rationale and alternatives-considered are documented in the shared framing note (§2). The decision is operator-owned per Constraint 1's flexibility and is logged in the canon-review plan's Execution log.

**Primary cluster contested (capstone-vs-DB drift).** Capstone §3.1 Spore queue #2 reports `spore.mycorrhizal-federation-protocol:power-capture` as "3S/8O — highest-opposition cluster". DB recount via `psql personal_koi` 2026-04-18 returns 13S/12O (join pattern: `entity_relationships.object_uri LIKE 'orn:personal-koi.entity:claim-' || c.claim_rid || '%'`). Both sides differ by >1, so per Constraint 5 the DB is authoritative. Both counts pass the edit-gate (≥3 support, supports > opposes), but the magnitude and opposition density change meaningfully: from "barely supported (3/8)" to "contested majority (13/12)". The canon edit on `mycorrhizal-federation-protocol` is therefore a narrow-majority move, not a strong-consensus move, and is authored with that caveat explicitly — the doc's new reproduction-layer framing inherits the power-capture-opposition-density warning rather than eliding it. Drift attributed to cross-pass aggregation or Pass 2 additions landing after the capstone's tally.

## Decision

**Edit.** Four Spore canon foundation docs receive motivational-language additions. No primitive slugs change (per capstone §5.4 and bridge note §8, reframing chosen over renaming). Canon reads differently after this edit even though no primitive is renamed.

Per-file edits (all in a single commit with this ADR + the shared framing note):

1. `docs/foundations/lexicon/field.md` — R1: new §"Field as Reproductive Apparatus" section added after "Three Existing Uses In Spore", citing Federici's housing-as-spatial-commons lineage (orn:p2p-wiki.page:Communalization_of_Housework) and retiring reading-of-care-as-downstream.
2. `docs/foundations/relational-agency-and-holons.md` — R2: new §"Commons as Verb: Care as Primary Coordinating Practice" section added after "Relational Agency", citing Bresnihan's commons-is-a-verb framing (orn:p2p-wiki.page:More-Than-Human_Commons). More-than-human extension flagged, not operationalised (per R2 explicit instruction).
3. `docs/foundations/holonic-network-architecture.md` — R3: new §"Associational Practice and the A–C–A' Circuit" section added after "Fractal Scale Levels", citing Dyer-Witheford's Circulation of the Common (orn:p2p-wiki.page:Circulation_of_the_Common) and aligning mycelial-holarchy with associational practice reproducing commons.
4. `docs/foundations/mycorrhizal-federation-protocol.md` — R4+R5 combined: new §"Commoning Mechanism and Capture Mechanisms" section added after the opening paragraph and pluriversal held-tension marker. Federation framed as a commoning mechanism serving associational practice (R4); reproductive-labour invisibilisation named as first-order power-capture mechanism alongside protocol lock-in, gatekeeper roles, and data asymmetry (R5). Opposition density (12/25 in the primary cluster) acknowledged explicitly in the section's framing, so the edit carries its own caveat.

R4 and R5 target the same file and are authored as one combined section per capstone §5.1 item 1 ("one edit that touches one target doc; the unified edit is now specifiable"). R3's Dyer-Witheford citation and R4's commoning-mechanism framing cohere at the bridge-note concept level (both `commons-as-verb`); they are intentionally left in two separate files because the holonic-network-architecture doc is the architectural context (A–C–A' circuit) and the federation-protocol doc is the operational surface.

## Consequences

- Spore canon "reads differently" after these edits: reproduction is first-order on all four touched surfaces, care is named as primary coordinating practice in `relational-agency-and-holons`, federation is framed as a commoning mechanism (not a substitute for associational organising), and reproductive-labour invisibilisation is on the named list of power-capture mechanisms. Downstream canon readers (external integrators, Jeff if Move 0 activates, Tier C work) see the reproduction layer as load-bearing without any slug change.
- No primitive slugs are renamed. Capstone §6.3's held-open reframing-vs-renaming question is resolved in favour of reframing. The re-open triggers from §6.3 remain intact: if downstream canon readers continue to read `field` as coordination-surface despite the updated language, OR if Pass 3+ bridge notes surface persistent mis-reads of the reproduction-primacy framing, the renaming question can be revisited in a follow-on ADR that supersedes this one on the specific surfaces where reframing failed.
- The `reproductive-commoning` concept is promoted from frozen-v2-vocabulary entry to a doctrine lens applied across existing primitives (capstone §5 promotion). No canon file named `term.reproductive-commoning` is introduced; the lens lives in the cross-cutting motivational language, which is the shape capstone §5 recommends ("not a primitive; a lens").
- IC canon receives a coordinated, lighter motivational-language addition to `ic.intelligence-primitives` §2 Memory (memory-governance re-reads as preserving-care). PM canon receives a coordinated, lighter motivational-language addition to `pm.project-vision` (commitment-pooling acknowledges the tontines/ollas communes genealogy). Per-repo ADRs in IC and PM carry their own Evidence sections; this Spore ADR is the primary of the coordinated set.
- Tier B insight §2.1 (reproduction primacy) becomes a no-op per D3 Tier A→B handoff rule: when Tier B reaches it, the operator records "Tier B insight #1 reproduction-primacy: implemented in Tier A ADR-0002 (no new work)" and moves on. This is the expected handoff.
- Tier B insight §2.2 (boundary-theory) is not foreclosed: reproduction-primacy supplies reproduction-layer content, but which boundary-theory variant Spore canonises where is a separate Tier B decision.
- Tier B insight §2.3 (three-layer coordination stack) receives partial content: reproduction-layer visibility is committed here. Full three-layer specification is Tier B's scope.
- Pass 3 is not triggered. This ADR processes Pass 2 capstone evidence; it does not surface a gap requiring new intake. If the re-open triggers fire, they generate Pass 3 items per the capstone's §7 triggers.
- Cross-project canon coherence: the reproduction-primacy framing is consistent across the Spore/IC/PM ADR-0002 set. Tier C work on any of the three projects will read all three ADRs via the shared framing note.

## Evidence

- cluster_key: spore.mycorrhizal-federation-protocol:power-capture
- supports: 13
- opposes: 12
- source: psql personal_koi (queried 2026-04-18; join pattern `entity_relationships.object_uri LIKE 'orn:personal-koi.entity:claim-' || c.claim_rid || '%'`)
- Capstone-vs-DB drift: capstone §3.1 reports 3S/8O; DB returns 13S/12O. Both pass edit-gate; DB authoritative per Constraint 5. Drift attributed to cross-pass aggregation landing after capstone tally. Recorded as a caveat: opposition density (12/25 ≈ 48%) is just under the 50% Constraint 5(b) threshold — the edit is a narrow-majority move on power-capture, carried alongside explicit opposition acknowledgement in the canon-doc language itself.
- Supporting bridge notes (primary cluster): `spore.connection.reproductive-commoning` (R5 anchored by C7, C8, C9, C12; grounded in C1–C4), `spore.connection.what-the-commons-is-missing-opposition`, `spore.connection.federation-and-interop`, `spore.connection.polycentric-governance`, `spore.connection.cosmo-local-production`, `spore.connection.platform-cooperativism-constructive`, `spore.connection.solidarity-economy-and-mutual-aid`, `spore.connection.openwashing-opposition`, `spore.connection.decentralization-theater-opposition`, `spore.connection.faircoin-filtering-membrane-opposition`, `spore.connection.peer-governance-wikipedia-opposition`, `spore.connection.digital-labor-peer-production-opposition`, `spore.connection.cooperative-degeneration-opposition` (13 bridge notes converge on federation power-capture via R-claim targets).
- Opposing bridge notes (primary cluster): 12 oppositional source-claims, primarily from the Wave 1/2/3 opposition notes (FairCoin, decentralization-theater, digital-labor, peer-governance-wikipedia, openwashing, cooperative-degeneration, market-dependence-theory-opposition). The oppositional evidence is exactly what the canon edit acknowledges: naming reproductive-labour invisibilisation alongside protocol-lock-in, gatekeeper-roles, and data-asymmetry is responsive to the opposition, not against it. The opposition notes identify failure modes; the canon edit declines them explicitly.
- Secondary clusters (all pass edit-gate, strong support):
  - spore.term.field:reproductive-commoning (5S/0O) — R1 cluster, strong support.
  - spore.relational-agency-and-holons:commons-as-verb (3S/0O) — R2 cluster.
  - spore.mycelial-holarchy-architecture:commons-as-verb (4S/0O) — R3 cluster.
  - spore.federation-protocol:commons-as-verb (3S/0O) — R4 cluster.
- Cross-project echoes: ic:ic.intelligence-primitives:memory-governance (coordinated IC ADR-0002 secondary cluster); pm:pm.connection.commitment-pooling-and-mutual-credit (R6 cross-hit; the cross-project R-claim sits on a PM connection note, and the PM ADR-0002 derives its own Evidence cluster from pm.project-vision-level framing of commitment-pooling).
- Allowlist drift (recorded per D7): intake Q6 allowlist lists `spore.mycelial-holarchy-architecture`; live frontmatter on `docs/foundations/holonic-network-architecture.md` shows `doc_id: spore.mycelial-holarchy-architecture`. Allowlist and live agree. No drift on this one. (Noted because the operator prompt flagged this as a possible drift point.)
- Held-tension overlap (Constraint 5c): checked 2026-04-18; concepts=[reproductive-commoning, commons-as-verb, power-capture, commitment-pooling]. Prior hold-as-tension ADRs:
  - `pm:ADR-0001-accounting-dependence-tension` (concept: market-dependence) — no overlap.
  - `ic:ADR-0001-pluriversal-incommensurability` (concepts: pluriversal-commoning, memory-governance) — no overlap.
  - `spore:ADR-0001-pluriversal-incommensurability` (concepts: pluriversal-commoning, memory-governance) — no overlap.
  Clean. No existing held-tension ADR concept-overlaps with this ADR's concept set.

## Diff summary

- New file: `docs/research/canon-decisions/0002-reproduction-primacy.md` (this ADR).
- New file: `docs/research/connections/canon-framing-reproductive-commoning.md` (shared framing for the 3-repo coordinated set).
- `docs/foundations/lexicon/field.md`: one new section after "Three Existing Uses In Spore". No frontmatter change; no existing prose removed.
- `docs/foundations/relational-agency-and-holons.md`: one new section after "Relational Agency". No frontmatter change; no existing prose removed.
- `docs/foundations/holonic-network-architecture.md`: one new section after "Fractal Scale Levels". No frontmatter change; no existing prose removed.
- `docs/foundations/mycorrhizal-federation-protocol.md`: one new section after the opening paragraph and the existing pluriversal held-tension marker. No frontmatter change; no existing prose removed; existing held-tension marker preserved.
- Net: four canon-doc additions (one section each) + one ADR + one shared framing note. All additions; no removals; no slug changes. Spore validator D1 scope preserved (only in-scope files touched); Spore validator frontmatter check: doc_id, doc_kind, status, depends_on preserved on all four edited canon files.
