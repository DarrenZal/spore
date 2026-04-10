---
doc_id: spore.agent-commons-meta-protocol
doc_kind: architecture
status: active
depends_on:
  - spore.project-vision
---

# Agent Commons Governance Meta-Protocol

The rules governing how artifacts in the Agent Commons project governance layer are created, validated, and composed.

## Artifact Taxonomy

Every document in a project using the Agent Commons governance layer has a `doc_kind` that determines its role in the spec DAG:

| Kind | Role | Authority | Example |
|------|------|-----------|---------|
| `vision` | Revisable constitutional commitment — orients direction, values, and constraints | Constrains everything below | `spore.project-vision` |
| `architecture` | Structural decisions — how the system is shaped | Constrains specs and patterns | `spore.mycelial-holarchy-architecture` |
| `foundation` | Foundational knowledge — domain models, principles | Informs architecture and specs | (domain-specific foundation docs) |
| `spec` | Operational definitions — what must be true | Constrains implementations | `spore.project-bootstrap-spec` |
| `pattern` | Reusable solutions — extracted from working systems | Informs future implementations | `spore.project-briefing-pattern` |
| `roadmap` | Sequenced work — what to do and when | References specs, constrained by vision | (project roadmaps) |
| `operations` | Runbooks, procedures — how to do recurring work | References specs | (operational docs) |
| `research` | Explorations — not yet validated | May inform future specs | (research docs) |
| `positioning` | External-facing — how we present the work | Constrained by vision | (grant applications, pitch docs) |

### Authority Flow

Authority flows downward through the DAG: vision → architecture → specs → implementations. A spec cannot contradict its parent architecture doc. A pattern cannot override a spec.

Documents at the same level have no authority over each other — they are peers.

### The `depends_on` Contract

When document A declares `depends_on: [B]`, it means:
- A must be consistent with B (B constrains A)
- Changes to B may require updates to A
- A cannot be validated in isolation — its context includes B
- If B is retracted, A must be reviewed

`depends_on` is transitive for constraint propagation but not for direct validation. If A depends on B and B depends on C, then A is indirectly constrained by C, but `/doc-check A` only validates against B directly.

## Conformance Levels

Projects adopt the Agent Commons governance layer at different depths:

### Tier 0 — Seed

**Required artifacts:**
- `docs/project-vision.md` with frontmatter: `doc_id`, `doc_kind: vision`, `status`, `depends_on: []`
- `docs/_meta/project.json` with: `project_id`, `project_name`, `project_uri`, `docs_root`, `repos`, `tier`

**What you get:** Project registered in the knowledge graph. `GET /project/briefing` returns vision doc info + tasks + sessions.

**Effort:** ~2 minutes.

### Tier 1 — Structured

**Required artifacts (in addition to Tier 0):**
- 2-5 foundation/architecture/spec documents forming a valid DAG rooted at the vision doc
- All docs pass validation (dry-run mode of the ingestion tool)

**What you get:** Spec hierarchy visible in project briefing. Dependency tracking between documents. Foundation for `/doc-check` impact analysis.

**Graduation from Tier 0:** Add foundation docs, re-ingest.

### Tier 2 — Full

**Required artifacts (in addition to Tier 1):**
- Specs and/or patterns that operationalize the foundations
- Optional: `semantic-roadmap.json`, `code-surfaces.json`
- Full DAG with validated dependencies

**What you get:** Complete governance graph. Cross-reference capabilities. Pattern extraction candidates.

**Graduation from Tier 1:** Add operational specs, re-ingest.

## Interop Rules

### Cross-Project References

Projects can reference each other's specs in their `depends_on`:

```yaml
depends_on:
  - spore.agent-commons-meta-protocol  # cross-project reference
```

Cross-project dependencies are **informational**, not **authoritative** — Project A's spec that depends on Project B's architecture means "A should be consistent with B's architecture," but B's governance has no enforcement power over A.

### Doc ID Namespacing

All `doc_id` values must be prefixed with the project's `project_id`:
- `spore.project-vision` (Spore project publishing Agent Commons)
- `bkc.federated-memory-arch` (BKC)
- `myproj.project-vision` (any adopting project)

The ingestion tool validates this prefix constraint.

### URI Scheme

Spec document URIs follow: `spec:<doc_id>` (e.g., `spec:spore.project-vision`).
Project URIs follow: `project:<slug>` (e.g., `project:spore`).

No double-namespacing: since `doc_id` already includes the project prefix, the URI is simply `spec:<doc_id>`.

## Governance Flow

The lifecycle of a spec document in the governance layer:

1. **Propose**: Author creates a `.md` file with frontmatter in the appropriate directory
2. **Validate**: Ingestion tool (dry-run mode) checks frontmatter, DAG acyclicity, namespace prefix, and dependency targets
3. **Review**: Human or agent review of the proposed artifact against its dependencies and the project's governance norms
4. **Merge**: Document committed to project repository
5. **Ingest**: Ingestion tool (apply mode) creates/updates SpecDoc entity in knowledge graph
6. **Discover**: Document appears in project briefing and is queryable by agents

> **Reference implementation**: [koi-processor](https://github.com/RegenAI/koi-processor) provides `ingest_spec_dag.py` as the current ingestion and validation tool.

Status transitions: `draft` → `active` → `deprecated` or `superseded`. Status is declared in frontmatter and enforced by `scripts/validate_spec_dag.py`.

- `draft`: Work in progress, not yet normative.
- `active`: Current, normative within the project.
- `deprecated`: No longer recommended but retained for provenance.
- `superseded`: Replaced by a newer artifact. Requires `superseded_by:` field in frontmatter. Allowed formats for `superseded_by`: repo-relative path (e.g., `docs/research/sheaf-synthesis.md`), cross-repo doc_id (e.g., `pm.research.sheaf-computation`), or URI (e.g., `https://...`). Machine-local paths are not valid.
