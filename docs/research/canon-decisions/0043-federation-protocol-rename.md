---
doc_id: spore.canon-decision.federation-protocol-rename
doc_kind: decision-record
status: draft
adr_number: "0043"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.coherence-audit-2026-04-22:C-20
r_claim_statement: |
  The mycorrhizal federation metaphor is factually fragile (Karst et al. 2023 Nature Ecology & Evolution review found 25% structural errors and 50% functional errors in 1,676 mycorrhizal citations; Spore cites zero mycorrhizal biology). More importantly, naming a designed governance protocol after a biological system borrows the ecological halo ("natural, mutualistic, time-tested") that Spore's own decentralization-theater discipline warns against — commits the naturalism fallacy by asymmetric imposition (governance is designed, not natural). Phase 1 disposition: rename at protocol/spec layer; keep fungal aesthetic at project-identity/poetic layer only.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-coherence-falsifiability-audit-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-first-principles-audit-v2-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-audit-independent-second-opinion-codex-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/canon-audit-independent-second-opinion-claude-opus-4-7-2026-04-22.md
  - /Users/darrenzal/projects/spore/tmp/v2-lens-l-literature.md
authorized-by: "canon-rebuild-phase-2b operator directive 2026-04-22 ('lets keep going')"
queue_reference: "coherence-audit-2026-04-22 C-20 (Mycorrhizal Federation naming — rename at protocol/spec layer)"
affects_canon:
  - docs/foundations/federation-protocol.md
  - docs/project-vision.md
  - docs/foundations/spore-instance-model.md
  - docs/foundations/structural-legitimacy.md
  - docs/research/planning/canon-review-protocol.md
  - docs/README.md
related_adrs:
  - spore:ADR-0041-text-authoritative-representation
  - spore:ADR-0042-dag-delete-structural-legitimacy-promote
concepts:
  - coordination-substrate
  - polycentric-governance
  - boundary-commoning
---

# ADR-0043 — Federation Protocol Rename

## Status

draft (authored 2026-04-22 under canon-rebuild Phase 2b)

## Context

The Phase 1 coherence-and-falsifiability audit (`tmp/canon-coherence-falsifiability-audit-2026-04-22.md` C-20) disposed the `mycorrhizal-federation-protocol` naming as `rename at protocol/spec layer; keep fungal aesthetic at project-identity/poetic layer only` with high confidence.

**External literature check (Lens L)** surfaced that the mycorrhizal metaphor is factually fragile: Karst/Jones/Hoeksema 2023 (*Nature Ecology & Evolution*) reviewed 1,676 mycorrhizal citations and found ~25% errors about structure, ~50% errors about function. Spore cites zero mycorrhizal biology. A contemporary collaborator will read the canon's "mycorrhizal federation" framing with the debunking literature in mind.

**Opus-4-7 second-opinion** sharpened the case: naming a designed governance protocol after a biological system is the **naturalism fallacy** — the metaphor borrows the ecological halo ("natural, mutualistic, time-tested, ecologically sound") for a governance artifact that is *designed, political, and not natural*. This is precisely what the canon's own decentralization-theater discipline warns against (`holonic-network-architecture.md:103`). Spore should not do to itself what it correctly warns against others doing.

**Codex second-opinion** agreed: the fungal metaphor is good *project identity* and weak *protocol naming*. The protocol content (opt-in sharing, bilateral trust, event-driven exchange, eventual consistency, provenance) does not become clearer because it is named after mycorrhizae.

All four prior audits + Phase 1 converge on rename.

## Decision

**Edit — bundled rename:**

1. **Rename file** via `git mv`: `docs/foundations/mycorrhizal-federation-protocol.md` → `docs/foundations/federation-protocol.md`. Preserves git history; enables `git log --follow` traceability.

2. **Update doc_id** from `spore.mycorrhizal-federation-protocol` to `spore.federation-protocol`. Update H1 title from "Mycorrhizal Federation Protocol" to "Federation Protocol".

3. **Rewrite in-file protocol-name references** to use "federation protocol" / "Federation Protocol" per grammatical context.

4. **Add one project-identity acknowledgment** (~2-3 sentences, early in renamed file) acknowledging the fungal metaphor as project-identity-layer aesthetic informing early design sensibility, without bearing mechanical weight in the protocol specification. Does NOT claim any mycorrhizal biology supports the protocol mechanics.

5. **Update Naming Stack in `project-vision.md:177`** + 2 other in-project-vision references (L93, L95) that use `mycorrhizal-federation-protocol` as a doc-name reference.

6. **Update canon-level cross-references** in: `docs/foundations/spore-instance-model.md` (1 depends_on + 1 body ref), `docs/foundations/structural-legitimacy.md` (1 cross-ref from Phase 2a), `docs/README.md` (1 Foundations listing), `docs/research/planning/canon-review-protocol.md` §1 (1 canon-in-scope list entry).

7. **Update `depends_on: spore.mycorrhizal-federation-protocol` → `spore.federation-protocol`** in all 21 docs that had this reference. Metadata-only update (body content untouched). Preserves validator baseline (caught 5 fresh errors mid-drafting; updating all 21 for consistency).

8. **Leave historical narrative references** to "mycorrhizal federation" or `spore.mycorrhizal-federation-protocol` in bridge-note / ADR / research / planning body text UNTOUCHED. Two exceptions in the renamed file itself:
   - **L35 opposition-density acknowledgment**: the cluster key `spore.mycorrhizal-federation-protocol:power-capture` is retained as historical reference to the 48%-opposition-density analysis (dated "as of 2026-04-18"). Timestamped historical fact, preserved.
   - **canon-review-protocol.md L68/L398/L480 methodology examples**: historical examples explaining R-claim format + per-layer-gate methodology that use `spore.mycorrhizal-federation-protocol:power-capture` as their real example. Preserved as accurate-at-time-of-writing.

