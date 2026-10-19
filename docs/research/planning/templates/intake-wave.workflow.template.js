/* =============================================================================
 * intake-wave.workflow.template.js  —  REUSABLE TEMPLATE (valid JS, not TS)
 * =============================================================================
 *
 * A durable, genericized version of the proven Phase-3 intake-wave Workflow
 * script (first runnable arc: Sahely Phase 3, 2026-05-30 — 39 bridge notes +
 * capstone across 6 waves). Use it to author + adversarially-verify a wave of
 * canon-adjacent artifacts (bridge notes, comparative-intake notes, etc.) in
 * parallel, with a read-only skeptic verifier as the mechanical citation-drift
 * prevention.
 *
 * ---------------------------------------------------------------------------
 * USAGE
 * ---------------------------------------------------------------------------
 *  1. Copy this template OUT of templates/ to a scratch path (e.g. tmp/<intake>-waveN.workflow.js).
 *  2. Fill EVERY '// FILL PER INTAKE:' placeholder (candidates[], CONSISTENCY_MAP,
 *     SHAPE, GATES, REPO/EVIDENCE/OUTPUT paths, slug/output scheme).
 *  3. Edit the `candidates` array per wave (see friction #2 — candidates MUST be
 *     embedded here, NOT passed via args).
 *  4. Invoke with the Workflow tool using `scriptPath` pointing at your scratch copy.
 *  5. The script returns { wave, notes, fails, manifest_inputs }. `notes` has one entry
 *     per candidate: its stem, slug and output path (taken from the candidate, never from
 *     an agent's self-report), the author's full returned output (`author`, null if the
 *     author failed), the verdict, and `result`: the detailed verifier result to retain
 *     (every verifier pass in full) with the file it belongs in (`result_path`). A
 *     candidate passes only when the author reported the candidate's own path, exactly
 *     one verifier pass came back from its one verifier call, labelled with slot 1 and the
 *     call id label the template gave that call (a consistency label, not proof of the call), and
 *     every pass checked that same path for that same stem, recorded the sha256 of the same
 *     bytes, judged them consistent, reported every check in REQUIRED_CHECKS, and reported no
 *     check false. Each result names its registered verifier policy (id and sha256,
 *     VERIFIER_POLICIES below), which intake_record.py checks against its own registry. The ORCHESTRATOR (main loop) then reviews
 *     verdicts, fixes any failure (a hand-patched note is re-verified, because each
 *     verifier pass records the sha256 of the bytes it read), and does all the
 *     irreversible/human-gated steps
 *     (below) — those stay OUT of this workflow.
 *
 * Runtime globals injected by the Workflow harness (do NOT import): `agent`,
 * `pipeline`, `log`. Author agents OMIT agentType (they need Write); verifiers
 * use the registered read-only skeptic subagent `darren-workflow:skeptic`
 * (VERIFIER_AGENT_TYPE below). This script passes that type on every verifier call and
 * has no fallback of its own; see VERIFIER_AGENT_TYPE for what happens when the type is
 * not registered. The retained result does not record which agent type ran. The completeness-audit pattern's meta-
 * auditor is the paired `darren-workflow:skeptic-of-skeptics` subagent.
 *
 * ---------------------------------------------------------------------------
 * ORCHESTRATOR MAIN-LOOP RESPONSIBILITIES — keep these OUT of the workflow
 * ---------------------------------------------------------------------------
 * The workflow only authors + verifies (reversible, agent-safe). Everything
 * human-gated or irreversible stays in the orchestrating session's main loop:
 *   - Step-0 verification + reviewing every returned verdict; spot-read 1–2 notes/wave.
 *   - Fix any failed verdict BEFORE proceeding. A hand-patched note cannot be promoted as is:
 *     this script re-authors every candidate it runs, so there is no verify-only run, and a
 *     result assembled by hand for a patched note is not a verifier's output. Re-run the
 *     candidate through this script and promote what that run authors and verifies. A
 *     note fails whenever the pass rule in step 5 above does not hold (passBinds and the
 *     verdict line below), not only when a verifier reports is_consistent:false.
 *   - Orchestrator-side grep-verify at commit time (do NOT fully trust agent verdicts).
 *   - VALIDATOR pre/post SNAPSHOT (capture EXACT count before + after the wave; must hold).
 *   - SIBLING-SHA check (sibling canon repos' HEADs frozen across the wave; re-check post-commit).
 *   - BYTE-BOUND FINAL-OUTPUT MANIFEST (after every fix, before the commit):
 *     (a) retain each note's verifier result: write `notes[i].result` as JSON to
 *         `notes[i].result_path` (RESULTS_DIR, outside the note directory), exactly
 *         as this script returned it. Keep the workflow's whole return value too, so the
 *         operator can compare each retained result with it;
 *     (b) save the verdicts file { schema: 'comparative-intake-verdicts/v1', verdicts:
 *         manifest_inputs } (manifest_inputs is the bare list of { path, result } entries).
 *         A label such as "verify:<slug>" is not a result;
 *     (c) with every note at its final destination under REPO (the promotion root), run
 *           python3 -I <comparative-intake skill dir>/scripts/intake_record.py manifest <final note files> --root REPO --verdicts <verdicts.yaml> [--approvals <ledger>]
 *         and keep its stdout as the wave's manifest, outside the note directory. The
 *         manifest lists each file's destination path relative to REPO, its sha256,
 *         artifact/version and kind, the verdict it derives from the retained result under
 *         the result's registered verifier policy, that policy's id and sha256, and the
 *         result's real location and sha256.
 *     The operator's promotion gate (comparative-intake approvals ledger, kind
 *     promotion-gate) binds that manifest's sha256. Before the commit, run intake_record.py
 *     check --require-approved on the staged files: it passes only for the listed bytes at
 *     the listed paths, and nothing runs it for you. Authors and verifiers never run
 *     `manifest` or write the manifest, a retained result, the verdicts file or the ledger. Notes without an intake record cannot be listed; give the authors the
 *     record instruction (comparative-intake references section 10) when a manifest is wanted.
 *   - Explicit-path `git add <files>` (NEVER `git add -A`); ONE commit per wave.
 *   - PUSH-CONFIRM gate (operator authorizes the push; never auto-push canon).
 *
 * STANDING RULE for every agent in this workflow and every orchestrator probe: never
 * define a shell function or alias that shadows an external command (tr, sed, grep, cat,
 * test, printf, ...). A function that calls the command it shadows calls itself and
 * recurses without end; on 2026-10-12 a verifier's `tr()` helper fork-bombed the
 * operator's process table. Give helpers distinctive names, or probe in Python.
 *
 * ---------------------------------------------------------------------------
 * 3 FRICTIONS (learned the hard way; do not re-discover)
 * ---------------------------------------------------------------------------
 *  1. Codex /review-plan at x-high effort HANGS on large (~25KB) plans (observed
 *     stall ~1h47m, zero output). Use `--codex-effort high` — completes in ~20s.
 *     Watchdog any review with a hard cap rather than waiting indefinitely.
 *  2. EMBED candidates IN THIS SCRIPT, NOT via args. `args.candidates` arrives
 *     `undefined` when paired with `scriptPath` (the workflow then fails on
 *     `candidates.length`). Edit the candidate array here per wave + re-invoke.
 *  3. Orchestrator-side verify loops run in ZSH: unquoted `$var` does NOT
 *     word-split. Use explicit arrays `files=(a b c)` or brace expansion — not
 *     `for x in $W`.
 *
 * ---------------------------------------------------------------------------
 * A leading "Canon-facts" phase machine-reads the live canon (yaml version +
 * slugs + doctrines + ADR doc_ids) and PREPENDS those authoritative facts to the
 * authored consistency-map at run-time — so author + verifier share a verified
 * ground truth and a hand-transcription slip in a doc_id/slug can't propagate
 * unchecked (the "derive-from-live-canon" guardrail). Set DERIVE_CANON_FACTS=false
 * to skip. The two judgments this still cannot self-validate (require human
 * sign-off): a "zero new pressure" verdict (false-negative-on-aggregate) and the
 * verifier checklist's own coverage — see feedback_completeness_audit_skeptic_of_skeptics.md.
 *
 * See also (method references):
 *   memory/feedback_workflow_orchestrated_intake.md  ·  feedback_completeness_audit_skeptic_of_skeptics.md
 *   docs/research/connections/sahely-intake-arc-method-retrospective.md  ·  sahely-bundle-alpha-retrospective.md
 *   docs/research/planning/learning-field-intake-protocol.md §13
 * ===========================================================================*/

