---
doc_id: spore.connection.canon-rebuild-arc-method-retrospective
doc_kind: connection
status: active
depends_on: []
relates_to:
  - spore.connection.wiki-intake-canon-review-retrospective
---

# Canon-Rebuild Arc: Method Retrospective

**Arc window**: 2026-04-22 through 2026-04-25.

**Primary concern**: how Spore rebuilt canon language, disposed a dense queue of candidate admissions, stabilized downstream projections, formalized a pattern-library without inflating canon-object-class count, and then extended the same method discipline into a foundation-doc family admission cycle and a new cross-repo alignment cadence.

**What this note does**: turn the 2026-04-24 harvest manifest at `tmp/canon-rebuild-arc-method-harvest-2026-04-24.md` into a collaborator-citable bridge note, and then extend it with `§9` and `§10` covering the 2026-04-25 arc extension (Phase 4 foundation-doc admissions and Wave-N cross-repo alignment). The harvest manifest is insurance. This note is the canonical method-facing synthesis.

**Companion artifact**: [`wiki-intake-canon-review-retrospective`](./wiki-intake-canon-review-retrospective.md) explains how a large prior-art corpus moved three repos' canons. This note explains how a canon-rebuild program changed the method for making canon inside Spore itself.

**Recorded arc ledger nuance**: `CLAUDE.md` tracks the canon-rebuild arc via the ADR chain `0044-0058`, `0059a`, and `0061-0070`, while several method lessons in practice also depend on the immediate downstream stabilization ADRs `0059` and `0060`. Rather than force a fresh count here, this note cites the ADR chain by phase and uses the ledger as recorded.

**Stable outcomes across the full sweep**:

- Zero rollbacks, with validator baseline held exact at `9 errors / 30 warnings`.
- Canon ended the sweep at `9 primitives / 3 doctrines / 2 modes / 2 properties / 6 derived glossary slugs / 7 in-scope patterns`, while preserving the 4-category canon-object-class inventory.

## §1 What the arc had to solve

The canon-rebuild arc was not a single cleanup. It had three structurally different jobs, and the method had to mature enough to handle all three without collapsing them into one generic ADR shape.

### §1.1 Phase 3b had to rebuild grammar without inflation

ADR-0044 reopened the core thesis because the canon's self-description had drifted away from the grammar actually earned by prior corpus work. That opened a harder question than "fix the wording": how do you extend, clarify, decompose, or decline candidate concepts without treating every conceptual pressure as a reason to mint a new primitive?

Phase 3b answered that by exercising multiple positive move-types:

- doctrine-layer admission in ADR-0045
- extend-existing-primitive in ADR-0046
- multi-layer decomposition in ADR-0047
- mode-across-primitives in ADR-0048
- new-primitive admission in ADR-0049 and ADR-0050
- property-of-primitive in ADR-0051
- derived-glossary-with-framing in ADR-0052
- bundled glossary refinement in ADR-0053

That move-repertoire matters methodologically because the arc stopped treating "admit or decline" as the only two shapes available. A concept could earn a different kind of canonical home depending on what sort of thing it actually was.

### §1.2 Post-Phase-3b work had to decline honestly without losing articulation

The arc then faced concepts that were real, forceful, and already legible in the source material, but still did not justify full admission in the shape first proposed.

That is where ADR-0054, ADR-0055, ADR-0061, and later ADR-0066 became load-bearing. They showed that decline is not one thing:

- sometimes the right move is decline-with-triggers
- sometimes it is decomposition into a framing note
- sometimes it is inline prose only
- sometimes the problem is category misfit and the right move is reclassification

This is one of the clearest method gains from the arc: honest decline became a designed repertoire rather than a fallback embarrassment.

### §1.3 Phase 2c had to realign downstream canon after the grammar shifted

Once the grammar moved, the repo still contained older semantic residue, file names, projection sets, and downstream explanatory documents that presupposed the earlier structure.

Phase 2c and its immediate cleanup work therefore had a different methodological burden:

- semantic stripping without overreach in ADR-0056
- rename governance with history preservation in ADR-0057
- re-tier graph projections in ADR-0058
- execute strict-scope mechanical cleanup in ADR-0059 and ADR-0059a
- selectively rewrite a synthesis-layer artifact without flattening its useful content in ADR-0060

This phase proved that canon rebuild is not complete when the "big ideas" land. It is complete when the downstream explanatory surfaces stop lying about the new canon.

### §1.4 Pattern-library phase had to add expressive power without creating a fifth object class

By 2026-04-24 the repo had live pattern artifacts, parked candidates, and an under-specified pattern-library. The danger here was obvious: invent too little and the pattern layer stays incoherent; invent too much and the canon-object inventory bloats.

ADR-0065 solved that by introducing the M4 sub-class framework under the existing pattern family:

- `composition-pattern`
- `design-criteria-pattern`
- `catalog-pattern`

Wave 2 then tested all three:

- ADR-0068 admitted a composition-pattern
- ADR-0069 declined a design-criteria-pattern with triggers
- ADR-0070 admitted a catalog-pattern

That 2:1 admit-decline ratio mattered. It demonstrated filtering power, not rubber-stamping.

## §2 How the canon actually changed

This retrospective is method-facing, but the method only matters because it changed the repo's durable structure.

### §2.1 Phase 3 and 3b reset the grammar around what had actually been earned

ADR-0044 aligned the core thesis with the roster that corpus work had already validated rather than the older "five primitives" story. That did two things at once:

- it corrected the canon's self-description
- it created a stricter baseline for every later admission question

From that corrected baseline, Phase 3b then added structure without discarding parsimony:

- ADR-0045 admitted `care-commoning` as a third cross-cutting doctrine
- ADR-0046 stratified Field rather than adding a new rules primitive
- ADR-0047 decomposed power across existing primitives instead of treating it as a single new object
- ADR-0048 admitted `expressive-power` and `constructed-power` as modes-across-primitives
- ADR-0049 admitted `reproduction-continuity` as a new primitive
- ADR-0050 explicitly committed the canon to Side B on sociality-reducibility and admitted `joint-commitment`
- ADR-0051 clarified `relational-identity` as a Holon property
- ADR-0052 admitted `reciprocity` and `trust` as derived glossary slugs with a framing note
- ADR-0053 refined five primitive bullets and added `attestation-of-execution`, `permeability`, and `double-boundary`

By the end of ADR-0053 the canon had settled into a more articulated but still disciplined structure:

- 9 primitives
- 3 doctrines
- 2 modes
- 2 properties
- 5 derived glossary slugs at that point in the arc

The method lesson is that the canon became richer by differentiating admission shapes, not by letting every pressure become a primitive.

### §2.2 Post-Phase-3b dispositions kept the canon from overreacting

ADR-0054 declined the rewilding thesis but canonized six re-opening triggers. The importance of that move was not only substantive. It formalized a way to say "not yet" without pretending the concept was frivolous.

ADR-0055 evaluated Encounter honestly and found that primitive test-(a) failed. Instead of either forcing a tenth primitive or erasing the idea, the canon:

- admitted `encounter` as a derived glossary slug
- authored a framing note
- parked `federation-encounter` as a future pattern-library candidate

ADR-0061 did analogous work for `asymmetric-joint-commitment`: the composition was real, the phrase was already legible, but no distinct protocol surface earned slug admission. The right move was decline-inline-prose-only.

ADR-0062, ADR-0063, and ADR-0064 then disposed three enactive tensions through scope-conditioning on Membrane, Signal, and Field respectively. This was lighter than new-admission, but heavier than cosmetic softening. The canon preserved both branches honestly instead of pretending one family of cases exhausted the primitive.

### §2.3 Phase 2c and downstream work made the new grammar operationally true

