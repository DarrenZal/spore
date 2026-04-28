---
doc_id: spore.connection.bioregional-coordination-as-peer-instance-family
doc_kind: connection
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.connection.bkc-as-instance-family
  - spore.positioning.agentic-bioregionalism
  - spore.federation-encounter
  - spore.canon-decision.federation-encounter-composition-pattern
  - spore.federation-protocol
  - spore.mycelial-holarchy-architecture
  - spore.instance-model
  - spore.maintenance-economics
  - spore.actor-governance
  - spore.external-validation-loop
sources:
  - path: /Users/darrenzal/projects/bioregional-coordination
    title: "bioregional-coordination repository (created 2026-04-28; root-commit a8d8899; namespace-amend b309c71)"
    type: primary
  - path: /Users/darrenzal/projects/bioregional-coordination/docs/research/canon-decisions/0001-repo-identity-and-spore-relationship.md
    title: "bioregional-coordination ADR-0001 — Repo Identity and Spore Relationship"
    type: primary
  - path: /Users/darrenzal/projects/spore/tmp/spore-meta-vision-2026-04-27.md
    title: "Spore meta-vision memo (v3 draft; tmp/ untracked)"
    type: secondary
concepts:
  - federation-encounter
  - bioregional-coordination
  - peer-instance-family
  - canon-citizenship-layers
---

# Bridge Note: bioregional-coordination as Peer Instance-Family Member

**Source:** bioregional-coordination repository at `/Users/darrenzal/projects/bioregional-coordination/`, created 2026-04-28 as a peer instance-family member alongside BKC. Root commit `a8d8899`; namespace amendment `b309c71`.

## §1 Context

A new canon-bearing repository was spawned 2026-04-28 to host the structural side of the **agentic bioregionalism** frame canonized at Spore-side via [`spore.positioning.agentic-bioregionalism`](../positioning/agentic-bioregionalism.md). The new repo carries doctrine that is bioregional-coordination-specific (when it earns admission), local patterns, instance-family registrations, and cross-repo coordination machinery — broader than the bioregional-knowledge-commoning aspect that BKC focuses on.

This bridge note is the **Spore-side reciprocal recognition** that closes the reciprocal-citation gap from the new-repo-side, parallel to how [`spore.connection.bkc-as-instance-family`](./bkc-as-instance-family.md) recognized BKC after the federation-encounter pattern admission ([`spore:ADR-0068`](../canon-decisions/0068-federation-encounter-composition-pattern.md)) cited BKC as one of four instance-families. Where the BKC bridge note maps an instance-family that pre-existed the federation-encounter admission, this bridge note registers a **peer canon-bearing repo** whose entire structural reason for being is to host the broader frame canon-side at the application-and-pilots layer.

This is **comparative intake, light**. The note registers + cross-cites; it does not merge the bounded contexts. bioregional-coordination retains its bounded context (canon-bearing structure for agentic bioregionalism); Spore retains its bounded context (coordination grammar canon).

## §2 Repo identity (per bioregional-coordination ADR-0001)

bioregional-coordination ratified three structural questions at root-commit:

1. **Repo name + namespace**: `bioregional-coordination` — descriptive directory name; `bioregional-coordination.<slug>` as doc_id namespace. Verbose namespace deliberately matches the verbose repo-name choice and preserves `bregion.<slug>` for future agent-name admission (parallel to `octo` / `dobby`; per [meta-vision memo §8](../../../tmp/spore-meta-vision-2026-04-27.md) naming exploration).

2. **BKC relationship**: **peer at instance-family layer**. Neither downstream of the other. Both compose with Spore coordination grammar at the upstream-reference layer. Cross-citation is at peer level; neither subsumes the other. BKC retains its existing identity as the bioregional-knowledge-commoning aspect; bioregional-coordination broadens scope to include economics, mapping, governance, ecological monitoring, intergenerational stewardship, and other bioregional aspects.

3. **Initial canon structure**: minimal skeleton + grow organically. Zero local foundation docs admitted at minimal-skeleton phase; Spore foundation docs are cited at upstream-reference layer. Local doctrine admits only when bioregional-specific operational pressure surfaces that Spore canon does not cover.

Q4 (KOI integration) and Q5 (other downstream sibling repos for economics / mapping / governance / etc.) deferred per ratified plan.

## §3 Canon-citizenship layer relationship

The new repo is structurally distinct from how IC and PM relate to Spore:

| Relationship | Examples | Mechanics |
|---|---|---|
| **Spore-canon-citizen-sibling** (downstream alignment) | IC, PM | Tracks Spore canon evolution; authors alignment ADRs (e.g., `pm:ADR-0014` / `ic:ADR-0019` / `ic:ADR-0021`); Wave-N+1 cadence |
| **Peer instance-family member** (sibling cross-citation) | BKC, bioregional-coordination | Composes with Spore upstream; does NOT track every Spore canon move; cross-cites at peer level via bridge notes when load-bearing |
| **External witness / validator** ([`spore:F8`](../foundations/external-validation-loop.md)) | Not Spore-canon-citizen at all | Reads selectively; produces structured feedback via F4 appeal-protocol; F3 governance bodies route back |

