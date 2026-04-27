---
doc_id: spore.positioning.civic-infrastructure-convergence
doc_kind: positioning
status: draft
depends_on:
  - spore.commitment-pooling
  - spore.federation-protocol
  - spore.term.intent-pressure
relates_to:
  - spore.connection.open-civics
  - spore.connection.flow-funding
  - spore.connection.bennett-every-timeline
date: 2026-04-02
author: darren-zal
published_at: null
disposition: null
publication_target: website
---

> *This document is intended for publication on Spore's website. It lives here as a working draft.*

# Civic Infrastructure and the Coordination Grammar

There is a question that keeps surfacing across very different communities — bioregional organizers, protocol designers, knowledge commoners, civic technologists: **how do you build shared infrastructure that coordinates without centralizing, and that cannot be captured?**

This is not a new question. Elinor Ostrom demonstrated that communities can govern shared resources without either markets or states. Christopher Alexander showed that living cities are semilattices, not trees — they require overlapping, cross-cutting participation that no single hierarchy can represent. Ted Nelson envisioned a hypertext system where every piece of knowledge carried its provenance. Jaron Lanier argued that the web's architecture systematically strips attribution and therefore value from the people who create knowledge.

What's changed is that we now have working coordination grammar that addresses these problems structurally — not as principles to aspire to, but as primitives, patterns, and protocols that compose into living systems.

## What Civic Infrastructure Builders Keep Asking For

The Open Civics thesis — "Towards an Open Civics: Civic Infrastructures as Enabling Conditions for a Vital, Resilient, and Participatory Civilization" — articulates a set of requirements that we hear echoed across civic communities:

**Self-correcting feedback.** Systems that can sense when they're failing and adjust. Not dashboards watched by administrators, but structural feedback loops embedded in the coordination itself.

**Aligned incentives.** Participants benefit from cooperation rather than defection — not because a centralized authority enforces it, but because the coordination structure makes follow-through more rewarding than exit.

**Non-enclosability.** Protocols, patterns, and infrastructure that cannot be captured by private interests. If someone builds a wall around it, participants can fork and rebuild without losing the pattern.

**Boundary crossing with consent.** Different organizations, communities, and knowledge traditions need to exchange without either surrendering sovereignty or building walled gardens. The boundaries must be active, governed, and permeable — not absent.

**Pluralism.** Multiple worldviews, ontologies, governance structures, and ways of knowing must coexist in the same system without being flattened into a single schema.

These are hard requirements. Most coordination infrastructure satisfies one or two while violating others. Platforms solve boundary crossing but capture the participants. Blockchains solve non-enclosability but struggle with pluralism. Federated systems preserve sovereignty but often sacrifice coherence.

## What We've Found Works

The coordination grammar we've been developing — published as [Agent Commons](../project-vision.md) — provides structural responses to each of these requirements. Not perfect responses, not final responses, but responses grounded in working implementations.

### Self-correcting feedback → the coordination loop

The grammar describes a coordination ecology that cycles through phases: **sense → interpret → claim → attest → intend → commit → coordinate → act → revise**. This is not a pipeline — it is a loop. Revision feeds sensing. Evidence challenges claims. Learning updates visions. The self-correcting capacity is structural, not bolted on.

The loop operates at every scale. A person revising their understanding of a problem is running the same cycle as a bioregional federation revising its knowledge commons policy. The primitives are the same; the scope changes.

### Aligned incentives → commitment pooling

[Commitment pooling](../patterns/commitment-pooling.md) coordinates many commitments from many agents without centralizing control. Agents declare intents, make promises, accept commitments with scope-bound accountability. The legibility progression — from intent to promise to commitment — makes each stage more visible, more accountable, and more operative.

This is not speculative. The Bioregional Knowledge Commons operates two commitment pools on Celo mainnet: 23+ commitments, 33,400 VCV minted. Demurrage (configurable decay) encourages circulation. Forkability preserves exit. Settlement can be in-kind, token-based, or hybrid. The mechanism works because accountability flows from the commitment structure, not from managerial authority.

### Non-enclosability → forkability + contestability

