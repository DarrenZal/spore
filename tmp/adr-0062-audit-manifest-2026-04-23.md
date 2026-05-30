# ADR-0062 Step 0.5 Audit Manifest
# membrane-as-self-produced disposition
# Date: 2026-04-23

---

## 1. Per-Instance-Family Operational Case Enumeration

Threshold: ≥4 cases evaluated. 8 cases evaluated below.

---

### Case 1: BKC Commons Membrane
**Description**: The Bioregional Knowledge Commons (BKC) operates a bioregional coordination commons. Its membrane — governing who participates in BKC governance, which external data/entities cross into the commons, how knowledge is attributed — is constituted by ongoing commoning labor: stewardship rotations, ontology curation, curation/attribution work, governance decisions about inclusion/exclusion.

**Classification**: **AUTOPOIESIS-ACTIVE-SUPPORTING (strong)**

**Evidence**:
- `reproductive-commoning.md` (bridge note) §introductory framing: *"commoning is first an act of reproduction — care, provisioning, territorial stewardship — not of coordination."* BKC's commons-membrane is reproduced by stewardship labor, not pre-declared.
- `boundary-commoning.md` §2: BKC commons boundary carries both "within-commons governance" (membership/inclusion) and "between-commons composition" — both are outcomes of ongoing practice, not static declarations.
- project-vision.md §Scale instantiation (L266): BKC described as "operational instance family (BKC canon + 4 federated nodes + Octo agent + Quartz sites)" — the commons boundary is dynamically maintained by active node participation.
- Bollier-Helfrich *Patterns of Commoning* (2015) — cited in ADR-0053's `permeability` slug admission — treats the commons membrane as "semi-permeable" by virtue of ongoing commoning activity, not by pre-existing declaration. The semi-permeability IS the commoning work.
- Tradition lineage: Bollier-Helfrich commons-as-self-produced by community labor. Federici: the boundary (who is in/out of the commons) is produced by reproductive labor decisions.

---

### Case 2: IC Memory-Stewardship Membrane
**Description**: Intelligence Commons (IC) has a memory-governance membrane — governing what enters the memory-layers, how attribution is maintained, which contributions persist, which are deprecated — produced by ongoing curation/attribution work by memory stewards.

**Classification**: **AUTOPOIESIS-ACTIVE-SUPPORTING (moderate)**

**Evidence**:
- `intelligence-primitives.md` (IC, post-ic:ADR-0018): §"Memory-Governance and Care-Commoning": "attribution labor, curation labor, and preservation labor in an intelligence commons are asymmetric-care-relations between memory stewards and commons beneficiaries" — these are active labor relations producing the membrane, not a passive boundary.
- `memory-layer-model.md` (IC): §"Memory-stewarding contributor livelihood" (L111): memory-stewarding contributors do ongoing governance-layer work. The layers' boundaries (what enters each layer) are a product of ongoing stewardship work.
- `intelligence-primitives.md` (IC) L126: membrane is described with "permeability + double-boundary + asymmetric-authorization axes per spore:ADR-0053/0047" — these axes are maintained by active governance labor.
- Tradition lineage: autopoiesis-active reading of IC's memory-stewardship is partially supported by the autopoiesis-and-structural-coupling bridge note (ic.connection.autopoiesis-and-structural-coupling) which imports operational-closure / informational-openness distinction into IC's layer framing.
- **Caveat**: IC bridge note explicitly says: "This note does not establish that IC layers actually meet the autopoiesis criterion — that requires a canon-level operational test which is out of scope here." So IC evidence is suggestive, not conclusive.

---

### Case 3: Octo Agent Membrane
**Description**: Octo is a bioregional knowledge-gardening + autonomous-research agent operating as a coordination layer. Its "membrane" — governing what knowledge enters/exits Octo's working knowledge, how federation interactions are authorized — is produced by Octo's ongoing knowledge-gardening work and agent-protocol maintenance.

**Classification**: **AMBIGUOUS (tilts autopoiesis-active)**

