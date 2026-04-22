---
doc_id: spore.canon-decision.core-thesis-primitive-roster-alignment
doc_kind: decision-record
status: active
adr_number: "0044"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.coherence-audit-2026-04-22:C-01
  - spore.review.coherence-audit-2026-04-22:C-02
  - spore.review.coherence-audit-2026-04-22:C-03
  - spore.review.coherence-audit-2026-04-22:C-10
r_claim_statement: |
  The Core Thesis text in docs/project-vision.md is out-of-sync with Spore's actual canon-blessed primitive roster. The text names a "five primitives" list (sovereign identity / shared memory / commitment protocols / governance patterns / federation rules) that is NOT the primitive roster CFR-v1 (corpus-foundational-review-v1) blessed. The actual roster — traceable through ADR-0008 (field), ADR-0013 (intent/evidence), ADR-0016 (field/holon distinction), ADR-0025 (primitive-roster-boundary-cleanup), and foundations docs — is seven primitives in two kinds: three structural primitives (field, holon, membrane) that describe the substrate of coordination, and four coordination verbs (intent, commitment, evidence, signal) that describe the operations through which agents coordinate. The Phase 1 coherence-and-falsifiability audit flagged C-01 (primitive-list-universality), C-02 (composability-scope overclaim), C-03 (list-count mismatch between 5-primitives / 6-ecology / 8-projections), and C-10 (self-similarity scope-overreach) as coherence defects in the Core Thesis section. This ADR aligns the Core Thesis to the actual canon-blessed roster + closes those four dispositions. Phase 3b (next session) will address the capstone's separately-identified gaps (Care / Norms / Power / Reproduction / Identity).
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-coherence-falsifiability-audit-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-audit-independent-second-opinion-codex-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-audit-independent-second-opinion-claude-opus-4-7-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-phase3-core-thesis-rewrite-draft-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md
authorized-by: "canon-rebuild-phase-3 operator directive 2026-04-22 (Path-2-split; 7-primitive-roster; ADR-0032 supersede; Phase-3b-deferral of Care/Norms/Power/Reproduction/Identity)"
queue_reference: "coherence-audit-2026-04-22 C-01 + C-02 + C-03 + C-10 (Core Thesis primitive-roster + composability-scope + list-count-mismatch + self-similarity-scope) + CFR-v1 capstone §4 primitive-audit"
affects_canon:
  - docs/project-vision.md
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
related_adrs:
  - spore:ADR-0008-collective-agency-at-field
  - spore:ADR-0013-intent-evidence-subtype-clarification
  - spore:ADR-0016-field-holon-primitive-distinction
  - spore:ADR-0025-primitive-roster-boundary-cleanup
  - spore:ADR-0031-ecology-cycle-scope-conditioning
  - spore:ADR-0032-core-thesis-primitives-scope-conditioning
  - spore:ADR-0033-dual-axis-pattern-recursion-clarification
  - spore:ADR-0035-vision-as-commitment-subtype
concepts:
  - coordination-substrate
  - polycentric-governance
  - boundary-commoning
---

# ADR-0044 — Core Thesis Primitive-Roster Alignment

## Status

active (authored + activated 2026-04-22 under `canon-rebuild-phase-3-core-thesis-rewrite` plan, Path-2-split)

## Context

The Phase 1 coherence-and-falsifiability audit (`tmp/canon-coherence-falsifiability-audit-2026-04-22.md`) identified four coherence defects in the Core Thesis + Coordination Ecology + Self-Similarity + Coordination Scales passages of `docs/project-vision.md`:

- **C-01** (primitive-list universality): the claim that the five primitives apply "at every scale and scope" overreaches what the operational instance families demonstrate. ADR-0032 softened the universality claim within-frame but did not revisit the primitive list itself.
- **C-02** (composability-scope overclaim): the claim that primitives "compose fractally" is stated as demonstrated fact when only three operational instance families have been reached (BKC/Octo, Poietic Match, personal-operator).
- **C-03** (list-count mismatch): the Core Thesis lists five primitives, the Coordination Ecology lists six elements (Vision → Roadmap → Intent → Commitment → Evidence → Learning), the Graph Projections section lists eight, the naming-stack lists four. The canon does not agree with itself about what the primitives are.
- **C-10** (self-similarity scope-overreach): the Self-Similarity passage claims "the same artifact ecology recurs inside every holon, which is why the same patterns work from personal workflow to planetary federation" — a universal claim that overstates the operational earning.

Initial Phase 3 draft (v1, `tmp/canon-phase3-core-thesis-rewrite-draft-2026-04-22.md`) proposed reducing the Core Thesis to three coordination primitives (Intent/Commitment/Evidence) with composability scope-narrowing. A post-draft research sweep revealed that v1 was authored without engaging (a) the **corpus-foundational-review-v1 capstone** (closed 2026-04-21, 17-tradition synthesis at `docs/research/corpus-review/research-capstone.md`), and (b) the 15 ADRs (0011-0028) that CFR-v1 produced to update Spore's primitive roster. The sweep surfaced two findings that forced a v2 rewrite:

1. **The Core Thesis text is out-of-sync with the actual canon-blessed primitive roster.** The "five primitives" in current Core Thesis are NOT the primitives CFR-v1 blessed. The actual canon-blessed roster, traceable through ADRs 0008 (field), 0013 (intent/evidence), 0016 (field-holon distinction), 0025 (primitive-roster-boundary-cleanup), and foundations docs, is seven primitives in two kinds (structural + coordination-verb).

2. **Capstone §4 verdicts**: all 7 current Spore primitives (intent, commitment, evidence, signal, field, holon, membrane) "survive the primitive-class bar" across 17 traditions, with refinement footnotes on glossary-level refinements (Evidence-as-attestation-of-execution, Signal-with-Autopoiesis-objection, Commitment-40-year-REA-contradiction, Holon-terminological-orphan, Membrane permeability + double-boundary).

Operator decision (2026-04-22, Path 2-split): Phase 3 (this ADR) executes *structural repair* — align Core Thesis with actual canon-blessed 7-primitive roster. Phase 3b (next session) executes *capstone gap-closure* (Care / Norms / Power / Reproduction / Identity).

## Decision

**Edit — bundled alignment**:

### §1 Core Thesis rewrite (project-vision.md L21-L47)

Replace the Core Thesis section with a rewrite that:
- Names all 7 canon-blessed primitives in two kinds: **structural primitives** (Field, Holon, Membrane) and **coordination verbs** (Intent, Commitment, Evidence, Signal).
- Anchors each primitive to its supporting ADR (0008 for Field, 0013 for Intent/Evidence broad-sense, 0016 for Field/Holon distinction, foundations doc for Membrane).
- States the external criterion for primitive-status: (a) specifiable as a protocol surface with defined inputs, outputs, and governance; AND (b) operational implementations across Spore's actual instance families at identifiably different scales. Seven primitives pass both conditions.
- Explicitly excludes from primitive-status: visions / roadmaps / agreements / policies / role definitions / domain definitions (artifact-types), sovereign identity / shared memory / governance patterns / federation rules (infrastructure surfaces or pattern-libraries), learning (meta-property of healthy loop), memory / state (derived from Evidence + Field).
- Names scope + frame acknowledgment citing ADR-0001 (pluriversal-incommensurability): Spore's grammar operates at *social coordination among sovereign agents capable of declaring intent, entering commitments, and attesting evidence*. Alternative frames (autopoiesis, active inference, pluriversal, distributed-systems theory) privilege different primitives; Spore's grammar does not subsume or invalidate them.
- Narrows composability to three operational instance families with explicit research-register addendum for wider-scale extension.

