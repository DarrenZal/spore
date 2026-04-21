---
doc_id: spore.canon-decision.learning-field-protocol-elevation
doc_kind: decision-record
status: active
adr_number: "0024"
opened-on: 2026-04-21
closed-on: 2026-04-21
covers:
  - F-029
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-canonical-layering:R1
  - spec:spore.corpus-review.research-capstone:R1
r_claim_statement: |
  The authoritative learning-field structure should move from Intelligence Commons' local `project-learning-membrane` pattern into Spore's meta-corpus layer as `docs/research/planning/learning-field-protocol-v1.md`, leaving Intelligence Commons with a project-local instantiation that references the Spore protocol as authoritative.
supported_by:
  - docs/research/planning/reframing/reframing-learning-field-host-elevation.md
  - docs/research/planning/learning-field-protocol-v1.md
  - docs/research/planning/learning-field-intake-protocol.md:16-21
  - docs/research/planning/corpus-foundational-review-methodology.md:105-114
  - docs/research/corpus-review/research-canonical-layering.md:178-178
  - tmp/meta-corpus-inventory.tsv
  - /Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:1-140
authorized-by: reframing-learning-field-host-elevation
queue_reference: "Phase 7 reframing-learning-field-host-elevation (F-029)"
affects_canon:
  - docs/research/planning/learning-field-protocol-v1.md
  - tmp/meta-corpus-inventory.tsv
related_adrs:
  - intelligence-commons:ADR-0015-learning-membrane-pattern-demotion
shared_framing: ""
concepts:
  - field
  - membrane
  - memory-governance
---

# ADR-0024 — Learning Field Protocol Elevation

## Status

active (drafted and activated 2026-04-21 under `reframing-learning-field-host-elevation`)

## Context

F-029 identifies a host-boundary mismatch in the meta-corpus layer. Spore's review methodology already treats the learning-field structure as part of the cross-project governance surface, `tmp/meta-corpus-inventory.tsv` already tracks it as a formal artifact, and `learning-field-intake-protocol.md` already frames intake and canon evolution as shared across Spore, Intelligence Commons, and Poietic Match.

What remains misplaced is the host. The defining four-surface + governed-membrane structure still lives in Intelligence Commons as `docs/patterns/project-learning-membrane.md`, which is a project-local pattern surface rather than the authoritative cross-project protocol carrier. `reframing-repo-topology-trunk` has now ratified Scenario A: keep the three-repo topology, do not create a fourth canon-bearing host, and use Spore for the authoritative cross-project governance carriers that coordinate the trio.

The repair is therefore not to rewrite the structure from scratch. It is to elevate the authoritative host into Spore's planning/protocol layer, keep the structure beside the existing intake and canon-review protocols, and leave Intelligence Commons with only the local instantiation details that actually belong there.

## Decision

Elevate the authoritative learning-field structure into Spore's meta-corpus layer.

### Authoritative host

The authoritative cross-project carrier is now:

- path: `docs/research/planning/learning-field-protocol-v1.md`
- doc_id: `spore.learning-field-protocol`
- doc_kind: `protocol`
- version: `1`
- status: `active`

That protocol now carries the shared four-surface model, the governed membrane operations, the scope controls that keep project semantic memory from collapsing into an undifferentiated bucket, and the promotion boundary between exploratory learning and canon.

### Companion placement

Keep the elevated protocol beside the two existing companion governance carriers:

- `docs/research/planning/learning-field-intake-protocol.md`
- `docs/research/planning/canon-review-protocol.md`

The intake and canon-review protocols continue to govern procedure. The new learning-field protocol governs the shared structure those procedures act within.

### Inventory update

Repoint `tmp/meta-corpus-inventory.tsv` row 8 (`learning-field-structure`) to the new Spore protocol path and classify the authoritative host as `protocol`.

### Host mapping

| Predecessor | Successor | Disposition |
|---|---|---|
| `ic.project-learning-membrane` | `spore.learning-field-protocol` | `historical-gloss` |

The predecessor doc remains in Intelligence Commons as a local instantiation/reference pattern. It no longer carries sole authority for the shared structure.

## Rationale

Scenario A makes the host choice narrow and defensible.

- The trio stays at three repos, so there is no new shared-canon repo to host this structure.
- The learning-field structure is already cross-project in use, so leaving it in an IC-local pattern doc keeps authority at the wrong layer.
- Spore already hosts the companion intake and canon-review governance surfaces, so placing the structural protocol beside them reduces ambiguity without widening topology.

This is also the cleaner layering move. The IC pattern should keep the IC-specific proving-ground, primitive-mapping, and implementation notes that vary by project. The cross-project structure should live where cross-project governance lives.

## Consequences

- The learning-field structure now has one authoritative cross-project host in Spore.
- The protocol sits beside the intake and canon-review carriers it structurally supports.
- Intelligence Commons may retain a living local pattern doc, but only as an instantiation/reference artifact.
- Future amendments to the shared four-surface structure route through the Spore protocol and its ADR lineage rather than through silent drift in a project-local pattern file.

## Evidence

- F-029 evidence gate: pass
  - the authorizing proposal carries 6 cited sources, 5 publicly-verifiable
  - `tmp/meta-corpus-inventory.tsv` already treated the learning-field structure as a formal meta-corpus artifact before this host move
  - `docs/research/planning/corpus-foundational-review-methodology.md:105-114` already classified the structure as part of the reviewable meta-corpus layer
  - `docs/research/planning/learning-field-intake-protocol.md:16-21` already named the shared intake/canon governance pair across Spore, IC, and PM
  - `docs/research/corpus-review/research-canonical-layering.md:178-178` supplies the governing placement principle: layering should follow what varies independently
- Scenario gate: pass
  - `reframing-repo-topology-trunk` executed with Scenario A implications for this bundle
  - F-029 is already `status: eligible`, so ADR drafting is permitted

## Diff summary

- `docs/research/planning/learning-field-protocol-v1.md`: new authoritative cross-project learning-field protocol in Spore
- `tmp/meta-corpus-inventory.tsv`: row 8 repointed from the IC pattern host to the new Spore protocol host
