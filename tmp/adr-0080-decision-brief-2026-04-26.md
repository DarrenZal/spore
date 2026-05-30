# ADR-0080 Decision Brief — F2 translation-mapping-governance defer-with-triggers

**Date**: 2026-04-26
**Author**: Child agent (orchestrator-spawned)
**Status**: Pre-Step-3 decision-brief; operator pre-pinned axes 2026-04-26 morning.
**Inheriting from**: `tmp/adr-tier-c-readiness-audit-2026-04-25.md` §4 (operator's lean DEFER); `tmp/handoff-prompt-2026-04-26-session-4-tier-c.md` (full handoff context); `tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md` Option D3 TIERED ratification (F2 deferred-pending operational-demand triggers).

---

## 1. Disposition (operator pre-pinned)

**DECLINE-with-triggers** — ADR-0054 / ADR-0069 analog.

NOT a new foundation doc; NOT a reclassification (distinct from ADR-0066 K3a); NOT a yaml change.

## 2. Substrate evidence (Step 0.5 audit verified)

### Already-existing canon-spec-prose

- `docs/research/concepts-p2p-wiki.yaml` L1-L12 header — rich governance-prose ALREADY encoding canon-doctrine F2 would articulate:
  - `# status: frozen` (L1)
  - `# version: v19` (L2; bumped today via F1+F4+F6+F5+F3+F7+F9 across v15→v19)
  - `# frozen_at: 2026-04-25` (L3)
  - `# owner: Darren Zal` (L4)
  - "Agents reading this file MUST NOT mint concept slugs outside this vocabulary during Tier 1b/2/3 of the wiki-intake plan." (L6-7)
  - "Pass 2 fan-out (Phase B) gate: `head -1 concepts-p2p-wiki.yaml` must match `# status: frozen` before fan-out." (L7-8)
  - "Extensions to this vocab require a separate commit with operator approval and a version bump — do NOT silently append." (L9-10)
  - Per-version operator-authorization notes (v2 / v3 / v4 / v7 / v8 / v15 / v16 / v17 / v18 / v19)
  - Reference to memory file `feedback_foundation_repair_protocol_flexibility.md`
- 72 total slugs at v19 (was 70 at v18 entry-of-day; v19 reflects F1/F4/F6/F5/F3 admissions across 2026-04-25 + F9 admission 2026-04-26 morning)
- Governance machinery operational and stable across 4 v-bumps in 2 days; zero drift incidents

### Canon-body acknowledgments

- **ADR-0034 interop-principles-mechanisms-split** L45 names "explicit translation mappings" as Spore's implementation-mechanism (not principle)
- **`docs/project-vision.md:283`** mentions "Explicit translation mappings between local ontologies and shared concepts" in Common Core, Local Variation section

### Wave-N H2 decline (CRITICAL)

- ic:ADR-0019 + ic:ADR-0020 + pm:ADR-0015 + pm:ADR-0017 all H2-decline concepts-registry
- IC has no `docs/research/concepts-*.yaml` (verified empty)
- PM has no `docs/research/concepts-*.yaml` (verified empty)
- **Cross-repo translation-mapping pressure has NOT YET fired** because there's nothing to translate-FROM at sibling-repo concepts-registry layer

## 3. Three re-opening triggers (verbatim from audit §4)

- **(a)** IC or PM admits its own concepts-registry → cross-repo translation pressure fires
- **(b)** Solo-operator yaml-governance machinery breaks down (multi-operator editing; conflicts; mis-attribution)
- **(c)** Cross-repo audit shows translation-drift (slugs in IC/PM bridge notes don't resolve to Spore concepts-yaml entries)

## 4. Method-precedent named (operator-pre-pinned)

**"Sufficient-spec-prose-as-defer-rationale"** — when an existing artifact (here: yaml header governance-prose at `docs/research/concepts-p2p-wiki.yaml` L1-L12) operationally encodes the canon-doctrine that a deficit-doc would articulate, defer-with-triggers is the honest call rather than authoring a parallel foundation doc that would just paraphrase.

Reusable for any future deficit where in-place spec-prose suffices.

**Distinct from ADR-0066 K3a reclassification** — ADR-0066 moved `project-briefing-pattern.md → project-briefing-spec.md` (changed doc classification). F2 is decline-with-deferral that keeps the existing prose-spec authoritative as-is, doesn't reclassify, and doesn't author a parallel doc.

## 5. Axes (pre-pinned)

| Axis | Disposition | Notes |
|------|-------------|-------|
| Disposition | DECLINE-with-triggers | ADR-0054 / ADR-0069 analog |
| Allowlist | 1 file ONLY | NEW ADR; NO yaml; NO foundation-doc; NO canon-review-protocol §1; NO docs/README |
| Triggers | 3 verbatim | per audit §4 |
| Method-precedent | "Sufficient-spec-prose-as-defer-rationale" | first operational use |
| DH-PM-1 hard-pause | NOT-APPLICABLE | concepts-registry governance is not commitment/accounting layer |
| Initial status | draft | flip to active at activation (avoid F5 anomaly) |
| Push | Step 6 in-child | do NOT hold |

## 6. ADR companion-list (frontmatter)

- `0034` — interop-principles-mechanisms-split (translation-mapping mechanism citation)
- `0054` — rewilding-thesis-decline-with-triggers (decline-with-triggers shape precedent)
- `0066` — project-briefing-pattern audit-outlier (K3a distinction; reclassification ≠ defer)
- `0069` — four-enabling-conditions decline-with-triggers (second precedent)

## 7. Predicted session-atomic

~3 min in-window per operator pre-pin; mechanical decline-shape; substrate well-articulated in audit §4.

## 8. Plan-file fallback

Per F5/F6/F3 precedent: if `~/.claude/plans/` write denied, embed plan content here in tmp/ decision-brief. Status: ATTEMPTING ~/.claude/plans/ first; falling back to tmp/ if denied.

---

**End decision-brief.**
