---
doc_id: spore.foundational-reframing.reframing-moratorium-formalization
doc_kind: proposal
status: executed
covers: [F-027]
depends-on: []
proposal_kind: new-protocol-creation
author: Darren Zal
approver: Darren Zal
opened-on: 2026-04-20
eligible-on: 2026-05-04
eligible-bumped-on: 2026-04-21T00:29:05Z
consultation_artifact: tmp/cross-repo-consultation-reframing-moratorium-formalization.md
authorized_adrs:
  - spore.canon-decision.moratorium-protocol-formalization
authorized-adr-opened-on: 2026-04-21T06:37:30Z
executed-on: 2026-04-21T06:39:47Z
---

# Reframing Proposal - Moratorium Formalization

## Problem

Moratorium mechanics currently carry cross-phase governance weight, but the operative rules live only inside the Phase 6 review plan snapshot. The current suspension rule, phase-state table, safety-critical exception categories, approver rule, and exception-log discipline are therefore anchored to a plan document whose primary job is to sequence one review run, not to serve as a stable governance surface.

The result is a meta-corpus artifact with no standalone doc identity. `tmp/meta-corpus-inventory.tsv` records `moratorium-mechanics` as `has-formal-doc=FALSE`, and the methodology explicitly treats "the plan snapshot and phase addenda" as the active moratorium surface. That makes later citation, amendment, and inheritance awkward: any future moratorium change has to target the whole plan or rely on informal carry-forward rather than a named protocol document.

## Proposed reframing

Create `docs/research/planning/moratorium-protocol-v1.md` as a standalone meta-corpus protocol. The new protocol should harvest the currently operative rules from the plan snapshot rather than inventing a new rule set:

- the main-branch suspension rule across Spore / Intelligence Commons / Poietic Match,
- the phase-by-phase state table,
- the safety-critical exception categories,
- the approver rule,
- the audit-log location and close-timestamp discipline,
- and the rule that moratorium coverage lifts only at the defined close.

After admission, the protocol becomes the narrower governance citation target instead of leaving the rule set trapped inside the plan snapshot. The plan may later cite the protocol directly, but this reframing does not require a same-bundle plan rewrite if the standalone protocol and inventory admission already make the authoritative carrier unambiguous.

This proposal extends the existing meta-corpus layer; it does not create a new canon layer outside that layer. The change is from plan-embedded governance to named protocol membership inside the already-declared meta-corpus.

## Why ADR scope is insufficient

This finding exceeds ordinary ADR scope on two independent grounds. First, it changes the governance role and layer membership of the moratorium surface: a plan-embedded constraint becomes a standalone meta-corpus protocol. That is a layer and governance-surface decision, not a doc-local wording edit. Second, the implementation mints a new protocol artifact, which is exactly the `new-protocol-creation` case the foundational-reframing protocol was revised to cover.

A canon-review ADR could edit the current plan text, but it could not responsibly settle the prior question hidden underneath: whether moratorium mechanics belong as a stable meta-corpus protocol with their own amendment path, citation target, and cooling-off inheritance. Doing that directly in an ADR would collapse the reframing step into execution and bypass the explicit frame-change gate required for protocol-layer changes.

## Source bundle

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-findings.md:885-912
  publicly-verifiable: true
  excerpt: "Moratorium mechanics are carrying governance weight but still exist only as plan-embedded rules."
  contributes: Authoritative finding claim and triage rationale for routing F-027 to foundational reframing.
- source:
  kind: inventory-row
  ref: /Users/darrenzal/projects/spore/tmp/meta-corpus-inventory.tsv:6-6
  publicly-verifiable: true
  excerpt: "moratorium-mechanics ... moratorium FALSE 2026-04-19"
  contributes: Shows the current moratorium surface is inventoried but explicitly lacks a formal standalone document.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:37-58
  publicly-verifiable: true
  excerpt: "Canon edits on `main` branches ... are suspended during Phases 2-5 ... No amendments to this rule except safety-critical exceptions."
  contributes: Captures the current operative moratorium mechanics that the future protocol would harvest into a standalone artifact.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:107-113
  publicly-verifiable: true
  excerpt: "The plan snapshot and phase addenda as the current moratorium and branch-discipline surface."
  contributes: Confirms the present governance surface is the plan snapshot rather than a dedicated protocol doc.
- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:20-20
  publicly-verifiable: true
  excerpt: "All traditions require a written artifact authored by a champion."
  contributes: Cross-tradition precedent that governance proposals are stabilized as named written artifacts rather than left implicit in discussion or plan scaffolding.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:10-21
  publicly-verifiable: true
  excerpt: "Sibling to the intake protocol ... This protocol governs how we edit canon."
  contributes: Local precedent for harvesting recurring governance mechanics into a standalone protocol file that a plan can cite.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/foundational-reframing-protocol-v1.md:33-44
  publicly-verifiable: true
  excerpt: "Use foundational reframing whenever ... a layer's identity, layer membership, or governance role."
  contributes: Shows that moving moratorium mechanics from plan-embedded rules to protocol-layer governance is explicitly a foundational-reframing case.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/foundational-reframing-protocol-v1.md:134-146
  publicly-verifiable: true
  excerpt: "If a proposal revises a meta-corpus surface, the cooling-off window doubles ... The implementing change lands only through the ADR bundle the proposal authorized."
  contributes: Grounds the 14-day window and the requirement that execution happen later through authorized ADR work rather than direct proposal edits.
- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:74-74
  publicly-verifiable: true
  excerpt: "Norms/protocols ... are explicitly stratified by maturity and consensus."
  contributes: Supports treating moratorium mechanics as a protocol-layer surface rather than leaving them embedded in a one-off plan.

## Cross-repo consultation

Consultation artifact: `tmp/cross-repo-consultation-reframing-moratorium-formalization.md`.

Execution ownership is Spore because the implementing ADRs will land there, but consultation still spans Spore, Intelligence Commons, and Poietic Match. The current moratorium rule set governs main-branch write discipline across all three repos, so the proposal has cross-repo implications even though the new standalone protocol file lives in Spore.

During this author pass the artifact is intentionally opened with placeholder stance blocks and no sufficiency verdict yet. Cooling-off is the period for filling those judgments rather than backfilling them after ADR drafting starts.

## Execution gate

This proposal is opened directly in `cooling-off` because the evidence bar is met at commit time. No ADR may cite this proposal before 2026-05-04, and the proposal may not move to `eligible` until the consultation artifact records that frame change is required and ADR drafting may begin.

Execution is additionally gated on keeping the proposal non-executing: this document authorizes later ADR drafting only. It does not itself create `moratorium-protocol-v1.md`, edit the plan, or alter inventory membership.

## ADR authorization plan

Authorize one Spore ADR bundle to do the actual work after cooling-off:

1. create `docs/research/planning/moratorium-protocol-v1.md` as the standalone moratorium reference,
2. update `tmp/meta-corpus-inventory.tsv` so the standalone protocol rather than the plan snapshot is the formal moratorium artifact tracked by inventory and FR-20 inheritance,
3. optionally cross-reference the new protocol from `docs/research/planning/corpus-foundational-review-v1-plan.md` if a later cleanup pass wants the plan to point directly at the narrower authority surface.

That ADR must cite `authorized-by: reframing-moratorium-formalization`. If execution later needs to split into multiple ADRs, this proposal's `authorized_adrs:` field should be updated at `authorized-ADR` time before any landing commits occur.

## Intended audience and prerequisites

Primary audience is the operator or any future maintainer who authors review plans, phase addenda, or governance ADRs touching branch-discipline and moratorium state. Secondary audience is maintainers of Intelligence Commons and Poietic Match who need a stable citation target for the cross-repo write constraint even when execution remains Spore-hosted.

Prerequisites are familiarity with the corpus-foundational-review phase model, the current `corpus-review/v1` branch discipline, the safety-critical exception categories, and the exception audit log at `tmp/moratorium-exceptions.md`. Reviewers also need write-path visibility across Spore / IC / PM because the protocol governs coordinated main-branch behavior, not a single-repo local convention.

## Rollback and reversibility

Default rollback is a normal `git revert` of the later ADR commit or commit set that creates the protocol and repoints the inventory carrier. Reversal would:

- remove `moratorium-protocol-v1.md`,
- restore the plan snapshot as the authoritative moratorium carrier,
- and revert any associated inventory admission if that change lands in the same ADR bundle.

Because this proposal makes no direct doc edits outside its own record, rollback during `cooling-off` or `eligible` is trivial: revert this proposal commit and the consultation artifact commit together. Post-execution rollback remains non-destructive because the protocol change is file-based and line-based, not topology-changing or history-rewriting.

## Execution record

Executed.

- Proposal state: executed
- Authorized ADRs:
  - spore.canon-decision.moratorium-protocol-formalization
- Affected repo SHAs:
  - `07d5fd8` — ADR-0021 draft + protocol creation + inventory update + proposal `eligible -> authorized-ADR`
  - `c4cac79` — ADR-0021 activation (`draft -> active`)
  - `2307f80` — findings status update (F-027 -> `resolved-via-ADR-0021`)
- Protocol admission / validation record:
  - `docs/research/planning/moratorium-protocol-v1.md` created at `version: 1` with `status: active`
  - `tmp/meta-corpus-inventory.tsv` updated `moratorium-mechanics` from `has-formal-doc=FALSE` to `TRUE` and repointed the path to the new protocol
  - validator preserved the 9 errors / 30 warnings baseline (`tmp/phase-7/reframing-moratorium-formalization-validator-pre.txt` -> `tmp/phase-7/reframing-moratorium-formalization-validator-post.txt`)
  - `docs/research/planning/corpus-foundational-review-v1-plan.md` remained unchanged; the new protocol cites it as the harvested source
- Rollback commits, if any: revert newest-first from the execution close commit, then `2307f80`, `c4cac79`, `07d5fd8`

## Open questions

- Should a later cleanup pass add a direct cross-reference from `docs/research/planning/corpus-foundational-review-v1-plan.md` to `docs/research/planning/moratorium-protocol-v1.md`, or is the protocol-side source citation sufficient?
- Should the new protocol own branch-isolation language as well as moratorium suspension/exception mechanics, or should branch isolation remain plan-local while only the moratorium rules move?
- Which plan-local details, if any, are allowed to stay embedded after protocol extraction without recreating the same ambiguity F-027 identified?
