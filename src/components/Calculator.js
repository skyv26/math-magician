import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.keysArray = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler = (e) => {
    const { textContent } = e.target;
    console.log(calculate(this.state, textContent));
  }

  render() {
    const { total } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          <p className="calculation">{total ?? 0}</p>
        </div>
        <div className="keypad">
          {
            // eslint-disable-next-line react/no-array-index-key
            this.keysArray.map((each, index) => (<button key={index} type="button" className={`button ${each === '0' ? 'zero-btn' : ''} ${['+', '-', 'x', '÷', '='].includes(each) ? 'operation-btn' : ''}`.trim()} onClick={(e) => { this.buttonClickHandler(e); }}>{each}</button>))
          }
        </div>
      </div>
    );
  }
}

export default Calculator;
