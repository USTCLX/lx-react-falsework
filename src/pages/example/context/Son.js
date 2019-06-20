import React, { Component } from 'react';
import GrandSon from './GrandSon';

export default class Son extends Component {
    render() {
        return (
            <div className="son">
                Son
                <GrandSon />
            </div>
        );
    }
}
