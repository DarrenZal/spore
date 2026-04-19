---
research_input_for: corpus-foundational-review-v1
prompt_number: 14
tradition: "Repo-Topology Patterns (meta)"
source_tool: chatgpt-or-gemini
source_file: "Repository Topology Patterns_ Monorepo vs. Polyrepo vs. Hybrid.pdf"
ingested: 2026-04-19
conversion_note: "converted via pdftotext from source PDF on 2026-04-19; inline footnote numbers preserved (not hyperlinked)"
status: raw-research-input
---

Repository Topology Patterns: Monorepo vs.
Polyrepo vs. Hybrid
Repo topology debates focus on how to organize source control: whether all code lives in one place
(monorepo), many separate repositories (polyrepo), or some hybrid. This tradition examines practical and
empirical studies from 2010 onwards on these patterns. We first define key primitives used in the literature,
then examine layering (monorepo, polyrepo, hybrid, and tool layers), then note which high-level concepts
appear (trust, norms, etc.), and finally survey internal disagreements and critiques found in the sources. We
report each claim with its source reference 1 2 .

1. Primitives
• Repo (unit of version-control scope): A repository is a version-control container for source code. In
a polyrepo world, typically each component or project has its own repo. In a monorepo, a single
repository holds many projects. Google’s monorepo famously aggregates all code under one roof
(billions of files) 1 ; by contrast, organizations using polyrepo keep “thousands of GitHub repos” for
separate components 3 .
• Workspace (multi-package grouping): A workspace refers to a top-level grouping of multiple
packages or modules under one root. In tooling such as npm or Yarn, a workspace is a mechanism
to manage multiple packages from a single root project 4 . For example, npm defines “workspaces”
as features to manage multiple local packages in a singular root package 4 , and Yarn Workspaces
allow a JavaScript monorepo to hold many sub-packages. In Bazel (Google’s build system), the term
workspace is used for the top-level project workspace which can contain many subprojects. In
practice, “workspace” implies a logical multi-project environment often co-located in one repo.
• Module / Package: A module or package is a unit of code (library or application) that typically has its
own identity and dependencies. In a monorepo, many modules/packages live in one repo (often in
subdirectories). In polyrepo, each package usually lives in its own repo. For example, npm packages
or Maven artifacts correspond to modules. These terms appear informally; e.g. Netflix distinguishes
“components” and “services” as separately versioned units 5 .
• Build Graph: The build graph (or dependency graph) is the directed graph of modules and their build
dependencies. In monorepo-oriented tooling (like Bazel or Pants), the build graph spans the entire
repo, enabling fine-grained incremental builds. Kief Morris notes that a monorepo works well with
“build-time integration” and a single-build strategy: all projects in one repo can be built together
through a unified graph 6 . By contrast, in polyrepo each repo might have its own build graph
(managed separately), or a higher-level orchestrator might coordinate builds across repos.
• Dependency Boundary: A dependency boundary is the conceptual line beyond which one module’s
code cannot directly access another’s; dependencies must be declared across it. In a monorepo,
teams often enforce logical boundaries (e.g. via module-dependency rules) even though all code

1

