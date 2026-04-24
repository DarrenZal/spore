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
  ADR-0041 (text-authoritative-representation, 2026-04-22) closed text-vs-graph precedence at governance-artifacts-and-graph-projections.md §Dual Representation and line 58 explicitly opens Phase 4 work: "Phase 4's representation-authority foundation doc (when authored) can build on this ADR as the text-vs-graph layer of a broader precedence hierarchy (text / graph / sensor / attestation)." F1 sensor-oracle-governance (ADR-0073, 2026-04-25) reserved inter-layer precedence for F4 at §Consequences line 114 and defers inter-layer authority-conflicts to F4 at sensor-oracle-governance.md:37 + :147. Audit-v2 §3.3 item 3 + §6.4 item 4 identified representation-authority as PARTIAL deficit (ADR-0041 covers 2 of 5 layers; remaining 3 — sensor / attestation / agent-summary — uncovered). Decision: admit new foundation doc at docs/foundations/representation-authority.md carrying D4 HYBRID precedence doctrine (default + context-overrides + appeal-protocol) across 5 representation layers (text / graph / sensor / attestation / agent-summary), inheriting ADR-0046 Ostrom 3-level rule-stratification + ADR-0041 text-authoritative default, preserving F1 intra-modality scope, acknowledging AI-summary-authority-decay asymmetry per F1 §6 precedent. Fact-vs-specification text-type distinction is the load-bearing principled-rule that reconciles ADR-0041 text-authoritative default with sensor/attestation authority over fact-reporting-text.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-scoping-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0074-f4-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0074-f4-decision-brief-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0074-f4-representation-authority-plan-2026-04-25.md
  - docs/research/canon-decisions/0041-text-authoritative-representation.md
  - docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md
  - docs/foundations/sensor-oracle-governance.md
  - docs/foundations/governance-artifacts-and-graph-projections.md
authorized-by: "canon-rebuild-phase-4-tier-a operator directive 2026-04-25 (second Tier A admission; 10-axis decision-brief child-defaults ratified A1/B1/C1/D4/E1/F1/G1/H2/I1/J1)"
queue_reference: "canon-first-principles-audit-v2-2026-04-22 §3.3 item 3 + §6.4 item 4 (representation-authority — Codex primary; Opus-4-7 concurs via ADR-0041 substrate)"
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

# ADR-0074 — Representation-Authority Foundation Doc Promotion

## Status

active (authored + activated 2026-04-25 under canon-rebuild Phase 4 Tier A second admission; closes ADR-0041 Phase 4 forward-reference)

## Context

Phase 4 of the canon-rebuild arc was defined in the 2026-04-22 canon-first-principles-audit-v2 (`tmp/canon-first-principles-audit-v2-2026-04-22.md` §6.4 lines 352–362) as "7–9 new foundation docs, priority-ordered." The 2026-04-25 Phase 4 scoping session ratified tiered admission. Tier A contains two admissions: F1 sensor-oracle-governance (landed 2026-04-25 as ADR-0073) and F4 representation-authority (this ADR).

Three prior canon artifacts explicitly reserved inter-layer precedence as F4 scope:

1. **ADR-0041 (text-authoritative-representation, 2026-04-22) line 58**: "Phase 4's representation-authority foundation doc (when authored) can build on this ADR as the text-vs-graph layer of a broader precedence hierarchy (text / graph / sensor / attestation)."
2. **ADR-0073 (F1) §Consequences line 114**: "F1 is **intra-modality** governance only. F4 representation-authority (next Tier A admission) handles **inter-layer precedence** (what wins when sensor-reading conflicts with text-authoritative canon, graph-projection, attestation-layer, or agent-summary). F1 scope boundary is preserved to prevent F4 preemption."
3. **F1 foundation doc (sensor-oracle-governance.md) lines 37 + 147**: defer inter-layer authority-conflicts to F4 by name.

Without F4, inter-layer conflicts become hidden authority conflicts — the same defect ADR-0041 closed at the text-vs-graph layer, replayed across the sensor / attestation / agent-summary layers.

