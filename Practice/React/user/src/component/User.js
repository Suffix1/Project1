import React, { Component } from 'react';

export default class User extends Component {
    render() {
        return (
            <li className='user'>
            <p className='name'>{this.props.name }</p>
            <p className='score'>{this.props.score }</p>
            </li>
        )
    }
}