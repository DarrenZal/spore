# Scope — reframing-protocol-governance-hardening

- Authorizing proposal: `docs/research/planning/reframing/reframing-protocol-governance-hardening.md` (`status: eligible`, commit `24d37fe`)
- Covered findings: F-025, F-026, F-031
- Protocol rules invoked:
  - foundational-reframing-protocol v1.1: FR-12, FR-14.6, FR-24, FR-25, FR-26
  - canon-review-protocol v2 target surfaces: ADR-lite template, meta-corpus protocol sections
  - Phase 7 master: reframing-authorized ADR bundle mechanics, proposal `eligible -> authorized-ADR -> executed`
- Target allowlist:
  - `spore.canon-review-protocol`
  - `spore.validate-spec-dag`
- Repos affected: Spore only
- Cross-track dependencies: none
- ADR slug candidates:
  - ADR-0011 `canon-review-protocol-v3-governance-hardening` (F-025, F-026)
  - ADR-0012 `adr-status-vocabulary-unification` (F-031)
- Session-atomic window required: no
- Expected validator delta: baseline 17 errors / 30 warnings -> post-F-031 approximately 9 errors / 30 warnings, with the 8 proposal-status errors removed by `doc_kind`-specific status validation
- Authorized-by lineage: both ADRs must carry `authorized-by: reframing-protocol-governance-hardening`
