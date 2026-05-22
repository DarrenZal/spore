# Sahely Wave 1 Scope — Sheaf-Geometry Cluster (2026-05-21)

**Operator-confirmed via parent-session question 2026-05-21.** 7 Gmail-known posts, substance-curated (not manifest-classifier-driven, because the classifier's first-match-wins logic mis-tagged sheaf-substrate posts that ALSO matched viability/autopoiesis keywords).

## The 7 posts (anchor + 6 cluster)

| # | Date | Title | Source | Notes |
|---|------|-------|--------|-------|
| 1 | 2026-04-02 | From Entanglement to Governance: The Geometry of Coherence Across Scales | Gmail | **ANCHOR** — operator's original goldmine signal; Phase 2 anchor #5 |
| 2 | 2026-03-22 | From Coherence to Viability: A Geometry of Living Systems | Gmail | Phase 2 anchor #8; explicit predecessor of #1 |
| 3 | 2026-02-07 (pub 2026-02-08) | The Grammar of Viability: Diagnosing the Limits of Measurement, Preserving Coherence Across Scales, and Designing for Endurance | Gmail | "Coherence Across Scales" title overlap with #1 |
| 4 | 2026-03-21 | A Geometry of Coherence: A Practical Language for Keeping Systems Alive | Gmail | Same vocabulary cluster as #1+#2 |
| 5 | 2026-04-22 | Emotional Sentience as Relational Architecture: From Kauffman's Ascent to the Relational-Exceptional Program | Gmail | Manifest-classified sheaf-geometry; only Gmail-known post in the manifest's sheaf-tag |
| 6 | 2026-01-08 | A Closure-First Framework for Reality: How Coherence, Constraint, and Invariance Shape Physics, Consciousness, and Civilization | Gmail | Closure-principle = sheaf gluing axiom substrate |
| 7 | 2026-02-09 | A Single Grammar Across Scale: Invariant Constraints, Viability, and the Emergence of Value from Matter to Mind | Gmail | Invariance + multi-scale grammar |

## Rationale for substance-curation over manifest-classification

The `build-manifest.py` `classify_from_slug()` function is first-match-wins + single-tag (returns string not list). Posts that engage BOTH viability + sheaf substrate (like #1 Apr 2 anchor) got `topical_classification=viability-grammar` because "viability" matched before "geometry" in the if-chain. That's a classifier bug, not a substance signal.

The 7 manifest-classified `sheaf-geometry` posts the heuristic surfaced were:
- 6 sitemap-only: 2016-09-06 Pribram-Bohm (3rd-party repost) + 2018-12-28 Toroidal Geometry (3rd-party repost — Dirk Meijer) + 2025-05-02 Harmonic Mirror Cosmology + 2025-05-09 Dual Aspect Langlands + 2025-05-24 Triality Aligned Integral Kosmogenesis + 2025-10-18 Biogeometry to Hinductive Coherence
- 1 Gmail-known: 2026-04-22 Emotional Sentience (Kauffman) → kept in Wave 1 as #5

The 6 sitemap-only sheaf-tagged posts are **deferred to Phase 1f** per operator Decision 4 (Phase 1f mining pass on sitemap-only; HTML-fetch + relevance-score; promote to full intake if substance warrants). Wave 1 stays lean + Gmail-known.

## Parking item — classifier multi-tag fix (LOW priority, defer to Phase 1f authoring)

`tmp/sahely-build-manifest.py` `classify_from_slug()` should support multi-tag (return list, not single string). The Phase 1f mining pass can re-classify properly when it runs. Current manifest under-tags sheaf-substrate by ~6 Gmail-known posts plus an unknown count of sitemap-only.

## What this wave excludes (intentional)

- Sitemap-only sheaf-tagged posts (6, deferred to Phase 1f)
- Other Gmail-known posts that touch coherence/geometry vocabulary at title-level but at lower density (these may surface in Wave 2+ broader cluster)
- Reposts (the 3 marked `is_repost: true` are their own dedicated wave per Phase 1e repost-handling spec)

## Wave 1 success criteria

- 7 extraction records at `docs/research/corpus-review/originals/sahely-extractions/<slug>.md` (selective depth; matches Wave A format)
- 7 PDFs at `docs/research/corpus-review/originals/sahely-pdfs/<slug>.pdf` (local-only per C2)
- 7 hash rows appended to `tmp/sahely-pdf-hashes.txt`
- Phase 1e KG ingestion: hand-curated 10-15 facts per post for anchor #1 + supporting density for #2-#7
- Validator 9 errors EXACT (warnings grow per C1 corpus-review-input exception)
- Sibling-repo SHAs unchanged
- Dispatch transcript at `tmp/sahely-dispatch-wave-1.md`
- Single wave-1 commit
