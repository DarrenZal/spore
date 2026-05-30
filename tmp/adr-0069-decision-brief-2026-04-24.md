# ADR-0069 Decision Brief

Date: 2026-04-23
Scope: Step 1 only. This brief surfaces options and child recommendations. It does not authorize Step 3+ execution.

## Executive read

- `(α)` passes cleanly.
- `(β)` is verdict-sensitive.
- `Reading A` (strict honest-rigor) fails on non-Johar tradition breadth and likely on explicit criteria-operationality.
- `Reading B` (permissive Johar-as-locus) can support admission, but only as a qualified pass: Johar evidence is strong, cross-tradition evidence is thin, and criteria-operationality is reconstructed rather than explicit.

Child recommendation:

- Prefer `A3 SCOPE-CONDITION` rather than `A1 ADMIT` or `A4 DECLINE`.
- Reason: it preserves the real Johar-sourced design contribution without overstating cross-tradition convergence or the current strength of criteria-in-use evidence.

## Axis A — Admission Verdict

Options surfaced:

- `A1 ADMIT` if operator ratifies Reading B as sufficient and treats current operationality evidence as enough.
- `A2 ADMIT` only if operator believes non-Johar cross-tradition convergence is already strong enough; audit does not support this.
- `A3 SCOPE-CONDITION` if operator wants admission but only within a Johar-sourced / currently-narrow evidence posture.
- `A4 DECLINE-with-triggers` if operator applies Reading A strictly.
- `A5 DEFER` if operator judges the current evidence too thin for either admission or disciplined decline.
- `A6 DECLINE-inline-prose-only` if operator judges no separate pattern artifact is earned.

Child recommendation: `A3 SCOPE-CONDITION`

Why:

- Stronger than `A4` because the candidate has real pattern-method fit and substantive content beyond a pure inline-prose residue.
- More honest than `A1` because current support is not cross-tradition-clean and criteria-operationality is not yet explicit in one instance-family.

Ambiguity flag:

- If the operator wants strict adherence to ADR-0064's heavier-admission honesty, `A4` is the cleaner choice.
- If the operator wants ADR-0065's Johar-native exemplar logic to govern this sub-class, `A1` becomes available, but still on a qualified evidence base.

## Axis B — Criteria Enumeration

Options surfaced:

- `B1` verbatim Johar-4
- `B2` refined list
- `B3` umbrella plus sub-variants

Child recommendation: `B1 verbatim Johar-4`

Why:

- The audit found no evidence for dropping or adding criteria.
- The actual evidentiary problem is not criterion content; it is β tradition/operationality strength.

Ambiguity flag:

- If operator wants a scope-conditioned admission, the scope clause should live in the ADR consequences and parking triggers, not in a revised criterion list.

## Axis C — Criteria-Count Floor

Options surfaced:

- `C1` keep ADR-0065 default floor `N>=3`, noting actual `N=4`
- `C2` raise floor to `N>=4`
- `C3` choose another floor

Child recommendation: `C1`

Why:

- ADR-0068 kept the default floor rather than raising it to the candidate's exact count.
- No audit evidence justifies rewriting the sub-class floor to fit a single candidate.

Ambiguity flag:

- If operator wants to harden the M4 trifecta-validation by making Johar-4 itself the sub-class minimum, `C2` is defensible but would set a tighter precedent for future design-criteria-patterns.

## Axis D — Pattern-Doc Location + Shape

Options surfaced:

- `D1` `docs/patterns/four-enabling-conditions.md`
- `D2` alternate filename
- `D3` split artifact / parking note

Child recommendation: `D1`

Why:

- Matches the parked candidate name already used in `docs/patterns/README.md:70`.
- Minimizes naming drift and keeps alignment with the likely slug if `F2` is ratified.
- Keeps parity with ADR-0068's straightforward `docs/patterns/<slug>.md` move.

Ambiguity flag:

- If operator prefers the more semantically explicit title `enabling-conditions-for-constructed-power.md`, `D2` is viable, but the repo now already speaks in shorthand as `four-enabling-conditions`.

## Axis E — `related_to` Graph Edges

Options surfaced:

- `E1` anchor primarily to ADR-0047 / ADR-0048 power framing
- `E2` additionally encode criterion-to-primitive composition
- `E3` additionally link to sibling pattern `federation-encounter`

Child recommendation: `E1` as the minimum committed shape

Why:

- The link to ADR-0047/0048 is load-bearing and non-controversial.
- The criterion-to-primitive mapping in `E2` is analytically useful but still inferential: `resources -> commitment`, `knowledge -> evidence+signal`, etc. is not yet canonically settled.
- The sibling-pattern link in `E3` is plausible, but federation-encounter is better treated as one downstream implementation surface than as the defining relation.

Ambiguity flag:

- If operator wants a richer pattern graph, `E3` is the safest additive extension.
- `E2` should be kept to body prose unless operator explicitly wants the stronger composition claim encoded.

## Axis F — Frozen Concepts YAML Treatment

Options surfaced:

- `F1` no yaml change
- `F2` bump to `v14` with slug `four-enabling-conditions`
- `F3` bump with umbrella slug plus individual criterion slugs

Child recommendation:

- If `A in {A1, A3}`: `F2`
- If `A in {A4, A5, A6}`: `F1`

Why:

- ADR-0065 Axis H1 requires yaml registration going forward for new admissions.
- `F3` overreaches: `space`, `mission`, `resources`, and `knowledge` are too generic to admit as standalone glossary slugs on the current evidence.

Ambiguity flag:

- `F2` is contingent on actual admission. A decline path should not touch yaml.

## Axis G — Cross-ADR Ratification Shape

Options surfaced:

- `G1` standalone ADR-0069
- `G2` bundled with minimal ADR-0048 parking update
- `G3` hybrid body-only cross-reference

Child recommendation: `G1`

Why:

- Matches ADR-0068 precedent.
- Respects the user's explicit warning against ADR-0048 scope creep.
- Keeps ADR-0048 as historical record and lets ADR-0069 carry the disposition cleanly.

Ambiguity flag:

- `G2` is only warranted if the operator wants the parking list updated in-place despite the historical-record caution.

## Reading A vs Reading B Judgment

### Reading A

Audit outcome:

- β fails.
- Recommended axis-A outcome under this reading: `A4`.

### Reading B

Audit outcome:

- β can be argued as a qualified pass.
- Recommended axis-A outcome under this reading: `A3`, with `A1` available only if the operator accepts the current operationality evidence as sufficient.

## Recommended ratification bundle

Primary bundle:

- `A3`
- `B1`
- `C1`
- `D1`
- `E1`
- `F2` if admitted; otherwise `F1`
- `G1`

Secondary strict bundle:

- `A4`
- `B1`
- `C1`
- `D1` unused
- `E1`
- `F1`
- `G1`

## Session-atomic projection if Step 3+ is approved

- `A3` path: approximately `350-500s`
- `A4` path: approximately `200-300s`
- `A1` path: approximately `300-450s`

The dominant variable is whether the operator ratifies an admission/scope-admission path that requires pattern-doc + README + yaml work, or a decline path that only authors ADR-0069.
