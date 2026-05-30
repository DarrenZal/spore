# ADR-0064 Audit Manifest — co-presence-Field-condition-disposition
Generated: 2026-04-23
Step 0.5 earning-test audit + cross-tradition broadening + admission-category-fit

---

## 1. Candidate Description

`co-presence-Field-condition` — the common-knowledge-of-mutual-attention substrate that enables Encounter operations. ADR-0055 identified `co-presence-establish` as "substrate-like not verb-like" (fails verb-primitive earning test) but explicitly parked the Field sub-stratification pathway as **Trigger E-5**: "A separate-plan investigation of Field temporal-spatial-co-presence sub-stratification (the ADR-0046-parallel move this ADR explicitly declines to make now) matures to the point where co-presence-Field-condition admission would stabilize encounter-as-composition into a Field-hosted regularity."

Framing note articulation (canon-framing-encounter-as-composition.md:97): "Co-presence-establish structure (common-knowledge of mutual attention; Lewis / Schiffer): this is substrate-like rather than verb-like. The participants' mutual-attention to the shared situation is a field-condition in which verbs fire, not a coordination-act performed by agents."

---

## 2. Per-Instance-Family Operational Case Enumeration (≥5 cases)

### Case 1: BKC/Octo bioregional stewardship meetings
**Classification: co-presence-REQUIRING**
BKC quarterly federation meetings and cross-node gatherings are explicitly synchronous events. The encounter framing note (§3.2) identifies attendance-pledge as an "irreducibly-joint" case where "each attendance-pledge references the others' attendance-pledges, and the jointness-structure is load-bearing (a meeting with no joint-attendance-commitment is a broadcast, not an encounter)." Field-condition here includes temporal-spatial co-presence: participants must be simultaneously present (virtually or physically). Co-presence is operationally load-bearing — it conditions whether the verb-compositions (Signal + Joint-commitment + Intent + Evidence) fire as encounter-hosted or as broadcast/asynchronous. STRONG classification: absent co-presence, the event becomes a broadcast, changing its coordination-grammar.

### Case 2: Federation protocol-version negotiation
**Classification: AMBIGUOUS (dual-phase: co-presence-requiring during negotiation / co-presence-non-requiring during ratification)**
ADR-0063 Step 0.5 classified federation-protocol-version negotiation as "tilts PSM pre-adoption / SR post-adoption" — same dual-phase applies to co-presence. During negotiation and deliberation (drafting phase), co-presence creates the common-knowledge condition for participatory deliberation where participants share a situation and can jointly modify proposals in real-time. During dissemination and adoption (ratification phase), protocol-version adoption is asynchronous — each node adopts independently. The common-knowledge-of-mutual-attention applies to the negotiation phase specifically. MODERATE classification: Field operations span both phases in a single coordination arc.

### Case 3: IC memory-governance curation
**Classification: co-presence-REQUIRING for collective mode / co-presence-NON-REQUIRING for individual mode**
IC memory-governance has two operational modes: (a) individual-async curation (a single steward updates attribution or decides on preservation independently) — no co-presence required; (b) collective-deliberation curation (IC governance council meets to decide on contested attributions, major archive decisions) — co-presence is operationally important. ADR-0063 classified IC memory-governance as "STRONG-conceptually" for PSM. Co-presence status: IC's primary operational mode appears to be individual-async (one steward acts), making co-presence a conditional rather than universal Field-condition. AMBIGUOUS / dual-mode.

### Case 4: PM `pm:MatchProposal` progressive-disclosure dialogue
**Classification: co-presence-NON-REQUIRING in protocol design / co-presence-POSSIBLE in deployment**
PM grammar.md (line 280) explicitly frames match encounters as "Signal (invitation) + Joint-commitment (mutual consent to disclose) + Intent + Evidence within bounded Field-conditions per spore:ADR-0055." The protocol design supports asynchronous progressive disclosure — proposals, counter-proposals, and disclosure steps can happen asynchronously via message exchange. In deployment, some PM matchmaking may be co-present (synchronous dialogue sessions), but the protocol grammar does not require it. WEAK co-presence-requiring classification. The Field-condition for PM is primarily the `pm:TemporalWindow` (scheduling coordination) rather than common-knowledge-of-mutual-attention.

