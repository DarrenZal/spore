---
doc_id: spore.foundational-reframing.reframing-pm-canon-scope
doc_kind: proposal
status: cooling-off
covers: [F-018, F-019]
proposal_kind: canon-scope
author: Darren Zal
approver: Darren Zal
opened-on: 2026-04-20
eligible-on: 2026-04-27
consultation_artifact: tmp/cross-repo-consultation-reframing-pm-canon-scope.md
authorized_adrs: []
---

# Reframing Proposal: PM Canon Scope

## Problem

Poietic Match currently has a canon-boundary contradiction. `docs/downstream-products.md` is treated as part of PM canon even though the document declares itself `doc_kind: governance` and exists to record downstream consumers for notification-on-breakage. In parallel, `docs/phase-0-spec.md` is explicitly excluded from PM canon but still functions as a canon-adjacent origin surface because derivative review artifacts credit it as the introducing doc for `commitment-bundles`.

These two drifts reinforce each other. A governance registry is being admitted into the canon layer, while an implementation plan that PM already says is out of scope is still allowed to anchor a core PM primitive. The result is that PM's canon layer no longer cleanly means "normative self-description"; it becomes a mixed surface where governance bookkeeping and implementation sequencing can define the same layer as `docs/project-vision.md`, `docs/grammar.md`, and `docs/protocol.md`.

## Proposed reframing

Ratify PM canon as the repo's normative self-description only:

- `docs/project-vision.md`
- `docs/grammar.md`
- `docs/protocol.md`
- `docs/research/canon-decisions/*.md`

Under that boundary:

- `docs/downstream-products.md` is a governance registry, not a canon document.
- `docs/phase-0-spec.md` remains an implementation plan outside canon scope.
- `commitment-bundles` is canonically introduced by `docs/grammar.md` section 1.4, with `docs/project-vision.md` as the narrative explanation surface rather than the origin record.
- Derivative review artifacts in Spore, including inventory and concept-roster outputs, must inherit that boundary instead of treating governance docs or implementation plans as independent canon authorities.

## Why ADR scope is insufficient

This change exceeds ordinary canon-review ADR scope for two separate reasons named in FR-1. First, it changes the definition of PM canon scope by ratifying that PM canon contains normative self-description only, not governance registries or implementation plans. Second, it re-layers `docs/downstream-products.md` out of the canon layer into governance. A PM-local ADR can implement the resulting edits only after this higher-order boundary is settled; it cannot legitimately decide the boundary rule while also claiming to operate inside the old one.

The `commitment-bundles` attribution problem is also not just a stale row fix. As long as an excluded implementation snapshot is allowed to function as the introducing doc for a PM primitive, PM has no stable rule for what counts as a canonical concept origin. That is a canon-scope problem, not only an editorial one.

## Coherence argument

F-018 and F-019 are the same class of failure: PM's canon inventory is admitting artifacts whose actual job is not normative self-description. One finding shows the drift through layer membership (`docs/downstream-products.md` as canon); the other shows it through concept lineage (`docs/phase-0-spec.md` as the effective origin of `commitment-bundles`). Splitting them would force two proposals to argue the same PM canon-boundary rule twice. Keeping them joint makes the governing criterion explicit once and resolves both symptoms under the same reframing.

## Source bundle

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:25-28
  publicly-verifiable: true
  excerpt: "Canon = foundation + vision + roadmap docs that define each project's normative self-description."
  contributes: Provides the shared cross-project canon definition that F-018 argues PM is currently violating.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:45-50
  publicly-verifiable: true
  excerpt: "PM canon (in-scope): `docs/grammar.md`, `docs/protocol.md`, `docs/project-vision.md`, `docs/downstream-products.md`."
  contributes: Shows the current PM-specific special case and the explicit exclusion of `phase-0-spec.md`.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/README.md:13-20
  publicly-verifiable: true
  excerpt: "`docs/downstream-products.md`" / "`docs/phase-0-spec.md` is implementation spec, NOT canon"
  contributes: Records PM's own local canon-scope surface, including the same contradiction between admitted governance doc and excluded implementation spec.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/poietic-match/docs/downstream-products.md:1-15
  publicly-verifiable: true
  excerpt: "`doc_kind: governance` ... 'informational registry of known consumers'"
  contributes: Establishes that the document is a governance registry for downstream notification, not PM's normative self-description.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/poietic-match/docs/phase-0-spec.md:23-33
  publicly-verifiable: true
  excerpt: "`Phase 1 | Commitment bundles (compositional multi-party matching)`"
  contributes: Shows that `commitment-bundles` appears in `phase-0-spec.md` only as a deferred later-phase feature inside an implementation plan.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/poietic-match/docs/phase-0-spec.md:294-347
  publicly-verifiable: true
  excerpt: "`Implementation Order` ... `src/pm/models.py` ... 'This is the first coding task.'"
  contributes: Confirms that `phase-0-spec.md` is primarily engineering sequencing and coding-task guidance, not canon-layer concept definition.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/poietic-match/docs/grammar.md:79-105
  publicly-verifiable: true
  excerpt: "`pm:CommitmentBundle` ... 'The natural unit of compositional matching.'"
  contributes: Supplies the strongest existing canon-layer definition of `commitment-bundles`, making it the best canonical origin candidate.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/poietic-match/docs/project-vision.md:28-40
  publicly-verifiable: true
  excerpt: "'A commitment bundle composes multiple intents into a viable coordinated action.'"
  contributes: Shows that PM already explains the concept inside canon, but at a vision level rather than as the formal introducing definition.

