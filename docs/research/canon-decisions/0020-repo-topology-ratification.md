---
doc_id: spore.canon-decision.repo-topology-ratification
doc_kind: decision-record
status: active
adr_number: "0020"
opened-on: 2026-04-20
closed-on: 2026-04-20
covers:
  - F-037
  - F-038
  - F-039
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-capstone:R1
  - spec:spore.corpus-review.research-repo-topology:R1
r_claim_statement: |
  Spore, Intelligence Commons, and Poietic Match should be ratified as the complete canon-bearing repo topology under the current corpus-review program. The shared-canon duplication is governable at the current scale only if the trio is frozen at three repos and every coordinated merge set is tracked by a committed manifest that makes asymmetric branch-protection visibility explicit.
supported_by:
  - tmp/repo-topology-decision.md
  - docs/research/planning/reframing/reframing-repo-topology-trunk.md
  - docs/research/planning/phase-9-merge-manifest-convention.md
  - docs/research/planning/corpus-foundational-review-v1-plan.md:16-31
  - docs/research/planning/corpus-foundational-review-v1-plan.md:353-364
  - docs/research/corpus-review/research-capstone.md:199-203
  - docs/research/corpus-review/research-repo-topology.md:55-90
  - docs/research/corpus-review/research-governance-process.md:14-14
  - tmp/repo-topology-snapshot.md
  - tmp/phase-0-readiness.md
  - tmp/phase-0-fallbacks.md
authorized-by: reframing-repo-topology-trunk
queue_reference: "Phase 7 reframing-repo-topology-trunk (F-037, F-038, F-039)"
affects_canon:
  - tmp/repo-topology-decision.md
  - docs/research/planning/phase-9-merge-manifest-convention.md
related_adrs:
  - intelligence-commons:ADR-0010-repo-topology-ratification
  - poietic-match:ADR-0009-repo-topology-ratification
shared_framing: /Users/darrenzal/projects/spore/tmp/repo-topology-decision.md
concepts:
  - repo-topology
  - shared-canon-layer
  - merge-governance
---

# ADR-0020 — Repo Topology Ratification

## Status

active (drafted and activated 2026-04-20 under `reframing-repo-topology-trunk`)

## Context

Spore, Intelligence Commons, and Poietic Match already behave as a coordinated canon-bearing trio, but the corpus still treats that topology as practice rather than as an explicit constitutional choice. The plan says the topology is unadjudicated. The capstone already classifies the trio as a shared-canon hybrid. The topology snapshot shows a repeated shared concept layer across all three repos, while Phase 9 already assumes near-synchronous propagation across the trio.

That leaves three defects unresolved unless the topology itself is ratified:

1. F-037: there is no canon-bearing rubric stating why these three repos count and why peripherals do not.
2. F-038: the shared concept layer is duplicated across repo boundaries with no declared containment rule.
3. F-039: the propagation invariant exists in plan prose, but the merge boundary is not auditable under asymmetric branch-protection visibility.

The evidence does not justify a larger structural migration today. It does justify making the current topology explicit, bounded, and reversible.

## Decision

Ratify the current three-repo split as the complete canon-bearing topology for the current corpus-review program.

### Canon-bearing rubric

The canon-bearing set is:

- `Spore`
- `Intelligence Commons`
- `Poietic Match`

The following remain analysis-only under the current topology:

- `darren-workflow`
- `flowcoding`
- `koi-processor`

A future repo may join the canon-bearing set only through a successor topology proposal that proves it hosts load-bearing canon or governance material that cannot responsibly live in the current trio, reduces ambiguity more than it increases coordination burden, and can participate in the same branch, ADR-lineage, PR, merge-manifest, and rollback discipline as the current trio.

### Scale guardrail

Resolve F-038 conservatively. Keep the current repo-local copies of shared concepts, but freeze the canon-bearing set at the current trio until stronger automation exists or a successor topology proposal authorizes either a thin shared-canon host or a topology collapse.

### Shared-canon layer handling

Do not create a fourth canon-bearing host in this bundle. Cross-project concept alignment remains coordinated through Spore-hosted decision/framing carriers, while repo-local copies stay authoritative within their own repos. This keeps the current structure governable without pretending the duplication is free.

### Merge-governance mechanism

Adopt `tmp/merge-manifests/<round-slug>.md` in Spore as the cross-repo merge carrier and audit artifact for each coordinated merge set. Each manifest must record the repo set, branches, PR identifiers, head SHAs, readiness checks, protection-state label for each repo, intended merge order, and final merge SHAs or fallback artifact.

Until independently verified, IC and PM are treated as `PR-gated / protection-unverified`. If Spore merges first and either downstream repo then fails because of conflict, CI, or protection rejection, the operator must either revert Spore through normal PR flow or publish `tmp/partial-merge-deferral-<ISO>.md` and keep the dependent repos on `corpus-review/v1`.

## Rationale

Option 1 is the correct choice at the current evidence bar.

- It closes F-037 directly by naming the trio, the peripherals, and the admission rule.
- It closes F-038 by turning the current duplicated shared layer into an explicitly bounded condition rather than a silently expanding one.
- It closes F-039 by binding topology to an auditable merge carrier instead of leaving merge governance as folklore.

The alternatives remain successor options, not current defaults.

- Option 2, monorepo collapse, would remove the fan-out surface but is not justified yet because the current trio has already executed coordinated changes successfully and the literature warns that monorepo benefits are tooling-dependent.
- Option 3, thin shared-canon host, is plausible later but premature now because it adds another governance surface before the canon-bearing set has exceeded three repos.
- Option 4, workspace orchestrator, increases tooling surface without removing the current duplication or merge uncertainty.

## Consequences

- The trio is now explicit rather than inferred.
- Expansion beyond the trio requires a successor proposal.
- Shared-concept duplication remains acceptable only under the freeze-at-three guardrail.
- Every coordinated merge set now needs a committed merge manifest.
- The decision is reversible by successor proposal if a fourth canon-bearing repo, repeated concept drift, or repeated partial-merge deferrals show the ratified topology is no longer sufficient.

## Evidence

- F-037 evidence gate: pass
  - `docs/research/planning/corpus-foundational-review-v1-plan.md` names repo topology as unadjudicated and limits editable canon-bearing scope to Spore, IC, and PM
  - `docs/research/corpus-review/research-capstone.md` already classifies the trio as a shared-canon hybrid
  - `tmp/repo-topology-snapshot.md` quantifies current coordination burden and shared concept overlap
- F-038 evidence gate: pass
  - `tmp/repo-topology-snapshot.md` shows the duplicated shared concept layer across every pair in the trio
  - `docs/research/planning/canon-review-protocol.md` records the prior cross-repo ADR and shared-framing fan-out
  - `docs/research/corpus-review/research-repo-topology.md` supports guardrailed hybrid handling as the least distortive next step
- F-039 evidence gate: pass
  - `tmp/phase-0-readiness.md` and `tmp/phase-0-fallbacks.md` record the IC/PM branch-protection visibility gap
  - `docs/research/planning/corpus-foundational-review-v1-plan.md` already defines merge order and partial-merge fallback
  - `docs/research/corpus-review/research-governance-process.md` supports making the merge boundary auditable rather than implicit

## Diff summary

- `tmp/repo-topology-decision.md`: records the adopted topology choice per AC18
- `docs/research/planning/phase-9-merge-manifest-convention.md`: names the committed merge-manifest contract for Phase 9 propagation
