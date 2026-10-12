---
doc_id: spore.connection.decentralized-trust-graph-credential-pairs
doc_kind: research
status: draft
research_subkind: bridge_note
disposition: unresolved tension
depends_on:
  - spore.project-vision
  - spore.federation-protocol
  - spore.actor-governance
relates_to:
  - spore.structural-legitimacy
  - spore.connection.protocol-society
  - spore.connection.decentralization-theater-opposition
  - spore.connection.neighbourhoods-grammars-deterministic-runtime
  - spore.positioning.canon-coverage-gaps
  - spore.canon-decision.sociality-side-b-plus-primitive
  - spore.canon-decision.power-multi-layer-decomposition
  - spore.canon-decision.spore-identity-coordination-grammar-reframe
concepts:
  - trust
  - joint-commitment
  - asymmetric-membrane
  - double-boundary
  - decentralization-theater
  - power-capture
  - protocol-society
  - reputation-market
sources:
  - url: https://youtu.be/AelpLS2pY18
    title: "Trust over IP Explainer with Kaliya Young (Protocols of Place Workshop, Kinship Earth, White Salmon WA, September 2026)"
    rid: orn:source:youtube-AelpLS2pY18
    type: primary
    version: "published 2026-10-04, 23:34; cited by [mm:ss]"
    note: >-
      YouTube auto-transcript with inferred speaker turns. Interjections attributed
      to Drummond Reed are inferences from content, so claims resting on them are
      cross-anchored on a ToIP or OpenVTC page.
  - url: https://lf-toip.atlassian.net/wiki/spaces/HOME/pages/258113643
    title: "Verifiable Relationship Credentials (VRCs), ToIP Decentralized Trust Graph Working Group"
    rid: orn:source:toip-dtg-vrc
    type: primary
    version: "page dated 2025-09-24; accessed 2026-10-11"
  - url: https://openvtc.github.io/wiki/overview
    title: "OpenVTC Ecosystem Overview"
    rid: orn:source:openvtc-wiki-overview
    type: primary
    version: "Eucalyptus coordinated release (shipped 2026-10-07), OpenVTC 0.5.0; captured 2026-10-08"
    note: Fast-moving wiki. Claims below are pinned to this capture.
  - url: https://jlinc.org/
    title: "JLINC: Data sharing under Verifiable Contractual Agreements (VCAs) with Zero-Knowledge Auditing (ZKA)"
    rid: orn:source:jlinc-spec
    type: corroborating
    version: "accessed 2026-10-11"
  - url: https://github.com/SidewaysEarth/VerifiableCommunity
    title: "Sideways Verifiable Community, Specifications Document v1.2 (Grace Rachmany)"
    rid: orn:source:sideways-verifiable-community-spec
    type: corroborating
    version: "v1.2 (2025-07-01, active version); design spec with mockups, not deployed code"
  - url: https://identitywoman.net/protocols-as-the-grammar-of-life-an-orientation/
    title: "Protocols as the Grammar of Life: An Orientation (Kaliya Young)"
    rid: orn:source:iw-protocols-grammar-of-life
    type: corroborating
    version: "posted 2026-06-25"
  - url: https://projectweave.tech/technical-depth.html
    title: "Project Weave: the protocols, the capture patterns we design against, and what's already being built"
    rid: orn:source:weave-technical-depth
    type: corroborating
    version: "accessed 2026-10-11"
  - url: https://lf-toip.atlassian.net/wiki/spaces/HOME/pages/1035829251/2026-08-12+DTG+WG+Meeting+Notes
    title: "2026-08-12 DTG WG Meeting Notes"
    rid: orn:source:toip-dtg-wg-2026-08-12
    type: corroborating
  - url: https://www.appliedtechnologylab.org/projects
    title: "Applied Technology Lab (Harvard): Projects, Keyring"
    rid: orn:source:atl-projects
    type: corroborating
  - url: https://truststackers.com/
    title: "Trust Stackers: Engineering the New Trust Layer for the Internet"
    rid: orn:source:truststackers
    type: corroborating
---

# Decentralized Trust Graph: trust edges as credential pairs

This note reads the Trust over IP Decentralized Trust Graph (DTG), as Kaliya Young and Drummond Reed presented it at the Protocols of Place workshop (September 2026) and as OpenVTC 0.5.0 implements it, against Spore's trust model and its sociality primitives. All sources are public.

