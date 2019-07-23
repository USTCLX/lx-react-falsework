import React, { Component } from 'react';
import Son from './Son';
import ThemeContext from './context';
import tools from '../../../common';
import './style.scss';

export default class Root extends Component {
    constructor() {
        super();
        this.state = {
            num: 1,
            colorAdd: this.colorAdd,
        };
    }

    colorAdd = () => {
        this.setState({
            num: this.state.num + 1,
        });
    };

    onClick = () => {
        console.log('father click');
        const add = tools.pop();
        console.log('add', add(1, 2, 3));
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <div className="father" onClick={this.onClick}>
                    Father {this.state.num}
                    <Son />
                </div>
            </ThemeContext.Provider>
        );
    }
}
