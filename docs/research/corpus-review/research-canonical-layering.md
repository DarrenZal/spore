---
research_input_for: corpus-foundational-review-v1
prompt_number: 13
tradition: "Canonical Layering Conventions (meta)"
source_tool: claude
source_file: "compass_artifact_wf-55fa505b-3b6d-438c-8a06-c71280db115d_text_markdown.md"
ingested: 2026-04-19
conversion_note: "native markdown export; no conversion"
status: raw-research-input
---

# Canonical layering in software architecture and documentation

The software-architecture and documentation-layering tradition (1995–present) converges on a small number of repeating moves — separate the domain from its machinery, invert dependencies toward a stable core, stratify documents by maturity and audience, and log decisions as they are made — but its major authors disagree sharply on whether layering should be strict or heuristic, on how decisions should be recorded, and on whether "layering" is even the right metaphor. The tradition treats **boundary, concern, and decision** as load-bearing primitives; it treats **trust, care, agency, and reciprocity** as largely absent except where they backdoor in as "security boundary" or "stakeholder concern." What follows is a primary-source synthesis, section by section, of how this tradition structures vision → foundation → protocol → implementation artifacts.

## §1 Primitives

**Layer as boundary of concern.** Evans (2003, Ch. 4, "Layered Architecture") fixes the canonical four-layer stack — **User Interface, Application, Domain, Infrastructure** — and states the motivating principle that "most of the code is not about the domain but about the technology of the software itself" and that "we need to decouple the domain objects from other functions of the system." Mark Richards, in *Software Architecture Patterns* (2015) and *Fundamentals of Software Architecture* (2020, Ch. on the Layered Architecture Style), generalizes this to an **n-tier "technically partitioned"** stack — presentation, business, persistence, database — and names a "closed layer" as one that forces requests through the layer immediately below it, producing "layers of isolation." In this tradition a "layer" is a named region of code with a restricted set of allowed collaborators; it is both an organizational unit for teams (Conway's law is explicitly invoked by Richards) and a unit of substitutability.

**Boundary between layers.** The boundary is the more abstract primitive: Evans's Bounded Context (Ch. 14, Part IV) defines "an explicit boundary within which a model applies" so that "teams in different contexts can evolve their models independently." In Cockburn's hexagonal model, the boundary is the application's outer edge, drawn as a hexagon specifically so that "the people doing the drawing have room to insert ports and adapters as they need, not being constrained by a one-dimensional layered drawing" (Cockburn, "Hexagonal Architecture," alistair.cockburn.us, 2005). In 42010, the system boundary is a stakeholder concern that must itself be framed by a viewpoint. In all three, **the boundary carries the contract**; the layer is a consequence of the boundary.

**Interface / contract.** Palermo's four tenets of Onion Architecture (2008) make this primitive explicit: "Inner layers define interfaces. Outer layers implement interfaces" and "the direction of coupling is toward the center." Wirfs-Brock's *Object Design* (2003, Ch. on Responsibilities and Collaborations) defines a **contract** as "an agreement outlining the terms of a collaboration" between roles, with "conditions-of-use and aftereffect guarantees" — the closest this tradition comes to a commitment primitive. Cockburn's "port" is the abstract contract; his "adapter" is its technology-specific implementation.

**Decision record (ADR).** Nygard's November 15, 2011 post "Documenting Architecture Decisions" (cognitect.com blog) defines an ADR as "a short text file in a format similar to an Alexandrian pattern. Each record describes a set of forces and a single decision in response to those forces." The canonical template has five parts — **Title, Status, Context, Decision, Consequences** — with "one ADR describes one significant decision for a specific project" and an append-only rule: "Once an ADR is accepted, it should never be reopened or changed — instead it should be superseded." Status values are "proposed / accepted / deprecated / superseded." Martin Fowler's bliki entry on ADRs reinforces the "single page" rule and credits Nygard with coining the term.

**Viewpoint (42010).** ISO/IEC/IEEE 42010:2011 defines an **architecture viewpoint** as "a work product establishing the conventions for the construction, interpretation and use of architecture views to frame specific system concerns." A viewpoint is a *specification*; a view is an *instance* built per that specification; together they frame one or more stakeholder concerns. The 2022 revision adds **stakeholder perspective** (grouping of concerns), **architecture aspect**, and **entity of interest** (generalizing "system of interest"). It also replaces "architecture model" with "view component" and abandons the UML metamodel.

**Concern / stakeholder concern.** 42010 makes this the atomic unit. The standard enumerates required concerns — "the purposes of the system; the suitability of the architecture for achieving the system's purposes; the feasibility of constructing and deploying the system; the potential risks and impacts of the system to its stakeholders throughout its life cycle; maintainability and evolvability" — and required stakeholders — "users, operators, acquirers, owners, suppliers, developers, builders, maintainers." Concerns are what viewpoints frame; the architecture description is complete when every identified concern is framed by at least one viewpoint.

**Conformance level (W3C).** The W3C Process Document (current version at w3.org/policies/process/; 2019 and earlier instances at w3.org/Consortium/Process-20010719/tr.html) stratifies technical reports into **maturity levels** along the Recommendation track: **Working Draft → Candidate Recommendation → Proposed Recommendation → Recommendation**, with ancillary **Working Group Note** and **Rescinded Recommendation** terminal states. A Working Draft "does not imply consensus"; a Candidate Recommendation "has been widely reviewed and satisfies the Working Group's technical requirements" and is published "to gather implementation experience"; a Recommendation "reflects consensus within W3C, as represented by the Director's approval." Conformance language uses RFC 2119 MUST/SHOULD/MAY.

**Bounded context (DDD).** Evans (Ch. 14) introduces this as the primary strategic primitive: a delimitation of applicability for a single ubiquitous language and model. Context-mapping patterns (Partnership, Shared Kernel, Customer-Supplier, Conformist, Anticorruption Layer, Open-host Service, Published Language, Separate Ways, Big Ball of Mud) describe inter-context relationships — the only place this tradition systematically names **relational** patterns between architectural units.

**Hexagonal layer (ports/adapters).** Cockburn's 2005 article replaces the linear stack with a symmetric enclosure. "The hexagonal, or ports and adapters, architecture solves these problems by noting the symmetry in the situation: there is an application with an inside and an outside." **Primary/driver adapters** call into the application; **secondary/driven adapters** are called by it. The number six is incidental; the symmetry is the point.

**Stratification principle — why layer at all.** Each author supplies a different answer. Evans: to isolate the domain model from technical concerns so it can be reasoned about as a thing unto itself. Cockburn: to allow the application "to equally be driven by users, programs, automated test or batch scripts, and to be developed and tested in isolation from its eventual run-time devices and databases." Palermo: to protect the object model from volatility in infrastructure. Brown: to give different audiences (executive, architect, developer) the right level of detail. Richards: separation of concerns and layers of isolation so that "a change in a layer should not affect any other layer." 42010: to ensure every stakeholder concern is explicitly addressed. W3C: to signal maturity and invite participation proportionate to stability. Procida: to match documentation form to user need. **No single principle unites the tradition; the tradition is a family of overlapping stratifications with different warrants.**

## §2 Layering

Layering itself is the central object. The major stratification proposals form a genealogy.

**Classical layered / n-tier.** Described most explicitly by Richards: presentation → business → persistence → database, each "closed." Richards is candid about its limits — "the layered architecture style is a good choice for small, simple applications or websites" and "also a good architecture choice, particularly as a starting point, when an architect is still analyzing business needs." Its dominant failure mode is the **architecture sinkhole anti-pattern**: "requests flow through multiple layers of the architecture as simple pass-through processing with little or no logic performed within each layer." Richards offers an empirical **80-20 heuristic**: up to 20% sinkhole traffic is healthy; more than that means layers should be opened.

**DDD's layered architecture.** Evans (Ch. 4) borrows the four-layer pattern but treats only the domain layer as non-negotiable: "DDD only really requires one isolated layer — the Domain Layer." Everything else may collapse without violating DDD. This is the first hint that in the tradition, layer count is negotiable but the *isolated core* is not.

**Hexagonal / ports and adapters.** Cockburn's critique is that layered diagrams lie: "First and worst, people tend not to take the 'lines' in the layered drawing seriously. They let the application logic leak across the layer boundaries, causing the problems mentioned above. Secondly, there may be more than two ports to the application, so that the architecture does not fit into the one-dimensional layer drawing." The hexagonal move is to abandon the vertical stack in favor of a symmetric boundary, with dependencies directed *inward* via dependency inversion.

**Onion architecture.** Palermo (2008, jeffreypalermo.com, four-part series) sits explicitly between hexagonal and DDD: "The application is built around an independent object model. Inner layers define interfaces. Outer layers implement interfaces. The direction of coupling is toward the center. All application core code can be compiled and run separately from infrastructure." Herberto Graça's widely-cited genealogy notes that Onion "builds on the Ports & Adapters Architecture to add some internal organisation to the business logic of the application based on a few Domain Driven Design concepts." Uncle Bob Martin's *Clean Architecture* (2017) later generalizes this into the "Dependency Rule": source-code dependencies only point inward.

**C4.** Brown's C4 model (c4model.com; *The Art of Visualising Software Architecture*, Leanpub; 2024 O'Reilly edition) is a stratification of **description**, not code. Four levels: **System Context** (system + users + external systems), **Containers** (deployable/runnable units), **Components** (logical modules inside a container), **Code** (class-level, often auto-generated). Supplementary diagrams: system landscape, dynamic, deployment. Brown's stated motivation is the "model-code gap" and the "lack of common vocabulary" in Kruchten's 4+1 ("What's the difference between the logical and development views?"). The principle is **zoom consistency** — every element at level N expands into a level N+1 diagram.

