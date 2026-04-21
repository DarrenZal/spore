# Fair-Use Spot Check

- Purpose: satisfy AC16 Part 3 for `corpus-foundational-review-v1` by recording the manual fair-use audit surface for any research R-claims carrying personal-snapshot / access-limited tags.
- AC16 Part 3 reference: random 1% sample of tagged research R-claims, with quote-paraphrase checked against the 200-word fair-use window.
- Audit date: 2026-04-21
- Branch: `corpus-review/v1`

## Method

Tag inventory was run with the plan-specified grep commands:

```bash
grep -rn "\[tag: citation-uncheckable\]" /Users/darrenzal/projects/spore/docs/research/ 2>/dev/null
grep -rn "\[tag: primary-access-limited\]" /Users/darrenzal/projects/spore/docs/research/ 2>/dev/null
```

For the eligible-population check, the research corpus itself was also inspected directly:

```bash
grep -rn "\[tag: citation-uncheckable\]" /Users/darrenzal/projects/spore/docs/research/corpus-review/research-*.md 2>/dev/null
grep -rn "\[tag: primary-access-limited\]" /Users/darrenzal/projects/spore/docs/research/corpus-review/research-*.md 2>/dev/null
```

## Tag Inventory Counts

| Scope | `[tag: citation-uncheckable]` | `[tag: primary-access-limited]` |
|---|---:|---:|
| Raw `docs/research/` grep inventory | 1 | 1 |
| `docs/research/corpus-review/research-*.md` only | 0 | 0 |

The two raw `docs/research/` hits are the plan's rule-description line in `docs/research/planning/corpus-foundational-review-v1-plan.md:147`, not research R-claims.

## R-Claim Count With Personal-Snapshot Tags

- Eligible tagged R-claims in `docs/research/corpus-review/research-*.md`: `0`

## 1% Sample Size

- `ceil(0 x 0.01) = 0`

## Spot-Check Results

| Sampled R-claim | Source file | Quoted words | Fair-use window | Result |
|---|---|---:|---|---|
| none | n/a | 0 | `<= 200` words | zero eligible tagged R-claims; no sample drawn |

## Conclusion

Zero-sample outcome. No research R-claims in the current corpus carry `citation-uncheckable` or `primary-access-limited` tags, so AC16 Part 3 has no eligible population to sample. No fair-use exception was observed or required.
