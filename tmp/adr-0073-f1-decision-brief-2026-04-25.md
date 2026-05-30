# ADR-0073 F1 sensor-oracle-governance — Step 1 Decision-Brief

**Date**: 2026-04-25
**Status**: DRAFT — awaiting operator Step 2 ratification on 10 axes
**Plan**: `tmp/adr-0073-f1-sensor-oracle-governance-plan-2026-04-25.md`
**Audit**: `tmp/adr-0073-f1-audit-manifest-2026-04-25.md`
**Precedent shape**: ADR-0042 dag-delete + structural-legitimacy-promote

---

## 1. Ten-axis decision-brief

### Axis A — Foundation-doc shape

| Option | Shape | Child recommendation |
|--------|-------|---------------------|
| A1 | Full-doctrine doc (comprehensive; 150-300 lines) — Core Claim + Scope + Structural Doctrine + 7 per-concern sections + 3-modality abstraction + Open Questions + Related | **A1** — F1 is pattern-setting (first Tier A); under-scoping the template risks weak Tier B inheritance. Matches Phase 4 scoping plan's E1-ADR-per-doc expectation. |
| A2 | Sketch-then-expand (stub doc with core commitments; 60-100 lines; expand later) | Possible fallback if operator prefers speed-over-template-depth; trades future-expansion-ADR cost for session-atomic compression |
| A3 | Principles-only (100-150 lines; defers operational specifics to future ADRs) | Viable middle-ground; matches structural-legitimacy.md shape; slightly under-weight for F1's 7-concern scope |

**Recommendation: A1** (full-doctrine). Template-value justifies the depth. Foundation-doc shouldn't be so thin that F4/F5/F6 authors have to re-invent structure.

---

### Axis B — Three-modality treatment (operator-ratified FULL scope)

| Option | Treatment | Child recommendation |
|--------|-----------|---------------------|
| B1 | SINGLE unified doctrine covering all three modalities via principled-rule abstraction (like ADR-0062 Membrane production-mode scope-conditioning) | **B1** — preserves foundation-layer generality; modality-specific operational rules belong to F4/F5/pattern layer |
| B2 | Three sub-sections within one doc (§Machine Sensors / §Human Attestation / §AI-Summary) | Tempting but risks fragmenting the doctrine; signals "3 separate doctrines in 1 file" rather than "1 doctrine covering 3 modalities" |
| B3 | Modality-parameterized (abstract doctrine with per-modality parameter tables) | Over-engineered for foundation layer; table-heavy specification belongs to pattern/protocol layer |

**Recommendation: B1** unified. Use language like "a sensor — whether instrumented device, human attester, or AI-summary process — is governed by..." to make the abstraction visible without parameterizing.

Where modality-specific nuance matters (e.g., absent-evidence semantics differ genuinely), use principled-rule enumerated examples (ADR-0062/0063/0064 pattern: "For continuity-constituted phenomena [example: water-quality monitoring; longitudinal attester tenure; daily-agent-summary stream], absent sensor-reading ≠ absent phenomenon. For event-constituted phenomena [example: pool-settlement tx-emission; witness sworn to a specific event; agent-summary of a meeting], absent sensor-reading = undecided.").

---

### Axis C — Ostrom 3-level rule-stack inheritance (per ADR-0046)

| Option | Inheritance | Child recommendation |
|--------|-------------|---------------------|
| C1 | INHERIT full rule-level stratification (operational / collective-choice / constitutional) applied across all 7 concerns | **C1** — structurally elegant; each concern has natural rule-level decomposition; sets reusable template for F2/F3/F4/F5/F6 Phase 4 admissions |
| C2 | NO inheritance — flat 7-concern enumeration | Simpler; but risks cross-phase inconsistency when F2/F3 also face rule-level choice; loses template value |
| C3 | PARTIAL — rule-stack only on interpretation-authority (concern 6) and contestation (concerns 4-5) | Pragmatic compromise; reserves structure for where it's load-bearing; flags acceptance of structural asymmetry within F1 |

**Recommendation: C1** INHERIT. Rule-stack decomposition gives the 7 concerns structural clarity AND provides template-reuse for 8 downstream foundation docs. ~30-50 added lines justify the depth.

Concrete mapping:
- **Constitutional rule** layer: who has standing to propose or challenge sensor assignments; what instance-membership requires to participate in sensor-governance
- **Collective-choice rule** layer: how sensor-selection / maintainer-assignment / interpretation-authority / multi-sensor-disagreement-resolution is decided by those with standing
- **Operational rule** layer: day-to-day sensor calibration / proxy-contestation adjudication / absent-evidence handling / routine data-capture