The thesis: the DTG builds every trust edge out of paired one-way acts, either two credentials issued in opposite directions or a grant plus an acceptance. Each half is signed only by its issuer and revocable by that issuer alone. That is the shape of Spore's current bilateral trust edge ("either peer can revoke at any time", `federation-protocol.md:131`) and of Commitment's offer/accept cycle (`project-vision.md:50`). It is not the shape of joint-commitment, which canon defines by rescind-by-concurrence (`project-vision.md:55-56`). The DTG therefore gives Spore a running reference for the multilateral-trust layer that `federation-protocol.md:133-138` lists as Future, built without any jointly held object. Whether Spore's own multilateral layer should keep that shape, or treat federation membership as a joint-commitment, is the tension this note registers.

## 1. Artifact profile

- **What it is.** A credential family from the ToIP DTG Working Group. Its graph has nodes that are "people, devices, agents, communities, and rooms" and edges that "are credential pairs" (C2). That node set is close to Spore's own broad notion of a node (`federation-protocol.md:74-85`).
- **Edge kinds.** Verifiable Relationship Credential (VRC) pairs between peers (C1), membership as a community grant plus a member acknowledgement, and delegation as a grant plus a required acceptance (C2). Two comparators from the same field: JLINC's single counter-signed agreement (C3) and Sideways' quorum-approved community membership, revoked through the same approvals process (C6).
- **Maturity.** Running and unsettled. Seven years of development, three code bases, recipes expected to freeze in about two years, OpenVTC and Keyring as separate implementations of the vetting protocol (the wiki calls Keyring "independent", though its specifications were defined with the DTG WG), and hidden vetting (the first running piece of the privacy design) unaudited and off by default (C8).
- **Reliability.** The talk is an auto-transcript with inferred speakers. The OpenVTC wiki moves fast and is pinned here to the Eucalyptus capture. The Sideways document is a design spec.
- **Independence.** The sources share one network. Kaliya gives the talk and writes the posts, speaks of "what we're doing at Project Weave" [19:54], and is listed on the Sideways v1.2 use-case team. Sideways cites the P2P Foundation for its "membranes" requirement, and the P2P Foundation wiki also fed Spore's canon review. Agreement among these sources is one community's view, not convergence across independent traditions.

## 2. Mapping to Spore canon

- **Trust model (`federation-protocol.md:121-138`).** Spore's current edge is bilateral: out-of-band discovery, a deferred-approval handshake, SAS verification, mutual activation, and unilateral revocation (`:127-131`). That is a pair edge. The Future list maps onto OpenVTC as follows. Invite tokens correspond to invitation credentials. Transitive trust corresponds to traceable trust paths. Organizational endorsement corresponds to community-issued membership plus `endorses/1` statements (C2, C8). Reputation has no scored equivalent in the sources: Sideways chose "Good Standing" over reputation scores (C6), and the talk names negative reputation as unsolved (C4).
- **Commitment and joint-commitment (`project-vision.md:50`, `:55-56`).** The grant/accept and issue/issue shapes match Commitment's offer/accept. No source in the set encodes rescind-by-concurrence (C1, C2, C3). See §3a.
- **Membrane (`project-vision.md:40-43`).** A community that issues and revokes membership credentials performs Membrane authorize and attest, on the social side of the double boundary. A steward quorum holding that power is the asymmetric-membrane axis (C5, C6, C7). See §3b.
- **Identity (`project-vision.md:37`, `federation-protocol.md:93`).** DIDs sit in the cryptographic-identity bucket at Membrane signing and federation signing, so no re-disposition is needed. Whether a deployment meets the self-sovereign identity invariant depends on key custody. OpenVTC's signing agent can be self-hosted or run on a managed "VTA Farm", and the wiki answers the custody question for the Farm: the admin key is "generated on the user’s machine and imported — so the Farm hosts your agent but never controls it" (wiki §Layer 2: Key Management and Signing). This note treats that as the project's stated design, not an audited property.
- **Grammar (`project-vision.md:10`).** Kaliya's protocol writing uses "grammar" at the social-technical protocol altitude (C10). See §3d.

## 3. What this sharpens or tests

### 3a. A trust protocol built without joint-commitment

