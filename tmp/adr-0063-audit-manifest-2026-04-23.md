# ADR-0063 Audit Manifest — Participatory Sense-Making Disposition
# Generated: 2026-04-23

---

## 1. Per-Instance-Family Operational Case Enumeration

Per ADR-0062 audit shape: ≥4 cases classified as participatory-sense-making-supporting (PSM) / sender-receiver-supporting (SR) / ambiguous.

### Case 1: BKC commons pool-formation deliberation
**Description**: When BKC members collectively deliberate about the scope of a new commitment pool (what resources are in, who is in, what terms apply), meaning about what the pool IS and what it should cover emerges interactively. No single party transmits a pre-formed pool-definition; the pool definition is progressively co-enacted in deliberative exchange.
**Classification**: PSM-SUPPORTING
**Evidence type**: Operational (BKC hackathon/demo evidence; pool-formation at governance layer)
**Strength**: Moderate — deliberation process clearly fits PSM framing; but BKC evidence is "local demo" per working-rules (not local production evidence threshold for primitive admission)
**Note**: PSM is load-bearing for *how the meaning of the commitment emerges*; once the pool is formed, signal/evidence mechanics kick in in sender-receiver mode

### Case 2: Federation protocol-version negotiation
**Description**: When federation members discuss and ratify a new protocol version, there is a period of joint meaning-making about what the new spec means for each member's commitments. Protocol-version-compatibility is irreducibly-joint (ADR-0050 paradigm case), but the negotiation leading to adoption involves PSM: what counts as "compatible," what exceptions apply, what the spec means in local context.
**Classification**: AMBIGUOUS (leaning PSM for pre-adoption deliberation; SR for post-adoption dissemination)
**Rationale**: The negotiation phase is genuinely PSM (meaning emerges between parties); the dissemination of an adopted protocol version is SR (sender transmits to receiver). The primitive-level choice between PSM and SR depends on which phase of the lifecycle you privilege. Parallel to ADR-0062 Membrane-dual-mode finding.
**Strength**: Moderate — the ambiguity is structural, not absence of evidence

### Case 3: IC memory-governance curation conversations
**Description**: IC memory-governance involves collective decisions about what gets preserved, attributed, and linked. The `4e-cognition-and-participatory-sense-making.md` bridge note explicitly frames IC governance as "participatory sense-making across memory-governance boundaries — the dyadic (or n-adic) interaction process by which two or more memory-layers, agents, or knowledge commons co-enact shared understanding." This is the strongest documented case in-repo.
**Classification**: PSM-SUPPORTING
**Evidence type**: In-repo bridge note argument (4e-cognition-and-participatory-sense-making.md §4)
**Strength**: Strong conceptually — the bridge note was authored with IC-specific operational framing; weaker operationally (IC memory-governance is more governance-design than a running system with evidence)

### Case 4: PM matchmaking dialogue
**Description**: In Poietic Match, the formation of a `pm:CommitmentBundle` through dialogue between parties. Does meaning about what a match IS emerge between parties (PSM) or does each party transmit a pre-formed `pm:Intent` that gets evaluated against others (SR)?
**Classification**: AMBIGUOUS (leaning SR at the protocol layer; PSM at the relational layer)
**Rationale**: pm:Intent is pre-formed and transmitted for matching (SR framing); but the PM spec notes dialogue can refine and co-specify commitments before finalization (PSM framing). PM grammar.md has no explicit enactivist language. The protocol layer as-designed is SR-primary; a richer PM implementation might be PSM-primary.
**Strength**: Weak PSM — the SR framing is operationally primary in PM's current protocol design

### Case 5: Octo agent autonomous research (knowledge-gardening)
**Description**: Octo operates partly alone (knowledge-gardening without collaborators) and partly in coordination with bioregional collaborators. Alone mode is clearly SR-absent (no interaction). With-collaborators mode involves perturbation and response, but Octo's agent-architecture is agent-to-environment, not agent-to-agent PSM.
**Classification**: SR-SUPPORTING (when signal is transmitted to/from collaborators) or N/A (when solo)
**Rationale**: Autonomous agent coordination through signals fits SR framing well; PSM requires genuine dyadic mutual constitution of meaning in interaction, which is harder to claim for agent-broadcast/query patterns.
**Strength**: Weak — this case does not support PSM admission

