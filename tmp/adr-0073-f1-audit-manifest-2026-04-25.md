# ADR-0073 F1 sensor-oracle-governance — Step 0.5 Audit Manifest

**Date**: 2026-04-25
**Baseline HEAD**: `8867acc`
**Target ADR**: spore:ADR-0073 sensor-oracle-governance-foundation-doc-promotion
**Target foundation doc**: `docs/foundations/sensor-oracle-governance.md` (NEW)
**Precedent template**: ADR-0042 dag-delete + structural-legitimacy-promote

---

## §A. F1 scope per audit-v2 §6.4 + scoping plan

### A.1 Verbatim audit-v2 §6.4 item 1

> 1. Sensor / oracle governance (all reviewers converge)

Cross-validation: §2.14 (audit p.11), §3.3 item 1, §9 high-confidence line 481. ALL reviewers converge (Codex, Opus-4-7, Lens W, Lens O, v1).

### A.2 Target-concept enumeration (from phase-4-scoping-audit-manifest §B F1)

Doctrine for:
1. **Sensor selection** — who chooses what gets sensed
2. **Calibration** — how sensor accuracy is maintained
3. **Maintainer assignment** — who is responsible for keeping a sensor running
4. **Proxy contestation** — what happens when someone challenges a sensor's fitness-for-purpose
5. **Multi-sensor disagreement** — how multiple sensors reporting divergent readings are resolved
6. **Interpretation authority** — who decides what sensor readings mean
7. **Absent-evidence handling** — what happens when an expected sensor goes silent

### A.3 Full-modality scope (operator Q5 ratification)

F1 covers THREE modalities in ONE foundation doc:
- **Machine sensors** — ecological (water quality, species counts, land use), economic (pool state, token flows, settlement events), technical (uptime, block-height, commitment-pool-balance)
- **Human attestation** — sworn evidence, witness statements, community-signal (meeting-transcripts → attested summaries)
- **AI-agent-generated summaries** — LLM summaries, agent-produced reports, distilled signal-chains

Each modality has distinct epistemic profile (deterministic / subjective / probabilistic) — the doctrine must accommodate heterogeneity without fragmenting into three sub-doctrines.

### A.4 Phase 5 tag-agnostic (operator Q6 ratification)

Foundation doc does NOT encode tag-status semantics. Section content must be tag-ready (anticipate Phase 5 section-labeling) but the doc itself does not pre-tag.

---

## §B. ADR-0042 precedent shape analysis

ADR-0042 is the authoritative template for foundation-doc promotion via ADR. Key shape attributes:

### B.1 Frontmatter convention (ADR-0042 lines 1-35)

```yaml
doc_id: spore.canon-decision.<slug>
doc_kind: decision-record
status: active
adr_number: "0042"
opened-on: <date>
closed-on: <date>
decision: edit
r_claim_source: [audit-source IDs]
r_claim_statement: |
  Combined statement articulating the repair
supported_by: [all audits + relevant canon docs]
authorized-by: "<phase> operator directive <date>"
queue_reference: "<original-audit-finding ID>"
affects_canon:
  - <new foundation doc path>
  - <existing docs touched>
  - docs/research/planning/canon-review-protocol.md
  - docs/README.md
related_adrs: [list]
concepts: [relevant slugs]
```

### B.2 Body structure (ADR-0042 lines 37-113)

Sections:
1. **Status** — active / phase-number / date
2. **Context** — audit-finding that triggered the ADR
3. **Decision** — enumerated edit list (file-by-file)
4. **Rationale** — lens-concurrence / no-opposition / held-tension-check
5. **Consequences** — per-consequence bullets (positive + unresolved)
6. **Evidence** — cluster_key / supports / opposes / held-tension-overlap / adaptation notes
7. **Diff summary** — per-file old-vs-new snippets

### B.3 Foundation-doc shape (structural-legitimacy.md lines 1-61)

```yaml
doc_id: spore.<slug>
doc_kind: foundation
status: active
depends_on: [upstream foundation docs]
```

Body sections:
1. **H1 doc title**
2. **Core Claim** — one-paragraph thesis
3. **Why This Replaces/Extends X** (when doc closes prior gap or supersedes earlier framing; optional for F1 since no prior framing is being replaced)
4. **Implementation Surfaces in Spore** — concrete mechanisms
5. **Open Questions** — foundation-layer concerns flagged
6. **Related** — cross-refs to ADR + sibling foundation docs

