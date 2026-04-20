---
doc_id: spec:spore.foundational-reframing-protocol
doc_kind: protocol
version: 1.1
status: active
ratified-on: 2026-04-20
ratified-by: Darren Zal
ratification-basis: Phase 6b two-round adversarial bakeoff (Claude Round 1 at f0ba02e, Codex Round 2 at 8c30ab0), verdict Ready for status active
authored-on: 2026-04-20
authored-by: codex-gpt-5
---

# Foundational Reframing Protocol

Version: v1.1 (2026-04-20). Drafted for corpus-foundational-review-v1 Phase 6a and revised in Phase 6b Round 1 fix application. Companion to `canon-review-protocol.md` and `learning-field-intake-protocol.md`: those govern evidence intake and ADR-backed canon edits inside the accepted frame; this protocol governs the narrower class of findings that exceed ADR scope and therefore need a proposal layer above per-repo ADR execution. No proposal may use this v1.1 draft until the Phase 6b two-round adversarial bakeoff has closed.

## Companion protocols

This protocol is the reframing half of the same governance stack:

- **[Learning field intake protocol](./learning-field-intake-protocol.md)** — descriptive: how outside corpora become bridge notes, capstones, and research syntheses.
- **[Canon review protocol](./canon-review-protocol.md)** — normative inside the current frame: how accepted review claims become ADR-backed canon edits.
- **This protocol (foundational reframing)** — normative above the current frame: how findings that dissolve, rename, re-layer, re-scope, or re-topologize the corpus mature into authorized ADR bundles.

Together the stack is intake -> capstone -> canon review for ordinary findings, and intake -> capstone -> foundational reframing -> authorized ADR execution for findings that exceed ADR scope.

## 0. Purpose and scope

This protocol governs foundational-reframing proposals at `docs/research/planning/reframing/<slug>.md` for the 13 Phase 5 findings routed to the foundational-reframing track and any later finding that exceeds ADR scope by the same criteria. It is constitutional rather than operational: it does not itself edit canon, settle a finding, or authorize direct doc changes. It defines how a proposal is formed, what evidence bar it must meet, how cooling-off works, how cross-repo consultation is recorded, how lineage to later ADRs is preserved, and how execution can be rolled back without destructive writes to `main`.

## 1. When to use this protocol

**FR-1. Exceeds-ADR trigger rule.** Use foundational reframing whenever a finding does any of the following:

1. Dissolves a concept entirely.
2. Renames a concept across the corpus.
3. Re-layers a doc by moving it between layers.
4. Adds or removes a canon layer.
5. Changes the definition of canon scope.
6. Revises a declared prior.
7. Changes repo topology.
8. Revises a meta-corpus protocol.

**FR-2. Ambiguity rule.** Wider-scope docs default to foundational reframing whenever the proposed change alters a layer's identity, layer membership, or governance role. Only doc-local content edits that leave the layer intact stay in canon-review v2 via explicit carve-out. Ambiguous cases route here, not downward.

## 2. Proposal schema and required fields

**FR-3. Proposal file rule.** Every foundational reframing proposal lives at `docs/research/planning/reframing/<slug>.md` and carries frontmatter at least as strict as:

```yaml
---
doc_id: spore.foundational-reframing.<slug>
doc_kind: proposal
status: draft
covers: [F-025]
depends-on: []
proposal_kind: concept-merge | concept-rename | relayer | canon-scope | prior-revision | topology | protocol-amendment | new-protocol-creation
author: Darren Zal
approver: Darren Zal
opened-on: 2026-04-20
eligible-on: 2026-04-27
consultation_artifact: tmp/cross-repo-consultation-<slug>.md
authorized_adrs: []
---
```

`depends-on:` is populated from the covered findings' `dependencies:` fields after translating finding IDs into the proposal slugs that cover them. `authorized_adrs:` stays empty until the proposal first enters `authorized-ADR`, then lists every ADR doc ID or file path that must land before the proposal can move to `executed`. Use `new-protocol-creation` when the proposal creates a new standalone governance artifact rather than revising an existing one.

`status:` uses the proposal lifecycle defined in this protocol, not the ADR status vocabulary. That keeps proposal mechanics explicit without pre-committing F-031's separate status-unification outcome.

