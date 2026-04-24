---
doc_id: spore.federation-encounter
doc_kind: pattern
status: draft
depends_on:
  - spore.governance-artifacts
  - spore.federation-protocol
concepts:
  - federation-encounter
  - encounter
  - joint-commitment
  - governance-memory
relates_to:
  - spore.commitment-pooling
  - spore.governance-memory
  - spore.intent-publication
---

# Federation Encounter

Coordinating federation-scale coordination-events as a named composition of existing primitives within bounded Field-conditions.

## Context

Federations — whether bioregional (Salish Sea cross-node stewardship), protocol-based (Poietic Match mutual-match activation), personal-workflow (design-reviews and stand-ups), or cross-federation (Octo × BKC quarterly, Spore × external shops) — hold recurring coordination-events where multiple holons co-present in a bounded temporal-spatial window to produce coordination artifacts: decisions, commitments, shared orientations, follow-ups.

These events are often informally organized: ad-hoc invitations, fluid attendance, implicit facilitation rules, ephemeral evidence-capture. The *structure* — who convenes, how orientation is established, when intents surface, what counts as artifact — is carried mostly in the habits of the participants rather than in the coordination grammar. When federations scale beyond the participants who hold the habits, structure leaks, events drift, and coordination quality degrades.

Spore's 9-primitive grammar (3 structural: field / holon / membrane; 6 verb: intent / commitment / joint-commitment / evidence / signal / reproduction) suffices to describe what happens inside such events, but the *event-scope-shape itself* was, until now, not named at pattern-layer — only at derived-glossary-layer via ADR-0055's `encounter` slug + framing-note. This pattern-doc names the federation-scoped coordination-recipe for adopters.

## Problem

How do federations run coordination-events with enough structure that coordination quality survives scaling beyond participant-habit — while respecting existing primitive grammar rather than inventing new constructs?

## Forces

