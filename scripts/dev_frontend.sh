#!/bin/sh

cd repos/frontend

echo "installing deps"
npm install

echo "running dev"
npm run dev
