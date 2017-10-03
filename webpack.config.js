const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');


// const webpack = require('webpack');
// const fs = require('fs');
// const preloaderCSS = fs.readFileSync('./src/styles/preloader.css');
// const preloader = require('./src/styles/preloader.css');



const $paths = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  context: $paths.src,
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: $paths.dist,
  },
  devtool: 'source-map',
  devServer: {
    port: 8000,
  },
  resolve: {
    alias: {
      'framework':path.join(__dirname, 'src/framework')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.pug',
    }),
    // new JavaScriptObfuscator ({
    //   rotateUnicodeArray: true
    // }, ['excluded_bundle_name.js'])
  ],
  module: {
    rules: [
      // {
      //   test: /\.pug$/,
      //   loader: 'pug-loader',
      //   options: {
      //     pretty: true,
      //   },
      // },
      {
        test: /\.pug$/,
        exclude: ['/node_modules/'],
        use: [
          'html-loader',
          {
            loader: 'pug-html-loader',
            query: {
              data: {
                // preloaderCSS: preloaderCSS,
              },
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.styl$/,
        // include: paths,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'stylus-loader',
        ],
      },
      {
        test: /\.css$/,
        // include: paths,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime'],
          },
        },
      },
    ],
  },
};
