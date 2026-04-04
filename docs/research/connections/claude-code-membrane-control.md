---
doc_id: spore.connection.claude-code-membrane-control
doc_kind: research
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.holonic-network-architecture
  - spore.mycorrhizal-federation-protocol
sources:
  - url: https://github.com/nirholas/claude-code
    title: "Claude Code (source)"
    type: primary
    commit: 071d5ec
  - path: projects/claude-code/src/hooks/toolPermission/
    title: "Permission system source"
    type: primary
  - title: "12 Infrastructure Primitives (Nate, 2026-04-03)"
    type: secondary
    note: "External analysis used as interpretive lens in second-pass intake; confirms membrane patterns but underspecifies compositional structure"
disposition: clarify existing term
research_subkind: bridge_note
concepts:
  - membrane-operations
  - authorization
  - boundary-control
  - attestation
  - sovereignty
---

# Bridge Note: Claude Code as Membrane-Control Implementation

**Source:** Claude Code (Anthropic), source from `nirholas/claude-code` fork, commit `071d5ec`, observed 2026-03-31.

## 1. What Claude Code Is

Claude Code is an agent runtime — a terminal-native AI coding assistant with a query engine, tool dispatch loop, permission system, memory hierarchy, skill system, and optional multi-agent coordinator. It is not a coordination grammar or an intelligence commons. It is a proving ground: a production implementation that materializes primitives from both Spore and Intelligence Commons without being designed against either.

**Artifact profile:**
- Type: repo (agent runtime / agentic workbench)
- Evidence reliability: code-rich, doc-unreliable (docs claim `QueryEngine.ts` is ~46K lines; actual file is 1,297 lines)
- Study slice: permission system (`src/hooks/toolPermission/`), coordinator/swarm handlers, worktree isolation, MCP services, memory directory system, skill loader

## 2. Why This Belongs in Spore

Claude Code's permission system is the clearest production implementation of membrane-control operations we have observed. It implements scoped authorization, controlled information exposure, revocation, and partial contestation across single-agent, multi-agent, and cross-process boundaries.

This note does NOT claim Claude Code implements the full Spore membrane. Spore's membrane concept is richer — it includes semantic translation across governance contexts, structured dispute mechanisms, and sovereignty-preserving federation. What Claude Code provides is strong evidence for a subset of membrane operations operating at the runtime-control level.

## 3. Mapping to Membrane Operations

### authorize — Strong

Claude Code's permission system implements authorization through layered rule scoping and multiple approval sources.

**Permission modes** (`src/utils/permissions/PermissionMode.ts:42-91`): Six modes govern what gets authorized automatically vs. requiring human approval: `default` (ask user), `plan` (batch review), `acceptEdits` (auto-accept file edits), `bypassPermissions` (skip all prompts), `dontAsk` (auto-deny), `auto` (classifier-driven).

**Rule persistence hierarchy** (`src/utils/permissions/PermissionUpdateSchema.ts:28-40`): Rules are scoped to `userSettings` (persistent, user-scoped), `projectSettings` (persistent, project-scoped), `localSettings` (persistent, gitignored), `session` (ephemeral), or `cliArg` (command-line override). This creates a layered authorization surface where persistent rules act as standing agreements and session rules act as temporary delegations.

**Per-agent scoping** (`src/hooks/toolPermission/handlers/swarmWorkerHandler.ts:40-156`): In multi-agent swarms, each worker gets an isolated `PermissionContext` with its own `toolUseID` and callback closures. Permission requests from workers are forwarded to the team leader via a filesystem mailbox, preserving the worker's bounded authority.

**Hook-based auto-approval** (`src/hooks/toolPermission/handlers/coordinatorHandler.ts:33-38`): Permission hooks can auto-approve tool use without user interaction, functioning as pre-authorized standing agreements.

### expose — Strong

Controlled information release operates across multiple surfaces.

**Tool results as exposure** (`src/hooks/toolPermission/handlers/interactiveHandler.ts:92-107`): Permission requests are queued to a React UI component, making the tool's intended action visible to the user before execution. The user sees tool name, input, description, and suggested permission rules.

