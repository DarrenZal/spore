---
research_input_for: corpus-foundational-review-v1
prompt_number: 15
tradition: "Governance-Process Meta-Research"
source_tool: claude
source_file: "compass_artifact_wf-de2ec1eb-b8b3-4eb7-a30c-cfd16edc1c9f_text_markdown.md"
ingested: 2026-04-19
conversion_note: "native markdown export; no conversion"
status: raw-research-input
---

# Self-governance architecture in standards bodies, 1980–present

The dominant pattern across mature standards bodies is **layered governance in which a thin constitutional document is held above a thicker operational process, with amendment of the top layer protected by supermajority thresholds distinct from ordinary decision-making**. The IETF, W3C, Debian, Python, Apache, Rust, and Node.js all converged — from different starting points and across three decades — on an architecture that separates (a) who may decide, (b) how proposals mature through named lifecycle stages, and (c) how dissent is registered and escalated. They diverge sharply on whether "consensus" is a rhetorical norm or a countable procedure, on whether a single executive (DPL, Director, BDFL, Linus) is load-bearing or expressly repudiated, and on whether the process document is self-amending by the same rules it governs or by heightened thresholds. What follows is an analytical report on those primitives, their layering, what universal social concepts they encode or omit, their internal disagreements, and their documented limits.

## §1 — Primitives

**Standard / Recommendation / Final.** Every tradition defines a terminal state, but with different conceptual weight. RFC 2026 §1.1 characterizes an Internet Standard as "stable and well-understood," technically competent, with "multiple, independent, and interoperable implementations" and "substantial operational experience." The W3C Process Document reaches "Recommendation" only after Candidate Recommendation exit criteria (implementation reports) and — since August 2025 — Advisory Committee review applied directly to the Candidate stage, after the Proposed Recommendation phase was retired. PEP 1 calls the terminal state "Final." Debian has no per-proposal terminal label because it governs a project, not a standards corpus; instead, ratified General Resolutions and policy documents are durable once passed. Apache analogues are releases, approved by PMC "majority approval" votes in which "at least three PMC members must vote affirmatively … and there must be more positive than negative binding votes. Releases may not be vetoed." The concept of "Final" is thus universal but not equivalent — the IETF and W3C gate it on independent implementations, Python on reference implementation completion, Apache on PMC release vote.

**Proposal.** The unit of work is named ("Draft," "RFC," "PEP," "Recommendation track document," "General Resolution"). All traditions require a written artifact authored by a champion. PEP 1 is explicit: "The PEP author is responsible for building consensus within the community and documenting dissenting opinions." Rust's RFC README and RFC 0002 require the same: "a consensus among the Rust community and the sub-teams." The proposal document itself, not the discussion thread, is the canonical object.

**Review period — fixed vs. until-consensus.** This is a major axis of divergence. The IETF uses minimum Last-Call periods: "no shorter than two weeks" for WG documents, "four weeks" for non-WG (RFC 2026 §6.1.2). RFC 2026 §6.2 specifies "at least six (6) months" at Proposed Standard and "at least four (4) months" at Draft Standard before advancement. Rust uses a **fixed 10-day** Final Comment Period — "open for at least 5 business days" — as a deliberate fast-track mechanism. Debian uses a 2-week discussion period (capped at 3 weeks in v1.9) plus a 2-week voting period. Apache voting periods "should generally run for at least 72 hours." W3C requires "wide review" without a single fixed period, but Formal Objections escalate to the Council within 90 days if Team mediation fails. The IETF, Apache, and W3C thus allow until-consensus review with minimum floors; Rust and Debian impose hard upper bounds.

