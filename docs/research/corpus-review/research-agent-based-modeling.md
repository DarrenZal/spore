---
research_input_for: corpus-foundational-review-v1
prompt_number: 06
tradition: "Agent-Based Modeling"
source_tool: chatgpt-or-gemini
source_file: "Agent-Based Modeling Synthesis.md"
ingested: 2026-04-19
conversion_note: "native markdown export; no conversion"
status: raw-research-input
---

# **The Architecture of Emergence: A Literature Synthesis of Agent-Based Modeling and Coordination Primitives**

The tradition of agent-based modeling (ABM) represents a fundamental paradigm shift in the social and complex systems sciences, moving away from aggregate, top-down differential equations toward a generative, bottom-up ontology. Emerging in the early 1970s with Thomas Schelling’s seminal explorations of segregation and maturing through the computational revolutions of the 1990s, ABM posits that macro-scale social phenomena—such as market crashes, cultural segregation, and cooperative norms—are the emergent properties of local interactions between autonomous, heterogeneous agents following discrete behavioral rules.1 This synthesis evaluates the core primitives of ABM, its stratified architecture, the placement of universal coordination concepts within its framework, and the internal contradictions that define the current state of the field.

## **§1 — Primitives**

In the ABM tradition, the system is not defined by its global state but by the local characteristics and behaviors of its constituent units. The following primitives form the essential building blocks of any agent-based simulation and provide the foundational logic for the Spore project's coordination primitives.

### **Agent**

The agent is the primary autonomous unit of the simulation. Within the literature, a sharp distinction is drawn between minimalist and rich agent architectures. Minimalist agents, exemplified by Schelling’s "pennies and dimes" on a checkerboard, are defined by a singular threshold-based rule and a categorical identity.4 Their internal state is often a binary representation of "satisfied" or "unsatisfied." In contrast, rich agents—often modeled using the Belief-Desire-Intention (BDI) architecture—possess complex internal mental states, including knowledge bases (beliefs), objective functions (desires), and committed plans (intentions).6

The load-bearing attribute of the agent is autonomy; agents operate without a central controller, meaning that coordination must arise through self-organization rather than command.2 In Epstein’s *Agent\_Zero*, this richness is further extended to include emotional (affective) states and social influence, suggesting that agency is a composite of reason, emotion, and context.10

### **Rule**

The rule is the behavioral logic that maps an agent's internal state and environmental perceptions to an action. In ABM, rules are typically nonlinear and discontinuous, often taking the form of "if-then" heuristics.1 For example, in the *Sugarscape* model, the agent movement rule ![][image1] requires the agent to survey its surroundings, identify the cell with the highest resource density, and relocate.9 In cooperation theory, rules like "Tit-for-Tat" define the logic of reciprocity: cooperate initially, then replicate the neighbor's previous action.11 These rules are the "micro-foundations" from which all higher-order structures are grown.10

### **Interaction and Neighborhood**

Interactions in ABM are inherently local. An agent does not interact with the "global" system but with a specific subset of the population defined as its neighborhood.1 This neighborhood may be spatial (e.g., the eight adjacent cells on a grid) or topological (e.g., nodes connected by edges in a social network).5 The nature of the interaction—whether pairwise (as in a trade or a game) or broadcasting (as in a signal)—determines the rate at which information and behaviors propagate through the system.14

### **Environment**

The environment provides the spatial and resource-based context for the agents. In *Sugarscape*, the environment is a 50x50 grid with a fixed "sugar capacity" that regenerates over time.9 The environment is not a passive backdrop; it is "coupled" with the agent society. Interagent dynamics affect environmental resources (e.g., through consumption), which in turn feeds back into the agents' survival prospects and behavioral choices.9

### **Emergence: Weak vs. Strong**

Emergence is the central "generative" claim of the ABM tradition. It refers to the appearance of macro-level patterns that are not explicitly contained in the micro-level rules.1

* **Weak Emergence** occurs when an external observer can detect a pattern (e.g., a traffic jam moving backward while cars move forward) that the agents themselves do not perceive or react to.3  
* **Strong Emergence** (or "immergence") involves a recursive loop where the emergent macro-structure is perceived by the agents and subsequently influences their behavior via "downward causation".19 This is particularly relevant for coordination, as it describes how social norms, once emerged, begin to constrain individual action.

### **Tipping Point and Path Dependence**

A tipping point is a critical threshold where a small change in individual behavior or environmental parameters leads to a sudden and disproportionate shift in the system's global state.4 Schelling (1978) famously illustrated that if individuals have even a slight preference for living near "like" neighbors, the neighborhood will eventually "tip" into full segregation.4 Path dependence implies that once such a transition occurs, the system's history "locks" it into a specific state, making it difficult to reverse even if the original conditions change.1

### **Heterogeneity**

Heterogeneity is a first-class primitive in ABM, distinguishing it from traditional economic models that rely on "representative agents".1 In ABM, agents vary in vision, metabolism, wealth, and initial locations.1 This diversity is what allows simulations to capture "fat-tail" events and systemic fluctuations that are often smoothed out by aggregate equations.1

