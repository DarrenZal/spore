---
doc_id: spore.canon-decision.primitive-roster-boundary-cleanup
doc_kind: decision-record
status: active
adr_number: "0025"
opened-on: 2026-04-21
closed-on: 2026-04-21
covers:
  - F-035
  - F-036
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-capstone:R1
  - spec:spore.corpus-review.research-canonical-layering:R1
r_claim_statement: |
  The concept roster's `primitive-class` flag should be reserved for irreducible canon concepts. Bundle labels that merely package already-named primitives and implementation names that only identify a current materialization should be demoted even if they previously satisfied the inventory admission heuristics.
supported_by:
  - docs/research/planning/corpus-foundational-review-findings.md:1156-1230
  - docs/research/planning/corpus-foundational-review-methodology.md
  - tmp/concept-roster.tsv
  - docs/foundations/spore-instance-model.md:29-31
  - docs/foundations/spore-instance-model.md:81-88
  - docs/project-vision.md:112-112
  - docs/project-vision.md:165-165
  - docs/README.md:28-28
  - docs/foundations/mycorrhizal-federation-protocol.md:144-148
  - /Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:56-66
  - /Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:9-23
  - /Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:9-11
authorized-by: ""
queue_reference: "Phase 7 round-primitive-roster-boundaries (F-035, F-036)"
affects_canon:
  - tmp/concept-roster.tsv
  - docs/research/planning/corpus-foundational-review-methodology.md
related_adrs:
  - intelligence-commons:ADR-0011-memory-layer-model-constitutional-operational-split
  - spore:ADR-0019-graph-primitive-unification
shared_framing: ""
concepts:
  - instance-model
  - spore-instance-model
  - intelligence-primitives
  - memory-layer-model
  - koi-net
---

# ADR-0025 — Primitive Roster Boundary Cleanup

## Status

active (drafted and activated 2026-04-21 for `round-primitive-roster-boundaries`)

## Context

F-035 and F-036 both identify the same failure mode in `tmp/concept-roster.tsv`: the derivative `primitive-class` flag still treats bundle labels and implementation aliases as if they were irreducible canon concepts.

The upstream dependency is now resolved. `round-ic-memory-governance-boundaries` cleaned up Intelligence Commons' actual primitive set, so the Spore-side roster can be judged against the corrected post-Phase-7.6 state rather than the older IC bundle surfaces.

The current methodology also leaves the primitive-class rule under-specified. The Phase 2 plan defined the roster flag as an inventory heuristic with four admission criteria and a later counterfactual probe, but `corpus-foundational-review-methodology.md` never copied that rule into the operative methodology text. That omission made it too easy for document titles, bundle labels, and current implementation names to persist as `primitive-class=TRUE` after the round evidence had already shown they were losslessly paraphrasable.

## Decision

Demote five concept-roster entries from `primitive-class=TRUE` to `primitive-class=FALSE`.

| Entry | Category | Decision rationale | Retained role |
|---|---|---|---|
| `instance-model` | bundle label | The label only names the canon/node/agent/site composition already spelled out elsewhere; removing it does not reduce expressivity once those lower-level terms remain. | document / bundle handle |
| `spore-instance-model` | bundle label | `spore-instance-model.md` explicitly says `"Instance" is not a new primitive`; the slug names the document and composition pattern, not an additional concept. | document title / bundle handle |
| `intelligence-primitives` | bundle label | The title is a carrier for IC's primitive set; it is not itself one more primitive beyond retrieval, memory, evidence, grounding, evaluation, agentic control, and capability routing. | document title / bundle handle |
| `memory-layer-model` | bundle label | The model label paraphrases the five named layers plus their coordination boundary. The model is a structure for relating primitives, not an irreducible primitive itself. | document title / model handle |
| `koi-net` | implementation alias | Spore canon treats KOI-net as the current federation transport materialization. The protocol and instance-model docs explicitly keep substrate and transport concerns definitionally broader than KOI. | implementation name / current materialization |

### Methodology clarification

The methodology now carries the explicit primitive-class rule that this round applies:

1. The Phase 2 roster flag is an admission heuristic, not a canon decision by itself.
2. A concept may enter the review inventory as `primitive-class` if it meets at least two of the four Phase 2 criteria.
3. The Phase 4 counterfactual probe remains decisive at review time.
4. Bundle labels, model names, and current implementation names fail the primitive-class bar if they can be losslessly paraphrased by already-named concepts or by a transport-agnostic canon boundary.

## Rationale

The repair is narrow but important.

- It preserves the distinction between an inventory heuristic and the canon itself. The roster is allowed to over-include during discovery, but it must not keep discovery-time conveniences elevated once the review evidence shows they are derivative.
- It aligns Spore's roster with the IC cleanup that already separated actual primitives from governance or model carriers in Phase 7.6.
- It keeps implementation specificity out of the primitive layer. `koi-net` still matters operationally, but not as a first-order concept on par with substrate, federation, graph, or sensors.

This is also the consistent continuation of ADR-0019. That ADR demoted a duplicate graph primitive alias after the counterfactual probe showed no expressive loss. ADR-0025 applies the same discipline to bundle and implementation labels that likewise survive only as handles or glosses.

## Consequences

- `tmp/concept-roster.tsv` now demotes exactly five entries from primitive-class status.
- The five labels remain usable as document titles, model names, or implementation handles where that wording is helpful.
- No Spore or IC foundation document is renamed by this ADR.
- The methodology now states the primitive-class admission rule and its counterfactual override directly, reducing the chance that future inventory passes re-promote bundle labels as primitives.

## Evidence

- F-035 evidence gate: pass
  - `tmp/concept-roster.tsv` previously marked all four bundle-label entries as `primitive-class=TRUE`
  - `docs/foundations/spore-instance-model.md:81-88` explicitly says `"Instance" is not a new primitive`
  - `docs/project-vision.md:112-112` and `docs/README.md:28-28` paraphrase the instance model as canon/node/agent/site composition
  - `/Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:56-66` lists the actual IC primitive set rather than treating `intelligence-primitives` as an additional primitive
  - `/Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:9-11` presents the memory-layer model as five named layers, not as a sixth primitive
  - Distinct evidence count: 10
- F-036 evidence gate: pass
  - `tmp/concept-roster.tsv` previously marked `koi-net` as `primitive-class=TRUE`
  - `docs/project-vision.md:165-165` calls it the current federation transport implementation
  - `docs/foundations/spore-instance-model.md:29-31` says KOI is one materialization, not the definition
  - `docs/foundations/mycorrhizal-federation-protocol.md:144-148` keeps the protocol transport-agnostic while naming KOI only as the current implementation
  - Distinct evidence count: 4

## Diff summary

- `tmp/concept-roster.tsv`: demoted exactly five rows from primitive-class status
- `docs/research/planning/corpus-foundational-review-methodology.md`: restored the missing primitive-class admission rule and clarified the counterfactual override for bundle labels and implementation aliases
