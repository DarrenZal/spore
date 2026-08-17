---
doc_id: spore.connection.janus-addressing-sheaf-bridge
doc_kind: research
status: draft
depends_on:
  - spore.connection.sheaf-theory-formalization
relates_to:
  - spore.federation-protocol
  - spore.connection.obstruction-aware-sheafification
  - spore.connection.hanks-algebraicjulia-sheaf-coordination
  - spore.connection.bosca-ghrist-local-to-global
  - spore.connection.hansen-ghrist-discourse-graphs
sources:
  - title: "JANUS — Universal Addressing, Masking, and Structural Discovery"
    type: external-design-doc
    url: rspace-online:zk-reticulum:docs/ontology/JANUS.md
    note: "Claude-authored design doc forwarded by Jeff Emmett 2026-04-24; implementation shipped on zk-reticulum branch as task-184 with 219 tests passing by 2026-04-30"
  - title: "SHEAF-CAPABILITIES — sheaf-theoretic reframing of v2 addressing"
    type: external-design-doc
    url: rspace-online:zk-reticulum:docs/ontology/SHEAF-CAPABILITIES.md
    note: "Companion doc; status in repo: task-181.8 DONE, task-181.11 (Vince review) PENDING"
  - title: "Curry (2014), Sheaves, Cosheaves and Applications"
    type: primary
    url: https://arxiv.org/abs/1303.3255
  - title: "Robinson (2016), Sheaves are the canonical data structure for sensor integration"
    type: primary
    url: https://arxiv.org/abs/1603.01446
  - title: "Hansen & Ghrist (2019), Laplacians of Cellular Sheaves"
    type: primary
    url: https://repository.upenn.edu/bitstreams/d0719f4d-5bb3-4066-82df-158fceab9a11/download
  - title: "Felber, Flores & Galeana (2025), A Sheaf-Theoretic Characterization of Tasks in Distributed Systems"
    type: primary
    url: https://arxiv.org/abs/2503.02556
    note: "Earlier internal Spore synthesis mis-attributed this paper to 'Alcántara et al.' — corrected here."
  - title: "Yokoyama (2026), Relative Obstructions and Spectral Diagnostics for Sheaves on Cell Complexes"
    type: primary
    url: https://arxiv.org/abs/2601.19056
    note: "Earlier internal Spore synthesis labeled this 'Yokoyama-Robinson 2026'; arXiv shows single author Shinobu Yokoyama. Corrected here."
  - title: "Spore — Sheaf-Theoretic Formalizations for Federated Knowledge Architectures (April 2026)"
    type: internal
    note: "Earlier internal synthesis; lives in spore/docs/research/Sheaves/. Had known citation errors on Felber/Galeana and Yokoyama (see notes above). PATCHED 2026-08-17 against the primary sources: the mapping-cone construction is Yokoyama's, not Felber's (`grep -ci cone` on the Felber paper = 0); Felber's base is one-dimensional and the paper uses only H⁰; and the author initials/compound surnames were corrected to Felber, S., Hummes Flores, B. & Rincon Galeana, H."
disposition: exploratory bridge — not yet a synthesis claim
research_subkind: bridge_note
concepts:
  - sheaves
  - addressing-as-ontology
  - structural-discovery
  - kNN-as-gluing-data
  - enriched-categories
  - grothendieck-site
  - federation-coherence
---

# Bridge Note: JANUS Addressing ↔ Spore Sheaf-Theoretic Federation

**Caveat (read first):** This is exploratory — not a synthesis claim. The parallels between JANUS and Spore's existing sheaf-theoretic federation framing may or may not hold up under close formal examination. Many of the deeper category-theoretic claims in JANUS / SHEAF-CAPABILITIES.md are explicitly flagged in those docs as "for Vince to confirm." This note maps the surface, names the sharpest correspondences, and proposes a small set of open questions — it does not assert that Spore federation IS JANUS or vice versa.

## 1. What the External Artifact Is