### Case 5: Joint-commitment formation (federation protocol-version adoption)
**Classification: STRUCTURALLY co-presence-like (not strictly requiring physical/virtual co-presence)**
ADR-0050's paradigm case for `joint-commitment` — federation protocol-version adoption — is described as "multi-party-simultaneous by construction" (CLAUDE.md). This is co-presence-like in the sense that all parties must jointly act in the same coordination moment. But it does not require synchronous presence — a sequential ratification process (each party adopts in sequence within a defined window) can also constitute joint-commitment per Gilbert's structure. The common-knowledge structure (each party knowing that the others are adopting) can be achieved asynchronously. AMBIGUOUS: structurally parallel to co-presence without requiring it.

### Case 6: Spec-DAG amendment deliberation
**Classification: AMBIGUOUS (dual-mode: co-presence-requiring for deliberation / co-presence-non-requiring for text-authoritative completion)**
Per ADR-0041 text-authoritative discipline, spec-DAG amendments are authoritative when committed as text — the text-authoring act is individual and asynchronous. But amendment proposals typically arise from deliberation (discussion threads, design-review meetings, governance-artifact authoring conversations) where co-presence creates common-knowledge of the problem-space. ADR-0063 classified spec-DAG amendment as dual-phase for PSM; same structure applies here. DUAL-MODE with co-presence load-bearing for deliberation phase only.

### Case 7: Octo autonomous research (single-agent Field operations)
**Classification: co-presence-VACUOUS**
Single-agent operations by Octo involve no co-presence requirement by definition — an autonomous agent operating within a Field does not require another party's mutual attention to do coordination work. Stigmergic traces (environmental modification) substitute for co-presence: Octo leaves evidence artifacts that others encounter asynchronously. This is the clearest counter-case. STRONG co-presence-non-requiring.

### Case 8: Governance-artifact authoring conversations (collective writing)
**Classification: co-presence-REQUIRING for synchronous co-authoring sessions**
Collective authoring of governance artifacts (vision documents, agreements, policy docs) in synchronous sessions (pair-programming analog, shared-screen authoring, facilitated group writing) requires co-presence of the authors. The common-knowledge-of-mutual-attention conditions what the authors can jointly attend to, modify, and commit. Asynchronous authoring (PR-review, async text-comments) is also possible and does NOT require co-presence. CONDITIONAL co-presence-requiring.

### Case 9: DW stand-ups and design-reviews
**Classification: co-presence-REQUIRING (design-reviews) / co-presence-NON-REQUIRING (stand-ups via text)**
DW stand-ups in text-based async format (Slack status, CLAUDE.md brief) require no co-presence. Synchronous design-reviews (calls, screen-shares, pair-programming sessions) are co-presence-requiring — the common-knowledge-of-mutual-attention determines what can be jointly evaluated and decided in real-time. DUAL-MODE per instance type.

---

## 3. Aggregate Classification

| Case | Co-presence classification |
|------|---------------------------|
| BKC/Octo quarterly meetings | REQUIRING (strong) |
| Federation protocol-version negotiation | AMBIGUOUS (dual-phase) |
| IC memory-governance curation | AMBIGUOUS (dual-mode) |
| PM `pm:MatchProposal` | NON-REQUIRING (protocol design) |
| Joint-commitment formation | AMBIGUOUS (structurally parallel) |
| Spec-DAG amendment deliberation | AMBIGUOUS (dual-mode) |
| Octo autonomous research | NON-REQUIRING (vacuous) |
| Governance-artifact authoring | REQUIRING (conditional/sync mode) |
| DW stand-ups / design-reviews | DUAL-MODE (type-dependent) |

**Summary**: 2 co-presence-requiring / 2 co-presence-non-requiring / 5 ambiguous/dual-mode.

This distribution is STRUCTURALLY SIMILAR to ADR-0062 (Membrane) and ADR-0063 (Signal) dual-mode findings — neither single-mode dominates; Field operations genuinely span both co-presence-requiring and co-presence-non-requiring instances. The dual-mode pattern recurs for the third structural primitive being evaluated in today's ADR queue.

---

## 4. Cross-Tradition Breadth Evaluation (7-cluster taxonomy)

### Cluster A: Common-knowledge-philosophy (Lewis / Schiffer / Chwe)
**Full cluster: YES**

