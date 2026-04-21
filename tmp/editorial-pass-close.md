# Phase 8 Editorial Pass Close

Date: 2026-04-21
Branch: `corpus-review/v1`
Validator baseline: preserved at `9/30`

## F-024

- Canonical spelling chosen: `decentralization-theater`
- Rationale: `docs/research/concepts-p2p-wiki.yaml` freezes only the American slug, and the pre-edit concept roster split showed `decentralization-theater` at usage-count `21` versus `decentralisation-theater` at usage-count `2`
- Edits made:
  - canonicalized the live Spore concept references in `docs/foundations/mycorrhizal-federation-protocol.md`
  - canonicalized the residual British-form concept mention in `docs/research/canon-decisions/0002-reproduction-primacy.md`
  - consolidated `tmp/concept-roster.tsv` to one canonical `decentralization-theater` row with usage-count `23`
  - updated `docs/research/planning/corpus-foundational-review-findings.md` so F-024 is `resolved-editorial`
- Cross-repo conversion count:
  - Spore: 2 live document references converted, plus 1 duplicate concept-roster row consolidated
  - Intelligence Commons: 0
  - Poietic Match: 0
- Structural implications: none; no new slug, layer, or ADR surface introduced
