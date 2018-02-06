#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

./fin-server.sh
./fin-fcrepo.sh
./fin-trusted-proxy.sh
./fin-cas-service.sh
./fin-essync-service.sh
./fin-loris-service.sh
./fin-serialization-service.sh