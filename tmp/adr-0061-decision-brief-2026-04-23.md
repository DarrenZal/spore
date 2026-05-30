# ADR-0061 Decision Brief — asymmetric-joint-commitment slug disposition
Generated: 2026-04-23

## Audit Summary

**5 candidates evaluated** (see `tmp/adr-0061-audit-manifest-2026-04-23.md` for full detail).

| Candidate | Q1 (Gilbertian?) | Q2 (Asymmetric?) | Q3 (Name adds?) | Q4 (Distinct surface?) | Classification |
|---|---|---|---|---|---|
| 1. Federation hub-and-spoke | PASS | PASS | PARTIAL | FAIL | AMBIGUOUS |
| 2. BKC pool stewardship | PARTIAL | PASS | PARTIAL-NO | FAIL | DECLINE-SUPPORTING |
| 3. Elder-care arrangement | PARTIAL | PASS | PARTIAL | FAIL | AMBIGUOUS |
| 4. Land-treaty (state/indigenous) | PASS | PASS | PARTIAL | FAIL | AMBIGUOUS |
| 5. IC memory stewardship | AMBIGUOUS | PASS | CONDITIONAL | FAIL | AMBIGUOUS |

**Aggregate: 0 admission-supporting / 1 decline-supporting / 4 ambiguous → lean (d) decline admission.**

**Key finding on Q3 (the semantic heart):** "asymmetric-joint-commitment" is already present as canon prose **in the canon body** — ADR-0050 lines 137/215, project-vision.md line 57 joint-commitment bullet, governance-artifacts-and-graph-projections.md line 44. The composition is not a gap; it is a named-but-not-slugged composition that ADR-0050 explicitly deferred "unless operational pressure surfaces." 

**Finding on Q4 (the earning-test gate):** Zero candidates demonstrate a protocol surface that is not the union of ADR-0050 (form-joint-commitment / rescind-by-concurrence / hold-accountable-via-demand-right / extend-joint-commitment) + ADR-0047 Layer 2 (asymmetric-binding terms declared at commitment-formation). Earning test (a) FAILS across all candidates: no separable protocol surface specifiable for "asymmetric-joint-commitment" beyond the component primitives.

**Operational pressure assessment:** The 4 ambiguous candidates show the composition IS real and operationally present (federation hub-and-spoke, land-treaty, IC stewardship). But "operational presence of the composition" ≠ "operational pressure for a distinct slug" when the composition is already named in canon prose. The slug would add YAML vocabulary governance stability, not semantic expressive capacity. This is the same logic by which ADR-0052 declined to slug `asymmetric-reciprocity-pair` even though the asymmetric-reciprocity composition is real — scope-bleed avoidance + composition-machinery-already-present principle.

---

## Options

### (a) Derived glossary slug admission
Admit `asymmetric-joint-commitment` as derived glossary slug in `docs/research/concepts-p2p-wiki.yaml` (v12 → v13). Author framing-note (extend existing `canon-framing-derived-terms-reciprocity-trust.md` or create new dedicated file).

**Files touched:** `docs/research/concepts-p2p-wiki.yaml` + optional framing-note file.
**Yaml bump:** v12 → v13.
**Scope:** Minimal admission. No canon-body changes (composition already in canon prose).
**Case for:** Vocabulary governance stability; allows bridge-note authors to reference `concept: asymmetric-joint-commitment` cleanly; consistent with how `reciprocity` + `trust` were slugged even though they're derived-terms.
**Case against:** Earning test (a) fails — no distinct protocol surface. The composition is already named in canon prose with equivalent expressive capacity. ADR-0048's parsimony-as-earning-test-outcome discipline requires passing the test; slugging a fully-decomposable composition that already appears in canon prose sets a precedent for composition-naming without earning-test discipline.
**Recommendation against** unless operator believes vocabulary governance is sufficient justification independent of earning-test.

### (b) Mode-across-primitives
Admit `asymmetric-joint-commitment` as a mode-across-primitives alongside expressive-power + constructed-power.

**Files touched:** `docs/project-vision.md` + `docs/foundations/governance-artifacts-and-graph-projections.md` + yaml.
**Yaml bump:** v12 → v13.
**Case against (strong):** Modes are qualities of operation (per ADR-0050 method-insight iii: "modes are qualities of operation, not compositions of operations"). Asymmetric-joint-commitment is a composition (ADR-0047 Layer 2 + ADR-0050) applied to specific instances — it is not a quality of how any primitive operates in general. Option (b) category-fit is wrong by the canon's own mode-category definition. **REJECT per category-fit criteria.**

### (c) Subtype (declined per precedent)
Decline per Phase 3b scope-bleed discipline (ADR-0052). Sub-typing joint-commitment would inflate primitive taxonomy.

**Files touched:** ADR-0061 only.
**Case for:** Clean refusal. 
**Case against:** Does not record the substantive audit findings or articulate when the composition IS canon-legible. Less informative than Option (d).
**Recommendation: not preferred** — Option (d) is more substantive and gives the same canonical outcome with better articulation.

