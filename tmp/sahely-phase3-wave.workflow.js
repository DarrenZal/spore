export const meta = {
  name: 'sahely-phase3-wave',
  description: 'Phase 3 wave — author + adversarially verify N Sahely bridge notes (framing-note-only)',
  phases: [
    { title: 'Author', detail: 'one author agent per post writes a framing-note-only bridge note' },
    { title: 'Verify', detail: 'read-only skeptic refutes citation/discipline violations against the file on disk' },
  ],
}

const REPO = '/Users/darrenzal/projects/spore'
const EXT = REPO + '/docs/research/corpus-review/originals/sahely-extractions'
const CONN = REPO + '/docs/research/connections'

const CONSISTENCY_MAP = `
POST-BUNDLE-α CANON-CITATION CONSISTENCY MAP (concepts-yaml v24; 4 cross-cutting doctrines; 40 canon-decisions through ADR-0090).
Cite the RESOLVED state — NOT the Phase-2 "pending DECISION-BRIEF" framing. Map a post's themes to:
- substitution-trap / mythic-trap / corrective-capture / grammar-used-to-dominate  -> cite ADR-0085 (spore.canon-decision.trap-shape-vocab-and-recursive-audit-method); slugs: golden-calf-trap (the SHAPE-OF ADR-0048 substitution-trap, NOT equivalent-to) + recursive-audit-method.
- McMurtry life-value / UHLN / universal human life necessities / life-capacity / life-capital  -> cite ADR-0086; doctrine: life-value-doctrine (a CROSS-CUTTING DOCTRINE, the 4th, sibling to reproductive-commoning/boundary-commoning/care-commoning — NOT a glossary slug).
- civil commons (McMurtry/Ostrom/Bollier)  -> cite ADR-0087; slug: civil-commons (a DERIVED-GLOSSARY SLUG, alias civil-commons-substrate — NOT a doctrine; the doctrine is life-value-doctrine).
- care / love-as-structural-coupling / Maturana biology of love / legitimacy-of-the-other  -> cite ADR-0088 (care-cluster scope-condition on ADR-0045 care-commoning).
- margin / reserve / resilience / antifragility / slack  -> cite ADR-0089 (margin-as-reserve scope-condition on F9 maintenance-economics).
- perception-as-power / Galtung structural violence / standpoint epistemology / what-becomes-visible  -> cite ADR-0090 (perception-as-power scope-condition on F4 representation-authority).
- sheaf / cohomology / topology / Fano / octonion / E8 / mathematical-grammar substrate  -> framing-note-only ONLY; cite the C7 DECLINE-with-triggers (graph-substrate-of-canon future-ADR-shape; 6 re-opening triggers). DO NOT propose admission.
- Other resonances already-canonical: structural coupling/organism-medium -> ADR-0050 holon-irreducibility + ADR-0062 membrane-as-self-produced; languaging/emotioning -> ADR-0063 participatory-sense-making; conservation-through-change -> ADR-0046 rule-in-use; persistence≠legitimacy -> structural-legitimacy (ADR-0042); joint-commitment -> ADR-0050.
`

