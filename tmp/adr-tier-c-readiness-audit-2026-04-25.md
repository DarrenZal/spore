# Tier C Readiness Audit — 2026-04-25 (evening, post-Phase-4-Tier-B closure)

**Status**: Read-only investigation; no commits; no admission.
**Operator authorization**: Approved by operator 2026-04-25 evening as warm-cache material de-risking work for session 4.
**Method**: Per-doc substrate-readiness check + operational-demand signal check + trigger-state verdict + open-question surfacing for operator Step-2 input on any future admission.
**Inheriting framing from**: `tmp/handoff-prompt-2026-04-26-session-4-tier-c.md` "Tier C — per-doc open-question framing" section + `tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md` §8 risks + `docs/research/connections/canon-rebuild-arc-method-retrospective.md` §9 disciplines.

**Headline finding**: Tier C is NOT defer-all. Three of four deficits have triggers fired (F7 weak / F8 strong / F9 strong); only F2 has not fired. **Recommended sequencing F7 → F9 → F8 → F2** with F2 likely declined or reclassified-as-spec rather than admitted as foundation doc.

---

## 1. Per-doc verdicts (summary table)

| F-doc | Substrate-readiness | Operational-demand | Trigger-state | Recommended path |
|-------|--------------------:|-------------------:|---------------|------------------|
| **F7** min-viable-spore-instance | HIGH | PARTIAL | **WEAK-FIRED** | Option A: extend `spore-instance-model.md` in-place; OR ADR-promote-and-extend (`architecture` → `foundation` doc_kind change). NOT new sibling foundation doc. |
| **F8** external-validation-loop | HIGH | MEDIUM-STRONG | **STRONG-FIRED** | Admit as ADR-0078 (or 0079 if F7 lands first); honest-rigor cluster-counting at Step 0.5 is gating discipline (Johar = primary-inspiration; need ≥2 non-Johar full clusters or accept ADR-0069-style decline-with-triggers). |
| **F2** translation-mapping-governance | PARTIAL | WEAK | **NOT-FIRED** | DEFER + parking-with-triggers OR reclassify-as-spec per ADR-0066 precedent (`docs/governance/concepts-registry-governance-spec.md`). |
| **F9** maintenance-economics | HIGH | MEDIUM | **STRONG-FIRED** | Admit as ADR-007X; substrate-richer than session-4 handoff framed; analogous in shape to F3 (synthesis-heavy with B5 SELECTIVE likely). |

**Note**: F7+F9 are admit-ready NOW. F8 is admit-ready PENDING cluster-counting verdict. F2 is genuinely deferred-pending operational-demand triggers per Option D3 TIERED ratification.

---

## 2. F7 — min-viable-spore-instance (WEAK-FIRED)

### Substrate evidence

- **`docs/foundations/spore-instance-model.md`** is `doc_kind: architecture` (NOT `foundation`); already covers Canon/Node/Agent/Site decomposition with composition table at L49-55.
- Doc explicitly says **"Not all four aspects required"** (L21, L95): "a canon-only instance (like this repo) is valid; a node-only instance is valid; a personal node without a site is valid." This is implicit minimum-viable language already.
- Composition table includes Dobby as **"Spore-adjacent, partially aligned"** (L54) — exactly the kind of boundary-question F7 would adjudicate.
- Composition table includes "Future Spore public instance" placeholder (L55) — anticipatory.
- F6.4 scale-transition (`docs/foundations/failure-modes.md` §4.4): "patterns working at scale N break at scale M" — F6.4 names below-threshold-as-failure category; F7 would name the threshold itself.
- F3 §6 cross-federation portability forward-ref (per ADR-0077 §233): "F7 should plan to discharge §6 cross-federation portability forward-refs from F3."
- ADR-0077 §231: "F7 minimum-viable-spore-instance may carry H3 with substrate-parents F3 + F6 AND operational-pair sibling to spore-instance-model" — explicit H3 anticipation.

### Operational-demand signals

- **Dobby "partially aligned" classification** is unresolved; current canon doesn't say what would tip Dobby into "fully aligned" or whether that matters.
- **Comparative intake comparing-to-Spore** has been a recurring pattern (Claude Code, Hermes, Flow Coding bridge notes); each implicitly asks "is X a Spore-instance-shape or Spore-adjacent?"
- **No urgent blocker** — current canon is operating without F7. Pressure exists but is latent.

