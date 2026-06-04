# Sheaf R&D — synthesis + deployment direction (2026-06-03)

Internal strategy synthesis (the source for external grant / Mehul / Victoria framing — those derive
from this and go through the verify-draft gate). Covers: what two simulations established, the honest
through-line, and where the real deployment value is.

---

## 1. What we actually built + learned (two sims, honest)

Both self-contained, numpy-only, deterministic, with fair baselines + guards. In `spore/tmp/sheaf-sensor-sim/`.

**v0 — physical sensor fusion** (`sheaf_sim.py`, `FINDINGS.md`). 3-D field, random 2-D sensor frames,
shared-line restriction maps; robust sheaf fusion vs fair baselines.
- Math verified (guards: non-decorative `L_sheaf≠L_graph`; observable; degenerate≈0; fault localized).
- **On independent faults the sheaf does NOT beat a good robust baseline** — its RMSE "win" over naive-LSQ
  is just outlier rejection; a per-sensor outlier detector localizes as well or better.
- On a **coherent-split obstruction** (two regions each internally consistent, mutually inconsistent —
  no individual outlier) the sheaf localizes the **seam** (precision 0.77) where per-sensor detection is
  structurally blind — but partial (recall 0.23, 1-D-overlap-limited).

**v0.5 — participatory mapping / people-as-sensors** (`participatory_sim.py`, `FINDINGS-participatory.md`).
Each participant a heterogeneous *value-lens* (sees 2 of 3 value-dims); places classed coherent / fixable /
irreducible by construction.
- **First clearly sheaf-distinctive win:** 3-class accuracy **0.89 vs naive 0.37**; seam-detection precision
  **1.00 vs 0.59**; fixable-vs-irreducible classification **0.81 vs 0.57**.
- **Why:** heterogeneous lenses make naive per-observer lifting underdetermined (artifact variance → false
  seams everywhere); the sheaf joint-lift combines lenses correctly. The consistency structure is *needed*,
  not decorative.
- Honest limits: detection recall 0.82 (misses seams where no lens sees the divergence direction); the
  flattening metric is coverage-noisy (point-recovery is harder than the robust structural detection).

## 2. The through-line (the honest one-liner for the grant / Mehul / Victoria)

> **Sheaves are not better anomaly detection — robust statistics win that. They are for *heterogeneous
> partial views that must cohere*: surfacing *seams* (where locally-coherent views globally diverge) and
> distinguishing a *fixable* gap (more dialogue/data resolves it) from an *irreducible* one (a genuine
> value-divergence — a sovereignty boundary to protect, not flatten).**

That is human coordination — bioregional mapping, discourse, financing-bundle coherence — **not** sensor
fusion. v0 (sensors, homogeneous readings) tied baselines; v0.5 (people, heterogeneous lenses) beat them.
The difference *is* the thesis.

## 3. Deployment direction — people-as-sensors is the wedge

Filtered by: data you control, where the sheaf distinctively wins, sovereignty-alignment, and real venues.

| | Physical sensors (ONC, Hakai, Regen SDK) | People-as-sensors (mapping, discourse, dreams) |
|---|---|---|
| data you control | low (others' networks) | **high** (workshops, KOI graph, the network *is* human) |
| sheaf-distinctive value | low (anomaly regime — robust stats tie it) | **high** (heterogeneous-lens seams — the v0.5 win) |
| sovereignty alignment | neutral | **central** (seams = FPIC boundaries) |
| venue / forcing function | weak (none you own near-term) | **strong** (Victoria workshop, Cascadia, CIE, the grant) |

**Conclusion: focus on participatory bioregional mapping (people-as-sensors), with discourse as its
sibling.** Physical sensors (incl. the Regen/KOI sensor SDK, Ocean Networks Canada, Hakai, Coastal Guardian
Watchmen, citizen-science iNaturalist/eBird/PurpleAir) are a *complementary ecological-ground-truth layer*
for later — the mature system fuses human + instrument views — but they are not the wedge.

**People genuinely are sensors here, not metaphorically:** each participant/community is a partial *frame*
on the shared bioregional reality (Johar's "citizens are the sensing apparatus"). The valuable output is
structural — *which places the community truly coheres on, which gaps are bridgeable, which divergences are
sacred and must be held* — i.e. a **coherence/coordination-health diagnostic** for the Cascadia network.

## 4. Where it plugs into the real work
- **Victoria mapping workshop** — the v0.5 sim *is* the workshop's analysis prototype: map contributions →
  seams → fixable-vs-irreducible. The deliverable to a workshop is "here's where we cohere / where we have
  bridgeable gaps / where we have non-negotiable divergences to protect."
- **Cascadia bioregional network** — a coherence-health instrument (your board/network-weaver role).
- **The grant (Schmidt / Atlas)** — this is the observability / coordination-health / repair-pathway theme,
  with an honest empirical result (v0.5) + an honest negative result (v0) — credible, not hyped.
- **Mehul / RC financing** — frame sheaves as *joint-coherence / obstruction localization* on commitment
  bundles (an irreducible seam = a bundle that locally looks fine but jointly doesn't hold), NOT per-project
  scoring or anomaly detection. (C1 plan already aligned; this sharpens the pitch register.)
- **Discourse / CIE / hyperstition** — same engine, claims-as-frames; the irreducible-vs-fixable split is
  the discourse analog. (Note: C0 discourse-graph is a parallel session's turf — coordinate.)

## 5. What is NOT claimed (discipline)
- Not validated on real data (synthetic, method-plausibility). Not a runway spend. Not "one engine for all
  of finance/coordination." The sheaf is *not* superior on anomaly detection. v0.5's flattening-harm metric
  is not yet clean. Communities are assumed known (latent discovery is later).

## 6. Next experiments (v0.6) — `~/.claude/plans/participatory-mapping-seam-sim.md`
- Lift recall: richer/overlapping lenses + H¹ / connected-component seam aggregation (the obstruction is a
  global feature, not independent edges).
- The Johar **oscillation/recovery-arc** (perturb → fixable recovers to consensus, irreducible doesn't — the
  dynamic signature of the distinction; ties to the sheaf-diffusion v1 in the sensor plan).
- Latent community discovery (don't assume known affiliations).
- **Instantiate on real data**: the Victoria workshop + the KOI discourse graph (when KOI semantic search is
  responsive — it was timing out 2026-06-03).
