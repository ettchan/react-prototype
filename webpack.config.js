var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [APP_DIR + '/index.jsx', APP_DIR + '/theme.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test:/\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css')
  ]
}

module.exports = config;