ADR-0041 committed canon to text-authoritative representation at the text-vs-graph layer: text authors, graph derives, text wins when they disagree. F4 extends this direction-of-derivation discipline across the full 5-layer canon representation surface. The **fact-vs-specification text-type distinction** emerges as the load-bearing principled-rule: text-authoritative default applies to specification-text (vision, ADRs, doctrine, commitments-as-authored); sensor/attestation authority applies to fact-reporting-text (pool balances, attestation records, sensor readouts — where the text is a report of sensed/attested reality, not a specification of it). Without this distinction, ADR-0041 over-claims (every text wins, even when text is a stale report contradicted by live sensor data); without ADR-0041 preserved for specification-text, sensor-authority over-claims (sensor readings are treated as equivalently canonical to vision statements).

F1 (ADR-0073) established the Tier A template pattern: one ADR + one new foundation doc + canon-review-protocol §1 registration + docs/README.md registration + optional concepts yaml slug admission. F4 inherits that template directly under G1 EXTEND disposition (ADR-0041 preserved unchanged; F4 extends across additional layers).

## Decision

**Edit — four-part coordinated canon admission (atomic-bundle draft commit):**

1. **Create new foundation doc** at `docs/foundations/representation-authority.md` (~200-250 lines). Frontmatter: `doc_id: spore.representation-authority`, `doc_kind: foundation`, `status: draft → active`, `depends_on: [spore.project-vision, spore.governance-artifacts, spore.structural-legitimacy, spore.sensor-oracle-governance]`. Body structure:
   - §Intro (~5 lines) — names representation-authority as inter-layer precedence doctrine; frames as ADR-0041 extension
   - §1 Core Claim (~20 lines) — inter-layer precedence operationalizes direction-of-derivation across all canon representation layers; hidden-authority-conflict elimination
   - §2 Scope (~25 lines) — 5 layers in-scope (text / graph / sensor / attestation / agent-summary); out-of-scope (intra-modality → F1; response-to-mismatch → F5; failure-modes → F6; meta-layers → future)
   - §3 Structural Doctrine — Rule-Level Stratification (~30 lines) — inherits ADR-0046 Ostrom 3-level rule-stack for "who decides precedence?"
   - §4 Doctrine Per Layer (~100-120 lines, 5 subsections) — text / graph / sensor / attestation / agent-summary; principle statement + rule-level decomposition + inter-layer-conflict treatment per layer
   - §5 Precedence Rule — Default, Context-Overrides, Appeal-Protocol (~40 lines) — the D4 hybrid doctrine; specification-vs-fact-reporting text-type distinction as load-bearing principled-rule
   - §6 Open Questions (~20 lines) — pluriversal interpretation-authority / AI-summary-authority-decay / cross-modality composition / federated precedence / revision-triggers / Phase 5 tag-agnostic
   - §7 Related (~10 lines) — cross-refs to 7 prior ADRs + canon body