ADR-0056 deleted zoom-invariance claims, demoted `intent-pressure` to the research/connections layer, and stripped decorative dynamical vocabulary where it was load-bearing only as style.

ADR-0057 renamed `constitutional-artifacts-and-graph-projections.md` to `governance-artifacts-and-graph-projections.md` and propagated the rename across the repo. This mattered methodologically because it reused the earlier rename discipline from ADR-0043 rather than improvising a one-off file move.

ADR-0058 reduced graph projections to three primaries and five parked view-templates. That demotion later became the source material for ADR-0070's catalog-pattern admission.

ADR-0059 and ADR-0059a are worth naming even though the arc ledger is usually tracked elsewhere, because they proved two important things:

- strict-scope mechanical ADRs are real ADRs, not lesser work
- preserving scope can be more important than making a file "perfect" in one pass

ADR-0060 then realigned `coordination-grammar.md` without bulldozing synthesis-layer material that still held value. That is a distinct and important method point: once canon changes, synthesis artifacts may need selective rewrite, not total replacement.

### §2.4 Pattern-library phase turned an intuition into governed machinery

ADR-0065 made pattern-library work legible as infrastructure rather than ad hoc parking.

It did so by:

- establishing the M4 sub-class framework
- preserving the existing 4-category canon-object-class inventory
- making dedicated-ADR admission the workflow for new pattern entries
- extending scope-conditioning discipline from primitive bullets to protocol-file framing

ADR-0066 then showed what happens when a suspected pattern outlier is not really a new pattern shape at all: `project-briefing-pattern` was reclassified to `doc_kind: spec`. That was methodologically cleaner than inventing a fourth pattern sub-class on single-doc evidence.

ADR-0067 clarified that additive enum vocabulary work could land as an ordinary ADR without foundational-reframing escalation. That matters because it protects the canon from over-ceremonializing small but real schema moves.

ADR-0068, ADR-0069, and ADR-0070 completed the M4 validation sweep. By the end of ADR-0070:

- pattern count moved from 5 to 7
- `federation-encounter` and `view-template` were admitted
- `four-enabling-conditions` remained canon-legible but not canon-admitted

The pattern-library was no longer a parking lot. It had a tested admission grammar.

## §3 Named canon-method catalog

The raw harvest manifest preserves more than twenty method-precedents. The important retrospective move is not to list them all flatly, but to compress them into a named catalog that future work can actually reuse.

### §3.1 Decision-gated execution

The most durable operating pattern of the arc was the decision-gated plan structure:

- Steps `0 / 0.5 / 1 / 2` happen outside the session-atomic window
- Steps `3-7.5` happen inside the session-atomic window
- the operator decides before the commit window opens
- execution then becomes narrow, auditably atomic work

This pattern is visible across Phase 3b, the parked-candidate sweep, the downstream propagation ADRs, and the pattern-library phase. Its practical outcome was not merely speed. It protected rollback integrity because the argument was settled before files started moving.

### §3.2 Execution-side audit discipline

The arc repeatedly discovered that plan quality is not enough. Execution needs its own audit discipline.

Three separate checks became explicit:

- **plan-vs-evidence re-verification**: ADR-0044 and ADR-0049 surfaced that plan summaries can lag the live evidence base
- **capstone-or-ADR snapshot versus current canon state**: ADR-0050 and ADR-0053 showed that prior summaries can become descriptively stale after intervening ADRs land
- **parallel-file synchronization audit**: ADR-0053 exposed that `project-vision.md` and `governance-artifacts-and-graph-projections.md` can drift out of parallel even when both are "canon-authoritative"

The method gain is straightforward: re-grep the live repo before deciding that a deferred item still looks the way the plan said it did.

### §3.3 Positive move repertoire

The arc operationalized a reusable repertoire of positive canonical moves:

- doctrine-layer admission
- extend-existing-primitive
- multi-layer decomposition across existing primitives
- mode-across-primitives
- new-primitive admission
- comprehensive multi-move ADR
- property-of-primitive
- derived-glossary-with-framing-note

This repertoire matters because it prevents a common failure mode in canon work: using one favored move-shape for every problem. The Spore grammar became more stable when the method let different conceptual pressures earn different canonical homes.

### §3.4 Four decline-shapes

By the end of ADR-0066 the repo had four canonized decline-shapes:

- **decline-with-evidence-triggers**: ADR-0054 and ADR-0069
- **decompose-and-park-as-framing-note**: ADR-0055
- **decline-inline-prose-only**: ADR-0061
- **decline-pattern-status-via-reclassification**: ADR-0066

This is one of the most important method maturations in the arc. It means "decline" is no longer a blunt verdict. The canon can say why a concept does not enter, where its articulation properly lives, and what kind of future evidence would change the answer.

### §3.5 Primitive-bullet scope-conditioning

ADR-0062, ADR-0063, and ADR-0064 established `decision: scope-condition` as a real canonical move:

- Membrane was conditioned between autopoiesis-active and passive-boundary readings
- Signal was conditioned between participatory-sense-making and sender-receiver readings
- Field was conditioned between co-presence-requiring and text-authoritative readings

This triad matters because it solved a recurring enactive tension without either collapsing to one branch or pretending both branches were equally universal. Scope-conditioning preserved canon legibility at the primitive level while staying lighter than a fresh object admission.

ADR-0065 then extended the same discipline from primitive bullets into protocol-file framing, proving that scope-conditioning is not confined to one target class.

### §3.6 Honest-rigor cluster-counting

ADR-0064 articulated a discipline that became one of the arc's most consequential filters: primary-inspiration sources do not automatically count as full independent clusters for heavier admission thresholds.

This prevented the arc from treating "strong in one beloved corpus" as the same thing as "cross-traditionally earned."

The discipline then generalized:

- first at the structural primitive scope-conditioning layer in ADR-0064
- then at the pattern-admission layer in ADR-0069

Its importance is not merely conservative. Honest-rigor kept the canon from laundering preference into evidence.

### §3.7 Parsimony-elegance dual discipline

The arc matured from a vague pro-parsimony instinct into a layered discipline:

- **parsimony** decides whether an object earns entry at all
- **elegance** shapes which canonical form best honors what the object is

This distinction became explicit in ADR-0048 and was codified as feedback memory after ADR-0065. It rejects a specific anti-pattern: "admit it because it would fill a beautiful gap."

That anti-pattern mattered because the arc repeatedly encountered concepts that would indeed have completed attractive symmetries. The method held the line that elegance can shape fit only after earning, never substitute for earning.

### §3.8 Trigger-gates versus earning-tests

ADR-0055 authored triggers for future reconsideration of federation-encounter. ADR-0065 later authored earning-tests for pattern admissions. ADR-0068 then made the distinction explicit:

- triggers authorize re-entry
- earning-tests govern admission

The two layers are easy to conflate. The arc showed why they must remain separate. A concept can be ripe for reconsideration and still fail the admission test. ADR-0069 is the clearest case: the design-criteria candidate was re-entry-authorized, but it still failed the stricter earning judgment under Reading A.

### §3.9 Audit-then-propose

ADR-0065 introduced a new kind of planning discipline for schema-harvest work: do not decide the rule before auditing the living artifacts.

That meant:

- Step 0.5 reads the existing files and extracts what is actually there
- Step 1 surfaces options that fit the evidence
- Step 2 ratifies a rule that has been shaped by the audit rather than projected onto it

This prevented the pattern-library infrastructure ADR from becoming a retroactive rationalization of a pre-chosen theory.

### §3.10 The M4 sub-class framework

M4 is not just a pattern-library design. It is a canon-method precedent for how to increase expressive power inside an existing canon family without inventing a new top-level canon-object class.

Its achievement was double:

- it gave structurally different pattern candidates different earning-tests
- it preserved the 4-category canon-object-class inventory

