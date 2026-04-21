---
phase: 4
review_id: corpus-foundational-review-v1
consolidated_by: codex
consolidated_on: 2026-04-19
source_passes: [P4.1a, P4.1b, P4.1c, P4.2, P4.3, P4.4, P4.5, P4.6]
total_findings: 39
revision: 5
revision_basis: phase-5-triage-yaml-sweep
---

# Corpus Foundational Review v1 - Findings

## Summary

This consolidation reduced 40 input findings across eight Phase 4 passes to 39 canonical findings via one merge and no drops. Revision 2 restores five dropped `prior-collision-check` annotations, upgrades F-023 (`field / holon`) from S2 to S1 after a path-based re-count of its external evidence, and escalates F-037 (`repo-topology`) from important to blocking to preserve the dependency invariant with F-039. Revision 4 corrects a Phase 5 triage misread of `prior-collision-check`: five findings that preserve existing priors or cite non-prior conventions are routed back into canon-review-v2, leaving the prior-revision-proposal track empty. The final set contains 1 S1 finding, 13 S2 findings, 24 S3 findings, and 1 S4 finding; priorities resolve to 9 blocking, 26 important, and 4 deferred items. The dominant pattern is not a single primitive error but a cluster of canon-maintenance failures across three surfaces: stale or contradictory canon-layer docs, under-specified meta-corpus governance machinery, and an already-active three-repo topology that lacks explicit constitutional treatment. Two counterfactual-pass findings remain severity-normalized downward because their evidence is internal-only and still does not satisfy the S2 external-evidence bar.

## Findings index

| finding-id | type | severity | priority | corpus-location | track | round-assignment | target | summary | status |
|------------|------|----------|----------|-----------------|-------|------------------|--------|---------|--------|
| F-001 | contradictory | S3 | blocking | content | canon-review-v2 | round-governance-authoring-surfaces | docs/research/canon-decisions/README.md | The ADR README gives Spore-local authoring guidance in protocol-level lifecycle terms (`proposed`, `accepted`, `partial-drift`) without the Spore-specific status mapping that current ADR execution actually requires | resolved-via-ADR-0014 |
| F-002 | contradictory | S3 | important | content | canon-review-v2 | round-governance-authoring-surfaces | doc_kind | `quickstart.md` publishes a `doc_kind` value set that no longer matches the rest of Spore's governance canon | resolved-via-ADR-0014 |
| F-003 | missing | S2 | important | content | canon-review-v2 | round-spore-synthesis-refresh | field | `coordination-grammar.md` still presents a ten-primitive core that excludes `field`, even though active Spore canon keeps `field` as a current primitive and gives it a dedicated foundation entry defining the shared, learning, and relational field as the distributed medium of coordination | resolved-via-ADR-0009 |
| F-004 | wrong-level | S2 | important | content | canon-review-v2 | round-spore-synthesis-refresh | care | The synthesis grammar still collapses care into the intent phase, saying that Ruddick's explicit care phase is "carried by Intent." Current Spore canon after reproduction-primacy does not make that move: `relational-agency-and-holons.md` names care as the primary coordinating practice of field reproduction, and the capstone explicitly says care cannot be paraphrased by the symmetric intent/commitment stack | resolved-via-ADR-0009 |
| F-005 | contradictory | S3 | important | content | canon-review-v2 | round-spore-synthesis-refresh | artifact lifecycle | `coordination-grammar.md` publishes an artifact lifecycle of `draft -> active -> amended -> deprecated -> forked`, citing governance-memory as its source | resolved-via-ADR-0009 |
| F-006 | missing | S3 | important | content | canon-review-v2 | round-cross-repo-vision-alignment | audience declaration | The root vision doc still has no explicit audience / scope declaration |  |
| F-007 | contradictory | S3 | deferred | content | canon-review-v2 | round-spore-synthesis-refresh | docs/synthesis/decision-memo.md | `decision-memo.md` still frames already-landed canon work as pending "next session" tasks: adding discourse graph to the vision, writing a relay protocol doc, and writing a claims/evidence/attestation protocol doc | resolved-via-ADR-0010 |
| F-008 | misplaced | S2 | important | content | canon-review-v2 | round-ic-memory-governance-boundaries | docs/foundations/intelligence-primitives.md | `ic.intelligence-primitives` collapses IC's own canon/proving-ground boundary by making current BKC/Octo materialization part of primitive definition | resolved-via-ADR-memory-layer-model-constitutional-operational-split |
| F-009 | should-be-split | S2 | important | content | canon-review-v2 | round-ic-memory-governance-boundaries | docs/foundations/memory-layer-model.md | IC's governance-memory surfaces currently collapse constitutional identity, operational process, planning, and promoted research into one undifferentiated "constitutional layer." `memory-layer-model.md` and `project-learning-membrane.md` both describe patterns, protocols, research artifacts, roadmaps, and eval contracts as part of governance memory, even though the local taxonomy and the governance-process research treat constitutional and operational layers as distinct | resolved-via-ADR-memory-layer-model-constitutional-operational-split |
| F-010 | contradictory | S3 | important | content | canon-review-v2 | round-cross-repo-vision-alignment | docs/project-vision.md | `ic.project-vision` carries two incompatible maps of IC's neighboring systems |  |
| F-011 | wrong-level | S3 | important | content | canon-review-v2 | round-ic-memory-governance-boundaries | docs/research/canon-decisions/0003-boundary-theory-unifier.md | Accepted ADR `0003-boundary-theory-unifier` fossilizes a non-canonical memory-layer stack by naming the between-layer surface as `Working ↔ Session ↔ Procedural ↔ Semantic ↔ Governance` | resolved-via-ADR-boundary-theory-unifier-retraction |
| F-012 | contradictory | S3 | important | content | canon-review-v2 | round-ic-adr-trace-integrity | docs/research/canon-decisions/0004-three-layer-coordination-stack.md | Accepted ADR `0004-three-layer-coordination-stack` breaks the source-to-change trace its own protocol requires | resolved-via-ADR-three-layer-coordination-stack-trace-repair |
| F-013 | contradictory | S3 | important | content | canon-review-v2 | round-ic-adr-trace-integrity | collective-agency | Accepted ADR `0006-collective-agency-declination` defends its reject disposition by appealing to a seven-primitive architecture that is not actually IC's | resolved-via-ADR-collective-agency-declination-rationale-repair |
| F-014 | contradictory | S3 | important | content | canon-review-v2 | round-pm-vocabulary-contract | decentralization-theater | `pm.project-vision` now uses the phrase "decentralized matching system" in its own research questions, but `pm:ADR-0005-decentralization-myth-bundle` rejected the PM-side decentralization critique precisely because PM canon supposedly used none of that vocabulary |  |
| F-015 | misplaced | S3 | important | content | canon-review-v2 | round-pm-vocabulary-contract | curation-valuation-limitation-exchange | PM has canonized `CVLE`/`pool-substrate` as its production-layer semantics in `project-vision.md`, but the bridge-note review claim and ADR rationale both place that substance at the grammar layer, and `pm:ADR-0004` explicitly left `pm.grammar` and `pm.protocol` untouched |  |
| F-016 | missing | S3 | important | content | canon-review-v2 | round-pm-vocabulary-contract | medium-integrity-governance | `pm.protocol` now says stigmergic coordination requires three governance surfaces, but it only concretely places two of them |  |
| F-017 | contradictory | S3 | important | content | canon-review-v2 | round-pm-vocabulary-contract | consent-scope | `downstream-products.md` advertises `pm:Visibility` as part of the imported PM type surface, but PM canon names visibility through `pm:ConsentPolicy` / "consent scope" instead |  |
| F-018 | wrong-level | S3 | deferred | meta-corpus | foundational-reframing |  | docs/downstream-products.md | PM canon scope currently special-cases `docs/downstream-products.md` into the canon layer even though the shared protocol defines canon as normative self-description and excludes governance/operational docs |  |
| F-019 | wrong-level | S3 | important | meta-corpus | foundational-reframing |  | commitment-bundles | `phase-0-spec.md` is an implementation plan explicitly excluded from PM canon, yet the review inventory still places it in the `poietic-match:` canon-layer set and the concept roster credits it as the introducing doc for `commitment-bundles` |  |
| F-020 | should-be-merged | S3 | important | content | foundational-reframing |  | knowledge-graph / epistemic-graph | Spore currently carries one graph surface under two canonical concept names | resolved-via-ADR-0019 |
| F-021 | should-be-split | S2 | blocking | content | canon-review-v2 | round-cross-repo-concept-splits | intent | `intent` drifts across repos from a lightweight coordination signal into a protocol object with materially different semantics | resolved-via-ADR-0013 |
| F-022 | should-be-split | S2 | blocking | content | canon-review-v2 | round-cross-repo-concept-splits | evidence | `evidence` is being used for two different families of work without an explicit sub-type boundary | resolved-via-ADR-0013 |
| F-023 | overlapping/redundant | S1 | blocking | content | canon-review-v2 | round-field-holon-clarification | field / holon | `field` and `holon` remain under-differentiated across current canon | resolved-via-ADR-0016 |
| F-024 | naming-wrong | S4 | deferred | content | editorial |  | decentralization-theater | The corpus now carries both `decentralization-theater` and `decentralisation-theater` as if they were distinct concepts |  |
| F-025 | missing | S2 | blocking | meta-corpus | foundational-reframing |  | docs/research/planning/canon-review-protocol.md | The canon-review protocol is self-harvested and self-amended by the same round-execution machinery it governs, but it carries no separate constitutional-amendment rule, cooling-off period, or heightened threshold for editing itself | resolved-via-ADR-0011 |
| F-026 | missing | S2 | important | meta-corpus | foundational-reframing |  | docs/research/planning/canon-review-protocol.md | The canon-review protocol defines dispositions (`edit`, `hold-as-tension`, `reject`) and held-tension overlap checks, but it does not define a post-adoption dissent or appeal path if an ADR is challenged after landing | resolved-via-ADR-0011 |
| F-027 | missing | S2 | important | meta-corpus | foundational-reframing |  | moratorium-mechanics | Moratorium mechanics are carrying governance weight but still exist only as plan-embedded rules rather than as a stable formal artifact | resolved-via-ADR-0021 |
| F-028 | wrong-level | S3 | important | meta-corpus | foundational-reframing |  | docs/research/concepts-p2p-wiki.yaml | The frozen vocabulary artifact is still declared as a P2P wiki intake bridge-note vocabulary, but Phase 4 and canon-review v2 are using it as cross-project governance infrastructure that determines which ADRs, canon edits, and shared framing notes are even legal | resolved-via-ADR-0022 |
| F-029 | misplaced | S2 | important | meta-corpus | foundational-reframing |  | learning-field | The learning-field structure is in scope as a meta-corpus dependency for Spore's review machinery, but its defining artifact currently lives as an IC pattern doc rather than as a Spore-hosted protocol or other formal governance artifact alongside the protocol pair that claims to govern intake/canon flow across Spore, IC, and PM | resolved-via-ADR-0024 |
| F-030 | missing | S3 | important | meta-corpus | foundational-reframing |  | spore | The operative meta-corpus protocols and bridge-note format describe purpose, flow, and schema, but they do not explicitly declare intended audience or prerequisites even though the methodology assumes a narrow audience that can inspect all three repos and already understands canon-review conventions | resolved-via-ADR-0023 |
| F-031 | contradictory | S3 | deferred | meta-corpus | foundational-reframing |  | scripts/validate_spec_dag.py | The ADR status vocabulary is internally contradictory across the meta-corpus | resolved-via-ADR-0012 |
| F-032 | misplaced | S3 | important | bridge-note | canon-review-v2 | round-bridge-note-inventory-boundary | tmp/bridge-note-inventory.tsv | The bridge-note inventory currently mixes non-bridge-note artifacts into the bridge-note corpus |  |
| F-033 | contradictory | S3 | blocking | bridge-note | canon-review-v2 | round-bridge-note-corpus-normalization | N/A | The bridge-note corpus is not serialized in the Phase 4 / canon-review bridge-note R-claim format |  |
| F-034 | contradictory | S3 | blocking | bridge-note | canon-review-v2 | round-bridge-note-corpus-normalization | N/A | Thirty bridge notes use review-claim concept slugs outside the frozen v2 P2P-wiki vocabulary, despite the frozen-vocabulary rule explicitly forbidding new slugs without a version bump |  |
| F-035 | dead-weight | S3 | important | content | canon-review-v2 | round-primitive-roster-boundaries | instance-model / spore-instance-model / intelligence-primitives / memory-layer-model | Four primitive-class entries are bundle-label handles rather than irreducible concepts |  |
| F-036 | over-specified | S3 | important | content | canon-review-v2 | round-primitive-roster-boundaries | koi-net | `koi-net` is primitive-class in the roster, but every canonical use sampled treats it as the current implementation of substrate and transport concerns that are already expressible through other concepts |  |
| F-037 | missing | S2 | blocking | repo-topology | foundational-reframing |  | N/A | Spore/IC/PM is already operating as a three-repo shared-canon hybrid, but that topology is still policy-by-practice rather than a ratified constitutional choice | resolved-via-ADR-0020 |
| F-038 | overlapping/redundant | S2 | important | repo-topology | foundational-reframing |  | shared-canon layer | The current topology duplicates a common concept layer across three repos without a single authoritative source for those cross-project terms | resolved-via-ADR-0020 |
| F-039 | missing | S2 | blocking | repo-topology | foundational-reframing |  | merge-governance | The three-repo topology has a blocking operational governance gap at the merge boundary | resolved-via-ADR-0020 |

