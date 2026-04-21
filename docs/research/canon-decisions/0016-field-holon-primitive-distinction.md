---
doc_id: spore.canon-decision.field-holon-primitive-distinction
doc_kind: decision-record
status: active
adr_number: "0016"
opened-on: 2026-04-20
closed-on: 2026-04-20
covers:
  - F-023
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-capstone:R1
  - spec:spore.corpus-review.research-capstone-review:R1
r_claim_statement: |
  `holon` and `field` remain distinct Spore primitives. `holon` names the recursive whole/part unit of agency; `field` names the distributed relational medium or coordination substrate in which holons become mutually legible and coordinate. The capstone's scale pressure is resolved as a relation between those primitives rather than a merger: a holon at scale N may appear as a field at scale N+1, but that perspectival shift does not dissolve either primitive.
supported_by:
  - docs/foundations/relational-agency-and-holons.md
  - docs/foundations/lexicon/field.md
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
  - docs/research/corpus-review/research-capstone.md:185-185
  - docs/research/corpus-review/research-capstone-review.md:165-165
authorized-by: ""
queue_reference: "Phase 7 round-field-holon-clarification (F-023)"
affects_canon:
  - docs/foundations/relational-agency-and-holons.md
  - docs/foundations/lexicon/field.md
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
related_adrs:
  - spore:ADR-0008-collective-agency-at-field
concepts:
  - field
  - holon
---

# ADR-0016 — Field and Holon Primitive Distinction

## Status

active (drafted and activated 2026-04-20)

## Context

F-023 is the corpus review's only S1 finding. The ambiguity is not local wording drift; it sits at the primitive layer. Current Spore canon uses `holon` for recursive whole/part agency and `field` for the distributed medium of coordination, but several passages leave open whether those are two names for the same self-similar structure or two genuinely distinct primitives.

Phase 7.9 carries a hard escalation rule: if source review shows that one primitive should dissolve into the other, the round must stop and re-triage to foundational-reframing rather than resolve the issue through a canon-review-v2 ADR.

The round evidence does not support dissolution. ADR-0008 already makes `field` load-bearing as the collective-agency substrate, while `relational-agency-and-holons.md` and `constitutional-artifacts-and-graph-projections.md` still rely on `holon` to name bounded recursive agency. The capstone's phrase "a holon at scale N is a field at scale N+1" is therefore treated as a scale-relation pressure that Spore must clarify, not as proof that one primitive should be deleted.

## Decision

Proceed on the clarification path. `field` and `holon` remain distinct primitives in Spore canon.

1. `holon` names the recursive whole/part unit of agency: a bounded entity that can maintain enough coherence to perceive, decide, act, and interface as one node while remaining nested in larger wholes.
2. `field` names the distributed relational medium or substrate in which multiple holons, signals, commitments, evidence, and resources become mutually legible, coordinate, and revise over time.
3. The relation between them is scale-sensitive, not identity-based: a holon at scale N may appear as a field at scale N+1. That sentence names a perspective shift across adjacent scales, not a reason to dissolve either primitive.

Edit three foundation surfaces to carry that distinction consistently:

- `docs/foundations/relational-agency-and-holons.md`
- `docs/foundations/lexicon/field.md`
- `docs/foundations/constitutional-artifacts-and-graph-projections.md`

No primitive is dissolved. No frozen-vocabulary change is introduced. No foundational-reframing escalation is triggered.

## Rationale

The clarification path is stronger than the dissolution path because the two terms are still doing different jobs in active canon.

- Dissolving `field` into `holon` would erase ADR-0008's substrate / distributed-medium role and would make collective agency read as if it were only a property of bounded agents.
- Dissolving `holon` into `field` would erase the whole/part agency distinction that the holarchy and zoom-invariance surfaces still need in order to explain recursive bounded action.
- Treating the capstone's scale sentence as a relation rule preserves the useful insight without forcing a false identity claim.

The clean repair is therefore to name both the distinction and the bridge:

- distinct primitives by function
- explicit scale relation across adjacent levels
- consistent cross-references where current canon talks about recursive structure

## Consequences

- Spore canon now treats `holon` as the agent-structural primitive and `field` as the substrate / relational primitive.
- The capstone's scale-pressure is preserved as a rule of interpretation rather than left as an unresolved ambiguity.
- ADR-0008 is preserved rather than undermined: collective agency stays placed at `field`.
- Downstream modeling work gets a stable representation choice: use `holon` when the question is bounded recursive agency; use `field` when the question is distributed coordination medium.

## Evidence

- F-023 evidence gate: pass
  - `docs/foundations/relational-agency-and-holons.md` defines the holon as a whole and a part with its own integrity
  - `docs/foundations/constitutional-artifacts-and-graph-projections.md` uses holonic recursion to explain zoom-invariant governance structure
  - `docs/foundations/lexicon/field.md` defines field as the distributed relational medium of coordination
  - `docs/research/corpus-review/research-capstone.md:185-185` states the scale-relation pressure directly
  - `docs/research/corpus-review/research-capstone-review.md:165-165` confirms the problem statement is real and useful
- Distinct evidence count: 5
- Publicly-verifiable evidence count: 2
- Dissolution test: fail
  - the source set does not require deleting either primitive
  - the source set does require naming their distinct jobs and their scale relation explicitly

## Diff summary

- `docs/foundations/relational-agency-and-holons.md`: adds a direct holon-vs-field clarification paragraph
- `docs/foundations/lexicon/field.md`: adds the reciprocal cross-reference and states the scale relation as non-identity
- `docs/foundations/constitutional-artifacts-and-graph-projections.md`: aligns zoom-invariance language with the clarified distinction
