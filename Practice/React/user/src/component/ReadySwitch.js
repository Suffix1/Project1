import React, { Component } from 'react'

export default class ReadySwitch extends Component {
    state = {ready: false}

    toggle = () => {
        this.setState({
            ready: !this.state.ready
        })
    }
    render() {
    return <div>
        <button onClick={this.toggle}>{ this.state.ready ? 'Ready!' : 'Not ready' }</button>
    </div>
    }
}
