---
doc_id: spore.connection.wiki-intake-canon-review-retrospective
doc_kind: research
research_subkind: retrospective
status: draft
disposition: clarify existing term
depends_on: []
relates_to:
  - spore.connection.p2p-wiki-post-intake-synthesis
  - spore.connection.p2p-wiki-pass-2-capstone-synthesis
concepts:
  - boundary-commoning
  - reproductive-commoning
  - power-capture
  - polycentric-governance
  - market-dependence
  - memory-governance
  - curation-valuation-limitation-exchange
  - pluriversal-commoning
  - decentralization-theater
  - coordination-substrate
sources:
  - url: https://wiki.p2pfoundation.net/
    title: P2P Foundation Wiki (live-synced, 41K pages)
    type: primary
---

# P2P Wiki Intake → Canon Review: Full-Arc Retrospective

**Arc window**: 2026-04-14 (wiki live-sync) → 2026-04-18 (canon-review-v1 plan closed). Intake Pass 1 + Pass 2 + canon-review v1 + protocol v2 harvest, across Spore / IC / PM, as one programmatic whole.

**What it produced**: 40 bridge notes + ~432 wiki-anchored claims (intake), 10 decisions + 23 ADRs + 7 shared framing notes (canon review), 29 protocol rules harvested (v2). Two capstone synthesis notes ([`p2p-wiki-post-intake-synthesis`](./p2p-wiki-post-intake-synthesis.md) for Pass 1, [`p2p-wiki-pass-2-capstone-synthesis`](./p2p-wiki-pass-2-capstone-synthesis.md) for Pass 2). Two durable protocols: [`learning-field-intake-protocol`](../planning/learning-field-intake-protocol.md) v1 and [`canon-review-protocol`](../planning/canon-review-protocol.md) v1 + v2.

This note is the full-arc view. Each capstone covers its own intake phase; neither covers the canon-review outcome. This note bridges.

## §1 What the wiki surfaced (substantive content)

### §1.1 Four structural insights

From Pass 2's synthesis §2, re-read after canon review:

1. **Reproduction primacy.** Reproductive labor (care, provisioning, territorial stewardship) is first-order power-capture, not cultural epiphenomenon. Federici + Bhattacharya + Bresnihan + Dyer-Witheford lineage. Pre-intake, all three projects treated reproduction as implicit substrate; canon-review made it an explicit coordination surface.
2. **Boundary theory as unifier.** `boundary-commoning` appears in every bridge note across both passes. Spore's mycorrhizal-federation, IC's memory-governance, PM's CVLE are the same boundary-making operation at different scales. Pass 1 hinted at this as a 3-cluster convergence; Pass 2 made it general; canon-review landed it as the Tier B boundary-theory-unifier ADR triangle.
3. **Three-layer coordination stack** (reproduction / production / governance). Complete commons-coordination infrastructure requires all three layers. Absence of any layer invites a specific failure mode. Canon now names each project's layer occupancy: Spore across all three; IC governance-primary with production-declined-as-not-native; PM production-primary with reproduction-genealogy via tontines/ollas communes.
4. **Decentralization-myth bundle.** Three failure modes ride together whenever P2P/decentralized vocabulary appears: decentralization theater (Yarvin-adjacent), digital-labor-as-free-gift (Scholz/Kleiner), administrator-capture (Kostakis on Wikipedia admin-class). Canon declines each explicitly in Spore; lighter acknowledgment in IC; PM declines-by-construction (no P2P vocabulary to inherit the critique).

### §1.2 Three held-open tensions

Canon acknowledges three questions it cannot resolve from current evidence. Each is visible in-canon with a pointer to its ADR, rather than silently picked.

