---
doc_id: spore.planning.canon-review-protocol
doc_kind: planning
status: draft
depends_on: []
---

# Canon Review Protocol

Version: v1 (2026-04-17). Harvested alongside the canon-review-v1 plan (`/Users/darrenzal/.claude/plans/canon-review-v1.md`), pressure-tested through 15 rounds of Codex review. Sibling to the intake protocol (`learning-field-intake-protocol.md`); this protocol covers what the intake protocol explicitly scoped out — the normative evolution of foundation docs in response to learning-field evidence.

This protocol governs how we edit canon (the doc set that materially shapes how Spore / IC / PM describe themselves) in response to priority queues produced by intake. It evolves after each canon-review round.

## 1. Scope: what "canon" means per project

Canon = foundation + vision + roadmap docs that define each project's normative self-description. Research notes, bridge notes, capstone syntheses, patterns, governance, positioning, protocols, and operational docs are NOT canon for the purposes of this protocol.

**Spore canon (in-scope)**:
- `docs/foundations/constitutional-artifacts-and-graph-projections.md`
- `docs/foundations/holonic-network-architecture.md`
- `docs/foundations/mycorrhizal-federation-protocol.md`
- `docs/foundations/relational-agency-and-holons.md`
- `docs/foundations/spore-instance-model.md`
- `docs/foundations/lexicon/**/*.md` (term docs — `spore.term.*`)
- `docs/project-vision.md`, `docs/roadmap.md`
- Plus the protocol-created surfaces: `docs/research/canon-decisions/*.md` and `docs/research/connections/canon-framing-*.md`

**IC canon (in-scope)**:
- `docs/foundations/intelligence-primitives.md`
- `docs/foundations/memory-layer-model.md`
- `docs/project-vision.md`
- Plus `docs/research/canon-decisions/*.md`

**PM canon (in-scope)**:
- `docs/grammar.md`, `docs/protocol.md`
- `docs/project-vision.md`, `docs/downstream-products.md`
- Plus `docs/research/canon-decisions/*.md`

**Explicitly out of scope**: governance/, patterns/, positioning/, protocols/, synthesis/, phase-0-spec (PM), all code, research/ except for canon-decisions and canon-framing files created by this protocol. If a priority-queue item clearly implies changes outside canon, file a follow-on plan — do NOT expand canon-review scope to absorb it.

## 2. Canonical R-claim identifier convention

Every R-claim has ONE authoritative identifier:

```
<bridge-note-doc-id>:R<n>
```

Example: `spore.connection.federation-and-interop:R2` points to the line `**R2** [target: spore.mycorrhizal-federation-protocol] [concept: power-capture] ...` in the source bridge note. That bridge-note line is immutable ground truth.

Capstone synthesis priority queues (Pass 1 §5, Pass 2 §3/§5/§6) are *derivative summaries* — they renumber for scannability. When an ADR cites a queue item, it MUST trace back to the source R-claim. The ADR's `r_claim_source:` frontmatter field always uses the `<bridge-note-doc-id>:R<n>` form (as a YAML block list, even for single-entry). The queue's own numbering is body-only context.

Aggregate queue items (capstone rolls up multiple R-claims under one item) yield an array of identifiers in `r_claim_source:`, primary-first per §5 deterministic precedence:

1. R-claim whose `[target: ...]` matches the queue item's explicit target column
2. Among ties: highest support-count cluster on that target
3. Among ties: first in the capstone's evidence citation order
4. Among ties: alphabetical by bridge-note doc_id

The primary entry (`r_claim_source[0]`) is the one Constraint 5 gating (see §4) evaluates; secondaries are Evidence-section context.

## 3. ADR-lite format

Every decision produced by canon-review is captured as a single markdown file (one ADR = one decision = one coordinated commit set) at:

```
<repo>/docs/research/canon-decisions/<NNNN>-<slug>.md
```

ADR numbering is zero-padded 4 digits, repo-local, starts at 0001. Frontmatter + body:

```yaml
---
doc_id: <spore|ic|pm>.canon-decision.<slug>
doc_kind: decision-record
adr_number: <NNNN>
status: proposed   # lifecycle below
decision: edit | hold-as-tension | reject
r_claim_source:
  - <bridge-note-doc-id>:R<n>   # primary (first entry)
  - <bridge-note-doc-id>:R<m>   # secondaries (aggregate only)
r_claim_statement: <verbatim R-claim text; primary only>
queue_reference: <optional, e.g., "Pass 2 capstone §3.Spore #10">
affects_canon:
  - <repo-relative path of canon file this ADR touches>
related_adrs: []                # "<repo>:ADR-<NNNN>-<slug>" entries or []
shared_framing:                 # absolute path if cross-project, else absent/empty
concepts:
  - <slug-from-frozen-v2-vocab>
superseded_by:                  # optional reverse-traceability
---

## Context
What the R-claim is asking for; what supporting/opposing evidence looks like.

## Decision
Edit / hold / reject — with rationale.

## Consequences
What changes in canon; what remains unresolved; what future intake might revisit.

## Evidence
- cluster_key: <target_doc>:<concept>
- supports: <N>
- opposes: <M>
- source: capstone | psql personal_koi | manual count <YYYY-MM-DD>
- Supporting bridge notes: [...]
- Opposing bridge notes: [...]
- Cross-project echoes: [<project>:<cluster-key>, ...]
- Held-tension overlap: <"None checked YYYY-MM-DD: concepts=[...]" | "Prior hold-as-tension ADR NNNN-<slug> on concept <X>; tension no longer blocks because <reason>">

## Diff summary
Brief note of which canon files change and the essential shape of the edit — not a full diff.
```

**YAML list-format convention**: all multi-valued fields (`r_claim_source`, `affects_canon`, `related_adrs`, `concepts`) use block-list form (one entry per line with leading `- `). Empty arrays are written as `[]` on the same line as the key. Verification scripts fail-closed on inline-array form for non-empty fields.

**Status lifecycle**:
- `proposed` — ADR drafted; AC-* checks not yet complete. Every ADR is authored in this state.
- `accepted` — AC-8/8b/8c/8d (evidence, concepts, affects_canon validity, r_claim verbatim) all pass AND commit has landed on main (or PR merged, if branch+PR flow).
- `superseded` — a later ADR replaces this one. Superseding ADR lists this ADR in `related_adrs:`; this ADR gains `superseded_by:` field for reverse traceability.
- `partial-drift` — Constraint 6 mid-set failure recovery state. Hard execution gate blocks new ADRs until resolved. Transitions to `accepted` (fix-forward completed) or `superseded` (fix-forward reverted).

An ADR is never authored directly as `accepted` — always starts `proposed`, transitions after verification + commit-land.

## 4. Triage rubric (edit / hold / reject)

An R-claim may produce a canon **edit** only if ALL three conditions hold:

(a) **Cluster size**: supporting cluster has ≥3 source claims (`supports ≥ 3`)
(b) **Opposition density**: `supports > opposes` (opposition below 50%)
(c) **No blocking held-tension ADR**: no existing `decision: hold-as-tension` ADR on an overlapping concept that the new edit would contradict without explicit justification

If any condition fails, disposition is `hold-as-tension` or `reject`.

**Counts source-of-truth**:
1. Primary: capstone synthesis notes (Pass 1 §5 / Pass 2 §3 annotate "XS/YO" per item).
2. Verification: `psql personal_koi` query against `entity_relationships` + `claims`, grouped by `governance_cluster_key`. If DB diverges from capstone by >1 on either side of the threshold, DB is authoritative.
3. Fallback (DB unavailable): capstone is authoritative; record "DB recount unavailable at YYYY-MM-DD HH:MM PDT" in ADR Evidence.
4. No counts anywhere: manual count from bridge notes, logged in Evidence as "manual count, <date>, reason: ...". If not feasible → disposition `hold-as-tension` with Evidence note "cannot tally evidence strength".

**Edge case — exact-1 diff that flips disposition**: DB is authoritative over capstone. ADR records the drift explicitly.

**Held-tension overlap check procedure** (for condition c, before disposition `edit`):

```bash
# Find all ADRs with decision: hold-as-tension across three repos
grep -l '^decision: hold-as-tension' \
  /Users/darrenzal/projects/{spore,intelligence-commons,poietic-match}/docs/research/canon-decisions/*.md 2>/dev/null

# For each, check concept overlap with the proposed edit
for adr in $(...); do
  grep -E '^(concepts:|affects_canon:)' -A5 "$adr"
done
```

If a prior hold-as-tension ADR shares a concept with the proposed edit, the new ADR MUST either (i) explicitly argue why the tension no longer blocks, citing new evidence in Context; or (ii) change its own disposition to `hold-as-tension` with `related_adrs:` referencing the prior hold. Record the check result in Evidence.

