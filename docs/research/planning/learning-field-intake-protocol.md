---
doc_id: spore.planning.learning-field-intake-protocol
doc_kind: planning
status: draft
depends_on: []
---

# Learning Field Intake Protocol

Version: v1 (2026-04-16). Harvested from the P2P Foundation wiki intake (`sequential-questing-sparrow`), 20 bridge notes, 256 wiki-anchored claims, 129 pages cited, 5 rounds of adversarial plan review, 15 concurrent agents.

This protocol governs how we ingest external corpora (wikis, papers, repos, protocols, communities-of-practice) into the learning field across Spore, IC, PM, and future projects. It evolves after each intake round.

## Companion protocols

This protocol is the **first half** of a two-protocol pair for evolving project canon from external prior art. Use them together:

- **This protocol (intake)** — descriptive: how external corpora become bridge notes + wiki-anchored claims in the learning field.
- **[Canon review protocol](./canon-review-protocol.md)** (v1 + v2) — normative: how priority queues produced by intake become ADR-backed edits to foundation docs.

Intake closes with capstone synthesis priority queues; canon review opens on those queues. A full cycle runs intake → capstone → canon review → protocol-evolution → next intake round. Both protocols are harvested-after-execution (v2 of each comes from running v1, not from designing v2 ahead).

**Full-arc retrospective** of the first complete cycle (P2P wiki intake + canon-review v1): [`docs/research/connections/wiki-intake-canon-review-retrospective.md`](../connections/wiki-intake-canon-review-retrospective.md). Read that for how the two protocols interact in practice.

## 1. The two-phase pattern (always)

**Phase A: Informal synthesis sprint.** Before any formal claim infrastructure, do a hypothesis-driven reading pass. Produce a working synthesis note with:
- Query batches per project (what to search for, what questions to answer)
- A high-signal page shortlist (verified to exist)
- Proto-claims per project (working language, not formal C-claims)
- At least one disconfirming hypothesis per project
- Vocabulary corrections (internal term → external alternative + why)

**Phase B: Formal projection.** Formalize the synthesis into bridge notes with Claim Registers, project through `project_bridge_notes.py`, verify via convergence board.

**Why this order matters:** Phase A preserves intellectual judgment; Phase B adds rigor. Reversing the order (formal claims first) produces technically correct but intellectually thinner claims. The synthesis sprint's working language is seed material for the formal claims, not throwaway scaffolding.

## 2. Pre-fan-out governance

Before any parallel agents start writing bridge notes:

### 2a. Frozen concepts vocabulary

Author a YAML file with ~20-30 concept entries, each with `slug`, `canonical_label`, `aliases`, `one_line_definition`, `primary_project`. Mark the first line `# status: frozen`. Commit before fan-out.

**Why:** Two agents independently minting `knowledge-commons` vs `governed-knowledge-commons` vs `knowledge-commons-governance` create parallel concept entities that never unify in the convergence board. The frozen vocabulary prevents slug fragmentation. In the P2P intake, 15 concurrent agents honored the vocabulary with zero violations. Cheap and effective.

**How to extend:** If an agent discovers a concept that genuinely doesn't fit the frozen vocabulary, it logs the gap in the bridge note's Open Questions section and uses the closest existing slug. The vocabulary is extended at tier boundaries (between waves), not mid-fan-out.

### 2b. R-claim target allowlist

Enumerate the valid `[target: doc.id]` values per project from `grep ^doc_id: */docs/foundations/**/*.md`. Agents may only author R-claims targeting these IDs. Off-list targets are caught at tier-boundary review.

**Why:** R-claims targeting nonexistent or out-of-scope canon docs create orphan governance clusters that pollute the convergence board.

### 2c. Source provenance contract

Decide how source provenance is carried per C-claim BEFORE agents start writing. The current contract (P2P wiki intake, v1):

