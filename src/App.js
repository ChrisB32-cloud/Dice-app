import React, { Component } from 'react';
import RollDice from './RollDice';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Dice App</h1>
        <RollDice />
      </div>
    );
  }
}

export default App;
