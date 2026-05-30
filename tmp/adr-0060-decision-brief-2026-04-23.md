# ADR-0060 Decision Brief — Coordination Grammar Realignment
Generated: 2026-04-23  
Child agent: Claude Sonnet 4.6  
Preflight: PASS (all 7 gates)  
PREEXEC_SHA: 39db70b9ace4ffff5960d280cf92a9b9ff59d4f0  
Validator baseline: 9 errors / 30 warnings  
Audit manifest: tmp/adr-0060-audit-manifest-2026-04-23.md (10 sections classified)  

---

## Audit Summary

`docs/synthesis/coordination-grammar.md` (303 lines, dated 2026-03-28) has **three sections requiring rewrite** and **six sections that survive intact**.

### Classification at a glance

| Section | Classification | Key reason |
|---------|---------------|------------|
| §Grammar Thesis | PRESERVE | Three-layer architecture still valid |
| §Coordination Loop | PRESERVE | Synthesis-layer loop; not 1:1 with primitives by design; still correct |
| §Primitives table | **REWRITE** | Claims "11 primitives"; removes Artifact/Event/Attestation/Claim from primitive-roster; adds joint-commitment + Reproduction; Self-similarity paragraph mandatory delete |
| §Relations | PRESERVE | Relations table valid; Attestation/Artifact used as noun-types |
| §Membrane Operations | PRESERVE | All 7 operations still valid under current canon |
| §Lifecycle Transitions | PRESERVE | All lifecycles valid (Claims/Commitments/Attestations/Artifacts/Intents/Events) |
| §Graph Projections | **REWRITE** | ADR-0058 established 3-primary + 5-view-template tier structure; doc still lists 8 flat projections; stale discourse-promoted-as-8th narrative |
| §Worldview Grammar | PRESERVE | 5-layer table + test cases still valid |
| §Ground-Truth Traces | **REWRITE** | Stale "All 10 primitives" claims; honest reassessment = 7/9, 8/9, 6/9 per trace; "fractal applicability" in Trace 3 must go per ADR-0044/0056 |
| §Distillation Stack | PRESERVE | 6-layer distillation still accurate |

**6 PRESERVE / 3 REWRITE.** No DELETE sections (all content has value at synthesis layer).

### Key audit findings

1. **§Primitives table** has the most critical drift: "Eleven coordination primitives" count must become 9; rows for Artifact, Event, Attestation, and Claim must be removed from the primitive-roster (they survive as nouns/operations elsewhere in the doc); rows for joint-commitment (ADR-0050) and Reproduction (ADR-0049) must be added; Self-similarity paragraph (line 70) mandatory delete per ADR-0044/ADR-0056.

2. **§Graph Projections** is structurally misaligned with ADR-0058: the existing 8-flat-projection table must be restructured as 3 primaries (Constitutional / Commitment / Epistemic) + 5 view-templates (Roadmap DAG / Intent hypergraph / Event / Routing-flow / Discourse). The current "discourse graph promoted as 8th core projection" note is now stale (Discourse is a view-template, not a primary under ADR-0058).

3. **§Ground-Truth Traces**: Honest primitive-instantiation re-assessment under 9-primitive canon:
   - Trace 1 (Dobby relay): 7/9 (Field + Holon + Membrane + Intent + Commitment + Evidence + Signal; joint-commitment absent, Reproduction absent)
   - Trace 2 (BKC pooling): 8/9 (includes joint-commitment — pool-formation IS the paradigm Gilbertian case cited in ADR-0050; Reproduction implicit but cross-episode and not explicitly traced)
   - Trace 3 (Personal workflow): 6/9 (Field + Holon + Membrane + Intent + Commitment + Signal; joint-commitment and Reproduction expected absent for single-operator)
   - "fractal applicability" (Trace 3 assessment) must go per ADR-0044/ADR-0056

4. **§Relations, §Membrane Operations, §Lifecycle Transitions survive intact**: These sections use "Attestation," "Artifact," and "Event" as noun-types / operations / state-record concepts, not as primitive designations. This is valid synthesis-layer usage.

5. **Unique content in §Ground-Truth Traces**: The three operational traces (Dobby relay / BKC pooling / personal workflow) are not duplicated anywhere in canon. Under R.partial, they stay in-place with honest count updates. Under S, they would require migration.

---

## Options

### Option R.full — Full rewrite in place
Replace coordination-grammar.md body entirely via Write tool. All 10 sections rewritten to reflect current canon. Preserves doc_id + inbound links. Ground-Truth Traces stay in-place (updated).

