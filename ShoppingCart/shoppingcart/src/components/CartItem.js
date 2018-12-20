import React, { Component } from 'react'

export default class CartItem extends Component {
    state = {
        products: [
            {
                id: 1,
                name: "Prada Shoes",
                price: 570
            },
            {
                id: 2,
                name: "Rolex Watch",
                price: 649
            },
            {
                id: 3,
                name: "Paper clips",
                price: 0.1
            }
        ]
    }
    render() {
        return (
            <div className="shopping-list">
            <h1>Shopping List</h1>
            <ul>{this.state.products}</ul>
            </div>
        )

    }
}