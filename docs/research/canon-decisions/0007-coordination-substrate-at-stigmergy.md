---
doc_id: spore.canon-decision.coordination-substrate-at-stigmergy
doc_kind: decision-record
adr_number: "0007"
# Spore validator enum [active, deprecated, draft, superseded]; map protocol §3 proposed→draft, accepted→active.
status: draft
decision: edit
r_claim_source:
  - spore.connection.collective-intelligence:R2
  - spore.connection.stigmergy-as-coordination-substrate:R1
  - spore.connection.stigmergy-as-coordination-substrate:R3
r_claim_statement: |
  Spore's `spore.term.stigmergy` lexicon entry should import Elliott's empirical group-scale breakpoint (2–25 → social negotiation; 25–n → stigmergy) as the operational criterion for stigmergy applicability, cite the read+write-symmetric-substrate structural requirement (C8) as what distinguishes stigmergic coordination from broadcast or bilateral-channel coordination, and state explicitly that stigmergy is a *governance move* (replacing representation-of-persons with representation-of-actions, per GeorgieBC's synthesis) not only a coordination pattern. The lexicon entry should also name the Heylighen / Brastaviceanu design-discipline — stigmergic environments for humans require (a) persistent read/write substrate, (b) incentive structures biasing choices toward system goals, (c) embedded-role "speed bumps" rather than only policing-style enforcement — as first-class lexicon content rather than leaving stigmergy as a single-sentence gesture.
queue_reference: "Pass 2 capstone §3.1 Spore queue #4 (coordination-substrate at term.stigmergy, 11S/0O)"
affects_canon:
  - docs/foundations/lexicon/stigmergy.md
  - docs/research/connections/canon-framing-coordination-substrate.md
  - docs/research/canon-decisions/0007-coordination-substrate-at-stigmergy.md
related_adrs:
  - poietic-match:ADR-0006-coordination-substrate-at-protocol
  - spore:ADR-0005-decentralization-myth-bundle
  - spore:ADR-0003-boundary-theory-unifier
  - spore:ADR-0006-polycentric-governance-at-holarchy
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-coordination-substrate.md
concepts:
  - coordination-substrate
  - stigmergy
  - boundary-commoning
  - power-capture
---

## Context

Capstone §3.1 Spore queue #4 (`spore.term.stigmergy:coordination-substrate`, 11S/0O per capstone; 11S/0O per DB recount 2026-04-18 — no drift) asks the lexicon entry to import Elliott's group-scale breakpoint, Heylighen 2015 formalisation, and the stigmergy-as-coordination-substrate bridge note as canonical external anchor. `coordination-substrate` is on the prompt's shared-concept list (cross-3-project slot; verified cross-2-project Spore+PM via plan step 10 discovery 2026-04-18; IC has zero R-claim targets at this concept). No prior ADR has `coordination-substrate` in its `concepts:` list. Per Constraint 3 + plan step 10 escalation rule, this ADR is authored as the coordinated-cross-project-ADR variant, with `poietic-match:ADR-0006-coordination-substrate-at-protocol` as the per-repo PM sibling and `spore/docs/research/connections/canon-framing-coordination-substrate.md` as the shared framing.

This escalation was triggered mid-queue during the Spore Tier C session 2026-04-18 10:24 PDT (prompt-permitted mini-session-within-session pattern). Spore Tier C top-5 item #1 (polycentric-governance at mycelial-holarchy; ADR-0006) preceded; items #2, #3 were logged as no-ops (covered by ADR-0002); item #4 (this escalation) is authored in parallel with the PM sibling; item #5 resumes after this ADR's status flip.

## Decision

**edit**. Extend `docs/foundations/lexicon/stigmergy.md` with the following additions:

1. A new subsection **"Scale Applicability: Elliott Breakpoint"** (after the existing "Natural and Social Examples" section and before "Relationship to Intent Pressure") stating Elliott's empirical 2–25 / 25–n breakpoint as the operational criterion for when stigmergy is the applicable coordination class rather than social negotiation.
2. A new subsection **"Read+Write-Symmetric Substrate: Structural Requirement"** stating that the distinguishing feature of stigmergy from broadcast or bilateral-channel coordination is the persistence of the substrate and the read+write symmetry of agent access to it. This is the C8 structural requirement carried by the `spore.connection.stigmergy-as-coordination-substrate` bridge note.
3. A new subsection **"Stigmergy as Governance Move"** naming stigmergy explicitly as a governance operation — replacing representation-of-persons with representation-of-actions (per GeorgieBC's synthesis as carried by `spore.connection.collective-intelligence`) — not only as a coordination pattern.
4. A new subsection **"Design Discipline for Human Stigmergic Environments"** importing the Heylighen/Brastaviceanu three-part discipline: (a) persistent read/write substrate, (b) incentive structures biasing agent choices toward system goals, (c) embedded-role "speed bumps" rather than policing-style enforcement.
5. An expanded **"Governance Surfaces Required"** paragraph listing the three surfaces (medium-integrity, trace-format, trace-interpretation) stigmergic coordination primitives must carry, with explicit back-link to shared framing §3 and to spore:ADR-0005 (decentralization-myth-bundle) as the failure mode declined.
6. An expanded "Source" section pointing at `spore.connection.stigmergy-as-coordination-substrate` and `spore.connection.collective-intelligence` as source-anchors, alongside the shared framing note and related ADRs.

No structural element of the existing lexicon entry changes; no frontmatter change; no prose removed. The edit converts a compact lexicon gesture into a first-class lexicon entry with external empirical anchors.

## Consequences

- Spore's `term.stigmergy` is no longer a single-sentence gesture; it carries the empirical literature's operational criteria and governance-surface requirements as first-class lexicon content.
- Cross-project coherence with PM's `protocol` edit (sibling ADR): both canon layers now carry the three-governance-surface discipline, the marker-vs-sematectonic distinction (PM side; referenced via framing §4 for Spore readers), and the decentralization-myth declination.
- Future canon work on Spore primitives that invoke stigmergy (e.g., `mycorrhizal-federation-protocol` if it adopts trace-response coordination semantics, `instance-model` which has 3S/0O at coordination-substrate) inherits the lexicon's discipline rather than restating it.
- No renames, no deprecations, no structural change.

## Evidence

- Primary R-claim: `spore.connection.collective-intelligence:R2` (target: spore.term.stigmergy; concept: coordination-substrate) — directly targets the canon doc this ADR edits; supported by C1–C8 of that bridge note (GeorgieBC + Elliott empirical).
- Secondary R-claims carried as evidence context: `spore.connection.stigmergy-as-coordination-substrate:R1` (target: pm.protocol — PM sibling ADR primary) and `:R3` (target: pm.grammar — evidence-context for three-governance-surface rationale; PM sibling declines pm.grammar edit due to opposition density, see framing §3).
- Primary cluster counts (Constraint 5 gate):
  - supports: 11
  - opposes: 0
  - source: psql personal_koi (join pattern er.object_uri = c.entity_uri; queried 2026-04-18)
  - cluster_key: `spore.term.stigmergy:coordination-substrate`
  - Capstone-vs-DB drift: capstone §3.1 reports 11S/0O; DB recount 11S/0O — no drift. Gate passes strongly.
- Secondary clusters (evidence-context):
  - `spore.instance-model:coordination-substrate` = 3S/0O (just above Constraint 5(a) threshold; not targeted by this ADR but available for future canon work on instance-model).
  - `pm.protocol:coordination-substrate` = 19S/0O (PM sibling ADR primary).
  - `pm.grammar:coordination-substrate` = 6S/4O (mixed-stance; PM sibling declines this target per framing §3).
  - `pm.project-vision:coordination-substrate` = 6S/0O (available for future PM canon work).
  - `pm.research.landscape:coordination-substrate` = 13S/0O (out-of-scope per D1 — research doc, not PM canon).
- Cross-project echoes: PM sibling ADR targets `pm.protocol`; shared framing note carries the cross-project narrative.
- Held-tension overlap (Constraint 5c): active holds are `spore:ADR-0001-pluriversal-incommensurability` (pluriversal-commoning, memory-governance), `pm:ADR-0001-accounting-dependence-tension` (market-dependence). This ADR concepts = [coordination-substrate, stigmergy, boundary-commoning, power-capture]. No slug-level overlap with any hold. Checked 2026-04-18.
- Spore validator non-regression: baseline 7 errors (2026-04-17 pre-flight); post-edit run must equal or less.

## Diff summary

- `docs/foundations/lexicon/stigmergy.md`: ~40-55 lines added across five new subsections (Scale Applicability, Read+Write-Symmetric Substrate, Stigmergy as Governance Move, Design Discipline, Governance Surfaces Required) + expanded Source. No frontmatter change. No prose removed.
- `docs/research/connections/canon-framing-coordination-substrate.md`: new file (this ADR's shared framing note).
