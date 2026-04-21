---
doc_id: spore.foundational-reframing.reframing-frozen-vocabulary-role
doc_kind: proposal
status: eligible
covers: [F-028]
proposal_kind: protocol-amendment
author: Darren Zal
approver: Darren Zal
opened-on: 2026-04-20
eligible-on: 2026-05-04
eligible-bumped-on: 2026-04-21T00:29:05Z
consultation_artifact: tmp/cross-repo-consultation-reframing-frozen-vocabulary-role.md
authorized_adrs: []
---

# Reframing Proposal - Frozen Vocabulary Role

## Problem

`docs/research/concepts-p2p-wiki.yaml` still declares itself as an intake-scoped bridge-note vocabulary for the P2P Foundation wiki. In current operation, that description is false. Canon-review v2 uses the file as a legality gate for `concepts:` entries across ADRs, canon edits, and shared framing notes, and the corpus-foundational-review methodology names it as part of the meta-corpus layer rather than as disposable intake scaffolding.

That creates role-definition drift. The artifact's slug set may be stable, but its declared role, governance boundary, and change procedure are not. The file is carrying cross-project canonical-vocabulary authority without a matching purpose statement and without a companion governance surface that explains admission, aliasing, deprecation, and version-bump discipline. The result is a meta-corpus constraint surface that still presents itself as a narrow intake aid.

The problem is therefore not "the frozen vocabulary is wrong" and not "the file path must be renamed now." The problem is that a governance artifact is being enforced one layer above its self-description, which makes future amendments harder to scope, audit, and cool off correctly.

## Proposed reframing

This proposal reframes `concepts-p2p-wiki.yaml` as a cross-project canonical vocabulary artifact whose current operational load must be named explicitly.

1. Update the file's declared purpose so it describes the role the artifact already plays: the frozen cross-project concept vocabulary governing canon-edit and ADR concept usage across Spore, Intelligence Commons, and Poietic Match.
2. Add an explicit governance surface for vocabulary changes. The implementing ADR may either create a standalone `vocabulary-governance-protocol-v1.md` or place equivalent rules in canon-review-protocol v3, but it must name admission, alias, deprecation, and version-bump discipline directly.
3. Keep the current file path and slug set unchanged in this reframing. No slug additions, slug renames, or file-path rename are authorized here.
4. Treat the artifact's existing meta-corpus admission in `tmp/meta-corpus-inventory.tsv` and FR-20's double-cooling rule as part of the role definition that future amendments must preserve.

## Why ADR scope is insufficient

An ordinary canon-review ADR is the wrong mechanism because the defect is not a doc-local wording issue. The artifact's governance role has drifted upward into meta-corpus territory: it now defines which concept slugs are legal in shared canon work across repos. Under FR-1, revising a meta-corpus protocol belongs in foundational reframing, and under FR-2, governance-role changes on wider-scope artifacts route upward by default.

A local ADR could change the purpose line in `concepts-p2p-wiki.yaml`, but that would not by itself settle the artifact's cross-project governance role, its relation to cooling-off rules, or the missing protocol surface for admission and deprecation. The needed change is a role redefinition with an explicit governance wrapper, not just an editorial repair to one file header.

## Intended audience and prerequisites

The primary audience is the current operator and any active contributors reviewing or executing canon-governance changes across Spore, Intelligence Commons, and Poietic Match.

Reviewers and implementers are expected to understand:

- the canon-review protocol's frozen-vocabulary gate
- the corpus-foundational-review methodology's meta-corpus layer
- the foundational-reframing protocol's cooling-off and consultation rules
- the current cross-repo topology in which Spore hosts governance artifacts that constrain canon work in the other repos

This is not a public-onboarding document. It assumes write access or at least read access across the three active repos plus familiarity with existing corpus-governance docs.

