# Comparative Note Convention

## 1. Scope And Question

This memo designs a convention for comparative notes. This is a convention-design run only — no comparative note, bridge note, synthesis note, claim sheet, canon edit, or promotion-status change is produced.

The exact question: **How should Spore record multi-tradition external support for canon/foundation concepts without overloading the existing bridge-note format?**

The question arises because the mediation-over-demarcation enactment exposed a format gap. The principle now lives in `holonic-network-architecture.md`. Its evidence base spans six independent traditions (Beer, Star/Griesemer, Carlile, Ostrom, Galison, Saltzer/Reed/Clark/IETF) plus one background source (Luhmann). That evidence base was documented in a planning corroboration memo (`boundary-making-mediation-core-corroboration.md`). But planning memos are working documents — they are not the durable home for canon-support provenance.

## 2. Current Format Gap

### What bridge notes do well

Bridge notes are the governed research artifact for connecting Spore to external work. They do several things effectively:

- **Source-specific depth.** Each bridge note corresponds to one external source (author, paper, repo, protocol) and provides a thorough structural mapping to Spore concepts.
- **Bilateral claims.** The claim register captures both what the source offers Spore and what Spore confirms for the source — a two-directional assessment.
- **Dispositions.** Each bridge note carries a disposition (no change, clarify existing term, candidate pattern, candidate primitive, unresolved tension) that governs what happens next.
- **Governed frontmatter.** `doc_kind: research`, `research_subkind: bridge_note`, `disposition`, `concepts`, `sources`, `depends_on`, `relates_to` — all machine-readable and trackable.

### What bridge notes do not do well

Bridge notes are structurally single-source. They answer: "What does *this source* offer Spore?" They do not answer: "What does the convergence of *multiple independent sources* say about a specific Spore concept?"

When a canon or foundation concept draws support from several independent traditions — each with its own bridge note or external reference — there is no governed artifact that:

1. States the convergence claim (these traditions independently arrive at the same design principle)
2. Distinguishes corroborated core from qualified background from unresolved tension
3. Links the support picture to the specific canon/foundation target
4. Carries its own provenance and caveats

### Why the mediation enactment exposed the gap

The mediation-over-demarcation principle was enacted into `holonic-network-architecture.md` with no inline sourcing — appropriate for the architecture doc's voice. The six-tradition evidence base that justified the enactment lives in `boundary-making-mediation-core-corroboration.md`, a planning memo. That memo is thorough but it is a working document: it was written to inform a decision, not to serve as the durable record of why the foundation section is independently supported. If a future contributor asks "why does this section exist and what supports it?", the answer is scattered across a planning corroboration memo, a translation memo, a scoping assessment, and a placement memo — none of which are governed research artifacts.

### Why planning memos are not enough

Planning memos serve a different purpose. They document decisions, assess options, and recommend next steps. They are procedural records of how work was done, not durable descriptions of what the evidence says. A corroboration memo that recommends "proceed to lexicon-target assessment" has served its purpose once the lexicon-target assessment is done. A comparative note that says "these six traditions independently support this design principle" remains useful as long as the design principle is active.

## 3. Artifact-Type Comparison

| Artifact Type | Current Use | What It Does Well | What It Does Poorly | Should It Carry Multi-Tradition Support? |
|---|---|---|---|---|
| **Bridge note** | Source-specific research connection. One external source mapped bilaterally to Spore concepts. | Deep structural mapping of one source. Bilateral claims. Governed disposition. | Cannot represent convergence across sources. Adding multi-source convergence would distort the single-source discipline. | No. Bridge notes should remain source-specific. |
| **Comparative note** (candidate) | Does not yet exist. Proposed as a governed artifact that synthesizes multi-tradition evidence for a specific canon/foundation target. | Would connect foundation concepts to their independent evidence base. Would distinguish corroborated core / qualified background / unresolved tension. | Adds a new artifact type. Risk of becoming another bureaucratic layer. | Yes — this is its purpose. |
| **Planning corroboration memo** | Working document. Informs decisions about family narrowing, placement, and promotion. | Thorough analysis of evidence quality and tradition independence. Good for in-process reasoning. | Procedural — written to recommend next steps, not to serve as durable reference. Mixes evidence assessment with workflow recommendations. Loses relevance after the decision it informs is made. | No. Planning memos should remain decision-support artifacts. |
| **Evidence artifact** | Records observations from operational practice (commitments, decision traces, revision events). | Captures real operational data with clear provenance posture. | Designed for local/operational evidence, not for external literature convergence. Wrong unit of analysis — evidence artifacts record specific observed events, not tradition-level convergence patterns. | No. Evidence artifacts should remain observation records. |

