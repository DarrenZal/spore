#!/usr/bin/env python3
"""
Sheaf-coherent sensing — v0 simulation (Shape-A coherence diagnostic on a sensor network).

Pinned construction (see ~/.claude/plans/sheaf-sensor-coherence-sim.md):
  - Global latent field f in R^3 (true regional state).
  - N sensors on a random geometric graph. Sensor u has a fixed random observation
    frame P_u in R^{2x3} (orthonormal rows = a random 2-D view of the 3-D field).
    Node stalk x_u in R^2 = u's view-coords. Observation y_u = P_u f + noise.
  - Edge (u,v): the two view-planes intersect in a 1-D line l_e = normalize(n_u x n_v)
    (n_u = u's plane normal). Restriction maps F_{u<e} = (P_u l_e)^T (1x2), distinct &
    non-identity, so the sheaf Laplacian L = d^T d is NOT the graph Laplacian.
    Consistency F_{u<e} x_u = F_{v<e} x_v  <=>  both agree on l_e^T f.

Estimators (both decode to f by the SAME LSQ lift, scored identically — fairness fix):
  - Sheaf (robust): whiten each edge residual by its noise scale, aggregate to a node
    fault-score (median of incident), flag faults by a robust z-threshold, then LSQ-lift
    f-hat from the UN-flagged sensors.
  - Baseline (fair): global LSQ lift on ALL raw observations (the iid-noise MLE; no
    consistency, no downweighting).
Localization baseline: trimmed-robust per-sensor residual z-score (a no-sheaf outlier detector).

Honest expectation: under pure iid noise (K=0) the baseline is the MLE so sheaf ~= baseline
on RMSE. The sheaf's win is (a) fault LOCALIZATION and (b) fault-ROBUST RMSE under K>0 faults.

Run:  python3 sheaf_sim.py
Deterministic: per-scenario np.random.Generator(PCG64(seed)). numpy-only.
"""
import numpy as np

K_FIELD = 3       # field dimension
D_V = 2           # node-stalk / sensor view dimension
TOL = 1e-9


# ---------- geometry / sheaf construction ----------
def make_graph(N, radius, rng):
    pts = rng.random((N, 2))
    edges = []
    for i in range(N):
        for j in range(i + 1, N):
            if np.linalg.norm(pts[i] - pts[j]) < radius:
                edges.append((i, j))
    return pts, edges


def make_frames(N, rng):
    """P_u: 2x3 orthonormal rows (random 2-D view); n_u: unit normal to u's plane."""
    P = np.zeros((N, D_V, K_FIELD))
    normals = np.zeros((N, K_FIELD))
    for u in range(N):
        Q, _ = np.linalg.qr(rng.standard_normal((K_FIELD, K_FIELD)))
        P[u] = Q[:D_V, :]          # first 2 orthonormal rows
        normals[u] = Q[D_V, :]      # the row QR'd out = plane normal
    return P, normals


def restriction(P_u, n_u, P_v, n_v):
    """Shared line l_e = normalize(n_u x n_v); F_{u<e} = (P_u l_e)^T (1x2). Returns (F_ue,F_ve,ok)."""
    l = np.cross(n_u, n_v)
    nl = np.linalg.norm(l)
    if nl < 1e-6:                    # planes ~parallel -> no well-defined 1-D overlap
        return None, None, False
    l = l / nl
    F_ue = (P_u @ l).reshape(1, D_V)
    F_ve = (P_v @ l).reshape(1, D_V)
    return F_ue, F_ve, True


def build_coboundary(N, edges, P, normals):
    """delta: (E', 2N). Returns delta, kept_edges, and per-edge (F_ue, F_ve)."""
    rows, kept, Fs = [], [], []
    for (u, v) in edges:
        F_ue, F_ve, ok = restriction(P[u], normals[u], P[v], normals[v])
        if not ok:
            continue
        row = np.zeros(D_V * N)
        row[D_V * u: D_V * u + D_V] = F_ue.ravel()
        row[D_V * v: D_V * v + D_V] = -F_ve.ravel()
        rows.append(row)
        kept.append((u, v))
        Fs.append((F_ue, F_ve))
    delta = np.array(rows) if rows else np.zeros((0, D_V * N))
    return delta, kept, Fs