Rationale for `edit` disposition:
- **(a) Lens concurrence**: 4 prior audits + Phase 1 + Lens L external-literature check all converge. External literature (Karst et al. 2023) adds non-internal evidence.
- **(b) No opposition**: no audit defended the mycorrhizal naming at protocol layer. Project-identity-aesthetic value is separately preserved (not deleted).
- **(c) Held-tension check**: ADR-0001 (pluriversal-incommensurability) concepts `pluriversal-commoning`, `memory-governance` do not overlap Phase 2b's concepts (`coordination-substrate`, `polycentric-governance`, `boundary-commoning`). Affirmative: naming-honesty about protocol-vs-metaphor aligns with pluriversal critique of universalized biological analogies.

## Consequences

- The federation protocol's name becomes honest: it describes what the protocol specifies (sovereign-node exchange rules) rather than borrowing a biological metaphor's aura. Contemporary readers encountering the 2023 Karst et al. critique of wood-wide-web overclaims won't read Spore's protocol naming as guilt-by-association.
- The fungal/mycorrhizal aesthetic is preserved at project-identity layer. Project name "Spore" stands; site/marketing/aesthetic framing continue to evoke the organic-networked sensibility without making biology-grounded claims at spec layer.
- The naming-hygiene move (delete metaphor from spec; keep metaphor at identity) models the broader dynamical-vocabulary audit that Phase 2c will apply (pressure, field, membrane, metabolic, breathes). ADR-0043 is a precedent for that work.
- Downstream: Phase 3 Core Thesis rewrite + Phase 4 new foundation docs (sensor/oracle, translation, actor governance) inherit a naming context that separates protocol-specification from project-aesthetic cleanly.
- 21 downstream `depends_on` references updated mechanically. Body narrative in those 21 files is preserved as historical analysis.
- Historical ADRs (0001-0042) and most research/bridge-note body text continue to reference `mycorrhizal-federation-protocol`. This is accepted: those references were accurate at their time of writing; git-rename + `git log --follow docs/foundations/federation-protocol.md` provides continuity.

## Evidence

- cluster_key: `docs/foundations/federation-protocol.md:protocol-name-vs-metaphor`
- supports: 4 prior audits + 1 Phase 1 coherence audit + 1 external literature check (Lens L)
- opposes: 0
- source: Phase 1 coherence-and-falsifiability audit C-20 (high confidence)
- Supporting external literature: Karst/Jones/Hoeksema 2023 *Nature Ecology & Evolution* (Lens L); narrows the factual basis for analogy-claims
- Opposing bridge notes: none. Several bridge notes reference "mycorrhizal" in body text as the historical framing but none defends it as protocol naming.
- Cross-project echoes: none
- Held-tension overlap: checked 2026-04-22. ADR-0001 pluriversal-incommensurability concepts (`pluriversal-commoning`, `memory-governance`) do not overlap this ADR's concepts. Affirmative alignment: separating protocol-specification from biological analogy respects pluriversal critique of naturalized universality.
- Adaptation note: R-claim source cites Phase 1 C-20 (continuing Phase 2a pattern). 21 depends_on updates are metadata-only mechanical migration; body content of those docs preserved.

## Diff summary

**File rename (git-tracked)**:
- `docs/foundations/mycorrhizal-federation-protocol.md` → `docs/foundations/federation-protocol.md`

**Renamed file edits** (`docs/foundations/federation-protocol.md`):
- Frontmatter `doc_id`: `spore.mycorrhizal-federation-protocol` → `spore.federation-protocol`
- H1: "Mycorrhizal Federation Protocol" → "Federation Protocol"
- Intro: "mutualistic exchange" → "governed exchange"; new project-identity acknowledgment paragraph (~2 sentences)
- L41: "The mycorrhizal federation protocol is a boundary-making apparatus" → "The federation protocol is a boundary-making apparatus"
- L66: "canon-writing discipline for `mycorrhizal-federation-protocol`" → "canon-writing discipline for `federation-protocol`"
- L35: PRESERVED (historical opposition-density acknowledgment with timestamped cluster-key)

**Cross-reference updates**:
- `docs/project-vision.md`: 3 refs updated (L93, L95, L177 Naming Stack)
- `docs/foundations/spore-instance-model.md`: depends_on + L15 body ref updated
- `docs/foundations/structural-legitimacy.md`: L59 Related-section filename updated
- `docs/README.md`: Foundations listing updated
- `docs/research/planning/canon-review-protocol.md`: §1 canon-in-scope list entry updated (L68/L398/L480 methodology examples preserved as historical)

**Metadata-only migrations** (21 files, depends_on field only; body text preserved):
- `docs/research/canon-decisions/0002-reproduction-primacy.md`
- `docs/research/connections/` (15 files)
- `docs/patterns/federated-knowledge-exchange.md`
- `docs/positioning/civic-infrastructure-convergence.md`
- `docs/protocols/restriction-maps-and-comparison-records.md`
- `docs/protocols/store-and-forward-relay.md`
- `docs/research/prompts/active-inference-federation-research-prompt.md`

**Historical references preserved** (unchanged): body text in bridge notes + historical ADRs + research planning docs that use "mycorrhizal federation" as historical framing. Git-rename + `git log --follow` provides path traceability.