**Consensus — rough vs. formal.** RFC 7282 §3 gives the canonical operational definition: "Rough consensus is achieved when all issues are addressed, but not necessarily accommodated." The chair's question is not "Is everyone OK with A?" but "Can anyone not live with A?" (§2). W3C §5.2.1 defines consensus as "A substantial number of individuals in the set support the decision and there is no sustained objection from anybody in the set." Apache distinguishes **lazy consensus** ("silence gives assent" after sufficient notice), majority vote for procedural items, and veto-capable code-modification votes. Node.js TSC Charter: "The TSC follows a Consensus Seeking decision making model … When an agenda item has appeared to reach a consensus the moderator will ask 'Does anyone object?' as a final call for dissent." Debian formally tallies Condorcet/Schulze ballots with explicit supermajority tiers (§A.5). Python's PEP 13 instructs the Steering Council to "seek consensus … before acting in a formal capacity" but uses "strict majority of non-abstaining council members" for its own votes. The same word — *consensus* — therefore ranges from an unvotable technical heuristic (IETF) to a countable audit (Debian).

**Veto and objection.** The Apache veto is the most distinctive dissent mechanism in the tradition: "A -1 vote by a qualified voter stops a code-modification proposal in its tracks. This constitutes a veto, and it cannot be overruled nor overridden by anyone … the voter must provide with the veto a technical justification showing why the change is bad." Crucially: "A veto without a justification is invalid and has no weight," and "Releases may not be vetoed." The W3C handles dissent through **Formal Objection**: any individual may appeal, but "Dissenters cannot stop a group's work simply by saying that they cannot live with a decision" (§5.2.2); the objection must have "substantive arguments or rationale" and is adjudicated by a Council composed of Advisory Board, TAG, and CEO delegate. The IETF has no per-decision veto; it has an appeals ladder (WG chair → AD → IESG → IAB → ISOC Trustees, RFC 2026 §6.5). Debian permits override of any body by General Resolution with graduated supermajorities: 2:1 to override the Technical Committee, 3:1 to amend the constitution or supersede a Foundation Document. Python's PEP 13 gives the Steering Council a "court of final appeal" role but no unilateral constitutional amendment power. Linux, notably, has **no written veto procedure at all** — the maintainer hierarchy operates by Signed-off-by / Reviewed-by / Acked-by tags and norm-based pull decisions, with Linus Torvalds as de facto final arbiter.

**Rough-consensus-running-code.** The slogan originates with David Clark's 1992 plenary at the 24th IETF, Cambridge MA: "We reject: kings, presidents and voting. We believe in: rough consensus and running code." RFC 3935 §4 canonizes it as one of five "cardinal principles" of the IETF. RFC 7282 §1 interprets it as a **three-part rejection**: no autocracy, no voting (because votes can silence minority technical objections), and no decisions "in a vacuum without practical experience." Russell (2006) argues the phrase was less an originating ideology than a **post-hoc political articulation** during the OSI/IPng crisis — "captured the technical and political values of Internet engineers during a crucial phase." It functions normatively across the Internet/FOSS tradition and is directly echoed in Rust's "shipping code" culture and Apache's "Community Over Code" inversion.

**Editor role.** The editor is administrative, not adjudicatory, in every documented tradition. PEP 1: "PEP editors don't pass judgment on PEPs. They merely do the administrative & editorial part." RFC 2418 §6.3 assigns the WG Document Editor responsibility to ensure contents "accurately reflect the decisions … made by the working group," and recommends separation of Editor and Chair roles. Debian has no editor role per se; the Project Secretary handles ballot mechanics and "adjudicates any disputes about interpretation of the constitution" (§7.1.3). Rust shepherds are intermediate — neither pure editors nor decision-makers — tasked with "(1) ensuring that stakeholders are aware of the RFC, (2) working to tease out various design tradeoffs and alternatives, and (3) helping build consensus" (RFC 1068).

**Working group / technical committee.** All traditions instantiate scope-bounded sub-bodies. IETF Working Groups are formed by an Area Director after IESG/IAB consultation against a written charter (RFC 2418 §2). W3C Working Groups require charter refinement with wide review (§4.2). Apache PMCs govern projects "independently" with a minimum of three active members. Debian's Technical Committee (§6) has up to eight members with 42-month term limits and self-restraint rules ("does not engage in design of new proposals"). Node.js has a TSC of voting and regular members, with "no more than one-fourth of the TSC voting membership … affiliated with the same employer." Python's Steering Council also imposes a "at most 2 members of the council can work for any single employer" conflict-of-interest rule. The anti-dominance constraint is a near-universal feature; ANSI's Essential Requirements formalize it as a due-process criterion.

