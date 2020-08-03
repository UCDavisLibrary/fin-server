#! /bin/bash

set -e
BUILD_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $BUILD_DIR

source ./config.sh

for image in ${DOCKER_IMAGES[@]}; do
  docker push $image
done