---
doc_id: spore.planning.canon-review-protocol
doc_kind: planning
status: draft
depends_on: []
---

# Canon Review Protocol

Version: v1 (2026-04-17), v2 (2026-04-18), v3 (2026-04-20). v1 and v2 were harvested alongside the canon-review-v1 plan (`/Users/darrenzal/.claude/plans/canon-review-v1.md`), pressure-tested through 15 rounds of Codex review; v3 first applied the governance-hardening and status-vocabulary unification authorized by `reframing-protocol-governance-hardening` and now also carries the vocabulary-governance shell authorized by `reframing-frozen-vocabulary-role`. Sibling to the intake protocol (`learning-field-intake-protocol.md`); this protocol covers what the intake protocol explicitly scoped out — the normative evolution of foundation docs in response to learning-field evidence.

This protocol governs how we edit canon (the doc set that materially shapes how Spore / IC / PM describe themselves) in response to priority queues produced by intake. Canon-review rounds may harvest lessons for future revisions, but changes to this protocol's governance rules now route through the constitutional-amendment guard in §12 rather than ordinary round close.

## Intended audience and prerequisites

- **Audience**: Canon authors, round operators, and reviewers who turn learning-field priority queues into ADR-backed canon edits across Spore, Intelligence Commons, and Poietic Match
- **Prerequisites**: Read access across the three active repos; working familiarity with the intake protocol, ADR corpus, frozen vocabulary gate, `corpus-review/v1` branch discipline, and the validator/manual frontmatter checks this protocol invokes
- **Scope**: Governs canon-review rounds that evaluate priority-queue claims, choose `edit` / `hold-as-tension` / `reject`, and land ADR-backed changes to in-scope canon surfaces
- **Out of scope**: External-corpus intake, foundational reframing for findings that exceed ADR scope, and canon-adjacent edits that bypass ADR lineage or the canon allowlist

## Companion protocols

This protocol is the **second half** of a two-protocol pair for evolving project canon from external prior art. Use them together:

- **[Learning field intake protocol](./learning-field-intake-protocol.md)** — descriptive: how external corpora become bridge notes + wiki-anchored claims in the learning field. This is the upstream of canon review's priority queues.
- **This protocol (canon review)** — normative: how priority queues from intake become ADR-backed edits to foundation docs. v2 (2026-04-18) appended after v1 with 29 rules harvested from running v1; later revisions to this protocol's governance semantics route through the constitutional-amendment guard in §12.

A full cycle runs intake → capstone → canon review → protocol-evolution → next intake round. The v1 -> v2 move was harvested after execution; later protocol changes are no longer self-ratified by ordinary canon-review execution and must use the governance path named in §12.

**Full-arc retrospective** of the first complete cycle (P2P wiki intake + canon-review v1): [`docs/research/connections/wiki-intake-canon-review-retrospective.md`](../connections/wiki-intake-canon-review-retrospective.md). Read that for how the two protocols interact in practice, the four structural insights landed, the three held-open tensions, and the vision-level shifts across all three projects.

## 1. Scope: what "canon" means per project

Canon = foundation + vision + roadmap docs that define each project's normative self-description. Research notes, bridge notes, capstone syntheses, patterns, governance, positioning, protocols, and operational docs are NOT canon for the purposes of this protocol.

**Spore canon (in-scope)**:
- `docs/foundations/constitutional-artifacts-and-graph-projections.md`
- `docs/foundations/holonic-network-architecture.md`
- `docs/foundations/federation-protocol.md`
- `docs/foundations/relational-agency-and-holons.md`
- `docs/foundations/spore-instance-model.md`
- `docs/foundations/structural-legitimacy.md`
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
status: draft   # lifecycle below
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
- `draft` — ADR drafted; AC-* checks not yet complete. Every ADR is authored in this state.
- `active` — AC-8/8b/8c/8d (evidence, concepts, affects_canon validity, r_claim verbatim) all pass and the decision is the live landed record.
- `deprecated` — ADR remains in the corpus for traceability but is no longer the preferred live reference for new work. Use when a decision is retired without a one-for-one superseding ADR.
- `superseded` — a later ADR replaces this one. Superseding ADR lists this ADR in `related_adrs:`; this ADR gains `superseded_by:` field for reverse traceability.

