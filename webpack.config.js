const path = require('path');

module.exports = {
	mode: 'development',

	entry: path.resolve(__dirname, './src/index'),

	output: {
		filename: '[name].js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/react']
					}
				}
			}
		]
	}
}