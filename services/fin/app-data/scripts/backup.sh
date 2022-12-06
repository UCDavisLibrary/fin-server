#! /bin/bash

set -e
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $ROOT_DIR

source ./config.sh

mkdir -p $ROOT_DIR/backup
cd $ROOT_DIR/backup
rm -rf *

fin io export --use-fcpaths /application/$APP_NAME

cd application

zip -r ./* ../fcrepo-app-backup.zip
gsutils cp ../fcrepo-app-backup.zip $GOOGLE_CLOUD_BUCKET/$DATA_ENV/$APP_NAME-backup.zip

rm -rf *