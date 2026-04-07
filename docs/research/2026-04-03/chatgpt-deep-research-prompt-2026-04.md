---
doc_id: spore.chatgpt-deep-research-prompt-2026-04
doc_kind: research
status: active
depends_on:
  - spore.project-vision
  - spore.roadmap
---

# ChatGPT Deep Research Prompt — Spore / Agent Commons (April 2026)

This is the prompt to run in ChatGPT Deep Research when you want a serious, web-backed report on how Spore should evolve.

## How To Use It

1. Upload the local context pack built from `scripts/build_deep_research_context_pack.sh`, or upload the files listed in [chatgpt-deep-research-context-pack-2026-04.md](./chatgpt-deep-research-context-pack-2026-04.md).
2. Paste the prompt below into ChatGPT Deep Research.
3. Ask for the full report, not a quick answer.

## Prompt

```text
You are producing a deep research report for Spore / Agent Commons.

Treat the uploaded files as the primary internal corpus. Use current web research to compare Spore against adjacent projects, standards, and theories. Your job is not to summarize everything you find. Your job is to identify what would most help Spore evolve into a more legible, adoptable, and structurally sound coordination grammar.

State the absolute date you are using for web research, and prefer recent primary or official sources when the topic is current.

Context for the project:
- Spore is a coordination grammar and pattern language for plural, sovereign coordination across scales.
- It publishes Agent Commons: governance-memory, federation, intent, commitment, evidence, discourse, and related patterns/protocols.
- It already has adjacent implementation evidence in sibling projects: bioregional commons infrastructure, personal agent workflows, knowledge graph substrate, MCP tooling, and service-layer experiments.
- Its strongest current validations are governance memory, federated knowledge exchange, commitment-pooling precursors, claims/evidence/attestation flows, personal workflow agents, and cross-project spec-DAG governance.
- Its clearest frontier gaps are external adoption, actor-level decision governance, worldview/schema translation, activation/onboarding, true federation between independent teams, and stronger formalization of viability signals and temporal dynamics.

Your core question is:
What should Spore clarify, validate, productize, formalize, or explicitly defer next?

Work in this order:

1. Read the uploaded corpus first.
Map the current state of Spore and the sibling projects.
Distinguish clearly between:
- validated patterns or working implementations
- design-level claims
- unresolved tensions
- positioning or product hypotheses

2. Build an internal synthesis.
From the uploaded corpus, identify:
- the most important structural strengths
- the most important contradictions or weak points
- where Spore is over-abstracted
- where Spore is under-specified
- where sibling projects already contain implementation evidence that Spore itself has not yet canonized well

3. Compare Spore to adjacent external work.
Use current web research and prioritize official or primary sources where possible. Compare Spore against the most relevant external bodies of work, including:
- Open Civics / OCIF
- AD4M
- Decidim
- Pol.is / computational democracy
- Model Context Protocol
- ActivityPub
- W3C Verifiable Credentials
- Cambria / local-first schema translation / bidirectional lenses
- Active Inference
- Elinor Ostrom / polycentric governance where useful
- relevant work on commitment economies, commons coordination, or translation layers when directly applicable

4. Produce a ranked evolution agenda.
Recommend the 5 to 7 highest-value bets for Spore over the next 90 days and over the next 12 to 18 months.

Do not give me a flat list of ideas. Rank them.

Each recommended bet must include:
- why it matters now
- which internal evidence supports it from the uploaded corpus
- which external precedent, contrast, or caution informs it
- what concrete artifact, experiment, or protocol draft should be produced first
- what success or falsification would look like
- what should be deferred
- a confidence level: high / medium / low

I want the report to answer these question clusters explicitly:

Adoption / Product
- What is the strongest near-term adoption wedge for Spore?
- What is the smallest surface where value becomes obvious to an external team?
- Which parts of the existing service-layer experiments are true wedges versus merely adjacent?

Governance
- What is the minimum viable proposal / decision / discourse layer Spore should define next?
- How should Spore move from artifact governance toward actor governance without overbuilding?
- Which existing systems offer useful precedents or warnings here?

Translation / Interoperability
- How should worldview-commoning or schema translation become more executable, testable, and reversible?
- Which external standards or translation models are most relevant?
- What should remain abstract, and what should become explicit protocol?

Substrate / Architecture
- Which protocol or substrate choices should Spore standardize around for now, and which should remain substrate-agnostic?
- Where should Spore interoperate with MCP, ActivityPub, VCs, local-first systems, or related infrastructure instead of inventing its own layer?
- Where would premature standardization be a mistake?

Epistemics / Viability
- What evidence or attestation model best fits cross-node commitments and claims?
- Can resilience / choice / vitality or viable-continuation signals become operational design tools?
- What would a useful first version of those signals look like?

Human / Machine Complementarity
- How should human and machine roles differ inside Spore’s grammar and adjacent implementations?
- Where does agent-type agnosticism help, and where does it hide an important design difference?

When making recommendations, optimize for:
- leverage
- falsifiability
- compatibility with the existing ecosystem
- reversible adoption
- explicit non-goals

Avoid:
- generic AI trend summaries
- ungrounded metaphysics with no design implication
- token or incentive speculation that is not tied to existing commitment-pooling evidence
- recommending a monolithic platform rewrite
- treating every sibling project as if it is the same thing as Spore

Use this output structure:

1. Executive thesis
2. Current-state map
3. Core contradictions and unresolved tensions
4. External comparisons
5. Ranked evolution agenda
6. 90-day experiments
7. Non-goals, risks, and deferrals
8. Decision table

The decision table must include these columns:
- Bet
- Why now
- Impact
- Difficulty
- Validation surface
- Suggested owner or locus
- First artifact
- Confidence

Citation requirements:
- Cite uploaded files directly by filename or path when using internal evidence.
- Cite external sources with direct URLs.
- When internal and external evidence disagree, say so explicitly.
- Do not blur design inference with direct evidence; label inference as inference.

The report should feel like a strategic research memo for a founder-steward team, not a textbook and not a brainstorm dump.
```

## Expected Outcome

The report should not just say what is interesting. It should tell you what to do next, what to leave alone, and which gaps are merely intellectual versus actually blocking adoption or validation.
