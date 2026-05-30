---
doc_id: spore.connection.sahely-intake-arc-method-retrospective
doc_kind: connection
status: active
title: "Sahely Intake Arc — Method Retrospective (batch-scale authoring)"
authored: 2026-05-30
relates_to:
  - spore.connection.canon-rebuild-arc-method-retrospective
  - spore.connection.wiki-intake-canon-review-retrospective
  - spore.connection.sahely-bundle-alpha-retrospective
  - spore.connection.sahely-corpus-intake-capstone-2026-05
concepts:
  - golden-calf-trap
  - life-value-doctrine
  - civil-commons
---

# Sahely Intake Arc — Method Retrospective

This is the **intake-method** retrospective for the Sahely grand arc (2026-05-22 → 2026-05-30):
the missing third member of Spore's retrospective trio. Where
[`wiki-intake-canon-review-retrospective`](wiki-intake-canon-review-retrospective.md) explained how a
large external corpus first *moved three repos' canons*, and
[`canon-rebuild-arc-method-retrospective`](canon-rebuild-arc-method-retrospective.md) explained how
the *canon learned to change itself rigorously*, this one explains how **intake learned to author at
batch scale without losing citation discipline** — the first Workflow-orchestrated intake, the first
adversarial-verify-at-batch-scale that caught real failures, and the first multi-phase
consistency-map.

It is a `doc_kind: connection` reference artifact. It is **framing-note-only**: it admits nothing,
shifts no canon state, touches no foundation doc, and adds no slug. It cites the closed Bundle-α
decisions (ADR-0085 → ADR-0090) and the capstone as the slots the corpus occupies; it never re-opens
them. Its companion that explains *how the canon changed* is
[`sahely-bundle-alpha-retrospective`](sahely-bundle-alpha-retrospective.md); its companion that
explains *what the corpus is* is
[`sahely-corpus-intake-capstone-2026-05`](sahely-corpus-intake-capstone-2026-05.md). This note
explains *how the intake was authored*.

---

## §1 Phase narrative — the grand arc

The Sahely intake was not a single sweep. It was a six-stage program, and the method discipline
that this note records lived almost entirely in the high-fan-out stages (Phase 3, propagation,
completeness audit), where the danger was no longer "is this admission earned" but "did 39 parallel
authors keep their citations honest against a canon that moved underneath them."

### §1.1 Phase 1 — corpus intake

104 Gmail subscription emails, 99 Sahely-authored PDFs, 103 extraction records, all KG-ingested into
personal-koi. The discovered corpus is far larger than the read subset — roughly 1,369 posts at
`bsahely.com`, of which 104 were Gmail-known and intaked to substrate grade. Phase 1 closed
2026-05-22 at 103/104 coverage (one item uncovered by design) with ~3,400 pages indexed across 17+
Person entities and ~110 Concepts. This was the second-largest substrate admission in the canon's
history after the P2P-wiki intake.

### §1.2 Phase 2 — anchors and the DECISION-BRIEF

12 anchor bridge notes (Waves 1–4) authored against the *pending* (pre-Bundle-α, concepts-yaml v21)
canon, plus the Layer-2 DECISION-BRIEF. The anchors deferred every substantive convergence to the
brief rather than pre-committing a canon shape — the discipline that let Bundle α run honest
cluster-counting later. The brief evaluated 18 canon-pressure candidates and narrowed them to 14
dispositioned outcomes, ratifying the Bundle-α architecture (6 ADRs + framing-notes +
declines-with-triggers).

### §1.3 Bundle α / Layer 3 — the admissions

Six ADRs (0085 → 0090) across six operator-gated sessions: `golden-calf-trap` +
`recursive-audit-method` (ADR-0085); `life-value-doctrine` as the 4th cross-cutting doctrine
(ADR-0086, the only canon-object-class expansion of the arc); `civil-commons` slug (ADR-0087); and
three scope-conditions — care-cluster on ADR-0045 (ADR-0088), margin-as-reserve on F9 (ADR-0089),
perception-as-power on F4 (ADR-0090) — plus 3 framing-notes and 4 declines-with-triggers. IC and PM
aligned via ic:ADR-0022 + pm:ADR-0019 (REFERENCE-heavy Option-2, the sole Wave-N+1 trigger being the
doctrine-count expansion). The full method account of this layer lives in the Bundle-α retrospective;
this note treats it as the resolved canon that Phase 3 had to cite correctly.

### §1.4 Phase 3 — the high-fan-out bridge-note wave

