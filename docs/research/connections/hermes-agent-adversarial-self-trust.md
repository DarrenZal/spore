---
doc_id: spore.connection.hermes-agent-adversarial-self-trust
doc_kind: research
status: draft
depends_on:
  - spore.project-vision
relates_to:
  - spore.mycelial-holarchy-architecture
  - spore.federation-protocol
  - spore.connection.claude-code-membrane-control
sources:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.13
    title: "Hermes Agent v0.9.0 (v2026.4.13) — release page"
    type: primary
    commit: 1af2e18d408a9dcc2c61d6fc1eef5c6667f8e254
    tag: v2026.4.13
    published: 2026-04-13T18:52:41Z
  - url: https://github.com/NousResearch/hermes-agent/tree/1af2e18d408a9dcc2c61d6fc1eef5c6667f8e254
    title: "Hermes Agent (pinned tree at v2026.4.13)"
    type: primary
  - url: https://github.com/NousResearch/hermes-agent/blob/1af2e18d408a9dcc2c61d6fc1eef5c6667f8e254/tools/memory_tool.py
    title: "memory_tool.py — built-in curated memory with threat-pattern scanning"
    type: primary
  - url: https://github.com/NousResearch/hermes-agent/blob/1af2e18d408a9dcc2c61d6fc1eef5c6667f8e254/tools/skill_manager_tool.py
    title: "skill_manager_tool.py — agent-managed skill CRUD"
    type: primary
  - url: https://github.com/NousResearch/hermes-agent/blob/1af2e18d408a9dcc2c61d6fc1eef5c6667f8e254/tools/skills_guard.py
    title: "skills_guard.py — trust-tiered skill install policy"
    type: primary
disposition: clarify existing term
research_subkind: bridge_note
concepts:
  - membrane-operations
  - scan-then-gate
  - agent-authored-procedural-memory
  - trust-tiered-authorization
---

# Bridge Note: Hermes Agent — Scan-Then-Gate Membrane and Procedural Memory Writes

**Source:** Hermes Agent (Nous Research), commit `1af2e18`, tag `v2026.4.13`, release "Hermes Agent v0.9.0 (v2026.4.13)", published 2026-04-13, observed same day.

## 1. Why This Note Is Narrow

The Claude Code bridge note already establishes membrane operations, mediation-over-demarcation, stack portability, and the framing of permission systems as production authorize/expose. Hermes is a second independent instance of those patterns in a different stack and at different scope (single-user multi-platform runtime vs developer IDE). Rather than restate that evidence, this note defers to [claude-code-membrane-control](./claude-code-membrane-control.md) and focuses on what Hermes adds.

## 2. What Hermes Confirms (defer to Claude Code note)

Hermes provides second-source evidence for findings already established in the Claude Code note:

- **Membrane operations (authorize, translate, attest) are stack-portable.** Hermes's dangerous-command approval (`tools/approval.py`), memory-boundary scanning, and protocol-gateway translation parallel Claude Code's permission system and IDE bridge in Python rather than TypeScript.
- **Holon containment is a protocol property, not an infrastructure property.** Hermes's subagent delegation uses a blocked-tool frozenset (`tools/delegate_tool.py:DELEGATE_BLOCKED_TOOLS` — 5 tools), `MAX_DEPTH=2`, fresh task_id per child, parent-visible summary only. Same-process subagent with data-structure-enforced containment. Rated **moderate** — the conclusion is structurally consistent with Claude Code, not independent new evidence.
- **Protocol gateways carry governance-relevant state.** Hermes extends the count to **16 platform adapters** (bluebubbles, dingtalk, discord, email, feishu, homeassistant, matrix, mattermost, signal, slack, sms, telegram, webhook, wecom, weixin, whatsapp). Counting rule: one file per user-facing platform, excluding support files (`base.py`, `helpers.py`, `__init__.py`, `api_server.py`, `telegram_network.py`, `wecom_callback.py`, `wecom_crypto.py`, `ADDING_A_PLATFORM.md`). `hermes_state.py:sessions.source` tags each session by platform; `cron/scheduler.py:_resolve_delivery_target` routes replies via `{platform, chat_id, thread_id}`. This confirms the pattern at scale; it does not change the grammar.
- **Multi-instance holon sovereignty via OS-level env var.** `HERMES_HOME` + `get_hermes_home()` helper (119+ call sites per AGENTS.md). Single-user multi-profile; narrower than federation sovereignty but structurally parallel.

These are `clarify existing term` findings. They extend the Claude Code evidence base; they do not warrant new pattern doc.

## 3. Candidate Pattern: Scan-Then-Gate Membrane on Self-Originated Writes

The one finding that warrants naming is a **shared structural pattern across two different memory write surfaces** in Hermes: both scan agent-originated content before persisting it, but the gating policies differ by surface.

### Surface 1: Declarative memory writes (uniform scanning, single source)

`tools/memory_tool.py:_MEMORY_THREAT_PATTERNS` — 12 regex patterns + 10 invisible-character detection — runs on every write to MEMORY.md / USER.md before the content is persisted (and thus before it could be injected into a future system prompt). Categories: 6 injection patterns (prompt-injection, role-hijack, instruction-disregard, bypass-restrictions, system-prompt-override, deception-hide), 3 exfiltration patterns (curl/wget with secret env vars, cat secret files), 3 persistence patterns (authorized_keys, SSH paths, hermes .env).

