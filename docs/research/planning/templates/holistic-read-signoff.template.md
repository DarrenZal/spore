---
doc_id: spore.planning.holistic-read-signoff-template
doc_kind: planning
status: draft
depends_on: []
---

# Holistic-Read Sign-Off Template

A **blocking gate**, not a recommendation. Operationalizes the un-self-validatable judgment **(a)** from
[`sahely-intake-arc-method-retrospective.md` §5](../../connections/sahely-intake-arc-method-retrospective.md)
and [`learning-field-intake-protocol.md` §15a](../learning-field-intake-protocol.md): a "zero new pressure /
nothing-found / done" verdict that *emerges* from many atomized, framing-note-only agents is a
**false-negative-on-aggregate** risk — no single agent read the corpus as a whole, so a theme that is weak in
every individual note but threshold-crossing in aggregate is systematically under-detected. The fan-out
structure that makes batch authoring fast is exactly the structure that cannot see an aggregate signal.

Automation cannot self-validate this. The residual is a human (or one cross-corpus agent) reading the corpus
**holistically** and signing off. This template makes the sign-off's *presence + structure* checklistable — its
*content* stays a judgment by design (do not automate the judgment away; only standardize its shape).

## When this gate fires (trigger)

Before any phase declares **"zero new canon-pressure / nothing-found / done"** — **especially** immediately
after an atomized framing-note-only fan-out (a Workflow author→verify wave, a multi-note intake, a propagation
sweep). The per-artifact skeptic and the completeness audit do NOT discharge this: they check per-note
correctness and per-item doneness, neither of which is an aggregate read.

## Reader profile

**Exactly one reader** who reads the corpus **as a whole, not note-by-note** — either:
- a human operator, or
- a single cross-corpus agent given the *entire* wave's output at once (NOT one-agent-per-note).

The point is a single vantage that can see across notes. A fan-out of per-note readers re-creates the very
blind spot this gate exists to close.

## Reading scope (what the reader actively scans for)

1. **Cross-note term-usage drift** — the same concept named differently across notes (the slug-fragmentation /
   vocabulary-drift the frozen-concepts discipline guards against, surfacing at read-time).
2. **≥5-term recurrence** — a term/theme recurring across ~5+ notes that no single note flagged as load-bearing.
3. **Weak-per-note-but-strong-in-aggregate themes** — the canonical false-negative: each note rates it minor;
   the aggregate crosses a cluster-counting threshold.
4. **Cross-note contradictions** — two notes that disagree (citation, disposition, or claim) without either
   noticing.
5. **Capstone-accuracy check** — read the capstone/retrospective and confirm it faithfully reflects the corpus
   it summarizes (no over- or under-claim).
6. **Spot-read 1–2 notes per thematic wave** — end-to-end, not excerpt-only, to ground the aggregate read.

## Sign-off format (fill every field; a blank field = gate NOT satisfied)

```
HOLISTIC-READ SIGN-OFF
- reader:               <name / "agent: <type>">
- date:                 <YYYY-MM-DD>
- corpus scope:         <what was read as a whole — wave(s), note count, repo(s)>
- reading method:       <human full-read | single cross-corpus agent over the full wave>  (NOT per-note fan-out)
- aggregate signals found:
    - term-usage drift:           <none | list>
    - >=5-term recurrence:        <none | list>
    - weak-per-note/strong-aggregate: <none | list>
    - cross-note contradictions:  <none | list>
- capstone-accuracy check:  <accurate | discrepancies: ...>
- verdict on the "zero new pressure / done" claim:  <UPHELD | OVERTURNED — new pressure: ...>
- confidence:           <high | medium | low>  (+ one sentence why)
```

## The checklistable item (hard gate before "done")

> **Holistic-read sign-off present, all fields filled, verdict recorded, confidence recorded.**

A missing sign-off, any blank field, or an unrecorded confidence = the "done"/"zero-pressure" verdict is **not
earned**. The reader's *judgment* (UPHELD vs OVERTURNED) is theirs; the gate only enforces that the read
happened and is documented. Pairs with the `darren-workflow:skeptic-of-skeptics` completeness audit (§15) and
the checklist-coverage meta-audit (§4f / §15b) — together they discharge all three of the retrospective §5
risks.
