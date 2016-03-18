'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    app: './app/js/app.js'
  },
  // [
  //   // 'webpack-dev-server/client?http://localhost:8080',
  //   './app/js/phone' // boot.js 是進入點
  // ],

  //
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: '[name].js',
    publicPath: '/static/'
  },

  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ],

  //
  resolve: {
    alias: {
      // 'redux': path.join(__dirname, '..', '..', 'src')
      // 'redux': 'redux'
    },
    // require() 時不用加 .suffix
    extensions: ['', '.js']
  },

  // jx: 記得設定 babel 的 stage=0 才支援最新 es7 語法
  module: {
    loaders: [

      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, 'app')
      },
      // {
      //   test: /\.jsx?$/,
      //   loaders: ['babel?stage=0'],
      //   // include: path.join(__dirname, '..', '..', 'src')
      // },

      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'app','scss')
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      }
    ]
  }
};