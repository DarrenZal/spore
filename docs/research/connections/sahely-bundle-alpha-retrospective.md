---
doc_id: spore.connection.sahely-bundle-alpha-retrospective
doc_kind: connection
status: active
authored: 2026-05-29
depends_on: []
relates_to:
  - spore.canon-decision.trap-shape-vocab-and-recursive-audit-method        # ADR-0085
  - spore.canon-decision.life-value-doctrine-fourth-cross-cutting-doctrine   # ADR-0086
  - spore.canon-decision.civil-commons-derived-glossary-slug-admission       # ADR-0087
  - spore.canon-decision.care-cluster-scope-condition-adr-0045               # ADR-0088
  - spore.canon-decision.margin-as-reserve-scope-condition-f9                # ADR-0089
  - spore.canon-decision.perception-as-power-scope-condition-f4              # ADR-0090
  - spore.connection.sahely-ruddick-civil-commons-bridge
  - spore.connection.canon-rebuild-arc-method-retrospective                  # shape-match precedent
  - ic.canon-decision.canon-alignment-through-spore-adr-0086                 # ic:ADR-0022 Wave-N+1 alignment (soft/associative; see §4 precedent #17)
  - pm.canon-decision.canon-alignment-through-spore-adr-0086                 # pm:ADR-0019 Wave-N+1 alignment (soft/associative; see §4 precedent #17)
concepts:
  - golden-calf-trap
  - recursive-audit-method
  - life-value-doctrine
  - civil-commons
---

# Sahely Bundle α — method-precedent retrospective

This is the method-precedent retrospective for **Sahely Bundle α**: the six canon-decisions
(ADR-0085 → ADR-0090) that admitted the load-bearing pressure from the Sahely corpus into Spore
canon across six operator-gated sessions, 2026-05-23 → 2026-05-29. It is a companion to
[`canon-rebuild-arc-method-retrospective`](canon-rebuild-arc-method-retrospective.md) (which
covered the 2026-04-22 → 04-26 grammar-rebuild and Phase 4 foundation-doc arc) and to
[`wiki-intake-canon-review-retrospective`](wiki-intake-canon-review-retrospective.md) (the first
multi-anchor cross-tradition substrate intake). Where the canon-rebuild retrospective explained how
corpus pressure rebuilt the grammar, this one explains how a maturing canon absorbed a *second*
large cross-tradition substrate — and how the discipline of doing so moved its own error-catches
progressively earlier across the arc until the last two admissions landed clean on the first review.

It is a `doc_kind: connection` reference artifact. It does **not** shift canon state, admit slugs,
or touch foundation docs. It documents the arc's reusable method-precedents so future intake work
can name them rather than re-discover them.

## §1 Context — the arc

Bundle α is the Layer 3 admission phase of the Sahely corpus intake program, executed under the
3-layer separation discipline (`feedback_intake_to_vocab_admission_program.md`): Phase 1 corpus
intake → Phase 2 DECISION-BRIEF → Layer 3 ADRs.

- **Phase 1 (corpus intake, closed 2026-05-22)** — 104 Sahely emails (103/104 coverage) + 82
  Sahely-authored PDFs + ~3,400 pages KG-indexed into personal-koi (17+ Person entities, ~110
  Concepts, 103 SpecDoc episodes). The second-largest substrate admission cycle in the canon's
  history after the P2P-wiki intake.
- **Phase 2 (substrate-gathering + DECISION-BRIEF)** — 12 anchor bridge notes (Waves 1–4; ~4,185
  lines), a DECISION-BRIEF refined across three cycles (756 → 958 → 1,072 lines; commits `872e467`
  → `69d83cb` → `c3fa309`), the Phase-2-closure cross-repo bridge
  [`sahely-ruddick-civil-commons-bridge`](sahely-ruddick-civil-commons-bridge.md) (336 lines,
  `3347c2f`), and the Layer 3 handoff. The DECISION-BRIEF evaluated 18 canon-pressure candidates and
  §17.5/§17.8 ratified the Bundle α architecture (6 ADRs + 6 framing-notes + 4 decline-with-trigger
  entries).
- **Layer 3 (Bundle α)** — 6 ADRs across 6 sessions, 2026-05-23 → 2026-05-29; zero rollbacks (one
  in-execution soft-reset recovery, not a rollback); validator **9 errors / 237 warnings EXACT**
  held throughout; sibling-repo SHAs frozen across all six landings.

The arc had a dependency spine (X1 → X2 → X3) and a parallelizable tail (X4 / X5 / X6, each touching
a different existing artifact): X1 admitted the trap-shape vocabulary and the recursive-audit
discipline; X2 used that substrate to admit `life-value-doctrine` as the fourth cross-cutting
doctrine; X3 admitted `civil-commons` as the named substrate the doctrine operates over; X4/X5/X6
strengthened three existing canon artifacts (the care doctrine, the maintenance-economics foundation
doc, the representation-authority foundation doc) with newly-surfaced cross-tradition substrate.

