import React, { Component } from 'react';
import { Button } from 'antd';
import { hot } from 'react-hot-loader/root';

class App extends Component {
  state = {
    count: 1
  }

  onClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <div style={{ textAlign: 'center' }}>
      <h1>Hello World {this.state.count}</h1>
      <Button type='primary' onClick={this.onClick} >click me</Button>
    </div>
  }
}

export default hot(App);