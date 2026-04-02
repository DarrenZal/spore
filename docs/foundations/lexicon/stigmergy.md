---
doc_id: spore.term.stigmergy
doc_kind: foundation
status: draft
depends_on:
  - spore.relational-agency-and-holons
primary_for:
  - stigmergy
relates_to:
  - spore.connection.open-civics
  - spore.term.intent-pressure
worldview_layer: praxical
aliases:
  - indirect coordination
  - trace-based coordination
---

# Stigmergy

Coordination through environmental modification — individual actions leave traces in a shared medium that stimulate subsequent actions by others, without direct communication or central planning. The term comes from Grassé (1959), who observed it in termite nest-building: each mound of deposited soil changes the local environment in ways that guide where the next mound is placed.

Stigmergy is not a new primitive. It is a named coordination mode that emerges from composing existing primitives — specifically **signal**, **event**, and **inferred intent**.

## How the Grammar Supports It

Three primitives compose to produce stigmergic coordination:

- **Signal** — a directional cue (need, offer, alert, sensor output). Signals modify the shared coordination environment — they are the "traces" in the medium.
- **Event** — an immutable record of something that happened. Events accumulate into a history that shapes the landscape other agents sense. A pattern of events creates gradients that orient future action.
- **Inferred intent** — intent pressure can be inferred from accumulated signals and events without anyone explicitly declaring it. Repeated unmet requests, resource flow gaps, or recurring patterns of activity create legible pressure — the stigmergic equivalent of a pheromone trail growing stronger with reinforcement.

The coordination loop's **sense** phase is where stigmergy enters: agents perceive the current state of the shared medium (event graph, signal history, entity graph) and respond to the gradients they find there.

## Natural and Social Examples

- **Ant colonies** — pheromone trails strengthen with use, guiding foragers toward food sources without any ant knowing the full network
- **Open-source repositories** — commit histories, issue threads, and pull requests modify a shared medium; contributors sense where attention is needed from the accumulated traces
- **Wiki editing** — each edit changes the shared document; subsequent editors respond to what they find, building coherence without coordination meetings
- **Market prices** — prices encode dispersed information; participants respond to price signals without needing to know what other participants know

## Relationship to Intent Pressure

Stigmergy is one mechanism through which [intent pressure](./intent-pressure.md) propagates. When the normative frontier and epistemic frontier diverge, that gap creates pressure — but the pressure must be made legible for coordination to happen. Stigmergic traces are one way pressure becomes legible without anyone explicitly publishing an intent.

Example: a bioregional knowledge commons node where multiple users independently search for herring population data, find nothing, and log their queries. The accumulated search traces create a stigmergic signal — an inferred need for herring data — that a knowledge gardener can sense and act on. No one declared an intent. The medium itself made the pressure visible.

## What Stigmergy Is Not

- **Not a new primitive.** Signal, event, and inferred intent already compose to support it. Naming it recognizes a well-known coordination pattern, not a gap in the grammar.
- **Not identical to explicit intent publication.** Stigmergic signals are typically inferred from environmental traces, not declared. The [intent publication](../../patterns/intent-publication-and-activation.md) pattern handles the explicit case; stigmergy handles the implicit case. Both produce intent pressure.
- **Not sufficient for high-stakes coordination.** Stigmergy works well for low-cost, reversible actions (ants can abandon a trail). For high-stakes commitments, explicit intent publication, consent, and membrane authorization are needed. Stigmergy orients; commitment protocols bind.

## Source

The concept originates with Pierre-Paul Grassé (1959), studying termite construction behavior. It was extended to human coordination by Heylighen (2016) and others in the complex systems literature. The [Open Civics thesis](../../research/connections/open-civics.md) names stigmergy as a core coordination mechanism for distributed civic innovation, alongside polycentricity and peer-to-peer cybernetics.
