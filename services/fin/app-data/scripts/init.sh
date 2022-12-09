#! /bin/bash

set -e
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $ROOT_DIR

source ./config.sh

# Probe, root container
STATUS=$(fin http get -P s /application)
while [[ $STATUS != "200" ]]; do
  sleep 1
  STATUS=$(fin http get -P s /application)
done

# Probe, it init container
JSONLD=$(fin http get -P s -H "Accept: application/ld+json" /application/$APP_NAME)
if [[ $JSONLD == "404" ]]; then
  echo "No container found for /application/${APP_NAME}, running restore"
  ./restore.sh
else
  JSONLD=$(fin http get -P b -H "Accept: application/ld+json" /application/$APP_NAME)
  INIT_NODE=$(echo $JSONLD | jq -r ".[] | select(.[\"@id\"]==\"${FCREPO_HOST}/fcrepo/rest/application/${APP_NAME}#fininit\") ")
  if [[ $INIT_NODE == "" ]]; then
    echo "No #fininit node found for /application/${APP_NAME}, running restore"
    ./restore.sh
  else
    echo "#fininit node found for /application/${APP_NAME}"
  fi
fi