**FR-4. Required body rule.** Every proposal body includes these sections, in this order unless a later v2 says otherwise: `## Problem`, `## Proposed reframing`, `## Why ADR scope is insufficient`, `## Source bundle`, `## Cross-repo consultation`, `## Execution gate`, `## ADR authorization plan`, `## Rollback and reversibility`, `## Execution record`, `## Open questions`. Joint proposals add a `## Coherence argument` section; topology proposals add `## Coordination-cost delta` and `## Merge governance` sections.

**FR-5. Source-bundle formatting rule.** The `## Source bundle` section uses one markdown entry per source beginning with `- source:` so AC6 can count them directly. Each entry also names `kind:`, whether it is `publicly-verifiable: true|false`, and a short note on what the source contributes.

**FR-6. Solo-operator baseline rule.** Until more maintainers exist, `author` and `approver` both default to Darren Zal. That is a known limitation, not hidden consensus. The compensating control is the required consultation artifact, which acts as the adversarial bakeoff surface across the current repo topology.

**FR-7. Audience declaration rule.** Any proposal that revises a protocol surface, re-layers a governance artifact, or changes repo topology must include an `## Intended audience and prerequisites` section stating who is expected to run or review the new structure and what repo access or background knowledge it assumes.

## 3. Evidence bar

**FR-8. Five-source minimum rule.** A foundational-reframing proposal is ineligible unless it cites at least 5 sources and at least 2 of them are publicly verifiable.

**FR-9. Evidence-kind rule.** Admissible source kinds mirror the current findings evidence categories: `source-doc`, `capstone-section`, `research-synthesis`, `inventory-row`, `adr-rationale`, and `cross-tradition-citation`. A proposal may cite additional clearly labeled kinds, but it may not substitute vague "general context" prose for a named source entry.

**FR-10. Public-verifiability rule.** Publicly verifiable means open-access, Wayback-captured, or committed-to-repo. Subscription-only sources and personal snapshots do not satisfy the public minimum by themselves. `capstone-section` and `research-synthesis` count as publicly verifiable only when the cited capstone or research note is already committed in the repo at proposal-commit time; working-tree-only drafts do not count.

**FR-11. Frame-change sufficiency rule.** The evidence bundle must show not only that the target surface is flawed, but that the flaw cannot be responsibly resolved by an ordinary canon-review ADR. The consultation artifact named in FR-16 is the operational frame-change-sufficiency gate: it must record `frame-change-required: yes|no` plus rationale. A proposal that proves a local contradiction but not the need for frame change is sent back down to canon review or editorial repair, and its consultation artifact must not sign off ADR drafting.

## 4. Cooling-off and lifecycle states

**FR-12. Lifecycle rule.** Proposal states are `draft -> cooling-off -> eligible -> authorized-ADR -> executed -> closed`.

- `draft`: schema incomplete or evidence bar not yet met.
- `cooling-off`: proposal committed with evidence bar met, but waiting out the mandatory delay.
- `eligible`: cooling-off elapsed, the consultation artifact records `frame-change-required: yes`, and every parent named in `depends-on:` has reached at least `authorized-ADR`. This is the first state from which ADR drafting may begin.
- `authorized-ADR`: at least one ADR draft cites the proposal slug in `authorized-by:`. Entry happens when the first authorizing ADR draft exists, and the proposal frontmatter is updated at that time so `authorized_adrs:` lists the full ADR set that still needs to land.
- `executed`: every ADR listed in `authorized_adrs:` has landed in every affected repo.
- `closed`: execution finished cleanly, or execution was rolled back and the closure note records that result.

**FR-13. Cooling-off rule.** For ordinary foundational reframings, at least 7 days must elapse between the earliest commit that adds the proposal file and the earliest ADR commit that cites the proposal in `authorized-by:`. The check is measured by Git author-date, matching the plan's Phase 7 convention.

**FR-14. Cooling-off marker rule.** Every proposal must carry an `eligible-on:` frontmatter field computed from the proposal's earliest author-date plus the required cooling-off window. The operator marks cooling-off as elapsed by changing `status: eligible` in a commit whose author-date is on or after `eligible-on:`. A proposal may not enter `eligible` early, even if the calendar date on the local machine is ahead.

