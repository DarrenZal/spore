---
doc_id: spore.canon-decision.care-cross-cutting-doctrine
doc_kind: decision-record
status: draft
adr_number: "0045"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-3-care
  - spore.review.coherence-audit-2026-04-22:Phase-3b-deferral
r_claim_statement: |
  Capstone §3 Care verdict ("strong case for admitting — as primitive or as asymmetric sub-type of commitment; most structurally important silence given Spore's ecological program") and Tier-1 priority #2 ("Care / asymmetry of reciprocity is a structural hole, not an addition") together flag Care as the highest-priority Phase 3b deferral from ADR-0044. Six dispositions were enumerated in the Phase 3b.1 decision-brief (`tmp/canon-phase3b1-care-disposition-decision-brief-2026-04-22.md`); operator selected Option F: admit `care-commoning` as a third cross-cutting doctrine sibling to `reproductive-commoning` (ADR-0002) and `boundary-commoning` (ADR-0003). The selection threads the capstone's "or as asymmetric sub-type of commitment" limb (doctrine-layer subtype-without-primitive-elevation) without the paraphrase-test failure capstone §3 explicitly identified for asymmetric-Commitment-subtype (Option B) and without the invisibilisation pattern Option C would reproduce, while preserving the 7-primitive parsimony Phase 3 (ADR-0044) just landed. `care-commoning` is already a frozen-vocab v2 alias of `reproductive-commoning`; this ADR promotes the alias to a first-class slug with its own canonical_label, aliases, one_line_definition, primary_project. Care's status moves from "named practice in `relational-agency-and-holons.md` via ADR-0002" to "load-bearing cross-cutting doctrine with equal standing to reproduction-primacy and boundary-theory-unifier." The capstone §3 paraphrase-test does not apply: doctrine-layer treatment is orthogonal to primitive-paraphrase. ADR-0002 is preserved unchanged; ADR-0003 is preserved unchanged. Phase 3b.4 (Reproduction-as-field-property), 3b.5 (Identity), 3b.6 (Reciprocity) remain unshaped by this decision and proceed in subsequent sessions.
supported_by:
  - /Users/darrenzal/projects/spore/docs/research/corpus-review/research-care-ethics.md
  - /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0002-reproduction-primacy.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0003-boundary-theory-unifier.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md
  - /Users/darrenzal/projects/spore/docs/research/synthesis/care-courage-and-presence.md
  - /Users/darrenzal/projects/spore/tmp/canon-phase3b1-care-disposition-decision-brief-2026-04-22.md
authorized-by: "canon-rebuild-phase-3b-1 operator directive 2026-04-22 (Option F: care-commoning sibling to reproductive-commoning + boundary-commoning; alias-to-slug promotion authorized)"
queue_reference: "corpus-foundational-review-2026-04-21 capstone §3 Care verdict + capstone §8 Tier-1 priority #2 + Phase-3b deferral from ADR-0044 enumerated list"
affects_canon:
  - docs/project-vision.md
  - docs/research/concepts-p2p-wiki.yaml
related_adrs:
  - spore:ADR-0002-reproduction-primacy
  - spore:ADR-0003-boundary-theory-unifier
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0001-pluriversal-incommensurability
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-care-commoning.md
concepts:
  - care-commoning
  - reproductive-commoning
  - boundary-commoning
  - commons-as-verb
---

# ADR-0045 — Care as cross-cutting doctrine (care-commoning sibling to reproductive-commoning + boundary-commoning)

## Status

draft (authored 2026-04-22 under `canon-rebuild-phase-3b-1-care-primitive-disposition` plan, Option F)

## Context

The Phase 1 coherence-and-falsifiability audit (`tmp/canon-coherence-falsifiability-audit-2026-04-22.md`) and the corpus-foundational-review-v1 capstone (`docs/research/corpus-review/research-capstone.md`) both surfaced Care as a Phase 3b-deferred item. Phase 3 (ADR-0044) explicitly enumerated Care as the first item in the Phase 3b deferral list:

> "**Care** — capstone §3 'most structurally important silence'; admit as primitive OR asymmetric-commitment sub-type."
> — `docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md` §Consequences

