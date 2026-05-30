# ADR-0062 Decision Brief
# membrane-as-self-produced-disposition
# Date: 2026-04-23

---

## Audit Summary

### Per-Instance-Family Case Classifications (8 cases)

| Instance Family | Classification | Strength |
|----------------|---------------|----------|
| BKC Commons Membrane (stewardship labor produces the commons boundary) | Autopoiesis-active-supporting | STRONG |
| IC Memory-Stewardship Membrane (curation/attribution work produces IC layer boundaries) | Autopoiesis-active-supporting | MODERATE |
| Octo Agent Membrane (knowledge-gardening shapes agent boundary) | Ambiguous (tilts autopoiesis-active) | LOW |
| Federation Member Membership Membrane (compliance work + declarative spec) | Ambiguous (mixed) | — |
| Federation Protocol-Version Membrane (spec-DAG text-authoritative, ADR-0041) | Passive-boundary-supporting | STRONG |
| Governance Artifact Boundary (vision/agreement/policy text-declared) | Passive-boundary-supporting | STRONG |
| Spec-DAG Node Boundary (frontmatter depends_on structurally defines boundary) | Passive-boundary-supporting | STRONG |
| PM CommitmentBundle Boundary (declared at bundle-formation) | Ambiguous (tilts passive-boundary) | LOW |

**Aggregate: 2 autopoiesis-active-supporting / 3 passive-boundary-supporting / 3 ambiguous.**

**Threshold met**: ≥3 per-instance-family cases evaluated. ≥4 evaluated total per both readings. Sparse-evidence fallback NOT triggered (8 cases; 2+ per reading).

---

### Tradition-Citation Evidence

**Autopoiesis-active reading** (Traditions A + B + C):
- **A (Primary)**: Maturana & Varela 1972 — the cell membrane IS produced by the system's metabolic processes; autopoietic identity = network continuously regenerating itself including its boundaries. Applied to commons: commoning produces the commons boundary. Source: `autopoiesis-and-structural-coupling.md` primary-source citations.
- **B (Secondary)**: Bollier-Helfrich commons-as-self-produced — the commons membrane is maintained by ongoing commoning labor (stewardship, care, territorial management). Source: ADR-0053 `permeability` citation; `boundary-commoning.md`; `reproductive-commoning.md`.
- **C (Tertiary)**: Thompson 4E Enactivism (Varela-Thompson-Rosch 1991) — boundaries enacted through coupling, not pre-declared. Weaker lineage for coordination systems.

**Passive-boundary reading** (Traditions D + E):
- **D (Primary)**: Canonical Layering / ADR-0041 text-authoritative discipline — text is the artifact; graph is derived. Spec-DAG nodes, governance artifacts, protocol-version membranes are all text-authoritative; their boundaries are what their text says.
- **E (Secondary)**: Ostrom descriptive boundary analysis (Cox-1A/1B) — already admitted as `double-boundary` slug in ADR-0053; Ostrom describes social and ecological boundary analytically, not as self-produced.

**Both readings meet the ≥2 tradition threshold per reading.**

---

### Field-Membrane Internal-Consistency Assessment

**Finding**: The Field-Membrane internal-consistency argument (capstone §5 line 185) is REAL but NOT LOAD-BEARING.

- Field is "autopoiesis-resonant" in an Ostromian sense (rules-in-use constitute the action arena), not strictly in a Maturana-Varela sense. Field is constitutively-defined by what occurs in it; but Field is not described as "self-produced by the system it bounds."
- Adopting autopoiesis-active reading for Membrane would create a resonant pair with Field — but this resonance is not required by Field's current treatment. Field and Membrane are distinct primitives; honest operational asymmetry (Field: constitutively-rule-defined; Membrane: spans both self-produced and passive-boundary readings) is acceptable.
- **Implication**: The Field-Membrane argument provides additional support for (g)/(c) but does not require (a); it does not disqualify (d)/(e).

---

### Earning Test Summary

**Q-a (New operational capacity)**: MARGINAL. `membrane-as-self-produced` names a property of Membrane's production-mode, not a new coordination operation with independent governance. Contrast with ADR-0049 Reproduction-continuity (where "the thinness IS the invisibilization phenomenon" was a load-bearing argument). Here, `reproductive-commoning` (ADR-0002) + `care-commoning` (ADR-0045) already name the labor-visibility dimension at doctrine-lens level. A structural-layer slug adds depth but not new operational capacity beyond doctrine-lens.

