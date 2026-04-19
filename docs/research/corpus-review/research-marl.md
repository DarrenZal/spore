---
research_input_for: corpus-foundational-review-v1
prompt_number: 02
tradition: "MARL / Multi-Agent Systems"
source_tool: chatgpt-or-gemini
source_file: "Core Primitives.pdf"
ingested: 2026-04-19
conversion_note: "converted via pdftotext from source PDF on 2026-04-19; inline footnote numbers preserved (not hyperlinked)"
status: raw-research-input
---

Core Primitives
Agent as utility maximizer. In MAS/MARL, an agent is modeled as an autonomous decision‐maker
equipped with a utility (or reward) function that it seeks to maximize. Classic game theory assumes each
agent chooses actions to maximize expected utility 1 . For example, Shoham & Leyton-Brown explain that
if all other agents’ strategies were fixed, “a utility-maximizing agent i” would simply solve a single-agent
optimization to determine its best response 1 . In other words, agents are often expected-utility
maximizers: they have well-defined preferences (utility functions) and choose actions accordingly. This
reflects the standard “rational agent” assumption. As Shoham & Leyton-Brown note, much of game theory
“assumes that players can engage in arbitrarily deep reasoning” – i.e. are perfectly rational expected-utility
maximizers 2 .
Rationality assumption (strict/bounded). Classical MAS theory typically assumes ideal rationality: agents
have complete information of the game structure (common knowledge), unbounded computational power,
and perfectly maximize expected utility. In game-theoretic terms this implies that each agent plays a
strategy that is a best response to others. However, the literature acknowledges this as an idealization.
Shoham & Leyton-Brown explicitly revisit the assumption that agents are perfect rational optimizers, and
explore the case of bounded rationality 2 . For instance, they consider repeated games with agents
modeled by finite automata, where agents “are not perfectly rational expected-utility maximizers” but have
computational limits 2 . Similarly, in the AI tradition Russell & Norvig distinguish strict rationality from
bounded rationality (agents maximize expected utility given their knowledge but within limited resources)
2 . (Ideas of ecological rationality or other heuristics are recognized in behavioral critiques but are not
formal primitives in MAS.)
Strategy and Nash equilibrium. MAS game theory uses strategy profiles and equilibrium concepts to
predict outcomes. A strategy (or policy) for an agent defines its action choice rule, often mapping states (or
histories) to actions. The canonical solution concept is the Nash equilibrium: a profile of strategies
(s1 , … , sn ) such that each agent’s strategy is a best response to the others. Formally, Shoham & LeytonBrown define:
“A strategy profile s = (s1 , … , sn ) is a Nash equilibrium if, for all agents i, si is a best response
to s−i .”

3

.

Intuitively, at a Nash equilibrium no agent can unilaterally improve its payoff by deviating, given the others’
strategies. They also distinguish refinements: a strict Nash equilibrium requires each agent’s strategy to
be a unique best response 3 , whereas a weak Nash allows indifference. (The MAS literature also considers
correlated equilibria, Pareto efficiency, and other refinements, but Nash remains central 3 .)
Mechanism (incentive rules). In MAS the term mechanism refers to a specification of the rules or protocol
of a game — essentially a game form that maps agents’ actions or reports to outcomes. Mechanism design
then studies how to choose rules so that rational agents will (by pursuing their own utilities) produce
desirable collective outcomes. As Shoham & Leyton-Brown explain, “Mechanism design is a strategic version of
social choice theory, which adds the assumption that agents will behave so as to maximize their individual

1

payoffs”

4

