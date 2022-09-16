let {config} = require('@ucd-lib/fin-node-utils');

let env = process.env.FIN_ENV || 'dev';

let clientPackage = require('./client/public/package.json');

config.server.appName = process.env.FIN_APP_NAME || 'ucd-lib-client';
config.server.appRoutes = ['about', 'collection', 'record', 'search', 'browse', 'collections', 'components'];
config.server.assets = (env === 'prod') ? 'dist' : 'public';
config.server.title = 'UC Davis Library Digital Collections';
config.server.description = 'The UC Davis Digital Collections is a locally developed digital repository that was designed to store and manage the digital assets of UC Davis. These Digital Collections are intended to increase access to previously undiscoverable digital assets held by the University Library.';

let clientPackageVersion = clientPackage.version;
if( process.env.BUILD_NUM && process.env.BUILD_NUM !== '-1' ) {
  clientPackageVersion = (process.env.UCD_LIB_SERVER_REPO_TAG || '') + '.' + process.env.BUILD_NUM;
}

config.api = {
  host : process.env.API_HOST || 'http://api:3000'
};

config.client = {
  versions : {
    bundle : clientPackageVersion,
    loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
  }
};

// config.elasticsearch.fields = {
//   exclude : ['indexableContent', 'indexableContents'],
//   fill : ['hasPart', 'associatedMedia', 'caption', 'transcript']
// };

module.exports = config;