# Claim-audit matrix — Spore deployment/drafting gate (operational mirror)

> **Status: operational mirror, not a source of truth.** This is the **deployment / drafting gate** for
> Spore audience artifacts and `verify_draft.py` passes — a Spore-side *subset* of the canonical research
> matrix. It is **not** an independent truth source and must not drift into a second canonical matrix.
>
> **Research source of truth (canonical):**
> `sheaf-explorer/src/knowledge/sheaf-research-claim-matrix.md`
> (`doc_id: sheaf-explorer.matrix.sheaf-research-claim-matrix`) — the richer research / discourse-graph
> projection, reusable across sheaf / KG / finance / discourse. All status determinations are made there.
>
> **Precedence:** if a claim's status changes, **update sheaf-explorer first**, then mirror the affected
> deployment row here. Never resolve a status divergence by editing this file alone.
>
> *Internal working doc (not itself an external draft). Created 2026-06-04 (session `14c1e0dd` cont.).*
> **Gate rule:** a claim earns a row here — `safe` / `synthetic-only` / `real-world-grounded` — before it is
> quoted in any audience artifact; never quote `retired` / `blocked`.

## Status legend

| Status | Meaning | Use rule |
|---|---|---|
| **safe** | A design principle or honest scoping statement; not an empirical data claim. | Use frontstage as-is. |
| **synthetic-only** | True, but demonstrated only on synthetic data. | Quote **with the "synthetic, not real-data-validated" caveat**. |
| **real-world-grounded** | Backed by a third-party real-world source or published math. | Quote as grounding **the phenomenon / the math**, never our method. |
| **retired** | Was asserted earlier; now withdrawn. | **Do not use.** |
| **blocked** | Unresolved / not demonstrated; cannot be claimed either way. | **Do not quote as a result.** |

---

## 1. Participatory mapping / coherence

| Claim | Status | Use rule | Source |
|---|---|---|---|
| Frame-aware contested-seam **detection** precision **1.00** vs frame-blind **0.59** | synthetic-only | The durable headline. Quote with synthetic caveat. | `participatory_results.txt` (v0.5); brief §3 |
| Detection **recall 0.82**, bounded by **lens coverage** | synthetic-only | Always pair with the lens-coverage explanation. | `participatory_results.txt`; `FINDINGS-v0.6.md` |
| v0.6: spatial aggregation / place-adjacency cochain **did not lift recall**; ceiling = within-place observability; within-place sheaf is the right object | synthetic-only (negative) | Quote as the honest boundary. | `FINDINGS-v0.6.md` Gate 1 |
| v0 sensor case: **no advantage** over robust stats on independent faults (localization recall 0.23) | synthetic-only (negative) | Quote as the honest negative that sharpens the claim (structured-disagreement, not outlier-detection). | `FINDINGS.md` (v0) |
| 3-way classification accuracy **0.89** vs 0.37 | **retired** | **Do not quote frontstage.** | v0.5 raw; retired post-v0.6 |
| Fixable-vs-irreducible classification accuracy **0.81** vs 0.57 | **retired** | **Do not quote.** | v0.5 raw; retired post-v0.6 |
| Flattening-harm metric (irreducible 0.388 vs coherent 0.268) | **retired** | **Do not quote** (coverage-noisy proxy). | `participatory_results.txt` |
| Can the method **classify** fixable vs irreducible? | **blocked** | Unresolved/implementation-sensitive. Method **surfaces candidate seams for steward review**, does not adjudicate. | `FINDINGS-v0.6.md` Gate 2 |
| H¹ computed for the participatory fixture | **blocked** | No H¹ claim for this fixture. | `FINDINGS-v0.6.md` |
| The **phenomenon**: real participatory mapping yields partial, divergent conflict maps; some divergences are genuinely irreducible trade-offs | real-world-grounded | Quote to ground **the phenomenon, never the method**. | Stosch et al. 2022 (*Land* 11(2):300; verified PDF) |

## 2. Design principle (stance, not data)

