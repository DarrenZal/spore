# Spore Phase 11b — Decision Memo

**Status:** Draft
**Date:** 2026-03-27
**Depends on:** `coordination-grammar.md` (frozen)

---

## 1. Taxonomy Classification

With the coordination grammar in hand, category boundaries are now principled:

- **Foundation** = a claim about how coordination works (ontological/structural)
- **Pattern** = a named recurring arrangement of primitives that metabolizes a specific tension
- **Protocol** = explicit state machine / operational contract for part of a pattern
- **Profile** = a recurring composition of patterns/protocols that a holon instantiates
- **Substrate capability** = infrastructure property a holon can provide
- **Modality** = a cross-cutting interface / meaning-making axis

| Candidate | Category | Grammar Derivation |
|-----------|----------|-------------------|
| governance-memory | **pattern** | Artifacts + `depends_on` + lifecycle (draft/active/deprecated) |
| federated-knowledge-exchange | **pattern** | Events + membranes (expose/authorize) + attestation + RID references |
| intent-publication-and-activation | **pattern** | Signals (needs/offers) + intents + commitment threshold activation |
| commitment-pooling | **pattern** | Commitments + fulfillment lifecycle + flow graph + pool federation |
| epistemic/ontological commoning | **foundation** | Claim about how claims/evidence work across membranes (the `translate` operation's governance) |
| agent-as-node (relational agency) | **foundation** | Claim that holons include AI agents; agency is relational, not individual |
| abstraction-implementation spiral | **meta-pattern** | The coordination loop itself applied to pattern-making |
| cosmolocal design | **foundation** | Design principle: global grammar, local instantiation |
| sovereign compute | **substrate capability** | Holon property: jurisdiction + OCAP over own resources |
| bioregional sensing | **protocol** | Specific event-generation from ecological data sources (the `sense` phase operationalized) |
| claims, evidence & attestation anchoring | **protocol** | Claim + evidence + attestation state machines (proposed/supported/challenged/superseded) |
| attestation lifecycle | **protocol** | Attestation state transitions + membrane operations (attest, contest) |
| worldview-commoning | **candidate pattern family / governance mode** | Bridge ontology + preserve source + consent-aware mapping + attestation of translations. Extends BKC's ontology-commoning to full worldview stack. May resolve as one pattern, a bundle, or a governance mode. See Section 7. |
| datapoetics | **modality** | Meaning-making interface; cross-cutting, not a coordination primitive |
| store-and-forward relay | **protocol** | Membrane operation: expose + translate + forward across membranes (validated in Phase 11a) |
| discourse-as-governance | **pattern** (candidate) | Discourse graph as the self-reflective coordination layer — the ecology reasoning about itself |

---

## 2. Matrix 1: Pattern x Project

Which recurring coordination arrangements are present in each project?

Key: **S** = strong (mature instance), **E** = emerging (precursor or partial), **D** = design-level (described but not yet implemented), **--** = not present

| Pattern | Spore | BKC | DW | IndigenomicsAI |
|---------|-------|-----|-----|----------------|
| governance-memory | **S** (self-hosting spec DAG, 14+ docs, cross-project deps) | **S** (canonical doc DAG across 4 nodes) | **S** (4 docs canonicalized, plan review workflow) | **E** (semantic roadmap JSON, but no spec DAG) |
| federated-knowledge-exchange | **S** (pattern doc + cross-project edge validation) | **S** (4-node federation, 1000+ entities, bidirectional KOI-net) | **E** (entity resolution backend, mentionedIn sync) | **--** |
| intent-publication-and-activation | **D** (pattern doc describes vector framing, not yet protocol) | **S** (intent-publication.md: 4 types, agent architecture, mapping workshop pipeline) | **E** (skill router infers intent from natural language) | **--** |
| commitment-pooling | **D** (pattern doc) | **S** (2 pools, 23+ commitments, 33,400 VCV on Celo, NOAM clearing) | **--** | **--** |
| worldview-commoning (candidate) | **D** (grammar encodes 5 worldview layers) | **E** (ontology-commoning framework: mapping lifecycle, governance, consent) | **--** | **E** (4 worldview layers explicit, OCAP as membrane config, but no formal commoning protocol) |
| discourse-as-governance (candidate) | **D** (discourse graph listed as projection) | **E** (decision logs in pilots, steward review) | **E** (plan review = adversarial discourse on plans) | **--** |

**Observations:**
- **BKC is the richest validation site** — 4 of 6 patterns have strong instances.
- **governance-memory is the most widely adopted pattern** — strong in 3 projects, emerging in a 4th.
- **commitment-pooling has deep depth but narrow breadth** — only BKC has a working instance.
- **worldview-commoning has no strong instance anywhere** — BKC's ontology-commoning is closest but operates at one layer (ontological) rather than the full stack.
- **IndigenomicsAI has the richest worldview content** but has not yet formalized coordination patterns.

---

## 3. Matrix 2: Profile x Project

### Node Profiles (what kind of holon is this?)

Derived from `project -instantiates-> node profile`.

| Node Profile | Spore | BKC | DW | IndigenomicsAI |
|-------------|-------|-----|-----|----------------|
| **Pattern authority** (defines reusable abstractions) | **S** (pattern language + governance-memory layer + spec DAG self-hosting) | -- | -- | -- |
| **Governance-memory project** (spec DAG + frontmatter + doc-check + ingest) | **S** | **S** | **S** | **E** (semantic roadmap as precursor) |
| **Personal workflow node** (memory + skills + vault + entity graph) | -- | -- | **S** (meeting pipeline, entity linking, skill routing, context injection) | -- |
| **Bioregional commons** (federation + commitment pools + sensing + ontology commoning) | -- | **S** (4 nodes, 3 planes, meta-protocol, commitment economy) | -- | -- |
| **Sovereign compute / evidence node** (OCAP + jurisdiction + claims + economic reasoning) | -- | -- | -- | **S** (TELUS H200, OCAP-aligned, caretaker model, sovereignty by architecture) |
| **Runtime substrate** (KOI graph + entity resolution + federation + events) | -- | **E** (runs on KOI but doesn't define it) | **E** (uses personal-koi backend) | -- |

*Note: koi-processor/RegenAI would fill the runtime substrate row if included in the corpus.*

**Node profile definitions (from the grammar):**
- **Pattern authority** = a holon whose primary function is defining and maintaining reusable coordination abstractions (patterns, protocols, profiles). Its governance-memory is the pattern language itself.
- **Governance-memory project** = a holon that uses the governance-memory pattern (spec DAG, frontmatter, dependency validation) to structure its own coordination artifacts.
- **Personal workflow node** = a sovereign agent (person + AI) with local memory, tools, vault, and entity graph. Coordinates primarily through skill routing and entity linking.
- **Bioregional commons** = a federated holon operating across bioregional boundaries with commitment pools, ecological sensing, and ontology commoning.
- **Sovereign compute / evidence node** = a holon whose membrane configuration is defined by OCAP principles (or equivalent sovereignty constraints). Jurisdiction and data governance are architectural, not policy.
- **Runtime substrate** = infrastructure holon providing graph operations, entity resolution, federation transport, and event processing to other holons.

### Relationship Profiles (what kind of membrane / shared field?)

Derived from `instance -exhibits-> membrane profile`.

| Relationship Profile | Instance(s) | Composition (grammar terms) |
|---------------------|------------|----------------------------|
| **Pair-level relay membrane** | Shawn/Dobby pilot (Phase 11a) | federation + store-and-forward protocol + authorize edges + expose (Shared/ folder) + translate (E2EE per peer) |
| **Pool federation membrane** | BKC Victoria <-> Cascadia pools | commitment routing + authorize (steward approval) + expose (pool inventories) + translate (ontology mapping) |
| **Spec DAG cross-reference** | Spore <-> BKC, Spore <-> DW | governance-memory + `depends_on` edges across project boundaries + doc-check validation |
| **Entity resolution bridge** | DW <-> personal-koi backend | knowledge exchange + 3-tier resolution (exact/fuzzy/semantic) + mentionedIn sync |

**Observation:** Relationship profiles are less developed than node profiles. The pair-level relay membrane (Phase 11a) is the only one with a documented end-to-end trace, and even that is half-validated (Shawn-side pending). This is a gap — the grammar supports rich membrane descriptions, but few have been formally characterized.

---

## 4. Matrix 3: Profile x Function

Functional dimensions derived from the coordination loop:

- **Epistemic** = sensing, claims, evidence, attestations (Sense/Interpret/Claim/Attest)
- **Normative** = vision, values, principles, commitments of direction (constitutional artifacts)
- **Coordination** = roles, protocols, tasks, roadmaps, synchronization (Coordinate)
- **Economic** = pools, commitments, allocation, settlement, redistribution (Commit/Act)
- **Interpretive** = discourse, narrative, meaning-making, sensemaking (Interpret/Discourse)
- **Adaptive** = learning, revision, repair, fork, evolution (Revise)

Key: **H** = high (primary function), **M** = medium (significant), **L** = low (present but secondary), **--** = not active

| Node Profile | Epistemic | Normative | Coordination | Economic | Interpretive | Adaptive |
|-------------|-----------|-----------|-------------|----------|-------------|----------|
| Pattern authority (Spore) | M (tracks pattern validity) | H (defines coordination norms) | M (spec DAG governs artifacts) | -- | H (pattern language is meaning-making) | H (patterns evolve through adoption) |
| Personal workflow node (DW) | H (entity resolution, backend) | L (follows Spore norms) | H (skill routing, meeting pipeline) | -- | M (meeting transcription) | M (entity corrections, memory revision) |
| Bioregional commons (BKC) | H (1000+ entities, evidence, provenance) | H (3-plane architecture, meta-protocol) | H (4-node federation, steward governance) | H (commitment pools, VCV, TBFF) | M (mapping workshops, decision logs) | M (ontology commoning, mapping re-evaluation) |
| Sovereign compute node (IndigenomicsAI) | H (ontology v1, 25 themes, classifiers) | H (4 worldview layers, OCAP) | L (team coordination, not systemic) | M (economic measurement, $100B narrative) | H (worldview formalization, T'iithluup) | M (methodology evolution, transgenerational design) |
| Governance-memory project (generic) | L | M | H | -- | L | M |

**Key insight:** Each profile has a different functional center of gravity. BKC is the only node that operates significantly across all 6 dimensions. IndigenomicsAI is uniquely strong in interpretive + normative (worldview formalization). DW is strongest in epistemic + coordination (personal knowledge operations). This functional diversity is evidence that the grammar supports plural coordination styles, not just one.

---

## 5. Trajectory Notes (Matrix 4, abbreviated)

| Project | Started As | Current Profile | Emerging Toward | Key Need |
|---------|-----------|----------------|-----------------|----------|
| **Spore** | Spec DAG governance tool | Pattern authority + governance-memory self-host | Worldview grammar for plural coordination | External adoption; decision-governance layer |
| **BKC** | Bioregional knowledge commons | Bioregional commons (4 nodes, 3 planes) | Full coordination ecology (knowledge + capital + coordination integrated) | Commitment pooling implementation; cross-bioregional federation |
| **DW** | Claude Code plugin | Personal workflow node | Personal coordination node with proactive context injection | Communication channel access (Slack, Telegram); learning loop |
| **IndigenomicsAI** | Economic measurement project | Sovereign compute / evidence node | Worldview formalization platform (T'iithluup) | GPU-scale extraction; full worldview stack formalization |

---

## 6. Promotion Recommendations

**Promotion criteria (from plan):**
- Appears in at least 2 distinct profiles, OR
- Has 1 mature working instance plus 1 emerging instance
- Is a reusable coordination primitive, not a domain-specific implementation detail
- Can be derived from the grammar

### Promote to Spore Core

| Candidate | Category | Rationale |
|-----------|----------|-----------|
| **store-and-forward relay** | protocol | Validated in Phase 11a (Dobby relay). Grammar derivation: membrane operations (expose + translate + forward). Reusable — any pair of holons behind NAT or with asynchronous connectivity needs this. Currently described within mycorrhizal-federation-protocol but deserves its own protocol doc. |
| **discourse-as-governance** | pattern | Present as emerging in 3 projects (Spore: discourse graph projection; BKC: decision logs, steward review; DW: plan review workflow). Grammar derivation: discourse graph + claims + attestation + constitutional artifacts. The self-reflective layer the coordination ecology needs. |
| **claims, evidence & attestation anchoring** | protocol | Strongly present in BKC (on-chain anchoring on Celo EAS, Regen Ledger) and emerging in DW (3-tier entity resolution). Grammar derivation: claim lifecycle (proposed/supported/challenged/superseded) + attestation + evidence. Essential for any epistemic coordination. |

### Keep as Project-Specific (for now)

| Candidate | Reason |
|-----------|--------|
| **bioregional sensing** | Only BKC exercises this. Domain-specific to ecological data. Could promote later if SSD or other projects adopt. |
| **datapoetics** | Modality, not pattern. Cross-cutting meaning-making interface. Important for SSD but not a coordination primitive. |
| **sovereign compute** | Substrate capability, not pattern. IndigenomicsAI-specific (OCAP + TELUS H200). The capability is real but the pattern hasn't been generalized. |
| **cosmolocal design** | Foundation-level design principle already embedded in the grammar's "common core, local variation" commitment. Does not need a separate doc — it IS the grammar's design stance. |

### Requires Further Synthesis

| Candidate | Issue |
|-----------|-------|
| **worldview-commoning** | No strong instance. BKC has ontology-commoning (one layer). IndigenomicsAI has worldview content but no commoning protocol. The concept is architecturally important — it's what enables the grammar to work across plural worldviews — but premature to promote without a working instance. **Recommendation:** Track as candidate. The synthesis itself (this session) is evidence that it's needed. When BKC's ontology-commoning extends to axiology/epistemology, or when IndigenomicsAI formalizes OCAP as a membrane configuration, it will be promotable. |
| **attestation lifecycle** | Partially captured in the grammar's lifecycle transitions. May not need a separate protocol doc — the grammar itself defines the state changes. Revisit when implementing claims/evidence/attestation anchoring protocol. |

---

## 7. Does `project-vision.md` Hold Up?

**Yes.** The grammar identified three targeted follow-ons at draft time, and those follow-ons have since landed in later canon-review rounds:

1. **Graph projections:** When this memo was drafted, the vision listed 7 types. The discourse graph is now carried as the 8th core projection.

2. **Epistemic graph naming:** The vision now uses `epistemic graph` canonically and keeps `knowledge graph` only as an explicit public-facing gloss per ADR-0019.

3. **Worldview grammar framing:** The current vision opening now makes the worldview-layer commitment explicit rather than presenting Spore only as a pattern / protocol / governance-memory stack.

4. **The coordination ecology** section in the vision still aligns well with the grammar's coordination loop. No substantive revision was needed there — the vision described the ecology; the grammar derived the underlying structure.

---

## 8. Spore-KOI Relationship

**Spore** = coordination grammar + pattern language + protocols (what to coordinate and how)
**KOI** = runtime substrate (graph operations, entity resolution, federation transport, event processing)

The relationship is: KOI is one implementation substrate for Spore's grammar, not the only possible one. Spore's patterns should be expressible on any substrate that provides:
- Stable identifiers (RIDs)
- Event-driven federation
- Entity resolution
- Graph storage and query

KOI currently provides all four. AD4M could provide some. A future substrate could provide others. The grammar must not contain KOI-specific assumptions.

**Current coupling check:** The grammar document (`coordination-grammar.md`) references no KOI-specific concepts. The patterns reference KOI-net as "the current implementation" or "underlying protocol." This is the right level of coupling — descriptive, not definitional.

---

## 9. Should Discourse Graphs Become an 8th Core Graph Type?

**Yes.**

**Evidence:**
1. **The coordination loop requires it.** The Revise phase needs a structured medium for reasoning about the ecology itself — what worked, what failed, what should change. Without a discourse graph, revision is ad-hoc.

2. **Three projects already exercise it:**
   - BKC: Decision logs in pilots (`pilots/front-range-cascadia-2026/decision-log.md`), steward review processes
   - DW: `/review-plan` skill implements adversarial discourse over plans (questions gate + must-fix gate)
   - Spore: This very synthesis session is discourse-as-governance — structured reasoning about the pattern language

3. **It fills a structural gap.** The existing 7 types cover: norms (constitutional), sequence (roadmap), knowledge (epistemic), desire (intent), obligation (commitment), time (event), flow (routing). None of them capture **argumentation** — the process of proposing, objecting, defending, and deciding. Discourse graphs are to coordination what reasoning is to cognition.

4. **Grammar derivation:** A discourse graph is composed of claims (proposals are claims about what should change), attestations (arguments for/against), evidence (what bears on the proposal), and artifacts (the decision record). All primitives are already in the grammar. The discourse graph is a projection, not a new type of object.

**Status:** Completed in later canon updates. The rationale above is retained as the argument that supported promoting discourse graph into `project-vision.md` and the related canon layers.

---

## 10. Is Spore a Coordination Ontology or a Worldview Grammar?

**A worldview grammar.**

The evidence is decisive:

1. **The primitives encode more than ontology.** Claims, evidence, and attestation are epistemological. Commitments are axiological. Membrane operations are praxical. Consent, contestability, and forkability are ethical. A coordination ontology would list the types; this grammar encodes how they bear on each other across all five worldview layers.

2. **The IndigenomicsAI test case proves it.** OCAP principles cannot be represented in a purely ontological framework because they are simultaneously about what exists (data types), what counts as knowledge (community consensus), what matters (community jurisdiction), how to act (consent-based development), and how to inhabit participation (caretaker, not owner). Spore's grammar represents OCAP as a membrane configuration that operates across all five layers. An ontology-only framework would flatten OCAP into a data governance policy, losing the axiological and ethical dimensions.

3. **BKC's ontology-commoning already strains the "ontology" frame.** The ontology-commoning framework (`ontology-commoning-framework.md`) governs mapping lifecycles with provenance (epistemological), requires consent for sensitive/Indigenous knowledge (ethical), and uses human-in-the-loop approval (praxical). Calling this "ontology" commoning undersells what it actually does. The framework is already worldview-commoning in practice, operating across 3+ layers.

4. **The pattern language names ways of metabolizing tension.** "Tension" is axiological — it implies something matters. "Metabolizing" is praxical — it implies coordinated action. "Named recurring ways" is epistemological — it implies recognizable patterns of knowing. The pattern language itself operates across multiple worldview layers, not just the ontological.

**Implication for messaging:** This recommendation has since been absorbed into the current vision framing. Spore is still described as a common grammar, but the opening now makes explicit that it operates across ontological, axiological, epistemological, and practical commitments. That is the substantive "worldview grammar for plural coordination" move this section was arguing for.

---

## 11. Worldview Pluralism Test

**Question:** Does the grammar hold up against plural worldviews?

### Test: IndigenomicsAI (OCAP, Indigenous economic reasoning)

OCAP principles map to the grammar as a **membrane configuration**:
- **Ownership** -> holon sovereignty + `contains` relation (the community is the holon that contains its data)
- **Control** -> membrane operations (authorize, revoke) governed by community governance
- **Access** -> membrane visibility + consent-based `expose` operations
- **Possession** -> substrate capability (sovereign compute — data physically resides within jurisdiction)

The 4 worldview layers from IndigenomicsAI (ontology, axiology, epistemology, praxis) map to the grammar's 5-layer worldview stack. The 5th layer (ethical/ethos) is implicit in OCAP's "caretaker, not owner" stance and in seventh-generation thinking.

**Assessment:** The grammar can represent OCAP without reducing it. The membrane primitive is key — it provides the transformation interface where sovereignty is structurally enforced, not just policy-declared.

### Test: BKC (ontology-commoning, bioregional sensing, federation)

BKC's meta-protocol three invariants map directly:
- "What is shared" -> artifact primitive + `expose` membrane operation
- "Who attests" -> attestation primitive + `attest` membrane operation
- "Who can use how" -> membrane primitive (visibility, consent, jurisdiction)

The ontology-commoning framework maps to `translate` membrane operation with governance: the lifecycle (proposal -> review -> decision -> publication -> re-evaluation) is a protocol over the `translate` operation.

**Assessment:** Clean mapping. BKC's three-plane architecture (Knowledge, Capital, Coordination) maps to clusters of graph projections, not separate systems.

### Test: DW (personal automation, memory architecture)

DW operates from a pragmatic/efficiency worldview — personal productivity, not collective governance. The grammar handles this because:
- A personal workflow node is a holon (bounded coherence, internal graph of skills/entities/tasks)
- Skill routing is a membrane operation (the skill router is a `translate` + `authorize` interface)
- Entity linking is an epistemic operation (claims about entity identity, evidence via 3-tier resolution)

DW doesn't need to engage all 5 worldview layers to use the grammar. It engages 2-3 explicitly (epistemological, praxical) and the others are latent.

**Assessment:** The grammar is not totalizing — a node can engage the layers relevant to its context without being forced into full worldview articulation. This is essential for adoption (personal users shouldn't need to declare axiological commitments to use governance-memory).

### Pluralism Verdict

The grammar holds across all three worldview positions:
- **IndigenomicsAI** (Indigenous, holistic, all layers inseparable) -> works because the grammar encodes all 5 layers
- **BKC** (bioregional, ecological, strongly relational) -> works because membrane operations + federation handle cross-boundary coordination
- **DW** (personal, pragmatic, tool-oriented) -> works because engagement is graduated — use what you need

The grammar is not worldview-neutral (it has constitutional commitments: provenance, forkability, contestability, consent). But it is worldview-plural — it can represent and coordinate across different worldview positions without requiring convergence to one.

---

## 12. AD4M Interoperability Check

**Purpose:** Validate that the grammar operates at the right level of abstraction — coordination semantics decoupled from any specific runtime.

### Mapping

| AD4M Primitive | Spore Grammar | Mapping Quality |
|---------------|--------------|-----------------|
| **Agent** | Holon (bounded center of coherence) | Clean. Both are sovereignty-first. AD4M Agent has a DID; Spore Holon has a RID + membrane. |
| **Neighbourhood** | Shared membrane / commons profile | Clean. Both are shared spaces with governance. AD4M Neighbourhood has a Perspective + Social DNA; Spore has membrane operations + profile declarations. |
| **Social DNA** | Protocol / rule layer | Clean. Both encode behavioral constraints. AD4M Social DNA defines what Expressions are valid in a Neighbourhood; Spore protocols define state machines over primitives within a membrane. |
| **Expressions** | Claims / artifacts / events | Clean. Both are typed communication objects. AD4M Expressions carry a Language (schema); Spore primitives carry type + provenance. |
| **Perspectives** | Holon's internal graph (local view) | Clean. AD4M Perspective is a set of links from one Agent's viewpoint. Spore's self-similarity principle (node-as-graph) serves the same function — each holon has its own internal coordination ecology. |
| **Languages** | Schema / translation mappings | Clean. AD4M Languages define how Expressions are created and verified. Spore's `translate` membrane operation + BKC's ontology-commoning serve an analogous role. |

### What Maps, What Doesn't

**Maps cleanly:**
- Agent / Holon: sovereignty model aligns
- Neighbourhood / Shared membrane: governance scope aligns
- Social DNA / Protocol: behavioral constraint model aligns
- Expressions / Primitives: typed communication object model aligns

**Structural differences (not conflicts):**
- AD4M is DID-centric; Spore is RID-centric. Both provide stable identifiers but with different resolution mechanisms.
- AD4M Perspectives are local-first (each agent's subjective view); Spore's graph projections are shared views over a coordination ecology. These are complementary, not contradictory — an AD4M Perspective could contain Spore graph projections.
- AD4M's Language system is more explicit about schema than Spore's current `translate` operation. Spore could benefit from AD4M's Language concept for formalizing translation mappings.

### Containment Check

**Does Spore contain AD4M?** No. Spore does not specify runtime architecture, DID resolution, or expression verification mechanics. It defines coordination semantics.

**Does AD4M contain Spore?** No. AD4M does not define coordination patterns, commitment lifecycles, or the worldview grammar. It provides a runtime framework for agent-centric applications.

**Correct relationship:** Spore as coordination grammar; AD4M as one interoperable substrate/runtime. An AD4M Neighbourhood could implement Spore patterns. A Spore pattern could be expressed as AD4M Social DNA + Languages. Neither requires the other.

### Abstraction Level Validation

The grammar maps to AD4M primitives **without requiring AD4M in the grammar definition**. No primitive, relation, membrane operation, or lifecycle transition in `coordination-grammar.md` references AD4M concepts. This confirms the grammar operates at the right level of abstraction — it defines coordination semantics that can be implemented on multiple substrates (KOI, AD4M, or others).

---

## 13. Open Questions and Follow-Up

### Status of the 2026-03-27 next-session queue
1. **`project-vision.md`**: Completed. The vision now names `Discourse graph` as the 8th graph projection, canonicalizes `epistemic graph` while retaining `knowledge graph` only as an explicit gloss, and frames the opening through the worldview-layer commitments this memo argued for.
2. **Store-and-forward relay protocol**: Completed. `docs/protocols/store-and-forward-relay.md` landed in Phase 11d (`f68a2a3`, 2026-03-27) and now carries the reusable relay protocol surface the memo was pointing toward.
3. **Discourse-as-governance pattern**: Completed. `docs/patterns/discourse-as-governance.md` landed in Phase 11d (`f68a2a3`, 2026-03-27) and now carries the self-reflective governance pattern the memo identified.
4. **Claims/evidence/attestation anchoring protocol**: Completed. `docs/protocols/claims-evidence-attestation.md` landed in Phase 11d (`f68a2a3`, 2026-03-27) and now carries the epistemic anchoring protocol the memo identified.

### Track for Future Sessions
5. **Worldview-commoning formalization**: Watch for BKC ontology-commoning extending to axiology/epistemology, or IndigenomicsAI formalizing OCAP as membrane configuration. Either would provide the working instance needed for promotion.
6. **AD4M integration pilot**: Test the mapping in practice — implement one Spore pattern (governance-memory?) as AD4M Social DNA + Languages.
7. **External adoption**: Grammar + taxonomy provide a clearer adoption surface. Track whether the pattern language actually travels.
8. **Flow graph formalization**: The flow graph (capital, information, attention, obligations) is listed but under-specified compared to other projections. BKC's commitment economy + TBFF provide the richest implementation data.
9. **Active inference formalization**: The grammar's "gap between desired and actual state drives action" aligns with active inference (free energy minimization). Making this precise is a research question, not a documentation task.

### Unresolved Tensions
10. **Worldview-commoning vs. the grammar itself**: Is worldview-commoning a pattern that operates within the grammar, or is the grammar itself the worldview-commoning infrastructure? The grammar's 5-layer worldview stack may BE the commoning framework — the shared structure that makes worldview plurality coordinated. This is a productive tension, not a bug.
11. **Profile formalization**: Node profiles and relationship profiles are useful analytical lenses but not yet formal Spore concepts. Should they become first-class objects in the grammar (a "profile" primitive)? Or are they purely descriptive — compositions that emerge from the grammar but don't need to be primitives?
12. **Substrate capability vs. protocol**: Sovereign compute is classified as substrate capability, not protocol. But the boundary is blurry — OCAP could be expressed as a set of membrane operation constraints (a protocol). The classification may need to evolve.

---

## Summary

### What Gets Promoted
- **store-and-forward relay** (protocol) — validated, grammar-derived, reusable
- **discourse-as-governance** (pattern) — emerging in 3 projects, fills structural gap
- **claims/evidence/attestation anchoring** (protocol) — essential for epistemic coordination

### What Stays Local
- bioregional sensing (BKC-specific)
- datapoetics (modality, not pattern)
- sovereign compute (substrate capability, not generalizable yet)

### What Needs More Work
- worldview-commoning (architecturally important but no strong instance)
- attestation lifecycle (may fold into claims/evidence/attestation protocol)

### Key Findings
1. Spore is a **worldview grammar**, not just a coordination ontology
2. The **discourse graph** should become the 8th core graph type
3. The grammar **passes the worldview pluralism test** across 3 different worldview positions
4. The grammar maps cleanly to **AD4M without requiring it** — abstraction level is correct
5. **BKC is the richest validation site**; governance-memory is the most widely adopted pattern
6. `project-vision.md` holds up well, and the three targeted revisions identified here have since been absorbed into canon

---

## Addendum: Post-Synthesis Architectural Resolutions

*Added after synthesis review, before core doc edits (Phase 11c).*

These four tensions were raised during synthesis review and resolved through discussion. Recorded here so they do not remain only conversational.

1. **Worldview-commoning vs. the grammar itself.** Resolved: the grammar is the broader commoning infrastructure — the shared structure that makes worldview plurality coordinated. Worldview-commoning is a specific governance pattern family *within* the grammar for negotiating mappings across the 5 worldview layers. They should not be collapsed; the grammar contains the pattern, not the other way around.

2. **Profile formalization.** Resolved: profiles are derived structural objects — stable compositions of primitives, relations, and protocols that recur across holons. They are analytically useful and should eventually become first-class in the ontology/model layer, but they are not primitives. Do not add "profile" to the primitive table.

3. **Substrate capability vs. protocol.** Resolved: clean distinction. Substrate capability = what a holon can provide (e.g., sovereign compute, graph storage, entity resolution). Protocol = how that capability is exercised interoperably (e.g., store-and-forward relay, attestation lifecycle). The boundary is "what vs. how."

4. **DW epistemic anchoring wording.** The decision memo (Matrix 1, Section 6) describes DW as having "claims, evidence & attestation anchoring." More precisely, DW has epistemic grounding (3-tier entity resolution: exact/fuzzy/semantic) rather than ledger-based anchoring as in BKC. Prefer "epistemic grounding" for DW unless stronger evidence justifies "anchoring."