The capstone §3 verdict opens: *"Strong case for admitting — as primitive or as asymmetric sub-type of commitment. Omitting care reproduces the feminist-economics critique aimed at Gilbert, Bratman, McCarthy, Beer. Most structurally important silence given Spore's ecological program."* The §3 paraphrase-test for the asymmetric-Commitment-subtype move *fails* explicitly: *"Commitment + attention + asymmetric evidence-flow captures mechanical shape but not Tronto's four-phase asymmetry. Spore's primitives are symmetric; care is not."* Capstone §8 ranks this Tier-1 priority #2: *"Care / asymmetry of reciprocity is a structural hole, not an addition. Spore's ecological program is incoherent without care or an asymmetric sub-type of commitment."*

Six disposition options were enumerated in the Phase 3b.1 decision-brief (`tmp/canon-phase3b1-care-disposition-decision-brief-2026-04-22.md`):

- **Option A** — Care as 8th primitive in a new category (rejected: breaks 7-primitive parsimony Phase 3 just established).
- **Option B** — Care as asymmetric-Commitment subtype (rejected: capstone §3 paraphrase-test explicitly fails this move).
- **Option C** — Care decomposed across multiple existing primitives (rejected: reproduces the feminist-economics invisibilisation critique that ADR-0002 was authored to resist).
- **Option D** — ADR-0002 lens preserved + decline-with-acknowledgement documented (judged honestly insufficient against capstone §3 "most structurally important silence" language).
- **Option E** — Care as pattern-library entry (rejected: demotes Care from current canon-level status in `relational-agency-and-holons.md` and `project-vision.md` three-layer stack).
- **Option F** — Care admitted as third cross-cutting doctrine, sibling to `reproductive-commoning` (ADR-0002) and `boundary-commoning` (ADR-0003).

Operator selected Option F (decision-brief §Decision log, 2026-04-22).

**Why Option F threads the needle**: Care is *already* canon-level via ADR-0002 — `relational-agency-and-holons.md` §"Commons as Verb: Care as Primary Coordinating Practice" asserts "the primary coordinating practice in a field is **care** — reproductive labour"; the three-layer coordination stack at `project-vision.md` L125 names care as reproduction-layer content; `pluriversal-commoning` slug already declares "primary coordinating practice is care, not governance." `care-commoning` is *already* a frozen-vocab v2 alias of `reproductive-commoning`. What Option F does is **promote** Care from named-practice-inside-one-foundation-doc to **first-class load-bearing cross-cutting doctrine on equal footing with reproduction-primacy and boundary-theory**, by promoting the existing `care-commoning` alias to a top-level slug and adding the doctrine-layer disposition to the Phase-3b gap-candidate line in `project-vision.md`. The 7-primitive roster is preserved unchanged. ADR-0002 is preserved unchanged on disk (per the ADR-0044→ADR-0032 supersession-by-prose precedent). ADR-0003 is preserved unchanged on disk.

**Operational-earning**: Care's operational-earning is already established by ADR-0002's four canon-body edits across `lexicon/field.md`, `relational-agency-and-holons.md`, `holonic-network-architecture.md`, and `federation-protocol.md`. Option F adds zero new operational-earning requirement. The Johar synthesis at `docs/research/synthesis/care-courage-and-presence.md` (18 supports / 0 opposes, disposition `candidate primitive`, promotion_status `defer`) provides operator-internal convergence evidence consistent with promotion to load-bearing doctrine status.

## Decision

**Edit — three-part bundle**:

### §1 Frozen-vocab v2 alias-to-slug promotion

In `docs/research/concepts-p2p-wiki.yaml`:

1. Remove `care-commoning` from `reproductive-commoning`'s `aliases:` list. Replacement aliases for `reproductive-commoning`: `[reproductive-labor-commons]` (single remaining alias).
2. Add new top-level slug entry `care-commoning` with the following structure:
   - `slug: care-commoning`
   - `canonical_label: Care Commoning`
   - `aliases: [care-as-coordinating-practice, asymmetric-care-relation]`
   - `one_line_definition`: a single line capturing Care's three-sense structure (Held: labor + disposition + relation), Tronto's four-phase process (attentiveness → responsibility → competence → responsiveness, plus caring-with), Kittay's nested-dependency, Federici's invisibilisation critique; sibling cross-cutting doctrine to `reproductive-commoning` (ADR-0002) and `boundary-commoning` (ADR-0003); doctrine-lens treatment, not primitive-elevation.
   - `primary_project: spore`

