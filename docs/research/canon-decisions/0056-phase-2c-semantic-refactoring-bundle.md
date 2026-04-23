---
doc_id: spore.canon-decision.phase-2c-semantic-refactoring-bundle
doc_kind: decision-record
status: active
adr_number: "0056"
opened-on: 2026-04-23
closed-on: 2026-04-23
decision: edit-plus-demote-lexicon-entry
r_claim_source:
  - spore.review.canon-coherence-falsifiability-audit-2026-04-22:reframe-3-a-zoom-invariance-deletion
  - spore.review.canon-coherence-falsifiability-audit-2026-04-22:reframe-3-b-intent-pressure-demotion
  - spore.review.canon-coherence-falsifiability-audit-2026-04-22:reframe-3-c-dynamical-vocabulary-audit
  - spore.review.canon-first-principles-audit-v2-2026-04-22:reframe-3-scope
  - spore.canon-decision.core-thesis-primitive-roster-alignment:self-similarity-deletion-parallel
  - spore.canon-decision.core-thesis-primitives-scope-conditioning:not-a-strict-recursion-clause
r_claim_statement: |
  Phase 1 coherence-and-falsifiability audit (`tmp/canon-coherence-falsifiability-audit-2026-04-22.md`
  line 2) enumerated three semantic refactoring items as "Reframe 3-a/b/c":
  (a) zoom-invariance deletion at `docs/foundations/constitutional-artifacts-and-graph-projections.md:103-111`
  (direct contradiction of ADR-0044's Self-Similarity-deletion from project-vision.md);
  (b) intent-pressure demotion from foundation-lexicon status (broader dynamical-
  vocabulary pattern; v2 first-principles audit verdict: "demote from canon,
  remove from lexicon/ OR retain as explicitly-bridge-note-status"); (c) dynamical-
  vocabulary audit stripping decorative "metabolic" metaphor while preserving
  Johar-cited loop-fluency references per ADR-0048. The three items share audit
  source and overlap canon-file touch-surfaces (constitutional-artifacts.md,
  project-vision.md, relational-agency-and-holons.md); bundling matches ADR-0053
  precedent and preserves session-atomic cadence. ADR-0056 is the first of 2–3
  Phase 2c plans (structural canon-body refactoring, different character from
  Phase 3b primitive/doctrine evaluations). Items 1+3 are semantic refactoring
  that adds no new canon categories; Item 2 is a foundation→research layer
  demotion with deferred canon-body ref cleanup (parking-lot entry for separate
  downstream-propagation ADR).
supersedes: []
companion-ADRs:
  - 0044  # Self-Similarity-deletion precedent from project-vision.md that Item 1 finally propagates to constitutional-artifacts.md
  - 0032  # "Not a strict recursion, but a recurring architectural motif" scope-conditioning language that Item 1 H6/H7 reword-and-rename align to
  - 0048  # Modes-across-primitives; loop-fluency "metabolic rate" usage Item 3 preserves verbatim
  - 0053  # Bundled-ADR precedent (5-item glossary refinements bundle)
  - 0041  # Text-authoritative representation; demotion of intent-pressure respects text-authoritative discipline by keeping concept content at research layer unchanged
concepts: []
phase: phase-2c-semantic-refactoring
---

# ADR-0056 — Phase 2c Semantic Refactoring Bundle (Zoom-Invariance Deletion + Intent-Pressure Demotion + Dynamical-Vocabulary Audit)

## Context

Phase 3b arc closed 2026-04-22 through ADR-0054 (rewilding-thesis-decline-with-triggers) at glossary-level for the 9-primitive roster, plus post-Phase-3b ADR-0055 (encounter-as-composition-framing-note). ADR-0056 is the first of 2–3 Phase 2c plans. Phase 2c is **structural canon-body refactoring** — different character from Phase 3b's primitive/doctrine evaluations.

Phase 1 coherence-and-falsifiability audit (`tmp/canon-coherence-falsifiability-audit-2026-04-22.md` line 2) enumerated three semantic refactoring items as "Reframe 3-a/b/c". The v2 first-principles audit (`tmp/canon-first-principles-audit-v2-2026-04-22.md` Reframe 3) scoped the dynamical-vocabulary pattern broader than intent-pressure alone. Items 1+2+3 share audit source and overlap canon-file touch-surfaces; bundling matches ADR-0053 precedent.

### The three items

**Item 1 — Zoom-invariance deletion.** `docs/foundations/constitutional-artifacts-and-graph-projections.md:103-111` has a "Node as Graph (Zoom Invariance)" section that explicitly invokes "self-similarity" language contradicting ADR-0044's Self-Similarity-deletion from project-vision.md. The Phase-3 Self-Similarity deletion was not fully propagated to the parallel constitutional-artifacts.md treatment. Item 1 closes this.

Additional downstream touch-points surfaced by Step 0.5 comprehensive vocabulary audit: `docs/foundations/relational-agency-and-holons.md:42` ("fractal scales") and `docs/foundations/holonic-network-architecture.md:73` ("## Fractal Scale Levels" section header) carry vestigial self-similarity framing where the body content already conforms to ADR-0032's scope-conditioning ("not a strict recursion, but a recurring architectural motif").

**Item 2 — Intent-pressure demotion.** `docs/foundations/lexicon/intent-pressure.md` still lives at foundation-lexicon status. The v2 audit verdict: "demote from canon (remove from lexicon/ OR retain as explicitly-bridge-note-status, not foundation). The dynamical-vocabulary pattern Opus-4-7 surfaced is a broader audit target." Operator-confirmed treatment: demote-to-bridge-note, preserving doc_id so the 5 research-layer `depends_on` (hyperstition, bennett-every-timeline, johar-word-not-thing, hyperstition-markets, sheaf-theory-synthesis) remain valid.

Intent-pressure is NOT in `docs/research/concepts-p2p-wiki.yaml` v12 (the post-3b.6 vocabulary-governance yaml), so no yaml bump is required.

**Item 3 — Dynamical-vocabulary audit.** "Metabolic" vocabulary appears in canon in two distinct usage patterns:

- **Load-bearing (preserve verbatim)**: Johar loop-fluency citations per ADR-0048 — e.g., `docs/project-vision.md:92` ("loop-fluency — the metabolic rate at which the verb-loop cycles"); `docs/foundations/constitutional-artifacts-and-graph-projections.md:69, 77` (same citation pattern, one naming *Mycelial Sovereignty* 2026 as source).
- **Decorative (audit target)**: `docs/project-vision.md:172` ("This is metabolic." — standalone); `docs/foundations/relational-agency-and-holons.md:95` ("The ecology is the metabolic cycle...") — Spore's interpretive sentences, not Johar-cited.

Scan confirmed zero canon-layer hits on adjacent dynamical vocabulary ("breathes", "pulse", "respir"); "metabolic" is the sole tell.

### Step 0.5 audit findings summary

Step 0.5 findings at `tmp/phase-2c-semantic-audit-findings.txt`. Decision-brief (per-instance recommendations + operator calls) at `tmp/canon-phase-2c-semantic-decision-brief-2026-04-22.md`. Operator-confirmed Option A (all three items bundled) plus per-instance calls confirming:

- Item 1: delete H1 header + H3 self-similarity sentence + H4 "apply recursively" paragraph; preserve H2 lead-in; rewrite H5 opening; reword H6 fractal-scales; rename H7 section header.
- Item 2: demote-to-bridge-note (git mv); defer canon-body ref cleanup to separate downstream-propagation ADR (parking-lot).
- Item 3: delete M4 "This is metabolic." sentence entirely; reword M5 "metabolic cycle" → "coordination cycle"; preserve M1/M2/M3 Johar-cited.

## Decision

**Execute all three semantic-refactoring items as a single bundled ADR-0056**, per operator Option A from `tmp/canon-phase-2c-semantic-decision-brief-2026-04-22.md`.

### Item 1 — Zoom-invariance deletion

1. `docs/foundations/constitutional-artifacts-and-graph-projections.md:103-111`: replace section with:

   ```
   ## Holon and Field at Adjacent Scales

   A node is often a coherent interface over an internal graph. From outside, a team is a point — one participant in a network. From inside, it is a graph of roles, commitments, intents, and evidence.

   That scale relation does not make `holon` and `field` synonymous. [body unchanged from original L111]
   ```

   Drops: section header "Node as Graph (Zoom Invariance)"; self-similarity sentence at L107; recursion-claim paragraph at L109 ("apply recursively"; "same structural logic"). Preserves: lead-in sentence at L105; scope-distinction body at L111 (with opening "zoom invariance" phrase replaced by "That scale relation").

2. `docs/foundations/relational-agency-and-holons.md:42`: reword from *"This is why the system must support fractal scales. The same structural questions recur at every level:"* to *"The system must operate across multiple scales of agency. Related structural questions arise at each:"*. Drops "fractal scales"; tempers "same...at every level" → "related...at each". Bullet list unchanged.

3. `docs/foundations/holonic-network-architecture.md:73`: rename section header *"## Fractal Scale Levels"* → *"## Scale Levels"*. Body unchanged (already carries ADR-0032 scope-conditioning at L75: *"not a strict recursion, but a recurring architectural motif with scale-appropriate forms"*).

### Item 2 — Intent-pressure demotion

1. `git mv docs/foundations/lexicon/intent-pressure.md docs/research/connections/intent-pressure.md`.
2. Flip frontmatter `doc_kind: foundation` → `doc_kind: connection` in the moved file.
3. Preserve `doc_id: spore.term.intent-pressure` (so 5 research-layer `depends_on` in hyperstition.md, bennett-every-timeline.md, johar-word-not-thing.md, stigmergy.md, sheaf-theory-synthesis.md remain valid).
4. Remove `docs/README.md:67` lexicon bullet for intent-pressure.
5. **DEFERRED**: Canon-body reference cleanup (7 locations: stigmergy.md body refs at L30/L81/L88, constitutional-artifacts.md:122 "latent intent-pressure", intent-publication-and-activation.md:44 "latent intent-pressure", civic-infrastructure-convergence.md:124 Vitality ref, hyperstition-as-coordination.md body refs) is deferred to a separate downstream-propagation ADR. Parking-lot entry added to Phase 2c queue.

**Rationale for demote-over-delete**: 5 research-layer bridge-notes (Bennett formalization, hyperstition, Johar word-not-thing, hyperstition-markets, Sheaf synthesis) use intent-pressure as a vocabulary anchor for their conceptual content. Deletion would break vocabulary continuity at the research layer unnecessarily. Demotion preserves research-layer legibility while removing the concept's foundation-layer load-bearing status.

### Item 3 — Dynamical-vocabulary decorative-usage strip

1. `docs/project-vision.md:172`: delete the sentence *"This is metabolic."* entirely. Surrounding sentences ("must oscillate between stabilizing, opening, routing, testing, revising"; "reveal and support living overlap") carry the architectural claim without the metaphor.

2. `docs/foundations/relational-agency-and-holons.md:95`: reword *"The ecology is the metabolic cycle through which collective agency develops"* → *"The ecology is the coordination cycle through which collective agency develops"*. Preserves structural claim; drops dynamical-metaphor. Surrounding Johar-framed paragraph (citing Johar's agentic-capacity list by name) unchanged.

3. Preserved verbatim (load-bearing Johar-cited loop-fluency per ADR-0048):
   - `docs/foundations/constitutional-artifacts-and-graph-projections.md:69` — "the loop's metabolic rate (Johar's 'feel → narrate → respond → learn → re-feel' loop-fluency framing)"
   - `docs/foundations/constitutional-artifacts-and-graph-projections.md:77` — "The metabolic rate at which the verb-loop cycles — Johar's 'feel → narrate → respond → learn → re-feel' (*Mycelial Sovereignty*, 2026)"
   - `docs/project-vision.md:92` — "loop-fluency — the metabolic rate at which the verb-loop cycles"

### Object-class inventory

**NO new primitives, doctrines, modes, properties, or derived glossary slugs admitted or withdrawn.** 9-primitive roster preserved. 4-category canon object-class inventory (primitives / cross-cutting doctrines / modes-across-primitives / properties-on-primitives) unchanged. 6 derived glossary slugs unchanged. Yaml v12 unchanged (intent-pressure not in yaml).

## Consequences

### Immediate

- ADR-0044's Self-Similarity-deletion finally propagates to constitutional-artifacts.md. Phase 3 canon-rebuild's structural-primitive stratification cleanup completes at the parallel-doc layer.
- "Fractal" vocabulary in canon drops to zero occurrences (scope-recurrence language preserved via ADR-0032's scope-conditioning phrase "not a strict recursion, but a recurring architectural motif with scale-appropriate forms" at holonic-network-architecture.md:75; already-approved).
- Intent-pressure concept relocates to research-layer bridge-note status. Foundation-lexicon directory loses one entry; `docs/foundations/lexicon/` now contains `field.md`, `linguistic-closure.md`, `stigmergy.md` (intent-pressure removed).
- Decorative dynamical-metaphor exits canon body; load-bearing Johar-cited usage preserved verbatim.

### Structural

- Parallel-sync discipline across project-vision.md and constitutional-artifacts.md continues (per Phase 3b.7 surfaced pattern: constitutional-artifacts.md was partially ahead on Signal/Commitment glossary; this ADR does not re-open that pattern but is consistent with it).
- Demote-over-delete disposition pattern canonized for concepts that retain research-layer vocabulary-anchor value while losing foundation-layer load-bearing status. This is a new move-pattern complementary to ADR-0052's derived-glossary-slug-plus-framing-note pattern.

### Deferred (parking-lot)

- **Canon-body intent-pressure reference cleanup** (7 locations). Recommended scope for a separate downstream-propagation ADR (which can bundle intent-pressure refs alongside broader 2c→downstream-docs sync from ADRs 0056–0058+).
- **Item 1 Additional touch-points not in this ADR's scope**: README.md sections mentioning fractal framing (if any — none surfaced in canon-layer scan but downstream docs should be checked in the propagation audit).

### Residues

- **R-Dyn-1 (dynamical-vocabulary coverage)**: This ADR scopes only canon-layer (`docs/foundations/`, `docs/project-vision.md`) "metabolic/breathes/pulse/respir" hits. Downstream-propagation audit (parking-lot) should extend scan to `docs/patterns/`, `docs/positioning/`, `docs/research/connections/` for remaining decorative hits (if any) — as informational, not canon-repair.
- **R-ZI-1 (zoom-invariance downstream)**: Scope-recurrence framing in downstream docs (synthesis notes, research notes) may still invoke "self-similarity" or "fractal" language; this ADR does not audit those. Scope-conditioning discipline (ADR-0032) should govern if those surface in subsequent reviews.
- **R-IP-1 (intent-pressure canon-body refs)**: Seven canon-body references to intent-pressure remain until the deferred downstream-propagation ADR. Interim readers encountering those references will resolve them via the moved bridge-note at `docs/research/connections/intent-pressure.md` (doc_id preserved). No validator breakage expected because the references are prose-level, not depends_on-level.
- **R-RA-1 (relational-agency.md:95 Johar-framing proximity)**: The "coordination cycle" reword sits inside a Johar-cited paragraph. The reword is strict decorative-vs-load-bearing per Step 0.5 classification (the "metabolic cycle" phrase itself is not a Johar quote), but operator-aware readers may reasonably prefer a fuller restructure; flagging as low-priority future-pass consideration.

## Status

draft → active (two-commit flow; active commit closes session-atomic window).

## R-claim sources

- `tmp/canon-coherence-falsifiability-audit-2026-04-22.md` line 2 (Reframe 3-a/b/c enumeration)
- `tmp/canon-first-principles-audit-v2-2026-04-22.md` Reframe 3 (v2 scope broadening to dynamical-vocabulary pattern)
- `docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md` (Self-Similarity-deletion precedent from project-vision.md)
- `docs/research/canon-decisions/0032-core-thesis-primitives-scope-conditioning.md` (scope-conditioning language Item 1 H6/H7 align to)
- `docs/research/canon-decisions/0048-power-expressive-constructed-modes.md` (load-bearing "metabolic rate" loop-fluency usage preserved)
- `docs/research/canon-decisions/0053-glossary-refinements-bundled.md` (bundled-ADR precedent)
