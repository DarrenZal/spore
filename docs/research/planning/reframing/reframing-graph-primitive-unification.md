---
doc_id: spore.foundational-reframing.reframing-graph-primitive-unification
doc_kind: proposal
status: executed
covers: [F-020]
proposal_kind: concept-merge
author: Darren Zal
approver: Darren Zal
opened-on: 2026-04-20
eligible-on: 2026-04-27
eligible-bumped-on: 2026-04-21T00:29:05Z
consultation_artifact: tmp/cross-repo-consultation-reframing-graph-primitive-unification.md
authorized_adrs:
  - spore.canon-decision.graph-primitive-unification
authorized-adr-opened-on: 2026-04-21T05:48:47Z
executed-on: 2026-04-21T05:53:40Z
---

# Reframing Proposal: Graph Primitive Unification

## Problem

Spore currently names one primitive-class surface twice. `project-vision.md` still exposes the surface as `knowledge graph`, while foundation and synthesis docs already restate the same surface as `epistemic graph` and explain the rename as a precision upgrade. The concept roster then preserves both slugs as primitive-class entries, which makes the corpus look as if it is defending two distinct graph primitives when it is not.

This is not a harmless wording variant. Primitive-class duplication makes downstream modeling unstable: ADR authors cannot tell which slug is canonical, glossary work cannot say which surface frozen-concepts v3 should admit, and future cross-doc edits can accidentally preserve the duplication by "fixing" only one name. The corpus evidence points to a single surface: entities, claims, evidence, provenance, attestations, and sensor outputs organized as the substrate for what counts as knowing.

## Proposed reframing

Canonicalize `epistemic-graph` as the sole primitive-class slug for this surface. Treat `knowledge-graph` as a historical gloss retained only to interpret legacy or public-facing phrasing, not as a second primitive.

The rejected counter-direction is to keep `knowledge-graph` canonical and demote `epistemic-graph` to a subtype or stylistic variant. The corpus does not support that direction. The vision doc already glosses the so-called knowledge graph as "the epistemic substrate," and the later foundation/synthesis materials explicitly say `epistemic graph` is the more precise name because the surface tracks claims, evidence, attestation, and provenance rather than a generic fact store. Reverting to `knowledge-graph` as canon would therefore discard an already-articulated conceptual clarification without gaining expressive range.

| Predecessor | Successor | Disposition | Reference-cleanup plan |
|---|---|---|---|
| `knowledge-graph` | `epistemic-graph` | `historical-gloss` | Replace remaining canonical uses in `project-vision.md` and other Spore canon docs that still use `knowledge graph` as the live primitive name. Retain the phrase only inside explicit legacy glosses, quoted historical references, or clearly labeled public-facing shorthand. |

`epistemic-graph` remains the canonical target slug and the only primitive-class entry after execution.

## Why ADR scope is insufficient

This proposal exceeds ordinary ADR scope on two FR-1 criteria at once.

First, it dissolves a concept entirely: `knowledge-graph` cannot remain a separate primitive-class slug if the corpus is to say one thing clearly. Second, it renames that surface across the corpus: the live canonical reference has to move to `epistemic-graph` everywhere Spore currently treats the term as primitive rather than historical gloss.

An ordinary repo-local ADR is too low-level to decide this safely in one move. Before any implementation ADR can edit `project-vision.md`, update foundation prose, or regenerate concept inventory outputs, the corpus needs a proposal-level decision about which primitive survives, whether the retired slug needs frozen-vocabulary handling at all, and which remaining `knowledge graph` references are live canon versus legacy gloss. That is frame governance, not just document maintenance.

## Source bundle

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/project-vision.md:101-105
  publicly-verifiable: true
  excerpt: "`Knowledge graph` ... `the epistemic substrate — tracking what counts as knowing`"
  contributes: Shows the legacy name already carries an epistemic gloss inside the vision doc itself, so the surface is not a generic data-graph.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/foundations/constitutional-artifacts-and-graph-projections.md:58-58
  publicly-verifiable: true
  excerpt: "`Epistemic graph` (called `knowledge graph` in the vision and public-facing docs)"
  contributes: Shows the foundation layer already treats the two names as one surface, with `epistemic graph` as the precision term.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md:179-182
  publicly-verifiable: true
  excerpt: "Vision calls it `knowledge graph` ... `Epistemic graph` is more precise"
  contributes: Records the existing synthesis judgment that the rename is conceptual, not cosmetic.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md:183-183
  publicly-verifiable: true
  excerpt: "the `knowledge graph` from the vision doc, renamed to emphasize its epistemological function"
  contributes: Confirms later grammar work already reads the rename as an epistemic clarification of the same graph surface.

- source:
  kind: inventory-row
  ref: /Users/darrenzal/projects/spore/tmp/concept-roster.tsv:132-132;206-206
  publicly-verifiable: true
  excerpt: "`epistemic-graph` ... 7 ... TRUE / `knowledge-graph` ... 20 ... TRUE"
  contributes: Shows the operational failure mode directly: both slugs are still present as primitive-class entries with live usage counts.