## §2 Canon-state delta

All counts built from the six close-out manifests + ADR §Diff-summary sections, not from any prose
rollup.

| X | ADR | slug / target | decision | draft → active | ACs | local delta |
|---|-----|---------------|----------|----------------|-----|-------------|
| X1 | 0085 | `golden-calf-trap` + `recursive-audit-method` | triple-move admit (2 slugs + ADR-0048 narrative-ext + framing-note) | `2a122b4` → `b44ac28` | 7/7 | yaml v21→v22; +2 derived slugs; arc 34→35 |
| X2 | 0086 | `life-value-doctrine` | 4th cross-cutting doctrine + ADR-0042 narrative-ext + framing-note | `3292ba1` *(soft-reset)* → `43a301c` → `359810e` | 15/16 (AC-15 push satisfied post-confirm) | yaml v22→v23; doctrines 3→4; arc 35→36 |
| X3 | 0087 | `civil-commons` | derived-glossary slug + framing-note | `c30f77d` → `2783f1c` | 16/16 | yaml v23→v24; +1 derived slug; arc 36→37 |
| X4 | 0088 | care-cluster → ADR-0045 | scope-condition (ADR-0045 narrative-ext) | `8ba854e` → `b737f34` | 16/16 | yaml v24 unchanged; arc 37→38 |
| X5 | 0089 | margin-as-reserve → F9 | scope-condition (F9 narrative-ext) | `8c73593` → `d726181` | 13/13 | yaml v24 unchanged; arc 38→39 |
| X6 | 0090 | perception-as-power → F4 | scope-condition (F4 narrative-ext) | `bb13c9d` → `e91108a` | 13/13 | yaml v24 unchanged; arc 39→40 |

**Arc-level rollup:**

- **Canon-rebuild arc: 34 → 40 canon-decisions** (+6).
- **Concepts yaml: v21 → v24; slugs 76 → 80** (+4: `golden-calf-trap`, `recursive-audit-method`
  @v22; `life-value-doctrine` doctrine-slug @v23; `civil-commons` @v24). The derived-glossary subset
  grew 20 → 23 (+3; the doctrine-slug is counted separately). X4/X5/X6 are scope-conditions and bump
  no yaml.
- **Cross-cutting doctrines: 3 → 4** (`reproductive-commoning` + `boundary-commoning` +
  `care-commoning` + `life-value-doctrine`). Canon-object-class inventory otherwise preserved at four
  categories (9 primitives / 4 doctrines / 2 modes / 2 properties) + 7 patterns.
- **Foundation docs: 14** (count unchanged; **F9 maintenance-economics §4 and F4 representation-authority
  §5 bodies narrative-extended** by X5/X6).
- **Three existing ADRs narrative-extended** via extend-via-prose: ADR-0048 (by X1), ADR-0042 (by X2),
  ADR-0045 (by X4) — plus the two foundation-doc bodies above = **five documents narrative-extended**
  across the arc, every one with frontmatter preserved byte-equal.
- **Three new framing-notes**: [`canon-framing-recursive-audit-method`](canon-framing-recursive-audit-method.md),
  [`canon-framing-life-value-doctrine`](canon-framing-life-value-doctrine.md),
  [`canon-framing-civil-commons`](canon-framing-civil-commons.md). **One cross-repo bridge**
  ([`sahely-ruddick-civil-commons-bridge`](sahely-ruddick-civil-commons-bridge.md), Phase 2 closure).
- **Cross-stream writes: 0.** Sibling SHAs frozen across all six landings — IC `d74f1d02` / PM
  `5e06cd01` / bregion `07ff9738` / BKC `967e95e7` / koi `ada5b9a0` / dw `059129a3` — verified
  zero-change at every Step 0 and Step 5.
- **Validator 9 errors / 237 warnings EXACT** held across all six ADRs; zero drift.

## §3 Discipline-progression — the catches moved earlier

The arc's defining shape is that each error-catch produced a discipline, and each discipline was
applied *preemptively* in the next session, moving the catch-point progressively earlier — from a
late review round, to an execution-time validator halt, to the pre-execution audit, until the final
two admissions landed clean on the first review with nothing to catch.

- **X1 (ADR-0085) — caught at Codex review round 2.** Round 2 item 3 forced an honest-rigor
  reconciliation of the bundle's cluster-counts: the 6 full cross-tradition clusters belong to
  `golden-calf-trap` (the trap *shape*), not to `recursive-audit-method` (the *method*), which carries
  only 2. The catch prevented cluster-count inflation across a bundle-symmetric admission.
