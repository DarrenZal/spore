---
doc_id: spore.canon-decision.adr-status-vocabulary-unification
doc_kind: decision-record
status: active
adr_number: "0012"
decision: edit
opened-on: 2026-04-20
closed-on: 2026-04-20
covers:
  - F-031
r_claim_source:
  - spec:spore.corpus-review.research-governance-process:R2
  - spec:spore.corpus-review.research-capstone:R1
r_claim_statement: |
  The canon-review stack needs one authoritative status vocabulary per governed artifact type. Decision records should use the validator-native ADR enum (`draft`, `active`, `deprecated`, `superseded`), while proposals should use their own lifecycle (`draft`, `cooling-off`, `eligible`, `authorized-ADR`, `executed`, `closed`). Leaving protocol text, validator logic, and live ADR practice split across incompatible vocabularies keeps governance legibility dependent on operator translation.
supported_by:
  - docs/research/planning/reframing/reframing-protocol-governance-hardening.md
  - docs/research/planning/canon-review-protocol.md:83-89
  - scripts/validate_spec_dag.py:110-176
  - docs/research/canon-decisions/0001-pluriversal-incommensurability.md:5-9
  - docs/research/corpus-review/research-governance-process.md:1-26
  - docs/research/corpus-review/research-capstone.md:319-321
authorized-by: reframing-protocol-governance-hardening
queue_reference: "Phase 7 reframing-protocol-governance-hardening (F-031)"
affects_canon:
  - docs/research/planning/canon-review-protocol.md
  - scripts/validate_spec_dag.py
related_adrs:
  - spore:ADR-0011-canon-review-protocol-v3-governance-hardening
shared_framing: ""
concepts:
  - memory-governance
---

# ADR-0012 — ADR Status Vocabulary Unification

## Status

active (drafted and activated 2026-04-20 under `reframing-protocol-governance-hardening`)

## Context

Spore currently carries three different status stories at once. The canon-review protocol still publishes `status: proposed` and a lifecycle that includes `accepted` and `partial-drift`. The validator only accepts `draft`, `active`, `deprecated`, and `superseded`. Live Spore ADRs already use the validator-compatible vocabulary and explain the mismatch with inline comments.

The contradiction now reaches proposal files too. Foundational-reframing proposals use their own lifecycle states (`cooling-off`, `eligible`, `authorized-ADR`, `executed`, `closed`), but the validator still applies the ADR enum to every governed doc. That is why the current baseline includes eight proposal-status errors. The fix needs to do two things together: separate status vocabularies by `doc_kind`, and make the protocol text describe the same decision-record vocabulary the validator enforces.

## Decision

Unify status handling by governed artifact type.

### Validator behavior

Update `scripts/validate_spec_dag.py` so status validation is chosen by `doc_kind`:

1. `doc_kind: decision-record` -> `draft`, `active`, `deprecated`, `superseded`
2. `doc_kind: proposal` -> `draft`, `cooling-off`, `eligible`, `authorized-ADR`, `executed`, `closed`
3. All other `doc_kind` values keep the existing default behavior and use the decision-record enum unless a later ADR says otherwise

### Protocol text

Update `docs/research/planning/canon-review-protocol.md` so the ADR-lite template and lifecycle text use the same decision-record vocabulary the validator enforces. `draft` replaces `proposed` as the authoring default, `active` replaces `accepted` as the live landed state, and coordination drift is tracked in execution notes while the ADR remains `draft` until the set is repaired.

### Historical corpus treatment

Existing Spore ADRs are not rewritten in place. Their inline status-mapping comments become historical evidence of the old contradiction rather than something future ADRs should copy forward.

## Rationale

The authoritative split is between artifact types, not between tools and docs. Decision records and reframing proposals are both governed artifacts, but they are not the same artifact kind. Giving them separate vocabularies by `doc_kind` preserves proposal lifecycle legibility without breaking the existing ADR corpus.

Unifying the protocol text with the validator-native ADR enum removes the need for manual translation comments in new ADRs. It also keeps the validator fix conservative: existing decision records stay valid, proposal-status errors clear, and no historical ADR needs a backfill migration.

## Consequences

- The validator should drop the eight proposal-status errors once proposal docs are checked against the proposal lifecycle instead of the decision-record enum.
- Existing Spore ADRs remain valid with no status regression.
- New ADRs now author directly in `draft` and activate to `active`, matching the validator and the on-disk corpus.
- Coordination-drift remains a hard execution gate, but it is no longer modeled as an unsupported ADR status.

## Mapping Notes

- F-031 -> resolved by separating proposal vs decision-record status validation and by aligning the protocol template/lifecycle text with the decision-record enum.
