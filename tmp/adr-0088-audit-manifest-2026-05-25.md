# ADR-0088 Step 0.5 Audit Manifest

**Date**: 2026-05-25
**ADR**: spore:ADR-0088 care-cluster-scope-condition-adr-0045
**Plan**: `~/.claude/plans/purring-gathering-river.md`
**Spore HEAD**: `2783f1c` (Step 0 verified)
**Validator pre-state**: 9 errors / 237 warnings EXACT (Step 0 verified; full output at `tmp/adr-0088-validator-pre.txt`)

---

## Gate-by-gate verdicts

### (a) Cluster-counting honest math — scope-condition threshold

| Cluster | Members | Operational-concern match | Status |
|---|---|---|---|
| **Cluster 1** — Existing ADR-0045 care-ethics lineage | Held (three senses: labor+disposition+relation) / Tronto (4-phase attentiveness→responsibility→competence→responsiveness + caring-with) / Kittay (nested-dependency) / Federici (invisibilisation critique) | Care as asymmetric-relational practice; care as foundational-relational; care as labor-disposition-relation | FULL (canonically established via ADR-0045 §Context + §Operational-earning) |
| **Cluster 2** — Sahely-Maturana school | Maturana (biology of love; observer-distinction-explanation-living-organization-organism-medium-congruence-structural-coupling-emotioning-languaging-conversation-culture-and-love) / Verden-Zöller (cultural-biology) / Bunnell (editorial-framing) / Dávila Yáñez (reflective-conversations) | Care AS the practice through which structural-coupling is sustained; "love...as the relational domain in which the other arises as legitimate in coexistence, is not sentimental but foundational" (Sahely W1.1 C-6 verbatim); "care as structural coupling" (Sahely W1.2 C-7 verbatim) | FULL (Spore-side substrate at W1.1 + W1.2 + W3.3 + W4.3 across 4 bridge notes) |

**Verdict**: 2 FULL clusters meet scope-condition threshold (≥2-cluster sufficient for scope-condition NOT primitive-admission ≥3-cluster).

**Operational-concern match per ADR-0064 honest-rigor**: Both clusters articulate care-as-foundational-relational-practice through which structural-coupling is sustained. Different tradition-angles (asymmetric-relational vs structural-coupling formalism) of the same operational concern. NOT surface-vocabulary overlap alone.

**Adjacent partial clusters noted, NOT counted as third FULL cluster** (per `feedback_surface_vocabulary_vs_operational_concern.md`):
- Hochschild emotional labor (overlaps Federici invisibilisation)
- Folbre care economics (overlaps Held labor-sense)
- Whyte-Kimmerer Indigenous kinship-care (parallel tradition but operationally adjacent to Kittay nested-dependency)
- Noddings caring relations (overlaps Held relation-sense)

All four are substrate-resonance; none provides a third independent cluster.

**Scope-condition vs new-doctrine vs slug-admission verdict**:
- NOT new doctrine — ADR-0045 already at 4th-cross-cutting-doctrine layer post-ADR-0086
- NOT slug admission — `care-commoning` slug already exists; no new vocabulary admitted
- IS scope-condition substrate-strengthening — Maturana school adds tradition-anchor to existing doctrine's substrate-evidence base

### (b) UNION-citation Step 0.5 audit gate — 4 bridge notes

All 4 substrate bridge notes verified at live filesystem with correct `doc_id:` prefix:

| Wave | Path | doc_id | Substrate-content |
|---|---|---|---|
| W1.1 | `docs/research/connections/sahely-maturana-viability-grammar.md` | `spore.connection.sahely-maturana-viability-grammar` | C-6 LOVE-as-relational-ground (LOAD-BEARING; verbatim Maturana "love...relational domain...legitimate in coexistence...not sentimental but foundational") |
| W1.2 | `docs/research/connections/sahely-biology-of-living-coordination.md` | `spore.connection.sahely-biology-of-living-coordination` | C-7 "care as structural coupling" (clinical operationalization with Health/Disease/Healing/Care/Public-health/Civilization paired definitions) |
| W3.3 | `docs/research/connections/sahely-systems-immunology.md` | `spore.connection.sahely-systems-immunology` | Clinical-encounter-as-structural-coupling substrate-strengthening per §17.4 |
| W4.3 | `docs/research/connections/sahely-medicine-of-living-coherence.md` | `spore.connection.sahely-medicine-of-living-coherence` | Medicine + care-as-structural-coupling per §17.4 |

**All resolved** — Gate (b) PASS.

### (c) Item 6 amendment shape — **N/A for ADR-X4**

No yaml edit; no new slug entry; isolated-fragment safe_load() doesn't apply. Skip.

### (d) DH-PM-1 hard-pause check

PM Pre-alpha; smoke-test only (3-row Seq-Scan); no Victoria LHC Phase 0 operational data (May–June 2026 — still future). Care-cluster doctrine-layer scope-condition does NOT engage DH-PM-1 accounting-dependence held-tension at operational-layer matchmaking. **Verdict: NOT FIRED** (matches ADR-0086 + ADR-0087 + ADR-0084 + ADR-0079 doctrine/glossary-layer precedent).

### (e) Codex round budget — 2-round known-ceiling

