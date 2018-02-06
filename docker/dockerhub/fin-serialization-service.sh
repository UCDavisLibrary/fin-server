#! /bin/bash

ORG=ucdlib
IMAGE_NAME=fin-serialization-service

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../../services/serialization

TAG_VERSION=$(node -e "console.log(require('./package.json').version)")

echo "Creating docker image $ORG/$IMAGE_NAME:$TAG_VERSION"
docker build -t $ORG/$IMAGE_NAME .
docker push $ORG/$IMAGE_NAME