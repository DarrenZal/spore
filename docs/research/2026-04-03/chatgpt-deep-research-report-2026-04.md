# Spore / Agent Commons Deep Research Report

## Executive thesis

**Web research date:** April 4, 2026 (America/Vancouver).  
**Internal corpus used as primary:** `/mnt/data/deep-research-context-pack-2026-04-extended.md` (generated 2026-04-03), which embeds canonical excerpts from Spore + sibling projects (with `SOURCE:` boundaries).

Spore is already structurally strong where it behaves like a **portable governance-memory + trustable cross-boundary evidence layer**—and weak where it behaves like a **totalizing worldview framework without a crisp adoption wedge**. Internally, Spore’s most validated “travelable” pattern is governance-memory (spec-DAG doc governance) across multiple projects, with strong adjacent implementation evidence for federation, claims/evidence/attestation flows, and commitment pooling in BKC—and strong personal-scale workflow evidence via Dobby + Darren Workflow. Spore’s frontier gaps are consistent and explicitly named: external adoption, actor-level decision governance, worldview/schema translation, activation/onboarding, true federation between independent teams, and operational viability/temporal signals. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L369–L399 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].

**The next step is not “more theory.”** The next step is to (a) **productize a smallest-surface adoption kit that yields obvious value inside one day**, (b) **formalize the minimum viable decision/discourse layer** to move from artifact governance toward actor governance without building a full governance platform, and (c) **standardize and publish an interoperable evidence/attestation profile** that can plug into existing standards (VCs) and transports (MCP, optionally ActivityPub) instead of re-inventing those layers.

The hard strategic call is to **explicitly defer worldview-commoning as a “full protocol”** until two conditions are met: (1) a concrete, executable translation spec exists that is reversible and testable (precondition), and (2) at least one external team executes it without Spore maintainers (validation). Until then, the best move is to define the “translation seam” precisely (interfaces, artifacts, tests) while keeping worldview-commoning itself a governed pattern family “in candidate status,” consistent with internal promotion criteria. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L954–L977 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)].

**A compact thesis for the next 12–18 months:**  
Spore becomes legible and adoptable when it is experienced as:  
1) *Docs become governed + queryable in a portable way* (governance-memory wedge),  
2) *Proposals become decisions with provenance + contestability* (discourse-as-governance),  
3) *Claims become cross-boundary attestable evidence objects* (VC-aligned trust layer),  
4) *Translation becomes executable + reversible* (Cambria-style lenses + JSON-LD/SKOS constraints), and  
5) *Federation becomes real between teams* (external pilot + defined membrane profiles), not just “possible.”

## Current-state map

### What is validated as working implementations

Spore’s roadmap explicitly lists validated implementations, even if not at scale: governance memory via spec DAG across multiple projects; BKC’s 4-node bioregional federation; commitment pooling with two pools on Celo mainnet with 23+ commitments and 33,400 VCV minted; personal AI coordination via personal workflow + Dobby; and knowledge ops with 1,000+ entities across BKC nodes. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L369–L378 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].

Three “ground-truth traces” show the grammar mapping cleanly onto real systems: a store-and-forward relay pilot (Dobby mediating vault sync, with defined membrane operations like expose/translate/authorize); BKC commitment pooling (typed intents; lifecycle commitments; evidence and attestation, including on-chain anchoring); and personal workflow skill routing (meeting pipeline → entity graph → tasks). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L716–L787 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md`)].

Sibling projects materially validate Spore’s instance model (canon/node/agent/site): BKC/Octo composes canon + 4 federated nodes + agent + Quartz site; Dobby composes a personal node + agent without a site; Darren Workflow composes a “personal workflow node” with entity resolution, skill routing, and bidirectional linking patterns. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2967–L3034 (SOURCE: `/Users/darrenzal/projects/spore/docs/foundations/spore-instance-model.md`); Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3756–L3895 (SOURCE: `/Users/darrenzal/projects/dobby/docs/ARCHITECTURE.md`); Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L158–L165 & L369–L378 (SOURCE: `/Users/darrenzal/projects/spore/README.md` + `/Users/darrenzal/projects/spore/docs/roadmap.md`)].

### What is still design-level (described, not yet validated)

Spore’s own roadmap is unambiguous about what is not yet validated: multi-agent decision-making (artifact governance ≠ actor governance), true federation between sovereign nodes not maintained by the same team, external adoption by an independent team, holonic nesting beyond 2 levels, and intent publication as a formal protocol (even though BKC has a precursor pipeline). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L379–L387 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].

The decision memo’s promotion logic reinforces the same: discourse-as-governance and claims/evidence/attestation anchoring are considered promotable because they appear across multiple profiles (or have mature+emerging instances), while worldview-commoning is explicitly “too early” because there is no strong instance. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L954–L977 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)].

### Unresolved tensions (explicit, internal)

Spore’s internal bridge notes and synthesis work highlight structural tensions worth keeping visible rather than prematurely resolving:

- **Culture as separable component vs culture as pervasive layer:** Open Civics treats culture as one component of a system composition model; Spore treats ethical/ethos as pervasive across all primitives and membrane operations. This is flagged internally as a productive tension, not a bug. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3165–L3168 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/open-civics.md`)].

