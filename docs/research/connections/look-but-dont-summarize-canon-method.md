---
doc_id: spore.connection.look-but-dont-summarize-canon-method
doc_kind: connection
status: draft
depends_on:
  - spore.representation-authority
  - spore.positioning.agents-and-canons
relates_to:
  - spore.connection.canon-rebuild-arc-method-retrospective
  - spore.positioning.canon-coverage-gaps
  - spore.connection.bkc-seven-layer-stack-as-instance-instantiation
date: 2026-04-29
author: darren-zal
---

# Look But Don't Summarize — As Canon-Method

This connection note articulates a discipline that already lives inside Spore's representation-authority foundation as a canon-method: when AI agents navigate Spore canon, they should **read the prose, not their own (or another agent's) summary of it**, and any AI-summary they do produce should carry **lower authority than the source it derives from**.

The discipline is not new; it is committed at `spore.representation-authority` §4.5 (agent-summary as fifth representation layer; lower-priority than its inputs, always). What this note adds is the canon-method framing: surfacing the discipline as a reusable practice for any AI agent encountering Spore-shaped canon, with empirical validation from the 2026-04-28 canon-navigability load-bearing test.

## §1 The Discipline

`spore.representation-authority` §4.5 commits four claims:

1. **Agent-summary is a representation layer** — alongside text, graph, sensor, and attestation.
2. **Agent-summary is always lower-priority than its inputs** — it carries no independent grounding; it inherits authority-weight from the provenance of whatever it summarises.
3. **Inter-layer conflict** — when an agent-summary disagrees with the underlying text or sensor or attestation it derives from, the source wins by default; appeal-protocol applies if the source itself is contested.
4. **Scope-condition for canon-citability** — F4 §I1 narrow scope explicitly excludes "canonical-AI-interpretations routinely consulted as authority"; that's I2 territory and is **deferred** as a future-ADR-shape candidate (Sub-C: AI-summary authority + evaluation).

These four claims are doctrine. The canon-method below is how to *apply* them when navigating canon as an AI agent.

## §2 Why This Is Canon-Method, Not Just A Constraint

A constraint says "don't do X." A canon-method says "here is the discipline; here is when it applies; here is how to recognise the failure mode."

The discipline:

- **Look at canon.** Read the prose at the canonical path. Cite by `path:line` or `spore:ADR-NNNN-<slug>` or `spore.<doc>` form.
- **Don't read in summary form** as if the summary carried canon authority. If you produce a summary for your own use, treat it as a navigation aid, not as a source you can quote-and-rely-on for downstream decisions.
- **If you must produce an AI-summary that another agent or human will read**, attach provenance: which source layers fed the summary, whose summary it is, when it was generated, what its scope is. The summary's authority then equals the lowest-authority input it depends on.
- **At canon roots**, the absence of an AI-summary is **not** a gap to be filled. It is the canon discipline doing its job: preventing pre-emptive flattening of multi-claim truths-in-tension into a single readable paragraph.

Why this last point matters: a summary at canon root would tempt every navigator to read the summary instead of the prose. Once that pattern sets in, the canon's actual claims drift away from what readers (human or AI) cite. F4 §4.5 prevents the drift at the representation layer; this canon-method extends the prevention to the navigator's habit.

## §3 Empirical Validation — Load-Bearing Test Q3 §5

The 2026-04-28 canon-navigability load-bearing test (synthesis memo at `tmp/canon-navigability-load-bearing-test-2026-04-28.md`; agent verbatim report at `tmp/canon-navigability-agent-report-2026-04-28.md`) ran a recursive Q3: *"How does Spore think about AI agents using its canon?"*

The agent's Q3 §5 finding, reproduced as primary evidence for this canon-method:

> "For Q3, the question is **deliciously recursive**: would an AI-summary at the canon root help an AI agent answering 'how does Spore think about AI agents using its canon?'
>
> Answer: **almost certainly misleading**. The integrating insight at agents-and-canons.md:38-39 lives in the frame's *deliberately under-specified* state. An AI-summary would be tempted to either over-resolve it ('Spore commits to canons-as-AI-navigable-artifacts as foundation doctrine' — false; it's positioning, draft) or under-resolve it ('Spore has not committed to this frame' — also false; F4, F8, F1, instance-model commit the categories).
>
> The honest read requires holding both: *categories committed, machinery deferred, integrating frame articulated as draft positioning, three future-ADR-shape candidates marker-flagged.* That is a 4-claim truth held in tension. AI-summaries by design *compress*. Compressing this truth corrupts it.
>
> **For Q3, the absence of AI-summary at the root is the load-bearing feature, not a gap.**"