An ADR is never authored directly as `active` — always starts `draft`, transitions after verification + commit-land. Coordination drift is tracked in execution artifacts while the ADR remains `draft` until the set is repaired or reverted.

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

If partial state is irrecoverable (intervening commits, merge conflicts on revert), accept it but: (1) author a coordination-drift Execution log entry, (2) keep affected ADRs in `draft` until the set is repaired or reverted, (3) HARD EXECUTION GATE — no new ADRs until the open coordination-drift is resolved, (4) schedule a fix-forward ADR within 48 hours (new ADR number, catches up or reverts pending repos), (5) flip status to `active` or `superseded` after fix-forward.

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

Rationale: concept vocab is cross-project infrastructure. Ad-hoc extensions from within canon-review would re-introduce the concept-fragmentation failure mode the intake protocol was built to prevent. Changes to the vocabulary surface itself are governed by §14.

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
4. Process retrospective (what worked, what broke, what future protocol or reframing work should consider)
5. Protocol-change candidates captured as follow-on notes, plans, or foundational-reframing proposals rather than auto-editing this file
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

## 12. Constitutional-amendment guard

`canon-review-protocol.md` is a meta-corpus governance surface. Revising its authority model, lifecycle semantics, scope, validation rules, or other load-bearing governance mechanics requires a foundational-reframing proposal under `foundational-reframing-protocol-v1.md`, including the double-cooling rule for meta-corpus amendments. Ordinary canon-review rounds do not self-amend this file by landing a close memo or harvest note alone.

Operational lessons from canon-review execution still matter, but they land first as retrospectives, findings, or reframing proposals. Direct edits without reframing lineage are limited to non-material corrections such as typos, broken links, formatting repair, or reference cleanup that do not change obligations or execution authority.

## 13. Post-adoption appeal path

If a landed canon-review ADR is later challenged, the challenge routes by scope instead of reopening docs by fiat:

1. **Evidence dispute**: if the dispute is about the reading of evidence or whether the landed edit still matches the cited corpus, author a successor ADR in the affected repo that affirms, narrows, supersedes, or reverts the earlier ADR.
2. **Procedural dispute**: if the dispute is about whether the ADR was executed according to the protocol in force at the time, record the challenge in a successor ADR or rollback note that names the procedural defect and preserves the audit trail.
3. **Frame dispute**: if the dispute challenges this protocol itself, the `authorized-by:` lineage, or the proposal mechanics above ordinary ADR scope, route the challenge to a new foundational-reframing proposal per FR-26 of `foundational-reframing-protocol-v1.md`.

Post-adoption disagreement therefore has a named escalation path. Repo-local disputes stay at the ADR layer; disputes about the governing frame move upward to reframing.

## 14. Vocabulary governance

`docs/research/concepts-p2p-wiki.yaml` is the frozen cross-project vocabulary surface that governs ADR `concepts:` entries, shared framing note `concepts:` entries, and bridge-note R-claim `concept:` values across Spore / Intelligence Commons / Poietic Match. The file keeps its historical path, but its governance role is canonical rather than intake-local.

Changes to that vocabulary follow these rules:

1. **Admission rule.** A new slug may be admitted only through a separately authorized governance change that updates `docs/research/concepts-p2p-wiki.yaml` in a dedicated commit set, cites the motivating evidence bundle or ADR, and bumps the vocabulary version metadata. Ordinary canon-review ADRs may not append slugs opportunistically.
2. **Alias rule.** Alias additions or canonical-label clarifications are governed changes to the same artifact. They must preserve the canonical slug, be justified in the authorizing ADR or proposal, and ship with a version bump rather than silent edits.
3. **Deprecation rule.** A slug may be deprecated only when the authorizing ADR names the successor state explicitly: `alias-in-next-version`, `historical-gloss`, or `hard-retired`, plus the reference-cleanup plan for existing uses. Deprecation never silently removes a slug from live governance without traceability.
4. **Version-bump rule.** Any admission, alias, deprecation, canonical-label, or definition change to `docs/research/concepts-p2p-wiki.yaml` requires a version bump and dated header update in the same commit set. The frozen file is immutable within a version.
5. **Carrier and cooling rule.** `tmp/meta-corpus-inventory.tsv` already admits `concepts-p2p-wiki` as a formal meta-corpus surface. Changes to its governance role or mutation rules therefore route through foundational reframing and FR-20's double-cooling rule rather than ordinary round harvest.