**Evidence**:
- project-vision.md L312: "BKC / Octo — operational instance family" — Octo is an active knowledge-gardening agent.
- CLAUDE.md (global): "Octo is a bioregional agent (knowledge gardening + autonomous research + discovery)."
- The agent's operational boundary (what it can access, what federation it participates in) is maintained by ongoing KOI-net federation protocol compliance and knowledge-gardening operations.
- **Ambiguity**: Octo's federation membership boundary may be declaratively established (protocol-version compliance as passive-boundary-supporting — see Case 6 below) even if its knowledge-boundary is actively produced.
- Evidence from Spore docs is sparse for Octo-specific membrane treatment; plan acknowledges BKC documentation may be thin.

---

### Case 4: Federation Member Membership Membrane
**Description**: When a federation node joins the Spore/BKC/KOI-net federation, its "membership membrane" — governing whether it is recognized as a federation member — is produced by ongoing federation-protocol compliance work: protocol-version adoption, KOI-net event submission, consent-management.

**Classification**: **AMBIGUOUS (mixed)**

**Evidence**:
- federation-protocol.md L43: "federation protocol is a boundary-making apparatus." 
- The boundary is not just static declaration — ongoing compliance (event signing, protocol-version adoption, consent-protocol participation) is required to maintain membership.
- **BUT**: federation-protocol.md L45 lists four boundary-theory variants including "autopoietic closure (Maturana-Varela)" as one distinct variant — Spore does NOT commit to autopoiesis-active reading for federation membranes specifically; it holds the four variants as options.
- The membership boundary has elements of ongoing-labor-production (compliance work) AND declarative-specification (federation spec-DAG defines what compliance means).

---

### Case 5: Federation Protocol-Version Membrane
**Description**: A specific protocol-version's "membrane" — the boundary that defines what spec-version a node can interoperate with — is declared in the spec-DAG via `depends_on` edges. A protocol-version exists as a textual document with its boundary declared, not produced by ongoing labor.

**Classification**: **PASSIVE-BOUNDARY-SUPPORTING (strong)**

**Evidence**:
- governance-artifacts-and-graph-projections.md: DAGs "provide acyclic dependency resolution for artifact derivation and document provenance." Spec-DAG nodes exist as text-authoritative artifacts; their boundary (what they depend on, what includes them) is structurally defined by the depends_on graph.
- ADR-0041 (text-authoritative representation): "the text is the artifact; the graph is derived." Protocol-version membranes are text-authoritative — their boundary is what the spec text says, not what ongoing labor produces.
- federation-protocol.md (line implicit): protocol-version-adoption is a joint-commitment (ADR-0050 paradigm case) — but the protocol-version's OWN boundary (what the version consists of, what it requires) is declaratively specified.

---

### Case 6: Governance Artifact Boundary (Vision / Agreement / Policy)
**Description**: Governance artifacts (visions, roadmaps, agreements, policies, role definitions, domain definitions) define their scope via their text content. A vision document's "membrane" — what it includes vs. excludes as constitutional commitment — is declared in the text at authoring time.

**Classification**: **PASSIVE-BOUNDARY-SUPPORTING (strong)**

**Evidence**:
- governance-artifacts-and-graph-projections.md L16: "A governance artifact is any normative artifact that says 'this is what we intend.'"
- governance-artifacts-and-graph-projections.md L26: "All governance artifacts are commitments at different levels of specificity."
- ADR-0035 (vision-as-commitment-subtype): visions are constitutional commitments — their boundary is the scope they declare, not ongoing labor.
- ADR-0041 (text-authoritative representation): governance artifacts are text-authoritative; graph projections derive from them.

---

### Case 7: Spec-DAG Node Boundary
**Description**: Each governed document (a spec-DAG node) has a boundary defined by its frontmatter's `depends_on` references and its `doc_kind`. This is declaratively established; the node's "membrane" (what it includes and depends on) is structurally defined by the file's content and metadata.

**Classification**: **PASSIVE-BOUNDARY-SUPPORTING (strong)**