| Primitive | Definition in ABM Tradition | Role in Coordination | Reference |
| :---- | :---- | :---- | :---- |
| **Agent** | Autonomous, discrete entity with internal state. | Primary decision-maker and actant. | 2 |
| **Rule** | Behavioral heuristic (often if-then logic). | The engine of local decision-making. | 1 |
| **Interaction** | Local coupling between agents or agent-environment. | Medium for reciprocity and signal transfer. | 1 |
| **Neighborhood** | Boundary of perception and interaction. | Defines the scope of local coordination. | 5 |
| **Environment** | The space/context providing resources. | The constraint-set for survival and trade. | 9 |
| **Emergence** | Macro-patterns arising from micro-interactions. | Target outcome of coordination (e.g., a norm). | 1 |
| **Tipping Point** | Critical threshold for systemic state change. | Represents a shift in collective behavior. | 4 |
| **Heterogeneity** | Diversity in agent attributes and rules. | Drives the complexity of systemic outcomes. | 1 |

## **§2 — Layering**

The ABM tradition stratifies the system into three distinct but interconnected layers: micro (the agent), meso (the interaction), and macro (the pattern). While the methodology lives at the micro-scale, the theoretical link between these layers is often the most contentious aspect of the literature.1

### **The Micro-Layer: Generative Foundations**

At the micro-level, the focus is on the "mechanisms" of decision-making.24 Generative social science argues that to explain a social phenomenon, one must "grow" it from these micro-foundations.9 This represents a "bottom-up" explanatory standard: if you cannot build the agents that generate the pattern, you have not explained the pattern.10

### **The Meso-Layer: The Thin Middle**

The meso-layer consists of the interaction structures—networks, small groups, and communication channels—that bridge individual agents and the global system.1 ABM literature is often "thin" on theorizing the meso-layer explicitly, treating it as a byproduct of interaction rules rather than a structural primitive in its own right.1 However, researchers like Scott Page emphasize that the "topology" of this meso-layer (e.g., whether a network is small-world or random) is the primary determinant of how quickly a coordination signal can "tip" the macro-system.1

### **The Macro-Layer: Collective Consequences**

The macro-layer is the level of aggregate regularities, such as wealth distributions (e.g., the skewed "Lorenz curves" in *Sugarscape*) or cultural clusters.9 In ABM, these macro-states are often viewed as "irreducible"; removing a single agent might not change the macro-pattern, but changing the interaction rules at the micro-level can "kill" the complex behavior of the whole.23

## **§3 — Placement of Universal Concepts**

The ABM tradition provides a specific ontology for common coordination concepts, some of which are load-bearing and others which are notable for their absence or reductionist treatment.

### **Intent and Commitment**

Within the BDI architecture, intent and commitment are formally defined as the sequential stages of practical reasoning.6

* **Intent** is the deliberative state of the agent—a specific desire that has been selected for pursuit.6 Intentions "constrain future deliberation," meaning once an agent has an intention, it will not consider competing plans until the current intention is fulfilled or deemed impossible.6  
* **Commitment** is the distinguishing factor that turns a "desire" into an "intention." It represents the agent’s "temporal persistence" and its refusal to abandon a plan in the face of minor environmental fluctuations.6

For the Spore project, this suggests that "intent" is the selection of a goal, while "commitment" is the locking of that goal into the agent’s execution cycle.

### **Evidence and Signals**

* **Signals** are localized information transfers between agents. In behavioral ABM, "intent signals" are behavioral traces (e.g., searching for a specific resource) that allow other agents to predict an entity's future state.27  
* **Evidence** is the empirical trace left by agent actions. In simulations, this is often the "logging" of state changes (e.g., an agent collecting sugar), which can then be read by other agents to inform their own strategies.9

### **Trust and Reciprocity**

* **Reciprocity** is the fundamental mechanism for the evolution of cooperation in worlds without central authority.12 Robert Axelrod defines it through the "shadow of the future"—the expectation of repeated interaction that makes cooperation rational even for egoists.11  
* **Trust** is often under-theorized in ABM, reduced to a probability of cooperation or an "emotional correlate" that strengthens reciprocity over time.17 It is rarely a standalone primitive but rather a byproduct of successful reciprocal interactions.17

### **Identity and Memory**

* **Identity** is typically a categorical attribute (e.g., "blue" or "red") used by agents to determine their "in-group" or "out-group" preferences.4 In richer models, identity can be dynamic, representing the "cultural tag" of an agent that changes through interaction.9  
* **Memory** is a cognitive constraint. Axelrod’s "Tit-for-Tat" is a memory-1 strategy (it only remembers the previous move).32 Richer agents can possess longer memories, which generally promotes higher levels of cooperation but at a higher computational cost.17

### **Holon-like-units (Whole-and-Part)**

ABM naturally supports "holons" through hierarchical modeling. An agent at one level can represent a collective entity (like a firm or a tribe) that is itself composed of agents at a lower level.2 This allows the researcher to study how "groups" act as agents in a higher-order environment.

### **Norms and Protocols**

Norms are the emergent "macro-rules" that begin to govern micro-behavior.8 In many models, norms are modeled as "downward pressures" where an agent’s utility is reduced if its actions deviate from the local neighborhood's consensus.9

### **Power, Authority, and Care**

* **Power and Authority** are often absences in ABM, as the tradition focuses on how order emerges *without* them.12 When they are present, they are modeled as resource asymmetries or "combat rules" where stronger agents can extract resources from weaker ones.9  
* **Care** is almost entirely absent from the mainstream ABM literature, occasionally appearing in biology-adjacent models as "unconditional helping" or "altruism" driven by kinship selection.34

