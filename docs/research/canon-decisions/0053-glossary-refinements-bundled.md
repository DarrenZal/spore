---
doc_id: spore.canon-decision.glossary-refinements-bundled
doc_kind: decision-record
status: active
adr_number: "0053"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-4-evidence-attestation-of-execution
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-4-signal-autopoiesis-objection
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-4-commitment-rea-lineage-split
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-4-holon-terminological-orphan
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-4-membrane-permeability-double-boundary
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-7-frozen-vocab-double-boundary-candidate
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-8-tier-1-commitment-recommended-action
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-8-tier-2-signal-recommended-action
  - spore.canon-decision.core-thesis-primitive-roster-alignment:phase-3b-7-deferred-glossary-refinements
r_claim_statement: |
  Capstone §4 enumerates five primitive-bullet glossary-level refinements verbatim
  (Evidence-as-attestation-of-execution, Signal-with-Autopoiesis-objection,
  Commitment-40-year-REA-contradiction, Holon-terminological-orphan,
  Membrane permeability + double-boundary). ADR-0044 (Phase 3) inline-acknowledged
  these refinements at line 62 and explicitly deferred their full treatment to
  Phase 3b.7 (line 138: *"Commitment glossary note on 40-year REA contradiction —
  partially addressed inline in §Draft C; full glossary entry deferred"*).
  Capstone §8 places Commitment as Tier-1 *"highest-stakes unresolved
  disagreement"* (line 307) with explicit recommended action (a-b-c-d) and
  Signal as Tier-2 *"should address"* (line 325) with stance-template; the other
  three refinements are §4-implicit Tier-3 light treatments. Capstone §7
  (line 265) explicitly proposes `double-boundary` as glossary slug. This ADR
  closes the five refinements at primitive-bullet + glossary-slug layers per
  operator Option E (single bundled ADR with medium-depth Commitment treatment),
  closing the Phase-3b arc at glossary level for the 9-primitive roster.
supersedes: []
companion-ADRs:
  - 0044  # Phase 3 primitive-roster alignment that deferred these refinements
  - 0050  # Joint-commitment Side-B closure that carries joint-scale weight, freeing 3b.7 to address residual individual-scale Commitment stance
  - 0047  # Asymmetric-commitment ADR (Layer 2) already covers Care-asymmetric-binding context
  - 0048  # Modes-across-primitives canon-category that distinguishes glossary-level moves from primitive admission
  - 0046  # Field rule-stratification (sub-structure precedent for Membrane permeability/double-boundary as analytic axes)
  - 0049  # Reproduction-continuity primitive (parallel parsimony-as-earning-test discipline)
  - 0051  # Relational-identity property-of-Holon (sub-structure precedent for Holon-bullet refinement)
  - 0052  # Reciprocity-trust bundled-glossary-with-framing (immediate precedent for bundled-glossary disposition pattern)
concepts:
  - attestation-of-execution
  - permeability
  - double-boundary
phase: phase-3b-7
---

# ADR-0053 — Glossary Refinements Bundled (Evidence + Signal + Commitment + Holon + Membrane)

## Context

ADR-0044 (Phase 3, *"core-thesis-primitive-roster-alignment"*) aligned the Core Thesis to Spore's CFR-v1-blessed 7-primitive roster (3 structural: field/holon/membrane + 4 verbs: intent/commitment/evidence/signal — subsequently extended in Phases 3b.4 to add `reproduction-continuity` and 3b.5a to add `joint-commitment`, yielding the current 9-primitive roster). ADR-0044 line 62 enumerated five primitive-bullet glossary-level refinements that the corpus capstone §4 verdict reports surfaced ("survive the primitive-class bar with refinement footnotes"):

> *"Evidence-as-attestation-of-execution, Signal-with-Autopoiesis-objection, Commitment-40-year-REA-contradiction, Holon-terminological-orphan, Membrane permeability + double-boundary."*

ADR-0044 line 138 explicitly deferred the full glossary treatment of one of these (Commitment-40-year-REA-contradiction): *"Commitment glossary note on 40-year REA contradiction — partially addressed inline in §Draft C; full glossary entry deferred."*

Phase 3b.7 closes the five refinements as the glossary-level closing move of the Phase-3b arc, paralleling 3b.6's bundled-derived-admission disposition for Reciprocity + Trust. The five refinements are terminological clarifications of existing primitives; Phase 3b.7 admits no new primitives, doctrines, modes, or properties.

Per operator decision (Option E from `tmp/canon-phase3b7-glossary-refinements-decision-brief-2026-04-22.md`), the five refinements receive bundled treatment in this single ADR with one elevated treatment depth: the Commitment refinement gets a medium-depth bullet-extension naming the 40-year REA lineage and Spore's stance, in recognition that capstone §8 Tier-1 places this as *"the single highest-stakes Tier-1 priority"* (line 307). Operator declined the heaviest treatment (capstone Tier-1 (a)-(b)-(c)-(d) full named-stance ADR) on the grounds that ADR-0050's joint-commitment admission already closes the Side-B-vs-Side-A reading at the joint-scale; the residual individual-scale Bratman-individual-reduction debate operates as canonically-acknowledged residue rather than canonically-resolved question.

### Step 0.5 capstone re-verification findings

Step 0.5 plan-vs-evidence check (per 3b.4 discipline, extended in 3b.5a to full ADR-state re-verification + 3b.6 to paraphrase-composition rechecking) surfaced three significant findings that shape this ADR's depth and scope:

1. **Evidence refinement is already substantially complete at the bullet level.** `docs/project-vision.md:36` already reads *"Spore evidence is attestation-of-execution, not epistemological evidence; it tracks whether commitments were fulfilled and in what state, not what counts as knowledge in general."* The parallel bullet at `docs/foundations/governance-artifacts-and-graph-projections.md:38` carries the same clarification. ADR-0044's Phase 3 work closed the canon-body refinement; this ADR records the **decline** at canon-body layer and admits `attestation-of-execution` only as a searchable glossary slug to anchor the in-prose phrase.

2. **Commitment refinement is Tier-1 in capstone framing**, not implicit Tier-3 as the plan-Context summary read. Constitutional-artifacts.md:34 already partially carries the lineage acknowledgment (*"REA tradition has a 40-year unresolved split on whether commitment is irreducibly primitive (Gilbert/Geerts-McCarthy lineage) or derives from scheduled-event sub-states (Ševčík 2016 reading); Spore's stance is primitive-with-illocutionary-force, rejecting the scheduled-event-shadow reading"*). project-vision.md:34 does NOT carry the lineage. Operator-confirmed treatment depth: medium (lineage + stance), not heaviest (named-stance per (a)-(b)-(c)-(d) full).

3. **Signal refinement is Tier-2** (capstone §8 line 325) with explicit stance-template recommended action. Constitutional-artifacts.md:40 already carries an Autopoiesis-objection acknowledgment (*"Spore preserves signal-as-primitive even against Autopoiesis's reduction of Shannon-signal to structural coupling — a principled commitment to sender-receiver ontology at the coordination-grammar layer, not a denial of the Autopoiesis objection"*). project-vision.md:37 does NOT. Refinement work is parallel-synchronization-driven, not net-new acknowledgment in a vacuum.

The plan-vs-evidence pattern visible across all three findings: **governance-artifacts-and-graph-projections.md is partially ahead of project-vision.md** on the Signal + Commitment refinements (an artifact of how Phase 3 ADR-0044 Draft C was harvested). This ADR's canon-body work brings project-vision.md into parallel-synchronization with constitutional-artifacts.md and enriches both files where capstone evidence supports deeper treatment.

## Decision

**Bundle the five primitive-bullet glossary-level refinements into a single ADR-0053 with operator-confirmed Option E depth profile.** Specifically:

### Refinement 1 — Evidence: attestation-of-execution

**Verdict: decline canon-body work + admit glossary slug.**

- **Canon-body**: NO new bullet edit. The Evidence bullet at `docs/project-vision.md:36` and `docs/foundations/governance-artifacts-and-graph-projections.md:38` already carries the *"Spore evidence is attestation-of-execution, not epistemological evidence"* clarification per ADR-0044 Phase 3 Draft B/C work.
- **Glossary slug admission**: admit `attestation-of-execution` to `docs/research/concepts-p2p-wiki.yaml` v10 → v11 as a derived-glossary slug anchoring the in-prose phrase. Capstone §7 line 261 verdict: *"a possible glossary disambiguation for the execution/provenance subset of the evidence family."* Capstone v2 Fix 1 (line 375) reframed this from corpus-wide rename to *"one proposed reading of evidence, preserving the broader monitoring/evaluation reading"* — preservation is honored by NOT renaming the primitive and only admitting the disambiguation slug.
- **Scope-preservation note**: this ADR §Consequences explicitly notes that admitting `attestation-of-execution` as a glossary slug does NOT establish a corpus-wide rename; Commons monitoring-rule + Structured-Disagreement evaluation readings remain inside the broader `evidence` umbrella.

### Refinement 2 — Signal: Autopoiesis-objection

**Verdict: bullet-extension in `docs/project-vision.md` + harmonize with constitutional-artifacts.md treatment.**

- **Canon-body**: extend Signal bullet at `docs/project-vision.md:37` with capstone Tier-2 stance-template (line 325 verbatim recommended action: *"we treat signal as a named channel supported by MARL/VSM/DS/ABM/REA/Trust and acknowledge the enactive objection as standing"*). Spore's response is operational, not semantic: signal names a coordination-grammar primitive at the sender-receiver layer; the Autopoiesis structural-coupling reduction is acknowledged as a standing objection at the cognitive-science / enactive-grounding layer that does not defeat operational signal-as-primitive.
- **Cross-reference**: constitutional-artifacts.md:40 already carries this acknowledgment (*"a principled commitment to sender-receiver ontology at the coordination-grammar layer, not a denial of the Autopoiesis objection"*) — project-vision.md edit brings the two files into parallel-synchronization.
- **No new slug**: the Autopoiesis objection is acknowledged in prose; no `algedonic-signal` or `structural-coupling` slug admission this round (capstone candidates deferred — operator declined).

### Refinement 3 — Commitment: 40-year REA-split (medium-depth)

**Verdict: medium-depth bullet-extension naming REA lineage + Spore's stance + rejected alternative.**

- **Canon-body**: extend Commitment bullet at `docs/project-vision.md:34` with: (a) the 40-year REA/ValueFlows lineage enumeration — *"McCarthy 1982 excluded → Geerts-McCarthy 2000 added → Hruby 2006 as pattern → Ševčík 2016 collapses to scheduled-event sub-states → Foster 2024 firmness-of-plan partially derived from Intent"* (capstone §8 Tier-1 line 307 verbatim); (b) Spore's stance — *"primitive with illocutionary force per Gilbert/Searle/Tuomela"* (capstone §4 line 141 verbatim; ADR-0044 line 91 directive); (c) rejected alternative — *"rejects the Ševčík scheduled-event-shadow reading"* (capstone §4 line 141 + ADR-0044 line 91); (d) note that the corpus does not settle this and Spore's position names itself as a position, not a consensus report (capstone §7 line 293).
- **Cross-reference**: constitutional-artifacts.md:34 already partially carries this; the parallel edit enriches it with the McCarthy 1982 + Foster 2024 endpoints + Searle/Tuomela addition for stance-attribution symmetry.
- **Residue acknowledgment** (medium-depth, not heaviest): operator declined capstone Tier-1 (c)-(d) full treatment (Gilbert/Bratman individual-scale debate + VSM-absence-as-non-defeater) on the grounds that ADR-0050's joint-commitment admission already closes the Side-B-vs-Side-A reading at the joint-scale — the irreducibly-joint-binding verb is canon-admitted; the question of whether *individual-scale* commitment can be reduced to Bratman-stability-of-intention remains philosophically open in the literature and operates as canonically-acknowledged residue. Consequences §"Residues" enumerates explicitly.
- **No new slug**: lineage-cite is in-prose; no McCarthy/Geerts-McCarthy/Ševčík/Foster slug admissions this round.

### Refinement 4 — Holon: terminological-orphan acknowledgment

**Verdict: one-sentence bullet-extension naming terminological-orphan status.**

- **Canon-body**: extend Holon bullet at `docs/project-vision.md:28` with a closing sentence acknowledging that the *structure* (part-whole recursion, supervenience-without-reducibility) is widely supported across coordination traditions while the *Koestler 1967 vocabulary* is rare in modern coordination-theory literature. Cite supporting traditions: VSM Recursive System Theorem (logically equivalent to holon, Beer does not cite Koestler — capstone §1 line 26); List-Pettit supervenient group agents (capstone §1 line 26); Distributed Systems Holonic Modeling (capstone §1 line 26); REA Plan>Process>Event (capstone §1 line 26); Commons nested-enterprise (capstone §1 line 26).
- **Companion-term pointer (optional)**: cite *whole-part-relation*, *nested-agency*, *scale-linked-agency* as adjacent terms in the literature without canon-admission (per capstone §4 line 159 *"Koestler vocabulary rare. Not a demotion; a provenance note"*).
- **Cross-reference**: parallel update to constitutional-artifacts.md "Structural primitives host the verbs" paragraph (line 44) is structurally optional since that paragraph already names *"holon (part-whole recursive unit)"* without extended provenance discussion; harmonization-touch in constitutional-artifacts to acknowledge terminological-orphan status keeps the two files in parallel.
- **No new slug**: the orphan-acknowledgment is meta-prose, not a canonical concept.

### Refinement 5 — Membrane: permeability + double-boundary

**Verdict: bullet-extension naming both axes + admit `double-boundary` and `permeability` glossary slugs.**

- **Canon-body**: extend Membrane bullet at `docs/project-vision.md:29` with a sentence naming **permeability** (semi-permeable per Bollier-Helfrich; selectively gated passage of intents/commitments/signals/evidence) and **double-boundary** (Ostrom Cox-1A/1B; social inclusion boundary distinguished from ecological resource boundary) as two paired analytic axes on Membrane. Preserve distinction from frozen-vocab `filtering-membrane` (an opposition primitive about over-filtering as failure mode, not a Membrane axis).
- **Cross-reference**: parallel update to constitutional-artifacts.md "Structural primitives host the verbs" paragraph (line 44) — Membrane is currently mentioned in passing; harmonization adds the same two-axis acknowledgment.
- **Glossary slugs**: admit `double-boundary` (capstone §7 line 265 explicit candidate verbatim: *"Not a separate primitive; a named axis on `membrane`. Candidate slug: `double-boundary`"*) AND `permeability` (operator-added; closes the prose-without-slug asymmetry that would otherwise leave double-boundary slugged but its sibling axis prose-only). Both slugs are derived/glossary-level analytic axes on Membrane, not separate primitives. Yaml v10 → v11.

### What this ADR explicitly does NOT do

- **Does NOT admit new primitives, doctrines, modes, or properties.** All five refinements are terminological clarifications of existing primitives. The 9-primitive / 3-doctrine / 2-mode / 2-property roster is preserved unchanged. Capstone parsimony-as-earning-test-outcome (ADR-0048) discipline holds.
- **Does NOT settle the Bratman-vs-Gilbert individual-scale Commitment debate.** The medium-depth treatment names Spore's primitive-with-illocutionary-force stance (per Gilbert/Searle/Tuomela) and the rejected Ševčík reading; the residual individual-scale reduction debate (Bratman: stability-of-intention; Ludwig: singularist) remains accessible as cited-lineage and operates as canonically-acknowledged residue. ADR-0050's joint-commitment admission carries the joint-scale Side-B closure.
- **Does NOT establish a corpus-wide rename of `evidence` to `attestation-of-execution`.** The slug admission is a glossary disambiguation per capstone v2 Fix 1 (line 375); the broader monitoring/evaluation reading remains inside the `evidence` umbrella.
- **Does NOT close Phase 3b.8 (Johar rewilding thesis).** Parked separately.
- **Does NOT do IC/PM coordinated grammar alignment.** That's a post-Phase-3b phase.
- **Does NOT handle the deferred capstone Tier-2 and Tier-3 items at canon-review-protocol layer** (amendment-threshold split, dissent-escalation path, audience-declaration block, holon-vs-field site formalization, trace/log gap). Those are Tier-2/Tier-3 items 6–11 in capstone §8 and remain on the Phase-2c / canon-review-protocol-v3 backlog.

## Consequences

### Positive

- **Phase 3b arc closes at glossary level for the 9-primitive roster.** All five primitive-bullet refinements ADR-0044 deferred are addressed. Capstone §3 + §4 disposition closure is now complete across primitive-class verdicts (§4) and gap-disposition verdicts (§3 closed across Phases 3b.1–3b.6).
- **Pattern continuity with Phase 3b.6.** Bundled-disposition pattern with operator-confirmed treatment depths preserves the per-Phase economy that worked for ADR-0052. Single-ADR ceremony is appropriate when the underlying decisions are co-mature and depth-asymmetric (3b.6 pattern: same-shape verdicts with overlapping residues; 3b.7 pattern: different-shape refinements with operator-decided per-item depths).
- **Constitutional-artifacts.md / project-vision.md parallel-synchronization improved.** Phase 3's harvest left constitutional-artifacts.md ahead on Signal + partial Commitment treatment; Phase 3b.7 brings project-vision.md into alignment and enriches both files where capstone evidence supports deeper treatment.
- **Three derived-glossary slugs admitted to the v11 vocabulary** (`attestation-of-execution`, `permeability`, `double-boundary`) — searchable, cross-document anchors for in-prose phrases that were previously orthographic-only.
- **Capstone Tier-1 Commitment item gets honored at the depth ADR-0050 + ADR-0053 jointly bear**, not requiring a separate ADR-0054 or post-Phase-3b canon-rebuild round. The combination of joint-scale primitive-admission (ADR-0050) + individual-scale stance-naming (ADR-0053) is a stronger response than the §8 (a)-(b)-(c)-(d) recommended action would have produced as a single standalone ADR — the Side-B closure at joint-scale is structural, not stance-naming.

### Residues (canonically-acknowledged)

- **R-Comm-1 — Bratman individual-scale reducibility debate.** The Commitment medium-depth bullet-extension names Spore's "primitive with illocutionary force" stance (per Gilbert/Searle/Tuomela) and rejects the Ševčík scheduled-event-shadow reading, but does NOT close the Bratman-Ludwig individual-scale reduction debate (Bratman: commitment as stability-of-intention; Ludwig: singularist). This debate remains philosophically open in the literature; Spore's canon names a position without claiming the debate is resolved. The joint-scale Side-B reading (Gilbert/Tuomela vs. Bratman/Ludwig) is closed via ADR-0050's joint-commitment admission as 9th primitive. Operates as canonically-acknowledged residue per the capstone-Tier-1-via-multi-ADR-coverage pattern (ADR-0050 structural lift + ADR-0053 stance-naming).
- **R-Comm-2 — VSM-absence-as-non-defeater.** Capstone §8 line 307 (d) recommended explicit acknowledgment that VSM lacks Commitment as named primitive (Resource Bargain = variety-budgeting, not promise) without that absence defeating Commitment's primitive status in Spore. ADR-0053 does not bullet-extend this point (operator-confirmed light treatment); operates as canonically-acknowledged residue. Future canon-review can revisit if VSM-cross-tradition critique surfaces in active-collaborator review.
- **R-Sig-1 — Participatory-sense-making as deeper Side-B answer.** Capstone §8 Tier-3 item 16 notes that participatory-sense-making (De Jaegher/Di Paolo 2007) would resolve the enactive critique of `signal` more comprehensively than the stance-template ADR-0053 admits. Single-tradition support (Autopoiesis/4E) currently insufficient for primitive admission per ADR-0048 parsimony-as-earning-test discipline. Held-open per capstone §8 item 16.
- **R-Mem-1 — Membrane-as-self-produced (autopoiesis-active reading).** Capstone §5 line 185 (3rd flagged confusion) notes that *"Canonical Layering treats boundary as passive (property of layers); Autopoiesis treats membrane as produced by the system it bounds (active); Ostrom treats boundary as double (social + ecological). Spore's membrane currently reads closer to the Canonical Layering view — if Spore takes autopoiesis seriously (which its field primitive implies), membrane should become produced-by-the-holon."* ADR-0053 admits `permeability` + `double-boundary` axes but does NOT make Membrane self-produced-by-holon. The autopoiesis-active reading is a separate canon-architectural decision not bundled into 3b.7's glossary scope. Operates as canonically-acknowledged residue; revisit triggers: dedicated Membrane-architectural ADR (post-Phase-3b) or Phase-2c canon work.
- **R-Hol-1 — Companion-term canonization deferred.** Capstone §4 line 159 notes adjacent terms in the literature (whole-part-relation, nested-agency, scale-linked-agency) without recommending canon admission. ADR-0053 cites these as adjacent vocabulary in the bullet-extension prose; no slug admission. Future canon-review can revisit if external-collaborator review surfaces companion-term need.

### Cross-cutting

- **Yaml v10 → v11.** Three new derived-glossary slugs admitted: `attestation-of-execution`, `permeability`, `double-boundary`. All three are derived analytic vocabulary on existing primitives (Evidence / Membrane / Membrane respectively); no new primitive-class admission. v11 is the third yaml version-bump in Phase 3b (v8→v9 in 3b.5a; v9→v10 in 3b.6; v10→v11 here).
- **Validator gate**: Step 7 confirms no regression from baseline 9 errors / 30 warnings; this ADR is glossary-level so no downstream depends_on impact expected.
- **Capstone §3 Tier 1+2+3 + §4 disposition status:** All five primitive-class refinements (§4) closed at the glossary/bullet layer. Capstone §3 Tier 1+2 fully closed via Phases 3b.1–3b.5a + 3b.6 derived-admissions; §3 Tier 3 fully closed via 3b.6 + 3b.7. Phase 3b arc complete at the canon-grammar layer for the 9-primitive roster.

### Companion-ADR cross-references (load-bearing)

- **ADR-0044** — defers these refinements (line 62 enumeration; line 138 Commitment glossary deferral).
- **ADR-0050** — joint-commitment Side-B closure carries joint-scale weight, freeing 3b.7's Commitment refinement to address residual individual-scale stance-naming without re-litigating Side-B.
- **ADR-0047** — Layer 2 asymmetric-commitment already covers Care-asymmetric-binding context; ADR-0053 Commitment-bullet edit harmonizes with Layer 2 framing without redundancy.
- **ADR-0048** — modes-across-primitives canon-category distinguishes glossary-level moves (3b.7) from primitive admission. Parsimony-as-earning-test-outcome (vs. parsimony-as-axiom) discipline applied: 9-primitive roster preserved; refinements clarify primitives without expanding them.
- **ADR-0049** — Reproduction-continuity primitive admission set the parsimony-as-earning-test pattern that 3b.7 honors negatively (refinements do not pass the earning test for primitive admission; they are clarifications).
- **ADR-0051** — Relational-identity property-of-Holon set the property-on-primitive precedent that informs Refinement 5 (`permeability` and `double-boundary` are analytic axes on Membrane, structurally analogous to property-on-primitive but slugged at glossary-level rather than property-of-primitive level).
- **ADR-0052** — Reciprocity-trust bundled-glossary-with-framing is the immediate precedent for bundled-glossary disposition pattern; 3b.7 differs by using ADR §Consequences prose for Evidence-decline rationale rather than a separate framing-note (operator decision).

### Phase-3b arc close-out statement

**Phase 3b complete at glossary-level for 9-primitive roster.** Phase 3b.8 (Johar rewilding thesis) and Encounter-as-10th-primitive remain parked. Tier-2 and Tier-3 capstone §8 items 6–11 remain on Phase-2c / canon-review-protocol-v3 backlog. Post-Phase-3b coordinated grammar alignment for IC + PM (9-primitive + relational-identity-property + derived-reciprocity/trust/attestation/permeability/double-boundary slugs propagation) is bundled as a separate phase.
