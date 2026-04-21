---
doc_id: spore.foundational-reframing.reframing-repo-topology-trunk
doc_kind: proposal
status: executed
covers: [F-037, F-038, F-039]
proposal_kind: topology
author: Darren Zal
approver: Darren Zal
opened-on: 2026-04-20
eligible-on: 2026-04-27
eligible-bumped-on: 2026-04-21T00:29:05Z
consultation_artifact: tmp/cross-repo-consultation-reframing-repo-topology-trunk.md
authorized_adrs:
  - spore.canon-decision.repo-topology-ratification
  - ic.canon-decision.repo-topology-ratification
  - pm.canon-decision.repo-topology-ratification
authorized-adr-opened-on: 2026-04-21T06:02:46Z
executed-on: 2026-04-21T06:09:18Z
---

# Proposal — reframing-repo-topology-trunk

## Problem

Spore, Intelligence Commons, and Poietic Match already function as a coordinated canon-bearing trio, but that topology still exists as policy-by-practice rather than as a ratified constitutional choice. The Phase 6 plan explicitly marks repo topology as unadjudicated, excludes `darren-workflow`, `flowcoding`, and `koi-processor` from edit scope during the review, and defers a later propagation-scope decision for dependents. At the same time, the capstone classifies the trio as a three-repo shared-canon hybrid and canon-review-v1 has already demonstrated the operational consequences of that choice: twenty-three ADRs and six coordinated shared-framing notes had to land session-atomically across three repos to avoid drift.

That leaves three linked defects unresolved:

- F-037: the corpus has no ratified rule for why exactly these three repos are canon-bearing, what would justify adding or removing one, or how analysis-only peripherals stay out of the canon-bearing set.
- F-038: the trio duplicates a shared concept layer across repo boundaries without a single authoritative source for cross-project primitives.
- F-039: the current Phase 9 merge rule assumes near-synchronous PR merges across all three repos even though branch-protection state for IC and PM could not be verified through the GitHub API and the plan already treats branch-protection rejection as a partial-merge failure condition.

The evidence does not show that the current topology is broken beyond repair. It does show that the topology is under-specified, that the shared layer is redundant at the current boundary, and that Phase 9 needs an auditable cross-repo merge contract instead of operator memory.

## Proposed reframing

This proposal adopts **Option 1: ratify the current three-repo split**, but only with three added constraints:

1. an explicit canon-bearing inclusion and exclusion rubric;
2. a scale guardrail that freezes the canon-bearing set at the current trio until stronger automation or a successor topology proposal exists;
3. a topology-specific merge-governance contract based on a committed merge manifest.

### Option evaluation

| Option | What it would solve | Why it is not the proposed state |
|---|---|---|
| 1. Ratify the three-repo split | Resolves F-037 directly, keeps governance-domain separation intact, and can absorb F-039 through explicit merge governance. | Keeps three repo-local copies of shared concepts, so it only resolves F-038 if paired with a no-expansion guardrail and a declared coordination carrier. |
| 2. Collapse to monorepo | Eliminates cross-repo ADR fan-out, shared-concept duplication across repos, and cross-repo Phase 9 merge drift. | Current evidence does not justify collapsing governance-domain boundaries now; the literature warns monorepo benefits are scale- and tooling-dependent, and the current trio has already executed coordinated edits successfully at three repos. |
| 3. Shared-canon hybrid with thin cross-project source | Would give cross-project primitives one authoritative home while keeping repo-local canon and implementation surfaces separate. | Premature at the current evidence bar: it adds a new dependency/governance layer before the canon-bearing set has grown past three repos and before equivalent automation or host rules are specified. |
| 4. Workspace-style orchestrator | Could centralize scripts, checks, and local coordination for the trio. | Adds orchestration surface without removing three repo-local canon copies or the Phase 9 branch-protection asymmetry; it increases topology surface faster than it reduces governance risk. |

### Proposed state

