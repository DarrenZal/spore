---
doc_id: spore.research.external.ruddick-2026-commitment-pool
doc_kind: research
research_subkind: external_paper
status: deprecated
source_pdf: ~/Downloads/ssrn-6606438.pdf
source_ssrn: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6606438
author: William O. Ruddick
affiliation: Grassroots Economics Foundation, Kilifi, Kenya
date: 2026-04
pages: 44
archived: 2026-04-23
---

# Commitment-pool route graphs for finance and mutual aid

**William O. Ruddick** — Grassroots Economics Foundation — April 2026

## Archivist note

Archived here as the formal backbone for **P2 Commitment Pooling** in the
IndigenomicsAI plan (`~/.claude/plans/i-want-to-do-fluffy-papert.md`). The
paper's CVLE × RVLFHG × commitment-tuple apparatus is the formal substrate
for the survey-ingest / 25-themes / 350-legal-cases / RAP mappings explored
in the X3 bridge note
(`IndigenomicsAI/docs/methodology/ruddick-commitment-pool-bridge.md`).

Converted via `pdftotext -layout`. Body text and reference list came through
cleanly; figures, tables, and multi-column inline math are imperfect — in
particular symbols inside formal definitions may be garbled, and table
layout is preserved as whitespace rather than as markdown tables. Consult
the source PDF when working with exact formal statements.

---

   Commitment-pool route graphs for finance and
                  mutual aid
                           William O. Ruddick
                    Grassroots Economics Foundation
                              Kilifi, Kenya
                          will@grassecon.org

                                   April 2026


                                    Abstract
         This paper develops a bounded operationalization framework for
     selected financial and mutual-aid institutions. It models Commitment
     Pooling Protocol (CPP) as a four-function operational structure: cura-
     tion of admissible claims, valuation of those claims, limitation of flows,
     and exchange through fee and settlement logic.
         The paper asks when an institutional mechanism can be realized
     through stable stewarded implementation interfaces without claim-
     ing legal, cultural, welfare, or historical equivalence. It formalizes
     a source model of finite states, actions, guarded transitions, prior-
     ity or loss ordering, and settlement; a target model of commitment
     pools and routes; a realization mapping; and a bounded observational-
     equivalence criterion.
         The main result is a constructive direct-realization theorem un-
     der finite-state, guard-specification, governance, routing, primitive-
     completeness, and settlement-compilability assumptions, with a
     bounded repair-extended proposition for modeled endogenous re-
     pair. Worked examples include deposits, repo-style secured lending,
     central counterparty clearing, rotating labor, rotating savings, grain
     banks, and reserve-support repair. A court-supervised restructuring
     case marks a direct-realization boundary.

Keywords: payment systems, clearing and settlement, mutual credit, for-
mal modeling, community finance




                                         1
1    Introduction
Financial institutions are often treated as distinct species: deposits, loans,
repos, insurers, clearing houses, and funds. Mutual-aid institutions are
similarly treated as a separate family: rotating savings associations, labor-
sharing groups, grain banks, and burial societies. This paper asks a narrow
technical question: can selected institutions from both families be repre-
sented in one operational basis without erasing legal and cultural differ-
ences?
    The question is not whether all institutions are “the same.” It is whether
their core operational mechanics can be encoded in a shared model with
explicit state, transition guards, priority rules, and settlement operators.
    The term commitment pool is used here in a specific operational sense.
At the protocol level, CPP has four core functions: curation, valuation,
limitation, and exchange. At the implementation level, these functions are
exposed through six interfaces: Registry, Value Index, Limiter, Fee Policy,
Vault/Settlement, and Governance. Registry implements curation; Value
Index implements valuation; Limiter implements limitation; Fee Policy and
Vault/Settlement implement exchange. In the formal model below, Gover-
nance appears as an implementation interface because authorized parameter
changes must be represented. Conceptually, however, governance belongs to
the stewardship environment together with authentication, memory, evi-
dence, and dispute systems.
    A pool is therefore a governed ledger or contract system that can list
admissible claims, assign values, impose limits and fees, hold commitments
or reserves, and execute settlement.
    A pool need not be a large collective institution. At the smallest scale,
an individual, household, or enterprise may operate a personal or organiza-
tional pool, provided that it exposes the relevant interfaces for admissibility,
valuation, limits, exchange, settlement, and governance. A single promise by
an individual is therefore a commitment; it becomes pool-like only when em-
bedded in an explicit rule-governed interface for holding, accepting, routing,
or settling commitments.
    A route graph links pools when claims or settlement paths can move
across more than one pool subject to each pool’s local rules. A steward is any
actor, committee, multisignature group, governance process, or rule system
authorized to update pool parameters such as admissibility, valuation, limits,
fees, pause states, remedies, or routing permissions.
    This perspective is related to layered-claims and balance-sheet ap-
proaches in monetary economics (Ingham 2004; Minsky 1986; Mehrling

                                       2
2011), but adds explicit operational interfaces for a four-function com-
mitment architecture. The framework is also informed by field-oriented
and software-oriented work on community currencies, mutual credit, and
commitment pooling (Ruddick 2023; Ruddick 2026; Grassroots Economics
2026a; Grassroots Economics 2026b; Grassroots Economics 2026c; Grass-
roots Economics 2026d; Cosmo-Local Credit 2026). Those implementations
motivate the interface decomposition, but they are not evidence for the
theorem. The formal claim below stands or fails on the stated assumptions,
mappings, and observational-equivalence criterion.
     Why commitment pools rather than a generic ledger or balance-sheet
graph? The differentiator is not data storage; it is operationalization
through policy decomposition around four questions: what may enter, how
it is valued, how much may flow, and how exchange settles. This separation
makes it possible to ask whether a specified institution’s states, actions,
guards, priorities, settlement effects, and repair paths can be realized
through fixed interface types without adding institution-specific primitives.
     The contribution is therefore a bounded operationalization test, not a
catalog of institutions that resemble commitment pools and not a claim
that a ledger can encode arbitrary social arrangements. Institutions that
appear legally or culturally distinct can be compared by asking which inter-
face margins differ, which transitions fail, which repair path is invoked, and
which observables are preserved. This creates a common representation for
studying institutional interoperability, bounded liquidity access, settlement
failure, and structured repair without asserting legal, cultural, welfare, or
ontological equivalence.
     For economics, the value of the framework is comparative and diagnostic.
It does not replace models of incentives, welfare, or equilibrium. Rather, it
provides a common operational substrate on which such questions can be
posed more precisely. Once an institution is expressed through the pool-
route interfaces, one can ask which margin changes across designs or over
time: admissibility, valuation, limits, fees, custody, routing, governance,
settlement, or repair. This makes institutional comparison less dependent
on labels and more dependent on explicit mechanism structure.

Contributions. This paper contributes four items.

1. A formalization of institutional mechanisms as finite guarded transition
   systems over claims, reserves, collateral, priorities, settlement operators,
   and governance states.



                                      3
2. A commitment-pool route target model that distinguishes four CPP
   functions (curation, valuation, limitation, and exchange) from their
   implementation interfaces (Registry, Value Index, Limiter, Fee Policy,
   Vault/Settlement, and Governance), while allowing stewarded parameter
   updates over time.

3. A constructive direct-realization theorem with explicit lemmas and
   preservation conditions, plus a bounded repair-extended proposition for
   endogenous repair.

4. A reusable operational realization test for deciding whether a proposed
   mechanism is directly realizable, repair-extended, externally anchored,
   or outside the framework’s present scope.

Roadmap. Section 2 positions related work. Section 3 defines source and
target models, mapping, equivalence, repair classes, and failure boundaries.
Section 4 proves direct realizability. Sections 5 and 6 provide worked con-
structions. Section 7 discusses limits, repair modes, and a negative case
for direct realization. Section 8 connects theorem conditions to software
verification obligations. Section 9 applies the operational realization test.
Section 10 concludes. Appendix A gives a compact reusable test procedure,
and Appendix B gives a fully enumerated memory-based ROLA witness.


2     Related Work and Positioning
2.1   Money and layered claims
Monetary hierarchy and layered-claim views emphasize that modern money
is structured by issuer liabilities, settlement hierarchy, and convertibility
constraints (Ingham 2004; Minsky 1986; Mehrling 2011). This literature
explains why deposits, reserves, and collateralized liabilities are relational
claims, but usually does not provide a single implementation schema span-
ning formal finance and mutual-aid institutions.

2.2   Institutional and commons governance
Commons research shows that governance quality, monitoring, and sanction-
ing determine performance of shared resource systems (Ostrom 1990). An-
thropological and historical treatments of reciprocity and exchange (Mauss




                                      4
2002; Polanyi 1944; Graeber 2011) clarify that social legitimacy and obli-
gation cannot be reduced to prices alone. The framework treats these as
governance and state constraints, not as exogenous commentary.

2.3   Market infrastructure and settlement
Market-infrastructure and funding-liquidity literature, including work on
central counterparties (CCPs), identifies margining, netting, and settlement-
waterfall design as core drivers of systemic outcomes (Duffie and Zhu 2011;
Brunnermeier and Pedersen 2009; Committee on Payment and Settlement
Systems and Technical Committee of IOSCO 2012). The present model
contributes a uniform operational mapping language across these mecha-
nisms. Related work on obligation-clearing and mutual credit also shows
that liquidity-saving and multilateral clearing can be materially improved
when obligation networks are combined with a complementary mutual-credit
layer (Fleischman, Dini, and Littera 2020). At the level of formal method,
the paper is also adjacent to state-transition and specification traditions
that emphasize explicit system state, guarded actions, and observational
reasoning (Lamport 2002; Clarke, Grumberg, and Peled 1999). The paper
is also adjacent to Promise Theory, which models coordination among au-
tonomous agents through promises rather than through externally imposed
commands or obligations (Burgess and Fagernes 2006; Bergstra and Burgess
2008; Bergstra and Burgess 2014). In the present paper, a commitment is
used in this promise-theoretic sense: an issuer makes a declared promise
or attestation whose operational consequences depend on how pools curate,
value, limit, hold, route, and govern it. The paper does not rely on Promise
Theory’s full formal apparatus, but uses its agent-centered interpretation of
promises to clarify that commitments are not assumed to be legally coercive
obligations.

