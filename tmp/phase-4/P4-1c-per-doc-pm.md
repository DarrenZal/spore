# Phase 4 Pass P4.1c — Per-doc diagnostic (Poietic Match canon-layer docs)

**Pass:** P4.1c
**Agent:** Codex
**Date:** 2026-04-19
**Scope:** 13 `poietic-match:` rows from `tmp/corpus-inventory.tsv` (`adr-eligible` + `extended`), with emphasis on implementation-facing drift between PM vision, grammar, protocol, and review-layer inventory/scope artifacts.
**Inventory anchors:** `/Users/darrenzal/projects/spore/tmp/corpus-inventory.tsv`; `/Users/darrenzal/projects/spore/tmp/concept-roster.tsv`; `/Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md`; `/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/README.md`

## Findings

```yaml
- finding-id: P4-1c-001
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: poietic-match
    doc: poietic-match/docs/project-vision.md
    concept: decentralization-theater
    line_range: 149-149
  claim: |
    `pm.project-vision` now uses the phrase "decentralized matching system" in its own research questions, but `pm:ADR-0005-decentralization-myth-bundle` rejected the PM-side decentralization critique precisely because PM canon supposedly used none of that vocabulary. The corpus therefore carries a live contradiction: PM both says the antecedent never fires and uses the antecedent term in PM-authored canon. Phase 7 needs either to rename the question into PM's own non-decentralization vocabulary or to supersede `pm:ADR-0005` and land the declination work that ADR said would become necessary once the term appeared.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/project-vision.md:143-150
      excerpt: "How do you prevent gaming, manipulation, and dark patterns in a decentralized matching system?"
    - kind: adr-rationale
      ref: /Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0005-decentralization-myth-bundle.md:33-35
      excerpt: "contain **zero** instances of \"decentralization,\" \"decentralized,\" \"peer-to-peer,\" \"P2P,\" or \"peer production\" as PM-authored vocabulary."
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:364-364
      excerpt: "PM canon does not use \"decentralized\" or \"peer-to-peer\" vocabulary where those terms inherit the bundle without explicit acknowledgement."
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: none

- finding-id: P4-1c-002
  type: misplaced
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: poietic-match
    doc: poietic-match/docs/project-vision.md
    concept: curation-valuation-limitation-exchange
    line_range: 46-52
  claim: |
    PM has canonized `CVLE`/`pool-substrate` as its production-layer semantics in `project-vision.md`, but the bridge-note review claim and ADR rationale both place that substance at the grammar layer, and `pm:ADR-0004` explicitly left `pm.grammar` and `pm.protocol` untouched. The result is a layer-placement drift: the load-bearing substrate claim lives in motivational vision prose while the implementation-facing canon still lacks the first-order operation family it is supposed to govern.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/project-vision.md:46-52
      excerpt: "CVLE (curation-valuation-limitation-exchange) is PM's first-order metabolic-operations substrate"
    - kind: cross-tradition-citation
      ref: /Users/darrenzal/projects/poietic-match/docs/research/connections/commitment-pooling-and-mutual-credit.md:136-138
      excerpt: "PM's grammar should explicitly adopt the CVLE four-function substrate"
    - kind: adr-rationale
      ref: /Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0004-three-layer-coordination-stack.md:52-61
      excerpt: "`pm.grammar` and `pm.protocol` are NOT edited by this ADR."
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:340-348
      excerpt: "CVLE valuations (pool-internal curation/valuation/limitation/exchange records)"
  proposed-resolution-track: canon-review-v2
  prior-collision-check:
    - commons-over-market
  notes: none

- finding-id: P4-1c-003
  type: missing
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: poietic-match
    doc: poietic-match/docs/protocol.md
    concept: medium-integrity-governance
    line_range: 352-364
  claim: |
    `pm.protocol` now says stigmergic coordination requires three governance surfaces, but it only concretely places two of them. Surface (1), medium-integrity governance, is declared necessary and then deferred to "future medium-integrity canon". Because the same section says missing surface (1) reproduces decentralization theatre, PM currently canonizes the requirement and the failure mode without carrying the corresponding governance surface.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:354-364
      excerpt: "§8 (Federation) and future medium-integrity canon carry the medium-integrity governance surface."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-coordination-substrate.md:41-45
      excerpt: "Stigmergic coordination primitives, in both Spore and PM canon, must name three governance surfaces"
    - kind: cross-tradition-citation
      ref: /Users/darrenzal/projects/poietic-match/docs/research/connections/commitment-pooling-and-mutual-credit.md:140-142
      excerpt: "PM's protocol should import Ostrom's unit-level / system-level governance distinction"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/project-vision.md:50-50
      excerpt: "commons-law ladder applies at cross-bioregion federation."
  proposed-resolution-track: canon-review-v2
  prior-collision-check:
    - polycentric-not-hierarchical
  notes: none

- finding-id: P4-1c-004
  type: contradictory
  severity: S3
  priority: important
  corpus-location: content
  target:
    repo: poietic-match
    doc: poietic-match/docs/downstream-products.md
    concept: consent-scope
    line_range: 23-23
  claim: |
    `downstream-products.md` advertises `pm:Visibility` as part of the imported PM type surface, but PM canon names visibility through `pm:ConsentPolicy` / "consent scope" instead. Because this registry exists to notify downstreams about protocol breakage and version pins, the stale type name makes PM's only downstream-facing compatibility surface unreliable at exactly the point it is supposed to stabilize.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/downstream-products.md:21-28
      excerpt: "Imported types: `pm:Intent`, `pm:Subject`, `pm:ConstraintSet`, `pm:Agent`, `pm:Visibility`"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/grammar.md:26-33
      excerpt: "consent:        pm:ConsentPolicy         # who can see, who can match"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/protocol.md:37-40
      excerpt: "consent:   pm:ConsentPolicy     # who can discover this intent"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/project-vision.md:22-26
      excerpt: "Consent scope: who can see this intent, who can propose matches"
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: none

- finding-id: P4-1c-005
  type: wrong-level
  severity: S3
  priority: deferred
  corpus-location: meta-corpus
  target:
    repo: poietic-match
    doc: poietic-match/docs/downstream-products.md
    concept: N/A
    line_range: 1-15
  claim: |
    PM canon scope currently special-cases `docs/downstream-products.md` into the canon layer even though the shared protocol defines canon as normative self-description and excludes governance/operational docs. The document's own frontmatter and context describe it as a governance registry for notification-on-breakage, not as PM's normative self-description. Keeping it in the canon layer blurs PM's self-description with downstream-operations bookkeeping.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:16-16
      excerpt: "governance, positioning, protocols, and operational docs are NOT canon for the purposes of this protocol."
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/downstream-products.md:2-15
      excerpt: "doc_kind: governance ... This doc is the informational registry of known consumers."
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/README.md:13-18
      excerpt: "- `docs/project-vision.md`, `docs/downstream-products.md`"
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/corpus-inventory.tsv:22-22
      excerpt: "poietic-match/docs/downstream-products.md\tpoietic-match:extended\t30\t2026-04-13\tTRUE\t0"
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Likely overlaps P4.3 on canon-scope / inventory-layer drift; consolidator should dedupe there.

- finding-id: P4-1c-006
  type: wrong-level
  severity: S3
  priority: important
  corpus-location: meta-corpus
  target:
    repo: poietic-match
    doc: poietic-match/docs/phase-0-spec.md
    concept: commitment-bundles
    line_range: 24-33
  claim: |
    `phase-0-spec.md` is an implementation plan explicitly excluded from PM canon, yet the review inventory still places it in the `poietic-match:` canon-layer set and the concept roster credits it as the introducing doc for `commitment-bundles`. The document itself defers commitment bundles to Phase 1 and then spends the rest of its body on implementation order, tests, stack choices, and coding tasks. That lets an out-of-scope implementation snapshot function as the canonical origin point for a PM primitive.
  evidence:
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/corpus-inventory.tsv:24-24
      excerpt: "poietic-match/docs/phase-0-spec.md\tpoietic-match:extended\t73\t2026-04-11\tTRUE\t0"
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/concept-roster.tsv:56-56
      excerpt: "commitment-bundles\tpoietic-match/docs/phase-0-spec.md\tpoietic-match/docs/project-vision.md\t7\tpoietic-match:extended\tTRUE"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/README.md:20-20
      excerpt: "`docs/phase-0-spec.md` is implementation spec, NOT canon — excluded from canon-review scope."
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/phase-0-spec.md:23-33
      excerpt: "Phase 1 | Commitment bundles (compositional multi-party matching)"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/phase-0-spec.md:294-347
      excerpt: "Implementation Order ... `src/pm/models.py` ... `tests/test_models.py` ... This is the first coding task."
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Likely overlaps P4.3 on canon-layer inventory drift; consolidator should dedupe there.
```

## Pass summary

This pass produced 6 findings, all S3. The dominant pattern is recent ADR work landing at the vision/protocol prose layer while leaving either implementation-facing canon (`grammar.md` / `protocol.md`) or review machinery (`corpus-inventory.tsv` / `concept-roster.tsv`) out of sync with the new framing.

The highest-signal issues are not foundational-disagreement findings; they are canon-maintenance failures: one accepted ADR is already contradicted by current PM prose, one load-bearing governance surface is still only a placeholder, and both `extended` PM docs show scope/layer drift that can contaminate consolidation if not deduped against P4.3.

## Pass-level caveats

The pass prompt explicitly scoped 13 `poietic-match:` inventory rows, even though the shared canon protocol and PM ADR README exclude `docs/phase-0-spec.md` from canon-review scope. I therefore kept `phase-0-spec.md` findings, but marked them as `meta-corpus` and flagged them for likely deduplication with P4.3 rather than treating them as ordinary PM canon defects.

I did not re-read every PM bridge note end-to-end; I only pulled the specific connection notes needed to support the layer-placement and governance-surface findings. Where a finding depends on inventory or concept-roster placement rather than prose alone, I cited the exact row lines rather than inferring from filenames.
