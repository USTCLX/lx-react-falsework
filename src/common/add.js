/*
 * @Author: lixiang
 * @Date: 2019-08-04 12:59:06
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-08-04 14:29:19
 */

let count = 0;

console.log('add module installed');

export const add = (...args) => {
  count++;
  return args.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

export const getCount = () => {
  console.log('count', count);
  return count;
};
