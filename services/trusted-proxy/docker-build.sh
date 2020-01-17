#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

TRUSTED_PROXY_REPO_HASH=$(git log -1 --pretty=%h .)
TRUSTED_PROXY_REPO_TAG=$(git describe $TRSUTED_PROXY_REPO_HASH)

docker build \
  --build-arg NODE_UTILS_VERSION=${NODE_UTILS_VERSION} \
  --build-arg REPO_HASH=${TRUSTED_PROXY_REPO_HASH} \
  --build-arg REPO_TAG=${TRUSTED_PROXY_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$TRUSTED_PROXY_NAME:$TRUSTED_PROXY_VERSION \
  .