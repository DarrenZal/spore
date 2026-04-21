# Plan: corpus-foundational-review-v1

## Context

Spore's canonical corpus (vision, foundations, grammar, protocols, lexicon, ADRs) was largely set in the project's first weeks, then protected by a formal ingestion / update process (learning-field-intake-protocol v1, canon-review-protocol v2). The discipline has worked — canon-review-v1 landed 10 decisions / 23 ADRs across three repos on 2026-04-18 with zero rollbacks — but the discipline presumes the *targets* of revision are the right targets. The originator is now questioning whether the initial framing locked in structural errors that the review machinery, scoped to clause-level edits inside the existing frame, cannot surface.

Specific observations driving this plan:

1. **Primitive naming drift.** The originator remembers primitives as "field, membrane, claim, commitment, holon." The canon actually enumerates "intent → commitment → evidence + signal + holon" with field designated as *substrate* (ADR-0008) and membrane as *interface*. Originator-memory ≠ written canon is a signal the naming never stuck.
2. **Ontological-level mixing.** Primitives sit at different levels: substrate, agency-unit, coordination verbs, trace, interface. Whether this is intentional or accidental has never been adjudicated.
3. **Suspected gaps.** Trust, care, state, identity, memory each appear in vision prose without primitive seats.
4. **Safeguards are implicit.** Seven polycentricity drawbacks live as failure modes in `mycelial-holarchy-architecture.md` rather than an enumerated, primitive-linked safeguards corpus.
5. **Uninspected corpus beyond primitives.** Vision, foundations, grammar, protocols, lexicon, ADRs have never been audited as a layered system.
6. **Canon-review protocol is scoped too narrowly.** Protocol v2 gates clause-level edits; "should this primitive exist?" / "is the vision layer doing foundation's work?" are out of scope.
7. **Meta-corpus is uninspected.** Protocols, learning-field structure, frozen-concepts discipline, moratorium mechanics, bridge-note corpus are themselves canon but never audited as a layered system.
8. **Repo topology unadjudicated.** Spore/IC/PM as three separate repos coordinated via session-atomic windows has never been evaluated against monorepo / shared-canon-hybrid / workspace alternatives.
9. **Priors undeclared.** The corpus embeds priors (care primacy, polycentric-not-hierarchical, commons-over-market, pluriversal openness) without explicit scoping. A foundational review must declare its priors before it can be trusted.
10. **Audience implicit.** The corpus is written without explicit reader scoping.
11. **Reviewer is the author.** Single point of adversarial failure; extending the canon-review-v1 bakeoff pattern (Claude + Codex) to corpus review reduces blind spots.

This plan initiates a full corpus review with openness to fundamental changes, including renaming, dissolving, splitting, merging, re-layering, or rewriting corpus elements. Scoped to Spore primarily; IC and PM propagate as dependents.

## Goal

Produce a diagnostic-to-decisions pipeline that (a) surfaces every structural issue across Spore's content corpus AND meta-corpus, (b) grounds the diagnostic in a research report covering collective agency, multi-agent coordination, canonical layering conventions, and repo-topology patterns, (c) declares its priors, audience, and adversarial-review arrangement before executing, and (d) resolves surfaced issues through canon-review v2 rounds plus, where needed, a foundational-reframing track — leaving the corpus coherent, ontologically stratified, and durable, with dependent repos propagated and repo-topology decision produced (or explicitly deferred with rationale).

## Non-goals

- Pre-emptively redesigning the intake or canon-review protocols. Their content is in scope for diagnostic; amendments happen via foundational-reframing if findings warrant.
- Rewriting tooling code. Tool documented behavior is in scope; code isn't. New helper scripts in `~/projects/spore/scripts/` are allowed.
- Repos outside Spore/IC/PM receive no edits. Analysis-only scope for darren-workflow, flowcoding, koi-processor (topology diagnostic input only).
- Public communication of findings before triage completes.
- Operational docs (roadmap, meeting notes, session plans) are out of review scope.

## Constraints

### Moratorium

Canon edits on `main` branches of Spore/IC/PM are suspended during Phases 2–5 (diagnostic). Work happens on `corpus-review/v1` branches in each repo (see Branch isolation below). No amendments to this rule except safety-critical exceptions (below).

**Phase-by-phase state:**

| Phase | Canon edits allowed? |
|-------|---------------------|
| 0–1 | No (moratorium declaring / declared) |
| 2–6 | Only on `corpus-review/v1` branches; never to `main` |
| 7 | Round-scoped ADR edits on `corpus-review/v1`; main untouched |
| 8 | Editorial (S4) edits on `corpus-review/v1` |
| 9 | Merge `corpus-review/v1` → `main` per findings resolutions; full moratorium lifted |

**Safety-critical exception** (narrow; allows direct-to-main edit during moratorium):

Qualifying conditions:
- (a) Validator-breaking regression on Spore.
- (b) Cross-repo federation-breaking (bridge-note projection / claim ingestion broken).
- (c) Security/data-loss/outage requiring canon-level response. Qualifying triggers: CVE with exploit on a load-bearing dep (Python, PostgreSQL+pgvector, git, PyYAML, psycopg2, embedding client, GitHub hosting); irrecoverable loss of a canon-layer doc from source-of-truth; outage >24h blocking canon write path.

Approver: Darren (solo-operator). Audit: each exception logged to `~/projects/spore/tmp/moratorium-exceptions.md` (committed via `git add -f`) with ISO timestamp, condition, affected files, rationale, close-timestamp. Moratorium reapplies at close.

### Branch isolation (addresses rollback-on-main blocker)

All plan work executes on `corpus-review/v1` branches in each of Spore/IC/PM. `main` is never touched during Phases 0–8. Rollback is scoped to the `corpus-review/v1` branch — resetting/reverting there cannot corrupt `main` or unrelated work. Phase 9 propagation merges `corpus-review/v1` → `main` via PR flow.

Branch creation at Phase 0 open; retention until Phase 9 close; deleted post-propagation.

### Evidence bars

- **S1 findings** (foundational): ≥5 sources, at least 2 publicly-verifiable, + cross-repo consultation record.
- **S2 findings** (structural): ≥3 sources per protocol v2 §4, at least 1 publicly-verifiable.
- **S3 findings** (canonical): ≥3 sources (protocol v2 default).
- **S4 findings** (editorial): 1 source or editorial discretion.

Publicly-verifiable = open-access / Wayback-captured / committed-to-repo snapshot (not subscription-only or personal snapshot).

### Validator baselines

- Spore: `scripts/validate_spec_dag.py` must return baseline 7 errors at every phase boundary. Regression halts.
- IC / PM: no formal validator. Per-phase check: YAML frontmatter parses on all edited files; no accidental deletions (`git diff --name-status` reveals no `D` entries unless intended).

### Vocabulary lock

Frozen-concepts v2 at `~/projects/spore/docs/research/concepts-p2p-wiki.yaml` is read-only during Phases 1–6. v3 admission happens between Phase 4 and Phase 7; terms required for Phase 7 rounds must be in v3 before use. Default for new-term-needed-but-v3-pending: queue round behind admission.

## Assumptions

- Canon-review-protocol v2 and intake-protocol v1 are fit for reuse. Amendments are foundational-reframing findings, not pre-work.
- Bridge-note + comparative-intake patterns from P2P wiki intake apply to research corpus intake.
- `doc-check` skill + `project_bridge_notes.py` + `validate_spec_dag.py` + psql all exist and work. Verified in Phase 0.
- DEFERRED: downstream repo propagation beyond Spore/IC/PM (flowcoding, darren-workflow) — revisited at Phase 9.
- DEFERRED: foundational-reframing protocol draft — only created if Phase 5 triage produces reframing findings.

