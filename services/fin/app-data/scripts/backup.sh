#! /bin/bash

set -e
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $ROOT_DIR

source ./config.sh

mkdir -p $ROOT_DIR/backup
cd $ROOT_DIR/backup
rm -rf *

# export from fcrepo
fin io export --use-fcpaths /application/$APP_NAME

# zip
zip -r fcrepo-app-backup.zip ./* 

# setup gs utils
gcloud auth login --quiet --cred-file=${GOOGLE_APPLICATION_CREDENTIALS}
gcloud config set project $GOOGLE_CLOUD_PROJECT

# updaload
gsutil cp fcrepo-app-backup.zip gs://$GOOGLE_CLOUD_BUCKET/$DATA_ENV/$APP_NAME-backup.zip

rm -rf *