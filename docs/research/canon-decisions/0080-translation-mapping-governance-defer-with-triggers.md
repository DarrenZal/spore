---
doc_id: spore.canon-decision.translation-mapping-governance-defer-with-triggers
doc_kind: decision-record
status: active
adr_number: "0080"
opened-on: 2026-04-26
closed-on: 2026-04-26
decision: decline
r_claim_source:
  - spore.review.canon-first-principles-audit-v2-2026-04-22:6.4-item-2
r_claim_statement: |
  Audit-v2 §6.4 item 2 (F2 translation-mapping-governance) flagged a candidate
  foundation-layer doc articulating governance of translation between local
  ontologies and Spore's shared concept vocabulary, with attention to who can
  mint slugs, how versioning works, and how translation-drift between repos is
  detected. Phase 4 scoping (`tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md`
  Tier C, Option D3 TIERED) deferred F2 pending operational-demand triggers. Tier
  C readiness audit (`tmp/adr-tier-c-readiness-audit-2026-04-25.md` §4) verified
  three substrate findings supporting decline-with-deferral: (i) the canon-doctrine
  F2 would articulate is ALREADY operationally encoded in the yaml header
  governance-prose at `docs/research/concepts-p2p-wiki.yaml` L1-L12 (frozen-status
  declaration, slug-mint prohibition for agents during fan-out, extension-protocol
  requiring operator-approval + version-bump + per-version authorization-notes,
  reference to `feedback_foundation_repair_protocol_flexibility.md` memory),
  with that machinery operational and stable across 4 version-bumps in 2 days
  (v15 → v19, 72 slugs); (ii) ADR-0034 (`interop-principles-mechanisms-split`,
  2026-04-22) at L45 already names "explicit translation mappings" as Spore's
  implementation-mechanism (not principle), and `docs/project-vision.md:283`
  mentions translation-mappings in Common Core, Local Variation; (iii) IC and PM
  both H2-decline concepts-registry per ic:ADR-0019 + ic:ADR-0020 + pm:ADR-0015
  + pm:ADR-0017, and a fresh check confirmed neither repo carries a sibling
  concepts-yaml — so cross-repo translation-mapping pressure has NOT YET fired
  because there is nothing to translate-FROM at the sibling-repo concepts-registry
  layer. Per operator pre-pinning 2026-04-26 morning, ADR-0080 records DECLINE-
  with-triggers (ADR-0054 / ADR-0069 analog), preserves the existing yaml
  header-prose as authoritative governance-spec without reclassification (distinct
  from ADR-0066 K3a reclassification shape), records three operationally-falsifiable
  re-opening triggers, and surfaces the new "Sufficient-spec-prose-as-defer-
  rationale" method-precedent for first operational use.
supersedes: []
companion-ADRs:
  - 0034  # Interop principles-mechanisms split (names translation-mappings as mechanism-layer)
  - 0054  # Rewilding-thesis decline-with-triggers (shape-match reference)
  - 0066  # Project-briefing-pattern K3a reclassification (distinguished-from shape)
  - 0069  # Four-enabling-conditions decline-with-triggers (second shape-match reference)
concepts: []
phase: phase-4-tier-c
---

# ADR-0080 — Translation-Mapping-Governance: Decline-with-Triggers (Phase 4 Tier C — F2 Defer)

## Context

**Phase 4 deficit being addressed**: F2 translation-mapping-governance — a candidate foundation-layer doc articulating governance of translation between local ontologies and Spore's shared concept vocabulary (who can mint slugs, how versioning works, how translation-drift between repos is detected, what gates extension-by-fan-out vs extension-by-deliberation).

**Phase 4 scoping disposition** (per `tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md`): Option D3 TIERED ratification placed F2 in **Tier C — deferred-pending operational-demand triggers**. Per the same scoping plan, "admit when operational-demand fires" is the canon-discipline; this matches parsimony-as-earning-test-outcome (ADR-0048 precedent) at Phase 4 layer.

**Tier C readiness audit** (per `tmp/adr-tier-c-readiness-audit-2026-04-25.md` §4) found:

- **Substrate already-articulated**: `docs/research/concepts-p2p-wiki.yaml` L1-L12 carries rich governance-prose ALREADY operationally encoding the canon-doctrine F2 would articulate.
- **Operational-demand WEAK / NOT-FIRED**: yaml-governance machinery is solo-operator at present; no multi-operator editing pressure; no cross-repo translation-drift surfaced.
- **Cross-repo H2 decline**: per ic:ADR-0019 + ic:ADR-0020 + pm:ADR-0015 + pm:ADR-0017, IC and PM both H2-decline their own concepts-registries. Neither sibling repo carries a sibling concepts-yaml at all (verified directly: no `docs/research/concepts-*.yaml` in either). Cross-repo translation pressure cannot fire when there is nothing to translate-FROM at the sibling-repo concepts-registry layer.
- **Audit lean**: DEFER with re-opening triggers, NOT reclassify-as-spec, NOT admit-as-foundation-doc.

**Operator pre-pinning** (2026-04-26 morning): DECLINE-with-triggers (ADR-0054 / ADR-0069 analog); 1-file allowlist (NEW ADR only); NO yaml v-bump; NO foundation-doc; NO canon-review-protocol §1 update; NO docs/README registration.

**DH-PM-1 hard-pause check**: NOT-APPLICABLE for F2. F2 is concepts-registry governance — operational-discipline at vocabulary layer. PM accounting-dependence held-tension is a coordination-grammar / commitment-pool layer concern. The two concerns do not overlap. No hard-pause check fires.

## Decision

**DECLINE F2 admission as a foundation doc under current evidence.**

- **No new foundation doc** at `docs/foundations/translation-mapping-governance.md`.
- **No reclassify-as-spec** at `docs/governance/concepts-registry-governance-spec.md` — distinct from ADR-0066 K3a reclassification (which moved a wrong-classification doc to its correct doc_kind). F2 has no parallel pre-existing wrong-classification doc to reclassify; the substrate is yaml-header-prose ALREADY at the correct artifact location.
- **Existing yaml header-prose at `docs/research/concepts-p2p-wiki.yaml` L1-L12 is preserved as authoritative governance-spec** without any change. It continues to govern slug-mint policy, extension-protocol, and version-bump discipline.
- **Three operationally-falsifiable re-opening triggers** (§Triggers below) capture the conditions under which F2 admission becomes warranted.

This matches the ADR-0054 / ADR-0069 decline-with-triggers shape: canon-admission declined under current evidence; parking-posture formalized at ADR layer with explicit re-opening conditions so future cycles evaluate maturation against operationally-named criteria rather than against informal handoff prose.

## Triggers (operationally-falsifiable re-opening conditions)

If any of the following fires after this ADR's `closed-on` date, F2 admission becomes warranted and a fresh ADR (ADR-0XXX-translation-mapping-governance-foundation-doc-promotion or analog) opens. Triggers are evaluated honestly against the named-condition; informal pressure does not fire a trigger.

- **(a) Cross-repo concepts-registry admission** — IC or PM (or any future Spore-aligned repo joining the federation) admits its own concepts-registry with sibling concepts-yaml. At that point, cross-repo translation-mapping pressure fires: which slugs in repo-X correspond to which slugs in repo-Y; who arbitrates conflicts; how versioning aligns. Header-prose in a single-repo concepts-yaml does not address inter-repo translation governance.
- **(b) Solo-operator governance breakdown** — the yaml-governance machinery breaks down under multi-operator editing pressure: conflicts in concurrent extension; mis-attribution of authorization; ambiguity over who owns the frozen-status gate. Currently solo-operator with stable machinery; if a second operator gains routine extension-authority, foundation-layer doctrine becomes warranted.
- **(c) Cross-repo translation-drift detected** — a cross-repo audit shows slugs in IC or PM bridge notes (or other Spore-aligned material) failing to resolve cleanly to Spore concepts-yaml entries. Drift evidence — not aspirational symmetry — fires this trigger.

## Consequences

### Canon state delta

- **Foundation docs**: 13 (unchanged — F1 / F4 / F6 / F5 / F3 / F7 / F9 + 6 prior).
- **Concepts yaml**: v19 (unchanged — F2 admits no slugs).
- **Derived glossary slugs**: 16 (unchanged).
- **Canon-rebuild arc**: 31 → **32 canon-decisions** (0044–0058, 0061–0080, 0059a).
- **Phase 4 progress**: 8/9 deficits closed (Tier A F1+F4 + Tier B F6+F5+F3 + Tier C F7+F9+F2-deferred); F8 sole remaining Phase 4 deficit (deferred-pending cluster-counting verdict per Tier C readiness audit §3).
- **Primitives / doctrines / modes / properties / patterns / canon-object-class**: PRESERVED.

