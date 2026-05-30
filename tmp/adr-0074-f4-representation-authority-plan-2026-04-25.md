# ADR-0074 F4 Representation-Authority — Plan

**Status**: DRAFT — awaiting operator ratification on 10-axis decision-brief
**Date**: 2026-04-25
**Type**: Decision-gated plan (Steps 0/0.5/1/2 outside execution window; Steps 3-7.5 inside window)
**Target repo**: spore (read-only for siblings)
**Execution-gate**: Step 2 handback — no Step 3+ without explicit operator approval via SendMessage
**Sandbox note**: intended path was `~/.claude/plans/adr-0074-f4-representation-authority.md` but sandbox denied; consolidated to `tmp/` per established fallback precedent.

---

## 1. Context + Background

F4 `representation-authority.md` is the **second Tier A Phase 4 foundation-doc admission** following F1 sensor-oracle-governance (ADR-0073, landed 2026-04-25). F1 established the Tier A template pattern (ADR + foundation doc + canon-review-protocol §1 registration + docs/README.md + optional concepts yaml) and explicitly reserved **inter-layer precedence** as F4 scope.

ADR-0041 (text-authoritative-representation, 2026-04-22) closed the text-vs-graph precedence question. Line 58 of that ADR explicitly opens Phase 4 work:

> Phase 4's representation-authority foundation doc (when authored) can build on this ADR as the text-vs-graph layer of a broader precedence hierarchy (text / graph / sensor / attestation).

F1 foundation doc lines 37 and 147 each defer inter-layer precedence to F4 by name. F1's §Consequences line 114 enumerates F4's scope verbatim: "inter-layer precedence (what wins when sensor-reading conflicts with text-authoritative canon, graph-projection, attestation-layer, or agent-summary)".

This plan:
- Proposes foundation-doc outline (F1 template inherited)
- Proposes ADR outline (ADR-0073 template inherited)
- Surfaces 10-axis decision-brief (A-J) with child-default recommendations
- Identifies layer inventory (5 layers: text / graph / sensor / attestation / agent-summary)
- Proposes precedence-shape resolution (D4 hybrid: default + context-overrides + appeal-protocol)
- Surfaces risks and ambiguities

**Authoritative prior-art**:
- `docs/research/canon-decisions/0041-text-authoritative-representation.md` — the text-vs-graph precedence ADR F4 extends
- `docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md` — F1 ADR template F4 inherits
- `docs/foundations/sensor-oracle-governance.md` — F1 foundation doc structure F4 mirrors
- `docs/research/canon-decisions/0042-dag-delete-structural-legitimacy-promote.md` — foundation-doc-via-ADR precedent
- `docs/foundations/structural-legitimacy.md` — ADR-0042 foundation-doc output; secondary reference
- `tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md` — Phase 4 scoping decisions; F4 as Tier A item 2
- `tmp/phase-4-scoping-audit-manifest-2026-04-25.md` — F4 deficit analysis + ADR-0041 substrate

---

## 2. Scope

### 2.1 In-scope

