---
doc_id: spore.connection.canon-framing-bridge-note-corpus-normalization
doc_kind: research
status: draft
research_subkind: canon_framing
disposition: clarify existing terms
depends_on: []
relates_to:
  - spore.canon-decision.bridge-note-inventory-scope-cleanup
  - spore.canon-decision.frozen-vocabulary-role-redefinition
concepts:
  - bridge-note
  - review-claim
  - frozen-vocabulary
---

# Canon framing: bridge-note corpus normalization across Spore, IC, and PM

This note carries the shared migration authority for Phase 7 `round-bridge-note-corpus-normalization`, covering findings F-033 (legacy R-claim serialization) and F-034 (review-claim concept slugs outside frozen v2). The coordinated outcome is **wire-format normalization plus explicit vocabulary defer**, not concept rewriting. Per-repo decision records: `spore:ADR-0028-bridge-note-format-and-vocabulary-normalization`, `intelligence-commons:ADR-0017-bridge-note-format-and-vocabulary-normalization`, and `poietic-match:ADR-0013-bridge-note-format-normalization`.

## §1 Why this is one cross-repo round

All three repos participate in the same bridge-note corpus discipline:

- the bridge-note inventory is hosted in Spore but scopes notes across Spore, Intelligence Commons, and Poietic Match
- canon-review protocol v2 expects the same R-claim wire format everywhere
- the frozen v2 concept vocabulary governs review-claim `concept:` values across all three repos

F-033 and F-034 therefore cannot be repaired repo-by-repo with different local rules. The migration has to declare one exact serialization target and one exact vocabulary-handling rule before the per-repo ADRs land.

## §2 Inventory anchor for this round

The authoritative scope anchor is the cleaned bridge-note inventory as of **2026-04-21**:

- `tmp/bridge-note-inventory.tsv` contains 84 bridge-note rows after ADR-0026 removed the 10 non-bridge-note artifacts
- 61 of those 84 rows currently have `review-claim-count > 0` and therefore require F-033 format normalization
- 30 of those 61 notes contain at least one F-034 review-claim concept violation

The findings doc still records the historical pre-cleanup F-033 total of 63 review-claim notes. That count predated the 2026-04-21 inventory-boundary cleanup and included 2 field-scan artifacts no longer in scope. This round follows the current 61-note inventory surface.

Execution note: 6 IC inventory rows still point at `docs/research/*.md` while the current files live under `docs/research/connections/*.md`. Inventory membership remains authoritative; path resolution during migration follows the on-disk files.

## §3 Exact target R-claim format

Per canon-review protocol v2 §2 + §5 and the Phase 4 bridge-note convention, every migrated review claim must serialize in this form:

```md
- **R<n>**: <claim text> [target: <doc-id>] [concept: <slug>]
  supported_by: <C-claim refs or inherited support note>
```

### Normalization rules

1. Convert the legacy heading line

From:

```md
**R1** [review claim] [target: repo.doc] [concept: some-slug]
Claim text.
*R1 is supported by C1, C2.*
```

To:

```md
- **R1**: Claim text. [target: repo.doc] [concept: some-slug]
  supported_by: C1, C2.
```

2. Preserve claim text semantics

- do not rewrite the substance of the review claim
- join legacy wrapped lines only as needed to form one canonical bullet line
- preserve markdown code spans and citation wording

3. Preserve support-line semantics

- strip the legacy italic wrapper
- convert the support sentence into the indented `supported_by:` line
- if the legacy support line carried trailing note text after the C-claim list, keep that prose after `supported_by:` rather than deleting it
- if the legacy block carried a short pre-support note such as "R1 deepens R3 in ..." before the actual support clause, retain that prose as an indented continuation line under the bullet

4. Do not normalize beyond the R-claim block

- do not change frontmatter in this round
- do not rewrite claim-register section headings
- do not alter C-claim numbering, wording, or ordering

## §4 Frozen-vocabulary rule for this round

The frozen v2 vocabulary remains closed for this round. No new slugs may be minted, and no approximate or convenience remap is allowed.

### Allowed outcome A — exact v2 remap

If a legacy review-claim slug has a safe exact synonym already present in the frozen v2 vocabulary, the claim line may be rewritten to that existing v2 slug.

### Allowed outcome B — explicit defer

If no safe exact v2 synonym exists, the claim line must preserve the current legacy slug and carry an explicit defer marker:

```md
- **R<n>**: <claim text> [target: <doc-id>] [concept: <legacy-slug>] TODO: slug-deferred
  supported_by: <...>
```

This is the required fallback for this round. It preserves semantic transparency while making the non-canonical status explicit for future v3 vocabulary admission.

### Judgment for the current F-034 surface

