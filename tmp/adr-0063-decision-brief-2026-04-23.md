# ADR-0063 Decision Brief — Participatory Sense-Making Disposition
# Generated: 2026-04-23 | Step 1 → Step 2 Operator Gate

---

## Audit Summary

**Candidate**: `participatory-sense-making` — De Jaegher & Di Paolo (2007) enactivist framing that sense-making is constitutively interactive, emerging *between* agents in coupled interaction rather than through sender-encoded → receiver-decoded transmission.

**Parking source**: ADR-0053 R-Sig-1 — held-open per capstone §8 Tier-3 item 16 (single-tradition-support insufficiency for primitive admission).

**Audit outputs**: 9 operational cases evaluated; 5-cluster tradition-breadth analysis; per-option admission-category-fit; ADR-0050 + ADR-0053 precedent relationships; parsimony-as-earning-test per option.

---

## Tradition-Citation Breadth Analysis

**Single-tradition-support concern**: MAINTAINED for primitive admission.

The originating tradition is fully enactivist (Cluster A — De Jaegher/Di Paolo/Thompson/Gallagher/Varela/Fuchs). Four adjacent tradition clusters were evaluated:
- **Cluster B (Dialogical/Social-constructionist)**: Bakhtin, Vygotsky, Harré, Mead — converge on "meaning is social/interactional" family claim but NOT on PSM's specific mechanism (interaction-process operational autonomy). Partial convergence only.
- **Cluster C (Actor-network/Distributed cognition)**: Hutchins, Latour, Clark/Chalmers — anti-individualist unit-of-analysis supports the family claim; weak PSM-specific convergence.
- **Cluster D (Phenomenological intersubjectivity)**: Husserl, Merleau-Ponty, Schutz — partially absorbed into Cluster A through Thompson's *Mind in Life* synthesis; Schutz's we-relations provides independent sociological support but is the weakest of the independent supports.
- **Cluster E (Language-games/Practice-theory)**: Wittgenstein, Bourdieu — private-language-argument supports the anti-private-meaning claim; practice-theory supports anti-representationalism. Family-claim convergence, not PSM-specific.

**Honest count**: 1.0 full cluster (Enactivist) + ~2.0 partial-cluster equivalents across B/C/D/E. Tradition-breadth threshold for primitive admission (≥2 outside-enactivist full clusters) is NOT MET. Threshold for lighter admission categories (≥2 cluster-equivalents total) is MARGINALLY MET.

Adjacent traditions converge on the *family claim* (meaning is intersubjective, not privately constituted) but not on PSM's distinctive mechanism (dyadic interaction process acquires operational closure and autonomy). They are supportive background, not independent convergent arrivals.

---

## Per-Instance-Family Case Classifications

| Case | Classification | Strength |
|------|---------------|---------|
| BKC pool-formation deliberation | PSM-supporting | Moderate |
| Federation protocol-version negotiation | Ambiguous (dual-phase: PSM pre-adoption / SR post-adoption) | Moderate |
| IC memory-governance curation | PSM-supporting | Strong conceptually |
| PM matchmaking dialogue | Ambiguous (SR primary at protocol layer; PSM relational) | Weak PSM |
| Octo autonomous research | SR-supporting | Moderate |
| Joint-commitment formation (ADR-0050 paradigm) | PSM-supporting | Strong conceptually |
| Spec-DAG amendment discussions | Ambiguous (dual-phase) | Moderate |
| Signal-as-algedonic-bypass | SR-supporting | Strong |
| Stigmergic trace coordination | SR-supporting | Moderate |

**Aggregate**: 3 PSM-supporting / 3 SR-supporting / 3 Ambiguous (dual-phase)

**Key structural finding**: Three cases (federation negotiation, PM dialogue, spec-DAG amendment) exhibit a dual-phase pattern — PSM during deliberation/formation, SR during dissemination/adoption — structurally identical to ADR-0062's Membrane dual-production-mode finding. Per ADR-0062 precedent: dual-mode → scope-condition rather than property-on-primitive.

---

## Admission-Category-Fit Summary

