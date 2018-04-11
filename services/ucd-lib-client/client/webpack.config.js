const path = require('path');

module.exports = {
  entry: './public/elements/fin-app.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
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
          test: /\.(xml|csl)$/,
          use: [ 'raw-loader']
        },
        {
          test: /\.css$/,
          use: [ 'to-string-loader', 'css-loader' ]
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
    ]
  }
};