## 15. Moratorium / Move-0 acknowledgment

The canon moratorium was lifted 2026-04-16 (projected Move 0 acceptance window lapsed; Jeff silent since Apr 13 compose letter — no point protecting a pilot that isn't running). Canon-review v1 executes under that lifted moratorium. Acknowledged risk: canon drift may land a framing Jeff later tests against and finds incompatible.

Mitigation accepted (not a procedural gate):
- Cross-project structural insights (Tier B) are the Jeff-most-relevant edits and get the highest coordination ceremony.
- Held-tension disposition means canon can acknowledge openness instead of picking a side Jeff might reject.
- If Jeff re-engages mid-round, operator may pause Tier C/D and prioritize any Jeff-requested reconciliation.
- No automatic re-gating on Jeff acceptance. Canon evolution and pilot execution are decoupled — Move 0 tests whatever canon exists at the moment.

If a future moratorium is ever reinstated, the canon-review protocol can still be used to draft ADRs in `draft` state without landing commits, holding them until the moratorium lifts again. The infrastructure carries over; only the commit gate changes.

## 16. Known limitations (v1)

- Spore validator has pre-existing errors on cross-project bridge notes (7 as of 2026-04-17 baseline) — a known intake-plan artifact, NOT a canon-review issue. Separate follow-on plan filed to fix validator's cross-project bridge-note handling.
- IC and PM have no validator; manual frontmatter check is the gate. Follow-on tickets `ic-add-validator` / `pm-add-validator` remain open.
- ADR-lite format is scoped to canon-review. If the broader Regen/Spore ecosystem adopts ADRs, migration is a separate plan.
- No automated cross-repo ADR indexing — `related_adrs:` links are resolved by convention + AC-18 verification, not by a registry.
- Canon edits do not auto-flow into the learning field (projection reads bridge notes, not foundation docs). Canon edits become new source material for the next intake pass (if/when triggered) but have no DB impact during canon-review.

## Changelog

- **v3** (2026-04-20): Governance-hardening and status-vocabulary unification authorized by `reframing-protocol-governance-hardening`.
  - Added the constitutional-amendment guard and post-adoption appeal path for `canon-review-protocol.md` as a meta-corpus governance surface.
  - Unified decision-record status language on `draft`, `active`, `deprecated`, `superseded` and retired the `proposed` / `accepted` split from active protocol text.
  - Updated `validate_spec_dag.py` to discriminate status vocabularies by `doc_kind`, so proposals use their own lifecycle without breaking existing Spore ADRs.
  - Added §14 `Vocabulary governance`, authorized by `reframing-frozen-vocabulary-role`, to define admission, alias, deprecation, version-bump, and FR-20 carrier rules for `docs/research/concepts-p2p-wiki.yaml`.
- **v2** (2026-04-18): Harvested from canon-review-v1 plan execution (Phase 5). 10 decisions across Tier A (3) + Tier B (4) + Tier C (3 per-project sessions), producing 23 ADRs across Spore (8) + IC (8) + PM (7) + 6 coordinated shared-framing notes. 28 harvest items (i–xxviii) compress to 11 semantic refinements + 7 script fixes + 5 evidence methods + 4 workflow rules + 2 cross-ref rules + 5 v3 deferrals. v2 section appended below.
- **v1** (2026-04-17): Initial protocol harvested alongside the canon-review-v1 plan. 15 rounds of Codex review. Key methodological choices: protocol-first (canon review is normatively different from intake, which is descriptive), ADR-lite format (compact, one-screen), strict concepts vocabulary (no ad-hoc extension), held-tension first-class (no count quota), cross-project coordination via Spore-hosted framing notes + session-atomic commit sets, evidence threshold with DB-authoritative verification. v2 to be harvested after canon-review-v1 execution completes.

---

## v2 (harvested 2026-04-18)

**Source**: canon-review-v1 plan execution, 10 decisions across Tier A (3 ADRs) + Tier B (4 coordinated sets: reproduction-primacy, boundary-theory-unifier, three-layer-coordination-stack, decentralization-myth-bundle) + Tier C (3 per-project sessions), producing 23 ADRs across Spore (8) + IC (8) + PM (7) + 6 coordinated shared-framing notes. Zero partial-drift events. Zero rollback invocations. Zero slug reuse. Session-atomic 30-min window cleared by 0–30 seconds in all 6 coordinated sets. Spore validator baseline held at 7 errors throughout. Findings harvested from plan Execution log items i–xxviii.

**Item-count reconciliation**: log contains 25 explicitly Roman-numeraled items ((i)–(xxv) assigned across reproduction-primacy→PM Tier C sessions), plus 2 unnumbered DH-IC-1 findings (validator status-enum; AC-17 awk pattern), plus 1 handoff-preamble observation (reject subtypes after Tier B #4). Total 28. All accounted for in the rules below.

### What v1 got right

These patterns carried all 10 decisions across 3 tiers without strain. v2 preserves them unchanged:

- **Protocol-first phase decision.** Phase 1 authored v1 protocol before any Phase 2+ decisions. Load-bearing — every ADR cited §§ of the protocol as its authority; without the protocol in place, early ADRs would have invented justification patterns ad-hoc.
- **Constraint 1 (one decision = one ADR = one coordinated commit set).** 10 decisions produced zero bundling violations. No ADR attempted to resolve two R-claims at once.
- **Session-atomic 30-minute window (AC-4c).** Every coordinated set cleared within 0–30 seconds between first and last creation commit. Zero near-misses across 6 sets.
- **Shared-framing-in-Spore-as-host (§5a).** Convention held across all 6 coordinated sets; zero operator override.
- **Evidence threshold ≥3S + S>O (§4).** Caught `ic.memory-layers:autopoiesis` cleanly: capstone §5.2 promoted it but DB returned 2S/0O — the threshold forced hold-as-tension disposition. Prevents capstone-promotion from overriding DB gate.
- **Held-tension as first-class disposition (§4).** DH-PM-1, DH-IC-1, and IC-0008 autopoiesis all resolved held-as-tension without forcing artificial edits. No count quota — evidence drove disposition.
- **Pre-flight 7-check gate (PF-1..PF-7).** Caught baseline state unambiguously each session. Dirty-state approval for Spore intake-plan untracked items worked without ambiguity.
- **Tier A→B handoff rule (§8).** reproduction-primacy was decided in Tier A as 3-repo edit; Tier B handoff reduced to a one-line no-op log entry — exactly the intended behavior.

### Semantic refinements (protocol-level changes)

**R-1 (Extended-D3 concept × target, item xviii).** Tier handoff checks from v1 §8 are concept-only by spec. Operationally the correct unit is the *(concept, canon-target)* tuple: a prior ADR on concept X at target A does NOT bar a subsequent Tier C edit on X at target B. Re-read D3's three branches as triggered by *(concept, target)* tuple, not concept alone. Spore Tier C #1 polycentric-governance at mycelial-holarchy proceeded because prior ADR-0004 coverage was at project-vision (different target).

**R-2 (Prior-ADR-authorizes-successor, item xxiii).** Authored deferral language in a prior ADR's Context / Consequences / Diff summary is first-class evidence, not commentary. When prior ADR body says "X is not foreclosed at surface Y" or "Tier C is the proper home for this edit," the subsequent Tier C ADR cites the authorization and a held-tension overlap (Constraint 5c) resolves via self-authorization rather than an independent orthogonality argument. pm:ADR-0007 demonstrated this against pm:ADR-0001's hold on `market-dependence`.

**R-3 (Scope-decision rule for structural insights, item iii).** When a Tier B insight's R-claims target one repo's canon but the insight's substantive implications re-motivate other repos' canon, scope the ADR across all affected repos — not strict R-claim-literal single-repo. reproduction-primacy was authored 3-repo on this basis. Rule: if capstone's "What it changes" section makes substantive claims (not pointer-only cross-references) about another repo's canon, that repo is in-scope. Strengthens v1 §5b fan-out trigger by clarifying how `affects_canon` is chosen for insight-level ADRs.

**R-4 (Symmetric multi-primary, item v).** When every affected repo carries its own primary R-claim on its own canon target (boundary-theory-unifier shape, three-layer-coordination-stack shape), v1's "primary / secondary" language over-singularizes. For symmetric decisions, each repo's ADR uses its own repo-local primary in `r_claim_source[0]`; the shared framing note carries the cross-repo narrative. §4 gate is evaluated per-repo against its own primary.

**R-5 (Per-layer primary cluster gate + target mismatch, items viii + ix).** For multi-concept architectural ADRs (three-layer-coordination-stack first), §4 evidence threshold is evaluated *per layer's primary cluster*, not only at the single primary. Each layer-occupancy claim has its own ≥3S + S>O cluster. Further: a concept's canonical canon target may differ from the specific R-claim's stated target — per-layer primary-cluster selection may target the strongest evidence cluster for that layer regardless of which canon doc the layer statement foregrounds (Spore production-layer evidence lived at `spore-instance-model:cosmo-local-production`, not `mycorrhizal-federation-protocol:platform-cooperativism`, even though federation-protocol was the layer-statement surface).

**R-6 (Structural declination, item vii).** When a repo genuinely occupies N of M layers (not all M), record the absent layer as explicit declination in ADR Evidence. This is NOT a §4 gate failure. IC declined the production layer in three-layer-coordination-stack (implicit via federated surfaces, not IC-native) — recorded as declination, not counted as a missing cluster. Enables honest architectural self-description without forcing an invented cluster.

**R-7 (Discipline-rule R-claims vs cluster-gated edits, items vi + xiii).** Distinguish two R-claim shapes:
- *Cluster-gated edits* — R-claim names a canon edit whose §4 gate is satisfied at an existing DB cluster (target:concept).
- *Discipline-rule R-claims* — R-claim targets a canon doc but imposes a vocabulary/framing discipline without its own DB cluster. Gate routes to a supporting cluster via §4 aggregate rule.

Relevant when (a) concept is too new to have projection coverage (e.g., `decentralization-theater` frozen in v2 post-projection), or (b) the discipline is a composition rule over an existing cluster (e.g., openwashing R1 over `power-capture`). v2 formalizes: Constraint 5's cluster-size check applies to cluster-gated edits only; discipline-rule R-claims carry as secondary, citing the gating cluster.

**R-8 (Asymmetric fan-out, item xii).** Not all coordinated sets are symmetric. When an R-claim's antecedent conditions do not fire on a repo's vocabulary (verified by grep), disposition `reject` with verification grep in Evidence is the operator-honest outcome — not forcing a declination paragraph that would re-introduce the exposure by stating it. Decent-myth-bundle's PM reject set the precedent (PM canon had zero instances of decentralization/peer-to-peer/P2P/peer-production vocabulary).

**R-9 (Reject subtypes, item xxvi).** Two reject patterns are operationally distinct and must be named in Evidence:
- *Vocabulary-scope reject* — target canon doc doesn't use the vocabulary the R-claim critiques (PM decent-myth-bundle; verified by grep over target canon files).
- *Architectural-scope reject* — target architecture doesn't instantiate the R-claim's implicit primitive (IC collective-agency reject: IC's 7-primitive architecture doesn't include agency-as-primitive; agency is context).

Both produce ADR-only commits (AC-11); Evidence names the subtype and cites the verification (grep for vocab-scope; architecture-schema reference for architectural-scope).

**R-10 (No-op vs reject clarification, item xv).** "No-op commits forbidden" per v1 §11.8 means "affects_canon-stages-nothing commit". Reject-disposition commits DO stage the ADR file itself; they are not no-ops. Framing-carrier commits per §5c are the designated exception (framing file only, no ADR). v2 clarifies: `affects_canon: []` + AC-11 enforcement IS the reject pattern — it materially lands a decision artifact and satisfies the no-empty-commit rule.

**R-11 (Historical note: pre-v3 ADR status mapping for Spore, item i).** Before v3, Spore validator accepted `status: [active, deprecated, draft, superseded]` while protocol text still named `[proposed, accepted, superseded, partial-drift]`. v2 therefore used the temporary mapping `proposed → draft`, `accepted → active`. ADR-0012 resolves that contradiction in v3 by making the validator-native decision-record enum authoritative.

### Verification-script refinements (bash + scripts)

**Script-S1 (AC-17 concepts-yaml pattern, item ii).** v1's AC-17 check uses `grep -q "^$c:"` against concepts-p2p-wiki.yaml v1 format. v2 freeze uses `- slug: X` list form. Fix:

```bash
grep -q "^[[:space:]]*- slug: ${c}[[:space:]]*$" "$CONCEPTS_YAML"
```

Additionally, AC-17 frontmatter extraction via awk can extend past the `concepts:` block and pull Evidence-section bullets as false positives. Bound the extraction explicitly (next-key regex or blank-line boundary). IC Tier C and PM Tier C both saw the false-positive flood; substantive data passed — regex hygiene only.

**Script-S2 (AC-9 r_claim_source iteration, item iv).** v1 used `for entry in $entries` which word-splits on whitespace and newlines. Fix:

```bash
while IFS= read -r entry; do
  [ -z "$entry" ] && continue
  # verify entry exists in bridge notes
done < <(yq '.r_claim_source[]' "$ADR")
```

**Script-S3 (AC-8b cluster_key regex, item x).** v1 regex `cluster[_-]key:\s*[a-z]+\.` did not accept backtick-wrapped values. ADRs from 0002 onward use backtick convention. Fix:

```bash
grep -qE 'cluster_key:\s*`?[a-z][a-z0-9.-]+:[a-z][a-z0-9.-]+`?' "$ADR"
```

**Script-S4 (git commit -F over heredoc, item xix).** Bash heredoc for commit messages is PATH-fragile in reset environments (cat/dirname/etc. unreachable). Write commit message to `/tmp/<slug>.msg` and use `git commit -F /tmp/<slug>.msg`. Reserve `-m` for single-line messages only.

**Script-S5 (shell-builtin file tests, item xxv).** Do NOT call `/usr/bin/test` — absent on Darwin 23 operator macs; `test` is a shell builtin. Use `[ -f "$path" ]` or `test -f "$path"` (builtin form) throughout. Applies to AC-8c affects_canon allowlist checks and PF-6 plan-writability.

**Script-S6 (Python for timestamp arithmetic, leading-space bug from DH-IC-1).** Shell arithmetic over `git log --format=%cI` hit a leading-space parse bug in DH-IC-1 AC-4c. Fix: use Python subprocess with `datetime` + `min`/`max`:

```bash
python3 -c "
import subprocess, datetime
times = [...]
print((max(times) - min(times)).total_seconds())
"
```

**Script-S7 (PATH-reset resilience across all scripts).** Bash-tool invocations often reset PATH; external tools (git, psql, dirname, cat, awk) then unreachable. Conventions:
- `/usr/bin/git`, `/usr/bin/awk`, `/usr/bin/grep`
- `/opt/homebrew/bin/psql` on Darwin arm64
- Shell builtins where possible (`[`, `test`, `read`)

Every script run in v1 execution tripped this at least once; v2 documents the workarounds as standard operator setup.

### Evidence-counting methodology

**Method-M1 (psql join pattern — entity_uri wrapping, item v).** DB recount queries against `entity_relationships` + `claims` must join on `er.object_uri = c.entity_uri` — the claim's entity_uri is wrapped inside entity_relationships.object_uri, not matched via claim_rid. Canonical:

```sql
SELECT er.governance_cluster_key, er.stance, COUNT(*)
FROM entity_relationships er
JOIN claims c ON er.object_uri = c.entity_uri
WHERE er.governance_cluster_key = '<target>:<concept>'
GROUP BY er.governance_cluster_key, er.stance;
```

DH-IC-1 and reproduction-primacy both hit wrong-join zero-rows returns; canonical pattern is v2's §4 Verification recipe.

**Method-M2 (capstone-vs-DB drift; caveat-in-canon-prose, item vi).** v1 §4 says "DB is authoritative over capstone" on >1 diff but is silent on how the ADR presents the drift. v2 rule: when DB and capstone differ (e.g., 13S/12O DB vs 3S/8O capstone at `spore.mycorrhizal-federation-protocol:power-capture`), the Evidence section records both counts with DB-authoritative line primary, AND the canon edit's prose acknowledges the contested-cluster texture explicitly (e.g., "opposition density 48% acknowledged"). Prevents false-clean-sweep framing.

**Method-M3 (Projection-batch vs freeze-timing staleness, item xiv).** When frozen concepts yaml adds new slugs (e.g., v2 freeze at 2026-04-17), the most recent projection batch predating that freeze will not carry those slugs in `review_claims`. Before cluster-gating a version-new concept: check `projection_batch` timestamp in DB vs concepts-yaml `frozen_at`. If projection predates freeze, the concept either (a) routes its gate to the supporting-cluster-that-exists (discipline-rule pattern, R-7) or (b) defers until re-projection. Plan should schedule a re-projection pass at each frozen-vocab version bump.

**Method-M4 (Capstone-promotes-but-DB-fails, item xxi).** Capstone §5 "what changes now" can list items DB does not support. When a §5-promoted item fails §4 at DB recount, the honest disposition is hold-as-tension, not edit. IC autopoiesis/structural-coupling (IC-0008) set precedent: capstone §5.2 promoted, DB returned 2S/0O → hold-as-tension with lift triggers documented. §4 verification gate applies equally to §5 promotions and §3 queue items.

**Method-M5 (Zero-drift cluster as diagnostic, item xxiv).** When capstone and DB return identical S/O for a cluster (first appearance: `pm.project-vision:market-dependence = 6S/4O` in both), that is a diagnostic signal that capstone was authored after the last projection batch — not a methodology problem. v2 adds "zero-drift" as an explicit category in the Evidence rubric alongside "favorable drift" and "unfavorable drift"; each category has its own disposition guidance (zero-drift = capstone counts are canonical, no reconciliation prose needed).

### Workflow observations

**Workflow-W1 (Tier C escalations count toward primary floor, item xvi).** When a Tier C item's shared-concept escalation produces a coordinated 2/3-repo ADR whose primary edit target is in the originating repo's canon, that ADR counts toward the originating repo's Tier C floor. Without this reading, escalation-heavy queues break the Tier C budget calculus. Spore Tier C items #4 (coordination-substrate) and #5 (collective-agency) each counted 1 toward Spore's floor of 3 despite producing cross-repo work.

**Workflow-W2 (Shared-concept list evolves in-session via discovery, item xvii).** v1 §8 Tier C hardcodes the cross-project shared list. Plan step 10 allows discovery-addition: if a grep across repos finds an R-claim on concept X in ≥2 repos' bridge notes during Tier C, X is added to the shared list for the rest of the session, potentially changing escalation decisions for subsequent items. Spore Tier C added `polycentric-governance` (cross-2 spore+pm) at item #1 and `collective-agency` (cross-2 spore+ic) at item #5. v2 codifies this: log the discovery as `SHARED-LIST-ADDITION YYYY-MM-DD: <slug> <cross-N-project>` in Execution log before the escalation decision lands.

**Workflow-W3 (HTML-marker stacking for accumulated holds, item xx).** Canon docs accumulating multiple held-tension ADRs need a marker-stacking convention. v2 rule: HTML-comment markers are placed consecutively at the top of the affected section (or at the file's first substantive prose line for whole-file holds), one per line in chronological ADR order. `ic/docs/foundations/memory-layer-model.md` accumulated two holds (ic:ADR-0001 pluriversal-incommensurability + ic:ADR-0008 autopoiesis-structural-coupling) at lines 15–16, readable inline.

**Workflow-W4 (Queue-target vs canonical-action-target, item xxii).** Pass 2 capstone queue items sometimes name targets outside the plan's D1 canon allowlist (e.g., `pm.connection.*`, `pm.research.*`). Three operationally distinct outcomes must be logged with distinct tags:

- *OOS-target skip* — target is out-of-scope; substantive ask has no in-scope home. Log and move on.
- *Substantively-covered-elsewhere no-op* — target is OOS, but the ask has already landed at a different in-scope canon target via prior ADR. Log as covered, cite the covering ADR(s). (PM Tier C #3 commitment-pooling hit this against pm:0002+0004.)
- *OOS-target with in-scope analog* — target is OOS but the correct in-scope target exists. Operator MUST check for the in-scope analog BEFORE defaulting to OOS-skip; if found, redirect the edit to the in-scope target.

### Cross-reference hygiene

**Xref-X1 (Canonical R-claim identifier uses bridge-note frontmatter doc_id, not path, item xi).** v1 §2 defines `<bridge-note-doc-id>:R<n>` as authoritative. Cross-project bridge notes that live physically in one repo's `docs/research/connections/` but carry another repo's doc_id (e.g., IC-authored notes hosted in Spore's research tree) follow the frontmatter's `doc_id:` prefix, NOT the file-path prefix. Decent-myth-bundle and Spore Tier C coordination-substrate both hit this as AC-9 fix-forward commits. v2 rule: AC-9 greps `^doc_id:` at the bridge note file and compares to the ADR's `r_claim_source[]` entry prefix. Pre-commit inline-lint preferred — deferred to v3.

**Xref-X2 (Frozen-vocab slugs are immutable within a version).** v1 §7 forbids new slugs during canon-review. v2 complement: slugs are also immutable within a version — if a slug's canonical_label needs adjustment mid-version, defer to next freeze. ADR prose may cite external author language freely; the `concepts:` frontmatter stays frozen-version aligned.

### Deferred beyond v3 / out-of-scope

These v2-harvest items require larger changes than protocol rules can absorb:

- **Coordination-drift tooling.** v3 keeps coordination drift as an execution-note problem rather than an ADR status value, but no tooling exists to scan for open drift notes or fix-forward obligations at session start (requires cross-repo index). v1 execution zero-hit; v3 remains manual grep plus close-memo discipline. Follow-on: `cross-repo-adr-index` registry powers `related_adrs` resolver + coordination-drift scanner.
- **Frozen-concept vocab extension path.** v1 §7 forbids mid-round extensions. Decent-myth-bundle discovered `decentralization-theater` needed but frozen in v2 post-projection. Clean fix: v3 yaml freeze with explicit "extensions staged for version N+1" ticket list; re-projection pass at each version bump. Follow-on: `concepts-yaml-v3-plan`.
- **Pre-commit inline-lint for R-claim doc_id correctness (Xref-X1).** Verification scripts catch the typo at AC-9; pre-commit hook would catch earlier. Requires repo-side git hooks framework. Follow-on: `adr-pre-commit-hooks`.
- **AC-4c machine-parseable push timestamps.** Shell arithmetic over `git log --format=%cI` is fragile across timezones and leading-space quirks. v2 uses Python subprocess (Script-S6); v3 should consider a JSON-emitting helper or full `git log --format=%H:%cI` + Python parser.

### Triggers for canon-review v4

v4 authoring should be triggered by any of:

1. **Another canon-review round executes under v3**, producing a new harvest batch beyond the v1/v2 execution record.
2. **Concepts yaml version bumps to v3 or later** so frozen-vocabulary rules need re-anchoring against a new admitted set.
3. **Cross-repo ADR index lands** → v4 replaces manual coordination-drift + `related_adrs` checks with registry queries.
4. **Pre-commit inline-lint framework lands** → v4 moves AC-9, AC-17, AC-8b regex checks from post-hoc verification to pre-commit.
5. **Jeff or another external reviewer re-engages on Move 0 / pilot** → v4 may need to re-scope §15 moratorium language or introduce review-gate patterns.
6. **Cross-repo edit contradictions discovered post-hoc** → triggers v4 reconciliation rules. v1+v3 hit none; if ever observed, is v4's first agenda item.
