import React, { Component } from 'react';
import Title from './components/Title';
import Scoreboard from './components/Scoreboard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Title content = "Title"/>
        </header>
        <main>
          <Scoreboard />
        </main>
      </div>
    );
  }
}

export default App;
