---
doc_id: spore.foundational-reframing.reframing-protocol-audience-declaration
doc_kind: proposal
status: eligible
covers: [F-030]
proposal_kind: protocol-amendment
author: Darren Zal
approver: Darren Zal
opened-on: 2026-04-20
eligible-on: 2026-05-04
eligible-bumped-on: 2026-04-21T00:29:05Z
consultation_artifact: tmp/cross-repo-consultation-reframing-protocol-audience-declaration.md
authorized_adrs: []
---

# Reframing Proposal: Protocol Audience Declaration

## Problem

The operative meta-corpus protocols present themselves as reusable governance procedures for Spore, Intelligence Commons, and Poietic Match, but they do not declare who they are written for or what background they assume. The methodology already states that the actual audience is narrow: a solo operator or active contributor who can inspect all three repos, understands canon-review conventions, and can distinguish canon from planning and research scaffolds. That assumption remains implicit in the protocol layer itself.

The gap is most visible at the bridge-note boundary. The intake and canon-review protocols define bridge-note and R-claim structure as if the format were self-explanatory, but they do not say which readers are expected to author, review, or consume that machinery. The result is a governance stack that reads as general procedure while functioning as insider-only operator documentation.

## Proposed reframing

Authorize a coordinated amendment that adds a standard `## Intended audience and prerequisites` block to each named meta-corpus protocol and to the embedded bridge-note format convention they govern.

Minimum template:

```markdown
## Intended audience and prerequisites

- **Audience**: <who runs or reviews this protocol>
- **Prerequisites**: <repo access, background knowledge, tooling familiarity>
- **Scope**: <what this protocol applies to>
- **Out of scope**: <what this protocol does not govern>
```

Affected surfaces for the later ADR:

- `docs/research/planning/canon-review-protocol.md`
- `docs/research/planning/learning-field-intake-protocol.md`
- `docs/research/planning/foundational-reframing-protocol-v1.md`
- The bridge-note format convention as currently embedded in the canon-review and intake protocol surfaces

This proposal authorizes the template shape and the target surface list. It does not pre-write the final audience declaration for each protocol. The implementing ADR should harvest the shape already used in `corpus-foundational-review-methodology.md` and adapt it per protocol.

## Intended audience and prerequisites

- **Audience**: Spore, Intelligence Commons, and Poietic Match maintainers reviewing or authorizing meta-corpus protocol changes; currently the solo operator, Darren Zal
- **Prerequisites**: Ability to inspect all three repos, read the canon-review and intake protocols, and evaluate whether an amendment changes governance scope rather than only local prose
- **Scope**: Authorizing a coordinated audience-declaration requirement for the named protocol surfaces and bridge-note convention
- **Out of scope**: Writing the final per-protocol declaration text in this proposal; README changes; generic ADR-template redesign outside the named bridge-note convention surface

## Why ADR scope is insufficient

This finding lands on the meta-corpus layer, not on a single protocol document. The proposed repair changes the operator contract across the governance stack: canon review, intake, foundational reframing, and the bridge-note convention that ties intake evidence to later review. A doc-local ADR or editorial pass against one file would leave the others out of sync and would not answer whether the audience declaration is now part of the stack's required protocol shape.

The repair is cheap, but it still meets the foundational-reframing trigger. FR-1 routes revisions of a meta-corpus protocol into this proposal layer, and F-030 names a cross-surface governance assumption rather than a one-file wording defect. The later ADR can stay simple; the authorization problem is still above ordinary canon-edit scope.

