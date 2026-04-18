---
doc_id: spore.connection.canon-framing-decentralization-myth-bundle
doc_kind: research
research_subkind: canon_framing
status: active
relates_to:
  - spore.connection.decentralization-theater-opposition
  - spore.connection.digital-labor-peer-production-opposition
  - spore.connection.peer-governance-wikipedia-opposition
  - spore.connection.openwashing-opposition
  - spore.connection.faircoin-filtering-membrane-opposition
  - spore.connection.platform-cooperativism-constructive
  - spore.connection.cosmo-local-production
  - spore.connection.rea-valueflows-semantic-layer
  - spore.connection.p2p-wiki-pass-2-capstone-synthesis
concepts:
  - decentralization-theater
  - power-capture
  - memory-governance
  - knowledge-commons
  - value-capture
  - interoperability-as-institutional
  - commitment-pooling
  - market-dependence
  - boundary-commoning
---

# Canon framing — Decentralization-myth bundle

Shared framing for a coordinated 3-repo decision on Tier B insight #4 of the P2P Foundation wiki Pass 2 capstone synthesis (§2.4: "three failure modes ride together whenever 'decentralized' or 'peer-to-peer' appears in canon vocabulary"). This note accompanies three per-repo ADRs — `spore:ADR-0005-decentralization-myth-bundle`, `intelligence-commons:ADR-0005-decentralization-myth-bundle`, `poietic-match:ADR-0005-decentralization-myth-bundle` — that land **asymmetrically**: Spore carries the heavy canon edit (explicit per-sub-critique declinations on `mycorrhizal-federation-protocol`), IC carries a lighter admin-class-accumulation declination on `memory-layer-model`, and PM carries a `reject` disposition (no canon edit) because PM canon does not use decentralization / peer / P2P vocabulary and the three critiques do not bind PM canon surfaces by construction.

## §1 What the capstone says

From `spore.connection.p2p-wiki-pass-2-capstone-synthesis` §2.4:

> Three failure modes ride together whenever "decentralized" or "peer-to-peer" appears in canon vocabulary: (a) **decentralization theater** (Yarvin; Brastaviceanu 2025; systems that display decentralization while retaining admin keys / protocol-governance / operational dependencies); (b) **digital-labor-as-free-gift** (Scholz/Kleiner; unpaid peer production appropriated by platforms into shareholder value); (c) **administrator-capture-in-peer-governance** (Kostakis 2010 on Wikipedia; Gallus on admin-class accumulation). Every Pass 1 and Pass 2 bridge note that touches P2P / decentralized / peer-production primitives inherits all three critiques by proximity unless the canon explicitly declines each.

The three opposition bridge notes supply the sub-critiques:

- **Decentralization theater.** `spore.connection.decentralization-theater-opposition` (Yarvin + Brastaviceanu 2025 smart-contracts + DAO-production-grammar + global-state-consensus-vs-subsidiarity critiques). Primary R-claim on Spore canon: R1 → `spore.mycorrhizal-federation-protocol` / `decentralization-theater` ("MUST NOT allow mycorrhizal-federation-protocol language to assert federation, P2P, or decentralized-network framing without concurrent specification of (a) where exception-deciding sovereignty sits, (b) the federation's posture toward centralized-infrastructure dependencies, (c) whether the federation protocol retains any admin-key-equivalent").
- **Digital-labor-as-free-gift.** `spore.connection.digital-labor-peer-production-opposition` (Kleiner venture-communism critique + Scholz digital-labor + Mechanical-Turk empirical floor). Primary R-claim on IC canon: R2 → `ic.memory-layers` / `knowledge-commons` ("MUST NOT allow knowledge-commons language to substitute for specification of (a) who owns the material productive infrastructure of memory, (b) how memory-stewarding contributors are sustained under a venture-communist rather than free-labor arrangement, (c) what minimal-coordination discipline prevents the memory-governance layer from becoming a coordinator-class rent-extraction site").
- **Administrator-capture-in-peer-governance.** `spore.connection.peer-governance-wikipedia-opposition` (Kostakis 2010 + Simonite 2013 + Gallus admin-class drift). Primary R-claim on IC canon: R1 → `ic.memory-layers` / `memory-governance` ("MUST NOT allow memory-layers framing of attribution, contribution-tracking, or knowledge-commons stewardship to be used as peer-governance language without concurrent specification of (a) how administrative authority over contested attributions/redactions/contributor-blocks is distributed, (b) tenure limits and recall procedures for admin-role holders, (c) explicit conflict-resolution procedures independent of administrator discretion"). Peer-governance R4 separately composes with decentralization-theater R1 on `spore.mycorrhizal-federation-protocol`, reinforcing the Spore declination.

