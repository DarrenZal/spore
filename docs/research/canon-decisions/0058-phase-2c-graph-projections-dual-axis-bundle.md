---
doc_id: spore.canon-decision.phase-2c-graph-projections-dual-axis-bundle
doc_kind: decision-record
status: draft
adr_number: "0058"
opened-on: 2026-04-23
closed-on: 2026-04-23
decision: edit
r_claim_source:
  - spore.review.coherence-falsifiability-audit-2026-04-22:C-11
  - spore.review.coherence-falsifiability-audit-2026-04-22:C-10
  - spore.review.coherence-falsifiability-audit-2026-04-22:C-12
r_claim_statement: |
  Phase 1 coherence-falsifiability audit §C-11 gave `fragment-and-redistribute` as disposition for the eight graph projections: three primaries (Constitutional, Commitment, Epistemic per Opus-4-7 earning-test) at foundation-level + five secondaries (Roadmap DAG, Intent hypergraph, Event, Routing/flow, Discourse) as view-templates composable over primaries. ADR-0036 (canon-review Round 4) established primary/secondary tiering but with a different primary-set (Constitutional, Roadmap DAG, Intent hypergraph) grounded in graph-structure distinctness rather than materialization earning-test. Phase 1 §C-10/§C-12 identified residual scale-recurrence and dual-axis language to audit against the ADR-0031/0032/0033/0044 scope-conditioning discipline. ADR-0058 bundles both items as the third and final Phase 2c canon-body refactoring ADR.
supported_by:
  - /Users/darrenzal/projects/spore/CLAUDE.md
  - /Users/darrenzal/projects/spore/tmp/canon-coherence-falsifiability-audit-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-phase-2c-graph-projections-decision-brief-2026-04-23.md
  - /Users/darrenzal/projects/spore/tmp/phase-2c-graph-projections-audit-findings.txt
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0036-graph-projections-tiering-and-structure.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0056-phase-2c-semantic-refactoring-bundle.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0057-governance-artifacts-file-rename.md
authorized-by: "operator directive 2026-04-23 ('Full endorsement — all four recommendations are well-grounded') — decision-gate Step 2 PASS with Option A + primary-set α (Constitutional / Commitment / Epistemic) + secondary-treatment t3 (hybrid) + 2-hit dual-axis softening as proposed"
queue_reference: "CLAUDE.md Phase 2c queue — graph-projections realignment (C-11) + dual-axis scale-recurrence audit (C-10/C-12)"
affects_canon:
  - docs/project-vision.md
  - docs/foundations/governance-artifacts-and-graph-projections.md
  - docs/foundations/holonic-network-architecture.md
related_adrs:
  - spore:ADR-0036-graph-projections-tiering-and-structure
  - spore:ADR-0031-ecology-cycle-scope-conditioning
  - spore:ADR-0032-core-thesis-primitives-scope-conditioning
  - spore:ADR-0033-pattern-recursion-dual-axis-clarification
  - spore:ADR-0041-text-authoritative-representation
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0056-phase-2c-semantic-refactoring-bundle
  - spore:ADR-0057-governance-artifacts-file-rename
concepts:
  - coordination-substrate
---

# ADR-0058 — Phase 2c Graph-Projections Realignment + Dual-Axis / Scale-Recurrence Audit (Bundle)

## Status

draft (authored 2026-04-23; activation pending validator no-regression check)

## Context

Phase 2c of the canon rebuild is structural canon-body refactoring. Two predecessors have landed: ADR-0056 (`phase-2c-semantic-refactoring-bundle`) at commit `2114828` and ADR-0057 (`governance-artifacts-file-rename`) at commit `58ff1f1`. ADR-0058 is the third and final Phase 2c canon-body ADR, bundling the remaining two items surfaced by the Phase 1 coherence-falsifiability audit at `tmp/canon-coherence-falsifiability-audit-2026-04-22.md`:

### Item 1 — Graph-projections realignment (Phase 1 §C-11)

