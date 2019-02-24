const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';

const SOURCE_DIR = path.resolve(__dirname, 'src');

module.exports = {
	mode: 'development',

	entry: path.resolve(__dirname, 'src', 'index'),

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[hash:16].js'
	},

	devtool: IS_PROD ? false : 'cheap-eval-source-map',

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
					IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					{ loader: 'sass-loader', options: { includePaths: [SOURCE_DIR] } }
				]
			}
		]
	},

	plugins: [
		// 热更新
		new webpack.HotModuleReplacementPlugin(),
		// 清空dist
		new CleanWebpackPlugin(['dist']),
		// html模版
		new HtmlWebpackPlugin({
			title: 'react前端脚手架',
			filename: path.resolve(__dirname, 'dist', 'index.html'),
			template: path.resolve(__dirname, 'src', 'index.ejs'),
		}),
		// mini-css
		new MiniCssExtractPlugin({
			filename: '[name].[hash:16].css',
			chunkFilename: '[id].css'
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
}