# ADR-0074 F4 Representation-Authority — Decision-Brief

**Date**: 2026-04-25
**Status**: Step 2 handback — awaiting operator ratification on 10 axes (A-J)
**Type**: Tier A Phase 4 foundation-doc admission, second in sequence after F1 (ADR-0073 sensor-oracle-governance)
**Session-atomic projection**: 15-22 min execution window (Steps 3-7.5) under child-defaults

---

## 1. One-paragraph summary

F4 `representation-authority.md` extends ADR-0041 (text-authoritative-representation, 2026-04-22) from the 2-layer text-vs-graph precedence doctrine to the full **5-layer inter-layer precedence doctrine** across canon representation surfaces (text / graph / sensor / attestation / agent-summary). F1 (ADR-0073, 2026-04-25) established the Tier A template and reserved inter-layer precedence for F4 at §Consequences line 114. Child-default proposes **D4 HYBRID** precedence-shape (default + context-overrides + appeal-protocol) — honors ADR-0041 text-authoritative for specification-text, acknowledges sensor/attestation operational primacy for fact-reporting-text, routes genuinely-contested cases through the ADR-0046 Ostrom 3-level rule-stack. Under **G1 EXTEND**, ADR-0041 body is preserved unchanged. Under **E1 no new slugs**, concepts yaml v15 unchanged.

---

## 2. Layer Inventory

Per ADR-0073 §Consequences line 114, F4 scope covers 5 representation layers:

| # | Layer | Provenance | Current canon anchor | Authority shape |
|---|-------|------------|----------------------|-----------------|
| 1 | Text-authoritative canon | markdown + YAML frontmatter (humans author) | ADR-0041 §Decision | AUTHORITATIVE for specification |
| 2 | Graph-derived canon | spec-DAG + entity registry (tooling parses) | ADR-0041 §Decision + ADR-0058 | DERIVED (projection of text) |
| 3 | Sensor readings | ecological / economic / social instrument streams | F1 (ADR-0073) §3 | GROUNDED in phenomenon; governed at Field layer |
| 4 | Attestation | sworn signal / witness / community attestation | F1 §3 | GROUNDED in human judgment; governed at Field layer |
| 5 | Agent-summary | LLM distillation / agent-report / summarizer | F1 §3 | DERIVED from inputs via agent process |

Three edge-case layers audited and ruled out-of-scope for F4 under I1 NARROW (see H-axis + I-axis):
- Operator-ratification (meta-layer; process that produces text-authoritative, not a representation-layer itself)
- Historical-ADR state (addressed by ADR-0067 enum-addition lifecycle)
- Session-memory / claude-mem / retrospective (operator-facing meta-canon; F8 external-validation-loop scope if ever authored)

---

## 3. The 10-Axis Decision-Brief

