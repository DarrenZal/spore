# Sheaf-coherent sensing — v0 findings (2026-06-03)

Honest writeup (plan Step 6) for the first runnable Shape-A coherence diagnostic. Self-contained,
numpy-only, deterministic. Run: `python3 sheaf_sim.py` → `results.txt`.

## What was built
A simulation of **cellular-sheaf sensor-network data-fusion + obstruction-localization**, per the
pinned construction: global field `f∈ℝ³`; each sensor a random 2-D view `P_u`; edge overlap = the
1-D line where two views intersect, giving distinct non-identity restriction maps `F_{u◁e}=(P_uℓ_e)ᵀ`;
**robust whitened-residual sheaf fusion** vs a **fair global-LSQ baseline**; a **shared LSQ decode-to-f**
scored identically for both.

**All four guards pass → the pinned math is empirically verified:**
- `L_sheaf` off-diagonal blocks are **rank-1, not scalar·I** → genuine sheaf, NOT the graph Laplacian.
- Observation frames span the field (rank 3) → observable.
- Degenerate (σ=0,K=0): residual ~3e-7, RMSE ~2.5e-16 ≈ 0.
- Single large fault: localized.

## Results (M=60 scenarios/regime)
| Regime | sheaf field-RMSE | baseline RMSE | sheaf localize P/R | outlier-baseline P/R |
|---|---|---|---|---|
| A: iid noise, no faults | 0.035 | 0.034 | — | — |
| B: 3 large faults | 0.036 | 0.74 | 0.85 / 0.99 | 0.98 / 1.00 |
| C: 1 fault | 0.035 | 0.41 | 0.74 / 1.00 | 0.84 / 1.00 |
| D: 5 subtler faults | 0.032 | 0.32 | 0.90 / 0.99 | 0.98 / 1.00 |
| E: coherent split (Δ=0.6) | — | — | **0.77 / 0.23 (edge-level seam)** | baseline flags ~0 sensors (blind) |
| F: coherent split (Δ=0.3) | — | — | 0.45 / 0.07 | baseline flags ~0 sensors (blind) |

## Honest verdict
1. **The engine is correct + non-decorative** (guards verify the sheaf math).
2. **Independent faults (B/C/D): NOT a sheaf-specific win.** The robust-fusion RMSE advantage over
   naive-LSQ is shared by *any* outlier-rejecting method; a per-sensor outlier detector localizes as
   well or better (0.98 vs 0.85 precision). On this task the sheaf does not beat a good robust baseline.
   (The "10–20× RMSE win" headline is honestly a robust-fusion effect, not a sheaf effect.)
3. **Coherent-split obstruction (E/F): the sheaf-distinctive value IS real — but partial at v0.**
   Two regions each internally consistent but mutually inconsistent (no individual outlier sensor):
   the per-sensor detector is **structurally blind** (flags ~0 sensors), while the sheaf localizes the
   **seam** at edge level (**precision 0.77** @ Δ=0.6). This empirically demonstrates *"obstruction is
   information."* But **recall is low (0.23)** — inherent to the 1-D overlap: each edge's shared line
   `ℓ_e` only exposes the disagreement when `ℓ_e` is not orthogonal to `(f_A − f_B)`, so many boundary
   edges can't see it. Subtler splits (Δ=0.3) degrade to precision 0.45 (SNR limit).

## What this tells us (next steps)
- **Where the sheaf earns its keep:** *structural/obstruction* phenomena (seams, joint-inconsistency)
  — NOT independent-outlier rejection (robust statistics suffice there). This sharpens the application
  map: financing-bundle *joint*-incoherence, discourse *irreducible-vs-fixable* splits — not anomaly
  detection.
- **To strengthen the distinctive win (v0.5):** (a) **richer edge stalks `d_e>1`** so each edge exposes
  more of the disagreement → higher recall; (b) aggregate the seam via **connected-components / H¹ of
  the high-residual subgraph** (the obstruction is a global cohomology feature, not independent edges);
  (c) the **v1 oscillation/recovery-arc layer** (Johar) — perturb + read sheaf-diffusion recovery, where
  the spectrum should carry signal a static method can't.
- **Real-data path:** swap synthetic frames for the Regen/KOI sensor-SDK geometry.

## Discipline note
Reported alongside fair baselines; no cherry-picking; the headline RMSE win is flagged as robust-fusion
(not sheaf-specific); the sheaf-distinctive result (E/F) is real but partial — a falsifiable v0 outcome,
not an over-claim. This is the honest "method-plausibility on synthetic data" rung; real-substrate
validation is later.