| Option | Shape-fit | Earning test | Verdict |
|--------|-----------|-------------|---------|
| (a) Primitive | POOR | FAILS (dual-passage + tradition-breadth) | Blocked |
| (b) Doctrine | POOR | N/A (category mismatch) | Blocked |
| (c) Mode | POOR | N/A (category mismatch) | Blocked |
| (d) Property-on-Signal | PARTIAL | FAILS joint-passage Q-b | Blocked; use (i) instead |
| (e) Derived glossary slug | VIABLE | Marginally passes | Open |
| (f) Decline-inline-prose-only | GOOD | N/A (decline) | Open |
| (g) Framing-note | GOOD | Marginally passes (narrative) | Open |
| (h) Park-with-triggers | Sub-optimal | N/A | Not recommended |
| (i) Scope-condition Signal bullet | GOOD — best fit | ADR-0062 precedent match | Recommended primary |

---

## ADR-0050 Side-B Relationship

**Type**: PARALLEL (not deepening Gilbertian form)

PSM is the *enactive* Side-B form (De Jaegher/Di Paolo — meaning constituted in structural coupling); joint-commitment is the *Gilbertian* Side-B form (obligation-generating, cognitivist). ADR-0050 committed to the Gilbertian form; PSM remains cited-lineage-not-primitive per ADR-0050:217. PSM is most naturally readable as "mode-of-joint-commitment-operation" (ADR-0050 line 141) — the enactive characterization of how joint-commitment-formation proceeds in practice.

ADR-0063 deepens Side-B by articulating the PSM/joint-commitment-formation relationship clearly, not by admitting a second Side-B primitive.

---

## ADR-0053 §3 Precedent Relationship

**Type**: DEEPENS — closes holding-open with named evaluation

ADR-0053 named PSM as standing-objection-held-open. ADR-0063 performs the dedicated earning-test evaluation ADR-0053 deferred and closes with formal disposition. The Signal bullet's autopoiesis-objection acknowledgment (project-vision.md:65) is the existing canon-body anchor; ADR-0063 either extends or maintains it depending on option chosen.

---

## Options

### (a) Primitive admission
**Scope**: 9+ canon-body edits across project-vision.md + governance-artifacts.md parallel + yaml v12→v13.
**Earning test**: FAILS (dual-passage on operational support; tradition-breadth block).
**NOT RECOMMENDED.**

### (b) Cross-cutting doctrine
**Scope**: 3-4 canon-body edits; yaml v12→v13.
**Shape-fit**: POOR (doctrine category is for visibility-lens elements, not cognitive-science frameworks).
**NOT RECOMMENDED.**

### (c) Mode-across-primitives
**Scope**: 2-3 canon-body edits; yaml v12→v13.
**Shape-fit**: POOR (modes category is for power-flow modes per Johar three-form).
**NOT RECOMMENDED.**

### (d) Property-on-Signal
**Scope**: Signal bullet in project-vision.md + governance-artifacts.md + yaml v12→v13.
**Earning test**: Fails joint-passage Q-b (PSM does not apply to all signal-instances — algedonic, stigmergic, dissemination cases are SR-primary).
**Per ADR-0062 precedent**: partial-passage Q-b → scope-condition is the canonical choice.
**NOT RECOMMENDED (use (i) instead).**

### (e) Derived glossary slug
**Scope**: yaml v12→v13 only (add `participatory-sense-making` slug entry). No canon-body changes.
**Content**: One-line definition citing De Jaegher/Di Paolo + one-line relationship note to Signal primitive and joint-commitment-formation.
**Pros**: Provides formal canonical anchor. Lightest.
**Cons**: PSM is already named multiple times in canon-body (project-vision.md:60+66+85; ADR-0050:141). Adding a slug without prose extension is minimally informative given existing named-citations.
**Sub-option e.1**: slug only. **Sub-option e.2**: slug + light Signal-bullet mention.
**OPEN. Not primary lean.**

### (f) Decline-inline-prose-only
**Scope**: ADR file only (§Consequences names De Jaegher/Di Paolo PSM as the specific form of standing-objection evaluated and declined). No canon-body changes. Yaml v12 unchanged.
**Content**: ADR §Consequences names: (1) PSM is the enactive-form Side-B alternative Spore evaluated at dedicated ADR; (2) primitive-admission FAILS on dual-passage earning test + single-tradition-breadth block; (3) PSM remains cited-lineage per ADR-0050:60+85+141 and standing-objection per project-vision.md:66 — these canonical homes are adequate without further prose; (4) future re-engagement triggers named inline (multi-tradition convergence or operational saturation).
**Pros**: Clean closure of R-Sig-1. Precedent from ADR-0061. Zero canon risk.
**Cons**: Conceptual depth of PSM (bridge note + corpus review) is richer than a pure decline acknowledges. Missing the framing opportunity for PSM/joint-commitment-formation relationship articulation.
**OPEN. Third-choice lean.**

