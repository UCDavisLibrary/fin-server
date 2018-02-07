#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

./fin-server.sh
./fin-fcrepo.sh
./fin-ucd-lib-client-service.sh
./fin-trusted-proxy.sh
./fin-cas-service.sh
./fin-basic-auth-service.sh
./fin-essync-service.sh
./fin-loris-service.sh
./fin-serialization-service.sh