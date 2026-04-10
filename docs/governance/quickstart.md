---
doc_id: spore.quickstart
doc_kind: guidance
status: draft
depends_on:
  - spore.agent-commons-meta-protocol
---

# Quickstart: Governed Documentation in 15 Minutes

Add structured governance to your project's documentation using the Agent Commons spec DAG pattern.

For the full governance model — artifact taxonomy, dependency semantics, conformance tiers, namespacing, and lifecycle — see the [Agent Commons Meta-Protocol](./agent-commons-meta-protocol.md). This quickstart covers the minimum you need to get started.

## 1. Add project metadata

Create `docs/_meta/project.json`:

```json
{
  "project_id": "your-project",
  "project_name": "Your Project",
  "docs_root": "docs/"
}
```

The `project_id` becomes the namespace prefix for all your doc IDs (e.g., `your-project.vision`).

## 2. Add frontmatter to your docs

Every governed document needs YAML frontmatter with four fields:

```yaml
---
doc_id: your-project.vision
doc_kind: vision
status: active
depends_on: []
---
```

| Field | Required | Values |
|:------|:---------|:-------|
| `doc_id` | Yes | `{project_id}.{slug}` — unique within the repo |
| `doc_kind` | Yes | `vision`, `architecture`, `foundations`, `spec`, `protocol`, `guidance`, `research`, `operations` |
| `status` | Yes | `draft`, `active`, `deprecated`, `superseded` |
| `depends_on` | Yes | List of doc_ids this doc depends on. `[]` for root docs. |

If `status` is `superseded`, add `superseded_by:` with a repo-relative path, cross-repo doc_id, or URI.

## 3. Build your dependency graph

`depends_on` means "this document structurally depends on that document." If the depended-on doc changes, this doc may need to change too.

```
vision (root, depends_on: [])
  └── architecture (depends_on: [your-project.vision])
        ├── protocol-x (depends_on: [your-project.architecture])
        └── protocol-y (depends_on: [your-project.architecture])
```

Cross-repo references use the other project's namespace: `depends_on: [spore.project-vision]`.

## 4. Run the validator

```bash
python3 scripts/validate_spec_dag.py
```

The validator:
- Reads `project_id` and `docs_root` from `docs/_meta/project.json`
- Finds all docs with frontmatter containing `doc_id`
- Checks: Tier-0 fields present, namespace prefix correct, dependencies resolve, no cycles, valid status
- Warns about docs with frontmatter but missing `doc_id`
- Ignores docs without frontmatter entirely

Override defaults: `--docs-root src/docs/ --project-id my-proj`

## 5. Add CI validation (optional)

Copy `.github/workflows/validate-spec-dag.yml` to your repo:

```yaml
name: Validate Spec DAG
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - run: python3 scripts/validate_spec_dag.py
```

## What you get

- **DAG integrity**: broken references and cycles are caught before they accumulate
- **Namespace discipline**: every doc is scoped to its project
- **Lifecycle tracking**: status transitions are explicit and machine-readable
- **Cross-project compatibility**: if your docs follow this pattern, they can participate in cross-project knowledge graphs and spec DAGs