2.4   Contracts, mechanism design, and implementation
The paper is also related to contract theory and mechanism design, but
it asks a different question. Contract theory studies enforceability, incom-
pleteness, allocation of control rights, and optimal contracting under infor-
mational and enforcement constraints. Mechanism design studies whether
desired social-choice rules can be implemented under strategic behavior. The
present paper does not solve an optimal-contract, incentive-compatibility,
or equilibrium-selection problem. It asks whether the operational state
transitions of selected institutional mechanisms can be realized through


                                     5
commitment-pool route interface types while preserving bounded external
observables.
    Incentive compatibility, welfare comparison, bargaining power, and equi-
librium selection are therefore outside the theorem unless they are encoded
directly into the source state machine, guard predicates, strategy space, and
observable criteria. This distinction is important: a mechanism may be
operationally realizable without being incentive-compatible, fair, efficient,
legally enforceable, or normatively desirable.

2.5   Complementary currencies and mutual-aid institutions
Community-currency studies document practical trade-offs in liquidity,
inclusion, and governance (Seyfang and Longhurst 2013; Lietaer et al.
2012). Classic and modern work on rotating savings and credit associa-
tions (ROSCAs) and related mutual-aid forms examines their comparative
structure, economic role, and household allocation functions (Ardener 1964;
Besley, Coate, and Loury 1993; Anderson and Baland 2002). Related labor-
sharing institutions also deserve explicit notice. Rotating labor associations
(ROLAs) and closely related reciprocal labor groups have been documented
as structured mutual-help arrangements in which participants coordinate
labor contributions across households or plots according to pre-established
reciprocity or rotation rules (Wang 2019; Messerschmidt 1981). Prior
work typically covers subsets (currency design, governance, or exchange
rules) rather than a unified transition-system representation with explicit
settlement and priority operators. Within the emerging Commitment
Pooling literature itself, field-oriented and stewardship-oriented accounts
already describe the protocol as both a practical coordination system and
a commons-based infrastructure for reciprocity and mutual support (Rud-
dick 2023; Ruddick 2026). The present paper differs by asking a narrower
formal question about realization, equivalence, and bounded theorem-level
representability.

Interpretive scope note. Where kinship, ritual obligation, honor, gen-
dered labor roles, or informal sanction matter causally, they are represented
here only insofar as they alter guards, permissions, priorities, or remedies at
the chosen modeling level. A successful realization therefore preserves oper-
ational sequence at that level of abstraction; it does not preserve full social
meaning, legitimacy, or lived phenomenology. The choice of abstraction level
is therefore substantive rather than neutral. If a kinship rule, ritual duty,
gendered labor norm, elder decision, or informal sanction changes feasible

                                      6
actions, priorities, settlement effects, or expected remedies, then omitting it
from the modeled state, transition, priority, or settlement description is a
modeling loss rather than a successful realization.


3     Formal Framework
3.1      Source model for institutional mechanisms
The source-model choice is deliberately state-machine based, in the spirit
of formal specification frameworks that treat system behavior as guarded
transitions over explicit state (Lamport 2002; Clarke, Grumberg, and Peled
1999).

Modeling note. The source model is stated in ordinary state-machine
language: state, action, guarded transition, priority or loss ordering, and
settlement operator. It does not use pool-specific interface terms such as reg-
istry, valuation policy, limiter, fee policy, custody, or governance as primitive
terms. This separation is important because the realization result should
not be obtained by defining the source institution in the same language as
the target pool graph. Other institutional descriptions are in scope only
insofar as they can be represented at the chosen granularity through finite
states, explicit actions, guarded transitions, priority rules, and settlement
effects.
    The state representation need not be a written or digital ledger. In oral
or memory-based institutions, recognized group memory, witness testimony,
and steward attestation may constitute relevant state and evidence variables,
provided that membership, contribution, obligation, dispute, and remedy
effects are observable at the chosen level of abstraction.

Definition 1 (Institutional state machine). An institution is a tuple

                              I = (S, A, T, Π, Σ),

where:

• S is a finite state space of claim, reserve, collateral, and governance
  states.

• A is a finite action set available to participants and stewards.

• T ⊆ S × A × Γ × S is a guarded transition relation, with guard set Γ.


                                       7
• Π is a priority ordering over claim classes in stress/default states.

• Σ is a settlement operator that maps executable obligations and invento-
  ries to realized settlement outputs.

Settlement-layer note. The operator Σ is institution-relative. For a re-
tail wallet, Σ may denote redemption into a designated settlement asset; for a
CCP, novation plus default-waterfall execution; for a grain bank, inventory
release subject to emergency-floor rules. The theorem therefore preserves
settlement outputs relative to the source institution’s own settlement layer
and legal design, not a universal notion of finality across all institutions.
For a past-oriented certification, Σ may denote pool acceptance, exchange,
or settlement into other commitments rather than redemption against the
original issuer.
Definition 2 (State trajectory). For horizon H ∈ N and participant strategy
profile σ, a trajectory is

                        τH (σ) = (s0 , a0 , s1 , . . . , aH−1 , sH ),

with (st , at , γt , st+1 ) ∈ T for admissible guards γt .

3.2    Target model (commitment-pool route graph)
Definition 3 (Commitment). A commitment is a pool-admissible promise
or attestation:
                    C = (i, j, K, b, q, χ, t, e, r, m),
where i is the autonomous issuer, promiser, or attestor, j is the promisee,
recipient, holder, awardee, beneficiary, or certified subject, depending on the
temporal orientation of the commitment, K is the scope or publication set of
agents for whom the commitment is made visible, b is the promise body, q is
quantity or contingent formula, χ ∈ {future, past} is temporal orientation, t
specifies time conditions, event time, or validity window, e specifies evidence
requirements, r is the remedy, fallback, revocation, or correction rule, and
m is metadata.

Temporal-orientation note. If χ = future, the commitment is promis-
sory: it concerns a future behavior, service, redemption, delivery, or out-
come. If χ = past, the commitment is a certification: an issuer or attestor
declares that a past event, state, contribution, delivery, or performance oc-
curred. A certification is not treated as an objective fact by assumption; it

                                             8
is a promise-like attestation whose admissibility depends on issuer standing,
recipient or holder status, evidence, scope, valuation, limits, and governance
rules.
    A past-oriented certification need not be redeemable against its issuer
in the way a voucher or future-oriented redemption promise may be. Nev-
ertheless, it may still be tokenized, held, transferred, pooled, and accepted
by a pool in exchange for other commitments or resources held by that
pool, provided the pool’s curation, valuation, limitation, evidence, and set-
tlement rules permit such acceptance. In this sense, both future-oriented
promises and past-oriented certifications can function as pool-admissible
commitments, but their settlement semantics may differ.

Definition 4 (Commitment pool). A pool implementation is

                            P = (R, V, L, F, H, G),

where R is the Registry, V is the Value Index, L is the Limiter, F is Fee
Policy, H is Vault/Settlement custody state, and G is Governance permis-
sions.

    The tuple implements the four CPP functions: R implements curation,
V valuation, L limitation, and (F, H) exchange. Governance G authorizes
parameter changes and is treated as part of the stewardship environment
rather than as a fifth protocol function. Registry entries, values, limits, fees,
custody states, routing permissions, pause states, and governance permis-
sions may change through authorized steward transitions during ordinary
operation or repair.
    Fee policy F may include local swap fees, route-hop fees, support fees,
clearing fees, or interchange-like fee splits across multiple pools. These fees
are evaluated as part of exchange feasibility and settlement output.

Definition 5 (Route graph). A route graph is GP = (P, E), where P is a
set of pools and directed edges e = (Pu , Pv ) are admissible only if overlap
and guard constraints are satisfied.

    At network scale, discovery registries and routing services are auxiliary
coordination functions rather than separate claim primitives. They pub-
lish machine-readable pool metadata needed for interoperation, including
accepted commitment classes, valuation rules, limit policies, fee schedules,
pause states, and, where disclosed, recent exchange and remedy logs. When
these interfaces are transparently broadcast on a shared ledger or compara-
ble publication layer, admissible routes become discoverable and agents can

                                       9
also evaluate pool standing, support capacity, and clearing opportunities
across larger pool networks. These functions are not only conceptual: exist-
ing open-source stacks already separate pool logic, registries, valuation quot-
ers, limiters, fee controls, and indexing or discovery services in ways broadly
consistent with the present target-model decomposition (Grassroots Eco-
nomics 2026a; Grassroots Economics 2026b; Grassroots Economics 2026c;
Cosmo-Local Credit 2026).

3.3    Mapping and equivalence
Definition 6 (Realization mapping). Let SP denote the global state space
of a target commitment-pool route graph. A mapping

                                   Φ : I 7→ GP

realizes institution I if there exist:

   1. a state embedding αΦ : S → SP from source states into target route-
      graph states;
   2. an observation projection ωΦ : SP → O into externally relevant ob-
      servables;
   3. a primitive translation schema ψ such that each enabled source transi-
      tion in T , after factorization into primitives from U , is implemented
      by one local pool transition or a finite admissible route; and
   4. preservation of source settlement and priority observables, so that tar-
      get execution yields the same projected settlement, residual-obligation,
      and priority/loss outcomes as Σ and Π at macro-step boundaries.

    The embedding αΦ is not required to preserve internal implementation
