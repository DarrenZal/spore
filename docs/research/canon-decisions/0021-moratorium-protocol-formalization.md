---
doc_id: spore.canon-decision.moratorium-protocol-formalization
doc_kind: decision-record
status: active
adr_number: "0021"
opened-on: 2026-04-20
closed-on: 2026-04-20
covers:
  - F-027
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-governance-process:R1
  - spec:spore.corpus-review.research-canonical-layering:R1
r_claim_statement: |
  Moratorium mechanics that carry cross-phase governance weight should live as a named protocol artifact rather than as plan-embedded rules, so the constraint has a stable citation target, audit surface, and amendment path narrower than the full review plan.
supported_by:
  - docs/research/planning/reframing/reframing-moratorium-formalization.md
  - docs/research/planning/corpus-foundational-review-v1-plan.md:37-58
  - docs/research/planning/corpus-foundational-review-methodology.md:107-113
  - docs/research/corpus-review/research-governance-process.md:20-20
  - docs/research/corpus-review/research-canonical-layering.md:178-178
  - tmp/meta-corpus-inventory.tsv
authorized-by: reframing-moratorium-formalization
queue_reference: "Phase 7 reframing-moratorium-formalization (F-027)"
affects_canon:
  - docs/research/planning/moratorium-protocol-v1.md
  - tmp/meta-corpus-inventory.tsv
related_adrs: []
shared_framing: ""
concepts:
  - memory-governance
---

# ADR-0021 — Moratorium Protocol Formalization

## Status

active (drafted and activated 2026-04-20 under `reframing-moratorium-formalization`)

## Context

F-027 identified that the corpus-review moratorium is already operating as a governance surface, but its operative rule set still lives only inside `docs/research/planning/corpus-foundational-review-v1-plan.md`. The plan carries the phase-state table, the safety-critical exception categories, the approver rule, the exception-log convention, and the reapply-at-close discipline, while `tmp/meta-corpus-inventory.tsv` still marks the moratorium surface as `has-formal-doc=FALSE`.

That makes the current moratorium awkward to cite and awkward to amend. The methodology already treats the plan snapshot plus phase addenda as the active moratorium surface, so the constraint is real and load-bearing. But it has no standalone doc identity, no narrower citation target than the full review plan, and no dedicated protocol artifact for later governance work to point at.

This ADR therefore needs to authorize a new protocol file rather than restating the rule set inline. The protocol is the artifact of record; the ADR captures the decision to mint and admit it.

## Decision

Create `docs/research/planning/moratorium-protocol-v1.md` as the standalone authoritative protocol for corpus-review moratorium mechanics.

### Protocol contents authorized by this ADR

The new protocol must harvest, without widening, the already-operative rules from `docs/research/planning/corpus-foundational-review-v1-plan.md:37-58`:

1. the phase-by-phase moratorium state table;
2. the safety-critical exception categories and qualifying triggers;
3. the approver role;
4. the audit-log convention at `tmp/moratorium-exceptions.md`; and
5. the rule that moratorium coverage reapplies at exception close.

### Inventory admission

Update the existing `moratorium-mechanics` row in `tmp/meta-corpus-inventory.tsv` so it points to `spore/docs/research/planning/moratorium-protocol-v1.md` and flips `has-formal-doc` from `FALSE` to `TRUE`.

This ADR does not revise the underlying rule substance. It formalizes the carrier.

## Rationale

The defect in F-027 is artifact shape, not missing rule content. The plan already contains the operative moratorium mechanics. What is missing is the named governance surface that later plans, ADRs, and exception records can cite without dragging the whole review plan along with them.

Formalizing the moratorium as its own protocol solves the narrow problem directly:

- it gives the rule set a stable citation target;
- it preserves the existing exception/audit discipline rather than improvising a new one; and
- it lets the inventory identify the moratorium as a formal meta-corpus artifact instead of a plan-embedded convention.

Because the inventory row is repointed to the standalone protocol in this bundle, the artifact also inherits FR-20's meta-corpus double-cooling behavior automatically for later amendments. No extra FR-20 edit is needed.

## Consequences

- `docs/research/planning/moratorium-protocol-v1.md` becomes the standalone carrier for the corpus-review moratorium mechanics.
- `tmp/meta-corpus-inventory.tsv` now records the moratorium surface as having a formal doc.
- The plan remains the historical source of the harvested rules, but the protocol is now the narrower governance citation target.
- Future substantive changes to moratorium mechanics should target the protocol artifact rather than silently editing plan prose alone.

## Evidence

- F-027 evidence gate: pass
  - the proposal source bundle carries 9 cited sources and 9 publicly-verifiable sources
  - `docs/research/planning/corpus-foundational-review-v1-plan.md:37-58` contains the operative moratorium rule set being harvested
  - `docs/research/planning/corpus-foundational-review-methodology.md:107-113` explicitly treats the plan snapshot plus phase addenda as the current moratorium surface
  - `tmp/meta-corpus-inventory.tsv` still marked `moratorium-mechanics` as `has-formal-doc=FALSE`
- Distinct evidence count: 9
- Publicly-verifiable evidence count: 9

## Diff summary

- `docs/research/planning/moratorium-protocol-v1.md`: new standalone protocol harvested from the review plan's moratorium section
- `tmp/meta-corpus-inventory.tsv`: repointed the existing `moratorium-mechanics` row to the new protocol file and flipped `has-formal-doc` to `TRUE`
