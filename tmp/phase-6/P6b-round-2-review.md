---
reviewer: Codex (author, Round 2)
review_date: 2026-04-20
review_round: 2 (of 2)
reviewed_doc: foundational-reframing-protocol-v1.md at v1.1
reviewed_sha: 80f4c873397a813fc997cee8fb82894786ea5385
previous_review: tmp/phase-6/P6b-round-1-review.md
---

# Phase 6b Round 2 — Codex self-review of v1.1

## Fix-application audit

- B1 — applied cleanly: FR-3 now adds `new-protocol-creation` to the allowed `proposal_kind:` set and explains when to use it for net-new governance artifacts ([protocol lines 47-64](../../docs/research/planning/foundational-reframing-protocol-v1.md)).
- B2 — applied cleanly: FR-20 now pointer-references `tmp/meta-corpus-inventory.tsv`, names the current inventory members explicitly, and states that future artifacts admitted to the inventory auto-inherit 14-day cooling-off ([protocol line 131](../../docs/research/planning/foundational-reframing-protocol-v1.md)).
- B3 — applied cleanly: FR-3 now adds `depends-on: []`; FR-12/FR-14.6 gate `eligible` on parent proposals reaching at least `authorized-ADR`; and the rule states that `depends-on:` is populated from covered findings' `dependencies:` fields after translation to proposal slugs ([protocol lines 52-64, 88-103](../../docs/research/planning/foundational-reframing-protocol-v1.md)).
- B4 — applied cleanly: FR-24 now requires `authorized-by:` to be single-line and comma-separated, gives an example, and explicitly forbids YAML list format for AC6 grep compatibility ([protocol line 141](../../docs/research/planning/foundational-reframing-protocol-v1.md)).
- I1 — applied cleanly: FR-11 now names the consultation artifact as the frame-change-sufficiency gate, and FR-16 adds `frame-change-required: yes|no` plus rationale to the consultation schema ([protocol lines 84, 111-119](../../docs/research/planning/foundational-reframing-protocol-v1.md)).
- I2 — applied cleanly: FR-19 now requires a `disposition:` column with `alias-in-v3 | historical-gloss | hard-retired`, and hard-retire choices require an explicit reference-cleanup plan ([protocol line 127](../../docs/research/planning/foundational-reframing-protocol-v1.md)).
- I3 — applied cleanly: FR-14.5 now distinguishes material versus non-material changes and resets `eligible-on:` only for material changes during cooling-off ([protocol line 101](../../docs/research/planning/foundational-reframing-protocol-v1.md)).
- I4 — applied cleanly: FR-3/FR-12 now define `authorized_adrs:` as empty until first ADR draft, make `authorized-ADR` entry happen on first authorizing ADR draft, and define `executed` as all listed ADRs having landed ([protocol lines 59-64, 92-94](../../docs/research/planning/foundational-reframing-protocol-v1.md)).
- I5 — applied cleanly: §5 now defines `affected repo` as any repo that hosts a covered target doc, will host an authorized ADR, or contains a revised meta-corpus surface ([protocol line 107](../../docs/research/planning/foundational-reframing-protocol-v1.md)).

## New findings (anything Round 1 missed)

No new blocking or important findings.

Residual note only: AC6 remains a floor-check, not a full v1.1 conformance checker. Its shell verifier still only measures `>=7` days and does not inspect `depends-on:` or `frame-change-required:`. That does not make v1.1 incompatible with AC6, but it does mean protocol compliance still depends on operator discipline and review, not AC6 alone.

## AC6 compatibility walkthrough

I tested the schema mentally against a hypothetical meta-corpus proposal for F-028 using the repo's current placeholder-slug convention:

- Proposal path: `docs/research/planning/reframing/F-028.md`
- Frontmatter: `covers: [F-028]`, `depends-on: []`, `proposal_kind: protocol-amendment`, `eligible-on:` set 14 days after the proposal's first commit because FR-20 applies.
- Source bundle: at least 5 top-level `- source:` entries, with at least 2 publicly verifiable entries.
- Consultation artifact: `tmp/cross-repo-consultation-F-028.md`, including `frame-change-required: yes` plus rationale and sign-off.
- ADR lineage: the first implementing ADR lands after day 14 with single-line frontmatter such as `authorized-by: F-028`.

Walking AC6:

1. `grep -c '^- source:' "$p"` returns at least 5 because FR-5 still requires column-0 `- source:` entries.
2. `git log --format=%ct -- "$p" | tail -1` finds the proposal's first commit date.
3. `grep -l "authorized-by:.*$PROPOSAL_SLUG"` finds the ADR because FR-24 now fixes `authorized-by:` to single-line comma-separated syntax.
4. The proposal-to-ADR date difference is `>=14`, so AC6's `>=7` check passes.
5. `test -f ~/projects/spore/tmp/cross-repo-consultation-$PROPOSAL_SLUG.md` passes because FR-15/FR-16 still require the consultation artifact at that path.

Result: yes, v1.1 produces proposals that AC6 can verify. The protocol is stricter than AC6 for meta-corpus cooling-off and dependency gating, but a compliant v1.1 proposal still passes AC6 once the stricter protocol requirements are satisfied.

## Ratification recommendation

Ready for status: active
