#!/usr/bin/env bash

rm -rf ./node_modules
rm -rf ./source
find . -name '.*' -maxdepth 1 -delete
rm composer.json
rm composer.lock
rm package.json
rm package-lock.json
rm phpcs.xml
rm readme.md
rm webpack.config.js
