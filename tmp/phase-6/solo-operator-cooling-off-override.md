# Phase 6d deviation — solo-operator cooling-off override

- **Deviation date**: 2026-04-20
- **Operator**: Darren Zal
- **Protocol affected**: `docs/research/planning/foundational-reframing-protocol-v1.md` v1.1 (ratified 2026-04-20, commit `fb42b65`)
- **Rules overridden**: FR-13 (7-day cooling-off default) and FR-20 (14-day meta-corpus cooling-off)
- **Proposals affected**: 7 of 8 Phase 6c proposals (F-029 `reframing-learning-field-host-elevation` still gated by FR-14.6 depends-on rule; signs off in Phase 7 once `reframing-repo-topology-trunk` reaches `authorized-ADR`)

## What the protocol requires

FR-13 requires ≥7 days between the earliest commit that adds a proposal file and the earliest ADR commit citing the proposal in `authorized-by:`. FR-20 doubles this to 14 days for meta-corpus revisions (protocols revising protocols). Measured by git author-date per the plan's Phase 7 convention.

For the 7 proposals being signed off today:
- 3 would reach eligibility on 2026-04-27 (7-day gate)
- 4 would reach eligibility on 2026-05-04 (14-day gate)

## What we're doing instead

Signing off all 7 proposals today (2026-04-20), transitioning `status: cooling-off → status: eligible` on the same calendar day the proposals were committed.

## Rationale

### 1. Solo-operator state makes FR-13/FR-20's stated rationale inapplicable

Cooling-off as a governance mechanism (borrowed from W3C Formal Objection, IETF appeals, Rust RFC amendment) serves two functions:

1. **Async stakeholder review time** — allow distributed maintainers to catch issues the author missed, across time zones and availability windows.
2. **Stability against impulse revisions** — force a delay between proposal and execution so the authoring party has time to reconsider.

The Spore / IC / PM corpus is currently operated by a single person (Darren Zal). There are no other maintainers, reviewers, or stakeholders. Function (1) does not apply. Function (2) is partially served by the proposal-authoring process itself: each proposal required §Problem, §Proposed reframing, §Why ADR scope is insufficient, §Source bundle of ≥5 sources, and a cross-repo consultation artifact — all of which constitute a substantive gating pass that the operator has already performed.

FR-17 already acknowledges solo-operator as the current baseline for the consultation artifact, but v1.1 did not extend that acknowledgment to FR-13/FR-20. This deviation identifies that gap.

### 2. Stability function served by operator-skim discipline

Before sign-off, the operator skimmed all 8 proposals and all 8 consultation artifacts in VS Code (paired by slug) to verify the pre-filled stance rationales read as endorsable under the operator's own name. This skim pass serves the stability-against-impulse function that calendar time would otherwise serve — the operator has a review checkpoint between drafting and sign-off, just compressed from 7/14 days into the same session.

### 3. Early-stage project velocity matters

Spore / IC / PM is pre-public, pre-collaborator. Every day spent waiting on calendar gates is a day the corpus remains in mid-review state with ongoing moratorium on canon edits. The opportunity cost of enforcing async-reviewer delays when there are no async reviewers is a real drag on project progress.

## Risks accepted

1. **Author drift**: the operator may revise their judgment on one of these proposals in the coming 7-14 days. Accepted: amendments can be issued via new reframing proposals if needed; the ratified proposal is not permanent until Phase 9 merge of corresponding ADRs to main.
2. **Pattern drift for future plans**: if collaborators join later, the precedent of "sign off same day" could linger inappropriately. Mitigated by harvesting this deviation into a formal solo-operator-exception rule (see Harvest item below) that narrows the exception to solo-operator state explicitly.
3. **Protocol-v1.1 first-use deviation**: the foundational-reframing-protocol is being overridden on its first use, which is aesthetically awkward. Accepted because the override is documented and the protocol's substantive governance machinery (consultation artifact, frame-change verdict, evidence bar, ADR-drafting lineage) is otherwise followed in full.

## Harvest item for foundational-reframing-protocol v2

Parking-Lot candidate: **FR-13.1 / FR-20.1 solo-operator-exception rule**.

Proposed rule shape (draft for v2 reframing proposal):

> When the project's active-maintainer count is 1 (solo-operator state), the cooling-off windows in FR-13 and FR-20 may be waived by the operator upon commit of a deviation memo at `tmp/phase-<N>/solo-operator-cooling-off-override.md`. The memo must identify the proposal slug(s) waived, acknowledge the risks under FR-13's stated rationale, and name a harvest trigger for re-evaluating the exception when the maintainer count grows beyond 1. The operator's sign-off on the consultation artifact serves as the compressed stability-against-impulse gate in lieu of calendar time.

This rule would be authored as a proper reframing proposal under the existing protocol (amendments of the foundational-reframing-protocol itself require their own reframing per FR-31). For now, the rule lives as a Parking-Lot candidate to be picked up in Phase 9 harvest or later.

## Override scope

This deviation covers the cooling-off rules (FR-13, FR-20) only. It does NOT override:

- FR-14 (cooling-off marker rule via `eligible-on:` frontmatter) — retained, but interpreted as the date-the-operator-may-sign-off rather than the date-calendar-must-elapse-to
- FR-14.6 (depends-on gating) — retained in full; F-029 still waits for topology-trunk's `authorized-ADR` state per the original rule
- FR-11 (frame-change sufficiency) — retained; each sign-off confirms the frame-change verdict
- FR-15 through FR-17 (consultation artifact mechanics) — retained; the artifact is still the gating surface
- Any content rules of the proposals themselves

## Audit trail

- Phase 6c proposal commits: all 8 proposals committed between commits `b655ed8` and `202dcc4` on 2026-04-20
- Consultation artifact pre-fill: commit `1e5d05d` on 2026-04-20 (Codex)
- Operator skim: performed 2026-04-20 via VS Code in-session review of all 16 artifacts
- This deviation memo: committed as the authorization for the 7-proposal sign-off batch
- Sign-off commits: single commit following this memo, covering 7 proposals
