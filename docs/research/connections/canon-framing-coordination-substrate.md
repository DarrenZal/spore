---
doc_id: spore.connection.canon-framing-coordination-substrate
doc_kind: research
status: draft
research_subkind: canon_framing
disposition: clarify existing term
depends_on: []
relates_to:
  - spore.connection.stigmergy-as-coordination-substrate
  - spore.connection.collective-intelligence
  - pm.connection.commercial-credit-circuit
  - pm.connection.sarafu-and-ruddick-lineage
concepts:
  - coordination-substrate
  - stigmergy
  - boundary-commoning
  - power-capture
---

# Canon framing: coordination-substrate across Spore and PM

This note carries the cross-project narrative for the coordinated canon decision on `coordination-substrate` as a shared concept. Per-repo decision records: `spore:ADR-0007-coordination-substrate-at-stigmergy` (edit at `spore.term.stigmergy`), `poietic-match:ADR-0006-coordination-substrate-at-protocol` (edit at `pm.protocol`). Intelligence-Commons is not part of this fan-out: discovery grep 2026-04-18 returned zero IC R-claim targets at the concept `coordination-substrate`; no IC canon is affected.

## §1 Why this is cross-project

Discovery grep (plan step 10) shows `coordination-substrate` with R-claim targets in 2 projects: Spore (`spore.term.stigmergy`, `spore.instance-model`) and PM (`pm.protocol`, `pm.grammar`, `pm.project-vision`, `pm.research.landscape`). The concept is on the prompt's shared-concept list (cross-3-project slot alongside `power-capture`, `boundary-commoning`, `pluriversal-commoning`, etc.). Constraint 3 forbids single-repo edits on shared concepts; plan step 10 escalation rule requires a coordinated cross-project ADR. No prior ADR has `coordination-substrate` in its `concepts:` list; the shared-concept slot was untouched before this ADR.

IC is absent from the concept by design, not omission: IC memory-governance and IC memory-layers are not stigmergic coordination substrates — they are attribution/provenance/preservation apparatus (per IC's §2 primitives in `foundations/intelligence-primitives.md`). Declining IC fan-out is honest, not a gap.

## §2 Shared framing

Stigmergy (Grassé 1959; Heylighen 2015) is a structural class of coordination where agents act on a shared medium such that traces in the medium trigger further actions by other agents. The medium carries the coordination load; agents do not negotiate bilaterally nor broadcast to all peers. Elliott's empirical work on human stigmergy adds a scale-breakpoint: small groups (2–25) coordinate through social negotiation; larger groups (25–n) require stigmergic substrate because social-negotiation overhead becomes prohibitive. Heylighen's design discipline for human stigmergy: the environment must carry (a) a persistent read/write substrate, (b) incentive structures biasing agent choices toward system goals, (c) embedded-role "speed bumps" rather than policing-style enforcement.

Both Spore and PM depend on coordination-substrate as foundational coordination logic, but at different canon layers and with different operational surfaces:

- **Spore's `term.stigmergy` lexicon entry** names the primitive at the grammar layer — what stigmergy is as a coordination type, how the grammar supports it, how it distinguishes from bilateral-channel and broadcast coordination.
- **PM's `protocol`** names the primitive at the operational layer — what PM agents, actions, traces, and medium comprise, and how the three governance surfaces (medium-integrity, trace-format, trace-interpretation) must appear in PM protocol text.

## §3 Three governance surfaces stigmergy requires

Stigmergic coordination primitives, in both Spore and PM canon, must name three governance surfaces (per `stigmergy-as-coordination-substrate:R3` and Heylighen/Brastaviceanu design discipline):

1. **Medium-integrity governance** — who maintains the shared protocol state; how medium-level capture is prevented; what happens when the medium degrades. A stigmergic primitive without medium-integrity governance reproduces the decentralization-theater failure mode (per spore:ADR-0005): visible decentralization while governance is displaced into infrastructure control.
2. **Trace-format specification** — what counts as a trace; how traces are encoded; what structure they carry. Unspecified trace formats are the FairCoin filtering-membrane failure mode (per ADR-0003 evidence): boundaries look specified but are not operationally constrained.
3. **Trace-interpretation rules** — what local rule each agent follows in responding to traces; how divergent interpretations reconcile. Trace-interpretation is where the stigmergic substrate meets agent-local governance; misspecification here produces the admin-capture failure mode (per ADR-0005 peer-governance declination).

## §4 Marker-based vs sematectonic stigmergy

Per Heylighen 2015, two stigmergic modes differ operationally:

- **Marker-based stigmergy**: agents deposit explicit markers that other agents read (e.g., reputation signals, votes). Gaming vulnerability: marker inflation, Sybil attacks, signal-washing.
- **Sematectonic stigmergy**: agents modify the state of the medium itself, and the modification is the trace (e.g., commitment history, accrued obligations). Gaming vulnerability: state-space capture, collusive mutation.

Spore's `term.stigmergy` canonicalises the read+write-symmetric-substrate as the structural requirement distinguishing stigmergy from broadcast or bilateral-channel coordination. PM's `protocol` must carry the marker-vs-sematectonic distinction as operational discipline: PM reputation-market is marker-based; PM commitment-pooling is sematectonic; the two have different gaming vulnerabilities and require different integrity governance.

## §5 Declinations carried by both repos

Both Spore and PM canon decline the "universal coordination mechanism" framing as self-sufficient. Stigmergy is not automatic coordination — it requires the three governance surfaces (§3) and honest naming of the decentralization-myth bundle (spore:ADR-0005) as the failure mode it risks. Canon text in both repos cross-links to the opposition notes (decentralization-theater, digital-labor, peer-governance-wikipedia) rather than treating stigmergy as self-evidently beneficial.

Spore additionally carries Elliott's 2–25/25–n scale breakpoint as operational criterion for stigmergy applicability. PM additionally carries the marker-vs-sematectonic distinction (§4) as a pool-typing discipline for CVLE valuation at the protocol layer.

## §6 Related ADRs

- `spore:ADR-0007-coordination-substrate-at-stigmergy` — Spore canon edit at `docs/foundations/lexicon/stigmergy.md` (this framing's primary-repo ADR).
- `poietic-match:ADR-0006-coordination-substrate-at-protocol` — PM canon edit at `docs/protocol.md` (this framing's secondary-repo ADR).
- `spore:ADR-0005-decentralization-myth-bundle` — failure-mode declination discipline both ADRs inherit.
- `spore:ADR-0003-boundary-theory-unifier` — FairCoin filtering-membrane refutation, load-bearing for §3(2) trace-format specification.
- `spore:ADR-0006-polycentric-governance-at-holarchy` — polycentric governance drawbacks apply to stigmergic coordination at scale.

## §7 Attribution

Wiki-lineage sources carried by the primary bridge notes: `spore.connection.stigmergy-as-coordination-substrate` (Heylighen 2015 formalisation; Grassé 1959 origin), `spore.connection.collective-intelligence` (GeorgieBC synthesis; Elliott empirical), `pm.connection.commercial-credit-circuit` + `pm.connection.sarafu-and-ruddick-lineage` (operational evidence from mutual-credit / commitment-pooling lineages). All underlying bridge notes are CC BY-SA 4.0 where wiki-derived; canon edits inherit the repo default license.
