---
doc_kind: decision-brief
adr: 0068
date: 2026-04-24
step: 1 (awaiting Step 2 operator ratification)
---

# ADR-0068 Federation-Encounter Composition-Pattern — Decision Brief

**Purpose**: Surface 7 decision axes per the session-prompt's §Section 7 scope. Each axis lists options, child recommendation with rationale, and ambiguity flag where present. No pre-baked verdicts — operator ratifies at Step 2.

**Context**: First Wave-2 pattern-library admission under ADR-0065 M4 framework. ADR-0068 shape sets the canonical template for the next two Wave-2 admissions (four-enabling-conditions → design-criteria-pattern; view-template → catalog-pattern).

**Audit reference**: `tmp/adr-0068-audit-manifest-2026-04-24.md` (α + β earning-test verdicts, instance-family independence audit, yaml + frontmatter + scope analysis).

**Earning-test verdicts (audit §3-4)**:
- **α-comp composition-articulability**: PASSES cleanly. Framing-note §3 articulates Signal + Joint-commitment + Intent + Evidence within bounded Field-conditions; spot-verified against PM match-events.
- **β-comp ≥3 independent instance-families**: PASSES at N=4 (BKC/Octo / PM / DW / Cross-federation). All 6 pair-wise independence checks pass under honest-rigor.
- **Trigger-gate authorization**: E-1 CLOSED (ADR-0065) + E-5 FIRED (ADR-0064). Either one sufficient per ADR-0055 §Trigger discipline.

---

## Axis A — Admission verdict

| Option | Description | Child assessment |
|--------|-------------|------------------|
| **A1** | **ADMIT** as composition-pattern (α PASS + β PASS) | ✅ **RECOMMENDED** |
| A2 | DECLINE — earning-test fails | Not supported by audit |
| A3 | SCOPE-CONDITION admission (narrow to subset of families) | Unnecessary; β passes at N=4 with margin |
| A4 | DEFER re-eval (triggers not ripe) | Unnecessary; E-1 + E-5 fired |

**Rationale (A1)**:
- α PASSES cleanly (composition fully articulated in ADR-0055 framing-note §3; spot-verified against PM).
- β PASSES with comfortable margin (N=4 > 3 floor; 6 pair-wise independence checks all clean).
- Triggers E-1 + E-5 have legitimately opened the admission cycle per ADR-0055 §Trigger discipline line 181-183.
- Parsimony-elegance dual discipline preserved: admission earned on its own merit (α + β), not admitted to "complete the framework".

**No ambiguity flag.**

---

## Axis B — Composition canonical shape

| Option | Description | Child assessment |
|--------|-------------|------------------|
| **B1** | **Framing-note verbatim**: Signal + Joint-commitment + Intent + Evidence within bounded Field-conditions per ADR-0055 §3 | ✅ **RECOMMENDED** |
| B2 | Refined composition (add/drop per audit) | Not warranted — audit §5 verifies all 5 composition elements fire in all 4 families |
| B3 | Sub-pattern decomposition (umbrella + 2-3 variants) | Not warranted — modality-variance across families is NOT shape-variance |

**Rationale (B1)**:
- Audit §5 fit-check: all 4 families instantiate all 5 composition elements. No family missing a primitive.
- Framing-note composition is operationally verified (not merely asserted). Modality-variance (in-person vs async, scheduled vs ad-hoc) is orthogonal to composition structure.
- B2 requires material audit-surfaced mismatch — none found.
- B3 would complicate admission + future sibling patterns. Single clean composition is simpler and correct.

**No ambiguity flag.**

---

## Axis C — Instance-family floor

| Option | Description | Child assessment |
|--------|-------------|------------------|
| **C1** | **N≥3 per ADR-0065 default** | ✅ **RECOMMENDED** (actual N=4) |
| C2 | Higher floor N≥4 with rationale | Over-tightens for first admission; sets unwelcome precedent for future sub-classes with thinner but legitimate evidence |
| C3 | Lower floor N≥2 with strong justification | Violates ADR-0065 §M4 line 179 floor |

**Rationale (C1)**:
- ADR-0065 §M4 composition-pattern explicitly names N≥3 floor. No reason to deviate on first admission.
- Actual N=4 > floor: comfortable margin; no edge-case defense needed.
- Higher floor (C2) would arbitrarily disqualify legitimate future candidates.
- Lower floor (C3) weakens earning-test discipline.

