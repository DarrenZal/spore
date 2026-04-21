# Round scope — round-governance-authoring-surfaces

- Date: 2026-04-20
- Findings covered: F-001, F-002
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), R-11 (ADR status vocabulary historical note)
- Target allowlist: `spec:spore.*` plus plan-scoped editorial surfaces `docs/research/canon-decisions/README.md` and `docs/governance/quickstart.md`
- Repos affected: Spore only
- Cross-track dependencies:
  - F-001 -> F-031 (`blocking`, satisfied). ADR-0012 is active and makes the decision-record status enum authoritative for Spore ADRs, so the README lifecycle fix can now land against the resolved vocabulary instead of a provisional mapping.
  - F-002 -> none
- ADR slug candidates:
  - `0014-governance-authoring-surfaces-alignment`
- Session-atomic window required: no

## Pre-flight

- Branch verified: `corpus-review/v1`
- Explicit-add discipline: in effect
- Validator baseline: 9 errors, 30 warnings on 2026-04-20; recorded at `tmp/phase-7/round-governance-authoring-surfaces-validator-pre.txt`
- Frozen-concepts alignment: no new slugs will be minted in this round. The ADR will use the existing Spore governance-adjacent concept slug `memory-governance`.
- Authority check for F-002: `docs/governance/agent-commons-meta-protocol.md` is treated as the authoritative base `doc_kind` taxonomy because `quickstart.md` explicitly defers to it for the full governance model. `docs/governance/adoption-guide.md` is treated as a downstream alignment surface, not the taxonomy source of truth.

## Evidence gate

- F-001: pass. Evidence bar met for S3 (`docs/research/canon-decisions/README.md`, `docs/research/planning/canon-review-protocol.md`, `docs/research/canon-decisions/0002-reproduction-primacy.md`, `docs/governance/agent-commons-meta-protocol.md`). Prior collision: none. Dependency: F-031 satisfied via ADR-0012.
- F-002: pass. Evidence bar met for S3 (`docs/governance/quickstart.md`, `docs/governance/agent-commons-meta-protocol.md`, `docs/governance/adoption-guide.md`, `docs/research/canon-decisions/0006-polycentric-governance-at-holarchy.md`). Prior collision: none. Dependency: none.

## Round notes

- The live repo baseline matches the round brief's expected validator state (`9 errors / 30 warnings`), so any increase is a regression.
- `decision-record` is already a live governed artifact kind in the canon-review protocol and ADR corpus. The F-002 repair will therefore align quickstart to the meta-protocol's base taxonomy while also naming the repo-local ADR exception explicitly, instead of leaving the onboarding surface to imply that ADR files are outside the governed set.