JANUS is a 2D-sheaf-based addressing/masking/discovery substrate, designed by Jeff Emmett's team for the rspace-online platform. The forwarded design doc (`rspace-online:zk-reticulum:docs/ontology/JANUS.md`, dated 2026-04-24, Claude-authored) names the substrate as a **2-dimensional sheaf over (spatial-prefix opens × temporal-interval opens), enriched by an open-ended family of metric axes.** Each peer maintains local HNSW kNN graphs per axis. Cross-peer neighborhood claims are proven via Merkle commitments and PSI cardinality protocols. Adding new axes is non-breaking by construction (Structural Addresses are keyed by content-addressed axis-ID).

A companion doc, `SHEAF-CAPABILITIES.md`, reframes the existing v2 addressing architecture (the `task-181` Universal-Addressing-v2 epic, 13 sub-slices) as a single coherent sheaf-theoretic system rather than seven loosely-coupled primitives.

**As of 2026-04-30:** JANUS task-184 is **slice-complete v1** on the `zk-reticulum` branch (8/8 slices done by 2026-04-24 late, 219 tests passing). Caveats Darren initially missed: the implementation uses a `BruteForceIndex` (HNSW drop-in is described in code but not yet wired for FS persistence), and full KKRT PSI is deferred to slice 7b. So "shipped end-to-end as designed" overstates it — what has shipped is the architecture's slice-1 v1 with brute-force kNN + Merkle commitments + MinHash overlap estimator. The companion per-axis delegative-trust system (`task-185`) IS in production at `https://auth.rspace.online/api/trust/axes` (returns 13 axes — the 12 verticals plus a sentinel/global). `SHEAF-CAPABILITIES.md` (`task-181.8`) is marked DONE in the task tracker but remains in pre-review status for the formal questions — `task-181.11 "Vince review of SHEAF-CAPABILITIES.md"` is 6 days old with no evidence the doc has been sent to Vince. The doc itself notes that the four open questions for Vince "are not blockers" for what's shipped — they are blockers for *formal* confidence in the sheaf reframing.

**Source lineage:** Internal rspace-online design + implementation work; not yet anchored to peer-reviewed academic sources. The candidate formal names for the construction ("multi-enriched site," "polysheaf of metric spaces," "indexed metric presheaf") are explicitly flagged as needing confirmation against Kelly/Lawvere enriched category theory or Johnstone topos theory.

## 2. Why This Matters for Spore

Spore already commits to a sheaf-theoretic posture for federation (per the existing bridge note `spore.connection.sheaf-theory-formalization`). JANUS is the first independent design we have encountered that frames addressing-and-discovery as 2D-sheaf machinery — the same neighborhood Spore lives in. Two reasons this is worth a bridge note:

1. **Independent convergence on the same formalism is evidence the formalism is well-posed for federation problems.** It is harder to dismiss "translate, don't unify" as decorative analogy when an unrelated team builds production infrastructure on the same gluing-axiom posture.
2. **JANUS adds three primitives Spore's current sheaf framing does not:** (a) explicit metric-space enrichment over the geometric base, (b) fiber-wise kNN as a *discovery* operator (not just a consistency check), (c) time as a first-class second site coordinate rather than metadata. Each of these is potentially importable into Spore's federation language.

This note is a **bridge**, not an absorption. JANUS solves an addressing problem (where things live, who can pass, what is structurally near). Spore solves a federation problem (how locally-coherent knowledge canons compose without forced unification). They share the formal substrate; their concerns differ.

## 3. Mapping — Spore Federation ↔ JANUS

### Core mappings (mixed confidence — read the strength column)

Stalks and sections are not the same sheaf object; the original draft of this table conflated them. Corrected below.

