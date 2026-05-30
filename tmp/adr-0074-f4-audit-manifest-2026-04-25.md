# ADR-0074 F4 Representation-Authority — Step 0.5 Audit Manifest

**Date**: 2026-04-25
**Stage**: Step 0.5 (Deep audit of ADR-0041 precedent + F1 template inheritance + layer inventory)
**Type**: PRE-PROPOSAL AUDIT. No canon edits, no plan commitments. Audit-then-propose discipline.

---

## §A. Mandate

F4 `representation-authority.md` is the SECOND Tier A Phase 4 foundation-doc admission. It extends ADR-0041's text-vs-graph precedence across the remaining canon representation layers (sensor / attestation / agent-summary) into a unified **inter-layer precedence doctrine**. F1 (ADR-0073, 2026-04-25) established the template pattern and explicitly reserved inter-layer precedence as F4 scope.

This audit tests:
- (i) What ADR-0041 actually commits to (text-authoritative-vs-graph-derived)
- (ii) What F1 template offers for reuse (structure, registration, rule-stratification inheritance)
- (iii) What the actual layer inventory must contain (text / graph / sensor / attestation / agent-summary — are there more?)
- (iv) Whether F4 is EXTEND / COMPLETE / COMPLEMENT relative to ADR-0041
- (v) What precedence-shape honestly fits the operational reality (static ordering vs context-dependent vs protocol-based vs hybrid)

---

## §B. ADR-0041 Precedent Audit

### B.1 What ADR-0041 actually commits to

From `docs/research/canon-decisions/0041-text-authoritative-representation.md`:

- **Scope**: two-layer precedence (text vs graph)
- **Rule**: text is authoritative; graph is a derived view; when they disagree, text wins and graph regenerates
- **Rationale**: the prior "neither derives from the other" claim was operationally untenable; every sensor/mapping dispute became a hidden authority conflict
- **Evidence**: 4 prior audits + 1 Phase 1 coherence audit converged (5-perspective concurrence)
- **Canon-body site**: `docs/foundations/governance-artifacts-and-graph-projections.md:43-50` §Dual Representation (single-paragraph rewrite)
- **Forward-ref**: line 58 — F4 can build on ADR-0041 as text-vs-graph layer of a broader precedence hierarchy (text / graph / sensor / attestation). Agent-summary not named in ADR-0041's forward-ref.

### B.2 What ADR-0041 does NOT commit to

- Does not name sensor-layer
- Does not name attestation-layer
- Does not name agent-summary-layer
- Does not name higher-order layers (operator-ratification, historical-ADR, meta-layers)
- Does not commit to any precedence-shape beyond binary text>graph
- Does not commit to context-dependency (text > graph regardless)

### B.3 What ADR-0041 already implies for F4

- The "authoritative" position is a held canon-doctrine (text).
- "Derivation-direction" is the canonical framing for text > graph.
- F4 must preserve text-authoritative (not weaken ADR-0041).
- F4 must explain how derivation-direction extends OR is complemented OR is superseded-with-broader-doctrine for non-text layers.
- F4 scope is at minimum 3 new layers (sensor / attestation / agent-summary); potentially 2 more (operator-ratification / historical-ADR).

### B.4 ADR-0041 relationship options for F4

- **G1 EXTEND** — F4 extends ADR-0041 across remaining layers; ADR-0041 body preserved unchanged; F4 adds layers on top.
  - Pro: honors ADR-0041's standing; cleanest canon lineage; matches forward-ref line 58 verbatim
  - Con: F4 must name itself as extension, not authoritative doctrine, which can cause reading-tension when F4 needs to assert a non-text layer
  - Lean: plausible default
- **G2 COMPLETE** — F4 supersedes ADR-0041 with broader doctrine; ADR-0041 referenced as historical
  - Pro: cleanest unified doctrine; F4 is fully standalone
  - Con: requires ADR-0041 supersede-via-prose or active status change; historical-ADR-as-reference is uncommon here; overreach risk
  - Lean: NOT default
