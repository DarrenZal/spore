---
doc_id: spore.connection.bkc-as-instance-family
doc_kind: connection
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.federation-encounter
  - spore.canon-decision.federation-encounter-composition-pattern
  - spore.federation-protocol
  - spore.mycelial-holarchy-architecture
  - spore.failure-modes
  - spore.actuator-logic
  - spore.actor-governance
  - spore.maintenance-economics
  - spore.external-validation-loop
  - spore.governance-memory
sources:
  - path: /Users/darrenzal/projects/BioregionKnwoledgeCommons/BioregionalKnowledgeCommoning
    title: "BKC governance and protocol layer (BioregionalKnowledgeCommoning)"
    type: primary
  - path: /Users/darrenzal/projects/BioregionKnwoledgeCommons/Octo
    title: "BKC technical implementation (Octo — KOI agent + federation runtime)"
    type: primary
  - path: /Users/darrenzal/projects/BioregionKnwoledgeCommons/BioregionalKnowledgeCommoning/docs/research/bkc-refresh-audit-2026-04-08.md
    title: "BKC refresh audit (2026-04-08; Spore-downstream framing ratified)"
    type: primary
  - path: /Users/darrenzal/projects/spore/tmp/bkc-spore-coherence-audit-2026-04-27.md
    title: "BKC ↔ Spore coherence audit memo (2026-04-27 Layer 2 read-only audit)"
    type: secondary
concepts:
  - federation-encounter
  - joint-commitment
  - reproduction-continuity
  - failure-mode-class
  - coupling-breakdown
  - epistemic-gap
  - response-doctrine
  - actor-standing
  - governance-response
  - reproductive-infrastructure
  - compensation-pattern-layer
  - external-witness
  - validation-loop
  - commitment-pooling
  - bioregional-coordination
---

# Bridge Note: BKC as Federation-Encounter Instance-Family

**Source:** Bioregional Knowledge Commons (BKC), meta-workspace at `/Users/darrenzal/projects/BioregionKnwoledgeCommons/`, observed 2026-04-27 via Layer 2 read-only coherence audit.

## §1 Context

The Bioregional Knowledge Commons is a working federation of bioregional KOI nodes (Greater Victoria, Front Range, Salish Sea / Cascadia adjacent), a governance-and-protocol layer (`BioregionalKnowledgeCommoning`), a technical runtime (`Octo`), and an emerging commitment-economy substrate (Hub Cultivator + TBFF + on-chain attestation via Regen + Celo EAS). It runs production code, it convenes mapping workshops in the field, and it has been quietly producing precisely the kind of operational evidence Spore canon names but rarely instantiates first-hand.

BKC is already Spore-downstream. The 2026-04-08 BKC refresh audit (`BioregionalKnowledgeCommoning/docs/research/bkc-refresh-audit-2026-04-08.md`) ratified the boundary explicitly: BKC is downstream from Spore for coordination grammar, downstream from IC for intelligence primitives, and primary for bioregional application + reference profiles + pilots + proving-ground. That memo recommended a 5-step refresh-pass that has not yet been executed; the BKC corpus continues to operate against the pre-canon-rebuild slug surface (one stable Spore citation: `spore.mycelial-holarchy-architecture`, the doc_id of `holonic-network-architecture.md` which Spore preserved through the canon-rebuild arc).

The Spore-side reciprocal: in [spore:ADR-0068](../canon-decisions/0068-federation-encounter-composition-pattern.md) the federation-encounter composition-pattern admission cited **BKC mapping workshops as 1 of 4 independent instance-families** under the β-audit honest-rigor cluster-counting (alongside Poietic Match match-events, darren-workflow stand-ups/design-reviews, and cross-federation compose-events). At admission time BKC was operational evidence supporting Spore's pattern-library; the citation closes one direction only. **This bridge note closes the reciprocal direction at the Spore canon layer**: it formally registers BKC as the federation-encounter instance-family Spore canon already named, and surfaces the load-bearing primitive / pattern / foundation-doc surfaces BKC operationally instantiates.

