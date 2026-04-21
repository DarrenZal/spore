---
doc_id: spore.planning.corpus-foundational-review-methodology
doc_kind: planning
status: draft
depends_on:
  - spore.planning.canon-review-protocol
  - spore.planning.learning-field-intake-protocol
  - spore.project-vision
---

# Corpus Foundational Review Methodology

This document governs the diagnostic side of `corpus-foundational-review-v1` before any canon-edit execution. It translates the plan into a repeatable review method, names the evidence thresholds, declares the priors, and fixes the v3 vocabulary-admission scope that Phase 4 is allowed to evaluate. It is a methodology document, not a finding memo: candidate terms remain proposals until a later phase resolves them.

## Finding types

| Type | Working definition |
|---|---|
| `missing` | A layer, concept, rule, dependency, or artifact that the corpus needs but does not currently name or carry. |
| `misplaced` | The material exists, but it sits in the wrong document, layer, or repo. |
| `wrong-level` | The corpus names something at the wrong ontological level: primitive, derived, pattern, protocol, or meta-rule are being mixed. |
| `overlapping/redundant` | Two or more terms materially cover the same work without a defended distinction. |
| `should-be-split` | One concept or document is carrying multiple separable jobs and should be decomposed. |
| `should-be-merged` | Multiple surfaces should be collapsed because their distinction is artificial or no longer doing work. |
| `over-specified` | A concept is carrying too much narrowed meaning relative to the cross-tradition evidence. |
| `over-abstract` | A concept is too vague to govern practical interpretation or implementation. |
| `naming-wrong` | The function is right but the current label misleads, under-names, or carries the wrong lineage. |
| `contradictory` | Two corpus surfaces cannot both stand as written without explicit tension handling. |
| `dead-weight` | A concept or layer can be removed without expressive loss because other surfaces already do the work. |
| `dissolve-entirely` | A concept, layer, or artifact family should be retired rather than repaired. |

## Severity tiers

| Tier | Meaning | Minimum bar |
|---|---|---|
| `S1 foundational` | Changes the declared priors, canon scope, primitive set, repo topology, or other load-bearing review assumptions. | At least 5 sources, at least 2 publicly verifiable, plus cross-repo consultation record. |
| `S2 structural` | Changes layering, boundary placement, concept relations, or meta-corpus machinery without revising first principles. | At least 3 sources, at least 1 publicly verifiable. |
| `S3 canonical` | Canon-level correction or addition inside the accepted frame. | At least 3 sources. |
| `S4 editorial` | Wording, formatting, or local clarification that does not alter structure. | 1 source or editorial discretion. |

Publicly verifiable means open-access, Wayback-captured, or committed-to-repo snapshots. Subscription-only sources and personal snapshots do not satisfy the public-verifiability minimum by themselves.

## Evidence bar

The default evidence ladder is `5 / 3 / 3 / 1` for `S1 / S2 / S3 / S4`.

For this review, the bar is applied as follows:
- `S1`: 5+ sources, 2+ publicly verifiable, and a cross-repo consultation artifact.
- `S2`: 3+ sources, 1+ publicly verifiable.
- `S3`: 3+ sources using the canon-review v2 default.
- `S4`: 1 source or direct editorial judgment.

Where the object under review is meta-corpus or repo-topology rather than a bridge-note claim, the evidence bundle may be composed from the artifact itself, research R-claims, and observed contradictions or metrics. The threshold still maps to the same severity tier.

## Primitive-class inventory rule

Phase 2's `tmp/concept-roster.tsv` uses `primitive-class` as an inventory prioritization flag, not as a canon decision by itself. A concept enters the review inventory as `primitive-class` if it meets at least 2 of these 4 criteria:

1. It is declared primitive in `constitutional-artifacts-and-graph-projections.md` or an elevating ADR.
2. It appears in at least 5 canon-layer docs.
3. It has a dedicated lexicon entry, when a lexicon surface exists.
4. It is referenced as foundational by at least 2 other concepts' definitions.

These criteria are intentionally permissive for discovery. They do not settle the canon question on their own.

Phase 4's counterfactual probe remains decisive: ask "if this concept did not exist, what could the corpus no longer express?" If the answer is "nothing material" because the term losslessly paraphrases already-named concepts, the finding should be recorded as `dead-weight`, `over-specified`, or another level-correction and the roster entry should be demoted from `primitive-class`.

Two failure modes should be treated as explicit primitive-class exclusions even when the admission heuristic was initially met:

- bundle or model labels that only package a composition of already-named concepts
- implementation or materialization names that only identify the current substrate, transport, or tooling choice for a broader canon concern

## Rationale-review rule

Read ADR rationale before calling a concept redundant. A concept that looks duplicative at the label level may have been deliberately kept distinct because it blocks a known collapse, preserves an opposition, or protects a layer boundary. Phase 4 and Phase 5 therefore treat prior decision rationale as admissible evidence against premature merges or dissolutions.

## Moratorium scope

