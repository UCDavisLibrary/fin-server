#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

UCD_LIB_CLIENT_REPO_HASH=$(git log -1 --pretty=%h .)
UCD_LIB_CLIENT_REPO_TAG=$(git describe $UCD_LIB_CLIENT_REPO_HASH)

docker build \
  --cache-from $UCD_LIB_DOCKER_ORG/$UCD_LIB_CLIENT_NAME:$UCD_LIB_CLIENT_VERSION \
  --build-arg NODE_UTILS_VERSION=${NODE_UTILS_VERSION} \
  --build-arg REPO_HASH=${UCD_LIB_CLIENT_REPO_HASH} \
  --build-arg REPO_TAG=${UCD_LIB_CLIENT_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$UCD_LIB_CLIENT_NAME:$UCD_LIB_CLIENT_VERSION \
  .