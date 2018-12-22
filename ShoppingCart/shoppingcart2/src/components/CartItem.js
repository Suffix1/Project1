import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CartItem extends PureComponent {
    static Proptypes ={
        id: PropTypes.number.isRequired,
        Name: PropTypes.string.isRequired,
        Price: PropTypes.number.isRequired,
        Quantity: PropTypes.number.isRequired
    }

    render() {
        return (
            <ul>
                <b>Name:</b>{this.props.name}
                <b>Price:</b>{this.props.price}
                <b>Quantity:</b>{this.props.quantity}
            </ul>
            )
    }
}