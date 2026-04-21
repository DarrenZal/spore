---
doc_id: spore.canon-decision.protocol-audience-declaration-standard
doc_kind: decision-record
status: active
adr_number: "0023"
opened-on: 2026-04-20
closed-on: 2026-04-20
covers:
  - F-030
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-audience-scoping:R1
  - spec:spore.corpus-review.research-capstone:R1
r_claim_statement: |
  Meta-corpus protocols that govern canon review, learning-field intake, foundational reframing, and moratorium enforcement should each declare intended audience, prerequisites, scope, and out-of-scope boundaries so the governance stack states its narrow operator assumptions explicitly rather than leaving them implicit.
supported_by:
  - docs/research/planning/reframing/reframing-protocol-audience-declaration.md
  - docs/research/planning/corpus-foundational-review-methodology.md:118-120
  - docs/research/planning/canon-review-protocol.md
  - docs/research/planning/learning-field-intake-protocol.md
  - docs/research/planning/foundational-reframing-protocol-v1.md
  - docs/research/corpus-review/research-audience-scoping.md:113-116
  - docs/research/corpus-review/research-capstone.md:323-323
authorized-by: reframing-protocol-audience-declaration
queue_reference: "Phase 7 reframing-protocol-audience-declaration (F-030)"
affects_canon:
  - docs/research/planning/canon-review-protocol.md
  - docs/research/planning/learning-field-intake-protocol.md
  - docs/research/planning/foundational-reframing-protocol-v1.md
  - docs/research/planning/moratorium-protocol-v1.md
related_adrs:
  - spore:ADR-0021-moratorium-protocol-formalization
shared_framing: ""
concepts:
  - memory-governance
---

# ADR-0023 — Protocol Audience Declaration Standard

## Status

active (drafted and activated 2026-04-20 under `reframing-protocol-audience-declaration`)

## Context

F-030 identifies a presentation gap across the meta-corpus protocol stack. The operative protocols explain purpose, flow, and schema, but they do not say plainly who is expected to run them or what background they assume. `corpus-foundational-review-methodology.md` already states that the actual audience is narrow: a solo operator or active contributor who can inspect Spore, Intelligence Commons, and Poietic Match, understands canon-review conventions, and can distinguish canon from planning and research scaffolds. That assumption remains implicit in the protocols that govern the work.

The gap is largest where the protocol stack reads like reusable public procedure while functioning as operator-facing governance. `canon-review-protocol.md` and `learning-field-intake-protocol.md` both host the bridge-note convention, but neither currently tells the reader who is expected to author, review, or consume that machinery. `foundational-reframing-protocol-v1.md` already requires audience/prerequisite declarations in certain proposals via FR-7, yet the protocol itself does not declare its own audience. `moratorium-protocol-v1.md` now exists as a standalone governance carrier via ADR-0021, so the standard target set is four protocols, not three.

This ADR closes the gap by standardizing one additive section shape while keeping the text tailored per protocol. The embedded bridge-note convention is covered by the parent protocol's audience block; it does not need a repeated sub-block inside each schema excerpt.

## Decision

Adopt `## Intended audience and prerequisites` as a required top-level section for the four operative meta-corpus protocols named below.

### Standard block shape

Each protocol carries the same four declaration lines:

- `Audience`
- `Prerequisites`
- `Scope`
- `Out of scope`

The section heading is standardized, but the content must be written for the actual operator surface of the specific protocol.

### Protocol coverage

Add or normalize the section in:

1. `docs/research/planning/canon-review-protocol.md`
2. `docs/research/planning/learning-field-intake-protocol.md`
3. `docs/research/planning/foundational-reframing-protocol-v1.md`
4. `docs/research/planning/moratorium-protocol-v1.md`

The protocol-specific audience targets are:

- canon-review: canon authors and review-round operators
- intake: intake operators processing outside corpora into bridge notes and capstones
- foundational reframing: proposal authors and reviewers handling findings that exceed ADR scope
- moratorium: moratorium enforcers and governance reviewers auditing exception use

### Bridge-note convention carrier

Treat the parent protocol audience block as the declaration surface for the embedded bridge-note convention inside the canon-review and intake protocols. This ADR does not add a second audience declaration inside the schema examples.

## Rationale

The missing information is not a new governance mechanism. It is the operator contract that the current stack assumes but does not state. A short declaration block is enough to make that contract legible at the point of use.

Standardizing the section heading keeps the stack coherent. Tailoring the content per protocol keeps the result useful. The canon-review protocol needs to speak to ADR authors and reviewers; the intake protocol needs to speak to operators reading source corpora and managing bridge-note machinery; the reframing protocol needs to speak to authors working above ADR scope; and the moratorium protocol needs to speak to people enforcing branch and exception discipline. One generic paragraph would hide those differences instead of clarifying them.

Using the parent protocol as the bridge-note carrier is the narrower move. The bridge-note convention is embedded inside those protocols rather than governed by a separate standalone artifact, so repeating the block inside the schema sections would add duplication without improving reader orientation.

## Consequences

- All four operative meta-corpus protocols now declare who they are for, what background they assume, what they govern, and what they do not govern.
- The bridge-note convention inherits audience/prerequisite framing from its parent protocols rather than remaining an implicit insider format.
- `moratorium-protocol-v1.md` stays aligned with the same standard even though it already had a looser audience section.
- Future protocol amendments can treat the audience block as part of the expected protocol shape rather than optional prose.

## Evidence

- F-030 evidence gate: pass
  - the authorizing proposal source bundle carries 7 cited sources and 7 publicly-verifiable sources
  - `docs/research/planning/canon-review-protocol.md` and `docs/research/planning/learning-field-intake-protocol.md` previously described operator procedure without declaring audience/prerequisites
  - `docs/research/planning/corpus-foundational-review-methodology.md:118-120` already stated the narrow intended audience used as the template source
  - `docs/research/planning/foundational-reframing-protocol-v1.md` already required audience declarations in derivative proposals via FR-7, exposing the self-application gap
  - `docs/research/corpus-review/research-audience-scoping.md:113-116` and `docs/research/corpus-review/research-capstone.md:323-323` both support audience/scope declarations as low-cost, high-leverage document hygiene
- Distinct evidence count: 7
- Publicly-verifiable evidence count: 7

## Diff summary

- `docs/research/planning/canon-review-protocol.md`: added a tailored `## Intended audience and prerequisites` section for canon-review operators
- `docs/research/planning/learning-field-intake-protocol.md`: added a tailored section for intake operators and bridge-note processors
- `docs/research/planning/foundational-reframing-protocol-v1.md`: added a tailored section for proposal authors and reviewers working above ADR scope
- `docs/research/planning/moratorium-protocol-v1.md`: normalized the existing audience section into the same four-line standard for moratorium enforcers and reviewers
- embedded bridge-note schema sections: no duplicated audience block added; the parent protocol now carries the declaration surface
