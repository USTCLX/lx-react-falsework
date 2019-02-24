/*
 * @Author: lixiang
 * @Date: 2019-02-24 15:24:54
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-02-24 17:34:38
 */
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';
const SOURCE_DIR = path.resolve(process.cwd(), 'src');
const SOURCE_ENTRY = path.resolve(SOURCE_DIR, 'index');
const DIST_DIR = path.resolve(process.cwd(), 'dist');
const ROOT_DIR = process.cwd();

module.exports = { ENV, IS_PROD, SOURCE_DIR, SOURCE_ENTRY, DIST_DIR, ROOT_DIR };