**Microservices / domain-partitioned.** Richards distinguishes **technically partitioned** architectures (layered, n-tier) from **domain-partitioned** ones (microservices). The distinction matters because it recasts layering as one choice among many axes of partitioning, not as the default.

**42010.** Not a layering scheme in the code sense but a *meta-stratification*: architecture / architecture description / architecture view / viewpoint / model (or view component) / AD element. The principle is **concern-driven decomposition**: every element of the description must be traceable to a stakeholder concern and a viewpoint.

**Principles driving the stratifications.** Across all of the above, the recurring warrants are: separation of concerns (Evans, Richards, Palermo); dependency direction (Cockburn, Palermo, Martin); testability and substitutability of infrastructure (Cockburn, Palermo); audience-appropriate communication (Brown, 42010, Procida); stakeholder-concern coverage (42010); and decision traceability (Nygard, ADR community). **Testability and domain isolation are the most consistently cited; "stakeholder value" appears only in 42010 and is rarely invoked by the code-level authors.**

## §3 Placement of universal concepts

**Boundary** is the single concept this tradition treats as fully load-bearing. It appears in Evans (bounded context, anticorruption layer), Cockburn (hexagon perimeter), Palermo (concentric rings), Brown (container/component boundary), 42010 (system boundary as stakeholder concern), and Richards (layer isolation). It is the tradition's most universally shared primitive.