**Q-b (Multi-scale operational implementations)**: PARTIAL. 2 genuine autopoiesis-active cases (BKC + IC); 3 clear passive-boundary cases; 3 ambiguous. Does not meet the "strong on (b)" standard of ADR-0049/0050 (4+ strong cases), but also does not fail as clearly as ADR-0061 (which had 0 admission-supporting, 4 ambiguous).

**Key structural finding**: Spore's Membrane primitive OPERATIONALLY SPANS both readings. Some Spore membranes ARE self-produced (BKC commons, IC memory-stewardship). Other Spore membranes ARE passive-boundary-declarations (spec-DAG nodes, governance artifacts, protocol versions). This is the defining fact for option selection.

---

## Options

### (a) Admit as Named Property-on-Membrane
**Move**: Add `membrane-as-self-produced` as 3rd Spore property-on-primitive (alongside holon-irreducibility + relational-identity on Holon). yaml v12→v13 with slug. Extend Membrane bullet in project-vision.md + governance-artifacts.md parallel. Update "2 properties" → "3 properties" count references.

**Files touched**: project-vision.md, docs/foundations/governance-artifacts-and-graph-projections.md, docs/research/concepts-p2p-wiki.yaml, ADR-0062 file.

**Yaml**: v13.

**Problem**: ALL Spore membranes would be implied to have `membrane-as-self-produced` as a named property — but spec-DAG nodes and governance artifacts clearly DO NOT produce their own membranes. Over-claims operational reality.

**Earning test**: Q-a MARGINAL (property, not new operation); Q-b PARTIAL (2 genuine cases). Does not meet "both conditions jointly" standard.

**Verdict**: **NOT RECOMMENDED.** Over-claims; earning test does not jointly pass.

---

### (c) Admit as Derived Glossary Slug (alongside permeability/double-boundary)
**Move**: Add `membrane-as-self-produced` as third Membrane-axis derived slug in yaml (v12→v13). Light Membrane bullet extension noting the third axis. Framing: "some membranes are self-produced by the systems they bound (commons-tradition, autopoiesis-tradition); permeability and double-boundary are analytic axes that apply to all membranes; membrane-as-self-produced names the production-mode axis that applies to autopoiesis-active cases."

**Files touched**: docs/research/concepts-p2p-wiki.yaml, project-vision.md (light), docs/foundations/governance-artifacts-and-graph-projections.md (light), ADR-0062 file.

**Yaml**: v13.

**Problem**: Without per-case scoping, readers may apply the slug to all membranes. A slug admission without scope-conditioning creates vocabulary-governance risk. But the slug's one-line definition CAN include scope-conditioning text.

**Earning test**: Q-a MARGINAL (slug admission; similar to ADR-0053 `permeability` and `double-boundary` which were also axis-admissions). Q-b PARTIAL. Same earning-test profile as permeability/double-boundary.

**Verdict**: **VIABLE if (g) is declined.** Lighter precedent than (a); scope can be carried in slug one-line definition.

---

### (d) Decline Inline-Prose-Only (per ADR-0061 precedent)
**Move**: No canon-body changes. ADR §Consequences carries: Spore's Canonical-Layering reading of Membrane is operationally sufficient for spec-DAG/governance-artifact/protocol-version membranes; autopoiesis-active reading is a principled alternative for commons-type membranes, acknowledged as standing objection (parallel to ADR-0053 §3 Signal autopoiesis-objection). yaml v12 unchanged.

**Files touched**: ADR-0062 file only.

**Yaml**: v12.

**Problem**: Loses positive articulation of the genuine autopoiesis-active operational reality in BKC/IC. Unlike ADR-0061 (where Q4 FAILED structurally across all candidates), here the autopoiesis-active reading GENUINELY APPLIES to BKC/IC cases. Pure decline loses the cross-reading articulation that the operational reality warrants.

**Earning test**: Q-a MARGINAL → decline acceptable. Q-b PARTIAL → decline acceptable but loses operational acknowledgment.

**Verdict**: **VIABLE but loses nuance.** Honest if operator judges existing doctrines (reproductive-commoning + care-commoning) sufficient. Less recommended than (e) or (g) given genuine operational split.

---

### (e) Decompose-and-Park as Framing-Note (per ADR-0055 precedent)
**Move**: New framing-note at `docs/research/connections/canon-framing-membrane-as-self-produced.md` articulating THREE readings (from ADR-0053 R-Mem-1 capstone §5 line 185): Canonical Layering (passive-boundary, default for spec-DAG/governance-artifact/protocol-version cases), Autopoiesis-active (self-produced, operational for BKC/IC/commons cases), Ostrom-double (already admitted via ADR-0053 `double-boundary`). Spore commits to Canonical Layering as default; acknowledges Autopoiesis-active as operational-in-context. ADR §Consequences cites framing-note as canonical home.

