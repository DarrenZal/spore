---
doc_id: spore.connection.canon-framing-life-value-doctrine
doc_kind: research
research_subkind: canon_framing
status: draft
decision_slug: life-value-doctrine
affected_repos:
  - spore
related_adrs:
  - spore:ADR-0086-life-value-doctrine-fourth-cross-cutting-doctrine
  - spore:ADR-0042-dag-delete-structural-legitimacy-promote
  - spore:ADR-0002-reproduction-primacy
  - spore:ADR-0003-boundary-theory-unifier
  - spore:ADR-0045-care-cross-cutting-doctrine
  - spore:ADR-0085-trap-shape-vocab-and-recursive-audit-method
source_bridge_note: spore.connection.sahely-life-value-manifesto
concepts:
  - life-value-doctrine
  - reproductive-commoning
  - boundary-commoning
  - care-commoning
  - structural-legitimacy
---

# Canon Framing — Life-Value Doctrine (ADR-0086, Sahely Bundle α #2)

Shared framing for the canon-decision admitting `life-value-doctrine` as the fourth cross-cutting doctrine, sibling to `reproductive-commoning` (ADR-0002), `boundary-commoning` (ADR-0003), and `care-commoning` (ADR-0045). Authored under the Sahely corpus Phase 2 closure (DECISION-BRIEF §17.5 Bundle α architecture; §17.8(1)+(4) operator final dispositions). This note coordinates one ADR (`spore:ADR-0086-life-value-doctrine-fourth-cross-cutting-doctrine`), one new derived slug (`life-value-doctrine`), one ADR-0042 §Consequences narrative-extension (C4 R-Immanent-ethics fold-in via extend-via-prose precedent), and canon-body edits at 3 ENUMERATION-TARGET sites. Spore-only scope at admission; ic + pm + BKC + bregion Wave-N+1 alignment EXPLICITLY DEFERRED to operator-elective separate-session work.

## 1. The insight in one paragraph

McMurtry's life-value onto-axiology (LVOA) core claim: *value = enablement of range of being / doing / feeling / thinking*. The Sahely foundational-triad (W4.2 manifesto + W2.3 architecture-of-viability + W3.1 toward-life-coherent-peace) operationalizes this as a practice-lens over coordination outcomes: any coordination act (intent / commitment / joint-commitment / evidence / signal / reproduction) can be evaluated for whether it serves life-value or money-value (cumulative monetary indicators decoupled from life-coherence). The doctrine threads a needle between two failed paraphrases: (a) primitive-grammar extension (rejected because life-value is an *evaluative substrate over coordination outcomes*, not a *coordination operation* — the nine existing primitives + six verbs already cover the operational layer; admitting life-value as 10th primitive would fail the (a) limb of the ADR-0049/0050 earning-test); (b) decomposition-into-existing-primitives (rejected because distributing life-value into property-of-Commitment + lens-on-Evidence + Field-condition reproduces the money-value invisibilisation Polanyi names as the *fictitious-commodity* move — the very pathology life-value-doctrine is admitted to make canonically legible). Doctrine-layer admission preserves nine-primitive parsimony while making the McMurtry / Polanyi / Sen-Nussbaum substrate canonically legible as a fourth lens applied across primitives.

## 2. Scope decision and rationale

**Scope: Spore-only.** Doctrine-layer admission is internal-to-Spore vocabulary-promotion, not a primitive-grammar change. IC and PM do not require coordinated grammar-shape updates because:

- IC's seven intelligence primitives at the domain layer above Spore's nine coordination primitives (per ic:ADR-0018) are not contradicted or extended by adding a fourth cross-cutting doctrine. IC's H2-decline of concepts-p2p-wiki.yaml (per ic:ADR-0019 + ic:ADR-0021) means no slug propagation is forced.
- PM's four protocol-objects (pm:Intent / pm:CommitmentBundle / pm:TrustAttestation / pm:MatchProposal) at the protocol layer are not contradicted by adding a doctrine-lens. PM's H2-decline of concepts-p2p-wiki.yaml (per pm:ADR-0015 + pm:ADR-0018) means no slug propagation is forced.
- The Q5 discipline established in Phase 3 (ADR-0044) is preserved: primitive-layer or grammar-shape changes coordinate across repos; doctrine-layer or vocabulary-layer changes can be Spore-internal without breaking cross-repo coherence. Wave-N+1 propagation, if it fires, will be prose-only doctrine-reference rather than slug-propagation, per ic:ADR-0019 + pm:ADR-0015 REFERENCE-heavy precedent.
- BKC peer-instance-family bridge candidate (Ruddick-Civil-Commons → BKC commitment-pooling 3-layer composition) is preserved as operator-elective separate-session work; the Spore-side bridge note `sahely-ruddick-civil-commons-bridge.md` (Phase 2 closure Task A) already articulates this composition.
- bregion peer-instance-family composes with life-value-doctrine at the planetary-scale + life-ground territory layer; descriptive cross-reference only; no alignment ADR.

