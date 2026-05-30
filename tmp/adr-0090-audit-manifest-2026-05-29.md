# ADR-0090 Step-0.5 Audit Manifest (2026-05-29)

**ADR**: ADR-0090 (Bundle α X6 — FINAL) — C13 R-Perception-as-power scope-condition substrate-strengthening to F4 representation-authority
**Plan**: `~/.claude/plans/adr-0090-perception-as-power-scope-condition-f4.md`
**Session role**: fresh ADR-X6 session per orchestrator dispatch 2026-05-29

---

## State baseline (Step 0)

| Item | Value | Status |
|------|-------|--------|
| Spore HEAD | `d726181` (`d72618115c8bedd3577e949808e5d12c567fe930`) | matches handoff baseline ✓ |
| Validator | 9 errors / 237 warnings | EXACT ✓ |
| Governed docs | 302 (→ 303 with ADR-0090) | ✓ |
| concepts yaml | v24 / frozen / 80 slugs / 23 derived / 4 doctrines / 7 patterns | UNCHANGED target ✓ |
| ADR-0090 file | does not exist | free ✓ |
| Date | 2026-05-29 | ✓ |
| Tracked-dirt | `M AGENTS.md` + `M CLAUDE.md` (pre-existing) | EXCLUDE per Gate f ✓ |

## Gate (j) byte-equal-frontmatter capture

- **Target**: F4 `docs/foundations/representation-authority.md`
- **Frontmatter byte-range**: lines 1–10 (opening `---` line 1 → closing `---` line 10)
- **md5 (lines 1–10)**: `21944df9e33b3db6c76e8868e5778def`
- Re-verify byte-equal at Step 5. `depends_on:` (project-vision / governance-artifacts / structural-legitimacy / sensor-oracle-governance) + `doc_id: spore.representation-authority` + `doc_kind: foundation` + `status: active` ALL preserved unchanged.
- **Second** Gate (j) foundation-doc application (after X5 F9 lines 1–11 md5 `d77ea06...`) → validates target-file-type-agnostic across 2 distinct foundation-docs.

## Categorical-correctness (Gate g) — F4 enumeration targets

- §Scope (line ~28): **"Five layers are in scope"** — MUST stay "Five"; no "Six".
- §4 "Doctrine Per Layer": §4.1 Text / §4.2 Graph / §4.3 Sensor / §4.4 Attestation / §4.5 Agent-Summary — five subsections; NO §4.6 (would imply a sixth representation layer, contradicting §Scope).
- §5 "Precedence Rule": §5.1 Default / §5.2 Context-Overrides / §5.3 Appeal-Protocol / §5.4 Held-Epistemic-Tension — four subsections; no renumber.
- The substrate-strengthening note is **cross-cutting** (qualifies §4.3/§4.4/§4.5 layer-eligibility + §5 precedence-assignment); it is NOT a sixth layer and NOT a §5.5 enumeration addition.

## Cluster-counting (Gate a) — honest math

| Cluster | Source | Status |
|---------|--------|--------|
| 1 — Sahely Perception-as-power | W2.3 C19 §2.5 (`spore.connection.sahely-architecture-of-viability`, pdf-p36) | FULL |
| 2 — Galtung structural + cultural violence | W3.1 C-3/C-8 (`spore.connection.sahely-toward-life-coherent-peace`) + W4.2 §III §3.2/§3.3 + C-2 (`spore.connection.sahely-life-value-manifesto`); PRIO 1959 / JPR 1964 institutional distinctness | FULL |
| 3 — Standpoint epistemology | Harding 1991 *Whose Science? Whose Knowledge?*; Haraway 1988 "Situated Knowledges"; Hartsock 1983 (DECISION-BRIEF §12.5-identified; no Sahely bridge-note source) | FULL |
| — Fricker epistemic-injustice | overlaps ADR-0081 F8 cluster | PARTIAL (not 4th) |
| — Foucault discursive-power / Bourdieu symbolic-violence | overlaps C1 post-Marxist cluster | PARTIAL (not 4th) |