**MCP resource exposure** (`src/services/mcp/MCPConnectionManager.tsx:7-30`): MCP servers expose typed tool and resource lists across process boundaries. Each connected server declares capabilities and resources; the client selectively consumes them.

**Channel permission relay** (`src/services/mcp/channelPermissions.ts:1-194`): Permission prompts can be relayed to external channels (Telegram, iMessage, Discord) via short IDs. The user replies with a 5-letter code (`yes tbxkq`) to approve from a remote surface. Only allowlisted channel servers with the `claude/channel/permission` capability receive these prompts.

**Swarm permission forwarding** (`src/hooks/toolPermission/handlers/swarmWorkerHandler.ts:71-77`): Workers create structured permission requests containing full tool context (tool name, input, description, suggested rules) and forward them to the team leader. The request schema (`permissionSync.ts:49-90`) includes `workerId`, `teamName`, `status`, and `resolvedBy` fields.

### revoke — Strong

Revocation operates at multiple granularities.

**User denial** (`src/hooks/toolPermission/handlers/interactiveHandler.ts:137-200`): User clicking "Deny" or aborting triggers `cancelAndAbort()`, halting tool execution. Feedback can accompany denial.

**Hook denial** (`src/hooks/toolPermission/handlers/coordinatorHandler.ts:40-46`): Permission hooks can return `{ behavior: 'deny' }`, preventing tool execution without user interaction.

**Leader rejection of worker** (`src/hooks/toolPermission/handlers/swarmWorkerHandler.ts:109-119`): In swarms, the leader can reject a worker's permission request via the mailbox. The `onReject()` callback halts the worker's execution and records the rejection.

**Permission mode downgrade**: Switching from `bypassPermissions` to `default` revokes previously automatic approvals, requiring explicit authorization going forward.

### contest — Thinner

Claude Code has partial contestation but lacks structured dispute mechanisms.

**Resolve-once racing** (`src/hooks/toolPermission/handlers/interactiveHandler.ts:70`): Multiple resolvers (user, hook, classifier, channel) race to decide a permission request. A `claim()` guard ensures exactly one winner. This is competitive resolution, not structured argument.

**Plan mode batch review** (`src/tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts:64-88`): Plan mode allows batch authorization with semantic `allowedPrompts` descriptions ("run tests", "install dependencies"). The user reviews and approves or rejects the plan's proposed permissions as a set. This is closer to batch authorization than discourse-as-governance.

**Classifier disagreement**: When the classifier auto-approves but the user has not yet interacted, the classifier's decision can be superseded by the user's explicit choice. This is competitive override, not bidirectional argument.

**What's missing**: No structured dispute primitive, no rebuttal mechanism, no evidence-based argumentation about whether a permission should hold. Contestation in Spore's full sense requires that decisions can be questioned, evidence presented, and resolution governed. Claude Code's contest is limited to competitive racing between resolvers.

### translate — Thinner

Claude Code performs protocol translation but not semantic re-encoding across governance contexts.

**Cross-boundary marshalling** (`src/hooks/toolPermission/handlers/swarmWorkerHandler.ts:167-200`): Permission rules are serialized and transmitted across process boundaries via filesystem mailbox. The schema translates between worker and leader contexts.

**Channel protocol translation** (`src/services/mcp/channelPermissions.ts:75-152`): Permission decisions are translated between MCP notification events and user-facing text messages. The server parses structured replies and emits typed events.

**MCP tool/resource translation**: Tools and resources from MCP servers are marshalled into Claude Code's internal tool registry. Names, schemas, and capabilities cross the process boundary.

**What's missing**: No semantic re-encoding. When a permission rule crosses from one governance context to another, its meaning is preserved literally, not translated into the receiving context's ontology. Spore's translate operation implies that crossing a membrane may require re-encoding a concept in terms the receiving context understands. Claude Code's translation is protocol-level (serialization format), not governance-level (semantic meaning).

### fork — Moderate

Worktree isolation provides filesystem-level forking but not governance-level forking.

**Git worktree creation** (`src/utils/worktree.ts:235-375`): `git worktree add` creates an isolated filesystem with its own branch and working directory. Sparse checkout (`worktree.ts:336-366`) can further limit file visibility within the worktree.

