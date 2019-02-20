const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',

	entry: path.resolve(__dirname, 'src', 'index'),

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js'
	},

	// 开发服务器配置
	devServer: {
		port: 9000,
		hot: true,
		open: true,
		contentBase: path.resolve(__dirname, 'public'),
		proxy: {
			'/api': 'http://localhost:3000'
		}
	},

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
			}
		]
	},

	plugins: [
		// 热更新
		new webpack.HotModuleReplacementPlugin()
	]
}