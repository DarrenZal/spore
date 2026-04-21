---
research_input_for: corpus-foundational-review-v1
prompt_number: 09
tradition: "Trust Networks / Reputation Systems"
source_tool: chatgpt-or-gemini
source_file: "Primitives.pdf"
ingested: 2026-04-19
conversion_note: "converted via pdftotext from source PDF on 2026-04-19; inline footnote numbers preserved (not hyperlinked)"
status: raw-research-input
---

Primitives
Trust is broadly defined in this tradition as an expectation or attitude about others’ future behavior under
uncertainty. A common formulation (Gambetta 1988) treats trust as “that particular level of subjective
probability” that a trustee will act favorably or at least not harm the trustor 1 . In other words, I trust you
means I believe you are unlikely to disappoint or betray me when given the chance 2 . Hardin (2002)
similarly says “I trust you” means “I think you will be trustworthy,” i.e. that it is in your interest to take my
welfare into account 3 . Luhmann famously characterizes trust as a mechanism for coping with the
freedom of others (reducing complexity) 4 , implying that trust is not mere calculation but a choice or
stance toward unpredictable situations. Uslaner (2002) emphasizes that generalized or “moralistic” trust can
exist as faith in people outside one’s experience 5 . Thus tradition distinguishes trust as expectation
(probability of good behavior 1 2 ) from trust as relational stance (a willingness to be vulnerable or
cooperate) – the former analytic, the latter often normative or psychological.
Distrust is treated as an active negative stance, not merely the absence of trust. Recent reviews note that
one can neither trust nor distrust a given person (there is a neutral zone), and importantly “distrust is not
just the absence of trust” 6 . When one distrusts someone, one typically expects ill intent or unwillingness
to honor commitments (even if not expressly hostile). In philosophers’ terms, distrust carries its own
“action-tendencies” (avoidance, withdrawal) and normative weight 6 . Trust-tradition authors often point
out that trust and distrust are mutually exclusive for the same action 6 . In practice, distrust is signaled by
different behaviors (e.g. over-monitoring) than mere nonchalance, reflecting its status as an attitudinal
complement to trust 6 .
Trustworthiness is a property of the trustee distinct from trust. Most authors treat trustworthiness as a
quality (competence, benevolence, reliability) that justifies trust 7 3 . For example, Hardin’s encapsulated
interest account implies a person is trustworthy if it is in their interest to honor another’s interests 3 .
Formally, the statements “I believe you are trustworthy” and “I trust you” coincide under cognitive
definitions 7 , but tradition underscores that being trustworthy is not the same as being trusted (the
former is about facts of character or incentives, the latter about the trustor’s belief). Trustworthiness often
involves motives or norms: one must be competent and willing to fulfill trust 8 . By contrast, trust (the
attitude) entails believing another’s trustworthiness even under risk.
Reputation in this literature refers to information about an agent’s past behavior or social standing,
typically aggregated from many interactions. It is often modeled as a signal or probability distribution of
expected behavior 9 . For instance, Gambetta notes that “the probability distribution of expectations”
about a person can be seen as “expressing the reputation of others” 9 . In computer/market studies (e.g.
Resnick on eBay), reputation systems compute scores from peer feedback: an eBay seller’s net reputation is
simply (count of positive ratings minus negatives) displayed to potential buyers 10 . Thus reputation is an
aggregate signal of trustworthiness: good actors build a history of positive feedback and are “rewarded” by
trust (e.g. higher bids), while bad actors are “punished” by negative feedback 11 10 . The tradition
distinguishes this communal signal from any individual’s personal reputation (one’s own self-view or
internalized reputation). Reputation bridges personal and generalized trust: one may trust strangers based
on their global rating (systemic signal) rather than direct knowledge.

1