Source is uniform on this surface: the agent's own `memory` tool is the only writer. There is no trust-tier variation — every write is scanned the same way, and a threat match blocks the write outright. Failure mode guarded against: an attacker-influenced tool output or document could cause the agent to write an injection payload into its own memory, compromising every future session.

### Surface 2: Procedural memory writes (scanning with trust-tiered gating)

`tools/skill_manager_tool.py` exposes `skill_manage` with six actions (`create`, `edit`, `patch`, `delete`, `write_file`, `remove_file`). The module docstring: "Skills are the agent's procedural memory: they capture *how to do a specific type of task* based on proven experience."

Procedural memory writes can come from multiple sources: builtin (bundled), trusted (openai/skills, anthropics/skills), community (external hub submissions), and agent-created. `tools/skills_guard.scan_skill` runs on **non-builtin sources** (trusted / community / agent-created) and returns a verdict (`safe` / `caution` / `dangerous`). Builtin skills bypass the scan entirely (per the module docstring: "Ships with Hermes. Never scanned, always trusted"). Install policy then gates based on verdict × source tier:

| Trust level | safe | caution | dangerous |
|-------------|------|---------|-----------|
| builtin | allow | allow | allow (never scanned; always trusted) |
| trusted (openai/skills, anthropics/skills) | allow | allow | block |
| community | allow | block | block |
| agent-created | allow | allow | ask |

The scanner is uniform where it runs; the install policy varies by provenance. Agent-created skills are treated more leniently than community submissions (dangerous = ask vs block) but more strictly than trusted submissions (which can ship `caution` skills without prompting).

### Why this is a candidate pattern

Both surfaces implement a **scan-then-gate** structure: a content scan returns a verdict, and a policy gate decides what to do with the verdict. The policy parameters differ by surface (uniform on declarative, trust-tiered on procedural), but the structural pattern is the same. This extends Spore's membrane vocabulary in a specific way:

- Claude Code demonstrated membrane operations at **holon boundaries** (parent↔child, agent↔IDE).
- Hermes demonstrates membrane operations at a **time-scoped intra-holon boundary**: between this-session writes and future-session reads, within a single holon across time.

The grammar already allows this — `spore.mycelial-holarchy-architecture` names interfaces as "mediation infrastructure with specified regulatory properties" without requiring two distinct holons at either end — but the time-scoped intra-holon case has not been explicitly named. Two independent code-level surfaces (declarative + procedural) in one runtime, using the same structural approach (scan-then-gate), support naming the pattern.

**Proposed pattern name (tentative, pending review):** scan-then-gate-membrane. The alternative framing "adversarial-self-trust-boundary" captures the motivation (the agent does not extend blind trust to its own writes) but is a working label; if the Spore gardener accepts the pattern for the pattern-language, a better name may emerge during drafting.

**Proposed scope:** a membrane that filters memory writes before they can re-enter the agent's future context. Parameterized by (a) the scanner (what content patterns are checked and what verdicts they produce) and (b) the gating policy (what verdict × source combinations pass, block, or escalate).

## 4. What Is Thinner

Gaps already noted in Claude Code note still apply. Hermes adds nothing on:

- Multi-party federation (no peer-to-peer protocol, no domain-event exchange between Hermes instances, no cryptographic identity beyond platform bot tokens).
- Spec DAG / versioned governance memory.
- Evidence / claim / attestation system.
- Intent / commitment grammar.

Hermes's cron jobs are scheduled actions with platform-addressed delivery, not commitments in Spore's sense.

## 5. Additional Finding: Agent-Context-Tagged Memory Writes (Moderate)

`agent/memory_provider.py` defines `agent_context` ∈ {`primary`, `subagent`, `cron`, `flush`} as a kwarg to `initialize()`. This is enforced in two shipping plugins:

- `plugins/memory/honcho/__init__.py`: `if agent_context in ("cron", "flush") or platform == "cron": return` — skips write entirely
- `plugins/memory/supermemory/__init__.py`: `self._write_enabled = agent_context not in ("cron", "flush", "subagent")` — also excludes subagent

Different plugins enforce different policies under the same tag. This is a candidate coordination primitive — cross-holon write governance via a single propagated tag — but with only two reference implementations and no central enforcement, it is `moderate` rather than pattern-ready.

## 6. Open Questions

1. Should `scan-then-gate-membrane` be drafted as a pattern-language entry, or does it belong as a protocol spec under `spore/docs/protocols/`?
2. Does `agent_context`-tagged writes deserve a sibling name, or is it a parameter of the scan-then-gate pattern (source identifier that feeds the gate)?
3. Is there a Spore-side formalization of "time-scoped intra-holon membrane" worth writing, or does the existing membrane description already cover it and the issue is just exposure?

## 7. Disposition

**clarify existing term** for the bulk of the note — Hermes is second-source production evidence for patterns already established via Claude Code. Does not warrant independent grammar expansion.

**candidate pattern** for the scan-then-gate-membrane finding only. Two independent code-level surfaces within the same runtime (declarative memory writes with uniform scanning, procedural memory writes with trust-tiered gating) implement the same structural pattern. Pattern name remains tentative pending gardener review.

**moderate** for `agent-context-tagged writes` — real enforcement in two plugins, but not yet pattern-ready.
