#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

ES_REPO_HASH=$(git log -1 --pretty=%h .)
ES_REPO_TAG=$(git describe $ES_REPO_HASH)

docker build \
  --cache-from $UCD_LIB_DOCKER_ORG/$ELASTIC_SEARCH_NAME:$ELASTIC_SEARCH_VERSION \
  --build-arg REPO_HASH=${ES_REPO_HASH} \
  --build-arg REPO_TAG=${ES_REPO_TAG} \
  -t $UCD_LIB_DOCKER_ORG/$ELASTIC_SEARCH_NAME:$ELASTIC_SEARCH_VERSION \
  .