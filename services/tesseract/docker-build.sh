#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

TESSERACT_REPO_HASH=$(git log -1 --pretty=%h .)
TESSERACT_REPO_TAG=$(git describe $TESSERACT_REPO_HASH)

docker build \
  --build-arg NODE_UTILS_VERSION=${NODE_UTILS_VERSION} \
  --build-arg REPO_HASH=${TESSERACT_REPO_HASH} \
  --build-arg REPO_TAG=${TESSERACT_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$TESSERACT_NAME:$TESSERACT_VERSION \
  .