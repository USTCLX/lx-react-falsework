const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.common');
const { SOURCE_DIR, DIST_DIR, ROOT_DIR } = require('./config');


module.exports = Object.assign(commonConfig, {
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
            plugins: [
              require('@babel/plugin-proposal-class-properties'),
              [
                "import",
                {
                  "libraryName": "antd",
                  "style": 'css' // `style: true` 会加载 less 文件
                }
              ],
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'sass-loader', options: { includePaths: [SOURCE_DIR] } }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
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

}) 