---
doc_id: spore.corpus-foundational-review-protocol
doc_kind: protocol
version: 1
status: draft
authored-on: 2026-04-21
authored-by: codex-gpt-5
ratification-basis: corpus-foundational-review-v1 execution
---

# Corpus Foundational Review Protocol

Version: v1 (2026-04-21). Harvested from `corpus-foundational-review-v1` execution. This protocol governs full corpus-review rounds that inspect the Spore canon, extended corpus, and meta-corpus as a single layered system. It is broader than `canon-review-protocol.md`, which governs ADR-backed changes inside the accepted frame, and narrower than `foundational-reframing-protocol-v1.md`, which governs proposal mechanics once a corpus review has already concluded that ADR scope is insufficient.

The protocol is procedural rather than substantive. It does not predetermine which primitives, layers, priors, or repo topologies are correct. It defines when a corpus review should be opened, what phases and artifacts it must produce, how the diagnostic and triage machinery must be run, and what harvest obligations are required before the round can be considered complete.

Until ratified at the close of a future review, this v1 file is a draft harvest artifact. It is intended to be the starting protocol for `corpus-foundational-review-v2`, with the v1 execution lessons below treated as binding guidance unless superseded by a later ratified revision.

## Intended audience and prerequisites

- **Audience**: Operators running a whole-corpus review over Spore and any dependent repos whose canon or meta-corpus is affected.
- **Prerequisites**: Working familiarity with `canon-review-protocol.md`, `learning-field-intake-protocol.md`, `foundational-reframing-protocol-v1.md`, branch-isolated execution, validator baselines, bridge-note / capstone intake patterns, and cross-repo ADR lineage.
- **Out of scope**: Ordinary canon-review rounds, single-finding editorial repair, or one-off foundational-reframing proposals that do not arise from a broader corpus audit.

## Companion protocols

This protocol sits above ordinary canon review and below downstream execution:

- **`learning-field-intake-protocol.md`**: how external corpora become bridge notes, syntheses, and capstones.
- **`canon-review-protocol.md`**: how accepted claims become ADR-backed edits inside the current frame.
- **`foundational-reframing-protocol-v1.md`**: how findings that exceed ADR scope mature into proposal-layer authorization.
- **This protocol**: when to open a corpus-wide review and how to move from pre-flight through research, diagnostic, triage, execution, harvest, and merge.

Together the stack is: intake -> synthesis -> corpus review -> canon review and/or foundational reframing -> ADR execution -> merge -> harvest.

## Purpose and scope

Use a corpus foundational review when the problem is no longer "should this sentence or ADR change?" but "are we editing the right conceptual and governance surfaces at all?" A corpus review exists to inspect the accepted frame itself: primitive roster, layer boundaries, prior declarations, audience assumptions, meta-corpus governance, and repo topology.

The review is also the place where the corpus audits its own review machinery. `corpus-foundational-review-v1` showed that protocols, frozen vocabularies, validators, moratorium rules, merge conventions, and bridge-note formats are themselves canon-bearing artifacts. A future review must therefore treat the meta-corpus as in-scope rather than as hidden infrastructure.

## When to use

Open a corpus foundational review when one or more of the following conditions are present at meaningful scale:

1. Primitive naming has drifted from written canon and operators can no longer restate the core roster reliably.
2. Canon elements appear to sit at mixed ontological levels and the layering is no longer obviously intentional.
3. Recurrent concepts such as trust, care, state, identity, memory, or authority appear in vision prose without stable seats in the canon.
4. Safeguards or failure modes exist only as scattered prose rather than as explicit, governed structures.
5. The broader corpus has never been inspected as a layered system, even if clause-level update discipline exists.
6. The current canon-review protocol is too narrow to decide the question at issue.
7. The meta-corpus has never been audited as a layered system.
8. Repo topology is load-bearing but was adopted without explicit adjudication.
9. The corpus relies on undeclared priors.
10. Audience assumptions are implicit rather than named.
11. The review operator is also the author and needs a formal adversarial surface to compensate.

If fewer than two of these conditions are live, prefer ordinary canon review or targeted foundational reframing rather than a full corpus review.

