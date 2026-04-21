---
doc_id: spore.planning.phase-9-merge-manifest-convention
doc_kind: planning
status: draft
depends_on: []
---

# Phase 9 Merge Manifest Convention

This document records the topology-specific merge contract authorized by `reframing-repo-topology-trunk` and ratified by `spore:ADR-0020 repo-topology-ratification`.

## Purpose

Phase 9 propagation already depends on near-synchronous merges across Spore, Intelligence Commons, and Poietic Match. This convention makes each coordinated merge set auditable instead of leaving the cross-repo merge boundary to operator memory.

## Carrier

Every coordinated merge set must have one committed manifest in Spore:

`tmp/merge-manifests/<round-slug>.md`

That file is the merge carrier and audit artifact for the set.

## Required Manifest Fields

Each manifest must record, at minimum:

- proposal or ADR bundle name;
- repos in scope;
- branch names and PR identifiers;
- head SHAs for Spore, IC, and PM before merge;
- readiness checks run for each repo;
- protection-state label for each repo: `verified`, `unverified`, or `PR-only`;
- intended merge order;
- final merge SHAs and timestamps, or the fallback artifact used if the set did not complete.

## Protection-State Handling

Until independently verified, `IC` and `PM` are treated as `PR-gated / protection-unverified`.

That means:

- no manifest may assume API-level branch protection on IC or PM without recorded evidence;
- the manifest must say whether a repo's enforcement status is verified or uncertain;
- uncertainty is not silent success. It is a tracked condition of the merge set.

## Failure Handling

Default merge order remains `Spore -> IC -> PM`.

If Spore merges and either downstream repo fails because of conflict, CI, or branch-protection rejection:

1. revert Spore through normal PR flow, or
2. publish `tmp/partial-merge-deferral-<ISO>.md` and leave the dependent repos on `corpus-review/v1` until re-attempted.

## Retention

Merge manifests and partial-merge deferral memos remain committed audit artifacts. They are not scratch notes.