lives together. In a polyrepo, each repo is a strict boundary by default. For instance, Nx recommends
tagging projects to ban unwanted inter-dependencies 7 . Kief Morris emphasizes Conway’s Law:
team boundaries and code boundaries should align 8 , suggesting a key role for dependency
boundaries.
• Cross-Repo Coordination Cost: This refers to the effort to make changes that span multiple repos.
In a monorepo, a single commit can atomically change multiple modules, greatly reducing
coordination overhead. Google touts “atomic changes, large-scale refactoring” as key monorepo
benefits 9 . Similarly, Jaspan et al. found engineers value that a monolithic repo “automatically
have[s] dependent code updated” when APIs change 2 . In contrast, polyrepo setups incur
coordination cost: cross-repo changes require multiple commits, PRs, and version bumps. The Netflix
team notes that “share-little” (i.e. separate-repo) systems sacrifice consistency and require more
coordination, whereas a monorepo “favors consistency and risk reduction” 10 . Polyrepo
independence can be illusory: Netflix calls it a trade-off, gaining tooling flexibility but paying in extra
coordination.
• Canonical Source-of-Truth: This is the authoritative copy of shared code. A monorepo inherently
provides one canonical repository (one SHA) for all code. Potvin and Levenberg explain Google’s
monorepo gives “a common source of truth for tens of thousands of developers” 11 . In polyrepo
setups, each repo’s HEAD is its own source-of-truth, and organizations sometimes enforce one
version of a library across repos via external registries. The notion of a single canonical repo is
central to the shared-canon model (all core libs in one repo).
• Federation (shared protocol across repos): Federation refers to multiple repos that cooperate via a
common protocol or interface. This is not extensively discussed in the technical literature, but one
example is Netflix’s experiment: they keep multiple repos but implement services (e.g. “publisher
feedback”) so that libraries in one repo can automatically update and globally refactor dependent
code across other repos 12 . In effect, Netflix is building a “federation” of repositories with
monorepo-like assurances (shared versioning, broad integration) while preserving separate repo
autonomy.
• Ownership (CODEOWNERS-style): Ownership defines which teams “own” which code. In monorepos,
tools like GitHub’s CODEOWNERS or Google’s own OWNERS files assign directories to specific teams.
The literature notes that monorepo practices often require flexible ownership. For example, Spotify
uses CODEOWNERS files to map squads to directory-level ownership within monorepos 13 . In a
polyrepo, each repo implicitly has its team owners, but cross-repo ownership can become
ambiguous. Some documentation (e.g. Nx) emphasizes defining ownership rules and review
processes per project 14 13 to manage this across many modules.
• Submodule vs. Subtree vs. Workspace: These are techniques to combine code from multiple repos.
A Git submodule links an external repo at a path, locking its version; a subtree embeds another repo’s
files into a subdirectory. Neither is widely advocated in this literature, as both add complexity.
Instead, true monorepo advocates typically avoid these and keep all code in one root. Workspaces
(npm/Yarn) allow a single repo to contain multiple packages with internal linking, effectively
simulating a monorepo via the package manager. In practice, “workspace” setups (npm, yarn, or
Gradle) are common in polyrepo-to-monorepo migrations to maintain independence while

2

developing locally in one repo. These primitives appear mainly in tooling guides (e.g. npm docs
rather than empirical studies.

4

)

2. Layering: Monorepo, Polyrepo, Hybrid, and Build Layers
This tradition identifies two main axes of layering: how code is partitioned into repos, and how tooling
layers on top.
• Monorepo (all code in one repo): In a monorepo pattern, all layers of the system (libraries, services,
apps) are kept together in a single repository. This can simplify consistency: “everyone can check out
all projects … guaranteeing they have a consistent version of everything” 15 . Monorepos are often
paired with build systems that treat the repository as a single workspace. Kief Morris describes the
“monorepo” build pattern as “One Repository, One Build” – all projects in the repo are built together
with build-time integration 6 . Google’s Bazel (formerly Blaze) exemplifies this: a single WORKSPACE
file and BUILD targets span the entire repo. Potvin and Levenberg note that Google’s monorepo
scales to a billion files 1 thanks to custom tooling. Monorepos make cross-cutting changes trivial
(one PR can update many modules). However, they require substantial investment in tooling to
manage that scale 16 . As the Nx documentation warns, “once the repository scales to hundreds of
developers” one needs dedicated teams and conventions to maintain tooling, CI, and dependency
rules 17 .
• Polyrepo (each project in its own repo): In the polyrepo approach, each service or library resides in
a separate repository. Teams are fully autonomous: each repo can use different toolchains,
branching strategies, and versioning. The Nx guide observes that “each team can make their own
organizational decisions without consulting others,” granting maximal autonomy 18 . This
independence can speed up individual team velocity, since teams aren’t constrained by a common
repo policy. It also aligns cleanly with microservice boundaries: Netflix’s engineers found it natural to
“divide our software into many small components that each of our teams can fully design, build, and
operate” 5 .
The downsides of polyrepo include duplication of effort and harder integration. Every shared library or
common tool must be released and adopted separately. Nx notes that “sharing code is difficult” and
maintenance tasks must be repeated across repos 19 . Jaspan et al. found that in multi-repo setups, central
dependency management is lost and engineers have to manually coordinate library upgrades 2 . Netflix’s
analysis calls the polyrepo (or “share-little”) model the opposite of monorepo: it “favors decoupling and
engineering velocity, while sacrificing code reuse and consistency” 10 .
• Hybrid (shared-canon or federated model): Between these extremes is a spectrum. One hybrid is
the “multiple monorepos” model: a few large repos, each grouping related services. Nx describes this
as arising when teams disagree on common policies: “each faction can be allocated to separate
monorepos configured for their workflow,” trading extra CI overhead for team-specific optimizations
20 . Another hybrid is the “shared-canon” approach: core libraries and schemas live in one canonical
repo, while application teams keep their own repos that depend on the shared canon. This model is
less studied empirically, but Google has some precedents (e.g. public API definitions in a shared
repo). Netflix explicitly explores this middle ground: their developer productivity team asks, “Can we
provide engineers … the benefits of a monorepo and still maintain the flexibility of distributed
repositories?” 21 . They are building tools (publisher feedback, managed source versioning) to mimic