| Concept | Load-bearing? | Definition / Mechanism | Reference |
| :---- | :---- | :---- | :---- |
| **Trust** | No | Emergent byproduct of reciprocity; emotional correlate. | 17 |
| **Identity** | Yes | Categorical attribute or cultural tag influencing preference. | 4 |
| **Memory** | Yes | Cognitive limit on how many past rounds are stored. | 17 |
| **Signals** | Yes | Local info transfer; behavioral traces (intent data). | 27 |
| **Agency** | Yes | Capacity for autonomous, goal-directed action. | 7 |
| **Commitment** | Yes | The persistence of a plan; link between desire and intent. | 6 |
| **Intent** | Yes | A selected desire constrained by beliefs and plans. | 6 |
| **Evidence** | Yes | Behavioral traces/logging used to update belief bases. | 9 |
| **Holon** | Yes | Hierarchical agents representing collective entities. | 2 |
| **Reciprocity** | Yes | Foundational mechanism for cooperation (Tit-for-Tat). | 11 |
| **Boundary** | Yes | Defined by vision, neighborhood, or network edges. | 5 |

## **§4 — Internal Disagreements**

The ABM field is marked by several fundamental schisms that reflect deeper epistemological tensions about the nature of social science.

### **Minimalist (KISS) vs. Rich (KIDS) Agents**

The "Keep It Simple, Stupid" (KISS) school, led by Schelling and Axelrod, argues that the power of ABM lies in using the simplest possible rules to generate complex behavior.1 The "Keep It Descriptive, Stupid" (KIDS) school, influenced by the BDI and *Agent\_Zero* frameworks, argues that over-simplifying human cognition leads to models that are "structurally invalid" for policy-making.10 This is an internal contradiction: should a model be an elegant "toy" for theoretical insight or a messy "simulation" for empirical prediction?.25

### **Emergence: Real vs. Epiphenomenal**

There is a deep disagreement over whether emergent properties have causal power.

* **Reductionists** argue that emergence is "epiphenomenal"—a useful label for an observer, but the "real" action is only at the micro-level.38  
* **Emergentists** (often in the "Strong Emergence" camp) argue for "downward causation," where social structures like "the market" or "the tribe" act as real constraints on individual agents.19

### **Methodology vs. Theoretical Program**

Is ABM a tool for doing social science (a methodology) or a new way of defining what social science is (a theoretical program)? Joshua Epstein argues for the latter, suggesting that the "generative" standard of explanation is a revolutionary break from the "correlational" standards of traditional sociology.1

### **Calibration to Data vs. Theoretical Exploration**

A significant rift exists between "abstract" models (like *Sugarscape*) that explore general principles of inequality and "calibrated" models that use real-world census or GIS data to predict specific outcomes (like the spread of a disease in a specific city).25 Critics of the abstract approach call it "computational storytelling," while critics of the calibrated approach point to the "identifiability problem".39

## **§5 — Critiques and Limits**

Despite its strengths, the ABM tradition faces several foundational critiques that limit its theoretical and policy applications.

### **The Identifiability Problem**

The "identifiability problem" is a core structural weakness of ABM.40 Because ABMs are complex and feature many parameters, it is often the case that "many different parameter sets can fit the same macro-data".40 This means that seeing a realistic wealth distribution emerge in a simulation does not prove that the specific rules you gave the agents are the ones operating in the real world.40 There is no unique "inverse" from the macro-pattern to the micro-rule.

### **Lack of Equilibrium Analysis**

Most social science is built on the concept of equilibrium, but ABMs are "permanently dynamic creations".2 While this makes them more realistic for studying crises (where the system is out of equilibrium), it makes them difficult to use for standard policy evaluations, which usually ask where the system will "settle".33

### **Under-theorized Relation to Statistical Mechanics**

While ABM looks like the social-science version of statistical mechanics (deriving gas laws from molecule movement), the analogy is often flawed.22 In physics, the interactions are governed by universal laws; in ABM, the "laws" are often ad-hoc behavioral heuristics that lack a rigorous theoretical grounding in psychology or cognitive science.11

### **Over-reliance on Visualization**

ABM has been criticized for being "eye-candy" science.2 Because simulations are easy to visualize (e.g., clusters forming on a grid), researchers may be tempted to claim "validation" based on visual similarity to real-world patterns rather than rigorous statistical tests of the underlying mechanisms.2

## **§6 — Coordination Theory and the Spore Primitives: A Deep Synthesis**

The ABM tradition provides a rigorous but conflicted framework for the Spore project's coordination primitives. The progression from **Intent** to **Commitment** to **Evidence** can be mapped directly onto the cognitive architecture of a rational agent.

### **Intent as Deliberation**

In ABM, **Intent** is not a vague desire; it is a "mental state" that has survived a "filter".6 If Spore intends to build coordination, it must recognize that "intent" in a decentralized system is a way for agents to prune their future search space. An agent that broadcasts "intent" is effectively signaling its future moves, allowing for the "alignment" of heterogeneous rules.6

### **Commitment as Persistence**

**Commitment** is the "temporal persistence" of that intent.8 In coordination theory, a commitment is only "real" if it resists environmental fluctuations. In BDI systems, this is modeled by the agent's refusal to reconsider its intentions until a "precondition" fails.6 This suggests that Spore’s "commitment" primitive must be stratified as a state that locks in a specific "plan" or "protocol."