structure. It is required only to preserve the observable institutional state
selected by the model.
Definition 7 (Primitive translation schema). Let

U = {issue, transfer, collateralize, guarantee-invoke, settle, default/remedy}.

A translation schema ψ assigns each u ∈ U a target implementation template

                    ψ(u) = (∆R, ∆V, ∆L, ∆F, ∆H, ∆G, ρ),

where ρ is either empty or a finite admissible route.


                                         10
                 Table 1: Primitive translation templates.

Primitive           Target interfaces       Required guards and outputs
                    affected
issue               R, H, G                 Issuer or attestor permission; reg-
                                            istry admissibility; creation or pub-
                                            lication of claim or certification; re-
                                            ceipt emitted.
transfer            R, V, L, F, H           Sender holding sufficiency; recipi-
                                            ent or pool admissibility; value and
                                            fee calculation; limit check; custody
                                            update; receipt emitted.
collateralize       R, V, L, H, G           Collateral class listed; valuation
                                            rule valid; pledge permission; expo-
                                            sure or haircut constraint; pledged
                                            custody state updated.
guarantee-          R, V, L, H, G           Guarantee listed; trigger condition
invoke                                      satisfied; guarantor or reserve ca-
                                            pacity available; payout or support
                                            obligation recorded.
settle              R, V, L, F, H, G        Settlement guard satisfied; inven-
                                            tory or reserve available; fees ap-
                                            plied; claim extinguished, fulfilled,
                                            deferred, or left outstanding accord-
                                            ing to Σ; receipt emitted.
default/remedy      R, V, L, F, H, G        Default or breach trigger satisfied;
                                            priority rule Π applied; remedy,
                                            pause, liquidation, relimit, support,
                                            or terminal state recorded.




                                       11
Four-function interface restriction. A realization is admissible only
if every target transition updates the fixed implementation interfaces
(R, V, L, F, H, G) through the primitive templates in ψ. Equivalently, target
transitions must operate by curation, valuation, limitation, or exchange as
implemented by those interfaces. No institution-specific primitive may be
added after observing the source mechanism. Institution-specific variation
may enter only through parameters, guard predicates, valuation rules,
limits, fee rules, custody states, route predicates, governance permissions,
evidence conditions, and settlement rules already expressible through those
interfaces.
    This restriction prevents the result from becoming an unrestricted en-
coding theorem. Interface parameters may change over time, but the oper-
ational language is not redesigned for each case.
    In this primitive basis, issue includes both the issuance of future-oriented
commitments and the publication or award of past-oriented certifications.
Pool acceptance of a certification in exchange for other commitments is
represented through the existing transfer and settle primitives, subject to
the pool’s registry, valuation, limitation, custody, and governance rules.
    Let SH denote the set of admissible participant and steward strategy
profiles over horizon H.

Definition 8 (Stutter-insensitive observational equivalence over horizon
H). Given strategy space SH , two implementations X and Y are equiva-
lent, denoted
                                X ≡H Y,
if for every σ ∈ SH , the projected traces over externally observable vari-
ables are equal after quotienting out internal stutter steps and route-internal
micro-transitions:
                        Obs∗ (τHX
                                  (σ)) = Obs∗ (τHY
                                                   (σ)).
Here Obs∗ records externally visible settlements, residual obligations, and
realized priority/loss outcomes at macro-step boundaries. In a realized tar-
get system, Obs∗ is induced by the projection ωΦ from Definition 6 after
quotienting out internal stutter steps and route-internal micro-transitions.

     External observables exclude internal governance deliberation unless de-
liberation changes executable permissions, and exclude cultural meaning un-
less it changes observable actions, guards, or settlement outputs. A source
strategy profile σ is compared to its target realization through the natural
lifting induced by ψ, where each source macro-action is implemented by its


                                      12
corresponding target local transition or finite route execution and internal
micro-steps are hidden by Obs∗ .

Why this equivalence notion? The intended claim is preservation of
institutionally relevant outcomes at macro-step boundaries, not identity of
internal microstructure. Inter-pool routing, internal rebalancing, and stew-
arded micro-steps may differ across realizations while leaving externally vis-
ible settlements, residual obligations, and realized priority/loss outcomes
unchanged. For that reason the paper uses bounded stutter-insensitive ob-
servational equivalence rather than strong bisimulation. This choice weakens
the equivalence notion and should be read accordingly: the theorem does
not preserve internal timing, deliberation paths, computational complexity,
welfare, or strategic incentives except where these are already encoded in
the observable state.

Definition 9 (Primitive completeness of the source model). A source insti-
tution is primitive-complete with respect to U if every enabled transition in
T can be factorized into a finite sequence of parameterized primitives drawn
from U .

Non-vacuity note. The direct-realization theorem in Section 4 is not an
unrestricted graph-encoding result. The target language is specified ex ante
by the primitive basis U and the pool interface types (R, V, L, F, H, G); the
proof therefore does not permit institution-specific target primitives to be in-
troduced ad hoc for each case. Interface parameters may change through au-
thorized state transitions, but the interface language itself is not redesigned
for each case. The substantive burden is that enabled source transitions
must factorize into this fixed basis and that settlement and priority ob-
servables must be preserved. Institutions whose decisive mechanics require
non-factorizable discretion, non-compilable settlement, or extra-procedural
override fall outside direct realization.

Definition 10 (Repair transition class). Let

           U r = {reroute, defer, renegotiate, revalue, relimit,
                   recurate, guarantor-invoke, insurance-invoke,
                   support-request, adjudicate, override, re-enter}.

A repair transition is a state transition invoked when ordinary execution can-
not proceed because of breach, dispute, blocked routing, reserve insufficiency,


                                      13
valuation contestation, governance-triggered exception, or trust breakdown.
A repair transition may update route feasibility, time conditions, valuation
state, limit state, curation state, remedy state, guarantor or insurance obli-
gations, reserve-support state, or governance permissions.

    Definition 10a (Repair-schema completeness). A source institution is
repair-schema complete with respect to U ∪ U r if every enabled breach,
dispute, exception, or remedy trajectory relevant to the modeled horizon
can be factorized into a finite sequence of parameterized operations drawn
from U ∪ U r , together with explicit triggers, state updates, and re-entry
conditions.
    Repair may therefore act on the same four functions used in ordinary
execution: re-curation in R, re-valuation in V , relimiting in L, and exchange
repair through fee or support reallocation in F and custody, reserve, guaran-
tor, or insurance movements in H. Steward-authorized override, deferment,
or re-entry is recorded in G.

Definition 11 (Repair-aware realization classes). An institution is directly
realizable if it admits a realization under the direct-realization assumptions
stated in Section 4. It is repair-extended if its routine mechanics are directly
realizable but some decisive breach, dispute, exception, or remedy trajectories
require explicit repair transitions not yet covered by the direct-realization
theorem in Section 4. It is externally anchored repair if decisive repair
authority is exercised by courts, sovereigns, or political institutions external
to the present pool-route formalization, even though their interventions may
still have observable effects on claim state.

    The direct-realization theorem in Section 4 proves only direct real-
ization. The repair-extended and externally anchored classes introduced
here are used below to classify harder cases without treating them as
non-institutional or permanently beyond representation.
    The diagram separates construction, projection, and classification steps
so that the direct theorem and the broader repair-aware interpretation are
not confused. Figure 1 summarizes the source-to-target mapping pipeline
used in the theorem and classification logic.

Toy equivalence example. Consider (a) a bank-like deposit ledger and
(b) a fully reserved e-money pool. If both have identical admissible actions
(deposit, transfer, redeem), identical guard conditions (inventory and policy
checks), and identical settlement outputs over horizon H, they are equivalent
under ≡H even if their legal wrappers differ.

                                      14
Figure 1: Source-to-target mapping pipeline. Direct realization follows the
upper branch from source state machine to primitive factorization, primi-
tive translation, and target route-graph execution. Repair branches support
classification unless the relevant repair transitions are explicitly modeled.


3.4   Operational state variables
For reproducibility, we track:

1. Outstanding or registered commitments by class, including past-oriented
   certifications.

2. Custody balances and reserve balances.

3. Pledged collateral and margin utilization.

4. Limit utilization and breach flags.

5. Pending remedies/default status.

6. Governance parameter state and change log.

7. Published discovery metadata, route-fee schedules, pause states, and,
   where disclosed, fulfillment or breach history relevant to routing and
   pool standing.



                                      15
3.5   Assumptions and failure boundaries
Assumption 1 (Finite-state adequacy). The relevant institutional mechan-
ics can be represented at finite state granularity.
    This fails when obligations depend on unbounded discretionary narra-
tives not reducible to finite guards.
Assumption 2 (Observable policy and repair interfaces). Admissibility,
valuation, limit, remedy, and repair policies can be encoded as explicit guard
predicates or explicitly specified repair operations.
   This fails when key decisions require discretionary judgment that cannot
be encoded as explicit predicates or as observable repair operations with
specified triggers, state effects, and re-entry consequences.
Assumption 3 (Route composability). Inter-pool transfers compose over
finite admissible paths.
    This fails under hard legal partitions or forbidden interoperability bound-
aries.
Assumption 4 (Governance formalization). Governance and emergency
powers can be represented as state transition permissions.
    This fails when critical interventions are extra-procedural and not speci-
fiable ex ante.
Assumption 5 (Settlement compilability). For each in-scope claim class,
the source settlement operator Σ can be compiled into target guard, custody,
and payout logic without loss of relevant external observables.
    This fails when settlement depends on open-ended adjudication, non-
