# Round scope — round-pm-vocabulary-contract

- Date: 2026-04-21
- Findings covered: F-014, F-015, F-016, F-017
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity)
- Target allowlist: `spec:pm.*`, `spec:spore.*`, plus plan-scoped operational surfaces `docs/research/planning/corpus-foundational-review-findings.md`, `tmp/canon-review-round-pm-vocabulary-contract-scope.md`, and `tmp/canon-review-round-pm-vocabulary-contract-close.md`; governance mirror surface `pm/docs/downstream-products.md` is in scope for F-017 even though ADR-0010 moved it out of PM canon
- Repos affected: PM only for canon edits; Spore only for round memos and findings-host updates
- Cross-track dependencies:
  - F-014 -> none
  - F-015 -> `reframing-pm-canon-scope` (`contextual`, satisfied via PM ADR-0010). The canon-scope ratification moved origin authority toward `docs/grammar.md`, which matches this round's relocation of CVLE/pool-substrate definitions from vision prose to grammar.
  - F-016 -> `reframing-pm-canon-scope` (`contextual`, satisfied via PM ADR-0010). The dependency is about canon-boundary cleanup, while this round resolves the still-open protocol vocabulary surface inside PM's retained canon.
  - F-017 -> `reframing-pm-canon-scope` (`contextual`, satisfied via PM ADR-0010). `docs/downstream-products.md` is now governance-class, so the repair is a registry-alignment fix rather than a canon-host contradiction, but the vocabulary mismatch still needs correction because the registry advertises downstream import surfaces.
- ADR slug candidates:
  - `0011-vision-vocabulary-alignment`
  - `0012-protocol-vocabulary-surfaces`
- Session-atomic window required: no

## Pre-flight

- Branch verified: `corpus-review/v1` in both Spore and Poietic Match
- Explicit-add discipline: in effect
- Validator baseline: 9 errors, 30 warnings on 2026-04-21; recorded at `tmp/phase-7/round-pm-vocabulary-contract-validator-pre.txt`
- PM worktree baseline: clean before round start
- Frozen-concepts alignment: no new slugs will be minted. This round uses existing review concepts only: `decentralization-theater`, `curation-valuation-limitation-exchange`, `medium-integrity-governance`, and `consent-scope`.
- ADR numbering check: PM next available ADR number after ADR-0010 is ADR-0011

## Evidence gate

- F-014: pass. S3 evidence bar met from `docs/project-vision.md`, `docs/research/canon-decisions/0005-decentralization-myth-bundle.md`, and `docs/protocol.md`. Prior collision: none. Dependency: none.
- F-015: pass. S3 evidence bar met from `docs/project-vision.md`, `docs/research/connections/commitment-pooling-and-mutual-credit.md`, `docs/research/canon-decisions/0004-three-layer-coordination-stack.md`, and `docs/protocol.md`. Prior collision: `commons-over-market`, preserved. Dependency: contextual only, satisfied by ADR-0010's canon-scope ratification.
- F-016: pass. S3 evidence bar met from `docs/protocol.md`, `spore/docs/research/connections/canon-framing-coordination-substrate.md`, `docs/research/connections/commitment-pooling-and-mutual-credit.md`, and `docs/project-vision.md`. Prior collision: `polycentric-not-hierarchical`, preserved. Dependency: contextual only, satisfied by ADR-0010's canon-scope ratification.
- F-017: pass. S3 evidence bar met from `docs/downstream-products.md`, `docs/grammar.md`, `docs/protocol.md`, and `docs/project-vision.md`. Prior collision: none. Dependency: contextual only, satisfied by ADR-0010's governance reclassification of `docs/downstream-products.md`.

## Round notes

- ADR-0005's rejection premise is now contradicted by live PM vision prose, so F-014 is a direct vocabulary-discipline repair rather than a fresh decentralization-theory debate.
- F-015 follows the round-14 relocation pattern: project-vision will stay explanatory while formal CVLE / pool-substrate definitions move into `docs/grammar.md`.
- F-016 remains an open drafter choice at scope time: either place the medium-integrity governance surface in an existing protocol section with enough precision to be reviewable, or defer it explicitly with a named future-canon reference and rationale.
- F-017 is no longer a PM-canon contradiction after ADR-0010, but the registry still has to mirror PM's canonical type names accurately because it is the downstream notification surface for version pins and breakage notices.