Reliability is often treated separately from trust. Reliability implies consistent performance on expected
tasks, often without normative or interpersonal weight. Some authors equate high reliability with
trustworthiness (if someone is simply dependable by nature), but trust literature usually reserves “trust” for
context involving risk of others’ choices. For example, Luhmann contrasts confidence (in mechanisms or
systems that are predictable) with trust (in the decisions of free agents) 12 . In short, reliability might reduce
the need for trust (if a system is guaranteed to function), whereas trust involves belief in others’ will and
competence under uncertainty 12 . Authors rarely cite reliability explicitly as a primitive beyond this
contrast.
Recommendation/Endorsement refers to a trustee vouching for another. In trust systems, one agent may
“endorse” another to extend trust. For example, in decentralized webs-of-trust (like PGP), a user’s public key
is signed (endorsed) by others, creating chains of transitive trust. Similarly, rating sites allow written
recommendations or testimonials that others can use as trust cues. These acts function as social signals: an
endorsement by a trusted person raises a target’s perceived trustworthiness. While formal theory is more
developed for reputation scores, trust literature acknowledges that recommendations or endorsements
serve to propagate trust through a network (see next on web-of-trust).
Web-of-Trust is a specific concept from cryptography/CS often discussed in trust literature. Introduced by
Phil Zimmermann for PGP (1992), it is a decentralized trust model: users personally vouch for (sign) each
other’s identity keys instead of relying on a central authority 13 . Each user maintains trust ratings for
others they know, and trust is transitive: if Alice trusts Bob and Bob trusts Carol, Alice may (partially) trust
Carol. The web-of-trust contrasts with hierarchical PKI models; it treats trust as subjective and peer‐to‐peer,
often using continuous trust scores 13 . This mechanism appears as a primitive in computing and crypto
literatures on trust networks.
Reputation as Economic Incentive: Reputation systems are explicitly treated as economic instruments to
enforce cooperation. Auction studies (e.g. eBay) show that a good reputation incentivizes quality service:
sellers will not cheat because they value their future business 11 . Conversely, a bad reputation imposes
costs, driving dishonest sellers out of the market 11 . Thus reputation is not just information; it’s an
incentive structure (“the social cost of cheap pseudonyms” [Friedman & Resnick]). Authors like Friedman &
Resnick prove that when identities are stable, reputation sustains cooperation; if identities are cheap (easily
changed), newcomers must “pay dues” and trust collapses 14 . In summary, reputation in this tradition is
treated as an aggregate trust signal and as a behavioral incentive (making trustworthiness profitable) 11
14 .
Identity Persistence: Nearly all reputation‐based accounts assume agents have persistent identities. If one
can erase or duplicate identity at will (Sybil attacks, pseudonyms), reputations lose power. Friedman and
Resnick rigorously show that with cheap pseudonyms, equilibrium cooperation collapses to “dues-paying”
rituals (newcomers suffer until proven) 14 . Thus the ability to link past actions to an enduring identity is
necessary for reputation to function. The trust literature often notes (explicitly or tacitly) that stable identity
(even if pseudonymous but unforgeable) is a precondition: modern reputation systems combat identity
theft for this reason.

Layering of Trust
Authors consistently distinguish personal (particular) trust from generalized/systemic trust. Luhmann
(1979) famously differentiates Vertrauen (interpersonal trust based on face-to-face knowledge) from

2

confidence or system trust (impersonal trust in institutions, markets, or technology) 15 . In pre‐modern
settings, trust was mostly personal (I know my neighbor); in modern societies, we develop system-trust in
mechanisms (anonymous markets, public institutions) to cope with scale 15 . Uslaner’s notion of
“moralistic” trust corresponds to generalized social trust – faith in people we don’t know personally 5 .
Similarly, scholars contrast direct-experience trust (built on past interactions) versus reputationmediated trust (based on third-party reports or signals). System or generalized trust often arises when
direct knowledge is unavailable.
Another dimension is relational vs institutional trust. Relational trust operates in dyads or small groups
where repeated interaction and reputation operate; institutional trust is belief in rules or authorities (e.g.
legal systems, brands). The literature notes that institutional trust can substitute for interpersonal trust (e.g.
trusting a stranger because of a governing law or platform review system).
Trust is also seen as scale-dependent. At the smallest scale, trust is dyadic (person-to-person). At
intermediate scales, it may involve trust within a community or network. At the largest scale, systemic
trust spans society (e.g. trust in government, media, or the “system” as a whole). Luhmann argues that as
social complexity grows, humans develop higher-order trust (“more effective ways of reducing complexity”)
16 . Putnam’s concept of generalized trust (social capital) similarly operates at the societal scale. Thus trust
is multi-layered: from personal dispositions toward known others, up to abstract faith in institutions or
strangers.

