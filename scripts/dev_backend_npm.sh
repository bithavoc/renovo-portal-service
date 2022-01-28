#!/bin/sh
set -e

./docker-compose run --rm backend scripts/dev_inner_backend_npm.sh $@
