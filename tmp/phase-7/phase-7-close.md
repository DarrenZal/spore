# Phase 7 close — canon-review rounds + reframing-authorized ADR bundles

- **Close date**: 2026-04-21
- **Operator**: Darren Zal
- **Duration**: approximately 22 hours wall-clock (2026-04-20 evening + 2026-04-21 morning sessions)

## Summary

Phase 7 executed **all 19 planned units** across canon-review-v2 rounds + foundational-reframing-authorized ADR bundles. 38 of 39 findings resolved (only F-024 editorial remains for Phase 8). Validator baseline held at 9 errors / 30 warnings throughout — zero regressions across any round.

## Unit inventory (19 of 19)

### Canon-review-v2 rounds (11 of 11)

| # | Slug | Findings | Repos | SHAs (final) |
|---|---|---|---|---|
| 01 | round-spore-synthesis-refresh | F-003, F-004, F-005, F-007 | Spore | ...5ff46df (close) |
| 03 | round-cross-repo-concept-splits | F-021, F-022 | all 3 | ...f7dc161 (close) |
| 04 | round-governance-authoring-surfaces | F-001, F-002 | Spore | ...c4c77fb (close) |
| 05 | round-cross-repo-vision-alignment | F-006, F-010 | Spore+IC | ...d07b44b (close) |
| 06 | round-ic-memory-governance-boundaries | F-008, F-009, F-011 | IC | ...2f437c0 (close) |
| 07 | round-ic-adr-trace-integrity | F-012, F-013 | IC | ...0b19dd6 (close) |
| 08 | round-pm-vocabulary-contract | F-014, F-015, F-016, F-017 | PM | ...3f63103 (close) |
| 09 | round-field-holon-clarification | F-023 (S1) | Spore | ...175bfce (close) |
| 10 | round-primitive-roster-boundaries | F-035, F-036 | Spore | ...19b6990 (close) |
| 11 | round-bridge-note-inventory-boundary | F-032 | Spore | ...532a7f7 (close) |
| 12 | round-bridge-note-corpus-normalization | F-033, F-034 | all 3 | ...1190e2a (close) |

### Reframing-authorized ADR bundles (8 of 8)

| # | Slug | Findings | Repos | Final proposal state |
|---|---|---|---|---|
| 02 | reframing-protocol-governance-hardening | F-025, F-026, F-031 | Spore | executed |
| 13 | reframing-graph-primitive-unification | F-020 | Spore | executed |
| 14 | reframing-pm-canon-scope | F-018, F-019 | Spore+PM | executed |
| 15 | reframing-repo-topology-trunk | F-037, F-038, F-039 | all 3 | executed |
| 16 | reframing-moratorium-formalization | F-027 | Spore | executed |
| 17 | reframing-frozen-vocabulary-role | F-028 | Spore | executed |
| 18 | reframing-protocol-audience-declaration | F-030 | Spore | executed |
| 19 | reframing-learning-field-host-elevation | F-029 | Spore+IC | executed |

## Concrete canon changes

- **30 ADRs drafted across 3 repos**: Spore 0009–0028, IC 0011–0017, PM 0010–0013
- **2 new standalone protocols** created in Spore:
  - `docs/research/planning/moratorium-protocol-v1.md` (F-027)
  - `docs/research/planning/learning-field-protocol-v1.md` (F-029)
- **canon-review-protocol v3 layered** in: §12 constitutional-amendment guard (F-025), §13 post-adoption appeal path (F-026), §14 vocabulary governance (F-028)
- **Validator code updated** (F-031): `scripts/validate_spec_dag.py` ALLOWED_STATUSES now discriminates by doc_kind (`decision-record` vs `proposal`)
- **Topology ratified** (F-037–F-039): 3-repo shared-canon-hybrid with explicit canon-bearing rubric, freeze-at-three scale guardrail, and `docs/research/planning/phase-9-merge-manifest-convention.md`
- **`docs/research/planning/repo-topology-decision.md`** committed (AC18 artifact)
- **3 shared framing notes** added: canon-framing-cross-repo-concept-splits.md, canon-framing-cross-repo-vision-alignment.md, canon-framing-bridge-note-corpus-normalization.md, canon-framing-pm-canon-scope.md
- **Bridge-note corpus normalized**: 61 notes migrated to v2 R-claim format across 3 repos; 33 claim lines marked `TODO: slug-deferred` for future v3 admission

## Residual work captured

- **33 deferred bridge-note claim lines** (Spore 29 notes / 37 claims; IC 1 note / 3 claims; PM 0) — all marked `TODO: slug-deferred` in bridge notes, enumerated in `tmp/bridge-note-slug-violations.tsv`. These become inputs for a future frozen-concepts v3 admission round (Parking Lot candidate).
- **F-024** (decentralization-theater / decentralisation-theater deduplication) — editorial, routes to Phase 8
- **0 v2 slug remaps applied** — every concept violation was genuinely unmappable under v2, validating the "no silent minting" discipline

## Metrics

| Metric | Value |
|---|---|
| Units executed | 19 of 19 |
| Findings resolved | 38 of 39 (97%) |
| ADRs drafted | 30 across 3 repos |
| Protocols created | 2 (moratorium, learning-field) |
| Validator baseline | 9/30 (held throughout) |
| Session-atomic deltas (cross-repo rounds) | 19s (prototype 3), 16s (topology trunk), 8s (learning-field), 18s (bridge-note migration), 2m11s (vision alignment), 6s (pm-canon-scope) |
| Solo-operator cooling-off override | 1 (Phase 6d, documented at `tmp/phase-6/solo-operator-cooling-off-override.md`) |
| Commit-message mislabels | 2 (audited at `tmp/phase-6/commit-audit.md`) |
| Retroactive methodology sharpenings | 1 (primitive-class criteria added during round 10) |

## Known validator state post-Phase 7

9 errors / 30 warnings — unchanged from baseline. The 9 errors are pre-existing (bridge-note `depends_on` references to non-existent doc_ids, identified during round 12 as out-of-scope for the migration). These were flagged in round 12's close memo as candidates for a follow-up dangling-reference cleanup (not blocking Phase 8 or 9).

## Next phases

- **Phase 8**: F-024 editorial deduplication (`decentralization-theater` / `decentralisation-theater` concept-roster cleanup). Small round, single finding.
- **Phase 9**: PR `corpus-review/v1` → `main` on Spore/IC/PM within 24h window per phase-9-merge-manifest-convention.md. Acceptance criteria sweep AC1-AC21 before merge.

## Audit trail

- All 19 unit close memos at `tmp/canon-review-round-<slug>-close.md` and `tmp/reframing-<slug>-close.md`
- Prototype lessons at `tmp/phase-7/prototype-lessons.md`
- Validator logs per round at `tmp/phase-7/*-validator-{pre,post}.txt`
- Commit audit for Phase 6c parallel-execution mislabels: `tmp/phase-6/commit-audit.md`
- Solo-operator cooling-off override memo: `tmp/phase-6/solo-operator-cooling-off-override.md`
