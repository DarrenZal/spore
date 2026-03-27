# Agent Commons

A governance framework for human and AI collaboration across projects, built on spec-DAG hierarchies and federated knowledge graphs.

## What This Is

Agent Commons defines patterns for how projects organize, validate, and compose their canonical documentation — from vision statements down to operational guides. It combines two layers:

- **Umbrella / System Layer** — the broader vision for multi-scale coordination: relational agency, holonic structure, and mycorrhizal federation across sovereign nodes
- **Project Governance Layer** — the concrete spec-DAG tooling that operationalizes governance: frontmatter conventions, dependency validation, tiered adoption, and project briefings

## Documentation

All canonical docs live under `docs/`:

```
docs/
├── project-vision.md                          # Root — why Agent Commons exists
├── README.md                                  # Docs map and reading order
├── foundations/
│   ├── relational-agency-and-holons.md        # Theory of holonic agency
│   ├── mycelial-holarchy-architecture.md      # Dual-axis structural model
│   └── mycorrhizal-federation-protocol.md     # Sovereign exchange rules
└── governance/
    ├── agent-commons-meta-protocol.md         # Artifact taxonomy and DAG rules
    ├── project-bootstrap-spec.md              # Tier definitions and bootstrap
    ├── project-briefing-pattern.md            # Context assembly pattern
    └── adoption-guide.md                      # Step-by-step onboarding
```

Start with [project-vision.md](docs/project-vision.md), then follow the [docs map](docs/README.md).

## Spec DAG

Each document carries YAML frontmatter declaring its `doc_id`, `doc_kind`, `status`, and `depends_on` edges. Together these form a directed acyclic graph rooted at the project vision:

```
fg.project-vision (vision)
├── fg.relational-agency-and-holons (foundation)
│   ├── fg.mycelial-holarchy-architecture (architecture)
│   └── fg.mycorrhizal-federation-protocol (architecture)
└── fg.forest-garden-meta-protocol (architecture)
    ├── fg.project-bootstrap-spec (spec)
    │   └── fg.adoption-guide (operations)
    └── fg.project-briefing-pattern (pattern)
```

The `fg.*` namespace and `project:forest-garden` graph URI are stable identifiers from the project's original repository name.

## Ecosystem

Agent Commons governance is adopted by:

- **[koi-processor](https://github.com/RegenAI/koi-processor)** — runtime substrate: ingestion, knowledge graph, project briefing API
- **darren-workflow** — tooling adopter (Claude Code plugin, Tier 1)
- **salish-sea-dreaming** — creative/bioregional project adopter (Tier 1)

## Runtime

The governance layer is designed to work with [koi-processor](https://github.com/RegenAI/koi-processor), which provides:

- Spec DAG ingestion (`ingest_spec_dag.py`)
- Project briefing API (`/project/briefing`)
- Cross-project dependency validation
- Entity resolution and knowledge graph storage

See the [adoption guide](docs/governance/adoption-guide.md) for setup instructions. Commands in the governance docs assume a local koi-processor installation — see that repository for deployment details.

## Status

Early stage. The framework is in active use across three projects but the API and conventions are still evolving.

## License

[Peer Production License](https://wiki.p2pfoundation.net/Peer_Production_License) (PPL) — a copyfair license derived from CC BY-NC-SA 3.0. Free for non-commercial use, cooperatives, and worker-owned collectives. See [LICENSE](LICENSE).
