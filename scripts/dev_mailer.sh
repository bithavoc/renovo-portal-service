#!/bin/sh

npm install
npm run dev-mailer

sleep_secs=10
echo "sleeping ${sleep_secs}s before finishing"
sleep $sleep_secs