Every edge type in the source set is assembled from one-way signed acts. A VRC is two credentials, one issued each way, each signed only by its issuer and revocable by that issuer (C1). OpenVTC applies the same pattern to membership and delegation (C2). The nearest thing to a single shared object, JLINC's agreement, is signed and then counter-signed, and its public spec gives no rescission procedure (C3). None of these encodes rescind-by-concurrence, which is what separates joint-commitment from Commitment in canon (`project-vision.md:55-56`). What they encode is offer/accept plus mutual attestation.

This fits canon rather than challenging it. ADR-0050 admitted joint-commitment with earning-test (a), protocol-surface specifiability, recorded as marginal (`project-vision.md:62`, `:107`). The sources show a deliberate choice, not a failed attempt at a joint object: "it's not one credential that we're both signing" (C1) states a design. This note reads that choice as consistent with the marginal rating, not as evidence that a joint layer cannot be specified. The choice also carries a design argument. Issuer-side revocation means no party can be held in a relationship by the other, which is the property canon already gives Spore's own bilateral edge (`federation-protocol.md:131`). The act canon names as the clearest irreducibly joint case, federation-scale protocol-version adoption (`project-vision.md:58`), does not appear as an edge type in any source here.

### 3b. Communities as admission membranes, not joint-actors

A steward quorum that admits and removes members is asymmetric-membrane authority (`project-vision.md:43`), and `actor-governance.md:110` already requires such gate decisions to be recorded and contestable. Two actor-governance commitments pull apart on these sources. §4.8 requires revocation to mirror the admission pathway (`actor-governance.md:175`). Sideways meets it at the procedure level, since revocation runs the same approvals process as admission, although its use cases let a group set different thresholds for the two (C6). The cited DTG sources describe issuer-side revocation of VRCs (C1) but no membership-revocation pathway, so §4.8 is not evidenced for them. §4.4 requires joint-actor membership changes to be ratified by concurrence (`actor-governance.md:120`), and no source does that. The closest case is OpenVTC's peer-identity vetting, in which existing members sign `vetted/1` statements that the community counts under a published criterion (C2). Members take part in admission, but through separate statements counted against a threshold, not concurrence in one joint act, and no source gives them a part in exit. A DTG community is therefore an admission membrane under §4.1, not a joint-actor in Spore's sense, unless its own governance adds concurrence above the credential layer.

Canon text currently allows both readings for Spore's own federation membership. A "federation oath" is listed as a macroscale joint-commitment (`project-vision.md:58`), while the operative trust edge is unilaterally revocable (`federation-protocol.md:131`).

OpenVTC also says that "no single organization can revoke your identity or gatekeep your participation" (C2), while every community gates its own membership. The two statements are compatible because gating is plural. No community gates the network, and a member who leaves keeps the relationship credentials peers issued to them, each revocable only by its own issuer. Spore states the same structural move as forkability (`structural-legitimacy.md:42`), and Weave's test, "can you leave?", gives it an operational check (C9).

### 3c. Multisig distributes the key but does not remove it

Kaliya presents multisig stewardship of issuing wallets as the remedy for groupware built in "an authoritarian system of corporations and control" (C7). OpenVTC implements N-th-approval administration with break-glass, and Sideways lets a group require approval by a quorum of administrators (C7). Spore canon already names "multi-sig membership control" and "emergency-pause capability" as admin-key-equivalents that federation-protocol must surface (`federation-protocol.md:62`), following `decentralization-theater-opposition.md:71`. Both views hold. A quorum spreads who holds the key, which addresses single-admin capture. A break-glass path is still an exception-deciding power, and the quorum is still a gatekeeper class (power-capture mechanism 3, gatekeeper-role accrual). The sources do not claim otherwise, but they do not say who holds break-glass either.

### 3d. A sibling use of "grammar"

"Protocols as the Grammar of Life" shares Spore's claim that social and technical protocols are the same kind of thing (C10). It names as formative Galloway's *Protocol*, which Spore integrated through `spore.connection.protocol-society` (`protocol-society.md:93`). That note's test is whether a framing treats protocol as a mode of control rather than its absence (`protocol-society.md:134`). Read alone, Kaliya's definition, "agreements about how to coordinate without anyone being in charge of everyone else", sits close to the absence reading. In this note's reading the post as a whole meets the test, because it treats unseen technical protocols as governance (C10). It diverges on scope. Kaliya asserts that biological protocols are "not a metaphor" and that the wood wide web "is not a poetic image". Spore gives the mycorrhizal metaphor no mechanical weight (`federation-protocol.md:14`) and scopes its identity sentence to "the scales it has reached" (`project-vision.md:10`; `0091-spore-identity-coordination-grammar-reframe.md:76`). This note cites her as a sibling use of "grammar", next to the Neighbourhoods runtime grammar (`spore.connection.neighbourhoods-grammars-deterministic-runtime`), and does not adopt the universality claim.