| Claim | Status | Use rule | Source |
|---|---|---|---|
| Route through coherence not preference; disagreement is information; don't flatten / don't cross sovereignty boundaries | **safe** | Frontstage-usable as a principle. | design stance (brief §2) |
| The method **surfaces candidate seams for steward review**; the bridgeable-vs-irreducible verdict stays with people | **safe** | The required scoping statement — pair it with any detection claim. | brief §2/§3; `FINDINGS-v0.6.md` |

## 3. Finance / clearing

| Claim | Status | Use rule | Source |
|---|---|---|---|
| Clearing configurations = global sections of a liability sheaf; Eisenberg–Noe a special case | real-world-grounded (math) | Cite as the in-domain math anchor (published math, not our result). | Ghrist 2026 (arXiv 2605.15778); Ghrist/Gould/Lopez/Riess 2025 (arXiv 2503.17836) |
| The sheaf's honest finance contribution is **localization / modular-translation, NOT detection** (a faithful Eisenberg–Noe / Feinstein / netting baseline already detects the obstruction) | **safe** (honest framing) | Present clearing as localization / compositional-explanation. **Never** "sheaf detects what baselines can't." | C1 skeptic rounds; `finance-clearing-implementation-reference.md` |
| "Sheaf clearing beats baselines on real financial data" | **blocked** | Not demonstrated. Do not claim. | — |

## 4. NVIDIA Shape-B (sheaf-GNN risk forecasting)

| Claim | Status | Use rule | Source |
|---|---|---|---|
| A NVIDIA sheaf-GNN commodities / risk / quantum-portfolio session exists (GTC26 transcript read this lane) | **blocked** for external use | The canonical matrix holds this **`parked-unverified`** (NV-1: "do not cite externally until a primary source is found and verified"). Treat as a Shape-B research lane only. A transcript exists this lane — if it warrants upgrade, **propose it in sheaf-explorer first**, then mirror here. | GTC26 transcript (local); research matrix NV-1 |
| NVIDIA sheaf-GNN **beats baselines** / specific value numbers | **blocked** | **Do not cite.** No baseline-beating result; Devansh Substack value numbers are hype/unverified. | transcript; research matrix NV-1 |

## 5. KG-propagation (keystone — not yet run)

| Claim | Status | Use rule | Source |
|---|---|---|---|
| KG embeddings ≈ approximate global sections; new entities via harmonic extension | real-world-grounded (math) | Cite the published method, not our result. | Gebhart 2021; Cobb & Gebhart 2023 (verified PDFs) |
| "Our sheaf KG-propagation beats the embedding baseline on real data" | **blocked** | Keystone experiment, not run. Do not claim. | — (future) |

## 6. Schema / data-share (proposals)

| Claim | Status | Use rule | Source |
|---|---|---|---|
| Coherence-ready ingestion schema objects + consent-transport rules + provenance contract | **safe** (design/spec proposal) | Usable as a proposal; it is a **draft**, not a settled standard. | `coherence-ready-ingestion-schema.md` (draft, sheaf-explorer) |

---

## Two matrices, by design

- **`sheaf-explorer/src/knowledge/sheaf-research-claim-matrix.md` — research source of truth.** The richer
  research / discourse-graph projection (sheaf / KG / finance / discourse), reusable beyond deployment.
  Owned by the research lane. **All status determinations are made there first.**
- **`spore/tmp/claim-audit-matrix.md` (this file) — deployment/drafting gate.** A Spore-side *mirror*
  carrying only the rows a frontstage / audience artifact needs. Owned by the Spore stream. Runs
  `verify_draft`. A subset, not a parallel authority.

**Flow when a status changes** (e.g. classification `blocked → synthetic-only`; a real-data run adds a
`real-world-grounded` row; NVIDIA publishes a baseline-beating result): **update the research matrix in
sheaf-explorer first** (it is canonical), **then** mirror the affected deployment row here. Never resolve a
divergence by editing this file alone — that would fork truth.

**Gate rule (Spore-side):** a claim earns a row here — `safe` / `synthetic-only` / `real-world-grounded` —
before it is quoted in any audience artifact; never quote `retired` / `blocked`. The `verify_draft` sidecar
then sources each quoted claim to the same evidence.

*This file is a subset and mirror; the research matrix is the reusable, canonical projection. Full paths +
verbatim evidence live in the draft sidecars (`*.verifications.yaml`) and the sheaf-explorer matrix.*