codifiable evidentiary judgment, or extra-procedural intervention during ex-
ecution.
    Among these assumptions, Assumption 2 is usually the most restric-
tive. Many institutions fail direct representability not because claims and
reserves cannot be modeled, but because acceptance, reprioritization, re-
valuation, limit adjustment, curation change, or remedy decisions depend
on discretionary judgment that cannot yet be stabilized as explicit pred-
icates or repair operations. Cases that violate direct Assumption 2 need
not be dismissed as non-institutional. They may still be candidates for
repair-extended or externally anchored repair representation if their repair
processes have observable triggers, state effects, support paths, and re-entry
consequences, even when those processes are not yet covered by the direct
theorem.

                                      16
Operational falsification criterion. A proposed in-scope mechanism
falsifies the direct-realization claim if at least one enabled source transition
cannot be factorized into the fixed primitive basis U , if a required state
variable cannot be represented through (R, V, L, F, H, G), if the settlement
operator cannot be operationalized through custody, payout, route, and
receipt logic, if priority or loss observables differ after projection, or if a
decisive governance or repair step depends on discretion that cannot be
represented as an explicit state transition over the modeled horizon.
    Thus the framework is not validated by naming familiar institutions. It
is tested by applying the realization procedure to a specified mechanism and
checking whether the mechanism passes or fails the stated conditions.


4    Realization Theorem
Operationalization procedure. For an in-scope institution I                   =
(S, A, T, Π, Σ), direct realization proceeds as follows.

1. Enumerate the relevant source state variables, actions, guards, priority
   rules, and settlement effects at the chosen level of abstraction.

2. Factor each enabled source transition in T into a finite sequence of prim-
   itives in U .

3. Instantiate the primitive translation schema ψ(u) for each primitive u ∈
   U.

4. Verify that each instantiated target transition updates only the stable
   interface types (R, V, L, F, H, G) and their authorized state variables.

5. Verify that route execution, where used, passes local registry, valuation,
   limit, fee, custody, inventory, and governance checks at every hop.

6. Compare the projected source and target trajectories over horizon H
   under Obs∗ .

7. Classify any failed factorization, non-operationalizable settlement rule,
   unpreserved priority rule, or non-explicit discretionary repair step as a
   boundary case rather than as direct realization.

This procedure is constructive. It gives a method for building a realization
when the conditions hold and a method for locating the failure point when
they do not.


                                      17
Lemma 1 (Primitive realization). Every primitive source transition in U
appearing in a factorization of T (issuance, transfer, collateralization, guar-
antee invocation, settlement, default/remedy) can be implemented by either
a local pool transition or a finite guarded inter-pool route.

Proof. For each primitive class u ∈ U , define ψ(u) explicitly. Issuance up-
dates registry admissibility and holdings state. Transfer updates holdings
locally or across a feasible finite route. Collateralization updates pledged-
holdings and limitation state. Guarantee invocation updates remedy
state and priority constraints. Settlement updates executable obligations
through custody state and Σ-consistent output rules. Default/remedy
updates governance-authorized fallback transitions. Table 1 specifies the
target implementation form for each primitive in U . Each template updates
only the stable interface types (R, V, L, F, H, G) and requires explicit guards
and receipt-producing state updates. Therefore, for every primitive source
transition admitted by a valid factorization, there exists a corresponding
local pool transition or finite guarded route.

Lemma 2 (Compositional closure). If transitions u and v are realizable un-
der Φ, then any finite composition u; v; . . . is realizable by finite composition
of corresponding pool/route transitions.

Proof. Realizable transitions are represented as guarded relations over finite
states. For any valid source factorization, the post-state of each primitive
transition is the pre-state for the next primitive transition in the sequence.
The corresponding target transitions are instantiated by ψ with guards eval-
uated against the target state induced by the source embedding and prior
target updates. Therefore, whenever the next source primitive is enabled,
the corresponding target primitive is enabled by the translated guard con-
ditions. Guarded relation composition is closed under finite composition,
and route concatenation is finite by Assumption 3. Therefore finite source
sequences remain realizable.

Lemma 3 (Priority preservation). If source priority ordering Π is encoded
as explicit waterfall constraints in target guard and settlement logic, then
realized loss-allocation order is preserved.

Proof. Waterfall constraints enforce admissible payout order as hard transi-
tion guards. Any violating transition is infeasible. Therefore every feasible
settlement path respects Π.



                                       18
Theorem 1 (Constructive realization under assumptions). Under Assump-
tions 1–5 and primitive completeness with respect to U , any institution
I = (S, A, T, Π, Σ) whose mechanics are fully expressed by those compo-
nents admits a finite commitment-pool route realization Φ(I) such that for
any bounded horizon H, observables are preserved: Φ(I) ≡H I.

Proof. Induct on the length k of the primitive realization sequence obtained
by factorizing enabled source transitions into elements of U .
    Base case k = 1: realizable by Lemma 1.
    Inductive step: assume realizability for primitive sequences of length k.
For a sequence of length k + 1, compose one additional primitive transition.
By Lemma 2, composition remains realizable. Any additional route-internal
micro-steps introduced by composition are hidden by the Obs∗ projection
and therefore do not alter macro-step observables.
    Priority/loss ordering is preserved by Lemma 3. Settlement outputs are
preserved because the realization mapping requires Σ-consistent guard, cus-
tody, payout, and receipt logic for each in-scope claim class. Assumption
5 ensures that this compilation does not lose the relevant external observ-
ables. Therefore, after applying the observation projection in Definition 6
and quotienting out route-internal micro-steps, trajectory observables are
preserved for all bounded horizons.

Scope note. Theorem 1 covers direct realization under explicitly formal-
ized stewardship permissions. It does not yet prove realization for cases
in which stewardship operates through open-ended adjudication, negoti-
ated restructuring, contested re-valuation, limit reconstitution, emergency
re-curation, insurance or guarantor support under contested conditions,
network-level rerouting, or externally anchored override during execution,
unless those repair operations are themselves formalized as observable
state transitions. This is an existence-by-construction result at the chosen
abstraction level. It does not establish uniqueness, efficiency, incentive com-
patibility, welfare superiority, or institutional desirability of the realizing
route graph.

What the theorem proves. Theorem 1 is a conditional compilation
result. It proves that once a source institution has been specified inde-
pendently as a finite guarded state machine, and once its enabled transi-
tions factor through the fixed primitive basis U , there exists a commitment-
pool route realization that preserves the selected external observables over



                                      19
bounded horizons. It does not prove that all financial or mutual-aid institu-
tions satisfy these assumptions, that such realization is unique, or that the
target realization preserves legal status, cultural meaning, welfare, incen-
tive compatibility, or social legitimacy. The theorem therefore establishes
bounded operational realizability, not institutional equivalence.

Proposition 1 (Bounded repair-extended realization for endogenous re-
pair). Under Assumptions 1–5, primitive completeness with respect to U ,
and repair-schema completeness with respect to U ∪ U r , any institution
I = (S, A, T, Π, Σ) whose routine execution is directly realizable and whose
modeled repair trajectories use only repair operations in U r with triggers,
permissions, state effects, and re-entry conditions encoded in the target
governance state G admits a bounded-horizon repair-extended realization
Φr (I) such that observables are preserved up to stutter-insensitive macro-
step equivalence over the modeled horizon.

Proof. Factor routine prefixes into primitives from U and repair segments
into operations from U r . By Theorem 1, routine segments are realizable.
By repair-schema completeness, each modeled repair segment is represented
by an explicit finite sequence of repair operations with observable triggers,
state effects, and re-entry conditions. Since both routine and repair segments
are finite guarded state transitions, and since repair-schema completeness
requires explicit triggers, permissions, state effects, and re-entry conditions,
the same induction used in Theorem 1 applies to the concatenated U ∪
U r sequence. Observables are compared only at macro-step boundaries, so
bounded composition preserves Obs∗ over the modeled horizon.


5     Worked Constructions: Finance
This section gives explicit witnesses rather than classificatory labels. Sec-
tions 5.1–6.3 are direct cases under Theorem 1. Section 6.4 gives a bounded
repair-extended witness aligned with Proposition 1. Externally anchored
repair cases are classified in Sections 7 and 9, but are not yet proved here
by end-to-end witness construction.

5.1   Deposit-transfer-redemption institution
Source machine. State includes customer balances, reserve balance, and
pending redemptions. Actions are deposit, transfer, and redeem. Guards
require nonnegative balances and reserve sufficiency for redemption.


                                      20
Mapping.

• R: accepted deposit claim classes.

• V : fixed 1:1 index to settlement unit.

• L: transfer/redemption caps and anti-money-laundering (AML) policy
  flags.

• H: reserve custody and balance updates.

• G: emergency pause and parameter updates.

Invariants. Conservation and nonnegative balances. Settlement outcomes
match source machine under ≡H .

Example trace.      Source trajectory over horizon H = 3:

                s0 : reserve = 100, bal(A) = 0, bal(B) = 0

                        a1 = deposit(A, 10) ⇒ s1 ,
                        a2 = transfer(A, B, 4) ⇒ s2 ,
                        a3 = redeem(B, 3) ⇒ s3 .
Target realization uses ψ(issue), ψ(transfer), and ψ(settle): reserve custody
increases by 10 and issues a claim to A; holdings move 4 from A to B;
redemption guard checks reserve sufficiency then settles 3 to B. Observable
balances and settlement outputs match at each step under ≡H .

5.2   Secured lending / repo-style institution
Source machine. States track collateral inventory, haircut-adjusted ex-
posure, margin calls, and default states. Actions: open position, mark-to-
market, margin call, unwind.

