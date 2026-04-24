---
doc_id: spore.canon-decision.downstream-cascade-miss-cleanup
doc_kind: decision-record
status: active
adr_number: "0059a"
opened-on: 2026-04-24
closed-on: 2026-04-24
decision: edit
supported_by:
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0057-governance-artifacts-file-rename.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0059-downstream-bounded-parkings-cleanup.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md
authorized-by: "operator directive 2026-04-24 ADR-0065 close-out Step 2 warm-down: ADR-0059a scope ratified in ADR-0059 §Consequences parking (5 files / ~8 edits constitutional-artifacts cascade-miss cleanup; 3 commons-law prose + 4 singleton file refs; 1 preserve per historical-context determination)"
related_adrs:
  - spore.canon-decision.governance-artifacts-file-rename
  - spore.canon-decision.downstream-bounded-parkings-cleanup
  - spore.canon-decision.pattern-library-infrastructure-spec
---

# ADR-0059a: Downstream cascade-miss cleanup (constitutional-artifacts → governance-artifacts follow-on)

## Context

ADR-0057 renamed the `constitutional-artifacts` foundation doc and primitive to `governance-artifacts`. ADR-0059 executed the mechanical cleanup across 13 target files per strict-scope rule; 5 cascade-miss items were flagged in ADR-0059 §Consequences for follow-on resolution (declined silent-scope-expansion to preserve plan-integrity):

- `docs/research/connections/commons-law-and-charter-lineage.md:71, 131, 150` (3 primitive-prose refs)
- `docs/research/planning/human-economy-batch-2-prep.md:33` (1 family-name ref)
- `docs/research/planning/instrumentation-evidence-design-batch-1.md:91 + :104` (1 section header + 1 primitive-prose ref)
- `docs/research/connections/johar-brain-self-rewriting-field.md:112` (1 primitive-prose ref)
- `docs/research/connections/intent-pressure.md:20` (1 primitive-prose ref in concept definition)

ADR-0059a executes the warm-down cleanup post-ADR-0065 landing per operator directive ("ADR-0059a cascade-miss scope is ratified in yesterday's plan parking; Expected session-atomic ~12s per ADR-0059 precedent; 5 files / ~8 edits").

## Decision

Mechanical rename `constitutional-artifacts` / `Constitutional Artifacts` / `constitutional artifact` / `constitutional-artifact` → `governance-artifacts` / `Governance Artifacts` / `governance artifact` / `governance-artifact` in Spore-primitive references across 5 parking-list files. Honor historical-context preservation rule: legal-concept references to Magna Carta / Charter of the Forest era "constitutional artifacts" (generic legal noun phrase) remain as-is; only Spore-primitive references updated.

**Files edited (8 edits across 5 files)**:

1. `docs/research/connections/commons-law-and-charter-lineage.md:71` — 2 edits: backticked Spore-primitive (`` `constitutional-artifacts` → `governance-artifacts` ``) + "constitutional-artifact primitives" → "governance-artifact primitives"
2. `docs/research/connections/commons-law-and-charter-lineage.md:150` — 1 edit: R-claim prose `` `constitutional-artifacts` primitive `` → `` `governance-artifacts` primitive `` (R-claim `[target:]` field was already correct at `spore.governance-artifacts`; prose was lagging)
3. `docs/research/planning/human-economy-batch-2-prep.md:33` — 1 edit: Spore-primitive family-name "constitutional artifacts (commitment ecology)" → "governance artifacts (commitment ecology)"
4. `docs/research/planning/instrumentation-evidence-design-batch-1.md:91` — 1 edit: section header "### 2.5 Constitutional Artifacts" → "### 2.5 Governance Artifacts"
5. `docs/research/planning/instrumentation-evidence-design-batch-1.md:104` — 1 edit: 2 substrings in paragraph: "Constitutional artifacts are well-documented" → "Governance artifacts are well-documented" + "No constitutional artifact has yet" → "No governance artifact has yet"
6. `docs/research/connections/johar-brain-self-rewriting-field.md:112` — 1 edit: "Spore's constitutional artifacts and governance memory" → "Spore's governance artifacts and governance memory"
7. `docs/research/connections/intent-pressure.md:20` — 1 edit: concept-definition text "what constitutional artifacts say should be true" → "what governance artifacts say should be true"