- `Spore`, `Intelligence Commons`, and `Poietic Match` are ratified as the only canon-bearing repos under the current topology.
- `darren-workflow`, `flowcoding`, and `koi-processor` remain analysis-only. Concept overlap, bridge-note tooling, or research adjacency alone do not grant canon-bearing status.
- A repo may join the canon-bearing set only through a successor topology proposal that proves all of the following:
  - it hosts load-bearing canon or governance material that cannot be responsibly hosted inside the current trio;
  - its inclusion reduces ambiguity more than it increases coordinated ADR and merge burden;
  - it can participate in the same branch, PR, ADR-lineage, and merge-manifest discipline as the current trio.
- F-038 is resolved by an explicit scale guardrail rather than by immediate extraction of a shared-canon layer: the trio is frozen as the maximum canon-bearing set until a successor proposal authorizes either a thin shared-canon source/workspace or a topology collapse.
- F-039 is resolved by making merge governance part of the topology decision itself: every cross-repo Phase 9 merge set must be carried by a committed merge manifest that names the repo set, PR set, readiness checks, and final merge SHAs.

This reframing chooses a narrow constitutionalization over a broad structural migration. The point is to ratify what is already load-bearing, stop silent expansion, and make the merge surface auditable.

## Why ADR scope is insufficient

An ordinary ADR cannot settle this question responsibly because the target surface is not repo-local. The decision changes the declared canon-bearing repo set, the rules for admitting or excluding peripheral repos, and the propagation contract that governs Phase 9 across Spore, IC, and PM. A Spore-only ADR would pre-commit IC and PM without constitutional authority over their topology role; an IC- or PM-only ADR would have the same defect in reverse. This is exactly the case reserved for foundational reframing: a repo-topology decision exceeds any single repo's ADR scope and changes the frame within which later ADRs are allowed to operate.

## Coherence argument

These three findings share one governing concept: the topology trunk.

- F-037 asks whether the current three-repo arrangement is actually the ratified canon-bearing topology or merely inherited practice.
- F-038 asks whether the duplicated shared-concept layer is tolerable, or whether it demands a new shared source of truth.
- F-039 asks how cross-repo merges are governed when the topology depends on three repos but enforcement surfaces are asymmetric.

One topology choice answers all three. If the trio is ratified, then F-038 becomes a question of guardrails and future extraction triggers rather than an unbounded redundancy complaint, and F-039 becomes a question of the explicit merge contract required by that topology. If the topology changed to a monorepo or to a new shared-canon host, both downstream questions would change with it. The findings therefore do not merely overlap; they are different faces of the same constitutional decision.

## Intended audience and prerequisites

This proposal is for the operator and any future reviewers who can authorize or execute canon-bearing changes across Spore, Intelligence Commons, and Poietic Match.

Prerequisites:

- familiarity with `docs/research/planning/corpus-foundational-review-v1-plan.md`, especially Phase 9 propagation and the branch-isolation rule;
- familiarity with `docs/research/planning/canon-review-protocol.md` and its session-atomic cross-repo coordination pattern;
- write and PR access to the three canon-bearing repos, or enough visibility to verify that a merge manifest reflects their actual merge state;
- awareness that `tmp/phase-0-readiness.md` and `tmp/phase-0-fallbacks.md` currently record a branch-protection visibility gap for IC and PM.

## Coordination-cost delta

The proposed state does **not** claim that coordination cost disappears. It converts an implicit, ambiguously bounded cost into an explicit and reviewable one.

| Metric | Before | After |
|---|---|---|
| Canon-bearing repo count | 3 by practice | 3 by ratified rule; expansion requires a successor topology proposal |
| Authoritative shared-concept surfaces | 3 repo-local copies with no explicit no-expansion rule | 3 repo-local copies, frozen at the trio and coordinated through declared cross-repo framing carriers |
| Coordinated ADR fan-out repos | 3 | 3 |
| Merge points | 3 PRs per coordinated round | 3 PRs per coordinated round, all named in one committed merge manifest |
| Manual propagation steps | Scope inference, repo selection, shared-framing sync, 3 PRs, recovery by plan prose | Fixed trio scope, declared carrier, committed manifest, explicit Spore -> IC -> PM merge/defer/revert contract |

The gain is governance clarity, not a magical reduction in repo count. This is acceptable because the capstone and canon-review-v1 history already show the trio is manageable at current scale, while the real defect is ambiguity about scope and merge enforcement.

## Merge governance

The cross-repo merge carrier for this topology is a committed manifest at `tmp/merge-manifests/<round>.md` in Spore.