### Case 6: Joint-commitment formation processes (ADR-0050 paradigm)
**Description**: The process of forming a joint-commitment (open expression of readiness under common knowledge — ADR-0050) is paradigmatically PSM: each party's expression of readiness is perturbed by and perturbs the other's, and the joint-commitment form (readiness-under-common-knowledge) only exists in the interaction, not in either party alone.
**Classification**: PSM-SUPPORTING
**Evidence type**: ADR-0050 philosophical argument (Gilbert's joint-commitment form requires mutual expression constituting a joint state)
**Strength**: Strong conceptually — Gilbert's form-joint-commitment operation is constitutively interactive by definition; PSM and joint-commitment share the "not reducible to sum of individuals" structure
**Note**: This is the most conceptually tight case. ADR-0050 explicitly notes that PSM and joint-commitment are "different Side-B positions" (Gilbertian vs enactive), so this is not a simple equation — but the operational convergence is real.

### Case 7: Spec-DAG amendment discussions (governance-artifact authoring)
**Description**: When a spec-DAG governance-artifact (project-vision, policy, ADR) is collectively drafted and amended, the final text emerges from deliberative exchange. The `meaning` of a governance artifact is partially co-constituted through the deliberation that produces it.
**Classification**: AMBIGUOUS (PSM during drafting; SR for adoption and dissemination)
**Rationale**: Similar dual-phase structure to Case 2. Pre-text deliberation is PSM-framed; the produced governance artifact is then text-authoritative (ADR-0041) and circulates in SR mode.
**Strength**: Moderate PSM for drafting phase

### Case 8: Signal-as-algedonic-bypass
**Description**: Algedonic signals (VSM — bypass hierarchy to surface urgency) are sender-receiver in the most canonical sense: a unit signals distress/variance to the regulator, bypassing the normal reporting chain. This is the clearest SR case.
**Classification**: SR-SUPPORTING (strongly)
**Evidence type**: VSM literature; Spore canon (Signal bullet)
**Strength**: Strong SR — algedonic signals are not PSM; they are designed to be unilateral transmissions

### Case 9: Stigmergic trace coordination
**Description**: Stigmergy (indirect coordination through environmental modification — ants depositing pheromones, agents leaving traces in shared data structures) is a signal-primitive case that is neither PSM nor classical SR. Agents respond to traces left by others without direct dyadic interaction.
**Classification**: SR-SUPPORTING (environment-mediated, not dyadic constitutive meaning-making)
**Strength**: Moderate SR — stigmergic coordination fits SR better than PSM, but neither is a perfect fit

### Summary
| Case | Classification | Strength |
|------|---------------|---------|
| 1. BKC pool-formation deliberation | PSM-supporting | Moderate |
| 2. Federation protocol-version negotiation | Ambiguous (dual-phase) | Moderate |
| 3. IC memory-governance curation | PSM-supporting | Strong conceptually |
| 4. PM matchmaking dialogue | Ambiguous (SR primary at protocol layer) | Weak PSM |
| 5. Octo autonomous research | SR-supporting | Moderate |
| 6. Joint-commitment formation | PSM-supporting | Strong conceptually |
| 7. Spec-DAG amendment | Ambiguous (dual-phase) | Moderate |
| 8. Algedonic signal bypass | SR-supporting | Strong |
| 9. Stigmergic trace | SR-supporting | Moderate |

**Aggregate**: 3 PSM-supporting / 3 SR-supporting / 3 Ambiguous (dual-phase or mixed)

**Operational-case lean per plan rule**: 3 supporting cases (PSM) + tradition-breadth assessment (see §2) → apply threshold: ≥3 supporting with tradition-breadth ≥2 clusters → lean toward (e) derived glossary slug OR (g) framing-note OR (i) scope-condition; with tradition-breadth NOT met → same lean stays OR (f) decline.

**Key structural finding**: The dual-phase pattern (PSM during deliberation/formation, SR during dissemination/adoption) across Cases 2, 4, and 7 is structurally identical to ADR-0062's Membrane dual-mode pattern. This is significant: if ADR-0062 chose scope-conditioning for a structurally analogous dual-mode finding, Option (i) scope-conditioning is the per-precedent canonical choice for participatory-sense-making's span across some-but-not-all signal-instances.

---

## 2. Tradition-Citation Breadth Analysis (Five-Cluster Taxonomy)

### Cluster A: Enactivist (counts as 1)
**Sources**: De Jaegher & Di Paolo (2007) "Participatory Sense-Making," *Phenomenology and the Cognitive Sciences* 6(4); De Jaegher, Di Paolo & Gallagher (2010) "Can social interaction constitute social cognition?," *TiCS* 14(10); Thompson (2007) *Mind in Life*, Ch. 3 "Autonomy and Emergence" + Ch. 5; Di Paolo, Cuffari & De Jaegher (2018) *Linguistic Bodies* (MIT Press); Varela, Thompson & Rosch (1991) *The Embodied Mind*; Maturana & Varela (1980) *Autopoiesis and Cognition*; Gallagher (2017) *Enactivist Interventions*, Chs. 7–8; Fuchs & De Jaegher (2009) intersubjectivity paper.
**Convergence on PSM framing**: STRONG — this is the originating tradition; all sources directly converge.
**In-repo support**: Corpus review `research-autopoiesis-4e.md` §§42–46; bridge note `4e-cognition-and-participatory-sense-making.md` §§3–4; concepts yaml slug `enactive-cognition` (v2+); ADR-0053 R-Sig-1 explicitly cites this cluster.

**Count**: 1 cluster, strongly supported in-repo.

### Cluster B: Dialogical / Social-Constructionist (counts as 1 if ≥2 cited)
**Candidate sources**:
- Bakhtin (1981) *The Dialogic Imagination* — meaning as dialogically constituted, answering-to-the-other; utterances presuppose and are shaped by the anticipated response.
- Vygotsky (1978) *Mind in Society* — intermental (between minds) → intramental (within mind) developmental sequence; higher cognitive functions arise in social interaction before they are internalized.
- Harré (1979) *Social Being*; Harré & Gillett (1994) *The Discursive Mind* — social constructionist psychology; personhood constituted in discursive acts.
- Mead (1934) *Mind, Self, and Society* — symbolic interactionism; self arises from taking the perspective of the other.

**Do these converge on PSM framing specifically?**
Cluster B sources converge on *meaning-as-social/interactional* and *the-interaction-as-primary-unit*, which is structurally parallel to PSM. However:
- Bakhtin's dialogism foregrounds the *addressee* in meaning-constitution — meaning is always for-another; this is not the same as De Jaegher/Di Paolo's *operational-closure of the interaction process*. The convergence is at "meaning emerges between parties," not at "the interaction process acquires autonomy."
- Vygotsky's intermental→intramental sequence treats the social interaction as *developmentally prior*, not as *constitutively autonomous* in the technical PSM sense.
- Mead's symbolic interactionism: the self arises through taking-the-perspective-of-the-other (the generalized other), which shares PSM's anti-individualism but differs in the mechanism (role-taking vs structural coupling).
- Harré's discursive psychology: closest to Cluster A in that it treats meaning as enacted in discourse rather than transmitted — some genuine convergence.

**Honest assessment**: Cluster B sources share the "meaning is intersubjective/dialogic" family claim with PSM, but they do NOT independently arrive at "participatory sense-making" as a named framing or at the specific PSM claim that the interaction process itself acquires operational closure and autonomy. They cluster as *supportive background tradition* rather than as *independent convergent arrival at PSM*. At most 2 of these (Harré's discursive psychology, Mead's perspective-taking) genuinely broaden the tradition-support beyond enactivism without simply restating it.

**Count**: Partial cluster — Cluster B provides supportive background tradition for the general "meaning is intersubjective" family claim, but does NOT independently validate the PSM-specific claim (interaction-process operational autonomy). Counts as ≤0.5 toward the admission-threshold, not a full independent cluster. 

### Cluster C: Actor-Network / Distributed Cognition (counts as 1 if ≥2 cited)
**Candidate sources**:
- Hutchins (1995) *Cognition in the Wild* — distributed cognition: cognition is distributed across people, tools, and artifacts; the unit of analysis is the sociotechnical system.
- Latour & Woolgar (1979) *Laboratory Life*; Callon (1986) "Some Elements of a Sociology of Translation" — actor-network theory; meaning and agency distributed across human and non-human actants.
- Clark & Chalmers (1998) "The Extended Mind" — extended cognition; cognitive processes extend beyond the skull.

**Do these converge on PSM framing?**
- Hutchins' distributed cognition shares PSM's anti-individualism and unit-of-analysis-as-system, but frames meaning/cognition as distributed across a *functional system including artifacts*, not as emergent-in-dyadic-interaction with operational autonomy. Different enough to count as independent adjacent tradition.
- Latour/Callon's ANT: translation networks reshape actors' identities and meanings in the process of association — shares PSM's "meanings emerge in relational process" but focuses on actor-network formation rather than dyadic sense-making. Distant.
- Clark & Chalmers: extended cognition foregrounds external scaffolding, not interactive meaning-emergence as such.

**Honest assessment**: Cluster C (especially Hutchins) provides genuine independent support for anti-individualist cognition-unit framing, which is the family claim PSM belongs to. But the convergence on PSM's specific claim (dyadic interaction-process operational closure) is weak. Counts as 0.5 — independent tradition but weak PSM-specific convergence.

### Cluster D: Phenomenological Intersubjectivity (counts as 1 if ≥2 cited)
**Candidate sources**:
- Husserl (1931) *Cartesian Meditations*, §§42–54 — intersubjectivity as constituted through analogical apperception (the other as alter ego); transcendental intersubjectivity grounds shared world.
- Merleau-Ponty (1962) *Phenomenology of Perception*, Part III — intercorporeality; "I feel myself looked at by the things... the world is made up of the same stuff as the body." Pre-reflective, bodily, pre-communicative intersubjectivity.
- Schutz (1932) *The Phenomenology of the Social World* — we-relations as directly experienced social encounters; face-to-face situating constitutes the primordial form of social encounter.

**Do these converge on PSM framing?**
Thompson's *Mind in Life* (Cluster A) explicitly synthesizes Husserlian and Merleau-Pontian phenomenology into enactivism. Husserl and Merleau-Ponty are direct philosophical ancestors of enactivism's intersubjectivity treatment. Fuchs & De Jaegher (2009) explicitly engage the phenomenological lineage.

**Critical assessment**: This is the sharpest tradition-clustering problem. Husserl, Merleau-Ponty, and Schutz genuinely converge on *intersubjectivity as constitutive*, which is the family claim PSM belongs to. But:
1. Thompson (Cluster A) already incorporates Husserl and Merleau-Ponty explicitly into the enactivist synthesis. Citing Thompson means citing the phenomenological tradition through Thompson.
2. The phenomenological tradition develops *within* the enactivist synthesis in De Jaegher/Di Paolo/Thompson — it is not an independent arrival at PSM.
3. Schutz's we-relations (face-to-face situating) are independent of enactivism and provide genuine phenomenological-sociological support for the claim that meaning is constituted in direct encounter.

**Honest cluster assessment**: Cluster D is PARTIALLY independent. Schutz's we-relations theory and Merleau-Ponty's intercorporeality are not enactivist in origin and converge independently on the claim that shared meaning is constituted in bodily-social encounter. However, because Thompson explicitly incorporates this lineage into Cluster A, citing D as an independent cluster double-counts the same intellectual tradition. Counting D as an independent cluster requires invoking specifically Schutz's sociological tradition (not Thompson's phenomenological synthesis) — which is a genuine but weak convergence.

