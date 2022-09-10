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
      <div className="calculator">
        <div className="display">
          <p className="calculation">0</p>
        </div>
        <div className="keypad">
          {
            // eslint-disable-next-line react/no-array-index-key
            this.keysArray.map((each, index) => <button key={index} type="button" className={`button ${each === '0' ? 'zero-btn' : ''} ${['+', '-', 'x', '÷', '='].includes(each) ? 'operation-btn' : ''}`}>{each}</button>)
          }
        </div>
      </div>
    );
  }
}

export default Calculator;