**FR-14.5. Material-change reset rule.** A material proposal change made during `cooling-off` resets `eligible-on:` to the material-change commit's author-date plus the applicable 7-day or 14-day window. Material changes include: adding or removing covered findings, changing `proposal_kind:`, changing `depends-on:`, changing whether the proposal revises a meta-corpus surface, changing the affected-repo set or ADR authorization plan, and changing any slug-mapping disposition or cleanup plan. Non-material changes do not reset the clock. Non-material changes include: typo fixes, clarifying prose that leaves obligations unchanged, stronger excerpts for already cited sources, and adding more sources only when they are of kinds already cited and do not change the proposal's scope or dependencies.

**FR-14.6. Dependency-gating rule.** A proposal with non-empty `depends-on:` cannot transition to `eligible` until every named parent proposal has reached at least `authorized-ADR`. The `depends-on:` list is the union of the covered findings' `dependencies:` fields after those finding IDs are translated into proposal slugs. If a parent proposal has not yet been opened, the child proposal remains in `draft` or `cooling-off`; it does not become `eligible` early.

## 5. Cross-repo consultation

For §5 through §9, `affected repo` means any repo that (a) hosts a doc named in a covered finding's target, (b) will host an authorized ADR, or (c) contains a meta-corpus surface the proposal revises.

**FR-15. Consultation artifact rule.** Before any proposal can move from `eligible` to `authorized-ADR`, it must have a committed consultation artifact at `tmp/cross-repo-consultation-<proposal-slug>.md`.

**FR-16. Consultation schema rule.** The artifact must include, at minimum:

1. Proposal slug and covered finding IDs.
2. Date opened and date last updated.
3. `Consulted repos:` listing every affected repo plus every canon-bearing repo whose governance surface is implicated. Under the current topology this normally means Spore, Intelligence Commons, and Poietic Match.
4. One stance block per consulted repo with: who was consulted, stance (`support`, `can-live-with`, `object`, or `not-applicable`), rationale, and any execution conditions.
5. `Open objections:` with each unresolved objection named explicitly or `None`.
6. `frame-change-required:` set to `yes` or `no`, plus rationale stating why canon-review ADRs or editorial repair are or are not insufficient.
7. `Sign-off:` line stating whether ADR drafting may begin.

**FR-17. Single-operator caveat rule.** In the current solo-operator state, the same person may author the proposal and sign the consultation artifact. When that happens, the artifact must say so plainly and treat the artifact as an externalized self-review surface, not as proof of independent consensus.

## 6. Vocabulary handling

**FR-18. Frozen-vocabulary gate rule.** A reframing that introduces a new slug or renames an existing one cannot execute until the target slug exists in frozen-concepts v3, or the reframing's own authorized ADR bundle admits that slug into v3 as a coordinated side effect before any canon doc starts using it.

**FR-19. Rename-traceability rule.** Rename, merge, and split proposals must include a slug mapping table that names predecessor slugs, successor slugs, a `disposition:` column for each predecessor slug with value `alias-in-v3 | historical-gloss | hard-retired`, and what happens to existing references. Proposals that choose `hard-retired` for any predecessor slug must also include an explicit reference-cleanup plan. "We'll clean it up later" is not valid vocabulary handling.

## 7. Special cases

**FR-20. Meta-corpus-amendment double-cooling rule.** If a proposal revises a meta-corpus surface, the cooling-off window doubles from 7 days to 14 days. The authoritative current inventory is `tmp/meta-corpus-inventory.tsv`; as of 2026-04-20 that list includes `canon-review-protocol`, `learning-field-intake-protocol`, `concepts-p2p-wiki`, `validate_spec_dag.py`, `moratorium-mechanics`, `bridge-note-format-convention`, `learning-field-structure`, and `corpus-foundational-review-methodology`. Any artifact later added to that inventory as a meta-corpus surface automatically inherits the 14-day cooling-off window from the admission commit, even if it begins as a plan-embedded or otherwise non-standalone governance surface.

**FR-21. Repo-topology delta rule.** A repo-topology proposal must include a before/after coordination-cost table. The table names the current and proposed values for at least: canon-bearing repo count, authoritative shared-concept surfaces, coordinated ADR fan-out repos, merge points, and manual propagation steps.

**FR-22. Repo-topology reversibility rule.** A repo-topology proposal must include a reversibility plan naming what would have to be undone, in what order, and what evidence would trigger reversal. Topology reframings are blocked unless the proposal shows how the new state can be unwound without destructive writes to `main`.

