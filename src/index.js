/*
 * @Author: lixiang 
 * @Date: 2019-01-30 14:34:25 
 * @Last Modified by: lixiang
 * @Last Modified time: 2019-01-30 23:59:25
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = {
        count: 0
    }

    onClick = () => {
        console.log('keke');
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