- source:
  kind: inventory-row
  ref: /Users/darrenzal/projects/spore/tmp/corpus-inventory.tsv:22
  publicly-verifiable: true
  excerpt: "poietic-match/docs/downstream-products.md ... poietic-match:extended ... TRUE"
  contributes: Demonstrates that the derivative corpus inventory currently treats `downstream-products.md` as inside the PM canon-layer set.

- source:
  kind: inventory-row
  ref: /Users/darrenzal/projects/spore/tmp/corpus-inventory.tsv:24
  publicly-verifiable: true
  excerpt: "poietic-match/docs/phase-0-spec.md ... poietic-match:extended ... TRUE"
  contributes: Demonstrates that the derivative corpus inventory still places `phase-0-spec.md` in the PM canon-layer set despite its explicit exclusion.

- source:
  kind: inventory-row
  ref: /Users/darrenzal/projects/spore/tmp/concept-roster.tsv:56
  publicly-verifiable: true
  excerpt: "commitment-bundles ... poietic-match/docs/phase-0-spec.md ... poietic-match:extended ... TRUE"
  contributes: Shows the exact derivative artifact that currently credits an excluded implementation plan as the introducing doc for a PM primitive.

- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:176-178
  publicly-verifiable: true
  excerpt: "a layering is a hypothesis about what will vary independently"
  contributes: Supports the broader reframing claim that layer membership should follow the kind of change a document carries, not historical convenience.

## Cross-repo consultation

Companion artifact: `tmp/cross-repo-consultation-reframing-pm-canon-scope.md`.

This proposal opens consultation across Spore, Intelligence Commons, and Poietic Match. PM is the primary affected repo because it hosts the canon surfaces and the two mis-layered documents. Spore is consulted because it hosts the shared canon-review framing and the derivative review artifacts that currently reproduce the drift. Intelligence Commons is consulted because PM should not keep a project-specific canon exception inside a governance stack that is otherwise shared across all three canon-bearing repos.

Per FR-17, the consultation artifact is an externalized self-review surface under current solo-operator conditions, not proof of independent consensus.

## Intended audience and prerequisites

Primary reviewers are the operator maintaining PM canon and the operator maintaining Spore's cross-repo review artifacts. Anyone drafting the eventual ADR set should read:

- `docs/research/planning/canon-review-protocol.md` section 1
- `/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/README.md`
- `/Users/darrenzal/projects/poietic-match/docs/project-vision.md`
- `/Users/darrenzal/projects/poietic-match/docs/grammar.md`
- `/Users/darrenzal/projects/poietic-match/docs/protocol.md`
- `/Users/darrenzal/projects/poietic-match/docs/phase-0-spec.md`

Execution also assumes write access to both the PM and Spore repos, because PM will host the authorizing ADR work while Spore hosts the proposal, consultation artifact, and derivative review outputs.

## Execution gate

- Earliest ADR drafting date: 2026-04-27.
- Before any ADR drafting begins, the consultation artifact must record `frame-change-required: yes` and `ADR drafting may begin: yes`.
- No direct edits to PM canon, PM canon-scope surfaces, or Spore derivative review artifacts are authorized by this proposal commit.
- If consultation concludes that the issue can be responsibly solved as a PM-local canon-review or editorial repair without redefining PM canon scope, this proposal should be closed and the work routed back down accordingly.

## ADR authorization plan

The minimum execution set is a PM-local ADR that ratifies PM canon as `project-vision`, `grammar`, `protocol`, and `docs/research/canon-decisions/*.md`, while classifying `docs/downstream-products.md` as governance and reaffirming `docs/phase-0-spec.md` as implementation-only.

That same ADR, or a tightly paired PM ADR in the same execution bundle, should designate `docs/grammar.md` section 1.4 as the canonical introducing surface for `commitment-bundles`, with `docs/project-vision.md` retained as conceptual explanation rather than origin authority.

After the PM ADR set lands, the derivative Spore artifacts that encode PM canon membership and concept origins should be regenerated so they inherit the ratified boundary instead of reproducing the old one.

If ADR authors decide that cross-project traceability needs an explicit shared-framing note in Spore, that note can be added as part of the execution bundle. Any direct change to shared meta-corpus protocol text should be explicitly adjudicated before drafting, because this proposal is scoped as a 7-day PM canon-scope reframing rather than a 14-day protocol amendment.

## Rollback and reversibility

Rollback is straightforward and non-destructive. Revert the PM ADR commit set newest-first to restore the prior canon-scope declaration and the prior `commitment-bundles` attribution. Revert any companion Spore shared-framing or derivative-artifact commits newest-first after that.

Because this proposal authorizes ADR drafting rather than direct canon edits, reversal does not require path deletion, history rewriting, or destructive operations on `main`. The main rollback risk is governance ambiguity: if the ADR set is partially reverted, the execution record must make clear which repo surfaces still reflect the reframed boundary and which do not.

## Execution record

Not yet executed.

- Authorized ADRs: []
- PM execution SHAs: [PENDING]
- Spore execution SHAs: [PENDING]
- Notes: Populate after the proposal reaches `executed`.

## Open questions

- Should `commitment-bundles` have a single canonical origin in `docs/grammar.md`, or should the eventual ADR explicitly name `docs/project-vision.md` as a companion explanatory surface for readers who enter through vision first?
- Does execution require a literal path move for `docs/downstream-products.md`, or is explicit governance classification plus canon exclusion sufficient?
- Can the shared Spore canon-review protocol remain unchanged while PM ratifies its own boundary and Spore regenerates derivative artifacts, or does full closure require a separate protocol-surface follow-on?
- Should future corpus-review generation refuse non-canon docs as `introducing-doc` candidates for primitive-class concepts by rule, so this drift cannot reappear?
