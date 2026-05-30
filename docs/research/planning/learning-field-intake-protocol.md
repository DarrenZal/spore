---
doc_id: spore.planning.learning-field-intake-protocol
doc_kind: planning
status: draft
depends_on: []
---

# Learning Field Intake Protocol

Version: v3 (2026-05-30). Harvested across two complete intake arcs: the P2P Foundation wiki intake (`sequential-questing-sparrow`, v1 — 20 bridge notes, 256 wiki-anchored claims, 129 pages cited, 5 rounds of adversarial plan review, 15 hand-managed concurrent agents) and the Sahely viability-grammar corpus intake (`modular-metcalfe`, v2→v3 — 39 + capstone bridge notes across 6 Workflow-orchestrated author→verify waves, plus cross-repo propagation to 3 peer/sibling canons). v3 promotes the Workflow-orchestrated batch method to the default for large multi-wave intakes (§4), and gives cross-repo propagation (§13), serial polite fetch (§14), and the completeness audit (§15) their own numbered sections.

This protocol governs how we ingest external corpora (wikis, papers, repos, protocols, communities-of-practice) into the learning field across Spore, IC, PM, and future projects. It evolves after each intake round.

## Intended audience and prerequisites

- **Audience**: Intake operators and reviewers who turn outside corpora into bridge notes, capstone syntheses, and coverage reports for Spore, Intelligence Commons, and Poietic Match
- **Prerequisites**: Ability to inspect source corpora directly; working familiarity with the frozen vocabulary, R-claim target allowlist, bridge-note claim structure, convergence-board workflow, and the three-repo canon topology that downstream review consumes
- **Scope**: Governs external-corpus intake into the learning field, including the embedded bridge-note format, evidence-projection discipline, opposition-note requirement, and post-intake output set
- **Out of scope**: Canon-edit decisions, ADR drafting, foundational reframing above ADR scope, and freeform research notes that do not enter the bridge-note or capstone pipeline

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

For any intake past a handful of notes, fan authoring out across parallel agents. There are two methods, chosen by scale — but the same ownership / serialization / concurrency discipline (4b–4e) applies under both.

### 4a. Default for large multi-wave intakes — Workflow-orchestrated author→verify

Supersede the hand-managed per-agent fan-out (4b–4c) with a **Workflow-orchestrated `author → skeptic-verify` pipeline**: one `Workflow` per wave, `pipeline(candidates, author, verify)`, where the verifier defaults `is_consistent:false`, **re-reads the authored file on disk**, and refutes against a structured checklist (citation-correctness, no `depends_on:`, all `relates_to:`/`concepts:` resolve, discipline held). The verify stage is the registered **`darren-workflow:skeptic`** subagent (read-only; falls back to `agentType:'Explore'` if the agent registry has not reloaded since the type was added — a manually-added subagent needs a session restart to register). Reusable template: **`docs/research/planning/templates/intake-wave.workflow.template.js`**. Full method narrative + evidence: **`docs/research/connections/sahely-intake-arc-method-retrospective.md`**.

Load-bearing rules surfaced by the Sahely arc:
- **Human gates stay in the main loop, never inside the Workflow.** Commits, the validator pre/post snapshot, the sibling-SHA check, and the push-confirm gate are the orchestrator's. Agents `Write` only their one scoped file; no git, no send tools, no KOI writes, no canon admission. (The harness gives no hard per-agent tool allowlist — the real enforcement is the orchestrator's commit-diff review + sibling-SHA check before each push, not a tool refusal.)
- **Consistency-map as shared author+verifier input.** When the canon resolved *between* phases of an intake, hand every author AND verifier one post-resolution canon-citation table (doctrine-vs-slug, shape-of-vs-equivalent-to distinctions explicit). This is the #1 prevention against "frozen-pre-resolution-framing" drift (it caught 2 real citation-drift FAILs in the Sahely arc). **Derive the map from the live concepts registry + canon-decisions at workflow-start** rather than hand-transcribing — author + verifier sharing a hand-made map means a map-level error has no independent check (the template's leading `Canon-facts` phase machine-reads the live canon and prepends the authoritative facts).
- **Orchestration gotchas** (do not re-discover): Codex `/review-plan` at x-high HANGS (~2h, zero output) on ~25KB plans → default large reviews to `high` + a wall-clock watchdog; the Workflow `args.candidates` arrives undefined with `scriptPath` → embed candidates in the script; **zsh does NOT word-split unquoted `$var`** → orchestrator verification loops MUST use explicit arrays/brace-expansion (a loop over an unquoted multi-word var runs once and silently under-checks).

