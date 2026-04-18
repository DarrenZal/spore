---
doc_id: spore.connection.canon-framing-reproductive-commoning
doc_kind: research
research_subkind: canon_framing
status: draft
decision_slug: reproduction-primacy
affected_repos:
  - spore
  - intelligence-commons
  - poietic-match
related_adrs:
  - spore:ADR-0002-reproduction-primacy
  - intelligence-commons:ADR-0002-reproduction-primacy
  - poietic-match:ADR-0002-reproduction-primacy
source_bridge_note: spore.connection.reproductive-commoning
concepts:
  - reproductive-commoning
  - commons-as-verb
  - power-capture
  - commitment-pooling
---

# Canon Framing — Reproduction Primacy (Tier A, DH-Spore-1 resolution)

Shared framing for the coordinated canon-review decision on reproduction primacy, authored under the `canon-review-v1` plan (Tier A, third and final tension). This note precedes and coordinates three per-repo ADRs: `spore:0002-reproduction-primacy` (primary; touches 4 Spore foundation docs), `intelligence-commons:0002-reproduction-primacy` (secondary), and `poietic-match:0002-reproduction-primacy` (secondary). All three land session-atomic per Constraint 6.

## 1. The insight in one paragraph

Reproductive labour — care, provisioning, territorial stewardship — is a first-order power-capture concern, not a derivative cultural layer. Its invisibilisation is the historically prior capture mechanism; every P2P primitive that treats reproduction as naturalised substrate rather than coordination surface inherits the substrate move that enables every subsequent enclosure. The P2P Foundation wiki's Federici / Bhattacharya / Bresnihan / Dyer-Witheford lineage positions reproductive work as the condition of possibility for production and governance, not downstream of them. Phase A's DH-Spore-1 disconfirming hypothesis (reproductive-labour invisibilisation as first-order capture) was resolved **YES** at user decision and is encoded as R5 of the source bridge note (`spore.connection.reproductive-commoning`). Capstone §2.1 names the per-project implications; §5 lists reproductive-commoning as a promotion candidate (recommend **promote**); §6.3 holds open only the narrower reframing-vs-renaming question, which this framing note addresses directly.

## 2. Scope decision and rationale

**Scope: 3-repo coordinated.** The source R-claims (R1–R5) target Spore canon directly; R6 targets a PM connection note, not PM canon. Under a strict Constraint-1 reading of the fan-out rule (protocol §5b — fan-out triggers on `affects_canon`, not `r_claim_source`), this would be a Spore-only ADR. **That reading is rejected here** on the basis of capstone §2.1's "What it changes" language, which makes substantive re-motivational claims about IC and PM canon that are not pointer-only side-references:

- **For IC**: "memory-governance re-reads as preserving-care rather than knowledge-access; attribution encodes ongoing obligation (Mauss/Pinchot gift-obligation), not just recognition." This is a motivational-language extension of a canon primitive (the Memory primitive in `ic.intelligence-primitives`), not a cross-reference.
- **For PM**: "commitment-pooling acknowledges the tontines/ollas communes genealogy as pre-monetary operational prior art documented by Federici; commitment-pooling cannot be framed as contemporary protocol novelty without acknowledging the centuries-long women-led commoning lineage it encodes." This is a substantive re-framing of PM's commitment-bundle framing in `pm.project-vision`, not a cross-reference.

A Spore-only scope would force Tier B's structural-insights phase to revisit reproduction-primacy for IC and PM, defeating the D3 Tier A→B handoff rule which says Tier B consumes Tier A outcomes as no-ops on already-decided concepts. Scoping this now as 3-repo coordinated keeps Tier A self-contained per Constraint 1 and makes Tier B's reproduction-primacy slot a clean no-op (handoff rule path: Tier A decided `edit` → Tier B records one-line log entry "implemented in Tier A ADR-0002, no new work").

Alternative scopes considered and rejected:
- **Spore-only** (strict Constraint 1): rejected as above; pushes unresolved IC/PM work into Tier B.
- **2-repo (Spore + PM)**: considered because R6 names a PM connection note and the PM commitment-pooling framing is explicitly addressed by §2.1. Rejected because IC's memory-governance re-motivation in §2.1 is equally substantive, not pointer-only.
- **3-repo with IC-only-pointer**: considered because IC's re-motivation is lighter than Spore's (one paragraph in one primitive, vs four Spore canon files). Rejected because a pointer-only IC ADR on an `edit` decision would be internally inconsistent; either the §2.1 IC language is substantive (and gets a motivational-language addition) or it isn't (and the ADR is a no-op for IC). The paragraph IS substantive, so an IC edit is authored.

