# Round scope — round-ic-memory-governance-boundaries

- Date: 2026-04-21
- Findings covered: F-008, F-009, F-011
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), post-adoption appeal rule in canon-review-protocol §13 (successor ADR may amend earlier ADR)
- Target allowlist: `spec:spore.*`, `spec:ic.*`
- Repos affected: Spore + Intelligence Commons
- Cross-track dependencies: none
- ADR slug candidates:
  - `0011-memory-layer-model-constitutional-operational-split`
  - `0012-boundary-theory-unifier-retraction`
- Session-atomic window required: no (single-repo ADR landing; Spore carries scope/close/status only)

## Pre-flight

- Branch verified:
  - Spore: `corpus-review/v1`
  - Intelligence Commons: `corpus-review/v1`
- Explicit-add discipline: in effect
- Spore validator baseline: 9 errors, 30 warnings on 2026-04-21; recorded at `tmp/phase-7/round-ic-memory-governance-boundaries-validator-pre.txt`
- IC ADR numbering / doc_id convention verified:
  - next requested ADR slots: `0011`, `0012`
  - doc_id family: `ic.canon-decision.*`
- Authorized-by rule: both IC ADRs will carry `authorized-by: ""` because this is a canon-review-v2 round, not a reframing-authorized bundle

## Evidence gate

- F-008: pass
  - `docs/project-vision.md:26` states that software-essential material belongs in BKC
  - `docs/foundations/intelligence-primitives.md:11-23` currently defines primitives partly through BKC/Octo materialization details
  - `docs/foundations/memory-layer-model.md:74` already distinguishes semantic roadmap and eval contract as governance surfaces, which helps anchor the canon/proving-ground split
  - `spore/docs/research/corpus-review/research-canonical-layering.md:14-18` supplies the stable rule to separate domain from machinery
  - Distinct evidence count: 4
- F-009: pass
  - `docs/foundations/memory-layer-model.md:65-74` currently flattens constitutional artifacts, patterns, protocols, roadmap, and eval contract into one Layer 5 description
  - `docs/patterns/project-learning-membrane.md:77-79` provides corroborating evidence that the repo-level governance surface is being read too monolithically
  - `docs/project-vision.md:48-54` already distinguishes `foundations/`, `governance/`, and `research/` as different surfaces
  - `spore/docs/research/corpus-review/research-governance-process.md:42` names constitutional vs operational separation as the relevant governance distinction
  - Distinct evidence count: 4
- F-011: pass
  - `docs/research/canon-decisions/0003-boundary-theory-unifier.md:7-10` records the obsolete `Working ↔ Session ↔ Procedural ↔ Semantic ↔ Governance` stack
  - `docs/foundations/memory-layer-model.md:131-137` states that declarative / procedural / prospective are not additional layers
  - `docs/patterns/project-learning-membrane.md:97-103` confirms the pattern does not introduce new memory layers
  - `docs/learning-field/synthesis/agentic-memory-pilot-v1.md:156-159` leaves any procedural-layer promotion explicitly open rather than canonical
  - Distinct evidence count: 4
- Prior collision check: none
- Dependency check: none

## Provisional judgment at scope-open

- F-008 + F-009 fit one IC ADR because both are the same governance-boundary repair: canon defines the stable memory taxonomy; proving-ground implementations and governance-operational surfaces remain examples or subordinate strata, not primitive-defining content.
- F-011 will proceed as an amendment rather than a full supersession unless ADR drafting uncovers a broader fault. The boundary-commoning decision itself still stands; the obsolete procedural-layer phrase is the part that requires formal repair.