## 4. Limits and open questions

1. **Transcript reliability.** The [13:24] correction and the Linux kernel account are attributed to Drummond Reed by inference. C1 rests on the ToIP VRC page, not on the speaker. C5's community-issuer half is cross-anchored on the wiki (C2), and its land-issuer half rests on the transcript alone. C4 rests on the transcript alone and argues from absence, so it is rated medium.
2. **Version drift.** OpenVTC claims are pinned to the Eucalyptus capture of 2026-10-08. The DTG Credentials Core Specification is at Working Draft 02, September 2026 (wiki §Layer 4: Trust Credentials).
3. **JLINC.** The missing rescission procedure is a claim about the public spec page, not about deployed JLINC agreements.
4. **Which three code bases.** Kaliya mentions three [18:22] without naming them. Public sources name OpenVTC and Keyring as independent implementations of the vetting protocol. A TypeScript P2P trust stack shown to the DTG WG is a plausible third, and its link to Trust Stackers is an inference (C8).
5. **Negative path.** Revocation propagation and negative reputation are open in the sources (C4), and Spore's Future reputation item is equally unspecified. Neither side should be read as having solved it.
6. **Land as issuer.** Land "with a mesh network installed" issuing stewardship credentials is presented by Kaliya as "Frank's work" and described as "a potential vision" [21:30]. The talk gives only the first name, and this note does not identify the project further from public sources. It is the only resource-side issuer described in the source set and so would touch the resource side of the double boundary (`project-vision.md:42`). A land-issued credential is signed by whoever holds the device key. Who that is, and whether it needs the operator-of-record declaration `actor-governance.md:87` asks of AI actors, is open.
7. **Peer versus group vouching.** Sideways argues that individual-to-individual vouching "carries too little risk to the person vouching, and too little enforcement" (C6), while VRCs are individual-to-individual. How peer edges and community edges should weigh against each other is open in the sources.
8. **Scope held.** The talk and the grammar-of-life post refer to Indigenous tribes and Indigenous protocols. This note does not map them. `canon-coverage-gaps.md:72-86` (§2.3) requires Indigenous-led or consented sources for such mapping, and its triggers have not fired. The "archipelago" of permaculture schools, ecovillages, land projects and tribes [15:39] would be a mixed-actor-class field in the sense of §2.2 (`canon-coverage-gaps.md:56-70`), but it is a described possibility with no governance artifacts, so §2.2 trigger 1 has not fired either.

## 5. Disposition

**Disposition: unresolved tension.** The DTG supplies a running reference for multilateral trust built entirely from unilateral, issuer-revocable credential pairs and community-issued membership. Spore canon holds two readings of federation membership, joint-commitment (`project-vision.md:58`) and unilaterally revocable trust edge (`federation-protocol.md:131`), and does not yet say which governs its Future multilateral layer. This note does not resolve that, admit a slug, or edit federation-protocol's Future list. R1 to R4 record what a future revision would need to address. No deferral trigger is claimed to have fired. Notes in sibling repos that draw on the same sources should `relates_to` this doc_id rather than restate the credential-pair analysis.

## 6. Claim Register

**C1** [confidence: high] [anchor: §Notes · orn:source:toip-dtg-vrc]
The ToIP DTG Working Group specifies that "VRCs are issued in pairs—one in each direction", that "the VRC is only signed by the issuing party’s DID", and that "This VRC can expire or be revoked by the issuer". A verifiable relationship is two unilateral attestations, each revocable by its own issuer, not one jointly signed object. The talk gives the same correction to an audience member who described the VRC as a credential both parties sign: "it's not one credential that we're both signing" (video [13:24], speaker inferred as Drummond Reed).

**C2** [confidence: high] [anchor: §Layer 4: Trust Credentials · orn:source:openvtc-wiki-overview]
In OpenVTC's Eucalyptus release (OpenVTC 0.5.0, October 2026) every DTG edge type is a pair of one-way acts. "A relationship is verified through a bi-directional pair of VRCs (one each direction forms a complete edge)." "Membership is a bi-directional pair: a grant from the community and an acknowledgement from the member". A delegation is "a grant plus a required acceptance". The graph's nodes are "people, devices, agents, communities, and rooms" and its "edges are credential pairs". Admission rests on peer-identity vetting: "existing members check an applicant in person or on video and sign `vetted/1` statements the community counts under a published criterion". Under §The First Person Network the trust graph is "built from mutual attestations between peers", and "no single organization can revoke your identity or gatekeep your participation".

