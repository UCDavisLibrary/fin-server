const path = require('path');

let configs = require('@ucd-lib/cork-app-build').dist({
  // root directory, all paths below will be relative to root
  root : __dirname,
  entry : 'public/elements/fin-app.js',
  // folder where bundle.js and ie-bundle.js will be written
  dist : 'dist',
  clientModules : 'public/node_modules'
});

// add .xml and .csl loading support
configs.forEach(config => {
  config.module.rules.push({
    test: /\.(xml|csl)$/,
    use: [ 'raw-loader']
  });
});

// we need the main node_modules dir, still not 100% sure why :/
configs.forEach(config => {
  config.resolve.modules.push(path.resolve(__dirname, '..', 'node_modules'));
});

// for IE config, we need to inject the polyfills
// TODO: add this to build module
configs[1].entry = ['babel-polyfill', configs[1].entry];

module.exports = configs;