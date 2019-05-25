const webpackBaseConfig = require('./webpack.prod');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

webpackBaseConfig.plugins.push(
  new BundleAnalyzerPlugin()
);

module.exports = webpackBaseConfig;