Each manifest must name at minimum:

- the proposal or ADR set being propagated;
- the exact repo set in scope;
- branch names, PR identifiers, and head SHAs for Spore, IC, and PM;
- the intended merge order (`Spore` first, then `IC`, then `PM`, unless an authorized ADR bundle states otherwise);
- whether branch-protection state is verified, unverified, or substituted by PR-only handling for each repo;
- final merge SHAs and timestamps, or the fallback artifact used if the set did not complete.

Handling of asymmetric branch protections:

- Until IC and PM branch-protection state is verified through some other means, they are treated as **PR-gated but protection-unverified** repos.
- That means no silent assumption that platform enforcement exists. The manifest must record the uncertainty explicitly.
- If Spore merges and IC or PM then fail because of conflict, CI, or protection rejection, the operator must follow the existing plan rule: revert Spore through normal PR flow or publish `tmp/partial-merge-deferral-<ISO>.md` and keep the dependent repos on `corpus-review/v1`.

This does not eliminate the three-repo merge burden. It makes the burden auditable and prevents F-039 from surviving as folklore.

## Source bundle

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:16-31
  publicly-verifiable: true
  excerpt: "Repo topology unadjudicated."
  contributes: Establishes that topology is currently unresolved and that only Spore, IC, and PM are in editable scope while peripherals remain analysis-only.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:353-364
  publicly-verifiable: true
  excerpt: "Merge order: Spore first ... branch protection rejection."
  contributes: Shows that the current plan already depends on near-synchronous three-repo merges and treats protection rejection as a topology-level failure condition.
- source:
  kind: capstone-section
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:199-203
  publicly-verifiable: true
  excerpt: "Spore/IC/PM is a three-repo shared-canon hybrid."
  contributes: Classifies the present arrangement as a governance-domain hybrid rather than a merely incidental repo split.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/tmp/repo-topology-snapshot.md:7-29
  publicly-verifiable: true
  excerpt: "Shared concepts ... Coordination artifacts: strict `13`, broad `109`."
  contributes: Quantifies the duplicated shared-concept layer and shows that coordination burden exists even where explicit repo-edge references are sparse.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:323-340
  publicly-verifiable: true
  excerpt: "23 ADRs ... 6 coordinated shared-framing notes."
  contributes: Proves the trio has already been coordinated successfully, which supports ratifying the current topology rather than treating it as hypothetical.
- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-repo-topology.md:55-90
  publicly-verifiable: true
  excerpt: "common source of truth ... federation ... preserving separate repo autonomy"
  contributes: Supplies the four-option comparison space and shows why shared-canon and federated patterns are the relevant alternatives to a monorepo collapse.
- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-repo-topology.md:251-284
  publicly-verifiable: true
  excerpt: "without monorepo, it had to invest heavily in tools"
  contributes: Explains both why monorepo is tempting and why premature hybrid/workspace extraction adds cost without guaranteed payoff.
- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:14-14
  publicly-verifiable: true
  excerpt: "thin constitutional document ... above a thicker operational process"
  contributes: Supports the decision to constitutionalize the topology instead of leaving it as an operational habit.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/tmp/phase-0-readiness.md:16-16
  publicly-verifiable: false
  excerpt: "branch-protection API returned HTTP 403 on IC and PM"
  contributes: Records the concrete branch-protection visibility gap that turns F-039 from a theoretical concern into an operational one.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/tmp/phase-0-fallbacks.md:7-7
  publicly-verifiable: false
  excerpt: "Conservative fallback engaged: assume PR-based merge flow for Phase 9"
  contributes: Shows that the current process has already had to substitute a fallback for verified enforcement, which the new merge-manifest rule must surface explicitly.

## Cross-repo consultation

Companion artifact: `tmp/cross-repo-consultation-reframing-repo-topology-trunk.md`.

The consultation surface names Spore, Intelligence Commons, and Poietic Match as the consulted repos under the current topology, opens stance blocks for cooling-off review, and records the FR-17 single-operator caveat. Its job is to decide whether this proposal genuinely requires frame change rather than an ordinary canon-review ADR bundle.

## Execution gate

This proposal was opened on 2026-04-20 and is not eligible for ADR drafting before 2026-04-27.