- **X2 (ADR-0086) — caught at execution, by the validator.** *(This corrects the orchestrator
  dispatch's shorthand, which called it a "Step 5 HALT": it was a mid-execution **validator** halt,
  not a Codex halt.)* The first DRAFT (`3292ba1`) used a broken `depends_on` doc_id format; the
  validator went to 14/237. Recovery was a **soft-reset (Option A)**, a frontmatter rewrite from the
  nearest sibling ADR as template, then a clean DRAFT→ACTIVE ceremony (`43a301c` → `359810e`,
  back to 9/237). This single execution-time catch is the pivot of the arc: it **birthed Gate (h)**
  (ADR-frontmatter-format verification: read the nearest sibling's frontmatter and use it as a
  template before authoring), and it seeded the rollback-safety discipline that the rest of the arc
  applied preemptively.
- **X3 (ADR-0087) — caught at Codex R1 + Step 0.5.** Review surfaced three mechanical questions
  (framing-note, aliases, timing), and the Step 0.5 audit pre-resolved the rest. The catch-point had
  moved earlier than X1's round-2 reconciliation. The aliases catch produced its own discipline: drop
  the `-doctrine` suffix from a derived-glossary slug's alias to prevent a category error.
- **X4 (ADR-0088) — caught at Step 0.5 alone**, before Codex. The pre-execution audit ran the first
  formal Gate (j) byte-equal-frontmatter check and caught a cross-repo-identity cascade-miss via Gate
  (L5b) live-resolve. This is the inflection: the catch-point had moved all the way forward to the
  audit, ahead of review entirely.
- **X5 (ADR-0089) — zero execution halt + first 0-lint-FAIL Codex R1.** The canonical-section-heading
  lint-preemption (authoring the plan with the exact heading set the linter expects) produced the
  first clean R1 of the arc; the only R1 item was a mechanical post-active-commit-defect-policy
  question resolved in-plan, and R2 was skipped per known-ceiling.
- **X6 (ADR-0090) — zero execution halt + second consecutive 0-lint-FAIL Codex R1.** The preemption
  carried forward, validating it as a reproducible discipline rather than a single clean run; four
  mechanical-class open questions were resolved in-plan and the session proceeded to execution.

The pattern is legible as a single curve: round-2 catch → execution catch (which generated Gate (h)
+ rollback discipline) → R1+audit catch → audit-only catch (Gate (j) + L5b) → clean → clean.
**Preemptive-discipline-application compounded visibly across the arc.**

## §4 Method-precedent inventory

Catalogued by category, each grounded in the ADR §Consequences / §Parking where it was named, with
its origin and reusability — including the two cross-repo Wave-N+1 alignment ADRs (ic:ADR-0022 +
pm:ADR-0019) whose own §Consequences ground the cross-repo sub-section below. Documented honestly —
only precedents actually carried in the ADRs, not padded to a target count.

### Discipline gates

- **Gate (h) — ADR frontmatter-format verification** *(origin X2)*: before authoring, read the
  nearest sibling ADR's frontmatter and use it as a template; prevents the broken-`depends_on` class
  of validator halt. Reusable for every ADR authored against an evolving schema.
- **Gate (L5b) — preemptive grep-verify / cross-repo-identity** *(X4)*: foreign doc_ids (`bkc.*`,
  `ic.*`, …) appear in body prose only; `related_adrs:` and `r_claim_source:` stay Spore-local
  (`spore.*`). Caught a cascade-miss at Step 0.5. Reusable for any canon doc that cites across repos.
- **Gate (j) — byte-equal-frontmatter preservation, target-file-type-agnostic** *(X4 first formal,
  on an ADR-doc; X5 first foundation-doc F9; X6 second foundation-doc F4)*: capture the target's
  frontmatter byte-range + md5 at Step 0.5, re-verify byte-equal at Step 5. Makes the older
  extend-via-prose "frontmatter UNCHANGED" claim *measurable*. Validated across three target files of
  two types — reusable for every narrative-extension regardless of whether the target is an ADR or a
  foundation doc.

### Rollback-safety triad (codified at X6)

- **Soft-reset (Option A)** *(origin X2)*: on a post-active-commit / pre-push defect, `git reset
  --soft HEAD~2`, fix in the working tree, re-run the clean DRAFT→ACTIVE ceremony (preserves the
  `HEAD~2..HEAD` 2-commit shape).
- **3-commit ADR-0076 fallback** *(X5 R1 Q1)*: a polish too small to justify a reset becomes a third
  corrective commit (canonically-acknowledged functionally-equivalent), extending verification scope
  to `HEAD~3..HEAD`.
- **`reset --hard` / `commit --amend` prohibition** *(X6 R1 Q4)*: soft-reset only; preserves the
  reflog audit-trail in a tracked-dirt environment. The three together cover distinct rollback
  scenarios.

### Staging-discipline

- **Pre-commit allowlist HALT** *(Gate (f), X4)*: verify `git status` shows exactly the allowlisted
  files staged before each commit; `AGENTS.md` / `CLAUDE.md` / research-staging explicitly excluded.
- **`HEAD~2..HEAD` bundle-verification scope** *(X4, Codex R2 M2)*: the 2-commit ceremony is the
  unit of verification, not a single commit.
