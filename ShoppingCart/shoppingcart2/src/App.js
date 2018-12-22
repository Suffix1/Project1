import React, { PureComponent } from 'react';

const products = [
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

class App extends PureComponent {
  

  state = {
    prods: products.map(p => ({...p, quantity: 0})),
    totalValue: 0
  }

incrementQuantity(productId) {
  this.setState({
    prods: this.state.prods.map(p => {
      if (p.id === productId) {
        return {...p, Quantity: p.quantity + 1}
      }
        return p
    })
  })
}


handleCheckout = () => {
  this.setState({
    totalValue: this.state.prods.reduce((accumalator, products) => {
      return accumalator + products.price * products.quantity
    }, 0)
  })
}



render() {
  return (
    <div className="App">
    <ul>
      {this.state.props.map</ul></div>
  )
}



export default App;