---

### Axis D — Slug admissions (concepts yaml)

| Option | Admission | Child recommendation |
|--------|-----------|---------------------|
| D1 | No new slugs (yaml v14 preserved) | Simplest; but ADR-0049 forward-ref explicitly names "longitudinal-attestation" and "replication-regime" as canon-expected subspecies — leaving them unnamed reduces F1's ability to satisfy ADR-0049 promise |
| D2 | Admit 2 derived slugs: `longitudinal-attestation` + `replication-regime` (both per ADR-0049 §179 direct naming). yaml v14→v15 | **D2** — narrow admission; honors ADR-0049 forward-ref; keeps canon object-class inventory unchanged (derived glossary slugs category, 6→8); matches ADR-0053 glossary-bundle precedent at the slug layer |
| D3 | Defer all slug admissions to a future glossary-bundle ADR (the sensor/oracle/etc. vocabulary may earn yaml entries later) | Viable fallback; matches ADR-0061 decline-inline-prose-only shape; but leaves ADR-0049 forward-ref slightly under-satisfied |

**Recommendation: D2** (narrow admission: 2 slugs). If operator prefers D3, note that foundation-doc prose can still *name* longitudinal-attestation and replication-regime in body text even without slug-registration; the slug layer formalizes canon-legibility but is not strictly required.

---

### Axis E — Registration shape (matches ADR-0042 precedent)

| Option | Registration | Child recommendation |
|--------|--------------|---------------------|
| E1 | Full registration: docs/README.md + canon-review-protocol §1 + (conditional) concepts yaml | **E1** — ADR-0042 precedent; prevents orphan-doc risk; minimal ceremony for substantial canon-coverage |
| E2 | Minimal registration: docs/README.md only | Saves canon-review-protocol §1 edit; but breaks ADR-0042 template; future corpus-review wouldn't see F1 in §1 Spore-in-scope list |
| E3 | No registration (foundation doc stands alone) | Orphan-risk; breaks template; not recommended |

**Recommendation: E1** full registration.

---

### Axis F — Cross-reference to forward-referencing ADRs (0043/0044/0046/0049)

| Option | Citation | Child recommendation |
|--------|----------|---------------------|
| F1 | Cite all 4 in ADR-0073 §Related_adrs + foundation-doc §Related | Honors all forward-refs; transparent |
| F2 | Cite only ones with concrete dependencies (0044 required + 0049 soft-required; 0046 permissive; 0043 only implicit-naming-consistency) | Lean approach; skips ADR-0046 + ADR-0043 from foundation-doc §Related |
| F3 | Cite all 4 + back-annotate those ADRs to reference F1 (edit lines 87/168/225/179 from "Phase 4 (future): ..." to "Phase 4 (landed at ADR-0073): ...") | Heaviest; preserves hyperlink-integrity; but adds 4-file edit scope |

**Recommendation: F1** cite-all. Back-annotation (F3) is template-creep; forward-ref ADRs are historical records, not live-updated docs. Readers who land on ADR-0044 line 168 and search "Phase 4" can trace forward by searching ADR-0073 in turn.

---

### Axis G — Contestation-and-disagreement framing

| Option | Framing | Child recommendation |
|--------|---------|---------------------|
| G1 | Algorithm-based (voting thresholds, weighted multi-sensor aggregation) | Premature for foundation layer |
| G2 | Protocol-based (appeal paths routed through Ostrom 3-level rule-stack) | **G2** when C1 is chosen; matches structural-legitimacy style |
| G3 | Both (default algorithm + protocol for appeals) | Over-specification |
| G4 | Principles-only (state principles; defer mechanism to pattern/protocol layer) | Safer fallback when C1 is not chosen |

**Recommendation: G2 Protocol-based** (under C1 rule-stack inheritance). Key principles:
- Proxy contestation is an operational-rule action invoking collective-choice-rule appeal
- Multi-sensor disagreement is resolved at operational-rule layer by protocol; escalation to collective-choice-rule if protocol fails
- Constitutional-rule layer governs who has standing to contest at all

---

### Axis H — Absent-evidence handling