- **DH-PM-1 (accounting-dependence, Anitra Nelson's critique)**: *any* accounting — even REA/ValueFlows's bidirectional, commensurability-preserving pattern — encodes exchange-value logic. PM's mutual-credit may be fighting the wrong enemy. Resolution trigger: when PM's CVLE valuation function ships and can be inspected operationally against Nelson's critique (per ADR `pm.canon-decision.0001` Evidence §4).
- **DH-IC-1 (pluriversal incommensurability, Escobar / Mignolo / de la Cadena)**: translation across ontologies is political negotiation, not technical standardization. IC's "shared knowledge commons" cannot presume a single meta-ontology. Resolution trigger: when per-layer translation policy is specified operationally (per ADR `ic.canon-decision.0001` Evidence).
- **Reproduction-primacy reframing (capstone §6.3)**: resolved YES at canon level via canon edits (re-motivate existing primitives), but the rename-question (`mycorrhizal-federation-protocol` → `mycorrhizal-federation-for-commoning`?) was answered with "remotivate, don't rename." Primitives stay; motivating language shifts.

### §1.3 Specific prior-art the wiki preserved that we'd have missed

Before-after delta on what the projects cite as lineage:

- **Tontines and ollas communes** as pre-monetary operational prior art for commitment-pooling. PM canon (via `pm.canon-decision.0002`) acknowledges this lineage instead of framing PM as contemporary-protocol novelty.
- **Charter of Forest 1217** as 800-year commons-law institutional lineage. Not yet in Spore canon — hinted for future canon work per capstone §3.1 item #7 (`constitutional-artifacts:commons-law`).
- **FairCoin** as the wiki's own documented failure of De Angelis's filtering-membrane theory. Corpus preserves its own negative evidence; the opposition note [`faircoin-filtering-membrane-opposition`](./faircoin-filtering-membrane-opposition.md) cites it.
- **Dyer-Witheford's A-C-A' circuit** (Associations → Commons → Associations) as integration of reproductive and productive labor at the foundation, cited in Spore ADR-0002 reproductive-commoning reframing of `mycelial-holarchy-architecture`.
- **Hess/Ostrom knowledge-commons framework** — a Pass 1 citation gap closed by Pass 2's [`hess-ostrom-knowledge-commons-framework`](./hess-ostrom-knowledge-commons-framework.md) bridge note. IC canon (via ADR-0007) now anchors memory-governance on this framework.
- **Wikipedia administrator-class accumulation** (Kostakis 2010 + Gallus) as the paradigm administrator-capture failure mode. IC canon (via ADR-0005) names this explicitly in memory-layer-model's declinations.

## §2 How canon actually changed

ADR-by-ADR audit trail lives in each repo's `docs/research/canon-decisions/`. The arc-level summary:

### §2.1 Spore (8 ADRs + 7 framings)

- **`mycorrhizal-federation-protocol`**: touched four times (ADR-0002/0003/0004/0005). Now names reproductive-labor invisibilization alongside protocol lock-in, gatekeeper roles, and data asymmetry as first-order capture mechanisms. Explicitly declines the three decentralization myths (theater / digital-labor / administrator-capture). Carries boundary-theory frame.
- **`term.field` (lexicon)**: re-read as reproductive apparatus (Federici housing-as-spatial-commons lineage); field-as-boundary-site (Bresnihan); collective-agency substrate extended (Bourdieusian + extitutional + assemblage-theory triple).
- **`relational-agency-and-holons`**: care as primary coordinating practice (Bresnihan's commons-is-a-verb); agency-through-commoning-not-through-contract.
- **`holonic-network-architecture` (aka `mycelial-holarchy-architecture`)**: Dyer-Witheford A-C-A' circuit imported; polycentric-governance at primitive level (Pass 2 §3.1 item #1 resolution).
- **`term.stigmergy` (lexicon)**: Heylighen 2015 formalization; stigmergy-as-coordination-substrate (ADR-0007 Spore-PM coordinated edit).
- **`project-vision` + `roadmap`**: Spore declared across all three layers of the coordination stack.

### §2.2 IC (8 ADRs)

- **`memory-layer-model`**: preserving-care frame (reproduction-primacy); admin-class-accumulation + digital-labor declinations (decentralization-myth); autopoiesis/structural-coupling held-as-tension (first capstone-promotes-but-DB-fails case).
- **`intelligence-primitives`**: new cross-cutting memory-governance section with four moments (attribution / provenance / preservation / access-across-time); DH-IC-1 pluriversal translation-is-political hold; decline of single-meta-ontology assumption.
- **`project-vision`**: IC declared governance-primary; production-layer declared-as-not-native (first structural-declination disposition in plan).

### §2.3 PM (7 ADRs)

- **`project-vision`**: positive position on market coordination (Wood-Brenner distinction + Benkler metaphor-refusal + WIR drift anti-pattern); three-layer layer occupancy (production-primary with reproduction-genealogy); commitment-pooling tontines/ollas lineage acknowledged.
- **`protocol`**: CVLE as boundary-composition operation; coordination-substrate via Spore escalation (ADR-0006); DH-PM-1 accounting-dependence hold visible.
- **`grammar`**: CVLE as production-layer primary.
- **Decentralization-myth bundle**: reject-by-construction (grep-verified zero P2P vocabulary in PM canon; the three critiques don't bind).

## §3 Vision-level shifts

Four reframings that cross project boundaries:

1. **Three projects are now explicitly cross-project-coordinated, not parallel.** Pre-intake: three projects with overlapping concepts (boundary, power-capture, commitment) and ambient awareness of mutual relevance. Post-canon: 22 reciprocal `related_adrs:` entries across repos name specific coordination relationships; the three-layer stack names HOW they relate as complementary layers.

2. **Corpus reads as "wiki-informed but project-rooted", not "wiki-absorbed."** Canon edits are motivational-language changes and doctrine extensions, not primitive-rewrites. Evidence threshold (≥3 supports + supports > opposes) + opposition-density discipline (Pass 2's 35% opposition density, deliberately corrected up from Pass 1's 11%) kept canon voice intact. The wiki deepens motivation; it doesn't replace grammar.

3. **PM reframed from "matching substrate" to "production-layer commons-coordination protocol with declared boundary commitments to reproduction (via commitment-pooling tontines/ollas genealogy) and governance (via Wood-Brenner market-decline)."** This is closer to what PM was intended to be — general matching with commitments central — but now named in canon terms that place it within a larger architecture.

4. **Held-tension as first-class canon state.** Canon can legitimately say "this is open, see ADR-NNNN" without picking a side. Three tensions visibly held. This is a methodological shift: the projects are now permitted to acknowledge their own unresolved questions in canon voice, which is harder than silently assuming resolution.

## §4 Method learnings (what the arc taught us about how to do this)

Two protocols harvested as durable method artifacts. Each evolved substantially through execution:

### §4.1 Intake protocol v1

Harvested from Pass 1 before Pass 2 fired. Key method-lessons that Pass 2 tested:

- **Two-phase pattern** (synthesis sprint → formal projection) beat the naive one-phase approach. Phase A preserves intellectual judgment; Phase B adds rigor. Reversing the order produces technically-correct-but-intellectually-thin claims.
- **Frozen concepts yaml discipline** prevented slug fragmentation. 15 concurrent agents honored the vocabulary with zero violations.
- **Mandatory opposition notes in Phase A** countered confirmation bias. Pass 2's 35% opposition density (vs Pass 1's 11%) validated the discipline.
- **Wide foraging FIRST, narrowing later.** Pre-filtering gap areas produces confirmation bias in discovery; parallel wide-discovery agents surface genuine gaps that narrow-then-wide misses.
- **Cross-project R-claims via `governance_cluster_key`** (no xref stubs needed). Simpler than early designs; the projection script groups by target+concept regardless of source project.

### §4.2 Canon-review protocol v2

Harvested from canon-review-v1 execution. Five highest-impact refinements:

- **Extended-D3 (concept × target, not concept alone)**: prior ADR on concept X at target A does NOT bar a later edit on X at target B. Without this, at least one Tier C item would have incorrectly no-opped.
- **Discipline-rule R-claims** vs cluster-gated edits: not all R-claims fit the support/oppose numeric gate; some impose vocabulary/framing and route to a supporting cluster via aggregate rule. Handled decentralization-theater (no DB cluster pre-projection) and openwashing cleanly.
- **Symmetric-multi-primary fan-out** for structural insights: each repo carries its own primary R-claim on its own canon target. My original D5 precedence rule assumed hierarchical aggregation; structural insights are naturally symmetric.
- **Structural declination + reject-by-construction** as first-class dispositions, not just edit/hold/reject. IC's production-layer declination + PM's decentralization-vocabulary rejection are legitimate canon positions, not evasions.
- **Capstone-promotes-but-DB-fails → hold-as-tension (DB authoritative).** Capstone §5 promotion candidates are recommendations, not verdicts. Constraint 5 + DB is the verdict. Autopoiesis was a honest test case.

### §4.3 Meta-lesson on review cycles

Codex adversarial review hit diminishing returns around round 11; further rounds found bash-script bugs, not plan-level gaps. We shipped the plan with known verification-script bugs and let execution surface them. Result: 28 v2-harvest findings — far more than any review round could have produced. The real protocol maturation came from running the protocol, not from reviewing it.

## §5 What remains open (forward state)

### §5.1 Unclosed gaps

- **Capstone §4 gap #13** (civilizational analysis) — not targeted in Pass 2; carried forward.
- **Capstone §4 gap #14** (machine-mediated governance) — open, cross-project. Spore protocol-mode capture + IC embedding-gatekeeping + PM performativity all inherit this gap. Likely Pass 3 trigger if any single project commits to canonizing machine-mediation clauses.

### §5.2 Protocol-level deferred items

- **Spore validator status-enum reconciliation** (R-11 harvest): current workaround maps `proposed → draft`, `accepted → active`. Clean fix requires validator code change; deferred to canon-review v3.
- **Concepts yaml v3 freeze** if a canon-edit genuinely needs a new slug not in v2.
- **Cross-repo ADR index** (tooling): manually derived from `related_adrs:` fields currently; could be auto-generated.
- **Pre-commit inline-lint framework**: would have caught several v2-harvest bash-bug cases at author-time rather than at AC-verification time.

### §5.3 External event triggers

- **Jeff re-engagement** (fired 2026-04-19 — call booked 2026-04-23). Move 0 clock was dormant; canon evolved during silence; composition-test now runs against evolved grammar rather than the Apr-13-compose-letter grammar. This is a feature: grammar is better-grounded, not broken.
- **Victoria workshop** (May–June 2026) — next external event that could fire Pass 3 or surface first-real-commitment evidence for the Johar evidence program.
- **6-month cadence clock** runs to 2026-10-17 for Pass 3 monitoring regardless of external triggers.

## §6 What we actually gained

The corpus is better; the canon is better; but the most durable artifact is the **method** for doing this kind of work across a 40K-page prior-art corpus into three active projects. Two protocols, 29 rules, 23 ADRs as worked examples, and a full Execution log with SHA manifest provide a reproducible path for the next corpus. Whatever fires Pass 3 — gap #14 content arrival, Victoria evidence, Jeff-pilot composition-test surfacing new gaps, or the 6-month cadence — runs faster.

## §7 Attribution

Wiki sources cited in this note are from the P2P Foundation wiki (https://wiki.p2pfoundation.net), licensed CC BY-SA 4.0. This retrospective is primarily original synthesis with the wiki as one of many inputs; the 7 shared framing notes and 40 bridge notes referenced carry their own per-note attribution and licensing.

---

**How this note is used.** Collaborators entering the projects read this first for full-arc context, then drill into per-ADR evidence in the repos' `canon-decisions/` directories. Future intake rounds read §4 for method-lessons. If this note's claims contradict a later canon edit, this note is stale — the canon is authoritative; update this note at the next retrospective cycle.
