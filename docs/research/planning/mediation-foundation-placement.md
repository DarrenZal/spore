# Mediation Foundation Placement

## 1. Scope And Question

This memo determines the exact foundation-layer home for the narrowed mediation-over-demarcation design principle. This is a placement memo only. No synthesis note, bridge note, claim sheet, promotion-status change, canon edit, or foundation drafting is produced.

The exact question: **Where should the mediation-over-demarcation principle live in the foundation layer so that it adds real clarity without redundancy?**

The question matters because the preceding memos have established that the principle belongs in the foundation layer (not the lexicon, not background-only) but have not determined where. The placement must be resolved before any drafting can begin — otherwise the draft risks being written for the wrong document, at the wrong scope, in the wrong relationship to existing content.

## 2. Principle Recap

### What the narrowed principle is

**Mediation-over-demarcation** is a design principle for governance interface specification. It states: governance interfaces should be specified by their transmission, filtering, translation, and regulatory properties — the quality and selectivity of mediation between domains — rather than by their spatial containment properties.

The principle has four core elements, each with independent multi-tradition support:

1. **Mediation structure as design target.** Interface design should focus on the interfaces, protocols, and shared artifacts through which domains interact — designing the quality of coupling rather than the completeness of separation.
2. **Anti-container corrective.** Design attention should focus on what the interface does (transmits, filters, translates, regulates) rather than on the boundary's spatial properties (thick/thin, porous/sealed, fuzzy/sharp).
3. **Clear operational boundaries (Ostrom integration).** Interfaces must have clear, enforceable, known rules — even when the underlying systems ontology is non-container. Ambiguous interfaces are a governance failure mode.
4. **Membrane/interface vocabulary reframing.** The grammar's existing membrane, protocol, and projection vocabulary should be understood as mediation infrastructure with specified regulatory functions.

### What it is not

- Not a named phenomenon (like linguistic-closure).
- Not a structural force (like intent-pressure).
- Not a coordination mode (like stigmergy).
- Not a systems-ontology replacement for boundary language.
- Not a philosophical argument against container metaphysics as such.

It is a **second-order design discipline**: guidance for how the grammar's plumbing should be built.

### Why it belongs in foundations rather than lexicon

The lexicon-target memo tested the principle against all three existing lexicon entries and found it structurally different:

- Linguistic-closure names a failure mode — diagnostic.
- Intent-pressure names a structural force — first-order primitive.
- Stigmergy names a coordination mode — composable from existing primitives.

The mediation core tells you *how to design interfaces*. This is prescriptive and second-order. It governs how the grammar's infrastructure is built rather than naming something the grammar describes. Design principles belong in the foundation layer, where `holonic-network-architecture.md` specifies the dual-axis structural model and `mycorrhizal-federation-protocol.md` specifies federation invariants.

### What must stay out of the active principle

- **Markov blankets.** Not even as optional analogy. The Bruineberg critique is unresolved. The design principle stands on Beer, Star/Griesemer, Carlile, Ostrom, Galison, and IETF without Friston.
- **Conditional-independence gradients.** Cut entirely. Carlile's three boundary types provide the same analytical power.
- **The philosophical argument against container metaphysics as such.** The corrective is operational ("specify what the interface does"), not metaphysical ("systems are not containers"). Independent traditions practice mediation-over-demarcation without making the metaphysical argument.
- **Differential transmission as formal primitive.** Acceptable as an observable property attributed to Beer's variety attenuation. Not a formal primitive.

## 3. Placement Options Table

