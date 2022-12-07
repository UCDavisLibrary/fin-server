#! /bin/bash

if [[ -z $DATA_ENV ]]; then
  echo "No DATA_ENV set";
  exit;
fi

set -e
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $ROOT_DIR

source ./config.sh

echo "Running restore for $DATA_ENV/$APP_NAME";

mkdir -p $ROOT_DIR/restore
cd $ROOT_DIR/restore
rm -rf *

# setup gs utils
gcloud auth login --quiet --cred-file=${GOOGLE_APPLICATION_CREDENTIALS}
gcloud config set project $GOOGLE_CLOUD_PROJECT

# Download
gsutil cp gs://$GOOGLE_CLOUD_BUCKET/$DATA_ENV/$APP_NAME-backup.zip .
unzip $APP_NAME-backup.zip
rm $APP_NAME-backup.zip

fin http delete -p /application/$APP_NAME

# Run import
fin io import \
  --import-from-root \
  --fcrepo-path-type=subpath \
  .

CONTENT=$(fin http get -H "prefer: return=representation; omit=\"http://fedora.info/definitions/fcrepo#ServerManaged\"" -P b /application/$APP_NAME)

# Set init flag
fin http put /application/$APP_NAME -H "content-type: text/turtle" --data-binary /dev/stdin <<EOF
${CONTENT}

<#fininit> a <http://digital.ucdavis.edu/schema/FinInit>;
  <http://schema.org/name> "Fin init process flag" .
EOF

rm -rf *

echo "Restore complete"