Lewis (1969, *Convention*) establishes the logical structure of common knowledge — A knows p, A knows that B knows p, A knows that B knows that A knows p, etc. — as the foundation for coordination conventions. Schiffer (1972, *Meaning*) formalizes common knowledge for communicative meaning. Chwe (2001, *Rational Ritual*) applies common-knowledge theory to co-present ritual events: rituals create common knowledge precisely because participants observe each other observing the same spectacle. Chwe's core argument: "public rituals, rallies, and ceremonies ... create common knowledge" and this common knowledge is the coordination mechanism. This tradition directly provides the logical structure of co-presence-establish as Field-condition: common-knowledge-of-mutual-attention is the Lewis/Schiffer/Chwe structure.

Chwe-overlap counting rule applied: Chwe is counted under Cluster A (primary: common-knowledge-philosophy), NOT under Cluster G (coordination-game-theory) unless a non-Chwe source is also cited in G. Chwe-only = G does not count separately. **Cluster A counts as 1 full cluster.** In-repo support: ADR-0055:103 directly cites Lewis/Schiffer for co-presence-establish; framing-note:97 names Lewis/Schiffer/Bacharach.

### Cluster B: Micro-sociology/interaction-order (Goffman / Collins / Mehan-Wood)
**Full cluster: YES — ≥2 sources available**

Goffman (1963, *Behavior in Public Places*; 1967, *Interaction Ritual*; 1974, *Frame Analysis*) developed co-presence as a primary analytical category for face-to-face interaction. His concept of "focused interaction" (two or more people cooperating to sustain a single focus of cognitive and visual attention) is precisely the co-presence-establish structure — agents coordinating around shared mutual attention. "Unfocused interaction" by contrast happens in settings where people are merely co-located without mutual-attention. This is the sociological operationalization of co-presence as a Field-condition structuring what coordination operations are possible.

Collins (2004, *Interaction Ritual Chains*) develops Goffman's analysis into a full theory of social energy and ritual solidarity. Collins argues that interaction rituals (face-to-face gatherings with bounded membrane, mutual focus of attention, shared mood, barrier to outsiders) generate emotional energy and solidarity. The "mutual focus of attention" and "barrier to outsiders" are structural co-presence-conditions. Collins explicitly frames these as coordination-prerequisites: "Interaction ritual chains generate the micro-level building blocks of motivation, emotion, and solidarity from which macro-level social patterns emerge." This is a direct tradition-level argument for co-presence as coordination-substrate.

Note on in-repo citation: Goffman appears in `linguistic-closure-corroboration-pass-1.md:220-222` but was REJECTED there for a different reason (insufficient on self-sealing-quality for linguistic-closure, not as a tradition). That rejection applies to the linguistic-closure corroboration task, not to co-presence-as-Field-condition. Goffman's *Behavior in Public Places* and *Interaction Ritual* are load-bearing for co-presence specifically — this is his primary analytical contribution, distinct from his framing-theory work that was rejected.

**Cluster B counts as 1 full cluster** (Goffman + Collins ≥2 sources; Mehan-Wood available as tertiary). This is INDEPENDENT of Chwe's coordination-game framing and of Lewis/Schiffer's formal common-knowledge.

### Cluster C: Phenomenological-intersubjectivity (Schutz / Husserl / Merleau-Ponty)
**Partial cluster: YES — 1 strong source; independent from Cluster A absorption question**

Schutz (1967, *The Phenomenology of the Social World*, Ch. 4 "The We-Relation") treats face-to-face interaction as the primordial social encounter: "The pure We-relation" is the direct experience of another's consciousness as co-present. Schutz's key claim: the we-relation is constituted by shared temporal experience (growing older together in a "vivid present") — co-presence is not merely spatial but temporal. The "vivid present" of shared experience is the phenomenological counterpart to Goffman's focused interaction and Lewis/Schiffer's common knowledge.

ADR-0063 classified Schutz as "independent sociological-phenomenological tradition not absorbed into enactivism" — confirming Schutz provides independent cluster-support. For co-presence specifically, Schutz is stronger than for PSM: Schutz's we-relation is primarily about face-to-face co-temporal experience, not about the specific mechanism of meaning-emergence that PSM claims.