const SHAPE = `
BRIDGE-NOTE SHAPE (lighter than Phase 2; target ~140–220 lines). Mirror the Phase-2 template at ${CONN}/sahely-maturana-viability-grammar.md (you MAY skim it once for tone).
Frontmatter (YAML):
  doc_id: spore.connection.<slug>
  doc_kind: connection
  status: active
  title: "Sahely (<yyyy-mm-dd>) <Post Title> ↔ <Spore territory phrase>"
  authored: 2026-05-30
  relates_to:        # SOFT field — Spore doc_ids ONLY; grep-verify each exists as a 'doc_id:' under docs/ before listing.
    - spore.project-vision
    - ...
  concepts:          # SOFT field — concept slugs ONLY; grep-verify each appears in docs/research/concepts-p2p-wiki.yaml before listing.
    - ...
  external_sources:
    - rid: <use the RID EXACTLY as it appears in the extraction record>
      pdf_local: docs/research/corpus-review/originals/sahely-pdfs/<...>.pdf   # if the extraction record names one; else omit
      pages: "<the pages actually cited>"
  intake_phase: 3
NEVER use a 'depends_on:' field (HARD field — a wrong ref becomes a validator ERROR). Use relates_to: instead.
Body sections:
  # <title>
  caveat paragraph (descriptive Layer-1.5 comparative-intake artifact; honest-rigor; framing-note-only; single-source rigor statement) ;
  ## 1. Source-discipline  (artifact profile + AI-co-authorship handling; if the post is a REPOST of another author, state curator-vs-author distinction and attribute claims to the ORIGINAL author).
  ## 2. C-claims  (6–12 verbatim claims from the extraction record, each tagged [anchor: §… · <RID> · pdf-p<N> or html-section]).
  ## 3. R-claim disposition table  (target | concept | disposition | one-line). DISPOSITION = framing-note-only DEFAULT (or decline-with-trigger for sheaf/topology). NO admit-candidate; NO inline admission. Cite the resolved Bundle-α ADRs per the consistency map.
  ## 4. Substrate-resonance map  (3–5 descriptive points; cite admitted slugs/ADRs).
  ## 5. Cross-repo coherence delta  (descriptive only; no write-side recommendations).
  ## 6. Summary.
`

const GATES = `
DISCIPLINE GATES (load-bearing):
- framing-note-only DEFAULT. You are NOT admitting anything. If you find genuinely NEW canon-pressure beyond Bundle α, do NOT admit it — set new_pressure to a one-line description and keep the note framing-note-only.
- Single-source rigor: Sahely is one AI-co-authored author corpus; cross-post recurrence is NOT independent evidence. Do not overclaim convergence.
- Grep-verify EVERY relates_to: doc_id (must exist as 'doc_id:' under docs/) and EVERY concepts: slug (must exist in docs/research/concepts-p2p-wiki.yaml) BEFORE writing. Use Bash grep.
- No 'depends_on:' anywhere. No edits outside your single bridge-note file. No git, no send tools, no KOI writes.
- Quotes must be verbatim from the extraction record; cite the RID exactly as the extraction record gives it.
`

function authorPrompt(c) {
  return `You are authoring ONE Spore learning-field bridge note (Phase 3, framing-note-only) for a Bichara Sahely post.

WORKING REPO: ${REPO}
EVIDENCE (read this fully first): ${EXT}/${c.stem}.md
OUTPUT FILE (Write exactly here): ${CONN}/${c.slug}.md
${c.repost ? 'NOTE: this post is a REPOST of ' + c.repost + ' — use REPOSTED attribution in §1; attribute philosophical/concept claims to the original author, not Sahely.' : ''}

STEPS:
1. Read the evidence extraction record in full. Note its RID, the post date, title, and the strongest verbatim claims.
2. ${CONSISTENCY_MAP}
3. ${SHAPE}
4. ${GATES}
5. Before writing, grep-verify your chosen relates_to: doc_ids and concepts: slugs (drop anything that does not resolve).
6. Write the bridge note to the OUTPUT FILE.
7. Return: path, slug, title, cited_adrs (e.g. ["ADR-0085","ADR-0088"]), cited_slugs, all_framing_note_only (true unless you used decline-with-trigger for sheaf), new_pressure (null unless genuinely-new canon-pressure surfaced).

Keep it tight and honest. Do not invent claims not in the extraction record.`
}

