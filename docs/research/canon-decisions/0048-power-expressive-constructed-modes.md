---
doc_id: spore.canon-decision.power-expressive-constructed-modes
doc_kind: decision-record
status: active
adr_number: "0048"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.connection.johar-power-cannot-be-allocated
  - spore.review.corpus-foundational-review-2026-04-21:capstone-section-3-power-authority
r_claim_statement: |
  Johar's three-form framework for power (allocational / expressive / constructed; "Power Cannot Be Allocated: Designing Organizations for a Complex World," 2026) identifies a structural gap in ADR-0047: the three-layer decomposition (authority-over-rule-levels + asymmetric-commitment + asymmetric-membrane) captures power's allocational modes exhaustively across the four structural modes capstone §3 named, but leaves expressive power ("life articulating meaning, desire, dissent") and constructed power ("situational agency emerging dynamically in response to what presents itself") structurally invisible. Johar's substitution-trap ("One can assign authority without generating comprehension. One can define responsibility without producing commitment.") lands directly on ADR-0047's allocational framing: pre-allocation of structural capacity does not generate either expressive or constructed capacity. Per operator directive 2026-04-22 (post Phase 3b.3 close-out), Spore canon integrates the full Johar three-form framework by admitting `expressive-power` and `constructed-power` as first-class modes-across-primitives — grammar-level phenomena operating as properties of existing primitives rather than as new primitive categories. Honest parsimony evaluation: expressive and constructed fail the primitive-earning test in project-vision.md (they do not have separable protocol surfaces with defined inputs/outputs/governance); they are qualities and dynamics of the existing coordination grammar. Modes-across-primitives is a first-class canon category distinct from primitives (operations/substrate) and cross-cutting doctrines (lenses): modes are grammatical properties of how primitives operate, not separate elements. Parsimony at 7 primitives is preserved not as axiom but as earning-test outcome. "Encounter" (federation events generating constructed capacity) flagged as legitimate future primitive-admission candidate requiring its own ADR, not bundled here. Rewilding thesis (Johar, "Power Is Rewilding," 2026 — institutional conditions of power losing alignment; power returning to the field) parked as Phase 3b.8 candidate pending maturation beyond speculation. Care as power-with infrastructure (Johar, "From Partnership to Power — And Back by Way of Care," 2026) acknowledged as deepening the ADR-0045 care-commoning doctrine; cross-reference prose only, no ADR-0045 modification.
supported_by:
  - /Users/darrenzal/projects/spore/docs/research/connections/johar-power-cannot-be-allocated.md
  - /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0045-care-cross-cutting-doctrine.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0047-power-multi-layer-decomposition.md
  - /Users/darrenzal/projects/spore/tmp/johar-power-framework-synthesis-2026-04-22.md
authorized-by: "canon-rebuild-phase-3b-3b operator directive 2026-04-22 (integrate Johar three-form framework; modes-across-primitives as first-class canon category; expressive-power + constructed-power + substitution-trap slugs)"
queue_reference: "post Phase 3b.3 Johar learning-membrane check; operator directive to fully integrate Johar-as-primary-inspiration"
affects_canon:
  - docs/project-vision.md
  - docs/foundations/constitutional-artifacts-and-graph-projections.md
  - docs/research/concepts-p2p-wiki.yaml
related_adrs:
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0045-care-cross-cutting-doctrine
  - spore:ADR-0047-power-multi-layer-decomposition
  - spore:ADR-0005-decentralization-myth-bundle
  - spore:ADR-0013-coordination-verb-scope
  - spore:ADR-0007-signal-primitive
concepts:
  - expressive-power
  - constructed-power
  - substitution-trap
  - allocational-power
  - power-capture
  - care-commoning
---

# ADR-0048 — Power Expressive + Constructed Modes (Johar Three-Form Integration)

## Status

active (authored + activated 2026-04-22 under `canon-rebuild-phase-3b-3b` extension of Phase 3b.3, Johar integration directive)

## Context

