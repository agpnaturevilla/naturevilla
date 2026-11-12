# Backup of the live website

Taken on 12 November 2026, before the redesigned site was published.

- Source code: everything in this folder (except `_live-html/`) is an exact copy of the
  `master` branch at commit `660c2dd`, which is what agpnaturevilla.com was serving.
- Rendered pages: `_live-html/` holds the HTML that agpnaturevilla.com returned for each
  page at the time of the backup, for reference.
- Git tag: `live-backup-2026-11-12` points at the same commit.

## How to put the old site back

Fastest: in Vercel, open Deployments, find the last deployment before the redesign and
choose "Promote to Production" (or "Instant Rollback").

From git: reset the Vercel Root Directory to the repository root and deploy the tag
`live-backup-2026-11-12`, or copy this folder's contents back to the repository root.
