---
doc_id: spore.canon-decision.bridge-note-format-and-vocabulary-normalization
doc_kind: decision-record
status: active
adr_number: "0028"
opened-on: 2026-04-21
closed-on: 2026-04-21
covers:
  - F-033
  - F-034
decision: edit
r_claim_source:
  - spec:spore.corpus-review.research-capstone:R1
  - spec:spore.corpus-review.research-capstone-review:R1
r_claim_statement: |
  The bridge-note corpus remains machine-tractable only if every review claim uses one deterministic wire format and any concept family outside frozen v2 is made explicit rather than silently approximated. Legacy inline R-claims should therefore be normalized to the v2 bullet-plus-supported_by form, and unmappable slugs should stay visible with an explicit defer marker for future v3 vocabulary admission.
supported_by:
  - /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-bridge-note-corpus-normalization.md
  - docs/research/planning/corpus-foundational-review-findings.md:1088-1147
  - docs/research/planning/canon-review-protocol.md:95-103
  - docs/research/planning/canon-review-protocol.md:199-201
  - tmp/bridge-note-inventory.tsv
  - tmp/bridge-note-slug-violations.tsv
  - tmp/phase-7/round-bridge-note-corpus-normalization-validator-pre.txt
authorized-by: ""
queue_reference: "Phase 7 round-bridge-note-corpus-normalization (F-033, F-034)"
affects_canon:
  - docs/research/connections/
related_adrs:
  - intelligence-commons:ADR-0017-bridge-note-format-and-vocabulary-normalization
  - poietic-match:ADR-0013-bridge-note-format-normalization
  - spore:ADR-0026-bridge-note-inventory-scope-cleanup
  - spore:ADR-0022-frozen-vocabulary-role-redefinition
shared_framing: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-bridge-note-corpus-normalization.md
concepts:
  - bridge-note
  - review-claim
  - frozen-vocabulary
---

# ADR-0028 — Bridge-Note Format And Vocabulary Normalization

## Status

active (drafted and activated 2026-04-21 for `round-bridge-note-corpus-normalization`)

## Context

F-033 and F-034 are corpus-hygiene findings on the bridge-note layer itself.

After ADR-0026 cleaned the bridge-note inventory on **2026-04-21**, the live migration surface is 61 in-scope bridge notes with review claims, not the pre-cleanup 63-note count recorded in the historical finding text. Spore contributes 49 of those 61 files.

All 49 Spore files still used the legacy inline review-claim serialization:

- `**R<n>** [review claim] ...`
- claim body on following line(s)
- italic support sentence rather than an explicit `supported_by:` line

Spore also carries the bulk of the F-034 drift: 29 in-scope Spore notes contain 37 review-claim concept tags outside frozen v2. The violating families are Johar-derived or sheaf-derived and do not have safe exact synonyms inside the current frozen vocabulary. Forcing a nearest-match remap would make the corpus look canonical while changing what the concept tag actually means.

The shared framing note for this round therefore establishes a two-part migration rule:

1. normalize every in-scope review claim to the v2 bullet/support-line wire format
2. keep any unmappable legacy concept visible and append `TODO: slug-deferred` rather than invent or approximate a v2 substitute

## Decision

Apply the shared migration pattern to the Spore bridge-note corpus.

### Format normalization

Convert every in-scope Spore review claim to:

```md
- **R<n>**: <claim text> [target: <doc-id>] [concept: <slug>]
  supported_by: <support refs>
```

This conversion is mechanical. It preserves claim wording, targets, support references, and any short support-line annotations.

### Vocabulary handling

Do not mint or approximate v2 slugs.

For Spore's 29 violating notes / 37 violating claim lines, preserve the current legacy slug and mark the claim line explicitly:

```md
[concept: <legacy-slug>] TODO: slug-deferred
```

The defer list is authoritative in `tmp/bridge-note-slug-violations.tsv` and in the shared framing note's note-level table.

### Execution note

This migration was applied with `tmp/phase-7/bridge-note-corpus-normalizer.py`, which:

- normalizes the legacy R-claim wire format
- preserves support-line trailing notes
- resolves the known IC inventory path drift without altering inventory membership
- emits `tmp/bridge-note-slug-violations.tsv`

## Rationale

This is the narrowest repair that makes the corpus honest again.

Uniform serialization matters because the bridge-note layer is one of the few machine-tractable surfaces in the review stack. A deterministic bullet/support-line form is easier to inspect, verify, and cite than a mixed inline/italic legacy format.

Explicit defer is also narrower than approximate remap. The current frozen vocabulary does not contain exact synonyms for the Johar/sheaf families that triggered F-034. Marking those claims as deferred keeps the meaning visible and gives future vocabulary work a concrete admission queue. Replacing them with nearby-but-incorrect v2 slugs would trade visible drift for silent distortion.

## Consequences

- 49 Spore bridge-note files now use the same v2 review-claim serialization
- 29 Spore notes now surface frozen-vocabulary exceptions explicitly instead of hiding them inside legacy slugs
- 37 Spore claim lines are now tagged `TODO: slug-deferred` for future v3 vocabulary review
- no bridge-note frontmatter or claim semantics were rewritten in this round

## Evidence

- F-033 evidence gate: pass
  - current-scope scan after ADR-0026 found 49 Spore bridge-note files with review claims, all still in the legacy inline format before this migration
  - `docs/research/planning/canon-review-protocol.md:95-103` and `docs/research/planning/corpus-foundational-review-findings.md:1088-1105` establish the required v2 wire format (`- **R<n>**: ...` + `supported_by:` line)
- F-034 evidence gate: pass
  - `tmp/bridge-note-slug-violations.tsv` records 37 violating Spore claim lines across 29 notes
  - every violating slug is outside frozen v2 and the shared framing note records them all as `TODO: defer`
  - `docs/research/planning/canon-review-protocol.md:199-201` prohibits new frozen-vocabulary admission inside this round
- Validator non-regression check: baseline recorded in `tmp/phase-7/round-bridge-note-corpus-normalization-validator-pre.txt` before ADR drafting

## Diff summary

- `docs/research/connections/*.md`: bulk review-claim serialization migration across the 49 in-scope Spore bridge notes
- out-of-v2 concept claims now carry `TODO: slug-deferred` instead of silent legacy drift
- `docs/research/canon-decisions/0028-bridge-note-format-and-vocabulary-normalization.md`: this ADR
