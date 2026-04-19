# Corpus Foundational Review v1 — Research Inputs

Staging area for the 17 tradition-specific research syntheses + capstone that feed
corpus-foundational-review-v1 (plan at `~/.claude/plans/corpus-foundational-review-v1.md`).

**Status:** 17/18 ingested (2026-04-19). Capstone (Prompt 18) pending.

Files are raw research inputs — not yet converted to R-claim format. R-claim ingestion
happens in Phase 2 per the plan.

## Files

| # | File | Tradition | Source tool |
|---|------|-----------|-------------|
| 01 | `research-philosophy-collective-agency.md` | Philosophy of Collective Agency | claude |
| 02 | `research-marl.md` | MARL / Multi-Agent Systems | chatgpt-or-gemini |
| 03 | `research-commons-governance.md` | Commons Governance | claude |
| 04 | `research-distributed-systems.md` | Distributed Systems Primitives | chatgpt-or-gemini |
| 05 | `research-category-theory-sheaves.md` | Category Theory / Sheaves | chatgpt-or-gemini |
| 06 | `research-agent-based-modeling.md` | Agent-Based Modeling | chatgpt-or-gemini |
| 07 | `research-viable-system-model.md` | Viable System Model | claude |
| 08 | `research-care-ethics.md` | Care Ethics / Feminist Economics | chatgpt-or-gemini |
| 09 | `research-trust-reputation.md` | Trust Networks / Reputation Systems | chatgpt-or-gemini |
| 10 | `research-rea-valueflows.md` | REA / ValueFlows | claude |
| 11 | `research-autopoiesis-4e.md` | Autopoiesis / 4E Cognition | claude |
| 12 | `research-pluriversal.md` | Pluriversal / Indigenous Governance | chatgpt-or-gemini |
| 13 | `research-canonical-layering.md` | Canonical Layering Conventions (meta) | claude |
| 14 | `research-repo-topology.md` | Repo-Topology Patterns (meta) | chatgpt-or-gemini |
| 15 | `research-governance-process.md` | Governance-Process Meta-Research | claude |
| 16 | `research-audience-scoping.md` | Audience / Reader-Scoping (meta) | chatgpt-or-gemini |
| 17 | `research-structured-disagreement.md` | Validation via Structured Disagreement | claude |
| 18 | `research-capstone.md` | CAPSTONE — synthesis of 1–17 | **pending** |

## Conversion notes

- Claude "compass_artifact" outputs are native markdown; dropped in verbatim with frontmatter.
- ChatGPT/Gemini PDFs converted via `pdftotext` (default flow mode). Inline footnote numbers are preserved but not hyperlinked; footnote lists survive at the end of each doc. Markitdown was tried first but fragmented paragraphs on every footnote number.
- `source_tool: chatgpt-or-gemini` is a placeholder where I couldn't tell which web client produced the PDF. User may refine.
- Original files saved to `originals/` subdir for reproducibility / re-conversion.

## Next step

Run Prompt 18 (capstone) in a web deep-research tool, attaching all 17 syntheses above. Drop the result here as `research-capstone.md` (same frontmatter pattern). Then Phase 0 of the plan formalizes the `corpus-review/v1` branch and commits this whole directory.
