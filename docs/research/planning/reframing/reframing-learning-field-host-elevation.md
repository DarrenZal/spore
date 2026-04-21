---
doc_id: spore.foundational-reframing.reframing-learning-field-host-elevation
doc_kind: proposal
status: authorized-ADR
covers: [F-029]
depends-on: [reframing-repo-topology-trunk]
proposal_kind: relayer
author: Darren Zal
approver: Darren Zal
opened-on: 2026-04-20
eligible-on: 2026-05-04
eligible-bumped-on: 2026-04-21T06:08:30Z
consultation_artifact: tmp/cross-repo-consultation-reframing-learning-field-host-elevation.md
authorized_adrs:
  - spore.canon-decision.learning-field-protocol-elevation
  - ic.canon-decision.learning-membrane-pattern-demotion
authorized-adr-opened-on: 2026-04-21T16:29:23Z
---

# Reframing Proposal: Learning-field Host Elevation

## Problem

F-029 identifies a host-boundary mismatch inside the meta-corpus layer. Spore's review machinery treats the learning-field structure as a cross-project governance dependency, and the intake protocol already frames intake/canon evolution as a shared process across Spore, Intelligence Commons, and Poietic Match. But the defining artifact for that structure currently lives in Intelligence Commons as `docs/patterns/project-learning-membrane.md`, which is an IC-local pattern surface rather than a cross-project meta-corpus host.

That placement makes the wrong layer authoritative. The artifact is load-bearing beyond IC, but its current home implies local ownership, local scope, and local amendment discipline. This is a governance mismatch, not just a documentation preference.

## Proposed reframing

The reframing is to elevate the authoritative learning-field structure out of an IC-local pattern host and into a formal cross-project meta-corpus host whose repo and path match the topology decision ratified by `reframing-repo-topology-trunk`. This proposal authorizes that elevation in principle but does not pre-commit the final host until the trunk proposal reaches `authorized-ADR`.

Scenario-conditional host options:

| Scenario | Topology condition | Authoritative host | Effect on IC pattern doc |
|---|---|---|---|
| A | Three-repo topology remains in force | Spore hosts `docs/research/planning/learning-field-protocol-v1.md` beside the other meta-corpus protocols | `project-learning-membrane.md` becomes an IC-local instantiation/reference pattern, not the authoritative cross-project host |
| B | Shared-canon-hybrid topology is authorized | A shared-canon surface hosts the authoritative learning-field protocol | `project-learning-membrane.md` becomes an IC-local consumer/instantiation that points to the shared source of truth |
| C | Monorepo topology is authorized | The unified repo's meta-corpus layer hosts the authoritative learning-field protocol | The former IC pattern content is either narrowed to local implementation guidance or archived as historical context inside the unified repo |

Scenario-neutral invariants:

- There is one authoritative cross-project host for the learning-field structure.
- The authoritative host is formal meta-corpus, not a project-local pattern-literature surface.
- IC may keep a local pattern or implementation note, but that artifact no longer carries sole authority for the cross-project structure.
- No scenario-specific doc move or host rewrite happens directly from this proposal; all implementation flows through later ADRs.

Provisional host/slug mapping table (final mapping determined by topology outcome):

| Predecessor slug or host role | Scenario A successor | Scenario B successor | Scenario C successor | Provisional disposition | Existing-reference plan |
|---|---|---|---|---|---|
| `ic.project-learning-membrane` as the authoritative cross-project host | `spore.planning.learning-field-protocol` | `shared-canon.learning-field-protocol` | `unified.meta-corpus.learning-field-protocol` | `historical-gloss` until the topology outcome fixes the successor; after execution, IC keeps only a local-instantiation role if still needed | Cross-project references retarget to the authoritative protocol chosen by the trunk ADR bundle; IC-local references may continue to point at the pattern only where they describe IC-specific practice |

## Why ADR scope is insufficient

An ordinary canon-review ADR cannot resolve this safely because the problem crosses both repo and layer boundaries:

- Criterion 3 applies: the change re-layers a governance artifact from project-local pattern literature into formal cross-project meta-corpus.
- Criterion 8 applies in practice: the authoritative host participates in the protocol surface that governs intake/canon flow across repos.
- The host decision is topology-dependent. Any repo-local ADR drafted before `reframing-repo-topology-trunk` authorizes a topology would silently pre-commit downstream topology.

## Intended audience and prerequisites

The intended audience is the active operator/contributor set across Spore, Intelligence Commons, and Poietic Match who can inspect all affected repos and are responsible for canon governance.

Prerequisites:

- Read `foundational-reframing-protocol-v1.md` and understand the `cooling-off -> eligible -> authorized-ADR` lifecycle.
- Understand the current intake/canon two-protocol pair and why the learning-field structure currently sits upstream of canon review.
- Be able to inspect the topology trunk proposal and whichever scenario it authorizes before drafting implementation ADRs.

## Source bundle

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-findings.md:946-975
  publicly-verifiable: true
  excerpt: "The learning-field structure is in scope as a meta-corpus dependency..."
  contributes: Authoritative finding statement, target artifact, and dependency on F-037.
