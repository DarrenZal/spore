# Phase 2 fallbacks

- `adr-rationale-index.tsv` was sourced from `docs/research/canon-decisions/*.md` in all three repos because `docs/adr/*.md` does not exist on disk.
- `primitive-class` criterion `(c)` was forced to `FALSE` for this pass per the Phase 1+2 handoff, even though legacy Spore lexicon files remain in the repo tree.
- `introducing-doc` and `usage-count` in `concept-roster.tsv` use deterministic path-order and document-presence heuristics rather than historical creation-time reconstruction.
- `repo-topology-snapshot.md` reports strict/broad edge counts from literal `spec:` / `org:` references per handoff; raw `doc_id`-style cross-references are more common and are noted narratively.
- `coordination artifacts` are counted as cross-repo-reference-bearing documents, not git-session windows, because no durable coordination-event ledger exists yet.
- Analysis-only repo shared-concept overlaps are approximated by text-grep against the Phase 2 concept roster because those repos are outside the structured canon / bridge-note inventory scope.
