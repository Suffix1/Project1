import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1 className="App-title">Welcome to React</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <title />
        </main>
      </div>
    );
  }
}

export default App;