**Files touched**: new framing-note file, ADR-0062 file.

**Yaml**: v12 unchanged (no new slug).

**Problem**: ADR-0055 precedent (encounter-as-composition) fits here structurally — but encounter failed earning test (a) entirely. Here, the autopoiesis-active reading DOES operationally apply to BKC/IC. A framing-note may understate the operational reality relative to a primitive-bullet extension.

**Earning test**: Not a slug or property admission → earning test not the blocking factor for (e). The question is whether framing-note articulation is sufficient.

**Verdict**: **GOOD OPTION.** Articulates the three-reading landscape canonically without over-claiming. Does not set the primitive-bullet scope-conditioning precedent (good if operator prefers to avoid that). Framing-note path: new dedicated `canon-framing-membrane-as-self-produced.md`.

---

### (f) Park-With-Triggers (per ADR-0054 precedent)
**Move**: Defer with 3-5 numbered E-N triggers. yaml v12 unchanged.

**Problem**: ADR-0054 was appropriate for the rewilding-thesis because evidence was absent/speculative. Here, BKC/IC operational cases ARE present. Parking what's already operational is artificial — same judgment that rejected (f) for encounter when evidence existed.

**Earning test**: Not the correct shape for present-but-partial evidence.

**Verdict**: **NOT RECOMMENDED.** Evidence is present; deferral is unwarranted.

---

### (g) Adopt-With-Scope-Conditioning [NOVEL]
**Move**: Extend Membrane bullet in project-vision.md and governance-artifacts.md parallel with explicit per-case scope acknowledgment: "Some membranes in Spore's operational instance families are self-produced by ongoing commoning or stewardship labor — where the boundary's existence and character are outcomes of the community's ongoing practice (BKC commons-membrane; IC memory-stewardship-membrane); other membranes are established declaratively — where the boundary is text-authoritative by specification rather than by labor production (federation-protocol-version-membranes; governance-artifact-scope; spec-DAG node membranes). Both readings are operationally valid in Spore's grammar; which applies depends on the instantiation context." May or may not include slug admission (operator decision).

**Files touched**: project-vision.md, docs/foundations/governance-artifacts-and-graph-projections.md, ADR-0062 file. If slug included: also docs/research/concepts-p2p-wiki.yaml (v13).

**Yaml**: v13 if slug included; v12 if prose-only.

**Precedent**: ADR-0031/0032/0044 established scope-conditioning at Core Thesis level (universality-overreach). This option would establish scope-conditioning at PRIMITIVE-BULLET level — a new pattern. Analogous to how individual primitive bullets in ADR-0046 (Field rule-stratification) or ADR-0047 (Power decomposition) carry specificity about how a primitive operates — but here the scope-condition acknowledges that the primitive operates DIFFERENTLY depending on instantiation.

