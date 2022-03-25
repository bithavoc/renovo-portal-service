#!/bin/sh

npm install
npm run importer

sleep_secs=5
echo "sleeping ${sleep_secs}s before finishing"
sleep $sleep_secs
