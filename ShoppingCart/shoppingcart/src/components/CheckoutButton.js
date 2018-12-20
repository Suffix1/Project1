import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CheckoutButton extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }
    
    render() {
        return (
        <button className="checkout-button" onClick={this.props.onClick}>Checkout Item</button>
        )}
}