In other words, M4 demonstrated a disciplined way to add internal variation without top-level inflation.

### §3.11 Reading A versus Reading B tension-surfacing

ADR-0069 made another subtle method contribution. When two real readings of the governing discipline existed, the audit did not collapse them prematurely.

Instead it:

- named Reading A and Reading B explicitly
- assembled evidence for both
- let the operator judge which one governed the case

This matters because difficult canon work often hides behind false clarity. ADR-0069 instead preserved the ambiguity long enough for a real judgment call to be visible.

### §3.12 Conservative edge-resolution and evidence quality tiers

The pattern-library phase also produced two quieter but reusable method lessons:

- ADR-0070 treated frontmatter edges conservatively, carrying only resolvable doc IDs and keeping sub-entity enumeration in prose where full edge resolution would create validator risk
- ADR-0070 also distinguished constituent quality from admission threshold, allowing a catalog-pattern to pass even with STRONG / PARTIAL / WEAK spread across members when the rubric's actual threshold had been met

Together these moves show that method rigor is not only about big philosophical tests. It is also about restrained frontmatter design and honest quality annotation.

## §4 Prediction-validation chains

One sign that a canon method is maturing is that it starts generating predictions which later ADRs either validate or falsify. This arc produced several such chains.

### §4.1 ADR-0048 -> ADR-0065 -> ADR-0066

ADR-0048 made "parsimony as earning-test outcome, not axiom" explicit. That mattered later when ADR-0065 encountered the `project-briefing-pattern` outlier.

The tempting move would have been to invent a fourth pattern sub-class because one awkward artifact did not fit the new triad cleanly.

ADR-0065 refused that move and explicitly deferred K4 on honest-rigor grounds.

ADR-0066 then validated the restraint:

- the artifact failed the composition-pattern test
- it hard-failed the design-criteria-pattern test
- it hard-failed the catalog-pattern test
- the correct diagnosis was not "missing sub-class"
- the correct diagnosis was "wrong category: this is a spec"

That is a genuine prediction-validation chain. The method said "do not widen the schema on single-doc discomfort," and the follow-on audit proved that the discomfort was classification error, not missing ontology.

### §4.2 ADR-0054 -> ADR-0069

ADR-0054 created the first Johar-primary-inspiration decline-with-triggers shape. ADR-0069 later applied the same posture to a different Johar-derived candidate.

This matters because a one-off decline can always be dismissed as contingent judgment. Two structurally similar declines across distinct candidates show an operating discipline:

- respect the source's conceptual force
- keep the concept canon-legible
- refuse admission when cross-traditional earning is not there
- leave explicit re-entry triggers

The discipline thus proved portable across more than one case.

### §4.3 ADR-0064 -> ADR-0069

ADR-0064 first stated the honest-rigor cluster-counting rule in a scope-conditioning context. ADR-0069 then moved the same rule into pattern-admission, where the pressure to relax it was higher.

The reuse matters because it shows that honest-rigor was not just a local convenience for one primitive dispute. It became a general filter on heavier admissions.

### §4.4 ADR-0065 -> ADR-0068 / ADR-0069 / ADR-0070

ADR-0065 authored the M4 framework in the morning. Wave 2 tested it immediately:

- ADR-0068 validated the composition-pattern path
- ADR-0069 validated that M4 could decline honestly
- ADR-0070 validated the catalog-pattern path

This is stronger than a purely theoretical framework write-up. The framework entered the repo already exercised against positive and negative cases.

### §4.5 Scope-conditioning as a repeatable answer, not a lucky patch

If ADR-0062 had been the only scope-conditioned primitive, it would have remained ambiguous whether the move was a one-off repair.

Because ADR-0063 and ADR-0064 extended the same structure across Signal and Field, the pattern became canon-method rather than ad hoc patching.

The triad is therefore a prediction of its own: once the first two instances matched, the third established a structural answer to a recurring kind of tension.

## §5 Session-orchestration lessons

The retrospective would be incomplete if it treated method only as document logic. The 2026-04-24 session also matured how orchestration itself worked.

### §5.1 Parent-session and child-session division of labor

The orchestrator-child pattern stabilized around a clean split:

- the parent session held `CLAUDE.md`, memory continuity, queue ordering, and Step-2 judgment
- child sessions executed one ADR at a time with narrow scope and fresh context

This preserved both continuity and freshness. The parent knew the arc. The child only needed the exact slice of canon relevant to its ADR.

### §5.2 Comprehensive fresh-agent prompts are worth the cost

The child prompts ran roughly six hundred to seven hundred lines, but that size bought consistency:

- working environment
- canon baseline
- origin ADRs
- scope axes
- non-negotiable method discipline
- deliverables
- session-atomic projection

The outcome was notable: five Wave 1 and Wave 2 child sessions landed cleanly with consistent close-out quality. The prompt was not overhead. It was method-bearing infrastructure.

### §5.3 Constraint-10 and dirty-tree discipline

The repo had a dirty untracked baseline and a parent-session `CLAUDE.md` that stayed modified during multiple child executions.

The arc's orchestration discipline handled that by:

- surfacing tracked changes outside the ADR target-set as a Step-4 tripwire
- pausing for operator ratification instead of silently normalizing drift
- explicitly staging only target files
- never relying on broad staging commands

This is a practical method lesson, not just git hygiene. Canon-bearing repos accumulate scratch, manifests, and screenshots. If the staging discipline is loose, the intellectual method becomes unauditable.

### §5.4 Two review rounds are usually enough

Across the arc, review loops showed a consistent pattern: round 1 finds real omissions, round 2 often clears the remaining substantive issues, and round 3 plus tends to degrade into self-reference or diminishing-return refinements.

The 2-round cap did not mean "do not review deeply." It meant "recognize when production work teaches more than another abstract review pass."

### §5.5 Session-atomic time tracks canon surface, not abstract complexity

One of the clearest operational lessons from the arc is that elapsed authoring time correlated more with surface touched than with conceptual sophistication.

Examples from the ledger:

- some decision-heavy ADRs landed quickly because they touched very few files
- some seemingly modest cleanups took longer because their downstream footprint was broad

That matters because it changes how future work should be budgeted. Complexity estimates based only on philosophical difficulty will be wrong if they ignore canon surface.

### §5.6 Cross-repo discipline remained strict even when the work was local

The arc repeatedly used sibling repos as audit context without casually spilling edits into them.

The mature pattern was:

- IC and PM stay read-only until a sibling ADR is explicitly in scope
- end-to-end zero-change verification matters
- cross-repo citations should point to ADR numbers, not commit SHAs

That discipline keeps cross-repo reasoning available without turning every canon session into a three-repo entanglement.

## §6 Forward state after the capstone

This bridge note closes the method-harvest obligation from the 2026-04-24 session, but it does not close the broader queue.

The next method-bearing work remains:

- `ic:ADR-0019` and `pm:ADR-0015` Wave 3 alignment, carrying the new Spore ADRs into sibling repos with the existing cross-repo discipline
- the cross-repo projection-script audit around PM registration and the ADR-0058 `3 primary + 5 view-template` shape
- the `/end` skill validator-check ADR in `darren-workflow`, which will need a small but real baseline-mechanism design
- ADR-0059b and the deferred `structured-encounter` question, each kept parked until their narrower triggers justify reopening
- later strategic work in Phase 4 and Phase 5

Methodologically, the important thing is that these are now queued as distinct problem shapes. The arc reduced confusion about what kind of work each one is.

## §7 Source basis and ADR chain

This note is synthesized from:

- `CLAUDE.md` session status and ledger notes
- `tmp/canon-rebuild-arc-method-harvest-2026-04-24.md`
- project memory entries, especially `project_canon_rebuild_phase_3b.md` and `project_pattern_library_phase.md`
- the ADR chain itself