### (g) Decompose-and-park-as-framing-note
**Scope**: New `docs/research/connections/canon-framing-participatory-sense-making.md` (OR extend existing `4e-cognition-and-participatory-sense-making.md`) + ADR file. Yaml v12 unchanged.
**Content**: Framing-note articulates: (1) PSM as enactive-critique of SR-Signal ontology (standing objection canonical home); (2) PSM positive framing for deliberation-phase coordination (BKC/IC/joint-commitment-formation contexts where PSM is operationally load-bearing); (3) PSM / joint-commitment-formation relationship (two complementary Side-B approaches — Gilbertian obligation vs enactive meaning-emergence, both operational in joint-commitment contexts); (4) PSM / Signal-constructed-power relationship (ADR-0048 lineage — pre-reaction + situational agency emergence; PSM provides the meaning-layer of what Signal-constructed-power is doing at the interactional level); (5) Residues and re-engagement triggers.
**Pros**: Richest positive articulation short of admission. PSM's conceptual depth warrants a framing-note home. Precedent from ADR-0055 (Encounter). Cross-primitive articulation (Signal + joint-commitment + IC-governance) is cleaner in a framing-note than inline at Signal-bullet.
**Cons**: Larger scope than (f). New file. Does not change Signal bullet canonical text.
**OPEN. Strong secondary lean.**

### (h) Park-with-triggers
**Scope**: ADR file only. Yaml v12 unchanged.
**Content**: 3-5 numbered triggers for re-engagement.
**Pros**: Formally defers; leaves open.
**Cons**: PSM has already been held-open since ADR-0053 R-Sig-1. Additional parking without articulation is under-responsive to conceptual depth and in-repo evidence. R-Sig-1 was authored specifically to flag this for dedicated evaluation — ADR-0063 IS that evaluation. Parking again without disposition is a process failure.
**NOT RECOMMENDED.**

### (i) Adopt-with-scope-conditioning (Signal bullet)
**Scope**: Signal bullet in project-vision.md + governance-artifacts.md parallel + ADR file. Optionally: yaml v12→v13 if slug added.
**Content**: Signal bullet extended to explicitly acknowledge dual-mode scope: (1) for *deliberation-phase and formation-phase signal-instances* (BKC pool-formation, IC memory-governance curation, joint-commitment formation processes per ADR-0050), PSM framing is operationally relevant — meaning emerges constitutively in the interaction, not merely transmitted; (2) for *dissemination-phase, algedonic, and stigmergic signal-instances* (governance-artifact ratification broadcast, algedonic signals bypassing hierarchy, spec-DAG event emission, stigmergic trace coordination), sender-receiver ontology is operationally sufficient. PSM does not displace SR as the Signal primitive's canonical framing — it scopes SR to the appropriate instance sub-set.
**Relationship articulation**: Inline prose acknowledges PSM as the enactive form of Side-B alternative (ADR-0050 lineage) + names De Jaegher/Di Paolo 2007 + notes PSM relationship to joint-commitment-formation (two complementary operational characterizations of the same phenomenon).
**Sub-option i.1** (prose-only, no slug): yaml v12 unchanged. Signal bullet extended with 3–5 sentences. Minimal but honest.
**Sub-option i.2** (prose + slug `participatory-sense-making`): yaml v12→v13. Provides formal canonical entry-point for cross-reference.
**Pros**: Matches ADR-0062 structural precedent precisely (dual-mode → scope-condition). Positive canonical acknowledgment of PSM for applicable instances. Honest about SR primacy for most signal-instances. Does not over-claim. Per plan rule: if dual-phase structural pattern found → (i) is the per-precedent canonical choice.
**Cons**: Signal-bullet-centric; cross-primitive relationship articulation (joint-commitment + IC-governance surface) is more naturally housed in a framing-note. If operator wants full relationship articulation, (g) is cleaner.
**RECOMMENDED PRIMARY LEAN.**

---

## Recommendation

**Primary recommendation: Option (i) sub-option i.1 (prose-only scope-conditioning) or i.2 (prose + slug)**

Rationale:
1. Structural dual-phase pattern in operational cases matches ADR-0062 precedent exactly → scope-condition is the canonical per-precedent choice.
2. Earning test (a) and (b) do not jointly pass for Signal as a whole, but 3 PSM-supporting cases are genuine → scope-conditioning is honest about partial applicability.
3. ADR-0050 line 141 explicitly leaves room for "mode-of-joint-commitment-operation" characterization → i.1/i.2 delivers this without additional primitive admission.
4. Adds canonical acknowledgment of PSM as operationally relevant for the most relational/deliberative signal-instances, without over-claiming universal PSM applicability.
5. Slug decision (i.1 vs i.2) is operator's call: slug adds cross-reference-ability; prose-only is sufficient if PSM remains cited-lineage-not-slug.

