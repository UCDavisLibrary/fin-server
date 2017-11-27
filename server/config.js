let {config} = require('@ucd-lib/fin-node-utils');

config.server.appRoutes = ['search'];
config.server.assets = 'public'

module.exports = config;