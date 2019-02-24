/*
 * @Author: lixiang 
 * @Date: 2019-01-30 14:34:25 
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-02-24 16:30:10
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './component/Button';

class App extends Component {
    state = {
        count: 0
    }

    onClick = () => {
        this.setState({
            count: this.state.count + 2
        })
    }

    render() {
        return <div>
            <h1>Hello World {this.state.count}</h1>
            <Button onClick={this.onClick} />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));