# Commitment Evidence Capture Checklist

How to produce the first `real_record` commitment evidence artifact. Two capture paths: direct participation (Victoria workshop) and external observation (Grassroots Economics on-chain data).

## Path A: Victoria Workshop Capture (May-June 2026)

First-person operational evidence from BKC pilot pools.

### Before the Workshop

- [ ] Confirm which pool the commitment enters (Victoria Landscape Hub or Cascadia Bioregion Stewardship)
- [ ] Have the commitment-evidence-template.md open during the session
- [ ] Know the commitment lifecycle states: PROPOSED → VERIFIED → ACTIVE → EVIDENCE_LINKED → REDEEMED

### During: Capture at Commitment Creation

Record these at the moment the commitment is proposed:

| Field | What to capture | Where to find it |
|-------|----------------|-----------------|
| `commitment_ref` | Pool-qualified identifier (e.g., `bkc.victoria.garry-oak-restoration-2026q2`) | Assign at proposal time |
| `pool_ref` | Which pool (e.g., `bkc.victoria`) | Workshop context |
| `epistemic_mode` | delivery / discovery / stewardship / risk / mixed | Assess from commitment scope — is the outcome well-defined (delivery) or uncertain (discovery)? |
| `mode_rationale` | One sentence: why this mode | Your judgment at the time |
| `consequence_bearers` | Who bears material consequences if this succeeds/fails | Name specific people or groups present at the workshop |
| `standing_context` | Does the committing agent have security, capability, and membership conditions for effective participation? | Assess from what you know about the person/group |
| `state` | Initial state (usually `proposed`) | Lifecycle position at capture time |
| `coordination_context` | What governance arrangement oversees this commitment | Workshop governance structure |

### After: Track State Transitions

- [ ] Note when commitment moves PROPOSED → VERIFIED (who verified, on what basis)
- [ ] Note when commitment moves VERIFIED → ACTIVE (what activated it)
- [ ] If evidence is linked: what evidence, who linked it
- [ ] If redeemed: what was delivered, who acknowledged fulfillment
- [ ] If disputed: what was contested, by whom, resolution

### Write the Artifact

- [ ] Use template at `docs/research/evidence/templates/commitment-evidence-template.md`
- [ ] Set `evidence_posture: real_record`
- [ ] File in `docs/research/evidence/commitments/`
- [ ] Naming: descriptive slug (e.g., `victoria-garry-oak-restoration-2026q2.md`)
- [ ] Source Basis section: cite the workshop, participants, any on-chain records

### What Makes It Real (vs. Seed or Stub)

A `real_record` requires:
1. The commitment actually happened (not illustrative/hypothetical)
2. You observed it directly or have primary source documentation
3. Unknown fields are marked unknown, not inferred
4. The source basis section cites specific operational sources

---

## Path B: Grassroots Economics External Observation

Annotate a production-scale commitment from Ruddick/GE/Sarafu/CLC operations. This is externally-observed evidence with a different posture.

### Available Data Sources

| Source | What it provides | Access |
|--------|-----------------|--------|
| Celo mainnet (deployed July 2023) | On-chain voucher issuance, swaps, pool activity | Public blockchain explorer or Celo SDK |
| Sarafu.network | Pool metadata, voucher directories, community profiles | Public web |
| GE published reports | Impact data: 26,367 users, 188 active pools, 745 vouchers, $320K+ swap volume, 1,200 acres restored, 84% positive income impact | Published documents |
| Will Ruddick's writing | Operational rationale, metabolic model, design decisions | Substack, academic papers |

### Capture Steps

1. **Select one commitment or pool to annotate.** Recommended: a single voucher issuance event (a community creating a Community Inclusion Currency / CIC) — this is the atomic commitment act in the GE model.

2. **Gather on-chain data:**
   - [ ] Voucher contract address on Celo
   - [ ] Issuance date and parameters (supply, expiry, demurrage rate if applicable)
   - [ ] Pool membership (which pool accepted this voucher)
   - [ ] Settlement history (swap events, redemptions)

3. **Map to the commitment evidence schema:**

   | Evidence field | GE equivalent |
   |---------------|---------------|
   | `commitment_ref` | Voucher contract address or pool:voucher identifier |
   | `pool_ref` | CIC pool or Sarafu network pool ID |
   | `epistemic_mode` | Usually `delivery` (vouchers backed by productive capacity) or `stewardship` (restoration commitments) |
   | `consequence_bearers` | Issuing community members, trading partners |
   | `standing_context` | Community onboarding process, GE field team verification |
   | `state` | Map from on-chain state (minted → active → redeemed/expired) |
   | `coordination_context` | GE's community currency governance model |

4. **Write the artifact:**
   - [ ] Set `evidence_posture: real_record` (the commitment is real and on-chain)
   - [ ] Note in Source Basis that this is externally observed, not first-person
   - [ ] Cite specific on-chain transactions or published reports as source basis
   - [ ] File in `docs/research/evidence/commitments/`

### Evidence Posture for External Observation

External observation of production-scale data IS `real_record` — the commitment genuinely happened and is verifiable on-chain. The distinction from Path A is not about evidence quality but about the observer's relationship: first-person participant vs. third-party annotator. Note this in the Source Basis section.

### What NOT to Do

- Don't infer internal governance details you can't verify
- Don't assume GE's operational model maps 1:1 to Spore's commitment lifecycle
- Don't conflate aggregate statistics (26K users, 188 pools) with individual commitment annotation — pick one and go deep
- Don't treat published impact numbers as commitment-level evidence; they are population-level outcomes

---

## After Either Path

- [ ] Update `docs/research/planning/evidence-stack-phase-2-implementation.md` to record the first production evidence artifact
- [ ] Update evidence README if the commitments directory state has changed
- [ ] Consider whether the captured commitment reveals any schema gaps in the template
