export const meta = {
  name: 'sahely-phase3-wave6-capstone',
  description: 'Phase 3 Wave 6 — author the corpus-level capstone bridge note + verify coverage',
  phases: [
    { title: 'Synthesize', detail: 'read representative notes + index; author the capstone' },
    { title: 'Verify', detail: 'check the capstone indexes every Phase-3 note + holds discipline' },
  ],
}

const REPO = '/Users/darrenzal/projects/spore'
const CONN = REPO + '/docs/research/connections'
const OUT = CONN + '/sahely-corpus-intake-capstone-2026-05.md'

const INDEX = `
PHASE-3 NOTES AUTHORED (39 = 28 Gmail-known + 11 foundation-era), to be indexed in the capstone:
Wave 1 viability-grammar core: sahely-rationality-after-collapse, sahely-life-as-viability-under-constraint, sahely-learning-to-read-what-keeps-us-alive, sahely-single-grammar-across-scale, sahely-self-as-viability-stack, sahely-grammar-of-viability, sahely-unifying-grammar-of-viability.
Wave 2 autopoiesis-medicine/biology-of-love/care: sahely-bringing-forth-more-beautiful-world, sahely-biology-of-love-grammar, sahely-biology-of-love-to-governance, sahely-emotioning-and-living-coherence, sahely-natural-drift-to-living-coherence, sahely-life-coherent-civilization, sahely-life-coherent-framework-health.
Wave 3 political-economy/civil-commons: sahely-life-value-onto-axiology-civil-commons, sahely-civil-commons-paradigm, sahely-philosophy-and-world-problems [repost McMurtry], sahely-reclaiming-our-future, sahely-pathological-logic-military-paradigm, sahely-understanding-war-mcmurtry [repost McMurtry], sahely-economy-answerable-to-life.
Wave 4 peace-civilization/violence-grammar: sahely-grammar-of-violence, sahely-global-projections-galtung [repost Galtung], sahely-metanoia-historical-jesus, sahely-civil-commons-in-practice, sahely-beyond-gdp-to-life-coherent-progress, sahely-life-coherent-discernment-and-repair, sahely-when-power-outruns-law.
Wave 5 foundation-era 2017-2018 (HTML-fetched): sahely-credit-creation-system [orig], sahely-self-domestication-of-humans [orig], sahely-education-and-the-market-model [repost McMurtry 1991], sahely-education-biological-matrix [repost Maturana & Dávila 2006], sahely-primary-axiom-of-value [orig], sahely-eco-genocidal-system-violence [orig], sahely-xin-heart-mind [orig], sahely-learning-loops [repost Mulgan], sahely-end-of-kings [repost Sustainable Human/Johnstone], sahely-knowledge-not-life-coherent [repost McMurtry], sahely-failure-of-economics [repost Mitchell].

PHASE-2 ANCHOR NOTES (12) already in the corpus, also indexed: sahely-maturana-viability-grammar, sahely-biology-of-living-coordination, sahely-architecture-of-viability, sahely-keeping-life-coherence-alive, sahely-entanglement-to-governance (sheaf anchor), sahely-ethics-as-science-of-viability, sahely-toward-life-coherent-peace, sahely-coherence-to-viability, sahely-systems-immunology, sahely-money-growth-to-life-coherence, sahely-life-value-manifesto, sahely-medicine-of-living-coherence. Plus the Phase-2-closure cross-repo bridge sahely-ruddick-civil-commons-bridge.
`

const BUNDLE_ALPHA = `
BUNDLE α OUTCOMES (the resolved canon-pressure the capstone reconciles the corpus against; concepts-yaml v24; 4 cross-cutting doctrines; 40 canon-decisions):
- ADR-0085 trap-shape-vocab-and-recursive-audit-method -> slugs golden-calf-trap (shape-of ADR-0048 substitution-trap, NOT equivalent-to) + recursive-audit-method.
- ADR-0086 life-value-doctrine = 4th cross-cutting doctrine (canon-object-class expansion 3->4; McMurtry life-value substrate).
- ADR-0087 civil-commons derived-glossary slug (alias civil-commons-substrate; NOT a doctrine).
- ADR-0088 care-cluster scope-condition on ADR-0045 care-commoning (Maturana biology-of-love substrate).
- ADR-0089 margin-as-reserve scope-condition on F9 maintenance-economics.
- ADR-0090 perception-as-power scope-condition on F4 representation-authority.
DECLINED-with-triggers (carry into the capstone parking list): C7 sheaf/graph-substrate (2 full clusters Sahely+Hale; 6 re-opening triggers; future-ADR-shape graph-substrate-of-canon); D1 wu-wei (single Daoist tradition); D2 E7-viability-scalar (single-source future-state formalism).
`