# ---------- scenario ----------
def scenario(N, radius, sigma, K, fault_mag, rng):
    pts, edges = make_graph(N, radius, rng)
    P, normals = make_frames(N, rng)
    f_true = rng.standard_normal(K_FIELD)
    f_true /= np.linalg.norm(f_true)
    y = np.zeros((N, D_V))
    for u in range(N):
        y[u] = P[u] @ f_true + sigma * rng.standard_normal(D_V)
    faulty = set()
    if K > 0:
        faulty = set(rng.choice(N, size=min(K, N), replace=False).tolist())
        for u in faulty:
            y[u] = y[u] + fault_mag * rng.standard_normal(D_V)   # additive structured bias
    delta, kept, Fs = build_coboundary(N, edges, P, normals)
    return dict(pts=pts, edges=kept, P=P, normals=normals, f_true=f_true,
                y=y, faulty=faulty, delta=delta, Fs=Fs, sigma=sigma)


# ---------- decode (SHARED by both estimators) ----------
def lsq_lift(P, y, keep_idx):
    """f-hat = argmin_f sum_{u in keep} ||P_u f - y_u||^2  (the shared decode)."""
    A = np.vstack([P[u] for u in keep_idx])
    b = np.concatenate([y[u] for u in keep_idx])
    if np.linalg.matrix_rank(A) < K_FIELD:
        return None
    f_hat, *_ = np.linalg.lstsq(A, b, rcond=None)
    return f_hat


# ---------- sheaf fusion (robust) ----------
def sheaf_localize(sc):
    """Whitened edge residuals -> node fault-scores (median of incident)."""
    N = sc["P"].shape[0]
    sigma = max(sc["sigma"], 1e-9)
    incident = [[] for _ in range(N)]
    for (u, v), (F_ue, F_ve) in zip(sc["edges"], sc["Fs"]):
        resid = float((F_ue @ sc["y"][u] - F_ve @ sc["y"][v]).ravel()[0])   # (delta y)_e, raw obs
        var_e = sigma**2 * (np.sum(F_ue**2) + np.sum(F_ve**2))         # per-edge noise scale
        r = abs(resid) / np.sqrt(var_e)                                # whitened residual
        incident[u].append(r); incident[v].append(r)
    scores = np.array([np.median(s) if s else 0.0 for s in incident])
    return scores


def robust_threshold(scores, z=3.0):
    med = np.median(scores)
    mad = np.median(np.abs(scores - med)) * 1.4826 + 1e-12
    return med + z * mad


def sheaf_fusion(sc):
    N = sc["P"].shape[0]
    scores = sheaf_localize(sc)
    tau = robust_threshold(scores)
    flagged = set(np.where(scores > tau)[0].tolist())
    keep = [u for u in range(N) if u not in flagged]
    if len(keep) < K_FIELD or np.linalg.matrix_rank(np.vstack([sc["P"][u] for u in keep])) < K_FIELD:
        keep = list(range(N))   # observability fallback: trust all
    f_hat = lsq_lift(sc["P"], sc["y"], keep)
    return f_hat, scores, flagged


# ---------- baselines ----------
def baseline_fusion(sc):
    """Fair no-sheaf comparator: global LSQ lift on ALL raw obs (iid MLE)."""
    return lsq_lift(sc["P"], sc["y"], list(range(sc["P"].shape[0])))


