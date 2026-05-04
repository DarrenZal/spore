---
doc_id: spore.canon-decision.route-graph-settlement-operator-vocab-admission
doc_kind: decision-record
status: draft
adr_number: "0084"
opened-on: 2026-05-04
closed-on: 2026-05-04
decision: edit
r_claim_source:
  - spore.connection.ruddick-2026-commitment-pool-route-graphs
r_claim_statement: |
  The Ruddick (2026) CPP intake bridge note (`spore.connection.ruddick-2026-commitment-pool-route-graphs`, committed `8279032` 2026-05-04) surfaced six canon-pressure candidates parked in `tmp/ruddick-intake-canon-pressure-decision-brief-2026-05-04.md` for operator-gated follow-on. Two pass cluster-counting cleanly under post-Phase-4 ADR-0048 parsimony-as-earning-test-outcome discipline + ADR-0064 surface-vocab-vs-operational-concern check, with bundle-symmetric default per ADR-0052 (`spore.canon-decision.reciprocity-trust-glossary-with-framing`) precedent.

  `route-graph` names a multi-pool federation-coordination surface (pools as nodes, admissible directed edges with overlap + guard constraints satisfied) cited in three independent full clusters: (1) Mehrling 2011 + Minsky 1986 + Ingham 2004 monetary-hierarchy / layered-claims literature treats inter-institutional claim chains as graph-shaped; (2) Lamport 2002 + Clarke-Grumberg-Peled 1999 state-machine specification + model-checking literature regularly models inter-node graphs of state machines; (3) Duffie-Zhu 2011 + CPMI-IOSCO 2012 + Fleischman-Dini-Littera 2020 payment-rail / network-economics treats inter-CCP / inter-bank / inter-pool clearing as graph structures. Ruddick 2026 §3.2 Definition 5 (`G_P = (𝒫, E)`, pdf-p9) provides primary-source formalization and §8.2 route-selection formalism (`G_R = (N, E)` with feasibility predicate `F(e, s)` and cost `c(e, s)`, pdf-p29) provides the algorithmic surface. Operational-concern match per ADR-0064: PASS — names a *specific* operational object (multi-pool federation-coordination surface), not just shared vocabulary.

  `settlement-operator` names the institution-relative function mapping executable obligations + inventories to realized settlement outputs cited in two independent full clusters + one partial: (1) Mehrling 2011 + Minsky 1986 layered-claims tradition explicitly distinguishes settlement from convertibility from issuance; (2) CPMI-IOSCO 2012 + Duffie-Zhu 2011 financial-market-infrastructure literature explicitly names settlement-finality as a regulatory + technical concern; (3) Lamport 2002 state-machine specifications carry settlement-shaped operators implicitly in TLA+ next-state functions and model-checking semantics — present-but-implicit, not full cluster. Ruddick 2026 §3.1 Definition 1 (`I = (S, A, T, Π, Σ)` with Σ as institution-relative settlement operator, pdf-p7-8) + Settlement-layer note (pdf-p7-8: retail wallet redemption / CCP novation+waterfall / grain bank inventory release) provides primary-source formalization. Operational-concern match per ADR-0064: PASS — names a specific operational function (institution-relative settlement output mapping), not just the word "settlement."

  Cluster-strength asymmetry between the two slugs is canonically-acknowledged: `route-graph` carries three full clusters + Ruddick primary; `settlement-operator` carries two full clusters + one partial cluster + Ruddick primary. Both pass the ≥2-cluster operational threshold for derived-glossary admission per ADR-0052 precedent (where reciprocity admission carried four clusters and trust admission carried three with explicit asymmetry-within-bundle preserved). Bundle-symmetric ratification is therefore honest: both meet the operational threshold, both share the same primary substrate (Ruddick 2026 paper), both share the same verdict-shape (ADMIT-likely). Asymmetric option-shape (admit one defer one) would require earning argument that the DECISION-BRIEF does not support.

  Cross-ADR interactions are clean enough to fit in §Consequences without a framing-note (ADR-0052's framing-note was warranted by Reciprocity-three-mode-composition canon-legible articulation requirement; ADR-0084 has no comparable cross-ADR composition burden). Four cross-ADR interactions are surfaced + documented: (i) `route-graph` is the substrate-surface that ADR-0068 (`federation-encounter` composition-pattern) operates on — distinct abstraction layers, not aliasable; (ii) `settlement-operator` operates on commitments admitted into the `commitment-pooling` slug's operational territory — distinct function within territory, not aliasable; (iii) F4 representation-authority's `≡_H`-shaped observable-equivalence discipline (per ADR-0074) gains formal-substrate grounding from Ruddick's Definition 8 + Σ specification; (iv) F5 actuator-logic's repair-class taxonomy (per ADR-0076) gains finance-domain instantiation from Ruddick's `U^r` 12-operation set, with `settlement-operator` as the canonical anchor for repair-via-Σ-substitution patterns.

  Lower-ceremony alternatives considered + rejected: (a) admitting `route-graph` as alias of `federation-encounter` would conflate substrate-surface with composition-pattern (ADR-0068's pattern is sub-class-typed (α)+(β) earning-test surface; route-graph is the graph-substrate the pattern operates on — different abstraction layers); (b) admitting `settlement-operator` as alias of `commitment-pooling` would conflate a specific function (settlement) with the operational territory it operates within (pooling) — distinct referents.

  Per axes ratified at Step 2 gate: A1 ADMIT both / B1 bundle-symmetric / C1 yaml v20 → v21 / D1 single v21 history comment block / E2 NO framing note / F1 narrow allowlist (2 files) / G1 ZERO canon-body changes / H1 NO Wave-N+1 sibling alignment fires / I1 cite ADR-0052 + ADR-0068 + ADR-0046 + ADR-0074 + ADR-0076 + ADR-0077 (substrate alignment).

  Scope discipline: vocab-only admission. No primitive admission. No doctrine admission. No mode admission. No property admission. No pattern admission. Two derived glossary slugs only. Canon object-class inventory stays at four categories (primitives / doctrines / modes / properties + framing-notes as cross-ADR interaction infrastructure + patterns under ADR-0065 M4 sub-class framework). The four declined candidates from DECISION-BRIEF (R2 χ-temporal-orientation primitive-bullet scope-conditioning / `commitment-pool-protocol` slug / `cost-function-composition` extension / route-graph-as-M4-pattern) remain parked for future operator-gated session(s) — explicitly NOT closed by this ADR.

  Stream-scope discipline: this ADR makes NO recommendation for action at IC / PM / BKC / bregion. Per `feedback_peer_instance_family_vs_downstream_aligned.md`, IC + PM both H2-decline concepts-p2p-wiki.yaml, so vocab admissions do not propagate as Wave-N+1 alignment ADRs unless siblings have own concepts-registry (they don't). Siblings MAY cite Spore-canonical slugs as substrate; bregion + BKC may also cite under peer-instance-family pattern (read-time bridge-note-based, not write-time alignment-ADR-based). No cross-stream writes or recommendations from this ADR.

  Held v3 review boundary preserved: this ADR does NOT touch held-review state (`project_will_ruddick_cpp_review_held.md`) and does NOT release v3 outreach. Vocab admission cites multiple traditions (≥2 non-Ruddick full clusters per slug) and does NOT claim Will Ruddick endorsement of Spore canon — `route-graph` and `settlement-operator` are descriptive operational objects existing across multiple traditions independently of Ruddick's specific framing. Concept-attribution per academic convention (paper RID cited; zero verbatim text reproduction).
supported_by:
  - /Users/darrenzal/projects/spore/docs/research/external/ruddick-2026-commitment-pool-route-graphs.md
  - /Users/darrenzal/projects/spore/docs/research/connections/ruddick-2026-commitment-pool-route-graphs.md
  - /Users/darrenzal/projects/spore/tmp/ruddick-intake-canon-pressure-decision-brief-2026-05-04.md
---

# ADR-0084 — Route-Graph + Settlement-Operator Vocab Admission

## Context

The Ruddick (2026) CPP intake bridge note (`spore.connection.ruddick-2026-commitment-pool-route-graphs`) surfaced six canon-pressure candidates from a single external paper substrate. The DECISION-BRIEF at `tmp/ruddick-intake-canon-pressure-decision-brief-2026-05-04.md` carried the substantive earning-test work for each: cluster-counting per ADR-0064 surface-vocab-vs-operational-concern, parsimony-as-earning-test-outcome per ADR-0048, sufficient-spec-prose-as-defer-rationale per ADR-0080.

Two of the six candidates pass cluster-counting cleanly: `route-graph` (3 full clusters + primary) and `settlement-operator` (2 full + 1 partial + primary). Both share the same primary substrate (Ruddick 2026 paper), the same verdict-shape (ADMIT-likely under ≥2-cluster threshold), and overlapping cross-tradition substrate (Mehrling layered-claims is the strongest cluster for both). Bundle-symmetric default per ADR-0052 precedent applies.

Spore canon at post-Phase-4 plateau: validator 9/30 EXACT held; foundation docs 14; concepts yaml v20 with 74 slugs; canon-rebuild arc at 33 canon-decisions across ADRs 0044–0081 + 0059a + 0082 + 0083. ADR-0084 is the 34th canon-decision and the first vocab-only admission since ADR-0052 (2026-04-22, ~13 days prior).

Four declined candidates remain parked: R2 Commitment primitive bullet χ-temporal-orientation scope-conditioning question (genuine canon-pressure under marginal cluster-counting; deferred per ADR-0048 parsimony); `commitment-pool-protocol` / `cpp` slug (single-tradition; ADR-0080 sufficient-spec-prose pattern applies); `cost-function-composition` for repair (single-paper β-evidence; F5 actuator-logic already covers); commitment-pool route-graph as M4 composition-pattern (ADR-0068 federation-encounter already admits the composition-pattern shape).

## Decision

Admit two derived glossary slugs in `docs/research/concepts-p2p-wiki.yaml`:

- **`route-graph`** — multi-pool federation-coordination substrate surface; pools as nodes, admissible directed edges with overlap + guard constraints satisfied. Per ADR-0046 Field rule-stratification operational substrate; per ADR-0068 federation-encounter composition-pattern's substrate-surface (NOT aliased into ADR-0068; distinct abstraction layer — substrate vs composition).
- **`settlement-operator`** — institution-relative function mapping executable obligations + inventories to realized settlement outputs (Σ in Ruddick's source-model tuple `I = (S, A, T, Π, Σ)`); operates on commitments admitted into `commitment-pooling` operational territory (NOT aliased into `commitment-pooling`; distinct function vs territory). Anchor for F4 representation-authority's macro-step observable-preservation discipline (per ADR-0074); anchor for F5 actuator-logic's repair-via-Σ-substitution patterns (per ADR-0076).

Both slugs admitted with `primary_project: spore`. Per axes:

- **A1**: ADMIT both (cluster-counting passes ≥2-cluster threshold for each; ≥3 for `route-graph`).
- **B1**: bundle-symmetric (shared substrate, shared verdict-shape, shared primary source).
- **C1**: concepts-p2p-wiki.yaml `# version: v20` → `# version: v21`.
- **D1**: single v21 history comment block in yaml header.
- **E2**: NO framing note (cross-ADR interactions clean enough for §Consequences).
- **F1**: narrow 2-file allowlist (this ADR + concepts yaml).
- **G1**: ZERO canon-body changes.
- **H1**: NO Wave-N+1 sibling alignment fires.

Cluster-strength asymmetry between the two slugs is canonically-acknowledged: `route-graph` 3 full + primary; `settlement-operator` 2 full + 1 partial + primary. ADR-0052 precedent allowed asymmetric strength within bundle (reciprocity 4-cluster + trust 3-cluster). Both meet the ≥2-cluster operational threshold honestly.

Lower-ceremony alternatives (aliasing `route-graph` to `federation-encounter` or `settlement-operator` to `commitment-pooling`) considered + rejected on operational-referent-distinction grounds — see §Consequences.

## Consequences

### Cross-ADR interactions

Four cross-ADR interactions surface from this admission, all anchored in §Consequences (not framing-note layer per E2):

1. **`route-graph` ↔ ADR-0068 `federation-encounter` composition-pattern** — distinct abstraction layers, NOT aliasable. ADR-0068 admits `federation-encounter` as a composition-pattern (Signal + Joint-commitment + Intent + Evidence interactions cross pool boundaries under explicit guard constraints). `route-graph` names the *substrate surface* (multi-pool nodes + admissible edges) that the composition-pattern operates on. Both slugs canonically coexist; relationship is substrate-of (route-graph is substrate-of federation-encounter), not equivalent-to or alias-of. ADR-0068 β-evidence count is materially STRENGTHENED by Ruddick worked constructions §5–§6 (deposit-transfer-redemption / repo-style / CCP-clearing / ROLA / ROSCA / grain-bank / cross-pool reserve-shortfall — ≥4 independent instance-families at finance + mutual-aid layer) but no ADR-0068 file edit is required (the strengthening is read-time citation, not write-time canon shift).

2. **`settlement-operator` ↔ `commitment-pooling` slug (v2 admission)** — distinct function within territory, NOT aliasable. `commitment-pooling` (admitted v2, 2026-04-17) names the operational territory of CPP; `settlement-operator` names a specific function within that territory (the institution-relative Σ that maps obligations + inventories → realized settlement outputs). Both slugs canonically coexist; relationship is function-within (settlement-operator is function-within commitment-pooling territory).

3. **`settlement-operator` ↔ F4 representation-authority `≡_H`-shaped discipline (per ADR-0074)** — formal-substrate alignment. F4's load-bearing canon-discipline ("observable institutional state at chosen level," fact-vs-specification text-type distinction, macro-step observable-preservation per ADR-0074) gains formal-substrate grounding from Ruddick's Definition 8 stutter-insensitive observational equivalence + Σ institution-relative settlement specification. F4 doctrine + Ruddick formal apparatus are mutually-reinforcing (per R6 in bridge note disposition); `settlement-operator` slug provides canonical Spore-side anchor for the formal-substrate citation. No F4 canon-body edit required.

4. **`settlement-operator` ↔ F5 actuator-logic repair-class taxonomy (per ADR-0076)** — finance-domain instantiation. F5's five admitted response-categories (R1 acknowledge-and-record / R2 contest / R3 amend-declared-state / R4 escalate / R7 hold-as-tension) gain finance-domain instantiation from Ruddick's `U^r` 12-operation set (mapped per R3 in bridge note disposition). `settlement-operator` slug provides canonical Spore-side anchor for repair-via-Σ-substitution patterns (where Σ itself is repaired via reroute / defer / revalue / relimit / recurate / etc.). No F5 canon-body edit required.

Additional structural alignments (read-time citation only, no canon-body edit):
- ADR-0046 Field rule-stratification — `route-graph` provides operational substrate at network scale (T+Π in Ruddick's source-model is the formal machinery for `rule-in-use` slug already in v20).
- ADR-0078 instance-model — `route-graph` and `settlement-operator` apply to memory-based instances (Appendix B ROLA witness) at the same operational level as ledger-based instances.

### Cross-tradition support documentation

Cluster-counting honestly:

| Slug | Full clusters | Partial clusters | Primary source |
|---|---|---|---|
| `route-graph` | 3 (Mehrling layered-claims; Lamport state-machine networks; payment-rail / network-economics) | 0 | Ruddick 2026 §3.2 Def 5 + §8.2 route-selection |
| `settlement-operator` | 2 (Mehrling layered-claims; CPMI-IOSCO settlement-finality regulatory) | 1 (Lamport TLA+ next-state functions — settlement-shaped but not named) | Ruddick 2026 §3.1 Def 1 + Settlement-layer note |

Both pass ≥2-cluster operational threshold per ADR-0052 precedent. Asymmetry is canonically-acknowledged, not concealed.

### Scope discipline

- **Vocab-only admission.** Canon object-class inventory unchanged at 4 categories (primitives 9 / doctrines 3 / modes 2 / properties 2) + 7 patterns under ADR-0065 M4 sub-class framework + framing-notes as cross-ADR infrastructure.
- **Concepts yaml**: 74 slugs → 76 slugs. Version v20 → v21.
- **No canon-body changes**. project-vision.md, governance-artifacts-and-graph-projections.md, all foundation docs, all prior ADRs preserved unchanged.
- **No Wave-N+1 sibling alignment fires.** Per `feedback_peer_instance_family_vs_downstream_aligned.md`, IC + PM both H2-decline concepts-p2p-wiki.yaml; vocab admissions don't propagate as alignment ADRs unless siblings have own concepts-registry. Siblings MAY cite as substrate; bregion + BKC may cite under peer-instance-family read-time pattern.

### Decline rationale (parking the four declined candidates)

The four candidates that DO NOT fire under this ADR remain parked at DECISION-BRIEF for future operator-gated session(s):

- **R2 Commitment primitive bullet χ-temporal-orientation scope-conditioning** — genuine canon-pressure under marginal cluster-counting (≥2 supporting + ≥1 opposing); parallel ADR-0062/0063/0064 triad shape if pressure ratifies; deferred per ADR-0048 parsimony pending observable operational pressure (Spore federation-protocol-version production firing past-orientation flows that break under current default-future-leaning routing). DECISION-BRIEF Option D (clarify-existing-term at `attestation-of-execution`) is the lowest-ceremony first-move if pressure escalates.
- **`commitment-pool-protocol` / `cpp` slug** — single-tradition (Grassroots Economics + Ruddick lineage); ADR-0080 sufficient-spec-prose pattern applies (paper itself is the canonical spec). Re-opening triggers: ≥1 additional independent tradition adopts CPP-as-named-protocol with operational coordination-grammar pressure.
- **`cost-function-composition` for repair** — single-paper β-evidence; F5 §4 already covers without naming. Re-opening triggers: ≥2 additional independent instance-families operationalize cost-function-composition for repair.
- **Commitment-pool route-graph as M4 composition-pattern** — ADR-0068 federation-encounter already admits the composition-pattern shape; route-graph is finance-domain instantiation, not separate pattern-admission candidate. The ADR-0068 strengthening is read-time citation only.

### Held v3 review preservation

Held v3 review state (`project_will_ruddick_cpp_review_held.md`) is unmoved by this ADR. v3 read-debt ledger remains exactly as the operator left it. Vocab admission cites ≥2 non-Ruddick full clusters per slug, so admission does not claim Will Ruddick endorsement of Spore canon — `route-graph` and `settlement-operator` are descriptive operational objects existing across multiple traditions independently of Ruddick's specific framing. Concept-attribution per academic convention (paper RID cited; zero verbatim text reproduction in slug definitions or this ADR).

### Bridge-note disclaimer staleness

The Ruddick bridge note (`spore.connection.ruddick-2026-commitment-pool-route-graphs` §8) references `route-graph` and `settlement-operator` with explicit "candidate slug; not yet in v20" disclaimers. Once this ADR lands, those disclaimers are stale-but-accurate-as-of-bridge-note-authoring. Correcting them is OPTIONAL and out-of-scope for this ADR; future bridge-note revision (if any) can reflect the v21 admission.

### Method-precedent contributions (canonical novelty)

This ADR contributes minor method-precedents to the canon-rebuild arc:

- **First post-Phase-4 vocab-only admission**: ADR-0084 demonstrates the lightest-ceremony shape post-Phase-4 closure (ADR-0082) and post-positioning-graduation (ADR-0083). Validates that vocab-only admissions remain a clean canon-tool after the foundation-doc admission arc closed.
- **Cluster-strength asymmetry within bundle ratified transparently**: extends ADR-0052 precedent (reciprocity 4-cluster + trust 3-cluster) by documenting partial-cluster classification (Lamport for `settlement-operator`) as honestly-distinct from full-cluster. Reusable for future bundled-derived-admission ADRs.
- **Cross-ADR interaction articulation in §Consequences (not framing-note)**: ADR-0052 used framing-note layer for cross-ADR composition; ADR-0084 uses §Consequences when cross-ADR interactions are clean enough. Validates the framing-note-vs-§Consequences-discipline boundary at light-ceremony scope.

## Evidence

**Primary substrate:**
- `docs/research/external/ruddick-2026-commitment-pool-route-graphs.md` — archived Ruddick April 2026 SSRN paper (pdf at `~/Downloads/ssrn-6606438.pdf`); RID `orn:source:ruddick-2026-cpp`
- `docs/research/connections/ruddick-2026-commitment-pool-route-graphs.md` — Spore-side substrate-grammar bridge note (committed `8279032` 2026-05-04); 18 C-claims with PDF-anchored RID format; 10 R-claims with per-claim earning-test dispositions
- `tmp/ruddick-intake-canon-pressure-decision-brief-2026-05-04.md` — DECISION-BRIEF carrying substantive earning-test for all six candidates surfaced by the intake; cluster-counting + operational-concern-match + re-opening triggers per candidate

**Precedent template:**
- ADR-0052 `spore.canon-decision.reciprocity-trust-glossary-with-framing` — bundled derived-glossary admission with shared substrate; 2-slug yaml v9 → v10 + ADR + framing-note (ADR-0084 follows shape minus framing-note per E2 axis)

**Cross-tradition source citations** (full-cluster substrate; cited per academic convention, no verbatim text reproduction):
- Ingham, Geoffrey (2004). *The Nature of Money*. Polity Press.
- Lamport, Leslie (2002). *Specifying Systems: The TLA+ Language and Tools*. Addison-Wesley.
- Clarke, Edmund M., Orna Grumberg, and Doron A. Peled (1999). *Model Checking*. MIT Press.
- Mehrling, Perry (2011). *The New Lombard Street: How the Fed Became the Dealer of Last Resort*. Princeton University Press.
- Minsky, Hyman P. (1986). *Stabilizing an Unstable Economy*. Yale University Press.
- Duffie, Darrell, and Haoxiang Zhu (2011). "Does a Central Clearing Counterparty Reduce Counterparty Risk?" Review of Asset Pricing Studies 1(1).
- Committee on Payment and Settlement Systems and Technical Committee of IOSCO (2012). "Principles for Financial Market Infrastructures." BIS Technical Report.
- Fleischman, Tomaž, Paolo Dini, and Giuseppe Littera (2020). "Liquidity-Saving through Obligation-Clearing and Mutual Credit." Journal of Risk and Financial Management 13(12).
- Ruddick, William O. (2026). "Commitment-pool route graphs for finance and mutual aid." SSRN abstract_id=6606438. (Primary source; cited as `orn:source:ruddick-2026-cpp` per Spore RID convention.)

**Cross-ADR substrate alignment:**
- ADR-0046 `spore.canon-decision.field-rule-level-stratification` — Field rule-stratification operational substrate; T+Π formalism for `rule-in-use` slug
- ADR-0048 `spore.canon-decision.power-expressive-constructed-modes` — parsimony-as-earning-test-outcome discipline
- ADR-0052 `spore.canon-decision.reciprocity-trust-glossary-with-framing` — bundled-derived-admission shape template
- ADR-0064 `spore.canon-decision.co-presence-field-condition-disposition` — surface-vocab-vs-operational-concern discipline (originated honest-rigor cluster-counting)
- ADR-0068 `spore.canon-decision.federation-encounter-composition-pattern` — composition-pattern that operates on `route-graph` substrate
- ADR-0074 (per `docs/foundations/representation-authority.md`) — F4 representation-authority + `≡_H`-shaped observable-preservation discipline
- ADR-0076 (per `docs/foundations/actuator-logic.md`) — F5 actuator-logic + repair-class taxonomy
- ADR-0077 (per `docs/foundations/actor-governance.md`) — F3 actor-governance + governance-body discipline
- ADR-0080 `spore.canon-decision.translation-mapping-governance-defer-with-triggers` — sufficient-spec-prose-as-defer-rationale (applied to declined `commitment-pool-protocol` slug per DECISION-BRIEF)

## Diff summary

Two files modified (atomic-bundle 2-commit ceremony per ADR-0052/0061/0080 precedents):

1. **NEW**: `docs/research/canon-decisions/0084-route-graph-settlement-operator-vocab-admission.md` (this file).
2. **MODIFY**: `docs/research/concepts-p2p-wiki.yaml`:
   - Header: `# version: v20` → `# version: v21`.
   - New v21 history comment block (per ADR-0052 v10 + ADR-0079 v19 + ADR-0081 v20 precedents).
   - Two new slug entries appended at end of file:
     - `route-graph` — full schema entry with canonical_label, aliases, one_line_definition, primary_project: spore.
     - `settlement-operator` — full schema entry.
   - Slug count: 74 → 76.

Validator state preserved: 9 errors / 30 warnings IDENTICAL to pre-state. Doc count incremented by exactly 1 (the new ADR file). Sibling repos (IC + BKC + PM + bregion + darren-workflow + koi-processor) ZERO change.