Phase 3b.3 landed ADR-0047 (power-multi-layer-decomposition, Option G.full) closing the capstone §3 Power/Authority verdict across four structural modes: (a) enumerated-powers-by-role, (b) asymmetric-vulnerability, (c) power-capture, (d) relational-spiritual authority. The three-layer decomposition — authority-over-rule-levels (Field) + asymmetric-commitment (Commitment) + asymmetric-membrane (Membrane) — is allocational-complete against capstone §3.

**But capstone §3 is not the whole of power.** Post-Phase-3b.3 learning-membrane check against Indy Johar's corpus (Johar is named as primary-inspiration in `docs/research/planning/johar-program-index.md`; `docs/research/connections/johar-*.md` × 20+ bridge notes) surfaced a richer three-form framework (`docs/research/connections/johar-power-cannot-be-allocated.md`, bridge-note for Johar's "Power Cannot Be Allocated: Designing Organizations for a Complex World," 2026):

- **Allocational power** — structural stability: roles, responsibilities, boundaries. *Stabilizes.*
- **Expressive power** — life articulating meaning, desire, perception, and dissent within the system. *Vitalizes.*
- **Constructed power** — situational agency emerging dynamically in response to what presents itself. *Adapts.*

Plus **four enabling conditions** (space, mission, resources, knowledge) and the **substitution trap**: *"One can assign authority without generating comprehension. One can define responsibility without producing commitment."*

ADR-0047's three layers are all allocational-shaped (pre-settable structural capacity distributed across participants/roles/boundaries). The Johar synthesis at `tmp/johar-power-framework-synthesis-2026-04-22.md` identifies three gaps:

1. **Expressive power** is structurally invisible. Canon commits to contestability (`project-vision.md` §Constitutional Commitments) but no grammar-level machinery names expressive capacity as a form of power distinct from allocational structure.
2. **Constructed power** has no explicit substrate. The verb-loop (Intent → Commitment → Evidence → Intent) may generate constructed capacity, but ADR-0047 does not name this.
3. **Rewilding thesis** (Johar, "Power Is Rewilding," 2026) — institutions losing containment capacity; power returning to the field as ambient/continuous/situational — is unaddressed. Meta-gap about whether the grammar is designed for a world where institutional power is weakening.

### The parsimony question

Before authoring this ADR, the primitive-earning test was applied to Johar-adjacent candidates:

- **"Voice" / "Articulation"** (for expressive power): fails test-(a). No protocol surface distinguishes voicing-a-dissent from declaring-an-intent; expressive capacity is a *mode* of Intent + Signal + Evidence, not a separate operation.
- **"Emergence" / "Improvisation"** (for constructed power): fails test-(a). Emergence is an *outcome* of verb-loop dynamics under incomplete information; not a separable operation with defined I/O.
- **"Encounter"** (federation events generating constructed capacity): plausibly passes both tests; flagged as future primitive-admission candidate deserving dedicated ADR. Not bundled here — evaluating Encounter properly requires its own analysis of federation-event surface, and the move would reopen ADR-0044's primitive-earning-test evaluation rather than proceeding via extension.
- **"Comprehension"** (for substitution-trap): fails test-(a). Comprehension emerges from Evidence + Signal + Intent integration; quality of the loop, not an operation within it.

**Parsimony at 7 primitives is not an axiom. It is a judgment outcome of applying the earning-test honestly.** If a candidate passes both test-(a) and test-(b), the roster extends. The three Johar forms do not demand primitive-level admission; they demand mode-level articulation.

### Modes-across-primitives as canon category

Prior to this ADR, Spore canon recognized three category-levels:
- **Primitives** — structural (field/holon/membrane) and coordination-verbs (intent/commitment/evidence/signal): substrate + operations of the grammar.
- **Cross-cutting doctrines** — lenses applied across primitives (reproductive-commoning, boundary-commoning, care-commoning): dispositions-and-practices.
- **Patterns** — recurring forms in pattern-library (governance-memory pattern, etc.): mediating between containment and connection.

**Modes-across-primitives** is a fourth category this ADR makes explicit: *grammatical properties or dynamics of how primitives operate*, distinct from what primitives are. Power's allocational mode operates across Field + Commitment + Membrane asymmetry axes (ADR-0047). Power's expressive mode operates across Intent (plurality articulation) + Signal (dissent transmission) + Evidence (perception attestation). Power's constructed mode operates across verb-loop dynamics (pre-reaction, loop-fluency, situational improvisation).