The canon presents eight graph projections (Constitutional, Roadmap DAG, Intent hypergraph, Commitment, Epistemic, Event, Routing/flow, Discourse) at foundation-level across `docs/project-vision.md §Dual Representation` and `docs/foundations/governance-artifacts-and-graph-projections.md §Graph Projections`. Phase 1 §C-11 gave `fragment-and-redistribute` as disposition with confidence medium-high: *"three primary (Constitutional, Commitment, Epistemic/Evidence per Opus-4-7) as foundation-level projections; secondary five as query templates or views named at pattern-level, not foundation-level."*

ADR-0036 (canon-review Round 4) established a two-tier distinction but with a different primary-set (Constitutional / Roadmap DAG / Intent hypergraph), grounded in graph-structure distinctness — *"directly mapped to the coordination ecology and the holonic/network architectural axes"* — rather than in the materialization earning-test §C-11 calls for.

**§C-11 earning-test per-projection** (see `tmp/phase-2c-graph-projections-audit-findings.txt`): a projection earns primary-status if it has (a) independent schema, (b) materialization path, (c) query pattern, and (d) at least one running-system use case not reducible to a join on primaries.

| Projection | Schema | Materialization | Query | Non-join use | Verdict |
|---|---|---|---|---|---|
| Constitutional | ✓ | spec-DAG | ✓ | ✓ | **primary** |
| Commitment | ✓ | BKC / PM commitment-pools | ✓ | ✓ | **primary** |
| Epistemic | ✓ | KOI / unified-search | ✓ | ✓ | **primary** |
| Roadmap DAG | thin | spec-DAG | topological | specialization of Constitutional | view-template |
| Intent hypergraph | hyperedge | planned | match | pre-commitment stage of Commitment | view-template |
| Event | event log | yes | temporal | reducible per §C-11 defeat | view-template |
| Routing/flow | paths | pool flows | capacity | reducible per §C-11 defeat | view-template |
| Discourse | arguments | research prototypes | argumentation | possibly-distinct; parked | view-template (parked) |

The three primaries map 1:1 to Spore's three load-bearing graph implementations (spec-DAG for Constitutional; BKC/Octo + PM commitment-pools for Commitment; KOI unified-search for Epistemic). The remaining five are honestly re-classifiable as view-templates composable over primaries.

### Item 2 — Dual-axis + scale-recurrence audit (Phase 1 §C-10 / §C-12)

Post-ADR-0031 / 0032 / 0033 / 0044 discipline has materially reduced residual scale-recurrence overreach. The Step 0.5 audit scan (`tmp/phase-2c-graph-projections-audit-findings.txt`) found in-scope:

- 15+ dual-axis architectural references across `holonic-network-architecture.md`, `project-vision.md`, `governance-artifacts-and-graph-projections.md`, `relational-agency-and-holons.md` — all PRESERVE (post-ADR-0033-compliant or Core-Thesis-adjacent).
- 4 scale-recurrence references in `project-vision.md` (§Scope of composability L127, §Scale instantiation L198, §Coordination Scales L246) already carry "Spore has reached" softening — PRESERVE.
- 2 residual universal-scope hits at `holonic-network-architecture.md:12` and `:85` — SOFTEN with ADR-0031/0032 scope-conditioning pattern.

Scope is materially lighter than plan's risk-case anticipated. Session-atomic window preserves comfortably.

## Decision

**Edit — bundled realignment per operator Option A + primary-set α + secondary-treatment t3 + 2-hit dual-axis softening:**

### Item 1 — Graph-projections realignment

1. **Three primaries at foundation-level** (per Opus-4-7 earning-test reading, §C-11): **Constitutional graph**, **Commitment graph**, **Epistemic graph**. Each retains full bullet-spec treatment.

2. **Five secondaries demoted to view-templates** (hybrid treatment t3): Roadmap DAG, Intent hypergraph, Event graph, Routing/flow graph, Discourse graph. Listed as one-line references with explicit "view-template composable over primaries" framing. No foundation-level bullet-spec; no new pattern-library doc (bridge-to-nowhere avoided).

