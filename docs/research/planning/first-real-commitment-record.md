# First Real Commitment Record

## 1. Scope And Rule

This run tests whether exactly one true commitment-level `real_record` can be created from accessible local source artifacts. This is not a general evidence expansion run.

Honesty about source quality is more important than creating a record. Three seed/stub artifacts already exist in `docs/research/evidence/commitments/` and must not be relabeled as real. A `real_record` requires a specific commitment instance that is evidenced as actually existing — not a system, plan, UI template, or design pattern.

## 2. Source Qualification Check

| Candidate Source | What It Contains | Specific Commitment Instance? | Operational Or Merely Designed? | Qualifies For real_record? | Why / Why Not |
|---|---|---|---|---|---|
| BKC web `commit/page.tsx` — PRESETS array | 3 hardcoded form presets (Restoration 200h, Equipment Loan 1 kit, Mycoremediation 40h) with real org entity URIs (Regenerate Cascadia, Kinship Earth, Mycopunks) | No — these are UI form templates, not records of commitments that were actually created | Designed — preset data populates a form for demo/convenience, not an evidence trail of a created commitment | No | Form presets pre-fill a creation form. No evidence that any of these commitments were submitted, accepted into a pool, or are operational. The `SAMPLE_TRANSCRIPT` on the same page uses illustrative dialogue with no provenance. |
| BKC web `commit/page.tsx` — SAMPLE_TRANSCRIPT | Sample workshop transcript text (Sarah, Randy, Alex, Jordan) | No — illustrative dialogue | Designed — fictional transcript for demo purposes | No | Named speakers and organizations are illustrative. No evidence any of these statements were made in an actual workshop. |
| BKC web `commitments/route.ts` + `useCommitments.ts` | API proxy to backend `/commitments/` endpoint; TypeScript types for `Commitment` data model (commitment_rid, pledger_uri, state, etc.) | No — this is infrastructure (API surface + types), not data | Infrastructure — defines how commitments flow through the system, not that any specific commitment exists | No | Proves the system can store commitments. Does not prove any commitment was stored. |
| BKC web `pools/page.tsx` + `usePools.ts` | Pool listing UI with state badges, threshold bars, pledge counts | No — UI for displaying pool data from the backend | Infrastructure | No | Shows the pool display surface exists. Does not contain specific pool or commitment data. |
| BKC `roadmap-data.json` — outcome.commitment-pools-provable | Roadmap outcome: "Commitment pooling is provable end-to-end in at least one bioregion." `status: "planned"`, `horizon: "180-365d"` | No — this is a roadmap goal, not a commitment instance | Planned — the roadmap explicitly says commitment pooling is not yet proven | No | The roadmap confirms that end-to-end commitment pooling has not been demonstrated. This is a planning artifact, not operational evidence. |
| BKC `roadmap-data.json` — metric.commitment-pledges-created | Metric definition: "Count of Commitment entities in PROPOSED or higher state across all nodes." | No — this defines a metric, not an actual count or a specific commitment | Designed — metric definition, not measurement | No | The metric is defined but no measurement value is present in the file. |
| SalishOakSeeds `workshop-design-guide-v2.md` | Workshop design for Victoria LHC. Part 5 describes how commitments will be recorded. Consent protocol. Post-workshop pipeline. | No — describes future workshop structure where commitments will be captured | Designed — workshop targeted for May–June 2026. Current date is April 7, 2026. Workshop has not happened. | No | The workshop has not occurred. The guide describes commitment capture as a future deliverable. No commitments have been generated from this process yet. |
| SalishOakSeeds `rc-proposal-v2.md` | Proposal to Regenerate Cascadia for the living map + flow funding pilot. Deliverables include "community commitments log." | No — this is a proposal for future work | Proposed — Phase 2 deliverables (May–July 2026) include the commitments log as a future output | No | A proposal describing what will be delivered. The commitments log does not yet exist. |
| `roadmap/public/roadmap-data.json` | Same BKC roadmap as above (replicated in roadmap repo) | No | Planned | No | Same content as BKC roadmap-data.json. |

## 3. Decision

**Blocked — no source supports a real commitment record yet.**

Every inspected source falls into one of three categories:

1. **Infrastructure** — UI forms, API routes, TypeScript types, and data hooks that define how commitments flow through the BKC system. These prove the system exists but contain no records of actual commitments.

2. **Design documentation** — Workshop guides and proposals describing how commitments will be captured in future workshops (May–June 2026). The workshop has not happened yet.

3. **Roadmap plans** — The BKC roadmap explicitly marks commitment pooling as `planned` with a 180–365 day horizon. The metric for "commitment pledges created" is defined but no measurement is present.

The Spore repo references "23+ commitments" and "2 pools" as operational facts. These commitments exist in the BKC backend database (PostgreSQL via the KOI processor's commitment router), but no individual commitment record is present in any file artifact across the inspected repos. The gap between pool-level aggregate facts (documented in Spore pattern docs) and per-commitment operational records (stored in the database, not in file artifacts) is the fundamental blocker.

## 4. If Record Was Created

Not applicable. No record was created.

## 5. If Blocked

**Which source came closest:** The BKC web PRESETS in `commit/page.tsx`. These name real organizations with real entity URIs (Regenerate Cascadia, Kinship Earth, Mycopunks), describe specific offers (200 hours native plant restoration, 1 soil monitoring kit loan, 40 hours mycoremediation), and include operational metadata (validity periods, estimated values, routing tags, wants, limits). They are the most commitment-shaped artifacts in any of the inspected repos.

**Exactly what was missing:** No evidence that any of these presets were ever submitted through the form, accepted into the system, assigned a `commitment_rid`, or transitioned through any lifecycle state. They are form fill helpers, not records of commitments that exist. A commitment is not a commitment until someone commits.

**What minimal additional artifact would support a true `real_record`:** Any one of:

1. **A single commitment record from the live BKC backend** — querying `GET /commitments/?limit=1` on the octo-salish-sea node would return an actual commitment with a `commitment_rid`, `state`, `pledger_uri`, `created_at`, and lifecycle data. If even one commitment exists in the database and can be exported, it would support a real record.

2. **Darren providing operational details for one specific commitment** — from personal knowledge of the BKC pools. A commitment he knows was proposed, verified, or is active. The identity, what it's about, who made it, and its current state.

3. **Workshop-generated commitments after the Victoria workshop** (May–June 2026). The post-workshop pipeline in the design guide would produce structured commitment records with full provenance.

**Recommended next move:** Capture one actual BKC commitment from the live backend API or from Darren's operational knowledge. This is the shortest path to a real record. The evidence schema is validated and ready. The blocker is source data, not schema design.

## 6. Schema Use Check

The existing commitment evidence schema (from `instrumentation-implementation-scoping-batch-1.md` Section 4.1, instantiated in Phase 1) was not exercised as a `real_record` in this run. Assessment of schema adequacy for a real record:

| Field | Status | Notes |
|---|---|---|
| `commitment_ref` | Would need a real identifier | If sourced from backend: `commitment_rid` is available. If from Darren's knowledge: a descriptive slug with explicit surrogate marking would be needed. |
| `pool_ref` | Sufficient | `bkc.victoria` or `bkc.cascadia` — pool references are well-documented. |
| `epistemic_mode` | Sufficient | The 6-value enum (delivery, discovery, stewardship, risk, mixed, unclassified) covers the range. `unclassified` is available if mode is not obvious. |
| `standing_context` | Sufficient but hard to populate | Standing conditions (security, capability, membership) require knowledge of the committing agent's circumstances. Likely unknown for backend-sourced records unless Darren provides context. |
| `state` | Sufficient | Mirrors BKC lifecycle states exactly. Backend `state` field maps directly. |
| `revision_count` | Sufficient | Backend commitment records track state transitions; renegotiation events would need separate sourcing. |
| `coordination_context` | Sufficient | Can be populated at pool level for Victoria commitments. |
| `evidence_posture` | Sufficient | `real_record` would be justified if the underlying commitment is verified as existing in the backend. |

The schema is ready. The gap is source data, not schema design.

## 7. What This Makes Observable

**What still cannot be observed honestly:** Per-commitment lifecycle progression, epistemic mode differentiation, consequence-bearer identification, and standing conditions. All of these require individual commitment-level data that is not present in any file artifact in the inspected repos.

**What the three existing seed/stub artifacts demonstrate:** The schema shape works. The fields are coherent. The evidence posture convention (real_record / seed_record / source_incomplete_stub) correctly distinguishes the evidentiary status of available artifacts.

**Which promoted entries remain unserved at the individual commitment level:**

- **human-economy-and-commitment** — cannot observe whether epistemic mode differentiation correlates with coordination treatment until at least one real commitment is annotated with a mode classification.
- **legitimacy-and-shared-consequence** — consequence_bearers and standing_context are empty or pool-level in all existing artifacts. Authority-consequence coupling at the commitment level requires individual commitment records.
- **relational-topology-and-context-design** — coordination_context is populated at pool level but not commitment level. Context-sensitivity claims need commitment-level observation.

## 8. Recommendation

**Capture one external/local operational commitment source first.**

The evidence schema is validated. The scaffold is in place. The only blocker is source data. The workshop (May–June 2026) will generate commitment data, but waiting 1–2 months when the backend may already contain commitment records is unnecessary delay. The shortest path is:

1. Query the live BKC backend API for one actual commitment record, OR
2. Have Darren provide operational details for one specific commitment from the Victoria or Cascadia pool.

Either path produces the first `real_record` without fabrication and without waiting for the workshop.

An evidence-template-pass is premature — there are not enough artifacts to justify template refinement. Deferred-family triage should wait until at least one real commitment record exists, so the triage can be informed by whether the evidence stack actually produces usable observations.

## 9. Recommended Next 3 Runs

### Run 1: Live Commitment Source Capture

**Short name:** live-commitment-source-capture

**Objective:** Obtain one actual BKC commitment record — either from the live backend API (`GET /commitments/` on octo-salish-sea node) or from Darren providing operational details for one specific commitment he knows about. Create the first `real_record` commitment evidence artifact using the existing schema.

**Expected artifact:** 1 commitment evidence record in `docs/research/evidence/commitments/` with `evidence_posture: real_record`.

**Why it comes first:** The blocker from this run is source data, not schema design. The backend likely already has commitment records (the Spore repo references 23+). Querying the API or asking Darren is the lowest-friction way to unblock the evidence stack. This run produces the first real commitment-level observation.

### Run 2: Evidence Template Pass

**Short name:** evidence-template-pass

**Objective:** Review all evidence artifacts (3 commitment seeds/stubs + 1 real commitment record + 1 revision event + 3 decision traces) for schema consistency. Produce a minimal template reference document so the next contributor can create a commitment record or decision trace without re-reading the scoping memo.

**Expected artifact:** `docs/research/evidence/templates.md` — lightweight schema reference, not a template system.

**Why it comes second:** With at least one real commitment record in place, there is enough material to assess whether the schemas are consistent across artifact types and whether a template would reduce adoption friction. Doing this before the real record exists would be premature.

### Run 3: Deferred-Family Triage Reassessment

**Short name:** deferred-family-triage

**Objective:** Reassess the 8 deferred Johar families in light of 5 promoted entries, the evidence stack (Phases 1–2 + first real commitment record), and current evidence posture. Determine which deferred families are subsumed, which gain clearer boundaries, and which become relevant as evidence targets.

**Expected artifact:** `docs/research/planning/deferred-family-triage-checkpoint-2.md`

**Why it comes third:** With the evidence stack scaffolded and the first real commitment record in place, the triage can be informed by what evidence infrastructure exists and whether it produces usable observations. Some deferred families may become specific evidence targets; others may be clearly subsumed.

## 10. Guardrails

- A real record must stay real. The `evidence_posture: real_record` classification is earned, not aspirational.
- Missing source detail must not be smoothed over. Unknown fields remain unknown.
- Neutral metadata is still preferable to theory-loaded inference. `unclassified` is a legitimate epistemic mode value.
- One honest real record is more valuable than many pseudo-records. The evidence stack exists to learn from practice, not to produce artifacts that look like evidence.
- Evidence implementation should stay grounded in actual operational surfaces. The BKC backend API and the upcoming Victoria workshop are the real surfaces. File artifacts in repos are infrastructure and design — they document what the system does, not what commitments exist.