**Scope:** 303 lines → approximately same length with rewritten primitives, graph projections, and trace assessments. All 10 sections touched.

**Risks:** Full Write-tool call risks losing synthesis-layer nuances in the 6 PRESERVE sections. Higher chance of inadvertent scope creep (changing preserved sections unnecessarily). Harder to review what changed.

**Session-atomic estimate:** 20–25 min (full Write tool call + verification + ADR authoring + commit pair)

**Recommendation grade: C** — available but not preferred when R.partial is tractable.

---

### Option S — Supersede-and-stub with trace migration
Replace body with brief pointer content. Ground-Truth Traces migrate to `docs/research/connections/coordination-grammar-ground-truth-traces.md`. Inline status becomes "Superseded 2026-04-23."

**Scope:** 2 Write-tool calls (stub + migration-target). Much less to write.

**Risks:** Destroys 6 PRESERVE sections worth of still-valid synthesis content (Worldview Grammar, Distillation Stack, Relations table, Membrane Operations, Lifecycle Transitions, Coordination Loop). These sections are not duplicated in project-vision.md or governance-artifacts.md. The synthesis function would be genuinely lost for the reader who reaches this doc.

**Session-atomic estimate:** 12–15 min

**Recommendation grade: D** — destroys valid content unnecessarily. The synthesis function is NOT fully absorbed by project-vision.md Core Thesis; that doc focuses on canon definitions, not the loop-comparison table, the worldview-layer test cases, or the operational traces.

---

### Option R.partial — Targeted Edit-tool per-section rewrite (RECOMMENDED)
PRESERVE the 6 intact sections verbatim. REWRITE the 3 drifted sections using Edit tool:
1. **§Primitives table**: Remove stale header + 4 non-primitive rows; add joint-commitment + Reproduction rows; delete Self-similarity paragraph.
2. **§Graph Projections**: Restructure 8-flat table to 3-primary + 5-view-template format per ADR-0058; remove stale discourse-promoted note; update DAG paragraph.
3. **§Ground-Truth Traces**: Update primitive counts in trace assessments; delete "fractal applicability"; add joint-commitment note for Trace 2 BKC.

**Scope:** 3 targeted Edit-tool operations. 6 sections untouched verbatim. Status line + date updated.

**Risks:** Slightly higher execution complexity (3 separate Edit calls vs. 1 Write call). Mitigated by clear section boundaries.

**Session-atomic estimate:** 15–20 min

**Recommendation grade: A** — correct option. Most precise; preserves valid synthesis; makes targeted corrections; tractable within session-atomic window.

---

## Recommendation

**Option R.partial.** Six of ten sections survive the audit intact and contain unique synthesis content not duplicated in canon-layer docs. Three sections have clearly scoped drift requiring targeted correction. Edit-tool per-section execution is precise and reviewable. Option S destroys too much valid content; Option R.full is higher-risk with no material benefit over R.partial.

**Pre-specified defaults apply unless operator overrides at Step 2:**
- Cascade-miss inheritance: EXCLUDE (5 ADR-0059 flagged files deferred to ADR-0059a)
- Post-edit status line: `**Status:** Active — updated 2026-04-23 (9-primitive canon alignment per ADR-0060)` + `**Date:** 2026-04-23`
- No YAML frontmatter introduction
- tmp/ artifacts stay untracked

---

## Step-2 Decision Form

Operator selects and returns:

```
(a) Option: R.partial [default] | R.full | S | custom
(b) Section dispositions (R.partial default):
    - §Primitives table: REWRITE ✓
    - §Graph Projections: REWRITE ✓
    - §Ground-Truth Traces: REWRITE ✓
    - All other sections: PRESERVE ✓
    Override any section? (e.g. "also rewrite §Relations to add joint-commitment relation")
(c) [if S] Migration target path: docs/research/connections/coordination-grammar-ground-truth-traces.md | custom
(d) Cascade-miss inheritance: EXCLUDE [default] | INCLUDE (fold in 5 ADR-0059 flagged files)
(e) Status line: accept default | custom wording
(f) Optional enrichment authorization:
    - Add joint-commitment lifecycle row to §Lifecycle Transitions? YES | NO [default]
    - Add Reproduction lifecycle row to §Lifecycle Transitions? YES | NO [default]
    - Add permeability/double-boundary notes to §Membrane Operations? YES | NO [default]
    - Add modes-across-primitives paragraph to §Primitives section? YES | NO [default]
```

## Decision

[AWAITING OPERATOR INPUT]