This is **alias-to-slug promotion**, not new-vocabulary admission. Operator-acked in decision-brief §Decision log.

### §2 project-vision.md Phase-3b gap-candidate line update

Edit `docs/project-vision.md` L46 (the gap-candidate handoff line that Phase 3 left for Phase 3b execution):

**Current**:
> "*Trust, reciprocity, identity, care, reproduction, norms, power/authority* — capstone-identified gap candidates deferred to Phase 3b for canon-level disposition; until that session lands, these operate as either cross-cutting doctrine (reproduction-commoning per ADR-0002, boundary-commoning per ADR-0003) or derived glossary residues."

**After this ADR**:
> "*Trust, reciprocity, identity, reproduction, norms, power/authority* — capstone-identified gap candidates deferred to Phase 3b.2–3b.7 for canon-level disposition; until those sessions land, these operate as either cross-cutting doctrine (reproduction-commoning per ADR-0002, boundary-commoning per ADR-0003, care-commoning per ADR-0045) or derived glossary residues."

The single edit removes "care" from the gap-candidate list and adds "care-commoning per ADR-0045" to the cross-cutting-doctrine enumeration. List-count and structure preserved.

### §3 New shared framing note

Create `docs/research/connections/canon-framing-care-commoning.md` modeled on `canon-framing-reproductive-commoning.md`. Sections:

1. **The insight in one paragraph** — Care as asymmetric relational primitive across Tronto's four phases; not paraphrase-able into Spore's symmetric primitive grammar; doctrine-layer admission preserves ecological-program coherence without primitive-count expansion.
2. **Scope decision and rationale** — Spore-only (no IC/PM coordinated update; doctrine-layer admission is internal vocabulary-promotion, no cross-repo grammar-shape change).
3. **Sibling-doctrine relation to reproductive-commoning and boundary-theory-unifier** — three doctrines, three concerns: reproduction-primacy (Federici/Bhattacharya invisibilisation critique), boundary-theory-unifier (Ostrom 1A/1B + Bollier-Helfrich semi-permeability), care-commoning (Held/Tronto/Kittay asymmetric relational substrate). All three operate as lenses across primitives; none subsumes the others.
4. **Why doctrine-not-primitive** — capstone §3 paraphrase-test failure analysis; 7-primitive parsimony preservation; operator-selected Option F over Options A/B/C/D/E.
5. **Cross-Phase-3b implications** — explicit statement that Phase 3b.4 (Reproduction-as-field-property), 3b.5 (Identity), 3b.6 (Reciprocity) decisions remain open and unshaped by this ADR; care-commoning doctrine status does not foreclose any of those decisions.

No edits to `docs/foundations/relational-agency-and-holons.md` are required: existing §"Commons As Verb: Care As Primary Coordinating Practice" prose now explicitly anchors `care-commoning` as a first-class slug rather than via the previous alias chain.

No edits to `docs/foundations/lexicon/field.md` or `docs/foundations/federation-protocol.md` are required: existing ADR-0002 edits already establish operational-earning at those surfaces; sibling-doctrine status does not require parallel edits.

## Consequences

### ADR-0002 relationship: preserved + companioned

ADR-0002 (`spore:ADR-0002-reproduction-primacy`) is **preserved** by this ADR. ADR-0002 remains authoritative on the `reproductive-commoning` doctrine; this ADR introduces the parallel `care-commoning` doctrine as sibling, on equal standing. ADR-0002's file is **NOT modified** by this ADR (per the ADR-0044→ADR-0032 supersession-by-prose precedent — the schema has no `extended_by` or `companioned_by` field; the relationship is documented via this prose narrative + `related_adrs: spore:ADR-0002-reproduction-primacy` entry). The four canon-body edits ADR-0002 made (`lexicon/field.md` "Field as Reproductive Apparatus"; `relational-agency-and-holons.md` "Commons as Verb: Care as Primary Coordinating Practice"; `holonic-network-architecture.md` "Associational Practice and the A–C–A' Circuit"; `federation-protocol.md` "Commoning Mechanism and Capture Mechanisms") remain in place unchanged. Reverse-traceability: grep against `related_adrs` for `spore:ADR-0002-reproduction-primacy`.

