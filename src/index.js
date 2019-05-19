/*
 * @Author: lixiang 
 * @Date: 2019-01-30 14:34:25 
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-05-19 23:09:10
 */

import 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/example';
import { hot } from 'react-hot-loader/root';

const HotApp = hot(App)

ReactDOM.render(<HotApp />, document.getElementById('app'));