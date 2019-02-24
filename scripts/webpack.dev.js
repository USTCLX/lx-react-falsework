const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');
const { SOURCE_DIR, DIST_DIR } = require('./config');

module.exports = Object.assign(commonConfig, {

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            plugins: [require('@babel/plugin-proposal-class-properties')]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'sass-loader', options: { includePaths: [SOURCE_DIR] } }
        ]
      }
    ]
  },

  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin(),

    // html模版
    new HtmlWebpackPlugin({
      title: 'react前端脚手架',
      filename: path.resolve(DIST_DIR, 'index.html'),
      template: path.resolve(SOURCE_DIR, 'index.ejs'),
    }),
  ],

  // 开发服务器配置
  devServer: {
    port: 8065,
    hot: true,
    open: true,
    contentBase: SOURCE_DIR,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}) 