#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

ESSYNC_REPO_HASH=$(git log -1 --pretty=%h .)
ESSYNC_REPO_TAG=$(git describe $ESSYNC_REPO_HASH)

docker build \
  --cache-from $UCD_LIB_DOCKER_ORG/$ESSYNC_NAME:$ESSYNC_VERSION \
  --build-arg NODE_UTILS_VERSION=${NODE_UTILS_VERSION} \
  --build-arg REPO_HASH=${ESSYNC_REPO_HASH} \
  --build-arg REPO_TAG=${ESSYNC_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$ESSYNC_NAME:$ESSYNC_VERSION \
  .