import React, { Component } from 'react';
import { Button } from 'antd';
import CButton from '../../component/Button';

export default class App extends Component {
  state = {
    count: 1,
    showCB: true,
  }

  onClick = () => {
    this.setState({
      count: this.state.count + 1,
      showCB: !this.state.showCB
    });
  }

  render() {
    return <div style={{ textAlign: 'center' }}>
      <h1>Hello World {this.state.count}</h1>
      <Button type='primary' onClick={this.onClick} >click me</Button>
      {this.state.showCB && <CButton>keke</CButton>}
    </div>;
  }
}