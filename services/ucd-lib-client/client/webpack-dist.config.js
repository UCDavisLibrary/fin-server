const path = require('path');

let configs = require('@ucd-lib/cork-app-build').dist({
  // root directory, all paths below will be relative to root
  root : __dirname,
  entry : 'public/elements/fin-app.js',
  // folder where bundle.js and ie-bundle.js will be written
  dist : 'dist/js',
  ie : 'ie-bundle.js',
  clientModules : 'public/node_modules'
});

// add .xml and .csl loading support
configs.forEach(config => {
  config.module.rules.push({
    test: /\.(xml|csl)$/,
    use: [ 'raw-loader']
  });

  config.output.publicPath = '/js/'
  config.output.chunkFilename = '[name].'+config.output.filename;
});

// add dynamic loader plugin for ie
configs[1].module.rules.forEach(plugin => {
  if( !plugin.use ) return;
  if( plugin.use.loader !== 'babel-loader' ) return;
  plugin.use.options.plugins = ["syntax-dynamic-import"];
});



module.exports = configs;