---
research_input_for: corpus-foundational-review-v1
prompt_number: 16
tradition: "Audience / Reader-Scoping (meta)"
source_tool: chatgpt-or-gemini
source_file: "Audience and Reader-Scoping in Documentation.pdf"
ingested: 2026-04-19
conversion_note: "converted via pdftotext from source PDF on 2026-04-19; inline footnote numbers preserved (not hyperlinked)"
status: raw-research-input
---

Audience and Reader-Scoping in Documentation
Documentation traditions recognize that different readers have different needs and expertise, and they
organize content accordingly. Industry standards and frameworks treat audience as a key determinant of
content and structure. For example, ISO/IEC/IEEE 26515 defines an audience as a category of users “sharing
the same or similar characteristics and needs” (e.g. usage purpose, education level, tasks, experience) that
determine the documentation’s content and structure 1 . It explicitly notes that a product often has
multiple audiences (for example, management vs. end users) 1 . Similarly, the IEEE 1063 standard
(Software User Documentation) emphasizes proper audience identification as critical for successful
documentation 2 . IEEE 1063 even prescribes that if one document addresses multiple audiences, it should
either use separate sections for each audience or produce entirely separate documents per audience 3 . In
practice, this encourages a layered or segmented approach: separate tutorials, guides, reference sets, etc.,
aimed at distinct user groups. The Diátaxis framework (Divio) likewise embeds this principle by identifying
four distinct user needs and corresponding doc types (Tutorials, How-to guides, Reference, Explanation) and
“proposes that documentation should itself be organised around the structures of those needs” 4 . In
short, the tradition treats multiple audiences as fundamental: documentation is not one-size-fits-all, and
organizing content by audience or task is the norm (often contrasted with the older artifact-first approach
of documenting by feature code).
Reader archetypes (novice/intermediate/expert). To accommodate layered audiences, documentation
authors often informally classify readers by skill or familiarity. For example, Daniele Procida’s Diátaxis
framework explicitly maps its four doc types to reader expertise: Tutorials target beginners, How-to guides
target intermediate users (practitioners with some familiarity), Reference targets experienced users, and
Explanation targets expert developers seeking deep understanding

5

6

. This map (beginner→tutorial,

intermediate→how-to, experienced→reference, expert→explanation) is widely echoed in technical writing
practice: “getting started” or beginner tutorials assume no prior knowledge, while advanced reference
material assumes deep familiarity. ISO/26515 and IEEE 1063 do not use the terms novice/intermediate/
advanced, but their call for multiple audiences and specialized documents implies it. Thus, the tradition
acknowledges reader archetypes, even if different authors categorize them slightly differently.
Tutorials (learning-oriented). The tradition clearly distinguishes tutorials as an educational, step-by-step
format. Diátaxis defines a tutorial as “always learning-oriented” – essentially a lesson under an instructor’s
guidance 7 . It “takes place under the guidance of a tutor… a practical activity in which the student learns
by doing something meaningful toward an achievable goal” 7 . In other words, tutorials prioritize skill
acquisition over task completion: “its purpose is not to help the user get something done, but to help them
learn” 8 . In practical terms, tutorials typically present clear, linear steps and explain concepts on-the-fly.
IEEE 1063’s notion of “instructional” usage mode (see below) aligns with tutorial intent. The emphasis on
pedagogy in tutorials (small steps, immediate results, repetition) is noted by Procida 9 .
How-to guides (task-oriented). In contrast, how-to guides are defined around concrete tasks or problems.
Diátaxis calls them “goal-oriented” directions guiding the user to a result 10 . Specifically, a how-to “helps
the user get something done, correctly and safely; it guides the user’s action” 10 . The focus is on the user’s
work and real-world problems, not on comprehensive education. How-tos are “defined by the needs of a

1

