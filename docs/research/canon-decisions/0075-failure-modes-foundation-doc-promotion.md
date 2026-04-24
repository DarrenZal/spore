---
doc_id: spore.canon-decision.failure-modes-foundation-doc-promotion
doc_kind: decision-record
status: draft
adr_number: "0075"
opened-on: 2026-04-25
decision: edit
r_claim_source:
  - spore.review.canon-first-principles-audit-v2-2026-04-22:6.4-item-6
  - spore.review.canon-first-principles-audit-v2-2026-04-22:3.3-item-7
r_claim_statement: |
  Audit-v2 §6.4 item 6 (Opus-4-7 convergence on failure-mode taxonomy as priority-6 missing foundation) + §3.3 item 7 six exemplars (federation-node captured, evidence fraudulent, commitment broken, nodes-disagree-provenance, canon-review-captured, metaphor rots): canon describes what happens when coordination works but has essentially no language for failure. Three already-landed foundation docs explicitly forward-reference F6 as Phase 4 canon-authoring target: F1 sensor-oracle-governance.md:39 ("systematic enumeration of how sensor-governance can break — maintainer capture, sensor decay, adversarial mis-calibration"), F4 representation-authority.md:42 ("systematic enumeration of how representation-authority can break — maintainer capture, stale text, corrupt graph, adversarial attestation"), and structural-legitimacy.md:50 ("a unified failure-mode taxonomy for coupling-breakdown is future work"). Per operator-inverted Tier B ordering (F6 before F5 before F3; cognitive-load optimization — invention-heavy before synthesis-heavy), F6 handles F3 actor-governance substrate via forward-reference discipline rather than full inheritance. Decision: admit new foundation doc at docs/foundations/failure-modes.md carrying 8-category failure-mode taxonomy (representation / protocol / sensor-attestation-evidence-integrity / scale-transition / membrane-boundary / commitment-break / actor-capture / meta-pattern-composition) with B2 per-category subsection structure (divergent from F1's B1 unified-modality-principled-rule per honest-rigor that 8 structurally-heterogeneous categories do not naturally unify under single principled-rule), inheriting ADR-0046 Ostrom 3-level rule-stratification as structural scaffold per-category, positioning as sibling-doctrine to structural-legitimacy (ADR-0042) without subsuming or extending it, forward-referencing F3 actor-governance at F6.7 and F5 actuator-logic throughout, and authoring F6.8 meta-pattern category with explicit internal sub-taxonomy (substitution-trap per ADR-0048 / linguistic-closure per lexicon / capture-via-composition as novel naming for ADR-0005-shape failures).
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/phase-4-scoping-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0075-preflight-manifest.txt
  - /Users/darrenzal/projects/spore/tmp/adr-0075-f6-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0075-f6-decision-brief-2026-04-25.md
  - docs/foundations/sensor-oracle-governance.md
  - docs/foundations/representation-authority.md
  - docs/foundations/structural-legitimacy.md
  - docs/foundations/governance-artifacts-and-graph-projections.md
  - docs/foundations/federation-protocol.md
  - docs/foundations/lexicon/linguistic-closure.md
  - docs/research/canon-decisions/0005-decentralization-myth-bundle.md
  - docs/research/canon-decisions/0042-dag-delete-structural-legitimacy-promote.md
  - docs/research/canon-decisions/0046-field-rule-level-stratification.md
  - docs/research/canon-decisions/0048-power-expressive-constructed-modes.md
  - docs/research/canon-decisions/0049-reproduction-continuity-primitive-admission.md
  - docs/research/canon-decisions/0050-sociality-side-b-plus-primitive.md
authorized-by: "canon-rebuild-phase-4-tier-b operator directive 2026-04-25 (first Tier B admission under operator-inverted F6→F5→F3 ordering; 10-axis decision-brief child-defaults ratified A1/B2/C1/D2/E1/F1/G1/H2/I1/J1; two operator amendments: F6.8 internal sub-taxonomy non-negotiable + §Consequences method-precedent naming Tier B template-inheritance with honest-rigor per-axis divergence)"
queue_reference: "canon-first-principles-audit-v2-2026-04-22 §6.4 item 6 + §3.3 item 7 (failure-mode taxonomy — Opus-4-7 priority-6 missing foundation)"
affects_canon:
  - docs/foundations/failure-modes.md
  - docs/research/planning/canon-review-protocol.md
  - docs/README.md
  - docs/research/concepts-p2p-wiki.yaml
related_adrs:
  - spore:ADR-0005-decentralization-myth-bundle
  - spore:ADR-0041-text-authoritative-representation
  - spore:ADR-0042-dag-delete-structural-legitimacy-promote
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0046-field-rule-level-stratification
  - spore:ADR-0047-power-multi-layer-decomposition
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0049-reproduction-continuity-primitive-admission
  - spore:ADR-0050-sociality-side-b-plus-primitive
  - spore:ADR-0053-glossary-refinements-bundled
  - spore:ADR-0073-sensor-oracle-governance-foundation-doc-promotion
  - spore:ADR-0074-representation-authority-foundation-doc-promotion
concepts:
  - failure-mode-class
  - coupling-breakdown
  - substitution-trap
  - decentralization-theater
  - filtering-membrane
  - reproduction-continuity
  - joint-commitment
  - operational-rule
  - collective-choice-rule
  - constitutional-rule
---

# ADR-0075 — Failure-Modes Foundation Doc Promotion

## Status

draft (authored 2026-04-25 under canon-rebuild Phase 4 Tier B first admission)

## Context

Phase 4 of the canon-rebuild arc was defined in the 2026-04-22 canon-first-principles-audit-v2 (`tmp/canon-first-principles-audit-v2-2026-04-22.md` §6.4, lines 352–362) as "7–9 new foundation docs, priority-ordered." The 2026-04-25 Phase 4 scoping session (plan: `tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md`) ratified three-tier admission sequencing: Tier A (F1 + F4, landed 2026-04-25 as ADR-0073 and ADR-0074), Tier B (F3 + F5 + F6), Tier C (F7 + F8 + F2 + F9).

**Per operator-inverted Tier B ordering (2026-04-25 handoff default)**, F6 authoring precedes F5 actuator-logic and F3 actor-governance based on cognitive-load optimization: fresh-session cache is cold, invention-heavy F6 (canon has no failure-language; taxonomy is net-new) is cleaner than synthesis-heavy F3 (rich substrate from ADRs 0042/0047/0050/0068 requires integration work). Consequence: F6 must handle F3-substrate (actor-capture failures) via **forward-reference acknowledgment**, not full inheritance. Shape-parallel to F4's forward-reference of F5 actuator-logic.

F6 failure-modes is the priority-6 missing foundation per audit-v2 §6.4 item 6 (Opus-4-7 convergence). Three already-landed foundation docs carry explicit forward-references to F6 as Phase 4 canon-authoring target:

1. **F1 sensor-oracle-governance.md:39**: "**Failure-mode taxonomy** — systematic enumeration of how sensor-governance can break (maintainer capture, sensor decay, adversarial mis-calibration). That is the scope of `failure-modes` (foundation doc forthcoming); this doctrine names failure-shapes in context but does not enumerate them taxonomically."
2. **F4 representation-authority.md:42**: "**Failure-mode taxonomy** — systematic enumeration of how representation-authority can break (maintainer capture, stale text, corrupt graph, adversarial attestation). That is F6 failure-modes scope (forthcoming)."
3. **structural-legitimacy.md:50**: "The canon's openwashing discipline and power-capture ADRs address fragments of this, but **a unified failure-mode taxonomy for coupling-breakdown is future work**."

Plus audit-v2 §3.3 item 7 (Opus-4-7 primary formulation): *"canon describes what happens when coordination works; essentially no language for failure. What happens when a federation node is captured, evidence is fraudulent, commitment is broken, nodes disagree on provenance, canon-review is itself captured, metaphor rots?"* — six exemplars anchoring the audit's call for F6.

Canon currently names seven failure-shapes already — substitution-trap (ADR-0048), decentralization-theater (ADR-0005), digital-labor-as-free-gift (ADR-0005), admin-capture (ADR-0005 + ADR-0047 Layer 3), power-capture (ADR-0005 bundle), filtering-membrane (frozen-vocab v2), linguistic-closure (lexicon/linguistic-closure.md) — plus federation-protocol.md:166-173 internal 4-entry protocol-failure table, plus three layer-absence clauses at project-vision.md:211, holonic-network-architecture.md:71, and stigmergy.md:73-75. F6's job is **categorize + taxonomize** these pre-existing canon-legible shapes and admit new category-shapes necessary to cover the six Opus-4-7 exemplars.

ADR-0042 (dag-delete + structural-legitimacy-promote, 2026-04-22) is the authoritative template for foundation-doc promotion via ADR, inherited by ADR-0073 (F1) and ADR-0074 (F4). ADR-0075 inherits the five-part coordinated-admission pattern (ADR + new foundation doc + canon-review-protocol §1 registration + docs/README.md registration + concepts yaml slug admission) directly.

## Decision

**Edit — five-part coordinated canon admission (atomic-bundle draft commit):**

1. **Author new foundation doc** at `docs/foundations/failure-modes.md` carrying 8-category failure-mode taxonomy with per-category subsection structure (B2, divergent from F1's B1 unified-modality-principled-rule per honest-rigor; see method-precedent below).
2. **Register** in `docs/research/planning/canon-review-protocol.md` §1 Spore canon-in-scope list.
3. **Register** in `docs/README.md` Foundations listing.
4. **Admit 2 slugs** to `docs/research/concepts-p2p-wiki.yaml` (v15 → v16): `failure-mode-class` (meta-level concept naming F6's taxonomy unit) + `coupling-breakdown` (bridges to structural-legitimacy sibling-doctrine).
5. **Activate** via status-flip commit (draft → active on both ADR and foundation doc).

### 10-axis disposition (all operator-ratified 2026-04-25)

| Axis | Disposition | Rationale |
|------|-------------|-----------|
| **A scope** | A1 admit all 8 categories | Meta-pattern category earned by residue against Opus-4-7 §3.3 item 7 exemplars (e) canon-review captured + (f) metaphor rots; honest-rigor cluster-counting passes ≥2-cluster threshold for all 8 |
| **B structure** | B2 per-category subsection | Divergent from F1 B1 unified-principled-rule: F6's 8 categories are structurally heterogeneous and do not naturally unify under a single principled-rule. Honest-rigor per-axis divergence from template (see method-precedent) |
| **C rule-stack** | C1 inherit ADR-0046 Ostrom 3-level | Each failure category decomposes naturally across rule-levels; third application of ADR-0046 inheritance pattern after F1 + F4 |
| **D slug admissions** | D2 admit 2 slugs | `failure-mode-class` + `coupling-breakdown`. Category-names stay prose-only per ADR-0053 precedent (category-names are composites of existing frozen-vocab); `substitution-trap` already v6-admitted |
| **E F3-forward-ref** | E1 name-but-defer | F6.7 subsection names actor-capture category; actor-governance-specific doctrine is F3 scope (forthcoming). Shape-parallel to F4's F5 forward-ref |
| **F registration** | F1 full 5-file atomic-bundle | D2 admits 2 slugs; yaml v15→v16 bump required |
| **G contestation** | G1 protocol-based | F6 declares failure-recognition follows rule-stack routing (inherited from ADR-0046 + F1); specific algorithms are pattern/protocol layer |
| **H structural-legitimacy relationship** | H2 sibling-doctrine | structural-legitimacy is positive doctrine; F6 is counterpart taxonomy. Cites as load-bearing substrate for F6.7 coupling-breakdown anchor without subsuming or extending ADR-0042 |
| **I cross-repo** | I1 narrow Spore-only | IC + PM alignment ADRs land post-F6 per Wave-N cross-repo queue; DH-PM-1 held-tension counsels caution on pre-alpha PM additive work |
| **J scope-narrowness** | J1 narrow | Out-of-scope: governance-artifacts.md:134-143 intent-pressure residual (ADR-0059c-shape follow-on); commons-law-and-charter-lineage.md L117 mycorrhizal ref; Phase 5 section-level status labels |

### 8-category taxonomy (authored at foundation-doc §4)

- **F6.1 Representation failures** — text/graph/sensor/attestation/agent-summary misalignment bypassing F4 precedence
- **F6.2 Protocol failures** — schema-mismatch / event-rejection / peer-unreachability / key-compromise / protocol-capture
- **F6.3 Sensor / attestation / evidence-integrity failures** — taxonomy-layer counterpart to F1 §4.4-4.5 per-shape governance
- **F6.4 Scale-transition failures** — patterns-at-scale-N break at scale-M; polycentric layer-mismatch; VSM S4/S5 viability gap
- **F6.5 Membrane-boundary failures** — over-filter / under-filter / boundary-collapse / social-vs-resource mismatch / asymmetric-capture
- **F6.6 Commitment-break failures** — three sub-shapes: individual (ADR-0044) / joint-commitment (ADR-0050) / reproduction-continuity (ADR-0049)
- **F6.7 Actor-capture failures (F3 forward-ref)** — four sub-shapes: maintainer-capture / admin-class-accumulation / regulatory-capture / digital-labor-as-free-gift
- **F6.8 Meta-pattern / composition failures** — three internally-specified sub-shapes: substitution-trap (ADR-0048) / linguistic-closure (lexicon) / capture-via-composition (novel naming; ADR-0005 bundle shape)

### Operator amendment §1 (F6.8 non-residue-bucket discipline)

F6.8 is authored with explicit internal sub-taxonomy per operator directive 2026-04-25. Three distinguished sub-modes, each with operational shape + distinguishing feature + ≥1 canon-evidence cite:

- **§4.8.1 substitution-trap**: allocational-move substituting for generative-move at single-move level; anchor ADR-0048 + concepts yaml v6.
- **§4.8.2 linguistic-closure**: distributed-cumulative cultural sealing of vocabulary as stopping-rule; anchor lexicon/linguistic-closure.md.
- **§4.8.3 capture-via-composition**: legitimate primitives composing into illegitimate whole at structural-aggregate level; anchor ADR-0005 bundle.

Each sub-mode is distinguishable from the others by *where the failure lives* (single-move vs distributed-cultural vs structural-compositional). F6.8 is not a residue-bucket: it is a category with load-bearing internal taxonomy that names three structurally-distinct meta-pattern failure shapes.

## Consequences

### Canon state delta

- **Foundation docs**: 9 → 10. `docs/foundations/failure-modes.md` joins the set. Registration updates in canon-review-protocol §1 + docs/README.md.
- **Concepts yaml**: v15 → v16. Two new slugs admitted (`failure-mode-class` + `coupling-breakdown`).
- **Canon object-class inventory**: PRESERVED at 4 categories (primitives / doctrines / modes / properties). No new canon-object class; F6 admits a foundation-doc authoring a taxonomy, not a new category type.
- **Primitives/doctrines/modes/properties/patterns**: PRESERVED. 9 primitives / 3 doctrines / 2 modes / 2 properties / 7 in-scope patterns / 8 derived glossary slugs (before v16; 10 after).
- **Canon-rebuild arc**: extends to 27 canon-decisions (0044–0058, 0061–0075, 0059a).
- **F1 sensor-oracle-governance.md:39 forward-ref**: DISCHARGED. F6.3 carries the taxonomy-layer category; F1 retains per-shape governance.
- **F4 representation-authority.md:42 forward-ref**: DISCHARGED. F6.1 carries the taxonomy-layer category.
- **structural-legitimacy.md:50 forward-ref**: PARTIALLY DISCHARGED. F6.7 carries coupling-breakdown taxonomy for actor-capture; full discharge awaits F3 actor-governance governance-response doctrine.

### Forward-references remaining open

- **F3 actor-governance (forthcoming)**: F6.7 names actor-capture category via forward-reference. F3 will carry governance-doctrine (standing, adjudication, recall, replacement). F6 does not wait for F3 to land; category-recognition is independent of governance-response.
- **F5 actuator-logic (forthcoming)**: F6 names failure categories canon must recognize. F5 will carry operational response doctrine (alert, proposal, routing, human review, no change). F6 does not wait for F5; recognition is independent of response.

### Method-precedent contributions

1. **First Tier B foundation-doc admission under operator-inverted F6→F5→F3 ordering** — establishes precedent that Tier B admissions can be ordered by cognitive-load (invention-heavy before synthesis-heavy) rather than strict dependency-topological order, when forward-ref discipline is load-bearing. F6 inherits F1+F4 template structurally while forward-referencing F3 substrate; validates operator-discretionary ordering within a tier.

2. **Audit-proposed category earned by residue**: F6.8 meta-pattern was not in operator-seeded 7 categories. Honest-rigor cluster-counting + Opus-4-7 §3.3 item 7 exemplar-analysis produced new category because operator-seed's 7 did not cover Opus-4-7 exemplars (e) canon-review captured + (f) metaphor rots. Operator-ratified addition at Step 2 validates `feedback_audit_then_propose.md` discipline at structural (not trivial) scope: child surfaces structural addition; operator ratifies. Earned-by-residue is distinct from earned-by-elegance; category-count of 8 is load-bearing, not decorative.

3. **Two-direction forward-reference pattern** — F6 is positioned between F1 (already-landed substrate) and F3 (not-yet-landed forward-ref). Distinct from F1+F4 which only forward-reference. Establishes pattern for mid-tier admissions that inherit AND forward-ref simultaneously: F6 inherits F1 §4.4-4.5 sensor-failure shapes into F6.3 taxonomy-layer categorization; F6 forward-references F3 into F6.7 actor-capture category-level-naming. Two-direction handling is a foundation-doc shape not previously exercised in canon.

4. **Sibling-doctrine shape to structural-legitimacy (H2)**: F6 is taxonomy-counterpart to ADR-0042's positive-doctrine; cites as substrate without extending or subsuming. New canon-method shape distinct from G1-extend pattern (ADR-0065 extending ADR-0048) and distinct from foundation-doc-promote pattern (ADR-0073 admitting F1). Sibling-doctrine pattern: one doctrine names *positive structure*; the counterpart names *taxonomy of breakdown*. Reusable for future canon-pair admissions where positive/negative counterpart shape is load-bearing (e.g., a future doctrine naming *productive composition* could have a counterpart *composition-pathology taxonomy* in sibling-doctrine shape).

5. **Tier B template inheritance with honest-rigor per-axis divergence** (per operator amendment §2) — B2 per-category structure intentionally diverges from F1 B1 unified-modality-principled-rule because F6's 8 categories do not naturally unify under a single principled-rule (failure-shapes are structurally heterogeneous: representation / protocol / sensor / scale / membrane / commitment / actor / meta-pattern differ in *what component of canon is failing*, not in *how the failing-mechanism operates*; principled-rule abstraction would conflate these). Template adaptability per ADR-0073 and ADR-0074: F1 and F4 are not cargo-cult templates; subsequent Tier B/C admissions inherit the shape appropriate to their substrate. Parallels ADR-0065 M4 sub-class framework's filtering-power discipline: template shape adapts to substrate shape, not the reverse. Reusable for future Tier B/C admissions where forced unification would sacrifice honest-rigor — F3 actor-governance and F5 actuator-logic may face similar per-axis divergence decisions; documented here so those decisions can draw on F6 precedent.

### Parked / out-of-scope items (per J1 narrow)

- **ADR-0059c-shape cascade-miss** at `docs/foundations/governance-artifacts-and-graph-projections.md:134-143` residual intent-pressure language post-ADR-0056 (2-line prose fix; operator-discretion follow-on).
- **L117 mycorrhizal-federation-protocol** reference in `docs/research/connections/commons-law-and-charter-lineage.md` (1-line TYPE-2 fix; ADR-0043 cascade-miss).
- **Phase 5 section-level status labels** (separate layer; tag-agnostic per operator Q6 scoping ratification).
- **Meta-canon capture sub-subsection F6.8.4**: deferred. Covered adequately under §4.8 constitutional-rule decomposition; a distinct sub-subsection would be authored if a specific meta-canon-capture instance during routine canon-review operation demands it.
- **Cross-repo IC + PM alignment ADRs** (Wave-N queue; post-F6).

## Evidence

- **Audit-v2 §6.4 item 6** (`tmp/canon-first-principles-audit-v2-2026-04-22.md` line 359): "Failure-mode taxonomy (Opus-4-7)" — priority-6 missing foundation.
- **Audit-v2 §3.3 item 7** (line 208): Opus-4-7 primary formulation with six exemplars.
- **Phase 4 scoping plan** line 41: F6 scope assertion with F1 + F3 dependency flagging; line 180 Option D3 tiered ratification; line 235 axis D Tier A/B/C tiering.
- **Three explicit foundation-doc forward-references** to F6: F1 sensor-oracle-governance.md:39, F4 representation-authority.md:42, structural-legitimacy.md:50.
- **Seven canon-legible failure-shapes** already canonized (§4.8.1 substitution-trap per ADR-0048; §4.8.2 linguistic-closure per lexicon; §4.8.3 ADR-0005 bundle; filtering-membrane v2 frozen-vocab; decentralization-theater v2 frozen-vocab; admin-capture per ADR-0005 + ADR-0047 Layer 3; federation-protocol.md:166-173 4-entry table).
- **Per-category ≥2-cluster independent-tradition support** documented at audit manifest §H (`tmp/adr-0075-f6-audit-manifest-2026-04-25.md`): all 8 categories pass honest-rigor threshold.
- **Template inheritance substrate**: ADR-0042 foundation-doc-promotion pattern; ADR-0073 F1 template; ADR-0074 F4 template with fact-vs-specification text-type discipline; ADR-0046 Ostrom 3-level inheritance.

## Diff summary

Five-file atomic-bundle (draft commit):

- **NEW** `docs/foundations/failure-modes.md` (~320 lines) — foundation doc with 8-category taxonomy
- **NEW** `docs/research/canon-decisions/0075-failure-modes-foundation-doc-promotion.md` (~this file) — ADR authorizing admission
- **EDIT** `docs/research/planning/canon-review-protocol.md` §1 — register new foundation doc in canon-in-scope list (1-line insertion alphabetical)
- **EDIT** `docs/README.md` Foundations listing — register new foundation doc (1-line insertion alphabetical)
- **EDIT** `docs/research/concepts-p2p-wiki.yaml` — v15 → v16; add 2 slug entries (`failure-mode-class`, `coupling-breakdown`)

Active commit (status-flip): draft → active on ADR + foundation doc.

## Implementation Notes

- **Sandbox-plan-file contingency**: plan content consolidated into `tmp/adr-0075-f6-decision-brief-2026-04-25.md` per spore:ADR-0072 precedent. No `~/.claude/plans/` file authored for this ADR.
- **Validator baseline**: 9 errors / 30 warnings at Step 0 preflight; held exact through both commits.
- **Sibling repos**: IC + PM + koi-processor + darren-workflow READ-ONLY throughout; zero-change verified at Step 7.