Universal Concepts in the Tradition
• Trust: Yes. It is the central load-bearing concept. Authors rigorously define it (see above) and analyze
its conditions.
• Care: Not explicitly central. The trust literature rarely treats care (as in care ethics) as a primitive.
Although some moral accounts (e.g. Uslaner 2002) hint that trust involves a sense of communal care
or benevolence, most trust work focuses on expectation and interest. The absence of a “care”
primitive is notable: trust accounts typically do not rely on altruistic motives (except as one source of
trustworthiness), so explicit notions of care are marginal.
• Identity: Indirectly central. Stable identity is assumed in order for reputation to accumulate (see
Identity Persistence above). Some authors explicitly analyze identity (e.g. Friedman on pseudonyms).
Beyond that, “identity” as a philosophical or sociological notion isn’t foregrounded, though trust
presupposes recognizable agents. The literature does not deeply theorize personal identity (selfconcept) as such; identity matters mainly as a tagging mechanism for reputation.
• Memory: Implicit but not explicit. Reputation systems serve as communal memory of past actions.
Authors implicitly rely on collective memory (archives of feedback) to build trust. Yet “memory” is not
named a core concept; rather it is subsumed under reputation/history. The lack of direct discussion
on memory highlights that trust literature leans on institutional remembrance (records) but doesn’t
analyze memory dynamics per se.
• State (Government/Authority): Partly. Some tradition acknowledges trust in political institutions
(e.g. Hardin’s mention of trust in government, Uslaner on trust in government). However, core trustand-reputation work often treats the state as one actor among many. The role of state or law is

3

sometimes framed as a substitute for personal trust (coercion vs trust in section in Gambetta 17 ).
Explicit attention to state is limited outside political science analyses; in general trust systems, the
“state” appears as a formal trust agent (e.g. legal enforcement raising trust). Its partial presence
reflects that legal/institutional backing is acknowledged (e.g. contracts vs trust discussions) but not
deeply theorized as a universal.
• Signals: Yes, important. Reputation itself is essentially a signaling concept. Many trust models
(especially in economics/CS) emphasize signals of quality or reliability. For example, Akerlof’s “market
for lemons” (not in core list but emblematic) shows that warranties and branding signal
trustworthiness. Gambetta and others note that observed behavior or third-party endorsements act
as cues (“good sellers could signal their quality” 11 ). In short, signaling theory underpins much of
the trust literature: agents signal intent (e.g. promises, contracts), status (e.g. membership in a
reputable group), or past performance (feedback scores) to engender trust.
• Agency: Implicit. Trust presumes that trustees have agency and freedom; many definitions of trust
hinge on the notion that a trustee could break trust if they chose. Luhmann’s notion of trust as
coping with others’ freedom 4 highlights agency: trust is only needed when others can decide.
However, “agency” as an explicit primitive (in philosophical sense) is not often formalized. It is built
into the condition (risk and free will), but not separately treated.
• Norms/Protocols: Yes, in effect. Trust relies on expectations of normative behavior. While not always
front-and-center as a named primitive, several authors emphasize norms. Hardin points out that
trust often exceeds mere utility-based expectation, implying a normative element 18 . Reputation
systems effectively encode community norms (e.g. “honest seller” norm) via their scoring. The idea
of commitment or promise-keeping (a norm) is often intertwined with trust. In short, norms and
protocols underlie trust (shared rules make trust possible), though tradition tends to build on their
existence rather than define them as separate primitives.
• Power/Authority: Peripheral but acknowledged. Luhmann titled his book Trust and Power, indicating
their relation. Gambetta’s example of slaves “trusting” masters (to not kill them) 19 , or his analysis
of coercion vs trust, shows power’s interplay: trust emerges when one party has power/freedom to
betray. However, power dynamics are often implicit (e.g. vulnerability means power imbalance)
rather than systematically explored. The concept of authority sometimes appears (a doctor’s
authority or an institution’s credibility can justify trust), but trust scholarship itself does not make
power a foundational primitive beyond noting that trust only makes sense in its presence (or absence
of full coercion).
• Commitment: Occasional use. In trust games and analysis (Hardin, reciprocity) commitment
emerges as part of what makes a trustee trustworthy (e.g. a prior promise or contract). Hardin’s
discussion of contracts versus trust, or mutual commitment in ongoing exchanges 20 , shows
commitment figures into trust relationships. Still, “commitment” is not usually defined as separate
from trust/trustworthiness; it’s treated as a situational factor.
• Intent: Implicit. Philosophical debates often emphasize trustees’ intentions or goodwill (e.g. the
difference between trusting someone and merely relying on them). In this tradition, intent is
recognized but often subsumed under trustworthiness. For example, Hardin’s rational account
sidesteps intent (focus on incentives), whereas others (like Uslaner or Baier) highlight caring intent.

4

