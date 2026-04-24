# Spore — Documentation Map

Spore is an infrastructure for collective agency — a common grammar for plural, sovereign coordination across scales and scopes. It develops and publishes **Agent Commons**: a pattern language, protocol family, and governance-memory pattern that enables coordination and coherence without surrendering sovereignty.

## Repo Taxonomy

| Layer | Contains | Directory |
|-------|----------|-----------|
| **Foundations** | Invariants, ontology, first principles. What defines what kind of system this is. | `foundations/` |
| **Patterns** | Recurring coordination solutions. Context → Problem → Forces → Pattern → Related. | `patterns/` |
| **Protocols** | Explicit interaction and state contracts. Wire formats, handshakes, envelopes. | `protocols/` |
| **Governance** | Current reference profile and operating layer. The rules Agent Commons uses for itself. | `governance/` |

Patterns and protocols are docs first. They become graph entities via ingestion. They get stable identities through `doc_id` and `spec:<doc_id>`. Separate repos are only needed when an implementation requires its own runtime, maintainers, or release cadence.

## Start Here

- [project-vision.md](./project-vision.md) — what Spore is, why it exists, how it works

## Foundations

Theory and first principles that define what kind of system this is:

- [relational-agency-and-holons.md](./foundations/relational-agency-and-holons.md) — holonic agency: wholes and parts, coherence across scales
- [holonic-network-architecture.md](./foundations/holonic-network-architecture.md) — dual-axis structural model (containment + overlap) plus mediation-over-demarcation for interface design
- [federation-protocol.md](./foundations/federation-protocol.md) — sovereign exchange rules, federation invariants
- [governance-artifacts-and-graph-projections.md](./foundations/governance-artifacts-and-graph-projections.md) — how visions, intents, and commitments form a coordination ecology with dual text/graph representation
- [structural-legitimacy.md](./foundations/structural-legitimacy.md) — authority-consequence coupling as the basis of governance legitimacy (replaces the earlier DAG-of-authority framing)
- [sensor-oracle-governance.md](./foundations/sensor-oracle-governance.md) — doctrine for sensor selection, calibration, maintainer roles, contestation, disagreement, interpretation authority, and absent-evidence handling across machine / human / AI-summary modalities
- [representation-authority.md](./foundations/representation-authority.md) — inter-layer precedence doctrine across the five canon representation layers (text / graph / sensor / attestation / agent-summary); extends ADR-0041 text-authoritative-representation; hybrid default + context-overrides + appeal-protocol per ADR-0046 rule-stack
- [failure-modes.md](./foundations/failure-modes.md) — 8-category failure-mode taxonomy (representation / protocol / sensor-attestation-evidence-integrity / scale-transition / membrane-boundary / commitment-break / actor-capture / meta-pattern-composition) with Ostrom 3-level rule-stack decomposition per category; sibling-doctrine to structural-legitimacy
- [actuator-logic.md](./foundations/actuator-logic.md) — response-doctrine for observable epistemic gaps (5 response-categories: acknowledge-and-record / contest / amend-declared-state / escalate / hold-as-tension) under B1 unified principled-rule structure; inherits F4 §5.3 appeal-protocol wholesale; H3 hybrid substrate-child to structural-legitimacy + operational-pair sibling to failure-modes
- [actor-governance.md](./foundations/actor-governance.md) — 8-category actor-governance doctrine (admission / authority-delegation / power-asymmetry / joint-actor / federation-encounter-actor / actor-capture-remediation / governance-body-composition / authorization-boundaries) under B5 SELECTIVE per-category synthesis-depth (NOVEL B-axis); inherits F4 §5.3 appeal-protocol wholesale; H3 3-way hybrid substrate-child to structural-legitimacy + operational-pair sibling to actuator-logic AND failure-modes; discharges ADR-0042 §82 + F6.7 + F5 §4.2 forward-refs
- [spore-instance-model.md](./foundations/spore-instance-model.md) — how Spore materializes: canon, node, agent, site

## Patterns

Recurring coordination solutions extracted from working implementations:

- [governance-memory.md](./patterns/governance-memory.md) — documents as machine-readable constitutional memory (the spec-DAG pattern)
- [intent-publication-and-activation.md](./patterns/intent-publication-and-activation.md) — the bridge between vision and pooled commitments (needs, offers, intents as vectors)
- [commitment-pooling.md](./patterns/commitment-pooling.md) — pools as shared fields where commitment vectors compose
- [discourse-as-governance.md](./patterns/discourse-as-governance.md) — discourse as the self-reflective governance layer
- [federated-knowledge-exchange.md](./patterns/federated-knowledge-exchange.md) — sovereign knowledge nodes exchanging without centralizing

## Protocols

Explicit interaction and state contracts:

