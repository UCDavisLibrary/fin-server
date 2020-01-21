#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

NODE_UTILS_VERSION="$(cat package.json | jq --raw-output .version)"

docker build \
  --cache-from $UCD_LIB_DOCKER_ORG/$NODE_UTILS_NAME:$NODE_UTILS_VERSION \
  -t $UCD_LIB_DOCKER_ORG/$NODE_UTILS_NAME:$NODE_UTILS_VERSION \
  .