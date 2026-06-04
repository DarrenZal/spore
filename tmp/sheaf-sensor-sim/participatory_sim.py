#!/usr/bin/env python3
"""
Participatory bioregional mapping — seam detection + fixable/irreducible classification (v0.5).

People-as-sensors. A shared value field over PLACES (k=3 dims: ecological/cultural/economic).
Each participant has a heterogeneous LENS: a random 2-of-3 projection P_u (a conservationist
sees ecological dims, an economist economic, etc.) and reports y_{u,p}=P_u f_p + noise for the
places they map. Two communities A,B (known affiliation — a realistic workshop input).

Per-place ground-truth class (we construct it, so it's free ground truth):
  COHERENT    : f_A=f_B, low noise            -> single global section exists, no seam
  FIXABLE     : f_A=f_B, but 1-2 RANDOM outlier assessments (not community-aligned)
                -> apparent seam, resolvable (it's noise, not structure)
  IRREDUCIBLE : f_A != f_B (genuine cross-community value-divergence)
                -> structural seam, community-aligned: a sovereignty/FPIC boundary to PROTECT

Diagnostic (sheaf): jointly fit a single section f_p from ALL observers' lenses (the sheaf
consistency lift); residual >> noise => seam. Then fit per-community; if splitting by community
resolves it (residual -> noise) with a large value-gap => IRREDUCIBLE; else => FIXABLE.

Honest baseline (frame-blind): per-observer min-norm lift P_u^T y_u, then variance + a
community-split test on the lifts. (A truly raw-variance baseline can't even be computed —
observers report different dims.) The min-norm lift is underdetermined (fills the unseen dim
with 0), so it injects ARTIFACT variance even at coherent places -> the heterogeneous-lens trap.

The honest question: is the sheaf actually needed, or does the naive lift+variance classify as
well? The result decides. Run: python3 participatory_sim.py
"""
import numpy as np

K = 3          # value dimensions
M = 2          # lens dimension (each participant sees 2 of 3 dims)


def lens(rng):
    Q, _ = np.linalg.qr(rng.standard_normal((K, K)))
    return Q[:M, :]                       # 2x3 orthonormal rows = a stakeholder's value-lens


def gen_place(cls, rng, sigma=0.08, gap=1.0, out_mag=1.4):
    """Return observers [(comm, P_u, y_u)], plus f_A, f_B."""
    fA = rng.standard_normal(K); fA /= np.linalg.norm(fA)
    if cls == "irreducible":
        d = rng.standard_normal(K); d /= np.linalg.norm(d)
        fB = fA + gap * d; fB /= np.linalg.norm(fB)
    else:
        fB = fA.copy()
    if cls == "irreducible":
        comms = ["A"] * int(rng.integers(3, 6)) + ["B"] * int(rng.integers(3, 6))
    else:
        comms = ["A" if rng.random() < 0.5 else "B" for _ in range(int(rng.integers(5, 9)))]
    obs = []
    for c in comms:
        P = lens(rng)
        f = fA if c == "A" else fB
        obs.append([c, P, P @ f + sigma * rng.standard_normal(M)])
    if cls == "fixable":                  # random (NOT community-aligned) outlier assessments
        for i in rng.choice(len(obs), size=int(rng.integers(1, 3)), replace=False):
            obs[i][2] = obs[i][2] + out_mag * rng.standard_normal(M)
    return obs, fA, fB


def joint_fit(obs, idxs):
    """Sheaf consistency lift: f = argmin sum_{u in idxs} ||P_u f - y_u||^2 ; per-dof RMS residual."""
    if len(idxs) == 0:
        return None, np.inf
    A = np.vstack([obs[i][1] for i in idxs]); b = np.concatenate([obs[i][2] for i in idxs])
    if np.linalg.matrix_rank(A) < K:
        return None, np.inf
    f, *_ = np.linalg.lstsq(A, b, rcond=None)
    dof = max(1, A.shape[0] - K)
    return f, np.linalg.norm(A @ f - b) / np.sqrt(dof)


