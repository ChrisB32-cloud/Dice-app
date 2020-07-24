import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 'four',
      num2: 'four',
      rolling: false
    };

    this.newRandNum = this.newRandNum.bind(this);
  }

  newRandNum() {
    let rollNumb = Math.floor(Math.random() * 6) + 1;
    let rollNumb2 = Math.floor(Math.random() * 6) + 1;

    const wordNumsArr = ['one', 'two', 'three', 'four', 'five', 'six'];

    wordNumsArr.forEach((die, idx) => {
      if (rollNumb === idx + 1) {
        this.setState({ num: die, rolling: true });
      }
      if (rollNumb2 === idx + 1) {
        this.setState({ num2: die, rolling: true });
      }

      setTimeout(() => {
        this.setState({ rolling: false });
      }, 1000);
    });
  }

  render() {
    return (
      <div className="rolldice-container">
        <div className="rolldice">
          <Dice info={this.state.num} effect={this.state.rolling} />
          <Dice info={this.state.num2} effect={this.state.rolling} />
        </div>
        <button onClick={this.newRandNum} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling!!' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}
export default RollDice;