**No ambiguity flag.**

---

## Axis D — Pattern-doc authoring location + shape

| Option | Description | Child assessment |
|--------|-------------|------------------|
| **D1** | **New file `docs/patterns/federation-encounter.md`** following existing 5-pattern shape (Context → Problem → Forces → Pattern → Adopters → Related Patterns) | ✅ **RECOMMENDED** |
| D2 | Reuse framing-note (rename `canon-framing-encounter-as-composition.md` + elevate `doc_kind: connection → pattern`) | NOT RECOMMENDED — rename destroys framing-note as historical record of ADR-0055 disposition; `doc_kind` flip is non-standard |
| **D3** | **Split — framing-note preserved at `research/connections/`; new pattern-doc authored fresh at `docs/patterns/`** | ✅ **PAIRED WITH D1** (this is what D1 implies in practice) |

**Rationale (D1 + D3-spirit)**:
- Framing-note serves research-layer purpose (shared canonical framing for ADR-0055 disposition); pattern-doc serves adoption-layer purpose (coordination-recipe for implementers).
- Different audience + different length: framing-note is ~177 lines extensive-articulation; pattern-doc should be ~120-180 lines adoption-oriented.
- D2 would conflate two distinct doc-purposes + destroy ADR-0055 historical record coherence.
- Pattern-doc cross-references framing-note for deeper articulation (audit §11.4).

**No ambiguity flag.**

---

## Axis E — Graph edges (depends_on / concepts / relates_to / related_adrs)

| Option | Description | Child assessment |
|--------|-------------|------------------|
| **E1** | **`depends_on: [spore.governance-artifacts, spore.federation-protocol]` + `concepts: [federation-encounter, encounter, joint-commitment, governance-memory]` + `relates_to: [sibling patterns]` + body-prose composition-primitive refs** | ✅ **RECOMMENDED** |
| E2 | + doctrine anchor (ADR-0045 care-commoning) in `related_adrs:` | NOT RECOMMENDED — care-commoning not load-bearing for federation-encounter composition; doctrine-anchor inclusion risks scope-creep |
| E3 | + canon-object-class markers (ADR-0046 rule-level-stratification, ADR-0064 co-presence-mode) in `related_adrs:` | ✅ **RECOMMENDED** for body references but already in ADR frontmatter via related_adrs list per plan — NOT pattern-doc frontmatter |

**Rationale (E1)**:
- `depends_on: [governance-artifacts, federation-protocol]` matches existing `federated-knowledge-exchange.md` convention (both cite federation-protocol). Conservative + precedent-aligned.
- `concepts:` exercises Axis H1 required-going-forward + cross-refs glossary slug. 4 slugs: new (`federation-encounter`) + existing (`encounter` / `joint-commitment` / `governance-memory` — all load-bearing for composition articulation).
- `relates_to:` exercises Axis C3 optional field for **first operational use** in the pattern library. 3 sibling-patterns (`commitment-pooling`, `governance-memory`, `intent-publication`) are most-related; establishes template for Wave-3.
- E2 care-commoning inclusion: care-commoning is doctrine-layer orthogonal to composition-pattern; not load-bearing; cross-ref would be tenuous.
- E3 scope: ADR-0068 `related_adrs:` frontmatter includes ADR-0046 + ADR-0064 per plan §5.2 (structural-coupling documentation); that's appropriate. Pattern-doc frontmatter need not duplicate — keeps pattern-doc frontmatter clean.

**Ambiguity flag (LOW)**: `relates_to:` is first-operational-use. If operator prefers to defer typed-edge convention to a Wave-3 admission or dedicated infrastructure ADR, drop `relates_to:` from Axis E1 (body-prose Related Patterns section preserves the relationship).

---

## Axis F — Frozen-concepts yaml treatment

| Option | Description | Child assessment |
|--------|-------------|------------------|
| F1 | No change (v12 stays; admit pattern without new slug) | ❌ **VIOLATES ADR-0065 Axis H1** (required-going-forward) — not a legal option post-ADR-0065 |
| **F2** | **Bump v12 → v13 with new slug `federation-encounter`** | ✅ **RECOMMENDED** |
| F3 | Alternative slug name (`encounter-pattern` / `federation-encounter-pattern` / `federated-encounter`) | NOT RECOMMENDED — violates existing slug-without-suffix convention (governance-memory, commitment-pooling, etc.) |

