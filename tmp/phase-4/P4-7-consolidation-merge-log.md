# Phase 4 Pass P4.7 - Consolidation merge log

## Summary

- Input findings: 40
- Output consolidated findings: 39
- Merges applied: 1
- Severity adjustments: 2
- Priority adjustments: 0
- Drops: 0

## Input counts by source pass

| pass | input findings |
|------|----------------|
| P4.1a | 7 |
| P4.1b | 6 |
| P4.1c | 6 |
| P4.2 | 5 |
| P4.3 | 7 |
| P4.4 | 3 |
| P4.5 | 3 |
| P4.6 | 3 |

## Merges

| source findings | consolidated id | decision |
|-----------------|-----------------|----------|
| P4-2-001 + P4-5-001 | F-020 | Merged because both target the same knowledge-graph / epistemic-graph duplication claim. Type resolved to `should-be-merged`; severity resolved to `S3` because the combined evidence set lacks external research support required for `S2`. |

## Severity adjustments

| source finding(s) | original | new | rationale |
|-------------------|----------|-----|-----------|
| P4-2-001 + P4-5-001 -> F-020 | S3 + S2 | S3 | Higher-severity `S2` could not be retained because the merged evidence set is internal-only. |
| P4-5-002 -> F-035 | S2 | S3 | Evidence count is strong, but the finding has no external research citation and therefore misses the S2 evidence bar. |

## Priority adjustments

No priority changes were required after applying the master rubric.

## Drops

No findings were dropped.

## Near-overlaps kept separate for P4.8 review

| findings | note |
|----------|------|
| F-001, F-005, F-031 | All three concern status semantics, but they were kept separate because they act on different surfaces: authoring README, synthesis doc lifecycle language, and protocol/tooling vocabulary. |
| F-010, F-037 | F-010 is a doc-level contradiction inside `ic.project-vision`; F-037 is the broader unratified topology decision. |
| F-018, F-019 | Both are PM canon-scope / inventory mistakes, but each targets a separate out-of-scope document and needs its own correction path. |

## Final distributions

### By severity

| value | count |
|-------|-------|
| S1 | 0 |
| S2 | 14 |
| S3 | 24 |
| S4 | 1 |

### By priority

| value | count |
|-------|-------|
| blocking | 8 |
| important | 27 |
| deferred | 4 |

### By corpus-location

| value | count |
|-------|-------|
| content | 24 |
| meta-corpus | 9 |
| bridge-note | 3 |
| repo-topology | 3 |

## Revision 2 (P4.8 adjustments)

### Must-fix adjustments applied

| finding | change | rationale |
|---------|--------|-----------|
| F-004 | Restored `prior-collision-check: [care primacy]` from `P4-1a-004`. | P4.8 correctly identified a silent data-loss bug in consolidation. |
| F-015 | Restored `prior-collision-check: [commons-over-market]` from `P4-1c-002`. | P4.8 correctly identified a silent data-loss bug in consolidation. |
| F-016 | Restored `prior-collision-check: [polycentric-not-hierarchical]` from `P4-1c-003`. | P4.8 correctly identified a silent data-loss bug in consolidation. |
| F-033 | Restored `prior-collision-check: [canon-review bridge-note R-claim format convention]` from `P4-4-002`. | Full re-audit of all source-pass priors found an additional dropped annotation beyond the three flagged by P4.8. |
| F-034 | Restored `prior-collision-check: [frozen concepts vocabulary v2]` from `P4-4-003`. | Full re-audit of all source-pass priors found an additional dropped annotation beyond the three flagged by P4.8. |
| F-037 | Priority `important -> blocking`. | Dependency invariant: blocking F-039 depends on F-037, so F-037 must also be blocking. |

### Judgment calls applied

| finding(s) | decision | rationale |
|------------|----------|-----------|
| F-023 | Severity `S2 -> S1`. | Verified 5 distinct evidence pieces and 2 external research artifacts by path: `research-capstone.md` and `research-capstone-review.md`. The claim is a primitive-ontology question and therefore meets the S1 substance test. |
| F-012 + F-013 | Kept both at `important`. | Applied as a symmetric pair. Both findings target accepted-ADR trace/rationale reliability, but neither creates the same dependency-blocking operational invariant as F-037/F-039. |

### Prior-collision re-audit result

- Re-audited all 39 consolidated findings against source-pass `prior-collision-check` fields.
- Source-pass findings with non-`none` priors: `5`.
- Dropped priors found and restored: `5` (`F-004`, `F-015`, `F-016`, `F-033`, `F-034`).
- No other prior-collision mismatches remained after the restores.