// FILL PER INTAKE: workflow identity. Rename per intake program + wave.
export const meta = {
  name: '<intake-name>-waveN',               // FILL PER INTAKE: e.g. 'sahely-phase3-wave'
  description: '<intake> wave — author + adversarially verify N <artifact-kind>', // FILL PER INTAKE
  phases: [
    { title: 'Canon-facts', detail: 'one agent machine-reads the live canon (yaml version + slugs + doctrines + ADR doc_ids) so the consistency-map FACTS cannot be stale' },
    { title: 'Author', detail: 'one author agent per candidate writes a single artifact file' },
    { title: 'Verify', detail: 'read-only skeptic refutes citation/discipline violations against the file on disk' },
  ],
}

// FILL PER INTAKE: repo + path scheme. REPO is the canon-bearing repo root;
// EXT is where per-candidate evidence/extraction records live; CONN (or your
// equivalent) is where authored artifacts are written.
// EVIDENCE RECORD PER CANDIDATE: a paper's evidence record is its extraction record
// (EXT/<stem>.md). A REPO (or other code-bearing artifact) has no extraction record:
// its evidence record is the comparative-intake IntakeTrace for that repo, whose
// `## 7. Intake record` pins the full commit SHA, locators, retention and license
// sources. Point the candidate's `evidence` field at that trace; the byte-bound
// final-output manifest (orchestrator step above) then pins what was authored from it.
const REPO = '<ABSOLUTE_PATH_TO_REPO>'                                   // FILL PER INTAKE
const EXT  = REPO + '/<path/to/evidence-extraction-records>'            // FILL PER INTAKE
const CONN = REPO + '/<path/to/output-artifacts-dir>'                   // FILL PER INTAKE
// Where the orchestrator retains each detailed verifier result (never inside CONN or REPO's
// canon tree; a scratch or review directory is fine).
const RESULTS_DIR = '<ABSOLUTE_PATH_FOR_RETAINED_VERIFIER_RESULTS>'      // FILL PER INTAKE

