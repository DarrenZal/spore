---
doc_id: spore.canon-decision.cross-repo-projection-script-pm-registration-alignment
doc_kind: decision-record
status: active
adr_number: "0071"
date: 2026-04-24
opened-on: 2026-04-24
closed-on: 2026-04-24
decision: edit
r_claim_source:
  - pm:ADR-0014-canon-alignment-through-spore-adr-0060
  - spore:ADR-0058-phase-2c-graph-projections-dual-axis-bundle
  - spore:ADR-0070-view-template-catalog-pattern
r_claim_statement: |
  pm:ADR-0014 parked a cross-repo concern that Poietic Match's registration in
  `koi-processor/scripts/project_bridge_notes.py` might still reflect a pre-ADR-0058
  graph-projections shape rather than Spore's ratified `3 primary + 5 view-template`
  structure. Step 0.5 audit for ADR-0071 found a different drift-shape. The feared
  flat-8 encoding was not present. Instead, the live script registers PM only as a
  source project and projects bridge notes into KOI as claims, concepts, questions,
  and argumentative edges. That runtime cleanly fits Epistemic-primary bridge-note
  intake, but it does not itself encode or materialize the full ADR-0058 / ADR-0070
  projection taxonomy. The strongest misalignment is therefore canon-prose overclaim
  about infrastructure, not code-level persistence of the superseded flat-8 model.
supported_by:
  - spore:ADR-0058-phase-2c-graph-projections-dual-axis-bundle
  - spore:ADR-0070-view-template-catalog-pattern
  - intelligence-commons:ADR-0018-canon-alignment-through-spore-adr-0060
  - pm:ADR-0014-canon-alignment-through-spore-adr-0060
  - pm:ADR-0015-canon-alignment-through-spore-adr-0070
  - /Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py
  - /Users/darrenzal/projects/regenai/koi-processor/README.md
  - /Users/darrenzal/projects/regenai/koi-processor/CLAUDE.md
  - /Users/darrenzal/projects/poietic-match/docs/protocol.md
  - /Users/darrenzal/projects/spore/docs/foundations/governance-artifacts-and-graph-projections.md
  - /Users/darrenzal/projects/spore/tmp/adr-0071-audit-manifest-2026-04-25.md
  - /Users/darrenzal/projects/spore/tmp/adr-0071-decision-brief-2026-04-25.md
authorized_by: "operator directive 2026-04-24 ADR-0071 Step-2 decision-gate: A3 SEQUENTIAL; B2 PARTIAL REALIGNMENT; C1 INCLUDE; D1 DECISION-RECORD; E1 BACKWARD-COMPATIBLE; F2 FILE-PATH + LINE-NUMBERS; G3 NARROW-WIDE. Spore worktree clean; koi-processor read-only this session; IC and PM read-only with HEAD-end parity required."
queue_reference: "pm:ADR-0014 Step 0.5 parking item: audit koi-processor `project_bridge_notes.py` PM registration against spore:ADR-0058 3-primary + spore:ADR-0070 5-view-template shape"
affects_canon:
  - docs/research/canon-decisions/0071-cross-repo-projection-script-pm-registration-alignment.md
related_adrs:
  - spore:ADR-0036-graph-projections-tiering-and-structure
  - spore:ADR-0058-phase-2c-graph-projections-dual-axis-bundle
  - spore:ADR-0065-pattern-library-infrastructure-spec
  - spore:ADR-0070-view-template-catalog-pattern
  - intelligence-commons:ADR-0018-canon-alignment-through-spore-adr-0060
  - pm:ADR-0014-canon-alignment-through-spore-adr-0060
  - pm:ADR-0015-canon-alignment-through-spore-adr-0070
concepts:
  - coordination-substrate
  - view-template
---

# ADR-0071 — Cross-Repo Projection-Script PM-Registration Alignment

## Status

active (drafted and activated 2026-04-24 under `adr-0071-cross-repo-projection-script-pm-registration-alignment` decision-gated plan; operator ratified `A3/B2/C1/D1/E1/F2/G3` before Step 3 execution)

## Context