## Source bundle

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-findings.md:981-1014
  publicly-verifiable: true
  excerpt: "The process docs function like insider-only protocols while presenting themselves as general reusable procedures."
  contributes: Authoritative finding statement, routed finding ID, and the core claim that the gap is meta-corpus-wide rather than doc-local.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:10-12
  publicly-verifiable: true
  excerpt: "This protocol governs how we edit canon ... It evolves after each canon-review round."
  contributes: Shows canon review is an operative governance protocol with declared purpose but no audience or prerequisite declaration near its opening contract.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/learning-field-intake-protocol.md:72-89
  publicly-verifiable: true
  excerpt: "Every bridge note follows the same schema regardless of source corpus."
  contributes: Shows the intake layer defines bridge-note structure as shared procedure without stating who is expected to use or review that format.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/foundational-reframing-protocol-v1.md:77-77
  publicly-verifiable: true
  excerpt: "Any proposal that revises a protocol surface ... must include an `## Intended audience and prerequisites` section."
  contributes: Shows the current reframing protocol already requires audience declarations in derivative proposals, creating a self-application gap for the protocol layer itself.

- source:
  kind: source-doc
  ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:118-120
  publicly-verifiable: true
  excerpt: "The current audience is `solo-operator -> active contributors across Spore / Intelligence Commons / Poietic Match`."
  contributes: Supplies the existing in-repo pattern and the currently assumed narrow audience that the protocol stack leaves implicit.

- source:
  kind: research-synthesis
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-audience-scoping.md:113-116
  publicly-verifiable: true
  excerpt: "\"describes the intended audience, scope, and purpose\""
  contributes: Establishes that audience, scope, and purpose declarations are standard document hygiene in the reader-scoping tradition.

- source:
  kind: capstone-section
  ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:323-323
  publicly-verifiable: true
  excerpt: "\"Audience-declaration block on README and ADR/bridge-note templates.\""
  contributes: Confirms the capstone already treats audience declaration as a cheap, high-leverage repair and grounds this proposal in the review synthesis.

## Cross-repo consultation

Consultation is externalized in `tmp/cross-repo-consultation-reframing-protocol-audience-declaration.md`. The consulted repos are Spore, Intelligence Commons, and Poietic Match because these protocols govern cross-repo review behavior even though the current target files all live in Spore.

At proposal open, the consultation artifact is intentionally a structural skeleton only. Stance blocks, objections, and the FR-11 frame-change-sufficiency verdict remain pending for the cooling-off period.

## Execution gate

This proposal may not move to `eligible` before `2026-05-04`. ADR drafting remains blocked until the consultation artifact records `frame-change-required: yes` and signs off that the coordinated protocol amendment should proceed.

Scope is fixed at proposal open to the three named protocol files plus the bridge-note convention they currently host. README changes and generic ADR-template work remain out of scope unless a later proposal or a material-change reset expands the target list.

## ADR authorization plan

Current expectation is one Spore ADR, citing `authorized-by: reframing-protocol-audience-declaration`, that adds audience/prerequisite declarations to the named protocol surfaces in a single coordinated change set.

That ADR should decide, based on the embedded bridge-note sections as they exist at execution time, whether the bridge-note convention is sufficiently covered by the parent protocol's audience block or needs a repeated sub-block inside the format section. This proposal authorizes either additive route, but only inside the named files.

Consultation is cross-repo; implementation is expected to be Spore-local unless cooling-off review shows that a second repo now hosts a duplicated copy of one of these governance surfaces.

## Rollback and reversibility

The eventual implementation is additive prose only. Rollback is therefore straightforward: revert the authorizing ADR commit set, newest-first if multiple commits land, and restore the prior implicit-audience state without destructive writes.

No vocabulary migration, topology move, or data backfill is involved. If a future operator decides the declarations are poorly scoped, a successor ADR can either replace the block text or revert the additive sections entirely.

## Execution record

- Status: Pending. Proposal is in `cooling-off`.
- Authorized ADRs: None.
- Implementation SHAs: None.
- Notes: Populate this section when the proposal reaches `executed`.

## Open questions

- Should README and generic ADR-template audience blocks remain outside this proposal even though the capstone recommended them in the same improvement family?
- Is the bridge-note convention sufficiently covered by parent protocol audience sections, or should the embedded format surface carry its own repeated declaration?
- Should the declared audience remain explicitly narrow at execution time, or should the ADR already anticipate non-solo maintainers and public readers?
- Is this the lowest-risk case that still belongs on the foundational-reframing track, or should future protocol-template hygiene repairs get a lighter-weight authorization path?
