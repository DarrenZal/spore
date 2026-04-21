# Round scope — round-cross-repo-concept-splits

- Date: 2026-04-20
- Findings covered: F-021, F-022
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), Phase 7 master cross-repo session-atomic discipline
- Target allowlist: `spec:spore.*`, `spec:ic.*`, `spec:pm.*`, `meta:*`
- Repos affected: Spore, IC, PM
- Cross-track dependencies: none
- ADR slug candidates:
  - Spore ADR-0013 `intent-evidence-subtype-clarification`
  - IC ADR-0009 `intent-evidence-subtype-clarification`
  - PM ADR-0008 `intent-evidence-pm-subtype-scope`
- Shared framing note: `docs/research/connections/canon-framing-cross-repo-concept-splits.md`
- Session-atomic window required: yes (35 minutes across the 3 ADR-landing commits, author-date basis)
- Expected ADR count: 3 per-repo ADRs + 1 shared framing note
- Subtype strategy: Spore and IC retain the broad `intent` and `evidence` canon surfaces; PM retains `pm:Intent` and the existing `pm:Evidence` / `pm:EvidenceRef` family as protocol-layer specializations. No corpus-wide rename and no new frozen-vocab slugs.

## Pre-flight

- Branches verified: `corpus-review/v1` in Spore, Intelligence Commons, and Poietic Match
- Explicit-add discipline: in effect
- Spore validator baseline: 9 errors, 30 warnings on 2026-04-20; recorded at `tmp/phase-7/round-cross-repo-concept-splits-validator-pre.txt`
- ADR numbering / doc_id conventions verified:
  - Spore next ADR: `0013`, `spore.canon-decision.*`
  - IC next ADR: `0009`, `ic.canon-decision.*`
  - PM next ADR: `0008`, `pm.canon-decision.*`
- Frozen-concepts alignment: `intent` and `evidence` are treated as Spore-native canon primitives for Phase 7 purposes. This round uses PM's existing namespace forms (`pm:Intent`, `pm:Evidence`, `pm:EvidenceRef`, `pm:FulfillmentEvidence`) rather than minting new frozen slugs.

## Evidence gate

- F-021: pass. S2 evidence bar met with 5 distinct sources and at least 2 publicly-verifiable anchors:
  - `spore.constitutional-artifacts` frames intent as a pre-commitment directional signal
  - `ic.intelligence-primitives` frames taxonomy/routing as an Intent signal
  - `pm.grammar` defines `pm:Intent` as a durable schema-bearing protocol object
  - `pm.protocol` defines publication/storage/discovery semantics for that object
  - `research-rea-valueflows` treats intent as one half of a commitment rather than a durable bilateral commitment artifact
- F-021 prior collision: none
- F-021 dependency check: none

- F-022: pass. S2 evidence bar met with 5 distinct sources:
  - `ic.intelligence-primitives` frames evidence as provenance-bearing support/challenge structure
  - `spore.claims-evidence-attestation` frames evidence as the broad epistemic relation around claims
  - `pm.grammar` frames PM evidence as fulfillment-grounded trust input
  - `pm.protocol` frames PM evidence as the loop from fulfillment to trust and field updates
  - `research-capstone-review` rejects narrowing `evidence` to `attestation-of-execution` as a corpus-wide rename
- F-022 prior collision: none
- F-022 dependency check: none

## Round notes

- The subtype/namespace route remains viable after source review: the drift is between broad canon surfaces (Spore/IC) and PM protocol-layer specializations, not yet a corpus-wide rename case.
- If drafting reveals that PM's protocol terms cannot be stably framed as specializations of the broader canon surfaces, the round must stop and reroute to foundational-reframing rather than force a rename here.
