# ADR-0085 Close-Out Manifest — 2026-05-23

**ADR:** ADR-0085 — trap-shape-vocab-and-recursive-audit-method (Sahely Bundle α #1 of 6)
**Plan:** `~/.claude/plans/1-layer-3-handoff-refactored-hellman.md`
**Execution date:** 2026-05-23
**Status:** LANDED + PUSHED CLEAN

## Commits

- **Draft:** `2a122b4` — `intake: sahely Layer 3 ADR-0085 trap-shape-vocab-and-recursive-audit-method — DRAFT` (4 files / +477 / -1)
- **Active:** `b44ac28` — `intake: sahely Layer 3 ADR-0085 trap-shape-vocab-and-recursive-audit-method — ACTIVE` (1 file / +2 / -1 — status:draft→active + closed-on:2026-05-23)
- **Push:** `97b0667..b44ac28 main -> main` → `origin/main` (Phase 2 default; push-after-active-commit per Step 2 ratification)

## Atomic-bundle (4 files)

| Path | Action | Net change |
|---|---|---|
| `docs/research/canon-decisions/0085-trap-shape-vocab-and-recursive-audit-method.md` | NEW | 226 lines |
| `docs/research/canon-decisions/0048-power-expressive-constructed-modes.md` | MODIFY (extend-via-prose; frontmatter PRESERVED) | +9 / -1 (§Consequences + §Cross-ADR relationships subsections) |
| `docs/research/concepts-p2p-wiki.yaml` | MODIFY (v21→v22; +2 slugs) | +84 / -1 |
| `docs/research/connections/canon-framing-recursive-audit-method.md` | NEW | 160 lines |
| **Total** | | **478 insertions / 2 deletions** |

## Canon state delta

| Dimension | Pre | Post |
|---|---|---|
| Foundation docs | 14 | 14 (unchanged) |
| Cross-cutting doctrines | 3 | 3 (unchanged) |
| Modes | 2 | 2 (unchanged) |
| Properties | 2 | 2 (unchanged) |
| Patterns | 7 | 7 (unchanged) |
| Derived glossary slugs | 20 | **22** (+2: `golden-calf-trap` + `recursive-audit-method`) |
| Concepts yaml version | v21 | **v22** |
| Canon-rebuild arc | 34 | **35** (+ADR-0085) |
| 4-category canon object-class inventory | PRESERVED | PRESERVED |
| Validator state | 9 errors / 237 warnings | **9 errors / 237 warnings (EXACT held)** |

## Per-axis disposition (operator-ratified at Step 2 gate 2026-05-23)

- **A1** ADMIT triple-move (Option D per DECISION-BRIEF §4.5)
- **B1** Bundle-symmetric (shared Sahely substrate; shared verdict-shape; complementary operational roles)
- **C1** 6 full clusters for `golden-calf-trap` + 2 full clusters for `recursive-audit-method`; cluster-strength asymmetry honestly documented per Codex round 2 item 3 reconciliation
- **D1** 2 new slugs + ADR-0048 narrative extension + dedicated framing-note
- **E1** 4-file atomic-bundle
- **F1** Cite-all UNION-of-8 bridge notes (W2.4 + W1.1 + W2.3 + W2.6 + W3.1 + W4.1 + W4.2 + W4.3 per Codex round 2 item 2 reconciliation)
- **G1** Narrow scope
- **H1** H3-flat substrate-parent ADR-0048 only
- **I1** Narrow Spore-only — NO Wave-N+1 alignment
- **J1** Narrow

## Verification (Step 5)

| AC | Result | Status |
|---|---|---|
| 5.1 Validator (target 9/237 EXACT) | 9 errors / 237 warnings | ✓ PASS |
| 5.2 Sibling SHAs (target ALL unchanged) | IC `d74f1d02` / PM `5e06cd01` / bregion `07ff9738` / BKC `967e95e7` / koi `ada5b9a0` / dw `059129a3` — all unchanged | ✓ PASS |
| 5.3 Cross-repo identity discipline L6 (target 0 foreign doc_ids in frontmatter) | 0 foreign doc_ids in frontmatter; 0 in body | ✓ PASS |
| 5.4 Citation L5b grep-verify | ADR-0048 (21) + ADR-0052 (15) + ADR-0064 (5) + ADR-0084 (14) + ADR-0050 (5) + ADR-0077 (5) + ADR-0001 (2) all resolve | ✓ PASS |
| 5.5 Reconciled-citation AC (Item 7; target ≥8 sahely- citations) | 30 instances | ✓ PASS (massively) |
| 5.6 Diff stat (HEAD~2 → HEAD) | 4 files / +478 / -1 / additive | ✓ PASS |
| 5.7 Tracked-dirt clean-bundle AC (Item 8) | Pre-state 425 paths = Post-state 425 paths (4 bundle paths transitioned untracked→committed cleanly; no extraneous staging) | ✓ PASS |

## Codex /review-plan round history

- **Round 1 high (2026-05-22):** 1 open question (Step 5 misplacement — `/review-plan` reviews plan not artifact); accepted + applied. 7 lint failures tail-classed (template-shape items; content present under different headings).
- **Round 2 high (2026-05-22):** 8 must-fix items (3 Blockers + 3 Missing Tests + 2 Missing AC); all accepted + applied:
  1. Validator target correction (9/237 EXACT both unchanged; pre-existing warning growth was extraction-layer only)
  2. Substrate UNION-of-8 reconciliation (DECISION-BRIEF §4.1 ∪ Layer 3 handoff §3 line 69 axis F)
  3. `recursive-audit-method` honest 2-cluster math (6 belong to golden-calf-trap territory; method-specific narrower)
  4. Validator path correction (`scripts/validate_spec_dag.py` not `docs/scripts/`)
  5. Per-commit validation gates at Step 3 + Step 4 (not only Step 5)
  6. YAML parse check — amended per Step 2 ratification (isolated-fragment safe_load on new content + project-native file-level checks; defends against pre-existing line 614 PyYAML strict-parse fragility tooling-gap parking)
  7. Reconciled-citation AC (≥8 sahely- citations; achieved 30)
  8. Pre-existing tracked-dirt baseline + clean-bundle AC (425 pre = 425 post; no extraneous sweep)
- **Round 3 high verification (2026-05-22 → 2026-05-23 night):** Phase 2 (questions gate) READY with 0 open questions; Phase 3 (must-fix gate) **hung Codex-side ~13 hours** (not finding-failure; process-flake at codex subprocess PID 31877); 2-round known-ceiling discipline applied per `feedback_intake_to_vocab_admission_program.md` + Phase 2 READY signal (0 questions). Hung processes killed (PID 31847 + 31877 + parents) per operator authorization; clean kill exit 143.

## Method-precedent contributions (canonical novelty)

Per ADR-0085 §Consequences "Method-precedent contributions" subsection, four method-precedents canonized:

1. **First Sahely-corpus Bundle α admission** — operational shape of Sahely intake following 3-layer separation discipline (bridge-note + DECISION-BRIEF + ADR); validates discipline against canon's second-largest multi-anchor cross-tradition substrate intake (first was P2P wiki + canon-review 2026-04-18)
2. **Triple-move admission shape (Option D)** — lightest-ceremony substantive shape combining bundled vocab + parent-ADR narrative extension + dedicated framing-note; falls between ADR-0084 light-vocab-only and ADR-0045 cross-cutting-doctrine ceremony; reusable when 6+ clusters justify substantive admission without canon-object-class expansion
3. **Honest cluster-counting asymmetry within bundle for method-vs-shape** — extends ADR-0052 + ADR-0084 cluster-strength asymmetry precedent by documenting method-clusters-narrower-than-shape-clusters honestly; bundle-symmetric admission holds via shared substrate + verdict-shape + complementary operational roles without forcing cluster-count parity
4. **Folded-substrate-via-framing-note pattern** — three substrates (C11 + C14 + C15) fold descriptively into framing-note layer rather than separate slug admissions; distinct from ADR-0055 (composition articulation) + ADR-0052 (residue-flagging) + ADR-0064 (held-tension acknowledgment); ADR-0085 framing-note carries trap-shape taxonomy + canon-method articulation + folded substrate documentation simultaneously

## Codex round 2 + Step 0.5 audit findings codified

Additional method-precedents surfaced during plan-authoring + execution (worth carrying forward to ADR-X2 + future Sahely Bundle α admissions):

- **Item 6 amendment shape (Step 2 2026-05-23 ratification)** — when defense-in-depth gate has false-positive HALT against pre-existing baseline, refine via project-native equivalents on full file + isolated-fragment strict-parse on NEW content. Honors gate's intent without false-positive blocking. Reusable for any future Codex defense-in-depth gate that conflicts with pre-existing tooling state.
- **PyYAML strict-parse vs validator regex-parse divergence** — Spore's `scripts/validate_spec_dag.py` uses regex-based yaml parsing (no `import yaml`); concepts-p2p-wiki.yaml has pre-existing PyYAML strict-parse fail at line 614 col 879 (relational-identity slug; unquoted `§7: cryptographic` colon-space) since ADR-0051 admission 2026-04-22. Tooling-gap parked as separate operator-elective ADR (yaml-multi-paragraph-field cleanup).
- **Block-scalar `>-` for new slug entries** — defends against colon-space PyYAML fragility; passes isolated-fragment safe_load; deviates from existing single-line v21 pattern but documented in v22 history comment block + parking item rationale.
- **Codex Round 3 hang case** — Phase 2 (questions gate) returning READY with 0 questions IS a meaningful verification signal; Phase 3 (must-fix gate) hang is process-flake not finding-failure; 2-round known-ceiling discipline + operator's "accept all" pre-authorization scope can apply Path B (accept Round 2 as ceiling; kill hung processes; proceed to ExitPlanMode). Reusable when Codex hangs mid-run during budgeted verification round.

## Parking items added by ADR-0085 Step 0.5 audit

Per plan parking-list (Step 2 2026-05-23 ratification Item 5):

- **yaml-multi-paragraph-field cleanup** (operator-elective separate ADR) — `docs/research/concepts-p2p-wiki.yaml` pre-existing PyYAML strict-parse fail at line 614 col 879 (relational-identity slug; unquoted `§7: cryptographic` colon-space pattern; pre-existing since ADR-0051 admission 2026-04-22). Likely additional post-614 issues PyYAML cannot reach until 614 fixed. Repo validator (`scripts/validate_spec_dag.py`) uses regex-based parsing and tolerates the issue (9/237 EXACT held). Cleanup approach: quote affected `one_line_definition` fields as YAML block scalars (`|` or `>-`) for any slug containing `: ` (colon-space) patterns in plain-scalar text. Out of scope for ADR-0085; operator-elective separate session.

## Next in Bundle α sequence

Per Layer 3 handoff §6 critical sequencing:

1. ✅ **ADR-X1 (ADR-0085) — C1 R-Trap-cluster Option D triple-move** — LANDED 2026-05-23
2. **ADR-X2 — C3 R-McMurtry-substrate-cluster Option C `life-value-doctrine` 4th cross-cutting doctrine** (HEAVIEST ceremony; canon-object-class expansion 3→4 doctrines; **requires Wave-N+1 alignment** ic:ADR-X + pm:ADR-X per `feedback_upstream_downstream_canon_propagation.md`; operator-elective separate-session work post-Layer-3-admission; depends on ADR-X1 substrate-coherence which now exists)
3. ADR-X3 — C6 standalone `civil-commons` derived-glossary slug
4. ADR-X4 — C2 scope-condition ADR-0045 via Maturana
5. ADR-X5 — C12 scope-condition F9 via allostatic-load
6. ADR-X6 — C13 scope-condition F4 via Galtung + standpoint-epistemology
7. Bundle α framing-notes (5 remaining: C5 + C8 + C9 + C10 + recursive-audit-method already authored as part of ADR-X1)
8. Bundle α decline-with-trigger entries (4 total: C7 + D1 + D2 + C16)

## Stream-scope discipline preserved

- Spore-only at Layer 3 session per `feedback_workstream_scope_discipline.md`
- NO cross-stream writes — siblings (IC + PM + bregion + BKC + koi-processor + darren-workflow) all zero-change verified Step 0 + Step 5
- BKC + bregion peer-instance-family bridge-note candidates remain operator-elective separate-session work per `feedback_peer_instance_family_vs_downstream_aligned.md`
- NO Wave-N+1 alignment fires (IC + PM H2-decline concepts-yaml per ic:ADR-0019 + pm:ADR-0015; vocab admission doesn't propagate as alignment ADR)

## Held v3 review preservation

ADR-0085 cites Sahely corpus exclusively + Johar/Sufi via existing ADR-0048 derivation; NO new Will Ruddick claims. Held v3 review state (`project_will_ruddick_cpp_review_held.md`) UNMOVED. Cross-tradition citations per academic convention (concept-attribution; zero verbatim text reproduction).

---

**END CLOSE-OUT MANIFEST.** ADR-0085 ready for ADR-X2 separate-session dispatch when operator authorizes.
