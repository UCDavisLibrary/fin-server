#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

UCD_CORE_REPO_HASH=$(git log -1 --pretty=%h .)
UCD_CORE_REPO_TAG=$(git describe $REPO_HASH)

docker build \
  --cache-from $UCD_LIB_DOCKER_ORG/$SERVER_NAME:$SERVER_VERSION \
  --build-arg FIN_SERVER_VERSION=${SERVER_VERSION} \
  --build-arg REPO_HASH=${UCD_CORE_REPO_HASH} \
  --build-arg REPO_TAG=${UCD_CORE_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$UCD_CORE_SERVER_NAME:$UCD_CORE_SERVER_VERSION \
  .