**Count**: 0.5 cluster — Schutz provides independent phenomenological-sociological support, but the phenomenological lineage is largely absorbed into Cluster A through Thompson's synthesis. Not a full independent cluster.

### Cluster E: Language-Games / Practice-Theory (counts as 1 if ≥2 cited)
**Candidate sources**:
- Wittgenstein (1953) *Philosophical Investigations* — language-games as forms of life; meaning as use in practice; meaning is not private (private language argument).
- Bourdieu (1980) *The Logic of Practice* — habitus, field, capital; practices as the embodied, temporal, unreflective enactments through which social life is reproduced.

**Do these converge on PSM framing?**
- Wittgenstein's meaning-as-use: the "meaning emerges in practice/use" family claim is structurally parallel to PSM. Importantly, Wittgenstein's private language argument forecloses individual-only meaning-constitution — meaning requires a community of practice, which is the family claim PSM belongs to. However, Wittgenstein's emphasis is on rule-following and practice, not on *dyadic interaction-process operational autonomy*.
- Bourdieu's habitus: practice theory foregrounds pre-reflective, embodied, temporal enactment. Shares PSM's anti-representationalism. But Bourdieu's focus is on how social structures are reproduced through practice, not on dyadic meaning-emergence.
- Di Paolo et al.'s *Linguistic Bodies* (2018) explicitly bridges enactivism and the philosophy-of-language tradition (Wittgenstein, Maturana's languaging), treating language as extension of participatory sense-making through habit.