- source:
  kind: inventory-row
  ref: /Users/darrenzal/projects/spore/tmp/meta-corpus-inventory.tsv:8-8
  publicly-verifiable: true
  excerpt: "learning-field-structure intelligence-commons/docs/patterns/project-learning-membrane.md"
  contributes: Shows the current learning-field structure is already treated as a meta-corpus artifact while hosted in IC.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:105-114
  publicly-verifiable: true
  excerpt: "Learning-field structure as currently documented in IC's `project-learning-membrane` pattern"
  contributes: Establishes that the learning-field structure is reviewable as meta-corpus, not merely as background pattern literature.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/learning-field-intake-protocol.md:16-21
  publicly-verifiable: true
  excerpt: "This protocol is the first half of a two-protocol pair..."
  contributes: Anchors the cross-project governance claim by naming the shared intake/canon evolution surface.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:43-103
  publicly-verifiable: false
  excerpt: "Separate the learning system into four surfaces, connected by a governed membrane."
  contributes: Supplies the current authoritative structure now carrying cross-project load from an IC-local host.
- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:176-178
  publicly-verifiable: true
  excerpt: "a layering is a hypothesis about what will vary independently"
  contributes: Supplies the layering principle showing why host placement should follow governance scope rather than historical convenience.

## Cross-repo consultation

Companion artifact: `tmp/cross-repo-consultation-reframing-learning-field-host-elevation.md`.

At proposal open, the consulted-repo set is Spore, Intelligence Commons, and Poietic Match because the learning-field structure is claimed as part of the shared intake/canon control surface across those repos. The artifact is intentionally opened with pending stance blocks so cooling-off can begin without manufacturing consensus. Per FR-17, this is an externalized self-review surface under solo-operator conditions, not proof of independent approval.

## Execution gate

This proposal may not transition from `cooling-off` to `eligible` until all of the following are true:

- The 14-day meta-corpus cooling-off window has elapsed on or after `2026-05-04`.
- The consultation artifact records `Frame-change required: yes`.
- `reframing-repo-topology-trunk` has reached at least `authorized-ADR`.

Until those conditions hold, this proposal authorizes no host move and no scenario-specific ADR drafting. If the topology trunk resolves to a host arrangement that cannot be mapped cleanly onto Scenario A, B, or C, this proposal must be amended before ADR drafting begins.

## ADR authorization plan

`authorized_adrs:` remains empty in this opening commit because the scenario-dependent ADR bundle is not known yet. Once the proposal becomes `eligible` and the topology trunk is authorized, populate `authorized_adrs:` according to the selected scenario:

| Scenario | ADR bundle |
|---|---|
| A | One Spore ADR to create/ratify the authoritative learning-field protocol host, plus one IC ADR to narrow `project-learning-membrane.md` into a local instantiation/reference artifact |
| B | One shared-canon ADR to create the authoritative host, plus companion adoption/reference notes in Spore, IC, and PM naming how each repo consumes that host |
| C | One unified-repo ADR to host and govern the learning-field protocol inside the unified meta-corpus layer |

Phase 7 ADR drafting waits for both this proposal's eligibility gate and the trunk proposal's topology authorization. This proposal authorizes host elevation only; it does not authorize unrelated content rewrites to the learning-field structure.

## Rollback and reversibility

Rollback remains non-destructive and scenario-conditioned:

- Scenario A: revert the IC demotion/reference ADR commits newest-first, then revert the Spore host-adoption ADR commits; the pre-existing IC pattern resumes authoritative duty until a successor proposal is opened.
- Scenario B: revert repo-level adoption/reference commits newest-first, then revert the shared-canon extraction/adoption commits; authority falls back to the pre-execution host arrangement.
- Scenario C: revert the unified-repo learning-field host ADR commits newest-first, then follow the topology trunk's own reversibility plan if the broader unification must also be unwound.

In every case, rollback uses normal revert flow rather than destructive history edits. Exact repo SHAs and ADR identifiers are recorded only at `executed` time.

## Execution record

Pending. Populate at `executed` with:

- scenario chosen
- authorized ADR IDs and paths
- affected repo SHAs
- implementation commit SHAs
- rollback targets, if any

## Open questions

- Which scenario does `reframing-repo-topology-trunk` ultimately authorize, and does its final topology map cleanly onto A, B, or C?
- If the topology outcome resembles the trunk plan's workspace-style option more than the three explicit scenarios above, should that collapse into Scenario B or reopen this proposal as a material amendment?
- After elevation, should `project-learning-membrane.md` remain a living IC-local pattern, or should it split into a thinner local instantiation note plus a historical record of the former cross-project host?
- Does the IC `learning-field-roadmap` stay an IC-local operational artifact, or does part of its governance role also need host review once the authoritative structure moves?
- The 14-day clock elapses on `2026-05-04`, but this proposal still cannot become `eligible` until the topology trunk reaches `authorized-ADR`; operator tracking must treat that dependency gate as expected behavior, not delay drift.
