# ADR-0060 Audit Manifest — coordination-grammar.md
Generated: 2026-04-23  
Target doc: docs/synthesis/coordination-grammar.md (303 lines, Status: Active — Phase 12 review synthesis, 2026-03-28)  
Canon baseline: 9 primitives + 3 doctrines + 2 modes + 2 properties + 6 derived slugs, concepts yaml v12, ADR-0058 graph-projections, validator 9/30  

---

## Section-by-Section Drift Classification

### §Grammar Thesis (lines 6–18)

**Content:** Three-layer architecture (Grammar / Pattern language / Protocols). Commitment framing "worldview grammar." Structural definitions.

**Drift assessment:**
- The three-layer architecture (grammar / pattern language / protocols) is still valid synthesis.
- "A common grammar for plural, sovereign coordination across scales" is still the correct headline — matches Distillation Stack item 1.
- "Worldview grammar" framing is still valid and not superseded by any ADR.
- "Primitives, relations, membranes, transitions" — "transitions" language is still accurate (lifecycle transitions section exists).
- No stale counts or deleted concepts. No Self-similarity. No zoom-invariance. No primitive count.

**Classification: PRESERVE** (minor status-line update only)

---

### §Coordination Loop (lines 22–49)

**Content:** 9-phase loop (Sense → Interpret → Claim → Attest → Intend → Commit → Coordinate → Act → Revise). Comparison table of other loops. Note on Act not having a dedicated primitive. Note on Will Ruddick loop.

**Drift assessment:**
- The 9-phase loop itself is a *synthesis-layer* construction (not a primitive roster). Per plan §Risks, the loop is not required to be 1:1 with 6 verbs — it operates at different granularity. This is explicitly stated in the plan: "the Coordination Loop is a 9-transition synthesis that is not 1:1 with the 6-verb primitive roster; the plan honors this as legitimate synthesis-layer decomposition."
- "On Act" paragraph: claims Act "is represented through events (something happened), state transitions, and emitted evidence." This still maps correctly under current canon. Event is no longer a canon-layer primitive, but as a synthesis-layer concept (something that happened), it's used loosely here and is defensible. However, the phrase "events (something happened)" in the Primitives table (line 68) names Event as a dedicated primitive — that is where the stale primitive lives, not in this paragraph.
- The Will Ruddick loop paragraph (lines 48–49): care framing here is directional and consistent with ADR-0045 care-commoning doctrine. The statement "care is the primary coordinating practice that reproduces the field" is stronger than current canon language but consistent with ADR-0049 (Reproduction) + ADR-0045 (care-commoning). No deletion needed; potentially enrich with care-commoning ADR reference.
- Loop comparison table: no stale primitive counts. Phases don't map to primitives by name; no conflict.

**Classification: PRESERVE** (loop table + Act note + Ruddick paragraph are all still valid at synthesis layer; no mandated rewrites)

*Optional enrichment noted:* Could add "(joint-commitment at federation-scale)" to the Commit phase to reflect ADR-0050, but this is not a correction — loop phases don't enumerate primitives.

---

### §Primitives table (lines 52–69)

**Content:** Header claims "Eleven coordination primitives." Table has 11 rows: Field, Holon, Membrane, Signal, Claim, Evidence, Attestation, Intent, Commitment, Artifact, Event.

**Drift assessment — critical section:**

**Header line (line 54): "Eleven coordination primitives"** — STALE. Current canon is **9 primitives** (3 structural + 6 verbs). Must rewrite.

**Primitive-by-primitive assessment against current 9-primitive canon:**

1. **Field** ✓ — structural primitive, current canon. Worldview layer "Ontological" ✓.  
   *Missing*: Rule-stratification (ADR-0046), authority-over-rule-levels (ADR-0047) — synthesis doc doesn't need full depth, but the single-line definition is still accurate.

2. **Holon** ✓ — structural primitive, current canon. Worldview layer "Ontological" ✓.  
   *Missing*: irreducibility clause (ADR-0050 Move 2), relational-identity property (ADR-0051). Single-line definition still accurate; enrichment would be a plus but not a correction requirement.