**Honest assessment**: Cluster E sources (Wittgenstein, Bourdieu) support the *family claim* (meaning is social, not private; meaning is practice-constituted) but do NOT independently arrive at the PSM-specific claim. Wittgenstein is somewhat absorbed into Di Paolo's *Linguistic Bodies* as a compatible tradition. However, Wittgenstein's private-language-argument is genuinely independent evidence that individual-alone meaning is incoherent — which is the anti-SR claim PSM makes. This is a genuine partial convergence.

**Count**: 0.5 cluster — Wittgenstein provides independent philosophical support for the anti-private-meaning family claim; Bourdieu's practice-theory is more distant. Not a full independent cluster.

---

## 3. Tradition-Citation Breadth Summary

| Cluster | Sources | Convergence on PSM-specific | Count |
|---------|---------|---------------------------|-------|
| A: Enactivist | De Jaegher/Di Paolo/Thompson/Gallagher/Varela | STRONG (originating) | 1.0 |
| B: Dialogical/Social-constructionist | Bakhtin/Vygotsky/Harré/Mead | PARTIAL (family claim only; mechanism differs) | 0.5 |
| C: Actor-network/Distributed cognition | Hutchins/Latour/Clark | WEAK (anti-individualist only) | 0.5 |
| D: Phenomenological intersubjectivity | Husserl/Merleau-Ponty/Schutz | PARTIAL (absorbed into A via Thompson; Schutz independent) | 0.5 |
| E: Language-games/Practice-theory | Wittgenstein/Bourdieu | PARTIAL (family claim only) | 0.5 |