## Dependencies / Prereqs

### Protocol versions

- **Canon-review protocol** at `~/projects/spore/docs/research/planning/canon-review-protocol.md` (v2 block appended 2026-04-18, commit `1e0389d`). v2 rules win over v1 on conflict; v1 rules stand where v2 is silent.
- **Intake protocol v1** at `~/projects/spore/docs/research/planning/learning-field-intake-protocol.md` (no v2 exists).

### Canon-layer scope (two tiers)

Protocol v2 §1 defines a narrow **ADR-eligible canon** (foundation + vision + roadmap). This plan deliberately broadens to a **diagnostic-only extended scope** so the review can consider whether those extended layers should be canon.

**ADR-eligible canon** (Phase 7 canon-review rounds may edit directly):
- **Spore**: `docs/project-vision.md`, `docs/foundations/`, `docs/research/canon-decisions/`.
- **IC**: `docs/project-vision.md`, `docs/foundations/`, `docs/research/canon-decisions/`.
- **PM**: `docs/project-vision.md`, `docs/grammar.md`, `docs/protocol.md`, `docs/research/canon-decisions/`.

**Diagnostic-only extended scope** (Phase 2–4 inventory + diagnostic; Phase 7 can only edit with foundational-reframing authorization):
- **Spore**: `docs/governance/`, `docs/patterns/`, `docs/positioning/`, `docs/protocols/`, `docs/synthesis/`.
- **IC**: `docs/learning-field/`, `docs/patterns/`.
- **PM**: `docs/phase-0-spec.md`, `docs/downstream-products.md`.

**AC2 scope** = both tiers combined. **Phase 7 ADR execution scope** = ADR-eligible canon only, unless the round invokes an approved foundational-reframing proposal that moves extended-scope docs into ADR-eligible status.

Paths that don't exist in either tier become **findings** (type: `missing`), not halt conditions.

### Repos

| Repo | Path | GitHub | Plan branch |
|------|------|--------|-------------|
| Spore | `~/projects/spore` | `DarrenZal/spore` | `corpus-review/v1` |
| Intelligence Commons | `~/projects/intelligence-commons` | `DarrenZal/intelligence-commons` | `corpus-review/v1` |
| Poietic Match | `~/projects/poietic-match` | `DarrenZal/poietic-match` | `corpus-review/v1` |

Analysis-only (no edits): `~/projects/darren-workflow`, `~/projects/flowcoding`, `~/projects/regenai/koi-processor`.

### Bridge-note corpus

- Spore: `docs/research/connections/*.md` (path-based, ~86 at plan time).
- IC: `docs/research/*.md` where frontmatter `doc_id` matches `^ic\.connection\.` (~18 at plan time; excludes `canon-decisions/` subdir).
- PM: `docs/research/connections/*.md` (~6 at plan time).

### Database

- PostgreSQL `personal_koi` on `localhost:5432`, tables `entity_relationships` (5,541 rows at plan time) and `claims`.
- Evidence hierarchy (per protocol v2): capstone primary → DB verification → capstone-authoritative if DB unavailable → manual recount → hold-as-tension.

### R-claim format (for Phase 3 research docs)

```
- **R<n>**: <claim statement> [target: <target>] [concept: <slug>] [tag: <optional>]
*R<n> is supported by <source-1>, <source-2>, ...*
```

Target allowlist: discovered namespaces from Phase 2.1 frontmatter scan (plus `meta:*`, `topology:*`, `candidate:*` extensions for meta/topology/candidate findings). No hardcoded namespace assumption.

Optional tags on R-claim line: `[tag: citation-uncheckable]` or `[tag: primary-access-limited]` (half-weight for AC3 count).

### Tooling (Phase 0 validates)

| Tool | Path | Hard | Fallback |
|------|------|------|----------|
| Spore repo access | `~/projects/spore` | yes | halt |
| IC, PM repo access | per paths above | yes | halt |
| `validate_spec_dag.py` | `~/projects/spore/scripts/` | yes | halt |
| `psql` binary | PATH | yes | halt |
| DB reachable | `localhost:5432` | no | capstone-authoritative mode |
| `project_bridge_notes.py` | `~/projects/regenai/koi-processor/scripts/` | Phase-7 soft | projection-unavailable mode (S1/S2 findings defer; S3/S4 proceed with caveat) |
| `doc-check` skill | `~/projects/darren-workflow/skills/` | soft | fallback script at `~/projects/spore/scripts/doc-check-fallback.sh` |
| Codex CLI | PATH | soft | solo-review with caveat logged |
| `gh` CLI | PATH | soft | `git ls-remote` for probes; manual PR creation |

### Degraded modes (one principle, not a matrix)

If any soft dep is unavailable, log the substitution to `tmp/phase-0-fallbacks.md`, engage the fallback, continue. Network-fully-offline: all network-dependent operations defer (research source access, Wayback fetches, `gh` probes, push); resume on network return. Extended offline (>24h) qualifies as outage trigger if it blocks canon-write path on `corpus-review/v1` branches.

## Approach

### Option considered

- **Incremental canon-review rounds** (status quo): cannot carry "dissolve this concept" or "re-layer this entire section"; finds local minima.
- **Full rewrite from scratch**: destroys validated work of canon-review-v1 + P2P wiki intake; drags IC/PM into the rewrite.
- **Diagnostic-first with research grounding + mixed resolution tracks** (chosen): surfaces layer-level issues before local edits; introduces foundational-reframing track only if findings warrant.

### Scope extensions over initial framing

- Meta-corpus in scope (protocols, learning-field, frozen-concepts discipline, moratorium mechanics, bridge-note corpus).
- Repo topology in scope (monorepo / polyrepo / shared-canon-hybrid adjudication via research + findings → foundational-reframing or deferral).
- Priors + audience + adversarial-review arrangement declared in Phase 1 before diagnostic.
- Counterfactual probes on primitives ("if this concept didn't exist, what couldn't we express?").
- Bridge-note corpus itself reviewable (not just evidence-source).

## Implementation Steps

### Phase 0 — Pre-flight validation

Capture baseline + validate dependencies. No edits yet.

1. **Repo access + clean-tree gate**: each of Spore/IC/PM — verify path, branch `main`, `git status` succeeds. `git status --porcelain` must be empty (clean tree); if not, halt. Operator resolves pre-Phase-0 via:
   - commit ambient drift to `main` (if intended as a normal commit), or
   - stash via `git stash push -u -m "pre-corpus-review-<ISO>"` (recovered after Phase 9), or
   - abort plan and resume when trees are clean.
   Dirty-tree + branch creation risks capturing unrelated in-flight work into `corpus-review/v1`; never bypass this gate. Capture post-gate `git status --porcelain` + commit SHAs at `tmp/phase-0-repo-snapshot.md`.