## §2 Why this is one coordinated decision and not three

Per Constraint 1 of the canon-review protocol v1, the capstone §2.4 names the three sub-critiques as a *bundle* — "three failure modes ride together" — precisely because they compose on every P2P / decentralized / peer-production surface. A canon that declines one while remaining silent on the other two reproduces the residual failure modes by omission. Treating the bundle as one decision keeps the declination-logic aligned across repos and prevents accidental drift where (e.g.) Spore declines decentralization-theater while IC silently carries the admin-capture failure mode on an adjacent surface.

Per Constraint 3 (cross-project coordination rule), the concepts `decentralization-theater`, `power-capture`, and `memory-governance` are shared-concept concepts per the Tier C authoritative list — and two of them (`decentralization-theater`, `power-capture`) appear in Pass 2 capstone §2.4 as cross-3-project concerns. Single-repo edits on the bundle would violate Constraint 3.

## §3 Asymmetric fan-out: Spore primary, IC secondary, PM reject

This is the **first asymmetric fan-out** in the canon-review plan (Tiers A–B prior ADRs were symmetric-multi-primary like `ADR-0003-boundary-theory-unifier` or `ADR-0004-three-layer-coordination-stack`, or single-repo holds like `pm:ADR-0001`). The asymmetry follows from the R-claim canon-reach, not from operator preference:

**Spore (heavy edit).** Spore's `mycorrhizal-federation-protocol` uses "federation" + "federated" + "peer" vocabulary as first-order canon language. Two opposition R-claims target the doc directly with the `decentralization-theater` concept (decentralization-theater R1 + peer-governance R4). The canon already references the bundle by name (from `spore:ADR-0002-reproduction-primacy` edits) but does not individually decline each sub-critique. This ADR adds an explicit **per-sub-critique declination section** to `mycorrhizal-federation-protocol.md` naming what the protocol declines for each of the three failure modes and how existing protocol mechanics discharge the declination. This is motivating-language only; no mechanic changes.

**IC (lighter edit).** IC's `intelligence-primitives` and `memory-layer-model` use "memory," "attribution," "contribution-tracking," and "knowledge-commons" vocabulary — sufficiently close to the peer-governance and digital-labor critiques that the bundle binds. Five R-claims span two IC canon docs: dt R3, dl R1, dl R2, peer-gov R1 (highest-evidence — 22S/7O at ic.memory-layers:memory-governance), peer-gov R2 (15S/4O at ic.intelligence-primitives:power-capture). IC's canon edit is scoped to the `memory-layer-model.md` — adding an explicit admin-class-accumulation and digital-labor-free-gift declination paragraph that pairs with the existing `ic:ADR-0001-pluriversal-incommensurability` hold (held-tension overlap on `memory-governance` — resolved orthogonal-concerns per Constraint 5c(i)). No edit to `intelligence-primitives.md` — the admin-capture-adjacent declination content is kept at the layer level where it binds most directly, and `intelligence-primitives.md` continues to inherit the declination through its depends_on chain to `memory-layer-model`.

**PM (reject).** PM's canon — `grammar.md`, `protocol.md`, `project-vision.md`, `downstream-products.md` — contains **zero** instances of "decentralization," "decentralized," "peer-to-peer," "P2P," or "peer production" as PM-authored vocabulary (verified by grep 2026-04-18). PM uses "commitment," "bundle," "matching," "pool," and "coordination" language exclusively. Three R-claims target `pm.protocol` (dt R4 power-capture; dl R5 market-dependence; dl R6 commitment-pooling), but the R-claim conditions — "if pm.protocol uses decentralized-matching framing…", "if pm.protocol claims matching as neutral infrastructure…", "if pm.protocol invokes commitment-pooling in an information-only framing…" — are antecedent-conditioned on vocabulary PM canon does not use. The three-myth critiques therefore **do not bind PM canon by construction**, and PM's ADR records the verification + disposition: `reject`. AC-11 applies (reject = zero canon edits); PM's commit for this coordinated set touches only the ADR file.

## §4 Per-sub-critique evidence counts (Constraint 5, per-sub-critique per repo)

