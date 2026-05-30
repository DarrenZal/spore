# ADR-0090 Close-Out Manifest (2026-05-29) — Bundle α X6 (FINAL)

**ADR**: ADR-0090 — C13 R-Perception-as-power scope-condition substrate-strengthening to F4 representation-authority
**Plan**: `~/.claude/plans/adr-0090-perception-as-power-scope-condition-f4.md`
**Disposition**: scope-condition narrative-extension to F4 (Sahely-Perception + Galtung structural/cultural-violence + Standpoint-epistemology tradition-anchors)
**Closes Bundle α at 6/6** (X1 ADR-0085 + X2 ADR-0086 + X3 ADR-0087 + X4 ADR-0088 + X5 ADR-0089 + X6 ADR-0090)

---

## Commit ceremony (2-commit, clean)

| Commit | SHA | Message |
|--------|-----|---------|
| DRAFT | `bb13c9d` | `intake: sahely Layer 3 ADR-0090 perception-as-power-scope-condition-f4 — DRAFT` |
| ACTIVE | `e91108a` | `intake: sahely Layer 3 ADR-0090 perception-as-power-scope-condition-f4 — ACTIVE` |

Spore HEAD: `e91108a` (baseline at session start: `d726181`). **NOT pushed** — held at operator-confirm-at-push gate.

## Atomic-bundle (exactly 2 files; `git diff --name-only HEAD~2..HEAD`)

1. `docs/research/canon-decisions/0090-perception-as-power-scope-condition-f4.md` — NEW decision-record (no `shared_framing:` field)
2. `docs/foundations/representation-authority.md` — MODIFY: new end-of-§5 subsection "Perception-as-Power Substrate-Strengthening (per ADR-0090 scope-condition)"

## Codex R1 (pre-execution)

- Lint: **0 FAIL / 0 WARN** (second consecutive clean R1; canonical-heading preemption held)
- STATUS: NOT READY → 4 open questions, **all mechanical-class** (Q1 Option-A-lock; Q2 Codex-timing; Q3 validator-tolerance; Q4 reset--hard-safety); resolved in-plan (no substantive design items)
- Path (a) proceed-to-execution per X5 known-ceiling; R2 skipped per known-ceiling discipline

## Acceptance criteria — 13/13 PASS

| AC | Result |
|----|--------|
| AC1 ADR-0090 frontmatter per template (`decision: edit`, `adr_number: "0090"`, r_claim_source = W2.3+W3.1+W4.2, related_adrs spore-local, concepts ⊆ v24, NO shared_framing) | PASS |
| AC2 F4 single subsection; "Five layers are in scope" preserved; §4.1–§4.5 + §5.1–§5.4 numbering intact; no §4.6/§5.5 | PASS |
| AC3 F4 frontmatter md5 == `21944df9e33b3db6c76e8868e5778def` byte-equal (Gate j) | PASS |
| AC4 concepts-p2p-wiki.yaml UNCHANGED (v24) | PASS (not in bundle) |
| AC5 NO canon-body edits (project-vision / governance-artifacts) | PASS (not in bundle) |
| AC6 NO framing-note; no frontmatter `shared_framing:` field (3 body-prose mentions only) | PASS |
| AC7 exactly 2 files in `HEAD~2..HEAD` | PASS |
| AC8 validator **9 errors / 237 warnings EXACT**; governed-docs 302 → 303 | PASS (237 held EXACT; +1 tolerance unused) |
| AC9 sibling SHAs frozen (IC d74f1d0 / PM 5e06cd0 / bregion 07ff973 / koi-proc ada5b9a0 / darren-wf 059129a; BKC zero-write) | PASS |
| AC10 ADR-0074 + F1 + F3 UNCHANGED (single-foundation-touch) | PASS (not in bundle) |
| AC11 citations grep-verified; bridge doc_ids resolve; related_adrs/r_claim_source spore-local; Sahely C19 + Galtung C-3 verbatim match source | PASS |
| AC12 DH-PM-1 NOT FIRED + ADR-0001 held-tension overlap documented (§Evidence + §Consequences) | PASS |
| AC13 2-commit ceremony (DRAFT → ACTIVE) | PASS |