- **Never `git add -A`** *(carried)*: explicit per-path staging only.

### Plan-authoring

- **Live-capture-not-inline-snapshot** *(X4, Codex R2 B1/B2)*: inline plan-snapshots of canonical
  files drift from the live files and are cascade-miss-prone; capture state live at Step 0.5 instead.
- **Canonical-section-heading lint-preemption** *(X5; X6 second consecutive; extended to the plan-file
  layer at pm:ADR-0019 R1)*: author the plan with the exact heading set the linter expects (Goal /
  Non-goals / Constraints / Assumptions / Acceptance criteria / Verification / Risks / Rollback) →
  0-lint-FAIL on Codex R1. The preemption applies to the **plan-file itself**, not only ADR bodies:
  pm:ADR-0019's R1 surfaced a `lint canonical-sections` must-fix on its plan (ic:ADR-0022's R1 did not
  flag it — PM-specific), and this retrospective's *extension* plan-file applied the heading set
  preemptively for a clean R1 — a fourth consecutive instance (X5 → X6 → this retrospective's authoring
  → this extension's plan-file). *(See §4 meta-precedents for the generalization-beyond-ADRs claim.)*

### Codex `/review-plan` discipline

- **Step 1.5 / 2.5 timing**: the Codex round runs between the Step 2 operator gate and the Step 3
  draft commit — it reviews execution-readiness of an already-decided shape, not the shape itself.
- **Round-3 hang-discharge** *(origin X1)*: X1's R3 hung Codex-side ~13 hours; killed cleanly (exit
  143) per operator authorization rather than waiting. Hangs are discharged, not endured.
- **Persistence threshold N=2 vs ≥3 (known-ceiling)**: the round budget is 2 substantive + 1
  verification; reaching a third substantive round is the signal to accept end-of-round-2 state.

### Cluster-counting discipline

- **Cluster-strength asymmetry within a bundle** *(X1 method-vs-shape, 6 vs 2; X3 inter-bundle:
  Bollier-Helfrich-Linebaugh is FULL for `civil-commons` but PARTIAL for `life-value-doctrine`)*:
  a bundle-symmetric admission need not carry symmetric cluster-counts; the asymmetry is documented,
  not hidden.
- **Scope-condition-chosen-over-slug-despite-sufficient-cluster-count** *(X5 F9 reserve-substrate; X6
  F4 perception-authority — second application across a distinct foundation-doc)*: when ≥3 clusters
  would *support* a slug but an existing slug already covers the territory, scope-condition is the
  cleaner disposition. Distinct from X4's scope-condition-*by-necessity* (only 2 clusters surfaced).
  The two above-threshold cases (F9, F4) establish it as a repeatable shape, not a one-off — reachable
  both from below the slug threshold and from above it.
- **≥2-cluster threshold + adjacent-partial anti-inflation + honest genealogical aggregation**: a
  tightly-genealogical lineage counts as one cluster (X1 aggregated Marx→Lukács→Frankfurt→
  Gramsci→Foucault→Bourdieu as a single post-Marxist cluster); adjacent partials (Hochschild/Folbre/
  Noddings at X4; Lean-operations at X5; Fricker/Foucault at X6) are named as substrate-resonance,
  not counted as additional FULL clusters.