### ADR-0003 relationship: preserved + companioned

ADR-0003 (`spore:ADR-0003-boundary-theory-unifier`) is **preserved** by this ADR. The `boundary-commoning` doctrine remains its original treatment; `care-commoning` is now the third sibling. ADR-0003's file is NOT modified. Cross-ref via `related_adrs`.

### ADR-0044 relationship: extends Phase-3b deferral execution

ADR-0044 (`spore:ADR-0044-core-thesis-primitive-roster-alignment`) is **preserved**. The 7-primitive roster (Field, Holon, Membrane structural; Intent, Commitment, Evidence, Signal coordination-verbs) is unchanged. This ADR executes the first item of ADR-0044's Phase-3b deferral enumeration. The remaining Phase-3b items (Norms, Power, Reproduction, Identity, Reciprocity, Trust, glossary refinements) remain explicitly deferred to Phase 3b.2–3b.7.

### ADR-0001 (pluriversal-incommensurability) held-tension overlap

ADR-0001 (`spore:ADR-0001-pluriversal-incommensurability`) is held-as-tension. Care touches this tension because Pluriversal traditions treat care as constitutive of personhood (kinship ethics), and Care Ethics (Held/Tronto/Kittay) treats identity as relationally formed. This ADR does not resolve the pluriversal-incommensurability tension; the doctrine-layer admission is compatible with the held-tension status. Pluriversal kinship-care-personhood remains a residue that future Phase 3b.5 (Identity) work may elevate, narrow, or further hold-as-tension. No ADR-0001 modification.

### Paraphrase-test verdict (per AC5)

**Not triggered.** The capstone §3 paraphrase-test ("Commitment + attention + asymmetric evidence-flow captures mechanical shape but not Tronto's four-phase asymmetry") is a primitive-paraphrase test — it tests whether Spore's existing primitives can paraphrase-away Care's structure. Doctrine-layer treatment does not paraphrase Care; it admits Care at a layer orthogonal to primitive-paraphrase, treating it as cross-cutting lens applied across primitives without dissolution into them. Care's three senses (Held: labor + disposition + relation), four phases (Tronto: attentiveness → responsibility → competence → responsiveness, plus caring-with), nested-dependency (Kittay), and invisibilisation-critique (Federici) are all preserved at doctrine-layer; primitive-layer paraphrase is not attempted. This contrasts directly with Option B (rejected) which would have triggered the paraphrase-test and failed it explicitly per capstone §3.

The capstone's "or as asymmetric sub-type of commitment" alternative is honored at doctrine-layer: care-commoning operates as a sub-type-of-coordination at the doctrine level, applied across commitment / intent / evidence / field / holon / membrane primitives via lens treatment, without forcing any primitive's definition to absorb asymmetric-care semantics.

### Cross-Phase-3b implications captured (per AC12)

This ADR explicitly flags (does not decide) the following cross-Phase-3b interactions:

- **Phase 3b.4 (Reproduction-as-field-property)**: Sibling-doctrine status with `reproductive-commoning` keeps Care and Reproduction cleanly separable. Phase 3b.4 can promote Reproduction to field-property without Care-interaction concerns; the two doctrines operate on overlapping but distinct concerns (reproduction as renewal/continuity-over-time; care as asymmetric relational practice in any moment). No re-opening of this ADR triggered.
- **Phase 3b.5 (Identity-as-holon-property)**: Care touches identity (relational self per Held/Gilligan/Noddings; pluriversal kinship per ADR-0001). Phase 3b.5 may name Identity as holon-property compatible with `care-commoning` doctrine influencing identity-formation across Tronto's caring-with phase. No structural foreclosure here.
- **Phase 3b.6 (Reciprocity)**: Care-asymmetric is now a doctrine. Phase 3b.6's expected disposition (Reciprocity admit-as-derived-paired-commitments with residue-flagging per capstone §3) can proceed with the symmetric default; Care's asymmetric structure is residue-flagged via `care-commoning` doctrine, not via Reciprocity-default-asymmetric. The companion-Reciprocity-asymmetric ADR that Option B would have forced is *not triggered* by Option F.
- **Phase 3b.2 (Norms/Protocols), 3b.3 (Power/Authority)**: Sets a replicable pattern for these decisions — additional cross-cutting doctrines can be admitted (e.g., `power-as-asymmetric-doctrine`, `protocol-stratification-doctrine`) without breaking primitive parsimony if evidence supports. This pattern-precedent is implicit in this ADR; explicit policy declaration (whether the doctrine-category is open-ended or capped at a specific count) is not made here. Future Phase 3b iterations may articulate that policy.
- **Phase 3b.7 (glossary refinements)**: orthogonal; unaffected.

### IC/PM propagation (per Q5 Spore-only discipline continued)

This ADR is Spore-only. IC and PM do not require coordinated grammar-shape updates because doctrine-layer admission is an internal-to-Spore vocabulary-promotion, not a primitive-grammar change. IC and PM's existing `reproductive-commoning` references via ADR-0002 coordinated set remain authoritative. If IC or PM authors choose to adopt the sibling-doctrine pattern in their own canon-decisions, those are independent decisions in their own session-atomic windows; this ADR does not require or trigger them.

### Operational-earning evidence summary (per AC §Operational-earning sub-section)

- **In-repo synthesis**: `docs/research/synthesis/care-courage-and-presence.md` at 18 supports / 0 opposes, disposition `candidate primitive`, promotion_status `defer`. Phase 3b.1 is the explicit window for that defer; Option F honors the convergence by promoting to doctrine status.
- **In-repo bridge notes**: `reproductive-commoning.md`, `4e-cognition-and-participatory-sense-making.md`, `gift-economy-and-ongoing-obligation.md`, `solidarity-economy-and-mutual-aid.md` all touch care-related content with cross-tradition support.
- **Existing canon-body anchoring**: `relational-agency-and-holons.md` §"Commons as Verb: Care as Primary Coordinating Practice" via ADR-0002 establishes operational-earning at canon-level. `project-vision.md` L125 three-layer stack names care as reproduction-layer content.
- **External instance-families**: BKC/Octo absent from current workstation (directory not present); PM (poietic-match) frames care via symmetric commitment-pooling lineage rather than asymmetric-care; DW (darren-workflow) operator-infra without care-shape. **Operational-earning at Spore's instance-family level is partially-aspirational at this time** — comparable to Evidence's Phase-4-sensor-governance-deferral status documented in ADR-0044. Doctrine-layer admission does not require full instance-family operational-earning; it requires research-corpus + foundation-doc earning, both of which are present.

### Cross-doc impact (tracked, no edits required by this ADR)

- `docs/foundations/lexicon/field.md` (ADR-0002 §"Field as Reproductive Apparatus") — no edit required; existing prose anchors both reproductive-commoning and (now) care-commoning doctrines through ADR-0002's lens.
- `docs/foundations/relational-agency-and-holons.md` (ADR-0002 §"Commons as Verb: Care as Primary Coordinating Practice") — no edit required; the heading already names "Care as Primary Coordinating Practice"; the `care-commoning` slug now formally anchors this section.
- `docs/foundations/holonic-network-architecture.md` (ADR-0002 §"Associational Practice and the A–C–A' Circuit") — no edit required; care content present via reproductive-commoning lens.
- `docs/foundations/federation-protocol.md` (ADR-0002 §"Commoning Mechanism and Capture Mechanisms") — no edit required.
- `docs/project-vision.md` L125 three-layer coordination stack — care already named; no edit required.