**FR-23. Merge-governance rule.** Because topology choices propagate into Phase 9 merge behavior, every topology proposal must also include a merge-governance note naming the cross-repo merge carrier, the audit artifact or manifest that will track the set, and how asymmetric branch protections will be handled. That keeps F-039 inside the proposal mechanics instead of deferring it to execution folklore.

## 8. Approved reframing to ADR execution

**FR-24. Proposal-to-ADR lineage rule.** Approval of a foundational reframing authorizes ADR drafting, not direct doc edits. Each affected repo gets its own ADR or coordinated ADR set, and each ADR cites the proposal slug in a single-line, comma-separated `authorized-by:` field. Example: `authorized-by: reframing-pm-canon-scope, reframing-shared-canon-layer`. YAML list format is forbidden for this field because AC6 verifies lineage with a single-line grep.

**FR-25. No direct-edit rule.** A reframing proposal never authorizes silent edits to canon, protocol, or topology docs. The implementing change lands only through the ADR bundle the proposal authorized.

**FR-26. Post-adoption challenge rule.** If an executed reframing is later challenged, the challenge routes by scope: a repo-local execution dispute goes through a successor ADR; a challenge to the frame itself, the authorized-by lineage, or the proposal mechanics becomes a new foundational-reframing proposal. Post-adoption disagreement therefore has a named escalation path rather than reopening docs by fiat.

## 9. Rollback

**FR-27. Non-destructive rollback rule.** Default rollback is `git revert`, newest-first, over the recorded ADR and implementation commits on the working branch. When a proposal reaches `executed`, its body must record the affected repo SHAs so rollback targets are explicit.

**FR-28. Main-safety rule.** `git reset --hard` is never used on `main`. If a merged reframing regresses after Phase 9, rollback happens by reverting the merge commit through normal PR flow. Any emergency reset on `corpus-review/v1` must follow the plan's rollback safeguards, including pre-reset backups and explicit approval.

## 10. Joint proposals

**FR-29. Separate-by-default rule.** Foundational findings default to one proposal per finding.

**FR-30. Joint-proposal rule.** Multiple findings may share one proposal only when they genuinely share a target concept or a governing criterion and the drafter provides a coherence argument. Joint proposals must list every covered finding in frontmatter as `covers: [F-NNN, ...]`. If coherence breaks during drafting or consultation, the proposal must be split before it can become `eligible`.

## 11. Amendment of this protocol

**FR-31. Constitutional-amendment guard rule.** Revising `foundational-reframing-protocol-v1.md` into v2 or later requires its own foundational-reframing proposal under this protocol and the double-cooling rule. This file does not self-amend through ordinary doc edits or through a canon-review ADR that cites no reframing proposal.

**FR-32. First-use gate rule.** This protocol may not authorize any proposal until the Phase 6b two-round adversarial bakeoff has completed and the review result is committed. The protocol itself is therefore subject to the higher-stability rule before it becomes executable governance.

## Changelog

- **v1.1** (2026-04-20): Round 1 review fixes.
  - Added `new-protocol-creation` as the explicit `proposal_kind:` for net-new governance artifacts and documented the `depends-on:` / `authorized_adrs:` frontmatter semantics.
  - Added dependency gating so proposal frontmatter inherits finding-level `dependencies:` and child proposals cannot become `eligible` before parent proposals reach `authorized-ADR`.
  - Clarified lifecycle semantics for `authorized-ADR` entry and `executed` exit, and added a material-change reset rule for `eligible-on:`.
  - Made the consultation artifact the frame-change-sufficiency gate by requiring `frame-change-required: yes|no` plus rationale.
  - Defined `affected repo`, required `disposition:` values plus cleanup plans in slug-mapping tables, and clarified `authorized-by:` as single-line comma-separated syntax for AC6 compatibility.
  - Rewrote meta-corpus double-cooling to follow `tmp/meta-corpus-inventory.tsv` and auto-apply to future meta-corpus admissions.
- **v1** (2026-04-20): Initial foundational-reframing protocol drafted for corpus-foundational-review-v1 Phase 6a. Defines proposal schema, S1 evidence bar, cooling-off, consultation artifacts, vocabulary gates, topology special cases, ADR lineage, rollback discipline, joint-proposal rules, and the constitutional guard against silent self-amendment.
