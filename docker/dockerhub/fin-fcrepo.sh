#! /bin/bash

ORG=ucdlib
IMAGE_NAME=fin-fcrepo

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../../fcrepo

TAG_VERSION=$(cat ./version)

echo "Creating docker image $ORG/$IMAGE_NAME:$TAG_VERSION"
docker build -t $ORG/$IMAGE_NAME .
docker push $ORG/$IMAGE_NAME