import React, { Component } from 'react';
import './App.css';
import CheckoutButton from './components/CheckoutButton';
import CartItem from './components/CartItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>

        <main>
          <CheckoutButton/>
          <CartItem/>
          
        </main>
      </div>
    );
  }
}

export default App;