2. **Register foundation doc** in `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list. Insert `- docs/foundations/representation-authority.md` in alphabetical position between `- docs/foundations/relational-agency-and-holons.md` and `- docs/foundations/sensor-oracle-governance.md`.

3. **Register foundation doc** in `docs/README.md` Foundations listing. Insert new line in alphabetical position: `- [representation-authority.md](./foundations/representation-authority.md) — inter-layer precedence doctrine across the five canon representation layers (text / graph / sensor / attestation / agent-summary); extends ADR-0041 text-authoritative-representation; hybrid default + context-overrides + appeal-protocol per ADR-0046 rule-stack`.

4. **Cite 6 anchor ADRs** (0041 primary, 0042 precedent, 0044 Evidence verb, 0046 rule-stack, 0049 reproduction-continuity, 0063 sense-making-mode, 0073 F1) in `related_adrs:` frontmatter + foundation-doc §Related.

**E1 default preserves concepts yaml v15 unchanged**: foundation-doc name itself is not a slug (parallel to `sensor-oracle-governance` and `structural-legitimacy`, neither of which were admitted as slugs by their own foundation-doc ADRs). Internal concepts (the 5 layer names, the fact-vs-specification distinction) remain foundation-doc-internal vocabulary.

**Rationale for `edit` disposition**:

- **(a) Lens concurrence**: audit-v2 §3.3 item 3 + §6.4 item 4 identified F4 as PARTIAL deficit. Codex primary; Opus-4-7 concurs via ADR-0041 substrate (text-authoritative already blessed as default, extension-shape naturally implied). Not all-reviewer convergence (F1 had stronger concurrence) but substrate is mature: ADR-0041 established the template at one layer; ADR-0073 reserved the remaining layers for F4 explicitly.
- **(b) No opposition**: no audit opposed extending ADR-0041 to additional layers. Three prior canon artifacts explicitly forward-reference F4 by name.
- **(c) Held-tension check**: ADR-0001 (pluriversal-incommensurability) holds concepts `pluriversal-commoning` + `memory-governance`. Pluriversal interpretation-authority tensions across layers are flagged in F4 §6 Open Questions as canonically-acknowledged held-residue; they do NOT block admission — they operate at operational layer per ADR-0050 + ADR-0055 shape-match discipline.
- **(d) Forward-ref commitment honored**: ADR-0041 line 58 + ADR-0073 line 114 + F1 foundation doc lines 37 + 147 all forward-reference F4 by name. All honored in this ADR body + the new foundation doc.
- **(e) ADR-0042 precedent + F1 template honored**: shape-matches foundation-doc-via-ADR pattern; registration surfaces match (canon-review-protocol §1 + docs/README.md; yaml unchanged under E1).
- **(f) G1 EXTEND preserves ADR-0041 integrity**: ADR-0041 body unchanged; F4 extends across additional layers rather than superseding. Matches ADR-0041:58 forward-ref language verbatim ("build on this ADR as the text-vs-graph layer of a broader precedence hierarchy").

## Consequences

- The canon's representation-authority is now canonically legible across all five representation layers. Previously, ADR-0041 closed text-vs-graph precedence but left sensor / attestation / agent-summary as hidden authority-conflicts. F4 closes that gap.
- The **fact-vs-specification text-type distinction** is admitted as new principled-rule in Spore canon. Canon's text-authoritative default (ADR-0041) is preserved for specification-text (vision, ADRs, doctrine). Sensor/attestation authority is established for fact-reporting-text (pool balances, attestation records, readouts). This resolves a latent tension between ADR-0041 (text authoritative) and F1 sensor-oracle-governance (sensors ground Evidence) by recognizing they operate over different text-types.
- Ostrom 3-level rule-stack (ADR-0046 permissive offer) is inherited for "who decides precedence?" at each layer — second application of rule-stack inheritance at Phase 4 foundation layer (F1 first, F4 second), validating the template pattern for Tier B admissions (F3 / F5 / F6).
- Unresolved inter-layer disagreement is canon-legible via held-epistemic-tension pattern (inherited from F1 §4.5 multi-sensor-disagreement discipline + ADR-0001 held-tension). Canon does not force-resolve inter-layer conflicts where neither default nor context-override produces unambiguous resolution.
- F4 is **inter-layer** precedence only. Intra-modality governance is F1 scope; response-to-mismatch is F5 actuator-logic scope (forthcoming); failure-mode taxonomy is F6 scope (forthcoming); meta-layers (operator-ratification / historical-ADR / session-memory) are out-of-scope per I1 NARROW — session-memory may be addressed by F8 external-validation-loop if authored.
- Agent-summary layer scope is NARROW per I1: post-hoc description of canon + tooling-assisted summary of inputs. Does NOT include session-memory / claude-mem / retrospective artifacts (those are operator-facing meta-canon surfaces; F8 territory). Does NOT include canonical-AI-interpretations routinely consulted as authority (I2 scope; deferred pending operational pressure).
- ADR-0041 body preserved unchanged under G1 EXTEND. ADR-0041 remains the canonical commitment at the text-vs-graph layer; F4 is the canonical commitment across the full 5-layer inter-layer surface.
- ADR-0063 (participatory-sense-making) Signal sense-making-mode scope-conditioning is inherited at §4.5 Agent-Summary (how the summary is produced — sender-receiver-transmission vs. constitutively-interactive-emergence — shapes authority-weight).
- Canon object-class inventory preserved at 4 categories (primitives / doctrines / modes / properties) + derived glossary slugs + patterns. No new canon-object-class introduced. Foundation docs remain the structural carrier for doctrines-at-Field-layer.
- Foundation-doc count: 8 → 9 (excluding lexicon entries). Foundation docs post-F4: `federation-protocol`, `governance-artifacts-and-graph-projections`, `holonic-network-architecture`, `relational-agency-and-holons`, **`representation-authority` (new)**, `sensor-oracle-governance`, `spore-instance-model`, `structural-legitimacy`, plus 3 lexicon entries.
- Concepts yaml v15 preserved under E1. No new slugs admitted; F4's principled-rule vocabulary (fact-reporting-text, specification-text, appeal-protocol, precedence-layer) remains foundation-doc-internal.
- Canon-rebuild arc: 25 → 26 canon-decisions. F4 closes ADR-0041 Phase 4 forward-reference and completes Tier A Phase 4 (F1 + F4 both landed; Tier B next per operator-queue).
- Validator 9/30 held exact (no new doc_kind, no new status values, no new enum values).
- Phase 5 tag-agnostic per F1 precedent. F4 foundation doc is deliberately un-tagged at section level; Phase 5 sweep will tag sections across all canon docs in one pass.
- F1 foundation doc body UNCHANGED. F1 correctly deferred inter-layer to F4 at lines 37 + 147; those deferrals become active cross-references with F4 landed.
- `docs/foundations/governance-artifacts-and-graph-projections.md` §Dual Representation body UNCHANGED. ADR-0041's text-vs-graph canon-body site is preserved; F4 extends in its own foundation doc rather than editing there.

### Method-precedents (4 new)

1. **Second Tier A foundation-doc admission** — ADR-0074 validates F1's template pattern as REUSABLE (not one-off). Template attributes inherited: ADR-0042 shape + unified abstraction-where-operational-heterogeneity-exists + rule-stratification inheritance + forward-ref-cite-all + no back-annotation of forward-ref ADRs. Pattern now cleanly available for Tier B admissions (F3 actor-governance / F5 actuator-logic / F6 failure-modes) and Tier C admissions (F7 / F8 / F2 / F9) with two template applications as precedent.
2. **Inter-layer precedence via D4 hybrid (default + context-overrides + appeal-protocol)** — first operational use in Spore canon. Reusable doctrinal shape for any multi-representation-surface canon-object where static precedence-ordering over-claims, pure protocol-based under-specifies, and context-dependence alone is insufficient. The shape inherits F1 §4.5 multi-sensor-disagreement discipline (protocol-based contestation + rule-stack routing) and extends to the inter-layer case. Hybrid-default-override-appeal may be reusable at F5 actuator-logic where response-to-mismatch requires similar treatment.
3. **Fact-vs-specification text-type distinction as load-bearing principled-rule** — NOVEL canon-method contribution. Resolves apparent ADR-0041 (text-authoritative) vs F1 sensor-oracle-governance (sensors ground Evidence) tension by recognizing they're authoritative for different TEXT-TYPES: specification-text (vision / ADRs / doctrine / commitments-as-authored) is text-authoritative per ADR-0041; fact-reporting-text (sensor readouts / attestation records / pool-balance statements) is sensor/attestation-authoritative. Reusable for future representation-layer doctrine and for any future canon tension arising from "which authoritative source wins?" Two load-bearing implications: (i) canon body is mixed-text-type at the page level (most canon is specification-text; fact-reporting-text appears in evidence-log contexts); (ii) the distinction is context-of-use, not intrinsic-to-the-layer (the same sentence could function as specification or as report depending on its invocation context).
4. **ADR-0041 EXTEND-via-new-foundation-doc pattern (G1)** — reusable when prior ADR explicitly opens future foundation-doc work via forward-ref (as ADR-0041:58 opened F4). Characteristics: prior ADR body preserved unchanged; new foundation doc EXTENDS across additional scope-surfaces named in the forward-ref; ADR-0041:58 forward-ref language matched verbatim in the new foundation doc's §Intro and §Core Claim sections; prior ADR cited as primary anchor in new foundation doc's §Related. Distinct from G2 (supersede prior ADR) and G3 (complement alongside prior ADR with no scope-extension). Minimizes canon churn while honoring forward-commitments.

## Evidence

- cluster_key: `docs/foundations/representation-authority.md:foundation-doc-promote + ADR-0041-extend-to-5-layer-precedence-hierarchy`
- supports: audit-v2 §3.3 item 3 (Codex flag: "'governance from artifacts' is ambiguous when multiple artifacts disagree") + §6.4 item 4 (representation-authority missing foundation doc) + ADR-0041 §58 forward-ref + ADR-0073 §114 forward-ref + F1 foundation-doc §37 + §147 forward-refs
- opposes: 0 (no audit opposed ADR-0041 extension to additional layers; no audit defended hidden inter-layer authority-conflicts)
- source: canon-first-principles-audit-v2 §3.3 item 3 + §6.4 item 4 (Codex primary; Opus-4-7 concurs)
- Supporting canon: `docs/research/canon-decisions/0041-text-authoritative-representation.md` (primary anchor; text-vs-graph precedence); `docs/foundations/sensor-oracle-governance.md` (F1 intra-modality governance; F4 extends to inter-layer); `docs/foundations/governance-artifacts-and-graph-projections.md` §Dual Representation (ADR-0041 canon-body site); `docs/project-vision.md` (9-primitive roster + Evidence verb)
- Opposing bridge notes: none
- Cross-project echoes: none at admission time (Spore-only); IC + PM + koi-processor + darren-workflow read-only throughout. Cross-repo propagation (if any) deferred to future ic:ADR-NNNN + pm:ADR-NNNN follow-on work per ic:ADR-0019 + pm:ADR-0015 cross-repo alignment precedent.
- Held-tension overlap: checked 2026-04-25. ADR-0001 pluriversal-incommensurability (`pluriversal-commoning`, `memory-governance`) does not block F4 admission. Pluriversal interpretation-authority tensions across layers flagged as canonically-acknowledged held-residue in F4 §6 Open Questions; operate at operational layer per ADR-0050 + ADR-0055 shape-match discipline.
- Adaptation note: R-claim source cites canon-first-principles-audit-v2 item IDs. Foundation-doc registration via canon-review-protocol §1 update + docs/README.md is canon-scope extension authorized under foundation-repair-flexibility memory (inherits ADR-0042 + ADR-0073 precedent authorizations).

## Diff summary

**File 1**: `docs/research/canon-decisions/0074-representation-authority-foundation-doc-promotion.md` (NEW, this ADR, ~150 lines).

**File 2**: `docs/foundations/representation-authority.md` (NEW, ~200-250 lines):
- Frontmatter: `doc_id: spore.representation-authority`, `doc_kind: foundation`, `status: draft → active`, `depends_on: [spore.project-vision, spore.governance-artifacts, spore.structural-legitimacy, spore.sensor-oracle-governance]`
- Body: 7-section structure per §Decision enumeration (Intro + Core Claim / Scope / Structural Doctrine / Doctrine Per Layer / Precedence Rule / Open Questions / Related)

**File 3**: `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list:
- Insert `- docs/foundations/representation-authority.md` in alphabetical position between `relational-agency-and-holons.md` and `sensor-oracle-governance.md`

**File 4**: `docs/README.md` Foundations listing:
- Insert new line in alphabetical position: `- [representation-authority.md](./foundations/representation-authority.md) — inter-layer precedence doctrine across the five canon representation layers (text / graph / sensor / attestation / agent-summary); extends ADR-0041 text-authoritative-representation; hybrid default + context-overrides + appeal-protocol per ADR-0046 rule-stack`

Four-file coordinated atomic-bundle edit. Net ~350-410 lines added (new ADR + new foundation doc) + 2 registration lines. Concepts yaml v15 unchanged under E1.
