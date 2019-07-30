/*
 * @Author: lixiang
 * @Date: 2019-02-24 15:24:54
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-07-25 23:17:01
 */
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';
const IS_DEV = ENV === 'development';
const SOURCE_DIR = path.resolve(process.cwd(), 'src');
const ASYNC_DIR = path.resolve(process.cwd(), 'src', 'async');
const SOURCE_ENTRY = path.resolve(SOURCE_DIR, 'index');
const ASYNC_ENTRY = path.resolve(ASYNC_DIR, 'index');
const DIST_DIR = path.resolve(process.cwd(), 'dist');
const ROOT_DIR = process.cwd();

module.exports = {
    ENV,
    IS_PROD,
    IS_DEV,
    SOURCE_DIR,
    ASYNC_DIR,
    SOURCE_ENTRY,
    ASYNC_ENTRY,
    DIST_DIR,
    ROOT_DIR,
};