- RID embedded in anchor string: `[anchor: §Section Title · orn:p2p-wiki.page:Slug]`
- Doc-level `sources:` array in frontmatter carries URLs + license for human readers
- Query predicate: `metadata->>'evidence_anchor' LIKE '%orn:<source-prefix>%'`

**Known gap:** `project_bridge_notes.py` does not parse a dedicated `[source: ...]` bracket. RID must ride inside the anchor string until the parser is extended. File follow-on for first-class source_rid field.

### 2d. License determination

If the source corpus has a license (e.g., CC BY-SA 4.0 for wikis), commit a `LICENSE-<SOURCE>-DERIVED.md` notice before fan-out. Per-note threshold: if ≥50% of C-claims carry the source RID in their anchor, the note inherits the source license. Check via grep.

## 3. Bridge note structure

Every bridge note follows the same schema regardless of source corpus:

```yaml
doc_id: <project>.connection.<slug>
doc_kind: research
status: draft
research_subkind: bridge_note
disposition: <slug from DISPOSITION_SLUG>
depends_on: [<doc_ids>]
relates_to: [<doc_ids>]
concepts: [<slugs from frozen vocab>]
sources:
  - url: <source URL>
    title: <page/artifact title>
    rid: <provenance RID>
    type: primary | corroborating
    license: <if applicable>
```

### 3a. Claim Register format

```
**C1** [confidence: high|medium|low] [anchor: §Section · orn:source:Slug] Statement.

**R1** [review claim] [target: doc.id] [concept: slug] Statement.
*R1 is supported by C1, C2.*
```

### 3b. Cross-project R-claims

A bridge note in one project may carry R-claims targeting another project's canon docs. The projection script groups by `governance_cluster_key = {target_doc}:{concept}` regardless of source project. No xref stubs needed.

### 3c. Disposition → stance mapping

`project_bridge_notes.py` line 591: `proposes_change = disposition != "no change"`. Only `disposition: "no change"` produces `opposes` edges. All other dispositions produce `supports`. To generate opposition evidence, use `disposition: no change` with an HTML comment `<!-- stance-intent: opposes; ... -->` explaining the semantic intent.

## 4. Parallelization discipline

### 4a. File ownership

One agent per bridge-note file for the entire tier. No overlapping ownership. Separate repos prevent cross-repo conflict; within a repo, agents own different files.

### 4b. Commit protocol

Per agent, before each commit:
```bash
git pull --rebase origin main
git add <single-file-path>
git commit -m "add bridge note: <slug>"
git push origin main
```
Max 3 retries on non-fast-forward; halt on 4th.

### 4c. Projection is serialized

`project_bridge_notes.py` is NOT reentrant (`find_previous_source_claim` race produces duplicates under concurrency). Agents never run projection. The human operator runs `--dry-run` then `--apply` at tier boundaries only.

### 4d. Concurrency limits

Max 4-6 concurrent agents. Higher concurrency floods the embedding endpoint and exceeds useful parallelism for the reading budget.

## 5. Full-read discipline

Any C-claim with `[anchor: §...]` on a source page requires that page read in full from the local corpus, not just from retrieval excerpts. Budget ~15 min per full read.

**Why:** Retrieval excerpts lose context. Many source pages say similar things in drifted language; a retrieval score is not a semantic guarantee. Anchored claims must be grounded in page-level reading.

**Exception:** Corroborating citations (not anchored in C-claims) may use retrieval excerpts only.

## 6. Opposition notes (mandatory)

Every intake of ≥10 bridge notes MUST include at least 2 explicit opposition notes with `disposition: no change`. These:
- Target the same canon surfaces as the supporting notes
- Use oppose-intent phrasing ("X MUST NOT adopt Y without Z")
- Draw from disconfirming material in the source corpus
- Produce `opposes` edges in the convergence board

