#! /bin/bash

rm -rf dist
mkdir dist


cp -r public/images dist/
cp -r public/js dist/
cp -r public/loader dist/

cp public/index.html dist/
cp public/jwt.html dist/

webpack --config webpack-dist.config.js