### **Evidence and the Signaling of Reality**

The **Evidence** and **Signal** primitives are the "inputs" to the agent’s "belief base".6 In ABM, coordination fails when there is "misperception" or a "lack of history".11 Evidence serves to reduce the "uncertainty" in the coordination game, allowing for "conditional cooperation" based on the observed actions of others.24

### **The Holon as the Coordination Unit**

Finally, the **Holon** provides the necessary hierarchy for scaling. Because ABM is inherently multi-scale, the holon can be viewed as an emergent "group agent" that possesses its own rules and interactions at the macro-level while being constrained by its constituent agents at the micro-level.2

## **Synthesis of Core Principles for Coordination**

To achieve a 10,000-word depth, we must examine the mathematical and philosophical nuances of these primitives in action. For instance, the **Tipping Point** dynamic is not just a change in state; it is a formal phase transition. If we define the state of an agent as ![][image2] (e.g., defect or cooperate) and the aggregate state as ![][image3], the tipping point is the value of ![][image4] at which the update function ![][image5] shifts from a low-cooperation attractor to a high-cooperation one.14

| Spore Primitive | ABM Functional Counterpart | Mechanism of Action | Reference |
| :---- | :---- | :---- | :---- |
| **Intent** | BDI Intention | Goal selection after filtering desires; search-space pruning. | 6 |
| **Commitment** | Persistence Filter | Resisting state-change; temporal stability of the plan. | 6 |
| **Evidence** | Behavioral Logging | State-traces that update the agent's belief base. | 9 |
| **Signal** | Local Messaging | Pairwise or broadcast transfer of state information. | 17 |
| **Holon** | Group-Agent | Hierarchical nesting; collective entity acting as a unit. | 2 |

In the evolution of cooperation, the "shadow of the future" (![][image6]) is the critical parameter.11 For Spore to succeed as a coordination system, it must ensure that agents can "see" far enough into the future of their interaction that "defection" becomes an unprofitable strategy. This requires **Memory** (to track past actions) and **Signals** (to communicate future intent).11

### **Internal Contradiction: The "Soft Factor" Problem**

One of the most valuable contradictions for Spore to consider is the "Soft Factor" problem: while ABM is technically simple to program, it is conceptually deep because human agents are "irrational" and "subjective".1 A coordination primitive that assumes a "rational agent" (like BDI) may fail in a system of "emotional agents" (like *Agent\_Zero*).10 Spore must decide if its primitives are designed for "optimizing" agents or "affective" ones.

The ABM tradition, from Schelling to Epstein, ultimately teaches that coordination is not a global property to be managed, but a local property to be "grown".4 The primitives of intent, commitment, and evidence are the "micro-mechanisms" that make this growth possible in a world of autonomous, heterogeneous egoists.12

## R-claims

- **R1**: ABM treats coordination as a macro-pattern grown from local interactions among autonomous, heterogeneous agents rather than imposed by a central controller. [target:candidate:generative-coordination] [concept:collective-agency]
*R1 is supported by Schelling (1978), Epstein & Axtell (1996), and Axtell's ABM synthesis.*

- **R2**: Neighborhood and network topology are the decisive meso-level substrate through which signals, imitation, and tipping dynamics propagate. [target:candidate:meso-topology] [concept:coordination-substrate]
*R2 is supported by Schelling's segregation work, the Schelling demo literature, and the Emergent Mind ABM framework.*

- **R3**: BDI-style ABM gives Spore's intent/commitment split a formal analogue by treating intention as goal selection and commitment as persistence of the chosen plan. [target:candidate:intent-commitment-evidence-arc] [concept:commitment]
*R3 is supported by the JumpCloud BDI overview, the BDI software-model literature, and the arXiv BDI ontology note.*

- **R4**: Trust is usually derivative in ABM: repeated interaction, reciprocity, and memory produce cooperative stability more often than any standalone trust primitive does. [target:candidate:trust-derivation] [concept:reputation-market]
*R4 is supported by Axelrod's cooperation work, Gärdenfors on the cognitive demands of cooperation, and the Sugarscape tradition.*

- **R5**: ABM can represent holon-like scaling by allowing collective entities at one level to act as agents at the next. [target:candidate:holon-scaling] [concept:holon]
*R5 is supported by the agent-based model overview, the Emergent Mind framework, and Sugarscape's multi-scale reading.*

- **R6**: The tradition's main limits are identifiability, weak equilibrium grounding, and thin treatment of power and care relative to its rich modeling of rules and interaction. [target:meta:corpus-foundational-review] [concept:care]
*R6 is supported by the identifiability critique, Inverse Generative Social Science, and the survey of cooperation and communication demands.*

#### **Works cited**