. Equivalently, a mechanism is viewed as a function M : A1 × ⋯ × An → O (with payments or

outcomes) along with specified agent preferences. Key properties include incentive compatibility (agents’
best interest to reveal true preferences) and strategy-proofness (truth-telling or the desired strategy is a
dominant strategy). For example, dominant-strategy mechanisms like the VCG (Vickrey–Clarke–Groves)
mechanism ensure truth-telling is (weakly) dominant 5 . (Formal definitions: a mechanism implements a
social choice function if, in its equilibrium, the outcome equals the desired choice for each preference
profile 6 .) In sum, the mechanism layer defines the rules and incentives (who can do what and what
payoffs result) while assuming agents play best responses within those rules.
Policy (π: state → action). In sequential decision models (common in MARL), an agent’s policy π is a
mapping from states (or observations/histories) to actions. In a Markov decision process (MDP), a
(stationary, deterministic) policy is defined as π : S → A, assigning each state an action 7 . MARL
generalizes this to multiple agents, but each agent still holds a policy (or strategy) that may condition on its
own observation or history. Under full observability (Markov games), policies map the global state to each
agent’s action; under partial observability (Dec-POMDPs), policies map the agent’s local observation/history.
Learning in MARL involves agents updating their policies to maximize cumulative reward, potentially subject
to coordination constraints.
Reward / utility function. Agents’ preferences are captured by utility or reward functions. In game theory,
each agent i has a utility function ui (o) over outcomes o (often the payoff of a terminal state or action
profile). For sequential tasks, agents accumulate rewards over time (often discounted). Littman (1994)
defines an MDP’s reward function R : S × A → R, giving an immediate payoff for each state-action pair
8

. In a multi-agent Markov game, each agent i has its own reward function Ri (s, a1 , … , an ) depending

on the joint state and actions 9 . The objective is to maximize (discounted) sum of rewards. In cooperative
MARL, agents may share a common reward; in general-sum games, each agent maximizes its own reward
(sometimes conflicting). We treat “reward” (RL) and “utility” (game-theory) interchangeably as the scalar
objective for the agent.
Action, state, and observation spaces. The action space Ai of agent i is the set of actions it may choose.
The state space S describes all possible configurations of the environment. In a single-agent MDP, an
agent selects a ∈ A and transitions the state via P : S × A → Δ(S) (probability distributions)

8

.A

Markov game generalizes this to n agents: each agent i selects ai ∈ Ai , and the joint transition P (s′ ∣

s, a1 , … , an ) determines the next state 9 . If agents have limited observations, one speaks of DecPOMDPs: each agent i receives an observation oi ∈ Ωi drawn from an observation function Oi (oi ∣ s, ai ).
In general, MAS models may assume full observability (every agent sees the global state) or partial
observability (private signals), depending on context. Thus the observation space for each agent is the set of
possible information it can perceive (often equal to S under full knowledge, or a partition of S otherwise).
Communication protocol vs. emergent signaling. Communication is explicitly addressed in MAS. Shoham
& Leyton-Brown devote a chapter to communication games 10 . They distinguish cheap talk (costless,
non-binding messages) and signaling (communicative actions with strategic intent) 10 . In traditional MAS,
a communication protocol is usually a designed channel or message format given in advance (for example,
speech-act languages or multi-agent dialogue acts 10 ). By contrast, in modern MARL research one often
studies emergent communication, where agents learn a signaling protocol (often via neural networks) as
part of solving tasks 11 . That is, agents may initially have no fixed language but develop a “language” by
repeated interaction. In summary: MAS theory typically assumes communication rules (protocols) and

2

analyzes outcomes under those rules, whereas MARL can explore both pre-specified channels and the
emergence of new communication schemes 11 .
Common knowledge. A pervasive assumption in game-theoretic MAS is that of common knowledge:
agents know the structure of the game, rationality, and utility functions, and know that everyone else knows
these facts, and so on. In incomplete-information (Bayesian) games this manifests as the common prior
assumption: there is a shared probability distribution over possible game parameters. Shoham & LeytonBrown note that most work in game theory assumes a common prior and common knowledge of rationality
12 . They remark that, although it is a “substantive assumption,” it is made to keep models tractable. In
practice, MAS solution concepts (Nash, correlated equilibrium, etc.) generally rely on common-knowledge
assumptions for their predictive power 12 .