- **G3 COMPLEMENT** — F4 stands alongside ADR-0041; both live; shared conceptual space with explicit cross-reference
  - Pro: lightweight; matches "complementary" philosophical stance
  - Con: weakest in resolution-of-conflict — F4 complementing ADR-0041 still leaves readers wondering "which wins?" when F4 and ADR-0041 seem to differ on an edge case
  - Lean: NOT default

**Audit recommendation**: G1 EXTEND. Matches the forward-ref language at ADR-0041:58 verbatim ("build on this ADR as the text-vs-graph layer of a broader precedence hierarchy"). Minimizes canon churn. Honors ADR-0041 as authored without demoting it.

---

## §C. F1 Template Inheritance Map

F1 (ADR-0073 + sensor-oracle-governance.md) established the Tier A foundation-doc admission pattern. The full template-reusable elements:

### C.1 ADR structure (from ADR-0073)

- Frontmatter: `doc_id` / `doc_kind: decision-record` / `status` / `adr_number` / `opened-on` / `closed-on` / `decision: edit` / `r_claim_source` / `r_claim_statement` / `supported_by` / `authorized-by` / `queue_reference` / `affects_canon` / `related_adrs` / `concepts`
- Body: Status / Context / Decision / Consequences / Method-precedents / Evidence / Diff summary
- 5-part atomic-bundle pattern: new ADR + new foundation doc + canon-review-protocol §1 + docs/README.md + optional concepts yaml

### C.2 Foundation-doc structure (from sensor-oracle-governance.md)

1. **Frontmatter**: doc_id / doc_kind: foundation / status: draft→active / depends_on
2. **Untitled intro paragraph** (~3-5 lines)
3. **Core Claim** (~15 lines)
4. **Scope** (~20 lines — in-scope / out-of-scope / three-modality abstraction note)
5. **Structural Doctrine — Rule-Level Stratification** (~30 lines — ADR-0046 Ostrom 3-level inherited)
6. **Doctrine Per Concern** (~100-120 lines, multiple subsections with principle statement + rule-level decomposition + cross-modality specialization)
7. **Reproductive [Evidence / X]** (~15 lines — ADR-0049 three-way distinction preservation)
8. **Open Questions** (~20 lines — pluriversal interpretation / cross-modality composition / federation-scale / model-lifecycle / Phase 5 tag-agnostic)
9. **Related** (~10 lines — cross-refs to 8+ ADRs + canon body + ADR-0042 precedent)

### C.3 Reusable template elements for F4