**Preserved (historical-context determination; 1 parking-list entry)**:

- `docs/research/connections/commons-law-and-charter-lineage.md:131` — generic legal noun phrase "constitutional artifacts can be eroded incrementally" refers to historical 13th-century English charters (Charter of the Forest erasure context), NOT Spore's primitive. Changing to "governance artifacts" would introduce historical anachronism. Parking-list flag was a false-positive (grep scanned without distinguishing Spore-primitive refs from legal-concept refs). Re-confirmed in execution audit.

## Consequences

### Scope honored

- Strict-scope rule preserved per ADR-0059 discipline: only the 5 parking-list files touched; no silent-scope-expansion.
- Historical-context preservation discipline applied: false-positive L131 parked flag re-classified as preserve-no-edit.

### Newly-discovered cascade-miss items in commons-law (ADR-0059b parking)

During execution audit, the same file (`commons-law-and-charter-lineage.md`) surfaced 3 additional Spore-primitive references outside the original parking-list scope (L71/131/150):

- `commons-law-and-charter-lineage.md:53` — "Spore's `constitutional-artifacts` primitive" (introduction)
- `commons-law-and-charter-lineage.md:63` — "constitutional-artifact lineage" (methodology paragraph)
- `commons-law-and-charter-lineage.md:117` — "Spore's `constitutional-artifacts` primitive" (disposition paragraph)

These 3 refs were NOT in the ADR-0059 §Consequences parking-list. Options: (a) accept in-file inconsistency (L71/150 updated, L53/63/117 not) until ADR-0059b; (b) silently expand ADR-0059a scope to include them. Strict-scope rule per ADR-0059 precedent chose (a). **Parked as ADR-0059b (LOW priority): commons-law-and-charter-lineage.md L53/L63/L117 in-file consistency cleanup**. Timely resolution recommended but not critical (file remains internally partially-migrated until ADR-0059b executes).

### Validator

- Validator baseline 9/30 held pre + post (exact per ADR-0065 AC25 discipline).
- No new dangling references introduced.

### Canon-method emergence

- **Historical-context preservation discipline** (new sub-pattern of mechanical-cleanup ADRs) — when grep-based parking-list flags a reference that turns out to be a generic term (not Spore-primitive), execution-audit re-classifies as preserve. Honest acknowledgment in §Consequences that parking-list was imperfect. Inheritable by any future rename-cascade ADR.
- **In-file partial-migration acceptance** — strict-scope rule outperforms silent-expansion even when it leaves in-file inconsistency. The inconsistency is itself a legible parking marker (signals ADR-0059b work remains).

## Alternatives considered

- **Scope expansion to include L53/L63/L117**: rejected per strict-scope rule (ADR-0059 precedent). Parked for ADR-0059b.
- **Bundle with ADR-0066 (K4 project-briefing-pattern disposition)**: rejected — structurally distinct work (cascade-miss rename vs audit-outlier disposition). Conflation would obscure both; separate ADRs preserve clarity.
- **Defer entirely until next canon-review pass**: rejected per operator directive 2026-04-24 warm-down scope ratification.

## References

- `docs/research/canon-decisions/0057-governance-artifacts-file-rename.md` (original rename decision)
- `docs/research/canon-decisions/0059-downstream-bounded-parkings-cleanup.md` (Category A mechanical cleanup; §Consequences parking-list source)
- `docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md` (same-session landing context; warm-down after ADR-0065 close-out)
- Parking-list files (5): commons-law-and-charter-lineage.md / human-economy-batch-2-prep.md / instrumentation-evidence-design-batch-1.md / johar-brain-self-rewriting-field.md / intent-pressure.md
