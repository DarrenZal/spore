# Phase 4 Pass P4.1a — Per-doc diagnostic (Spore canon-layer docs)

**Pass:** P4.1a
**Agent:** Codex
**Date:** 2026-04-19
**Scope:** All 48 Spore canon-layer docs (`spore:adr-eligible` + `spore:extended`) enumerated from `tmp/corpus-inventory.tsv`
**Inventory anchors:** `tmp/corpus-inventory.tsv`; `tmp/concept-roster.tsv`; `tmp/adr-rationale-index.tsv`; `docs/research/planning/corpus-foundational-review-methodology.md`; `docs/research/corpus-review/research-capstone.md`; `docs/research/corpus-review/research-capstone-review.md`

## Findings

```yaml
- finding-id: P4-1a-001
  type: contradictory
  severity: S3
  priority: blocking
  corpus-location: content
  target:
    repo: spore
    doc: docs/research/canon-decisions/README.md
    concept: N/A
    line_range: 23-25
  claim: |
    The ADR README gives Spore-local authoring guidance in protocol-level lifecycle terms (`proposed`, `accepted`, `partial-drift`) without the Spore-specific status mapping that current ADR execution actually requires. In this repo, active ADRs must map `proposed -> draft` and `accepted -> active` because the validator only accepts the frontmatter enum used elsewhere in Spore governance. Leaving the README unqualified makes the per-repo ADR authoring surface self-contradictory at the point where Phase 7 authors will look first.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/README.md:23-25
      excerpt: "`proposed` -> `accepted` ... `superseded` ... `partial-drift` ..."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:366-366
      excerpt: "v2 mapping ... `proposed -> draft`, `accepted -> active`."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/0002-reproduction-primacy.md:5-7
      excerpt: "Mapping protocol §3 lifecycle state \"proposed\" to validator-compatible \"draft\"; transitions to \"active\" at accept."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/governance/agent-commons-meta-protocol.md:122-127
      excerpt: "Status transitions: `draft` -> `active` -> `deprecated` or `superseded`."
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Overlaps P4.3 on ADR/tooling status semantics.

- finding-id: P4-1a-002
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/governance/quickstart.md
    concept: doc_kind
    line_range: 42-46
  claim: |
    `quickstart.md` publishes a `doc_kind` value set that no longer matches the rest of Spore's governance canon. It uses `foundations` (plural) and includes `protocol` and `guidance`, while omitting active taxonomy members such as `pattern`, `positioning`, `roadmap`, and `decision-record`. Because the table presents these as the required values for governed docs, the onboarding surface now points new authors at a taxonomy that diverges from the meta-protocol, adoption guide, and current ADR corpus.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/governance/quickstart.md:42-46
      excerpt: "`doc_kind` ... `vision`, `architecture`, `foundations`, `spec`, `protocol`, `guidance`, `research`, `operations`"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/governance/agent-commons-meta-protocol.md:17-27
      excerpt: "`foundation` ... `spec` ... `pattern` ... `roadmap` ... `positioning`"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/governance/adoption-guide.md:152-155
      excerpt: "`vision`, `foundation`, `architecture`, `spec`, `operations`, `research`, `positioning`, `pattern`, `roadmap`"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/0006-polycentric-governance-at-holarchy.md:1-3
      excerpt: "doc_kind: decision-record"
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Overlaps P4.3 on governance-taxonomy / validator-enforcement drift.

- finding-id: P4-1a-003
  type: missing
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/synthesis/coordination-grammar.md
    concept: field
    line_range: 52-67
  claim: |
    `coordination-grammar.md` still presents a ten-primitive core that excludes `field`, even though active Spore canon keeps `field` as a current primitive and gives it a dedicated foundation entry defining the shared, learning, and relational field as the distributed medium of coordination. The capstone likewise treats `field` as a canon term to keep, not demote. Because this synthesis doc claims to enumerate the grammar's first-class objects, the omission now misstates the active primitive set rather than merely simplifying it.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md:52-67
      excerpt: "Ten coordination primitives. Each is a first-class object in the grammar."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/foundations/lexicon/field.md:23-39
      excerpt: "A distributed relational medium ... the same underlying structure instantiated at different scales"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:97-100
      excerpt: "`field` | glossary clarification | current canon term | Keep primitive"
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:161-164
      excerpt: "`Field` ... `Verdict`: keep; a defensible commitment pulling Spore toward the social-ecological pole."
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: Likely overlaps P4.2 on cross-doc primitive comparison.

- finding-id: P4-1a-004
  type: wrong-level
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/synthesis/coordination-grammar.md
    concept: care
    line_range: 46-49
  claim: |
    The synthesis grammar still collapses care into the intent phase, saying that Ruddick's explicit care phase is "carried by Intent." Current Spore canon after reproduction-primacy does not make that move: `relational-agency-and-holons.md` names care as the primary coordinating practice of field reproduction, and the capstone explicitly says care cannot be paraphrased by the symmetric intent/commitment stack. Keeping the older gloss in the grammar doc reclassifies care at the wrong ontological level and reintroduces exactly the reduction that the review's care-primacy prior is meant to guard against.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md:46-49
      excerpt: "Ruddick's loop foregrounds `caring` ... In Spore, this is carried by Intent"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/foundations/relational-agency-and-holons.md:48-52
      excerpt: "The primary coordinating practice in a field is care ... Coordination emerges from care."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:128-128
      excerpt: "`care primacy` | Reproduction and care are constitutive of coordination"
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:61-64
      excerpt: "Paraphrase test: fails ... Spore's primitives are symmetric; care is not."
  proposed-resolution-track: canon-review-v2
  prior-collision-check:
    - care primacy
  notes: Likely overlaps P4.5 because it bears on primitive-class treatment for `care`.

- finding-id: P4-1a-005
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/synthesis/coordination-grammar.md
    concept: artifact lifecycle
    line_range: 137-141
  claim: |
    `coordination-grammar.md` publishes an artifact lifecycle of `draft -> active -> amended -> deprecated -> forked`, citing governance-memory as its source. That lifecycle is not the operative one in current Spore governance. `governance-memory.md` itself only names `draft`, `active`, and `deprecated`, while the meta-protocol makes `superseded` first-class. The synthesis layer therefore exposes a status model that matches neither its cited source nor the repo's active governance semantics.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md:137-141
      excerpt: "`draft --> active --> amended --> deprecated --> forked`"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/patterns/governance-memory.md:33-38
      excerpt: "`status`: Lifecycle state -- `draft`, `active`, `deprecated`."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/governance/agent-commons-meta-protocol.md:122-127
      excerpt: "Status transitions: `draft` -> `active` -> `deprecated` or `superseded`."
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Overlaps P4.3 on governance/status-model drift.

- finding-id: P4-1a-006
  type: missing
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/project-vision.md
    concept: audience declaration
    line_range: 8-16
  claim: |
    The root vision doc still has no explicit audience / scope declaration. Reader-scoping research and the capstone both identify this as a concrete behind-the-field gap, and the methodology has to supply a narrow intended audience separately because the canonical layer does not. Since `project-vision.md` is the root of the spec DAG and the main reader-entry surface, leaving its prerequisites and audience assumptions implicit keeps a core interpretive boundary outside the canon itself.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/project-vision.md:8-16
      excerpt: "Spore is an infrastructure for collective agency ... Coordination at every scale and scope requires the same primitives"
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:215-219
      excerpt: "Spore does not declare its audience explicitly anywhere in its canonical layer."
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-audience-scoping.md:15-21
      excerpt: "IEEE 1063 ... if one document addresses multiple audiences, it should either use separate sections ..."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:118-120
      excerpt: "The current audience is `solo-operator -> active contributors across Spore / Intelligence Commons / Poietic Match`."
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Overlaps P4.3 on audience / reader-scoping machinery.

- finding-id: P4-1a-007
  type: contradictory
  severity: S3
  priority: deferred
  corpus-location: content
  target:
    repo: spore
    doc: docs/synthesis/decision-memo.md
    concept: N/A
    line_range: 337-341
  claim: |
    `decision-memo.md` still frames already-landed canon work as pending "next session" tasks: adding discourse graph to the vision, writing a relay protocol doc, and writing a claims/evidence/attestation protocol doc. Those surfaces now exist in active Spore docs. As an in-scope canon-layer synthesis artifact, the memo therefore functions as stale action guidance unless it is explicitly archived, superseded, or reframed as historical record rather than current direction.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md:337-341
      excerpt: "Revise `project-vision.md` ... Write store-and-forward relay protocol doc ... Write claims/evidence/attestation anchoring protocol doc"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/project-vision.md:97-108
      excerpt: "We have identified eight graph projections so far ... `Discourse graph` ..."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/protocols/store-and-forward-relay.md:1-11
      excerpt: "# Store-and-Forward Relay ... extracted here because the relay pattern is reusable"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/protocols/claims-evidence-attestation.md:1-11
      excerpt: "# Claims, Evidence, and Attestation Anchoring"
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Overlaps P4.3 on synthesis-layer archival / inventory hygiene.
```

