# Phase 4 Pass P4.5 — Counterfactual probe (primitive-class concepts)

**Pass:** P4.5
**Agent:** Codex
**Date:** 2026-04-19
**Scope:** Counterfactual probe across all 90 `primitive-class=TRUE` concepts in `tmp/concept-roster.tsv`, with special attention to low-use concepts, doc-title handles, and primitive pairs that admit lossless paraphrase.
**Inventory anchors:** `/Users/darrenzal/projects/spore/tmp/concept-roster.tsv`; `/Users/darrenzal/projects/spore/tmp/adr-rationale-index.tsv`; `/Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md`

## Audit Trail

Method used for every row:

- Cross-check against capstone `§1`, `§3`, and `§7`, plus `tmp/adr-rationale-index.tsv`, before emitting any `dead-weight` call.
- For all concepts with no capstone/ADR protection, and for all concepts with usage-count `<=18`, sample canonical use-sites across Spore / IC / PM and ask the pass question directly: "if this did not exist, what could not be expressed?"
- Rows marked `keep` did **not** admit a clean lossless paraphrase across sampled canonical uses.
- Rows marked `finding` did admit a clean enough paraphrase, overlap, or implementation-specific narrowing to clear the evidence bar below.

| concept | usage | support anchors | audit result |
|---|---:|---|---|
| `agent` | 83 | §1/§3 | keep (capstone-supported) |
| `agent-commons` | 13 | - | keep (sampled; no clean paraphrase) |
| `agentic-control` | 10 | - | keep (sampled; no clean paraphrase) |
| `agentic-memory` | 12 | - | keep (sampled; no clean paraphrase) |
| `autopoiesis` | 14 | §3/§7 | keep (capstone-supported) |
| `bi-temporal` | 6 | - | keep (sampled low-use; no clean paraphrase) |
| `bioregional-coordination` | 18 | - | keep (sampled; no clean paraphrase) |
| `bioregional-scope` | 18 | - | keep (sampled; no clean paraphrase) |
| `boundary-commoning` | 46 | §7; ADR | keep (capstone + ADR cross-check) |
| `capability-routing` | 8 | - | keep (sampled; no clean paraphrase) |
| `care` | 39 | §1/§3/§7 | keep (capstone-supported) |
| `collective-agency` | 23 | §1/§7; ADR | keep (capstone + ADR cross-check) |
| `commitment` | 122 | §1/§3/§7; ADR | keep (capstone + ADR cross-check) |
| `commitment-bundles` | 7 | - | keep (sampled; no clean paraphrase) |
| `commitment-pooling` | 56 | - | keep (sampled; no clean paraphrase) |
| `commons-as-verb` | 14 | §7 | keep (capstone-supported) |
| `commons-law` | 13 | - | keep (sampled; no clean paraphrase) |
| `comparative-intake` | 15 | - | keep (sampled; no clean paraphrase) |
| `constitutional-artifacts` | 17 | - | keep (sampled; no clean paraphrase) |
| `constitutional-commitments` | 17 | - | keep (sampled; no clean paraphrase) |
| `coordination-grammar` | 42 | - | keep (sampled; no clean paraphrase) |
| `coordination-substrate` | 37 | ADR | keep (ADR-touched) |
| `cosmo-local-production` | 14 | - | keep (sampled; no clean paraphrase) |
| `curation-valuation-limitation-exchange` | 26 | - | keep (sampled; no clean paraphrase) |
| `decentralization-theater` | 21 | - | keep (sampled; no clean paraphrase) |
| `discourse-graph` | 25 | - | keep (sampled; no clean paraphrase) |
| `domain-specific` | 6 | - | keep (sampled low-use; no clean paraphrase) |
| `epistemic-graph` | 7 | - | finding `P4-5-001` |
| `evaluation` | 28 | §7 | keep (capstone-supported) |
| `evidence` | 146 | §3/§7; ADR | keep (capstone + ADR cross-check) |
| `failure-modes` | 37 | - | keep (sampled; no clean paraphrase) |
| `federation` | 90 | ADR | keep (ADR-touched) |
| `federation-protocol` | 56 | ADR | keep (ADR-touched) |
| `field` | 91 | §1/§3/§7; ADR | keep (capstone + ADR cross-check) |
| `filtering-membrane` | 17 | §7 | keep (capstone-supported) |
| `gift-obligation` | 13 | §7 | keep (capstone-supported) |
| `governance-memory` | 32 | - | keep (sampled; no clean paraphrase) |
| `graph-projections` | 12 | - | keep (sampled; no clean paraphrase) |
| `grounding` | 43 | - | keep (sampled; no clean paraphrase) |
| `holon` | 42 | §1/§3/§7; ADR | keep (capstone + ADR cross-check) |
| `inclusive-governance` | 11 | - | keep (sampled; no clean paraphrase) |
| `instance-model` | 15 | - | finding `P4-5-002` |
| `intelligence-primitives` | 47 | ADR | finding `P4-5-002` |
| `intent` | 66 | §3/§7 | keep (capstone-supported) |
| `intent-pressure` | 19 | - | keep (sampled; no clean paraphrase) |
| `interoperability-as-institutional` | 27 | - | keep (sampled; no clean paraphrase) |
| `knowledge-commons` | 45 | - | keep (sampled; no clean paraphrase) |
| `knowledge-graph` | 20 | - | finding `P4-5-001` |
| `koi-net` | 6 | - | finding `P4-5-003` |
| `learning` | 73 | - | keep (sampled; no clean paraphrase) |
| `learning-field` | 27 | - | keep (sampled; no clean paraphrase) |
| `learning-membrane` | 37 | - | keep (sampled; no clean paraphrase) |
| `linguistic-closure` | 23 | - | keep (sampled; no clean paraphrase) |
| `market-dependence` | 38 | - | keep (sampled; no clean paraphrase) |
| `match-proposal` | 1 | - | keep (sampled low-use; no clean paraphrase) |
| `matching-field` | 5 | - | keep (sampled low-use; no clean paraphrase) |
| `membrane` | 83 | §1/§3/§7 | keep (capstone-supported) |
| `membrane-operations` | 15 | - | keep (sampled; no clean paraphrase) |
| `memory` | 112 | §3/§7; ADR | keep (capstone + ADR cross-check) |
| `memory-governance` | 50 | §7; ADR | keep (capstone + ADR cross-check) |
| `memory-layer-model` | 18 | ADR | finding `P4-5-002` |
| `memory-layers` | 51 | - | keep (sampled; no clean paraphrase) |
| `mutual-credit` | 26 | - | keep (sampled; no clean paraphrase) |
| `mycorrhizal-federation-protocol` | 52 | ADR | keep (ADR-touched) |
| `obstruction` | 12 | - | keep (sampled; no clean paraphrase) |
| `platform-cooperativism` | 13 | - | keep (sampled; no clean paraphrase) |
| `pluriversal-commoning` | 31 | ADR | keep (ADR-touched) |
| `polycentric-governance` | 33 | ADR | keep (ADR-touched) |
| `power-capture` | 38 | §7 | keep (capstone-supported) |
| `progressive-disclosure` | 4 | - | keep (sampled low-use; no clean paraphrase) |
| `relational-agency` | 24 | - | keep (sampled; no clean paraphrase) |
| `reproductive-commoning` | 23 | §3/§7 | keep (capstone-supported) |
| `reputation-market` | 14 | §7 | keep (capstone-supported) |
| `restriction-maps` | 14 | - | keep (sampled; no clean paraphrase) |
| `retrieval` | 42 | - | keep (sampled; no clean paraphrase) |
| `revisit-triggers` | 6 | - | keep (sampled low-use; no clean paraphrase) |
| `roadmap` | 32 | - | keep (sampled; no clean paraphrase) |
| `signal` | 63 | §3/§7 | keep (capstone-supported) |
| `solidarity-substrate` | 12 | §7 | keep (capstone-supported) |
| `source-claims` | 43 | - | keep (sampled; no clean paraphrase) |
| `sovereignty-invariants` | 9 | - | keep (sampled; no clean paraphrase) |
| `spore-instance-model` | 9 | - | finding `P4-5-002` |
| `stigmergy` | 20 | §7; ADR | keep (capstone + ADR cross-check) |
| `structural-coupling` | 11 | §7 | keep (capstone-supported) |
| `subject` | 22 | - | keep (sampled; no clean paraphrase) |
| `the-coordination-ecology` | 14 | - | keep (sampled; no clean paraphrase) |
| `the-protocol` | 49 | - | keep (sampled; no clean paraphrase) |
| `trust-attestation` | 3 | - | keep (sampled low-use; no clean paraphrase) |
| `trust-field` | 4 | - | keep (sampled low-use; no clean paraphrase) |
| `value-capture` | 12 | - | keep (sampled; no clean paraphrase) |