| Spore concept | JANUS construct | Strength | Anchor / caveat |
|---|---|---|---|
| Local canon / local section over a Spore boundary | Section over a base cell `(U_prefix, U_interval)` | Medium-high | both invoke "section" but Spore's local canon spans an entire governance boundary while JANUS's section is over a base cell of `Open(Spatial) × Open(Temporal)` — different geometries |
| Stalk = data space at a single node | Stalk over a JANUS address point (limit over base cells containing it) | Medium | the "stalk" word is right but neither doc defines it operationally; JANUS doesn't use the term |
| Restriction map (Spore: transformation across membrane boundary, can be semantic) | Restriction over finer cell (JANUS: set containment) | Medium-high | rhetorical match; mechanically distinct — Spore restriction can carry semantic translation, JANUS restriction is filtering |
| Gluing axiom = local sections agree on overlaps extend | Gluing over open cover of `Open(Spatial) × Open(Temporal)` | High | direct correspondence at the axiom level |
| "Translate, don't unify" | "Coherence without consensus" + kNN-nearest-glues-cheapest | Medium-high | rhetorical match; formal equivalence is open |
| H1 cohomology = obstruction = where federation breaks | "Disagreement region in Structural Address match" | **Low / exploratory** | JANUS `match()` is an *agreement-ratio over shared axis commitments* — combinatorial, not a cochain/coboundary calculation. Calling this H1 is unwarranted unless the connection is formally established |
| Cellular sheaf on graphs/posets (Curry lineage) | Sheaf on prefix-tree × temporal-interval product site | Medium-high | JANUS lives over a 2D product site, not a 1D prefix-tree — the temporal dimension is the second coordinate, not metadata |
| Membrane / governance boundary | (no clear JANUS analogue — closest is mask, but mask is auth-shaped not governance-shaped) | Low | JANUS masks gate passage, not governance authority. Different layer. |
| Holon / claim / evidence / attestation graph | (no JANUS analogue) | n/a | JANUS treats all entities uniformly via Structural Address; Spore's typed claim/evidence/attestation graph has no obvious image |
| Presheaf → sheafification lifecycle | Closure under delegation in capability sheaf (per `SHEAF-CAPABILITIES.md`) | Medium | sheafification is named in the SHEAF-CAPABILITIES doc; whether Spore's draft-claim → committed-claim flow really *is* sheafification is open |
| Obstruction preservation under restriction | (not yet addressed in JANUS) | n/a | open question for Vince #3 ("shift-invariant ⟺ masked") is in this neighborhood but not the same theorem |

### New primitives JANUS introduces beyond the current Spore framing

| New from JANUS | Status in Spore today | Note |
|---|---|---|
| Explicit *enrichment* by metric-space family (axes) — separates topological structure from similarity | Sheaf framing collapses these; metric structure is implicit in the "sections agree on overlaps" criterion | Importable. Suggests a refinement: Spore's "sections agree" admits *graded* agreement via Sheaf Laplacian / Dirichlet energy (Hansen-Ghrist line), which JANUS axes operationalize per-dimension |
| Fiber-wise kNN as **discovery primitive** (not just consistency checker) | Spore uses sheaf machinery for governance / coherence checking, not for discovery / recommendation | Importable. The 12 mechanism upgrades JANUS catalogues (guardian selection, Sybil detection, document dedup, delegation suggestion, etc.) all have Spore analogues that could benefit from kNN-on-axis treatment |
| Time as first-class geometric dimension | Spore's federation runs on snapshots; time enters as event-stream metadata | Open. Adding a temporal site coordinate to Spore's federation sheaf would be a structural change, not just an extension |
| Structural Address as content-addressed (axis_id = BLAKE3 of canonical_spec) | Spore identifiers are URI-based, not content-addressed at the axis level | Probably not importable — Spore's authority model is different |
| Identity recovery via position-overlap (axis-map across rotations) | Spore identity is membrane-bound; recovery is via membrane-replay | Different problem; Spore doesn't have key-rotation in the same sense |
| "Coherence without consensus / merging is a gradient, not a vote" | Spore explicitly endorses non-consensus federation | Strong rhetorical match; whether the gradient is computed the same way (kNN proximity) is open |

### Where the analogy strains

