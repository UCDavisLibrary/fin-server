let {config} = require('@ucd-lib/fin-node-utils');

let env = process.env.FIN_ENV || 'dev';

let clientPackage = require('./client/public/package.json');

config.server.appRoutes = ['about', 'collection', 'record', 'search'];
config.server.assets = (env === 'prod') ? 'dist' : 'public';
config.server.title = 'UC Davis Library Digital Collections';
config.server.description = 'The UC Davis Digital Collections is a locally developed digital repository that was designed to store and manage the digital assets of UC Davis. These Digital Collections are intended to increase access to previously undiscoverable digital assets held by the University Library.';

config.client = {
  versions : {
    bundle : clientPackage.version,
    loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
  }
}

config.elasticsearch.fields = {
  exclude : ['indexableContent', 'indexableContents'],
  fill : ['hasPart', 'associatedMedia', 'caption', 'transcript']
}

module.exports = config;