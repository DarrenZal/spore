# Phase 4 Pass P4.4 — Bridge-note corpus diagnostic (escalated full review)

**Pass:** P4.4
**Agent:** Codex
**Date:** 2026-04-19
**Scope:** Deterministic 10-note bridge-note sample from `tmp/bridge-note-inventory.tsv`, escalated to a full 94-note corpus review after the scale-up trigger fired.
**Inventory anchors:** `tmp/bridge-note-inventory.tsv`; `docs/research/concepts-p2p-wiki.yaml`; `docs/research/planning/canon-review-protocol.md`; `/Users/darrenzal/.claude/plans/phase-4/04-bridge-note-sample.md`

## Sample selection

- Method: sorted the TSV by `repo` then `path`, retained the header at line 1, then selected sorted file lines `5, 15, 25, 35, 45, 55, 65, 75, 85, 95` to satisfy the required 10-note sample deterministically.
- Selected:
  - `line 5` — `intelligence-commons/docs/research/inclusive-and-generative-value.md`
  - `line 15` — `poietic-match/docs/research/connections/commercial-credit-circuit.md`
  - `line 25` — `spore/docs/research/connections/canon-framing-boundary-theory-unifier.md`
  - `line 35` — `spore/docs/research/connections/constructive-hyperstition.md`
  - `line 45` — `spore/docs/research/connections/hyperstition.md`
  - `line 55` — `spore/docs/research/connections/johar-entangled-freedom.md`
  - `line 65` — `spore/docs/research/connections/johar-miss-engineered-city.md`
  - `line 75` — `spore/docs/research/connections/johar-sovereign-consciousness.md`
  - `line 85` — `spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md`
  - `line 95` — `spore/docs/research/connections/what-the-commons-is-missing-opposition.md`
- Per-repo coverage from the deterministic sample: IC `1`, PM `1`, Spore `8`.
- Scale-up trigger status: **triggered** at `4/10` sampled notes with `>=2` issues (`spore.connection.johar-entangled-freedom`, `spore.connection.johar-miss-engineered-city`, `spore.connection.johar-sovereign-consciousness`, `spore.connection.p2p-wiki-post-intake-synthesis`).

## Per-sample audit

### intelligence-commons/docs/research/inclusive-and-generative-value.md
- Source artifact: `orn:p2p-wiki.page:Inclusive_Governance_and_Generative_Value_in_Knowledge_Commons`
- R-claims checked: `R1`, `R5`
- Verdict: has 1 issue
- Issues: R-claim register uses the old `**R<n>**` + italic support-line format instead of the required `- **R<n>**:` + `supported_by:` shape.

### poietic-match/docs/research/connections/commercial-credit-circuit.md
- Source artifact: `orn:p2p-wiki.page:Commercial_Credit_Circuit`
- R-claims checked: `R1`, `R3`
- Verdict: has 1 issue
- Issues: R-claim register uses the old `**R<n>**` + italic support-line format instead of the required `- **R<n>**:` + `supported_by:` shape.

### spore/docs/research/connections/canon-framing-boundary-theory-unifier.md
- Source artifact: `unspecified`
- R-claims checked: none
- Verdict: has 1 issue
- Issues: inventory includes a `research_subkind: canon_framing` note in the bridge-note corpus.

### spore/docs/research/connections/constructive-hyperstition.md
- Source artifact: `Hyperstitions: How Shared Beliefs Shape Onchain Realities`
- R-claims checked: none
- Verdict: clean

### spore/docs/research/connections/hyperstition.md
- Source artifact: `Hyperstitions: How Shared Beliefs Shape Onchain Realities`
- R-claims checked: none
- Verdict: clean

### spore/docs/research/connections/johar-entangled-freedom.md
- Source artifact: `unspecified`
- R-claims checked: `R1`
- Verdict: has 2 issues
- Issues: old R-claim format; `R1` uses off-yaml concept slug `entangled-freedom-and-being`.

### spore/docs/research/connections/johar-miss-engineered-city.md
- Source artifact: `unspecified`
- R-claims checked: `R1`
- Verdict: has 2 issues
- Issues: old R-claim format; `R1` uses off-yaml concept slug `spatial-service-and-civic-infrastructure`.

### spore/docs/research/connections/johar-sovereign-consciousness.md
- Source artifact: `unspecified`
- R-claims checked: `R1`
- Verdict: has 2 issues
- Issues: old R-claim format; `R1` uses off-yaml concept slug `consciousness-sovereignty-and-post-compliance`.

### spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md
- Source artifact: `P2P Foundation Wiki — Field Scan (Tier 1a pre-intake synthesis)`
- R-claims checked: `R1`, `R7`
- Verdict: has 2 issues
- Issues: inventory includes a `research_subkind: field_scan` note in the bridge-note corpus; its R-claims still use the old `**R<n>**` + italic support-line format.

### spore/docs/research/connections/what-the-commons-is-missing-opposition.md
- Source artifact: `orn:p2p-wiki.page:What_the_Commons_Is_Missing`
- R-claims checked: `R1`, `R3`
- Verdict: has 1 issue
- Issues: R-claim register uses the old `**R<n>**` + italic support-line format instead of the required `- **R<n>**:` + `supported_by:` shape.

## Full-corpus audit

- Inventory entries audited: `94`
- Notes with at least one review claim: `63`
- Notes using the old `**R<n>**` + italic support-line format: `61`
- Notes with review claims but no separate support-line key at all: `2`
  - `spore/docs/research/connections/johar-entangled-intelligence.md`
  - `spore/docs/research/connections/openwashing-opposition.md`
- Notes whose review-claim concepts fall outside frozen vocab v2: `30`
  - Spore: `29`
  - Intelligence Commons: `1`
  - Poietic Match: `0`
- Inventory entries whose `research_subkind` is not `bridge_note`: `10`
  - `canon_framing`: `7`
  - `field_scan`: `3`
- Bridge notes missing `disposition`: `1`
  - `spore/docs/research/connections/obstruction-aware-sheafification.md`

## Findings