**Charter / scope document.** Every WG/PMC/team requires a written charter specifying mission, deliverables, and success criteria. RFC 2418 §2 enumerates the IETF charter components. The W3C charter contents list (§4.3) is comparable. Apache projects graduate from the Incubator upon Board resolution and operate under project-level bylaws.

**Fast-track vs. slow-track.** The IETF has Best Current Practice (BCP) as a single-step approval path (RFC 2026 §5), distinct from the three-stage standards track. W3C's "Candidate Recommendation" once provided mid-track implementation feedback; the retirement of Proposed Recommendation in 2025 compressed the track further. Rust's FCP is itself the fast-track — a deliberate short deadline forcing team attention. Apache lazy consensus serves the same function: low-stakes decisions ratified by silence after 72 hours. Debian permits the DPL to vary voting/discussion periods by ±1 week; otherwise, everything runs through the standard GR procedure.

## §2 — Layering

**Process-defining vs. process-instantiating documents.** A recurring architectural pattern is the meta-level distinction between the document that *describes* how proposals are handled and individual proposals themselves. PEP 1 is itself a PEP — the process is self-hosting — but with the status "Active" (indefinitely live), whereas Standards Track PEPs terminate in Final or Rejected. Rust RFC 0002 is the RFC about the RFC process; RFC 3392 (Leadership Council, 2023) is the RFC that supersedes the earlier governance RFC 1068 using the same RFC machinery it governs. The IETF's process documents (RFCs 2026, 2418, 7282) are themselves RFCs, published as Best Current Practice. The risk here, as RFC 3392 explicitly warns, is that "the Council should avoid allowing repeated operational decisions to constitute de facto policy … Avoiding ad-hoc exceptions helps avoid 'normalization of deviance'."

**Constitutional vs. operational rules.** The Debian Constitution is explicitly constitutional, distinct from Debian Policy (technical) and operational guides (howto_* documents). It requires a **3:1 supermajority** to amend and a 3:1 supermajority to supersede either of the two Foundation Documents (Social Contract, DFSG). Python's layering is analogous: PEP 13 is constitutional (changed only by two-thirds core-team supermajority in a two-week vote); PEP 1 is operational (amended by pull request). The W3C Advisory Board "manages the evolution of the Process Document"; revisions draft in the Process Community Group and pass through Advisory Committee review. Apache distinguishes foundation-wide policy (Board of Directors) from project-level rules (PMC-set, changeable by PMC vote). Rust's RFC 3392 distinguishes "policy" from "operational" decisions and specifies different procedural tracks. This constitutional/operational split is the tradition's primary defense against executive self-entrenchment — PEP 13 states flatly that the Steering Council "cannot modify this PEP … except via the mechanisms specified in this PEP."

**Standards lifecycle.** The canonical shape is draft → candidate → final → superseded/rescinded, instantiated with local vocabulary. IETF: Proposed Standard → Draft Standard → Internet Standard → Historic (RFC 2026 §4; collapsed to two levels by RFC 6410 in 2011). W3C: Working Draft → Candidate Recommendation → Recommendation → Superseded/Rescinded, with retirement procedures in §6.3.12. Python PEP: Draft → Accepted/Provisional → Final → Superseded, with terminal Rejected/Withdrawn/Deferred branches. Rust RFC: pending → FCP → merged/closed → implemented (tracked separately). The Historic/Rescinded/Superseded state is underspecified in most traditions — RFC 2026 defines it procedurally but empirically it is rarely invoked; the W3C added explicit "Rescinding, Obsoleting, Superseding, Restoring" procedures only in recent revisions.

## §3 — Placement of universal concepts

**Trust** is load-bearing and explicitly named. Apache's "Earned Authority" and "Responsible Oversight" principles frame trust as a renewable, non-transferable credit from the community. Linux's Signed-off-by chain is operationally a chain-of-trust: Linus "trusts the subsystem maintainers to not send bad patches upstream" (kernel Documentation/process). Debian expresses it procedurally: DPL powers are granted by election and "lent" to delegates. The concept is present but is almost never defined — it operates as a primitive.