**Why:** Without explicit opposition, the intake is a confirmation-bias tour. In the P2P intake, the 2 opposition notes produced 25 opposes edges (6% of all evidence), concentrated exactly at the substrate/federation/commons-absorption surfaces where capture risk was highest. The opposition evidence was not scattered dissent — it was the intake's strongest governance finding. Canon reviewers should read opposition notes first, not last.

## 7. Dead-anchor handling

If a required-read page is a redirect with no target, is missing, or is a stub (<1KB):
1. Log it in `sources:` as `type: corroborating` with explicit note ("dead anchor — redirect chain resolved to empty")
2. Do NOT anchor a C-claim to it
3. Do NOT halt the tier over it
4. After intake, reconcile dead anchors against any alias resolver or redirect database

## 8. Meta-note exemption

Index/synthesis notes that synthesize ACROSS bridge notes (not grounding claims in individual source pages) are exempt from the source RID embedding requirement. Their C-claims anchor to the synthesis note's own sections. Mark as `research_subkind: field_scan`.

## 9. Coverage tracking (improvement from P2P intake)

**Gap identified:** The learning field currently has no way to track which pages/concepts were searched but produced no claims. Coverage gaps are invisible to the convergence board.

**Protocol requirement for future intakes:** After each intake, produce a coverage report:
- Pages in the shortlist that were fully read but produced no claims (and why)
- Categories/topic clusters that were NOT searched
- Explicit "gap areas" list for the next intake pass

The P2P intake's gap areas (identified post-hoc, should have been tracked during):
- Care economy / solidarity economy / feminist economics
- Cosmo-local production / design-global-manufacture-local
- Platform cooperativism / open cooperativism
- Data commons / data sovereignty
- Indigenous governance / decolonization / Buen Vivir / Swaraj / pluriversal governance
- Autopoiesis / enaction / 4E cognitive science / stigmergy (wiki's own treatment)

## 10. Feedback loop (not yet implemented)

**Gap identified:** We read the wiki as a static corpus. The P2P Foundation wiki was built by a community — the intake's interpretations are our readings, not the community's. A mature intake process would include a feedback loop where the source community can respond to extracted claims.

**Future protocol addition:** For corpora authored by known communities or individuals, the capstone synthesis should be shared with the source community for review before canon edits land. This is especially important when the source author is a collaborator (e.g., Will Ruddick's work in the P2P wiki was personally known to the operator).

## 11. Post-intake outputs

Every intake produces:
1. **Bridge notes** (projected into learning field)
2. **Capstone synthesis** (meta-note with per-project priority queues)
3. **Coverage report** (gap areas for next pass)
4. **Process retrospective** (what worked, what broke, what to change in this protocol)
5. **Updated protocol** (this file, versioned)

## 12. Known pipeline limitations (as of v1)

- `project_bridge_notes.py` does not parse per-claim `[source: ...]` brackets (RID in anchor is workaround)
- `create_source_claim` dedup depends on content-hash early-return (commit `9a80cc01`); branch-topology drift can break idempotency
- Review claims have empty `source_document` field (keyed by `target_spec_doc + governance_cluster_key` instead)
- `discover_bridge_notes` substring-matches `research_subkind: bridge_note` on any `*.md` in `bridge_dir`, including code fences in README files
- IVFFLAT probes default causes recall issues for newly inserted chunks; session-level `SET ivfflat.probes = 10` is a workaround; migrate to HNSW recommended
- No claim dependency chains (C3 depends on C1's truth, but the graph doesn't encode that)
- No live contradiction detection (when a new claim opposes an existing one from the same tradition)
- No coverage tracking in the convergence board

## Changelog

- **v1** (2026-04-16): Initial protocol harvested from P2P Foundation wiki intake. 20 bridge notes, 256 claims, 5 review rounds, 15 concurrent agents. Key methodological findings: frozen concepts yaml, two-phase pattern, mandatory opposition notes, serialized projection, full-read discipline. Coverage and feedback gaps identified for v2.