// CANON AUTHORITY paths — the live sources the Canon-facts agent machine-reads
// (and the verifier greps). Keeping these as the single source of truth removes
// the "shared-ground-truth shares its errors" risk: the FACTS (yaml version,
// slug list, doctrine list, ADR doc_ids) are derived from live canon at run-time,
// so a hand-transcription error in the authored map below cannot go unchecked.
const CONCEPTS_YAML      = REPO + '/<path/to/concepts-registry.yaml>'   // FILL PER INTAKE
const CANON_DECISIONS_DIR = REPO + '/<path/to/canon-decisions>'         // FILL PER INTAKE

// VERIFIERS_PER_NOTE — the registered policy has one verifier call per artifact, and any other
// value stops the run before an agent is called. A retained result cannot show that a second
// call happened (its slot and call_id labels are deterministic and public), so no policy counts
// a second pass. For a canon-critical wave, run a second skeptic separately as an ADVISORY check:
// it is not part of the retained result and is never presented as proof of a second call.
const VERIFIERS_PER_NOTE = 1

// VERIFIER POLICY — intake_record.py accepts a retained verifier result only under a verifier
// policy registered in its own code-reviewed registry, and checks that the result's
// required_checks and verifiers_per_note are exactly that policy's. This is the one registered
// Spore policy: the six checks with one verifier call. Its `body` is the policy's canonical
// body written as the exact canonical JSON (sorted keys, no spaces) that its sha256 names; the
// body covers every field that changes what the policy approves (kinds, checks, count, body
// schema, verdict rule). Do NOT edit a body or sha256 here: a policy is changed only by
// registering it in intake_record.py first, and any other value makes every result unpromotable.
const VERIFIER_POLICIES = {
  1: { sha256: '459f5262a2d56ed3b7c8c1be3ee4d2b8bcb21cf856068c3824a65b4e30f6fa8d', body: {"id":"spore-intake-wave/v3","kinds":["bridge-note"],"required_checks":["all_concept_slugs_resolve","all_relates_to_resolve","cites_correct_resolved_adrs","framing_note_only_held","no_depends_on","no_inline_admission"],"schema":"comparative-intake-verifier-policy/v2","verdict_rule":"comparative-intake-verdict/v3","verifiers_per_note":1} },
}
const VERIFIER_POLICY = Number.isInteger(VERIFIERS_PER_NOTE) ? VERIFIER_POLICIES[VERIFIERS_PER_NOTE] : undefined
if (!VERIFIER_POLICY || VERIFIER_POLICY.body.verifiers_per_note !== VERIFIERS_PER_NOTE) throw new Error(`VERIFIERS_PER_NOTE ${JSON.stringify(VERIFIERS_PER_NOTE)} has no registered verifier policy (only the integer 1)`)

// The label the template gives verifier call `slot` for a candidate. The verifier must return it
// unchanged as call_id, and the orchestrator records the slot itself (intake_record.py call_id).
// The label is computed from public values, so it is a consistency check on the retained result,
// not a receipt: it does not show that the call took place.
function callIdFor(c, slot) {
  return `verify:${c.stem}:${slot}/${VERIFIERS_PER_NOTE}`
}

