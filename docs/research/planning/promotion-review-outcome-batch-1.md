# Promotion Review Outcome Batch 1

## 1. Scope and Input

**Families reviewed:**
1. legitimacy-and-shared-consequence
2. linguistic-closure
3. relational-topology-and-context-design

**This memo captures human review outcome only.** It records the reviewer's dispositions, updates synthesis-note frontmatter where the repository taxonomy permits, and specifies the next required step. It does not enact canon entries, rewrite synthesis prose, or perform graph operations.

**Reviewer dispositions supplied:**

| Family | Disposition |
|--------|-----------|
| legitimacy-and-shared-consequence | `approve_with_explicit_qualification` |
| linguistic-closure | `approve_with_explicit_qualification` |
| relational-topology-and-context-design | `approve_with_explicit_qualification` |

**All 3 families were approved with explicit qualification.** No family was held, deferred, or declined. The qualifications are specific to each family and are recorded in Section 4 below.

## 2. Promotion Status Taxonomy Check

**Existing `promotion_status` values in the repository:**

The synthesis-note template (`.template.md`) defines an explicit enum:

```
promotion_status: # defer | ready | promoted | declined
```

With documented meanings:
- `defer` — synthesis is recorded but no canon change is proposed yet
- `ready` — synthesis is mature enough for a promotion decision
- `promoted` — canon change has been made
- `declined` — synthesis was reviewed and the proposed change was rejected

**All 21 existing synthesis notes currently carry `promotion_status: defer`.**

**Does an approved-state value exist?** Yes. `ready` is the established value for "reviewed and found suitable for promotion, but canon entry not yet enacted." This matches the reviewer's disposition: the families are approved for promotion with qualifications, but the actual canon entries have not been written.

**Frontmatter updates are therefore possible.** The 3 approved families can be moved from `defer` to `ready`. This is bookkeeping within the established taxonomy, not invention of a new status.

## 3. Outcome Table

| Family | Reviewer Disposition | Qualification / Notes | Synthesis Note Path | Frontmatter Action | Next Required Step |
|--------|---------------------|----------------------|--------------------|--------------------|-------------------|
| legitimacy-and-shared-consequence | `approve_with_explicit_qualification` | Confirmed mechanism safe for canon. Must preserve distinction between confirmed polycentric legitimacy and Johar's 4-dimensional taxonomy / "orchestration" vocabulary. Do not imply exactly 4 dimensions are externally confirmed. Civic economy stays design hypothesis only. | `docs/research/synthesis/legitimacy-and-shared-consequence.md` | `promotion_status: defer` → `promotion_status: ready` | Draft canon entry using the qualified wording from the review packet, preserving all tagging. |
| linguistic-closure | `approve_with_explicit_qualification` | Confirmed mechanism safe for canon, including "corrective must be institutional." Claim lifecycle / discourse graph / attestation decay must be framed as Johar's proposed design response, not proven infrastructure. "Naming as upstream trigger" is precision-addition, not confirmed mechanism. LLM amplification remains hypothesis only. | `docs/research/synthesis/linguistic-closure.md` | `promotion_status: defer` → `promotion_status: ready` | Draft canon entry using the qualified wording from the review packet, preserving corrective-vs-mechanism distinction. |
| relational-topology-and-context-design | `approve_with_explicit_qualification` | Confirmed components safe for canon. "Topology as the real infrastructure" must be tagged as Johar-distinctive integration, not externally confirmed finding. "Imaginary identity" acceptable as Johar naming for supported phenomenon. 6-9 month half-life and context metabolism stay hypotheses. Do not absorb agility claims. | `docs/research/synthesis/relational-topology-and-context-design.md` | `promotion_status: defer` → `promotion_status: ready` | Draft canon entry using the qualified wording from the review packet, preserving component-vs-integration distinction. |

## 4. Per-Family Outcome Notes

### 4.1 Legitimacy-and-Shared-Consequence

**Outcome:** Approved with explicit qualification.

**Qualification:** The confirmed mechanism — authority-consequence coupling as infrastructure, polycentric legitimacy, self-reinforcing escalation when coupling breaks — is safe for canon. The 4-dimensional taxonomy (democracy, stewardship, experimentation, radical markets) and "orchestration over dominance" enter as Johar's design contribution, explicitly tagged. The entry must not imply that exactly 4 dimensions are externally confirmed. Civic economy as spiral-interruptor remains design hypothesis only.