**Authority for this decision**: scope decisions on cross-project reach are operator-owned per the protocol's "affects_canon triggers fan-out" rule and Constraint 1's flexibility around cross-repo r_claim_source evidence-context. The decision is logged in both the primary Spore ADR's Context section and in the canon-review plan's Execution log.

## 3. Evidence summary

Cluster counts from `psql personal_koi` queried 2026-04-18 (join pattern: `entity_relationships.object_uri LIKE 'orn:personal-koi.entity:claim-' || c.claim_rid || '%'` — same pattern as DH-IC-1; the `subject_uri/claim_rid` direct join returns zero because edges use entity-URI-wrapped claim identifiers, not claim_rids directly):

| Cluster | Supports | Opposes | Role |
|---|---|---|---|
| `spore.mycorrhizal-federation-protocol:power-capture` | 13 | 12 | **Primary** for Spore ADR (R5's cluster). Contested — 48% opposition density, just under 50% threshold. Passes edit-gate: 13 ≥ 3 AND 13 > 12. |
| `spore.term.field:reproductive-commoning` | 5 | 0 | Secondary (R1). Strong support. |
| `spore.relational-agency-and-holons:commons-as-verb` | 3 | 0 | Secondary (R2). Strong support. |
| `spore.mycelial-holarchy-architecture:commons-as-verb` | 4 | 0 | Secondary (R3). Strong support. |
| `spore.mycorrhizal-federation-protocol:commons-as-verb` | 3 | 0 | Secondary (R4). Strong support. |

**Capstone-vs-DB drift (recorded per Constraint 5 >1 rule)**: Capstone §3.1 Spore queue #2 reports `power-capture` at the federation-protocol target as "3S/8O — highest-opposition cluster". DB recount returns 13S/12O. Both sides of the ratio differ by >1, so DB is authoritative. The capstone count appears to have been computed on a subset of the cluster (likely excluding cross-pass aggregation or Pass 2 additions landed after the capstone's tally moment). The edit-gate result does not change under either count — both pass (a) ≥3 and (b) supports > opposes — but the magnitude and the opposition density shift from "highest-opposition and still barely supported (3/8)" to "contested with mild majority (13/12)". This is non-trivial for how the ADR frames its own legitimacy: the edit is not a strong-consensus canon move on power-capture, it is a narrow-majority canon move that carries explicit acknowledgement of the opposition. Spore ADR Evidence section records both counts.

**Primary cluster selection per protocol §5 deterministic rule**: the user-stated aggregate queue item names `power-capture` (R5) as the capstone §2.1 evidence for the resolution; R5's cluster is `spore.mycorrhizal-federation-protocol:power-capture`. This is the primary. R1–R4 are secondary contributors under protocol §5's multi-target aggregation rule (different targets and different concepts from the primary, but all rolled into the same decision per capstone §2.1).

**Held-tension overlap check (Constraint 5c, run 2026-04-18)**: Prior `hold-as-tension` ADRs at author-time:
- `pm:ADR-0001-accounting-dependence-tension` — concept `market-dependence` — no overlap with `{power-capture, reproductive-commoning, commons-as-verb, commitment-pooling}`.
- `ic:ADR-0001-pluriversal-incommensurability` + `spore:ADR-0001-pluriversal-incommensurability` — concepts `{pluriversal-commoning, memory-governance}` — no overlap.

No existing held-tension ADR concept-overlaps with this ADR's concept set. Clean.

## 4. Disposition: edit (first in plan)

Per protocol §4 and Constraint 5, the edit-gate is passed (all five clusters show supports ≥ 3 AND supports > opposes, with the primary at 13S/12O carrying the caveat above). Capstone §5 explicitly recommends `reproductive-commoning` for **promotion**; §2.1 resolved DH-Spore-1 YES at user decision; no contradicting held-tension ADR exists.

This is the **first `decision: edit` ADR under the canon-review plan.** Prior Tier A ADRs (DH-PM-1, DH-IC-1) were both `hold-as-tension`. That means AC-8b (evidence-threshold deterministic check: supports ≥ 3, supports > opposes, source declared, cluster_key formatted) fires for real on this ADR for the first time. Each per-repo ADR Evidence section carries the fields. Spore's Evidence section is the primary record; IC and PM Evidence sections cite the shared framing for the primary cluster and record their own secondary-cluster derivations.

## 5. Reframing vs renaming (capstone §6.3 held-open question resolved)

Capstone §6.3 held open the question: do Spore's primitive slugs need to change to make reproduction visible in canon language, or is motivational-language sufficient? The bridge note (§8) argued for reframing (motivational-language edits plus R5 doctrine extension) over renaming. The capstone §5.4 "Renames" entry explicitly declined the candidate renames (`mycorrhizal-federation-protocol` → `mycorrhizal-federation-for-commoning`; `term.field` → `term.field-as-reproductive-apparatus`) as either inadequate or clunky.

**This framing honours both positions**: reproduction-primacy is encoded as motivational-language additions to 4 Spore foundation docs (reframing, per bridge note §8), with no slug changes (per capstone §5.4). The §6.3 trigger-to-re-open structure is preserved: if downstream canon reads continue to read `field` as coordination-surface rather than reproductive apparatus despite the updated language, OR if Pass 3+ bridge notes surface persistent mis-reads, the renaming question can be revisited in a follow-on ADR. This ADR does not foreclose renaming; it chooses reframing as the current disposition and documents the re-open triggers.

## 6. Per-repo canon targets

### Spore (primary; 4 canon files, one commit)

- `docs/foundations/lexicon/field.md` (doc_id `spore.term.field`) — R1 re-motivation: field as reproductive apparatus (Federici housing-as-spatial-commons), retire reading-of-care-as-downstream.
- `docs/foundations/relational-agency-and-holons.md` (doc_id `spore.relational-agency-and-holons`) — R2 re-motivation: Bresnihan "commons is a verb", care as primary coordinating practice.
- `docs/foundations/holonic-network-architecture.md` (doc_id `spore.mycelial-holarchy-architecture`) — R3 re-motivation: Dyer-Witheford A-C-A' circuit (Associations sustain Commons sustain further Associations). Note: file path is `holonic-network-architecture.md` but the live frontmatter doc_id is `spore.mycelial-holarchy-architecture`. This matches the allowlist reference per D7 conflict-resolution rule (live frontmatter wins); the bridge note's R3 target uses the doc_id, not the filename. Recorded in the Spore ADR Evidence section as "allowlist drift: bridge-note target lists `spore.mycelial-holarchy-architecture`; live file is `holonic-network-architecture.md`; using live doc_id."
- `docs/foundations/mycorrhizal-federation-protocol.md` (doc_id `spore.mycorrhizal-federation-protocol`) — R4 + R5 combined edit: (i) federation as commoning mechanism (R4 commons-as-verb), (ii) reproductive-labour invisibilisation named as first-order capture mechanism alongside protocol lock-in, gatekeeper roles, and data asymmetry (R5 power-capture).

R4 and R5 both target the same file; combined into one edit touching both motivations, not two separate edits. This follows the capstone §5.1 item 1 specification: "mycorrhizal-federation-protocol — highest-opposition-cluster resolution. Combines Pass 1 R8 (market-dependence decline; three-layer interoperability review; institutional-self-negation discipline) with Pass 2 reproductive-commoning R5 ... This is one edit that touches one target doc; the unified edit is now specifiable."

### IC (secondary; 1 canon file)

- `docs/foundations/intelligence-primitives.md` (doc_id `ic.intelligence-primitives`) — motivational-language addition to §2 Memory: memory-governance re-reads as preserving-care rather than knowledge-access; attribution encodes ongoing obligation (Mauss/Pinchot), not just recognition. One paragraph extension to the existing Memory primitive, under the Key Insight line.

IC scope is surgical per operator prompt discipline ("don't refactor"). The memory-layer-model.md is NOT touched here — the memory-governance re-motivation lives with the primitive definition (intelligence-primitives.md §2), and the layer-model inherits through `depends_on: [ic.intelligence-primitives]`.

### PM (secondary; 1 canon file)

- `docs/project-vision.md` (doc_id `pm.project-vision`) — motivational-language addition to "Commitment bundles" section: commitment-pooling is not a contemporary protocol novelty; it encodes a centuries-long women-led commoning lineage (tontines, ollas communes) documented by Federici. One paragraph addition inside the existing section. No change to the commitment-bundle semantics — the change is genealogical attribution, not a semantic shift.

PM scope is likewise surgical. The `pm.protocol` and `pm.grammar` documents are not touched; the genealogical acknowledgement belongs in project-vision (the motivational doc), not in the technical protocol spec.

## 7. Concepts touched

From the frozen v2 concepts vocabulary (`spore/docs/research/concepts-p2p-wiki.yaml`):

- `reproductive-commoning` — R1 (Spore primary concept for field.md).
- `commons-as-verb` — R2, R3, R4 (Bresnihan framing, three Spore canon docs).
- `power-capture` — R5 (Spore primary cluster concept for federation protocol).
- `commitment-pooling` — R6 (PM secondary concept for commitment-bundle genealogy).

No new concept slugs introduced; strict v2 membership verified (2026-04-18). `reproductive-commoning` itself is capstone §5's promotion candidate — canon now adopts it as a doctrine lens explicitly applied across existing primitives (per §5's "not a primitive; a lens").

