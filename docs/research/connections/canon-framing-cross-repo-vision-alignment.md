---
doc_id: spore.connection.canon-framing-cross-repo-vision-alignment
doc_kind: research
status: draft
research_subkind: canon_framing
disposition: clarify existing terms
depends_on: []
relates_to:
  - spore.project-vision
  - ic.project-vision
  - spore.canon-decision.protocol-audience-declaration-standard
  - ic.canon-decision.repo-topology-ratification
concepts:
  - repo-topology
  - constitutional-commitments
---

# Canon framing: vision-doc audience and neighbor-map alignment across Spore and IC

This note carries the shared narrative for Phase 7 `round-cross-repo-vision-alignment`, covering findings F-006 (Spore vision missing an audience/scope declaration) and F-010 (IC vision mixing canon-bearing sibling repos with proving-ground systems in one incompatible neighbor map). The coordinated outcome is **vision-doc hygiene alignment, not a new topology decision**. Per-repo decision records: `spore:ADR-0027-project-vision-audience-declaration` and `intelligence-commons:ADR-0016-project-vision-neighbors-map-reconciliation`.

## §1 Why this is one cross-repo round

Both findings sit in the same canon surface: each repo's root `project-vision.md`.

That surface has two reader-orientation jobs:

1. tell the reader who the document is for and what interpretive background it assumes; and
2. tell the reader how the project relates to adjacent canon-bearing repos and to the operational systems that test or instantiate the canon.

Spore is missing the first job. Intelligence Commons is doing the second job inconsistently. Handling them together keeps the two vision docs aligned on what a root vision document is supposed to do before the reader drops into foundations, protocols, or proving-ground detail.

## §2 Audience declaration pattern for vision docs

The narrow audience already exists in canon-adjacent governance text. `corpus-foundational-review-methodology.md` states that the operative audience is the solo operator through active contributors across Spore, Intelligence Commons, and Poietic Match. F-006 shows that this orientation remains external to the root vision surface.

The repair pattern is to add a short top-level section, `## Intended audience and scope`, near the top of the vision doc. The section should stay compact and should carry four declaration lines:

- `Audience`
- `Prerequisites`
- `Scope`
- `Out of scope`

This mirrors the successful protocol-surface pattern standardized by `spore:ADR-0023-protocol-audience-declaration-standard`, but it is not a copy-paste rule. Vision docs are constitutional orientation surfaces, not operator protocols. Their declaration block should therefore emphasize reader entry conditions and document boundaries rather than execution procedure.

The point is not to broaden the vision into a tutorial. The point is to stop leaving the document's narrow reader contract implicit.

## §3 Neighbor-map reconciliation pattern for vision docs

F-010 is not a dispute about whether BKC / Octo or `koi-processor` matter. They do. The contradiction is that IC currently presents multiple maps of neighboring systems as if they answered the same question.

Those maps answer different questions and should be layered explicitly:

- **Canon-bearing sibling repo map**: which repos currently participate in the shared canon topology
- **Proving-ground / implementation map**: which live systems supply production evidence, execution surfaces, and implementation snapshots

Per the already-ratified topology ADRs (`spore:ADR-0020`, `ic:ADR-0010`), the canon-bearing sibling repo map is the Spore / Intelligence Commons / Poietic Match trio. BKC / Octo and `koi-processor` remain important, but as operational neighbors rather than additional canon-bearing siblings.

This is why the right F-010 repair is **layered**, not canonicalize-one-and-delete-the-rest:

- canonicalize-only would erase real proving-ground context that the learning loop still depends on
- merge-into-one-table would keep collapsing canon-bearing and operational roles into the same category
- layered presentation preserves both maps while making their scopes legible

## §4 Repo-local implications

- **Spore** should add the audience/scope declaration directly to `docs/project-vision.md` and harvest its audience line from the methodology's existing narrow-audience statement.
- **Intelligence Commons** should rewrite the opening neighbor section so it distinguishes:
  - the canon-bearing sibling repos (`Spore`, `Intelligence Commons`, `Poietic Match`)
  - the proving-ground / implementation surfaces (`BKC` / `Octo`, `koi-processor`, or future live intelligence systems)

The IC edit can retain both maps, but it must stop calling the proving-ground map the same "three repos" that define the canon-bearing topology.

## §5 What this round does not do

- It does not reopen the ratified repo topology.
- It does not make BKC / Octo or `koi-processor` canon-bearing repos.
- It does not broaden Spore's vision into general-public onboarding copy.
- It does not require every future vision doc to use identical prose, only the same orientation discipline.

## §6 Related ADRs

- `spore:ADR-0027-project-vision-audience-declaration`
- `intelligence-commons:ADR-0016-project-vision-neighbors-map-reconciliation`
- `spore:ADR-0023-protocol-audience-declaration-standard`
- `spore:ADR-0020-repo-topology-ratification`
- `intelligence-commons:ADR-0010-repo-topology-ratification`
