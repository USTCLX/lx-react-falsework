/*
 * @Author: lixiang
 * @Date: 2019-05-26 12:30:37
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-05-26 12:39:53
 */

const isType = (type) => {
  return (obj) => {
    return Object.prototype.toString.call(obj) === type;
  };
};

const isString = isType("[object String]");

const isNumber = isType("[object Number]");

const isObject = isType("[object Object]");

const isFunction = isType("[object Function]");

const isBoolean = isType("[object Boolean]");

const isArray = isType["[object Array]"];

export { isString, isNumber, isObject, isFunction, isBoolean, isArray };