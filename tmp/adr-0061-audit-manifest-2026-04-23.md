# ADR-0061 Earning-Test Audit Manifest
Generated: 2026-04-23

## Source reads completed
- ADR-0047 (asymmetric-binding Layer 2) — full read
- ADR-0050 (joint-commitment primitive) — full read, including §"Relationship to ADR-0047" (lines 135-137, 215)
- ADR-0052 (reciprocity-trust derived-slug precedent) — full read
- canon-framing-derived-terms-reciprocity-trust.md — full read (three-mode composition articulation)
- docs/project-vision.md — lines 1-120 including joint-commitment bullet (line 57) + Power-across-primitives
- docs/synthesis/coordination-grammar.md — asymmetric-commitment references checked
- docs/foundations/federation-protocol.md — hub-and-spoke structure, Sovereignty Invariants lead-in
- IC intelligence-primitives.md — lines 104-130, memory stewardship asymmetry
- PM grammar.md — lines 81-110, CommitmentBundle semantics + pm:ADR-0014 cross-refs

IC HEAD read: f15f96f33d7384c9c169594a8525eb2a6599bd3b
PM HEAD read: 6d4935cf1e042475fb6a1ee007fea0ac0a567d8b

## Critical prior canon finding

ADR-0050 §"Relationship to ADR-0047 asymmetric-commitment" (lines 135-137, 215) explicitly:
> "the natural extension is **asymmetric-joint-commitment**: joint-commitments where parties bind disproportionately (e.g., land-treaty between state and indigenous nation; sacred-joint-commitment between ancestor-lineage and successor-lineage; federation-joint-commitment where larger peer sets more of the protocol-surface). This extension is not authored in ADR-0050 (future canon work if operational pressure surfaces); the compositional availability is noted as canon-implication."

The term appears 4× in Spore canon body already (project-vision.md:57, governance-artifacts.md:44, ADR-0050:137, ADR-0050:215). It is **named but not slugged** — a known composition awaiting operational pressure evaluation.

## Earning-test question framework (per ADR-0048 parsimony-as-earning-test-outcome)

Per plan §Approach, four questions per candidate:
1. Is it a genuine Gilbertian joint-commitment? (multi-party-simultaneous, not reducible to bilateral agreements)
2. Is there asymmetric-binding across participants per ADR-0047 Layer 2 criteria?
3. Is the composed pattern captured by ADR-0047 Layer 2 + ADR-0050 descriptions WITHOUT additional naming, OR does naming add expressive capacity?
4. Is there a protocol surface distinct from the union of asymmetric-binding + joint-commitment operations?

## Candidate evaluations

---

### Candidate 1: Federation hub-and-spoke protocol adoption

**Description:** A hub federation (larger, sets protocol-surface for compatibility) and multiple member-nodes form a joint-commitment to a shared protocol version. The hub commits to maintain backward-compatibility for all members; each member only commits to maintain compatibility with hub. This is asymmetric-binding across a joint-commitment (the whole federation adopts together — multi-party-simultaneous — but hub bears structurally greater obligations).

**Q1 — Genuine Gilbertian joint-commitment?**  
YES — protocol-version adoption is the paradigm case cited by ADR-0050: "Protocol-version compatibility is multi-party-simultaneous by construction — the whole federation adopts v-next, or the federation fragments." The joint-commitment is at the federation level, formed by open expression of readiness under common knowledge. Rescindable only by concurrence. PASS.