**Evidence**:
- validate_spec_dag.py enforces structural constraints derived from frontmatter — the node's boundary is declared text, not produced by labor.
- ADR-0041 (text-authoritative representation) is the canonical justification: text is authoritative; graph is derived.
- A spec-DAG node's boundary does not require ongoing labor to maintain — it exists as long as the file exists with its frontmatter.

---

### Case 8: PM CommitmentBundle Boundary
**Description**: A `pm:CommitmentBundle` has a boundary — what intents it aggregates, what parties it binds — established at formation (the `form-joint-commitment` operation per ADR-0050). The bundle's ongoing lifecycle (committed → evidenced → fulfilled) is governed by the bundle's declared terms.

**Classification**: **AMBIGUOUS (tilts passive-boundary-supporting)**

**Evidence**:
- `grammar.md` (PM): CommitmentBundle "in `proposed` state is a match candidate; in `committed` state is a joint commitment." The boundary is established declaratively at bundle-formation.
- ADR-0050: "protocol-version-adoption is multi-party-simultaneous by construction" — the joint-commitment creates a boundary via declaration.
- **BUT**: bundle terms are maintained by ongoing attestation work (Evidence, fulfillment-tracking) — some ongoing-production element exists.
- PM's `permeability` slug reference (grammar.md L278): "PM's consent-gated federation boundary (protocol §8) is a permeable membrane" — permeable by consent-governance, not by ongoing self-production.

---

## 2. Aggregate Case Classification

| Case | Classification |
|------|---------------|
| BKC Commons Membrane | Autopoiesis-active-supporting (STRONG) |
| IC Memory-Stewardship Membrane | Autopoiesis-active-supporting (MODERATE) |
| Octo Agent Membrane | Ambiguous (tilts autopoiesis-active) |
| Federation Member Membrane | Ambiguous (mixed) |
| Federation Protocol-Version Membrane | Passive-boundary-supporting (STRONG) |
| Governance Artifact Boundary | Passive-boundary-supporting (STRONG) |
| Spec-DAG Node Boundary | Passive-boundary-supporting (STRONG) |
| PM CommitmentBundle Boundary | Ambiguous (tilts passive-boundary) |

**Count**: 2 autopoiesis-active-supporting / 3 passive-boundary-supporting / 3 ambiguous

**Lean per plan rule**: Mixed result → lean (e)/(g).

---

## 3. Tradition-Citation Evaluation

### Autopoiesis-Active Reading Traditions

**Tradition A (Primary): Maturana & Varela 1972 autopoiesis**
- Source: `autopoiesis-and-structural-coupling.md` (ic.connection) — primary source citations.
- Autopoietic machine = "network of processes of production (transformation and destruction) of components which through their interactions and transformations continuously regenerate and realize the network of processes."
- The membrane (cell membrane in biology) IS produced by the system's processes — it is not pre-declared; it is continuously regenerated.
- Applied to social systems: a commons is "autopoietic" when the commoning activity continuously regenerates the boundary conditions that make the commons possible.
- **Tradition strength: HIGH (primary tradition; directly supports autopoiesis-active reading).**

**Tradition B (Secondary): Bollier-Helfrich commons-as-self-produced**
- Source: ADR-0053 permeability slug admission (Bollier-Helfrich "semi-permeable membrane" citation); boundary-commoning.md; reproductive-commoning.md.
- The commons membrane (who is in, who is out, what crosses) is produced by ongoing commoning labor — stewardship, care, territorial management.
- Federici connection: reproductive-commoning bridge note framing — the commons boundary is the product of reproductive labor, not of declaration.
- **Tradition strength: MODERATE (well-cited in Spore bridge notes; supports BKC Case 1 strongly).**

**Tradition C (Tertiary): Thompson 4E Enactivism (embodied, embedded, enacted, extended)**
- Source: `autopoiesis-and-structural-coupling.md` L82 (Varela-Thompson-Rosch 1991 *The Embodied Mind*).
- Enactive cognition: cognition is enacted through sensorimotor coupling, not through static representation. Applied to membranes: boundaries are enacted through coordination activity, not pre-declared.
- **Tradition strength: LOW-MODERATE (tangential for Spore; more relevant for cognitive systems than coordination systems).**