**Total breadth score**: 1.0 + 0.5 + 0.5 + 0.5 + 0.5 = **3.0 cluster-equivalents** (with generous counting)
**Strict honest count**: With "partial" clusters counted strictly as not-qualifying independent clusters, the count is 1 full cluster (Enactivist) + 4 partial convergences that individually don't qualify as independent tradition clusters.

**Threshold assessment per plan rules**:
- Primitive admission (Option a): requires ≥3 distinct lineages with ≥2 outside enactivist cluster. HONEST VERDICT: **NOT MET**. Adjacent traditions (B/C/D/E) do not independently converge on PSM's specific claim (interaction-process operational autonomy); they converge on the broader family claim (meaning is social/interactional). The plan's authoritative rule states: "do any adjacent traditions resolve the single-tradition-support concern, or do they cluster too tightly with enactivism?" VERDICT: They cluster too tightly. The phenomenological lineage (D) is absorbed into enactivism through Thompson. The dialogical lineage (B) arrives at intersubjective meaning but not at the PSM mechanism. Distributed cognition (C) arrives at anti-individualist unit-of-analysis but not at dyadic-interaction operational autonomy.
- Lighter admission (Options e/g/i): requires ≥2 cluster-counts (single-tradition + 1 adjacent). HONEST VERDICT: **MARGINALLY MET** for lighter categories. Cluster A (enactivist, 1.0) + at minimum Cluster B (dialogical family-claim support, 0.5) + Cluster D (phenomenological support, 0.5) gives 2.0 — enough for derived glossary slug or framing-note.

**Single-tradition-support concern status**: MAINTAINED for primitive admission (Option a). NOT a hard block for lighter admission categories (e/g/i/f). The plan's original framing was correct.

---

## 4. Admission-Category-Fit Evaluation

### Option (a) Primitive admission
**Shape-fit**: POOR
- Earning-test (a) — protocol surface specifiability: De Jaegher/Di Paolo's PSM operations (entry/exit conditions, cadence, mutual incorporation, breakdown/repair) exist in the bridge note but are not operationalized at Spore's coordination-grammar layer. The research-autopoiesis-4e.md notes the tradition is "thin on trust, commitment, evidence, and institutional power" — exactly Spore's operational terrain.
- Earning-test (b) — multi-scale operational support: 3 PSM-supporting cases out of 9; 3 SR-supporting; 3 ambiguous. Joint-passage earning test (ALL signal-instances must pass) does NOT pass — Cases 5, 8, 9 are clearly SR.
- Tradition-breadth: single-tradition block maintained (see §3).
- **Verdict**: BLOCKED on earning-test (a) + (b) + tradition-breadth. Do not admit as primitive.

### Option (b) Cross-cutting doctrine
**Shape-fit**: POOR
- Cross-cutting doctrines (care-commoning/reproductive-commoning/boundary-commoning) are visibility-lens + practice-orientation elements. PSM is a cognitive-science framing of meaning-emergence.
- The category is "for lenses, not for structurally-constitutive concerns" (plan §2c rejection precedent).
- **Verdict**: Shape-mismatch. Do not admit as doctrine.

