# ADR-0070 Step 0.5 Audit Manifest

Date: 2026-04-24
Repo: `/Users/darrenzal/projects/spore`
Scope: audit-only; no Step 1 recommendations in this file

## Read Set

Required artifacts read for this audit:

- `docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md`
- `docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md`
- `docs/research/canon-decisions/0068-federation-encounter-composition-pattern.md`
- `docs/research/canon-decisions/0069-four-enabling-conditions-design-criteria-pattern.md`
- `docs/patterns/federation-encounter.md`
- `docs/patterns/README.md`
- `scripts/validate_spec_dag.py`
- `docs/foundations/governance-artifacts-and-graph-projections.md`
- `docs/research/canon-decisions/0036-graph-projections-tiering-and-structure.md`

Additional evidence surfaces read:

- `docs/project-vision.md`
- `docs/synthesis/coordination-grammar.md`
- `docs/roadmap.md`
- `docs/research/planning/instrumentation-evidence-design-batch-1.md`
- `docs/patterns/discourse-as-governance.md`
- `/Users/darrenzal/projects/intelligence-commons/docs/roadmap/learning-field-roadmap.md`
- `/Users/darrenzal/projects/intelligence-commons/docs/roadmap/learning-field-roadmap.json`
- `/Users/darrenzal/projects/intelligence-commons/docs/research/promise-foundation-oracular-evidence-audit.md`
- `/Users/darrenzal/projects/poietic-match/docs/protocol.md`
- `/Users/darrenzal/projects/poietic-match/docs/grammar.md`
- `/Users/darrenzal/projects/poietic-match/docs/project-vision.md`
- `/Users/darrenzal/projects/poietic-match/docs/research/graph-transformers.md`

## Current Pattern Inventory Verification

`docs/patterns/README.md` currently lists 6 pattern files in scope:

1. `commitment-pooling.md`
2. `discourse-as-governance.md`
3. `federated-knowledge-exchange.md`
4. `federation-encounter.md`
5. `governance-memory.md`
6. `intent-publication-and-activation.md`

This matches the post-ADR-0068 expected inventory count of 6 in-scope patterns.

## ADR-0058 Exact Parking / Demotion Quotes

From `docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md`:

> "The remaining five are honestly re-classifiable as view-templates composable over primaries." (line 72)

> "Five secondaries demoted to view-templates (hybrid treatment t3): Roadmap DAG, Intent hypergraph, Event graph, Routing/flow graph, Discourse graph. Listed as one-line references with explicit "view-template composable over primaries" framing." (line 92)

> "Pattern-library doc parked as parking-lot entry for future work. The five view-templates are named in canon with tier framing but not specified at pattern-level; when the pattern-library doc is authored, it inherits them as starting content." (line 124)

## ADR-0065 Exhibit 3 Verbatim (Catalog-Pattern Test)

From `docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md`:

> "**(α-cat) ≥N legitimate sub-entities each independently-motivated**: pattern hosts ≥N sub-entities where each sub-entity is itself independently-motivated (stands on its own merit, not merely as filler for the catalog). Floor N≥3 (view-template's 5 views at N=5 is motivating exemplar; "a pair is not a catalog"). Per-admission-ADR proposes N with rationale; operator ratifies. Same deferral-rationale as (α-des)." (line 197)

> "**(β-cat) Host-structure-earning-test**: admission-ADR must articulate (a) named host-structure property that binds sub-entities together (why-these-members-together); (b) per-sub-entity demonstration of the property; (c) composition-or-aggregation rule by which the host-structure binds sub-entities into a single catalog. Example host-structure (view-template): "composable over primary graph projections" per ADR-0058." (line 199)

> "**Exemplar**: view-template pattern-library doc (5 demoted graph projections per ADR-0058: Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse) — N=5; host-structure: composable-over-primaries (schema-specialization or join-derivable from 3 primaries)." (line 201)

> "**Downstream candidate cleanest-fit**: **view-template pattern-library doc** (ADR-0058) — (α-cat) 5 legitimate sub-entities (Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse), each with its own graph-structure + specialization-rationale; N=5 satisfies N≥3 floor; (β-cat) host-structure "composable over primary graph projections" per ADR-0058 ...; per-sub-entity composition-specialization rule documented." (line 203)