**Q2 — Asymmetric-binding present?**  
YES — hub commits to N-1 bilateral compatibility guarantees simultaneously; each member commits to 1 compatibility guarantee. The hub bears structurally greater obligations by construction (more parties to remain compatible with; more of the protocol-surface determined by hub's governance). This is asymmetric-vulnerability at the joint-commitment level (larger party carries disproportionate maintenance burden). PASS.

**Q3 — Does naming add expressive capacity beyond composition?**  
PARTIAL. The situation IS describable as: "a joint-commitment (ADR-0050) where the hub party also bears asymmetric-binding (ADR-0047 Layer 2)." Protocol authors can reference both ADRs. HOWEVER: the naming question is whether referencing two separate ADR layers without a composed-term forces readers to reconstruct the composition every time. The answer is: ADR-0050 already **names** the composition as `asymmetric-joint-commitment` in prose (line 57 of project-vision.md, lines 137/215 of ADR-0050). The term is already canon-legible; slugging it adds yaml vocabulary stability but the prose-naming already accomplishes the expressive capacity. NET: PARTIAL (names, but named already in prose; slug would stabilize vocabulary governance).

**Q4 — Distinct protocol surface?**  
NO. The operations are: form-joint-commitment (hub + all members express readiness); asymmetric-binding-terms-declared (hub records hub-bears-N-compatibility obligations vs member-bears-1); hold-accountable-via-demand-right. These are exactly the union of ADR-0050 operations + ADR-0047 Layer 2 asymmetric-binding terms applied at joint-commitment formation. There is no operation that the asymmetric-joint-commitment pattern requires that is not already in the union. FAIL (a).

**Evidence types (rubric: ≥2 for robust):**
- E-type-A (Spore instance-family): federation-protocol.md documents hub-and-spoke compatibility structures in power-capture mechanism 3 (gatekeeper-role accrual). The hub-and-spoke protocol-version adoption is an operational reality in Spore's federation design. PRESENT.
- E-type-B (≥2 independent citations): Gilbert provides the joint-commitment layer; Kittay/Folbre/Baier provide asymmetric-vulnerability theory. Both cited in ADR-0050 and ADR-0047 respectively. However, neither Gilbert nor Baier name "asymmetric-joint-commitment" as a distinct named phenomenon — they provide the components. PARTIAL (components cited, not the composition).
- E-type-C (bridge-note evidence): No bridge note specifically names asymmetric-joint-commitment as load-bearing claim. The federation-protocol.md section on hub-and-spoke is relevant but treats it under gatekeeper-role-accrual (ADR-0047 Layer 3), not as asymmetric-joint-commitment pattern. WEAK.
- E-type-D (Johar corpus): Johar's three-form framework (ADR-0048) names allocational power as the mode at play here; does not specifically surface asymmetric-joint-commitment as a distinct Johar-named phenomenon. ABSENT.

**Evidence count: E-type-A present + E-type-B partial = 1 robust-qualifying type + 1 partial. Does not meet ≥2 robust.**

**Classification: AMBIGUOUS** — the case is real and decomposable (no distinct protocol surface), but the composition is already named in canon prose. A slug would stabilize vocabulary without adding new expressive machinery.

---

### Candidate 2: BKC pool stewardship within commitment pools

**Description:** BKC stewardship involves two potentially distinct coordination acts: (a) pool-formation — multiple members jointly commit to forming a commitment pool (Gilbertian joint-commitment, symmetric or near-symmetric); (b) ongoing stewardship — specific stewards bear continuous obligations of pool maintenance, curation, and care that ordinary pool members do not bear. The plan's audit question: "Is pool-formation distinguishable from pool-stewardship? Pool-formation is Gilbertian joint-commitment (all parties simultaneous); stewardship is ongoing asymmetric commitment by specific parties. Are these one asymmetric-joint-commitment, or two distinct commitments?"

**Q1 — Genuine Gilbertian joint-commitment?**  
For pool-formation: YES — all members form the pool jointly; it is not a sum of bilateral membership commitments. Rescindable only by concurrence (leaving the pool requires process; pool cannot be dissolved by individual exit without affecting all).  
For stewardship: AMBIGUOUS — stewardship may be a separate asymmetric-commitment (steward → pool) rather than a continuation of the joint-commitment. The steward role is often assigned or accepted individually (additional asymmetric-binding layer), not formed jointly with all pool members simultaneously.

**Q2 — Asymmetric-binding present?**  
YES — stewards bear structurally greater ongoing obligations than ordinary pool members (curation, maintenance, escalation responsibilities). This is the classic asymmetric-vulnerability axis (Kittay nested dependencies; Folbre care-sector labor asymmetry applied to commons stewardship).

**Q3 — Does naming add expressive capacity?**  
PARTIAL-to-NO. The semantic analysis reveals that BKC pool stewardship is likely **two distinct coordination acts** not one asymmetric-joint-commitment:
1. Pool formation = joint-commitment (ADR-0050) — symmetric or near-symmetric
2. Stewardship = asymmetric-commitment (ADR-0047 Layer 2) — individual or assigned  
The composition of (1) + (2) describes the full structure; "asymmetric-joint-commitment" as a label risks collapsing two distinct acts into one name that obscures the temporal/compositional boundary between formation and stewardship. Naming here would REDUCE expressive precision, not increase it.

**Q4 — Distinct protocol surface?**  
NO. Pool-formation's protocol surface = ADR-0050 operations. Stewardship's protocol surface = ADR-0047 asymmetric-commitment operations. The composition is sequential, not fused.

**Evidence types:**
- E-type-A: BKC/Octo council decisions and stewardship documented in ADR-0050 §Consequences ("BKC/Octo council decisions and stewardship transfers now have joint-commitment vocabulary"). E-type-A PRESENT (though cited under joint-commitment, not asymmetric-joint-commitment).
- E-type-B: Ostrom (commons stewardship roles as asymmetric), Kittay (nested dependencies). PARTIAL.
- E-type-C: No bridge note names BKC stewardship as asymmetric-joint-commitment. ABSENT.
- E-type-D: Johar does not name this pattern. ABSENT.

**Evidence count: E-type-A partial (describes joint-commitment + stewardship separately, not as AJC) + E-type-B partial = 0 robust.**

**Classification: DECLINE-SUPPORTING** — the BKC case reveals the pattern is better analyzed as two distinct coordination acts (formation = joint-commitment; stewardship = asymmetric-commitment). Collapsing them into asymmetric-joint-commitment would obscure this distinction. The composition resolves into its components more faithfully than into a fused name.

---

### Candidate 3: Caregiver-care-receiver joint-commitment (elder-care arrangements)

**Description:** Elder-care arrangements where a family collectively forms a care commitment for an elder (all family members joint-commit to provide care) but the primary caregiver bears disproportionate ongoing labor. From ADR-0045 care-commoning lens.

**Q1 — Genuine Gilbertian joint-commitment?**  
PARTIAL. Family care-commitments can be Gilbertian (the family "commits together" to care for the elder; rescindable only by concurrence; demand-rights exist across family members). BUT: in most actual elder-care arrangements, this is a cluster of bilateral commitments + social norms, not a formal joint-commitment. The Gilbertian reading is applicable but not canonical for this domain.

**Q2 — Asymmetric-binding present?**  
YES — strong case. Primary caregiver bears disproportionate ongoing obligations (Kittay's nested dependencies: caregiver depends on third-party support to provide care; the care-receiver cannot reciprocate at equivalent scale). This is the paradigm Kittay asymmetric-vulnerability case.

**Q3 — Does naming add expressive capacity?**  
PARTIAL. The situation is articulated by ADR-0047 Layer 2 (asymmetric-commitment, caregiver → care-receiver) + care-commoning doctrine lens (ADR-0045). Whether the family-level arrangement is genuinely Gilbertian (Q1 = PARTIAL) affects whether ADR-0050 joint-commitment is even in play. If the family has formed a genuine joint-commitment, then asymmetric-joint-commitment names the composition; if the family members have made separate asymmetric-commitments, the composition is two ADR-0047 Layer 2 instances.

**Q4 — Distinct protocol surface?**  
NO. Same analysis as Candidate 1: operations are union of ADR-0050 + ADR-0047 Layer 2.

**Evidence types:**
- E-type-A: care-commoning doctrine (ADR-0045) operates in BKC + Octo contexts; elder-care arrangements not specifically documented as operational instances in Spore's instance-families. WEAK.
- E-type-B: Kittay (nested dependencies), Baier (asymmetric-vulnerability), Gilbert (joint-commitment) — all three cited in prior ADRs. PARTIAL (components present, composition not named by any tradition).
- E-type-C: Johar ecology-of-courage bridge note involves care-courage-presence but not specifically joint-commitment + asymmetry composition. ABSENT.
- E-type-D: Johar does not specifically name elder-care as asymmetric-joint-commitment. ABSENT.

**Evidence count: E-type-B partial = 0 robust.**

**Classification: AMBIGUOUS** — the case is plausible but the Gilbertian-joint-commitment qualification is not firmly established for informal care arrangements; the composition remains articulable as ADR-0047 + ADR-0045 without naming a composed slug.

---

### Candidate 4: Land-treaty (state-and-indigenous-nation)

**Description:** This is the paradigm case cited explicitly in project-vision.md line 57 and ADR-0050 lines 137/215: "land-treaty between state and indigenous nation." The state and indigenous nation form a joint-commitment (both parties must concur; the treaty is irreducibly-joint — not a sum of bilateral agreements), but the binding is asymmetric (the state typically retains capacity to modify, enforce, or violate the treaty through its legal machinery; the indigenous nation bears disproportionate vulnerability).

**Q1 — Genuine Gilbertian joint-commitment?**  
YES — treaties are archetypal joint-commitments: formed by open expression of consent under common knowledge, rescindable only by mutual agreement (though violations are common, the normative form is joint-commitment), producing directed obligations with standing to hold accountable. PASS.

**Q2 — Asymmetric-binding present?**  
YES — strong case. State retains sovereignty instruments (legal system, enforcement capacity, treaty-modification authority) that the indigenous nation does not reciprocally hold. Asymmetric-vulnerability at the joint-commitment level: the treaty is formally joint but the state party carries structurally different (greater) binding options in practice. PASS.

**Q3 — Does naming add expressive capacity?**  
SAME AS OTHER CANDIDATES: the situation IS describable as "joint-commitment (ADR-0050) + asymmetric-binding (ADR-0047 Layer 2)" — but this is already named "asymmetric-joint-commitment" IN CANON PROSE (ADR-0050:137 explicitly). The slug would stabilize the vocabulary without adding new expressive content beyond what prose naming already accomplishes.

**Q4 — Distinct protocol surface?**  
NO — same as other candidates. The treaty formation is form-joint-commitment; the asymmetric-binding is asymmetric-commitment terms declared at formation. Union of ADR-0050 + ADR-0047 Layer 2 operations covers the protocol surface fully.

**Evidence types:**
- E-type-A: ADR-0001 (pluriversal-incommensurability) and ADR-0050 (joint-commitment) both cite this case explicitly in Spore's canon. PRESENT but note: cited as an illustrative composition-instance, not as an operational Spore-instance-family running system.
- E-type-B: Gilbert (joint-commitment), Borrows (indigenous treaty law / five-sources-of-law), Baier (asymmetric-vulnerability). Three independent traditions. STRONG — this is the highest tradition-count of any candidate.
- E-type-C: ADR-0001 pluriversal-incommensurability bridge-note territory; Johar bridge notes cover authority-as-relational. PARTIAL.
- E-type-D: Johar's three-form framework (allocational power ≠ the full picture) is the broader frame; relational-spiritual authority (Borrows) is held under ADR-0001. PARTIAL.

**Evidence count: E-type-A present (illustrative, not operational running-system) + E-type-B strong (≥3 traditions) = meets ≥2 evidence types criterion. Borderline robust.**

**Classification: AMBIGUOUS** — the strongest tradition-count of any candidate, and explicitly named in canon prose. HOWEVER: Q3 answer is that the composition is already named in canon-body (ADR-0050 explicitly), and Q4 shows no distinct protocol surface. The case for slugging is: vocabulary stabilization + cross-repo reference convenience. The case against: it's already named, no new protocol surface, and the existing canon machinery fully expresses it.

---

### Candidate 5: IC memory stewardship (memory stewards vs. commons beneficiaries)

**Description:** From IC intelligence-primitives.md line 114: "Attribution labor, curation labor, and preservation labor in an intelligence commons are asymmetric-care-relations between memory stewards and commons beneficiaries." This is potentially an asymmetric-joint-commitment: memory stewards + commons beneficiaries jointly commit to a memory governance arrangement (IC memory commons), but memory stewards bear disproportionate ongoing labor obligations.

**Q1 — Genuine Gilbertian joint-commitment?**  
AMBIGUOUS. The memory governance arrangement involves multiple parties (stewards + beneficiaries), but the joint-commitment structure is implicit rather than explicit — there is no formal Gilbertian "open expression of readiness under common knowledge" ceremony described. The arrangement may be a cluster of asymmetric-commitments (steward-to-commons + beneficiary-to-commons) without a fused joint-commitment at the collective layer.

**Q2 — Asymmetric-binding present?**  
YES — strong case via Kittay nested dependencies applied to IC stewardship: memory stewards bear ongoing curation, attribution, preservation obligations that beneficiaries do not reciprocate at equivalent scale or nature.

**Q3 — Does naming add expressive capacity?**  
CONDITIONAL on Q1. If the IC memory governance is genuinely Gilbertian, the asymmetric-joint-commitment slug would name the composition. If it's not genuinely Gilbertian, the composition is just asymmetric-commitment (ADR-0047 Layer 2) at individual-steward level.

**Q4 — Distinct protocol surface?**  
NO (same as other candidates, conditional on Q1 passing).

**Evidence types:**
- E-type-A: IC memory-governance is an operational running system (IC intelligence-commons repo). PRESENT.
- E-type-B: Hess/Ostrom knowledge-commons framework (stewardship decomposition), Kittay (nested dependencies). PRESENT (2 traditions).
- E-type-C: IC intelligence-primitives.md line 114 is relevant bridge-note evidence. PRESENT.
- E-type-D: Johar does not specifically name this pattern. ABSENT.

**Evidence count: E-type-A + E-type-B + E-type-C = 3 types. BUT Q1 ambiguity is the blocking issue — if the IC governance structure is not genuinely Gilbertian, the composition does not meet the asymmetric-JOINT-commitment pattern at all; it's just asymmetric-commitment.**

**Classification: AMBIGUOUS** — strong evidence for asymmetric-care-labor aspect, but Q1 (genuine Gilbertian joint-commitment) is ambiguous for IC's implicit governance arrangements.

---

## Aggregate assessment

| Candidate | Q1 | Q2 | Q3 | Q4 | Classification |
|---|---|---|---|---|---|
| 1. Federation hub-and-spoke | PASS | PASS | PARTIAL | FAIL | AMBIGUOUS |
| 2. BKC pool stewardship | PARTIAL | PASS | PARTIAL-NO | FAIL | DECLINE-SUPPORTING |
| 3. Elder-care arrangement | PARTIAL | PASS | PARTIAL | FAIL | AMBIGUOUS |
| 4. Land-treaty (state/indigenous) | PASS | PASS | PARTIAL | FAIL | AMBIGUOUS |
| 5. IC memory stewardship | AMBIGUOUS | PASS | CONDITIONAL | FAIL | AMBIGUOUS |

**Across all candidates:**
- Q1 (Genuine Gilbertian): 2× PASS, 2× PARTIAL, 1× AMBIGUOUS — the Gilbertian reading applies most cleanly to federation-level and treaty-level cases; care/stewardship cases are ambiguous
- Q2 (Asymmetric-binding): 5× PASS — no candidate fails this question  
- Q3 (Naming needed): 5× PARTIAL or PARTIAL-NO — the composition is ALWAYS already nameable via the existing prose-canonical language "joint-commitment + asymmetric-binding" or directly as "asymmetric-joint-commitment" (already in canon body); NO candidate requires naming for expressive capacity beyond what's already there
- Q4 (Distinct protocol surface): 5× FAIL — NO candidate demonstrates a protocol surface that is not the union of ADR-0050 + ADR-0047 Layer 2 operations

**Classification counts:**
- ADMISSION-SUPPORTING: 0 robust cases (no candidate passes all 4 questions AND meets ≥2 E-types for a distinct composition needing a slug)
- AMBIGUOUS: 4 candidates
- DECLINE-SUPPORTING: 1 candidate (BKC pool stewardship reveals decomposability into two distinct acts)

**Applying plan rubric:**
- "≥2 robust admission-supporting cases → lean (a)": NOT MET
- "≥1 robust + ≥1 ambiguous → lean (e) park-with-triggers": NOT MET for robust admission-supporting
- "All candidates decomposable or ambiguous → lean (d) decline admission": APPLIES — 0 robust admission-supporting cases; all 4 ambiguous cases share the same pattern (Q3 shows naming doesn't add expressive capacity beyond existing canon-prose + Q4 shows no distinct protocol surface)

**Key semantic judgment on Q3:** The most honest assessment is that "asymmetric-joint-commitment" is already semantically present in Spore's canon body (3 explicit prose occurrences in ADR-0050 + 2 in canon foundations). The slug would add YAML vocabulary governance stability, not semantic expressive capacity. Per ADR-0048 parsimony-as-earning-test-outcome discipline: when the composition is already fully expressible (and already expressed) without the slug, and when no candidate demonstrates a distinct protocol surface, the slug fails the earning test for admission.

**Lean: Option (d) decline admission.** The composition is fully articulable by existing canon machinery — indeed, ADR-0050 already articulates it. The canonical record of the composition belongs in ADR-0061's §Consequences extending the existing canon-body prose reference. A framing-note extension (to ADR-0052's framing note OR as a new section in ADR-0061 §Consequences) is REQUIRED per plan default-lean (≥1 robust or ambiguous case surfaced — 4 ambiguous candidates warrant articulation) to document the three most canon-legible composition cases (federation-hub-and-spoke, land-treaty, IC-stewardship-if-Gilbertian) without admitting the slug.

**Framing-note extension recommendation:**
- EXTEND existing `canon-framing-derived-terms-reciprocity-trust.md` is NOT the right location (that note is about reciprocity/trust derived-term composition; asymmetric-joint-commitment is a different kind of entry — composition of two primitives, not derived-term admission)  
- INCLUDE articulation in ADR-0061 §Consequences body prose (the plan's AC-eligible location for audit provenance)
- Do NOT create a new dedicated framing-note (Option d + framing-note creates a framing-note for a composition that is already in canon prose; over-engineering for a decline outcome)
- Extension of the ADR-0052 framing note §"three-mode reciprocity composition" may add a footnote-level acknowledgment of the asymmetric-joint-commitment composition — the "Mode 4" that isn't a reciprocity-mode but is a composition-available-under-existing-canon. Decision: OPTIONAL per step-1 to operator.
