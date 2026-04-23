---
doc_id: spore.canon-decision.field-rule-level-stratification
doc_kind: decision-record
status: active
adr_number: "0046"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-3-norms
  - spore.review.coherence-audit-2026-04-22:Phase-3b-deferral
r_claim_statement: |
  Capstone §3 Norms/protocols verdict ("admit as primitive (likely 'protocol') OR stratify field into rule-levels — ten of 17 traditions treat this load-bearing and structurally detailed — the most tradition-supported gap") and Tier-1 priority #4 ("Norms / protocols — ten traditions load-bearing, richest formalization in the corpus. Spore cannot express Ostrom's seven rule types or constitutional-amendment-threshold patterns") together flag Norms as the most tradition-supported gap in the Phase 3b deferral enumeration. Six dispositions were enumerated in the Phase 3b.2 decision-brief (`tmp/canon-phase3b2-norms-disposition-decision-brief-2026-04-22.md`); operator selected Option B: stratify the Field primitive into Ostrom rule-levels (operational / collective-choice / constitutional) and reference Ostrom's 7-rule-type taxonomy (boundary / position / choice / aggregation / information / payoff / scope). This lands capstone §3's second-limb verdict explicitly while preserving the 7-primitive parsimony Phase 3 (ADR-0044) established and the 3-member cross-cutting doctrine category Phase 3b.1 (ADR-0045) closed. Norms are constitutive of coordination situations (Searle 1995; Ostrom 2005 rules-in-use constitute action arenas; Governance-Process protocol-about-protocols), not operations in them; Field-stratification matches that constitutive role. Rule-operation intuitions are already covered by existing verbs (enact-rule = Commitment; invoke-rule = Signal; propose-amendment = Intent), so a protocol-primitive would be redundant with the coordination-verb layer. The rule-in-use / rule-in-form distinction aligns with ADR-0041's text-authoritative-vs-graph-projected discipline, extending that cross-ADR coherence. Four new concept slugs (`operational-rule`, `collective-choice-rule`, `constitutional-rule`, `rule-in-use`) admitted to `concepts-p2p-wiki.yaml` v4; Ostrom 7-rule-type names handled prose-only in canon body (operator-deferred slugification decision). ADR-0025 (primitive-roster-boundary-cleanup) partially superseded via prose in §Consequences: ADR-0025's demotion of governance-patterns from primitive-class to pattern-library is preserved for the generic pattern-library scope; Phase 3b.2 specifically re-admits rule-level stratification at Field-sub-structure-layer, not at primitive-class-layer. ADR-0025 file unchanged.
supported_by:
  - /Users/darrenzal/projects/spore/docs/research/corpus-review/research-commons-governance.md
  - /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md
  - /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0025-primitive-roster-boundary-cleanup.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0041-text-authoritative-representation.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0045-care-cross-cutting-doctrine.md
  - /Users/darrenzal/projects/spore/tmp/canon-phase3b2-norms-disposition-decision-brief-2026-04-22.md
authorized-by: "canon-rebuild-phase-3b-2 operator directive 2026-04-22 (Option B: stratify Field into Ostrom 3-level stack + 7-rule-type taxonomy; minimum 4 new slugs; Ostrom 7-type slug admission deferred to ADR author's canon-body-edit scope)"
queue_reference: "corpus-foundational-review-2026-04-21 capstone §3 Norms verdict + capstone §8 Tier-1 priority #4 + Phase-3b deferral from ADR-0044 enumerated list (item: Norms/Protocols)"
affects_canon:
  - docs/project-vision.md
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
  - docs/research/concepts-p2p-wiki.yaml
related_adrs:
  - spore:ADR-0025-primitive-roster-boundary-cleanup
  - spore:ADR-0041-text-authoritative-representation
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0045-care-cross-cutting-doctrine
  - spore:ADR-0001-pluriversal-incommensurability
  - spore:ADR-0008-collective-agency-at-field
  - spore:ADR-0016-field-holon-distinction
concepts:
  - operational-rule
  - collective-choice-rule
  - constitutional-rule
  - rule-in-use
  - protocol-society
  - polycentric-governance
---

# ADR-0046 — Field Rule-Level Stratification (Ostrom 3-level stack + 7-rule-type taxonomy)

## Status

active (authored + activated 2026-04-22 under `canon-rebuild-phase-3b-2-norms-protocols-disposition` plan, Option B)