| Option | Semantics | Child recommendation |
|--------|-----------|---------------------|
| H1 | Presumption of negative (no evidence = no event) | Too rigid; fails reproduction-continuity case |
| H2 | Presumption of positive (state continues) | Too rigid; fails event-constituted cases |
| H3 | Contextual (depends on sensed-phenomenon, with principled-rule distinguishing continuity-constituted vs event-constituted) | **H3** — load-bearing for ADR-0049 longitudinal-attestation Evidence subspecies |
| H4 | Protocol-dependent (each instance specifies) | Viable but pushes decision down-stack; foundation-layer owes at least the principle |

**Recommendation: H3** Contextual with named principled-rule:
- Continuity-constituted phenomena (water quality, ecosystem health, long-duration relationships, ongoing commitment-pool state): **absent sensor-reading ≠ absent phenomenon**. Default is state-persistence. Persistent absence itself becomes contestable evidence that the governance regime has decayed.
- Event-constituted phenomena (pool-settlement emission, witness-attested event, meeting-attendance): **absent sensor-reading = undecided**. Default is epistemic-gap; no imputation. Governance regime sets escalation protocol (retry / substitute sensor / defer decision).

---

### Axis I — Phase 5 tag-agnostic interaction (operator-ratified)

| Option | Stance | Child recommendation |
|--------|--------|---------------------|
| I1 | EXPLICITLY design independent of tag-status (per operator ratification) | **I1** — operator-ratified; no pre-tagging of sections |
| I2 | Tag-aware (rejected by operator) | — |
| I3 | Mark Phase 5 interaction as parking item in §Related or §Open Questions | Optional complement to I1; operator preference |

**Recommendation: I1** with optional I3-style mention in Open Questions ("section-level status labeling is Phase 5 concern; this foundation doc is deliberately tag-agnostic"). Keeps the doc forward-compatible without over-specifying now.

---

### Axis J — Global-coherence scope

