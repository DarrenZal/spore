---
doc_id: spore.connection.canon-framing-derived-terms-reciprocity-trust
doc_kind: research
research_subkind: canon_framing
status: active
decision_slug: reciprocity-trust-glossary-with-framing
affected_repos:
  - spore
related_adrs:
  - spore:ADR-0052-reciprocity-trust-glossary-with-framing
  - spore:ADR-0001-pluriversal-incommensurability
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0045-care-cross-cutting-doctrine
  - spore:ADR-0047-power-multi-layer-decomposition
  - spore:ADR-0049-reproduction-continuity-primitive-admission
  - spore:ADR-0050-sociality-side-b-plus-primitive
  - spore:ADR-0051-relational-identity-holon-property
concepts:
  - reciprocity
  - trust
  - care-commoning
  - asymmetric-commitment
  - joint-commitment
  - relational-identity
  - pluriversal-commoning
---

# Canon Framing — Derived Terms: Reciprocity + Trust (Phase 3b.6, Option C)

Shared framing for the Phase-3b.6 canon-rebuild bundled decision admitting `reciprocity` and `trust` as derived glossary slugs (ADR-0052). Both terms earned single-limb derived-admission verdicts in the corpus-foundational-review capstone §3 with an explicit residue-flagging mandate. This note articulates how the derived-admissions compose with the Phase-3b-evolved primitive grammar (post-3b.1 through post-3b.5) and names the four residues the capstone required be flagged rather than silently routed-around.

## 1. The insight in one paragraph

**Reciprocity and trust are both adequately-captured-as-derived in Spore's primitive grammar, but each loses structure the corpus treats as constitutive; that structure is what the residue-flagging mandate preserves.** Reciprocity paraphrases as *paired-commitments with linked evidence* (adequate structurally per capstone); trust paraphrases as *commitment-willingness given accumulated evidence and signals* (partial per capstone). Both paraphrases were authored before Phase 3b landed — before Care-commoning doctrine (ADR-0045) named the care-ethical dimension, before asymmetric-commitment machinery (ADR-0047 Layer 2) gave asymmetry primitive-layer legibility, and before joint-commitment (ADR-0050) added a third mode beyond individual-symmetric-pair. Today's derived-admissions therefore compose over a three-mode reciprocity-pair structure (symmetric-dyadic / asymmetric-commitment-pair / joint-commitment-at-both-ends) and a trust-of-relationally-constituted-identity second-order dependency (ADR-0051) that the original paraphrase-test could not presuppose. Neither elevation (Option B/D) nor silent-deferral (Option E) honors the capstone; Option C's shared framing-note provides the durable canon-legible home for this compositional complexity without inflating the primitive/doctrine/mode/property object-class inventory.

## 2. Why bundled (one ADR for two terms)