Mapping. Collateral commitment classes enter R; haircuts and marks
in V ; exposure caps in L; pledged collateral in H; default and close-out
waterfall in G plus Π encoding.

Failure path. If collateral value falls below thresholds and margin not
posted, remedy transition triggers collateral liquidation according to en-
coded priority order.

                                     21
Example trace.

                      s0 : collateral value = 120,
                          cash advanced = 100,
                          haircut = 20,
                          margin status = compliant.

Open repo position ⇒ s1 . Mark-to-market shock reduces collateral value
to 105 ⇒ s2 . Margin call issued; if unmet, default/remedy transition liqui-
dates collateral according to encoded close-out waterfall ⇒ s3 . Observable
exposure, margin-breach status, and liquidation ordering match the source-
machine trajectory. A margin breach can be written as

                              Vt (1 − h) < Et ,

where Vt is marked collateral value, h is the haircut, and Et is current
exposure. The margin-call transition either restores

                              Vt (1 − h) ≥ Et

through additional collateral or moves the state into default/remedy. Thus
the trigger guard is explicit rather than left as an informal stress event.

5.3   CCP-style clearing witness
Source machine. States: member obligations, initial/variation margin,
default fund, loss mutualization stage. Actions: novation, netting, margin
updates, default waterfall.

Mapping. Novation and netting are represented by clearing-pool tran-
sitions; margin and default-fund balances in custody state; waterfall order
encoded in priority guards. Preservation of waterfall order follows Lemma 3.

Example trace. Two members novate offsetting obligations into the clear-
ing pool. Initial margin and variation margin are updated. One member
defaults; the system applies margin, then default fund, then loss mutualiza-
tion in declared order. Observable loss allocation matches Π by construc-
tion. For a defaulting member i, let Mi denote available margin, Di the
defaulter’s default-fund contribution, D−i the mutualized default fund of



                                     22
non-defaulting members, and L the close-out loss. The waterfall applies
losses in the ordered sequence

                              Mi → Di → D−i ,

subject to non-negativity and exhaustion constraints. A target transition is
admissible only if no later layer is debited while an earlier layer has posi-
tive available balance. This gives a concrete target-side encoding of Π for
the CCP witness. More generally, the same network representation can
encode card-network-style payment rails in which authorization, routing,
interchange-like fee allocation, and deferred settlement occur across multi-
ple issuers, acceptance points, and settlement pools.


6     Worked Constructions: Mutual Aid
6.1   ROLA witness
Source machine. State: member contribution record or recognized group
memory, rotation order or reciprocal claim status, task equivalence class, at-
tendance status, arrears or make-up obligation, and completion status. Ac-
tions: contribute labor, allocate the current labor round to the designated
beneficiary, record shortfall, and apply a predefined arrears or make-up rem-
edy.

Mapping. Accepted labor-claim classes and task categories enter R; task-
equivalence or conversion rules enter V when heterogeneous work must be
normalized; round order, attendance bounds, and maximum pull conditions
enter L; completed labor claims, make-up obligations, and any support la-
bor entered from overlapping pools enter H; stewarded remedy, temporary
deferment, and re-entry rules enter G.

Example cycle. Four households agree to contribute one workday each
in rotating order to prepare fields before planting. In round one, all four
members contribute labor to household A’s plot. In round two, household
C fails to appear for household B’s turn, creating a make-up obligation.
Governance records the shortfall and applies the predefined remedy: ei-
ther deferred labor contribution in the next round or a substitute service-
equivalent contribution according to the task-normalization rule. Observ-
able completed labor, residual obligations, and turn order match the source-
machine trajectory.


                                     23
     This witness captures the operational core of a rotating labor associa-
tion: scheduled contribution, rotating or reciprocal allocation of labor ben-
efit, and predefined remedy for shortfall. It does not claim cultural or nor-
mative equivalence to all labor-sharing institutions; it shows only that the
core labor-contribution, allocation, and remedy dynamics admit a direct
operational realization when task classes, attendance rules, and remedies
are explicit (Wang 2019; Arciniegas, Dumas, and Fahn 2025; Messerschmidt
1981). A completed labor contribution may also generate a past-oriented
certification: for example, a steward or beneficiary may attest that a mem-
ber contributed one workday. Such a certification need not be redeemable
against the attestor, but it may be accepted by a pool in exchange for other
commitments when the pool’s valuation, limit, evidence, and governance
rules permit. Appendix B gives a fully enumerated memory-based ROLA
witness in which there is no written ledger and elders serve as stewards over
recognition, dispute, remedy, and re-entry.

6.2   ROSCA/VSLA witness
Source machine. For a rotating savings and credit association (ROSCA)
or village savings and loan association (VSLA), state includes member
contribution records, turn order, arrears, and payout status. Actions:
contribute, allocate turn payout, record arrears remedy. The ROSCA
component of this witness is consistent with comparative and economic
literatures that treat rotating savings and credit associations as struc-
tured contribution-and-allocation systems rather than merely informal
social groups (Ardener 1964; Besley, Coate, and Loury 1993; Anderson and
Baland 2002).

Mapping. Turn-based limiter is L; contribution/payout commitments in
R and H; sanction/remedy policies in G. Local social sanction norms remain
external primitives.

Example cycle. Four members each contribute one unit per round with
fixed ex ante turn order. After three successful contribution actions and one
arrears event, the limiter blocks payout reordering and governance applies
the predefined arrears remedy. Observable payout order and residual obliga-
tions match the source-machine trajectory. This witness abstracts from the
full social richness of ROSCAs, but it preserves the core operational features
emphasized in the literature: scheduled contribution, rotating allocation,
and sanction or remedy against arrears (Ardener 1964; Besley, Coate, and

                                     24
Loury 1993). This operational witness does not claim cultural or normative
equivalence to any particular ROSCA or VSLA; it shows only that the core
contribution, allocation, and remedy dynamics admit a direct operational
realization.

6.3   Grain-bank witness
Source machine. State: inventory by season, household claims, emer-
gency reserve floor. Actions: deposit grain, issue receipt claim, redeem
receipt, emergency allocation.

Mapping. Inventory-backed claims in R, seasonal valuation in V , anti-
depletion floor in L, storage custody in H, steward override for emergencies
in G.

Example cycle. Households deposit 50 units of grain after harvest and
receive receipt claims. Later, they redeem 20 units during a lean season. If
inventory falls to the emergency floor, limiter rules block ordinary redemp-
tion and steward override authorizes emergency allocation only. Observable
inventory and redemption outcomes match the source machine.

6.4   Repair-extended witness: cross-pool reserve shortfall
Source machine. State: household claims, local reserve balance, sup-
port eligibility, temporary redemption limits, and re-entry status. Actions:
redeem, detect reserve shortfall, request support, receive support, relimit,
re-enter ordinary redemption.

Mapping. Receipt claims remain in R; ordinary and emergency valuation
rules in V ; temporary redemption throttles in L; support or reserve move-
ments in H; steward-authorized support request, relimit, and re-entry in
G.

Example repair trace. A household presents a valid redemption claim,
but the local pool fails reserve sufficiency at s1 . The system enters repair
mode and invokes support-request, followed by either reserve support from
an overlapping pool or a temporary relimit transition. Once support ar-
rives or the temporary limit state is resolved, the system invokes re-enter
and completes redemption. Observable claim status, inventory effects, and



                                     25
residual obligations match the source-machine repair trajectory at macro-
step boundaries.
    This witness is not a proof of universal repair-extended realization. It
shows that explicitly modeled endogenous repair operations can be given
the same kind of end-to-end operational treatment as direct cases.


7     Limits, Repair Modes, and Direct-Realization
      Boundary
7.1   External primitives
Tax authority, legal personality, bankruptcy stays, and judicial discretion
remain external primitives. The framework does not claim to generate
sovereign power. This is especially salient for sovereign guarantee facilities,
where activation, repricing, and fiscal backstop management are often em-
bedded in broader public-finance and contingent-liability frameworks rather
than purely operational rule systems (Razlog et al. 2020).

7.2   Hard cases and repair modes
Representability weakens when quality is non-contractible, contingencies
are semantically ambiguous, underwriting is purely discretionary, risks are
highly correlated, or governance capture dominates formal rules. Some hard
cases may be better understood not as non-representable institutions, but as
institutions operating in repair mode rather than routine execution mode.
In a network of pools, repair is not limited to adjudication or rerouting.
It may occur through rerouting, deferred settlement, guarantor invocation,
insurance payout, negotiated remedy, re-curation of accepted commitments,
re-valuation of claims, limit tightening or relaxation, reserve support from
overlapping pools, or governance-mediated override and re-entry. Routing is
therefore not only a repair path. In ordinary execution it is the mechanism
by which heterogeneous pools interoperate, share liquidity, and clear com-
patible obligations across a wider network. Under stress, the same routing
layer can also function as a safeguard against misuse, enclosure, or localized
capture by allowing participants to reroute around degraded pools, tighten
acceptance conditions, or shift toward pools with stronger published stand-
ing and support capacity. In this sense, repair is not external to the protocol
architecture: it acts through the same interfaces of curation, valuation, lim-
itation, fee or support allocation, custody, and governance that structure
ordinary execution. A broken commitment does not necessarily terminate

                                      26
the institution; in many mutual-aid, rotating labor, and labor-sharing set-
tings it moves the system from routine execution into repair mode, where
sanctions, support, repricing, rescheduling, or pool reconfiguration restore
an executable path. This is consistent with institutional accounts that
treat monitoring, sanction, and rule adaptation as part of system persis-
tence rather than as failures outside the institution (Ostrom 1990). This
interpretation also aligns with prior Commitment Pooling work that treats
rotational labor, reciprocity, mutual support, and stewardship as constitu-
tive elements of the infrastructure rather than as informal residues outside
it (Ruddick 2023; Ruddick 2026). Figure 2 summarizes this repair topol-
ogy schematically by showing how a failure trigger can branch into multiple
repair operations and then return, where possible, to ordinary execution.