| Option | What It Would Add | Best Fit Reason | Main Redundancy Risk | Main Omission Risk | Preliminary Verdict |
|--------|-------------------|-----------------|---------------------|--------------------|---------------------|
| **Insert into `holonic-network-architecture.md`** | An interface design principle governing how the structural model's boundaries should be specified — by regulatory function, not spatial containment. Makes explicit what the doc currently assumes: that you interact with a holon's interface without seeing its internals, and that the design question is what the interface does. | This is the architecture doc for the grammar's structural model. It describes the dual-axis topology and how holons compose. The mediation principle governs HOW the interfaces at holon boundaries should be specified. Architecture docs are where design principles live. | The doc already mentions sovereignty boundaries, membranes, and protocols implicitly. A new section could read as restating what the doc already assumes rather than adding genuine content. The project vision's "Containment and Connection" section also uses membrane language. | If the section is not tight enough, it risks being absorbed into the doc's existing structural vocabulary without preserving its distinctive contribution — the operational specificity of "specify regulatory function, not spatial containment." | **Recommended.** The doc has a structural gap exactly where this principle fits: between describing what the axes are and describing how interfaces should be designed. |
| **Insert into `constitutional-artifacts-and-graph-projections.md`** | A design principle for how the junctions between graph projections should be specified. | Projections create interfaces between different views of the same normative structure. The mediation principle could inform how cross-projection interfaces work. | The doc is about artifacts and their graph projections — what they are, how they relate, how they ground. Adding interface design principles stretches its scope from "what the artifacts are" to "how the junctions between them should be designed." | The principle would be constrained to inter-projection interfaces when it actually applies to all membrane/boundary-crossing in the grammar — holon membranes, federation interfaces, learning membrane, site membranes. Placement here would lose the broader scope. | **Not recommended.** The doc's scope is artifacts and projections, not interface architecture. |
| **Insert into `relational-agency-and-holons.md`** | A design principle for how agent boundaries should be specified. | The doc asks "what is the boundary of this agent?" as a recurring structural question. The mediation principle could answer that question at the design level. | The doc is about agency — what counts as an agent, how agency is relational. Adding an interface design principle conflates the agency framing with interface architecture. The doc's existing membrane reference (what crosses the membrane is the coordination-legible surface) is already operating at a different level than what the mediation principle addresses. | The principle would be constrained to agent boundaries when it applies to all governance interfaces. Holon membranes, federation interfaces, and learning membrane are not primarily about agency — they are about interface specification. | **Not recommended.** The doc's scope is agency, not interface architecture. Placing the principle here would conflate two distinct concerns. |
| **Short standalone foundation doc** | A focused document stating the interface design principle, its core elements, its relationship to existing grammar vocabulary, and its exclusions. Clean scope. No distortion of existing docs. | The principle relates to multiple foundation docs (holonic architecture, federation protocol, instance model) and could serve as a cross-cutting design discipline rather than a section within any one of them. | Adds a 6th foundation document for a single design principle. Could feel like vocabulary inflation — a principle thin enough to be a section getting its own doc. The current foundation docs each carry substantial architectural weight (structural model, federation protocol, agency theory, artifact ecology, instance model). A standalone design-principle doc would be a different kind of artifact. | Less risk of the principle being absorbed into surrounding content. More risk of isolation — a standalone doc might not be read in context with the architecture it governs. | **Second-best option.** Clean but risks isolation and vocabulary inflation. Prefer insertion if a host doc can carry it without distortion. |

## 4. Boundary Fit Check

### Option A: `holonic-network-architecture.md`

**What is already there.** The dual-axis structural model: holonic axis (containment, sovereignty, governance, nesting) and network axis (overlap, knowledge flow, federation, cross-cutting membership). How the axes compose (tensegrity, semilattice). Fractal scale levels. Graph structure hierarchy. System design implications.

**What the mediation principle would newly contribute.** The doc currently describes *what* the structural model is but does not name *how interfaces at holon boundaries should be designed*. Line 58 says: "hierarchical decomposition compresses complexity (you interact with a holon's interface without seeing its internals)." This is the exact point where the design principle belongs — it would make explicit the principle governing HOW that interface should be specified. The principle would add: (1) the named design discipline (mediation-over-demarcation), (2) the operational corrective (specify regulatory function, not spatial containment), (3) the Ostrom integration (clear rules at non-container interfaces), (4) relationship to existing grammar vocabulary (authorized boundary crossing, holon membranes, learning membrane, federation interfaces).

**What would become repetitive.** The doc already implies that holon interfaces have regulatory functions when it discusses sovereignty boundaries and protocol-mediated exchange. The project vision's "Containment and Connection" section also uses membrane language functionally. The new section must demonstrate that it adds operational precision beyond what these existing descriptions already convey.

**Level of operation.** Architecture — the principle governs how the structural model's interfaces should be specified. This is the correct level. The holonic-network-architecture doc operates at the architecture level. The principle is an architectural design discipline.

### Option B: `constitutional-artifacts-and-graph-projections.md`

**What is already there.** Constitutional artifacts (visions, agreements, declarations, roadmaps, policies, roles, domains). The coordination ecology. Dual representation. Eight graph projections. Node-as-graph zoom invariance. Grounding through sensors. Structure and flow.

**What the mediation principle would newly contribute.** A design principle for how the junctions between projections should be specified — e.g., when the epistemic graph meets the commitment graph, or when the constitutional graph meets the routing graph, what governs the interface between them.