Two [constitutional commitments](../project-vision.md#constitutional-commitments) compose to produce non-enclosability:

- **Forkability** — sovereignty is fake without it. Participants can exit and take their contribution. If the coordination structure becomes extractive, forking is always available.
- **Contestability** — claims can be questioned, decisions reviewed, outputs challenged, mistakes repaired. Dissent is structural, not defection.

Together these ensure that the grammar itself cannot be enclosed. The patterns are published under PPL. The coordination infrastructure is non-rivalrous by design.

### Boundary crossing → membrane operations

In the grammar, boundaries are not passive lines on a map. A **membrane** is an active transformation interface where crossing, translation, and authorization happen. Seven operations govern what moves across:

- **expose** — make something visible across a boundary
- **translate** — re-encode for a different context while preserving the source
- **authorize** — grant crossing rights with scope
- **attest** — witness or endorse across a boundary
- **contest** — challenge across a boundary
- **revoke** — withdraw authorization; sovereignty preserved
- **fork** — create an autonomous branch; the original continues

Every membrane operation is governed. Authorization has scope. Revocation is always possible. Consent is structural, not decorative.

Open Civics names what it calls "extitutions" — self-organizing frameworks replacing hierarchical bureaucracies, characterized by permeable boundaries and emergent organization. In the coordination grammar, an extitution is a **holon with explicit membrane operations**. The grammar makes extitutions buildable, not just describable.

### Federation without centralization → sovereignty invariants

The [mycorrhizal federation protocol](../foundations/mycorrhizal-federation-protocol.md) — named for the mutualistic networks between tree roots and fungi — specifies how sovereign nodes connect:

1. Each node maintains sovereign authority over its own knowledge representation — no external writes without explicit consent
2. Sharing is opt-in — nodes choose what to share, with whom, under what conditions
3. Identity is self-sovereign — each node generates and controls its cryptographic identity
4. Local-first operation — every node must function fully when disconnected

Federation enhances; it does not enable. Trust is established progressively through bilateral handshakes, not granted by a central authority. Events flow between nodes as structured notifications — proposals, not commands. The receiving node always decides what to accept.

This is operational, not aspirational. The BKC network runs four federated bioregional nodes with over 1,000 entities, bidirectional knowledge exchange, and event-driven eventual consistency.

### Pluralism → worldview grammar

Most coordination frameworks operate at one or two layers — usually what exists (ontological) and how to act (praxical). They treat questions about what counts as knowing, what matters, and how to inhabit participation as external concerns.

The coordination grammar makes five layers explicit:

| Layer | Question | Grammar Encoding |
|-------|----------|-----------------|
| Ontological | What kinds of things exist? | Holons, membranes, events |
| Epistemological | What counts as knowing? | Claims, evidence, attestation, provenance |
| Axiological | What matters? | Intents, commitments |
| Praxical | How do we act? | Membrane operations, protocols, patterns |
| Ethical | How do we inhabit participation? | Consent, contestability, forkability |

This matters for pluralism because different communities answer these questions differently, and the grammar must support translation between worldview positions rather than flattening them into one. Federation without convergence. Interoperability without uniformity.

## Health and Viability

Open Civics proposes three health indicators for civic systems: **resilience** (capacity to absorb shocks), **choice** (meaningful alternatives available), **vitality** (generative capacity, aliveness of participation).

These map naturally onto viability signals the grammar can sense:

- **Resilience** — repair debt (unresolved disputes, broken commitments), ecological thresholds (approach to irreversible states)
- **Choice** — forkability (can participants actually leave?), membrane authorization (can they participate partially, on their own terms?)
- **Vitality** — observable epistemic gap (per F5 ADR-0076 reframe of demoted [intent-pressure](../research/connections/intent-pressure.md): is the system generating intents? are they activating?), unused capacity (offers without matching needs)

The civic framing — resilience, choice, vitality — provides a legible organizing layer over these more granular signals. We don't yet have a working dashboard that maps one to the other, but the structural correspondence is strong enough to warrant the attempt.

## The Pattern Language Convergence Question

Open Civics describes an Open Civic Innovation Framework (OCIF) — a "meta-pattern" or "pattern language" for composing civic utilities. Agent Commons is also a pattern language — grammar, named patterns, and protocols for composing coordination infrastructure.

Are these the same pattern language at different maturity levels? Or are they complementary languages that need a translation membrane between them?

We don't know yet. The answer depends on whether OCIF's civic patterns can be expressed as compositions of the grammar's 9 primitives (3 structural: field / holon / membrane + 6 verbs: intent / commitment / joint-commitment / evidence / signal / reproduction). If they can, the languages are converging. If they can't, the grammar may be missing something, or the civic patterns may operate at a different layer that the grammar supports but does not directly express.

This is an open research question, and an invitation. The [comparative intake](../research/connections/open-civics.md) recorded the structural mapping in detail. The convergence test is concrete and available to anyone who wants to try it.

## What We Don't Have Yet

Honesty about gaps matters more than comprehensive claims:

- **Activation** — how new participants join, find their way in, and become effective. The grammar describes coordination for those already participating. The onramp is underspecified.
- **Multi-level holonic nesting** — the grammar has been validated at two nesting levels (personal node within bioregional federation). Three or more levels remain untested.
- **External adoption** — no project outside the original maintainer group has yet adopted the governance memory pattern independently. Track 1 of the [roadmap](../roadmap.md) is focused on this.
- **Continuous conviction signals** — commitment pooling coordinates discrete commitments, but may need a continuous signal mechanism (analogous to conviction voting) for contexts where belief and capacity change gradually.

These are not fatal gaps. They are the work ahead.

## What This Means

The coordination grammar is published. The patterns are tested against real projects — bioregional knowledge commons with four federated nodes, commitment pooling on a public ledger, personal workflow agents, relay protocols. The constitutional commitments (provenance, forkability, pluralism, autonomy, authorized boundary crossing, explicit authority, contestability) are structural, not aspirational.

For civic infrastructure builders, this means the primitives exist. The coordination problems that civic communities face — federation without centralization, non-enclosable shared infrastructure, boundary crossing with consent, pluralism without fragmentation — have structural responses, not just principles.

The grammar does not prescribe what to build. It provides the vocabulary for thinking precisely about coordination, and the patterns for composing solutions that respect sovereignty while enabling coherence. The door is open for convergence — between OCIF and Agent Commons, between civic and bioregional and personal coordination, between any communities willing to do the translation work across membranes.

## Disposition

No changes to the core grammar are indicated. The value of this convergence is in communication framing — making the grammar legible to civic audiences — and in the open question about pattern language convergence that can only be answered through collaboration.
