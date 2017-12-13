#! /bin/bash

rm -rf dist
mkdir dist

mkdir dist/webcomponentsjs
cp -r public/webcomponentsjs/*.js dist/webcomponentsjs/
mkdir dist/images
cp -r public/images dist/

cp public/index.html dist/
cp public/jwt.html dist/

webpack --config webpack-dist.config.js