39 bridge notes: **28 Gmail-known** (PDF white-papers + reposts) across 4 thematic waves
(viability-grammar / autopoiesis-medicine-care / political-economy-civil-commons /
peace-civilization-violence), plus **11 foundation-era** posts (2017–2018) that required a
**fresh HTML+PDF fetch** at intake time because they predated the Gmail subscription window. Every
one of the 39 was authored **framing-note-only** against the *resolved* post-Bundle-α canon. This is
the stage where the new method machinery did its work: the corpus had moved from v21 to v24 between
Phase 2 and Phase 3, so the single most likely failure was an author citing a frozen, pre-resolution
parent ADR for a theme the canon had since resolved into a child decision. A capstone closed the
phase with the corpus's readable spine.

### §1.5 Cross-repo propagation

Peer-instance-family bridge notes: BKC ×3, bregion ×2, IC ×1. These are read-time bridges, not
alignment ADRs (per the peer-instance-family-vs-downstream-aligned discipline). Spore and all
siblings stayed frozen at their step-0 SHAs during their respective windows; the propagation was
descriptive-no-writeback in both directions.

### §1.6 Completeness audit and engage

A 5-auditor fan-out (plus a skeptic-of-skeptics synthesizer) classified every deliverable as
done / parked / optional / missing and returned a 100% verdict. A Sahely author-outreach draft was
then composed, gated by `verify_draft.py`, and held pre-send pending operator review.

**Stable outcomes across the arc.** Validator held **9 errors EXACT** throughout; warnings rose
237 → 248 (the +11 being corpus-review-input foundation-era extraction records, admitted under the
C1 exception — **not** drift). Zero rollbacks. Spore HEAD at arc close: `b3cc076`.

---

## §2 The newly-proven patterns

The arc proved five method patterns that the two prior retrospectives did not have to solve, because
neither prior arc authored this many artifacts in parallel against a canon that had moved between
phases. Each is named so future intake work can reuse it rather than re-discover it.

### §2.1 Workflow author→skeptic-verify at grand-arc scale

The orchestration shape was **one Workflow per wave**, each fanning out a
`pipeline(candidates, author, verify)`. The author agent writes the bridge-note file; a **read-only
skeptic verifier** (`agentType:'Explore'`) re-reads the file *on disk* and refutes it against a
structured VERDICT schema, defaulting `is_consistent:false` unless every check passes
(citation-correctness; no `depends_on:`; all `relates_to:`/`concepts:` resolve; framing-note-only
held; no inline admission). The orchestrator main loop kept everything human-gated or irreversible:
Step-0 verification, verdict review, fixing any `is_consistent:false`, the validator pre/post
snapshot, explicit-path `git add`, one commit per wave, sibling-SHA re-check, and the push-confirm
gate.

**Arc-evidence.** The skeptic stage **caught 2 real citation-drift FAILs the author agents missed** —
both cited the pre-Bundle-α parent **ADR-0045** for a care theme instead of the resolved **ADR-0088**:
the exact "frozen-pre-resolution-framing" risk that the canon-moving-between-phases structure created.
A single-pass author-only fan-out would have committed both. The verify stage is to batch citation
discipline what `verify_draft.py` is to external prose: a mechanical default-fail gate that does not
trust fluent generation.

### §2.2 Consistency-map as shared author+verifier oracle

Every author **and** every verifier received the same input: a **post-resolution canon-citation
table** — a doctrine-vs-slug map with the easily-confused distinctions made explicit
(`golden-calf-trap` is the **shape-of** ADR-0048 `substitution-trap`, **not equivalent-to** it;
`civil-commons` is a **slug**, not a doctrine; `life-value-doctrine` is the doctrine). Handing the
same oracle to both sides of the author/verify pipeline is the **#1 prevention** against citation
drift in a multi-phase intake where the canon moved between phases. The author cites against it; the
verifier refutes against it; the two cannot silently diverge on what the canon currently says.

**Arc-evidence.** This is the first multi-phase consistency-map in any Spore intake. The two FAILs of
§2.1 were *exactly* the cases the map was built to catch — a theme whose Phase-2 anchor pointed at the
parent ADR, now resolved to a child decision the map records.

### §2.3 Completeness-audit-with-skeptic-of-skeptics

The closing audit ran **N independent auditors** classifying every deliverable as
done / parked / optional / missing, then a **skeptic-of-skeptics synthesizer** whose job was to
*refute over-flagged "missing" verdicts* before "done" was trusted. The synthesizer is the
adversarial layer on the auditors, the same way the verifier is the adversarial layer on the authors.

**Arc-evidence.** The synthesizer caught an auditor's **disposition-label-vs-deliverable-spec
over-flag**: §17.8 of the brief read "6 framing-notes," but only **3 framing-notes were owed** —
*framing-note-only* is a **verdict** on the other items, not a deliverable to be built. An
unrefuted auditor would have recorded three phantom missing deliverables. The lesson generalizes:
a verdict-word in a planning doc is not a build target, and a completeness audit needs a layer that
distinguishes the two before it reports a gap.

