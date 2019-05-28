/*
 * @Author: lixiang
 * @Date: 2019-02-20 23:05:58
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-05-28 23:59:11
 */

import React, { Component } from 'react';
import './style.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.onClick && this.props.onClick();
  }

  render() {
    return <button className='primary' onClick={this.onClick}>{this.props.children}</button>;
  }
}