## 4. Convention Decision

**Introduce comparative note as a distinct research artifact.**

### Why

1. **The gap is real and will recur.** The mediation enactment is not the only foundation concept with multi-tradition support. Relational topology draws on Simmel, Star, Foucault, and social network theory. Legitimacy draws on Ostrom, Polanyi, and democratic theory. As more concepts are enacted into canon/foundation, the need for a governed artifact that records "why this is independently supported" will recur.

2. **Bridge notes cannot carry this without distortion.** A bridge note answers "what does Source X offer Spore?" Forcing multi-source convergence into a bridge note would either (a) create a bridge note with no single source, breaking the format's discipline, or (b) require choosing one source as primary and subordinating the others, misrepresenting the independence of the convergence.

3. **Planning memos are the wrong durability layer.** The corroboration memo served its purpose — it informed the translation, narrowing, and placement decisions. But its procedural structure (scope, recommendation, next 3 runs, guardrails) makes it a poor durable reference. A comparative note strips out the procedural scaffolding and preserves the evidence picture.

4. **The artifact is small enough to be useful.** A comparative note is shorter than a bridge note. It does not need bilateral claims (it is not bilateral — it synthesizes multiple sources toward one target). It does not need the full bridge-note mapping apparatus. It needs: what converges, how strongly, with what caveats, and toward what target.

### Why not extend bridge notes

Bridge notes work because they are disciplined about being single-source. A multi-source bridge note would be a different kind of artifact wearing the wrong label. The claim register format (bilateral C-claims, R-claims) does not fit convergence assessment. The disposition system (no change, clarify existing term, candidate pattern) does not apply — a comparative note is not proposing a new concept, it is recording support for an existing one.

### Why not keep multi-tradition support in planning memos only

Planning memos decay in relevance. Their recommendations get acted on and their procedural context becomes obsolete. The evidence assessment inside them remains valuable, but it is buried in workflow scaffolding. A comparative note extracts the durable content and gives it a governed home.

## 5. Comparative Note Purpose

### What they are for

Comparative notes are governed research artifacts that record multi-tradition external support for a specific canon or foundation concept. They answer: "What independent traditions converge on this concept, how strongly, and with what caveats?"

### What they are not for

- **Not a replacement for bridge notes.** Bridge notes do source-specific intake. Comparative notes do cross-source convergence assessment. These are different operations.
- **Not a promotion mechanism.** A comparative note does not change any `promotion_status`. It records evidence, not decisions.
- **Not a synthesis note.** Synthesis notes digest a family of related Johar essays into thematic clusters. Comparative notes synthesize independent traditions toward a canon/foundation target.
- **Not a literature review.** A comparative note states what converges and what does not. It does not survey a field.

### When they should be created

A comparative note should be created when:

1. A canon or foundation concept has been enacted or is under active consideration for enactment.
2. The concept draws support from two or more independent non-Johar traditions (or non-single-author traditions generally).
3. The evidence base has been assessed (typically in a planning corroboration memo) and the convergence is real — not generic systems talk.
4. The planning memo has served its procedural purpose and the evidence assessment deserves a durable home.

A comparative note should NOT be created:

- For single-source support (use a bridge note)
- For evidence that has not been assessed (do the corroboration work first)
- For concepts that are still in research families and have not been enacted or targeted for enactment (premature — the target is not yet stable)
- As a routine requirement for every foundation concept (only when multi-tradition evidence exists and matters)

### What kinds of canon/foundation targets they are best suited to support

- Foundation-layer design principles (like mediation-over-demarcation)
- Enacted lexicon entries with independently corroborated mechanisms
- Constitutional commitments with cross-tradition precedent
- Any canon concept where the question "why should we believe this?" is best answered by pointing to convergence across independent traditions

## 6. Minimum Comparative Note Shape

### Frontmatter

```yaml
---
doc_id: spore.comparative.<target-concept-slug>
doc_kind: research
research_subkind: comparative_note
status: draft
depends_on:
  - <doc_id of the canon/foundation target>
relates_to:
  - <doc_ids of upstream bridge notes, if any>
target_concept: <the canon/foundation concept this note supports>
traditions:
  - <tradition-1>
  - <tradition-2>
  - ...
support_level: <strong | moderate | partial>
---
```

**Field notes:**

