---
doc_id: spore.canon-decision.asymmetric-joint-commitment-slug-disposition
doc_kind: decision-record
status: draft
adr_number: "0061"
opened-on: 2026-04-23
closed-on: 2026-04-23
decision: decline
r_claim_statement: |
  The composition of ADR-0047 Layer 2 (`asymmetric-commitment` on Commitment primitive) with ADR-0050 (`joint-commitment` as 9th primitive / 6th coordination verb) produces a pattern — joint-commitments where parties bind disproportionately — that ADR-0050 §"Relationship to ADR-0047 asymmetric-commitment" (lines 135-137) explicitly named `asymmetric-joint-commitment` and deferred slug admission "unless operational pressure surfaces." The term currently appears four times in Spore canon prose (project-vision.md:57 joint-commitment bullet, governance-artifacts-and-graph-projections.md:44, ADR-0050:137, ADR-0050:215) as canon-legible prose composition without dedicated slug. Phase-3b + post-3b dedicated-ADR queue from `project_canon_rebuild_phase_3b.md` memory § Pending listed `asymmetric-joint-commitment` as first-pick from four parked dedicated-ADR candidates — smallest surface, clean earning test.

  ADR-0061 executes the dedicated earning-test evaluation ADR-0050 deferred. Step 0.5 audit evaluated five operational candidates (federation hub-and-spoke protocol adoption; BKC pool stewardship within commitment pools; caregiver-care-receiver joint-commitments per ADR-0045 care-commoning lens; state-and-indigenous-nation land-treaty; IC memory stewardship between memory stewards and commons beneficiaries) against four earning-test questions: (Q1) genuine Gilbertian joint-commitment; (Q2) asymmetric-binding present per ADR-0047 Layer 2 criteria; (Q3) naming adds expressive capacity beyond composition-prose-already-in-canon; (Q4) distinct protocol surface beyond union of ADR-0050 + ADR-0047 Layer 2 operations. Aggregate: 0 admission-supporting / 1 decline-supporting (BKC pool stewardship decomposes more faithfully into two distinct acts — joint-commitment at formation + asymmetric-commitment at stewardship — than into one fused asymmetric-joint-commitment) / 4 ambiguous. Q4 FAILS across all 5 candidates: no candidate demonstrates a protocol surface that is not the union of ADR-0050 operations (form-joint-commitment / rescind-by-concurrence / hold-accountable-via-demand-right / extend-joint-commitment) + ADR-0047 Layer 2 asymmetric-binding terms declared at commitment-formation. This structural failure is not evidence-resolvable; more operational instances do not generate a distinct protocol surface.

  Per ADR-0048 parsimony-as-earning-test-outcome-not-axiom discipline (operational across this arc), decline is the canonically-clean outcome when earning test fails. Option (d) decline admission selected at operator Step-2 gate; sub-option (d-1) prose-only §Consequences articulation chosen over sub-options (d-2) reciprocity-trust-framing-note-extension and (d-3) new-dedicated-framing-note. ADR-0052 framing-note extension declined on scope-bleed grounds (ADR-0052 is reciprocity three-mode composition; asymmetric-joint-commitment is a different kind of composition); new dedicated framing-note declined on over-engineering-for-decline grounds (4 ambiguous candidates' composition cases are adequately articulable inline in ADR-0061 §Consequences body prose, which is the canonical provenance location for audit findings per plan Step 0.5 authoritative rule on tmp/-artifacts-vs-ADR-body). 9-primitive roster preserved. Canon object-class inventory unchanged at 4 categories. Concepts yaml holds at v12. Zero canon-body edits. 4 pre-existing canon-prose references to "asymmetric-joint-commitment" remain untouched as composition-prose (not slug-references).

  Option (e) park-with-triggers rejected as artificial: Q4 failure is structural (no distinct protocol surface) rather than evidence-dependent; no plausible operational-pressure trigger could generate a distinct protocol surface without a prior ADR modifying ADR-0050 or ADR-0047 Layer 2 themselves. Re-visit conditions articulated in §Consequences as falsifiable but structure-dependent.
supported_by:
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0047-power-multi-layer-decomposition.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0048-power-expressive-constructed-modes.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0050-sociality-side-b-plus-primitive.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0052-reciprocity-trust-glossary-with-framing.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0054-rewilding-thesis-decline-with-triggers.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0055-encounter-as-composition-framing-note.md
  - /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-derived-terms-reciprocity-trust.md
  - /Users/darrenzal/projects/spore/docs/project-vision.md
  - /Users/darrenzal/projects/spore/docs/foundations/governance-artifacts-and-graph-projections.md
  - /Users/darrenzal/projects/spore/docs/foundations/federation-protocol.md
authorized-by: "operator directive 2026-04-23 ADR-0061 Step-2 decision-gate: Option (d) decline admission + sub-option (d-1) prose-only §Consequences articulation, no framing-note. Rationale per operator: Q4 distinct-protocol-surface earning-test fails for all 5 candidates; composition already appears 4× in canon prose; ADR-0050:137 explicitly deferred 'unless operational pressure surfaces' and current evidence does not show such pressure; ADR-0048 parsimony-as-earning-test-outcome discipline requires decline when test fails; Option (e) park-with-triggers rejected as artificial because Q4 failure is structural not evidence-dependent; ADR-0052 framing-note extension declined on scope-bleed grounds."
queue_reference: "Parked dedicated-ADR candidates queue from `project_canon_rebuild_phase_3b.md` memory § Pending and CLAUDE.md item #23 'Phase 4 + Phase 5 + dedicated-ADR + pattern-library + canon-object-class pending' — first pick of four: smallest surface, clean earning test. ADR-0050:137 explicit parking phrase ('future canon work if operational pressure surfaces') was the deferral source this ADR resolves."
affects_canon:
  - docs/research/canon-decisions/0061-asymmetric-joint-commitment-slug-disposition.md
related_adrs:
  - spore:ADR-0045-care-cross-cutting-doctrine
  - spore:ADR-0047-power-multi-layer-decomposition
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0050-sociality-side-b-plus-primitive
  - spore:ADR-0052-reciprocity-trust-glossary-with-framing
  - spore:ADR-0054-rewilding-thesis-decline-with-triggers
  - spore:ADR-0055-encounter-as-composition-framing-note
concepts:
  - joint-commitment
  - asymmetric-commitment
  - care-commoning
  - reciprocity
---

# ADR-0061 — Asymmetric-Joint-Commitment Slug Disposition: Decline Admission (Option d)

## Status

draft (authored 2026-04-23 under `adr-0061-asymmetric-joint-commitment-slug-disposition` decision-gated plan; Option (d) decline admission + sub-option (d-1) prose-only §Consequences articulation per operator Step-2 decision-gate)

## Context

### Deferral source: ADR-0050 explicit parking

ADR-0050 (sociality-side-b-plus-primitive, 2026-04-22) admitted `joint-commitment` as Spore's 9th primitive / 6th coordination verb. §"Relationship to ADR-0047 asymmetric-commitment" (lines 135-137) explicitly named the composition of ADR-0047 Layer 2 `asymmetric-commitment` with the newly-admitted `joint-commitment`:

> "With ADR-0050 admitting joint-commitment as distinct primitive, the natural extension is **asymmetric-joint-commitment**: joint-commitments where parties bind disproportionately (e.g., land-treaty between state and indigenous nation; sacred-joint-commitment between ancestor-lineage and successor-lineage; federation-joint-commitment where larger peer sets more of the protocol-surface). This extension is not authored in ADR-0050 (future canon work if operational pressure surfaces); the compositional availability is noted as canon-implication."

ADR-0050 §Consequences line 215 reiterated:

> "ADR-0047 asymmetric-commitment mode extends compositionally... The extension is canon-available; specific canon-work to admit it as named slug deferred unless operational pressure surfaces."

The term `asymmetric-joint-commitment` subsequently appeared in two additional canon-body locations as composition-prose without dedicated slug: `docs/project-vision.md:57` (joint-commitment bullet §Composition) and `docs/foundations/governance-artifacts-and-graph-projections.md:44` (mirror section). Four canon-prose occurrences total, named but not slugged — a known composition awaiting operational-pressure evaluation.

### Queue position in dedicated-ADR backlog

Per `project_canon_rebuild_phase_3b.md` memory § Pending and CLAUDE.md item #23 "Phase 4 + Phase 5 + dedicated-ADR + pattern-library + canon-object-class pending," four dedicated-ADR candidates accumulated across Phase 3b + post-Phase-3b arc (ADR-0049 through ADR-0055):

1. `asymmetric-joint-commitment` as named slug (ADR-0047 Layer 2 + ADR-0050 composition) — THIS ADR
2. `asymmetric-reciprocity-pair` (ADR-0052 3b.6 operator-declined on scope-bleed)
3. `membrane-as-self-produced` (ADR-0053 R-Mem-1 residue; autopoiesis-active Membrane reading)
4. `participatory-sense-making` admission (ADR-0053 R-Sig-1 residue; deeper Side-B answer to enactive critique of signal)
5. `co-presence-Field-condition` sub-stratification (ADR-0055 R-Enc-1 residue; Trigger E-5)

ADR-0061 was first pick (smallest surface; clean earning test against the same parsimony-as-earning-test-outcome discipline (ADR-0048) that closed 3b.8 rewilding-decline (ADR-0054) and post-3b Encounter-evaluation (ADR-0055)).

### Earning-test framework (per ADR-0048 discipline)

Per ADR-0048 parsimony-as-earning-test-outcome-not-axiom: a slug earns canon admission when (a) it has a protocol surface specifiable as defined inputs, outputs, and governance that is not already covered by existing primitive operations, AND (b) it has operational implementations across instance families at identifiably different scales of coordination. ADR-0048 established this discipline operational-across-candidates rather than selectively-invoked: admission requires pass; decline when earning test fails is canonically clean.

For a proposed derived-glossary-slug naming a composition of two existing primitives, the earning test specializes:

- **Q1** — Does the composition correspond to a genuine Gilbertian joint-commitment (per ADR-0050) at a scale where the joint-commitment is multi-party-simultaneous, not a sum of bilateral agreements?
- **Q2** — Does asymmetric-binding (per ADR-0047 Layer 2 criteria) obtain across participants?
- **Q3** — Does naming the composition as a dedicated slug add expressive capacity beyond the composition-prose already present in canon body?
- **Q4** — Does the composition have a protocol surface distinct from the union of ADR-0050 operations + ADR-0047 Layer 2 asymmetric-binding terms declared at commitment-formation?

**Q4 is the earning-test (a) gate specialized to composition candidates.** If Q4 fails — if the composition's operations are exactly the union of its component primitives' operations — then the slug fails the earning test regardless of operational recurrence.

### Step 0.5 audit — five candidates evaluated

The audit (captured in `tmp/adr-0061-audit-manifest-2026-04-23.md`, findings paraphrased below for canonical provenance per plan Step 0.5 authoritative rule on tmp-artifacts-vs-ADR-body) evaluated five operational candidates drawn from Spore bridge notes + IC/PM canon + Johar corpus + external-tradition citations:

**Candidate 1 — Federation hub-and-spoke protocol adoption.** A hub federation and multiple member-nodes form a joint-commitment to a shared protocol version; the hub commits to N-1 compatibility guarantees simultaneously while each member commits to 1 compatibility guarantee. Q1 PASS (protocol-version adoption is the ADR-0050-paradigm irreducibly-joint coordination case per §Consequences line 224: "Protocol-version compatibility is multi-party-simultaneous by construction"). Q2 PASS (hub bears structurally greater maintenance obligations by construction). Q3 PARTIAL (the composition is describable as "joint-commitment where the hub also bears asymmetric-binding" — the term `asymmetric-joint-commitment` is already present in canon prose with equivalent expressive capacity). Q4 FAIL (operations are form-joint-commitment + asymmetric-binding-terms-declared + hold-accountable-via-demand-right — exactly the union of ADR-0050 + ADR-0047 Layer 2). Evidence: E-type-A PRESENT (federation-protocol.md documents hub-and-spoke compatibility structures in power-capture mechanism 3); E-type-B PARTIAL (Gilbert + Kittay/Folbre/Baier cited but neither tradition names "asymmetric-joint-commitment" as distinct phenomenon); E-type-C WEAK; E-type-D ABSENT. **Classification: AMBIGUOUS.**

**Candidate 2 — BKC pool stewardship within commitment pools.** Pool-formation (multiple members jointly commit to forming a commitment pool) and ongoing stewardship (specific stewards bear continuous maintenance/curation obligations) as potentially-composed asymmetric-joint-commitment. Q1 PARTIAL for pool-formation (Gilbertian joint-commitment), AMBIGUOUS for stewardship (stewardship may be a separate asymmetric-commitment rather than a continuation of the joint-commitment; steward role is often assigned or accepted individually after pool formation). Q2 PASS (Kittay/Folbre asymmetry between stewards and pool members). **Q3 PARTIAL-NO: the semantic analysis reveals this is better analyzed as TWO distinct coordination acts — (1) pool formation = joint-commitment (ADR-0050, symmetric or near-symmetric) + (2) stewardship = asymmetric-commitment (ADR-0047 Layer 2, individual or assigned). Collapsing them into "asymmetric-joint-commitment" obscures the temporal/compositional boundary between formation and ongoing stewardship; naming here would REDUCE expressive precision.** Q4 FAIL. **Classification: DECLINE-SUPPORTING** — the case supports decomposition into existing components more faithfully than composition into a fused slug.

**Candidate 3 — Caregiver-care-receiver joint-commitment (elder-care arrangements).** Family collective forms care-commitment for elder; primary caregiver bears disproportionate ongoing labor. Q1 PARTIAL (Gilbertian reading applicable but not canonical for informal family arrangements — most actual elder-care is cluster of bilateral commitments + social norms, not formal joint-commitment). Q2 PASS (Kittay nested dependencies paradigm case). Q3 PARTIAL (conditional on Q1 being Gilbertian). Q4 FAIL. Evidence weak (E-type-A WEAK; E-type-B PARTIAL; E-type-C ABSENT; E-type-D ABSENT). **Classification: AMBIGUOUS.**

**Candidate 4 — Land-treaty (state-and-indigenous-nation).** The paradigm case cited explicitly in ADR-0050:137 and project-vision.md:57. Q1 PASS (treaties are archetypal joint-commitments formed by consent under common knowledge, rescindable only by mutual agreement). Q2 PASS (state retains sovereignty instruments the indigenous nation does not reciprocally hold). Q3 PARTIAL (composition explicitly named `asymmetric-joint-commitment` in canon prose already). Q4 FAIL (same union-of-components structure). **Strongest tradition-count of any candidate** (Gilbert + Borrows five-sources-of-law + Baier asymmetric-vulnerability; E-type-B STRONG). However E-type-A is illustrative-only (cited as composition-instance in ADR-0001 + ADR-0050, not as operational Spore-instance-family running system). **Classification: AMBIGUOUS** — highest tradition-support, but Q3 answer is "already named in canon prose" and Q4 is structural failure.

**Candidate 5 — IC memory stewardship.** Per IC intelligence-primitives.md line 114: "Attribution labor, curation labor, and preservation labor in an intelligence commons are asymmetric-care-relations between memory stewards and commons beneficiaries." Q1 AMBIGUOUS (IC memory governance involves multiple parties but joint-commitment structure is implicit — no formal Gilbertian "open expression of readiness under common knowledge" ceremony; arrangement may be cluster of asymmetric-commitments rather than fused joint-commitment at collective layer). Q2 PASS (Kittay nested dependencies; Folbre care-sector labor asymmetry applied to commons stewardship). Q3 CONDITIONAL on Q1. Q4 FAIL. Evidence: E-type-A PRESENT (IC memory-governance is operational running system); E-type-B PRESENT (Hess/Ostrom + Kittay, 2 traditions); E-type-C PRESENT (IC intelligence-primitives.md line 114). **Classification: AMBIGUOUS** — strongest evidence profile but Q1 ambiguity blocks robust classification.

### Aggregate findings

| Candidate | Q1 | Q2 | Q3 | Q4 | Class |
|---|---|---|---|---|---|
| 1. Federation hub-and-spoke | PASS | PASS | PARTIAL | FAIL | AMBIGUOUS |
| 2. BKC pool stewardship | PARTIAL | PASS | PARTIAL-NO | FAIL | DECLINE-SUPPORTING |
| 3. Elder-care arrangement | PARTIAL | PASS | PARTIAL | FAIL | AMBIGUOUS |
| 4. Land-treaty (state/indigenous) | PASS | PASS | PARTIAL | FAIL | AMBIGUOUS |
| 5. IC memory stewardship | AMBIG | PASS | CONDITIONAL | FAIL | AMBIGUOUS |

Across all candidates: Q1 2× PASS / 2× PARTIAL / 1× AMBIGUOUS; Q2 5× PASS; Q3 5× PARTIAL or PARTIAL-NO (naming adds vocabulary governance but no expressive capacity beyond canon-prose already present); **Q4 5× FAIL (structural, not evidence-dependent — no candidate demonstrates protocol surface distinct from union of ADR-0050 + ADR-0047 Layer 2 operations)**.

Aggregate: **0 admission-supporting / 1 decline-supporting / 4 ambiguous.** Plan-rubric-per-Step-0.5: "All candidates decomposable or ambiguous → lean (d) decline admission" applies — 0 robust admission-supporting cases; Q4 failure is uniform across all five.

### Option analysis (five options considered at Step 1)

**Option (a) derived glossary slug admission** — rejected on earning-test grounds. Admitting a slug for a composition whose protocol surface is fully covered by its component primitives sets a precedent for composition-naming-without-earning-test-discipline, which ADR-0048 parsimony-as-earning-test-outcome discipline explicitly contradicts. Vocabulary-governance-stability is not sufficient justification independent of earning-test pass.

**Option (b) mode-across-primitives** — rejected on category-fit grounds. Modes are qualities of operation (per ADR-0050 method-insight iii: "modes are qualities of operation, not compositions of operations"). Asymmetric-joint-commitment is a composition (ADR-0047 Layer 2 + ADR-0050) applied to specific commitment instances — it is not a quality of how any primitive operates in general. ADR-0048's mode-category was built for expressive/constructed power contrasts with allocational power (qualities of operation), not for compositions of operations.

**Option (c) subtype (declined per ADR-0052 scope-bleed precedent)** — rejected as less-substantive than Option (d). Sub-typing joint-commitment would inflate primitive taxonomy. Option (d) achieves the same canonical outcome with better articulation of why the decline holds.

**Option (d) decline admission (decomposable)** — **SELECTED.** Earning test (a) fails for the composition; decline is the canonically-clean outcome per ADR-0048 parsimony-as-earning-test-outcome discipline. Sub-option (d-1) prose-only §Consequences articulation selected over (d-2) reciprocity-trust-framing-note-extension and (d-3) new-dedicated-framing-note. Rationale: ADR-0052 framing-note scope is reciprocity three-mode composition, not joint-commitment composition — extending it would be scope-bleed. A new dedicated framing-note for a decline outcome is over-engineering (ADR-0052's framing-note pattern was established for derived-ADMIT outcomes; Option (d) is a decline, and the ADR §Consequences is the appropriate canonical home). The four ambiguous composition cases are adequately articulable inline in this ADR's §Context above and §Consequences below.

**Option (e) park-with-triggers (per ADR-0054 rewilding-decline-with-triggers pattern)** — rejected as artificial. Q4 failure is structural (no distinct protocol surface) rather than evidence-dependent; no plausible operational-pressure trigger could generate a distinct protocol surface without a prior ADR modifying ADR-0050 or ADR-0047 Layer 2 themselves. Park-with-triggers fits cases where decline is contingent on evidence-state (ADR-0054's rewilding-thesis has six evidence-contingent triggers: federation-node institutional collapse, sustained ambient-power phenomena, expressive/constructed-mode systematic collapse, new Johar bridge-note with non-accommodable examples, cross-tradition convergence 3+ independent sources, or exogenous Tier-1 finding). Asymmetric-joint-commitment composition's structural failure is not in that shape — the re-visit conditions below are falsifiable but depend on prior-ADR-changes, not on operational-evidence-accumulation.

## Decision

**decline.** The slug `asymmetric-joint-commitment` is NOT admitted to `docs/research/concepts-p2p-wiki.yaml` (v12 holds). No canon-body edits. No framing-note authored.

Per ADR-0048 parsimony-as-earning-test-outcome-not-axiom discipline: the composition of ADR-0047 Layer 2 `asymmetric-commitment` with ADR-0050 `joint-commitment` fails earning-test (a) — Q4 (distinct protocol surface) FAILS uniformly across all 5 audit candidates. The composition is fully expressible by the union of the component primitives' operations + pre-existing canon-prose references (4 occurrences: project-vision.md:57, governance-artifacts-and-graph-projections.md:44, ADR-0050:137, ADR-0050:215). Vocabulary-governance-stability alone is not sufficient justification for slug admission under the earning-test discipline operational since ADR-0048.

ADR-0050:137's explicit deferral ("future canon work if operational pressure surfaces") is resolved: the audit found operationally-real composition cases (federation hub-and-spoke, land-treaty, IC stewardship if-Gilbertian), but "operational presence of the composition" ≠ "operational pressure for distinct slug" when the composition's operations are the union of existing primitives' operations and the composition is already named in canon prose.

## Consequences

### Canon state preserved

- **9-primitive roster preserved** (ADR-0044 baseline extended by ADR-0049 + ADR-0050). Neither admitting `asymmetric-joint-commitment` as slug nor as mode would change this count, but the decline preserves the earning-test discipline under which the 9-count was earned.
- **Canon object-class inventory unchanged at 4 categories** (primitives / cross-cutting doctrines / modes-across-primitives / properties-on-primitives) + 6 derived glossary slugs. ADR-0061 does not add or remove any category member.
- **Concepts yaml holds at v12.** No version bump. `joint-commitment` (v8) and `asymmetric-commitment` (v5) slugs remain unchanged in canon; the composition of the two is referenceable via compound `concept:` values in bridge-note R-claims (`concepts: [joint-commitment, asymmetric-commitment]`) following the existing `reciprocity` + `asymmetric-commitment` pattern documented in `canon-framing-derived-terms-reciprocity-trust.md` §7 routing-discipline.
- **Zero canon-body edits.** The four pre-existing canon-prose references to "asymmetric-joint-commitment" (project-vision.md:57, governance-artifacts-and-graph-projections.md:44, ADR-0050:137, ADR-0050:215) remain untouched — they are composition-prose (joint-commitment + asymmetric-commitment named in context), not slug-references, and their continued presence documents the composition as canon-legible without requiring slug admission.

### Relationship to prior ADRs

- **ADR-0050 (sociality-side-b-plus-primitive)**: deferral resolved. Line 137 "future canon work if operational pressure surfaces" + line 215 "deferred unless operational pressure surfaces" are closed: ADR-0061 executes the dedicated earning-test evaluation and declines. ADR-0050 file unchanged; the composition prose in ADR-0050 remains canon-legible as composition-prose referencing two admitted primitives, not as forward-looking reference to a future slug.
- **ADR-0047 (power-multi-layer-decomposition)**: unchanged. Layer 2 `asymmetric-commitment` operates unchanged; the composition with `joint-commitment` is available via compound concept-reference but not dedicated-slug.
- **ADR-0048 (power-expressive-constructed-modes)**: parsimony-as-earning-test-outcome-not-axiom discipline validated again across the composition-candidate class. Phase-3b + post-3b arc composition-candidate dispositions now include: (i) rewilding-thesis decline-with-triggers (ADR-0054); (ii) Encounter decomposition-framing-note (ADR-0055); (iii) asymmetric-joint-commitment decline-inline (ADR-0061). Three declines under the same discipline, complementing two admissions (ADR-0049 reproduction-continuity + ADR-0050 joint-commitment) — the discipline operates symmetrically.
- **ADR-0052 (reciprocity-trust-glossary-with-framing)**: cross-ref via precedent-pattern. ADR-0052 declined to slug `asymmetric-reciprocity-pair` on scope-bleed grounds even though the asymmetric-reciprocity composition is real (three-mode reciprocity composition: symmetric-dyadic / asymmetric-commitment-pair / joint-commitment-at-both-ends). The composition-machinery-already-present principle from ADR-0052 §"Why no named subtype for asymmetric-reciprocity" (framing-note §3.4) applies equivalently here: `asymmetric-commitment` already carries the primitive-machinery, and layering a composition-sub-slug would duplicate without adding expressive capacity. ADR-0061 is the dedicated-ADR exercise of the same principle applied to joint-commitment's composition with asymmetric-commitment.
- **ADR-0054 (rewilding-thesis-decline-with-triggers)**: pattern-comparison. ADR-0054 declined under Option A with 6 operationally-falsifiable evidence-dependent re-opening triggers. ADR-0061 declines under Option (d) with re-visit conditions that are structure-dependent rather than evidence-dependent (see "Future-revisit conditions" below). Both are canonically-clean declines; they differ in whether re-opening is sensitive to evidence-accumulation or to structural changes in prior ADRs.
- **ADR-0055 (encounter-as-composition-framing-note)**: pattern-comparison. ADR-0055 used hybrid decline-with-framing-note (admit-as-glossary-slug `encounter` + framing-note articulating composition + park pattern-library candidate with 5 evidence-triggers). ADR-0061 differs in three respects: (i) no slug admission (ADR-0055 admitted `encounter` as derived glossary slug; ADR-0061 does not admit `asymmetric-joint-commitment` as slug); (ii) no dedicated framing-note (operator sub-option (d-1) prose-only); (iii) no pattern-library parking (ADR-0055 parked federation-encounter as pattern-library candidate with triggers E-1 through E-5; ADR-0061 declines inline without pattern-library parking because the composition's structure is primitive-level, not pattern-level). ADR-0055 + ADR-0061 together establish that post-Phase-3b decline-outcomes admit a range of articulation-depths matched to the composition's canonical shape: derived-glossary-slug (ADR-0055 encounter), decline-with-evidence-triggers (ADR-0054 rewilding), decline-inline-prose-only (ADR-0061 asymmetric-joint-commitment).

### Future-revisit conditions (structure-dependent, not evidence-dependent)

ADR-0061 may be re-evaluated if one of the following structural changes occurs in prior-ADR state:

**R-1 — New operation admitted to either component primitive that creates a separable protocol surface for asymmetric-joint-commitment specifically.** If a future ADR admits a new operation to `joint-commitment` (beyond the current four: form-joint-commitment / rescind-by-concurrence / hold-accountable-via-demand-right / extend-joint-commitment) OR to `asymmetric-commitment` (Layer 2) that applies specifically to joint-commitment scope and has no equivalent in individual-scale `commitment`, the composition may acquire a distinct protocol surface that Q4 currently denies. Example hypothetical: an operation `rescind-by-asymmetric-concurrence` (whereby parties with greater structural obligation have weighted rescission-rights) would be a joint-commitment-only operation inflected by asymmetric-binding; if admitted, the composition it operates over would have a distinct protocol surface ADR-0061 currently denies. This is falsifiable (a new operation is a structural change visible in canon) but not operationally-pressure-driven.

**R-2 — ≥3 federation / instance-family cases emerge with operational asymmetric-joint-commitment patterns that demonstrably exceed the union of ADR-0050 + ADR-0047 Layer 2 operations.** This condition is evidence-adjacent but stricter than Option (e) park-with-triggers: the demonstration must show that the cases cannot be modeled as two distinct coordination acts (joint-commitment formation + asymmetric-commitment at formation-time) or as a compound concept-reference (`concepts: [joint-commitment, asymmetric-commitment]`). Per Candidate 2 (BKC pool stewardship) audit finding, the likely default analysis for operational cases is decomposition; cases that resist decomposition would need to demonstrate operations or governance not present in the union. This condition is falsifiable but has not been observed to date.

**R-3 — ADR-0050 or ADR-0047 Layer 2 is itself modified (superseded, extended, or partially-superseded via a new ADR).** If either component primitive's protocol surface changes, the composition's Q4 status may change. This is falsifiable (visible in canon-decisions directory).

**Re-opening authority: operator only; R-1/R-2/R-3 are falsifiable-observable but not auto-firing.** This matches ADR-0055 Encounter re-opening discipline (triggers are observable; operator judges whether a specific change matches a specified condition). Re-opening requires a new plan authored citing the structural change as r_claim source and operator authorization at new-plan's Step-2 gate.

### Precedent contribution

ADR-0061 establishes a refined pattern for composition-candidate dispositions: **decline-inline-prose-only is appropriate when (i) the composition's protocol surface is exactly the union of its component primitives' operations, (ii) the composition is already named in canon prose via the component primitives' prose, and (iii) the composition is not evidence-trigger-resolvable because the failure is structural.** This pattern complements but is distinct from:

- **Decline-with-evidence-triggers** (ADR-0054 rewilding): appropriate when decline is contingent on current evidence-state and could be re-opened by evidence-accumulation.
- **Decline-with-framing-note-composition** (ADR-0055 encounter): appropriate when the composition needs substantive positive articulation at framing-note layer and has a pattern-library admission pathway available.
- **Decline-via-scope-bleed** (ADR-0052 no `asymmetric-reciprocity-pair` slug): appropriate when slugging the composition would pre-empt or duplicate adjacent-phase work.

The discipline for choosing among these decline-variants: match the articulation-depth to the composition's canonical shape. Over-articulating a decline (e.g. creating a dedicated framing-note for a composition that is already named in canon prose) over-engineers for a decline outcome; under-articulating (e.g. declining without recording the composition's canonical cases) loses the audit provenance future reviewers need.

Parsimony-as-earning-test-outcome-not-axiom (ADR-0048) operates symmetrically across composition-candidates: admission requires earning test pass; decline is canonically-clean when test fails. ADR-0061 extends the operational record of this discipline — alongside ADR-0049 (admit) / ADR-0050 (admit) / ADR-0054 (decline) / ADR-0055 (decompose-and-park) — to four admitted primitives and three distinct decline-shapes within the same discipline frame.

### Paraphrase-test verdict

- **Composition coverage**: PASS via existing canon machinery. `joint-commitment` + `asymmetric-commitment` named jointly covers the composition's expressive capacity; the four pre-existing canon-prose occurrences of "asymmetric-joint-commitment" document the composition without slug admission.
- **Operational coverage**: PASS via existing primitive operations. Federation-protocol-version adoption with hub-and-spoke asymmetry; land-treaty; BKC pool formation + stewardship; elder-care family arrangements; IC memory stewardship — all expressible in current canon via compound concept-references and component-primitive operations.
- **Vocabulary-governance coverage**: PARTIAL. Bridge-note authors referencing the composition must use compound `concepts: [joint-commitment, asymmetric-commitment]` rather than a single dedicated slug. This is equivalent to the ADR-0052-precedent pattern for `reciprocity` + `asymmetric-commitment` compound references (canon-framing-derived-terms-reciprocity-trust.md §7 routing-discipline) and is canonically consistent with the scope-bleed discipline established there.

### Phase-3b + post-3b arc summary position

ADR-0061 is the 16th ADR in the canon-rebuild arc spanning 2026-04-22 / 2026-04-23 (ADRs 0044–0058 closed 15 items; ADR-0059 + ADR-0060 closed downstream propagation; ADR-0061 is the first of the parked-dedicated-ADR queue). It is the first dedicated-ADR in the queue and the fourth decline-outcome in the arc (complementing ADR-0054 rewilding, ADR-0055 Encounter, ADR-0052 asymmetric-reciprocity-pair-as-sub-slug). The parsimony discipline operated across this ADR consistently with its operation across the arc: admission earned when test passes, decline when test fails.

### Bridge-note routing discipline

When R-claim naming the asymmetric-joint-commitment composition:
- Use compound `concepts: [joint-commitment, asymmetric-commitment]` rather than minting a dedicated slug.
- When pluriversal relational-spiritual framing is in scope, combine with `concepts: [joint-commitment, asymmetric-commitment, pluriversal-commoning]` and flag R-Rec-1 (ADR-0052 framing-note §5.1) if reciprocity-residue is load-bearing.
- When care-commoning doctrine-lens applies (elder-care, dependent-carer), combine with `concepts: [joint-commitment, asymmetric-commitment, care-commoning]`.
- Do NOT mint `asymmetric-joint-commitment` as bridge-note-scoped slug without operator-approved frozen-vocab extension — concepts-p2p-wiki.yaml is v12 frozen.

### Validator expectation

Validator baseline 9 errors / 30 warnings held. No new doc_id admissions. No content changes to files other than this ADR.

## Evidence

- **Source deferral**: ADR-0050 §"Relationship to ADR-0047 asymmetric-commitment" (lines 135-137) + §Consequences line 215 — explicit "canon-available; specific canon-work to admit it as named slug deferred unless operational pressure surfaces."
- **Earning-test discipline**: ADR-0048 parsimony-as-earning-test-outcome-not-axiom — admission requires pass, decline when fails, operational-across-candidates not selectively-invoked.
- **Canon-prose occurrences of "asymmetric-joint-commitment" (4 pre-existing)**:
  - `docs/project-vision.md:57` (joint-commitment bullet §Composition)
  - `docs/foundations/governance-artifacts-and-graph-projections.md:44` (mirror section)
  - `docs/research/canon-decisions/0050-sociality-side-b-plus-primitive.md:137` (§"Relationship to ADR-0047")
  - `docs/research/canon-decisions/0050-sociality-side-b-plus-primitive.md:215` (§Consequences)
- **Candidate 1 evidence**: `docs/foundations/federation-protocol.md` (power-capture mechanism 3 gatekeeper-role-accrual); ADR-0050 §Consequences operational-implications BKC/Octo + federation cross-repo.
- **Candidate 2 evidence**: ADR-0050 §Consequences ("BKC/Octo council decisions and stewardship transfers now have joint-commitment vocabulary") + Ostrom commons stewardship + Kittay nested dependencies.
- **Candidate 3 evidence**: ADR-0045 care-commoning doctrine; Kittay, Noddings, Tronto cited in ADR-0047 Layer 2 + ADR-0052 framing-note.
- **Candidate 4 evidence**: ADR-0001 pluriversal-incommensurability + ADR-0050:137 explicit citation; Gilbert + Borrows + Baier three-tradition convergence.
- **Candidate 5 evidence**: `/Users/darrenzal/projects/intelligence-commons/docs/foundations/intelligence-primitives.md:104-114` (Hess/Ostrom knowledge commons framework + asymmetric-care-relations between stewards and beneficiaries); Kittay/Folbre care-sector labor asymmetry.
- **Decline-shape precedents**: ADR-0054 (decline-with-evidence-triggers) + ADR-0055 (decompose-and-park) + ADR-0052 §"Why no named subtype for asymmetric-reciprocity" (decline-via-scope-bleed).
- **Audit manifest** (tmp/ untracked per plan Step 0.5 authoritative rule): `tmp/adr-0061-audit-manifest-2026-04-23.md` — 5-candidate per-question evaluation + classification + evidence-type rubric application.
- **Decision-brief** (tmp/ untracked): `tmp/adr-0061-decision-brief-2026-04-23.md` — 5-option analysis + recommendation + per-option scope.
- **Pre-flight manifest** (tmp/ untracked): `tmp/adr-0061-preflight-manifest.txt` — hard-gate results: PREEXEC_SHA `512d008`, validator 9/30 baseline, slot 0061 empty, ADR-0060 active, yaml v12, target files all exist.

## Diff summary

- **New file**: `docs/research/canon-decisions/0061-asymmetric-joint-commitment-slug-disposition.md` (this ADR).
- **Unchanged**: `docs/research/concepts-p2p-wiki.yaml` (holds at v12); `docs/project-vision.md`; `docs/foundations/governance-artifacts-and-graph-projections.md`; `docs/research/connections/canon-framing-derived-terms-reciprocity-trust.md`; all prior ADR files (0047, 0048, 0050, 0052, 0054, 0055 all cross-referenced via related_adrs but unmodified).
- Validator expectation: 9/30 baseline held.