If future review surfaces persistent mis-reads of the doctrine-status (e.g., readers parsing `care-commoning` as redundant with `reproductive-commoning`), Phase 3b.4 or a subsequent canon-review round can revisit with explicit doctrine-distinction prose at the affected canon surfaces. Re-open trigger: same shape as ADR-0002's reframing-vs-renaming follow-on trigger.

### Downstream

- Phase 3b.2–3b.7 continue per ADR-0044's deferral enumeration; this ADR does not foreclose any.
- Future canon-review (v2 or later) may revisit Care's status if Pass 3 triggers fire (operational-earning at instance-family level changes; readers consistently mis-read doctrine-status; new traditions surface that materially shift the paraphrase-test evaluation).
- IC/PM coordinated update of doctrine-layer pattern is *available* but *not required* by this ADR.

## Evidence

- **cluster_key**: `docs/research/canon-decisions:care-disposition-phase-3b-1`
- **supports**: 6+ — capstone §3 Care verdict (Tier-1 priority #2 ranking); capstone §7 candidate-slug enumeration (`care-commitment` or `care`); ADR-0002 precedent for doctrine-lens treatment; ADR-0003 precedent for sibling-doctrine slot; Johar synthesis 18S/0O at `care-courage-and-presence.md` with disposition=candidate-primitive; frozen-vocab v2 existing `care-commoning` alias (`docs/research/concepts-p2p-wiki.yaml:158`).
- **opposes**: 0 (no prior audit or ADR opposed Care's elevation; capstone §3 itself motivates this ADR).
- **source**: corpus-foundational-review-v1 capstone §3 Care + §8 Tier-1 priority #2 (high confidence); ADR-0044 Phase 3b deferral list (high confidence); decision-brief operational-evidence sweep (medium-high confidence).
- **Supporting bridge notes** (cross-tradition support for care): `spore.connection.reproductive-commoning`, `spore.connection.4e-cognition-and-participatory-sense-making`, `spore.connection.gift-economy-and-ongoing-obligation`, `spore.connection.solidarity-economy-and-mutual-aid`, plus the care-courage-and-presence Johar synthesis.
- **Opposing bridge notes**: none surfaced. Capstone §3 alternative-readings (Option B paraphrase-failure; Option C invisibilisation) are not opposing-evidence-of-care; they are oppositions to *specific disposition options*, not to Care-as-doctrine-status.
- **Held-tension overlap (per Constraint 5c)**: checked 2026-04-22. ADR-0001 (pluriversal-incommensurability) concept overlap: Care touches the pluriversal kinship-identity strand. This ADR does NOT collapse the held-tension; it admits doctrine-status compatible with continued held-tension. ADR-0002's hold-as-companioned status remains intact.
- **Capstone-vs-DB drift check**: not applicable — the capstone §3 verdict is the source-of-truth for this disposition, not a cluster-count.
- **Adaptation note**: `r_claim_source` cites the capstone §3 entry directly using `capstone-section-3-care` notation (avoiding § character for validator safety) plus the Phase-3b deferral linkback. This continues the Phase 2/3 r_claim_source pattern.

## Diff summary

**ADR file**:
- `docs/research/canon-decisions/0045-care-cross-cutting-doctrine.md` — created (this file)

**Shared framing artifact**:
- `docs/research/connections/canon-framing-care-commoning.md` — created (parallel to `canon-framing-reproductive-commoning.md`)

**Frozen-vocab edit**:
- `docs/research/concepts-p2p-wiki.yaml` — `reproductive-commoning` aliases reduced to `[reproductive-labor-commons]` (removing `care-commoning`); new top-level slug `care-commoning` added with canonical_label, aliases, one_line_definition, primary_project.

**Canon-body edit**:
- `docs/project-vision.md` L46 — gap-candidate-line edit: remove "care" from the deferred list; add "care-commoning per ADR-0045" to the cross-cutting-doctrine enumeration.

**Historical references preserved** (unchanged): ADR-0002, ADR-0003, ADR-0044 files (companioned/extended via prose, not modified). Out-of-scope canon files not touched.

**Net**: 1 new ADR + 1 new shared framing note + 1 yaml alias-to-slug promotion + 1 canon-body line edit. No primitive count change. No primitive renames.
