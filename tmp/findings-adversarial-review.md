---
reviewer: Claude Code Opus 4.7 (1M context)
review_date: 2026-04-19
reviewed_doc: docs/research/planning/corpus-foundational-review-findings.md
reviewed_sha: 89501e4eb45433f1606c2ee4c65db7aca304c2fd
---

# Adversarial review of corpus-foundational-review-findings.md

## Summary

The consolidated findings doc is structurally sound and mostly ready for Phase 5 triage: evidence-bar compliance is high, the 39-finding count is defensible, the 40→39 merge (F-020) is the correct single merge, and the two severity normalizations (F-020, F-035) apply the external-evidence bar correctly. Three classes of issues warrant fixes before Phase 5: (1) a consolidator **data-loss bug** silently dropped `prior-collision-check` annotations on at least three findings (F-004 `care primacy`, F-015 `commons-over-market`, F-016 `polycentric-not-hierarchical`); (2) F-037 (repo-topology decision) is the root of a 5-finding dependency chain that includes an already-blocking F-039 and should be **priority-escalated blocking → important violates the dependency invariant**; (3) F-023 (field/holon) actually meets the S1 evidence bar (≥5 evidence pieces with ≥2 external), and the doc's 0 S1 findings is a calibration flag given both capstone and capstone-review explicitly name this as a primitive-ontology confusion. Strongest single finding-about-findings: the prior-collision-check drops are a silent audit-trail corruption, not a judgment call, and must be restored before Phase 5 because those priors are exactly the guardrails Phase 7 will check against.

## Tallies

| Action | Count |
|--------|-------|
| added | 0 |
| removed | 0 |
| severity-adjusted | 1 |
| priority-adjusted | 2 |
| retargeted | 0 |
| prior-collision-restored | 3 |

(Prior-collision-restored is a sub-class of "must-fix data loss" rather than a judgment adjustment; tallied separately below.)

## Added (reviewer argues these should be in the doc)

None. The consolidator's 0-drop discipline was appropriate. I spot-audited six candidates that could plausibly have been elevated — `obstruction-aware-sheafification.md` missing `disposition` (P4.4 caveat), CLAUDE.md sidecar classification (P4.1a caveat), 31 bridge-note entries with 0 review claims (P4.4 full-corpus counts), P4.3 deferred validator race-conditions, P4.1b draft stalk docs, and P4.1a synthesis-doc staleness patterns beyond F-007. None of these cleared the evidence bar for a standalone finding given the stated methodology. The consolidator's defensible-drop posture is correct.

## Removed (reviewer argues these should be removed)

None. Every finding meets its declared severity's evidence minimum on my spot-audit of ten findings (F-001, F-003, F-004, F-009, F-020, F-023, F-025, F-033, F-037, F-039). The severity normalizations on F-020 (S2+S3→S3) and F-035 (S2→S3) are correct applications of the external-research rule.

One item I considered removing and then kept: F-018 (PM `downstream-products.md` misplaced into canon layer) overlaps F-019 structurally (both are PM canon-scope inventory mistakes). The consolidator's merge-log explicitly preserved them as separate items targeting different docs — that is the right call; different corrective edits apply.

## Severity adjustments

**F-023 (field / holon overlapping/redundant): S2 → S1 (reviewer argues).**

Evidence set as consolidated: 3 source-doc + 1 capstone-section + 1 capstone-review = **5 distinct evidence pieces**, of which **2 are from external research syntheses** (capstone + capstone-review). That meets the S1 bar exactly:

> **S1** | Foundational — changes what Spore *is* at the level of primitives or substrate | ≥5 distinct evidence pieces | ≥2 from external research.

Claim-substance test: the finding bears directly on whether `field` and `holon` are distinct primitives or two views of the same recursive structure. Both capstone §5 ("A holon at scale N is a field at scale N+1") and capstone-review §14 ("the holon-vs-field confusion flagged in §5 is a real and useful problem statement") explicitly call it a primitive-ontology question. That is by definition "what Spore *is* at the level of primitives."

Consolidator picked S2 following P4-2-004's self-assignment at S2. P4.2's own note flagged this as "cross-pass dedupe candidate with P4.5 because this is a primitive-class relation question, not only a local wording drift." The consolidator's failure to upgrade severity given the cross-pass framing is conservative but defensible.

**Recommendation:** Elevate F-023 to **S1**. This has a downstream consequence — 0 S1 findings is a calibration flag per methodology §Severity priors (see Calibration notes below); with F-023 as S1 the distribution becomes 1 / 13 / 24 / 1 which is a more defensible shape.

## Priority adjustments

**F-037 (repo-topology missing): important → blocking.**

F-037 is the root of a 5-finding dependency chain that includes an **already-blocking** F-039 (merge-governance). Specifically:

- F-010 `dependencies: [F-037]`
- F-029 `dependencies: [F-037]`
- F-038 `dependencies: [F-037]`
- F-039 `dependencies: [F-037]` — **priority: blocking**

A blocker cannot be unblocked until its dependency resolves. If F-039 must resolve before Phase 5 and F-039 depends on F-037, F-037 must also resolve before Phase 5. Keeping F-037 at `important` while F-039 is `blocking` violates the dependency invariant named in the adversarial-review plan §6 ("Missing dependencies ... are a bug").

The consolidator's merge-log §Near-overlaps kept separate correctly distinguishes F-010 (doc-level contradiction in IC vision) from F-037 (the topology decision itself), but did not propagate blocking priority up the dependency chain.

**Recommendation:** F-037 → **blocking**.

**F-013 (ADR-0006 collective-agency rationale contradictory): important → blocking (candidate; weaker case than F-037).**

