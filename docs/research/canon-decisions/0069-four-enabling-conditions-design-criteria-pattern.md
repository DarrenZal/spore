---
doc_id: spore.canon-decision.four-enabling-conditions-design-criteria-pattern
doc_kind: decision-record
status: active
adr_number: "0069"
date: 2026-04-24
opened-on: 2026-04-24
closed-on: 2026-04-24
decision: decline
depends_on:
  - spore.canon-decision.power-expressive-constructed-modes
  - spore.canon-decision.co-presence-field-condition-disposition
  - spore.canon-decision.pattern-library-infrastructure-spec
  - spore.project-vision
  - spore.governance-artifacts
r_claim_source:
  - spore.canon-decision.power-expressive-constructed-modes:four-enabling-conditions-parking
  - spore.connection.johar-power-cannot-be-allocated:four-enabling-conditions-cluster
  - spore.project-vision:constructed-power-four-conditions
r_claim_statement: |
  ADR-0048 (`power-expressive-constructed-modes`, 2026-04-22) parked Johar's
  four enabling conditions for constructed power — `space / mission / resources /
  knowledge` — as a future pattern-library candidate and described them as design
  criteria for field conditions rather than as primitives, doctrines, or modes.
  ADR-0065 (`pattern-library-infrastructure-spec`, 2026-04-24) later made a
  design-criteria-pattern admission cycle tractable under the M4 sub-class
  framework and explicitly treated Johar-4 as the reference exemplar for the
  sub-class's α floor. Step 0.5 audit for ADR-0069 confirmed that α passes cleanly:
  the four criteria are independently articulable, form a coherent cluster around
  enabling conditions for constructed power, and lose operational force if any one
  criterion is dropped.

  The load-bearing question is β under honest-rigor discipline. The audit surfaced
  a real Reading A vs Reading B tension between ADR-0064 and ADR-0065. Reading B
  remains canonically intelligible: Johar is a genuine multi-work locus about
  condition-design, and `johar-power-cannot-be-allocated.md` explicitly articulates
  the four-condition cluster and turns it into design questions. Reading A is the
  stricter heavier-admission posture ratified here: Johar is primary-inspiration,
  so Johar-native cluster escalation does not count toward β's tradition-breadth
  threshold without independent corroboration. Under that reading, β fails on two
  fronts. First, the cross-tradition audit surfaced no non-Johar full-cluster
  analogue; Ostrom and Alexander are only partial analogs, while Meadows, Freire,
  Boyte, Ganz, and Chambers do not provide relevant in-repo support. Second,
  criteria-operationality evidence is partial: `project-vision.md` and
  `governance-artifacts-and-graph-projections.md` name the four conditions, and PM
  / IC materials operationalize pieces of mission, resources, and knowledge, but
  no instance-family explicitly adopts the Johar-4 as a deliberate design checklist.

  Per operator Step-2 ratification, ADR-0069 therefore records `A4
  DECLINE-with-triggers` under Reading A, `F1` no yaml change, and `G1`
  standalone disposition preserving ADR-0048 unchanged as historical record.
supported_by:
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0054-rewilding-thesis-decline-with-triggers
  - spore:ADR-0064-co-presence-field-condition-disposition
  - spore:ADR-0065-pattern-library-infrastructure-spec
  - spore:ADR-0068-federation-encounter-composition-pattern
  - /Users/darrenzal/projects/spore/docs/research/connections/johar-power-cannot-be-allocated.md
  - /Users/darrenzal/projects/spore/docs/project-vision.md
  - /Users/darrenzal/projects/spore/docs/foundations/governance-artifacts-and-graph-projections.md
authorized_by: "operator directive 2026-04-24 ADR-0069 Step-2 decision-gate: A4 DECLINE-with-triggers under Reading A; B/C/D/E N/A; F1 no yaml change; G1 standalone; triggers 1-5 ratified verbatim; Constraint-10 `M CLAUDE.md` tripwire pre-ratified as parent-session housekeeping."
queue_reference: "ADR-0048 four-enabling-conditions parking + ADR-0065 Wave-2 M4 design-criteria-pattern admission queue; sibling-shape precedent ADR-0068, but disposition here follows ADR-0054 decline-with-triggers under ADR-0064 honest-rigor discipline."
affects_canon:
  - docs/research/canon-decisions/0069-four-enabling-conditions-design-criteria-pattern.md
related_adrs:
  - spore:ADR-0048-power-expressive-constructed-modes
  - spore:ADR-0054-rewilding-thesis-decline-with-triggers
  - spore:ADR-0064-co-presence-field-condition-disposition
  - spore:ADR-0065-pattern-library-infrastructure-spec
  - spore:ADR-0068-federation-encounter-composition-pattern
concepts: []
---

# ADR-0069 — Four-Enabling-Conditions Design-Criteria-Pattern: Decline-with-Triggers

## Status

active (activated 2026-04-24 under `adr-0069-four-enabling-conditions-design-criteria-pattern` decision-gated plan; operator ratified `A4` under Reading A, `F1`, and `G1`, with Constraint-10 `M CLAUDE.md` pre-ratified as parent-session housekeeping).