### Parking source

pm:ADR-0014 aligned PM canon to Spore's post-0060 grammar and added a new PM protocol section, `## 11. Graph Projections (Upstream Spore Reference)`, that says PM's projection participation is governed by Spore's `3 primary + 5 view-template` shape. The same ADR then stated that PM's registration in `project_bridge_notes.py` was the operational instantiation of that participation and explicitly parked the question of whether the registration was actually aligned.

The live PM protocol text still makes that stronger claim. `/Users/darrenzal/projects/poietic-match/docs/protocol.md:396-403` says the bridge-note projection infrastructure governs PM's participation in Spore's graph-projections architecture and treats PM's registration in the script as the operational instantiation of that architecture.

ADR-0071 closes the parking item's first question: what the current script actually does.

### Step 0.5 audit findings

Full audit: `tmp/adr-0071-audit-manifest-2026-04-25.md`. The decisive findings were:

1. **The feared flat-8 code drift was not found.** `koi-processor/scripts/project_bridge_notes.py` contains no hard-coded list of eight projections, no primary/view-template vocabulary, and no residual ADR-0036-era taxonomy.
2. **The live PM registration is much thinner than the parking note implicitly assumed.** `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:40-60` registers PM only as a source project with `project_id`, `claimant_uri`, and a bridge-note directory. `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:924-935` path-dispatches PM notes to that source key.
3. **The runtime behavior is epistemic / argumentative intake.** The script projects bridge notes into KOI as claims, review claims, concepts, questions, and edges:
   - source-claim payload at `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:441-455`
   - review-claim payload at `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:513-526`
   - question entity creation at `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:598-610`
4. **That runtime fits one slice of ADR-0058 cleanly.** `docs/foundations/governance-artifacts-and-graph-projections.md:114-116` says the Epistemic primary materializes in KOI and bridge-note intake. The script therefore fits the Epistemic-primary bridge-note intake role.
5. **What the script does not do is equally important.** It does not materialize Constitutional structure, Commitment structure, or any of the five view-templates as named runtime surfaces. The authoritative `3 primary + 5 view-template` shape remains a Spore canon articulation, not a taxonomy encoded in this script.
6. **IC audit result is materially different from PM.** IC's explicit stance in `intelligence-commons:ADR-0018` is that IC does not adopt Spore's 3-primary / 5-view-template treatment at the IC-canon layer and instead treats KOI as its primary graph. The script's epistemic behavior therefore does not create an IC repair obligation.

### Cross-repo baseline at authoring

- Spore HEAD: `fd2238b5464b94ce7b5aa4d38edf90d082b20f17`
- koi-processor HEAD: `006be2d54cf975597d9de596582130b147c3d9f1`
- IC HEAD: `8ce665ee28633efbfc4182a083ac8b279b53fd76`
- PM HEAD: `86f2d4b1c3e21e359886e2e606b56aecc2ba8e01`
- Spore validator baseline: `FAILED: 9 error(s), 30 warning(s)`
- Spore worktree: no tracked-file modifications at Step 0 and Step 3 pre-exec
- koi-processor worktree: no tracked-file modifications; only untracked parent-session-state, accepted baseline; repo remains read-only in this session per `A3`

## Decision

**Edit.** Record ADR-0071 as a Spore-side decision record clarifying the actual drift-shape and ratifying sequential remediation rather than bundled infrastructure edits.

The ratified decision bundle is:

- `A3 SEQUENTIAL`
- `B2 PARTIAL REALIGNMENT`
- `C1 INCLUDE`
- `D1 DECISION-RECORD`
- `E1 BACKWARD-COMPATIBLE`
- `F2 FILE-PATH + LINE-NUMBERS`
- `G3 NARROW-WIDE`

### What ADR-0071 decides

