# Participatory-mapping seam detection — v0.5 findings (2026-06-03)

People-as-sensors instantiation. `participatory_sim.py` (numpy-only, deterministic, 80 scenarios ×
18 places = 1440 places). Each participant = a heterogeneous **value-lens** (sees 2 of 3 value-dims);
places classed coherent / fixable / irreducible by construction (free ground truth).

## Headline: this is the FIRST clearly sheaf-distinctive win in the arc
(v0 on physical sensors *tied* robust baselines on independent faults; v0.5 on participatory mapping
**beats** the frame-blind baseline substantially — because heterogeneous human lenses are exactly where
the consistency structure is *needed*, not decorative.)

| metric | sheaf | naive (per-observer lift + variance) |
|---|---|---|
| 3-class accuracy (coherent/fixable/irreducible) | **0.89** | 0.37 |
| seam detection precision / recall | **1.00** / 0.82 | 0.59 / 0.99 |
| fixable-vs-irreducible classification accuracy | **0.81** | 0.57 |

Guards pass (lenses heterogeneous → naive lift is a rank-2 projection, not full; coherent low-noise →
sheaf says "coherent" 30/30).

## Why the sheaf wins here (the mechanism, honestly)
The naive baseline must lift each observer's partial 2-D view back to the 3-D field to compare them —
but a single 2-D lens is **underdetermined** (min-norm fills the unseen value-dim with 0), so it injects
**artifact variance even at coherent places** → it false-flags ~everything contested (precision 0.59).
The sheaf **joint-lift** combines lenses through the consistency structure → well-posed → precision 1.00.
This is the heterogeneous-lens analog of v0's "non-decorative" requirement, now domain-meaningful:
different stakeholders genuinely perceive different value-dimensions, so you *cannot* compare or fuse
their maps without the sheaf restriction structure.

## Honest limitations (→ v0.6)
- **Detection recall 0.82** — the sheaf misses ~120/356 irreducible seams (calls them coherent) where
  no observer's lens is sensitive to the divergence *direction* (the same lens-coverage limit as v0's
  low recall). Fix: richer/overlapping lenses, more observers, H¹/connected-component aggregation across
  places (rather than per-place thresholding).
- **Flattening metric is coverage-noisy** — naive single-consensus error vs the true sections is
  directionally right (irreducible 0.39 > coherent 0.27) but both sit on a ~0.27 point-recovery noise
  floor (recovering `f` accurately is coverage-limited, unlike the *structural* detection/classification,
  which is robust to it). The non-flattening claim is conceptually sound but this metric doesn't show it
  cleanly; needs better observability to measure. (Note: detection/classification do NOT depend on
  point-recovery — they use residuals + community-split structure — which is why they're clean.)

## What this validates (strategic)
- **People-as-sensors / participatory mapping is the right deployment wedge** — the sheaf earns its keep
  precisely where physical-sensor fusion didn't (heterogeneous partial human lenses), and the valuable
  output is structural: *which places are contested, and is the contest fixable (dialogue/data) or
  irreducible (a sovereignty boundary to protect, not flatten)*.
- Directly prototypes the **Victoria mapping-workshop** value + a Cascadia-network **coherence-health
  diagnostic**.

## v0.6+ (parked)
Richer/overlapping lenses + H¹ seam-aggregation (lift recall); latent-community discovery (don't assume
known affiliations); the Johar **oscillation/recovery-arc** (fixable recovers to consensus under
perturbation, irreducible doesn't); instantiate on **real Victoria-workshop data + the KOI discourse
graph** (when KOI search is responsive).
