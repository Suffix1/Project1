import React, { Component } from 'react';
import ReadySwitch from './ReadySwitch'

export default class User extends Component {
    render() {
        return (
            <ul className='user'>
            <p className='name'><ReadySwitch/>User: <b>{this.props.name}</b> Score: <b>{this.props.score}</b></p>
        </ul> 
            
            ) 
    }
}