## Required outputs

Every corpus foundational review must, at minimum, produce:

- A phase-bounded methodology doc naming scope, constraints, evidence bars, and acceptance criteria.
- A research corpus covering the targeted traditions or comparison fields.
- A findings doc with synchronized YAML blocks, index table, routing decisions, and execution status.
- Any new or revised protocols required by findings routed to protocol creation or protocol amendment.
- A merge manifest or equivalent propagation artifact if more than one repo is affected.
- A harvest doc updating this protocol or explicitly parking unresolved harvest items.

## Phase artifact map

The review should emit artifacts continuously rather than treating documentation as end-of-round cleanup:

- **Phase 0**: readiness snapshot, branch state, validator baseline, and any fallback notes for missing tools or permissions.
- **Phase 1**: methodology doc with constraints, evidence bars, scope inventory, and acceptance criteria.
- **Phase 2**: research inventory, query pack, and any fan-out instructions needed to keep parallel sessions aligned.
- **Phase 3**: completed research syntheses in the agreed serialization format plus any source-bundle notes needed for audit.
- **Phase 4**: capstone synthesis, capstone review, and the first findings candidate set.
- **Phase 5**: stable findings doc, routing dispositions, proposal queue, and any tracking tables for dependencies.
- **Phase 6**: proposal drafts, consultation artifacts, deviation memos, and bakeoff notes for protocol drafts.
- **Phase 7**: round close memos, validator pre/post logs, ADR lineage records, and session-atomic timing data.
- **Phase 8**: editorial close memo, methodology updates, and final artifact repairs needed before merge.
- **Phase 9**: merge manifest, acceptance-criteria sweep, harvest docs, and any parking-lot carry-forward list.

If a future round omits one of these artifact classes, the methodology should say so explicitly and explain what replaces it.

## Phase structure

### Phase 0-1: pre-flight and declaration

**CFR-1. Pre-flight baseline rule.** Before research begins, capture branch-protection state, validator baseline, repo cleanliness assumptions, and tool availability. If the review later changes validator-bearing artifacts or merge mechanics, the pre-flight snapshot becomes the audit anchor.

**CFR-2. Moratorium declaration rule.** A corpus review must declare whether canon edits are frozen, branch-isolated, or otherwise constrained before Phase 2 opens. The declaration must include the exception path for safety-critical regressions.

**CFR-3. Branch-isolation rule.** Whole-corpus review work runs on dedicated review branches across every affected repo. `corpus-foundational-review-v1` used `corpus-review/v1`; successor rounds should use the analogous per-round branch and never rely on memory or convention to keep `main` safe.

**CFR-4. Scope-inventory rule.** The methodology must name both ADR-eligible canon and diagnostic-only extended scope, plus the meta-corpus surfaces that are in scope for inspection but not necessarily for direct editing. Missing paths become findings, not silent omissions.

### Phase 2-4: research and diagnostic

**CFR-5. Tradition-baseline rule.** A corpus review must state its comparison-corpus floor before fan-out. The v1 baseline was 17 traditions plus a capstone and a capstone-review pass, producing 19 research syntheses; future rounds may change the floor only with explicit rationale.

**CFR-6. Adapted-evidence-model rule.** If the review covers meta-corpus and repo-topology questions, the methodology must adapt the evidence model before findings drafting. Ordinary canon-review evidence bars do not automatically fit protocol or topology claims.

**CFR-7. Research-serialization rule.** Research syntheses must expose their key claims in a verifier-compatible form from the start. `corpus-foundational-review-v1` retrofitted R-claims late to satisfy AC3; future rounds must either require that format from Phase 3 onward or explicitly write the acceptance criterion for narrative prose instead.

**CFR-8. Multi-agent-parallelism rule.** Parallel research and diagnostic work is encouraged when the corpus is broad, but ownership boundaries must be explicit. Parallel sessions may not rely on shared staging state or commit-message memory to preserve auditability.

**CFR-9. Capstone-and-review rule.** The research phase is incomplete until it includes both a capstone synthesis and an externalized review of that capstone. The second artifact is not optional: it is the first adversarial compression point before findings routing begins.