- **kNN is fiber-wise, not functorial.** JANUS is explicit about this: kNN does not commute with restriction. The k-nearest of x within a smaller cell may differ from (k-nearest within larger cell) ∩ smaller cell. Spore's existing federation operations are mostly functorial (snapshot composition is associative). If Spore wants kNN-style discovery, it inherits this non-functoriality and has to address what that means for governance.
- **The "value-geography" framing presupposes a metric is meaningful at every axis.** For trust, identity, and capability axes this is plausible; for governance axes (where strict ordering matters more than similarity) it is less clear.
- **JANUS's "identity-of-everything" (peers, docs, capabilities, events all live in one neighborhood topology) is a stronger commitment than Spore makes.** Spore tracks holons, claims, evidence, attestations — but doesn't claim they're all points in the same space. This is a meaningful divergence.
- **The shipped JANUS implementation uses brute-force kNN.** HNSW is described in the design doc but not yet wired for FS persistence. Discovery latency claims should not assume HNSW.
- **"kNN graph is gluing data" is heuristic, not theorem.** The doc asserts kNN-nearby sections are likely to agree on overlaps, but this requires metric compatibility conditions on the axis distance to be true. Those conditions are not stated formally in either JANUS.md or SHEAF-CAPABILITIES.md.
- **`StructuralAddress` matching is not sheaf cohomology.** It is a combinatorial agreement-ratio over content-addressed commitments. Calling its disagreement region "H1" is rhetorical, not formal — see corrected mapping table.
- **JANUS masks and Spore governance live on different layers.** Masks gate cryptographic passage (capability checks). Spore governance gates collective decision-making. Conflating them would be a category error.

## 4. SHEAF-CAPABILITIES.md — Four Open Questions for Vince

The Spore precedent for this kind of question is anchored in `spore.connection.sheaf-theory-formalization`, which cites Curry (cellular sheaves), Robinson (sheaves-as-data-fusion), Hansen-Ghrist (sheaf Laplacians), Bodnar et al. (neural sheaf diffusion), Felber-Flores-Galeana 2025 (sheaf characterization of distributed-system tasks), and Yokoyama 2026 (relative obstructions and spectral diagnostics). That lineage has *partial* overlap with Vince's four open questions — *not* "directly relevant to all four." Honest assessment per question:

1. **"Right enriched-category structure for Graph IFS per-tag alphabets?"** — Hansen-Ghrist's spectral sheaf theory provides metric/energy diagnostics over cellular sheaves and the **sheaf Laplacian as a graded consistency operator**, but does *not* directly answer "what's the right enriched-category structure over per-tag alphabets" — that's a Kelly/Lawvere enriched-category question first, with spectral methods as a downstream diagnostic. The honest contribution from this lineage is "here are tools for diagnosing when an enrichment-choice has good vs. bad spectral properties," not "here's the enrichment to use." Bodnar's neural sheaf diffusion is similarly downstream-of-the-choice, not at-the-choice.

2. **"Finer Grothendieck topology for cross-frame delegation / revocation?"** — the **mapping-cone construction** for relative obstructions is **Yokoyama 2026**, not Felber-Flores-Galeana 2025 (citation corrected 2026-08-17 — see the frontmatter note; `grep -ci cone` on the Felber paper returns **0**). That machinery is interesting for "what fails to globalize when constrained by an ambient reference," and revocation propagation is a candidate analogue. Felber-Flores-Galeana separately build a **task sheaf whose base is one-dimensional** — the paper works over a graph of configurations, treated as a cell complex with vertices and edges as its 0- and 1-cells — and characterise task solvability via **global sections and the zeroth cohomology**; the paper does not use H¹ at all. Either way the paper's site is the execution structure of the distributed system, not the Grothendieck site of cross-frame delegation chains. The connection is *suggestive*, not direct. Worth pairing with Spore's frame-rooted-opens framing for a focused cross-read.

3. **"Shift-invariant ⟺ masked theorem under directed restrictions?"** — This is the question that overlaps most plausibly with the existing Spore line. The `spore.connection.obstruction-aware-sheafification` note treats obstruction preservation under restriction; if there's a candidate "shift-invariant ⟺ masked" theorem, this is where it would live. The word "precisely" in earlier drafts of this section overstated the match. Honest framing: "this question lives in the same neighborhood as our obstruction-aware work; whether the same theorem applies is open."