- Author `docs/foundations/representation-authority.md` (~200-250 lines under A1 default)
- Author `docs/research/canon-decisions/0074-representation-authority-foundation-doc-promotion.md` ADR
- Register foundation doc in `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list (alphabetical insertion)
- Register foundation doc in `docs/README.md` Foundations listing
- Optional: concepts yaml v15 → v16 (per E-axis; default E1 NO new slugs)

### 2.2 Out-of-scope

- Edits to ADR-0041 body (preserved under G1 EXTEND default)
- Edits to F1 foundation doc (F1 correctly defers inter-layer to F4; no F1 edits required)
- Edits to governance-artifacts-and-graph-projections.md §Dual Representation (ADR-0041 canon-body site; preserved)
- Cross-repo propagation (IC + PM read-only; post-F4 cross-repo alignment is a separate ADR if operator directs)
- Operator-ratification / historical-ADR / session-memory layers (meta-layers; not in-scope per I-axis default I1 NARROW)
- Response-to-mismatch doctrine (F5 actuator-logic scope)
- Failure-mode taxonomy (F6 failure-modes scope)
- Reproductive-Evidence subspecies (F1 sensor-oracle-governance §5 scope)

---

## 3. 10-Axis Decision-Brief

| Axis | Options | Child default | Rationale |
|------|---------|---------------|-----------|
| A | A1 Full-doctrine (~200-250 lines) / A2 Sketch-then-expand / A3 Principles-only | **A1 Full-doctrine** | Matches F1 precedent |
| B | B1 EXHAUSTIVE 5-layer / B2 NARROW 3-layer / B3 EXPANDED 6+ layer | **B1 EXHAUSTIVE (text / graph / sensor / attestation / agent-summary)** | Matches ADR-0073 line 114 enumeration; avoids underclaim (B2) and overclaim (B3) |
| C | C1 INHERIT rule-stack / C2 NO inheritance / C3 PARTIAL (contested-cases only) | **C1 INHERIT** | Matches F1 discipline + ADR-0046 line 225 permissive offer |
| D | D1 PRECEDENCE-ORDERED / D2 CONTEXT-DEPENDENT / D3 PROTOCOL-BASED / D4 HYBRID | **D4 HYBRID (default + context-overrides + appeal-protocol)** | Honest to fact-vs-intent distinction; matches F1 §4.5 multi-sensor-disagreement discipline; honors ADR-0041 as default for specification-text |
| E | E1 No new slugs / E2 Admit 1-2 slugs / E3 Deferred | **E1 No new slugs** | Matches F1 structural discipline (foundation-doc name itself not a slug; only ADR-forward-ref'd subspecies admitted) |
| F | F1 Full registration / F2 README-only / F3 None | **F1 Full registration** | ADR-0042 + F1 precedent |
| G | G1 EXTEND ADR-0041 / G2 COMPLETE (supersede ADR-0041) / G3 COMPLEMENT | **G1 EXTEND** | Matches ADR-0041:58 forward-ref verbatim; preserves ADR-0041 integrity; minimizes canon churn |
| H | H1 ADR-0041 + F1 only / H2 + adjacent ADRs (0043, 0044, 0046, 0049) / H3 + newer ADRs (0065, 0063) | **H2 + adjacent** | Matches F1 list for consistency; ADR-0063 sense-making-mode is load-bearing for agent-summary interpretation (light inclusion justified) |
| I | I1 NARROW (AI-summary = post-hoc) / I2 MEDIUM (+ canonical-AI-interpretations) / I3 WIDE (+ session-memory) | **I1 NARROW** | Avoids canon-object-class inflation; defers wider issues to F8 external-validation-loop |
| J | J1 NARROW (F4 only) / J2 NARROW-WIDE (if Step 0.5 audit surfaces drift) | **J1 NARROW** | Step 0.5 audit surfaced no additional canon drift |

---

## 4. Allowlist (under child-defaults)

5 files in atomic-bundle draft commit:

1. **`docs/research/canon-decisions/0074-representation-authority-foundation-doc-promotion.md`** — NEW ADR (~140-160 lines)
2. **`docs/foundations/representation-authority.md`** — NEW foundation doc (~200-250 lines)
3. **`docs/research/planning/canon-review-protocol.md`** — §1 Spore canon-in-scope list: insert `- docs/foundations/representation-authority.md` alphabetically
4. **`docs/README.md`** — Foundations listing: insert new line for representation-authority foundation doc
5. **`docs/research/concepts-p2p-wiki.yaml`** — NO change under E1 default; listed only if E2 ratified (v15 → v16 if admitted)

---

## 5. Proposed foundation-doc outline

### 5.1 Frontmatter

```yaml
---
doc_id: spore.representation-authority
doc_kind: foundation
status: draft
depends_on:
  - spore.project-vision
  - spore.governance-artifacts
  - spore.structural-legitimacy
  - spore.sensor-oracle-governance