**First-class dispositions**:
- `edit` — canon changes land this session, backed by ADR
- `hold-as-tension` — canon does NOT change materially, but gains an inline pointer (`<!-- held-tension: NNNN-<slug> -->` or `see docs/research/canon-decisions/NNNN-<slug>`) in every `affects_canon` file so future readers can follow the trail. The pointer edit is in the same commit set as the ADR, NOT deferred.
- `reject` — no canon edits. ADR records why the R-claim does not warrant canon change. The commit touches only the ADR file (AC-11 enforces: reject ADR commits must touch zero non-ADR canon files).

Held tensions are first-class. A canon doc with acknowledged tensions is stronger than one that silently picks a side. There is no count-quota on holds — evidence drives disposition.

## 5. Cross-project coordination

### 5a. Shared-framing note convention

When a decision affects canon in ≥2 repos, author ONE shared framing note at:

```
/Users/darrenzal/projects/spore/docs/research/connections/canon-framing-<slug>.md
```

Spore is the canonical host (convention, not hierarchy) — it has the most-trafficked research tree and the largest bridge-note corpus, so canon-framings colocate with cross-project connection notes. The intake protocol follows the same host convention (frozen concepts yaml lives in Spore).

The shared framing note precedes per-repo ADRs. Per-repo ADRs reference the framing via `shared_framing:` frontmatter (absolute path, not relative — cross-repo portability).

```
canon-framing-power-capture.md (spore/docs/research/connections/)
  ├─ spore/docs/research/canon-decisions/0003-power-capture-in-federation.md
  ├─ intelligence-commons/docs/research/canon-decisions/0002-power-capture-in-memory-layers.md
  └─ poietic-match/docs/research/canon-decisions/0002-power-capture-in-protocol.md
```

### 5b. Fan-out trigger

Fan-out is triggered by `affects_canon` crossing repo boundaries, NOT by `r_claim_source` citing multiple repos. A decision whose `r_claim_source` array spans repos but whose `affects_canon` is single-repo is a single-repo decision — the cross-repo R-claims are evidence context only.

### 5c. Shared-framing carrier rule (Spore not an affected repo)

If a coordinated decision affects only IC + PM (no canon edits in Spore), the Spore-hosted `canon-framing-<slug>.md` must still exist. Spore becomes part of `affected_repos` for a framing-only commit: Spore's commit stages ONLY the framing file (no ADR, no canon edit), with message `canon: shared framing for ADR-<NNNN>-<slug> (ic+pm coordination)`. This is a legitimate exception to the "no-op commits forbidden" rule — the framing carries cross-project meaning and requires a SHA for the rollback manifest. Spore's per-repo ADR is NOT authored in this case; authored only in IC + PM.

### 5d. Session-atomic authoring for coordinated sets

Coordinated cross-project commit sets (shared framing + N ADRs + N canon edits across repos) must be authored and pushed in the same session:

- All N commits authored within one contiguous work session
- All `git push origin main` calls complete within 30 minutes of each other (AC-4c)
- Spore validator passes after Spore's commits (§6)
- Manual frontmatter check passes on any IC/PM commits (§6)

### 5e. Coordination-drift recovery

If one repo's push fails after others have landed and the 30-minute window closes, the operator either:
1. Resolves the blocker and completes within window, OR
2. Reverts already-pushed commits to restore pre-set state (solo-operator rule: never force-push)

If partial state is irrecoverable (intervening commits, merge conflicts on revert), accept it but: (1) author a coordination-drift Execution log entry, (2) mark affected ADRs `status: partial-drift`, (3) HARD EXECUTION GATE — no new ADRs until all `partial-drift` ADRs resolved, (4) schedule a fix-forward ADR within 48 hours (new ADR number, catches up or reverts pending repos), (5) flip status back to `accepted` or `superseded` after fix-forward.

If 48 hours elapses without resolution, escalate: downgrade plan scope (close at current tier), manual reconciliation with full audit trail, OR (last resort) global rollback via plan-manifest SHAs.

## 6. Validation per repo

**Spore**: `python3 scripts/validate_spec_dag.py` must run post-edit. Non-regression rule: post-edit error count ≤ baseline (captured pre-plan; baseline value authority is the Execution log entry, not hardcoded in docs). If Spore validator warns (vs errors) on an edit, ADR must explain.

**IC + PM (no validator)**: manual frontmatter check per commit. Required fields:

| Field | Rule |
|---|---|
| `doc_id` | Non-empty; must match canonical allowlist. Does NOT change during edits. |
| `doc_kind` | Non-empty. Preservation, not canonicalization — does NOT change during edits. |
| `status` | Non-empty. Preservation — does NOT change during edits. If an ADR specifically proposes a status change, that's a meta-edit requiring justification. |
| `depends_on` | If pre-edit doc had it, post-edit must too; each entry resolves to a real doc_id. Removals require explicit justification in ADR body. |
| `relates_to` | If present, array of valid doc_ids. |
| `concepts` | Every slug must exist in `/Users/darrenzal/projects/spore/docs/research/concepts-p2p-wiki.yaml` v2. No new slugs introduced during canon-review (see §7). |

Manual check script (see plan §D7 for full body). Any FAIL blocks the commit.

**Pre-plan baseline rehabilitation**: before any canon-review ADR lands on IC/PM, run the D7 check against every in-scope canon doc. Gaps are either (a) commit a one-off baseline-fix (separate from canon-review ADRs), (b) log explicit exception, or (c) halt for a separate plan if the gap is structural. No canon-review ADR may be the vehicle for baseline frontmatter repair.

## 7. Concepts vocabulary (strict)

All `concepts:` entries in ADRs, canon edits, and shared framing notes must be keys present in the frozen concepts-p2p-wiki.yaml v2 (`# status: frozen`, `# version: v2`, `# frozen_at: 2026-04-17`).

**Zero new concept slugs introduced during canon-review.** If a canon edit genuinely needs a concept not in v2, the ADR disposition is `hold-as-tension` with Evidence note "requires vocabulary extension: <proposed slug>; blocked on v3 freeze". The edit defers until a separate plan extends the frozen vocab.

Rationale: concept vocab is cross-project infrastructure. Ad-hoc extensions from within canon-review would re-introduce the concept-fragmentation failure mode the intake protocol was built to prevent.

## 8. Tiering

Canon review proceeds in tiers, evidence-driven, not schedule-driven.

- **Tier A — Held-open tensions.** Resolve the 3 tensions the capstone marked held (e.g., DH-PM-1 accounting-dependence, DH-IC-1 pluriversal translation, reproduction-primacy reframing). Each produces one decision ADR; disposition is inspection-dependent.
- **Tier B — Cross-project structural insights.** Themes that span ≥2 repos and aren't bounded by a single R-claim (reproduction primacy, boundary-theory unification, 3-layer coordination stack, decentralization-myth bundle). Each authored as shared framing note → coordinated per-repo ADRs.
- **Tier C — Per-project priority queues.** Highest-ranked items from capstone Pass 2 §3 per project. Process in rank order; concept-clustering permitted only when consecutive items share >80% evidence overlap.
- **Tier D — Long-tail.** Explicitly deferred unless A/B/C complete with slack.

**Tier A→B handoff rule**: a concept that appears in both tiers (e.g., reproduction-primacy) is NOT duplicate work. Tier A authors the decision ADR + full implementation in one commit set (Constraint 1). When Tier B reaches that concept:
- Tier A decided `edit`: Tier B work is a no-op; log "covered by Tier A ADR-NNNN (edit)" in Execution log.
- Tier A decided `hold-as-tension`: inline pointer already inserted; log "held per Tier A ADR-NNNN; pointer already in canon" and skip.
- Tier A decided `reject`: skip the Tier B slot entirely.

Same rule applies to any other concept that overlaps tiers. Check before starting each Tier B/C item: `grep -l '<concept-slug>' <repo>/docs/research/canon-decisions/`.

**Tier C precedence rule**: when Pass 1 §5 and Pass 2 §3 rank the same item differently, Pass 2 §3 supersedes Pass 1 §5 (§3 is titled "Per-Project Priority Queues (Pass 1 + Pass 2)" — the combined updated queue). Pass 1 §5 is narrative context only when Pass 2 §3 explicitly marks "carry forward unchanged".

**Tier C shared-concept escalation**: before any Tier C item, check its concept against the cross-project shared list (cross-3-project: power-capture, boundary-commoning, reproductive-commoning, pluriversal-commoning, coordination-substrate, decentralization-theater, digital-labor-peer-production, administrator-capture-in-peer-governance; cross-2-project: market-dependence (Spore+PM), knowledge-commons (IC+Spore), memory-governance (IC+Spore), commitment-pooling (PM+Spore), interoperability-as-institutional (IC+PM), commons-as-verb (Spore+IC)). Shared-concept items MUST escalate to the coordinated-ADR runbook — no single-repo ADR on a shared concept. If the concept has a prior ADR, apply the Tier A→B handoff rule.

