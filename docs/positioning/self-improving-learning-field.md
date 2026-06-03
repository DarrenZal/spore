---
doc_id: spore.positioning.self-improving-learning-field
doc_kind: positioning
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.positioning.agents-and-canons
  - spore.positioning.agentic-bioregionalism
date: 2026-06-02
author: darren-zal
published_at: null
---

# The Self-Improving Learning Field

Spore's canon is not a static pile of documents. It is a **learning field**: a
governed corpus (canon + foundations + connection notes) that metabolizes
outside work into itself through a disciplined intake membrane, and that has, as
of mid-2026, become **operational along three loops** — it can be *queried*,
it can *route* new material to the right place, and it *improves its own intake
process* under adversarial verification.

This document explains the three loops, why they matter, and — honestly — where
each piece of machinery actually lives across the stack (Spore canon, the
`darren-workflow` tooling, and the `koi-processor` knowledge substrate). It is a
companion to [agents-and-canons](agents-and-canons.md) (canons as
AI-navigable coordination artifacts) and to the intake method itself
(`docs/research/planning/learning-field-intake-protocol.md`, "protocol v4").

> **Scope note.** The *concept* and *method* are Spore canon; the *substrate*
> (knowledge-graph projection) lives in `koi-processor`; the *agents and routing
> config* live in `darren-workflow`. This doc names which is which rather than
> implying Spore owns all three.

## Background: the learning membrane

Spore's project vision describes a **learning membrane** — the mechanism by
which Spore takes in external work (papers, wikis, sibling canons, a
collaborator's framework) and either lets it pass through as a *connection note*
(source-specific, descriptive) or, when it earns admission, metabolizes it into
*canon* (a foundation doc, doctrine, pattern, or vocabulary slug via an ADR).
The intake protocol governs that membrane: two-phase intake, frozen vocabulary,
R-claim earning-tests, opposition notes, honest-rigor cluster-counting.

A "learning field" is what you get once that membrane has run for a while: a
large, cross-linked corpus of canon and connection notes — *and* a projection of
that corpus into a queryable knowledge graph. The three loops below are what make
the field **self-querying, self-routing, and self-improving**.

## Loop 1 — Self-querying: ask the field

The corpus is projected into a knowledge graph so it can answer questions about
itself, rather than only being read file-by-file.

- **1a — bridge-note projection.** `koi-processor`'s `project_bridge_notes.py`
  reads connection notes' Claim Registers (C-claims and R-claims with their
  RID/page anchors) and projects them into the KG as grounded, citable facts and
  entities.