- **Habit-to-structure translation**: Experienced federation participants hold implicit event-discipline (Johar's "structured encounter" in *Situational Truthing*, 2026). Newcomers and scaled federations do not. Structure must be legible enough to transmit but light enough not to feel bureaucratic.
- **Event-scope vs act-scope**: Coordination acts (Signal / Intent / Commitment / Evidence) are the primitives; events are *containers* in which they fire. The container shape matters for coordination quality (pre-event surfacing, in-event discipline, post-event capture), but naming containers as primitives would inflate the grammar. (ADR-0055 §Step 0.5 earning-test evaluated Encounter at primitive-layer and honestly found it fails verb-primitive earning-test; admission at pattern-layer respects the primitive-parsimony discipline.)
- **Cross-federation heterogeneity**: Federations span bioregional stewardship (human-primary), automated matchmaking (protocol-primary), personal-AI collaboration (mixed), and inter-federation compose-events (multi-org). A single pattern must hold the invariant structure while tolerating modality variance.
- **Co-presence mode coupling**: Federation-encounters are typically co-presence-requiring (synchronous attendance, shared-orientation-establishment, joint-situational-attention). This couples tightly to ADR-0064's co-presence-mode scope-conditioning on Field: federation-encounters instantiate the co-presence-requiring branch of Field-conditions.
- **Substitution risk**: If the pattern hardens into procedure-fetishism (checklist-conformity replaces coordination attention), the event hollows. Johar's *substitution-trap* (ADR-0048) applies: the pattern is a scaffolding for discipline, not a substitute for it.

## Pattern

### Composition

A federation-encounter is a coordination-event composed of four coordination-verbs firing within bounded Field-conditions. The composition is verbatim from ADR-0055 framing-note §3:

**Federation-encounter = Signal + Joint-commitment + Intent + Evidence within bounded Field-conditions**

Each composition element operates across three temporal phases (pre-event / in-event / post-event):

- **Signal** (invitation + in-event reframing + closing transmission). Pre-event: convening-notice to candidate participants. In-event: reframing, dissent, shared-observation, emergent-salience. Post-event: dispersal + handoff-to-external-channel.
- **Joint-commitment** (attendance-pledge + shared-orientation + coordination-artifact formation). Pre-event: multi-party attendance-pledge (each party's pledge references the others'). In-event: joint-attention to agenda-item / decision-point / shared-observation-context. Post-event: joint-commitments formed during the event become the event's primary coordination artifact.
- **Intent** (pre-event surfacing + in-event shaping + post-event emergence). Pre-event: participants surface what they want the encounter to accomplish. In-event: intents articulated, re-surfaced, compromised, discovered. Post-event: participants leave with changed or newly-formed intents shaped by what they learned.
- **Evidence** (in-event attestation + post-event capture). In-event: real-time observation / contribution / decision capture via recording, meeting-notes, or informal witness-signaling. Post-event: meeting-minutes, decision-records, agreement-documents — the durable artifact the event generates.

### Field-conditions (host substrate)

What distinguishes the encounter-hosted composition from general verb-firing is the **bounded temporal-spatial scope**:

- **Start-time + end-time** (temporal window).
- **Physical or virtual location** (spatial or virtual co-presence).
- **Rule-in-use scaffolding** (agenda, facilitation protocol, decision-rule) — per ADR-0046 operational-level rule-in-use scoped to the event.
- **Co-presence mode** — federation-encounters typically operate under ADR-0064's co-presence-requiring branch (synchronous attendance and mutual attention to a shared situation). Asynchronous federation-encounters exist at the margins (e.g., async protocol-version-adoption) but are less typical; when they occur, the pattern's *temporal window* expands and the *co-presence-establishment* element routes through common-ground signaling rather than synchronous attention.

### Removing any element collapses the pattern

The composition is first-class in the sense that removing any of {Signal, Joint-commitment, Intent, Evidence, bounded Field-conditions} collapses the pattern into a different coordination shape:

- Without Joint-commitment: broadcast (Signal alone) or ambient gathering (co-presence without shared orientation).
- Without Evidence: ephemeral conversation with no durable coordination artifact.
- Without Intent-surfacing: pure reception (no convergence on what the event is for).
- Without bounded Field-conditions: general verb-firing, not a distinct event-scope.

### What this pattern does NOT name

This pattern is *not* a new primitive, doctrine, mode, or property. It is a composition-pattern under ADR-0065's M4 sub-class framework. It does not rename any existing primitive. It does not supersede the derived glossary slug `encounter` (which anchors the general event-scope concept applicable wherever the 5-element composition fires, including 1:1 focus-sessions and coaching encounters); `federation-encounter` anchors the federation-scoped coordination-recipe specifically.

### Johar-native structured-encounter as discipline (not procedure)

Johar's *"structured encounter"* (johar-situational-truthing), *"encounter rules"* (johar-metacognition-stack Layer 10), and *"encounter engineering"* (johar-ecology-of-courage, johar-miss-engineered-city) describe the discipline participants bring *to* the pattern rather than additional pattern mechanics. The pattern enables discipline by naming the composition; discipline is what makes the composition coherent when fired. Procedural conformity without discipline is Johar's substitution-trap (ADR-0048). The pattern assumes discipline; it does not substitute for it.

See `docs/research/connections/canon-framing-encounter-as-composition.md` for extended articulation of discipline at framing-note layer (§4 Johar-native structured-encounter as discipline).

## Current Adopters / Related Implementations

Four independent instance-families carry the pattern in operation (N=4 per ADR-0068 β-comp earning-test under ADR-0064 honest-rigor cluster-counting discipline):

- **BKC / Octo bioregional federation** (Salish Sea cross-node bioregional stewardship). Quarterly federation meetings across 4 bioregional nodes. Octo as federation coordinator; BKC as federation field. Evidence: Johar-power-cannot-be-allocated bridge-note §*federated encounter events*; governance-memory pattern §Current Adopters (BKC canonical doc DAG at 4 bioregional nodes).
- **Poietic Match match-events** (matchmaking protocol-layer encounter). Mutual-match activation involving CommitmentBundle formation as joint-commitment paradigm case. Signal via MatchProposal notifications. Intent via pm:Intent declarations. Evidence via pm:TrustAttestation. Field-conditions via match-event window + bundle-scope rule-in-use. Evidence: pm:ADR-0005 / pm:ADR-0008 / pm:ADR-0014 §1a.
- **Darren-Workflow stand-ups and design-reviews** (personal-workflow + AI-collaborator coordination). Cross-person focus under shared agenda; Signal via stand-up-open / review-invitation; Joint-commitment via joint-attention to agenda; Intent via pre-stand-up surfacing; Evidence via stand-up notes and design-review decisions. Evidence: ADR-0055 §Context line 75.
- **Cross-federation compose-events** (inter-federation). Octo × BKC quarterly coordination; Spore × Jeff-Emmett-shop compose-events (e.g., 2026-04-23 Jeff call). Multi-org attendance-pledge; rule-in-use governed by hosting-protocol; follow-up Commitments typically drive the coordination artifact. Evidence: p2p-wiki-post-intake-synthesis bridge-note; operator meeting-notes.

All four instance-families instantiate all five composition elements; modality variance (in-person vs async, scheduled vs ad-hoc, human-primary vs protocol-primary, multi-org scale vs personal scale) is orthogonal to the composition structure.

## Related Patterns

- **Commitment pooling** — joint-commitments formed during a federation-encounter typically enter commitment-pooling for cross-federation coordination and fulfillment. Federation-encounter is the *site of formation*; commitment-pooling is the *site of coordination*.
- **Governance memory** — federation-encounter Evidence artifacts (decision-records, agreement-documents) are governed-docs entering the governance-memory spec-DAG. Evidence is what the federation-encounter *produces*; governance memory is how those products become computable coordination surface.
- **Intent publication and activation** — pre-event Intent surfacing in a federation-encounter instantiates intent-publication; in-event Intent shaping routes intents toward activation (commitment). Intent-publication is what the federation-encounter *metabolizes*.

See also ADR-0055 framing-note for the compositional decomposition rationale, Johar-native discipline articulation, and canonically-acknowledged residues (R-Enc-1 co-presence substrate-irreducibility; R-Enc-2 structured-encounter-as-event-discipline category-fit; R-Enc-3 protocol-version-adoption overlap with joint-commitment; R-Enc-4 pattern-library infrastructure gap — CLOSED via ADR-0065 + ADR-0068).
