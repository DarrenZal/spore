# Phase 4 Pass P4.1b — Per-doc diagnostic (Intelligence Commons canon-layer docs)

**Pass:** P4.1b
**Agent:** Codex
**Date:** 2026-04-19
**Scope:** Reviewed the 20 `intelligence-commons:*` canon-layer docs in `tmp/corpus-inventory.tsv`, with findings focused on IC foundation, vision, pattern, learning-field, and accepted ADR surfaces.
**Inventory anchors:** `/Users/darrenzal/projects/spore/tmp/corpus-inventory.tsv`; `/Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md`; `/Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md`; `/Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md`

## Findings

```yaml
- finding-id: P4-1b-001
  type: misplaced
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/foundations/intelligence-primitives.md
    concept: N/A
    line_range: 11-23
  claim: |
    `ic.intelligence-primitives` collapses IC's own canon/proving-ground boundary by making current BKC/Octo materialization part of primitive definition. The repo's vision says software-essential content belongs in BKC, but the foundation surface bakes in live implementation choices, model names, and current production metrics as part of the canonical primitive write-up. The correct state is a stable primitive definition in IC canon with pointer-level references to BKC materializations, not repeated proving-ground detail embedded in the foundation layer.
  evidence:
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:26-26"
      excerpt: "if a concept mentions specific software ... it belongs in BKC."
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:11-11"
      excerpt: "Each primitive is defined with its Spore grammar derivation ... and its current BKC materialization"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:74-74"
      excerpt: "The semantic roadmap ... is governance memory for project planning. The eval contract ... for quality standards."
    - kind: research-synthesis
      ref: "/Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:14-18"
      excerpt: "separate the domain from its machinery"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none

- finding-id: P4-1b-002
  type: should-be-split
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/foundations/memory-layer-model.md
    concept: N/A
    line_range: 65-74
  claim: |
    IC's governance-memory surfaces currently collapse constitutional identity, operational process, planning, and promoted research into one undifferentiated "constitutional layer." `memory-layer-model.md` and `project-learning-membrane.md` both describe patterns, protocols, research artifacts, roadmaps, and eval contracts as part of governance memory, even though the local taxonomy and the governance-process research treat constitutional and operational layers as distinct. The correct state is an explicit split, or at minimum named sub-strata, inside Layer 5 so constitutional canon is not conflated with process, planning, and quality-control artifacts.
  evidence:
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:67-74"
      excerpt: "Constitutional artifacts: project vision, architecture docs, pattern language ... The eval contract ... for quality standards."
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:77-79"
      excerpt: "vision docs, foundations, patterns, protocols, decision records, and promoted research artifacts. This is the constitutional layer."
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:48-54"
      excerpt: "`foundations/` ... Core primitives ... `governance/` ... operating rules ... `research/` ... bridge notes."
    - kind: research-synthesis
      ref: "/Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:42-42"
      excerpt: "Constitutional vs. operational rules ... primary defense against executive self-entrenchment."
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: possible cross-pass dup with P4-3 on constitutional-vs-operational separation in meta-corpus machinery; consolidator to reconcile.

- finding-id: P4-1b-003
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/project-vision.md
    concept: N/A
    line_range: 18-24
  claim: |
    `ic.project-vision` carries two incompatible maps of IC's neighboring systems. Its sibling-project table says the three-repo learning architecture is Spore / IC / BKC, but the same vision later names PM as the federated production-layer surface, and the review corpus now treats the writable shared-canon topology as Spore / IC / PM while leaving BKC and koi-processor in proving-ground or analysis-only roles. The correct state is to distinguish canonical sibling repos from proving-ground systems explicitly rather than mixing them in one "three repos" claim.
  evidence:
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:18-24"
      excerpt: "Three repos form a learning architecture"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:68-70"
      excerpt: "PM's grammar and protocol"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:138-140"
      excerpt: "three active repos as writable scope: Spore, Intelligence Commons, and Poietic Match"
    - kind: capstone-section
      ref: "/Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:201-203"
      excerpt: "Spore/IC/PM is a three-repo shared-canon hybrid"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: possible cross-pass dup with P4-6 repo-topology; consolidator should reconcile severity and wording.

- finding-id: P4-1b-004
  type: wrong-level
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/research/canon-decisions/0003-boundary-theory-unifier.md
    concept: N/A
    line_range: 7-10
  claim: |
    Accepted ADR `0003-boundary-theory-unifier` fossilizes a non-canonical memory-layer stack by naming the between-layer surface as `Working ↔ Session ↔ Procedural ↔ Semantic ↔ Governance`. The active IC model explicitly says procedural is a cross-cutting content type, not an additional layer, and the pilot keeps any promotion of procedural memory to layer-status as an open review question. The correct state is for the ADR trace text to align with the five-layer model or explicitly mark the procedural-layer phrasing as superseded.
  evidence:
    - kind: adr-rationale
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0003-boundary-theory-unifier.md:7-10"
      excerpt: "(Working ↔ Session ↔ Procedural ↔ Semantic ↔ Governance)"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:131-137"
      excerpt: "These are not additional layers."
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:97-103"
      excerpt: "This pattern does not introduce new memory layers."
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/learning-field/synthesis/agentic-memory-pilot-v1.md:156-159"
      excerpt: "Consider promoting procedural memory ... to a named axis or layer."
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none

- finding-id: P4-1b-005
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/research/canon-decisions/0004-three-layer-coordination-stack.md
    concept: N/A
    line_range: 7-15
  claim: |
    Accepted ADR `0004-three-layer-coordination-stack` breaks the source-to-change trace its own protocol requires. Its frontmatter `r_claim_statement` records a primitive-level ask for an `intelligence-primitives` memory-governance subsection, but the ADR's actual decision edits only `project-vision.md` and explicitly defers primitive-level work to a follow-on. Because the ADR format treats the frontmatter claim as the primary verbatim source trace, this mismatch leaves the canonical record ambiguous about what claim the ADR actually resolved. The correct state is to align the primary recorded claim with the project-vision edit or demote the primitive-level ask to secondary evidence context.
  evidence:
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:79-85"
      excerpt: "r_claim_statement: <verbatim R-claim text; primary only>"
    - kind: adr-rationale
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0004-three-layer-coordination-stack.md:7-15"
      excerpt: "IC's `intelligence-primitives` should name memory governance as a cross-cutting architectural concern"
    - kind: adr-rationale
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0004-three-layer-coordination-stack.md:47-59"
      excerpt: "Land one additive paragraph in `docs/project-vision.md`"
    - kind: adr-rationale
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0007-memory-governance-as-cross-cutting-primitive.md:48-56"
      excerpt: "Add one new top-level section to `docs/foundations/intelligence-primitives.md`"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none

- finding-id: P4-1b-006
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: intelligence-commons
    doc: docs/research/canon-decisions/0006-collective-agency-declination.md
    concept: collective-agency
    line_range: 30-37
  claim: |
    Accepted ADR `0006-collective-agency-declination` defends its reject disposition by appealing to a seven-primitive architecture that is not actually IC's. The rationale substitutes `memory-governance` and its moments for the canon's real seven primitives, even though IC's vision still names Retrieval, Memory, Evidence, Grounding, Evaluation, Agentic Control, and Capability Routing, and ADR `0007` explicitly says memory-governance is cross-cutting rather than an eighth primitive. The reject disposition may still stand, but the rationale is canonically unreliable as written and should be recast using the actual primitive set.
  evidence:
    - kind: adr-rationale
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0006-collective-agency-declination.md:30-37"
      excerpt: "seven specific primitives (memory-governance, attribution, provenance, preservation, access, curation, synthesis"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:56-66"
      excerpt: "1. Retrieval ... 7. Capability Routing"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:87-91"
      excerpt: "Memory governance is a cross-cutting architectural concern ... applies across all seven primitives above."
    - kind: adr-rationale
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0007-memory-governance-as-cross-cutting-primitive.md:48-56"
      excerpt: "The new section is cross-cutting discipline, not an eighth primitive."
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
```

## Pass summary

Six findings met the evidence bar: 2 structural (`S2`) and 4 canonical (`S3`). The dominant pattern was not missing vocabulary but boundary drift: IC canon repeatedly mixes foundation with proving-ground detail, and several accepted ADRs now misdescribe the canon surfaces they are supposed to trace.

Most of the signal concentrated in `project-vision.md`, `memory-layer-model.md`, `intelligence-primitives.md`, and accepted ADRs `0003`, `0004`, and `0006`. The extended learning-field and pattern docs mostly served as corroborating evidence rather than primary finding targets.

## Pass-level caveats

Reviewed all 20 IC canon-layer docs in the inventory slice, but I did not elevate draft stalk/pattern issues into standalone findings unless they contradicted active canon or materially clarified a canon-layer mismatch. I treated accepted ADR frontmatter as canon-layer evidence because the pass scope explicitly includes `docs/research/canon-decisions/*.md`, and because several issues here are traceability failures inside accepted decision records rather than new concept proposals.