### Phase 5: findings and triage

**CFR-10. Findings-synchronization rule.** The findings doc's YAML blocks, summary table, counts, and execution statuses must remain synchronized throughout the review. Any change to routing, severity, or execution state is incomplete until every representation is updated.

**CFR-11. Four-track-triage rule.** Findings route into exactly four tracks unless a future protocol revision adds another: `editorial`, `canon-review-v2`, `foundational-reframing`, and `prior-revision-proposal`. Routing by vibe is forbidden; each finding must name why the lower tracks are insufficient.

**CFR-12. Prior-collision-naming rule.** The `prior-collision-check` field must name a declared prior, not a convention or habit. `corpus-foundational-review-v1` miscategorized at least one finding by using that field too loosely; future rounds must keep declared priors and operating conventions separate.

**CFR-13. Adversarial-bakeoff rule.** Before findings routing is treated as stable, both the findings doc and any newly drafted protocols must pass a cross-model adversarial review surface. `corpus-foundational-review-v1` used Claude plus Codex; future rounds may use different reviewers, but the review pair and its limitations must be recorded.

### Phase 6-7: proposal and execution

**CFR-14. Cooling-off-exception rule.** If the project is in solo-operator state, any cooling-off waiver must be documented by an explicit deviation memo naming the affected proposals, the risks accepted, and the harvest trigger for future reconsideration. Waiver by omission is invalid.

**CFR-15. Three-unit-execution rule.** Execution work must be classified as one of three unit types: canon-review round, reframing-authorized ADR bundle, or cross-repo session-atomic unit. Unit type determines the right close memo, lineage checks, and rollback expectations.

**CFR-16. Cross-repo-window rule.** When execution spans multiple repos, the methodology must define the session-atomic window and the rollback carrier in advance. `corpus-foundational-review-v1` showed that the actual windows were often seconds long, but the rule still needs to be explicit because merge safety depends on it.

### Phase 8-9: close, merge, and harvest

**CFR-17. Phase-boundary-artifact rule.** Every phase close must emit its required tags, manifests, and close memos at the time the phase closes. `corpus-foundational-review-v1` retro-created some boundary artifacts too late; future rounds should treat boundary capture as part of the phase, not a later audit cleanup.

**CFR-18. Acceptance-criterion-surface rule.** Acceptance-criterion artifacts must exist even when the content is zero-sample or mechanically trivial. Missing empty files still fail audits.

**CFR-19. Merge-manifest rule.** Any review that changes more than one repo must define the Phase 9 propagation carrier before merge begins. The manifest must state the merge order, expected tags, and the SHAs that represent the authoritative close of each repo's review branch.

**CFR-20. Harvest-and-parking-lot rule.** The review is not complete until it harvests reusable method lessons into a protocol doc and records deferred extension candidates in a parking lot. Unharvested execution lessons are process debt.

## Failure modes to watch

`corpus-foundational-review-v1` surfaced a small set of repeatable operator mistakes that should be watched explicitly in future rounds:

- Treating methodology assumptions as if they were already harvested protocol.
- Letting acceptance criteria specify file shapes that the authoring workflow never actually produced.
- Updating a findings YAML block without updating the summary table or routing rollup.
- Assuming boundary artifacts can be recreated later without losing audit precision.
- Running parallel sessions without an ownership carrier for staging and commit labeling.
- Treating a solo-operator consultation artifact as consensus instead of as a structured self-review checkpoint.

## Execution lessons

### Solo-operator caveats

- Cooling-off periods designed for asynchronous multi-stakeholder governance may be waived only through a committed deviation memo. The memo is not paperwork; it is the audit surface that records why the usual rationale does not apply.
- Consultation artifacts in solo-operator state are externalized self-review, not proof of independent consensus. Future rounds should say that plainly rather than implying multi-party endorsement.
- `corpus-foundational-review-v1` suggests that a future solo-operator protocol should compress ordinary cooling-off to roughly 24-48 hours, reserving longer windows for true multi-maintainer governance.