### Optional S1 audit

- Spot-checked the remaining 13 original-S2 findings excluding F-023.
- No additional S1 upgrades were applied.
- Numeric bar alone was insufficient for topology/governance findings such as `F-037`, `F-038`, and `F-039`; those may have enough evidence pieces, but they remain structural rather than primitive/substrate identity findings under the methodology.

### Sanity probes (report only)

- P4.4 bundling verdict: the three bridge-note findings intentionally bundle corpus-level pattern violations, and the only concrete issue held out as a non-finding was the single draft note missing `disposition`, which stayed below the pass evidence bar.
- Dedup-flag review: reviewed `26` flagged-but-not-merged overlap notes; target surfaces remained materially distinct, so no additional merges were warranted.

## Revision 4 (Phase 5 triage correction)

| finding | reroute | round assignment | rationale |
|---------|---------|------------------|-----------|
| F-004 | `prior-revision-proposal -> canon-review-v2` | `round-spore-synthesis-refresh` | The finding invokes `care primacy` to defend the current canon and fix `docs/synthesis/coordination-grammar.md`; it preserves the prior rather than challenging it. |
| F-015 | `prior-revision-proposal -> canon-review-v2` | `round-pm-vocabulary-contract` | The finding targets PM layer-placement drift for commons-grounded `CVLE` semantics; it does not challenge `commons-over-market`, and it belongs with the other PM contract-surface corrections. |
| F-016 | `prior-revision-proposal -> canon-review-v2` | `round-pm-vocabulary-contract` | The finding invokes `polycentric-not-hierarchical` to require PM's missing third governance surface; it preserves the prior rather than reopening it. |
| F-033 | `prior-revision-proposal -> canon-review-v2` | `round-bridge-note-corpus-normalization` | `canon-review bridge-note R-claim format convention` is a source-pass convention flag, not one of the five declared priors; the fix is a 63-note bridge-note format migration round. |
| F-034 | `prior-revision-proposal -> canon-review-v2` | `round-bridge-note-corpus-normalization` | `frozen concepts vocabulary v2` is a vocabulary-governance convention, not a declared prior; the fix is bridge-note slug remapping or v3 vocabulary admission inside canon-review-v2. |

## Revision 5 (Phase 5 triage YAML-block sweep, 2026-04-20)

Revisions 2–4 updated the findings-doc index table but left the per-finding YAML blocks'
`proposed-resolution-track:` field unchanged (per prompt K's "Do NOT touch the detailed
YAML blocks" constraint). Phase 6c drafting surfaced this divergence as a real audit
issue — the YAML blocks showed Phase 4 consolidator-era routings that no longer matched
the ratified Phase 5 tracks. Revision 5 sweeps all 20 stale `proposed-resolution-track:`
fields into alignment with the index table.

| Finding | YAML old value | YAML new value |
|---------|----------------|----------------|
| F-001 | editorial | canon-review-v2 |
| F-002 | editorial | canon-review-v2 |
| F-005 | editorial | canon-review-v2 |
| F-006 | editorial | canon-review-v2 |
| F-007 | editorial | canon-review-v2 |
| F-017 | editorial | canon-review-v2 |
| F-018 | editorial | foundational-reframing |
| F-019 | editorial | foundational-reframing |
| F-020 | canon-review-v2 | foundational-reframing |
| F-023 | foundational-reframing | canon-review-v2 |
| F-025 | canon-review-v2 | foundational-reframing |
| F-026 | canon-review-v2 | foundational-reframing |
| F-027 | prior-revision-proposal | foundational-reframing |
| F-028 | canon-review-v2 | foundational-reframing |
| F-029 | prior-revision-proposal | foundational-reframing |
| F-030 | editorial | foundational-reframing |
| F-031 | prior-revision-proposal | foundational-reframing |
| F-032 | editorial | canon-review-v2 |
| F-033 | prior-revision-proposal | canon-review-v2 |
| F-034 | prior-revision-proposal | canon-review-v2 |

Frontmatter bumped to `revision: 5`, `revision_basis: phase-5-triage-yaml-sweep`. Final
YAML-block distribution: canon-review-v2 25, foundational-reframing 13, editorial 1,
prior-revision-proposal 0 — matches the index table exactly.

No finding content was changed; no severity/priority/corpus-location values were
touched. This is a pure field-alignment sweep.
