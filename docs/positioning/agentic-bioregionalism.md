---
doc_id: spore.positioning.agentic-bioregionalism
doc_kind: positioning
status: draft
depends_on:
  - spore.federation-protocol
  - spore.mycelial-holarchy-architecture
  - spore.instance-model
  - spore.federation-encounter
relates_to:
  - spore.connection.bkc-as-instance-family
  - spore.canon-decision.federation-encounter-composition-pattern
  - spore.maintenance-economics
  - spore.actor-governance
  - spore.external-validation-loop
date: 2026-04-28
author: darren-zal
published_at: null
disposition: null
publication_target: website
---

> *This document is intended for publication on Spore's website. It lives here as a working draft.*

# Agentic Bioregionalism: A Coordination Frame

Bioregional organising has long been a site of careful work — communities mapping watersheds, stewarding commons, recovering practices that fit place. What is newer is the layer of **agents** participating in that work alongside people: knowledge-graph nodes, signed federation envelopes, AI-assisted entity resolution, on-chain attestation, automated commons intake, sensor-attested commitment pools. Some of this is ten or fifteen years old in the abstract; the difference now is that working systems are running at bioregional scope, and the coordination machinery they need has been quietly composing into something with shape.

This positioning doc names that shape: **agentic bioregionalism** — multi-agent coordination at bioregional scope, where humans and machine agents share a coordination substrate that crosses bioregional boundaries with consent rather than collapsing them into a single platform.

The frame is broader than bioregional knowledge commoning alone. Knowledge commoning is one aspect — the most mature aspect, with [working pilots](../research/connections/bkc-as-instance-family.md) running production code. But bioregional coordination also touches economics, mapping, governance, ecological monitoring, intergenerational stewardship. The frame holds those aspects without forcing them through a single discipline.

## What's already working at bioregional scope

The concrete answer to "is this real yet?" is yes, partially, in one instance-family. The Bioregional Knowledge Commons (BKC) operates a federation of KOI nodes — Greater Victoria, Front Range, Salish Sea / Cascadia adjacent — running production code that instantiates a substantial portion of Spore's coordination grammar.

[ADR-0068 federation-encounter](../research/canon-decisions/0068-federation-encounter-composition-pattern.md) admitted the pattern under a four-instance-family β-audit; BKC mapping workshops were one of the four. The reciprocal [bridge note](../research/connections/bkc-as-instance-family.md) maps BKC's operational machinery to nine Spore primitives, seven in-scope patterns, and five foundation docs — selectively, surface-only, without merging the bounded contexts.

What this means concretely: bioregional federation is not a thought experiment. ECDSA-signed envelopes cross bioregional membranes. Edge-approval governance, unknown-handshake-deferral, and consent-leakage gates are tested. CommitmentPools operate on Celo mainnet with on-chain attestation. Mapping workshops have produced declared offers and needs that fed real verification pipelines. The proving-ground exists.

The frame this positioning doc names is not "what if bioregional coordination?" but rather "what is the coordination substrate the working bioregional pilots are running on, and what other aspects of bioregional life can compose with it?"

## The coordination substrate

Spore's grammar provides the substrate that bioregional coordination has been composing with. Five canonical surfaces are most directly load-bearing for agentic bioregionalism:

**[Federation protocol](../foundations/federation-protocol.md)**: how nodes federate without surrendering sovereignty. Bioregional federation is the canonical use case — separate nodes per bioregion, cross-membrane envelopes with declared provenance, forkability preserved at every layer.

**[Mycelial holarchy architecture](../foundations/holonic-network-architecture.md)** (slug `spore.mycelial-holarchy-architecture`): the structural primitive for nested wholes-and-parts. A KOI node in Greater Victoria is a holon within Salish Sea, within Cascadia, within Turtle Island. Each scale carries its own membrane; each composes upward without flattening.

**[Spore instance model](../foundations/spore-instance-model.md)**: the Canon / Node / Agent / Site decomposition. The `expose` operation is the membrane crossing for external visibility — the operation by which a bioregional federation makes its work legible to other federations, to researchers, to allies, while preserving consent at the boundary.

**[Federation-encounter pattern](../patterns/federation-encounter.md)**: the composition-pattern for how separate federations meet, exchange, and either compose or decline composition. Bioregional federations need this when, e.g., a Salish Sea pool considers shared work with a Front Range pool; the encounter has structure rather than ad-hoc discretion.

**[Maintenance economics](../foundations/maintenance-economics.md)**: the foundation-doctrine articulating care, provisioning, maintenance, and translation labour. Bioregional commitment-economy work — Hub Cultivator, time-banking flow funding, on-chain claims layered with Steiner-style ledgers — composes directly with this layer.

Beyond these five, [actor-governance](../foundations/actor-governance.md) (steward admission, role assignment, capture-remediation) and [external-validation-loop](../foundations/external-validation-loop.md) (how a bioregional federation receives feedback from witnesses outside its canon-citizenship) are adjacent surfaces that bioregional coordination touches operationally without yet claiming canonically.