bioregional-coordination is unambiguously in row 2 — peer instance-family member. It is not committing to alignment ADRs against Spore canon evolution; it cites Spore at the upstream-reference layer when load-bearing for its own work.

This matches the **canon-citizenship-layers distinction** the meta-vision memo §3 surfaced as a future-ADR-shape candidate. The distinction is not yet formally admitted to Spore canon; it is operationally articulated here.

## §4 Mapping (selective; surface only)

bioregional-coordination at minimal-skeleton phase has zero local foundation docs and one local ADR. The mapping is therefore upstream-citation-shaped rather than instantiation-mapped (which is BKC's shape):

| Spore upstream | bioregional-coordination relation | Notes |
|---|---|---|
| [`spore.federation-protocol`](../foundations/federation-protocol.md) | depends_on at `bioregional-coordination.project-vision` | Bioregional federation as canonical use case |
| [`spore.mycelial-holarchy-architecture`](../foundations/holonic-network-architecture.md) | depends_on at `bioregional-coordination.project-vision` | Holonic nesting at bioregional scales |
| [`spore.instance-model`](../foundations/spore-instance-model.md) | depends_on at `bioregional-coordination.project-vision` | Canon / Node / Agent / Site decomposition; `expose` operation |
| [`spore.federation-encounter`](../patterns/federation-encounter.md) | depends_on at `bioregional-coordination.project-vision` | Pattern bioregional encounters instantiate |
| [`spore.maintenance-economics`](../foundations/maintenance-economics.md) | relates_to at `bioregional-coordination.project-vision` | Foundation-doctrine for bioregional capital-layer work |
| [`spore.actor-governance`](../foundations/actor-governance.md) | relates_to at `bioregional-coordination.project-vision` | Steward roles, capture-remediation |
| [`spore.external-validation-loop`](../foundations/external-validation-loop.md) | relates_to at `bioregional-coordination.project-vision` | Witnesses outside the federation's canon-citizenship |
| [`spore.positioning.agentic-bioregionalism`](../positioning/agentic-bioregionalism.md) | relates_to at `bioregional-coordination.project-vision` AND `bioregional-coordination.canon-decision.repo-identity-and-spore-relationship` | Conceptual frame canonized at Spore-side |
| [`spore.connection.bkc-as-instance-family`](./bkc-as-instance-family.md) | Adjacent peer-instance-family bridge note | Sibling pattern; this bridge note is the analog for the new repo |
| [`spore:ADR-0068` federation-encounter composition-pattern](../canon-decisions/0068-federation-encounter-composition-pattern.md) | Substrate ADR | Validates bioregional-coordination's broader-frame stance via β-audit's instance-family enumeration |

## §5 Method-precedent contributions

This bridge note + the new repo's ADR-0001 jointly establish:

1. **Peer-instance-family-member relationship pattern** as a third canon-citizenship shape distinct from downstream-sibling alignment (IC/PM) and external-witness (F8). Sibling peers cross-cite via bridge notes rather than alignment ADRs.

2. **New-repo-side bridge note shape**: when a new canon-bearing peer repo is spawned with the explicit purpose of hosting a frame Spore has already canonized at positioning layer, the Spore-side bridge note registers the structural relationship + closes reciprocal-citation rather than mapping operational-machinery (which is BKC bridge note's shape because BKC has years of operational machinery to map; bioregional-coordination at minimal-skeleton has not yet).

3. **Namespace conventions for new canon-bearing repos require explicit operator ratification, not orchestrator-side default** (per `bioregional-coordination:ADR-0001` method-precedent #5). Namespace is canonical-citation-shape, not implementation detail. The catch happened at sub-milestone surfacing before any cross-repo bridge notes propagated the orchestrator-defaulted `bregion` namespace; this bridge note uses the operator-ratified `bioregional-coordination` namespace from the start.

## §6 Open + parking

- **bioregional-coordination at minimal-skeleton phase**: zero local foundation docs, one ADR. Future canon admissions earn admission per inherited Spore discipline (parsimony-as-earning-test-outcome / decline-shape catalog / honest-rigor cluster-counting).
- **Cross-repo coordination machinery**: bridge-notes + operator-discretion is the current shape; steady-state machinery (per Spore Thread-3 sibling-canon-coherence parking) remains future work.
- **KOI integration** + **other downstream siblings** (Q4 + Q5 from bioregional-coordination ADR-0001): deferred; admit when operational pressure fires.
- **License decision for bioregional-coordination**: deferred; treat as all-rights-reserved until ratified.
- **Future bridge notes from BKC↔bioregional-coordination**: when peer cross-citation needs canonical articulation between the two peer repos directly (rather than through Spore-side reciprocal recognition), bridge notes admit at either or both repos.