## Pass summary

I’m emitting 7 findings: 2 at S2 and 5 at S3. The strongest drift is not in the recently updated foundation / ADR bodies; it concentrates in governance and synthesis helper docs whose guidance predates the latest canon-review edits, plus the root vision's still-missing audience declaration.

The recently ADR-touched foundation docs read comparatively clean at this evidence bar: `field.md`, `relational-agency-and-holons.md`, `holonic-network-architecture.md`, `mycorrhizal-federation-protocol.md`, the active ADR bodies `0001-0008`, and most protocol / pattern docs did not clear a finding threshold on this pass. Consolidation should watch two overlap zones: primitive/care issues here vs. P4.2/P4.5, and governance-status / taxonomy issues here vs. P4.3.

## Pass-level caveats

I treated `docs/synthesis/*.md` as live review scope because `tmp/corpus-inventory.tsv` marks them `spore:extended`; several findings arise from that choice. I reviewed the `CLAUDE.md` sidecar files as in-scope inventory rows, but did not emit findings for them because the strongest issue there appears to be inventory/topology classification rather than a clear doc-body correction, which fits P4.3/P4.6 better unless stronger evidence emerges.

For S2 findings, I used the capstone as the required external research input and paired it with active canon text plus methodology constraints. I did not emit low-evidence suspicions about inventory-only quirks, legacy examples, or tooling behavior unless a scoped canon doc itself made the contradiction visible.