1. Agent-based modeling: Methods and techniques for simulating ..., accessed April 18, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC128598/](https://pmc.ncbi.nlm.nih.gov/articles/PMC128598/)  
2. Agent-based model \- Wikipedia, accessed April 18, 2026, [https://en.wikipedia.org/wiki/Agent-based\_model](https://en.wikipedia.org/wiki/Agent-based_model)  
3. Agent-based modeling: Methods and techniques for simulating human systems \- PNAS, accessed April 18, 2026, [https://www.pnas.org/doi/10.1073/pnas.082080899](https://www.pnas.org/doi/10.1073/pnas.082080899)  
4. Micromotives and Macrobehavior \- Thomas C. Schelling \- Google Books, accessed April 18, 2026, [https://books.google.com/books/about/Micromotives\_and\_Macrobehavior.html?id=DenWKRgqzWMC](https://books.google.com/books/about/Micromotives_and_Macrobehavior.html?id=DenWKRgqzWMC)  
5. The Schelling Segregation Demo Home Page \- Faculty, accessed April 18, 2026, [https://faculty.sites.iastate.edu/tesfatsi/archive/tesfatsi/demos/schelling/Schellhp.htm](https://faculty.sites.iastate.edu/tesfatsi/archive/tesfatsi/demos/schelling/Schellhp.htm)  
6. What is BDI (Belief-Desire-Intention) Architecture? \- JumpCloud, accessed April 18, 2026, [https://jumpcloud.com/it-index/what-is-bdi-belief-desire-intention-architecture](https://jumpcloud.com/it-index/what-is-bdi-belief-desire-intention-architecture)  
7. The Belief-Desire-Intention Ontology for modelling mental reality and agency \- arXiv, accessed April 18, 2026, [https://arxiv.org/html/2511.17162v1](https://arxiv.org/html/2511.17162v1)  
8. Belief–desire–intention software model \- Wikipedia, accessed April 18, 2026, [https://en.wikipedia.org/wiki/Belief%E2%80%93desire%E2%80%93intention\_software\_model](https://en.wikipedia.org/wiki/Belief%E2%80%93desire%E2%80%93intention_software_model)  
9. Epstein and Axtell's Sugarscape \- JASSS, accessed April 18, 2026, [https://jasss.soc.surrey.ac.uk/12/1/6/appendixB/EpsteinAxtell1996.html](https://jasss.soc.surrey.ac.uk/12/1/6/appendixB/EpsteinAxtell1996.html)  
10. Inverse Generative Social Science: Backward to the Future \- JASSS, accessed April 18, 2026, [https://www.jasss.org/26/2/9.html](https://www.jasss.org/26/2/9.html)  
11. Robert Axelrod \- On Six Advances in Cooperation Theory, accessed April 18, 2026, [https://d-nb.info/1326476815/34](https://d-nb.info/1326476815/34)  
12. The Evolution of Cooperation \- Stuyvesant High School, accessed April 18, 2026, [https://bert.stuy.edu/pbrooks/spring2015/materials/HumanReasoning-2/Axelrod\_Robert\_The\_Evolution\_of\_Cooperation.pdf](https://bert.stuy.edu/pbrooks/spring2015/materials/HumanReasoning-2/Axelrod_Robert_The_Evolution_of_Cooperation.pdf)  
13. Full article: Sensemaking of causality in agent-based models, accessed April 18, 2026, [https://www.tandfonline.com/doi/full/10.1080/13645579.2022.2049510](https://www.tandfonline.com/doi/full/10.1080/13645579.2022.2049510)  
14. Agent-Based Modeling Framework \- Emergent Mind, accessed April 18, 2026, [https://www.emergentmind.com/topics/agent-based-modeling-framework](https://www.emergentmind.com/topics/agent-based-modeling-framework)  
15. Agent-Based Modeling of Epidemics: Approaches, Applications, and Future Directions, accessed April 18, 2026, [https://www.mdpi.com/2227-7080/13/7/272](https://www.mdpi.com/2227-7080/13/7/272)  
16. Understanding the social context of the Schelling segregation model \- PNAS, accessed April 18, 2026, [https://www.pnas.org/doi/10.1073/pnas.0708155105](https://www.pnas.org/doi/10.1073/pnas.0708155105)  
17. The Cognitive and Communicative Demands of Cooperation, accessed April 18, 2026, [https://www.fil.lu.se/hommageawlodek/site/papper/GardenforsPeter.pdf](https://www.fil.lu.se/hommageawlodek/site/papper/GardenforsPeter.pdf)  
18. Book Review of Joshua M. Epstein & Robert Axtell, Growing Artificial Societies: Social Science from the Bottom Up (MIT Press \- UNH Scholars Repository, accessed April 18, 2026, [https://scholars.unh.edu/cgi/viewcontent.cgi?article=1336\&context=risk](https://scholars.unh.edu/cgi/viewcontent.cgi?article=1336&context=risk)  
19. (PDF) Emergence in Agent-Based Computational Social Science ..., accessed April 18, 2026, [https://www.researchgate.net/publication/29614964\_Emergence\_in\_Agent-Based\_Computational\_Social\_Science\_Conceptual\_Formal\_and\_Diagrammatic\_Analysis](https://www.researchgate.net/publication/29614964_Emergence_in_Agent-Based_Computational_Social_Science_Conceptual_Formal_and_Diagrammatic_Analysis)  
20. Neighborhood Choice and Neighborhood Change \- California Center for Population Research, accessed April 18, 2026, [https://ccpr.ucla.edu/wp-content/uploads/2024/04/Neighborhood-Choice-and-Neighborhood-Change.pdf](https://ccpr.ucla.edu/wp-content/uploads/2024/04/Neighborhood-Choice-and-Neighborhood-Change.pdf)  
21. Agent-Based Modeling in Economics and Finance: Past, Present, and FutureV \- Complexity Handbook, accessed April 18, 2026, [https://complexityhandbook.uni-hohenheim.de/fileadmin/einrichtungen/complexityhandbook/AXTELL\_Robert.pdf](https://complexityhandbook.uni-hohenheim.de/fileadmin/einrichtungen/complexityhandbook/AXTELL_Robert.pdf)  
22. Linking agent-based models and stochastic models of financial ..., accessed April 18, 2026, [https://www.pnas.org/doi/10.1073/pnas.1205013109](https://www.pnas.org/doi/10.1073/pnas.1205013109)  
23. John H. Miller & Scott E. Page: Complex Adaptive Systems is ..., accessed April 18, 2026, [https://assets.press.princeton.edu/chapters/s02\_8429.pdf](https://assets.press.princeton.edu/chapters/s02_8429.pdf)  
24. Decision-Making in Agent-Based Models of Migration: State of the Art and Challenges \- PMC, accessed April 18, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC4803816/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4803816/)  
25. Complex Adaptive Systems: an Introduction to Computational Models of Social Life (Princeton Studies in Complexity) \- JASSS, accessed April 18, 2026, [https://jasss.soc.surrey.ac.uk/12/1/reviews/ormerod.html](https://jasss.soc.surrey.ac.uk/12/1/reviews/ormerod.html)  
26. Epstein & Axtell, Growing Artificial Societies (review), accessed April 18, 2026, [https://users.monash.edu/\~aland/reviews/epstein.rev.html](https://users.monash.edu/~aland/reviews/epstein.rev.html)  
27. What is ABM Intent Data & How to Use It Effectively in Your ABM Strategy \- Demandbase, accessed April 18, 2026, [https://www.demandbase.com/blog/abm-intent-data/](https://www.demandbase.com/blog/abm-intent-data/)  
28. The Missing Layer in ABM: How Intent Signals Turn Targeting into Timely Growth, accessed April 18, 2026, [https://targetorate.us/blogs/the-missing-layer-in-abm-how-intent-signals-turn-targeting-into-timely-growth/](https://targetorate.us/blogs/the-missing-layer-in-abm-how-intent-signals-turn-targeting-into-timely-growth/)  
29. Intent Data Fundamentals \- RollWorks \- AdRoll ABM, accessed April 18, 2026, [https://help.rollworks.com/hc/en-us/articles/13863891613965-Intent-Data-Fundamentals](https://help.rollworks.com/hc/en-us/articles/13863891613965-Intent-Data-Fundamentals)  
30. The Evolution of Cooperation \- Free, accessed April 18, 2026, [http://pombo.free.fr/axelrod2006.pdf](http://pombo.free.fr/axelrod2006.pdf)  
31. Growing Artificial Societies: Social Science from the Bottom Up \- Complexity Explorer, accessed April 18, 2026, [https://www.complexityexplorer.org/explore/resources/509-growing-artificial-societies-social-science-from-the-bottom-up](https://www.complexityexplorer.org/explore/resources/509-growing-artificial-societies-social-science-from-the-bottom-up)  
32. Conditional cooperation with longer memory \- PNAS, accessed April 18, 2026, [https://www.pnas.org/doi/10.1073/pnas.2420125121](https://www.pnas.org/doi/10.1073/pnas.2420125121)  
33. Using Agent-Based Models for Analyzing Threats to Financial Stability, accessed April 18, 2026, [https://www.financialresearch.gov/working-papers/files/OFR\_Working\_Paper\_No3\_ABM\_Bookstaber\_Final.pdf](https://www.financialresearch.gov/working-papers/files/OFR_Working_Paper_No3_ABM_Bookstaber_Final.pdf)  
34. Physical Constraints on the Evolution of Cooperation \- PMC \- NIH, accessed April 18, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC3085059/](https://pmc.ncbi.nlm.nih.gov/articles/PMC3085059/)  
35. Altruistic behaviors and cooperation among gifted adolescents \- PMC \- NIH, accessed April 18, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC9404372/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9404372/)  
36. RSS \- The Jim Rutt Show, accessed April 18, 2026, [https://www.jimruttshow.com/feed/podcast/](https://www.jimruttshow.com/feed/podcast/)  
37. Where Does Theory Have It Right? A Comparison of Theory-Driven and Empirical Agent Based Models \- JASSS, accessed April 18, 2026, [https://www.jasss.org/24/2/4/4.pdf](https://www.jasss.org/24/2/4/4.pdf)  
38. Agent-Based Modeling and Its Trade-Offs: An Introduction and Examples \- ResearchGate, accessed April 18, 2026, [https://www.researchgate.net/publication/376987777\_Agent-Based\_Modeling\_and\_Its\_Trade-Offs\_An\_Introduction\_and\_Examples](https://www.researchgate.net/publication/376987777_Agent-Based_Modeling_and_Its_Trade-Offs_An_Introduction_and_Examples)  
39. Assessing Agent-Based Models for Regulatory Applications: Lessons from Energy Analysis, accessed April 18, 2026, [https://www.ncbi.nlm.nih.gov/books/NBK305908/](https://www.ncbi.nlm.nih.gov/books/NBK305908/)  
40. On the parameter identifiability problem in Agent Based economical ..., accessed April 18, 2026, [https://arxiv.org/pdf/1602.01271](https://arxiv.org/pdf/1602.01271)  
41. Why Agent-Based Modeling Never Happened in Economics \- Economist Writing Every Day, accessed April 18, 2026, [https://economistwritingeveryday.com/2022/03/14/why-agent-based-modeling-never-happened-in-economics/](https://economistwritingeveryday.com/2022/03/14/why-agent-based-modeling-never-happened-in-economics/)  
42. Complexity Theory and the Social Sciences \- Amazon S3, accessed April 18, 2026, [https://s3.amazonaws.com/arena-attachments/177681/a2eab5939d653608e5da69925c2cdc77.pdf](https://s3.amazonaws.com/arena-attachments/177681/a2eab5939d653608e5da69925c2cdc77.pdf)  
43. BEHAVIORAL Operational Research | PDF | Behavioral Economics | Agent Based Model, accessed April 18, 2026, [https://www.scribd.com/document/433251445/BEHAVIORAL-Operational-Research](https://www.scribd.com/document/433251445/BEHAVIORAL-Operational-Research)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAABCUlEQVR4XmNgGAW0BvVA/AWI/0PxWVRpDPCQAaEWpK8YVRoVwBSCMC6gB8S1DBA1xmhyWMETBoSLcYHHQHyMAb8aOPAC4hQg3sKAW8M6KE3IN3BwAkqDwgebBh4gzoWyQfKrkeRwAphBoHACsWWQ5EDgB5R2Z4DIayHJ4QRPkdggTXFI/Hwg5oayQT7C5hMMALI9DYkP0rQQiY/sVZLDEwZAmkCxDALPkCUYIHKr0MSwAnSbYa6xBWIdJHFvqLg2khhO8BKN/4YBovk2mjgop6E7AAMwAvFdBki2QwbLGbBrJhiePUD8AYjfAvFnIP6DJOcDxKFI/K8MCLWfgPg3EFciyY+CUUALAABbjUmZS+msywAAAABJRU5ErkJggg==>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAYCAYAAAB+zTpYAAADHklEQVR4Xu2ZXagNURTH/77JZz7DAyIiRZKUB/eBBykJDx68eFA8kBQKERJJSj4iyYPCg+TVR254QShKlIebKEok34lY/7tm7t2z2nNmz8zpnM7p/Orfmfmv3Z6918ysvedeoEWLFvWhr2iVNWvIctEcazYDQ0T/RO9E802slowQHYWO5YmJNTR/RN+s6TBF9AA68VsmVoRH1jD0gl5rqQ00KpzMQ2tGLITGY2ab81DiGxQrC7bZac16sUa0wdG0ZDgTTuauNSMYY58uv0X3jRfKFoQneJ81a8lo6CBOieaKJonGikaK+jjtQmA/7dZE9zX463Ij8ouQJ8EHrOnjmGidc35ItMs5L8JK0T1rliAtwbvhT8Z5+P0Q8iT4oDVdxoieRccboa9V3PFj0ZHouAhc7asJx3XTmsI1+JNxEn4/hDwJrpgjt5NB0fks6DaIx6udeB72Q7dV1WIAdDzLbABal33J4FtJf7wNBBCa4B+RUnE3zNuQ7LS/cxzDVTYkca+hNbeShna1TmeUaAd0XJy0j4vwJ+ME1O9tAwGEJph8FH0VLbEByxdkdxpU0KF7Vj5tlTSuq3U63Gkch46LX1A+0mrwOfj9EPIkmCWKpXWtDVjY4QVrFuQ09LWuFnzaOb4245MF0Fg9dhEvRD+tGTMM2slkdNffGU78uXM8QXQb+lSE0mGNknB8vkWOMLbCePzq+2Q8lsGQkhGaYLZJXeTOQBvwSeM3NY+5TyVc6C5Hx+SVaLjor+NlwT/IXLVmCTg+3mQf16FlKaYHtP1Ex9sUeayXWRyGtuUaUAm2SS2b8SCoxdAnOT5nXbNwgcu7q5gJ7W8P9OYNTIZzwX7arenwVPRddAXadlEy3EkHkjfCwlr6XvRW9Cb6/YD00snr7LVmUdhZUVhDN0MTzU9LbuPmJVpkw+vfsWYByszDwr7KfpB10gYtE4OhtbsecDJ8i8rQT3TWmiXgmLZasyi/RJesWUM4mc/WzEmeNSSLuMSmbR8bjqnQCfETvuh/FLhbKgt3IduhY3lpYk3BdOimvqcN1Ij10L03n+AWLZqU/0RbwndY/BtqAAAAAElFTkSuQmCC>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAZCAYAAACvrQlzAAACkElEQVR4Xu2X3YtPQRjHHxaFG0lys1Iu5K3IhXKjrU1titLmJbmg5ML7S0m5261tXSgXW4hWdvN26Ur5C4SUUqLdJOQ974XC97vPnM78no49e+Z3OmZzPvWpmef5zZyZOed3zoxITU1NuXTADbATboSb4Ga4ZYy2Sk0DV+Bv+BYuhgudi5xL4DK4Em6H5+Ev1yZpVxlb4XdJL24H8MPkHnu5Kvkpev1tNpHDG9F2lbNG9MLPTXy66N2eZuJVM1HSmzrF5PK4Dw/YYBUkA7axWFgnOh7e4KL8k3lcFb1wl6uz3JKmo4BPG8d10yZiZIKkT+k3OKMxHQ3JGPkRKovl8BKc6+qr4GUpYQ2Sl/9qm4gITjLr9RTKI7jUldnnRdF37jxXb4pbop0M28QY4R5x4C9yoBdgv+jW5hw8NdKqOMdFx/nFJgqyH+7y6v6NavqmnYVHpYSOKoLbO47zpE0U4Iips79BE/OZBZ/aYBa7Je0o+ThxcWOH4+yxwUAmifY33yY8ZsMVNmhph7e9uv9xKgr7OlHAbm0WBCd2xwab4JiEzbmBBfClDUp6QppjE5HAg0az70/yQNJFTE6MPje88pCMsgfmaaNftIOsk8dh0dwLm4gEO/FQ2M9dONWV/QX77JXXi+7J+aDN9OIjcJvwAb6DH+HXxrS8d3HmWWbH/DvEAic12QZz4L4yiz7RhXzi6lwb1rkmXGRLWTcyGh6KvqaKwH/gKxsMoBeescHxDCez0wZzSD6wbTYRQPJ0hu7Ro2ItvG6DOZyW8N1KFtfgPcn+5owruPfjovCd/lp0V8KP5TMny/xLf3K/s2btYv5rdogePPaJnrEPwkNGxpjjUZK/2wv3uHajbdRrampqivAHl7203sGcGfMAAAAASUVORK5CYII=>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAYAAAAGAx/kAAAAp0lEQVR4XmNgGAWkgmgg/gnE/5HwGyT5X2hyt5HksAI3BojCp2ji3ED8D4i50MTxApit6GIkg5UMEI3NUD6IzYyQJh4wMiBc9Q2IBVClSQO/GSAG2aNLkApOMkAMuocuQQqYBcTlDNgDnWjwF4hZoWxnBohBdxDSxIHPQCyKJkayq54AsQm6IAMiKdSgSyCDFgbUpP8SVZphLZIcCJ8D4kIUFaNgpAMAXYMxGjJZzX0AAAAASUVORK5CYII=>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAAYCAYAAAD04qMZAAADY0lEQVR4Xu2YWahNYRTHFyHKXCJFiSeZEmWqmwdKSSmKF8kUigcPNyFeZB5ThrxceeDBm1I8KDyRIUqSUjLPQuZp/e1v3bPO/+697zn7nNO997R/9e9+6//t/d2z99rfKJKTk9PxmcZGTma6qPqzWSu+qDqxmVMRH1S92Eziteqj6q/T1+CncVnVwGZOVUAOymKCRDft5IoYhkmGf5BTMttU19lMY6ZECTnMFTG8V81lM6eqIBepU9Jg1XfVC9VGiW44pboTypMLlxaR97ra81u1lU1jkURJWBliGza3hHhUiLknLgl+GgdVy128Q7XJxfVGZ1WTap7zjqiWubhcjqp+sWnY4sTg5AG+BlxTPSXPGChRrwVrVD+kcP8N1Z5QriewVToTyhi1nqjehRh/Z4dyuUyRlu++GU5MWvJ6Ou+P6oqLPb493IN4rGpSKC9w9fWC7x1IFJ4T+7X1oYypKQuDJCV5mOtQaZNiWvI8iE+QZ4x35UYpvre7Kxt42F1sdiAw0gxw8TkpfuaurpwFfvdFIIHWxTl5t0PcJ8QGvCby4rC9Yxw4RVinuiodO3kMnvcxmxWQ9P6aaVA9kkIvg5DQpCHum+oSmzGgnZNsEmin3pK3lM2MoFe3mjyj1E06emTc19VXovuHS2G+G+nq77qykZa8MaoZbBIb2CAWS8uRw9NNtZZNAsnwQ6NnqkTPiakHv5Vf9k9X3q96peon0YLvvBQWOnHYOqEkZkl08XGuIFZIfKPHJPJ7qG6GMk5iABYtp0PZg+TtZjNgo0ASOChA/WquCCBprbVh9RO5IoDfndbGfSnU2TRhawhsqVaFMkAZ7wCjnJHULjgk6fX/wWrppURLXPQo/MWmHcNjEnGN4kfbg+IrRA+0eLO7zoPk7WUzgH3OPSl8AMxo1UM2iQuSPozhg73FJoGtUdI5r402EH7nHBcvdNcZ8G0R0zvESaDXbmezGliCKgXJ28emA0NqpSu2apC4WS4Tn6yzEi3akkhLbEWMk2i/VylI3gE2HdjktwcesJGBEarPLrbkYB5kcFRphx014ZlEScwK5oi3qjeqT1QH8AANbLYBz6WVA+ISwTnlfBdflPhFHKhZr/Pg8LRW4EttDwxlo8bgY0lbIVeV6WzkZAYr9SFs5uTktDX/ABeh2ZLEi7nYAAAAAElFTkSuQmCC>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAZCAYAAADjRwSLAAAAmUlEQVR4XmNgGBRACF0AGTAC8X8gPgqlQRgD9DJAFIKABBDvRpKDg0Qg3o8uiA2ArFBCF0QH7xhwuAUGYhgQDr6DJgcGH4G4Ecr+wYDFtBtA/BqJn8YAUSSMJAYW6EDiW0PFQMEABjpQAWQggy42CV0ACMrQxUrRBYDgMRAvRxMDK+KAskGORdcEBkxA/IIBIvkWTW4UMDAAAIETI1FLve9bAAAAAElFTkSuQmCC>
