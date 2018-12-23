import React, { Component } from 'react';
import Dogslist from './components/Dogslist'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <main><Dogslist/></main>
        </body>
      </div>
    );
  }
}

export default App;
