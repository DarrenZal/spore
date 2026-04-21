# Round scope — round-ic-adr-trace-integrity

- Date: 2026-04-21
- Findings covered: F-012, F-013
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), post-adoption appeal rule in canon-review-protocol §13 (successor ADR may amend earlier ADR)
- Target allowlist: `spec:spore.*`, `spec:ic.*`, `spec:pm.*`
- Repos affected: Spore + Intelligence Commons
- Cross-track dependencies: none
- ADR slug candidates:
  - `0013-three-layer-coordination-stack-trace-repair`
  - `0014-collective-agency-declination-rationale-repair`
- Session-atomic window required: no (single-repo ADR landing; Spore carries scope/close/status only)

## Pre-flight

- Branch verified:
  - Spore: `corpus-review/v1`
  - Intelligence Commons: `corpus-review/v1`
- Explicit-add discipline: in effect
- Upstream round dependency satisfied:
  - `tmp/canon-review-round-ic-memory-governance-boundaries-close.md` exists
  - `docs/research/canon-decisions/0011-memory-layer-model-constitutional-operational-split.md` is `status: active`
- Spore validator baseline: 9 errors, 30 warnings on 2026-04-21; recorded at `tmp/phase-7/round-ic-adr-trace-integrity-validator-pre.txt`
- IC ADR numbering / doc_id convention verified:
  - next requested ADR slots: `0013`, `0014`
  - doc_id family: `ic.canon-decision.*`
- Authorized-by rule: both IC ADRs will carry `authorized-by: ""` because this is a canon-review-v2 round, not a reframing-authorized bundle

## Evidence gate

- F-012: pass
  - `docs/research/planning/canon-review-protocol.md:79-85` requires `r_claim_statement` to carry the verbatim primary R-claim trace
  - `docs/research/canon-decisions/0004-three-layer-coordination-stack.md:1-15` records a primary claim aimed at `ic.intelligence-primitives`
  - `docs/research/canon-decisions/0004-three-layer-coordination-stack.md:47-59` lands only a `docs/project-vision.md` edit and explicitly defers primitive-level work
  - `docs/research/canon-decisions/0007-memory-governance-as-cross-cutting-primitive.md` is the later ADR that actually lands the primitive-level `intelligence-primitives.md` repair
  - Distinct evidence count: 4
- F-013: pass
  - `docs/research/canon-decisions/0006-collective-agency-declination.md:30-37` defends reject disposition by naming a seven-item primitive set built from memory-governance moments
  - `docs/project-vision.md:56-66` names IC's actual seven primitives as Retrieval, Memory, Evidence, Grounding, Evaluation, Agentic Control, and Capability Routing
  - `docs/foundations/intelligence-primitives.md:1-175` preserves that same seven-primitive roster after the memory-governance cleanup
  - `docs/research/canon-decisions/0007-memory-governance-as-cross-cutting-primitive.md` explicitly says memory governance is cross-cutting rather than an eighth primitive
  - Distinct evidence count: 4
- Prior collision check: none
- Dependency check:
  - `round-ic-memory-governance-boundaries`: satisfied, blocking upstream closed before scope-open

## Provisional judgment at scope-open

- F-012 fits `decision: amend`, not supersede: ADR-0004's historical decision still stands, but its primary trace must be repaired so the accepted record points to the project-vision change it actually made.
- F-013 fits `decision: amend`, not supersede: ADR-0006's reject disposition still stands, but its rationale must be recast to use IC's real primitive architecture rather than the incorrect memory-governance substitution.