2. **Branch creation**: `git checkout -b corpus-review/v1` on all three repos (clean trees guaranteed by step 1); `git push origin corpus-review/v1`. Worktree remains on `corpus-review/v1` for all of Phases 1–8; `main` is not touched.
3. **Analysis-only baseline**: capture HEAD SHAs of darren-workflow, flowcoding, koi-processor to the snapshot file under "Analysis-only repo baseline" subsection (for AC13).
4. **Validator baseline**: `python scripts/validate_spec_dag.py` returns 7 errors.
5. **Plan-wide hard deps**: Spore/IC/PM accessible, validator runs, `psql` binary present. Missing any: halt.
6. **DB probe**: `psql -U darrenzal -d personal_koi -c "SELECT 1;"`. Fail → engage capstone-authoritative mode, don't halt.
7. **Soft-dep check**: `doc-check`, `comparative-intake`, `project_bridge_notes.py`, Codex CLI, `gh` CLI — missing log fallback at `tmp/phase-0-fallbacks.md`.
8. **Branch-protection probes** (IC, PM): `gh api repos/DarrenZal/<repo>/branches/main/protection`. If `gh` unavailable or returns protected, PR-based flow for Phase 9 merges.
9. **Readiness log** at `tmp/phase-0-readiness.md` with per-check PASS/FAIL/WARN. Phase 1 opens once zero FAIL.

### Phase 1 — Methodology + declarations

1. **Methodology doc** at `~/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md`. Required sections (each as a `## ` heading):
   - **Finding types**: missing, misplaced, wrong-level, overlapping/redundant, should-be-split, should-be-merged, over-specified, over-abstract, naming-wrong, contradictory, dead-weight, dissolve-entirely.
   - **Severity tiers**: S1 foundational, S2 structural, S3 canonical, S4 editorial.
   - **Evidence bar**: per Constraints (5/3/3/1 with public-verifiability minima for S1/S2).
   - **Rationale-review rule**: read ADR rationale before calling a concept redundant.
   - **Moratorium scope**: per Constraints table.
   - **Frozen-concepts v3 scope**: which terms from research expected for admission.
   - **Meta-corpus layer**: members (protocols, learning-field, frozen-concepts, moratorium mechanics, validator rules, bridge-note format).
   - **Audience**: solo-operator → Spore/IC/PM contributors (current); revisited if scope expands.
   - **Priors** (non-negotiable unless prior-revision-proposal succeeds): care primacy, polycentric-not-hierarchical, commons-over-market, pluriversal openness, sovereign identity. Each with rationale + what evidence reopens it.
   - **Adversarial-review arrangement**: bakeoff (Claude + Codex) for findings doc; solo fallback if Codex unavailable, logged.
   - **Repo-topology review scope**: Spore/IC/PM core + darren-workflow/flowcoding/koi-processor as analysis-only.
2. **Moratorium declaration**: update Spore `CLAUDE.md` status line to "corpus review in progress". IC and PM `CLAUDE.md` gain one-line pointer: "See Spore CLAUDE.md — corpus-review v1 moratorium in effect". Pointer removed at Phase 9 close.
3. **Plan snapshot**: copy this file to `~/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md`; commit to Spore `corpus-review/v1` branch. Commit SHA is the immutable plan reference for all downstream "plan at commit X" citations.

### Phase 2 — Corpus inventory