Canon edits on `main` are suspended during Phases `2–5`. All review work runs on `corpus-review/v1` branches.

| Phase | Canon edits allowed? |
|---|---|
| `0–1` | No. Moratorium declaring / declared only. |
| `2–6` | Only on `corpus-review/v1`, never on `main`. |
| `7` | Round-scoped ADR edits on `corpus-review/v1`; `main` untouched. |
| `8` | Editorial (`S4`) edits on `corpus-review/v1`. |
| `9` | Merge `corpus-review/v1` to `main`; moratorium lifted at close. |

The only exception is the plan's safety-critical path: validator-breaking Spore regressions, federation-breaking projection failures, or security/data-loss/outage conditions. Any exception must be logged and is not inferred by default.

## Frozen-concepts v3 scope

Phase 4 is allowed to evaluate the following vocabulary proposals from `research-capstone.md` §7. These are candidate admissions or clarifications, not pre-admitted terms. External review changes already incorporated into the capstone govern this table: `identity-as-relational` is recounted to `N=5`; `collective-intentionality` is already frozen under `collective-agency`; `reproduction-continuity` is treated consistently as a primitive candidate; and `attestation-of-execution` remains only one narrower reading of `evidence`.

| Term | Capstone placement | Annotation class | Methodology note |
|---|---|---|---|
| `care` | primitive candidate | differentiated | Distinct from `reproductive-commoning` and `commons-as-verb`; review as asymmetric relation, not commoning-only shorthand. |
| `protocol` | primitive candidate | differentiated | Distinct from frozen `protocol-society`; review as rule-level structure, not macro-social order. |
| `reproduction-continuity` | primitive candidate | differentiated | Distinct from frozen `reproductive-commoning`; broader renewal / survival / replication surface. |
| `trust` | derived / observable | differentiated | Distinct from `reputation-market`; internal semantic split is part of why it stays derived for now. |
| `reciprocity` | derived / observable | differentiated | Distinct from `gift-obligation` and `solidarity-substrate`; derived placement remains provisional because symmetry is contested. |
| `identity-as-relational` | derived / observable | new | External review forced the recount from 9 to 5; review only the relational subset, not every identity semantics variant. |
| `attestation-of-execution` | derived / observable | new | Narrower reading of `evidence`; explicitly not a corpus-wide settled rename. |
| `algedonic-signal` | derived / observable | new | Sub-type candidate under `signal`, not a primitive proposal. |
| `double-boundary` | derived / observable | differentiated | Distinct from `boundary-commoning` and `filtering-membrane`; review as analytic axis on `membrane`. |
| `trace` / `log` | derived / observable | differentiated | Distinct from `stigmergy` and `memory-governance`; review as audit / trace substrate. |
| `stigmergy` | derived / observable | duplicate | Already frozen in v2; Phase 4 may only revisit level-placement, not admit it anew. |
| `attention` | deferred | new | Deferred unless Phase 4 finds a concrete expressivity failure. |
| `memory` | deferred | differentiated | Distinct from `memory-governance`; defer generic memory until a real coordination gap forces it. |
| `state` | deferred | new | Deferred unless invariants or implementation pressure require first-class treatment. |
| `power` / `authority` | deferred | differentiated | Distinct from `power-capture`; low count, but still a live tension tied to care and asymmetry. |
| `collective-intentionality` / `we-mode` / `joint-commitment` | deferred | duplicate | `collective-intentionality` already exists as alias under frozen `collective-agency`; only adjacent terms remain open. |
| `participatory-sense-making` | deferred | differentiated | Distinct from `enactive-cognition` and `structural-coupling`; possible Side-B candidate, not a footnote. |
| `evidence` | demotion / glossary clarification | rename-discipline | Keep umbrella term; do not narrow corpus-wide to execution-attestation. |
| `signal` | glossary clarification | current canon term | Keep primitive; Phase 4 owes an explicit answer to the enactive objection. |
| `holon` | glossary clarification | current canon term | Keep primitive with provenance note rather than forced replacement. |
| `commitment` | glossary clarification | current canon term | Keep primitive while documenting the live REA and collective-agency disagreements. |
| `field` | glossary clarification | current canon term | Keep primitive; review its relation to substrate, site, and continuity pressure. |
| `membrane` | glossary clarification | current canon term | Keep primitive with explicit permeability and double-boundary dimensions. |

Deferred improvements identified by external review but not required for Phase 1 are parked at [capstone-v2-backlog.md](/Users/darrenzal/projects/spore/tmp/capstone-v2-backlog.md).

## Meta-corpus layer

The meta-corpus layer is part of review scope because these artifacts govern how the canon is changed or interpreted:
- `docs/research/planning/canon-review-protocol.md` as the canon-edit protocol surface.
- `docs/research/planning/learning-field-intake-protocol.md` as the intake protocol surface.
- `docs/research/concepts-p2p-wiki.yaml` as frozen-concepts infrastructure.
- `scripts/validate_spec_dag.py` as validator-rule surface.
- The plan snapshot and phase addenda as the current moratorium and branch-discipline surface.
- Bridge-note format convention as defined by canon-review protocol v2 §§2 and 5 plus intake protocol v1 §3.
- Learning-field structure as currently documented in IC's `project-learning-membrane` pattern and `learning-field-roadmap`.