**What would become repetitive.** The doc already has "Structure and Flow in the Graph Model" which discusses how DAGs and hypergraphs relate. Adding interface design principles would overlap with this existing section's scope.

**Level of operation.** Artifact design — the doc operates at the artifact-ecology level. The mediation principle operates at the interface-architecture level. These are adjacent but different. The doc would need to stretch its scope to accommodate the principle.

### Option C: `relational-agency-and-holons.md`

**What is already there.** The holonic claim (whole and part). Relational agency. Collective agency. Relationship to governance layer. Semilattice structure. Agentic capacity. The membrane reference at the end (what crosses the membrane is the coordination-legible surface).

**What the mediation principle would newly contribute.** A design principle for how agent boundaries should be specified — answering the doc's own question "what is the boundary of this agent?" at the design-discipline level rather than the agency-framing level.

**What would become repetitive.** The doc already references membranes and sovereignty boundaries. It already gestures at the interface question without naming a design principle. But its existing gesture is about agency (what can the agent share, what constrains its action), not about interface specification (what regulatory properties should the membrane have).

**Level of operation.** Agency framing. The doc operates at the ontological level — what counts as an agent, how agency is relational. The mediation principle operates at the architectural level — how interfaces should be designed. Placing an architectural principle in an ontological doc creates a level mismatch.

### Option D: Standalone foundation doc

**What is already there.** Nothing — the doc would be new.

**What the mediation principle would newly contribute.** A clean, focused statement of the interface design principle with no surrounding content to distort or be distorted by.

**What would become repetitive.** The principle would need to reference holonic architecture, federation protocol, and instance model membranes. These cross-references are natural for a standalone doc but create mild redundancy with the description of membranes already in those docs.

**Level of operation.** Standalone principle layer — a design discipline that sits alongside but is not subordinate to any single architecture doc. This is a coherent level of operation, but no other current foundation doc operates at this level. Foundation docs currently carry either ontology (relational-agency), architecture (holonic-network, federation protocol), artifact ecology (constitutional-artifacts), or instance decomposition (instance model). A standalone design-principle doc would be a new kind of foundation artifact.

## 5. Recommended Home

**Insert into `holonic-network-architecture.md`.**

### Why

1. **The gap is real and located here.** The holonic-network-architecture doc describes the structural model — dual-axis topology, containment, overlap, semilattice — but does not name the design principle governing how the interfaces at holon boundaries should be specified. It says you interact with a holon's interface without seeing its internals. It does not say HOW that interface should be designed. The mediation principle fills exactly this gap.

2. **The level of operation matches.** The doc operates at the architecture level. The mediation principle is an architectural design discipline. Design principles for structural models belong in the structural model's doc — not in the agency doc, not in the artifact doc, not in isolation.

3. **Multiple membrane-using docs can reference back.** The federation protocol, instance model, and project vision all use membrane language. If the design principle lives in the holonic-network-architecture doc, those docs can reference back to a single authoritative statement rather than each carrying their own partial version. This is cleaner than a standalone doc because it attaches the principle to the structural model it governs.

4. **The insertion point is natural.** The doc transitions from "How the Axes Compose" (section 4, describing the structural interplay) to "Fractal Scale Levels" (section 5, describing how the model repeats at different scales). Between these — where the doc has established what the structural model IS but before it shows how the model manifests — is the natural home for a design principle governing how interfaces within that model should be specified.

5. **The smallest placement that carries the principle well.** One new section in an existing doc is smaller than a new foundation doc. The principle is substantive enough for a dedicated section but not architecturally distinct enough to warrant its own doc. It governs interfaces within the existing structural model — it does not propose a new structural model.

### Why not standalone

The principle relates primarily to the holonic-network-architecture doc's structural model. A standalone doc would need to re-explain the structural context before stating the principle. The holonic-network doc already provides that context. Adding the principle as a section lets it inherit the structural context and add its design discipline precisely where it is needed.

A standalone doc would also be a new kind of foundation artifact — a pure design-principle doc — with no precedent in the current foundation layer. This is not inherently wrong, but it adds organizational complexity that the principle does not require. If the principle were cross-cutting in a way that no single architecture doc could carry (like, say, a principle governing all Spore artifacts at every layer), a standalone doc would be justified. But the mediation principle governs interface specification within the holonic structural model. That model lives in holonic-network-architecture.md.

### Why not relational-agency-and-holons

