/*
 * @Author: lixiang
 * @Date: 2019-05-26 11:22:40
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-05-26 16:52:11
 */

import { isString, isFunction } from './isType';

class PubSub {
  constructor() {
    this._cache = {};
  }

  on = (event, ...fns) => {
    if (!isString(event)) {
      return;
    }
    if (!this._cache[event]) {
      this._cache[event] = [];
    }
    for (let i; i < fns.length; i++) {
      if (isFunction(fns[i])) {
        this._cache[event].push({
          fn: fns[i],
          once: false,
        });
      }
    }
  }

  once = (event, ...fns) => {
    if (!isString(event)) {
      return;
    }
    if (!this._cache[event]) {
      this._cache[event] = [];
    }
    for (let i; i < fns.length; i++) {
      if (isFunction(fns[i])) {
        this._cache[event].push({
          fn: fns[i],
          once: true,
        });
      }
    }
  }

  emit = (event, ...args) => {
    if (!isString(event)) {
      return;
    }
    if (this._cache[event]) {
      const events = this._cache[event];
      for (let i = 0; i < events.length; i++) {
        let item = events[i];
        item.fn && item.fn(...args);
        if (item.once) {
          events.splice(i, 1);
          i--;
        }
      }
    }
  }

  removeListener = (event, fn) => {
    if (this._cache[event]) {
      for (let i = 0; i < this._cache[event].length; i++) {
        if (this._cache[event][i] === fn) {
          this._cache[event].splice(i, 1);
        }
      }
    }
  }

  removeAllListeners = (event) => {
    if (this._cache[event]) {
      this._cache[event] = null;
    }
  }

}

export default new PubSub();