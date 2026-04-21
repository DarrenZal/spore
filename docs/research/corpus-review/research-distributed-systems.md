---
research_input_for: corpus-foundational-review-v1
prompt_number: 04
tradition: "Distributed Systems Primitives"
source_tool: chatgpt-or-gemini
source_file: "Distributed Systems Primitives Synthesis.md"
ingested: 2026-04-19
conversion_note: "native markdown export; no conversion"
status: raw-research-input
---

# **Foundations of Distributed Coordination: A Literature Synthesis and Structural Review of Primitives**

The field of distributed systems coordination has, over the last fifty years, transitioned from a search for global synchrony to a sophisticated management of uncertainty. This report provides a comprehensive literature synthesis of distributed systems coordination primitives, spanning from the early formalizations of logical time in the 1970s to contemporary critiques of the foundational impossibility results. This synthesis is intended to support the structural review of the "Spore" project by evaluating the choice, naming, and stratification of its core primitives against the established computer science (CS) canon.

## **§1 Foundations and Evaluation of Primitives**

The primitives of distributed systems are not merely technical tools but ontological commitments regarding the nature of time, state, and agreement in a world where communication is neither instantaneous nor guaranteed.

### **The Temporal Ordering of Events**

The most fundamental primitive in distributed systems is the mechanism for ordering events. Leslie Lamport’s 1978 seminal work, *Time, Clocks, and the Ordering of Events in a Distributed System*, established that "time" in a distributed environment is a logical, not a physical, construct 1\[institutional\]. Lamport defines a distributed system as a collection of distinct processes which communicate by exchanging messages, where the message transmission delay is not negligible 1\[institutional\]. The core primitive here is the "happened before" relation (![][image1]), a partial ordering that defines causality without requiring synchronized physical clocks 2\[open-access\].

| Relation Rule | Definition | Implication for Coordination |
| :---- | :---- | :---- |
| **Local Ordering** | If ![][image2] and ![][image3] are events in the same process and ![][image2] comes before ![][image3], then ![][image4]. | Process-level intent is inherently ordered. |
| **Causal Message** | If ![][image2] is the sending of a message and ![][image3] is its receipt, then ![][image4]. | Evidence of a commitment is rooted in this transfer. |
| **Transitivity** | If ![][image4] and ![][image5], then ![][image6]. | Chains of evidence form a causal history. |

Lamport’s "Logical Clocks" provide a way to assign numbers to these events such that the Clock Condition is satisfied: for any events ![][image7], if ![][image4], then ![][image8] 3\[open-access\]. This partial order can be extended to a total order using tie-breaking mechanisms (like process IDs), but this total order is often arbitrary and can lead to anomalous behavior when the system's internal order contradicts the user’s external perception of time 2\[open-access\]. For Spore, this highlights that while "intent" and "commitment" might have a clear causal link, their global ordering against other groups' intents remains a design choice rather than an inherent fact.

### **Consistency, Availability, and Partition Tolerance (CAP)**

Eric Brewer’s CAP Theorem (initially proposed as a conjecture in 2000 and proven by Gilbert and Lynch in 2002\) defines the boundaries of the design space for distributed data stores 4\[paywalled\]5\[open-access\]. The theorem identifies a trilemma: a system can provide at most two of the three properties: Consistency (C), Availability (A), and Partition Tolerance (P) 6\[open-access\].

| Property | Core Primitive Definition | Failure Mode |
| :---- | :---- | :---- |
| **Consistency (C)** | Atomic or linearizable consistency; every read sees the most recent write 6\[open-access\]. | System stalls or returns errors to maintain safety. |
| **Availability (A)** | Every request receives a response (even if stale) 7\[open-access\]. | System riskily serves conflicting data. |
| **Partition Tolerance (P)** | The system continues to operate despite network message loss 7\[open-access\]. | Essential for any wide-area network. |

The evolution of CAP literature suggests that "2 of 3" is a misleading oversimplification. In his 2012 retrospective, Brewer clarifies that the choice is not global but fine-grained; designers must handle the "partition decision" only when a communication timeout occurs 4\[paywalled\]7\[open-access\]. During a partition, a system must choose between cancelling an operation (sacrificing A) or proceeding (sacrificing C) 7\[open-access\]. This nuance is critical for Spore: the transition from "intent" to "commitment" essentially represents a movement into a consistency-first mode, whereas "signal" may operate in an availability-first (eventually consistent) mode.

### **Strong vs. Weak Consistency Models**

The tradition distinguishes between levels of consistency based on how they restrict the legal ordering of operations.

#### **Linearizability and Sequential Consistency**

Linearizability (introduced by Herlihy and Wing in 1990\) is the "gold standard" of strong consistency 8\[institutional\]. It requires that each operation appears to take effect instantaneously at some point between its invocation and its response 9\[open-access\]. This property is "local" (composable), meaning if each object is linearizable, the system is linearizable 8\[institutional\]10\[open-access\].

In contrast, Lamport's sequential consistency (1979) is weaker: it requires that the result of any execution is the same as if all operations were executed in *some* sequential order that preserves the program order of each processor 11\[institutional\]. Sequential consistency does not have a real-time constraint; a read may return a stale value as long as all nodes agree on the same stale sequence 12\[open-access\].

#### **Causal and Eventual Consistency**

Causal consistency ensures that only causally related events are seen in the same order by all participants 13\[open-access\]. It is the strongest consistency model achievable in a system that remains available during network partitions 14\[institutional\]. Eventual consistency is the weakest form, guaranteeing only that if updates stop, all replicas will eventually reach the same state 15\[open-access\]16\[institutional\].

### **Conflict-free Replicated Data Types (CRDTs)**