Draft text verbatim from `tmp/canon-phase3-core-thesis-rewrite-draft-v2-2026-04-22.md` §Draft A.

### §2 Coordination Ecology rewrite (project-vision.md L72-L89 + constitutional-artifacts-and-graph-projections.md L28-L41)

Replace both ecology passages with rewrites that:
- Replace the six-element list (Vision → Roadmap → Intent → Commitment → Evidence → Learning) with the four-verb loop (Intent → Commitment → Evidence, with Signal as cross-cutting transmission).
- Name the three structural primitives (field, holon, membrane) as *hosting* the loop (not in it — defining the space it operates in).
- Frame Vision / Roadmap / Agreements / Policies as artifact-types some coordination contexts author, not primitives.
- Frame Learning as meta-property of a healthy loop, not a separable element.
- Preserve phase-dependence + scale-instantiation insights from prior text (ADR-0031 extends cleanly).
- In constitutional-artifacts, canonicalize the three-senses-of-commitment distinction (operational / orientation / constitutional) that disambiguates the primitive sense from artifact-type senses.
- Document Commitment's 40-year unresolved REA tradition split inline (primitive with illocutionary force per Gilbert/Searle/Tuomela; rejects Ševčík scheduled-event-shadow reading).

Draft text verbatim from §Draft B (project-vision) and §Draft C (constitutional-artifacts).

### §3 Self-Similarity section deletion (project-vision.md L117-L119)

Delete entirely per C-10 disposition + operator Q3 bundle directive. Clean delete: no strikethrough, no HTML comment. The scope-overreach claim "the same artifact ecology recurs inside every holon, which is why the same patterns work from personal workflow to planetary federation" cannot be preserved — it directly contradicts the composability-scope narrowing in §1 + §2.

### §4 Coordination Scales opener softening (project-vision.md L121-L129 opening framing)

Replace opening framing sentence (currently "The same patterns recur at every scale. Here are five illustrative levels — not a canonical hierarchy:") with the v2 Edit-4 text:

> Spore's three coordination primitives — intent, commitment, evidence — are instantiated across multiple scales Spore has reached, with scale-appropriate differences in formalization, party composition, attestation weight, and governance conditions. Structural primitives (field, holon, membrane) also appear at each scale, with the holon at scale N being a part of a larger holon or field at scale N+1. The following are illustrative rather than exhaustive; which scales a given federation-agent realises is a property of that federation-agent, not a requirement of the grammar.

Five illustrative bullet items (Personal / Pair-Team / Organizational / Network / Planetary) preserved unchanged.

## Consequences

### Supersession of ADR-0032

ADR-0032 (`spore:ADR-0032-core-thesis-primitives-scope-conditioning`) is **superseded** by this ADR. ADR-0032 conditioned the "five primitives" universality claim within-frame by adding "when present" language and a "not all contexts require all five" softener. Phase 3 replaces the entire five-primitives framing with the canon-blessed seven-primitive roster, making ADR-0032's within-frame softening obsolete. ADR-0032 remains historically accurate as an interim-during-Round-2 softening; its text is NOT modified by this ADR (per the schema convention that has no `superseded_by` field). Supersession is represented only through (a) this ADR's `related_adrs` list entry for ADR-0032 and (b) this prose narrative in §Decision and §Consequences. ADR-0032's file remains unchanged on disk; reverse-traceability via grep against `related_adrs`.

### Sense-disambiguation for ADR-0035

ADR-0035 (`spore:ADR-0035-vision-as-commitment-subtype`) is NOT modified by this ADR. This Consequences section clarifies the sense in which ADR-0035's "commitment" operates. Per the three-senses-of-commitment distinction canonicalized in the rewritten Coordination Ecology section of `constitutional-artifacts-and-graph-projections.md` (§Draft C):