Modes are distinct from:
- Primitives (which are the substrate/operations themselves)
- Doctrines (which are lenses applied externally)
- Patterns (which are recurring compositions)

Modes are **qualities of primitive operation**: how the grammar behaves under stress, plurality, emergence. They are first-class canon objects because they shape what the primitives do without being separable from them.

## Decision

**edit.** Spore canon admits the full Johar three-form framework as grammar-level modes-across-primitives. Three concept slugs admitted: `expressive-power`, `constructed-power`, `substitution-trap`. Canon-body edits update Core Thesis (project-vision.md) and its parallel (constitutional-artifacts-and-graph-projections.md) to integrate the three-form framework. ADR-0047 remains unmodified on disk; ADR-0048 extends it via canon-body integration and prose cross-reference. Rewilding thesis parked as Phase 3b.8 candidate. "Encounter" primitive-admission parked as dedicated-ADR candidate.

**Canon integration points:**

1. **Intent bullet in Core Thesis**: extend to explicitly name **expressive power** — Intent is where plurality enters, and that plurality is not merely epistemic ("multiple perspectives on what's true") but expressive ("articulation of meaning, desire, dissent"). Intent carries expressive-power-at-primitive-level.

2. **Signal bullet in Core Thesis**: extend to explicitly name **pre-reaction** — Signal transmits perturbation before situations fully form; this is Johar's pre-reactive capacity at primitive-level. Signal is also the primitive surface through which dissent transmits (part of expressive-power's cross-primitive operation).

3. **"Power across primitives" synthesizing paragraph**: rewrite from allocational-only to three-form. Name allocational + expressive + constructed explicitly. Map each mode to existing primitives. Name the substitution-trap as canon-legible failure mode. Cross-reference Johar explicitly as primary-inspiration.

4. **Verb-loop paragraph in constitutional-artifacts-and-graph-projections.md** (§Coordination Ecology): extend to name **constructed-power-via-loop-fluency** — the verb-loop's metabolic rate (Johar's "feel → narrate → respond → learn → re-feel") is the dynamic substrate for constructed power. Loop-fluency generates situational agency.

5. **"What the primitives earn their place" section in project-vision.md**: add brief note on modes-across-primitives as a first-class canon category distinct from primitives, with the primitive-earning-test referenced as the gate that keeps primitives vs. modes distinguishable.

**Not modified on disk**: ADR-0047, ADR-0045, ADR-0044, ADR-0005. All relationships narrated in this ADR's prose + canon-body integration.

## Consequences

### Three Johar modes now canon-legible

- **Allocational mode**: three-layer decomposition (ADR-0047 Layer 1/2/3) covers the four capstone §3 structural modes (enumerated-powers, asymmetric-vulnerability, power-capture-via-ADR-0005-composition, relational-spiritual held under ADR-0001).
- **Expressive mode**: Intent-plurality-articulation + Signal-dissent-transmission + Evidence-perception-attestation. Substrate: coordination-verb affordances for meaning-making, not just information-routing.
- **Constructed mode**: verb-loop dynamics (Intent → Commitment → Evidence → Intent iteration) + Signal's pre-reactive propagation + holonic smallest-viable-locus-of-sensing-and-learning (Johar, "Mycelial Sovereignty," 2026). Substrate: loop-fluency as metabolic rate of agency.

### Substitution-trap as canon-legible failure mode

`substitution-trap` concept admits Johar's observation: *"One can assign authority without generating comprehension. One can define responsibility without producing commitment."* This is a named failure mode complementing ADR-0005's decentralization-myth bundle: where decentralization-theater fails by *appearing* to distribute power while concentrating it, the substitution-trap fails by *assigning* structural capacity (authority/responsibility) without generating the grammar-dynamics (comprehension/commitment) that would animate it. Canon edits invoking authority-distribution must consider whether allocational moves will substitute for (and thus preclude) expressive/constructed capacity.

### Modes-across-primitives as canon category

