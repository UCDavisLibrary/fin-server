const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var modern = {
    entry: './public/elements/fin-app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target : 'web',
    resolve : {
      modules: [path.resolve(__dirname, 'public', 'node_modules')]
    },
    module : {
        rules: [
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                  attrs: false
              }
            }
          }
        ]
    },
    plugins: [
      new UglifyJSPlugin()
    ]
};

var ie =  {
    entry: './public/elements/fin-app.js',
    output: {
        filename: 'ie-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target : 'web',
    resolve : {
      modules: [path.resolve(__dirname, 'public', 'node_modules')]
    },
    module : {
      rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
                attrs: false
            }
          }
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    plugins: [
      new UglifyJSPlugin()
    ]
};

module.exports = [modern, ie];