---
doc_id: spore.foundational-reframing.reframing-protocol-governance-hardening
doc_kind: proposal
status: authorized-ADR
covers: [F-025, F-026, F-031]
proposal_kind: protocol-amendment
author: Darren Zal
approver: Darren Zal
opened-on: 2026-04-20
eligible-on: 2026-05-04
eligible-bumped-on: 2026-04-21T00:29:05Z
consultation_artifact: tmp/cross-repo-consultation-reframing-protocol-governance-hardening.md
authorized_adrs:
  - spore.canon-decision.canon-review-protocol-v3-governance-hardening
  - spore.canon-decision.adr-status-vocabulary-unification
authorized-adr-opened-on: 2026-04-21T04:29:45Z
---

# Reframing Proposal: Protocol Governance Hardening

## Problem

`canon-review-protocol.md` is currently doing three jobs at once: it defines how canon-review ADRs work, it evolves itself through the same round-execution machinery it governs, and it is consumed as a cross-repo governance surface by Spore, Intelligence Commons, and Poietic Match. The current protocol does not distinguish ordinary operational amendment from constitutional amendment on that meta-corpus surface. In practice, that means the protocol-about-protocols can be rewritten by the same ordinary harvesting flow that it authorizes.

The same surface also lacks a named post-adoption challenge path. It defines first-class dispositions for ADRs and held-tension checks before landing, but it does not say what happens after an ADR lands and is later disputed. That leaves disagreement to ad hoc operator judgment at exactly the point where a mature governance surface should expose an escalation path.

Finally, the ADR status vocabulary is split across protocol text, validator tooling, and live ADR practice. The protocol's ADR-lite template uses `status: proposed`, the validator accepts only `draft|active|deprecated|superseded`, and live Spore ADRs carry inline comments to explain the manual mapping. The system currently works by operator translation rather than by a single authoritative vocabulary.

Taken together, F-025, F-026, and F-031 are not isolated defects. They are one governance-hardening gap on the canon-review-protocol surface: amendment authority, post-adoption contestability, and lifecycle vocabulary are all under-specified at the same meta-corpus layer.

## Proposed reframing

This proposal authorizes a canon-review-protocol v3 amendment bundle that hardens the protocol as a constitutional governance surface rather than treating it as an ordinary operational document.

1. Add a constitutional-amendment rule for canon-review-protocol revision. Revising the protocol should require a foundational-reframing proposal under the double-cooling rule; single-ADR direct edits to the protocol surface are no longer sufficient.
2. Add a named post-adoption appeal path. The v3 ADR bundle should define how a landed ADR may be challenged, by whom, on what grounds, and how challenge scope routes either to successor ADR handling or back to foundational reframing.
3. Unify ADR status vocabulary on one authoritative set. The ADR bundle should retire the current hand-mapped split between protocol text and validator tooling, so future ADRs do not require inline translation comments to explain lifecycle state.

This proposal does not pre-commit the exact v3 rule text, whether v3 lands as an appended section or a new standalone protocol artifact, or whether the implementation ADR set is one consolidated ADR or a coordinated set of narrower ADRs. Those are ADR-drafting decisions for Phase 7 once this proposal becomes eligible.

## Why ADR scope is insufficient

All three covered findings revise a meta-corpus protocol and therefore trigger foundational reframing under FR-1 criterion 8. A plain canon-review ADR is not sufficient because the target surface is the canon-review protocol itself. Using an ordinary ADR to rewrite the protocol that gives ADRs their authority would preserve the self-amendment loop that F-025 identifies as the core governance defect.

F-026 and F-031 also exceed doc-local repair. A post-adoption appeal path changes the protocol's authority structure, not just its wording. Status-vocabulary unification changes lifecycle semantics at the protocol-tooling boundary across live ADR practice, validator enforcement, and future authoring templates. Those are frame-level repairs on a shared governance surface, not ordinary canon edits inside an accepted frame.