1. **The parking suspicion resolves as prose-drift, not confirmed code-drift.** ADR-0071 records that the Step 0.5 audit did not find a live flat-8 projection encoding in `project_bridge_notes.py`. The stronger present misalignment is cross-repo prose that describes the script as if it operationalized the whole ADR-0058 / ADR-0070 taxonomy.
2. **The script's honest current role is Epistemic-primary bridge-note intake.** Within Spore's graph-projections architecture, `project_bridge_notes.py` should presently be read as one infrastructure surface inside the Epistemic primary's KOI materialization, not as a full 3-primary registry and not as the operational home of the five view-templates.
3. **No koi-processor edits land in ADR-0071's session.** Under `A3`, this ADR does not modify `koi-processor`, `poietic-match`, or `intelligence-commons`. The repair tiers are separated by session-context rather than collapsed into one bundled run.
4. **IC is explicitly included and explicitly cleared.** ADR-0071 records that the same script behavior does not create an IC repair obligation because IC already operates under a KOI-first / graph-projections-decline stance.
5. **Adjacent drift is documented, not silently ignored.** Under `G3`, ADR-0071 records the immediately adjacent prose drift surfaced by the audit:
   - PM canon prose overstates the script's role and uses outdated file ownership language
   - koi-processor script/README/CLAUDE prose still describes the script as Spore+IC-only despite live PM coverage

### What ADR-0071 deliberately does not do

- no PM canon prose edit
- no koi-processor script docstring edit
- no koi-processor README / CLAUDE prose edit
- no attempt to push `project_bridge_notes.py` toward a new multi-projection schema
- no retrospective weakening of ADR-0058 or ADR-0070

## Consequences

### Method precedent

- **Canon-prose-drift vs code-drift distinction is now explicit.** When an infrastructure audit shows that canon or cross-repo prose made a stronger descriptive claim than the code actually supports, the correct first remediation is prose-realignment-to-code, not speculative code-realignment-to-canon. ADR-0071 is the first operational use of this distinction.
- **Audit-then-propose catches pre-baked misdirection at cross-repo layer.** The parked suspicion pointed toward old flat-8 code drift. Step 0.5 audit surfaced a different drift-shape entirely: a prose overclaim attached to a narrower epistemic intake script. This is the second operational use of the audit-then-propose discipline after ADR-0065 codified it at pattern-infrastructure layer.
- **Three-tier deferred-remediation shape is now named.** ADR-0071 uses:
  1. Spore ADR record now
  2. PM canon prose follow-on later
  3. koi-processor infra prose follow-on later
  This differs from same-session single-repo widened-repair patterns like `ic:ADR-0019`, where the discovered drift remained inside the active repo's allowlist.

### Canon-state consequences

- **ADR-0058 and ADR-0070 remain fully authoritative.** Their `3 primary + 5 view-template` articulation is unchanged. ADR-0071 does not narrow the canon model; it narrows a specific claim about one external infrastructure surface.
- **Spore gains a more precise cross-repo citation posture.** Future Spore or sibling ADRs may cite `project_bridge_notes.py` honestly as Epistemic-primary bridge-note intake without overstating it as a whole-architecture registry.
- **No Spore canon-body files change beyond this ADR.** `docs/foundations/governance-artifacts-and-graph-projections.md` already says what the architecture is; ADR-0071 only records how one external script fits that architecture.

### Cross-repo consequences

- **PM follow-on parking item is now explicit.** `/Users/darrenzal/projects/poietic-match/docs/protocol.md:396-403` should be revisited in a dedicated PM session so its reference to `project_bridge_notes.py` matches the script's honest Epistemic-primary intake role and current file location in `koi-processor`.
- **koi-processor follow-on parking item is now explicit.** `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:3-6`, `/Users/darrenzal/projects/regenai/koi-processor/README.md:302-314`, and `/Users/darrenzal/projects/regenai/koi-processor/CLAUDE.md:304-307` should be revisited in a dedicated koi session so the prose matches live project coverage and current repository ownership.
- **IC requires no follow-on from this ADR.** IC's audited stance remains internally coherent.

## ACs