**Context isolation** (`src/tools/EnterWorktreeTool/EnterWorktreeTool.ts:77-119`): Entering a worktree switches CWD, clears caches (system prompt, memory files, plans directory), and creates a new execution context. The worktree session tracks `originalCwd`, `worktreePath`, `worktreeBranch`, and `sessionId`.

**Settings inheritance** (`src/utils/worktree.ts:510-589`): Post-creation setup copies `settings.local.json` and configures hooks from the parent repo. The forked context inherits the parent's governance configuration.

**What's missing**: Forking in Spore's full sense means creating an autonomous branch that can evolve independently. Claude Code's worktrees are temporary execution contexts, not sovereign forks. They inherit the parent's settings, share the parent's git history, and are cleaned up after use.

### attest — Partial

Decision logging provides provenance but not witnessing in Spore's full sense.

**Decision logging** (`src/hooks/toolPermission/permissionLogging.ts:28-149`): Every permission decision is logged with source type (hook, user_permanent, user_temporary, classifier, user_abort, user_reject) and permanence flag. Events include `tengu_tool_use_granted_in_config`, `tengu_tool_use_granted_by_classifier`, etc.

**Swarm resolution tracking** (`permissionSync.ts:49-90`): Permission request schema includes `resolvedBy` (worker or leader), `resolvedAt` (timestamp), and `status` (pending/approved/rejected). This creates a provenance chain for multi-agent permission decisions.

**What's missing**: Attestation in Spore is witnessing — endorsing or disputing a claim from a situated position. Claude Code's logging records what happened and who decided, but does not create attestations that can be referenced, disputed, or composed into trust networks.

## 4. What Spore Confirms

Claude Code provides production evidence for several Spore design commitments:

1. **Layered authorization is necessary.** Six permission modes, five persistence scopes, and per-agent isolation confirm that a single authorization model is insufficient. Different contexts (interactive, batch, autonomous, multi-agent) require different authorization surfaces.

2. **Membrane operations compose.** The swarm permission flow chains expose (worker forwards request) → authorize (leader approves) → translate (rules marshalled back) → attest (resolution logged). This confirms that membrane operations are not isolated actions but composable sequences.

3. **Atomicity at the boundary matters.** The `claim()` resolve-once guard (`interactiveHandler.ts:70`) ensures exactly one winner when multiple resolvers race. This is a concrete mechanism for Spore's principle that boundary-crossing requires legitimate authorization — and that authorization must be atomic.

4. **Per-agent scoping preserves bounded authority.** Each swarm worker gets an isolated `PermissionContext` with its own callback closures. Workers cannot approve their own requests. This confirms Spore's design that holons within a network maintain bounded authority.

## 5. What Is Thinner Than Full Spore

1. **No structured contestation.** Permission decisions can be overridden (user beats classifier) but not argued. There is no mechanism for presenting evidence for or against a permission, no rebuttal, no escalation path beyond "approve or deny."

2. **No semantic translation.** Rules cross boundaries in their literal form. A bash permission rule (`Bash(git *)`) means the same thing in every context. Spore's translate implies that crossing a governance membrane may require re-encoding meaning, not just serializing format.

3. **No sovereign federation.** MCP enables tool/resource exchange across process boundaries, but it does not implement negotiated federation between sovereign nodes. There is no trust tier system, no consent-based sharing protocol, no governance negotiation. MCP is an interoperability membrane, not a federation protocol.

4. **No forkability as sovereignty.** Worktrees are temporary execution contexts with cleanup, not autonomous branches that can evolve independently and rejoin. Spore's forkability is a constitutional commitment to sovereignty — the right to diverge without permission. Claude Code's worktrees are operational isolation, not governance forking.

5. **Attestation is logging, not witnessing.** Decisions are recorded with source and timestamp, but these records are not first-class objects that can be referenced, composed, or disputed. Spore's attestation primitive creates claims at a higher level — witnessing events from a situated position.

## 6. Additional Coordination Surfaces

Beyond the permission system, Claude Code has several other Spore-relevant surfaces:

**Coordinator mode and teams** (`src/tools/TeamCreateTool/TeamCreateTool.ts:156-175`): Teams have a deterministic `leadAgentId`, member records with `agentId`, `agentType`, `model`, and `subscriptions`. Task lists are scoped per-team. This is a multi-holon coordination surface, though without Spore's governance-memory or federated-knowledge aspects.