Alternative scopes considered and rejected:

- **3-repo coordinated** (parallel to ADR-0002 admission): rejected because life-value-doctrine admission does not make substantive re-motivational claims about IC or PM canon. ADR-0002's 3-repo scope rested on capstone §2.1 *"What it changes"* prose making explicit IC/PM canon-primitive re-motivations; the life-value-doctrine admission has no equivalent capstone language requiring IC/PM canon edits.
- **Spore + immediate ic+pm Wave-N+1 alignment in same session**: rejected because (a) Wave-N+1 alignment requires DH-PM-1 hard-pause check at PM Step 0; (b) cross-stream writes from Spore-scoped session violate workstream-scope discipline per `feedback_workstream_scope_discipline.md`; (c) ic + pm alignment is honestly REFERENCE-heavy (no operational pressure forcing immediate alignment) and operator-elective at separate-session granularity.

## 3. Sibling-doctrine relation: four concerns, four doctrines

The cross-cutting-doctrine category now contains four load-bearing doctrines, each anchored to a different tradition-cluster and each addressing a distinct evaluative concern:

| Doctrine | Anchor ADR | Tradition-cluster | Primary concern |
|---|---|---|---|
| **reproductive-commoning** | ADR-0002 | Federici, Bhattacharya, Bresnihan, Dyer-Witheford, Gibson-Graham; Care Ethics-adjacent | Reproductive-labour invisibilisation as first-order power-capture mechanism; reproduction as the substrate the other layers depend on |
| **boundary-commoning** | ADR-0003 | Ostrom (1A/1B double-boundary), Bollier-Helfrich (semi-permeable membrane), Cox revision, autopoiesis-adjacent | Boundary-making as ongoing practice (commoning-at-boundaries) rather than fixed enclosure; double-boundary discipline (social inclusion + ecological resource); filtering-membrane resistance to openwashing |
| **care-commoning** | ADR-0045 | Held, Noddings, Gilligan, Tronto, Kittay; Care Ethics + Feminist Economics; partially Pluriversal (kinship-care) and Autopoiesis (Thompson's *Sorge*) | Care as asymmetric relational practice — three senses (labor + disposition + relation), four phases (Tronto), nested dependency (Kittay); attentiveness as pre-commitment moral moment; relational self-formation |
| **life-value-doctrine** *(new)* | ADR-0086 | McMurtry (LVOA — *Unequal Freedoms* 1998 / *Value Wars* 2002 / *Philosophy and World Problems* UNESCO 2009 / *Cancer Stage of Capitalism* 2013); Polanyi (substantive-economy / fictitious-commodities / embeddedness); Sen-Nussbaum (capabilities-approach); Max-Neef (partial); post-growth-Doughnut Raworth-Jackson-Daly-Hickel (partial) | Life-value vs. money-value as evaluative substrate over coordination outcomes — range of being / doing / feeling / thinking enabled; Civil Commons as core economic infrastructure; conflict-as-life-value-decoupling at peace-civilization scale |

The four doctrines overlap structurally but are not redundant. Pairwise intersections:

- **reproductive-commoning ↔ life-value-doctrine**: reproduction is a load-bearing instance of life-value enablement; reproductive-commoning frames *commoning of reproduction across time*, life-value-doctrine frames *evaluation of any coordination outcome* against life-coherence. Reproduction-continuity (ADR-0049 primitive) is the verb operating under both lenses. The two doctrines remain separable because reproductive-commoning operates on the visibility-practice axis (Federici-lineage critique of invisibilisation), while life-value-doctrine operates on the evaluative-substrate axis (McMurtry-lineage life-vs-money distinction).
- **boundary-commoning ↔ life-value-doctrine**: life-coherent boundaries are the substrate-discipline life-value-doctrine evaluates over. Civil Commons (McMurtry's term for the universal life-goods provided in common — clean air, water, knowledge, healthcare, education, etc.) names the boundary-set within which life-value is collectively secured. The two doctrines remain separable because boundary-commoning operates as substrate-discipline (how boundaries are made and maintained), while life-value-doctrine operates as evaluative-substrate (what the boundaries are evaluated against).
- **care-commoning ↔ life-value-doctrine**: care-as-asymmetric-relational-practice is one mode through which life-value is enabled (Tronto's caring-with phase). The doctrines intersect at the ethics-of-care-as-life-value-enablement layer but remain distinct: care-commoning operates as relational-discipline (the asymmetric relational structure of any caring moment), life-value-doctrine operates as evaluative-substrate (whether the coordination outcome serves life-value). Care can enable money-value extraction as easily as life-value enablement; the doctrines work in tandem rather than in subsumption.
- **All four doctrines** apply as lenses across primitives — `commitment` reads differently under each lens, `evidence` reads differently under each lens, `field` reads differently under each lens. None subsumes the others.

## 4. Why doctrine-not-primitive (Option C over A/B/D)

The DECISION-BRIEF §17.8(4) operator-ratified Option C. Condensed reasoning per the operator-decided ranking of dispositions:

- **Option A (life-value as 10th primitive)** — fails the (a) limb of the ADR-0049/0050 earning-test: life-value is an *evaluative substrate over coordination outcomes*, not a *coordination operation*. The nine existing primitives + six verbs already cover the operational layer (field / holon / membrane substrate; intent / commitment / joint-commitment / evidence / signal / reproduction verbs). Admitting life-value as 10th primitive would require specifying what coordination operation `life-value` performs distinct from `evidence` (which attests fulfillment) or `signal` (which transmits state); no such distinct operation is articulable. Parsimony-as-earning-test-outcome (per ADR-0049/0050 discipline) declines admission.
- **Option B (decompose across primitives)** — reproduces the money-value invisibilisation Polanyi names as the fictitious-commodity move; distributing life-value into property-of-Commitment + Evidence-attestation-weight + Field-condition would hide the doctrine inside named-variants of other primitives. This is exactly the historical pattern Polanyi diagnoses: when life-grounded categories (labor, land, money) are decomposed into market-derived properties (wage-labor, real-estate, financial-instruments), the life-grounded substrate becomes invisible to the coordination grammar. Doctrine-layer admission resists this decomposition.
- **Option C (4th cross-cutting doctrine)** — threads the needle: preserves nine-primitive parsimony; honors capstone Sahely material at doctrine-layer; leverages cross-cutting-doctrine canon-object-class machinery already established by ADR-0002 / ADR-0003 / ADR-0045; admits one slug (`life-value-doctrine`) + one framing-note (this document) + one narrative-extension to ADR-0042 §Consequences (extend-via-prose; frontmatter unchanged); light vocab-governance load (alias-to-slug promotion equivalent at the doctrine-category-expansion level, parallel to ADR-0045's care-commoning admission pattern).
- **Option D (light vocab-only admission as derived-glossary slug)** — under-articulation: life-value is canon-pressure-significant enough to warrant doctrine-level admission per DECISION-BRIEF §6 C3 substrate cluster-counting (3 FULL + 2 PARTIAL clusters; foundational-triad CAPSTONE substrate). Admitting `life-value-doctrine` as derived-glossary slug rather than cross-cutting doctrine would be a category error — the slug would sit alongside `golden-calf-trap` / `recursive-audit-method` (derived-glossary canon-method anchors) rather than alongside `reproductive-commoning` / `care-commoning` (cross-cutting-doctrine lenses).

## 5. Doctrine-application-domains (four)

The four doctrine-application-domains map cleanly to the four substrate-extension Sahely papers, each operationalizing life-value-doctrine in a distinct concern-territory:

- **Ethics** (W2.6 ethics-as-science-of-viability): ethics evaluated as viability-of-life-conditions; not as deontological-rule-following, not as utility-maximization, but as the science of whether coordination preserves and enhances the field-conditions that enable life. Aligns Sen-Nussbaum capabilities-of-flourishing — what people are *able to do and to be* — at the ethical-evaluation layer.
- **Economics** (W4.1 money-growth-to-life-coherence): money-value vs life-value distinction operationalized as the fundamental economic-evaluation axis. Six reconstruction pillars identified in W4.1 for reorienting economic coordination from money-value-maximization (GDP, financial-asset accumulation) toward life-value-enablement (Civil Commons provisioning, life-capacity-development). Civil Commons as core economic infrastructure; Polanyi-substantive-economy substrate (the embeddedness of economic activity in social and ecological relations, prior to its disembedding via the fictitious-commodities move).
- **Clinical-policy** (W4.3 medicine-of-living-coherence): Seven Policy Domains operationalization; clinical-encounter as life-value-enabling-practice (rather than as disease-treatment-only or insurance-administration). Sen-capabilities clinical-substrate — health as the substrate-capability for all other capabilities. McMurtry's *Cancer Stage of Capitalism* framing maps the same disease-shape from physiological pathology to political-economy pathology: uncontrolled growth that disregards life-host viability.
- **Peace** (W3.1 toward-life-coherent-peace): peace as life-coherence at civilization-scale; conflict as life-value-decoupling (rather than as inter-state-rivalry-only); structural-violence as money-value-substitution (Galtung's structural-violence concept mapped to McMurtry's money-value vs life-value distinction). The W3.1 paper operationalizes peace-conditions as the conditions under which life-value can be collectively maintained, which requires Civil Commons provisioning and the recursive-audit-method discipline (per ADR-0085).

These four domains do not exhaust life-value-doctrine's scope — they are the four with sufficient Sahely-paper substrate at admission-time to merit naming. Other domains (education, agriculture, planetary-ecology) are accessible to the doctrine's lens but not separately operationalized in the current substrate.

## 6. Cross-tradition cluster-counting math (honest per gate (a))

DO NOT inflate. The 5-cluster substrate, verified at Step 0.5 audit:

- **C1 McMurtry** (multi-book multi-decade corpus) — **FULL**. *Unequal Freedoms* (1998) + *Value Wars* (2002) + *Philosophy and World Problems* (UNESCO, 2009) + *The Cancer Stage of Capitalism* (2013) + civil-commons literature. Substrate density: 40+ McMurtry citations in W4.2 manifesto alone; operationalized across six Sahely papers (W4.2 / W4.1 / W2.3 / W2.6 / W4.3 / W3.1).
- **C2 Polanyi substantive-economy** — **FULL**. *The Great Transformation* (1944); fictitious-commodities critique (labor / land / money as fictitious commodities masking life-grounded substrate); embeddedness thesis (economic activity embedded in social and ecological relations, disembedded by 19th-century market society). Substrate density verified Step 0.5: 12 hits across 5 of 7 Sahely notes (8 W2.6 ethics + 1 each in W4.1 / W4.2 / W4.3 / W3.1) — cross-paper distribution validates as genuine cluster, not single-paper artifact.
- **C3 Sen-Nussbaum capabilities-approach** — **FULL**. Sen *Development as Freedom* (1999) + *The Idea of Justice* (2009); Nussbaum *Creating Capabilities* (2011) + *Women and Human Development* (2000). Substrate density verified Step 0.5: 29 hits in W2.6 ethics + 30 hits in W4.3 medicine. Capabilities-approach provides the operational machinery for evaluating life-value enablement: what people are *able to do and to be* per the capability-set, with substantive-freedom (not just formal-freedom) as the evaluation criterion.
- **C4 Max-Neef human-scale development** — **PARTIAL**. Max-Neef's needs-satisfier distinction (fundamental human needs are universal; satisfiers are culturally variable) is doctrinally adjacent to life-value-doctrine but the corpus is narrower than C1–C3 and not as densely cross-cited in the Sahely substrate. Honestly marked PARTIAL per Step 0.5 audit (7 hits W2.6 ethics; sparse elsewhere).
- **C5 post-growth-Doughnut (Raworth / Jackson / Daly / Hickel)** — **PARTIAL**. Raworth's *Doughnut Economics* (2017) planetary-boundary + social-foundation framing is doctrinally adjacent (the doughnut "safe and just space for humanity" maps to life-value-enablement-conditions), but the substrate density is lower than C1–C3 and the framework is newer with less corpus-depth. Honestly marked PARTIAL.

**Aggregate**: ≥3 FULL + 2 PARTIAL — meets cross-cutting-doctrine threshold per DECISION-BRIEF §6.2. C6 Bollier-Helfrich is NOT counted as a 4th FULL cluster (per DECISION-BRIEF §6.2: *"C3 includes Civil Commons but is broader"*). The Bollier-Helfrich commons tradition contributes partially to the substrate via the care-commoning ↔ boundary-commoning intersections, but is genealogically and operationally distinct from McMurtry's Civil Commons concept (which is broader and life-value-grounded rather than commons-property-grounded). No inflation.

## 7. Re-open triggers

This ADR may be revisited if:

- New traditions surface that materially shift the cluster-counting math (e.g., a tradition that successfully paraphrases life-value-doctrine into the existing primitive grammar without losing the McMurtry/Polanyi/Sen-Nussbaum structural commitments — would weaken the doctrine-layer-rather-than-primitive-layer choice).
- BKC peer-instance-family bridge admits BKC-side McMurtry citation as load-bearing at operational layer (e.g., BKC commitment-pooling formally references Civil Commons provisioning as a pool-formation criterion); could trigger operator-elective cross-repo doctrine-reference at Wave-N+1 alignment.
- IC or PM authors choose to adopt the doctrine pattern in their own canon-decisions; coordination-of-doctrine-vocabulary across repos may benefit from a follow-on framing-note revision.
- ADR-0086 §Open Questions (McMurtry's "life-ground" ↔ Spore's `field` primitive at planetary scales) gains operational substrate sufficient to author a separate dedicated-ADR; could trigger refactoring of the Field primitive bullet to acknowledge planetary-scale life-ground sub-conditioning (parallel to ADR-0046 rule-level stratification or ADR-0064 co-presence-mode scope-conditioning patterns).
- ADR-0085's `recursive-audit-method` discipline surfaces life-value-doctrine itself becoming captured into money-value substitution (i.e., the doctrine becomes a domination-grammar); the recursive-audit safeguard would then trigger doctrine-revision or doctrine-replacement.

## 8. Operational-earning summary

Life-value-doctrine's operational-earning at canon-level is established by:

- **ADR-0042 substrate-coupling**: structural-legitimacy (the foundation-level doctrine governing what makes coordination legitimate) gains an evaluative substrate via life-value-doctrine. The C4 R-Immanent-ethics narrative-extension to ADR-0042 §Consequences makes this explicit: legitimacy of coordination outcomes is readable through the life-value lens without requiring primitive-grammar extension.
- **Phase 3b sibling-doctrine precedent**: ADR-0045 care-commoning established the cross-cutting-doctrine canon-object-class machinery (admission shape: one slug + one framing-note + canon-body enumeration update). ADR-0086 admits the fourth member following the same shape.
- **Phase 4 foundation-doc substrate**: foundation docs F1–F9 (sensor-oracle-governance / failure-modes / structural-legitimacy / actuator-logic / representation-authority / external-validation-loop / actor-governance / etc.) provide the operational machinery against which life-value evaluation operates. F4 representation-authority's text-authoritative-with-graph-as-derived discipline applies to life-value evaluation: canon-text articulates what life-value-grounding requires; running-system implementations derive evaluative checks from canon-text.
- **ADR-0085 sequencing predecessor**: `golden-calf-trap` shape names the canonical pattern by which corrective distinctions (including life-value vs money-value itself) can become captured into selection-mechanisms; `recursive-audit-method` discipline applies the doctrine's own question to itself, preventing life-value-doctrine from becoming the next domination-grammar.

External instance-family operational-earning is **partially-aspirational at this time**: BKC's commitment-pooling protocol composes with Civil Commons (per Spore-side `sahely-ruddick-civil-commons-bridge.md`) but the BKC-side reciprocal bridge has not yet been authored; PM's `pm:CommitmentBundle` could carry life-value-evaluation in a future Wave-N+1 alignment but Pre-alpha status means no operational data exists; DW (darren-workflow) is operator-infrastructure without doctrine-evaluation-shape at this stage. This is comparable to the Care doctrine's Phase-3b.1-admission status (ADR-0045 §6 operational-earning summary). Doctrine-layer admission does not require full instance-family operational-earning at admission; it requires research-corpus + foundation-doc earning, both of which are present.

## 9. Cross-Phase implications (flagged, not decided)

This ADR explicitly does **not** decide the following items; they remain open and unshaped:

- **Wave-N+1 ic alignment**: operator-elective; ~30–60 min per ic:ADR-0019 / ic:ADR-0021 precedent. Would add prose-only doctrine-reference (concepts-registry H2-declined, so no slug propagation).
- **Wave-N+1 pm alignment**: operator-elective; ~30–60 min per pm:ADR-0015 / pm:ADR-0018 precedent. Requires DH-PM-1 hard-pause check at PM Step 0 (re-verify smoke-test status).
- **BKC peer-instance-family bridge** (`bkc.connection.mcmurtry-civil-commons-as-economic-foundation` or operator-named): operator-elective; would close the Spore-side `sahely-ruddick-civil-commons-bridge.md` reciprocal-citation gap.
- **bregion peer-instance-family**: planetary-scale + life-ground territory composes with life-value-doctrine; descriptive cross-reference only; no alignment ADR.
- **McMurtry "life-ground" ↔ Spore `field` primitive mapping**: Wave-N+1 consideration; would require operational substrate at planetary-scale Field instantiation against which to evaluate.
- **Sahely-Maturana school recursive-safeguard composition with life-value-doctrine**: ADR-0085's `recursive-audit-method` provides the discipline; the composition is acknowledged in §8 above but not separately operationalized.

## 10. Sequencing relationship with ADR-0085

ADR-0085 (Trap-Shape Vocab and Recursive-Audit Method) provides the canon-substrate this admission extends from. The relationship is more than chronological sequencing — it is structural:

- **Golden Calf class-trap and money-value substitution**: ADR-0085's `golden-calf-trap` shape (the 5-stage corrective-distinction-becomes-domination dynamic) maps cleanly to McMurtry's *Cancer Stage of Capitalism* framing at civilizational scale (per ADR-0085 three substantive layer-instantiations). The money-value-as-substitution-for-life-value pattern is the canonical Golden Calf class-trap at the economic-evaluation layer: a corrective distinction (monetary measurement as a proxy for value) becomes captured, hardened into accounting-convention, ritualized into financial-reporting requirements, and finally selection-mechanism (actors who fail to maximize money-value are filtered out, regardless of whether money-value still tracks life-value at all).
- **Recursive-audit-method and doctrine self-application**: ADR-0085's `recursive-audit-method` (the discipline of surfacing captured distinctions by applying a viability-grammar's own question to itself) provides the safeguard for life-value-doctrine. The doctrine must apply its own question to itself: *does this admission and articulation of life-value-doctrine itself serve life-value enablement, or does it constrain coordination in money-value-substitutional ways?* The recursive-audit discipline keeps life-value-doctrine from becoming the next domination-grammar.
- **Trap-shape vocabulary and life-value evaluation operationalization**: ADR-0085's trap-shape taxonomy (Golden Calf simple-substitution + Sacralized Trojan-Horse preservation-via-reverence) gives life-value-doctrine canonical vocabulary for naming when corrective distinctions become captured. The Sacralized Trojan-Horse variant is particularly relevant for life-value-doctrine evaluation — sacralized preservation-via-reverence can hide money-value capture inside reverential framings (e.g., "the sacred market," "the inviolable property right," "the unimpeachable scientific method") that resist recursive audit precisely because of their sacralization.

The two ADRs together — ADR-0085 trap-shape and recursive-audit substrate; ADR-0086 life-value-doctrine evaluative-substrate — constitute the foundational machinery for Spore canon to name, audit, and resist money-value substitution patterns at coordination layer. Both are required; neither alone is sufficient.

---

*See ADR-0086 §Decision + ADR-0042 §Consequences (post-narrative-extension) for the canon-decision-record articulation. Substrate citations in ADR-0086 §Evidence. Sequencing predecessor at ADR-0085 + `docs/research/connections/canon-framing-recursive-audit-method.md`.*
