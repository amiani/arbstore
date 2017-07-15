import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = props => (
  <header className="site_header">
    <h1>{ props.storename }</h1>
    <nav>
      <ul className='nav_list'>
        <li><Link className='nav_link' to="/store">Store</Link></li>
        <li><Link className='nav_link' to="/about">About</Link></li>
        <li><Link className='nav_link' to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
