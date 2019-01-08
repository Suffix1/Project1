import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <div>
                <h3>Input your desired time</h3>
                <input type="number"  minutes={this.props.minutes} required />
            </div>
        )
    }
}