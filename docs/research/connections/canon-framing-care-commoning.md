---
doc_id: spore.connection.canon-framing-care-commoning
doc_kind: research
research_subkind: canon_framing
status: draft
decision_slug: care-cross-cutting-doctrine
affected_repos:
  - spore
related_adrs:
  - spore:ADR-0045-care-cross-cutting-doctrine
  - spore:ADR-0002-reproduction-primacy
  - spore:ADR-0003-boundary-theory-unifier
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
source_bridge_note: spore.connection.reproductive-commoning
concepts:
  - care-commoning
  - reproductive-commoning
  - boundary-commoning
  - commons-as-verb
---

# Canon Framing — Care Commoning (Phase 3b.1, Option F)

Shared framing for the Phase-3b.1 canon-rebuild decision admitting `care-commoning` as a third cross-cutting doctrine sibling to `reproductive-commoning` (ADR-0002) and `boundary-commoning` (ADR-0003), authored under the `canon-rebuild-phase-3b-1-care-primitive-disposition` plan. This note coordinates one ADR (`spore:ADR-0045-care-cross-cutting-doctrine`) and one frozen-vocab v2 alias-to-slug promotion. Spore-only scope; no IC/PM coordinated update required.

## 1. The insight in one paragraph

Care is **load-bearing in Spore's ecological program** but does not paraphrase into Spore's existing primitive grammar without losing structure that the care-ethics tradition treats as constitutive. Held distinguishes three senses of care (concrete labor + disposition/attitude + relational practice); Tronto names four phases (attentiveness as pre-commitment moral moment → responsibility → competence → responsiveness) plus a fifth caring-with for the democratic/solidaristic extension; Kittay frames dependency as species-typical (nested-dependencies); Federici/Folbre/Waring document the invisibilisation of reproductive labour as the historically prior power-capture mechanism. Spore's primitives are symmetric (Intent / Commitment / Evidence / Signal as the four coordination verbs); care is fundamentally asymmetric (caregiver → cared-for; attentiveness as pre-commitment moment). The corpus-foundational-review-v1 capstone §3 explicitly tested the move "asymmetric-Commitment subtype + attentive-Intent + asymmetric-evidence-flow" and judged it a paraphrase-test failure: it captures mechanical shape without honouring Tronto's four-phase asymmetry. Capstone §8 ranks Care Tier-1 priority #2: "Care / asymmetry of reciprocity is a structural hole, not an addition. Spore's ecological program is incoherent without care or an asymmetric sub-type of commitment." Phase 3b.1 closes this priority by admitting `care-commoning` as a doctrine on equal standing with reproduction-primacy and boundary-theory-unifier — preserving 7-primitive parsimony, honouring the capstone's "or as asymmetric sub-type of commitment" limb at doctrine-layer rather than primitive-layer, and promoting an existing frozen-vocab v2 alias to first-class slug status.

## 2. Scope decision and rationale

**Scope: Spore-only.** Doctrine-layer admission is internal-to-Spore vocabulary-promotion, not a primitive-grammar change. IC and PM do not require coordinated grammar-shape updates because:

- IC's existing reference to `reproductive-commoning` via the ADR-0002 coordinated set remains authoritative; care-commoning sibling-doctrine status does not contradict or extend any IC primitive.
- PM's `commitment-pooling` framing (Ruddick/Sarafu/tontines lineage) operates with symmetric-pairing semantics; care-commoning as Spore-side doctrine does not force PM to adopt asymmetric-pairing. PM authors may at any time choose to adopt the sibling-doctrine pattern in their own canon-decisions; that is an independent decision in their own session-atomic window.
- The Spore-only scope continues the Q5 discipline established in Phase 3 (ADR-0044): primitive-layer or grammar-shape changes coordinate across repos; doctrine-layer or vocabulary-layer changes can be Spore-internal without breaking cross-repo coherence.

Alternative scopes considered and rejected:

- **3-repo coordinated** (parallel to ADR-0002): rejected because care-commoning admission does not make substantive re-motivational claims about IC or PM canon. ADR-0002's 3-repo scope rested on capstone §2.1 "What it changes" prose making explicit IC/PM canon-primitive re-motivations; the care-commoning admission has no equivalent capstone language requiring IC/PM canon edits.
- **Spore + future-IC-or-PM-opt-in**: this is the implicit posture; explicit framing would be redundant.

