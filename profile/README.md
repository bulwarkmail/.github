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

**Bulwark** is a self-hosted webmail suite that speaks [JMAP](https://jmap.io) (RFC 8620) natively and pairs with [Stalwart Mail Server](https://stalw.art). Mail, calendar, contacts, and files share one login, one settings store, and one admin dashboard.

## Apps

- **Mail** — Threading, a unified inbox, full-text search, Sieve filters, S/MIME, and templates
- **Calendar** — Month, week, day, and agenda views. Drag an event to reschedule it; iMIP invitations go out on create and update.
- **Contacts** — Several address books, groups, vCard import/export, and autocomplete in the composer
- **Files** — Stalwart's native JMAP FileNode storage, browsable as a real folder tree

## Features

- **Setup wizard** — Runs on first launch and walks through JMAP, OAuth, branding, and the admin password. No `.env.local` editing.
- **Admin dashboard** — Policy, users, plugins, themes, and the audit log, all from the browser
- **SSO** — OAuth2 / OIDC with PKCE and discovery, plus TOTP two-factor
- **Multi-account** — Several accounts at once. HTTP/2 lifts the five-account cap that browser connection pooling imposes on HTTP/1.1.
- **Plugins & themes** — Bundled extensions, plus a marketplace at [extensions.bulwarkmail.org](https://extensions.bulwarkmail.org)
- **24 languages** — Including right-to-left for Arabic, Hebrew, and Persian
- **PWA** — Installs on desktop and mobile. Email colors are remapped by luminance, so mail hard-coded to dark-on-white stays readable on a dark theme.
- **Real-time** — JMAP EventSource pushes new mail as it arrives

## Repositories

| Repository | Description |
|---|---|
| [webmail](https://github.com/bulwarkmail/webmail) | The Bulwark webmail application |
| [native](https://github.com/bulwarkmail/native) | Native desktop and mobile apps |
| [legacy-proxy](https://github.com/bulwarkmail/legacy-proxy) | IMAP/SMTP bridge for legacy mail clients |
| [relay](https://github.com/bulwarkmail/relay) | Push notification relay for mobile clients |
| [plugins](https://github.com/bulwarkmail/plugins) | Example plugins and templates for the plugin API |
| [themes](https://github.com/bulwarkmail/themes) | Theme bundles for the webmail |
| [homeassistant-jmap](https://github.com/bulwarkmail/homeassistant-jmap) | JMAP mail integration for Home Assistant |
| [wordpress-jmap](https://github.com/bulwarkmail/wordpress-jmap) | WordPress plugin routing `wp_mail()` over JMAP |
| [website](https://github.com/bulwarkmail/website) | Website and documentation |
| [branding](https://github.com/bulwarkmail/branding) | Logos and brand assets |
| [dashboard](https://github.com/bulwarkmail/dashboard) | Internal observability stack for the org |

## Tech stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Zustand | State management |
| JMAP (RFC 8620) | Mail protocol |
| next-intl | Internationalization |
| Stalwart | Mail server |

## Getting started

```bash
docker run -d -p 3000:3000 ghcr.io/bulwarkmail/webmail:latest
```

Open `http://localhost:3000` and the setup wizard handles the rest. Full instructions live in the [documentation](https://bulwarkmail.org/docs) and the [installation guide](https://bulwarkmail.org/docs/getting-started/installation).

## Contributing

Bug reports, feature requests, translations, and code are all welcome. See [CONTRIBUTING.md](https://github.com/bulwarkmail/.github/blob/main/CONTRIBUTING.md) to get started, or come say hi on [Discord](https://discord.gg/tYCujymGrT).

## License

Bulwark Webmail is released under the [GNU AGPL v3](https://github.com/bulwarkmail/webmail/blob/main/LICENSE). The fork lineage's original MIT attribution is preserved in [NOTICE](https://github.com/bulwarkmail/webmail/blob/main/NOTICE).
