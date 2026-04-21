# Scope — reframing-learning-field-host-elevation

- Authorizing proposal: `docs/research/planning/reframing/reframing-learning-field-host-elevation.md` (`status: eligible`)
- Covered findings: F-029
- Protocol rules invoked:
  - foundational-reframing-protocol v1.1: FR-7, FR-14.6, FR-19, FR-20, FR-24, FR-25, FR-27
  - Phase 7 master + spec 19: Scenario A execution, 2-repo session-atomic ADR bundle, `eligible -> authorized-ADR -> executed`
  - `reframing-repo-topology-trunk`: ratified `Option 1 — ratify the current three-repo split`, which fixes Scenario A as the host choice for this bundle
- Target allowlist:
  - `spore.canon-decision.*`
  - `ic.canon-decision.*`
  - `spore.learning-field-protocol`
  - `meta:*`
- Repos affected: Spore, Intelligence Commons
- Cross-track dependencies:
  - blocking dependency satisfied: `reframing-repo-topology-trunk` is `status: executed` and already released F-029 from `cooling-off -> eligible`
  - topology direction fixed: Scenario A (`Spore` authoritative host, `IC` local instantiation)
- ADR slug candidates:
  - Spore ADR-0024 `learning-field-protocol-elevation`
  - IC ADR-0015 `learning-membrane-pattern-demotion`
- Session-atomic window required: yes (35 minutes across the 2 ADR draft commits, author-date basis)
- New protocol target:
  - path: `docs/research/planning/learning-field-protocol-v1.md`
  - doc_id: `spore.learning-field-protocol`
  - status on creation: `active`
- Inventory row to update:
  - `tmp/meta-corpus-inventory.tsv` row 8 (`learning-field-structure`)

## Pre-flight

- Branches verified: `corpus-review/v1` in Spore and Intelligence Commons
- Explicit-add discipline: in effect
- Topology gate:
  - `docs/research/planning/reframing/reframing-repo-topology-trunk.md` -> `status: executed`
  - `docs/research/planning/reframing/reframing-learning-field-host-elevation.md` -> `status: eligible`
- Spore validator baseline: 9 errors / 30 warnings on 2026-04-21; no regression allowed
- ADR numbering / doc_id conventions verified:
  - Spore next ADR: `0024`, `spore.canon-decision.*`
  - IC next ADR: `0015`, `ic.canon-decision.*`

## Evidence gate

- F-029: pass. S2 bar exceeded with 6 proposal sources, 5 publicly-verifiable.
  - `docs/research/planning/corpus-foundational-review-findings.md:946-975` states the host-boundary mismatch and names the topology dependency.
  - `tmp/meta-corpus-inventory.tsv:8-8` shows the learning-field structure is already treated as meta-corpus while hosted in IC.
  - `docs/research/planning/corpus-foundational-review-methodology.md:105-114` classifies the learning-field structure as reviewable meta-corpus rather than local pattern literature.
  - `docs/research/planning/learning-field-intake-protocol.md:16-21` names the shared intake/canon pair across Spore, IC, and PM, which is the governance surface this structure supports.
  - `/Users/darrenzal/projects/intelligence-commons/docs/patterns/project-learning-membrane.md:43-103` supplies the current four-surface + governed-membrane structure to elevate.
  - `docs/research/corpus-review/research-canonical-layering.md:178-178` supplies the layering principle: host placement should follow what varies independently.

## Bundle notes

- Scenario chosen: A — Spore hosts the authoritative cross-project learning-field protocol; IC keeps a local instantiation/reference pattern.
- FR-19 mapping to record in the ADR bundle:
  - predecessor: `ic.project-learning-membrane`
  - successor: `spore.learning-field-protocol`
  - disposition: `historical-gloss`
- The new Spore protocol must sit beside `learning-field-intake-protocol.md` and explicitly name that file as a companion.
- The IC rewrite should retain only IC-local implementation notes: proving-ground mapping, agent roles, and primitive alignment specific to Intelligence Commons.
