---
doc_id: spore.positioning.agents-and-canons
doc_kind: positioning
status: draft
depends_on:
  - spore.project-vision
  - spore.representation-authority
  - spore.external-validation-loop
  - spore.sensor-oracle-governance
  - spore.instance-model
relates_to:
  - spore.connection.bkc-as-instance-family
  - spore.connection.bioregional-coordination-as-peer-instance-family
  - spore.positioning.agentic-bioregionalism
  - spore.canon-decision.federation-encounter-composition-pattern
  - spore.canon-decision.phase-4-closure-declaration
  - spore.actor-governance
  - spore.federation-protocol
  - spore.maintenance-economics
date: 2026-04-28
author: darren-zal
published_at: null
disposition: null
publication_target: website
---

> *This document is intended for publication on Spore's website. It lives here as a working draft.*

# Agents and Canons: An Integrating Frame

## The integrating insight

Spore (and its sibling-canons IC, PM, and downstream BKC) has spent multiple weeks building a coordination grammar that **changes canon without freezing prematurely or inflating indiscriminately**. Five substrate-shapes earned own admission discipline (grammar; downstream stabilization; pattern-library; foundation-doc family; cross-repo propagation), each with audit-then-propose machinery, validator-held-exact baselines, and zero-rollback execution.

That work is genuinely closed at Phase 4 (33 canon-decisions; 14 foundation docs; collaborator-citable retrospective at 848 lines through 2026-04-26 evening). The corpus is **navigable, governed, change-capable, and externally-citable** — at the canon-narrative-form layer.

The integrating insight is this:

> Canons are artifacts that AI agents (and humans) navigate, extend, and coordinate around. The same machinery that makes Spore canon human-readable and governance-tractable should make it AI-navigable, AI-extensible, and AI-coordination-ready — both *from outside in* (other agents learning Spore's grammar to apply it elsewhere) and *from inside out* (Spore agents learning from external work and propagating to sibling canons).

This is **not new ground** in Spore canon. The **representational and governance hooks** are already committed at multiple layers — though authority, evaluation, and routine operational use of AI-summaries remain genuinely unresolved:

- **F4 representation-authority** ([`spore.representation-authority`](../foundations/representation-authority.md)) admits agent-summary as a derived representation layer (§4.5) within the text/graph/sensor/attestation/agent-summary precedence hierarchy. F4 §Open Questions explicitly defers whether canonical-AI-interpretations should be **routinely consulted as authority** to future pattern-layer or scope-expansion ADR work. So F4 admits the category but does NOT yet authorize AI-summaries as canon-citable in routine canon-reading flow.
- **F8 external-validation-loop** ([`spore.external-validation-loop`](../foundations/external-validation-loop.md), [ADR-0081](../research/canon-decisions/0081-external-validation-loop-foundation-doc-admission.md)) admits the doctrine of meta-canon-receiving-feedback-from-external-witnesses but does NOT yet build the operational routing-machinery. External agents reading canon → producing feedback → routing through F3 governance bodies is doctrinally legitimate but not operationally instantiated.
- **F1 sensor-oracle-governance** ([`spore.sensor-oracle-governance`](../foundations/sensor-oracle-governance.md)) admits AI-summary as a sensor modality with governance for selection, calibration, maintainer, contestation, disagreement, interpretation, absent-evidence — but does NOT authorize AI-summaries as canon-citable.
- **spore.instance-model** ([`spore.instance-model`](../foundations/spore-instance-model.md)) Canon/Node/Agent/Site decomposition: the `expose` operation is the membrane crossing for external visibility; Site is the public membrane. Doctrinally supports new-repo composition and cross-canon coordination.

What's in place: representational and governance **categories** that any AI-navigable-canon work must fit within. What's NOT yet in place: **authority** (when do AI-summaries become canon-citable rather than derived aids?), **evaluation** (how is AI-summary quality gated?), **regeneration** (when do summaries get re-produced as canon shifts?), and **routine operational use** (when does an AI-summary layer become first-class canon-reading flow?).

Two of these unresolved items — AI-summary authority/evaluation, and any canon-recognized "graph substrate of canon" object — are **future-ADR-shape concerns**, not just infrastructure work. When they fire, they require canon-decision-record ceremony, not direct-edit. This positioning doc names them as candidates without committing canon to admit them today.

## Three threads decompose the work

The integrating-frame work decomposes into three threads with **strategic mutual reinforcement and tactical prerequisites where they exist**. Threads can fire when their own pressure surfaces; none strictly depend on others firing first at strategic level.

### Thread 1 — Canon-as-AI-navigable-knowledge

The load-bearing concern. Direct operational need: AI agents working in Spore and adjacent repos navigate, search, and reason about canon at appropriate granularity. Currently agents read canon as text — Read tool, grep, semantic search through KOI. This works but has limits: no explicit section-level status (which paragraphs are load-bearing vs draft vs superseded?); no queryable graph of canon-objects (which ADRs depend on F4? what breaks if F1 changes?); no cross-canon view (Spore + IC + PM + BKC + bioregional-coordination as one knowledge field); no agent-summary layer that's first-class canon-citable.

Thread 1 is **four sub-initiatives at independent fire-states**, not one initiative. Bundling them obscures asymmetry.

- **Sub-A — Section-level status labels (Phase 5)**: corpus-wide sweep adding section-level status labels to canon docs. Vocabulary candidates: living / frozen / under-revision / historical / experimental / provisional. Fires when concrete reader-confusion incident or canon-density triggers. **Currently NOT-FIRED externally; WEAK-FIRED via operator-direct-use**.
- **Sub-B — KOI graph projection of canon**: KOI tree-sitter / chunk indexing across `docs/` producing queryable knowledge graph. Substrate verified essentially operationally complete on existing infrastructure (277 governed Spore docs indexed; depends_on graph queryable; semantic search via 3072-dim embeddings on 100% of canon-bearing chunks post-G1-closure 2026-04-28). **Most operational; remaining work is column-update and tooling-doc fixes, not new infrastructure.**
- **Sub-C — AI-summary authority + evaluation**: F4 §Open Questions deferral. Sub-C is the canon-decision work that would lift the deferral when pressure fires. Includes: authority gates, evaluation framework, regeneration mechanics, retraction / supersession, relationship to F1's AI-summary-as-sensor-modality. **NOT-FIRED canonically; future Spore ADR-shape concern.**
- **Sub-D — Public navigability + Site/`expose`**: spore-instance-model.md's `expose` operation operationalized for Spore canon itself. Could include graph-projection front-end, search UI, inter-doc navigation, cross-canon view. **MEDIUM-FIRED via BKC + bioregional-coordination audit pressure.**

### Thread 2 — Agentic bioregionalism / new-repo

Operationally MEDIUM-FIRED per BKC coherence audit. Substrate matured 2026-04-28: the conceptual frame canonized via [`spore.positioning.agentic-bioregionalism`](./agentic-bioregionalism.md), the new-repo `bioregional-coordination` spawned at peer-instance-family layer with its own canon-bearing structure, and the Spore-side reciprocal recognition landed via [`spore.connection.bioregional-coordination-as-peer-instance-family`](../research/connections/bioregional-coordination-as-peer-instance-family.md). The thread continues with whatever bioregional aspects (economics / mapping / governance / ecological monitoring / intergenerational stewardship) earn their own structural ratification.

### Thread 3 — Sibling-canon coherence steady-state

Currently reactive: Spore moves → sibling repos catch up via alignment ADRs authored in dedicated sessions. This worked for Phase 4 (Wave-N + Wave-N+1 ADRs landed cleanly) but is operator-driven. What "agent-stewards-of-canon" could look like: KOI sensor watching Spore canon commits + event bus for canon-update notifications + sibling-side intake agents + operator-elective ratification gate + federation-encounter-pattern analog applied to canon-update propagation rather than instance-coordination. **WEAK-FIRED.** Phase 4 cadence was operator-driven and worked fine; coherence steady-state machinery would fire under multi-operator canon editing or sustained sibling-canon update lag.

## Cross-thread structural relationships

The three threads are NOT parallel concerns; they relate via **strategic mutual reinforcement, tactical prerequisites**.

Strategic mutual reinforcement — at "what's the right strategic frame for canon work post-Phase-4," each thread reinforces the others. BKC + bioregional-coordination (Thread 2 substrate) already supplies operational pressure for Thread 1 (Sub-D MEDIUM-FIRED specifically by Thread 2 pressure). Thread 3 sibling-canon-coherence creates recurring sibling-intake use cases that themselves press Thread 1 (every Wave-N+1 alignment requires sibling agents to read Spore canon at appropriate granularity). Thread 1's graph-substrate availability lightens Thread 2 (new-repo authoring is dramatically faster if Spore canon is queryable-as-graph). Thread 1's section-labels (Sub-A) and graph-projection (Sub-B) lighten Thread 3 (sibling-side intake agents have far less work when canon updates carry section-level status metadata and queryable-graph context). Thread 2 and Thread 3 multiply each other's value.

Tactical prerequisites — within Thread 1, Sub-B is lightweight-foundation that lightens Sub-A / Sub-C / Sub-D when those fire. Sub-A is lighter if Sub-B lands first (status metadata becomes graph-attribute rather than per-doc edit). Sub-C makes more sense after Sub-B (where summaries get attached as canon-graph-nodes). Sub-D is meaningful once Sub-B exists (Site renders the graph-projection). Thread 3 agent-stewards have less to do if Sub-B exists (sibling-side intake agents query graph rather than parse text).

Threads are **mutually reinforcing strategic moves with tactical prerequisites where they exist**, not all-or-nothing and not strictly-sequenced.

## What we have / what's latent

A clean reference for what exists vs what's missing.

**What we have** — operational-ready:

- Doctrine layer: F1 sensor-oracle-governance covers AI-summary modality; F4 representation-authority commits to AI-summary as representation layer; F8 external-validation-loop admits external-agent-feedback doctrine; spore-instance-model.md decomposition supports new-repo composition; pattern-library M4 framework supports new admission shapes; 5 substrate-shapes with own admission discipline.
- Infrastructure layer: KOI tree-sitter AST indexing (22 repos coverage); Apache AGE Cypher graph queries (proven on code; applicable to docs); pgvector semantic search; impact analysis / community detection / execution-flow detection; KOI MCP tools for queryability; KOI federation infrastructure.
- Method-discipline layer: 32+ named method-precedents in retrospective; 4-layer audit-then-propose recursion; B-axis substrate-driven progression; honest-rigor cluster-counting (verdict-neutral); decline-shape catalog; Wave-N alignment pattern; cascade-miss discipline at five layers.
- Reference layer: BKC bridge note (`bkc-as-instance-family`); bioregional-coordination peer-instance-family bridge note; agentic-bioregionalism positioning doc; comparative-intake bridge notes for Claude Code, Hermes, Flow Coding, P2P wiki.

**What's latent** — categories admitted; machinery not built:

- Implementation layer: section-level status labels (Phase 5 deferred); KOI graph projection of canon (Spore + IC + PM + BKC + bioregional-coordination docs/ as queryable cross-canon graph); F4 AI-summary-as-authority (deferred pending operational pressure); F8 external-validation-loop operational machinery (routing-mechanism not built).
- Steady-state-coordination layer: Spore-steward agent (architecture-TBD; deployment-TBD); canon-update event bus (substrate-TBD); sibling-side intake agents (architecture-TBD); ratification gate machinery (model-TBD).

The infrastructure and the representational/governance hooks exist. The implementation layer (authority + evaluation + regeneration + routine operational use) and the steady-state-coordination layer (agent-stewards + sibling-intake) are where the threads converge.

## Forward-shape (sequencing options; no commitments)

Per audit-then-propose discipline plus readiness-audit-before-arc memory: don't pre-commit to ordering. Surface options; let evidence speak.

- **Thread 1 light spike** (~60-90 min) was executed 2026-04-27 as Sub-B KOI graph projection spike (substrate verified; G1 reconcile closed 2026-04-28). Light spike option for Thread 1 is essentially complete; medium-investment Phase 5 work would only be needed if section-level granularity earns its own firing trigger.
- **Thread 2 light option** (~30-60 min) executed 2026-04-28 as agentic-bioregionalism positioning doc. Thread 2 medium option (~half-day) executed same day as bioregional-coordination repo skeleton + bridge note. The thread continues with adjacent bioregional aspects (economics / mapping / governance / monitoring / stewardship) earning their own structural ratification when operational pressure surfaces.
- **Thread 3 light option** (~30-60 min) would author positioning doc within Spore at `docs/positioning/sibling-canon-coherence.md` naming the steady-state pattern conceptually. Medium option authors a Layer C plan for `agent-stewards-of-canon-protocol` with decision-gates. Heavy option deploys Spore-steward agent + sibling-side intake agents + ratification-gate machinery + F8 operational machinery built atop steward-pattern. **None fired yet; Phase 4 cadence was operator-driven and worked fine.**

If all three threads pursued: Thread 1 (light spike) first — produces evidence about whether Thread 2 + 3 should be light, medium, or heavy. If selective: pick whichever has fired pressure. If defer: this positioning doc is sufficient as articulation; no further work required until pressure surfaces.

## Future-ADR-shape candidates

Three concerns are flagged as **future Spore ADR-shape candidates** — when they fire operationally, they require canon-decision-record ceremony, not direct-edit infrastructure work:

- **AI-summary authority + evaluation operationalization** (Sub-C; F4 §Open Questions lift). When evidence accumulates that AI-summaries are being routinely consulted-as-authority in canon-reading flow, F4 deferral should lift via dedicated ADR. Includes authority gates, evaluation framework, regeneration mechanics, retraction / supersession, relationship to F1's AI-summary-as-sensor-modality.
- **Graph-substrate-of-canon as canon-recognized object**. Three projections compose to make canon-as-knowledge-graph: code graph (KOI tree-sitter; CALLS edges; community detection), knowledge graph (concepts + entities + relationships + facts), discourse graph (claims + arguments + evidence + counter-claims + objections + debates + retrospectives — currently implicit in ADR §Context/§Decision/§Consequences and r-claims, unprojected). When this composition stabilizes operationally, Spore could admit "graph-substrate-of-canon" as foundation-layer doctrine via dedicated ADR.
- **Canon-citizenship-layers distinction**. F8 external-validation-loop and Thread 3 sibling-canon-coherence overlap conceptually (both are "canons receiving structured updates from non-self agents") but operate on different canon-citizenship layers — F8 = non-Spore-canon-citizen agents producing feedback (read-time + appeal-time mechanics); Thread 3 = Spore-canon-citizen-sibling repos tracking Spore canon (write-time + sync mechanics). The distinction is operationally articulated (see [bioregional-coordination peer-instance-family bridge note](../research/connections/bioregional-coordination-as-peer-instance-family.md) §3 for a third layer: peer instance-family member). When the distinction matures with both F8 machinery and Thread 3 machinery deployed, Spore could admit "canon-citizenship-layers" as a doctrinal object via dedicated ADR.

These three are NOT direct-edit infrastructure work. They are canon-doctrinal future concerns. Marker-flagging here keeps them visible; canon-admission ceremony happens when each fires its own earning-test.

## Closing note

The Spore canon-rebuild arc reached genuine closure at Phase 4 + retrospective + Wave-N+1 alignment + BKC reciprocal-citation closure + bioregional-coordination peer-instance-family registration. This positioning doc articulates the **next strategic frame** without committing to specific execution.

The integrating insight is real: **canons-as-artifacts-AI-agents-navigate-extend-coordinate-around** is the work Spore has been building toward, even before the operator surfaced it explicitly 2026-04-27. F4 + F8 + F1 + spore-instance-model.md commit the **representational and governance categories**; the implementation layer (authority + evaluation + regeneration + routine operational use) is what comes next.

When that next layer fires — and which thread or sub-initiative fires first — should be substrate-pressure-driven. Operator-direct-use pressure ("Claude Code working effectively in Spore") is a legitimate firing source distinct from external pressure. The audit-then-propose discipline applies at this meta-arc level too: surface the threads, articulate the frame, let evidence speak.

The work is **elegant, proper, and patient**. There are no deadlines. The arc is at a real milestone. Whatever comes next can come when it earns its opening.

---

*Graduated from `tmp/spore-meta-vision-2026-04-27.md` v3 via [ADR-0083](../research/canon-decisions/0083-graduate-meta-vision-memo-to-positioning.md) (analog of [ADR-0035 vision-as-commitment-subtype](../research/canon-decisions/0035-vision-as-commitment-subtype.md) precedent). Memo at tmp/ retained as historical artifact (untracked per Spore tmp/ discipline). Operator-internal sections — open-questions registry, naming exploration for Thread 2 (already canonized via [`spore.positioning.agentic-bioregionalism`](./agentic-bioregionalism.md)), disposition meta, amendment logs — are NOT carried forward into this graduation.*