The agent reached this conclusion *while running the test*. The recursive design forced the AI agent to confront the discipline at the very point where summarising would have made the test trivially succeed at the surface and fail at the substance. The test held; the discipline held.

This is the strongest available empirical evidence that F4 §4.5 is operationally protective, not just doctrinally tidy.

## §4 How To Apply

**When navigating canon as an AI agent**:

- Open the actual file. Read the prose. Don't paraphrase from a summary you (or another agent) generated earlier in the session.
- Cite `path:line`. If you can't cite, you haven't read carefully enough; re-open the source.
- If a question requires holding multiple claims in tension, hold them. Don't compress to "canon says X" when canon actually says "X under condition A, Y under condition B, and these tensions are explicitly held."
- When `docs/foundations/README.md` or `docs/README.md` provides routing aid (which-doc-for-which-question), that is **structural metadata**, not summary. Use it to find the right source; then read the source.

**When authoring AI-summaries that will be read by others**:

- Attach provenance. Inputs (sources). Author (which agent, which session). Time. Scope. Status.
- Make it clear the summary is lower-priority than its inputs. F4 §4.5 is canonical for this.
- Don't promote summaries to canon-citable status absent a Sub-C-style operationalisation ADR.

**When designing tooling that places AI-summaries near canon**:

- Don't auto-generate summary at canon root. The 2026-04-28 test gave operational evidence that this would corrupt navigation rather than help it.
- Routing aid (by question shape, by status tag, by ADR provenance) is the *helpful* shape; content summary at canon root is the *misleading* shape.

## §5 Future Relevance — Sub-C Will Inherit

`spore.positioning.agents-and-canons` flags **Sub-C: AI-summary authority + evaluation operationalisation** as one of three future-ADR-shape candidates. When Sub-C fires (when evidence accumulates that AI-summaries are being routinely consulted-as-authority in canon-reading flow), this canon-method becomes a foundation prerequisite for that ADR's design space:

- The Sub-C ADR will need to specify when (if ever) an AI-summary becomes canon-citable.
- The Sub-C ADR will need an evaluation framework for AI-summary quality.
- The Sub-C ADR will need a regeneration-and-retraction mechanism for stale summaries.
- The Sub-C ADR will need to preserve the F4 §4.5 lower-priority discipline as the default; it can only relax that default with explicit earning-test evidence.

This canon-method note keeps the discipline visible until that ADR fires. It does not pre-design the Sub-C ADR; it preserves the substrate the Sub-C ADR will need.

## §6 Cross-Refs

- `spore.representation-authority` §4.5 — the doctrinal source of the lower-priority commitment
- `spore.positioning.agents-and-canons` — the integrating frame that flags Sub-C as future ADR
- `spore.connection.canon-rebuild-arc-method-retrospective` — broader catalog of canon-method precedents
- `spore.positioning.canon-coverage-gaps` — companion positioning doc; together with this note articulates two related disciplines (gap-honesty + summary-discipline)
- `spore.connection.bkc-seven-layer-stack-as-instance-instantiation` — Layer 5 (AI agents) discussion preserves this discipline at instance-family layer
- `tmp/canon-navigability-load-bearing-test-2026-04-28.md` — synthesis memo containing the load-bearing-test findings (untracked session evidence; cited from canon as historical primary source)
- `tmp/canon-navigability-agent-report-2026-04-28.md` — agent verbatim report (untracked session evidence)

## §7 What This Doc Does Not Do

This note does not propose new doctrine. F4 §4.5 already commits the discipline. This note articulates the discipline as canon-method, surfaces the empirical validation, and keeps it visible until Sub-C earns its admission.

It does not specify the Sub-C ADR. It only preserves what Sub-C will need to honour.

It does not prohibit AI-summaries entirely. AI-summaries are a legitimate fifth representation layer; they just carry inherited-not-independent authority, with provenance attached and source-priority preserved.
