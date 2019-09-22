import React, { Component } from 'react';
import Son from './Son';
import ThemeContext from './context';
import './style.scss';

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div className="father">
          Father {this.state.num}
          <Son />
        </div>
      </ThemeContext.Provider>
    );
  }
}
