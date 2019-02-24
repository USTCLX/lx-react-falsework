const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { ENV, SOURCE_DIR, SOURCE_ENTRY, DIST_DIR, ROOT_DIR } = require('./config');

module.exports = {
  mode: ENV,

  entry: SOURCE_ENTRY,

  output: {
    path: DIST_DIR,
    filename: '[name].[hash:16].js'
  },

  devtool: 'source-map',

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
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'sass-loader', options: { includePaths: [SOURCE_DIR] } }
        ]
      }
    ]
  },

  plugins: [
    // 清空dist
    new CleanWebpackPlugin([DIST_DIR], {
      root: ROOT_DIR,
    }),

    // html模版
    new HtmlWebpackPlugin({
      title: 'react前端脚手架',
      filename: path.resolve(DIST_DIR, 'index.html'),
      template: path.resolve(SOURCE_DIR, 'index.ejs'),
    }),

    // mini-css
    new MiniCssExtractPlugin({
      filename: '[name].[hash:16].css',
      chunkFilename: '[id].css'
    })
  ]

}