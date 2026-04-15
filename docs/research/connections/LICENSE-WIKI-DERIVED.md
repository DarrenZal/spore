# License Notice — Bridge Notes Derived from P2P Foundation Wiki

## Upstream license

The P2P Foundation wiki (https://wiki.p2pfoundation.net) is licensed under **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**.

- License: https://creativecommons.org/licenses/by-sa/4.0/
- Upstream repo mirror (live-sync): `/Users/darrenzal/projects/p2pfoundation-wiki/` (branch `live-sync`)
- Upstream license file verified: `/Users/darrenzal/projects/p2pfoundation-wiki/LICENSE*`

## ShareAlike obligation for derived bridge notes

Bridge notes in this directory that are **derived-claims dominant** — defined as notes where ≥50% of their source claims (C-claims) carry `orn:p2p-wiki.page:*` in the anchor string — are published under **CC BY-SA 4.0**. Derivative and downstream works must carry the same ShareAlike terms.

Bridge notes that are primarily original synthesis with the wiki as one of several inputs (<50% wiki-anchored C-claims) retain the repo's default license. The `sources:` frontmatter array still satisfies the CC BY-SA attribution requirement for the cited wiki pages, regardless of overall license classification.

## Per-note classification check

```bash
total=$(grep -cE '^\*\*C[0-9]+\*\* \[confidence:' <note>.md)
wiki=$(grep -cE '^\*\*C[0-9]+\*\* \[confidence:.*orn:p2p-wiki\.page:' <note>.md)
[ $((wiki * 2)) -ge "$total" ] && echo "CC BY-SA required" || echo "repo-default license OK"
```

## Attribution inside derived notes

Every wiki-sourced bridge note carries:

1. **Frontmatter `sources:` array** — each cited wiki page as an entry with `url`, `title`, `rid: orn:p2p-wiki.page:<Slug>`, and `license: CC BY-SA 4.0`.
2. **Per-claim linkback** — the RID embedded in each C-claim's `[anchor: ...]` bracket.
3. **Body-level `## Attribution` section** — with the text: "Wiki sources cited in this note are from the P2P Foundation wiki (https://wiki.p2pfoundation.net), licensed CC BY-SA 4.0. Derivative claims in this note inherit ShareAlike obligations for downstream use."

## Scope

This notice covers bridge notes authored under the P2P Foundation wiki intake plan (`/Users/darrenzal/.claude/plans/sequential-questing-sparrow.md`) beginning 2026-04-15. Non-wiki bridge notes in this directory (pre-existing or subsequent) are unaffected.

External publication of any bridge note classified as "CC BY-SA required" above must carry the CC BY-SA 4.0 notice and attribution; non-compliance would breach the upstream license.
