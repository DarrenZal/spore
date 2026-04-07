# Evidence Templates

Reusable templates for evidence artifacts. Copy the relevant template, fill in the fields, and place the result in the appropriate subdirectory.

## Available Templates

| Template | Target Directory | When To Use |
|----------|-----------------|-------------|
| [commitment-evidence-template.md](commitment-evidence-template.md) | `commitments/` | Annotating a BKC pool commitment with epistemic-mode, consequence, and standing metadata |
| [decision-trace-template.md](decision-trace-template.md) | `decisions/` | Recording a governance decision with authority-consequence coupling |
| [revision-event-template.md](revision-event-template.md) | `revisions/` | Recording a revision to a governance artifact with depth classification |

## Rules

- Templates are not evidence. Filling in a template does not create proof.
- Set `evidence_posture` honestly. If the source is repo documentation, it is `seed_record`. If the source is an illustrative example, it is `source_incomplete_stub`. Only use `real_record` for data grounded in observed operational events or documented governance actions.
- Leave unknown fields as `unknown` or empty rather than inferring plausible values.
- Do not hard-code Johar theory categories as if already validated. The `epistemic_mode` field uses `unclassified` as a legitimate default.
