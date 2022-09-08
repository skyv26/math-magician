import React, { PureComponent } from 'react';
import './Calculator.css';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.keysArray = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];
  }

  render() {
    return (
      <div className="calculator" />
    );
  }
};

export default Calculator;