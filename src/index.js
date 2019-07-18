/*
 * @Author: lixiang
 * @Date: 2019-01-30 14:34:25
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-07-18 22:25:53
 */

import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/example';
import { hot } from 'react-hot-loader/root';
import add from './async';

const HotApp = hot(App);

const keke = add(1, 2, 3, 4);
console.log('hahahahaha', keke);

ReactDOM.render(<HotApp />, document.getElementById('app'));