For collaborator citation, the ADR chain is easiest to navigate by phase:

- **core rebuild and post-Phase-3b queue formation**: ADR-0044 through ADR-0055
- **Phase 2c and immediate stabilization**: ADR-0056 through ADR-0060, plus ADR-0059a
- **dedicated-ADR queue closure and scope-conditioning triad**: ADR-0061 through ADR-0064
- **pattern-library phase and Wave 2 validation**: ADR-0065 through ADR-0070

The quickest ADR entry points for a collaborator such as Jeff are ADR-0044, ADR-0048, ADR-0054, ADR-0065, ADR-0066, ADR-0069, and ADR-0070. Those seven decisions expose most of the method shifts named in `§3` and `§4`, while the surrounding ADRs show the method operating at full resolution.

## §8 What this arc actually gained

The most durable output of the canon-rebuild arc is not any single admission or decline. It is a clearer answer to the question: how does Spore change canon without either freezing prematurely or inflating indiscriminately?

The answer, after this arc, is much sharper than it was on 2026-04-22:

- use decision-gated execution
- audit live evidence before trusting prior summaries
- pick the move-shape that matches the thing
- keep a real repertoire of decline-shapes
- separate triggers from admission tests
- let parsimony gate entry and elegance shape fit
- widen internal variation before minting new top-level categories
- preserve auditability all the way down to staging discipline

That is why this note belongs beside the wiki-intake retrospective. The earlier retrospective explains how corpus pressure changed the canon. This one explains how the canon learned to change itself more rigorously.

## §9 Arc extension: Phase 4 and Wave-N alignment (2026-04-25)

The retrospective above ends at 2026-04-24 with the pattern-library phase closed at ADR-0070 and the forward-state queue in `§6` listing Phase 4, Wave-N cross-repo alignment, and infrastructure follow-ons as the remaining method-bearing work.

By the evening of 2026-04-25 most of that queue had closed. Phase 4 Tier A and Tier B landed five foundation docs in a single day, three cross-repo alignment ADRs extended IC's and PM's chains forward, and the method catalog gained roughly a dozen further canon-method precedents that this section compresses into named entries. The `§6` forward-state list was not prescient; it simply named the shape of the work that was next in queue. What is worth recording here is what the execution proved about method when done at that velocity without rollback and without sibling-repo drift.

Canon state at the end of the 2026-04-25 arc is `9 primitives / 3 doctrines / 2 modes / 2 properties / 14 derived glossary slugs / 7 in-scope patterns / 11 foundation docs`, with the four-category canon-object-class inventory preserved. Validator held `9 errors / 30 warnings` exact across every commit of the day.

### §9.1 Phase 4 Tier A established the foundation-doc admission template

The Phase 4 scoping produced nine foundation-doc deficits, tiered A / B / C. Tier A admitted F1 (sensor-oracle-governance, ADR-0073) and F4 (representation-authority, ADR-0074) in the same morning. F1 established the template: ADR-0042 shape plus unified-modality principled-rule plus rule-stratification inheritance from ADR-0046 plus forward-ref-cite-all. F4 extended ADR-0041 text-authoritative-representation from a two-layer treatment into a five-layer inter-layer precedence doctrine via a hybrid default-plus-context-overrides-plus-appeal-protocol shape.

F4's load-bearing method contribution was the **fact-vs-specification text-type distinction**: canon specifications like vision documents, ADRs, and doctrine are text-authoritative; factual reports like sensor readings, attestations, and measurements are instance-authoritative. That distinction resolved a latent authority tension between ADR-0041 and F1, and became the reusable answer for any later doctrine needing to state how representation-layers interact without contradicting each other.

The method lesson is that Tier A was not only about admitting the right foundation docs. It was about discovering what a reusable foundation-doc admission template actually looks like when authored cleanly enough that the next four admissions can inherit its shape rather than re-invent it.

### §9.2 Phase 4 Tier B validated template-adaptability under substrate heterogeneity