**What this means now:** This family is the strongest in the batch and moves to `ready` status. A canon entry can be drafted using the review packet's qualified language. The entry should lead with the confirmed mechanism and introduce the Johar vocabulary as design contribution with explicit tags.

**What still remains outside approval:** The 4-dimensional taxonomy as a confirmed architecture (it is vocabulary, not confirmed structure). Civic economy as an established design principle (it is a hypothesis). The precise boundary between consequence-bearing and coercive over-binding (acknowledged unresolved).

### 4.2 Linguistic-Closure

**Outcome:** Approved with explicit qualification.

**Qualification:** The confirmed mechanism — categories produce sufficiency that terminates inquiry; this is structural, not cognitive; the corrective must be institutional — is safe for canon. "Naming as upstream trigger" is a precision-addition to the confirmed mechanism, not itself independently confirmed. Claim lifecycle, discourse graph, and attestation decay must be framed as Johar's proposed design response, not as proven anti-closure infrastructure. LLM amplification remains hypothesis only.

**What this means now:** This family moves to `ready` status. The distinction between confirmed corrective *principle* ("must be institutional") and Johar's specific corrective *mechanisms* (claim lifecycle, discourse graph, attestation decay) must be preserved in any canon entry. This is the main tagging challenge: the principle is confirmed but the specific mechanisms are design response.