### Passive-Boundary Reading Traditions

**Tradition D (Primary): Canonical Layering / text-authoritative discipline (ADR-0041)**
- Source: ADR-0041 (text-authoritative representation): text is the artifact; graph is derived. This applies to all spec-DAG nodes including those whose boundaries (depends_on edges) are text-declared.
- Extends to governance artifacts: the governance artifact's boundary is what the text says, not what labor produces.
- **Tradition strength: HIGH (core Spore discipline; well-established; supports Cases 5/6/7).**

**Tradition E (Secondary): Ostrom double-boundary (ADR-0053)**
- Source: Ostrom Cox-1A/1B, already admitted via ADR-0053 `double-boundary` slug. Ostrom's boundaries (social inclusion + ecological/resource) are analytically defined — they can be identified and described independently of the labor that happens within them.
- Ostrom's framework is primarily about DESCRIBING existing boundaries and conditions, not about claiming membranes are self-produced.
- **Tradition strength: MODERATE (Ostrom is descriptive/analytical, not autopoietic; supports passive-boundary framing).**

---

## 4. Field-Membrane Internal-Consistency Check

**Field primitive autopoiesis-resonance (per ADR-0044, ADR-0046)**:
- project-vision.md L27: "Field — the shared coordination space; what is between holons; the ecological, economic, or epistemic substrate in which commitments travel. Field is agent-aware but not itself an agent."
- ADR-0046 §Decision: "Norms are constitutive of coordination situations... Field-stratification matches that constitutive role."
- project-vision.md §Scope: "alternative coordination frames — autopoiesis (coupling dynamics as primitive; sub-symbolic structural coupling)... operate at different layers."
- **Assessment**: Field is "autopoiesis-resonant" in the sense that it is constituted by what occurs in it (the rule-in-use is canonical; the action arena IS the situation), but this is Ostromian constitutive-rules language (Ostrom 2005 rules-in-use constitute action arenas), not strictly Maturana-Varela autopoiesis. Field is not described as "self-produced" in canon; it is described as "the space between holons" and "agent-aware but not itself an agent."
- **Tension**: If Membrane were adopted as autopoiesis-active (self-produced by holon), there would be a parallel with Field (constituted by actions within it). But this parallelism is suggestive, not logically required — Field being constitutively-defined does not force Membrane to be autopoietically-produced.
- **Verdict**: The Field-Membrane internal-consistency argument is REAL but NOT LOAD-BEARING. It is a suggestive reason for Option (g) or (c) but does not force admission. Honest decline (d) is compatible with Field's autopoiesis-resonance because Field and Membrane are distinct primitives with different operational roles.

---

## 5. Parsimony-as-Earning-Test-Outcome Rigorous Evaluation (Per Option)

### Earning Test (Q-a): Does `membrane-as-self-produced` add NEW operational capacity?
**Assessment**: 
- For autopoiesis-active cases (BKC, IC): the canon already handles these cases via existing slugs (`permeability`, `asymmetric-membrane`, `double-boundary`) and the care-commoning / reproductive-commoning doctrines. The question is whether naming `membrane-as-self-produced` adds NEW protocol-surface specifiability.
- Proposed operations: `reproduce-membrane` (self-produce/regenerate membrane through system operations); `maintain-boundary-through-labor` (ongoing production of boundary conditions). These are not currently first-class protocol operations; they are outcomes of existing operations (care-labor, commitment-cycles, stewardship-rotations).
- **Q-a verdict: MARGINAL at best.** The self-produced membrane reading describes a property of HOW membranes arise, not a distinct coordination operation with independent governance. Contrast: Reproduction-continuity (ADR-0049) was marginal on Q-a because "the thinness IS the invisibilization phenomenon" (Federici argument). That argument was load-bearing precisely because reproductive labor IS STRUCTURALLY INVISIBLE and naming it creates protocol-surface for that invisible work. Is the same true for `membrane-as-self-produced`? Partially — commons-membrane production IS labor that can be invisible. But `reproductive-commoning` (ADR-0002) and `care-commoning` (ADR-0045) already name this at doctrine-lens level; `membrane-as-self-produced` would add the structural layer beneath those lenses.
- **Stronger case than ADR-0061's Q4 failure**: unlike asymmetric-joint-commitment (which had no distinct protocol surface), `membrane-as-self-produced` does point toward a distinct architectural question (who does the membrane-production work? what operations constitute it?). But it's closer to a property of Membrane than a new operation.