The tradition includes both views but does not produce a single theory of intent: Hardin largely
avoids it, Uslaner and moralists embrace a notion of benevolent intent as part of trust.
• Evidence: Embedded. Trust evaluation implicitly uses “evidence” (past behavior, reputation data) but it
is rarely elevated to a primitive label. Trust mechanisms depend on signals taken as evidence of
trustworthiness (feedback, credentials, endorsements). The tradition assumes that agents use
available evidence (direct or reputational) to calibrate trust, but “evidence” as a standalone concept is
not emphasized beyond these mechanisms.
• Whole-and-Part (Holon), Boundary, Reciprocity, Reproduction/Continuity:
• Whole-and-part: Not explicitly used. Trust literature does not typically invoke a holistic/partitive
model (no holons).
• Boundary: Rarely explicit; trust boundaries (who is in/out of a trust circle) are implicit in community
trust models, but “boundary” per se is not a core concept.
• Reciprocity: Yes, important. Trust is often reciprocal – I trust you and you trust me, reinforcing
cooperation 20 . Hardin notes that in iterated relationships, trust is “mutually reinforcing” because
each person has incentive to be trustworthy 20 . Reputation also creates quasi-reciprocity across
networks. Thus reciprocity (tit-for-tat expectation) underlies much of the trust mechanism, even if
not always named as a primitive.
• Reproduction/Continuity: Mostly implicit via repeated interactions and institutional continuation.
The trust tradition implicitly assumes that trust can reproduce itself over time (e.g., sustaining a
cooperative relationship). However, detailed analysis of generational transfer or continuation of trust
is not a primary focus.

Internal Debates and Contrasts
• Luhmann vs. Gambetta: Gambetta (and many rationalists) treat trust as an expectation-level or
subjective probability about future actions 1 . In contrast, Luhmann emphasizes trust as an action/
decision bridging the unknown future (not merely a mental calculus). In Gambetta’s terms, trust is
(roughly) a cognitive belief about outcomes 1 , whereas Luhmann (1979) famously defines trust as
a device for coping with others’ freedom 4 . In practice, Gambetta’s view suggests you could, in
principle, assign a number to your trust; Luhmann’s implies trust is a choice to proceed under
uncertainty. These reflect a common disagreement: is trust reducible to belief (expectation) or is it a
fundamentally social/relational act? The tradition harbors both camps (expectation vs commitment),
as well as hybrid accounts.
• Rational-choice (Hardin) vs. Moralistic (Uslaner): Hardin (2002) argues trust is grounded in
aligned self-interest (“encapsulated interest”) 3 . He treats trust as essentially rational: we trust
because it suits everyone to do so. Uslaner (2002), by contrast, emphasizes nonrational, moral, or
affective trust. He documents generalized trust in strangers that arises from cultural and personal
ethos, not just from repeated gainful exchange 5 . This debate echoes the old split between “trust
as calculus” and “trust as virtue.” In practice, some fields (economics, CS) lean toward the rational
view, while others (sociology, ethics) stress ingrained faith and social norms.
• Centralized vs. Decentralized Reputation: In the computer-science literature on reputation
systems, there is tension between centralized models (platforms like eBay or Amazon control and

5

aggregate ratings) and decentralized trust graphs (PGP/web-of-trust, or blockchain identities).
Practitioners debate whether trust should flow through a global authority or through peer
endorsements. The web-of-trust approach explicitly rejects centralized certification 21 , whereas
typical e-commerce systems rely on a corporation as aggregator. These reflect divergent
philosophies: trust derived from community consensus vs trust mediated by formal institutions.
• Trust vs. Reputation (Reducibility): Some computational accounts reduce trust to reputation score
(implying no deep difference). Philosophers and some sociologists counter that trust is irreducible to
mere reputation signals. Resnick et al. show how reputation scores increase trade (trust-building)
10 , supporting an instrumental view. Others argue trust inherently involves a relational
commitment beyond what any algorithm can capture. This divide mirrors similar debates: is “trust”
just a label for a high reputation, or is there an elusive interpersonal element? The tradition contains
both implicit endorsements of the former (trust = reputation in markets) and cautionary notes that
trust involves more than data points (e.g. normative expectations 18 ).

