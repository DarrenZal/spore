---
doc_id: spore.connection.substrate-typed-gluing-and-coherence-diagnostic
doc_kind: research
status: draft
depends_on:
  - spore.connection.sheaf-theory-formalization
relates_to:
  - spore.connection.obstruction-aware-sheafification
  - spore.connection.sheaf-substrate-multi-source-synthesis
  - spore.federation-protocol
sources:
  - path: docs/research/connections/sheaf-theory-formalization.md
    title: "Sheaf Theory as Formal Lens for Federation Architecture (Spore bridge note)"
    type: internal-derived
    note: "Inherits the 8 primary academic anchors (Curry, Robinson, Hansen-Ghrist, Bodnar, Barbero, Felber-Hummes Flores-Rincon Galeana, Yokoyama) — those remain the evidentiary basis; this note extends, does not re-anchor."
  - path: docs/research/connections/sheaf-substrate-multi-source-synthesis.md
    title: "Sheaf substrate multi-source synthesis (sheaf-Laplacian <-> free-energy bridge)"
    type: internal-derived
    note: "Source of the sheaf-diffusion / collective-active-inference connection referenced in Part B."
  - path: tmp/fed-1-federation-resolution-eval-protocol-2026-06-10.md
    title: "FED-1 — Federation Entity-Resolution + False-Glue Eval (runnable protocol; Opus-Fable round-5 converged)"
    type: internal-working-doc
    note: "UNCOMMITTED tmp/ working doc (subject to change). The real in-flight resolution+consent protocol Part A extends. Load-bearing: §3 four-way verdict + reason_type taxonomy; §5 system S (translation table = restriction maps; the 'typed section-check, NOT cohomology' discipline); §6 conflict-localization F1; §7 honest-negative + the S- identity-map ablation; Round-5 subsumption-order correction; annotation A2 (resolution != coherence half)."
  - path: tmp/sheaf-tdl-strategy-synthesis-2026-06-10.md
    title: "From TDL/GDL harvest to a protocol moat — strategic synthesis"
    type: internal-working-doc
    note: "UNCOMMITTED. Regime A (prediction) / B (coherence) / C (consent) frame; 'consent-gated merge + generative typed-refusal' as the defensible differentiator vs Senzing/Neo4j; 'benchmark constrains the schema, never the timeline.'"
  - path: tmp/c0-koi-coherence-diagnostic-scope.md
    title: "C0 — KOI coherence-diagnostic testbed scope + build-plan"
    type: internal-working-doc
    note: "UNCOMMITTED. The SEPARATE coherence lane Part B belongs to (Dirichlet energy / H0 / H1 vs the convergence_export.py count baseline). C0 already scopes the base diagnostic Part B previously duplicated; Part B is now narrowed to the freedom-pole refinement layered on top of C0."
  - title: "Indy Johar, 'Beyond Game Theory' / 'A World That Won't Collapse to One' / 'Free Energy and Free Consciousness' (Substack, 2026)"
    type: internal-derived
    url: https://indyjohar.substack.com/
    note: "Motivating semantics (substrate-as-condition; hold-partial-truths; freedom-pole). Single-author corpus = ONE honest-rigor cluster; not an independent evidentiary anchor."
disposition: implementation hypothesis
research_subkind: bridge_note
concepts:
  - sheaves
  - federation-coherence
  - obstruction-detection
  - restriction-maps
---

# Bridge Note: Substrate-Typed Restriction Families (FED-1) + a Freedom-Pole for the Coherence Lane (C0/CIE)

**Status: research-lane hypotheses riding on already-validated work. Not canon, not novel base mechanism.**
This note proposes two *speculative axes* on top of work the operator has already scoped on real data, and
it was substantially corrected against the live FED-1 protocol after a first draft overreached. It carries
the standing sheaf-experiment deferral gate (§6).

It respects the protocol's single most important architectural decision — **resolution/consent and
coherence/gluing are DIFFERENT evals on DIFFERENT substrates** (FED-1 annotation A2; the FED-4
"parked-unverified" boundary row). Accordingly the two parts live in two different lanes and are **not** one
composable package:

- **Part A → the FED-1 lane** (resolution + consent): a hypothesized *further* structuring axis for the
  restriction map — **social-substrate indexing** (trust / legitimacy / care) — layered on top of the
  subsumption-order restriction map FED-1 already validates.