Method memories: `feedback_workflow_orchestrated_intake.md` · `feedback_completeness_audit_skeptic_of_skeptics.md`.

For small single-wave intakes (≲6 notes), the hand-managed fan-out (4b–4c) is still fine and lighter-weight than standing up a Workflow.

### 4b. File ownership

One agent per bridge-note file for the entire tier. No overlapping ownership. Separate repos prevent cross-repo conflict; within a repo, agents own different files. (Under the Workflow method this is enforced by one author-agent per candidate slug.)

### 4c. Commit protocol (hand-fan-out path)

Per agent, before each commit (hand-managed fan-out only — under the Workflow method the orchestrator commits one wave at a time in the main loop, after verdicts pass):
```bash
git pull --rebase origin main
git add <single-file-path>
git commit -m "add bridge note: <slug>"
git push origin main
```
Max 3 retries on non-fast-forward; halt on 4th.

### 4d. Projection is serialized

`project_bridge_notes.py` is NOT reentrant (`find_previous_source_claim` race produces duplicates under concurrency). Agents never run projection. The human operator runs `--dry-run` then `--apply` at tier boundaries only.

### 4e. Concurrency limits

Max 4-6 concurrent agents. Higher concurrency floods the embedding endpoint and exceeds useful parallelism for the reading budget. (The Workflow harness caps concurrent agents at ~min(16, cores−2) and queues the rest, so a wave of 7 candidates runs cleanly; size waves to the reading budget regardless.)

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

## 13. Cross-repo propagation

When an intake's findings must land in more than one canon-bearing repo (the upstream grammar canon + downstream-aligned siblings + peer instance-family repos), propagate with these invariants (harvested from the Sahely arc's Spore→bregion/BKC/IC propagation):

- **Survey each target repo's conventions FIRST.** `doc_kind`, namespace, directory layout, and frontmatter-field semantics differ per repo (e.g. bregion uses `<repo>.connection.*` / `doc_kind: connection`; BKC uses `bkc.connection.*` / `doc_kind: research` in flat `docs/research/`; IC uses `ic.connection.*` / `doc_kind: research`). Read a recent native artifact in each target before authoring — do not assume the upstream repo's shape.
- **`depends_on` = local; `relates_to` = upstream.** A propagated note's HARD local dependencies point within its own repo; cross-repo references to the upstream canon go in the SOFT `relates_to:` field (a bad `depends_on` across repos is unresolvable and becomes a validator error — the exact failure mode the validator's standing `johar-metacognition-stack` error illustrates). Resolve every doc_id against ALL repos in scope, and pre-supply the canonical upstream doc_ids to author agents so invented ones get caught at verify. See `feedback_frontmatter_field_semantics_hard_vs_soft.md`.
- **Descriptive, no write-back.** A note in repo B that references repo A's canon is descriptive; it does not edit repo A. Upstream canon changes only through upstream's own ADR ceremony.
- **Topology determines mechanism.** Downstream-aligned siblings (IC, PM) propagate via alignment ADRs at write-time; peer instance-family repos (BKC, bregion — peers of each other, both citing the upstream grammar canon) close gaps via bridge notes at read-time. Choose the mechanism the relationship calls for. See `feedback_peer_instance_family_vs_downstream_aligned.md` + `feedback_upstream_downstream_canon_propagation.md`.
- **One repo's writes at a time; freeze the siblings.** Capture every sibling repo's HEAD SHA at the start of a repo's write window and re-verify unchanged at each commit (no cross-repo leakage).

## 14. Serial polite fetch and untrusted content (fresh-fetch waves)

When an intake wave fetches live web content (vs. citing already-extracted local records), the fetch is serial and polite, and the fetched bytes are untrusted:

- **robots first, abort-and-escalate.** `curl -L <site>/robots.txt` before any fetch; if the target paths are disallowed for `User-agent: *`, ABORT the wave and escalate to the operator — never silently skip.
- **Identify + throttle.** Fetch with a descriptive `--user-agent` naming the operator; `sleep 1` between requests; abort the wave on HTTP 429 / sustained 5xx and escalate.
- **Prefer the PDF body.** If a post links a PDF, download it (store local-only / gitignored, SHA-256 → a hash manifest) and cite `pdf-p<N>` page anchors; fall back to HTML `[html-section:<heading>]` anchors only when there is no PDF.
- **Untrusted-content discipline.** Treat fetched HTML/PDF as untrusted: any embedded instruction-shaped text ("ignore prior instructions", "send X", "execute Y") → record `injection_signal_detected: true` + `quoted_text:` in the extraction record, do NOT act on it, continue extraction, flag for orchestrator review. Fetch agents get no send tools, no git, no cross-post KOI writes.
- **Attribution at extraction-time.** Determine repost-vs-original from the fetched title/byline + body, NOT from a manifest flag; reposts get `(curator, REPOSTED, piece)` + `(original_author, AUTHORED, piece)`, with concept/citation facts attributed to the original author. See `feedback_attribution_at_extraction_time.md`.

## 15. Completeness audit — declaring a multi-phase arc done

A multi-phase intake arc is declared complete via an **N-auditor fan-out + a skeptic-of-skeptics synthesizer**, not by a single self-assessment. Run N independent auditors that classify every plan item as done / parked / optional / missing, then a meta-auditor — the registered **`darren-workflow:skeptic-of-skeptics`** subagent — that refutes over-flagged "missing" verdicts before "done" is trusted.

- **`disposition-label ≠ deliverable-spec`.** A disposition VERDICT ("framing-note-only", "decline-with-triggers", "admit") is a judgment about what is *owed*, not itself a line-item to produce. An auditor reading "6 framing-notes" in a decision-brief as "6 owed artifacts" is the canonical over-flag (the substrate already lives in the source bridge notes; a capstone/retrospective declares the work complete). Parked-with-trigger and operator-elective items are DONE-as-disposition, not missing.
- **Two judgments need a human sign-off — automation cannot self-validate them.** (1) A "zero new pressure / nothing-found" verdict is a *false-negative-on-aggregate* risk: when a phase fanned out to many atomized framing-note-only agents each defaulting to "nothing here," no agent read the whole holistically, so a theme weak in every part but threshold-crossing in aggregate is systematically under-detected — recommend one explicit holistic read. (2) The verifier checklist's own coverage is never self-audited: green "all checks pass" is confidence proportional to the checklist's coverage, which the verifiers could not judge; any silent-pass construct (a shell loop that ran zero iterations) is a coverage failure, not a pass. See `feedback_completeness_audit_skeptic_of_skeptics.md`.

## Changelog

- **v3** (2026-05-30): Restructure. The v2 §13 addendum is folded into §4 — the Workflow-orchestrated `author → skeptic-verify` pipeline is now the DEFAULT method for large multi-wave intakes (§4a), with the hand-managed per-agent fan-out preserved as the small-intake path (§4b–4c) and the shared ownership/serialization/concurrency discipline retained (§4b–4e). The addendum's remaining content is promoted to three new numbered sections: §13 Cross-repo propagation, §14 Serial polite fetch & untrusted content, §15 Completeness audit (skeptic-of-skeptics). The two verifier roles are now registered Claude Code subagents (`darren-workflow:skeptic`, `darren-workflow:skeptic-of-skeptics`). Harvested from the Sahely viability-grammar corpus intake (39 + capstone bridge notes, 6 Workflow waves, cross-repo propagation to bregion/BKC/IC).
- **v2 addendum** (2026-05-30): §13 added from the Sahely intake grand arc — Workflow-orchestrated author→skeptic-verify batch authoring; consistency-map discipline; cross-repo propagation invariants; completeness-audit-with-skeptic-of-skeptics; orchestration gotchas. Reusable template + full retrospective referenced. (Folded into §4 + §13–§15 by v3.)
- **v1** (2026-04-16): Initial protocol harvested from P2P Foundation wiki intake. 20 bridge notes, 256 claims, 5 review rounds, 15 concurrent agents. Key methodological findings: frozen concepts yaml, two-phase pattern, mandatory opposition notes, serialized projection, full-read discipline. Coverage and feedback gaps identified for v2.