**What still remains outside approval:** Claim lifecycle / discourse graph / attestation decay as proven infrastructure (they are design response). LLM amplification (hypothesis). "Naming as upstream trigger" as independently confirmed mechanism (it is Johar's precision-addition). Whether structural mechanisms ensure *perceptibility* of closure, not just *revisability* of claims (open limitation).

### 4.3 Relational-Topology-and-Context-Design

**Outcome:** Approved with explicit qualification.

**Qualification:** The confirmed component claims — contexts generate relation/identity/power, topology > composition, structural decay without maintenance — are safe for canon. The integrative thesis ("relational topology as the real infrastructure of institutions") must be explicitly tagged as Johar-distinctive integration, not as an externally confirmed finding. "Imaginary identity" is acceptable as Johar naming for a supported phenomenon but not as independently corroborated. 6-9 month half-life and context metabolism remain hypotheses. Agility claims must not be absorbed.

**What this means now:** This family moves to `ready` status but with the most cautious tagging requirement. The canon entry must lead with confirmed components and introduce the integration as tagged Johar contribution. The half-life parameter should appear as a flagged hypothesis, not as a design constraint.

**What still remains outside approval:** "Topology is the real infrastructure" as externally confirmed (it is Johar integration). "Imaginary identity" as independently corroborated (it is Johar naming). "Context metabolism" (hypothesis). 6-9 month half-life as confirmed parameter (hypothesis). Scaling from team to institution (not demonstrated).

## 5. Repo Changes Made

**Synthesis-note frontmatter updated:**

1. `docs/research/synthesis/legitimacy-and-shared-consequence.md` — `promotion_status: defer` → `promotion_status: ready`
2. `docs/research/synthesis/linguistic-closure.md` — `promotion_status: defer` → `promotion_status: ready`
3. `docs/research/synthesis/relational-topology-and-context-design.md` — `promotion_status: defer` → `promotion_status: ready`

**Files intentionally left unchanged:**

- All other synthesis notes (18 files) — not in this review batch, remain at `defer`
- All synthesis note prose/bodies — not touched; only frontmatter `promotion_status` field changed
- All bridge notes, claim sheets, planning documents — not touched

**Blockers:** None. The repository's established `defer | ready | promoted | declined` taxonomy includes `ready` as an explicit value for "reviewed and found suitable for promotion." The update is within established conventions.

## 6. Immediate Interpretation

**The batch moved forward cleanly.** All 3 families received the same disposition (`approve_with_explicit_qualification`) and all 3 were moved to `ready` status. No family was held or deferred. The reviewer's qualifications are consistent with the prep work's tagging format: confirmed mechanism enters cleanly; design contribution enters with tags; design hypotheses stay flagged.

**The batch stayed narrow and boundary-safe.** The reviewer's notes explicitly preserve the boundaries identified in the prep work: legitimacy stays distinct from topology (the reviewer did not merge them); linguistic-closure stays distinct from civic-truth and perceptual-fidelity (the reviewer did not expand the scope); topology stays distinct from agility (the reviewer explicitly said "avoid absorbing agility claims").

**Wording refinement may be needed before canon enactment.** The review packet's draft canon entry language was intentionally conservative. The reviewer approved the disposition but did not approve specific wording. A brief wording-refinement pass — reviewing the draft entries against the reviewer's specific qualifications — would ensure the enacted entries match the qualification terms exactly. This is a light pass, not a major planning step.

## 7. Recommended Next Move

**Prepare enactment / canon-entry drafting for approved families.**

The 3 families are now at `ready` status. The review packet contains draft canon entry language. The reviewer's qualifications are recorded. The next step is to draft the actual canon entries — the text that would be inserted into the target documents (`spore.project-vision` for legitimacy and topology; `spore.lexicon` for linguistic-closure) — with the reviewer's tagging requirements applied. This can include a light wording-refinement pass as part of the same run.

**Why not a wording-refinement pass first:** The refinement is minor — adjusting the review packet's draft language to match the reviewer's specific qualification terms. This can be done within the enactment drafting run rather than as a separate step.

**Why not the human-economy second pass first:** The approved families should be enacted while the review context is fresh. The human-economy pass is important but independent — it does not block enactment of the approved batch.

## 8. Recommended Next 3 Runs

### Run 1: Canon-entry enactment drafting for approved families

**Objective:** For the 3 `ready` families, draft the actual canon entries that would be inserted into their target documents. Apply the reviewer's qualification terms to the review packet's draft language. Produce one entry per family with all tags (mechanism confirmed / design contribution / design hypothesis) inline. Present for final human sign-off before any canon document is edited.

**Expected artifact:** `/docs/research/planning/canon-entry-drafts-batch-1.md`

**Why it comes first:** The families are approved and at `ready` status. Enactment drafting is the natural next step. The reviewer's qualifications are fresh and the tagging format is established.

### Run 2: Targeted second pass for human-economy-and-commitment replacement mechanism

**Objective:** Search for external evidence of commitment-type differentiation in production cases — organisations or governance structures that distinguish types of commitment or obligation by epistemic character or governance function. Also search for discovery-specific governance evidence. This is the specific gap preventing human-economy from entering a review batch.

**Expected artifact:** `/docs/research/planning/human-economy-replacement-mechanism-pass-2.md`

**Why it comes second:** The first batch is now resolved. The human-economy family is the next priority. The second pass addresses its specific evidence gap. If it finds even partial support, the family can enter a second review batch.

### Run 3: Deferred-family triage checkpoint

**Objective:** For the 8 deferred families, decide which should be pursued, which should remain dormant, and which may be subsumed by the now-approved families. Assess whether the 3 approved families' promotion changes the calculus for adjacent deferred families (e.g., civic-truth gains urgency now that linguistic-closure is approved; spatial concerns may be subsumed by relational-topology).

**Expected artifact:** `/docs/research/planning/deferred-family-triage-checkpoint-1.md`

**Why it comes third:** Triage decisions should incorporate the promotion outcomes and the human-economy findings. The approved families define the canon's current boundaries, which affects how deferred families are assessed.

## 9. Guardrails

1. **Approval with qualification is not the same as full enactment.** The 3 families are now `ready`, not `promoted`. The actual canon entries have not been written. The `ready` status means "reviewed and found suitable for promotion" — the enactment step (writing the actual canon entries and moving to `promoted`) is still ahead.

2. **Unchanged frontmatter due to missing taxonomy would have been acceptable if recorded clearly.** In this case, the taxonomy existed and the update was possible. If a future batch encounters a status value not in the existing enum, the correct response is to record the blocker, not to invent a new value.

3. **Approved families should not silently import their full synthesis-note language into canon.** The synthesis notes contain the full Johar analysis — 7-page documents with convergence layers, claim registers, and open questions. The canon entries should be short, tagged, and conservative — matching the review packet's draft language with the reviewer's qualification terms applied, not the full synthesis prose.

4. **The distinction between confirmed mechanism and design contribution must remain visible.** This is the central requirement across all 3 approvals. Every canon entry must carry inline tags that distinguish what the world confirms from what the grammar contributes. Losing these tags would violate the qualification terms.

5. **Narrower follow-up wording may still be required even after approval.** The reviewer approved the disposition, not specific wording. The enactment drafting run should check each draft entry against the reviewer's qualification notes and adjust where needed. This is expected, not a problem.
