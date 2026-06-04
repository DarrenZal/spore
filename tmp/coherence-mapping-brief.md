# Coherence Mapping Brief
### Surfacing bridgeable gaps and sovereignty boundaries without flattening stakeholder worlds

> **Status:** draft (2026-06-03). **Purpose:** a *reusable source artifact* — audience-specific
> versions (funder/financing, grant/lab, workshop, civic) are derived from this.
> **Register discipline:** Sections 1–5 are frontstage (no technical/mathematical vocabulary).
> The Technical Appendix is **backstage** — **strip it for funder, partner, and workshop versions**;
> keep it only for research/lab audiences.
> **Honest register, held throughout:** the phenomenon is documented in the real world → a synthetic
> simulation shows a promising method for that structure → applying the method to real data is
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
and, crucially, to tell two kinds of divergence apart:

- **A bridgeable gap** — different partial views of one underlying reality. More dialogue or data
  resolves it. *Act on it: invest in the conversation.*
- **An irreducible difference** — a genuine divergence in values or interests, where no single shared
  answer is honest. *Honor it: protect it as a boundary; don't force a false consensus.*

Three working commitments follow:
1. **Disagreement is information, not error.** Where views fail to line up is exactly where the
   coordination work is — surface it, don't smooth it.
2. **Compare views in a way that respects that people see different things.** Different stakeholders
   genuinely perceive different dimensions (ecological, cultural, economic). You cannot just overlay or
   average their maps; you have to account for *what each one was positioned to see*.
3. **Don't cross sovereignty boundaries.** Some divergences are the point, not a problem to solve.

This is one design move, and it recurs across financing, mapping, civic deliberation, and sensing.

## 3. The result (synthetic, honest)

We built a simulation to test whether this distinction can actually be made mechanically. Stakeholders
were modeled as **partial lenses** on a shared value-field — each "sees" two of three value-dimensions,
as real stakeholders do. Places were labeled, by construction, as *coherent*, *bridgeable-gap*, or
*irreducible-difference*, giving free ground truth. We compared a **frame-blind** method (compare/average
maps directly) against a **lens-aware** method (account for what each stakeholder was positioned to see).

On 1,440 simulated places (σ = 0.08 noise):

| | Lens-aware | Frame-blind |
|---|---|---|
| Correctly classified (3-way) | **89%** | 37% |
| Flagged a contested place with **no false alarms** (precision) | **100%** | 59% |
| Told bridgeable-vs-irreducible apart (accuracy) | **81%** | 57% |

The frame-blind method false-flags nearly everything as contested (59% precision) because it can't tell a
real divergence from the artifact of comparing partial views directly. The lens-aware method doesn't.

**The honest negative — and why it matters.** On a *different* task — independent measurement errors, the
"one bad data point" case — the lens-aware method offered **no advantage** over standard robust statistics.
Its edge appears *specifically* where stakeholders hold genuinely different partial views. We report this
because it sharpens the claim: this is **not** a better outlier-detector; it is a tool for **structured
disagreement** — which is exactly the bioregional-mapping, financing, and civic case, and not the sensor-
noise case.

*(Limits, stated plainly: synthetic data only; the method currently catches ~82% of true divergences —
it misses the ones no stakeholder's vantage point was sensitive to; and recovering exact values is harder
than the robust structural detection. These bound the claim to "promising method, demonstrated on
synthetic data.")*

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

- **Participatory bioregional mapping (e.g. the Victoria workshop).** The method *is* the workshop's
  analysis: turn contributions into a clear read of **where we cohere**, **where the gaps are bridgeable**
  (worth more dialogue), and **where the divergences are sovereignty boundaries to protect.** Deliverable:
  a coherence map, not a flattened consensus.
- **Cascadia bioregional network — coherence-health.** A standing instrument for a network-weaver: where
  is the network actually aligned, where is alignment cheap to build, where must difference be held.
- **Regenerative financing (commitment bundles).** Route capital through coherence, not preference: a
  bundle that looks fine locally but doesn't hold jointly is an irreducible seam to surface *before*
  funding — heterophily and obstruction are signal, not noise.
- **Civic / discourse intelligence.** Claims and positions as partial views: the same bridgeable-vs-
  irreducible split is the map of where deliberation can converge and where it shouldn't pretend to.

---

## 6. Technical Appendix — BACKSTAGE (research/lab audiences only; strip for funder/partner/workshop versions)

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

**Discipline boundaries (per the project's own deferral rules):**
- **H¹ / sheaf-Laplacian spectral diagnostics are FUTURE work, not a live claim.** No spectral signal
  counts until it beats a simpler baseline and the object is explicitly typed. v0 (sensor case) showed
  static seam-localization recall is overlap-limited (0.23 on independent-fault geometry); aggregating the
  obstruction via connected-components / H¹ of the high-residual subgraph is a v0.6 hypothesis, untested.
- v0.5 detection recall is 0.82; the flattening-harm metric is coverage-noisy (irreducible 0.388 vs
  coherent 0.268 — directionally right, not yet clean). Structural detection/classification do **not**
  depend on exact point-recovery, which is why those are the robust results.
- Nothing here is validated on real data. This is the "method-plausibility on synthetic data" rung.

---

### Sources
- Stosch, K.C.; Quilliam, R.S.; Bunnefeld, N.; Oliver, D.M. (2022). "Catchment-Scale Participatory Mapping
  Identifies Stakeholder Perceptions of Land and Water Management Conflicts." *Land* 11(2): 300.
  DOI: 10.3390/land11020300. https://www.mdpi.com/2073-445X/11/2/300
- Synthetic results: `spore/tmp/sheaf-sensor-sim/participatory_sim.py` + `participatory_results.txt`
  (v0.5); `sheaf_sim.py` + `FINDINGS.md` (v0). Deterministic, numpy-only, fair baselines included.
- Design synthesis (backstage): `spore/tmp/sheaf-rnd-synthesis-2026-06-03.md`.
