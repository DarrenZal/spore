---
doc_id: spore.canon-decision.downstream-bounded-parkings-cleanup
doc_kind: decision-record
status: draft
adr_number: "0059"
opened-on: 2026-04-23
closed-on: 2026-04-23
decision: edit
supported_by:
  - /Users/darrenzal/projects/spore/tmp/downstream-propagation-audit-manifest-2026-04-23.md
  - /Users/darrenzal/projects/spore/tmp/downstream-stratification-decision-brief-2026-04-23.md
  - /Users/darrenzal/.claude/plans/downstream-propagation-audit-stratification.md
  - /Users/darrenzal/.claude/plans/adr-0059-downstream-bounded-parkings-cleanup.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0029-governance-memory-framing-cleanup.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0044-core-thesis-primitive-roster-alignment.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0050-sociality-side-b-plus-primitive.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0056-phase-2c-semantic-refactoring-bundle.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0057-governance-artifacts-file-rename.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md
authorized-by: "operator directive 2026-04-22 downstream-audit Step-2 decision-gate: Option C (2-ADR split by drift-shape) + ADR-0059 scope confirmed + 3 ambiguity rulings (relates_to preserve / discourse-as-governance:41 disambiguate / Apr-3 snapshots preserve). Citation: ~/.claude/plans/downstream-propagation-audit-stratification.md §Decision (Step 2) + tmp/downstream-stratification-decision-brief-2026-04-23.md §Decision"
queue_reference: "CLAUDE.md post-Phase-3b + post-Phase-2c downstream propagation audit queue"
affects_canon:
  - docs/project-vision.md
  - docs/foundations/governance-artifacts-and-graph-projections.md
  - docs/foundations/federation-protocol.md
  - docs/foundations/lexicon/stigmergy.md
related_adrs:
  - spore:ADR-0029-governance-memory-framing-cleanup
  - spore:ADR-0035-vision-as-commitment-subtype
  - spore:ADR-0044-core-thesis-primitive-roster-alignment
  - spore:ADR-0050-sociality-side-b-plus-primitive
  - spore:ADR-0056-phase-2c-semantic-refactoring-bundle
  - spore:ADR-0057-governance-artifacts-file-rename
  - spore:ADR-0058-phase-2c-graph-projections-dual-axis-bundle
concepts:
  - governance-memory
  - intent-pressure
  - constitutional-commitment
---

# ADR-0059 — Downstream Bounded Parkings Cleanup

## Status

active (authored + activated 2026-04-23 under post-Phase-2c downstream propagation)

## Context

Following the 15-ADR canon-rebuild arc (ADRs 0044–0058) across 2026-04-22 / 2026-04-23, a downstream propagation audit was conducted to identify non-canon-layer docs carrying stale terminology from prior canon state. The audit manifest (`tmp/downstream-propagation-audit-manifest-2026-04-23.md`) categorised all hits across four drift-shape categories (A through D). Operator selected Option C (2-ADR split by drift-shape) at the Step 2 decision gate: ADR-0059 handles all mechanical downstream cleanup; ADR-0060 handles the separate semantic-weight `coordination-grammar.md` realignment.

Three ambiguity rulings were made at the same gate:
1. Frontmatter `relates_to: spore.term.intent-pressure` → **preserve** (doc_id remained valid after ADR-0056 demoted the lexicon entry to a connections bridge-note)
2. `discourse-as-governance.md:41` "a constitutional artifact that governs future action" → **update** (rewrite to "a governance artifact at the constitutional level" per ADR-0035 subtype-of-commitment distinction)
3. `docs/research/2026-04-03/*` historical snapshots → **preserve as-is** (time-stamped research corpus)

This ADR is **pure mechanical cleanup** — no new canon-moves, no primitive / doctrine / mode / property / derived-slug changes, no concepts-yaml bump. Validator baseline (9 errors / 30 warnings) holds throughout.

### Six sub-scopes

**A1 — Intent-pressure path cleanup**: ADR-0056 moved `docs/foundations/lexicon/intent-pressure.md` to `docs/research/connections/intent-pressure.md`. Relative-path links still pointing to `foundations/lexicon/intent-pressure.md` in non-canon docs are broken links; they need updating to the new path. Body-prose concept references (no path invocation) are VERIFIED-NEUTRAL and left as-is. Frontmatter `relates_to: spore.term.intent-pressure` preserved (doc_id valid throughout).

**A2 — Constitutional-artifact family-name disambiguation**: ADR-0057 renamed `constitutional-artifacts-and-graph-projections.md` to `governance-artifacts-and-graph-projections.md`. Body-prose "constitutional artifact" as family-name (the broader artifact class) needs disambiguation to "governance artifact" in non-canon docs and in the section-header `## Constitutional Artifacts` within the foundation doc. ADR-0035 "constitutional commitments" usage (visions as subtype-of-commitment) is preserved throughout.

**A3 — Federation-protocol scope-conditioning**: ADR-0031/0032/0044 established the scope-conditioning discipline for universality language. One line at `federation-protocol.md:89` — "These hold at every scale and are non-negotiable" — carries the unqualified universality pattern. Scope-conditioned to match the discipline.

**C — Governance-memory layer→pattern propagation**: ADR-0029 renamed the concept from "governance-memory layer" to "governance-memory pattern". Three live-canon docs still carry the stale "governance-memory layer" phrasing.

**D1 — Self-similarity residual in decision-memo.md**: ADR-0044 deleted the self-similarity / node-as-graph framing. One table row in `docs/synthesis/decision-memo.md:305` still cites "Spore's self-similarity principle (node-as-graph)". Reworded to current scale-nested-holons vocabulary while preserving the functional claim.