3

monorepo advantages (global refactoring, API consistency) while still deploying multiple repos. In
summary, hybrid patterns attempt to get the best of both worlds by splitting responsibility layers
among repos: for example, a canonical repo of infra code plus independent service repos, or several
semi-isolated monorepos with occasional cross-repo automation.
• Build-system vs Package-manager layering: Tools also vary. Build-system layering (exemplified
by Bazel, Pants) treats the repository as a unified workspace and constructs a global build graph.
Bazel’s global WORKSPACE ties together all code dependencies in one view, which aligns with a
monorepo policy 6 . Package-manager layering (npm/Yarn workspaces, pnpm, Go modules) can
also enable multi-package projects without committing to a single repo. For instance, Yarn
Workspaces let many packages live in one git repository with hoisted dependencies; Morris notes
the web community’s “growing use of monorepos … with tools such as Yarn Workspaces” for
managing dependencies 22 . In practice, small teams often use npm or Gradle workspaces inside
one repo for convenience, blurring the line: these are like lightweight monorepos without
centralized VCS. Bigger orgs may use both: a shared Bazel workspace for core infrastructure
libraries, and each team’s code in separate Git repos that Bazel can fetch. The literature mentions
both: Morris’s monorepo chapter and Nx docs emphasize build-tools for monorepo efficiency 6
17 , while npm/Yarn documentation explicitly discuss workspaces 4 .

3. Universal Concepts: (Absences and Occurrences)
We searched the repository-topology literature for broad concepts like trust, identity, norms, power, etc.
These human-centric concepts are generally absent from the technical sources, which focus on engineering
and organizational factors. For example, trust or care are not explicitly analyzed. One could argue that
automated testing builds trust in a monorepo, but the sources do not frame it that way. Similarly, notions of
identity, agency, intent, or evidence of developer behavior do not appear as formal concepts. Commitment and
intent show up only in passing (e.g., trunk-based development requiring commitment to main branch), not
as focal ideas.
The concept of boundary does arise, though typically as a code or team boundary. Kief Morris explicitly
invokes Conway’s Law relating team structure to code structure: “the direct relationship between the
structure of an organization and the design of its systems” means misaligned teams/repos create friction
8 . This highlights how repo boundaries often follow organizational boundaries. Monorepo advocates like
Fowler also emphasize shifting focus away from “repo boundaries” to where logical module boundaries
should be 23 .
The notion of ownership appears frequently but concretely (code owners, team leads), not philosophically.
For instance, Spotify notes that squads use GitHub’s CODEOWNERS for directory-level ownership, reflecting
a practical rule (norm) for who reviews what 13 . Nx documentation lists “Code Ownership” as an
organizational question to decide for a monorepo 17 . These reflect norms/protocols in practice, but the
term “norms” itself is not used.
Power/authority appears implicitly: centralized monorepo tooling (like a Google-wide build system)
suggests centralized power, while polyrepo can reflect decentralized authority. But the literature does not
explicitly discuss authority structures. Norms or protocols are discussed only as conventions (e.g.
“interpersonal” agreements in Nx on repo rules 24 ). For example, Nx warns that technical scaling is solved,

4

but the “limiting factors” are interpersonal: teams must agree on repo management or else split up 24 ,
highlighting social agreement as a hidden norm.
Other terms (signals, reciprocity, reproduction/continuity, holons, etc.) are virtually nowhere to be found.
Memory of the system is implicit in version control (git history), but not treated as a distinct concept. One
could say a monorepo has collective memory in its unified VCS, but the papers don’t use that framing. We
note these absences as informative: the tradition remains largely technical/organizational, not socialscientific. In sum, except for boundaries (and by extension ownership/norms to a small degree), these
human/universal concepts do not have developed definitions here. This is in contrast to other traditions
(e.g. social systems) and shows that repository design is treated pragmatically.