## 8. Relationship to prior Tier A tensions

This is the third and final Tier A decision, closing the held-open tensions queue:

- **DH-PM-1** (`pm:ADR-0001-accounting-dependence-tension`, 2026-04-17): single-repo (PM), disposition `hold-as-tension`, concept `market-dependence`. Established the arithmetic-passes-but-held pattern — evidence clears the gate but substance is a category argument.
- **DH-IC-1** (`ic:ADR-0001` + `spore:ADR-0001-pluriversal-incommensurability`, 2026-04-18): 2-repo coordinated, disposition `hold-as-tension`, concepts `pluriversal-commoning, memory-governance`. Applied the same pattern to a different category argument (decolonial-vs-de-Westernisation).
- **Reproduction primacy** (this ADR, 2026-04-18): 3-repo coordinated, disposition `edit`, concepts `reproductive-commoning, commons-as-verb, power-capture, commitment-pooling`. Breaks the prior pattern: evidence and substance both support edit, with the power-capture cluster carrying explicit opposition-density caveat. DH-Spore-1 resolved YES.

The three Tier A tensions are disjoint in concepts (no overlap across their concept sets). Tier A closes with this ADR; Tier B (cross-project structural insights) starts with reproduction-primacy as its first insight, which handoff-rules to no-op (per D3 Tier A→B rule: "Tier B's work on reproduction-primacy is a no-op — record 'Tier B insight #1 reproduction-primacy: implemented in Tier A ADR-0002 (no new work)' and move on").