3. **ADR-0036 supersede-via-prose on primary-set only.** ADR-0036 file preserved on-disk; the graph-structure-distinctness rationale for Constitutional / Roadmap-DAG / Intent-hypergraph remains available as a research-lens reading. Primary-set authoritative source becomes ADR-0058 per operational-evidence earning-test. Precedent: ADR-0041 supersedes-via-prose ADR-0025 (text-authoritative over graph-authoritative) without modifying ADR-0025 on disk.

4. **Parallel-synchronized edits** across `docs/project-vision.md §Dual Representation` (L224-L242) and `docs/foundations/governance-artifacts-and-graph-projections.md §Graph Projections` (L88-L101).

### Item 2 — Dual-axis + scale-recurrence audit

5. **Two surgical softening edits** at `docs/foundations/holonic-network-architecture.md`:
   - **Line 12**: `"...compose at every scale and scope."` → `"...compose at each scale Spore has reached."`
   - **Line 85**: `"At every level: sovereign perspective + shared space + some form of governance memory + federated knowledge."` → `"At each scale Spore has reached, the pattern is: sovereign perspective + shared space + some form of governance memory + federated knowledge. Whether a given federation-agent realises all four at a given level is a property of that federation-agent, not a requirement of the grammar."`

6. **All other dual-axis + scale-recurrence in-scope hits: PRESERVE.** Architectural claims at `holonic-network-architecture.md §Dual-Axis Topology` (L14-L56), `§Scale Levels` (L75 — already softened by ADR-0033), `§Polycentric Governance` (L87-L115), `§A-C-A' Circuit` (L119-L132), `§Graph Structure Hierarchy` (L134-L143); `project-vision.md §Containment and Connection` (L164-L172) and `§Naming Stack` (L301 — "Holonic Network — dual-axis structure of containment and overlap" as architecture label); `governance-artifacts-and-graph-projections.md §Structure and Flow in the Graph Model` (L120-L130); `relational-agency-and-holons.md:91` — all post-ADR-0033-compliant or Core-Thesis-adjacent load-bearing claims.

7. **Out-of-scope (parked to downstream propagation audit):** `docs/foundations/federation-protocol.md:89` ("These hold at every scale and are non-negotiable:") — outside plan's audit scope; candidate for future targeted pass.

Rationale for `edit` disposition:

- **(a) Lens concurrence**: Phase 1 audit §C-11 disposition (confidence medium-high) + Opus-4-7 §3.5 second-opinion + Codex v2 §2.5 concurrence on "design motivation real, count inflated." Three-lens concurrence honored.
- **(b) Earning-test precedent**: ADR-0048 established parsimony-as-earning-test-outcome. Primary-set choice is now an earning-test call, not a framing call. Operational-evidence grounding (spec-DAG / commitment-pool / KOI) wins over graph-structure-distinctness grounding.
- **(c) Supersede-via-prose precedent**: ADR-0041 supersedes-ADR-0025-via-prose discipline applies here. ADR-0036 remains on-disk with its graph-structure rationale preserved as research-lens.
- **(d) Scope-conditioning discipline**: ADR-0031/0032/0033/0044 established "at each scale Spore has reached" as canonical softening pattern. The 2 residual hits at holonic-network-architecture.md:12 / :85 inherit that discipline.
- **(e) Held-tension check**: ADR-0001 (pluriversal-incommensurability) concepts do not overlap this ADR's concepts. No tension trigger.

## Consequences

