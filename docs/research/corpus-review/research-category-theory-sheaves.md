---
research_input_for: corpus-foundational-review-v1
prompt_number: 05
tradition: "Category Theory / Sheaves"
source_tool: chatgpt-or-gemini
source_file: "Applied Category Theory & Sheaf-Based Coordination.pdf"
ingested: 2026-04-19
conversion_note: "converted via pdftotext from source PDF on 2026-04-19; inline footnote numbers preserved (not hyperlinked)"
status: raw-research-input
---

Applied Category Theory & Sheaf-Based
Coordination
1. Primitives
• Category (Objects, Morphisms, Composition). A category 𝓒 consists of a collection of objects and
for each ordered pair of objects $X,Y$ a set of morphisms $\mathrm{Hom}_\mathcal{C}(X,Y)$,
together with identity morphisms and an associative composition law 1 . In applied contexts the
objects can represent data types or states and morphisms represent processes or relations;
composition then corresponds to performing one process after another. This abstract definition is
load-bearing: all authors use categories (often small or finite) as the basic ambient structure (e.g.
graphs are seen as categories) 1 .
• Functor. A functor $F:\mathcal{C}\to \mathcal{D}$ maps objects to objects and morphisms to
morphisms in a way that preserves identities and composition 2 3 . Formally, $F$ assigns each
object $c\in \mathcal{C}$ an object $F(c)\in\mathcal{D}$ and each morphism $f:c\to d$ a morphism
$F(f):F(c)\to F(d)$, subject to $F(\mathrm{id}c)=\mathrm{id}$ and $F(g\circ f)=F(g)\circ F(f)$ 2 3 .
Functors encode structure‐preserving maps between systems; for example, a functor might assign
to each agent its state space and to each communication link a constraint relation, preserving how
links compose. As a primitive, functors are ubiquitously used (e.g. model homomorphisms, or maps
from system skeletons to signal spaces) 2 3 .
• Natural Transformation. Given two functors $F,G:\mathcal{C}\to\mathcal{D}$, a natural
transformation $\alpha:F\Rightarrow G$ assigns to each object $c$ a morphism $\alpha_c:F(c)\to G(c)
$ in $\mathcal{D}$ so that for every $f:c\to c'$ the square commutes ($G(f)\circ \alpha_c=\alpha_{c'}
\circ F(f)$) 4 . In words, $\alpha$ provides a way to “transform” one model into another consistently
across all objects. Natural transformations are routinely invoked as morphisms between agents’
behaviors or inter-model translations, and thus are load-bearing primitives 4 .
• Presheaf vs. Sheaf. A presheaf $P$ on a category $C$ is a functor $P:C^{op}\to \mathbf{Set}$ 5 .
Intuitively, $P(c)$ is the set of “sections” or local data over object $c$, and for each arrow $f:c'\to c$
there is a restriction map $P(f):P(c)\to P(c')$ 5 . For example, if $C$ is a category of “contexts” or
regions, a presheaf assigns data to each context with restriction maps when one context refines
another. A sheaf is a presheaf with the additional gluing (or sheaf) condition: any compatible family of
local sections on a cover has a unique global amalgamation 6 . In practice, one often begins with a
presheaf of raw data and then requires the sheaf condition to enforce consistency (see below). Both
concepts are fundamental: presheaves capture arbitrary distributed data, while sheaves capture only
the consistent data. All core references treat presheaves/sheaves as primary notions for modeling
distributed knowledge 5 6 .
• Stalk (Fiber over a Point). Given a sheaf (or presheaf) $P$ on a space or site, the stalk (fiber) at a
point $x$ intuitively collects all data “infinitesimally near” $x$. For topological sheaves, the stalk

1

$P_x$ is the colimit of $P(U)$ over neighborhoods $U\ni x$. In cellular sheaves on graphs, each
vertex $v$ has a stalk (a vector space, say) attached; this is interpreted as the local state space or data
at that vertex. For instance, Hansen–Ghrist model assigns each agent node a vector space of
possible opinions, i.e. the stalk 7 . Similarly, Hanks et al. interpret a stalk at a node as that agent’s
state space (e.g. position/velocity) 8 . Thus the concept of a stalk is heavily used to represent local
agent or sensor states.
• Restriction Map. A restriction map is the image under a presheaf of an arrow: if $f:c'\to c$ in $C$,
then $P(f):P(c)\to P(c')$ is the restriction of sections from context $c$ to the smaller context $c'$. In
sheaf models of networks, edges give restriction maps. For cellular sheaves on a graph, each
directed edge $e:v\to w$ has an associated linear map $P_e:P(v)\to P(w)$ 9 . These maps encode
how data propagates or constrains neighboring cells: e.g. an agent $v$ may impose a constraint (via
$P_e$) on what can occur at neighbor $w$. Restriction maps are thus a core primitive (e.g.
“communication channels”) in all sheaf-based coordination models 9 .
• Gluing / Sheaf Condition. The sheaf condition asserts that if a collection of local sections ${s_i\in
P(U_i)}$ on a cover ${U_i}$ agree on all pairwise overlaps (they form a matching family), then there
exists a unique global section $s\in P(\bigcup_i U_i)$ restricting to each $s_i$ 6 . The existence part
is often called the gluing axiom and the uniqueness part the locality axiom. In network terms, this
means local states that are mutually consistent can be stitched together into one coherent global
state. For example, Hanks et al. note that checking whether local agent assignments extend to a
global “consistent” assignment is the key question, with global sections representing fully
coordinated states 10 6 . Hence gluing/locality conditions are invoked whenever authors discuss
global consistency (e.g. “consensus” as a unique glued section) 10 6 .
• Locality / Globality. Closely related to gluing is the principle of locality: if two candidate global
assignments agree on every local piece, they must be the same global assignment. In practice, the
sheaf formalism embodies this “no ambiguity” principle. Many authors emphasize that sheaves
distinguish local data (sections on parts or subcontexts) from global data (sections on the whole). For
instance, Robinson’s sheaf-cohomological consistency measures detect when local measurements
fail to extend to a global solution, making explicit the tension between local constraints and global
solvability. In short, the primitives of “local section vs global section” and the consistency condition
between them are fundamental in this tradition 10 6 .
• Consistency Condition. A sheaf often comes with a built‐in notion of consistency. In Hanks et al.,
consistency of agent states is exactly the condition of being a global section: a 0-cochain
(assignment of each agent a state) is consistent if it lies in the kernel of the sheaf Laplacian, i.e. it
satisfies all local restrictions 10 . More generally, any sheaf enforces that data agreed upon locally
remain globally coherent. This built-in consistency is a recurring theme: e.g. a “consistency radius”
can measure how far a given assignment is from being globally consistent in the model 10 .
Therefore the primitive “global section = consistency” is used to encode when a coordination goal is
achieved.
• Operad / PROP. To capture compositional processes (networks of networks, or circuits), many
authors introduce operads and PROPs. A PROP is a symmetric monoidal category whose objects are
natural numbers (or finite sets), commonly used to model wiring diagrams or signal-flow graphs.
Fong & Spivak (2019) extensively use the language of props to describe how smaller processes

2

compose into larger ones. For example, Spivak shows that the category of cospans in $
\mathbf{FinSet}$ can itself be organized into an operad governing “connection patterns” 11 . In
practice, operads/PROPs are the formal structures behind the “composable processes” in
compositional systems: they specify how components (with many inputs/outputs) can be connected.
While some works treat props informally (e.g. signal-flow graphs), others use formal definitions (see
Spivak Ch. 6 in Seven Sketches). In summary, operads and PROPs are indeed employed as atoms of
compositionality in this literature, and their definitions (operad as a collection of operations with
multi-input composition rules) are taken as primitive 11 .

2. Layering
Unlike a linear stack of levels, category-theoretic layering here is compositional and homological. A
common pattern is:
• Local Data → Sheaf Constraint → Global Data. One first specifies local data on parts of the system
(a presheaf), then imposes the sheaf condition to constrain that data, yielding only those presheaves
that are sheaves of “consistent” data 6 . In effect, raw distributed information (possible local
assignments) is filtered through consistency constraints to produce globally valid states. For
instance, one assembles a presheaf of sensor readings, then demands the sheaf property to enforce
that these readings agree where sensors overlap. In formulas: $P$ (presheaf of all data) vs.~$Shv(P)$
(sheaf of consistent data) 6 .
• Locality vs. Globality. In this compositional layering, one does not “go through” layers sequentially
but rather reasons about patches and then assembles them. The paradigm is that “local
observations” (sections on small domains) are tied together by sheaf conditions to form “global
behavior.” Spivak & Fong describe this in terms of covering spaces: sheafification enforces that
matching local pieces glue into a single global section. Thus locality (the condition that overlapping
data agree) and globality (existence of a unique glued solution) are two faces of the same layer,
imposed by the sheaf axiom 6 .
• Sheaf vs. Topos (Logical Layer). Above the categorical base (e.g. the underlying graph or space),
one obtains a topos of sheaves, which carries internal logic. In practice, each choice of cover (site)
induces a topos of sheaves. For example, the category of all sheaves on a space $X$ is itself a topos
12 . This topos-theoretic layer allows one to interpret logical propositions about system behavior.
Spivak notes that every small category $C$ yields a presheaf topos $\mathbf{Set}^{C^{op}}$ 5 , and
adding a sheaf condition gives a topos of sheaves on $C$. Concretely, the topos of sheaves behaves
like a “universe” of behaviors; for instance, the topos of sheaves on a one-point space is just $
\mathbf{Set}$ (the logic of plain sets) 13 . In applied work, invoking a topos (e.g. of behavior types)
is often conceptual rather than explicit, but authors do emphasize that sheaf categories have logical
(often spatial or temporal) interpretations beyond bare categories 12 13 .

3

3. Placement of Universal Concepts
We examined how various social and systemic concepts map (or fail to map) into this categorical/sheaf
language. Our findings:
• Agents/Agency, State, and Signals: The notion of an agent appears indirectly as objects (vertices) in
the underlying network. Hanks et al. explicitly interpret each stalk as an agent’s state space 8 , so
“state” is load-bearing (agents have states, local sections are agent states, global sections are joint
states). The idea of a global state or consensus is literally defined as a global section 10 . By contrast,
“agency” as a higher-level concept (goals, autonomy) is not formally captured; agents are treated as
nodes in a fixed graph, without an intrinsic categorical notion of agency beyond being objects.
Likewise, “signals” in a communication sense are not explicitly defined; instead one has data values
or sections, but no separate primitive called signal. (Fong & Spivak’s PROP models for signal-flow
graphs use objects/types that might represent signal streams, but in our context “signal” as an
abstract concept did not emerge in the surveyed sheaf literature.)
• Identity, Memory: Each category has identity morphisms by definition 1 , but social identity (e.g.
personal identity, roles) is not represented. “Memory” does not appear as a formal notion; there is
no sheaf-based model of recall or history in these works. (One could interpret stateful behavior via
comonads/monads in some category theory approaches, but this was outside the sheaf-oriented
models studied here.)
• Trust, Care, Reciprocity, Authority/Power, Norms/Protocols: We found no explicit mention of
any of these in the applied category/sheaf literature. Trust and authority, for example, do not have
categorical analogs in the sources. Care ethics or reciprocity are likewise absent. In effect, normative
or socio-affective concepts are not load-bearing here. (This absence is notable given the user’s
coordination context, but it seems authors focus on structural/information concepts instead.)
• Commitment, Intent, Evidence: These small-group primitives from the “Spore” context likewise are
not found in the sheaf/categorical tradition. No work we found explicitly models an agent’s intent or
commitment as a categorical state or morphism. Evidence (as in epistemic evidence) does not
appear either. If anything, the only somewhat analogous ideas are constraints: for example, a
“signal” or measurement might serve as evidence of a state, but that is not framed in terms of
explicit evidence primitives.
• Holons, Whole-Part, Boundary: The holon notion (“whole/part unit”) is not present. Categories do
encode part–whole via objects vs sub-objects or via colimits (assembling parts into wholes), but the
specific idea of a holon was not invoked. Boundaries arise implicitly (e.g. overlapping subregions in a
cover), but again no author discussed social or cognitive boundaries. Continuity or reproduction (e.g.
iterative continuity of processes) did not surface as named concepts, though iterative or functorial
structures (like flow maps) can capture some persistence.
In sum, state (and its consistency) is the main agent-related concept modeled (with stalks and sections 8
10 ). By contrast, social or motivational primitives like trust, intent, authority, etc., do not appear. This gap
suggests the tradition is largely focused on information/constraint structure rather than social semantics.

4

4. Internal Disagreements
Several fault lines or differing emphases appear in the literature:
• Sheaves as Communication vs. Consistency Models. Some authors (especially Hansen & Ghrist)
emphasize sheaves as encoding communication patterns or interactions. For example, Hansen–Ghrist
(2021) introduce discourse sheaves precisely to model how information (opinions) flows and
transforms through the network 7 . Their focus is on using sheaf cohomology and Laplacians to
capture complex opinion dynamics and communication strategies. By contrast, others emphasize
sheaves primarily as consistency structures. Hanks et al. (2025) and Robinson (2014) treat the sheaf
condition as a constraint that must be satisfied for a global solution (consensus), and use algebraic
tools (e.g. the sheaf Laplacian) to detect consistency or consensus 10 . In practice, most researchers
do both (model interactions and check consistency), but there is a conceptual split: is the sheaf
mainly a protocol for transmitting data, or a constraint ensuring data coherence? The tradition contains
both viewpoints.
• Categorical Foundations vs. Type-Theoretic (Univalent) Approaches. The mainstream approach
in these works uses classical category theory (based on set-theoretic foundations). However, a
minority of researchers (e.g. Flori, Fritz) have explored Homotopy Type Theory or Univalent
Foundations for similar aims 14 . This reflects a broader debate in the category community: whether
one should axiomatize these structures in dependent type theory (with homotopical identifications)
rather than set theory. While we saw no direct criticism of one style by another, the existence of both
approaches indicates an underlying divergence in foundational stance.
• Strict Gluing vs. Weak/Derived Gluing. All the applied works assume the standard (strict) sheaf
gluing axiom: local agreement forces a unique exact global section. There is no discussion of
homotopy-coherent or derived notions of gluing (as one might find in higher topos theory). In effect,
the tradition so far presumes strict sheaf conditions. Some theorists (outside this immediate field)
have considered weakened gluing (e.g. ∞-sheaves) for more flexibility, but this does not feature in
the applied coordination literature. Thus there is an implicit agreement on using the classical sheaf
condition, with no internal debate on relaxing it.
• Applied Model vs. Notational Framework. There is an undercurrent of disagreement about
whether applied category theory (ACT) actually delivers concrete modeling insight or is mainly an
abstract formalism. Some practitioners (Baez, Spivak, et al.) argue ACT provides new compositional
lenses on systems, but critics note that many results are essentially rephrasings of classical models.
For example, one reviewer (Joshua Tan) quipped that ACT can seem like learning a new language
without new content 15 . Within the field, no author explicitly fights this battle; however, one can
sense tension in phrases like “sheaf-theoretic methods have remarkable range of
expressiveness” 16 versus the admission that sheaves are “highly abstract” and “not for the faint of
heart” 17 . In practice, some readers ask whether the categorical reformulation yields practically
different results or just adds overhead. This debate is echoed in the community though rarely
formalized as a “theory conflict.”

5

5. Critiques and Limits
The tradition itself includes some self-aware caution and has drawn external skepticism:
• Complexity vs. Payoff (Overhead). A frequent critique is that category/sheaf frameworks are heavy
and may not clearly simplify real problems. For instance, Josh Tan (2018) questioned whether the
abstractions of ACT have any practical payoff in modeling real-world socio-technical systems, or if
they are mainly elegant mathematics 15 . He compares learning category theory to learning a
foreign language that might not pay off in applications. In other words, the cognitive and
computational overhead of building sheaf models can seem disproportionate to the concrete gains.
Authors themselves sometimes acknowledge this implicitly; for example, Spivak & Fong motivate
sheaves in control and safety proofs, but admit “sheaves are fascinating, but highly abstract
mathematical objects” 17 , hinting that non-experts may find the formalism daunting.
• Abstraction vs. Clarity. Relatedly, the high level of abstraction has been noted as a barrier. The
quote from Spivak & Fong—“Sheaves are not for the faint of mathematical heart” 17 —captures the
sentiment that the concepts (limits, cohomology, etc.) can obscure intuition. Some critics worry that
the framework could become a “black box” that hides simpler solutions. While proponents would say
this abstraction reveals deep common structures, detractors caution that it may sacrifice clarity for
generality. In particular, because category theory often uses unfamiliar language (morphisms,
functors, coends), applied scientists sometimes find it harder to relate to the models.
• Empirical Validation. There is little empirical or simulation-based evidence presented in these works
to validate sheaf-based claims for coordination. Most of the literature is theoretical or proof-ofconcept. We did not find studies showing, e.g., that sheaf-theoretic controllers outperform classical
ones in real systems. This absence means claims of benefit (such as improved distributed consensus
or fault tolerance) remain speculative. Some papers (like Hansen–Ghrist on opinion dynamics)
include numerical examples, but broad empirical vetting is lacking. In short, the tradition has strong
theoretical development but so far scant experimental confirmation that its models make a practical
difference.
• Physical vs. Social Relevance. Much of the inspiration and examples come from physics and
engineering (sensor networks, robotic swarms, quantum contextuality 7 12 ) rather than social
systems. This choice can be a limitation when applying to coordination in human contexts. For
instance, sheaf-theoretic contextuality (Abramsky–Brandenburger) pertains to quantum
experiments, not to trust or norms. Some critics (outside this literature) view this as a mismatch:
techniques developed for fields like topology or quantum mechanics may not naturally map onto
social phenomena. The tradition itself rarely addresses this, but the lack of social examples suggests
caution: one must carefully interpret sheaf models sociologically.
In summary, while applied category/sheaf theory provides a rich compositional framework, its practical
utility is still debated. Critics argue the abstractions may be costly and under-validated 15 17 . Proponents
respond that the payoffs (modularity, unification of patterns) justify the overhead. This tension is
characteristic of the field: many results are mathematically elegant, but whether they translate to “better
models” remains an open question in the literature.

6

## R-claims

- **R1**: Categories, functors, and natural transformations give the tradition a general language for compositional structure and structure-preserving translation. [target:candidate:formal-substrate] [concept:coordination-substrate]
*R1 is supported by Spivak and Fong & Spivak.*

- **R2**: Presheaves model distributed local data, while sheaves add the gluing condition that distinguishes merely local assignments from globally consistent ones. [target:candidate:sheaf-consistency] [concept:evidence]
*R2 is supported by Fong & Spivak and the sheaf notes cited in the document.*

- **R3**: Stalks and restriction maps make local state and inter-cell constraint first-class, so cellular sheaves can model coordination without collapsing locality. [target:candidate:cellular-agent-state] [concept:signal]
*R3 is supported by Hansen–Ghrist and Hanks et al.*

- **R4**: Global sections are the tradition's formal analogue of consensus or fully coordinated joint state. [target:candidate:consensus-as-global-section] [concept:holon]
*R4 is supported by Hanks et al., Robinson, and Hansen–Ghrist.*

- **R5**: The tradition is strong on consistency and compositionality but weak on trust, care, authority, and social agency as primitives. [target:meta:corpus-foundational-review] [concept:care]
*R5 is supported by Spivak & Fong, Hanks et al., and Hansen–Ghrist.*

- **R6**: Its core internal dispute is whether the abstraction burden of categorical formalism delivers enough applied payoff to justify its cognitive overhead. [target:candidate:abstraction-payoff] [concept:coordination-substrate]
*R6 is supported by Joshua Tan's critique, Spivak & Fong, and Hansen–Ghrist.*

Sources: All definitions and claims above are drawn from core works in the category/sheaf tradition. See,
e.g., Spivak (2014, Ch.4) for categories, functors, natural transformations 1 2 4 , Spivak & Fong (2019)
for presheaves, sheaves, toposes 5 6 12 , and Hansen–Ghrist (2021) and Hanks et al. (2025) for cellular
sheaves and coordination 7 8 10 . Critiques are drawn from commentary within the field 17 15 .
(Access: sources on Spivak & Fong are [open-access] course notes; [7] is arXiv [open-access]; critiques are
public posts.)

1

2

3

4

pages.physics.ua.edu

https://pages.physics.ua.edu/faculty/fabi/CT/Category%20Theory%20for%20Scientists%20%20-%20Spivak.pdf
5

6

12

13

7.3: Sheaves - Mathematics LibreTexts

https://math.libretexts.org/Bookshelves/Applied_Mathematics/
Seven_Sketches_in_Compositionality%3A_An_Invitation_to_Applied_Category_Theory_(Fong_and_Spivak)/
07%3A_Logic_of_Behavior_-_Sheaves_Toposes_Languages/7.03%3A_Sheaves
7

16

Opinion Dynamics on Discourse Sheaves

https://www2.math.upenn.edu/~ghrist/preprints/opinion.pdf
8

9

10

[2504.02049] Distributed Multi-agent Coordination over Cellular Sheaves

https://ar5iv.labs.arxiv.org/html/2504.02049
11

17

dspivak.net

https://dspivak.net/7Sketches.pdf
14

[PDF] Homotopy Type Theory: Univalent Foundations of Mathematics

http://tobiasfritz.science/2014/HoTT_lecturenotes.pdf
15

The failures of category theory – Joshua Tan

https://www.joshuatan.com/the-failures-of-category-theory/

7