## Gate verification (all 10 Step-0.5 gates)

- (a) cluster-counting honest: 3 FULL (Sahely-Perception / Galtung / Standpoint-epistemology) + Fricker PARTIAL (overlaps F8) + Foucault/Bourdieu PARTIAL (overlaps C1); scope-condition over slug DESPITE sufficient count (existing `epistemic-gap`+`external-witness` cover territory) — **2nd application of ADR-0089 precedent across a distinct foundation-doc**
- (b) UNION-citation: W2.3 + W3.1 + W4.2 verified present + verbatim
- (c) Item-6 yaml amendment: N/A (no yaml edit)
- (d) DH-PM-1 hard-pause: NOT FIRED (foundation-doctrine substrate layer)
- (e) Codex round budget: 2 substantive + 1 verification; **0-lint-FAIL R1 (2nd consecutive)**; R2 skipped per known-ceiling
- (f) committed-allowlist-strict + pre-commit HALT: exactly 2 files; AGENTS.md/CLAUDE.md/tmp NOT staged (verified both commits)
- (g) enumeration-target: "Five layers" + §4.1–§4.5 + §5.1–§5.4 preserved; cross-cutting subsection, no sixth layer
- (h) ADR frontmatter format: `spore.canon-decision.perception-as-power-scope-condition-f4` per ADR-0085/0088/0089 template
- (i / L5b) grep-verify-citations: all bridge doc_ids resolve; verbatim quotes match; foreign doc_ids body-prose-only
- (j) byte-equal-frontmatter: F4 lines 1–10 md5 byte-equal across both commits — **2nd foundation-doc application** (after X5 F9); validates target-file-type-agnostic across 2 distinct foundation-docs

## Canon-state delta

- Foundation docs: 14 (F4 extended, not added) — UNCHANGED count
- concepts yaml: **v24 UNCHANGED** (80 slugs / 23 derived / 4 doctrines / 7 patterns)
- 4-category canon-object-class inventory: PRESERVED
- Canon-rebuild arc: **39 → 40** (+ADR-0090)
- Bundle α: **6/6 COMPLETE**
- Validator: 9/237 EXACT held throughout
- No new framing-note; NO Wave-N+1 alignment

## Method-precedent contributions (for Bundle α retrospective)

1. **Scope-condition-chosen-over-slug-despite-sufficient-cluster-count — 2nd application across a distinct foundation-doc** (F4 perception-authority; after ADR-0089 F9 reserve-substrate) → repeatable disposition shape, not one-off.
2. **Gate (j) byte-equal-frontmatter — 2nd foundation-doc application** (F4 after F9) → target-file-type-agnostic across 2 distinct foundation-docs (+ ADR-doc at ADR-0088 = 3rd successive Gate-j application X4/X5/X6).
3. **Rollback-safety triad codified**: soft-reset Option-A recovery (X2) + 3-commit ADR-0076 fallback (X5 R1 Q1) + `reset --hard` prohibition in tracked-dirt environments (X6 R1 Q4).
4. **2nd consecutive 0-lint-FAIL Codex R1** + 4 mechanical-class open-questions resolved-in-plan (Codex-flags-operator-decision-gates persistence pattern).

## Parking (operator-elective post-Bundle-α)

- Single consolidated Bundle α retrospective (~19+ method-precedents across X1–X6)
- Wave-N+1 IC + PM `life-value-doctrine` alignment (ADR-0086 X2; ONLY Bundle α admission requiring Wave-N+1)
- IC-side REFERENCE alignment for perception-as-power (ADR-0090 ↔ IC observer-discipline) — trigger: IC operator opens cross-stream
- Phase 3 broader-cluster Sahely intake (~20-30 lighter-ceremony bridges)
- Pre-existing PyYAML L854 baseline-fragility (does NOT block; validator authoritative at 9/237)

## NOT pushed — awaiting operator-confirm-at-push gate

Per push posture (R2-Q2): push-after-active-commit with operator-confirm-at-push gate. `e91108a` held local pending operator authorization to push `d726181..e91108a` to origin/main.