- **1b — unified document ingest.** `koi-processor`'s `/documents/ingest`
  endpoint takes an arbitrary governed doc and extracts facts + entities into the
  same graph (complementary to 1a's claim-level projection).

The payoff: `unified_search` (and the entity/fact tools) answer "what does the
canon say about X / who authored Y / which notes engage concept Z" with grounded,
anchored results. The field stops being a pile of markdown and becomes
**queryable substrate** an agent or a person can interrogate.

## Loop 2 — Self-routing: route intake to the right place

When new outside work arrives, the field proposes *where* it belongs and *how*
it should land — instead of that being unwritten tribal knowledge.

This is **§13 of the intake protocol** (cross-repo propagation topology), now
also available in **machine-consultable** form:

- The topology classifies each peer repo by its relationship to Spore: **self**
  (Spore — full ADR ceremony), **peer-instance-family** (BKC, bregion — close a
  gap via a *bridge note at Spore*, read-time), **downstream-aligned** (IC, PM —
  propagate via a *Wave-N+1 alignment ADR*, write-time).
- `darren-workflow/config/repo-instances.yaml` encodes that topology; the pure
  `config/route_topology.py` `route(repo_instances, admission_layer)` helper maps
  an admission-layer (`foundation-doc` / `canon-doctrine` / `positioning` /
  `connection` / `connection-peer-relevant` / `mechanical`) to a per-repo
  mechanism (`bridge-note` / `alignment-adr` / `awareness-only` / `skip`).
- The `comparative-intake` skill's **Step 6.5 routing-consult** surfaces the
  suggestion during intake. It is **suggestion-mode, operator-confirmed** — the
  prose §13 stays the source of truth; the yaml is pinned to it by
  `darren-workflow/agents/routing-coverage/`.

The payoff: routing decisions ("this belongs at BKC as a bridge note, not as a
Spore ADR") are proposed mechanically and consistently, reducing the
cross-repo-citation-direction mistakes that the canon work has repeatedly caught.

## Loop 3 — Self-improving: the intake process audits itself

The field doesn't just grow — it grows *rigorously*. Every intake wave and every
"done" verdict runs through adversarial verification, and the parts of that
verification that **cannot be self-validated** are institutionalized as gates.

- **Author → verify pipeline.** Large intakes run one orchestrated wave at a
  time, each fanning out an **author → adversarial-skeptic-verify** pipeline. The
  verifier defaults to *fail* and re-reads each file on disk to refute wrong or
  missing citations, bad `depends_on:` usage, unverified slugs, and admission
  leakage (protocol §4a).
- **§4f — the verifier's coverage is itself tested.** A deliberately-broken
  fixture suite (one fixture per checklist item, plus a clean control) with a
  fixed-literal non-vacuous guard *negative-controls the tester* — proving the
  skeptic actually catches each violation class rather than rubber-stamping.
- **§15a — holistic-read sign-off gate (blocking).** Before a multi-phase arc is
  declared "done," a human/holistic read can **overturn** the verdict. This
  operationalizes the one judgment adversarial verification can't make about
  itself: the zero-pressure "is this actually complete" call.
- **§15b — skeptic-of-skeptics audit.** A meta-auditor refutes *over-flagging*
  (false "missing"/"incomplete" claims) and enforces
  `disposition-label ≠ deliverable-spec`, so a completeness pass can't pass by
  inventing phantom gaps.

These run as registered subagents — `darren-workflow:skeptic`,
`:skeptic-of-skeptics`, `:ground-truth-auditor` — available in both Claude Code
(native agents) and Codex (transpiled TOML subagents), so the same verification
discipline is reusable across tools.

The payoff: what lands in the field was adversarially verified; completeness
claims are themselves audited; and the two judgments that *can't* be
self-validated are explicit, blocking gates rather than wishful thinking.

## Why it matters — the loops compose

Individually each loop is useful; together they close a circle:

1. **Self-querying** makes the field answerable.
2. **Self-routing** makes new material land in the right repo, the right way.
3. **Self-improving** makes what lands trustworthy.

So the "learning membrane" of the project vision is now an operational system:
Spore can *ask itself* what it knows, *place* incoming work correctly, and
*trust* that placement because it was verified — and the verification machinery
is itself tested and audited. That is what "self-improving learning field" names.

## Where the machinery lives (honest cross-stack map)

| Loop | Lives in | Concrete artifacts |
|---|---|---|
| Self-querying | `koi-processor` | `project_bridge_notes.py` (1a claim projection); `/documents/ingest` (1b doc → facts+entities); `unified_search` over the result |
| Self-routing | Spore canon + `darren-workflow` | protocol **§13** topology; `config/repo-instances.yaml`; `config/route_topology.py` `route()`; `comparative-intake` Step 6.5; `agents/routing-coverage/` |
| Self-improving | Spore canon + `darren-workflow` | protocol **§4a/§4f/§15/§15a/§15b**; `skeptic` / `skeptic-of-skeptics` / `ground-truth-auditor` subagents; the `skeptic-coverage/` fixture suite |

## Status and honest limits

- The three loops are **operational**, not aspirational — they have run on real
  intake arcs (e.g. the Sahely corpus program).
- **Routing is suggestion-mode**, operator-confirmed — it proposes, it does not
  auto-mutate repos.
- The protocol's **§10 automated feedback loop is explicitly "not yet
  implemented"**: the field improves its *process* (the protocol, the verifiers)
  through deliberate revision, not yet through an autonomous self-tuning loop.
- The substrate (KG projection) and the agents/routing config live **outside**
  the Spore repo; this doc is the conceptual home, not the implementation owner.

## Pointers

- Method: `docs/research/planning/learning-field-intake-protocol.md` (protocol v4 — §4f, §13, §15a/§15b)
- Canons as AI-navigable artifacts: [agents-and-canons](agents-and-canons.md)
- Project identity: [project-vision](../project-vision.md)
- Routing config + verifier agents: `darren-workflow/config/`, `darren-workflow/agents/`
- KG projection substrate: `koi-processor` (`project_bridge_notes.py`, `/documents/ingest`)