Marc Shapiro et al. (2011) introduced CRDTs to formalize strong eventual consistency 17\[open-access\]. CRDTs allow uncoordinated updates at any replica while guaranteeing deterministic convergence once all updates are propagated 15\[open-access\].

| Type | Mechanism | Requirement |
| :---- | :---- | :---- |
| **State-based (CvRDT)** | Full state merge using a join function 17\[open-access\]. | Merge must be a join-semilattice (commutative, associative, idempotent). |
| **Operation-based (CmRDT)** | Propagating update operations directly 18\[open-access\]. | Operations must commute; requires causal-order delivery. |

CRDTs demonstrate that "evidence" of coordination can be aggregated mathematically rather than through consensus, provided the operations move "upward" in a defined partial order 19\[open-access\].

### **Consensus, Leader Election, and Quorum**

Consensus is the core primitive for reaching agreement in the presence of faults. Nancy Lynch defines the safety properties of consensus as agreement (all nodes decide the same value) and validity (the decided value was proposed by someone) 20\[open-access\]21\[open-access\].

1. **Paxos and Raft**: Leader-based protocols that impose a total order on operations by funneling them through a single node 21\[open-access\].  
2. **PBFT (Practical Byzantine Fault Tolerance)**: Extends consensus to adversarial settings where nodes may lie or act maliciously, requiring ![][image9] nodes to tolerate ![][image10] traitors 22\[institutional\]23\[open-access\].  
3. **Quorum**: A primitive where a subset of nodes (e.g., a majority) must agree for a result to be durable. This provides a mechanism for coordination without requiring a single leader at all times 4\[paywalled\]13\[open-access\].

### **The Log as a Primitive**

Jay Kreps identifies the "Log" (an append-only, totally ordered sequence) as the unifying abstraction for distributed systems 24\[open-access\]. The log acts as the ground truth of ordering, allowing multiple downstream applications to consume state transitions at their own pace 25\[open-access\]26\[open-access\]. In the Spore context, the sequence *intent → commitment* can be viewed as entries in a distributed log that different "holons" (part-whole units) observe to synchronize their state.

## **§2 Layering and Architecture**

The distributed systems tradition has a fraught relationship with layering. While the OSI model suggests a clear separation of concerns (physical, link, network, etc.), the coordination literature argues that consistency and availability cannot be neatly "layered out."

### **The Problem with Protocol Stacks**

Pat Helland, in *Life beyond Distributed Transactions*, argues that traditional layering—where the application assumes a consistent database layer—is a "Maginot Line" that fails at scale 27\[open-access\]. Application developers often assume "all-or-nothing" transactional semantics, but Helland asserts that "Grown-Ups Don't Use Distributed Transactions" because they introduce points of contention that destroy availability and throughput 28\[open-access\].

### **Coordination Avoidance**

Peter Bailis develops this critique into the "Coordination Avoidance" framework 29\[open-access\]. He argues that many application invariants (e.g., adding to a set, maintaining a counter) are "invariant confluent" and thus do not require a coordinated transaction layer 30\[open-access\]29\[open-access\]. For Spore, this suggests that the "stratification" of primitives should place invariant confluence analysis at the center: which coordination steps (like "commitment") are strictly necessary for correctness, and which can be deferred to uncoordinated, local "signals"?

| Architectural Layer | Distributed Systems Critique | Alternative Primitive |
| :---- | :---- | :---- |
| **Transaction Layer** | Blocks progress, limits scalability 29\[open-access\]. | Invariant Confluence / RAMP transactions. |
| **Consistency Layer** | CAP forced tradeoffs are often global and rigid 7\[open-access\]. | PACELC-aware fine-grained tradeoffs. |
| **Messaging Layer** | Simple forward-in-time-only (FITO) is a design choice, not physics 31\[open-access\]. | Bilateral transactions / exactly-once exchanges. |

## **§3 Placement of Universal Concepts**

In the distributed systems tradition, universal concepts are stripped of their sociological or ethical weight and redefined as formal system properties.

### **Load-Bearing Concepts**

* **State and Memory**: State is the set of values stored across nodes, often replicated via State Machine Replication (SMR) 32\[institutional\]. Memory is either "soft" (ephemeral) or "hard" (durable/logged) 6\[open-access\].  
* **Norms/Protocols**: Protocols are the formal specifications of behavior that nodes must follow to maintain safety 33\[open-access\].  
* **Identity**: In BFT settings, identity is a cryptographic primitive (digital signatures/keys) used to verify the source of a message 34\[open-access\].  
* **Power/Authority**: In this tradition, authority is decentralized to a quorum or centralized in a "leader" (e.g., Paxos leader), whose power is strictly limited to ordering and is subject to revocation 21\[open-access\]35\[open-access\].  
* **Commitment**: Defined technically as the point where an operation is guaranteed to be durable and visible to all future reads 36\[open-access\]28\[open-access\].  
* **Intent**: Recently appearing in "intent-centric" systems (e.g., Anoma), it is defined as a declarative commitment to user preferences over state transitions 37\[open-access\].  
* **Evidence**: Manifests as cryptographic proofs (e.g., zk-SNARKs) or receipt logs that verify a protocol was followed 38\[open-access\]33\[open-access\].  
* **Agency**: Traditionally absent, now emerging in "Agentic AI" contexts to describe autonomous entities with keys and model weights operating on infrastructure like Spore 33\[open-access\]39\[open-access\].

### **Notable Absences and Reinterpretations**

* **Trust**: In this tradition, trust is replaced by "trustlessness"—the ability to verify correctness through math and consensus rather than reputation 33\[open-access\]40\[open-access\].  
* **Care**: Almost entirely absent, except in healthcare-specific distributed systems where it refers to "continuity of care" across records 41\[open-access\].  
* **Reciprocity**: Reinterpreted as bilateral interaction or exactly-once exchanges where both endpoints must participate to complete a transaction 42\[open-access\]31\[open-access\].  
* **Holon**: Specifically used in "Holonic Modeling" to describe agents that are both autonomous wholes and decomposable parts, mirroring the "small-group" focus of Spore 43\[open-access\]44\[open-access\].  
* **Boundary**: Defined by the network partition (P) or the limits of a "failure cell" 4\[paywalled\]45\[open-access\].

