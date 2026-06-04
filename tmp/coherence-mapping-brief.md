# Coherence Mapping Brief
### Surfacing bridgeable gaps and sovereignty boundaries without flattening stakeholder worlds

> **Status:** draft (2026-06-04, reconciled to v0.6). **Purpose:** a *reusable source artifact* —
> audience-specific versions (funder/financing, grant/lab, workshop, civic) are derived from this.
> **Register discipline:** Sections 1–6 are frontstage (no technical/mathematical vocabulary).
> The Technical Appendix (§7) is **backstage** — **strip it for funder, partner, and workshop versions**;
> keep it only for research/lab audiences.
> **Claim discipline (post-v0.6):** the defensible result is frame-aware contested-seam **detection**
> (precision 1.00 vs 0.59; recall bounded by lens coverage). The method **surfaces candidate seams for
> steward review**; it does **not** automatically classify bridgeable vs. irreducible — that step is
> unresolved, so do not quote any classification metric (the earlier 3-way / fixable-vs-irreducible
> accuracies) externally.
> **Honest register, held throughout:** the phenomenon is documented in the real world → a synthetic
> simulation shows a promising detection method for that structure → applying the method to real data is
> next-step work, not yet done.

---

## 1. The practical problem

Multi-stakeholder systems — bioregional networks, financing collectives, civic deliberation — routinely
fail at the same point: **they treat disagreement as noise.** A map, a portfolio, or a plan is built by
averaging contributions into a single consensus picture. Two things go wrong at once:

- **Bridgeable gaps get buried.** A disagreement that is really just incomplete information or differing
  vantage points gets averaged away instead of resolved — so the cheap fix (more dialogue, more data) is
  never triggered.
- **Genuine differences get flattened.** A real divergence in values — the kind that *should* be
  protected as a sovereignty boundary — gets erased into a false "consensus" that no one actually holds,
  and the parties who were overruled disengage.

The result is brittle coordination: plans that look agreed-upon on paper but don't hold, and stakeholders
who stop showing up because the process didn't see what they saw.

## 2. The principle — route through coherence, not preference

The alternative is to stop averaging and start **mapping where views cohere and where they don't** —
keeping two kinds of divergence distinct (a distinction *people* draw, with the map surfacing the
candidates):

- **A bridgeable gap** — different partial views of one underlying reality. More dialogue or data
  resolves it. *Act on it: invest in the conversation.*
- **An irreducible difference** — a genuine divergence in values or interests, where no single shared
  answer is honest. *Honor it: protect it as a boundary; don't force a false consensus.*

The map's job is to **surface candidate seams for steward review** and make the comparison legible —
*not* to deliver the bridgeable-vs-irreducible verdict automatically. That judgment stays with the
stewards and participants who hold the context.

Three working commitments follow:
1. **Disagreement is information, not error.** Where views fail to line up is exactly where the
   coordination work is — surface it, don't smooth it.
2. **Compare views in a way that respects that people see different things.** Different stakeholders
   genuinely perceive different dimensions (ecological, cultural, economic). You cannot just overlay or
   average their maps; you have to account for *what each one was positioned to see*.
3. **Don't cross sovereignty boundaries.** Some divergences are the point, not a problem to solve.

This is one design move, and it recurs across financing, mapping, civic deliberation, and sensing.

## 3. The result (synthetic, honest)

We built a simulation to test whether this can be made legible mechanically. Stakeholders were modeled as
**partial lenses** on a shared value-field — each "sees" two of three value-dimensions, as real
stakeholders do. Places were labeled, by construction, as *coherent* or *contested*, giving free ground
truth. We compared a **frame-blind** method (compare/average maps directly) against a **lens-aware** method
(account for what each stakeholder was positioned to see).

The durable result is **detection of contested seams** — flagging "these places are genuinely contested"
without false alarms. On 1,440 simulated places (σ = 0.08 noise):

| | Lens-aware | Frame-blind |
|---|---|---|
| Flagged contested places with **no false alarms** (precision) | **1.00** | 0.59 |
| Caught the true contested places (recall) | 0.82 | 0.99 |

The frame-blind method only reaches high recall by flagging nearly everything as contested (0.59
precision) — it can't separate a real divergence from the artifact of comparing partial views directly.
The lens-aware method flags contested places with **perfect precision**; its recall (0.82) is bounded by
**lens coverage** — it misses divergences that no stakeholder's vantage point was positioned to see.