Layering of Control and Information
Centralized training vs. fully decentralized. A key architectural distinction in MARL is Centralized
Training with Decentralized Execution (CTDE) versus fully decentralized approaches. CTDE methods allow
during learning a central coordinator or shared information that is not available at execution. For example,
agents may use a centralized critic that observes the global state or other agents’ actions during training
13 . In execution, however, each agent must act based only on its own local information. Amato (2024)
explains that CTDE “has come to mean that there is an ‘offline’ training phase where some amount of
centralization is allowed… After this centralized training phase is complete, agents must then act in a
decentralized manner based on their own histories” 13 . CTDE often leverages global state or other agents’
policies during learning (impossible at run-time), e.g. learning a joint Q-function that is then factored for
individual agents 14 . In contrast, fully decentralized training/execution forbids any global information in
learning; agents learn solely from their own observations and rewards. The CTDE paradigm often improves
learning efficiency (by using extra information), but it raises issues about realism: in some applications, such
centralization may not be available.
Mechanism-design layer vs. strategy layer. MAS problems can be conceptually divided into two layers: the
mechanism (rules of the game) and the strategy (players’ actions given those rules). The mechanismdesign layer includes all the structural elements: which actions are available, how outcomes are determined
(e.g. auction rules, payoff functions, protocols), and any budget or payment rules. Within this layer one
asks: Who gets to set the mechanism? In mechanism design theory, a designer chooses the mechanism to
align incentives 4 . Once the mechanism is fixed, the strategy layer is the usual game play: each agent
selects a best-response strategy profile according to its utility. For example, in an auction mechanism, the
auction rules (allocation and payment function) are the mechanism layer; bidders’ bidding functions are the
strategy layer. This separation is central in algorithmic game theory (often called stackelberg vs follower roles
in design) and in multi-agent RL when shaping the reward function. (Notably, if agents themselves design
the mechanism jointly, this blurs the layers – but standard MAS assumes a mechanism is given or centrally
designed.)
Physical vs. epistemic state. MAS literature often distinguishes the physical state of the world from the
agents’ knowledge or beliefs about the world. In game models, the physical state is the actual configuration
(in MDPs or games), whereas epistemic state includes agents’ private information or beliefs. In Bayesian
games, for example, each agent has a “type” capturing its private information; agents hold beliefs (a
probability distribution) over others’ types. These beliefs (and beliefs about beliefs, etc.) form an epistemic

3

state. Shoham & Leyton-Brown discuss the “epistemic type space” arising in Bayesian games 12 , effectively
an infinite hierarchy of beliefs about others’ utilities. They note this common-prior epistemic structure is
assumed for tractability 12 . In multi-agent RL, a related notion is the agents’ history or memory of
observations – each agent’s local view is its epistemic state. In fully observable MDPs the global state
suffices (physical = epistemic); in partially observable domains, one often treats agents’ beliefs as part of the
state. Thus, one can think of layers: the physical layer (actual Markov state variables, environment
dynamics) and the epistemic layer (what each agent knows or believes about the state and others).

Placement of Universal Concepts
We briefly assess whether and how various “universal” coordination concepts appear in MAS/MARL.
• Trust: Traditional MAS/MARL does not include trust as a built-in primitive. Agents are typically
assumed to follow prescribed strategies or learn optimal ones; there is no notion of “trusting”
another agent by design. (Work on trust and reputation in MAS exists in e-commerce or networked
systems, but it lies outside the core CS/engineering MAS tradition.) In game theory, “trust” only
emerges indirectly (e.g. mutual cooperation in repeated Prisoner’s Dilemma suggests reciprocity, see
below) and is not explicitly defined.
• Care: Concepts like “care” (as in care ethics) are absent. MAS frameworks assume goal-directed
agents maximizing utilities; they do not model empathic or caring behavior unless encoded as part
of the utility function. Thus, care is not a core notion.
• Identity: Agents are identified by indices or roles, but MAS theory does not focus on personal
identity issues. The concept of identity (as in self-concept or group identity) is not formalized. Agents
may have “type” labels in Bayesian games, but these are information types, not existential identities.
• Memory: Agent memory appears as part of strategies, especially in dynamic games. For repeated or
stochastic games, an agent’s history (the sequence of past states/actions) effectively acts as memory.
Equilibria can be history-dependent (e.g. trigger strategies in repeated games). However, outside
those specific contexts, memory is not a separate primitive — it is simply contained in the strategy or
state space model (e.g. states can encode past information). In multi-agent RL, “memory” is implicit
in a policy that conditions on history or in belief/state representations.
• State: The notion of state is fundamental. MAS models use a global state (in games or MDPs) to
determine outcomes and transitions 8 9 . “State” is often simply the environment configuration;
in multi-agent RL, this could be the joint configuration of all agents and resources.
• Signals: Communication signals are part of the MAS discussion (Ch. 8 in Shoham & Leyton-Brown)
10 . Cheap-talk messages or actions serving as signals are explicitly modeled. MAS thus treats
signals as possible actions or as channels in a protocol. In MARL, signals may be explicit messages
exchanged (if communication channels are modeled), or implicit signals through actions. For
example, an agent’s action in the environment may serve as a signal in a signaling game 10 .
• Agency: The very concept of agency is taken for granted. Agents are defined as autonomous entities
with goals and capabilities. Shoham & Leyton-Brown begin with game-theoretic “players”;