function verifyPrompt(note, c) {
  return `You are a SKEPTICAL read-only verifier. Default to is_consistent:false; only return true if EVERY check passes against the file on disk.

FILE: ${note && note.path ? note.path : CONN + '/' + c.slug + '.md'}
EVIDENCE: ${EXT}/${c.stem}.md
CONCEPTS AUTHORITY: ${REPO}/docs/research/concepts-p2p-wiki.yaml (v24)
ADR AUTHORITY: ${REPO}/docs/research/canon-decisions/

CHECKS (run Bash grep against the actual file; refute precisely with quoted offenders):
1. cites_correct_bundle_alpha_adrs — wherever the note engages substitution-trap/life-value/civil-commons/care/margin/perception themes, it cites the RESOLVED Bundle-α ADR (0085/0086/0087/0088/0089/0090) per the map below, NOT a "pending DECISION-BRIEF"/"admit-candidate" framing. life-value-doctrine cited as a DOCTRINE; civil-commons as a SLUG; golden-calf-trap as shape-of (not equivalent-to) substitution-trap.
   ${CONSISTENCY_MAP}
2. no_depends_on — the frontmatter has NO 'depends_on:' field.
3. all_relates_to_resolve — every relates_to: value exists as a 'doc_id:' somewhere under ${REPO}/docs (grep each).
4. all_concept_slugs_in_v24 — every concepts: value appears in ${REPO}/docs/research/concepts-p2p-wiki.yaml (grep each).
5. framing_note_only_held — the §3 disposition TABLE ROWS are framing-note-only (or decline-with-trigger for sheaf); NO 'admit-candidate' used as an actual row disposition (the word may appear in the legend/tally — that is fine).
6. no_inline_admission — the note does not claim to admit/modify canon; it stays descriptive Layer-1.5.

Also spot-grep 1–2 quoted fragments from §2 against the evidence file.

Return: stem="${c.stem}", path, is_consistent, refutations (every failure with quoted offending text + which check), checks{...all six booleans...}.`
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
const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    stem: { type: 'string' }, path: { type: 'string' },
    is_consistent: { type: 'boolean' },
    refutations: { type: 'array', items: { type: 'string' } },
    checks: {
      type: 'object',
      properties: {
        cites_correct_bundle_alpha_adrs: { type: 'boolean' }, no_depends_on: { type: 'boolean' },
        all_relates_to_resolve: { type: 'boolean' }, all_concept_slugs_in_v24: { type: 'boolean' },
        framing_note_only_held: { type: 'boolean' }, no_inline_admission: { type: 'boolean' },
      },
      required: ['cites_correct_bundle_alpha_adrs', 'no_depends_on', 'all_relates_to_resolve', 'all_concept_slugs_in_v24', 'framing_note_only_held', 'no_inline_admission'],
    },
  },
  required: ['stem', 'path', 'is_consistent', 'refutations', 'checks'],
}

const WAVE = 4
const candidates = [
  { stem: '2026-02-24-the-grammar-of-violence-structural-drivers-of-systemic-harm-and-pathways-to', slug: 'sahely-grammar-of-violence', repost: null },
  { stem: '2026-02-28-global-projections-of-deep-rooted-u-s-pathologies-1996-johan-galtung-noteboo', slug: 'sahely-global-projections-galtung', repost: 'Johan Galtung (Global Projections of Deep-Rooted U.S. Pathologies, 1996)' },
  { stem: '2026-03-12-metanoia-and-the-historical-jesus-inner-transformation-civilizational', slug: 'sahely-metanoia-historical-jesus', repost: null },
  { stem: '2026-05-08-civil-commons-in-practice-comparative-cases-water-health-education-ecology-governance', slug: 'sahely-civil-commons-in-practice', repost: null },
  { stem: '2026-05-13-from-beyond-gdp-to-life-coherent-progress-re-grounding-progress-wealth-peace-efficiency-governance', slug: 'sahely-beyond-gdp-to-life-coherent-progress', repost: null },
  { stem: '2026-05-16-life-coherent-discernment-and-repair-re-grounding-spirituality-religion-peace-and-geopolitical-conflict', slug: 'sahely-life-coherent-discernment-and-repair', repost: null },
  { stem: '2026-01-04-when-power-outruns-law-venezuela-the-caribbean-and-the-future-of-a-rules-based', slug: 'sahely-when-power-outruns-law', repost: null },
]
log(`Wave ${WAVE}: ${candidates.length} bridge notes (author -> skeptic verify)`)

const verdicts = await pipeline(candidates,
  (c) => agent(authorPrompt(c), { label: `author:${c.slug}`, phase: 'Author', schema: NOTE_SCHEMA }),
  (note, c) => agent(verifyPrompt(note, c), { label: `verify:${c.slug}`, phase: 'Verify', schema: VERDICT_SCHEMA, agentType: 'Explore' })
)

const fails = verdicts.filter(Boolean).filter(v => !v.is_consistent)
log(`Wave ${WAVE} done: ${verdicts.filter(Boolean).length} verdicts, ${fails.length} FAIL`)
return { wave: WAVE, verdicts, fails }