## Intended audience and prerequisites

The intended audience is the current solo operator and any future active contributors who can inspect Spore, Intelligence Commons, and Poietic Match together as one governed corpus. Reviewers need working familiarity with `canon-review-protocol.md`, `foundational-reframing-protocol-v1.md`, the current validator behavior in `scripts/validate_spec_dag.py`, and the existing ADR corpus.

Because this proposal revises a protocol surface that coordinates later ADR authoring, reviewers also need enough context to distinguish proposal-level authorization from ADR-level implementation. The proposal authorizes a governance change; it does not itself rewrite the protocol text.

## Coherence argument

F-025, F-026, and F-031 share the same target surface and the same governing criterion: the canon-review protocol is functioning as a meta-corpus constitutional surface but still carries operational shortcuts that are acceptable only for lower-stakes documents. The constitutional-amendment guard, the post-adoption appeal path, and the status-vocabulary unification are therefore one coherent hardening package rather than three unrelated repairs.

Bundling them is also the least distortive way to authorize Phase 7 work. If drafted separately, each proposal would independently argue that canon-review-protocol v3 must exist, each would carry the same double-cooling burden, and each would risk piecemeal edits to the same governance surface. Joint cooling-off keeps the v3 patch set conceptually whole while still allowing the later ADR bundle to split by topic if that proves cleaner in implementation.

If consultation later shows that one of the three findings can be handled without touching the v3 amendment bundle, this proposal must be split before any `eligible` transition. The bundle is justified only as long as the coherence remains real.

## Source bundle

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-findings.md:828-1042
  publicly-verifiable: true
  excerpt: "The ADR status vocabulary is internally contradictory across the meta-corpus."
  contributes: Authoritative wording of the three findings being bundled and their original evidence trail.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:16-21
  publicly-verifiable: true
  excerpt: "v2 ... harvested from running v1."
  contributes: Shows that canon-review-protocol currently evolves through the same operational flow it governs.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:83-89
  publicly-verifiable: true
  excerpt: "status: proposed   # lifecycle below"
  contributes: Shows that the protocol still publishes ADR lifecycle language that diverges from validator-enforced status values.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:170-173
  publicly-verifiable: true
  excerpt: "edit ... hold-as-tension ... reject"
  contributes: Shows that the protocol defines pre-adoption ADR dispositions but does not name a post-adoption challenge path.
- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:24-26,40-42
  publicly-verifiable: true
  excerpt: "Formal Objection ... an appeals ladder" / "constitutional/operational split"
  contributes: Supplies the comparative governance pattern for appeals and for separating constitutional from operational amendment paths.
- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-structured-disagreement.md:34-38
  publicly-verifiable: true
  excerpt: "Rebuttal / appeal. Load-bearing and structurally under-theorized."
  contributes: Supports the claim that a named review-of-the-review path is a structural governance primitive, not an optional nicety.
- source:
  kind: capstone-section
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:319-321
  publicly-verifiable: true
  excerpt: "Spore has no equivalent guard-text." / "no documented escalation path"
  contributes: Confirms that the constitutional-guard and dissent-escalation gaps were already identified as corpus-level issues in the capstone.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/scripts/validate_spec_dag.py:110-110
  publicly-verifiable: true
  excerpt: "ALLOWED_STATUSES = {\"draft\", \"active\", \"deprecated\", \"superseded\"}"
  contributes: Shows the validator-side status vocabulary that currently diverges from the protocol's ADR-lite lifecycle names.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/0001-pluriversal-incommensurability.md:5-9
  publicly-verifiable: true
  excerpt: "no \"proposed\" ... Mapping protocol ... \"proposed\""
  contributes: Shows live corpus practice already relying on manual status translation comments to bridge the protocol-validator split.

## Cross-repo consultation

Cross-repo consultation is recorded in `/Users/darrenzal/projects/spore/tmp/cross-repo-consultation-reframing-protocol-governance-hardening.md`.