**The honest negative — and why it matters.** On a *different* task — independent measurement errors, the
"one bad data point" case — the lens-aware method offered **no advantage** over standard robust statistics.
Its edge appears *specifically* where stakeholders hold genuinely different partial views. So this is
**not** a better outlier-detector; it is a tool for **structured disagreement** — the bioregional-mapping,
financing, and civic case, not the sensor-noise case.

**What the method does *not* do (an important boundary).** It **surfaces candidate seams for steward
review** — it does not automatically decide which seams are *bridgeable* (resolve with dialogue/data) and
which are *irreducible* (protect as a sovereignty boundary). A follow-up round tested whether richer
spatial aggregation could lift recall and support that fixable-vs-irreducible call; it did **not** — recall
is limited by lens coverage, not aggregation, and the classification step remains unresolved. The
bridgeable-vs-irreducible distinction in Section 2 is a **design principle for how people act on the map**,
not a claim that the method renders the verdict.

*(Limits, stated plainly: synthetic data only; the method catches ~82% of true divergences — it misses the
ones no stakeholder's vantage point was sensitive to; classifying a surfaced seam as bridgeable vs.
irreducible is an open research question, not a current capability. These bound the claim to "promising
detection method, demonstrated on synthetic data.")*

## 4. The empirical grounding (third-party, real-world)

The *phenomenon* the method targets is documented in the field. A peer-reviewed participatory
catchment-mapping study (Stosch, Quilliam, Bunnefeld & Oliver, *Land*, 2022) engaged 43 participants
across four stakeholder groups (environmental regulators, water-industry practitioners, farm advisors,
academics) in three catchments. The participatory exercise produced **heat maps of perceived conflict and
land-use competition** — surfacing both **localized hotspots** (flooding, abstraction, urbanization) and
**landscape-scale issues** (farming, forestry, energy, tourism). I.e., real stakeholders genuinely produce
**overlapping but spatially divergent** maps of where the conflicts are.

And the study's participants themselves named the irreducible case directly: conflicts often arise from
"a clear trade-off between two reasonable interests which are conflicting, hence making a 'win–win'
solution unlikely" (participant-reported, Discussion §4.5).

**This validates the phenomenon, not our method.** Real multi-stakeholder mapping produces partial,
divergent, meaningful conflict maps, and some of those divergences are genuinely irreducible trade-offs.
That is precisely the structure the method in Section 3 is built to surface and classify. The study did
**not** run our diagnostic — applying it to real map data is the next step.

## 5. The application

The same move, instantiated per domain (build per-application; don't claim one product for all):

- **Participatory bioregional mapping (e.g. the Victoria workshop).** The method supports the workshop's
  analysis: turn contributions into a clear read of **where we cohere** and **where the contested seams
  are** — surfaced as candidates for facilitator/steward review, who decide which gaps are worth more
  dialogue and which divergences are sovereignty boundaries to protect. Deliverable: a coherence map that
  shows the seams, not a flattened consensus.
- **Cascadia bioregional network — coherence-health.** A standing instrument for a network-weaver: where
  is the network actually aligned, and where are the seams a weaver should look at next.
- **Regenerative financing (commitment bundles).** Route capital through coherence, not preference: a
  bundle that looks fine locally but doesn't hold jointly is a seam to **surface for review** *before*
  funding — heterophily and obstruction are signal, not noise.
- **Civic / discourse intelligence.** Claims and positions as partial views: the map surfaces where
  deliberation is converging and where the live seams are — leaving to participants the call of where
  convergence is honest and where it shouldn't be forced.

---

## 6. What a real pilot needs (data requirements — full checklist by reference)

The synthetic result says detection is bounded by lens coverage, so a real pilot's value is decided by the
data it collects. The minimum typed objects (plain-language; full checklist in the backstage note):

- **MapFeature** — a place, polygon, point, watershed, route, habitat, project site, or conflict hotspot.
- **Lens** — a stakeholder role, discipline, knowledge tradition, or community/protocol context.
- **Observation** — what a person or group says about a MapFeature through a Lens.
- **Claim / Question / Evidence** — the discourse moves attached to an observation.
- **ConsentBoundary** — what may be stored, queried, shared, routed, or projected.
- **Commitment** — an offer, need, promise, witnessed commitment, or funded action.

**Lens-coverage requirement** (because recall is observability-bound): at least two lens types per
contested feature; some features expected to be coherent (so false positives are measurable); and a record
of *missing* lenses — a feature with only one lens should report **"insufficient lens coverage,"** not
**"coherent."**

**Data-share implication (Mehul / cross-org).** The ask is not "give us triples." It is *preserve typed,
consent-aware local structure* — places / projects / resources / commitments, the lenses or perspectives,
claims + questions + evidence + limitations, n-ary (not only pairwise) relationships, and consent /
visibility fields — so future coherence diagnostics are possible. A packet lacking consent metadata or
integrity should not become publicly searchable, routable, or federated.

*Full real-data readiness checklist, field-level requirements, workshop-prompt → object mapping, and the
real-pilot acceptance gate live in the backstage source note
`sheaf-explorer/src/knowledge/participatory-coherence-deployment-readiness.md`. This brief stays frontstage;
that note is the research-side companion — they cross-reference, not duplicate.*

## 7. Technical Appendix — BACKSTAGE (research/lab audiences only; strip for funder/partner/workshop versions)

The formal backbone is **cellular sheaf theory**: a value-field over a graph of places/stakeholders, with
**stalks** (each observer's local state-space), **restriction maps** (accountable translations from a
local view onto a shared overlap), and **global sections** (assignments that are consistent everywhere). A
single global section existing = coherence; its *failure to exist* = an **obstruction**, which is the
"disagreement is information" claim made precise. The lens-aware method of Section 3 is the sheaf
**consistency lift** (jointly fit one section through all observers' restriction maps); the frame-blind
baseline is per-observer min-norm lifting + variance, which is underdetermined for partial lenses and so
injects artifact variance — the mechanism behind its 59% precision.

Restriction maps double as the formal model for **vocabulary reconciliation** (accountable local-to-global
translation; residue = what doesn't translate) and **consent/data-sharing** (monotone-narrowing maps: no
path launders a do-not-compute flag into a permitted operation).

**Discipline boundaries (per the project's own deferral rules + the v0.6 result):**
- **H¹ / sheaf-Laplacian spectral diagnostics are FUTURE work, not a live claim.** No spectral signal
  counts until it beats a simpler baseline and the object is explicitly typed. **No H¹ is computed for this
  fixture.**
- **v0.6 tested spatial aggregation and a place-adjacency cochain — neither lifted detection recall.** The
  recall ceiling (0.82) is **within-place observability / lens coverage**, not an aggregation problem. A
  place-adjacency cochain is the *wrong base space* for intra-place contestation; v0.5's
  observer-of-a-place sheaf is the right object for this phenomenon. (v0 sensor case separately showed
  static seam-localization recall is overlap-limited — 0.23 on independent-fault geometry.)
- **Fixable-vs-irreducible classification is unresolved / implementation-sensitive — do not quote it
  externally.** The defensible output is contested-seam *detection* (precision 1.00 vs 0.59); classifying a
  surfaced seam is an open research question (v0.6b / v0.7). The earlier 3-way (0.89) and
  fixable-vs-irreducible (0.81) accuracies are retired from frontstage use.
- Nothing here is validated on real data. This is the "method-plausibility on synthetic data" rung.

---

### Sources
- Stosch, K.C.; Quilliam, R.S.; Bunnefeld, N.; Oliver, D.M. (2022). "Catchment-Scale Participatory Mapping
  Identifies Stakeholder Perceptions of Land and Water Management Conflicts." *Land* 11(2): 300.
  DOI: 10.3390/land11020300. https://www.mdpi.com/2073-445X/11/2/300
- Synthetic results: `spore/tmp/sheaf-sensor-sim/participatory_sim.py` + `participatory_results.txt`
  (v0.5 detection win); `participatory_sim_v06.py` + `FINDINGS-v0.6.md` + `participatory_v06_results.txt`
  (v0.6 — recall not lifted by aggregation, classification unresolved); `sheaf_sim.py` + `FINDINGS.md`
  (v0 sensor case). Deterministic, numpy-only, fair baselines included.
- Design synthesis (backstage): `spore/tmp/sheaf-rnd-synthesis-2026-06-03.md`.
- Deployment-readiness + real-data checklist (backstage companion):
  `sheaf-explorer/src/knowledge/participatory-coherence-deployment-readiness.md`.