user” and “answer to a human project” 11 . They assume the reader knows what they want to achieve (“the
user has a concrete question in mind” 12 ) and have some baseline competence (intermediate skill). The key
is minimal extraneous detail: “action and only action” 13 . Diátaxis contrasts how-tos with tutorials:
conflating them “is at the root of many difficulties” 14 . IEEE 1063 would classify how-tos under
“instructional mode” (see below).
Reference (information-oriented). Reference documentation is defined as factual, product-centered
descriptions. Diátaxis: “Reference guides are technical descriptions of the machinery and how to operate it.
Reference material is information-oriented” 15 . It “contains propositional or theoretical knowledge that a
user looks to in their work,” and its only purpose is to describe the product “as succinctly as possible, and in
an orderly way” 16 . Crucially, reference is led by the product, not by user questions 17 . In practical terms,
this means API lists, configuration options, data formats, etc. Reference content must be concise, factual,
and wholly authoritative: “one hardly reads reference material; one consults it” 18 . It should have no
ambiguity or doubt and serve as a reliable “firm platform” of truth 18 . IEEE 1063’s “reference mode”
similarly requires that information be organized for random access (e.g. alphabetical lists of commands)
19 . In both Diátaxis and standards, reference documentation carries the expectation of completeness and
neutrality (e.g. list all commands or options).
Explanation (understanding-oriented). Explanation (often called “conceptual” or “background” guides)
addresses the big picture and conceptual context. Diátaxis: “Explanation is a discursive treatment of a
subject, that permits reflection… understanding-oriented” 20 . Explanations deepen the reader’s
understanding, “bring clarity, light and context” 21 , and link ideas together. Unlike tutorials or how-tos
(which show “point-of-view” use of the product) or reference (close-up on components), explanation is a
higher-level perspective (sometimes called “conceptual guides” or “background” material) 22 . It answers
questions like “Can you tell me about…?” 22 . While not a standard term in IEEE 1063, the “Concept of
operations” section in IEEE 1063 and the Content category (e.g., conceptual background) covers much of the
same ground (introduction material). Diátaxis stresses that explanation is often overlooked, but crucial for a
coherent knowledge base 23 .
Progressive disclosure. The concept of progressive disclosure – revealing information in layers so as not
to overwhelm the user – is a recognized usability practice but not explicitly named in early documentation
standards. However, modern technical writing advice incorporates it. Tom Johnson, for example, advises to
“layer information so that you don’t present everything to the user at once,” showing higher-level topics first
and finer details on secondary levels 24 . This principle maps well to the layered approach of Diátaxis (intro/
tutorial before deep dive), but IEEE 1063 simply defines two modes (instructional vs reference) without
using the term. In summary, while “progressive disclosure” is a known UX pattern, in this documentation
tradition it appears implicitly in the separation of tutorials and how-tos (broad tasks first, detail later) rather
than as a formal guideline.
Authoritative content vs. examples. The tradition distinguishes fact-based reference content from
instructive examples. Diátaxis explicitly says reference guides should be “neutral description” and “wholly
authoritative” (like a map) 18 . This reflects the need for trust: users rely on reference docs for accuracy and
certainty 25 . By contrast, tutorials and how-tos may include illustrative examples, stories, or derived
solutions. Thus documentation can range from authoritative (specifications, API docs) to demonstrative
(worked examples). Standards reinforce this: IEEE 1063 requires no ambiguity in reference info, and warns
that mixing modes (combining tutorials and reference in one document) demands clear formatting 26 . In

2

effect, the tradition treats authoritative, product-centric content (reference) as the primary source of “truth,”
whereas learning or task content may draw on the authors’ selected examples or context.
Versioning. Documentation is expected to be versioned separately from the product. IEEE 1063 requires
identification data that includes “document version” and “publication date” distinct from software version
27 . In practice, most docs-as-code systems tag documentation releases alongside code releases, but
maintain clear doc version numbers. This implies that documentation is its own artifact, with life-cycle
tracking.
Scope. Scope-of-applicability is explicitly documented. The introduction of each major document (per IEEE
1063) “describes the intended audience, scope, and purpose” of that document 28 . In effect, every manual or
guide should state what it covers (and by implication what it does not) and who it’s for. This fits the usercentric approach: users immediately see if a given document applies to their context. Thus scope
boundaries are a required part of structured documentation.
Machine-readable representation. A recent development in documentation is the use of structured,
machine-readable layers aimed at AI or tools. Traditional tech docs were intended for human readers, but
new forms are emerging. For example, Model Cards (Mitchell et al. 2019) and Dataset Cards (Gebru et al.
2018) are publicized formats that include YAML/JSON metadata for ML models/datasets. Hugging Face’s
docs describe model cards as “simple Markdown files with additional metadata” (e.g. YAML front-matter) to
aid discoverability and reproducibility 29 30 . Similarly, recent proposals like “AI Cards” envision AI
documentation with both human-readable and machine-readable parts 31 . In the tradition of
documentation, these efforts are not yet mainstream “standards,” but they represent an emerging layer:
documentation designed in part for automated consumption by LLMs or compliance tools. Thus the
tradition is beginning to incorporate “machine-readable documentation” as a concept (often as structured
metadata), though primary sources on core docs practices mostly anticipate human readers.