Spore is the host repo for the target protocol artifact, but the protocol is part of a governance stack consumed across Spore, Intelligence Commons, and Poietic Match. The consultation surface therefore names all three repos, opens stance blocks for each, and records the single-operator caveat explicitly rather than implying independent consensus that does not yet exist.

## Execution gate

This proposal is opened directly in `cooling-off` because the evidence bar is met at commit time, but no ADR drafting may begin until all of the following are true:

1. The 14-day meta-corpus cooling-off window has elapsed on or after `2026-05-04`.
2. The consultation artifact records `Frame-change required: yes` and `ADR drafting may begin: yes`.
3. No material scope change resets the clock under FR-14.5.
4. The implementation path remains proposal-to-ADR lineage only; no direct edit to `canon-review-protocol.md` or validator behavior is authorized by this proposal alone.

## ADR authorization plan

When this proposal becomes eligible, it authorizes a Spore ADR bundle that revises canon-review-protocol toward v3. The implementation may land as one consolidated ADR or as up to three tightly scoped ADRs covering constitutional amendment, post-adoption appeal, and status-vocabulary unification separately.

Every implementing ADR must cite `authorized-by: reframing-protocol-governance-hardening`. If the final ADR bundle changes validator behavior or historical ADR handling, those changes belong in the authorized ADR set and not in this proposal.

Intelligence Commons and Poietic Match are downstream consumers of the protocol change rather than immediate hosts of the revised protocol artifact. They do not require companion ADRs unless later drafting discovers repo-local override behavior that must itself be governed.

## Rollback and reversibility

Rollback remains non-destructive and happens at the ADR/implementation layer, not by editing this proposal in place. If the authorized v3 bundle regresses, rollback is by `git revert`, newest-first, over the implementing ADR and protocol/tooling commits recorded at execution time.

Because this proposal does not pre-commit exact v3 text, reversibility depends on preserving clear lineage from proposal -> ADR set -> implementation commits. Any future migration of status vocabulary for existing ADRs must keep a reversible mapping or a superseding audit trail rather than silently rewriting history.

## Execution record

Not yet executed.

- Proposal state: authorized-ADR
- Authorized ADRs:
  - spore.canon-decision.canon-review-protocol-v3-governance-hardening
  - spore.canon-decision.adr-status-vocabulary-unification
- Affected repo SHAs: pending
- Rollback record: pending

## Open questions

- Should the v3 appeal path distinguish between evidence disputes, procedural disputes, and frame disputes explicitly, or is a simpler two-route split sufficient?
- Should status unification adopt the validator enum as authoritative, or should the validator be widened to accept the protocol enum for `decision-record` docs?
- Should canon-review-protocol v3 remain appended inside the current file, or should the protocol be re-issued as a new standalone versioned artifact?
- Does any part of F-031 need a historical backfill strategy for existing ADR comments, or is future-only normalization sufficient?
- **Validator scope for proposal lifecycle** (surfaced during 6c commits, 2026-04-20): the ratified foundational-reframing-protocol introduced proposal lifecycle states `{draft, cooling-off, eligible, authorized-ADR, executed, closed}`, but `scripts/validate_spec_dag.py`'s `ALLOWED_STATUSES` enum remains `{draft, active, deprecated, superseded}` — so committing a proposal with `status: cooling-off` fails validation. The F-031 ADR must coordinate: either (a) widen the validator to accept both vocabularies discriminated by `doc_kind` (proposals vs decision-records), or (b) migrate proposal status names to the existing enum. Recommendation: (a), so proposal lifecycle remains legible and `doc_kind: proposal` vs `doc_kind: decision-record` cleanly separates the two status spaces. This is live evidence that F-031's contradiction scope is whole-system vocabulary drift across proposals, ADRs, and tooling — not just protocol-text vs validator-enum.