- `research_subkind: comparative_note` distinguishes this from `bridge_note` in queries and indexes.
- `target_concept` names the specific canon/foundation concept being supported. This is a string, not a doc_id — it names the concept, not the document.
- `traditions` lists the independent traditions assessed. Each tradition should be identifiable (e.g., "organizational cybernetics (Beer)", "institutional economics (Ostrom)").
- `support_level` is a summary judgment: `strong` (multiple independent traditions converge on the same operational principle), `moderate` (convergence exists but with significant domain-transfer caveats), `partial` (one tradition provides strong support, others are compatible but not independently confirmatory).

### Core Sections

#### 1. Target

One paragraph. State: what canon/foundation concept this note supports, where it lives, and why multi-tradition evidence matters for it.

#### 2. Convergence Summary

A table with these columns:

| Tradition | Key Source(s) | What It Independently Contributes | Core / Background |
|---|---|---|---|

List each tradition assessed. State what it contributes to the target concept through its own evidence and reasoning — not by analogy to the other traditions. Mark each as `Core` (independently arrives at the same principle) or `Background` (compatible but does not independently confirm).

#### 3. Corroborated Core

State the convergence claim in one paragraph: what the independent traditions agree on, stated in Spore's vocabulary. This is the durable claim the note exists to record.

#### 4. Qualified Background

State what has partial or background-only support. For each item: what it is, which tradition provides it, why it does not reach core status.

#### 5. Unresolved Tensions

State any tensions between traditions that bear on the target concept. Only include tensions that matter for how the concept is used in Spore — not every scholarly disagreement.

#### 6. Caveats

State the main limitations: domain-transfer risks, traditions that have not been tested in governance contexts, philosophical critiques that remain unresolved. Keep it honest.

#### 7. Provenance

List the planning memos, corroboration memos, or bridge notes that this comparative note draws from. This is not a bibliography — it is the research trail within the Spore repo.

### What the note does NOT include

- No bilateral claims (it is not bilateral — it converges multiple sources toward one target)
- No disposition (it is not proposing a concept — it is recording support for an existing one)
- No "Recommended Next 3 Runs" (it is not a planning memo)
- No claim register with C1/C2/R1 format (this format is for bridge notes)

## 7. Relationship To Existing Bridge Notes

### Can comparative notes cite bridge notes as upstream inputs?

Yes. If a bridge note provided the initial source-specific mapping that later contributed to a convergence assessment, the comparative note should list it in the `relates_to` frontmatter and in the Provenance section. The bridge note remains the source-specific record; the comparative note records the cross-source picture.

### Should comparative notes carry their own disposition?

No. Dispositions govern what an external source might contribute to Spore (no change, clarify existing term, candidate pattern, etc.). Comparative notes are not proposing something new from outside — they are recording support for something already enacted. Their function is evidentiary, not propositional.

### Are comparative notes allowed to introduce new claims?

No. A comparative note records convergence claims about an existing canon/foundation concept. If the convergence assessment reveals something genuinely new — a concept not yet in the grammar — that discovery belongs in a bridge note or a new research proposal, not in a comparative note. The comparative note's discipline is: assess support for what exists, do not propose what does not.

### Are comparative notes durable or interim artifacts?

Durable. A comparative note should remain useful as long as the canon/foundation concept it supports is active. If the concept is revised, the comparative note may need updating. If the concept is removed, the comparative note becomes historical provenance.

### How do they relate to the disposition system?

They do not participate in the disposition system. Dispositions are for bridge notes assessing what external work might contribute to Spore. Comparative notes are for recording what external traditions independently confirm about concepts already in Spore.

### How do they relate to planning memos?

A comparative note is often derived from a planning corroboration memo. The planning memo contains the full assessment with procedural context (scope, recommendation, next runs, guardrails). The comparative note extracts the durable evidence picture and drops the procedural scaffolding. The planning memo remains in the planning directory as the decision record; the comparative note becomes the governed reference artifact.

### How do they relate to canon/foundation docs?

Foundation docs do not carry inline sourcing — their voice is declarative and confident. A comparative note provides the evidence basis that the foundation doc does not carry. The link is through the `depends_on` field: the comparative note depends on the foundation doc. A future reader who asks "what supports this foundation section?" can find the comparative note through the dependency relationship.

## 8. Naming And Placement

### Where should comparative notes live?

**`docs/research/connections/`** — the same directory as bridge notes.