1. ADR-0071 is authored at `docs/research/canon-decisions/0071-cross-repo-projection-script-pm-registration-alignment.md`.
2. ADR-0071 records the ratified axes `A3/B2/C1/D1/E1/F2/G3` explicitly.
3. ADR-0071 states explicitly that the flat-8 code suspicion was not confirmed.
4. ADR-0071 states explicitly that the current script is best read as Epistemic-primary bridge-note intake.
5. ADR-0071 records the IC audit result as "include + no repair needed."
6. ADR-0071 records adjacent PM prose drift and koi prose drift as parking items rather than silently omitting them.
7. No file in `koi-processor`, `poietic-match`, or `intelligence-commons` is modified in this session.
8. Spore validator output after ADR-0071 authoring remains `FAILED: 9 error(s), 30 warning(s)`.
9. koi-processor HEAD-end remains `006be2d5`.
10. IC and PM HEAD-end equal their Step 0 baselines exactly.
11. Explicit-path staging only; no `git add -A` and no `git add .`.

## Evidence

- **Parking source and downstream overclaim**:
  - `/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0014-canon-alignment-through-spore-adr-0060.md:136-140`
  - `/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0014-canon-alignment-through-spore-adr-0060.md:202-204`
  - `/Users/darrenzal/projects/poietic-match/docs/protocol.md:396-403`
- **Spore authoritative shape**:
  - `docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md:63-72`
  - `docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md:90-94`
  - `docs/foundations/governance-artifacts-and-graph-projections.md:110-126`
  - `docs/research/canon-decisions/0070-view-template-catalog-pattern.md:70-89`
  - `docs/research/canon-decisions/0070-view-template-catalog-pattern.md:101-111`
  - `docs/research/canon-decisions/0070-view-template-catalog-pattern.md:146-148`
- **Audited script behavior**:
  - `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:40-60`
  - `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:441-455`
  - `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:513-526`
  - `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:598-610`
  - `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:666-678`
  - `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:924-935`
- **IC compatibility finding**:
  - `/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0018-canon-alignment-through-spore-adr-0060.md:99-114`
- **Adjacent prose drift surfaces**:
  - `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:3-6`
  - `/Users/darrenzal/projects/regenai/koi-processor/README.md:302-314`
  - `/Users/darrenzal/projects/regenai/koi-processor/CLAUDE.md:304-307`
- **Step artifacts**:
  - `tmp/adr-0071-preflight-manifest.txt`
  - `tmp/adr-0071-audit-manifest-2026-04-25.md`
  - `tmp/adr-0071-decision-brief-2026-04-25.md`

## Diff summary

- **New file**: `docs/research/canon-decisions/0071-cross-repo-projection-script-pm-registration-alignment.md` (this ADR).
- **No Spore canon-body edits**: `docs/foundations/governance-artifacts-and-graph-projections.md` and other canon surfaces remain unchanged.
- **No sibling-repo edits**: PM, IC, and koi-processor remain unchanged in this session.
- **No validator or yaml changes**: concepts yaml remains v14; Spore validator baseline remains `9 / 30`.

## Parking lot

- **Tier 2 follow-on — PM canon prose realignment.** Update PM's reference to `koi-processor/scripts/project_bridge_notes.py` so it describes the script as Epistemic-primary bridge-note intake and uses the correct repository location.
- **Tier 3 follow-on — koi-processor infra prose realignment.** Update the script docstring plus koi `README.md` and `CLAUDE.md` so the prose matches current source-project coverage and repository ownership.
- **Future infrastructure question remains open.** If a later operator wants a true cross-projection registry or explicit projection-scope metadata in koi, that is a new infra design task, not an implied requirement created by ADR-0071.

## References

- [docs/research/canon-decisions/0036-graph-projections-tiering-and-structure.md](./0036-graph-projections-tiering-and-structure.md) — historical pre-0058 tiering source.
- [docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md](./0058-phase-2c-graph-projections-dual-axis-bundle.md) — authoritative three-primary / five-view-template realignment.
- [docs/research/canon-decisions/0065-pattern-library-infrastructure-spec.md](./0065-pattern-library-infrastructure-spec.md) — audit-then-propose method precedent and infrastructure discipline.
- [docs/research/canon-decisions/0070-view-template-catalog-pattern.md](./0070-view-template-catalog-pattern.md) — authoritative catalog admission for the five view-templates.
