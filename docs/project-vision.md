---
doc_id: spore.project-vision
doc_kind: vision
status: active
depends_on: []
---

# Spore — Project Vision

Spore is an infrastructure for collective agency — a common grammar for plural, sovereign coordination across scales and scopes. It operates across the normative commitments that shape how agents see, value, know, and act (ontological, axiological, epistemological, practical). It develops and publishes **Agent Commons**: a pattern language, protocol family, and governance-memory pattern that enables coordination and coherence without surrendering sovereignty. Here "agent" means any entity with enough coherence to perceive, decide, and act: a person, an AI, a team, an organization, a federation, a mixed human-AI collective.

The formal name for the protocol family is **Agent Commons**. Spore is the project that develops, tests, and publishes it.

## Intended audience and scope

- **Audience**: Solo operators through active contributors across Spore, Intelligence Commons, and Poietic Match who need the constitutional orientation for Agent Commons before they move into foundations, protocols, or decision records
- **Prerequisites**: Comfort reading canon docs across the three canon-bearing repos and following links between vision, foundations, protocols, and ADRs; this document assumes coordination and governance vocabulary rather than introducing it from first principles
- **Scope**: States what Spore is for, the constitutional commitments it publishes, the coordination ecology it advances, and how it relates to adjacent systems and adoption surfaces
- **Out of scope**: Step-by-step onboarding, software-specific implementation detail, production baselines, and exhaustive explanation of every primitive or protocol

## Core Thesis

**Spore's grammar has two kinds of primitives.** *Structural primitives* describe the substrate of coordination — the shape of the coordination space. *Coordination verbs* describe the operations through which agents coordinate across that substrate. Together, the nine primitives form the grammar; cross-cutting doctrine (reproductive-commoning, boundary-commoning, care-commoning) applies lenses over the grammar without adding new primitive categories.

**Structural primitives** (the substrate of coordination):

- **Field** — the shared coordination space; what is between holons; the ecological, economic, or epistemic substrate in which commitments travel. Field is agent-aware but not itself an agent.
    - *3-level rule-stack* (Ostrom 2005; Kiser & Ostrom 1982): **operational** rules govern day-to-day coordination within the field (how intents are surfaced, commitments entered, evidence recorded); **collective-choice** rules govern how operational rules are made, modified, and enforced; **constitutional** rules govern who is eligible to participate at the collective-choice level. The levels are recursive rather than strictly hierarchical — action at each level is itself an action situation.
    - *7 rule-type axes* decompose any rule configuration inside a level: boundary (who participates), position (what roles exist), choice (which actions are permitted), aggregation (how individual choices combine), information (what is visible to whom), payoff (what costs/rewards attach), scope (what outcomes are permissible). Available expressive machinery for protocol design; canon does not require every protocol to enumerate all seven.
    - *Rule-in-use vs. rule-in-form*: the working rule participants reference when explaining their actions is canonical; formal written rules project that practice. Compliance is assessed against rules-in-use; formal rules that are not working rules have no causal standing. Mirrors the text-authoritative-with-graph-as-derived-projection commitment at the rule layer (ADR-0041).
    - *Authority-over-rule-levels* (ADR-0047 Layer 1): capacity-to-set, capacity-to-amend, and capacity-to-enforce rules at each level is distributed across participants, roles, and positions — enumerated-powers-by-role pattern (Debian §4/§5/§6; PEP 13 Steering Council; Apache PMC vs. Board) and polycentric-governance (V. Ostrom 1972; Aligica-Tarko 2012).
    - See ADR-0008 (collective-agency placement), ADR-0046 (rule-level stratification), ADR-0047 (power-axis on rule-setting).
- **Holon** — the part-whole recursive unit; every holon is both a part of a larger whole (it belongs to fields) and a whole containing parts (it has internal composition). Personal operator, pair-matching, bioregional federation: each is a holon at its scale.
    - *Whole not reducible to aggregation of parts* (ADR-0050): a holon exhibits organizational invariants and emergent properties that cannot be analytically recovered from constituent-analysis alone — List/Pettit supervenience-without-reducibility (*Group Agency* 2011); Thompson dynamic co-emergence (*Mind in Life* 2007). ADR-0016 established the holon/field distinction; ADR-0050 makes explicit the irreducibility clause ADR-0016 was agnostic on — closing capstone §2's concern that *"if A, Spore's holon is mere aggregation."*
    - *Relational identity* (ADR-0051): `relational-identity` names the whole-emergent-property of a holon — the sense in which a holon's identity is constituted through relations (ties, kinship, structural coupling, commons-nesting, recursion-closure) rather than carried by any individual part. Five traditions converge: Viable System Model (S5 recursion-closure *"determines an identity,"* Beer 1984); Care Ethics (Held: *"identity and moral agency constituted by ties and responsibilities to others"*); Pluriversal / Indigenous Governance (personhood via kinship with more-than-human, ancestors, land); Autopoiesis / 4E Cognition (Barandiaran-Di Paolo-Rohde structural-coupling); Commons Governance (Bollier-Helfrich *"Nested-I"*).
    - *Identity scope per capstone §7* — strict separation of four identity-buckets, each with its own canonical home: **relational-identity** at Holon (this bullet); **cryptographic-identity** (Distributed BFT / Trust Networks) at Membrane signing-function + federation-protocol signing; **persistent-handle identity** (Friedman-Resnick pseudonym-stability) at federation-protocol persistence + KOI entity-resolution; **authorship/sponsorship identity** (Repo-Topology CODEOWNERS; Apache *"individuals, not organizations"*) implicit in Commitment party-composition + Evidence attestor-field. All four coexist without re-disposition.
    - *Pluriversal residue*: Capstone §3 paraphrase-test verdict is partial. Persistent holon-property + signed signals covers VSM and Distributed Systems cases; Pluriversal kinship-identity is "irreducible" and operates compatibly under both canon-posture (relational-identity as Holon property) and held-tension (ADR-0001 pluriversal-incommensurability) — the dual-operability pattern ADR-0050 established for pluriversal-joint-commitment. `relational-identity` is a property-of-primitive, not a separate primitive; the 9-primitive roster is preserved.
    - *Terminological-orphan note* (ADR-0053): the *structure* (part-whole recursion + supervenience-without-reducibility) is widely supported — VSM Recursive System Theorem (logically equivalent to holon, though Beer does not cite Koestler), List/Pettit supervenient group agents, Distributed Systems Holonic Modeling, REA Plan>Process>Event, Commons nested-enterprise Principle 8. The *Koestler 1967 vocabulary* itself is rare in modern coordination-theory literature (mostly Koestler-era or holonic-manufacturing). Adjacent terms (whole-part-relation, nested-agency, scale-linked-agency) overlap; canon retains `holon` per capstone §4 verdict (*"Not a demotion; a provenance note"*).
