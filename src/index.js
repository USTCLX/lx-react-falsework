/*
 * @Author: lixiang
 * @Date: 2019-01-30 14:34:25
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-09-22 20:57:09
 */

import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/example';
import { hot } from 'react-hot-loader/root';

// const HotApp = hot(App);

ReactDOM.render(<App />, document.getElementById('app'));