---
```

`status` flips draft → active during active commit.

### 5.2 Body structure

1. **Untitled intro paragraph** (~3-5 lines): names representation-authority as the inter-layer precedence doctrine; frames as extension of ADR-0041 across the 5 canon representation layers.
2. **Core Claim** (~15 lines): inter-layer precedence operationalizes direction-of-derivation across all canon representation layers; without explicit precedence, inter-layer conflicts become hidden authority conflicts (the same defect ADR-0041 closed at text-vs-graph layer). Canon cannot let authority-conflicts be implicit.
3. **Scope** (~20 lines): 5 layers in-scope (text / graph / sensor / attestation / agent-summary); out-of-scope (intra-modality → F1; response-to-mismatch → F5; failure-modes → F6; meta-layers like operator-ratification / historical-ADR / session-memory / claude-mem → F8 or meta-canon machinery); three-modality abstraction note retained from F1 template.
4. **Structural Doctrine — Rule-Level Stratification** (~30 lines): 3 Ostrom rule-levels applied to "who decides precedence?" at constitutional / collective-choice / operational. Parallel F1 §3 structure.
5. **Doctrine Per Layer** (~100-120 lines, 5 subsections §4.1–§4.5):
   - §4.1 **Text-authoritative canon** — ADR-0041 preserved verbatim; text authoritative for specification-text; the authoring surface
   - §4.2 **Graph-derived canon** — derived from text via tooling (ingest_spec_dag.py); no independent authority; regenerates from text per ADR-0041
   - §4.3 **Sensor readings** — grounded in phenomenon; F1 intra-modality governance applies WITHIN layer; this subsection names inter-layer authority-claim
   - §4.4 **Attestation** — grounded in human judgment; F1 intra-modality governance applies; inter-layer authority treated here
   - §4.5 **Agent-summary** — derived from inputs via agent process; F1 intra-modality governance applies; explicit acknowledgment of AI-summary-authority-decay and model-lifecycle-coupling asymmetry (per F1 §6 Open Questions)
   - Each subsection: principle statement + rule-level decomposition + inter-layer-conflict treatment
6. **Precedence Rule — Default, Context-Overrides, Appeal-Protocol** (~40 lines, the D4 hybrid doctrine):
   - **Default for specification-text** (text-about-what-should-be): text-authoritative per ADR-0041; graph derives; sensor/attestation read (not authoritative for the specification itself); agent-summary derives from canon + cited sources
   - **Default for fact-reporting-text** (text-about-what-is, where the text is a report of sensed/attested state): sensor/attestation authoritative where available; text is a derived record; agent-summary derives
   - **Context-overrides**: domain-specific precedence can override defaults; e.g., commitment-pool balance (sensor > text even if text declares a different balance); pluriversal-context (held-tension per ADR-0001; no single layer wins; explicit non-resolution is canon-legible); reproduction-continuity Evidence (longitudinal-attestation vs single-reading governed by F1 §5)
   - **Appeal-protocol**: when default and context-overrides produce ambiguity, route through rule-stack (operational-rule resolves routine; collective-choice-rule escalates; constitutional-rule resolves contestation about the precedence-regime itself)
   - **Unresolved inter-layer disagreement as held-epistemic-tension**: per F1 §4.5 discipline and ADR-0001 held-tension pattern, some inter-layer disagreements are canon-legibly held rather than force-resolved
7. **Open Questions** (~20 lines):
   - Pluriversal interpretation-authority across layers
   - AI-summary-authority-decay and model-lifecycle coupling
   - Cross-modality oracle composition precedence
   - Federated precedence across overlapping federations
   - Revision-triggers under which the precedence doctrine may need updating as operational evidence base matures
   - Phase 5 section-level status labels (tag-agnostic pending sweep)
8. **Related** (~10 lines): project-vision / governance-artifacts-and-graph-projections / structural-legitimacy / sensor-oracle-governance (F1) / ADR-0041 (primary anchor) / ADR-0042 (precedent) / ADR-0044 (Evidence verb) / ADR-0046 (rule-stack) / ADR-0049 (Reproduction-continuity) / ADR-0063 (sense-making-mode, relevant for agent-summary-derivation) / ADR-0073 (F1 ADR)

---

## 6. Proposed ADR outline

### 6.1 Frontmatter

```yaml
---
doc_id: spore.canon-decision.representation-authority-foundation-doc-promotion
doc_kind: decision-record
status: draft
adr_number: "0074"
opened-on: 2026-04-25
closed-on: 2026-04-25
decision: edit
r_claim_source:
  - spore.review.canon-first-principles-audit-v2-2026-04-22:3.3-item-3
  - spore.review.canon-first-principles-audit-v2-2026-04-22:6.4-item-4
r_claim_statement: |
  ADR-0041 (text-authoritative-representation) closed text-vs-graph precedence as canon doctrine, and line 58 explicitly opens F4 as Phase 4 foundation-doc work that extends the text-vs-graph layer into a broader precedence hierarchy (text / graph / sensor / attestation). F1 sensor-oracle-governance (ADR-0073) reserved inter-layer precedence for F4 at §Consequences line 114. Audit-v2 §3.3 item 3 + §6.4 item 4 identified representation-authority as PARTIAL deficit (ADR-0041 covers 2 of 5 layers; remaining 3 — sensor/attestation/agent-summary — uncovered). Decision: admit new foundation doc at docs/foundations/representation-authority.md carrying D4 HYBRID precedence doctrine (default + context-overrides + appeal-protocol) across 5 layers, inheriting ADR-0046 rule-stratification + ADR-0041 text-authoritative default, preserving F1 intra-modality scope, acknowledging AI-summary-authority-decay asymmetry per F1 §6 precedent.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-scoping-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0074-f4-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0074-f4-decision-brief-2026-04-25.md
  - docs/research/canon-decisions/0041-text-authoritative-representation.md
  - docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md
  - docs/foundations/sensor-oracle-governance.md
  - docs/foundations/governance-artifacts-and-graph-projections.md
