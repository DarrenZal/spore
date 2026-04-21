# Phase 4 Pass P4.6 — Repo-topology diagnostic

**Pass:** P4.6
**Agent:** Codex
**Date:** 2026-04-19
**Scope:** Spore / Intelligence Commons / Poietic Match repo topology, plus analysis-only peripherals (`darren-workflow`, `flowcoding`, `koi-processor`)
**Inventory anchors:** `tmp/repo-topology-snapshot.md`; `docs/research/corpus-review/research-repo-topology.md`; `docs/research/corpus-review/research-capstone.md`; `docs/research/corpus-review/research-governance-process.md`; `docs/research/planning/corpus-foundational-review-v1-plan.md`; `tmp/phase-0-readiness.md`; `tmp/phase-0-fallbacks.md`; `docs/research/planning/canon-review-protocol.md`

## Findings

```yaml
- finding-id: P4-6-001
  type: missing
  severity: S2
  priority: important
  corpus-location: repo-topology
  target:
    repo: N/A
    doc: N/A
    concept: N/A
    line_range: N/A
  claim: |
    Spore/IC/PM is already operating as a three-repo shared-canon hybrid, but that topology is still policy-by-practice rather than a ratified constitutional choice. The plan says the split is "unadjudicated," the capstone already classifies it as a governance-domain hybrid, and the same plan simultaneously excludes the three peripherals from edit scope while deferring a later propagation-scope decision. That leaves three load-bearing questions unanswered in canon terms: why exactly these three repos are canon-bearing, what would justify collapsing or expanding the set, and how analysis-only repos graduate into or remain outside the topology. The correct state is an explicit topology decision that either adopts the current three-repo split or revises it, while naming inclusion and exclusion rules for peripherals.
  current-topology: |
    A three-repo shared-canon hybrid across Spore, IC, and PM, with `darren-workflow`, `flowcoding`, and `koi-processor` treated as analysis-only inputs rather than canon-bearing repos.
  alternative-evaluated: |
    Keep the current split, but constitutionalize it through an explicit topology decision that defines the core trio, the criteria for adding or removing canon-bearing repos, and the boundary between core repos and analysis-only peripherals.
  evidence-for-alternative: |
    The snapshot shows the core trio is lightly linked by explicit repo-edge references but heavily coordinated through shared concepts and coordination artifacts; the capstone says the split maps governance domains rather than team boundaries; and governance-process research says mature systems put a thin constitutional rule above operational procedure. That combination supports formalizing the current hybrid before changing it.
  coordination-cost-delta: |
    Slight upfront decision-writing cost, but lower recurring ambiguity during Phase 7/9 because propagation scope, repo admission, and peripheral treatment stop being re-litigated case by case.
  sovereignty-impact: |
    Preserves IC/PM repo autonomy if the current split is adopted explicitly, because separate governance domains become a declared rule rather than a habit that can be overridden ad hoc.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:16-16
      excerpt: "Repo topology unadjudicated."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:31-31
      excerpt: "Repos outside Spore/IC/PM receive no edits. Analysis-only scope for darren-workflow, flowcoding, koi-processor."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:364-364
      excerpt: "Dependent-repo propagation scope decision ... what was considered and what defers to downstream plans."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/tmp/repo-topology-snapshot.md:10-11
      excerpt: "Cross-repo edges: strict `0`, broad `0`. Coordination artifacts: strict `13`, broad `109`."
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:201-203
      excerpt: "Spore/IC/PM is a three-repo shared-canon hybrid ... split ... reflects distinct governance domains."
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:14-14
      excerpt: "layered governance in which a thin constitutional document is held above a thicker operational process"
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  notes: Overlaps P4.3 on governance-process layering and on how `tmp/repo-topology-decision.md` / `tmp/propagation-scope-decision.md` should be framed.

- finding-id: P4-6-002
  type: overlapping/redundant
  severity: S2
  priority: important
  corpus-location: repo-topology
  target:
    repo: N/A
    doc: N/A
    concept: shared-canon layer
    line_range: N/A
  claim: |
    The current topology duplicates a common concept layer across three repos without a single authoritative source for those cross-project terms. The same twelve concepts recur in every Spore/IC/PM pair, yet canon-review-v1 still had to push six coordinated shared-framing sets and twenty-three ADRs through session-atomic windows to keep the trio aligned. That is enough evidence to call the shared-canon layer redundant at the repo boundary even if it is not yet enough to justify a full monorepo. The correct state is either a thin shared-canon source/workspace for cross-project primitives, or an explicit scale guardrail that freezes the canon-bearing set at the current trio until equivalent cross-repo automation exists.
  current-topology: |
    Three separate repos carry overlapping canon concepts, but there is no single SHA or shared package/workspace that owns the common primitive layer.
  alternative-evaluated: |
    Extract a thin shared-canon layer for cross-project primitives (for example, a dedicated shared repo or workspace overlay) while leaving repo-local foundations and implementation surfaces separate.
  evidence-for-alternative: |
    The topology snapshot shows all three repo pairs share the same concept cluster while explicit repo-edge coupling remains near zero; canon-review-v1 succeeded only by tightly coordinated multi-repo commit sets; the capstone says recent cross-cutting findings required synchronous edits that a monorepo would have made atomic; and Tradition 14 says shared-canon/federated models exist precisely to recover monorepo-like consistency without fully surrendering repo autonomy.
  coordination-cost-delta: |
    Shared-concept edits become cheaper and less failure-prone because the common layer moves from manual triple-sync to one canonical update path, at the cost of adding a dependency-management or workspace convention.
  sovereignty-impact: |
    Moderately reduces repo sovereignty because shared primitives would have a central home, but it preserves far more autonomy than a full monorepo because repo-local canon and implementation can still evolve separately.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/tmp/repo-topology-snapshot.md:8-10
      excerpt: "Shared concepts with intelligence-commons ... Shared concepts with poietic-match ... Cross-repo edges: strict `0`, broad `0`."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:330-340
      excerpt: "23 ADRs ... 6 coordinated shared-framing notes ... Session-atomic 30-min window cleared ... in all 6 coordinated sets."
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:201-203
      excerpt: "cross-cutting findings ... required synchronous coordinated edits across three repos that a monorepo would have made atomic"
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-repo-topology.md:65-76
      excerpt: "common source of truth ... federation ... monorepo-like assurances ... preserving separate repo autonomy"
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-repo-topology.md:263-266
      excerpt: "without monorepo, it had to invest heavily in tools to approach monorepo-like capabilities"
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  notes: Overlaps P4.2 where shared concepts may also appear as cross-doc duplication, and P4.3 where frozen-concept / projection infrastructure is assessed.

- finding-id: P4-6-003
  type: missing
  severity: S2
  priority: blocking
  corpus-location: repo-topology
  target:
    repo: N/A
    doc: N/A
    concept: merge-governance
    line_range: N/A
  claim: |
    The three-repo topology has a blocking operational governance gap at the merge boundary. Phase 0 could not verify branch-protection state for IC or PM because the GitHub protection API returned 403s, yet the Phase 9 plan still requires near-synchronous PR merges across all three repos and treats branch-protection rejection as a partial-merge failure that may force reverting Spore. In other words, the topology's propagation invariant exists as a plan rule but not as a verified enforcement surface across the dependent repos. Before Phase 9, the project needs either an explicit cross-repo PR gate / merge manifest that makes the three-repo merge set auditable under asymmetric protections, or a more centralized merge surface for canon-bearing changes.
  current-topology: |
    Three independent repos with asymmetric branch-protection visibility: Spore is the canon host, while IC and PM fall back to PR-based merge assumptions because protection status could not be verified.
  alternative-evaluated: |
    Preserve the three-repo split, but add a topology-specific merge-governance layer (shared PR checklist, merge manifest, and explicit fallback authority), or centralize merge-critical canon changes into one protected host surface.
  evidence-for-alternative: |
    Phase 0 recorded the 403s directly; the fallback memo had to assume PR-based flow for IC/PM; Phase 9 names branch-protection rejection as a merge-failure trigger with default Spore revert; Tradition 14 says polyrepo teams need multi-repo integration tooling to simulate atomicity; and Tradition 15 warns that structureless governance leaves power unaccountable rather than absent.
  coordination-cost-delta: |
    A formal gate adds explicit review and merge choreography, but it reduces partial-merge / revert risk and makes failure handling cheaper than discovering protection mismatches mid-propagation.
  sovereignty-impact: |
    A shared merge-governance layer preserves repo sovereignty while binding the repos to a common propagation contract; centralizing merge authority further reduces IC/PM autonomy but also removes the asymmetric-enforcement gap.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/tmp/phase-0-readiness.md:16-16
      excerpt: "branch-protection API returned HTTP 403 on IC and PM; PR-based Phase 9 fallback logged"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/tmp/phase-0-fallbacks.md:7-7
      excerpt: "both returned HTTP 403 ... Conservative fallback engaged: assume PR-based merge flow for Phase 9"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:353-358
      excerpt: "Merge order: Spore first ... Merge failure triggers: PR conflict, CI failure, branch protection rejection."
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-repo-topology.md:263-266
      excerpt: "multi-repo CI to simulate atomic integration"
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:96-96
      excerpt: "the absence of formal structure does not eliminate hierarchy; it makes hierarchy unaccountable"
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  notes: Overlaps P4.3 on Phase 9 merge governance and escalation-path design.
```

