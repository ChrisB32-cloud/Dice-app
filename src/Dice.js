import React, { Component } from 'react';
import './Dice.css';
class Dice extends Component {
  render() {
    return (
      <div className="dice-container">
        <i
          className={`dice fas fa-dice-${this.props.info} 
          ${this.props.effect ? 'shaking' : ''}
        `}
        ></i>
      </div>
    );
  }
}

export default Dice;
