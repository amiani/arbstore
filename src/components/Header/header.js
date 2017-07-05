import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/cartbutton';
import './header.css';

const Header = props => (
  <header>
    <ul>
      <li><h1>{ props.storename }</h1></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><CartButton /></li>
    </ul>
  </header>
);

export default Header;