### Earning Test (Q-b): Does it have operational implementations across instance families?
**Assessment**:
- BKC: PASS (commons-membrane is operationally self-produced by commoning labor).
- IC: MODERATE (memory-stewardship produces IC's layers' boundaries; autopoiesis-bridge-note supports but does not confirm).
- Octo: AMBIGUOUS (knowledge-gardening actively shapes Octo's boundary but federation membership has declarative elements).
- PM CommitmentBundle: AMBIGUOUS (bundle boundary is declared at formation, maintained by ongoing attestation).
- Federation protocol-version: FAIL (declarative).
- Spec-DAG node: FAIL (declarative).
- **Q-b verdict: 2-3 genuine autopoiesis-active cases; 3 clear passive-boundary cases; 3 ambiguous. PARTIAL pass.**
- Does not meet the clear strong-on-(b) standard that ADR-0049 or ADR-0050 met (those had 4+ strong operational cases).

### Q-c: Does it create new vocabulary-governance burden?
- Option (a) property-on-Membrane: HIGH burden (property count updates across canon; yaml v13; "property" category now straddles two primitives — Holon and Membrane — creating inter-primitive comparison expectations).
- Option (c) derived glossary slug: MODERATE burden (yaml v13; adds to Membrane-axis vocabulary alongside permeability/double-boundary/asymmetric-membrane).
- Option (g) scope-conditioning prose-only: LOW burden (extends Membrane bullet with caveat; no new slug unless operator selects one).
- Option (e) framing-note: LOW burden (no yaml change; framing-note carries the nuance).

### Q-d: Does it resolve internal-consistency tension?
- YES for Field-Membrane consistency: if admitted, Field-autopoiesis-resonant + Membrane-autopoiesis-active would create a consistent pair.
- BUT: internal consistency is desirable but not required. Honest asymmetry (Field constituted by actions within it; Membrane defined at boundary between holons) is acceptable — different primitives can have different production-modes.

---

## 6. Sparse-Evidence Assessment

**Evidence gaps**:
- BKC documentation in Spore docs is present through bridge notes and BKC references, but no dedicated "BKC membrane operational specification" exists. The BKC commons-membrane-as-self-produced claim is inferential (from reproductive-commoning/boundary-commoning bridge notes and commons theory) rather than directly documented in Spore as a formal observation.
- Octo agent-membrane documentation is thin in Spore docs; treated mostly as "bioregional agent" without detailed membrane-production specification.
- IC memory-stewardship evidence is moderate (ADR-0018 care-commoning addition; intelligence-primitives.md post-ADR-0018) but explicitly guarded by the autopoiesis bridge note's caveat.

**Evidence-gap impact**:
- We REACH the ≥3 instance-family threshold (BKC + IC + Octo = 3 autopoiesis-active-supporting or tilting cases), but two of three are moderate/ambiguous.
- Plan rule: "lean to (e) or (f), not auto-(d)" when evidence is sparse. This applies here.
- Sparse-evidence does NOT eliminate (d) if conceptual + tradition arguments are clear. But the conceptual structure here is genuinely mixed (not a clear failure like ADR-0061's Q4 structural failure).

---

## 7. Synthesis

**Aggregate**: 2 autopoiesis-active-supporting / 3 passive-boundary-supporting / 3 ambiguous.

**Earning test Q-a**: MARGINAL (not a new operation; a property of Membrane's production-mode; but meaningfully different from ADR-0061's structural Q4 failure).

**Earning test Q-b**: PARTIAL (2-3 genuine cases; 3 clear passive-boundary cases; threshold met but not strong).

**Cross-tradition support**: Autopoiesis-active reading has STRONG tradition support (Maturana-Varela canonical + Bollier-Helfrich commons). Passive-boundary reading has STRONG tradition support (Canonical Layering / ADR-0041 text-authoritative + Ostrom). Both readings are legitimate.

**Key insight**: The evidence reveals that Spore's Membrane primitive actually SPANS both readings operationally. Some Spore membranes ARE self-produced by ongoing labor (BKC commons, IC memory-stewardship). Other Spore membranes ARE passive-boundary-declarations (spec-DAG nodes, governance artifacts, protocol-version specs). This is not a contradiction — it reflects that Membrane covers both cases in current operational use. The question is: which option correctly captures this pluralism?

**Implications for options**:
- (a) Property-on-Membrane: would claim ALL Spore membranes are self-produced — FALSE for spec-DAG/governance-artifact cases. OVER-CLAIMS. Not recommended.
- (c) Derived glossary slug: would add `membrane-as-self-produced` as named axis alongside others — lighter than (a); the slug would name the autopoiesis-active reading without claiming it applies to all membranes. More defensible.
- (d) Decline: would decline both readings to prose — viable because existing slugs (`permeability`, `double-boundary`, `asymmetric-membrane`) already handle operational axes; autopoiesis-active reading can be named as ADR-0053 §3 parallel (standing objection). But loses the positive articulation of BKC/IC cases.
- (e) Framing-note: articulates THREE readings (Canonical Layering / Autopoiesis-active / Ostrom-double — the three ADR-0053 R-Mem-1 named readings) as canonical alternatives; Spore commits to Canonical Layering as default while acknowledging the other two are operational for specific cases. This is the most honest representation.
- (f) Park-with-triggers: defers; appropriate if evidence were even thinner, but two clear autopoiesis-active cases (BKC + IC) suggest the reading is operational now, not future.
- (g) Scope-conditioning: would explicitly acknowledge both readings in the Membrane bullet with per-case scope: "BKC/IC membranes are self-produced by ongoing commoning/stewardship labor; federation-protocol-version/spec-DAG/governance-artifact membranes are passive-boundary-declarations." This is the most operationally precise representation and matches actual Spore usage.

---

## 8. Recommendation Pre-Assessment

**Leading options**:
- **(g) Scope-conditioning** — most honest representation of actual operational pluralism; names both readings with scope; extends Membrane bullet without over-claiming; establishes new precedent (primitive-bullet scope-conditioning at per-case level, analogous to ADR-0031/0032/0044 universality-overreach conditioning at Core Thesis level). **Risk**: scope-conditioning at primitive-bullet level is a new pattern — operator must evaluate precedent-creation.
- **(e) Framing-note** — articulates three readings canonically via new framing-note; zero canon-body changes; cleanest option if operator does not want primitive-bullet editing. **Limitation**: framing-note is less visible than primitive-bullet; the split is operationally real and may deserve bullet-level acknowledgment.
- **(c) Derived glossary slug (light)** — admit `membrane-as-self-produced` as third Membrane-axis alongside permeability/double-boundary; Membrane bullet lightly extended to note all three axes. **Risk**: slug admission without per-case scope would over-claim if read as applying to all membranes.

**Pre-recommendation**: **(g) scope-conditioning OR (e) framing-note**, with preference toward (g) if operator is comfortable establishing the per-instance-family scope-conditioning precedent at primitive-bullet level. If operator prefers not to establish that precedent, (e) is the correct alternative.

**Clear declines**:
- (a) property-on-Membrane: over-claims (not all membranes are self-produced); earning test Q-a fails to demonstrate new operational capacity separable from existing reproductve-commoning / care-commoning doctrines.
- (f) park-with-triggers: evidence is present NOW for autopoiesis-active reading in BKC/IC cases; deferral is not warranted.

---

## 9. Disposition Log
tmp/ artifact; not to be staged.