- **Agent-type agnosticism vs human-machine complementarity:** Spore’s grammar treats agents structurally as holons, but internal Johar bridge notes argue humans and machines contribute different kinds of knowing (humans anchor non-symbolic knowing; machines extend symbolic manipulation), implying a design-relevant distinction that Spore currently risks hiding. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3354–L3364 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/johar-word-not-thing.md`)].

- **Viability framing:** Bennett-inspired “viable continuation set” framing is attractive but internally constrained by a warning: viability alone risks “whatever persists is justified,” conflicting with Spore’s constitutional commitments (consent, plurality, contestability). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3487–L3490 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/bennett-every-timeline.md`)].

### Positioning and product hypotheses that are already emerging

A key internal signal for “adoptability vs abstraction” comes from RegenAI’s positioning memo: even in adjacent commercial contexts, terms like “membrane” and “commitment pooling” are explicitly flagged as confusing to external buyers, with suggested translations (“integration layer,” “coordinated commitments across your partner network”). That is evidence that Spore’s vocabulary may remain correct internally but needs an adoption-facing surface language that is simpler and role-based. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2528–L2539 (SOURCE: `/Users/darrenzal/projects/RegenAI/docs/positioning-memo.md`)].

Equally important: RegenAI’s memo articulates a coherent adoption wedge logic that generalizes back to Spore—**Phase 1 “membrane” work sells only when attached to a concrete translation/coordination job**; “build a knowledge graph” is not a compelling standalone pitch. Spore should treat this as an adoption lesson: make Tier-0 value obvious via a job-to-be-done, not via architecture purity. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2560–L2569 (SOURCE: `/Users/darrenzal/projects/RegenAI/docs/positioning-memo.md`)].

## Core contradictions and unresolved tensions

Spore’s internal corpus is unusually good at naming its own gaps. The asterisk is that several gaps are downstream of a single core contradiction: **Spore is architected as “incremental and reversible adoption”** (“you do not migrate into Spore as a platform”), yet the current adoption guide’s reference path assumes a relatively heavyweight substrate setup (Postgres + koi-processor + running API) before an external team experiences value. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L122–L132 (SOURCE: `/Users/darrenzal/projects/spore/README.md`); Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2764–L2776 (SOURCE: `/Users/darrenzal/projects/spore/docs/governance/adoption-guide.md`)].

That contradiction expresses as five actionable tensions:

**Over-abstracted where adoption needs concreteness**
- “Worldview grammar” is a correct internal framing (Spore explicitly encodes ontological/epistemological/axiological/praxical/ethical layers), but it can read like a total framework rather than a portable coordination grammar unless paired with a minimal “day-one” workflow. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L509–L519 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md`)].
- Internal evidence already shows vocabulary friction in adjacent market conversations (e.g., “membrane” and “commitment pooling” as confusing terms). Treat this as product feedback. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2528–L2539 (SOURCE: `/Users/darrenzal/projects/RegenAI/docs/positioning-memo.md`)].

**Under-specified where structural legitimacy is required**
- Spore explicitly lacks validated multi-agent decision-making; it governs artifacts rather than actors. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L379–L383 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].
- Spore’s roadmap already sketches an approach (proposal lifecycle + decision records; authority and domain declarations; audit trail), but this is still a plan rather than a shipped protocol/pattern with tests. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L400–L409 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].

**Validated in siblings, not yet canonized in Spore-as-a-kit**
- The decision memo recommends promoting store-and-forward relay, discourse-as-governance, and a claims/evidence/attestation anchoring protocol to Spore core because they already show multi-project evidence or mature+emerging instances. The problem: “promotion” remains largely documental; it has not yet been converted into a minimal adoption profile outsiders can run end-to-end. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L954–L961 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)].

**Translation is simultaneously central and premature**
- Track 4 explicitly points toward executable ontology/schema mapping inspired by Cambria-style translation layers, with governance review over LLM-proposed correspondences. But internal policy correctly prevents premature promotion of worldview-commoning without a strong instance. The tension is: translation must become executable to unlock adoption/federation, yet “worldview-commoning” should remain candidate until execution exists. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L420–L437 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`); Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L971–L977 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)].

**Temporal dynamics are acknowledged but not yet operational**
- Bennett-inspired candidate viability signals (repair debt, ecological thresholds, burnout, conflict load, unused capacity) are explicitly framed as “roadmap exploration,” not canon. As a result, Spore lacks an operational viability dashboard that could guide governance and adoption in a falsifiable way. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3491–L3505 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/bennett-every-timeline.md`)].

## External comparisons

This section prioritizes **what most helps Spore become legible, adoptable, and structurally sound**, not broad summaries.

**Open Civics and OCIF (Open Civic Innovation Framework)**  
Open Civics is structurally adjacent to Spore but operates at a different register: a civic worldview + practice framework, with “health indicators” (resilience/choice/vitality) explicitly used as diagnostic lenses. The OpenCivics thesis (“Towards an Open Civics”) is published as a living wiki artifact. Spore’s internal bridge note already treats Open Civics as doc-rich but implementation-thin and highlights a key win: Spore’s membrane operations fill Open Civics’ “boundary-crossing gap.” [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3095–L3114 & L3170–L3214 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/open-civics.md`); External: `https://wiki.opencivics.co/OpenCivics%2BThesis/Full%2BThesis` citeturn7search2.  
**Spore implication:** treat Open Civics as (1) a likely first external adoption surface for governance-memory, and (2) a proven “legibility wrapper” for viability signals (R/C/V) rather than building a bespoke viability vocabulary first. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3160–L3164 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/open-civics.md`)].

*Important ambiguity warning:* the acronym **OCIF** is also widely used for unrelated programs (e.g., Ontario Community Infrastructure Fund). If Spore references “OCIF,” it should always expand it as “Open Civic Innovation Framework” to prevent external confusion. (Example of the unrelated acronym collision: `https://open.canada.ca/data/en/dataset/eed50a25-7893-420d-a723-da94cf406029` citeturn7search4.)

