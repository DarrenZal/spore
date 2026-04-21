# Phase 4 Pass P4.3 — Meta-corpus diagnostic

**Pass:** P4.3
**Agent:** Codex
**Date:** 2026-04-19
**Scope:** 9 meta-corpus artifacts from `tmp/meta-corpus-inventory.tsv`: protocol pair, frozen-concepts file, validator, moratorium mechanics, bridge-note format convention, and learning-field structure.
**Inventory anchors:** `/Users/darrenzal/projects/spore/tmp/meta-corpus-inventory.tsv`; `/Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md`; `/Users/darrenzal/projects/spore/docs/research/planning/learning-field-intake-protocol.md`; `/Users/darrenzal/projects/spore/docs/research/concepts-p2p-wiki.yaml`; `/Users/darrenzal/projects/spore/scripts/validate_spec_dag.py`; `/Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md`; `/Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md`; `/Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md`

## Findings

```yaml
- finding-id: P4-3-001
  type: missing
  severity: S2
  priority: blocking
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: spore/docs/research/planning/canon-review-protocol.md
    concept: N/A
    line_range: 16-21
  claim: |
    The canon-review protocol is self-harvested and self-amended by the same round-execution machinery it governs, but it carries no separate constitutional-amendment rule, cooling-off period, or heightened threshold for editing itself. That leaves the protocol-about-protocols exposed to ordinary operational drift: the same process that lands round findings can also rewrite the rule set that authorizes those findings. Governance-process research treats the constitutional/operational split as the main defense against this exact failure mode, and the capstone already identifies the missing guard-text as a Tier 2 meta-corpus issue.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:16-21
      excerpt: "v2 (2026-04-18) appended after v1 with 29 rules harvested from running v1."
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:40-42
      excerpt: "\"normalization of deviance\" ... The constitutional/operational split is the tradition's primary defense"
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:319-320
      excerpt: "Spore has no equivalent guard-text. ... add a constitutional-amendment-threshold clause"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: none

- finding-id: P4-3-002
  type: missing
  severity: S2
  priority: important
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: spore/docs/research/planning/canon-review-protocol.md
    concept: N/A
    line_range: 137-175
  claim: |
    The canon-review protocol defines dispositions (`edit`, `hold-as-tension`, `reject`) and held-tension overlap checks, but it does not define a post-adoption dissent or appeal path if an ADR is challenged after landing. That leaves Spore with a rough-consensus-like decision surface and no named escalation authority, veto rule, or review-of-the-review mechanism once conflict moves beyond ordinary evidence tallying. The gap is explicitly flagged in the capstone and is structurally load-bearing in both standards-process and structured-disagreement research.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:170-173
      excerpt: "First-class dispositions: `edit` ... `hold-as-tension` ... `reject`"
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:24-26
      excerpt: "The W3C handles dissent through Formal Objection ... The IETF has ... an appeals ladder"
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-structured-disagreement.md:34-38
      excerpt: "\"Rebuttal / appeal\" ... Load-bearing and structurally under-theorized."
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:321-321
      excerpt: "But no documented escalation path exists if an ADR is disputed post-adoption"
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: none

- finding-id: P4-3-003
  type: missing
  severity: S2
  priority: important
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: spore/docs/research/planning/corpus-foundational-review-v1-plan.md
    concept: moratorium-mechanics
    line_range: 37-58
  claim: |
    Moratorium mechanics are carrying governance weight but still exist only as plan-embedded rules rather than as a stable formal artifact. The inventory flags the moratorium row as `has-formal-doc=FALSE`, the plan snapshot contains the operative suspension/exception/audit rules, and the methodology explicitly treats the plan snapshot plus phase addenda as the moratorium surface. That means a cross-phase governance constraint has no standalone doc identity, no dedicated amendment path, and no citation target narrower than the full review plan.
  evidence:
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/meta-corpus-inventory.tsv:6-6
      excerpt: "moratorium-mechanics ... moratorium FALSE 2026-04-19"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-v1-plan.md:37-58
      excerpt: "Canon edits on `main` branches ... are suspended during Phases 2–5 ... No amendments to this rule except safety-critical exceptions"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:107-113
      excerpt: "The plan snapshot and phase addenda as the current moratorium and branch-discipline surface."
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-governance-process.md:20-20
      excerpt: "All traditions require a written artifact authored by a champion."
  proposed-resolution-track: prior-revision-proposal
  prior-collision-check: none
  notes: none

- finding-id: P4-3-004
  type: wrong-level
  severity: S3
  priority: important
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: spore/docs/research/concepts-p2p-wiki.yaml
    concept: N/A
    line_range: 1-10
  claim: |
    The frozen vocabulary artifact is still declared as a P2P wiki intake bridge-note vocabulary, but Phase 4 and canon-review v2 are using it as cross-project governance infrastructure that determines which ADRs, canon edits, and shared framing notes are even legal. The file is therefore operating one layer above its self-description: an intake-scoped artifact has become a meta-corpus constraint surface without a correspondingly scoped name, purpose statement, or companion governance doc. This is role-definition drift, not a claim that the frozen slugs themselves are wrong.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/concepts-p2p-wiki.yaml:1-10
      excerpt: "\"purpose: Canonical concept slugs for P2P Foundation wiki intake bridge notes.\""
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:246-250
      excerpt: "All `concepts:` entries in ADRs, canon edits, and shared framing notes must be keys present in the frozen concepts-p2p-wiki.yaml v2"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:107-110
      excerpt: "`docs/research/concepts-p2p-wiki.yaml` as frozen-concepts infrastructure."
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:178-178
      excerpt: "\"a layering is a hypothesis about what will vary independently\""
  proposed-resolution-track: canon-review-v2
  prior-collision-check: none
  notes: May overlap P4.2 if consolidator merges vocabulary-role drift with cross-doc concept-governance findings.

- finding-id: P4-3-005
  type: misplaced
  severity: S2
  priority: important
  corpus-location: meta-corpus
  target:
    repo: intelligence-commons
    doc: intelligence-commons/docs/patterns/project-learning-membrane.md
    concept: learning-field
    line_range: 43-103
  claim: |
    The learning-field structure is in scope as a meta-corpus dependency for Spore's review machinery, but its defining artifact currently lives as an IC pattern doc rather than as a Spore-hosted protocol or other formal governance artifact alongside the protocol pair that claims to govern intake/canon flow across Spore, IC, and PM. The layer exists and is load-bearing, but it is misplaced relative to the governance boundary it serves: a cross-project control surface is anchored in a project-local pattern document.
  evidence:
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/meta-corpus-inventory.tsv:8-8
      excerpt: "learning-field-structure intelligence-commons/docs/patterns/project-learning-membrane.md"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:107-114
      excerpt: "Learning-field structure as currently documented in IC's `project-learning-membrane` pattern"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/learning-field-intake-protocol.md:16-21
      excerpt: "This protocol is the first half of a two-protocol pair ... across Spore, IC, PM"
    - kind: source-doc
      ref: /Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:43-79
      excerpt: "Separate the learning system into four surfaces, connected by a governed membrane."
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-canonical-layering.md:178-178
      excerpt: "\"a layering is a hypothesis about what will vary independently\""
  proposed-resolution-track: prior-revision-proposal
  prior-collision-check: none
  notes: Likely overlaps P4.6 on cross-repo governance placement and host-boundary topology.

- finding-id: P4-3-006
  type: missing
  severity: S3
  priority: important
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: N/A
    concept: N/A
    line_range: N/A
  claim: |
    The operative meta-corpus protocols and bridge-note format describe purpose, flow, and schema, but they do not explicitly declare intended audience or prerequisites even though the methodology assumes a narrow audience that can inspect all three repos and already understands canon-review conventions. Audience-scoping research treats audience/scope/purpose blocks as standard document hygiene, and the capstone already calls this out as a cheap, high-leverage repair. As written, the process docs function like insider-only protocols while presenting themselves as general reusable procedures.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:10-12
      excerpt: "This protocol governs how we edit canon ... It evolves after each canon-review round."
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/learning-field-intake-protocol.md:72-89
      excerpt: "Every bridge note follows the same schema regardless of source corpus:"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/corpus-foundational-review-methodology.md:118-120
      excerpt: "The current audience is `solo-operator -> active contributors across Spore / Intelligence Commons / Poietic Match`."
    - kind: research-synthesis
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-audience-scoping.md:113-116
      excerpt: "\"describes the intended audience, scope, and purpose\""
    - kind: capstone-section
      ref: /Users/darrenzal/projects/spore/docs/research/corpus-review/research-capstone.md:323-323
      excerpt: "\"Audience-declaration block on README and ADR/bridge-note templates.\""
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Likely overlaps P4.4 if the bridge-note sample pass flags template-level readability or onboarding drift.

- finding-id: P4-3-007
  type: contradictory
  severity: S3
  priority: deferred
  corpus-location: meta-corpus
  target:
    repo: spore
    doc: spore/scripts/validate_spec_dag.py
    concept: N/A
    line_range: 110-110,169-172
  claim: |
    The ADR status vocabulary is internally contradictory across the meta-corpus. The canon-review protocol's ADR-lite schema uses lifecycle names like `proposed`, the validator only accepts `draft|active|deprecated|superseded`, and live Spore ADRs carry inline mapping comments to explain the translation. The current system works only because the operator knows to bridge two vocabularies by hand; the contradiction remains encoded in the protocol/tooling boundary.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md:83-89
      excerpt: "status: proposed   # lifecycle below"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/scripts/validate_spec_dag.py:110-110
      excerpt: "ALLOWED_STATUSES = {\"draft\", \"active\", \"deprecated\", \"superseded\"}"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/canon-decisions/0001-pluriversal-incommensurability.md:5-9
      excerpt: "\"no \\\"proposed\\\"\" ... \"Mapping protocol §3 lifecycle state \\\"proposed\\\"\" ... status: active"
  proposed-resolution-track: prior-revision-proposal
  prior-collision-check: none
  notes: Protocol v2 already defers the clean fix to v3; kept `deferred` here to match that explicit deferral.
```