## Context

The Phase 1 coherence-and-falsifiability audit (`tmp/canon-coherence-falsifiability-audit-2026-04-22.md`) and the corpus-foundational-review-v1 capstone (`docs/research/corpus-review/research-capstone.md`) both surfaced Norms/Protocols as a Phase 3b-deferred item. Phase 3 (ADR-0044) enumerated Norms alongside Care in the Phase 3b deferral list; Phase 3b.1 (ADR-0045) closed Care via Option F (third cross-cutting doctrine). Phase 3b.2 closes Norms.

The capstone §3 Norms verdict is authoritative:

> *"Admit as primitive (likely 'protocol') OR stratify field into rule-levels. Ten of 17 traditions treat this load-bearing and structurally detailed — the most tradition-supported gap."*
> — `docs/research/corpus-review/research-capstone.md` §3

Capstone §8 ranks this Tier-1 priority #4:

> *"Norms / protocols — ten traditions load-bearing, richest formalization in the corpus. Spore cannot express Ostrom's seven rule types or constitutional-amendment-threshold patterns … Recommended action: decision-record on admitting `protocol` as primitive or stratifying `field`; paired with PEP 1 / PEP 13 amendment-threshold split per §6."*

Capstone §3 paraphrase-test identified the gap explicitly: *"A norm can be framed as a field property, but Spore has no primitive for the level at which a rule operates (Ostrom's operational/collective-choice/constitutional stack). Spore cannot express the seven rule types or constitutional-amendment-threshold patterns."*

Six disposition options were enumerated in the Phase 3b.2 decision-brief (`tmp/canon-phase3b2-norms-disposition-decision-brief-2026-04-22.md`):

- **Option A** — Protocol as new 8th primitive (3 sub-formulations A.1/A.2/A.3). Lands capstone first-limb verdict. Rejected: breaks 7-primitive parsimony Phase 3 established; rule-operation intuitions are already covered by existing verbs (enact-rule = Commitment; invoke-rule = Signal; propose-amendment = Intent), making a protocol-primitive redundant.
- **Option B** — Stratify Field into Ostrom rule-levels. Lands capstone second-limb verdict while preserving 7-primitive parsimony.
- **Option C** — Decomposed across existing primitives. Rejected: paraphrase-test fails explicitly (capstone §3 names this failure mode); reproduces invisibilisation pattern.
- **Option D** — Preserve current framing (ADR-0025 extended). Rejected: honestly insufficient against capstone §3 "most tradition-supported gap" language.
- **Option E** — Pattern-library expansion (2 sub-granularities). Rejected: pattern-layer is proportion-mismatched to "most tradition-supported gap" stakes.
- **Option F** — Fourth cross-cutting doctrine. Rejected on category-fit grounds: the cross-cutting-doctrine category was built for practices-applied-as-lenses (reproductive/boundary/care-commoning); norms are *structural* (rules constitute action arenas), not lens-shaped.

Operator selected Option B (decision-brief §Decision log, 2026-04-22).

**Why Option B lands the verdict while preserving parsimony**: Norms are constitutive of coordination situations — Ostrom's rules-in-use *constitute* the action arena (UID 2005 Ch. 2); Searle's constitutive rules *generate* institutional reality; Governance-Process traditions operate protocol-about-protocols (IETF RFCs are themselves RFCs, PEP 1 is itself a PEP, Rust RFC 0002 is the RFC about the RFC process). Field-stratification matches that constitutive role. The rule-operation intuition that Option A would capture is already covered by existing coordination verbs: enact-rule is a Commitment (binding with specified terms), invoke-rule is a Signal (live transmission with algedonic threshold when applicable), propose-amendment is an Intent (pre-commitment coordination signal). Adding a Protocol primitive would be redundant with the coordination-verb layer.

**Why the 7-primitive parsimony move carries over**: Phase 3 (ADR-0044) and Phase 3b.1 (ADR-0045) both preserved the 7-primitive roster. ADR-0045's Option F threaded Care to doctrine-layer rather than primitive-layer; ADR-0046's Option B threads Norms to Field-sub-structure-layer rather than primitive-layer. The extend-existing-primitive move is analogous to how Membrane already stratifies (semi-permeable, filter / translate / authorize / attest) without being multiple primitives — Field gaining rule-level sub-structure is the same shape of move.

