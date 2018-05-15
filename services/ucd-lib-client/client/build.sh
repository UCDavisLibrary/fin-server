#! /bin/bash

rm -rf dist
mkdir dist

mkdir dist/images
cp -r public/images dist/

mkdir dist/js
cp -r public/js dist/js

mkdir dist/loader
cp -r public/loader dist/loader

cp public/index.html dist/
cp public/jwt.html dist/

webpack --config webpack-dist.config.js