def diagnose_sheaf(obs, sigma):
    f1, r1 = joint_fit(obs, list(range(len(obs))))
    if f1 is None:
        return "coherent", None                       # underdetermined -> can't assert a seam
    if r1 <= 2.5 * sigma:
        return "coherent", f1
    Ai = [i for i, o in enumerate(obs) if o[0] == "A"]
    Bi = [i for i, o in enumerate(obs) if o[0] == "B"]
    fa, ra = joint_fit(obs, Ai); fb, rb = joint_fit(obs, Bi)
    if fa is None or fb is None:
        return "fixable", f1
    split_resid = np.sqrt((ra**2 * len(Ai) + rb**2 * len(Bi)) / (len(Ai) + len(Bi)))
    gap = np.linalg.norm(fa - fb)
    if split_resid <= 1.5 * sigma and gap > 4 * sigma:    # community split resolves it + real gap
        return "irreducible", (fa, fb)
    return "fixable", f1


def diagnose_naive(obs, sigma):
    """Frame-blind: per-observer min-norm lift P^T y, then variance + community-split on lifts."""
    lifts = np.array([o[1].T @ o[2] for o in obs])
    if np.mean(np.std(lifts, axis=0)) <= 2.5 * sigma:
        return "coherent"
    Al = np.array([o[1].T @ o[2] for o in obs if o[0] == "A"])
    Bl = np.array([o[1].T @ o[2] for o in obs if o[0] == "B"])
    if len(Al) < 1 or len(Bl) < 1:
        return "fixable"
    gap = np.linalg.norm(Al.mean(0) - Bl.mean(0))
    within = 0.5 * (np.mean(np.std(Al, 0)) + np.mean(np.std(Bl, 0)))
    return "irreducible" if (gap > 2 * within and gap > 4 * sigma) else "fixable"


def flattening_error(obs, fA, fB):
    """Naive consensus map = single LSQ ignoring community; error vs the TRUE sections.
    On irreducible places (fA != fB) this is the sovereignty-erasure the sheaf avoids;
    on coherent places (fA = fB) it should be ~noise."""
    f_cons, _ = joint_fit(obs, list(range(len(obs))))
    if f_cons is None:
        return None
    return 0.5 * (np.linalg.norm(f_cons - fA) + np.linalg.norm(f_cons - fB))


# ---------- guards ----------
def guard_nondecorative(rng):
    obs, _, _ = gen_place("coherent", rng, sigma=0.05)
    P0 = obs[0][1]
    naive_lift_artifact = np.linalg.norm(P0.T @ P0 - np.eye(K))   # P^T P != I (rank-2 proj) -> lift loses a dim
    return f"lenses heterogeneous (per-observer lift is rank-{np.linalg.matrix_rank(P0.T@P0)} projection, not full I): {naive_lift_artifact > 0.5}"


def guard_degenerate(rng):
    correct = 0
    for _ in range(30):
        obs, _, _ = gen_place("coherent", rng, sigma=0.05)
        if diagnose_sheaf(obs, 0.05)[0] == "coherent":
            correct += 1
    return f"degenerate: coherent places (low noise) -> sheaf says 'coherent' {correct}/30 ({correct>=27})"


# ---------- experiment ----------
def confusion(true_labels, pred_labels, classes):
    idx = {c: i for i, c in enumerate(classes)}
    Cm = np.zeros((len(classes), len(classes)), int)
    for t, p in zip(true_labels, pred_labels):
        Cm[idx[t], idx[p]] += 1
    return Cm