- **Part B → the C0/CIE coherence lane** (gluing): a hypothesized *freedom-pole* dual objective layered on
  top of the Dirichlet-energy/H0/H1 diagnostic that **C0 already scopes**.

## 1. What this proposes (two lanes, kept separate)

- **Part A — substrate-typed restriction families (FED-1 lane).** FED-1's system S already replaces the flat
  single restriction map with a *structured* family: its predicate-alignment/translation table, structured by
  a **subsumption partial order** (`contradicts | refines | independent`) — which the Round-5 correction calls
  *"the restriction map's actual content… the most genuinely sheaf-flavored object in the pipeline,"* measured
  on real personal-KOI ↔ Regen-KOI predicates. Part A asks only: **is social substrate (trust / legitimacy /
  care / viability / epistemic integrity) a *second*, useful structuring axis** for that same family — and it
  is honest that this is at *vocabulary stage*, to be tested only if/after the subsumption-typed table earns
  its keep. **Naming discipline (FED-1 §5):** at the resolution layer the operational object is a *typed
  section-check / consent gate*, **NOT cohomology**; cohomology vocabulary is reserved for the coherence lane.

- **Part B — a freedom-pole objective for the coherence lane (C0/CIE).** The runnable coherence diagnostic
  (sheaf-Laplacian Dirichlet energy `xᵀ L_F x`; `H0` = consensus components; `H1` = principled disagreement;
  scored against the `convergence_export.py` count heuristic) is **already C0's scope**, not a novel
  contribution here. Part B's *only* new ask is a **second objective** on top of that diagnostic: a
  Free-Consciousness "freedom pole" (grow coherent degrees of freedom under a bounded-obstruction envelope),
  so the dynamics is not pure disagreement-minimization toward a single global section. This is downstream of
  even C0 earning its keep.

## 2. Why this belongs in Spore (and at what altitude)

Sheaves are already in Spore's foundation layer, and both the FED-1 resolution lane and the C0 coherence lane
are live research surfaces. Three altitude clarifications:

1. **Lane separation is load-bearing.** FED-1 is the *resolution + consent* half; it deliberately excludes the
   H0/H1-gluing coherence story (annotation A2, FED-4). The coherence diagnostic lives on a different
   substrate (C0 on the operator's discourse graph; CIE as the real Regime-B coherence substrate). This note
   does not bundle them.

2. **Both parts are speculative axes on validated work, not reframes of it.** FED-1 already (a) replaced the
   single restriction map with a structured family, (b) found subsumption order to be the empirically
   load-bearing structuring axis, and (c) makes consent-gated-merge computable via a *visibility-lattice meet*
   (`consent_tier_union`) with a stored-meet mutation test — **with no per-substrate cohomology**. Part A does
   not claim to make consent-gated-merge computable; it asks whether the *already-working* meet could be
   enriched per-substrate. C0 already scopes the base coherence diagnostic; Part B only adds the freedom pole.

3. **Active inference enters as composable research-lane tooling, NOT foundation.** Per ADR-0039, Friston /
   Active Inference is a *"comparative framework under exploration"* whose Markov-blanket/free-energy formalism
   is *"outside the active support core"*; `roadmap.md` invites its *formalization* as future work
   ("computable viability signals"). Part B's freedom pole honours that — a diagnostic objective that composes
   with the sheaf object, not the substrate the coordination grammar rests on. The grammar continues to rest
   on Field/Holon/Membrane/Intent/Commitment/Evidence (project-vision §scope; ADR-0001
   pluriversal-incommensurability), with active inference as a peer frame at a different layer.

## 3. Part A — substrate-typed restriction families (FED-1 lane)

**What FED-1 already establishes (the validated baseline this rides on).**
- The translation/predicate-alignment table *is* the restriction map's content (FED-1 §5 step b).
- Its load-bearing structure is a **subsumption partial order** (`contradicts | refines | independent`),
  validated on real personal-KOI ↔ Regen-KOI predicates (Round-5 correction #3; the day-0 "refines" Gregory
  case). Conflict-localization F1 is scored on `contradicts` only.
- The `MERGE_WITH_EDGE_CONFLICTS` verdict already realizes "glue the identity, surface the conflict list" —
  annotated in §3 as *"H0-merges / H1-localizes at the resolution layer."*
- Refusals are already *typed* (`reason_type`: HOMONYM, PART_WHOLE/SCOPE, SHIM_VS_REAL, ROLE_INCOMPATIBLE,
  INSTRUMENT_OF/AGENT_ACCOUNT, OTHER/TEMPORAL) and scored for accuracy (§6 metric 2). There is no "flat
  residual" to replace.
- Consent-gated merge is already computable as the **meet** of two sides' visibility tiers
  (`consent_tier_union`), with a stored-meet re-derivation mutation test.

**The Part A hypothesis (vocabulary stage).** Add a *second* structuring axis to the same restriction family:
index it by **social substrate** (trust / legitimacy / care / viability / epistemic integrity), so the typed
section-check and the consent meet can be asked *per substrate* — a route is a clean section in `data` but a
contested one in `legitimacy`. Concretely this would be a *re-organization of FED-1's existing `reason_type`
taxonomy along a substrate axis* and a *candidate enrichment of the already-working consent meet*, **not** the
introduction of typing or computability where there was none.

**Why it might matter.** Johar's claim that *"agency is substrate-dependent: trust, legitimacy, ecological
viability and epistemic integrity… are the preconditions of strategy"* (Beyond Game Theory) is the motivation
for asking whether the substrate axis adds discriminative power over subsumption-order alone — e.g. for
`suggest_pool_routes` / `convergence_export` downstream (bioregional-coordination / bioregional-economics),
where a route's admissibility may turn on legitimacy/trust, not only data-compatibility.

**The honest hedge.** FED-1 already answered "one restriction map is too flat" with subsumption order, on real
data. Substrate-indexing is a *different, still-unvalidated* answer to the same question; it earns a test only
*after* the subsumption-typed table demonstrates value and only if a flat/lattice consent meet leaves
discriminative gaps a substrate axis would close. Until the substrate stalks and their section-checks are
*typed*, "per-substrate gate" is vocabulary, not a diagnostic.

## 4. Part B — a freedom-pole objective for the coherence lane (C0/CIE)

**Not a FED-1 extension.** Per A2/FED-4, the H0/H1-gluing coherence story is a different eval on a different
substrate. The base coherence diagnostic — Dirichlet energy `xᵀ L_F x` as a coherence scalar, `H0` =
consensus components, `H1` = principled disagreement, benchmarked against the `convergence_export.py`
`ready_with_tension` count heuristic on the operator's own KOI discourse graph — is **already scoped as C0**
(`tmp/c0-koi-coherence-diagnostic-scope.md`), with CIE as the real Regime-B substrate. This note does not
re-propose it.

**The only new ask: a dual objective.** Pure Dirichlet-energy minimization drives toward a *single* global
section — the "collapse to one" the obstruction-aware posture warns against, and Johar's *stability trap*
("mechanically coherent while developmentally dying"). So *if/after* C0's base diagnostic earns its keep, add
a **freedom pole**:
- **Envelope (FEP-analogue):** keep `H1` bounded — don't fragment.
- **Trajectory (FCP-analogue):** *grow* the number of coherent local sections (interpretive plurality /
  counterfactual reach) **without** losing integration.

The desirable attractor is **regulated expansion**, not consensus — a saddle between brittle over-compression
(single global section) and incoherent over-expansion (`H1` blows up). This is the formal target the current
global-section framing does not name, and it is the cleanest unit of work to develop empirically with the
Active Inference Institute (Substrate Dynamics / Daniel Friedman), not inside Spore's grammar.

## 5. Johar grounding — one cluster, flagged

The *motivating semantics* are Johar's; the *formal convergence* is independent (Hansen-Ghrist, Robinson,
Bodnar, Yokoyama — anchored in [[sheaf-theory-formalization]]; and FED-1/C0's real-data results). Per
honest-rigor discipline, **Johar is a single tradition cluster** and recurrence across his own essays is
**not** independent evidence; admissibility rests on the formal sources and the live evals, with Johar as the
framing that makes the substrate axis (Part A) and the freedom pole (Part B) *worth* testing.

- Substrate axis: *"Many of the most important civilisational quantities are not payoffs. They are conditions.
  Trust is a condition. Legitimacy is a condition."* (Beyond Game Theory)
- Freedom pole: *"increase coherent degrees of freedom without losing coherence… FEP describes the envelope…
  FCP describes the trajectory."* (Free Energy and Free Consciousness)

## 6. Dispositions, guardrails, and division of labour

- **Deferral gate (binding), now tied to concrete pre-registered checks.** For **Part A**, the runnable
  instance of "beat a simpler baseline" is FED-1's **mandatory S- identity-map ablation**: if the typed
  resolver S beats baselines but the S- ablation matches S, the win came from scaffolding, not typed
  translation — and a substrate axis that does not beat subsumption-order-alone earns nothing. For **Part B**,
  the gate is C0's discipline ("type the object; beat the `convergence_export` count baseline; report signal
  alongside baseline"). No `H1` / Fiedler / Dirichlet number counts as a Spore diagnostic until these pass.
- **Schema-not-timeline.** Per FED-1's adopted discipline, *"the benchmark constrains the schema, never the
  timeline"*: Part A's substrate axis may shape the *schema* (the typed restriction family) without licensing
  any claim about when or whether it lands.
- **Single-cluster guardrail.** Johar alone cannot promote either part; independent formal/empirical
  convergence is what carries it. If the only support were Johar resonance, the honest disposition is
  *decline-with-trigger*.
- **Altitude guardrail.** Substrate-typing stays at grammar-research altitude; operational surfaces
  (pool-route admissibility, merge gates) live downstream. Active inference stays research-lane (ADR-0039),
  not foundation.
- **Division of labour.** Spore owns the formal objects (subsumption-typed restriction family; the
  obstruction diagnostic) and any grammar they yield; the *empirical/generative* development of the freedom
  pole is better grown where the Active Inference Institute works (Substrate Dynamics). Grammar that survives
  there promotes up under the earning-test.

## R-claims

- **R1**: FED-1 already structures the restriction map as a subsumption partial order (the validated
  sheaf-flavored object) and already types refusals and consent (reason_type taxonomy; visibility-lattice
  meet). Indexing that *same* family by social substrate (trust/legitimacy/care) is a candidate *second* axis
  — a re-organization of existing typing, not the introduction of typing or computability — admissible to
  *test* only after the subsumption-typed table earns its keep and only if a substrate axis closes a
  discriminative gap. [target:candidate:substrate-typed-restriction-family] [concept:restriction-maps]
  *R1 is supported by FED-1 §5 + Round-5 subsumption correction (validated baseline) and the Johar
  substrate-as-condition cluster (single cluster; not the anchor).*

- **R2**: The runnable coherence diagnostic (Dirichlet energy / H0 / H1 vs the convergence_export count
  baseline) is already scoped as C0 on a different substrate from FED-1 (per A2/FED-4); this note's only novel
  coherence-lane contribution is a freedom-pole dual objective layered on top of C0, not the base diagnostic.
  [target:candidate:freedom-pole-objective] [concept:federation-coherence]
  *R2 is supported by the C0 scope doc (base diagnostic), sheaf-substrate-multi-source-synthesis (the
  Laplacian/free-energy bridge), and roadmap.md (active-inference formalization as invited future work).*

- **R3**: A dual objective — bounded-obstruction envelope (FEP-analogue) plus growth of coherent local
  sections (FCP-analogue) — names a "regulated expansion" attractor the current global-section framing omits,
  and is the cleanest unit to develop empirically with the Active Inference Institute rather than inside
  Spore's grammar. [target:candidate:freedom-pole-objective] [concept:federation-coherence]
  *R3 is supported by Johar's Free Consciousness Principle (motivating semantics, single cluster) and the
  obstruction-aware-sheafification posture against forced gluing.*

- **R4** (opposition / honest-rigor): Both parts ride on work already validated on real data; if a substrate
  axis does not beat FED-1's subsumption-order baseline (tested via the S- ablation), or the freedom pole adds
  nothing over C0's base diagnostic, the correct disposition is decline-with-trigger — re-evaluate only on a
  concrete failure of the simpler instrument. [target:meta:sheaf-experiment-deferral]
  [concept:obstruction-detection]
  *R4 is supported by the standing sheaf-experiment deferral discipline, FED-1's S- ablation, and C0's
  baseline-beat gate.*
