# Round scope — round-field-holon-clarification

- Date: 2026-04-20
- Findings covered: F-023
- Protocol rules invoked: R-1 (S1 evidence bar), R-4 (target allowlist), R-7 (r_claim_source integrity), Phase 7 master single-repo commit discipline, spec 09 critical escalation rule
- Target allowlist: `spec:spore.*`, `meta:*`
- Repos affected: Spore
- Cross-track dependencies: none
- Critical escalation dependency: if the round concludes that `field` or `holon` should dissolve as a primitive, F-023 must be re-triaged to foundational-reframing and the canon-review-v2 ADR path stops
- ADR slug candidates:
  - Spore ADR-0016 `field-holon-primitive-distinction`
- Session-atomic window required: no (single-repo)
- Expected ADR count: 1 if clarification holds; 0 if the round escalates

## Pre-flight

- Branch verified: `corpus-review/v1`
- Explicit-add discipline: in effect
- Spore validator baseline: 9 errors, 30 warnings on 2026-04-20
- Frozen-concepts alignment: `field` and `holon` are Spore-native canon primitives and are legitimate Phase 7 concept references even though the P2P-wiki intake vocabulary does not govern them
- ADR numbering / doc_id convention verified:
  - next requested ADR slot for this round: `0016`
  - doc_id family: `spore.canon-decision.*`

## Evidence gate

- F-023 severity bar: pass
  - `docs/foundations/relational-agency-and-holons.md` defines `holon` as the recursive whole/part agent structure
  - `docs/foundations/constitutional-artifacts-and-graph-projections.md` uses holonic recursion to explain zoom-invariant governance structure
  - `docs/foundations/lexicon/field.md` defines `field` as the distributed relational medium / substrate across shared, learning, and relational field surfaces
  - `docs/research/corpus-review/research-capstone.md:185-185` states the scale-relation pressure directly: "A holon at scale N is a field at scale N+1"
  - `docs/research/corpus-review/research-capstone-review.md:165-165` confirms the confusion as a real and useful problem statement
- Distinct evidence count: 5
- Publicly-verifiable evidence count: 2 (`research-capstone.md`, `research-capstone-review.md`)
- Prior collision: none
- Dependency check: none

## Decision point

This round must make the clarification-vs-dissolution call before ADR drafting.

- Dissolution trigger: if source review shows that `field` is only the next-scale view of `holon`, or that `holon` is only the agent-facing view of `field`, one primitive has dissolved into the other and the finding must escalate to foundational-reframing.
- Clarification trigger: if `holon` and `field` still do irreducibly different jobs in current canon, the round proceeds by clarifying the distinction and naming the scale relation explicitly.

## Provisional judgment at scope-open

Proceeding assumption: clarification remains the most defensible outcome.

- `holon` still carries the recursive whole/part unit-of-agency role
- `field` still carries the distributed relational medium / coordination-substrate role
- The capstone scale rule is treated as a relation between the primitives, not as proof that one should dissolve into the other

If ADR drafting disproves that reading, stop the round and escalate instead of forcing ADR-0016.
