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
 *  5. The script returns { wave, verdicts, fails }. The ORCHESTRATOR (main loop)
 *     then reviews verdicts, fixes any is_consistent:false, and does all the
 *     irreversible/human-gated steps (below) — those stay OUT of this workflow.
 *
 * Runtime globals injected by the Workflow harness (do NOT import): `agent`,
 * `pipeline`, `log`. Author agents OMIT agentType (they need Write); verifiers
 * use agentType:'Explore' (read-only, re-read file on disk).
 *
 * ---------------------------------------------------------------------------
 * ORCHESTRATOR MAIN-LOOP RESPONSIBILITIES — keep these OUT of the workflow
 * ---------------------------------------------------------------------------
 * The workflow only authors + verifies (reversible, agent-safe). Everything
 * human-gated or irreversible stays in the orchestrating session's main loop:
 *   - Step-0 verification + reviewing every returned verdict; spot-read 1–2 notes/wave.
 *   - Fix any is_consistent:false BEFORE proceeding (re-author or hand-patch).
 *   - Orchestrator-side grep-verify at commit time (do NOT fully trust agent verdicts).
 *   - VALIDATOR pre/post SNAPSHOT (capture EXACT count before + after the wave; must hold).
 *   - SIBLING-SHA check (sibling canon repos' HEADs frozen across the wave; re-check post-commit).
 *   - Explicit-path `git add <files>` (NEVER `git add -A`); ONE commit per wave.
 *   - PUSH-CONFIRM gate (operator authorizes the push; never auto-push canon).
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
 * See also (method references):
 *   ~/.claude/projects/-Users-darrenzal-projects-spore/memory/feedback_workflow_orchestrated_intake.md
 *   docs/research/connections/sahely-bundle-alpha-retrospective.md
 * ===========================================================================*/

// FILL PER INTAKE: workflow identity. Rename per intake program + wave.
export const meta = {
  name: '<intake-name>-waveN',               // FILL PER INTAKE: e.g. 'sahely-phase3-wave'
  description: '<intake> wave — author + adversarially verify N <artifact-kind>', // FILL PER INTAKE
  phases: [
    { title: 'Author', detail: 'one author agent per candidate writes a single artifact file' },
    { title: 'Verify', detail: 'read-only skeptic refutes citation/discipline violations against the file on disk' },
  ],
}

// FILL PER INTAKE: repo + path scheme. REPO is the canon-bearing repo root;
// EXT is where per-candidate evidence/extraction records live; CONN (or your
// equivalent) is where authored artifacts are written.
const REPO = '<ABSOLUTE_PATH_TO_REPO>'                                   // FILL PER INTAKE
const EXT  = REPO + '/<path/to/evidence-extraction-records>'            // FILL PER INTAKE
const CONN = REPO + '/<path/to/output-artifacts-dir>'                   // FILL PER INTAKE

// VERIFIERS_PER_NOTE — how many independent skeptic passes per artifact.
const VERIFIERS_PER_NOTE = 1   // set 2 for canon-critical waves; run both, require both pass

// ---------------------------------------------------------------------------
// CONSISTENCY_MAP — the SHARED resolved canon-citation table handed to every
// author AND every verifier. This is the load-bearing input: it tells agents to
// cite the RESOLVED canon state (not stale "pending"/"admit-candidate" framing).
// The Sahely arc's 2 caught FAILs were both stale-citation drift this map exists
// to prevent. Keep it specific: theme -> exact ADR/slug/doctrine, with object-
// class distinctions (doctrine vs glossary-slug vs shape-of).
// ---------------------------------------------------------------------------
const CONSISTENCY_MAP = `
// FILL PER INTAKE: the resolved canon-citation map for THIS intake's canon state.
RESOLVED CANON-CITATION CONSISTENCY MAP (state the concepts-yaml version, doctrine count, ADR ceiling).
Cite the RESOLVED state — NOT any "pending DECISION-BRIEF" / "admit-candidate" framing.
Map each theme to its exact resolved citation, preserving object-class:
- <theme A keywords>  -> cite <ADR-XXXX> (<doc_id>); slug(s): <slug> (note shape-of vs equivalent-to if relevant).
- <theme B keywords>  -> cite <ADR-YYYY>; doctrine: <doctrine-name> (a CROSS-CUTTING DOCTRINE, NOT a glossary slug).
- <theme C keywords>  -> cite <ADR-ZZZZ>; slug: <slug> (a DERIVED-GLOSSARY SLUG, NOT a doctrine).
- <decline theme>     -> framing-note-only ONLY; cite the DECLINE-with-triggers disposition. DO NOT propose admission.
- Other already-canonical resonances: <theme> -> <ADR/slug>; <theme> -> <ADR/slug>.
`

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
const GATES = `
// FILL PER INTAKE: the discipline gates for THIS intake (tune to its canon discipline).
DISCIPLINE GATES (load-bearing):
- framing-note-only DEFAULT. You are NOT admitting anything. If you find genuinely NEW canon-pressure, do NOT admit it — set new_pressure to a one-line description and keep the note framing-note-only.
- Single-source rigor: cross-item recurrence within one author corpus is NOT independent evidence. Do not overclaim convergence.
- Grep-verify EVERY relates_to: doc_id (must exist as 'doc_id:') and EVERY concepts: slug (must exist in the concepts registry) BEFORE writing. Use Bash grep.
- No 'depends_on:' anywhere. No edits outside your single artifact file. No git, no send tools, no KOI writes.
- Quotes must be verbatim from the extraction record; cite the RID exactly as the extraction record gives it.
`

function authorPrompt(c) {
  return `You are authoring ONE learning-field bridge note (framing-note-only) for one candidate.

WORKING REPO: ${REPO}
EVIDENCE (read this fully first): ${EXT}/${c.stem}.md
OUTPUT FILE (Write exactly here): ${CONN}/${c.slug}.md
${c.repost ? 'NOTE: this is a REPOST of ' + c.repost + ' — use REPOSTED attribution in §1; attribute concept/philosophical claims to the ORIGINAL author, not the curator.' : ''}

STEPS:
1. Read the evidence extraction record in full. Note its RID, the date, title, and the strongest verbatim claims.
2. ${CONSISTENCY_MAP}
3. ${SHAPE}
4. ${GATES}
5. Before writing, grep-verify your chosen relates_to: doc_ids and concepts: slugs (drop anything that does not resolve).
6. Write the artifact to the OUTPUT FILE.
7. Return: path, slug, title, cited_adrs (e.g. ["ADR-XXXX","ADR-YYYY"]), cited_slugs, all_framing_note_only (true unless a decline-with-trigger row was used), new_pressure (null unless genuinely-new canon-pressure surfaced).

Keep it tight and honest. Do not invent claims not in the extraction record.`
}

function verifyPrompt(note, c) {
  return `You are a SKEPTICAL read-only verifier. Default to is_consistent:false; only return true if EVERY check passes against the file on disk.

FILE: ${note && note.path ? note.path : CONN + '/' + c.slug + '.md'}
EVIDENCE: ${EXT}/${c.stem}.md
CONCEPTS AUTHORITY: ${REPO}/<path/to/concepts-registry>     // FILL PER INTAKE
ADR AUTHORITY: ${REPO}/<path/to/canon-decisions>/           // FILL PER INTAKE

CHECKS (run Bash grep against the actual file; refute precisely with quoted offenders):
1. cites_correct_resolved_adrs — wherever the note engages a mapped theme, it cites the RESOLVED ADR per the map below, NOT a "pending DECISION-BRIEF"/"admit-candidate" framing; object-classes (doctrine vs slug vs shape-of) are preserved.
   ${CONSISTENCY_MAP}
2. no_depends_on — the frontmatter has NO 'depends_on:' field.
3. all_relates_to_resolve — every relates_to: value exists as a 'doc_id:' somewhere under ${REPO} (grep each).
4. all_concept_slugs_resolve — every concepts: value appears in the concepts registry (grep each).
5. framing_note_only_held — the §3 disposition TABLE ROWS are framing-note-only (or decline-with-trigger); NO 'admit-candidate' used as an actual row disposition (the word may appear in a legend/tally — that is fine).
6. no_inline_admission — the note does not claim to admit/modify canon; it stays descriptive.

Also spot-grep 1–2 quoted fragments from §2 against the evidence file.

Each refutation MUST be an object: { check, quoted_offender, why } — name the failing check, paste the exact offending text from the file, and say why it fails.

Return: stem="${c.stem}", path, is_consistent, refutations (every failure as {check, quoted_offender, why}), checks{...all six booleans...}.`
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

// VERDICT schema — refutations are STRUCTURED: every failure must name the
// check, quote the offending text, and explain why. This forces the skeptic to
// produce actionable, grep-traceable findings (not vague disagreement).
const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    stem: { type: 'string' }, path: { type: 'string' },
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
  required: ['stem', 'path', 'is_consistent', 'refutations', 'checks'],
}

const WAVE = 1   // FILL PER INTAKE: bump per wave.

// WARNING: args.candidates arrives undefined with scriptPath; embed candidates here.
// FILL PER INTAKE: EMBED candidates HERE (friction #2 — NOT via args).
// Each entry: { stem (evidence-file basename, no extension), slug (output-file
// basename, no extension), repost (null OR "Original Author (Work, Year)") }.
const candidates = [
  // { stem: '<evidence-file-stem>', slug: '<output-slug>', repost: null },
  // { stem: '<evidence-file-stem>', slug: '<output-slug>', repost: '<Original Author (Work, Year)>' },
]

log(`Wave ${WAVE}: ${candidates.length} artifacts (author -> skeptic verify; ${VERIFIERS_PER_NOTE} verifier(s)/note)`)

const verdicts = await pipeline(candidates,
  (c) => agent(authorPrompt(c), { label: `author:${c.slug}`, phase: 'Author', schema: NOTE_SCHEMA }),
  async (note, c) => {
    // Run VERIFIERS_PER_NOTE independent skeptic passes; require ALL to pass.
    const passes = []
    for (let i = 0; i < VERIFIERS_PER_NOTE; i++) {
      passes.push(await agent(verifyPrompt(note, c), {
        label: `verify:${c.slug}${VERIFIERS_PER_NOTE > 1 ? ':' + (i + 1) : ''}`,
        phase: 'Verify', schema: VERDICT_SCHEMA, agentType: 'Explore',
      }))
    }
    if (passes.length === 1) return passes[0]
    // Combine: consistent only if every verifier says so; union all refutations.
    const is_consistent = passes.every(v => v && v.is_consistent)
    const refutations = passes.flatMap(v => (v && v.refutations) || [])
    return { ...passes[0], is_consistent, refutations }
  }
)

const fails = verdicts.filter(Boolean).filter(v => !v.is_consistent)
log(`Wave ${WAVE} done: ${verdicts.filter(Boolean).length} verdicts, ${fails.length} FAIL`)
return { wave: WAVE, verdicts, fails }