**Earning test**: Q-a MARGINAL → scope-conditioning does not require Q-a pass (it is not claiming a new primitive or property; it is clarifying existing primitive's operational range). Q-b PARTIAL → scope-conditioning is the correct response to partial evidence: admit the autopoiesis-active reading as operationally real-but-scoped, acknowledge the passive-boundary reading as operationally real-but-scoped.

**Endorsement check**: Does this resolve the R-Mem-1 residue honestly? YES — capstone §5 line 185 notes "Spore's membrane currently reads closer to the Canonical Layering view"; scope-conditioning would upgrade from "reads closer to" to "spans both readings with explicit scope."

**Verdict**: **RECOMMENDED as leading option.** Most honest representation of actual operational pluralism. Does not over-claim (a); does not lose positive articulation (d); does not require new framing-note infrastructure (e). Establishes a new pattern (primitive-bullet scope-conditioning) — operator must evaluate precedent-creation explicitly.

---

## Recommendation

**Primary recommendation: (g) adopt-with-scope-conditioning**

Rationale:
1. The operational evidence shows genuine pluralism — some membranes ARE self-produced (BKC, IC), others ARE passive-boundary (spec-DAG, governance artifacts). Scope-conditioning is the honest description of this reality.
2. Unlike ADR-0061 (pure structural Q4 failure → clean decline), here the autopoiesis-active reading is operationally present. Pure decline (d) loses the BKC/IC positive articulation.
3. Unlike (a) property-on-Membrane (which over-claims all membranes), scope-conditioning at the bullet level explicitly acknowledges that the property applies to some membranes but not all.
4. Establishes the principled-rule form of scope-conditioning (self-produced = ongoing-labor-constituted boundary vs. text-authoritative = declaratively-specified boundary) rather than an exhaustive enumeration — keeping the precedent general enough to extend.
5. ADR-0031/0032/0044 precedent at Core Thesis level demonstrated that scope-conditioning is a canon-legitimate tool; ADR-0062 extends it to primitive-bullet level.

**Fallback recommendation: (e) framing-note** if operator prefers not to establish primitive-bullet scope-conditioning precedent.

**Explicitly not recommended**: (a) over-claims; (f) artificial deferral; (b) structurally excluded.

---

## Per-Option Scope Estimate

| Option | Files Touched | Yaml | Session-Atomic Estimate |
|--------|--------------|------|------------------------|
| (a) | 4 files | v13 | ~120-180s |
| (c) | 3 files | v13 | ~60-90s |
| (d) | 1 file | v12 | ~20-30s |
| (e) | 2 files (new framing-note + ADR) | v12 | ~60-90s |
| (f) | 1 file | v12 | ~20-30s |
| (g) prose-only | 3 files | v12 | ~90-120s |
| (g) with slug | 4 files | v13 | ~120-150s |

---

## Step-2 Decision Form

```
STATUS: AWAITING OPERATOR DECISION (Step 2 gate)
Spore PREEXEC_SHA: 7350f0d4bf49e2fa5cb03561c194c02bf34af7f1
IC HEAD captured: f15f96f33d7384c9c169594a8525eb2a6599bd3b (status: ?? tmp/ only — no tracked modifications)
PM HEAD captured: 6d4935cf1e042475fb6a1ee007fea0ac0a567d8b (status: ?? tmp/ only — no tracked modifications)
Validator baseline: 9/30 PASS
Yaml: v12
Audit manifest: tmp/adr-0062-audit-manifest-2026-04-23.md (8 cases evaluated)
Decision-brief: tmp/adr-0062-decision-brief-2026-04-23.md
Recommendation: (g)

Key audit findings:
- 2 autopoiesis-active-supporting (BKC strong; IC moderate) / 3 passive-boundary-supporting (spec-DAG, governance-artifact, protocol-version — all strong) / 3 ambiguous (Octo tilts active; federation-member mixed; PM CommitmentBundle tilts passive)
- Tradition support: Maturana-Varela canonical + Bollier-Helfrich commons (autopoiesis-active); ADR-0041 text-authoritative + Ostrom descriptive (passive-boundary). Both readings have ≥2 traditions.
- Field-Membrane internal-consistency: argument is REAL but NOT LOAD-BEARING. Field is Ostromian-constitutive, not strictly autopoietic; honest asymmetry across primitives is acceptable.
- Earning test: Q-a MARGINAL (property of production-mode, not new operation); Q-b PARTIAL (2 genuine cases; 3 clear counterexamples). Key structural finding: Membrane operationally SPANS both readings — some membranes ARE self-produced, others ARE passive-boundary-declarations.

Decision form (operator selects):
(a) property-on-Membrane named slug — NOT RECOMMENDED (over-claims)
(c) derived glossary slug alongside permeability/double-boundary — VIABLE if (g) declined; yaml v13 + light bullet extension
(d) decline-inline-prose-only per ADR-0061 — VIABLE but loses positive articulation of BKC/IC cases
(e) decompose-and-park-as-framing-note per ADR-0055 — GOOD OPTION; new framing-note at docs/research/connections/canon-framing-membrane-as-self-produced.md
(f) park-with-triggers per ADR-0054 — NOT RECOMMENDED (evidence is present now)
(g) adopt-with-scope-conditioning [RECOMMENDED] — extend Membrane bullet with explicit per-case scope; both readings named with principled rule distinguishing self-produced (ongoing-labor-constituted) from passive-boundary (text-authoritative-declarative)

If (g) selected:
  scope-conditioning shape: [principled-rule | per-instance-family-enumeration]
    → RECOMMENDED: principled-rule ("membranes constituted by ongoing commoning/stewardship labor" vs. "membranes established by text-authoritative specification") with 2-3 example instances named parenthetically
    → ALTERNATIVE: per-instance-family-enumeration (BKC/IC vs. spec-DAG/governance-artifact/protocol-version)
  slug-inclusion: [yes/v13 | no/v12]
    → RECOMMENDED: no/v12 (scope-conditioning in prose is sufficient; slug admission without clear Q-a pass would be over-engineering)
    → ALTERNATIVE: yes/v13 with `membrane-as-self-produced` scoped in one-line definition to commons/stewardship contexts

If (e) selected:
  framing-note path: new dedicated canon-framing-membrane-as-self-produced.md

If (f) selected:
  trigger list specification needed (child will draft 3-5 E-N triggers)
```
