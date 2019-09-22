import React, { Component } from 'react';
import ThemeContext from './context';
export default class GrandSon extends Component {
  static contextType = ThemeContext;

  onClick = () => {
    const { colorAdd } = this.context;
    colorAdd();
  };

  render() {
    return (
      <div className="grandSon" onClick={this.onClick}>
        GrandSon {this.context.num}
      </div>
    );
  }
}
