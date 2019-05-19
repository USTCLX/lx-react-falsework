/*
 * @Author: lixiang
 * @Date: 2019-02-24 15:24:54
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-05-19 23:13:47
 */
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';
const IS_DEV = ENV === 'development';
const SOURCE_DIR = path.resolve(process.cwd(), 'src');
const SOURCE_ENTRY = path.resolve(SOURCE_DIR, 'index');
const DIST_DIR = path.resolve(process.cwd(), 'dist');
const ROOT_DIR = process.cwd();

module.exports = { ENV, IS_PROD, IS_DEV, SOURCE_DIR, SOURCE_ENTRY, DIST_DIR, ROOT_DIR };