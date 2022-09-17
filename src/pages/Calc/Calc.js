import React from 'react';
import Calculator from '../../components/Calculator';
import './Calc.css';

const Calc = () => (
  <section className="section section-calculator">
    <h2 className="section-heading">
      Let&apos;s do some math!
    </h2>
    <Calculator />
  </section>
);

export default Calc;
