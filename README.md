# Northstar Payments API

Northstar Payments API is a small TypeScript service used by the payments platform team to look up transaction state during order support and reconciliation workflows.

## Service overview

The service exposes a health probe and a read-only payment lookup endpoint. Payment data is represented by an in-memory fixture for local development, which keeps the service easy to run without additional infrastructure.

## Local setup

Requirements: Node.js 20 or newer and npm.

```sh
npm ci
npm run dev
```

The API listens on `http://localhost:3000` by default. `PORT`, `NODE_ENV`, and `LOG_LEVEL` can be supplied through the environment; `.env.example` documents the supported local settings.

## API examples

Check service health:

```sh
curl -i http://localhost:3000/health
```

Look up a payment:

```sh
curl -i http://localhost:3000/api/payments/pay_1001
```

Every response includes an `x-request-id` header. A caller-provided request ID is preserved for easier tracing across local tools.

## Testing and build

```sh
npm test
npm run lint
npm run build
```

The test suite contains focused service tests and HTTP-level integration coverage. The same commands are available through the `Makefile`.

## Docker

Build and run the service with Docker Compose:

```sh
docker compose up --build
```

The container runs as the unprivileged `node` user and exposes port 3000.

## Continuous integration

Pull requests and pushes to `main` run the validation workflow on GitHub-hosted runners. CI installs from the lockfile, lints the TypeScript source, runs tests, and verifies the production build.

## Project layout

```text
src/          application and HTTP routes
tests/        unit and integration coverage
scripts/ci/   repeatable CI entry points
config/       environment-specific defaults
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution workflow.