**Secondary recommendation: Option (g) framing-note** — if operator prefers full cross-primitive relationship articulation (Signal + joint-commitment + IC-governance surface) with PSM. Richer than (i) but higher scope. Could pair with (i): scope-condition Signal bullet + new framing-note for relationship articulation.

**Minimalist close: Option (f) decline-inline-prose-only** — if operator judges PSM's existing named citations (project-vision.md:60+66+85) sufficient as canonical home and wants zero canon-body change. Clean closure of R-Sig-1. Honest.

**Not recommended**: (a)/(b)/(c)/(d) on earning-test/shape-fit grounds. (h) on over-deferral grounds.

---

## Step 2 Decision Form (Operator Selects)

```
STATUS: AWAITING OPERATOR DECISION (Step 2 gate)
Spore PREEXEC_SHA: 90d28fb96bf8d15d1f51bfdeb992a2a533218b6f
IC HEAD captured: f15f96f33d7384c9c169594a8525eb2a6599bd3b (pre-existing ?? tmp/ only)
PM HEAD captured: 6d4935cf1e042475fb6a1ee007fea0ac0a567d8b (pre-existing ?? tmp/ only)
Validator baseline: 9/30 PASS
Yaml: v12
Audit manifest: tmp/adr-0063-audit-manifest-2026-04-23.md (9 cases evaluated)
Decision-brief: tmp/adr-0063-decision-brief-2026-04-23.md

Key audit findings:
- 3 PSM-supporting cases / 3 SR-supporting / 3 Ambiguous (dual-phase): BKC pool-formation + IC memory-governance + joint-commitment-formation are PSM; algedonic + stigmergic + Octo-autonomous are SR; federation negotiation + PM dialogue + spec-DAG amendment are dual-phase
- Tradition-citation breadth: 1 full cluster (Enactivist) + partial support from B/C/D/E — single-tradition block MAINTAINED for primitive admission; marginally met for lighter categories
- Dual-phase structural pattern in 3 cases maps exactly to ADR-0062 Membrane dual-mode finding → per-precedent canonical choice is scope-conditioning (Option i)
- ADR-0050 Side-B relationship: PARALLEL (enactive form vs Gilbertian form); PSM is mode-of-joint-commitment-operation, not additional primitive
- ADR-0053 §3 precedent relationship: DEEPENS by closing holding-open with dedicated evaluation; named standing-objection acknowledgment in project-vision.md:65 stands unchanged
- Aggregate lean: 3 supporting / 3 SR-counter / 3 dual-phase + tradition-breadth marginally met → lean (i) scope-condition or (g) framing-note or (f) decline

Decision form (operator selects ONE primary option):
(a) primitive admission [BLOCKED — earning test dual-passage fail + tradition-breadth block]
(b) cross-cutting doctrine [BLOCKED — shape-fit POOR]
(c) mode-across-primitives [BLOCKED — shape-fit POOR]
(d) property-on-Signal [BLOCKED — Q-b joint-passage fail; use (i) instead per ADR-0062 precedent]
(e) derived glossary slug [OPEN — lightest; slug only; yaml v12→v13]
(f) decline-inline-prose-only [OPEN — clean closure; zero canon-body; recommended third choice]
(g) decompose-and-park-as-framing-note [OPEN — rich articulation; new framing-note; recommended secondary]
(h) park-with-triggers [NOT RECOMMENDED — over-deferral after R-Sig-1 holding-open]
(i) adopt-with-scope-conditioning [RECOMMENDED PRIMARY — matches ADR-0062 precedent; Signal bullet dual-mode scope]

Sub-options if (i) selected:
  i.1 prose-only (no slug; yaml v12 unchanged; Signal bullet extended with ~4 sentences)
  i.2 prose + slug `participatory-sense-making` (yaml v12→v13)

Sub-options if (g) selected:
  g.1 new framing-note `canon-framing-participatory-sense-making.md`
  g.2 extend existing `4e-cognition-and-participatory-sense-making.md` with canon-framing section

Combined (i)+(g) pairing:
  (i)+(g): scope-condition Signal bullet + framing-note for cross-primitive relationship articulation
```