**Care** is notably absent from the formal vocabulary. Code of Conduct documents (Linux 2018, based on Contributor Covenant) introduce welfare-oriented language post-hoc, and Rust's Moderation Team exists to enforce it, but the process documents themselves do not use "care" as a term. The 2021 Rust Mod Team resignation ("unable to enforce the Rust Code of Conduct to the standards the community expects of us") is a case where the absence of care-centered vocabulary collided with an institutional crisis; RFC 3392 responded by creating "additional checks and balances providing bidirectional oversight between the moderation team and the Council."

**Identity** is load-bearing but typically resolved to individual authorship and sponsorship. PEP 1 requires sponsorship by a core developer if the author is not one. IETF participants are individuals, not organizations (RFC 3935 §4: "Volunteer Core"). Apache's "Community of Peers" principle: "individuals participate at the ASF, not organizations … Merit lies with the individual … is not influenced by employment status or employer, and is non-transferable." Identity as *corporate affiliation* is treated as a threat to be capped (Python ≤2 per employer, Node.js ≤1/4 of TSC).

**Memory** is built into the artifact — mailing list archives (Apache: "mailing-list-archives-are-the-record"), RFC repositories, PEP indexes, git history. The IETF appeals window of "within two months of the public knowledge of the action" (RFC 2026 §6.5.4) presumes institutional memory. Debian preserves full amendment history (v1.0 through v1.9) on the constitution page.

**State** is the lifecycle marker system (Draft/Final/Rescinded). Machine-readable state transitions are characteristic of PEP, RFC, and W3C Recommendation-track documents.

**Signals** appear as humming (RFC 7282 §4), +1/0/-1 votes, Reviewed-by tags, FCP motion disposition labels (merge/close/postpone). Each tradition has an idiom; none treat signaling as a general concept.

**Agency.** Explicit about who may propose (any IETF participant; any W3C individual for Formal Objection; any Debian Developer with K sponsors; any Rust community member; any Apache participant; any Python author with a core-developer sponsor). Less explicit about who may decide — decision agency is concentrated in chairs, PMCs, TSCs, councils.

**Norms/protocols.** The entire tradition is protocol-about-protocols. Explicit in every document.

**Power/authority.** Explicitly distributed by role and bounded by enumerated powers. Debian §4 enumerates what Developers may do; §5 what the DPL may do; §6 what the TC may do. PEP 13 enumerates Steering Council powers and limits. Apache distinguishes Board authority (organizational oversight) from PMC authority (technical governance).

**Commitment.** Largely absent as a named concept. Apache voting.html is explicit: "a vote is a formal expression of opinion, not of commitment." The tradition resists binding individuals to future action. RFC 7282's definition of consensus as "sufficiently satisfied … no longer have specific objections" explicitly excludes endorsement-as-commitment.

**Intent** appears in IPR contexts (RFC 2026 §10, disclosure of patent intent) and in W3C charter mission statements, but is not a pervasive primitive.

**Evidence.** Load-bearing, primarily as running code / implementation reports. RFC 2026 §4.1.2 requires "two independent and interoperable implementations from different code bases" for Draft Standard. W3C Candidate Recommendation exit requires implementation evidence. Apache release votes presuppose working builds. This is the tradition's strongest empirical commitment.

**Holon-like unit (whole-and-part).** Teams nest: Rust sub-teams under top-level teams under Leadership Council; IETF WGs under Areas under IESG under IAB; Apache committers under PMCs under Board. The nesting is hierarchical, not recursive — parents charter children, not vice versa.

**Boundary.** Charter documents are the explicit boundary mechanism. RFC 2418 §3 permits a WG chair to reject input as "out of scope" (outside charter). Debian Technical Committee boundaries are self-limited by §6: "does not engage in design of new proposals."

**Reciprocity** is present only implicitly. The contributor-license-agreement model (Apache CLA, kernel DCO) is one-directional — contributors grant rights to the project. RFC 2026 §10.3.1 requires "an unlimited perpetual, non-exclusive, royalty-free, world-wide right and license" from contributors to ISOC/IETF. There is no reciprocal obligation named.

