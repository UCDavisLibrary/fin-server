#! /bin/bash

rm -rf dist
mkdir dist


cp -r public/images dist/
cp -R -L public/loader dist/

cp public/index.html dist/
cp public/jwt.html dist/
cp public/ie.html dist/
cp public/manifest.json dist/

webpack --config webpack-dist.config.js