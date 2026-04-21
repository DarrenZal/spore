# Repo Topology Decision

- proposal: `reframing-repo-topology-trunk`
- decision date: 2026-04-20
- adopted: ratify-3-repo-with-scale-guardrail
- option chosen: Option 1 — ratify the current three-repo split
- authority record: this file is the AC18 operator-facing topology decision artifact for Phase 7 / Phase 9

## Decision

Ratify `Spore`, `Intelligence Commons`, and `Poietic Match` as the complete canon-bearing repo topology under the current corpus-review program.

This ratification is conditional on three constitutional controls:

1. A canon-bearing rubric that keeps `darren-workflow`, `flowcoding`, and `koi-processor` analysis-only until a successor topology proposal proves they should join the canon-bearing set.
2. A scale guardrail that freezes the canon-bearing set at the current trio until either stronger cross-repo automation exists or a successor proposal authorizes a different topology.
3. A merge-governance contract that requires every coordinated cross-repo merge set to be carried by a committed manifest in Spore.

## Why This Option

Option 1 is the narrowest decision that closes all three findings without creating a larger topology migration than the evidence currently justifies.

- F-037 closes because the canon-bearing set is no longer implicit. The trio is explicit, peripherals are explicit, and admission rules for any future repo are explicit.
- F-038 closes because the shared-canon duplication now has a declared containment strategy: keep the three repo-local copies, forbid silent expansion, and defer extraction to a successor proposal instead of pretending the current boundary has no cost.
- F-039 closes because merge governance becomes part of the topology itself rather than an unwritten execution habit.

The rejected options remain real successors, not silent defaults:

- Option 2 `collapse to monorepo`: not justified at the current evidence bar because current coordination has held at three repos and the literature warns monorepo gains depend on tooling investment and scale.
- Option 3 `shared-canon hybrid with thin cross-project source`: directionally attractive for the duplicated concept layer, but premature before the canon-bearing set grows beyond three or the host/governance layer is specified.
- Option 4 `workspace-style orchestrator`: adds orchestration surface without removing the current merge-governance and shared-canon duplication burdens.

## Canon-Bearing Rubric

The canon-bearing set is currently limited to:

- `Spore`
- `Intelligence Commons`
- `Poietic Match`

Analysis-only repos remain outside the canon-bearing set:

- `darren-workflow`
- `flowcoding`
- `koi-processor`

A future repo may join the canon-bearing set only through a successor topology proposal that proves all of the following:

1. It hosts load-bearing canon or governance material that cannot responsibly live inside the current trio.
2. Its inclusion reduces ambiguity more than it increases coordinated ADR and merge burden.
3. It can participate in the same branch, ADR-lineage, PR, merge-manifest, and rollback discipline as the current trio.

## Shared-Canon Layer Handling

The current trio keeps its repo-local copies of shared concepts. No fourth canon-bearing shared-canon host is created by this decision.

The containment rule is:

- cross-project concept alignment remains coordinated through Spore-hosted topology/round carriers;
- repo-local copies stay acceptable only while the canon-bearing set remains frozen at three;
- successor proposals must reopen the topology if a fourth canon-bearing repo is needed or if repeated concept drift shows the trio can no longer govern the duplicated layer cleanly.

## Coordination-Cost Delta

| Metric | Before | After |
|---|---|---|
| Canon-bearing repo count | 3 by practice | 3 by ratified rule; expansion requires a successor topology proposal |
| Authoritative shared-concept surfaces | 3 repo-local copies with no explicit no-expansion rule | 3 repo-local copies, frozen at the trio and coordinated through Spore-hosted decision/framing carriers |
| Coordinated ADR fan-out repos | 3 | 3 |
| Merge points | 3 PRs per coordinated round | 3 PRs per coordinated round, all named in one committed merge manifest |
| Manual propagation steps | Scope inference, repo selection, shared-framing sync, 3 PRs, recovery by plan prose | Fixed trio scope, explicit topology decision, committed merge manifest, explicit `Spore -> IC -> PM` merge/defer/revert contract |

## Merge Governance

Every coordinated cross-repo merge set must be carried by a committed manifest at:

`tmp/merge-manifests/<round-slug>.md`

Each manifest is the audit artifact for that merge set and must record:

- the proposal or ADR set being propagated;
- the repo set in scope;
- branch names, PR identifiers, and head SHAs for Spore, IC, and PM;
- readiness checks and whether branch protection is `verified`, `unverified`, or substituted by PR-only handling for each repo;
- intended merge order, which defaults to `Spore` first, then `IC`, then `PM`;
- final merge SHAs and timestamps, or the fallback artifact used if the set does not complete.

Asymmetric branch-protection handling is conservative by default:

- `IC` and `PM` are treated as `PR-gated / protection-unverified` until independent verification exists.
- No manifest may assume API-level enforcement for IC or PM unless that verification is recorded.
- If Spore merges and IC or PM then fail because of conflict, CI, or branch-protection rejection, the operator must either revert Spore through normal PR flow or publish `tmp/partial-merge-deferral-<ISO>.md` and keep the dependent repos on `corpus-review/v1`.

## Reversibility Triggers

This decision should be reopened by successor topology proposal if any of the following becomes true:

- a fourth repo needs canon-bearing status;
- repeated shared-concept drift shows the three repo-local copies are no longer governable through the current carriers;
- repeated partial-merge deferrals or unresolved protection-state uncertainty show the merge-manifest contract is insufficient.

## Ratification Path

This decision is implemented by the coordinated ADR bundle:

- `spore:ADR-0020 repo-topology-ratification`
- `intelligence-commons:ADR-0010 repo-topology-ratification`
- `poietic-match:ADR-0009 repo-topology-ratification`
