import React, { Component } from 'react';
import Root from './context';

export default class App extends Component {
    state = {
        count: 1,
        showCB: true,
    };

    render() {
        return <Root />;
    }
}