**Rationale (F2)**:
- ADR-0065 Axis H1 mandates yaml slug registration at admission-ADR.
- `federation-encounter` distinguishes pattern-library layer from existing glossary-layer `encounter` slug (ADR-0055).
- Aligns with ADR-0055's own naming convention (*"federation-encounter pattern-library admission"*).
- No `-pattern` suffix per existing convention.

**Naming-note (informational, NOT a decision)**: the glossary `encounter` slug stays anchored by framing-note; the pattern `federation-encounter` slug is anchored by pattern-doc. No conflict.

**No ambiguity flag.**

---

## Axis G — Cross-ADR ratification shape

| Option | Description | Child assessment |
|--------|-------------|------------------|
| **G1** | **Standalone ADR-0068 admission**; ADR-0055 preserved verbatim on disk; cross-refs in ADR-0068 body only | ✅ **RECOMMENDED** |
| G2 | Bundled with ADR-0055 §Parking revision (update §Parking to reflect E-1 closed + E-5 fired + admission done) | NOT RECOMMENDED — amending ADR-0055 §Parking retrofits history; ADR-0055 records what was known on 2026-04-22 |
| G3 | Hybrid (ADR-0068 admission body-only; ADR-0055 read as-fired via cross-ref only) | Overlaps G1 — no meaningful distinction |

**Rationale (G1)**:
- ADR-0055's §Parking/§Maturation-triggers documents what was known at 2026-04-22. Retrofitting that history to reflect 2026-04-24 admission is structurally messy.
- Canon-legibility is already preserved via ADR-0068's own §Context explicitly cross-referencing ADR-0055 §Trigger discipline + ADR-0065 §Parking-lot.
- Precedent: ADR-0055 was authored post-ADR-0048 parking without retro-editing ADR-0048. Same discipline applies here.
- Commit-count stays at 2 (draft + active); adding an ADR-0055 edit would require 3 commits with inconsistent ordering or atomic-mega-commit with larger scope.

**No ambiguity flag.**

---

## Session-atomic projection

Per audit §12 + plan §Session-atomic projection:
- Steps 4-7.5 (inside window): **~310-390s** (4 allowlist paths; pattern-doc heaviest at ~200-280s).
- Budget: 2700s (45 min).
- Margin: substantial (87% unused if 390s actual).

Comparable ADRs:
- ADR-0067 enum-addition: 258s (similar surface; enum edit lighter than pattern-doc authoring).
- ADR-0066 reclassification + file rename: 307s.
- ADR-0065 spec-ADR (5 files + M4 framework): 524s.

ADR-0068 projection slots between ADR-0067 and ADR-0066 in complexity.

---

## Step 2 ratification shape (for operator)

Operator may ratify per-axis individually, OR use fast-path acceptance:

**Fast-path phrasing** (if operator accepts all child recommendations):
> *"accept child recommendations on A/B/C/D/E/F/G as per decision-brief 2026-04-24"*

**Per-axis dissent welcome**: any axis overridden below. Child stands ready to surface refined options on request.

**Flagged ambiguity for operator attention**:
- **Axis E1 LOW-ambiguity**: `relates_to:` typed-edge is first-operational-use across pattern library. Operator may prefer to defer typed-edge convention to a dedicated infrastructure ADR; in that case drop `relates_to:` from Axis E1 and keep body-prose Related Patterns section.

---

## Post-Step-2 execution authorization

Upon operator ratification at Step 2, child proceeds to:
- Step 3: `/review-plan` 2-round cap with known-ceiling accept
- Step 4: validator pre + HEAD captures + Constraint-10 recheck
- Step 5: canon edits (atomic-bundle draft commit)
- Step 6: validator post-draft
- Step 7 + 7.5: active-commit + verification
- Step 8: close-out manifest

Session-atomic window OPENS at Step 5. Closes at Step 7.5.

Parent-session handles Step 9 (CLAUDE.md + Session History update).

**Awaiting operator ratification on A/B/C/D/E/F/G. No Step 3+ execution until explicit approval.**
