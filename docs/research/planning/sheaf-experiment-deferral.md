# Sheaf Experiment Deferral

## Status

**Deferred as of 2026-04-12.**

The spec-DAG sheaf experiment should remain dormant for now.

## Why

Bosca-Ghrist gives candidate diagnostics for already-specified cellular sheaves. Spore's governed spec DAG is real and operational, but it is not yet a specified sheaf: the repo does not currently define stalk contents, edge restriction maps, or the rigor level of the object itself (strict cellular sheaf vs. approximate vs. sheaf-like). That means Fiedler, cohomology, and sheaf-Laplacian language outrun the current typing discipline if treated as runnable diagnostics. Current project priorities are elsewhere: Poietic Match Phase 0 setup and the first real operational evidence capture after the Victoria workshop window. The sheaf experiment is therefore preserved as a research lane, not an active execution target. See `docs/research/connections/bosca-ghrist-local-to-global.md` for the specific source that surfaced the typing gap.

## Revival Triggers

Revive the spec-DAG sheaf-specification plan only if one or more of these conditions holds:

1. **A real stuck-promotion incident needs sharper localization.** Current SQL, clustering, and qualitative review fail to say where a promotion is blocked, and a mathematically typed bottleneck or obstruction signal would plausibly change the decision.

2. **The spec DAG has enough stable semantics to type.** There is a narrow slice of the DAG where node meaning, edge meaning, and compatibility criteria are stable enough that stalks and restriction maps can be written down without hand-waving.

3. **Simpler baselines are not enough.** Before spectral machinery, Spore should try cheaper alternatives: dependency-edge inconsistency scoring, document-embedding distance on linked specs, raw graph chokepoint metrics, and section-to-section contradiction review. If those fail to localize the problem or produce usable signals, the case for sheaf machinery strengthens.

4. **Poietic Match or a downstream implementation like the Bioregional Knowledge Commons (BKC) exposes a real coordination-gluing problem.** An operational coordination case appears where the important question is not merely semantic similarity but whether commitments or coordination states compose into a consistent whole under typed compatibility rules.

5. **A bounded pilot can be time-boxed.** The work should restart only as a small pilot with a fixed slice, fixed output, and explicit stop condition. Not as a general "formalize Spore."

## First Pilot Scope If Revived

If revived, the first pilot should use the narrowest slice that already has operational structure in the repo:

- Node type: governed docs under `docs/`
- Edge type: local `depends_on` edges only
- Exclude: `relates_to`, cross-project semantic analogies, promotion decisions, review claims, and membrane-governance semantics
- Use one small local subgraph only
- Start with hand-authored or tightly rule-based restriction maps, not learned maps
- Require comparison against simple baselines before any spectral result counts as added value

## Discipline Rule

No Fiedler, cohomology, or sheaf-Laplacian claims should be treated as operational Spore diagnostics until the underlying object is explicitly typed. Even after typing, no spectral signal counts as added value until it beats simpler baselines on a bounded pilot.

## Working Notes

Full working notes for the dormant spec-DAG sheaf plan and decision rationale live in the local planning workspace.