After note-by-note review, **no direct v2 remaps are approved in this round**. All 30 note-level F-034 cases remain explicit defers because the offending slugs are Johar-derived or sheaf-derived families that do not have safe exact v2 synonyms.

Claim-line totals:

- 40 claim-line violations across 30 notes
- 37 violating claim lines in Spore
- 3 violating claim lines in IC
- 0 violating claim lines in PM

## §5 Note-level slug-defer authority for F-034

The table below is the authoritative note-level mapping for this round. `TODO: defer` means the migrated claim lines keep their current legacy slug and append `TODO: slug-deferred`.

| Repo | Note | Legacy review-claim slug(s) | Round 7.12 outcome |
|---|---|---|---|
| Spore | `spore/docs/research/connections/hansen-ghrist-discourse-graphs.md` | `R1=restriction-map-attestation`; `R2=two-layer-sheaf`; `R3=harmonic-peer-review` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-biophysically-entering.md` | `R1=planetary-systems-and-biophysical-reality` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-boundaries-in-systems.md` | `R1=boundary-making-and-entangled-systems` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-brain-self-rewriting-field.md` | `R1=human-machine-complementarity`; `R2=field-neuroplasticity` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-commitment-economy.md` | `R1=human-economy-and-commitment` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-conversational-sovereignty.md` | `R1=conversational-sovereignty` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-ecology-of-courage.md` | `R1=care-courage-and-presence` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-economy-of-doubt.md` | `R1=doubt-plural-selfhood-and-relational-maturity` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-entangled-freedom.md` | `R1=entangled-freedom-and-being` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-entangled-intelligence.md` | `R1=human-machine-complementarity`; `R2=inference-infrastructure` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-fork-in-the-system.md` | `R1=holding-complexity-beyond-control` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-four-dimensions-organizing.md` | `R1=legitimacy-and-shared-consequence` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-free-markets-freedom.md` | `R1=human-economy-and-commitment` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-governing-volatility.md` | `R1=governance-under-volatility` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-infrastructure-after-permanence.md` | `R1=post-permanence-and-adaptive-infrastructure` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-infrastructure-agility.md` | `R1=agility-contribution-and-organizing` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-inter-becoming.md` | `R1=identity-and-inter-becoming` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-miss-engineered-city.md` | `R1=spatial-service-and-civic-infrastructure` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-money-future-energy.md` | `R1=money-capital-and-future-claims` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-moral-provenance.md` | `R1=market-legibility-and-moral-provenance` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-neuroplastic-field.md` | `R1=field`; `R2=category-adequacy`; `R3=human-machine-complementarity`; `R4=field-neuroplasticity`; `R5=inference-infrastructure` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-outcomes-and-systems.md` | `R1=worldviews-cohesion-and-systems-change` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-portfolio-pathways.md` | `R1=pathways-prophecy-and-futures-design` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-priceability.md` | `R1=priceability-and-system-world` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-recursive-intelligence.md` | `R1=linguistic-closure` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-relational-topology.md` | `R1=relational-topology-and-context-design` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-sovereign-consciousness.md` | `R1=consciousness-sovereignty-and-post-compliance` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-speech-and-duty.md` | `R1=informational-duty` | `TODO: defer` |
| Spore | `spore/docs/research/connections/johar-truth-in-doubt.md` | `R1=civic-truth` | `TODO: defer` |
| Intelligence Commons | `intelligence-commons/docs/research/connections/johar-neuroplastic-field.md` | `R1=category-adequacy`; `R2=field-state`; `R3=architectural-plasticity` | `TODO: defer` |

## §6 Repo-local implications

- **Spore** migrates 49 in-scope review-claim bridge notes to the v2 bullet/support-line form and marks 29 note-level slug defers
- **Intelligence Commons** migrates 6 in-scope review-claim bridge notes to the v2 bullet/support-line form and marks 1 note-level slug defer
- **Poietic Match** migrates 6 in-scope review-claim bridge notes to the v2 bullet/support-line form; PM has no F-034 note-level violations in current scope

## §7 What this round does not do

- It does not expand `docs/research/concepts-p2p-wiki.yaml`
- It does not backfill Johar or sheaf families into frozen v2 by approximation
- It does not rewrite claim semantics to fit a nearest existing slug
- It does not change bridge-note frontmatter concepts in this round
- It does not reopen the inventory boundary from ADR-0026

## §8 Related ADRs

- `spore:ADR-0028-bridge-note-format-and-vocabulary-normalization`
- `intelligence-commons:ADR-0017-bridge-note-format-and-vocabulary-normalization`
- `poietic-match:ADR-0013-bridge-note-format-normalization`
- `spore:ADR-0026-bridge-note-inventory-scope-cleanup`
- `spore:ADR-0022-frozen-vocabulary-role-redefinition`