## Pass summary

I’m emitting 3 findings, all at S2: 2 `important`, 1 `blocking`. The split itself is not refuted by the current evidence; the stronger pattern is that Spore is already in a viable-but-under-specified hybrid, with the hardest risk concentrated at merge-governance and the next two risks concentrated at missing constitutionalization and duplicated shared-canon surfaces.

The evidence does not justify a blanket "move to monorepo now" conclusion. It does justify two nearer-term constraints for consolidation: treat the three-repo split as something that must be explicitly adopted or revised, and do not expand the canon-bearing repo set without either a thin shared-canon layer or stronger cross-repo automation.

## Pass-level caveats

`tmp/repo-topology-snapshot.md` explicitly marks strict URI edge counts as conservative because current corpus practice still uses raw `doc_id`-style references more often than `spec:<repo>.*` URIs. I therefore treated the edge counts as lower bounds and paired them with coordination-artifact counts and canon-review-v1 coordination history rather than reading `0` strict edges as "no coupling."

The snapshot also says coordination-artifact counts are heuristic document counts rather than git-session counts, and the analysis-only peripheral concept lists are text-grep approximations. I used them to evaluate boundary pressure and scope drift, not as precise dependency graphs. I did not perform new GitHub API probes beyond the committed Phase 0 readiness/fallback logs.
