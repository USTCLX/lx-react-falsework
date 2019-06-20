import React, { Component } from 'react';
import Son from './Son';
import './style.scss';

export default class Root extends Component {
    render() {
        return (
            <div className="father">
                Father
                <Son />
            </div>
        );
    }
}
