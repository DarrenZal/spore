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