These are reviewable as artifacts, not only as background context.

## Audience

The current audience is `solo-operator -> active contributors across Spore / Intelligence Commons / Poietic Match`. That is narrow on purpose: the methodology assumes the reader can inspect all three repos, understand canon-review v2 conventions, and distinguish canon from research and planning scaffolds. If the review scope expands to external contributors or public-facing explanation, this section must be revisited with explicit prerequisite and reader-scoping changes.

## Priors

These priors are non-negotiable during v1 unless a later `prior-revision-proposal` succeeds.

| Prior | Short definition | Rationale | What evidence reopens it |
|---|---|---|---|
| `care primacy` | Reproduction and care are constitutive of coordination, not optional moral garnish. | Capstone §§1 and 3 treat care and reproduction/continuity as structural absences, not aesthetic additions. | Cross-tradition evidence showing care can be fully paraphrased by symmetric commitments without expressive loss. |
| `polycentric-not-hierarchical` | Durable coordination should distribute authority across interacting centers rather than collapse upward. | Existing canon and research both center polycentric governance and boundary-mediated federation over singular command. | Stronger evidence that the current corpus fails without stable hierarchy or that polycentricity is causing unrepairable governance incoherence. |
| `commons-over-market` | Commons logics are primary explanatory and design frames; market forms are constrained secondary cases. | Capstone §§1–3 and prior canon decisions repeatedly treat market absorption and capture as failure modes, not defaults. | Evidence that market coordination better preserves care, sovereignty, and anti-capture aims than commons-grounded coordination in the corpus's own target domains. |
| `pluriversal openness` | Coordination must leave room for ontological plurality rather than force one-world flattening. | Capstone §2 and prior canon decisions preserve pluriversal incommensurability as an active structural tension, not a localized exception. | Evidence that pluriversal scope makes the corpus unusable and that a one-world canonical frame solves more than it erases. |
| `sovereign identity` | Identity and agency claims should preserve participant sovereignty rather than dissolve it into platform-legible tags. | The capstone and external review both show identity semantics are contested; the methodology keeps sovereignty as the default guardrail during that dispute. | Evidence that sovereignty-preserving identity makes the core coordination surfaces impossible to express or verify. |

## Adversarial-review arrangement

The findings document is reviewed with a bakeoff pattern: Claude and Codex both inspect the same prose artifact and propose additions, removals, and severity adjustments. That review operates at the reasoning and evidence-trace level, not as a full re-verification of every primary source. If Codex is unavailable, the review may proceed solo only if the fallback is logged with reason and timestamp; solo review is a degraded mode, not the preferred operating condition.

## Repo-topology review scope

Topology review covers the three active repos as writable scope: Spore, Intelligence Commons, and Poietic Match. `darren-workflow`, `flowcoding`, and `regenai/koi-processor` remain analysis-only inputs for topology assessment, contributor overlap, and tooling / coordination context. No edits are made there during this review.

## Phase boundaries

| Phase | Spore SHA | Intelligence Commons SHA | Poietic Match SHA | Notes |
|---|---|---|---|---|
| `0` | `6390b26dc0723e6c90579f9d3dc3982e019e67ed` | `84213dd48ddfcfa44bb3b0326f5107685b232775` | `33cfb10fca9bbc7dce58ff02d078187e263fb67e` | Phase 0 snapshot and branch setup complete. |
| `1` | `edf0caa6c505a4f69b11ee678715c9dc3007da81` | `5a4ab624e918d22289b65f05efae60dbb85eb2e6` | `ba48fb45e01da41f5c6a8bd0d20eb464e927b8cb` | Methodology + moratorium declarations. |
| `2` | `6a99cf789be41f7cea31c62df86d1e36caeb601e` | `N/A` | `N/A` | Corpus inventory is Spore-only. |
| `3` | `PENDING` | `PENDING` | `PENDING` | Deep research report. |
| `4` | `PENDING` | `PENDING` | `PENDING` | Diagnostic. |
| `5` | `3788802` | `cacaa47` | `ba48fb4` | Triage closed 2026-04-20; findings-doc revision 4 (39 findings → 25 canon-review-v2 / 13 foundational-reframing / 1 editorial / 0 prior-revision); approval memo signed at `tmp/triage-approval-2026-04-20.md`. IC/PM SHAs unchanged from Phase 1 (triage happened on Spore only). |
| `6` | `PENDING` | `PENDING` | `PENDING` | Foundational reframing, if triggered. |
| `7` | `PENDING` | `PENDING` | `PENDING` | Canon-review rounds. |
| `8` | `PENDING` | `PENDING` | `PENDING` | Editorial pass. |
| `9` | `PENDING` | `PENDING` | `PENDING` | Propagation / merge close. |
