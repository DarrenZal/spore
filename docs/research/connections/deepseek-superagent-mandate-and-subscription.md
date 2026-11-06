---
doc_id: spore.connection.deepseek-superagent-mandate-and-subscription
doc_kind: research
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.connection.omnara-approval-by-presence
  - spore.connection.claude-code-membrane-control
  - spore.connection.hermes-agent-adversarial-self-trust
  - spore.federation-protocol
sources:
  - url: https://github.com/deepseek-ai/dsh-superagent-prototype/tree/8c32a9dc5d72c033816c6a8110b37f40cf94fba4
    title: "dsh-superagent-prototype (pinned tree, 2026-10-31)"
    type: primary
    commit: 8c32a9dc5d72c033816c6a8110b37f40cf94fba4
  - url: https://x.com/DeepSeekHarness/status/2116857257245987236
    title: "Exploring Super-agent Design: Towards a More Autonomous Agent System (DeepSeek Harness team, 2026-11-01, machine translation from Chinese)"
    type: primary
    content_sha256: e3fd58f110711c72870821533cbb45d0d1c98a5a20e72d15a704ef78ba51d06e
disposition: clarify existing term
research_subkind: bridge_note
concepts:
  - double-boundary
  - permeability
  - asymmetric-membrane
  - stigmergy
---

# Bridge Note: DeepSeek Super-agent — Mandate and Subscription

**Sources:** `deepseek-ai/dsh-superagent-prototype` at `8c32a9dc` (MIT) and the Super-agent design article (2026-11-01), both observed 2026-11-05.

## What It Is

dsh-superagent is a research prototype of a proactive coding agent for one GitHub repository, with optional Feishu chat. Its domain model gives every incoming event one of two paths. **Eval** decides whether new work may start: a deterministic gate checks the sender against the Source's allowed list or admission table, a model assesses candidates against team-written rules, and an accept creates a Ticket bound to an immutable **Mandate**. A **Subscription** carries later events on a Thread (a pull request, a chat topic) to the Tickets that follow it, as context only.

This note is a **contrast note** to `spore.connection.omnara-approval-by-presence`. Omnara lets membership in a chat thread answer the authorize question. dsh-superagent keeps origination behind the gate and lets Thread membership carry context and steer work already authorized. It proposes no new term.

## Mapping to Primitives

| dsh-superagent mechanism | Spore primitive | Reading |
|---|---|---|
| A Mandate records what an accept grants: Policy version, scope, strength, matched rules, the sender and the receiving scope. Only accept creates it, only a person's stop withdraws it, and only failed revalidation revokes it (`docs/001-domain.md`; `src/core/model.ts:100-133`; `src/policy.ts:213-240`) | Membrane, authorize | Authority is a named object. Revocation targets the Mandate, not a person, as Spore's default requires |
| A Subscription delivers every message on a Thread, bots and CI included, to its Tickets. "This delivery bypasses the gate and grants no new authority" (`docs/002-authorization.md`). Correlation between Threads "adds context; never routes" (`docs/001-domain.md`) | Membrane, `permeability`; `double-boundary` | Two boundaries kept apart: who may be heard in a Thread, and who may authorize work |
| A human message on one of an ended Ticket's own Threads resumes it under the original Mandate with no new Eval, unless a person stopped the Ticket. Revalidation re-checks the original basis (the original sender, the rule, the Source), not the person who resumed it. Bots and CI cannot wake it, and neither can a Thread followed only for context (`src/core/tickets.ts:246-262`; `src/policy.ts:213-235`; `docs/001-domain.md`) | Membrane, authorize | Presence grants steering within an existing mandate. The mandate's scope bounds it |
| "A person is not a domain concept." Identities on different Sources "are never mapped to each other". Principal or Membership as an entity is listed among rejected concepts (`docs/001-domain.md`) | Membrane; non-transitive relations | Membership is not modelled as authority at all. A cross-Source identity is prompt text, never an inference |
| A person saying "stop" is an ordinary Trigger that Eval judges. An Executor cannot declare that a person asked it to stop. A stop in the panel is a direct command (`docs/002-authorization.md`) | `asymmetric-membrane` | Who can end work is gated as carefully as who can start it, and the governed party cannot claim the gate's answer |
| A Policy change discards running Evals and sends affected live Tickets a notice. It does not cancel them, because "a cancelled change leaves half-finished work" (`docs/001-domain.md`; `src/policy.ts:144-165`) | Membrane, revoke | Revocation is deferred to the next revalidation point instead of interrupting execution |
| Workers that share a Thread receive the same events and resolve conflicts "without point-to-point communication" (article §3.2) | Signal; `stigmergy` | Coordination through a shared trace, with the Router relaying only cross-task cases |

## What Spore Confirms

- **Membership is not authority, with a counterexample to Omnara from a research prototype.** Here, originating work needs the Source's allowed list or a written rule, checked in code and recorded in the Mandate. Being in the conversation gives a person context and a voice in work already authorized, never a new grant.
- **Revocation targets a named object.** The Mandate is that object. History is kept: an ended Ticket keeps its Subscriptions and Decisions, and a dropped message keeps its record of when and why.
- **Holon boundaries as shared-context boundaries.** The article states the provisioning question in its own terms: deciding which Super-agent instances to run "becomes, in effect, deciding which context is shared and which is isolated", and collaboration between instances that "share no underlying context and each represent a different permission boundary" is open (§8.3). That is Spore's holon and membrane question, and `spore.federation-protocol` is written for it.

## What Is Thinner

- **Scope is enforced by the Executor model, not the host.** The host enforces the gate and Mandate revalidation. Within a Ticket, "the Executor decides whether the request fits the scope", and Executors run commands without approval as the operator's OS user, behind wrappers that "establish defaults, not a security boundary" (`docs/002-authorization.md`, `docs/003-execution.md`). Authorization at the boundary is deterministic. Containment inside it is judgment.
- **Steering authority is not separately modelled.** Anyone whose human message lands on one of a Ticket's own Threads can resume it, unless a person stopped it, and redirect it within the Mandate's scope. Nothing records whether that person could have originated the work. Under Spore's defaults this is an implicit bridge from Thread membership to steering authority. The guard is the Mandate's scope, so the bridge is narrower than Omnara's, but its soundness rests on the model's scope judgment.
- **No consent plane.** A Source scope can be set to receive every message in a chat or repository. Whether the people in those spaces agreed to have an agent read and act on their messages is left to the operator. The philosophy document asks operators to "start narrow", which is guidance, not a recorded consent.

## Open Questions

1. The Omnara note asked whether "approval channel membership must be no wider than the authority exercised" is a reusable check. dsh-superagent passes it for originating work and fails it for steering work already authorized. Does Spore need to distinguish authority to originate from authority to steer within a mandate? After two intakes this may earn a named pattern.
2. Is "deliver a notice now, revoke at the next revalidation point" a general answer to revoking authority over work in progress?
3. Should restriction maps between agent systems carry the Mandate's fields (policy version, strength, basis) so that a receiving system can revalidate rather than trust?

## Disposition

**clarify existing term.** dsh-superagent is a contrast case for `double-boundary` and the membership-is-not-authority default: it keeps the Thread boundary and the authority boundary apart where Omnara merges them. No grammar change is needed. Routing consult (§13, admission layer `connection`): intelligence-commons and poietic-match are awareness-only, and every other repo is skip.