The doc's concern is agency — what counts as an agent, how agency is relational. The mediation principle's concern is interface architecture — how boundary-crossing mechanisms should be designed. The doc asks "what is the boundary of this agent?" as an agency question. The mediation principle answers "how should the interface at that boundary be specified?" as an architecture question. These are different concerns at different levels. Placing the principle in the agency doc would blur the distinction between "what is an agent?" and "how should interfaces be built?" — making both less clear.

### Why not constitutional-artifacts-and-graph-projections

The doc's concern is the normative artifact ecology and its graph projections. The mediation principle's concern is interface design, not artifact design. The doc asks "how do visions, intents, and commitments relate and project?" The mediation principle asks "how should the interfaces between governance domains be specified?" These are structurally different questions. Placing the principle in the artifact doc would stretch it beyond its current scope without improving either doc.

## 6. Section Shape

### Form

One new section in `holonic-network-architecture.md`, placed between the current "How the Axes Compose" section and the "Fractal Scale Levels" section.

### Likely section title

**"Interface Design: Mediation Over Demarcation"**

Alternative: "Membrane Design Principle" — but this narrows to "membrane" when the principle also applies to federation interfaces, projection junctions, and learning-membrane operations. "Interface Design" is broader without being vague.

### Conceptual elements it must include (3-5)

1. **The named design principle.** Mediation-over-demarcation: interfaces should be specified by their transmission, filtering, translation, and regulatory properties — not by their spatial containment properties. State the principle plainly, attribute it to the multi-tradition convergence (Beer, Star/Griesemer, Carlile, Ostrom, Galison, IETF), and name it as the design discipline governing how the grammar's interfaces should be specified.

2. **The anti-container corrective as operational guidance.** Design attention should focus on what the interface *does* — what it transmits, what it filters, what it translates, what it regulates — not on the boundary's spatial properties. This is a design heuristic, not a metaphysical position. The grammar already practices this (membranes have regulatory functions, not wall-like properties). The section names it explicitly.

3. **The Ostrom integration.** Clear, enforceable, known rules at non-container interfaces. Graduated and conditional rules are acceptable; ambiguous rules are not. This is the essential corrective that prevents mediation-over-demarcation from becoming a license for vagueness. Clear mediation rules are MORE precise than clear boundary rules — they specify not just who is in/out but what passes through, with what fidelity, under what conditions.