Why: Comparative notes are research artifacts about connections between Spore and external work. They belong in the connections directory alongside bridge notes. Placing them in a separate directory would create an unnecessary split between two closely related artifact types. The `research_subkind` frontmatter field (`bridge_note` vs `comparative_note`) provides the machine-readable distinction. The directory provides the shared home.

Why not `docs/research/planning/`: Planning memos are working documents. Comparative notes are durable research artifacts. Mixing them would blur the distinction this convention exists to establish.

Why not a new `docs/research/comparative/` directory: At the expected scale (a few notes per year), a dedicated directory is overkill. If comparative notes eventually number more than ~10, a subdirectory could be introduced.

### Naming convention

`comparative-<target-concept-slug>.md`

Examples:
- `comparative-mediation-over-demarcation.md`
- `comparative-relational-topology.md`
- `comparative-structural-legitimacy.md`

The `comparative-` prefix makes these visually distinct from bridge notes (which use `<source-slug>.md` or `johar-<essay-slug>.md`) and from planning memos. The slug names the canon/foundation target, not the source — because comparative notes are organized by what they support, not by where they come from.

### Is "comparative note" the right visible name?

Yes. Alternatives considered:

- **"Convergence note"** — accurate but unfamiliar. "Comparative" is more widely understood.
- **"Corroboration note"** — too close to the planning corroboration memos. Would confuse the durability distinction.
- **"Support note"** — too generic. Does not convey the cross-source convergence function.
- **"Evidence note"** — conflicts with the existing evidence artifact type (which records operational observations, not literature convergence).

"Comparative note" accurately names what the artifact does: it compares independent traditions and records their convergence toward a Spore concept.

## 9. First Intended Use Cases

### Use Case 1: Mediation principle — six-tradition support base

**Target:** The "Interface Design: Mediation Over Demarcation" section in `holonic-network-architecture.md`.