### Open question for Step 2 (admission shape)

Three real options — operator must ratify:
1. **Option A — extend `spore-instance-model.md` in-place** with new §"Minimum Viable Composition" subsection. Direct edit; possibly no ADR ceremony (analogous to ADR-0059c-shape direct-edit cleanup) OR a lightweight foundation-doc-extension ADR. ~50-100 line addition. Lowest ceremony.
2. **Option B — promote `spore-instance-model.md`** from `doc_kind: architecture` to `doc_kind: foundation` AND extend with §"Minimum Viable Composition." This is a doc_kind-change ADR analogous to ADR-0042's structural-legitimacy promotion. Medium ceremony.
3. **Option C — new sibling foundation doc** `docs/foundations/min-viable-spore-instance.md`. Risk: scope-fragmentation; overlap with instance-model.md. Highest ceremony; lowest fit per scoping plan §8 Q1 lean-(a).

**My lean**: **Option B** (promote-and-extend). Rationale: instance-model.md is currently `architecture` not `foundation` — that's a real gap; F7 admission is a natural moment to fix the doc_kind. Plus the F6.4 scale-transition + F3 §6 cross-federation portability forward-refs warrant a foundation-layer treatment, not just architecture-layer description. Still LIGHTER than full new foundation doc (Option C).

### Predicted session-atomic

5–10 min if Option A; 8–15 min if Option B; 12–20 min if Option C. All faster than F3's 7m due to substrate-already-articulated.

---

## 3. F8 — external-validation-loop (STRONG-FIRED, gated by cluster-counting)

### Substrate evidence

- **F4 forward-refs to F8 explicit and multiple**:
  - `docs/foundations/representation-authority.md:43` — meta-layers (operator-ratification / historical-ADR / session-memory) flagged as F8 territory
  - `docs/foundations/representation-authority.md:115` — session-memory / claude-mem / retrospective / synthesis flagged as F8 territory
  - `docs/foundations/representation-authority.md:184` — F4 revision-trigger (iii) "F8 external-validation-loop feedback if authored"
- **F3 forward-ref to F8 explicit**: ADR-0077 §222: "F3 governance-bodies operate as the receiving-end of external-validation-loop feedback; F8 will route external feedback through governance-body channels per F3 §4.7."
- **F4 §6 I1 NARROW** explicitly defers wider-AI-interpretation routinely-consulted-as-authority to F8.
- 2 comparative-intake bridge notes exist documenting non-Spore agents reading Spore canon: `docs/research/connections/claude-code-membrane-control.md` + `docs/research/connections/hermes-agent-adversarial-self-trust.md`. Both are operational-evidence anchors.

### Operational-demand signals

- **Claude Code reads Spore canon routinely** — this very session is operational evidence of non-Spore agent reading + interpreting Spore canon for downstream coordination.
- **Hermes bridge intake** — adversarial-self-trust as comparative pattern.
- **Flow Coding bridge intake** — `docs/research/connections/claude-code-flow-coding.md` (per Apr 14 work).
- **Comparative intake protocol** (`/comparative-intake` skill) is canonical Spore-side pipeline for ingesting external-agent readings of Spore-adjacent material — F8 is the canon-side complement.

### Cluster-counting risk (gating)

Per ADR-0064 / ADR-0069 honest-rigor discipline, **Johar = primary-inspiration cannot auto-escalate**. Johar-language hits in canon docs:

- `docs/research/planning/legitimacy-and-shared-consequence-corroboration-pass-1.md:233` — uses "external validation" framing for Johar four-dimensional taxonomy
- `docs/research/planning/holding-complexity-diagnostic-split-assessment.md:200` — "external validation for a package no external source names"
- `docs/research/planning/promotion-review-packet-batch-3-holding-complexity-diagnostic.md:175,179` — same framing
- `docs/research/planning/promotion-review-prep-batch-3-holding-complexity-diagnostic.md:91,179` — same framing
- `docs/research/planning/linguistic-closure-corroboration-pass-1.md:294` — "external validation"