- **Graph-projections canon-body** now presents three earning-test-grounded primaries at foundation-level (Constitutional / Commitment / Epistemic), each mapping 1:1 to a running-system implementation. Five view-templates (Roadmap DAG, Intent hypergraph, Event, Routing/flow, Discourse) acknowledged as composable views with explicit tier framing. Reader can no longer conflate secondary views with primary projections; aesthetic-of-thoroughness creep is contained.
- **ADR-0036 supersede-via-prose on primary-set.** ADR-0036 file preserved on-disk; its graph-structure distinctness rationale remains available as research-lens reading. Authoritative primary-set source becomes ADR-0058.
- **Dual-axis architectural claim preserved.** Post-ADR-0033 "recurring architectural motif with scale-appropriate forms" framing honored; 2 residual universal-scope hits at `holonic-network-architecture.md:12` / `:85` softened to match `at each scale Spore has reached` discipline from ADR-0031/0032.
- **No new primitives / doctrines / modes / properties / derived glossary slugs.** Canon object-class inventory preserved: 9 primitives + 3 doctrines + 2 modes + 2 properties + 6 derived glossary slugs. Yaml v12 unchanged.
- **Validator held at baseline 9/30.**
- **Phase 2c arc complete** through ADR-0056 (semantic refactoring) + ADR-0057 (governance-artifacts file rename) + ADR-0058 (graph-projections realignment + dual-axis audit). All three items from the original Phase 2c queue in `CLAUDE.md` are now dispositioned.
- **Pattern-library doc parked** as parking-lot entry for future work. The five view-templates are named in canon with tier framing but not specified at pattern-level; when the pattern-library doc is authored, it inherits them as starting content.
- **Downstream propagation audit** gains a cleaner starting state: graph-projection canon-body is now aligned with Phase 1 audit disposition; the audit can proceed against a canon that matches its Phase 1 post-rebuild targets.
- **Dual-operability preserved.** ADR-0036's graph-structure-distinctness reading remains available as research-lens; new primary-set is earning-test grounded. Both readings coexist: structure-distinctness explains why some views are distinguishable-as-graphs-at-all (DAG vs hypergraph vs labelled multigraph); earning-test explains why some are primary-at-foundation-level vs view-template. Not all graph-distinct projections are primary projections, and that is now explicit.
- **Parsimony-as-earning-test-outcome discipline extended** (ADR-0048 precedent) from primitive-admission to graph-projection primary-status. A canon-object's tier placement is earning-test-determined, not aesthetic-count-determined.

## Evidence

- cluster_key: `docs/project-vision.md:graph-projections-realignment-per-C11`
- supports: Phase 1 audit §C-11 (Opus-4-7 §3.5 + Codex v2 §2.5 concurrence) + §C-10 + §C-12
- opposes: 0 (no audit defended preserving the 8-projection foundation-level framing; ADR-0036 was acknowledged as partial repair that did not finish)
- source: `tmp/canon-coherence-falsifiability-audit-2026-04-22.md`, authorized via operator directive 2026-04-23 Step 2 PASS
- Held-tension overlap: checked 2026-04-23. ADR-0001 pluriversal-incommensurability concepts do not overlap. No tension trigger.
- Adaptation note: scope proved materially lighter than plan's risk-case (2 section rewrites + 2 surgical softenings); no split-to-Option-D pressure; session-atomic preserved.

## Diff summary

**Canon-body edits (3 files)**:

- `docs/project-vision.md` — §Dual Representation (L224-L242) §Graph Projections list rewritten: 3 primaries at foundation-level full-spec + 5 view-templates as one-line tier-framed references.
- `docs/foundations/governance-artifacts-and-graph-projections.md` — §Graph Projections (L88-L101) parallel-synchronized rewrite.
- `docs/foundations/holonic-network-architecture.md` — L12 ("at every scale and scope" → "at each scale Spore has reached"); L85 (universal-level claim softened with federation-agent-realisation qualifier).

**Yaml**: unchanged at v12 (no new slugs; no slugs retired).

**Files unchanged**:

- `docs/research/canon-decisions/0036-graph-projections-tiering-and-structure.md` — preserved on-disk; supersede-via-prose on primary-set only.
- All other canon files in-scope (`relational-agency-and-holons.md`, `federation-protocol.md`, `spore-instance-model.md`, etc.) — not touched.