- **Operational commitment** (the primitive introduced here): offer/accept/attest/fulfill binding with specified terms, parties, and governance.
- **Orientation commitment** (ADR-0035's sense): visions and directional declarations — artifact-types that a coordination context may author at longer time-horizons. Vision is a commitment at orientation scope with slow-change + broad-consent properties.
- **Constitutional commitment**: foundational value-choices the project publishes — the seven items at `project-vision.md` §"Constitutional Commitments".

The primitive introduced in this ADR is the operational sense. ADR-0035's "commitment" is the orientation sense. Both are valid; they operate at different scopes. ADR-0035 remains load-bearing within the orientation-commitment scope.

### Phase 3b scope-deferral (enumerated for traceability)

The following capstone-identified items are **explicitly deferred** to Phase 3b (next session-atomic window, separate plan, separate ADR or ADR-bundle):

- **Care** — capstone §3 "most structurally important silence"; admit as primitive OR asymmetric-commitment sub-type.
- **Norms/Protocols** — capstone §3 "most tradition-supported gap" (10/17 traditions); admit as primitive OR stratify field into rule-levels (e.g., Ostrom's 8-rule-type framework).
- **Power/Authority** — capstone §3 "second-sharpest gap"; admit as primitive OR named asymmetry on commitment/membrane.
- **Reproduction** — capstone §3 admit as named continuity property of field (promote ADR-0002's doctrine-lens framing).
- **Identity** — capstone §3 admit as named property of holon.
- **Reciprocity** — capstone §3 admit as derived paired-commitments with residue-flagging.
- **Trust** — capstone §3 admit as derived with glossary residue.
- **Membrane definition expansion** — capstone §4 name permeability + double-boundary (Ostrom 1A/1B) dimensions.
- **Signal inline-documentation of Autopoiesis objection** — capstone §4 (currently only capstone-captured; not in canon body).
- **Holon inline-acknowledgment of terminological-orphan status** — capstone §4.
- **Evidence glossary note on attestation-of-execution reading** — capstone §4.
- **Commitment glossary note on 40-year REA contradiction** — partially addressed inline in §Draft C; full glossary entry deferred.

Phase 3 does NOT address these; any attempt to address them mid-session-atomic-window is a rollback-trigger condition per the plan's discipline.

### Cross-ADR impact summary

- **ADR-0031** (ecology-cycle-scope-conditioning): extends cleanly; ecology-element-count reduces from six to four-verbs-plus-structural-primitives-hosting. Phase-dependence + scale-instantiation insights preserved.
- **ADR-0032**: superseded (see above).
- **ADR-0033** (dual-axis-pattern-recursion-clarification): consistent; scale-narrowing preserved in §Draft B + §Edit 4.
- **ADR-0034** (interop-principles-mechanisms-split): consistent; no change.
- **ADR-0035**: companion-clarified (see above).
- **ADR-0036** (graph-projections-tiering-and-structure): partial alignment; Graph Projections realignment is Phase 2c work.
- **ADR-0037 / ADR-0038 / ADR-0039 / ADR-0040**: consistent; no change.
- **ADR-0041** (text-authoritative-representation): consistent; no change. Text-authoritative and graph-projected discipline applies to constitutional artifacts generally; Core Thesis rewrite inherits cleanly.
- **ADR-0042** (DAG-delete + Structural-Legitimacy promote): consistent; no change.
- **ADR-0043** (federation-protocol rename): consistent; no change.

### Cross-doc impact (tracked for Phase 2c or later)

- `project-vision.md:91-95` three-layer coordination stack — unchanged in Phase 3 per Q4; Phase 2c or later may revisit.
- `project-vision.md:104-116` Graph Projections list — realignment to primitive roster deferred to Phase 2c.
- `constitutional-artifacts-and-graph-projections.md` Graph Projections section (§54-75) — deferred to Phase 2c.
- `constitutional-artifacts-and-graph-projections.md` Zoom Invariance / self-similarity (§67-75) — deferred to Phase 2c.
- `foundations/holonic-network-architecture.md:74-84` dual-axis scale-recurrence language — deferred to Phase 2c.
- `foundations/relational-agency-and-holons.md:42-49` fractal-scales paragraph — deferred to Phase 2c (captured in preflight Check 0.9 OUT-OF-SCOPE hits).

### Downstream

- Phase 3b (separate session): capstone gap-closure ADR(s) per enumerated deferral list above.
- Phase 2c (subsequent): graph-projections realignment, zoom-invariance deletion, dual-axis scale-recurrence scope-conditioning, dynamical-vocabulary audit, constitutional-artifacts→governance-artifacts rename.
- Phase 4 (future): sensor-and-oracle-governance foundation authoring (reinforces Evidence primitive earning per Phase 1 C-14 finding).
- IC / PM coordinated-update of their ecology sections to match Spore's 7-primitive grammar — subsequent session-atomic window (per Q5 Spore-only decision for this Phase 3).

## Evidence

- cluster_key: `docs/project-vision.md:core-thesis-primitive-roster`
- supports: 4 prior audits (Phase 1 coherence + v1 first-principles + v2 audit + Opus-4-7 second-opinion + Codex second-opinion) + 1 CFR-v1 capstone (17 tradition syntheses) + 4 canon-anchor ADRs (0008/0013/0016/0025)
- opposes: 0 (no prior audit or ADR defended the out-of-sync five-primitives framing at the primitive-class layer; ADR-0032 softened within-frame, now superseded)
- source: Phase 1 coherence-and-falsifiability audit C-01 + C-02 + C-03 + C-10 (high confidence)
- Supporting corpus evidence: 17-tradition capstone §4 audit of Spore's current primitives (all 7 survive the primitive-class bar); ADR-0008 / ADR-0013 / ADR-0016 / ADR-0025 canon-anchoring documents
- Opposing bridge notes: none
- Cross-project echoes: IC / PM coordinated-update deferred (Q5)
- Held-tension overlap: checked 2026-04-22. ADR-0001 (pluriversal-incommensurability) tension is DIRECTLY ENGAGED by §1 scope-and-frame-acknowledgment paragraph (which explicitly names alternative frames and cites ADR-0001). Affirmative alignment: Phase 3's scope-narrowing respects pluriversal critique of universalized primitive grammars.
- Adaptation note: R-claim source cites Phase 1 C-01/C-02/C-03/C-10 (continuing Phase 2a/2b pattern). The cross-ADR impact + Phase-3b-deferral enumeration follows the Path-2-split operator directive.

## Diff summary

**ADR file**:
- `docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md` — created (this file)

**Canon-body edits**:
- `docs/project-vision.md:21-47` (Core Thesis section) — REPLACE with Draft A verbatim (7-primitive roster + external criterion + scope acknowledgment + narrowed composability)
- `docs/project-vision.md:72-89` (Coordination Ecology section) — REPLACE with Draft B verbatim (4-verb loop hosted by structural-primitive substrate)
- `docs/project-vision.md:117-119` (Self-Similarity section) — DELETE entirely per C-10 disposition
- `docs/project-vision.md:121-129` (Coordination Scales section) — REPLACE opening framing sentence with Edit 4 text; preserve five illustrative bullets verbatim
- `docs/foundations/constitutional-artifacts-and-graph-projections.md:28-41` (Coordination Ecology section) — REPLACE with Draft C verbatim (4-verb loop + commitment-three-senses + REA-40-year-split inline acknowledgment)

**Historical references preserved** (unchanged): ADR-0032's file (superseded but not modified), ADR-0035's file (companion-clarified but not modified), and out-of-scope deprecated-phrase occurrences in `docs/research/2026-04-03/*`, `docs/research/canon-decisions/0032/0034/*.md` (historical), `docs/foundations/relational-agency-and-holons.md:42` (Phase 2c target).