## Source bundle

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/concepts-p2p-wiki.yaml:1-10
  publicly-verifiable: true
  excerpt: "purpose: Canonical concept slugs for P2P Foundation wiki intake bridge notes."
  contributes: Shows the artifact's declared scope is still intake-specific.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:246-250
  publicly-verifiable: true
  excerpt: "All `concepts:` entries in ADRs, canon edits, and shared framing notes must be keys present..."
  contributes: Shows the frozen vocabulary is already enforced as a cross-project legality gate.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:107-110
  publicly-verifiable: true
  excerpt: "`docs/research/concepts-p2p-wiki.yaml` as frozen-concepts infrastructure."
  contributes: Places the artifact in the reviewable meta-corpus layer rather than in disposable intake scaffolding.
- source:
  kind: inventory-row
  ref: /Users/darrenzal/projects/spore/tmp/meta-corpus-inventory.tsv:4-4
  publicly-verifiable: true
  excerpt: "concepts-p2p-wiki ... frozen-concepts ... TRUE ..."
  contributes: Confirms the artifact is already tracked as a formal meta-corpus surface.
- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:178-178
  publicly-verifiable: true
  excerpt: "a layering is a hypothesis about what will vary independently"
  contributes: Supports treating role-definition drift as a structural layering error, not a mere wording mismatch.
- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/foundational-reframing-protocol-v1.md:33-44
  publicly-verifiable: true
  excerpt: "Use foundational reframing whenever ... [a finding] revises a meta-corpus protocol."
  contributes: Supplies the procedural basis for routing this governance-role change above ordinary canon-review ADR scope.

## Cross-repo consultation

Consultation is tracked in `tmp/cross-repo-consultation-reframing-frozen-vocabulary-role.md`. The consulted set is Spore, Intelligence Commons, and Poietic Match because the vocabulary artifact lives in Spore but constrains concept usage across all three canon-bearing repos.

Per FR-17, the current author and approver are the same person. The consultation artifact is therefore an externalized self-review surface during cooling-off, not proof of independent consensus.

## Execution gate

- Cooling-off must run through 2026-05-04 under FR-20's 14-day rule.
- The consultation artifact must record `frame-change-required: yes` before any ADR drafting begins.
- The first implementing ADR must cite this proposal in a single-line `authorized-by:` field.
- No implementing ADR may use this proposal to rename the file, rename slugs, or expand the slug set. Those are separate reframing surfaces.

## ADR authorization plan

This proposal authorizes one Spore ADR that does both of the following:

1. Updates `docs/research/concepts-p2p-wiki.yaml` so its purpose declaration names its actual cross-project canonical-vocabulary role.
2. Establishes the vocabulary-governance rules either by creating a standalone `docs/research/planning/vocabulary-governance-protocol-v1.md` or by landing an equivalent governance section in canon-review-protocol v3.

That ADR must cite `authorized-by: reframing-frozen-vocabulary-role`.

No Intelligence Commons or Poietic Match ADR is pre-authorized by this proposal unless ADR drafting discovers a repo-local governance reference that must be updated there as part of the same change set.

## Rollback and reversibility

Rollback is non-destructive and doc-only. If the authorized ADR proves wrong, revert the implementing ADR commit on `corpus-review/v1`, newest-first if follow-on references were added.

Because this reframing does not rename the file, change slug identities, or migrate stored data, reversal is limited to restoring the prior purpose declaration and removing the new governance surface or the added canon-review-protocol section. If downstream ADRs start citing the new governance language, those citations must be reverted before or alongside the governing-doc rollback so the old state remains internally coherent.

## Execution record

Not executed. Proposal is in `cooling-off`.

- Authorized ADRs: none yet.
- Affected repo SHAs: pending at `executed` state.

## Open questions

- Should vocabulary governance land as a standalone `vocabulary-governance-protocol-v1.md`, or should those rules be folded into canon-review-protocol v3 under the protocol-governance-hardening work?
- If the governance rules fold into canon-review-protocol v3, does that ADR need an explicit cross-reference to the existing `tmp/meta-corpus-inventory.tsv` row and FR-20 status so future amendments do not regress the double-cooling interpretation?
- Do any canon-bearing docs in Intelligence Commons or Poietic Match need explicit reference updates once the vocabulary artifact's role is renamed, or is centralized governance in Spore sufficient without downstream doc edits?