**Commitment and intent** appear in weak forms. Wirfs-Brock's contracts — "an agreement outlining the terms of a collaboration" with "conditions-of-use and aftereffect guarantees" — are the closest formal commitment primitive. Nygard's **Context** section in the ADR template captures *intent* implicitly ("the issue that we're seeing that is motivating this decision"), and Paulo Merson's critique explicitly notes that Nygard's template "has no evident placeholder for the rationale behind the design decision" and proposes adding one; this is a standing disagreement within the ADR community about whether intent should be first-class.

**Evidence** appears only in the W3C process (implementation experience as gate for Candidate Recommendation advancement) and in 42010's "suitability" concern. No major code-architecture author names evidence as an architectural primitive.

**Trust** appears almost exclusively as **trust boundary** in security-architecture literature — a narrow technical sense, not an architectural value. 42010 does not enumerate trust as a required concern. **Care** appears nowhere as a load-bearing architectural concern in any of the primary sources surveyed. Evans's repeated emphasis on "domain experts" and "ubiquitous language" gestures at relational work between humans but never names care as a design primitive.

**Identity** appears only as "identity service" (authentication/authorization) in microservices discussions; it is not an architectural primitive in the surveyed tradition. **Memory** appears as "persistence" (the infrastructure layer) and as "event sourcing" (in DDD-adjacent CQRS literature); it is not thematized as a stratum of its own. **State** is pervasive but primarily as a thing to be *encapsulated* (aggregates in DDD; information-holder role stereotypes in Wirfs-Brock).

**Signals, agency, power/authority, reciprocity, reproduction/continuity** are absent. The tradition has no vocabulary for agency; actors in 42010 are "stakeholders" defined by *concerns*, not by agency. Power relations appear implicitly (Conway's law in Richards, organizational politics in Evans's strategic design chapters, "Director approval" in W3C) but are not architectural primitives.