This ADR establishes modes-across-primitives as a first-class canon category. Future work may identify additional modes:
- **Care mode** (already named by ADR-0045 at doctrine-layer; may also have mode-layer expression across primitives — parking as potential future clarification)
- **Trust mode**, **Reciprocity mode** — deferred to Phase 3b.6; modes-vs-doctrines distinction available as evaluation criterion
- **Reproduction mode** — deferred to Phase 3b.4; may be mode-layer or Field-property per 3b.4 decision

### Cross-ADR relationships

- **ADR-0044 (core-thesis-primitive-roster)**: preserved. 7-primitive count intact. ADR-0048 clarifies that parsimony is earning-test outcome, not axiom. ADR-0048 extends ADR-0044's categorization schema by making modes-across-primitives explicit alongside primitives/doctrines/patterns. ADR-0044 file unchanged; extension is declarative, via this ADR's prose.
- **ADR-0045 (care-cross-cutting-doctrine)**: preserved. Care-commoning doctrine-lens complements expressive-power mode — care-commoning is the attending-to-asymmetric-care-relations lens; expressive-power is the articulation-of-meaning-desire-dissent mode. Johar's "power-with via care" framing ("From Partnership to Power — And Back by Way of Care," 2026) deepens ADR-0045 at prose level without modifying its structure.
- **ADR-0047 (power-multi-layer-decomposition)**: extended. ADR-0047 captures allocational mode exhaustively across capstone §3 four modes; ADR-0048 names expressive and constructed modes as mode-level complements. ADR-0047 file unchanged; integration via canon-body edits in both mirror documents.
- **ADR-0005 (decentralization-myth-bundle)**: extended via `substitution-trap` concept addition. ADR-0005 names three power-capture sub-critiques (decentralization-theater, digital-labor-as-free-gift, administrator-capture); `substitution-trap` is a fourth-shape critique-frame at allocational-vs-animating-capacity axis. No ADR-0005 file modification; composition via concept-level prose.
- **ADR-0013 (coordination-verb-scope)**: the Intent and Signal bullet extensions deepen coordination-verb-at-primitive-level expressive and pre-reactive affordances. No ADR-0013 modification; extension is mode-level articulation.
- **ADR-0007 (signal-primitive)**: pre-reaction as Signal property is consistent with ADR-0007's signal-transmits-perturbation framing; no ADR-0007 modification.

### Parsimony discipline explicit

This ADR makes visible what was implicit across Phase 3b.1/3b.2/3b.3: parsimony-at-7-primitives is the outcome of applying the primitive-earning test (project-vision.md §"What the primitives earn their place") honestly, not a fixed constraint. Future primitive-admission requires passing both test-(a) (protocol-surface-specification with I/O and governance) and test-(b) (operational implementations across Spore's actual instance families at identifiably different scales). "Encounter" (federation-event-generating-constructed-capacity) is flagged as legitimate future candidate for dedicated evaluation.

If a future candidate passes both tests, the roster extends. The number 7 is not load-bearing; the earning-test is.

### Phase 3b.8 parking (rewilding thesis)

Johar's "Power Is Rewilding" (2026) argues that four historically-dependent conditions (concentration of force, mediation of injustice, agreement production, shared legibility) are decoupling, returning power to the field as ambient/continuous/situational. ADR-0047 and ADR-0048 assume institutions can still hold power within structures. If the rewilding thesis matures beyond speculation (operational evidence of structural decomposition affecting Spore's instance families), Phase 3b.8 addresses it as a meta-gap about grammar design under institutional weakening. Not canonized now.

### Four enabling conditions (pattern-library candidate)

Johar's four enabling conditions (space, mission, resources, knowledge) are distributed properties the system must provide for constructed-power to be possible. They are not primitives (fail test-(a) — not separable operations), not doctrines (not lenses), and not modes (not properties of primitive operation — they are design criteria for field conditions). Pattern-library fit is plausible: `docs/patterns/enabling-conditions-for-constructed-power.md` could name the four conditions as design criteria for Spore's interface + federation-event design. Parked as pattern-library candidate pending design-pass work.

### Honest limit acknowledgment