def run(M_scen=80, P_per=18, sigma=0.08, seed0=7000):
    classes = ["coherent", "fixable", "irreducible"]
    weights = [0.45, 0.30, 0.25]
    t, ps, pn = [], [], []
    flat_irre, flat_coh = [], []
    for s in range(M_scen):
        rng = np.random.Generator(np.random.PCG64(seed0 + s))
        for _ in range(P_per):
            cls = classes[rng.choice(3, p=weights)]
            obs, fA, fB = gen_place(cls, rng, sigma=sigma)
            t.append(cls)
            ps.append(diagnose_sheaf(obs, sigma)[0])
            pn.append(diagnose_naive(obs, sigma))
            fe = flattening_error(obs, fA, fB)
            if fe is not None:
                (flat_irre if cls == "irreducible" else flat_coh).append(fe)
    Cs = confusion(t, ps, classes); Cn = confusion(t, pn, classes)

    def acc(C): return np.trace(C) / C.sum()
    def detect_pr(C):  # contested = fixable|irreducible vs coherent
        tp = C[1:, 1:].sum(); fn = C[1:, 0].sum(); fp = C[0, 1:].sum()
        return tp / (tp + fp + 1e-9), tp / (tp + fn + 1e-9)
    # classification accuracy among truly-contested places (rows fixable+irreducible, cols fixable+irreducible)
    def class_acc(C):
        sub = C[1:, 1:]
        return np.trace(sub) / (C[1:, :].sum() + 1e-9)

    out = ["PARTICIPATORY MAPPING — seam detection + fixable/irreducible (v0.5)",
           "=" * 64,
           f"\n[GUARDS]\n  {guard_nondecorative(np.random.Generator(np.random.PCG64(1)))}"
           f"\n  {guard_degenerate(np.random.Generator(np.random.PCG64(2)))}",
           f"\n[EXPERIMENT]  {M_scen} scenarios x {P_per} places = {len(t)} places, sigma={sigma}",
           f"  class mix (true): coherent={t.count('coherent')} fixable={t.count('fixable')} irreducible={t.count('irreducible')}",
           "\n  3-class accuracy:   SHEAF = {:.2f}   |   naive(lift+variance) = {:.2f}".format(acc(Cs), acc(Cn))]
    sp, sr = detect_pr(Cs); npr, nr = detect_pr(Cn)
    out.append("  seam DETECTION (contested vs coherent):  sheaf P/R = {:.2f}/{:.2f}   |   naive P/R = {:.2f}/{:.2f}".format(sp, sr, npr, nr))
    out.append("  fixable-vs-irreducible CLASSIFICATION accuracy: sheaf = {:.2f}   |   naive = {:.2f}".format(class_acc(Cs), class_acc(Cn)))
    out.append("\n  confusion (rows=true [coherent,fixable,irreducible], cols=pred):")
    out.append(f"    SHEAF:\n{Cs}")
    out.append(f"    naive:\n{Cn}")
    out.append("\n  FLATTENING harm (naive single-consensus error vs the two true sections):")
    out.append("    on IRREDUCIBLE places = {:.3f}  (the sovereignty-erasure: one value forced where there are two)".format(np.mean(flat_irre) if flat_irre else float('nan')))
    out.append("    on coherent  places = {:.3f}  (near 0 — consensus is legitimate there)".format(np.mean(flat_coh) if flat_coh else float('nan')))
    out.append("\n[HONEST READ]")
    out.append("  - The heterogeneous lens is the crux: the naive per-observer lift is underdetermined")
    out.append("    (fills the unseen value-dim with 0), injecting artifact variance even at coherent")
    out.append("    places -> poor detection precision. The sheaf joint-lift combines lenses correctly.")
    out.append("  - If naive classification ~= sheaf, the sheaf isn't needed here (reported honestly).")
    out.append("  - Flattening: averaging into one consensus map mis-values irreducible places by the")
    out.append("    above margin -> that is the divergence the sheaf preserves instead of erasing.")
    report = "\n".join(out)
    print(report)
    with open(__file__.rsplit("/", 1)[0] + "/participatory_results.txt", "w") as fh:
        fh.write(report + "\n")


if __name__ == "__main__":
    run()