3. **Membrane** ✓ — structural primitive, current canon. Worldview layer "Ontological / Praxical" ✓.  
   *Missing*: permeability, double-boundary (ADR-0053). Definition still accurate.

4. **Signal** ✓ — coordination verb, current canon. Worldview layer "Epistemological" — this is accurate though current canon places Signal at a slightly different framing. Acceptable at synthesis layer.

5. **Claim** — current canon: Claim is not listed as a standalone primitive in the 9-primitive roster. In current canon, Claim is absorbed under **Evidence** (Evidence is the attested record; Claims are the epistemic objects Evidence bears on). However, this is nuanced: in the Coordination Loop's Claim/Attest phases, Claims appear naturally. The synthesis-layer treatment of Claims as an epistemic coordination unit is still defensible, but Claim is NOT one of the 9 primitives. **Claims appear as elements that evidence supports, not as standalone primitives.** The table treats Claim as primitive when current canon does not.  
   *Assessment*: DEMOTE. Claim should be recognized as a sub-element of the epistemic triad (Evidence/Signal) or folded into §Relations and §Lifecycle-transitions, not listed as a 9th primitive.

6. **Evidence** ✓ — coordination verb, current canon. Worldview layer "Epistemological" ✓. ADR-0053 added `attestation-of-execution` as derived slug.

7. **Attestation** — current canon: Attestation is NOT one of the 9 primitives. In current canon, attestation-of-execution is a *derived glossary slug* (ADR-0053), and Attestation is an operation/function within Evidence and Membrane-operations, not a standalone primitive. The table lists it as an independent primitive with its own row.  
   *Assessment*: DEMOTE. Attestation should be recognized as a derived function within Evidence + Membrane-operations, not a standalone primitive. The `attests` relation remains in §Relations; Attestation lifecycle stays in §Lifecycle-transitions (as a non-primitive process); `attestation-of-execution` glossary slug can be mentioned in the Evidence row.

8. **Intent** ✓ — coordination verb, current canon. Worldview layer "Axiological" ✓. ADR-0048 (expressive power) extends this.

9. **Commitment** ✓ — coordination verb, current canon. Worldview layer "Axiological" ✓.  
   *Missing*: joint-commitment (ADR-0050) needs its own row as 9th primitive (6th verb).  
   *Missing*: Reproduction (ADR-0049) needs its own row as 8th primitive (5th verb).

10. **Artifact** — current canon: Artifact is NOT one of the 9 primitives. In current canon, "Artifacts" are "Durable memory surface[s]" — an output type, not a coordination primitive. Artifacts are what some operations produce (commitments, evidence, signals produce artifact records); they are not themselves coordination operations or structural primitives. They're classified under "What is excluded from primitive status" in project-vision.md: "Visions, roadmaps, agreements, policies, role definitions, domain definitions — artifact-types some coordination contexts author to organize intents and commitments."  
    *Assessment*: REMOVE (or migrate to a non-primitive callout). Artifact as a term can survive in the §Relations table (revises, forks targets) and §Lifecycle-transitions (Artifacts have a lifecycle), but not as a named primitive.

11. **Event** — current canon: Event is NOT one of the 9 primitives. Events are mentioned in §Lifecycle-transitions (Events are immutable, they record transitions). In governance-artifacts.md, Event graph appears as a view-template (not primary) and is listed as "temporal projection over Commitment + Epistemic event streams." The note on "Act" in the Coordination Loop says "Act does not have a dedicated primitive. It is represented through events."  
    *Assessment*: REMOVE as named primitive. The concept of events-as-state-transitions is preserved in §Lifecycle-transitions (Events subsection); the Event graph survives as a view-template in §Graph Projections. But "Event" is not in the 9-primitive roster.

**Additions needed:**
- **Joint-commitment** — 9th primitive / 6th verb (ADR-0050, 2026-04-22). Irreducibly-joint binding of two or more parties. Operations: form-joint-commitment / rescind-by-concurrence / hold-accountable-via-demand-right / extend-joint-commitment.
- **Reproduction** — 8th primitive / 5th verb (ADR-0049, 2026-04-22). Coordination labor sustaining verb-loop across time and actor turnover. Canon slug: `reproduction-continuity`.

