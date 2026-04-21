# Round scope — round-primitive-roster-boundaries

- Date: 2026-04-21
- Findings covered: F-035, F-036
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), Phase 7 master single-repo commit discipline, spec 10 primitive-roster boundary cleanup rule
- Target allowlist: `spec:spore.*`, `spec:ic.*`
- Repos affected: Spore
- Cross-track dependencies:
  - blocking: `round-ic-memory-governance-boundaries` closed via `tmp/canon-review-round-ic-memory-governance-boundaries-close.md`; F-035 depends on the post-cleanup IC primitive set so the demotion test uses the corrected upstream state
- ADR slug candidates:
  - Spore ADR-0025 `primitive-roster-boundary-cleanup`
- Session-atomic window required: no (single-repo)
- Expected ADR count: 1

## Pre-flight

- Branch verified: `corpus-review/v1`
- Explicit-add discipline: in effect
- Upstream dependency verified: `tmp/canon-review-round-ic-memory-governance-boundaries-close.md` exists
- Spore validator baseline: 9 errors, 30 warnings on 2026-04-21; recorded at `tmp/phase-7/round-primitive-roster-boundaries-validator-pre.txt`
- ADR numbering / doc_id convention verified:
  - next requested ADR slot for this round: `0025`
  - doc_id family: `spore.canon-decision.*`
- Authorized-by rule: ADR-0025 will carry `authorized-by: ""` because this is a canon-review-v2 round, not a reframing-authorized bundle

## Evidence gate

- F-035: pass
  - `tmp/concept-roster.tsv` rows 190, 193, 227, and 362 still mark `instance-model`, `intelligence-primitives`, `memory-layer-model`, and `spore-instance-model` as `primitive-class=TRUE`
  - `docs/foundations/spore-instance-model.md:81-88` explicitly says `"Instance" is not a new primitive`
  - `docs/project-vision.md:112` and `docs/README.md:28` paraphrase the instance model as canon/node/agent/site composition rather than a standalone primitive
  - `/Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:56-66` and `/Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:9-11` expose the supposedly primitive labels as named bundles of lower-level components
  - Distinct evidence count: 8
- F-036: pass
  - `tmp/concept-roster.tsv` row 207 still marks `koi-net` as `primitive-class=TRUE`
  - `docs/project-vision.md:165` identifies `koi-net` as the current federation transport implementation
  - `docs/foundations/spore-instance-model.md:29-31` states KOI is one materialization rather than the definition
  - `docs/foundations/mycorrhizal-federation-protocol.md:144-148` makes the protocol transport-agnostic and names KOI only as the present implementation
  - Distinct evidence count: 4
- Prior collision check: none
- Dependency check:
  - `round-ic-memory-governance-boundaries`: satisfied; upstream close memo landed before scope-open

## Provisional judgment at scope-open

- The five target rows fail the primitive-class bar for two different reasons that still fit one ADR:
  - `instance-model`, `spore-instance-model`, `intelligence-primitives`, and `memory-layer-model` are bundle labels whose contents are already expressible by lower-level canon primitives
  - `koi-net` is an implementation-name alias for substrate / transport concerns that current canon already carries elsewhere
- The methodology should likely be tightened in the same round because it currently omits the explicit Phase 2 primitive-class admission rule that this ADR relies on.