**Decidim (participatory democracy platform + governance-of-the-platform)**  
Decidim is a mature precedent for actor-facing governance flows: it provides participation “spaces” (assemblies/processes/initiatives) and modular “components” such as proposals, meetings, surveys, participatory budgets, and accountability features, with extensive public documentation and an open-source codebase. `https://github.com/decidim/decidim` citeturn5search14. Decidim also has an explicit community “social contract” (code of democratic guarantees) as a binding normative layer for users and contributors. `https://docs.decidim.org/en/develop/understand/social-contract.html` citeturn5search2.  
**Spore implication:** Decidim is direct precedent for Spore’s “actor governance” frontier, but also a caution: Decidim’s value becomes obvious because it is *a productized surface*, not because its conceptual primitives are elegant. Spore should not emulate Decidim’s platform scope; instead, it should emulate Decidim’s **minimum viable participatory objects** (proposal → deliberation → decision record) and its **explicit normative guarantees** (contestability, transparency) in the lightest possible protocol/docs-first form.

**Pol.is / Computational Democracy (sensemaking at scale, not decisions)**  
The Computational Democracy Project frames Polis as open source infrastructure for gathering and understanding what large groups think. `https://compdemocracy.org/` citeturn6search3; `https://github.com/compdemocracy/polis` citeturn6search9. Crucially, their algorithms documentation emphasizes that Polis’ ML operates on the *opinion matrix* (agree/disagree/pass) rather than NLP, making it language-agnostic; it uses dimensionality reduction (e.g., PCA/UMAP) and clustering methods. `https://compdemocracy.org/algorithms/` citeturn5search1.  
**Spore implication:** Polis is a strong external precedent for **the “Interpret / Claim / Discourse” part of Spore’s loop**, but it does not yield binding decisions by itself. Spore should treat Polis-like machinery as an optional **discourse sensor** feeding the discourse graph, not as the governance layer. This is also a warning: if Spore tries to collapse sensemaking and decision into one object too early, it will blur witness/attestation and consent.

**Model Context Protocol (MCP) as the de-facto tool/data connector layer**  
MCP’s current spec (latest version 2025-11-25) defines an open protocol using JSON-RPC 2.0, with “Hosts / Clients / Servers,” capability negotiation, and features like Resources, Prompts, Tools, plus safety principles emphasizing user consent, privacy, and tool safety. `https://modelcontextprotocol.io/specification/latest` citeturn2view0.  
**Spore implication:** Spore should standardize around MCP *as its default integration layer for agents to access node capabilities*, because Spore already has strong adjacent evidence using MCP heavily (personal-koi-mcp, Dobby, Darren Workflow). This is the cleanest way to avoid inventing yet another connector protocol. It also supports reversible adoption: a team can adopt governance-memory docs-first, then optionally add “MCP-accessible node services” later.

**ActivityPub + ActivityStreams: interoperability for federated “events” and objects**  
ActivityPub is a W3C Recommendation for decentralized networking using ActivityStreams 2.0, providing client-to-server and server-to-server federation APIs. `https://www.w3.org/TR/activitypub/` citeturn0search2. ActivityStreams 2.0 provides a JSON vocabulary, is compatible with JSON-LD, and includes explicit notions like an “Undo” activity type (a native affordance for reversibility). `https://www.w3.org/TR/activitystreams-core/` citeturn5search3.  
**Spore implication:** ActivityPub is not “Spore’s federation.” But it may be a strategic interoperability layer for a public membrane and for cross-project event exchange where the ecosystem already speaks ActivityPub. The warning: ActivityPub brings social-web complexity and threat models; Spore should treat it as an *optional transport mapping* for certain event types rather than standardizing on it prematurely.

**W3C Verifiable Credentials: the strongest external precedent for claims/attestation portability**  
VC Data Model v2.0 describes an extensible data model for “verifiable credentials,” including an issuer/holder/verifier ecosystem and security/privacy considerations. `https://www.w3.org/TR/vc-data-model-2.0/` citeturn0search1.  
**Spore implication:** VC is the best adjacent standard for making Spore’s claims/evidence/attestation flows legible outside Spore. Spore should not invent its own credential envelope if it wants interoperability; it should define a Spore profile over VC for: (a) claims about commitments and fulfillment evidence, (b) attestations as second-order claims, and (c) revocations/updates as events.

**Cambria + local-first + bidirectional lenses: the best external precedent for executable, reversible translation**  
Ink & Switch’s “Project Cambria” frames schema evolution in distributed systems as a translation graph connected by **bidirectional lenses** that can run forward/backward. `https://www.inkandswitch.com/cambria/` citeturn3search3. The open-source Cambria project describes lenses that can translate whole documents and JSON Patches bidirectionally. `https://github.com/inkandswitch/cambria-project` citeturn3search7.  
Cambria sits inside the broader “local-first software” stance: users own data, systems work offline, collaboration happens without surrendering control. `https://www.inkandswitch.com/essay/local-first/` citeturn8search3.  
**Spore implication:** this is directly aligned with Spore’s “common core, local variation” plus translation commitments. Spore should adopt Cambria-like lens thinking as the basis of executable worldview/schema translation, because it makes translation *testable and reversible*—two properties Spore explicitly needs to avoid “flattening difference.”

