import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="logo">Math Magicians</h1>
    <nav className="navigation">
      <ul className="ul">
        <li className="list">
          <NavLink to="/home" className={({ isActive }) => `link ${(isActive ? 'active' : '')}`}>Home</NavLink>
        </li>
        <li className="list">
          <NavLink to="/calculator" className={({ isActive }) => `link ${(isActive ? 'active' : '')}`}>Calculator</NavLink>
        </li>
        <li className="list">
          <NavLink to="/quote" className={({ isActive }) => `link ${(isActive ? 'active' : '')}`}>Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
