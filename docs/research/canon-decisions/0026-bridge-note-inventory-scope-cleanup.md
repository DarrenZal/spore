---
doc_id: spore.canon-decision.bridge-note-inventory-scope-cleanup
doc_kind: decision-record
status: active
adr_number: "0026"
opened-on: 2026-04-21
closed-on: 2026-04-21
covers:
  - F-032
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-capstone:R1
  - spec:spore.corpus-review.research-canonical-layering:R1
r_claim_statement: |
  The bridge-note inventory must contain only genuine bridge notes. Research notes that are actually `canon_framing` or `field_scan` artifacts should be tracked in their own inventories so deterministic bridge-note sampling does not consume quota on meta-notes.
supported_by:
  - docs/research/planning/corpus-foundational-review-findings.md:1043-1069
  - docs/research/planning/canon-review-protocol.md:64-69
  - docs/research/planning/learning-field-intake-protocol.md:79-90
  - docs/research/planning/learning-field-intake-protocol.md:168-169
  - tmp/canon-framing-inventory.tsv:2-8
  - tmp/field-scan-inventory.tsv:2-4
  - docs/research/connections/canon-framing-boundary-theory-unifier.md:2-4
  - docs/research/connections/p2p-wiki-field-scan.md:2-5
  - docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md:2-5
  - docs/research/connections/p2p-wiki-post-intake-synthesis.md:2-5
authorized-by: ""
queue_reference: "Phase 7 round-bridge-note-inventory-boundary (F-032)"
affects_canon:
  - tmp/bridge-note-inventory.tsv
  - tmp/canon-framing-inventory.tsv
  - tmp/field-scan-inventory.tsv
related_adrs: []
shared_framing: ""
concepts:
  - bridge-note
  - canon-framing
  - field-scan
---

# ADR-0026 — Bridge-Note Inventory Scope Cleanup

## Status

active (drafted and activated 2026-04-21 for `round-bridge-note-inventory-boundary`)

## Context

F-032 identifies a deterministic-sampling problem in `tmp/bridge-note-inventory.tsv`: the file is acting as if every research note under the bridge-note corpus path is itself a bridge note.

The current inventory proves that `doc_kind: research` plus the broad `spore.connection.*` doc-id family is not a sufficient admission rule. Both `canon_framing` notes and `field_scan` meta-notes use the same top-level research carrier, and some of the field-scan artifacts even contain review claims. If the inventory stops at path family or claim presence, deterministic sample passes will spend bridge-note quota on framing or synthesis artifacts instead of page-grounded bridge notes.

The intake protocol already contains the boundary needed to fix this. A bridge note is a research note whose frontmatter declares `research_subkind: bridge_note`. Cross-bridge-note syntheses are separately classified as `research_subkind: field_scan`. Canon-framing notes are a separate research artifact class carried under the reserved `canon-framing-` doc-id slug family. This ADR applies that existing distinction to the inventory surface; it does not invent a new protocol rule.

## Decision

Clean the bridge-note inventory so it only contains genuine bridge notes, and preserve the out-of-scope rows in dedicated inventories.

### Bridge-note inventory boundary

A row belongs in `tmp/bridge-note-inventory.tsv` only if the underlying document satisfies all of these checks:

1. `doc_kind: research`
2. `doc_id` matches the bridge-note carrier family (`<project>.connection.<slug>`) without using the reserved `canon-framing-` slug prefix
3. frontmatter declares `research_subkind: bridge_note`
4. the body follows the bridge-note claim-register schema, and any review claims present use the bridge-note `**R<n>** ...` format

Rule 4 is format-sensitive rather than count-sensitive. Some legitimate bridge notes in the current inventory have zero review claims; that does not reclassify them. A note that carries review claims still remains out of scope if its declared subkind is `field_scan` or `canon_framing`.

### Misclassified rows removed from the bridge-note inventory

