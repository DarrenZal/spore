---
doc_id: spore.restriction-map-examples
doc_kind: operations
status: draft
depends_on:
  - spore.restriction-maps-and-comparison-records
---

# Restriction Map Example Pack

Concrete example artifacts for the `spore.restriction-maps-and-comparison-records` protocol.

These examples are intentionally small and synthetic. They are designed to show artifact shape, failure handling, and governance semantics without implying that a real external party has ratified the example unless the artifact itself says so.

## Included Examples

- [agentic-memory-provisional-map.yaml](./agentic-memory-provisional-map.yaml) — a delegated, provisional map for comparing an external agentic-memory framework to Spore's learning field
- [grounding-ambiguous-comparison-record.yaml](./grounding-ambiguous-comparison-record.yaml) — a comparison record that stops early because the overlap is only partially grounded
- [sovereignty-boundary-map.yaml](./sovereignty-boundary-map.yaml) — a synthetic sovereignty-sensitive unilateral map showing a bounded external comparison surface
- [intentional-non-gluing-comparison-record.yaml](./intentional-non-gluing-comparison-record.yaml) — a record where one dimension is intentionally preserved as non-gluing under an active map

## Reading Notes

- The agentic-memory examples show exploratory internal learning use. They are not durable field judgments.
- The sovereignty-sensitive examples are synthetic and do **not** represent a real Nation, jurisdiction, or consent relationship. They exist to show how the protocol handles asymmetry, omissions, and revisitable non-gluing.
- The comparison record examples are richer than the protocol's minimum schema. That is deliberate: real use will often need extra provenance or review fields.
