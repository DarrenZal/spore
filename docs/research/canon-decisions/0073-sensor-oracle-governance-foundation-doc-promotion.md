---
doc_id: spore.canon-decision.sensor-oracle-governance-foundation-doc-promotion
doc_kind: decision-record
status: active
adr_number: "0073"
opened-on: 2026-04-25
closed-on: 2026-04-25
decision: edit
r_claim_source:
  - spore.review.canon-first-principles-audit-v2-2026-04-22:6.4-item-1
  - spore.review.canon-first-principles-audit-v2-2026-04-22:3.3-item-1
r_claim_statement: |
  Audit-v2 §6.4 item 1 (all-reviewer convergence) + §3.3 item 1: canon names sensors as Evidence-ground (governance-artifacts-and-graph-projections.md:134-143 enumerates ecological / economic / social sensors) but has NO governance doctrine for sensor selection, calibration, maintainer assignment, proxy contestation, multi-sensor disagreement, interpretation authority, or absent-evidence handling. Three prior ADRs forward-reference this deficit as Phase 4 canon-authoring target (ADR-0043 line 87, ADR-0044 line 168, ADR-0049 line 179) and one permissive offer (ADR-0046 line 225) invites Field 3-level rule-stack inheritance. F1 sensor-oracle-governance is the highest-priority Phase 4 foundation-doc deficit and is the first Tier A admission of the 9-doc Phase 4 sequence. Decision: admit a new foundation doc at docs/foundations/sensor-oracle-governance.md carrying unified-modality principled-rule doctrine across machine sensors + human attestation + AI-agent-generated summaries, inheriting Ostrom 3-level rule-stratification from ADR-0046, preserving the reproductive-commoning / care-commoning / reproduction-continuity three-way distinction per ADR-0049, and naming longitudinal-attestation + replication-regime as Evidence subspecies.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-scoping-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0073-f1-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0073-f1-decision-brief-2026-04-25.md
  - docs/foundations/governance-artifacts-and-graph-projections.md
  - docs/foundations/structural-legitimacy.md
  - docs/project-vision.md
authorized-by: "canon-rebuild-phase-4-tier-a operator directive 2026-04-25 (Phase 4 scoping plan ratified; F1 first Tier A admission; 10-axis decision-brief child-defaults ratified A1/B1/C1/D2/E1/F1/G2/H3/I1+I3/J1)"
queue_reference: "canon-first-principles-audit-v2-2026-04-22 §6.4 item 1 (sensor/oracle governance — all reviewers converge) + §3.3 item 1"
affects_canon:
  - docs/foundations/sensor-oracle-governance.md
  - docs/research/planning/canon-review-protocol.md
  - docs/README.md
  - docs/research/concepts-p2p-wiki.yaml
related_adrs:
  - spore:ADR-0042-dag-delete-structural-legitimacy-promote
  - spore:ADR-0043-federation-protocol-rename
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0046-field-rule-level-stratification
  - spore:ADR-0049-reproduction-continuity-primitive-admission
  - spore:ADR-0062-membrane-as-self-produced-disposition
  - spore:ADR-0063-participatory-sense-making-disposition
  - spore:ADR-0064-co-presence-field-condition-disposition
concepts:
  - attestation-of-execution
  - reproduction-continuity
  - reproductive-commoning
  - care-commoning
  - operational-rule
  - collective-choice-rule
  - constitutional-rule
  - longitudinal-attestation
  - replication-regime
---

# ADR-0073 — Sensor and Oracle Governance Foundation Doc Promotion

## Status

active (authored + activated 2026-04-25 under canon-rebuild Phase 4 Tier A first admission)

## Context

Phase 4 of the canon-rebuild arc was defined in the 2026-04-22 canon-first-principles-audit-v2 (`tmp/canon-first-principles-audit-v2-2026-04-22.md` §6.4, lines 352–362) as "7–9 new foundation docs, priority-ordered." The 2026-04-25 Phase 4 scoping session (plan: `tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md`; audit: `tmp/phase-4-scoping-audit-manifest-2026-04-25.md`) confirmed all 9 deficits (F1–F9) still hold against current canon state (HEAD `8867acc`), with revised tiering:

- **Tier A (must-land-first)**: F1 sensor-oracle-governance + F4 representation-authority
- **Tier B (mid-priority)**: F3 actor-governance + F5 actuator-logic + F6 failure-modes
- **Tier C (defer-pending)**: F7 minimum-viable-spore-instance + F8 external-validation-loop + F2 translation-mapping-governance + F9 maintenance-economics

F1 sensor-oracle-governance is the top priority because:

1. **All-reviewer convergence** at audit-v2 §6.4 item 1 (Codex, Opus-4-7, Lens W, Lens O, v1 — all flag F1 as top missing foundation).
2. **Three prior ADRs forward-reference it**: ADR-0043 line 87 (naming-consistency inheritance), ADR-0044 line 168 ("reinforces Evidence primitive earning per Phase 1 C-14 finding"), ADR-0049 line 179 ("should name the reproductive-Evidence reading (longitudinal attestation; replication-regime) as explicit subspecies of Evidence operating in reproduction-continuity context").
3. **ADR-0046 line 225 permissively offers** Field 3-level rule-stack inheritance at sensor-and-oracle-governance layer.
4. **Canon currently names sensors without doctrine**: `docs/foundations/governance-artifacts-and-graph-projections.md:134-143` §Grounding Through Sensors enumerates ecological / economic / social sensor kinds but provides no doctrine for selection, calibration, maintainer roles, contestation, disagreement, interpretation-authority, or absent-evidence handling. Evidence primitive (ADR-0044) is incomplete at Field governance layer without this doctrine.
5. **F4/F5/F6 depend on F1**: F4 representation-authority needs sensor-layer precedence; F5 actuator-logic needs sensor-input doctrine; F6 failure-modes needs sensor-failure taxonomy.

Per operator Q5 ratification in Phase 4 scoping: F1 covers three modalities in a single foundation doc — machine sensors (instrumented devices), human attestation (witness / sworn evidence / community signal), and AI-agent-generated summaries (LLM distillations, agent reports, signal-chain summarizers). Per operator Q6 ratification: F1 is tag-agnostic (Phase 5 handles section-level status labels as a separate sweep).

ADR-0042 (dag-delete + structural-legitimacy-promote, 2026-04-22) is the authoritative template for foundation-doc promotion via ADR: one ADR + one new foundation doc + canon-review-protocol §1 registration + docs/README.md registration (+ optional concepts yaml slug admission). ADR-0073 inherits that shape directly, extending it with slug-admission piggyback on the foundation-doc ADR rather than deferring to a separate glossary-bundle ADR.

## Decision

**Edit — five-part coordinated canon admission (atomic-bundle draft commit):**

1. **Create new foundation doc** at `docs/foundations/sensor-oracle-governance.md` (~200–250 lines). Frontmatter: `doc_id: spore.sensor-oracle-governance`, `doc_kind: foundation`, `status: draft → active`, `depends_on: [spore.project-vision, spore.governance-artifacts, spore.structural-legitimacy]`. Body structure:
   - §1 Core Claim (~15 lines) — sensor-and-oracle-governance operationalizes Evidence-primitive governance at Field layer; reinforces ADR-0044 Evidence verb
   - §2 Scope (~20 lines) — unified three-modality doctrine via principled-rule abstraction; intra-modality governance only (inter-layer precedence is F4 scope; response-to-mismatch is F5 scope)
   - §3 Structural Doctrine — Rule-Level Stratification (~30 lines) — inherits ADR-0046 Ostrom 3-level rule-stack across all 7 concerns
   - §4 Doctrine Per Concern (~100–120 lines, 7 subsections) — sensor selection / calibration / maintainer assignment / proxy contestation / multi-sensor disagreement / interpretation authority / absent-evidence handling
   - §5 Reproductive Evidence (~15 lines) — longitudinal-attestation + replication-regime as Evidence subspecies per ADR-0049 §179; three-way distinction preservation (reproductive-commoning ≠ care-commoning ≠ reproduction-continuity)
   - §6 Open Questions (~20 lines) — pluriversal interpretation / cross-modality oracle composition / federated sensor-sovereignty / Phase 5 tag-agnostic note
   - §7 Related (~10 lines) — cross-refs to Evidence-primitive canon + 8 supporting ADRs

