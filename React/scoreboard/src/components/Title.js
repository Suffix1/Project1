import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Title extends Component {
    static PropTypes = { 
        content: PropTypes.string.isRequired, 
    }

    render() {
        return <h1>{this.props.content}</h1>
    }
    }