Execution is gated by all of the following:

- the cooling-off window has elapsed;
- the consultation artifact signs off `frame-change-required: yes`;
- the consultation artifact signs off that ADR drafting may begin;
- every implementing ADR cites `authorized-by: reframing-repo-topology-trunk`;
- the implementing ADR bundle adopts only the topology ratified here, not a different topology by implication.

## ADR authorization plan

If authorized after cooling-off, this proposal permits a coordinated ADR bundle that does the following:

- one Spore ADR that records `adopted: ratify-three-repo-split`, the canon-bearing admission/exclusion rubric, the no-expansion guardrail, and the merge-manifest rule;
- one IC ADR that adopts the same topology decision from the IC side and binds IC to the same merge-manifest contract;
- one PM ADR that adopts the same topology decision from the PM side and binds PM to the same merge-manifest contract.

All three ADRs must cite this proposal in `authorized-by:` and the Phase 9 closeout must produce `tmp/repo-topology-decision.md` with `adopted: ratify-three-repo-split` per plan AC18.

This proposal does **not** authorize an immediate move to a monorepo, a thin shared-canon repo, or a workspace orchestrator. Those remain successor proposals if the explicit guardrails adopted here prove insufficient.

## Rollback and reversibility

This proposal is intentionally conservative, so reversibility is straightforward and non-destructive.

Rollback trigger evidence:

- a successor proposal is needed to admit a fourth canon-bearing repo;
- repeated shared-concept drift shows that three repo-local copies are no longer governable through the ratified trio plus framing carriers;
- repeated partial-merge deferrals or unresolvable branch-protection uncertainty show that the merge-manifest contract is insufficient.

Rollback order:

1. Revert the repo-local topology ADRs newest-first on `corpus-review/v1` or by normal PR-based `git revert` on `main` if Phase 9 has already completed.
2. Stop using the merge-manifest contract for new rounds and leave existing manifests in history as audit artifacts.
3. Replace or supersede `tmp/repo-topology-decision.md` through the successor proposal's ADR bundle.

Nothing in this reframing requires destructive writes, history rewriting, or `git reset --hard` on `main`. If the ratified trio later proves too costly, the next move is a new topology proposal, not an ad hoc repo migration.

## Execution record

Executed.

- Proposal state: `executed`
- Topology decision: `ratify-3-repo-with-scale-guardrail`
- Authorized ADRs:
  - `spore.canon-decision.repo-topology-ratification`
  - `ic.canon-decision.repo-topology-ratification`
  - `pm.canon-decision.repo-topology-ratification`
- Affected repo SHAs:
  - `939cd3f` — Spore ADR-0020 draft + merge-manifest convention + proposal `eligible -> authorized-ADR`
  - `7fe0f78` — Spore ADR-0020 activation
  - `b4c82c3` — IC ADR-0010 draft
  - `04123e2` — IC ADR-0010 activation
  - `35e5b2c` — PM ADR-0009 draft
  - `77c4c45` — PM ADR-0009 activation
  - `62fd5b1` — F-029 unblock (`reframing-learning-field-host-elevation` `cooling-off -> eligible`)
  - `db44006` — findings status updates (F-037, F-038, F-039)
- Merge-governance artifacts:
  - `tmp/repo-topology-decision.md`
  - `docs/research/planning/phase-9-merge-manifest-convention.md`
- Rollback record: revert newest-first from the execution close commit, then `db44006`, `62fd5b1`, `77c4c45`, `35e5b2c`, `04123e2`, `b4c82c3`, `7fe0f78`, `939cd3f`

## Open questions

- Should `tmp/phase-0-readiness.md` and `tmp/phase-0-fallbacks.md` be committed later so the branch-protection evidence for F-039 becomes publicly verifiable, or is the findings/P4.6 record intended to remain the durable audit surface?
- What concrete threshold should trigger reconsideration of Option 3: admission of a fourth canon-bearing repo, repeated shared-concept drift, repeated partial-merge deferrals, or some other measurable pressure?
- `reframing-learning-field-host-elevation` (F-029) depends on this proposal. It must not become `eligible` before this proposal reaches `authorized-ADR`; the operator needs to track that sequencing explicitly during cooling-off and Phase 7 handoff.