4

Wooldridge (in the BDI tradition) defines agents as “computational systems capable of autonomous
action in an environment to meet their goals.” Thus agency is foundational in this tradition (though
its philosophical aspects are not debated here).
• Norms/protocols: MAS does include notions of protocols (communication protocols, or interaction
protocols like auctions). However, MAS traditionally does not focus on social norms or moral rules in
the ethical sense. Protocols are usually design specifications (e.g. network communication protocols
or mechanism rules) rather than emergent norms. There is a subfield of normative MAS that studies
how norms can emerge or be enforced, but it is orthogonal to the game-theoretic core.
• Power/authority: These are not explicit primitives. Games sometimes include leader-follower roles
(Stackelberg games) or auctioneer authority, but MAS theory does not generally analyze power
structures as such. Agents are symmetric by default. Some multi-agent planning works consider
markets or hierarchies, but “power” per se is not a defined concept in the standard literature.
• Commitment: In mechanism design and contract theory (in Chapter 10 of Shoham & Leyton-Brown)
there is an implicit notion of commitment: agents commit to strategies in equilibrium, and the
mechanism sometimes enforces payments as commitment devices. But aside from these specialized
contexts, MAS does not have a general formal notion of commitment. (One could say that in repeated
games, “grim-trigger” strategies act as a commitment to punish defectors, but this is just one
equilibrium construction, not a primitive object.)
• Intent: The notion of intention appears primarily in the BDI agent framework (belief-desire-intention
models) originated by Wooldridge, Rao & Georgeff, etc. In that tradition, intentions are
commitments to actions. However, the mainstream MAS/game theory tradition does not explicitly
use “intent” beyond calling a strategy a plan or intended action. All reasoning is done at the level of
strategies; there is no separate formal entity called an intention except in logic-based formalisms (see
Wooldridge’s work, but that is outside the scope of this synthesis).
• Evidence: MAS theory does not treat evidence as a distinct primitive. Agents gather observations, but
these are simply signals about the state. Belief updating (e.g. via Bayes’ rule) is studied in Bayesian
games, but “evidence” in the sense of justification is not a central concept.
• Holon-like unit (whole-and-part): There is no concept equivalent to a “holon” (a part-whole
hierarchy) in MAS tradition. Coalition formation is studied in coalitional game theory (Chapter 12 of
Shoham), which looks at groups as units; but the formalism treats any coalition as an arbitrary
subset of agents, not a hierarchical holon.
• Boundary: In distributed MAS (e.g. distributed algorithms, robotics), one might consider the
boundary of a system (network boundaries). Shoham’s Chapter 13 on knowledge discusses
partitions of worlds, which induce “local states” vs “global state” 15 . But as a general concept of
“boundary,” it is not emphasized.
• Reciprocity: Reciprocity is an emergent behavior studied in repeated games (e.g. tit-for-tat in
iterated Prisoner’s Dilemma). MAS theory can model reciprocal strategies, but “reciprocity” is not a
primitive; it is simply a type of equilibrium outcome (for example, folk theorems show that
cooperative payoffs sustained by reciprocal threats are possible 2 ).

5

