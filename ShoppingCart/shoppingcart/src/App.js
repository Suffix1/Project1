import React, { PureComponent } from 'react';
import './App.css';
import CheckoutButton from './components/CheckoutButton';
import CartItem from './components/CartItem';

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
          return {...p, quantity: p.quantity +1}
          }
          return p
        })
      })
    }

    handleCheckout = () => {
      this.setState({
        totalValue: this.state.prods.reduce((accumulator, product) => {
          return accumulator + product.price * product.quantity
        }, 0)
      })
    }
    
    render() {
      return (
        <div className="App">
          <ul>
            {this.state.prods.map(p => <CartItem key={p.id} {...p} 
              onPlusClick={() => this.incrementQuantity(p.id)}/>)}
          </ul>
          <div><CheckoutButton onClick={this.handleCheckout}/></div>
          <div><b>Total value:</b> {this.state.totalValue}</div>
  
        </div>
      );
    }

  
  
}

  


export default App;
