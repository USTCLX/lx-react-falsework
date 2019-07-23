const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');
const { SOURCE_DIR, DIST_DIR, SOURCE_ENTRY, ASYNC_ENTRY } = require('./config');

module.exports = Object.assign(commonConfig, {
    entry: {
        index: SOURCE_ENTRY,
        async: './src/async',
    },

    devtool: 'inline-source-map',

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]|.[\\/]common/,
                    name: 'lib.bundle.js',
                    chunks: 'all',
                },
            },
        },
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
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-parameters',
                            [
                                'import',
                                {
                                    libraryName: 'antd',
                                    style: 'css', // `style: true` 会加载 less 文件
                                },
                            ],
                            'react-hot-loader/babel',
                        ],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: { includePaths: [SOURCE_DIR] },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ],
    },

    plugins: [
        // html模版
        new HtmlWebpackPlugin({
            title: 'react前端脚手架',
            filename: path.resolve(DIST_DIR, 'index.html'),
            template: path.resolve(SOURCE_DIR, 'index.ejs'),
        }),
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
    ],

    // 开发服务器配置
    devServer: {
        host: '127.0.0.1',
        port: 8065,
        hot: true,
        open: true,
        contentBase: SOURCE_DIR,
        inline: true, // inline 模式启动
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
});
