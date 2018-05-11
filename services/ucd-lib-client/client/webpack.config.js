const path = require('path');
const clone = require('clone');

const BUILD_IE = true;

let configs = require('@ucd-lib/cork-app-build').watch({
  // root directory, all paths below will be relative to root
  root : __dirname,
  entry : 'public/elements/fin-app.js',
  // entry : 'public/elements/fin-app.js',
  // folder where bundle.js will be written
  preview : 'public/js',
  ie : 'ie-bundle.js',
  clientModules : 'public/node_modules'
}, BUILD_IE);

if( !Array.isArray(configs) ) configs = [config];

// add .xml and .csl loading support
configs.forEach(config => {
  config.module.rules.push({
    test: /\.(xml|csl)$/,
    use: [ 'raw-loader']
  });
});


module.exports = configs;