## Rating Key Used In This Audit

- `STRONG`: named operational instance-family or machine-readable implementation is documented, plus canon articulation
- `PARTIAL`: canon articulation is clear and there is adjacent operational or protocol evidence, but the named view is not clearly materialized as its own running surface
- `WEAK`: canon articulation exists, but evidence remains mostly design / research / formalization level; no clear running view surface
- `ABSENT`: no meaningful evidence beyond parking-level naming

## Per-Sub-Entity Demonstration Audit

### 1. Roadmap DAG

Evidence surfaced:

- Canon articulation in foundation/body:
  - `governance-artifacts-and-graph-projections.md:120` defines Roadmap DAG as Constitutional specialization ordering initiatives, milestones, and dependencies by sequence.
  - `project-vision.md:242` repeats the same view-template role.
  - `coordination-grammar.md:203` maps it to Constitutional specialization.
- Documented instance-family:
  - `docs/roadmap.md:88` points to IC's canonical roadmap as a machine-readable JSON + rendered markdown.
  - `intelligence-commons/docs/roadmap/learning-field-roadmap.md:121-129` defines dependency execution order and cites a machine model.
  - `intelligence-commons/docs/roadmap/learning-field-roadmap.json:1-120` is an actual roadmap graph surface with nodes for outcomes, milestones, decisions, and initiatives.

Demonstration rating: `STRONG`

Why: this is the clearest case of a documented machine-readable roadmap structure that already behaves like a DAG-oriented view over governance artifacts.

### 2. Intent Hypergraph

Evidence surfaced:

- Canon articulation in foundation/body:
  - `governance-artifacts-and-graph-projections.md:121`
  - `project-vision.md:242`
  - `coordination-grammar.md:204`
- PM protocol / grammar adjacent evidence:
  - `poietic-match/docs/project-vision.md:14-38` explicitly rejects bilateral-only matching and describes compositional matching across multiple offers, needs, and constraints.
  - `poietic-match/docs/grammar.md:23-25` defines `pm:Intent` as offer/need/poietic expression.
  - `poietic-match/docs/grammar.md:49` names poietic intent as requiring composition of multiple offers, needs, and capacities.
  - `poietic-match/docs/grammar.md:90-91` and `:190` define bundles with participating intents (2+) and a poietic composition modality.
  - `poietic-match/docs/research/graph-transformers.md:469` explicitly maps commitment bundles to hyperedges.
- Counter-evidence:
  - `docs/research/planning/instrumentation-evidence-design-batch-1.md:86` says "Intent hypergraph is design only."

Demonstration rating: `WEAK`

Why: the multi-party intent/bundle logic is real and well-described, but the audit did not find a named running hypergraph view; the strongest local meta-audit note classifies it as design-only.

### 3. Event

Evidence surfaced:

- Canon articulation in foundation/body:
  - `governance-artifacts-and-graph-projections.md:122`
  - `project-vision.md:242`
  - `coordination-grammar.md:205`
- Operationally-adjacent event-stream surfaces:
  - `poietic-match/docs/protocol.md:228` logs disclosure as a consent event in an audit trail.
  - `poietic-match/docs/grammar.md:241` defines `consentLog: [pm:ConsentEvent]`.
  - `intelligence-commons/docs/research/promise-foundation-oracular-evidence-audit.md:60,107-110` documents a source-tagged, hash-chained event log as production-level evidence infrastructure.
  - `intelligence-commons/docs/learning-field/comparison-records/layer2-session-memory.yaml:46,52,91-93` references append-only event streams as an existing substrate.
- Caveat:
  - none of the above was presented as an explicit named `Event graph` materialization; they are event-log / event-stream substrates from which such a view could be surfaced.

Demonstration rating: `PARTIAL`

Why: the temporal/event substrate is operational in multiple places, but the named Event view remains mostly inferential rather than explicitly surfaced as its own view-template artifact.

### 4. Routing / Flow

Evidence surfaced:

- Canon articulation in foundation/body:
  - `governance-artifacts-and-graph-projections.md:123`
  - `project-vision.md:242`
  - `coordination-grammar.md:206`