**Reproduction/continuity.** Handled through succession rules: Python Steering Council elected after each feature release; Debian DPL one-year term; Rust Council representatives delegated from teams; Apache PMC members appointed by existing members. W3C Council members are drawn from elected AB/TAG. None specify indefinite continuation; all specify renewal. The Linux kernel, uniquely, has no written succession plan for Linus Torvalds — a recognized but unaddressed continuity gap.

## §4 — Internal disagreements

**Consensus vs. voting.** The sharpest split is between IETF-lineage rough consensus and ISO-lineage formal voting. ANSI's Essential Requirements define consensus as "substantial agreement … more than simple majority, but not necessarily unanimity" with required consideration of objections. Debian's Condorcet/Schulze system is the tradition's most formal voting apparatus — explicit supermajority thresholds (1:1, 2:1, 3:1), quorum, casting vote. RFC 7282 treats voting as actively harmful: "traditional voting leads to 'gaming of the system,' bad compromises, 'important minority views being ignored,' and 'worse technical outcomes'." Apache splits the difference: procedural items by majority, code by consensus-with-veto, releases by majority-with-no-veto. Python's Steering Council uses majority-of-council internally but is normatively directed to "seek consensus … before acting in a formal capacity." The disagreement is not resolved; it tracks the underlying question of whether the population of decision-makers is stable enough to vote (Debian Developers, Python core team) or fluid enough that voting is meaningless (IETF participants).

**Formal vs. rough-consensus trade-offs.** RFC 7282 §6–7 is explicit that "one hundred for, five against might NOT be rough consensus" if an unaddressed technical objection remains, and "five for, one hundred against might STILL be rough consensus" against vote-stuffing. This inverts the ANSI model, which requires procedural evidence of consideration but treats head-counts as probative. Farrell & Simcoe (2012) model consensus standardization as "a war of attrition that selects through delay" — rough consensus trades speed for minority protection; formal consensus trades minority protection for auditability.

**Executive-director vs. flat governance.** Debian's DPL has real executive powers (casting vote, delegate appointment, urgent decisions) but is bounded by overridable technical policy. Python abolished the BDFL role in 2018 (PEP 13 history); the Steering Council is explicitly collective. Apache is the most flat: "The PMC as a whole is the entity that controls the project, nobody else"; the Board "does not provide technical governance." W3C collapsed its Director role (held by Tim Berners-Lee) into a Council in the 3 November 2023 Process — a **direct repudiation of single-executive governance at exactly the moment W3C incorporated as a legal entity**. Linux remains BDFL-governed by norm alone; no documentation addresses the succession question. Rust's 2023 Leadership Council emerged from a governance crisis precipitated by the 2021 Mod Team resignation protesting a Core Team "unaccountable to anyone but themselves." The tradition's trend line is away from executives, with Linux the outlier.

**Written-process vs. norm-based.** Debian and Python maximize written specificity; Linux minimizes it. The kernel's Code of Conduct Interpretation states that "making decisions and rejecting unsuitable contributions are not viewed as a violation of the Code of Conduct" — an explicit textualization of a norm that had been unwritten. Apache's "Responsible Oversight" principle: "Rather than detailed rules and hierarchical structures, ASF governance is principles-based." The IETF sits between — RFC 2026 and RFC 2418 are detailed, but RFC 7282 acknowledges the core concept (rough consensus) is "often misunderstood" and resists codification. The trade-off is legibility versus flexibility.

**Fast-track necessity vs. corruption risk.** Rust's 10-day FCP is the cleanest fast-track; it relies on the prior months of discussion to pre-load the decision. Apache's lazy consensus (72 hours) is similar. Debian's DPL-variable discussion period (±1 week) is a limited fast-track. The IETF and W3C have no fast-track except for BCP and erratum-level corrections. Academic literature (Simcoe 2007, documenting IETF slowdown as commercialization accelerated) suggests that the absence of fast-track mechanisms correlates with standardization delay, but the presence of fast-track creates capture risk — who may invoke the fast-track becomes the new locus of power.

## §5 — Critiques and limits

