---
doc_id: spore.connection.canon-rebuild-arc-method-retrospective
doc_kind: connection
status: active
depends_on: []
relates_to:
  - spore.connection.wiki-intake-canon-review-retrospective
---

# Canon-Rebuild Arc: Method Retrospective

**Arc window**: 2026-04-22 through 2026-04-24.

**Primary concern**: how Spore rebuilt canon language, disposed a dense queue of candidate admissions, stabilized downstream projections, and formalized a pattern-library without inflating canon-object-class count.

**What this note does**: turn the 2026-04-24 harvest manifest at `tmp/canon-rebuild-arc-method-harvest-2026-04-24.md` into a collaborator-citable bridge note. The harvest manifest is insurance. This note is the canonical method-facing synthesis.

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

---

**How this note is used.** A collaborator who wants the short version of the arc should read `§3`, `§4`, and `§5` first, then drop into the phase-specific ADRs named in `§7`. If a future canon cycle contradicts this note, the canon and the later ADR chain are authoritative; update this bridge note rather than protecting it as if it were primary law.
