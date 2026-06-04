# C0 — KOI coherence-diagnostic testbed: scope + build-plan

*Working scope artifact (spore/tmp/, in-stream). The BUILD is cross-stream (koi-processor + IC) and needs explicit operator auth at build-time; this doc is the pre-build scoping. Grounded in a 2026-06-02 read-only survey of koi-processor + the live personal_koi graph.*

## ⚠️ CORRECTION (2026-06-02, from live `personal_koi` via the parallel discourse-graph session)
The "Honest gaps" section below was **materially stale on live-data density** — it over-stated the substrate's un-readiness. Verified live counts supersede it:
- **NOT ~10 claims — 2172 claims** (1567 learning-field source / 436 review / 169 null-layer). The "~10" was a `search_claims`-with-no-filter artifact, not the true count.
- **`supports`/`opposes` edges ARE hydrated** — 1211 `learning_field` supports + 768 opposes edges (+ backfills). Gap #1 below ("not hydrated") is **superseded**; the standing Apr-2026 blocker has since been resolved.
- **Claims embedding:** table-level true (no column on `claims`), but **1165 claim-linked `entity_registry` rows carry `embedding_3072`** — semantic position IS available via linked entities.

Still true: C0 = read-only hand-typed pilot vs. the count baseline; KOI is **not yet a typed discourse sheaf** (no stalk/restriction-map layer for cohomology, even though the stance edges now exist).

**Corrected Step 0:** do NOT assume the stance layer is absent. Verify the **quality / semantics / usable density** of the existing `supports`/`opposes` edges, then pick a small **known-answer slice from the already-hydrated learning-field graph**. The "most likely outcome = substrate needs hydration first" (bottom of this doc) is now **much less likely** — the data is there; C0 is more directly viable than this doc originally framed.

---

## What C0 is
The bounded pilot that builds + validates the coherence/obstruction diagnostic on the operator's **own KOI discourse graph first** (cheapest, most-grounded, dog-foods the theory) before instantiating to RC financing (C1 Tier-2) or CIE (C2). Revives `sheaf-experiment-deferral.md` under **trigger #4** (a real coordination-gluing problem) + **#5** (time-boxed). Honors its discipline rule verbatim: **type the object; beat simpler baselines; report the signal alongside the baseline.**

## Substrate survey (grounded 2026-06-02)
- **DB:** `personal_koi` (Postgres, localhost:5432); connect via `koi-processor/config/personal.env`; service = launchd `com.personal.koi-processor`; API `:8351`.
- **Existing "shadow computation" = the BASELINE to beat:** `scripts/learning_field_convergence.sql` + `convergence_export.py`. Governance clusters keyed `{target_spec_doc}:{concept_slug}`; per-cluster stance breakdown (`support_count` / `oppose_count` / `distinct_sources`); field families classified **`ready_with_tension`** (`distinct_sources ≥ 2 AND opposes > 0`) / `ready_convergent` / `needs_more_sources` / `insufficient`. **This is a count-based heuristic** — it knows "there is opposition," not "the opposition is irreducible."
- **Schema:** `claims` (statement, source_document=doc_id, metadata JSONB: `claim_layer` source|review, `governance_cluster_key`, `concept_slug`, `confidence`); `entity_registry` (`embedding_3072` per **entity**, HNSW; **not** per claim); `entity_relationships` (predicates incl. `about`, `supports`, `opposes`, `evidences_claim`, `supersedes_claim`).
- **Cross-repo assembly:** `project_bridge_notes.py` → source claims (C) + review claims (R); linked via `about` edges to shared **Concept** entities; "cross-repo" = multiple project namespaces (`spore.` / `ic.` / `pm.` / `bkc.` / `bregion.`) contributing source claims to a shared review-claim cluster.

## Honest gaps — the deferral doc was right, and the survey confirms it
1. **`supports`/`opposes` claim→claim edges are DEFINED but largely NOT HYDRATED** (a standing Apr-2026 blocker: "supports/opposes never inserted"). **⚠️ The two survey passes disagreed** on whether convergence reads real `entity_relationships` stance edges or derives stance from the review-claim/source-claim disposition linkage — **build Step 0 must verify against live data how stance is actually represented + how dense it is before typing anything.** Do not assume.
2. **It's an entity-fact-claim KNOWLEDGE graph, not yet a typed DISCOURSE sheaf.** The two-layer (agent × discourse) sheaf is architecturally named, not instantiated; stalk choice is underdetermined (≥3 candidates).
3. **Live data is sparse.** A live `search_claims` found ~10 claims total (freshest = the Hansen-Ghrist set, projected 2026-06-02, 6 about sheaf). Tractability is a **non-issue** (the graph is tiny); **data sufficiency is the real risk** — there may be too few contested cross-repo claims for a meaningful result yet.
4. **Claims are not embedded** (entities are, via `embedding_3072`). A claim's "semantic position" must be derived from its linked Concept entity's embedding or computed.