## **§4 Internal Disagreements and Dialectics**

The tradition is defined by several key internal disagreements that reveal the friction between theory and practice.

### **The CAP Trilemma vs. Nuance**

There is a fundamental disagreement between the original "2 of 3" CAP formulation and Brewer's later retrospective. The early NoSQL movement used CAP as an excuse to forfeit consistency entirely 46\[open-access\]. Brewer’s 2012 critique argues that this was an "overreaction" and that systems should maximize both C and A, only choosing between them during rare partitions 7\[open-access\]7\[open-access\].

### **Linearizability: Necessary or Overkill?**

A persistent debate exists over the cost of linearizability. While it simplifies programming by providing a sequential mental model, its performance cost is often deemed "prohibitive" 12\[open-access\]. Authors like Bailis and Abadi suggest that many applications only truly require causal consistency, and that forcing linearizability is a design mistake that limits throughput unnecessarily 13\[open-access\]47\[open-access\].

### **Gossip vs. Leader-Based Consensus**

At scale, the disagreement centers on whether to use "heavyweight" consensus (like Multi-Paxos) or "lightweight" gossip protocols 48\[open-access\]35\[open-access\]. Gossip is resilient and decentralized but "too slow" or "inconsistent" for high-stakes coordination; consensus is fast and consistent but brittle and hard to scale 21\[open-access\]35\[open-access\].

### **CRDTs: Sufficient for Coordination?**

The CRDT literature argues that many conflicts can be resolved mathematically without coordination 17\[open-access\]. However, critics point out that CRDTs cannot maintain global invariants (like "no double-spending" or "staying below a capacity limit") without some form of stronger coordination or consensus 30\[open-access\]19\[open-access\].

## **§5 Critiques and Limits**

The distributed systems tradition faces significant critiques regarding its foundational assumptions.

### **PACELC: The Missing Latency Tradeoff**

Daniel Abadi’s PACELC theorem is the primary critique of the CAP theorem 46\[open-access\]. It argues that CAP ignores the much more common tradeoff between latency and consistency that occurs when the system is *not* partitioned 49\[open-access\]. In modern systems, users often choose weak consistency not because of network failure, but because strong consistency "just takes too much time" due to the RTT of coordination 46\[open-access\]50\[open-access\].

### **The FITO Category Mistake**

A radical contemporary critique suggests that the "impossibility" results of distributed systems (FLP, CAP, Two Generals) are not physical limits but consequences of the "Forward-In-Time-Only" (FITO) modeling assumption 31\[open-access\]. This critique argues that by treating a message as a unilateral entity rather than a bilateral transaction, the field has built a "surplus ontological structure" of scalar and vector clocks that could be dissolved if interaction was modeled as a simultaneous, bilateral act 51\[open-access\].

### **The BFT vs. CFT Split**

A major limit of the tradition is the lack of engagement between Crash Fault Tolerant (CFT) and Byzantine Fault Tolerant (BFT) literature. Until the advent of blockchain, BFT was often treated as "purely academic" and "out of scope" for production systems due to its complexity and the assumption that internal data center nodes would not act maliciously 22\[institutional\]32\[institutional\]52\[open-access\]. This split has created a gap in understanding how to coordinate small groups that may have internal "traitors" or misconfigured agents.

## **§6 Implications for Spore: Primitives and Stratification**

The Spore sequence *intent → commitment → evidence \+ signal \+ holon* maps well to the established CS tradition but requires careful naming to avoid the "Maginot Line" of transactional layering.

1. **Intent as Proposal**: In this tradition, "intent" is functionally equivalent to a "proposal" in consensus theory 20\[open-access\]21\[open-access\].  
2. **Commitment as Linearization Point**: A "commitment" should be understood as a linearization point where the state change becomes visible 9\[open-access\]8\[institutional\].  
3. **Evidence as Replicated Log/Proof**: "Evidence" is the mechanism for State Machine Replication, ensuring all "holons" can independently verify the transition 23\[open-access\]33\[open-access\].  
4. **Signal as Gossip**: The "signal" primitive aligns with background data dissemination (gossip), which provides high availability at the cost of potential staleness 16\[institutional\]53\[open-access\].  
5. **Holon as Decomposable Agent**: The "holon" primitive addresses the need for hierarchical organization, acting as a modular building block for complex, multi-level systems 43\[open-access\]44\[open-access\].

The "gap" identified for Spore is the lack of a formal "invariant confluence" check between these primitives. If Spore intends to allow "coordination avoidance," it must explicitly differentiate between operations that require "commitment" (coordinated consensus) and those that only require "signal" (uncoordinated CRDT-like updates).

---

**Analytical Synthesis of Primitives and System Properties**

| Primitive/Concept | CS Literature Status | Primary Author Reference | Core Philosophical Tension |
| :---- | :---- | :---- | :---- |
| **Logical Time** | Load-bearing | Lamport (1978) 1 | Partial vs. Total ordering. |
| **Consistency** | Highly stratified | Herlihy/Wing (1990) 8 | Safety vs. Performance (Latency). |
| **Consensus** | Foundational | Lynch (1996) 20 | Safety vs. Liveness (FLP result). |
| **Log** | Unifying | Kreps (2013) 24 | Centralized order vs. Scalability. |
| **CRDT** | Convergent | Shapiro (2011) 17 | Math vs. Coordination. |
| **Gossip** | Scalable | Demers (1987) 16 | Spread speed vs. Accuracy. |
| **Trust** | Cryptographic | Pease et al. (1980) 22 | Identity vs. Malice. |
| **Agency** | Emerging | Preguiça et al. (2011) 54 | Autonomy vs. Convergence. |