**D2 — Stale primitive counts**: ADR-0050 admitted joint-commitment as the 9th primitive. Several positioning/bridge-note docs still reference "ten primitives" (the pre-ADR-0050 count). Updated to "9 primitives" with current roster enumeration where warranted.

## Decision

Execute all six sub-scopes as a single bundled mechanical cleanup ADR. Scope frozen per stratification brief. No canon-layer semantic changes.

**Sub-scope A1 — Intent-pressure path fixes:**
- `docs/foundations/lexicon/stigmergy.md:81`: relative path `./intent-pressure.md` → `../../research/connections/intent-pressure.md`
- `docs/positioning/civic-infrastructure-convergence.md:124`: `../foundations/lexicon/intent-pressure.md` → `../../docs/research/connections/intent-pressure.md` (or repo-relative equivalent)
- `docs/positioning/hyperstition-as-coordination.md:56,87`: `../foundations/lexicon/intent-pressure.md` → `../research/connections/intent-pressure.md`
- Concept-only refs in `governance-artifacts-and-graph-projections.md:125` and `patterns/intent-publication-and-activation.md:44`: VERIFIED-NEUTRAL (no path invocation; left as-is)

**Sub-scope A2 — Constitutional-artifact family-name:**
- `docs/foundations/governance-artifacts-and-graph-projections.md`: section header `## Constitutional Artifacts` → `## Governance Artifacts`; body-prose family-name mentions reworded
- `docs/project-vision.md`: body-prose family-name mentions reworded; "constitutional commitments" (ADR-0035) preserved
- `README.md`: family-name mention reworded
- `docs/patterns/discourse-as-governance.md:41`: "a constitutional artifact that governs future action" → "a governance artifact at the constitutional level"
- `docs/positioning/hyperstition-as-coordination.md`: family-name mention reworded

**Sub-scope A3 — Federation-protocol scope-conditioning:**
- `docs/foundations/federation-protocol.md:89`: "These hold at every scale and are non-negotiable" → "These hold at the scales Spore has reached and are non-negotiable"

**Sub-scope C — Governance-memory layer→pattern:**
- `docs/README.md:3`: "governance-memory layer" → "governance-memory pattern"
- `docs/research/connections/johar-neuroplastic-field.md:126`: "governance-memory layer" → "governance-memory pattern"
- `docs/synthesis/decision-memo.md:73`: "governance-memory layer" → "governance-memory pattern"

**Sub-scope D1 — Self-similarity residual:**
- `docs/synthesis/decision-memo.md:305`: "Spore's self-similarity principle (node-as-graph) serves the same function — each holon has its own internal coordination ecology" → "Spore's holons-at-scale recursion serves the same function — each holon hosts its own internal coordination ecology"

**Sub-scope D2 — Stale primitive counts:**
- `docs/research/connections/open-civics.md:79`: "ten primitives" → "9 primitives" with updated roster enumeration
- `docs/research/connections/open-civics.md:165`: "ten primitives" → "9 primitives" with updated roster enumeration
- `docs/positioning/civic-infrastructure-convergence.md:134`: "ten primitives" → "9 primitives" with updated roster enumeration

**Out of scope** (recorded as cascade-miss parking items, not edited):
- `docs/research/connections/commons-law-and-charter-lineage.md` and other bridge notes outside the 13-file target set carrying `spore.constitutional-artifacts` doc_id references — these are ADR-0057 cascade-miss items that would require re-gating the working-tree clean preflight.
- `docs/synthesis/coordination-grammar.md` — ADR-0060 scope.
- `docs/research/2026-04-03/*` historical snapshots — preserved per ambiguity ruling.

## Consequences

### Positive
- Broken relative-path links in non-canon docs resolved (A1 path fixes).
- "Constitutional artifact" family-name disambiguation reduces reader confusion between the governance-artifact class (ADR-0057) and the ADR-0035 constitutional-commitments subtype (visions).
- "Governance-memory pattern" phrasing consistent with ADR-0029 throughout non-canon layer.
- Self-similarity / node-as-graph vocabulary eliminated from live-canon docs (D1).
- 9-primitive count consistent with ADR-0050 in positioning docs (D2).
- Validator baseline holds at 9/30; no canon-layer semantic changes; session-atomic within 30+5 minute window.

### Neutral
- ADR-0035 "constitutional commitments" / "constitutional level" usage preserved untouched throughout — disambiguation targets only the family-name usage.
- `relates_to: spore.term.intent-pressure` frontmatter preserved per ambiguity ruling (doc_id remains valid).
- Historical snapshots in `docs/research/2026-04-03/*` preserved per ambiguity ruling.

### Cascade-miss parking items (out-of-scope ADR-0057 residue)
The following files carry `spore.constitutional-artifacts` doc_id references (old doc_id before ADR-0057 rename) that were not in the 13-file target set for this ADR. Operator decides whether to address these in a follow-on ADR or treat as low-priority cleanup:
- Research bridge notes in `docs/research/connections/` outside the target set
- Any other docs surfaced by `grep -rn "spore\.constitutional-artifacts" docs/` excluding the `docs/research/canon-decisions/` archive

### Open
- ADR-0060 coordination-grammar.md realignment remains the next substantive downstream propagation work item.
- IC + PM coordinated grammar alignment (9-primitive roster + relational-identity-property + 6 derived glossary slugs) follows ADR-0060.
