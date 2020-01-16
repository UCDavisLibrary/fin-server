#! /bin/bash

VERSION=$(cat package.json | jq --raw-output .version)
UCD_LIB_DOCKER_ORG=ucd-lib

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

REPO_HASH=$(git log -1 --pretty=%h .)
REPO_TAG=$(git describe $REPO_HASH)

docker build \
  --build-arg REPO_HASH=${REPO_HASH} \
  --build-arg REPO_TAG=${REPO_TAG} \
  -t UCD_LIB_DOCKER_ORG/fin-server:$VERSION \
  .