- Documented instance-family:
  - `docs/patterns/commitment-pooling.md:58-65` specifies cross-pool routing scores and advisory routing between pools.
  - `docs/patterns/commitment-pooling.md:79` states pool federation and routing connect directly to governed flow mechanisms.
  - `docs/patterns/commitment-pooling.md:83` says "routing visualization live."
  - `docs/roadmap.md:21` repeats the live routing visualization claim.
- Counter-evidence / caution:
  - `docs/research/planning/instrumentation-evidence-design-batch-1.md:87` says "Routing/flow graph is design only." This appears to mean not instantiated as a named graph surface inside this repo, not that routing operations themselves are absent.

Demonstration rating: `STRONG`

Why: unlike Event and Intent hypergraph, this view has a documented adopter family with explicit routing behavior and a live routing visualization, even if the repo does not itself host the visualization surface.

### 5. Discourse

Evidence surfaced:

- Canon articulation in foundation/body:
  - `governance-artifacts-and-graph-projections.md:124`
  - `project-vision.md:242`
  - `coordination-grammar.md:207`
- Named pattern / documented adopters:
  - `docs/patterns/discourse-as-governance.md:30-50` explicitly defines the discourse graph as the self-reflective governance layer.
  - `docs/patterns/discourse-as-governance.md:64-68` lists Spore, BKC, and personal-project implementations as current adopters.
  - `docs/protocols/claims-evidence-attestation.md:159` links discourse-as-governance to the epistemic infrastructure.
- Counter-evidence:
  - `docs/research/planning/instrumentation-evidence-design-batch-1.md:65-71,83` says there is no operational discourse graph instance in this repo and that the operational layer is almost entirely absent.

Demonstration rating: `PARTIAL`

Why: the discourse view is canonically mature and has a named pattern doc with documented adopters, but the strongest internal instrumentation memo explicitly refuses to treat it as an instantiated running graph surface in this repo.

## Summary Table

| View | Demonstration rating | Audit note |
|---|---|---|
| Roadmap DAG | `STRONG` | strongest documented machine-readable instance-family |
| Intent hypergraph | `WEAK` | conceptually clear, but explicit design-only note remains load-bearing |
| Event | `PARTIAL` | event-stream substrate exists, named Event view remains indirect |
| Routing / flow | `STRONG` | documented routing scores + live routing visualization in BKC family |
| Discourse | `PARTIAL` | named pattern/doc/adopters exist, but repo-level running graph surface is explicitly absent |

## Host-Structure Property Check

Question: is "composable over 3 primary graph projections" articulated in canon-body, or only asserted in ADR-0058?

Finding:

- It is articulated in canon-body, not only in ADR-0058.
- `governance-artifacts-and-graph-projections.md:110` states the general rule: each view-template is a specialization of one or more primaries or substantially derivable from joins over primary storage.
- `project-vision.md:236-242` restates the three primaries and the five composable view-templates.
- `coordination-grammar.md:201-207` tabulates each view-template against the primary projection(s) it composes over.

Audit judgment: host-structure naming is operationalized in canon-body; this arm is not resting on ADR-0058 assertion alone.

## Composition / Aggregation Rule Check

Question: does any canon doc articulate how the five views compose into one catalog?

Finding:

- Yes, a shared binding rule exists.
- Global rule:
  - `governance-artifacts-and-graph-projections.md:110` defines the catalog-wide rule as specialization-of-primaries or join-derivable-from-primaries.
- Per-member rule:
  - `governance-artifacts-and-graph-projections.md:120-124`
  - `coordination-grammar.md:203-207`
- ADR-0058's own per-projection table also encodes the rule:
  - `0058-phase-2c-graph-projections-dual-axis-bundle.md:61-70`

Important nuance:

- The rule is not "the five views compose with each other sequentially/additively."
- The rule is "the five are aggregated into one catalog because each is a legitimate view-template produced by a common transformation discipline over the same 3-primary substrate."
- `0036-graph-projections-tiering-and-structure.md:60` preserves an unresolved research note: full derivation proofs for some secondaries were not fully formalized at that time. The later canon, however, does state a normative specialization/join rule clearly enough to govern categorization.

Audit judgment: the composition/aggregation rule is articulated. It is a host-to-member derivation rule, not an inter-member sequence rule.