const synthesizePrompt = `You are authoring the CORPUS-LEVEL CAPSTONE bridge note that closes Phase 3 of the Sahely (bsahely.com) learning-field intake.

WORKING REPO: ${REPO}
OUTPUT FILE (Write exactly here): ${OUT}

CONTEXT YOU ALREADY HAVE:
${INDEX}
${BUNDLE_ALPHA}

GROUNDING READS (read these few for tone + substance; do NOT read all 53):
- ${CONN}/sahely-maturana-viability-grammar.md (the Phase-2 anchor #1 — the grammar-comparison frame).
- ${CONN}/sahely-single-grammar-across-scale.md (a Phase-3 viability note with the sheaf decline-with-trigger).
- ${CONN}/sahely-biology-of-love-grammar.md (a Phase-3 care/life-value note).
- ${CONN}/sahely-credit-creation-system.md and ${CONN}/sahely-education-biological-matrix.md (foundation-era: one original, one repost).
- ${REPO}/tmp/sahely-corpus-canon-pressure-decision-brief-2026-05-22.md (skim §3 summary table for the Phase-2 dispositions and how Bundle α resolved them).

WRITE THE CAPSTONE with this frontmatter:
  doc_id: spore.connection.sahely-corpus-intake-capstone-2026-05
  doc_kind: connection
  status: active
  title: "Sahely (bsahely.com) Corpus Intake — Phase 3 Capstone (2026-05)"
  authored: 2026-05-30
  relates_to: [grep-verify each; include spore.project-vision + the Bundle-α ADR doc_ids: spore.canon-decision.trap-shape-vocab-and-recursive-audit-method, spore.canon-decision.life-value-doctrine-fourth-cross-cutting-doctrine, spore.canon-decision.civil-commons-derived-glossary-slug-admission, spore.canon-decision.care-cluster-scope-condition-adr-0045, spore.canon-decision.margin-as-reserve-scope-condition-f9, spore.canon-decision.perception-as-power-scope-condition-f4 + spore.connection.sahely-bundle-alpha-retrospective]
  concepts: [grep-verify each in docs/research/concepts-p2p-wiki.yaml; e.g. golden-calf-trap, recursive-audit-method, life-value-doctrine, civil-commons]
  intake_phase: 3
  NO 'depends_on:' field.

BODY — cover ALL of these sections:
  # title + caveat (descriptive Layer-1.5 corpus synthesis; admits nothing; single-source rigor).
  ## 1. Corpus shape + era distinction — the 2011-2026 corpus; the sharp era break: 2017-2018 foundation era (human-authored or curated/reposted; pre-AI) vs the Dec-2022+ AI-co-authored white-paper explosion (ChatGPT-5.x / Gemini / NotebookLM). State counts: Phase-1 103/104 extraction; Phase-2 12 anchors; Phase-3 39 notes (28 Gmail-known + 11 foundation-era); 53 Sahely connection notes total.
  ## 2. Framework-overlap map vs Spore canon — WITH the Bundle-α slugs as concrete reference points (this is the v21->v24 reconciliation the frozen Phase-2 anchors could not carry): substitution-trap territory -> ADR-0085 golden-calf-trap+recursive-audit-method; McMurtry life-value -> ADR-0086 life-value-doctrine (4th doctrine); civil-commons -> ADR-0087 slug; care/biology-of-love -> ADR-0088; margin/reserve -> ADR-0089; perception/Galtung -> ADR-0090; autopoiesis-enactive triad -> ADR-0062/0063/0064; persistence≠legitimacy -> structural-legitimacy ADR-0042.
  ## 3. AI-co-authorship epistemic status — honest rigor about ChatGPT-5.x/Gemini/NotebookLM contribution to the recent corpus; what that means for treating the corpus as evidence; how the foundation-era (pre-AI) posts anchor the substrate the AI-era papers elaborate.
  ## 4. Recurrence-vs-evidence-density discipline — per project_johar_intake_status.md: Sahely cross-post recurrence is NOT independent evidence; the corpus is one author's single (AI-amplified) voice; this is why Bundle α did honest cross-tradition cluster-counting against NON-Sahely clusters, not Sahely-recurrence.
  ## 5. Parking list — declines-with-triggers preserved: C7 sheaf/graph-substrate-of-canon (6 triggers); D1 wu-wei; D2 E7-viability-scalar. Note none fired during Phase 3. Note that Phase 3 surfaced ZERO new canon-pressure beyond Bundle α (all 39 notes framing-note-only).
  ## 6. Full index — a grouped list of all 39 Phase-3 notes (by wave/cluster) + the 12 Phase-2 anchors + the cross-repo bridge, each as a doc_id reference. Mark the reposts with their original author.
  ## 7. Summary + forward state.

DISCIPLINE: framing-note-only; admit nothing. Grep-verify every relates_to doc_id + concepts slug before writing. No git, no send, no KOI writes.
Return: path, slug, sections_present (list), phase3_notes_indexed (integer count of distinct Phase-3 note slugs you indexed), all_framing_note_only (bool), new_pressure (null expected).`

