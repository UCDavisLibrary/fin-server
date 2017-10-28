const path = require('path');

var modern = {
    entry: './public/elements/fin-app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
    node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
};

var ie =  {
    entry: './public/elements/fin-app.js',
    output: {
        filename: 'ie-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module : {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
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
    node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
};

module.exports = [modern, ie];