4. **Relationship to existing grammar vocabulary.** How the principle relates to: authorized boundary crossing (the constitutional commitment the principle makes architecturally precise), holon membranes (the structural model's interface layer), learning membrane (the intake/metabolization interface), federation interfaces (the mycorrhizal protocol's exchange boundaries), and site membranes (the instance model's expose operation).

5. **What it excludes.** Markov blankets, conditional-independence gradients, the philosophical argument against container metaphysics, differential transmission as formal primitive. Brief and explicit.

### What it must explicitly exclude from the section prose

- Markov blanket language in any form (not even historical context — that belongs in the research trail, not in foundation architecture)
- Generic "boundaries are really interfaces" sentiment without operational content
- The philosophical argument against container metaphysics (the section is operational guidance, not ontological argument)
- Any vocabulary that re-expands the principle beyond the narrowed corroborated core

### Cross-links needed

- `project-vision.md` — "Containment and Connection" section and "Authorized boundary crossing" constitutional commitment. The section should note that it makes architecturally precise what the project vision states as commitment.
- `mycorrhizal-federation-protocol.md` — federation interfaces as an application domain for the principle. Exchange rules, sovereignty invariants, and domain events are all interface specifications that follow mediation-over-demarcation.
- `spore-instance-model.md` — personal node vs public node distinction as membrane configuration, and the `expose` operation as a membrane design question.
- Research provenance (brief): `docs/research/connections/johar-boundaries-in-systems.md` as origin, with note that the active core has been narrowed from the bridge note's original proposal.

## 7. Naming Posture

### Should `mediation-over-demarcation` appear as the visible heading/title?

**Yes, as a subtitle.** The section title should be "Interface Design: Mediation Over Demarcation" — leading with the generic concept (interface design) and specifying the principle's name. This makes the section findable by either term. The principle's name appears in the heading because it IS a named design principle, not just a vague theme.

### Should `mediation structure` be the primary internal term?

**Yes.** "Mediation structure" is the primary design target — the interfaces, protocols, and shared artifacts through which governance domains interact. Within the section prose, "mediation structure" should be the term used when referring to what is being designed. "Mediation-over-demarcation" should be the term used when referring to the principle that governs the design.

### Should `boundary-making-and-entangled-systems` remain research-only provenance?

**Yes.** The research-family label preserves the intellectual genealogy (which Johar essay originated the inquiry, how the family was narrowed through scoping, translation, corroboration, and target assessment). It should not appear in foundation-level prose. The cross-link to the bridge note preserves provenance; the foundation section should use only its own vocabulary.

### Does `membrane` / `interface` language need tightening before use?

**Moderate tightening needed.** The grammar already uses "membrane" to mean the holon's interface layer and "interface" broadly. The mediation principle adds a design discipline for HOW those layers should be specified. The section should:

- Use "membrane" when referring to holon-level interfaces (consistent with existing grammar usage)
- Use "interface" when referring to any governance boundary-crossing mechanism (broader than membrane)
- Use "mediation structure" when referring to the designed set of regulatory properties at an interface
- Avoid "boundary" as a design term within the section (use it only when referencing what the principle corrects — the spatial-containment approach to interface design)

This tightening is minimal — it aligns existing usage with the named principle rather than introducing new vocabulary.

## 8. Redundancy And Gap Check

### What gap this principle would fill if placed correctly

The grammar uses membrane, protocol, and projection vocabulary functionally — describing what interfaces do — but does not name the design principle that governs HOW interfaces should be specified. "Authorized boundary crossing" is a constitutional commitment (boundary crossing requires authorization) but does not specify how the interfaces themselves should be architecturally designed. The mediation principle fills this gap: it names the discipline that the grammar already practices implicitly and makes it available as an explicit design criterion.

Specifically, the holonic-network-architecture doc describes the structural model (two axes, semilattice, fractal scales) but does not include a section on how the interfaces within that model should be designed. The mediation principle provides that section.

### What existing docs already partially cover it

- **`project-vision.md`** — "Containment and Connection" section uses membrane language functionally. "Authorized boundary crossing" is listed as a constitutional commitment. Neither names the interface design principle.
- **`holonic-network-architecture.md`** — "you interact with a holon's interface without seeing its internals" (section 4). Assumes interfaces exist and have regulatory properties but does not state the design principle governing their specification.
- **`mycorrhizal-federation-protocol.md`** — Federation exchange rules and sovereignty invariants are interface specifications that implicitly follow mediation-over-demarcation. The protocol doc does not name the design principle it follows.
- **`spore-instance-model.md`** — "Personal Node vs Public Node" section describes membrane configuration as the difference between containment and exposure. Does not state the design principle.

All four docs operate consistently with mediation-over-demarcation but none names it. This is the gap: the principle is practiced but not stated.

### What would happen if it were not given a formal home

The grammar would continue to use membrane vocabulary without naming its design discipline. This is not catastrophic — the grammar works. But:

1. The precision achieved through the Johar intake's narrowing, translation, and corroboration pipeline would dissipate. The design principle would drift toward generic "design good interfaces" advice.
2. New foundation docs or pattern docs would lack an explicit design criterion for interface specification. Each would reinvent the principle ad hoc or import spatial-containment language by default.
3. The Ostrom integration (clear rules at non-container interfaces) would not be stated, leaving the grammar vulnerable to vagueness masquerading as mediation.

### What would happen if it were placed in the wrong home

- **In `relational-agency-and-holons.md`**: The agency doc would absorb an architectural principle, blurring "what is an agent?" with "how should interfaces be built?" Both docs would become less clear. Readers looking for interface design guidance would not know to look in the agency doc.
- **In `constitutional-artifacts-and-graph-projections.md`**: The artifact doc would stretch beyond its scope. The principle would be constrained to inter-projection interfaces when it applies to all governance boundary-crossing. Readers would get a partial version of the principle in a doc about artifacts.
- **As a standalone doc**: The principle would be stated cleanly but in isolation. Other docs would need to reference it rather than inheriting its context from the structural model it governs. The foundation layer would gain a doc of a new kind (pure design principle) without clear precedent.

## 9. Recommendation

**Proceed to foundation drafting memo.**

The placement is clear: one new section in `holonic-network-architecture.md`, titled "Interface Design: Mediation Over Demarcation," placed between "How the Axes Compose" and "Fractal Scale Levels."

### Why not "do one smaller naming/wording memo first"

The naming posture is already resolved. The lexicon-target memo and this placement memo together establish: "mediation-over-demarcation" as the principle name, "mediation structure" as the primary design target, and "boundary-making-and-entangled-systems" as research-only provenance. The membrane/interface vocabulary tightening needed is minimal (align existing usage with the named principle). A separate naming memo would produce no new decisions — only restating what these two memos already determined.

### Why not "pause active work and keep as background principle"

The corroboration is strong (six independent traditions), the gap is real (the grammar practices mediation-over-demarcation without naming it), and the placement is clean (one section in an existing architecture doc). Pausing would lose the precision achieved through the scoping, translation, corroboration, and target-assessment pipeline. The next step — a drafting memo specifying the section's exact prose shape — is low-risk because the placement, scope, and exclusions are now fully determined.

## 10. Recommended Next 3 Runs

### Run 1: Foundation Drafting Memo

**Short name:** mediation-section-draft-spec

**Objective:** Specify the exact prose structure for the "Interface Design: Mediation Over Demarcation" section in `holonic-network-architecture.md`. The memo should define: paragraph-level structure, what each paragraph covers, the sourcing footnote, the cross-links, and what the section must NOT say. This is a drafting specification, not the draft itself — it makes the final insertion a mechanical step.

**Expected artifact:** `docs/research/planning/mediation-section-draft-spec.md`

**Why it comes first:** The placement is resolved (this memo). The next question is the exact prose shape. A drafting spec makes the actual insertion low-risk and reviewable — the human can approve the shape before any foundation doc is edited.

### Run 2: Corpus Comparative Note Design

**Short name:** corpus-comparative-note-design

**Objective:** Design the convention for comparative notes that connect Spore canon entries to external work beyond the existing bridge-note format used for Johar intake. The boundary-making corroboration demonstrates the need: the family is grounded in six independent traditions, but the bridge-note format was designed for single-author intake, not multi-tradition corroboration. The convention should specify how foundation or canon entries relate to non-Johar literature, how multi-tradition evidence is cited, and how comparative notes differ from bridge notes.

**Expected artifact:** `docs/research/planning/comparative-note-convention.md`

**Why it comes second:** The foundation drafting spec (Run 1) will define how the mediation section cites its multi-tradition evidence base. The comparative-note convention will formalize that citation pattern for use across the grammar. These are sequential: the specific case (mediation section sourcing) informs the general convention.

### Run 3: First Real Commitment Capture (When Source Available)

**Short name:** first-real-commitment-capture

**Objective:** Create the first `real_record` commitment evidence artifact when source data becomes available — either from the Victoria workshop (May-June 2026), from a BKC backend query, or from Darren providing operational details for one specific commitment.

**Expected artifact:** 1 commitment evidence record in `docs/research/evidence/commitments/` with `evidence_posture: real_record`.

**Why it comes third:** Blocked on source data. The evidence templates and provenance conventions are in place. When source data becomes available, the capture can proceed immediately. This run is sequenced third because it cannot be executed until the source exists, while runs 1 and 2 can proceed now.

## 11. Guardrails

- **Foundation placement should add clarity, not vocabulary inflation.** The principle must earn its section by providing operational specificity that the grammar's existing membrane vocabulary does not already convey. If the drafting spec cannot distinguish the section's content from "design good interfaces," the principle should remain background-only.

- **The principle must remain narrower than the original Johar proposal.** The bridge note proposed five interconnected concepts anchored in Markov blanket formalism. The active core is now four elements: mediation structure as design target, the anti-container corrective, clear operational boundaries, and membrane/interface reframing. Any drafting that re-expands toward the original proposal's scope must justify the expansion with new evidence.

- **Clear governance boundaries must coexist with anti-container ontology.** Ostrom's requirement for clarity and Beer's recognition that boundaries are regulatory channels are not in tension — they are the synthesis. Clear rules at non-container interfaces. The section must carry both without letting either absorb the other.

- **Markov blankets must not silently re-enter through drafting.** The naming posture deliberately avoids any Markov blanket connotation. If any drafting language sounds like it imports statistical-boundary vocabulary — "screening structure," "conditional interface," "blanket design" — it should be rejected. The principle stands on six non-Friston traditions.

- **If placement creates redundancy, the principle should stay background-only.** The holonic-network-architecture doc already describes interfaces implicitly. If the drafting spec cannot demonstrate that an explicit section adds genuine operational content beyond what the doc already conveys, the principle should not be inserted. The test is: does the section tell you something concrete about how to specify a membrane that the existing doc does not?
