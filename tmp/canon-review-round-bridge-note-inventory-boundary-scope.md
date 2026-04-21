# Round scope — round-bridge-note-inventory-boundary

- Date: 2026-04-21
- Findings covered: F-032
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), learning-field-intake-protocol §3 and §8 (bridge-note vs field-scan boundary), Phase 7 master single-repo commit discipline
- Target allowlist: `tmp/bridge-note-inventory.tsv`, `tmp/canon-framing-inventory.tsv`, `tmp/field-scan-inventory.tsv`, `docs/research/canon-decisions/0026-bridge-note-inventory-scope-cleanup.md`, optional `docs/research/planning/learning-field-intake-protocol.md` if boundary wording proves insufficient during drafting
- Repos affected: Spore
- Cross-track dependencies: none
- ADR slug candidates:
  - Spore ADR-0026 `bridge-note-inventory-scope-cleanup`
- Session-atomic window required: no (single-repo)
- Expected ADR count: 1

## Pre-flight

- Branch verified: `corpus-review/v1`
- Explicit-add discipline: in effect
- Spore validator baseline: 9 errors, 30 warnings on 2026-04-21; recorded at `tmp/phase-7/round-bridge-note-inventory-boundary-validator-pre.txt`
- ADR numbering / doc_id convention verified:
  - current corpus already lands through ADR-0025, so this round uses `0026`
  - doc_id family: `spore.canon-decision.*`
  - spec 11's stale `ADR-0018` reference is treated as superseded by the live corpus state
- Authorized-by rule: ADR-0026 will carry `authorized-by: ""` because this is a canon-review-v2 round, not a reframing-authorized bundle

## Evidence gate

- F-032: pass
  - `tmp/bridge-note-inventory.tsv` currently contains 10 rows whose paths point to non-bridge-note artifacts:
    - 7 `canon_framing` notes at inventory rows 7-13
    - 3 `field_scan` notes at inventory rows 65-67
  - `docs/research/connections/canon-framing-boundary-theory-unifier.md:2-4` shows the first misclassified family carries `research_subkind: canon_framing`
  - `docs/research/connections/p2p-wiki-field-scan.md:2-5`, `docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md:2-5`, and `docs/research/connections/p2p-wiki-post-intake-synthesis.md:2-5` show the second misclassified family carries `research_subkind: field_scan`
  - `docs/research/planning/learning-field-intake-protocol.md:79-90` defines bridge notes as `research_subkind: bridge_note`
  - `docs/research/planning/learning-field-intake-protocol.md:168-169` explicitly classifies cross-bridge-note syntheses as `research_subkind: field_scan`
  - Distinct evidence count: 6
- Prior collision check: none
- Dependency check: none

## Provisional judgment at scope-open

- The finding's minimum claim holds as written: there are exactly 10 misclassified rows in the current inventory.
- The bridge-note boundary is already recoverable from existing protocol language:
  - a qualifying artifact is a research note whose frontmatter declares `research_subkind: bridge_note`
  - `canon-framing-*` and `field_scan` notes remain legitimate research artifacts, but not bridge notes
- The round will preserve those out-of-scope rows by splitting them into dedicated TSVs unless ADR drafting reveals that simple removal is cleaner.