This is **comparative intake**, light. The note maps; it does not merge. BKC retains its bounded context (bioregional-knowledge-commoning-as-application); Spore retains its bounded context (coordination-grammar-as-canon).

## §2 Mapping

BKC's operational machinery instantiates Spore canon objects across the 9-primitive roster, the 7 in-scope patterns, and 5 of the 14 foundation docs (post-Phase-4-closure 2026-04-26). The mapping is selective and load-bearing — surface only.

### Primitives (9: 3 structural + 6 verbs)

| Spore primitive | BKC instantiation | Quality |
|-----------------|-------------------|---------|
| **Field** | KOI-net federated graph; bioregion-as-field; pool-as-field; ECDSA-signed envelopes per node | Strong |
| **Holon** | Each KOI node is a holon (Greater Victoria within Salish Sea within Cascadia within Turtle Island); CommitmentPool is a smaller holon | Strong; explicit upstream reference to `spore.mycelial-holarchy-architecture` |
| **Membrane** | Edge-approval governance; unknown-handshake-deferral; consent-leakage gates; visibility scopes (public / authorized / node_private); 15 membrane-policy tests | Strong |
| **Intent** | Declared offers + needs from mapping workshops; WANT / OFFER / CONDITIONAL intents per `intent-publication.md` | Strong; operationally fired in Victoria mapping workshops |
| **Commitment** | Voucher lifecycle PROPOSED → VERIFIED → ACTIVE → REDEEMED; 14/14 mapping-workshop pipeline tests | Strong |
| **Joint-commitment** ([ADR-0050](../canon-decisions/0050-sociality-side-b-plus-joint-commitment.md)) | CommitmentPool itself (pool-formation as joint-commitment); cross-bioregion federation-version-adoption | **Implicit but unnamed** — BKC says "pool" + "federation"; the Gilbertian joint-commitment vocabulary is available but not yet adopted |
| **Evidence** | Evidence entities; CAT receipts; on-chain attestations (Regen + Celo EAS); Steel Thread A/B both verified e2e | Strong |
| **Signal** | KOI-net signed envelopes; cross-reference resolution; sensor → entity-resolution pipeline | Strong |
| **Reproduction-continuity** ([ADR-0049](../canon-decisions/0049-reproduction-continuity-primitive-admission.md)) | Maintainer roles; vendor-pin model; cross-season knowledge-graph persistence; Quartz rebuild discipline | **Implicit** — operational machinery without the primitive vocabulary |

### Patterns (selective from 7 in-scope)

| Spore pattern | BKC instantiation |
|---------------|-------------------|
| **federation-encounter** ([ADR-0068](../canon-decisions/0068-federation-encounter-composition-pattern.md)) | Mapping workshops as the canonical paradigm-case; protocol-version negotiation; cross-bioregion compose-events. Spore canon already cites BKC here. |
| **governance-memory** | BKC pattern-language doc + foundations corpus operate as governance-memory across the bioregional federation |

### Foundation docs (5 of 14 with concrete BKC operational match)

| Spore foundation doc | BKC operational surface |
|----------------------|------------------------|
| **federation-protocol** | `bkc.federation-overview` describing KOI-net federation; membrane-governance work |
| **failure-modes** ([F6, ADR-0075](../canon-decisions/0075-failure-modes-foundation-doc-promotion.md)) | F6.4 scale-transition + F6.5 membrane-boundary + F6.7 actor-capture all map to BKC's edge-approval, unknown-handshake-deferral, consent-leakage testing, and RID rotation cascades |
| **actuator-logic** ([F5, ADR-0076](../canon-decisions/0076-actuator-logic-foundation-doc-promotion.md)) | 5-category response-doctrine (acknowledge / contest / amend / escalate / hold-as-tension) maps to BKC's steward-review pipeline for sensor disagreement (entity-merge candidates, low-confidence template→type mappings, cross-source claim conflicts) |
| **actor-governance** ([F3, ADR-0077](../canon-decisions/0077-actor-governance-foundation-doc-promotion.md)) | Steward roles, edge-approval gates, multisig review thresholds, operator authorities — BKC's "bounded authority" design principle harmonizes with F3's 8-category taxonomy |
| **maintenance-economics** ([F9, ADR-0079](../canon-decisions/0079-maintenance-economics-foundation-doc-admission.md)) | BKC's Hub Cultivator + TBFF + Steiner-ledger framework articulating four metabolic functions (provisioning / redistribution / activation / repair) at the application layer; F9 articulates this at foundation-doctrine layer |