The synthesis reveals that "coordination" is not a single act but a spectrum of ordering guarantees. For small-group coordination as envisioned by Spore, the internal contradictions of the tradition suggest that the most resilient system will not be one that enforces a single global consistency model, but one that allows "holons" to negotiate their own tradeoffs between linearizable "commitments" and eventually consistent "signals."

## R-claims

- **R1**: Distributed coordination begins with causal ordering, since logical time is a partial order over events rather than a shared physical clock. [target:candidate:temporal-order] [concept:evidence]
*R1 is supported by Lamport's original paper and the logical-clocks reviews cited in the document.*

- **R2**: CAP is not a blanket pick-any-two law for whole systems but a timeout-bound choice between availability and consistency under partition. [target:candidate:cap-nuance] [concept:coordination-substrate]
*R2 is supported by Gilbert & Lynch, Brewer's retrospective, and the Spanner/TrueTime discussion.*

- **R3**: Consistency forms a real spectrum from linearizability through causal consistency to eventual convergence, each point trading simplicity against coordination cost or latency. [target:candidate:consistency-spectrum] [concept:evidence]
*R3 is supported by Herlihy & Wing, Lamport on sequential consistency, and the causal/eventual consistency literature cited here.*

- **R4**: CRDTs show that some evidence can be merged without consensus, but only where the invariant survives commutative convergence. [target:candidate:coordination-avoidance] [concept:evidence]
*R4 is supported by Shapiro's CRDT work and Bailis on coordination avoidance.*

- **R5**: In this tradition commitment aligns with durability or linearization, while signal aligns with gossip and eventually propagated state. [target:candidate:intent-commitment-evidence-arc] [concept:commitment]
*R5 is supported by the consensus literature, Kreps's log abstraction, and the gossip-protocol sources.*

- **R6**: The field's strongest critiques target latency-blind CAP thinking, FITO modeling assumptions, and the underdeveloped bridge between crash-fault and Byzantine coordination. [target:meta:corpus-foundational-review] [concept:signal]
*R6 is supported by Abadi's PACELC critique, the FITO paper, and the BFT surveys.*

#### **Works cited**

