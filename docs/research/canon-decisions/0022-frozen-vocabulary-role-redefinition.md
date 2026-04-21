---
doc_id: spore.canon-decision.frozen-vocabulary-role-redefinition
doc_kind: decision-record
status: active
adr_number: "0022"
opened-on: 2026-04-20
closed-on: 2026-04-20
covers:
  - F-028
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-canonical-layering:R1
  - spec:spore.corpus-review.research-governance-process:R1
r_claim_statement: |
  `docs/research/concepts-p2p-wiki.yaml` should be governed as the frozen cross-project concept vocabulary for ADR `concepts:` entries, shared framing notes, and bridge-note R-claim `concept:` values across Spore, Intelligence Commons, and Poietic Match; amendments to that surface require explicit vocabulary-governance rules rather than intake-local drift.
supported_by:
  - docs/research/planning/reframing/reframing-frozen-vocabulary-role.md
  - docs/research/concepts-p2p-wiki.yaml:1-10
  - docs/research/planning/canon-review-protocol.md:244-250
  - docs/research/planning/corpus-foundational-review-methodology.md:107-110
  - docs/research/corpus-review/research-canonical-layering.md:178-178
  - docs/research/corpus-review/research-governance-process.md:20-20
  - tmp/meta-corpus-inventory.tsv
authorized-by: reframing-frozen-vocabulary-role
queue_reference: "Phase 7 reframing-frozen-vocabulary-role (F-028)"
affects_canon:
  - docs/research/concepts-p2p-wiki.yaml
  - docs/research/planning/canon-review-protocol.md
related_adrs:
  - spore:ADR-0011-canon-review-protocol-v3-governance-hardening
shared_framing: ""
concepts:
  - memory-governance
---

# ADR-0022 — Frozen Vocabulary Role Redefinition

## Status

active (drafted and activated 2026-04-20 under `reframing-frozen-vocabulary-role`)

## Context

F-028 identifies role-definition drift. `docs/research/concepts-p2p-wiki.yaml` still describes itself as a P2P Foundation wiki intake artifact, but canon-review v2 and the broader meta-corpus already use it as the legality gate for cross-project concept references. The artifact is therefore carrying governance weight above its declared scope. `tmp/meta-corpus-inventory.tsv` already admits it as `frozen-concepts`, and the methodology already treats it as meta-corpus infrastructure rather than disposable intake scaffolding.

The missing piece is not a new slug set. The missing piece is governance. The file needs a purpose declaration matching its actual scope plus a named rule surface for how admissions, aliases, deprecations, and version bumps happen. Prototype 2's ADR-0011 hardened `canon-review-protocol.md` as a constitutional carrier but did not add this vocabulary-governance shell. This bundle closes that gap.

## Decision

Redefine `docs/research/concepts-p2p-wiki.yaml` as the frozen cross-project vocabulary carrier without renaming the file or minting new slugs.

### Purpose declaration

Replace the header purpose line so the file declares itself as the canonical concept vocabulary governing ADR `concepts:` entries, shared framing notes, and bridge-note R-claim `concept:` values across Spore / Intelligence Commons / Poietic Match.

### Governance carrier

Fold vocabulary governance into `docs/research/planning/canon-review-protocol.md` by adding a new §14 `Vocabulary governance` section.

The new §14 defines five rules:

1. Admission
2. Alias
3. Deprecation
4. Version-bump
5. Carrier and cooling

### Out of scope

This ADR does not:

- rename `docs/research/concepts-p2p-wiki.yaml`
- mint new slugs
- rename existing slugs
- create a standalone vocabulary-governance protocol file

## Rationale

Fold-in is the narrower carrier change. `canon-review-protocol.md` already governs how the vocabulary is consumed, `tmp/meta-corpus-inventory.tsv` already records `concepts-p2p-wiki` as a formal meta-corpus surface, and ADR-0011 already established the protocol as a constitutional amendment target. Creating a standalone protocol just for this shell would duplicate governance across two adjacent meta-corpus docs without clarifying authority.

The role redefinition is therefore precise: keep the historical file path and frozen slug set, but align its declared purpose and its mutation rules with the cross-project load it already carries.

## Consequences

- `docs/research/concepts-p2p-wiki.yaml` now declares its actual cross-project governance role instead of an intake-only role.
- `canon-review-protocol.md` gains a named vocabulary-governance shell, so future admissions, alias additions, deprecations, and version bumps have an explicit carrier.
- The current frozen slug set remains unchanged.
- Any later path rename or structural migration of the vocabulary surface requires a separate foundational reframing.

## Evidence

- F-028 evidence gate: pass
  - `docs/research/concepts-p2p-wiki.yaml:1-10` carried the intake-scoped purpose line before this bundle
  - `docs/research/planning/canon-review-protocol.md:244-250` already enforced the file as the legality gate for ADRs, canon edits, and shared framing notes
  - `docs/research/planning/corpus-foundational-review-methodology.md:107-110` already classified the artifact as frozen-concepts infrastructure
  - `tmp/meta-corpus-inventory.tsv` already admitted `concepts-p2p-wiki` as a formal meta-corpus surface
- Distinct evidence count: 7
- Publicly-verifiable evidence count: 7

## Diff summary

- `docs/research/concepts-p2p-wiki.yaml`: purpose declaration rewritten from intake-scoped to cross-project canonical vocabulary governance
- `docs/research/planning/canon-review-protocol.md`: added §14 `Vocabulary governance`, renumbered the later sections, and updated the v3 changelog note
