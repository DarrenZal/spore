---
doc_id: spore.project-briefing-spec
doc_kind: spec
status: active
depends_on:
  - spore.agent-commons-meta-protocol
---

# Project Briefing Spec

Operational definition for assembling project context from a knowledge graph via a single API endpoint, extracted from the working Agent Commons governance layer.

## Problem

Agents (human or AI) need project context before they can do useful work — what the project is, where it stands, what's been decided, what's open. This context is scattered across spec documents, task registries, session logs, and code repositories. Without a single query point, agents either work without context (producing drift) or spend significant time manually assembling it.

## Forces

- **Multiple interfaces**: Context is needed from Claude Code sessions, Telegram (Dobby), MCP clients, and direct API calls
- **Varying detail needs**: Sometimes you need the full spec hierarchy; sometimes just "what tier is this project?"
- **Freshness**: Project state changes constantly — cached summaries go stale
- **Graceful degradation**: Not every project has tasks, sessions, or a full spec DAG — the briefing must work at every tier
- **Directory independence**: Agents may not be in the project's directory (Dobby has no filesystem context at all)

## Solution

A single API endpoint that assembles project context by querying the knowledge graph, returning a structured response that any interface can format for its medium.

### Structure

```
GET /project/briefing?project=<name-or-id>
```

**Response shape:**
```json
{
  "project": { "name": "...", "uri": "...", "tier": 0 },
  "spec_hierarchy": {
    "root": { "doc_id": "...", "doc_kind": "vision", ... },
    "nodes": [...],
    "edges": [...]
  },
  "active_tasks": [...],
  "recent_sessions": null
}
```

### Resolution Strategy

The endpoint resolves the project argument through multiple tiers:
1. Direct URI match (`project:spore`)
2. Metadata field match (`project_id = "spore"`)
3. Normalized name match (`spore` → fuzzy match)

This allows callers to use whatever identifier is natural: short IDs for skills, full URIs for programmatic access.

### Spec Hierarchy Assembly

1. Find the project's root SpecDoc via `governs` relationship
2. Walk incoming `depends_on` edges from the root (BFS)
3. Return nodes and edges as a graph, with the root identified separately

### Graceful Degradation

| Condition | Behavior |
|-----------|----------|
| Project not found | 404 with helpful message |
| No spec DAG | `spec_hierarchy: null` |
| No tasks | `active_tasks: []` |
| Session search unavailable | `recent_sessions: null` |

### Interface Layer

Each consumer formats the briefing for its medium:

| Interface | Implementation | Format |
|-----------|----------------|--------|
| Claude Code | `/project-context` skill | Markdown with tree diagrams, task tables |
| Dobby (Telegram) | `project_briefing` MCP tool | JSON (MCP client formats) |
| Direct API | `curl` / programmatic | Raw JSON |

## Known Uses

- **Bioregional Knowledge Commons**: larger governance graph with multiple levels
- **Agent Commons**: umbrella project using its own governance layer
- Personal workflow projects consuming the governance layer

## Resulting Context

After applying this pattern:
- Any agent can get oriented in ~1 API call
- Project state is always fresh (queries the graph, no caching)
- New projects automatically become queryable after a 2-minute bootstrap
- The skill layer adds natural language access on top of the structured API

## Related Patterns

- **Doc-Check Pattern**: Validates spec dependencies when a document changes (downstream impact analysis)
- **Spec DAG Ingestion Pattern**: How documents with frontmatter become graph entities
- **Entity Resolution Pattern**: The multi-tier resolution strategy used to find the project entity
