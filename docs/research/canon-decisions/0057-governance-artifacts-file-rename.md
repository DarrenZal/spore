---
doc_id: spore.canon-decision.governance-artifacts-file-rename
doc_kind: decision-record
status: draft
adr_number: "0057"
opened-on: 2026-04-23
closed-on: 2026-04-23
decision: edit
r_claim_source:
  - spore.project.claude-md:phase-2c-queue-file-rename
r_claim_statement: |
  The filename `constitutional-artifacts-and-graph-projections.md` shares vocabulary with the `project-vision.md §Constitutional Commitments` section, which names the 7 published design-value choices (provenance, forkability, pluralism, meaningful autonomy, authorized boundary crossing, reviewable authority, contestability). The filename's `§Constitutional Artifacts` section lists a broader artifact-family (visions, agreements, declarations, roadmaps, policies, roles, domain definitions) in which constitutional-commitments are one subtype (per ADR-0035 vision-as-commitment-subtype). Reserve "constitutional" for design-commitments; use "governance" for the broader artifact-family. Rename the file to reflect its actual content-scope. Phase 2c queue disposition: file-rename at filename/doc_id/H1 layer; preserve internal section-header as parking-lot item.
supported_by:
  - /Users/darrenzal/projects/spore/CLAUDE.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0056-phase-2c-semantic-refactoring-bundle.md
  - /Users/darrenzal/projects/spore/docs/research/canon-decisions/0043-federation-protocol-rename.md
  - /Users/darrenzal/projects/spore/tmp/canon-phase-2c-rename-decision-brief-2026-04-23.md
  - /Users/darrenzal/projects/spore/tmp/phase-2c-rename-scope-manifest.txt
authorized-by: "operator directive 2026-04-23 ('Full endorsement with one note on (c)') — decision-gate Step 2 PASS with Option A + slug spore.governance-artifacts + preserve §Constitutional Artifacts header + full 50-file cascade"
queue_reference: "CLAUDE.md Phase 2c queue — file rename (ADR-0057)"
affects_canon:
  - docs/foundations/governance-artifacts-and-graph-projections.md
  - docs/README.md
related_adrs:
  - spore:ADR-0043-federation-protocol-rename
  - spore:ADR-0035-vision-as-commitment-subtype
  - spore:ADR-0036-graph-projections-tiering-and-structure
  - spore:ADR-0056-phase-2c-semantic-refactoring-bundle
concepts:
  - coordination-substrate
---

# ADR-0057 — Governance Artifacts File Rename

## Status

draft (authored 2026-04-23 under canon-rebuild Phase 2c)

## Context

Phase 2c of the canon rebuild is structural canon-body refactoring. ADR-0056 (`phase-2c-semantic-refactoring-bundle`) landed at commit `2114828` on 2026-04-23 and explicitly deferred the file-level rename to a follow-up ADR. ADR-0057 handles that deferred work.

**The ambiguity.** Two distinct canon concepts currently share the "constitutional" vocabulary:

1. *Constitutional commitments* — the 7 published design-value choices at `project-vision.md §Constitutional Commitments` (provenance, forkability, pluralism, meaningful autonomy, authorized boundary crossing, reviewable authority, contestability). These are foundational-value-choices the project publishes and commits to.
2. *Constitutional artifacts* — the artifact-family defined at `§Constitutional Artifacts` inside the file at issue: visions, agreements, declarations, roadmaps, policies, roles, domain definitions. The family is *governance-level*; constitutional-commitments appear inside it only as a *subtype* (per ADR-0035 vision-as-commitment-subtype).

The filename-level overloading makes the canon harder to read: a contemporary reader encountering two "constitutional" vocabularies at foundation-doc index layer cannot tell without opening the file whether they are the same concept.

**Rename scope.** Phase 2c queue disposition: rename at filename / doc_id / H1 layer only. The in-file `§Constitutional Artifacts` section header is preserved as parking-lot disambiguation for a later pass — renaming the section header would require also rewriting the defining sentence + any body-prose refs to "constitutional artifact" throughout the file, which expands scope beyond clean file-rename discipline and risks the session-atomic window.

