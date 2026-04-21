---
doc_id: spore.learning-field-protocol
doc_kind: protocol
version: 1
status: active
authored-on: 2026-04-21
authored-by: codex-gpt-5
---

# Learning Field Protocol

Version: v1 (2026-04-21). Formalized under Scenario A of `reframing-learning-field-host-elevation`. Companion to `learning-field-intake-protocol.md` and `canon-review-protocol.md`: those govern how outside material enters the learning field and how canon changes land; this protocol names the cross-project learning-field structure and governed membrane those flows presuppose.

## Purpose

This protocol is the authoritative cross-project carrier for the learning-field structure used across Spore, Intelligence Commons, and Poietic Match.

It defines the shared four-surface model and the governed membrane that connects those surfaces. Project-local pattern docs may instantiate this protocol for local tooling, agent roles, and proving-ground specifics, but they do not replace this file as the authoritative host.

## Intended audience and prerequisites

- **Audience**: Operators, gardeners, reviewers, and maintainers who run intake, convergence, and canon-promotion workflows across Spore, Intelligence Commons, and Poietic Match
- **Prerequisites**: Ability to inspect the relevant repos and learning-field artifacts directly; working familiarity with bridge notes, convergence/synthesis flow, ADR-backed canon review, and the ratified three-repo topology
- **Scope**: Governs the shared learning-field structure itself: the four surfaces, membrane operations, scope controls, and promotion boundary between exploratory learning and governed canon
- **Out of scope**: Project-local tooling details, repo-specific roadmaps, implementation-specific eval machinery, and the detailed procedures already governed by the companion intake and canon-review protocols

## Companion protocols

- **[Learning field intake protocol](./learning-field-intake-protocol.md)**: governs how outside corpora become bridge notes, claim-bearing research artifacts, capstones, and coverage reports inside the learning field
- **[Canon review protocol](./canon-review-protocol.md)**: governs how mature review claims and synthesis outputs become ADR-backed canon edits
- **Project-local instantiation docs**: may specialize this protocol for a single repo's proving ground, memory stack, or agent implementation, but must cite this file as authoritative for the shared structure

## Core structure

Separate the learning field into four surfaces, connected by a governed membrane.

### 1. Personal intake surface

The broadest surface. Raw material lands here first:

- meeting notes
- transcripts
- papers
- repos
- scratch notes
- personal research prompts
- early implementation observations

This surface is person- or agent-scoped. It is allowed to be noisy, provisional, and over-inclusive.

### 2. Project semantic memory

A narrower surface for material plausibly relevant to a project's domain before canonization.

Examples:

- bridge notes
- candidate technique cards
- comparative mappings
- extracted claims and tensions
- links between outside work and existing canon

This surface is revisable and exploratory, but it is no longer purely personal.

### 3. Governance memory

The governed repo surface: vision docs, foundations, protocols, decision records, and promoted research artifacts. This is the constitutional layer.

Only material that has passed through comparison, synthesis, and some level of review should enter here.

### 4. Production proving ground

The implementation environment where candidate ideas face operational reality.

This surface is project-local by design. Each project names its own live systems, eval loops, traces, and retrospective carriers. Production evidence from this surface carries the strongest weight in promotion decisions because it records what survived contact with actual use.

## Field, garden, gardeners

The **learning field** is the wider operational surface created by these four surfaces and their governed interactions. It is the medium through which incoming material is sensed, translated, contested, linked, and either promoted or deferred.

**Project semantic memory** is the **knowledge garden** within that field: the curated, revisable substrate where bridge notes, candidate concepts, tensions, and links are actively tended before canonization.

**Gardeners** are stewardship roles operating within that garden and across the wider field. They cultivate the field; they do not define it. The membrane governs what crosses between surfaces and what becomes durable canon.

## Governed membrane operations

The membrane between these surfaces is not a simple sync process. It performs governed transformations.

### Ingest

Bring new material into personal intake or, when explicitly exposed, into project semantic memory.

### Triage

Decide whether the material is:

- private only
- project-relevant but provisional
- immediately worth a bridge note
- implementation-relevant
- not worth retaining

### Translate

Map external work into project terms without erasing difference. When a project needs stricter comparison, translation may use typed artifacts such as restriction maps or comparison records, but those local mechanisms sit inside this larger membrane flow rather than replacing it.

### Bridge

Create a bridge note or related research artifact that records:

- what the source says
- how it maps to current canon
- where the mapping is strong
- where it breaks
- what the disposition should be

### Disposition

Record a next-step judgment such as:

- no change
- clarify existing term
- candidate pattern
- candidate protocol
- candidate primitive
- implementation hypothesis
- unresolved tension

### Promote

Only after review and, ideally, production evidence, update governance memory.

## Scope controls

To keep project semantic memory from degrading into an underspecified bucket, every local instantiation should preserve these controls:

- **Source labels**: mark incoming material by source and intent
- **Visibility scopes**: distinguish `private`, `candidate-project`, and `project-visible`
- **Project identifiers**: attach project URIs, doc IDs, or equivalent tags so retrieval can respect project boundaries
- **Trust tiers**: weight personal notes, public papers, peer material, and production traces differently
- **Promotion gates**: require explicit review before personal material becomes project-visible or canon-bearing
- **Retrieval filters**: default project agents to approved scopes rather than broad personal corpora

Without these controls, the membrane becomes rhetorical and retrieval pollution returns.

## Claim and promotion flow

The default flow is:

1. Raw intake enters personal memory or a personal KOI node.
2. Candidate project-relevant material is exposed into project semantic memory.
3. An agent or human writes a bridge note or adjacent research artifact.
4. Claims and dispositions are attached.
5. Evidence clusters around target concepts and canon surfaces.
6. Synthesis notes surface convergences and active tensions.
7. Candidate ideas are tested in implementation space when appropriate.
8. Retrospectives and evals feed back stronger evidence.
9. Promotable findings become patterns, protocol changes, or clarifications in repo canon.

Two claim layers matter:

- **Source claims** capture what a source contributes to a concept.
- **Review claims** propose specific canon changes against target docs or sections.

Keeping those layers distinct prevents "something was learned" from collapsing directly into "canon should change."

## Roles

This protocol assumes multiple roles rather than a single monolithic learner.

### Personal agent

Operates on the broad intake surface:

- processes meetings and transcripts
- ingests papers and repos
- drafts summaries
- proposes candidate mappings

### Project gardener

Operates on project semantic memory:

- maintains bridge notes
- tracks candidate patterns and technique cards
- links new material to existing canon
- surfaces tensions and revisit triggers

### Production agent

Operates in the proving ground:

- monitors eval regressions
- tests implementation hypotheses
- records operational outcomes
- produces retrospective evidence

### Convergence gardener

Operates on the evidence and synthesis boundary:

- identifies clusters reaching synthesis readiness
- drafts synthesis notes that preserve convergences and tensions
- tracks promotion status
- keeps automated convergence distinct from governed promotion

### Governance reviewer

Decides what crosses into canon.

## Project-local instantiations

Local pattern or roadmap docs may specialize this protocol for one repo. They may:

- name local proving-ground systems
- name repo-specific agent roles or scripts
- map the protocol onto local primitives, memory layers, or roadmap phases

They may not silently replace the shared four-surface structure, the membrane operations, or the governance boundary defined here.

The first governed local instantiation after this protocol's adoption is Intelligence Commons' `docs/patterns/project-learning-membrane.md`, which now serves as an IC-specific implementation note rather than as the authoritative cross-project host.
