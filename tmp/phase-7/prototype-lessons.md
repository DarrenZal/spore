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

# Phase 7 prototype lessons — round-cross-repo-concept-splits

1. Session-atomic window: 19 seconds across the 3 ADR commits (`19b6fa9` -> `5722c0d`), leaving 34m41s of margin against the 35-minute limit. Comfortable.
2. Push sequencing: no visible issues in Spore -> IC -> PM order. Each push cleared cleanly and the order did not create cross-repo race pressure in this run.
3. Shared framing note: Spore-hosted canonical framing worked well. One shared note plus per-repo ADR citations was cleaner than copying the same framing prose into IC and PM.
4. Per-repo ADR convention: numbering and doc_id prefixes matched expectations (`spore.canon-decision.*`, `ic.canon-decision.*`, `pm.canon-decision.*`). The one live divergence is historical: IC and PM still carry older `accepted`-era ADRs in the corpus, while this round used `active` to match the current protocol.
5. Cross-repo content consistency: yes. The three ADRs tell one coherent story — Spore and IC keep the broad umbrella terms, PM keeps the narrower protocol-layer namespace.
6. Commit sequence: about right. The split into scope / framing / 3 ADRs / findings / close kept the audit trail legible; bundling findings updates into the close commit would have made the close commit harder to scan.
7. Recovery scenario: if the session-atomic window had been violated after all 3 ADRs landed consistently, the right move would have been to finish closeout and log the discipline deviation rather than rollback valid canon text. Rollback would only make sense if remote state became inconsistent or one repo failed to land the coordinated content at all.