function verifyPrompt(note) {
  return `Skeptical read-only verifier for the Sahely Phase-3 CAPSTONE. Default is_consistent:false; true only if all checks pass against the file on disk.
FILE: ${note && note.path ? note.path : OUT}
CHECKS (Bash grep against the file):
1. indexes_all_39 — the capstone §6 index references all 39 Phase-3 note slugs (count distinct 'sahely-' connection slugs in the index that are Phase-3; must be >= 39). List any missing.
2. covers_required_sections — §1 era-distinction, §2 framework-overlap-with-Bundle-α-slugs, §3 AI-co-authorship, §4 recurrence-vs-evidence, §5 parking-list (C7 sheaf + D1 wu-wei + D2 E7), §6 index, §7 summary all present.
3. cites_bundle_alpha_correctly — life-value-doctrine as a DOCTRINE; civil-commons as a SLUG; golden-calf-trap shape-of (not equivalent-to) substitution-trap; care -> ADR-0088.
4. no_depends_on + all_relates_to_resolve + all_concept_slugs_in_v24 (grep each).
5. framing_note_only_held + no_inline_admission — admits nothing.
Return: stem="capstone", path, is_consistent, refutations (with quoted offenders + which check), checks{indexes_all_39, covers_required_sections, cites_bundle_alpha_correctly, no_depends_on, all_relates_to_resolve, all_concept_slugs_in_v24, framing_note_only_held, no_inline_admission}.`
}

const NOTE_SCHEMA = {
  type: 'object',
  properties: {
    path: { type: 'string' }, slug: { type: 'string' },
    sections_present: { type: 'array', items: { type: 'string' } },
    phase3_notes_indexed: { type: 'integer' },
    all_framing_note_only: { type: 'boolean' }, new_pressure: { type: ['string', 'null'] },
  },
  required: ['path', 'slug', 'phase3_notes_indexed', 'all_framing_note_only', 'new_pressure'],
}
const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    stem: { type: 'string' }, path: { type: 'string' }, is_consistent: { type: 'boolean' },
    refutations: { type: 'array', items: { type: 'string' } },
    checks: {
      type: 'object',
      properties: {
        indexes_all_39: { type: 'boolean' }, covers_required_sections: { type: 'boolean' },
        cites_bundle_alpha_correctly: { type: 'boolean' }, no_depends_on: { type: 'boolean' },
        all_relates_to_resolve: { type: 'boolean' }, all_concept_slugs_in_v24: { type: 'boolean' },
        framing_note_only_held: { type: 'boolean' }, no_inline_admission: { type: 'boolean' },
      },
      required: ['indexes_all_39', 'covers_required_sections', 'cites_bundle_alpha_correctly', 'no_depends_on', 'all_relates_to_resolve', 'all_concept_slugs_in_v24', 'framing_note_only_held', 'no_inline_admission'],
    },
  },
  required: ['stem', 'path', 'is_consistent', 'refutations', 'checks'],
}

log('Wave 6: capstone synthesis + verify')
const note = await agent(synthesizePrompt, { label: 'capstone:author', phase: 'Synthesize', schema: NOTE_SCHEMA })
const verdict = await agent(verifyPrompt(note), { label: 'capstone:verify', phase: 'Verify', schema: VERDICT_SCHEMA, agentType: 'Explore' })
return { note, verdict }