## Context

### Parking source and admission frame

ADR-0048 parked `space / mission / resources / knowledge` as a pattern-library candidate and explicitly typed the cluster as design criteria for field conditions. ADR-0065 later introduced the M4 design-criteria-pattern sub-class and made this the second Wave-2 candidate after ADR-0068's composition-pattern admission.

The local Step 0.5 audit confirmed that the admission question is not about object-class fit. The candidate fits the design-criteria-pattern shape cleanly. The question is whether it *earns* admission under ADR-0065 Exhibit 2 once ADR-0064 honest-rigor discipline is applied at this heavier admission layer.

### Step 0.5 audit findings

1. **(α) passes cleanly.** The four criteria are independently specifiable, target a coherent design concern (conditions for constructed power), and lose operational utility if any one criterion is removed.
2. **Johar is a real multi-work locus, but the explicit Johar-4 tuple is concentrated.** `johar-power-cannot-be-allocated.md` clearly articulates the four-condition cluster and translates it into design questions. Other Johar bridge notes reinforce the broader condition-design lineage but do not restate the full tuple with the same clarity.
3. **Cross-tradition convergence does not clear Reading A.** Ostrom and Alexander provide partial analogs only. No non-Johar tradition in the audited local corpus independently articulates a full enabling-conditions-for-constructed-power cluster.
4. **Criteria-operationality is partial rather than explicit.** Spore canon body names the four conditions, and PM / IC materials provide concrete proxy implementations for mission, resources, and knowledge. But no instance-family document explicitly adopts Johar-4 as a deliberate design checklist.
5. **Reading B remains arguable but was not ratified.** ADR-0065's exemplar logic leaves room for a Johar-native β pass; ADR-0064's honest-rigor discipline leaves room to decline that escalation at heavier thresholds. The operator ratified Reading A as more authoritative for this disposition.

### Canon baseline preserved by this ADR

- Canon object-class inventory unchanged.
- Pattern inventory unchanged at six admitted patterns.
- `docs/research/concepts-p2p-wiki.yaml` remains frozen at v13.
- ADR-0048 remains unchanged as historical record.

## Decision

**Decline admission of `four-enabling-conditions` as a design-criteria-pattern under Reading A, and formalize the parking posture at ADR layer with explicit re-opening triggers.**

This ADR records a decline-of-admission-now, not a rejection of Johar's design language. The cluster remains canon-legible as parked design language in ADR-0048 and supporting bridge notes, but it does not earn a standalone pattern artifact on the current evidence.

The ratified disposition is:

- `A4 DECLINE-with-triggers`
- `F1` no yaml change
- `G1` standalone ADR; no ADR-0048 bundled update

Consequent non-actions are part of the decision, not omissions:

- no pattern doc under `docs/patterns/`
- no `docs/patterns/README.md` update
- no concepts-yaml bump
- no edits to ADR-0048

## Maturation triggers

The following five triggers canonize the re-opening conditions under which ADR-0069 should be re-evaluated. The list inherits ADR-0054's decline-with-triggers posture: the decline is evidence-bounded, and future re-entry remains open.

1. **Cross-tradition convergence**: `>=2` non-Johar full-clusters articulate enabling-conditions-for-constructed-power.
2. **Criteria-operationality**: `>=1` instance-family explicitly adopts Johar-4 as a deliberate design checklist.
3. **Johar multi-work tuple-articulation**: `>=3` additional Johar works explicitly articulate the Johar-4, not merely reinforce parts of it.
4. **Canon-body adoption**: `project-vision.md` or constitutional artifacts promote the four conditions from named-in-prose to an operationally scaffolded design rubric.
5. **Bridge-note densification**: `>=3` new Johar-adjacent bridge notes cite the four conditions as a framework rather than a passing reference.

### Trigger discipline

Any *one* trigger firing is sufficient to open a new ADR-0069-v2 evaluation cycle. Re-opening is not auto-admission. A future cycle must still evaluate the full evidence landscape and may again decline, scope-condition, or admit depending on the matured record at that time.

## Consequences

### Method precedent

- **Second Johar-primary-inspiration decline-with-triggers precedent.** ADR-0054 was the first. ADR-0069 becomes the second explicit use of decline-with-triggers for a Johar-sourced candidate that has real conceptual force but does not clear the current admission threshold.
- **ADR-0064 honest-rigor discipline is validated at pattern-admission layer.** This ADR applies the cluster-counting restraint from ADR-0064 to a pattern-library admission question, not just to primitive-adjacent disposition work.
- **Reading A vs Reading B tension-surfacing is preserved as canon method.** The audit surfaced both readings before judgment; the operator then chose the stricter one. That audit-then-judge sequence is the load-bearing method contribution, not the substantive decline alone.

### Canon-state consequences

- **No new canon artifact is admitted.** `four-enabling-conditions` remains parked design language rather than an admitted pattern.
- **Wave-2 continues without distortion.** ADR-0068 remains the first M4 sub-class admission; the future view-template candidate can still test the catalog-pattern sub-class independently.
- **ADR-0048 stays historically intact.** This ADR does not rewrite the original parking prose or retroactively alter the rationale that parked the candidate.

