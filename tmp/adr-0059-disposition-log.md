# ADR-0059 Disposition Log

Generated: 2026-04-23
Executed by: Claude Sonnet 4.6

## Format
file:line | pattern | pre-text (abbreviated) | post-text (abbreviated) | disposition | rationale

---

## Sub-scope A1 — Intent-pressure path cleanup

| file:line | pattern | pre-text | post-text | disposition | rationale |
|-----------|---------|----------|-----------|-------------|-----------|
| stigmergy.md:11 | spore.term.intent-pressure | `- spore.term.intent-pressure` (frontmatter) | unchanged | PRESERVE | Frontmatter doc_id `spore.term.intent-pressure` remains valid after ADR-0056 demotion. Ambiguity ruling: preserve. |
| stigmergy.md:81 | ./intent-pressure.md path | `[intent pressure](./intent-pressure.md)` | `[intent pressure](../../research/connections/intent-pressure.md)` | MANDATORY REWRITE | Relative path to old lexicon location; broken link after ADR-0056 move. Updated to new connections/ path. |
| governance-artifacts-and-graph-projections.md:125 | intent-pressure concept | "latent intent-pressure" | unchanged | VERIFIED-NEUTRAL | Concept-only reference; no path invocation. Not a broken link. Preserved. |
| intent-publication-and-activation.md:44 | intent-pressure concept | "latent intent-pressure" | unchanged | VERIFIED-NEUTRAL | Concept-only reference; no path invocation. Not a broken link. Preserved. |
| civic-infrastructure-convergence.md:8 | spore.term.intent-pressure | `- spore.term.intent-pressure` (frontmatter depends_on) | unchanged | PRESERVE | Frontmatter doc_id valid after ADR-0056. Ambiguity ruling: preserve. |
| civic-infrastructure-convergence.md:124 | ../foundations/lexicon/intent-pressure.md | `[intent pressure](../foundations/lexicon/intent-pressure.md)` | `[intent pressure](../research/connections/intent-pressure.md)` | MANDATORY REWRITE | Foundation-layer relative path; broken link after ADR-0056 move. Updated to new connections/ path. |
| hyperstition-as-coordination.md:7 | spore.term.intent-pressure | `- spore.term.intent-pressure` (frontmatter depends_on) | unchanged | PRESERVE | Frontmatter doc_id valid after ADR-0056. Ambiguity ruling: preserve. |
| hyperstition-as-coordination.md:56 | ../foundations/lexicon/intent-pressure.md | `[intent pressure](../foundations/lexicon/intent-pressure.md)` | `[intent pressure](../research/connections/intent-pressure.md)` | MANDATORY REWRITE | Foundation-layer relative path; broken link after ADR-0056 move. Updated to new connections/ path. |
| hyperstition-as-coordination.md:87 | ../foundations/lexicon/intent-pressure.md | `[intent pressure](../foundations/lexicon/intent-pressure.md)` | `[intent pressure](../research/connections/intent-pressure.md)` | MANDATORY REWRITE | Foundation-layer relative path; broken link after ADR-0056 move. Updated to new connections/ path. |

**A1 Summary:** 4 MANDATORY REWRITE (broken relative paths fixed), 3 PRESERVE (valid frontmatter), 2 VERIFIED-NEUTRAL (concept-only).

---

## Sub-scope A2 — Constitutional-artifact family-name disambiguation

| file:line | pattern | pre-text | post-text | disposition | rationale |
|-----------|---------|----------|-----------|-------------|-----------|
| governance-artifacts-and-graph-projections.md:14 | section header | `## Constitutional Artifacts` | `## Governance Artifacts` | REWRITE | Section header renamed to match file rename (ADR-0057); "Constitutional Artifacts" as section name implies the family-name class, not ADR-0035 subtype. |
| governance-artifacts-and-graph-projections.md:16 | "A constitutional artifact is" | `A constitutional artifact is any normative artifact…` | `A governance artifact is any normative artifact…` | REWRITE | Opening definition sentence uses family-name. |
| governance-artifacts-and-graph-projections.md:26 | "All constitutional artifacts are" | `All constitutional artifacts are commitments…` | `All governance artifacts are commitments…` | REWRITE | Family-name usage in summary statement. ADR-0035 "constitutional commitment" subtype appears separately in line 35 and is PRESERVED. |
| governance-artifacts-and-graph-projections.md:81 | "Every constitutional artifact has" | `Every constitutional artifact has two representations` | `Every governance artifact has two representations` | REWRITE | Family-name usage. |
| project-vision.md:260 | "constitutional artifacts" | "…dependencies across constitutional artifacts…" | "…dependencies across governance artifacts…" | REWRITE | Family-name usage in adoption section. |
| project-vision.md:264 | "constitutional artifacts first" | "…add frontmatter to constitutional artifacts first…" | "…add frontmatter to governance artifacts first…" | REWRITE | Family-name usage in adoption path recommendation. |
| README.md:40 | "every constitutional artifact" | "every constitutional artifact exists as text…" | "every governance artifact exists as text…" | REWRITE | Family-name usage in dual-representation summary. |
| discourse-as-governance.md:41 | "a constitutional artifact that" | "a constitutional artifact that governs future action" | "a governance artifact at the constitutional level that governs future action" | REWRITE | Ambiguity ruling: disambiguate via "at the constitutional level" phrasing per ADR-0035 subtype distinction. |
| hyperstition-as-coordination.md:58 | "constitutional artifacts say" | "…visions, roadmaps, and constitutional artifacts say should be true…" | "…visions, roadmaps, and governance artifacts say should be true…" | REWRITE | Family-name usage. |
| johar-neuroplastic-field.md:172 | "Spore's constitutional artifacts" | "Worth adding to Spore's constitutional artifacts or project vision" | "Worth adding to Spore's governance artifacts or project vision" | REWRITE | Family-name usage in research suggestion. |
| decision-memo.md:110 | "constitutional artifacts" in definition | "(constitutional artifacts)" | "(governance artifacts)" | REWRITE | Family-name label in normative dimension definition. |
| decision-memo.md:154 | "constitutional artifacts" in grammar derivation | "claims + attestation + constitutional artifacts" | "claims + attestation + governance artifacts" | REWRITE | Family-name usage in grammar derivation note. |

