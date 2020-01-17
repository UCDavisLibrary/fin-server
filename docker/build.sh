#! /bin/bash

set -e
BUILD_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $BUILD_DIR

source ./config.sh

for dir in ${DOCKERFILE_DIRS[@]}; do
  source $dir/docker-build.sh
  cd $BUILD_DIR
done