// VERIFIER_AGENT_TYPE — the registered read-only skeptic subagent (darren-workflow
// plugin: agents/skeptic.md — default-FAIL, re-reads the file on disk, structured
// {check, quoted_offender, why} refutations). This script always passes it; if the type is
// not registered, any fallback is the Workflow harness's, not this script's, and the retained
// result does not show which agent ran. Check the type is registered before a promoted wave.
// NOTE (corrected 2026-05-31): a newly-added agent file is NOT picked up by a plain
// session restart — the @local plugin snapshots its agent set at install/scan time, so
// registering a new agent needs a /plugin re-scan/update (disable+enable), not a restart.
// See feedback_darren_workflow_agent_registration.md.
// PAIRED DEPENDENCY: this string and darren-workflow/agents/skeptic.md are ONE unit —
// rename/remove EITHER without the other and the verify stage silently falls back to
// 'Explore' (you lose the registered checklist with no error). Documented in 3 places:
// (a) HERE, (b) agents/skeptic-coverage/README.md, (c) learning-field-intake-protocol.md §4f.
const VERIFIER_AGENT_TYPE = 'darren-workflow:skeptic'   // fallback if unregistered: 'Explore'

// ---------------------------------------------------------------------------
// CONSISTENCY_MAP — the SHARED resolved canon-citation table handed to every
// author AND every verifier. Load-bearing: it tells agents to cite the RESOLVED
// canon state (not stale "pending"/"admit-candidate" framing). The Sahely arc's
// 2 caught FAILs were both stale-citation drift this map exists to prevent.
//
// TWO LAYERS (the 2026-05-30 risk-guardrail "derive-from-live-canon"):
//   (1) LIVE FACTS — machine-derived by the Canon-facts agent at workflow-start
//       (yaml version + slug list + doctrine list + ADR doc_ids/titles). These
//       are authoritative and cannot be stale; they are PREPENDED at runtime.
//   (2) AUTHORED JUDGMENT (below) — the theme→target SEMANTIC mapping + object-
//       class nuance (doctrine vs slug vs shape-of). This is judgment, still
//       hand-written, but now sits ATOP verified facts, so a transcription slip
//       in a doc_id/slug is caught by the live layer instead of propagating.
// ---------------------------------------------------------------------------
const CONSISTENCY_MAP_AUTHORED = `
// FILL PER INTAKE: the theme→target SEMANTIC map for THIS intake (judgment layer; the
// live FACTS — yaml version, exact doc_ids/slugs, doctrine list — are prepended at runtime).
RESOLVED CANON-CITATION CONSISTENCY MAP (theme → resolved target; the live-facts block above is authoritative for exact doc_ids/slugs/version — if this authored map disagrees with it, the live facts win).
Cite the RESOLVED state — NOT any "pending DECISION-BRIEF" / "admit-candidate" framing.
Map each theme to its exact resolved citation, preserving object-class:
- <theme A keywords>  -> cite <ADR-XXXX> (<doc_id>); slug(s): <slug> (note shape-of vs equivalent-to if relevant).
- <theme B keywords>  -> cite <ADR-YYYY>; doctrine: <doctrine-name> (a CROSS-CUTTING DOCTRINE, NOT a glossary slug).
- <theme C keywords>  -> cite <ADR-ZZZZ>; slug: <slug> (a DERIVED-GLOSSARY SLUG, NOT a doctrine).
- <decline theme>     -> framing-note-only ONLY; cite the DECLINE-with-triggers disposition. DO NOT propose admission.
- Other already-canonical resonances: <theme> -> <ADR/slug>; <theme> -> <ADR/slug>.
`

// Reassigned after the Canon-facts agent runs (live facts prepended). Until then
// it falls back to the authored layer alone, so the script is valid even if the
// Canon-facts phase is removed.
let CONSISTENCY_MAP = CONSISTENCY_MAP_AUTHORED

