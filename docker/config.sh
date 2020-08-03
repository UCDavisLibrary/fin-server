#########
# BUILD CONFIG
#
# If there is no packege.json file, the version is defined here.
# All container names are defined here
#########

UCD_LIB_DOCKER_ORG=ucdlib

ELASTIC_SEARCH_NAME=fin-elasticsearch
ELASTIC_SEARCH_VERSION=1.0.0

FCREPO_NAME=fin-fcrepo
FCREPO_VERSION=1.0.0

POSTGRES_NAME=fin-postgres
POSTGRES_VERSION=1.0.0

NODE_UTILS_NAME=fin-node-utils
NODE_UTILS_VERSION=$(cat ../node-utils/package.json | jq --raw-output .version)

SERVER_NAME=fin-server
SERVER_VERSION=$(cat ../server/package.json | jq --raw-output .version)

UCD_CORE_SERVER_VERSION=1.0.0
UCD_CORE_SERVER_NAME=fin-ucd-core-server

CAS_NAME=fin-cas
CAS_VERSION=$(cat ../services/cas/package.json | jq --raw-output .version)

ESSYNC_NAME=fin-essync
ESSYNC_VERSION=$(cat ../services/essync/package.json | jq --raw-output .version)

LORIS_NAME=fin-loris
LORIS_VERSION=1.0.1

TESSERACT_NAME=fin-tesseract
TESSERACT_VERSION=$(cat ../services/tesseract/package.json | jq --raw-output .version)

TRUSTED_PROXY_NAME=fin-trusted_proxy
TRUSTED_PROXY_VERSION=$(cat ../services/trusted-proxy/package.json | jq --raw-output .version)

UCD_LIB_CLIENT_NAME=fin-ucd-lib-client
UCD_LIB_CLIENT_VERSION=$(cat ../services/ucd-lib-client/package.json | jq --raw-output .version)

DOCKERFILE_DIRS=(../elastic-search  ../fcrepo ../postgres ../node-utils \
                ../server ../ucd-core-server ../services/cas ../services/essync \
                ../services/loris ../services/tesseract ../services/trusted-proxy \
                ../services/ucd-lib-client)

DOCKER_IMAGES=(
  $UCD_LIB_DOCKER_ORG/$ELASTIC_SEARCH_NAME:$ELASTIC_SEARCH_VERSION
  $UCD_LIB_DOCKER_ORG/$FCREPO_NAME:$FCREPO_VERSION
  $UCD_LIB_DOCKER_ORG/$POSTGRES_NAME:$POSTGRES_VERSION
  $UCD_LIB_DOCKER_ORG/$NODE_UTILS_NAME:$NODE_UTILS_VERSION
  $UCD_LIB_DOCKER_ORG/$SERVER_NAME:$SERVER_VERSION
  $UCD_LIB_DOCKER_ORG/$UCD_CORE_SERVER_NAME:$UCD_CORE_SERVER_VERSION
  $UCD_LIB_DOCKER_ORG/$CAS_NAME:$CAS_VERSION
  $UCD_LIB_DOCKER_ORG/$ESSYNC_NAME:$ESSYNC_VERSION
  $UCD_LIB_DOCKER_ORG/$LORIS_NAME:$LORIS_VERSION
  $UCD_LIB_DOCKER_ORG/$TESSERACT_NAME:$TESSERACT_VERSION
  $UCD_LIB_DOCKER_ORG/$TRUSTED_PROXY_NAME:$TRUSTED_PROXY_VERSION
  $UCD_LIB_DOCKER_ORG/$UCD_LIB_CLIENT_NAME:$UCD_LIB_CLIENT_VERSION
)