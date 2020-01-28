const BUILD_IE = false;

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

if( !Array.isArray(configs) ) configs = [configs];

// add .xml and .csl loading support
configs.forEach((config, index) => {
  config.module.rules.push({
    test: /\.(xml|csl)$/,
    use: ['raw-loader']
  });

  config.output.publicPath = '/js/'
  config.output.chunkFilename = '[name].'+config.output.filename;

  if( index === 1 ) {
    // add dynamic loader plugin for ie
    config.module.rules.forEach(plugin => {
      if( !plugin.use ) return;
      if( plugin.use.loader !== 'babel-loader' ) return;
      plugin.use.options.plugins = ["syntax-dynamic-import"];
    });
  }
});

module.exports = configs;