2. **Register foundation doc** in `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list. Insert `- docs/foundations/sensor-oracle-governance.md` between `spore-instance-model.md` and `structural-legitimacy.md` entries (alphabetical order within the list).

3. **Register foundation doc** in `docs/README.md` Foundations listing. Insert new line after `structural-legitimacy.md` line 28: `- [sensor-oracle-governance.md](./foundations/sensor-oracle-governance.md) — doctrine for sensor selection, calibration, maintainer roles, contestation, disagreement, interpretation authority, and absent-evidence handling across machine / human / AI-summary modalities`.

4. **Update `docs/research/concepts-p2p-wiki.yaml` v14 → v15** with two new derived glossary slugs:
   - `longitudinal-attestation` — Evidence subspecies where the grounding is not a single-moment reading but a sustained track-record across reproduction cycles (per ADR-0049 §179 direct naming)
   - `replication-regime` — Evidence subspecies where the grounding is the sustained capacity to re-enact (repeated measurement, re-attestation, re-summarization) across generational change of participants (per ADR-0049 §179 direct naming)

5. **Cite all 4 forward-referencing ADRs** (0043, 0044, 0046, 0049) + ADR-0042 precedent + 3 scope-conditioning ADRs (0062, 0063, 0064) in `related_adrs:` frontmatter + foundation-doc §Related. No back-annotation of forward-ref ADRs — forward-ref ADRs are historical records, not live-updated docs.

**Rationale for `edit` disposition**:

- **(a) Lens concurrence**: audit-v2 §6.4 item 1 is flagged by Codex + Opus-4-7 + Lens W + Lens O + v1 — all 5 reviewer lenses converge. §3.3 item 1 + §9 high-confidence block line 481 + §2.14 p.11 cross-validate. Strongest form of lens-concurrence evidence.
- **(b) No opposition**: no audit defended canon's current doctrine-less sensor-naming. Three prior ADRs explicitly forward-reference F1 as future Phase 4 work.
- **(c) Held-tension check**: ADR-0001 (pluriversal-incommensurability) holds concepts `pluriversal-commoning` + `memory-governance`. Neither directly overlaps F1's concepts list. Affirmative: pluriversal interpretation-authority tensions are flagged in foundation-doc §6 Open Questions; they do NOT block foundation-layer admission — they operate as canonically-acknowledged held-residue at operational layer (shape-match discipline per ADR-0050 + ADR-0055).
- **(d) Forward-ref commitment honored**: ADR-0044 §168 ("reinforces Evidence primitive earning") + ADR-0049 §179 ("should name longitudinal-attestation + replication-regime as Evidence subspecies") + ADR-0046 §225 ("may elaborate Field-stratification") — all three forward-ref promises fulfilled in F1 foundation doc body.
- **(e) ADR-0042 precedent honored**: shape-match with structural-legitimacy promotion; registration surfaces match (canon-review-protocol §1 + docs/README.md + concepts yaml).

## Consequences

- The canon's Evidence-primitive earning is reinforced at Field governance layer. Previously, the Evidence verb (ADR-0044 roster) had doctrinal support at primitive-definition layer but no governance doctrine for the instruments producing Evidence inputs. F1 closes that gap.
- The three modalities (machine sensor / human attestation / AI-agent-generated summary) now have canon-legible unified doctrine at foundation layer via principled-rule abstraction — not three sub-doctrines, not parameterized per-modality tables, but one doctrine whose rules apply across modalities with operationally-named exceptions where modality heterogeneity is genuinely load-bearing.
- Ostrom 3-level rule-stack (operational / collective-choice / constitutional) is inherited from ADR-0046's permissive offer, giving F1's 7 concerns structural clarity AND setting a reusable template for F2 translation-mapping-governance / F3 actor-governance / F4 representation-authority / F5 actuator-logic / F6 failure-modes (Tier A + B Phase 4 admissions).
- Reproductive-Evidence (longitudinal-attestation + replication-regime) named as explicit Evidence subspecies per ADR-0049 §179. Three-way distinction (reproductive-commoning / care-commoning / reproduction-continuity) preserved: F1's §5 operates at the primitive-verb layer (reproduction-continuity per ADR-0049), NOT at the visibility-doctrine (reproductive-commoning per ADR-0002) or asymmetric-relational-doctrine (care-commoning per ADR-0045) layers.
- F1 is **intra-modality** governance only. F4 representation-authority (next Tier A admission) handles **inter-layer precedence** (what wins when sensor-reading conflicts with text-authoritative canon, graph-projection, attestation-layer, or agent-summary). F1 scope boundary is preserved to prevent F4 preemption.
- Interpretation-authority concern inherits ADR-0063 participatory-sense-making sense-making-mode scope-conditioning: for interpretation-authority on a given sensor, sense-making may operate in sender-receiver-transmission mode OR in constitutively-interactive-emergence mode depending on context. F1 doctrine accepts both modes; foundation-layer doesn't pick one.
- Absent-evidence handling operates via contextual principled-rule: continuity-constituted phenomena (water quality, ongoing relationships, commitment-pool state) default to state-persistence; event-constituted phenomena (settlement emission, sworn witness event, meeting-attendance) default to epistemic-gap. This principled-rule is load-bearing for reproductive-Evidence subspecies per ADR-0049 and for ADR-0064 co-presence-mode scope-conditioning.
- Proxy contestation + multi-sensor disagreement operate under G2 protocol-based framing routed through the 3-level rule-stack; foundation doctrine does NOT prescribe aggregation algorithms (those belong to pattern/protocol layer).
- Canon object-class inventory preserved at 4 categories (primitives / doctrines / modes / properties + derived glossary slugs + patterns). No new canon-object-class introduced; foundation docs remain the structural carrier for doctrines-at-Field-layer.
- Foundation-doc count: 7 → 8 (excluding lexicon entries). Foundation docs: `federation-protocol`, `governance-artifacts-and-graph-projections`, `holonic-network-architecture`, `relational-agency-and-holons`, `spore-instance-model`, `structural-legitimacy`, **`sensor-oracle-governance` (new)**, plus 3 lexicon entries.
- Concepts yaml v14 → v15: 6 derived glossary slugs → 8 (longitudinal-attestation + replication-regime admitted per ADR-0049 forward-ref). Validator 9/30 held exact (no new doc_kind, no new status values, no new enum values).
- Canon-rebuild arc: 24 canon-decisions → 25 (ADR-0073 is first Tier A admission of Phase 4; first ADR in the 2026-04-25 arc-extension).
- Phase 5 tag-agnostic per operator Q6 ratification. F1 foundation doc is deliberately un-tagged at section level; Phase 5 sweep will tag sections across all canon docs in one pass.
- `docs/foundations/governance-artifacts-and-graph-projections.md:134-143` §Grounding Through Sensors retains residual intent-pressure language (post-ADR-0056 cascade-miss). F1 NARROW scope (J1 ratification) leaves this paragraph untouched; it will be addressed as a separate 2-line commit (ADR-0059c-shape cascade-miss cleanup) if operator chooses, not as part of F1.

### Method-precedents (4 new)

1. **First Tier A foundation-doc admission of Phase 4** — ADR-0073 establishes the template pattern for F2–F9 follow-on admissions. Template attributes: ADR-0042 shape (one ADR + one new foundation doc + canon-review-protocol §1 + docs/README.md + optional yaml); unified-modality principled-rule abstraction where multiple modalities apply; rule-stratification inheritance where ADR-0046 offers it permissively; forward-ref-cite-all in `related_adrs:` + foundation-doc §Related; no back-annotation of forward-ref ADRs.
2. **Unified-modality principled-rule abstraction at foundation layer** — operator-ratified three-modality scope (machine sensors + human attestation + AI-summary) authored as single doctrine via principled-rule discipline (analog to ADR-0062 Membrane production-mode + ADR-0063 Signal sense-making-mode + ADR-0064 Field co-presence-mode primitive-bullet scope-conditioning). Not three sub-sections; not parameterized tables. Reusable for future multi-modality foundation docs where operational heterogeneity exists but doctrinal unity is preserved at Field layer.
3. **Rule-stratification as Tier-inheritable template** — ADR-0046's permissive inheritance offer is accepted at F1; F2 / F3 / F4 / F5 / F6 can inherit the same Ostrom 3-level rule-stack without each needing to re-earn the move. Reduces per-foundation-doc admission ceremony; establishes structural continuity across Tier A + B Phase 4 authoring.
4. **Foundation-doc slug-admission piggyback** — D2 admits 2 derived glossary slugs (`longitudinal-attestation` + `replication-regime`) via the foundation-doc ADR rather than deferring to a separate glossary-bundle ADR (which would be ADR-0053's precedent shape). Honors ADR-0049 forward-ref naming commitment directly and atomically. Reusable when a foundation doc introduces necessary vocabulary that would otherwise accumulate as a separate glossary-bundle ADR backlog.

## Evidence

- cluster_key: `docs/foundations/sensor-oracle-governance.md:foundation-doc-promote + docs/research/concepts-p2p-wiki.yaml:v14-to-v15-longitudinal-attestation-and-replication-regime`
- supports: audit-v2 §6.4 item 1 (5-reviewer-lens convergence) + audit-v2 §3.3 item 1 + audit-v2 §9 high-confidence line 481 + audit-v2 §2.14 p.11 + 3 forward-referencing ADRs (0043/0044/0049) + 1 permissive-offer ADR (0046)
- opposes: 0 (no audit defended canon's doctrine-less sensor-naming; no audit opposed F1 top-priority ranking)
- source: canon-first-principles-audit-v2 §6.4 item 1 (highest-confidence, all-reviewer convergence)
- Supporting canon: `docs/foundations/governance-artifacts-and-graph-projections.md:134-143` (naming-without-doctrine substrate); `docs/foundations/structural-legitimacy.md` (coupling-to-consequence grounds maintainer discipline); `docs/project-vision.md` (Evidence verb in 9-primitive roster)
- Opposing bridge notes: none
- Cross-project echoes: none at admission time (Spore-only); IC + PM + koi-processor read-only throughout; cross-repo propagation (if any) deferred to future ic:ADR-NNNN + pm:ADR-NNNN follow-on work under the ic:ADR-0019 + pm:ADR-0015 cross-repo alignment precedent
- Held-tension overlap: checked 2026-04-25. ADR-0001 pluriversal-incommensurability (`pluriversal-commoning`, `memory-governance`) does not overlap F1's concept list. Pluriversal interpretation-authority tension flagged as canonically-acknowledged held-residue in F1 §6 Open Questions; does not block admission.
- Adaptation note: R-claim source cites canon-first-principles-audit-v2 item IDs. Foundation-doc registration via canon-review-protocol §1 update + docs/README.md + concepts yaml v-bump is canon-scope extension authorized under the foundation-repair-flexibility memory (inherits ADR-0042 precedent authorization).

## Diff summary

**File 1**: `docs/research/canon-decisions/0073-sensor-oracle-governance-foundation-doc-promotion.md` (NEW, this ADR, ~150 lines).

**File 2**: `docs/foundations/sensor-oracle-governance.md` (NEW, ~200–250 lines):
- Frontmatter: `doc_id: spore.sensor-oracle-governance`, `doc_kind: foundation`, `status: draft → active`, `depends_on: [spore.project-vision, spore.governance-artifacts, spore.structural-legitimacy]`
- Body: 7-section structure per §Decision enumeration (Core Claim / Scope / Structural Doctrine / Doctrine Per Concern / Reproductive Evidence / Open Questions / Related)

**File 3**: `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list:
- Insert `- docs/foundations/sensor-oracle-governance.md` between `- docs/foundations/spore-instance-model.md` and `- docs/foundations/structural-legitimacy.md` (alphabetical order)

**File 4**: `docs/README.md` Foundations listing:
- Insert new line after line 28 (`structural-legitimacy.md` entry): `- [sensor-oracle-governance.md](./foundations/sensor-oracle-governance.md) — doctrine for sensor selection, calibration, maintainer roles, contestation, disagreement, interpretation authority, and absent-evidence handling across machine / human / AI-summary modalities`

**File 5**: `docs/research/concepts-p2p-wiki.yaml` v14 → v15:
- v-header block: append new v15 (2026-04-25) entry documenting 2-slug admission
- Concepts list: append two new derived glossary slug entries (`longitudinal-attestation`, `replication-regime`) in canonical slug-entry shape (slug / canonical_label / aliases / one_line_definition / primary_project)

Five-file coordinated atomic-bundle edit. Net ~400–450 lines added (new ADR + new foundation doc + 2 yaml slug entries + v-header update) + 2 registration lines.