**Operational-concern match**: STRONG (sensor-governance + representation-authority + voice-counting — "who is allowed to signal? which signals count? which forms of evidence recognized?").

**X5-shape question (3 FULL ≥ ≥2-cluster derived-glossary threshold)**: scope-condition disposition still correct because (i) operator ratified at §17.8; (ii) F4's existing `epistemic-gap` (ADR-0076) + `external-witness` (ADR-0081 F8) slugs already cover the perception-authority territory, and §4.3/§4.5 + §5.2 pluriversal-override + §5.4 held-tension + §4.5 asymmetry-acknowledgment already canonicalize the operational concern; (iii) the substrate ENRICHES F4 territory rather than introducing a new operational concern requiring new vocabulary. **SECOND application of ADR-0089's scope-condition-chosen-over-slug-despite-sufficient-cluster-count precedent** (validates repeatable shape). W2.3 §3/§4.6 self-anticipates: "may enrich `epistemic-gap` or `external-witness` slug semantics... new slug unlikely."

## UNION-citation substrate (Gate b) — 3 bridge notes verified present

- W2.3 `spore.connection.sahely-architecture-of-viability` — C19 §2.5 Perception verbatim; §4.6 Perception-as-power→F1+F4+F3 map ✓
- W3.1 `spore.connection.sahely-toward-life-coherent-peace` — C-3 Galtung canonical attribution; §4.2 wrong-level-diagnosis→F4 appeal-protocol map ✓
- W4.2 `spore.connection.sahely-life-value-manifesto` — §III §3.2 Doctrine of Just War as Cultural Violence + §3.3 Structural Violence; C-2 Galtung synthesis declaration ✓

## Slug-coverage verification

- `epistemic-gap` — yaml v17 (ADR-0076 F5) — present ✓
- `external-witness` — yaml v20 (ADR-0081 F8) — present ✓
- These are the F4-territory slugs whose semantics the substrate enriches; their existence grounds scope-condition-over-slug.

## Other gates

- **(c) Item-6 yaml amendment**: N/A — no yaml edit (scope-condition shape; X5 precedent).
- **(d) DH-PM-1 hard-pause**: expected NOT FIRED — F4 foundation-doctrine substrate layer; perception-as-power scope-condition does not engage PM matchmaking operational-pricing; PM Pre-alpha.
- **(e) Codex round budget**: 2 substantive + 1 verification; canonical-heading preemption → expect 0-lint-FAIL R1 (2nd consecutive after ADR-0089).
- **(f) committed-allowlist-strict**: exactly 2 files (ADR-0090 + F4); pre-commit HALT; no tmp/AGENTS.md/CLAUDE.md.
- **(h) ADR frontmatter format**: ADR-0085/0088/0089 confirmed `doc_id: spore.canon-decision.<slug>` / `doc_kind: decision-record` / `adr_number` / `decision: edit`. ADR-0090 → `spore.canon-decision.perception-as-power-scope-condition-f4`.
- **(i / L5b) grep-verify-citations**: at plan-review-time + draft-completion; Sahely C19 + Galtung C-3 verbatim; foreign doc_ids body-prose-only.

## Canon-state delta (target)

- yaml v24 → UNCHANGED; 4-category canon-object-class PRESERVED; foundation docs 14 (F4 extended, not added).
- Canon-rebuild arc: 39 → **40** (+ADR-0090).
- Bundle α: **6/6 complete** on ADR-0090 landing.
- NO new framing-note; NO Wave-N+1.

## Held-tension overlap check (Constraint 5c)

- ADR-0001 pluriversal-incommensurability: F4 §5.2 pluriversal-context-override + §Open-Questions "Pluriversal interpretation-authority across layers" already present. Perception-as-power substrate operates inside standpoint-epistemology / peace-research / critical-theory lineages and does NOT collapse the pluriversal held-tension. No structural foreclosure.
