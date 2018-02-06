#! /bin/bash

ORG=ucdlib
IMAGE_NAME=fin-server

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../../server

docker build -t $ORG/$IMAGE_NAME .
docker push $ORG/$IMAGE_NAME