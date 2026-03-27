---
doc_id: fg.adoption-guide
doc_kind: operations
status: active
depends_on:
  - fg.project-bootstrap-spec
---

# Adoption Guide

How to register a new project in the Agent Commons project governance layer and grow it from Tier 0 to Tier 1.

## Prerequisites

> **Note:** Commands below assume a local [koi-processor](https://github.com/RegenAI/koi-processor) installation. See that repository for setup and deployment details.

- PostgreSQL database with koi-processor schema applied
- `koi-processor` repository cloned with Python venv active
- koi-processor API running (default: `localhost:8351`)
- Your project repository with a `docs/` directory

## Step 1: Create a Tier 0 Scaffold

Every governed project needs two files to start:

### `docs/_meta/project.json`

```json
{
  "project_id": "myproj",
  "project_name": "My Project",
  "project_uri": "project:my-project",
  "docs_root": "docs/",
  "repos": ["my-project"],
  "tier": 0
}
```

- `project_id` is the prefix for all doc_ids (e.g., `myproj.project-vision`)
- `project_uri` is the entity URI in the knowledge graph
- `docs_root` is relative to the repo root

### `docs/project-vision.md`

```markdown
---
doc_id: myproj.project-vision
doc_kind: vision
status: active
depends_on: []
---

# My Project Vision

What this project is and why it exists.
```

This is the root of your spec DAG. Every project needs exactly one vision doc with `depends_on: []`.

## Step 2: Validate

Run the ingest script in dry-run mode to check your DAG before writing to the database:

```bash
cd ~/projects/RegenAI/koi-processor
source venv/bin/activate
set -a && source config/personal.env && set +a
python3 scripts/ingest_spec_dag.py \
  --project-config /path/to/your/docs/_meta/project.json \
  --dry-run
```

You should see:

```
INFO: Found 1 frontmattered docs, 0 unclassified
INFO: Validation passed
INFO: [DRY RUN] Would upsert spec:myproj.project-vision (vision)
```

Fix any errors before proceeding.

## Step 3: Apply

Write the spec DAG to the knowledge graph:

```bash
python3 scripts/ingest_spec_dag.py \
  --project-config /path/to/your/docs/_meta/project.json \
  --apply
```

## Step 4: Verify

Check that your project appears in the API:

```bash
# List governed projects
curl -s localhost:8351/project/projects | python3 -m json.tool

# Get your project briefing
curl -s "localhost:8351/project/briefing?project=myproj" | python3 -m json.tool
```

Your project should appear in the projects list with `tier: 0` and a single-node spec hierarchy.

## Growing to Tier 1

Tier 1 requires a structured DAG with foundation and spec documents. Add documents following the dependency pattern:

```
myproj.project-vision [vision]
  myproj.core-architecture [architecture]
    myproj.api-spec [spec]
  myproj.data-model [foundation]
```

### Adding a new document

1. Create the markdown file with proper frontmatter:

```markdown
---
doc_id: myproj.core-architecture
doc_kind: architecture
status: active
depends_on:
  - myproj.project-vision
---

# Core Architecture

Architecture decisions and patterns.
```

2. Re-run ingest to register the new document:

```bash
python3 scripts/ingest_spec_dag.py \
  --project-config /path/to/your/docs/_meta/project.json \
  --apply
```

3. Update `project.json` to reflect the new tier:

```json
{
  "tier": 1
}
```

### Valid `doc_kind` values

`vision`, `foundation`, `architecture`, `spec`, `operations`, `research`, `positioning`, `pattern`, `roadmap`

## Adding Cross-Project Dependencies

Your specs can depend on specs from other governed projects. Use the full `project_id.doc_id` format:

```yaml
depends_on:
  - myproj.project-vision
  - fg.project-bootstrap-spec    # cross-project dependency
```

The ingest script validates that cross-project targets exist in the knowledge graph before accepting them.

## Using doc-check

After ingesting, validate your DAG and check for impact:

```
/doc-check validate --project myproj
/doc-check hierarchy --project myproj
/doc-check impact myproj.core-architecture
```

## Checking Reverse Dependencies

To see what specs from other projects depend on yours:

```bash
curl -s "localhost:8351/graph/neighborhood/spec:myproj.project-vision?direction=incoming&predicate=depends_on&max_depth=2" \
  | python3 -m json.tool
```

This uses the graph neighborhood endpoint to find all specs (from any project) that depend on the given spec.
