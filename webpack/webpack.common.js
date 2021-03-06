/*
 * @Author: lixiang
 * @Date: 2019-02-24 21:13:07
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-07-18 15:29:22
 */

const { ENV, SOURCE_ENTRY, DIST_DIR } = require('./config');

module.exports = {
    mode: ENV,

    entry: SOURCE_ENTRY,

    output: {
        path: DIST_DIR,
        filename: '[name].[hash:16].js',
    },
};
