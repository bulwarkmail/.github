<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bulwarkmail/branding/main/logo-with-lettering/Bulwark%20Logo%20with%20Lettering%20White%20and%20Color.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/bulwarkmail/branding/main/logo-with-lettering/Bulwark%20Logo%20with%20Lettering%20Dark%20Color.svg" />
  <img src="https://raw.githubusercontent.com/bulwarkmail/branding/main/logo-with-lettering/Bulwark%20Logo%20with%20Lettering%20Dark%20Color.svg" alt="Bulwark" width="300" />
</picture>

<br/>

**An open-source webmail suite for [Stalwart Mail Server](https://stalw.art)**

[![License: AGPL v3](https://img.shields.io/badge/license-AGPL%20v3-blue.svg)](https://github.com/bulwarkmail/webmail/blob/main/LICENSE)
[![Website](https://img.shields.io/badge/website-bulwarkmail.org-blue)](https://bulwarkmail.org)
[![Discord](https://img.shields.io/discord/1482128142939455674?color=7289da&label=discord&logo=discord&logoColor=white)](https://discord.gg/tYCujymGrT)

</div>

---

## What is Bulwark?

**Bulwark** is a self-hosted webmail suite that speaks [JMAP](https://jmap.io) (RFC 8620) natively and pairs with [Stalwart Mail Server](https://stalw.art). It bundles mail, calendar, contacts, and files behind a single login — the four apps most self-hosters end up wanting together — with a web-based setup wizard, OAuth2 / OIDC SSO, and an admin dashboard.

## Apps

- **Mail** — Threaded conversations, unified inbox, full-text search, Sieve filters, S/MIME, templates, multiple identities
- **Calendar** — Month, week, day, and agenda views with drag-to-reschedule, recurring events, iMIP invitations, and CalDAV subscriptions
- **Contacts** — Multiple address books, groups, vCard import/export, and composer autocomplete
- **Files** — Stalwart's JMAP FileNode storage with previews and folder upload

## Features

- **Setup wizard** — First-launch web UI for JMAP, OAuth, branding, and admin credentials — no `.env.local` editing
- **Admin dashboard** — Manage policy, users, plugins, themes, and audit logs from the browser
- **SSO** — OAuth2 / OIDC with PKCE and discovery, plus TOTP two-factor authentication
- **Multi-account** — HTTP/2 connection pooling across simultaneous JMAP sessions
- **Plugins & themes** — Bundled extensions plus a marketplace at [extensions.bulwarkmail.org](https://extensions.bulwarkmail.org)
- **Internationalization** — 15 languages
- **PWA** — Installable on desktop and mobile, with dark/light themes and intelligent HTML email color transformation
- **Real-time** — Push notifications via JMAP EventSource

## Repositories

| Repository | Description |
|---|---|
| [webmail](https://github.com/bulwarkmail/webmail) | The Bulwark webmail application |
| [native](https://github.com/bulwarkmail/native) | Native desktop and mobile apps |
| [legacy-proxy](https://github.com/bulwarkmail/legacy-proxy) | IMAP/SMTP bridge for legacy mail clients |
| [relay](https://github.com/bulwarkmail/relay) | Push notification relay for mobile clients |
| [website](https://github.com/bulwarkmail/website) | Official website and documentation |
| [branding](https://github.com/bulwarkmail/branding) | Logos and brand assets |

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Zustand | State management |
| JMAP (RFC 8620) | Mail protocol |
| next-intl | Internationalization |
| Stalwart | Mail server |

## Getting Started

```bash
docker run -d -p 3000:3000 ghcr.io/bulwarkmail/webmail:latest
```

Open `http://localhost:3000` and the setup wizard handles the rest. Full instructions live in the [documentation](https://bulwarkmail.org/docs) and the [installation guide](https://bulwarkmail.org/docs/getting-started/installation).

## Contributing

Bug reports, feature requests, translations, and code are all welcome. See [CONTRIBUTING.md](https://github.com/bulwarkmail/.github/blob/main/CONTRIBUTING.md) to get started, or come say hi on [Discord](https://discord.gg/tYCujymGrT).

## License

Bulwark Webmail is released under the [GNU AGPL v3](https://github.com/bulwarkmail/webmail/blob/main/LICENSE). The fork lineage's original MIT attribution is preserved in [NOTICE](https://github.com/bulwarkmail/webmail/blob/main/NOTICE).
