/*
 * @Author: lixiang
 * @Date: 2019-02-20 23:05:58
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-02-24 10:47:31
 */

import React, { Component } from 'react';
import './style.scss';

export default class Button extends Component {

  onClick = () => {
    this.props.onClick && this.props.onClick();
  }

  render() {
    return <button className='primary' onClick={this.onClick}>Click me</button>
  }
}