- Round 1 high: 2 open questions resolved (Q1 §Consequences ratification + Q2 13-path supported_by enumeration) ✓
- Round 2 high: 6 must-fix items applied (B1 frontmatter live-capture / B2 yaml semantic invariants / B3 E.1 branch removal / B4 commit-allowlist-strict / M1 pre-commit allowlist check / M2 HEAD~2..HEAD bundle verification) ✓
- 2-round known-ceiling discipline held; NO Round 3 dispatched per `feedback_intake_to_vocab_admission_program.md`

### (f) Tracked-dirt baseline + committed-allowlist-strict

Pre-execution `git status` baseline matches expected: `M AGENTS.md` + `M CLAUDE.md` + tmp/ artifacts + research staging.

**Committed allowlist (strict, per Codex R2 B4)**: exactly 2 files across atomic-bundle:
- `docs/research/canon-decisions/0088-care-cluster-scope-condition-adr-0045.md`
- `docs/research/canon-decisions/0045-care-cross-cutting-doctrine.md`

**Will be enforced at**: Steps 4a + 4b via `git diff --cached --name-only` HALT check.

### (g) Enumeration-target classification — **N/A for ADR-X4**

No canon-body edits. Skip.

### (h) ADR frontmatter format verification

ADR-0087 frontmatter (most recent in arc) read at lines 1-30 as authoring template. Confirmed format: `doc_id:` + `doc_kind: decision-record` + `status: draft/active` + `adr_number: "0088"` + `opened-on/closed-on:` dates + `decision: edit` + `r_claim_source:` list + `r_claim_statement: |` multi-line + `supported_by:` list + `authorized-by:` + `queue_reference:` + `affects_canon:` + `related_adrs:` + `concepts:` — **NO `shared_framing:` field** for ADR-0088 (scope-condition shape; no companion framing-note).

### (L5b) Grep-verify-citations preemptive

**Verified verbatim from Sahely W1.1**:
- "love, understood in Maturana's precise sense as the relational domain in which the other arises as legitimate in coexistence, is not sentimental but foundational" (C-6, pdf-p3)
- "the central LOVE node...is the GROUND of the grammar, not one of the reflective questions" (W1.1 §4 canonical visualization)
- Lineage acknowledgements: Maturana, Gerda Verden-Zöller, Pille Bunnell, Ximena Dávila Yáñez (W1.1 disclosed)

**Verified verbatim from Sahely W1.2**:
- "Health is reframed as coherent transition; disease as discoordination, narrowing, or locked transition; healing as restored movement; care as structural coupling; public health as protection of living conditions; and civilization as an extended niche that may become salugenic or pathogenic" (C-7, pdf-p3)
- "the second is organism-medium coupling...The environment is not a passive external container; it becomes a niche through the organism's living, sensing, acting, and history of structural coupling" (organism-medium domain, pdf body)

**ADR-0045 existing citations preserved unchanged** (frontmatter byte-equal per Gate (j)):
- Held three-sense (labor + disposition + relation)
- Tronto four-phase (attentiveness → responsibility → competence → responsiveness + caring-with)
- Kittay nested-dependency
- Federici invisibilisation critique

### (j) NEW Gate (j) — byte-equal-frontmatter capture

**ADR-0045 frontmatter live capture at Step 0.5 (2026-05-25)**:
- `awk` boundary detection: `start_line: 1`, `end_line: 38`
- `head -38 docs/research/canon-decisions/0045-care-cross-cutting-doctrine.md | md5` = `7a9a05d3065bdb285492242242edb3cf`

**Will be re-verified at Step 5** byte-equal (must match this checksum).

**Discipline rationale**: ADR-0050 / ADR-0077 / ADR-0084 extend-via-prose precedent says "frontmatter UNCHANGED"; ADR-X2 applied this to ADR-0042 successfully; ADR-X4 formalizes via captured-and-verified byte-range. NO frontmatter touch (including no `affects_canon:` / `related_adrs:` / `concepts:` / `shared_framing:` modifications).

---

## Cascade-miss caught at Step 0.5

**DECISION-BRIEF filename correction** (per Gate (L5b) + `feedback_cascade_miss_discipline.md` L5b):
- Plan referenced: `/Users/darrenzal/projects/spore/tmp/sahely-corpus-decision-brief-2026-05-22.md` (MISSING)
- Live canonical: `/Users/darrenzal/projects/spore/tmp/sahely-corpus-canon-pressure-decision-brief-2026-05-22.md` (EXISTS)

**Resolution**: ADR-0088 `supported_by:` path #1 will use the corrected canonical filename. Plan's 13-path enumeration auto-resolves at execution since plan is reference-only; the ADR frontmatter is the canonical-of-record. Audit manifest documents the catch.

**Method-precedent reinforcement**: Recurring lesson from Codex R2 B1 — inline plan references to filenames are cascade-miss-prone; live-resolve discipline at Step 0.5 is the correct shape. Composes with `feedback_cascade_miss_discipline.md` L5b + the Codex R2 B1/B2 "Inline-plan-snapshots-of-canonical-files are cascade-miss-prone" parking-lot method-precedent.

---

## All gates verdict: PASS

Proceed to Step 3a authoring of ADR-0088 body.

**No HALT triggered**. Step 0.5 closes; execution continues.
