# Phase 7 prototype lessons — round-spore-synthesis-refresh

1. Scope + close memo bookends: keep both; the scope memo forced baseline/mismatch capture early enough to steer the ADRs.
2. 2-ADR split: right for this unit; `coordination-grammar.md` and `decision-memo.md` were different correction shapes and cleaner as separate commits.
3. Evidence gate novelty: yes; it exposed the F-005/F-031 dependency nuance and the spec's stale validator-baseline assumption before drafting.
4. r_claim_source extension families: no; existing bridge-note R-claims were enough for claim-bearing primaries in this prototype.
5. Validator delta: no accidental regression; baseline held at 17 errors / 30 warnings before and after.
6. Time-on-task vs canon-review-v1 average: roughly on par, but the prototype-level bookkeeping pushes this toward the top of the 45-60 minute band.

# Phase 7 prototype lessons — reframing-protocol-governance-hardening

1. Authorized-by trail: yes; the AC6 grep worked cleanly once both ADRs used a bare single-line `authorized-by:` slug, and the format would have become fragile if this had been a YAML list.
2. Proposal status transitions: the `eligible -> authorized-ADR` move belonged on the first ADR commit and the `authorized-ADR -> executed` move belongs on close; flipping earlier would have declared authorization before any ADR lineage existed.
3. Validator delta: yes on errors, not on warnings; the round cleared the expected 8 proposal-status errors (17 -> 9) but the warning count stayed at 30 because the doc_id-less research/evidence warnings were unrelated to F-031.
4. Vocabulary coordination: nothing beyond protocol text plus validator code was needed; this reframing touched no concept admissions, renames, or frozen-vocab side effects.
5. ADR count (2): right split; ADR-0011 and ADR-0012 touched the same governance surface but had different proof obligations, so separate commits made review and rollback clearer.
6. Commit sequence (6-commit loose vs 4-commit tight): the looser sequence helped; separating activations, findings updates, and close artifacts kept each commit legible without much extra overhead.
7. Comparison to canon-review-v2 mechanics: the meaningful extra work was proposal governance, not ADR drafting — `authorized-by:` lineage, proposal-state transitions, and validator delta/backward-compat checks are the main reframing-bundle additions.