**Holon-like-unit (whole-and-part).** Only C4 and the DDD bounded-context-within-large-scale-structure hierarchy implement anything like nested whole-part recursion. Brown's zoom relation ("a software system at Level 1 zooms into one or more container diagrams at Level 2") is the clearest expression. It is structural nesting, not holonic commitment.

**Norms/protocols.** W3C's Recommendation track is the one place where *norm-production* is explicitly stratified by maturity and consensus. This is, strictly speaking, outside the code-architecture tradition — but it is the closest analog to a "protocol layer" in the surveyed literature.

**Summary.** The tradition is **boundary-rich and agency-poor**. Its absences — trust, care, reciprocity, agency — are notable because they mark the limits of what a code-and-document-centric engineering discourse has been willing to formalize.

## §4 Internal disagreements

**Layered vs. hexagonal.** Cockburn's 2005 article is an explicit polemic: the layered drawing tempts "people [to] not take the lines seriously," leading to logic leakage across boundaries, and it cannot represent more than two ports without distortion. Richards concedes that pure layered architectures suffer the sinkhole anti-pattern and recommends opening layers as a remedy — but explicitly warns this costs isolation. Palermo's Onion is a compromise: preserve the layer metaphor but flip the dependency direction. Uncle Bob's Clean Architecture makes the flip universal. **There is no consensus resolution; practitioners choose among layered, hexagonal, onion, and clean largely on team familiarity and project scale.**

**DDD tactical vs. strategic priority.** Evans himself, in his 2009 QCon talk "What I've Learned About DDD Since the Book" and repeatedly thereafter (SE-Radio 226 in 2015, Explore DDD 2017 keynote), has said he **overemphasized tactical patterns** (entities, value objects, aggregates, repositories) at the expense of strategic design (bounded contexts, context maps, core domain). The 2014 DDD Exchange keynote is titled "Challenging the Fundamental Assumptions of DDD." Lev Gorodinski's widely-cited essay "The Two Sides of Domain-Driven Design" (2013) argues that "the most common misconception is that the tactical patterns define DDD." The community shift toward strategic-first DDD was reinforced by Vaughn Vernon's *Implementing Domain-Driven Design* (2013), which leads with context mapping before descending to tactical building blocks. **The canonical author disavows the canonical emphasis of his own early readers.**

**ADR granularity.** Nygard's original rule — "one ADR describes one significant decision" — competes with practitioner experience that significant decisions are often compound. Michael Keeling's "Love Unrequited" (*IEEE Software* 39(4), 2022) and his Tech Lead Journal interview describe using "stub ADRs" for in-flight decisions, while Fowler's bliki warns of ADR bloat. A *ResearchGate* MSR study on GitHub (Using Architecture Decision Records in Open Source Projects, 2023) found that "about 50% of all repositories with ADRs contain just one to five ADRs, suggesting that the concept has been tried but not yet definitively adopted." A 2023 InfoQ article, "Has Your Architectural Decision Record Lost Its Purpose?", argues that ADRs "drift from their original purpose" when loaded with every decision and proposes a separate **Significant Decision Record**. Paulo Merson's ADR template adds an explicit **Rationale** section, on the grounds that Nygard's template buries the "why." MADR (Markdown Any Decision Records) further extends the template with **Considered Options** and **Pros/Cons**. **The ADR community fragmented into at least four templates within a decade of Nygard's post.**

**Tight vs. loose layer separation.** Richards's closed-layer rule ("a request must go through the layer right below it to get to the next layer below that one") conflicts with Palermo's explicit allowance that "any outer layer can directly call any inner layer, which does not break the coupling direction and avoids creating proxy methods and even proxy classes that contain no business logic, just for the sake of complying with some layering scheme." Martin Fowler, cited approvingly by Palermo, shares this view. Cockburn sidesteps the issue by rejecting layering altogether. **The tradition is genuinely split: strict layer isolation vs. directional-but-non-strict dependency rules.**

