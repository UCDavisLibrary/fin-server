#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

POSTGRES_REPO_HASH=$(git log -1 --pretty=%h .)
POSTGRES_REPO_TAG=$(git describe $POSTGRES_REPO_HASH)

docker build \
  --build-arg REPO_HASH=${POSTGRES_REPO_HASH} \
  --build-arg REPO_TAG=${POSTGRES_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$POSTGRES_NAME:$POSTGRES_VERSION \
  .