Johar-heavy. Discipline says: need ≥2 non-Johar full clusters for primitive-class admission; may need ≥1 non-Johar full cluster for foundation-doc-with-novel-doctrine admission (lighter threshold per F1 §4 precedent).

**Candidate non-Johar clusters to audit at Step 0.5** (NOT pre-baked here):
- (a) Epistemic-witnessing tradition (Fricker testimonial-justice, hermeneutical-injustice)
- (b) Peer-review epistemology / scientific-validation tradition (Popper falsificationism, Kuhn paradigm, Latour validation-network)
- (c) AI-interpretability tradition (XAI, mechanistic-interpretability, alignment-evaluation)
- (d) Outsider-witness tradition (anthropology, ethnography, Levinas face-of-other)

Step 0.5 audit must do honest cluster-counting before declaring F8 admit-ready.

### Open questions for Step 2

1. **Cluster-counting verdict** — does ≥1-2 non-Johar full cluster pass honest-rigor? If not, ADR-0069-style decline-with-triggers is the honest call.
2. **Scope-layer** — coordination-grammar layer (where validation-loops fire as primitive-operations) vs governance-artifact-grammar layer (where validations attach to spec-DAG nodes) vs distinct third meta-canon layer.
3. **Foundation-doc vs framing-note vs decline** — depending on cluster-counting verdict, F8 could land as: full foundation doc (if ≥2 non-Johar full clusters) / framing-note (if 1 cluster + Johar-acknowledged-residue) / decline-with-triggers (if cluster-counting fails — Johar-only is insufficient per ADR-0069 precedent).

### Predicted session-atomic

15–25 min if foundation doc admitted; ~5 min if framing-note; ~3 min if decline-with-triggers ADR.

---

## 4. F2 — translation-mapping-governance (NOT-FIRED, defer or reclassify)

### Substrate evidence

- **`docs/research/concepts-p2p-wiki.yaml` header has rich governance-prose ALREADY** (L1-L12):
  - `# status: frozen`
  - "Extensions to this vocab require a separate commit with operator approval and a version bump — do NOT silently append."
  - Per-version operator-authorization notes (v2 Phase A synthesis; v3 foundation-repair-flexibility memory; v4 ADR-0046 Phase 3b.2 operator-authorization; v7+v8 canon-rebuild-phase-3b-N operator-authorization)
  - Reference to memory file `feedback_foundation_repair_protocol_flexibility.md`
- **70 total slugs at v18** (8 admitted today across 4 versions: v15+v16+v17+v18); governance machinery operational and stable.
- **ADR-0034 interop-principles-mechanisms-split** at L45 names "explicit translation mappings" as Spore's implementation-mechanism (not principle): "Spore's specific implementation choices for realising the principles in its current federation contexts." Translation-mapping is canonically acknowledged as mechanism-layer.
- **`docs/project-vision.md:283`** explicitly mentions "Explicit translation mappings between local ontologies and shared concepts" in the Common Core, Local Variation section.

### Operational-demand signals

- **Wave-N H2 decline finding (CRITICAL)**: per ic:ADR-0019 + pm:ADR-0015 (yesterday) + ic:ADR-0020 + pm:ADR-0017 (today), **IC and PM both H2-decline concepts-registry**. They have NO sibling concepts-yaml. So **cross-repo translation-mapping pressure has NOT YET fired** because there's nothing to translate-FROM at sibling repo concepts-registry layer.
- The yaml-governance machinery IS Spore-only. F2 would be Spore-only if admitted now.
- No operational pressure has surfaced asking for foundation-doc-layer codification of yaml-governance. Header-prose is sufficient currently.

### Reclassification candidate (ADR-0066 precedent)

Per ADR-0066 K3a reclassification of `project-briefing-pattern.md → project-briefing-spec.md`: some audit-outliers are wrong-category, not wrong-content.

F2 may fit the same pattern. Yaml-governance is **operational-discipline**, not **coordination-grammar**. Operational-discipline shape is closer to spec-doc (`docs/governance/concepts-registry-governance-spec.md`) than to foundation-doc.

Structural sibling: `docs/governance/project-bootstrap-spec.md` (canonical spec-doc exemplar per ADR-0066). F2 could land at `docs/governance/concepts-registry-governance-spec.md` as parallel.