### Parallel execution discipline

- Parallel Codex sessions can race on staging and scramble commit labels even when the underlying content is correct. `corpus-foundational-review-v1` recorded two Phase 6c mislabels and had to repair auditability through a commit-content mapping memo.
- The preferred mitigation is per-session branches or another explicit ownership carrier that removes shared-index ambiguity.
- Parallelism is still worth using. The v1 review relied on an 8-way parallel diagnostic fan-out and a multi-session Phase 7 execution pattern to keep the review tractable.

### AC verifier design

- AC3 in v1 assumed bridge-note-style R-claims in every research synthesis, while the research phase had actually produced narrative prose. The verifier and the authoring format were therefore out of sync. v1 repaired this by post-hoc backfill; future rounds should choose one format at Phase 3 start and write the verifier to match it.
- AC6 in v1 conflicted with the solo-operator cooling-off override by construction. A future protocol revision should make the solo-operator exception first-class rather than relying on deviation notes alone.
- AC12 in v1 exposed missing phase-boundary artifacts, especially an `executed-phases.yaml` manifest. Future rounds should make boundary tagging and manifest emission mandatory at each phase close.
- AC16 in v1 failed because an audit-dependent fair-use spot-check file was absent. Future rounds should create zero-sample audit files proactively rather than assuming "nothing to report" means "nothing to commit."

### Time-on-task observations

- Pattern internalization was measurable in v1. Phase 7 unit execution dropped from roughly 50 minutes in the first prototype to roughly 7 minutes in the third.
- Cross-repo session-atomic windows averaged well under 30 seconds across the v1 executions. A 35-minute reserved window was more than sufficient.
- The end-to-end v1 duration was under two months from the February 2026 concept trigger to the 2026-04-21 Phase 9b close work. That is fast for a review that touched canon, protocols, validator logic, and repo topology simultaneously.

### Extension candidates

- `foundational-reframing-protocol` v2 should add an explicit solo-operator exception for cooling-off.
- `canon-review-protocol` v4 should harvest the vocabulary-governance layer introduced during v1's ADR execution.
- This protocol's v2 should tighten the research-serialization requirement and the phase-boundary artifact requirement so AC3 and AC12 failures are designed out earlier.
- A future frozen-vocab admission round should address the 33 `TODO: slug-deferred` bridge-note claims left by v1.

## Ratification and activation

This draft becomes operative only when a later corpus review explicitly ratifies it or when the operator declares it active at a phase close with a corresponding audit note. Until then, it should be treated as strong guidance derived from the v1 run rather than as already-ratified constitutional law.

The first ratifying round should record at least:

- The commit SHA that adopted this file.
- Whether any CFR rules were intentionally waived.
- Which v1 lessons were absorbed unchanged and which were revised.
- Whether solo-operator assumptions still hold at ratification time.

If the active-maintainer count has grown beyond one by the time v2 is opened, the solo-operator lessons in this document should be re-read as transitional rather than default governance.

## Recommended default checklist for future rounds

1. Capture branch protection, validator baseline, repo cleanliness, and tool availability.
2. Open review branches and declare the moratorium.
3. Inventory canon, extended scope, and meta-corpus surfaces.
4. Freeze the concept vocabulary or state the vocabulary-admission policy for the round.
5. Draft the methodology with evidence bars, phase boundaries, and acceptance criteria.
6. Run the research fan-out and produce syntheses in the format the verifier actually expects.
7. Write the capstone and obtain adversarial review on it.
8. Draft findings with synchronized YAML blocks, counts, and routing.
9. Run the bakeoff on findings and any new protocols.
10. Execute canon-review rounds and reframing-authorized bundles with explicit unit typing.
11. Close each phase with tags, manifests, and audit files before opening the next.
12. Run the final AC sweep, merge via the declared manifest, and harvest the lessons.

## Changelog

- **v1** (2026-04-21): Initial harvest from `corpus-foundational-review-v1` execution. Records opening triggers, required outputs, 20 CFR rules, solo-operator and parallel-execution lessons, acceptance-criterion design lessons, and protocol extension candidates for future rounds.
