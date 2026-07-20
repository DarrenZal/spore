---
doc_id: spore.connection.sheaf-admm-learned-coordination
doc_kind: connection
research_subkind: bridge_note
status: draft
title: "Sheaf-ADMM 2605.31005 (learned coordination) ↔ Spore coordination substrate"
authored: 2026-07-20
disposition: candidate pattern
depends_on:
  - spore.project-vision
relates_to:
  - spore.connection.hanks-algebraicjulia-sheaf-coordination
  - spore.connection.hanks-coordination-reduction-test
  - spore.connection.sheaf-theory-formalization
  - spore.connection.obstruction-aware-sheafification
  - spore.connection.zhao-async-nonlinear-sheaf-diffusion
external_sources:
  - rid: "document:e1bd378783315bb15c727c1db1b47230b1f64adb32ac54bc8717ed00a3a6d174"
    arxiv: "2605.31005"
    pdf_local: "sheaf-admm-multiagent-coordination/paper.pdf"
    pages: "1-17 (full body)"
intake_phase: 1
---

# Sheaf-ADMM (2605.31005) — learned multi-agent coordination

> **Descriptive comparative-intake artifact — DRAFT PROPOSAL, not canon.** Framing-note-only; admits
> nothing. Single-source rigor: one paper's empirical win is not proof of a Spore primitive. The
> reduction caveat below is load-bearing and must travel with any citation of this note.

## 1. Source discipline

- **Original authors:** Jeffrey Seely, Bartłomiej Cupiał, Llion Jones (arXiv:2605.31005). KOI full body
  ingested `sheaf-explorer`, thorough tier, 2026-07-20 (RID above).
- This is an **empirical ML paper with real ablations** — the closest external analog to the
  Hanks/AlgebraicJulia "coordination-as-homological-program" thesis, and the empirical positive that
  the Hanks line (a math paper with no baseline) lacks.

## 2. C-claims (verbatim-anchored)

- **C1** [anchor: Abstract · pdf-p1] — Input decomposed into overlapping local views; each agent solves
  a **neural-parameterized convex subproblem**; agents coordinate through **unrolled ADMM with
  inter-agent constraints specified by a cellular sheaf** (which aspects of neighbors must agree);
  backprop through the unrolled optimization trains everything end-to-end.
- **C2** [anchor: §5.3 Table 2 · pdf-p7] — **Sudoku 92.6% solve (1.12M params) vs 10.7% param-matched
  MPNN vs 34.7% (4.62M) MPNN.**
- **C3** [anchor: §5.4 Table 1 · pdf-p8] — **Maze 2× OOD 98.1% vs 68.3%** best MPNN; in-distribution
  matches best MPNN at `dv=10` vs `dv=84`.
- **C4** [anchor: §5.4 ablation · pdf-p7] — `K=0` → near-chance; **fixed identity maps fail Maze &
  Sudoku**; **learned *shared* maps** (not sheaf-specific) already reach **92.5%** on Sudoku; LoRA
  modulation closes Maze (99.8%).

## 3. R-claim disposition table

| Target | Concept | Disposition | One-line |
|---|---|---|---|
| Spore coordination substrate | cellular-sheaf / restriction-maps | **framing-note-only** | Named candidate pattern = **"learned block-structured coordination through unrolled constrained optimization"** (NOT "cellular sheaves outperform alternatives"): a structured, optimization-derived coordination layer beats unstructured message-passing on constraint-heavy tasks; the sheaf is the *constraint graph*, and its irreducibility is untested. |
| "sheaf structure is necessary" | global-section | **framing-note-only · decline-with-trigger** | **Do not admit.** Trigger to revisit: a matched **block-constrained ADMM without sheaf language**, plus factor-graph and **SAT/CP** baselines, that still leaves a sheaf-specific gap. |

## 4. Substrate-resonance map (descriptive)

- **Resonates:** the restriction map = "which aspects of neighbors must agree" is the cleanest external
  echo of the Spore trust-edge-as-selective-projection idea — and here the maps are **learned** (fixed
  identity maps fail on Maze/Sudoku), which the Hanks paper's fixed projections never test. But this is
  **not** evidence that the *sheaf* maps are load-bearing: learned **shared** maps (not sheaf-specific)
  already reach 92.5% on Sudoku, and no matched non-sheaf constrained solver is tested. The survivor is
  **learned block-structured coordination**, not demonstrated sheaf necessity.
- **Reduction caveat (must travel):** the restriction maps assemble into a **block-sparse linear
  constraint matrix** and the solver is ordinary **unrolled ADMM**; the coordination-solve baselines
  are all generic MPNNs (a standard CNN baseline appears only in the MNIST robustness study, §Table 4).
  The decisive controls are absent — identical non-sheaf block-ADMM, factor-graph/neural constraint
  solvers, and SAT/CP on Sudoku. So this is *structured-optimization > unstructured-MPNN*, **not**
  sheaf necessity. Per the load-bearing review §3.1(1): highest-priority replication target, not proof.
- **Single-schema:** one shared task decomposed into views — **not** multi-schema federation.

## 5. Cross-repo coherence delta (descriptive only)

- Strengthens the Hanks/Zhao `sheaf-explorer` cluster with the one empirical positive it lacked, while
  the reduction caveat keeps it from being over-read as sheaf-necessity. No write-side change proposed.

## 6. Summary

Sheaf-ADMM is the program's strongest external empirical result and the best *learned*-coordination
echo of Spore's selective-projection intuition. **Disposition: candidate pattern — where the pattern
named is "learned block-structured coordination through unrolled constrained optimization," NOT
"cellular sheaves outperform alternatives."** Identity maps lose, but learned *shared* maps already
reach 92.5% on Sudoku and no matched non-sheaf constrained solver is tested — so the survivor is
**learned block structure**, and sheaf-necessity is unproven. Carried with the standing reduction
caveat (missing matched non-sheaf block-ADMM / factor-graph / SAT-CP baselines; single-schema).