Both capstone verdicts are single-shape: *admit-as-derived + flag-residues*. Their residues overlap at the care-asymmetric-vulnerability intersection (R-Rec-2 Noddings/Kittay and R-Tr-2 Baier both trace to Care Ethics' critique of symmetric-commitment/contract-trust reduction). They interact as a pair with ADR-0045 (care-commoning), ADR-0047 (asymmetric-commitment), ADR-0050 (joint-commitment), and ADR-0051 (relational-identity) — four of the Phase-3b-2026-04-22 decision-cluster. Bundling treats the two as one derived-admission-with-overlapping-residues question rather than two structurally-unrelated questions. Option-shape was held symmetric across the two terms (both glossary + both in framing-note); asymmetric Option B (reciprocity-property + trust-glossary) was rejected on bundle-discipline and scope-bleed grounds.

## 3. Reciprocity — three-mode composition

### 3.1 Mode 1: Symmetric-dyadic (the capstone-era default)

Two individually-authored Commitment primitives, each referencing the other, with symmetric obligation. Tradition anchors: REA/ValueFlows duality axiom (McCarthy 1982; reciprocal-commitments machinery); Axelrod Tit-for-Tat (ABM); Hardin "mutually reinforcing"; Distributed Systems bilateral-exactly-once. Paraphrase: `Commitment(A→B) + Commitment(B→A)` with `Evidence` linking each commitment to the other's completion.

Canonical home: existing Commitment primitive + existing Evidence primitive. No new machinery. Derived-slug `reciprocity` names the paired-structure; does not duplicate Commitment's role.

### 3.2 Mode 2: Asymmetric-commitment-pair (3b.3 extension)

Two Commitment primitives with structurally-asymmetric obligation: caregiver→cared-for with cared-for→caregiver counter-obligation at unequal weight. Tradition anchors: Care Ethics (Noddings engrossment-with-asymmetric-response; Kittay dependent-carer nested-dependencies; Folbre care-sector labor asymmetry); Feminist Economics (Federici reproductive-labor invisibilisation through symmetric-contract framing); Tronto four-phase asymmetry.

Canonical home: ADR-0047 Layer 2 asymmetric-commitment machinery provides the primitive-layer scaffolding; ADR-0045 care-commoning doctrine-lens provides the ethical-interpretive scaffolding. Derived-slug `reciprocity` references the pair-structure; asymmetric-reciprocity is NOT a distinct named subtype (operator-approved Option C default — no `asymmetric-reciprocity-pair` slug) because `asymmetric-commitment` already carries the primitive-machinery and admitting a reciprocity-sub-slug would pre-empt Phase 3b.7's Commitment-three-senses work.

### 3.3 Mode 3: Joint-commitment-at-both-ends (3b.5a extension)

Two joint-commitments (ADR-0050), each authored at the joint/collective-compositional layer, with obligations running between the joint-parties not individual parties. Tradition anchors: Philosophy of Collective Agency (Gilbert plural-subject "committing us" as irreducibly-joint); federation-protocol-version-adoption as the cleanest operational case (two federations agreeing where each federation's agreement is itself multi-party-simultaneous).

Canonical home: ADR-0050 joint-commitment primitive at both ends of the pair. Derived-slug `reciprocity` covers this mode compositionally without requiring machinery beyond what ADR-0050 already admits.

### 3.4 Why no named subtype for asymmetric-reciprocity

Two reasons per operator Option C default:
1. **Scope-bleed avoidance**: introducing `asymmetric-reciprocity-pair` as a slug would be Option-B-like elevation under an Option-C wrapper; the asymmetric-machinery already lives in ADR-0047 Layer 2, and layering a reciprocity-asymmetric-sub-slug atop would duplicate without adding expressive capacity.
2. **Phase 3b.7 preservation**: Commitment-three-senses glossary work (capstone §3 Commitment residue: McCarthy-classical vs Geerts-McCarthy-firmness vs Ševčík-contracted/completed) is 3b.7 scope. Any Commitment-bullet touching is reserved for that phase. The framing-note notes the composition without pre-empting.

## 4. Trust — post-3b.5 second-order interaction

### 4.1 Derived-admission core

Trust paraphrases (partially) as commitment-willingness-given-accumulated-evidence/signals. This captures rational-expectation (Hardin), engineering-displacement (Distributed Systems "trustlessness" as explicit denial of this), Apache earned-authority (Governance-Process; authority-to-commit accumulated via evidence-of-past-commitments), and Commons Governance Ostrom 1998 behavioral triad (trust as function of reciprocity + reputation). Canonical home: Commitment + Evidence + Signal primitives with optional accumulated-state composition over time (ADR-0049 reproduction-continuity scaffolds cross-episode accumulation).

### 4.2 Second-order dependency on ADR-0051

Since identity is a Holon whole-emergent-property (ADR-0051 relational-identity), *trust-of-whom* is trust-of-a-relationally-constituted-entity. This second-order dependency does not require elevating Trust beyond derived — the paraphrase still operates — but it does mean bridge-note authors referencing `trust` in relational-identity contexts should route through the relational-identity property-name, not a raw persistent-handle identity reading. The three non-relational identity-buckets (cryptographic / persistent-handle / authorship — see ADR-0051) each carry their own trust-reading, and those remain derivative of their respective Membrane / federation-protocol / Commitment-party-composition canonical homes.

Practical routing for bridge-note authors: `concept: trust` can be used alongside `concept: relational-identity` when the R-claim makes identity-constitution relevant; `concept: trust` alongside `concept: commitment` + `concept: evidence` when the R-claim stays at the commitment-willingness layer.

### 4.3 Why no elevation to primitive / property / doctrine / mode

Capstone-explicit counter-force: *"Engineering traditions route around trust; elevating it would force an unresolved agent-vs-field choice"* (§3 line 57). Trust Networks treat trust as agent-property; Care Ethics treats it as relational-stance; Commons as feedback-loop; Distributed Systems deletes it. Admitting trust at canon-body layer would force Spore to commit to one of these against the others without earning-test argument that meets parsimony-threshold. Option C keeps the choice open at the framing-note layer (both readings legible; neither forced) while giving bridge-note authors a slug to reference.

## 5. Four named residues

### 5.1 R-Rec-1 — Pluriversal ritual-with-non-human-kin reciprocity

**The residue:** *Ayni* (Andean reciprocity among humans, land, ancestors, and mountains-as-ancestors) and *kintu* (coca-leaf offerings as reciprocity-ritual with non-human kin) describe reciprocity relations where one "party" is not a signatory in any commitment semantics Spore can author. A mountain does not sign.

**Partial capture:**
- **ADR-0001 (pluriversal-incommensurability) held-tension cluster**: preserves the ontological-pluriversality of kinship-with-more-than-human without forcing the one-world-vs-many-worlds question to canonical-resolution. Operates in the same dual-operability pattern ADR-0051 established for pluriversal-kinship-identity: canon-posture frame (reciprocity-derived captures paired-structure among signatories) + held-tension frame (ADR-0001 preserves pluriversal ontological alternatives).
- **ADR-0045 (care-commoning) extension to more-than-human care-relations**: Plumwood's care-ethic for ecological personhood; De la Cadena's "earth-beings" as stakeholders in commoning-practice. Care-commoning doctrine-lens can attend to reciprocity-with-more-than-human without requiring the non-human-kin to meet Commitment primitive's signatory-semantics.

**Unresolved:** the ontological question of whether a mountain is a signatory. Residue explicit, unresolved, canonically-acknowledged. Not a gap in Spore; a flagged irreducible-from-some-traditions-view.

### 5.2 R-Rec-2 — Noddings/Kittay non-contractual mutuality

**The residue:** Noddings' *Caring* (1984) names reciprocity that operates entirely outside contracting — the cared-for's acknowledgment of the care completes the reciprocity-loop without any formal obligation-exchange. Kittay's *Love's Labor* (1999) extends: dependent-carer reciprocity is nested-dependencies (the carer depends on a third party for the conditions enabling care), not bilateral contracting.

**Partial capture:**
- **ADR-0045 (care-commoning doctrine-lens)**: care-commoning operates over this relational terrain; the doctrine-lens captures the ethical-relational dimension Care Ethics names as constitutive.
- **ADR-0047 Layer 2 asymmetric-commitment**: provides the primitive-machinery for the asymmetric-structural dimension (nested-dependencies; disproportionate-obligation-in-both-directions).

**Unresolved:** contracting-less reciprocity as ethical-interpretive-layer-only; Spore's primitive grammar does not force contracting but does require Commitment primitives for reciprocity-pair structures. Care-without-Commitment-primitive-instance operates at doctrine-lens layer without primitive-layer encoding. Flagged.

### 5.3 R-Tr-1 — Luhmann trust-as-choice-under-irreducible-uncertainty

**The residue:** Luhmann's *Trust and Power* (1979) frames trust as a functional-substitute for unattainable information — acting *despite* inadequate evidence, not *because* of adequate evidence. The whole point is operating under irreducible-uncertainty; trust that waits for sufficient evidence is not Luhmann-trust.

**Partial capture:** none directly. No canon machinery captures trust-as-choice-under-irreducible-uncertainty. Derived-Trust paraphrase (commitment-willingness-given-accumulated-evidence) is *opposite* shape — Luhmann-trust operates where accumulated-evidence is definitionally inadequate.

**Unresolved:** Luhmann-trust is irreducible-uncertainty residue. Capstone says this. Spore acknowledges. No resolution attempted. Flagged.

### 5.4 R-Tr-2 — Baier asymmetric-vulnerability

**The residue:** Baier's *Trust and Antitrust* (1986) reframes trust as "accepted vulnerability to another's possible ill will or incompetence" — fundamentally asymmetric: the trustor takes a risk the trustee does not structurally mirror. Kittay extends to dependent-care contexts: the dependent is asymmetrically vulnerable to the carer's will/competence in ways the carer is not to the dependent.

**Partial capture:**
- **ADR-0047 Layer 2 asymmetric-commitment**: provides primitive-machinery for asymmetric obligation-structure; asymmetric-commitment relations structurally involve trust's asymmetric-vulnerability dimension.
- **ADR-0045 care-commoning doctrine-lens**: interprets the ethical-relational-stance Baier names.
- **ADR-0051 relational-identity**: the relational-stance dimension of trust-as-vulnerability operates between Holons whose identity is relationally-constituted; Baier-trust is a stance *toward* a relationally-constituted-entity.

**Unresolved:** the full Baier-reframe (trust as ethical-category of accepted-vulnerability, not epistemic-category of accumulated-evidence) is not adopted at canon-body layer. Residue explicit. Flagged.

## 6. Cross-ADR interaction map

| ADR | Interaction with 0052 |
|---|---|
| **ADR-0001 (pluriversal-incommensurability)** | R-Rec-1 sits within ADR-0001's held-tension cluster; dual-operability pattern preserved |
| **ADR-0044 (primitive-roster)** | unchanged; 9-primitive roster preserved; no object-class change |
| **ADR-0045 (care-commoning doctrine)** | R-Rec-2 + R-Tr-2 partial-capture via doctrine-lens; three-way articulation (care-lens / reciprocity-derived / trust-derived) |
| **ADR-0047 (power-multi-layer-decomposition)** | Layer 2 asymmetric-commitment is mode-2 of reciprocity's three-mode composition; intersects R-Rec-2 + R-Tr-2 |
| **ADR-0049 (reproduction-continuity)** | orthogonal; no new intersection; care-reproduction three-way articulation extended conceptually (care-commoning captures reciprocity/trust residues without re-disposition) |
| **ADR-0050 (joint-commitment)** | mode-3 of reciprocity's three-mode composition; joint-commitment-at-both-ends case articulated here |
| **ADR-0051 (relational-identity)** | second-order dependency for trust-of-whom; routing discipline for bridge-note authors documented §4.2 |

## 7. Routing discipline for bridge-note authors

When to use `concept: reciprocity`:
- R-claim names paired-commitments-with-evidence structure (any of three modes).
- Aliases `reciprocity-pair`, `paired-commitment` accepted.
- For asymmetric-reciprocity, combine with `concept: asymmetric-commitment` (not a distinct reciprocity-sub-slug — see §3.4).
- For joint-reciprocity, combine with `concept: joint-commitment`.
- For Pluriversal ritual-reciprocity, combine with `concept: pluriversal-commoning` (R-Rec-1 flagged).
- For care-non-contractual-reciprocity, combine with `concept: care-commoning` (R-Rec-2 flagged).

When to use `concept: trust`:
- R-claim names commitment-willingness-given-accumulated-evidence/signals structure.
- Aliases `derived-trust`, `trust-as-willingness` accepted.
- For relational-identity trust contexts, combine with `concept: relational-identity`.
- For asymmetric-vulnerability Baier-frame, combine with `concept: asymmetric-commitment` (R-Tr-2 flagged).
- For Luhmann-uncertainty contexts, `concept: trust` + note in R-claim prose (R-Tr-1 flagged; no slug captures this residue).

When NOT to use:
- Do NOT mint new reciprocity/trust sub-slugs without operator-approved frozen-vocab extension (yaml is v10 frozen).
- Do NOT treat derived-admission as primitive-status; these are glossary-layer concepts.

## 8. Method-insights (for future canon-review)

1. **Residue-flagging as mandatory canon-layer practice** — when capstone verdicts explicitly require residue-flagging, the framing-note is a more substantive home than ADR §Consequences alone. 3b.6 establishes this as a reproducible pattern for future derived-admissions.
2. **Bundle-symmetric option-shape default** — when two capstone items share derived-admission verdict and overlapping residues, bundle-symmetric options (same option-shape both terms) should be preferred over asymmetric (different option-shape per term); asymmetric requires earning argument.
3. **Post-3b-cluster composition rechecking** — derived-admissions authored after Phase-3b cluster must recheck paraphrase-composition against current primitive grammar rather than the capstone-era grammar. 3b.4 introduced plan-vs-evidence discrepancy discipline; 3b.6 extends to paraphrase-composition re-verification.
4. **Scope-bleed discipline via framing-note pattern** — when a bundled ADR risks pre-empting adjacent phase work (here: 3b.7 Commitment-three-senses), framing-note layer can articulate compositional interactions without primitive-bullet touching. Preserves later-phase workspace intact.
5. **Agent-vs-field choice-deferral** — trust's capstone-flagged "unresolved agent-vs-field choice" (engineering vs care framings) is deferred at Option C by keeping both readings legible in the framing-note. This deferral is canonically-honest rather than silent-routing-around.

## 9. Non-goals

- No primitive admission. No doctrine admission. No mode admission. No property admission. Canon object-class inventory unchanged.
- No Commitment primitive-bullet touching (3b.7 scope preserved).
- No Holon primitive-bullet touching (3b.7 terminological-orphan work preserved).
- No IC/PM coordinated-update (Spore-only framing-note; IC/PM propagation deferred to post-Phase-3b bundle).
- No adjudication of Trust Networks vs Care Ethics vs Commons vs Distributed Systems trust-framings (capstone explicitly flagged these as unresolved; ADR-0052 preserves this).
- No adjudication of symmetric-dyadic vs asymmetric-commitment vs joint-commitment as "the canonical" reciprocity mode — all three are structurally supported.

## 10. References

- `docs/research/canon-decisions/0052-reciprocity-trust-glossary-with-framing.md` (this framing-note's ADR)
- `docs/research/canon-decisions/0045-care-cross-cutting-doctrine.md`
- `docs/research/canon-decisions/0047-power-multi-layer-decomposition.md`
- `docs/research/canon-decisions/0050-sociality-side-b-plus-primitive.md`
- `docs/research/canon-decisions/0051-relational-identity-holon-property.md`
- `docs/research/corpus-review/research-capstone.md` §1 reciprocity-split + §3 reciprocity row + §3 trust row + §7 frozen-vocab-candidates
- `docs/research/corpus-review/research-trust-reputation.md`
- `docs/research/corpus-review/research-care-ethics.md` (Noddings, Kittay, Tronto, Baier)
- `docs/research/corpus-review/research-pluriversal.md` (*ayni*, *kintu*, kinship-with-more-than-human)
- `docs/research/corpus-review/research-commons-governance.md` (Ostrom 1998 trust/reciprocity/reputation triad)
- `docs/research/concepts-p2p-wiki.yaml` v10 (reciprocity + trust slugs)
- `tmp/canon-phase3b6-reciprocity-trust-decision-brief-2026-04-22.md` (decision-brief preserved)
