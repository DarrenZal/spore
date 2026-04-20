# Repo topology snapshot

Method note: strict/broad edge counts follow the handoff literally (`spec:<repo>.*` for strict; `spec:<repo>.*` plus `org:<repo>-learning-field*` for broad). Current corpus practice still relies more heavily on raw `doc_id`-style references (`spore.*`, `ic.*`, `pm.*`), so the strict URI counts are conservative.

Coordination-artifact counts are heuristic document counts, not git-session counts: strict = ADR-eligible canon docs containing cross-repo references; broad = the same plus `connections/` and planning-like surfaces where they exist.

## spore
- Shared concepts with intelligence-commons: `commitment-pooling, memory-governance, boundary-commoning, knowledge-commons, market-dependence, power-capture, coordination-substrate, polycentric-governance, pluriversal-commoning, interoperability-as-institutional, curation-valuation-limitation-exchange, mutual-credit`.
- Shared concepts with poietic-match: `commitment-pooling, memory-governance, boundary-commoning, knowledge-commons, market-dependence, power-capture, coordination-substrate, polycentric-governance, pluriversal-commoning, interoperability-as-institutional, curation-valuation-limitation-exchange, mutual-credit`.
- Cross-repo edges: strict `0`, broad `0`.
- Coordination artifacts: strict `13`, broad `109`.
- Contributor overlap with the core trio: `DarrenZal`.
- Velocity: `103` commits in the last 4 weeks (`~25.75/week`).

## intelligence-commons
- Shared concepts with spore: `commitment-pooling, memory-governance, boundary-commoning, knowledge-commons, market-dependence, power-capture, coordination-substrate, polycentric-governance, pluriversal-commoning, interoperability-as-institutional, curation-valuation-limitation-exchange, mutual-credit`.
- Shared concepts with poietic-match: `commitment-pooling, memory-governance, boundary-commoning, knowledge-commons, market-dependence, power-capture, coordination-substrate, polycentric-governance, pluriversal-commoning, interoperability-as-institutional, curation-valuation-limitation-exchange, mutual-credit`.
- Cross-repo edges: strict `0`, broad `1`.
- Coordination artifacts: strict `9`, broad `26`.
- Contributor overlap with the core trio: `DarrenZal`.
- Velocity: `51` commits in the last 4 weeks (`~12.75/week`).

## poietic-match
- Shared concepts with spore: `commitment-pooling, memory-governance, boundary-commoning, knowledge-commons, market-dependence, power-capture, coordination-substrate, polycentric-governance, pluriversal-commoning, interoperability-as-institutional, curation-valuation-limitation-exchange, mutual-credit`.
- Shared concepts with intelligence-commons: `commitment-pooling, memory-governance, boundary-commoning, knowledge-commons, market-dependence, power-capture, coordination-substrate, polycentric-governance, pluriversal-commoning, interoperability-as-institutional, curation-valuation-limitation-exchange, mutual-credit`.
- Cross-repo edges: strict `0`, broad `0`.
- Coordination artifacts: strict `9`, broad `15`.
- Contributor overlap with the core trio: `DarrenZal`.
- Velocity: `58` commits in the last 4 weeks (`~14.5/week`).

## darren-workflow
- Shared concepts with core repos (text-grep against Phase 2 roster; analysis-only approximation): `knowledge-commons, federation-protocol, mycorrhizal-federation-protocol, memory-layers, intelligence-primitives, coordination-grammar, learning-membrane, learning-field, knowledge-graph, memory-layer-model, comparative-intake, restriction-maps`.
- Cross-repo edges: strict `0`, broad `0`.
- Coordination artifacts: strict `0` (outside canon scope), broad `6`.
- Contributor overlap with core repos: `DarrenZal`.
- Velocity: `60` commits in the last 4 weeks (`~15.0/week`).

## flowcoding
- Shared concepts with core repos (text-grep against Phase 2 roster; analysis-only approximation): `knowledge-commons, intelligence-primitives, coordination-grammar, failure-modes, governance-memory, learning-field, discourse-graph, relational-agency, linguistic-closure, knowledge-graph, constitutional-commitments, agent-commons`.
- Cross-repo edges: strict `0`, broad `0`.
- Coordination artifacts: strict `0` (outside canon scope), broad `2`.
- Contributor overlap with core repos: `DarrenZal`.
- Velocity: `9` commits in the last 4 weeks (`~2.25/week`).

## koi-processor
- Shared concepts with core repos (text-grep against Phase 2 roster; analysis-only approximation): `knowledge-commons, source-claims, learning-field, discourse-graph, knowledge-graph, bi-temporal, domain-specific, koi-net, evidence, commitment, memory, field`.
- Cross-repo edges: strict `0`, broad `2`.
- Coordination artifacts: strict `0` (outside canon scope), broad `7`.
- Contributor overlap with core repos: `DarrenZal`.
- Velocity: `133` commits in the last 4 weeks (`~33.25/week`).
