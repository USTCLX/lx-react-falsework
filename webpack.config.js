const path = require('path');

module.exports = {
	mode: 'development',

	entry: path.resolve(__dirname, './src/index'),

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js'
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
		new HtmlWebpackPlugin({
			title: 'React APP',
			filename: path.resolve(__dirname, './dist/index.html'),
			template: path.resolve(__dirname, './src/index.ejs')
		})
	]
}