• Reproduction/continuity: Concepts of reproduction or continuity (biological or social) are outside
MAS literature. Agents do not reproduce or die (except in evolutionary game theory, which is a
distinct field).
Overall, many interpersonal or social concepts (trust, identity, care, authority, etc.) are absent in the core
MAS/MARL tradition. The focus is on mathematically tractable primitives: agents, utility, strategy,
information. The absence of a concept is often notable; for instance, behavioral economics critiques
highlight that rational agents do not capture trust and fairness (see below).

Internal Debates and Disagreements
Within the MAS/MARL community there are several active debates and contrasting approaches:
• Centralized vs. Decentralized Training. As above, some researchers argue for the practical benefits
of centralized training (exploiting joint information to learn coordinated behavior) 13 , while others
emphasize fully decentralized learning to better model autonomous agents with no central
oversight. For example, Foerster et al. advocate CTDE for cooperative tasks (a centralized critic with
decentralized actors) 16 , whereas others pursue completely independent learners or only peer-topeer communication. The trade-off is between data efficiency (centralized training often converges
faster) and robustness/scalability (decentralized training mimics realistic constraints). This is an
ongoing discussion in MARL, reflected in recent surveys like Amato (2024) 13 .
• Designed Protocol vs. Emergent Communication. Some MAS systems assume a fixed
communication protocol given by designers (e.g. ACL, KQML languages or simple message
channels) and study how agents should optimally use it. Others explore emergent signaling, where
communication patterns or languages emerge from learning. In MARL, for instance, agents may
start with no shared vocabulary and develop one through interaction 11 . This raises questions: is it
more realistic to hard-code communication rules, or to allow agents to invent their own symbols?
There is no consensus; both approaches have proponents depending on the application.
• Rationality (unbounded) vs. bounded models. Within game theory, some advocate the standard
solution concepts (e.g. Nash equilibria under common knowledge) as descriptive, whereas
behavioral economists argue this misses real agent limitations. Shoham & Leyton-Brown themselves
acknowledge that assuming perfect rationality is “questionable” and investigate bounded models
2 . This mirrors a known schism: Aumann & Rubinstein style views rationality as a modeling ideal,
versus (e.g.) Simon’s bounded rationality where agents use satisficing heuristics. In MAS/MARL, pure
rational equilibria are often the starting point, but reinforcement learning can capture more
adaptive or heuristic behavior, though usually still optimizing a reward. The debate continues on
whether MAS should strictly assume full rationality or explicitly model cognitive limits.
• Cooperation as emergent vs. imposed by rewards. In MARL, a major question is whether
cooperative behavior can truly emerge among self-interested learners, or if it must be engineered via
reward design. One camp finds that if you give all agents the same team reward, equilibrium
cooperation naturally arises (since each agent’s best response is to maximize the common welfare).
Others study mixed-motive settings where rewards conflict. The issue of credit assignment in
teams is crucial: how to decompose a shared team reward into individual learning signals so that

6

cooperating is reinforced for each agent. Methods like difference rewards or counterfactual baselines
(COMA algorithm) are proposed, but this remains a challenging open area in MARL. In classical MAS,
cooperative outcomes are known to be possible (folk theorems) 2 , but the dynamics by which
cooperation arises (learning in games) is a subject of active research.
• Algorithmic and computational disagreements. Even within learning approaches, there are
debates: e.g. Q-learning vs. policy gradients in MARL, independent learners vs. joint-action learners,
value decomposition vs. actor-critic. These are disagreements over algorithms, data sharing and
function approximation. Such technical debates, while practical, reflect deeper issues of whether
agents should optimize individual values or jointly factor a global value function 17 .
Each disagreement highlights a facet of how MAS can be structured, but there is no singular consensus. For
example, some researchers insist on strict game-theoretic rationality, whereas others are content with
approximate Nash or no-equilibrium guarantees (especially in complex RL settings). The existence of
multiple solutions (many equilibria, potential vs zero-sum games) also means disagreement on which
outcome is “the” right prediction.

