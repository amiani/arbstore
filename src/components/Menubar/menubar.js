import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/cartbutton';

const Menubar = props => (
  <div>
    <h1>{ props.storename }</h1>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <CartButton />
  </div>
);

export default Menubar;