Figure 2: Repair topology in a network of pools. A failed routine transi-
tion may enter repair through rerouting, deferment, revaluation, re-curation,
relimiting, guarantor or insurance support, stewarded override, external in-
tervention, and possible re-entry into ordinary execution. The figure is di-
agnostic, not a proof sequence.


7.3   Negative case for direct realization
Consider a court-supervised restructuring process in which, during proceed-
ings, the court may modify the stay, approve debtor-in-possession financing
that primes existing claims, alter class formation, accept contested valua-


                                     27
tion arguments, approve cramdown terms, or apply equitable subordination
and public-interest reasoning without ex ante codified predicates. In such
a process, admissibility, priority, and remedy are not fixed entirely by ex-
plicit guards prior to execution; they are partly produced by open-ended
legal reasoning, litigation, bargaining, and discretionary intervention during
the process itself. This characterization is consistent with standard treat-
ments of bankruptcy as a process in which priority, control, financing, and
restructuring outcomes may be altered through court-supervised legal pro-
cedure rather than fixed ex ante execution rules (Baird 2022). This directly
violates Assumption 2 and may also violate Assumption 4 when decisive
interventions are not representable as pre-specified state-transition permis-
sions. For that subclass of institution, direct realization under Theorem 1
is not guaranteed. By contrast, narrower restructuring workflows with fixed
voting, valuation, payout, support, and re-entry rules may still be directly
or repair-extended representable. More generally, this does not imply that
such cases are beyond institutional representation altogether; rather, they
are better understood as candidates for externally anchored repair unless ad-
judicative, support, and repair transitions are themselves formalized within
the model.


8     Software Verification Conditions
8.1   From theorem conditions to machine-checkable proper-
      ties
Each lemma induces implementation obligations:

1. Primitive realization ⇒ complete transition-handler coverage.

2. Compositional closure ⇒ route composition cannot bypass limits.

3. Priority preservation ⇒ executable waterfall proofs for all default paths.

These conditions should be read as proof obligations generated by the the-
orem, not as a claim that existing software artifacts already satisfy formal
verification for all mapped institution classes. These are necessary but not
sufficient verification conditions. Repair-aware implementations also require
verifiable triggers, state updates, and audit trails for re-valuation, relimit-
ing, support invocation, and override operations. A full implementation
proof also requires settlement-operator conformance and evidence/remedy
conformance for each mapped claim class.


                                      28
Minimal invariant suite. Any implementation claiming conformance to
a mapped institution should expose tests or proofs for the following invari-
ants.

1. Curation soundness. Only admissible commitments may enter, move,
   or settle under the active registry, evidence, pause, and governance
   guards.

2. Valuation soundness. Quotes, haircuts, fees, and settlement amounts
   must follow the active value index and fee policy.

3. Limitation soundness. No transition or composed route may bypass
   balance, reserve, inventory, collateral, exposure, window, or global limit
   constraints.

4. Exchange conservation. Balances, commitments, reserves, collateral,
   inventories, and fee accounts must remain conserved and non-negative
   unless the source settlement operator explicitly permits signed balances,
   expiry, cancellation, burn, or retirement.

5. Priority and settlement conformance. Payout, extinguishment,
   residual-obligation, waterfall, and receipt effects must match Π and Σ
   after projection.

6. Repair auditability. Every repair transition must have an explicit
   trigger, permission source, state update, receipt, and re-entry or terminal
   condition.

These invariants are necessary verification obligations generated by the op-
erationalization theorem. They are not sufficient for full economic, legal,
security, or welfare validation.

8.2    Route selection formalism
Let the route graph be GR = (N, E), where N is the node set of pools, with
edge feasibility predicate F(e, s) and cost c(e, s). A path p = (e1 , . . . , ek ) is
feasible if there exists a state sequence (s1 , . . . , sk+1 ) such that F(ej , sj ) =
1 for all j ∈ {1, . . . , k}, with sj+1 given by the state update induced by
traversing edge ej from state sj . Optimization objective:
                                        k
                                  min         c(ej , sj )
                                        X
                                   p
                                        j=1



                                          29
subject to feasibility and settlement-completion constraints.
    Here c(e, s) may include not only direct transfer cost, but also route-
level fees, latency, inventory cost, support cost, or policy penalties. When
pool interfaces and exchange logics are transparently published in machine-
readable form, routing becomes discoverable rather than purely ad hoc,
and the same formalism can support both point-to-point settlement and
larger-scale credit clearing across federated networks of pools. This is con-
sistent with prior work showing that obligation-clearing and mutual credit
can jointly produce substantial liquidity-saving effects in small and medium-
sized enterprise (SME) trade-credit networks (Fleischman, Dini, and Littera
2020). Failure occurs when no feasible path exists or no admissible path
clears at acceptable cost. In the repair-aware reading of the framework,
recovery policy is itself a repair operation and may select fallback assets,
rerouting, deferment, support request, guarantor or insurance invocation,
temporary revaluation, relimiting, or delayed settlement windows depend-
ing on state.


9    Operationalization Test and Illustrative Appli-
     cations
This section applies the institution-independent operational realization test
reported in Appendix A. The purpose is not to estimate the prevalence of
directly realizable institutions. It is to show how the framework functions
as a diagnostic procedure: given a proposed institutional mechanism, the
test identifies whether it is directly realizable, repair-extended, externally
anchored, or outside the model’s present scope.
    The classification is mechanism-specific rather than label-specific. For
example, a “loan,” “insurance pool,” “labor association,” or “clearing ar-
rangement” may be directly realizable in one design and repair-extended
or externally anchored in another, depending on whether states, guards,
priorities, settlement effects, and repair authority are explicit.

Illustrative use. Table 2 reports a small set of applications. These exam-
ples are not part of the theorem and are not a statistical sample. They are
included only to demonstrate how the same operational test can be applied
across heterogeneous mechanisms.




                                     30
  Table 2: Illustrative applications of the operational realization test.

Specified               Classification    Reason for classification
mechanism
Fully reserved retail   Direct            Issuance, transfer, redemption,
deposit or wallet                         reserve custody, and settlement
ledger with explicit                      guards are explicit.
redemption rule
Repo with fixed         Direct            Collateral pledge, haircut,
haircut, margin-call                      margin call, default trigger, and
trigger, and                              liquidation rule are codifiable.
close-out rule
CCP service with        Direct            Novation, margining, default
explicit margin and                       fund, and loss waterfall can be
default-waterfall                         represented through explicit
rules                                     priority and settlement rules.
Fixed-order             Direct            Contribution schedule, turn
ROSCA with                                order, membership, and arrears
explicit                                  remedy are explicit.
contribution,
payout, and arrears
rule
VSLA lending            Direct or         Routine lending may be directly
workflow with           repair-           realizable; renegotiation, social
predefined default      extended          recourse, or discretionary
remedy                                    forgiveness requires repair
                                          primitives if not fully specified.
Grain bank with         Direct            Seasonal inventory, redemption
seasonal receipts,                        windows, reserve floors, and
reserve floor, and                        emergency limits are
emergency                                 operationalizable.
allocation rule
Memory-based            Direct or         Turn order, labor-equivalence
rotating labor          repair-           rules, and recognized
association with        extended          contribution may be direct;
task-equivalence,                         contested memory,
elder recognition,                        elder-mediated exceptions,
and make-up labor                         absence, or make-up labor may
rule                                      require repair transitions.


                                     31
 Specified               Classification    Reason for classification
 mechanism
 Private mutual          Repair-           Triggered payout can be
 insurance overlay       extended          modeled as repair; discretionary
 with explicit trigger                     support or sovereign backstop is
 and payout rule                           externally anchored.
 Court-supervised        Externally        Stay scope, class formation,
 bankruptcy with         anchored          cramdown, and reprioritization
 open-ended judicial                       may depend on open-ended
 discretion                                judicial discretion.
 Discretionary           Externally        Activation, repricing, extension,
 sovereign guarantee     anchored          and payout authority may
 facility                                  depend on political or
                                           budgetary discretion outside
                                           pool permissions.

    The examples show how the test locates the relevant boundary. A failed
case is not necessarily outside institutional representation altogether. It may
instead require explicit repair primitives, a narrower mechanism specifica-
tion, or recognition that decisive authority lies outside the modeled pool-
route system.


10     Conclusion
This paper advances a scoped bounded-operationalization claim for selected
financial and mutual-aid institutions. It formalizes source and target mod-
els, a realization mapping Φ, bounded observational equivalence, repair-
aware realization classes, a direct-realization theorem, and a bounded repair-
extended proposition.
    The main contribution is not that familiar institutions can be renamed
as commitment pools. It is a test for when a specified mechanism can be op-
erationalized through CPP’s four functions (curation, valuation, limitation,
and exchange) and their fixed implementation interfaces without hidden
primitives, unstated discretion, or loss of relevant observables. The frame-
work is therefore a diagnostic and construction tool: it shows how selected
mechanisms can be represented, where representation fails, which assump-
tions fail, and what repair or external authority must be specified before
realization can be claimed.


                                      32
     The claim remains falsifiable. One robust in-scope mechanism that sat-
isfies the stated scope conditions but cannot be realized through the fixed
primitive basis and interface types is sufficient to reject or narrow the current
theorem. Future work should convert more repair-extended cases into full
witnesses and test whether this representation improves simulation, audit,
routing, settlement, and institutional comparison in real systems.