### Option (c) Mode-across-primitives
**Shape-fit**: POOR
- Modes-category was built for power-flow contrasts (Johar three-form: allocational/expressive/constructed — ADR-0048).
- PSM is a meaning-making mechanism, not a power-flow mode.
- **Verdict**: Shape-mismatch. Do not admit as mode.

### Option (d) Property-on-primitive (Signal or Field)
**Shape-fit**: PARTIAL (for Signal, with scope qualification)
- Per ADR-0062 precedent: a property applies to a primitive instance; a joint-passage earning test is required (Q-a: names a new coordination operation or property; Q-b: applies to all instances of the primitive).
- For Signal: PSM applies to some signal-instances (BKC pool-formation signals, IC memory-governance curation signals, joint-commitment formation signals) but NOT to all (algedonic signals, stigmergic traces, spec-DAG event emission are SR-primary). Joint-passage Q-b FAILS.
- For Field: PSM could be a property of Field-conditions that host constitutive meaning-making (deliberation-phase fields). But Field's operations (set-conditions, scope-commitments) are Ostromian rule-level, not PSM framing.
- **Verdict**: Earning test fails joint-passage requirement per ADR-0062 precedent. If joint-passage fails → lean (i) scope-condition rather than (d) property. Do not admit as property-on-primitive.
- **Structural finding**: The same partial-passage earning test result that led ADR-0062 to choose scope-conditioning over property-on-primitive is present here. This is a genuine structural parallel.

### Option (e) Derived glossary slug
**Shape-fit**: VIABLE
- Lightest admission. Tradition-breadth threshold ≥2 cluster-counts: MARGINALLY MET (A=1.0 + B+D partial=1.0 → 2.0).
- Provides canonical anchor for the concept without claiming operational primacy.
- Could operate similarly to `trust`, `reciprocity`, `attestation-of-execution`, `permeability`, `double-boundary`, `encounter` — all derived from PSM being referenced as cited-lineage but not primitive.
- Downside: PSM is already cited as named standing-objection in project-vision.md:66 and as cited-lineage in project-vision.md:60. Adding a slug without prose-body context is minimal. A slug alone would not provide the relationship-articulation the framing-note path (Option g) would.

### Option (f) Decline-inline-prose-only
**Shape-fit**: GOOD
- Matches ADR-0061 precedent for concepts that fail earning test but deserve named acknowledgment.
- ADR-0053 already named PSM as "held-open per capstone §8 item 16" and ADR-0053 §3 Signal autopoiesis-objection acknowledgment already exists. This ADR can deepen by naming the specific De Jaegher/Di Paolo framing canonically in the ADR §Consequences.
- Zero canon-body changes. Signal bullet already carries the named standing-objection; this ADR closes the holding-open by formally declining after dedicated evaluation.
- **Verdict**: Clean precedent. Closes R-Sig-1 definitively. Honest given tradition-breadth analysis.

### Option (g) Decompose-and-park-as-framing-note
**Shape-fit**: GOOD
- Matches ADR-0055 (Encounter) precedent.
- PSM has richer conceptual depth than a pure decline justifies — the 4e-cognition-and-participatory-sense-making.md bridge note already provides the articulation material. A framing-note would give PSM a canonical articulation home beyond the ADR §Consequences alone.
- Could extend the existing bridge note OR create a new `canon-framing-participatory-sense-making.md`.
- Advantage over (f): provides canonical articulation of the Signal/PSM relationship (which is cross-primitive and deserves its own home).
- Advantage over (e): gives relational articulation, not just a slug.
- The "decompose" part: PSM decomposes as (1) enactive critique of sender-receiver ontology (standing objection — already in canon); (2) positive PSM framing for deliberation-phase coordination (scope-conditioned applicability); (3) PSM relationship to joint-commitment (compatible but not identical Side-B positions); (4) PSM relationship to Signal-constructed-power (ADR-0048 lineage).

### Option (h) Park-with-triggers
**Shape-fit**: VIABLE but sub-optimal
- Matches ADR-0054 (rewilding) precedent.
- Rewilding was declined because the evidence was speculative-pending-maturation and the meta-gap framing was not ready. PSM has a dedicated bridge note (`4e-cognition-and-participatory-sense-making.md`), a corpus review, and multiple in-repo references — richer than rewilding.
- Parking again after having already been held-open at ADR-0053 R-Sig-1 risks indefinite deferral.
- Better path: close definitively via (f) decline or articulate via (g) framing-note.
- Triggers could include: "if BKC pool-formation deliberation is instrumented and 3+ operational cases of PSM-in-action are documented" — but given 3 PSM-supporting cases already exist conceptually, park-only without articulation seems under-responsive.

