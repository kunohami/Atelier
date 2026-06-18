# CI Pipeline

Runs automatically on every pull request targeting `main`.

## Steps

### 1. Install dependencies — `npm ci`
Uses the lock file (`package-lock.json`) to install exact versions. Faster and more reproducible than `npm install` — if the lock file is missing or inconsistent, this fails loudly on purpose.

### 2. Lint — `npm run lint`
Runs ESLint via Angular's toolchain. Catches code style issues, unused imports, and Angular-specific mistakes (e.g. missing signals, incorrect decorator usage) before they reach review.

### 3. Test — `npm run test:ci`
Runs the Vitest suite once (no watch mode). Tests live in `*.spec.ts` files next to the components they cover. A failed test blocks the merge.

### 4. Build — `npm run build`
Produces a production bundle in `dist/`. Catches type errors and template errors that aren't caught at lint time. If it builds, the app is deployable.

## Workflow file
`.github/workflows/ci.yml`

## Why this order?
Lint is cheapest, build is most expensive. Failing fast on lint avoids running slow steps unnecessarily.
