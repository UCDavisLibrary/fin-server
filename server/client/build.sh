#! /bin/bash

rm -rf dist
mkdir dist

mkdir dist/webcomponentsjs
cp -r public/webcomponentsjs/*.js dist/webcomponentsjs/

cp public/index.html dist/

webpack --config webpack-dist.config.js