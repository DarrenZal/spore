---
reviewer: Claude Code Opus 4.7 (1M context, in-session)
review_date: 2026-04-20
review_round: 1 (of 2)
reviewed_doc: docs/research/planning/foundational-reframing-protocol-v1.md
reviewed_sha: 1333933b387a084f94360636f3d26026ad1739cb
---

# Phase 6b Round 1 — Adversarial review of foundational-reframing-protocol-v1

## Summary

The draft is structurally sound and covers all 12 items required by plan §Phase 6.1 + Prompt N. The adaptations (eligible-on frontmatter field, active-findings evidence taxonomy, status vocabulary separated from ADR lifecycle) are well-judged. F-031 and F-027 are correctly fenced from pre-commitment.

Four blocking issues prevent the protocol from handling all 13 covered reframings cleanly. Five important issues should be fixed in this round or Round 2. The strongest gap is the lack of inter-proposal dependency mechanics: F-029, F-038, and F-039 all depend on F-037, and the current protocol provides no way to document or enforce that.

## Coverage check — plan §6.1 + Prompt N

All 12 items present:

| Required | Satisfied by |
|---|---|
| Evidence bar (≥5 sources, ≥2 public) | FR-8, FR-10 |
| Cooling-off (7 days, author-date) | FR-13, FR-14 |
| Cross-repo consultation artifact | FR-15, FR-16 |
| Rollback procedure | FR-27, FR-28 |
| Vocabulary handling | FR-18, FR-19 |
| Meta-corpus double-cooling | FR-20 |
| Repo-topology special case | FR-21, FR-22, FR-23 |
| Constitutional-amendment guard | FR-31 |
| Proposal-to-ADR lineage | FR-24, FR-25 |
| Joint proposals | FR-29, FR-30 |
| Lifecycle states | FR-12 |
| Solo-operator caveat | FR-6, FR-17 |

## Blocking (must-fix before any reframing proposal uses this protocol)

### B1 — proposal_kind enum missing cases for new-artifact-creation

FR-3 enum is `concept-merge | concept-rename | relayer | canon-scope | prior-revision | topology | protocol-amendment`. F-027 (moratorium-mechanics formalization) creates a new standalone protocol artifact where no artifact existed before — not an amendment of an existing one. No clean bucket. Also F-028 (frozen-vocab role redefinition) partially creates a new governance role, not strictly an amendment.

**Fix**: add `new-protocol-creation` (or `canon-artifact-addition`) to the enum. Alternatively rename `protocol-amendment` → `protocol-creation-or-amendment` and clarify in FR-4 that the body's Proposed-reframing section must distinguish net-new from revising existing.

### B2 — FR-20 double-cooling list is static and incomplete

FR-20 names `canon-review-protocol.md`, `learning-field-intake-protocol.md`, and this protocol as meta-corpus-amendment targets. But the methodology doc's §Meta-corpus layer includes `concepts-p2p-wiki.yaml` (the frozen vocabulary) and the validator rule set (`validate_spec_dag.py` behavior) as meta-corpus members. An F-028 proposal revising the frozen-vocab's governance role would miss double-cooling under current FR-20.

Also, if F-027's moratorium-formalization creates a new standalone moratorium-protocol doc, that doc should inherit double-cooling from the moment it ratifies — no current rule promotes it into the set.