### §2.4 Cross-repo-propagation-sweep-invariants

The peer-instance-family propagation (BKC ×3, bregion ×2, IC ×1) ran under a fixed set of invariants:
**survey each target repo's conventions first** (each repo's frontmatter dialect differs);
**`depends_on:` = local, `relates_to:` = upstream** edge-direction discipline; **descriptive-no-writeback**
(Spore stays frozen — a bridge note authored *in* a sibling repo cites Spore but does not edit it);
**resolve doc_ids against ALL repos** before writing; and **pre-supply canonical doc_ids** to each
author so any invented id is caught against the real one rather than committed.

**Arc-evidence.** Six peer bridges landed across three sibling repos with sibling SHAs frozen at
step-0 throughout. Pre-supplying canonical doc_ids is the cross-repo analog of the consistency-map:
the author cannot drift a citation it was handed the correct form of.

### §2.5 Serial-polite-fetch-then-process-local

The 11 foundation-era posts had no Gmail-cached body, so they required fresh fetches. Rather than let
39 parallel agents each reach out to the network, the arc did the **fetch serially and politely in the
main loop** — robots.txt gate, 1-second sleep between requests, friendly User-Agent — pre-extracted
clean body text to local files, and then let the parallel **agents process only the trusted local
files**. This confines the untrusted-content footprint to a single controlled serial sweep instead of
a 39-way fan-out of network reads.

**Arc-evidence.** All 11 foundation-era notes were authored from local pre-extracted bodies; no author
agent touched the live network. This is the intake-scale application of the security-boundaries
discipline: keep untrusted external content inside one auditable serial step, away from the
high-fan-out parallel stage.

---

## §3 Frictions and mechanical preventions

Four operational frictions surfaced during the arc; each produced a mechanical prevention worth
carrying forward, because each was a *silent* failure mode — the kind that passes green while doing
less than it claims.

### §3.1 Codex `/review-plan` at x-high hangs on large plans

`gpt-5.5` at **x-high** effort hung mid-generation on a ~25KB plan: roughly two hours of zero output,
killed by hand. Re-running the *same* plan at **high** effort completed in ~20 seconds with full
findings. **Prevention:** default large-plan reviews to `high` (not x-high), and **watchdog any review
run with a wall-clock hard cap** that kills and retries at a lower effort rather than waiting
indefinitely.

### §3.2 Workflow `args.candidates` arrived undefined

When candidates were passed via `args` paired with `scriptPath`, `args.candidates` came through as
`undefined` (the workflow failed on `candidates.length`). **Prevention:** **embed the candidate array
in the script itself** and re-invoke per wave with `scriptPath`; do not rely on `args` for the
fan-out list.

### §3.3 zsh does not word-split unquoted `$var`

An orchestrator verification loop written as `for x in $W` over a multi-word variable runs **once** on
the whole string in zsh, silently under-checking — it passes green while verifying almost nothing.
**Prevention:** orchestrator verification loops must use **explicit arrays** (`files=(a b c)`) or brace
expansion, never an unquoted multi-word variable. Treat any silent-pass shell construct as a coverage
failure, not a stylistic nit.

### §3.4 disposition-label ≠ deliverable-spec

The §2.3 over-flag had a general shape: a *verdict word* ("framing-note-only," "declined,"
"parked") in a planning doc can be misread by a downstream auditor as an unbuilt deliverable.
**Prevention:** **record conscious folds explicitly** — when an item is consciously *not* built
because its disposition is a verdict, say so where the auditor will read it, so the verdict cannot be
re-read as a gap.

---

## §4 What this arc gained over the prior intakes

This note belongs beside its two companions because the Sahely arc solved a problem neither prior
intake had to. The deltas are concrete:

- **vs the P2P-wiki intake.** The wiki intake authored ~40 bridge notes too, but against a *static*
  canon — the canon had not moved between Pass 1 and Pass 2 in a way that invalidated a citation. The
  Sahely arc authored against a canon that **moved from v21 to v24 between Phase 2 and Phase 3**, which
  is precisely why the consistency-map (§2.2) and the adversarial verifier (§2.1) had to exist. The
  wiki intake used 15 concurrent agents with a *frozen-concepts-yaml* discipline to prevent slug
  fragmentation; the Sahely arc added an *adversarial verify stage* to prevent the harder failure —
  citing a frozen parent for a since-resolved child.

- **vs the Johar intake.** Johar established the single-source-recurrence discipline (cross-post
  recurrence is not independent evidence) that the Sahely capstone inherits wholesale. The Sahely arc
  carried that discipline forward unchanged but added the **batch-authoring machinery** Johar never
  needed: Johar's intake was sequential and human-paced, so it had no fan-out citation-drift risk to
  mechanize against.

