#! /bin/bash

ORG=ucdlib

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/../../fuseki

TAG_VERSION=$(cat ./version)

cd jena-fuseki
IMAGE_NAME=fin-fuseki

echo "Creating docker image $ORG/$IMAGE_NAME:$TAG_VERSION"
docker build -t $ORG/$IMAGE_NAME:$TAG_VERSION .
docker push $ORG/$IMAGE_NAME:$TAG_VERSION

# cd ../jena
# IMAGE_NAME=fin-jena

# TAG_VERSION=$(cat ./version)

# echo "Creating docker image $ORG/$IMAGE_NAME:$TAG_VERSION"
# docker build -t $ORG/$IMAGE_NAME:$TAG_VERSION .
# docker push $ORG/$IMAGE_NAME:$TAG_VERSION
