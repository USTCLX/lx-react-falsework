/*
 * @Author: lixiang
 * @Date: 2019-01-30 14:34:25
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-07-24 21:29:51
 */

import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/example';
import { hot } from 'react-hot-loader/root';

const HotApp = hot(App);

import(/* webpackChunkName: "async" */ './async').then(({ default: add }) => {
    console.log('dynamic import');
    console.log('add', add(1, 2, 3));
});

ReactDOM.render(<HotApp />, document.getElementById('app'));
