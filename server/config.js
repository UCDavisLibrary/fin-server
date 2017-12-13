let {config} = require('@ucd-lib/fin-node-utils');

let env = process.env.DAMS_ENV || 'dev';

config.server.appRoutes = ['search', 'record'];
config.server.assets = (env === 'prod') ? 'dist' : 'public';

module.exports = config;