2. Layering
A central tenet of the Diátaxis approach is that documentation has four layers corresponding to user needs,
and should be organized that way audience-first rather than code-first. Procida states flatly: “There isn’t one
thing called documentation, there are four. They are: tutorials, how-to guides, technical reference and
explanation.” 32 . The documentation system should be built around these quadrants, each serving a
distinct purpose 4 . In other words, documentation’s architecture should reflect user tasks and learning
paths. For example, a “beginner” might first encounter a tutorial (learning layer) then how-to guides (task
layer) and only later need API reference (information layer).
This audience-first organization contrasts with an artifact-first or code-centric approach, where docs are
structured exactly like the software’s classes or modules. In practice, many legacy docs mix the layers (socalled “gravitational pull” collapses quadrants 33 ). Diátaxis explicitly warns that conflation of layers is
common and problematic. Nevertheless, Divio’s system insists that recognizing and separating the four
tiers yields better usability: they even highlight that substantial projects (like Django’s docs) implicitly follow
this scheme 33 . Despite that, as Divio notes, “it’s rare to find clear examples of it used fully” 33 – most
organizations mix content by module or audience in ad hoc ways.
Another layering debate is human-only vs human+AI. Traditional docs assume a human reader; layering
was intended for human sense-making. But the rise of AI agents and tools suggests we might add layers

3

geared to machines. For instance, Model/Dataset Cards include metadata tags so that AI systems can parse
them automatically. The proposal of “AI Cards” explicitly proposes parallel human-readable and machinereadable layers 31 : a human overview plus an XML/JSON representation of the same info. This is an
emerging contested space: some see structured metadata as part of documentation, others as a separate
compliance artifact. In any case, it’s clear that layering in documentation is expanding beyond human
readers.

3. Universal Concepts
The tradition of technical documentation does not frame itself around abstract concepts like “trust” or
“care,” but some such ideas appear implicitly in its principles. In particular, trust/authority is a load-bearing
concept. Reference docs are supposed to be trustworthy facts. Diátaxis says a reference guide should
inspire confidence by giving users “truth and certainty” on which to stand 25 and “no doubt or ambiguity…
wholly authoritative” descriptions 18 . IEEE 1063 likewise demands factual accuracy and completeness. In
effect, documentation must earn user trust through accuracy and consistency. Other concepts like care or
identity are not explicitly defined in core sources. For example, neither IEEE 1063 nor Diátaxis uses the
term identity (aside from identifying docs by audience); notions like authorial or organizational identity do
not feature. Norms/protocols appear indirectly: standards themselves impose formatting and content
norms (see IEEE 1063’s required sections 34 ), so one might say a norm is embedded in style guides.
Some listed concepts seem absent. There is no discussion of agency or power in documentation literature –
documentation gives instructions, but does not address social power relations. Memory and state of readers
or docs are not prominent ideas (except version history). Commitment, intent, and evidence (terms from
discourse theory) do not appear in the docs-as-product literature. Boundary has partial relevance: the
concept of scope (what the doc covers) sets boundaries 28 , but philosophical discussion of system
boundaries is not present. Reciprocity and reproduction/continuity are not mentioned except as quality
practices: e.g. “reproduction” might be met by reusing content modules, but not a named concept. In
summary, most of these abstract terms are not explicit load-bearing elements of this tradition. Trust/
authority is addressed via requirements for accuracy 18 , and scope introduction covers boundaries 28 , but
other notions are either absent or only implicit.

4. Internal Disagreements
Within the technical-writing community, several debates reflect differing priorities:
• Docs-as-Product vs Docs-as-Afterthought. A growing camp (often in large tech firms) argues
documentation should be managed like a product: with dedicated teams, user research, metrics, and
continuous iteration. For instance, Naidu (2022) describes how treating docs as a standalone product
involves applying product management practices (user personas, analytics, CI/CD for docs) 35 36 .
Companies like Google, Stripe and Vercel explicitly say their docs are engineered assets (with
dashboards, version control, etc.) 37 35 . In contrast, many organizations still view docs as
secondary: engineering teams often “leave the documentation to rot” until late 38 . Tom Johnson
and others regularly lament that “docs are second-class” and urge running docs through the same
review/versioning pipeline as code 39 40 . This split – whether docs get their own product
investment or are crammed into existing dev workflows – is a major fault line.