Length: ~60-80 lines (structural-legitimacy is ~60). F1 may run longer (150-250) given 3-modality scope + 7-concern enumeration.

### B.4 Canon-registration surfaces (ADR-0042 §Decision)

Three registration edits alongside the ADR + new foundation doc:
1. `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list — add line
2. `docs/README.md` Foundations listing (lines 22-29) — add line after relevant anchor
3. (Optional per D axis) `docs/research/concepts-p2p-wiki.yaml` — register slug(s)

---

## §C. Forward-referencing ADRs — what F1 must satisfy

### C.1 ADR-0043 federation-protocol-rename line 87

> Downstream: Phase 3 Core Thesis rewrite + Phase 4 new foundation docs (sensor/oracle, translation, actor governance) inherit a naming context that separates protocol-specification from project-aesthetic cleanly.

**Implication for F1**: none hard; the expectation is that F1 uses current `federation-protocol` naming (post-rename). Already implicit.

### C.2 ADR-0044 core-thesis-primitive-roster-alignment line 168

> Phase 4 (future): sensor-and-oracle-governance foundation authoring (reinforces Evidence primitive earning per Phase 1 C-14 finding).

**Implication for F1**: F1 must **reinforce Evidence primitive earning**. I.e., the foundation doc should make clear that sensor-and-oracle-governance is operationalizing the Evidence primitive at governance layer. Foundation doc §Related or §Core Claim must cite ADR-0044 Evidence-verb bullet. Must not contradict the 9-primitive roster.

### C.3 ADR-0046 field-rule-level-stratification line 225

> Phase 4 foundation-doc work may elaborate Field-stratification at sensor-and-oracle-governance, translation-and-bridge-governance, or actor-governance levels.

**Implication for F1**: F1 **may** (permissive, not required) inherit Ostrom 3-level rule-stack (operational / collective-choice / constitutional). This maps to the 7 concerns as follows:
- Constitutional-rule layer: who gets standing to propose/challenge sensor assignments at all
- Collective-choice-rule layer: how sensor selection / maintainer assignment / interpretation-authority is decided by those with standing
- Operational-rule layer: how day-to-day sensor calibration + contestation + absent-evidence handling plays out

This is a **genuinely useful structural scaffold** for F1's 7 concerns. Decision-axis C surfaces INHERIT / NO-INHERIT / PARTIAL.

### C.4 ADR-0049 reproduction-continuity line 179

> Phase 4 sensor-and-oracle-governance foundation doc should name the reproductive-Evidence reading (longitudinal attestation; replication-regime) as explicit subspecies of Evidence operating in reproduction-continuity context.

**Implication for F1**: F1 **should** (soft-required; ADR-0049 uses "should") name longitudinal attestation + replication-regime as an explicit subspecies of Evidence that the governance doctrine operates over. Either a dedicated §Reproductive-Evidence subsection or prose threading through relevant concerns (calibration, interpretation-authority, absent-evidence-handling over time).

### C.5 ADR-0049 line 115 (three-way distinction preservation)

> Future canon phases (Phase 3b.7 glossary refinements bundle; sensor-and-oracle-governance foundation doc in Phase 4) should preserve this three-way distinction.

The three-way distinction is: reproductive-commoning (ADR-0002 visibility doctrine) / care-commoning (ADR-0045 asymmetric-relational doctrine) / reproduction-continuity (ADR-0049 primitive verb). **Implication for F1**: sensor-and-oracle-governance language must not collapse these three; where reproductive-Evidence is named, F1 should cite ADR-0049's primitive layer specifically (not conflate with reproductive-commoning doctrine).

### C.6 Summary of forward-ref expectations

| ADR | Expectation for F1 | Required / Soft / Permissive |
|-----|-------------------|-----------------------------|
| 0043 | Naming-consistency (federation-protocol post-rename) | Implicit |
| 0044 | Reinforce Evidence primitive; respect 9-roster | Required |
| 0046 | Field-stratification may elaborate here | Permissive (axis C) |
| 0049 | Name longitudinal-attestation + replication-regime; preserve 3-way distinction | Soft-required |

---

## §D. Current canon state relative to F1

### D.1 Existing sensor-adjacent material

**`docs/foundations/governance-artifacts-and-graph-projections.md:134-143` §Grounding Through Sensors** (9-line section):
- Names sensor nodes, ecological/economic/social sensor kinds
- States "mismatch between vision graph and sensor graph creates latent intent-pressure"
- **NOTE**: intent-pressure was demoted to research-connection per ADR-0056; this paragraph's language may have residual drift. F1 foundation-doc should not re-introduce intent-pressure at foundation layer; OK to cite but not load-bearing.
- NO doctrine for any of the 7 F1 concerns

**`docs/foundations/lexicon/stigmergy.md`** — references signal+event+intent primitives via environmental modification; sensor-adjacent but not sensor-governance.

**`docs/foundations/federation-protocol.md`** — no sensor-governance prose detected in scan.

**`docs/foundations/structural-legitimacy.md`** — coupling principle applies to sensor-governance downstream but does not specify it.

### D.2 Existing ADR substrate available for citation in F1

- ADR-0044 core-thesis-primitive-roster-alignment — Evidence primitive definition
- ADR-0046 field-rule-level-stratification — 3-level rule-stack
- ADR-0049 reproduction-continuity — longitudinal-attestation reading
- ADR-0053 glossary-refinements-bundled (attestation-of-execution slug at v11)
- ADR-0061 asymmetric-joint-commitment DECLINE-inline (maintainer-role may interact)
- ADR-0063 participatory-sense-making SCOPE-CONDITION on Signal — interpretation-authority may touch this
- ADR-0064 co-presence-Field-condition SCOPE-CONDITION on Field — sensor operation may span co-presence-modes
- ADR-0068 federation-encounter composition-pattern — federated sensor-governance likely uses encounter-pattern

### D.3 Concepts yaml state (v14)

- `attestation-of-execution` (derived glossary slug, v11) — relevant to F1
- No `sensor`, `oracle`, `calibration`, `maintainer`, `proxy-contestation`, `interpretation-authority`, `absent-evidence`, `longitudinal-attestation`, `replication-regime` slugs

Decision-axis D surfaces: D1 (no new slugs) / D2 (admit 1-3) / D3 (defer to follow-on ADR).

Child observation: some slugs (e.g., `longitudinal-attestation` + `interpretation-authority`) are specifically named in forward-ref ADRs and may earn derived-slug admission in F1. Others (e.g., `sensor`, `oracle`) are more plausibly pattern-or-protocol-layer terms than canon-yaml-derived-glossary-slugs. **Recommended**: D2 with narrow admission (e.g., `longitudinal-attestation` + `replication-regime` per ADR-0049 direct naming); OR D3 defer all slug admissions to a future glossary-bundle ADR. D1 (no slugs at all) risks leaving forward-ref promises unfulfilled.

### D.4 Existing foundation-doc list (as of `8867acc`)

Per `docs/README.md:22-29`:
1. `project-vision.md` (not under foundations/ but canon)
2. `relational-agency-and-holons.md`
3. `holonic-network-architecture.md`
4. `federation-protocol.md`
5. `governance-artifacts-and-graph-projections.md`
6. `structural-legitimacy.md`
7. `spore-instance-model.md`

Plus 3 lexicon entries (field, linguistic-closure, stigmergy).

F1 sensor-oracle-governance registration: insert in docs/README.md after spore-instance-model (line 29) OR adjacent to governance-artifacts-and-graph-projections (line 27, which is where sensors are currently named without doctrine). Canon-review-protocol §1 Spore canon-in-scope (lines 39-47) — insert between `spore-instance-model.md` (line 43) and `structural-legitimacy.md` (line 44) for alphabetical order, or append after structural-legitimacy; operator-preference.

---

## §E. Key tensions surfaced at Step 0.5

### E.1 Three-modality epistemic heterogeneity

Machine sensors (deterministic), human attestation (subjective), AI-summary (probabilistic) differ in:
- **Contestation mechanism**: sensor recalibration vs witness cross-examination vs prompt/model disclosure
- **Absent-evidence semantics**: sensor down = data gap; witness silent = different epistemic state; AI-unavailable = regeneration-possible
- **Interpretation authority**: instrument manufacturer vs community of attesters vs model provider/operator

Operator-ratified unified scope says F1 covers all three. Doctrinal framing must abstract across modalities via **principled-rule** (like ADR-0062 Membrane production-mode scope-conditioning) rather than listing per-modality tables. Doctrine operates at "coordination grammar of sensor-oracle governance" layer; per-modality operational specifics belong to F4 (representation-authority), F5 (actuator-logic), or pattern/protocol layer.

### E.2 F4 adjacency-scope tension

F4 representation-authority is the NEXT Tier A item and covers "explicit precedence rule across authored text / graph projection / sensor output / claim-attestation layer / agent-generated summaries." F4 subsumes **inter-layer precedence** (what wins when text and sensor-reading disagree).

**F1 must NOT preempt F4's scope**. F1 is *intra-modality* governance (how sensor-selection, calibration, maintainer, contestation, disagreement, interpretation, absence work within-modality). F4 handles *inter-layer precedence* (text vs graph vs sensor vs attestation vs agent-summary).

Concrete discipline for F1 authoring: when F1 talks about "interpretation authority" (concern 6), it's about *who determines what a specific sensor-reading means* within the sensor modality. Not about *what happens when sensor-reading conflicts with text-authoritative canon statement* (that's F4).

### E.3 Ostrom rule-stack inheritance (ADR-0046 line 225)

Per audit §C.3, ADR-0046 makes rule-stack inheritance *permissive not required*. Genuinely useful for F1's 7 concerns. Decision-axis C.

- **C1 INHERIT** (full 3-level): structurally elegant; each concern operates at multiple rule-levels; reinforces Field-as-stratified canon doctrine; adds template-reuse value for F2 (translation-mapping-governance) + F3 (actor-governance) which also have rule-level implications.
- **C2 NO inheritance**: simpler doc; 7 concerns flat-listed; risks cross-phase inconsistency when F2/F3 also face the same stratification decision.
- **C3 PARTIAL** (rule-stack only on interpretation-authority): compromise; surfaces rule-stratification only where it's load-bearing for F1.

Child recommendation: **C1 INHERIT** for template-value across Tier A+B. Adds ~30-50 lines to doc; sets reusable shape for F3/F4/F5/F6.

### E.4 Slug admission decision (axis D)

Child recommendation per §D.3: D2 narrow admission (2 slugs: `longitudinal-attestation` + `replication-regime` per ADR-0049 explicit naming; and maybe `interpretation-authority` if operator wants). Alternative D3 defer all slugs to future glossary-bundle ADR — matches ADR-0053 precedent (bundle 3 derived slugs at v11).

### E.5 Contestation-and-disagreement framing (axis G)

F1 has two concerns that invoke contest-and-disagree semantics:
- Concern 4: proxy contestation (challenge to sensor's fitness-for-purpose)
- Concern 5: multi-sensor disagreement (divergent readings)

Framing options:
- **G1 Algorithm-based** (voting thresholds, quorum for sensor-replacement, weighted multi-sensor aggregation) — premature specification; foundation doc shouldn't pick algorithms.
- **G2 Protocol-based** (appeal paths, escalation through Ostrom 3-level rule-stack) — foundation-appropriate; matches structural-legitimacy's approach.
- **G3 Both** (default algorithm + protocol for appeals) — over-specification at foundation layer.
- **G4 Principles-only** (state principles; defer mechanism to pattern/protocol layer) — matches ADR-0042 structural-legitimacy style.

Child recommendation: **G2 Protocol-based** (when C1 INHERIT is chosen); the 3-level rule-stack IS the protocol structure. If C2 NO-INHERIT, then G4 Principles-only is the safer fallback.

### E.6 Absent-evidence handling (axis H)

Foundation-layer options:
- **H1 Presumption of negative** (no evidence = no event) — sensor-layer default; fits machine sensors.
- **H2 Presumption of positive** (state continues) — fits reproduction-continuity reading (ADR-0049) where absence ≠ discontinuity.
- **H3 Contextual** (depends on sensed-phenomenon) — honest-rigor; acknowledges modality heterogeneity.
- **H4 Protocol-dependent** (each instance specifies) — pushes decision to deployment layer.

Child recommendation: **H3 Contextual** with named principled-rules distinguishing contexts (e.g., "absent sensor-reading ≠ absent phenomenon when the phenomenon is continuity-constituted; absent sensor-reading = undecided when the phenomenon is event-constituted"). This is load-bearing for reproduction-continuity Evidence subspecies per ADR-0049 §179.

---

## §F. Template-reusability considerations

F1 is the FIRST Tier A admission. Design choices here set the pattern for F4/F5/F6/F7/F8/F9 (8 more foundation docs). Reusable elements to hold in mind:

1. **Frontmatter shape**: doc_id / doc_kind: foundation / status / depends_on. Shape is already set by structural-legitimacy.md; no innovation needed.
2. **Body structure template**: Core Claim → (optionally) Why This Replaces/Extends → Implementation Surfaces → Open Questions → Related. F1's 7-concern enumeration + possible 3-level rule-stack + 3-modality abstraction means the body may need sub-sections the simple template doesn't have. Consider proposing a variant template: Core Claim → Scope (covers what/not-what) → Structural Doctrine (with rule-stack if C1 chosen) → Per-concern doctrine sections → Open Questions → Related.
3. **Registration-edit pattern**: docs/README.md + canon-review-protocol §1 + optional concepts yaml. Set by ADR-0042 precedent.
4. **ADR frontmatter**: `decision: edit` is standard; ADR-0042 used bundled "edit" for delete+promote. F1 doesn't delete anything; it's pure-admission. Possible values: `edit` (precedent-compliant) or `new-foundation-doc` (novel; requires validator-enum-extension — avoid unless operator wants).

Child take: preserve `decision: edit` for precedent honor; F1's scope is *canon-scope-extension* (admit a new foundation doc into canon), which is a form of `edit` to the canon-review-protocol §1 scope list.

---

## §G. Step 0.5 findings summary

1. **F1 scope is rich**: 7 distinct concerns × 3 modalities = 21 cell matrix; audit-v2 consensus puts doctrine-layer treatment at top priority.
2. **ADR-0042 is a clean template**: 4 canon-file allowlist (new doc + 1 existing edit + canon-review-protocol §1 + docs/README.md). F1 can inherit same allowlist pattern (maybe skip the existing-file-edit if no existing canon doc needs update; though `governance-artifacts-and-graph-projections.md:134-143` is a natural cross-reference target).
3. **4 forward-ref ADRs set concrete expectations**: Evidence-primitive reinforcement (ADR-0044 required), 3-way distinction preservation (ADR-0049 required), longitudinal-attestation naming (ADR-0049 soft-required), rule-stack elaboration (ADR-0046 permissive).
4. **F4 adjacency requires discipline**: F1 is intra-modality governance; F4 will handle inter-layer precedence. Don't preempt.
5. **3-modality unified scope works via principled-rule abstraction** (like ADR-0062/0063/0064 scope-conditioning pattern); avoid per-modality tables at foundation layer.
6. **Rule-stack inheritance (C1) strongly recommended** for template-reuse across Phase 4 Tier A+B.
7. **Slug admission should be narrow** (D2 with `longitudinal-attestation` + `replication-regime` per ADR-0049) OR deferred (D3); D1 zero-slugs risks leaving forward-ref ADRs' promises unfulfilled.
8. **Session-atomic projection**: foundation-doc authoring is the cost-driver. 150-250 line doc + ~100-line ADR + 2-3 registration edits = 450-600 net lines. Projection: 12-18 min in-window if plan is tight (comparable to ADR-0068's 472s / 7.9 min at 500 new lines + ratification-heavy Step 2); allow 20-25 min for safety.

---

## §H. Constraint-10 preflight re-check

Working tree state (Spore): only untracked files (tmp/ artifacts, research originals, PNG assets, AGENTS.md). NO tracked modifications outside target-set. Constraint-10 clean.

Parent-session-tracked files check (per ADR-0067 tripwire-discipline): CLAUDE.md at repo root + docs/CLAUDE.md + docs/foundations/CLAUDE.md are parent-session housekeeping artifacts; untouched in this session. Step 3+ will NOT touch CLAUDE.md unless operator explicitly pre-approves (deferred to /end).

---

## §I. Cross-repo read-only verification

- IC HEAD: `8ce665e` — UNCHANGED during Step 0/0.5
- PM HEAD: `db83232` — UNCHANGED during Step 0/0.5
- koi-processor HEAD: `1119f703` — UNCHANGED during Step 0/0.5
- darren-workflow HEAD: `3cc190f` — UNCHANGED during Step 0/0.5

Cross-repo read-only discipline intact.

---

**End audit manifest.**