## (α) Legitimacy + Independent-Motivation Audit

### Roadmap DAG

Verdict: `PASS`

Distinct motivation: temporal ordering of initiatives, milestones, and dependencies. This is not collapsible into the general Constitutional graph when sequencing itself matters.

### Intent Hypergraph

Verdict: `PASS`

Distinct motivation: pre-commitment, n-ary composition of offers/needs/conditions where binary edges are insufficient. Operational maturity is weaker than its conceptual distinctness.

### Event

Verdict: `PASS`

Distinct motivation: temporal-dynamics queries over what changed, when, and due to what. This is analytically distinct from both Commitment state and Epistemic provenance viewed statically.

### Routing / Flow

Verdict: `PASS`

Distinct motivation: circulation and pathing of obligations, resources, and information across pools/networks. This is not reducible to merely listing commitments.

### Discourse

Verdict: `PASS`

Distinct motivation: governance revision, argumentation, objections, and decision formation. This has its own pattern-layer articulation and does not collapse into either Epistemic or Constitutional viewed separately.

Cross-view honest-rigor note:

- The audit did not find that the five are merely filler fragments of a single externally-borrowed parent taxonomy.
- The real risk is not α-legitimacy collapse but uneven β-maturation: some views have stronger operational demonstration than others.

## Sibling-Pattern Overlap Check: Federation-Encounter

Question: does ADR-0068 / `federation-encounter.md` already absorb Event or Discourse in a way that would make view-template redundant?

Finding:

- No direct redundancy found.
- `docs/patterns/federation-encounter.md:47-56` defines an event-scope composition of primitives within bounded Field-conditions.
- Its related patterns are `commitment-pooling`, `governance-memory`, and `intent-publication` (`federation-encounter.md:98-101`), not Event/Discourse views.
- ADR-0068's ratified `relates_to:` edge set likewise names only those three patterns (`0068-federation-encounter-composition-pattern.md:81`).

Overlap judgment:

- `Event` overlap is category-distinct, not redundant.
  - Federation-encounter is a coordination-event pattern.
  - Event view-template is a projection over temporal state-change / event streams.
- `Discourse` overlap is contextual, not redundant.
  - Some federation-encounters can host deliberation.
  - Discourse graph/discourse-as-governance names the argument/revision structure over Constitutional + Epistemic surfaces, which federation-encounter does not define.

Audit conclusion: no sibling-pattern redundancy blocker surfaced.

## ADR-0068 Allowlist / Shape Reference To Inherit

Relevant template facts from `0068-federation-encounter-composition-pattern.md`:

- `0068 ... :87-91`:
  - new ADR file
  - new pattern doc
  - yaml bump
  - `docs/patterns/README.md` update
  - 7-axis decision-brief / Wave-2 template established
- `0068 ... :93-103` and `:179-180`:
  - explicitly not touching `docs/project-vision.md`
  - explicitly not touching `docs/foundations/governance-artifacts-and-graph-projections.md`
  - explicitly not touching `docs/research/planning/canon-review-protocol.md`
  - explicitly not touching `docs/governance/project-briefing-spec.md`
  - explicitly not touching `scripts/validate_spec_dag.py`
  - explicitly not touching `CLAUDE.md`

Inherited shape reference:

- Admit-shape allowlist precedent from ADR-0068 is narrow and explicit:
  - ADR file
  - pattern doc
  - `docs/patterns/README.md`
  - `docs/research/concepts-p2p-wiki.yaml`
- Framework/foundation/validator surfaces are held fixed unless the axis decision explicitly requires otherwise.

## Audit Bottom Line For Step 1 Input

Facts surfaced by this audit:

1. The named host-structure property is canon-body articulated; it is not resting only on ADR-0058.
2. A shared composition/aggregation rule exists: specialization / join-derivation over the 3-primary substrate.
3. The five sub-entities all clear α legitimacy / independent-motivation on current evidence.
4. β demonstration is uneven:
   - strongest: `Roadmap DAG`, `Routing / flow`
   - middle: `Event`, `Discourse`
   - weakest: `Intent hypergraph`
5. No direct redundancy with federation-encounter surfaced.
6. ADR-0068 supplies the Wave-2 admit-shape template and narrow allowlist precedent.
