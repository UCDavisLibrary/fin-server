const path = require('path');
const clone = require('clone');

const BUILD_IE = true;

let config = require('@ucd-lib/cork-app-build').watch({
  // root directory, all paths below will be relative to root
  root : __dirname,
  // entry : 'public/elements/app-test.js',
  entry : 'public/elements/fin-app.js',
  // folder where bundle.js will be written
  preview : 'public',
  clientModules : 'public/node_modules'
});

// add .xml and .csl loading support
config.module.rules.push({
  test: /\.(xml|csl)$/,
  use: [ 'raw-loader']
});

// we need the main node_modules dir, still not 100% sure why :/
config.resolve.modules.push(path.resolve(__dirname, '..', 'node_modules'));

if( BUILD_IE ) {
  let ie = clone(config);

  ie.entry = ['babel-polyfill', ie.entry];
  ie.output.filename = 'ie-bundle.js';
  ie.module.rules.push({
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-env']
      }
    }
  });
  config = [config, ie];
}

module.exports = config;