4

• Audience-first vs Reference-first. Closely related is the organization debate: should we prioritize
meeting user goals (tutorials/guides first) or ensure a complete artifact (e.g. full API reference)?
Procida’s Diátaxis squarely stands on the “audience-first” side, arguing each section should be
crafted with a user need in mind 4 . Traditional documentation (especially in engineering-centric
companies) often inverted this: they built an exhaustive reference manual, then tacked on example
guides for tasks. Some older texts (like ISO 15289/26515) do emphasize defining user docs as
products too, but in practice many developers start from code. There is no formal consensus, but it’s
an area of debate: Diátaxis and docs-as-product advocates stress audience-driven structuring, while
legacy systems tend to be code-driven.
• Human-focused vs AI-Structured. Another tension is whether to continue writing solely for
humans or to build structured formats for AI/automation. Some new standards (or proposals like
IEEE 7003 on model cards) view documentation partly as metadata. Practically, this is causing
debate: should model cards and data sheets be treated as part of the formal documentation set, or
as adjunct metadata? Hugging Face treats a model card’s markdown+YAML as a user-facing README
29 , but regulatory views (e.g. forthcoming AI Act compliance) see them more as compliance
artifacts 31 . The line is blurred, and the field has not settled on whether to “count” this structured
content as traditional docs or as metadata layers. However, it is agreed that documentation
increasingly must serve both humans and machines, creating a contested emerging norm.

5. Critiques and Limits
Critics note that many of the advocated practices are aspirational or unevenly applied:
• Tiered architecture adoption. While Divio’s four-tier system is influential, adoption is mixed. Divio
itself acknowledges “it’s rare to find clear examples of it used fully” 33 . Projects often collapse tiers:
for example, combining how-to steps into the reference. Even when documentation separates user
guides and reference, it’s seldom as systematically layered as Diátaxis suggests. In short, the ideal of
strict layering often gives way to pragmatic blends.
• Resource requirements. Treating docs as a product requires significant investment. Naidu points
out that only tech giants have committed to building documentation teams and processes 37 .
Smaller companies or non-profit projects often cannot afford such overhead. Critics warn that
advocating high standards (continuous user research, CI/CD pipelines for docs, analytics) might
exclude teams without those resources. The “docs-as-code” approach (embedding docs in
engineering workflows) is one solution, but it too assumes tools and skills that some groups lack.
Thus, many organizations still default to minimal or legacy documentation due to practical
constraints.
• Retrofit challenges. Embedding machine-readable structure into existing docs is often awkward.
For example, projects may retroactively add YAML metadata to Markdown to comply with modelcard templates, but this seldom surfaces in the core writing. Early AI-documentation proposals like
AI Cards note that current practices “pay little attention” to comprehensive, standardized
documentation of AI systems 31 . In general, critics say: adding structure to human-written docs
after the fact (without tooling or standards) leads to inconsistency. In many cases, model cards and
dataset sheets have been introduced only when developers independently decide to do so, rather

5

than as an integrated part of doc culture. As a result, the quality and completeness of such AI-centric
docs vary widely.
• Gap between stated and actual audience. Organizations often claim a multi-tiered audience
structure on paper, but in reality their docs may not meet each group’s needs. For instance, a
“beginner’s guide” might be too terse, or an “API reference” might lack examples for real use cases.
Divio’s observation that docs with missing quadrants are still “respected” by just acknowledging the
scheme 41 hints at a gap between theory and practice. In other words, declaring multiple audiences
is common, but fully delivering on that promise is hard. This aspirational declaration of audience
often exceeds actual alignment with user needs, which commentators have noted can lead to
frustration (e.g. experienced developers complaining that tutorials still assume too much).
Overall, the tradition encourages best practices (segmented audiences, tiered content, standards) but
acknowledges that many organizations implement them only partially. The critiques focus on feasibility and
cultural change: without institutional buy-in (teams, time, metrics), docs may remain “second-class” despite
rhetoric 39 40 .
## R-claims