**Why a comparative note would help:** The enactment memo recommends this as the immediate next step. The six-tradition evidence base (Beer, Star/Griesemer, Carlile, Ostrom, Galison, IETF) exists in a planning corroboration memo. A comparative note would extract the durable evidence picture into a governed artifact: what converges (mediation structure as design target, anti-container corrective, clear operational boundaries), what is background (differential transmission, Luhmann's structural coupling), and what caveats apply (governance domain-transfer for some traditions).

**Why a bridge note alone is insufficient:** There is one upstream Johar bridge note (`johar-boundaries-in-systems.md`). The six non-Johar traditions do not have individual bridge notes — they were assessed directly in the corroboration memo. Creating six separate bridge notes (one for Beer, one for Star/Griesemer, etc.) would be disproportionate: none of these traditions entered Spore through single-source intake. They were assessed as a convergence set. The appropriate artifact is one comparative note that records the convergence, not six bridge notes that fragment it.

### Use Case 2: Relational topology — multi-tradition background

**Target:** The "Relational Topology" section in `project-vision.md` and the relational-topology research family.

**Why a comparative note would help:** Relational topology draws on Simmel (triadic relations, sociological distance), Star (infrastructure studies, boundary objects), Foucault (dispositif, spatial-relational power), and social network theory (Burt, Granovetter). The existing Johar bridge notes capture the Johar intake pathway, but the non-Johar traditions that independently support relational topology as a design concern are not governed. A comparative note could record which traditions independently confirm that "context variables predict coordination quality more strongly than composition variables."

**Why bridge notes alone may be insufficient:** Relational topology's evidence base spans traditions that were never individually ingested through the bridge-note pipeline. They informed the concept's development but have no governed artifacts. A comparative note would create the governed record without requiring retroactive bridge notes for each tradition.

### Use Case 3: Structural legitimacy — cross-tradition precedent

**Target:** The "Structural Legitimacy" section in `project-vision.md`.

**Why a comparative note would help:** The structural claim that "authority and consequence must be structurally coupled" draws on Ostrom (commons governance), Polanyi (embeddedness), democratic theory (accountability structures), and organizational theory (principal-agent). These traditions independently arrive at the same structural requirement through different evidence. A comparative note would record the convergence and distinguish the governance-specific claim (authority-consequence coupling) from the broader philosophical tradition (democratic accountability).

**Why bridge notes alone would be insufficient:** No single source "discovered" structural legitimacy for Spore. The concept was synthesized from multiple traditions during foundation development. A comparative note is the appropriate artifact for recording multi-source synthesis toward an existing concept.

## 10. Recommendation

**Proceed to first comparative note draft.**

The convention is designed. The first use case (mediation principle six-tradition support base) is ready: the corroboration memo provides the evidence assessment, the enactment memo provides the target reference, and the gap is immediate. Writing the first comparative note will test the convention against a real case and reveal any shape problems before the convention is used more broadly.

Why not "do one bridge-note cleanup pass first": The bridge-note cleanup for `johar-boundaries-in-systems.md` (updating disposition and promotion_status to reflect the enactment) is useful but independent of the comparative note convention. The cleanup can happen before or after the first comparative note without affecting either. The comparative note is the more immediate gap — the evidence base currently has no governed home.

Why not "pause and keep this as planning-only guidance": The convention is small, the first use case is concrete, and the format gap is real. Pausing would leave the evidence base in planning memos indefinitely. The mediation section exists in foundation prose without any governed research artifact connecting it to its multi-tradition support. That gap should be closed.

## 11. Recommended Next 3 Runs

### Run 1: First Comparative Note — Mediation Principle

**Short name:** comparative-mediation-draft

**Objective:** Write the first comparative note for the mediation-over-demarcation principle. Extract the durable evidence picture from `boundary-making-mediation-core-corroboration.md`, structure it per this convention (convergence table, corroborated core, qualified background, caveats, provenance), and place it at `docs/research/connections/comparative-mediation-over-demarcation.md`.

**Expected artifact:** `docs/research/connections/comparative-mediation-over-demarcation.md`

**Why first:** The convention needs to be tested against a real case. The mediation principle's evidence base is the most fully assessed convergence set in the corpus. Writing the first note validates the convention shape and closes the immediate gap identified in the enactment memo.

### Run 2: Boundary Bridge Note Cleanup

**Short name:** boundary-bridge-note-cleanup

**Objective:** Update `johar-boundaries-in-systems.md` metadata to reflect that a foundation artifact now exists and that a comparative note provides the multi-tradition evidence picture. Update `johar-program-index.md` to record the enactment. Preserve the bridge note's narrowing history — do not overwrite its provenance role.

**Expected artifact:** Metadata edits to `johar-boundaries-in-systems.md` and `johar-program-index.md`. No prose changes.

**Why second:** With both the foundation section (already enacted) and the comparative note (Run 1) in place, the bridge note can be updated to reflect the full picture: the original Johar source, the narrowed core, the foundation enactment, and the comparative note as the multi-tradition reference. Doing this cleanup before the comparative note exists would leave the bridge note pointing to planning memos as the evidence reference.

### Run 3: Johar Program Index Update and Deferred-Family Triage

**Short name:** program-index-triage

**Objective:** Update the Johar program index to reflect all enacted entries plus the mediation section. Triage the 8 deferred families: confirm which remain deferred, which have new evidence, and which can be closed. This is the capstone housekeeping run for the current program cycle.

**Expected artifact:** Updated `johar-program-index.md`. Possibly a triage memo if decisions are non-trivial.

**Why third:** With the mediation enactment recorded, the comparative note in place, and the bridge note cleaned up, the program index can be brought to a stable state reflecting the full current position. The deferred-family triage is a natural checkpoint before any new intake begins.

## 12. Guardrails

- **Comparative notes are not a substitute for source-specific bridge notes.** If a new external source enters Spore's awareness and warrants individual assessment, it should get a bridge note, not be absorbed into a comparative note. The bridge note does source-level intake. The comparative note does cross-source convergence. These are different operations and should remain separate.

- **Planning memos are not the durable home for canon-support provenance.** Planning memos serve the decision they were written for. The evidence assessment they contain should be extracted into a comparative note when the target concept is enacted and the convergence is real. The planning memo remains as the decision record; the comparative note becomes the evidence reference.

- **External operational precedent is not local evidence.** A comparative note may record that independent traditions practice a design principle. That is not the same as evidence that Spore's implementation of the principle works. Comparative notes record theoretical/tradition-level convergence. Evidence artifacts record operational observations. These are different layers.

- **The convention should stay light enough to use.** A comparative note is shorter than a bridge note. If comparative notes start requiring full bilateral claim registers, extensive source mapping, or disposition workflows, the convention has grown beyond its purpose. The minimum shape in Section 6 is the target: convergence table, corroborated core, qualified background, caveats, provenance. That is enough.

- **If the convention duplicates bridge notes without adding value, it should be reconsidered.** The test: does a comparative note say something that no single bridge note can say? If the answer is "yes — it records convergence across independent traditions," the convention earns its place. If comparative notes start looking like multi-source bridge notes with the same bilateral structure, the distinction has collapsed and the convention should be revised or retired.