### Open questions for Step 2

1. **DEFER or RECLASSIFY-AS-SPEC** — operator chooses honest deferral with re-opening triggers vs proactive reclassification.
2. **Yaml chicken-and-egg** (per scoping plan §8 Q7) — F2 codifies yaml-governance using yaml-vocabulary; circularity risk. Manageable but worth surfacing.
3. **Re-opening triggers** if defer:
   - (a) IC or PM admits its own concepts-registry → cross-repo translation pressure fires
   - (b) Solo-operator yaml-governance machinery breaks down (multi-operator editing; conflicts; mis-attribution)
   - (c) Cross-repo audit shows translation-drift (slugs in IC/PM bridge notes don't resolve to Spore concepts-yaml entries)

### My lean

**Option A — DEFER with re-opening triggers**, NOT reclassify-as-spec yet. Reasoning: yaml header-prose IS the current spec-doctrine, and it's working. Codifying it as a separate doc would add maintenance-overhead without solving an active problem. Reclassification-to-spec is fine if operator wants closure; defer-with-triggers is honest-rigor.

### Predicted session-atomic

~3 min if decline-with-triggers ADR; ~15 min if reclassify-as-spec.

---

## 5. F9 — maintenance-economics (STRONG-FIRED; substrate-RICH, NOT "most novel")

### Substrate evidence — RICHER than session-4 handoff suggested

- **`docs/foundations/federation-protocol.md:28`** is the load-bearing anchor (already in canon). Direct quote:
  > "Reproductive-labour invisibilisation. The historically prior capture mechanism (Federici, Mies, Bresnihan, Bhattacharya, Gibson-Graham): naturalising, de-valorising, or invisibilising the care / provisioning / maintenance work that reproduces the associational practice the protocol serves. ... Federation protocol specifications must account for the visibility of reproductive work (who maintains the nodes, who provisions the infrastructure, who carries the relational work that sustains bilateral trust, who does the translation labour across ontologies) as first-order coordination content."
- This ALREADY names: (a) maintenance-labor as canon concern, (b) 5-citation tradition cluster (Federici/Mies/Bresnihan/Bhattacharya/Gibson-Graham), (c) "first-order coordination content" canonical-status. **Tradition-citation breadth is ALREADY MET by ≥5 citations** — well above the ≥2-cluster threshold.
- **F1 §4.3 Maintainer Assignment** has rich operational substrate: "every sensor has a named maintainer ... who is structurally coupled to the consequences of mis-maintenance." Rule-level decomposition (constitutional / collective-choice / operational). Cross-modality note for machine / human / AI-summary.
- **F3 §4.6 sub-shape 4 (digital-labor-as-free-gift)** explicitly defers economics to F9: "Specific compensation-protocols are pattern-layer." Foundation-DOCTRINE layer is what F9 articulates: principles that constrain pattern-layer protocols. Plus rich Kleiner + ADR-0005(b) substrate citations.
- **ADR-0002 reproductive-commoning** + **ADR-0049 reproduction-continuity primitive** = doctrinal substrate.
- **ADR-0077 §233 forward-ref**: "F9 should plan to discharge §6 maintenance-economics references from F1 maintainer-assignment + F3 §4.6 digital-labor sub-shape simultaneously."

### Operational-demand signals

- **Phase 4 intense work suggests capacity reached** — solo-operator ran 11 Agent-tool orchestrations + 5 ADR landings + Wave-N + retrospective in single day. Maintenance-burden is at-capacity-level.
- **Substitution-trap risk** (ADR-0048 mode): when canon-machinery substitutes for canon-substance, maintenance-cost grows without proportional value. F9 doctrine could constrain.
- **Canon is increasingly load-bearing** for paid work? Not yet; but Victoria workshop May-June 2026 will involve workshop-payment for participation. Pre-fires the multi-operator-paid-work scenario.

### Why session-4 handoff said "most novel" — and why that's mis-framed

Session-4 handoff at L125: "This is the most novel of Tier C — no obvious substrate-ADR to inherit from."

**Correction**: F9 substrate is HIGH per evidence above. Session-4 handoff under-counted the federation-protocol.md:28 paragraph + F1 §4.3 + F3 §4.6 forward-refs. F9 is **synthesis-heavy** like F3 was, not novel-invention like F6 was. Substrate maturity is comparable to F3 actor-governance.

### Open questions for Step 2

1. **Scope** — compensation-doctrine only? Or broader maintenance-economics including non-labor maintenance (infrastructure cost, energy, etc.)? federation-protocol.md:28 framing is broader (care + provisioning + maintenance) — suggests broader scope.
2. **B-axis** — F9 likely B5 SELECTIVE per F3 precedent (substrate is heterogeneous: labor-recognition has ADR-0002+0049 substrate; infrastructure-economics has thinner substrate; cross-federation portability has F3 §6 substrate; substitution-trap-related has ADR-0048 substrate). Step 0.5 audit should confirm.
3. **Foundation-vs-pattern boundary** — F3 §4.6 says "Specific compensation-protocols are pattern-layer." F9 should commit to the foundation-DOCTRINE (e.g., "compensation-protocols MUST be canon-legible at admission time") without prescribing the protocol.
4. **H-axis** — predicted H3 multi-way: vertical substrate to ADR-0042 + ADR-0002 + ADR-0049; horizontal operational-pair to F1 (maintainer-economics) and F3 (labor-recognition). Per ADR-0077 §231 prediction. Could be 4-way or 5-way H3 expansion.
5. **DH-PM-1 hard-pause check** — does F9 framing have implications for PM accounting-dependence held-tension? Probably weak; F9 is doctrine-layer; PM accounting-dependence is operational-instance question. Audit at Step 0.5.

### Predicted session-atomic

10–18 min if synthesis-heavy substrate-articulation (analogous to F3's 7 min + larger surface); could be longer (25 min) if H-axis multi-way expansion adds complexity. Substrate-rich but well-anchored.

---

## 6. Sequencing recommendation

**Recommended Tier C sequence**: F7 → F9 → F8 → F2

### Why this order

1. **F7 first** — lightest ceremony (Option A or B); highest substrate maturity; least decision-gate ambiguity. Quick win. Could land in 5–15 min. Establishes Tier C admit-shape (extension vs new doc).
2. **F9 second** — substrate-rich synthesis comparable to F3; cache warm from F7 + Phase 4 Tier A+B inheritance; F3 precedent for B5 SELECTIVE + multi-way H3 transferable. Predicted 10–18 min.
3. **F8 third** — gated by cluster-counting; Step 0.5 audit may produce decline-with-triggers (analogous to ADR-0069) rather than admit. Operator decision-gate is heaviest of Tier C. Sequence-late so as not to block easier admissions.
4. **F2 last (or skip)** — defer-with-triggers most likely; reclassify-as-spec possible; admit unlikely until cross-repo concepts-registry pressure fires. Sequence-last because most likely to be a defer/decline.

### Alternative: Trigger-based (Option D3 strict)

If operator wants strict TIERED discipline: only F7 + F9 admit; F8 + F2 stay deferred-pending. F8's cluster-counting is a real concern; F2's pressure has not fired. Honest-rigor admit-only-if-trigger-fires lean: 2 admissions (F7 + F9), 2 defers (F8 + F2 with re-opening triggers documented).

### Alternative: Defer-all

If operator-energy is tapped or wants Phase 5 / Tier C balance differently: **Defer-all** is legitimate. None of the 4 deficits is currently blocking operational work. Operator's Option D4 ROLLING ratification (admit when pressure fires) supports this.

---

## 7. Cross-cutting open questions for operator

These apply across multiple Tier C admissions if pursued:

1. **Should `spore-instance-model.md` be promoted from `doc_kind: architecture` to `doc_kind: foundation`?** This is a doc_kind-classification fix that's ADR-shaped. Could be bundled with F7 admission OR done as separate ADR-0078 "doc_kind classification cleanup."
2. **Has the meta-learning capstone for 2026-04-25 been fully landed?** Per session-4 handoff L152: "Meta-learning capstone update for 2026-04-25 LANDED at `70c8421` — no further update needed unless Tier C adds new precedents." Tier C admissions WILL add new precedents (B-axis evolution, H-axis fan-out, sequencing-pattern). Plan for retrospective §11 extension after Tier C closes.
3. **Tier C closes Phase 4** — at completion, Phase 5 (section-level status labels) is the next major arc. Phase 5 is corpus-wide sweep; tag-agnostic per Q6 ratification across all Phase 4 admissions (including Tier C). Plan for that.
4. **Cross-repo IC + PM Phase 2c alignment** — Tier C admissions may warrant ic:ADR-NNNN + pm:ADR-NNNN reference-heavy alignments (analogous to ic:ADR-0020 + pm:ADR-0017 from today). Light-touch per Wave-N precedent shape.

---

## 8. Method-precedent observations from this audit

This readiness-audit ITSELF surfaces method-pattern observations worth noting for future capstone update:

**Pattern 1: Readiness-audit-before-admission-arc-begins** — Tier C is the first Phase 4 tier subjected to a pre-arc readiness audit (Tier A + Tier B were ratified at scoping time but not pre-arc-audited per-doc). The audit caught 2 mis-framings from session-4 handoff: (a) F9 substrate-richness understated, (b) F2 reclassification-as-spec under-considered. Reusable: **before opening a new admission arc, audit per-doc trigger-state honestly to refine sequencing and surface mis-framings.**

**Pattern 2: Trigger-state taxonomy — STRONG-FIRED / MEDIUM-FIRED / WEAK-FIRED / NOT-FIRED** — emerges naturally from pre-arc audit. Strict TIERED ratification (Option D3) treats only STRONG-FIRED as admit-ready; honest middle path admits STRONG + MEDIUM and defers WEAK + NOT. Reusable for future Phase 5+ or Wave-N+ arcs.

**Pattern 3: Doc_kind-mismatch as canon hygiene** — `spore-instance-model.md` being `doc_kind: architecture` while functioning as foundation-layer doc is a hygiene gap. F7 admission is a natural bundling moment. Reusable discipline: **at any major admission arc, check whether doc_kind classifications across canon are correct; bundle hygiene fixes opportunistically.**

**Pattern 4: Session-4 handoff under-count corrections** — fresh-eyes audit caught 2 substrate under-counts in handoff prose (F9 "most novel" / F2 reclassification). Handoffs ARE imperfect; readiness-audits at session-N+1 give chance to refine. Reusable: **handoff prose is one input, not authoritative; substrate audit is authoritative.**

These pattern-observations can be canonized in retrospective §11 (or §9.11) when Tier C closes.

---

## 9. What this audit does NOT decide

This is a readiness-audit only. The audit:
- **Does not commit to admissions** — F7+F9 are admit-ready, but operator still ratifies axes at Step 2 of any actual admission ADR.
- **Does not pre-bake taxonomies** — per audit-then-propose discipline, child agents at admission-time must do their own Step 0.5 audit at the canon-state-then.
- **Does not set ADR numbers** — ADR-0078+ allocations happen at admission time.
- **Does not commit to Tier C scope** — operator may choose to admit subset (just F7+F9) or defer entirely.

The audit IS the Step-0-style pre-arc reconnaissance that a fresh session can read and ratify sequencing from before any admission begins.

---

## 10. Operator decision-points for session 4

1. **Ratify recommended sequencing** F7 → F9 → F8 → F2? Or alternative (trigger-based F7+F9 only / defer-all / different order)?
2. **For F7**: Option A (in-place edit) vs Option B (promote-and-extend) vs Option C (new sibling doc)?
3. **For F8**: instruct child to do honest cluster-counting at Step 0.5 with willingness to land as decline-with-triggers (ADR-0069 shape) if non-Johar full clusters fail to surface.
4. **For F2**: defer-with-triggers vs reclassify-as-spec vs admit-as-foundation-doc?
5. **For F9**: scope (compensation-doctrine only vs broader); B-axis predicted-default B5 SELECTIVE; H-axis predicted-default 4-way+ multi-way.

If session 4 operator wants to skip individual decisions: **fast-path lean** is sequence F7-Option-B → F9 → F8-honest-audit → F2-defer-with-triggers. Each child surfaces its own per-axis decision-brief at Step 2 for ratification.

---

**End readiness audit.**