## Findings detail

```yaml
- finding-id: F-001
  source-passes:
  - P4-1a-001
  type: contradictory
  severity: S3
  priority: blocking
  corpus-location: content
  target:
    repo: spore
    doc: docs/research/canon-decisions/README.md
    concept: N/A
    line_range: 23-25
  claim: |-
    The ADR README gives Spore-local authoring guidance in protocol-level lifecycle terms (`proposed`, `accepted`, `partial-drift`) without the Spore-specific status mapping that current ADR execution actually requires. In this repo, active ADRs must map `proposed -> draft` and `accepted -> active` because the validator only accepts the frontmatter enum used elsewhere in Spore governance. Leaving the README unqualified makes the per-repo ADR authoring surface self-contradictory at the point where Phase 7 authors will look first.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/README.md:23-25
    excerpt: '`proposed` -> `accepted` ... `superseded` ... `partial-drift` ...'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:366-366
    excerpt: v2 mapping ... `proposed -> draft`, `accepted -> active`.
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/0002-reproduction-primacy.md:5-7
    excerpt: "Mapping protocol \xA73 lifecycle state \\\"proposed\\\" to validator-compatible \\\"draft\\\"; transitions to \\\"active\\\" at accept."
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/governance/agent-commons-meta-protocol.md:122-127
    excerpt: 'Status transitions: `draft` -> `active` -> `deprecated` or `superseded`.'
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies:
  - F-031
  notes: Local authoring-surface manifestation of the broader ADR status-vocabulary contradiction in F-031.
- finding-id: F-002
  source-passes:
  - P4-1a-002
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/governance/quickstart.md
    concept: doc_kind
    line_range: 42-46
  claim: |-
    `quickstart.md` publishes a `doc_kind` value set that no longer matches the rest of Spore's governance canon. It uses `foundations` (plural) and includes `protocol` and `guidance`, while omitting active taxonomy members such as `pattern`, `positioning`, `roadmap`, and `decision-record`. Because the table presents these as the required values for governed docs, the onboarding surface now points new authors at a taxonomy that diverges from the meta-protocol, adoption guide, and current ADR corpus.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/governance/quickstart.md:42-46
    excerpt: '`doc_kind` ... `vision`, `architecture`, `foundations`, `spec`, `protocol`, `guidance`, `research`, `operations`'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/governance/agent-commons-meta-protocol.md:17-27
    excerpt: '`foundation` ... `spec` ... `pattern` ... `roadmap` ... `positioning`'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/governance/adoption-guide.md:152-155
    excerpt: '`vision`, `foundation`, `architecture`, `spec`, `operations`, `research`, `positioning`, `pattern`, `roadmap`'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/0006-polycentric-governance-at-holarchy.md:1-3
    excerpt: 'doc_kind: decision-record'
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: Overlaps P4.3 on governance-taxonomy / validator-enforcement drift.
- finding-id: F-003
  source-passes:
  - P4-1a-003
  type: missing
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/synthesis/coordination-grammar.md
    concept: field
    line_range: 52-67
  claim: |-
    `coordination-grammar.md` still presents a ten-primitive core that excludes `field`, even though active Spore canon keeps `field` as a current primitive and gives it a dedicated foundation entry defining the shared, learning, and relational field as the distributed medium of coordination. The capstone likewise treats `field` as a canon term to keep, not demote. Because this synthesis doc claims to enumerate the grammar's first-class objects, the omission now misstates the active primitive set rather than merely simplifying it.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md:52-67
    excerpt: Ten coordination primitives. Each is a first-class object in the grammar.
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/lexicon/field.md:23-39
    excerpt: A distributed relational medium ... the same underlying structure instantiated at different scales
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:97-100
    excerpt: '`field` | glossary clarification | current canon term | Keep primitive'
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:161-164
    excerpt: '`Field` ... `Verdict`: keep; a defensible commitment pulling Spore toward the social-ecological pole.'
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: Likely overlaps P4.2 on cross-doc primitive comparison.
- finding-id: F-004
  source-passes:
  - P4-1a-004
  type: wrong-level
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/synthesis/coordination-grammar.md
    concept: care
    line_range: 46-49
  claim: |-
    The synthesis grammar still collapses care into the intent phase, saying that Ruddick's explicit care phase is "carried by Intent." Current Spore canon after reproduction-primacy does not make that move: `relational-agency-and-holons.md` names care as the primary coordinating practice of field reproduction, and the capstone explicitly says care cannot be paraphrased by the symmetric intent/commitment stack. Keeping the older gloss in the grammar doc reclassifies care at the wrong ontological level and reintroduces exactly the reduction that the review's care-primacy prior is meant to guard against.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md:46-49
    excerpt: Ruddick's loop foregrounds `caring` ... In Spore, this is carried by Intent
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/relational-agency-and-holons.md:48-52
    excerpt: The primary coordinating practice in a field is care ... Coordination emerges from care.
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:128-128
    excerpt: '`care primacy` | Reproduction and care are constitutive of coordination'
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:61-64
    excerpt: 'Paraphrase test: fails ... Spore''s primitives are symmetric; care is not.'
  proposed-resolution-track: canon-review-v2
  prior-collision-check:
  - care primacy
  dependencies: []
  notes: Likely overlaps P4.5 because it bears on primitive-class treatment for `care`.
- finding-id: F-005
  source-passes:
  - P4-1a-005
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/synthesis/coordination-grammar.md
    concept: artifact lifecycle
    line_range: 137-141
  claim: |-
    `coordination-grammar.md` publishes an artifact lifecycle of `draft -> active -> amended -> deprecated -> forked`, citing governance-memory as its source. That lifecycle is not the operative one in current Spore governance. `governance-memory.md` itself only names `draft`, `active`, and `deprecated`, while the meta-protocol makes `superseded` first-class. The synthesis layer therefore exposes a status model that matches neither its cited source nor the repo's active governance semantics.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md:137-141
    excerpt: '`draft --> active --> amended --> deprecated --> forked`'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/patterns/governance-memory.md:33-38
    excerpt: '`status`: Lifecycle state -- `draft`, `active`, `deprecated`.'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/governance/agent-commons-meta-protocol.md:122-127
    excerpt: 'Status transitions: `draft` -> `active` -> `deprecated` or `superseded`.'
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies:
  - F-031
  notes: Doc-level lifecycle drift sits on the same status-vocabulary split captured in F-031.
- finding-id: F-006
  source-passes:
  - P4-1a-006
  type: missing
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/project-vision.md
    concept: audience declaration
    line_range: 8-16
  claim: |-
    The root vision doc still has no explicit audience / scope declaration. Reader-scoping research and the capstone both identify this as a concrete behind-the-field gap, and the methodology has to supply a narrow intended audience separately because the canonical layer does not. Since `project-vision.md` is the root of the spec DAG and the main reader-entry surface, leaving its prerequisites and audience assumptions implicit keeps a core interpretive boundary outside the canon itself.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/project-vision.md:8-16
    excerpt: Spore is an infrastructure for collective agency ... Coordination at every scale and scope requires the same primitives
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:215-219
    excerpt: Spore does not declare its audience explicitly anywhere in its canonical layer.
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-audience-scoping.md:15-21
    excerpt: IEEE 1063 ... if one document addresses multiple audiences, it should either use separate sections ...
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:118-120
    excerpt: The current audience is `solo-operator -> active contributors across Spore / Intelligence Commons / Poietic Match`.
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: Overlaps P4.3 on audience / reader-scoping machinery.
- finding-id: F-007
  source-passes:
  - P4-1a-007
  type: contradictory
  severity: S3
  priority: deferred
  corpus-location: content
  target:
    repo: spore
    doc: docs/synthesis/decision-memo.md
    concept: N/A
    line_range: 337-341
  claim: |-
    `decision-memo.md` still frames already-landed canon work as pending "next session" tasks: adding discourse graph to the vision, writing a relay protocol doc, and writing a claims/evidence/attestation protocol doc. Those surfaces now exist in active Spore docs. As an in-scope canon-layer synthesis artifact, the memo therefore functions as stale action guidance unless it is explicitly archived, superseded, or reframed as historical record rather than current direction.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md:337-341
    excerpt: Revise `project-vision.md` ... Write store-and-forward relay protocol doc ... Write claims/evidence/attestation anchoring protocol doc
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/project-vision.md:97-108
    excerpt: We have identified eight graph projections so far ... `Discourse graph` ...
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/protocols/store-and-forward-relay.md:1-11
    excerpt: '# Store-and-Forward Relay ... extracted here because the relay pattern is reusable'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/protocols/claims-evidence-attestation.md:1-11
    excerpt: '# Claims, Evidence, and Attestation Anchoring'
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: Overlaps P4.3 on synthesis-layer archival / inventory hygiene.
- finding-id: F-008
  source-passes:
  - P4-1b-001
  type: misplaced
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/foundations/intelligence-primitives.md
    concept: N/A
    line_range: 11-23
  claim: |-
    `ic.intelligence-primitives` collapses IC's own canon/proving-ground boundary by making current BKC/Octo materialization part of primitive definition. The repo's vision says software-essential content belongs in BKC, but the foundation surface bakes in live implementation choices, model names, and current production metrics as part of the canonical primitive write-up. The correct state is a stable primitive definition in IC canon with pointer-level references to BKC materializations, not repeated proving-ground detail embedded in the foundation layer.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:26-26
    excerpt: if a concept mentions specific software ... it belongs in BKC.
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:11-11
    excerpt: Each primitive is defined with its Spore grammar derivation ... and its current BKC materialization
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:74-74
    excerpt: The semantic roadmap ... is governance memory for project planning. The eval contract ... for quality standards.
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:14-18
    excerpt: separate the domain from its machinery
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
- finding-id: F-009
  source-passes:
  - P4-1b-002
  type: should-be-split
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/foundations/memory-layer-model.md
    concept: N/A
    line_range: 65-74
  claim: |-
    IC's governance-memory surfaces currently collapse constitutional identity, operational process, planning, and promoted research into one undifferentiated "constitutional layer." `memory-layer-model.md` and `project-learning-membrane.md` both describe patterns, protocols, research artifacts, roadmaps, and eval contracts as part of governance memory, even though the local taxonomy and the governance-process research treat constitutional and operational layers as distinct. The correct state is an explicit split, or at minimum named sub-strata, inside Layer 5 so constitutional canon is not conflated with process, planning, and quality-control artifacts.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:67-74
    excerpt: 'Constitutional artifacts: project vision, architecture docs, pattern language ... The eval contract ... for quality standards.'
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:77-79
    excerpt: vision docs, foundations, patterns, protocols, decision records, and promoted research artifacts. This is the constitutional layer.
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:48-54
    excerpt: '`foundations/` ... Core primitives ... `governance/` ... operating rules ... `research/` ... bridge notes.'
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:42-42
    excerpt: Constitutional vs. operational rules ... primary defense against executive self-entrenchment.
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: possible cross-pass dup with P4-3 on constitutional-vs-operational separation in meta-corpus machinery; consolidator to reconcile.
- finding-id: F-010
  source-passes:
  - P4-1b-003
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/project-vision.md
    concept: N/A
    line_range: 18-24
  claim: |-
    `ic.project-vision` carries two incompatible maps of IC's neighboring systems. Its sibling-project table says the three-repo learning architecture is Spore / IC / BKC, but the same vision later names PM as the federated production-layer surface, and the review corpus now treats the writable shared-canon topology as Spore / IC / PM while leaving BKC and koi-processor in proving-ground or analysis-only roles. The correct state is to distinguish canonical sibling repos from proving-ground systems explicitly rather than mixing them in one "three repos" claim.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:18-24
    excerpt: Three repos form a learning architecture
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:68-70
    excerpt: PM's grammar and protocol
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:138-140
    excerpt: 'three active repos as writable scope: Spore, Intelligence Commons, and Poietic Match'
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:201-203
    excerpt: Spore/IC/PM is a three-repo shared-canon hybrid
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies:
  - F-037
  notes: Kept separate from F-037 because this is a doc-level contradiction inside IC vision, not the topology decision gap itself.
- finding-id: F-011
  source-passes:
  - P4-1b-004
  type: wrong-level
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/research/canon-decisions/0003-boundary-theory-unifier.md
    concept: N/A
    line_range: 7-10
  claim: "Accepted ADR `0003-boundary-theory-unifier` fossilizes a non-canonical memory-layer stack by naming the between-layer surface as `Working \u2194 Session \u2194 Procedural \u2194 Semantic \u2194 Governance`. The active IC model explicitly says procedural is a cross-cutting content type, not an additional layer, and the pilot keeps any promotion of procedural memory to layer-status as an open review question. The correct state is for the ADR trace text to align with the five-layer model or explicitly mark the procedural-layer phrasing as superseded."
  evidence:
  - kind: adr-rationale
    ref: /Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0003-boundary-theory-unifier.md:7-10
    excerpt: "(Working \u2194 Session \u2194 Procedural \u2194 Semantic \u2194 Governance)"
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:131-137
    excerpt: These are not additional layers.
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:97-103
    excerpt: This pattern does not introduce new memory layers.
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/learning-field/synthesis/agentic-memory-pilot-v1.md:156-159
    excerpt: Consider promoting procedural memory ... to a named axis or layer.
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
- finding-id: F-012
  source-passes:
  - P4-1b-005
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/research/canon-decisions/0004-three-layer-coordination-stack.md
    concept: N/A
    line_range: 7-15
  claim: |-
    Accepted ADR `0004-three-layer-coordination-stack` breaks the source-to-change trace its own protocol requires. Its frontmatter `r_claim_statement` records a primitive-level ask for an `intelligence-primitives` memory-governance subsection, but the ADR's actual decision edits only `project-vision.md` and explicitly defers primitive-level work to a follow-on. Because the ADR format treats the frontmatter claim as the primary verbatim source trace, this mismatch leaves the canonical record ambiguous about what claim the ADR actually resolved. The correct state is to align the primary recorded claim with the project-vision edit or demote the primitive-level ask to secondary evidence context.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:79-85
    excerpt: 'r_claim_statement: <verbatim R-claim text; primary only>'
  - kind: adr-rationale
    ref: /Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0004-three-layer-coordination-stack.md:7-15
    excerpt: IC's `intelligence-primitives` should name memory governance as a cross-cutting architectural concern
  - kind: adr-rationale
    ref: /Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0004-three-layer-coordination-stack.md:47-59
    excerpt: Land one additive paragraph in `docs/project-vision.md`
  - kind: adr-rationale
    ref: /Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0007-memory-governance-as-cross-cutting-primitive.md:48-56
    excerpt: Add one new top-level section to `docs/foundations/intelligence-primitives.md`
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
- finding-id: F-013
  source-passes:
  - P4-1b-006
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/research/canon-decisions/0006-collective-agency-declination.md
    concept: collective-agency
    line_range: 30-37
  claim: |-
    Accepted ADR `0006-collective-agency-declination` defends its reject disposition by appealing to a seven-primitive architecture that is not actually IC's. The rationale substitutes `memory-governance` and its moments for the canon's real seven primitives, even though IC's vision still names Retrieval, Memory, Evidence, Grounding, Evaluation, Agentic Control, and Capability Routing, and ADR `0007` explicitly says memory-governance is cross-cutting rather than an eighth primitive. The reject disposition may still stand, but the rationale is canonically unreliable as written and should be recast using the actual primitive set.
  evidence:
  - kind: adr-rationale
    ref: /Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0006-collective-agency-declination.md:30-37
    excerpt: seven specific primitives (memory-governance, attribution, provenance, preservation, access, curation, synthesis
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:56-66
    excerpt: 1. Retrieval ... 7. Capability Routing
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:87-91
    excerpt: Memory governance is a cross-cutting architectural concern ... applies across all seven primitives above.
  - kind: adr-rationale
    ref: /Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0007-memory-governance-as-cross-cutting-primitive.md:48-56
    excerpt: The new section is cross-cutting discipline, not an eighth primitive.
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
- finding-id: F-014
  source-passes:
  - P4-1c-001
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: poietic-match
    doc: docs/project-vision.md
    concept: decentralization-theater
    line_range: 149-149
  claim: |-
    `pm.project-vision` now uses the phrase "decentralized matching system" in its own research questions, but `pm:ADR-0005-decentralization-myth-bundle` rejected the PM-side decentralization critique precisely because PM canon supposedly used none of that vocabulary. The corpus therefore carries a live contradiction: PM both says the antecedent never fires and uses the antecedent term in PM-authored canon. Phase 7 needs either to rename the question into PM's own non-decentralization vocabulary or to supersede `pm:ADR-0005` and land the declination work that ADR said would become necessary once the term appeared.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/project-vision.md:143-150
    excerpt: How do you prevent gaming, manipulation, and dark patterns in a decentralized matching system?
  - kind: adr-rationale
    ref: /Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0005-decentralization-myth-bundle.md:33-35
    excerpt: contain **zero** instances of \"decentralization,\" \"decentralized,\" \"peer-to-peer,\" \"P2P,\" or \"peer production\" as PM-authored vocabulary.
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:364-364
    excerpt: PM canon does not use \"decentralized\" or \"peer-to-peer\" vocabulary where those terms inherit the bundle without explicit acknowledgement.
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
- finding-id: F-015
  source-passes:
  - P4-1c-002
  type: misplaced
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: poietic-match
    doc: docs/project-vision.md
    concept: curation-valuation-limitation-exchange
    line_range: 46-52
  claim: |-
    PM has canonized `CVLE`/`pool-substrate` as its production-layer semantics in `project-vision.md`, but the bridge-note review claim and ADR rationale both place that substance at the grammar layer, and `pm:ADR-0004` explicitly left `pm.grammar` and `pm.protocol` untouched. The result is a layer-placement drift: the load-bearing substrate claim lives in motivational vision prose while the implementation-facing canon still lacks the first-order operation family it is supposed to govern.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/project-vision.md:46-52
    excerpt: CVLE (curation-valuation-limitation-exchange) is PM's first-order metabolic-operations substrate
  - kind: cross-tradition-citation
    ref: /Users/darrenzal/projects/poietic-match/docs/research/connections/commitment-pooling-and-mutual-credit.md:136-138
    excerpt: PM's grammar should explicitly adopt the CVLE four-function substrate
  - kind: adr-rationale
    ref: /Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0004-three-layer-coordination-stack.md:52-61
    excerpt: '`pm.grammar` and `pm.protocol` are NOT edited by this ADR.'
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:340-348
    excerpt: CVLE valuations (pool-internal curation/valuation/limitation/exchange records)
  proposed-resolution-track: canon-review-v2
  prior-collision-check:
  - commons-over-market
  dependencies: []
- finding-id: F-016
  source-passes:
  - P4-1c-003
  type: missing
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: poietic-match
    doc: docs/protocol.md
    concept: medium-integrity-governance
    line_range: 352-364
  claim: |-
    `pm.protocol` now says stigmergic coordination requires three governance surfaces, but it only concretely places two of them. Surface (1), medium-integrity governance, is declared necessary and then deferred to "future medium-integrity canon". Because the same section says missing surface (1) reproduces decentralization theatre, PM currently canonizes the requirement and the failure mode without carrying the corresponding governance surface.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:354-364
    excerpt: "\xA78 (Federation) and future medium-integrity canon carry the medium-integrity governance surface."
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-coordination-substrate.md:41-45
    excerpt: Stigmergic coordination primitives, in both Spore and PM canon, must name three governance surfaces
  - kind: cross-tradition-citation
    ref: /Users/darrenzal/projects/poietic-match/docs/research/connections/commitment-pooling-and-mutual-credit.md:140-142
    excerpt: PM's protocol should import Ostrom's unit-level / system-level governance distinction
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/project-vision.md:50-50
    excerpt: commons-law ladder applies at cross-bioregion federation.
  proposed-resolution-track: canon-review-v2
  prior-collision-check:
  - polycentric-not-hierarchical
  dependencies: []
- finding-id: F-017
  source-passes:
  - P4-1c-004
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: poietic-match
    doc: docs/downstream-products.md
    concept: consent-scope
    line_range: 23-23
  claim: |-
    `downstream-products.md` advertises `pm:Visibility` as part of the imported PM type surface, but PM canon names visibility through `pm:ConsentPolicy` / "consent scope" instead. Because this registry exists to notify downstreams about protocol breakage and version pins, the stale type name makes PM's only downstream-facing compatibility surface unreliable at exactly the point it is supposed to stabilize.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/downstream-products.md:21-28
    excerpt: 'Imported types: `pm:Intent`, `pm:Subject`, `pm:ConstraintSet`, `pm:Agent`, `pm:Visibility`'
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/grammar.md:26-33
    excerpt: 'consent:        pm:ConsentPolicy         # who can see, who can match'
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:37-40
    excerpt: 'consent:   pm:ConsentPolicy     # who can discover this intent'
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/project-vision.md:22-26
    excerpt: 'Consent scope: who can see this intent, who can propose matches'
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
- finding-id: F-018
  source-passes:
  - P4-1c-005
  type: wrong-level
  severity: S3
  priority: deferred
  corpus-location: meta-corpus
  target:
    repo: poietic-match
    doc: docs/downstream-products.md
    concept: N/A
    line_range: 1-15
  claim: |-
    PM canon scope currently special-cases `docs/downstream-products.md` into the canon layer even though the shared protocol defines canon as normative self-description and excludes governance/operational docs. The document's own frontmatter and context describe it as a governance registry for notification-on-breakage, not as PM's normative self-description. Keeping it in the canon layer blurs PM's self-description with downstream-operations bookkeeping.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:16-16
    excerpt: governance, positioning, protocols, and operational docs are NOT canon for the purposes of this protocol.
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/downstream-products.md:2-15
    excerpt: 'doc_kind: governance ... This doc is the informational registry of known consumers.'
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/README.md:13-18
    excerpt: '- `docs/project-vision.md`, `docs/downstream-products.md`'
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/corpus-inventory.tsv:22-22
    excerpt: poietic-match/docs/downstream-products.md\tpoietic-match:extended\t30\t2026-04-13\tTRUE\t0
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
  notes: Likely overlaps P4.3 on canon-scope / inventory-layer drift; consolidator should dedupe there.
- finding-id: F-019
  source-passes:
  - P4-1c-006
  type: wrong-level
  severity: S3
  priority: important
  corpus-location: meta-corpus
  target:
    repo: poietic-match
    doc: docs/phase-0-spec.md
    concept: commitment-bundles
    line_range: 24-33
  claim: |-
    `phase-0-spec.md` is an implementation plan explicitly excluded from PM canon, yet the review inventory still places it in the `poietic-match:` canon-layer set and the concept roster credits it as the introducing doc for `commitment-bundles`. The document itself defers commitment bundles to Phase 1 and then spends the rest of its body on implementation order, tests, stack choices, and coding tasks. That lets an out-of-scope implementation snapshot function as the canonical origin point for a PM primitive.
  evidence:
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/corpus-inventory.tsv:24-24
    excerpt: poietic-match/docs/phase-0-spec.md\tpoietic-match:extended\t73\t2026-04-11\tTRUE\t0
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/concept-roster.tsv:56-56
    excerpt: commitment-bundles\tpoietic-match/docs/phase-0-spec.md\tpoietic-match/docs/project-vision.md\t7\tpoietic-match:extended\tTRUE
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/README.md:20-20
    excerpt: "`docs/phase-0-spec.md` is implementation spec, NOT canon \u2014 excluded from canon-review scope."
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/phase-0-spec.md:23-33
    excerpt: Phase 1 | Commitment bundles (compositional multi-party matching)
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/phase-0-spec.md:294-347
    excerpt: Implementation Order ... `src/pm/models.py` ... `tests/test_models.py` ... This is the first coding task.
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
  notes: Likely overlaps P4.3 on canon-layer inventory drift; consolidator should dedupe there.
- finding-id: F-020
  source-passes:
  - P4-2-001
  - P4-5-001
  type: should-be-merged
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: N/A
    concept: knowledge-graph / epistemic-graph
    line_range: N/A
  claim: |-
    Spore currently carries one graph surface under two canonical concept names. `project-vision.md` still uses `knowledge graph`, while foundation and synthesis surfaces treat `epistemic graph` as the more precise replacement and the concept roster still retains both as primitive-class entries. The corpus does not defend these as distinct projections, and the counterfactual probe succeeds in both directions: either term can be removed without losing expressivity once the other remains. The correct state is one canonical concept with the second term retained only as alias or legacy gloss, not as a separate primitive-class entry.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/project-vision.md:101-105
    excerpt: "\\\"Knowledge graph\\\" \u2014 entities, claims, evidence, provenance, sensor outputs (the epistemic substrate...)"
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/constitutional-artifacts-and-graph-projections.md:58-58
    excerpt: \"Epistemic graph\" (called \"knowledge graph\" in the vision and public-facing docs)
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md:179-181
    excerpt: Vision calls it \"knowledge graph.\" ... \"Epistemic graph\" is more precise
  - kind: inventory-row
    ref: '/Users/darrenzal/projects/spore/tmp/concept-roster.tsv row 132: "epistemic-graph"; row 206: "knowledge-graph"'
    excerpt: \"epistemic-graph ... 7\" / \"knowledge-graph ... 20\"
  - kind: inventory-row
    ref: concept-roster.tsv row 132 (primitive-class=TRUE)
    excerpt: epistemic-graph
  - kind: inventory-row
    ref: concept-roster.tsv row 206 (primitive-class=TRUE)
    excerpt: knowledge-graph
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/project-vision.md:174-174
    excerpt: node substrate (knowledge graph, entity resolution, federation, sensors)
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/lexicon/field.md:97-99
    excerpt: The term helps relate Spore's coordination patterns, epistemic graph, and learning membrane
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md:183-183
    excerpt: This is the \"knowledge graph\" from the vision doc, renamed to emphasize its epistemological function
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
  notes: Merged the cross-doc naming drift and counterfactual duplicate-primitive finding. Severity normalized to S3 because the combined evidence set is internal-only and does not meet the S2 external-evidence bar.
- finding-id: F-021
  source-passes:
  - P4-2-002
  type: should-be-split
  severity: S2
  priority: blocking
  corpus-location: content
  target:
    repo: N/A
    doc: N/A
    concept: intent
    line_range: N/A
  claim: |-
    `intent` drifts across repos from a lightweight coordination signal into a protocol object with materially different semantics. In Spore and IC, intent is a pre-commitment directional signal, including inferred intent and routing intent; in PM, `pm:Intent` is a durable published record with consent policy, lifecycle, embedded subject model, and attached evidence. That is a layer shift from primitive verb/signal to schema-bearing protocol artifact without a namespace distinction, so the corpus currently uses one slug for two different ontological jobs.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/constitutional-artifacts-and-graph-projections.md:36-39
    excerpt: An intent is a declared or inferred directional signal
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:81-81
    excerpt: A query's taxonomy ... is an Intent signal
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/grammar.md:23-33
    excerpt: The atomic unit of the matching field ... evidence ... consent ... lifecycle
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:48-52
    excerpt: Intent data is stored on the publishing node only ... announced ... to peers
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-rea-valueflows.md:40-40
    excerpt: \"Intent ... usually with only one agent associated\" ... \"one half of a commitment\"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: Possible overlap with P4.1b/P4.1c; PM and IC per-doc passes may record the local halves of the same split separately.
- finding-id: F-022
  source-passes:
  - P4-2-003
  type: should-be-split
  severity: S2
  priority: blocking
  corpus-location: content
  target:
    repo: N/A
    doc: N/A
    concept: evidence
    line_range: N/A
  claim: |-
    `evidence` is being used for two different families of work without an explicit sub-type boundary. Spore and IC use evidence as the broad epistemic relation that bears on claims through provenance, support, challenge, and attestation. PM uses the same term primarily for fulfillment history and post-commitment trust updates. Those are related, but not interchangeable: one is general claim warrant, the other is execution trace feeding trust accumulation. The corpus currently collapses them under one slug while the capstone review explicitly warns against narrowing `evidence` to execution-attestation alone.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:39-43
    excerpt: \"Structured provenance linking claims to observations\" ... `supports`/`challenges`
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/protocols/claims-evidence-attestation.md:15-17
    excerpt: Evidence accumulates for and against them
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/grammar.md:124-141
    excerpt: \"evidence-grounded\" ... \"Accumulated from fulfilled commitments, not declared\"
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:234-259
    excerpt: Fulfillment generates evidence that updates the trust field
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone-review.md:99-99
    excerpt: \"attestation-of-execution\" is too narrow a rename for `evidence`
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: Cross-pass dedupe candidate with P4.3 because the capstone/review pair independently flags the same narrowing pressure in the meta-corpus.
- finding-id: F-023
  source-passes:
  - P4-2-004
  type: overlapping/redundant
  severity: S1
  priority: blocking
  corpus-location: content
  target:
    repo: N/A
    doc: N/A
    concept: field / holon
    line_range: N/A
  claim: |-
    `field` and `holon` remain under-differentiated across current canon. `holon` names the recursive whole/part agent structure; `field` names the recursive distributed substrate or arrangement; but the canon repeatedly uses both to describe the same self-similar, multi-scale coordination structure. The capstone flags the ambiguity directly, and the current canon still does not specify whether a field is the next-scale view of a holon, the exterior relational medium around a holon, or a genuinely distinct primitive. That makes representation choices unstable at exactly the primitive-class layer where downstream modeling work needs a crisp distinction.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/relational-agency-and-holons.md:15-18
    excerpt: A holon is simultaneously ... a whole ... a part nested within a larger whole
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/constitutional-artifacts-and-graph-projections.md:67-69
    excerpt: The same structure at different scales ... deep implication of the holon concept
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/lexicon/field.md:35-39
    excerpt: the same underlying structure instantiated at different scales and for different purposes
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:185-185
    excerpt: A holon at scale N is a field at scale N+1
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone-review.md:165-165
    excerpt: "The holon-vs-field confusion flagged in \xA75 is a real and useful problem statement"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: Cross-pass dedupe candidate with P4.5 because this is a primitive-class relation question, not only a local wording drift. Revision 2 counts `research-capstone.md` and `research-capstone-review.md` as the two external research artifacts required for S1.
- finding-id: F-024
  source-passes:
  - P4-2-005
  type: naming-wrong
  severity: S4
  priority: deferred
  corpus-location: content
  target:
    repo: spore
    doc: docs/foundations/mycorrhizal-federation-protocol.md
    concept: decentralization-theater
    line_range: 60-60
  claim: |-
    The corpus now carries both `decentralization-theater` and `decentralisation-theater` as if they were distinct concepts. The frozen vocabulary, ADR naming, and concept roster canonicalize the US-spelled slug, while the live Spore canon prose introduces the UK-spelled variant. Nothing in the ADR rationale suggests these are intentionally separate; this is duplicate-surface drift created by spelling, not by meaning.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/mycorrhizal-federation-protocol.md:60-60
    excerpt: \"Decentralisation theater\"
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/0005-decentralization-myth-bundle.md:25-25
    excerpt: '- decentralization-theater'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/concepts-p2p-wiki.yaml:242-245
    excerpt: 'slug: decentralization-theater'
  - kind: inventory-row
    ref: '/Users/darrenzal/projects/spore/tmp/concept-roster.tsv row 102: "decentralisation-theater"; row 103: "decentralization-theater"'
    excerpt: \"decentralisation-theater ... 2\" / \"decentralization-theater ... 21\"
  proposed-resolution-track: editorial
  prior-collision-check: none
  dependencies: []
  notes: Likely dedupe with P4.1a if the Spore per-doc pass records the same spelling split locally.
- finding-id: F-025
  source-passes:
  - P4-3-001
  type: missing
  severity: S2
  priority: blocking
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: docs/research/planning/canon-review-protocol.md
    concept: N/A
    line_range: 16-21
  claim: |-
    The canon-review protocol is self-harvested and self-amended by the same round-execution machinery it governs, but it carries no separate constitutional-amendment rule, cooling-off period, or heightened threshold for editing itself. That leaves the protocol-about-protocols exposed to ordinary operational drift: the same process that lands round findings can also rewrite the rule set that authorizes those findings. Governance-process research treats the constitutional/operational split as the main defense against this exact failure mode, and the capstone already identifies the missing guard-text as a Tier 2 meta-corpus issue.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:16-21
    excerpt: v2 (2026-04-18) appended after v1 with 29 rules harvested from running v1.
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:40-42
    excerpt: \"normalization of deviance\" ... The constitutional/operational split is the tradition's primary defense
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:319-320
    excerpt: Spore has no equivalent guard-text. ... add a constitutional-amendment-threshold clause
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
- finding-id: F-026
  source-passes:
  - P4-3-002
  type: missing
  severity: S2
  priority: important
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: docs/research/planning/canon-review-protocol.md
    concept: N/A
    line_range: 137-175
  claim: |-
    The canon-review protocol defines dispositions (`edit`, `hold-as-tension`, `reject`) and held-tension overlap checks, but it does not define a post-adoption dissent or appeal path if an ADR is challenged after landing. That leaves Spore with a rough-consensus-like decision surface and no named escalation authority, veto rule, or review-of-the-review mechanism once conflict moves beyond ordinary evidence tallying. The gap is explicitly flagged in the capstone and is structurally load-bearing in both standards-process and structured-disagreement research.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:170-173
    excerpt: 'First-class dispositions: `edit` ... `hold-as-tension` ... `reject`'
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:24-26
    excerpt: The W3C handles dissent through Formal Objection ... The IETF has ... an appeals ladder
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-structured-disagreement.md:34-38
    excerpt: \"Rebuttal / appeal\" ... Load-bearing and structurally under-theorized.
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:321-321
    excerpt: But no documented escalation path exists if an ADR is disputed post-adoption
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
- finding-id: F-027
  source-passes:
  - P4-3-003
  type: missing
  severity: S2
  priority: important
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: docs/research/planning/corpus-foundational-review-v1-plan.md
    concept: moratorium-mechanics
    line_range: 37-58
  claim: |-
    Moratorium mechanics are carrying governance weight but still exist only as plan-embedded rules rather than as a stable formal artifact. The inventory flags the moratorium row as `has-formal-doc=FALSE`, the plan snapshot contains the operative suspension/exception/audit rules, and the methodology explicitly treats the plan snapshot plus phase addenda as the moratorium surface. That means a cross-phase governance constraint has no standalone doc identity, no dedicated amendment path, and no citation target narrower than the full review plan.
  evidence:
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/meta-corpus-inventory.tsv:6-6
    excerpt: moratorium-mechanics ... moratorium FALSE 2026-04-19
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:37-58
    excerpt: "Canon edits on `main` branches ... are suspended during Phases 2\u20135 ... No amendments to this rule except safety-critical exceptions"
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:107-113
    excerpt: The plan snapshot and phase addenda as the current moratorium and branch-discipline surface.
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:20-20
    excerpt: All traditions require a written artifact authored by a champion.
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
- finding-id: F-028
  source-passes:
  - P4-3-004
  type: wrong-level
  severity: S3
  priority: important
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: docs/research/concepts-p2p-wiki.yaml
    concept: N/A
    line_range: 1-10
  claim: |-
    The frozen vocabulary artifact is still declared as a P2P wiki intake bridge-note vocabulary, but Phase 4 and canon-review v2 are using it as cross-project governance infrastructure that determines which ADRs, canon edits, and shared framing notes are even legal. The file is therefore operating one layer above its self-description: an intake-scoped artifact has become a meta-corpus constraint surface without a correspondingly scoped name, purpose statement, or companion governance doc. This is role-definition drift, not a claim that the frozen slugs themselves are wrong.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/concepts-p2p-wiki.yaml:1-10
    excerpt: '\"purpose: Canonical concept slugs for P2P Foundation wiki intake bridge notes.\"'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:246-250
    excerpt: All `concepts:` entries in ADRs, canon edits, and shared framing notes must be keys present in the frozen concepts-p2p-wiki.yaml v2
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:107-110
    excerpt: '`docs/research/concepts-p2p-wiki.yaml` as frozen-concepts infrastructure.'
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:178-178
    excerpt: \"a layering is a hypothesis about what will vary independently\"
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
  notes: May overlap P4.2 if consolidator merges vocabulary-role drift with cross-doc concept-governance findings.
- finding-id: F-029
  source-passes:
  - P4-3-005
  type: misplaced
  severity: S2
  priority: important
  corpus-location: meta-corpus
  target:
    repo: intelligence-commons
    doc: docs/patterns/project-learning-membrane.md
    concept: learning-field
    line_range: 43-103
  claim: |-
    The learning-field structure is in scope as a meta-corpus dependency for Spore's review machinery, but its defining artifact currently lives as an IC pattern doc rather than as a Spore-hosted protocol or other formal governance artifact alongside the protocol pair that claims to govern intake/canon flow across Spore, IC, and PM. The layer exists and is load-bearing, but it is misplaced relative to the governance boundary it serves: a cross-project control surface is anchored in a project-local pattern document.
  evidence:
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/meta-corpus-inventory.tsv:8-8
    excerpt: learning-field-structure intelligence-commons/docs/patterns/project-learning-membrane.md
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:107-114
    excerpt: Learning-field structure as currently documented in IC's `project-learning-membrane` pattern
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/learning-field-intake-protocol.md:16-21
    excerpt: This protocol is the first half of a two-protocol pair ... across Spore, IC, PM
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:43-79
    excerpt: Separate the learning system into four surfaces, connected by a governed membrane.
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:178-178
    excerpt: \"a layering is a hypothesis about what will vary independently\"
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies:
  - F-037
  notes: Cross-project host-boundary placement should be resolved alongside the topology decision in F-037.
- finding-id: F-030
  source-passes:
  - P4-3-006
  type: missing
  severity: S3
  priority: important
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: N/A
    concept: N/A
    line_range: N/A
  claim: |-
    The operative meta-corpus protocols and bridge-note format describe purpose, flow, and schema, but they do not explicitly declare intended audience or prerequisites even though the methodology assumes a narrow audience that can inspect all three repos and already understands canon-review conventions. Audience-scoping research treats audience/scope/purpose blocks as standard document hygiene, and the capstone already calls this out as a cheap, high-leverage repair. As written, the process docs function like insider-only protocols while presenting themselves as general reusable procedures.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:10-12
    excerpt: This protocol governs how we edit canon ... It evolves after each canon-review round.
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/learning-field-intake-protocol.md:72-89
    excerpt: 'Every bridge note follows the same schema regardless of source corpus:'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:118-120
    excerpt: The current audience is `solo-operator -> active contributors across Spore / Intelligence Commons / Poietic Match`.
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-audience-scoping.md:113-116
    excerpt: \"describes the intended audience, scope, and purpose\"
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:323-323
    excerpt: \"Audience-declaration block on README and ADR/bridge-note templates.\"
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
  notes: Likely overlaps P4.4 if the bridge-note sample pass flags template-level readability or onboarding drift.
- finding-id: F-031
  source-passes:
  - P4-3-007
  type: contradictory
  severity: S3
  priority: deferred
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: scripts/validate_spec_dag.py
    concept: N/A
    line_range: 110-110,169-172
  claim: |-
    The ADR status vocabulary is internally contradictory across the meta-corpus. The canon-review protocol's ADR-lite schema uses lifecycle names like `proposed`, the validator only accepts `draft|active|deprecated|superseded`, and live Spore ADRs carry inline mapping comments to explain the translation. The current system works only because the operator knows to bridge two vocabularies by hand; the contradiction remains encoded in the protocol/tooling boundary.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:83-89
    excerpt: 'status: proposed   # lifecycle below'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/scripts/validate_spec_dag.py:110-110
    excerpt: ALLOWED_STATUSES = {\"draft\", \"active\", \"deprecated\", \"superseded\"}
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/0001-pluriversal-incommensurability.md:5-9
    excerpt: "\\\"no \\\\\\\"proposed\\\\\\\"\\\" ... \\\"Mapping protocol \xA73 lifecycle state \\\\\\\"proposed\\\\\\\"\\\" ... status: active"
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
  notes: Protocol v2 already defers a full vocabulary unification to v3; kept deferred here for the same reason.
- finding-id: F-032
  source-passes:
  - P4-4-001
  type: misplaced
  severity: S3
  priority: important
  corpus-location: bridge-note
  target:
    repo: N/A
    doc: tmp/bridge-note-inventory.tsv
    concept: N/A
    line_range: N/A
  claim: |-
    The bridge-note inventory currently mixes non-bridge-note artifacts into the bridge-note corpus. At least ten inventory entries are actually `canon_framing` or `field_scan` docs, which means deterministic sampling can consume quota on framing/meta artifacts instead of true bridge notes. This distorts bridge-note diagnostics before any content-level review begins.
  evidence:
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:7
    excerpt: spore/docs/research/connections/canon-framing-boundary-theory-unifier.md unspecified 0 0 0.00 TRUE
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-boundary-theory-unifier.md:1-5
    excerpt: 'doc_id: spore.connection.canon-framing-boundary-theory-unifier ... research_subkind: canon_framing'
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:65-67
    excerpt: p2p-wiki-field-scan ... p2p-wiki-pass-2-capstone-synthesis ... p2p-wiki-post-intake-synthesis
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-field-scan.md:1-6
    excerpt: 'doc_id: spore.connection.p2p-wiki-field-scan ... research_subkind: field_scan'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md:1-6
    excerpt: 'doc_id: spore.connection.p2p-wiki-post-intake-synthesis ... research_subkind: field_scan'
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: Overlaps P4.3 on bridge-note-format / meta-corpus boundary discipline.
- finding-id: F-033
  source-passes:
  - P4-4-002
  type: contradictory
  severity: S3
  priority: blocking
  corpus-location: bridge-note
  target:
    repo: N/A
    doc: N/A
    concept: N/A
    line_range: N/A
  claim: |-
    The bridge-note corpus is not serialized in the Phase 4 / canon-review bridge-note R-claim format. The current corpus uses `**R<n>** [review claim] ...` with italic support text or ad-hoc inline support variants, while the pass specification expects `- **R<n>**: ...` plus a `supported_by:` line. Full-corpus audit found all 63 review-claim notes out of spec: 61 use the old format and 2 more use malformed support-line variants. This is a blocking bridge-note ingestion and verification risk.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/.claude/plans/phase-4/04-bridge-note-sample.md:22-24
    excerpt: 'R-claim shape: `- **R<n>**: <claim> ... [concept: <slug>]` + `supported_by:` line'
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/research/inclusive-and-generative-value.md:195-201
    excerpt: '**R1** [review claim] ... [concept: inclusive-governance] ... *R1 is supported by C1, C2, C3, C9, C13.*'
  - kind: source-doc
    ref: /Users/darrenzal/projects/poietic-match/docs/research/connections/commercial-credit-circuit.md:174-180
    excerpt: '**R1** [review claim] ... [concept: commercial-credit-circuit] ... *R1 is supported by C1, C3, C4, C10.*'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md:304-308
    excerpt: '**R1** [review claim] [target: spore.mycelial-holarchy-architecture] ... *R1 is supported by C1, C2, C8, C15.*'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/connections/openwashing-opposition.md:123-127
    excerpt: '**R4** ... The value-capture pattern ... *R4 is supported by C1, C2, C4.*'
  proposed-resolution-track: canon-review-v2
  prior-collision-check:
  - canon-review bridge-note R-claim format convention
  dependencies: []
  notes: Cross-pass dedup with P4.3 on bridge-note format convention. `johar-entangled-intelligence.md` also deviates further by using narrative italics instead of a dedicated support line.
- finding-id: F-034
  source-passes:
  - P4-4-003
  type: contradictory
  severity: S3
  priority: blocking
  corpus-location: bridge-note
  target:
    repo: N/A
    doc: N/A
    concept: N/A
    line_range: N/A
  claim: |-
    Thirty bridge notes use review-claim concept slugs outside the frozen v2 P2P-wiki vocabulary, despite the frozen-vocabulary rule explicitly forbidding new slugs without a version bump. The sample trigger surfaced three Johar notes immediately; full-corpus audit expands the problem to 30 notes (29 in Spore, 1 in IC). Until those slugs are remapped or the vocabulary is formally revised, bridge-note cluster formation is non-canonical.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/concepts-p2p-wiki.yaml:1-10
    excerpt: Agents reading this file MUST NOT mint concept slugs outside this vocabulary ... do NOT silently append.
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:37
    excerpt: spore/docs/research/connections/johar-entangled-freedom.md unspecified 3 1 0.00 FALSE
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/connections/johar-entangled-freedom.md:65-67
    excerpt: '**R1** [review claim] [target: spore.lexicon] [concept: entangled-freedom-and-being]'
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:47
    excerpt: spore/docs/research/connections/johar-miss-engineered-city.md unspecified 3 1 0.00 FALSE
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/connections/johar-miss-engineered-city.md:61-63
    excerpt: '**R1** [review claim] [target: spore.project-vision] [concept: spatial-service-and-civic-infrastructure]'
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:57
    excerpt: spore/docs/research/connections/johar-sovereign-consciousness.md unspecified 3 1 0.00 FALSE
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/connections/johar-sovereign-consciousness.md:64-66
    excerpt: '**R1** [review claim] [target: spore.project-vision] [concept: consciousness-sovereignty-and-post-compliance]'
  - kind: inventory-row
    ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:83
    excerpt: intelligence-commons/docs/research/johar-neuroplastic-field.md unspecified 3 3 0.00 FALSE
  proposed-resolution-track: canon-review-v2
  prior-collision-check:
  - frozen concepts vocabulary v2
  dependencies: []
  notes: Cross-pass dedup with P4.3 on frozen-concepts discipline.
- finding-id: F-035
  source-passes:
  - P4-5-002
  type: dead-weight
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: N/A
    doc: N/A
    concept: instance-model / spore-instance-model / intelligence-primitives / memory-layer-model
    line_range: N/A
  claim: |-
    Four primitive-class entries are bundle-label handles rather than irreducible concepts. `instance-model` and `spore-instance-model` are both paraphrasable as the canon/node/agent/site composition named in the Spore instance-model doc; `intelligence-primitives` is paraphrasable as retrieval + memory + evidence + grounding + evaluation + agentic control + capability routing; `memory-layer-model` is paraphrasable as the five named layers plus their boundary-commoning surface. The defining texts already do this paraphrase explicitly, and `spore-instance-model.md` goes further by stating that "Instance" is not a new primitive. These labels can remain as document titles or doc_ids, but they do not survive the primitive-class counterfactual probe as concepts.
  evidence:
  - kind: inventory-row
    ref: concept-roster.tsv row 190 (primitive-class=TRUE)
    excerpt: instance-model
  - kind: inventory-row
    ref: concept-roster.tsv row 193 (primitive-class=TRUE)
    excerpt: intelligence-primitives
  - kind: inventory-row
    ref: concept-roster.tsv row 227 (primitive-class=TRUE)
    excerpt: memory-layer-model
  - kind: inventory-row
    ref: concept-roster.tsv row 362 (primitive-class=TRUE)
    excerpt: spore-instance-model
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/spore-instance-model.md:81-88
    excerpt: \"Instance\" is not a new primitive. ... No new primitives are introduced.
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/project-vision.md:112-112
    excerpt: "The instance model ... compose into concrete implementations \u2014 canon, node (substrate), agent, and site"
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/README.md:28-28
    excerpt: "spore-instance-model.md \u2014 how Spore materializes: canon, node, agent, site"
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:56-66
    excerpt: 1. Retrieval ... 7. Capability Routing
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:9-11
    excerpt: Seven building blocks that intelligence systems are made of.
  - kind: source-doc
    ref: /Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:9-11
    excerpt: Five memory layers for intelligence systems, ordered by timescale and scope.
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: Severity normalized from S2 to S3 because the evidence set is internal-only and does not meet the S2 external-evidence bar.
- finding-id: F-036
  source-passes:
  - P4-5-003
  type: over-specified
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/project-vision.md
    concept: koi-net
    line_range: 165-165
  claim: |-
    `koi-net` is primitive-class in the roster, but every canonical use sampled treats it as the current implementation of substrate and transport concerns that are already expressible through other concepts. Spore's own canon says the federation protocol is substrate-agnostic, the node abstraction does not mandate KOI, and KOI-net is only the present transport materialization. The counterfactual probe therefore succeeds: removing `koi-net` from primitive-class treatment does not reduce canon expressivity once node, federation transport, knowledge graph, and sensors remain available. It is an implementation-specific alias, not a primitive.
  evidence:
  - kind: inventory-row
    ref: concept-roster.tsv row 207 (primitive-class=TRUE)
    excerpt: koi-net
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/project-vision.md:165-165
    excerpt: Current federation transport implementation
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/spore-instance-model.md:29-31
    excerpt: The current implementations use KOI ... one materialization, not the definition.
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/foundations/mycorrhizal-federation-protocol.md:144-148
    excerpt: 'the protocol does not mandate a single transport topology ... Current implementation: KOI-net'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/project-vision.md:174-174
    excerpt: node substrate (knowledge graph, entity resolution, federation, sensors)
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  dependencies: []
  notes: possible cross-pass dedup with P4.6 if the repo-topology pass separately flags implementation-name bleed from substrate layer into canon vocabulary.
- finding-id: F-037
  source-passes:
  - P4-6-001
  type: missing
  severity: S2
  priority: blocking
  corpus-location: repo-topology
  target:
    repo: N/A
    doc: N/A
    concept: N/A
    line_range: N/A
  claim: |-
    Spore/IC/PM is already operating as a three-repo shared-canon hybrid, but that topology is still policy-by-practice rather than a ratified constitutional choice. The plan says the split is "unadjudicated," the capstone already classifies it as a governance-domain hybrid, and the same plan simultaneously excludes the three peripherals from edit scope while deferring a later propagation-scope decision. That leaves three load-bearing questions unanswered in canon terms: why exactly these three repos are canon-bearing, what would justify collapsing or expanding the set, and how analysis-only repos graduate into or remain outside the topology. The correct state is an explicit topology decision that either adopts the current three-repo split or revises it, while naming inclusion and exclusion rules for peripherals.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:16-16
    excerpt: Repo topology unadjudicated.
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:31-31
    excerpt: Repos outside Spore/IC/PM receive no edits. Analysis-only scope for darren-workflow, flowcoding, koi-processor.
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:364-364
    excerpt: Dependent-repo propagation scope decision ... what was considered and what defers to downstream plans.
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/tmp/repo-topology-snapshot.md:10-11
    excerpt: 'Cross-repo edges: strict `0`, broad `0`. Coordination artifacts: strict `13`, broad `109`.'
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:201-203
    excerpt: Spore/IC/PM is a three-repo shared-canon hybrid ... split ... reflects distinct governance domains.
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:14-14
    excerpt: layered governance in which a thin constitutional document is held above a thicker operational process
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies: []
  notes: Overlaps P4.3 on governance-process layering and on how `tmp/repo-topology-decision.md` / `tmp/propagation-scope-decision.md` should be framed.
- finding-id: F-038
  source-passes:
  - P4-6-002
  type: overlapping/redundant
  severity: S2
  priority: important
  corpus-location: repo-topology
  target:
    repo: N/A
    doc: N/A
    concept: shared-canon layer
    line_range: N/A
  claim: |-
    The current topology duplicates a common concept layer across three repos without a single authoritative source for those cross-project terms. The same twelve concepts recur in every Spore/IC/PM pair, yet canon-review-v1 still had to push six coordinated shared-framing sets and twenty-three ADRs through session-atomic windows to keep the trio aligned. That is enough evidence to call the shared-canon layer redundant at the repo boundary even if it is not yet enough to justify a full monorepo. The correct state is either a thin shared-canon source/workspace for cross-project primitives, or an explicit scale guardrail that freezes the canon-bearing set at the current trio until equivalent cross-repo automation exists.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/tmp/repo-topology-snapshot.md:8-10
    excerpt: 'Shared concepts with intelligence-commons ... Shared concepts with poietic-match ... Cross-repo edges: strict `0`, broad `0`.'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:330-340
    excerpt: 23 ADRs ... 6 coordinated shared-framing notes ... Session-atomic 30-min window cleared ... in all 6 coordinated sets.
  - kind: capstone-section
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:201-203
    excerpt: cross-cutting findings ... required synchronous coordinated edits across three repos that a monorepo would have made atomic
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-repo-topology.md:65-76
    excerpt: common source of truth ... federation ... monorepo-like assurances ... preserving separate repo autonomy
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-repo-topology.md:263-266
    excerpt: without monorepo, it had to invest heavily in tools to approach monorepo-like capabilities
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies:
  - F-037
  notes: Resolve the canon-bearing topology choice in F-037 before restructuring the shared concept layer.
- finding-id: F-039
  source-passes:
  - P4-6-003
  type: missing
  severity: S2
  priority: blocking
  corpus-location: repo-topology
  target:
    repo: N/A
    doc: N/A
    concept: merge-governance
    line_range: N/A
  claim: |-
    The three-repo topology has a blocking operational governance gap at the merge boundary. Phase 0 could not verify branch-protection state for IC or PM because the GitHub protection API returned 403s, yet the Phase 9 plan still requires near-synchronous PR merges across all three repos and treats branch-protection rejection as a partial-merge failure that may force reverting Spore. In other words, the topology's propagation invariant exists as a plan rule but not as a verified enforcement surface across the dependent repos. Before Phase 9, the project needs either an explicit cross-repo PR gate / merge manifest that makes the three-repo merge set auditable under asymmetric protections, or a more centralized merge surface for canon-bearing changes.
  evidence:
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/tmp/phase-0-readiness.md:16-16
    excerpt: branch-protection API returned HTTP 403 on IC and PM; PR-based Phase 9 fallback logged
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/tmp/phase-0-fallbacks.md:7-7
    excerpt: 'both returned HTTP 403 ... Conservative fallback engaged: assume PR-based merge flow for Phase 9'
  - kind: source-doc
    ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:353-358
    excerpt: 'Merge order: Spore first ... Merge failure triggers: PR conflict, CI failure, branch protection rejection.'
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-repo-topology.md:263-266
    excerpt: multi-repo CI to simulate atomic integration
  - kind: research-synthesis
    ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:96-96
    excerpt: the absence of formal structure does not eliminate hierarchy; it makes hierarchy unaccountable
  proposed-resolution-track: foundational-reframing
  prior-collision-check: none
  dependencies:
  - F-037
  notes: The merge-governance surface depends on an explicit statement of the canon-bearing repo topology in F-037.
```

## Severity + priority distribution

### By severity

| value | count |
|-------|-------|
| S1 | 1 |
| S2 | 13 |
| S3 | 24 |
| S4 | 1 |

### By priority

| value | count |
|-------|-------|
| blocking | 9 |
| important | 26 |
| deferred | 4 |

### By type

| value | count |
|-------|-------|
| missing | 9 |
| misplaced | 4 |
| wrong-level | 5 |
| overlapping/redundant | 2 |
| should-be-split | 3 |
| should-be-merged | 1 |
| over-specified | 1 |
| over-abstract | 0 |
| naming-wrong | 1 |
| contradictory | 12 |
| dead-weight | 1 |
| dissolve-entirely | 0 |

### By corpus-location

| value | count |
|-------|-------|
| content | 24 |
| meta-corpus | 9 |
| bridge-note | 3 |
| repo-topology | 3 |