What's notable is how much of the substrate is already in place. The substrate didn't get built for bioregional work specifically — it got built as coordination grammar, and bioregional work turns out to be one of its load-bearing instance-families. That's the relationship this positioning doc names.

## What the frame holds

Agentic bioregionalism as a frame holds aspects beyond knowledge commoning that bioregional coordination needs:

- **Bioregional economics** — flow funding, mutual credit, time-banking, commitment-pool clearing, Steiner-ledger compatibility. Bioregional currencies and bioregional crediting protocols compose with maintenance-economics doctrine + commitment-pooling pattern.
- **Bioregional mapping** — H3 hexagonal indexing, watershed delineation, multi-scale habitat mapping, indigenous-name surfaces, mesh-routing addressing-as-ontology approaches. The mapping layer crosses bioregional federations and sometimes precedes them.
- **Bioregional governance** — assemblies, councils, polycentric governance per Ostrom-rule-stratification, indigenous-protocol surfaces, multi-stakeholder ratification machinery. Governance composes with actor-governance doctrine + governance-artifacts surfaces.
- **Bioregional ecological monitoring** — sensor networks, citizen science, harm-reporting flows, restoration-attestation. Monitoring composes with sensor-oracle-governance doctrine + evidence verbs.
- **Bioregional intergenerational stewardship** — long-horizon commitments, generational-handoff machinery, archival reproduction, named-elder lineages. Stewardship composes with reproduction-continuity verb + maintenance-economics provisioning layer.

These aspects don't all need to live in the same repo, project, or organisation. Some will surface in BKC; some in adjacent bioregional-economics or bioregional-mapping work that may exist already in parallel; some in future work that hasn't yet found its host. The frame is broader than any single repo. What the frame provides is a **canon-citable name** for the coordination shape that links them: agentic bioregionalism, anchored by Spore's coordination substrate, instantiated wherever the operational evidence supports admission.

## What this frame is not

The frame is not a claim that bioregional life requires AI agents to be coordinated. Bioregions have coordinated themselves — through human practice, indigenous protocols, ecological seasonality, watershed councils — for as long as bioregions have been recognised as meaningful units of life. The agentic layer is one composition mode, not the only one. Bioregional work without machine agents is fully coherent and fully needed.

The frame is also not a claim that Spore's coordination grammar is the only canon-substrate for bioregional work. Other coordination grammars exist; bioregional federations can compose with any of them or none of them. Spore's claim is bounded: where bioregional federations are composing with Spore's substrate (and BKC is the current proof case), the canonical relationship is now nameable.

Finally, the frame is not yet a sibling-canon repo at the structural-legitimacy layer. The [meta-vision memo](../../tmp/spore-meta-vision-2026-04-27.md) names this as a medium-fired strategic option — a future possible repo (default direction `bioregional-coordination`; conceptual frame "agentic bioregionalism") that would carry its own canon-bearing structure as a Spore-instance-family member at higher composition layer. That repo may or may not get spawned; today's positioning doc surfaces the frame canonically without committing to that structural addition.

## What this positioning doc commits to

This doc:

- Names **agentic bioregionalism** as a canonically-citable coordination frame at the bioregional-scope multi-agent-coordination layer, broader than knowledge-commoning aspect alone.
- Surfaces the load-bearing Spore substrate that bioregional federations compose with.
- References BKC as the working instance-family the substrate has already proven against — by structural reciprocity to [ADR-0068 federation-encounter](../research/canon-decisions/0068-federation-encounter-composition-pattern.md) and the [bridge note](../research/connections/bkc-as-instance-family.md).
- Holds open the broader frame for aspects beyond knowledge commoning — economics, mapping, governance, monitoring, stewardship — without committing each aspect to its own repo today.

This doc does **not** commit to:

- A specific name for any future sibling-canon repo
- A specific structural relationship between BKC and any future repo
- A specific ordering in which adjacent bioregional aspects (economics / mapping / governance / monitoring / stewardship) get their own host
- A specific federation topology beyond what BKC has already demonstrated

These remain operator-elective and substrate-pressure-driven; the frame this positioning doc names is what becomes nameable now.

## Sources + cross-references

- [Spore project vision](../project-vision.md) — the upstream coordination grammar
- [BKC bridge note](../research/connections/bkc-as-instance-family.md) — Spore-side reciprocal recognition of BKC as federation-encounter instance-family
- [ADR-0068 federation-encounter composition-pattern](../research/canon-decisions/0068-federation-encounter-composition-pattern.md) — Spore canon admission citing BKC as 1 of 4 independent instance-families
- [Federation protocol](../foundations/federation-protocol.md), [mycelial holarchy architecture](../foundations/holonic-network-architecture.md), [spore instance model](../foundations/spore-instance-model.md), [maintenance economics](../foundations/maintenance-economics.md), [actor-governance](../foundations/actor-governance.md), [external-validation-loop](../foundations/external-validation-loop.md) — load-bearing canonical surfaces
- [Federation-encounter pattern](../patterns/federation-encounter.md) — the composition-pattern bioregional encounters instantiate
