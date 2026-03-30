---
doc_id: spore.project-bootstrap-spec
doc_kind: spec
status: active
depends_on:
  - spore.agent-commons-meta-protocol
---

# Project Bootstrap Spec

Operational definitions for registering a project in the Agent Commons project governance layer — what is required at each tier and how to get there.

## Tier 0: Seed Project

### Required Files

```
<project-root>/
  docs/
    project-vision.md      # Root spec document
    _meta/
      project.json         # Project configuration
```

### project-vision.md Frontmatter

```yaml
---
doc_id: <prefix>.project-vision
doc_kind: vision
status: active
depends_on: []
---
```

- `doc_id` must be `<project_id>.project-vision`
- `doc_kind` must be `vision`
- `depends_on` must be `[]` (vision is the root — it depends on nothing)

### project.json Fields

```json
{
  "project_id": "spore",
  "project_name": "Spore",
  "project_uri": "project:spore",
  "docs_root": "docs/",
  "repos": ["spore"],
  "tier": 0
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `project_id` | Yes | Namespace prefix used in doc_id namespacing (e.g., `spore`, `bkc`, `dw`) |
| `project_name` | Yes | Human-readable project name |
| `project_uri` | Yes | URI in knowledge graph (`project:<slug>`) |
| `docs_root` | Yes | Relative path to docs directory |
| `repos` | Yes | List of repository names associated with this project |
| `tier` | Yes | Current adoption tier (0, 1, or 2) |
| `roadmap_path` | No | Path to semantic-roadmap.json (Tier 2) |
| `code_surfaces_path` | No | Path to code-surfaces.json (Tier 2) |

### Bootstrap Commands

```bash
# From koi-processor directory, with environment configured:

# Validate (always dry-run first)
python3 scripts/ingest_spec_dag.py \
  --project-config <path>/docs/_meta/project.json \
  --dry-run

# Apply
python3 scripts/ingest_spec_dag.py \
  --project-config <path>/docs/_meta/project.json \
  --apply
```

### What Gets Created

- 1 `Project` entity (or updated if it already exists) with all `project.json` fields persisted to metadata JSONB
- 1 `SpecDoc` entity for the vision document
- 1 `governs` relationship (vision SpecDoc → Project)

### Verification

```bash
curl -s "localhost:8351/project/briefing?project=<project_id>" | python3 -m json.tool
```

Expected: project name, URI, tier, spec_hierarchy with single vision root.

## Tier 1: Structured Project

### Additional Requirements

- 2-5 additional documents in directories matching their `doc_kind` (e.g., `docs/foundations/`, `docs/protocols/`, `docs/patterns/`)
- Each document has valid SpecDoc frontmatter with `doc_id`, `doc_kind`, `status`, `depends_on`
- All `doc_id` values share the project's `project_id` prefix
- `depends_on` references resolve to existing docs within the project (or valid cross-project references)
- DAG is acyclic (no circular dependencies)
- Single vision root (exactly one doc with `depends_on: []`)

### Graduation Checklist

1. Create foundation/architecture docs under `docs/foundations/`
2. Update frontmatter with proper `depends_on` references
3. Run `ingest_spec_dag.py --dry-run` — expect 0 validation errors
4. Run `ingest_spec_dag.py --apply`
5. Update `tier` to `1` in `project.json`
6. Re-run ingest to update the Project entity's tier metadata
7. Verify: `GET /project/briefing` shows multi-node spec hierarchy

## Tier 2: Full Project

### Additional Requirements

- Operational specs and/or patterns that build on the foundations layer
- Optional: `docs/_meta/semantic-roadmap.json` with task sequencing
- Optional: `docs/_meta/code-surfaces.json` mapping specs to code locations
- Full DAG with all dependencies validated

### Graduation Checklist

1. Add documents under the directory matching their `doc_kind` (e.g., `docs/foundations/`, `docs/protocols/`, `docs/patterns/`)
2. Optionally create `semantic-roadmap.json` and `code-surfaces.json`
3. Run full validation and ingest cycle
4. Update `tier` to `2` in `project.json`
5. Re-run ingest
6. Verify: briefing shows complete hierarchy with multiple levels

## Example Adopters

The governance layer is already used by multiple kinds of projects, including:

- Spore itself
- Bioregional Knowledge Commons
- Personal workflow projects and creative/bioregional projects at Tier 0-1
