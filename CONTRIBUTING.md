# Contributing to Bulwark

Thank you for your interest in contributing to Bulwark! We welcome contributions of all kinds — bug reports, feature requests, documentation improvements, translations, and code.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How to Contribute

### Reporting Bugs

Before opening a bug report:

- Check the [existing issues](https://github.com/bulwarkmail/webmail/issues) to avoid duplicates
- Make sure you are reproducing the issue on the latest version

When filing a bug report, please include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots or screen recordings if relevant
- Your environment (OS, browser, Bulwark version, Stalwart version)

### Suggesting Features

- Open a [feature request issue](https://github.com/bulwarkmail/webmail/issues/new?template=feature_request.yml) with a detailed description
- Explain the problem you're solving and why this feature would be valuable
- Include mockups or examples if helpful

### Code Contributions

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a feature branch: `git checkout -b feature/my-feature`
4. Make your changes following the code style guidelines below
5. Run checks: `npm run typecheck && npm run lint`
6. Commit using the [conventional commits](#commit-message-convention) format
7. Push to your fork and open a Pull Request

### Development Setup

```bash
git clone https://github.com/your-username/webmail.git
cd webmail
npm install
cp .env.dev.example .env.local
npm run dev
```

The `.env.dev.example` enables the built-in mock JMAP server so you can develop without an external mail server.

**Code quality commands:**

```bash
npm run typecheck   # TypeScript type checking
npm run lint        # ESLint
npm run lint:fix    # Auto-fix lint issues
npm run build       # Production build
```

These checks run automatically on commit via Husky pre-commit hooks.

## Code Style

- Use **TypeScript** throughout — define proper types and avoid `any`
- Use **Tailwind CSS** for styling — avoid custom CSS where possible
- Follow existing code patterns and folder structure
- Use `"use client"` directive only when necessary
- Reusable UI primitives go in `components/ui/`
- Custom hooks go in `hooks/`
- State management uses **Zustand** stores in `stores/`

## Internationalization (i18n)

Bulwark supports 8 languages. When adding user-facing text:

1. **Never hardcode strings** — always use translations via `next-intl`:
   ```tsx
   const t = useTranslations("namespace");
   return <div>{t("key")}</div>;
   ```
2. **Translation files** live in `/locales/{lang}/common.json`
3. **Add new strings** to at least the English (`en`) and French (`fr`) files
4. Contributions for other languages are very welcome

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Purpose |
|---|---|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation changes |
| `style:` | Code style / formatting |
| `refactor:` | Code refactoring |
| `test:` | Adding or updating tests |
| `chore:` | Maintenance tasks |

Examples:
```
feat: add email threading support
fix: resolve attachment download issue on mobile
docs: update keyboard shortcuts guide
chore: upgrade next.js to 16.2
```

## Pull Request Guidelines

- Keep PRs focused on a **single change**
- Write a clear description of what changed and why
- Include screenshots or videos for UI changes
- Reference related issues with `Closes #123` or `Fixes #123`
- Update translations if your change adds or modifies user-facing text
- Ensure the build and type checks pass before requesting review

## Questions?

If you have questions about contributing, feel free to open a [discussion](https://github.com/orgs/bulwarkmail/discussions) or reach out through GitHub issues.