Complementary standards for the translation seam:
- JSON-LD 1.1 (semantic contexts within JSON) should remain a primary option for shared meaning layers. `https://www.w3.org/TR/json-ld11/` citeturn4search3.
- SKOS can represent vocabulary mappings without forcing ontology unification. `https://www.w3.org/TR/skos-reference/` citeturn8search0.
- SHACL provides a schema/constraint validation layer for RDF graphs, useful when Spore needs “profile conformance” checks. `https://www.w3.org/TR/shacl/` citeturn8search1.

**Ostrom / polycentric governance for actor governance boundaries**  
Ostrom’s work on polycentric governance emphasizes the study and design of multi-scale institutional arrangements beyond simple “market vs state” dichotomies. (Canonical reference: “Beyond Markets and States: Polycentric Governance of Complex Economic Systems.”) `https://web.pdx.edu/~nwallace/EHP/OstromPolyGov.pdf` citeturn4search1.  
**Spore implication:** Spore’s “holonic containment + network overlap → semilattice” framing is already internally aligned with polycentricity; the open problem is operational: how to declare, contest, and revise authority scopes (membranes/domains) without centralization. Decidim shows one implementation form; Ostrom provides the conceptual grounding for why “multiple centers of authority with coordination rules” is not a failure mode but a design target.

**Commitment pooling and commons coordination at scale (Grassroots Economics)**  
Grassroots Economics explicitly positions “commitment pooling” as a way to exchange community asset vouchers representing commitments, and states that it is live and usable on Sarafu.Network. `https://grassrootseconomics.org/` citeturn4search2.  
**Spore implication:** this is external precedent that commitment economies are not purely theoretical. However, commitment pooling is not a near-term adoption wedge for Spore broadly; it is a deeper integration layer that should be offered as an advanced profile once governance-memory + claims/evidence + decision governance are legible.

## Ranked evolution agenda

Below are **six ranked bets** (not a flat list). Each is scoped to (a) a first artifact within **90 days**, and (b) how it expands over **12–18 months**.

### Bet one: Ship a “Tier-0 in a day” governance-memory adoption kit

**Why it matters now**  
External adoption is explicitly the top frontier gap: Spore’s own success signal is “someone runs `ingest_spec_dag.py` on their project, or builds a sensor node… without hand-holding.” [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L388–L399 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)]. Governance-memory is also the most validated, cross-project pattern (multiple projects already run spec-DAG governance). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L373–L374 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].

**Internal evidence that supports it**  
Spore’s README frames adoption as incremental and reversible, via adding coordination surfaces like frontmatter and sensor nodes—not platform migration. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L122–L132 (SOURCE: `/Users/darrenzal/projects/spore/README.md`)]. The adoption guide provides a concrete Tier-0 scaffold (`docs/_meta/project.json` + `docs/project-vision.md`) and an ingest/validate workflow. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2777–L2861 (SOURCE: `/Users/darrenzal/projects/spore/docs/governance/adoption-guide.md`)].

**External precedent / contrast / caution**  
The caution is Decidim: adoption becomes obvious because there is a simple user-facing “thing you can do” (submit proposals, participate in processes), supported by a product surface. `https://decidim.org/` citeturn6search1. Spore should not copy Decidim’s platform scope, but it should copy the “obvious day-one use” principle. Also, MCP suggests a standard connector interface Spore can lean on instead of inventing integration UX. `https://modelcontextprotocol.io/specification/latest` citeturn2view0.

**First artifact to produce**  
A **zero-infra (docs-only) Tier-0 kit** that does *not* require Postgres or koi-processor to feel value:
- A repo template with `project.json`, `project-vision.md`, and a preconfigured GitHub Action (or pre-commit) that validates frontmatter + DAG acyclicity.
- A CLI that outputs:
  - “Spec DAG graph” (rendered + JSON)
  - “Impact / reverse-dependency view” locally (even with no DB)
  - A “project briefing context pack” file for agents (mirroring the current API endpoints in the adoption guide but generated locally first). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2852–L2858 (SOURCE: `/Users/darrenzal/projects/spore/docs/governance/adoption-guide.md`)].

**Success / falsification**  
Success = an independent team adopts Tier-0 and uses it to govern docs in their own repo, submitting at least one PR that changes their spec DAG because the validation surfaced an issue.  
Falsification = teams run the kit but do not keep it turned on after week one, or it fails to integrate with their existing doc workflow and becomes “one more governance chore.”

**What should be deferred**  
- Hosted/SaaS node offerings (explicitly optional in roadmap, and heavy for 90 days). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L394–L397 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].  
- Any attempt to standardize on KOI as required substrate (Spore’s own instance model says the grammar doesn’t mandate a substrate). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2977–L2980 (SOURCE: `/Users/darrenzal/projects/spore/docs/foundations/spore-instance-model.md`)].

**Confidence**: **High** (strong internal validation + clear scoping + direct tie to stated success criteria).

---

### Bet two: Formalize “discourse-as-governance” into a minimum viable proposal/decision layer

**Why it matters now**  
Spore explicitly names the gap: “multi-agent decision-making (current system governs artifacts, not actors)” is not yet validated. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L379–L383 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)]. Meanwhile, the decision memo recommends promoting discourse-as-governance to Spore core because it appears across Spore, BKC, and DW. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L958–L960 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)].

