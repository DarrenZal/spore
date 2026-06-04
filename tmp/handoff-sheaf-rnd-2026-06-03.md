# Handoff — sheaf R&D + open threads (post-compaction pickup, 2026-06-03)

Paste/point the fresh session here. Spore workstream. **Step 0: re-verify state before acting** (repo HEADs,
validator baseline, task currency) — this handoff reflects 2026-06-03 ~13:00 PDT.

## Read order
1. This handoff.
2. `spore/tmp/sheaf-rnd-synthesis-2026-06-03.md` — the strategy synthesis (two-sim through-line + people-as-sensors deployment direction). **The main takeaway doc.**
3. `spore/tmp/sheaf-sensor-sim/FINDINGS.md` (v0 sensors) + `FINDINGS-participatory.md` (v0.5 mapping) — the honest results.
4. Plans: `~/.claude/plans/participatory-mapping-seam-sim.md` (active wedge, v0.6 next) + `~/.claude/plans/sheaf-sensor-coherence-sim.md` (v0, has the v1 oscillation escalation scoped) + `~/.claude/plans/c1-lead-wedge-bundle-coherence-diagnostic.md` (financing, CLEAN-BUILD-READY/parked).

## Thread state (all at clean rest)
- **Sheaf R&D (this session's work — NOT yet in CLAUDE.md):** v0 (sensors) + v0.5 (participatory mapping) sims built, run, findings written, synthesis written. **Conclusion: people-as-sensors / participatory mapping is the wedge; sheaves win on heterogeneous-lens *seams*, not anomaly detection.** All artifacts in `spore/tmp/sheaf-sensor-sim/` + the two tmp/ md files above. **Uncommitted** (working prototypes; no canon touched).
- **Track B — Spore identity reframe:** proposal `docs/research/planning/reframing/reframing-spore-identity.md` committed `652e021` + pushed; **status cooling-off, eligible 2026-06-09**; ADR reminder = personal-koi **task #3408** (due 2026-06-09). On/after 2026-06-09: draft the identity-reframe ADR (README:7 + project-vision:10 + README:13 in sync; final wording "a coordination grammar for collective agency across plural, sovereign systems — for local-to-global coherence at the scales it has reached"). No canon edited yet.
- **C1 — financing bundle-coherence:** `~/.claude/plans/c1-lead-wedge-bundle-coherence-diagnostic.md` skeptic-verified **CLEAN-BUILD-READY**; **parked, auth-gated** (cross-stream koi-processor/BKC + IC/bregion-econ spec; ~2-3 day build). The v0.5 sim sharpened its pitch: frame as *joint-coherence/obstruction*, not per-project scoring.

## Next steps (operator picks)
1. **v0.6 participatory sim** — lift recall (richer/overlapping lenses + H¹/connected-component seam aggregation); Johar oscillation/recovery-arc; latent community discovery. (In-stream, no auth, free ground truth.)
2. **Real data** — instantiate v0.5 on the Victoria workshop + KOI discourse graph **once KOI semantic search is responsive** (it was timing out today — backend up, embedding/search path slow; `/tasks/stats` fast, `unified_search`/`recall` >30s).
3. **External write-ups** (derive from the synthesis, through verify-draft gate): grant coordination-health framing; Mehul financing-as-joint-coherence brief; Victoria workshop analysis design.
4. **Track B ADR** on/after 2026-06-09 (task #3408).
5. **C1 build** when operator grants cross-stream auth.
6. **Ground the Cascadia specifics** — retry KOI for actual data/people/projects/sensor networks (couldn't today).

## Discipline / gotchas
- **Validator baseline 9 errors / 267 warnings EXACT** — `cd ~/projects/spore && python3 scripts/validate_spec_dag.py`. No Spore canon touched this session; sims are tmp/ only.
- **tmp/ artifacts uncommitted** — prototypes; graduate to a real home (or the Regen sensor-SDK repo) if they earn.
- **Codex state:** `gpt-image-2` 400 FIXED (config, by parallel session `5b2bb696`); direct `codex exec` works; but `/review-plan` **harness still flaky-hangs at the 600s watchdog at `high`** → use `darren-workflow:skeptic` (the substitute that caught every real issue this session: the graph-Laplacian-collapse blocker in v0, the fairness/normalization/observability should-fixes in v0.5). The scope→skeptic→fix→re-verify→build loop is the proven cadence.
- **Don't collide with C0** (the parallel session's KOI discourse-graph work) — coordinate on shared koi-processor surfaces.
- **Stream scope:** Spore + related canons; cross-stream (koi-processor/BKC code, CIE, RC-financing-exec) needs operator opt-in. KOI-first for entity/project/people questions.
- **Memory note:** the `feedback_intake_verification.md` lesson recurred usefully — anchor load-bearing numbers to verified output (the skeptic + the sims' guards did this).

## Optional: durable chronicle
This session's sheaf-R&D arc is captured in the tmp/ artifacts but NOT in `spore/CLAUDE.md` (last entry is the 14c1e0dd Track-B/C1 session from earlier today). A `/end` would add a CLAUDE.md "Today" entry + session-history row for durable cross-session continuity — recommended before fully moving on, but the handoff + FINDINGS + plans are sufficient to resume.