Per-sub-critique counts follow the three-layer-stack precedent (per-layer cluster gating on multi-cluster ADRs). Source: `psql personal_koi` 2026-04-18; method `JOIN claims c ON er.object_uri = c.entity_uri` per reproduction-primacy precedent.

### §4.1 Spore

The concept `decentralization-theater` has no direct DB cluster on `spore.mycorrhizal-federation-protocol` (the opposition bridge notes were projected in batch `20260415T223524Z` before the v2 frozen concepts yaml added `decentralization-theater`; the projection script emitted no review-claims with target_section=`decentralization-theater`). Per the v2-harvest pattern (vi) from `spore:ADR-0003-boundary-theory-unifier` — "discipline-rule R-claims that target a canon doc but do not have their own cluster" — the decentralization-theater R-claims are carried as **discipline-rule shape** and the Constraint 5 gate runs against the `power-capture` cluster, which is the concept the three sub-critiques manifest as in the projected evidence.

- **Primary cluster (gating anchor)**: `spore.mycorrhizal-federation-protocol:power-capture` = **13S/12O** (source: psql personal_koi 2026-04-18, carried by `spore:ADR-0002-reproduction-primacy`). Passes Constraint 5(a) 13≥3 and (b) 13>12.
- **Per-sub-critique secondary evidence** (discipline-rule R-claims; no direct DB clusters):
  - (a) Decentralization theater: decentralization-theater-opposition:R1 + peer-governance-wikipedia-opposition:R4 both target `spore.mycorrhizal-federation-protocol` with concept `decentralization-theater`; manual count from opposition-only R-claims = 2O (no supports-style R-claims exist at this target+concept). Discipline-rule — no independent cluster gate required per v2-harvest vi.
  - (b) Digital-labor-as-free-gift: digital-labor-peer-production-opposition:R4 targets `spore.connection.boundary-commoning` (connection note, not canon) with concept `power-capture`; carried as evidence-context only. No direct R-claim on `spore.mycorrhizal-federation-protocol` for this sub-critique.
  - (c) Administrator-capture: peer-governance-wikipedia-opposition:R4 carries the admin-capture critique on `spore.mycorrhizal-federation-protocol` + concept `decentralization-theater` (bundle cross-composition per R4 text: "the federation protocol must decline *both* the topology-without-governance failure mode (Seed 2) *and* the administrator-capture failure mode (this note)").

Opposition-density caveat: the 48% opposition density on the `power-capture` cluster is already named in Spore canon (per `spore:ADR-0002-reproduction-primacy`). This ADR inherits that caveat and does not re-acknowledge — the caveat is one canon-prose note, not a repeated warning.

### §4.2 IC

IC has direct DB clusters for all five R-claim targets.

- **Primary cluster (gating anchor)**: `ic.memory-layers:memory-governance` = **22S/7O** (source: psql personal_koi 2026-04-18). Highest-evidence cluster in IC corpus; passes Constraint 5(a) 22≥3 and (b) 22>7.
- **Per-sub-critique secondary clusters** (per-target+concept, all from psql personal_koi 2026-04-18):
  - (a) Decentralization theater: `ic.intelligence-primitives:interoperability-as-institutional` = **20S/2O** — passes cleanly.
  - (b) Digital-labor-as-free-gift:
    - `ic.intelligence-primitives:value-capture` = **3S/6O** — **fails Constraint 5(b)** (opposition > supports). Recorded as **caveat** per Constraint 5 aggregate cluster rule: secondary cluster failing (b) does not block the edit; the ADR carries the caveat in Evidence.
    - `ic.memory-layers:knowledge-commons` = **12S/7O** — passes cleanly.
  - (c) Administrator-capture:
    - `ic.memory-layers:memory-governance` = 22S/7O (primary, above).
    - `ic.intelligence-primitives:power-capture` = **15S/4O** — passes cleanly.

Four of five secondary clusters pass Constraint 5 cleanly; the value-capture caveat is bounded to the digital-labor sub-critique and does not destabilise the IC edit.

### §4.3 PM

PM disposition is `reject`. Per AC-11, no canon edit lands. Per Constraint 5, reject disposition does not require a cluster gate (the rubric applies only to `edit`).

Verification evidence (grep on PM canon 2026-04-18) is recorded in the PM ADR's Evidence section. Per-cluster counts for the three PM R-claim targets (for the audit trail, not for gating):