## 9. Relationship to Tier B insights

Beyond the direct handoff noted in §8:

- **Boundary theory (Tier B §2.2)**: `boundary-commoning` is cited by the `reproductive-commoning` bridge note but is not the load-bearing concept here. Tier B work on boundary-theory will read the reproduction-primacy edits (especially `mycorrhizal-federation-protocol` and `relational-agency-and-holons`) and must decide how the boundary-theory variants interact with care-as-primary-coordinating-practice. Either choice is consistent with this ADR; the ADR does not foreclose Tier B.
- **Three-layer coordination stack (Tier B §2.3)**: reproduction is the bottom layer. This ADR's Spore canon edit to `mycorrhizal-federation-protocol` implicitly commits to reproduction-layer visibility without fully specifying the three-layer frame. Tier B §2.3 work can formalise the per-layer specification as a discipline; this ADR supplies the reproduction-layer content.
- **Decentralisation-myth bundle (Tier B §2.4)**: orthogonal to this ADR. The reproductive-commoning bridge note carries the 3-sentence opposition header as all Pass 2 bridge notes do; canon edits inherit the declination discipline via R5's explicit naming of reproductive-labour invisibilisation as a capture mechanism alongside protocol lock-in, etc.

## 10. Links

- Source bridge note: [`spore.connection.reproductive-commoning`](/Users/darrenzal/projects/spore/docs/research/connections/reproductive-commoning.md)
- Capstone synthesis (§2.1 insight; §5 promotion candidate; §6.3 re-open trigger): [`p2p-wiki-pass-2-capstone-synthesis`](/Users/darrenzal/projects/spore/docs/research/connections/p2p-wiki-pass-2-capstone-synthesis.md)
- Prior Tier A tensions:
  - [`pm:ADR-0001-accounting-dependence-tension`](/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0001-accounting-dependence-tension.md)
  - [`ic:ADR-0001-pluriversal-incommensurability`](/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0001-pluriversal-incommensurability.md)
  - [`spore:ADR-0001-pluriversal-incommensurability`](/Users/darrenzal/projects/spore/docs/research/canon-decisions/0001-pluriversal-incommensurability.md)
- Per-repo ADRs (authored in the same session as this framing note):
  - [`spore:ADR-0002-reproduction-primacy`](/Users/darrenzal/projects/spore/docs/research/canon-decisions/0002-reproduction-primacy.md)
  - [`intelligence-commons:ADR-0002-reproduction-primacy`](/Users/darrenzal/projects/intelligence-commons/docs/research/canon-decisions/0002-reproduction-primacy.md)
  - [`poietic-match:ADR-0002-reproduction-primacy`](/Users/darrenzal/projects/poietic-match/docs/research/canon-decisions/0002-reproduction-primacy.md)
- Canon-review protocol: [`canon-review-protocol`](/Users/darrenzal/projects/spore/docs/research/planning/canon-review-protocol.md)
