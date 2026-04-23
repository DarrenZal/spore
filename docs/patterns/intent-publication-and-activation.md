---
doc_id: spore.intent-publication
doc_kind: pattern
status: active
depends_on:
  - spore.governance-artifacts
---

# Intent Publication and Activation

The bridge between vision and pooled commitments. Intents are pre-commitment coordination primitives.

## Context

A group has a shared vision and a roadmap, but nothing connects that direction to actual offers of labor, capital, or capacity. Vision documents articulate what matters. Roadmaps sequence what to build. But neither mechanism lets participants say "I can do X," "we need Y," or "under conditions Z, I would commit to W" -- and have those expressions be routable, matchable, and governable.

Without a structured intent layer, coordination happens through ad-hoc conversations, meeting action items, and informal promises that are invisible to the system.

## Problem

How do agents express what they want, what they can offer, and under what conditions -- before those expressions become binding commitments?

## Forces

- **Lightweight enough to publish freely**: If expressing an intent carries high overhead, people won't do it. Intents must be cheap to declare, revise, and withdraw.
- **Structured enough to match and route**: Free-text wishes are not actionable. Intents need enough structure for automated matching, scoring, and routing.
- **Contradictory intents must coexist**: Multiple agents may hold conflicting needs or competing offers. The system must tolerate contradiction without requiring premature resolution.
- **Declared and inferred**: Not all intents are explicitly stated. Some emerge from patterns of behavior, unmet needs, or gaps between desired and actual state.

## Pattern

### Vector framing

A **need** is a pull vector -- a declared or sensed gap. An **offer** is a push vector -- available capacity, resource, or capability. An **intent** is a declared or inferred directional signal rooted in care, need, offer, concern, or possibility. A **commitment** is a stabilized coupling of one or more vectors, adding weight and witness.

These are distinct stages: needs and offers are raw signals, intents give them direction and legibility, commitments bind them.

Declaring an intent is an act of caring — something matters enough to make it visible and routable. This axiological ground distinguishes intents from mere data signals.

### Declared vs inferred intents

Intents can be **explicitly published** ("I offer 40 hours of GIS mapping," "we need a grant writer for Q3") or **inferred from sensing** -- repeated requests in meeting transcripts, unmet tensions surfaced by retrospectives, resource flow patterns, or gaps between normative state (vision graph) and world state (sensor data).

Inferred intents connect to active inference: mismatch between what normative artifacts (vision, roadmap, active constraints) declare should be true and what sensors report is true creates **latent intent-pressure** -- a signal that something needs to move.

This pressure exists between two frontiers:

- The **normative frontier**: what the vision, roadmap, and active constraints require — the conditions that must hold for the desired future to be realized.
- The **epistemic frontier**: what current reality affords — the states that are reachable given what sensors and evidence currently report.

Intents are the active edges that try to bridge these two frontiers. They are not just offers and needs — they are the legible pressure between sensed reality and desired reality. This gives caring a structural form: to care is to sense the distance between what-is and what-matters, and to make that distance visible.

### Matching as composition

Matching is not binary (match/no-match). It is **vector composition** -- do these pushes and pulls compose into coherent flow? Routing and scoring compute multi-dimensional alignment across capacity, timing, geography, skill domain, and governance fit. A single need may partially match several offers; several needs may compose with a single offer.

### Activation

When governance approves alignment (checking against vision/roadmap constraints), an intent transitions to a **commitment** -- entering the commitment pooling pattern. Activation is the governance gate between expression and obligation.

### The legibility progression

Intent, promise, and commitment form a legibility progression — each stage makes intention more visible, more accountable, and more operative within a coordination scope:

- **Intent** = directional signal ("I want / I offer / I need / I would if")
- **Promise** = intent made legible enough to witness ("I say I will" — accountable form, but not yet accepted into scope)
- **Commitment** = promise accepted into a coordination scope ("this is now held, and others can rely on it")

The mechanism is **scope**. A commitment always has a scope. In a personal scope, declaration and acceptance can collapse into one holon — you commit to yourself and hold yourself accountable. In a shared scope, declaration comes from sovereignty and acceptance comes from the shared field. Commitment lives at their intersection.

"Binding" in this grammar means **scope-bound accountability**: within this scope, this is now held. Not coercive enforcement.

### Hypergraph representation

Intents are often multi-party and multi-condition. One intent may connect several actors, resources, timeframes, and conditions simultaneously. This requires **hypergraph representation**, not just binary edges -- a single intent-edge can connect an arbitrary set of nodes with typed roles.

## Current Adopters / Related Implementations

- **BKC commitment extraction pipeline**: Transcript analysis extracts intents from meeting recordings, routes them through matching and scoring, and surfaces them for governance approval. This is a precursor implementation, not a direct adoption of this pattern.

**Note**: This pattern is emerging. The vector framing and governance activation gate are design targets informed by existing practice but not yet implemented as a formal protocol.

## Related Patterns

- **Commitment pooling** -- where activated intents go after governance approval.
- **Constitutional artifacts** -- the governance surface that activation checks against.