**Memory hierarchy** (`src/memdir/memdir.ts:34-103`, `src/memdir/paths.ts:208-235`): CLAUDE.md files form a hierarchy: user-global, project-scoped, and team-scoped. Team memory syncs via content-addressed checksums (SHA256 delta uploads, server-wins pull semantics). This is governance-adjacent memory — it persists project and user knowledge — but it is not true governance memory in Spore's sense because it is not organized as a constitutional spec DAG with dependency tracking, lifecycle states, and review gates.

**Worktree isolation** (`src/utils/worktree.ts:235-375`): Git worktrees create bounded execution contexts with filesystem isolation, sparse checkout visibility control, and inherited settings. This is a practical membrane — a boundary that controls what the agent can see and modify.

## 7. Open Questions

1. **Does the resolve-once racing pattern generalize?** The `claim()` guard is an elegant solution to competitive resolution at boundaries. Does Spore need to name this as a membrane operation primitive, or is it an implementation detail of authorize?

2. **Is the permission scope hierarchy a membrane pattern?** The five persistence scopes (userSettings → projectSettings → localSettings → session → cliArg) create a layered authorization surface. Does this map to Spore's membrane concept, or is it an engineering convenience?

3. **Does channel permission relay extend Spore's expose?** The ability to relay permission prompts to Telegram/Discord/iMessage via short codes creates a cross-surface authorization flow. This is not in Spore's current membrane operations description. Is it a new surface for expose, or a special case of translate?

4. **How should governance-adjacent memory be classified?** CLAUDE.md files persist knowledge and influence agent behavior, but they lack constitutional structure (no spec DAG, no lifecycle states, no formal review). Should Spore's memory model distinguish between governance-adjacent and true governance memory more explicitly?

## Claim Register

**C1** [confidence: high] [anchor: §4 — "Layered authorization is necessary"]
Layered authorization (6 modes, 5 persistence scopes, per-agent isolation) is necessary in production systems — a single authorization model is insufficient for different contexts (interactive, batch, autonomous, multi-agent). This is production evidence for Spore's membrane authorize operation.

**C2** [confidence: high] [anchor: §4 — "Membrane operations compose"]
Membrane operations compose: the swarm permission flow chains expose (worker forwards request) → authorize (leader approves) → translate (rules marshalled back) → attest (resolution logged). Operations are not isolated actions but composable sequences.

**C3** [confidence: high] [anchor: §4 — "Atomicity at the boundary matters"]
Atomicity at the boundary matters — the `claim()` resolve-once guard ensures exactly one winner when multiple resolvers race. This confirms Spore's principle that boundary-crossing authorization must be atomic, not competitive.

**C4** [confidence: high] [anchor: §5 — "No structured contestation"]
Claude Code's contest is limited to competitive racing (approve/deny) — it has no structured dispute primitive, no rebuttal mechanism, and no evidence-based argumentation. Production runtimes underinvest in contestation relative to Spore's full grammar.

**C5** [confidence: high] [anchor: §5 — "No semantic translation"]
Claude Code performs protocol-level translation (serialization format) but not governance-level translation (semantic meaning). Crossing a boundary preserves rules literally — Spore's translate operation implies re-encoding in the receiving context's ontology.

## 8. Disposition

**Disposition: clarify existing term**

Claude Code's permission system provides production evidence that could sharpen the membrane operations description in existing Spore docs. Specifically:

- The **authorize** operation could be illustrated with concrete examples of layered rule scoping and multi-source approval (hooks, user, classifier, channel relay).
- The **expose** operation could note that exposure includes both information visibility (showing what a tool will do) and cross-surface relay (forwarding prompts to external channels).
- The **revoke** operation could note that revocation can be immediate (denial) or prospective (mode downgrade removing future auto-approvals).

This does not warrant a new pattern doc. The evidence confirms existing membrane operations rather than revealing new ones. The thinner operations (contest, translate, fork, attest) highlight where production runtimes typically underinvest relative to Spore's full grammar — useful for understanding the gap between coordination theory and engineering practice, but not a Spore deficiency.