### Cross-repo state

- **IC**: HEAD `cef35fe` unchanged; H2 concepts-registry decline preserved.
- **PM**: HEAD `349e3ac` unchanged; H2 concepts-registry decline preserved.
- **koi-processor**: HEAD `22463cf4` unchanged.
- **darren-workflow**: HEAD `3cc190f` unchanged.

### Method-precedent (NEW)

**"Sufficient-spec-prose-as-defer-rationale"** — when an existing artifact (here: yaml header governance-prose at `docs/research/concepts-p2p-wiki.yaml` L1-L12) operationally encodes the canon-doctrine that a deficit-doc would articulate, defer-with-triggers is the honest call rather than authoring a parallel foundation doc that would merely paraphrase the existing spec-prose.

The discipline is: **at admission-time, audit whether the doctrine the candidate doc would articulate is already encoded somewhere as authoritative spec-prose. If yes, the parallel-foundation-doc would create maintenance-overhead without solving an active problem; defer-with-triggers preserves the existing spec-prose as authoritative until operational pressure surfaces that the prose-form is insufficient.**

This is reusable for any future deficit where in-place spec-prose suffices. Examples of where this might recur: governance-prose embedded in protocol files; doctrine encoded in skill SKILL.md frontmatter; canon-bearing rules encoded in README.md headers.

**Distinct from ADR-0066 K3a reclassification** — that pattern moves a wrong-classification doc (e.g., `project-briefing-pattern.md` → `project-briefing-spec.md`) to its correct doc_kind. F2 has no parallel pre-existing doc carrying the doctrine at a wrong location; the substrate is yaml-header-prose at the *correct* artifact location (the yaml itself, governing the yaml itself). F2 is NOT reclassification; F2 is "the spec-prose is already where it should be, in the form it should be in, and operationally functional."

**Distinct from ADR-0054 / ADR-0069 declines** — those declined under cluster-counting / honest-rigor verdicts (insufficient cross-tradition evidence; Johar-primary-inspiration not auto-escalating). F2 declines on a different ground: substrate sufficiency at existing location. The shape-template (decline-with-triggers + 3-trigger structure + ADR-layer formalization) inherits from ADR-0054 / ADR-0069; the *rationale* is novel.

### Maintenance posture

- The yaml-header-prose continues to govern. Future v-bumps follow the existing per-version operator-authorization protocol (v2 / v3 / v4 / v7 / v8 / v15 / v16 / v17 / v18 / v19 lineage).
- This ADR is the canonical pointer for future operators or readers asking "where is the translation-mapping-governance doctrine?" — the answer is "it is in the yaml header at `docs/research/concepts-p2p-wiki.yaml` L1-L12, and ADR-0080 documents the deliberate decision to keep it there rather than fork it into a separate foundation doc."
- If any of the three triggers fires, F2 admission opens a fresh ADR; this ADR is preserved as historical record of the pre-trigger disposition.

### Forward references

- **F8 external-validation-loop** is the sole remaining Phase 4 deficit (Tier C, deferred-pending cluster-counting per Tier C readiness audit §3). F8 is gated by honest-rigor cluster-counting at Step 0.5 (need ≥1-2 non-Johar full clusters to surface, or land as ADR-0069-style decline-with-triggers).
- **Phase 5** (section-level status labels) is the next major arc after Phase 4 closes; tag-agnostic per Q6 ratification across all Phase 4 admissions including this F2 deferral.
- **Cross-repo IC + PM Phase 2c alignment** for Tier C admissions (analogous to ic:ADR-0020 + pm:ADR-0017 from 2026-04-25 evening Wave-N alignment) — F2 deferral does not require cross-repo alignment ADRs since no canon-body change occurred; future operators may decide otherwise if F8 admission triggers Wave-N+ and bundles F2-deferral acknowledgment.

## Audit trail

- **Tier C readiness audit**: `tmp/adr-tier-c-readiness-audit-2026-04-25.md` §4
- **Phase 4 scoping plan**: `tmp/phase-4-foundation-docs-scoping-plan-2026-04-25.md`
- **Decision-brief**: `tmp/adr-0080-decision-brief-2026-04-26.md`
- **Close-out manifest**: `tmp/adr-0080-close-out-manifest.txt` (post-activation)
