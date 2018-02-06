#! /bin/bash

ORG=ucdlib
IMAGE_NAME=fin-loris-service

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../../services/loris

TAG_VERSION=$(cat ./version)

echo "Creating docker image $ORG/$IMAGE_NAME:$TAG_VERSION"
docker build -t $ORG/$IMAGE_NAME:$TAG_VERSION .
docker push $ORG/$IMAGE_NAME:$TAG_VERSION