# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

"Buy Me a Chai" is a static support page project that allows creators to receive direct UPI payments. It includes a main support page and a tool (`make.html`) intended to help others generate their own support pages.

## Project Structure

- `index.html` - The primary support page.
- `style.css` - Global styles and "premium gold" theme.
- `script.js` - Logic for the payment interface, including dynamic QR code generation and clipboard actions.
- `make.html` - The support page generator (under development).
- `Assets/` - Project images, icons, and static assets.

## Development Workflow

Since this is a static HTML/CSS/JS project, there is no build or compilation step.

### Previewing Changes
To view the project, open the HTML files directly in a browser:
- Main Page: `index.html`
- Generator Tool: `make.html`

### Testing
- Manual verification in the browser is the primary method of testing.
- Check the browser console (F12) for JavaScript errors during development.