The **external-validation-loop** foundation doc ([F8, ADR-0081](../canon-decisions/0081-external-validation-loop-foundation-doc-admission.md), landed 2026-04-26 evening) is the freshest applicable upstream: BKC's role per the 2026-04-08 refresh-audit IS to be Spore's "primary proving ground where these patterns make contact with real operational commitments and generate genuine evaluation evidence." F8 names this discipline canonically. BKC ↔ Spore is one of the validation-loop instances F8 anticipates.

### Map-not-merge discipline

BKC's discourse-graph entity types (Practice / Pattern / CaseStudy / Bioregion / Question / Claim / Evidence / Commitment / CommitmentPool) are **bioregional-domain types**, not coordination primitives. Importing the 9-primitive roster wholesale would force translation work without obvious operational payoff; the protocol-object-adjacency pattern from [pm:ADR-0014](/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0014-canon-alignment-through-spore-adr-0060.md) is the precedent (PM does not import primitives; it references them adjacent to its own domain types). BKC inherits the same shape: domain types stay BKC-local; Spore canon is referenced upstream as derivation discipline.

## §3 Reciprocal-citation closure

[spore:ADR-0068 §β-audit](../canon-decisions/0068-federation-encounter-composition-pattern.md) explicitly named:

> "BKC/Octo bioregional federation (bridge-note + canon-body + coded evidence)"

