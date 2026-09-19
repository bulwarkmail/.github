<p>
  <a href="https://bulwarkmail.org"><img src="https://raw.githubusercontent.com/bulwarkmail/.github/main/profile/banner.png" alt="Bulwark: webmail for Stalwart Mail Server. Mail, calendar, contacts and files in one browser client." width="100%" /></a>
</p>

<p align="center">
  <a href="https://bulwarkmail.org"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bulwarkmail/.github/main/badges/website-dark.svg" /><img src="https://raw.githubusercontent.com/bulwarkmail/.github/main/badges/website.svg" alt="website: bulwarkmail.org" height="24" /></picture></a>&nbsp;
  <a href="https://github.com/bulwarkmail/webmail/releases/latest"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bulwarkmail/.github/main/badges/release-dark.svg" /><img src="https://raw.githubusercontent.com/bulwarkmail/.github/main/badges/release.svg" alt="latest release" height="24" /></picture></a>&nbsp;
  <a href="https://github.com/bulwarkmail/webmail/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bulwarkmail/.github/main/badges/license-dark.svg" /><img src="https://raw.githubusercontent.com/bulwarkmail/.github/main/badges/license.svg" alt="license: AGPL v3" height="24" /></picture></a>&nbsp;
  <a href="https://discord.gg/tYCujymGrT"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bulwarkmail/.github/main/badges/discord-dark.svg" /><img src="https://raw.githubusercontent.com/bulwarkmail/.github/main/badges/discord.svg" alt="Discord members online" height="24" /></picture></a>
</p>

Bulwark is a self-hosted, open-source webmail client for [Stalwart Mail Server](https://stalw.art). It speaks [JMAP](https://jmap.io) natively and puts mail, calendar, contacts and files behind one login, one settings store and one admin console.

## Run it

```bash
docker run -d -p 3000:3000 ghcr.io/bulwarkmail/webmail:latest
```

Open `http://localhost:3000` and the setup wizard connects to your Stalwart server and sets the admin password. A standalone Linux tarball is attached to every [release](https://github.com/bulwarkmail/webmail/releases/latest), and the [installation guide](https://bulwarkmail.org/docs/getting-started/installation) covers both.

## What it does

- **Mail** with threads, a unified inbox, full-text search, Sieve filters, S/MIME and templates.
- **Calendar** with month, week, day and agenda views, drag to reschedule, and iMIP invitations.
- **Contacts** in several address books, with groups, vCard import and export, and autocomplete in the composer.
- **Files** on the mail server through JMAP FileNode, with office documents editable over WOPI.
- **Several accounts** signed in at once, with password and TOTP, or OAuth and OIDC single sign-on.
- **An admin console** for branding, users, settings policy, plugins, themes and the audit log.
- **Plugins and themes** from the directory at [extensions.bulwarkmail.org](https://extensions.bulwarkmail.org).
- **27 languages**, including right-to-left Arabic, Hebrew and Persian.
- **A PWA** that installs on desktop and mobile, with web push and new mail arriving in real time.

## Repositories

| Repository | What it is |
|---|---|
| [webmail](https://github.com/bulwarkmail/webmail) | The Bulwark web client |
| [native](https://github.com/bulwarkmail/native) | Android and iOS app, in beta |
| [relay](https://github.com/bulwarkmail/relay) | Push relay for the app and the PWA: FCM, Web Push and UnifiedPush |
| [legacy-proxy](https://github.com/bulwarkmail/legacy-proxy) | A JMAP server in front of an existing IMAP, SMTP, ManageSieve and CardDAV stack, pre-1.0 |
| [plugins](https://github.com/bulwarkmail/plugins) | First-party plugins and templates for the plugin API |
| [themes](https://github.com/bulwarkmail/themes) | Theme bundles for the web client |
| [extensions-directory](https://github.com/bulwarkmail/extensions-directory) | The plugin and theme directory behind extensions.bulwarkmail.org |
| [homeassistant-jmap](https://github.com/bulwarkmail/homeassistant-jmap) | JMAP mail integration for Home Assistant |
| [wordpress-jmap](https://github.com/bulwarkmail/wordpress-jmap) | WordPress plugin that sends `wp_mail()` over JMAP |
| [website](https://github.com/bulwarkmail/website) | bulwarkmail.org and the documentation |
| [branding](https://github.com/bulwarkmail/branding) | Logos, design tokens and the brand guidelines |
| [dashboard](https://github.com/bulwarkmail/dashboard) | The project's own telemetry and observability stack |

## Get involved

Bug reports, feature ideas, translations and code are all welcome. [CONTRIBUTING.md](https://github.com/bulwarkmail/.github/blob/main/CONTRIBUTING.md) explains how to start, and [Discord](https://discord.gg/tYCujymGrT) is where the project talks. Report security issues privately as described in [SECURITY.md](https://github.com/bulwarkmail/.github/blob/main/SECURITY.md).

## License

Bulwark is released under the [GNU AGPL v3](https://github.com/bulwarkmail/webmail/blob/main/LICENSE). The original MIT attribution from the project it was forked from is kept in [NOTICE](https://github.com/bulwarkmail/webmail/blob/main/NOTICE).
