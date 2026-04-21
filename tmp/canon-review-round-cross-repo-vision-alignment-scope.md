# Round scope — round-cross-repo-vision-alignment

- Date: 2026-04-21
- Findings covered: F-006, F-010
- Protocol rules invoked: R-1 (evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), ADR amendment/activation discipline from canon-review-protocol v2, Phase 7 master cross-repo session-atomic discipline
- Target allowlist: `spec:spore.*`, `spec:ic.*`, plus the Spore-hosted shared framing carrier `docs/research/connections/canon-framing-cross-repo-vision-alignment.md`
- Repos affected: Spore + Intelligence Commons
- Cross-track dependencies:
  - F-006 -> F-030 (`contextual`): ADR-0023 standardized audience declarations for meta-corpus protocols, not vision docs, but its section shape is a useful sibling pattern
  - F-010 -> F-037 (`satisfied`): repo-topology ratification already landed via `spore:ADR-0020` / `ic:ADR-0010`, so this round can use the ratified trio as the canonical repo map
- ADR slug candidates:
  - Spore ADR-0027 `project-vision-audience-declaration`
  - IC ADR-0016 `project-vision-neighbors-map-reconciliation`
- Shared framing note: `docs/research/connections/canon-framing-cross-repo-vision-alignment.md`
- Session-atomic window required: yes (35 minutes across the framing-note + ADR-draft commits, author-date basis)
- Expected ADR count: 2 per-repo ADRs + 1 shared framing note

## Pre-flight

- Branches verified:
  - Spore: `corpus-review/v1`
  - Intelligence Commons: `corpus-review/v1`
- Explicit-add discipline: in effect
- Spore validator baseline: 9 errors, 30 warnings on 2026-04-21; recorded at `tmp/phase-7/round-cross-repo-vision-alignment-validator-pre.txt`
- ADR numbering / doc_id conventions verified:
  - Spore next ADR: `0027`, doc_id family `spore.canon-decision.*`
  - IC next ADR: `0016`, doc_id family `ic.canon-decision.*`
- Authorized-by rule: both ADRs will carry `authorized-by: ""` because this is a canon-review-v2 round, not a reframing-authorized bundle

## Evidence gate

- F-006: pass
  - `docs/project-vision.md:8-16` still opens directly into thesis text with no audience/scope declaration
  - `docs/research/planning/corpus-foundational-review-methodology.md:136-138` already names the operative audience as `solo-operator -> active contributors across Spore / Intelligence Commons / Poietic Match`
  - `docs/research/corpus-review/research-audience-scoping.md:113-116` says intended audience, scope, and purpose should be explicitly documented
  - `docs/research/corpus-review/research-capstone.md:215-221` names the missing audience declaration as a concrete behind-the-field gap
  - Distinct evidence count: 4
  - Prior collision check: none
  - Dependency check: none

- F-010: pass
  - `intelligence-commons/docs/project-vision.md:16-26` currently calls Spore / IC / BKC the "three repos" of the learning architecture
  - `intelligence-commons/docs/project-vision.md:68-72` later says IC's production-layer semantics belong to federated sibling surfaces in Spore and PM
  - `intelligence-commons/docs/project-vision.md:99-104` maps seasonal execution onto BKC and `koi-processor`, showing a second neighbor map already lives in the same doc
  - `docs/research/planning/corpus-foundational-review-methodology.md:156-159` defines the writable core topology as Spore / Intelligence Commons / Poietic Match, with `koi-processor` analysis-only
  - `docs/research/corpus-review/research-capstone.md:199-203` classifies Spore / IC / PM as the three-repo shared-canon hybrid
  - `intelligence-commons/docs/research/canon-decisions/0010-repo-topology-ratification.md:56-62` ratifies that trio from the IC side
  - Distinct evidence count: 6
  - Prior collision check: none
  - Dependency check: satisfied by ADR-0020 / ADR-0010

## Provisional judgment at scope-open

- F-006 is an additive hygiene repair. The methodology's narrow audience declaration can be harvested into a short `## Intended audience and scope` block at the top of Spore's vision doc without changing the vision's substantive claims.
- F-010 currently points toward a layered repair rather than a winner-take-all replacement:
  - the canon-bearing sibling repo map should align with the ratified Spore / IC / PM trio
  - BKC / Octo / `koi-processor` should remain visible as proving-ground / implementation surfaces, but under a clearly different heading than the canon-bearing repo map
- If ADR drafting shows that the IC doc already uses BKC / Octo as a canon-bearing authority surface rather than an operational proving ground, stop and reassess. This round is authorized to reconcile maps, not to smuggle in a new topology decision.
