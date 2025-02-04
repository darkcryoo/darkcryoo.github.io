# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions are:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of this blog seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to [your-email@domain.com](mailto:your-email@domain.com).

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the requested information listed below (as much as you can provide) to help us better understand the nature and scope of the possible issue:

* Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
* Full paths of source file(s) related to the manifestation of the issue
* The location of the affected source code (tag/branch/commit or direct URL)
* Any special configuration required to reproduce the issue
* Step-by-step instructions to reproduce the issue
* Proof-of-concept or exploit code (if possible)
* Impact of the issue, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

## Preferred Languages

We prefer all communications to be in English.

## Policy

We follow the principle of [Responsible Disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure).

## Security Measures

This blog implements several security measures:

1. **Content Security Policy (CSP)**
   - Strict CSP headers to prevent XSS attacks
   - Inline scripts and styles are blocked by default
   - External resources are strictly controlled

2. **HTTPS**
   - HTTPS is enforced across all pages
   - HSTS is enabled
   - Modern TLS protocols only

3. **Dependencies**
   - Regular automated updates via Dependabot
   - Security scanning with CodeQL
   - Vulnerability monitoring

4. **Access Control**
   - Strict permissions on GitHub repository
   - Protected branches for deployment
   - Required reviews for changes

5. **Data Protection**
   - No sensitive data in repositories
   - Environment variables for secrets
   - Regular security audits

## Security Headers

We implement the following security headers:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=()
```
