---
doc_id: spore.canon-decision.project-vision-audience-declaration
doc_kind: decision-record
status: draft
adr_number: "0027"
opened-on: 2026-04-21
covers:
  - F-006
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-audience-scoping:R1
  - spec:spore.corpus-review.research-capstone:R1
r_claim_statement: |
  Spore's root vision document should declare intended audience, prerequisites, scope, and out-of-scope boundaries explicitly so the canon's main reader-entry surface states its narrow operator contract inside the canon rather than leaving that contract implicit in review methodology and research scaffolds.
supported_by:
  - /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-cross-repo-vision-alignment.md
  - docs/project-vision.md
  - docs/research/planning/corpus-foundational-review-methodology.md:136-138
  - docs/research/corpus-review/research-audience-scoping.md:113-116
  - docs/research/corpus-review/research-capstone.md:215-221
  - docs/research/planning/corpus-foundational-review-findings.md:220-250
authorized-by: ""
queue_reference: "Phase 7 round-cross-repo-vision-alignment (F-006, F-010)"
affects_canon:
  - docs/project-vision.md
related_adrs:
  - spore:ADR-0023-protocol-audience-declaration-standard
  - intelligence-commons:ADR-0016-project-vision-neighbors-map-reconciliation
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-cross-repo-vision-alignment.md
concepts:
  - constitutional-commitments
  - coordination-grammar
---

# ADR-0027 — Project Vision Audience Declaration

## Status

draft (opened 2026-04-21)

## Context

F-006 identifies a reader-orientation gap in the root Spore vision document. `docs/project-vision.md` is the main constitutional entry surface for the repo, but it currently opens straight into thesis text without stating who the document is actually for, what background it assumes, or what kinds of work it does not attempt to do.

The operative audience is already documented elsewhere. `corpus-foundational-review-methodology.md` says the current audience is the solo operator through active contributors across Spore, Intelligence Commons, and Poietic Match. `research-audience-scoping.md` and the capstone both treat explicit audience/scope declaration as standard document hygiene rather than optional polish. The current problem is therefore not lack of guidance, but lack of canon placement: the audience contract exists in review scaffolding instead of the vision surface that new readers actually hit first.

`spore:ADR-0023-protocol-audience-declaration-standard` already standardized a sibling pattern for meta-corpus protocols. This ADR applies the same discipline to the vision surface while keeping the heading and wording tailored to a constitutional document rather than an operator protocol.

## Decision

Add a compact `## Intended audience and scope` section near the top of `docs/project-vision.md`.

The section must declare four lines:

1. `Audience`
2. `Prerequisites`
3. `Scope`
4. `Out of scope`

The content should harvest the narrow audience from the methodology and state plainly that the vision doc is a constitutional orientation surface, not a general-public tutorial or an implementation manual.

## Rationale

This is the smallest repair that closes the finding honestly.

The audience assumptions are already shaping interpretation of the canon. Leaving them outside the root vision doc means the reader contract remains implicit at the exact place where the repo declares what Spore is and what it is for. A short declaration block is enough to make that contract visible without diluting the rest of the vision.

The move is additive rather than structural. No thesis claim, concept definition, or layer model changes here. The repair is to make an existing interpretive boundary legible inside the canon.

## Consequences

- `docs/project-vision.md` now states the narrow audience it currently serves.
- Readers can tell earlier whether they are looking at a constitutional orientation surface versus onboarding or implementation guidance.
- The vision doc stays concise while stopping the methodology from carrying the only explicit audience contract.

## Evidence

- F-006 evidence gate: pass
  - `docs/project-vision.md` previously had no audience/scope declaration near its opening
  - `docs/research/planning/corpus-foundational-review-methodology.md:136-138` already supplies the operative narrow audience
  - `docs/research/corpus-review/research-audience-scoping.md:113-116` supports explicit audience/scope statements as standard document structure
  - `docs/research/corpus-review/research-capstone.md:215-221` names the missing audience declaration as a concrete gap in Spore canon
- Cross-repo consistency note: the section shape stays compatible with the protocol-side pattern from `spore:ADR-0023`, but this ADR keeps the vision-doc heading and prose specific to a constitutional surface

## Diff summary

- `docs/project-vision.md`: adds a top-level `## Intended audience and scope` declaration block near the top of the document