Critiques and Limitations
The MAS/MARL tradition faces several critiques from adjacent disciplines:
• Behavioral economics / decision theory: Economists argue that MAS’s rational-agent model often
poorly predicts human behavior. Shoham & Leyton-Brown themselves note the Prisoner’s Dilemma
example: although theory predicts mutual defection, real players often cooperate for some rounds
18 . This exemplifies the “rationality gap”: humans have bounded computation, social preferences,
risk attitudes, etc. Fields like behavioral game theory (e.g. prospect theory) or cognitive hierarchy
models have grown up to address this. MAS researchers must therefore recognize that equilibria
may be only approximate models of actual agent behavior. In MARL, learning agents might exhibit
“irrational” quirks or convergence failures unseen in static game analysis.
• Ethics and values: MAS inherently takes agents’ utilities as given and optimizes them. But ethicists
ask: What should agents want? If an agent’s reward is misaligned with human values, the outcome
may be undesirable (the alignment problem). The MAS tradition typically does not debate goal
content; it assumes well-specified objectives. Political theorists similarly worry about who chooses the
mechanism or objective. MAS abstracts away from the design process: it rarely considers how a
central planner’s biases or power structures influence which mechanism is implemented. This
omission has led to interest in algorithmic fairness and multi-stakeholder mechanisms, but these lie
at the frontier.
• Scalability and complexity: Many MAS results hold only for small or abstract settings. Computation
of equilibria is often intractable (e.g. finding a Nash equilibrium is PPAD-complete in general). Model
sizes (state/action spaces) grow exponentially with agent number. MARL methods typically work in
low-dimensional or simulated domains. Critiques point out that MAS assumptions (complete
knowledge, infinite reasoning, full cooperation/competition modeling) rarely scale to real-world
multi-agent environments. Deep learning-based MARL is pushing the boundary, but issues of nonstationarity and instability remain. In sum, MAS/ MARL models often rely on simplifying assumptions

7

(e.g. discretized states, perfect information, no adversaries outside the model) that limit real-world
applicability.
• Mechanism and power critiques: Political economists note that “games” are only models; actual
societal interactions involve enforcement, coercion, and institutional power. MAS’s mechanism
design usually assumes a neutral, benevolent designer seeking efficiency. But in reality, the designer
(or those who write the rules) may have their own agenda, and agents may not trust the mechanism
to be enforced. These concerns are seldom addressed in the technical MAS literature.
• Ethical/Critical: Philosophers of technology might critique MAS for instrumentalizing agents as
mere utility maximizers, ignoring qualities like consciousness or rights. However, such critiques are
far outside the MAS scientific tradition, which intentionally abstracts away from such considerations.
In summary, while the MAS tradition has developed a rich toolkit of models (agents, utilities, equilibria,
learning algorithms), it also acknowledges its limits. Authors often justify their simplifying assumptions as
“modeling choices” (e.g. assuming rationality or common knowledge) while pointing out that these may not
hold in practice 2 . Where theoretical results diverge from observed behavior (as in bounded rationality
studies 2 ), these are seen as areas needing further research.
Sources: Authoritative MAS textbooks and surveys 3 1 2 4 13 12 8 11 (all [open-access]). These
provide the formal definitions and discussions above. Each claim about the tradition is grounded in these
sources.

1

2

3

4

5

6

7

10

12

15

18

Multiagent Systems: Algorithmic, Game-Theoretic, and Logical

Foundations
https://www.masfoundations.org/mas.pdf
8

9

courses.cs.duke.edu

https://courses.cs.duke.edu/spring07/cps296.3/littman94markov.pdf

[2309.06021] Emergent Communication in Multi-Agent Reinforcement Learning for Future Wireless
Networks M. Chafii is with the Engineering Division, New York University (NYU) Abu Dhabi, 129188, UAE and
NYU WIRELESS, NYU Tandon School of Engineering, Brooklyn, 11201, NY (e-mail: marwa.chafii@nyu.edu). S.
Naoumi is with NYU Tandon School of Engineering, NY. R. Alami, E. Almazrouei and M. Debbah are with
Technology Innovation Institute (TII), Abu Dhabi, UAE. M. Bennis is with the Centre for Wireless
Communications, the University of Oulu, Finland. This project received funding from TII Abu Dhabi.
11

https://ar5iv.labs.arxiv.org/html/2309.06021
13

14

16

17

arxiv.org

https://arxiv.org/pdf/2409.03052

8


