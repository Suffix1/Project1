import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CartItem extends PureComponent {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired
    }


render() {
    return <li>
        <b>Name:</b>{this.props.name}
        <b>Price:</b>{this.props.price}
        <b>Quantitiy:</b>{this.props.quantity}
        <button onClick={this.props.onPlusClick}>+</button>
    </li>
    }
}
