# Security Policy

## Supported versions

We provide security updates for:

| Version | Supported |
|---------|-----------|
| Latest (`main`) | ✅ |
| Previous minor release | ✅ |
| Older releases | ❌ |

We recommend always running the latest release.

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in Bulwark, please report it privately so we can address it before public disclosure.

### How to report

Use GitHub's **[private vulnerability reporting](https://github.com/bulwarkmail/webmail/security/advisories/new)** feature to submit a report. This keeps the details confidential until a fix is released.

Alternatively, you can reach maintainers through the GitHub Security tab in any Bulwark repository.

### What to include

Please include as much of the following as possible to help us triage and fix the issue quickly:

- A description of the vulnerability and its potential impact
- The affected component (webmail app, configuration, API, etc.)
- Steps to reproduce the vulnerability
- Proof-of-concept code or screenshots, if available
- Your suggested fix or mitigation, if any

### Response timeline

- **Acknowledgement**: Within 48 hours of your report
- **Initial assessment**: Within 5 business days
- **Fix & disclosure**: We aim to release a fix within 30 days for confirmed vulnerabilities, depending on severity and complexity

We will keep you informed throughout the process and credit you in the security advisory if you wish.

## Security considerations

### Authentication

Bulwark uses **OAuth2 / OIDC with PKCE** for SSO and supports **TOTP two-factor authentication**. With "Remember me" enabled, credentials are encrypted with AES-256-GCM and held in an httpOnly cookie that expires after 30 days. Leave it off and the session ends with the browser session.

### Data handling

- The Bulwark project runs no servers that touch your mail. Everything lives on the instance you host.
- Most JMAP traffic goes from the browser straight to your Stalwart server. Some features route through your own instance instead: CalDAV, WebDAV, iCal fetching, and the optional translation proxy.
- Settings sync, when enabled, writes per-account preferences to `SETTINGS_DATA_DIR` on your instance, encrypted at rest.
- Secure all traffic between the browser, your instance, and the mail server with TLS.

### Self-hosting

If you are self-hosting Bulwark, we recommend:

- Running behind a reverse proxy (nginx, Caddy, Traefik) with TLS termination
- Setting appropriate CSP and security headers (see the [deployment docs](https://bulwarkmail.org/docs/deployment))
- Keeping your Stalwart Mail Server and Bulwark up to date

## Scope

The following are **in scope** for security reports:

- Authentication and authorization bypasses
- Cross-site scripting (XSS) in the webmail client
- Cross-site request forgery (CSRF)
- Information disclosure (exposure of email content, credentials, or tokens)
- Injection vulnerabilities
- Insecure default configurations

The following are **out of scope**:

- Vulnerabilities in third-party dependencies (please report those upstream)
- Issues requiring physical access to the server
- Social engineering attacks
- Theoretical vulnerabilities without a practical exploit

## Disclosure policy

We follow a **coordinated disclosure** model. Once a fix is available and deployed, we will publish a security advisory describing the vulnerability, its impact, and the fix. We ask that you refrain from public disclosure until we have released a patch.