1. Time, clocks, and the ordering of events in a distributed system \- A.M. Turing Award, accessed April 18, 2026, [https://amturing.acm.org/p558-lamport.pdf](https://amturing.acm.org/p558-lamport.pdf)  
2. Time, Clocks, and the Ordering of Events in a Distributed System by Leslie Lamport \- Vaibhav Singh, accessed April 18, 2026, [https://vaibhavsingh1993.github.io/pdfs/Review\_TimeOrder\_vsingh7\_CSC\_724.pdf](https://vaibhavsingh1993.github.io/pdfs/Review_TimeOrder_vsingh7_CSC_724.pdf)  
3. Time, Clocks, and the Ordering of Events in a ... \- Leslie Lamport, accessed April 18, 2026, [https://lamport.azurewebsites.net/pubs/time-clocks.pdf](https://lamport.azurewebsites.net/pubs/time-clocks.pdf)  
4. Spanner, TrueTime & The CAP Theorem \- Google Research, accessed April 18, 2026, [https://research.google.com/pubs/archive/45855.pdf](https://research.google.com/pubs/archive/45855.pdf)  
5. Perspectives on the CAP Theorem \- DSpace@MIT, accessed April 18, 2026, [https://dspace.mit.edu/handle/1721.1/79112](https://dspace.mit.edu/handle/1721.1/79112)  
6. Brewer's CAP Theorem \- dokumen.pub, accessed April 18, 2026, [https://dokumen.pub/download/brewers-cap-theorem.html](https://dokumen.pub/download/brewers-cap-theorem.html)  
7. CAP Twelve Years Later: How the “Rules” Have Changed \- UCSB ..., accessed April 18, 2026, [https://sites.cs.ucsb.edu/\~rich/class/cs293b-cloud/papers/brewer-cap.pdf](https://sites.cs.ucsb.edu/~rich/class/cs293b-cloud/papers/brewer-cap.pdf)  
8. accessed April 18, 2026, [https://cs.brown.edu/people/mph/HerlihyW90/p463-herlihy.pdf](https://cs.brown.edu/people/mph/HerlihyW90/p463-herlihy.pdf)  
9. The confusing CAP and ACID wording, accessed April 18, 2026, [http://blog.thislongrun.com/2015/03/the-confusing-cap-and-acid-wording.html](http://blog.thislongrun.com/2015/03/the-confusing-cap-and-acid-wording.html)  
10. A Compositional Theory of Linearizability \- Yale FLINT Group, accessed April 18, 2026, [https://flint.cs.yale.edu/flint/publications/ctlinear-tr.pdf](https://flint.cs.yale.edu/flint/publications/ctlinear-tr.pdf)  
11. of each individual processor does not guarantee that the multi \- cs.wisc.edu, accessed April 18, 2026, [https://pages.cs.wisc.edu/\~markhill/restricted/toc79\_sc.pdf](https://pages.cs.wisc.edu/~markhill/restricted/toc79_sc.pdf)  
12. July 2019 \- DBMS Musings, accessed April 18, 2026, [http://dbmsmusings.blogspot.com/2019/07/](http://dbmsmusings.blogspot.com/2019/07/)  
13. DDIA Chapter 9\. Consistency and Consensus \- Thomas Wang, accessed April 18, 2026, [https://xgwang.me/posts/ddia-9-consistency-and-consensus/](https://xgwang.me/posts/ddia-9-consistency-and-consensus/)  
14. Consistency, Availability, and Convergence \- Cornell: Computer Science, accessed April 18, 2026, [https://www.cs.cornell.edu/lorenzo/papers/cac-tr.pdf](https://www.cs.cornell.edu/lorenzo/papers/cac-tr.pdf)  
15. Conflict-Free Replicated Data Types | Request PDF \- ResearchGate, accessed April 18, 2026, [https://www.researchgate.net/publication/221540578\_Conflict-Free\_Replicated\_Data\_Types](https://www.researchgate.net/publication/221540578_Conflict-Free_Replicated_Data_Types)  
16. Gossip and Epidemic Protocols \- Department of information engineering and computer science, accessed April 18, 2026, [http://disi.unitn.it/\~montreso/ds/papers/montresor17.pdf](http://disi.unitn.it/~montreso/ds/papers/montresor17.pdf)  
17. Conflict-Free Replicated Data Types (basic entry), accessed April 18, 2026, [https://www.lip6.fr/Marc.Shapiro/papers/2016/replicated-data-types-Encyclopedia-DB-systems-2016-authorversion.pdf](https://www.lip6.fr/Marc.Shapiro/papers/2016/replicated-data-types-Encyclopedia-DB-systems-2016-authorversion.pdf)  
18. Conflict-free replicated data type \- Wikipedia, accessed April 18, 2026, [https://en.wikipedia.org/wiki/Conflict-free\_replicated\_data\_type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)  
19. The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types \- Ian Duncan, accessed April 18, 2026, [https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary/](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary/)  
20. Assurance of Distributed Algorithms and Systems: Runtime Checking of Safety and Liveness\* \- NSF PAR, accessed April 18, 2026, [https://par.nsf.gov/servlets/purl/10231081](https://par.nsf.gov/servlets/purl/10231081)  
21. Consensus Algorithms | System Design \- AlgoMaster.io, accessed April 18, 2026, [https://algomaster.io/learn/system-design/consensus-algorithms](https://algomaster.io/learn/system-design/consensus-algorithms)  
22. Byzantine Fault-Tolerant Consensus Algorithms: A Survey \- MDPI, accessed April 18, 2026, [https://www.mdpi.com/2079-9292/12/18/3801](https://www.mdpi.com/2079-9292/12/18/3801)  
23. Half a Century of Distributed Byzantine Fault-Tolerant Consensus: Design Principles and Evolutionary Pathways \- arXiv, accessed April 18, 2026, [https://arxiv.org/html/2407.19863v3](https://arxiv.org/html/2407.19863v3)  
24. Object storage is all you need \- Sched, accessed April 18, 2026, [https://static.sched.com/hosted\_files/kccncna2024/c8/Object%20%20Storage%20is%20all%20you%20Need.pdf](https://static.sched.com/hosted_files/kccncna2024/c8/Object%20%20Storage%20is%20all%20you%20Need.pdf)  
25. AgileLog: A Forkable Shared Log for Agents on Data Streams \- arXiv, accessed April 18, 2026, [https://arxiv.org/pdf/2604.14590](https://arxiv.org/pdf/2604.14590)  
26. benchmarking – Brave New Geek, accessed April 18, 2026, [https://bravenewgeek.com/tag/benchmarking/](https://bravenewgeek.com/tag/benchmarking/)  
27. (PDF) Life beyond Distributed Transactions: an Apostate's Opinion. \- ResearchGate, accessed April 18, 2026, [https://www.researchgate.net/publication/220988217\_Life\_beyond\_Distributed\_Transactions\_an\_Apostate's\_Opinion](https://www.researchgate.net/publication/220988217_Life_beyond_Distributed_Transactions_an_Apostate's_Opinion)  
28. Things I Wish I Knew When I Started Building Reactive Systems, accessed April 18, 2026, [https://www.reactivesystems.eu/2017/01/31/things-i-wish-i-knew-when-i-started-building-reactive-systems.html](https://www.reactivesystems.eu/2017/01/31/things-i-wish-i-knew-when-i-started-building-reactive-systems.html)  
29. Coordination Avoidance in Distributed Databases \- Peter Bailis, accessed April 18, 2026, [https://www.bailis.org/papers/bailis-thesis.pdf](https://www.bailis.org/papers/bailis-thesis.pdf)  
30. \[1402.2237\] Coordination Avoidance in Database Systems (Extended Version) \- arXiv, accessed April 18, 2026, [https://arxiv.org/abs/1402.2237](https://arxiv.org/abs/1402.2237)  
31. What Distributed Computing Got Wrong: The Category Mistake That Turned Design Choices into Laws of Nature \- arXiv, accessed April 18, 2026, [https://arxiv.org/html/2602.18723v1](https://arxiv.org/html/2602.18723v1)  
32. Byzantine Fault-Tolerant State-Machine Replication from a Systems Perspective \- Department of Computer Science 4 at FAU, accessed April 18, 2026, [https://www4.cs.fau.de/Publications/2021/distler\_21\_csur.pdf](https://www4.cs.fau.de/Publications/2021/distler_21_csur.pdf)  
33. Sovereign Agents: Towards Infrastructural Sovereignty and Diffused Accountability in Decentralized AI \- arXiv, accessed April 18, 2026, [https://arxiv.org/html/2602.14951v1](https://arxiv.org/html/2602.14951v1)  
34. What Is the Byzantine Generals Problem? \- Blockchain Council, accessed April 18, 2026, [https://www.blockchain-council.org/cryptocurrency/byzantine-generals-problem/](https://www.blockchain-council.org/cryptocurrency/byzantine-generals-problem/)  
35. Revisiting Gossip Protocols: A Vision for Emergent Coordination in Agentic Multi-Agent Systems \- arXiv, accessed April 18, 2026, [https://arxiv.org/html/2508.01531v1](https://arxiv.org/html/2508.01531v1)  
36. The Seven Most Classic Patterns for Distributed Transactions | by dtm \- Medium, accessed April 18, 2026, [https://medium.com/@dongfuye/the-seven-most-classic-solutions-for-distributed-transaction-management-3f915f331e15](https://medium.com/@dongfuye/the-seven-most-classic-solutions-for-distributed-transaction-management-3f915f331e15)  
37. \[RFC\] \[DRAFT\] Anoma as the universal intent machine for Ethereum \- Architecture, accessed April 18, 2026, [https://ethresear.ch/t/rfc-draft-anoma-as-the-universal-intent-machine-for-ethereum/19109](https://ethresear.ch/t/rfc-draft-anoma-as-the-universal-intent-machine-for-ethereum/19109)  
38. A byzantine-resistant blockchain framework for secure and scalable immigration management \- PMC, accessed April 18, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC12405449/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12405449/)  
39. Self-Sovereign Agent \- arXiv, accessed April 18, 2026, [https://arxiv.org/html/2604.08551v1](https://arxiv.org/html/2604.08551v1)  
40. What Is the Byzantine Generals Problem? \- River Financial, accessed April 18, 2026, [https://river.com/learn/what-is-the-byzantine-generals-problem/](https://river.com/learn/what-is-the-byzantine-generals-problem/)  
41. Interprofessional Collaboration in Primary Healthcare: A Qualitative Study of General Practitioners' and Family and Community Nurses' Perspectives in Italy \- PMC, accessed April 18, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC12607854/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12607854/)  
42. Ziad Kassam Beyond Distributed Transactions through Exactly-once Exchanges \- Universidade do Minho, accessed April 18, 2026, [https://repositorium.uminho.pt/bitstreams/3952bdb0-13a5-429b-ba6d-92f5d16530ff/download](https://repositorium.uminho.pt/bitstreams/3952bdb0-13a5-429b-ba6d-92f5d16530ff/download)  
43. (PDF) Hierarchical-granularity holonic modelling \- ResearchGate, accessed April 18, 2026, [https://www.researchgate.net/publication/220068829\_Hierarchical-granularity\_holonic\_modelling](https://www.researchgate.net/publication/220068829_Hierarchical-granularity_holonic_modelling)  
44. Tesi di Scuola di Dottorato HIERARCHICAL-GRANULARITY HOLONIC MODELLING Marco Calabrese \- AIR Unimi, accessed April 18, 2026, [https://air.unimi.it/bitstream/2434/155499/2/phd\_unimi\_R07647.pdf](https://air.unimi.it/bitstream/2434/155499/2/phd_unimi_R07647.pdf)  
45. The Evolution of Operating System Paradigms in Distributed Computing, accessed April 18, 2026, [https://jisem-journal.com/index.php/journal/article/download/14184/6785/24836](https://jisem-journal.com/index.php/journal/article/download/14184/6785/24836)  
46. Distributed Database Consistency: Dr. Daniel Abadi & Kostja Osipov Chat \- ScyllaDB, accessed April 18, 2026, [https://www.scylladb.com/2024/02/12/distributed-database-consistency-dr-daniel-abadi-kostja-osipov-chat/](https://www.scylladb.com/2024/02/12/distributed-database-consistency-dr-daniel-abadi-kostja-osipov-chat/)  
47. Regular Sequential Serializability and Regular Sequential Consistency \- ResearchGate, accessed April 18, 2026, [https://www.researchgate.net/publication/354780208\_Regular\_Sequential\_Serializability\_and\_Regular\_Sequential\_Consistency](https://www.researchgate.net/publication/354780208_Regular_Sequential_Serializability_and_Regular_Sequential_Consistency)  
48. Introduction to Distributed Systems Course \- Backendology \- A study of backend web development by Jared Ririe, accessed April 18, 2026, [https://backendology.com/2018/09/19/distributed-systems-course-introduction/](https://backendology.com/2018/09/19/distributed-systems-course-introduction/)  
49. Consistency Tradeoffs in Modern Distributed Database System Design: CAP is Only Part of the Story \- ResearchGate, accessed April 18, 2026, [https://www.researchgate.net/publication/220476540\_Consistency\_Tradeoffs\_in\_Modern\_Distributed\_Database\_System\_Design\_CAP\_is\_Only\_Part\_of\_the\_Story](https://www.researchgate.net/publication/220476540_Consistency_Tradeoffs_in_Modern_Distributed_Database_System_Design_CAP_is_Only_Part_of_the_Story)  
50. CONSISTENCY TRADEOFFS IN MODERN DISTRIBUTED DATABASE SYSTEM DESIGN, accessed April 18, 2026, [https://cs.uwaterloo.ca/\~kmsalem/courses/cs743/F14/slides/ShuZhang.pdf](https://cs.uwaterloo.ca/~kmsalem/courses/cs743/F14/slides/ShuZhang.pdf)  
51. What Distributed Computing Got Wrong: The Category Mistake That Turned Design Choices into Laws of Nature \- arXiv, accessed April 18, 2026, [https://arxiv.org/pdf/2602.18723](https://arxiv.org/pdf/2602.18723)  
52. Lecture 1: Introduction and Course Overview, accessed April 18, 2026, [http://web.stanford.edu/class/ee374/files/lec/EE374\_2025\_Spring\_Scribe\_Lecture\_1.pdf](http://web.stanford.edu/class/ee374/files/lec/EE374_2025_Spring_Scribe_Lecture_1.pdf)  
53. Gossip Protocol Explained \- High Scalability, accessed April 18, 2026, [https://highscalability.com/gossip-protocol-explained/](https://highscalability.com/gossip-protocol-explained/)  
54. \[1805.06358\] Conflict-free Replicated Data Types (CRDTs) \- arXiv, accessed April 18, 2026, [https://arxiv.org/abs/1805.06358](https://arxiv.org/abs/1805.06358)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAXCAYAAADpwXTaAAAAVUlEQVR4XmNgGAWjgKpgL7oAJeAfugAlwAaIy9AFKQHngNgcXRAETMjEt4B4HwMa8CMTX4NiFgYKwUQg9kYXJAcoAnEnuiC54BO6ACXgMLrAKBhuAACnlhESw2iRqwAAAABJRU5ErkJggg==>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAZCAYAAAAIcL+IAAAAcklEQVR4XmNgGAUDCi4B8Qsg/gbETkB8F1UaAv4DcR0S/y9UDAV8xCIIMhldDCzwHIvYF2SBEKhgOrIgVKwSWWAHVBAZyEHFWJEFp0AFkcESJLGlMEFuJEEQcIPyYWIohjhDBUA4Gyr2D8oXgikaBTgBAJv8IeeKuEwpAAAAAElFTkSuQmCC>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAZCAYAAAAMhW+1AAAAhElEQVR4XmNgGDzgBBD/AuL/QGyGJgcH/QwQBTjBYwYCCkCSh9AFkQFIgSO6IAwkM0AUNALxcygbxbSHUEELJDEQPwCZcxQhBxe7gsxpR8jBxV6AGJJQDg+SJCNUbCKIkwblIINSqJgqiGMH5SADEP8RugAMdKDxwUARKgjC29HkRgIAAFc5JozAqrYVAAAAAElFTkSuQmCC>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAYCAYAAABTPxXiAAABVklEQVR4Xu2VvytGYRTHj0SKCcVkkaLYFJukREoGJRkMBslg9g/wD5hNzFabbAx2gzIY/AEsyI/z7TnP8x7H7X1uj/uWm+dT37rnc+5wznPve1+iTObf0scZs7IuLHFeOJ+cC9OrHVhizso6sUVuiT8BXosUHqjkEu2cfc6ebVTIOmfCyhJggUvOCOeMM/697TjkvMp1t1yX2jyBNytKgFmQBU6bXB/oGzZEdil3I64VjHKurWzCJrlZBpU7FhdA8aiFuGfjihjmTCZkjdzTxkIx7ujngeLVCm5Viu3QdsDh9xFjirOcEH+6MxQH910VuLDEuS6EIXEdxldFD+fWyiZglpUCd++LIxGaE+VOdaMiPqyIgFkGVL0jLoAvkRbzUntnF/wts5xpKyO8U+Oz30lupsVG24G/cj/4rjicFupef1NFYKAUnsjNg49Nv+llMplMpjV8AY93U1VQNBX+AAAAAElFTkSuQmCC>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAYCAYAAABqWKS5AAABQElEQVR4Xu2WsUoDQRRFr7GIRUgpSNIEtUwhWFtZ6x+IlVXaoJWQSlt/QEV/wM5CWyu1twrGSqyEFCIq8T1mQt7ehWySnSILc+BC5syw3N3JLAtEIrlpSEos552eZOBTprlCcA1XvpBo8W+WRUHLd1gG5IFFKFbhyi9JjiUXkoXEivzUJC2WU1CXXMI94MRL5Qqu/CfcgW36cegb+GMxIV+Se/+7AjqbOvixwrsbcnnRnf1gmYH2eKRxqvyJFd69k7MsSzZnyBbctbeRzR3Sb8BFO1iBW6DbMUT/LurOjGPWJDszZBfu2nvIRtf9srQcIH13be/WyYegz2IM2uGcpWW4jRYdv5ELwbQHVnvsswQ9VFv+lMahqEqOWGagZ65L7lDyYoV+kGlhza2dCMgTiwl5xqjbq2QjMRuJRCKRcfwDdedJgTCJKHUAAAAASUVORK5CYII=>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAYCAYAAABTPxXiAAABL0lEQVR4XmNgGAWjYBSMglEwjMBPdAFqA2YgrgTifHQJKoJIINZFFyQByADxAiBuBGImVCkGhnYg/gVlc0PZ/xHSVAW/0QWIBN+BeA+UzcOA5r5oqAAHkthZqBgtgAYQn0QXJABAbjmNxkdxH4jzHFkAKvYFTQwbUAZiEzJwOAMktkEeIgR2M2AGKCjpw0EIA0RBOrIgVAyUPwgBcyD2IwPHM0DssGcgDEDq/qALIoMdDJi+lIOKsaKJUwuA0vMNdEE8AOSWeeiCyGAKA6YnliCJLUWWoBL4hy5AAIDckoAuCASqMAaoJEL2hBuUDxND9yClwBGILdAFCYAXQHwPTaycAS02nRkQDs+GioFCC8QXgimiEviLLkAkgJWWIPwAiA1RZEfBKBgFo2AU0AIAAGDRRMLqHWwuAAAAAElFTkSuQmCC>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAYAAAALQIb7AAABLklEQVR4XmNgGAWDGPABsRG6ILWBGBB/AeL/QPwDTY5mAGRZM7ogLYAyA8QyTnQJWoDFDBDLCAJmIK4E4nx0CRIALL4EgHg9ELuhSkNAOxD/grK5oWyiXIgGQHpAOA3KfwzERxHSDAzRDBAFHEhiZ6FipAB5BogeWySxOKgYHIA4z5EFoGKgZEwKmMOA6cBGZLEQKCcdLg0BIDFQ/JECQHp+o4m9hYqDwQ5kDhTIQcVY0cQJAZCeCVjE4A6YAhVABkuQxJYiiTMCcQ0SHx2A9IQj8bWgYjwwAVDKQ7YMlFRBfJgYshwsSMqQxJDBRQZIcocBkFpQnKEAZ6gECGdDxf5B+UIwRUCgzwCx8CGSGDq4xQDR95cBop5isB1dgFYgEYhl0AVpBV6gC4yC4QsAu2BJyB3bb0oAAAAASUVORK5CYII=>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAYCAYAAAD5/NNeAAAEH0lEQVR4Xu2ZW8hVRRiGP9NKMRJNBBHUStMbLRUpwxtNKirxCIqI/BalCB7oQrQbEbzQiwiLNLsoJShCsFSMtO5ELyRQDLQ8oGEaWp4gSUit721m/j37XTNrzd5r2X9gP/Dyu95vZtZas2bPfDOKtGjRonMyh40EZrPRDRiseoDNCI2UzTBEtUq1TfWE5z/v/dvnC9VkNhPAh/2EzU5ET9VM1ceqRRQL9UU/1a9sKn1Uz7Bp+YeNIj4TU+m06lXVSNUW1W+qSTbGvKI6wGYDHFEtYLODeVrMu95TrVY9pVpsvYft3wHtpWuE+ue6GD8UAw+JuU8S7qEwGpi1YuLHOSDxmzdCFW1UxTdinmclByyxDj+jeptNC8ofZNPjsOpdNpk7Er6xD+K8hryjOkZeM5xXfcBmBWA2aAR0FN5zHAc8rkp45Of1H2IvsOmBaTWvvtwQUwDzZh6hRuA9x2YTvCbh9psFa8jfqtEcyAFTLp4BdfP4SrWZvA9Vf5LneEPS3g1lprEJxogJnuJAgNCNQh7zuuo9VQ8OECltFfG96qZqEAcSwP1TnmG/qj95qLeBPMcFMfFeqp2qtrpojZ/ErM8Z7oppILQOFYGEIe+lsNgiPsxeY4rA9ZL2EvUghuSkUfDyJ1S/SPFsEAPPhPvnrRt5oC6SrBDu42+y1/jIf9TC7WDpCPZn6ugJsV7idXuLib3pedOth/k3BGLIoFJ5VHVZ9YOU2GtY3Gh/iQOJoC4GSwjE1njXQ63HzJewX+oj7ZB43b8kG3PpfQzENrIZAHu4W6o9HChBmX4AsboLJRubYj1eL5+1fh0uo8BoLCJTWflUwj6Aj70Ve7HFFSBemIaKeTlkox9xoASpHwkZaF82JV73Z8nGdgU8MFHCftLDIXtrY1PMTzhUF+Xh89oDD/utGIivYDMH94vazYEmOCfhd2GwhodA3dA0Dp+3KLE+nydhX85K/AYA/hU2LbMk3OhAyfojrIfdOhbY0NqDeOiopYhHVBfFZEZFGWSM4WLuj1Q6BpKTB9m0oO6TbCq3VVu9a5wuoOx4z3PEBv1/IIDpgz8UGvqdPCbWKHzMx8AlEa4sXjZErK1U8PxHxfwqcM9GcdPQXA6ISSz8M0wG9daxKWY/hQHkQIb7rXft86Nkf3V1fCe1jsQUgr9+ZhYD5SawKSYVdqcY+6yHh8X1W66Qx4tS/iP5YAq8pnqMAwXMkFo/uDO3r+tKhNku5lAgxF6ptZn3PwWIN5td5oJzrkNsNsFJ1XI2KyBloFUBkokygwzTdJn6hVTReBVtdDSXJJsspYKZ7H02qwTHIV+y2QA4ynmZzS4IkopmBhs24rGssVJwnDKWzQSmqj5nswvzuJi9USP8Lx/IsZSNBJax0Q0YJelbAaTt2Ja0aNHivvEvkmgDX7f5TisAAAAASUVORK5CYII=>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAYCAYAAABeIWWlAAABqklEQVR4Xu2WPSwEURSFbyjQiVYjUSF+Q6eiIiIStUalRKLRSCQ6DYlKVGjUfnohUWg0+g2REFoK8XNP7rx47+7bebOzs4vNfMnJ7J5zJztn580PUU5O3bLImtHmX6Kf9cL6Yl2xWt24JO+sQdYr61BltWKf1aVNwwJr2/p+QFJyyPJ8jJHMdUbbaTeuKhesT5Lfhbrd+AczEPI0DxSeCXGijTLBCYgtd0/FB5mknFnClVD1cppVkh0mdRAxwZoimdkjmetxJpJT03K462F4SwcWuDuuk8ytsJZZI85EcmpWbpN1xPpgjatMg1KhZZuErMolXjntJDsc68DilsorN1xClx4PapDdgphyvTqII3RDQfaozRjwmPDp2uNBTbJbEFOuTwcGLMNd5Zlyo8o3INvQZgqyWpYDOgCz5D9LxmtUPoCHrEP5aciqHN6SvCC0lwFOMbxTy7OZo+I/Iy2VlsNjCMeCR5OXNpJXGeiZZHjHmXA5p98v90RyzeMF5C7awivYQ2lAsTNtpiRtuUyZJynVHG1b3Ph/c8N6I7ne8LnuWGMtaTMnJycx3/uPcNbowOOEAAAAAElFTkSuQmCC>

[image10]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAXCAYAAAA/ZK6/AAAAoElEQVR4XmNgGHJAEoinAjEbugQ2YAHE/4A4Boj/o8lhBSBFPVCaaA2a6IK4QDgDkaYqA7EXEJ9ggGjwBWIPFBVowB+IixggikEeBrELUFTgACANa9AF8QGQBh90QVwgjYFID8MAzMNEA5DiN+iC+ABIQzO6IC7AxADRwIEugQ4cgdgPiJMYiHQ/SNEHIL4HxKVoclgBSMMuIL6OLjEEAABbmSIQUKWkPQAAAABJRU5ErkJggg==>
