#!/usr/bin/env bash
set -euo pipefail

echo "Running unit checks"
npm run lint
npm run test:unit
