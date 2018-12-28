import React, { Component } from 'react'

export default class Timer extends Component {
    constructor() {
        super();
        
        var today = new Date()
        this.state = {
            date: today
        }
    }

    render(){
        return (
        <div className="date"> {this.state.today}</div>
        )}
}

