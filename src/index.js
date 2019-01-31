/*
 * @Author: lixiang 
 * @Date: 2019-01-30 14:34:25 
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-01-31 16:41:35
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = {
        count: 0
    }

    onClick = () => {
        this.setState({
            count: ++this.state.count
        })
    }

    render() {
        return <div>
            <h1>Hello World {this.state.count}</h1>
            <button onClick={this.onClick}>click</button>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));