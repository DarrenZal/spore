# ADR-0071 Decision Brief

Date: 2026-04-24
Filename date: 2026-04-25 per operator brief
Scope: Step 1 only. This brief surfaces options and child recommendations. It does not authorize Step 3+ execution.

## Executive read

- The feared "old flat-8 projection list still hard-coded in `project_bridge_notes.py`" was not found.
- The live script is narrower than that: it registers PM as a source project and projects bridge notes into KOI as claims / concepts / questions.
- That means the script is best read as **Epistemic-primary bridge-note intake**, not as a literal operational instantiation of the whole ADR-0058 / ADR-0070 graph-projections architecture.
- The strongest current misalignment is therefore **narrative / boundary drift**, not an obvious production bug.

Child recommendation bundle:

- `A3 SEQUENTIAL`
- `B2 PARTIAL realignment needed`
- `C1 INCLUDE`
- `D1 DECISION-RECORD`
- `E1 backward-compatible edit discipline`
- `F2 file path + line-number citation discipline`
- `G3 NARROW-WIDE`

Why this bundle fits the audit:

- The code does not justify an emergency bundled production edit.
- But the code also does not fully support PM canon's current "operational instantiation" claim.
- The safest next move is to author a Spore ADR that records the honest boundary now, then decide in a dedicated koi-processor session whether to keep the script epistemic-only and merely relabel it, or to add explicit additive metadata.

## Axis A — Scope Boundary

Options surfaced:

- `A1 BUNDLED` — Spore ADR + koi-processor script edits in the same child session
- `A2 SPORE-ADR-ONLY` — author the ADR and park any koi edits
- `A3 SEQUENTIAL` — author the ADR first, then do a dedicated koi session next
- `A4 DECLINE` — no actionable misalignment

Child recommendation: `A3 SEQUENTIAL`

Why:

- koi-processor is production-ish and the audit did not surface a breaking defect
- the real fix is ambiguous between:
  - documentation / naming correction
  - additive metadata clarifying epistemic-only scope
  - or a larger architecture change that should not be attempted ad hoc
- A3 preserves momentum without forcing a risky "fix while still defining the problem" bundled move

Flag:

- `A2` is defensible if the operator wants the ADR to record the boundary and stop there for now
- `A1` is only justified if the operator explicitly wants same-session koi hygiene and accepts the tighter production-caution posture

## Axis B — Audit Findings Propagation

Options surfaced:

- `B1 FULL` — script still encodes pre-ADR-0058 flat-8 shape
- `B2 PARTIAL` — some primary / view semantics missing
- `B3 MINOR` — shape basically matches; naming / metadata drift only
- `B4 NONE` — already aligned

Child recommendation: `B2 PARTIAL`

Why:

- there is no flat-8 encoding
- there is also no positive 3-primary + 5-view-template encoding
- the script materially covers the Epistemic-primary bridge-note intake slice only
- PM canon currently overstates what that runtime means

Flag:

- `B3` becomes plausible only if the operator defines the intended scope as "epistemic-only script, described honestly"
- on current PM prose, `B2` is the stronger fit

## Axis C — IC Audit Scope

Options surfaced:

- `C1 INCLUDE`
- `C2 EXCLUDE`
- `C3 NOT APPLICABLE`

Child recommendation: `C1 INCLUDE`

Why:

- the script explicitly handles IC
- IC has an explicit graph-projections decline at the IC-canon layer
- including IC in the audit lets us close that flank honestly: no IC-specific repair is needed here

Flag:

- the recommendation is to include IC in the ADR findings section, not to widen the repair scope into IC edits

## Axis D — ADR Shape / Decision Type

Options surfaced:

- `D1 DECISION-RECORD`
- `D2 SPEC`
- `D3 HYBRID`

Child recommendation: `D1 DECISION-RECORD`

Why:

- the current problem is a boundary / alignment decision, not a settled schema contract
- the audit result is "what this script is, what it is not, and how strongly to realign"
- a spec would overstate the maturity of the infra contract before the operator decides whether any koi change is even desired

Flag:

- `D3` becomes viable only if the operator later chooses `A1` and wants ADR-0071 to carry a small appendix defining permitted projection-scope metadata for this script

## Axis E — Script-Edit Discipline

Options surfaced:

- `E1 Backward-compatible`
- `E2 Breaking`
- `E3 Feature-flagged rollout`

Child recommendation: `E1`

Why:

- the audit only supports additive work:
  - naming clarification
  - optional metadata
  - adjacent doc cleanup
- no evidence justifies a breaking contract change or a restart-coordination event

Flag:

- `E2` would only enter the picture if the operator wanted this script to become a real multi-projection registry rather than an epistemic intake script; the audit does not recommend that path

## Axis F — Cross-Repo Citation Discipline

Options surfaced:

- `F1` cite koi-processor commit SHA
- `F2` cite koi-processor file path + line numbers
- `F3` cite by description only

Child recommendation: `F2`

Why:

- under the recommended `A3` path, the ADR should cite the live audited file precisely as-read
- file path + line numbers is the cleanest honest reference while the repo-level follow-on decision remains open
- `F3` is too weak for a cross-repo audit record

Flag:

- if the operator later overrides to `A1 BUNDLED`, promote this to `F1` before the Spore active commit so ADR-0071 can pin the exact koi change-set

## Axis G — Global-Coherence Scope Expansion

Options surfaced:

- `G1 NARROW`
- `G2 WIDE`
- `G3 NARROW-WIDE`

Child recommendation: `G3 NARROW-WIDE`

Why:

- the core scope should stay narrow: PM registration alignment only
- but the audit surfaced directly-adjacent evidence-based drift in the same infra family:
  - script docstring still says Spore + IC only
  - koi README / CLAUDE still say Spore + IC only
  - PM canon still calls the file "Spore's `project_bridge_notes.py`" though it lives in koi-processor
- if the operator later opens an `A1` koi edit window, those adjacent corrections are justified by the same audit and should not require a second ADR

Flag:

- `G2` is too broad today; no evidence-based reason surfaced to widen beyond the script and its immediate descriptive surfaces

## Recommended Ratification Bundle

Primary bundle:

- `A3`
- `B2`
- `C1`
- `D1`
- `E1`
- `F2`
- `G3`

Conservative fallback bundle:

- `A2`
- `B2`
- `C1`
- `D1`
- `F2`
- `G1`

Honest-rigor fallback if operator judges the code already sufficiently aligned:

- `A4`
- `B4`
- `C1`
- `D1`
- `F2`
- `G1`

Why the fallback is weaker:

- it requires treating the script as intentionally epistemic-only and discounting the stronger PM canon overclaim as out-of-scope prose drift

## Session-Atomic Projection

- `A1 BUNDLED full additive realignment`: approximately `20-30 min`
- `A2 SPORE-ADR-ONLY`: approximately `8-15 min`
- `A3 SEQUENTIAL`: approximately `8-15 min` for the Spore-side ADR this session, with koi work intentionally deferred to a dedicated next session
- `A4 DECLINE / verification-note`: approximately `5-10 min`

## Child Position In One Sentence

The cleanest next move is to record, in a Spore ADR, that `project_bridge_notes.py` is presently an epistemic bridge-note projector with PM source registration rather than a literal 3-primary + 5-view-template registry, then decide in a dedicated koi session whether any additive infra clarification is worth landing.