**Internal evidence that supports it**  
Spore’s roadmap already outlines an incremental governance model: Phase A = proposal lifecycle + decision records, with new `doc_kind` candidates `proposal` and `decision`, and explicit states (draft → open → accepted/rejected). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L400–L406 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)]. Darren Workflow already contains a working decision-quality “gate” pattern in `/review-plan`: questions gate, must-fix gate, explicit deferrals, and artifacts emitted for review. That is a portable governance pattern hiding in plain sight. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3561–L3598 (SOURCE: `/Users/darrenzal/projects/darren-workflow/docs/plan-review-workflow.md`)].

**External precedent / contrast / caution**  
Decidim provides a mature pattern library for proposals, debates, meetings, and accountability; it also codifies democratic guarantees in a “social contract.” `https://docs.decidim.org/en/develop/understand/social-contract.html` citeturn5search2. The warning is Polis: it excels at structured large-scale sensemaking, but it is not a decision system; Spore must keep “sensemaking” and “decision authority” distinct. `https://compdemocracy.org/algorithms/` citeturn5search1.

**First artifact to produce**  
A **Discourse Graph v0** spec + templates, implemented docs-first:
- Canonize `doc_kind: proposal` and `doc_kind: decision` in Spore’s governance memory taxonomy, with required frontmatter fields:
  - proposals: `proposes_changes_to: [spec:...]`, `status: draft|open|accepted|rejected|superseded`, `decision_method`, `review_window`, `stakeholders`
  - decisions: `decides_on: proposal_id`, `outcome`, `consents`, `objections`, `resolution`, `supersedes`
- A minimal “proposal lifecycle checker” that ensures link integrity (proposal ↔ decision ↔ affected specs), similar to current spec DAG validation logic.
- A “discourse intake” mapping for Polis-like inputs as optional evidence objects (not required).

**Success / falsification**  
Success = Spore uses the system to govern itself: at least 3 real proposals go through open → decision, and the resulting decisions automatically update or deprecate referenced artifacts in the spec DAG.  
Falsification = the proposal/decision objects become ceremonial (decisions made elsewhere), or the system becomes too heavy to use in small teams.

**What should be deferred**  
- Full sociocratic implementations or a complex on-chain governance system (explicit non-goal internally). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L489–L495 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].  
- Large-scale deliberation UI (leave to Decidim/Polis integrations).

**Confidence**: **Medium–High** (strong multi-project precursor evidence; risk is over-engineering).

---

### Bet three: Publish a VC-aligned claims/evidence/attestation profile as Spore’s cross-node trust layer

**Why it matters now**  
Spore’s strongest current validations include claims/evidence/attestation flows and commitment-pooling precursors; internal promotion recommends “claims, evidence & attestation anchoring” as a core protocol. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L959–L961 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)]. Without a portable trust layer, true federation between independent teams will remain blocked even if transport works.

**Internal evidence that supports it**  
Personal KOI MCP already exposes a “Claims Engine” with explicit verification states (`self_reported → peer_reviewed → verified → ledger_anchored`) and tools to link evidence and anchor claims. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2361–L2373 (SOURCE: `/Users/darrenzal/projects/personal-koi-mcp/README.md`)]. Spore’s coordination grammar defines claim lifecycle and attestation as first-class primitives and relations, and BKC traces include on-chain anchoring as attestation evidence. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L618–L623 & L748–L759 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md`)].

**External precedent / contrast / caution**  
W3C VC Data Model v2.0 is explicitly designed to express cryptographically verifiable claims with issuers/holders/verifiers, including privacy and security considerations. `https://www.w3.org/TR/vc-data-model-2.0/` citeturn0search1.  
Caution: VC ecosystems can become implementation-heavy; Spore should define a minimal interoperable profile and make cryptography optional at first (e.g., allow unsigned “attestation statements” inside a governed scope, then graduate to signed VCs when needed).

**First artifact to produce**  
A **Spore Evidence & Attestation Profile (SEAP v0)**:
- A mapping document: Spore primitives → VC constructs (Claim → VC credentialSubject; Attestation → VC issuer statement about a claim/evidence URI; Evidence → referenced artifact hash/URI; Revocation/contest → status + event links).
- A canonical JSON(-LD) envelope for “Claim Record” that can be embedded into VC or stored as plain JSON with the same fields.
- A conformance test suite with 10 example objects: fulfillment evidence, dispute, supersession, and cross-node attestation.

**Success / falsification**  
Success = two independent nodes exchange at least one claim + evidence + attestation bundle, verify it end-to-end, and use it to update a commitment’s fulfillment status without manual reconciliation.  
Falsification = the profile is too abstract to implement, or teams choose existing alternatives and ignore Spore’s profile because it is not VC-compatible.

**What should be deferred**  
- Mandating blockchain anchoring; internal BKC vision explicitly says “not a blockchain” and uses on-chain anchoring as proof-of-existence, not the core database. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L200–L211 (SOURCE: `/Users/darrenzal/projects/BioregionKnwoledgeCommons/BioregionalKnowledgeCommoning/docs/project-vision.md`)].  
- Complex reputation scoring systems.

**Confidence**: **High** (clear internal precursor + strongest external standard match).

---

### Bet four: Run one true federation pilot with an independent team, and publish “membrane profile” reference implementations

**Why it matters now**  
Spore explicitly lists “true federation between sovereign nodes not maintained by the same team” as not yet validated. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L381–L383 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)]. Without this proof, Spore remains a coherent internal pattern language with unproven portability.