Tier B closed same-day in the afternoon with F6 (failure-modes, ADR-0075), F5 (actuator-logic, ADR-0076), and F3 (actor-governance, ADR-0077). The operator-ratified sequence ran F6 → F5 → F3 rather than handoff-default F3 → F5 → F6, because a fresh afternoon session starts with no cross-ADR cache warmth and invention-heavy work is cleaner before synthesis-heavy work. That choice held up in practice: F6 authored a canon-legible eight-category failure-language taxonomy where Spore previously had none, F5 landed a response-doctrine in one-hundred-twenty-two seconds (the day's record) once substrate was complete, and F3 wove four prior-landed substrate ADRs into an eight-category actor-governance taxonomy under a novel fifth B-axis value.

The method contribution most visible across Tier B is that the F1 template was reusable but not rigid. Each admission honestly picked a different B-axis shape based on the substrate it was organizing. F6 diverged from F1's unified-modality principled-rule because eight structurally heterogeneous failure-categories do not unify cleanly; F5 re-converged on unified principled-rule because response-doctrine substrate was substrate-complete; F3 introduced the selective-per-category synthesis-depth shape because substrate maturity varied across its eight categories.

### §9.3 B-axis progression as substrate-driven canon-method discipline

The B-axis progression across the five Phase 4 admissions was **B1 (F1) → B1 (F4) → B2 (F6) → B1 (F5) → B5 (F3)**. Each value was justified by audit of its substrate's structural heterogeneity, not by inheritance from the prior admission's precedent shape. The progression matters because it refutes two tempting simpler disciplines.

A default-to-prior-shape discipline would have forced F6 into B1 unified-modality and produced either a false symmetry across heterogeneous categories or a padded principled-rule that did not describe its substrate. A diverge-as-default discipline would have forced F5 into B2 per-category and lost F4's cite-don't-redefine advantage for categories where the substrate was already coherent.

The honest discipline, ratified five times in a single day, is that B-axis is substrate-driven. Each foundation doc picks B-axis based on what its substrate actually looks like at Step 0.5 audit. B1, B2, and the newly-introduced B5 selective are all legitimate; none are defaults. F3's B5 selective is a canonical new shape for cases where the substrate is heterogeneous enough that uniform treatment would either invent fake symmetry or violate F5's cite-don't-redefine discipline.

### §9.4 H-axis evolution within a single tier

A parallel pattern showed up on the H-axis of doctrinal relational-shape. F6 used H2 pure-sibling (failure counterpart to ADR-0042 structural-legitimacy). F5 introduced H3 two-way hybrid (substrate-child to ADR-0042 plus operational-pair sibling to F6). F3 extended to H3 three-way hybrid (substrate-child to ADR-0042 plus operational-pair siblings to both F5 and F6).

The method contribution is that foundation docs can carry one vertical substrate-coupling and multiple horizontal operational-pair siblings simultaneously. That makes H3 a scalable relational pattern rather than a one-off F5 expedient. It also gives canonical language to the intuition that connective-tissue foundation docs which close multiple prior forward-refs are doing Tier-closing work, not just their own local work.

### §9.5 Additional named canon-method catalog entries

Tier A and Tier B together surfaced about a dozen reusable method-precedents beyond the B- and H-axis progressions already named. The important ones are these.

**Foundation-doc slug-admission piggyback.** Rather than author separate glossary-bundle ADRs, the Phase 4 admissions admitted new slugs directly inside their foundation-doc ADRs when those slugs were load-bearing for the doc's own doctrine. Eight slugs admitted across four admissions (F1: `longitudinal-attestation`, `replication-regime`; F6: `failure-mode-class`, `coupling-breakdown`; F5: `epistemic-gap`, `response-doctrine`; F3: `actor-standing`, `governance-response`). The discipline is that glossary-admission is atomic with the ADR that load-bears it when admission is forced by the same substrate.

**Cite-don't-redefine cross-foundation-doc composition.** F5's G2 axis wholesale-inherits F4's §5.3 appeal-protocol without duplication. This preserves single-source-of-truth and avoids maintenance-drift between parallel doctrine statements. Reusable for any foundation doc composing with prior foundation substrate; introduced in F5; inherited by F3's appeal-protocol reference.

**Multi-forward-ref cluster-discharge.** F3 discharges three forward-refs in a single atomic admission: ADR-0042 `§82` (held from the 2026-04-22 capstone), F6.7 actor-capture (forward-ref from ADR-0075), and F5 `§4.2` authority-delegation (forward-ref from ADR-0076). This is the highest single-ADR forward-ref count in the canon-rebuild arc. It shows that when a foundation doc closes multiple prior forward-refs simultaneously, it is carrying Tier-closing connective function beyond its own local scope. That pattern should be expected for any foundation doc that lands late in a Tier sequence.

**Audit-proposed category earned by residue.** F6.8 meta-pattern (`substitution-trap` plus linguistic-closure plus capture-via-composition) was not in the operator-seeded seven failure categories. Step 0.5 audit against Opus-4-7 exemplars produced an eighth category as honest residue of the seeded set. Operator ratified. This extends the audit-then-propose discipline from `§3.9` to structural non-trivial scope, validating the discipline at levels heavier than typo-cleanup or single-slug refinement.

**Two-direction forward-reference pattern.** F6 simultaneously inherits F1 substrate (its F6.3 sensor-failure sub-taxonomy) and forward-refs F3 substrate (its F6.7 actor-capture deferral). This is distinct from F1 and F4, which only forward-ref. It shows that foundation docs landing mid-Tier can carry both upstream substrate dependencies and downstream deferred dependencies at once, without forcing either relation to dominate.

**Sibling-doctrine shape to structural-legitimacy.** F6 (failure-modes) is positive-doctrine-to-counterpart-taxonomy paired with ADR-0042 (structural-legitimacy). The pairing is reusable for any future canon where a doctrine has a natural failure-language counterpart that deserves its own foundation layer. F5 and F3 subsequently extended this into operational-pair triangles around the same positive doctrine.

**Cognitive-load-optimization for synthesis-vs-invention sequencing.** The afternoon's F6 → F5 → F3 ordering (invention-heavy before synthesis-heavy with a cold-cache start) is a principled flip of the handoff-default F3 → F5 → F6 ordering. The method lesson is that handoff-default sequencing can be reasoned-against when session-state observations (cache warmth, substrate completeness, forward-ref discipline) warrant. Reusable for any multi-ADR same-session arc.

### §9.6 Wave-N cross-repo alignment added axis-J and validated evidence-gated axis movement

On the evening of 2026-04-25 the five Phase 4 admissions drove a fresh cycle of cross-repo alignment ADRs. `ic:ADR-0020` (at `cef35fe`) and `pm:ADR-0017` (at `349e3ac`) landed as REFERENCE-heavy additive alignments following the `ic:ADR-0019` and `pm:ADR-0015` precedent shape.

Both alignments surfaced a new axis worth naming. Before Wave-N, cross-repo alignment ADRs operated over a nine-axis frame (A through I). The Phase 4 admissions added five foundation docs (Spore's foundation-doc family grew from six to eleven, an eighty-three-percent expansion). That is a structurally different propagation surface than the primitive-bullet and pattern-library work the nine-axis frame had been designed for. Rather than force-fit the new surface under an existing axis, both alignment ADRs added **Axis J for foundation-doc family acknowledgment**. IC's J2 light-refresh added a one-paragraph addendum to `intelligence-primitives.md`'s upstream-reference block. PM's J2 mirrored that shape in `grammar.md`'s §1a upstream-coordination-grammar block.

The method contribution is that cross-repo alignment axis-frames are extensible when honest-rigor Step 0.5 audit surfaces structurally new propagation surface. The extension is audit-driven, not scope-inventive. It prevents the alignment ADRs from either force-fitting or failing to acknowledge material upstream change.

A second discipline tightened during Wave-N was **axis symmetry-and-divergence under audit**. IC's Axis I diverged from `ic:ADR-0019`'s I2 narrow-wide to I1 narrow, because the Step 0.5 drift audit surfaced zero pre-existing IC-local drift. PM's Axis E diverged from `pm:ADR-0015`'s E4 partial to E3 decline, because the Step 0.5 audit of today's F1/F4/F6/F5/F3 β-audits produced zero PM-surface citations. Both divergences were audit-driven; neither was symmetry-breaking relative to the prior sibling ADR. Simultaneously, Axis J ratified symmetrically across both siblings (IC J2 and PM J2), because the same structural upstream pressure affected both repos equally.

The method generalization is that **axis symmetry and axis divergence are both honest when audit-driven**. Alignment ADRs neither have to mirror their predecessor repo's shape, nor have to mirror their own prior alignment's shape. They have to mirror what the Step 0.5 audit shows.

PM's E-axis pattern across three alignments further canonized an **evidence-gated per-arc discipline**. The pattern is OFF (pm:ADR-0014 E1 decline, no F-layer yet) → ON (pm:ADR-0015 E4 partial, reciprocal citation via spore:ADR-0068) → OFF (pm:ADR-0017 E3 decline, no reciprocal citation in 0071–0077). Each E-axis decision was driven by whether the current Spore arc actually cited PM operational evidence in earning-test β-audits, not by symmetry with the prior PM alignment ADR.

### §9.7 DH-PM-1 third-execution validates the Step-0 hard-pause discipline

`pm:ADR-0017` was the third PM alignment ADR to execute the DH-PM-1 pluriversal-accounting-dependence hard-pause check at Step 0. The check has returned NOT-FIRED across `pm:ADR-0014`, `pm:ADR-0015`, and `pm:ADR-0017`. Each execution triangulated multiple sources (README status, CLAUDE.md status, recent-commit evidence, calendar check against Victoria LHC Phase 0) rather than trusting any single indicator. The method lesson is that held-tension discipline in canon-adjacent repos works best when hard-pause checks have an explicit evidence-chain rule rather than a status-field rule. That makes the check resistant to stale frontmatter and to premature status-flips during early operational work.

### §9.8 Prediction-validation chains in this arc

Several 2026-04-22 through 2026-04-24 predictions validated during the 2026-04-25 arc.

**ADR-0065 M4 framework → Phase 4 adaptability.** ADR-0065 claimed that sub-class framing could host structurally different admission shapes without canon-object inflation. Phase 4 validated a strictly parallel claim at the foundation-doc layer: the F1 template hosted structurally different B-axis realizations (B1 / B2 / B5) across five admissions without inflating foundation-doc-class count beyond one.

**ADR-0048 parsimony-as-earning-test-outcome → Axis J discipline.** ADR-0048 established that object-admission thresholds are earning-test outcomes, not axioms. Wave-N extended that discipline to alignment-frame-extension: adding Axis J was an earning-test outcome of the foundation-doc-family expansion, not a default move. The discipline generalized from object-admission to frame-extension cleanly.

**ADR-0055 trigger-gates-vs-earning-tests → pm:ADR-0017 E3 decline.** ADR-0055 separated re-entry authorization from admission judgment. `pm:ADR-0017`'s E3 decline validates that separation at alignment-axis layer: whether a Spore ADR triggers PM-axis movement is independent of whether PM evidence meets the axis's movement threshold.

**pm:ADR-0015 E4 PARTIAL → pm:ADR-0017 E3 decline.** Alone, `pm:ADR-0015`'s E4 could have been read as defining a permanent PM-side alignment shape. `pm:ADR-0017`'s honest E3 decline refutes that reading and validates E-axis as evidence-gated per-arc rather than state-held across alignments.

### §9.9 Session-orchestration at scale

The 2026-04-25 arc executed ten Agent-tool orchestrations across the day plus two direct-edit palate-cleansers plus four housekeeping commits, with zero rollbacks and every sibling repo zero-change-verified at every dispatch.

Most of the `§5` session-orchestration lessons held at scale. Two additions are worth recording.

**Agent-tool addressability post-completion.** Name-based SendMessage addressing works while a child is in-flight but fails after the child completes its initial Step 2 handback. UUID-based addressing succeeds via transcript-resume. Future dispatches should capture the child's UUID at Step 2 and use it for continuation. This is not a canon-method-layer discipline; it is an operational reminder for running ten-dispatch days cleanly.

**Scheduling discipline for push-in-session.** Children that complete ADR ceremony without explicit push-in-session instruction can legitimately hold pushes pending operator authorization. The F3 dispatch held push on that basis. Later Wave-N dispatches included explicit push-in-session directives and executed pushes cleanly. The method reminder is that orchestrator prompts should state push expectation at Step 6 rather than assume it.

### §9.10 Updated forward state

With Phase 4 Tier A + Tier B and Wave-N both closed, four Phase 4 Tier C admissions (F7 min-viable-spore-instance, F8 external-validation-loop, F2 translation-mapping-governance, F9 maintenance-economics) remain deferred-pending operational-demand triggers per the Option D3 TIERED ratification. Phase 5 section-level status labels remain as a corpus-wide sweep not yet queued.

Cross-repo propagation of today's foundation docs into IC and PM operational canon remains queued as a possible Wave-N+1 if downstream pressure surfaces. No such pressure has surfaced yet; both sibling alignments were REFERENCE-heavy rather than adopt-heavy.

The canon-rebuild arc has now extended from 2026-04-22 through 2026-04-25 and spans twenty-nine decisions: the ADR chain `0044-0058`, `0059a`, and `0061-0077`. The ADR chain is legible as five phases:

- core rebuild and post-Phase-3b queue formation: `0044-0055`
- Phase 2c and immediate stabilization: `0056-0060`, plus `0059a`
- dedicated-ADR queue closure and scope-conditioning triad: `0061-0064`
- pattern-library phase and Wave 2 validation: `0065-0070`
- Phase 4 foundation-doc expansion plus Wave-N cross-repo alignment: `0071-0077`

## §10 What this arc extension added on top of §8

The original `§8` summary captured the canon-rebuild arc's durable answer to the question of how Spore changes canon without freezing prematurely or inflating indiscriminately. The 2026-04-25 arc extension did not replace that answer. It did three additional things.

It showed that the method scales. Ten Agent-tool orchestrations in a single day, five foundation docs landing in a single day, three same-day cross-repo alignment ADRs, and zero rollbacks proved that the discipline is not fragile under velocity. Several records set in the 2026-04-22 through 2026-04-24 work held at the higher tempo.

It generalized two disciplines from local moves to structural moves. Audit-then-propose extended from schema-harvest ADRs to structurally new canon categories (F6.8 meta-pattern). Scope-conditioning discipline extended from primitive bullets through protocol-file framing up to cross-repo alignment axis-frame extension (Axis J). Both generalizations are earning-test-validated, not conceptual claims.

It extended the method repertoire with seven new named canon-method entries (foundation-doc admission template, B-axis progression discipline, H-axis evolution within a tier, cite-don't-redefine cross-foundation-doc composition, multi-forward-ref cluster-discharge, sibling-doctrine pairing, cognitive-load-optimization sequencing) plus the axis-J alignment discipline and the evidence-gated E-axis discipline at the cross-repo layer.

The combined retrospective now explains how Spore changes canon across five substrate-shapes: grammar (Phase 3 and 3b), downstream stabilization (Phase 2c), pattern-library (Wave 2), foundation-doc family (Phase 4), and cross-repo propagation (Waves 1 through N). The method-gain is that each substrate-shape earns its own admission discipline without forcing the canon to treat them all through one shape.

## §11 Arc extension: Phase 4 Tier C closure (2026-04-26)

Tier C of the Phase 4 admission program closed on 2026-04-26 morning with three admissions: F7 (`min-viable-spore-instance`, ADR-0078) via promote-and-extend; F9 (`maintenance-economics`, ADR-0079) as the first Tier C all-NEW foundation doc; and F2 (`translation-mapping-governance`, ADR-0080) as decline-with-triggers. F8 remains the sole open Phase 4 deficit, gated on honest-rigor cluster-counting at Step 0.5 and ready to land as ADR-0069-shape decline-with-triggers if non-Johar full clusters fail to surface.

Canon state at the end of the 2026-04-26 morning arc is `9 primitives / 3 doctrines / 2 modes / 2 properties / 16 derived glossary slugs / 7 in-scope patterns / 13 foundation docs`, with the four-category canon-object-class inventory preserved. Validator held `9 errors / 30 warnings` exact across every commit of the morning. Sibling repos (IC `cef35fe`, PM `349e3ac`, koi-processor `22463cf4`, darren-workflow `3cc190f`) zero-change verified at every dispatch.

What Tier C added beyond closing the queue is a small set of new method-precedents and one substantive discipline that operates one layer above admission ceremony: a pre-arc readiness audit that materially refined sequencing before any commitment was made.

### §11.1 Tier C readiness audit as pre-arc discipline

Before any Tier C admission opened, the previous orchestrator session executed a read-only Step-0.5-style sweep across all four Tier C deficits and produced a 265-line memo at `tmp/adr-tier-c-readiness-audit-2026-04-25.md`. The memo verdicts each deficit on a four-state trigger taxonomy (STRONG-FIRED / MEDIUM-FIRED / WEAK-FIRED / NOT-FIRED), surfaces per-doc operational-demand signals + substrate-readiness evidence, and pre-stages Step-2 open-questions for any future admission ADR.

The audit caught two material under-counts in the prior session-4 handoff. First, F9 was framed as "the most novel of Tier C — no obvious substrate-ADR to inherit from." The audit corrected this by surfacing `federation-protocol.md:28`'s 5-citation tradition cluster (Federici / Mies / Bresnihan / Bhattacharya / Gibson-Graham) plus F1 §4.3 + F3 §4.6 explicit forward-refs — substrate that put F9 closer to F3's synthesis-heavy shape than to F6's invention-heavy shape. Second, F2 was framed as a foundation-doc admission candidate; the audit surfaced that the yaml-header governance-prose at `concepts-p2p-wiki.yaml` L1-L12 already operationally encoded the doctrine, making F2 closer to a decline-with-triggers candidate than to a foundation-doc candidate.

Both corrections landed in the F9 and F2 ADRs by reference and shaped the executed admissions. F9 was authored on the corrected substrate map (B5 selective + multi-way H3 + foundation-vs-pattern-layer boundary), not on the under-counted "novel" framing. F2 was admitted as decline-with-triggers, not as a parallel foundation doc that would have paraphrased existing yaml-header prose.

The method lesson is that **before opening a new admission arc, audit per-doc trigger-state honestly to refine sequencing and surface mis-framings**. Handoff prose is one input, not authoritative; substrate audit is authoritative. The pre-arc audit is a generalization of `§3.9`'s audit-then-propose from per-ADR Step-0.5 work to inter-ADR pre-arc work. The trigger-state taxonomy (STRONG / MEDIUM / WEAK / NOT-FIRED) is reusable for any future Phase or Wave opening.

### §11.2 F7 promote-and-extend pattern and doc_kind hygiene-bundling

F7 ADR-0078 ran twenty-three seconds in-window — the fastest admission in the canon-rebuild arc. The shape that made it fast was Option B promote-and-extend: flip `spore-instance-model.md`'s `doc_kind` from `architecture` to `foundation` AND extend the existing doc with a new §"Minimum Viable Composition" subsection AND discharge two forward-refs (F6.4 scale-transition + F3 cross-federation actor-portability), all in one atomic admission.

Three options were available (A in-place edit only / B promote-and-extend / C new sibling foundation doc). The audit's recommended Option B was pre-pinned at handoff. The discipline that justifies B over A is **doc_kind hygiene-bundling**: when a doc is already canon-bearing at the foundation layer (registered in `canon-review-protocol.md` §1 and `docs/README.md`'s Foundations listing) but classified as something else (here `architecture`), the natural moment to fix the classification is when the doc is being substantively extended anyway. Bundling the hygiene fix with the substantive admission costs nothing additional and avoids deferring a hygiene gap to a future cleanup ADR.

The reusable lesson is that **at any major admission arc, the orchestrator should check whether doc_kind classifications across canon are correct, and bundle hygiene fixes opportunistically rather than separating them**. This is the same discipline as `§9.5`'s glossary-admission piggyback applied at the doc_kind layer.

F7 also occupies a distinct H-axis position: the relational shape is **H3-flat** rather than H3-2way, H3-3way, or H3-4way. F7's substrate-coupling reaches up to ADR-0042 (structural-legitimacy) and across to F3 + F6 + ADR-0066 K3a precedent (the doc_kind-mismatch precedent), but the operational-pair siblings that F5 and F3 introduced are not load-bearing for F7's content. The shape is reusable for any foundation-doc admission whose substrate is structurally homogeneous (here the four aspects in `spore-instance-model.md` were co-equal) and whose operational-pairs are not yet active.

### §11.3 F9 multi-way H3 and foundation-doctrine-vs-pattern-layer boundary

F9 ADR-0079 landed sub-minute draft-to-active inside roughly seven to nine minutes total. It is the first Tier C all-NEW foundation doc (vs F7's promote-and-extend) and the first foundation-doc admission whose H-axis explicitly took a multi-way shape: **H3 4-way** with substrate-parents `structural-legitimacy + federation-protocol + sensor-oracle-governance + actor-governance` and operational-pair coupling to F1 (maintainer-economics intersection) + F3 (labor-recognition intersection). ADR-0077 §231 had predicted this shape; F9 confirmed it without needing to invent a new H-axis category.

The substantive method contribution F9 added is the **foundation-doctrine-vs-pattern-layer boundary as load-bearing canon-discipline**. F9 commits to canon-legibility requirements at the doctrine layer (e.g., compensation-protocols MUST be canon-legible at admission time; reproductive-infrastructure MUST be named as economic substrate; maintainer-succession MUST carry economic-continuity articulation) without prescribing the protocols themselves. Specific compensation-protocols are pattern-layer per F3 §4.6's explicit deferral; F9 articulates the doctrine that constrains pattern-layer protocols rather than inventing a parallel pattern catalog.

This boundary is reusable. Whenever a foundation-doc deficit risks bleeding into protocol-prescription territory, the load-bearing discipline is to commit to canon-legibility-and-shape requirements without committing to algorithm-and-mechanism. F1 §4.3 had already exercised this for sensor-maintainer assignment (the doctrine commits to maintainer-attribution + structural-legitimacy coupling without prescribing aggregation algorithms); F9 generalizes the same discipline to economic substrate and elevates it to a named canon-method.

Two new derived glossary slugs were admitted with F9: `reproductive-infrastructure` and `compensation-pattern-layer`. The yaml advanced v18 → v19. Both slugs are load-bearing for F9's own doctrine, satisfying the foundation-doc slug-admission piggyback discipline from `§9.5`.

### §11.4 F2 fifth decline-shape: sufficient-spec-prose-as-defer-rationale

F2 ADR-0080 landed in roughly three minutes via decline-with-triggers shape. The substantive contribution is a fifth decline-shape that joins the catalog at `§3.4`.

The decline rationale is **sufficient-spec-prose-as-defer-rationale**: when an existing artifact operationally encodes the doctrine that a deficit-doc would articulate, defer-with-triggers is the honest call rather than authoring a parallel foundation doc that would merely paraphrase existing spec-prose. F2's substrate is the yaml-header governance-prose at `docs/research/concepts-p2p-wiki.yaml` L1-L12 — twelve lines that already specify the governance-doctrine (frozen status; operator-authorized extensions; per-version operator-attribution; required commit-and-version-bump for additions). Authoring `docs/foundations/translation-mapping-governance.md` would have created a parallel spec-prose location requiring maintenance-discipline against the yaml-header-prose without solving an active operational problem.

This shape is **distinct from ADR-0066 K3a reclassification**. K3a moves a wrong-classification doc to its correct doc_kind (e.g., `project-briefing-pattern.md` → `project-briefing-spec.md`). F2 has no parallel pre-existing doc carrying the doctrine at a wrong location; the substrate is yaml-header-prose at the *correct* artifact location, governing the artifact it lives inside. F2 is not reclassification; F2 is "the spec-prose is already where it should be, in the form it should be in, and operationally functional."

It is also **distinct from the four prior decline-shapes at `§3.4`**. ADR-0054 (rewilding-thesis decline) and ADR-0069 (four-enabling-conditions decline) declined under cluster-counting / honest-rigor verdicts. ADR-0055 (encounter framing-note + park-pattern-library-with-triggers) decomposed-and-parked. ADR-0061 (asymmetric-joint-commitment) declined inline-prose-only. F2 declines on a different ground: substrate sufficiency at existing location. The shape-template (decline-with-triggers + 3-trigger structure + ADR-layer formalization) inherits from ADR-0054 / ADR-0069; the *rationale* is novel.

Three re-opening triggers are documented: (a) IC or PM admits its own concepts-registry → cross-repo translation pressure fires; (b) solo-operator yaml-governance machinery breaks down (multi-operator editing / conflicts / mis-attribution); (c) cross-repo audit shows translation-drift (slugs in IC/PM bridge notes don't resolve to Spore concepts-yaml entries).

The decline-shape catalog now stands at five shapes plus K3a reclassification. The discipline lesson is that **canon decline is not one move**; the right shape depends on whether the candidate fails on substrate-evidence (ADR-0054 / ADR-0069), on canon-paraphrase (ADR-0055), on inline-prose adequacy (ADR-0061), or on substrate-already-encoded-elsewhere (ADR-0080). Each shape preserves a different kind of canon hygiene.

### §11.5 Updated B-axis progression

The B-axis progression now reads **B1 (F1) → B1 (F4) → B2 (F6) → B1 (F5) → B5 (F3) → B1 (F7) → B5 (F9) → N/A (F2)**. Each value was justified by audit of its substrate's structural heterogeneity, not by inheritance from the prior admission's precedent shape.

F7 chose B1 because the four aspects in `spore-instance-model.md` are co-equal and structurally homogeneous, making unified principled-rule the natural shape for the §"Minimum Viable Composition" subsection. F9 chose B5 because substrate maturity varies across its categories (labor-recognition has ADR-0002 + ADR-0049 substrate; reproductive-infrastructure has federation-protocol.md:28 substrate; substitution-trap-related has ADR-0048 substrate; cross-federation portability has F3 §6 substrate), making selective-per-category synthesis-depth the honest shape — analogous to F3's earlier B5 admission. F2 has no B-axis because it declined; no foundation-doc body needed organization.

The progression now spans seven completed admissions plus one decline. It strengthens `§9.3`'s claim that B-axis is substrate-driven: across two days, eight admissions, three different B-axis values plus one N/A, no admission picked a B-axis on the basis of mirroring the prior admission. The discipline is **operational, not aspirational**.

### §11.6 H-axis evolution within Tier C

H-axis evolution now reads **H2 (F6) → H3-2way (F5) → H3-3way (F3) → H3-flat (F7) → H3-4way (F9)**. F2 has no H-axis (decline).

H3-flat (F7) is a new shape distinguished by reaching upward to substrate-parents without yet binding into operational-pair siblings. Operationally it functions as preparation for future operational-pair coupling: F7's content (instance-composition tests, scale-transition existence-thresholds, cross-federation portability rules) sets up siblings that may later admit and bind in. H3-flat is the shape a foundation doc takes when its substrate-coupling is mature but its operational-pair partners are not yet load-bearing.

H3-4way (F9) confirms ADR-0077 §231's prediction that connective-tissue foundation-docs landing late in a Phase can carry multi-way relational shape. The four substrate-parents anchor F9's doctrine in coupling-to-consequence (ADR-0042), reproductive-labour visibility (federation-protocol.md:28), maintainer-attribution (F1), and labor-recognition (F3) simultaneously. The shape is reusable for any future foundation-doc admission whose doctrine needs to anchor in multiple structurally-different prior commitments at once.

The combined H-axis catalog (H2 / H3-2way / H3-3way / H3-flat / H3-4way) is now five shapes. As with B-axis, none are defaults; each was substrate-driven at Step 0.5 audit time.

### §11.7 Plan-vs-evidence catch generalized to handoff layer

`§3.9`'s audit-then-propose discipline originated as a Step-0.5 discipline within individual ADR ceremony. `§9.5` extended it to structurally new canon categories at admission time (the F6.8 meta-pattern admission). The 2026-04-26 morning arc extended it again, this time to **handoff prose itself**.

The Tier C readiness audit caught two material under-counts in the previous session-4 handoff (F9 substrate-richness; F2 reclassification-vs-foundation candidacy). Both were corrected by reference in the executed admissions. The method generalization is that **handoff prose is treated as one input to admission decisions, not as authoritative — substrate audit is authoritative**. This holds whether the handoff was authored by a different session, a different agent, or by the same operator at a different time. Audit-then-propose now operates at three layers: per-ADR Step-0.5 (`§3.9`), inter-ADR pre-arc (`§11.1`), and handoff-level (this subsection).

### §11.8 Phase 4 closure shape

The full Phase 4 admission program now stands at 8 of 9 deficits closed across two days. Tier A and Tier B closed 2026-04-25 same-day with five admissions. Tier C closed 2026-04-26 morning with three admissions (F7 admit / F9 admit / F2 decline). F8 external-validation-loop is the sole remaining deficit and is gated on honest-rigor cluster-counting at Step 0.5 — Johar substrate is rich but Johar-as-primary-inspiration cannot auto-escalate per ADR-0064 / ADR-0069 discipline. F8 will land as either a foundation-doc admission (if non-Johar full clusters surface) or an ADR-0069-shape decline-with-triggers (if cluster-counting fails), and either outcome closes Phase 4 cleanly.

The method-shape lesson at Phase 4 scale is that **a multi-deficit phased admission program can close cleanly without any single admission carrying the full weight**. Phase 4 was scoped at nine deficits, ratified as Option D3 TIERED with operational-demand triggers gating Tier C, and executed across two days with eight admissions plus one ADR-shape decline plus one remaining deficit gated on honest-rigor. No admission was rushed; no decline was over-engineered; no deferral was indefinite. The discipline that made this work is the combination of Phase-scoping ratification (Phase 4 scoping plan), pre-tier readiness audit (`§11.1`), and per-admission Step-0.5 discipline (`§3.9`).

### §11.9 Updated forward state

Phase 4 Tier C closure leaves four method-bearing items in queue:

- **F8 external-validation-loop** — sole remaining Phase 4 deficit; honest-rigor cluster-counting at Step 0.5 gates admission; ADR-0069-shape decline-with-triggers ready if cluster-counting fails.
- **Cross-repo Wave-N+1** — Tier B admissions (F6 / F5 / F3) and Tier C admissions (F7 / F9 / F2-deferred) may warrant IC + PM cross-repo alignment ADRs analogous to the 2026-04-25 evening Wave-N. No operational pressure has surfaced; admission depends on whether downstream sibling repos signal need for foundation-doc-family acknowledgment beyond the 2026-04-25 alignment chain.
- **Phase 5 corpus-wide section-level status labels** — strategic next major arc; tag-agnostic ratification per Q6 holds across all Phase 4 admissions including Tier C.
- **Retrospective §12 capstone** when arc actually closes — the present §11 extension covers the 2026-04-26 morning Tier C arc; F8's resolution and any subsequent cross-repo work would warrant a further extension or a final capstone.

The canon-rebuild arc has now extended from 2026-04-22 through 2026-04-26 morning and spans thirty-two decisions: the ADR chain `0044-0058`, `0059a`, and `0061-0080`. The ADR chain is legible as six phases:

- core rebuild and post-Phase-3b queue formation: `0044-0055`
- Phase 2c and immediate stabilization: `0056-0060`, plus `0059a`
- dedicated-ADR queue closure and scope-conditioning triad: `0061-0064`
- pattern-library phase and Wave 2 validation: `0065-0070`
- Phase 4 Tier A + Tier B foundation-doc expansion plus Wave-N cross-repo alignment: `0071-0077`
- Phase 4 Tier C closure (F7 admit, F9 admit, F2 decline): `0078-0080`

## §12 What this arc extension added on top of §10

The `§10` summary captured the 2026-04-25 arc's scaling proof, the audit-then-propose generalizations, and the seven new named canon-method entries. The 2026-04-26 morning Tier C arc did three additional things on top of that.

It introduced **pre-arc readiness audit as a discipline above admission ceremony**. The Tier C readiness audit (`§11.1`) operated one layer above per-ADR Step-0.5 work and surfaced material handoff under-counts before any admission opened. The result was that two of three admissions executed against corrected substrate maps. The discipline is reusable for any future Phase or Wave opening; the trigger-state taxonomy (STRONG / MEDIUM / WEAK / NOT-FIRED) generalizes.

It validated that **method-discipline holds when admissions vary in shape across a single tier**. Tier C ran three structurally different admissions in a single morning: a promote-and-extend (F7) that fixed a doc_kind hygiene gap atomically with substantive admission; an all-NEW foundation doc (F9) that carried multi-way H3 relational shape and articulated a foundation-doctrine-vs-pattern-layer boundary as load-bearing canon-discipline; and a decline-with-triggers (F2) whose rationale was substrate-already-encoded-in-existing-prose. None of the three forced the others into a shared shape.

It extended the catalog repertoire with three new named entries plus one decline-shape: doc_kind hygiene-bundling (F7), foundation-doctrine-vs-pattern-layer boundary (F9), multi-way H3 confirmed across three positions (H3-2way / H3-3way / H3-4way / H3-flat), and sufficient-spec-prose-as-defer-rationale (F2 decline-shape). The decline-shape catalog now stands at five plus K3a reclassification.

The combined retrospective now explains how Spore changes canon across six substrate-shapes: grammar, downstream stabilization, pattern-library, foundation-doc family (Tiers A + B + C), cross-repo propagation, and pre-arc readiness audit as the discipline above admission ceremony itself. Each substrate-shape continues to earn its own admission discipline. The method-gain is that the canon's capacity to change has scaled to multi-day multi-tier programs without losing per-admission honesty.

---

**How this note is used.** A collaborator who wants the short version of the arc should read `§3`, `§4`, `§5`, `§9`, and `§11` first, then drop into the phase-specific ADRs named in `§7` and the foundation-doc ADRs named in `§9.1`, `§9.2`, and `§11`. If a future canon cycle contradicts this note, the canon and the later ADR chain are authoritative; update this bridge note rather than protecting it as if it were primary law.