- **R1**: Documentation standards treat audience as a first-class design input, and documents serving multiple audiences should segment or split accordingly. [target:meta:audience-scoping] [concept:knowledge-commons]
*R1 is supported by ISO/IEC/IEEE 26515 and IEEE 1063.*

- **R2**: Diátaxis's tutorial / how-to / reference / explanation quadrants formalize a real layered distinction in reader need, not a stylistic preference. [target:candidate:document-layering] [concept:knowledge-commons]
*R2 is supported by Diátaxis/Divio documentation and IEEE 1063's mode distinctions.*

- **R3**: Tutorials and how-to guides should not be conflated because one is optimized for learning and the other for task completion. [target:candidate:reader-mode-separation] [concept:knowledge-commons]
*R3 is supported by Procida's Diátaxis guidance and IEEE 1063's instructional/reference separation.*

- **R4**: Reference documentation earns authority by being factual, product-centered, and unambiguous rather than example-led. [target:candidate:reference-authority] [concept:evidence]
*R4 is supported by Diátaxis reference guidance and IEEE 1063.*

- **R5**: Machine-readable metadata is becoming a distinct documentation layer alongside human-readable explanation and instruction. [target:candidate:machine-readable-docs] [concept:knowledge-commons]
*R5 is supported by model-card and dataset-card practice, Hugging Face documentation, and AI Cards proposals.*

- **R6**: The field splits between docs-as-product and docs-as-afterthought, with explicit audience declaration appearing only in the more mature, productized stance. [target:meta:corpus-foundational-review] [concept:knowledge-commons]
*R6 is supported by Naidu's docs-as-product argument, Tom Johnson's layering guidance, and IEEE 1063/26515.*

Sources: Authoritative definitions and frameworks are drawn from Diátaxis/Divio documentation 32 4
7
10
16
20 , IEEE/ISO standards (IEEE 1063, ISO/IEC/IEEE 26515) 1
42 , and contemporary industry
writings 5 6 35 24 39 . These outline the tradition’s claims about audience, documentation types,
layering, and emerging structured docs. Each cited source is a primary or recognized professional
statement in the field.

1

ISO/IEC/IEEE 26515:2011 - Systems and software engineering —

https://standards.iteh.ai/catalog/standards/iso/a6f855ce-fe28-4b78-a3ed-e6bc0a576fa2/iso-iec-ieee-26515-2011?
srsltid=AfmBOorQQgYthmTxHA91yG9stIp5K_mQkzdov-t5bnZHKyfwshEgEFhV
2

3

19

26

27

28

34

42

IEEE 1063 - EverybodyWiki Bios & Wiki

https://en.everybodywiki.com/IEEE_1063
4

Diátaxis

https://diataxis.fr
5

6

12

A Framework for Better Documentation - Daniel Sieger

https://danielsieger.com/blog/2023/04/24/framework-for-better-documentation.html
7

8

9

Tutorials - Diátaxis

https://diataxis.fr/tutorials/
10

11

13

14

How-to guides - Diátaxis

https://diataxis.fr/how-to-guides/
15

16

17

18

25

Reference - Diátaxis

https://diataxis.fr/reference/
20

21

22

23

Explanation - Diátaxis

https://diataxis.fr/explanation/
24

Progressive Disclosure | I'd Rather Be Writing Blog and API doc course

https://idratherbewriting.com/ucd-progressive-disclosure/

6

29

30

Model Cards · Hugging Face

https://huggingface.co/docs/hub/model-cards

AI Cards: Towards an Applied Framework for Machine-Readable AI and Risk Documentation Inspired by
the EU AI Act
31

https://arxiv.org/html/2406.18211v1
32

About | Divio Documentation

https://docs.divio.com/documentation-system/
33

41

About the structure | Divio Documentation

https://docs.divio.com/documentation-system/structure/

Docs As Product: A Comprehensive Study On Adopting Product Mindset In Documentation | by
Harshini Naidu | Medium
35

36

37

https://naiduharshini428.medium.com/docs-as-product-a-comprehensive-study-on-adopting-product-mindset-indocumentation-22eb9ad40ceb

Documentation-as-Code in 2026: Are You Running Review, Versioning, and CI/CD for Your Docs? General - 10x.pub
38

39

40

https://tianpan.co/forum/t/documentation-as-code-in-2026-are-you-running-review-versioning-and-ci-cd-for-your-docs/2394

7


