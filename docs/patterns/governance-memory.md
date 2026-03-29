---
doc_id: spore.governance-memory
doc_kind: pattern
status: active
depends_on:
  - spore.agent-commons-meta-protocol
  - spore.constitutional-artifacts
---

# Governance Memory

Documents as machine-readable constitutional memory -- identity-bearing, constraint-carrying, composable across projects. The spec-DAG pattern.

## Context

Projects accumulate documentation -- architecture decisions, norms, vision statements, design patterns. Over time this documentation drifts, contradicts itself, and becomes invisible to agents. Humans forget what was decided and why. Automated tools cannot reason about project intent because it lives in unstructured prose scattered across wikis, READMEs, and chat logs.

The problem is acute in multi-project ecosystems where decisions in one project constrain or enable work in others. Without a shared memory surface, coordination degrades to repeated conversations and rediscovery.

## Problem

How do you make project intent, architecture, norms, and patterns into a computable coordination surface?

## Forces

- **Human-readable AND machine-readable**: Documents must remain useful to humans reading them directly while also being parseable by agents and tooling.
- **Composability across projects**: A pattern document in one project must be referenceable from another project's specs without copy-paste duplication.
- **Validateability**: It must be possible to check whether a document's declared dependencies exist, whether the DAG is acyclic, and whether cross-project references resolve against live state.
- **Incremental adoption**: Projects cannot be required to produce a complete specification before getting value. The system must work with one document and scale to dozens.

## Pattern

Each canonical document carries YAML frontmatter declaring:

- **`doc_id`**: A stable, globally-scoped identifier (e.g., `spore.governance-memory`).
- **`doc_kind`**: The document's role -- `vision`, `foundation`, `pattern`, `roadmap`, `guide`, `spec`.
- **`status`**: Lifecycle state -- `draft`, `active`, `deprecated`.
- **`depends_on`**: A list of `doc_id` references forming directed edges.

Together these form a **directed acyclic graph (DAG)** rooted at the project vision. The vision depends on nothing; every other document traces a dependency path back to the vision (directly or transitively).

An **ingestion script** (`ingest_spec_dag.py`) reads the filesystem, parses frontmatter, upserts each document into a knowledge graph as a `SpecDoc` entity with typed `DEPENDS_ON` relationships, and validates:

- No cycles in the dependency graph.
- All `depends_on` targets resolve to existing documents (local or cross-project).
- Cross-project references are checked against live knowledge graph state, not just local files.

**Tiered adoption** lets projects grow incrementally:

| Tier | Requirements |
|------|-------------|
| **Tier 0** | Vision doc + `project.json` declaring the project in the graph |
| **Tier 1** | 2-5 additional docs with valid DAG edges |
| **Tier 2** | Full specs + roadmap, all dependencies validated |

This means a project can start with a single vision document and progressively formalize its governance memory as the project matures.

## Current Adopters / Related Implementations

- **Spore / Agent Commons** (self-hosting): The pattern language itself is governed by this pattern -- spec DAG with cross-project dependency validation.
- **darren-workflow**: Personal workflow plugin with 4 canonicalized docs in the spec DAG.
- **salish-sea-dreaming**: Creative/bioregional project using Tier 1 adoption.
- **BKC canonical doc DAG**: Parallel validation surface operating across 4 bioregional nodes.

## Related Patterns

- **Constitutional artifacts and graph projections** -- the foundation layer that governance memory builds on.
- **Federated knowledge exchange** -- how governance memory surfaces compose across sovereign nodes.
