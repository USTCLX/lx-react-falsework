/*
 * @Author: lixiang
 * @Date: 2019-05-26 12:30:37
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-05-26 22:38:07
 */

const isType = (type) => {
  return (obj) => {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
};

const isString = isType("String");

const isNumber = isType("Number");

const isObject = isType("Object");

const isFunction = isType("Function");

const isBoolean = isType("Boolean");

const isArray = isType("Array");

export { isString, isNumber, isObject, isFunction, isBoolean, isArray };