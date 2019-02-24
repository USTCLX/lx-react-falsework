const webpackBaseConfig = require('../webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

webpackBaseConfig.plugins.push(
  new BundleAnalyzerPlugin()
)

module.exports = webpackBaseConfig;