---
doc_id: spore.canon-decision.inspirations-integration-depth-split
doc_kind: decision-record
status: active
adr_number: "0039"
opened-on: 2026-04-22
closed-on: 2026-04-22
decision: edit
r_claim_source:
  - spore.review.adversarial-critique-2026-04-22:CC-12
r_claim_statement: |
  Friston and Bennett are cited as inspirations for deep theoretical grounding (free energy minimization, persistence ordering), but the corpus shows bridge notes and planning documents discussing these frameworks without integrated operational specifications in canon. Friston is explicitly "not integrated" per research note comparative-mediation-over-demarcation.md. Bennett mapping is noted as "a translation across layers" — strong but not operationalised. Listing these alongside genuinely-integrated inspirations (Alexander, Koestler, Ostrom, Ruddick, Johar) overstates theoretical-depth positioning. The Inspirations section should distinguish foundational theoretical grounding from comparative frameworks under exploration.
supported_by:
  - /Users/darrenzal/projects/spore/tmp/canon-adversarial-critique-2026-04-21.md
  - /Users/darrenzal/projects/spore/tmp/canon-critique-lens-c.md
  - docs/research/connections/comparative-mediation-over-demarcation.md
authorized-by: "spore-canon-adversarial-critique operator directive 2026-04-22"
queue_reference: "adversarial-critique-2026-04-22 consolidated findings §CC-12 (Friston/Bennett integration overstated)"
affects_canon:
  - docs/project-vision.md
related_adrs: []
concepts:
  - coordination-substrate
  - collective-agency
---

# ADR-0039 — Inspirations Integration-Depth Split

## Status

active (authored + activated 2026-04-22 under canon-review Round 4)

## Context

The Inspirations section of `docs/project-vision.md` (~L195-L203 after R2/R3 insertions) lists seven inspirations uniformly. Lens C (Evidence-vs-Assertion, S2, CC-12) flagged that five are genuinely integrated (Alexander, Koestler, Ostrom, Ruddick, Johar — all have bridge notes + ADRs + canon edits reflecting their framings) and two are not (Friston / Active Inference, Bennett / Stack Theory). `docs/research/connections/comparative-mediation-over-demarcation.md` explicitly states Markov blanket / free-energy formalism is "outside the active support core." The research corpus treats Friston and Bennett as comparative-intake frameworks under exploration, not as operationally-integrated grounding.

The structural problem: listing them uniformly overstates theoretical-integration depth. Researchers and integrators expecting formal-rigour coherence between Friston / Bennett formalisms and Spore's actual grammar will be misled.

## Decision

**Edit.** Split the Inspirations list into two explicit subsections:

- **Foundational theoretical grounding** — Alexander, Koestler, Ostrom, Ruddick, Johar (operationally integrated into bridge notes, ADRs, canon language).
- **Comparative frameworks under exploration** — Friston / Active Inference, Bennett / Stack Theory (cited as genealogical inspiration; formal operationalisation is future work, not current canon).

Preserve all seven entries and their existing annotations. Add a one-line framing at the start of the "under exploration" subsection noting operationalisation status.

Rationale for `edit`:
- **(a) Lens concurrence ≥ 1** ✓ (Lens C)
- **(b) No opposition**: the corpus itself (comparative-mediation-over-demarcation note) corroborates the distinction
- **(c) Held-tension check**: no block

## Consequences

- The Inspirations section stops overstating integration depth. Researchers can trust that "Foundational theoretical grounding" entries have corresponding operational artefacts; "Comparative frameworks under exploration" entries are honest about status.
- Future work can target integration gaps explicitly (e.g., formalising Bennett's persistence-ordering into viability signals, or situating Friston's free-energy principle relative to Spore's grammar). If/when that work matures, entries migrate subsections.
- Unresolved: specific integration pathways for Friston and Bennett remain future research.

## Evidence

- cluster_key: `docs/project-vision.md:inspirations-integration-depth`
- supports: 1 lens (Lens C evidence-vs-assertion)
- opposes: 0
- source: adversarial-critique consolidated findings, CC-12
- Supporting bridge notes: `docs/research/connections/comparative-mediation-over-demarcation.md` (Markov blanket outside support core)
- Held-tension overlap: None blocks 2026-04-22.
- Adaptation note: per canon-review Round 4 adversarial-critique protocol adaptation.

## Diff summary

`docs/project-vision.md` Inspirations section: split into two subsections. Alexander / Koestler / Ostrom / Ruddick / Johar under "Foundational theoretical grounding"; Friston / Bennett under "Comparative frameworks under exploration" with one-line status note. Zero deletions; section reorganisation + ~2 subsection headers + 1 framing line.
