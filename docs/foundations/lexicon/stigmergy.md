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

## Scale Applicability: Elliott Breakpoint

Mark Elliott's empirical work on human stigmergy adds a scale-dependent criterion for when stigmergy is the applicable coordination class rather than social negotiation. Small groups (2–25 members) coordinate well through social negotiation: bilateral and small-group communication carries the coordination load directly. Large groups (25–n, for n into the thousands or higher) cannot sustain social negotiation as the primary coordination mechanism — the overhead is prohibitive — and require stigmergic substrate as the load-bearing layer. Between roughly 25 and 150 members there is transitional territory where both modes coexist.

This breakpoint is an operational criterion, not a theoretical floor: it tells canon editors when to reach for the stigmergy primitive rather than a consent-and-commitment primitive, and it tells protocol designers when a social-negotiation-only design will fail at scale.

## Read+Write-Symmetric Substrate: Structural Requirement

What distinguishes stigmergic coordination from broadcast (one-to-many) and bilateral-channel (one-to-one) coordination is a structural property of the medium: a persistent read+write-symmetric substrate. Every agent that participates reads from the same shared state and writes back into the same shared state; there is no producer/consumer asymmetry, no sender/receiver asymmetry.

Broadcast coordination has write-asymmetry (one or few write; many read). Bilateral-channel coordination has routing asymmetry (writes are directed to specific readers). Stigmergic coordination removes both asymmetries: traces in the medium are available to any agent that reads the medium, and any agent can contribute traces. This is what makes the coordination "indirect" — it is mediated by the medium itself, not by routing or broadcast infrastructure.

## Stigmergy as Governance Move

Stigmergy is not only a coordination pattern; it is a governance move. GeorgieBC's synthesis (carried by `spore.connection.collective-intelligence`) names the move directly: stigmergic governance replaces *representation-of-persons* with *representation-of-actions*. In representation-of-persons governance, legitimacy flows through who holds authority to speak for whom; in representation-of-actions governance, legitimacy flows through what traces have been written into the shared medium and what patterns those traces compose.

This reframing is load-bearing. A Spore primitive that invokes stigmergy without naming the governance move is making an architectural claim without acknowledging its political character. Stigmergic coordination privileges certain patterns of participation (those who can read and write the substrate proficiently) and disprivileges others (those excluded from the medium, or whose literacy in the medium is weaker); this is a governance property, not a neutral coordination mechanism.

## Design Discipline for Human Stigmergic Environments

Heylighen (2015/2016) and Brastaviceanu articulate a three-part design discipline for stigmergic environments intended for human coordination:

1. **Persistent read/write substrate.** The medium must carry traces across time; ephemeral channels do not sustain stigmergy. Both read and write access must be structurally symmetric across participating agents (see above).
2. **Incentive structures biasing choices toward system goals.** Traces must be interpretable as gradients — agents need cues that orient local action toward globally coherent outcomes. Absent such biasing, stigmergy degenerates into noise accumulation.
3. **Embedded-role "speed bumps" rather than policing-style enforcement.** Anti-harmful-behaviour mechanisms must live *in the medium itself* as structural friction (permissioning, cost-per-trace, role-scoped write access), not as post-hoc policing layers above the medium. Policing stigmergy breaks the governance-through-traces property and re-introduces representation-of-persons via the policing role.

Canon text that invokes stigmergy without addressing these three disciplines is gesturing at the pattern without committing to its operational requirements.

## Governance Surfaces Required

Stigmergic coordination primitives in Spore canon — wherever the grammar invokes stigmergy as an operational mode — must name three governance surfaces (see `spore.connection.canon-framing-coordination-substrate` §3 and `spore.connection.stigmergy-as-coordination-substrate` R3):

- **Medium-integrity governance** — who maintains the shared substrate; how medium-level capture is prevented; what happens when the medium degrades. Absent this surface, stigmergic primitives reproduce the decentralization-theatre failure mode (see spore:ADR-0005): visible decentralization while governance is displaced into infrastructure control.
- **Trace-format specification** — what counts as a trace; how traces are encoded; what structure traces carry. Unspecified trace formats are the FairCoin filtering-membrane failure mode (see spore:ADR-0003 evidence): boundaries look specified but are not operationally constrained.
- **Trace-interpretation rules** — what local rule each agent follows in responding to traces; how divergent interpretations reconcile. Misspecification at the interpretation surface reproduces the admin-capture failure mode (see spore:ADR-0005 peer-governance declination).

Per spore:ADR-0005, the decentralization-myth-bundle declination applies: canon text invoking stigmergy as a positively-valued primitive either scopes the language away from the three bundle critiques (digital-labor-as-free-gift, administrator-capture-in-peer-governance, decentralization-theatre) or carries explicit acknowledgement of them alongside the stigmergy invocation.

## Relationship to Intent Pressure

Stigmergy is one mechanism through which [intent pressure](./intent-pressure.md) propagates. When the normative frontier and epistemic frontier diverge, that gap creates pressure — but the pressure must be made legible for coordination to happen. Stigmergic traces are one way pressure becomes legible without anyone explicitly publishing an intent.

Example: a bioregional knowledge commons node where multiple users independently search for herring population data, find nothing, and log their queries. The accumulated search traces create a stigmergic signal — an inferred need for herring data — that a knowledge gardener can sense and act on. No one declared an intent. The medium itself made the pressure visible.

## What Stigmergy Is Not

- **Not a new primitive.** Signal, event, and inferred intent already compose to support it. Naming it recognizes a well-known coordination pattern, not a gap in the grammar.
- **Not identical to explicit intent publication.** Stigmergic signals are typically inferred from environmental traces, not declared. The [intent publication](../../patterns/intent-publication-and-activation.md) pattern handles the explicit case; stigmergy handles the implicit case. Both produce intent pressure.
- **Not sufficient for high-stakes coordination.** Stigmergy works well for low-cost, reversible actions (ants can abandon a trail). For high-stakes commitments, explicit intent publication, consent, and membrane authorization are needed. Stigmergy orients; commitment protocols bind.

## Source

The concept originates with Pierre-Paul Grassé (1959), studying termite construction behavior. It was formalised for human coordination by Francis Heylighen (2015/2016) in the complex systems literature, extended empirically by Mark Elliott (including the 2–25 / 25–n scale breakpoint above), and articulated as governance move by GeorgieBC. The canonical external anchor for Spore is `spore.connection.stigmergy-as-coordination-substrate` (Heylighen/Elliott/Brastaviceanu wiki-lineage bridge note); GeorgieBC's representation-of-actions synthesis is carried by `spore.connection.collective-intelligence`. The [Open Civics thesis](../../research/connections/open-civics.md) names stigmergy as a core coordination mechanism for distributed civic innovation, alongside polycentricity and peer-to-peer cybernetics.

Shared canon framing (cross-project coordination with PM's `pm.protocol`): `spore.connection.canon-framing-coordination-substrate`. Canon decision record: `spore:ADR-0007-coordination-substrate-at-stigmergy` (sibling: `poietic-match:ADR-0006-coordination-substrate-at-protocol`).