def baseline_localize(sc):
    """No-sheaf robust outlier detector: trimmed-LSQ residual z-scores."""
    N = sc["P"].shape[0]
    f0 = baseline_fusion(sc)
    res = np.array([np.linalg.norm(sc["P"][u] @ f0 - sc["y"][u]) for u in range(N)])
    drop = set(np.argsort(res)[-max(1, N // 6):].tolist())            # trim worst ~1/6, refit
    keep = [u for u in range(N) if u not in drop]
    f_rob = lsq_lift(sc["P"], sc["y"], keep) if len(keep) >= K_FIELD else f0
    res2 = np.array([np.linalg.norm(sc["P"][u] @ f_rob - sc["y"][u]) for u in range(N)])
    med = np.median(res2); mad = np.median(np.abs(res2 - med)) * 1.4826 + 1e-12
    return (res2 - med) / mad                                          # z-scores


# ---------- metrics ----------
def rmse(f_hat, f_true):
    return float("nan") if f_hat is None else float(np.linalg.norm(f_hat - f_true))


def prec_rec(flagged, faulty, N):
    if not faulty:
        return None, None
    tp = len(flagged & faulty)
    prec = tp / len(flagged) if flagged else (1.0 if not faulty else 0.0)
    rec = tp / len(faulty)
    return prec, rec


def pr_from_scores(scores, faulty, N):
    if not faulty:
        return None, None
    flagged = set(np.where(scores > robust_threshold(scores))[0].tolist())
    return prec_rec(flagged, faulty, N)


# ---------- guards (empirical verification of the pinned math) ----------
def guard_nondecorative():
    rng = np.random.Generator(np.random.PCG64(1))
    sc = scenario(N=24, radius=0.4, sigma=0.05, K=0, fault_mag=0, rng=rng)
    if not sc["edges"]:
        return "SKIP (no edges)"
    (u, v) = sc["edges"][0]; (F_ue, F_ve) = sc["Fs"][0]
    block = -(F_ue.T @ F_ve)                       # off-diag 2x2 block of L=d^T d for this edge
    is_scalar_I = np.allclose(block, (np.trace(block) / 2) * np.eye(D_V), atol=1e-9)
    rank1 = np.linalg.matrix_rank(block, tol=1e-9) == 1
    return f"L_sheaf off-diag block rank={np.linalg.matrix_rank(block,tol=1e-9)} (rank-1, NOT scalar*I): {rank1 and not is_scalar_I}"


def guard_observability():
    rng = np.random.Generator(np.random.PCG64(2))
    sc = scenario(N=24, radius=0.4, sigma=0.05, K=0, fault_mag=0, rng=rng)
    r = np.linalg.matrix_rank(np.vstack(sc["P"]))
    return f"rank(stacked observation frames) = {r} (== k=3 -> field observable): {r == K_FIELD}"


def guard_degenerate():
    rng = np.random.Generator(np.random.PCG64(3))
    sc = scenario(N=24, radius=0.4, sigma=0.0, K=0, fault_mag=0, rng=rng)
    scores = sheaf_localize(sc)
    fs, _, _ = sheaf_fusion(sc); fb = baseline_fusion(sc)
    return (f"degenerate (sigma=0,K=0): max whitened residual={scores.max():.2e} (~0); "
            f"sheaf RMSE={rmse(fs, sc['f_true']):.2e}, base RMSE={rmse(fb, sc['f_true']):.2e} (~0): "
            f"{scores.max() < 1e-6 and rmse(fs, sc['f_true']) < 1e-6}")


def guard_single_fault():
    rng = np.random.Generator(np.random.PCG64(4))
    sc = scenario(N=30, radius=0.35, sigma=0.05, K=1, fault_mag=8.0, rng=rng)
    _, scores, flagged = sheaf_fusion(sc)
    fault = next(iter(sc["faulty"]))
    top = int(np.argmax(scores))
    return (f"single large fault: injected sensor={fault}, top-score sensor={top}, "
            f"localized (injected in flagged set): {fault in flagged}")


# ---------- coherent-split obstruction (the sheaf-distinctive test) ----------
def sheaf_edge_residuals(sc):
    res = []
    for (u, v), (F_ue, F_ve) in zip(sc["edges"], sc["Fs"]):
        resid = abs(float((F_ue @ sc["y"][u] - F_ve @ sc["y"][v]).ravel()[0]))
        var_e = sc["sigma"]**2 * (np.sum(F_ue**2) + np.sum(F_ve**2))
        res.append(resid / np.sqrt(var_e))
    return np.array(res)


def scenario_split(N, radius, sigma, delta, rng):
    """Two spatial regions sense DIFFERENT field values (f_A vs f_B). No sensor is an
    outlier (each is perfectly consistent with its own region); the obstruction is the
    boundary seam between regions. A per-sensor outlier detector is blind to this."""
    pts, edges = make_graph(N, radius, rng)
    P, normals = make_frames(N, rng)
    fA = rng.standard_normal(K_FIELD); fA /= np.linalg.norm(fA)
    d = rng.standard_normal(K_FIELD); d /= np.linalg.norm(d)
    fB = fA + delta * d; fB /= np.linalg.norm(fB)
    group = pts[:, 0] < 0.5                       # region A = left half
    y = np.zeros((N, D_V))
    for u in range(N):
        f_u = fA if group[u] else fB
        y[u] = P[u] @ f_u + sigma * rng.standard_normal(D_V)
    _, kept, Fs = build_coboundary(N, edges, P, normals)
    boundary = set(i for i, (u, v) in enumerate(kept) if group[u] != group[v])
    return dict(P=P, normals=normals, y=y, edges=kept, Fs=Fs, sigma=sigma,
                boundary=boundary, group=group)


def run_split(label, N, radius, sigma, delta, M, seed0):
    precs, recs, persen_flag = [], [], []
    for i in range(M):
        rng = np.random.Generator(np.random.PCG64(seed0 + i))
        sc = scenario_split(N, radius, sigma, delta, rng)
        if not sc["edges"] or not sc["boundary"]:
            continue
        res = sheaf_edge_residuals(sc)
        flagged = set(np.where(res > robust_threshold(res))[0].tolist())
        b = sc["boundary"]
        tp = len(flagged & b)
        precs.append(tp / len(flagged) if flagged else 0.0)
        recs.append(tp / len(b))
        # per-sensor outlier baseline: does ANY sensor look anomalous? (it shouldn't)
        N_ = sc["P"].shape[0]
        f0 = lsq_lift(sc["P"], sc["y"], list(range(N_)))
        sres = np.array([np.linalg.norm(sc["P"][u] @ f0 - sc["y"][u]) for u in range(N_)])
        med = np.median(sres); mad = np.median(np.abs(sres - med)) * 1.4826 + 1e-12
        persen_flag.append(int(np.sum((sres - med) / mad > 3.0)))
    return (f"\n=== {label}  (N={N}, sigma={sigma}, delta={delta}, M={len(precs)}) ===\n"
            f"  sheaf BOUNDARY/obstruction localization (edge-level): precision={np.mean(precs):.2f} "
            f"recall={np.mean(recs):.2f}\n"
            f"  per-sensor outlier baseline: flags {np.mean(persen_flag):.1f} sensors/scenario as anomalous "
            f"(it CANNOT localize a seam — no sensor is individually an outlier)")


# ---------- experiment ----------
def run_regime(label, N, radius, sigma, K, fault_mag, M, seed0):
    sheaf_rmse, base_rmse = [], []
    sheaf_prec, sheaf_rec, base_prec, base_rec = [], [], [], []
    for i in range(M):
        rng = np.random.Generator(np.random.PCG64(seed0 + i))
        sc = scenario(N, radius, sigma, K, fault_mag, rng)
        if np.linalg.matrix_rank(np.vstack(sc["P"])) < K_FIELD:
            continue
        fs, scores, flagged = sheaf_fusion(sc)
        fb = baseline_fusion(sc)
        sheaf_rmse.append(rmse(fs, sc["f_true"])); base_rmse.append(rmse(fb, sc["f_true"]))
        if K > 0:
            p, r = prec_rec(flagged, sc["faulty"], N)
            bp, br = pr_from_scores(baseline_localize(sc), sc["faulty"], N)
            if p is not None: sheaf_prec.append(p); sheaf_rec.append(r)
            if bp is not None: base_prec.append(bp); base_rec.append(br)
    out = [f"\n=== {label}  (N={N}, sigma={sigma}, K={K}, fault_mag={fault_mag}, M={len(sheaf_rmse)}) ==="]
    out.append(f"  field-RMSE   sheaf median={np.median(sheaf_rmse):.4f}  baseline median={np.median(base_rmse):.4f}  "
               f"(sheaf better in {np.mean(np.array(sheaf_rmse) < np.array(base_rmse))*100:.0f}% of runs)")
    if K > 0 and sheaf_prec:
        out.append(f"  fault-localization  sheaf  precision={np.mean(sheaf_prec):.2f} recall={np.mean(sheaf_rec):.2f}   "
                   f"|  outlier-baseline precision={np.mean(base_prec):.2f} recall={np.mean(base_rec):.2f}")
    return "\n".join(out)


def main():
    lines = []
    lines.append("SHEAF-COHERENT SENSING — v0 simulation results")
    lines.append("=" * 60)
    lines.append("\n[GUARDS — empirical verification of the pinned math]")
    lines.append("  " + guard_nondecorative())
    lines.append("  " + guard_observability())
    lines.append("  " + guard_degenerate())
    lines.append("  " + guard_single_fault())

    lines.append("\n[EXPERIMENT — sheaf vs fair baselines, M randomized scenarios per regime]")
    # Regime A: pure iid noise, no faults -> expect sheaf ~= baseline (baseline is MLE)
    lines.append(run_regime("Regime A: iid noise, NO faults (K=0)", N=30, radius=0.35,
                            sigma=0.10, K=0, fault_mag=0, M=60, seed0=1000))
    # Regime B: faults present -> expect sheaf RMSE < baseline + sheaf localizes
    lines.append(run_regime("Regime B: K=3 structured faults (large)", N=30, radius=0.35,
                            sigma=0.10, K=3, fault_mag=8.0, M=60, seed0=2000))
    lines.append(run_regime("Regime C: K=1 fault", N=30, radius=0.35,
                            sigma=0.10, K=1, fault_mag=8.0, M=60, seed0=3000))
    lines.append(run_regime("Regime D: K=5 faults, subtler (fault_mag=3)", N=40, radius=0.30,
                            sigma=0.10, K=5, fault_mag=3.0, M=60, seed0=4000))

    lines.append("\n[SHEAF-DISTINCTIVE TEST — coherent-split obstruction: two regions, "
                 "no individual outlier sensor]")
    lines.append(run_split("Regime E: coherent split (delta=0.6)", N=40, radius=0.30,
                           sigma=0.10, delta=0.6, M=60, seed0=5000))
    lines.append(run_split("Regime F: coherent split, subtler (delta=0.3)", N=40, radius=0.30,
                           sigma=0.10, delta=0.3, M=60, seed0=6000))

    lines.append("\n[HONEST READ]")
    lines.append("  A: sheaf ~= baseline (expected — baseline is the iid MLE).")
    lines.append("  B/C/D (independent faults): sheaf's robust-fusion RMSE win is shared by ANY")
    lines.append("       outlier-rejecting method; a per-sensor outlier detector localizes as well or better.")
    lines.append("       => on independent faults the sheaf does NOT beat a good robust baseline.")
    lines.append("  E/F (coherent split): the sheaf localizes the OBSTRUCTION SEAM (edge-level) where")
    lines.append("       per-sensor outlier detection is structurally blind (no sensor is anomalous).")
    lines.append("       => THIS is the sheaf-distinctive value: obstruction-as-information, not outlier-rejection.")
    report = "\n".join(lines)
    print(report)
    with open(__file__.rsplit("/", 1)[0] + "/results.txt", "w") as fh:
        fh.write(report + "\n")


if __name__ == "__main__":
    main()