authorized-by: "canon-rebuild-phase-4-tier-a operator directive 2026-04-25 (second Tier A admission; 10-axis decision-brief child-defaults ratified A1/B1/C1/D4/E1/F1/G1/H2/I1/J1)"
queue_reference: "canon-first-principles-audit-v2-2026-04-22 §3.3 item 3 + §6.4 item 4 (representation-authority — Codex primary + Opus-4-7 concurs via ADR-0041 substrate)"
affects_canon:
  - docs/foundations/representation-authority.md
  - docs/research/planning/canon-review-protocol.md
  - docs/README.md
related_adrs:
  - spore:ADR-0041-text-authoritative-representation
  - spore:ADR-0042-dag-delete-structural-legitimacy-promote
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0046-field-rule-level-stratification
  - spore:ADR-0049-reproduction-continuity-primitive-admission
  - spore:ADR-0063-participatory-sense-making-disposition
  - spore:ADR-0073-sensor-oracle-governance-foundation-doc-promotion
concepts:
  - coordination-substrate
  - governance-memory
  - memory-governance
---
```

### 6.2 Body structure

- **Status**: active (post draft→active flip)
- **Context**: ~25 lines; ADR-0041 closed text-vs-graph; F1 reserved inter-layer for F4; audit-v2 forward-refs; ADR-0073 template inherited
- **Decision**: ~35 lines; 4-part atomic-bundle under E1 default (5-part if E2 ratified with yaml slug admission); per-part explanation
- **Consequences**: ~40 lines; canon-state impact (foundation docs 8 → 9 not counting lexicon; canon-rebuild arc 25 → 26); Method-precedents (3-4 new)
- **Method-precedents**: 3-4 new canon-method precedents expected:
  1. Second Tier A foundation-doc admission — validates F1 template as reusable (not one-off)
  2. Inter-layer precedence doctrine via hybrid (D4) default + context-overrides + appeal-protocol — reusable for any future canon-object with multiple representation-surfaces
  3. ADR-0041 EXTEND-via-new-foundation-doc pattern (G1) — matches forward-ref line 58 verbatim; reusable when prior ADR explicitly opens future foundation-doc work
  4. Fact-vs-specification text-type distinction as load-bearing — ADR-0041 text-authoritative default preserves for specification-text; sensor/attestation authoritative for fact-reporting-text. This is a new principled-rule for the canon; may surface in future ADRs
- **Evidence**: ~15 lines; 2-lens convergence (Codex + Opus-4-7); 2 forward-referencing ADRs (0041, 0073); held-tension check (ADR-0001 pluriversal flagged in Open Questions, not blocking)
- **Diff summary**: ~15 lines; 4-file allowlist per §4 of this plan (5-file if E2)

---

## 7. Execution plan (Steps 3-7.5; CONTINGENT on operator ratification)

### Step 3: Preflight re-verify (30s)
- Re-read `git status` (spore) + `git rev-parse HEAD` for all 5 repos
- Confirm HEADs match Step 0 baseline
- Confirm no drift

### Step 4: Allowlisted edits (10-15 min)
- Create 2 new files (ADR + foundation doc) under `draft` status
- Edit 2 existing canon files (canon-review-protocol.md + docs/README.md) per §4
- Edit concepts yaml ONLY if E2 ratified
- Explicit-path staging (never git add -A)

### Step 5: Validator + ACs (1-2 min)
- Run `python3 scripts/validate_spec_dag.py` — expect 9 errors / 30 warnings held exact
- Verify 14-16 ACs pass per planned AC list

### Step 6: Draft commit (30s)
- `git commit -m "draft: F4 representation-authority foundation-doc admission (ADR-0074)..."` with allowlisted files

### Step 7: Flip draft→active (1-2 min)
- Update ADR status: draft → active
- Update foundation-doc status: draft → active
- Update closed-on date if needed

### Step 7.5: Active commit + verification (30s)
- `git commit -m "canon: activate ADR-0074 representation-authority foundation-doc..."` with allowlisted files
- Final validator check (expect 9/30 hold)
- Capture verification manifest at `tmp/adr-0074-f4-verification-manifest-2026-04-25.md`

**Total execution window**: 15-22 min (matches F1 pace with template inheritance acceleration)
**Budget**: 2700s (45 min) hard ceiling per decision-gated plan discipline

---

## 8. Acceptance criteria

- AC1: ADR-0074 authored with full frontmatter + 6 body sections per §6
- AC2: Foundation doc authored with 8 body sections per §5.2
- AC3: canon-review-protocol.md §1 registration inserted alphabetically
- AC4: docs/README.md Foundations listing updated
- AC5: Concepts yaml unchanged under E1 default (or v15 → v16 under E2)
- AC6: Validator held exact at 9/30 pre-and-post
- AC7: Spore HEAD advances by 2 commits (draft + active); IC + PM zero-change verified
- AC8: All 5 layers explicitly named (text / graph / sensor / attestation / agent-summary) in foundation doc §Scope + §4 (Doctrine Per Layer)
- AC9: D4 HYBRID doctrine (default + context-overrides + appeal-protocol) explicitly articulated in foundation doc §5
- AC10: ADR-0041 body unchanged (G1 EXTEND preserved)
- AC11: F1 foundation doc unchanged (F1 correctly defers; no edits required)
- AC12: Rule-stack inheritance explicit (C1 INHERIT with §3 structure)
- AC13: Open Questions acknowledges pluriversal interpretation-authority + AI-summary-authority-decay + cross-modality composition + federated precedence
- AC14: Related section cross-refs all 7 prior ADRs per H2 list
- AC15: No edits to governance-artifacts-and-graph-projections.md (J1 NARROW)
- AC16: Atomic-bundle discipline preserved (draft commit followed by active commit; no intermediate pushes)

---

## 9. Risks + mitigations

| # | Risk | Mitigation |
|---|------|------------|
| R1 | Precedence-shape over-claim (static D1 vs hybrid D4) | Honest-rigor audit surfaced in §3 decision-brief; operator ratifies |
| R2 | ADR-0041 supersession-vs-extension ambiguity | G1 EXTEND default per ADR-0041:58 forward-ref; preserved as canon doctrine |
| R3 | Agent-summary scope over-specification | I1 NARROW default; post-hoc description only; defer wider to F8 |
| R4 | Rule-stack inheritance as boilerplate-without-content | C1 INHERIT with structured mapping to precedence-authority questions (who sets / contests / applies at each level) |
| R5 | Session-atomic budget overrun | 2700s hard ceiling; fallback to session-atomic re-plan if budget exceeded |
| R6 | Scope expansion to edit governance-artifacts-and-graph-projections.md §Dual Representation | J1 NARROW explicitly prohibits; audit confirmed no drift |
| R7 | AI-summary layer conflates with session-memory / claude-mem | I1 NARROW scope explicitly; F4 §4.5 names this boundary |
| R8 | Fact-vs-specification distinction under-articulated | Dedicated principled-rule in §5 Default; explicitly load-bearing |
| R9 | Pluriversal held-tension blocks admission | ADR-0001 overlap checked at audit; no block; flagged in Open Questions |
| R10 | Revision-triggers under-articulated (F4 doctrine based on thin operational evidence) | Explicit acknowledgment in Open Questions; revision-trigger scheme per ADR-0054 precedent |

---

## 10. Next steps

**This plan advances to 2-round `/review-plan` with known-ceiling discipline** (per canon-review-protocol feedback-memory discipline from ADR-0065 / ADR-0068 / ADR-0070 precedent). Expected: round 1 surfaces 6-8 questions; round 2 surfaces 3-5 with resolution of round-1 items; accept known-ceiling at round 2+.

**If ratified + reviewed**: handback to operator with final 10-axis decision-brief + plan for Step 2 ratification. Ratification unlocks Step 3+ execution per §7.

**If operator modifies defaults**: plan re-drafts the specific axes; re-run `/review-plan` on the modified plan.

---

## 11. Deliverables

- `tmp/adr-0074-f4-preflight-manifest-2026-04-25.txt` (Step 0) — DONE
- `tmp/adr-0074-f4-audit-manifest-2026-04-25.md` (Step 0.5) — DONE
- `tmp/adr-0074-f4-representation-authority-plan-2026-04-25.md` (this plan; Step 1) — DONE
- `tmp/adr-0074-f4-decision-brief-2026-04-25.md` (Step 1 decision-brief) — NEXT

**If operator ratifies**:
- `docs/research/canon-decisions/0074-representation-authority-foundation-doc-promotion.md` (new ADR)
- `docs/foundations/representation-authority.md` (new foundation doc)
- `docs/research/planning/canon-review-protocol.md` (§1 insertion)
- `docs/README.md` (Foundations listing insertion)
- `docs/research/concepts-p2p-wiki.yaml` (only if E2 ratified)
- `tmp/adr-0074-f4-verification-manifest-2026-04-25.md` (Step 7.5 close-out)

---

**End plan.**
