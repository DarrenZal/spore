# Scope — reframing-pm-canon-scope

- Authorizing proposal: `docs/research/planning/reframing/reframing-pm-canon-scope.md` (`status: eligible`)
- Covered findings: F-018, F-019
- Protocol rules invoked:
  - foundational-reframing-protocol v1.1: FR-7, FR-11, FR-17, FR-24, FR-25, FR-27
  - Phase 7 master + spec 14: reframing-authorized ADR bundle mechanics, `eligible -> authorized-ADR -> executed`, 2-repo session-atomic drafting discipline
- Target allowlist:
  - `pm.canon-decision.*`
  - `spore.connection.canon-framing-pm-canon-scope`
  - `meta:*`
- Repos affected: Spore, Poietic Match
- Cross-track dependencies: none
- ADR slug candidates:
  - PM ADR-0010 `canon-scope-ratification`
- Session-atomic window required: yes (35 minutes across the Spore framing-note commit and PM ADR draft commit, author-date basis)
- Shared framing note target:
  - `docs/research/connections/canon-framing-pm-canon-scope.md`
- PM canon-boundary targets:
  - `docs/downstream-products.md`
  - `docs/phase-0-spec.md`
  - `docs/grammar.md`
  - `docs/research/canon-decisions/README.md`
- Spore derivative outputs to align:
  - `tmp/corpus-inventory.tsv`
  - `tmp/concept-roster.tsv`

## Pre-flight

- Branches verified: `corpus-review/v1` in Spore and Poietic Match
- Explicit-add discipline: in effect
- Proposal state: `eligible`
- Consultation gate: signed (`ADR drafting may begin: yes`)
- Spore validator baseline: 9 errors / 30 warnings on 2026-04-21; no regression allowed
- ADR numbering / doc_id conventions verified:
  - PM next ADR: `0010`, `pm.canon-decision.*`

## Evidence gate

- F-018: pass. S3 bar exceeded with 12 proposal sources, 11 publicly-verifiable.
  - Shared protocol already defines canon as normative self-description and excludes governance / operational docs.
  - `docs/downstream-products.md` already declares itself `doc_kind: governance` and describes itself as a downstream registry.
  - PM's current README and Spore derivative inventory still reproduce the old exception.
- F-019: pass. S3 bar exceeded inside the same 12-source bundle.
  - `docs/phase-0-spec.md` is already excluded from PM canon but still appears in Spore's PM inventory slice and concept roster as the introducing doc for `commitment-bundles`.
  - `docs/grammar.md` section 1.4 already contains the strongest formal canon-layer definition of `pm:CommitmentBundle`.
  - `docs/project-vision.md` remains the explanatory companion surface rather than the canonical origin record.
- Prior-collision-check: none
- Dependencies: none

## Bundle notes

- Canon scope to ratify in PM:
  - `docs/project-vision.md`
  - `docs/grammar.md`
  - `docs/protocol.md`
  - `docs/research/canon-decisions/*.md`
- Exclusions to formalize:
  - `docs/downstream-products.md` is governance, not canon
  - `docs/phase-0-spec.md` is implementation-only, not canon
- Canonical origin choice:
  - `commitment-bundles` origin moves to `docs/grammar.md` §1.4
  - `docs/project-vision.md` remains the narrative explanation surface
- Derivative Spore repair needed for honest closure:
  - remove `docs/downstream-products.md` and `docs/phase-0-spec.md` from `tmp/corpus-inventory.tsv`
  - update `tmp/concept-roster.tsv` so `commitment-bundles` is introduced from `poietic-match/docs/grammar.md` at `poietic-match:adr-eligible`
- Authorized-by lineage:
  - PM ADR-0010 must carry bare single-line `authorized-by: reframing-pm-canon-scope`
