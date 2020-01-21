#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

LORIS_REPO_HASH=$(git log -1 --pretty=%h .)
LORIS_REPO_TAG=$(git describe $LORIS_REPO_HASH)

docker build \
  --cache-from $UCD_LIB_DOCKER_ORG/$LORIS_NAME:$LORIS_VERSION \
  --build-arg REPO_HASH=${LORIS_REPO_HASH} \
  --build-arg REPO_TAG=${LORIS_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$LORIS_NAME:$LORIS_VERSION \
  .