**Ostrom import is load-bearing**: Ostrom's 7-rule-type decomposition (UID 2005, Ch. 7, pp. 186-215) and 3-level action-situation stack (Kiser & Ostrom 1982; UID 2005 pp. 58-62, Fig. 2.4) is the richest single-tradition formalization in the 17-tradition corpus. Importing it into Field's primitive definition makes Spore literate in the commons-governance tradition at a level that Options C/D/E/F cannot match.

**Cross-ADR coherence with ADR-0041**: The rule-in-use / rule-in-form distinction (UID 2005, Ch. 1, pp. 18-20; McGinnis 2011 — *"the pivotal methodological commitment of the Bloomington School"*) maps to Spore's existing text-authoritative-vs-graph-projected discipline (ADR-0041). Just as Spore commits to text-authoritative-with-graph-as-derived-projection, Field-stratification commits to rule-in-use-with-rule-in-form-as-textual-projection: the working rule is canonical; formal text is a projection that can be regenerated (or observed to diverge) from practice. This extends ADR-0041's discipline from artifact authority to rule authority.

**Operational-earning**: Canon-review protocol v1/v2 itself operates protocol-about-protocols at three levels simultaneously — round rules are operational, protocol-version amendment is collective-choice, and the (currently-absent) amendment-threshold clause would be constitutional (capstone §8 Tier-2 #6 critique). BKC/Octo commitment pools carry all 7 Ostrom rule-types at operational-level plus meta-rules for pool-rule amendment at collective-choice-level. Poietic Match's matching algorithms are choice+aggregation rules at operational-level with protocol-layer specialization at collective-choice. Personal-operator (Dobby/DW) task-routing has operational rules; skill-invocation conventions and CLAUDE.md discipline operate at the higher levels. Operational-earning is the strongest of any option considered.

## Decision

**Edit — three-part bundle**:

### §1 project-vision.md Core Thesis Field bullet extension

Edit `docs/project-vision.md` L27 Field bullet. Current text ends at *"See `docs/research/canon-decisions/0008-collective-agency-at-field.md`."* After ADR-0046 activation, the Field bullet is extended with:

(a) Named 3-level action-situation stack: operational / collective-choice / constitutional rules. Operational rules govern day-to-day coordination within the field (how intents are surfaced, commitments entered, evidence recorded); collective-choice rules govern how operational rules are made, modified, and enforced; constitutional rules govern who is eligible to participate at the collective-choice level. Per Ostrom 2005 (UID Ch. 2, Fig. 2.4), the levels are recursive rather than strictly hierarchical — action at each level is itself an action situation.

(b) Referenced 7-rule-type taxonomy (prose-only, no slugification at this time per operator-deferred admission scope): boundary / position / choice / aggregation / information / payoff / scope rules as named analytic axes decomposing any rule configuration inside a level. Boundary rules specify who participates; position rules specify what roles exist; choice rules specify which actions are permitted from a position; aggregation rules specify how individual choices combine into collective outcomes; information rules specify what is visible to whom; payoff rules specify what costs/rewards attach; scope rules specify what outcomes/states are permissible. The taxonomy is referenced at canon-level as expressive machinery available for protocol design; canon does not require every protocol to enumerate all seven.

(c) Named rule-in-use / rule-in-form distinction and its ADR-0041 coherence. Rules-in-use are the working rules participants would reference when explaining their actions; rules-in-form are formal written rules. Compliance is assessed against rules-in-use; formal rules that are not working rules have no causal standing. This mirrors ADR-0041's text-authoritative-with-graph-as-derived-projection commitment at the rule layer: working practice is canonical, formal text projects that practice, and the two are kept coherent by active regeneration-and-reconciliation discipline.

### §2 constitutional-artifacts-and-graph-projections.md parallel-section extension

Edit `docs/foundations/constitutional-artifacts-and-graph-projections.md` §"The Coordination Ecology" (line 40) extend the "Structural primitives host the verbs" paragraph. After the existing sentence about field/holon/membrane being distinct primitives (ADR-0016), add a paragraph naming Field's internal stratification (3-level stack + 7-rule-type taxonomy axes + rule-in-use vs rule-in-form) consistent with the project-vision Field bullet. The parallel-section edit preserves internal-coherence discipline (ADR-0044 precedent: Core Thesis and parallel section must describe primitives consistently).

### §3 concepts-p2p-wiki.yaml v4 — 4 new slugs

In `docs/research/concepts-p2p-wiki.yaml`:

1. Bump version header from `v3` to `v4`, `frozen_at: 2026-04-22`, and add a version-note comment explaining the 4 slugs admitted for Phase 3b.2 Field-rule-level-stratification.

2. Add 4 new top-level slug entries at the end of the `concepts:` list (after `decentralization-theater`):
   - `operational-rule` — operational-level rule in Ostrom's 3-level stack (day-to-day coordination within a field)
   - `collective-choice-rule` — collective-choice-level rule (governs how operational rules are made/modified/enforced)
   - `constitutional-rule` — constitutional-level rule (governs eligibility to participate at collective-choice level)
   - `rule-in-use` — working rules participants reference when explaining actions (vs. rule-in-form = formal written rules); compliance assessed against rules-in-use

Each entry carries canonical_label, aliases, one_line_definition, primary_project per frozen-vocab conventions.

Ostrom's 7-rule-type names (boundary/position/choice/aggregation/information/payoff/scope) are **NOT** slugified in this ADR — operator deferred that admission decision to canon-body-edit scope, and prose-only enumeration in the Field bullet does not require slug-level vocab-governance. Future Phase 4 glossary work may revisit this.

## Consequences

### ADR-0025 relationship: partially superseded via prose (file unchanged)

ADR-0025 (`spore:ADR-0025-primitive-roster-boundary-cleanup`) demoted five concept-roster entries (`instance-model`, `spore-instance-model`, `intelligence-primitives`, `memory-layer-model`, `koi-net`) from `primitive-class=TRUE` to `FALSE`, and clarified the methodology rule: *"Bundle labels, model names, and current implementation names fail the primitive-class bar if they can be losslessly paraphrased by already-named concepts or by a transport-agnostic canon boundary."*

ADR-0046 does NOT modify the ADR-0025 file. The partial-supersession operates at the prose level only:

1. **ADR-0025's bundle-label demotion is preserved for its original scope** — governance-patterns-as-bundle-label remains at pattern-library layer, the five demoted entries remain demoted, and the methodology clarification remains in force for future inventory passes.

2. **ADR-0046 specifically re-admits rule-level stratification at Field-sub-structure-layer, not at primitive-class-layer**. The 3-level stack and 7-rule-type taxonomy are structural extensions to the existing Field primitive; they are not new primitives, bundle-labels, or implementation aliases. The ADR-0025 counterfactual probe (can this be losslessly paraphrased?) applies: rule-level stratification cannot be losslessly paraphrased by the existing 7-primitive roster, which is precisely the capstone §3 paraphrase-test failure that motivated Option B. The Field primitive existed before ADR-0025 and remains a primitive after ADR-0046; the extension is internal structure, not admission of a new primitive.

3. **The bundle-label question is untouched**. ADR-0046 does not promote `protocol`, `rule`, or any other label to primitive-class; it does not re-open ADR-0025's methodology item 4 as a general rule. It closes the capstone §3 Norms gap specifically by extending Field, not by re-evaluating the primitive-roster boundary.

Reverse-traceability: grep against `related_adrs` for `spore:ADR-0025-primitive-roster-boundary-cleanup`.

### ADR-0041 relationship: extended (rule-in-use / rule-in-form is text-authoritative at rule layer)

ADR-0041 (`spore:ADR-0041-text-authoritative-representation`) committed Spore to text-authoritative representation with graph-as-derived-projection at the artifact layer. ADR-0046 extends the same discipline to the rule layer:

- Rule-in-use is the working rule (canonical, observed in practice).
- Rule-in-form is the formal written rule (textual projection of the working rule).
- When the two disagree, the working rule has causal standing; the formal text is regenerated or corrected to match (or the divergence is surfaced as an operational discrepancy requiring explicit reconciliation).

This is not a modification of ADR-0041's scope; it is a recognition that the same authority-and-derivation pattern applies one layer up, at the rule layer. The coherence enables canon readers to reason about rule-divergence using the same mental model they already apply to text-graph divergence.

### ADR-0044 relationship: preserves 7-primitive roster; extends Field primitive definition

ADR-0044 (`spore:ADR-0044-core-thesis-primitive-roster-alignment`) established the 7-primitive roster (Field, Holon, Membrane structural; Intent, Commitment, Evidence, Signal coordination-verbs). ADR-0046 **preserves** that roster unchanged — no new primitive, no renamed primitive, no demoted primitive. Field's *definition* is extended with Ostromian rule-level stratification, but Field's *status* as one of three structural primitives is unchanged. The parallel ADR-0044 made at `docs/foundations/constitutional-artifacts-and-graph-projections.md` §"The Coordination Ecology" is extended in the same direction (§2 above).

### ADR-0045 relationship: preserved; doctrine-category unchanged

ADR-0045 (`spore:ADR-0045-care-cross-cutting-doctrine`) admitted `care-commoning` as third cross-cutting doctrine sibling to `reproductive-commoning` (ADR-0002) and `boundary-commoning` (ADR-0003). ADR-0046 does NOT extend the cross-cutting-doctrine category — Option F was rejected on category-fit grounds. The doctrine category remains at 3 members. The question of whether the doctrine-category is open-ended or capped (flagged in ADR-0045 §Consequences as unresolved policy) is not answered here; ADR-0046 demonstrates that at least one major Phase-3b item (Norms) lands at a non-doctrine layer, which is evidence that the doctrine pattern is not a general-purpose slot for Phase-3b gap candidates.

### ADR-0001 (pluriversal-incommensurability) held-tension overlap

ADR-0001 (`spore:ADR-0001-pluriversal-incommensurability`) is held-as-tension. Ostrom's rule-in-use / rule-in-form distinction and 3-level stack are Western analytic constructs; Pluriversal traditions treat rules as customary ritual per Borrows' five sources (sacred / natural / deliberative / customary / positivistic). Option B imports an Ostromian framing at Field-sub-structure-layer.

ADR-0046 does NOT collapse the held-tension. The Ostromian import is scoped to the coordination-grammar layer Spore already operates at (per ADR-0044 §Scope and frame acknowledgment and ADR-0001's first-class-canon status). Pluriversal framings of rule-structure remain incommensurable with Ostromian stratification at worldview level; the held-tension continues unchanged. The canon reader evaluating a Pluriversal-inflected coordination context applies the Ostromian vocabulary as a scoped-grammar tool, not as a universal-rule ontology. This parallels how ADR-0044 preserved ADR-0001's hold when committing to the 7-primitive roster.

Compound-commoning-school refusal of the 3-level stratification (Bollier-Helfrich, Free Fair and Alive Ch. 2 "OntoShift") is logged similarly: the OntoShift critique rejects the stratification as importing a statist governance grammar; ADR-0046 records this as an acknowledged objection at the frame-level (analogous to the Autopoiesis objection to Signal logged in ADR-0007 + capstone §4). The stratification stands as a scoped-grammar commitment, not a universal-ontological claim.

### Paraphrase-test verdict (per AC5)

**Partial pass — and partial is the correct shape.** The capstone §3 paraphrase-test was: *"A norm can be framed as a field property, but Spore has no primitive for the level at which a rule operates (Ostrom's operational/collective-choice/constitutional stack). Spore cannot express the seven rule types or constitutional-amendment-threshold patterns."*

Option B *passes* the test by expressing the 3-level stack and the 7-rule-type taxonomy as named, structured extensions to the Field primitive — not by paraphrasing them away. The stratification is explicit, the rule-types are enumerated prose-level in canon body, and the rule-in-use / rule-in-form distinction is named. Post-ADR-0046, Spore *can* express the constitutional-amendment-threshold pattern: a canon-review protocol's amendment-threshold clause is a constitutional rule (governing eligibility to set collective-choice rules), distinct from a protocol-version amendment rule (collective-choice) and round-operational rules (operational). This is the PEP 1 / PEP 13 split capstone §8 Tier-2 #6 called for.

The **partial**-ness is correct shape: norms are constitutive of action arenas, not operations within them, so the paraphrase-test's expectation of a "primitive for rule-operation" is itself a misreading. Rule-operations are already covered by existing verbs (enact-rule = Commitment, invoke-rule = Signal, propose-amendment = Intent). What was missing was the *level* at which a rule operates — and that is what Field-stratification supplies. The capstone §3 first-limb ("admit as primitive") would have produced a redundant primitive; the second-limb ("stratify field into rule-levels") produces the expressive gain without redundancy.

### Phase 3b.3 Power/Authority implications (per AC12 — strong requirement)

Phase 3b.2's Norms-disposition choice is dependency-coupled with Phase 3b.3's Power/Authority disposition. Capstone §3 Power verdict: *"admit as primitive OR as named asymmetry on commitment/membrane — second-sharpest gap."* Capstone §8 Tier-3 #15: *"tied to the `care` and `reciprocity-asymmetric` decisions above — resolve those first, then revisit."*

Option B creates the cleanest Phase 3b.3 decision space of any Phase 3b.2 option. Three implications follow:

**1. Power becomes authority-to-set-or-amend-rules-at-level over the Field stratification.** The 3-level stack (operational / collective-choice / constitutional) is exactly the structure Power naturally decomposes against: who has authority at operational level (day-to-day coordination); who has authority at collective-choice level (rule-amendment); who has authority at constitutional level (setting participation eligibility). The PEP 1 / PEP 13 amendment-threshold pattern that capstone §8 Tier-2 #6 called out as "plainly behind the field" becomes directly expressible in Phase 3b.3: PEP 1-like (operational protocol edit) vs PEP 13-like (constitutional amendment requiring 2/3 supermajority) vs Debian 3:1 supermajority for Foundation Documents. Without Field-stratification, this split would have no canon surface to attach to.

**2. Enumerated-powers pattern (Debian §4/§5/§6, Python PEP 13, Apache PMC/Board split) becomes canon-expressible at Phase 3b.3.** Each rule-level can be associated with an enumeration of authorities (who may make operational rules; who may amend collective-choice rules; who may invoke or amend constitutional rules). The Phase 3b.3 decision can choose between admitting Power as a standalone primitive (capstone §3 first-limb Power verdict) or naming authority-asymmetry as a Field-stratification property (second-limb; tighter coupling to ADR-0046). Option B preserves both options for Phase 3b.3 — it does not foreclose either — but strongly enables the second-limb path.

**3. Polycentric governance (already canon at `docs/foundations/lexicon/field.md`, ADR-0006, ADR-0008) gets structural machinery.** Polycentricity is currently named at canon-level as multiple decision centres coordinating under an overarching rule system (Aligica-Tarko). ADR-0046 supplies the "overarching rule system" with structure: polycentric coordination means decision centres operate at operational level, with collective-choice or constitutional level shared (or contested) across centres. Phase 3b.3 can now frame Power's decomposition explicitly against this polycentric rule-structure. The authority-consequence coupling that ADR-0041's sibling `structural-legitimacy.md` names as the legitimacy condition becomes rule-level-specific: operational authority bears operational consequence; collective-choice authority bears rule-amendment consequence; constitutional authority bears participation-eligibility consequence.

Phase 3b.3 is NOT executed in this ADR. The implications above are flagged as available decision-space for that session; the specific disposition (Power as primitive vs. Power as Field-stratification property vs. something else) is deferred to Phase 3b.3's operator-decision-gate.

### Cross-Phase-3b implications (broader)

- **Phase 3b.4 (Reproduction-as-field-property)**: Reproduction as a field-property is now compositionally clean with rule-level stratification — renewal/continuity operates across the 3 levels (operational reproduction = pool-member turnover; collective-choice reproduction = rule-amendment cadence; constitutional reproduction = succession procedures per Governance-Process tradition). Phase 3b.4 can proceed independently; coupling is compositional, not dependent.
- **Phase 3b.5 (Identity-as-holon-property)**: Entry-rule (Ostrom's boundary-rule, Cox 1A user-boundary) touches identity (who-counts-as-participant). Phase 3b.5's Identity-as-holon-property decision may draw on the rule-in-use / rule-in-form distinction from ADR-0046 (identity-as-practice vs identity-as-declared-attribute), but the decision is not blocked by ADR-0046.
- **Phase 3b.6 (Reciprocity + Trust bundle)**: Reciprocity as derived-paired-commitments decision is independent. Trust-as-derived may draw on Governance-Process "earned authority" patterns; ADR-0046's Field-stratification gives earned-authority a rule-level anchor (authority earned at operational level does not transfer automatically to collective-choice level — a canon-expressible discipline).
- **Phase 3b.7 (glossary refinements)**: orthogonal; unaffected.

### IC/PM propagation

**Spore-only at this ADR.** Option B stratifies Field, which is a structural primitive shared across Spore/IC/PM canon grammar. However:

- IC's `intelligence-primitives` are coordination-verbs (retrieval, memory, evidence, grounding, evaluation, agentic-control, capability-routing) layered over their own foundation docs; IC's use of Field-as-substrate is mediated through `docs/foundations/memory-layer-model.md` and `docs/foundations/intelligence-primitives.md`. IC's foundation docs describe Field at a derived layer; ADR-0046's stratification does not force IC to mirror the extension at grammar-shape level.
- PM's `pm:Intent`, `pm:Commitment`, `pm:Evidence` are protocol-layer specializations over Spore's broad coordination-verbs; PM's Field-consumption is implicit in protocol primitives rather than named as such. PM does not currently enumerate Field-sub-structure; if PM adopts the stratification, it does so as an internal PM decision in its own session-atomic window.

IC and PM MAY adopt analogous Field-stratification in their own canon-decisions in independent author-sessions. ADR-0046 does NOT require or trigger cross-repo updates. If either project declines the stratification, their Field-treatment remains compatible with Spore's (Spore's stratification is additive structure, not a redefinition of Field's substrate role).

Rationale for Spore-only scope: the sharpest Phase 3b.2 motivating use cases (canon-review protocol amendment-threshold, BKC/Octo commitment-pool rule-structure, polycentric governance's "overarching rule system") all live at Spore's repo. IC and PM's use cases for Field-stratification are not yet surfaced as canon-review-protocol-produced claims. Coordinated update is available but not required.

### Operational-earning evidence summary

- **Canon-review protocol v1/v2**: operates protocol-about-protocols at three levels. Round rules are operational; protocol-version amendment is collective-choice; amendment-threshold is constitutional (currently absent — capstone §8 Tier-2 #6 critique). Post-ADR-0046, this 3-level shape is canon-expressible.
- **BKC/Octo**: commitment pools carry all 7 Ostrom rule-types at operational-level (entry/position/choice/aggregation/information/payoff/scope rules per pool configuration) plus meta-rules for pool-rule amendment at collective-choice-level. Constitutional-level rules operate at the bioregional-coordination layer where pool-families federate.
- **Poietic Match**: matching algorithms as choice+aggregation rules at operational-level; protocol-layer specialization (PM vs Spore broad primitive) at collective-choice-level; foundational PM design decisions as constitutional-level.
- **Personal-operator (Dobby/DW)**: task-routing has choice-rules (skill-invocation); aggregation-rules (briefing composition); information-rules (morning vs evening brief content scoping); scope-rules (freshness windows). Collective-choice operates via skill-file updates + CLAUDE.md discipline. Constitutional level operates via user-preference documents and plugin install choices.
- **In-repo evidence**: `docs/foundations/lexicon/field.md:55-113` (polycentric-governance), `docs/foundations/holonic-network-architecture.md:93-115` (Aligica-Tarko attributes), `docs/foundations/structural-legitimacy.md:26-49` (authority-consequence coupling as polycentric condition). Ostrom's polycentricity is canon; her 7-rule-types + 3-level stack were not — which is precisely the gap this ADR closes.

### Cross-doc impact (tracked, no edits required by this ADR beyond §§1-3)

- `docs/foundations/lexicon/field.md`: existing polycentric-governance content now composes naturally with rule-level stratification. No edit required; future Phase 4 glossary work may elaborate.
- `docs/foundations/structural-legitimacy.md`: authority-consequence coupling is now rule-level-specific. No edit required; Phase 3b.3 may elaborate if Power decision draws on the stratification.
- `docs/foundations/federation-protocol.md`: federation agreements can be structured using the 3-level stack (operational federation clauses vs collective-choice federation amendments vs constitutional federation-eligibility). No edit required at Phase 3b.2; Phase 4+ foundation-doc work may elaborate.
- `docs/patterns/governance-memory.md`: governance-memory pattern records decisions at all three levels; the existing pattern remains accurate and no edit is required.

If future review surfaces persistent mis-reads (e.g., readers treating the 7-rule-type taxonomy as exhaustive vs illustrative; or treating the 3-level stack as strictly hierarchical vs recursive), a subsequent canon-review round can revisit with clarifying prose at the affected canon surfaces.

### Downstream

- Phase 3b.3–3b.7 continue per ADR-0044's deferral enumeration; this ADR does not foreclose any. Phase 3b.3 in particular has its decision-space shaped by ADR-0046 but not pre-committed.
- Phase 2c (graph-projections realignment + zoom-invariance deletion + dual-axis scale-recurrence) is unaffected by ADR-0046.
- Phase 4 foundation-doc work may elaborate Field-stratification at sensor-and-oracle-governance, translation-and-bridge-governance, or actor-governance levels.
- IC/PM coordinated update of Field-stratification is *available* but *not required* by this ADR.
- Future canon-review (v2 or later) may revisit Field-stratification if Pass 3 triggers fire (new traditions surface that materially shift the 3-level or 7-rule-type analysis; readers consistently mis-read the stratification; commoning-school OntoShift refusal becomes load-bearing in a specific instance-family).

## Evidence

- **cluster_key**: `docs/research/canon-decisions:norms-disposition-phase-3b-2`
- **supports**: 8+ — capstone §3 Norms verdict (Tier-1 priority #4 ranking); capstone §7 protocol/rule-level candidate-slug enumeration; capstone §8 Tier-2 #6 amendment-threshold split recommendation; research-commons-governance.md §1 Ostrom 7-rule-types + 3-level stack + rule-in-use vs rule-in-form + R3 in-tradition claim; research-governance-process.md §2 constitutional/operational split + R1/R2 in-tradition claims; ADR-0041 text-authoritative discipline precedent; ADR-0044 Core Thesis primitive-roster establishment; ADR-0045 Option F precedent for preserving primitive parsimony at Phase-3b.
- **opposes**: 2 — Bollier-Helfrich OntoShift refusal of operational/collective-choice/constitutional stratification (logged as frame-level acknowledged objection, not a defeater); Pluriversal customary-ritual framing per Borrows' five sources (held as tension under ADR-0001, not resolved).
- **source**: corpus-foundational-review-v1 capstone §3 Norms + §8 Tier-1 #4 + §8 Tier-2 #6 (high confidence); ADR-0044 Phase 3b deferral list (high confidence); decision-brief operational-evidence sweep (high confidence given canon-review protocol meta-operational-earning).
- **Supporting bridge notes** (cross-tradition support for rule-level stratification): `spore.connection.polycentric-governance` (Aligica-Tarko), `spore.connection.p2p-wiki-pass-2-capstone-synthesis` (three-layer-coordination-stack), `spore.connection.institutions-and-extitutions` (substrate composition), `spore.connection.canon-framing-collective-agency`.
- **Opposing bridge notes**: none surface direct opposition to stratification *per se*; the refusals above are ontology-level, not specific-bridge-note-level.
- **Held-tension overlap**: ADR-0001 pluriversal-incommensurability (preserved; explicit acknowledgment above); no other held-tension ADR is touched.
- **Capstone-vs-DB drift check**: not applicable — the capstone §3 verdict is the source-of-truth for this disposition, not a cluster-count.
- **Adaptation note**: `r_claim_source` uses `capstone-section-3-norms` notation (avoiding § character for validator safety) plus the Phase-3b deferral linkback. This continues the Phase 3 + Phase 3b.1 r_claim_source pattern.

## Diff summary

**ADR file**:
- `docs/research/canon-decisions/0046-field-rule-level-stratification.md` — created (this file)

**Canon-body edits**:
- `docs/project-vision.md` — Field bullet at L27 extended with Ostrom 3-level stack + 7-rule-type taxonomy reference + rule-in-use vs rule-in-form distinction + ADR-0041 coherence anchor.
- `docs/foundations/constitutional-artifacts-and-graph-projections.md` — §"The Coordination Ecology" paragraph about structural primitives extended with parallel Field-stratification description.

**Frozen-vocab edit**:
- `docs/research/concepts-p2p-wiki.yaml` — v3 → v4; 4 new slugs added (`operational-rule`, `collective-choice-rule`, `constitutional-rule`, `rule-in-use`). Ostrom 7-rule-type names remain prose-only at canon-body layer (operator-deferred slugification decision).

**Historical references preserved** (unchanged): ADR-0025, ADR-0041, ADR-0044, ADR-0045 files (related-via-prose, not modified). Out-of-scope canon files not touched.

**Net**: 1 new ADR + 2 canon-body edits + 1 yaml vocab-extension (4 new slugs + version bump). No primitive count change. No primitive renames. 7-primitive roster preserved.