## 3. Sibling-doctrine relation: three concerns, three doctrines

The cross-cutting-doctrine category now contains three load-bearing doctrines, each anchored to a different tradition-cluster and each addressing a distinct concern:

| Doctrine | Anchor ADR | Tradition-cluster | Primary concern |
|---|---|---|---|
| **reproductive-commoning** | ADR-0002 | Federici, Bhattacharya, Bresnihan, Dyer-Witheford, Gibson-Graham; Care Ethics-adjacent | Reproductive-labour invisibilisation as first-order power-capture mechanism; reproduction as the substrate the other layers depend on |
| **boundary-commoning** | ADR-0003 | Ostrom (1A/1B double-boundary), Bollier-Helfrich (semi-permeable membrane), Cox revision, autopoiesis-adjacent | Boundary-making as ongoing practice (commoning-at-boundaries) rather than fixed enclosure; double-boundary discipline (social inclusion + ecological resource); filtering-membrane resistance to openwashing |
| **care-commoning** *(new)* | ADR-0045 | Held, Noddings, Gilligan, Tronto, Kittay; Care Ethics + Feminist Economics; partially Pluriversal (kinship-care) and Autopoiesis (Thompson's *Sorge*) | Care as asymmetric relational practice — three senses (labor + disposition + relation), four phases (Tronto), nested dependency (Kittay); attentiveness as pre-commitment moral moment; relational self-formation |

The three doctrines overlap structurally but are not redundant:

- **reproductive-commoning** and **care-commoning** share Federici-lineage critique territory (invisibilisation of care labour), but reproductive-commoning frames the *commoning of reproduction across time* (continuity, succession, intergenerational), while care-commoning frames the *asymmetric relational structure of any caring moment* (Tronto's phases at any scale, including instantaneous). Reproduction and care are sibling concerns, not subsumption. Phase 3b.4's expected Reproduction-as-field-property promotion can proceed without re-opening this ADR.
- **boundary-commoning** and **care-commoning** intersect at the membrane-and-care boundary: who is inside the care-circle vs. outside is itself a boundary-making practice. Tronto's *Moral Boundaries* explicitly engages this. The two doctrines remain separable because boundary-commoning operates as a substrate-discipline while care-commoning operates as a relational-discipline.
- **All three doctrines** apply as lenses across primitives — `commitment` reads differently under each lens, `evidence` reads differently under each lens, `field` reads differently under each lens. None subsumes the others.

## 4. Why doctrine-not-primitive (Option F over A/B/C/D/E)

The decision-brief at `tmp/canon-phase3b1-care-disposition-decision-brief-2026-04-22.md` enumerates six dispositions; Option F was selected. The reasoning, condensed:

- **Option A (Care as 8th primitive, new category)** — would have broken the 7-primitive parsimony Phase 3 (ADR-0044) just established. Expanding the primitive taxonomy with a new category (relational/dispositional) for an item that is already canon-level via ADR-0002 lens-treatment is over-engineering.
- **Option B (Care as asymmetric-Commitment subtype)** — capstone §3 explicitly tested this paraphrase and judged it failed: "Commitment + attention + asymmetric evidence-flow captures mechanical shape but not Tronto's four-phase asymmetry." Selecting B would have required either accepting capstone-rejected paraphrase or authoring a counter-argument the existing tradition does not support.
- **Option C (Care decomposed across primitives)** — would have reproduced the feminist-economics invisibilisation critique that ADR-0002 was authored to resist. Distributing care into asymmetric-Commitment + attentive-Intent + relational-Field-property + Evidence-attestation-weight hides care inside named-variants of other primitives; this is exactly Federici's primitive-accumulation thesis: *naturalising / de-valorising / invisibilising of reproductive labour* enables every subsequent capture mechanism to appear ideologically neutral.
- **Option D (preserve ADR-0002 lens + decline-with-acknowledgement)** — minimum-viable honest, but capstone §3 "most structurally important silence" language indicates lens-treatment alone is insufficient. Without a positive structural argument that ADR-0002's lens adequately honours Tronto, Option D would re-expose Spore to the feminist-economics critique while merely documenting that exposure.
- **Option E (Care as pattern-library entry)** — would have *demoted* Care from current canon-level status. Care is already named at canon-level in `relational-agency-and-holons.md` §"Commons as Verb: Care as Primary Coordinating Practice" via ADR-0002; pattern-library admission is downward motion.
- **Option F (Care as third cross-cutting doctrine)** — threads the needle: honours capstone §3 "**or** as asymmetric sub-type of commitment" limb at doctrine-layer (sub-type-of-coordination at lens-layer, not primitive-paraphrase); preserves 7-primitive parsimony; leverages existing `care-commoning` v2 alias for light vocab-governance load (alias-to-slug promotion, not new-slug admission); honours Johar synthesis 18S/0O at `care-courage-and-presence.md` (disposition: candidate primitive, promotion_status: defer) by promoting the deferred convergence to load-bearing doctrine status; preserves ADR-0002 + ADR-0003 unchanged.

## 5. Cross-Phase-3b implications (flagged, not decided)

This ADR explicitly does **not** decide the following Phase-3b items; they remain open and unshaped:

- **Phase 3b.2 (Norms/Protocols)** — sibling-doctrine pattern set as available precedent (additional cross-cutting doctrines can be admitted if evidence supports), but no policy declared on whether the doctrine-category is open-ended or capped.
- **Phase 3b.3 (Power/Authority)** — same pattern-precedent; no policy declared.
- **Phase 3b.4 (Reproduction-as-field-property promotion)** — care and reproduction remain cleanly separable concerns. Reproduction-as-field-property promotion can proceed without Care-interaction concerns.
- **Phase 3b.5 (Identity-as-holon-property naming)** — care touches identity (relational self per Held/Gilligan/Noddings; pluriversal kinship per ADR-0001). Phase 3b.5 may name Identity-as-holon-property compatible with care-commoning lens influencing identity-formation through Tronto's caring-with phase. No structural foreclosure.
- **Phase 3b.6 (Reciprocity)** — Care-asymmetric is now a doctrine; Reciprocity-default-symmetric can proceed with care-commoning as the asymmetric residue. The companion-Reciprocity-asymmetric ADR Option B would have triggered is **not triggered** by Option F.
- **Phase 3b.7 (glossary refinements bundle)** — orthogonal; unaffected.

## 6. Operational-earning summary

Care's operational-earning at canon-level was established by ADR-0002's four canon-body edits (`lexicon/field.md`, `relational-agency-and-holons.md`, `holonic-network-architecture.md`, `federation-protocol.md`). Option F adds zero new operational-earning requirement at canon-body level — the existing edits are sufficient. The Johar synthesis at `docs/research/synthesis/care-courage-and-presence.md` (18 supports / 0 opposes, disposition `candidate primitive`, promotion_status `defer`) provides operator-internal convergence consistent with promotion to doctrine status.

External instance-family operational-earning (BKC/Octo, PM, DW) is **partially-aspirational at this time**: BKC/Octo absent from current workstation at decision-brief authoring; PM frames care via symmetric-pairing (mutual-credit) lineage rather than asymmetric-care; DW is operator-infrastructure without care-shape. This is comparable to the Evidence primitive's Phase-4-sensor-governance-deferral status documented in ADR-0044. Doctrine-layer admission does not require full instance-family operational-earning at admission; it requires research-corpus + foundation-doc earning, both of which are present.

## 7. Re-open triggers

This ADR may be revisited if:

- Pass 3 of the corpus-review (or equivalent) surfaces persistent reader mis-reads of the doctrine-status (e.g., readers parsing `care-commoning` as redundant with `reproductive-commoning`).
- New traditions surface that materially shift the capstone §3 paraphrase-test evaluation (e.g., a tradition that successfully paraphrases Care into the existing primitive grammar would weaken the doctrine-layer-rather-than-primitive-layer choice).
- Operational-earning at instance-family level changes such that asymmetric-care structures become routinely expressed in BKC/Octo, PM, or DW canon — at which point primitive-promotion (Option A revival) could be re-evaluated.
- IC or PM authors choose to adopt the sibling-doctrine pattern in their own canon-decisions; coordination-of-doctrine-vocabulary across repos may benefit from a follow-on framing-note revision.