**Process-capture by well-resourced stakeholders.** Russell's *Open Standards and the Digital Age* (Cambridge 2014) argues that "open" standards-body governance is a "middle ground between markets and hierarchies" — meritocratic consortium governance that abandoned international democratic conventions in favor of a venue favorable to US-based technology firms. DeNardis (*Protocol Politics* 2009, *Global War for Internet Governance* 2014) shows that "technical infrastructure is a proxy for political power" and documents the IPv4→IPv6 transition as a market-failure case: technical consensus existed; deployment did not. The employer-dominance caps in Python and Node.js charters are explicit institutional responses to this critique.

**Formal consensus-rules don't prevent de-facto hierarchies.** Jo Freeman's "The Tyranny of Structurelessness" (1970) is widely cited in FOSS governance critique: the absence of formal structure does not eliminate hierarchy; it makes hierarchy unaccountable. Kelty's *Two Bits* (Duke 2008) reframes FOSS communities as "recursive publics" that "reject monarchy and democracy alike" while governing through technical merit — but merit is not observable independent of social position. The 2021 Rust Mod Team resignation is the tradition's clearest documented instance of a formal consensus structure failing to constrain a de-facto hierarchy: the Core Team's "structural unaccountability" within a nominally flat team-of-teams system.

**Openness vs. efficiency trade-off.** Simcoe (Cambridge 2007) documents the IETF slowdown: first meeting (1986) had 21 attendees; by 2001, over 2,000. Farrell & Simcoe (*RAND J. Economics* 2012) model the slowdown as bargaining delay. ANSI Essential Requirements, by imposing balance and due process requirements, accept slower decision cycles as the cost of legitimacy. The IETF's response (RFC 6410, collapsing three maturity levels into two in 2011) is a partial concession to this critique.

**Empirical under-evaluation.** Rennie's peer-review congresses (JAMA/BMJ, 1989–2022) established that "most peer-review improvements lack empirical support"; the analogous critique applied to standards governance is that the process documents themselves are rarely evaluated against outcomes. Russell (2006) notes that Internet historians tend to accept the IETF's self-presentation uncritically. Braman (2010, 2011) offers one of the few corpus-analytic studies of RFC decision-making as de facto Internet policy. The systematic absence of empirical evaluation of self-governance rules is itself load-bearing: the tradition treats its process documents as self-justifying artifacts rather than as falsifiable hypotheses about good decision-making.

## R-claims

- **R1**: Mature governance stacks separate constitutional rules from operational process and protect constitutional amendment with higher thresholds. [target:candidate:amendment-thresholds] [concept:protocol-society]
*R1 is supported by the Debian Constitution, PEP 13, and the W3C Process Document.*

- **R2**: Proposal lifecycles are formalized through named states and explicit gates for review, objection, and ratification. [target:candidate:lifecycle-governance] [concept:protocol-society]
*R2 is supported by RFC 2026, PEP 1, and the W3C Process Document.*

- **R3**: Consensus splits between formal counting and judgment about unresolved objection, and the two models are not interchangeable. [target:candidate:rough-vs-counted-consensus] [concept:inclusive-governance]
*R3 is supported by RFC 7282, the Debian Constitution, Apache voting rules, and the Node.js TSC charter.*

- **R4**: Governance systems operationalize trust and identity institutionally through earned authority, conflict-of-interest caps, and durable archives rather than through sentiment alone. [target:candidate:earned-authority] [concept:memory-governance]
*R4 is supported by the Apache Way, PEP 13, and Linux process documentation.*

- **R5**: Succession and continuity rules are load-bearing because councils, PMCs, and elected roles must reproduce themselves across releases and terms. [target:candidate:continuity-governance] [concept:reproduction-continuity]
*R5 is supported by PEP 13, the Debian Constitution, Apache governance, and Rust RFC 3392.*

- **R6**: The broader trend is away from single-executive governance and toward explicit councils, charters, and appeals structures. [target:meta:corpus-foundational-review-protocol] [concept:inclusive-governance]
*R6 is supported by PEP 13/8016, the W3C Process revisions, Rust RFC 3392, and the Node.js TSC charter.*

