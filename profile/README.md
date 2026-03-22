<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bulwarkmail/branding/main/logo-with-lettering/Bulwark%20Logo%20with%20Lettering%20White%20and%20Color.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/bulwarkmail/branding/main/logo-with-lettering/Bulwark%20Logo%20with%20Lettering%20Dark%20Color.svg" />
  <img src="https://raw.githubusercontent.com/bulwarkmail/branding/main/logo-with-lettering/Bulwark%20Logo%20with%20Lettering%20Dark%20Color.svg" alt="Bulwark" width="300" />
</picture>

<br/>

**A modern, open-source webmail client built for [Stalwart Mail Server](https://stalw.art)**

[![License: AGPL v3](https://img.shields.io/badge/license-AGPL%20v3-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/website-bulwarkmail.org-blue)](https://bulwarkmail.org)

</div>

---

## What is Bulwark?

**Bulwark** is a modern, open-source webmail client that uses the [JMAP protocol](https://jmap.io) (RFC 8620) and pairs natively with [Stalwart Mail Server](https://stalw.art). It brings email, calendar, and contacts together in one clean, fast interface.

## Features

- **Email** — Full management with compose, threads, filters, templates, and advanced search
- **Calendar** — Event management with drag-and-drop scheduling and iTIP invitation handling
- **Contacts** — JMAP-synced contact management with vCard import/export and groups
- **Sieve Filters** — Server-side email filtering with a visual rule builder
- **Identities** — Multiple sender identities with per-identity signatures
- **OAuth2 / OIDC** — SSO support with PKCE, plus TOTP two-factor authentication
- **Internationalization** — 8 languages: English, French, Japanese, Spanish, Italian, German, Dutch, Portuguese
- **Themes** — Dark and light mode with system preference detection
- **Real-time** — Push notifications via JMAP EventSource
- **Mobile** — Responsive design with bottom tab navigation

## Repositories

| Repository | Description |
|---|---|
| [webmail](https://github.com/bulwarkmail/webmail) | The Bulwark webmail application |
| [website](https://github.com/bulwarkmail/website) | Official website and documentation |
| [branding](https://github.com/bulwarkmail/branding) | Logos and brand assets |

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Zustand | State management |
| JMAP (RFC 8620) | Mail protocol |
| next-intl | Internationalization |
| Stalwart | Mail server |

## Getting Started

Visit the [official documentation](https://bulwarkmail.org/docs) or jump straight to [installation](https://bulwarkmail.org/docs/getting-started/installation).

## Contributing

We welcome contributions of all kinds — bug reports, feature requests, translations, and code. See [CONTRIBUTING.md](https://github.com/bulwarkmail/.github/blob/main/CONTRIBUTING.md) to get started.

## License

All Bulwark projects are released under the [MIT License](https://github.com/bulwarkmail/webmail/blob/main/LICENSE).