A     Operational Realization Test
This appendix gives a compact test for applying the framework to a proposed
mechanism. The unit of analysis is not an institutional label such as “repo,”
“ROSCA,” or “grain bank,” but a specified institutional mechanism

                              I = (S, A, T, Π, Σ).

A mechanism is directly realizable only if its relevant states, actions, guards,
priorities, and settlement effects can be stated before introducing the target
pool-route mapping.




                                       33
 Test step               Required specification
 State                   Claims, holders, reserves, collateral, inventories, limits,
                         fees, permissions, disputes, defaults, evidence, and repair
                         states relevant at the chosen abstraction level.
 Actions                 State-changing operations such as issue, transfer, redeem,
                         pledge, margin, net, pause, revalue, invoke guarantee,
                         reroute, settle, repair, or exit.
 Guards                  Conditions under which each action is allowed: member-
                         ship, registry listing, balance sufficiency, limit availability,
                         fee payment, inventory availability, collateral adequacy,
                         governance approval, or evidence submission.
 Priority                Any ordering over claims, losses, remedies, payouts, or
                         settlement layers.
 Settlement              What changes hands, what is extinguished, what remains
                         outstanding, what receipt is emitted, and what happens
                         when ordinary settlement fails.
 Target mapping          Mapping into CPP functions and implementation inter-
                         faces (R, V, L, F, H, G).
 Primitive factoriza-    Verification that each enabled transition can be expressed
 tion                    through the fixed primitive basis U , without adding
                         institution-specific primitives.
 Route check             Verification that each route hop satisfies local registry,
                         valuation, limit, fee, custody, inventory, pause-state, and
                         governance constraints.
 Observable equiva-      Equality of externally relevant settlements, residual obli-
 lence                   gations, and realized priority/loss outcomes over horizon
                         H after projection by Obs∗ .
 Repair classification   If ordinary execution fails, specification of repair trigger,
                         permission source, state update, receipt, and re-entry or
                         terminal condition.

              Table 3: Compact operational realization checklist.

    A mechanism is directly realizable if all ordinary transitions pass the
checklist. It is repair-extended if ordinary execution is directly realizable
but breach, dispute, exception, or failure handling requires explicit repair
primitives. It is externally anchored if decisive state changes depend on
authority outside the modeled pool system, such as open-ended judicial,
sovereign, regulatory, or political discretion. It is outside scope if the rele-
vant mechanics, observables, or finite-state abstraction cannot be specified
at the chosen level.




                                          34
B     Fully Enumerated Witness:                       Memory-Based
      ROLA
This appendix applies the operational realization test to a memory-based
rotating labor association (ROLA) in which there is no physical or digital
ledger. The witness is not a claim about every historical or contemporary
labor-sharing institution. It is a fully enumerated operational mechanism:
members contribute labor in rotation, group memory records recognized
participation, and elders or recognized stewards act as authorities for recog-
nition, dispute handling, remedy, and re-entry.
    The purpose of the witness is to show that the framework does not
require a written ledger, token ledger, or blockchain ledger. At the chosen
abstraction level, recognized group memory, witness testimony, beneficiary
acknowledgment, and steward attestation constitute the relevant state and
evidence variables.

Source specification.     Let the source state be
                      s = (M, E, Q, C, O, A, D, R, G),
where:
• M is the set of recognized members.
• E ⊆ M is the set of elders or recognized stewards.
• Q is the remembered turn order or reciprocal priority relation.
• C records recognized completed labor contributions.
• O records outstanding labor obligations or expected future contributions.
• A records attendance, absence, or partial attendance status.
• D records disputed memory claims.
• R records remedies, make-up obligations, forgiveness, suspension, or re-
  entry status.
• G records governance permissions, including elder authority and ac-
  cepted evidence rules.
    The state C need not be a written ledger. It may be constituted by
group memory, beneficiary acknowledgment, witness recognition, or steward
attestation, provided that the relevant contribution, obligation, and remedy
effects are observable at the chosen level of abstraction.

                                     35
Action set.        Let the action set be
  AROLA = {join, schedule, contribute, recognize, allocate,
                 record-absence, claim-owed, dispute, assign-makeup,
                 forgive, suspend, re-enter}.

    Routine actions include scheduling a work round, contributing labor,
recognizing completed labor, and allocating the current labor benefit to
the scheduled beneficiary. Repair actions include disputing remembered
participation, assigning make-up labor, forgiving an absence, suspending a
member, and re-entering ordinary participation.

Guards. The ordinary guards are:

                                    gmember (i) :      i ∈ M,

                  gbeneficiary (j, s) :    j ∈ M ∧ j is next under Q,
  gcontribute (i, j, ℓ, s) :      i ∈ M ∧ j ∈ M ∧ ℓ is an accepted labor class,
                                   gcontribute (i, j, ℓ, s)
      grecognize (i, j, ℓ, s) :
                                    ∧ accepted evidence confirms contribution.
   Accepted evidence may include beneficiary acknowledgment, sufficient
witness memory, steward attestation, or an agreed combination of these. A
contribution that lacks accepted evidence does not settle directly; it enters
the dispute state D.
   Repair guards are:

                               i∈M ∧ j∈M
    gabsence (i, j, s) :
                               ∧ i was expected but not recognized as present,

                        i ∈ M,
gdispute (i, x, s) :
                        x concerns a contested contribution, obligation, or turn,
               gsteward (e, s) :      e ∈ E ∧ e has authority under G.

Priority rule.         Let ΠROLA order claims and remedies as follows:

         emergency stewarded need ≻ scheduled beneficiary under Q
                                              ≻ recognized make-up obligation
                                              ≻ ordinary future turn.

                                                36
   If the modeled association does not permit emergency reprioritization,
the first layer is omitted. If emergency reprioritization depends on open-
ended steward judgment, the routine mechanism remains directly realizable
but the reprioritization path is repair-extended.

Settlement operator. The settlement operator ΣROLA maps expected
labor, available contributors, task class, and evidence into one of five ob-
servable outcomes:
                    (O, C, A, D, R) → {completed, partial, absent,
          ΣROLA :
                                       disputed, remedied}.
   For a recognized completed contribution,

                         ΣROLA (i, j, ℓ) = completed

updates C to record that member i contributed labor class ℓ for beneficiary
j, reduces or satisfies the relevant obligation in O, and preserves or advances
the turn relation Q.
    For an absence,
                             ΣROLA (i, j, ℓ) = absent
updates A and creates a make-up or remedy entry in R.
   For a contested memory claim,

                           ΣROLA (i, x) = disputed

updates D and suspends the contested settlement effect until a steward-
authorized repair transition occurs.

Target mapping into (R, V, L, F, H, G). The memory-based ROLA
maps into the pool interfaces as follows:
• R: recognized members, elders or other stewards, accepted labor classes,
  accepted evidence types, and admissible contribution claims.

• V : task-equivalence rules, such as one workday, half-day, skilled labor,
  substitute labor, or service-equivalent contribution.

• L: turn-order limits, maximum pull per beneficiary, attendance bounds,
  emergency caps, and make-up windows.

• F : non-monetary exchange logic, such as hosting duties, food contribu-
  tions, transport support, or zero-fee operation.

                                      37
• H: recognized completed labor claims, outstanding labor obligations,
  make-up obligations, and group-memory attestations.

• G: steward authority, group meeting rules, dispute procedures, forgive-
  ness, suspension, re-entry, and parameter updates.

   The holdings state H is not required to be a written ledger. In this
witness, H is the operational memory state recognized by the group and
made effective through beneficiary acknowledgment, witness recognition,
and steward attestation.

Primitive factorization. Routine transitions factorize into the primitive
basis U :
                          join 7→ issue
for recognition of membership or participation standing;

                    contribute + recognize 7→ settle

for recognized labor fulfillment;

                  recognize completed labor 7→ issue

for a past-oriented certification that a contribution occurred;

                       allocate 7→ transfer; settle

for moving the current labor benefit to the scheduled beneficiary;

          record-absence + assign-makeup 7→ default/remedy

for a missed contribution and its remedy.
    Repair transitions factorize into U r :

                              dispute 7→ adjudicate,
                      assign-makeup 7→ relimit,
                              forgive 7→ override,
                             re-enter 7→ re-enter.




                                      38
Example routine trace. Consider four households A, B, C, D and elder
set E. The initial state is:

  s0 : M = {A, B, C, D},     Q = (A, B, C, D),     C = ∅,   O = ∅,   D = ∅.

   Round one assigns the benefit to household A:

                             a1 = schedule(A).

Members B, C, D contribute one accepted workday each to A:

                          a2 = contribute(B, A, 1),
                          a3 = contribute(C, A, 1),
                          a4 = contribute(D, A, 1).

The beneficiary and witnesses recognize the contributions:

                     a5 = recognize({B, C, D}, A, 1).

The state updates to:

                 C ′ = C ∪ {(B, A, 1), (C, A, 1), (D, A, 1)},

and the turn order advances:

                              Q′ = (B, C, D, A).

    At the macro-step boundary, the externally relevant observables are: A
received the labor benefit, B, C, D are recognized as having contributed, no
make-up obligation exists, and the next beneficiary is B.

Example repair trace. In round two, household B is the scheduled ben-
eficiary. Household C is expected to contribute but is not recognized as
present:
                     a6 = record-absence(C, B, 1).
The absence guard creates a remedy state:

                        R′ = R ∪ {makeup(C, B, 1, w)},

where w is the make-up window.
   If C disputes the absence,

                         a7 = dispute(C, absence),

                                     39
then the claim enters D and ordinary settlement of the contested obligation
is paused. A recognized steward applies the repair guard:

                              gsteward (e, s) = 1.

