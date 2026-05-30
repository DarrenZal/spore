# ADR-0071 Step 0.5 Audit Manifest

Date: 2026-04-24
Filename date: 2026-04-25 per operator brief
Repo: `/Users/darrenzal/projects/spore`
Scope: audit-only; no Step 1 recommendations in this file

## Read Set

Required artifacts read for this audit:

- `docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md`
- `docs/research/canon-decisions/0070-view-template-catalog-pattern.md`
- `/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0014-canon-alignment-through-spore-adr-0060.md`
- `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py`
- `docs/foundations/governance-artifacts-and-graph-projections.md`

Recommended / corroborating artifacts read:

- `docs/research/canon-decisions/0036-graph-projections-tiering-and-structure.md`
- `/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0018-canon-alignment-through-spore-adr-0060.md`
- `/Users/darrenzal/projects/poietic-match/docs/protocol.md`
- `/Users/darrenzal/projects/regenai/koi-processor/README.md`
- `/Users/darrenzal/projects/regenai/koi-processor/CLAUDE.md`

## Why This Audit Exists

PM parked the issue explicitly in `pm:ADR-0014`:

- `0014-canon-alignment-through-spore-adr-0060.md:138-140`
  - PM added a protocol section saying ADR-0058's 3 primaries and 5 view-templates govern PM's participation in the projection script.
  - It then stated: `PM's registration in Spore's project_bridge_notes.py projection script is the operational instantiation.`
- `0014-canon-alignment-through-spore-adr-0060.md:202-204`
  - PM also explicitly parked the question of whether that registration is actually aligned with ADR-0058's 3-primary shape.

Current PM canon still repeats the stronger claim:

- `/Users/darrenzal/projects/poietic-match/docs/protocol.md:396-403`
  - PM says the script registration is the operational instantiation of the 3-primary + 5-view-template graph-projections architecture.

That stronger claim is the main thing audited here.

## Current `project_bridge_notes.py` PM Registration

### 1. Registration section itself

From `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:40-60`:

- `PROJECTS["pm"]` contains only:
  - `project_id = "pm"`
  - `claimant_uri = "org:poietic-match-learning-field"`
  - `bridge_dir = ~/projects/poietic-match/docs/research/connections`

Audit reading:

- PM is registered as a source project.
- No projection-kind, tier, primary/view-template, or graph-shape metadata is present in the PM entry.

### 2. Script-level semantics

From `/Users/darrenzal/projects/regenai/koi-processor/scripts/project_bridge_notes.py:5-7`:

> Projects bridge notes into KOI as structured Claim, Concept, and Question entities with argumentative edges.

Corroborating output paths:

- `:441-455` creates `claim_type = "governance"` source claims with metadata `claim_layer = "source"`, `project_uri`, `source = "learning_field"`.
- `:513-526` creates review claims with metadata `claim_layer = "review"`, `target_spec_doc`, `target_section`, `project_uri`, `source = "learning_field"`.
- `:598-610` creates `Question` entities in `entity_registry`.
- `:666-678` resolves the project URI, then resolves or creates concept entities.
- `:924-935` maps any `poietic-match` note path to `project_key = "pm"`.

Audit reading:

- The script projects bridge notes into KOI's entity/claim/question substrate.
- That is epistemic / argumentative intake behavior.
- The script does not materialize Constitutional structure, Commitment structure, or any view-template as named runtime surfaces.

### 3. Direct vocabulary absence check

Command run:

- `rg -n "view-template|Constitutional graph|Commitment graph|Epistemic graph|Roadmap DAG|Intent hypergraph|Event graph|Routing/flow|Discourse graph|primary projection|view template" ...`

Result:

- No hits in:
  - `scripts/project_bridge_notes.py`
  - `README.md`
  - `CLAUDE.md`

Audit reading:

- The feared legacy flat-8 list was not found.
- But neither was any positive 3-primary + 5-view-template taxonomy.

## ADR-0058 / Canon Shape Being Audited Against

### Exact ADR-0058 shape

From `docs/research/canon-decisions/0058-phase-2c-graph-projections-dual-axis-bundle.md`:

- `:63-70` enumerates the projection table:
  - primary: Constitutional / Commitment / Epistemic
  - view-template: Roadmap DAG / Intent hypergraph / Event / Routing/flow / Discourse
- `:72`
  - "The remaining five are honestly re-classifiable as view-templates composable over primaries."
- `:90-94`
  - three primaries remain foundation-level
  - five secondaries are demoted to view-templates
  - ADR-0036 is superseded-via-prose on the primary-set only

### Canon-body articulation

From `docs/foundations/governance-artifacts-and-graph-projections.md:110-126`:

- The host rule is explicit:
  - 3 primaries have independent schema, materialization, query pattern, and non-join use case
  - 5 view-templates are composable over primaries
- Materializations are named:
  - Constitutional -> spec-DAG
  - Commitment -> running commitment-pool state in BKC/Octo federation and Poietic Match
  - Epistemic -> KOI / `personal-koi` + `unified-search`
- Each of the five view-templates is listed with its derivation / specialization rationale.

## ADR-0070 Pattern Admission Shape

From `docs/research/canon-decisions/0070-view-template-catalog-pattern.md`:

- `:70-78`
  - the same five demoted views are the admitted catalog members
- `:86-89`
  - the catalog binds because the five views are specializations of, or join-derivable from, the same three-primary substrate
- `:101-111`
  - `view-template` is admitted as a catalog-pattern without minting separate local slugs for each view
- `:146-148`
  - ADR-0070 explicitly states the five admitted sub-entities and the three primary host substrate verbatim

Audit reading:

- The authoritative shape is stable and unambiguous:
  - 3 primary projections
  - 5 view-templates
  - one host rule: specialization-of or join-derivable-from the three-primary substrate

## Delta: What The Script Has vs What ADR-0058 / ADR-0070 Say

### Delta 1. No evidence of an old flat-8 encoding

Evidence:

- zero matches for the eight projection names or primary/view-template vocabulary in the script, README, or CLAUDE docs
- the PM registration entry is just project metadata

Audit judgment:

- The specific suspicion "script still encodes the older flat-8 shape" is **not confirmed**.

Severity:

- `ALIGNED` on this narrow question

### Delta 2. PM registration is source-project registration, not projection-shape registration

Evidence:

- `project_bridge_notes.py:40-60`
- `project_bridge_notes.py:924-935`

What the script has:

- project key
- project id
- claimant org
- bridge-note directory

What the ADR shape would require if this script were truly the operational instantiation of the whole model:

- some explicit distinction among Constitutional / Commitment / Epistemic
- or at minimum an explicit "epistemic-only bridge-note projection" declaration
- and, if claiming full ADR-0058/0070 alignment, some relation to the five view-templates or host rule

Audit judgment:

- The PM entry is real, but it is only a source-registration surface.
- It does not encode the 3-primary + 5-view-template shape.

Severity:

- `PARTIAL`

### Delta 3. Runtime behavior is narrower than PM canon currently claims

Evidence:

- `project_bridge_notes.py:5-7`
- `project_bridge_notes.py:441-455`
- `project_bridge_notes.py:513-526`
- `project_bridge_notes.py:598-610`
- `/Users/darrenzal/projects/poietic-match/docs/protocol.md:396-403`
- `/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0014-canon-alignment-through-spore-adr-0060.md:138-140`

What the script actually materializes:

- source claims
- review claims
- concepts
- questions
- argumentative edges in KOI

Best-fit canonical interpretation of that runtime:

- Epistemic-primary participation only
- specifically bridge-note intake into the KOI knowledge graph

What PM canon currently claims:

- the script registration is the operational instantiation of PM's 3-primary + 5-view-template participation

Audit judgment:

- The strongest current drift is not "old flat-8 code."
- The strongest current drift is **narrative overclaim**: PM canon treats a narrow epistemic intake script as if it operationalized the whole 3-primary + 5-view-template architecture.

Severity:

- `STRONG`

### Delta 4. Epistemic-primary alignment is real but incomplete

Evidence:

- `governance-artifacts-and-graph-projections.md:116`
  - bridge-note intake is named under the Epistemic primary's KOI materialization
- `project_bridge_notes.py:5-7`, `:441-455`, `:513-526`, `:598-610`

Audit judgment:

- The script is not canon-hostile.
- It cleanly fits one slice of ADR-0058: Epistemic-primary bridge-note intake into KOI.
- It does not by itself instantiate Constitutional, Commitment, or the five view-templates.

Severity:

- `PARTIAL`

### Delta 5. Adjacent infrastructure documentation has drift of its own

Evidence:

- `project_bridge_notes.py:5-6` still says "Spore and IC" even though the code now includes `fc` and `pm`
- `/Users/darrenzal/projects/regenai/koi-processor/README.md:302-314` still says Spore and IC only
- `/Users/darrenzal/projects/regenai/koi-processor/CLAUDE.md:304-307` still says Spore and IC only and lists only two claimant orgs
- PM canon still refers to the script as "Spore's `project_bridge_notes.py`" even though the live file is in `koi-processor`

Audit judgment:

- The script-adjacent documentation layer is stale relative to the codebase topology.
- This is not the core ADR-0058 shape issue, but it is evidence-based adjacent drift in the same infrastructure area.

Severity:

- `WEAK` to `PARTIAL`

## Best-Fit B-Axis Finding

Recommended classification from the audit evidence:

- `B2 PARTIAL realignment needed`

Why this is not `B1`:

- no flat-8 encoding was found

Why this is not `B3`:

- PM canon's current claim about what the script operationalizes is materially stronger than what the script actually does

Why this is not `B4`:

- the script is not a literal 3-primary + 5-view-template registration surface today

## IC Audit

The script does handle IC:

- `project_bridge_notes.py:46-50` registers `ic`
- `project_bridge_notes.py:928-929` path-dispatches `intelligence-commons` notes to `project_key = "ic"`

IC's canon stance matters here:

- `/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0018-canon-alignment-through-spore-adr-0060.md:114`
  - IC explicitly declines adoption of Spore's ADR-0058 graph-projections treatment at the IC-canon layer
  - IC says its primary graph is the KOI knowledge graph

Audit reading:

- The same script behavior that is under-specified for PM is not the same problem for IC.
- For IC, a KOI bridge-note claim projection is congruent with IC's explicit "knowledge-graph first" stance.
- No additional IC-specific 3-primary / 5-view-template repair is required from this audit.

IC verdict:

- `C1 INCLUDE`
- outcome: no IC remediation required beyond shared doc hygiene if the operator later ratifies bundled koi doc cleanup

## Backward-Compatibility Assessment

Safe / additive class (`E1`):

- clarify the script as an epistemic bridge-note projector
- add optional metadata or comments if needed
- fix adjacent script/README/CLAUDE location/support-list drift

Risky class (`E2`):

- introducing a required projection enum
- changing persisted schema
- teaching this script to materialize Constitutional or Commitment data it does not currently own
- implying service restart or downstream contract changes

Audit judgment:

- Evidence only supports backward-compatible, additive work.
- A breaking realignment is not justified from the current audit.

## Other Infrastructure-Layer Drift Surfaced

1. `project_bridge_notes.py`, `README.md`, and `CLAUDE.md` in koi-processor still describe the script as Spore+IC-only even though PM and FC are now in `PROJECTS`.
2. PM canon attributes the live file to Spore rather than to koi-processor.
3. No projection-shape vocabulary appears anywhere in the live script or its adjacent docs, so any future cross-repo citation should be precise about "epistemic bridge-note intake" vs "full 3-primary architecture."

## Audit Summary

- The old parking suspicion of a literal flat-8 script was **not confirmed**.
- The live script is best understood as a **project-keyed epistemic bridge-note projector into KOI**, not a full graph-projection registry.
- The strongest present drift is **cross-repo prose drift**:
  - PM canon says the script operationalizes the whole 3-primary + 5-view-template shape
  - the code operationalizes only the Epistemic-primary bridge-note intake slice
- Best-fit finding for Step 1 decision surfacing: `B2 PARTIAL realignment needed`