**Preserved (ADR-0035 subtype):**
- governance-artifacts-and-graph-projections.md:35 "constitutional commitments" — PRESERVED
- project-vision.md "Constitutional Commitments" section + "constitutional commitments" body usage — PRESERVED
- governance-artifacts-and-graph-projections.md §"Three senses" "constitutional commitments" — PRESERVED

**A2 Summary:** 12 REWRITE (family-name disambiguation), ADR-0035 subtype usage preserved throughout.

---

## Sub-scope A3 — Federation-protocol scope-conditioning

| file:line | pattern | pre-text | post-text | disposition | rationale |
|-----------|---------|----------|-----------|-------------|-----------|
| federation-protocol.md:89 | "These hold at every scale" | "These hold at every scale and are non-negotiable:" | "These hold at the scales Spore has reached and are non-negotiable:" | SCOPE-CONDITION | ADR-0031/0032/0044 scope-conditioning discipline: "at every scale" is universality language; qualified to "at the scales Spore has reached" matching established pattern. |

**A3 Summary:** 1 SCOPE-CONDITION.

---

## Sub-scope C — Governance-memory layer→pattern

| file:line | pattern | pre-text | post-text | disposition | rationale |
|-----------|---------|----------|-----------|-------------|-----------|
| docs/README.md:3 | "governance-memory layer" | "…governance-memory layer that enables…" | "…governance-memory pattern that enables…" | REWRITE | ADR-0029 renamed concept from layer to pattern. Live-canon doc. |
| johar-neuroplastic-field.md:126 | "governance-memory layer" | "Memory → governance-memory layer + IC's five-layer model" | "Memory → governance-memory pattern + IC's five-layer model" | REWRITE | ADR-0029 rename propagation. Research bridge note (live-canon doc). |
| decision-memo.md:73 | "governance-memory layer" | "…governance-memory layer + spec DAG self-hosting…" | "…governance-memory pattern + spec DAG self-hosting…" | REWRITE | ADR-0029 rename propagation. Live synthesis doc. |

**Preserved per ambiguity ruling:** `docs/research/2026-04-03/*` historical snapshots not touched.

**C Summary:** 3 REWRITE.

---

## Sub-scope D1 — Self-similarity residual

| file:line | pattern | pre-text | post-text | disposition | rationale |
|-----------|---------|----------|-----------|-------------|-----------|
| decision-memo.md:305 | "self-similarity principle (node-as-graph)" | "Spore's self-similarity principle (node-as-graph) serves the same function — each holon has its own internal coordination ecology" | "Spore's holons-at-scale recursion serves the same function — each holon hosts its own internal coordination ecology" | REWRITE | ADR-0044 deleted self-similarity / node-as-graph framing. Functional claim (each holon hosts own coordination ecology) preserved. Vocabulary updated to current canon (holons-at-scale recursion). |

**D1 Summary:** 1 REWRITE.

---

## Sub-scope D2 — Stale primitive counts

| file:line | pattern | pre-text | post-text | disposition | rationale |
|-----------|---------|----------|-----------|-------------|-----------|
| open-civics.md:79 | "ten primitives" | "…with ten primitives, five published patterns…" | "…with 9 primitives (3 structural: field / holon / membrane + 6 verbs: …), five published patterns…" | REWRITE | ADR-0050 admitted joint-commitment as 9th primitive (not 10th; prior count was pre-ADR-0050 era "ten" which included stale members). Updated to 9 with current roster. |
| open-civics.md:165 | "Spore's ten primitives" | "…compositions of Spore's ten primitives…" | "…compositions of Spore's 9 primitives…" | REWRITE | Same as above. |
| civic-infrastructure-convergence.md:134 | "the grammar's ten primitives" | "…compositions of the grammar's ten primitives — holon, membrane, signal, claim, evidence, attestation, intent, commitment, artifact, event…" | "…compositions of the grammar's 9 primitives (3 structural: field / holon / membrane + 6 verbs: …)…" | REWRITE | Same. Note: original listed 10 items including "artifact" and "event" which are not current primitives; replaced with current accurate 9-primitive roster per ADR-0044 + ADR-0049 + ADR-0050. |

**D2 Summary:** 3 REWRITE.

---

## Total disposition summary

| Sub-scope | Hits | MANDATORY REWRITE | VERIFIED-NEUTRAL | PRESERVE | SCOPE-CONDITION |
|-----------|------|-------------------|-----------------|----------|----------------|
| A1 | 9 | 4 | 2 | 3 | 0 |
| A2 | 12 | 12 | 0 | 0 | 0 |
| A3 | 1 | 0 | 0 | 0 | 1 |
| C | 3 | 3 | 0 | 0 | 0 |
| D1 | 1 | 1 | 0 | 0 | 0 |
| D2 | 3 | 3 | 0 | 0 | 0 |
| **Total** | **29** | **23** | **2** | **3** | **1** |

## Cascade-miss parking items (out-of-scope ADR-0057 residue)

The following files carry `spore.constitutional-artifacts` doc_id references outside the 13-file target set. These are ADR-0057 cascade-miss parking items per strict-scope rule. Operator decides whether to address in follow-on ADR.

(Scoped informational scan results — see verification manifest for full list if run)