1. **Canon-layer inventory** (`tmp/corpus-inventory.tsv`): enumerate every `.md` under the Canon-layer enumeration (Dependencies section). Paths from the enumeration that don't exist are logged to `tmp/canon-layer-missing-paths.md` as pre-findings, not halt conditions. Columns: path, layer, concept-count, last-modified, introduces-new-concept, ADR-dependencies.
2. **Concept roster** (`tmp/concept-roster.tsv`): every named concept across corpus, with introducing-doc, defining-doc, usage-count, layer-of-introduction, `primitive-class` flag. A concept is `primitive-class` if it meets ≥2 of: (a) declared primitive in `constitutional-artifacts-and-graph-projections.md` or elevating ADR; (b) appears in ≥5 canon-layer docs; (c) has a dedicated lexicon entry (when lexicon exists); (d) referenced as foundational by ≥2 other concepts' definitions.
3. **Namespace discovery** (`tmp/accepted-namespaces.txt`): scan `doc_id` frontmatter across canon-layer; build accepted-namespaces list. Anomalies (no frontmatter, no doc_id) logged to `tmp/doc-id-anomalies.md` as findings-candidates.
4. **Meta-corpus inventory** (`tmp/meta-corpus-inventory.tsv`): protocols, frozen-concepts file, validator rules (code at `scripts/validate_spec_dag.py`), moratorium mechanics (this plan's Constraints section via plan-snapshot commit), bridge-note format convention (canon-review-protocol v2 §2+§5). Artifacts that are "implicit" (no formal doc) flagged as findings-candidates.
5. **Bridge-note inventory** (`tmp/bridge-note-inventory.tsv`): all bridge notes across Spore/IC/PM per authoritative paths. Columns: path, source-artifact, claim-count (source/review), opposition-density, frozen-concept-compliance.
6. **ADR-rationale index** (`tmp/adr-rationale-index.tsv`): per-ADR slug, status, decision, rationale text. Used in Phase 4 to prevent collapsing intentional distinctions.
7. **Repo-topology snapshot** (`tmp/repo-topology-snapshot.md`): for Spore/IC/PM + analysis-only repos, capture shared concepts, cross-repo edges (strict: `spec:<repo>.*` only; broad: `spec:<repo>.*` OR `org:<repo>-learning-field*`), coordination events (strict canon-only path-filter vs broad including connections/planning), contributor overlap, per-repo velocity.
8. **Commit SHA snapshot**: record phase-2 close SHA per repo in methodology doc's "Phase boundaries" table.

### Phase 3 — Deep research report

Research targets (exact list governs AC3 file-count):

**Core (12):**
1. Philosophy of collective agency (Gilbert, Bratman, Searle, Pettit, Tuomela, List)
2. MARL / multi-agent systems (Shoham & Leyton-Brown; mechanism design)
3. Commons governance (Ostrom's 8 principles + polycentricity corpus; Bollier & Helfrich)
4. Distributed systems primitives (CAP/BASE/CRDTs/causal consistency)
5. Category theory / sheaves (Hansen & Ghrist; Spivak; sheaf-based agent coordination)
6. Agent-based modeling (Epstein & Axtell)
7. Viable System Model (Beer)
8. Care ethics / feminist economics (Gilligan, Tronto, Federici)
9. Trust networks / reputation systems (Seligman, Uslaner, Gambetta)
10. REA / ValueFlows
11. Autopoiesis / 4E cognition (Maturana & Varela; enactivism)
12. Pluriversal / indigenous governance (Escobar, de la Cadena)

**Meta (5):**
13. Canonical layering conventions (W3C specs, ISO architecture, DDD, C4, ADR literature)
14. Repo-topology patterns (monorepo vs polyrepo empirical; workspace tooling; shared-canon patterns)
15. Governance-process meta-research (W3C Process Document, IETF RFC 2026, Debian Constitution, Rust RFC)
16. Audience / reader-scoping (IEEE 1063, Divio four-tier, AI-agent-readable specs)
17. Adversarial / peer review (red-team/blue-team, bakeoff patterns, constitutional AI loops)

Per target:
- `docs/research/corpus-review/research-<target-slug>.md` with: what this tradition treats as primitive / atomic; its layering structure; placement of trust/care/identity/memory/state/signals/agency; opposition claims where traditions disagree.
- ≥3 R-claims in the R-claim format.

Capstone at `docs/research/corpus-review/research-capstone.md`: cross-tradition convergences, divergences, gaps, over-specifications. v3 frozen-concepts proposal at `tmp/frozen-concepts-v3-proposal.md`.

Research quality self-check at `tmp/research-quality-log.md`: per-synthesis primary/secondary source counts, contradictions and resolutions, paraphrase-drift spot-check (1-in-5 R-claims).

Authorized source channels: open-access archives, author preprints, library/institutional access, archive.org, publisher free samples, secondary-source summaries (with tag). Never sci-hub, libgen, or paywall-circumvention. Paywalled sources cited via ≤200-word fair-use quotes with attribution; not snapshotted to repo. If intake-time or Wayback snapshots unavailable for a newly-consulted source, snapshot to `~/projects/spore/docs/research/corpus-review/snapshots/` (open-access only) + submit to Wayback.

Access-limit fallback: if a tradition has <2 accessible primary sources, tag `research-gap: access-limited`; reduce its contribution to AC3 floor per the adjusted-target-set formula (below).

### Phase 4 — Diagnostic

1. **Per-doc pass**: for each canon-layer doc + meta-corpus doc + sampled bridge notes, read against finding-type checklist + research capstone. Per-doc diagnostic notes at `tmp/diagnostic/<layer>/<doc-slug>.md`.
2. **Cross-doc pass**: for each concept with usage ≥2, compare definitions across docs. Flag contradictions, drift, silent overloading.
3. **Meta-corpus diagnostic**: apply same finding-type checklist to protocols, learning-field structure, frozen-concepts discipline, moratorium mechanics, validator-rule implicitness, bridge-note format convention.
4. **Bridge-note corpus diagnostic**: stratified positional sample of `max(5, ceil(0.10 * total))` with per-repo minimum 1, deterministic selection by position in sorted path list. Check for missed opposition, paraphrase drift, citation accuracy, concept-slug consistency. Scale to full review if ≥20% of sampled notes have ≥2 issues.
5. **Counterfactual probe**: for each `primitive-class` concept, ask "if this didn't exist, what couldn't we express?" Lossless-paraphrase concepts → dead-weight findings.
6. **Repo-topology diagnostic**: use Phase 3 topology research + Phase 2.7 topology snapshot. Per topology finding: current-topology, alternative evaluated, evidence-for-alternative, coordination-cost-delta, sovereignty-impact.
7. **Consolidated findings document** at `~/projects/spore/docs/research/planning/corpus-foundational-review-findings.md`. Columns: `finding-id`, `type`, `severity`, `corpus-location` (content/meta/bridge-note/repo-topology), `evidence` (count + citation list), `resolution-track` (editorial/canon-review-v2/foundational-reframing/prior-revision-proposal), `dependencies`, `prior-collision-check`, `evidence-model-variant` (standard/meta-corpus/topology).

**Adapted evidence models** for non-bridge-note findings:
- **Meta-corpus**: evidence = the artifact itself + research R-claims + diagnostic-pass contradictions. Threshold: ≥3 distinct pieces.
- **Repo-topology**: evidence = topology-snapshot metrics + research R-claims + canon-review-v1 history. Threshold: ≥3 distinct metrics/claims.
- **Bridge-note-corpus + content-corpus**: standard protocol v2 §4.

8. **Adversarial review of findings document**: bakeoff pattern. Output at `tmp/findings-adversarial-review.md` with added/removed/severity-adjusted tallies. Reviewers work from finding-doc prose + R-claim quotes; they don't re-verify every primary source. Personal-snapshot evidence audited at the reasoning level.

### Phase 5 — Triage

1. **Sort findings into tracks**:
   - **Editorial** (S4): batched for Phase 8.
   - **Canon-review-v2** (most S2/S3, some S1 that fit ADR scope).
   - **Foundational-reframing** (S1 that exceed ADR scope — see criteria below).
   - **Prior-revision-proposal** (findings flagged prior-collision).

**"Exceeds ADR scope" criteria** (any one triggers foundational-reframing):
1. Dissolving a concept entirely.
2. Renaming a concept across the corpus.
3. Re-layering a doc (moving between layers).
4. Adding or removing a canon layer.
5. Changing the definition of canon scope.
6. Revising a declared prior.
7. Repo-topology change.
8. Meta-corpus-protocol revision.

**Wider-scope-docs decision rule** (governance/patterns/positioning/synthesis + IC learning-field/patterns + PM phase-0-spec/downstream-products): if the finding changes the *layer's identity* (splits/merges/moves/redefines layer membership) → foundational-reframing. If the finding is a *specific edit to a doc's content* without changing the layer → per-round carve-out in Phase 7. Ambiguous cases default to foundational-reframing.

2. **Round sequencing**: group by cluster into canon-review rounds; resolve upstream-dependent rounds first. Dependency graph at `tmp/canon-review-round-graph.dot`. Extended-scope findings that route to per-round carve-out (not foundational-reframing) get logged to `tmp/wider-scope-carveout-log.md` with schema: `round-slug | carveout-justification | docs-touched | approving-authority (v2-rule-cited or reframing-reference)`. Created in Phase 5; one row per carve-out.
3. **Triage approval gate**: committed memo at `~/projects/spore/tmp/triage-approval-<date>.md`:
   ```
   - Approver: Darren Zal
   - Timestamp: <ISO-8601>
   - Plan-snapshot SHA: <spore>
   - Findings-doc SHA at approval: <spore>
   - Approved track assignments: per findings-doc at SHA
   - Signed-off-by: Darren Zal
   ```
   Re-approval required on material findings change: new finding added, severity up, track changed, corpus-location scope expanded, new prior-collision. Not material: typo fixes, additional supporting evidence, track simplification, severity down.

### Phase 6 — Foundational-reframing protocol (conditional; only if reframing findings exist)

1. Draft `~/projects/spore/docs/research/planning/foundational-reframing-protocol-v1.md`. Rules: ≥5 sources + ≥2 publicly-verifiable, 7-day cooling-off between proposal-commit and execution, cross-repo consultation artifact required, rollback procedure, vocabulary-handling (renames coordinate with frozen-concepts), meta-corpus-amendment special case (double-cooling if revising an in-flight protocol), repo-topology special case (coordination-cost delta + reversibility plan).
2. Two-round adversarial review of the protocol itself before first use.
3. Per-reframing proposal at `~/projects/spore/docs/research/planning/reframing/<slug>.md` (includes consultation artifact).
4. **Reframing → ADR execution**: approved reframings authorize per-repo ADR drafting; ADRs cite the reframing proposal in `authorized-by:`. Reframing does not itself authorize direct edits.

### Phase 7 — Canon-review rounds

Each round follows canon-review-protocol v2 + this plan's extensions:

1. **Pre-flight**: validator baseline + moratorium state + frozen-concepts alignment.
2. **Round-scope declaration**: findings covered, rules invoked (cite v2 rule numbers R-1..R-11 or specific v1-era sections), target allowlist (from `tmp/accepted-namespaces.txt` + meta/topology/candidate extensions).
3. **Evidence gate** (per-finding): protocol v2 §4 for standard findings; adapted models (Phase 4) for meta/topology; prior-collision check. S1 also requires the stricter ≥5 + public-corroboration minima.
4. **Session-atomic edits** on `corpus-review/v1` branches across all affected repos within **30-minute commit-to-commit window + 5-minute tolerance** (for clock skew / network delay). Verification compares timestamps using the author-date (not system clock); windows spanning repos with clock-skew reports pass if within 35 minutes total.
5. **Round close** produces: ADRs in appropriate repo(s), shared framing note at `docs/research/connections/canon-framing-<round-slug>.md` if cross-repo, round-close memo at `tmp/canon-review-round-<n>-close.md`.

**ADR r_claim_source identifier families** (plan-scoped extension; harvest candidate for protocol v3):
- `<bridge-note-doc-id>:R<n>` (standard).
- `spec:spore.corpus-review.research-<target-slug>:R<n>` (research-doc-sourced).
- `meta:<slug>`, `topology:<slug>`, `candidate:<slug>` (secondary only; never `r_claim_source[0]`).

Primary position must always be a claim-bearing identifier (standard or research). Findings with only meta/topology/candidate support default to `hold-as-tension` until a claim-bearing source exists.

**Round-close r_claim_source-integrity check** (scripted at `~/projects/spore/scripts/validate-rclaim-source.py`): target exists, allowlist format, no duplicates, primary has `supported_by`. Any failure halts round close.

**Degraded-mode constraints**:
- **DB unavailable**: S3/S4 may close up to 3 rounds under grep-derived evidence. S1/S2 pause after first grep-derived round until DB restored. Cumulative-adjustment artifact at `tmp/projection-unavailable-adjustments.md` tracks evidence reductions across rounds to prevent drift.
- **Projection unavailable**: S1/S2 rounds cannot close under projection-unavailable mode (disposition = hold-as-tension until restored). S3/S4 may close with ADR note "projection-unavailable at <timestamp>".

### Phase 8 — Editorial pass

S4 findings batched, executed on `corpus-review/v1` branches. Editorial edits preserve validator baseline, do not introduce new concepts. Anything drifting out of editorial class returns to findings for re-triage. Close memo at `tmp/editorial-pass-close.md`.

### Phase 9 — Propagation

1. **Per-repo merge**: PR `corpus-review/v1` → `main` in each of Spore/IC/PM. Each PR cites the approving ADRs/reframings. Merge order: Spore first (canon source), then IC/PM; all three within a 24-hour window.

   **Partial-merge recovery** (if Spore merges but IC or PM fails):
   - Merge failure triggers: PR conflict, CI failure, branch protection rejection.
   - **Default**: revert the Spore merge commit (via standard `git revert -m 1 <merge-sha>` + PR) to restore pre-merge coherent state across all three repos. Re-attempt the merge set once the blocking issue is resolved.
   - **Exception**: operator may elect to keep Spore's merge and defer IC/PM with an explicit `tmp/partial-merge-deferral-<ISO>.md` memo citing the failure + deferral rationale + timeline. IC/PM remain on `corpus-review/v1` branches until re-attempted.
   - **Never**: leave the three repos in partial-merge state silently. Either revert back or explicitly defer with committed rationale.
   - **Vision + synthesis commits go via PR flow too**, not direct commits to `main` post-merge.
2. **Update Spore vision + synthesis**: `docs/project-vision.md` + `docs/synthesis/*` to reflect accepted changes. **README.md update is OPTIONAL** — required only if changes materially affect top-level architecture/primitives that README surfaces.
3. **Lift moratorium**: restore CLAUDE.md status line on Spore; remove pointer on IC/PM CLAUDE.md.
4. **Close all open moratorium exceptions**: every entry in `tmp/moratorium-exceptions.md` must have populated `close-timestamp` before plan-close AC evaluation.
5. **Dependent-repo propagation scope decision** at `tmp/propagation-scope-decision.md`: whether flowcoding / darren-workflow / other dependents need updates (they're analysis-only per Non-goals; this memo records what was considered and what defers to downstream plans).
6. **Delete `corpus-review/v1` branches** post-merge.
7. **Harvest** into `~/projects/spore/docs/research/planning/corpus-foundational-review-protocol.md` (analog of canon-review-protocol v2 harvest): rules learned, extensions to propose into protocol v3.

## Acceptance criteria

All ACs verified by concrete scripted check (see Verification plan).

- [ ] **AC1**: Methodology doc exists with all 11 required `## ` sections.
- [ ] **AC2**: Corpus inventory + meta-corpus inventory + bridge-note inventory + concept roster + ADR-rationale index + topology snapshot exist. Canon-layer coverage = all existing paths from the authoritative enumeration (missing paths logged as findings, not halt).
- [ ] **AC3**: Research entries match Phase 3.1 list count (17 + 1 capstone = 18 files). Weighted R-claim count ≥ adjusted-floor where:
  - `weighted = full_weight_claims + 0.5 * half_weight_claims`
  - `adjusted_floor = max(60, 100 - 5 * access_limited_tradition_count)`
- [ ] **AC4**: Findings document exists with required columns, including meta/bridge-note/topology as valid corpus-location categories and prior-revision-proposal as valid resolution-track.
- [ ] **AC5**: Triage output assigns each finding-id exactly once to exactly one resolution-track. Verifier joins findings-doc IDs against `tmp/canon-review-round-graph.dot` + `tmp/wider-scope-carveout-log.md` + reframing/prior-revision paths. Every ID present exactly once.
- [ ] **AC6**: If foundational-reframing findings exist, protocol v1 file exists and has passed two-round adversarial review; each reframing proposal has ≥5 sources + cooling-off-elapsed + consultation artifact; resulting ADRs cite `authorized-by:`.
- [ ] **AC7**: Zero validator regressions on Spore at every phase boundary. Zero slug reuse across ADRs (scripted uniqueness check). Zero partial-drift events (scripted session-atomicity check: for each cross-repo round, all affected repos committed within 30-min window).
- [ ] **AC8**: Every finding has either resolved disposition or explicitly documented deferral. Zero findings in ambiguous state.
- [ ] **AC9**: Post-propagation: `doc-check` (or fallback script) returns 0 dangling references across Spore/IC/PM.
- [ ] **AC10**: Harvest doc exists at `docs/research/planning/corpus-foundational-review-protocol.md`.
- [ ] **AC11**: Moratorium lifted. Spore CLAUDE.md status line restored; IC/PM pointer removed.
- [ ] **AC12**: Phase-boundary tags exist across all three repos for all executed phases, each pushed to origin OR backed by bundle at `~/.claude/snapshots/`.
- [ ] **AC13**: Zero plan-attributable commits in analysis-only repos (darren-workflow, flowcoding, koi-processor) across the plan window. Unrelated commits OK.
- [ ] **AC14**: Every material findings-doc change has a corresponding triage re-approval memo.
- [ ] **AC15**: All moratorium-exception log entries have populated close-timestamp before plan close.
- [ ] **AC16**: Paywalled / personal-snapshot content never committed to any of the three repos. Check: no files under `~/Documents/spore-corpus-review-snapshots/` appear as tracked files; `tmp/personal-snapshots.md` is never tracked in Spore; `git log -S` search on registry hashes returns zero matches. Supplemental: random 1% sample of research R-claims with personal-snapshot tags manually checked for quote-paraphrase not exceeding 200-word fair-use window.
- [ ] **AC17**: **`main` immutability through Phase 8**: zero plan-attributable commits on `main` in Spore/IC/PM from Phase 0 start through Phase 8 close — **except** commits authorized by a safety-critical moratorium exception (logged in `tmp/moratorium-exceptions.md`; those commits cite the exception ID in commit-trailer `Exception-Id: <id>`). Phase 9 merges are the primary writes to `main`. Verifier uses same plan-attribution logic as AC13 (commit message regex + diff touches plan-referenced paths); commits whose trailers cite a valid `Exception-Id` that has a matching closed entry in the exceptions log pass; unrelated commits (no plan attribution) also pass.
- [ ] **AC18**: **Repo-topology decision produced**: `tmp/repo-topology-decision.md` exists at Phase 9 close with final state `adopted: <decision>` OR `deferred: <rationale>`. Never absent.
- [ ] **AC19**: **Phase 9 merge completion recorded**: methodology doc's "Phase 9 merges" subsection lists merge commit SHAs for Spore/IC/PM, all three present, merges within a 24-hour window per the Phase 9 rule.
- [ ] **AC20**: `tmp/wider-scope-carveout-log.md` exists and has a row for every wider-scope-per-round-carveout round; zero carve-outs without corresponding row.
- [ ] **AC21**: **Phase 1 declarations gate**: before Phase 2 opens, methodology doc contains all 11 required sections (per AC1) AND Spore CLAUDE.md status line is updated AND plan snapshot is committed to Spore `corpus-review/v1` branch. Verifier: run AC1 check + `grep -q 'corpus review in progress' ~/projects/spore/CLAUDE.md` + `git -C ~/projects/spore log --oneline corpus-review/v1 -- docs/research/planning/corpus-foundational-review-v1-plan.md | head -1 | grep -q .`.

## Verification plan

- **AC1**:
  ```
  MD=~/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md
  for s in "Finding types" "Severity tiers" "Evidence bar" "Rationale-review rule" \
           "Moratorium scope" "Frozen-concepts v3 scope" "Meta-corpus layer" \
           "Audience" "Priors" "Adversarial-review arrangement" \
           "Repo-topology review scope"; do
    grep -qF "## $s" "$MD" || { echo "MISSING: $s"; exit 1; }
  done
  ```
- **AC2**:
  ```
  for f in tmp/corpus-inventory.tsv tmp/concept-roster.tsv tmp/meta-corpus-inventory.tsv \
           tmp/bridge-note-inventory.tsv tmp/adr-rationale-index.tsv \
           tmp/repo-topology-snapshot.md; do
    test -s "$HOME/projects/spore/$f" || { echo "MISSING: $f"; exit 1; }
  done
  # Canon-layer paths that DO exist must all be in corpus-inventory; out-of-scope paths absent.
  # Runs the discovery script at scripts/ac2-verify.sh.
  ```
- **AC3**:
  ```
  python3 -c "
  import re, glob, sys
  from pathlib import Path
  full = 0; half = 0; limited = 0
  tag = re.compile(r'\[tag:\s*(citation-uncheckable|primary-access-limited)\]')
  rc = re.compile(r'^- \*\*R\d+\*\*:.*\[target:[^\]]+\]\s*\[concept:[^\]]+\]')
  for p in glob.glob(str(Path.home()/'projects/spore/docs/research/corpus-review/research-*.md')):
      txt = Path(p).read_text()
      if 'research-gap: access-limited' in txt: limited += 1
      for line in txt.splitlines():
          if rc.match(line):
              if tag.search(line): half += 1
              else: full += 1
  weighted = full + 0.5*half
  floor = max(60, 100 - 5*limited)
  sys.exit(0 if weighted >= floor else 1)
  "
  ```
- **AC4**: findings doc has required columns via `head -1` schema check. (No minimum row count; ≥20 was a mental estimate, not a hard floor — the real floor is "findings reflect the diagnostic pass," which is quality-not-quantity.)
- **AC5**: scripted one-to-one join:
  ```
  python3 -c "
  import re, sys
  from pathlib import Path
  findings_path = Path.home() / 'projects/spore/docs/research/planning/corpus-foundational-review-findings.md'
  ids = []
  for l in findings_path.read_text().splitlines():
      if l.startswith('| F') and '|' in l[2:]:
          m = re.match(r'^\|\s*(F\d+)\s*\|', l)
          if m: ids.append(m.group(1))
  assignments = {}  # finding-id -> count of assignments across artifacts
  for id in ids: assignments[id] = 0
  # Count references in each resolution-track artifact
  artifacts = [
      Path.home() / 'projects/spore/tmp/canon-review-round-graph.dot',
      Path.home() / 'projects/spore/tmp/wider-scope-carveout-log.md',
  ]
  for r in (Path.home() / 'projects/spore/docs/research/planning/reframing').glob('*.md'): artifacts.append(r)
  for r in (Path.home() / 'projects/spore/docs/research/planning/prior-revision-proposals').glob('*.md'): artifacts.append(r)
  for a in artifacts:
      if not a.exists(): continue
      txt = a.read_text()
      for id in ids:
          if re.search(r'\b' + id + r'\b', txt): assignments[id] += 1
  bad = [f'{id}: {c}' for id, c in assignments.items() if c != 1]
  if bad: print('NOT 1:1:', *bad, sep='\n'); sys.exit(1)
  "
  ```
- **AC6**: conditional — if reframing proposals exist:
  ```
  PROPOSAL_DIR=~/projects/spore/docs/research/planning/reframing
  [[ ! -d "$PROPOSAL_DIR" ]] || [[ -z "$(ls -A "$PROPOSAL_DIR")" ]] && exit 0  # no reframing findings → AC6 skipped
  test -f ~/projects/spore/docs/research/planning/foundational-reframing-protocol-v1.md \
    || { echo "missing reframing protocol"; exit 1; }
  for p in "$PROPOSAL_DIR"/*.md; do
    # ≥5 sources per proposal
    SOURCE_COUNT=$(grep -c '^- source:' "$p" || echo 0)
    [[ $SOURCE_COUNT -ge 5 ]] || { echo "$p: <5 sources ($SOURCE_COUNT)"; exit 1; }
    # Cooling-off: commit date of proposal vs first ADR citing it
    PROPOSAL_DATE=$(git -C ~/projects/spore log --format=%ct -- "$p" | tail -1)
    # Find first ADR citing this proposal in authorized-by
    PROPOSAL_SLUG=$(basename "$p" .md)
    FIRST_ADR=$(grep -l "authorized-by:.*$PROPOSAL_SLUG" \
      ~/projects/{spore,intelligence-commons,poietic-match}/docs/research/canon-decisions/*.md 2>/dev/null | head -1)
    if [[ -n "$FIRST_ADR" ]]; then
      ADR_DATE=$(git -C "$(dirname $FIRST_ADR)/../../.." log --format=%ct -- "$FIRST_ADR" | tail -1)
      DIFF=$(( (ADR_DATE - PROPOSAL_DATE) / 86400 ))
      [[ $DIFF -ge 7 ]] || { echo "$p: cooling-off <7 days ($DIFF)"; exit 1; }
    fi
    # Consultation artifact present
    test -f ~/projects/spore/tmp/cross-repo-consultation-$PROPOSAL_SLUG.md \
      || { echo "$p: missing consultation artifact"; exit 1; }
  done
  ```
- **AC7**:
  ```
  # Validator
  python ~/projects/spore/scripts/validate_spec_dag.py 2>&1 \
    | grep -c '^ERROR' | grep -q '^7$' || { echo "validator regression"; exit 1; }

  # ADR identity uniqueness: per-repo for adr_number/filename (local scope),
  # global for doc_id (cross-repo uniqueness needed to avoid slug collisions).
  python3 -c "
  import re, glob, sys
  from collections import Counter
  from pathlib import Path
  doc_ids = []  # global check
  for repo in ('spore', 'intelligence-commons', 'poietic-match'):
      nums = []; names = []
      root = Path.home() / 'projects' / repo / 'docs' / 'research' / 'canon-decisions'
      if not root.exists(): continue
      for p in root.glob('*.md'):
          names.append(p.name)
          txt = p.read_text()
          if txt.startswith('---'):
              fm = txt.split('---')[1]
              n = re.search(r'^adr_number:\s*(\S+)', fm, re.M)
              d = re.search(r'^doc_id:\s*(\S+)', fm, re.M)
              if n: nums.append(n.group(1))
              if d: doc_ids.append(d.group(1))
      for kind, arr in [('adr_number', nums), ('filename', names)]:
          dups = [k for k,v in Counter(arr).items() if v > 1]
          if dups: print(f'DUPLICATE {kind} in {repo}: {dups}'); sys.exit(1)
  # Global doc_id uniqueness
  dups = [k for k,v in Counter(doc_ids).items() if v > 1]
  if dups: print(f'DUPLICATE doc_id (global): {dups}'); sys.exit(1)
  "

  # Session-atomicity: for each round, all affected repos committed within 35 min
  ~/projects/spore/scripts/check-session-atomicity.sh
  ```
- **AC8**: findings-doc has a `status` column in its table; every row's `status` cell equals one of {`resolved-via-ADR-<id>`, `resolved-via-reframing-<slug>`, `resolved-editorial`, `hold-as-tension`, `deferred-with-rationale`}. Parse:
  ```
  python3 -c "
  import re, sys
  from pathlib import Path
  p = Path.home() / 'projects/spore/docs/research/planning/corpus-foundational-review-findings.md'
  if not p.exists(): print(f'MISSING: {p}'); sys.exit(1)
  lines = p.read_text().splitlines()
  header_idx = next((i for i, l in enumerate(lines) if '|' in l and 'status' in l.lower()), None)
  if header_idx is None: print('MISSING status column'); sys.exit(1)
  cols = [c.strip().lower() for c in lines[header_idx].split('|')]
  status_col = cols.index('status')
  for l in lines[header_idx+2:]:
      if not l.startswith('|'): break
      cells = [c.strip() for c in l.split('|')]
      if len(cells) <= status_col: continue
      s = cells[status_col]
      if not re.match(r'^(resolved-|hold-as-tension|deferred-)', s):
          print(f'UNRESOLVED: {l}'); sys.exit(1)
  "
  ```
- **AC9**: `doc-check` or fallback script returns 0 dangling.
- **AC10**: `test -f ~/projects/spore/docs/research/planning/corpus-foundational-review-protocol.md` + ≥10 rule entries.
- **AC11**: `grep -c 'corpus review in progress' ~/projects/spore/CLAUDE.md` = 0; `grep -c 'corpus-review v1' ~/projects/{intelligence-commons,poietic-match}/CLAUDE.md` = 0.
- **AC12**: executed-phases list is a **machine-readable manifest** at `~/projects/spore/tmp/executed-phases.yaml` (maintained by phase-boundary-close script, not parsed from methodology table prose). Schema:
  ```yaml
  executed_phases:
    - phase: 0
      closed_at: <ISO-8601>
      commits: {spore: <sha>, intelligence-commons: <sha>, poietic-match: <sha>}
    - phase: 1
      ...
  ```
  Verifier reads YAML directly (PyYAML is in Python-side deps; fallback uses stdlib `re` if PyYAML is unavailable):
  ```
  # PyYAML path (preferred)
  EXECUTED=$(python3 -c "
  import sys
  from pathlib import Path
  path = Path.home() / 'projects/spore/tmp/executed-phases.yaml'
  try:
      import yaml
      data = yaml.safe_load(path.read_text())
      for p in data['executed_phases']: print(p['phase'])
  except ImportError:
      # Fallback: minimal regex extraction
      import re
      for m in re.finditer(r'^\s*- phase:\s*(\d+)', path.read_text(), re.M):
          print(m.group(1))
  ")
  for N in $EXECUTED; do
    for R in spore intelligence-commons poietic-match; do
      git -C ~/projects/$R rev-parse "corpus-review-phase-$N-boundary" 2>/dev/null \
        || { echo "MISSING TAG: $R phase $N"; exit 1; }
      PUSHED=$(git -C ~/projects/$R ls-remote origin "refs/tags/corpus-review-phase-$N-boundary" 2>/dev/null | wc -l)
      BUNDLED=$(test -f ~/.claude/snapshots/corpus-review-phase-$N-$R.bundle && echo 1 || echo 0)
      [[ $PUSHED -eq 0 && $BUNDLED -eq 0 ]] && { echo "NEITHER PUSHED NOR BUNDLED: $R phase $N"; exit 1; }
    done
    test -f ~/.claude/snapshots/corpus-review-phase-$N.tar.gz || { echo "MISSING TARBALL: phase $N"; exit 1; }
  done
  ```
- **AC13**: plan-attributable = (commit message matches regex) OR (diff touches a path cited by this plan's research docs / findings doc — i.e., the plan referenced the file, then it changed):
  ```
  for entry in darren-workflow flowcoding regenai/koi-processor; do
    REPO="$HOME/projects/$entry"
    [[ -d "$REPO" ]] || continue
    BASELINE=$(grep -A1 "analysis-only.*$entry" ~/projects/spore/tmp/phase-0-repo-snapshot.md | tail -1)
    CURRENT=$(git -C "$REPO" rev-parse HEAD)
    [[ "$BASELINE" == "$CURRENT" ]] && continue
    # Check 1: commit message regex
    ATTRIB_MSG=$(git -C "$REPO" log --format='%H %s%n%b' "$BASELINE..HEAD" \
      | grep -iE '(corpus.review|foundational.review|corpus-foundational)')
    # Check 2: any diff touches paths that appear in plan-referenced file list
    # Plan-referenced files = paths listed in research-*.md + findings doc
    CITED_PATHS=$(grep -rhoE '[a-zA-Z0-9_/.-]+\.(md|py|sh)' \
      ~/projects/spore/docs/research/corpus-review/ \
      ~/projects/spore/docs/research/planning/corpus-foundational-review-findings.md \
      2>/dev/null | sort -u)
    ATTRIB_DIFF=$(git -C "$REPO" log --name-only --format= "$BASELINE..HEAD" \
      | while read f; do echo "$CITED_PATHS" | grep -qF "$f" && echo "$f"; done)
    if [[ -n "$ATTRIB_MSG" || -n "$ATTRIB_DIFF" ]]; then
      echo "AC13 FAIL: plan-attributable in $entry"
      [[ -n "$ATTRIB_MSG" ]] && echo "  message: $ATTRIB_MSG"
      [[ -n "$ATTRIB_DIFF" ]] && echo "  diff: $ATTRIB_DIFF"
      exit 1
    fi
  done
  ```
- **AC14**: `MATERIAL=$(grep -c '^- material:' tmp/findings-doc-changelog.md 2>/dev/null || echo 0)`; approval count = MATERIAL + 1 (initial).
- **AC15**: `awk '/^- ISO: /{o++} /close-timestamp: [0-9]/{o--} END{exit o}' tmp/moratorium-exceptions.md`.
- **AC16**:
  ```
  # Part 1: personal-snapshots registry hashes never appear in git log search
  if [[ -f ~/Documents/spore-corpus-review-snapshots/.registry ]]; then
    while read hash rest; do
      for R in spore intelligence-commons poietic-match; do
        git -C ~/projects/$R log --all -S "$hash" --oneline | head -1 | grep -q . \
          && { echo "AC16 FAIL: hash $hash found in $R"; exit 1; }
      done
    done < ~/Documents/spore-corpus-review-snapshots/.registry
  fi
  # Part 2: tmp/personal-snapshots.md never tracked
  git -C ~/projects/spore ls-files --error-unmatch tmp/personal-snapshots.md 2>/dev/null \
    && { echo "AC16 FAIL: personal-snapshots.md tracked"; exit 1; }
  # Part 3: manual fair-use check — for a random 1% sample of R-claims with
  # personal-snapshot tags, verify quote length <= 200 words. Operator-run; log
  # results to tmp/fair-use-spot-check.md. Verifier confirms file exists + has
  # entries proportional to the personal-snapshot R-claim count.
  test -f ~/projects/spore/tmp/fair-use-spot-check.md || { echo "AC16 FAIL: no fair-use spot-check log"; exit 1; }
  ```

## Phase-boundary tagging

At each phase close, across all three repos:

1. Pre-check: tag `corpus-review-phase-N-boundary` does not exist (refuse overwrite; require `git tag -d` with audit entry at `tmp/phase-boundary-tag-cleanup.log` to retry).
2. Create tag: `git tag corpus-review-phase-N-boundary`.
3. Push (hard gate): `git push origin corpus-review-phase-N-boundary`. If push fails, create bundle backup: `git bundle create ~/.claude/snapshots/corpus-review-phase-N-<repo>.bundle corpus-review-phase-N-boundary`. Next phase opens only after tag+push-or-bundle on all three repos.
4. Tarball tmp/: `tar czf ~/.claude/snapshots/corpus-review-phase-N.tar.gz tmp/` (rename prior version if exists).
5. Record SHAs in methodology doc's "Phase boundaries" table.

## Rollback

Since all plan work is on `corpus-review/v1` branches (not `main`), rollback scope is intrinsically limited. `main` is untouched during Phases 0–8.

**Default rollback (non-destructive)**: `git revert` each post-boundary commit on the `corpus-review/v1` branch, deterministic newest-first:
```
COMMITS=$(git log --reverse --format=%H "corpus-review-phase-N-boundary..corpus-review/v1")
for c in $(echo "$COMMITS" | tac); do git revert --no-edit "$c"; done
```
Restore tmp/ state from phase-N tarball; update findings doc with rollback note.

**Emergency `git reset --hard`** is ALLOWED on `corpus-review/v1` branches only (never on `main`). Steps run **per-repo** across all of Spore/IC/PM:
```
ISO=$(date -u +%Y-%m-%dT%H:%M:%SZ)
STASH_FAILED=0
for R in spore intelligence-commons poietic-match; do
  cd ~/projects/$R
  # 1. Pre-reset stash; fail-loud on error (never `|| true`)
  if ! git stash push -u -m "corpus-review-pre-rollback-$ISO"; then
    # If nothing to stash, that's OK — verify via git stash list; if push truly failed, halt
    git stash list | grep -q "corpus-review-pre-rollback-$ISO" \
      || { echo "STASH FAILED in $R — reset blocked"; STASH_FAILED=1; }
  fi
  # 2. Pre-reset patch backup (only if there are commits to save)
  COMMITS=$(git rev-list --count corpus-review-phase-$N-boundary..corpus-review/v1 2>/dev/null || echo 0)
  if [[ $COMMITS -gt 0 ]]; then
    mkdir -p ~/.claude/snapshots/corpus-review-pre-rollback-$ISO/$R
    git format-patch corpus-review-phase-$N-boundary..corpus-review/v1 \
      -o ~/.claude/snapshots/corpus-review-pre-rollback-$ISO/$R \
      || { echo "PATCH BACKUP FAILED in $R — reset blocked"; STASH_FAILED=1; }
  fi
done
# Hard gate: if ANY repo failed stash or patch backup, reset is BLOCKED
[[ $STASH_FAILED -eq 0 ]] || { echo "ABORT: reset --hard blocked; resolve backups first"; exit 1; }
# 3. Operator approval memo at ~/projects/spore/tmp/emergency-reset-approval-$ISO.md
# 4. Execute per repo (only after all backups succeeded)
for R in spore intelligence-commons poietic-match; do
  cd ~/projects/$R
  git reset --hard corpus-review-phase-$N-boundary
done
```

Direct `main` is never touched. If Phase 9 merge produced regression on `main`, rollback via PR revert of the merge commit (standard GitHub flow), not `reset --hard`.

**Post-rollback verification**:
```
# HEAD descends from target tag
for R in spore intelligence-commons poietic-match; do
  git -C ~/projects/$R merge-base --is-ancestor \
    $(git -C ~/projects/$R rev-parse corpus-review-phase-$N-boundary) \
    $(git -C ~/projects/$R rev-parse corpus-review/v1) \
    || { echo "FAIL: $R"; exit 1; }
done
# Stash preserved
git -C ~/projects/spore stash list | grep -q "corpus-review-pre-rollback-"
# Working tree matches recorded baseline
for R in spore intelligence-commons poietic-match; do
  diff <(git -C ~/projects/$R status --porcelain) tmp/phase-boundary-drift-$N-$R.txt
done
```

## Risks

- **Scope creep**: methodology doc is the contract; finding-type expansions require plan amendment.
- **Research depth insufficient across 17 traditions**: adversarial review of findings (Phase 4.8) + research quality self-check (Phase 3) are the mitigations.
- **Diagnostic fatigue over many docs**: 2-hour blocks with rest-gates; per-doc notes individually reviewable for consistency.
- **Findings sequencing wrong (later round invalidates earlier)**: round dependency graph updated at every round close.
- **Reviewer-is-author bias**: bakeoff adversarial review at Phase 4.8 + solo-operator caveat in methodology.
- **Dogfooding circularity**: review uses Spore primitives to adjudicate Spore primitives. Acknowledged; primitives in current form are working-set; foundational-circularity findings get escalated.
- **DB or projection unavailable** creates evidence-downgrade risk: S1/S2 locked out of closure in those modes; cumulative-adjustment ledger prevents drift.
- **Single-operator approvals for highest-impact decisions**: partial mitigation via bakeoff adversarial review; full mitigation requires additional maintainers (not available at plan time).
- **Personal-snapshot evidence not independently verifiable**: S1/S2 require public-corroboration minima; S3/S4 may rest on personal snapshots but cannot escalate without meeting the bar.

## Parking Lot

- (Impact: H) (Effort: M) (Post-launch) — Amend intake-protocol v1 based on Phase 3 execution lessons.
- (Impact: H) (Effort: M) (Post-launch) — Amend canon-review-protocol v2 → v3 based on Phase 7 gaps + absorption of plan-scoped extensions (meta/topology/candidate identifiers, adapted evidence models, wider-scope carve-outs).
- (Impact: M) (Effort: L) (Post-launch) — Extend `project_bridge_notes.py` to parse new identifier families (enables end-to-end projection for research-sourced and meta/topology/candidate findings).
- (Impact: M) (Effort: M) (Someday) — Propagate corpus-review discipline to flowcoding / darren-workflow / other dependent repos.
- (Impact: M) (Effort: M) (Someday) — Retrospective on foundational-reframing track: was a separate track necessary, or could protocol v2 have been extended?
- (Impact: M) (Effort: L) (Someday) — Language / i18n audit of the corpus; Anglo-concept translatability.
- (Impact: M) (Effort: L) (Someday) — Scale-and-federation review: corpus viability at 10x contributors, multiple bioregions.
- (Impact: M) (Effort: M) (Someday) — Power-asymmetry self-study: non-hierarchical coordination produced hierarchically.
- (Impact: L) (Effort: M) (Someday) — Scenario-based content testing: canon-case-book analog.
- (Impact: L) (Effort: S) (Next-sprint) — Retrospective on finding-type taxonomy (did all 12 types instantiate?).

## References

- ~/projects/spore/docs/research/planning/canon-review-protocol.md
- ~/projects/spore/docs/research/planning/learning-field-intake-protocol.md
- ~/projects/spore/docs/project-vision.md
- ~/projects/spore/CLAUDE.md
- ~/.claude/projects/-Users-darrenzal-projects-spore/memory/MEMORY.md
