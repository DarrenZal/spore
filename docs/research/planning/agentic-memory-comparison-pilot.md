# Agentic Memory Comparison Pilot

## Purpose

Preserve the next bounded steps for the restriction-map / comparison-record work so they remain visible after the schema and example-pack phase.

This is a small Track 4 pilot, not a general sheaf formalization effort.

This pilot is Stage 1 of the wider Governed Self-Revision program. It validates the artifact grammar and dimension-vocabulary approach in a low-stakes setting before any downstream implementation-feedback lane is opened.

## Current Baseline

Completed:

- Restriction-map and comparison-record protocol drafted in `docs/protocols/restriction-maps-and-comparison-records.md`
- Example pack added under `docs/protocols/examples/`
- First provisional dimension vocabulary defined in `docs/protocols/agentic-memory-dimension-vocabulary.md`
- YAML artifact validator added at `scripts/validate_restriction_artifacts.py`

Not yet done:

- No real external framework comparisons have been recorded yet
- No synthesis note has been produced from actual comparison records
- No evidence yet that the protocol improves bridge-note quality or learning-field aggregation
- No downstream implementation-feedback pilot should start until this Stage 1 pilot produces a stable enough artifact base

## Pilot Scope

Use `dv.agentic-memory.v1` to compare **3-5 real agentic-memory frameworks** against Spore's learning field.

Initial candidate set:

- Mem0
- Zep
- Letta
- MemGPT
- Graphiti

The pilot should stay bounded:

- One vocabulary version only: `dv.agentic-memory.v1`
- 3 delegated restriction maps minimum
- 6-10 comparison records total
- 1 short synthesis note at the end
- No implementation-feedback infrastructure work beyond what this pilot directly needs

## Required Outputs

1. **Delegated restriction maps**

- Create at least 3 real delegated maps for selected frameworks
- Keep them provisional unless there is a clear reason to ratify them as active for broader use

2. **Comparison records**

- Produce 2-3 comparison records per framework or comparison slice
- Include at least:
  - one `agreement`
  - one `complementarity`
  - one `translation_mismatch` or `intrinsic_obstruction`
  - one partial-grounding or `not_in_scope` case if it appears naturally

3. **Synthesis note**

- Write one short learning-field synthesis note summarizing:
  - where convergence exists
  - where complementarity exists
  - where tensions or obstructions should be preserved
  - whether `dv.agentic-memory.v1` is good enough or needs revision

4. **Pilot decision**

- End with an explicit decision:
  - keep `dv.agentic-memory.v1`
  - revise to `dv.agentic-memory.v2`
  - stop because the artifact family did not add enough value

## Next Steps

1. Select the 3-5 frameworks and freeze the pilot set before comparison starts.
2. Gather the minimum stable source pack for each framework: docs, README, architecture notes, and integration surface.
3. Draft the first 3 delegated restriction maps using `dv.agentic-memory.v1`.
4. Generate comparison records from those maps, with explicit comparison context:
   - `bridge_note`
   - `adoption_review`
   - `integration_review`
5. Treat any frame-breaking signal as `heuristic_only` during this pilot. Log repeated `translation_mismatch` and `not_in_scope` patterns, but do not let them trigger autonomous escalation.
6. Review whether relation labels are actually discriminating usefully:
   - does `agreement` differ meaningfully from `complementarity`?
   - does `translation_mismatch` indicate vocabulary/map weakness rather than framework conflict?
7. Write the synthesis note and record the pilot decision.

## Success Criteria

The pilot counts as successful if all of the following are true:

- At least 6 comparison records are completed across at least 3 frameworks
- At least 60% of completed records produce a typed distinction that ordinary similarity scoring would likely have blurred
- At least one case of complementarity and one case of preserved tension are made clearer by the typed comparison
- At least one case each of `agreement`, `complementarity`, and either `translation_mismatch` or `intrinsic_obstruction` appears in the completed set
- The vocabulary revision question becomes concrete rather than abstract
- The resulting synthesis note is more actionable than a standard bridge-note cluster review
- A clear end-state decision is made: keep `v1`, revise to `v2`, or stop

## Detector Rule

Frame-breaking detection is out of trust scope for this pilot.

- Repeated `translation_mismatch` and `not_in_scope` signals should be logged
- They may inform review discussion and vocabulary revision
- They must not be treated as trusted escalation triggers yet

Default stance: this pilot contributes baseline history toward future coherent-novelty detection, but does not validate that detector as an operational mechanism

## Failure Criteria

Stop or rethink if:

- most dimensions land in `not_in_scope` or `underdetermined`
- relation labels collapse into vague prose rather than disciplined distinctions
- the protocol adds authoring overhead without changing decisions
- framework comparisons depend mostly on dimensions that `dv.agentic-memory.v1` omitted
- fewer than 6 meaningful comparison records can be completed without stretching the vocabulary beyond usefulness

## Guardrails

- Do not expand into sheaf Laplacians, cohomology, or learned restriction maps during this pilot
- Do not treat delegated maps as bilateral consent artifacts
- Do not smooth over grounding failures by relabeling them as obstructions
- Keep the pilot analytical and bounded; no grand claim that Spore "now has" a sheaf-based learning field

## Likely Follow-On

If the pilot works:

- mint `dv.agentic-memory.v2` if needed
- add one or two more domain vocabularies
- consider whether Poietic Match second-stage comparison should reuse the same artifact family
- then reassess whether any downstream implementation is actually ready to generate implementation-feedback signals

If the pilot does not work:

- keep the protocol docs as research scaffolding
- fall back to bridge notes plus ordinary comparative synthesis