- **Rule-stratification inheritance** (ADR-0046): three rule-levels (constitutional / collective-choice / operational) — APPLICABLE to F4 per the following question: "Who has standing to propose / change / override precedence-rule at each layer? Who adjudicates disagreement? Who actually applies it?" These map cleanly to the rule-stack.
- **Multi-modality principled-rule abstraction** (F1's central move): F4's layer-inventory is structurally-different — layers are distinct representation surfaces (not three instances of the same "sensor" category). Principled-rule abstraction still applies, but the "common shape" is inter-layer-authority-decision rather than per-sensor-governance-decision.
- **Three-way distinction preservation** (ADR-0049): likely not needed at F4 unless reproductive-Evidence considerations surface at precedence layer (audit signal: probably not needed — sensor-layer-reproductive was F1's scope).
- **Scope-conditioning inheritance** (ADR-0062 / ADR-0063 / ADR-0064): three autopoiesis-enactive scope-conditioning triad — not directly reusable, but patterns the discipline "doctrine accepts both modes; mode is situational" which F4 may deploy for context-dependency discussion.
- **Open-Questions section**: F4 will have its own (pluriversal, agent-summary-maturity, cross-modality composition, federation-scale, etc.) — structure reusable.
- **Related section**: includes cross-refs to ADR-0041, F1 foundation doc, ADR-0042 precedent, ADR-0046 rule-stack, plus any scope-conditioning ADRs that F4 touches (likely ADR-0063 sense-making-mode is relevant).

---

## §D. Layer Inventory Audit

Per ADR-0041 line 58, ADR-0073 §Consequences line 114, and audit-manifest §F4, the following representation layers exist in Spore canon:

### D.1 Canon-named representation layers (already articulated)

| # | Layer | Canon article | ADR anchor | Authority-claim |
|---|-------|---------------|------------|-----------------|
| 1 | Text-authoritative canon | markdown + YAML frontmatter | ADR-0041 | AUTHORITATIVE (source of truth) |
| 2 | Graph-derived canon | spec-DAG + entity registry + relations | ADR-0041 | DERIVED (projection of text) |
| 3 | Sensor readings | ecological/economic/social sensors (F1 §3) | F1 (ADR-0073) | GROUNDED in phenomenon; governed at Field layer |
| 4 | Attestation | human witness / sworn signal / community attestation (F1 §4) | F1 (ADR-0073) | GROUNDED in human judgment; governed at Field layer |
| 5 | Agent-summary | AI-summary / LLM distillation / signal-chain summarizer (F1 §4) | F1 (ADR-0073) | DERIVED from inputs via agent process; governed at Field layer |

5 layers. F4 must address inter-layer authority across these 5.

### D.2 Canon-adjacent layers (edge cases)

- **Operator-ratification** (operator decision-gate output): canonical-in-effect because every ADR carries operator-ratification signature; but it's not a "representation layer" in the same sense — it's the process that produces the text-authoritative layer. SUGGEST: out-of-scope for F4 (meta-layer, not representation-layer).
- **Historical-ADR state** (superseded / archived ADRs): historical record. SUGGEST: out-of-scope for F4; addressed by ADR-lifecycle-machinery (ADR-0067 enum addition).
- **Session-memory / retrospective / synthesis** (claude-mem, CLAUDE.md, tmp/ artifacts): operator-facing memory-surface. SUGGEST: out-of-scope for F4; addressed by external-validation-loop (F8) if ever authored.

### D.3 Scope recommendation (B-axis default)

**B1 EXHAUSTIVE (5 layers)**: text / graph / sensor / attestation / agent-summary. This is what ADR-0073 §Consequences line 114 enumerates as F4's scope.

**B2 NARROW (3 layers)**: sensor / attestation / agent-summary (treat text/graph as closed by ADR-0041 + inline cite). Risk: leaves reader wondering how the 2 existing layers + 3 new layers form a unified precedence.

**B3 EXPANDED (6+ layers)**: adds operator-ratification / historical-ADR / session-memory. Risk: canon-object-class inflation; premature admission of meta-layers.

**Audit recommendation**: B1 EXHAUSTIVE. Covers the 5 layers ADR-0073 already enumerated; matches F1 canon-body cross-references; avoids underclaim (B2) and overclaim (B3).

---

## §E. Precedence-Shape Audit

The foundational question F4 must resolve: **when representation layers conflict, what determines the winner?**

### E.1 Option D1 — Precedence-ordered (static priority)

Example: **text > graph > attestation > sensor > agent-summary**

Pro: simplest; unambiguous for all cases; maps to ADR-0041's "text > graph" pattern.

Con: honest-rigor failure. Real cases:
- When a sensor reading shows that a text-authored claim is operationally-false (e.g., text says "pool is funded" but sensor shows $0), does text still win?
  - Text-authoritative means the canon-claim is authoritative, but the operational reality is the sensor. The ADR-0041 framing works for specifications (text-about-intent) but less well for declarations-of-fact (text-about-state).
- When an AI-summary distills a canon that itself is contested, does text (the canon) still win over agent-summary, even if agent-summary incorporates sensor readings?

These aren't edge cases — they're the common case. Static ordering over-claims.

### E.2 Option D2 — Context-dependent

Different domains have different precedence:
- For **specification / intent** (text-about-what-should-be): text authoritative
- For **fact / state** (text-about-what-is): sensor / attestation authoritative where available; text is a report, not authority
- For **derivation / projection**: graph / agent-summary derived from whatever is authoritative at source layer

Pro: honest to operational reality. Distinguishes specification-text from fact-reporting-text.

Con: requires the doctrine to specify how to categorize cases. Risk of producing yet-another-layer problem (now we need a "categorize-layer" doctrine).

### E.3 Option D3 — Protocol-based (appeal routing, no static ordering)

All conflicts route through an appeal-protocol that uses the rule-stack. No layer is "higher" statically; the protocol produces the adjudication.

Pro: maximally principled; matches F1 §4.5 multi-sensor-disagreement discipline (protocol-based, not aggregation-algorithm-specified).

Con: under-specifies the common case. For 95% of canon reading, readers want to know "text wins" (as ADR-0041 established), not "it depends on the protocol."

### E.4 Option D4 — Hybrid (default + context-overrides + appeal-protocol)

- **Default precedence**: text > graph for specification; sensor / attestation > text for fact-reporting-where-sensed; agent-summary lowest weight as pure derivation
- **Context-overrides**: domain-specific precedence for specific canon contexts (e.g., commitment-pool balance: sensor > text)
- **Appeal-protocol**: when default + context-overrides conflict or produce ambiguity, route through rule-stack (constitutional-rule → collective-choice-rule → operational-rule)

Pro: honors ADR-0041 as default for specifications; acknowledges sensor/attestation operational primacy for fact-reporting; provides genuine resolution for contested cases without over-specifying algorithms.

Con: more complex; harder to read; requires careful principled-rule articulation per category.

### E.5 Audit recommendation

**D4 HYBRID**. Matches F1's multi-sensor-disagreement discipline (§4.5) which committed to protocol-based contestation + rule-stack routing. Matches ADR-0041's text-authoritative for specification (preserved as default). Honest to the fact-vs-intent distinction that static ordering (D1) obscures.

The principled-rule that distinguishes specification-text (text wins) from fact-reporting-text (sensor/attestation wins where the text is a report of sensed-state) is load-bearing. F4 should name this principle explicitly; the ADR-0062 / ADR-0063 / ADR-0064 scope-conditioning triad establishes precedent for "canon accepts both modes; mode is situational."

---

## §F. Interactions with Other ADRs

### F.1 ADR-0041 (text-authoritative) — PRIMARY ANCHOR

- Preserved under G1 EXTEND; ADR-0041 stands as canonical for specification-text vs graph-derived
- F4 extends to additional layers
- F4 names text-vs-graph as closed case within the broader 5-layer picture

### F.2 ADR-0046 (Field rule-level stratification) — RULE-STACK INHERITANCE

- F4 inherits Ostrom 3-level rule-stack at "who decides precedence?" layer:
  - **Constitutional-rule layer**: who has standing to establish precedence-hierarchies for an instance or federation
  - **Collective-choice-rule layer**: the protocol for assigning / revising precedence in a domain
  - **Operational-rule layer**: day-to-day application (which layer wins in a specific dispute)
- Matches F1 discipline (ADR-0073 line 112 explicitly offers rule-stack-inheritance to F4)

### F.3 ADR-0042 (structural-legitimacy) — PRECEDENT + SECONDARY ANCHOR

- Foundation-doc-via-ADR precedent template inherited
- Coupling-to-consequence principle: whoever holds precedence-authority at a layer bears the consequences of their decisions
- Load-bearing for Open Questions §: coupling-failure-at-agent-summary-layer is a known asymmetry (same as F1's AI-summary-authority-decay open question)

### F.4 ADR-0044 (core-thesis-primitive-roster-alignment) — CONTEXT

- Evidence primitive in the 9-primitive roster
- Representation-authority interacts with Evidence verb at fact-reporting-layer
- F4 preserves Evidence primitive; doesn't redefine

### F.5 ADR-0049 (reproduction-continuity) — CONTEXT (light touch)

- longitudinal-attestation + replication-regime are F1-scoped subspecies of Evidence
- F4 touches them only if precedence-interaction with reproduction-context is meaningful
- Audit signal: likely NOT needed for F4 (F1 already handled reproductive-Evidence; F4 is about inter-layer precedence, not Evidence subspecies)

### F.6 ADR-0062 / ADR-0063 / ADR-0064 (scope-conditioning triad) — DISCIPLINE PRECEDENT

- Canon-accepts-both-modes discipline: situational vs prescriptive
- F4 uses this discipline for D4 hybrid (default + context-overrides + appeal-protocol)
- ADR-0063 Signal sense-making-mode is specifically relevant for interpretation-authority → agent-summary layer (how the summary is produced shapes whether it's a reading, an interaction, or a co-construction)

### F.7 ADR-0058 (graph-projections-realignment) — CONTEXT

- Graph is derived from text (ADR-0058 3-primary + 5-view-template shape)
- F4 inherits the graph-as-derived frame from ADR-0041 + ADR-0058

### F.8 ADR-0065 (pattern-library-infrastructure) — CONTEXT

- No direct interaction; pattern-library is distinct canon-object-class
- Acknowledged in Related section if F4 mentions downstream pattern-admissions (unlikely)

### F.9 ADR-0068 (federation-encounter) — CONTEXT

- Federation-encounter composition involves multiple layers (Signal, Joint-commitment, Intent, Evidence, Field)
- Doesn't directly interact with F4 precedence, but federation-scale may surface sensor-sovereignty-across-federations questions — these go in F4 Open Questions (federated-precedence-across-overlapping-federations)

---

## §G. Validator + Canon-object-class Impact

### G.1 Validator

- `decision: edit` (same as F1, ADR-0042 precedent) — no validator enum change
- If D4 HYBRID admitted as a new "doctrine shape" for canon, does it introduce a new canon-object-class? NO. F4 is a foundation-doc in the existing foundation-doc class. The doctrine it contains is internal to the foundation-doc; doesn't require new canon-object-class.

### G.2 Canon-object-class inventory

- 4 categories PRESERVED (primitives / doctrines / modes / properties; plus derived-glossary-slugs and patterns as "non-primary" classes per canon-review-protocol)
- F4 adds 1 more foundation doc (8 → 9 not counting lexicon; matches F1 ADR-0073 line 119's enumeration pattern)

### G.3 Concepts yaml

- **E1 NO NEW SLUGS** (v15 preserved): cleanest; F4's doctrine is a rule-set, not new vocabulary. All relevant concepts already exist (representation-authority as phrase; layer-names like text / graph / sensor / attestation / agent-summary as foundation-doc-internal concepts).
- **E2 ADMIT 1-2 SLUGS**:
  - Candidate 1: `representation-authority` — self-referentially names the doctrine; admits "representation-authority" as glossary slug
  - Candidate 2: `precedence-layer` — named concept for any one of the 5 layers
  - Both are plausible but DE-risk: admitting the doctrine's self-name as a slug has precedent (see `structural-legitimacy` has no corresponding slug in yaml — foundation-doc itself is the canonical article). Similarly `sensor-oracle-governance` is not a slug.
  - Audit signal: E1 preferred (matches F1 structural pattern — F1 admitted `longitudinal-attestation` + `replication-regime` NOT `sensor-oracle-governance` itself).
- **E3 DEFERRED** to future glossary-bundle ADR: fine if no new vocabulary emerges at authoring time.

**Audit recommendation**: E1 NO NEW SLUGS. Matches F1 structural discipline (where foundation-doc-internal concepts stay in-doc; only ADR-0049-forward-ref'd subspecies were admitted as slugs).

---

## §H. Open Risks + Ambiguity Flags

### H.1 Ambiguity — F4 doctrine-shape (D-axis)

The biggest real ambiguity is precedence-shape. Audit lean is D4 HYBRID, but operator may prefer D1 PRECEDENCE-ORDERED for simplicity or D3 PROTOCOL-BASED for principled minimality. Surface trade-offs clearly.

### H.2 Ambiguity — ADR-0041 relationship (G-axis)

Audit lean is G1 EXTEND. But operator may want F4 to carry more canonical weight — then G2 COMPLETE. Honest-rigor signal: G1 preserves ADR-0041 integrity and minimizes canon churn.

### H.3 Ambiguity — agent-summary scope (I-axis)

"AI-summary" as a representation layer is the newest in the 5-layer inventory. Scope question: does F4 treat AI-summary narrowly (post-hoc descriptions only), medium (canonical-AI-interpretations routinely consulted, e.g., chat-bot of canon), or wide (session-memory / retrospective / synthesis)?
- Narrow: cleanest; defers wider issues to F8 external-validation-loop
- Wide: risks overreach and canon-object-class inflation

**Audit lean**: I1 NARROW. F4 scope is representation-authority across 5 layers where each layer has a clear provenance. Session-memory / claude-mem / retrospective is a meta-canon-and-operator-memory surface that F8 will handle.

### H.4 Ambiguity — Reproductive-Evidence section (analog to F1 §5)?

F1 has a Reproductive Evidence section per ADR-0049 §179. Does F4 need an analogous section?

Audit signal: NO. Reproductive-Evidence is Evidence-subspecies governance — F1's proper scope. F4 is inter-layer precedence; the distinction between longitudinal-attestation-at-sensor-layer and single-moment-sensor-reading is F1's concern, not F4's. F4 may reference F1 for "Evidence subspecies treatment is at F1, not here."

### H.5 Risk — F1 accidentally asserted inter-layer claims

Audit grep check:
- `docs/foundations/sensor-oracle-governance.md:37` — defers inter-layer to F4 ✓
- `docs/foundations/sensor-oracle-governance.md:147` — defers inter-layer to F4 ✓
- ADR-0073 line 114 — declares F1 intra-modality only ✓

**F1 cleanly preserved the F4 boundary**. No accidental inter-layer claims found.

### H.6 Risk — F4 asserting more than operational evidence supports

F4 is authoring a precedence-doctrine. Operational evidence for specific inter-layer conflicts in Spore canon: scant (canon is young; few inter-layer conflicts have fired). Honest-rigor signal: F4 should name its operational-evidence-base as narrow and commit to revision-triggers (per ADR-0054 rewilding-decline-with-triggers precedent shape — F4 is not a decline, but it CAN include trigger-conditions under which its doctrine might need revision).

---

## §I. Global-Coherence Scope

### I.1 NARROW (J1)

F4 only. No additional canon drift repair.

### I.2 NARROW-WIDE (J2) — if Step 0.5 audit surfaces coherence issues

Audit finding: **no additional coherence issues surfaced** against current canon state.
- ADR-0041 body integrity: clean
- F1 body integrity: clean (no accidental inter-layer claims)
- governance-artifacts-and-graph-projections.md §Dual Representation (post-ADR-0041): reads cleanly; F4 doesn't require edits there
- §Grounding Through Sensors (same file, lines 134-143): names sensors but has residual intent-pressure language per F1 ADR-0073 line 123 (deferred to ADR-0059c-shape cascade-miss cleanup). This is outside F4 scope and was explicitly deferred.

**Audit recommendation**: J1 NARROW. No drift surfaced to justify J2 expansion.

---

## §J. Audit Summary

### J.1 Recommended child-default per axis

| Axis | Default | Rationale |
|------|---------|-----------|
| A | A1 Full-doctrine (~200-250 lines) | Matches F1 precedent |
| B | B1 EXHAUSTIVE (5 layers) | Matches ADR-0073 line 114 enumeration |
| C | C1 INHERIT rule-stack | Matches F1 + ADR-0046 permissive offer (line 225) |
| D | D4 HYBRID (default + context-overrides + appeal-protocol) | Honors ADR-0041; honest to fact-vs-intent distinction; matches F1 §4.5 discipline |
| E | E1 No new slugs | Matches F1 structural discipline; F4 doctrine is rule-set not vocabulary |
| F | F1 Full registration (canon-review-protocol §1 + README + yaml if E2) | ADR-0042 + F1 precedent |
| G | G1 EXTEND | Matches ADR-0041:58 forward-ref verbatim; preserves ADR-0041 integrity |
| H | H2 ADR-0041 + F1 + adjacent ADRs (0043, 0044, 0046, 0049) | Matches F1 list for consistency |
| I | I1 NARROW (AI-summary = post-hoc description) | Avoids canon-object-class inflation; defers wider issues to F8 |
| J | J1 NARROW (F4 only) | No additional drift surfaced |

### J.2 Proposed foundation-doc outline (F1 template inherited)

1. **Frontmatter** (doc_id / doc_kind: foundation / status / depends_on)
2. **Intro** (3-5 lines): one-sentence name + scope framing + rule-statement
3. **Core Claim** (~15 lines): inter-layer precedence operationalizes the direction-of-derivation discipline from ADR-0041 across all canon representation layers; without explicit precedence, inter-layer conflicts become hidden authority conflicts
4. **Scope** (~20 lines): 5 layers in-scope (text / graph / sensor / attestation / agent-summary); out-of-scope (intra-modality → F1; response-to-mismatch → F5; failure-modes → F6; meta-layers like operator-ratification / historical-ADR / session-memory)
5. **Structural Doctrine — Rule-Level Stratification** (~30 lines): 3 Ostrom rule-levels applied to "who decides precedence?" at constitutional / collective-choice / operational
6. **Doctrine Per Layer** (~100-120 lines, 5 subsections): text / graph / sensor / attestation / agent-summary — each with:
   - principle statement (authority-claim at the layer)
   - rule-level decomposition (who sets / contests / applies)
   - inter-layer-conflict treatment (when this layer conflicts with others, how resolved)
7. **Precedence Rule — Default, Context-Overrides, Appeal-Protocol** (~40 lines, the D4 hybrid doctrine):
   - Default: text-authoritative for specification-text; sensor/attestation-authoritative for fact-reporting; graph/agent-summary derived
   - Context-overrides: domain-specific precedence (examples: commitment-pool balance, reproduction-continuity Evidence, pluriversal interpretations)
   - Appeal-protocol: rule-stack routing when default + context-overrides produce ambiguity
8. **Open Questions** (~20 lines): pluriversal interpretation-authority; AI-summary-authority-decay and model-lifecycle coupling; cross-modality oracle composition precedence; federated precedence across overlapping federations; revision-triggers-as-operational-evidence-base-matures
9. **Related** (~10 lines): ADR-0041 (primary anchor), F1 sensor-oracle-governance (template + sensor-layer intra-modality governance), ADR-0042 precedent, ADR-0046 rule-stack, ADR-0044 Evidence primitive, ADR-0063 sense-making-mode (agent-summary relevance), ADR-0073 (this promotion-ADR pattern), project-vision.md (9-primitive roster), governance-artifacts-and-graph-projections.md (§Dual Representation origin)

### J.3 ADR outline (ADR-0073 template inherited)

- Frontmatter: `doc_id: spore.canon-decision.representation-authority-foundation-doc-promotion`, `doc_kind: decision-record`, `adr_number: "0074"`, `opened-on: 2026-04-25`, `closed-on: 2026-04-25`, `decision: edit`, `r_claim_source: [spore.review.canon-first-principles-audit-v2-2026-04-22:3.3-item-3, spore.review.canon-first-principles-audit-v2-2026-04-22:6.4-item-4]`, `related_adrs: [spore:ADR-0041-text-authoritative-representation, spore:ADR-0042-dag-delete-structural-legitimacy-promote, spore:ADR-0044-core-thesis-primitive-roster-alignment, spore:ADR-0046-field-rule-level-stratification, spore:ADR-0049-reproduction-continuity-primitive-admission, spore:ADR-0063-participatory-sense-making-disposition, spore:ADR-0073-sensor-oracle-governance-foundation-doc-promotion]`, `affects_canon: [docs/foundations/representation-authority.md, docs/research/planning/canon-review-protocol.md, docs/README.md]`, `concepts: [coordination-substrate, governance-memory, memory-governance]`
- Body: Status / Context (ADR-0041 closed text-vs-graph; ADR-0073 F1 reserved inter-layer for F4; audit-v2 §3.3 item 3 + §6.4 item 4 forward-reference) / Decision (5-part atomic bundle matching F1 shape, minus yaml slug admission if E1) / Consequences (4-5 method-precedents + canon-state impact) / Evidence (5-lens convergence - Codex primary + Opus-4-7 concurs + ADR-0041 substrate) / Diff summary

### J.4 Projection

- **Preflight baseline**: 5 HEADs ✓
- **Session-atomic budget (execution window only)**: 15-22 min per brief §10; F1 was 524s (~8m44s); F4 expected similar pace under template inheritance
- **Preflight + Steps 0-2 handback**: 15-25 min per brief §10 — DONE now (~20 min elapsed)
- **Steps 3-7.5 execution (if ratified)**: separate session or continuation prompt

---

**End audit manifest.**
