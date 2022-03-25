#!/bin/sh

npm install
npm run importer

sleep_secs=20
echo "sleeping ${sleep_secs}s before finishing"
sleep $sleep_secs
