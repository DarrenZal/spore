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
 * use the registered read-only skeptic subagent `darren-workflow:skeptic`
 * (VERIFIER_AGENT_TYPE below), falling back to agentType:'Explore' if the agent
 * registry hasn't reloaded since the type was added (manually-added subagents
 * need a session restart to register). The completeness-audit pattern's meta-
 * auditor is the paired `darren-workflow:skeptic-of-skeptics` subagent.
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
const REPO = '<ABSOLUTE_PATH_TO_REPO>'                                   // FILL PER INTAKE
const EXT  = REPO + '/<path/to/evidence-extraction-records>'            // FILL PER INTAKE
const CONN = REPO + '/<path/to/output-artifacts-dir>'                   // FILL PER INTAKE

// CANON AUTHORITY paths — the live sources the Canon-facts agent machine-reads
// (and the verifier greps). Keeping these as the single source of truth removes
// the "shared-ground-truth shares its errors" risk: the FACTS (yaml version,
// slug list, doctrine list, ADR doc_ids) are derived from live canon at run-time,
// so a hand-transcription error in the authored map below cannot go unchecked.
const CONCEPTS_YAML      = REPO + '/<path/to/concepts-registry.yaml>'   // FILL PER INTAKE
const CANON_DECISIONS_DIR = REPO + '/<path/to/canon-decisions>'         // FILL PER INTAKE

// VERIFIERS_PER_NOTE — how many independent skeptic passes per artifact.
const VERIFIERS_PER_NOTE = 1   // set 2 for canon-critical waves; run both, require both pass

// VERIFIER_AGENT_TYPE — the registered read-only skeptic subagent (darren-workflow
// plugin: agents/skeptic.md — default-FAIL, re-reads the file on disk, structured
// {check, quoted_offender, why} refutations). Falls back to 'Explore' if the registry
// has not loaded the type (read-only either way, so the fallback is behaviorally close).
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
CONCEPTS AUTHORITY: ${CONCEPTS_YAML}
ADR AUTHORITY: ${CANON_DECISIONS_DIR}

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
const canonFactsPrompt = `You are a read-only canon-facts extractor. Machine-read the LIVE canon and return the authoritative current state so downstream authors cannot cite stale doc_ids/slugs/version. Use Bash grep.
- Concepts registry: ${CONCEPTS_YAML} — extract the version marker (e.g. a '# version: vNN' line) and EVERY concept slug, and the list of cross-cutting doctrine names.
- Canon-decisions: ${CANON_DECISIONS_DIR}/*.md — extract each relevant ADR's id (NNNN), its 'doc_id:' frontmatter value, and its title. (For a large set, focus on the ADRs the THIS-intake authored map below references + the most recent admissions.)
Return: yaml_version, slugs[], doctrines[], adrs[{id, doc_id, title}], and facts_block — a compact prose block listing the version, the doctrine names, and the exact ADR doc_ids (so an author can copy them verbatim). Do NOT invent; only report what is on disk. If a path is a FILL-PER-INTAKE placeholder (contains '<'), return empty arrays + facts_block:"(canon paths not configured)".`

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

const verdicts = await pipeline(candidates,
  (c) => agent(authorPrompt(c), { label: `author:${c.slug}`, phase: 'Author', schema: NOTE_SCHEMA }),
  async (note, c) => {
    // Run VERIFIERS_PER_NOTE independent skeptic passes; require ALL to pass.
    const passes = []
    for (let i = 0; i < VERIFIERS_PER_NOTE; i++) {
      passes.push(await agent(verifyPrompt(note, c), {
        label: `verify:${c.slug}${VERIFIERS_PER_NOTE > 1 ? ':' + (i + 1) : ''}`,
        phase: 'Verify', schema: VERDICT_SCHEMA, agentType: VERIFIER_AGENT_TYPE,
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