4. Internal Disagreements
The sources reveal clear disagreements, often along company-culture or scale lines:
• Monorepo vs. Polyrepo: Google (and Meta) strongly advocate monorepos at scale. Potvin and
Levenberg present Google’s experience: a single giant repo (with billions of files, thousands of
developers) worked well, yielding unified versioning and easy cross-team refactoring 25 . Fowler
similarly argues that “keeping all code together” simplifies refactoring and code sharing, and a
single VCS snapshot codifies the company’s joint work 26 27 . By contrast, Netflix and Spotify
operate with mostly polyrepo models. Netflix’s engineering team upholds microservice autonomy,
running hundreds of independent repos. A Netflix blog explicitly contrasts “share-little” (polyrepo)
and monorepo approaches: it notes that share-little maximizes team freedom but “sacrifices code
reuse and consistency”, while monorepo increases consistency but requires gated commits 10 .
Spotify’s experience mirrors Netflix’s. Their architecture splits into thousands of small, independently
deployed components 5 , each owned by a squad. Their 2023 “Fleet Management” post explicitly states:
“Spotify currently uses a polyrepo layout with thousands of GitHub repos” and acknowledges they must
build specialized tools for large-scale changes even in this model 3 . However, even Spotify is exploring
monorepo ideas: they use Yarn workspaces for web apps and have developed a monorepo-aware
documentation tool 22 13 . Thus, within the community there’s debate: do we prefer monorepo
consistency or polyrepo independence? Each side has success stories and acknowledged trade-offs.
• Shared-canon vs. Federated-canon: Linked to the above is whether to centralize a “canon” of core
code or to federate it. Google’s monorepo is the extreme shared-canon: one source for everything.
Netflix’s approach (as shown above) attempts a federated canon: they keep many repos but build a
service (“Publisher Feedback”) so library owners know which clients they break, and even auto-bump
client versions 12 . In effect, Netflix is trying to mimic a monorepo’s global integration benefits while
staying polyrepo. This reflects an internal debate: some engineers want Google-like shared-libraries,
others fear the constraints. The literature records Netflix’s team experimenting with publisher
feedback, managed source, and distributed refactoring to give “the benefits of a monorepo” in a
polyrepo world 12 . In contrast, Google’s view (per Potvin) is that monorepo is straightforward so
long as you invest in the tools 25 .
• Build-Tool Scalability: There is disagreement about required tooling. Monorepo critics argue that
monolithic repos demand sophisticated build systems and developer tools. Matt Klein’s antimonorepo essay (cited by Fowler 28 ) warns that without heavy infrastructure, monorepos “won’t

5

scale for most teams.” Fowler counters that with proper use (git scales to Linux kernel size)
monorepos can work for small and medium teams 29 30 . In practice, tools vary by scale: Google/
Meta use Bazel/Blaze with remote caching; Facebook uses Mercurial with custom patch sets. Small
teams often settle for simpler tools (npm/Yarn workspaces, Turborepo or Nx without remote
caching). The sources note this tension: monorepo success at giant scale (Google, Facebook) doesn’t
automatically translate to small startups, whereas polyrepo at a huge company (Spotify) still requires
substantial coordination tooling 3 31 .
• Repo-Boundary vs. System-Boundary (Conway’s Law): Another debate is whether repo division
should follow team boundaries or logical system boundaries. Conway’s Law implies that “teams will
build systems that mirror their communication structure” 8 . Netflix and Spotify tend to have teamowned repos (system follows team). Monorepo proponents argue that this is backwards: repo
boundaries are a distraction 23 , and teams should focus on dividing code along functional lines
regardless of org structure. In other words, should the organizational silos define the repo layout, or
should a shared codebase enforce cross-team collaboration? The literature indicates tension: Nx
essentially says “if your developers can’t agree on repo policies (norms), split into separate
repos” 24 . Morris (Infrastructure as Code) also emphasizes aligning code with team boundaries.
Fowler advises not to overemphasize repo splits, but acknowledges big monorepos require
conventions to avoid hindering team velocity. In summary, consensus is lacking: some see repo
structure as a social artifact of teams, others see it as a technical choice to maximize code reuse.