**Internal evidence that supports it**  
Store-and-forward relay is validated in a pilot (though Shawn-side validation is pending), and is recommended for promotion as a core protocol. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L718–L743 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md`); Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L954–L960 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)].  
Personal KOI MCP already has explicit federation-sharing tools (`share_document` to peer or commons, including `context_pack` mode). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2286–L2310 (SOURCE: `/Users/darrenzal/projects/personal-koi-mcp/README.md`)].

**External precedent / contrast / caution**  
ActivityPub is the dominant existing federation protocol in its domain; it shows federation can scale when object formats and delivery APIs are standardized. `https://www.w3.org/TR/activitypub/` citeturn0search2.  
Caution: ActivityPub’s norms and threat models differ (spam, harassment, moderation). Spore should not treat ActivityPub as its default federation but can use it as a transport mapping for some events.

**First artifact to produce**  
A **Federation Pilot Pack** consisting of:
- A documented **membrane profile**: “Bilateral Knowledge Exchange (BKX-1)” describing:
  - expose/authorize/translate/attest operations exercised
  - what is shared (artifact types), who attests, who can use how (echoing BKC’s invariant triad as proof it works) [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L470–L479 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md`)].
- A single external partner target: **OpenCivics** is a strategically aligned candidate because Spore is already in active comparative dialogue and because OC is positioned as a potential adoption surface in Spore’s internal bridge note. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3223–L3237 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/open-civics.md`); External: `https://www.opencivics.co/` citeturn3search2.  
- A transport-agnostic event set: minimal domain events for “spec update / claim attested / proposal opened,” delivered either via existing KOI mechanisms *or* a thin ActivityStreams mapping for public membrane tests.

**Success / falsification**  
Success = OpenCivics (or another independent team) runs a node that exchanges at least:  
1) a governed spec artifact,  
2) a claim/evidence/attestation bundle, and  
3) a decision record reference—without sharing full databases.  
Falsification = federation requires continuous maintainer intervention, or “federation” collapses into manual file exchange.

**What should be deferred**  
- Multi-party federation topologies and complex routing policies until one bilateral pilot is clean.  
- Any attempt to standardize the entire transport layer beyond minimal invariants (Spore’s instance model explicitly keeps substrate flexible). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2977–L2980 (SOURCE: `/Users/darrenzal/projects/spore/docs/foundations/spore-instance-model.md`)].

**Confidence**: **Medium** (high leverage, but dependent on external partner follow-through).

---

### Bet five: Make translation executable with a reversible “lens” spec and conformance tests

**Why it matters now**  
Worldview/schema translation is explicitly listed as a frontier gap; Track 4 already points to executable translation specs inspired by Cambria. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L420–L437 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)]. Without executable translation, Spore’s “pluralism with interoperability” remains principally true but operationally hard.

**Internal evidence that supports it**  
Spore’s grammar formalizes `translate` as a membrane operation governed to preserve source ontology while enabling cross-membrane legibility. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L596–L608 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/coordination-grammar.md`)].  
Internal decision memo correctly defers worldview-commoning as a promoted pattern due to lack of a strong instance, but that is exactly why translation should first become executable and testable. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L971–L976 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)].

**External precedent / contrast / caution**  
Cambria’s bidirectional lenses are the closest direct precedent for Spore’s “reversible adoption + negotiated translation” goals. `https://www.inkandswitch.com/cambria/` citeturn3search3. This aligns with local-first principles (ownership + offline + collaboration). `https://www.inkandswitch.com/essay/local-first/` citeturn8search3.  
Caution: translation proliferates complexity quickly; Spore must avoid becoming an ontology-unification project. SKOS offers a minimal mapping vocabulary that can support “bridge, not flatten.” `https://www.w3.org/TR/skos-reference/` citeturn8search0.

**First artifact to produce**  
A **Spore Translation Manifest (STM v0)** with:
- A declarative mapping format for “local schema ↔ shared profile fields,” explicitly bidirectional where possible (lens-like), plus allowed lossiness declarations.
- A minimal conformance suite:
  - round-trip tests (A→B→A yields equivalence where declared),
  - patch translation tests (edit propagation),
  - and “attested translation” objects (who approved the mapping, when, under what scope).

**Success / falsification**  
Success = STM v0 is used to map **one real external schema** into Spore’s governance-memory + claim objects, and round-trip tests pass with declared losses.  
Falsification = translation manifests are produced but not executed, or require constant bespoke code changes (non-reusable).

**What should be deferred**  
- Full worldview-commoning across all five worldview layers as a standardized protocol. Keep it as a candidate pattern family until STM is proven and adopted. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L971–L976 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)].

**Confidence**: **Medium** (high relevance and strong external precedent; risk is scope creep).

---

### Bet six: Operationalize viability as a thin, falsifiable “health” layer over events and commitments

**Why it matters now**  
Spore explicitly wants stronger formalization of viability signals and temporal dynamics, but currently keeps these as candidate signals. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3491–L3505 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/bennett-every-timeline.md`)]. Without a first operational version, Spore will struggle to justify design choices and will remain vulnerable to “beautiful abstraction” critiques (including Johar’s “linguistic closure” risk). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3330–L3345 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/johar-word-not-thing.md`)].

**Internal evidence that supports it**  
An internal bridge note already proposes candidate viability signals (repair debt, ecological thresholds, burnout, conflict load, unused capacity) and frames them as persistence-reducing conditions. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3491–L3505 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/bennett-every-timeline.md`)]. The Open Civics bridge note suggests resilience/choice/vitality as a legibility layer over these signals. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3160–L3164 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/open-civics.md`)].