- `pm.protocol:power-capture` = **3S/7O** (fails (b) — aligned with reject disposition).
- `pm.protocol:market-dependence` = **4S/3O** (would pass gate, but overlaps with `pm:ADR-0001-accounting-dependence-tension` hold on `market-dependence`; orthogonal-concerns resolution would be possible but moot given the vocabulary-declination disposition).
- `pm.protocol:commitment-pooling` = **3S/3O** (fails (b)).

## §5 3-sentence header convention — canon codification decision

The capstone §2.4 introduces a **3-sentence header convention**: any note touching P2P / decentralized / peer-production vocabulary carries a header acknowledging the bundle and linking to the three opposition notes. §5.4 of the capstone floats the question whether the convention should be **promoted into canon writing rules** (applied to canon text, not just bridge notes).

**Decision: retain as bridge-note convention; do not codify in canon.** Rationale:

1. Canon's job is to absorb the **substantive** decline of the three myths, not the formatting convention. The substantive decline lands via per-sub-critique declinations in the affected canon docs (Spore `mycorrhizal-federation-protocol`, IC `memory-layer-model`); the formatting convention serves the research/bridge-note layer where proximate contamination risk is highest.
2. Codifying a formatting rule in canon creates cross-cutting editorial drag on every canon revision and risks the rule becoming ornamental (included because the checklist demands it, rather than because the declination is live). Per the capstone §5.4: "promote as writing-rule, not as primitive" was the §5.4 recommendation for the substantive bundle; the formatting header was explicitly flagged as a lower-priority promotion candidate.
3. Spore canon already references the bundle by name from `spore:ADR-0002-reproduction-primacy`; the explicit per-sub-critique declinations from this ADR supersede the need for a blanket header. A header would be redundant with the substantive section.
4. IC canon's `memory-layer-model` acquires a scoped declination via this ADR; a blanket header on every IC canon doc would over-apply.
5. PM canon rejects vocabulary inheritance by construction; a blanket header would be paradoxical (declining the bundle while carrying the bundle's header).

**Revisit trigger**: if a future canon revision (any of the three repos) introduces "decentralized," "peer-to-peer," or "P2P" vocabulary in a canon doc *other than* the ones covered by this ADR's declinations, the §5.4 question re-opens — a v3 protocol revision can codify the header as canon-writing rule at that point.

## §6 Held-tension overlap

Prior `hold-as-tension` ADRs and concept overlap with this ADR's concept set:

- `spore:ADR-0001-pluriversal-incommensurability`: concepts = [pluriversal-commoning, memory-governance]. Overlap with Spore ADR-0005 (concepts = [decentralization-theater, power-capture]): none.
- `intelligence-commons:ADR-0001-pluriversal-incommensurability`: concepts = [pluriversal-commoning, memory-governance]. Overlap with IC ADR-0005 (concepts = [memory-governance, knowledge-commons, power-capture, interoperability-as-institutional, value-capture, decentralization-theater]): **yes, on `memory-governance`**. Resolution: **orthogonal-concerns (Constraint 5c option (i))**. The pluriversal hold is an epistemic-sovereignty discipline on cross-ontology translation at the memory-governance access function; the decentralization-myth bundle's admin-capture critique addresses admin-class accumulation and conflict-resolution governance at the same function. Different axes on the same concept; both apply simultaneously — identical pattern to `ic:ADR-0002-reproduction-primacy` and `ic:ADR-0004-three-layer-coordination-stack`. No `affects_canon` overlap: hold touches both IC foundation docs; this ADR touches only `memory-layer-model.md`.
- `poietic-match:ADR-0001-accounting-dependence-tension`: concepts = [market-dependence]. Overlap with PM ADR-0005 (concepts = [decentralization-theater, power-capture]): none (PM disposition reject; concepts list does not include market-dependence).

## §7 Operational: commit sequence

Coordinated runbook (session-atomic per Constraint 6):

1. Spore: framing note + ADR-0005 + `mycorrhizal-federation-protocol.md` canon edit — one commit.
2. IC: ADR-0005 + `memory-layer-model.md` canon edit — one commit.
3. PM: ADR-0005 (reject, no canon edit) — one commit touching only the ADR file (AC-11 first run).
4. Status flips: Spore draft→active, IC proposed→accepted, PM proposed→accepted — three commits.

Total: 6 commits, ≤30-minute window.
