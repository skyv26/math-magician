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
      txtString: '',
      isEqual: false,
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler = (e) => {
    const { target } = e;
    const { textContent } = target;
    let { txtString, isEqual } = this.state;
    const resultant = calculate(this.state, textContent);
    if (textContent !== '=') {
      if (textContent !== '+/-') {
        txtString += textContent;
      } else {
        txtString = resultant.total;
      }
      isEqual = false;
    } else {
      isEqual = true;
      if (resultant.total) {
        txtString = resultant.total;
      }
    }

    if (textContent === 'AC') {
      this.setState({
        total: null,
        next: null,
        operation: null,
        isEqual: false,
        txtString: '',
      });
    } else {
      this.setState((prevState) => ({
        ...prevState,
        ...resultant,
        txtString,
        isEqual,
      }));
    }
  }

  render() {
    const {
      txtString,
      isEqual,
      total,
    } = this.state;
    let calculation = '';
    if (isEqual) {
      calculation = total;
    } else if (txtString.length) {
      calculation += txtString;
    } else {
      calculation = '0';
    }
    return (
      <div className="calculator">
        <div className="display">
          <p className="calculation">{calculation}</p>
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