| Path | Artifact class | Why out of scope |
|---|---|---|
| `spore/docs/research/connections/canon-framing-boundary-theory-unifier.md` | `canon_framing` | Shared canon-framing note, not a bridge note |
| `spore/docs/research/connections/canon-framing-collective-agency.md` | `canon_framing` | Shared canon-framing note, not a bridge note |
| `spore/docs/research/connections/canon-framing-coordination-substrate.md` | `canon_framing` | Shared canon-framing note, not a bridge note |
| `spore/docs/research/connections/canon-framing-decentralization-myth-bundle.md` | `canon_framing` | Shared canon-framing note, not a bridge note |
| `spore/docs/research/connections/canon-framing-pluriversal-incommensurability.md` | `canon_framing` | Shared canon-framing note, not a bridge note |
| `spore/docs/research/connections/canon-framing-reproductive-commoning.md` | `canon_framing` | Shared canon-framing note, not a bridge note |
| `spore/docs/research/connections/canon-framing-three-layer-coordination-stack.md` | `canon_framing` | Shared canon-framing note, not a bridge note |
| `spore/docs/research/connections/p2p-wiki-field-scan.md` | `field_scan` | Tier 1a meta-synthesis; protocol classifies it as field scan rather than bridge note |
| `spore/docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md` | `field_scan` | Capstone synthesis across bridge notes, not a page-grounded bridge note |
| `spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md` | `field_scan` | Post-intake synthesis across bridge notes; review claims do not override the `field_scan` boundary |

### Split inventories created

- `tmp/canon-framing-inventory.tsv` now carries the 7 removed `canon_framing` rows
- `tmp/field-scan-inventory.tsv` now carries the 3 removed `field_scan` rows

## Rationale

This is an inventory hygiene repair, not a content judgment on the removed notes. The ten rows remain valid research artifacts; they were simply stored in the wrong bucket.

Splitting the rows is narrower than deletion-only cleanup. It preserves the metrics already computed for those notes, keeps the bridge-note inventory deterministic again, and gives later audit passes an obvious place to extend if canon-framing or field-scan sampling becomes a first-class workflow.

No protocol edit is required in this round. `learning-field-intake-protocol.md` already defines the bridge-note versus field-scan distinction clearly enough for the inventory boundary to be enforced at the TSV layer.

## Consequences

- `tmp/bridge-note-inventory.tsv` now drops 10 out-of-scope rows and contains 84 data rows instead of 94
- `tmp/canon-framing-inventory.tsv` preserves the 7 removed canon-framing rows
- `tmp/field-scan-inventory.tsv` preserves the 3 removed field-scan rows
- Deterministic bridge-note sampling no longer spends quota on canon-framing or field-scan meta-notes
- The round leaves `learning-field-intake-protocol.md` unchanged because the existing bridge-note definition already supports the cleanup

## Evidence

- F-032 evidence gate: pass
  - `tmp/bridge-note-inventory.tsv` contained 10 out-of-scope rows before cleanup: 7 `canon_framing` rows (inventory lines 7-13) and 3 `field_scan` rows (inventory lines 65-67)
  - `docs/research/connections/canon-framing-boundary-theory-unifier.md:2-4` shows the first family declares `research_subkind: canon_framing`
  - `docs/research/connections/p2p-wiki-field-scan.md:2-5`, `docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md:2-5`, and `docs/research/connections/p2p-wiki-post-intake-synthesis.md:2-5` show the second family declares `research_subkind: field_scan`
  - `docs/research/planning/learning-field-intake-protocol.md:79-90` defines bridge notes as `research_subkind: bridge_note`
  - `docs/research/planning/learning-field-intake-protocol.md:168-169` explicitly reserves `research_subkind: field_scan` for cross-bridge-note syntheses
  - `docs/research/planning/canon-review-protocol.md:64-69` requires ADR traceability to resolve to bridge-note doc_ids rather than derivative queue artifacts, reinforcing the need for the bridge-note corpus to contain only true bridge-note carriers
- Distinct evidence count: 10
- Publicly-verifiable evidence count: 10

## Diff summary

- `tmp/bridge-note-inventory.tsv`: removed exactly 10 out-of-scope rows
- `tmp/canon-framing-inventory.tsv`: new 7-row inventory for canon-framing artifacts previously mixed into the bridge-note corpus
- `tmp/field-scan-inventory.tsv`: new 3-row inventory for field-scan artifacts previously mixed into the bridge-note corpus
