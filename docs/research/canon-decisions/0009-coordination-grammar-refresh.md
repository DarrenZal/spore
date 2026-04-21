---
doc_id: spore.canon-decision.coordination-grammar-refresh
doc_kind: decision-record
status: draft
adr_number: "0009"
decision: edit
opened-on: 2026-04-20
closed-on: ""
covers:
  - F-003
  - F-004
  - F-005
r_claim_source:
  - spore.connection.reproductive-commoning:R2
  - spore.connection.johar-neuroplastic-field:R1
r_claim_statement: |
  Spore's `relational-agency-and-holons` doctrine should carry Bresnihan's "commons is a verb" framing explicitly: the primary coordinating practice in a field is care (reproductive labor), not message-passing or governance-as-ruleset. Coordination emerges from care; the field holds because participants reproduce it; participation IS reproduction. The doctrine should cite the Bresnihan/Linebaugh lineage (`orn:p2p-wiki.page:More-Than-Human_Commons`) as source-anchor for this ordering, and should flag — but not yet operationalize — the more-than-human extension (commoning collectives including non-human actors). This is a motivating-language edit plus an explicit source-anchor addition.
supported_by:
  - spore.connection.reproductive-commoning:C5
  - spore.connection.reproductive-commoning:C6
  - spore.connection.reproductive-commoning:C7
  - spore.connection.johar-neuroplastic-field:C1
  - spore.connection.johar-neuroplastic-field:C2
  - spore.connection.johar-neuroplastic-field:C3
authorized-by: ""
queue_reference: "Phase 7 round-spore-synthesis-refresh (F-003, F-004, F-005)"
affects_canon:
  - docs/synthesis/coordination-grammar.md
related_adrs:
  - spore:ADR-0002-reproduction-primacy
  - spore:ADR-0008-collective-agency-at-field
shared_framing: ""
concepts:
  - collective-agency
  - commons-as-verb
  - memory-governance
---

# ADR-0009 — Coordination Grammar Refresh

## Status

draft -> active (on round close)

## Context

`docs/synthesis/coordination-grammar.md` is still carrying pre-canon-review-v1 wording at three points that now misstate active Spore canon. The primitive roster omits `field` even though active Spore canon treats field as a first-class coordination term with a dedicated lexicon entry. The Ruddick comparison collapses care into intent even though reproduction-primacy canonized care as the primary coordinating practice of field reproduction. The artifact lifecycle publishes `draft -> active -> amended -> deprecated -> forked`, citing governance-memory, even though the cited governance surfaces distinguish lifecycle statuses from revision/fork operations and make `superseded` first-class.

This ADR is intentionally local to the synthesis layer. It does not attempt to resolve F-031's protocol/validator status-enum contradiction. It only removes stale synthesis prose that currently mismatches the canon and the cited governance sources.

## Decision

Edit `docs/synthesis/coordination-grammar.md` in three places:

1. Add `field` to the primitive roster and describe it as the distributed relational medium within which the other ten primitives become legible and operative.
2. Rewrite the Ruddick comparison paragraph so care remains primary and intent is one way care becomes legible rather than the construct that "carries" care.
3. Replace the artifact lifecycle with the active governance lifecycle (`draft`, `active`, `deprecated`, `superseded`) and explicitly distinguish amendment/forking from lifecycle state.

### Concrete Edit Text

#### Replace the care paragraph under "Relation to Other Coordination Loops"

```markdown
Will Ruddick's loop foregrounds **caring** as an explicit phase before commitment. In Spore, care remains prior to and larger than the intent/commitment pair: care is the primary coordinating practice that reproduces the field, while intent is one way care becomes legible enough to route, witness, and compose. Intent makes care actionable; it does not replace care.
```

#### Replace the primitives lead-in and add the `Field` row

```markdown
Eleven coordination primitives. `Field` names the distributed relational medium within which the other ten become legible and operative.
```

```markdown
| **Field** | Distributed relational medium in which signals, claims, commitments, entities, and resources become legible to one another, interact, and are revised over time. Shared, learning, and relational field are scale-specific views of the same underlying structure. | Ontological |
```

#### Replace the artifact lifecycle block and source note

```markdown
### Artifacts
```

```text
draft --> active --> deprecated
             \
              --> superseded
```

```markdown
(Source: governance-memory pattern for `draft`, `active`, `deprecated`; agent-commons-meta-protocol adds `superseded` for replaced artifacts.)

Amendment and forking remain governed operations (`revises`, `forks`), not lifecycle statuses. An artifact can be revised while active or deprecated, and a fork creates a new lineage rather than advancing the source artifact through a status chain.
```

## Rationale

F-003 is a direct synthesis-layer drift problem. `field` is already active Spore canon in `docs/foundations/lexicon/field.md`, and the findings evidence shows both methodology and capstone treating it as a canon term to keep rather than demote. Leaving the synthesis roster at ten primitives turns a simplification into a contradiction.

F-004 preserves an existing prior rather than introducing a new one. `spore.connection.reproductive-commoning:R2` and `spore:ADR-0002-reproduction-primacy` already establish care as the primary coordinating practice of field reproduction. The old sentence reintroduces the exact reduction the `care primacy` prior is meant to block.

F-005 is a local consistency repair. `governance-memory.md` names `draft`, `active`, and `deprecated` as lifecycle states, while the agent-commons meta-protocol adds `superseded` as the replacement state. `amended` and `forked` are better represented as governed operations (`revises`, `forks`) than as statuses. This keeps the synthesis doc aligned with live governance semantics without pretending to solve F-031's broader protocol/tooling contradiction.

## Consequences

- `coordination-grammar.md` now names eleven primitives rather than ten, with `field` restored as the substrate primitive.
- Care remains asymmetrical and prior to the intent/commitment pair; the synthesis doc no longer paraphrases care away.
- Artifact lifecycle language now matches the cited governance surfaces and no longer conflates state with revision/fork mechanics.
- F-031 remains open. This ADR removes stale synthesis wording but does not change validator rules or protocol status vocabulary.

## Mapping Notes

- F-003 -> resolved by the primitive-roster edit restoring `field`.
- F-004 -> resolved by preserving the `care primacy` prior in synthesis prose.
- F-005 -> resolved by matching synthesis lifecycle wording to `governance-memory.md` and `agent-commons-meta-protocol.md`.
- Wider-scope-docs carve-out applied: `docs/synthesis/coordination-grammar.md` is edited under `tmp/wider-scope-carveout-log.md`, not by expanding canon-scope membership.
