You are an ADVERSARIAL reviewer of a Spore canon **foundational-reframing PROPOSAL** (a governance artifact, NOT a code plan). Be skeptical; default to finding real problems; do not pad with praise. Verify claims against the actual files rather than trusting the proposal's self-description.

Read these files in the current workspace (/Users/darrenzal/projects/spore):
- `docs/research/planning/reframing/reframing-spore-identity.md` — THE PROPOSAL UNDER REVIEW.
- `README.md` lines 1–20 and `docs/project-vision.md` lines 1–14 — to INDEPENDENTLY VERIFY the proposal's quotations of the CURRENT identity lines (do not trust the proposal's quotes; read the source).
- `docs/research/synthesis/coherence-without-collapse-and-its-projections.md` lines 80–98 (the §7 "honest ledger") — the basis the proposal cites for "earned vs parked."
- The governance rules live in `docs/research/planning/foundational-reframing-protocol-v1.md`; the key rules to check are summarized here so you need not read the whole file:
  - FR-3: required frontmatter (doc_id; doc_kind: proposal; status; covers; proposal_kind; author; approver; opened-on; eligible-on; consultation_artifact; authorized_adrs).
  - FR-4: required body sections, IN ORDER: Problem; Proposed reframing; Why ADR scope is insufficient; Source bundle; Cross-repo consultation; Execution gate; ADR authorization plan; Rollback and reversibility; Execution record; Open questions. (Plus "Intended audience and prerequisites" when a governance surface is re-framed.)
  - FR-5: each source entry begins `- source:` and names kind / publicly-verifiable / excerpt / contributes.
  - FR-8: at least 5 sources, at least 2 publicly-verifiable.
  - FR-10: "publicly-verifiable" = open-access / Wayback / committed-to-repo; working-tree-only drafts do NOT count.
  - FR-13 / FR-20: ordinary reframing = 7-day cooling-off; the 14-day double-cooling applies ONLY to meta-corpus surfaces (canon-review-protocol, learning-field-intake-protocol, concepts-p2p-wiki, validate_spec_dag.py, moratorium-mechanics, bridge-note-format-convention, learning-field-structure, corpus-foundational-review-methodology). project-vision.md is NOT on that list.
  - FR-18 / FR-19: if a proposal introduces or renames a frozen-vocab slug it needs explicit vocab handling; if it introduces none, those rules don't bind.
  - FR-2: changes that "alter a layer's identity" default to foundational-reframing, NOT down to canon-review.

Review on these axes; report only real findings:

1. **FR-compliance.** Any missing/malformed frontmatter field, missing or misordered FR-4 section, source-bundle format violation, evidence-bar shortfall, or wrong cooling-off window. (Note: `covers: []` is intentional — this is a "later finding" per FR-1, not a Phase-5 finding. Judge whether the proposal handles that honestly.)

2. **Citation accuracy — verify against the actual files.** Do the proposal's quoted CURRENT lines (it claims README.md:7 and project-vision.md:10) and its source-bundle excerpts / line-refs match what is actually in those files? Flag any drift, wrong line number, or misquote. This is the highest-value check — be precise.

3. **The core judgment call.** Is this GENUINELY foundational-reframing (FR-1 criterion 5 "changes the definition of canon scope" / FR-2 "alters a layer's identity"), or is it over-ceremony for what is really a doc-local wording edit that an ordinary canon-review ADR should handle? The proposal calls itself "the narrowest canon-scope sub-case" and provides an honest off-ramp. Is that honest, or is it (a) inflating a wording tweak into ceremony-theater, or (b) under-claiming a real frame change? Argue the STRONGEST case for "this should just be a canon-review ADR," then say whether it survives.

4. **The reframe content itself.** Is *"a coordination grammar … one that holds local sovereignty and global coherence at once, across scales and scopes"* actually more accurate and better than the current *"an infrastructure for collective agency — a common grammar for plural, sovereign coordination across scales and scopes"*? What is LOST by demoting "infrastructure for collective agency" out of the lead (does the agency framing carry something the grammar framing drops)? Critically: is *"holds local sovereignty and global coherence at once"* a claim the canon's OWN universality-discipline (ADR-0031/0032/0044, "at each scale Spore has reached") would flag as overreach — does "at once / across scales and scopes" promise more than a grammar actually delivers?

5. **Scope + constraints.** Is the 3-edit-site set right (README:7 tagline, README:13 "Why Spore?" harmonization, project-vision:10 identity sentence)? Is the README:13 harmonization legitimate, or scope-creep beyond an "identity" reframe? Are the five binding constraints sufficient, or is one missing?

6. **Anything missing / any under-addressed risk.**

OUTPUT FORMAT — a prioritized, terse list:
- **BLOCKERS** — must fix before this proposal is committed (before cooling-off starts). Each with a quoted location + a concrete fix.
- **SHOULD-FIX** — same shape.
- **NITS** — same shape.
If an axis is genuinely clean, say so in one line. Do not invent problems to seem thorough.
