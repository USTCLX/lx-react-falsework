/*
 * @Author: lixiang
 * @Date: 2019-02-20 23:05:58
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-05-28 08:52:58
 */

import React, { Component } from 'react';
import event from '../../utils/event';
import './style.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);
    event.on('event', (data) => {
      console.log('data', data);
    });
  }

  onClick = () => {
    this.props.onClick && this.props.onClick();
  }

  render() {
    return <button className='primary' onClick={this.onClick}>{this.props.children}</button>;
  }
}
