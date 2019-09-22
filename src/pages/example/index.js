import React, { Component } from 'react';
import Root from './context';
import Hook from './hooks';

export default class App extends Component {
  data = [1, 2, 3, 4];

  render() {
    return (
      <>
        <Root />
        {this.data.map(item => {
          return <Hook key={item} data-hoteId={item} />;
        })}
      </>
    );
  }
}