### Cross-cutting consequences

- **No yaml movement.** `docs/research/concepts-p2p-wiki.yaml` remains at v13 with no new slug.
- **No pattern-library surface changes.** `docs/patterns/README.md` and `docs/patterns/` remain untouched because no admission occurred.
- **Operational evidence threshold is now explicit.** Future attempts to reopen this candidate have a falsifiable checklist rather than relying on general appeal or gap-filling aesthetics.

## ACs

1. ADR-0069 is authored as a standalone decline record at `docs/research/canon-decisions/0069-four-enabling-conditions-design-criteria-pattern.md`.
2. ADR-0069 states the Reading A vs Reading B tension explicitly and records Reading A as the ratified judgment.
3. ADR-0069 records `A4`, `F1`, and `G1` explicitly in body prose.
4. No pattern doc is authored for `four-enabling-conditions`.
5. `docs/patterns/README.md` remains unchanged.
6. `docs/research/concepts-p2p-wiki.yaml` remains unchanged at v13.
7. ADR-0048 remains unchanged.
8. Validator output after authoring remains `FAILED: 9 error(s), 30 warning(s)`.
9. IC and PM HEAD-end SHAs equal the Step 0 baselines exactly.
10. Explicit-path staging only; no `git add -A` and no `git add .`.

## Evidence

- **Parking source**: ADR-0048 `docs/research/canon-decisions/0048-power-expressive-constructed-modes.md:150-152`.
- **M4 admission frame**: ADR-0065 `docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md` Exhibit 2 design-criteria-pattern earning-test.
- **Honest-rigor precedent**: ADR-0064 `docs/research/canon-decisions/0064-co-presence-field-condition-disposition.md` §Consequences cluster-counting discipline.
- **Johar full-cluster articulation**: `docs/research/connections/johar-power-cannot-be-allocated.md:36-40,52,65-72`.
- **Canon-body naming evidence**: `docs/project-vision.md:95` and `docs/foundations/governance-artifacts-and-graph-projections.md:73`.
- **Step 0 preflight manifest**: `tmp/adr-0069-preflight-manifest.txt`.
- **Step 0.5 audit manifest**: `tmp/adr-0069-audit-manifest-2026-04-24.md`.
- **Step 1 decision brief**: `tmp/adr-0069-decision-brief-2026-04-24.md`.
- **Operator Step-2 ratification**: 2026-04-24 directive selecting `A4` under Reading A with five triggers, `F1`, `G1`, and pre-ratified Constraint-10 handling for `M CLAUDE.md`.

## Diff summary

- **New file**: `docs/research/canon-decisions/0069-four-enabling-conditions-design-criteria-pattern.md` (this file).
- **No canon-body edits.** `docs/project-vision.md` and `docs/foundations/governance-artifacts-and-graph-projections.md` remain unchanged.
- **No pattern-library edits.** `docs/patterns/README.md` and `docs/patterns/` remain unchanged.
- **No yaml change.** `docs/research/concepts-p2p-wiki.yaml` remains at v13.
- **No ADR-0048 edit.** Historical parking source preserved verbatim.

## Parking lot

- **ADR-0069 re-evaluation** remains parked behind the five maturation triggers above.
- **Wave-2 item 3** — the view-template candidate under ADR-0065's catalog-pattern sub-class — proceeds independently of this decline.
- **Johar-4 remains usable as non-admitted design language** in bridge notes, audits, and project reasoning, but not as a canon-admitted pattern until a future re-opening cycle clears the triggers and earns admission.

## References

- [docs/research/canon-decisions/0048-power-expressive-constructed-modes.md](./0048-power-expressive-constructed-modes.md) — parking source for the four enabling conditions.
- [docs/research/canon-decisions/0054-rewilding-thesis-decline-with-triggers.md](./0054-rewilding-thesis-decline-with-triggers.md) — decline-with-triggers precedent for Johar-primary-inspiration disposition.
- [docs/research/canon-decisions/0064-co-presence-field-condition-disposition.md](./0064-co-presence-field-condition-disposition.md) — honest-rigor cluster-counting precedent.
- [docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md](./0065-pattern-library-infrastructure-spec.md) — M4 sub-class framework and design-criteria-pattern earning-test.
- [docs/research/canon-decisions/0068-federation-encounter-composition-pattern.md](./0068-federation-encounter-composition-pattern.md) — sibling Wave-2 pattern admission shape precedent.
- [docs/research/connections/johar-power-cannot-be-allocated.md](../connections/johar-power-cannot-be-allocated.md) — explicit Johar-4 articulation and Spore design-question translation.
- [docs/project-vision.md](../../project-vision.md) — canon-body naming evidence for constructed power depending on the four conditions.
- [docs/foundations/governance-artifacts-and-graph-projections.md](../../foundations/governance-artifacts-and-graph-projections.md) — repeated canon-body naming evidence.