F-013 says an **accepted** ADR defends its reject disposition by appealing to a seven-primitive architecture that is not actually IC's. The consolidator preserved it at `important`, but the rationale of an accepted canon decision being "canonically unreliable as written" arguably rises to blocking because it compromises the trace integrity the ADR format itself requires. Methodology is silent on whether accepted-ADR rationale bugs default to blocking; F-012 sits in the same class and was also kept important.

**Recommendation:** Either keep F-013 at important (symmetric with F-012, which is defensible), or escalate both F-012 and F-013 to blocking as a coherent pair. Do **not** escalate only one. My weak preference is to keep both at important and let Phase 7 sequence them first among the important items, since the underlying ADRs still land correctly even with unreliable rationale text.

## Retargeted

None. Spot-audit of F-020 (the merge) confirmed both source findings targeted the same canonical surface; the consolidator's merged target (`knowledge-graph / epistemic-graph`) is correct. Other findings' `target:` fields match their claims.

## Prior-collision audit

**Data-loss bug in consolidation.** Three source-pass findings had populated `prior-collision-check:` fields that the consolidated findings doc lost. These are audit-trail corruptions, not judgment calls:

| Consolidated finding | Source pass finding | Dropped prior |
|---|---|---|
| F-004 (care wrong-level in coordination-grammar.md) | P4-1a-004 | `care primacy` |
| F-015 (CVLE misplaced in pm.project-vision) | P4-1c-002 | `commons-over-market` |
| F-016 (medium-integrity-governance missing in pm.protocol) | P4-1c-003 | `polycentric-not-hierarchical` |

All three consolidated findings show `prior-collision-check: none`. This silently removes the guard-rail flag that Phase 7 reviewers are supposed to catch. Priors exist in methodology precisely so the Phase 7 ADR author is forced to invoke `prior-revision-proposal` if they want to touch a prior-named surface.

**Must-fix before Phase 5 triage:** restore the three prior-collision-check entries verbatim from source passes.

Additionally, I audited the remaining 33 consolidated findings' `prior-collision-check: none` against their source passes. The remaining 33 match source-pass `prior-collision-check: none`, so the bug is isolated to these three findings — but because it is a silent drop, a full re-audit against source passes is cheap insurance.

## Calibration notes

**Severity distribution (pre-adjustment): 0 / 14 / 24 / 1 across S1/S2/S3/S4.**

The 0 S1 count is the primary calibration flag. Methodology defines S1 as "changes what Spore *is* at the level of primitives or substrate" with ≥5 evidence pieces including ≥2 external. Four candidate findings touch the primitive layer: F-021 (intent split), F-022 (evidence split), F-023 (field/holon overlap), F-035 (dead-weight primitive-class handles). Of these, only F-023 meets the external-evidence minimum (2 capstone citations). So the strict reading is: one S1 is defensible (F-023), zero is borderline-strict but not absurd. The severity rubric itself does not require any S1 to exist; the review simply shouldn't manufacture one where evidence is thin.

F-021 (intent) and F-022 (evidence) have 1 external research citation each — one short of the S1 bar. These are correctly S2.

**Post-adjustment distribution (if F-023 elevated to S1): 1 / 13 / 24 / 1.**

**Priority distribution (pre-adjustment): 8 blocking / 27 important / 4 deferred = 20.5% blocking.**

Within the adversarial-review plan's acceptable range (≤30% blocking). The plan says "single digits to low-teens ideally" — 8 is at the top of "single digits," one more (F-037 → blocking) brings it to 9, still within the plan's ideal. Do not push past 10 without a strong dependency argument.

**Post-adjustment distribution (if F-037 → blocking): 9 blocking / 26 important / 4 deferred = 23.1%.**

**Corpus-location distribution is appropriate**: 24 content / 9 meta-corpus / 3 bridge-note / 3 repo-topology aligns with where real structural problems surface under the methodology.

**Type distribution caveat**: 0 `over-abstract` and 0 `dissolve-entirely` — plausible that no concepts cleared the bar for these types in this pass, but worth flagging that the finding-type palette is unevenly exercised. Not a bug, but Phase 5 triage may want to confirm the counterfactual pass didn't under-trigger these categories.

## Recommendations

### Must resolve before Phase 5 triage

1. **Restore prior-collision-check entries** on F-004 (`care primacy`), F-015 (`commons-over-market`), F-016 (`polycentric-not-hierarchical`) from source passes P4-1a-004, P4-1c-002, P4-1c-003. These are silent data losses, not judgment calls.
2. **Re-audit remaining 33 consolidated findings' prior-collision-check** against source passes for the same class of drop. Cheap insurance.
3. **F-037 priority: important → blocking.** Required by dependency invariant since F-039 (blocking) depends on F-037.

### Can be handled during Phase 5

4. **F-023 severity: S2 → S1.** Evidence bar met; primitive-ontology claim; would bring distribution to 1 S1 which is more defensible than 0. This is a judgment call, not a data-loss bug.
5. **F-012 + F-013 priority as a symmetric pair.** Keep both at important (current state) or escalate both to blocking. Do not split.

### Defer to v2 review

6. **Type-palette calibration check** (0 `over-abstract`, 0 `dissolve-entirely`) as a cross-pass meta-review in Phase 4 v2, if scheduled. Not needed for Phase 5 to proceed.

## Resolution delta

If recommendations 1, 2, 3 are applied, the findings doc is ready for Phase 5 triage with one priority shift (F-037) and three prior-collision restorations. If recommendation 4 is also applied, severity distribution gains one S1 (F-023).

Per plan §Resolution protocol: this review's adjustment count is 3 prior-collision restorations + 1 priority change = 4 items. Optional severity escalation (F-023) adds a 5th. That is 5/39 = 12.8%, well below the 20%-trigger for P4.7 re-run. Apply the adjustments in a new revision of `corpus-foundational-review-findings.md`.