### Option (i) Adopt-with-scope-conditioning
**Shape-fit**: GOOD — best fit given the dual-phase finding
- Matches ADR-0062 (Membrane-as-self-produced) precedent precisely.
- The dual-phase pattern (PSM during deliberation/formation, SR during dissemination/adoption) across Cases 2, 4, 7 maps to ADR-0062's "two operationally-distinct production-modes, and the reading that applies depends on the instantiation context."
- Signal bullet currently names the SR layer as primary. Scope-conditioning would explicitly acknowledge that for some signal-instances (BKC pool-formation deliberation signals, IC memory-governance curation signals, joint-commitment formation processes), PSM framing is operationally relevant; for others (algedonic signals, stigmergic traces, spec-DAG event emission, governance-artifact dissemination), SR ontology is operationally sufficient.
- Slug: "participatory-sense-making" slug could be included (yaml v12→v13) OR the scope-conditioning could be prose-only within the Signal bullet.
- This option is MORE than decline (engages PSM positively for some instances) and LESS than primitive/property (doesn't claim universal applicability).
- Relationship to Option (g): scope-condition is Signal-bullet-centric; framing-note is relationship-articulation-centric. Given PSM's cross-primitive resonance (Signal, joint-commitment formation, IC-governance), a framing-note may be more appropriate than purely Signal-bullet scope-conditioning.

---

## 5. ADR-0050 Side-B Relationship

**Relationship type**: DEEPENING (Side-B) but PARALLEL-NOT-IDENTICAL

**Analysis**:
ADR-0050 committed to Gilbert-cum-List/Pettit as the admitted Side-B form (joint-commitment verb + Holon irreducibility). PSM is the *enactive form* of Side-B — "sense-making is constitutively interactive" (De Jaegher/Di Paolo) parallels "commitment is irreducibly joint" (Gilbert) but via different mechanism (structural coupling vs. illocutionary obligation).

ADR-0050 explicitly noted: "Spore commits to the Gilbertian form per ADR-0050. Other Side-B primitive candidates (participatory-sense-making per De Jaegher/Di Paolo 2007; we-mode per Tuomela; Searle we-intention) remain accessible as cited-lineage or alternative-positions." ADR-0050 also noted: "Participatory-sense-making and joint-commitment are different Side-B positions within the philosophy-of-sociality literature — Gilbert's joint-commitment is obligation-generating and cognitivist, while participatory-sense-making is meaning-emerging and enactive/embodied."

**Implication for ADR-0063**: PSM is NOT a deepening of Side-B in the sense of operationalizing what ADR-0050 already admitted. It is a *parallel* enactive-form Side-B answer that ADR-0050 explicitly named as accessible-but-not-admitted. ADR-0063 must articulate why Spore's admitted form (Gilbertian joint-commitment) does or does not make PSM-admission redundant or complementary.

**Key tension**: ADR-0050 line 141 states: "the enactive form remains accessible as mode-of-joint-commitment-operation (future canon could clarify if operational pressure warrants)." This is the most natural canonical home for PSM: not a separate primitive but a characterization of the PSM mode in which joint-commitment-formation operates. This points toward (i) scope-conditioning of joint-commitment formation as PSM in operation, with Signal-bullet acknowledgment as secondary.

**Verdict**: ADR-0050 relationship is PARALLEL (PSM as alternative enactive form of Side-B, not admitted; Gilbertian form is the admitted primitive). ADR-0063's disposition should deepen Side-B by articulating the PSM/joint-commitment-formation relationship rather than by admitting PSM as additional Side-B primitive.

---

## 6. ADR-0053 §3 Signal Precedent Relationship

**Relationship type**: DEEPENS with NAMED TRADITION (closes holding-open)

**What ADR-0053 did**: Acknowledged enactive critique (Maturana/Varela/Thompson/Di Paolo) as standing objection in canon-body prose. Named PSM (De Jaegher/Di Paolo 2007) as "deeper Side-B answer" held-open per capstone §8 Tier-3 item 16. Did NOT perform dedicated evaluation.

**What ADR-0063 adds**: The dedicated earning-test evaluation that ADR-0053 explicitly deferred. Closes the parking. Names the specific De Jaegher/Di Paolo participatory-sense-making position by name in the ADR as the form of the standing objection being evaluated. Articulates precisely why admission fails the plan-specified threshold tests (operational-joint-passage and tradition-breadth for primitive admission) while acknowledging partial operational support.

**Deepening or moving beyond?**: DEEPENING — ADR-0063 does not contradict ADR-0053; it performs the evaluation ADR-0053 explicitly deferred and closes the holding-open with a formal disposition. The Signal bullet's autopoiesis-objection acknowledgment stands; ADR-0063 adds that the dedicated PSM evaluation has been performed and the specific form of the enactive-objection (PSM) is now canonically articulated rather than name-dropped.

---

## 7. Per-Option Parsimony-as-Earning-Test Evaluation

Per ADR-0048: parsimony is an earning-test outcome, not an axiom. Applied symmetrically.

- **(a) primitive**: Does NOT pass earning test (dual-passage fail + tradition-breadth block). Parsimony-as-outcome correctly declines admission.
- **(b) doctrine**: Shape-mismatch (category is for visibility-lens elements). Parsimony-as-outcome correctly declines.
- **(c) mode**: Shape-mismatch (category is for power-flow modes). Parsimony-as-outcome correctly declines.
- **(d) property**: Earning test (Q-b joint-passage) fails — PSM does not apply to all signal-instances. ADR-0062 precedent: when Q-b fails for a primitive → scope-condition rather than property. Correctly declined.
- **(e) derived glossary slug**: Marginally passes threshold (≥2 cluster-counts). Minimally earns admission as glossary entry. Low cost; low information.
- **(f) decline-inline-prose-only**: Closes R-Sig-1 definitively without new canon-body content. Appropriate when concept has already been named as cited-lineage in canon-body (which PSM has, in project-vision.md:60 + :66 + :85 + ADR-0050).
- **(g) framing-note**: Earns a positive-articulation home for the PSM/Signal/joint-commitment relationship. Higher information than (e) or (f); lower commitment than (i). Appropriate when conceptual depth exceeds what inline prose can carry.
- **(h) park-with-triggers**: Sub-optimal — concept has been held-open since ADR-0053; additional parking without dedicated evaluation criteria is over-deferral.
- **(i) scope-condition**: Earns a Signal-bullet scope-qualification that is honest about dual-phase reality and provides positive canonical acknowledgment without over-claiming. Matches ADR-0062 structural precedent (dual-mode → scope-condition). May or may not include slug. Higher information than (f); Signal-centric rather than relationship-centric.

---

## 8. Combined Lean Assessment

**Aggregate operational case count**: 3 PSM-supporting / 3 SR-supporting / 3 Ambiguous (dual-phase)
**Tradition-breadth**: Single-tradition hard block maintained for (a); marginally met for lighter categories (≥2 cluster-equivalents)
**Structural dual-phase finding**: Maps precisely to ADR-0062 dual-mode precedent → strongest lean toward (i) scope-condition
**ADR-0050 relationship**: Parallel enactive Side-B (not deepening Gilbertian); PSM most naturally sits as "mode-of-joint-commitment-operation" in ADR-0050's language
**Conceptual depth of PSM**: Richer than a pure (f) decline justifies; the bridge note + corpus review provide articulation material for a framing-note or scope-conditioning treatment

**Primary lean**: **(i) adopt-with-scope-conditioning** — Signal bullet extended to acknowledge deliberative/formation-phase signal-instances as PSM-operative; algedonic/stigmergic/dissemination-phase as SR-operative. Optionally: slug `participatory-sense-making` admitted (yaml v12→v13).
**Secondary lean (if operator prefers full articulation)**: **(g) decompose-and-park-as-framing-note** — for richer cross-primitive relationship articulation (Signal + joint-commitment-formation + IC-governance)
**Third option (minimalist close)**: **(f) decline-inline-prose-only** — closes R-Sig-1 with named-tradition acknowledgment; no new canon-body; uses existing project-vision.md:60+66 citations as the canonical home.
**Not recommended**: (a) primitive, (b) doctrine, (c) mode, (d) property, (h) park.

---

*Audit manifest complete. 9 cases evaluated. Tradition-citation breadth analysis (5 clusters). Admission-category-fit per option. ADR-0050 + ADR-0053 precedent relationships. Per-option parsimony-as-earning-test evaluation.*