## Findings

```yaml
- finding-id: P4-5-001
  type: should-be-merged
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/foundations/constitutional-artifacts-and-graph-projections.md
    concept: knowledge-graph / epistemic-graph
    line_range: 58-58
  claim: |
    Spore currently carries one graph surface under two primitive-class names. `constitutional-artifacts-and-graph-projections.md` defines the epistemic graph as the same surface "called 'knowledge graph' in the vision and public-facing docs," while other canon surfaces keep switching between the two labels. The counterfactual probe succeeds in both directions: removing either name leaves the same expressivity once the other remains. The correct state is one canonical concept with the second term retained only as alias or legacy gloss, not a second primitive-class entry.
  evidence:
    - kind: inventory-row
      ref: "concept-roster.tsv row 132 (primitive-class=TRUE)"
      excerpt: "epistemic-graph"
    - kind: inventory-row
      ref: "concept-roster.tsv row 206 (primitive-class=TRUE)"
      excerpt: "knowledge-graph"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/foundations/constitutional-artifacts-and-graph-projections.md:58-58"
      excerpt: "Epistemic graph (called \"knowledge graph\" in the vision and public-facing docs)"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/project-vision.md:174-174"
      excerpt: "node substrate (knowledge graph, entity resolution, federation, sensors)"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/foundations/lexicon/field.md:97-99"
      excerpt: "The term helps relate Spore's coordination patterns, epistemic graph, and learning membrane"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md:183-183"
      excerpt: "This is the \"knowledge graph\" from the vision doc, renamed to emphasize its epistemological function"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: possible cross-pass dedup with any P4.1a naming-drift finding on Spore graph terminology; consolidator should reconcile if present.

- finding-id: P4-5-002
  type: dead-weight
  severity: S2
  priority: important
  corpus-location: content
  target:
    repo: N/A
    doc: N/A
    concept: instance-model / spore-instance-model / intelligence-primitives / memory-layer-model
    line_range: N/A
  claim: |
    Four primitive-class entries are bundle-label handles rather than irreducible concepts. `instance-model` and `spore-instance-model` are both paraphrasable as the canon/node/agent/site composition named in the Spore instance-model doc; `intelligence-primitives` is paraphrasable as retrieval + memory + evidence + grounding + evaluation + agentic control + capability routing; `memory-layer-model` is paraphrasable as the five named layers plus their boundary-commoning surface. The defining texts already do this paraphrase explicitly, and `spore-instance-model.md` goes further by stating that "Instance" is not a new primitive. These labels can remain as document titles or doc_ids, but they do not survive the primitive-class counterfactual probe as concepts.
  evidence:
    - kind: inventory-row
      ref: "concept-roster.tsv row 190 (primitive-class=TRUE)"
      excerpt: "instance-model"
    - kind: inventory-row
      ref: "concept-roster.tsv row 193 (primitive-class=TRUE)"
      excerpt: "intelligence-primitives"
    - kind: inventory-row
      ref: "concept-roster.tsv row 227 (primitive-class=TRUE)"
      excerpt: "memory-layer-model"
    - kind: inventory-row
      ref: "concept-roster.tsv row 362 (primitive-class=TRUE)"
      excerpt: "spore-instance-model"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/foundations/spore-instance-model.md:81-88"
      excerpt: "\"Instance\" is not a new primitive. ... No new primitives are introduced."
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/project-vision.md:112-112"
      excerpt: "The instance model ... compose into concrete implementations — canon, node (substrate), agent, and site"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/README.md:28-28"
      excerpt: "spore-instance-model.md — how Spore materializes: canon, node, agent, site"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/project-vision.md:56-66"
      excerpt: "1. Retrieval ... 7. Capability Routing"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:9-11"
      excerpt: "Seven building blocks that intelligence systems are made of."
    - kind: source-doc
      ref: "/Users/darrenzal/projects/intelligence-commons/docs/foundations/memory-layer-model.md:9-11"
      excerpt: "Five memory layers for intelligence systems, ordered by timescale and scope."
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: cross-checked capstone §§1/3/7 and `tmp/adr-rationale-index.tsv` before calling these dead-weight; no preserving rationale appeared at concept level. Possible cross-pass dedup with P4.3 if that pass flags concept-roster leakage from document-title handles.

- finding-id: P4-5-003
  type: over-specified
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: spore
    doc: docs/project-vision.md
    concept: koi-net
    line_range: 165-165
  claim: |
    `koi-net` is primitive-class in the roster, but every canonical use sampled treats it as the current implementation of substrate and transport concerns that are already expressible through other concepts. Spore's own canon says the federation protocol is substrate-agnostic, the node abstraction does not mandate KOI, and KOI-net is only the present transport materialization. The counterfactual probe therefore succeeds: removing `koi-net` from primitive-class treatment does not reduce canon expressivity once node, federation transport, knowledge graph, and sensors remain available. It is an implementation-specific alias, not a primitive.
  evidence:
    - kind: inventory-row
      ref: "concept-roster.tsv row 207 (primitive-class=TRUE)"
      excerpt: "koi-net"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/project-vision.md:165-165"
      excerpt: "Current federation transport implementation"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/foundations/spore-instance-model.md:29-31"
      excerpt: "The current implementations use KOI ... one materialization, not the definition."
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/foundations/mycorrhizal-federation-protocol.md:144-148"
      excerpt: "the protocol does not mandate a single transport topology ... Current implementation: KOI-net"
    - kind: source-doc
      ref: "/Users/darrenzal/projects/spore/docs/project-vision.md:174-174"
      excerpt: "node substrate (knowledge graph, entity resolution, federation, sensors)"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: possible cross-pass dedup with P4.6 if the repo-topology pass separately flags implementation-name bleed from substrate layer into canon vocabulary.
```

