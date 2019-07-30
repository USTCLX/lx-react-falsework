/*
 * @Author: lixiang
 * @Date: 2019-01-30 14:34:25
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-07-30 00:24:27
 */

import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/example';
import './_async';
// import { hot } from 'react-hot-loader/root';

// const HotApp = hot(App);
// const App = App;

// import(/* webpackChunkName: "__async" */ './async').then(({ default: add }) => {
//     console.log('dynamic import');
//     console.log('add', add(1, 2, 3));
// });


ReactDOM.render(<App />, document.getElementById('app'));