Husserl's (1931, *Cartesian Meditations* §§42-54) analogical apperception provides the constitutive structure. Merleau-Ponty's intercorporeality is relevant. These are largely absorbed into Cluster A through Thompson's synthesis, as ADR-0063 noted. **Cluster C counts as PARTIAL (1 independent source: Schutz we-relation; Husserl/Merleau-Ponty are Cluster-A-absorbed through enactivism).** This is WEAKER than Cluster B.

### Cluster D: Situated-practice/communities-of-practice (Chaiklin-Lave / Wenger / Bourdieu)
**Partial cluster: YES — family-claim convergence without co-presence-specific mechanism**

Chaiklin & Lave (1993, *Understanding Practice*) and Wenger (1998, *Communities of Practice*) treat learning and coordination as situated in specific practice communities. Co-presence is assumed as a feature of the primary form of participation (legitimate peripheral participation), but is not theorized as the coordination-mechanism. Lave's situated learning requires physical co-presence with practitioners. Wenger's communities of practice have both in-person and asynchronous dimensions.

Bourdieu's practice theory (1980, *The Logic of Practice*) treats coordination as habitus-generated and situationally-anchored — agents read situations through shared dispositions, and co-present situations are the primary activation context for habitus.

**Cluster D counts as PARTIAL**: converges on situatedness-as-coordination-condition but does not specifically theorize co-presence-establish as a Field-condition type. The claim is too weak — it is the family claim ("coordination is situated") rather than the specific mechanism (common-knowledge-of-mutual-attention as Field substrate).

### Cluster E: Dialogism (Bakhtin / Volosinov)
**Partial cluster: WEAK — converges on intersubjectivity without co-presence specificity**