- **Evidence-cluster-as-instance-family-β-evidence honest classification** *(X3)*: BKC's operational
  commitment-pooling substrate counts as a FULL *evidence* cluster (per ADR-0068's admission pattern),
  not as a fourth *tradition* cluster — counting it as a tradition would be a category error.
- **Honest-rigor cluster-counting is verdict-neutral** *(per ADR-0081)*: the same audit that declined
  ADR-0064/0069/0080 admitted all six Bundle α candidates because it honestly produced PASS — it is an
  audit, not a decline-mechanism.

### Categorical-correctness

- **Doctrine vs derived-glossary vs yaml-line-count preservation** *(X2/X3)*: `life-value-doctrine`
  lives in the doctrines section (misplacing it into derived-glossary would be a category error); the
  X3 aliases catch (drop `-doctrine` from a glossary slug's alias) is the same discipline at the
  alias layer.
- **Categorical-correctness preemption, generalized canon-body → foundation-doc** *(X5 "Eight-Category"
  §4 heading preserved; X6 "Five layers" §Scope preserved)*: a scope-condition appends a cross-cutting
  subsection — it does **not** add a ninth category or a sixth layer, and does not renumber existing
  enumerations.

### Item 6 amendment

- **Project-native + isolated-fragment `safe_load` split for yaml-fragility cases**: the
  pre-existing PyYAML parse-fragility (carried forward through all six ADRs) does not block, because
  the authoritative validator check holds clean at 9/237; the amendment splits project-native parsing
  from isolated-fragment `safe_load` so fragility in one does not mask the other.

### Admission-shape precedents (X1–X3)

- **Triple-move admission shape (Option D)** *(X1)*: bundled vocab + parent-ADR narrative extension +
  dedicated framing-note — the lightest-ceremony *substantive* shape, between ADR-0084 vocab-only and
  full doctrine ceremony.
- **First standalone-slug + dedicated-framing-note shape** *(X3)*: lighter than X1's bundle, heavier
  than vocab-only; the framing-note carries cross-ADR composition density that would scope-bleed the
  §Consequences.
- **Folded-substrate-via-framing-note** *(X1)*: substrate-resonance (C11/C14/C15) that has not crossed
  the operational-pressure threshold folds descriptively into a framing-note rather than admitting
  separate slugs.

### Cross-repo Wave-N+1 alignment precedents (ic:ADR-0022 + pm:ADR-0019)

These landed 2026-05-29 in separate IC- and PM-scoped sessions under Form-1 cross-stream authorization
(not this Spore session); the siblings advanced post-arc — IC `d74f1d02` → `c3b6af3`, PM `5e06cd01` →
`bac8115`, each as a draft+active pair — so §2's Bundle-α freeze SHAs were correct for the six landings
and the alignment is strictly post-arc. The single trigger was ADR-0086's canon-object-class expansion
(3 → 4 cross-cutting doctrines); both alignments were REFERENCE-heavy, Option-2 (count-fix + upstream-
reference block, no new structural doctrine bullet/paragraph), H2-decline (no slug import). The catalog
below is honest-derived and grouped by category, **not padded** to the dispatch's "16": the two
precedent-dense ADRs happen to carry roughly that many distinct cross-repo precedents, and the honesty
discipline (above) governs the count.

**Wave-N+1 trigger-classification**

- **Canon-object-class expansion is the sole Wave-N+1 trigger**: of the 0083–0090 arc, only ADR-0086
  (doctrines 3 → 4) fired sibling alignment; 0083 (positioning) / 0084 (vocab) / 0085 (vocab + method) /
  0087 (derived-glossary) / 0088–0090 (scope-conditions) are all non-triggering per
  `feedback_upstream_downstream_canon_propagation.md` + DECISION-BRIEF §17.8(5). One trigger among many
  non-triggering siblings.
- **Title-by-trigger + Context-covers-full-audit-scope**: each alignment ADR is titled "through-adr-0086"
  (the single triggering movement) while its Context audits and clears the full 0083–0090 arc through
  current Spore HEAD — preventing a tracking-chain coverage gap without inflating the title to imply the
  whole arc propagated. The next sibling alignment picks up cleanly after 0090.
- **Enumeration-vs-narrative discrimination preserves closed-ADR history**: live-canon doctrine-counts
  are corrected at the enumeration sites, but "three doctrines" mentions in *closed* ADRs (ic:ADR-0018
  lines 9/95/116/137/156; pm:ADR-0014 lines 10/144/234) and accurate-at-authoring paragraph headers
  (pm `project-vision.md:54` "care … third doctrine") are preserved unchanged — retconning them would
  corrupt the record of what was true when each landed.

**REFERENCE-heavy alignment shape**

- **First-live-C-axis under a REFERENCE-heavy posture**: ic:ADR-0019/0020/0021 and pm:ADR-0015/0017/0018
  all C3-declined because no new doctrine existed to propagate; ic:ADR-0022 is IC's *first-ever* live
  C-axis and pm:ADR-0019 is PM's *first since pm:ADR-0014*. When an upstream canon-object-class gains a
  member, the downstream alignment's corresponding axis goes live even under REFERENCE-heavy — the work
  is count-currency + reference, not adoption.
- **Option-2 (upstream-reference-block-carries-application) vs Option-1 (structural deepening)**: the J2
  block authors sibling-surface application narrative (IC: the life-value-vs-money-value lens reads IC's
  `enclosure` / `commercial-capture` failure modes; PM: reads PM's commoning-vs-microcredit distinction +
  `substitution-trap`); structural deepening into a parity §Memory-Governance bullet / project-vision
  paragraph is operator-elective future own-canon work. A later reader must not mistake Option-2 for
  "no application content authored."
- **Reference ≠ registration**: the doctrine appears in IC/PM only as a referenced upstream concept —
  prose + the ADR's `concepts:` frontmatter — and H2-decline of a concepts-registry means neither repo
  mirrors Spore's v22 → v23 yaml movement or imports the slug.
- **Sibling-symmetric alignment recorded in-ADR**: IC + PM aligned at the same trigger, same day, both
  REFERENCE-heavy, both Option-2, both H2-decline; each J2 block records the sibling symmetry so the
  cross-repo Wave-N+1 alignment arc stays visible from either repo.
- **Manual-verification discipline for validator-less sibling repos**: IC + PM carry no validator, so
  frontmatter / citation / status checks are manual in the alignment execution path (the Spore-side
  9/237 EXACT gate has no sibling analog).

**PM-specific execution disciplines**

- **Multi-site count-fix as canon-internal-correctness preservation**: PM enumerates Spore's
  cross-cutting-doctrine count at *two* live-canon sites (grammar.md:249 + project-vision.md:54), where
  IC has one (intelligence-primitives.md); a cross-stream count-shift must update *all* live-canon
  enumeration sites atomically or create a grammar(4) ↔ vision(3) contradiction. Composes with
  title-by-trigger: the title names the trigger; the atomic bundle covers every enumeration site the
  trigger touches.
- **Pre-canonical-alignment-discovery via target-canon grep**: grepping the *target* canon (not only the
  upstream source) surfaced PM's pre-existing commoning-vs-microcredit + substitution-trap mappings,
  letting the J2 block *reference* an existing doctrine-mapping rather than *invent* application
  narrative — PM's PARTIAL-and-genuine relevance is grounded in pre-existing canon, not asserted.
- **DH-PM-1 evidence-basis grounded in repo artifacts** *(precedent #14; memory-codified at
  `feedback_dh_pm1_evidence_basis_discipline.md`)*: the hard-pause NOT-FIRED verdict is grounded in
  current repo artifacts — `src/pm/*.py` + `migrations/` + `tests/` exist (code existence ≠ trigger) and
  Victoria LHC Phase 0 operational HNSW-ranked real-data is absent (the unmet criterion) — **not** the
  stale CLAUDE.md "No code yet" string. Fifth consecutive clean DH-PM-1 execution; the Victoria window is
  now open (2026-05-29 ∈ May–June) but the condition is unmet.
- **Dispatch-target-site precision**: the orchestrator dispatch named only grammar.md §1a; the Step-0.5
  grep surfaced project-vision.md:54 as an *unlisted* second live-canon enumeration site, re-surfaced to
  the operator before scope was fixed — cascade-miss discipline applied to the dispatch (cf. the
  orchestrator-framing-correction meta-precedent below).
- **E-axis binary-citation gate (OFF-ON-OFF-OFF-OFF across five Wave-N PM alignment ADRs)**: each ADR
  audits the *current* arc's actual citations, not the prior arc's precedent shape; E3 decline this round
  is evidence-gated honest-rigor, not symmetry-bound.
- **Held-tension currency ≠ drift-repair**: the IC `:156` held-tension range refresh (0044-0082 →
  0044-0090) and the DH-IC-1 / DH-PM-1 held-currency mentions are held-tension maintenance, keeping the
  I1-narrow scope honest (the count-corrections are part of the C-alignment, not separate drift-repair).
- **Out-of-allowlist staleness parked, not fixed**: PM's stale CLAUDE.md "No code yet" string is
  out-of-allowlist for a REFERENCE alignment → parking-lot follow-on, not silent scope expansion
  (staging-discipline at the cross-repo layer).

**Cross-repo-identity / this doc's own frontmatter**

- **#17 frontmatter-field-semantics-distinction** *(surfaced authoring this extension)*: `relates_to:` is
  a soft / associative field — unvalidated by `validate_spec_dag.py` and foreign-tolerant in practice
  (the active `canon-framing-boundary-theory-unifier.md` carries `ic.*` / `pm.*` entries) — whereas
  `related_adrs:` and `r_claim_source:` are hard fields kept Spore-local per Gate (L5b). This resolves
  the apparent conflict between the sahely-ruddick bridge's "relates_to holds Spore-local only" framing
  and the boundary-theory-unifier precedent: they reflect *different field-semantics*, not contradictory
  disciplines. It governs why *this* doc's `relates_to:` carries the two foreign alignment-ADR ids while
  Gate (L5b) still holds for the hard fields — a refinement of, not an exception to, Gate (L5b).

### Meta-precedents (retrospective-authoring layer)

Seven precedents this retrospective demonstrates in its own authoring (the original four, plus three
surfaced while authoring this cross-repo extension):

- **`orchestrator-framing-correction-via-recursive-discipline`**: the X2 catch was a *validator* halt,
  not a Codex "Step 5 HALT" — the dispatch's own shorthand was corrected by applying cascade-miss
  discipline to the dispatch itself. The arc's central narrative only reads correctly with X2's
  catch-layer named precisely.
- **`retrospective-authoring-honesty-over-completeness-pressure`**: document only grounded precedents;
  refuse to pad to a round target count.
- **`discipline-discovery-via-attempt-to-document-discipline`**: authoring this retrospective surfaced
  a *fresh* cascade-miss — the X3/X4 close-out manifests use `.txt`/no-date naming that the dispatch's
  glob pattern silently missed — which the retrospective then documents. The artifact is
  self-exemplifying.
- **`canonical-section-heading-preemption-generalizes-beyond-ADRs`**: this connection-doc plan
  achieved a **third consecutive 0-lint-FAIL Codex R1** (X5 → X6 → this retrospective), validating the
  preemption as a discipline for *all* Spore doc-authoring, not just ADR-shaped work.
- **`retrospective-self-currency-update`**: when a retrospective documents work that has since landed
  and its own status sections still enumerate that work as outstanding, currency-update those sites per
  the same enumeration-vs-narrative discipline applied to the target canons. Demonstrated here: §7's
  first bullet was forward-tense ("operator-elective") for work that landed the same day; this extension
  marks it LANDED — self-application of the very discipline the two alignment ADRs just applied to PM's
  grammar(4) ↔ vision(3) sites.
- **`cross-session-precedent-propagation-requires-memory-codification`**: a precedent documented in a
  doc or ADR does not propagate to the next session's authoring unless it is also codified to memory.
  The canonical-section-heading-preemption discipline was already in this retrospective's §4, yet it did
  not reach this extension's *first* plan-file draft — the regression that prompted the canonical-heading
  refactor. The logical consequence (codify the heading-preemption discipline to a memory entry) is
  parked as an elective follow-on, surfaced rather than silently dropped.
- **`check-memory-before-authoring-new-precedent`**: a positive instance — precedent #14's memory
  (`feedback_dh_pm1_evidence_basis_discipline.md`) was found already auto-harvested, so the planned
  memory work was scoped to a minimal two-wikilink enrichment rather than a duplicate file; an
  application of the global memory-hygiene rule ("check for an existing file that already covers it"),
  freshly demonstrated this session.

## §5 Operator-judgment moments

Operator judgment at the canon-discipline gates was load-bearing at multiple distinct gates across
the arc — not only at the visible declines.

- **C7 sheaf-substrate anti-enthusiasm-override DECLINE.** Despite an "operator goldmine" framing,
  the sheaf-graph-substrate candidate was declined and parked with six re-opening triggers (Spore-side
  operational pressure; ≥3rd independent operationally-articulating tradition; bregion canonical
  adoption; Sahely future-works deepening; pure-math citation-density reframed as load-bearing;
  cross-stream sibling adoption). Enthusiasm for a concept is not admission evidence.
- **Bundle β architecture choice — the heaviest canon-shift path.** The operator authorized the path
  that expanded the canon-object-class inventory: Option C (4th cross-cutting doctrine) for X2 — over
  Option A (10th primitive; fails earning-test (a)) and Option B (decompose across primitives; would
  reproduce the very money-value invisibilisation the doctrine exists to name) — plus the standalone
  slug for X3 and the Option D triple-move for X1. This was the gate that set Bundle α at substantive
  scope.
- **C10 HOLD at framing-note-only — a distinct gate.** The health-as-coherent-transition candidate had
  4 clusters (≥ the derived-glossary threshold) but no Spore-side operational pressure, so the operator
  held it at framing-note rather than elevating it — locking Bundle α at **6 ADRs, not 7**. The lesson:
  cluster-count is a necessary-but-not-sufficient gate; operational pressure is the load-bearing decider.
- **Preserving Step 2 sub-decisions over Codex consolidation pressure** *(X3 R2; X4 R1 Q1; X6 R1 Q1)*:
  Codex reviews execution-cleanliness, not the operator-decided shape. Where review pressed to
  consolidate or re-open a Step-2 sub-decision, the operator preserved the ratified shape.
- **Push-after-active-commit confirmation discipline** (2-layer): operator ratification at Step 2 +
  an explicit confirm-at-push after Step 6 verification. No push mid-ceremony; no push without a fresh
  confirmation, so a post-active-commit defect triggers a rollback rather than a hasty release.

## §6 Future-ADR-shape candidates

Surfaced during the arc and held, with re-opening conditions preserved:

- **C7 sheaf-graph-substrate** — DECLINE-with-trigger (6 triggers above). Currently Spore-only Bundle β
  surface; no sibling carries sheaf at canon layer.
- **C10 health-as-coherent-transition** — held at framing-note-only; re-opens on Spore-side operational
  pressure for the slug or maturation of allostasis-as-reserve-capacity operationalization.
- **C16 collective-subconscious-pathology (CMT/DMA/RP)** — DECLINE-with-trigger (3 triggers: ≥3rd
  independent operationally-articulating tradition; Spore-side operational pressure for
  subconscious-pathology-handling; Sahely deepening across ≥3 further works).
- **`reserve-margin` / `slack-as-resilience` slug** *(X5 §Downstream)* — explicitly NOT admitted
  (`reproductive-infrastructure` already covers the reserve substrate); re-opens on an operational
  reserve-capacity-sizing design-rubric distinct from the existing slug, or a 4th cross-tradition
  cluster at the coordination-grammar-primitive (not engineering-resilience) layer.
- **`perception-as-power` slug** *(X6 §Downstream)* — explicitly NOT admitted (`epistemic-gap` +
  `external-witness` already cover the territory); re-opens on an operational voice-counting /
  standpoint-eligibility design-rubric, or a 4th cluster at a layer F4 does not already cover.
- **Pattern-library candidates** (per ADR-0065 M4 sub-class framework): `clinical-encounter-as-
  structural-coupling-pattern` (X4); `allostatic-reserve-as-organism-margin-pattern` (X5); a
  `whose-perception-counts` design-rubric (X6). None triggered; all tracked.

## §7 Operator-elective post-Bundle-α work

- **Wave-N+1 IC + PM REFERENCE alignment for `life-value-doctrine`** — **LANDED 2026-05-29**
  (ic:ADR-0022 `c3b6af3` + pm:ADR-0019 `bac8115`; both REFERENCE-heavy Option-2, H2-decline → no slug
  import; **DH-PM-1 NOT FIRED, fifth consecutive clean**, re-grounded on repo artifacts). This was the
  **only** Bundle α admission requiring sibling alignment, because it is the only one that expanded the
  canon-object-class inventory (3 → 4 doctrines; per `feedback_upstream_downstream_canon_propagation.md`
  the five vocab/scope-condition admissions do not fire Wave-N+1). The precedents these two ADRs carried
  are catalogued in §4 → *Cross-repo Wave-N+1 alignment precedents*.
- **Optional IC perception-as-power composition** *(X6 §Parking)* — the C13 substrate (Galtung
  structural-violence + standpoint-epistemology) composes with IC observer-discipline at the
  substrate-articulation layer; operator-elective, opens only if IC opens cross-stream.
- **BKC peer-instance-family bridges** — `bkc.connection.mcmurtry-civil-commons-as-economic-foundation`
  (X2/X3), `bkc.connection.maturana-care-as-structural-coupling` (X4),
  `bkc.connection.commitment-pool-reserve-as-margin` (X5) — read-time bridge-notes, not alignment
  ADRs; operator-elective per peer-instance-family discipline.
- **Phase 3 broader-cluster intake** and the **quarterly Sahely Gmail sweep** continue.

## §8 References

**Bundle α canon-decisions** — [ADR-0085](../canon-decisions/0085-trap-shape-vocab-and-recursive-audit-method.md) ·
[ADR-0086](../canon-decisions/0086-life-value-doctrine-fourth-cross-cutting-doctrine.md) ·
[ADR-0087](../canon-decisions/0087-civil-commons-derived-glossary-slug-admission.md) ·
[ADR-0088](../canon-decisions/0088-care-cluster-scope-condition-adr-0045.md) ·
[ADR-0089](../canon-decisions/0089-margin-as-reserve-scope-condition-f9.md) ·
[ADR-0090](../canon-decisions/0090-perception-as-power-scope-condition-f4.md)

**Framing-notes** — [`canon-framing-recursive-audit-method`](canon-framing-recursive-audit-method.md) ·
[`canon-framing-life-value-doctrine`](canon-framing-life-value-doctrine.md) ·
[`canon-framing-civil-commons`](canon-framing-civil-commons.md)

**Cross-repo bridge** — [`sahely-ruddick-civil-commons-bridge`](sahely-ruddick-civil-commons-bridge.md)
(McMurtry foundation-doctrine → Ruddick protocol → BKC implementation, 3-layer composition; Phase 2
closure Task A).

**Cross-repo Wave-N+1 alignment ADRs** — ic:ADR-0022
(`ic.canon-decision.canon-alignment-through-spore-adr-0086`, IC `c3b6af3`) · pm:ADR-0019
(`pm.canon-decision.canon-alignment-through-spore-adr-0086`, PM `bac8115`) — both REFERENCE-heavy
Option-2 alignments for the `life-value-doctrine` canon-object-class expansion, landed 2026-05-29 in
sibling-scoped sessions; precedents catalogued in §4 → *Cross-repo Wave-N+1 alignment precedents*.

**Substrate** — 12 Sahely anchor bridge notes (`sahely-*`, Waves 1–4); the Phase 2 DECISION-BRIEF
(`tmp/sahely-corpus-canon-pressure-decision-brief-2026-05-22.md`); the Layer 3 handoff
(`tmp/sahely-layer-3-handoff-2026-05-22.md`); the six close-out manifests
(`tmp/adr-0085-…-2026-05-23.md`, `tmp/adr-0086-…-2026-05-25.md`, `tmp/adr-0087-close-out-manifest.txt`,
`tmp/adr-0088-close-out-manifest.txt`, `tmp/adr-0089-…-2026-05-28.md`, `tmp/adr-0090-…-2026-05-29.md`)
and the six session plans at `~/.claude/plans/`.

**Shape-match precedents** —
[`canon-rebuild-arc-method-retrospective`](canon-rebuild-arc-method-retrospective.md) (2026-04-24) ·
[`wiki-intake-canon-review-retrospective`](wiki-intake-canon-review-retrospective.md).

---

*The wiki-intake retrospective explained how an external corpus first built the canon; the
canon-rebuild retrospective explained how the canon learned to change itself rigorously; this one
explains how a matured canon absorbed a second large substrate while moving its own error-catches
progressively earlier — until the discipline became preemptive enough that the last admissions, and
this retrospective itself, landed clean on the first review.*
