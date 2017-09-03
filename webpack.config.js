// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const $paths = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  context: $paths.src,
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: $paths.dist
  },
  devtool: 'eval',
  devServer: {
    port: 8008
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.pug'
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  }
};