// ---------------------------------------------------------------------------
// SHAPE — the artifact template the author must produce (frontmatter + sections).
// Encode the HARD vs SOFT frontmatter field discipline here (e.g. relates_to is
// SOFT/grep-verified; depends_on is HARD and a wrong ref is a validator ERROR).
// ---------------------------------------------------------------------------
const SHAPE = `
// FILL PER INTAKE: the artifact shape (frontmatter fields + body sections + length target).
ARTIFACT SHAPE (target ~<N1>–<N2> lines). You MAY skim a prior exemplar once for tone: ${CONN}/<exemplar>.md
Frontmatter (YAML):
  doc_id: <namespace>.<kind>.<slug>
  doc_kind: <kind>
  status: active
  title: "<source-side> ↔ <canon-side territory phrase>"
  authored: <yyyy-mm-dd>
  relates_to:        # SOFT field — <repo> doc_ids ONLY; grep-verify each exists as a 'doc_id:' before listing.
    - <namespace>.<doc>
    - ...
  concepts:          # SOFT field — concept slugs ONLY; grep-verify each appears in the concepts registry before listing.
    - ...
  external_sources:
    - rid: <use the RID EXACTLY as it appears in the extraction record>
      pdf_local: <relative/path.pdf>   # if the extraction record names one; else omit
      pages: "<the pages actually cited>"
  intake_phase: <N>
NEVER use a 'depends_on:' field (HARD field — a wrong ref becomes a validator ERROR). Use relates_to: instead.
Body sections:
  # <title>
  caveat paragraph (descriptive comparative-intake artifact; honest-rigor; framing-note-only; single-source rigor statement);
  ## 1. Source-discipline  (artifact profile; if a REPOST, state curator-vs-author distinction and attribute claims to the ORIGINAL author).
  ## 2. C-claims  (<M1>–<M2> verbatim claims from the extraction record, each tagged [anchor: §… · <RID> · pdf-p<N> or html-section]).
  ## 3. R-claim disposition table  (target | concept | disposition | one-line). DISPOSITION = framing-note-only DEFAULT (or decline-with-trigger). NO admit-candidate; NO inline admission. Cite resolved ADRs per the consistency map.
  ## 4. Substrate-resonance map  (<K1>–<K2> descriptive points; cite admitted slugs/ADRs).
  ## 5. Cross-repo coherence delta  (descriptive only; no write-side recommendations).
  ## 6. Summary.
`

// ---------------------------------------------------------------------------
// GATES — the load-bearing discipline constraints both stages enforce.
// ---------------------------------------------------------------------------
const SHELL_RULE = `SHELL RULE: never define a shell function or alias that shadows an external command (tr, sed, grep, cat, test, printf, ...). A function that calls the command it shadows recurses without end. Name helpers distinctively, or use Python.`

const GATES = `
// FILL PER INTAKE: the discipline gates for THIS intake (tune to its canon discipline).
DISCIPLINE GATES (load-bearing):
- framing-note-only DEFAULT. You are NOT admitting anything. If you find genuinely NEW canon-pressure, do NOT admit it — set new_pressure to a one-line description and keep the note framing-note-only.
- Single-source rigor: cross-item recurrence within one author corpus is NOT independent evidence. Do not overclaim convergence.
- Grep-verify EVERY relates_to: doc_id (must exist as 'doc_id:') and EVERY concepts: slug (must exist in the concepts registry) BEFORE writing. Use Bash grep.
- No 'depends_on:' anywhere. No edits outside your single artifact file. No git, no send tools, no KOI writes.
- Quotes must be verbatim from the extraction record; cite the RID exactly as the extraction record gives it.
`

function evidencePath(c) {
  return c.evidence || `${EXT}/${c.stem}.md`   // a repo candidate points `evidence` at its IntakeTrace
}

function authorPrompt(c) {
  return `You are authoring ONE learning-field bridge note (framing-note-only) for one candidate.

WORKING REPO: ${REPO}
EVIDENCE (read this fully first): ${evidencePath(c)}
OUTPUT FILE (Write exactly here): ${CONN}/${c.slug}.md
${c.repost ? 'NOTE: this is a REPOST of ' + c.repost + ' — use REPOSTED attribution in §1; attribute concept/philosophical claims to the ORIGINAL author, not the curator.' : ''}

STEPS:
1. Read the evidence extraction record in full. Note its RID, the date, title, and the strongest verbatim claims.
2. ${CONSISTENCY_MAP}
3. ${SHAPE}
4. ${GATES}
   ${SHELL_RULE}
5. Before writing, grep-verify your chosen relates_to: doc_ids and concepts: slugs (drop anything that does not resolve).
6. Write the artifact to the OUTPUT FILE.
7. Return: path, slug, title, cited_adrs (e.g. ["ADR-XXXX","ADR-YYYY"]), cited_slugs, all_framing_note_only (true unless a decline-with-trigger row was used), new_pressure (null unless genuinely-new canon-pressure surfaced).

Keep it tight and honest. Do not invent claims not in the extraction record.`
}

