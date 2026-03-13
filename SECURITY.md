# Security Policy

## Supported Versions

We actively maintain and provide security updates for the following versions of Bulwark:

| Version | Supported |
|---------|-----------|
| Latest (`main`) | ✅ |
| Previous minor release | ✅ |
| Older releases | ❌ |

We recommend always running the latest release.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in Bulwark, please report it privately so we can address it before public disclosure.

### How to Report

Use GitHub's **[private vulnerability reporting](https://github.com/bulwarkmail/webmail/security/advisories/new)** feature to submit a report. This keeps the details confidential until a fix is released.

Alternatively, you can reach maintainers through the GitHub Security tab in any Bulwark repository.

### What to Include

Please include as much of the following as possible to help us triage and fix the issue quickly:

- A description of the vulnerability and its potential impact
- The affected component (webmail app, configuration, API, etc.)
- Steps to reproduce the vulnerability
- Proof-of-concept code or screenshots, if available
- Your suggested fix or mitigation, if any

### Response Timeline

- **Acknowledgement**: Within 48 hours of your report
- **Initial assessment**: Within 5 business days
- **Fix & disclosure**: We aim to release a fix within 30 days for confirmed vulnerabilities, depending on severity and complexity

We will keep you informed throughout the process and credit you in the security advisory if you wish.

## Security Considerations

### Authentication

Bulwark uses **OAuth2 / OIDC with PKCE** for SSO and supports **TOTP two-factor authentication**. Credentials are never stored client-side beyond the OAuth token in session storage.

### Data Handling

- Bulwark is a frontend application that communicates directly with your Stalwart Mail Server via the JMAP protocol
- No email data is routed through or stored by Bulwark servers
- All communication between Bulwark and the mail server should be secured with TLS

### Self-Hosting

If you are self-hosting Bulwark, we recommend:

- Running behind a reverse proxy (nginx, Caddy, Traefik) with TLS termination
- Setting appropriate CSP and security headers (see the [deployment docs](https://bulwark.email/docs/deployment))
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

## Disclosure Policy

We follow a **coordinated disclosure** model. Once a fix is available and deployed, we will publish a security advisory describing the vulnerability, its impact, and the fix. We ask that you refrain from public disclosure until we have released a patch.