**C3** [confidence: high] [anchor: §1.1 · orn:source:jlinc-spec]
JLINC's Verifiable Contractual Agreement is the one single-object design in the source set. "The VCA is chosen and cryptographically signed by the initiating party and offered to the receiving party. The receiving party, if it recognizes and accepts the VCA, counter-signs it and returns it to the initiating party." "Both parties retain a copy of the signed and counter-signed VCA". The jlinc.org specification page, as accessed, defines no termination, rescission or revocation procedure for a VCA.

**C4** [confidence: medium] [anchor: §13:45-14:31 · orn:source:youtube-AelpLS2pY18]
For peer VRC exchange the talk states "No registry" and "a peer-to-peer trust graph with no god's-eye view" [13:45]. Asked how to untrust someone, the reply named "Revocation of your credential and removal from a trust registry" as "much more complicated questions" and the talk moved on [14:21]. Earlier Kaliya said "we need to talk seriously about how we manage negative reputation" because "people don't hold negative reputation and share it with others" [7:01]. The negative path is not specified in the public talk. Medium because this is an argument from absence on an auto-transcript, and the reply to the [14:21] question is unattributed and cut off.

**C5** [confidence: high] [anchor: §14:40 · orn:source:youtube-AelpLS2pY18]
Communities are first-class issuers: "the community can issue credentials, a verifiable membership credential of belonging to a community. And this is where we get to the option of communities building membranes around themselves" [14:40]. Kaliya also points to "Frank's work, where they're really looking at how people get credentials for their work on the land", in which land "with a mesh network installed" can "be the issuer of credentials about your care and stewardship of land", within "a potential vision" [21:30]. Community issuance is cross-anchored on the wiki's membership credentials (C2). The land-issuer passage rests on the transcript alone.

**C6** [confidence: high] [anchor: §Revoke membership, upgrade or downgrade · orn:source:sideways-verifiable-community-spec]
Sideways' Verifiable Community spec (v1.2) calls its design "a gatekeeping system that can create some kind of web of connections based on shared values" and chooses a simplified “Good Standing” system over reputation scores. Its hypothesis is "certifying entities that vouch for individuals, and take on group responsibility for the individuals’ behavior", and it argues that "Vouching on an individual-to-individual basis carries too little risk to the person vouching, and too little enforcement." Each group sets its own approval rules, which may require "X of N permissions" among administrators, and "The procedure for revocation is the same as for adding a new member, including the approvals process." The use cases still let thresholds differ: any one of 38 Nuncastian Priests can issue a revocable certificate, while revocation requires three.

**C7** [confidence: high] [anchor: §Where Things Are Heading · orn:source:openvtc-wiki-overview]
Kaliya presents multisig as the remedy for single-admin control: "so much of our group-ware is built because it's in an authoritarian system of corporations and control, and we need multi-sigs on the wallets that issue these credentials and community stewardship of community credential issuance" (video [15:39]). OpenVTC implements this under "Governed by more than one person": "an unrestricted administrator needs another administrator’s consent, and consequential actions wait in an action list until the N-th approval", with "Separation of duties and break-glass". Sideways lets each group require approval by more than one administrator (C6).

**C8** [confidence: medium] [anchor: §Where Things Are Heading · orn:source:openvtc-wiki-overview]
The DTG is running but unsettled. Kaliya says the infrastructure "has been in development for 7 years" [17:41], that "We've got three different code bases" being made to interoperate [18:22], and that "in about 2 years those protocols will freeze" [19:54]. OpenVTC's Eucalyptus release met the Linux kernel pilot's V0 vetting target, Keyring became "the stack's second independent implementation of the vetting protocol", and hidden vetting "is unaudited and off by default". The Applied Technology Lab says its engineers defined Keyring's technical specifications "In collaboration with the Linux Foundation’s Decentralized Trust Graph working group" (orn:source:atl-projects). The 2026-08-12 DTG WG notes record Erika Bjune showing "the P2P trust stack, designed to work from the edge and very independently, in Typescript" (orn:source:toip-dtg-wg-2026-08-12). That this is the stack Trust Stackers describes building, "the open P2P Trust Stack" (orn:source:truststackers), is an inference. OpenVTC carries analogues of Spore's Future trust items: invitation credentials for "the bootstrap of new participants into communities and rooms", trust paths that "Anyone can trace", and an `endorses/1` statement predicate.

