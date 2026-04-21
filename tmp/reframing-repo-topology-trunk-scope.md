# Scope — reframing-repo-topology-trunk

- Authorizing proposal: `docs/research/planning/reframing/reframing-repo-topology-trunk.md` (`status: eligible`, consultation signed)
- Covered findings: F-037, F-038, F-039
- Protocol rules invoked:
  - foundational-reframing-protocol v1.1: FR-12, FR-14.6, FR-21, FR-22, FR-23, FR-24, FR-25, FR-27
  - corpus-foundational-review-v1 plan: AC18 topology decision doc requirement; Phase 9 merge-order and partial-merge fallback rules
  - Phase 7 master + spec 15: cross-repo session-atomic ADR bundle mechanics, `eligible -> authorized-ADR -> executed`, F-029 dependency release at `authorized-ADR`
- Target allowlist:
  - `spore.canon-decision.*`
  - `ic.canon-decision.*`
  - `pm.canon-decision.*`
  - `topology:*`
  - `meta:*`
- Repos affected: Spore, Intelligence Commons, Poietic Match
- Cross-track dependencies:
  - upstream blockers: none
  - downstream release: `reframing-learning-field-host-elevation` becomes eligible once this proposal reaches `authorized-ADR`
- ADR slug candidates:
  - Spore ADR-0020 `repo-topology-ratification`
  - IC ADR-0010 `repo-topology-ratification`
  - PM ADR-0009 `repo-topology-ratification`
- Session-atomic window required: yes (35 minutes across the 3 ADR draft commits, author-date basis)
- AC18 artifact: `tmp/repo-topology-decision.md`
- Merge-governance carrier to ratify: `tmp/merge-manifests/<round-slug>.md` in Spore

## Pre-flight

- Branches verified: `corpus-review/v1` in Spore, Intelligence Commons, and Poietic Match
- Explicit-add discipline: in effect
- Spore validator baseline: 9 errors / 30 warnings on 2026-04-20; no regression allowed
- Proposal state: `eligible`
- Consultation gate: signed (`ADR drafting may begin: yes`)
- ADR numbering / doc_id conventions verified:
  - Spore next ADR: `0020`, `spore.canon-decision.*`
  - IC next ADR: `0010`, `ic.canon-decision.*`
  - PM next ADR: `0009`, `pm.canon-decision.*`

## Evidence gate

- F-037: pass. S2 bar exceeded with 10 sources, 8 publicly-verifiable.
  - Plan states topology is unadjudicated and limits editable canon-bearing repos to Spore, IC, and PM.
  - Capstone already classifies the trio as a three-repo shared-canon hybrid.
  - Phase 2 topology snapshot shows current coordination artifacts and shared-concept overlap.
  - Governance-process research supports constitutionalizing the topology choice rather than leaving it as operator habit.
- F-038: pass. S2 bar exceeded inside the same 10-source bundle.
  - Shared-concept duplication is real across all three repos.
  - Canon-review-v1 already required 23 ADRs and 6 coordinated framing-note sets, proving the shared layer is load-bearing even without a fourth host.
  - Research-repo-topology sources justify choosing a guardrail now instead of a premature shared-canon extraction or monorepo collapse.
- F-039: pass. S2 bar exceeded inside the same 10-source bundle.
  - Phase 0 readiness/fallback artifacts record the IC/PM branch-protection visibility gap.
  - Phase 9 already assumes near-synchronous three-repo propagation and defines partial-merge recovery.
  - The bundle can therefore resolve F-039 only by naming an auditable merge carrier and fallback rule inside the topology decision itself.

## Bundle notes

- Proposed direction confirmed: Option 1, ratified as `ratify-3-repo-with-scale-guardrail`
- Shared-canon handling is conservative: keep repo-local copies, forbid silent expansion beyond the current trio, and use Spore-hosted decision/manifest carriers instead of minting a fourth canon-bearing repo now.
- Merge-governance resolution must name:
  - cross-repo carrier: `tmp/merge-manifests/<round-slug>.md`
  - audit artifact: one committed manifest per coordinated merge set
  - asymmetric protection rule: IC and PM remain `PR-gated / protection-unverified` until independently verified, with revert-or-deferral handling if Spore merges first and downstream merges fail
