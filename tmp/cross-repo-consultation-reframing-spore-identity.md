# Cross-repo consultation — reframing-spore-identity

*FR-15 / FR-16 consultation artifact for `spore.foundational-reframing.reframing-spore-identity`. Per FR-17 (single-operator caveat): under current solo-operator conditions this is an **externalized self-review surface**, not proof of independent consensus. The Codex x-high adversarial review (2026-06-02; transcript at `tmp/codex-review-spore-identity.out`, prompt at `tmp/codex-review-prompt-spore-identity.md`) served as an additional externalized adversarial surface on the proposal text.*

- **Proposal slug:** reframing-spore-identity
- **Covered findings:** none (a "later finding" per FR-1 — sourced from the 2026-06-02 repo-constellation strategy work, not a Phase-5 finding)
- **Date opened:** 2026-06-02
- **Last updated:** 2026-06-02

## Consulted repos

Affected repo (hosts the identity surfaces): **Spore**. Downstream-aligned canons that reference Spore's upstream identity: **Intelligence Commons**, **Poietic Match**. Peer-instance-family canons that cite Spore as upstream: **bioregional-coordination (bregion)**, **BioregionalKnowledgeCommoning (BKC)**, **bioregional-economics**.

### Spore — stance: support
- Consulted: operator (Spore canon maintainer).
- Rationale: the reframe sharpens the constitutional identity toward the canon's own stated purpose (`project-vision.md:132` *"The grammar's purpose is collective agency"*) and its own scope-discipline (`project-vision.md:128` *"a scoped grammar, not a universal account"*; `:130` *"each scale Spore has reached … a research question, not a demonstrated property"*). It promotes into the identity line what `README.md:13` already says (*"a shared coordination grammar that can land across projects"*). Math-quiet (no sheaf/topology vocabulary in the line).
- Execution conditions: math-quiet identity line; preserve *"plural, sovereign"* + the Spore / Agent-Commons distinction; no achieved/universal-coherence claim (Constraint 6); hold the Spore validator baseline (9 errors / 267 warnings) EXACT; three edit sites (README:7 tagline, project-vision:10 identity sentence, README:13 light harmonization).

### Intelligence Commons — stance: can-live-with
- Consulted: operator (IC canon maintainer).
- Rationale: IC is downstream-aligned and references upstream Spore. The reframe is continuity-preserving (still *"coordination grammar,"* still *"plural, sovereign,"* Agent-Commons distinction intact), so it does not disturb IC's alignment. Per the upstream/downstream propagation discipline, identity-phrasing changes do NOT trigger a wave-N+1 alignment ADR (alignment fires on foundation/canon-doctrine changes, not identity wording).
- Execution conditions: audit at ADR-time whether any IC doc quotes Spore's old lead (*"infrastructure for collective agency — a common grammar…"*) verbatim; if so, a light refresh — not an alignment ADR.

### Poietic Match — stance: can-live-with
- Consulted: operator (PM canon maintainer).
- Rationale: same as IC — downstream-aligned; continuity-preserving; no alignment ADR triggered.
- Execution conditions: audit for verbatim quotes of Spore's old lead → light refresh if any.

### bregion / BKC / bioregional-economics — stance: support (peer-instance-family)
- Consulted: operator (peer-canon maintainer).
- Rationale: these peers cite Spore as upstream; the *"coordination grammar"* lead reinforces the upstream-grammar framing they already reference (e.g. `bioregional-economics.positioning.coherence-as-allocation-logic` relates_to Spore positioning). Bridge-note level; no alignment ADR (peer-instance-family propagates via bridge notes, not wave-N+1).
- Execution conditions: none binding; optional bridge-note awareness if a peer later quotes Spore's identity line.

## Open objections

None. The Codex x-high adversarial review surfaced 1 blocker + 5 should-fix; all were dispositioned and applied 2026-06-02 (see the proposal's "Resolved during drafting" note). No unresolved objection remains.

## frame-change-required: yes

Rationale: per FR-2, editing the constitutional *"Spore is…"* identity lead alters the layer's identity (Spore's self-conception as the upstream coordination grammar), which routes to foundational-reframing rather than a doc-local canon-review ADR. This is honestly the *narrowest* canon-scope sub-case — a self-description sharpening, not a dissolve / rename / re-layer / re-topology. **Off-ramp preserved:** if during cooling-off the change is judged responsibly handleable as a doc-local canon-review wording edit that leaves Spore's identity/role intact, this proposal closes and the work routes down to canon-review (per the proposal's Execution gate).

## Sign-off

- **ADR drafting may begin:** on or after **2026-06-09** (FR-13 ordinary 7-day cooling-off; `eligible-on`). Not before. `project-vision.md` is not an FR-20 meta-corpus surface, so the 14-day double-cooling does not apply.
- **frame-change-required:** yes (above).
- **Open objections:** none.
- Solo-operator self-review per FR-17; Codex x-high adversarial review applied as an externalized adversarial surface.
