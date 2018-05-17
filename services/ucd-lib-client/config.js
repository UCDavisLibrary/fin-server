let {config} = require('@ucd-lib/fin-node-utils');

let env = process.env.FIN_ENV || 'dev';

let clientPackage = require('./client/public/package.json');

config.server.appRoutes = ['search', 'record'];
config.server.assets = (env === 'prod') ? 'dist' : 'public';
config.client = {
  versions : {
    bundle : clientPackage.version,
    loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
  }
}

module.exports = config;