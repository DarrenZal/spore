# Spore

An infrastructure for collective agency — a common grammar for plural, sovereign coordination across scales and scopes.
Spore develops and publishes **Agent Commons**: a pattern language, protocol family, and governance-memory layer that enables coordination and coherence without surrendering sovereignty.

**Spore** is the project. **Agent Commons** is the protocol family it publishes.

Why "Spore"? A spore is portable, generative, and context-sensitive: it moves through larger living networks, lands in a place, and unfolds locally. Spore follows the same logic — a shared coordination grammar that can be adopted across projects, grow in different forms, and remain interoperable without requiring centralization.

## What This Is

Agent Commons defines patterns and protocols for how agents — humans, AIs, teams, organizations, federations — coordinate without surrendering sovereignty.

The "commons" here is the shared coordination surface: memory, claims, commitments, discourse, and protocols stewarded in common rather than owned by a central platform.

The core thesis is that coordination at every scale and scope requires the same primitives, and that they compose fractally. The grammar operates across the normative commitments that shape how agents see, value, know, and act — ontological, axiological, epistemological, practical. The goal is collective agency: the situated capacity to sense, decide, and act meaningfully within one's relational context.

### The Coordination Ecology

**Vision → Roadmap → Intent → Commitment → Evidence → Learning**

- Vision commitments orient (direction, values, constraints)
- Roadmaps translate vision into structured needs
- Intents signal (offers, needs, conditions — where plurality enters)
- Commitments hold (accepted, governed, pooled; scope-bound accountability)
- Evidence validates (observations, attestations, fulfillment)
- Learning revises (update roadmap, refine patterns, adapt vision — closing the loop)

Between intent and commitment, promises make intention legible enough to witness and accept into scope.

Intent is the primitive directional signal. Visions, roadmaps, and specs are durable artifacts that orient, translate, and stabilize direction within shared memory.

### Design Principles

- **Constitutional commitments** — provenance, forkability, pluralism, meaningful autonomy, authorized boundary crossing, reviewable authority, contestability. These are chosen design commitments, not eternal truths — conditions of relational freedom.
- **Containment and overlap** — holonic nesting gives containment and nested integrity; lateral networks give overlap and cross-cutting reach; patterns mediate between them. The result is a semilattice, not a tree.
- **Dual representation** — every constitutional artifact exists as text (for humans) and graph projection (for machines)
- **Self-similarity** — the same artifact ecology recurs at every scale, from personal workflow to planetary federation
- **Common core, local variation** — thin shared protocols, thick local semantics, explicit translation, forkability as feature

## Documentation

```
docs/
├── project-vision.md                          # Root — what Spore is and why
├── README.md                                  # Docs map and repo taxonomy
├── roadmap.md                                 # Five tracks + plurality cross-cutting
├── foundations/
│   ├── relational-agency-and-holons.md        # Holonic agency theory
│   ├── holonic-network-architecture.md        # Dual-axis structural model
│   ├── mycorrhizal-federation-protocol.md     # Sovereign exchange rules
│   ├── constitutional-artifacts-and-graph-projections.md  # Coordination ecology + graph projections
│   └── spore-instance-model.md              # How Spore materializes (canon, node, agent, site)
├── patterns/
│   ├── governance-memory.md                   # Spec-DAG: docs as constitutional memory
│   ├── intent-publication-and-activation.md   # Needs, offers, intents as vectors
│   ├── commitment-pooling.md                  # Pools as fields where vectors compose
│   ├── discourse-as-governance.md             # Discourse as the self-reflective governance layer
│   └── federated-knowledge-exchange.md        # Sovereign nodes exchanging without centralizing
├── protocols/
│   ├── store-and-forward-relay.md             # Pair-level relay and forwarded exchange
│   ├── claims-evidence-attestation.md         # Epistemic anchoring and grounding
│   └── README.md                              # Protocol overview and candidates
├── research/connections/
│   ├── hyperstition.md                        # Bridge: fictions that make themselves real
│   ├── hyperstition-markets.md                # Bridge: collective-belief markets ↔ commitment pooling
│   └── constructive-hyperstition.md           # Bridge: constructive/extractive criteria
├── positioning/
│   └── hyperstition-as-coordination.md        # Spore as grammar for constructive hyperstitions
└── governance/
    ├── agent-commons-meta-protocol.md         # Artifact taxonomy and DAG rules
    ├── project-bootstrap-spec.md              # Tier definitions and bootstrap
    ├── project-briefing-pattern.md            # Context assembly for agents
    └── adoption-guide.md                      # Step-by-step onboarding

docs/foundations/lexicon/
└── intent-pressure.md                         # Canonical term: normative-epistemic gap force

docs/synthesis/
├── coordination-grammar.md                    # Working synthesis of the grammar
└── decision-memo.md                           # Promotion decisions and synthesis findings
```

