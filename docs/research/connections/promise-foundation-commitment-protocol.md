---
doc_id: spore.connection.promise-foundation-commitment-protocol
doc_kind: research
status: draft
depends_on:
  - spore.project-vision
  - spore.relational-agency-and-holons
  - spore.mycelial-holarchy-architecture
sources:
  - url: https://promissum.lovable.app/
    title: "Promissum — Promises You Can Count On"
    author: David (david@promise.foundation)
    type: primary
  - url: https://green-flag.promise.foundation/
    title: "Green Flag — Date People Who Mean What They Say"
    author: David (david@promise.foundation)
    type: primary
  - url: https://promise-supply.promise.foundation/
    title: "Promise Supply — Cash-Backed Performance Verification"
    author: David (david@promise.foundation)
    type: primary
  - url: https://oracular.promise.foundation/
    title: "Oracular — Auditable AI for Investment Due Diligence"
    author: David (david@promise.foundation)
    type: primary
  - url: https://pledge-proof.lovable.app/
    title: "Keepable — Positive-Sum Marketing"
    author: David (david@promise.foundation)
    type: primary
disposition: candidate primitive
---

# Promise Foundation Ecosystem — Commitment Protocol at Production Scale

**Source:** Five vibe-coded concept demos built by David (david@promise.foundation), observed 2026-03-31. Evidence reliability: doc-unreliable (Lovable.dev demo apps; Resource/Documentation/API links are stubs). All claims verified against live application UI only.

## 1. What the Ecosystem Is

The promise.foundation ecosystem is a designed multi-domain application stack built around a shared commitment protocol:

- **Promissum** (promissum.lovable.app) — the protocol layer: promise creation, Social Capital (SC) staking, neutral assessment, Trust Lanes, Merit scoring, and community governance with an Amendment flow.
- **Green Flag** (green-flag.promise.foundation) — a dating app where verifiable behavioral commitments form the trust basis for matching.
- **Promise Supply** (promise-supply.promise.foundation) — B2B supply chain with cash-backed performance verification, cryptographic evidence chains, and AI-assisted arbitration.
- **Oracular** (oracular.promise.foundation) — investment due diligence with auditable AI reasoning, competing-hypothesis evaluation, and tamper-evident evidence-to-claim chains.
- **Keepable** (pledge-proof.lovable.app) — a B2B marketing tool for refining vague claims into "keepable promises" with attached proof stacks and qualification criteria.

The domain structure is explicit: `X.promise.foundation` subdomains are domain applications instantiating the Promissum protocol. This is a designer's exploration, not a deployed production system — but the conceptual architecture is coherent and detailed.

## 2. Mapping to Spore Primitives

The ecosystem maps across nearly the full Spore coordination grammar:

| Promise.Foundation concept | Spore primitive | Strength |
|---------------------------|----------------|----------|
| Promise creation (bilateral, explicit conditions, both parties see same terms) | Commitment | Strong |
| SC staking (deposit scales inversely with Trust Lane) | Commitment (economic binding) | Strong |
| Trust Lanes: New / Trusted / Priority / Restricted | Trust Tiers | Strong |
| Assessment Center (neutral assessors; Merit earned through assessments) | Attestation | Strong |
| Evidence chain (TMS → IoT → GPS → WMS → POD, each with SHA hash) | Evidence | Strong |
| Governance + Merit-weighted Amendment voting | Discourse → Decision | Strong |
| Redemption / repair missions (path back from Restricted) | Revise cycle | Moderate |
| Domain app pattern (green-flag./, promise-supply./, oracular./) | Instance model | Strong |
| Privacy-by-design (batch score updates, anonymous feedback) | Membrane authorize operation | Strong |
| Merit as procurement gate (≥85 Premium, <75 Restricted from critical lanes) | Trust tier → structural access gate | Strong |

## 3. What Spore Confirms

**Relational agency / holon model confirmed.** Promissum's onboarding module 2 states explicitly: "profiles, groups, threads, and even this lesson are all agents that make promises." This is Spore's holon claim — any sufficiently coherent entity can be a commitment-making agent — deployed as user-facing pedagogy, not just theory.

**Instance model confirmed.** Green Flag (dating), Promise Supply (logistics), and Oracular (investment) instantiate the same underlying protocol — SC, Merit, Trust Lanes, Assessment, Dispute — across unrelated domains without forking. One canonical protocol, multiple local instantiations. This is Spore's canon/instance architecture as a vibe-coded design intent.

**Trust tier as structural gate confirmed.** Promise Supply's Merit Heatmap (Merit ≥ 85 qualifies for critical lanes; < 75 = Restricted from critical routes) demonstrates trust tiers operating as hard procurement gates, not soft recommendations. Spore describes this; this ecosystem shows what it looks like in a high-stakes B2B context with quantified thresholds.

**Evidence as first-class object confirmed.** Promise Supply's evidence chain — pickup (TMS) → gate-out (IoT Gateway) → transit (GPS Tracker) → gate-in (WMS) → delivery (POD System), each step cryptographically hashed — demonstrates evidence as a first-class coordination object, not a retrospective add-on. The chain prevents the "your spreadsheet vs. mine" failure mode that dominates current B2B dispute resolution.

## 4. What Is Thinner in Spore

### 4a. Commitment Decay — candidate primitive

Both Promissum and Green Flag include temporal erosion of trust scores when commitments are not actively exercised:

- Green Flag /how-it-works §2: "Points decay slowly over time if you stop dating. This prevents the system from becoming a permanent credential — it should reflect how you date *now*, not a single flawless period years ago."
- Promissum governance: active proposal "Reduce SC Decay for Coaching Domain" — adjusting the decay rate for seasonal work patterns. This is a governance-level parameter, not a hardcoded constant.

Spore's current grammar does not name this dimension. A Commitment record is either active or historical — there is no concept of a trust credential that loses weight absent active maintenance. Commitment decay changes the semantics of trust tiers: "high trust" means *recently and repeatedly demonstrated*, not merely *has a strong historical record*.

**Candidate primitive:** `commitment-decay` — the rate at which a trust signal loses weight absent active re-confirmation. Implications:
- Different domains warrant different decay rates (dating decays faster than supply chain SLAs; seasonal work may warrant governance-tunable rates).
- Governance proposals can modify decay rates per domain scope (the "domain path code" pattern in Promissum).
- A trust tier is not permanent; it is a continuous maintenance obligation.

### 4b. The Verifiable / Attribute Claim Split — clarifies existing term

Green Flag draws a sharp line between two fundamentally different kinds of claims:

- **Behavioral commitments:** Observable by a date after each meeting. Earn attestation weight. Shown publicly. Falsifiable per-interaction.
- **Stable attribute signals:** Describe a party (faith, connection style, relationship structure). Cannot be confirmed per-interaction. Never scored. Algorithm-only. Never shown publicly.

The rationale is explicit: *"Attaching trust scores to unverifiable self-descriptions would corrupt the scoring system — a user could inflate their profile by selecting flattering but unverifiable attributes. Commitments earn points only because they can be checked against real experience."*

Spore's claim primitive does not currently make this distinction. A claim is a claim. But scoring integrity depends on maintaining the split: only claims that can be confirmed through observed behavior should earn attestation weight. Stable attribute claims should inform routing and context without earning score.

**Disposition on claim primitive:** clarify to distinguish `behavioral-claim` (verifiable per-interaction, earns attestation weight, appropriately public) from `attribute-claim` (stable, non-verifiable per-interaction, informs context without earning score, appropriately private).

### 4c. Hinge Risk — candidate primitive for the claims layer

Oracular's "hinge risk" concept identifies "the single weakest assumption most likely to break the investment thesis." It is specifically the claim whose falsification cascades to structural collapse, and Oracular directs evidence work toward hinge risks first rather than spreading effort evenly.

Spore's claims layer has confidence levels and contest operations, but no named concept for "the claim that is load-bearing for the whole structure." Hinge risk is a claim-level fragility score that enables prioritized evidence gathering.

**Candidate primitive:** `hinge-risk` — given a set of claims supporting a commitment or decision, the hinge-risk claim is the one whose falsification most reduces confidence in the whole structure. Identifying it before gathering evidence prevents wasted cycles on "nice to know" verification. Applicable in Spore's context to: spec DAG integrity checks, commitment pool activation decisions, protocol governance decisions.

### 4d. Domain Path Codes — no Spore equivalent (informational)

Promissum's governance proposals affect specific domain path codes: `/services/coaching/_session`, `/dating/commitments`. This scopes a governance change to a named path in the protocol's domain tree — an amendment doesn't apply globally; it applies where the path says.

Spore has spec DAGs and scope constraints, but no named mechanism for scoping a governance change to a domain path. Whether this is a gap depends on how the instance model matures. Noting for open questions rather than asserting a primitive.

### 4e. Positive-Sum Promise — useful framing (not a primitive)

Keepable's "Positive-Sum Marketing" concept: *the strongest promise lives in the overlap between what buyers want and what the seller can actually keep*. A promise that is only what buyers want (but can't be kept) is aspirational. A promise that is only what can be kept (but buyers don't want) is irrelevant. Keepability is a property distinct from desirability.

This is not a new Spore primitive, but it clarifies the commitment craftsmanship question: a good commitment is not just specific and bounded — it is specifically bounded to the intersection of what the committer can reliably do and what the recipient actually needs.

## 5. Open Questions

1. **Is commitment decay a property of the primitive or a governance parameter?** The Promissum evidence suggests the latter (governance proposals modify decay rates per domain). If so, where does the decay rate parameter live in Spore's architecture — in the commitment type definition, in the trust tier spec, or in governance rules?

2. **Should the claim primitive formally split into behavioral vs. attribute subtypes**, or should this be handled by the attestation model (behavioral claims are attestable per-interaction; attribute claims are not)? Green Flag implements this as a structural design choice, not an edge case.

3. **Does domain path scoping warrant a primitive?** Promissum's governance proposals modify behavior at named paths. Spore's instance model may need this once multiple domain applications share a protocol layer.

4. **Is hinge risk a claim property or a claims-graph property?** A single claim can be high-confidence but load-bearing (hinge risk is high because downstream claims depend on it). This may require claim dependency modeling — knowing which claims depend on which — before hinge risk is computable.

5. **David is a real practitioner** (david@promise.foundation) building concept demos. The ideas are coherent but undeployed. Worth engaging directly, especially if Spore reaches the point of needing running implementations of the instance model.

## 6. Disposition

`candidate primitive` — Commitment decay and hinge risk are concepts the current Spore grammar cannot name. The ecosystem also provides strong confirmation of relational agency, instance model, and trust tier semantics at the level of design intent, and surfaces a precision gap in the claim primitive (behavioral vs. attribute) worth formalizing.