```yaml
- finding-id: P4-4-001
  type: misplaced
  severity: S3
  priority: important
  corpus-location: bridge-note
  target:
    repo: N/A
    doc: tmp/bridge-note-inventory.tsv
    concept: N/A
    line_range: N/A
  claim: |
    The bridge-note inventory currently mixes non-bridge-note artifacts into the bridge-note corpus. At least ten inventory entries are actually `canon_framing` or `field_scan` docs, which means deterministic sampling can consume quota on framing/meta artifacts instead of true bridge notes. This distorts bridge-note diagnostics before any content-level review begins.
  evidence:
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:7
      excerpt: "spore/docs/research/connections/canon-framing-boundary-theory-unifier.md unspecified 0 0 0.00 TRUE"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/connections/canon-framing-boundary-theory-unifier.md:1-5
      excerpt: "doc_id: spore.connection.canon-framing-boundary-theory-unifier ... research_subkind: canon_framing"
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:65-67
      excerpt: "p2p-wiki-field-scan ... p2p-wiki-pass-2-capstone-synthesis ... p2p-wiki-post-intake-synthesis"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-field-scan.md:1-6
      excerpt: "doc_id: spore.connection.p2p-wiki-field-scan ... research_subkind: field_scan"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md:1-6
      excerpt: "doc_id: spore.connection.p2p-wiki-post-intake-synthesis ... research_subkind: field_scan"
  proposed-resolution-track: editorial
  prior-collision-check: none
  notes: Overlaps P4.3 on bridge-note-format / meta-corpus boundary discipline.

- finding-id: P4-4-002
  type: contradictory
  severity: S3
  priority: blocking
  corpus-location: bridge-note
  target:
    repo: N/A
    doc: N/A
    concept: N/A
    line_range: N/A
  claim: |
    The bridge-note corpus is not serialized in the Phase 4 / canon-review bridge-note R-claim format. The current corpus uses `**R<n>** [review claim] ...` with italic support text or ad-hoc inline support variants, while the pass specification expects `- **R<n>**: ...` plus a `supported_by:` line. Full-corpus audit found all 63 review-claim notes out of spec: 61 use the old format and 2 more use malformed support-line variants. This is a blocking bridge-note ingestion and verification risk.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/.claude/plans/phase-4/04-bridge-note-sample.md:22-24
      excerpt: "R-claim shape: `- **R<n>**: <claim> ... [concept: <slug>]` + `supported_by:` line"
    - kind: source-doc
      ref: /Users/darrenzal/projects/intelligence-commons/docs/research/inclusive-and-generative-value.md:195-201
      excerpt: "**R1** [review claim] ... [concept: inclusive-governance] ... *R1 is supported by C1, C2, C3, C9, C13.*"
    - kind: source-doc
      ref: /Users/darrenzal/projects/poietic-match/docs/research/connections/commercial-credit-circuit.md:174-180
      excerpt: "**R1** [review claim] ... [concept: commercial-credit-circuit] ... *R1 is supported by C1, C3, C4, C10.*"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-post-intake-synthesis.md:304-308
      excerpt: "**R1** [review claim] [target: spore.mycelial-holarchy-architecture] ... *R1 is supported by C1, C2, C8, C15.*"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/connections/openwashing-opposition.md:123-127
      excerpt: "**R4** ... The value-capture pattern ... *R4 is supported by C1, C2, C4.*"
  proposed-resolution-track: prior-revision-proposal
  prior-collision-check:
    - canon-review bridge-note R-claim format convention
  notes: Cross-pass dedup with P4.3 on bridge-note format convention. `johar-entangled-intelligence.md` also deviates further by using narrative italics instead of a dedicated support line.

- finding-id: P4-4-003
  type: contradictory
  severity: S3
  priority: blocking
  corpus-location: bridge-note
  target:
    repo: N/A
    doc: N/A
    concept: N/A
    line_range: N/A
  claim: |
    Thirty bridge notes use review-claim concept slugs outside the frozen v2 P2P-wiki vocabulary, despite the frozen-vocabulary rule explicitly forbidding new slugs without a version bump. The sample trigger surfaced three Johar notes immediately; full-corpus audit expands the problem to 30 notes (29 in Spore, 1 in IC). Until those slugs are remapped or the vocabulary is formally revised, bridge-note cluster formation is non-canonical.
  evidence:
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/concepts-p2p-wiki.yaml:1-10
      excerpt: "Agents reading this file MUST NOT mint concept slugs outside this vocabulary ... do NOT silently append."
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:37
      excerpt: "spore/docs/research/connections/johar-entangled-freedom.md unspecified 3 1 0.00 FALSE"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/connections/johar-entangled-freedom.md:65-67
      excerpt: "**R1** [review claim] [target: spore.lexicon] [concept: entangled-freedom-and-being]"
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:47
      excerpt: "spore/docs/research/connections/johar-miss-engineered-city.md unspecified 3 1 0.00 FALSE"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/connections/johar-miss-engineered-city.md:61-63
      excerpt: "**R1** [review claim] [target: spore.project-vision] [concept: spatial-service-and-civic-infrastructure]"
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:57
      excerpt: "spore/docs/research/connections/johar-sovereign-consciousness.md unspecified 3 1 0.00 FALSE"
    - kind: source-doc
      ref: /Users/darrenzal/projects/spore/docs/research/connections/johar-sovereign-consciousness.md:64-66
      excerpt: "**R1** [review claim] [target: spore.project-vision] [concept: consciousness-sovereignty-and-post-compliance]"
    - kind: inventory-row
      ref: /Users/darrenzal/projects/spore/tmp/bridge-note-inventory.tsv:83
      excerpt: "intelligence-commons/docs/research/johar-neuroplastic-field.md unspecified 3 3 0.00 FALSE"
  proposed-resolution-track: prior-revision-proposal
  prior-collision-check:
    - frozen concepts vocabulary v2
  notes: Cross-pass dedup with P4.3 on frozen-concepts discipline.
```

## Pass summary

The deterministic sample triggered escalation at `4/10` sampled notes with `>=2` issues, so the pass expanded to all 94 inventory entries. The full review produced three S3 findings: two blocking bridge-note discipline failures (`R`-claim serialization and frozen-slug drift) and one important inventory-boundary finding (`canon_framing` / `field_scan` notes admitted to bridge-note inventory). Sampled content spot-checks did not surface an additional corpus-wide pattern in missed opposition, paraphrase drift, or citation-strength overreach beyond those structural defects.

## Pass-level caveats

- Deterministic selection treated the TSV header as sorted line `1`, so the required 10-note sample became sorted lines `5,15,...,95`; this avoided inventing an extra top-up rule and still satisfied the per-repo minimum.
- Full-corpus review was exhaustive for four check types: `research_subkind`, `disposition` presence, R-claim serialization shape, and review-claim concept-slug membership in frozen vocab v2. Opposition / paraphrase / citation checks remained sample-depth spot-checks.
- `spore/docs/research/connections/obstruction-aware-sheafification.md` is the only bridge-note artifact missing `disposition`, but it is still `status: draft` and has `0` review claims, so it was held as a caveat rather than promoted to a finding.