### (d) Decline admission — decomposable (RECOMMENDED)
Decline slug admission per parsimony-as-earning-test-outcome (ADR-0048). The composition is fully articulable by existing canon machinery — indeed, already articulated in ADR-0050 §Consequences and canon body. ADR-0061 records the decline rationale + articulates the canon-legible composition cases in §Consequences.

**Files touched:** ADR-0061 file only.
**Yaml bump:** None — yaml holds at v12.
**Framing-note extension: REQUIRED** (per plan §Step 3(d): "extension REQUIRED IF audit surfaces operationally-relevant asymmetric-joint-commitment-composition cases that warrant canonical articulation even without slug admission"). 4 ambiguous candidates surfaced operationally-relevant cases. HOWEVER:
- Extending `canon-framing-derived-terms-reciprocity-trust.md` is a POOR fit (that note is about reciprocity/trust derived-term composition; adding asymmetric-joint-commitment analysis would blur scope).
- Creating a new dedicated framing-note (`canon-framing-asymmetric-joint-commitment.md`) may be over-engineering for a decline outcome — the cases are adequately articulable in ADR-0061 §Consequences prose.
- **Child recommendation: encode the articulation in ADR-0061 §Consequences prose only (no separate framing-note file). The four operationally-relevant composition cases are documented inline in the ADR body, which is the canonical provenance location per Step 0.5 authoritative rule. This keeps framing-note creation for admission-cases only (ADR-0052 established that pattern for derived-ADMIT outcomes; Option (d) is a decline and the ADR body is the appropriate home).**

Sub-option on framing-note:
- (d-1): Articulate in ADR-0061 §Consequences prose only — **child recommendation**
- (d-2): Also extend existing `canon-framing-derived-terms-reciprocity-trust.md` with a brief "Beyond three-mode reciprocity: asymmetric-joint-commitment as unlisted composition" paragraph — OPTIONAL
- (d-3): Create new dedicated framing-note `canon-framing-asymmetric-joint-commitment.md` — OPTIONAL, adds overhead for a decline

### (e) Park with triggers
No slug admission; ADR records parking + specific operationally-falsifiable triggers.

**Files touched:** ADR-0061 file only.
**Yaml bump:** None.
**Case for:** When candidates are ambiguous but suggestive. Allows re-opening if operational pressure grows.
**Case against:** Plan rubric specifies Option (e) for "≥1 robust case + ≥1 ambiguous" scenarios. Here there are 0 robust cases. Further, parking implies the earning-test was borderline and might pass with more evidence; but the Q4 failure (no distinct protocol surface) is structural, not evidence-dependent. More evidence will not create a distinct protocol surface. Option (d) is cleaner: this is a decline, not a park.
**Not recommended** — the Q4 structural failure is not trigger-resolvable by more evidence of operational pressure alone.

---

## Per-option scope summary

| Option | Yaml | Canon-body | New ADR file | Framing-note | 
|---|---|---|---|---|
| (a) | v12→v13 | none | Yes | REQUIRED |
| (b) | v12→v13 | project-vision.md + gov-artifacts.md | Yes | optional |
| (c) | none | none | Yes (minimal) | none |
| **(d)** | **none** | **none** | **Yes (substantive decline)** | **REQUIRED per plan default (d-1: in ADR body prose only)** |
| (e) | none | none | Yes (with triggers) | none |

---

## Recommendation

**Option (d) decline admission** with sub-option **(d-1): articulate composition cases in ADR-0061 §Consequences prose only, no separate framing-note file.**

**Rationale:**
1. Earning test (a) fails across all 5 candidates: no distinct protocol surface beyond union of ADR-0050 + ADR-0047 Layer 2.
2. The composition is already named in canon prose (ADR-0050:137, ADR-0050:215, project-vision.md:57, governance-artifacts.md:44) — the slug adds vocabulary governance but no expressive capacity.
3. 0 robust admission-supporting candidates; 1 decline-supporting; 4 ambiguous. Lean (d) per plan rubric.
4. Q4 failure is structural (no distinct protocol surface), not evidence-dependent — Option (e) park-with-triggers would be artificial because no plausible trigger generates a distinct protocol surface.
5. Parsimony-as-earning-test-outcome (ADR-0048) is the discipline: decline is the canonically-clean outcome when test fails.
6. BKC pool stewardship analysis reveals the composition resolves more faithfully into two distinct acts (joint-commitment formation + asymmetric-commitment stewardship) than into one fused asymmetric-joint-commitment — supporting the decomposability case.

**Framing-note decision deferred to operator:** Child recommends (d-1) — articulation in ADR-0061 §Consequences body only. Operator may choose (d-2) to also extend the reciprocity-trust framing note if cross-referencing the "asymmetric-joint-commitment composition available but undeclined" is valuable for bridge-note authors.

---

## Step 2 Decision Form

```
DECISION (operator fills in):
Option: [ (a) | (b) | (c) | (d) | (e) ]
If (d): framing-note sub-option: [ (d-1) prose-only | (d-2) extend-reciprocity-trust-framing-note | (d-3) new-dedicated-framing-note ]
If (a): framing-note path: [ extend-existing | new-dedicated ]
If (e): trigger list: [E-1: ..., E-2: ..., E-3: ...]
```

Note: Operator selection authorizes Step 3 execution. Session-atomic window begins at Step 3.
