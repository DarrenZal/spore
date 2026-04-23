---
doc_kind: decision-brief
status: draft
plan: ~/.claude/plans/canon-rebuild-phase-3b-6-reciprocity-trust-bundled-disposition.md
prepared: 2026-04-22
phase: canon-rebuild-phase-3b-6
baseline_head: e2751d74
---

# Phase 3b.6 Decision-Brief — Reciprocity + Trust (bundled)

## Summary

Phase 3b.6 addresses capstone §3 Tier-3 derived-level items for Reciprocity and Trust. Both verdicts are clean and non-controversial: capstone says *"admit as derived"* for each with a residue-flagging requirement. The question is **how** derived-admission is canonically represented — the gradient runs from light (glossary entries only) through medium (framing-note + glossary) to heavy (canon-body property on existing primitive). Bundling is warranted because both items share the derived-admission shape, their residues overlap at the care-asymmetric-vulnerability intersection, and they interact as a pair with ADRs 0045 / 0047 / 0050 / 0051.

This brief recommends **Option C** (both-as-glossary + framing-note with residue-flagging). Rationale: capstone-verbatim discipline for both terms; framing-note earns canon-legibility for the cross-ADR interactions that are already implicit across 3b.1–3b.5; avoids canonical-inflation at derived-level (Option D); avoids silent-routing-around of capstone mandate (Option E); preserves strict bundle-symmetry (Option B introduces asymmetric option-shape across the two terms which is harder to motivate given both are capstone-derived).

## Evidence synthesis

### Reciprocity (capstone §3 line 106)

> **Verdict**: *admit as derived (paired commitments); flag residues*. The symmetric-vs-asymmetric split surfaced in §1 means the "pair" structure reads differently in REA/Axelrod (duality) than in Care/Pluriversal (caregiver/cared-for, ritual offering to non-human kin). Adopting the asymmetric reading would change what "a commitment" *is*; this decision is deferred here and surfaced in §8.

**Tradition-coverage** (load-bearing): Commons Governance (Ostrom 1998 behavioral core); REA/ValueFlows (duality axiom decoupled from money; reciprocal-commitments machinery); Pluriversal (*ayni*, *kintu* — *the* core ritual primitive, per research-pluriversal); Trust Networks (Hardin "mutually reinforcing"); Agent-Based Modeling (Axelrod Tit-for-Tat); Care Ethics (Noddings non-contractual reciprocity); Distributed Systems (bilateral / exactly-once); Autopoiesis/4E (coordination-of-coordinations).

**Tradition-coverage** (weak/absent): Philosophy of Collective Agency (implicit in Bratman, never named); MARL (only emergent); VSM ("absent as named"); Category Theory; Canonical Layering; Governance-Process ("mostly absent — CLAs are one-directional"); Repo-Topology; Audience-Scoping; Structured Disagreement.