- **vs the Bundle-α arc.** Bundle α was the *admission* layer — six operator-gated single-ADR
  sessions whose discipline was about moving error-catches earlier (round-2 → execution → audit →
  clean). The Sahely *intake* arc is the layer **around** Bundle α: it is the **first
  Workflow-orchestrated intake**, the **first adversarial-verify-at-batch-scale catching 2 real
  FAILs**, the **first multi-phase consistency-map**, and the **first 5-auditor completeness audit**.
  Bundle α matured how the canon *decides*; this arc matured how intake *authors at scale around those
  decisions*.

The durable gain is a reusable answer to a question neither prior intake had to ask: **how do you let
dozens of parallel agents author canon-adjacent artifacts against a canon that moved underneath them,
without any of them quietly committing a stale citation?** The answer, after this arc, is: a shared
post-resolution consistency-map handed to both author and skeptic, a default-fail verifier that
re-reads the file on disk, a serial-fetch boundary around untrusted content, and a skeptic-of-skeptics
layer on the completeness audit.

---

## §5 Honest risk note

Speed at batch scale introduced three risks the automation **cannot self-validate**. They are recorded
here verbatim-in-spirit, each with the guardrail that addresses it, so that a future reader does not
mistake the arc's green close for an independently-audited one.

**(a) False-negative on cluster-counting.** "Phase 3 surfaced zero new canon-pressure" was an
*emergent property* of 39 atomized, framing-note-only agents. **No single agent read the corpus
holistically.** A theme that is weak in every individual post but cross-threshold in aggregate could
therefore be under-detected — the fan-out structure that makes batch authoring fast is exactly the
structure that cannot see an aggregate signal. **Guardrail:** one explicit **holistic-read sign-off**
on the zero-pressure verdict, by a reader (human or agent) who has read the corpus as a whole rather
than note-by-note.

**(b) Shared ground-truth shares its errors.** The author and the verifier embed the **same**
hand-transcribed consistency-map. A *map-level* error therefore has **no independent check** — both
sides agree because both inherited the same mistake; it was correct here only by operator vigilance,
not by construction. **Guardrail:** **derive the map from live `concepts-yaml` + `canon-decisions/`**
at workflow-start, so the shared oracle is generated from canon rather than hand-transcribed into a
single point of shared failure.

**(c) The verifier only checks what it is told.** A green "all checks pass" means confidence
*proportional to checklist completeness* — it is **never independently audited**. Quote-traceability
was spot-grepped on 1–2 notes, not exhaustively; and the silent zsh bug (§3.3) means a verification
*loop* can pass while checking almost nothing. **Guardrail:** **periodically meta-audit the verifier
checklist for coverage**, and treat **any silent-pass shell construct as a coverage failure** rather
than a passing check.

These three are not defects to be patched and forgotten. They are the standing cost of authoring at
batch scale, and the guardrails are the price of keeping the speed.

---

## §6 Forward pointers

- **Intake-protocol addendum.** The five patterns of §2 and four preventions of §3 are the v-next
  delta to the learning-field intake protocol
  ([`learning-field-intake-protocol`](../planning/learning-field-intake-protocol.md)): the prior
  protocol covered the *two-phase synthesis→projection* shape; this arc adds the
  *Workflow-orchestrated author→verify* shape for the projection layer at fan-out scale. Folding it in
  is operator-elective per the protocol's own attrition-based revision convention.

- **Reusable Workflow template.** The intended reusable artifact is
  `docs/research/planning/templates/intake-wave.workflow.template.js` — the `pipeline(candidates,
  author, verify)` skeleton with the default-fail VERDICT schema, the embedded-candidates pattern
  (§3.2), and the consistency-map input slot pre-wired. It is a **forward pointer** (not yet authored
  at the time of this note); authoring it is the way the §2 patterns become one-step reusable rather
  than re-derived per wave.

- **Memory entries.** One is **landed**:
  `feedback_workflow_orchestrated_intake.md` (the author→skeptic-verify pattern, the
  embedded-candidates and zsh fixes, and the Codex x-high-hang note). The **second** — codifying the
  consistency-map-as-shared-oracle discipline together with risk-note guardrail (b)
  (*derive the map from live canon, do not hand-transcribe*) — is the elective follow-on, surfaced
  here per the memory-codification-propagation discipline (a precedent documented only in a doc does
  not reach the next session's authoring unless it is also codified to memory).

---

*The wiki-intake retrospective explains how corpus pressure changed the canon; the canon-rebuild
retrospective explains how the canon learned to change itself; this one explains how intake learned to
author at batch scale without losing citation discipline.*
