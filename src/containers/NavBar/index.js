import React from 'react';
import { Link  } from 'react-router-dom';
import './style.css';

const NavBar = (props) => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/top-5">Top-5 Products</Link></li>
    <li><Link to="/cart">Your Cart</Link></li>
  </ul>
);

export default NavBar;