**Documentation-layering vs. architecture-layering.** Procida's Diátaxis and Evans/Brown/Cockburn do not speak to one another in the primary literature. Diátaxis stratifies *documents by user need* (tutorials, how-to, reference, explanation); DDD/C4 stratifies *code or code-descriptions by concern*. The principles partially overlap — both insist that mixing concerns in a single artifact degrades it — but the axes differ. Diátaxis's axes are acquisition/application × action/cognition; C4's axes are zoom level. **No primary author in the documentation-layering tradition claims Diátaxis and architectural layering share a deep principle; the connection is analogical, not theoretical.** Emmanuel Bernard's 2024 essay observes that "the Diátaxis documentation does not follow the Diátaxis approach," suggesting the framework itself resists its own rigid application.

**42010 vs. everything else.** Practitioners repeatedly describe 42010 as too heavyweight. The arc42 quality model, TRAK, and the IMT blog all present 42010 via summaries and templates rather than direct adoption, tacitly acknowledging that few teams read the standard. The standard's own FAQ concedes that "the Standard does not dictate to architects which viewpoints to use because there is no consensus on which views are important." **42010 is the tradition's formal-ceiling; C4 and ADRs are the tradition's floor. Practitioners overwhelmingly adopt the floor.**

## §5 Critiques and limits

**Layering as dogma vs. heuristic.** Richards, a defender of the layered style, nonetheless catalogs its failure modes (sinkhole, big ball of mud, monolith creep, "architecture by implication") more systematically than any critic. Cockburn treats layering as a visualization defect. Evans at Explore DDD 2017: "It would be a shame if we did DDD like I wrote it in the book." The tradition's most articulate voices treat layering as heuristic scaffolding that must be abandoned or restructured when the domain is better understood.

**Over-architecting before the domain is understood.** Evans warns against this repeatedly; Vernon reinforces it; Palermo explicitly scopes Onion to "long-lived business applications" and states it is "not appropriate for small websites." The 2023 GitHub MSR study on ADRs shows low sustained adoption, consistent with the hypothesis that formal decision records impose cost before teams have a stable enough domain to decide about.

**ADRs as documentation debt.** The InfoQ critique ("Has Your Architectural Decision Record Lost Its Purpose?") names a specific failure mode: ADRs used as **blame insurance** — "some teams believe that by putting a decision in an ADR they can absolve themselves from the consequences… the more people who see and explicitly or tacitly approve an ADR, the more the responsibility for making a poor decision is diluted." The article proposes separating architectural decisions from merely-significant decisions to prevent dilution. AWS's Architecture Blog adds that ADR meetings should be "30–45 minutes maximum" and that fewer than three readouts should suffice — an implicit concession that ADR processes balloon.