Bakhtin (1981, *The Dialogic Imagination*; 1984, *Problems of Dostoevsky's Poetics*) treats meaning as dialogic — addressed to an anticipated respondent, constituted in the interaction between author and addressee. The addressee's anticipated response shapes the utterance. Volosinov (1973, *Marxism and the Philosophy of Language*) roots meaning in social interaction as primary.

These traditions converge on intersubjective-meaning-constitution but do NOT specifically theorize co-presence as a coordination substrate. Bakhtin's dialogism applies to text-mediated interaction as much as to face-to-face co-present interaction. ADR-0063 noted the same: Bakhtin supports "the family claim (meaning is intersubjective) without independently arriving at PSM's specific mechanism." Parallel structure for co-presence: Bakhtin supports intersubjectivity but not co-presence-establish-as-Field-condition specifically.

**Cluster E counts as VERY PARTIAL (family-claim only; co-presence-specific mechanism not supported).**

### Cluster F: Johar-native structured-encounter
**Full cluster: YES**

Johar's framework (7 bridge-notes in Spore corpus) names structured-encounter as protocol-discipline (johar-situational-truthing), encounter-rules at Architectural layer (johar-metacognition-stack), and encounter-engineering as coordination-infrastructure (johar-ecology-of-courage). The co-presence substrate is implicit in all seven: "infrastructure that shapes encounter determines whether agents can exercise the perceptual and relational capacities coordination requires" (johar-miss-engineered-city). Co-presence conditions are named as "conditions what the system notices as salient in future encounters" (johar-brain-self-rewriting-field).

**Cluster F counts as 1 full cluster.** Same as ADR-0055 baseline.

### Cluster G: Coordination-game-theory (Schelling focal-points + Chwe ritual)
**Assessment: NOT independently counted per Chwe-overlap counting rule.**

Chwe 2001 is the strongest game-theoretic source for co-presence as common-knowledge-creating mechanism. But per the authoritative counting rule: "Chwe primarily counted under A (canonical common-knowledge-philosophy work that happens to formalize common-knowledge game-theoretically). G counts as 1 cluster only if ≥1 non-Chwe source cited." 

Schelling (1960, *The Strategy of Conflict*) on focal points: parties coordinate on salient outcomes without communication. This is relevant to co-presence (co-present parties share focal-point salience through joint perception) but Schelling's focal-point theory doesn't specifically theorize co-presence as the coordination mechanism — it theorizes salience independently of co-presence. Schelling is primarily about how parties coordinate without explicit communication, not about the specific structure of co-presence.

**Cluster G: counts only if Schelling is independently cited as co-presence-relevant (not just focal-points in general).** The connection is: co-present parties have a richer salience structure than non-co-present parties (they share perceptual access to the same context). But this is a consequence of co-presence, not a theory of co-presence as coordination mechanism. Schelling doesn't specifically say "co-presence creates the shared salience field." **Cluster G: VERY PARTIAL — not independently counted per counting rule.**

---

## 5. Honest Cluster Count

| Cluster | Status | Sources |
|---------|--------|---------|
| A: Common-knowledge-philosophy | FULL | Lewis 1969, Schiffer 1972, Chwe 2001 |
| B: Micro-sociology/interaction-order | FULL | Goffman 1963/1967/1974, Collins 2004 |
| C: Phenomenological-intersubjectivity | PARTIAL | Schutz 1967 (independent); Husserl/Merleau-Ponty absorbed into Cluster A via enactivism |
| D: Situated-practice | PARTIAL | Chaiklin-Lave, Wenger, Bourdieu — family-claim only |
| E: Dialogism | VERY PARTIAL | Bakhtin/Volosinov — family-claim only, co-presence not specific |
| F: Johar-native | FULL | 7 bridge-notes; encounter-engineering; structured-encounter |
| G: Coordination-game-theory | VERY PARTIAL | Schelling focal-points — consequence of co-presence, not theory of it |

**Honest count: 2 full clusters (A + B) + 1 partial (C: Schutz) + weak partials (D, E, G)**

**Combined cluster-equivalents: approximately 2.5 (2 full + 0.5 partial Schutz + F Johar-native = 3 total if Johar-native counted)**

**If Johar-native (F) counted as a full cluster alongside A and B: 3 full clusters total.**

This is the critical threshold determination: ADR-0055 blocked admission on "single-cluster" grounds (Johar + common-knowledge-philosophy = 1-2 clusters). ADR-0064 finds:
- Common-knowledge-philosophy (A): FULL — direct mechanism
- Micro-sociology (B): FULL — Goffman's focused-interaction + Collins' interaction-ritual-chains directly theorize co-presence as coordination-substrate
- Johar-native (F): FULL — if operator counts Johar as independent source

**This crosses the ≥3 clusters threshold for (a) Field sub-stratification or (d) property-on-Field admission, IF Johar-native counts as a full third cluster alongside A and B.**

**Alternatively, without Johar-native: 2 full clusters (A + B) + Schutz partial = meets ≥2 threshold for (i) scope-conditioning but NOT ≥3 threshold for (a) sub-stratification.**

---

## 6. Admission-Category-Fit Per Option

### (a) Field sub-stratification (ADR-0046-parallel)
**Threshold: ≥3 full clusters**
- With Johar-native: 3 full clusters (A + B + F) → MEETS threshold
- Without Johar-native: 2 full clusters + Schutz partial → BORDERLINE (does not clearly meet)
**Shape-fit**: ADR-0046 extended Field with Ostrom rule-level stratification; co-presence-Field-condition would be a second sub-stratification axis alongside rule-levels. Question: are these ORTHOGONAL axes? YES — rule-levels (operational/collective-choice/constitutional) govern *what kind* of rule is in play; co-presence-Field-condition governs *the situational-substrate* in which those rules operate. A collective-choice rule (who decides how to amend operational rules) can operate under either co-present conditions (a governance council meeting) or asynchronous conditions (a text-based amendment proposal). The axes are orthogonal. ADR-0046's rule-level stratification stands unchanged; co-presence-Field-condition would be a separate property-axis on Field.
**Risk**: adding a second sub-stratification axis may create canon-complexity — Field now has (i) rule-levels, (ii) rule-types within levels, (iii) rule-in-use/rule-in-form, (iv) authority-over-rule-levels, AND (v) co-presence-mode-of-field-operation. This is substantial internal Field complexity. Sub-stratification is the heaviest admission here.

### (d) Property-on-Field
**Threshold: ≥3 full clusters**
- Same threshold as (a); same cluster count applies
- Shape-fit: parallel to ADR-0050/0051 holon-irreducibility + relational-identity as properties-on-Holon. Property admits co-presence as a named dimension without full sub-stratification depth. Property-count 2→3 on primitives (after holon-irreducibility + relational-identity).
**This is a lighter admission than (a) while still requiring ≥3 clusters.**

### (i) Scope-conditioning (ADR-0062/0063 parallel)
**Threshold: ≥2 clusters**
- With 2 full clusters (A + B): MEETS threshold clearly
- Shape-fit: identical to ADR-0062 (Membrane production-mode) + ADR-0063 (Signal sense-making-mode). Field operations span co-presence-requiring vs co-presence-non-requiring modes. Extend Field bullet with scope-conditioning prose naming both modes, principled-rule distinguishing them, parenthetical examples per side.
- **Third application of primitive-bullet scope-conditioning pattern**: would validate the pattern across all three structural primitives (Field + Membrane + Signal). Strong canon-method precedent contribution.
**Key question**: does (i) scope-conditioning lose the Goffman/Collins structural finding? The scope-conditioning prose CAN name the theoretical grounding (Goffman focused-interaction / Collins interaction-ritual-chains / Lewis-Schiffer common-knowledge) — it doesn't have to be bare operational classification. The scope-conditioning pattern is compatible with tradition-level articulation.

### (e) Derived glossary slug
**Threshold: ≥2 clusters**
- Meets threshold (2 full clusters A + B)
- But: slug-only without scope-conditioning loses the dual-mode operational finding at Field-bullet level. Lighter than (i) in terms of canon-visibility.

### (f) Decline-inline-prose-only
**Threshold: 1+ cluster acceptable**
- Appropriate if: honest tradition-broadening maintains the "single-cluster" finding from ADR-0055 (i.e., Cluster B is found NOT to independently support co-presence-as-Field-condition)
- Our finding: Cluster B DOES independently support co-presence-as-Field-condition — Goffman and Collins specifically theorize co-presence as interaction-order structure. This is not the same as a family-claim tradition.
- (f) would require arguing Cluster B is only partial/weak. But Goffman's "focused interaction" is specifically about co-presence-as-coordination-substrate (the common-focus-of-attention structure), not a mere family-claim.
**HONEST FINDING: (f) is not well-supported given Cluster B full-cluster determination.**

### (g) Decompose-and-park-as-framing-note
**Threshold: 1+ cluster acceptable**
- Would extend canon-framing-encounter-as-composition.md with co-presence-Field-condition articulation or author new framing-note. Lighter than (i)/(a)/(d) but more substantial than (f)/(h).
- Appropriate if: operational evidence is too sparse OR tradition-breadth borderline. With 2 full clusters and 5/9 ambiguous cases showing genuine dual-mode operation, (g) is more conservative than the evidence warrants.

### (h) Park-with-triggers (tighter than ADR-0055 R-Enc-1)
**Threshold: 1+ cluster acceptable**
- Would park with tighter triggers (e.g., "≥3 bridge-notes citing Goffman/Collins/Schutz convergence"). But we already have Goffman + Collins + Schutz accessible and load-bearing. The trigger-condition is ALREADY MET by the tradition-broadening this ADR performs.
**HONEST FINDING: (h) is not well-supported — the trigger Trigger E-5 named is "Field sub-stratification separate-plan investigates" which is exactly what this ADR IS. Re-parking would be process failure.**

---

## 7. ADR-0046 Field Rule-Stratification Relationship

**Finding: ORTHOGONAL axes.**

ADR-0046 stratified Field along the *rule-level* dimension: operational / collective-choice / constitutional. These three levels govern the *type* of coordination action being performed at the field-level. Rule-in-use vs. rule-in-form adds the *epistemic* dimension (what is canonical is the working rule, not the formal text).

Co-presence-Field-condition governs the *situational-substrate* in which rules-at-levels operate: whether the field-conditions include common-knowledge-of-mutual-attention (co-present mode) or not (asynchronous/stigmergic mode). An operational rule can be enacted (Commitment), invoked (Signal), or proposed-for-amendment (Intent) under either co-present or asynchronous field-conditions. The ADR-0046 rule-level stack is ORTHOGONAL to the co-presence-axis.

This orthogonality means: if (a) sub-stratification is selected, it adds a second axis to Field without disturbing the rule-level axis. If (i) scope-conditioning is selected, the scope-conditioning prose sits alongside (not nested within or replacing) the rule-level stratification.

No prior-collision with ADR-0046. ADR-0046 file is NOT modified in any option.

---

## 8. ADR-0055 Encounter Framing-Note Relationship

**Finding: co-presence-Field-condition STABILIZES Encounter-as-composition if admitted.**

Current framing-note (canon-framing-encounter-as-composition.md §5 "What makes an Encounter different from general verb-compositions"): "What distinguishes encounter-hosted verb-compositions from general verb-compositions is the bounded temporal-spatial scope." And (line 95): "These are Field-conditions, not a separate primitive. ADR-0046's Field rule-level stratification already hosts rule-in-use."

The framing-note currently GESTURES AT co-presence as Field-condition (line 97: "Co-presence-establish structure (common-knowledge of mutual attention; Lewis / Schiffer)") but cannot name it as an admitted Field-sub-stratification because ADR-0055 explicitly declined that move. If ADR-0064 admits co-presence-Field-condition in any form, the framing-note gains a precise canonical home for the co-presence substrate: "the co-presence-Field-condition (ADR-0064) makes mutual-attention a named Field-condition type within which Encounter's verb-compositions fire."

**Which Encounter cases are stabilized:**
- BKC/Octo quarterly meetings: temporal-spatial-co-presence-Field-condition → named and typed
- PM match-events: partial (asynchronous-capable per protocol design)
- DW design-reviews: co-present mode → named
- Cross-federation compose-events: synchronous mode → named

The framing-note cross-reference to ADR-0064 would add precision without reopening Encounter disposition.

---

## 9. ADR-0062/0063 Scope-Conditioning Precedent Relationship

**Finding: Structural analogy — third application of same pattern is natural.**

ADR-0062 (Membrane): self-produced vs. text-authoritative production-mode. Some membranes ARE constituted by ongoing labor; others ARE text-authoritative. Scope-conditioning = "the reading that applies depends on the instantiation context."

ADR-0063 (Signal): participatory-sense-making vs. sender-receiver sense-making-mode. Some signals ARE participatory-constituted (deliberation, joint-commitment formation); others ARE sender-receiver (algedonic, stigmergic). Scope-conditioning = "which mode is load-bearing depends on the signal instance."

ADR-0064 (Field): co-presence-requiring vs. co-presence-non-requiring field-condition. Some field operations ARE co-presence-requiring (BKC quarterly meetings, synchronous governance-artifact authoring, in-person design-reviews); others ARE NOT (Octo autonomous research, asynchronous protocol dissemination, individual-async curation, stigmergic-trace-based coordination). Scope-conditioning = "whether co-presence-Field-condition is load-bearing depends on the coordination operation and instance."

Pattern analogy is STRONG. All three structural primitives (Field, Membrane, Signal) exhibit dual-mode operational spans. The scope-conditioning pattern resolves all three without forcing all-or-nothing admit/decline. **Third application validates the pattern as a structural canon-method across all three structural primitives.** Method-precedent contribution is significant.

**Key difference from (a) sub-stratification**: scope-conditioning names the two modes as valid and distinguishes by principled-rule; sub-stratification names a structural axis that every Field instantiation can be measured against. For co-presence: scope-conditioning says "some fields are co-presence-requiring, some are not, and this is the principled rule for which"; sub-stratification would say "co-presence-mode is a named structural axis of Field alongside rule-levels." The distinction is subtle but real — sub-stratification implies co-presence is always ANALYTICALLY PRESENT as a field-axis even if the value is "non-requiring"; scope-conditioning says the dimension is relevant only for some instances.

---

## 10. Per-Option Parsimony Evaluation (ADR-0048 discipline)

**Option (a) Field sub-stratification**:
- Earning-test (Q-a): co-presence-Field-condition does NOT specify a new coordination operation — it specifies a Field-axis condition that governs when existing operations fire in co-present vs. asynchronous mode. This is a SUBSTRATE EXTENSION, not a protocol surface. Q-a assessment: MARGINAL (similar to Membrane in ADR-0062). If Goffman's focused-interaction is read as specifying the conditions under which co-present coordination ENABLES distinct protocol operations (not just running operations asynchronously), Q-a strengthens. But the operations themselves (Signal, Intent, Commitment, Evidence, Joint-commitment) are unchanged — only the Field-condition under which they fire is named.
- Earning-test (Q-b): 2/9 cases clearly co-presence-requiring + 5/9 dual-mode = genuine partial operational pressure. PARTIAL.
- Tradition-breadth: 2-3 full clusters depending on Johar-native counting. BORDERLINE for (a) threshold.
- Parsimony assessment: (a) adds significant canonical complexity (second Field sub-stratification axis); earnest evaluation suggests the operational evidence and tradition-breadth are in the (i)/(d) range rather than clearly in the (a) range. (a) is not ruled out if operator values the structural naming of co-presence as a Field-axis.

**Option (d) Property-on-Field**:
- Parallel to ADR-0051 relational-identity as Holon property. Properties are named dimensions of a primitive that don't introduce new coordination operations. Co-presence-capability could be a named property of Field (some fields have co-presence-capable substrate, some do not by design). Q-a: MARGINAL (property, not operation). Q-b: PARTIAL. Tradition: 2-3 clusters. Property-count 2→3. Less complex than (a) but still requires ≥3 clusters honestly.

**Option (i) Scope-conditioning**:
- Does NOT require ≥3 clusters (only ≥2). Clearly meets threshold with A + B.
- Third application of established pattern across all three structural primitives.
- Preserves canon-method consistency.
- Named tradition-breadth finding (Goffman/Collins) articulated IN scope-conditioning prose.
- Does not require claiming co-presence is a universal Field-axis (avoids over-generalization).
- Parsimony assessment: BEST FIT for honest earning-test outcome. Adds scope-conditioning prose at Field bullet without new canon-object-class, without new slug (i.1), or with minimal new slug (i.2).

---

## 11. Key Structural Finding and Recommendation Lean

**The core finding**: Cluster B (Goffman/Collins) provides genuine full-cluster support for co-presence-as-coordination-substrate INDEPENDENTLY of Cluster A (common-knowledge-philosophy) and Cluster F (Johar-native). This resolves ADR-0055's single-cluster block: we now have 2 full clusters (A + B) and potentially 3 if Johar-native is counted.

**However**: the operational evidence distribution (2 strong co-presence-requiring / 2 non-requiring / 5 ambiguous/dual-mode) is structurally identical to the dual-mode distributions in ADR-0062 and ADR-0063 — strong enough for scope-conditioning (≥2 clusters + genuine dual-mode operational span) but not overwhelming for the heavier (a)/(d) admissions.

**Recommendation lean**: **(i) scope-conditioning** is the most honest and canon-consistent outcome:
- Meets the 2-full-cluster threshold clearly (A + B)
- Third application validates the pattern across all three structural primitives
- Operational evidence shows genuine dual-mode span (not uniform co-presence-requiring or non-requiring)
- Goffman/Collins tradition-breadth finding is articulable IN scope-conditioning prose — it doesn't require sub-stratification to be named
- Does not over-claim by admitting co-presence as a universal Field-axis (some fields genuinely do not require co-presence: Octo autonomous research, async spec-DAG operations, stigmergic coordination)

**Alternative lean**: **(a) or (d) admission** is not ruled out if operator reads Johar-native as a full third cluster AND values the structural naming of co-presence as a Field-axis for the Encounter framing-note stabilization benefit. The tradition-breadth is at the threshold if Johar-native counts.

**Honest cross-tradition evaluation summary**:
- ADR-0055 single-cluster block (Johar + common-knowledge-philosophy) IS RESOLVED — Cluster B (Goffman/Collins) provides independent full-cluster support.
- But crossing from ≥2 to ≥3 depends on whether Johar-native counts as a third independent full cluster — which is an operator call, not a clear-cut determination.

---

## 12. Summary for Decision-Brief

- Cases: 9 enumerated; 2 co-presence-requiring / 2 non-requiring / 5 dual-mode/ambiguous
- Tradition-breadth: 2 full clusters (A common-knowledge-philosophy + B micro-sociology) CONFIRMED; Johar-native (F) as potential third; partials at C (Schutz) + D (situated-practice) + E (dialogism) + G (game-theory)
- ADR-0055 single-cluster block: RESOLVED by Cluster B (Goffman/Collins)
- Threshold for (a)/(d): ≥3 full clusters — borderline (depends on Johar-native counting)
- Threshold for (i)/(e): ≥2 full clusters — CLEARLY MET
- Recommendation lean: **(i) scope-conditioning** (Option i.1 prose-only, consistent with ADR-0062/0063 precedent)
- Secondary consideration: operator may choose (a) or (d) if Johar-native counted as third cluster and Field-axis structural naming is valued
- (f)/(g)/(h) not well-supported given Cluster B full-cluster finding and dual-mode operational evidence
