#! /bin/bash

UCD_LIB_DOCKER_ORG=ucd-lib

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

VERSION=$(cat package.json | jq --raw-output .version)
NODE_UTILS_VERSION=$(cat ../node-utils/package.json | jq --raw-output .version)

REPO_HASH=$(git log -1 --pretty=%h .)
REPO_TAG=$(git describe $REPO_HASH)

docker build \
  --build-arg NODE_UTILS_VERSION=${NODE_UTILS_VERSION} \
  --build-arg REPO_HASH=${REPO_HASH} \
  --build-arg REPO_TAG=${REPO_TAG} \
  -t UCD_LIB_DOCKER_ORG/fin-ucd-lib-client:$VERSION \
  .