**Divio/Diátaxis unevenly adopted.** Procida himself (via Sarah Wachs on the #diataxis Slack, as reported by Tom Johnson) notes that "Diátaxis isn't meant to impose four rigid buckets that content must squeeze into. Rather, it's an analytical approach." Adoption is real (Django, Gatsby, Cloudflare, Canonical/Ubuntu, LangChain) but uneven; Emmanuel Bernard's critique observes that "knowledge might not neatly fit into these four categories" and that the Diátaxis documentation itself does not rigidly follow Diátaxis.

**42010 too heavyweight.** The standard's required concerns (purposes, suitability, feasibility, risks, maintainability) and required stakeholders (eight categories) are already more than most agile teams will produce. Its adoption pattern — arc42 templates, TRAK, blog-summary articles — suggests it functions as a *legitimating reference* for regulated industries (medical, aerospace) more than as a working framework. Pacific Certification's adoption guide concedes "the complexity of larger systems" as the dominant barrier.

## §6 Citations

**Eric Evans, *Domain-Driven Design: Tackling Complexity in the Heart of Software* (Addison-Wesley, 2003).** Ch. 4 "Isolating the Domain" (Layered Architecture, Smart UI anti-pattern); Ch. 2 (Ubiquitous Language); Ch. 5–6 (Entities, Value Objects, Services, Aggregates, Repositories, Factories); Part IV Ch. 14 (Bounded Context, Context Map, Anticorruption Layer). [print; draft manuscript PDF open-access at fabiofumarola.github.io/nosql/readingMaterial/Evans03.pdf]

**Eric Evans, "What I've Learned About DDD Since the Book" (QCon 2009; InfoQ presentation).** [open-access: infoq.com/presentations/ddd-eric-evans/]

**Eric Evans, "Challenging the Fundamental Assumptions of DDD" (DDD Exchange 2014, InfoQ news 2014/06).** [open-access: infoq.com/news/2014/06/dddx-evans-challenging/]

**SE-Radio Episode 226: Eric Evans on Domain-Driven Design at 10 Years (May 2015).** [open-access: se-radio.net/2015/05/se-radio-episode-226/]

**Alistair Cockburn, "Hexagonal Architecture" (2005, revised 2023).** Definitions of ports, adapters, symmetric boundary; critique of layered "lines." [open-access: alistair.cockburn.us/hexagonal-architecture/]

**Jeffrey Palermo, "The Onion Architecture" Parts 1–4 (2008, 2013).** Four tenets; inner-interface/outer-implementation rule; relation to layered and hexagonal. [open-access: jeffreypalermo.com/2008/07/the-onion-architecture-part-1/]

**Simon Brown, *The C4 Model for Visualising Software Architecture* (c4model.com, 2011–present; book O'Reilly 2024 / Leanpub *The Art of Visualising Software Architecture*).** Four levels; notation-independent principle; critique of Kruchten 4+1 "model-code gap." [open-access: c4model.com; paywalled for book]

**Philippe Kruchten, "Architectural Blueprints — The '4+1' View Model" (IEEE Software, Nov 1995).** Logical, Process, Development, Physical, Scenarios views. [institutional via IEEE Xplore]

**Michael Nygard, "Documenting Architecture Decisions" (November 15, 2011), Cognitect/Relevance blog.** Five-part template (Title/Status/Context/Decision/Consequences); append-only rule; Alexandrian-pattern framing. [open-access: cognitect.com/blog/2011/11/15/documenting-architecture-decisions]

**Michael Nygard, *Release It!: Design and Deploy Production-Ready Software* (Pragmatic Bookshelf, 2007; 2nd ed. 2018).** [print / paywalled]

**adr.github.io (Architectural Decision Records community site).** Templates (MADR, Nygard, Y-Statement); links to Zdun et al.'s "Sustainable Architectural Decisions." [open-access]

**Michael Keeling, "Love Unrequited: The Story of Architecture, Agile, and How Architecture Decision Records Brought Them Together," *IEEE Software* 39(4), 2022. Also Keeling & Runde, "Architecture Decision Records in Action" (SATURN 2017).** Note: the research task refers to "Andrew Keeling"; the practitioner-author in the ADR literature is **Michael Keeling**. [institutional via IEEE]

**Michael Keeling, *Design It! From Programmer to Software Architect* (Pragmatic Bookshelf, 2017).** [paywalled / print]

**Paulo Merson, ADR-template (github.com/pmerson/ADR-template).** Critique of Nygard template's missing Rationale field. [open-access]

**Kolb et al. (2023), "Using Architecture Decision Records in Open Source Projects – An MSR Study on GitHub," *IEEE Access* 11.** Adoption metrics (~50% of repos with ADRs have 1–5 ADRs only). [open-access via ResearchGate]

**InfoQ, "Has Your Architectural Decision Record Lost Its Purpose?" (2023).** Critique of ADR dilution and blame-insurance use. [open-access: infoq.com/articles/architectural-decision-record-purpose/]

**Martin Fowler, "Architecture Decision Record" (bliki entry).** Single-page rule; append-only; inverted-pyramid style. [open-access: martinfowler.com/bliki/ArchitectureDecisionRecord.html]

**ISO/IEC/IEEE 42010:2011, "Systems and software engineering — Architecture description"** (superseding IEEE 1471:2000). Architecture description, architecture viewpoint, architecture view, stakeholder, concern, model, correspondence. [paywalled at iso.org/standard/50508.html; conceptual model open-access at iso-architecture.org/ieee-1471/cm/]

**ISO/IEC/IEEE 42010:2022 (2nd edition).** Adds Entity of Interest, Stakeholder Perspective, Architecture Aspect; replaces Architecture Model with View Component. [paywalled; changes summarized open-access at iso-architecture.org]

**W3C Process Document (current; also historical versions 2001, 2004, 2005, 2014, 2019).** Maturity levels: Working Draft → Candidate Recommendation → Proposed Recommendation → Recommendation; Working Group Note; Rescinded Recommendation. [open-access: w3.org/policies/process/ and w3.org/Consortium/Process*]

**IETF RFC 2119, "Key words for use in RFCs to Indicate Requirement Levels" (Bradner, 1997).** MUST/SHOULD/MAY conformance vocabulary invoked by W3C. [open-access: rfc-editor.org/rfc/rfc2119]

**Daniele Procida, "Diátaxis" (diataxis.fr) and original Divio documentation system (documentation.divio.com, ~2017).** Four modes — tutorials (learning-oriented), how-to guides (task-oriented), reference (information-oriented), explanation (understanding-oriented); acquisition/application × action/cognition axes. [open-access]

**Daniele Procida, "What nobody tells you about documentation" (PyCon Australia 2017 talk).** [open-access: video and transcript]

**Canonical/Ubuntu, "Diátaxis, a new foundation for Canonical documentation" (Ubuntu blog, 2021).** Large-scale enterprise adoption report. [open-access: ubuntu.com/blog/diataxis-a-new-foundation]

**Tom Johnson, "What is Diátaxis and should you be using it?" (idratherbewriting.com, 2023/2025).** Critique and comparison to DITA, Information Mapping. Includes Procida's clarification that Diátaxis is analytical, not rigid buckets. [open-access]

**Emmanuel Bernard, "Exploring Diátaxis" (emmanuelbernard.com, December 2024).** Critique: Diátaxis's own docs don't follow Diátaxis; flexibility caveat. [open-access]

**Mark Richards, *Software Architecture Patterns* (O'Reilly, 2015).** Layered architecture chapter; closed/open layers; architecture sinkhole anti-pattern; 80-20 heuristic; big ball of mud. [open-access: oreilly.com/content/software-architecture-patterns/]

**Mark Richards & Neal Ford, *Fundamentals of Software Architecture: An Engineering Approach* (O'Reilly, 2020).** Layered as technically-partitioned vs microservices as domain-partitioned; Conway's law. [paywalled / print]

**Rebecca Wirfs-Brock & Alan McKean, *Object Design: Roles, Responsibilities, and Collaborations* (Addison-Wesley, 2003).** Responsibility-Driven Design; role stereotypes (information holder, structurer, service provider, coordinator, controller, interfacer); contract as "conditions-of-use and aftereffect guarantees"; CRC cards. [print]

**Rebecca Wirfs-Brock, "A Brief Tour of Responsibility-Driven Design" (wirfs-brock.com PDF).** Definitions: responsibility, collaboration, contract, role, object. [open-access]

**Vaughn Vernon, *Implementing Domain-Driven Design* (Addison-Wesley, 2013).** Strategic-first DDD; context-mapping elaborations. [print]

**Robert C. Martin, *Clean Architecture: A Craftsman's Guide to Software Structure and Design* (Prentice Hall, 2017).** The Dependency Rule; generalization of hexagonal/onion. [print]

**Herberto Graça, "Onion Architecture" in *The Software Architecture Chronicles* (Medium, 2017; herbertograca.com).** Historical genealogy connecting layered → hexagonal → onion → clean. [open-access]

**Lev Gorodinski, "The Two Sides of Domain-Driven Design" (gorodinski.com, 2013).** Community self-critique of tactical overemphasis. [open-access]

**Joel Parker Henderson, architecture-decision-record repo (github.com/joelparkerhenderson/architecture-decision-record).** Canonical collection of ADR templates and variants. [open-access]

## Conclusion

What this tradition actually teaches — read across its primary sources rather than in any one of them — is that **stratification is only defensible when tied to a specific kind of change**. Evans layers to protect the domain from technology churn; Cockburn insulates the application from drivers; Brown separates audiences; W3C separates maturity states; Procida separates user needs; Nygard separates decisions from their rationale and outcomes. When the axis of change is misidentified — when a team layers "because that's how it's done" — the stratification produces sinkholes (Richards), big balls of mud (Foote & Yoder via Richards), ADR fatigue (Keeling, InfoQ), or Diátaxis-shaped folders holding mis-typed content (Bernard). The tradition's implicit meta-principle, visible only when the whole literature is read together, is that **a layering is a hypothesis about what will vary independently**, and the cost of a wrong hypothesis scales with how strictly the layering is enforced. The absences are equally diagnostic: this tradition does not know how to name trust, care, agency, or reciprocity as architectural primitives, so it imports them either as security concerns (trust boundary), as stakeholder-concern line items (42010), or not at all. A project checking its own layering against this tradition will find the tradition strict about boundary and decision, silent about commitment and care, and internally divided on almost every question of strictness versus heuristic.