If you're new, start with [project-vision.md](docs/project-vision.md), then [coordination-grammar.md](docs/synthesis/coordination-grammar.md), then follow the [docs map](docs/README.md).

### Learning Membrane

Spore learns from the wider coordination ecosystem through a learning membrane — a comparative intake process that ingests external frameworks, translates them into bridge notes and bilateral claims, and selectively promotes what proves useful into canon. The membrane exercises the same operations (expose, translate, authorize, contest, revoke) that govern all boundary-crossing in the grammar. Bridge notes live in `docs/research/connections/`; positioning articles live in `docs/positioning/`.

## How Adoption Works

You do not migrate into Spore as a platform. You let your project speak more of the grammar by adding coordination surfaces:

- **Frontmatter** on your docs → legible to the governance-memory pattern
- **A sensor node** on your knowledge garden → queryable by agents
- **Edge permissions** → declare what you share
- **Profile declarations** → state which patterns you implement

Adoption is incremental and reversible. A project can use one pattern without adopting the full stack. Spore is designed for coexistence with legacy systems, not total rupture.

## Governance Projection (Spec DAG)

Each frontmattered document participates in a larger coordination graph. One projection of that graph is the Spec DAG: an acyclic view of how visions, foundations, patterns, specs, and operations currently constrain and derive from one another.

The DAG does not mean that a vision, a spec, or the world itself must be hierarchical or acyclic. A vision may describe meshworks, cycles, hypergraphs, feedback loops, and flows. A spec may define recursive or multi-party structures. The DAG exists for a narrower reason: to keep current grounding, dependency, and revision paths legible at a given moment.

The current governance projection is:

```
spore.project-vision (vision)
├── spore.relational-agency-and-holons (foundation)
│   ├── spore.mycelial-holarchy-architecture (architecture)
│   ├── spore.mycorrhizal-federation-protocol (architecture)
│   │   ├── spore.federated-knowledge-exchange (pattern)
│   │   └── spore.instance-model (architecture)
│   └── spore.constitutional-artifacts (foundation)
│       ├── spore.governance-memory (pattern)
│       ├── spore.intent-publication (pattern)
│       └── spore.commitment-pooling (pattern)
├── spore.agent-commons-meta-protocol (architecture)
│   ├── spore.project-bootstrap-spec (spec)
│   │   └── spore.adoption-guide (operations)
│   └── spore.project-briefing-pattern (pattern)
└── spore.roadmap (roadmap)
```

Human-facing names and graph identifiers now align directly: the project is `Spore`, the doc namespace is `spore.*`, and the project URI is `project:spore`.

## Ecosystem

Spore defines a grammar and publishes patterns and protocols. Others adopt and implement them.

- **[koi-processor](https://github.com/RegenAI/koi-processor)** — node substrate: knowledge graph, entity resolution, federation, sensors
- **[BKC / Octo](https://github.com/BioregionalKnowledgeCommons/Octo)** — operational instance family: BKC canon + 4 federated nodes + Octo agent + Quartz sites

## Status

Early stage. Working implementations at small scale across 4 projects. The pattern language and conventions are evolving.

## License

[Peer Production License](https://wiki.p2pfoundation.net/Peer_Production_License) (PPL) — a copyfair license derived from CC BY-NC-SA 3.0. Free for non-commercial use, cooperatives, and worker-owned collectives. See [LICENSE](LICENSE).