## §6 — Citations

**Primary sources (all [open-access]):**

- **RFC 2026** (Bradner, 1996), "The Internet Standards Process — Revision 3," BCP 9. Sections cited: §1.1 (Internet Standard definition), §4.1 (three-stage maturity), §4.2 (non-standards track), §5 (BCP), §6.1.2 (Last-Call and IESG review), §6.2 (minimum times-in-place), §6.5 (appeals), §10 (IPR). https://www.rfc-editor.org/rfc/rfc2026 [open-access].

- **RFC 7282** (Resnick, 2014), "On Consensus and Humming in the IETF." Sections cited: §1 (Clark aphorism), §2 (lack of disagreement), §3 (rough consensus defined — "all issues are addressed, but not necessarily accommodated"), §4 (humming as start not end), §5 (consensus as path), §6–7 (objection weighting). https://www.rfc-editor.org/rfc/rfc7282 [open-access].

- **RFC 3935** (Alvestrand, 2004), "A Mission Statement for the IETF," BCP 95. §4 (cardinal principles: open process, technical competence, volunteer core, rough consensus and running code, protocol ownership). https://www.rfc-editor.org/rfc/rfc3935 [open-access].

- **RFC 2418** (Bradner, 1998), "IETF Working Group Guidelines and Procedures," BCP 25. §2 (formation), §3 (chair), §3.3 (rough consensus — "51% does not qualify as 'rough consensus' and 99% is better than rough"), §3.4 (contention), §6.3 (document editor), §7.4 (Last-Call). https://www.rfc-editor.org/rfc/rfc2418 [open-access].

- **David Clark**, "A Cloudy Crystal Ball — Visions of the Future," plenary, 24th IETF, Cambridge MA, July 1992, *Proceedings of the 24th IETF*, pp. 539–543 (slide 19). [open-access, archived].

- **Debian Constitution v1.9** (ratified 26 March 2022; principal author Ian Jackson, v1.0 1998). §1–§8 enumerated powers; §A Standard Resolution Procedure; §A.5 Condorcet/Schulze; §B language convention. https://www.debian.org/devel/constitution [open-access].

- **PEP 1** (Warsaw, Hylton, Goodger, Coghlan), "PEP Purpose and Guidelines." Status, types, lifecycle, PEP editor role. https://peps.python.org/pep-0001/ [open-access].

- **PEP 13**, "Python Language Governance" (2018, amended 2019, 2024, 2025). Steering Council mandate, 5-person composition, 2/3 supermajority for document amendment and core-team ejection, ≤2 employer rule, STAR voting (2024). https://peps.python.org/pep-0013/ [open-access].

- **PEP 8016** (Smith, Stufft, 2018), "The Steering Council Model." Design goals ("boring, simple, comprehensive, flexible"). https://peps.python.org/pep-8016/ [open-access].

- **W3C Process Document** (18 August 2025 edition). §3.2.1 (AC), §3.3.1.1 (AB), §3.3.2.1 (TAG), §4.2–4.3 (Charter), §5.2.1 (consensus/dissent/unanimity), §5.2.2 (managing dissent), §5.5 (Formal Objection), §5.6.1–5.6.2 (Council), §6.3.1 (Recommendation Track), §6.3.8 (Candidate Rec Snapshot/Draft), §6.3.12 (retirement), §6.4.3 (Statements), §10 (Process evolution). https://www.w3.org/policies/process/ [open-access]. See also W3C announcement of Proposed Recommendation removal, https://www.w3.org/news/2025/w3c-updates-its-process-document/ [open-access].

- **Apache Software Foundation Voting** — https://www.apache.org/foundation/voting.html. Veto-with-justification, three-+1 rule, lazy consensus, release vote majority rule. [open-access]. **How the ASF Works** — https://www.apache.org/foundation/how-it-works.html [open-access]. **The Apache Way** — https://www.apache.org/theapacheway/ [open-access]. **Governance** — https://www.apache.org/foundation/governance/ [open-access].

