#! /bin/bash

if [[ -z $DATA_ENV ]]; then
  echo "No DATA_ENV set";
  exit;
fi

set -e
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $ROOT_DIR

source ./config.sh

# Probe, root container
STATUS=$(http get -P s /application/$APP_NAME)
while [[ $STATUS != "200" ]]; do
  sleep 1
  STATUS=$(http get -P s /application/$APP_NAME)
done

# Probe, it init container
JSONLD=$(http get -P b /application/$APP_NAME)
INIT_NODE=$(echo $JSONLD | jq -r ".[] | select(.@id==\"${FCREPO_HOST}/fcrepo/rest/application/${APP_NAME}#fininit\") ")
if [[ $INIT_NODE == "" ]]; then
  echo "No #fininit node found for /application/${APP_NAME}, running restore"
  ./restore.sh
fi