- source:
  kind: capstone-section
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:145-147
  publicly-verifiable: true
  excerpt: "`evidence` stays broad; do not collapse it to `attestation-of-execution`"
  contributes: Supports keeping the graph surface framed around broad epistemic work rather than narrowing it to a storage or execution-log reading.

- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-rea-valueflows.md:66-66;82-82
  publicly-verifiable: true
  excerpt: "Observation layer is memory ... `EconomicEvent` is evidence ... with provenance"
  contributes: Supplies an external-tradition analogue where the relevant surface is defined by observation, evidence, and provenance, reinforcing why `epistemic-graph` is the tighter canonical name.

## Cross-repo consultation

Consultation artifact: `/Users/darrenzal/projects/spore/tmp/cross-repo-consultation-reframing-graph-primitive-unification.md`

The direct execution surface is Spore only: the surviving slug, the retired gloss, and the cleanup plan all land through Spore ADRs and Spore canon updates. Intelligence Commons and Poietic Match are still listed in consultation because the current topology shares governance expectations across canon-bearing repos and because sibling repos may still need to interpret Spore's legacy wording during cooling-off.

The author pass commits only the consultation skeleton. Repo stances, frame-change verdict, and ADR-drafting sign-off remain pending until cooling-off review.

## Execution gate

This proposal may not move beyond `cooling-off` until all of the following are true:

1. The calendar gate is met on or after `2026-04-27`.
2. The consultation artifact records `Frame-change required: yes` with a rationale that confirms ordinary canon-review ADRs are insufficient.
3. A Spore ADR bundle is ready to do all execution work together: canonical slug declaration, live-reference cleanup, and derivative roster repair under the chosen FR-19 disposition.
4. The execution ADR(s) make `epistemic-graph` the only live primitive-class slug and leave `knowledge-graph` only as historical gloss metadata or explicit legacy wording.
5. Regenerated inventory outputs no longer present both slugs as separate primitive-class canon.

No direct canon edits are authorized by this proposal alone.

## ADR authorization plan

Expected authorization set at proposal time: one Spore ADR, with the option to split into two Spore ADRs only if reference cleanup and derivative-inventory repair prove too large for one record. Either way, the ADR bundle must cover the full execution surface before this proposal can become `executed`.

Required ADR outcomes:

1. Declare `epistemic-graph` the sole canonical primitive slug for the graph surface named in F-020.
2. Record `knowledge-graph` as historical/public-facing gloss rather than a second primitive.
3. Update all live Spore canon references that still use `knowledge graph` as the primitive's active name.
4. Regenerate or otherwise validate derivative inventory surfaces so the duplicate primitive-class state disappears.

When the first authorizing ADR draft exists, `authorized_adrs:` in frontmatter must be updated to list the full ADR set.

## Rollback and reversibility

Before ADR execution, rollback is trivial: revert the commit that introduced this proposal and its consultation artifact.

After ADR execution, rollback must be non-destructive and newest-first:

1. Revert the ADR implementation commit(s) that canonicalized `epistemic-graph` and cleaned up references.
2. Revert the ADR record commit(s) that updated proposal lineage and derivative inventory handling.
3. Restore the pre-execution dual-name state only if a successor reframing or ADR-level review proves the corpus truly needs two distinct graph surfaces with non-overlapping semantics.

The default reversal threshold is high because the current proposal reduces ambiguity rather than introducing new surface area. A reversal therefore needs positive evidence for semantic distinction, not just discomfort with the rename.

## Execution record

Executed.

- Proposal state: executed
- FR-19 disposition selected: `historical-gloss`
- Authorized ADRs:
  - spore.canon-decision.graph-primitive-unification
- Affected repo SHAs:
  - `9d9d5c2` — ADR-0019 draft + canon cleanup + proposal `authorized-ADR`
  - `81a0496` — ADR-0019 activation (`draft -> active`)
  - `63fd509` — findings status update (F-020 -> `resolved-via-ADR-0019`)
- Inventory regeneration / validation record:
  - `tmp/concept-roster.tsv` repaired in-place so `knowledge-graph` is no longer `primitive-class=TRUE`
  - validator preserved the 9 errors / 30 warnings baseline (`tmp/phase-7/reframing-graph-primitive-unification-validator-pre.txt` -> `tmp/phase-7/reframing-graph-primitive-unification-validator-post.txt`)
- Rollback commits, if any: revert newest-first from the execution close commit, then `63fd509`, `81a0496`, `9d9d5c2`

## Open questions

1. Which remaining implementation-facing uses of "knowledge graph" should remain untouched because they are generic substrate language rather than names for Spore's primitive?
2. Are there any sibling-repo docs that currently quote Spore's `knowledge graph` wording in a way that should be normalized during consultation even if they are not direct execution targets?
3. Does the `project-vision.md` ecosystem bullet about `koi-processor / RegenAI` need only lexical cleanup, or should the ADR also clarify the distinction between Spore's epistemic primitive and the current implementation substrate it rides on?
