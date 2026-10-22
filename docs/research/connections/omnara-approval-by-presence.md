---
doc_id: spore.connection.omnara-approval-by-presence
doc_kind: research
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.connection.claude-code-membrane-control
  - spore.connection.hermes-agent-adversarial-self-trust
sources:
  - url: https://github.com/omnara-ai/omnara/tree/660bb172c9a85c528a25ce249e9172f917292eb7
    title: "Omnara (pinned tree, 2026-10-21)"
    type: primary
    commit: 660bb172c9a85c528a25ce249e9172f917292eb7
  - url: https://github.com/omnara-ai/omnara/blob/660bb172c9a85c528a25ce249e9172f917292eb7/docs/integrations/overview.mdx
    title: "Integrations overview — interaction handlers"
    type: primary
disposition: clarify existing term
research_subkind: bridge_note
concepts:
  - asymmetric-membrane
  - permeability
---

# Bridge Note: Omnara — Approval by Presence

**Source:** omnara-ai/omnara, commit `660bb172`, observed 2026-10-21.

## What It Is

Omnara is an open-source managed agent platform. Each tool an agent uses can run immediately, wait for a person, or be blocked, and the platform enforces the setting. This note is a **boundary-case note**. It records a shipping system in which the authorize operation is answered by membership in a conversation, which Spore's defaults forbid. It proposes no new term.

## Mapping to Primitives

| Omnara mechanism | Spore primitive | Reading |
|---|---|---|
| A permission request posted to a Slack or Discord thread can be answered by "anyone able to respond in an eligible provider conversation ... without an Omnara account" (`docs/integrations/overview.mdx:286-292`). In the Slack code, a click is accepted if it comes from the right app, workspace, channel, thread and message. The clicking user is recorded as the actor but never checked for authority (`internal/integration/slack/actions.go:98-106`; `internal/httpapi/slack_action_routes.go:127-201`) | Membrane, authorize | Authority is derived from social presence. Membership does not imply authority unless an explicit appointment or mandate bridges them, and there is none here. The approver is attributed, not authorized |
| The model can call `set_interaction_handler` to change where its own approvals go, unless an operator restricts the tool (`overview.mdx:273-294`) | Membrane, `asymmetric-membrane` | The governed party holds part of the gatekeeping capacity over itself |
| The machine daemon dials out and runs whatever it is offered; all checks happen in the control plane (`internal/machinedaemon/client_socket.go:119-160`, `internal/harness/tools/approvals.go:19-140`) | Membrane, `permeability` | Differential by direction: the machine admits inbound action from one source and holds no authorize step of its own |
| An approval binds to the exact action and is re-checked at execution (`internal/harness/tools/authorization.go:19-125`) | Membrane, authorize | Authorization names its object, consistent with "revocation targets a named object" |

## What Spore Confirms

- The default that membership does not imply authority is not academic. A well-engineered platform with server-side enforcement, input-bound approvals and signed releases still collapses the two at its chat boundary, as a documented feature.
- `asymmetric-membrane` covers the handler-rerouting case. Here the asymmetry runs the unexpected way, toward the agent being governed.
- The Claude Code and Hermes notes found containment to be a protocol property. Omnara agrees: subagents lose credentials and integration tools by config transformation, not by isolation.

## What Is Thinner

- Omnara has no notion of an approver set distinct from a conversation's participants. The approval channel's membership and the authority it exercises have one boundary, where `double-boundary` would separate them.
- A `type: profile` subagent takes its permissions from the named profile, not from its parent. Delegation is not shown to attenuate by construction (inferred from `internal/agentconfig/subagents.go:75,114-124`).

## Open Questions

1. The Slack resolve path matches the docs. The Discord path and handler rerouting (`set_interaction_handler`) are documented but not traced in source.
2. Is "approval channel membership must be no wider than the authority exercised" a reusable check for any agent platform intake? If a second intake shows the same collapse, it may earn a named pattern.

## Disposition

**clarify existing term.** Omnara is a boundary case for Membrane authorize and `asymmetric-membrane`. It sharpens the existing membership-is-not-authority default with a production example and requires no grammar change. Routing consult (§13, admission layer `connection`): intelligence-commons and poietic-match are awareness-only, and the rest skip.