**Paraphrase test**: *adequate structurally* — paired-commitments-with-linked-evidence captures the symmetric REA/Axelrod reading. **Residues:**
- **R-Rec-1** Pluriversal ritual-with-non-human-kin reciprocity (*ayni* offering to mountain-as-ancestor; not reducible to paired agents because one "party" is not a signatory in Spore's commitment semantics).
- **R-Rec-2** Care non-contractual mutuality (Noddings: reciprocity-without-contracting, asymmetric caregiver/cared-for; Kittay dependent-carer asymmetric-vulnerability).

**Post-3b.1–5a context** (per plan-risk R4): ADRs 0045 (care-commoning), 0047 (asymmetric-commitment), 0050 (joint-commitment) have collectively shifted what "paired commitment" means in canon since the capstone was authored. "Paired commitments" now sits within a richer machinery: a reciprocity-pair can be symmetric-dyadic (REA) OR asymmetric-commitment-pair (ADR-0047 Layer 2) OR joint-commitment-at-both-ends (ADR-0050). The derived-admission must acknowledge this three-mode composition, which is cleanest via framing-note.

### Trust (capstone §3 line 57)

> **Verdict**: *admit as derived with glossary entry flagging residue*. Engineering traditions route around trust; elevating it would force an unresolved agent-vs-field choice.

**Tradition-coverage** (load-bearing): Trust Networks / Reputation Systems (definitional center — Luhmann, Hardin, Uslaner, Friedman-Resnick, Gambetta); Commons Governance (Ostrom 1998 triad: trust / reciprocity / reputation); Care Ethics / Feminist Economics (Kittay asymmetric-vulnerability; Baier critique of contract-trust reduction); Governance-Process Meta-Research (Apache "Earned Authority"; Linux signed-off-by).

**Tradition-coverage** (peripheral): Philosophy of Collective Agency (Baier-critiqued absence); VSM (imported late by Reyes).

**Tradition-coverage** (explicit negation): Distributed Systems Primitives ("trustlessness" as design goal).

**Tradition-coverage** (absent): MARL; Category Theory; ABM; REA/ValueFlows; Autopoiesis/4E; Pluriversal (trust implicit in ritual-reciprocity, not thematized); Canonical Layering (only security "trust boundary"); Structured Disagreement; Audience-Scoping; Repo-Topology.

**Paraphrase test**: *partial* — "commitment-willingness given accumulated evidence/signals" captures rational-expectation (Hardin) + engineering-displacement (Distributed Systems) + Apache earned-authority. **Residues:**
- **R-Tr-1** Luhmann trust-as-choice-under-irreducible-uncertainty (trust as a functional-substitute for information one cannot acquire; not reducible to accumulated-evidence because the whole point is acting *without* sufficient evidence).
- **R-Tr-2** Baier asymmetric-vulnerability (trust as "accepted vulnerability to another's possible ill will or incompetence"; Kittay extension to dependent-care contexts).

**Post-3b.1–5a context**: Trust-of-relationally-constituted-identity (ADR-0051) is a live concern — trust of whom, of what relational-constituted-entity? — but this is a second-order dependency, not a reason to elevate trust beyond derived.

## Bundle rationale

Both items are capstone-derived with required residue-flagging. Bundling preserves one-question-per-ADR discipline because the shared canonical question is *"how are both derived-terms represented at canon-layer?"* — a single-shape question with two instances. Bundle-symmetry (same option-shape for both) is the default; asymmetric options (B) require explicit earning argument.

Bundle discipline is **light** compared to prior Phase-3b bundles: Phase 3b.5a was a three-move comprehensive commitment (Side-B canonicalization + Holon irreducibility + joint-commitment primitive admission) across three canonical layers. Phase 3b.6 is two derived-admissions at the same canonical layer (glossary or framing-note). No cross-layer coordination burden.

## Options

### Option A — Both as glossary entries with residue-flagging (CAPSTONE-VERBATIM)

Admit `reciprocity` and `trust` as new slugs in `concepts-p2p-wiki.yaml` (v9 → v10) with `one_line_definition` entries that name the residues inline. No project-vision.md or foundations canon-body changes. Neither becomes primitive / doctrine / mode / property. ADR-0052 body is §Status + §Context + §Decision (two slugs admitted, both as derived) + §Consequences (residue-flagging + cross-ADR interactions summarized in ADR itself, not a separate framing-note) + §Evidence.

**Pros:**
- Lightest canon-surface; capstone-verbatim; smallest session-atomic window (likely sub-200s).
- Pure vocab-governance move — precedent from ADR-0045's `care-commoning` alias-to-slug promotion.
- Does not risk re-opening Commitment primitive.

**Cons:**
- All cross-ADR interaction documentation lives inside the ADR §Consequences — high information density; harder for future collaborators to find.
- Does not give the derived-terms a durable canon-legible home for the three-mode reciprocity composition (symmetric-pair / asymmetric-commitment / joint-commitment).

**Residue-flagging mechanism**: yaml `one_line_definition` for each slug + explicit flagging in ADR §Consequences. 4 named residues (R-Rec-1, R-Rec-2, R-Tr-1, R-Tr-2).

### Option B — Reciprocity as named-property on Commitment primitive; Trust as glossary (asymmetric)

Reciprocity is "paired commitments" per capstone — elevate to explicit named-property of Commitment (analogous to 3b.5's relational-identity-as-Holon-property). Trust remains glossary-only. project-vision.md Commitment bullet extended with reciprocity-sub-property clause; constitutional-artifacts parallel paragraph extended. Trust admitted as glossary slug only. `concepts-p2p-wiki.yaml` v9 → v11 (both slugs, reciprocity primary + trust primary).

**Pros:**
- Elevates Reciprocity to canon-body parallel to relational-identity (ADR-0051) precedent.
- Symmetric-reciprocity-on-Commitment has strongest tradition support (8 load-bearing).
- Commitment-three-senses residue (capstone §3 Commitment row, REA 40-year split) stays cleanly at Phase 3b.7 scope.

**Cons:**
- Breaks bundle-symmetry; requires operator-explicit rationale per AC13.
- Touches Commitment bullet (project-vision.md) — risks scope-bleed with Phase 3b.7 (Commitment-three-senses glossary is 3b.7 scope per AC12).
- Elevates beyond capstone verdict for Reciprocity (capstone says derived, not named-property).
- Does not solve Reciprocity's three-mode composition problem (symmetric vs asymmetric vs joint) at canon-body layer; those nuances still need somewhere to live.

**Residue-flagging mechanism**: yaml definitions + ADR §Consequences + Commitment-bullet prose. Adequate but distributed.

### Option C — Both as glossary + explicit framing-note (RECOMMENDED)

Option A + author `docs/research/connections/canon-framing-derived-terms-reciprocity-trust.md` as a shared framing-note (precedent: canon-framing notes from canon-review-v1). Framing-note articulates:
1. Post-3b.1–5a three-mode reciprocity composition (symmetric-dyadic / asymmetric-commitment-pair / joint-commitment-at-both-ends).
2. Trust-of-relationally-constituted-identity interaction with ADR-0051.
3. Residue-flagging narrative: why Pluriversal-ritual-reciprocity + Noddings-non-contractual + Luhmann-uncertainty + Baier-asymmetric-vulnerability cannot be collapsed into derived-admission and how each is partially captured elsewhere (care-commoning, asymmetric-commitment, ADR-0001 held-tension).
4. Cross-ADR interactions (0001, 0044, 0045, 0047, 0049, 0050, 0051) compactly enumerated.

ADR-0052 cross-references the framing-note. yaml v9 → v10 (both slugs admitted with short one-line definitions pointing at framing-note for depth).

**Pros:**
- Capstone-verbatim for both terms (no canonical-inflation).
- Framing-note is the right artifact for cross-ADR interaction narrative — does not clutter ADR §Consequences.
- Bundle-symmetric (both derived-admission, both in framing-note).
- Durable canon-legible home for the three-mode reciprocity composition that arises from 3b.1–5a evolution.
- Does NOT touch Commitment / Holon primitive bullets — zero risk of scope-bleed with 3b.7.
- Precedent: canon-review-v1 authored 7 framing notes for cross-ADR interaction concerns; framing-notes are a mature canon-infrastructure class.

**Cons:**
- Larger session-atomic surface than Option A (one extra file creation).
- Framing-note authoring is judgment-intensive — risk of over-articulation (tokenistic vs substantive residue-flagging).
- Framing-note at `docs/research/connections/` sits in the "research-provenance" layer per main-working-rules: acceptable because this one articulates canon-legible cross-ADR interactions, not new research findings, and follows canon-framing-* naming precedent.

**Residue-flagging mechanism**: yaml `one_line_definition` + framing-note §Residues section + ADR §Consequences cross-ref. Most substantive of the three capstone-verbatim options.

### Option D — Reciprocity as property on Commitment + Trust as property on Holon (symmetric elevation)

Both get canon-body homes beyond glossary. Reciprocity on Commitment (reciprocity-pair as paired-commitment structure); Trust on Holon (trust as relational-stance-between-holons, building on ADR-0051 relational-identity property). project-vision.md + constitutional-artifacts parallel both updated.

**Pros:**
- Symmetric elevation; strongest canon-legibility.
- Trust-on-Holon aligns with capstone's observation that trust is "agent property in Trust Networks; feedback-loop in Commons; relational in Care".

**Cons:**
- **Elevates beyond capstone verdict for both terms** — capstone explicitly says derived for both. Canonical-inflation at derived-level runs against 3b.3b's parsimony-as-outcome-not-axiom machinery.
- Risks re-opening the engineering-vs-care agent-vs-field choice the capstone flagged as "unresolved."
- Trust-on-Holon specifically displaces Distributed Systems' "trustlessness" stance from acknowledged-as-coexisting into canonical-overridden.
- Touches two primitive bullets — double scope-bleed risk with 3b.7.
- No earning-test argument meets parsimony-threshold at derived-level.

**Residue-flagging mechanism**: yaml + ADR + two primitive-bullet prose extensions. Distributed.

### Option E — Decline both; defer to Phase-4+

No ADR-0052 authored. Capstone §3 Reciprocity + Trust rows remain un-addressed. Defer to Phase 4 foundations-docs-authoring phase or later.

**Pros:**
- Minimal session-atomic cost (just a close-out memo).

**Cons:**
- Breaks Phase 3b pattern of addressing capstone §3 verdicts (Care 3b.1, Norms 3b.2, Power 3b.3, Reproduction 3b.4, Sociality 3b.5a, Identity 3b.5 all addressed).
- Leaves capstone residue-flagging mandate un-executed despite being the cheapest capstone-item to close.
- Fails AC pattern (Phase 3b had not yet skipped a capstone §3 Tier-1/Tier-2 item).

## Cross-ADR interactions (applies to all options A–E)

- **ADR-0001 pluriversal-incommensurability** — Pluriversal ayni-reciprocity + ritual-with-non-human-kin are pluriversal-irreducible per ADR-0001's held-tension cluster. Residue-flagging acknowledges. Option C framing-note explicitly maps this to ADR-0001.
- **ADR-0044 core-thesis-primitive-roster** — 9-primitive roster unchanged under all options A-C, E; Option D would change Holon semantics (add trust-as-property) without changing roster count.
- **ADR-0045 care-commoning** — Noddings non-contractual reciprocity + Kittay asymmetric-vulnerability are within care-commoning's scope per capstone §1 Convergence 2. Residue-flagging acknowledges that care-commoning (doctrine-lens) captures the relational-ethical dimension while Reciprocity-derived captures the paired-structure dimension; neither reduces to the other.
- **ADR-0047 power-multi-layer-decomposition** — asymmetric-commitment (Layer 2) captures Kittay/Folbre asymmetric-vulnerability at Commitment primitive layer. Reciprocity-asymmetric reading is operationally expressible as asymmetric-commitment-pair under ADR-0047's machinery (one party's commitment to another is asymmetric-obligation; reciprocity means the obligation runs in both directions at unequal weight). Framing-note (Option C) makes this explicit.
- **ADR-0049 reproduction-continuity** — care-reproduction gap-residue three-way articulation (reproductive-commoning / care-commoning / reproduction-continuity per ADR-0049 §Consequences) intersects the care-non-contractual-reciprocity residue. No new intersection introduced by 3b.6; residue-flagging acknowledges overlap without re-disposition.
- **ADR-0050 sociality-side-b-plus-primitive** — joint-commitment is the third mode of the three-mode reciprocity composition. Reciprocity's "paired commitments" derived-admission is compatible with joint-commitment at both ends; the pair-structure is preserved but the elements may be joint rather than individual.
- **ADR-0051 relational-identity-holon-property** — Trust-of-whom question: trust is a relational-stance between holons whose identity is itself relationally-constituted. Framing-note (Option C) notes this second-order dependency.

## Held-tension overlap (ADR-0001)

Pluriversal ayni-reciprocity and ritual-with-non-human-kin sit within ADR-0001's ontological-pluriversality held-tension cluster. 3b.6 does NOT attempt to resolve this tension — Pluriversal-ritual-reciprocity remains marked-as-irreducible under ADR-0001, partially captured via care-commoning + derived-reciprocity + asymmetric-commitment composition, with residue explicit.

Same pattern as ADR-0051's handling of Pluriversal kinship-identity: canon-posture frame (derived reciprocity captures the paired-structure) and held-tension frame (ADR-0001 preserves the pluriversal-ontology-irreducibility) operate compatibly without forcing single-ontology.

## Residue-flagging per option

| Residue | Option A | Option B | Option C (recommended) | Option D | Option E |
|---------|----------|----------|------------------------|----------|----------|
| R-Rec-1 Pluriversal ritual-with-non-human-kin | yaml + ADR § | yaml + ADR § | yaml + framing-note + ADR § | yaml + ADR § + primitive-bullet | — (unflagged) |
| R-Rec-2 Care non-contractual (Noddings/Kittay) | yaml + ADR § | yaml + ADR § | yaml + framing-note + ADR § | yaml + ADR § + primitive-bullet | — |
| R-Tr-1 Luhmann choice-under-uncertainty | yaml + ADR § | yaml + ADR § | yaml + framing-note + ADR § | yaml + ADR § + primitive-bullet | — |
| R-Tr-2 Baier asymmetric-vulnerability | yaml + ADR § | yaml + ADR § | yaml + framing-note + ADR § | yaml + ADR § + primitive-bullet | — |

Option C provides the most substantive, least-cluttered residue home.

## Recommendation

**Option C** (both-as-glossary + framing-note with residue-flagging).

Rationale:
1. Capstone-verbatim for both terms — preserves 3b.3b parsimony-as-outcome machinery (no canonical-inflation at derived-level without earning-test argument, and earning-test argument is absent for both: Trust has explicit "engineering traditions route around trust" counter-force; Reciprocity's 8-tradition support is adequate-structurally per paraphrase-test).
2. Framing-note is the right canon-infrastructure for the cross-ADR interaction narrative — 7 precedents from canon-review-v1.
3. Bundle-symmetric (Option A or C; B is asymmetric; D is symmetric-heavy-elevation; E declines both).
4. Zero risk of scope-bleed with Phase 3b.7 (no Commitment or Holon primitive bullet touching).
5. Framing-note provides durable canon-legible home for the post-3b.1–5a three-mode reciprocity composition that would otherwise be lost.
6. Smallest comprehensive option; estimated in-window span ~250-350s.

**If operator rejects Option C**: Option A is the next-lightest capstone-verbatim fallback (no framing-note; cross-ADR interactions inside ADR §Consequences).

## Decision log

| Date | Decision | By | Notes |
|------|----------|----|-------|
| 2026-04-22 | Draft prepared (this document) | agent | awaiting operator Step 2 gate |
| 2026-04-22 | — | — | — |

Operator directive (fill at Step 2): ____________________________________________