function verifyPrompt(note, c, issued) {
  return `You are a SKEPTICAL read-only verifier. Default to is_consistent:false; only return true if EVERY check passes against the file on disk.

CALL ID: ${issued}   (return it unchanged as call_id)
FILE: ${CONN}/${c.slug}.md   (the candidate's output path; never a path an author reported)
EVIDENCE: ${evidencePath(c)}
CONCEPTS AUTHORITY: ${CONCEPTS_YAML}
ADR AUTHORITY: ${CANON_DECISIONS_DIR}

${SHELL_RULE}

CHECKS (run Bash grep against the actual file; refute precisely with quoted offenders):
1. cites_correct_resolved_adrs — wherever the note engages a mapped theme, it cites the RESOLVED ADR per the map below, NOT a "pending DECISION-BRIEF"/"admit-candidate" framing; object-classes (doctrine vs slug vs shape-of) are preserved.
   ${CONSISTENCY_MAP}
2. no_depends_on — the frontmatter has NO 'depends_on:' field.
3. all_relates_to_resolve — every relates_to: value exists as a 'doc_id:' somewhere under ${REPO} (grep each).
4. all_concept_slugs_resolve — every concepts: value appears in the concepts registry (grep each).
5. framing_note_only_held — the §3 disposition TABLE ROWS are framing-note-only (or decline-with-trigger); NO 'admit-candidate' used as an actual row disposition (the word may appear in a legend/tally — that is fine).
6. no_inline_admission — the note does not claim to admit/modify canon; it stays descriptive.

Also spot-grep 1–2 quoted fragments from §2 against the evidence file.

BEFORE the checks, run \`shasum -a 256 "${CONN}/${c.slug}.md"\` and return that hex digest as sha256: it records exactly which bytes you verified.

Each refutation MUST be an object: { check, quoted_offender, why } — name the failing check, paste the exact offending text from the file, and say why it fails.

Return: call_id="${issued}", stem="${c.stem}", path="${CONN}/${c.slug}.md" (the FILE you checked, exactly), sha256 (the digest above), is_consistent, refutations (every failure as {check, quoted_offender, why}), checks{...all six booleans...}.`
}

const NOTE_SCHEMA = {
  type: 'object',
  properties: {
    path: { type: 'string' }, slug: { type: 'string' }, title: { type: 'string' },
    cited_adrs: { type: 'array', items: { type: 'string' } },
    cited_slugs: { type: 'array', items: { type: 'string' } },
    all_framing_note_only: { type: 'boolean' },
    new_pressure: { type: ['string', 'null'] },
  },
  required: ['path', 'slug', 'cited_adrs', 'cited_slugs', 'all_framing_note_only', 'new_pressure'],
}

// The checks a verifier pass must report true for its candidate to pass (VERDICT_SCHEMA.checks):
// exactly the registered verifier policy's checks (VERIFIER_POLICIES above).
const REQUIRED_CHECKS = VERIFIER_POLICY.body.required_checks

// VERDICT schema — refutations are STRUCTURED: every failure must name the
// check, quote the offending text, and explain why. This forces the skeptic to
// produce actionable, grep-traceable findings (not vague disagreement).
const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    call_id: { type: 'string' },             // the CALL ID label this call was given, echoed unchanged
    stem: { type: 'string' }, path: { type: 'string' },
    sha256: { type: 'string' },              // shasum -a 256 of FILE as the verifier read it
    is_consistent: { type: 'boolean' },
    refutations: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          check: { type: 'string' },           // which named check failed
          quoted_offender: { type: 'string' }, // exact offending text from the file
          why: { type: 'string' },             // why it fails the check
        },
        required: ['check', 'quoted_offender', 'why'],
      },
    },
    checks: {
      type: 'object',
      properties: {
        cites_correct_resolved_adrs: { type: 'boolean' }, no_depends_on: { type: 'boolean' },
        all_relates_to_resolve: { type: 'boolean' }, all_concept_slugs_resolve: { type: 'boolean' },
        framing_note_only_held: { type: 'boolean' }, no_inline_admission: { type: 'boolean' },
      },
      required: ['cites_correct_resolved_adrs', 'no_depends_on', 'all_relates_to_resolve', 'all_concept_slugs_resolve', 'framing_note_only_held', 'no_inline_admission'],
    },
  },
  required: ['call_id', 'stem', 'path', 'sha256', 'is_consistent', 'refutations', 'checks'],
}

