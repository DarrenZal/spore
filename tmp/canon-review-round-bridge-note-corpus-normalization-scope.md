# Round scope — round-bridge-note-corpus-normalization

- Date: 2026-04-21
- Findings covered: F-033, F-034
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), canon-review-protocol §2 (canonical R-claim identifier convention), canon-review-protocol §5 (cross-project coordination), canon-review-protocol §7 (frozen-vocabulary discipline)
- Target allowlist:
  - `tmp/canon-review-round-bridge-note-corpus-normalization-scope.md`
  - `docs/research/connections/canon-framing-bridge-note-corpus-normalization.md`
  - `tmp/bridge-note-slug-violations.tsv`
  - `tmp/phase-7/bridge-note-corpus-normalizer.py`
  - all bridge notes with `review-claim-count > 0` in `tmp/bridge-note-inventory.tsv` (84-row inventory dated 2026-04-21)
  - `docs/research/canon-decisions/0028-bridge-note-format-and-vocabulary-normalization.md`
  - `/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0017-bridge-note-format-and-vocabulary-normalization.md`
  - `/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0013-bridge-note-format-normalization.md`
  - `docs/research/planning/corpus-foundational-review-findings.md`
  - `tmp/canon-review-round-bridge-note-corpus-normalization-close.md`
- Repos affected: Spore, Intelligence Commons, Poietic Match
- Cross-track dependencies: contextual only
  - F-028 / ADR-0022 (`frozen-vocabulary-role-redefinition`) already landed on 2026-04-21, but this round still treats the current frozen v2 vocabulary as immutable. No v3 admissions, no new slugs, no vocabulary-file edits.
- ADR slug candidates:
  - Spore ADR-0028 `bridge-note-format-and-vocabulary-normalization`
  - IC ADR-0017 `bridge-note-format-and-vocabulary-normalization`
  - PM ADR-0013 `bridge-note-format-normalization`
- Session-atomic window required: yes
- Expected ADR count: 3

## Pre-flight

- Branch verified in all three repos: `corpus-review/v1`
- Explicit-add discipline: in effect for all staging and commit steps
- Spore validator baseline: `9 error(s), 30 warning(s)` on 2026-04-21
- Inventory scope anchor:
  - `tmp/bridge-note-inventory.tsv` now contains 84 data rows after ADR-0026 removed the 10 non-bridge-note artifacts on 2026-04-21
  - 61 of those 84 rows currently have `review-claim-count > 0` and are therefore in the F-033 migration surface: 49 Spore, 6 IC, 6 PM
  - the findings document's pre-cleanup F-033 statement still cites 63 out-of-spec review-claim notes because it predated the 2026-04-21 inventory-boundary cleanup; the operative round scope is the post-cleanup 61-note surface
- Inventory path resolution note:
  - 6 IC inventory rows still point at `intelligence-commons/docs/research/*.md`
  - the on-disk files now live under `intelligence-commons/docs/research/connections/*.md`
  - inventory membership remains authoritative for scope; execution resolves those 6 rows to their current on-disk paths without changing inventory membership in this round
- ADR numbering / doc_id convention verified:
  - Spore next ADR is `0028`
  - Intelligence Commons next ADR is `0017`
  - Poietic Match next ADR is `0013`
  - doc_id families: `spore.canon-decision.*`, `ic.canon-decision.*`, `pm.canon-decision.*`
- Authorized-by rule:
  - all three ADRs will carry `authorized-by: ""` because this is a canon-review-v2 round, not a reframing-authorized bundle

## Evidence gate

- F-033: pass
  - full-corpus check against the current 84-row bridge-note inventory shows every in-scope review-claim bridge note still uses the legacy inline R-claim serialization rather than the v2 bullet + `supported_by:` form
  - in current scope, that is 61 bridge notes: 49 Spore, 6 IC, 6 PM
  - the findings document's 63-note total remains historically correct for the pre-cleanup corpus, but the actionable round surface is the 61-note post-cleanup corpus
  - distinct evidence count from findings YAML: 5
- F-034: pass
  - current-scope scan finds 30 in-scope notes with review-claim concept slugs outside frozen v2: 29 Spore, 1 IC, 0 PM
  - those 30 notes contain 40 claim-line violations in total: 37 Spore, 3 IC
  - every offending slug is Johar-derived or sheaf-derived and lacks a safe exact synonym in the frozen v2 vocabulary; forced remap would introduce semantic drift
  - the round will therefore apply the protocol-approved fallback: keep the legacy concept slug visible, add `TODO: slug-deferred` at the R-claim line, and log every note/claim in the shared framing note plus `tmp/bridge-note-slug-violations.tsv`
  - distinct evidence count from findings YAML: 7
- Prior collision check:
  - F-033 prior: canon-review bridge-note R-claim format convention
  - F-034 prior: frozen concepts vocabulary v2
  - this round preserves both priors by normalizing to the v2 wire format and by refusing non-exact slug substitutions
- Dependency check: no blocking unresolved upstream finding remains

## Provisional judgment at scope-open

- F-033 resolves as a mechanical whole-corpus migration:
  - convert every in-scope legacy R-claim block to `- **R<n>**: ...` plus an indented `supported_by:` line
  - preserve claim wording, targets, support references, and any support-line trailing notes
- F-034 resolves as explicit defer, not forced substitution:
  - no safe exact v2 remaps are approved in this round
  - the migration authority will therefore record all 30 note-level violations as `TODO: defer`
  - claim lines stay semantically transparent by retaining the current legacy slug and appending `TODO: slug-deferred`
- PM participates in the format migration only:
  - 6 PM bridge notes need F-033 normalization
  - PM has no in-scope F-034 slug violations after the 2026-04-21 inventory cleanup
