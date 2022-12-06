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

# Download
gsutils cp $GOOGLE_CLOUD_BUCKET/$DATA_ENV/$APP_NAME-backup.zip .
unzip $APP_NAME-backup.zip

# Run import
fin io import \
  --import-from-root \
  --fcrepo-path-type=subpath \
  .

# Set init flag
fin http put /application/$APP_NAME -H "content-type: text/turtle" --data-binary /dev/stdin <<'EOF'
<#fininit> a <http://digital.ucdavis.edu/schema/FinInit>;
  <http://schema.org/name> "Fin init process flag" .
EOF

rm -rf *

echo "Restore complete"