import React, { Component } from 'react';
import Title from './components/Title';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <Title content = "Title"/>
        </main>
      </div>
    );
  }
}

export default App;
