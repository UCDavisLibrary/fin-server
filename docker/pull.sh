#! /bin/bash

BUILD_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $BUILD_DIR

source ./config.sh

# He doesn't version this, make sure you have the latest
docker pull tesseractshadow/tesseract4re:latest

for image in ${DOCKER_IMAGES[@]}; do
  docker pull $image
done