This ADR names modes at grammar level. It does not *guarantee* that Spore's existing primitives sufficiently generate expressive/constructed power in practice. If operational evidence shows expressive/constructed modes being systematically collapsed into allocational framings (e.g., dissent reduced to opposition-signal-with-no-renegotiation-affordance; improvisation blocked by over-determined interface), a dedicated amendment ADR may be required. Naming the modes is necessary but not sufficient.

## Evidence

- **Primary R-claim source**: `spore.connection.johar-power-cannot-be-allocated` — bridge note for Johar's "Power Cannot Be Allocated" (2026) — three-form framework + four enabling conditions + substitution-trap. Johar is named as primary-inspiration; not comparative-intake from outside.
- **Secondary R-claim source**: `spore.review.corpus-foundational-review-2026-04-21:capstone-section-3-power-authority` — capstone §3 Power/Authority verdict shaped ADR-0047; ADR-0048 extends the response by integrating Johar's framework which operates beyond what capstone §3 enumerated.
- **Supporting synthesis**: `tmp/johar-power-framework-synthesis-2026-04-22.md` — post-ADR-0047 learning-membrane check against full Johar corpus identifying three gap areas.
- **Johar bridge-note corpus** (20+ notes in `docs/research/connections/johar-*.md`): Johar is primary-inspiration; his corpus has been metabolized through the learning-membrane across multiple Johar program phases (`docs/research/planning/johar-program-index.md`).
- **Johar article corpus**: `/Users/darrenzal/projects/IndyJoharContent/IndyJoharPosts/indy_johar_FULL_content.json` — full Johar substack + Dark Matter Labs content for ongoing reference.
- **Cluster-gate note**: this ADR is authored from operator directive (integrate Johar as primary-inspiration), not from review-process anchoring. R-claim source is bridge-note-level; no DB cluster gate applies. Operator directive is explicit and load-bearing.
- **Cross-ADR consistency**: 0044 preserved (extended declaratively); 0045 preserved (deepened prose-level); 0047 preserved (extended via canon-body mirror edits); 0005 preserved (extended via concept-addition); 0013 preserved; 0007 preserved.
- **Pluriversal held-tension (ADR-0001)**: ADR-0048's expressive-power mode is more amenable to Pluriversal framings than ADR-0047's Layer-1 Western-legal-frame adjacency. Expressive articulation across sacred/natural/deliberative/customary/positivistic sources (Borrows' five-sources-of-law) can be made canon-legible at mode-level without requiring ontological-plurality resolution. Partial thaw on ADR-0001 held-tension via expressive-mode accommodation; ontological-plurality held.

## Diff summary

- **New file**: `docs/research/canon-decisions/0048-power-expressive-constructed-modes.md` (this file).
- **Canon edits** (applied in active-commit):
  - `docs/project-vision.md`:
    - Intent bullet extended with expressive-power mode-reference (Johar three-form).
    - Signal bullet extended with pre-reaction + constructed-power mode-reference.
    - "Power across primitives" synthesizing paragraph rewritten from allocational-only to three-form (allocational + expressive + constructed) with Johar attribution.
    - "What the primitives earn their place" paragraph extended with brief acknowledgment of modes-across-primitives as fourth canon category (alongside primitives, doctrines, patterns).
    - L46 deferred-list entry extended to reference ADR-0048 completing Power articulation.
  - `docs/foundations/constitutional-artifacts-and-graph-projections.md`:
    - "Power across primitives" parallel paragraph rewritten for three-form framework.
    - §Coordination Ecology verb-loop paragraph extended with constructed-power-via-loop-fluency reference (Johar's metabolic-rate-of-agency framing).
  - `docs/research/concepts-p2p-wiki.yaml`: version bump v5 → v6; three new slugs — `expressive-power`, `constructed-power`, `substitution-trap`.
- **Unchanged on disk**: ADR-0047, ADR-0045, ADR-0044, ADR-0005, ADR-0013, ADR-0007, ADR-0001. All relationships narrated in ADR-0048 prose per operator directive.
- **Parking lot**: Phase 3b.8 candidate (rewilding thesis); pattern-library candidate (four enabling conditions as design criteria); dedicated-ADR candidate (Encounter as primitive-admission evaluation).
