let {config} = require('@ucd-lib/fin-node-utils');

config.server.appRoutes = ['search', 'record'];
config.server.assets = 'public'

module.exports = config;