**C9** [confidence: medium] [anchor: §Capture patterns we design against · orn:source:weave-technical-depth]
Project Weave, which in Kaliya's account brings the DTG protocols to local communities while they are "still malleable" [19:54], names the steward failure mode as becoming "operationally indispensable, then governance-indispensable, then the platform the protocols were meant to replace", and sets a behavioural test for any architecture: "The test is behavioural: can you leave?" It treats groups as protocol primitives "with their own identity, membership, governance, and trust signals", and the DTG as making trust portable "without merging governance". The talk states the same goal at the credential layer: "You take your keys and your credentials and you're not locked in" [18:22].

**C10** [confidence: high] [anchor: §Technical Protocols Are the Same Kind of Thing · orn:source:iw-protocols-grammar-of-life]
Kaliya defines protocols as "agreements about how to coordinate without anyone being in charge of everyone else" and holds that "The technical protocols and the social protocols are the same kind of thing." "The grammar is the same; only the medium is different." She extends the claim to biology without qualification: "This is not a metaphor. This is literally how living systems work." Of mycorrhizal exchange she writes: "The wood wide web is not a poetic image." She names Galloway's *Protocol: How Control Exists After Decentralization* as formative, and under §The Protocols We Can’t See Are the Ones Running Us, citing Easterling and Terranova, says of everyday tool choices: "None of them are technical neutrality. All of them are governance".

## 7. Review Claims

**R1** [review claim] [target: spore.federation-protocol] [concept: trust]
When the Multilateral Trust (Future) list in federation-protocol (invite tokens, transitive trust, organizational endorsement, reputation) is next revised, review whether its items should be specified as compositions of unilateral, issuer-revocable credential pairs, the shape the DTG uses and the shape of Spore's current bilateral edge ("either peer can revoke at any time"). The DTG has running analogues for three of the four items and leaves reputation, revocation propagation and negative reputation open. A revision should state which items keep unilateral revocability and should record the negative path as unspecified rather than solved.
*R1 is supported by C1, C2, C4, C8.*

**R2** [review claim] [target: spore.actor-governance] [concept: joint-commitment]
Actor-governance §4.4 requires joint-actor membership changes to be ratified by concurrence, and §4.8 requires revocation to mirror the admission pathway. Credential-issuing communities in the DTG and Sideways sense admit by grant plus acknowledgement, counted peer vetting, or administrator-quorum approval, and revoke from the issuer side. Sideways' same-procedure revocation satisfies §4.8, the cited DTG sources give no membership-revocation pathway to test against §4.8, and neither satisfies §4.4. Review whether the doctrine should say explicitly that such a community is an admission membrane under §4.1 and §4.3 Layer 3, not a joint-actor, unless concurrence is added above the credential layer. The same review should note that canon currently lists "federation oath" as a joint-commitment while Spore's trust edge is unilaterally revocable.
*R2 is supported by C1, C2, C5, C6.*

**R3** [review claim] [target: spore.federation-protocol] [concept: decentralization-theater]
The decentralization-theater declination names "multi-sig membership control" and "emergency-pause capability" as admin-key-equivalents canon must surface. The DTG sources present multisig stewardship as the remedy for authoritarian groupware, and OpenVTC implements N-th-approval administration with break-glass. If Spore later specifies community-issued membership in its multilateral trust layer, review that the four-surface declination applies to quorum-held issuance keys and names the break-glass holder, rather than treating multisig as discharging the declination.
*R3 is supported by C5, C7.*

**R4** [review claim] [target: spore.structural-legitimacy] [concept: power-capture]
Structural legitimacy names forkability as the last-resort corrective when coupling breaks. The DTG and Weave give it a testable form at the identity layer: keys and credentials leave with the holder, and Weave's test of any architecture is "can you leave?". Credential pairs make the scope of exit precise. A member who leaves keeps the relationship credentials peers issued to them, each revocable only by its issuer, and loses community-issued membership, which the community can revoke. Review whether the Forkability surface should distinguish what survives exit (peer-issued attestations) from what does not (collectively issued standing).
*R4 is supported by C2, C8, C9.*
