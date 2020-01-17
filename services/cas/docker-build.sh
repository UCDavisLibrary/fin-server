#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

CAS_REPO_HASH=$(git log -1 --pretty=%h .)
CAS_REPO_TAG=$(git describe $CAS_REPO_HASH)

docker build \
  --build-arg NODE_UTILS_VERSION=${NODE_UTILS_VERSION} \
  --build-arg REPO_HASH=${CAS_REPO_HASH} \
  --build-arg REPO_TAG=${CAS_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$CAS_NAME:$CAS_VERSION \
  .