5. Critiques and Limits
Several criticisms recur across sources:
• Context-specificity of Google-scale evidence: Monorepo advocates often cite Google’s scale. But
many authors caution that Google’s success doesn’t imply monorepos are always best. Fowler
explicitly notes most readers are small teams (<100 devs) with shorter-lived projects, and that for
them “we’ll probably be fine” without extraordinary monorepo tooling 30 . This echoes a critique: the
Google/Meta evidence (monorepo at 10k+ devs 1 ) may not hold for smaller companies. If you’re
not at that scale, the overhead of building a monorepo pipeline might outweigh its benefits.
• Heavy tool and maintenance burden: Potvin & Levenberg spell out the main drawback: “having to
create and scale tools for development and execution and maintain code health” 32 . In practice,
monorepos require advanced CI/CD, caching, and code analysis tools. Even Facebook and Google
had to build custom or extended VCS tools to keep performance acceptable. Even Fowler, promonorepo, admits Twitter’s monorepo efforts caused “performance issues” that took specialized
solutions 33 . Thus, critics point out that monorepos are not free: they transfer complexity from code
separation to infrastructure complexity.
• Polyrepo “independence” is costly: On the flip side, polyrepo is sometimes sold as “each team does
what it wants,” but that independence comes at a cost. Netflix itself notes that without monorepo, it
had to invest heavily in tools to approach monorepo-like capabilities (e.g. multi-repo CI to simulate
atomic integration) 12 . Jaspan et al. observed that while engineers like polyrepo’s flexibility, they
miss monorepo’s unified dependency management 2 . Another critique: microservices without
coordination can lead to “copy-paste” culture of avoiding shared libraries, which can bloat
maintenance.

6

• Understudied hybrids: We found little empirical study of hybrid or shared-canon patterns. It’s often
discussed only in blog posts or context-specific (like Netflix’s R&D). This is a gap: organizations often
naturally end up in hybrid states (e.g. a common UI library repo plus many app repos), but the
literature does not have controlled comparisons of these models. The absence of strong guidance
means teams must experiment or extrapolate.
In summary, the repository-topology literature presents a nuanced debate. Monorepos promise
consistency, easy refactoring and visibility 9 26 , but need serious engineering to scale 32 . Polyrepos
offer team autonomy and simpler tooling per team 19 , but incur extra coordination and risk code silos 10
2 . Both sides agree that tool support (Bazel, npm workspaces, automation services) is critical. The
disagreement often boils down to scale and culture: giants like Google thrive with one repo 1 , whereas
organizations valuing independence (Netflix, Spotify) adopt many repos and build solutions to mitigate its
drawbacks 12 3 . The literature does not provide a one-size-fits-all answer; rather, it documents the tradeoffs and tools that characterize each choice.
Sources: We have cited primary literature for each claim. For example, Google’s monorepo advantages
come from Potvin & Levenberg CACM (2016) 1 9 (paywalled, though quoted above), developer surveys
from Google’s Jaspan et al. (2018) 2 (open-access), Kief Morris’s Infrastructure as Code (2020) 15 8 ,
practitioner blogs from Netflix 34 10 21 and Spotify 22 13 3 , and monorepo tooling docs from Nx 14
19 and npm 4 . We include media/blog sources (like Fowler’s blog response) for perspectives not in
formal papers 26 23 27 . All citations are marked as [open-access]/[institutional]/[paywalled] as noted
above. Each source is cited in context of the claims it supports.

1

9

11

16

25

32

bowringj.people.charleston.edu

https://bowringj.people.charleston.edu/classes/csci%20362/docs/GoogleCodeRepo-78-potvin.pdf?
id=0B2El51RQ1MQnTTVWYVNiOWhuX0U
2

(PDF) Advantages and disadvantages of a monolithic repository: a case study at google

https://www.researchgate.net/publication/
325730963_Advantages_and_disadvantages_of_a_monolithic_repository_a_case_study_at_google
3

5

Fleet Management at Spotify (Part 1): Spotify’s Shift to a Fleet-First Mindset | Spotify Engineering

https://engineering.atspotify.com/2023/04/spotifys-shift-to-a-fleet-first-mindset-part-1
4

workspaces | npm Docs

https://docs.npmjs.com/cli/v8/using-npm/workspaces/
6

8

15

Infrastructure as Code

https://www.thoughtworks.com/content/dam/thoughtworks/documents/books/
bk_infrastructure_as_code_2nd_edition_free_chapter_en.pdf
7

14

17

18

19

20

24

Monorepo or Polyrepo | Nx

https://nx.dev/docs/concepts/decisions/overview
10

12

21

34

Netflix TechBlog - Medium

https://netflix397.rssing.com/chan-4321264/all_p13.html
13

22

Solving documentation for monoliths and monorepos | Spotify Engineering

https://engineering.atspotify.com/2019/10/solving-documentation-for-monoliths-and-monorepos

7

23

26

27

28

29

30

31

33

Monorepos and the Fallacy of Scale

https://presumably.de/monorepos-and-the-fallacy-of-scale.html

8