- **Membrane** — the semi-permeable interface between holon and field, and between holons. Membranes filter, translate, authorize, and attest. Spore's strongest-supported primitive across coordination traditions; the near-universal name for what separates operational closure from environmental coupling.
    - *Permeability* (ADR-0053; Bollier-Helfrich *"semi-permeable membrane"*): Membranes are not binary gates; they selectively pass — admitting some intents/commitments/signals/evidence while filtering others, with permeability conditioned by what the membrane authorizes, attests, and translates. Configurable: permeable-by-default with explicit gating, gated-by-default with explicit admission, or differential-by-direction (intents flow in, commitments flow out under separate conditions).
    - *Double-boundary* (ADR-0053; Ostrom Cox-1A/1B, *Governing the Commons* 1990 Principle-1 split): a Membrane carries two analytically-distinct boundary functions that canon previously conflated — **social inclusion** (who participates in the holon, the resource user-set, the commitment-bearing-parties) and **ecological/resource boundary** (what the holon's commitments range over, the resource extent, the substrate the field projects onto). The two boundaries can have different permeability, different gatekeepers, and different failure modes (social closure with resource over-commitment; resource closure with social over-inclusion).
    - *Asymmetric authorization* (ADR-0047 Layer 3): the authorize function carries a power dimension when authorize-capacity is distributed asymmetrically — some parties can admit/exclude/gate others while the reverse does not hold. Canon slug `asymmetric-membrane` names this gatekeeping-asymmetry axis; maps to platform-gatekeeping, immigration-style boundary authority, and the gatekeeper-role-accrual failure mode named in ADR-0005. Pluriversal membrane-authorization via ritual/elder-consensus maps here with an asymmetric-source (sacred/ancestral) rather than asymmetric-accumulation reading.
    - Permeability and double-boundary are derived analytic vocabulary on Membrane, not separate primitives; they coexist with `asymmetric-membrane` and remain distinct from frozen-vocab `filtering-membrane` (an opposition primitive about over-filtering as failure mode, not a Membrane axis).

**Coordination verbs** (the operations through which coordination happens):

- **Intent** — pre-commitment coordination signal. Declared or inferred directional stance ("I want," "I offer," "I need," "I will if three others commit"). Where plurality enters the grammar. Not every intent becomes a commitment; governance is partly about how intents are surfaced, combined, deferred, or refused. The plurality Intent carries is expressive as well as epistemic: Intent is the primary primitive surface for **expressive power** (ADR-0048) — articulation of meaning, desire, perception, and dissent (Johar, *Power Cannot Be Allocated*, 2026). Contestation, refusal, and reweaving enter through Intent before they enter Commitment. Broad Spore sense per ADR-0013; PM's `pm:Intent` is a protocol-layer specialization.
- **Commitment** — the accepted, governed, tracked binding of parties to terms. Commitments stabilize one or more intents into a durable relation with specified attestation and fulfillment conditions. Commitment-qua-primitive is the *operational* sense (offer/accept/attest/fulfill); the *orientation* sense (visions, directional declarations) and *constitutional* sense (foundational value-choices) are artifact-types over operational commitments, not separate primitives. Commitment is the individual-scale binding primitive; the irreducibly-joint-scale binding operates as its own verb (see `joint-commitment` below).
    - *Stance and 40-year REA lineage* (ADR-0053): Capstone §8 places Commitment as the *"single highest-stakes Tier-1 priority"* (line 307). The corpus has lived in unresolved disagreement on Commitment's primitive status for 40 years: McCarthy 1982 excluded → Geerts-McCarthy 2000 added → Hruby 2006 as pattern → Ševčík 2016 collapses to scheduled-event sub-states → Foster 2024 firmness-of-plan partially derived from Intent. Gilbert/Tuomela treat it as sui generis; Bratman/Ludwig reduce it to stability-of-intention; Apache *voting.html* denies that commitment applies to its own votes; VSM lacks it entirely (Resource Bargain = variety-budgeting, not promise).
    - *Spore's stance*: **commitment is primitive with illocutionary force** per Gilbert/Searle/Tuomela — an offer/accept/attest cycle that performs binding rather than reporting it, with downstream demand-rights and standing-to-rebuke. Spore explicitly **rejects the Ševčík scheduled-event-shadow reading** (commitment-as-derived-from-scheduled-event-with-firmness-degree). The corpus does not settle this; Spore's position names itself as a position, not a consensus report.
    - *Joint vs. individual scales*: The joint-scale Side-B commitment (Gilbert/Tuomela vs. Bratman/Ludwig at the *we-intend* layer) is closed via ADR-0050's `joint-commitment` primitive admission (below). The residual individual-scale Bratman-individual-reduction debate (commitment-as-stability-of-intention at the I-intend layer) remains philosophically open and operates as canonically-acknowledged residue (R-Comm-1 in ADR-0053).
    - *Asymmetric binding* (ADR-0047 Layer 2): Commitment's party-structure has a symmetric default reading (Bratman interlocking plans — each intending "that we J" with meshing sub-plans) that external critics (Baier 1986 "Trust and Antitrust"; Folbre; Kittay "nested dependencies"; Tronto four-phase care-asymmetry) name as the tradition's characteristic blind-spot. Canon admits `asymmetric-commitment` as a named variant where one party binds disproportionately (caregiver→dependent, employer→employee, state→subject, ruler→ruled, ancestor→descendant in Pluriversal sacred-commitment framings). Care-commoning (ADR-0045) is the doctrine-lens over asymmetric-care-relations; `asymmetric-commitment` is the structural-party-asymmetry axis the lens operates on — broader than care-relations alone (includes power-asymmetric bindings that are not care-relations).
- **Joint-commitment** — the irreducibly-joint binding of two or more parties that is *not* a sum of personal commitments (Gilbert, *Joint Commitment*, OUP 2013, Ch. 2: *"a commitment of two or more people, not a sum of personal commitments"*). Formed by open expression of readiness under common knowledge, rescindable only by concurrence (no unilateral withdrawal — *contra* Bratman's symmetric planners), producing directed obligations and demand-rights *"of a different kind"* from moral ones (Gilbert, *Rights and Demands* 2018, Ch. 1).
    - *Operations*: `form-joint-commitment` (shared expression of readiness); `rescind-joint-commitment` (concurrence required); `hold-accountable-via-demand-right` (directed obligation + standing to rebuke); `extend-joint-commitment` (scope-expansion by concurrent renewal).
    - *Compositional layer distinction*: Commitment binds individuals; joint-commitment binds parties jointly as a single irreducible coordination act. Joint-commitment sits alongside (not within) Commitment; Commitment's individual-scale and asymmetric-commitment variants remain.
    - *Four operational scales* in Spore's instance families: team-charter (microscale); organizational decision (mesoscale — consent/board-vote/aggregation; List/Pettit's discursive-dilemma substrate); federation oath / protocol-version-adoption (macroscale — the clearest case of irreducibly-joint coordination: protocol-version compatibility is multi-party-simultaneous by construction); protocol-design-by-committee (meta-scale).
    - *Composition*: composes with ADR-0047 Layer 2 asymmetric-commitment to produce `asymmetric-joint-commitment` (joint-commitments where parties bind disproportionately — land-treaty; sacred-joint-commitment with ancestor/land under ADR-0001 pluriversal-incommensurability; federation-joint-commitment with size-asymmetry).
    - *Canon slug*: `joint-commitment`; frozen slug `collective-agency` (v2) is the broader umbrella for collective-capacity talk.
    - *Philosophical narrowing*: Spore commits to the Gilbertian form per ADR-0050. Other Side-B primitive candidates (participatory-sense-making per De Jaegher/Di Paolo 2007; we-mode per Tuomela *PoS* 2007; Searle we-intention 1990) remain accessible as cited-lineage or alternative-positions.
    - Admitted 2026-04-22 per ADR-0050 (capstone §8 Tier-1 item 3 recommended action for Side-B; earning-test marginal on protocol-surface specifiability — Schmid 2014 circularity objection live, but Gilbertian operations are crisper than Reproduction-continuity's — and strong on multi-scale operational implementation).
- **Evidence** — attested record of observed state, execution, or fulfillment. Evidence grounds the coordination loop in observable reality: claims, fulfillment-traces, provenance-tracked attestations. Spore evidence is attestation-of-execution, not epistemological evidence; it tracks whether commitments were fulfilled and in what state, not what counts as knowledge in general. Broad Spore sense per ADR-0013; PM's `pm:Evidence` / `pm:FulfillmentEvidence` are protocol-layer specializations.
- **Signal** — live coordination transmission; stigmergic trace; pre-evidence flow. Distinct from evidence: evidence attests state; signal transmits perturbation. Includes algedonic signals (bypassing hierarchy to surface urgency — VSM), intent-publication signals, federation-level coordination messages.
    - *Pre-reaction and constructed power* (ADR-0048; Johar, *Power Cannot Be Allocated*, 2026): Signal carries pre-reaction — the capacity to act on incomplete information before situations fully form. This pre-reactive propagation is one substrate for **constructed power**, which emerges situationally through verb-loop dynamics rather than from pre-allocated structural capacity.
    - *Autopoiesis objection acknowledged* (ADR-0053; capstone §8 Tier-2 item 9): enactive cognition (Maturana / Varela / Thompson / Di Paolo) explicitly replaces signal-as-information with structural coupling. The sender-receiver / Shannon-channel ontology that signal-as-primitive presupposes is, on the autopoietic reading, a representational-picture fossil that should dissolve into structural-coupling dynamics.
    - *Spore's response*: signal names a coordination-grammar primitive at the **operational sender-receiver layer** supported by MARL/VSM/DS/ABM/REA/Trust (six tradition-supports across the corpus). The autopoietic structural-coupling reduction operates at the **cognitive-science / enactive-grounding layer** and stands as a principled standing objection that does not defeat operational signal-as-primitive. Spore preserves signal-as-primitive while acknowledging the enactive critique is owed an answer rather than silently routed around (per capstone §2 divergence 6). Participatory-sense-making (De Jaegher/Di Paolo 2007) as deeper Side-B answer remains held-open per capstone §8 Tier-3 item 16.
    - See ADR-0007.
- **Reproduction** — the coordination labor that sustains the verb-loop across time, actor turnover, and generational succession: enact-succession, transmit-knowledge, replicate-commitment-pattern, regenerate-field-capacity. Operates at a time-scale distinct from the within-episode intent → commitment → evidence → signal cycle: the other four verbs coordinate *within* a coordination episode; reproduction coordinates *across* episodes by making the next instantiation possible.
    - *Federicist framing*: Federici, Folbre, and Kittay name reproductive labor — the invisible substrate of every commons — as the primary capture mechanism when left unnamed. Admitting reproduction as first-class coordination verb is the canon-legible countermove that prevents silent delegation to invisibility (ADR-0048 substitution-trap discipline).
    - *Multi-scale operationalization*: Beer/VSM viability-over-time (*"viability is survival over time"*); governance-process succession rules (Debian DPL-rotation; W3C maturity levels; IETF charter-renewal); replication-crisis as reproductive-failure mode (Structured Disagreement) operationalize reproduction at institutional scale. Pluriversal cyclical ritual and ancestor rebirth instantiate it at generational scale — sacred-commitment/customary-ritual reproduction regime operates under the ADR-0001 incommensurability-as-first-class-canon frame.
    - *Three-way distinction with doctrine-lenses*: Distinct from `reproductive-commoning` (ADR-0002 doctrine-lens on visibility-practice axis) and `care-commoning` (ADR-0045 doctrine-lens on asymmetric-relational axis). Reproduction is the primitive verb both doctrines operate over; the three elements overlap at reproductive-care-work (Federici's primary object of critique) without reducing to each other.
    - *Power-over-reproduction*: Relates to ADR-0047's `asymmetric-commitment` — power-over-reproduction operates through asymmetric-commitment over the reproduction primitive at the reproductive-labor locus.
    - *Canon slug*: `reproduction-continuity`; `viability-over-time` is the Beer-lineage synonym noted in glossary.
    - Admitted 2026-04-22 per ADR-0049; earning-test marginal on protocol-surface specifiability (acknowledged honestly — the thinness IS the Federici-named phenomenon) and strong on multi-scale operational implementation.

**Sociality is irreducibly collective at the joint layer** (ADR-0050). Spore commits to Side B on the sociality-reducibility axis (capstone §8 Tier-1 item 3): some coordination acts cannot be analyzed as sums of individual mental states or individual commitments. Spore's grammar names the irreducibly-joint stratum at two layers:

- *Structural layer*: Holon's whole is not reducible to an aggregation of parts (Holon bullet above; ADR-0016 extended with irreducibility clause per ADR-0050).
- *Operational layer*: `joint-commitment` is a distinct coordination verb (above) — Gilbert's sui-generis *"commitment of two or more people, not a sum of personal commitments,"* distinct from individual-scale Commitment.

The tilt toward this commitment was already present structurally across Phase 3b.1–4 canon: ADR-0002 reproductive-commoning (*"there is no commons without commoning"*); ADR-0045 care-commoning (care-relations as constitutive of holonic-coordination, Held/Mackenzie-Stoljar relational-autonomy); ADR-0047 asymmetric-commitment (Baier/Kittay/Folbre asymmetric-vulnerability); ADR-0048 participatory-sense-making cited for constructed-power lineage; ADR-0049 Federicist invisibilisation-of-reproductive-labor. ADR-0050 names the tilt explicitly as canon-posture rather than residue.

This commitment is *scoped*, not universal. Spore's primitive grammar operates at the social-coordination-among-sovereign-agents-capable-of-declaring-intent layer (per scope-conditioning ADR-0031/0032); alternative frames (autopoiesis sub-symbolic coupling; distributed-systems message-passing; pluriversal kinship-ontology held under ADR-0001) operate at other layers and may answer the reducibility question differently.

Side-B within Spore's literature narrows philosophically to Gilbert-cum-List/Pettit (joint-commitment verb-layer primitive + supervenience-without-reducibility at Holon structural layer); alternative Side-B positions (participatory-sense-making per De Jaegher/Di Paolo; we-mode per Tuomela; Searle we-intention) remain accessible as cited-lineage or candidate alternatives without canon-admission. Ontological pluriversality (one-world-vs-many-worlds) remains held-as-tension per ADR-0001 as a distinct question from sociality-reducibility; pluriversal-joint-commitment forms (sacred-commitment between ancestor-lineage and successor-lineage, kinship-commitment under customary-ritual frame) operate compatibly under both canon-posture (ADR-0050 primitive) and held-tension frame (ADR-0001).

**Power across primitives** (ADR-0047 + ADR-0048). Spore does not admit Power/Authority as a distinct primitive. Following Johar (*Power Cannot Be Allocated*, 2026), power operates in three distinct modes across the grammar — **allocational** (structural capacity; stabilizes), **expressive** (articulation of meaning, desire, dissent; vitalizes), **constructed** (situational agency emerging in response; adapts) — and all three are canon-necessary. Over-engineering any one produces recognizable failure: all-allocational collapses into traditional org chart; all-expressive dissolves into ambient noise; all-constructed descends into unnavigable chaos.

*Allocational mode* (ADR-0047) decomposes across three existing-primitive asymmetry axes: (1) **authority-over-rule-levels** on Field-rule-stratification (capacity to set/amend/enforce rules at operational / collective-choice / constitutional levels — enumerated-powers-by-role, V. Ostrom polycentricity, VSM S5/S3); (2) **asymmetric-commitment** on Commitment-party-structure (disproportionate binding; Baier/Kittay/Folbre asymmetric-vulnerability); (3) **asymmetric-membrane** on Membrane-authorize (gatekeeping asymmetry; admin-capture mechanism). ADR-0005's decentralization-myth-bundle names the compound power-capture failure mode at critique-frame level; ADR-0047's three axes supply the structural substrate through which compound-capture operates.

*Expressive mode* (ADR-0048) operates across coordination verbs: Intent carries articulation of meaning, desire, and dissent (where plurality enters the grammar); Signal transmits dissent and reframing as live perturbation; Evidence attests perception including contested perception. Expressive power is not a primitive but a quality of how these verbs operate — structures can suppress or enable it, and Spore's contestability commitment (§Constitutional Commitments) binds the grammar to enable it.

*Constructed mode* (ADR-0048) operates across verb-loop dynamics: agency emerges situationally through Intent → Commitment → Evidence → Intent iteration under conditions that exceed pre-allocated structure. Signal's pre-reactive propagation (acting on incomplete signals before situations fully form) is one mechanism; loop-fluency — the metabolic rate at which the verb-loop cycles — is the substrate. Constructed power cannot be codified or role-assigned; it emerges from skilled loop-participation, which depends on space, mission, resources, and distributed knowledge being actually present (Johar's four enabling conditions; potential future pattern-library admission).

Johar's **substitution trap** — *"One can assign authority without generating comprehension. One can define responsibility without producing commitment."* — is canon-legible failure mode: allocational moves that substitute for expressive/constructed capacity rather than supporting them reproduce the same failure pattern ADR-0005's decentralization-theater names at bundle level. The three modes must operate together; none substitutes for another. Relational-spiritual authority (Borrows' five-sources-of-law) is accommodated across all three modes (sacred-commitment as asymmetric-binding mechanism; expressive articulation across sacred/natural/deliberative/customary/positivistic sources; constructed authority through ritual-inflected loop participation), though Layer-1's Western-legal-frame adjacency remains held under ADR-0001 pluriversal-incommensurability.

**What the primitives earn their place.** A primitive enters the grammar by passing two conditions jointly:

- **(a)** it can be specified as a protocol surface with defined inputs, outputs, and governance; AND
- **(b)** it has operational implementations across Spore's actual instance families (BKC/Octo bioregional stewardship, Poietic Match pair-matching, personal-operator configurations) at identifiably different scales of coordination.

Nine primitives pass both conditions in Spore's current canon. The number is earning-test outcome, not an axiom — candidates passing both tests extend the roster.

- *ADR-0049 (Phase 3b.4)* was the first exercise of roster-extension after ADR-0044's 7-primitive-alignment, admitting `reproduction-continuity` with earning-test marginal on (a) and strong on (b). The (a)-marginality is preserved as canon-transparent property (Federici: the thinness of the reproduction protocol-surface IS the invisibilization phenomenon).
- *ADR-0050 (Phase 3b.5a)* is the second exercise same day, admitting `joint-commitment` with earning-test marginal on (a) (Gilbertian form-joint-commitment / rescind-by-concurrence / hold-accountable-via-demand-right operations crisper than Reproduction-continuity's but thinner than Intent/Commitment/Evidence/Signal; Schmid 2014 circularity objection live) and strong on (b) (four operational scales including federation-scale protocol-version-adoption as the clearest irreducibly-joint case).

Two admissions in one day is an outcome of two candidates passing the test, not a relaxation of the test: parsimony bounds are determined by earning-test pass-count, not by prior primitive-count. Candidates that fail (e.g., *expressive power*, *constructed power*, *comprehension* — each passes (b) but fails (a) because they lack separable protocol surfaces) are articulated as modes-across-primitives rather than admitted as primitives.

**Four categories of canon objects** (ADR-0048). Spore distinguishes: (i) *primitives* — the substrate (field/holon/membrane) and operations (intent/commitment/joint-commitment/evidence/signal/reproduction) themselves; (ii) *cross-cutting doctrines* — lenses applied across primitives (reproductive-commoning, boundary-commoning, care-commoning); (iii) *modes-across-primitives* — grammatical properties or dynamics of how primitives operate (allocational/expressive/constructed power; possibly others as canon matures); (iv) *patterns* — recurring compositions mediating between containment and connection (governance-memory pattern; federation-encounter parked as pattern-library admission candidate under ADR-0055 triggers E-1 through E-5). Modes are distinct from primitives (they are qualities of operation, not separate elements) and distinct from doctrines (they are structural properties, not lenses).

**What is excluded from primitive status** (and why):

- *Visions, roadmaps, agreements, policies, role definitions, domain definitions* — artifact-types some coordination contexts author to organize intents and commitments at longer time-horizons, not primitive operations or structures. Their presence is a property of the context, not a requirement of the grammar.
- *Sovereign identity, shared memory, governance patterns, federation rules* — infrastructure surfaces, composition mechanisms, or pattern-libraries (e.g. governance-memory pattern), not primitive operations. Previous Core Thesis framings that listed these as "five primitives" are superseded; they now live at the instance-model and pattern-library layer.
- *Learning* — meta-property of a healthy primitive loop, not a separable element in it. A loop that does not update its intents, commitments, and evidence-criteria as the world changes is dysfunctional; learning is what a working loop does.
- *Memory, state* — derived from Evidence + Field; admit as glossary entries only.
- *Trust, reciprocity* — closed by ADR-0052 (Phase 3b.6) as derived glossary slugs with shared framing-note; four residues canonically-acknowledged (R-Rec-1 Pluriversal ritual-with-non-human-kin; R-Rec-2 Noddings/Kittay non-contractual mutuality; R-Tr-1 Luhmann choice-under-irreducible-uncertainty; R-Tr-2 Baier asymmetric-vulnerability). Zero canon-body changes; yaml slugs only.
- *Identity* — closed by ADR-0051 (Phase 3b.5): `relational-identity` admitted as named property of Holon at the whole-emergent-layer per capstone §3 verdict. Five load-bearing traditions (Care Ethics, Pluriversal/Indigenous Governance, Commons Governance, Autopoiesis/4E, VSM). Strict scope per capstone §7: cryptographic / persistent-handle / authorship identity-readings coexist-as-distinct in their existing canonical homes.
- *Norms* — closed by ADR-0046 (Field rule-level stratification, Phase 3b.2).
- *Power/authority* — closed by ADR-0047 (allocational-mode multi-layer decomposition across Field/Commitment/Membrane, Phase 3b.3) + ADR-0048 (expressive + constructed modes as modes-across-primitives per Johar three-form framework, Phase 3b.3b).
- *Reproduction/continuity* — closed by ADR-0049 (8th primitive, Phase 3b.4). Extends ADR-0002's reproductive-commoning doctrine-lens with primitive-layer substrate; care-reproduction gap-residue addressed by three-way distinction across reproductive-commoning (practice-lens on visibility) / care-commoning (practice-lens on asymmetric-relational) / reproduction-continuity (primitive verb).
- *Sociality-reducibility* — closed by ADR-0050 (Phase 3b.5a). Capstone §8 Tier-1 item 3 (*"the single most consequential unresolved question for whether Spore's canon is complete"*) resolved via Option H comprehensive Side-B commitment: canonicalize implicit 3b.1–4 tilt + extend Holon primitive with irreducibility clause + admit `joint-commitment` as 9th primitive / 6th coordination verb at the joint/collective-compositional layer.
- *Glossary refinements* — closed by ADR-0053 (Phase 3b.7): five primitive-bullet refinements (Evidence attestation-of-execution; Signal autopoiesis-objection; Commitment 40-year REA-lineage with stance-naming; Holon terminological-orphan; Membrane permeability + double-boundary). Three new derived glossary slugs (`attestation-of-execution`, `permeability`, `double-boundary`).
- *Encounter* — closed by ADR-0055 (post-Phase-3b encounter-evaluation, Option D + E.1 hybrid) via framing-note at `docs/research/connections/canon-framing-encounter-as-composition.md` articulating Encounter as composition of Signal + Joint-commitment + Intent + Evidence within bounded Field-conditions (temporal-spatial scope; rule-in-use scaffolding per ADR-0046). Dedicated earning-test evaluation ADR-0048 line 73 mandated: (a) FAILS at verb-primitive level (all four candidate operations decompose into existing-verb-compositions or are already named as constructed-power mode per ADR-0048); (b) PASSES multi-scale operational pressure but not primitive-uniquely (plan-vs-evidence catch on ADR-0048 line 73 "plausibly passes both tests" claim). Derived glossary slug `encounter` (yaml v12). Johar-native structured-encounter-as-discipline reading (johar-situational-truthing; johar-metacognition-stack; johar-ecology-of-courage) honored at discipline-layer. Federation-encounter parked as pattern-library admission candidate under 5 operationally-falsifiable triggers (E-1 through E-5).

**Scope and frame acknowledgment.** Spore's primitive grammar operates at a specific layer: *social coordination among sovereign agents capable of declaring intent, entering commitments, and attesting evidence*. Alternative coordination frames — autopoiesis (coupling dynamics as primitive; sub-symbolic structural coupling), active inference (sense/decide/act as primitive), pluriversal traditions (oath/duty/narrative-coherence as the analogues to commitment/intent/evidence, not equivalents), distributed-systems theory (message-passing as primitive) — operate at different layers and privilege different primitives. Spore's grammar does not subsume or invalidate them; the pluriversal-incommensurability tension is held as first-class canon per ADR-0001. This is a scoped grammar, not a universal account of coordination.

**Scope of composability.** Across Spore's three operational instance families (BKC/Octo, Poietic Match, personal-operator), the nine primitives appear as recognisable structures and operations at each scale Spore has reached, with scale-appropriate differences in formalization, party composition, and governance conditions. Whether this composability extends to arbitrary coordination systems at arbitrary scales is a research question, not a demonstrated property.

**Goal.** The grammar's purpose is **collective agency**: the situated capacity of agents — individual or collective — to sense, decide, and act meaningfully within the systems that sustain them. Structural primitives (field, holon, membrane — with Holon's whole irreducible to aggregation of parts per ADR-0050) give the grammar shape. Coordination verbs (intent, commitment, joint-commitment, evidence, signal, reproduction) give the grammar motion — intent/commitment/joint-commitment/evidence/signal cycle within a coordination episode; reproduction sustains the loop across episodes, actor turnover, and generational succession. Commitment binds parties individually; joint-commitment binds parties jointly as a single irreducibly-collective coordination act (federation protocol-adoption is the paradigm case). Together they let agents — individually and jointly — surface what they want, bind to each other to pursue it, verify whether pursuit delivered, surface the results back into the loop, and sustain the loop's capacity to run again.

## The Problem

Coordination entropy. As the number of agents, scales, and overlapping memberships grows, coherence degrades — unless the system has:

- Legible intent (what are we doing and why)
- Explicit dependencies (what constrains what)
- Shared memory (what's been decided, by whom, with what provenance)
- Machine-readable constraints (validateable, composable, queryable within a node or through selectively materialized views)
- Cross-boundary references (how local work connects to larger systems)
- Economic coordination (commitments, not just information)
- Governance that emerges from artifacts, not authorities
- Sensory grounding (how do we know the state of the world we're acting in)

## Constitutional Commitments

Not eternal truths, but chosen design commitments for this family of systems. Together they optimize for **expanding viable continuation sets** — keeping more good futures reachable under novelty, filtered through the commitments themselves. Not raw persistence-maximization. Not convergence. Viability shaped by consent, plurality, and contestability:

- **Provenance** — shared memory is unreliable without it
- **Forkability** — sovereignty is fake without it
- **Pluralism with interoperability** — without it, this becomes one more centralizing platform
- **Meaningful local autonomy** — authority and boundary must be explicit; participation must not require total absorption
- **Authorized boundary crossing** — boundary crossing, representation, and high-stakes action require legitimate authorization (consent, standing agreement, delegated mandate, or governance authority)
- **Explicit and reviewable authority** — authority should have scope, legibility, escalation paths, and revocation conditions
- **Contestability** — claims can be questioned, decisions reviewed, outputs challenged, mistakes repaired

## Coordination Under Complexity

Control-based coordination fails under manifest complexity as a provable structural condition: a regulator cannot govern a system whose variety exceeds the regulator's own representational capacity. When institutions face this mismatch, two empirically documented default responses emerge. Authoritarian compression narrows degrees of freedom — enforcing legibility, simplifying coordination, constraining variation — producing short-term stability while destroying adaptive capacity. Chaotic decomposition loses higher-order coordinating structures, reorganising at a lower level of complexity — not disorder, but insufficient coordination relative to existing interdependence. Adaptive coordination — navigating evolving conditions through iterative sensing and response rather than enforcing predefined outcomes — is the independently confirmed general response requirement.

## Structural Legitimacy

Coordination infrastructure becomes viable when authority and consequence are structurally coupled — when those who shape decisions are bound into the outcomes those decisions produce. This coupling must be polycentric: no single legitimacy source suffices alone; multiple overlapping dimensions are structurally necessary. When authority separates from consequence, institutions enter self-reinforcing degradation — consequence-bearing participants who could provide corrective feedback lose voice or exit, insulating decision-makers from the effects of their decisions. The grammar's commitment protocols, contestability mechanisms, and governance-from-artifacts are structural approaches to maintaining this coupling.

## Containment and Connection

The holonic axis organizes containment, authority, and nested integrity. The network axis organizes overlap, cross-cutting participation, and lateral reach. Structure, coherence, direction, and flow emerge from their interplay — as in tensegrity, where bounded compression elements and continuous tension elements together create integrity. The result is a semilattice, not a tree: holons participate in multiple overlapping wholes simultaneously, because living systems cannot be captured by a single clean hierarchy (Alexander, "A City is Not a Tree").

- **Invariants** give containment (constitutional commitments, vision, governance memory)
- **Protocols** shape connection (how intents travel across membranes, how commitments settle, how events propagate)
- **Patterns** mediate between them (recurring forms that let connection happen without collapse of containment)

Containment without overlap is dead — legible on paper, lifeless in use. Overlap without containment is noise. The system must oscillate between stabilizing, opening, routing, testing, and revising. Spore helps agents and communities reveal and support living overlap between systems, projects, and scales.

## Relational Topology

The grammar's protocols, projections, and holon architecture are not neutral containers — they actively generate patterns of relation, identity, perception, and power. Context variables predict coordination quality more strongly than composition variables: the same individuals in different arrangements produce different outcomes. Structural decay of relational grounding is the default without active maintenance — communication drops with distance, networks silo under topology change, and faultlines emerge from arrangement, not personality. Designing these conditions — attending to the patterning of connection, distance, and encounter as a primary design variable — is as important to coordination infrastructure as formal governance rules.

## The Coordination Ecology

The coordination verbs (intent, commitment, evidence, signal) form a recurring loop across Spore's structural primitives (field, holon, membrane): intents signal, commitments bind, evidence validates, and evidence feeds the next round of intents. The loop is an **ecology, not a pipeline** — it circulates. Evidence can generate new intents. Commitments can reveal intents that weren't visible before. Any verb can feed any other. Signals run alongside evidence, transmitting live coordination state while evidence records attested history. **Reproduction** (ADR-0049) is the fifth coordination verb operating at a distinct time-scale: the within-episode loop (intent → commitment → evidence → signal) cycles inside a coordination moment; reproduction sustains the loop across moments, actor turnover, and generational succession (enact-succession, transmit-knowledge, replicate-commitment-pattern, regenerate-field-capacity). Without reproduction, each loop-instantiation is its own first and only episode; with reproduction as primitive, the conditions for the loop to run again are themselves first-class coordination labor.

**Intent → Commitment → Evidence → Intent** (with signal as cross-cutting transmission, and loops/cross-links at every edge)

**Structural primitives host the loop.** Every occurrence of the loop happens *within a holon* (personal-operator, pair, collective), *across membranes* (between holons, between holon and field), *in a field* (the ecological, economic, or epistemic substrate). The structural primitives aren't in the loop — they define the space the loop runs in.

**Artifact-types some coordination contexts author.** Intent and commitment get organized over longer time-horizons through artifacts that are *not* themselves primitives:

- **Visions** — long-horizon orientation artifacts (values, direction, constraints) that anchor a related family of intents and commitments. A coordination context without a written vision can still have working intents, commitments, and evidence; a vision without downstream commitments is an unrealized preference.
- **Roadmaps** — sequenced-commitment artifacts that translate vision into structured needs and milestones. One way to organize commitments over time; continuous-prioritization backlogs, event-triggered commitment pools, Kanban-style flow, and emergent care-work prioritization are equally valid organizations.
- **Agreements, policies, roles, domain definitions** — further artifact-types that condition how intents and commitments form and compose within a context.

Vision and roadmap artifacts are load-bearing in some coordination contexts (large collectives with long time-horizons) and absent from others (person-scale, pair-scale, maintenance-mode operations). Their presence is a property of the coordination context, not a requirement of the grammar.

**Learning is what the loop does, not an element in it.** A coordination loop that does not update its intents, commitments, or evidence-criteria as the world changes is not "not learning" — it is dysfunctional. Learning is the meta-property of a healthy loop, not a separable primitive. Canon references to "learning revises" describe how the primitive loop adapts in response to evidence-commitment mismatch.

**Phase-dependence.** In discovery and complex-coordination phases, the full primitive loop (intent → commitment → evidence → signal → reshape-intent) is load-bearing. In maintenance-mode and routine-operation contexts where commitment terms are stable, the loop compresses to commitment → evidence, with new intents surfaced only when evidence shows divergence. The salience of each primitive varies by coordination phase; the primitive status does not.

**Scale instantiation.** Each coordination verb is realized at every scale Spore has reached. Coordination enters when multiple agents' loops overlap and need to interoperate across holon membranes and field substrate. Economic coordination under discovery cannot rely on wage or transaction grammar because those forms depend on specifiability, containment, and measurability assumptions that discovery structurally violates; under such conditions, governance structure rather than contract terms becomes the necessary basis for coordination. Participation in commitment-based coordination requires standing — security, capability, and membership conditions without which formal participation rights are structurally empty.

## Three-layer coordination stack (reproduction / production / governance)

Per `spore.connection.p2p-wiki-pass-2-capstone-synthesis` §2.3, complete commons-coordination infrastructure requires three layers:

- **Reproduction** — care, provisioning, territorial stewardship
- **Production** — associational / platform / cooperative structure, semantic flow
- **Governance** — Ostrom design principles, commons law, bioregional scope

Absence of any layer invites a specific failure mode:

- Governance without reproduction → workforce burnout
- Governance without production → rules without flows
- Production without governance → platform capture
- Law without governance → enclosure via regulation
- Reproduction without production → commoning without scale

**Spore operates across all three layers through the `federation-protocol`**:

- Federation agreements carry **governance-layer** clauses (polycentric-governance, Ostrom DPs, commons-law scaffolding, bioregional-scope outer boundary).
- Federated instances carry **production-layer** clauses (platform-cooperativism / open-cooperativism structure, cosmo-local subsidiarity, REA-compatible semantics).
- Instance operations carry **reproduction-layer** clauses (visible reproductive labour, no invisibilisation, commons-as-verb).

This is a canon-writing discipline, not a canon-composition rule: primitives whose absence at a given layer has historically invited a specific failure mode must specify what replaces that layer's work if not itself present. Reproduction-layer substantive content lives in [spore:ADR-0002-reproduction-primacy](research/canon-decisions/0002-reproduction-primacy.md) (`term.field` re-motivated as reproductive apparatus; `relational-agency-and-holons` re-motivated with commons-as-verb); the cross-cutting boundary-making discipline that applies at each layer lives in [spore:ADR-0003-boundary-theory-unifier](research/canon-decisions/0003-boundary-theory-unifier.md) (`term.field` lexicon + `federation-protocol` openwashing discipline); this stack framing lives in [spore:ADR-0004-three-layer-coordination-stack](research/canon-decisions/0004-three-layer-coordination-stack.md) and the shared [canon-framing note](research/connections/canon-framing-three-layer-coordination-stack.md). The three-layer stack is the architectural frame; reproduction-primacy is the reproduction-layer content; boundary-making is the cross-cutting apparatus at each layer. All three are canon; none subsumes the others.

## Dual Representation

Constitutional artifacts (visions, agreements, roadmaps, declarations) have two representations:

- **Narrative form** for humans — text as constitutional statement
- **Graph projection** for machines — queryable, composable, diffable, groundable within a node or through selectively materialized views

These projections are conceptual views over one coordination ecology, not a requirement that every node participate in a single continuously live global query surface. Queryability is local-first; federation determines what gets exchanged, mirrored, or materialized under explicit permissions.

**Three primary graph projections** operate at foundation-level — each has independent schema, materialization in a running-system implementation, query pattern, and non-join use case (ADR-0058 earning-test per Phase 1 §C-11):

- **Constitutional graph** — values, goals, principles, constraints, domains, and the relations between them. Materialized in Spore via the spec-DAG tooling (`ingest_spec_dag.py`) that parses frontmatter `depends_on` and extracts governance-memory structure.
- **Commitment graph** — actors, pools, offers, needs, attestations, fulfillment state. Materialized in BKC/Octo federation and Poietic Match via commitment-pool state storage with party-structure, attestation, and fulfillment-tracking.
- **Epistemic graph** (public-facing gloss: "knowledge graph") — entities, claims, evidence, provenance, sensor outputs. Materialized in the KOI substrate (`personal-koi` + `unified-search`): entity resolution, knowledge facts, bridge-note intake. Tracks not only what is known, but what counts as knowing.

**Five view-templates** are composable over the primaries rather than primary at foundation-level: **Roadmap DAG** (Constitutional-specialization ordering initiatives, milestones, and dependencies by sequence); **Intent hypergraph** (Commitment-pre-stage expressing multi-party offers, needs, and conditions as hyperedges before binding); **Event graph** (temporal projection over Commitment + Epistemic event streams); **Routing/flow graph** (Commitment-pool flows surfacing capacity-routing paths); **Discourse graph** (governance-revision layer over Constitutional + Epistemic — questions, proposals, arguments, objections, decisions; the self-reflective layer). Each is a legitimate useful view; none has an independent schema + materialization + non-join use case comparable to the three primaries. ADR-0058 supersedes-via-prose ADR-0036's primary-set (Constitutional / Roadmap DAG / Intent hypergraph) on earning-test grounds; ADR-0036's graph-structure-distinctness reading remains available as research-lens.

## Coordination Scales

Spore's coordination verbs — intent, commitment, joint-commitment, evidence, signal, reproduction — are instantiated across multiple scales Spore has reached, with scale-appropriate differences in formalization, party composition, attestation weight, and governance conditions. Reproduction at each scale takes scale-specific forms: personal-operator doc-DAG renewal and session-to-persistent-knowledge transition; pair-matching commitment-pool renewal and matcher-persona lifecycle; bioregional federation herring-cycle rotation, facilitator-succession, and protocol-version-upgrade. Joint-commitment at each scale takes scale-specific forms: personal-operator largely individual-scale (joint-commitment enters at federation-interface boundaries); pair-matching match-durability as joint-commitment between matcher and matchee; bioregional federation council-decisions, stewardship-transfers, and cross-repo protocol-version-adoption as the clearest irreducibly-joint coordination case. Structural primitives (field, holon, membrane — with Holon's whole irreducible to aggregation of parts per ADR-0050) also appear at each scale, with the holon at scale N being a part of a larger holon or field at scale N+1. The following are illustrative rather than exhaustive; which scales a given federation-agent realises is a property of that federation-agent, not a requirement of the grammar.

1. **Personal** — sovereign agent memory, local tools, personal workflow
2. **Pair/Team** — shared context, handoffs, accumulated knowledge, collaborative governance
3. **Organizational** — governance DAGs, commitment pooling, project coordination
4. **Network** — federation between organizations, cross-project dependencies, routed commitments
5. **Planetary** — the interstitium: connective tissue between all scales, enabling coherence without central command

## How Adoption Works

**Design principle.** Adoption is additive rather than restructuring. A project composes whichever coordination surfaces match its coordination goals, and can stop at any point. Nothing in the list below is a prerequisite for anything else in the list.

**Available coordination surfaces** (each independently useful):

- **A sensor node** on your knowledge garden — your existing content becomes locally queryable by agents and selectively shareable across federation.
- **Edge permissions** — you declare what you share and with whom.
- **Profile declarations** — you state which patterns and protocols you implement.
- **Frontmatter on docs** — a side-effect of working with the governance-memory pattern, which tracks lifecycle state and dependencies across constitutional artifacts. Frontmatter is a convention, not a standalone surface — adding it is how a doc participates in governance-memory, not a separate adoption act.

These surfaces are independent. One can be adopted without the others.

**One typical path (recommendation, not requirement)**: add frontmatter to constitutional artifacts first (low cost, no infrastructure), then stand up a sensor node and declare edge permissions when cross-project queries become useful, then add profile declarations when implementing specific patterns. This sequence has worked for early adopters; it is not mandatory, and projects with different coordination goals will reasonably choose different orderings or subsets.

**Reversibility is a design intention, pending case-study validation.** Spore is designed for coexistence with legacy systems, not total rupture — a transitional membrane between inherited and emerging coordination substrates. Early full-stack adoptions (BKC / Octo) validate the composition story; partial-adoption reversibility has not yet been demonstrated through a case study, and the reversibility claim should be understood as a design goal rather than an operational guarantee.

## Common Core, Local Variation

Interoperability does not mean identical schemas.

**At the level of principles**, interoperation requires: disciplined exchange under explicit consent, transparent provenance, forkability as a feature rather than a failure mode, and preservation of local sovereignty. These principles are the constraints any interoperating federation must satisfy in some form.

**At the level of mechanisms**, Spore federations currently realise those principles through:

- Shared identifiers (RIDs)
- Shared envelope/event formats
- Shared provenance rules
- Declared profiles and capabilities ("I implement profile X version Y")
- Explicit translation mappings between local ontologies and shared concepts
- Clear consent and disclosure semantics

These are the mechanisms we've chosen for Spore's federation contexts. Smaller or higher-trust federations may realise the same principles through different mechanisms — for example, human translation instead of machine-readable mappings, implicit consent in dyadic exchanges, or simpler provenance for routine operations. A node should be able to say what it implements, what it exposes, how it maps to shared concepts, and what trust levels it accepts. This is cosmo-localism by another name: local sovereignty with shared principles, global coherence without global uniformity of either protocol details or mechanism choices. The commitment is to disciplined exchange and selective materialization under explicit permissions, not to any specific mechanism set.

## Learning Membrane

Spore also needs to learn from the wider ecosystem. Through a learning membrane, it can ingest outside works, translate them into bridge notes, comparative notes, and comparative claims, and selectively promote what proves useful into canon — without flattening difference. The membrane exercises the same operations (expose, translate, authorize, contest, revoke) that govern all boundary-crossing in the grammar.

The learning membrane operates within a wider [field](./foundations/lexicon/field.md). In Spore's terms, the shared field of commitments, the relational field of the epistemic graph, and the learning field of comparative intake are three projections of the same underlying structure. A knowledge garden is a cultivated region within that field; gardeners steward that region, and membranes govern what crosses between sovereignty boundaries and the shared surface.

The workflow is **comparative intake**: external frameworks, papers, repos, and protocols enter first as source-specific bridge notes with bilateral claims linking them to Spore concepts. Where several independent traditions converge on an enacted canon or foundation principle, a comparative note records the cross-source support picture — corroborated core, qualified background, and unresolved tensions — without participating in the disposition system. Bridge notes carry dispositions (no change, clarify existing term, candidate pattern, candidate protocol, candidate primitive, unresolved tension) that govern whether and how outside work influences Spore's grammar. LLMs and embeddings propose mappings; governance accepts, contests, revises, or rejects them. The durable records are the bridge notes, comparative notes, claims, and dispositions — not the inference that produced them.

## Naming Stack

- **Project**: Spore — a pattern that travels, lands in different contexts, and grows local implementations
- **Protocol family**: Agent Commons — the pattern language, protocols, and governance-memory pattern
- **Federation protocol**: Federation Protocol — rules for sovereign exchange across nodes. (The project name "Spore" and fungal aesthetic operate at the project-identity layer; the protocol name is kept plain.)
- **Architecture**: Holonic Network — dual-axis structure of containment and overlap

## Relationship to Existing Systems

- **KOI-net** (BlockScience): Current federation transport implementation. Spore patterns currently ride on KOI-net for inter-node exchange; the federation protocol defines transport invariants independent of any specific substrate. Sensor nodes provide world-state grounding.
- **AD4M / Coasys**: Shares sovereignty-first philosophy. Agent Commons patterns should be expressible as AD4M Languages. AD4M's Perspectives model is the right idea for sovereign agent memory.
- **Open Civics**: Sibling effort in civic protocol libraries. Agent Commons patterns could interoperate through shared sensor and profile models.
- **Sociocracy 3.0**: Reference model for consent-based governance. Concepts borrowed where useful — circles, domains, consent, drivers — but not adopted wholesale.

## Ecosystem

Spore defines reusable abstractions. It does not absorb its implementations. A Spore instance is any holon that implements some composition of the grammar's aspects — canon, node, agent, and site. See the [instance model](./foundations/spore-instance-model.md) for how these compose.

- **koi-processor / RegenAI** — node substrate (epistemic graph / public-facing knowledge graph, entity resolution, federation, sensors)
- **BKC / Octo** — operational instance family (BKC canon + 4 federated nodes + Octo agent + Quartz sites)
- **Regen Commons / Open Civics / Network Nations** — potential civic adoption surface

## Inspirations

**Foundational theoretical grounding** (operationally integrated — bridge notes, ADRs, canon language reflect these directly):

- Christopher Alexander (pattern languages; semilattice structure — a living system cannot be captured by a single clean hierarchy)
- Arthur Koestler (holons — entities that are simultaneously whole and part)
- Elinor Ostrom (commons governance)
- Will Ruddick (commitment economies, federated pools, geodesic trust topology)
- Indy Johar (relational agency, collective agency, field architecture — "invest not in independence but in the infrastructures of interdependence"; his framing of agentic capacity helps clarify what Spore's grammar is *for*; his essay on linguistic closure names the failure mode the grammar is designed to prevent — abstraction becoming a "stopping rule" that terminates inquiry — and argues that human and machine agents contribute fundamentally different kinds of knowing to coordination ecologies)

**Comparative frameworks under exploration** (genealogical inspiration; formal operationalisation into Spore's grammar is future work rather than current canon):

- Karl Friston / Active Inference (free energy minimization as coordination principle)
- Michael Timothy Bennett / Stack Theory (persistence ordering derives normativity from change alone — offers one formal grounding for why living infrastructure should optimize for viable continuation, not convergence)

A bioregion is an appropriate outer-boundary for nested governance — a holon-in-formation whose material coherence (overlapping hydrology, species movement, indigenous jurisdiction, institutions, care) is well-grounded but whose operational composition into a unified federation agent is emerging work rather than a pre-existing natural fact. The grammar applies as a design frame: containment gives nested governance, overlap gives lateral reach across boundaries that ecological and social reality has already dissolved. Whether a given bioregion functions as a coherent holon (per the operational coherence criterion in the federation protocol) is an empirical question, tested through participation rather than declared in advance.

## Project Identifiers

The project name, doc namespace, and graph URI now align directly: `Spore`, `spore.*`, and `project:spore`.
