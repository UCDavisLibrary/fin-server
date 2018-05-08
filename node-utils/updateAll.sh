DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT=$DIR/..
cd $ROOT

VERSION=$1
FOLDERS=("server" "services/basic-auth" "services/cas" "services/essync" \
 "services/trusted-proxy" "services/ucd-lib-client" \
 "services/auto-generator-demo")

for folder in "${FOLDERS[@]}"; do
  cd $ROOT/$folder
  npm install --save @ucd-lib/fin-node-utils@$VERSION
done