## Pass summary

Three findings cleared the bar: 2 structural (`S2`) and 1 canonical (`S3`). The dominant pattern was not that low-use concepts were empty; most low-use PM and IC terms still failed the paraphrase test once sampled against their actual protocol or layer roles. The positive signal concentrated instead in duplicate naming (`knowledge-graph` / `epistemic-graph`), document-title bundle handles that leaked into primitive-class treatment, and one implementation-specific substrate name (`koi-net`) that canon already describes as non-definitional.

The full 90-row probe produced a conservative result: capstone-supported and ADR-protected concepts mostly held, and even very low-use concepts like `match-proposal`, `progressive-disclosure`, `trust-field`, and `trust-attestation` still retained distinct protocol work in sampled use-sites. The consolidator should pay more attention to primitive-class hygiene than to concept-count minimization per se.

## Pass-level caveats

- I did not emit a finding merely because a concept looked "wrong-level." Several low-use terms are likely better framed as protocol artifacts, bundle labels, or implementation surfaces, but this pass only elevated cases where the counterfactual probe itself succeeded cleanly enough for `dead-weight`, `over-specified`, or `should-be-merged`.
- For `dead-weight` calls, I explicitly cross-checked capstone `§1`, `§3`, `§7`, plus `tmp/adr-rationale-index.tsv`, before emitting the finding. The grouped bundle-label finding survived that check because the preserving text touched the underlying constituent primitives or the document surface, not the label as a primitive-class concept.
- The audit used targeted close reading rather than exhaustive line-by-line re-reading of all 90 concepts' full histories: every capstone/ADR-protected concept was cross-checked, and all low-use/no-anchor concepts were sampled at canonical use-sites. That is sufficient for this pass's evidence bar, but some `keep` rows may still generate different `wrong-level` or `misplaced` findings in other passes.