// ---------------------------------------------------------------------------
// CANON-FACTS — machine-read the LIVE canon so the consistency-map facts cannot
// be stale (derive-from-live-canon; removes the shared-ground-truth-shares-errors
// risk). The agent greps CONCEPTS_YAML + CANON_DECISIONS_DIR and returns the
// authoritative version/slugs/doctrines/ADRs; the result is PREPENDED to the
// authored map at runtime. Set DERIVE_CANON_FACTS=false to skip (then the
// authored map alone is used — accept the stale-transcription risk knowingly).
// ---------------------------------------------------------------------------
const DERIVE_CANON_FACTS = true
const CANON_FACTS_SCHEMA = {
  type: 'object',
  properties: {
    yaml_version: { type: 'string' },                                    // e.g. "v24"
    slugs: { type: 'array', items: { type: 'string' } },                 // every concept slug in the registry
    doctrines: { type: 'array', items: { type: 'string' } },             // the cross-cutting doctrine names
    adrs: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, doc_id: { type: 'string' }, title: { type: 'string' } }, required: ['doc_id'] } },
    facts_block: { type: 'string' },                                     // a ready-to-embed prose block of the above (the authoritative reference)
  },
  required: ['yaml_version', 'slugs', 'doctrines', 'adrs', 'facts_block'],
}
const canonFactsPrompt = `${SHELL_RULE}
You are a read-only canon-facts extractor. Machine-read the LIVE canon and return the authoritative current state so downstream authors cannot cite stale doc_ids/slugs/version. Use Bash grep.
- Concepts registry: ${CONCEPTS_YAML} — extract the version marker (e.g. a '# version: vNN' line) and EVERY concept slug, and the list of cross-cutting doctrine names.
- Canon-decisions: ${CANON_DECISIONS_DIR}/*.md — extract each relevant ADR's id (NNNN), its 'doc_id:' frontmatter value, and its title. (For a large set, focus on the ADRs the THIS-intake authored map below references + the most recent admissions.)
Return: yaml_version, slugs[], doctrines[], adrs[{id, doc_id, title}], and facts_block — a compact prose block listing the version, the doctrine names, and the exact ADR doc_ids (so an author can copy them verbatim). Do NOT invent; only report what is on disk. If a path is a FILL-PER-INTAKE placeholder (contains '<'), return empty arrays + facts_block:"(canon paths not configured)".`

const WAVE = 1   // FILL PER INTAKE: bump per wave.

// WARNING: args.candidates arrives undefined with scriptPath; embed candidates here.
// FILL PER INTAKE: EMBED candidates HERE (friction #2 — NOT via args).
// Each entry: { stem (evidence-file basename, no extension), slug (output-file
// basename, no extension), repost (null OR "Original Author (Work, Year)"),
// evidence (optional absolute path; a repo candidate points it at its IntakeTrace) }.
const candidates = [
  // { stem: '<evidence-file-stem>', slug: '<output-slug>', repost: null },
  // { stem: '<evidence-file-stem>', slug: '<output-slug>', repost: '<Original Author (Work, Year)>' },
]

// Results, notes and output paths are keyed by stem and slug, so each must be unique. A repeat
// stops the run before any agent is called.
for (const key of ['stem', 'slug']) {
  const values = candidates.map(c => c[key])
  if (new Set(values).size !== values.length) throw new Error(`candidates repeat a ${key}: ${JSON.stringify(values)}`)
}

log(`Wave ${WAVE}: ${candidates.length} artifacts (author -> skeptic verify; ${VERIFIERS_PER_NOTE} verifier(s)/note)`)

// Canon-facts phase — derive live canon FACTS and PREPEND them to the authored
// map, so author + verifier share machine-verified doc_ids/slugs/version (not a
// hand-transcription that could drift). authorPrompt/verifyPrompt read the `let
// CONSISTENCY_MAP` at call-time (inside the pipeline below), so reassigning it
// here takes effect for every agent.
if (DERIVE_CANON_FACTS) {
  const cf = await agent(canonFactsPrompt, { label: 'canon-facts', phase: 'Canon-facts', schema: CANON_FACTS_SCHEMA })
  if (cf && cf.facts_block && !/canon paths not configured/i.test(cf.facts_block)) {
    CONSISTENCY_MAP =
      `LIVE-DERIVED CANON FACTS (machine-read from disk at workflow-start — AUTHORITATIVE for exact version / doc_ids / slugs; the authored map below must not contradict these):\n` +
      `concepts-yaml: ${cf.yaml_version}\n` +
      `cross-cutting doctrines: ${cf.doctrines.join(', ')}\n` +
      `ADR doc_ids: ${cf.adrs.map(a => a.doc_id).filter(Boolean).join(', ')}\n` +
      `${cf.facts_block}\n\n` + CONSISTENCY_MAP_AUTHORED
    log(`Canon-facts: yaml ${cf.yaml_version}, ${cf.slugs.length} slugs, ${cf.doctrines.length} doctrines, ${cf.adrs.length} ADRs — prepended`)
  } else {
    log('Canon-facts: canon paths not configured (FILL PER INTAKE) — using authored map alone')
  }
}