**Self-similarity paragraph (line 70):** MANDATORY DELETE per ADR-0044/ADR-0056.

**Classification: REWRITE** (mandatory — header count, remove Artifact + Event + Attestation + Claim as primitives, add joint-commitment + Reproduction; delete Self-similarity paragraph)

---

### §Relations (lines 74–93)

**Content:** 13 relation types in a table connecting primitives.

**Drift assessment:**
- `supports`, `challenges`: Claim/Evidence/Attestation → Claim. "Attestation" appears as an actor here — still valid because attestation-as-operation generates these relations. Claim-as-entity still exists in the loop (Epistemic layer).
- `attests`: Attestation → Claim/Event/Evidence. Valid — attestation is still an operation even if not a 9th primitive.
- `authorizes`: Holon → Holon/Operation. Valid.
- `commits_to`: Holon → Commitment. Valid. Could add "or Joint-commitment" but not required.
- `fulfills`: Evidence/Event → Commitment. Valid — Event-as-state-transition is implied here.
- `disputes`: Attestation → Claim/Commitment. Valid.
- `revises`: Artifact/Claim → Artifact/Claim. "Artifact" here is used as an artifact-type noun, not a primitive designation. Valid.
- `forks`: Artifact/Holon → Artifact/Holon. Same — Artifact as noun.
- `depends_on`: Artifact/Commitment → Artifact/Commitment. Valid.
- `shares_with`: Holon → Holon (via membrane). Valid.
- `contains`: Holon → Holon. Valid.
- `routes_through`: Intent/Commitment → Pool/Membrane. Valid. Could add "Joint-commitment" but not mandatory.

**Key finding:** The Relations table uses "Attestation" and "Artifact" as actors in relation types, but these are being used as noun phrases for types of outputs/operations, not as primitive class names. This is defensible at synthesis layer. No mandatory rewrite.

**Missing:** `form-joint-commitment`, `rescind-joint-commitment`, `hold-accountable-via-demand-right`, `extend-joint-commitment` from ADR-0050 are not in the Relations table. Could add a `jointly_commits_to` relation. Optional enrichment, not mandatory.

**Classification: PRESERVE** (relations table is still valid at synthesis layer; Attestation/Artifact used as noun types not primitive designations; optional enrichment of joint-commitment relations not mandatory)

---

### §Membrane Operations (lines 96–110)

**Content:** 7 membrane operations (expose, translate, authorize, attest, contest, revoke, fork).

**Drift assessment:**
- All 7 operations are still valid under current canon. Membrane is still a structural primitive.
- ADR-0053 added permeability and double-boundary as derived analytic vocabulary on Membrane. The 7 operations here are the *operational* surface; permeability and double-boundary are *analytic axes*. No conflict.
- "Key design commitment" paragraph: "Authorization has scope. Revocation is always possible. Consent is structural, not decorative." — still valid, consistent with Constitutional Commitments.
- `attest` here as a membrane operation: consistent with current canon where attestation crosses boundaries.
- `contest` = equivalent to `disputes` relation. Valid.
- `fork` = sovereignty-preserving autonomy. Valid.

**Missing/enrichable:** Could add a note about `permeability` (selective passage, not binary gate; ADR-0053) and `double-boundary` (social inclusion vs. resource boundary; ADR-0053). Optional enrichment, not a mandatory correction.

**Classification: PRESERVE** (all 7 operations still valid; enrichment possible but not mandatory)

---

### §Lifecycle Transitions (lines 113–168)

**Content:** Lifecycle state machines for Claims, Commitments, Attestations, Artifacts, Intents, and Events.