as one of four independent instance-families satisfying the β-component of the federation-encounter composition-pattern earning-test under honest-rigor cluster-counting. At admission time the citation moved from Spore-side outward (Spore canon citing BKC's operational evidence) without a corresponding inward registration (BKC, or a Spore-side bridge note, naming BKC as the instance-family ADR-0068 covered).

This bridge note registers that closure at the Spore canon layer. The asymmetry was real but minor — ADR-0068 stands without it — and closing it makes the citation chain bidirectional and canon-legible:

- **Spore → BKC**: ADR-0068 §β-audit cites BKC as instance-family
- **BKC → Spore (this note)**: BKC operationally instantiates federation-encounter as named in ADR-0068; mapping workshops are the paradigm case; the pattern-doc at [`docs/patterns/federation-encounter.md`](../../patterns/federation-encounter.md) carries the canonical recipe BKC implements

Closing the asymmetry costs no canon-body change. The pattern is unchanged. The earning-test stands. The instance-family list stands. What changes is reader-experience: a future researcher arriving at ADR-0068 can now follow the cross-reference outward to BKC's operational corpus through this bridge note rather than dead-ending at the β-audit citation.

The closure does **not** import BKC into Spore canon as canon-bearing material. BKC retains its repo-boundary and its own coordination cadence. This note operates at the research / connection layer (`doc_kind: connection`), not the foundations or canon-decision layers.

## §4 Open questions

Three items surface as parked, operator-elective. None are commitments; the bridge note exists to make them visible.

### (a) BKC-side refresh-pass (parked, BKC-operator-elective)

The 2026-04-08 BKC refresh-audit (authored before Spore's canon-rebuild arc) recommended a 5-step refresh sequence — index BKC into KOI; review entry points; review core foundations by disposition; canon hygiene; reindex — to bring BKC's Spore-citation surface up to current canon state. The recommendations have not been applied. The Layer 2 audit (2026-04-27) confirmed the deferral cost is low: ZERO load-bearing or blocking drift across both BKC repos; one stable Spore citation; nothing breaking.

If/when BKC operator chooses to refresh, the natural targets are the 5 specific Spore canon citations identified in §2: `joint-commitment` / `failure-modes` / `actuator-logic` / `maintenance-economics` / `external-validation-loop`. Sub-questions: which BKC docs absorb each citation, and at what depth (frontmatter `relates_to:` vs body-prose vs upstream-reference subsection). This is BKC-side work; this bridge note does not propose a Spore-side initiative analogous to [ic:ADR-0019](/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0019-canon-alignment-through-spore-adr-0070.md) or [pm:ADR-0015](/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0015-canon-alignment-through-spore-adr-0070.md) for BKC.

### (b) Agentic-bioregionalism framing as broader project (parked, surface only)

The Layer 2 audit produced a MEDIUM-FIRED verdict on whether to formalize "agentic-bioregionalism" as a Spore-canon language: BKC IS operationally agentic-bioregionalism (Octo as federation coordinator + leaf nodes per bioregion + multi-agent coordination via KOI-net + AI-mediated entity resolution + automated commons intake), and Spore canon has the abstract grammar. The two are operationally aligned but not formally linked at a named-deployment-shape layer.

What WOULD constitute formalizing: a new Spore foundation-doc or pattern naming agentic-bioregionalism as a deployment shape that composes federation-encounter + holonic-network-architecture + maintenance-economics + external-validation-loop. This bridge note is the lighter-touch alternative; the heavier-touch is a future operator-elective decision that requires honest earning-test against [ADR-0065](../canon-decisions/0065-pattern-library-infrastructure.md)'s M4 sub-class framework if it lands as a pattern, or against the Phase 4 foundation-doc admission discipline if it lands as a foundation doc.

Surface only. No commitment. The framing-question is itself the parking item.

### (c) KOI graph projection of BKC + Spore + IC + PM as cross-canon knowledge field (parked)

The `koi-processor` codebase is shared between Spore-side and BKC-side deployments. Spore canon currently projects into the KOI knowledge graph via `scripts/project_bridge_notes.py` for Spore + IC + PM + flowcoding (per [spore:ADR-0071](../canon-decisions/0071-cross-repo-projection-script-pm-registration-alignment.md) cross-repo projection-script alignment). Extending the projection to include BKC would create a cross-canon knowledge field across all four repos in one queryable graph.

The Layer 2 audit produced a WEAK-FIRED verdict: technically tractable, latently interesting, no forcing function. Defer until either (i) a concrete use case fires (e.g., a researcher asks "show me where Spore canon and BKC pilots converge"), or (ii) Spore canon stabilizes to a 6-month-cadence v3 review and BKC simultaneously reaches a refresh-pass moment.

## §5 Disposition

**Comparative intake — light.** This bridge note closes the [spore:ADR-0068](../canon-decisions/0068-federation-encounter-composition-pattern.md) reciprocal-citation gap and registers BKC as the federation-encounter instance-family Spore canon already named. The note operates at the research / connection layer (`doc_kind: connection`), surfaces parked items at §4, and proposes no canon-body change, no foundation-doc edit, no slug admission, no ADR ceremony, no validator impact. Validator 9/30 baseline holds.

The note is single-commit; it inherits the parallel-structure framing of prior comparative-intake bridge notes ([claude-code-membrane-control](./claude-code-membrane-control.md), [hermes-agent-adversarial-self-trust](./hermes-agent-adversarial-self-trust.md), [p2p-wiki-field-scan](./p2p-wiki-field-scan.md)) while using `doc_kind: connection` per its synthesis-layer cross-canon role rather than `doc_kind: research`.

What this note *is*: a canon-legible registration that BKC is the federation-encounter instance-family ADR-0068 cited; a selective mapping of BKC's operational machinery to Spore canon objects at primitive / pattern / foundation-doc layers; a parking surface for three operator-elective follow-ons.

What this note *is not*: a refresh-pass for BKC (parked at §4a; BKC-operator-elective); an agentic-bioregionalism foundation-doc or pattern admission (parked at §4b; surface only); a cross-canon KOI projection extension (parked at §4c).

The audit substrate this note paraphrases lives in `tmp/bkc-spore-coherence-audit-2026-04-27.md` (Layer 2 read-only memo from operator's path-(e) directive 2026-04-27). The substrate is insurance; this note is the canon-citable artifact.