const results = await pipeline(candidates,
  (c) => agent(authorPrompt(c), { label: `author:${c.slug}`, phase: 'Author', schema: NOTE_SCHEMA }),
  async (note, c) => {
    // One agent call per slot (VERIFIERS_PER_NOTE is 1), with its call id label; it must pass.
    // The slot is recorded here, by the orchestrator, never by the verifier.
    const passes = []
    for (let slot = 1; slot <= VERIFIERS_PER_NOTE; slot++) {
      const v = await agent(verifyPrompt(note, c, callIdFor(c, slot)), {
        label: `verify:${c.slug}${VERIFIERS_PER_NOTE > 1 ? ':' + slot : ''}`,
        phase: 'Verify', schema: VERDICT_SCHEMA, agentType: VERIFIER_AGENT_TYPE,
      })
      passes.push(v ? { ...v, slot } : null)
    }
    // Keep every pass in full beside the author's output: the orchestrator retains both.
    return { note, passes }
  }
)

// A verifier pass counts only for its own candidate, with consistent labels: the call id label for
// its slot, the candidate's path and stem, the sha256 of the bytes it read, judged consistent, every
// required check reported, no check false, and no refutation recorded. A PASS that names another
// file, stem or call label, or that lists any refutation, is a fail. (intake_record.py's result_verdict applies the same rule to the retained result, and also
// requires every pass to report the same sha256 and the slots to be exactly 1..N.)
function passBinds(v, c, path) {
  return Boolean(v) && Number.isInteger(v.slot) && v.call_id === callIdFor(c, v.slot) &&
    v.path === path && v.stem === c.stem && typeof v.sha256 === 'string' && /^[0-9a-f]{64}$/.test(v.sha256) &&
    v.is_consistent === true && Array.isArray(v.refutations) && v.refutations.length === 0 &&
    Boolean(v.checks) && typeof v.checks === 'object' && !Array.isArray(v.checks) && REQUIRED_CHECKS.every(k => k in v.checks) &&
    Object.values(v.checks).every(x => x === true)
}

// One entry per candidate. Identity and path come from the candidate itself, never from an
// agent's self-report; a failed author or verifier yields verdict 'fail'.
const notes = candidates.map((c, i) => {
  const r = results[i]
  const path = `${CONN}/${c.slug}.md`
  const passes = (r && r.passes) || []
  const authored = Boolean(r && r.note && r.note.path === path)
  const sameBytes = new Set(passes.map(v => v && v.sha256)).size === 1
  const slots = passes.map(v => v && v.slot)
  const labelsConsistent = Array.from({ length: VERIFIERS_PER_NOTE }, (_, i) => i + 1).every(s => slots.filter(x => x === s).length === 1)
  const verdict = authored && passes.length === VERIFIERS_PER_NOTE && labelsConsistent && sameBytes && passes.every(v => passBinds(v, c, path)) ? 'pass' : 'fail'
  // The detailed result the orchestrator retains (schema comparative-intake-verifier-result/v1).
  const result = {
    schema: 'comparative-intake-verifier-result/v1',
    candidate: { stem: c.stem, slug: c.slug, path },
    author: { path: r && r.note && r.note.path ? r.note.path : null },
    policy: { id: VERIFIER_POLICY.body.id, sha256: VERIFIER_POLICY.sha256 },
    required_checks: REQUIRED_CHECKS,
    verifiers_per_note: VERIFIERS_PER_NOTE,
    verifiers: passes.map(v => (v ? { slot: v.slot, call_id: v.call_id, stem: v.stem, path: v.path, sha256: v.sha256, is_consistent: v.is_consistent,
                                      refutations: v.refutations, checks: v.checks } : null)),
    verdict,
  }
  return { stem: c.stem, slug: c.slug, path, author: r ? r.note : null, verdict, result,
           result_path: `${RESULTS_DIR}/${c.slug}.json` }
})
// The verdicts-file entries the orchestrator saves for `intake_record.py manifest`.
const manifest_inputs = notes.map(n => ({ path: n.path, result: n.result_path }))
const fails = notes.filter(n => n.verdict === 'fail').map(n => n.result)
log(`Wave ${WAVE} done: ${notes.length} notes, ${fails.length} FAIL`)
return { wave: WAVE, notes, fails, manifest_inputs }
