#! /bin/bash

if [[ -z $DATA_ENV ]]; then
  echo "No DATA_ENV set";
  exit;
fi

ROOT_DIR=${ROOT_SNAPSHOT_DIR:-/snapshots}
GOOGLE_CLOUD_BUCKET=${GOOGLE_CLOUD_BUCKET:-fcrepo-app-backups}
GOOGLE_CLOUD_PROJECT=${GOOGLE_CLOUD_PROJECT:-digital-ucdavis-edu}
GOOGLE_APPLICATION_CREDENTIALS=${GOOGLE_APPLICATION_CREDENTIALS:-/etc/fin/service-account.json}
APP_NAME=${APP_NAME:-ucd-lib-client}

export FCREPO_SUPERUSER=true 
export FCREPO_DIRECT_ACCESS=true 
export FCREPO_HOST=http://fcrepo:8080