**Drift assessment:**
- **Claims**: proposed → supported → challenged → superseded / reinstated. Still valid at synthesis layer (Claims as epistemic objects have this lifecycle even if Claim is not a 9th primitive per current roster).
- **Commitments**: proposed → verified → active → evidence_linked → redeemed, with breached/renegotiated/expired/disputed/resolved branches. Source cited: BKC commitment pooling lifecycle. Still valid; consistent with current canon.
- **Attestations**: Strengthen through corroboration / decay through contradiction. Not a lifecycle per se — still valid description of how attestations evolve.
- **Artifacts**: draft → active → deprecated, superseded branch. Still valid. Artifact as a noun class (not primitive) is fine here.
- **Intents**: declared → matched → activated / expired / withdrawn. Still valid.
- **Legibility progression** (intent → promise → commitment): Still valid synthesis. Scope mechanism explained. "Binding means scope-bound accountability, not coercion" — still valid.
- **Events**: immutable, no lifecycle transitions. Still valid. "Events are the record of transitions in other primitives" — this is consistent with Event-as-state-record even though Event is not in the 9-primitive roster.

**Missing:** No lifecycle for Reproduction-continuity or Joint-commitment. Could add: "Joint-commitments: form → active → rescinded (by-concurrence) | completed." Could add: "Reproduction: cycle-active → succession-event → cycle-renewed | cycle-ended." Optional enrichment, not a mandatory correction.

**Classification: PRESERVE** (all existing lifecycles still valid; optional enrichment of joint-commitment and reproduction lifecycles)

---

### §Graph Projections (lines 171–195)

**Content:** 8 graph projections listed in a table with structure and loop-phase columns. Note on discourse graph being promoted. Note on epistemic graph rename. Note on DAGs vs. other structures.

**Drift assessment — substantial drift vs. ADR-0058:**

ADR-0058 (Phase 2c) established a **2-tier structure**:
- **3 primary projections** (foundation-level, with independent schema + materialization + non-join use case):
  1. Constitutional graph
  2. Commitment graph
  3. Epistemic graph

- **5 view-templates** (composable over primaries, not primary at foundation-level):
  1. Roadmap DAG (Constitutional specialization)
  2. Intent hypergraph (Commitment pre-stage)
  3. Event graph (temporal projection over Commitment + Epistemic)
  4. Routing/flow graph (Commitment-pool flow projection)
  5. Discourse graph (governance-revision layer over Constitutional + Epistemic)

**Current doc lists 8 flat projections** with no tier distinction — all appear at equal status. This is a **significant structural mismatch** with ADR-0058's 3-primary + 5-view-template framework.