→ **Expectation reset:** C0 is **not** "run H¹ over the live graph." It's a bounded pilot on a **hand-typed slice**, and a *legitimate, valuable* C0 outcome is: **"the substrate isn't a typed sheaf yet; here's the minimal hydration it needs to make a coherence diagnostic testable."** That is the dog-fooding payoff — it tells the operator what to build into the discourse graph next (which is exactly the substrate the operator is already building).

## The bounded pilot (deferral §"First Pilot Scope" shape)
- **Slice:** 1–2 concept clusters with *actual* cross-repo opposition, **plus** a seeded control with a *known* irreducible tension vs. a *known* data-gap (so "earned" is measurable against ground truth).
- **Typed object (hand-authored, minimal — per deferral):** base = the (source-claim ⊔ review-claim) × shared-concept structure convergence already assembles; **stalks** = low-dim hand-authored vectors per claim (stance, confidence, source-project) — *not* learned embeddings in v0; **restriction maps** = rule-based agreement/eligibility checks — *not* learned.
- **Signal:** does the slice glue to a consistent global section? where's the obstruction (which edge/claim)? On a tiny slice this is plain linear algebra (coboundary rank / sheaf Laplacian) — tractable.
- **Baseline to beat:** `convergence_export.py`'s `ready_with_tension` (count: `≥2 sources AND opposes>0`).
- **"Earned" =** the coherence signal (a) **localizes** a seeded/known obstruction edge correctly, AND (b) **distinguishes** irreducible-disagreement from fixable-by-more-evidence *better than* the count heuristic. If it doesn't beat the baseline → C0 reports **"not earned"** + names what's missing. (This is a real possible outcome and is honest, not a failure.)
- **The honest wedge in one line:** the existing baseline can't tell "irreducible" from "needs more sources" — it just counts opposition. The sheaf claim is that gluing/H¹ can. C0 tests *exactly that*, on the operator's own graph, against the baseline.

## Build steps (when greenlit — cross-stream, needs koi-processor auth)
0. **Verify stance representation + density** against live `personal_koi` (resolve the survey disagreement); pick the slice via `convergence_export.py --all`.
1. **Data-prep:** hydrate/hand-author the slice's claim→claim stance edges (since `supports`/`opposes` aren't hydrated).
2. **Type the object:** write down stalks + restriction maps for the slice (hand-authored, documented).
3. **Compute:** coherence / global-section + obstruction localization (small linear algebra).
4. **Baseline:** run `convergence_export.py` on the same slice; capture its verdict.
5. **Compare:** report the sheaf signal **alongside** the baseline on the known-answer control; does it beat it?
6. **Honest writeup:** earned / not-earned + the minimal substrate hydration the diagnostic would need to be worth standing up.

## Homes + auth
- **Diagnostic spec** → an **IC capability doc** (`ic.*` pattern/research). **Code** → `koi-processor/scripts/` (reads `personal_koi`, read-only in v0). The **build is cross-stream** (koi-processor + IC) → needs explicit operator cross-stream auth at build-time. This scope doc is in-stream (spore working artifact).

## Discipline gates (carried from the deferral doc)
- Type the object before any cohomology claim counts.
- No spectral signal counts until it beats simpler baselines.
- Report the signal **alongside** the baseline (no spectral-signal-without-baseline).
- Read + compute + report only; **no writes** to the graph in v0.
- Tiny slice; hand-authored maps; time-boxed; explicit stop condition.

## Most likely honest outcome (stated up front)
Given the un-hydrated edges + sparsity, C0 may well conclude: *"not yet earned — the discourse graph needs claim→claim stance-edge hydration for N concepts before a coherence diagnostic beats the count heuristic; here's the minimal hydration spec."* That outcome **advances the operator's own discourse-graph build** (it's a concrete next-step for the substrate) and is fully consistent with the deferral discipline. C0 is a win whether the signal earns its keep now *or* it tells us precisely what to hydrate first.
