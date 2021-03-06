import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CheckoutButton extends PureComponent {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <button className="checkout-button" onClick={this.props.onClick}>Checkout Item</button>
        )
    }
}