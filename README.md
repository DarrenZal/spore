# Spore

A pattern language, protocol family, and governance-memory layer for multi-agent coordination at every scale.

**Spore** is the project. **Agent Commons** is the protocol family it publishes.

## What This Is

Agent Commons defines patterns and protocols for how agents — humans, AIs, teams, organizations, federations — coordinate without surrendering sovereignty. The core thesis: coordination at every scale requires the same primitives, and they compose fractally.

### The Coordination Ecology

**Vision → Roadmap → Intent → Commitment → Evidence → Learning**

- Vision commitments orient (direction, values, constraints)
- Roadmaps translate vision into structured needs
- Intents signal (offers, needs, conditions — where plurality enters)
- Commitments bind (accepted, governed, pooled)
- Evidence validates (observations, attestations, fulfillment)
- Learning revises (update roadmap, refine patterns, adapt vision)

### Design Principles

- **Constitutional commitments** — provenance, forkability, pluralism, meaningful autonomy, authorized boundary crossing, reviewable authority, contestability
- **Structure and flow** — holarchy gives structure; mycelial exchange gives flow; patterns mediate between them
- **Dual representation** — every constitutional artifact exists as text (for humans) and graph projection (for machines)
- **Self-similarity** — the same artifact ecology recurs at every scale, from personal workflow to planetary federation
- **Common core, local variation** — thin shared protocols, thick local semantics, explicit translation, forkability as feature

## Documentation

```
docs/
├── project-vision.md                          # Root — what Spore is and why
├── README.md                                  # Docs map and repo taxonomy
├── roadmap.md                                 # Three tracks + plurality cross-cutting
├── foundations/
│   ├── relational-agency-and-holons.md        # Holonic agency theory
│   ├── mycelial-holarchy-architecture.md      # Dual-axis structural model
│   ├── mycorrhizal-federation-protocol.md     # Sovereign exchange rules
│   └── constitutional-artifacts-and-graph-projections.md  # Coordination ecology + 7 graph types
├── patterns/
│   ├── governance-memory.md                   # Spec-DAG: docs as constitutional memory
│   ├── intent-publication-and-activation.md   # Needs, offers, intents as vectors
│   ├── commitment-pooling.md                  # Pools as fields where vectors compose
│   └── federated-knowledge-exchange.md        # Sovereign nodes exchanging without centralizing
├── protocols/
│   └── README.md                              # Future formal protocol specs
└── governance/
    ├── agent-commons-meta-protocol.md         # Artifact taxonomy and DAG rules
    ├── project-bootstrap-spec.md              # Tier definitions and bootstrap
    ├── project-briefing-pattern.md            # Context assembly for agents
    └── adoption-guide.md                      # Step-by-step onboarding
```

Start with [project-vision.md](docs/project-vision.md), then follow the [docs map](docs/README.md).

## How Adoption Works

You don't restructure your project. You add coordination surfaces:

- **Frontmatter** on your docs → legible to the governance-memory pattern
- **A sensor node** on your knowledge garden → queryable by agents
- **Edge permissions** → declare what you share
- **Profile declarations** → state which patterns you implement

Adoption is incremental. Use one pattern without adopting the full stack.

## Spec DAG

Each document carries YAML frontmatter declaring `doc_id`, `doc_kind`, `status`, and `depends_on` edges, forming a DAG rooted at the project vision:

```
fg.project-vision (vision)
├── fg.relational-agency-and-holons (foundation)
│   ├── fg.mycelial-holarchy-architecture (architecture)
│   ├── fg.mycorrhizal-federation-protocol (architecture)
│   │   └── fg.federated-knowledge-exchange (pattern)
│   └── fg.constitutional-artifacts (foundation)
│       ├── fg.governance-memory (pattern)
│       ├── fg.intent-publication (pattern)
│       └── fg.commitment-pooling (pattern)
├── fg.forest-garden-meta-protocol (architecture)
│   ├── fg.project-bootstrap-spec (spec)
│   │   └── fg.adoption-guide (operations)
│   └── fg.project-briefing-pattern (pattern)
└── fg.roadmap (roadmap)
```

The `fg.*` namespace and `project:forest-garden` graph URI are stable identifiers from the project's original name.

## Ecosystem

Spore defines patterns. Others implement them.

- **[koi-processor](https://github.com/RegenAI/koi-processor)** — runtime substrate: knowledge graph, federation, sensors
- **darren-workflow** — personal workflow adopter (Tier 1)
- **salish-sea-dreaming** — creative/bioregional adopter (Tier 1)
- **BKC** — operational validation: 4 bioregional nodes, commitment pooling on Celo

## Status

Early stage. Working implementations at small scale across 4 projects. The pattern language and conventions are evolving.

## License

[Peer Production License](https://wiki.p2pfoundation.net/Peer_Production_License) (PPL) — a copyfair license derived from CC BY-NC-SA 3.0. Free for non-commercial use, cooperatives, and worker-owned collectives. See [LICENSE](LICENSE).