The steward-authorized repair transition either confirms absence, recog-
nizes prior contribution, assigns substitute labor, forgives the obligation,
or suspends/re-enters the member according to G.
    For example:

                     a8 = assign-makeup(e, C, B, 1, w)

updates R and permits re-entry after completion:

                             a9 = re-enter(C).

   At the macro-step boundary, observable state records: whether C is in
good standing, whether a make-up obligation remains, whether B is still
owed labor, and whether ordinary rotation resumes.

Classification. The routine labor-rotation mechanism is directly realiz-
able when membership, accepted labor classes, turn order, contribution
recognition, and ordinary remedies are explicit. The no-ledger feature does
not by itself block realization, because group memory, witness recognition,
and steward attestation can serve as state and evidence variables.
    The contested-memory and steward-mediated exception paths are repair-
extended unless the steward decision rules are fully specified as ordinary
guards. If stewards can revise obligations, forgive absences, reorder turns, or
redefine acceptable contribution through open-ended judgment, those tran-
sitions are not direct. They are repair-extended when the trigger, steward
permission, state update, receipt or public recognition, and re-entry or ter-
minal condition are specified.
    The mechanism becomes externally anchored only if decisive repair au-
thority leaves the group and is exercised by a court, state official, police
authority, or other institution outside the modeled pool-route system.
    Thus this witness is classified as:

 direct for routine labor rotation;
 repair-extended for contested memory and steward-mediated exceptions.




                                      40
Funding information
The author received no specific grant from any funding agency, commercial,
or not-for-profit sector for this work.


Author contributions
William O. Ruddick: conceptualization, methodology, formal analysis, writ-
ing, visualization, and revision.


Conflict of interest
The author is affiliated with Grassroots Economics Foundation, whose soft-
ware repositories and protocol documentation are cited as implementation
context. The formal claims, theorem, classifications, and conclusions of the
paper do not depend on those artifacts. The author declares no other com-
peting interests.


Data availability statement
This paper does not rely on an external dataset or software package for
its formal results. The operational realization test, worked examples, fig-
ures, and tables are contained in the manuscript. Public software reposito-
ries and protocol documentation associated with Grassroots Economics and
Cosmo-Local Credit provide implementation context only; the theorem and
classifications do not depend on those artifacts.


AI use disclosure
Language-model assistance was used for drafting and editing. Formal scop-
ing, claims, and responsibility remain with the author.


References
 Anderson, Siwan, and Jean-Marie Baland.       2002.   “The Eco-
   nomics of ROSCAs and Intrahousehold Resource Alloca-
   tion.”   The Quarterly Journal of Economics 117 (3): 963–995.
   https://doi.org/10.1162/003355302760193931.


                                    41
Arciniegas, C., C. Dumas, and M. Fahn. 2025. “Informal Labor Exchange
   Teams and Participation in the Labor Market: Evidence from Rural
   Tanzania.” IZA Discussion Paper No. 17852, IZA Institute of Labor
   Economics.       https://www.iza.org/publications/dp/17852/informal-
   labor-exchange-teams-and-participation-in-the-labor-market-evidence-
   from-rural-tanzania (accessed 2026-04-18).
Ardener, Shirley. 1964. “The Comparative Study of Rotating Credit As-
   sociations.” The Journal of the Royal Anthropological Institute of Great
   Britain and Ireland 94 (2): 201–229. https://doi.org/10.2307/2844382.
Baird, Douglas G. 2022. The Elements of Bankruptcy. 7th ed. Foundation
   Press.
Bergstra, Jan A., and Mark Burgess. 2008. “A Static Theory of Promises.”
   arXiv preprint arXiv:0810.3294. https://arxiv.org/abs/0810.3294 (ac-
   cessed 2026-04-18).
Bergstra, Jan A., and Mark Burgess. 2014. “Promises, Impositions, Pro-
   posals, Predictions, and Suggestions.” arXiv preprint arXiv:1401.3381.
   https://arxiv.org/abs/1401.3381 (accessed 2026-04-18).
Besley, Timothy, Stephen Coate, and Glenn Loury. 1993. “The Economics
   of Rotating Savings and Credit Associations.” The American Economic
   Review 83 (4): 792–810. https://www.jstor.org/stable/2117579 (ac-
   cessed 2026-04-18).
Brunnermeier, Markus K., and Lasse Heje Pedersen. 2009. “Market Liq-
   uidity and Funding Liquidity.” Review of Financial Studies 22 (6):
   2201–2238. https://doi.org/10.1093/rfs/hhn098.
Burgess, Mark, and Simen Fagernes. 2006. “Promise Theory: A Model
   of Autonomous Objects for Pervasive Computing and Swarms.” In-
   ternational Conference on Networking and Services (ICNS). IEEE.
   https://doi.org/10.1109/ICNS.2006.88.
Clarke, Edmund M., Orna Grumberg, and Doron A. Peled. 1999. Model
   Checking. Cambridge, MA: MIT Press.
Committee on Payment and Settlement Systems, and Technical Commit-
  tee of IOSCO. 2012. “Principles for Financial Market Infrastruc-
  tures.” Technical Report, Bank for International Settlements, Basel.
  https://www.bis.org/cpmi/publ/d101.htm (accessed 2026-04-18).
Cosmo-Local Credit. 2026. Protocol Overview. https://cosmolocal.
   credit/protocol/overview/. Overview of the on-chain Commitment


                                   42
   Pooling Protocol implementation, including SwapPool, quoters, FeeP-
   olicy, Limiter, and registry/discovery patterns. Accessed 2026-04-17.
Duffie, Darrell, and Haoxiang Zhu. 2011. “Does a Central Clearing Coun-
   terparty Reduce Counterparty Risk?” Review of Asset Pricing Studies
   1 (1): 74–95. https://doi.org/10.1093/rapstu/rar001.
Fleischman, Tomaž, Paolo Dini, and Giuseppe Littera.         2020.
   “Liquidity-Saving through Obligation-Clearing and Mutual Credit:
   An Effective Monetary Innovation for SMEs in Times of Cri-
   sis.” Journal of Risk and Financial Management 13 (12): 295.
   https://doi.org/10.3390/jrfm13120295.
Graeber, David. 2011. Debt: The First 5,000 Years. Brooklyn, NY: Melville
   House.
Grassroots Economics. 2026a. CIC Stack Docs. https://github.com/
   grassrootseconomics/cic-stack-docs. Documentation for Swap-
   Pool, TokenRegistry, valuation quoters, fee-setting, and limit config-
   uration. Accessed 2026-04-17.
Grassroots Economics.  2026b.   erc20-pool.    https://github.com/
   grassrootseconomics/erc20-pool. Public repository for a permis-
   sioned ERC20 swap pool implementation. Accessed 2026-04-17.
Grassroots Economics. 2026c. eth-indexer. https://github.com/
   grassrootseconomics/eth-indexer. Public repository for indexing
   relevant Grassroots Economics blockchain data. Accessed 2026-04-17.
Grassroots Economics. 2026d. Sarafu Network. https://github.com/
   grassrootseconomics/sarafu.network. Public repository for the
   Sarafu Network dApp for interacting with Community Asset Vouch-
   ers and Commitment Pools. Accessed 2026-04-17.
Ingham, Geoffrey. 2004. The Nature of Money. Cambridge: Polity Press.
Lamport, Leslie. 2002. Specifying Systems: The TLA+ Language and Tools
  for Hardware and Software Engineers. Addison-Wesley.
Lietaer, Bernard, Christian Arnsperger, Sally Goerner, and Stefan
   Brunnhuber. 2012. Money and Sustainability: The Missing Link.
   Axminster: Triarchy Press.
Mauss, Marcel. 2002. The Gift: The Form and Reason for Exchange in
  Archaic Societies. London: Routledge.
Mehrling, Perry. 2011. The New Lombard Street: How the Fed Became the
  Dealer of Last Resort. Princeton, NJ: Princeton University Press.

                                  43
Messerschmidt, Donald A.        1981.     “Nogar and Other Tra-
  ditional Forms of Cooperation in Nepal:              Significance
  for Development.”        Human Organization 40 (1):        40–47.
  https://doi.org/10.17730/humo.40.1.k7811l2478272681.
Minsky, Hyman P. 1986. Stabilizing an Unstable Economy. New Haven,
   CT: Yale University Press.
Ostrom, Elinor. 1990. Governing the Commons: The Evolution of Institu-
   tions for Collective Action. Cambridge: Cambridge University Press.
Polanyi, Karl. 1944. The Great Transformation: The Political and Eco-
   nomic Origins of Our Time. New York, NY: Farrar & Rinehart.
Razlog, Lia, et al.      2020.    “A Framework for Managing Gov-
   ernment Guarantees.”        MTI Discussion Paper, World Bank.
   https://doi.org/10.1596/33828.
Ruddick, William O.      2023.     “Letters from the Field: Commit-
  ment Pooling–An Economic Protocol Inspired by Ancestral Wisdom.”
  International Journal of Community Currency Research 27:54–79.
  https://doi.org/10.15133/j.ijccr.2023.004.
Ruddick, William O.. 2026. “Proto-Social Infrastructure and Stewardship
  of Commitment Pooling.” International Journal of Community Cur-
  rency Research 30 (1): 80–98. https://www.ijccr.net/article/view/9512
  (accessed 2026-04-18).
Seyfang, Gill, and Noel Longhurst. 2013. “Growing Green Money? Map-
   ping Community Currencies for Sustainable Development.” Ecological
   Economics 86:65–77. https://doi.org/10.1016/j.ecolecon.2012.11.003.
Wang, Shun.      2019.   “Social Capital and Rotating Labor Asso-
  ciations in Rural China.”      China Economic Review 53:243–253.
  https://doi.org/10.1016/j.chieco.2018.09.013.




                                 44
