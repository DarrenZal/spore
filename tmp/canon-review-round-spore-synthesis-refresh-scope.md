# Round scope — round-spore-synthesis-refresh

- Date: 2026-04-20
- Findings covered: F-003, F-004, F-005, F-007
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), R-11 (Spore ADR status mapping), wider-scope docs decision recorded in `tmp/wider-scope-carveout-log.md`
- Target allowlist: `spec:spore.*` plus Phase 5 wider-scope carve-out for `docs/synthesis/coordination-grammar.md` and `docs/synthesis/decision-memo.md`
- Repos affected: Spore only
- Cross-track dependencies: none in spec; note that F-005 carries a findings-doc dependency on F-031, but this round is scoped to a local synthesis-doc lifecycle correction and does not mutate protocol or validator status enums
- ADR slug candidates:
  - `0009-coordination-grammar-refresh`
  - `0010-decision-memo-post-v1-framing`
- Session-atomic window required: no

## Pre-flight

- Branch verified: `corpus-review/v1`
- Explicit-add discipline: in effect
- Validator baseline: 17 errors, 30 warnings on 2026-04-20; recorded at `tmp/phase-7/round-spore-synthesis-refresh-validator-pre.txt`
- Frozen-concepts alignment: no new slugs will be minted in this round. The current frozen v2 concepts file contains adjacent slugs (`collective-agency`, `commons-as-verb`, `memory-governance`) needed for ADR concept tagging. Literal `field` / `care` slug entries are not present in the checked-in file despite the prototype spec's assumption, so the ADRs will use existing frozen-adjacent slugs rather than minting new ones.
- Wider-scope carve-out verified: `tmp/wider-scope-carveout-log.md` explicitly authorizes this round's `docs/synthesis/*` edits without changing layer membership.

## Evidence gate

- F-003: pass. Evidence bar met for S2 (`coordination-grammar.md`, `lexicon/field.md`, methodology, capstone). Prior collision: none. Dependency: none.
- F-004: pass. Evidence bar met for S2 (`coordination-grammar.md`, `relational-agency-and-holons.md`, methodology, capstone). Prior collision: preserves `care primacy`; does not revise the prior.
- F-005: pass. Evidence bar met for S3 (`coordination-grammar.md`, `governance-memory.md`, `agent-commons-meta-protocol.md`). Prior collision: none. Dependency note: F-031 remains unresolved at protocol/tooling level, but this round only removes a stale doc-level lifecycle/source mismatch and leaves the validator-status contradiction untouched.
- F-007: pass. Evidence bar met for S3 (`decision-memo.md`, `project-vision.md`, `store-and-forward-relay.md`, `claims-evidence-attestation.md`). Prior collision: none. Dependency: none.

## Round notes

- Prototype spec assumes a baseline of `~15` validator errors; actual baseline is `17` in the current repo state and will be treated as the non-regression threshold for this round.
- Prototype spec assumes `field` and `care` already exist as frozen concept slugs; the checked-in `docs/research/concepts-p2p-wiki.yaml` does not currently expose literal entries for those slugs. This is recorded for close-out lessons so later Phase 7 unit specs do not rely on the same assumption.
