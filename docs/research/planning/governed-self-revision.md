# Governed Self-Revision

## Purpose

Name the meta-layer by which Spore updates its own grammar with discipline.

Spore already has most of the substrate: canon, bridge notes, comparative intake, learning-field synthesis, named tensions, dispositions, and bounded pilots. What has been missing is an explicit program for how that substrate revises itself from practice without collapsing the constitutional layer into fast operational drift.

This note scopes that program.

Internal working name: **Governed Self-Revision**

Positioning name: **Poietic Governance**

Research framing: **autopoietic learning / autopoietic governance**

## Why This Exists

Spore should be able to:

- learn from external frameworks
- learn from downstream implementations such as BKC or RegenAI
- learn whether its own vocabularies, comparison grammars, and review routines are working
- revise patterns and protocols from practice

But it should not silently revise what it fundamentally cares about without governance.

The design problem is therefore not only **what can update**, but **how quickly each layer is allowed to update** and **under what authority**.

## Preconditions

Two preconditions sit beneath the meta-layer.

### 1. Matter Register

A structured surface of what Spore currently treats as load-bearing:

- canon claims
- active workstreams
- bounded pilots
- preserved tensions / obstructions
- intentional non-gluings
- non-goals or out-of-scope boundaries

The Matter Register is upstream of salience scoring and novelty detection. The system cannot tell what is outside the frame unless the frame is legible in the first place.

Open implementation choice:

- **Thin extraction path**: manually extract a compact register from the current canon and planning surfaces
- **Restructuring path**: first restructure canon into a more queryable form, then generate the register

Default: start with the thin extraction path unless it proves too weak.

Current artifact: [matter-register.md](../../governance/matter-register.md)

### 2. Layered Evidence Stack

The evidence stack must remain stratified:

- **Raw evidence artifacts**: outcome snapshots, revision events, decision traces, metrics
- **Comparison records**: interpretation over raw evidence in relation to Spore patterns, protocols, or vocabularies
- **Aggregation / salience signals**: computed over comparison records
- **Synthesis / review questions**: organized signal patterns routed to governance

This split is structural. Raw evidence is not the same thing as interpretation, and comparison records should point to raw evidence rather than absorb it.

## The Seven Primitives

These seven primitives form the meta-layer.

### 1. Unified Feedback Artifact

Use `comparison_record` as the default interpretive artifact for both:

- framework comparison
- downstream implementation feedback

This does not eliminate raw evidence artifacts. It unifies the interpretive layer so one aggregation pipeline and one salience routine can operate across the whole system.

### 2. Cadence-As-Governance

Update rate is a governance rule.

- operational learning moves fast because authorization is low
- method learning moves slower because authorization is higher
- pattern/protocol revision moves slower still
- constitutional revision is rare and explicit

Trying to update a layer faster than its authorization permits is itself a governance exception.

### 3. Quality-Weighted Evidence

Implementation feedback should not aggregate naively.

Start with coarse bands, not fake precision:

- `high`
- `medium`
- `low`

Weighting inputs may include:

- implementation maturity
- instrumentation quality
- pattern fidelity
- governance alignment
- source quality
- recurrence across independent implementations or sources

### 4. Coherent Novelty Detection

This is not ordinary relevance scoring.

Relevance scoring asks: does this bear on the current frame?

Coherent novelty detection asks: what repeatedly fails to fit the current frame across multiple contexts?

Likely inputs:

- repeated `translation_mismatch`
- repeated `not_in_scope`
- recurrence across sources or implementations
- low relevance against current canon/workstreams combined with high recurrence

**Deferred-trust rule:** this detector starts as logging plus review aid only. It is not a trusted trigger until sufficient baseline history exists. Default expectation: no trusted automation before roughly 50-100 diverse comparison records.

### 5. Revision Chain Memory

Every meaningful grammar update should preserve institutional memory:

- what changed
- what it superseded
- which evidence or signals drove the change
- who reviewed it
- which boundary conditions apply

Otherwise Spore learns but forgets why it learned.

### 6. Escalation Discipline

This is the operational governance gate between signal production and human review.

It should define:

- threshold conditions
- routing rules
- response windows
- valid dispositions

Valid dispositions should include at least:

- `acknowledge`
- `monitor_only`
- `defer`
- `open_review`
- `change_grammar`

Without `monitor_only`, the steward queue either floods or goes numb.

### 7. Propagation Discipline

When Spore revises something, downstream implementations need a disciplined way to respond.

Start pull-first and versioned:

- Spore publishes what changed and why
- downstream implementations explicitly choose to `adopt`, `defer`, `fork`, or `reject`

Those responses are themselves new signals back into the learning field. Propagation is therefore bidirectional, but adoption remains sovereign and opt-in.

## Design Test

### Recursive Coherence Check

The program should survive its own application.

Examples:

- cadence rules for this program cannot be revised at operational cadence
- weighting rules for evidence should not be updated from unweighted anecdote alone
- escalation discipline changes should themselves pass through explicit review

If the meta-layer exempts itself from its own rules, that is a governance smell.

## Update Layers And Rates

These are default, not permanent:

| Layer | Typical cadence | Typical authority |
|-------|------------------|-------------------|
| Operational learning | weekly / per incident | implementation steward or operator |
| Method learning | monthly | learning-field steward review |
| Pattern / protocol revision | milestone-based | explicit Spore review |
| Constitutional revision | rare | steward review with stakeholder input |

## Sequencing

This program scales in stages.

### Stage 1

Build only what is justified now:

- Matter Register
- Layered evidence discipline in docs and workflow
- agentic-memory comparison pilot
- frame-breaking detection in `heuristic_only` mode

Stage 1 validates whether the comparison artifact family and dimension-vocabulary approach actually produce useful distinctions.

### Stage 2

Build downstream implementation-feedback infrastructure **only when a downstream implementation is actually ready to generate signals**.

This means:

- real raw evidence surfaces exist
- comparison records can be grounded in practice rather than synthetic examples
- the artifact grammar has already been validated in a lower-stakes pilot

Do not build the receiving machinery earlier than the signal source.

## Current Pain Check

Before extending this program, ask:

- Is there actual downstream feedback available now?
- Are comparison records in active workflow, or still only at spec/example level?
- Are coherent novelty signals already appearing in bridge notes, synthesis notes, or bounded pilots?

If the answer is mostly "not yet," keep the work in Stage 1.

## Immediate Next Steps

1. Use Matter Register v1 as the initial salience surface and keep it on monthly steward review.
2. Run the agentic-memory pilot first.
3. Review whether the artifact grammar actually improved decisions.
4. Only then decide whether implementation-feedback infrastructure is timely.

## Success Condition For This Program

The program is succeeding if:

- Spore can revise patterns and protocols from practice without value drift
- operational signals become legible without overwhelming stewards
- downstream implementations remain sovereign while still functioning as sensors
- grammar revisions preserve their reasoning trail

## Failure Modes

Watch for:

- building meta-infrastructure before live signals exist
- overloading `comparison_record` with raw evidence fields
- numerical weighting theater without justified evidence quality distinctions
- frame-breaking detection being treated as trusted too early
- fast operational feedback quietly rewriting slow constitutional layers