## Pass summary

This pass produced 7 findings: 4 S2 and 3 S3. The dominant pattern is governance-layer under-formalization: the review machinery exists and is actively used, but several of its load-bearing rules still live at the wrong layer, in the wrong host artifact, or without the constitutional safeguards that comparable governance traditions treat as mandatory.

The single blocking issue is the canon-review protocol's self-amendability without a distinct amendment threshold. The other findings cluster around implicitness and boundary drift: plan-embedded moratorium rules, an intake-scoped frozen-vocab artifact carrying cross-project governance load, an IC-hosted learning-field structure serving Spore's meta-corpus, missing audience declaration, and a still-unreconciled validator/protocol status mismatch.

## Pass-level caveats

I treated inventory rows as admissible artifact-level evidence per the adapted meta-corpus model and required at least one research-synthesis citation for every S2 finding.

I did not elevate the intake protocol's source-provenance gap (`[source: ...]` parsing) or the validator's known script/race-condition limitations into standalone findings here because canon-review protocol v2 already records them as explicit deferred/tooling issues. If P4.4 surfaces concrete breakage from those gaps, the consolidator may choose to promote them.

I did not make a dead-weight finding on any protocol artifact. The v2 harvest, existing ADR corpus, and live review plan are sufficient evidence that these meta-corpus artifacts are in active use rather than inert documentation.
