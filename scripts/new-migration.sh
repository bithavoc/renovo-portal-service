#!/bin/sh
set -e

scripts/dev_backend_npm.sh run generate-migration database/migration/$@