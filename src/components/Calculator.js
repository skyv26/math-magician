import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const keysArray = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    txtString: '',
    isEqual: false,
  });

  const buttonClickHandler = (e) => {
    const { target } = e;
    const { textContent } = target;
    let { txtString, isEqual } = state;
    const resultant = calculate(state, textContent);
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
      setState({
        total: null,
        next: null,
        operation: null,
        isEqual: false,
        txtString: '',
      });
    } else {
      setState((prevState) => ({
        ...prevState,
        ...resultant,
        txtString,
        isEqual,
      }));
    }
  };

  const {
    txtString,
    isEqual,
    total,
  } = state;

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
          keysArray.map((each, index) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="button"
              className={`button ${each === '0' ? 'zero-btn' : ''} ${['+', '-', 'x', '÷', '='].includes(each) ? 'operation-btn' : ''}`}
              onClick={(e) => buttonClickHandler(e)}
            >
              {each}
            </button>
          ))
      }
      </div>
    </div>
  );
};

export default Calculator;
