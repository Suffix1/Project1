import React, { Component } from 'react';
import UserBoard from './component/UserBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
         <UserBoard content = "Userboard"/>
        
        </main>
        </div>
    );
  }
}

export default App;
