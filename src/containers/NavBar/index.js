import React from 'react';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.css';

const NavBar = (props) =>  {
  const cartItemsQuantity = props.cart.ids.length;

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/top-5">Top-5 Products</Link></li>
      <li className="quantity-line">
        <Link to="/cart">Your Cart</Link>
        {cartItemsQuantity ?
          <div className="cart-quantity" >{cartItemsQuantity}</div>
          :
          null
        }
      </li>
    </ul>
  );
};

export default connect(({ cart }) => ({ cart }))(NavBar);