| Axis | Description | Options | Child default | Primary rationale |
|------|-------------|---------|---------------|-------------------|
| **A** | Foundation-doc shape | A1 Full-doctrine (~200-250 lines) / A2 Sketch-then-expand / A3 Principles-only | **A1** | Matches F1 template precedent |
| **B** | Layer inventory | B1 EXHAUSTIVE 5-layer / B2 NARROW 3-layer (omit text+graph, inline-cite ADR-0041) / B3 EXPANDED 6+ layer (+ operator-ratification / historical-ADR / session-memory) | **B1** | Matches ADR-0073:114 enumeration; avoids underclaim AND overclaim |
| **C** | Rule-stratification inheritance (ADR-0046) | C1 INHERIT / C2 NO inheritance / C3 PARTIAL (contested cases only) | **C1** | Matches F1 precedent + ADR-0046:225 permissive offer |
| **D** | Precedence-shape doctrine | D1 PRECEDENCE-ORDERED (static) / D2 CONTEXT-DEPENDENT / D3 PROTOCOL-BASED (appeal-only) / D4 HYBRID (default + overrides + appeal) | **D4** | Honest to fact-vs-intent distinction; matches F1 §4.5 discipline; honors ADR-0041 default; genuine resolution without over-prescribed algorithms |
| **E** | Concepts yaml slug admissions | E1 NO new slugs / E2 Admit 1-2 (`representation-authority` / `precedence-layer`) / E3 Deferred | **E1** | Matches F1 structural discipline (foundation-doc name is not a slug; F1 admitted only ADR-0049-forward-ref'd subspecies) |
| **F** | Registration shape | F1 Full (canon-review-protocol §1 + README + yaml if E2) / F2 README-only / F3 None | **F1** | ADR-0042 + F1 precedent |
| **G** | ADR-0041 relationship | G1 EXTEND (ADR-0041 preserved) / G2 COMPLETE (supersede ADR-0041) / G3 COMPLEMENT (stand alongside with cross-ref) | **G1** | Matches ADR-0041:58 forward-ref verbatim ("build on this ADR as the text-vs-graph layer of a broader precedence hierarchy"); minimizes canon churn |
| **H** | Forward-ref citations | H1 ADR-0041 + F1 only / H2 + adjacent ADRs (0042, 0044, 0046, 0049) / H3 + newer ADRs (0063 sense-making-mode, 0065 pattern-library) | **H2** | Matches F1 list for consistency; ADR-0063 added because sense-making-mode is load-bearing for agent-summary derivation (I-axis) |
| **I** | Agent-summary scope | I1 NARROW (post-hoc description only) / I2 MEDIUM (+ canonical-AI-interpretations) / I3 WIDE (+ session-memory / claude-mem / retrospective) | **I1** | Avoids canon-object-class inflation; defers wider issues to F8; F4 scope is representation-authority not operator-memory-surface |
| **J** | Global-coherence scope | J1 NARROW (F4 only) / J2 NARROW-WIDE (if Step 0.5 audit surfaces drift) | **J1** | Step 0.5 audit surfaced NO additional canon drift |

---

## 4. D4 Hybrid doctrine — detailed sketch

F4's central structural move is the precedence-shape at §5 of the foundation doc. The hybrid pattern:

### 4.1 Default

- **Specification-text default** (text-about-what-should-be — visions, commitments, agreements, design choices): **text-authoritative** per ADR-0041. Graph derives from text. Sensor/attestation are read-but-not-authoritative for the specification itself. Agent-summary derives from text + cited sources.
- **Fact-reporting-text default** (text-about-what-is — claims about pool balance, meeting attendance, sensor state): **sensor/attestation authoritative** where available (because the text is a report of sensed/attested reality, not a specification of it). Text is a derived record. Agent-summary derives.

The fact-vs-specification distinction is load-bearing. ADR-0041 implicitly assumed specification-text; most canon body IS specification. Fact-reporting-text is narrower (sensor readouts, pool-state records, attestation records) but real.

### 4.2 Context-Overrides

Domain-specific precedence-overrides within a given Spore instance or federation:
- **Commitment-pool balance**: sensor > text (on-chain balance authoritative over any canon claim about balance)
- **Pluriversal-context**: ADR-0001 held-tension — no single layer wins; explicit non-resolution is canon-legible
- **Reproduction-continuity Evidence**: F1 §5 governs longitudinal-attestation vs single-reading Evidence subspecies; F4 routes to F1 for these cases
- **Federation-scale sensor-sovereignty**: federated precedence-rules may diverge from instance-level defaults (flagged in Open Questions)

### 4.3 Appeal-Protocol

When default + context-overrides produce ambiguity or are contested, the doctrine routes adjudication through the ADR-0046 Ostrom 3-level rule-stack:

- **Operational-rule routing**: routine application of precedence (e.g., "which sensor reading is canonical for this pool-state record")
- **Collective-choice escalation**: disputes about which context-override applies, or whether the default is being correctly invoked
- **Constitutional-rule escalation**: disputes about the precedence-regime itself (is text-authoritative the right default for this class of canon? should a specific domain have a context-override?)

### 4.4 Unresolved inter-layer disagreement as held-epistemic-tension

Per F1 §4.5 discipline and ADR-0001 held-tension pattern, some inter-layer disagreements are canon-legibly held rather than force-resolved. F4 doctrine inherits this discipline explicitly: where neither default nor context-override produces unambiguous resolution and the rule-stack has not settled the matter, the disagreement is tracked as held-epistemic-tension (not collapsed into one layer winning by fiat).

---

## 5. Ambiguity flags (genuinely open for operator)

### 5.1 D-axis: D4 HYBRID is child-audit lean, but operator may prefer D1 or D3

- **D1 PRECEDENCE-ORDERED**: simpler (single static ordering: text > graph > attestation > sensor > agent-summary); cleanest for readers; may over-claim because doesn't honor fact-vs-intent distinction
- **D3 PROTOCOL-BASED**: most principled (all conflicts route through appeal-protocol; no static ordering); may under-specify common case; readers still want "text wins for specification" as a default
- **D4 HYBRID** (audit lean): default + context-overrides + appeal — most honest to operational reality but more complex

**Trade-off to consider**: simplicity (D1) vs honesty-to-operational-reality (D4) vs principled-minimality (D3).

### 5.2 G-axis: G1 EXTEND preserves ADR-0041; G2 COMPLETE would make F4 the single canonical doctrine

- **G1 EXTEND** (audit lean): ADR-0041 preserved as canonical for text-vs-graph; F4 layers additional layers on top. Matches forward-ref at ADR-0041:58 verbatim.
- **G2 COMPLETE**: F4 becomes the single canonical doctrine; ADR-0041 referenced as historical. Would require ADR-0041 supersede-via-prose move. Adds canon churn.

**Trade-off**: preserve-past-ADRs (G1) vs cleanest-unified-doctrine (G2).

### 5.3 I-axis: I1 NARROW vs I2 MEDIUM for agent-summary

- **I1 NARROW** (audit lean): agent-summary is post-hoc description of canon; not canonical representation
- **I2 MEDIUM**: agent-summary includes canonical-AI-interpretations routinely consulted (e.g., a canon-chat-bot that users rely on). F4 would need to handle this differently (more authoritative status than pure post-hoc).

**Trade-off**: avoid-overreach (I1) vs acknowledge-that-AI-interpretations-are-already-consulted (I2).

### 5.4 E-axis: E1 NO NEW SLUGS vs E2 admit 1-2

- **E1** (audit lean): no yaml change. Foundation-doc-name (`representation-authority`) is not itself a slug (parallel to `sensor-oracle-governance` which F1 did not admit).
- **E2**: admit `representation-authority` and/or `precedence-layer` as glossary slugs.

Low-stakes ambiguity; either choice works. E1 is parsimonious default.

---

## 6. Session-atomic projection

**Child-default execution** (A1/B1/C1/D4/E1/F1/G1/H2/I1/J1): 15-22 min within 2700s budget

Breakdown:
- Step 3 preflight re-verify: 30s
- Step 4 allowlisted edits: 10-15 min (2 new files + 2 file inserts)
- Step 5 validator + ACs: 1-2 min
- Step 6 draft commit: 30s
- Step 7 flip draft→active: 1-2 min
- Step 7.5 active commit + verification manifest: 30s

**Scope-modifier scenarios**:
- If E2 ratified (add yaml slug admission): +2-3 min for yaml edit + v16 bump
- If G2 ratified (supersede ADR-0041): +3-5 min for ADR-0041 status transition + supersede-via-prose
- If J2 ratified (NARROW-WIDE drift repair): time depends on surfaced items (audit found NONE, so J2 has no content currently)

---

## 7. Handback statement

Awaiting ratification on A/B/C/D/E/F/G/H/I/J. Child-defaults:

- **A1** Full-doctrine
- **B1** EXHAUSTIVE 5-layer (text / graph / sensor / attestation / agent-summary)
- **C1** INHERIT ADR-0046 rule-stack
- **D4** HYBRID precedence-shape (default + context-overrides + appeal-protocol)
- **E1** No new slugs (concepts yaml v15 preserved)
- **F1** Full registration (canon-review-protocol §1 + README; yaml only if E2)
- **G1** EXTEND ADR-0041 (ADR-0041 body preserved)
- **H2** Adjacent ADRs (0041, 0042, 0044, 0046, 0049, 0063, 0073) cited in related_adrs
- **I1** NARROW agent-summary scope (post-hoc description only)
- **J1** NARROW global-coherence scope (F4 only; no drift surfaced)

**No Step 3+ execution without explicit operator approval via SendMessage continuation.**

Artifacts ready for review:
- `tmp/adr-0074-f4-preflight-manifest-2026-04-25.txt`
- `tmp/adr-0074-f4-audit-manifest-2026-04-25.md`
- `tmp/adr-0074-f4-representation-authority-plan-2026-04-25.md`
- `tmp/adr-0074-f4-decision-brief-2026-04-25.md` (this file)

If operator ratifies defaults: resume at Step 3 with full execution (15-22 min projected).

If operator modifies any axis: plan re-drafts the specific axis and we loop; then resume at Step 3.

If operator requests `/review-plan` 2-round pass before ratification: run review-loop with known-ceiling discipline (accept at round 2).

---

**End decision-brief.**