**Precedent.** ADR-0043 (federation-protocol-rename; `mycorrhizal-federation-protocol.md` → `federation-protocol.md`) established the rename discipline: git mv for history preservation; full cascade of depends_on / cross-ref / H1 / doc_id / README; metadata-only migration of downstream refs; body-narrative preserved; session-atomic window. ADR-0057 follows this pattern at ~2.5× scale (126 refs across 50 downstream files vs ADR-0043's 21 refs + 5 canon-level).

## Decision

**Edit — bundled rename per operator Option A:**

1. **Rename file** via `git mv`: `docs/foundations/constitutional-artifacts-and-graph-projections.md` → `docs/foundations/governance-artifacts-and-graph-projections.md`. Preserves git history; enables `git log --follow` traceability.

2. **Update doc_id** from `spore.constitutional-artifacts` to `spore.governance-artifacts`. Update H1 title from "Constitutional Artifacts and Graph Projections" to "Governance Artifacts and Graph Projections".

3. **Preserve internal `§Constitutional Artifacts` section header** and its body narrative. The section legitimately describes the artifact-family *including* constitutional-level artifacts as a subtype. Full section-header + body-prose disambiguation is parked for a later pass (parking-lot carried forward).

4. **Cascade 126 refs across 50 downstream files** via single-pass `sed` over two migration tokens:
   - `constitutional-artifacts-and-graph-projections` → `governance-artifacts-and-graph-projections` (filename / path refs)
   - `spore\.constitutional-artifacts` → `spore.governance-artifacts` (doc_id / slug refs)

Rationale for `edit` disposition:
- **(a) Lens concurrence**: Phase 2c queue disposition named the rename at foundation-review finding level. ADR-0056 capstone review deferred to ADR-0057 for scope-containment.
- **(b) Content-scope honesty**: the "and-graph-projections" suffix preserves acknowledgment of the ADR-0036-canonized graph-projections material. Straight rename (Option A) beats shorter rename (Option B = drop-suffix) on this axis.
- **(c) Precedent-symmetric**: ADR-0043 pattern (file keeps descriptive suffix; slug drops qualifier for brevity) applied here — file is `governance-artifacts-and-graph-projections.md`, slug is `spore.governance-artifacts`.
- **(d) Held-tension check**: ADR-0001 (pluriversal-incommensurability) concepts do not overlap this ADR's concepts. No tension trigger.

## Consequences

- Two "constitutional" vocabularies in canon collapse to one: `§Constitutional Commitments` at project-vision.md retains the design-commitments meaning. The artifact-family is renamed to `governance-artifacts`, making subtype relations explicit (constitutional-commitments are a governance-artifact subtype via vision-as-commitment-subtype per ADR-0035).
- Git history preserved via `git mv`. `git log --follow docs/foundations/governance-artifacts-and-graph-projections.md` continues to resolve all 24 pre-rename commits.
- 50 downstream files have depends_on / path / slug references migrated mechanically. Body narrative preserved in all 50 files.
- Validator baseline held at 9 errors / 30 warnings throughout. No new validator failures introduced.
- Internal `§Constitutional Artifacts` section header left as-is. Minor reading-tension accepted: file named `governance-artifacts-and-graph-projections.md` contains a §Constitutional Artifacts section. This is honest about the subtype relationship (the family is governance-level; visions are constitutional-commitments as a subtype). Full section-header + body-prose "constitutional artifact" disambiguation deferred to a later targeted ADR or the downstream propagation audit (parking-lot).
- ADR-0056 deferral closed: the file-rename Phase 2c queue item is now resolved.
- Downstream propagation audit (separate parking-lot item) gains a cleaner starting state: only one "constitutional" vocabulary remains in canon (the design-commitments), simplifying lexicon-drift detection.

## Evidence

- cluster_key: `docs/foundations/governance-artifacts-and-graph-projections.md:file-rename-for-vocabulary-hygiene`
- supports: Phase 2c queue (CLAUDE.md) + ADR-0056 deferral + ADR-0043 precedent
- opposes: 0 (no audit defended preserving the "constitutional-artifacts" filename; operator Option D `abort` rejected at decision-gate in favor of Option A)
- source: CLAUDE.md Phase 2c queue (ref `phase-2c-queue-file-rename`), authorized via operator directive 2026-04-23 Step 2 PASS
- Held-tension overlap: checked 2026-04-23. ADR-0001 pluriversal-incommensurability concepts do not overlap. No tension trigger.
- Adaptation note: 50-file cascade is ~2.5× ADR-0043 precedent; verified via exhaustive pre-migration scope manifest (`tmp/phase-2c-rename-scope-manifest.txt`) + AC7 zero-hit post-migration grep. Session-atomic discipline preserved.

## Diff summary

**File rename (git-tracked)**:
- `docs/foundations/constitutional-artifacts-and-graph-projections.md` → `docs/foundations/governance-artifacts-and-graph-projections.md`

**Renamed file edits** (`docs/foundations/governance-artifacts-and-graph-projections.md`):
- Frontmatter `doc_id`: `spore.constitutional-artifacts` → `spore.governance-artifacts`
- H1: "Constitutional Artifacts and Graph Projections" → "Governance Artifacts and Graph Projections"
- `§Constitutional Artifacts` section header + body: PRESERVED as parking-lot (minor reading-tension accepted)

**Canon-layer cross-ref updates (2 files)**:
- `docs/README.md:27` — Foundations listing + markdown link updated

**Pattern / Protocol layer (5 files, 7 refs)**:
- `docs/patterns/commitment-pooling.md` — depends_on (slug)
- `docs/patterns/discourse-as-governance.md` — depends_on + prose refs (slug)
- `docs/patterns/governance-memory.md` — depends_on (slug)
- `docs/patterns/intent-publication-and-activation.md` — depends_on (slug)
- `docs/protocols/claims-evidence-attestation.md` — depends_on (slug)

**Canon-decisions layer (20 ADRs, ~86 refs)**:
- `0013-intent-evidence-subtype-clarification.md`
- `0016-field-holon-primitive-distinction.md`
- `0019-graph-primitive-unification.md`
- `0031-ecology-cycle-scope-conditioning.md`
- `0035-vision-as-commitment-subtype.md`
- `0036-graph-projections-tiering-and-structure.md`
- `0041-text-authoritative-representation.md`
- `0042-dag-delete-structural-legitimacy-promote.md`
- `0044-core-thesis-primitive-roster-alignment.md`
- `0046-field-rule-level-stratification.md`
- `0047-power-multi-layer-decomposition.md`
- `0048-power-expressive-constructed-modes.md`
- `0049-reproduction-continuity-primitive-admission.md`
- `0050-sociality-side-b-plus-primitive.md`
- `0051-relational-identity-holon-property.md`
- `0052-reciprocity-trust-glossary-with-framing.md`
- `0053-glossary-refinements-bundled.md`
- `0054-rewilding-thesis-decline-with-triggers.md`
- `0055-encounter-as-composition-framing-note.md`
- `0056-phase-2c-semantic-refactoring-bundle.md`

**Connections layer (12 files, ~17 refs)**:
- `bennett-every-timeline.md`
- `canon-framing-cross-repo-concept-splits.md`
- `commons-law-and-charter-lineage.md` (6 refs: depends_on + multiple body prose)
- `constructive-hyperstition.md`
- `intent-pressure.md`
- `johar-conversational-sovereignty.md`
- `johar-governing-volatility.md`
- `johar-neuroplastic-field.md`
- `johar-word-not-thing.md`
- `open-civics.md`
- `p2p-wiki-pass-2-capstone-synthesis.md`
- `sheaf-theory-formalization.md`

**Synthesis layer (2 files, 4 refs)**:
- `human-machine-complementarity.md` (target + cluster prose)
- `linguistic-closure.md` (target + cluster prose)

**Planning layer (9 files, ~17 refs)**:
- `canon-review-protocol.md`
- `corpus-foundational-review-findings.md`
- `corpus-foundational-review-methodology.md`
- `corpus-foundational-review-v1-plan.md`
- `instrumentation-evidence-design-batch-1.md`
- `mediation-foundation-placement.md`
- `mediation-lexicon-target-memo.md`
- `mediation-section-draft-spec.md`
- `reframing/reframing-graph-primitive-unification.md`
- `spore-substrate-stack-assessment.md`

**Total cascade:** 50 downstream files + 1 source = 51 files touched. 126 refs migrated.

**Historical references:** zero tmp/ edits (historical artifacts preserved). Zero scripts/ edits (no code refs). Zero project-vision.md edits (no refs there).

**AC7 verification:** `grep -rn "constitutional-artifacts-and-graph-projections\|spore\.constitutional-artifacts" docs/ README.md scripts/` returns 0 hits (excluding ADR-0057 body's historical mentions, which are quoted tokens not live refs).