**Fix options**:
(a) Expand FR-20's list to name every current meta-corpus member (concepts-p2p-wiki.yaml, validator rules, any future standalone moratorium-protocol).
(b) Change FR-20 to pointer-reference `tmp/meta-corpus-inventory.tsv` (or the methodology doc's §Meta-corpus layer section) as the authoritative list, with a rule that new artifacts admitted as meta-corpus auto-inherit double-cooling.

Option (b) is more durable.

### B3 — No inter-proposal dependency mechanics

F-029 (learning-field host elevation) depends on F-037 (topology trunk) — the learning-field's host repo choice is a function of the topology decision. F-038 (shared-canon layer redundancy) and F-039 (cross-repo merge-governance) likewise cascade from F-037. If all proposals commit in parallel on day 0, each becomes `eligible` on day 7 independently — dependent proposals could enter `authorized-ADR` before their parent's direction is settled, silently pre-committing topology downstream.

The current findings doc carries `dependencies: [F-037]` in F-029, F-038, F-039 — that data is already there but the protocol doesn't surface it.

**Fix**: add a `depends-on: [proposal-slug, ...]` frontmatter field (populated from the covered findings' `dependencies:` column). Add a rule: "a proposal with non-empty `depends-on:` cannot transition to `eligible` until every named parent proposal has reached at least `authorized-ADR`." Optional-but-nice: a circular-dependency check in the consultation artifact's sign-off checklist.

### B4 — `authorized-by:` format ambiguity vs AC6 verification script

Plan AC6 verifies proposal-ADR lineage with:
```
grep -l "authorized-by:.*$PROPOSAL_SLUG" .../canon-decisions/*.md
```
This is a single-line regex. If the ADR uses YAML list format:
```yaml
authorized-by:
  - reframing-pm-canon-scope
```
the grep fails — `authorized-by:` and the slug are on different lines.

FR-24 says the ADR cites the proposal slug in `authorized-by:` but doesn't specify format. Drafters will vary; some will write YAML lists (natural for multi-reframing ADRs).

**Fix**: FR-24 should specify `authorized-by:` format as single-line, comma-separated (`authorized-by: slug1, slug2`) so AC6 grep matches reliably. Include an example. Alternatively, change the AC6 script in the plan to use a YAML-aware parser — but that's plan-scope, slower to land.

## Important (should-fix in round 1; can defer to round 2)

### I1 — FR-11 frame-change sufficiency has no adjudicator

FR-11 says a proposal that proves a local contradiction but not the need for frame change is "sent back down to canon review or editorial repair." No decision procedure is named. In the solo-operator state, the drafter could mark their own weak-evidence proposal `eligible` and consultation-sign-off without external pushback.

**Fix**: name the consultation artifact as the adversarial gate for frame-change sufficiency. Require the artifact to include a one-line "frame-change sufficiency verdict" (e.g., `frame-change-required: yes` with a 1-paragraph rationale). That operationalizes FR-11 inside the solo-operator discipline.

### I2 — FR-19 slug mapping doesn't specify alias-vs-retire semantics

F-020 (knowledge-graph → epistemic-graph) is a dissolution of one primitive-class slug. FR-19 requires a slug mapping table but doesn't say whether predecessor slugs become aliases in frozen-concepts-v3, are hard-retired, or stay legible as historical gloss. This matters: aliases are soft-deprecation; hard-retires break older docs' references.

**Fix**: FR-19 should require the mapping table to include a `disposition:` column per predecessor slug, with values `alias-in-v3 | historical-gloss | hard-retired`. Proposals that choose `hard-retired` must include an explicit reference-cleanup plan.

### I3 — Cooling-off material-change-reset rule missing

If a proposal is committed on day 0, then revised on day 3 to add 2 new sources (strengthening evidence), does the 7-day clock reset? Protocol is silent. Canon-review-protocol v2 has a notion of "material change" (approval memo reapproval); this protocol should mirror it.

**Fix**: add a rule: "Material changes during cooling-off (new covered findings, new source kinds beyond additional evidence of the same kind, change in proposal_kind, change in covers-list) reset `eligible-on:` to the material-change commit's author-date + 7 days (or 14 for meta-corpus). Typo fixes, additional sources of kinds already cited, and clarifying prose are not material."

### I4 — FR-12 `authorized-ADR` state ambiguous for multi-ADR flows

FR-12 says `authorized-ADR` is reached when "at least one ADR draft cites the proposal slug." For a joint proposal authorizing ADRs across 3 repos, what happens when Spore's ADR drafts but IC/PM's don't? The proposal is `authorized-ADR` — but partially. No rule for tracking the authorize-set.

**Fix**: FR-12 should clarify `authorized-ADR` entry is "first authorizing ADR drafts," and `executed` is "every planned ADR has landed in its target repo per `authorized_adrs:` frontmatter list." Note that `authorized_adrs:` in FR-3 is already there — the rule just needs to say the list is populated at `authorized-ADR` entry and the proposal stays in that state until all list entries are merged.

### I5 — "Affected repo" undefined

FR-16.3 and FR-27 both reference "affected repo." The concept is intuitively clear but never defined. Under the current topology, presumably `{Spore, IC, PM} ∩ (target.repo of covered findings ∪ repos hosting authorized ADRs)`. Worth making explicit so consultation-artifact authors don't omit a repo that only appears in a downstream ADR.

**Fix**: add a short definition at the top of §5 or in a new FR between FR-4 and FR-5: "Affected repo = any repo that (a) hosts a doc named in a covered finding's target, or (b) will host an authorized ADR, or (c) contains a meta-corpus surface the proposal revises."

## Deferred (cosmetic or low-urgency; handle at v2)

### D1 — FR-5 should require column-0 anchor for AC6 grep

AC6 script uses `grep -c '^- source:'`. If a proposal nests source entries under a subheading with indentation, the `^` anchor fails. FR-5 should say explicitly that source entries start at column 0 (no leading whitespace).

### D2 — FR-6 + FR-17 could merge

Both are solo-operator rules. Combining into one rule with sub-clauses would reduce surface area.

### D3 — FR-16.3 hardcodes the three-repo list

"Normally means Spore, IC, PM" is topology-dependent. After F-037's reframing executes, the list may change. Protocol v2 can update this prose; not urgent.

### D4 — Protocol's own status transition `draft → active` not explicit

FR-32 gates first use on 6b close. But the mechanical transition from the doc's current `status: draft` frontmatter to `status: active` isn't named. Presumably operator bumps it after Round 2 + fix application. Worth an explicit line in §11.

## 13-findings coverage audit

| Finding | Joint with | proposal_kind | Blocked by | Notes |
|---|---|---|---|---|
| F-018 | F-019 | `canon-scope` + `relayer` | — | Clean |
| F-019 | F-018 | `canon-scope` + `relayer` | — | Clean |
| F-020 | — | `concept-merge` | I2 | Needs alias-vs-retire clarity |
| F-025 | F-026, F-031 | `protocol-amendment` | — | Clean (double-cooling via FR-20) |
| F-026 | F-025, F-031 | `protocol-amendment` | — | Clean |
| F-027 | — | **no clean bucket** | B1 | Creates new artifact — enum gap |
| F-028 | — | `protocol-amendment` + `concept-rename` | B2 | Double-cooling coverage gap for frozen-vocab |
| F-029 | — | `relayer` + `protocol-amendment` | B3 | Depends on F-037; no dependency mechanics |
| F-030 | — | `protocol-amendment` | — | Clean |
| F-031 | F-025, F-026 | `protocol-amendment` | — | Clean (correctly fenced from lifecycle pre-commitment) |
| F-037 | F-038, F-039 | `topology` | — | Clean (FR-21/22/23 cover) |
| F-038 | F-037, F-039 | `topology` | B3 | Depends on F-037 |
| F-039 | F-037, F-038 | `topology` | B3 | Depends on F-037 |

Five of 13 findings (F-020, F-027, F-028, F-029, F-038, F-039) have at least one blocking or important issue in their drafting path. Fixing B1–B4 + I1–I2 unblocks all 13.

## Strengths

These should survive the fix pass:

- **Companion-protocols framing** (§Companion protocols) is elegant: intake → canon-review for ordinary findings, intake → foundational-reframing → ADR for exceeds-scope. Makes the stack's shape legible.
- **FR-11 frame-change sufficiency** is the right gate even without an adjudicator named — having the evidence-bar ≠ frame-change bar distinction prevents the protocol being used as a back-door canon-review round.
- **FR-26 post-adoption challenge routing** elegantly handles the "what if a reframing is later disputed" case without a new appeal mechanic.
- **FR-31 + FR-32 pair** (constitutional-amendment guard + first-use gate) are tight and self-referential in the good way — the protocol can't silently authorize itself or be silently amended.
- **Separation of proposal status from ADR status** (FR-3, FR-12) correctly fences F-031's outcome.
- **Source-bundle formatting rule** (FR-5) matches the AC6 grep pattern, at least for proposals that anchor at column 0.

## Recommendations for Round 2 (fix pass by Codex)

Apply B1–B4 and I1–I5 as edits. D1–D4 can defer to v2.

Suggested edit sequence:
1. Expand FR-3 proposal_kind enum (B1): add `new-protocol-creation`.
2. Rewrite FR-20 to pointer-reference meta-corpus inventory (B2).
3. Add `depends-on:` to FR-3 frontmatter + new rule FR-12.5 (or similar) for dependency-gating (B3).
4. Clarify `authorized-by:` format in FR-24 (B4).
5. Augment FR-11 with consultation-artifact adjudication rule (I1).
6. Augment FR-19 with disposition column requirement (I2).
7. Add material-change-reset rule to §4 (I3).
8. Clarify `authorized-ADR` entry/exit semantics in FR-12 (I4).
9. Add affected-repo definition (I5).

Bump `version: 1` → `version: 1.1` or keep `version: 1` with changelog entry "Revised 2026-04-20 per Round 1 review." Protocol stays `status: draft` until Round 2 closes.

After fixes: Codex runs Round 2 review against v1.1.