- [store-and-forward-relay.md](./protocols/store-and-forward-relay.md) — pair-level relay and forwarded exchange
- [claims-evidence-attestation.md](./protocols/claims-evidence-attestation.md) — epistemic anchoring and grounding
- [agentic-memory-dimension-vocabulary.md](./protocols/agentic-memory-dimension-vocabulary.md) — v1 (predecessor); remains valid for v1-bucketed records
- [agentic-memory-dimension-vocabulary-v2.md](./protocols/agentic-memory-dimension-vocabulary-v2.md) — **current default** dimension vocabulary (refined `retrieval_model` + new `procedural_memory` dimension; steward-decided 2026-04-14)
- [restriction-maps-and-comparison-records.md](./protocols/restriction-maps-and-comparison-records.md) — governed restriction-map artifacts and per-dimension comparison records for research agents
- [protocols/README.md](./protocols/README.md) — protocol overview and future candidates

## Governance

The rules Agent Commons uses for its own documentation and project governance:

- [agent-commons-meta-protocol.md](./governance/agent-commons-meta-protocol.md) — artifact taxonomy and DAG rules
- [matter-register.md](./governance/matter-register.md) — thin, queryable register of what Spore currently treats as load-bearing
- [project-bootstrap-spec.md](./governance/project-bootstrap-spec.md) — tier definitions and bootstrap procedure
- [project-briefing-spec.md](./governance/project-briefing-spec.md) — context assembly endpoint spec for agents
- [adoption-guide.md](./governance/adoption-guide.md) — step-by-step onboarding

## Lexicon

Canonical definitions for terms that lack their own primary pattern or foundation doc:

- [field.md](./foundations/lexicon/field.md) — the distributed relational medium within which shared fields, learning fields, and relational fields appear as different projections
- [linguistic-closure.md](./foundations/lexicon/linguistic-closure.md) — the structural condition in which categories terminate inquiry before truth evaluation; named failure mode the grammar's structural mechanisms resist
- [stigmergy.md](./foundations/lexicon/stigmergy.md) — indirect coordination through environmental modification; named mode of signal+event+intent primitives

## Research: Connections

Bridge notes and comparative notes on external concepts and their structural relationship to Spore's grammar. Bridge notes remain source-specific. Comparative notes record multi-tradition support for canon/foundation language already active in Spore. These are governed research artifacts about lateral reference and convergence — the external concepts themselves are not absorbed into canon by default.

- [hyperstition.md](./research/connections/hyperstition.md) — fictions that make themselves real; structural parallels to the coordination ecology
- [hyperstition-markets.md](./research/connections/hyperstition-markets.md) — collective-belief markets; structural analogy to commitment pooling
- [constructive-hyperstition.md](./research/connections/constructive-hyperstition.md) — the constructive/extractive distinction; constitutional commitments as candidate criteria
- [bennett-every-timeline.md](./research/connections/bennett-every-timeline.md) — persistence ordering, valence, and the cosmic ought; formal grounding for intent pressure and constitutional weakness
- [flow-funding.md](./research/connections/flow-funding.md) — flow funding mechanisms (hub-cultivator, TBFF); allocation patterns as commitment pooling extensions
- [claude-code-membrane-control.md](./research/connections/claude-code-membrane-control.md) — Claude Code as membrane-control surface; authorize, expose, revoke, fork validated at production scale
- [promise-foundation-commitment-protocol.md](./research/connections/promise-foundation-commitment-protocol.md) — Promise Foundation commitment protocol; structural parallels to commitment pooling lifecycle
- [open-civics.md](./research/connections/open-civics.md) — civic infrastructure as enabling conditions; pattern language convergence with OCIF
- [johar-word-not-thing.md](./research/connections/johar-word-not-thing.md) — linguistic closure, sufficiency error, perceptual fidelity; named failure modes and design qualities for the grammar
- [comparative-mediation-over-demarcation.md](./research/connections/comparative-mediation-over-demarcation.md) — six-tradition support picture for the enacted mediation principle in holonic network architecture

## Research Ops

Operational artifacts for running deep research against the local Spore ecosystem and external web sources:

- [chatgpt-deep-research-prompt-2026-04.md](./research/chatgpt-deep-research-prompt-2026-04.md) — ChatGPT Deep Research prompt optimized for a ranked evolution agenda
- [chatgpt-deep-research-context-pack-2026-04.md](./research/chatgpt-deep-research-context-pack-2026-04.md) — upload manifest for the local context pack
- `scripts/build_deep_research_context_pack.sh` — assembles the core or extended local corpus into one uploadable markdown file

## Positioning

Comparative articles that position Spore's grammar relative to other frameworks:

- [hyperstition-as-coordination.md](./positioning/hyperstition-as-coordination.md) — Spore as grammar for composing constructive hyperstitions
- [civic-infrastructure-convergence.md](./positioning/civic-infrastructure-convergence.md) — civic infrastructure requirements and how the coordination grammar addresses them

## Roadmap

- [roadmap.md](./roadmap.md) — five tracks: external adoption, decision governance, pattern language maturation, comparative intake, reference public membrane