4. **"Étale topology for content addressing?"** — Étale topology in the Grothendieck sense is heavyweight. Whether the addressing problem genuinely needs étale-level fiber structure or whether Zariski topology suffices is open. The internal Spore sheaf-research synthesis touches étale obliquely but doesn't have a settled view. Worth a focused session, lowest-priority of the four for an early conversation.

**Net:** the Spore lineage offers genuine adjacency (especially on questions 2 and 3), but it does NOT pre-answer Vince's questions. Frame any offer as "second source of partial-overlap thinking," not "we already have answers."

## 5. Concrete Action Items

**Immediate (today's call with Jeff):**
- Confirm with Jeff whether SHEAF-CAPABILITIES.md has been sent to Vince. If not, ask why.
- Offer: Darren can do a comparative-intake-style read of SHEAF-CAPABILITIES.md against Spore's existing sheaf research, as a parallel-track companion to Vince's review (not a substitute). Frame as "two independent reads catch different things."
- Ask Jeff who Vince is — background, ACT-community position, publication record. This bridge note can update with his vault entry once we know.

**Post-call (week-of):**
- *Only if Jeff explicitly asks for a forward to Vince:* share the Spore sheaf-research synthesis (`docs/research/Sheaves/Sheaf Theory Research for Spore.md`). Do NOT forward unsolicited — Jeff owns the Vince relationship, and the synthesis has citation errors (Felber/Galeana attribution, Yokoyama single-author) that need patching before any external share. Default behavior: share with Jeff first, let Jeff decide whether to forward.
- Read SHEAF-CAPABILITIES.md in full once granted access (already pullable via `git -C ~/projects/rspace-online show origin/zk-reticulum:docs/ontology/SHEAF-CAPABILITIES.md`), and write follow-up bridge note focused on the four questions specifically.

**Medium-term (post-Vince-review):**
- If formal review confirms the construction is genuine "2D enriched sheaf over a product site with indexed metric-family + fiber-wise kNN as discovery operator," consider importing the construction into Spore's federation layer. Specifically: (a) per-axis sheaf Laplacian for governance signals, (b) kNN-as-gluing-data for discovery primitives, (c) temporal site coordinate for federation snapshot lineage.
- Cross-pollinate `mi/` (Memetic Intelligence — RAG clustering + dedup over the encrypted store) ↔ Spore's claims/evidence/attestation graph. The mi subsystem on the rspace-online `dev` branch handles semantic clustering of encrypted content via cosine-similarity edges; structurally similar to Spore's relationship between claims and evidence.

## 6. Open Questions

- Is "kNN graph is gluing data" provable, or a heuristic? The JANUS doc asserts: "two sections that are kNN-nearby are sections whose restrictions to shared opens are *likely to agree* — the kNN graph is *gluing data*. τ̂, the global section where all locals glue consistently, sits at the limit of kNN-nearest coherence." This is a strong claim. Under what conditions on the metric is it true that kNN proximity implies restriction-compatibility?
- Does the Structural Address commitment (`BLAKE3(sort(kNN_members))`) preserve enough information for downstream reconstruction? The JANUS doc admits collision rate is "empirically unknown until we run a study."
- Is JANUS's `match()` operator (agreement-ratio over shared axes) equivalent to a sheaf-cohomology calculation, or a fundamentally different combinatorial object?
- How do non-functorial discovery operators (kNN) interact with functorial governance operators (snapshot composition)? In Spore's terms: if a holon's neighborhood changes when zoomed in, does that affect attestation validity at the smaller scope?

## 7. Provenance Note

This bridge note was drafted 2026-04-30 before a follow-up call with Jeff Emmett (today, time TBD). The exploratory framing reflects pre-call uncertainty about (a) Vince's status and engagement timeline, (b) whether Jeff sees Spore-side input as wanted or off-topic, (c) whether the JANUS implementation team is open to formal correspondences with the Spore federation framing. None of those are settled yet. Do not promote this note's status beyond `draft` or its `disposition` beyond `exploratory bridge` until those signals come back.
