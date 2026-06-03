---
doc_id: spore.synthesis.coherence-without-collapse-and-its-projections
doc_kind: research
research_subkind: synthesis_note
status: draft
depends_on:
  - spore.project-vision
  - spore.commitment-pooling
relates_to:
  - spore.synthesis.compositional-field-architecture
  - spore.connection.hansen-ghrist-discourse-graphs
disposition: name the through-line (coherence-without-collapse) + the four-layer integration architecture across the repo constellation; keep the math backstage and per-application-validated
promotion_status: defer
concepts:
  - coherence-without-collapse
  - two-register-discipline
  - four-layer-integration-architecture
  - same-move-n-domains
  - federated-sheaf-substrate
governance_clusters:
  - spore:coordination-grammar
---

# Coherence Without Collapse — the design move, and its projections

**Status:** draft v0.1 — 2026-06-02. **Skeleton.** This is the Spore-side *backstage* articulation of a design move that several in-flight workstreams keep re-discovering from their own angles, and of how the growing repo constellation hangs together. It is a research/connection note, **not canon**: every formal claim below is scoped as a *candidate lens*, not a ratified primitive. The full version fills out §3 and §7; this version pins the through-line so the *frontstage* artifacts (the RC financing brief, the CIE coherence-map framing, the grant story) can all draw one consistent line.

Companion / source reading (this doc points to, rather than duplicates): the vault doc *Sheaf Theory — Living Coherence, Hypergraph Sheaves, and Bioregional Regeneration*; **sheaf.lol** (pedagogy); `spore.connection.hansen-ghrist-discourse-graphs`; `spore.connection.zhao-async-nonlinear-sheaf-diffusion`; `docs/research/planning/sheaf-experiment-deferral.md` (the discipline that gates all of this); `spore.synthesis.compositional-field-architecture` (the sibling synthesis).

## Purpose

Across RC bioregional financing, the Civic Intelligence Engine, vocabulary/consent work, and the operator's own knowledge graph, the same problem recurs: **hold local sovereignty and global coherence at once — let local parts keep their own meaning while still composing into a whole that actually holds together.** This doc names that move, says where the math sits (backstage), and lays out how the repos integrate so the constellation stays legible as it grows. It exists so each project can recognize its own work as an instance of one shared move, and so we stop re-inventing the same framing per project.

This is a *recognition*, not a specification, and not a promotion. The honest-status ledger is §7.

---

## 1. The design move: coherence without collapse

Three statements, all in plain language, all already in use frontstage:

- **Route/represent through coherence, not similarity or preference.** Fund (or surface, or match) the *bundle whose constraints actually hold together* — not the single highest-scoring item, not the cluster of most-similar items.
- **Obstruction is information.** When a bundle *won't* close, that tells you *where* and *why* (a missing bridge, an incompatible protocol, a circular dependency, an over-exposed data flow, or an irreducible difference that should be *protected*, not optimised away) — and *who* can repair it, without the system pretending to own the legitimacy call.
- **Don't flatten local sovereignty.** Coherence is not consensus. The goal is enough translation to coordinate, never a forced global agreement that erases local meaning (e.g. an Indigenous governance protocol).

**Heterophily is often the point.** A seed collector, a GIS mapper, an Indigenous governance steward, and a funder are not similar — they may *compose* a viable restoration commitment precisely *because* they differ in the right ways. Clustering asks "what's near what"; coherence asks "what can hold together."

This move is the load-bearing generalization. It is a **design move**, not a claim that one mechanism is validated everywhere (see §7, and the non-goal against universality).

## 2. The backstage formalization (candidate lens — thin, not canon)

The mathematics that *describes* the move — and could eventually make it computable — is **cellular-sheaf theory over a (directed, hyper-)graph**: local state-spaces (stalks) on each participant; accountable translations (restriction maps) on each relation doing eligibility / settlement / consent / interpretation; a *coherent whole* = a global section; *where it can't cohere* = a cohomological obstruction. The discourse-layer variant (claims/evidence/arguments) and the federation variant (commitments/pools/stewards/routes) are two readings of the same object.

**This is a lens, and a thin one.** Per `sheaf-experiment-deferral.md`: the object is *not yet typed* in any Spore artifact; no spectral claim counts as operational until it (a) types the object and (b) **beats simpler baselines**. The two-layer discourse-sheaf construction is novel and has *no empirical track record*. So the math stays **backstage** (research/lab), informing architecture choices already made — not asserted as validated, not promoted to canon. See §7.

## 3. Same move, N domains

Each is an *instance*, validated on its own terms — not a single product stretched across domains:

- **RC bioregional financing** — *route capital through coherence, not preference.* A commitment pool is a many-way relation binding needs · offers · stewards · capital · ecological constraints · eligibility · evidence · timelines · governance · outcomes · repair paths. The question: does a viable bundle exist; which constraints conflict; what's missing; which sovereignty boundary not to cross. (Frontstage brief: `tmp/rc-financing-coherence-design-principle-brief.md`.)
- **CIE (civic)** — *represent a district's plural perspectives without flattening them.* "Where is the district converging vs. structurally split?" as a candidate-useful map. A scalable coherence signal as an alternative to an intractable integration measure.
- **Vocabulary reconciliation** — accountable translations between local vocabularies; the unresolved-translation residue is the signal. Translate enough to coordinate without a forced global vocabulary.
- **Consent / data-sharing** — policies as points in (visibility-tiers × off-limits-ops); the soundness condition is *narrowing-only* (no path can launder a do-not-compute flag into a permitted op); withdrawal recomputes or tombstones.

*(Fill-out: one short worked sub-section per domain, with its typed object + its simplest baseline.)*

## 4. The four-layer integration architecture (how the repos hang together)

The constellation is managed by the structure that already exists (`darren-workflow/config/repo-instances.yaml` + `route_topology.py` + §13 of the intake protocol), classified into four layers:

1. **Grammar (Spore)** — the coordination grammar; the design move above + (backstage) the sheaf lens as research. Upstream; never forked; never a propagation target.
2. **Capability spec (Intelligence Commons)** — IC is a docs-first canon, so it homes the discourse-graph + coherence-diagnostic **as a pattern/spec**, not as running code. Downstream-aligned to Spore.
3. **Scoped canons + applications** — canon-bearing peers (bregion, BKC, and `bioregional-economics` as a ratified bregion sub-domain) + downstream PM; *plus* non-canon applications (CIE, KnowSys, the RC facility, the GPU nodes) that **consume** the grammar + capabilities but don't author canon.
4. **Substrate + implementation (personal KOI backend / koi-processor)** — indexes + routes across every repo; holds the discourse/knowledge graph and the learning-field convergence code; **this is where the coherence-diagnostic actually runs** (IC describes it; koi-processor executes it). Both the integration medium and the first live testbed (§6).

Rule of thumb: **one capability — spec in IC, code on KOI, instantiated many places.** Don't re-implement per repo; don't put spec or code in Spore canon.

## 5. Two registers + Tier-1 / Tier-2

- **Two registers.** *Backstage* (research/lab): sheaf/cohomology language is fine, scoped as lens. *Frontstage* (funders, candidates, partners): **plain design principle only — no sheaf/cohomology vocabulary.** The same idea, two registers.
- **Tier-1 vs Tier-2.** Tier-1 = the *framing* (route through coherence; obstruction is information), usable in a design conversation today. Tier-2 = actual computation over real data — a separate, fundable R&D thread, gated behind typed-object + beats-baselines. Never a runway spend.

## 6. The KOI graph as the first testbed (and the 67-GPU node network)

The operator's own discourse/knowledge graph is the **first live instance** of the move, and the cheapest place to make it real: the next loop after self-query / self-improve / self-route is **self-cohere / diagnose** — coherence over the cross-repo discourse graph, reported *alongside* baselines. A **network of bioregional "dreaming → data/mapping" nodes (the 67-GPU proposal)** is, honestly, the same shape at federation scale: each node a local state-space, inter-node translation the accountable maps, regional coherence the whole — a *federated* substrate for the same diagnostic (cf. `zhao-async-nonlinear-sheaf-diffusion`: coherence without a global clock). This is a *connection*, not a dependency — the node network is for bioregional data/mapping; the substrate framing just explains how those nodes cohere.

## 7. Honest ledger — earned vs. thin

- **Earned (frontstage-ready now):** the *design move* (route through coherence; obstruction-is-information; don't-flatten-sovereignty); the four-layer architecture (it's the existing topology); the two-register discipline; "local-to-global coherence" as plain language for what the grammar already does.
- **Thin (backstage, not validated):** the sheaf object is *not yet typed* in any Spore artifact; the two-layer discourse-sheaf has *no empirical track record* / no instantiation; stalk choice is underdetermined; restriction-map honesty (the "obstruction-as-information" promise) is an open mechanism-design question; tractability at scale is unknown. No spectral signal counts until it beats simple baselines.
- **Parked (earns canon later, if at all):** "graph-substrate-of-canon" as a recognized canon object — admit *only* when the composition stabilizes operationally, via dedicated ADR. The math-forward *identity* claim ("topological engine") stays out until the testbed earns it.

## 8. What this is not

Not a specification; not a promotion of sheaf machinery into canon; not a universality claim (the *design move* generalizes per-domain; the *math* does not get to claim domain-universal validity). A draft research note that points at developed material elsewhere and keeps one honest line through it.

*(Fill-out markers: §3 per-domain worked sub-sections; §7 expand the mechanism-design open questions; add a short "what each repo contributes / refrains from" table once `bioregional-economics` is registered in `repo-instances.yaml`.)*