**External precedent / contrast / caution**  
Open Civics explicitly uses “health indicators” (resilience/choice/vitality) as a civic diagnostic frame. `https://wiki.opencivics.co/OpenCivics%2BThesis/Full%2BThesis` citeturn7search2. Active inference literature provides deeper formal grounding for “action as inference” and planning under uncertainty, but it’s too early to treat it as an engineering spec for Spore. `https://discovery.ucl.ac.uk/id/eprint/10082773/1/Parr-Friston2019_Article_GeneralisedFreeEnergyAndActive.pdf` citeturn4search12.

**First artifact to produce**  
A **Viability Signals v0 dashboard spec** that is deliberately minimal:
- Define the three top-level indicators:
  - **Resilience** (repair debt + breach/dispute backlog + recovery time),
  - **Choice** (forkability exercised + authorization diversity + dependency concentration),
  - **Vitality** (unused capacity + intent flow + commitment activation rate).
- Define them as computed projections over existing objects (commitments, attestations, events) rather than new primitives.

**Success / falsification**  
Success = the dashboard predicts or explains at least one real coordination outcome (e.g., stalling due to conflict load, or burnout due to capacity strain) and is used in one decision record to justify a revision.  
Falsification = the signals are always post-hoc story generators and do not change decisions or behavior.

**What should be deferred**  
- Attempting to fully formalize Bennett’s or Friston’s frameworks into canonical Spore math. Keep them as comparative intakes until operational signals work. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3474–L3476 & L3520–L3523 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/bennett-every-timeline.md`)].

**Confidence**: **Low–Medium** (high leverage if it works; risk of premature quantification).

## 90-day experiments

These are designed to maximize leverage, falsifiability, ecosystem compatibility, and reversible adoption.

**Experiment A: “Tier-0 in a day” external adoption trial**  
Run the docs-only kit in an external partner repo (OpenCivics is the best aligned candidate surfaced by Spore’s own bridge note). Success = they keep the validator turned on and produce one real spec DAG refactor because of it. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3223–L3237 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/open-civics.md`); External: `https://www.opencivics.co/` citeturn3search2.]

**Experiment B: Spore self-governance through 3 proposals → decisions**  
Implement proposal/decision doc kinds, then run three decisions through the workflow (including at least one contested decision) to validate contestability and revision links. Use DW’s “gates + explicit deferral” pattern as the quality bar for discourse outputs. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L400–L406 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`); Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3563–L3587 (SOURCE: `/Users/darrenzal/projects/darren-workflow/docs/plan-review-workflow.md`)].

**Experiment C: VC-aligned claim bundle exchange between two nodes**  
Issue a claim + evidence bundle using the “Claims Engine” verification lifecycle, export it as a VC-aligned object, and have a second node verify/attest it. Success = end-to-end verification updates commitment status without manual reconciliation. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2365–L2372 (SOURCE: `/Users/darrenzal/projects/personal-koi-mcp/README.md`); External: `https://www.w3.org/TR/vc-data-model-2.0/` citeturn0search1.]

**Experiment D: Lens-based translation round-trip**  
Pick one real schema translation (e.g., an external project’s “decision record schema” → Spore’s decision doc kind; or a “claim record” → SEAP profile) and implement STM v0 with round-trip tests. Success = A→B→A round-trip holds under declared losses. [External: `https://www.inkandswitch.com/cambria/` citeturn3search3.]

**Experiment E: Viability dashboard predicts a governance intervention**  
Compute R/C/V indicators for one live context (BKC commitment pool state or Spore’s own governance activity). Make one decision (explicitly recorded as a decision artifact) that cites the signals and predicts an outcome. Success = outcome tracking shows predictive value rather than post-hoc rationalization. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3491–L3505 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/bennett-every-timeline.md`)].

## Non-goals, risks, and deferrals

**Non-goals to keep explicit (reinforced by internal corpus)**  
Spore should continue to avoid becoming a general-purpose runtime platform; it publishes patterns/protocols and uses reference instances only as validation surfaces. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L491–L495 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].  
It should continue to avoid forced ontology unification (“translate, don’t unify”) and token/incentive speculation untethered to real commitment pooling evidence. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L493–L495 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].

**Key risks**
- **Linguistic closure / sufficiency error:** Spore’s own terminology can become “stopping rules” if the adoption surface does not translate concepts into executable artifacts fast enough. This risk is explicitly named in internal Johar synthesis. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3330–L3345 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/johar-word-not-thing.md`)].
- **Over-tight coupling to a reference substrate:** Internally, Spore holds the correct stance (“KOI as one substrate, not the definition”), but adoption materials still implicitly center koi-processor. This is a product risk more than an architectural risk. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L2977–L2980 (SOURCE: `/Users/darrenzal/projects/spore/docs/foundations/spore-instance-model.md`)].
- **Premature standardization:** Locking into ActivityPub semantics or into a single ledger anchoring approach too early could constrain future portability. ActivityPub can be a mapping/transport, not the core. `https://www.w3.org/TR/activitypub/` citeturn0search2.
- **Quantification trap in viability signals:** Viability signals can degrade into “dashboards that justify decisions” instead of design tools that change decisions. Keep v0 thin, auditable, and tied to causal hypotheses.