## 9. Stop / pause conditions

- **After Tier A**: pause. If held-tension resolution clarified (any tension became editable or got rejected), adjust Tier B plan.
- **After Tier B**: pause. If cross-project edits introduced contradictions, halt Tier C and reconcile.
- **After Tier C**: harvest protocol v2 (§10).
- **Hard stop**: if any tier produces >2 contradicting edits across repos, halt immediately, reconcile manually, document in Execution log.

## 10. Post-execution harvest

Every canon-review round produces:
1. ADRs (per-repo, each a single decision, traceable to R-claim)
2. Shared framing notes (one per cross-project concept)
3. Canon edits (in-scope files only — see §1)
4. Process retrospective (what worked, what broke, what this protocol should change in v2)
5. Updated protocol (this file, versioned in §11 changelog; v2 appended in-place)
6. Memory note (`project_canon_review_v<N>.md` — distinct from intake memory)

## 11. Constraints summary (cross-reference)

1. **One decision = one ADR = one coordinated commit set.** No multi-decision bundling. Fan-out (framing + N per-repo ADRs + N canon edits) is implementation mechanics, not a unit violation.
2. **Held tensions are first-class.** No count quota.
3. **Shared-concept coordination.** ADR authored FIRST, reviewed for cross-project coherence, then edits landed as a coordinated set. No single-repo edits to shared concepts.
4. **No validator bypass.** Spore validator non-regression; IC/PM manual frontmatter check per commit.
5. **Evidence threshold** (§4): ≥3 supports, supports > opposes, no contradicting held-tension ADR. Otherwise hold or reject.
6. **Session-atomic for cross-project sets.** 30-minute push window; coordination-drift recovery is a hard execution gate.
7. **No bundled decisions.** Every ADR has exactly one `decision:` field value.
8. **No-op commits forbidden.** Exception: shared-framing carrier commit (§5c).
9. **Rollback restricted to plan-manifest SHAs.** Time/message-based SHA discovery forbidden for rollback.

## 12. Moratorium / Move-0 acknowledgment

The canon moratorium was lifted 2026-04-16 (projected Move 0 acceptance window lapsed; Jeff silent since Apr 13 compose letter — no point protecting a pilot that isn't running). Canon-review v1 executes under that lifted moratorium. Acknowledged risk: canon drift may land a framing Jeff later tests against and finds incompatible.

Mitigation accepted (not a procedural gate):
- Cross-project structural insights (Tier B) are the Jeff-most-relevant edits and get the highest coordination ceremony.
- Held-tension disposition means canon can acknowledge openness instead of picking a side Jeff might reject.
- If Jeff re-engages mid-round, operator may pause Tier C/D and prioritize any Jeff-requested reconciliation.
- No automatic re-gating on Jeff acceptance. Canon evolution and pilot execution are decoupled — Move 0 tests whatever canon exists at the moment.

If a future moratorium is ever reinstated, the canon-review protocol can still be used to draft ADRs in `proposed` state without landing commits, holding them until the moratorium lifts again. The infrastructure carries over; only the commit gate changes.

## 13. Known limitations (v1)

- Spore validator has pre-existing errors on cross-project bridge notes (7 as of 2026-04-17 baseline) — a known intake-plan artifact, NOT a canon-review issue. Separate follow-on plan filed to fix validator's cross-project bridge-note handling.
- IC and PM have no validator; manual frontmatter check is the gate. Follow-on tickets `ic-add-validator` / `pm-add-validator` remain open.
- ADR-lite format is scoped to canon-review. If the broader Regen/Spore ecosystem adopts ADRs, migration is a separate plan.
- No automated cross-repo ADR indexing — `related_adrs:` links are resolved by convention + AC-18 verification, not by a registry.
- Canon edits do not auto-flow into the learning field (projection reads bridge notes, not foundation docs). Canon edits become new source material for the next intake pass (if/when triggered) but have no DB impact during canon-review.

## Changelog

- **v1** (2026-04-17): Initial protocol harvested alongside the canon-review-v1 plan. 15 rounds of Codex review. Key methodological choices: protocol-first (canon review is normatively different from intake, which is descriptive), ADR-lite format (compact, one-screen), strict concepts vocabulary (no ad-hoc extension), held-tension first-class (no count quota), cross-project coordination via Spore-hosted framing notes + session-atomic commit sets, evidence threshold with DB-authoritative verification. v2 to be harvested after canon-review-v1 execution completes.