| Option | Scope | Child recommendation |
|--------|-------|---------------------|
| J1 | NARROW (F1 only; don't touch anything outside allowlist) | **J1** — honest-rigor narrow; no F1-drift touches surfaced at Step 0.5 that would warrant widening |
| J2 | NARROW-WIDE (include evidence-based corrective edits to governance-artifacts-and-graph-projections.md:134-143 §Grounding Through Sensors — e.g., remove residual intent-pressure prose per ADR-0056) | Possible but scope-creep; ADR-0056 already demoted intent-pressure; the §Grounding Through Sensors paragraph's intent-pressure language is a known-cascade-miss not in ADR-0059 scope. Safer as separate follow-on. |

**Recommendation: J1** NARROW. If §Grounding Through Sensors needs tightening, do it as a follow-on ADR or add to the ADR-0059b commons-law parking queue.

---

## 2. Proposed foundation-doc outline (Axis A1 + B1 + C1 + G2 + H3)

`docs/foundations/sensor-oracle-governance.md`

### Frontmatter
```yaml
doc_id: spore.sensor-oracle-governance
doc_kind: foundation
status: active
depends_on:
  - spore.project-vision
  - spore.governance-artifacts
  - spore.structural-legitimacy
```

### Body (target ~200-250 lines)

**§ Header** — `# Sensor and Oracle Governance`

**§1 Core Claim** (~15 lines)
- Thesis: Spore canon names sensors as the ground through which Evidence reaches coordination. Sensor-and-oracle-governance is the doctrine that specifies *who selects sensors, who maintains them, how they are contested, how they are interpreted, and what happens when they go silent*.
- Without this doctrine, the Evidence primitive is incomplete: canon says evidence grounds coordination but does not say how the grounding-instruments themselves are governed.
- Reinforces Evidence primitive (ADR-0044) by operationalizing its governance at the Field-level.

**§2 Scope** (~20 lines)
- A sensor is any process that produces inputs into the Evidence verb. Three modalities:
  - Machine sensor — instrumented device producing deterministic readings (ecological, economic, technical)
  - Human attestation — a person producing sworn statements, witness signals, or community attestation about observed state
  - AI-agent-generated summary — process that distills inputs (transcripts, records, sensor-streams) into structured Evidence
- An oracle is a sensor coupled with an interpretation rule: the oracle translates raw sensor-reading into canon-legible Evidence.
- Out of scope: inter-layer precedence (when text-authored canon conflicts with sensor-reading; governed by representation-authority, separate foundation doc); response-to-mismatch doctrine (governed by actuator-logic, separate foundation doc).
- Scope-conditioning: this doctrine applies uniformly across modalities via principled-rule; operational specifics per modality belong to pattern/protocol layer.

**§3 Structural Doctrine — Rule-Level Stratification** (~30 lines)
- Inheriting ADR-0046 Field rule-level stratification: sensor-and-oracle-governance operates at three rule-levels.
- **Constitutional rule layer**: who has standing to propose or challenge sensor assignments; instance-membership requirements (ties into F7 MVS when that lands); federation-level boundary of sensor-sovereignty.
- **Collective-choice rule layer**: how sensor-selection / maintainer-assignment / interpretation-authority / disagreement-resolution gets decided by those with standing; quorum, deliberation, appeal protocols.
- **Operational rule layer**: day-to-day calibration / routine data-capture / proxy-contestation adjudication / absent-evidence escalation.
- Rule-level separation is structural clarity, not three separate doctrines.

**§4 Doctrine Per Concern** (~100-120 lines; 7 subsections)

§4.1 **Sensor Selection** — principle: sensor-choice is a collective-choice-rule decision bound by constitutional-rule standing requirements; an instance may not smuggle uncontestable sensors into its evidence stack. Cross-modality principle: whether the sensor is an instrument, an attester, or a summary-process, the *selection* act is the same governance-shape.

§4.2 **Calibration** — principle: calibration is an operational-rule ongoing discipline that preserves coupling between sensor-reading and sensed phenomenon. Three-modality specialization: for instruments, calibration is instrument-drift correction; for human attesters, calibration is reliability-track-record + cross-attestation; for AI-summary, calibration is prompt/model-disclosure + summary-regeneration-auditability.

§4.3 **Maintainer Assignment** — principle: every sensor has a named maintainer (individual, role, or federation) bound to structural-legitimacy coupling — the maintainer bears consequences of mis-maintenance. Unassigned sensors are illegitimate per structural-legitimacy §Core Claim.

§4.4 **Proxy Contestation** — principle: any party with standing (constitutional rule) may contest a sensor's fitness-for-purpose via collective-choice-rule protocol. Contestation is an operational-rule action invoking collective-choice-rule review. Contestable dimensions include: wrong-target (sensor measures X when canon requires Y), decay (calibration drift), captured-maintainer (structural-legitimacy breakdown), superseded-sensor (better modality available).

§4.5 **Multi-Sensor Disagreement** — principle: when multiple sensors report divergent readings, resolution protocol follows operational-rule first (routine reconciliation rules), escalating to collective-choice-rule if protocol fails. Foundation doctrine does NOT prescribe aggregation algorithm — that is pattern/protocol layer. Foundation doctrine commits: (i) disagreement is canon-legible not hidden; (ii) resolution is protocol-bound not arbitrary; (iii) disagreement without resolution is tracked as held-epistemic-tension, analogous to ADR-0001 held-tension pattern.

§4.6 **Interpretation Authority** — principle: the oracle function (translate sensor-reading into canon-legible Evidence) carries interpretation authority. Authority is coupled to maintainer-role + community-standing + domain-expertise per structural-legitimacy. Interpretation-authority is intra-modality (who reads this sensor's output); inter-layer precedence (sensor vs text vs graph vs attestation) is F4 scope. ADR-0063 participatory-sense-making mode applies: for interpretation-authority, sense-making may be sender-receiver-transmission OR constitutively-interactive-emergence depending on context; doctrine accepts both modes.

§4.7 **Absent-Evidence Handling** — principle: absent sensor-reading is canon-legible (must be recorded, not ignored). Handling depends on sensed-phenomenon:
  - **Continuity-constituted phenomena** (water quality, ongoing relationships, commitment-pool state): absent-reading defaults to state-persistence; persistent absence becomes contestable evidence of governance-decay.
  - **Event-constituted phenomena** (settlement emission, sworn witness event, meeting-attendance): absent-reading defaults to epistemic-gap; no imputation; governance-regime sets escalation protocol.
  - This distinction inherits ADR-0049 reproduction-continuity primitive: continuity-constituted phenomena are those operating in reproduction-continuity context where longitudinal attestation and replication-regime are Evidence subspecies.

**§5 Reproductive Evidence** (~15 lines)
- Explicit subsection per ADR-0049 §179 forward-ref.
- Longitudinal attestation: Evidence subspecies where the grounding is not a single-moment reading but a sustained track-record across reproduction cycles.
- Replication-regime: Evidence subspecies where the grounding is the sustained *capacity to re-enact* (repeated measurement, re-attestation, re-summarization) across generational change of participants.
- Both subspecies are genuinely different from single-moment Evidence; sensor-and-oracle-governance doctrine covers them but acknowledges their distinct epistemic profile.
- Three-way distinction preservation (per ADR-0049 §115): reproductive-commoning (ADR-0002 visibility doctrine) ≠ care-commoning (ADR-0045 asymmetric-relational doctrine) ≠ reproduction-continuity (ADR-0049 primitive verb). This doctrine's reproductive-Evidence subsection operates at the primitive-verb layer, NOT the visibility-doctrine or asymmetric-relational-doctrine layers.

**§6 Open Questions** (~20 lines)
- Interpretation-authority in pluriversal contexts: when multiple traditions interpret the same sensor-reading differently, is this a multi-sensor disagreement, a multi-oracle disagreement, or an instance of ADR-0001 pluriversal-incommensurability? Foundation-layer signal: likely held-tension; operational-layer treatment deferred.
- Cross-modality oracle composition: can machine-sensor + human-attestation + AI-summary compose into a single compound oracle, or do they remain separate oracles whose outputs require inter-oracle governance? Foundation-layer signal: both modes exist; canonical choice depends on phenomenon; operational-layer specifics parked.
- Federated sensor-sovereignty: when a sensor crosses federation boundaries (e.g., bioregional water-quality used by multiple federations), whose rule-levels apply? Parked for F7 (minimum-viable-spore-instance) + ADR-0068 federation-encounter pattern to operationalize.
- Phase 5 section-level status labels: this doctrine is deliberately tag-agnostic; Phase 5 sweep will tag sections as Design commitment / Operational pattern / Research hypothesis / Under exploration.

**§7 Related** (~10 lines)
- `docs/project-vision.md` — Evidence verb (9-primitive roster per ADR-0044)
- `docs/foundations/governance-artifacts-and-graph-projections.md:134-143` §Grounding Through Sensors — where sensors are named in canon body
- `docs/foundations/structural-legitimacy.md` — coupling-to-consequence applies to maintainer-roles
- `docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md` — the ADR that promoted this doc
- `docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md` — Evidence primitive reinforced
- `docs/research/canon-decisions/0046-field-rule-level-stratification.md` — Ostrom 3-level rule-stack inherited
- `docs/research/canon-decisions/0049-reproduction-continuity-primitive-admission.md` — reproductive-Evidence subspecies per §5
- `docs/research/canon-decisions/0063-participatory-sense-making-disposition.md` — sense-making-mode scope-conditioning applied at interpretation-authority

---

## 3. Proposed ADR-0073 §Context / §Decision / §Consequences (sketch)

**§Status**: active (authored + activated 2026-04-25 under Phase 4 Tier A first admission)

**§Context** (~20 lines)
- Phase 4 of canon-rebuild arc was defined in audit-v2 §6.4 (2026-04-22). Phase 4 scoping plan (2026-04-25) confirmed 9 foundation-doc deficits still hold; F1 sensor-oracle-governance is highest-priority (all-reviewer convergence).
- 3 prior ADRs forward-reference F1: ADR-0043 line 87 (naming-consistency), ADR-0044 line 168 (Evidence-primitive reinforcement), ADR-0049 line 179 (longitudinal-attestation Evidence subspecies). ADR-0046 line 225 permissively offers rule-stack inheritance.
- Canon currently names sensors at `governance-artifacts-and-graph-projections.md:134-143` (§Grounding Through Sensors) but provides no doctrine for selection, calibration, maintainer roles, contestation, disagreement, interpretation-authority, or absent-evidence handling. Audit-v2 §2.14: "canon names sensors as Evidence-ground but has NO governance doctrine."
- Precedent shape: ADR-0042 dag-delete + structural-legitimacy-promote established the foundation-doc-promotion-via-ADR template (one ADR + one new foundation doc + canon-review-protocol §1 + docs/README.md + optional concepts yaml).

**§Decision** (~25 lines)
- Enumerated 4 or 5-file edit (per axis D choice):
  1. Create new foundation doc `docs/foundations/sensor-oracle-governance.md` (~200-250 lines; structure per decision-brief §2)
  2. Register foundation doc in `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list (line-insert between spore-instance-model.md and structural-legitimacy.md)
  3. Register foundation doc in `docs/README.md` Foundations listing (line-insert after structural-legitimacy line 28)
  4. [CONDITIONAL per axis D] Update `docs/research/concepts-p2p-wiki.yaml` v14→v15 with slug admissions (longitudinal-attestation + replication-regime)

- Rationale for `edit` disposition:
  - (a) Lens concurrence: audit-v2 + 4 prior audits converge on F1 top-priority; 3 prior ADRs forward-reference it.
  - (b) No opposition: no audit defended canon's current doctrine-less sensor-naming.
  - (c) Held-tension check: ADR-0001 pluriversal-incommensurability concerns parked in §6 Open Questions; do not block foundation-layer admission.

**§Consequences** (~30 lines)
- Evidence primitive earning is reinforced at the Field layer (satisfies ADR-0044 §168 forward-ref).
- The 3 modalities (machine sensor / human attestation / AI-summary) now have canon-legible unified doctrine at foundation layer (B1 unified-via-principled-rule).
- 3-level rule-stack from ADR-0046 Field-stratification is inherited, setting template for F2/F3/F4/F5/F6 Phase 4 admissions (C1).
- Reproductive-Evidence (longitudinal-attestation + replication-regime) named as Evidence subspecies per ADR-0049 §179; three-way distinction (reproductive-commoning / care-commoning / reproduction-continuity) preserved.
- Interpretation-authority sense-making-mode scope-conditioned per ADR-0063 (sender-receiver-transmission OR constitutively-interactive-emergence).
- F1 foundation doc is intra-modality governance; F4 representation-authority (next Tier A) handles inter-layer precedence.
- Pattern/protocol layer extensions available for per-modality operational specifics.
- canon-review-protocol §1 Spore canon-in-scope list gains F1; docs/README.md gains F1.
- Canon object-class inventory preserved at 4 categories (no new foundation-doc category). Foundation-doc count: 7 → 8 (excluding lexicon entries).
- [CONDITIONAL] Concepts yaml v14→v15 with 2 new derived glossary slugs (6→8 total).
- Canon-rebuild arc: 24 canon-decisions → 25 (ADR-0073 is first Tier A admission of Phase 4).
- Validator state: 9/30 held exact (no new doc-kind, no new status values).
- 3 new canon-method precedents (§Consequences of ADR-0073):
  1. First-Tier-A foundation-doc-admission pattern-setting — shape inherited by 8 downstream Phase 4 docs
  2. Ostrom rule-stack inheritance in foundation-doc authoring (ADR-0046 permissive offer accepted at F1; template for F2/F3/F4/F5/F6)
  3. Three-modality unified-via-principled-rule abstraction at foundation layer (distinct from B2 three-sub-doctrine fragmentation; generalizes to multi-modality foundation docs elsewhere in Phase 4)

---

## 4. Open ambiguity flags for operator

- **Flag 1 — slug admission D-axis**: D2 (admit 2 slugs) matches ADR-0049 forward-ref more fully but D3 (defer) is also defensible. Operator decision moves yaml from edit-out to edit-in.
- **Flag 2 — back-annotation F3**: if operator wants forward-ref ADRs (0043/0044/0046/0049) back-edited to close the "Phase 4 (future): ..." forward-pointers, F3 adds 4-file edit scope. Child reject (F1 cite-all in ADR-0073); operator can override.
- **Flag 3 — §Grounding Through Sensors residual intent-pressure**: governance-artifacts-and-graph-projections.md:134-143 mentions "latent intent-pressure." ADR-0056 demoted intent-pressure to research-connection. F1 NARROW scope (J1) leaves this paragraph untouched; J2 would include a 1-line scope-conditioning edit to that paragraph. Child recommend J1; operator may wish J2 for doctrine coherence.
- **Flag 4 — Phase 5 parking-item location**: should Phase 5 tag-agnostic statement appear in §Open Questions (I3-style) or just as a one-line §Related footnote? Child leans §Open Questions.

---

## 5. Child-recommended option-set (defaults)

**A1 / B1 / C1 / D2 / E1 / F1 / G2 / H3 / I1-with-I3-mention / J1**

Under these defaults:
- Foundation doc: ~200-250 lines
- ADR: ~100-120 lines
- Registration edits: 3 line-inserts + 1 yaml v-bump = ~15 lines
- Total net: ~335-385 lines
- Session-atomic projection: 15-22 min in-window

---

## 6. Step 2 handback statement

STEP 2 HANDBACK. Awaiting ratification on A/B/C/D/E/F/G/H/I/J. No Step 3+ execution without explicit approval via SendMessage. Preflight baseline verified; audit complete; decision-brief with child recommendations + foundation-doc outline + ADR sketch provided. Budget fits 30-min window for any plausible option-selection.

---

**End decision-brief.**
