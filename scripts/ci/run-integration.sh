#!/usr/bin/env bash
set -euo pipefail

echo "Running HTTP integration checks"
npm run test:integration -- --reporter=verbose