**Explicit deferrals**
- Full formal worldview-commoning protocol (keep as candidate pattern family until executable translation manifests are adopted). [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L971–L976 (SOURCE: `/Users/darrenzal/projects/spore/docs/synthesis/decision-memo.md`)].
- Multi-hop, multi-party federation or advanced routing governance until one bilateral federation pilot with an independent team succeeds. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L381–L383 (SOURCE: `/Users/darrenzal/projects/spore/docs/roadmap.md`)].
- Turning active inference or Bennett’s Stack Theory into canonical Spore formalism before operational signals exist. [Internal: `/mnt/data/deep-research-context-pack-2026-04-extended.md` L3474–L3476 & L3520–L3523 (SOURCE: `/Users/darrenzal/projects/spore/docs/research/connections/bennett-every-timeline.md`); External: `https://discovery.ucl.ac.uk/id/eprint/10082773/1/Parr-Friston2019_Article_GeneralisedFreeEnergyAndActive.pdf` citeturn4search12.]

## Decision table

| Bet | Why now | Impact | Difficulty | Validation surface | Suggested owner or locus | First artifact | Confidence |
|---|---|---|---|---|---|---|---|
| Tier-0 in a day governance-memory kit | External adoption is the top gap; governance-memory is most validated and already has a concrete scaffold | High (creates immediate adoption wedge + makes Spore legible) | Medium | External team can run it in their repo; success is measurable | Spore canon (pattern authority) + lightweight tooling | Docs-only validator + repo template + local briefing/context-pack generator | High |
| Minimum viable discourse-as-governance | Actor governance is not validated; proposal/decision is Phase A in roadmap; discourse-as-governance is promotable | High | Medium–High | Spore self-governance (3 proposals → decisions) | Spore canon + DW pattern reuse | `proposal`/`decision` doc kinds + lifecycle checker + discourse graph projection | Medium–High |
| VC-aligned claims/evidence/attestation profile | Trust layer blocks federation; internal claims engine exists; strong standard alignment | High | Medium | Two nodes exchange a claim bundle and verify it | Spore protocol layer + personal-koi-mcp/KOI reference implementers | SEAP v0 mapping + envelope + conformance tests | High |
| True federation pilot with independent team | Federation between independent teams is explicitly unvalidated; highest leverage validation | High | High | One bilateral cross-org membrane profile | Spore core + partner node (e.g., OpenCivics) | Federation Pilot Pack + BKX-1 membrane profile + event subset | Medium |
| Executable translation manifest with reversible lenses | Translation is core frontier; needs to become testable and reversible | Medium–High | High | Round-trip translation tests on real schemas | Spore translation track + implementer in KOI/MCP toolchain | STM v0 + lens spec + conformance tests | Medium |
| Viability signals health layer | Needed for falsifiability and temporal dynamics; aligns with Open Civics health indicators | Medium | Medium | Decision records that cite signals + outcome tracking | Spore research/pattern maturity track | R/C/V computed projection spec + v0 dashboard prototype | Low–Medium |

## References

1. [Full Thesis - OpenCivics Wiki](https://wiki.opencivics.co/OpenCivics%2BThesis/Full%2BThesis)
2. [Ontario Community Infrastructure Fund recipients - Open Government](https://open.canada.ca/data/en/dataset/eed50a25-7893-420d-a723-da94cf406029)
3. [GitHub - decidim/decidim: The participatory democracy framework](https://github.com/decidim/decidim)
4. [Decidim's Social Contract :: Decidim Docs](https://docs.decidim.org/en/develop/understand/social-contract.html)
5. [The Computational Democracy Project](https://compdemocracy.org/)
6. [GitHub - compdemocracy/polis: Open Source AI for large group deliberation](https://github.com/compdemocracy/polis)
7. [The Computational Democracy Project - Algorithms](https://compdemocracy.org/algorithms/)
8. [Specification - Model Context Protocol](https://modelcontextprotocol.io/specification/latest)
9. [ActivityPub - World Wide Web Consortium (W3C)](https://www.w3.org/TR/activitypub/)
10. [Activity Streams 2.0 - World Wide Web Consortium (W3C)](https://www.w3.org/TR/activitystreams-core/)
11. [Verifiable Credentials Data Model v2.0 - World Wide Web Consortium (W3C)](https://www.w3.org/TR/vc-data-model-2.0/)
12. [Project Cambria: Translate your data with lenses](https://www.inkandswitch.com/cambria/)
13. [GitHub - inkandswitch/cambria-project: Schema evolution with bidirectional lenses](https://github.com/inkandswitch/cambria-project)
14. [Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/)
15. [JSON-LD 1.1 - World Wide Web Consortium (W3C)](https://www.w3.org/TR/json-ld11/)
16. [SKOS Simple Knowledge Organization System Reference](https://www.w3.org/TR/skos-reference/)
17. [Shapes Constraint Language (SHACL) - World Wide Web Consortium (W3C)](https://www.w3.org/TR/shacl/)
18. [Beyond Markets and States: Polycentric Governance of Complex Economic Systems](https://web.pdx.edu/~nwallace/EHP/OstromPolyGov.pdf)
19. [Grassroots Economics — Community-Powered Economies](https://grassrootseconomics.org/)
20. [Decidim](https://decidim.org/)
21. [OpenCivics](https://www.opencivics.co/)
22. [Generalised free energy and active inference - University College London](https://discovery.ucl.ac.uk/id/eprint/10082773/1/Parr-Friston2019_Article_GeneralisedFreeEnergyAndActive.pdf)