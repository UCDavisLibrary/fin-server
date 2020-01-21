#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

FCREPO_REPO_HASH=$(git log -1 --pretty=%h .)
FCREPO_REPO_TAG=$(git describe $FCREPO_REPO_HASH)

docker build \
  --cache-from $UCD_LIB_DOCKER_ORG/$FCREPO_NAME:$FCREPO_VERSION \
  --build-arg REPO_HASH=${FCREPO_REPO_HASH} \
  --build-arg REPO_TAG=${FCREPO_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$FCREPO_NAME:$FCREPO_VERSION \
  .