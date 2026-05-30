# ADR-0089 Step-0.5 Audit Manifest (2026-05-28)

**ADR**: ADR-0089 (Bundle α X5) — Margin-as-Reserve scope-condition substrate-strengthening to F9 maintenance-economics
**Session**: Layer 3 fresh session per orchestrator dispatch 2026-05-28
**Plan**: `~/.claude/plans/adr-0089-margin-as-reserve-scope-condition-f9.md`

## Step 0 — State baseline

| Item | Value | Status |
|------|-------|--------|
| Spore HEAD | `b737f34` | baseline |
| Date | 2026-05-28 | — |
| ADR-0089 number | free | OK |
| Validator | 9 errors / 237 warnings | EXACT (matches handoff) |
| concepts yaml | v24 / frozen | UNCHANGED target |
| Governed docs | 301 | → 302 with ADR-0089 |
| canon-rebuild arc | 38 | → 39 (ADR-0089 = 39th) |
| Tracked-dirt | `M AGENTS.md` + `M CLAUDE.md` | EXCLUDE per Gate (f) |

## Gate (j) — F9 frontmatter byte-equal baseline capture

- Target: `docs/foundations/maintenance-economics.md`
- Frontmatter byte-range: **lines 1–11** (`---` … `---`)
- **md5 baseline: `d77ea0622ab3bc211d2408fa3fd7f093`**
- Re-verify at Step 5; MUST be byte-equal post-narrative-ext.
- `depends_on:` (spore.project-vision / structural-legitimacy / federation-protocol / sensor-oracle-governance / actor-governance), `doc_id: spore.maintenance-economics`, `doc_kind: foundation`, `status: active` — ALL preserved unchanged.

## Categorical-correctness catch (preventive vs ADR-X2 Q2-shape cascade-miss)

- F9 §4 heading: **"§4 Doctrine — Eight-Category Maintenance-Economics Substrate"** (§4.1 Reproductive-Labor Visibility … §4.8 Cross-Federation Portability).
- **Do NOT add §4.9 / do NOT renumber / do NOT change "Eight" → "Nine".** A 9th category would be an enumeration edit, violating narrow scope-condition shape + Gate (g) N/A.
- Clean shape: end-of-§4 substrate-strengthening note applying **across** the eight categories (Option A).

## Cluster-counting (honest-rigor; load-bearing for §Consequences)

Per DECISION-BRIEF §12.4 + W2.3 §4.5 + W3.3 §4.5:

| Cluster | Tradition | Status | Source anchor |
|---------|-----------|--------|---------------|
| 1 | Sahely Margin anti-optimization (buffer/reserve/slack/redundancy; "margin is not inefficiency") | FULL | W2.3 C16 §2.2 pdf-p33 + C14 Ch2 pdf-p31 |
| 2 | Resilience theory — slack-as-resilience (Holling adaptive cycle; Walker & Folke panarchy/adaptive capacity; + resilience-engineering Hollnagel-Woods-Leveson at safety layer) | FULL | DECISION-BRIEF §12.4; W2.3 §4.5 (a)-RICH |
| 3 | Taleb antifragility (redundancy/optionality/via-negativa) | FULL | DECISION-BRIEF §12.4 |
| (partial) | Lean-vs-resilient operations management (Spear, Bohn-Roberts) | PARTIAL | DECISION-BRIEF §12.4 |
| (deepening) | Allostatic-load (McEwen 1998–2007 / Sterling-Schulkin) — organism-scale operationalization of margin-as-reserve depletion under chronic load | substrate-deepening (NOT independent 4th cluster) | W3.3 §4.5 + Ch8 §8.1–8.5 |

**Honest-rigor verdict**: 3 FULL clusters ≥ ≥2-cluster derived-glossary threshold (and ≥3-cluster threshold). **Scope-condition is nonetheless the cleaner disposition** because F9's `reproductive-infrastructure` slug (ADR-0079) already covers the reserve substrate; a new `reserve-margin`/`slack-as-resilience` slug would duplicate territory. This is **parsimony-as-earning-test-outcome** (ADR-0048; reject "would fill a beautiful gap"). W2.3 §4.5 self-anticipates: "enrichment of `reproductive-infrastructure` slug semantics OR scope-condition F9 doctrine; new slug unlikely under honest-rigor parsimony."

**Distinct method-precedent from ADR-0088**: ADR-0088 had 2 clusters (below slug threshold → scope-condition by necessity). ADR-0089 has 3 clusters (above slug threshold → scope-condition by parsimony/existing-slug-coverage). NEW precedent: *scope-condition chosen over slug DESPITE sufficient cluster-count.*

**Margin-as-foundation-primitive reading is THIN** (Sahely-only at synthesis layer per W2.3 §4.5 (b)) — explicitly NOT claimed. Scope-condition strengthens the reserve-substrate of existing F9 doctrine, NOT a new primitive.

## Verbatim load-bearing quotes (Gate L5b grep-verified against live files)

- W2.3 C16 §2.2 (pdf-p33): *"Margin is the space between present demand and maximum capacity. It is the buffer, reserve, slack, redundancy, or adaptive room that allows a system to absorb disturbance without losing coherence. [...] Margin is not inefficiency. This is one of the great errors of modern optimization. Systems designed only for maximum throughput, minimum cost, just-in-time delivery, lean staffing, and continuous growth ... consume their own buffers. They remove the very slack that allows adaptation. They increase performance by reducing resilience."*
- W2.3 C14 (Ch2 pdf-p31): *"It must have margins, because without reserve there is no resilience."*
- W3.3 §4.5: *"McEwen's allostatic-load framework operationalizes margin-as-reserve at the body scale: chronic stress exhausts allostatic capacity, depleting the body's reserve for adaptive response. This is the clinical-medical instantiation of margin-anti-optimization (W2.3 §2.2 Margin canonical articulation) at organism layer."*

## 10 discipline gates inherited from X4 (Bundle α)

| Gate | Disposition for ADR-0089 |
|------|--------------------------|
| (a) cluster-counting honest math | 3 FULL + 1 PARTIAL + allostatic deepening; scope-condition by parsimony |
| (b) UNION-citation Step-0.5 audit | 2-bridge-note substrate (W2.3 + W3.3) verified |
| (c) Item-6 yaml amendment | N/A (no yaml edit) |
| (d) DH-PM-1 hard-pause | expected NOT FIRED (F9 doctrine-layer; no matchmaking engagement) |
| (e) Codex round budget | 2 substantive + 1 verification (known-ceiling) |
| (f) tracked-dirt baseline + pre-commit allowlist HALT | AGENTS.md/CLAUDE.md excluded; exactly 2 files |
| (g) enumeration-target | N/A (no canon-body doctrine-enumeration site; F9 body-ext is different category; "Eight-Category" preserved) |
| (h) ADR frontmatter format | ADR-0085/0088 template read; `decision: edit` |
| (i / L5b) grep-verify-citations | bridge-note doc_ids + quotes verified at plan-time; re-verify at draft-completion |
| (j) F9 byte-equal-frontmatter | md5 `d77ea0622ab3bc211d2408fa3fd7f093` captured; re-verify Step 5 |

## Target-subsection options (Step 1 → operator ratifies Step 2)

- **Option A (recommended)**: end-of-§4 substrate-strengthening subsection (cross-category reserve-discipline); preserves "Eight-Category".
- **Option B**: extend §4.5 Infrastructure-Economics (narrower topical fit).
- **Option C**: §6 Open Questions extension (rejected — too weak for ratified substrate-strengthening).