Critiques and Limits
Trust‐and‐reputation research faces several critiques. First, geographic/cultural bias: much empirical trust
work is based on Western, high-income settings (US, Europe). Claims of universal formulas for
trustworthiness or reputation are suspect without cross-cultural validation. Relatedly, decolonial scholars
question whether standardized trust metrics (survey questions, rating systems) impose Western notions of
trust on different communities.
Second, identity and sybil issues: technical literature warns that real systems must contend with identity
manipulation. The social-science literature often treats identity as given, but computer security highlights
Sybil attacks: if identities are cheap, reputation can be subverted. The theory of “cheap pseudonyms” 14
shows that without robust identity persistence, reputation systems devolve (newcomers are distrusted,
cooperation suffers). Critics note that many trust models oversimplify by assuming reliable identity.
Third, overemphasis on rational calculi: Much of economics/CS frames trust as rational expectation of
return, underplaying the “lived” and affective dimensions. As Uslaner argues, trust often reflects deepseated moral attitudes or social norms 5 that rational models miss. Skeptics say that reducing trust to
incentive alignment or reputation signals ignores trust’s subjective, vulnerable, or normative aspects. These
critics urge incorporating emotion, culture, and historical context.
Finally, normative blindspots: Some have observed that relying on contracts or technical fixes (like
reputation systems) to enforce trust can backfire, undermining intrinsic cooperative motivations (as in
Brené Brown’s claims or economic studies of crowding out). While not unique to this tradition, there is
concern that focusing on measurement leaves unexamined the social and moral functions of trust (for
example, what happens when people comply out of fear instead of trust, or how power imbalances shape
trust relationships).
Throughout, the literature underscores disagreements and gaps: there is no single consensus on many of
these issues. Absences (e.g. lack of focus on non-Western contexts, or on the concept of care) are often as
telling as presences. We find a spectrum of approaches rather than uniform doctrine, reflecting the
complexity of trust in human affairs.

6

## R-claims

- **R1**: Trust is defined either as expectation about another's future behavior or as willingness to be vulnerable to that behavior, and the tradition never fully collapses those into one model. [target:candidate:trust-primitive] [concept:reputation-market]
*R1 is supported by Gambetta, Hardin, Luhmann, and Uslaner.*

- **R2**: Distrust is an active negative stance rather than simply low trust, so models that treat it as mere absence are incomplete. [target:candidate:distrust-distinction] [concept:reputation-market]
*R2 is supported by the trust/distrust surveys and the SEP entry cited in the document.*

- **R3**: Trustworthiness and reputation are distinct: the first names a property of the trustee, while the second aggregates public memory of past behavior into a signal. [target:candidate:reputation-signal] [concept:reputation-market]
*R3 is supported by Gambetta, Hardin, and Resnick et al.*

- **R4**: Reputation systems only operate as durable incentive devices when identity persists across interactions. [target:candidate:identity-persistence] [concept:reputation-market]
*R4 is supported by Friedman & Resnick, web-of-trust literature, and Resnick et al.*

- **R5**: The tradition layers interpersonal trust, generalized trust, and system or institutional trust rather than treating trust as only a dyadic feeling. [target:candidate:system-trust] [concept:reputation-market]
*R5 is supported by Luhmann, Uslaner, and the sharing-economy trust study.*

- **R6**: Rational and computational trust models capture signaling and incentive dynamics but under-describe care, culture, and power. [target:meta:corpus-foundational-review] [concept:care]
*R6 is supported by Uslaner, Luhmann, Friedman & Resnick, and Resnick et al.*

Sources: Core definitions and debates are drawn from Gambetta (1988) 1 9 , Hardin (2002) 3 18 ,
Luhmann (1979) 4 22 , Uslaner (2002) 5 , as well as specialized studies of reputation systems (e.g.
Resnick et al. on eBay 10 , Friedman & Resnick on pseudonyms 14 ). Additional context comes from surveys
of trust/distrust 7 6 and crypto/web-of-trust glossaries 13 . These sources are used for definitions,
distinctions, and illustrative examples above. (Access: citations flagged [open-access]/[institutional] as
noted.)

1

2

4

9

12

17

19

22

(PDF) Can We Trust Trust? Diego Gambetta

https://www.researchgate.net/publication/255682316_Can_We_Trust_Trust_Diego_Gambetta
3

18

20

russellsage.org

https://www.russellsage.org/sites/default/files/hardin_Trust_chapter1_pdf.pdf
5

(PDF) The Moral Foundation of Trust

https://www.researchgate.net/publication/228191342_The_Moral_Foundation_of_Trust
6

7

8

Trust (Stanford Encyclopedia of Philosophy)

https://plato.stanford.edu/entries/trust/
10

Microsoft Word - 012906.doc

http://presnick.people.si.umich.edu/papers/postcards/PostcardsFinalPrePub.pdf
11

Microsoft Word - Reputation in Online Markets by Brown and Morgan v3.doc

https://faculty.haas.berkeley.edu/rjmorgan/Reputation%20in%20Online%20Markets.pdf
13

21

web-of-trust | KERISSE.org

https://weboftrust.github.io/WOT-terms/docs/glossary/web-of-trust
14

freehaven.net

https://www.freehaven.net/anonbib/cache/cheap-pseudonyms.pdf

Frontiers | Personal Trust and System Trust in the Sharing Economy: A Comparison of Communityand Platform-Based Models
15

16

https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.581299/full

7


