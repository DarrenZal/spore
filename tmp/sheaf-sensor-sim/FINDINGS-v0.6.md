# Participatory mapping seam detection — v0.6 findings (2026-06-04)

**Mixed result, skeptic-audited. Gate 1 is a TRUSTWORTHY negative; Gate 2 is UNRESOLVED (do not quote
externally).** v0.6 tested two extensions to the v0.5 participatory-mapping result. The honest outcome,
after a skeptic pass + a follow-up density/feature sweep:

- **Gate 1 (recall via spatial aggregation / place-adjacency cochain): no lift — trustworthy negative.**
- **Gate 2 (fixable-vs-irreducible classification): implementation-sensitive, unresolved — no clean claim.**
- **v0.5's actual win — frame-aware seam *detection* — is unchanged.**

Engine: extends `participatory_sim.py` (imports its exact functions, so the L0 baseline IS v0.5).
`participatory_sim_v06.py`; 40 grids × 16×16; σ=0.08; constant coherent field; seam = **intra-place
contested** band (tautology guard verified: all band cells genuinely have A- *and* B-observers on the
*same* cell, and L0 partially sees it (0.886, not 0) — so Gate 1 is not the inter-place tautology).

## Gate 1 — recall lift: TRUSTWORTHY NEGATIVE (no lift)

| method | recall@P≥0.95 | recall@P≥0.99 | component-FP@P~0.95 |
|---|---:|---:|---:|
| L0 per-place (= v0.5) | **0.886** | **0.842** | — |
| L1 standalone | 0.458 | 0.344 | — |
| L2 standalone | 0.001 | 0.001 | — |
| L1 augmented (L0 ∪ L1) | 0.842 | 0.842 | 0.028 |
| L2 augmented (L0 ∪ L2) | 0.842 | 0.842 | 0.028 |

- **L1 (connected-component aggregation) does not beat L0** — it lowers recall@P≥0.95 (adds false cells)
  and ties at P≥0.99. A third aggregation style (soft spatial-prior smoothing, tested by the skeptic)
  gave at most +0.007. The L0 misses are ~22% of *irreducible* cells in genuinely low-observability
  spots (no neighbor saw the divergence either), so spatial aggregation structurally cannot recover them.
- **L2 (place-adjacency cochain) is invalid for this fixture** — the no-seam guard fails: a pure-coherent
  field has **δ⁰ energy 5.27 ≠ 0**. This is **observer-density-induced** (δ⁰ energy ∝ 1/n: 5.27→2.39→1.24
  →0.54→0.28 as observers/place go 6→12→25→50→99 — skeptic-verified): with `x_v` estimated from each
  place's noisy observers, δ⁰ is dominated by estimation noise. At ~50–100 obs/place the guard would pass.
- **But the structural negative survives even a valid L2:** at 50 obs/place (guard ≈0.54), a place-adjacency
  cochain still has standalone recall ≈0.004, whereas a *within-place* cochain gets ≈0.71 (skeptic-verified).
  **The place-adjacency cochain is the wrong base space for an intra-place seam** — it collapses each place
  to one value, integrating out the within-place contestation that *is* the seam.
- **Conclusion (robust):** the recall ceiling is a **within-place observability / lens-coverage limit**, not
  an aggregation problem. v0.5's observer-of-a-place sheaf is already the right object; neither spatial
  aggregation nor a place-adjacency cochain lifts it.

## Gate 2 — fixable-vs-irreducible classification: UNRESOLVED (implementation-sensitive)

Validation-tuned threshold (argmax val accuracy), held-out test accuracy; majority-class floor = **0.706**
(the test split is 70.6% irreducible — so FJ at 0.705 is *chance* and bounded-confidence at 0.562 is
*below* chance; they are not real classifiers here):

| classifier | sparse (2–4 obs/comm) | dense (5–9 obs/comm) | kind |
|---|---:|---:|---|
| DeGroot (community-mean gap on lifts) | **0.912** | **0.911** | frame-blind lift, needs known labels |
| sheaf-recovery-dynamics (robust IRLS) | 0.785 | 0.884 | frame-aware |
| sheaf-frame-aware ratio (gap/split-resid) | 0.660 | 0.788 | frame-aware |
| Friedkin-Johnsen | 0.705 | — | frame-blind (= chance) |
| bounded-confidence | 0.562 | — | frame-blind (< chance) |

**Why unresolved:** A skeptic pass correctly flagged that my *original* Gate-2 conclusion ("a cheap
baseline beats the sheaf → the sheaf's value is detection-not-classification") was unsupported — it rested
on one weak feature (IRLS residual). But the skeptic's proposed fix (a `gap/(split_resid+σ)` frame-aware
feature scoring ~0.95, beating DeGroot) **does not reproduce in held-out evaluation** in this harness: that
feature scores 0.66–0.79 across observer densities and **never beats DeGroot's robust 0.91.** So the two
implementations disagree (likely threshold-selection: held-out val/test here vs. the skeptic's scratch
setup), and the result flips with feature/threshold choice. **No clean classification claim is warranted
either way.** Note DeGroot's strength here *requires known community labels* and is label-fragile (drops to
0.73 at 50% label corruption — skeptic-verified), so it is not a general-purpose win.

**Honest status:** v0.5's own classification result (0.81 on its fixture) is **neither confirmed nor
refuted** by v0.6. Resolving Gate 2 cleanly (which frame-aware feature + threshold rule, under controlled
observer density and a fair label-availability assumption) is a focused v0.6b task — not done here.

## What still stands (unchanged, trustworthy)

v0.5's genuine win was **detection**: the frame-aware joint-lift separates real contestation from
frame-blind artifact at **precision 1.00 vs 0.59 / 3-class 0.89 vs 0.37** (skeptic-verified as v0.5's real
output, not overstated). v0.6 does not touch that. **The sheaf's demonstrated value remains frame-aware
seam DETECTION.**

## Caveats (read before any external use)
- Synthetic; mechanism-and-scope test, **not** real-data validation. Stosch et al. 2022 grounds the
  *phenomenon*, not the method.
- Single fixture family; constant-field simplification; one σ; aggregation sampled by ~3 styles; Gate-2
  classification assumes **known** community labels (latent discovery = v0.6b, harder).
- L2 = δ⁰ with identity restrictions on per-place-estimated values — **not** a data-dependent H¹ (pinned
  harmonic extension / nontrivial restrictions = v0.7, only if a phenomenon needs it).

## For external framing (grant / Mehul / Victoria)
- **Quote freely:** the sheaf's value is **frame-aware seam detection**; spatial aggregation does not lift
  recall (the ceiling is observability, not aggregation); a place-adjacency cochain is the wrong sheaf for
  intra-place contestation (the within-place sheaf — v0.5 — is right).
- **Do NOT quote** any fixable-vs-irreducible *classification* comparison — it is unresolved/implementation-
  sensitive in v0.6.

## One-line takeaway
> v0.6: spatial aggregation and a place-adjacency cochain do **not** lift seam-detection recall (the limit
> is within-place observability; v0.5's observer-of-a-place sheaf is the right object) — a trustworthy
> negative. The fixable-vs-irreducible classification comparison is implementation-sensitive and left
> unresolved. v0.5's frame-aware **detection** win stands.
