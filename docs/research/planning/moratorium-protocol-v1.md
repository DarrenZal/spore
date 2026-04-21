---
doc_id: spore.moratorium-protocol
doc_kind: protocol
version: 1
status: active
authored-on: 2026-04-20
authored-by: codex-gpt-5
---

# Moratorium Protocol

Version: v1 (2026-04-20). Formalized by `spore:ADR-0021 moratorium-protocol-formalization` by harvesting the operative rule set from `docs/research/planning/corpus-foundational-review-v1-plan.md:37-58`.

## Purpose

This protocol is the standalone authoritative carrier for the corpus-review moratorium mechanics that govern canon writes across Spore, Intelligence Commons, and Poietic Match during `corpus-foundational-review-v1`.

Its scope is narrow:

- when canon edits may touch `main`;
- when work must stay on `corpus-review/v1`; and
- what qualifies for the moratorium's only direct-to-`main` exception path.

## Intended audience and prerequisites

- **Audience**: The operator enforcing moratorium mechanics plus any governance reviewer auditing branch discipline or exception use across Spore, Intelligence Commons, and Poietic Match
- **Prerequisites**: Familiarity with the corpus-review phase model, `corpus-review/v1` branch discipline, canon-vs-planning boundaries, and access to `tmp/moratorium-exceptions.md` as the exception audit log
- **Scope**: Governs when canon writes may land on `main` versus `corpus-review/v1`, what qualifies for the safety-critical exception path, and how exceptions are logged and closed
- **Out of scope**: Authorizing ordinary ADR content, changing findings dispositions, or widening exception categories beyond the ones explicitly listed in this protocol

## Core rule

Canon edits on `main` remain suspended unless the phase-state table below or the safety-critical exception path explicitly allows otherwise. Work that continues during the moratorium lands on `corpus-review/v1` branches.

## Phase-by-phase state

| Phase | Canon edits allowed? |
|---|---|
| 0-1 | No (`moratorium declaring / declared`) |
| 2-6 | Only on `corpus-review/v1` branches; never to `main` |
| 7 | Round-scoped ADR edits on `corpus-review/v1`; `main` untouched |
| 8 | Editorial (S4) edits on `corpus-review/v1` |
| 9 | Merge `corpus-review/v1` -> `main` per findings resolutions; full moratorium lifted |

## Safety-critical exception

The moratorium's only direct-to-`main` exception path is the safety-critical exception. It is intentionally narrow.

Qualifying conditions:

- `(a)` validator-breaking regression on Spore;
- `(b)` cross-repo federation-breaking event, including bridge-note projection or claim-ingestion failure; and
- `(c)` security, data-loss, or outage event requiring canon-level response.

Qualifying triggers for condition `(c)`:

- CVE with exploit on a load-bearing dependency (`Python`, `PostgreSQL + pgvector`, `git`, `PyYAML`, `psycopg2`, embedding client, or GitHub hosting);
- irrecoverable loss of a canon-layer doc from source-of-truth; or
- outage longer than 24 hours that blocks the canon write path.

## Approver and audit log

Approver: Darren Zal (solo-operator).

Every exception must be logged to `tmp/moratorium-exceptions.md` and committed with `git add -f`.

Each log entry records:

- ISO timestamp;
- qualifying condition;
- affected files;
- rationale; and
- close-timestamp.

## Reapply-at-close rule

Moratorium coverage reapplies immediately when the exception closes. A safety-critical fix does not create an ongoing waiver for follow-on edits; any post-fix work returns to the phase-appropriate branch discipline unless a new qualifying exception is logged.
