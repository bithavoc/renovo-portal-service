#!/bin/sh
set -e

./docker-compose exec pgdb psql -U postgres