- **Rust RFC README** — https://github.com/rust-lang/rfcs/blob/master/README.md (FCP 10-day rule) [open-access]. **Rust RFC 0002** (2014) "RFC Process" — https://rust-lang.github.io/rfcs/0002-rfc-process.html [open-access]. **Rust RFC 3392** (2023) "Leadership Council" — https://rust-lang.github.io/rfcs/3392-leadership-council.html [open-access]. Context: **rust-lang/team PR #671** (Nov 2021, Mod Team resignation) [open-access].

- **Linux kernel process documentation** — https://www.kernel.org/doc/html/latest/process/ — §2.Process.html (merge window, -rc), submitting-patches.html (Signed-off-by, Reviewed-by), code-of-conduct.html (2018 adoption), code-of-conduct-interpretation.html. [open-access].

- **Node.js TSC Charter** — https://github.com/nodejs/TSC/blob/main/TSC-Charter.md (consensus-seeking, "Does anyone object?", ≤1/4 per employer). **Node.js GOVERNANCE.md** — https://github.com/nodejs/node/blob/main/GOVERNANCE.md. Historical draft — https://github.com/joyent/nodejs-advisory-board/blob/master/governance-proposal/TSC-Charter-Draft.md (2/3 supermajority fallback post-io.js reunification). [open-access].

- **ANSI Essential Requirements: Due Process Requirements for American National Standards** — https://www.ansi.org/american-national-standards/ans-introduction/essential-requirements. Openness, lack of dominance, balance, due process, consensus, appeals. [open-access].

**Secondary sources:**

- **Andrew L. Russell**, "'Rough Consensus and Running Code' and the Internet-OSI Standards War," *IEEE Annals of the History of Computing* 28(3), July–Sept 2006, pp. 48–61. DOI 10.1109/MAHC.2006.42. [institutional / paywalled].

- **Andrew L. Russell**, *Open Standards and the Digital Age: History, Ideology, and Networks*, Cambridge University Press, 2014. Especially chapters on ANSI history, IETF formation, and "openness" as ideology. [print / institutional].

- **Laura DeNardis**, *Protocol Politics: The Globalization of Internet Governance*, MIT Press, 2009. IPv4/IPv6 as governance case. [print / institutional].

- **Laura DeNardis**, *The Global War for Internet Governance*, Yale University Press, 2014, ch. 3 (IETF). [print / institutional].

- **Laura DeNardis** (ed.), *Opening Standards: The Global Politics of Interoperability*, MIT Press, 2011. [print / institutional].

- **Sandra Braman**, "The Interpenetration of Technical and Legal Decision-Making for the Internet," *Information, Communication & Society* 13(3) (2010): 309–324. [institutional / paywalled].

- **Sandra Braman**, "The Framing Years: Policy Fundamentals in the Internet Design Process, 1969–1979," *The Information Society* 27(5) (2011): 295–310. [institutional / paywalled].

- **Timothy Simcoe**, "Delay and De Jure Standardization: Exploring the Slowdown in Internet Standards Development," in Greenstein & Stango (eds.), *Standards and Public Policy*, Cambridge UP, 2007, ch. 8. [print / institutional].

- **Joseph Farrell & Timothy Simcoe**, "Choosing the Rules for Consensus Standardization," *RAND Journal of Economics* 43 (2012): 235–252. [institutional / paywalled].

- **Janet Abbate**, *Inventing the Internet*, MIT Press, 1999, esp. ch. 5. [print / institutional].

- **Christopher Kelty**, *Two Bits: The Cultural Significance of Free Software*, Duke University Press, 2008. [print — author also distributes a Creative Commons PDF at twobits.net, open-access].

- **Steven Weber**, *The Success of Open Source*, Harvard University Press, 2004, p. 172. [print / institutional].

- **Jo Freeman**, "The Tyranny of Structurelessness" (1970/1972). https://www.jofreeman.com/joreen/tyranny.htm [open-access].

- **Drummond Rennie**, "Guarding the Guardians: A Conference on Editorial Peer Review," *JAMA* 256(17) (7 Nov 1986): 2391–2392. [institutional / paywalled]. Peer Review Congress proceedings: https://peerreviewcongress.org/ [open-access abstracts].