Mapping old doc projections to new tier structure:
| Old doc | New classification |
|---------|-----------------|
| Constitutional graph (#1) | PRIMARY |
| Roadmap DAG (#2) | VIEW-TEMPLATE (Constitutional specialization) |
| Epistemic graph (#3) | PRIMARY |
| Intent hypergraph (#4) | VIEW-TEMPLATE (Commitment pre-stage) |
| Commitment graph (#5) | PRIMARY |
| Event graph (#6) | VIEW-TEMPLATE (temporal projection) |
| Flow graph (#7) | VIEW-TEMPLATE (renamed in ADR-0058 to "Routing/flow graph") |
| Discourse graph (#8) | VIEW-TEMPLATE |

**Additional stale elements:**
- "On the discourse graph" note (line 186): claims "The discourse graph has since been promoted into the current vision as the 8th core projection." Under ADR-0058, Discourse is a *view-template*, not a primary — this promotion narrative is now stale.
- The flat 8-row table must be restructured as 3-primary + 5-view-template.
- The note on DAGs (lines 190–194): "Only the constitutional and roadmap graphs are necessarily DAGs. The other six projections are..." — this six-count is stale (only 2 primaries are non-DAGs; view-templates vary). The core point (governance is acyclic in structure but cyclical in operation) remains valid.

**Classification: REWRITE** (mandatory — restructure from flat-8 to 3-primary + 5-view-template per ADR-0058; remove stale discourse-promoted narrative; update DAG paragraph's "six" count; retain core thesis about DAG-vs-cycle)

---

### §Worldview Grammar (lines 198–216)

**Content:** 5-layer worldview table (Ontological / Epistemological / Axiological / Praxical / Ethical). Three test cases (IndigenomicsAI / BKC / Personal workflow).

**Drift assessment:**
- The 5-layer worldview table is still valid. No primitive counts. No stale framing.
- "Ontological: Holons, membranes, events — the structural primitives" — the word "events" here is used loosely to refer to things that happen (state-transition records). At synthesis layer this is defensible; Event is not listed as a dedicated primitive here. However, it could be misread as naming Event as a structural primitive. Minor potential confusion.
- IndigenomicsAI test case: OCAP analysis. Still valid — no primitive-count claims, no stale terminology.
- BKC test case: "artifacts (what), attestations (who witnesses), membranes (who can cross and how)" — using Artifact and Attestation as noun-types, not primitive designations. Valid.
- Personal workflow test case: "skill routing, meeting pipeline, entity linking" with "backend entity resolution as source of truth, 3-tier matching." Valid operational description.

**Classification: PRESERVE** (worldview table and test cases still valid; minor cleanup possible for "events" in Ontological row but not mandatory)

---

### §Ground-Truth Traces (lines 220–291)

**Content:** Three operational traces: Trace 1 (Dobby relay pilot), Trace 2 (BKC commitment pooling), Trace 3 (personal workflow).

**Drift assessment — honest primitive-instantiation re-assessment:**

**Trace 1 (Dobby relay pilot):**
Under current 9-primitive canon:
- Field: YES (the shared relay topology is the field; vault sync domain is the field)
- Holon: YES (MacBook, Dobby, Shawn's node — three bounded holons)
- Membrane: YES (expose/translate/authorize/revoke explicitly exercised)
- Intent: YES (Shawn registered as peer, shared folder scope = offer of shared content)
- Commitment: YES (Edge created, vault sync peer configured = infrastructure binding)
- Evidence: YES (AC1-AC5 PASS; relay-test file delivered; TTL=168h discovered)
- Signal: IMPLICIT (vault_sync domain events emitted = signal transmission; directional cue of file delivery)
- Joint-commitment: ARGUABLE — the edge creation is a bilateral registration but the relay doesn't clearly form a Gilbertian joint-commitment (no open expression of readiness under common knowledge with demand-rights). Marginal; not clearly instantiated at the irreducibly-joint layer.
- Reproduction: NOT INSTANTIATED — this is a single relay pilot event. Reproduction would show up in e.g. vault sync maintenance across actor turnover, which is not what this trace describes.

**Old assessment said "All 10 primitives instantiated."** Honest 9-primitive reassessment:
- Clear instantiations: Field, Holon, Membrane, Intent, Commitment, Evidence, Signal = **7 of 9**
- Marginal: Joint-commitment (bilateral but not Gilbertian) = NOT CONFIDENTLY
- Missing: Reproduction = NOT INSTANTIATED in this trace
- Previously-in-11 but now not primitives: Attestation (appears as operation, not primitive), Artifact (vault files = output), Event (domain events = state record), Claim (epistemic object, not primitive) — these are still operational in the trace, just not canonical primitives

**Honest count: 7 of 9 core primitives clearly instantiated (Signal is implicit but present). The trace still maps cleanly; it's a protocol-level trace, not a full-grammar deployment.**

**Trace 2 (BKC commitment pooling):**
Under current 9-primitive canon:
- Field: YES (bioregional coordination field; NOAM clearing substrate)
- Holon: YES (landscape groups, persons/orgs, pools — nested holarchically; Victoria within Salish Sea within Cascadia)
- Membrane: YES (expose/translate/authorize/attest/contest/fork — 6 of 7 exercised)
- Intent: YES (4 intent types: SWAP/WANT/OFFER/CONDITIONAL)
- Commitment: YES (23+ commitments, PROPOSED→REDEEMED lifecycle)
- Evidence: YES (fulfillment evidence feeds back; Celo EAS on-chain anchoring)
- Signal: YES (mapping workshops surface needs/offers/alerts = signal layer)
- Joint-commitment: YES — pool-formation IS a joint-commitment structure. Multiple parties forming a pool with shared governance rules, NOAM clearing requiring multi-party coordination, steward-council decisions = Gilbertian form-joint-commitment (open expression of readiness under common knowledge; multi-party simultaneous by construction for pool-entry protocols). **This is the paradigm case ADR-0050 cited (federation-scale protocol-version adoption is multi-party-simultaneous by construction).**
- Reproduction: ARGUABLE — the "demurrage encourages circulation" item (revision phase) and ongoing pool maintenance suggest reproduction dynamics, but the trace focuses on a specific episode. Long-term pool viability across actor turnover = reproduction, but this isn't explicitly traced.

**Honest count: 8 of 9 clearly instantiated (including joint-commitment for pool-formation); Reproduction marginal/not-explicitly-traced.**

**Old assessment said "All 10 primitives present."** Honest 9-primitive reassessment:
- BKC is the richest trace; **8 of 9** confidently (Field + Holon + Membrane + Intent + Commitment + Joint-commitment + Evidence + Signal). Reproduction implicit in ongoing pool maintenance but not traced as an episode.

**Trace 3 (Personal workflow):**
A brief trace — column for "Primitives Used" is absent (unlike Traces 1 and 2). The assessment says "fractal applicability" — stale per ADR-0044/0056 (Self-similarity deleted; fractal applicability should be "grammar works at this scale" not "fractal").

Under current 9-primitive canon:
- Field: YES (personal knowledge field)
- Holon: YES (personal operator node with tool membrane)
- Membrane: YES (tool membrane)
- Intent: YES (user intent via natural language)
- Commitment: YES (skill execution = commitment to transform input)
- Evidence: IMPLICIT (mentionedIn updates, entity corrections = evidence of state)
- Signal: YES (skill router signal matching)
- Joint-commitment: NOT INSTANTIATED (single operator, no joint commitment formation)
- Reproduction: NOT INSTANTIATED in this single-workflow trace (would show up in long-term vault maintenance / entity-resolution-as-ongoing-practice)

**Honest count: 6 of 9 clearly instantiated (Field + Holon + Membrane + Intent + Commitment + Signal; Evidence implicit). Joint-commitment and Reproduction not present in personal workflow trace — expected, personal workflow is single-operator.**

**Old assessment: "Grammar maps cleanly... confirming fractal applicability"** — the "fractal applicability" claim is stale and must be updated. The honest replacement: "Grammar maps cleanly to a personal workflow node. This trace demonstrates Spore's grammar at the smallest scale (personal holon with tool membrane) — 6 of 9 primitives instantiated; joint-commitment and reproduction are not single-operator concepts and are expected absent here."

**Classification: REWRITE** (mandatory — update primitive counts in all three trace assessments from stale 10/10 to honest 7/9, 8/9, 6/9; delete "fractal applicability" from Trace 3; add note about joint-commitment in BKC Trace 2 as paradigm case; add note about Reproduction being cross-episode and therefore absent or implicit in these episode-traces)

---

### §Distillation Stack (lines 294–303)

**Content:** 6-layer distillation from headline to functional description.

**Drift assessment:**
- Layer 1–2: "Spore is a common grammar for plural, sovereign coordination across scales. It helps people, agents, and collectives coordinate coherently without flattening difference." — Valid.
- Layer 3: "It includes an evolving bridge ontology, but goes beyond ontology..." — Valid at synthesis layer.
- Layer 4: "Its pattern language names recurring ways living systems hold, channel, and transform tension across scales into viable forms of coordination." — Valid.
- Layer 5: "The grammar is the deep structure. The pattern language makes it legible. The protocols make it reliable." — Valid.
- Layer 6 (Functional): "It enables holons to sense, interpret, claim, attest, intend, commit, coordinate, and revise across consented membranes..." — Uses "claim" and "attest" as loop-phase verbs (not primitive names). The 9-loop phases are all present. No primitive count claims.

**Classification: PRESERVE** (all 6 layers still valid; no mandatory rewrites)

---

## Summary Drift Classification Table

| Section | Lines | Classification | Reason |
|---------|-------|----------------|--------|
| Grammar Thesis | 6–18 | PRESERVE | Valid three-layer architecture; no stale counts |
| Coordination Loop | 22–49 | PRESERVE | Synthesis-layer loop; not 1:1 with primitives by design |
| Primitives table | 52–70 | REWRITE | Stale count (11→9); remove Artifact/Event/Attestation/Claim as primitives; add joint-commitment + Reproduction; delete Self-similarity paragraph |
| Relations | 74–93 | PRESERVE | Relations table still valid; Attestation/Artifact used as noun-types |
| Membrane Operations | 96–110 | PRESERVE | All 7 operations valid; optional enrichment only |
| Lifecycle Transitions | 113–168 | PRESERVE | All lifecycles still valid; optional enrichment for joint-commitment/reproduction |
| Graph Projections | 171–195 | REWRITE | 8-flat-list → 3-primary + 5-view-template per ADR-0058; update stale discourse note; update DAG count |
| Worldview Grammar | 198–216 | PRESERVE | 5-layer table and test cases valid |
| Ground-Truth Traces | 220–291 | REWRITE | Stale counts (10→honest per-trace); delete "fractal applicability"; add joint-commitment note for BKC |
| Distillation Stack | 294–303 | PRESERVE | All 6 layers valid |

**PRESERVE: 6 sections | REWRITE: 3 sections**

Sections requiring rewrite:
1. §Primitives table (mandatory — stale count + roster)
2. §Graph Projections (mandatory — ADR-0058 tier structure)
3. §Ground-Truth Traces (mandatory — stale counts + fractal language)

---

## Specific Findings for Option Selection

**Load-bearing unique content:** §Ground-Truth Traces (3 operational mappings). Under R.partial or R.full, these are preserved-in-place with honest count updates. Under S, they migrate to a companion doc. The unique content survives in all three options.

**ADR-0048 modes-across-primitives:** Not currently in coordination-grammar.md. Under R.full or R.partial, could add a brief note on expressive/constructed power as modes-across-primitives. Not a mandatory correction; synthesis doc can reference project-vision.md for depth.

**ADR-0053 derived slugs:** attestation-of-execution, permeability, double-boundary — not mentioned in coordination-grammar.md. Optional enrichment in Evidence row and Membrane row; not mandatory.

**Honest trace primitive counts:**
- Trace 1 (Dobby relay): 7/9 (Signal implicit; Joint-commitment and Reproduction absent)
- Trace 2 (BKC pooling): 8/9 (Joint-commitment YES — pool-formation paradigm case; Reproduction marginal/cross-episode)
- Trace 3 (Personal workflow): 6/9 (Joint-commitment and Reproduction expected absent for single-operator)

**Whether joint-commitment shows in BKC trace: YES** — pool-formation is a natural joint-commitment case. Noted above.

**Whether Reproduction shows in any trace: MARGINAL** — Reproduction is a cross-episode primitive; all three traces describe single episodes. Reproduction would show up in traces of long-term pool/vault/workflow maintenance across actor turnover, which none of these traces explicitly addresses.

**Event primitive in 11-count table:** Event was listed as 11th primitive ("The temporal primitive"). Under current canon it is NOT a 9-primitive-roster member. Event survives at synthesis layer in §Lifecycle-transitions ("Events are immutable; they record transitions") and in §Graph Projections (Event graph as view-template). But the primitive-table row must be removed.

---

## Recommendation pre-computation for Step 1

**R.partial is the correct option.** Rationale:
1. **6 of 10 sections survive intact (PRESERVE)** — the majority of the doc is still valid synthesis. Full supersession (S) would destroy or require migration of the Worldview Grammar, Distillation Stack, Relations table, Membrane Operations, Lifecycle Transitions, Coordination Loop — all still-valid content.
2. **3 sections need targeted rewrites** (Primitives, Graph Projections, Traces) — these are scoped, well-defined changes that Edit tool can execute section-by-section without a full Write-tool rewrite.
3. **Ground-Truth Traces unique content stays in place** under R.partial — no migration needed (migration is only required under S).
4. **Core Thesis in project-vision.md does NOT fully absorb the synthesis function** — the doc provides operational traces, loop-comparison table, and relations table that project-vision.md does not duplicate. Option S would result in loss of unique coordination-grammar synthesis that complements (not duplicates) the Core Thesis.
5. **Option R.full is higher risk** — rewriting 303 lines in one Write tool call could lose synthesis-layer nuances not captured in canon docs. R.partial with Edit-tool per section is safer and more precise.
6. **Session-atomic window is manageable under R.partial** — 3 sections to rewrite vs. 6 to preserve = approximately 15–20 min execution estimate.
